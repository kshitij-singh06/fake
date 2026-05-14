// TruthScan — Fusion controller
// POST /api/fusion
//
// Accepts:
//   { text: string, sourceUrl?: string, onnxFakeScore?: number }
//
//   text          — the article text to analyse
//   sourceUrl     — the page URL (used for domain credibility scoring)
//   onnxFakeScore — fake-news likelihood [0–100] from the local ONNX model
//                   (the browser extension runs ONNX locally and sends us the score)
//
// Runs:
//   1. LLM structured claim extraction + verification (with Tavily evidence)
//   2. Google Fact Check Tools API (if key is configured)
//   3. Source domain credibility scoring
//   4. Weighted fusion of all available signals
//
// Returns a rich FusionResult object.

const axios = require('axios');
const { tryModelsInOrder } = require('../lib/modelHelpers');
const { queryGoogleFactCheck, aggregateFactCheckResults } = require('../lib/googleFactCheck');
const { scoreSourceList, scoreDomain } = require('../lib/domainCredibility');
const { runFusionEngine, computeLLMClaimScore, credibilityToFakeScore } = require('../lib/fusionEngine');
const { classifyPageType } = require('../lib/pageClassifier');

const TAVILY_SEARCH_URL = 'https://api.tavily.com/search';
const MAX_CLAIMS       = 6;   // cap to keep latency reasonable
const MAX_EVIDENCE     = 4;

// ─── Claim Extraction ─────────────────────────────────────────────────────────

function parseClaimList(rawText) {
  return rawText
    .split('\n')
    .filter((line) => /^\d+[\).]/.test(line.trim()))
    .map((line) => line.replace(/^\d+[\).\s]*/, '').trim())
    .filter(Boolean)
    .slice(0, MAX_CLAIMS);
}

async function extractClaims(text) {
  const prompt = `
Extract up to ${MAX_CLAIMS} distinct, verifiable factual claims from the article below.
Each claim must be a single, self-contained statement that can be fact-checked.
Return ONLY a plain numbered list. No explanations.

Article:
"""${text.slice(0, 4000)}"""
`;
  console.log('[TruthScan Fusion] Extracting claims...');
  const raw = await tryModelsInOrder(prompt);
  const claims = parseClaimList(raw);
  console.log(`[TruthScan Fusion] Extracted ${claims.length} claims.`);
  return claims;
}

// ─── Tavily Evidence Fetching ─────────────────────────────────────────────────

async function fetchTavilyEvidence(claim) {
  try {
    const { data } = await axios.post(
      TAVILY_SEARCH_URL,
      {
        api_key: process.env.TAVILY_API_KEY,
        query: claim,
        search_depth: 'basic',
        max_results: MAX_EVIDENCE,
        include_answer: false,
        include_raw_content: false,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    return (data.results || []).map(({ title, url, content }) => ({
      title: title || '',
      link: url || '',
      snippet: content || '',
    }));
  } catch (err) {
    console.warn(`[TruthScan Fusion] Tavily failed for claim — ${err.message}`);
    return [];
  }
}

// ─── Structured LLM Claim Verification ───────────────────────────────────────

async function verifyClaimStructured(claim, evidence) {
  const hasEvidence = evidence.length > 0;

  const prompt = hasEvidence
    ? `You are a professional fact-checker. Evaluate the claim against the provided web evidence.

Claim: "${claim}"

Evidence:
${evidence.map((e, i) => `${i + 1}. ${e.snippet.slice(0, 300)}`).join('\n')}

Respond with ONLY valid JSON (no markdown, no explanation):
{"verdict":"true","confidence":85,"reasoning":"One sentence why."}

verdict must be exactly "true", "false", or "uncertain".
confidence is an integer 0-100 reflecting how certain you are.`
    : `You are a professional fact-checker with broad general knowledge.
Evaluate this claim based solely on your knowledge.

Claim: "${claim}"

Respond with ONLY valid JSON (no markdown, no explanation):
{"verdict":"true","confidence":60,"reasoning":"One sentence why."}

verdict must be exactly "true", "false", or "uncertain".
confidence is an integer 0-100.`;

  try {
    const raw = await tryModelsInOrder(prompt);
    // Extract first JSON object from response (model may wrap it in markdown)
    const match = raw.match(/\{[\s\S]*?\}/);
    if (!match) throw new Error('No JSON in LLM response');
    const parsed = JSON.parse(match[0]);

    const verdict     = ['true', 'false', 'uncertain'].includes(parsed.verdict) ? parsed.verdict : 'uncertain';
    const confidence  = Math.min(100, Math.max(0, parseInt(parsed.confidence, 10) || 50));
    const reasoning   = parsed.reasoning || '';

    return { verdict, confidence, reasoning };
  } catch (err) {
    console.warn(`[TruthScan Fusion] LLM verification parse error: ${err.message}`);
    return { verdict: 'uncertain', confidence: 40, reasoning: 'Could not parse LLM response.' };
  }
}

// ─── Main Handler ─────────────────────────────────────────────────────────────

exports.handleFusion = async (req, res) => {
  const { text, sourceUrl = '', onnxFakeScore = null } = req.body;
  if (!text) return res.status(400).json({ error: 'text is required' });

  console.log('[TruthScan Fusion] Starting fusion pipeline...');
  console.log(`[TruthScan Fusion] sourceUrl: ${sourceUrl || '(none)'}`);
  console.log(`[TruthScan Fusion] onnxFakeScore from client: ${onnxFakeScore}`);

  // ── Step 0: Classify the page type ───────────────────────────────────────
  const pageClass = classifyPageType(sourceUrl);
  console.log(`[TruthScan Fusion] Page type: ${pageClass.type} | shouldFactCheck: ${pageClass.shouldFactCheck}`);
  console.log(`[TruthScan Fusion] Reason: ${pageClass.reason}`);

  // ── Fast-path: trusted / reference / social / commercial pages ────────────
  // These page types don't benefit from claim-checking and will produce
  // incorrect results if we try to verify their own statements externally.
  if (!pageClass.shouldFactCheck) {
    const domainCredScore = scoreDomain(sourceUrl);
    const sourceDomainScore = credibilityToFakeScore(domainCredScore);

    // Fuse only ONNX + domain (no LLM claims — skip for these page types)
    const fusionResult = runFusionEngine({
      onnxScore:         onnxFakeScore !== null ? Number(onnxFakeScore) : null,
      llmClaimScore:     null,   // intentionally skipped
      sourceDomainScore,
    });

    console.log(`[TruthScan Fusion] Fast-path complete (${pageClass.type}).`);

    return res.json({
      fusion: fusionResult,
      claims: [],
      domainCredibility: {
        averageScore: domainCredScore,
        fakeScore:    sourceDomainScore,
        breakdown:    [{ url: sourceUrl, domain: sourceUrl, score: domainCredScore, tier: domainCredScore >= 1 ? 'trusted' : domainCredScore >= 0.75 ? 'reliable' : 'neutral' }],
      },
      legacyClaims: [],
      pageClassification: pageClass,
      skippedReason: pageClass.reason,
    });
  }

  try {
    // ── Step 1: Extract claims ────────────────────────────────────────────────
    const claims = await extractClaims(text);

    // ── Step 2: Verify each claim (Tavily + LLM) ─────────────────────────────
    const verifiedClaims = [];
    const allSourceUrls  = [];

    for (const claim of claims) {
      // Fetch web evidence (Tavily)
      const evidence = await fetchTavilyEvidence(claim);
      allSourceUrls.push(...evidence.map((e) => e.link).filter(Boolean));

      // Verify with structured LLM prompt
      const llmResult = await verifyClaimStructured(claim, evidence);

      // Query Google Fact Check Tools (if API key is set)
      const googleReviews = await queryGoogleFactCheck(claim);
      const googleResult  = aggregateFactCheckResults(googleReviews);

      // If Google FC has a result, blend it with LLM (Google FC is higher quality)
      let finalVerdict    = llmResult.verdict;
      let finalConfidence = llmResult.confidence;

      if (googleResult.aggregateScore !== null) {
        // Google FC gives truthfulness (1.0 = true, 0.0 = false)
        const gcScore = googleResult.aggregateScore;
        if      (gcScore >= 0.65) finalVerdict = 'true';
        else if (gcScore <= 0.35) finalVerdict = 'false';
        else                      finalVerdict = 'uncertain';
        // Boost confidence since Google FC is curated
        finalConfidence = Math.min(95, finalConfidence + 15);
      }

      verifiedClaims.push({
        claim,
        verdict:      finalVerdict,
        confidence:   finalConfidence,
        reasoning:    llmResult.reasoning,
        evidence:     evidence.map(({ title, link }) => ({ title, link })),
        googleReviews: googleReviews.slice(0, 3),
        // Legacy compat field for existing UI
        isLikelyTrue: finalVerdict === 'true',
        supportingSources: evidence.map(({ title, link }) => ({ title, link })),
      });
    }

    // ── Step 3: Domain credibility scoring ───────────────────────────────────
    // Score the page's own source URL + all evidence URLs
    const urlsToScore = [sourceUrl, ...allSourceUrls].filter(Boolean);
    const domainResult = scoreSourceList(urlsToScore);
    // Convert credibility [0–1] → fake likelihood [0–100]
    const sourceDomainScore = credibilityToFakeScore(domainResult.averageScore);

    // ── Step 4: LLM claim score ───────────────────────────────────────────────
    const llmClaimScore = computeLLMClaimScore(
      verifiedClaims.map(({ verdict, confidence }) => ({ verdict, confidence }))
    );

    // ── Step 5: Weighted fusion ───────────────────────────────────────────────
    const fusionResult = runFusionEngine({
      onnxScore:        onnxFakeScore !== null ? Number(onnxFakeScore) : null,
      llmClaimScore,
      sourceDomainScore,
    });

    // ── Build response ────────────────────────────────────────────────────────
    const response = {
      // Fusion result (new)
      fusion: fusionResult,

      // Claim-level detail
      claims: verifiedClaims,

      // Domain scoring detail
      domainCredibility: {
        averageScore: domainResult.averageScore,
        fakeScore:    sourceDomainScore,
        breakdown:    domainResult.breakdown.slice(0, 10),
      },

      // Page classification
      pageClassification: pageClass,

      // Legacy field — keeps backward compat with existing UI code
      legacyClaims: verifiedClaims.map(({ claim, isLikelyTrue, supportingSources }) => ({
        claim, isLikelyTrue, supportingSources,
      })),
    };

    console.log('[TruthScan Fusion] Pipeline complete.');
    res.json(response);

  } catch (err) {
    console.error('[TruthScan Fusion] Fatal error:', err.message);
    res.status(500).json({ error: 'Fusion analysis failed', details: err.message });
  }
};

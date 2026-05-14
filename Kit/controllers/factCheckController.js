// TruthScan — Claim verification (fact-check) controller
const axios = require('axios');
const { tryModelsInOrder } = require('../lib/modelHelpers');
const { queryGoogleFactCheck } = require('../lib/googleFactCheck');

const TAVILY_SEARCH_URL = 'https://api.tavily.com/search';
const MAX_EVIDENCE_RESULTS = 5;

// Parse a numbered list of claims from raw model output
function parseClaimList(rawText) {
  return rawText
    .split('\n')
    .filter((line) => /^\d+[\).]/.test(line))
    .map((line) => line.replace(/^\d+[\).\s]*/, '').trim());
}

// Step 1: Extract factual claims from the input text
async function parseClaims(text) {
  const prompt = `
Extract clear factual claims from this text. Return them as a plain numbered list:
"""${text}"""
  `;
  console.log('[TruthScan FactCheck] Extracting claims...');
  const rawOutput = await tryModelsInOrder(prompt);
  const claims = parseClaimList(rawOutput);
  console.log(`[TruthScan FactCheck] Extracted ${claims.length} claims.`);
  return claims;
}

// Step 2: Fetch web evidence for a single claim via Tavily Search API (Fallback)
async function fetchWebEvidence(claim) {
  try {
    console.log(`[TruthScan FactCheck] Searching Tavily for: "${claim}"`);

    const { data } = await axios.post(
      TAVILY_SEARCH_URL,
      {
        api_key: process.env.TAVILY_API_KEY,
        query: claim,
        search_depth: 'basic',
        max_results: MAX_EVIDENCE_RESULTS,
        include_answer: false,
        include_raw_content: false,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );

    const results = data.results || [];
    console.log(`[TruthScan FactCheck] Tavily returned ${results.length} results.`);

    // Normalise Tavily response fields to internal { title, link, snippet } shape
    return results.map(({ title, url, content }) => ({
      title: title || '',
      link: url || '',
      snippet: content || '',
    }));
  } catch (err) {
    console.error('[TruthScan FactCheck] Tavily search failed:', err.message);

    if (err.response?.status === 401) {
      console.warn('[TruthScan FactCheck] Invalid Tavily API key — falling back to AI-only verification');
      return [];
    }
    if (err.response?.status === 429) {
      console.warn('[TruthScan FactCheck] Tavily rate limit exceeded — falling back to AI-only verification');
      return [];
    }
    throw new Error(`Tavily search failed: ${err.message}`);
  }
}

// Step 3: Verify a claim against gathered evidence snippets
async function verifyClaim(claim, evidence) {
  const hasEvidence = evidence.length > 0;

  const prompt = hasEvidence
    ? `
You are an AI fact-checking assistant.
A claim has been made, and here are web snippets found via authoritative fact-checks and web searches.
Decide whether the sources support the claim as true or debunk it as false.
Respond with ONLY "true" or "false".

Claim: "${claim}"

Sources:
${evidence.map((e, i) => `${i + 1}. ${e.snippet}`).join('\n')}

Answer:
    `
    : `
You are an AI fact-checking assistant with general knowledge.
Evaluate this claim based on your knowledge. Respond with ONLY "true", "false", or "uncertain".

Claim: "${claim}"

Answer:
    `;

  try {
    const response = await tryModelsInOrder(prompt);
    const verdict = response.trim().toLowerCase();
    console.log(`[TruthScan FactCheck] Verdict for "${claim}": ${verdict}`);
    return verdict.includes('true');
  } catch (err) {
    console.error('[TruthScan FactCheck] Verification failed:', err.message);
    return null;
  }
}

// Main handler — orchestrates the full fact-check pipeline
exports.handleFactCheck = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  try {
    console.log('[TruthScan FactCheck] Starting fact-check pipeline...');
    const claims = await parseClaims(text);
    const verifiedClaims = [];

    for (const claim of claims) {
      const combinedEvidence = [];

      // 1. Prioritise Google Fact Check Tools API for verified agency reviews
      const googleReviews = await queryGoogleFactCheck(claim);
      if (googleReviews && googleReviews.length > 0) {
        for (const r of googleReviews) {
          if (combinedEvidence.length >= MAX_EVIDENCE_RESULTS) break;
          combinedEvidence.push({
            title: `[Fact-Check] ${r.publisher}: ${r.rating}`,
            link: r.reviewUrl || '',
            snippet: `Authoritative Fact-Check by ${r.publisher}. Evaluated claim: "${r.claimText}". Official rating/verdict: ${r.rating}.`,
            isGoogleFactCheck: true,
            ratingValue: r.ratingValue,
          });
        }
      }

      // 2. Supplement remaining slots via Tavily general web search if needed
      if (combinedEvidence.length < MAX_EVIDENCE_RESULTS) {
        const tavilyEvidence = await fetchWebEvidence(claim);
        for (const item of tavilyEvidence) {
          if (combinedEvidence.length >= MAX_EVIDENCE_RESULTS) break;
          combinedEvidence.push(item);
        }
      }

      const isLikelyTrue = await verifyClaim(claim, combinedEvidence);

      verifiedClaims.push({
        claim,
        isLikelyTrue,
        supportingSources: combinedEvidence.map(({ title, link }) => ({ title, link })),
      });
    }

    console.log('[TruthScan FactCheck] Pipeline complete.');
    res.json({ claims: verifiedClaims });
  } catch (err) {
    console.error('[TruthScan FactCheck] Fatal error:', err.message);
    res.status(500).json({ error: 'Fact-checking failed', details: err.message });
  }
};

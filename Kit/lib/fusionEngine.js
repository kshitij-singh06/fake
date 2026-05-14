// TruthScan — Weighted Fusion Engine
//
// Combines signals from multiple independent sources into a single
// fake-news likelihood score [0–100] with a confidence level.
//
// ─── Signal Weights ───────────────────────────────────────────────────────────
//   Local ONNX model score          → 40%
//   LLM claim-level verification    → 35%
//   Source domain credibility       → 25%
//
// Each signal is optional. If a signal is missing (null/undefined), its weight
// is redistributed proportionally among the available signals so the output
// is always on a 0–100 scale.
//
// ─── Output Schema ────────────────────────────────────────────────────────────
// {
//   fusedScore: number,           // 0–100: overall fake-news likelihood
//   verdict: 'real'|'fake'|'uncertain',
//   confidence: 'high'|'medium'|'low',
//   signals: {
//     onnxScore: number|null,     // raw % from local model
//     llmScore: number|null,      // derived from claim verdicts
//     sourceScore: number|null,   // domain credibility converted to fake %
//   },
//   weights: { onnx, llm, source },  // actual weights used after redistribution
//   reasoning: string,            // human-readable explanation
// }

const WEIGHTS = {
  onnx:   0.40,
  llm:    0.35,
  source: 0.25,
};

// Verdict thresholds
const THRESHOLD_FAKE        = 60;   // >= 60% → fake
const THRESHOLD_REAL        = 40;   // <= 40% → real
// Between 40–60 → uncertain

// Confidence thresholds: how many signals contributed + their agreement
const HIGH_CONFIDENCE_MIN_SIGNALS = 2;
const HIGH_CONFIDENCE_MAX_SPREAD  = 20; // signals agree within 20 points

/**
 * Runs the fusion engine.
 *
 * @param {object} signals
 * @param {number|null} signals.onnxScore      - Fake-news likelihood [0–100] from local ONNX
 * @param {number|null} signals.llmClaimScore  - Fake-news likelihood [0–100] from LLM claim checks
 *                                               (derived: falseClaimCount/totalClaims * 100)
 * @param {number|null} signals.sourceDomainScore - Fake-news likelihood [0–100] from domain credibility
 *                                               (derived: (1 - credibility) * 100)
 * @returns FusionResult
 */
function runFusionEngine({ onnxScore = null, llmClaimScore = null, sourceDomainScore = null } = {}) {
  console.log('[TruthScan Fusion] Inputs:', { onnxScore, llmClaimScore, sourceDomainScore });

  // ── Build available-signal map ─────────────────────────────────────────────
  const available = {};
  if (onnxScore        !== null && onnxScore        !== undefined) available.onnx   = onnxScore;
  if (llmClaimScore    !== null && llmClaimScore    !== undefined) available.llm    = llmClaimScore;
  if (sourceDomainScore !== null && sourceDomainScore !== undefined) available.source = sourceDomainScore;

  const signalCount = Object.keys(available).length;

  if (signalCount === 0) {
    return {
      fusedScore: 50,
      verdict: 'uncertain',
      confidence: 'low',
      signals: { onnxScore, llmClaimScore, sourceDomainScore },
      weights: { onnx: 0, llm: 0, source: 0 },
      reasoning: 'No signals available — cannot make a determination.',
    };
  }

  // ── Redistribute weights for missing signals ──────────────────────────────
  const totalAvailableWeight = Object.keys(available).reduce((sum, key) => sum + WEIGHTS[key], 0);
  const usedWeights = {};
  for (const key of Object.keys(available)) {
    usedWeights[key] = WEIGHTS[key] / totalAvailableWeight;
  }

  // ── Compute weighted fused score ──────────────────────────────────────────
  let fusedScore = 0;
  for (const [key, score] of Object.entries(available)) {
    fusedScore += score * usedWeights[key];
  }
  fusedScore = Math.round(Math.min(100, Math.max(0, fusedScore)));

  // ── Confidence calculation ────────────────────────────────────────────────
  const scores = Object.values(available);
  const spread = scores.length > 1
    ? Math.max(...scores) - Math.min(...scores)
    : 0;

  let confidence;
  if (signalCount >= HIGH_CONFIDENCE_MIN_SIGNALS && spread <= HIGH_CONFIDENCE_MAX_SPREAD) {
    confidence = 'high';
  } else if (signalCount >= 2 || (signalCount === 1 && spread === 0)) {
    confidence = 'medium';
  } else {
    confidence = 'low';
  }

  // ── Verdict ───────────────────────────────────────────────────────────────
  let verdict;
  if (fusedScore >= THRESHOLD_FAKE)   verdict = 'fake';
  else if (fusedScore <= THRESHOLD_REAL) verdict = 'real';
  else                                  verdict = 'uncertain';

  // ── Reasoning ─────────────────────────────────────────────────────────────
  const reasonParts = [];
  if (available.onnx   !== undefined) reasonParts.push(`ONNX model: ${available.onnx.toFixed(0)}%`);
  if (available.llm    !== undefined) reasonParts.push(`LLM claims: ${available.llm.toFixed(0)}%`);
  if (available.source !== undefined) reasonParts.push(`Source credibility: ${available.source.toFixed(0)}%`);
  const reasoning = `Fused from ${signalCount} signal(s) [${reasonParts.join(', ')}] with ${spread.toFixed(0)}pt spread → ${fusedScore}% fake likelihood.`;

  console.log(`[TruthScan Fusion] Result: ${fusedScore}% (${verdict}, ${confidence} confidence) — ${reasoning}`);

  return {
    fusedScore,
    verdict,
    confidence,
    signals: {
      onnxScore:         available.onnx   ?? null,
      llmClaimScore:     available.llm    ?? null,
      sourceDomainScore: available.source ?? null,
    },
    weights: {
      onnx:   usedWeights.onnx   ?? 0,
      llm:    usedWeights.llm    ?? 0,
      source: usedWeights.source ?? 0,
    },
    reasoning,
  };
}

/**
 * Derives the LLM claim score from a list of structured claim verdicts.
 *
 * Each verdict is:
 * { verdict: 'true'|'false'|'uncertain', confidence: 0–100 }
 *
 * Logic:
 *  - 'false' claims are fully counted as misinformation
 *  - 'uncertain' claims are counted at 50% weight
 *  - 'true' claims contribute 0
 *  - Weighted by the LLM's confidence for each claim
 *
 * Returns [0–100] fake score.
 */
function computeLLMClaimScore(claimVerdicts) {
  if (!claimVerdicts || claimVerdicts.length === 0) return null;

  let weightedSum = 0;
  let totalWeight = 0;

  for (const { verdict, confidence = 50 } of claimVerdicts) {
    const weight = Math.max(1, confidence) / 100;
    let fakeContrib = 0;
    if      (verdict === 'false')     fakeContrib = 100;
    else if (verdict === 'uncertain') fakeContrib = 50;
    else                              fakeContrib = 0;   // 'true'

    weightedSum  += fakeContrib * weight;
    totalWeight  += weight;
  }

  return totalWeight === 0 ? 50 : Math.round(weightedSum / totalWeight);
}

/**
 * Converts a domain credibility score [0.0–1.0] to a fake-news likelihood [0–100].
 * High credibility → low fake likelihood.
 */
function credibilityToFakeScore(credibilityScore) {
  if (credibilityScore === null || credibilityScore === undefined) return null;
  return Math.round((1 - credibilityScore) * 100);
}

module.exports = { runFusionEngine, computeLLMClaimScore, credibilityToFakeScore };

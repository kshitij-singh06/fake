// TruthScan — Google Fact Check Tools API client
// Free tier: 1,000 queries/day
// Docs: https://developers.google.com/fact-check/tools/api/reference/rest
//
// Returns structured fact-check results from major organisations:
// PolitiFact, Snopes, FactCheck.org, Reuters Fact Check, AFP, etc.

const axios = require('axios');

const FACT_CHECK_URL = 'https://factchecktools.googleapis.com/v1alpha1/claims:search';

/**
 * Queries Google Fact Check Tools API for a single claim string.
 *
 * Returns an array of fact-check results:
 * [
 *   {
 *     claimText: string,
 *     claimant: string,
 *     claimDate: string,
 *     rating: string,          // e.g. "False", "Misleading", "True", "Mostly True"
 *     ratingValue: number,     // 0.0 (false) – 1.0 (true), derived from rating text
 *     publisher: string,
 *     reviewUrl: string,
 *   }
 * ]
 */
async function queryGoogleFactCheck(claimText) {
  const apiKey = process.env.GOOGLE_FACT_CHECK_API_KEY;

  if (!apiKey) {
    console.warn('[TruthScan GoogleFC] GOOGLE_FACT_CHECK_API_KEY not set — skipping Google Fact Check');
    return [];
  }

  try {
    console.log(`[TruthScan GoogleFC] Querying: "${claimText.slice(0, 80)}..."`);

    const { data } = await axios.get(FACT_CHECK_URL, {
      params: {
        key: apiKey,
        query: claimText,
        pageSize: 5,
        languageCode: 'en',
      },
    });

    const rawClaims = data.claims || [];
    if (rawClaims.length === 0) {
      console.log('[TruthScan GoogleFC] No matching fact-checks found.');
      return [];
    }

    const results = [];

    for (const item of rawClaims) {
      const reviews = item.claimReview || [];
      for (const review of reviews) {
        const rating = review.textualRating || 'Unknown';
        results.push({
          claimText: item.text || claimText,
          claimant: item.claimant || 'Unknown',
          claimDate: item.claimDate || null,
          rating,
          ratingValue: deriveRatingValue(rating),
          publisher: review.publisher?.name || 'Unknown',
          reviewUrl: review.url || '',
        });
      }
    }

    console.log(`[TruthScan GoogleFC] Found ${results.length} review(s).`);
    return results;

  } catch (err) {
    if (err.response?.status === 403) {
      console.warn('[TruthScan GoogleFC] API key invalid or quota exceeded.');
    } else if (err.response?.status === 429) {
      console.warn('[TruthScan GoogleFC] Rate limit hit.');
    } else {
      console.error('[TruthScan GoogleFC] Request failed:', err.message);
    }
    return [];  // non-fatal — fusion engine handles missing signal gracefully
  }
}

/**
 * Converts a textual rating string to a numeric truthfulness value [0.0–1.0].
 * 0.0 = completely false, 1.0 = completely true.
 */
function deriveRatingValue(rating) {
  const r = rating.toLowerCase().trim();

  // True-leaning
  if (/\btrue\b/.test(r) && !/false|mostly|partially|mislead/.test(r)) return 1.0;
  if (/mostly true|largely true|mostly correct/.test(r)) return 0.8;
  if (/half[- ]?true|partially true|mixed|some truth|mostly accurate/.test(r)) return 0.5;

  // False-leaning
  if (/mostly false|largely false|mostly incorrect/.test(r)) return 0.2;
  if (/\bfalse\b/.test(r) || /\bwrong\b/.test(r) || /\bdebunked\b/.test(r)) return 0.0;
  if (/mislead|distort|exaggerat|out of context|missing context/.test(r)) return 0.25;
  if (/unverified|unsubstantiated|no evidence/.test(r)) return 0.3;
  if (/satire/.test(r)) return 0.5;  // satire is not a factual claim

  // Unknown
  return 0.5;
}

/**
 * Aggregates multiple Google Fact Check results into a single truthfulness score.
 * Returns { aggregateScore: 0.0–1.0, reviews: [...] }
 *   aggregateScore: average ratingValue of all returned reviews
 */
function aggregateFactCheckResults(reviews) {
  if (!reviews || reviews.length === 0) {
    return { aggregateScore: null, reviews: [] };
  }
  const avg = reviews.reduce((sum, r) => sum + r.ratingValue, 0) / reviews.length;
  return { aggregateScore: avg, reviews };
}

module.exports = { queryGoogleFactCheck, aggregateFactCheckResults, deriveRatingValue };

// TruthScan — Page type classifier
//
// Determines what kind of page is being scanned so the fusion engine
// can apply the appropriate analysis strategy.
//
// Page types:
//   'news-unknown'   — news article from an unknown/unverified source → full fusion
//   'news-trusted'   — news article from a Tier-1/2 trusted outlet → skip claim-check
//   'reference'      — Wikipedia, encyclopaedia, academic paper → skip entirely
//   'official'       — government, NGO, health authority → skip claim-check
//   'social'         — Twitter/X, Reddit, Facebook, etc. → opinion, no fact-check
//   'commercial'     — e-commerce, SaaS, product pages → skip
//   'blog-unknown'   — personal blog / unknown site → lightweight check
//   'other'          — anything else

const { scoreDomain, extractDomain } = require('./domainCredibility');

// ─── URL-pattern rules (checked before domain reputation) ────────────────────

const REFERENCE_PATTERNS = [
  /wikipedia\.org/i,              // catch ALL wikipedia pages, not just /wiki/
  /encyclopaedia\./i,
  /britannica\.com/i,
  /scholarpedia\.org/i,
  /plato\.stanford\.edu/i,        // Stanford Enc. of Philosophy
  /arxiv\.org/i,
  /pubmed\.ncbi\.nlm\.nih\.gov/i,
  /scholar\.google\.com/i,
  /researchgate\.net\/publication/i,
  /jstor\.org/i,
  /en\.m\.wikipedia\.org/i,       // mobile Wikipedia
];

// Additional reference domains checked at domain level (no path needed)
const REFERENCE_DOMAINS = new Set([
  'wikipedia.org', 'en.wikipedia.org', 'en.m.wikipedia.org',
  'britannica.com', 'scholarpedia.org', 'arxiv.org',
  'jstor.org', 'researchgate.net',
  'scholar.google.com', 'pubmed.ncbi.nlm.nih.gov',
  'plato.stanford.edu',
]);

const SOCIAL_PATTERNS = [
  /twitter\.com/i, /x\.com/i,
  /reddit\.com/i,
  /facebook\.com/i,
  /instagram\.com/i,
  /tiktok\.com/i,
  /linkedin\.com\/posts\//i,
  /threads\.net/i,
  /youtube\.com/i,
  /tumblr\.com/i,
];

const COMMERCIAL_PATTERNS = [
  /amazon\.(com|in|co\.uk)/i,
  /ebay\.com/i,
  /flipkart\.com/i,
  /shopify\.com/i,
  /etsy\.com/i,
  /walmart\.com/i,
  /bestbuy\.com/i,
  /store\./i,
  /shop\./i,
  /\/product\//i,
  /\/products\//i,
  /\/cart\//i,
  /\/checkout\//i,
];

const OFFICIAL_DOMAINS = [
  '.gov', '.gov.in', '.gov.uk', '.gov.au',
  '.mil',
  'who.int', 'un.org', 'europa.eu',
  'unicef.org', 'worldbank.org', 'imf.org',
  'nih.gov', 'cdc.gov', 'fda.gov',
];

// ─── Trusted outlet domain sets (from domainCredibility tiers) ──────────────

const TIER1_TRUSTED_DOMAINS = new Set([
  'reuters.com', 'apnews.com', 'bbc.com', 'bbc.co.uk',
  'snopes.com', 'factcheck.org', 'politifact.com',
  'fullfact.org', 'africacheck.org',
  'who.int', 'cdc.gov', 'nih.gov', 'fda.gov',
  'nature.com', 'science.org', 'thelancet.com',
  'nejm.org', 'bmj.com', 'npr.org', 'pbs.org',
]);

const TIER2_RELIABLE_DOMAINS = new Set([
  'nytimes.com', 'washingtonpost.com', 'theguardian.com',
  'wsj.com', 'economist.com', 'time.com', 'theatlantic.com',
  'bloomberg.com', 'ft.com', 'aljazeera.com',
  'cbsnews.com', 'nbcnews.com', 'abcnews.go.com',
  'cnbc.com', 'scientificamerican.com',
  'thehindu.com', 'ndtv.com', 'hindustantimes.com',
  'bbc.in', 'dw.com', 'france24.com', 'euronews.com',
]);

/**
 * Classifies a page URL into a type category.
 *
 * @param {string} url  - the page URL
 * @returns {{ type: string, shouldFactCheck: boolean, reason: string }}
 */
function classifyPageType(url) {
  if (!url) {
    return { type: 'other', shouldFactCheck: false, reason: 'No URL provided' };
  }

  const domain = extractDomain(url);
  const urlLower = url.toLowerCase();

  // ── Reference pages: Wikipedia, academic papers, encyclopaedias ──────────
  if (REFERENCE_PATTERNS.some((p) => p.test(urlLower))) {
    return {
      type: 'reference',
      shouldFactCheck: false,
      reason: `Reference/encyclopaedic source — content IS the reference, no claim-checking needed`,
    };
  }

  // ── Reference domain-level fallback (catches subdomain variations) ────────
  if (REFERENCE_DOMAINS.has(domain) || Array.from(REFERENCE_DOMAINS).some((d) => domain.endsWith('.' + d) || domain === d)) {
    return {
      type: 'reference',
      shouldFactCheck: false,
      reason: `Reference domain (${domain}) — content IS the reference, no claim-checking needed`,
    };
  }

  // ── Social media: opinions, not factual claims ───────────────────────────
  // NOTE: social media pages are NOT skipped — ONNX still runs on them.
  // They go through the normal pipeline as 'news-unknown'.

  // ── Commercial / e-commerce ──────────────────────────────────────────────
  // NOTE: commercial pages are NOT skipped — ONNX still runs on them.

  // ── Official government / international org ──────────────────────────────
  if (OFFICIAL_DOMAINS.some((d) => domain.endsWith(d) || urlLower.includes(d))) {
    return {
      type: 'official',
      shouldFactCheck: false,
      reason: 'Official government or international organisation — considered authoritative',
    };
  }

  // ── Tier-1 trusted news outlet ───────────────────────────────────────────
  const domainParts = domain.split('.');
  const isTier1 = TIER1_TRUSTED_DOMAINS.has(domain) ||
    domainParts.slice(-2).some((_, i) => TIER1_TRUSTED_DOMAINS.has(domainParts.slice(i).join('.')));

  if (isTier1) {
    return {
      type: 'news-trusted',
      shouldFactCheck: false,
      reason: `Tier-1 trusted outlet (${domain}) — credibility established, claim-checking skipped`,
    };
  }

  // ── Tier-2 reliable outlet ───────────────────────────────────────────────
  const isTier2 = TIER2_RELIABLE_DOMAINS.has(domain) ||
    domainParts.slice(-2).some((_, i) => TIER2_RELIABLE_DOMAINS.has(domainParts.slice(i).join('.')));

  if (isTier2) {
    return {
      type: 'news-trusted',
      shouldFactCheck: false,
      reason: `Tier-2 reliable outlet (${domain}) — high credibility, claim-checking skipped`,
    };
  }

  // ── Domain credibility score check ──────────────────────────────────────
  // Even if not in an explicit list, a very high credibility score means
  // we can skip detailed claim-checking.
  const credScore = scoreDomain(url);
  if (credScore >= 0.85) {
    return {
      type: 'news-trusted',
      shouldFactCheck: false,
      reason: `High-credibility domain (score: ${credScore.toFixed(2)}) — claim-checking skipped`,
    };
  }

  // ── Unknown news / blog — full fusion pipeline ───────────────────────────
  return {
    type: credScore < 0.3 ? 'news-flagged' : 'news-unknown',
    shouldFactCheck: true,
    reason: `Unknown source (${domain}, credibility: ${credScore.toFixed(2)}) — full fusion analysis`,
  };
}

module.exports = { classifyPageType };

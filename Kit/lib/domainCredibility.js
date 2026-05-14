// TruthScan — Domain credibility scorer
// Assigns a reliability score [0.0–1.0] to a URL based on its domain.
//
// Score tiers:
//   1.0  — Tier-1 trusted: major wire services, established fact-checkers
//   0.75 — Tier-2 reliable: reputable mainstream / science publishers
//   0.5  — Neutral / unknown domain
//   0.25 — Tier-3 low reliability: known clickbait / tabloids
//   0.0  — Flagged: confirmed misinformation sources

// ─── Tier 1: Highly trusted ───────────────────────────────────────────────────
const TIER1_TRUSTED = new Set([
  'reuters.com', 'apnews.com', 'bbc.com', 'bbc.co.uk',
  'snopes.com', 'factcheck.org', 'politifact.com',
  'fullfact.org', 'factcheckni.org', 'africacheck.org',
  'who.int', 'cdc.gov', 'nih.gov', 'fda.gov',
  'nature.com', 'science.org', 'thelancet.com',
  'nejm.org', 'bmj.com',
  'npr.org', 'pbs.org', 'c-span.org',
  'un.org', 'europa.eu',
]);

// ─── Tier 2: Reliable mainstream ─────────────────────────────────────────────
const TIER2_RELIABLE = new Set([
  'nytimes.com', 'washingtonpost.com', 'theguardian.com',
  'wsj.com', 'economist.com', 'time.com', 'theatlantic.com',
  'bloomberg.com', 'ft.com', 'aljazeera.com',
  'cbsnews.com', 'nbcnews.com', 'abcnews.go.com', 'abcnews.com',
  'cnbc.com', 'forbes.com', 'businessinsider.com',
  'scientificamerican.com', 'newscientist.com',
  'usatoday.com', 'latimes.com', 'chicagotribune.com',
  'thehindu.com', 'ndtv.com', 'hindustantimes.com',
  'bbc.in', 'dw.com', 'france24.com', 'euronews.com',
  'techcrunch.com', 'wired.com', 'arstechnica.com',
  'wikipedia.org',
]);

// ─── Tier 3: Low reliability (clickbait / tabloids) ──────────────────────────
const TIER3_LOW = new Set([
  'dailymail.co.uk', 'thesun.co.uk', 'nypost.com',
  'dailystar.co.uk', 'mirror.co.uk', 'express.co.uk',
  'thegatewaypundit.com', 'breitbart.com',
  'zerohedge.com', 'activistpost.com', 'wnd.com',
  'veteranstoday.com', 'rumormillnews.com',
]);

// ─── Flagged: known misinformation / conspiracy sources ───────────────────────
const FLAGGED = new Set([
  'infowars.com', 'naturalnews.com', 'beforeitsnews.com',
  'yournewswire.com', 'newspunch.com', 'dcclothesline.com',
  'worldnewsdailyreport.com', 'empirenews.net',
  'theonion.com', 'clickhole.com',  // satire — not misinformation per se, but misleading if taken at face value
  'babylonbee.com',                  // satire
  'nationalreport.net',
  'huzlers.com', 'lastnightfreedom.com',
]);

/**
 * Extracts the root domain from a full URL string.
 * e.g. "https://www.bbc.co.uk/news/article" → "bbc.co.uk"
 */
function extractDomain(url) {
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    // Remove "www." prefix
    return parsed.hostname.replace(/^www\./, '');
  } catch {
    return url.toLowerCase().replace(/^www\./, '');
  }
}

/**
 * Returns a reliability score [0.0–1.0] for a given URL.
 * - 1.0  → Tier-1 trusted (wire services, fact-checkers, health authorities)
 * - 0.75 → Tier-2 reliable (mainstream / peer-reviewed)
 * - 0.5  → Neutral / unknown
 * - 0.25 → Tier-3 low reliability
 * - 0.0  → Flagged misinformation source
 */
function scoreDomain(url) {
  const domain = extractDomain(url);

  // Check flagged first (most specific check)
  if (FLAGGED.has(domain)) return 0.0;

  // Tier 1
  if (TIER1_TRUSTED.has(domain)) return 1.0;

  // Tier 2 — also handle subdomains (e.g. health.nytimes.com → nytimes.com)
  const parts = domain.split('.');
  for (let i = 0; i < parts.length - 1; i++) {
    const sub = parts.slice(i).join('.');
    if (TIER2_RELIABLE.has(sub)) return 0.75;
  }

  // Tier 3
  if (TIER3_LOW.has(domain)) return 0.25;

  // Neutral
  return 0.5;
}

/**
 * Scores an array of source URLs and returns:
 * {
 *   averageScore: number,     // 0.0–1.0 weighted average credibility
 *   breakdown: [{ url, domain, score, tier }],
 * }
 */
function scoreSourceList(urls) {
  if (!urls || urls.length === 0) {
    return { averageScore: 0.5, breakdown: [] };
  }

  const breakdown = urls.map((url) => {
    const domain = extractDomain(url);
    const score = scoreDomain(url);
    let tier;
    if (score >= 1.0)       tier = 'trusted';
    else if (score >= 0.75) tier = 'reliable';
    else if (score >= 0.5)  tier = 'neutral';
    else if (score >= 0.25) tier = 'low';
    else                    tier = 'flagged';
    return { url, domain, score, tier };
  });

  const averageScore = breakdown.reduce((sum, b) => sum + b.score, 0) / breakdown.length;

  return { averageScore, breakdown };
}

module.exports = { scoreDomain, scoreSourceList, extractDomain };

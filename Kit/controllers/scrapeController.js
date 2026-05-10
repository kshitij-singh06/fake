// TruthScan — Page scraper controller
const axios = require('axios');
const cheerio = require('cheerio');

const BROWSER_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.5',
  'Accept-Encoding': 'gzip, deflate, br',
  Connection: 'keep-alive',
  'Upgrade-Insecure-Requests': '1',
};

const FETCH_OPTIONS = {
  timeout: 30000,
  maxRedirects: 5,
  validateStatus: (status) => status >= 200 && status < 500,
};

const NOISE_ELEMENTS = ['script', 'style', 'noscript', 'nav', 'footer', 'header'];

// Resolve relative image src to absolute URL
function resolveImageUrl(src, pageUrl) {
  if (src.startsWith('http')) return src;
  if (src.startsWith('//')) return `https:${src}`;
  if (src.startsWith('/')) return `${new URL(pageUrl).origin}${src}`;
  return null;
}

exports.handleScrapeRequest = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const response = await axios.get(url, { headers: BROWSER_HEADERS, ...FETCH_OPTIONS });

    if (response.status >= 400) {
      throw new Error(`Website returned status ${response.status}`);
    }

    const dom = cheerio.load(response.data);
    NOISE_ELEMENTS.forEach((tag) => dom(tag).remove());

    const text = dom('body').text().replace(/\s+/g, ' ').trim();

    if (!text || text.length < 10) {
      return res.status(500).json({
        error: 'No content could be extracted from this page. The website may be blocking automated access or requires JavaScript.',
      });
    }

    const images = [];
    dom('img').each((_i, elem) => {
      const src = dom(elem).attr('src');
      if (src) {
        const resolved = resolveImageUrl(src, url);
        if (resolved) images.push(resolved);
      }
    });

    console.log(`[TruthScan Scrape] ${url} — ${text.length} chars, ${images.length} images`);

    res.json({
      url,
      text: text.substring(0, 50000),
      images: images.slice(0, 10),
    });
  } catch (err) {
    console.error('[TruthScan Scrape] Error:', err.message);

    let errorMsg = 'Failed to scrape the page';
    if (err.code === 'ECONNABORTED' || err.code === 'ETIMEDOUT') {
      errorMsg = 'Request timed out. The website took too long to respond.';
    } else if (err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
      errorMsg = 'Could not connect to the website. Please check the URL.';
    } else if (err.response) {
      errorMsg = `Website returned error ${err.response.status}. The site might be blocking automated requests.`;
    } else {
      errorMsg = `Failed to scrape: ${err.message}`;
    }

    res.status(500).json({ error: errorMsg });
  }
};

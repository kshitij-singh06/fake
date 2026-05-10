// TruthScan — Image AI detection controller
const axios = require('axios');

const NVIDIA_IMAGE_API_URL = 'https://ai.api.nvidia.com/v1/cv/hive/ai-generated-image-detection';
const SUPPORTED_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
const MAX_BASE64_LENGTH = 180000;
const TOP_SOURCES_COUNT = 3;

// Detect MIME type of image buffer; returns null if undetectable
async function detectImageMimeType(buffer) {
  const imageType = (await import('image-type')).default;
  const detected = await imageType(buffer);

  if (detected) return detected;

  // Manual SVG detection (image-type doesn't handle SVG)
  const prefix = buffer.toString('utf8', 0, Math.min(buffer.length, 100));
  const isSvg = prefix.includes('<svg') || (prefix.includes('<?xml') && prefix.includes('svg'));
  if (isSvg) return { ext: 'svg', mime: 'image/svg+xml' };

  return null;
}

// Send base64 image to NVIDIA AI image detection API
async function queryNvidiaImageService(imageBase64, mimeType) {
  const headers = {
    Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const payload = { input: [`data:${mimeType};base64,${imageBase64}`] };
  const response = await axios.post(NVIDIA_IMAGE_API_URL, payload, { headers });
  return response.data.data?.[0];
}

exports.handleImageDetection = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'Image URL is required' });

  try {
    console.log(`[TruthScan ImageAI] Downloading image: ${url}`);
    const imageRes = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });

    const buffer = Buffer.from(imageRes.data);
    const imageType = await detectImageMimeType(buffer);

    if (!imageType) {
      return res.status(400).json({ error: 'Unable to detect image type from buffer.' });
    }
    if (!imageType.mime) {
      return res.status(400).json({ error: 'Image type detected but MIME type is unavailable.' });
    }
    if (!imageType.mime.startsWith('image/')) {
      return res.status(400).json({ error: 'Invalid format — not an image MIME type.' });
    }
    if (!SUPPORTED_MIME_TYPES.includes(imageType.mime.toLowerCase())) {
      console.log(`[TruthScan ImageAI] Unsupported format: ${imageType.mime}`);
      return res.status(400).json({
        error: 'Unsupported image format',
        details: `Only PNG, JPG, JPEG are supported. Received: ${imageType.mime}`,
        skipAnalysis: true,
      });
    }

    const imageBase64 = buffer.toString('base64');
    if (imageBase64.length > MAX_BASE64_LENGTH) {
      return res.status(400).json({ error: 'Image too large for direct upload.' });
    }

    console.log('[TruthScan ImageAI] Querying NVIDIA AI image detection...');
    const resultData = await queryNvidiaImageService(imageBase64, imageType.mime);

    if (!resultData) {
      throw new Error('Invalid response format from NVIDIA API');
    }

    const aiLikelihood = Math.round(resultData.is_ai_generated * 100);
    const rawSources = resultData.possible_sources || {};

    const topSources = Object.entries(rawSources)
      .sort(([, a], [, b]) => b - a)
      .slice(0, TOP_SOURCES_COUNT)
      .map(([source, confidence]) => ({
        source,
        confidence: Math.round(confidence * 100 * 100) / 100,
      }));

    console.log(`[TruthScan ImageAI] AI likelihood: ${aiLikelihood}%`);
    res.json({
      aiLikelihoodPercent: aiLikelihood,
      topSources,
      rawModelReply: `AI Generated: ${aiLikelihood}% | Top Sources: ${topSources.map((s) => `${s.source} (${s.confidence}%)`).join(', ')}`,
    });
  } catch (err) {
    console.error('[TruthScan ImageAI] Error:', err.message);
    if (err.response?.data) console.error(err.response.data);
    res.status(500).json({ error: 'Image detection failed', details: err.message });
  }
};

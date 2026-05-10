// TruthScan — Content sentiment analysis controller
const { callGroq } = require('../lib/modelHelpers');

const SENTIMENT_SYSTEM_PROMPT = 'You are an expert sentiment and content analyzer.';

exports.handleSentimentAnalysis = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Text is required' });

  try {
    console.log('[TruthScan Sentiment] Analyzing content sentiment...');

    const userPrompt = `
Here is a piece of text. Tell me:
What is the sentiment? No preamble.

Text:
"""${text}"""
`;
    const analysis = await callGroq(SENTIMENT_SYSTEM_PROMPT, userPrompt, { temperature: 0.3 });
    console.log('[TruthScan Sentiment] Analysis complete.');

    res.json({ summary: analysis });
  } catch (err) {
    console.error('[TruthScan Sentiment] Error:', err.message);
    if (err.response) console.error(err.response.data);
    res.status(500).json({ error: 'Failed to analyze sentiment', details: err.message });
  }
};

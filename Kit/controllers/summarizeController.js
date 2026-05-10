// TruthScan — Content summarization controller
const { callGroq, MODEL_CONFIG } = require('../lib/modelHelpers');

const SUMMARIZE_SYSTEM_PROMPT =
  'You are an expert content summarizer. Always provide summaries in clear, concise bullet points.';

exports.handleSummarize = async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: 'Content is required' });

  try {
    console.log('[TruthScan Summarize] Generating content summary...');

    const userPrompt = `
Please summarize the following content in the form of clear, concise bullet points.
Focus on the key points, main ideas, and important details. Make it easy to read:

"""${content}"""

Provide the summary in bullet point format only.`;

    const summary = await callGroq(SUMMARIZE_SYSTEM_PROMPT, userPrompt, {
      model: MODEL_CONFIG.groqSummarize,
      maxTokens: 1000,
      temperature: 0.3,
    });

    console.log('[TruthScan Summarize] Summary generated successfully.');
    res.json({
      success: true,
      summary,
      model: MODEL_CONFIG.groqSummarize,
      input_length: content.length,
      summary_length: summary.length,
    });
  } catch (err) {
    console.error('[TruthScan Summarize] Error:', err.message);
    if (err.response) console.error(err.response.data);

    if (err.response?.status === 401) {
      return res.status(401).json({ success: false, error: 'Invalid Groq API key.' });
    }
    if (err.response?.status === 429) {
      return res.status(429).json({ success: false, error: 'Rate limit exceeded. Please try again later.' });
    }
    res.status(500).json({ success: false, error: 'Failed to summarize content', details: err.message });
  }
};

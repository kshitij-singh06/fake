// TruthScan — Question & Answer controller
const { callGroq, MODEL_CONFIG } = require('../lib/modelHelpers');

const QA_SYSTEM_PROMPT = `You are an expert AI assistant that answers questions based on provided content.
Provide clear, accurate, and helpful answers. If the content doesn't contain enough information
to answer the question, say so. Always base your answers on the given content.`;

exports.handleQA = async (req, res) => {
  const { question, content } = req.body;
  if (!question || !content) {
    return res.status(400).json({ error: 'Both question and content are required' });
  }

  try {
    console.log('[TruthScan QA] Processing question...');

    const userPrompt = `
Question: ${question}

Content to analyze:
"""${content}"""

Please provide a clear and accurate answer based on the content above.
If the content doesn't contain enough information to answer completely, acknowledge this limitation.`;

    const answer = await callGroq(QA_SYSTEM_PROMPT, userPrompt, {
      model: MODEL_CONFIG.groqQA,
      maxTokens: 1000,
      temperature: 0.3,
    });

    console.log('[TruthScan QA] Answer generated successfully.');
    res.json({
      success: true,
      question,
      answer,
      model: MODEL_CONFIG.groqQA,
      content_length: content.length,
      answer_length: answer.length,
    });
  } catch (err) {
    console.error('[TruthScan QA] Error:', err.message);
    if (err.response) console.error(err.response.data);

    if (err.response?.status === 401) {
      return res.status(401).json({ success: false, error: 'Invalid Groq API key.' });
    }
    if (err.response?.status === 429) {
      return res.status(429).json({ success: false, error: 'Rate limit exceeded. Please try again later.' });
    }
    res.status(500).json({ success: false, error: 'Failed to answer question', details: err.message });
  }
};

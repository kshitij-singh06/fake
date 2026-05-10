// TruthScan — Shared AI model helpers
// Centralizes NVIDIA, Gemini, and Groq API calls used across controllers

const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const MODEL_CONFIG = {
  nvidia: {
    id: 'meta/llama-4-maverick-17b-128e-instruct',
    apiUrl: 'https://integrate.api.nvidia.com/v1/chat/completions',
  },
  geminiPrimary: 'gemini-2.0-flash-exp',
  geminiFallback: 'gemini-1.5-flash',
  groqSummarize: 'llama-3.3-70b-versatile',
  groqQA: 'llama-3.1-8b-instant',
};

// Call the NVIDIA Llama model with a given prompt
async function callNvidiaModel(prompt) {
  const headers = {
    Authorization: `Bearer ${process.env.NVIDIA_API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const body = {
    model: MODEL_CONFIG.nvidia.id,
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 512,
    temperature: 1.0,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stream: false,
  };
  const response = await axios.post(MODEL_CONFIG.nvidia.apiUrl, body, { headers });
  return response.data.choices[0].message.content;
}

// Get a Gemini generative model instance (primary or fallback)
function getGeminiInstance(usePrimary = true) {
  const modelName = usePrimary ? MODEL_CONFIG.geminiPrimary : MODEL_CONFIG.geminiFallback;
  console.log(`[TruthScan Models] Using Gemini: ${modelName}`);
  return genAI.getGenerativeModel({ model: modelName });
}

// Try models in sequence: NVIDIA → Gemini primary → Gemini fallback
// Throws only if all three fail
async function tryModelsInOrder(prompt) {
  // Attempt 1: NVIDIA Llama
  try {
    console.log(`[TruthScan Models] Attempting NVIDIA: ${MODEL_CONFIG.nvidia.id}`);
    return await callNvidiaModel(prompt);
  } catch (err) {
    console.error('[TruthScan Models] NVIDIA failed:', err.message);
  }

  // Attempt 2: Gemini primary
  try {
    console.log('[TruthScan Models] Attempting Gemini primary...');
    const model = getGeminiInstance(true);
    const result = await model.generateContent(prompt);
    return await result.response.text();
  } catch (err) {
    console.error('[TruthScan Models] Gemini primary failed:', err.message);
  }

  // Attempt 3: Gemini fallback (throws on failure — all models exhausted)
  console.log('[TruthScan Models] Attempting Gemini fallback...');
  const model = getGeminiInstance(false);
  const result = await model.generateContent(prompt);
  return await result.response.text();
}

// Call Groq API with structured system + user prompts
async function callGroq(systemPrompt, userPrompt, options = {}) {
  const {
    model = MODEL_CONFIG.groqSummarize,
    maxTokens = 1000,
    temperature = 0.3,
  } = options;

  const response = await axios.post(
    'https://api.groq.com/openai/v1/chat/completions',
    {
      model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature,
      max_tokens: maxTokens,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data.choices[0].message.content.trim();
}

module.exports = { callNvidiaModel, getGeminiInstance, tryModelsInOrder, callGroq, MODEL_CONFIG };

// TruthScan — Shared AI model helpers
// Centralizes NVIDIA, Gemini, and Groq API calls used across controllers

const { GoogleGenerativeAI } = require('@google/generative-ai');
const axios = require('axios');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const MODEL_CONFIG = {
  nvidia: {
    id: 'meta/llama-4-maverick-17b-128e-instruct',
    apiUrl: 'https://integrate.api.nvidia.com/v1/chat/completions',
  },
  // Use stable production models — experimental endpoints expire quickly
  geminiPrimary:  'gemini-1.5-flash',
  geminiFallback: 'gemini-1.0-pro',
  groqSummarize:  'llama-3.3-70b-versatile',
  groqQA:         'llama-3.1-8b-instant',
  groqDetect:     'llama-3.1-8b-instant',   // fast, good for simple scoring tasks
};

// Warn early if critical keys are missing
if (!process.env.GEMINI_API_KEY) {
  console.warn('[TruthScan Models] ⚠️  GEMINI_API_KEY not set — Gemini calls will fail.');
}
if (!process.env.GROQ_API_KEY) {
  console.warn('[TruthScan Models] ⚠️  GROQ_API_KEY not set — Groq fallback will fail.');
}

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

/**
 * Try models in sequence: NVIDIA → Gemini primary → Gemini fallback → Groq.
 * Groq (Llama-3.1-8b) is the emergency fallback — free-tier, generous quota,
 * and fast enough for simple scoring/extraction tasks.
 * Throws only if ALL four fail.
 */
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

  // Attempt 3: Gemini fallback
  try {
    console.log('[TruthScan Models] Attempting Gemini fallback...');
    const model = getGeminiInstance(false);
    const result = await model.generateContent(prompt);
    return await result.response.text();
  } catch (err) {
    console.error('[TruthScan Models] Gemini fallback failed:', err.message);
  }

  // Attempt 4: Groq Llama (emergency fallback — most likely to have valid quota)
  console.log('[TruthScan Models] Attempting Groq emergency fallback...');
  return await callGroq(
    'You are a helpful AI assistant. Answer concisely and precisely.',
    prompt,
    { model: MODEL_CONFIG.groqDetect, maxTokens: 512, temperature: 0.2 }
  );
}

module.exports = { callNvidiaModel, getGeminiInstance, tryModelsInOrder, callGroq, MODEL_CONFIG };



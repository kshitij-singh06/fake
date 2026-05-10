// TruthScan — Local ONNX inference engine
// Uses @xenova/transformers for tokenization (bert-base-uncased vocab)
// Uses onnxruntime-web for model inference (local model_quantized.onnx)
// External API code in api.ts is intentionally preserved for reference/fallback.

import * as ort from 'onnxruntime-web'

// ─── ONNX Runtime WASM configuration ─────────────────────────────────────────
// Point ORT to the wasm binaries bundled in the extension's public folder.
// Must be set before any InferenceSession is created.
ort.env.wasm.wasmPaths = chrome.runtime.getURL('') // trailing slash resolved by ORT

// ─── Constants ────────────────────────────────────────────────────────────────

const MODEL_URL = chrome.runtime.getURL('models/ai_detector/model_quantized.onnx')

/** Maximum sequence length for DistilBERT (hard limit = 512) */
const MAX_SEQ_LEN = 512

/** How many characters we feed at most before tokenisation (1 char ≈ 0.3–0.5 tokens) */
const MAX_TEXT_CHARS = 2000

// ─── Label mapping from config.json ──────────────────────────────────────────
// { "0": "HUMAN", "1": "AI" }
const LABEL_AI = 1

// ─── Singleton session ────────────────────────────────────────────────────────

let _session: ort.InferenceSession | null = null
let _sessionPromise: Promise<ort.InferenceSession> | null = null

async function getSession(): Promise<ort.InferenceSession> {
  if (_session) return _session
  if (_sessionPromise) return _sessionPromise

  console.log('[TruthScan ONNX] Loading model from:', MODEL_URL)
  _sessionPromise = ort.InferenceSession.create(MODEL_URL, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'all',
  }).then((s) => {
    _session = s
    console.log('[TruthScan ONNX] Model loaded. Inputs:', s.inputNames, 'Outputs:', s.outputNames)
    return s
  })

  return _sessionPromise
}

// ─── Tokenizer (via @xenova/transformers) ────────────────────────────────────
// We use the standard bert-base-uncased tokenizer because our vocab.txt is not
// bundled. Xenova caches the tokenizer files after the first fetch.

type XenovaTokenizer = {
  encode: (text: string, opts?: Record<string, unknown>) => Promise<{ input_ids: number[]; attention_mask: number[] }>
}

let _tokenizerPromise: Promise<XenovaTokenizer> | null = null

async function getTokenizer(): Promise<XenovaTokenizer> {
  if (_tokenizerPromise) return _tokenizerPromise

  console.log('[TruthScan ONNX] Loading tokenizer (bert-base-uncased via @xenova/transformers)...')

  _tokenizerPromise = (async () => {
    // Dynamic import to avoid bundling issues in the content-script context.
    const { AutoTokenizer, env } = await import('@xenova/transformers')

    // Allow remote fallback for the tokenizer vocab (fetched once, then cached).
    env.allowRemoteModels = true
    env.allowLocalModels = false

    const tok = await AutoTokenizer.from_pretrained('Xenova/bert-base-uncased')
    console.log('[TruthScan ONNX] Tokenizer ready.')

    return {
      async encode(text: string) {
        const out = await tok(text, {
          truncation: true,
          max_length: MAX_SEQ_LEN,
          padding: false,
          return_tensors: false,
        })
        return {
          input_ids: Array.from(out.input_ids.data as BigInt64Array).map(Number),
          attention_mask: Array.from(out.attention_mask.data as BigInt64Array).map(Number),
        }
      },
    }
  })()

  return _tokenizerPromise
}

// ─── Softmax ──────────────────────────────────────────────────────────────────

function softmax(logits: Float32Array): Float32Array {
  const max = Math.max(...Array.from(logits))
  const exps = logits.map((v) => Math.exp(v - max))
  const sum = exps.reduce((a, b) => a + b, 0)
  return exps.map((v) => v / sum)
}

// ─── Public inference API ─────────────────────────────────────────────────────

export interface LocalDetectionResult {
  /** Probability [0–100] that the text is AI-generated */
  aiLikelihoodPercent: number
  /** Short preview of the text that was analyzed */
  textPreview: string
  /** Whether the model was loaded successfully */
  modelLoaded: boolean
}

/**
 * Runs AI-text detection entirely client-side.
 * External API (api.ts) is NOT called; it is preserved for reference only.
 */
export async function detectAILocally(rawText: string): Promise<LocalDetectionResult> {
  const truncated = rawText.slice(0, MAX_TEXT_CHARS).trim()
  const textPreview = truncated.slice(0, 200)

  if (!truncated) {
    return { aiLikelihoodPercent: 0, textPreview: '', modelLoaded: false }
  }

  try {
    // Load tokenizer and model in parallel (both are singletons, safe to race)
    const [tokenizer, session] = await Promise.all([getTokenizer(), getSession()])

    // Tokenise
    const { input_ids, attention_mask } = await tokenizer.encode(truncated)
    const seqLen = input_ids.length

    console.log(`[TruthScan ONNX] Token sequence length: ${seqLen}`)

    // Build tensors
    const inputIdsBig = new BigInt64Array(seqLen)
    const attMaskBig = new BigInt64Array(seqLen)
    for (let i = 0; i < seqLen; i++) {
      inputIdsBig[i] = BigInt(input_ids[i])
      attMaskBig[i] = BigInt(attention_mask[i])
    }

    const dims = [1, seqLen]
    const feeds: Record<string, ort.Tensor> = {
      input_ids: new ort.Tensor('int64', inputIdsBig, dims),
      attention_mask: new ort.Tensor('int64', attMaskBig, dims),
    }

    // DistilBERT does not use token_type_ids, but some exports include it.
    // Add it if the model expects it.
    if (session.inputNames.includes('token_type_ids')) {
      const tokenTypeIds = new BigInt64Array(seqLen).fill(0n)
      feeds.token_type_ids = new ort.Tensor('int64', tokenTypeIds, dims)
    }

    // Run inference
    const results = await session.run(feeds)

    // Extract logits — typically named "logits" or output_0
    const logitKey = session.outputNames.find((n) => n.toLowerCase().includes('logit')) ?? session.outputNames[0]
    const logitsRaw = results[logitKey].data as Float32Array
    const probs = softmax(logitsRaw)

    const aiProb = probs[LABEL_AI]
    const aiLikelihoodPercent = Math.round(aiProb * 100)

    console.log(`[TruthScan ONNX] AI prob: ${aiLikelihoodPercent}% (logits: [${Array.from(logitsRaw).join(', ')}])`)

    return { aiLikelihoodPercent, textPreview, modelLoaded: true }
  } catch (err) {
    console.error('[TruthScan ONNX] Inference error:', err)
    throw new Error(`Local inference failed: ${err instanceof Error ? err.message : String(err)}`)
  }
}

/**
 * Preloads the model and tokenizer in the background so the first user scan
 * is fast. Call this once on extension startup.
 */
export async function warmUpModel(): Promise<void> {
  try {
    await Promise.all([getTokenizer(), getSession()])
    console.log('[TruthScan ONNX] Warm-up complete.')
  } catch (err) {
    console.warn('[TruthScan ONNX] Warm-up failed (non-fatal):', err)
  }
}

/**
 * Checks whether the ONNX model file is reachable (extension bundle check).
 * Does NOT call any external API.
 */
export async function isModelReady(): Promise<boolean> {
  try {
    const resp = await fetch(MODEL_URL, { method: 'HEAD' })
    return resp.ok
  } catch {
    return false
  }
}

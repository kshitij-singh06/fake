// TruthScan — Local ONNX inference engine
// Uses onnxruntime-web for model inference.
// Tokenisation uses a real WordPiece tokenizer loaded from the bundled tokenizer.json files.
// External API code in api.ts is intentionally preserved for reference/fallback.

import * as ort from 'onnxruntime-web'

// ─── ONNX Runtime WASM configuration ─────────────────────────────────────────
const _base = chrome.runtime.getURL('')
ort.env.wasm.wasmPaths = {
  'ort-wasm-simd-threaded.wasm':          `${_base}ort-wasm-simd-threaded.wasm`,
  'ort-wasm-simd-threaded.jsep.wasm':     `${_base}ort-wasm-simd-threaded.jsep.wasm`,
  'ort-wasm-simd-threaded.asyncify.wasm': `${_base}ort-wasm-simd-threaded.asyncify.wasm`,
  'ort-wasm-simd-threaded.jspi.wasm':     `${_base}ort-wasm-simd-threaded.jspi.wasm`,
} as unknown as Record<string, string>
;(ort.env as any).webgpu = { disabled: true }
;(ort.env as any).webnn  = { disabled: true }

// ─── URLs ─────────────────────────────────────────────────────────────────────

const AI_MODEL_URL        = chrome.runtime.getURL('models/ai_detector/model_quantized.onnx')
const FAKE_MODEL_URL      = chrome.runtime.getURL('models/fake_detector/fakenews_detector_quantized.onnx')
const AI_TOKENIZER_URL    = chrome.runtime.getURL('models/ai_detector/tokenizer.json')
const FAKE_TOKENIZER_URL  = chrome.runtime.getURL('models/fake_detector/tokenizer.json')

// ─── Constants ────────────────────────────────────────────────────────────────

/** Maximum sequence length for DistilBERT */
const MAX_SEQ_LEN   = 512
/** Character limit fed to the tokenizer (≈ 0.3–0.5 tokens per char) */
const MAX_TEXT_CHARS = 2000

// Standard BERT special token IDs — both models are fine-tuned from distilbert-base-uncased
const CLS_ID = 101  // [CLS]
const SEP_ID = 102  // [SEP]
const UNK_ID = 100  // [UNK]

// Label indices (from each model's config.json)
// AI detector:   { "0": "HUMAN", "1": "AI"   } → AI   = index 1
// Fake detector: { "0": "FAKE",  "1": "REAL"  } → FAKE = index 0
const LABEL_AI   = 1
const LABEL_FAKE = 0

// ─── Types ────────────────────────────────────────────────────────────────────

type Vocab = Map<string, number>

// ─── Singleton sessions ───────────────────────────────────────────────────────

let _aiSession: ort.InferenceSession | null = null
let _aiSessionPromise: Promise<ort.InferenceSession> | null = null
let _fakeSession: ort.InferenceSession | null = null
let _fakeSessionPromise: Promise<ort.InferenceSession> | null = null

async function getAiSession(): Promise<ort.InferenceSession> {
  if (_aiSession) return _aiSession
  if (_aiSessionPromise) return _aiSessionPromise
  console.log('[TruthScan ONNX] Loading AI model...')
  _aiSessionPromise = ort.InferenceSession.create(AI_MODEL_URL, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'all',
  }).then((s) => { _aiSession = s; return s })
  return _aiSessionPromise
}

async function getFakeSession(): Promise<ort.InferenceSession> {
  if (_fakeSession) return _fakeSession
  if (_fakeSessionPromise) return _fakeSessionPromise
  console.log('[TruthScan ONNX] Loading fake-news model...')
  _fakeSessionPromise = ort.InferenceSession.create(FAKE_MODEL_URL, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'all',
  }).then((s) => { _fakeSession = s; return s })
  return _fakeSessionPromise
}

// ─── Singleton vocabs ─────────────────────────────────────────────────────────

let _aiVocab: Vocab | null = null
let _aiVocabPromise: Promise<Vocab> | null = null
let _fakeVocab: Vocab | null = null
let _fakeVocabPromise: Promise<Vocab> | null = null

/**
 * Loads the WordPiece vocab from a HuggingFace tokenizer.json bundled in the extension.
 * Reads the model.vocab object which maps token strings to integer IDs.
 */
async function loadVocab(url: string): Promise<Vocab> {
  console.log('[TruthScan Tokenizer] Loading vocab from:', url)
  const resp = await fetch(url)
  if (!resp.ok) throw new Error(`Failed to fetch tokenizer.json (${resp.status}): ${url}`)
  const json = await resp.json() as { model?: { vocab?: Record<string, number> } }
  const rawVocab = json?.model?.vocab
  if (!rawVocab || typeof rawVocab !== 'object') {
    throw new Error(`tokenizer.json at ${url} has no model.vocab — cannot tokenize`)
  }
  const vocab: Vocab = new Map(Object.entries(rawVocab))
  console.log(`[TruthScan Tokenizer] Vocab loaded: ${vocab.size} tokens`)
  return vocab
}

async function getAiVocab(): Promise<Vocab> {
  if (_aiVocab) return _aiVocab
  if (_aiVocabPromise) return _aiVocabPromise
  _aiVocabPromise = loadVocab(AI_TOKENIZER_URL).then((v) => { _aiVocab = v; return v })
  return _aiVocabPromise
}

async function getFakeVocab(): Promise<Vocab> {
  if (_fakeVocab) return _fakeVocab
  if (_fakeVocabPromise) return _fakeVocabPromise
  _fakeVocabPromise = loadVocab(FAKE_TOKENIZER_URL).then((v) => { _fakeVocab = v; return v })
  return _fakeVocabPromise
}

// ─── WordPiece tokenizer ──────────────────────────────────────────────────────
//
// Implements the standard HuggingFace BertTokenizer pipeline:
//   1. BertNormalizer  — strip control chars, handle Chinese chars, optional lowercase
//   2. BertPreTokenizer — split on whitespace AND punctuation boundaries
//   3. WordPiece       — greedy longest-match subword splitting with ## prefix
//   4. Wrap with [CLS] (101) … [SEP] (102), truncate to maxLen

function isChinese(cp: number): boolean {
  return (
    (cp >= 0x4E00 && cp <= 0x9FFF)   ||
    (cp >= 0x3400 && cp <= 0x4DBF)   ||
    (cp >= 0x20000 && cp <= 0x2A6DF) ||
    (cp >= 0xF900 && cp <= 0xFAFF)
  )
}

function isPunctuation(cp: number): boolean {
  return (
    (cp >= 33 && cp <= 47)   ||  // !"#$%&'()*+,-./
    (cp >= 58 && cp <= 64)   ||  // :;<=>?@
    (cp >= 91 && cp <= 96)   ||  // [\]^_`
    (cp >= 123 && cp <= 126) ||  // {|}~
    (cp >= 0x2000 && cp <= 0x206F)  // General Punctuation block
  )
}

/** BertNormalizer: control char stripping, Chinese spacing, optional lowercase */
function bertNormalize(text: string, lowercase: boolean): string {
  let out = ''
  for (let i = 0; i < text.length; i++) {
    const cp = text.charCodeAt(i)
    if (cp === 0 || cp === 0xFFFD) continue
    if ((cp >= 0x0000 && cp <= 0x001F) || (cp >= 0x007F && cp <= 0x009F)) {
      out += ' '
      continue
    }
    if (isChinese(cp)) { out += ' ' + text[i] + ' '; continue }
    out += text[i]
  }
  const cleaned = out.replace(/\s+/g, ' ').trim()
  return lowercase ? cleaned.toLowerCase() : cleaned
}

/** BertPreTokenizer: split on whitespace and punctuation — punctuation chars become separate tokens */
function bertPreTokenize(text: string): string[] {
  const tokens: string[] = []
  let current = ''
  for (let i = 0; i < text.length; i++) {
    const cp = text.charCodeAt(i)
    if (cp === 0x20 || cp === 0x09 || cp === 0x0A || cp === 0x0D) {
      if (current) { tokens.push(current); current = '' }
    } else if (isPunctuation(cp)) {
      if (current) { tokens.push(current); current = '' }
      tokens.push(text[i])
    } else {
      current += text[i]
    }
  }
  if (current) tokens.push(current)
  return tokens
}

/** WordPiece greedy longest-match subword split. Returns [UNK_ID] if word can't be segmented. */
function wordPieceSplit(word: string, vocab: Vocab): number[] {
  if (word.length > 100) return [UNK_ID]
  const subTokens: number[] = []
  let start = 0
  while (start < word.length) {
    let end = word.length
    let found = false
    while (start < end) {
      const sub = start === 0 ? word.slice(start, end) : '##' + word.slice(start, end)
      if (vocab.has(sub)) {
        subTokens.push(vocab.get(sub)!)
        found = true
        break
      }
      end--
    }
    if (!found) return [UNK_ID]  // whole word is unknown
    start = end
  }
  return subTokens
}

/**
 * Full BERT tokenize: normalize → pre-tokenize → WordPiece → add CLS/SEP.
 * @param lowercase true for uncased models (fake detector), false for cased (AI detector)
 */
function bertTokenize(
  text: string,
  vocab: Vocab,
  maxLen: number,
  lowercase: boolean
): { input_ids: number[]; attention_mask: number[] } {
  const normalized = bertNormalize(text, lowercase)
  const words = bertPreTokenize(normalized)
  const ids: number[] = [CLS_ID]

  for (const word of words) {
    if (ids.length >= maxLen - 1) break
    for (const id of wordPieceSplit(word, vocab)) {
      if (ids.length >= maxLen - 1) break
      ids.push(id)
    }
  }

  ids.push(SEP_ID)
  const mask = new Array(ids.length).fill(1)
  return { input_ids: ids, attention_mask: mask }
}

// ─── Softmax with temperature scaling + output clamping ──────────────────────
//
// DistilBERT fine-tunes trained on small datasets produce extreme logits
// (e.g. [-2.5, 2.8]) that collapse to near 0%/100% after standard softmax.
//
// Two mitigations:
//   1. Temperature T=5: divides logits before softmax, flattening the curve.
//      [-2.5, 2.8] / 5 = [-0.5, 0.56] → softmax → ~53% spread, not 99%.
//   2. Clamp to [15, 85]: these models are known to be imperfectly calibrated.
//      We never claim 0% or 100% certainty — that would be dishonest.

const SOFTMAX_TEMPERATURE = 5.0

function softmax(logits: Float32Array): Float32Array {
  const scaled = logits.map((v) => v / SOFTMAX_TEMPERATURE)
  const max    = Math.max(...Array.from(scaled))
  const exps   = scaled.map((v) => Math.exp(v - max))
  const sum    = exps.reduce((a, b) => a + b, 0)
  return exps.map((v) => v / sum)
}

/** Clamp model output to [15, 85]% — prevents false certainty on an imperfect model */
function clampScore(percent: number): number {
  return Math.min(85, Math.max(15, percent))
}

// ─── Core classifier ──────────────────────────────────────────────────────────

async function runLocalClassification(
  session: ort.InferenceSession,
  vocab: Vocab,
  text: string,
  labelIndex: number,
  labelTag: string,
  lowercase: boolean
): Promise<{ percent: number; textPreview: string }> {
  const truncated = text.slice(0, MAX_TEXT_CHARS).trim()
  if (!truncated) return { percent: 0, textPreview: '' }

  const { input_ids, attention_mask } = bertTokenize(truncated, vocab, MAX_SEQ_LEN, lowercase)
  const seqLen = input_ids.length

  console.log(`[TruthScan ONNX] ${labelTag} — seq len: ${seqLen}, first 8 IDs: [${input_ids.slice(0, 8).join(', ')}]`)

  const inputIdsBig = new BigInt64Array(input_ids.map(BigInt))
  const attMaskBig  = new BigInt64Array(attention_mask.map(BigInt))
  const dims = [1, seqLen]

  const feeds: Record<string, ort.Tensor> = {
    input_ids:      new ort.Tensor('int64', inputIdsBig, dims),
    attention_mask: new ort.Tensor('int64', attMaskBig,  dims),
  }

  if (session.inputNames.includes('token_type_ids')) {
    feeds.token_type_ids = new ort.Tensor('int64', new BigInt64Array(seqLen).fill(0n), dims)
  }

  const results   = await session.run(feeds)
  const logitKey  = session.outputNames.find((n) => n.toLowerCase().includes('logit')) ?? session.outputNames[0]
  const logitsRaw = results[logitKey].data as Float32Array
  const probs     = softmax(logitsRaw)
  const percent = clampScore(Math.round(probs[labelIndex] * 100))

  console.log(`[TruthScan ONNX] ${labelTag} — logits: [${Array.from(logitsRaw).join(', ')}] → ${percent}% (clamped to [15,85])`)

  return { percent, textPreview: truncated.slice(0, 200) }
}

// ─── Public API ───────────────────────────────────────────────────────────────

export interface LocalDetectionResult {
  /** Probability [0–100] that the text is AI-generated */
  aiLikelihoodPercent: number
  textPreview: string
  modelLoaded: boolean
}

export interface LocalFakeDetectionResult {
  /** Probability [0–100] that the text is fake news */
  fakeLikelihoodPercent: number
  textPreview: string
  modelLoaded: boolean
}

/**
 * Runs AI-text detection entirely client-side using the real WordPiece tokenizer.
 * NOTE: Even though tokenizer_config.json says do_lower_case=false, the bundled
 * vocab is the UNCASED BERT vocab (30,522 lowercase tokens). We must lowercase
 * or proper nouns ('Wikipedia', 'Google') become [UNK] and corrupt the output.
 */
export async function detectAILocally(rawText: string): Promise<LocalDetectionResult> {
  try {
    const [session, vocab] = await Promise.all([getAiSession(), getAiVocab()])
    const { percent, textPreview } = await runLocalClassification(
      session, vocab, rawText, LABEL_AI, 'AI', true  // uncased vocab — must lowercase
    )
    return { aiLikelihoodPercent: percent, textPreview, modelLoaded: true }
  } catch (err) {
    console.error('[TruthScan ONNX] AI inference error:', err)
    throw new Error(`Local AI inference failed: ${err instanceof Error ? err.message : String(err)}`)
  }
}

/**
 * Runs fake-news detection entirely client-side using the real WordPiece tokenizer.
 * Fake detector IS lowercased (do_lower_case: true in tokenizer_config.json).
 */
export async function detectFakeNewsLocally(rawText: string): Promise<LocalFakeDetectionResult> {
  try {
    const [session, vocab] = await Promise.all([getFakeSession(), getFakeVocab()])
    const { percent, textPreview } = await runLocalClassification(
      session, vocab, rawText, LABEL_FAKE, 'FAKE', true  // uncased model
    )
    return { fakeLikelihoodPercent: percent, textPreview, modelLoaded: true }
  } catch (err) {
    console.error('[TruthScan ONNX] Fake-news inference error:', err)
    throw new Error(`Local fake-news inference failed: ${err instanceof Error ? err.message : String(err)}`)
  }
}

/** Preloads the AI model and vocab so the first scan is instant. */
export async function warmUpModel(): Promise<void> {
  try {
    await Promise.all([getAiSession(), getAiVocab()])
    console.log('[TruthScan ONNX] AI warm-up complete.')
  } catch (err) {
    console.warn('[TruthScan ONNX] AI warm-up failed (non-fatal):', err)
  }
}

/** Preloads the fake-news model and vocab so the first scan is instant. */
export async function warmUpFakeModel(): Promise<void> {
  try {
    await Promise.all([getFakeSession(), getFakeVocab()])
    console.log('[TruthScan ONNX] Fake-news warm-up complete.')
  } catch (err) {
    console.warn('[TruthScan ONNX] Fake-news warm-up failed (non-fatal):', err)
  }
}

/** Checks whether the AI ONNX model file is reachable in the extension bundle. */
export async function isModelReady(): Promise<boolean> {
  try {
    return (await fetch(AI_MODEL_URL, { method: 'HEAD' })).ok
  } catch { return false }
}

/** Checks whether the fake-news ONNX model file is reachable in the extension bundle. */
export async function isFakeModelReady(): Promise<boolean> {
  try {
    return (await fetch(FAKE_MODEL_URL, { method: 'HEAD' })).ok
  } catch { return false }
}

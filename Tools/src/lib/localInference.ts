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

/** Maximum sequence length for RoBERTa */
const MAX_SEQ_LEN    = 512
/** Character limit fed to the tokenizer */
const MAX_TEXT_CHARS = 2000

// Both models are RoBERTa (vocab_size = 50265, GPT-2 BPE)
const ROBERTA_CLS_ID    = 0      // <s>
const ROBERTA_SEP_ID    = 2      // </s>
const ROBERTA_UNK_ID    = 3      // <unk>
const ROBERTA_VOCAB_SIZE = 50265

// Label indices
// AI detector:   {"0": "Real",  "1": "Fake"} → AI-generated = index 1
// Fake detector: {"0": "FAKE",  "1": "TRUE"} → FAKE         = index 0
const LABEL_AI   = 1
const LABEL_FAKE = 0

// ─── Types ────────────────────────────────────────────────────────────────────

type Vocab = Map<string, number>

/** BPE tokenizer data: vocab + merge-priority map (RoBERTa / GPT-2 style) */
interface BpeData {
  vocab: Vocab
  /** Maps "token_a token_b" → merge rank (lower = higher priority) */
  mergeRanks: Map<string, number>
}

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

// AI model — RoBERTa BPE tokenizer
let _aiBpeData: BpeData | null = null
let _aiBpeDataPromise: Promise<BpeData> | null = null

// Fake-news model — RoBERTa BPE tokenizer (hamzab/roberta-fake-news-classification)
let _fakeBpeData: BpeData | null = null
let _fakeBpeDataPromise: Promise<BpeData> | null = null

/**
 * Loads BPE vocab + merge rules from a RoBERTa/GPT-2 tokenizer.json.
 * Both models use this format (vocab_size=50265, BPE merges).
 */
async function loadBpeVocab(url: string): Promise<BpeData> {
  console.log('[TruthScan Tokenizer] Loading RoBERTa BPE vocab from:', url)
  const resp = await fetch(url)
  if (!resp.ok) throw new Error(`Failed to fetch tokenizer.json (${resp.status}): ${url}`)
  const json = await resp.json() as {
    model?: { vocab?: Record<string, number>; merges?: string[] }
  }
  const rawVocab = json?.model?.vocab
  if (!rawVocab) throw new Error(`tokenizer.json at ${url} has no model.vocab`)
  const vocab: Vocab = new Map(Object.entries(rawVocab).map(([k, v]) => [k, Number(v)]))
  const rawMerges: string[] = json?.model?.merges ?? []
  const mergeRanks = new Map<string, number>(rawMerges.map((m, i) => [m, i]))
  console.log(`[TruthScan Tokenizer] BPE vocab: ${vocab.size} tokens, ${rawMerges.length} merges`)
  return { vocab, mergeRanks }
}

async function getAiBpeData(): Promise<BpeData> {
  if (_aiBpeData) return _aiBpeData
  if (_aiBpeDataPromise) return _aiBpeDataPromise
  _aiBpeDataPromise = loadBpeVocab(AI_TOKENIZER_URL).then((d) => { _aiBpeData = d; return d })
  return _aiBpeDataPromise
}

async function getFakeBpeData(): Promise<BpeData> {
  if (_fakeBpeData) return _fakeBpeData
  if (_fakeBpeDataPromise) return _fakeBpeDataPromise
  _fakeBpeDataPromise = loadBpeVocab(FAKE_TOKENIZER_URL).then((d) => { _fakeBpeData = d; return d })
  return _fakeBpeDataPromise
}

// ─── RoBERTa BPE tokenizer ────────────────────────────────────────────────────
//
// GPT-2 / RoBERTa use Byte-Pair Encoding with a byte-level pre-tokenizer.
// Every character is first mapped to its UTF-8 byte representation, then BPE
// merge rules are applied. This means EVERY string can be tokenized without
// ever producing [UNK] — making it more robust than WordPiece for web text.

/**
 * Builds the GPT-2 byte→unicode mapping.
 * Printable bytes (33-126, 161-172, 174-255) map to themselves.
 * Remaining 68 bytes map to U+0100–U+0143.
 * This is the standard mapping used in all GPT-2-derived tokenizers.
 */
function buildByteEncoder(): Map<number, string> {
  const enc = new Map<number, string>()
  let n = 0
  for (let b = 0; b < 256; b++) {
    const isDirect =
      (b >= 33 && b <= 126) ||
      (b >= 161 && b <= 172) ||
      (b >= 174 && b <= 255)
    enc.set(b, String.fromCodePoint(isDirect ? b : 256 + n++))
  }
  return enc
}

/** Singleton — built once, reused for every tokenization call */
const BYTE_ENC = buildByteEncoder()

/** Converts a UTF-8 string to its byte-level GPT-2 unicode representation. */
function byteLevelEncode(text: string): string {
  const bytes = new TextEncoder().encode(text)
  return Array.from(bytes).map((b) => BYTE_ENC.get(b)!).join('')
}

/**
 * BPE merge step: given a list of string tokens, repeatedly apply the
 * highest-priority merge (lowest rank number) until no more merges are possible.
 */
function applyBpeMerges(tokens: string[], mergeRanks: Map<string, number>): string[] {
  let current = [...tokens]
  while (current.length > 1) {
    let bestRank = Infinity
    let bestIdx  = -1
    for (let i = 0; i < current.length - 1; i++) {
      const rank = mergeRanks.get(`${current[i]} ${current[i + 1]}`)
      if (rank !== undefined && rank < bestRank) {
        bestRank = rank
        bestIdx  = i
      }
    }
    if (bestIdx === -1) break
    // Merge the pair at bestIdx
    const merged = current[bestIdx] + current[bestIdx + 1]
    current = [
      ...current.slice(0, bestIdx),
      merged,
      ...current.slice(bestIdx + 2),
    ]
  }
  return current
}

/**
 * Tokenize text with RoBERTa's BPE tokenizer:
 *   1. Split on whitespace; prepend space to all words except the first
 *      (becomes 'Ġ' in byte-level encoding, matching the BPE vocab)
 *   2. Byte-level encode each word
 *   3. Apply BPE merges
 *   4. Look up token IDs; fall back to ROBERTA_UNK_ID for unknown tokens
 *   5. Wrap with <s> … </s> (IDs 0, 2)
 */
function robertaTokenize(
  text: string,
  bpeData: BpeData,
  maxLen: number,
): { input_ids: number[]; attention_mask: number[] } {
  const { vocab, mergeRanks } = bpeData

  // Simple pre-tokenizer: split on whitespace
  const rawWords = text.replace(/\s+/g, ' ').trim().split(' ')

  const ids: number[] = [ROBERTA_CLS_ID]

  for (let wi = 0; wi < rawWords.length; wi++) {
    if (ids.length >= maxLen - 1) break
    const word = rawWords[wi]
    if (!word) continue

    // RoBERTa prepends a space (→ 'Ġ') to every word that follows another word
    const withSpace = wi === 0 ? word : ' ' + word
    const byteWord  = byteLevelEncode(withSpace)

    // Start BPE with individual characters
    const chars = Array.from(byteWord)
    const bpeTokens = applyBpeMerges(chars, mergeRanks)

    for (const tok of bpeTokens) {
      if (ids.length >= maxLen - 1) break
      const id = vocab.get(tok)
      ids.push(id !== undefined && id < ROBERTA_VOCAB_SIZE ? id : ROBERTA_UNK_ID)
    }
  }

  ids.push(ROBERTA_SEP_ID)
  const mask = new Array(ids.length).fill(1)
  return { input_ids: ids, attention_mask: mask }
}

// ─── Softmax helpers ─────────────────────────────────────────────────────────
//
// Both models are RoBERTa-based — T=2.0 for both. RoBERTa is well-calibrated
// on large corpora so we don’t need aggressive temperature scaling.

const SOFTMAX_TEMPERATURE = 2.0

function softmax(logits: Float32Array, temperature = SOFTMAX_TEMPERATURE): Float32Array {
  const scaled = logits.map((v) => v / temperature)
  const max    = Math.max(...Array.from(scaled))
  const exps   = scaled.map((v) => Math.exp(v - max))
  const sum    = exps.reduce((a, b) => a + b, 0)
  return exps.map((v) => v / sum)
}

/** AI detector — [15, 85] (roberta-base-openai-detector is well-calibrated) */
function clampAiScore(p: number): number { return Math.min(85, Math.max(15, p)) }

/** Fake-news detector — [15, 80] (hamzab/roberta-fake-news-classification) */
function clampFakeScore(p: number): number { return Math.min(80, Math.max(15, p)) }

// ─── Core classifier (shared by both RoBERTa models) ─────────────────────────────

/**
 * Generic RoBERTa inference: BPE tokenize → ONNX → softmax → clampFn.
 * Used by both AI detector and fake-news detector.
 */
async function runRobertaClassification(
  session: ort.InferenceSession,
  bpeData: BpeData,
  text: string,
  labelIndex: number,
  labelTag: string,
  clampFn: (p: number) => number,
): Promise<{ percent: number; textPreview: string }> {
  const truncated = text.slice(0, MAX_TEXT_CHARS).trim()
  if (!truncated) return { percent: 0, textPreview: '' }

  const { input_ids, attention_mask } = robertaTokenize(truncated, bpeData, MAX_SEQ_LEN)
  const seqLen = input_ids.length

  console.log(`[TruthScan ONNX] ${labelTag} (RoBERTa) — seq len: ${seqLen}, first 8 IDs: [${input_ids.slice(0, 8).join(', ')}]`)

  const dims = [1, seqLen]
  const feeds: Record<string, ort.Tensor> = {
    input_ids:      new ort.Tensor('int64', new BigInt64Array(input_ids.map(BigInt)),      dims),
    attention_mask: new ort.Tensor('int64', new BigInt64Array(attention_mask.map(BigInt)), dims),
  }
  // RoBERTa does NOT use token_type_ids

  const results   = await session.run(feeds)
  const logitKey  = session.outputNames.find((n) => n.toLowerCase().includes('logit')) ?? session.outputNames[0]
  const logitsRaw = results[logitKey].data as Float32Array
  const probs     = softmax(logitsRaw)
  const percent   = clampFn(Math.round(probs[labelIndex] * 100))

  console.log(`[TruthScan ONNX] ${labelTag} — logits: [${Array.from(logitsRaw).join(', ')}] → ${percent}%`)
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
 * Runs AI-text detection using roberta-base-openai-detector.
 */
export async function detectAILocally(rawText: string): Promise<LocalDetectionResult> {
  try {
    const [session, bpeData] = await Promise.all([getAiSession(), getAiBpeData()])
    const { percent, textPreview } = await runRobertaClassification(session, bpeData, rawText, LABEL_AI, 'AI', clampAiScore)
    return { aiLikelihoodPercent: percent, textPreview, modelLoaded: true }
  } catch (err) {
    console.error('[TruthScan ONNX] AI inference error:', err)
    throw new Error(`Local AI inference failed: ${err instanceof Error ? err.message : String(err)}`)
  }
}

/**
 * Runs fake-news detection using hamzab/roberta-fake-news-classification.
 * id2label: {"0": "FAKE", "1": "TRUE"} — so LABEL_FAKE = 0.
 */
export async function detectFakeNewsLocally(rawText: string): Promise<LocalFakeDetectionResult> {
  try {
    const [session, bpeData] = await Promise.all([getFakeSession(), getFakeBpeData()])
    const { percent, textPreview } = await runRobertaClassification(session, bpeData, rawText, LABEL_FAKE, 'FAKE', clampFakeScore)
    return { fakeLikelihoodPercent: percent, textPreview, modelLoaded: true }
  } catch (err) {
    console.error('[TruthScan ONNX] Fake-news inference error:', err)
    throw new Error(`Local fake-news inference failed: ${err instanceof Error ? err.message : String(err)}`)
  }
}

/** Preloads the AI model and BPE vocab. */
export async function warmUpModel(): Promise<void> {
  try {
    await Promise.all([getAiSession(), getAiBpeData()])
    console.log('[TruthScan ONNX] AI warm-up complete.')
  } catch (err) {
    console.warn('[TruthScan ONNX] AI warm-up failed (non-fatal):', err)
  }
}

/** Preloads the fake-news model and BPE vocab. */
export async function warmUpFakeModel(): Promise<void> {
  try {
    await Promise.all([getFakeSession(), getFakeBpeData()])
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

// ─── Sentence-level scoring ───────────────────────────────────────────────────

export interface SentenceScore {
  /** The original sentence / chunk text */
  text: string
  /** Fake-news likelihood [0–100] from the ONNX fake-news model */
  fakeScore: number
  /** AI-generated likelihood [0–100] from the ONNX AI-text model */
  aiScore: number
}

/** Maximum number of sentence chunks to score — kept low to avoid WASM heap exhaustion. */
const MAX_SENTENCES = 8
/** Minimum characters per chunk — too-short sentences are unreliable. */
const MIN_CHUNK_CHARS = 80

/**
 * Splits `rawText` into sentence chunks and scores each with the relevant
 * ONNX model(s) based on `mode`.
 *
 * ⚠️ DistilBERT is a document-level classifier. Sentence-level scores are
 * directional only — short chunks lack the context needed for high accuracy.
 *
 * @param rawText  - full page text
 * @param mode     - 'fake' | 'ai' | 'both' — controls which model(s) run.
 *                   Pass 'fake' to only run the fake-news model, 'ai' for
 *                   AI-text only, 'both' for both. Avoids unnecessary ONNX
 *                   calls and reduces WASM memory pressure.
 */
export async function scoreSentences(
  rawText: string,
  mode: 'fake' | 'ai' | 'both' = 'both',
): Promise<SentenceScore[]> {
  // ── 1. Split into sentences ───────────────────────────────────────────────
  const rawSentences = rawText
    .replace(/([.!?])\s+/g, '$1\n')
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => s.length >= MIN_CHUNK_CHARS)

  // ── 2. Group into chunks of ≥150 chars for better model context ───────────
  const chunks: string[] = []
  let current = ''
  for (const s of rawSentences) {
    current = current ? `${current} ${s}` : s
    if (current.length >= 150) {
      chunks.push(current)
      current = ''
    }
  }
  if (current.length >= MIN_CHUNK_CHARS) chunks.push(current)

  // ── 3. Cap to MAX_SENTENCES ───────────────────────────────────────────────
  const selected = chunks.slice(0, MAX_SENTENCES)
  if (selected.length === 0) return []

  console.log(`[TruthScan ONNX] Scoring ${selected.length} chunks in "${mode}" mode...`)

  // ── 4. Load only the session(s) we actually need ──────────────────────────
  const needAI   = mode === 'ai'   || mode === 'both'
  const needFake = mode === 'fake' || mode === 'both'

  const [aiSession, aiBpeData, fakeSession, fakeBpeData] = await Promise.all([
    needAI   ? getAiSession()    : Promise.resolve(null as unknown as ort.InferenceSession),
    needAI   ? getAiBpeData()    : Promise.resolve(null as unknown as BpeData),
    needFake ? getFakeSession()  : Promise.resolve(null as unknown as ort.InferenceSession),
    needFake ? getFakeBpeData()  : Promise.resolve(null as unknown as BpeData),
  ])

  // ── 5. Score each chunk strictly sequentially ─────────────────────────────
  // WASM has a single thread pool — concurrent session.run() calls, even on
  // different session objects, cause OrtRun errors. Always await one at a time.
  // Each chunk is also wrapped in try/catch so a single bad chunk doesn't
  // abort the entire run.
  const results: SentenceScore[] = []

  for (const chunk of selected) {
    let aiScore   = 50   // neutral fallback
    let fakeScore = 50

    if (needAI) {
      try {
        aiScore = (await runRobertaClassification(aiSession, aiBpeData, chunk, LABEL_AI, 'AI', clampAiScore)).percent
      } catch (err) {
        console.warn(`[TruthScan ONNX] AI chunk failed (skipped): ${err}`)
      }
    }

    if (needFake) {
      try {
        fakeScore = (await runRobertaClassification(fakeSession, fakeBpeData, chunk, LABEL_FAKE, 'FAKE', clampFakeScore)).percent
      } catch (err) {
        console.warn(`[TruthScan ONNX] FAKE chunk failed (skipped): ${err}`)
      }
    }

    results.push({ text: chunk, aiScore, fakeScore })
  }

  console.log(`[TruthScan ONNX] Sentence scoring complete (${results.length} chunks)`)
  return results
}

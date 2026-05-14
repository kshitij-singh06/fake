// TruthScan — Content script

interface PageData {
  title: string
  text: string
  url: string
  timestamp: Date
}

interface SentenceScore {
  text: string
  fakeScore: number
  aiScore: number
}

const CONTENT_AREA_SELECTORS = [
  'article',
  'main',
  '[role="main"]',
  '.content',
  '.post-content',
  '.entry-content',
  '.article-content',
  '.story-content',
]

// ─── Inline Text Highlighting & Overview Panel ────────────────────────────────
// We map all visible text nodes to build a robust composite string representation
// matching the normalized sentence chunks. Then, we safely wrap matching leaf
// text nodes in styled <mark> tags sorted in descending order per node to guarantee
// zero offset invalidation. An overview sidebar panel is also displayed.

const PANEL_ID = 'truthscan-highlight-panel'

function clearHighlights() {
  // Remove overview panel
  document.getElementById(PANEL_ID)?.remove()

  // Remove inline <mark> wrappings and restore original text nodes
  const marks = document.querySelectorAll('mark.truthscan-inline-highlight')
  marks.forEach((mark) => {
    const parent = mark.parentNode
    if (parent) {
      while (mark.firstChild) {
        parent.insertBefore(mark.firstChild, mark)
      }
      parent.removeChild(mark)
    }
  })
  // Normalize body to merge split text nodes back together cleanly
  document.body.normalize()
}

function highlightSentences(scores: SentenceScore[], mode: 'fake' | 'ai' | 'both') {
  clearHighlights()
  if (scores.length === 0) return

  // Filter to flagged sentences based on thresholds
  const filtered = scores.filter((s) => {
    if (mode === 'fake') return s.fakeScore >= 45
    if (mode === 'ai')   return s.aiScore   >= 45
    return s.fakeScore >= 45 || s.aiScore >= 45
  })

  // ─── 1. Build Character Map of Visible Page Text ──────────────────────────
  const charMap: { node: Text; offset: number }[] = []
  let compositeText = ''

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement
        if (parent) {
          const tag = parent.tagName.toLowerCase()
          if (tag === 'script' || tag === 'style' || tag === 'noscript') {
            return NodeFilter.FILTER_REJECT
          }
        }
        return NodeFilter.FILTER_ACCEPT
      }
    }
  )

  let currNode = walker.nextNode()
  while (currNode) {
    const textNode = currNode as Text
    const content = textNode.nodeValue || ''
    for (let i = 0; i < content.length; i++) {
      const ch = content[i]
      const isSpace = /\s/.test(ch)
      if (isSpace) {
        // Collapse consecutive spaces to match sentence normalization
        if (compositeText.length === 0 || compositeText[compositeText.length - 1] !== ' ') {
          compositeText += ' '
          charMap.push({ node: textNode, offset: i })
        }
      } else {
        compositeText += ch
        charMap.push({ node: textNode, offset: i })
      }
    }
    currNode = walker.nextNode()
  }

  // ─── 2. Identify Target Text Nodes & Offsets for Inline Highlights ────────
  interface WrapOp {
    startOffset: number
    endOffset: number
    color: string
    borderColor: string
    title: string
  }
  const nodeOps = new Map<Text, WrapOp[]>()

  for (const s of filtered) {
    const normalizedSentence = s.text.replace(/\s+/g, ' ').trim()
    if (!normalizedSentence) continue

    let startIndex = compositeText.indexOf(normalizedSentence)
    let matchLen = normalizedSentence.length

    // Fallback: match strong prefix if boundary characters slightly differ
    if (startIndex === -1) {
      const prefix = normalizedSentence.slice(0, Math.min(40, normalizedSentence.length))
      if (prefix.length >= 15) {
        startIndex = compositeText.indexOf(prefix)
        matchLen = prefix.length
      }
    }

    if (startIndex !== -1) {
      const endIndex = startIndex + matchLen - 1

      // Determine colors and tooltips
      let color = 'rgba(249, 115, 22, 0.3)'
      let borderColor = 'rgba(249, 115, 22, 0.8)'
      let titleMsg = `TruthScan Flagged\nFake Risk: ${s.fakeScore}% | AI Likelihood: ${s.aiScore}%`

      if (mode === 'fake') {
        const isHigh = s.fakeScore >= 60
        color = isHigh ? 'rgba(239, 68, 68, 0.35)' : 'rgba(239, 68, 68, 0.2)'
        borderColor = isHigh ? 'rgba(239, 68, 68, 0.85)' : 'rgba(239, 68, 68, 0.5)'
        titleMsg = `🔴 TruthScan: Fake News Risk (${s.fakeScore}%)`
      } else if (mode === 'ai') {
        const isHigh = s.aiScore >= 60
        color = isHigh ? 'rgba(139, 92, 246, 0.35)' : 'rgba(139, 92, 246, 0.2)'
        borderColor = isHigh ? 'rgba(139, 92, 246, 0.85)' : 'rgba(139, 92, 246, 0.5)'
        titleMsg = `🟣 TruthScan: AI-Generated (${s.aiScore}%)`
      } else {
        const maxScore = Math.max(s.fakeScore, s.aiScore)
        const isFakeDominant = s.fakeScore > s.aiScore
        const isHigh = maxScore >= 60
        if (isFakeDominant) {
          color = isHigh ? 'rgba(239, 68, 68, 0.35)' : 'rgba(239, 68, 68, 0.2)'
          borderColor = isHigh ? 'rgba(239, 68, 68, 0.85)' : 'rgba(239, 68, 68, 0.5)'
        } else {
          color = isHigh ? 'rgba(139, 92, 246, 0.35)' : 'rgba(139, 92, 246, 0.2)'
          borderColor = isHigh ? 'rgba(139, 92, 246, 0.85)' : 'rgba(139, 92, 246, 0.5)'
        }
      }

      // Map range to individual unique Text nodes
      let lastNode: Text | null = null
      let nodeStartOffset = -1

      for (let i = startIndex; i <= endIndex; i++) {
        const entry = charMap[i]
        if (!entry) continue

        if (entry.node !== lastNode) {
          if (lastNode && nodeStartOffset !== -1) {
            const prevEntry = charMap[i - 1]
            const ops = nodeOps.get(lastNode) || []
            ops.push({
              startOffset: nodeStartOffset,
              endOffset: prevEntry.offset + 1,
              color,
              borderColor,
              title: titleMsg,
            })
            nodeOps.set(lastNode, ops)
          }
          lastNode = entry.node
          nodeStartOffset = entry.offset
        }
      }

      if (lastNode && nodeStartOffset !== -1) {
        const lastEntry = charMap[endIndex]
        if (lastEntry) {
          const ops = nodeOps.get(lastNode) || []
          ops.push({
            startOffset: nodeStartOffset,
            endOffset: lastEntry.offset + 1,
            color,
            borderColor,
            title: titleMsg,
          })
          nodeOps.set(lastNode, ops)
        }
      }
    }
  }

  // ─── 3. Safely Apply DOM Wrapping (Descending Order per Node) ─────────────
  // Processing ops in descending order per text node guarantees that splitText
  // does not invalidate startOffsets of remaining operations on the same node.
  for (const [node, ops] of nodeOps.entries()) {
    ops.sort((a, b) => b.startOffset - a.startOffset)

    let currentNode = node
    for (const op of ops) {
      const len = currentNode.nodeValue?.length || 0
      if (op.startOffset < 0 || op.endOffset > len || op.startOffset >= op.endOffset) {
        continue
      }

      try {
        let targetNode = currentNode
        if (op.endOffset < len) {
          targetNode.splitText(op.endOffset)
        }
        if (op.startOffset > 0) {
          targetNode = targetNode.splitText(op.startOffset)
        }

        const mark = document.createElement('mark')
        mark.className = 'truthscan-inline-highlight'
        mark.style.backgroundColor = op.color
        mark.style.color = 'inherit'
        mark.style.borderRadius = '2px'
        mark.style.borderBottom = `2px solid ${op.borderColor}`
        mark.style.padding = '2px 0'
        mark.title = op.title

        targetNode.replaceWith(mark)
        mark.appendChild(targetNode)
      } catch (err) {
        console.warn('[TruthScan Content] Failed inline wrap:', err)
      }
    }
  }

  // ─── 4. Inject Companion Overview Panel ───────────────────────────────────
  const modeLabel = mode === 'fake' ? '🔴 Fake Risk' : mode === 'ai' ? '🟣 AI-Generated' : '🟠 Both'
  const modeColor = mode === 'fake' ? '#ef4444' : mode === 'ai' ? '#8b5cf6' : '#f97316'

  const rows = scores.map((s) => {
    const score  = mode === 'fake' ? s.fakeScore : mode === 'ai' ? s.aiScore : Math.max(s.fakeScore, s.aiScore)
    const isHigh = score >= 60
    const isMid  = score >= 40 && score < 60
    const bg     = isHigh ? 'rgba(239,68,68,0.15)' : isMid ? 'rgba(249,115,22,0.12)' : 'rgba(34,197,94,0.10)'
    const border = isHigh ? '#ef4444' : isMid ? '#f97316' : '#22c55e'
    const pct    = isHigh ? `${score}%` : isMid ? `${score}%` : `${score}%`
    const label  = isHigh ? '🔴' : isMid ? '🟠' : '🟢'

    const preview = s.text.length > 120 ? s.text.slice(0, 117) + '…' : s.text

    return `<div style="
      padding:8px 10px;
      background:${bg};
      border-left:3px solid ${border};
      border-radius:4px;
      font-size:11px;
      line-height:1.5;
      color:#e2e8f0;
    ">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span style="font-size:10px;color:#94a3b8;">
          ${mode === 'both' ? `Fake: ${s.fakeScore}% | AI: ${s.aiScore}%` : `Score: ${pct}`}
        </span>
        <span style="font-size:12px;">${label}</span>
      </div>
      <div style="color:#cbd5e1;">"${preview}"</div>
    </div>`
  }).join('')

  const noHighlights = filtered.length === 0

  const panel = document.createElement('div')
  panel.id = PANEL_ID
  panel.innerHTML = `
    <div style="
      position:fixed;
      bottom:20px;
      right:20px;
      width:340px;
      max-height:480px;
      background:#0f172a;
      border:1px solid ${modeColor}55;
      border-radius:12px;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
      z-index:2147483647;
      display:flex;
      flex-direction:column;
      overflow:hidden;
    ">
      <!-- Header -->
      <div style="
        display:flex;align-items:center;justify-content:space-between;
        padding:12px 14px;
        background:#1e293b;
        border-bottom:1px solid ${modeColor}44;
        flex-shrink:0;
      ">
        <div>
          <div style="font-size:12px;font-weight:700;color:#f1f5f9;">${modeLabel} Inline Highlights</div>
          <div style="font-size:10px;color:#34d399;margin-top:2px;font-weight:500;">
            ✓ Inline text highlighted on page
          </div>
        </div>
        <button id="truthscan-close-btn" style="
          background:none;border:none;color:#64748b;cursor:pointer;
          font-size:18px;line-height:1;padding:2px 6px;
        ">×</button>
      </div>
      <!-- Note -->
      <div style="padding:8px 14px;background:#1e293b22;border-bottom:1px solid #ffffff11;flex-shrink:0;">
        <p style="font-size:9px;color:#475569;margin:0;line-height:1.4;">
          Hover over highlighted text on the webpage to see detailed score tooltips.
        </p>
      </div>
      <!-- Sentences -->
      <div style="overflow-y:auto;padding:10px;display:flex;flex-direction:column;gap:6px;flex:1;">
        ${noHighlights
          ? `<div style="text-align:center;padding:24px;color:#475569;font-size:12px;">
              No sentences crossed the threshold for this mode.
             </div>`
          : rows
        }
      </div>
    </div>
  `

  document.body.appendChild(panel)
  document.getElementById('truthscan-close-btn')?.addEventListener('click', clearHighlights)
}

// ─── Page inspector ───────────────────────────────────────────────────────────

class PageInspector {
  private analysisRunning = false

  constructor() {
    this.bootstrap()
  }

  private bootstrap() {
    chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
      console.log('[TruthScan Content] Message received:', request.type)

      if (request.type === 'ANALYZE_PAGE') {
        this.runPageAnalysis().then(sendResponse)
        return true
      }

      if (request.type === 'GET_CURRENT_URL') {
        sendResponse({ url: window.location.href })
        return true
      }

      // ── Highlight sentence scores on the live DOM ────────────────────────
      if (request.type === 'HIGHLIGHT_SENTENCES') {
        const { scores, mode } = request
        try {
          highlightSentences(scores as SentenceScore[], mode ?? 'fake')
          sendResponse({ success: true })
        } catch (err) {
          sendResponse({ success: false, error: String(err) })
        }
        return true
      }

      // ── Remove all highlights ────────────────────────────────────────────
      if (request.type === 'CLEAR_HIGHLIGHTS') {
        clearHighlights()
        sendResponse({ success: true })
        return true
      }
    })
    this.initAutoScan()
  }

  private initAutoScan() {
    chrome.storage.local.get(['autoScan'], (result) => {
      if (result.autoScan) {
        console.log('[TruthScan Content] Auto-scan enabled, scheduling...')
        setTimeout(() => this.runPageAnalysis(), 2000)
      }
    })
  }

  private async runPageAnalysis(): Promise<any> {
    if (this.analysisRunning) {
      return { error: 'Analysis already in progress' }
    }

    this.analysisRunning = true
    console.log('[TruthScan Content] Starting page analysis...')

    try {
      const pageData = this.gatherPageData()
      this.analysisRunning = false
      return { success: true, content: pageData }
    } catch (err) {
      this.analysisRunning = false
      console.error('[TruthScan Content] Analysis error:', err)
      return { error: err instanceof Error ? err.message : 'Unknown error' }
    }
  }

  private gatherPageData(): PageData {
    return {
      title: document.title || '',
      text: this.collectTextNodes(),
      url: window.location.href,
      timestamp: new Date(),
    }
  }

  private collectTextNodes(): string {
    for (const selector of CONTENT_AREA_SELECTORS) {
      const el = document.querySelector(selector)
      if (el) {
        const visibleText = (el as HTMLElement).innerText || el.textContent || ''
        return visibleText.replace(/\s+/g, ' ').trim().substring(0, 10000)
      }
    }
    const bodyText = ((document.body as HTMLElement).innerText || document.body.textContent || '')
      .replace(/\s+/g, ' ')
      .trim()
    return bodyText.substring(0, 10000)
  }

  public scan() {
    return this.runPageAnalysis()
  }
}

const truthScanInspector = new PageInspector()
console.log('[TruthScan Content] Content script initialized')
window.truthScanInspector = truthScanInspector
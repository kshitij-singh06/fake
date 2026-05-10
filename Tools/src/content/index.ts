// TruthScan — Content script

interface PageData {
  title: string
  text: string
  url: string
  timestamp: Date
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

class PageInspector {
  private analysisRunning = false

  constructor() {
    this.bootstrap()
  }

  private bootstrap() {
    chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
      console.log('[TruthScan Content] Message received:', request)

      if (request.type === 'ANALYZE_PAGE') {
        this.runPageAnalysis().then(sendResponse)
        return true
      }

      if (request.type === 'GET_CURRENT_URL') {
        console.log('[TruthScan Content] Current URL:', window.location.href)
        sendResponse({ url: window.location.href })
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
      console.log('[TruthScan Content] Analysis already in progress')
      return { error: 'Analysis already in progress' }
    }

    this.analysisRunning = true
    console.log('[TruthScan Content] Starting page analysis...')

    try {
      const pageData = this.gatherPageData()
      console.log('[TruthScan Content] Page data gathered:', {
        title: pageData.title,
        textLength: pageData.text.length,
        url: pageData.url,
      })
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
    console.log('[TruthScan Content] Collecting text nodes...')
    for (const selector of CONTENT_AREA_SELECTORS) {
      const el = document.querySelector(selector)
      if (el) {
        console.log(`[TruthScan Content] Found content via selector: ${selector}`)
        // Read visible text only. Do not mutate DOM while scanning.
        const visibleText = (el as HTMLElement).innerText || el.textContent || ''
        return visibleText.replace(/\s+/g, ' ').trim().substring(0, 10000)
      }
    }

    console.log('[TruthScan Content] Falling back to body content')
    const bodyText = ((document.body as HTMLElement).innerText || document.body.textContent || '')
      .replace(/\s+/g, ' ')
      .trim()
    const clipped = bodyText.substring(0, 10000)
    console.log(`[TruthScan Content] Collected ${clipped.length} characters`)
    return clipped
  }

  public scan() {
    return this.runPageAnalysis()
  }
}

const truthScanInspector = new PageInspector()
console.log('[TruthScan Content] Content script initialized')
window.truthScanInspector = truthScanInspector
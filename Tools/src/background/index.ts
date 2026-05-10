// TruthScan — Background service worker

console.log('[TruthScan Background] Service worker initialized')

chrome.runtime.onInstalled.addListener(() => {
  console.log('[TruthScan Background] Extension installed')
  chrome.storage.local.set({
    theme: 'light',
    autoScan: false,
    notifications: true,
    apiUrl: 'http://localhost:5000',
  })
})

// ─── Message Handlers ────────────────────────────────────────────────────────

function onScanPage(sender: chrome.runtime.MessageSender, sendResponse: (r: any) => void) {
  console.log('[TruthScan Background] Scan requested for:', sender.tab?.url)
  setTimeout(() => {
    const mockResult = {
      url: sender.tab?.url,
      aiScore: Math.floor(Math.random() * 100),
      fakeNewsScore: Math.floor(Math.random() * 100),
      risk: Math.random() > 0.5 ? 'high' : 'low',
    }
    console.log('[TruthScan Background] Mock result:', mockResult)
    sendResponse({ success: true, analysis: mockResult })
  }, 1000)
}

function onGetSettings(sendResponse: (r: any) => void) {
  chrome.storage.local.get(['theme', 'autoScan', 'notifications', 'apiUrl'], (result) => {
    console.log('[TruthScan Background] Settings fetched:', result)
    sendResponse(result)
  })
}

function onUpdateSettings(settings: Record<string, any>, sendResponse: (r: any) => void) {
  console.log('[TruthScan Background] Updating settings:', settings)
  chrome.storage.local.set(settings, () => sendResponse({ success: true }))
}

function onTestApiConnection(sendResponse: (r: any) => void) {
  console.log('[TruthScan Background] Testing API connectivity...')
  probeApiServer().then(sendResponse)
}

// ─── Runtime Message Listener ────────────────────────────────────────────────

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('[TruthScan Background] Message received:', request)

  switch (request.type) {
    case 'SCAN_PAGE':
      onScanPage(sender, sendResponse)
      return true
    case 'GET_SETTINGS':
      onGetSettings(sendResponse)
      return true
    case 'UPDATE_SETTINGS':
      onUpdateSettings(request.settings, sendResponse)
      return true
    case 'TEST_API_CONNECTION':
      onTestApiConnection(sendResponse)
      return true
  }
})

// ─── Extension Icon Click ─────────────────────────────────────────────────────

chrome.action.onClicked.addListener((tab) => {
  console.log('[TruthScan Background] Icon clicked for tab:', tab.url)
  if (tab.id) {
    chrome.tabs.sendMessage(tab.id, { type: 'TOGGLE_POPUP' })
  }
})

// ─── API Health Probe ────────────────────────────────────────────────────────

async function probeApiServer(): Promise<{ success: boolean; message: string }> {
  try {
    console.log('[TruthScan Background] Probing API server at localhost:5000...')
    const response = await fetch('http://localhost:5000/api/scrape', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://example.com' }),
    })
    if (response.ok) {
      console.log('[TruthScan Background] API server reachable')
      return { success: true, message: 'API server is running' }
    }
    console.log('[TruthScan Background] API returned status:', response.status)
    return { success: false, message: `API server responded with status ${response.status}` }
  } catch (err) {
    console.error('[TruthScan Background] Probe failed:', err)
    return {
      success: false,
      message: `Connection failed: ${err instanceof Error ? err.message : 'Unknown error'}`,
    }
  }
}

// ─── Stale Cache Cleanup ──────────────────────────────────────────────────────

function purgeStaleAnalysisCache(currentUrl: string, items: Record<string, any>) {
  const staleKeys = Object.keys(items).filter(
    (key) => key.startsWith('analysis_') && key !== `analysis_${currentUrl}`
  )
  if (staleKeys.length > 0) {
    chrome.storage.local.remove(staleKeys)
    console.log('[TruthScan Background] Purged stale cache entries:', staleKeys)
  }
}

// ─── Tab Update Listener ──────────────────────────────────────────────────────

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    console.log('[TruthScan Background] Tab updated:', tab.url)

    if (changeInfo.url) {
      console.log('[TruthScan Background] URL changed, purging stale analysis cache...')
      chrome.storage.local.get(null, (items) => {
        purgeStaleAnalysisCache(tab.url!, items)
      })
    }

    chrome.storage.local.get(['autoScan'], (result) => {
      if (result.autoScan) {
        console.log('[TruthScan Background] Auto-scan enabled, scheduling analysis...')
        setTimeout(() => {
          chrome.tabs.sendMessage(tabId, { type: 'ANALYZE_PAGE' })
        }, 2000)
      }
    })
  }
})
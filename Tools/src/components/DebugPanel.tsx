// TruthScan — Diagnostics panel component
// NOTE: The external API (truthScanClient) is preserved for reference but is NOT
// called in the active inference path. Diagnostics now test local model readiness.
import React, { useState } from 'react'
import { Bug, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { isModelReady } from '@/lib/localInference'

type ModelStatus = 'unknown' | 'ready' | 'missing'

const DiagnosticsPanel: React.FC<{ className?: string }> = ({ className }) => {
  const [isRunning, setIsRunning] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const [modelStatus, setModelStatus] = useState<ModelStatus>('unknown')

  const appendLog = (message: string) => {
    const ts = new Date().toLocaleTimeString()
    setLogs((prev) => [...prev.slice(-19), `[${ts}] ${message}`])
  }

  const executeTests = async () => {
    setIsRunning(true)
    setLogs([])
    appendLog('Starting diagnostics...')

    try {
      // Test 1: Local model file reachability
      appendLog('Test 1: Checking local ONNX model file...')
      const modelReady = await isModelReady()
      setModelStatus(modelReady ? 'ready' : 'missing')
      appendLog(`Local model: ${modelReady ? 'FOUND ✓' : 'NOT FOUND ✗'}`)

      // Test 2: Chrome extension APIs
      appendLog('Test 2: Checking Chrome extension APIs...')
      try {
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
        appendLog(`Chrome tabs API: SUCCESS (${tabs.length} active tab)`)
        if (tabs[0]?.url) appendLog(`Current URL: ${tabs[0].url}`)
      } catch (err) {
        appendLog(`Chrome API check failed: ${err}`)
      }

      // Test 3: Chrome storage
      appendLog('Test 3: Checking Chrome storage API...')
      try {
        await new Promise<void>((resolve) =>
          chrome.storage.local.set({ _diag_test: 1 }, () => {
            chrome.storage.local.remove('_diag_test', resolve)
          })
        )
        appendLog('Chrome storage API: SUCCESS ✓')
      } catch (err) {
        appendLog(`Chrome storage failed: ${err}`)
      }

      appendLog('Diagnostics complete.')
    } catch (err) {
      appendLog(`Fatal test error: ${err}`)
    } finally {
      setIsRunning(false)
    }
  }

  const renderStatusBadge = () => {
    switch (modelStatus) {
      case 'ready':
        return <CheckCircle className="w-4 h-4 text-emerald-400" />
      case 'missing':
        return <AlertCircle className="w-4 h-4 text-red-400" />
      default:
        return <div className="w-4 h-4 bg-slate-600 rounded-full animate-pulse" />
    }
  }

  const getStatusLabel = () => {
    const labels: Record<ModelStatus, string> = {
      ready: 'Ready',
      missing: 'Not Found',
      unknown: 'Unknown',
    }
    return labels[modelStatus]
  }

  const statusLabelColor = {
    ready: 'text-emerald-400',
    missing: 'text-red-400',
    unknown: 'text-slate-500',
  }[modelStatus]

  return (
    <div className={cn('glass-panel p-4', className)}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
          <Bug className="w-4 h-4 text-purple-400" />
          Diagnostics
        </h3>
        <button
          onClick={executeTests}
          disabled={isRunning}
          className="ts-btn-ghost flex items-center gap-1.5 text-xs"
        >
          <RefreshCw className={cn('w-3.5 h-3.5', isRunning && 'animate-spin')} />
          {isRunning ? 'Running...' : 'Run Tests'}
        </button>
      </div>

      <div className="space-y-3">
        {/* Model status */}
        <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
          <span className="text-xs text-slate-400">Local ONNX Model</span>
          <div className="flex items-center gap-1.5">
            {renderStatusBadge()}
            <span className={cn('text-xs font-medium', statusLabelColor)}>
              {getStatusLabel()}
            </span>
          </div>
        </div>

        {/* Log output */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-medium text-slate-400">Test Log</span>
            <span className="text-[10px] text-slate-600">{logs.length} entries</span>
          </div>
          <div className="max-h-40 overflow-y-auto bg-black/30 rounded-lg p-2 text-[10px] font-mono">
            {logs.length === 0 ? (
              <div className="text-slate-600 text-center py-4">
                No logs yet. Click "Run Tests" to start.
              </div>
            ) : (
              logs.map((entry, i) => (
                <div key={i} className="text-slate-500 mb-0.5 leading-relaxed">{entry}</div>
              ))
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="text-[10px] text-slate-600 space-y-0.5">
          <p className="font-medium text-slate-500">Debug tips:</p>
          <ul className="list-disc list-inside space-y-0.5 pl-1">
            <li>All inference runs locally — no server needed</li>
            <li>Check browser console for detailed logs</li>
            <li>If model is missing, reload the extension</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DiagnosticsPanel
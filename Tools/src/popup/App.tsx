// TruthScan — Main popup application
import React, { useState, useEffect } from 'react'
import {
  Shield, AlertTriangle, CheckCircle, Info, Moon, Sun,
  Settings, Zap, Eye, BarChart3, HelpCircle, Loader2,
  FileText, ExternalLink, Cpu, Globe,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  // NOTE: _truthScanClient and related API types are preserved for fallback/reference.
  // Active inference runs locally via localInference.ts — the API is NOT called.
  truthScanClient as _truthScanClient,
  AnalysisResult,
  FactCheckClaim,
  SummarizationResult,
  QAResult,
} from '@/lib/api'
import {
  detectAILocally,
  detectFakeNewsLocally,
  isFakeModelReady,
  isModelReady,
  warmUpFakeModel,
  warmUpModel,
} from '@/lib/localInference'
import ScanPipeline, { PipelineStage } from '@/components/AnalysisProgress'
import DiagnosticsPanel from '@/components/DebugPanel'

// ─── Type Definitions ─────────────────────────────────────────────────────────

interface ScanEntry {
  id: string
  type: 'ai-generated' | 'fake-news' | 'suspicious' | 'safe'
  confidence: number
  description: string
  timestamp: Date
}

interface PageReport {
  url: string
  title: string
  aiScore: number
  fakeNewsScore: number
  overallRisk: 'low' | 'medium' | 'high'
  results: ScanEntry[]
  factCheckClaims?: FactCheckClaim[]
  apiData?: AnalysisResult
}

type ActiveTab = 'overview' | 'analysis' | 'qa' | 'settings'

// ─── Utility Functions ────────────────────────────────────────────────────────

function labelAIRisk(pct: number): string {
  if (pct >= 80) return 'Very High'
  if (pct >= 60) return 'High'
  if (pct >= 40) return 'Moderate'
  if (pct >= 20) return 'Low'
  return 'Very Low'
}

function resolveAIRiskColor(pct: number): string {
  if (pct >= 80) return 'text-red-400'
  if (pct >= 60) return 'text-orange-400'
  if (pct >= 40) return 'text-amber-400'
  return 'text-emerald-400'
}

function labelFakeRisk(pct: number): string {
  if (pct >= 80) return 'Very High'
  if (pct >= 60) return 'High'
  if (pct >= 40) return 'Moderate'
  if (pct >= 20) return 'Low'
  return 'Very Low'
}


function resolveRiskIcon(risk: string) {
  if (risk === 'low') return <CheckCircle className="w-4 h-4 text-emerald-400" />
  if (risk === 'high') return <AlertTriangle className="w-4 h-4 text-red-400" />
  return <AlertTriangle className="w-4 h-4 text-amber-400" />
}

// ─── AppHeader ────────────────────────────────────────────────────────────────

type InferenceMode = 'local' | 'api'

interface AppHeaderProps {
  darkMode: boolean
  serverOnline: boolean | null
  fakeModelOnline: boolean | null
  inferenceMode: InferenceMode
  onToggleTheme: () => void
  onToggleMode: () => void
}

function AppHeader({ darkMode, serverOnline, fakeModelOnline, inferenceMode, onToggleTheme, onToggleMode }: AppHeaderProps) {
  const isLocal = inferenceMode === 'local'
  return (
    <div className="flex-shrink-0 border-b border-purple-500/20 bg-purple-900/10">
      {/* Top row: logo + status dots + theme toggle */}
      <div className="flex items-center justify-between px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white tracking-wide leading-tight">TruthScan</h1>
            <p className="text-[10px] text-purple-300 leading-tight">AI & Misinformation Detector</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Status dots */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1" title="AI model status">
              {serverOnline === null ? (
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse" />
              ) : (
                <div
                  className={cn('w-2 h-2 rounded-full', serverOnline ? 'bg-emerald-400' : 'bg-red-400')}
                  style={serverOnline ? { boxShadow: '0 0 6px rgba(52,211,153,0.6)' } : {}}
                />
              )}
              <span className={cn('text-[10px] font-medium', serverOnline ? 'text-emerald-400' : 'text-red-400')}>AI</span>
            </div>
            <div className="flex items-center gap-1" title="Fake-news model status">
              {fakeModelOnline === null ? (
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse" />
              ) : (
                <div
                  className={cn('w-2 h-2 rounded-full', fakeModelOnline ? 'bg-emerald-400' : 'bg-red-400')}
                  style={fakeModelOnline ? { boxShadow: '0 0 6px rgba(52,211,153,0.6)' } : {}}
                />
              )}
              <span className={cn('text-[10px] font-medium', fakeModelOnline ? 'text-emerald-400' : 'text-red-400')}>Fake</span>
            </div>
          </div>
          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-slate-400 hover:text-white"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mode toggle pill */}
      <div className="flex items-center justify-center pb-2.5 px-4">
        <button
          onClick={onToggleMode}
          title={isLocal ? 'Switch to API mode (requires backend server)' : 'Switch to Local mode (offline, no server needed)'}
          className={cn(
            'relative flex items-center rounded-full p-0.5 transition-all duration-300 w-48',
            isLocal
              ? 'bg-gradient-to-r from-violet-600/40 to-indigo-600/40 border border-violet-500/40'
              : 'bg-gradient-to-r from-sky-600/40 to-cyan-600/40 border border-sky-500/40'
          )}
          style={isLocal
            ? { boxShadow: '0 0 12px rgba(124,58,237,0.25)' }
            : { boxShadow: '0 0 12px rgba(14,165,233,0.25)' }
          }
        >
          {/* Sliding indicator */}
          <span
            className={cn(
              'absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full transition-all duration-300 ease-in-out',
              isLocal
                ? 'left-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 shadow-lg'
                : 'left-[calc(50%+2px)] bg-gradient-to-r from-sky-500 to-cyan-500 shadow-lg'
            )}
            style={isLocal
              ? { boxShadow: '0 0 8px rgba(124,58,237,0.5)' }
              : { boxShadow: '0 0 8px rgba(14,165,233,0.5)' }
            }
          />
          {/* Labels */}
          <span className={cn(
            'relative z-10 flex-1 flex items-center justify-center gap-1.5 py-1 text-[11px] font-semibold transition-colors duration-300',
            isLocal ? 'text-white' : 'text-slate-400'
          )}>
            <Cpu className="w-3 h-3" />
            Local
          </span>
          <span className={cn(
            'relative z-10 flex-1 flex items-center justify-center gap-1.5 py-1 text-[11px] font-semibold transition-colors duration-300',
            !isLocal ? 'text-white' : 'text-slate-400'
          )}>
            <Globe className="w-3 h-3" />
            API
          </span>
        </button>
      </div>
    </div>
  )
}

// ─── TabNavigation ────────────────────────────────────────────────────────────

interface TabNavigationProps {
  activeTab: ActiveTab
  onTabChange: (tab: ActiveTab) => void
}

const TAB_DEFS: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
  { id: 'overview', label: 'Overview', icon: <Eye className="w-3.5 h-3.5" /> },
  { id: 'analysis', label: 'Analysis', icon: <BarChart3 className="w-3.5 h-3.5" /> },
  { id: 'qa', label: 'Q&A', icon: <HelpCircle className="w-3.5 h-3.5" /> },
  { id: 'settings', label: 'Settings', icon: <Settings className="w-3.5 h-3.5" /> },
]

function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex gap-1 px-3 py-2 border-b border-purple-500/10 bg-black/20 flex-shrink-0">
      {TAB_DEFS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            'flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200',
            activeTab === tab.id
              ? 'bg-purple-600 text-white shadow-sm'
              : 'text-slate-500 hover:text-slate-200 hover:bg-white/5'
          )}
          style={activeTab === tab.id ? { boxShadow: '0 0 12px rgba(124,58,237,0.35)' } : {}}
        >
          {tab.icon}
          <span className="hidden sm:inline">{tab.label}</span>
          <span className="sm:hidden">{tab.label.split('')[0]}</span>
        </button>
      ))}
    </div>
  )
}

// ─── OverviewTab ──────────────────────────────────────────────────────────────

interface OverviewTabProps {
  report: PageReport | null
  scanInProgress: boolean
  summarizeInProgress: boolean
  summaryData: SummarizationResult | null
  pipelineStages: PipelineStage[]
  serverOnline: boolean | null
  fakeModelOnline: boolean | null
  inferenceMode: InferenceMode
  onScan: () => void
  onSummarize: () => void
}

function OverviewTab({
  report, scanInProgress, summarizeInProgress, summaryData,
  pipelineStages, serverOnline, fakeModelOnline, inferenceMode, onScan, onSummarize,
}: OverviewTabProps) {
  const activeSummary = summaryData ?? report?.apiData?.summarizationResult
  const isLocal = inferenceMode === 'local'
  // Only show local-model warnings when actually in local mode
  const missingModels: string[] = []
  if (isLocal && serverOnline === false) missingModels.push('AI')
  if (isLocal && fakeModelOnline === false) missingModels.push('Fake-news')
  const hasMissingModels = missingModels.length > 0

  return (
    <div className="space-y-3">
      {/* Action panel */}
      <div className="glass-panel p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-white">Page Scanner</h2>
          <div className="flex gap-2">
            <button
              onClick={onScan}
              disabled={scanInProgress}
              className="ts-btn-primary flex items-center gap-1.5 text-xs"
            >
              {scanInProgress
                ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Scanning...</>
                : <><Zap className="w-3.5 h-3.5" />Scan Page</>}
            </button>
            <button
              onClick={onSummarize}
              disabled={summarizeInProgress || !report?.apiData?.scrapedData?.text}
              className="ts-btn-ghost flex items-center gap-1.5 text-xs"
            >
              {summarizeInProgress
                ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Summarizing...</>
                : <><FileText className="w-3.5 h-3.5" />Summarize</>}
            </button>
          </div>
        </div>

        {/* Live pipeline */}
        {scanInProgress && pipelineStages.length > 0 && (
          <div className="mb-3">
            <ScanPipeline stages={pipelineStages} />
          </div>
        )}

        {/* Results */}
        {report ? (
          <div className="space-y-3">
            {/* Risk badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Overall Risk</span>
              <div className={cn(
                'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold',
                report.overallRisk === 'high' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                report.overallRisk === 'medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              )}>
                {resolveRiskIcon(report.overallRisk)}
                {report.overallRisk.toUpperCase()}
              </div>
            </div>

            {/* Score grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                {isLocal ? (
                  // Local model: show risk label (scores are calibrated, not raw %)
                  <div className={cn('text-lg font-bold', resolveAIRiskColor(report.aiScore))}>
                    {labelAIRisk(report.aiScore)}
                  </div>
                ) : (
                  // API mode: show the actual % returned by the LLM
                  <div className={cn('text-lg font-bold', resolveAIRiskColor(report.aiScore))}>
                    {report.aiScore}%
                  </div>
                )}
                <div className="text-[10px] text-slate-600 mt-0.5">
                  {isLocal ? 'AI Risk Level · Local' : 'AI Likelihood · API'}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <div className="text-lg font-bold text-amber-400">{report.fakeNewsScore}%</div>
                <div className="text-[10px] text-slate-600 mt-0.5">
                  {isLocal ? 'False Claims · Local' : 'Misinformation · API'}
                </div>
              </div>
            </div>

            {report.apiData && (
              <div className="flex items-center gap-2 px-3 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                <Info className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                <span className="text-xs text-indigo-300">
                  {report.apiData.scrapedData.text.length.toLocaleString()} characters analyzed
                </span>
              </div>
            )}

            {/* Summary preview */}
            {activeSummary && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <FileText className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs font-semibold text-emerald-300">Summary</span>
                </div>
                <p className="text-[10px] text-emerald-700 mb-2">
                  {activeSummary.model} · {activeSummary.input_length} → {activeSummary.summary_length} chars
                </p>
                <div className="text-xs text-slate-300 whitespace-pre-wrap max-h-32 overflow-y-auto leading-relaxed">
                  {activeSummary.summary}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="py-10 text-center">
            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
              <Shield className="w-7 h-7 text-purple-400/40" />
            </div>
            <p className="text-sm text-slate-500 mb-1">Click "Scan Page" to analyze this webpage</p>
            <p className="text-xs text-slate-700">
              {isLocal
                ? 'Offline · DistilBERT ONNX · No API key needed'
                : 'API Mode · Gemini + Tavily fact-check · Requires server'}
            </p>
            {hasMissingModels && (
              <p className="text-xs text-red-400 mt-3 flex items-center justify-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />Local model missing: {missingModels.join(', ')} — reinstall extension
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── AnalysisTab ──────────────────────────────────────────────────────────────

interface AnalysisTabProps {
  report: PageReport
  summaryData: SummarizationResult | null
  summarizeInProgress: boolean
  imageExpanded: boolean
  onSummarize: () => void
  onToggleImages: () => void
}

function AnalysisTab({ report, summaryData, summarizeInProgress, imageExpanded, onSummarize, onToggleImages }: AnalysisTabProps) {
  const activeSummary = summaryData ?? report.apiData?.summarizationResult

  return (
    <div className="space-y-3">
      {/* Detection Results */}
      <div className="glass-panel p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Detection Results</h3>
          {!activeSummary && (
            <button
              onClick={onSummarize}
              disabled={summarizeInProgress}
              className="ts-btn-ghost text-xs flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              {summarizeInProgress ? 'Processing...' : 'Summarize'}
            </button>
          )}
        </div>
        <div className="space-y-2">
          {report.results.map((entry) => (
            <div key={entry.id} className="bg-white/5 border border-white/8 rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-slate-200 capitalize">
                  {entry.type.replace('-', ' ')}
                </span>
                <span className={cn('text-xs font-bold',
                  entry.confidence >= 70 ? 'text-red-400' :
                  entry.confidence >= 40 ? 'text-amber-400' : 'text-emerald-400'
                )}>
                  {entry.confidence}%
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fact Check Claims */}
      {report.factCheckClaims && report.factCheckClaims.length > 0 && (
        <div className="glass-panel p-4">
          <h3 className="text-sm font-semibold text-white mb-3">Fact Check</h3>
          <div className="space-y-2">
            {report.factCheckClaims.map((claim, i) => (
              <div
                key={i}
                className={cn('p-3 rounded-xl border-l-2',
                  claim.isLikelyTrue
                    ? 'bg-emerald-500/10 border-emerald-500'
                    : 'bg-red-500/10 border-red-500'
                )}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  {claim.isLikelyTrue
                    ? <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    : <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />}
                  <span className={cn('text-xs font-semibold',
                    claim.isLikelyTrue ? 'text-emerald-300' : 'text-red-300'
                  )}>
                    {claim.isLikelyTrue ? 'Likely True' : 'Likely False'}
                  </span>
                </div>
                <p className="text-xs text-slate-300 mb-2 leading-relaxed">"{claim.claim}"</p>
                {claim.supportingSources && claim.supportingSources.length > 0 && (
                  <div className="space-y-1">
                    <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-wide">Sources</p>
                    {claim.supportingSources.map((src, j) => (
                      <a
                        key={j}
                        href={src.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 group"
                      >
                        <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 flex-shrink-0" />
                        <span className="text-[10px] text-indigo-400 hover:underline truncate" title={src.title}>
                          {src.title}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sentiment */}
      {report.apiData?.sentimentResult && (
        <div className="glass-panel p-4">
          <h3 className="text-sm font-semibold text-white mb-3">Sentiment Analysis</h3>
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-medium text-indigo-300">Content Tone</span>
            </div>
            <p className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
              {report.apiData.sentimentResult.summary}
            </p>
          </div>
        </div>
      )}

      {/* Summary */}
      {activeSummary && (
        <div className="glass-panel p-4">
          <h3 className="text-sm font-semibold text-white mb-3">Content Summary</h3>
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <div className="flex items-center gap-2 mb-1.5">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-300">AI-Generated Summary</span>
            </div>
            <p className="text-[10px] text-emerald-700 mb-2">
              {activeSummary.model} · {activeSummary.input_length} → {activeSummary.summary_length} chars
            </p>
            <div className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
              {activeSummary.summary}
            </div>
          </div>
        </div>
      )}

      {/* Image Analysis */}
      {report.apiData?.imageDetectionResults && report.apiData.imageDetectionResults.length > 0 && (
        <div className="glass-panel p-4">
          <button
            onClick={onToggleImages}
            className="w-full flex items-center justify-between hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-indigo-400" />
              <div className="text-left">
                <h3 className="text-sm font-semibold text-white">Image Analysis</h3>
                <p className="text-[10px] text-slate-500">
                  {report.apiData.imageDetectionResults.length} image{report.apiData.imageDetectionResults.length !== 1 ? 's' : ''} analyzed
                </p>
              </div>
            </div>
            <div className={cn('transition-transform duration-200', imageExpanded ? 'rotate-180' : '')}>
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          {imageExpanded && (
            <div className="mt-3 space-y-2">
              {report.apiData.imageDetectionResults.map((result, i) => (
                <div
                  key={i}
                  className={cn('p-3 rounded-xl border-l-2',
                    result.aiLikelihoodPercent > 70 ? 'bg-red-500/10 border-red-500' :
                    result.aiLikelihoodPercent > 40 ? 'bg-amber-500/10 border-amber-500' :
                    'bg-emerald-500/10 border-emerald-500'
                  )}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {result.aiLikelihoodPercent > 70
                      ? <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      : result.aiLikelihoodPercent > 40
                      ? <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      : <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                    <span className={cn('text-xs font-medium',
                      result.aiLikelihoodPercent > 70 ? 'text-red-300' :
                      result.aiLikelihoodPercent > 40 ? 'text-amber-300' : 'text-emerald-300'
                    )}>
                      AI Likelihood: {result.aiLikelihoodPercent}%
                    </span>
                  </div>
                  <img
                    src={result.url}
                    alt="Analyzed"
                    className="max-w-full h-24 object-cover rounded-lg border border-white/10 mb-2"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                  <p className="text-[10px] text-slate-600 break-all">{result.url}</p>
                  {result.rawModelReply && (
                    <p className="text-xs text-slate-400 mt-1">
                      <span className="font-medium text-slate-300">Analysis: </span>
                      {result.rawModelReply}
                    </p>
                  )}
                  {result.topSources && result.topSources.length > 0 && result.aiLikelihoodPercent > 40 && (
                    <div className="mt-2 p-2 bg-white/5 rounded-lg">
                      <p className="text-[10px] font-medium text-slate-500 mb-1">Possible AI Sources</p>
                      {result.topSources.map((src, j) => (
                        <div key={j} className="flex justify-between text-[10px]">
                          <span className="capitalize text-slate-500">{src.source}</span>
                          <span className={cn('font-medium',
                            src.confidence > 1 ? 'text-red-400' :
                            src.confidence > 0.1 ? 'text-amber-400' : 'text-slate-500'
                          )}>
                            {src.confidence.toFixed(2)}%
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── QATab ────────────────────────────────────────────────────────────────────

interface QATabProps {
  report: PageReport | null
  question: string
  qaResponse: QAResult | null
  answerInProgress: boolean
  scanInProgress: boolean
  onQuestionChange: (q: string) => void
  onSubmit: () => void
  onScan: () => void
}

function QATab({ report, question, qaResponse, answerInProgress, scanInProgress, onQuestionChange, onSubmit, onScan }: QATabProps) {
  const hasContent = !!report?.apiData?.scrapedData?.text

  return (
    <div className="space-y-3">
      <div className="glass-panel p-4">
        <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-indigo-400" />
          Ask About This Page
        </h3>

        {!hasContent ? (
          <div className="py-10 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-indigo-400/40" />
            </div>
            <p className="text-sm text-slate-500 mb-4">Scan the page first to enable Q&A</p>
            <button
              onClick={onScan}
              disabled={scanInProgress}
              className="ts-btn-primary text-xs flex items-center gap-1.5 mx-auto"
            >
              {scanInProgress
                ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Scanning...</>
                : <><Zap className="w-3.5 h-3.5" />Scan Page</>}
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Question</label>
              <textarea
                value={question}
                onChange={(e) => onQuestionChange(e.target.value)}
                placeholder="Ask anything about the page content..."
                className="ts-input h-20 resize-none text-sm"
                disabled={answerInProgress}
              />
            </div>
            <button
              onClick={onSubmit}
              disabled={!question.trim() || answerInProgress}
              className="ts-btn-primary w-full flex items-center justify-center gap-2 text-sm"
            >
              {answerInProgress ? (
                <><Loader2 className="w-4 h-4 animate-spin" />Getting Answer...</>
              ) : (
                <><HelpCircle className="w-4 h-4" />Ask Question</>
              )}
            </button>

            {qaResponse && (
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <HelpCircle className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-indigo-300">Answer</span>
                </div>
                <p className="text-[10px] text-indigo-600 mb-2">
                  {qaResponse.model} · {qaResponse.content_length} chars context · {qaResponse.answer_length} char answer
                </p>
                <div className="text-xs text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {qaResponse.answer}
                </div>
              </div>
            )}

            <p className="text-[10px] text-slate-700 text-center">
              {report!.apiData!.scrapedData.text.length.toLocaleString()} characters available as context
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── SettingsTab ──────────────────────────────────────────────────────────────

interface SettingsTabProps {
  darkMode: boolean
  onToggleTheme: () => void
}

function SettingsTab({ darkMode, onToggleTheme }: SettingsTabProps) {
  return (
    <div className="space-y-3">
      <div className="glass-panel p-4">
        <h3 className="text-sm font-semibold text-white mb-3">Appearance</h3>
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="text-sm text-slate-200">Dark Theme</p>
            <p className="text-xs text-slate-600">Use dark color scheme</p>
          </div>
          <button
            onClick={onToggleTheme}
            className={cn(
              'relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200',
              darkMode ? 'bg-purple-600' : 'bg-slate-700'
            )}
          >
            <span className={cn(
              'inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200',
              darkMode ? 'translate-x-6' : 'translate-x-1'
            )} />
          </button>
        </div>
      </div>

      <DiagnosticsPanel />

      <div className="glass-panel p-4">
        <h3 className="text-sm font-semibold text-white mb-2">About TruthScan</h3>
        <p className="text-xs text-slate-400 leading-relaxed">
          TruthScan helps you identify AI-generated content and potential misinformation on any webpage.
          Stay informed online with advanced multi-model detection across text, facts, and images.
        </p>
        <div className="mt-3 flex items-center justify-between text-[10px] text-slate-600">
          <span>Version 2.0.0</span>
          <span>Inference: Local ONNX</span>
        </div>
      </div>
    </div>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [inferenceMode, setInferenceMode] = useState<InferenceMode>('local')
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview')
  const [scanInProgress, setScanInProgress] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [summarizeInProgress, _setSummarizeInProgress] = useState(false)
  const [answerInProgress, setAnswerInProgress] = useState(false)
  const [pageReport, setPageReport] = useState<PageReport | null>(null)
  // setSummaryData / _setSummarizeInProgress are kept for future local model additions.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [summaryData, _setSummaryData] = useState<SummarizationResult | null>(null)
  const [qaResponse, setQaResponse] = useState<QAResult | null>(null)
  const [userQuestion, setUserQuestion] = useState('')
  const [serverOnline, setServerOnline] = useState<boolean | null>(null)
  const [fakeModelOnline, setFakeModelOnline] = useState<boolean | null>(null)
  const [pipelineStages, setPipelineStages] = useState<PipelineStage[]>([])
  const [imageExpanded, setImageExpanded] = useState(false)

  useEffect(() => {
    chrome.storage.local.get(['theme', 'inferenceMode'], (result) => {
      const dark = result.theme !== 'light'
      setDarkMode(dark)
      document.documentElement.classList.toggle('dark', dark)
      if (result.inferenceMode === 'api' || result.inferenceMode === 'local') {
        setInferenceMode(result.inferenceMode)
      }
    })
    verifyApiConnection()
    restoreSavedReport()
    // Preload model + tokenizer in background so first scan is faster
    warmUpModel().catch(() => {})
    warmUpFakeModel().catch(() => {})
  }, [])

  const log = (msg: string) => console.log(`[TruthScan] ${msg}`)

  // ── Model Readiness Check ────────────────────────────────────────────────
  // NOTE: The external API (truthScanClient) is preserved in api.ts but is NOT
  // called here. Inference runs locally via localInference.ts.

  const verifyApiConnection = async () => {
    log('Checking local model availability...')
    try {
      const ready = await isModelReady()
      const fakeReady = await isFakeModelReady()
      setServerOnline(ready)
      setFakeModelOnline(fakeReady)
      log(`Local AI model: ${ready ? 'ready' : 'not found'}`)
      log(`Local fake-news model: ${fakeReady ? 'ready' : 'not found'}`)
    } catch {
      setServerOnline(false)
      setFakeModelOnline(false)
    }
  }

  // ── Theme Toggle ─────────────────────────────────────────────────────────

  const toggleTheme = () => {
    const nextDark = !darkMode
    setDarkMode(nextDark)
    document.documentElement.classList.toggle('dark', nextDark)
    chrome.storage.local.set({ theme: nextDark ? 'dark' : 'light' })
  }

  const toggleMode = () => {
    const next: InferenceMode = inferenceMode === 'local' ? 'api' : 'local'
    setInferenceMode(next)
    setPageReport(null)  // clear stale results when switching modes
    chrome.storage.local.set({ inferenceMode: next })
    log(`Switched to ${next} mode`)
  }

  // ── Pipeline Stage Management ─────────────────────────────────────────────

  const advanceStage = (stageId: string, status: PipelineStage['status'], error?: string) => {
    setPipelineStages((prev) =>
      prev.map((s) => (s.id === stageId ? { ...s, status, error } : s))
    )
  }

  const buildPipelineStages = (): PipelineStage[] => {
    const isApi = inferenceMode === 'api'
    return [
      { id: 'get-url',        title: 'Getting Page URL',    description: 'Retrieving current tab URL',                                        status: 'pending' },
      { id: 'scrape-content', title: 'Extracting Content',  description: 'Reading page text via content script',                               status: 'pending' },
      { id: 'detect-ai',      title: 'AI Detection',        description: isApi ? 'Gemini LLM scoring via server'    : 'Local DistilBERT ONNX', status: 'pending' },
      { id: 'fact-check',     title: 'Fact-Check',          description: isApi ? 'Tavily search + LLM verification' : 'Local DistilBERT ONNX', status: 'pending' },
      { id: 'sentiment',      title: 'Sentiment Analysis',  description: isApi ? 'Gemini sentiment via server'      : 'Skipped — no local model', status: 'pending' },
      { id: 'image-scan',     title: 'Image Scanning',      description: isApi ? 'AI image detection via server'    : 'Skipped — no local model', status: 'pending' },
      { id: 'summarize',      title: 'Summarizing',         description: isApi ? 'Groq / Gemini summarization'      : 'Skipped — no local model', status: 'pending' },
      { id: 'report',         title: 'Building Report',     description: 'Compiling risk assessment',                                          status: 'pending' },
    ]
  }

  // ── Report Persistence ────────────────────────────────────────────────────

  const restoreSavedReport = async () => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      if (!tab.url) return
      chrome.storage.local.get([`analysis_${tab.url}`], (result) => {
        const saved = result[`analysis_${tab.url}`]
        if (saved) {
          log(`Restored saved report for: ${tab.url}`)
          setPageReport(saved)
        }
      })
    } catch (err) {
      log(`Failed to restore report: ${err}`)
    }
  }

  const persistReport = async (report: PageReport) => {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      if (!tab.url) return
      chrome.storage.local.set({ [`analysis_${tab.url}`]: report }, () => {
        log(`Report saved for: ${tab.url}`)
      })
    } catch (err) {
      log(`Failed to save report: ${err}`)
    }
  }

  /**
   * Extracts page text by messaging the content script.
   * Falls back to chrome.scripting.executeScript if the content script isn't
   * loaded in the tab (e.g. tab was open before extension was reloaded).
   */
  const extractPageContentFromContentScript = async (tabId: number) => {
    // ── Primary path: message the already-injected content script ──────────
    try {
      const response = await chrome.tabs.sendMessage(tabId, { type: 'ANALYZE_PAGE' })
      if (response?.success && response?.content?.text) {
        const rawText = String(response.content.text).trim()
        if (rawText) {
          return { url: response.content.url || '', text: rawText, images: [] as string[] }
        }
      }
    } catch (_msgErr) {
      // "Could not establish connection" — content script not yet loaded.
      log('Content script not reachable, falling back to scripting.executeScript...')
    }

    // ── Fallback: inject a one-shot function directly into the tab ──────────
    // This works even when the tab was open before the extension was reloaded.
    const [injectionResult] = await chrome.scripting.executeScript({
      target: { tabId },
      func: () => {
        const SELECTORS = [
          'article', 'main', '[role="main"]',
          '.content', '.post-content', '.entry-content',
          '.article-content', '.story-content',
        ]
        let text = ''
        for (const sel of SELECTORS) {
          const el = document.querySelector(sel) as HTMLElement | null
          if (el) { text = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim(); break }
        }
        if (!text) {
          text = ((document.body as HTMLElement).innerText || document.body.textContent || '')
            .replace(/\s+/g, ' ').trim()
        }
        return { url: window.location.href, text: text.substring(0, 10000) }
      },
    })

    const result = injectionResult?.result as { url: string; text: string } | null
    if (!result?.text) {
      throw new Error('Could not extract page content — try refreshing the page')
    }

    log(`Fallback extraction: ${result.text.length} chars`)
    return { url: result.url, text: result.text, images: [] as string[] }
  }

  // ── Page Scan Orchestration ───────────────────────────────────────────────

  const triggerPageScan = async () => {
    setScanInProgress(true)
    const stages = buildPipelineStages()
    setPipelineStages(stages)
    log('Starting full page scan...')

    let currentTab: chrome.tabs.Tab | undefined
    let scrapeResult: any = null
    let detectResult: any = null
    let fakeDetectResult: any = null
    let factCheckResult: any = null
    let sentimentResult: any = null
    let imageResults: any[] = []
    let localSummary: SummarizationResult | null = null
    const scanEntries: ScanEntry[] = []

    try {
      // Stage 1: Get active tab URL
      try {
        advanceStage('get-url', 'loading')
        const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
        currentTab = tabs[0]
        if (!currentTab?.url) throw new Error('No active tab URL found')
        advanceStage('get-url', 'completed')
        log(`Scanning: ${currentTab.url}`)
      } catch (err) {
        advanceStage('get-url', 'error', err instanceof Error ? err.message : 'Unknown error')
        return
      }

      // Stage 2: Extract page content via content script (fully local, no server call)
      advanceStage('scrape-content', 'loading')
      if (currentTab.id) {
        try {
          scrapeResult = await extractPageContentFromContentScript(currentTab.id)
          advanceStage('scrape-content', 'completed')
          log(`Content extracted: ${scrapeResult.text.length} chars`)
        } catch (err) {
          advanceStage('scrape-content', 'error', err instanceof Error ? err.message : 'Content extraction failed')
          log(`Content extraction failed: ${err}`)
        }
      } else {
        advanceStage('scrape-content', 'error', 'No tab ID — cannot extract content')
      }

      // Stage 3: AI text detection
      if (scrapeResult) {
        advanceStage('detect-ai', 'loading')
        try {
          if (inferenceMode === 'local') {
            // ── Local ONNX path ──────────────────────────────────────────────
            const localResult = await detectAILocally(scrapeResult.text)
            detectResult = { textPreview: localResult.textPreview, aiLikelihoodPercent: localResult.aiLikelihoodPercent }
            advanceStage('detect-ai', 'completed')
            log(`Local AI score: ${localResult.aiLikelihoodPercent}%`)
            scanEntries.push({
              id: '1', type: 'ai-generated',
              confidence: localResult.aiLikelihoodPercent,
              description: `Local model (DistilBERT): ${labelAIRisk(localResult.aiLikelihoodPercent).toLowerCase()} likelihood of AI generation`,
              timestamp: new Date(),
            })
          } else {
            // ── API path ─────────────────────────────────────────────────────
            const apiResult = await _truthScanClient.runAiDetection(scrapeResult.text)
            detectResult = { textPreview: apiResult.textPreview, aiLikelihoodPercent: apiResult.aiLikelihoodPercent }
            advanceStage('detect-ai', 'completed')
            log(`API AI score: ${apiResult.aiLikelihoodPercent}%`)
            scanEntries.push({
              id: '1', type: 'ai-generated',
              confidence: apiResult.aiLikelihoodPercent,
              description: `API model (Gemini): ${labelAIRisk(apiResult.aiLikelihoodPercent).toLowerCase()} likelihood of AI generation`,
              timestamp: new Date(),
            })
          }
        } catch (err) {
          advanceStage('detect-ai', 'error', err instanceof Error ? err.message : 'AI detection failed')
          scanEntries.push({ id: '1', type: 'ai-generated', confidence: 0, description: `AI detection failed (${inferenceMode} mode) — see console`, timestamp: new Date() })
        }
      } else {
        advanceStage('detect-ai', 'error', 'No content — cannot run AI detection')
        scanEntries.push({ id: '1', type: 'ai-generated', confidence: 0, description: 'AI detection skipped — no content extracted', timestamp: new Date() })
      }

      // Stage 4: Fake news detection
      if (scrapeResult) {
        advanceStage('fact-check', 'loading')
        try {
          if (inferenceMode === 'local') {
            // ── Local ONNX path ──────────────────────────────────────────────
            const localFakeResult = await detectFakeNewsLocally(scrapeResult.text)
            fakeDetectResult = { textPreview: localFakeResult.textPreview, fakeLikelihoodPercent: localFakeResult.fakeLikelihoodPercent }
            advanceStage('fact-check', 'completed')
            log(`Local fake-news score: ${localFakeResult.fakeLikelihoodPercent}%`)
            scanEntries.push({
              id: '2', type: 'fake-news',
              confidence: localFakeResult.fakeLikelihoodPercent,
              description: `Local model (DistilBERT): ${labelFakeRisk(localFakeResult.fakeLikelihoodPercent).toLowerCase()} likelihood of fake news`,
              timestamp: new Date(),
            })
          } else {
            // ── API path ─────────────────────────────────────────────────────
            const apiFactResult = await _truthScanClient.verifyFacts(scrapeResult.text)
            const fakePct = _truthScanClient.computeMisinfoScore(apiFactResult.claims)
            fakeDetectResult = { textPreview: scrapeResult.text.slice(0, 200), fakeLikelihoodPercent: fakePct }
            factCheckResult = apiFactResult
            advanceStage('fact-check', 'completed')
            log(`API fact-check misinformation score: ${fakePct}%`)
            scanEntries.push({
              id: '2', type: 'fake-news',
              confidence: fakePct,
              description: `API fact-check (Google Search): ${apiFactResult.claims.length} claims verified`,
              timestamp: new Date(),
            })
          }
        } catch (err) {
          advanceStage('fact-check', 'error', err instanceof Error ? err.message : 'Fake-news detection failed')
          scanEntries.push({ id: '2', type: 'fake-news', confidence: 0, description: `Fake-news detection failed (${inferenceMode} mode) — see console`, timestamp: new Date() })
        }
      } else {
        advanceStage('fact-check', 'error', 'No content — cannot run fake-news detection')
        scanEntries.push({ id: '2', type: 'fake-news', confidence: 0, description: 'Fake-news detection skipped — no content extracted', timestamp: new Date() })
      }

      // Stage 5: Sentiment analysis — no local model available, skip gracefully
      advanceStage('sentiment', 'completed')
      log('Sentiment skipped — no local model')

      // Stage 6: Image AI detection — no local model available, skip gracefully
      advanceStage('image-scan', 'completed')
      log('Image scan skipped — no local model')

      // Stage 7: Summarization — no local model available, skip gracefully
      advanceStage('summarize', 'completed')
      log('Summarization skipped — no local model')

      // Stage 8: Compile report
      advanceStage('report', 'loading')

      const aiScore = detectResult?.aiLikelihoodPercent ?? 0
      const fakeNewsScore = fakeDetectResult?.fakeLikelihoodPercent ?? 0
      let overallRisk: 'low' | 'medium' | 'high' = 'low'
      if (aiScore > 70 || fakeNewsScore > 70) overallRisk = 'high'
      else if (aiScore > 40 || fakeNewsScore > 40) overallRisk = 'medium'

      const report: PageReport = {
        url: scrapeResult?.url ?? currentTab.url,
        title: currentTab.title ?? 'Unknown',
        aiScore,
        fakeNewsScore,
        overallRisk,
        results: scanEntries,
        factCheckClaims: factCheckResult?.claims ?? [],
        apiData: {
          scrapedData: scrapeResult ?? { url: currentTab.url, text: '', images: [] },
          detectionResult: detectResult ?? { textPreview: '', aiLikelihoodPercent: 0 },
          factCheckResult: factCheckResult ?? undefined,
          sentimentResult: sentimentResult ?? undefined,
          summarizationResult: localSummary ?? undefined,
          imageDetectionResults: imageResults,
          timestamp: new Date(),
        },
      }

      setPageReport(report)
      await persistReport(report)
      advanceStage('report', 'completed')
      log('Scan complete')
    } catch (fatalErr) {
      // Safety net — catches any unexpected error that escaped the inner try/catch blocks
      log(`Fatal scan error: ${fatalErr}`)
      console.error('[TruthScan] Unexpected scan failure:', fatalErr)
    } finally {
      // Always reset progress flag so the button re-enables
      setScanInProgress(false)
    }
  }

  // ── Standalone Summarize ──────────────────────────────────────────────────

  const triggerSummarize = async () => {
    if (!pageReport?.apiData?.scrapedData?.text) {
      await triggerPageScan()
      return
    }
    if (inferenceMode === 'api') {
      // API mode: call the Groq/Gemini summarization endpoint
      _setSummarizeInProgress(true)
      try {
        const result = await _truthScanClient.generateSummary(pageReport.apiData.scrapedData.text)
        _setSummaryData(result)
        log(`Summary generated: ${result.summary_length} chars via ${result.model}`)
      } catch (err) {
        log(`Summarization API failed: ${err}`)
        console.error('[TruthScan] Summarize error:', err)
      } finally {
        _setSummarizeInProgress(false)
      }
    } else {
      log('Summarization skipped — no local model available')
    }
  }

  // ── Q&A Submission ────────────────────────────────────────────────────────

  const submitQuestion = async () => {
    if (!userQuestion.trim() || !pageReport?.apiData?.scrapedData?.text) return
    setAnswerInProgress(true)
    try {
      if (inferenceMode === 'api') {
        // API mode: call the Groq/Gemini Q&A endpoint
        const result = await _truthScanClient.queryContent(
          userQuestion.trim(),
          pageReport.apiData.scrapedData.text
        )
        setQaResponse(result)
        log(`Q&A answered: ${result.answer_length} chars via ${result.model}`)
      } else {
        // Local mode: no Q&A model available
        await new Promise((r) => setTimeout(r, 300))
        setQaResponse({
          question: userQuestion.trim(),
          answer: 'Q&A requires an LLM — switch to API mode and ensure the Kit server is running.',
          model: 'none',
          content_length: pageReport.apiData.scrapedData.text.length,
          answer_length: 0,
        })
      }
    } catch (err) {
      log(`Q&A failed: ${err}`)
      setQaResponse({
        question: userQuestion.trim(),
        answer: `Request failed: ${err instanceof Error ? err.message : String(err)}`,
        model: 'error',
        content_length: pageReport.apiData.scrapedData.text.length,
        answer_length: 0,
      })
    } finally {
      setAnswerInProgress(false)
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className={cn(
      'w-96 h-[600px] flex flex-col overflow-hidden',
      darkMode
        ? 'bg-[#0a0a1a] text-slate-100'
        : 'bg-slate-100 text-slate-900 [&_.glass-panel]:bg-white [&_.glass-panel]:border-slate-200 [&_.ts-input]:bg-white [&_.ts-input]:border-slate-300 [&_.ts-input]:text-slate-900'
    )}>
      <AppHeader darkMode={darkMode} serverOnline={serverOnline} fakeModelOnline={fakeModelOnline} inferenceMode={inferenceMode} onToggleTheme={toggleTheme} onToggleMode={toggleMode} />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 overflow-y-auto p-3">
        {/* Scrollbar styling via tailwind scrollbar-hide if available */}
        {activeTab === 'overview' && (
          <OverviewTab
            report={pageReport}
            scanInProgress={scanInProgress}
            summarizeInProgress={summarizeInProgress}
            summaryData={summaryData}
            pipelineStages={pipelineStages}
            serverOnline={serverOnline}
            fakeModelOnline={fakeModelOnline}
            inferenceMode={inferenceMode}
            onScan={triggerPageScan}
            onSummarize={triggerSummarize}
          />
        )}

        {activeTab === 'analysis' && pageReport ? (
          <AnalysisTab
            report={pageReport}
            summaryData={summaryData}
            summarizeInProgress={summarizeInProgress}
            imageExpanded={imageExpanded}
            onSummarize={triggerSummarize}
            onToggleImages={() => setImageExpanded((v) => !v)}
          />
        ) : activeTab === 'analysis' && (
          <div className="py-20 text-center">
            <BarChart3 className="w-12 h-12 mx-auto mb-4 text-slate-800" />
            <p className="text-sm text-slate-500">No scan results yet.</p>
            <p className="text-xs text-slate-700 mt-1">Run a scan from the Overview tab first.</p>
          </div>
        )}

        {activeTab === 'qa' && (
          <QATab
            report={pageReport}
            question={userQuestion}
            qaResponse={qaResponse}
            answerInProgress={answerInProgress}
            scanInProgress={scanInProgress}
            onQuestionChange={setUserQuestion}
            onSubmit={submitQuestion}
            onScan={triggerPageScan}
          />
        )}

        {activeTab === 'settings' && (
          <SettingsTab darkMode={darkMode} onToggleTheme={toggleTheme} />
        )}
      </div>
    </div>
  )
}

export default App
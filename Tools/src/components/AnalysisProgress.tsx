// TruthScan — Analysis pipeline progress component
import React from 'react'
import { CheckCircle, Clock, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PipelineStage {
  id: string
  title: string
  description: string
  status: 'pending' | 'loading' | 'completed' | 'error'
  error?: string
}

// Backward-compatible alias
export type AnalysisStep = PipelineStage

interface ScanPipelineProps {
  stages: PipelineStage[]
  className?: string
}

const STATUS_ICONS: Record<PipelineStage['status'], React.ReactNode> = {
  completed: <CheckCircle className="w-4 h-4 text-emerald-400" />,
  loading: <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />,
  error: <AlertCircle className="w-4 h-4 text-red-400" />,
  pending: <Clock className="w-4 h-4 text-slate-600" />,
}

const STATUS_LABEL_COLOR: Record<PipelineStage['status'], string> = {
  completed: 'text-emerald-300',
  loading: 'text-purple-300',
  error: 'text-red-300',
  pending: 'text-slate-500',
}

const STATUS_BG: Record<PipelineStage['status'], string> = {
  completed: 'bg-emerald-500/10 border border-emerald-500/20',
  loading: 'bg-purple-500/10 border border-purple-500/20',
  error: 'bg-red-500/10 border border-red-500/20',
  pending: 'bg-white/3 border border-white/5',
}

const ScanPipeline: React.FC<ScanPipelineProps> = ({ stages, className }) => {
  const completedCount = stages.filter((s) => s.status === 'completed').length
  const progressPct = stages.length > 0 ? Math.round((completedCount / stages.length) * 100) : 0

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Analysis Pipeline</h3>
        <span className="text-xs text-slate-500">{completedCount} / {stages.length}</span>
      </div>

      <div className="space-y-1.5">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className={cn(
              'flex items-start gap-2.5 p-2 rounded-lg transition-all duration-200',
              STATUS_BG[stage.status]
            )}
          >
            <div className="flex-shrink-0 mt-0.5">{STATUS_ICONS[stage.status]}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className={cn('text-xs font-medium', STATUS_LABEL_COLOR[stage.status])}>
                  {stage.title}
                </span>
                {stage.status === 'loading' && (
                  <span className="text-[10px] text-purple-400 animate-pulse">Running...</span>
                )}
              </div>
              <p className={cn('text-[10px] mt-0.5 leading-relaxed',
                stage.status === 'error' ? 'text-red-400' : 'text-slate-600'
              )}>
                {stage.status === 'error' && stage.error ? stage.error : stage.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className="flex justify-between text-[10px] text-slate-600 mb-1">
          <span>Progress</span>
          <span>{progressPct}%</span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-1.5">
          <div
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: `${progressPct}%`,
              background: 'linear-gradient(90deg, #7c3aed, #4f46e5)',
              boxShadow: progressPct > 0 ? '0 0 8px rgba(124, 58, 237, 0.5)' : 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ScanPipeline
// TruthScan — Metric score display card component
import React from 'react'
import { cn } from '@/lib/utils'

type AccentColor = 'primary' | 'warning' | 'danger' | 'success'

interface ScoreCardProps {
  label: string
  displayValue: string
  accent: AccentColor
  className?: string
}

const ACCENT_TEXT: Record<AccentColor, string> = {
  primary: 'text-purple-400',
  warning: 'text-amber-400',
  danger: 'text-red-400',
  success: 'text-emerald-400',
}

const ScoreCard: React.FC<ScoreCardProps> = ({ label, displayValue, accent, className }) => (
  <div className={cn('text-center p-3 bg-white/5 border border-white/10 rounded-xl', className)}>
    <div className={cn('text-2xl font-bold', ACCENT_TEXT[accent])}>
      {displayValue}
    </div>
    <div className="text-[10px] text-slate-500 mt-0.5">{label}</div>
  </div>
)

export default ScoreCard
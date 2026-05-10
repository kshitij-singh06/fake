// TruthScan — Risk level indicator component
import React from 'react'
import { AlertTriangle, CheckCircle, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

type RiskLevel = 'low' | 'medium' | 'high'

interface RiskIndicatorProps {
  risk: RiskLevel
  className?: string
}

interface RiskTheme {
  icon: React.ReactNode
  labelColor: string
  bgColor: string
}

const buildRiskTheme = (risk: RiskLevel): RiskTheme => {
  const themes: Record<RiskLevel, RiskTheme> = {
    low: {
      icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
      labelColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/15 border border-emerald-500/25',
    },
    medium: {
      icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
      labelColor: 'text-amber-400',
      bgColor: 'bg-amber-500/15 border border-amber-500/25',
    },
    high: {
      icon: <AlertTriangle className="w-4 h-4 text-red-400" />,
      labelColor: 'text-red-400',
      bgColor: 'bg-red-500/15 border border-red-500/25',
    },
  }
  return themes[risk] ?? {
    icon: <Info className="w-4 h-4 text-slate-400" />,
    labelColor: 'text-slate-400',
    bgColor: 'bg-white/5',
  }
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ risk, className }) => {
  const theme = buildRiskTheme(risk)
  return (
    <div className={cn('flex items-center gap-2 px-3 py-1.5 rounded-full', theme.bgColor, className)}>
      {theme.icon}
      <span className={cn('text-xs font-semibold', theme.labelColor)}>
        {risk.toUpperCase()}
      </span>
    </div>
  )
}

export default RiskIndicator
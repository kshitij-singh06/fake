// TruthScan — Scan trigger button component
import React from 'react'
import { Zap, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ScanButtonProps {
  onActivate: () => void
  isActive: boolean
  isDisabled?: boolean
  className?: string
}

const ScanButton: React.FC<ScanButtonProps> = ({
  onActivate,
  isActive,
  isDisabled = false,
  className,
}) => {
  const blocked = isDisabled || isActive

  return (
    <button
      onClick={onActivate}
      disabled={blocked}
      className={cn('ts-btn-primary flex items-center gap-1.5 transition-all duration-200', className)}
    >
      {isActive ? (
        <>
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
          <span>Scanning...</span>
        </>
      ) : (
        <>
          <Zap className="w-3.5 h-3.5" />
          <span>Scan Page</span>
        </>
      )}
    </button>
  )
}

export default ScanButton
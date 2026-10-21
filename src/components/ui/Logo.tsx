import { useId, type ReactNode } from 'react'

interface MarkProps {
  className?: string
}

function MarkFrame({ className, children }: MarkProps & { children: ReactNode }) {
  const gradient = useId()

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop style={{ stopColor: 'var(--blue-500)' }} />
          <stop offset="1" style={{ stopColor: 'var(--violet-500)' }} />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradient})`} />
      <rect width="31" height="31" x="0.5" y="0.5" rx="8.5" fill="none" stroke="white" strokeOpacity="0.18" />
      {children}
    </svg>
  )
}

/** Monograma «J» con cursor de terminal: marca personal (navbar, favicon). */
export function LogoMark({ className }: MarkProps) {
  return (
    <MarkFrame className={className}>
      <path d="M18 8.5v9.5a5 5 0 0 1-10 0" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <rect x="21" y="19.5" width="3.5" height="5" rx="1" fill="white" fillOpacity="0.85" />
    </MarkFrame>
  )
}

/** Monograma «U» de UtiqAi. */
export function UtiqAiMark({ className }: MarkProps) {
  return (
    <MarkFrame className={className}>
      <path d="M10 9v7.5a6 6 0 0 0 12 0V9" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </MarkFrame>
  )
}

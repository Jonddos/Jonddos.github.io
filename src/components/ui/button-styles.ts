import { cn } from '../../lib/cn'

const base =
  'inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-control font-semibold transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-standard active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary: 'bg-accent text-accent-fg shadow-glow hover:bg-accent-hover',
  secondary:
    'border border-border-strong bg-surface text-fg shadow-card hover:border-accent-border hover:bg-surface-raised',
  ghost: 'text-fg-muted hover:bg-surface-raised hover:text-fg',
} as const

// Alturas ≥ 36 px (WCAG 2.2 pide ≥ 24); md y lg cumplen los 44 px de Apple HIG
const sizes = {
  sm: 'h-9 px-3.5 text-body-sm',
  md: 'h-11 px-5 text-body-sm',
  lg: 'h-12 px-6 text-body',
  icon: 'size-10',
} as const

export type ButtonVariant = keyof typeof variants
export type ButtonSize = keyof typeof sizes

export interface ButtonStyleProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

export function buttonStyles({ variant = 'primary', size = 'md', className }: ButtonStyleProps = {}) {
  return cn(base, variants[variant], sizes[size], className)
}

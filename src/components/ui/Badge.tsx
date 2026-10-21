import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

const variants = {
  neutral: 'border-border bg-surface-raised text-fg-muted',
  accent: 'border-accent-border bg-accent-subtle text-accent-text',
  /** Requiere un ancestro con `data-accent` */
  project: 'border-project/30 bg-project/10 text-project-text',
} as const

const sizes = {
  sm: 'gap-1 px-2 py-0.5 text-tag',
  md: 'gap-1.5 px-2.5 py-1 text-caption',
} as const

const shapes = {
  pill: 'rounded-full',
  tag: 'rounded-md',
} as const

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  shape?: keyof typeof shapes
}

export function Badge({ variant = 'neutral', size = 'sm', shape = 'pill', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center border font-mono whitespace-nowrap',
        variants[variant],
        sizes[size],
        shapes[shape],
        className,
      )}
      {...props}
    />
  )
}

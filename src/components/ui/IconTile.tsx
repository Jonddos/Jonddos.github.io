import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

const sizes = {
  sm: 'size-8 rounded-lg [&_svg]:size-4',
  md: 'size-10 rounded-control [&_svg]:size-4.5',
  lg: 'size-12 rounded-control [&_svg]:size-5',
} as const

const tones = {
  accent: 'border-accent-border bg-accent-subtle text-accent-text',
  neutral: 'border-border bg-surface-raised text-fg-muted',
} as const

interface IconTileProps {
  icon: LucideIcon
  size?: keyof typeof sizes
  tone?: keyof typeof tones
  className?: string
}

/** Icono decorativo dentro de un contenedor tintado. */
export function IconTile({ icon: Icon, size = 'md', tone = 'accent', className }: IconTileProps) {
  return (
    <span
      aria-hidden="true"
      className={cn('inline-grid shrink-0 place-items-center border', sizes[size], tones[tone], className)}
    >
      <Icon strokeWidth={1.75} />
    </span>
  )
}

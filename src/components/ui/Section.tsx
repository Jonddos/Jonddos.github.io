import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { Reveal } from './Reveal'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string
  /** Línea fina de separación en el borde superior. */
  divider?: boolean
}

/** Sección de página etiquetada por su título (`{id}-title`). */
export function Section({ id, divider = false, className, children, ...props }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn('relative py-section', className)} {...props}>
      {divider && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border-strong to-transparent"
        />
      )}
      {children}
    </section>
  )
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('font-mono text-label text-accent-text uppercase', className)}>
      <span aria-hidden="true">// </span>
      {children}
    </p>
  )
}

interface SectionHeaderProps {
  id: string
  eyebrow: string
  title: ReactNode
  /** Parte final del título resaltada con el acento. */
  highlight?: ReactNode
  description?: ReactNode
  align?: 'start' | 'center'
  action?: ReactNode
  className?: string
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  highlight,
  description,
  align = 'start',
  action,
  className,
}: SectionHeaderProps) {
  const centered = align === 'center'

  return (
    <Reveal
      className={cn(
        'mb-12 flex flex-col gap-6 lg:mb-16',
        centered && 'items-center text-center',
        Boolean(action) && 'lg:flex-row lg:items-end lg:justify-between',
        className,
      )}
    >
      <div className={cn('max-w-2xl', centered && 'mx-auto')}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={`${id}-title`} className="mt-4 text-headline text-fg">
          {title}
          {highlight && (
            <>
              {' '}
              <span className="text-accent-text">{highlight}</span>
            </>
          )}
        </h2>
        {description && <p className="mt-5 text-body text-fg-muted">{description}</p>}
      </div>
      {action}
    </Reveal>
  )
}

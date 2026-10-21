import type { HTMLAttributes, PointerEvent } from 'react'
import { cn } from '../../lib/cn'

interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'article'
  /** Eleva el borde y la sombra al pasar el cursor. */
  interactive?: boolean
  /** Luz que sigue al puntero (solo puntero fino y sin reduced-motion). */
  spotlight?: boolean
}

function trackPointer(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export function Card({
  as: Tag = 'div',
  interactive = false,
  spotlight = false,
  className,
  children,
  onPointerMove,
  ...props
}: CardProps) {
  return (
    <Tag
      className={cn(
        'group/card relative isolate rounded-card border border-border bg-surface shadow-card',
        interactive &&
          'transition-[border-color,box-shadow,translate] duration-300 ease-standard hover:-translate-y-0.5 hover:border-border-strong hover:shadow-raised motion-reduce:hover:translate-y-0',
        className,
      )}
      onPointerMove={(event) => {
        if (spotlight) trackPointer(event)
        onPointerMove?.(event)
      }}
      {...props}
    >
      {spotlight && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden rounded-[inherit] opacity-0 transition-opacity duration-300 spotlight group-hover/card:opacity-100 motion-safe:pointer-fine:block"
        />
      )}
      {children}
    </Tag>
  )
}

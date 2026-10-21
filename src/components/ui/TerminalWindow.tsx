import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface TerminalWindowProps {
  title: string
  children: ReactNode
  className?: string
}

/** Ventana de terminal. Siempre oscura (tokens `code-*`), en ambos temas. */
export function TerminalWindow({ title, children, className }: TerminalWindowProps) {
  return (
    <div className={cn('overflow-hidden rounded-card border border-code-border bg-code shadow-raised', className)}>
      <div className="flex items-center gap-2 border-b border-code-border bg-code-bar px-4 py-3">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-window-close" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-window-minimize" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-window-maximize" />
        <span className="ml-2 truncate font-mono text-caption text-code-muted">{title}</span>
      </div>
      <div className="p-5 font-mono text-body-sm text-code-fg sm:p-6">{children}</div>
    </div>
  )
}

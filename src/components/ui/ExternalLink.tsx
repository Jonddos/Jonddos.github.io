import type { AnchorHTMLAttributes } from 'react'
import { newTabProps } from './link-attrs'

export function NewTabHint() {
  return <span className="sr-only"> (se abre en una pestaña nueva)</span>
}

export function ExternalLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...newTabProps} {...props}>
      {children}
      <NewTabHint />
    </a>
  )
}

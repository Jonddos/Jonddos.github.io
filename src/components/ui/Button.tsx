import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { buttonStyles, type ButtonStyleProps } from './button-styles'
import { NewTabHint } from './ExternalLink'
import { newTabProps } from './link-attrs'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonStyleProps

export function Button({ variant, size, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonStyles({ variant, size, className })} {...props} />
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ButtonStyleProps {
  /** Abre en otra pestaña y lo anuncia a lectores de pantalla. */
  external?: boolean
}

export function ButtonLink({ variant, size, className, external, children, ...props }: ButtonLinkProps) {
  return (
    <a {...(external ? newTabProps : {})} className={buttonStyles({ variant, size, className })} {...props}>
      {children}
      {external && <NewTabHint />}
    </a>
  )
}

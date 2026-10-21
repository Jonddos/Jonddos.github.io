import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems, sectionIds, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useScrolled } from '../hooks/useScrolled'
import { cn } from '../lib/cn'
import { duration, ease } from '../lib/motion'
import { ButtonLink } from './ui/Button'
import { buttonStyles } from './ui/button-styles'
import { Container } from './ui/Container'
import { LogoMark } from './ui/Logo'
import { ThemeToggle } from './ui/ThemeToggle'

const DESKTOP_QUERY = '(min-width: 1024px)'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const menuButton = useRef<HTMLButtonElement>(null)

  // Con el menú abierto: Escape lo cierra devolviendo el foco, y se cierra al pasar a desktop
  useEffect(() => {
    if (!open) return

    const desktop = window.matchMedia(DESKTOP_QUERY)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuButton.current?.focus()
    }
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onBreakpoint)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onBreakpoint)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ease-standard',
        solid ? 'border-border-subtle bg-canvas/80 backdrop-blur-xl backdrop-saturate-150' : 'border-transparent',
      )}
    >
      <Container className="flex h-nav items-center justify-between gap-4">
        <a href="#inicio" className="group flex items-center gap-3 rounded-control">
          <LogoMark className="size-8 transition-transform duration-300 ease-out-expo group-hover:-rotate-6" />
          <span className="flex flex-col leading-none">
            <span className="text-body-sm font-semibold tracking-tight text-fg">{site.name}</span>
            <span className="mt-1 font-mono text-tag text-fg-subtle">{site.role}</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const current = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={current ? 'true' : undefined}
                    className={cn(
                      'relative block rounded-control px-3.5 py-2 text-body-sm transition-colors duration-200',
                      current ? 'text-fg' : 'text-fg-muted hover:text-fg',
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-accent-text transition-[opacity,scale] duration-300 ease-out-expo',
                        current ? 'scale-x-100 opacity-100' : 'scale-x-50 opacity-0',
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          {/* Envoltorio: `hidden` en el propio botón competiría con su `inline-flex` base */}
          <div className="ml-1 hidden sm:block">
            <ButtonLink href="#contacto" size="sm">
              Hablemos
            </ButtonLink>
          </div>
          <button
            ref={menuButton}
            type="button"
            aria-label="Menú"
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
            className={buttonStyles({ variant: 'ghost', size: 'icon', className: 'lg:hidden' })}
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <m.nav
            id="menu-movil"
            aria-label="Menú principal"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: duration.fast } }}
            transition={{ duration: duration.base, ease: ease.standard }}
            className="border-t border-border-subtle lg:hidden"
          >
            <Container className="pt-3 pb-5">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === item.id ? 'true' : undefined}
                      className="flex h-12 items-center rounded-control px-3 text-body text-fg-muted transition-colors hover:bg-surface-raised hover:text-fg aria-[current]:bg-surface-raised aria-[current]:text-fg"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ButtonLink href="#contacto" onClick={() => setOpen(false)} className="mt-3 w-full sm:hidden">
                Hablemos
              </ButtonLink>
            </Container>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

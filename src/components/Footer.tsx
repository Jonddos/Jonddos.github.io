import { ArrowUp } from 'lucide-react'
import { navItems, site } from '../data/site'
import { Container } from './ui/Container'
import { ExternalLink } from './ui/ExternalLink'
import { LogoMark } from './ui/Logo'
import { ThemeSwitcher } from './ui/ThemeSwitcher'

const linkClass = 'rounded-sm text-body-sm text-fg-muted transition-colors hover:text-fg'

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle">
      <Container className="grid gap-12 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3 rounded-control">
            <LogoMark className="size-8" />
            <span className="text-body-sm font-semibold text-fg">{site.name}</span>
          </a>
          <p className="mt-4 max-w-xs text-body-sm text-fg-muted">
            Construyo software que ayuda a negocios a vender, automatizar y crecer.
          </p>
          <div className="mt-6">
            <ThemeSwitcher />
          </div>
        </div>

        <nav aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title" className="font-mono text-label text-fg-subtle uppercase">
            Navegación
          </h2>
          <ul className="mt-4 grid gap-2.5">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contacto" className={linkClass}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-label text-fg-subtle uppercase">Contacto</h2>
          <ul className="mt-4 grid gap-2.5">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li>
              <ExternalLink href={site.social.linkedin} className={linkClass}>
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={site.social.github} className={linkClass}>
                GitHub
              </ExternalLink>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border-subtle">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-center font-mono text-tag text-fg-subtle md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {site.name} — <span className="text-accent-text">{site.brand}</span>
          </p>
          <p>Construido con React · Vite · Tailwind CSS · Framer Motion</p>
          <a href="#inicio" className="inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-fg">
            Volver arriba
            <ArrowUp aria-hidden="true" className="size-3.5" />
          </a>
        </Container>
      </div>
    </footer>
  )
}

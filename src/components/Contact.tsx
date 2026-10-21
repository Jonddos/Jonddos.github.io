import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, Copy, Mail } from 'lucide-react'
import { site } from '../data/site'
import { GithubMark, LinkedinMark } from './ui/BrandMarks'
import { Button, ButtonLink } from './ui/Button'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'
import { Eyebrow, Section } from './ui/Section'

type CopyStatus = 'idle' | 'copied' | 'error'

const announcements: Record<CopyStatus, string> = {
  idle: '',
  copied: 'Email copiado al portapapeles',
  error: `No se pudo copiar. El email es ${site.email}`,
}

export default function Contact() {
  const [status, setStatus] = useState<CopyStatus>('idle')
  const resetTimer = useRef<number>()

  useEffect(() => () => window.clearTimeout(resetTimer.current), [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setStatus('copied')
    } catch {
      setStatus('error')
    }
    window.clearTimeout(resetTimer.current)
    resetTimer.current = window.setTimeout(() => setStatus('idle'), 2500)
  }

  return (
    <Section id="contacto">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-panel px-6 py-16 text-center shadow-raised border-gradient-brand sm:px-12 lg:py-24">
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid mask-fade-b" />
          <div
            aria-hidden="true"
            className="absolute -bottom-48 left-1/2 -z-10 h-96 w-[56rem] max-w-[200vw] -translate-x-1/2 blur-2xl bg-aurora"
          />

          <Eyebrow>hablemos</Eyebrow>
          <h2 id="contacto-title" className="mx-auto mt-5 max-w-3xl text-headline text-fg">
            ¿Tienes una idea o necesitas <span className="text-gradient-brand">software para tu negocio?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lead text-fg-muted">
            Hablemos y convirtamos tu idea en una solución real.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={`mailto:${site.email}`} size="lg">
              <Mail aria-hidden="true" className="size-4.5" />
              Escríbeme un correo
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
            <ButtonLink href={site.social.linkedin} external variant="secondary" size="lg">
              <LinkedinMark className="size-4.5" />
              LinkedIn
            </ButtonLink>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-body-sm text-fg-muted">
            <span className="font-mono">{site.email}</span>
            <Button variant="ghost" size="sm" onClick={copyEmail}>
              {status === 'copied' ? (
                <Check aria-hidden="true" className="size-4 text-success" />
              ) : (
                <Copy aria-hidden="true" className="size-4" />
              )}
              {status === 'copied' ? 'Copiado' : 'Copiar email'}
            </Button>
            <span aria-hidden="true" className="hidden text-border-strong sm:inline">
              ·
            </span>
            <ButtonLink href={site.social.github} external variant="ghost" size="sm">
              <GithubMark className="size-4" />
              GitHub
            </ButtonLink>
          </div>
          <p role="status" className="sr-only">
            {announcements[status]}
          </p>

          <p className="mt-10 font-mono text-tag text-fg-subtle">
            {site.name} · <span className="text-accent-text">{site.brand}</span>
          </p>
        </Reveal>
      </Container>
    </Section>
  )
}

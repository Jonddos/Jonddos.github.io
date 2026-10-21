import { m } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { ease, fadeUp } from '../lib/motion'
import HeroConsole from './HeroConsole'
import { Badge } from './ui/Badge'
import { ButtonLink } from './ui/Button'
import { Container } from './ui/Container'
import { Eyebrow } from './ui/Section'

const chips = ['React', 'Next.js', 'Python', 'FastAPI', 'Docker', 'APIs']

function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <div className="absolute -top-48 left-1/2 h-[40rem] w-[70rem] max-w-[200vw] -translate-x-1/2 blur-2xl bg-aurora" />
      <div className="absolute -top-24 -right-40 h-[30rem] w-[40rem] blur-2xl bg-aurora-2" />
      <div className="absolute inset-0 bg-noise opacity-70 mix-blend-soft-light" />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="inicio-title"
      className="relative isolate flex min-h-dvh flex-col justify-center overflow-hidden pt-nav"
    >
      <Backdrop />

      <Container className="grid items-center gap-16 py-16 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] xl:gap-20">
        <div className="max-w-3xl">
          <m.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            <Eyebrow>Jonathan Ortiz</Eyebrow>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-tag text-fg-muted shadow-card backdrop-blur">
              <span aria-hidden="true" className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-success motion-safe:animate-ping-soft" />
                <span className="relative size-2 rounded-full bg-success" />
              </span>
              Disponible para nuevos proyectos
            </p>
          </m.div>

          {/* Sin fundido de opacidad: el H1 es el LCP y debe pintarse en el primer frame */}
          <m.h1
            id="inicio-title"
            initial={{ y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: ease.outExpo }}
            className="mt-6 text-display text-fg"
          >
            Construyo software que ayuda a negocios a{' '}
            <span className="text-gradient-brand">vender, automatizar y crecer.</span>
          </m.h1>

          <m.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
            className="mt-7 max-w-2xl text-lead text-fg-muted"
          >
            Soy desarrollador full-stack. Creo plataformas web, dashboards, automatizaciones, integraciones y productos
            con IA <span className="font-medium text-fg">listos para producción.</span>
          </m.p>

          <m.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#contacto" size="lg">
              Hablemos de tu proyecto
              <ArrowRight aria-hidden="true" className="size-4.5" />
            </ButtonLink>
            <ButtonLink href="#proyectos" size="lg" variant="secondary">
              Ver proyectos
            </ButtonLink>
          </m.div>

          <m.ul
            aria-label="Tecnologías principales"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.32}
            className="mt-12 flex flex-wrap gap-2"
          >
            {chips.map((chip) => (
              <li key={chip}>
                <Badge size="md" shape="tag">
                  {chip}
                </Badge>
              </li>
            ))}
          </m.ul>
        </div>

        <HeroConsole className="hidden lg:block" />
      </Container>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-fg-subtle motion-safe:animate-float md:block"
      >
        <ChevronDown className="size-5" />
      </div>
    </section>
  )
}

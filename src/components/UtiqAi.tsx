import type { ReactNode } from 'react'
import { m, useReducedMotion, type Variants } from 'motion/react'
import { revealViewport } from '../lib/motion'
import { Badge } from './ui/Badge'
import { Container } from './ui/Container'
import { UtiqAiMark } from './ui/Logo'
import { Reveal } from './ui/Reveal'
import { Eyebrow, Section } from './ui/Section'
import { TerminalWindow } from './ui/TerminalWindow'

const tags = ['SaaS', 'Automatización', 'Dashboards', 'IA Aplicada', 'Integraciones', 'MVPs']

const checks = [
  'SaaS architecture ready',
  'AI pipelines configured',
  'Dashboards & analytics set',
  'Integrations wired',
]

// Las líneas de la terminal aparecen en secuencia, como si se escribieran
const sequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.28, delayChildren: 0.2 } },
}

const line: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
}

function Prompt({ children }: { children: ReactNode }) {
  return (
    <m.p variants={line} className="flex items-start gap-2">
      <span aria-hidden="true" className="text-syntax-keyword">
        ❯
      </span>
      {children}
    </m.p>
  )
}

export default function UtiqAi() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="utiqai" divider className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-48 -z-10 h-[34rem] w-[44rem] -translate-y-1/2 blur-2xl bg-aurora-2"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>mi marca</Eyebrow>

          <div className="mt-6 flex items-center gap-4">
            <UtiqAiMark className="size-12" />
            <div>
              <p className="font-mono text-title-lg font-bold text-fg">
                Utiq<span className="text-gradient-brand">Ai</span>
              </p>
              <p className="font-mono text-tag text-fg-subtle">Software Studio</p>
            </div>
          </div>

          <h2 id="utiqai-title" className="mt-8 text-headline text-fg">
            UtiqAi — software con <span className="text-accent-text">enfoque en producto</span>
          </h2>
          <p className="mt-6 text-body text-fg-muted">
            UtiqAi es mi marca para crear soluciones digitales enfocadas en negocios: SaaS, automatizaciones,
            dashboards, integraciones e inteligencia artificial aplicada.
          </p>
          <p className="mt-4 text-body text-fg-subtle">
            La idea es simple: construir herramientas útiles, medibles y listas para usarse en producción — sin
            bloatware, sin prototipos eternos.
          </p>

          <ul aria-label="Áreas de trabajo de UtiqAi" className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge variant="accent" size="md">
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <TerminalWindow title="~/utiqai">
            <m.div
              lang="en"
              variants={sequence}
              initial={reduceMotion ? 'visible' : 'hidden'}
              whileInView="visible"
              viewport={revealViewport}
              className="space-y-3"
            >
              <Prompt>whoami</Prompt>
              <m.p variants={line} className="pl-5 text-code-fg">
                UtiqAi · Software Studio · Jonathan Ortiz
              </m.p>
              <Prompt>
                <span>
                  build <span className="whitespace-nowrap text-syntax-property">--for-business</span>{' '}
                  <span className="whitespace-nowrap text-syntax-literal">--ready-for-prod</span>
                </span>
              </Prompt>
              <div className="space-y-1.5 pl-5 text-caption">
                {checks.map((check) => (
                  <m.p key={check} variants={line}>
                    <span className="text-syntax-literal">✓</span> <span className="text-code-muted">{check}</span>
                  </m.p>
                ))}
                <m.p variants={line}>
                  <span className="text-syntax-keyword">→</span>{' '}
                  <span className="text-code-muted">Deploying to production...</span>
                </m.p>
              </div>
              <m.p variants={line} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-syntax-keyword">
                  ❯
                </span>
                <span aria-hidden="true" className="inline-block h-4 w-2 bg-syntax-keyword motion-safe:animate-blink" />
              </m.p>
            </m.div>
          </TerminalWindow>
        </Reveal>
      </Container>
    </Section>
  )
}

import { m } from 'framer-motion'
import { Code2, Layers, MessageSquare, Rocket } from 'lucide-react'
import { fadeUp, revealViewport } from '../lib/motion'
import { Container } from './ui/Container'
import { Section, SectionHeader } from './ui/Section'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Entiendo tu idea',
    description:
      'Conversamos sobre el problema real, el contexto del negocio y los usuarios. Sin tecnicismos innecesarios — solo claridad sobre qué necesita tu producto.',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Diseño la solución',
    description:
      'Propongo la arquitectura, el stack y el alcance del proyecto. Definimos qué entra en el MVP y qué queda para después — para mover rápido sin acumular deuda.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desarrollo el producto',
    description:
      'Construyo con código limpio, revisiones continuas y actualizaciones de progreso. Ves avances reales desde la primera semana.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Entrego y optimizo',
    description:
      'Deploy en producción, documentación básica y soporte post-lanzamiento. El producto sale listo para usuarios reales, no solo para demos.',
  },
]

export default function Process() {
  return (
    <Section id="proceso">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[30rem] w-[60rem] max-w-[200vw] -translate-x-1/2 opacity-50 blur-2xl bg-aurora"
      />

      <Container>
        <SectionHeader
          id="proceso"
          eyebrow="cómo trabajo"
          title="Mi"
          highlight="proceso"
          description="De la idea al producto listo para usuarios — en pasos claros y sin sorpresas."
          align="center"
        />

        <div className="relative">
          {/* Conector horizontal en desktop */}
          <div
            aria-hidden="true"
            className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-linear-to-r from-transparent via-accent-border to-transparent lg:block"
          />

          <ol className="relative grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <m.li
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealViewport}
                  custom={i * 0.1}
                  className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                >
                  {/* Conector vertical en móvil */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-16 -bottom-8 left-7 w-px bg-linear-to-b from-accent-border to-transparent md:hidden"
                    />
                  )}
                  <div className="relative grid size-14 shrink-0 place-items-center rounded-2xl border border-accent-border bg-surface text-accent-text shadow-card">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                    <span
                      aria-hidden="true"
                      className="absolute -top-2 -right-2 rounded-md bg-accent px-1.5 py-0.5 font-mono text-tag font-semibold text-accent-fg"
                    >
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-title text-fg lg:mt-6">{step.title}</h3>
                    <p className="mt-2 text-body-sm text-fg-muted lg:mx-auto lg:max-w-xs">{step.description}</p>
                  </div>
                </m.li>
              )
            })}
          </ol>
        </div>
      </Container>
    </Section>
  )
}

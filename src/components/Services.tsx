import { m } from 'motion/react'
import { ArrowRight, Check } from 'lucide-react'
import { services } from '../data/services'
import { cn } from '../lib/cn'
import { fadeUp, revealViewport, stagger } from '../lib/motion'
import { ButtonLink } from './ui/Button'
import { Card } from './ui/Card'
import { Container } from './ui/Container'
import { IconTile } from './ui/IconTile'
import { Section, SectionHeader } from './ui/Section'

// En tablet (2 columnas) la última tarjeta impar ocupa la fila completa
const lastSpansTablet = services.length % 2 === 1

export default function Services() {
  return (
    <Section id="servicios" divider>
      <Container>
        <SectionHeader
          id="servicios"
          eyebrow="servicios"
          title="Qué puedo construir"
          highlight="para tu negocio"
          description="Soluciones prácticas para automatizar procesos, lanzar productos y convertir ideas en software real."
          action={
            <ButtonLink href="#contacto" className="self-start lg:self-auto">
              Hablemos de tu proyecto
              <ArrowRight aria-hidden="true" className="size-4" />
            </ButtonLink>
          }
        />

        {/* Bento 3×3: las destacadas ocupan 2 columnas y `grid-flow-dense` rellena los huecos */}
        <ul className="grid grid-flow-dense gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const last = i === services.length - 1
            return (
              <m.li
                key={service.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                custom={(i % 3) * stagger}
                className={cn(
                  service.featured && 'lg:col-span-2',
                  last && lastSpansTablet && 'md:col-span-2 lg:col-span-1',
                )}
              >
                <Card
                  spotlight
                  className={cn(
                    'flex h-full flex-col gap-5 p-6',
                    service.featured && 'bg-linear-to-br from-accent-subtle/70 via-surface to-surface lg:p-8',
                  )}
                >
                  <IconTile icon={service.icon} size={service.featured ? 'lg' : 'md'} />
                  <div>
                    <h3 className={cn('text-fg', service.featured ? 'text-title-lg' : 'text-title')}>
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-body-sm text-fg-muted">{service.description}</p>
                  </div>
                  <ul className={cn('mt-auto grid gap-2', service.featured && 'sm:grid-cols-3')}>
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-body-sm text-fg-subtle">
                        <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent-text" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </m.li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}

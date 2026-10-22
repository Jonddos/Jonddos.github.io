import { m } from 'motion/react'
import { projects } from '../data/projects'
import { cn } from '../lib/cn'
import { fadeUp, revealViewport, stagger } from '../lib/motion'
import ProjectCard from './ProjectCard'
import { Container } from './ui/Container'
import { Section, SectionHeader } from './ui/Section'

const featured = projects.slice(0, 2)
const rest = projects.slice(2)

/**
 * Bento de 6 columnas en desktop: filas de 3 tarjetas; si al final sobran 2 ocupan media fila
 * cada una y si sobra 1 ocupa la fila completa. En tablet (2 columnas) la última impar se ensancha.
 */
function spanFor(index: number, total: number) {
  const remainder = total % 3
  const inLastRow = remainder !== 0 && index >= total - remainder
  const desktop = !inLastRow ? 'lg:col-span-2' : remainder === 2 ? 'lg:col-span-3' : 'lg:col-span-6'
  const tablet = total % 2 === 1 && index === total - 1 ? 'md:col-span-2' : undefined
  return cn(tablet, desktop)
}

export default function Projects() {
  return (
    <Section id="proyectos" divider>
      <Container>
        <SectionHeader
          id="proyectos"
          eyebrow="proyectos"
          title="Casos de"
          highlight="estudio"
          description="Proyectos reales con problemas concretos y resultados medibles — no demos de tutorial."
        />

        <ul className="grid gap-5 md:grid-cols-2">
          {featured.map((project, i) => (
            <m.li
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              custom={i * stagger}
            >
              <ProjectCard project={project} featured />
            </m.li>
          ))}
        </ul>

        <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {rest.map((project, i) => (
            <m.li
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              custom={(i % 3) * stagger}
              className={spanFor(i, rest.length)}
            >
              <ProjectCard project={project} />
            </m.li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

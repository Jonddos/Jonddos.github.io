import { m } from 'framer-motion'
import { technologies } from '../data/technologies'
import { fadeUp, revealViewport, stagger } from '../lib/motion'
import { Badge } from './ui/Badge'
import { Card } from './ui/Card'
import { Container } from './ui/Container'
import { IconTile } from './ui/IconTile'
import { Section, SectionHeader } from './ui/Section'

export default function Technologies() {
  return (
    <Section id="tecnologias" divider>
      <Container>
        <SectionHeader id="tecnologias" eyebrow="stack técnico" title="Tecnologías que" highlight="domino" />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((group, i) => (
            <m.li
              key={group.category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              custom={i * stagger}
            >
              <Card spotlight className="h-full p-6">
                <div className="flex items-center gap-3">
                  <IconTile icon={group.icon} size="sm" />
                  <h3 className="text-title text-fg">{group.category}</h3>
                </div>
                <ul aria-label={`Tecnologías de ${group.category}`} className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge size="md" shape="tag">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </m.li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

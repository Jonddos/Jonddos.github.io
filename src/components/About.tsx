import { Shield, Terminal, Zap } from 'lucide-react'
import { site } from '../data/site'
import { LinkedinMark } from './ui/BrandMarks'
import { ButtonLink } from './ui/Button'
import { Container } from './ui/Container'
import { IconTile } from './ui/IconTile'
import { Reveal } from './ui/Reveal'
import { Eyebrow, Section } from './ui/Section'
import { TerminalWindow } from './ui/TerminalWindow'

const traits = [
  { icon: Terminal, label: 'Enfoque en producto', desc: 'No solo código — pienso en el problema de negocio.' },
  { icon: Zap, label: 'Entrega rápida', desc: 'MVPs y prototipos en semanas, no meses.' },
  { icon: Shield, label: 'Código listo para prod', desc: 'Lo que entrego funciona en producción desde el día uno.' },
]

const focus = ['SaaS', 'IA', 'Automatización', 'Dashboards']

function Str({ children }: { children: string }) {
  return <span className="text-syntax-string">&apos;{children}&apos;</span>
}

function Punct({ children }: { children: string }) {
  return <span className="text-code-muted">{children}</span>
}

function Prop({ name }: { name: string }) {
  return (
    <>
      <span className="text-syntax-property">{name}</span>
      <Punct>: </Punct>
    </>
  )
}

export default function About() {
  return (
    <Section id="sobre-mi">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-64 -z-10 h-[32rem] w-[40rem] opacity-60 blur-2xl bg-aurora"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>sobre mí</Eyebrow>
          <h2 id="sobre-mi-title" className="mt-4 text-headline text-fg">
            Soy <span className="text-accent-text">Jonathan Ortiz</span>
          </h2>
          <p className="mt-6 text-lead text-fg-muted">
            Desarrollador full-stack. Construyo software práctico para resolver problemas reales: plataformas web,
            automatizaciones, dashboards, integraciones y productos con IA.
          </p>
          <p className="mt-4 text-body text-fg-subtle">
            Mi enfoque es convertir ideas en herramientas útiles, rápidas y listas para producción. Trabajo con
            negocios, founders y equipos que necesitan software que funcione — no prototipos que se quedan en un cajón.
          </p>

          <ul className="mt-8 grid gap-4">
            {traits.map((trait) => (
              <li key={trait.label} className="flex items-start gap-4">
                <IconTile icon={trait.icon} size="sm" />
                <div>
                  <p className="text-body-sm font-semibold text-fg">{trait.label}</p>
                  <p className="text-body-sm text-fg-muted">{trait.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#contacto">Trabajemos juntos</ButtonLink>
            <ButtonLink href={site.social.linkedin} external variant="secondary">
              <LinkedinMark className="size-4" />
              LinkedIn
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <TerminalWindow title="jonathan@dev ~ $">
            <pre className="text-caption leading-7 break-words whitespace-pre-wrap sm:text-body-sm sm:leading-7">
              <code>
                <span className="text-syntax-keyword">const</span> developer <Punct>=</Punct>{' '}
                <span className="text-syntax-literal">{'{'}</span>
                {'\n  '}
                <Prop name="name" />
                <Str>Jonathan Ortiz</Str>
                <Punct>,</Punct>
                {'\n  '}
                <Prop name="role" />
                <Str>Full-Stack Developer</Str>
                <Punct>,</Punct>
                {'\n  '}
                <Prop name="focus" />
                <span className="text-syntax-literal">[</span>
                {focus.map((item, i) => (
                  <span key={item}>
                    {i % 2 === 0 && '\n    '}
                    <Str>{item}</Str>
                    <Punct>,</Punct>
                    {i % 2 === 0 && ' '}
                  </span>
                ))}
                {'\n  '}
                <span className="text-syntax-literal">]</span>
                <Punct>,</Punct>
                {'\n  '}
                <Prop name="available" />
                <span className="text-syntax-literal">true</span>
                <Punct>,</Punct>
                {'\n'}
                <span className="text-syntax-literal">{'}'}</span>
                {'\n'}
                <span className="text-syntax-keyword">❯</span>{' '}
                <span
                  aria-hidden="true"
                  className="inline-block h-4 w-2 translate-y-0.5 bg-syntax-keyword motion-safe:animate-blink"
                />
              </code>
            </pre>
          </TerminalWindow>
        </Reveal>
      </Container>
    </Section>
  )
}

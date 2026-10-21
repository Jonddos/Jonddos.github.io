import { CircleAlert, CircleCheck, ExternalLink, Github, Lock } from 'lucide-react'
import type { Project } from '../data/projects'
import { cn } from '../lib/cn'
import ProjectPreview from './ProjectPreview'
import { Badge } from './ui/Badge'
import { ButtonLink } from './ui/Button'
import { Card } from './ui/Card'

interface Props {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: Props) {
  const titleId = `proyecto-${project.id}`
  const { github, demo } = project.links ?? {}

  return (
    <Card
      as="article"
      interactive
      spotlight
      data-accent={project.accent}
      aria-labelledby={titleId}
      className="flex h-full flex-col overflow-hidden [--spot:var(--project)]"
    >
      <ProjectPreview kind={project.preview} featured={featured} />

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="project">{project.type}</Badge>
            {project.confidential && (
              <Badge title="Código bajo acuerdo de confidencialidad">
                <Lock aria-hidden="true" className="size-3" />
                Confidencial
              </Badge>
            )}
          </div>
          <h3 id={titleId} className={cn('mt-3 text-fg', featured ? 'text-title-lg' : 'text-title')}>
            {project.title}
          </h3>
          <p className="mt-2 text-body-sm text-fg-muted">{project.description}</p>
        </div>

        <dl className="grid gap-3 rounded-control border border-border-subtle bg-surface-sunken/60 p-4 text-body-sm">
          <div>
            <dt className="flex items-center gap-2 font-semibold text-warning">
              <CircleAlert aria-hidden="true" className="size-4 shrink-0" />
              Problema
            </dt>
            <dd className="mt-0.5 pl-6 text-fg-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 font-semibold text-success">
              <CircleCheck aria-hidden="true" className="size-4 shrink-0" />
              Resultado
            </dt>
            <dd className="mt-0.5 pl-6 text-fg-muted">{project.result}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-border-subtle pt-5">
          <ul aria-label={`Tecnologías de ${project.title}`} className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Badge shape="tag">{tech}</Badge>
              </li>
            ))}
          </ul>

          {(github || demo) && (
            <div className="flex gap-2">
              {github && (
                <ButtonLink href={github} external variant="secondary" size="sm">
                  <Github aria-hidden="true" className="size-4" />
                  Código
                </ButtonLink>
              )}
              {demo && (
                <ButtonLink href={demo} external variant="secondary" size="sm">
                  <ExternalLink aria-hidden="true" className="size-4" />
                  Demo
                </ButtonLink>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

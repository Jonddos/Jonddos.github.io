import type { ReactNode } from 'react'
import { Check, FileText, FolderOpen, ScanLine, UserRound } from 'lucide-react'
import type { ProjectPreviewKind } from '../data/projects'
import { cn } from '../lib/cn'

/*
 * Ilustraciones de producto dibujadas con los tokens del sistema y el acento del proyecto
 * (`--project`). Son representaciones, no capturas reales: van con aria-hidden.
 */

function Chat() {
  return (
    <div className="w-full max-w-72 space-y-2 text-tag">
      <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-md border border-border bg-surface px-3 py-2 text-fg-muted shadow-card">
        Hola, ¿tienen talla M en azul?
      </p>
      <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md border border-project/40 bg-project/15 px-3 py-2 text-fg shadow-card">
        Sí, quedan 2 unidades a $89.000. ¿Te la separo?
      </p>
      <div className="flex w-fit items-center gap-1 rounded-full border border-border bg-surface px-3 py-2 shadow-card">
        <span className="size-1.5 rounded-full bg-project motion-safe:animate-pulse" />
        <span className="size-1.5 rounded-full bg-project/70 [animation-delay:150ms] motion-safe:animate-pulse" />
        <span className="size-1.5 rounded-full bg-project/40 [animation-delay:300ms] motion-safe:animate-pulse" />
      </div>
    </div>
  )
}

function Interview() {
  const scores = [
    ['Comunicación', 'w-[78%]'],
    ['Técnica', 'w-[88%]'],
    ['Resolución', 'w-[70%]'],
  ] as const
  return (
    <div className="w-full max-w-72 rounded-card border border-border bg-surface p-4 shadow-card">
      <div className="flex items-center gap-3">
        <span className="grid size-8 place-items-center rounded-full bg-project/15 text-project-text">
          <UserRound className="size-4" />
        </span>
        <div className="flex-1">
          <div className="h-2 w-24 rounded-full bg-border" />
          <div className="mt-1.5 h-2 w-16 rounded-full bg-border-subtle" />
        </div>
        <span className="flex items-center gap-1 font-mono text-tag text-project-text">
          <span className="size-1.5 rounded-full bg-project motion-safe:animate-pulse" />
          en vivo
        </span>
      </div>
      <div className="mt-4 space-y-2.5">
        {scores.map(([label, width]) => (
          <div key={label} className="grid grid-cols-[5.5rem_1fr] items-center gap-2 font-mono text-tag text-fg-subtle">
            {label}
            <div className="h-1.5 rounded-full bg-surface-sunken">
              <div className={cn('h-full rounded-full bg-project', width)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Ocr() {
  return (
    <div className="flex w-full max-w-80 items-center gap-4">
      <div className="relative w-36 shrink-0 rounded-md border border-border bg-surface p-3 shadow-card">
        <div className="space-y-1.5">
          <div className="h-1.5 w-1/2 rounded-full bg-border" />
          <div className="h-1.5 w-full rounded-full bg-border-subtle" />
          <div className="relative rounded-sm px-0.5 py-1 ring-1 ring-project">
            <div className="h-1.5 w-4/5 rounded-full bg-project/50" />
          </div>
          <div className="h-1.5 w-full rounded-full bg-border-subtle" />
          <div className="rounded-sm px-0.5 py-1 ring-1 ring-project/60">
            <div className="h-1.5 w-3/5 rounded-full bg-project/40" />
          </div>
          <div className="h-1.5 w-2/3 rounded-full bg-border-subtle" />
        </div>
        <span className="absolute inset-x-1 top-1/2 h-px bg-project shadow-[0_0_12px_2px_var(--project)] motion-safe:animate-scan" />
      </div>
      <ul className="flex-1 space-y-2 font-mono text-tag">
        {['nombre', 'documento', 'mesa'].map((field) => (
          <li
            key={field}
            className="flex items-center justify-between gap-2 rounded-md border border-border bg-surface px-2.5 py-1.5 text-fg-muted shadow-card"
          >
            {field}
            <Check className="size-3 text-project-text" strokeWidth={3} />
          </li>
        ))}
        <li className="flex items-center gap-1.5 px-1 text-project-text">
          <ScanLine className="size-3.5" />
          extraído
        </li>
      </ul>
    </div>
  )
}

function Documents() {
  const rows = [
    ['EXP-0183', 'En curso', true],
    ['EXP-0179', 'Revisión', false],
    ['EXP-0164', 'Cerrado', false],
  ] as const
  return (
    <div className="w-full max-w-80 space-y-2">
      {rows.map(([code, status, highlighted]) => (
        <div
          key={code}
          className={cn(
            'flex items-center gap-3 rounded-control border bg-surface px-3 py-2 shadow-card',
            highlighted ? 'border-project/50' : 'border-border',
          )}
        >
          {highlighted ? (
            <FolderOpen className="size-4 text-project-text" />
          ) : (
            <FileText className="size-4 text-fg-subtle" />
          )}
          <span className="font-mono text-tag text-fg">{code}</span>
          <span className="h-1.5 flex-1 rounded-full bg-border-subtle" />
          <span
            className={cn(
              'rounded-full px-2 py-0.5 font-mono text-tag',
              highlighted ? 'bg-project/15 text-project-text' : 'bg-surface-sunken text-fg-subtle',
            )}
          >
            {status}
          </span>
        </div>
      ))}
    </div>
  )
}

function Ports() {
  const rows = [
    [':5173', 'node', '8124'],
    [':5432', 'postgres', '1203'],
    [':8080', 'java', '4410'],
  ] as const
  return (
    <div className="w-full max-w-80 overflow-hidden rounded-control border border-border bg-surface font-mono text-tag shadow-card">
      <div className="grid grid-cols-[4rem_1fr_3rem_3.25rem] gap-2 border-b border-border-subtle bg-surface-sunken px-3 py-1.5 text-fg-subtle">
        <span>PORT</span>
        <span>PROCESS</span>
        <span>PID</span>
        <span />
      </div>
      {rows.map(([port, process, pid], i) => (
        <div
          key={port}
          className={cn(
            'grid grid-cols-[4rem_1fr_3rem_3.25rem] items-center gap-2 px-3 py-1.5',
            i === 0 ? 'bg-project/10 text-fg' : 'text-fg-muted',
          )}
        >
          <span className={i === 0 ? 'text-project-text' : undefined}>{port}</span>
          <span>{process}</span>
          <span>{pid}</span>
          {i === 0 ? (
            <span className="rounded border border-project/50 px-1 text-center text-project-text">kill</span>
          ) : (
            <span />
          )}
        </div>
      ))}
    </div>
  )
}

function Analytics() {
  const series = [
    [40, 55],
    [62, 48],
    [50, 70],
    [74, 60],
    [58, 82],
    [86, 72],
  ]
  return (
    <div className="w-full max-w-80 rounded-card border border-border bg-surface p-4 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <div className="h-2 w-20 rounded-full bg-border" />
        <div className="flex gap-3 font-mono text-tag text-fg-subtle">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-project" />A
          </span>
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-project/35" />B
          </span>
        </div>
      </div>
      <div className="flex h-20 items-end gap-2 border-b border-border-subtle">
        {series.map(([a, b], i) => (
          <div key={i} className="flex h-full flex-1 items-end gap-0.5">
            <div className="flex-1 rounded-t-sm bg-project" style={{ height: `${a}%` }} />
            <div className="flex-1 rounded-t-sm bg-project/35" style={{ height: `${b}%` }} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Events() {
  const days = Array.from({ length: 21 }, (_, i) => i + 1)
  return (
    <div className="relative w-full max-w-72">
      <div className="rounded-card border border-border bg-surface p-3 shadow-card">
        <div className="grid grid-cols-7 gap-1">
          {days.map((day) => (
            <span
              key={day}
              className={cn(
                'grid aspect-square place-items-center rounded-md font-mono text-tag',
                day === 12 ? 'bg-project text-on-project' : 'bg-surface-sunken text-fg-subtle',
                (day === 5 || day === 18) && 'ring-1 ring-project/50',
              )}
            >
              {day}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute -right-3 -bottom-4 rounded-control border border-project/40 bg-surface px-3 py-2 shadow-raised">
        <p className="font-mono text-tag text-project-text">12 · 18:00</p>
        <div className="mt-1 h-1.5 w-20 rounded-full bg-border" />
      </div>
    </div>
  )
}

const illustrations: Record<ProjectPreviewKind, () => ReactNode> = {
  chat: Chat,
  interview: Interview,
  ocr: Ocr,
  documents: Documents,
  ports: Ports,
  analytics: Analytics,
  events: Events,
}

interface ProjectPreviewProps {
  kind: ProjectPreviewKind
  featured?: boolean
}

export default function ProjectPreview({ kind, featured = false }: ProjectPreviewProps) {
  const Illustration = illustrations[kind]

  return (
    <div
      className={cn(
        'relative isolate overflow-hidden border-b border-border-subtle bg-surface-sunken',
        featured ? 'h-60' : 'h-48',
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-grid mask-fade-b [--grid:color-mix(in_oklab,var(--project)_14%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-1/2 left-1/2 -z-10 size-80 -translate-x-1/2 rounded-full bg-project/20 opacity-70 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100"
      />
      <div
        aria-hidden="true"
        className="flex h-full items-center justify-center px-6 py-6 transition-transform duration-500 ease-out-expo group-hover/card:scale-[1.03] motion-reduce:group-hover/card:scale-100"
      >
        <Illustration />
      </div>
    </div>
  )
}

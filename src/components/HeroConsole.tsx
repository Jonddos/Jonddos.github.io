import type { ReactNode } from 'react'
import { m } from 'motion/react'
import { Check, MessageSquareText, TrendingUp, Workflow, type LucideIcon } from 'lucide-react'
import { cn } from '../lib/cn'
import { ease } from '../lib/motion'

// Ilustración decorativa: los tres verbos del titular como mini paneles de producto
const bars = [32, 44, 38, 56, 50, 68, 62, 84]

function Panel({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="rounded-card border border-border-subtle bg-surface-raised/70 p-4">
      <div className="mb-3 flex items-center gap-2 font-mono text-tag text-fg-subtle">
        <Icon className="size-3.5 text-accent-text" strokeWidth={2} />
        {label}
      </div>
      {children}
    </div>
  )
}

export default function HeroConsole({ className }: { className?: string }) {
  return (
    <m.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.25, ease: ease.outExpo }}
      className={cn('relative', className)}
    >
      <div className="absolute -inset-10 -z-10 opacity-90 blur-2xl bg-aurora" />

      <div className="rounded-panel border border-border bg-surface/85 p-3 shadow-raised backdrop-blur-xl">
        <div className="flex items-center justify-between px-3 pt-1 pb-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
            <span className="size-2.5 rounded-full bg-border-strong" />
          </div>
          <span className="font-mono text-tag text-fg-subtle">utiqai · consola</span>
          <span className="w-10" />
        </div>

        <div className="grid gap-3">
          <Panel icon={MessageSquareText} label="vender">
            <div className="space-y-2 text-body-sm">
              <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-md border border-border bg-surface px-3 py-2 text-fg-muted">
                ¿Tienen las Run 42 en negro?
              </p>
              <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-accent px-3 py-2 text-accent-fg">
                Sí, quedan 3 en inventario. ¿Te aparto una?
              </p>
              <p className="flex items-center justify-end gap-1 font-mono text-tag text-fg-subtle">
                <Check className="size-3 text-success" strokeWidth={2.5} />
                agente IA · inventario real
              </p>
            </div>
          </Panel>

          <Panel icon={Workflow} label="automatizar">
            <div className="flex items-center gap-2 font-mono text-tag">
              {['webhook', 'ia.clasificar()', 'crm.sync'].map((step, i) => (
                <div key={step} className={cn('flex items-center gap-2', i > 0 && 'flex-1')}>
                  {i > 0 && <span className="h-px min-w-3 flex-1 bg-border-strong" />}
                  <span className="rounded-md border border-accent-border bg-accent-subtle px-2 py-1 whitespace-nowrap text-accent-text">
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-sunken">
              <m.div
                className="h-full origin-left rounded-full bg-linear-to-r from-accent to-accent-text"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.4, delay: 0.8, ease: ease.emphasized }}
              />
            </div>
          </Panel>

          <Panel icon={TrendingUp} label="crecer">
            <div className="flex h-24 items-end gap-2">
              {bars.map((height, i) => (
                <m.div
                  key={i}
                  className={cn(
                    'flex-1 origin-bottom rounded-t-md',
                    i === bars.length - 1 ? 'bg-accent' : 'bg-accent-border',
                  )}
                  style={{ height: `${height}%` }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.06, ease: ease.outExpo }}
                />
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </m.div>
  )
}

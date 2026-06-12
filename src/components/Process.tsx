import { motion } from 'framer-motion'
import { MessageSquare, Layers, Code2, Rocket } from 'lucide-react'
import { useIsMobile } from '../hooks/useIsMobile'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Entiendo tu idea',
    description:
      'Conversamos sobre el problema real, el contexto del negocio y los usuarios. Sin tecnicismos innecesarios — solo claridad sobre qué necesita tu producto.',
    color: '#3b82f6',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Diseño la solución',
    description:
      'Propongo la arquitectura, el stack y el alcance del proyecto. Definimos qué entra en el MVP y qué queda para después — para mover rápido sin acumular deuda.',
    color: '#818cf8',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desarrollo el producto',
    description:
      'Construyo con código limpio, revisiones continuas y actualizaciones de progreso. Ves avances reales desde la primera semana.',
    color: '#06b6d4',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Entrego y optimizo',
    description:
      'Deploy en producción, documentación básica y soporte post-lanzamiento. El producto sale listo para usuarios reales, no solo para demos.',
    color: '#10b981',
  },
]

export default function Process() {
  const isMobile = useIsMobile()
  return (
    <section id="proceso" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label">// cómo trabajo</p>
          <h2 className="section-title text-4xl md:text-5xl">
            Mi{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8)' }}>
              proceso
            </span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            De la idea al producto listo para usuarios — en pasos claros y sin sorpresas.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/10 via-blue-500/30 to-emerald-500/10 z-0" />

          {steps.map((step, i) => {
            const Icon = step.icon
            const stepMotion = isMobile
              ? { initial: false as const, animate: { opacity: 1, y: 0 } }
              : {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.15 },
                  transition: { delay: i * 0.1, duration: 0.5 },
                }
            return (
              <motion.div
                key={step.number}
                {...stepMotion}
                className="relative z-10 flex flex-col items-center text-center mobile-stable-card"
              >
                {/* Icon circle */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 relative"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}08)`,
                    border: `1px solid ${step.color}30`,
                    boxShadow: `0 0 20px ${step.color}15`,
                  }}
                >
                  <Icon size={28} style={{ color: step.color }} />
                  <span
                    className="absolute -top-2 -right-2 font-mono text-xs font-bold px-1.5 py-0.5 rounded"
                    style={{ background: step.color, color: '#fff', fontSize: '10px' }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

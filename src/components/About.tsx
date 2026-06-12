import { motion } from 'framer-motion'
import { Terminal, Zap, Shield } from 'lucide-react'
import { useIsMobile } from '../hooks/useIsMobile'

const traits = [
  { icon: Terminal, label: 'Enfoque en producto', desc: 'No solo código — pienso en el problema de negocio.' },
  { icon: Zap, label: 'Entrega rápida', desc: 'MVPs y prototipos en semanas, no meses.' },
  { icon: Shield, label: 'Código listo para prod', desc: 'Lo que entrego funciona en producción desde el día uno.' },
]

export default function About() {
  const isMobile = useIsMobile()
  return (
    <section id="sobre-mi" className="relative py-24 lg:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 0% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">// sobre mí</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Soy{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8)' }}>
                Jonathan Ortiz
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-base mb-5">
              Desarrollador full-stack. Construyo software práctico para resolver problemas reales: plataformas web, automatizaciones, dashboards, integraciones y productos con IA.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              Mi enfoque es convertir ideas en herramientas útiles, rápidas y listas para producción. Trabajo con negocios, founders y equipos que necesitan software que funcione — no prototipos que se quedan en un cajón.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contacto" className="btn-primary text-sm">
                Trabajemos juntos
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-ortiz-ruiz-359a67204/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0d1526 0%, #080d1a 100%)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <span className="font-mono text-xs text-gray-600 ml-2">jonathan@dev ~ $</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-1.5">
                <div>
                  <span className="text-blue-400">const </span>
                  <span className="text-white">developer </span>
                  <span className="text-gray-500">= </span>
                  <span className="text-emerald-400">{'{'}</span>
                </div>
                <div className="pl-5 text-gray-400">
                  <span className="text-blue-300">name</span>
                  <span className="text-gray-600">: </span>
                  <span className="text-orange-300">'Jonathan Ortiz'</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="pl-5 text-gray-400">
                  <span className="text-blue-300">role</span>
                  <span className="text-gray-600">: </span>
                  <span className="text-orange-300">'Full-Stack Developer'</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="pl-5 text-gray-400">
                  <span className="text-blue-300">focus</span>
                  <span className="text-gray-600">: </span>
                  <span className="text-emerald-400">['</span>
                  <span className="text-orange-300">SaaS</span>
                  <span className="text-emerald-400">', '</span>
                  <span className="text-orange-300">IA</span>
                  <span className="text-emerald-400">', '</span>
                  <span className="text-orange-300">Automatización</span>
                  <span className="text-emerald-400">', '</span>
                  <span className="text-orange-300">Dashboards</span>
                  <span className="text-emerald-400">']</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="pl-5 text-gray-400">
                  <span className="text-blue-300">available</span>
                  <span className="text-gray-600">: </span>
                  <span className="text-emerald-400">true</span>
                  <span className="text-gray-600">,</span>
                </div>
                <div className="text-emerald-400">{'}'}</div>
                <div className="text-gray-700 pt-1 flex items-center gap-1">
                  <span className="text-blue-400 text-xs">❯</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.1 }}
                    className="inline-block w-1.5 h-4 bg-blue-400"
                  />
                </div>
              </div>
            </div>

            {/* Traits — below terminal */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {traits.map((trait, i) => {
                const Icon = trait.icon
                const traitMotion = isMobile
                  ? {
                      initial: { opacity: 0, y: 16 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, amount: 0.2 },
                      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
                    }
                  : {
                      initial: { opacity: 0, y: 16 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true, amount: 0.15 },
                      transition: { delay: 0.3 + i * 0.1, duration: 0.45 },
                    }
                return (
                  <motion.div
                    key={trait.label}
                    {...traitMotion}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl mobile-stable-card"
                    style={{
                      background: 'linear-gradient(145deg, #0d1526 0%, #080d1a 100%)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{trait.label}</div>
                      <div className="text-[11px] text-gray-600 leading-tight">{trait.desc}</div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

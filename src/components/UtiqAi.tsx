import { motion } from 'framer-motion'

const tags = ['SaaS', 'Automatización', 'Dashboards', 'IA Aplicada', 'Integraciones', 'MVPs']

export default function UtiqAi() {
  return (
    <section id="utiqai" className="relative py-24 lg:py-28 overflow-hidden">
      {/* Top separator */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: brand info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs text-blue-400/60 tracking-widest uppercase mb-4">// mi marca</p>

            {/* Wordmark */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.08))',
                  border: '1px solid rgba(59,130,246,0.3)',
                  color: '#60a5fa',
                  boxShadow: '0 0 24px rgba(59,130,246,0.15)',
                }}
              >
                U
              </div>
              <div>
                <div className="text-2xl font-black font-mono text-white">
                  Utiq<span className="text-blue-400">Ai</span>
                </div>
                <div className="text-xs text-gray-600 font-mono">software con enfoque en producto</div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
              UtiqAi — software con{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8)' }}
              >
                enfoque en producto
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-sm mb-6 max-w-lg">
              UtiqAi es mi marca para crear soluciones digitales enfocadas en negocios: SaaS, automatizaciones, dashboards, integraciones e inteligencia artificial aplicada.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm max-w-lg">
              La idea es simple: construir herramientas útiles, medibles y listas para usarse en producción — sin bloatware, sin prototipos eternos.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-7">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-blue-400/70 border border-blue-500/20 bg-blue-500/5 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
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
                border: '1px solid rgba(59,130,246,0.15)',
                boxShadow: '0 4px 40px rgba(0,0,0,0.6), 0 0 60px rgba(59,130,246,0.05)',
              }}
            >
              {/* Terminal top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                </div>
                <span className="font-mono text-xs text-gray-600">~/utiqai</span>
                <div className="w-16" />
              </div>

              {/* Terminal body */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-blue-400">❯</span>
                  <span className="text-gray-400">whoami</span>
                </div>
                <div className="text-gray-300 pl-4">UtiqAi · Software Studio · Jonathan Ortiz</div>

                <div className="flex items-center gap-2 text-gray-500 pt-1">
                  <span className="text-blue-400">❯</span>
                  <span className="text-gray-400">build <span className="text-blue-300">--for-business</span> <span className="text-emerald-400">--ready-for-prod</span></span>
                </div>

                <div className="pl-4 space-y-1 text-xs">
                  <div className="text-emerald-400">✓ <span className="text-gray-400">SaaS architecture ready</span></div>
                  <div className="text-emerald-400">✓ <span className="text-gray-400">AI pipelines configured</span></div>
                  <div className="text-emerald-400">✓ <span className="text-gray-400">Dashboards & analytics set</span></div>
                  <div className="text-emerald-400">✓ <span className="text-gray-400">Integrations wired</span></div>
                  <div className="text-blue-400">→ <span className="text-gray-400">Deploying to production...</span></div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <span className="text-blue-400">❯</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.1 }}
                    className="inline-block w-1.5 h-4 bg-blue-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

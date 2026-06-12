import { motion } from 'framer-motion'
import { technologies } from '../data/technologies'
import { useIsMobile } from '../hooks/useIsMobile'

export default function Technologies() {
  const isMobile = useIsMobile()
  return (
    <section id="tecnologias" className="relative py-24 lg:py-32">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">// stack técnico</p>
          <h2 className="section-title text-4xl md:text-5xl">
            Tecnologías que{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8)' }}>
              domino
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((group, i) => {
            const groupMotion = isMobile
              ? { initial: false as const, animate: { opacity: 1, y: 0 } }
              : {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.15 },
                  transition: { delay: i * 0.08, duration: 0.5 },
                }
            return (
            <motion.div
              key={group.category}
              {...groupMotion}
              className="card-dark p-5 mobile-stable-card md:transition-colors md:duration-300 md:hover:border-blue-500/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{group.emoji}</span>
                <h3 className="font-mono text-sm font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="font-mono text-xs text-gray-400 border border-white/8 bg-white/3 rounded px-2.5 py-1 hover:border-blue-500/40 hover:text-blue-300 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

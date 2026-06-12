import { motion } from 'framer-motion'
import { services } from '../data/services'
import { useIsMobile } from '../hooks/useIsMobile'

export default function Services() {
  const isMobile = useIsMobile()
  return (
    <section id="servicios" className="relative py-24 lg:py-32">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.25), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="section-label">// servicios</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Qué puedo construir{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8)' }}>
                para tu negocio
              </span>
            </h2>
            <p className="text-gray-500 max-w-lg leading-relaxed text-sm">
              Soluciones prácticas para automatizar procesos, lanzar productos y convertir ideas en software real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#contacto" className="btn-primary text-sm whitespace-nowrap">
              Hablemos de tu proyecto
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon
            const cardMotion = isMobile
              ? { initial: false as const, animate: { opacity: 1, y: 0 } }
              : {
                  initial: { opacity: 0, y: 28 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, amount: 0.15 },
                  transition: { delay: Math.min(i * 0.05, 0.25), duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
                  whileHover: { y: -3 },
                }
            return (
              <motion.div
                key={service.title}
                {...cardMotion}
                className="group relative flex flex-col gap-4 p-5 rounded-2xl cursor-default mobile-stable-card md:transition-colors md:duration-300"
                style={{
                  background: 'linear-gradient(145deg, #0d1526 0%, #080d1a 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.4)',
                }}
              >
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-300 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(59,130,246,0.2)' }}
                />

                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center md:group-hover:bg-blue-500/15 md:transition-colors md:duration-300">
                  <Icon size={18} className="text-blue-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white text-sm mb-1.5">{service.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-1.5 mt-auto">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: 'rgba(59,130,246,0.5)' }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

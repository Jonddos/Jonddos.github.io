import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const chips = ['React', 'Next.js', 'Python', 'FastAPI', 'Docker', 'APIs']

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Radial glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(59, 130, 246, 0.13) 0%, transparent 65%)',
        }}
      />

      {/* Corner accent lines */}
      <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-blue-500/50 to-transparent" />
      <div className="absolute top-0 left-0 h-px w-40 bg-gradient-to-r from-blue-500/50 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-24 bg-gradient-to-b from-blue-500/20 to-transparent" />
      <div className="absolute top-0 right-0 h-px w-24 bg-gradient-to-l from-blue-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Name microlabel */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-mono text-blue-400/80 text-sm tracking-widest uppercase mb-4"
          >
            // Jonathan Ortiz
          </motion.p>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.03] tracking-tight mb-7"
          >
            <span className="text-white">Construyo software que ayuda a negocios a{' '}</span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 45%, #818cf8 100%)' }}
            >
              vender, automatizar y crecer.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl"
          >
            Soy desarrollador full-stack. Creo plataformas web, dashboards, automatizaciones,
            integraciones y productos con IA{' '}
            <span className="text-gray-300">listos para producción.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <a href="#contacto" className="btn-primary text-base px-7 py-3.5">
              Hablemos de tu proyecto
              <ArrowRight size={17} />
            </a>
            <a href="#proyectos" className="btn-secondary text-base px-7 py-3.5">
              Ver proyectos
            </a>
          </motion.div>

          {/* Tech chips */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2"
          >
            {chips.map((chip) => (
              <span
                key={chip}
                className="font-mono text-xs text-gray-500 border border-white/8 bg-white/2 rounded-md px-3 py-1.5 hover:border-blue-500/40 hover:text-blue-300 transition-all duration-200"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>



      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-700"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#sobre-mi', label: 'Sobre mí' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/5 shadow-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:bg-blue-600/30 transition-all duration-300">
              <span className="font-mono font-bold text-sm text-blue-400">J</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-semibold text-white text-[15px] tracking-tight">Jonathan Ortiz</span>
              <span className="font-mono text-[10px] text-blue-400/70 tracking-wider">Full-stack Developer</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <span className="font-mono text-xs text-gray-600 border border-gray-700/50 rounded px-2 py-1">ES</span>
            <a href="#contacto" className="btn-primary text-sm px-4 py-2">
              Hablemos
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-md border-b border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 justify-center text-sm"
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

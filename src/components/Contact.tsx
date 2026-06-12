import { motion } from 'framer-motion'
import { Mail, Linkedin, MessageCircle, ArrowRight } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contacto" className="relative py-24 lg:py-32">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.35), transparent)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label">// hablemos</p>

          <h2 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black text-white mb-5 leading-[1.08]">
            ¿Tienes una idea o necesitas{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8)' }}
            >
              software para tu negocio?
            </span>
          </h2>

          <p className="text-gray-500 text-base mb-12 max-w-md mx-auto leading-relaxed">
            Hablemos y convirtamos tu idea en una solución real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:jonddos@gmail.com?subject=Proyecto%20de%20software&body=Hola%20Jonathan%2C%20quiero%20hablar%20sobre%20un%20proyecto."
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-base px-8 py-4"
              aria-label="Enviar correo a Jonathan Ortiz"
            >
              <Mail size={17} />
              Escríbeme un correo
              <ArrowRight size={15} />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jonathan-ortiz-ruiz-359a67204/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-base px-8 py-4"
              aria-label="Perfil de LinkedIn de Jonathan Ortiz"
            >
              <Linkedin size={17} />
              LinkedIn
            </motion.a>

            <motion.a
              href="https://wa.me/573108034711"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-base px-8 py-4"
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle size={17} />
              WhatsApp
            </motion.a>
          </div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-12"
          >
            <div className="font-mono text-xs text-gray-700">
              Jonathan Ortiz · <span className="text-blue-400/40">UtiqAi</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

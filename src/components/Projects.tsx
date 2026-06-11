import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const featured = projects.slice(0, 2)
const rest = projects.slice(2)

export default function Projects() {
  return (
    <section id="proyectos" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-label">// proyectos</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Casos de{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #818cf8)' }}>
              estudio
            </span>
          </h2>
          <p className="text-gray-500 max-w-lg leading-relaxed text-sm">
            Proyectos reales con problemas concretos y resultados medibles — no demos de tutorial.
          </p>
        </motion.div>

        {/* Featured — 2 columns, larger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} featured />
          ))}
        </div>

        {/* Rest — 4-column compact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

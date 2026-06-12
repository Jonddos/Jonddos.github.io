import { motion } from 'framer-motion'
import { Github, ExternalLink, AlertCircle, CheckCircle2, Lock, Building2, ShoppingCart, Download } from 'lucide-react'
import type { Project } from '../data/projects'

const typeColorMap: Record<string, string> = {
  purple: 'text-purple-400 bg-purple-500/10 border-purple-500/25',
  green: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  blue: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
  orange: 'text-orange-400 bg-orange-500/10 border-orange-500/25',
  cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
  pink: 'text-pink-400 bg-pink-500/10 border-pink-500/25',
}

interface Props {
  project: Project
  index: number
  featured?: boolean
}

function PrivateBadge({ isCompany }: { isCompany?: boolean }) {
  return (
    <div className="flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-gray-500">
      <Lock size={9} />
      {isCompany ? 'Empresa / privado' : 'Proyecto privado'}
    </div>
  )
}

export default function ProjectCard({ project, index, featured = false }: Props) {
  const badgeClass = typeColorMap[project.typeColor] ?? typeColorMap.blue
  const isConfidential = project.isPrivate || project.isCompanyProject

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col overflow-hidden transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, #0d1526 0%, #080d1a 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '16px',
        boxShadow: '0 4px 32px rgba(0,0,0,0.5)',
      }}
    >
      {/* Top color bar */}
      <div
        className="h-[2px] w-full transition-opacity duration-300 opacity-50 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent 70%)` }}
      />

      {/* Preview area */}
      <div
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          height: featured ? '200px' : '160px',
          background: `linear-gradient(145deg, ${project.accentColor}12 0%, #080d1a 100%)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${project.accentColor}18 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}18 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            width: '120px', height: '120px',
            background: project.accentColor,
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className="relative z-10 flex items-center justify-center font-black font-mono transition-transform duration-300 group-hover:scale-105"
          style={{
            width: featured ? '72px' : '58px',
            height: featured ? '72px' : '58px',
            borderRadius: '14px',
            fontSize: featured ? '22px' : '17px',
            background: `linear-gradient(135deg, ${project.accentColor}25, ${project.accentColor}10)`,
            border: `1px solid ${project.accentColor}35`,
            color: project.accentColor,
            boxShadow: `0 0 28px ${project.accentColor}28`,
          }}
        >
          {project.title.slice(0, 2).toUpperCase()}
        </div>

        {/* Window dots */}
        <div className="absolute top-3 left-4 flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white/8" />
          <span className="w-2 h-2 rounded-full bg-white/8" />
          <span className="w-2 h-2 rounded-full" style={{ background: `${project.accentColor}50` }} />
        </div>

        {/* Status badge */}
        {isConfidential ? (
          <div className="absolute top-3 right-3">
            <PrivateBadge isCompany={project.isCompanyProject} />
          </div>
        ) : project.isInstallable ? (
          <div
            className="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded-full border flex items-center gap-1"
            style={{ color: project.accentColor, borderColor: `${project.accentColor}40`, background: `${project.accentColor}10` }}
          >
            <Download size={8} />
            Open Source
          </div>
        ) : featured ? (
          <div
            className="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded-full border"
            style={{ color: project.accentColor, borderColor: `${project.accentColor}40`, background: `${project.accentColor}10` }}
          >
            DESTACADO
          </div>
        ) : null}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-5 flex-1">
        <div>
          <span className={`inline-block font-mono text-[11px] border rounded-full px-2.5 py-0.5 mb-2 ${badgeClass}`}>
            {project.type}
          </span>
          <h3 className={`font-bold text-white leading-snug ${featured ? 'text-xl' : 'text-base'}`}>
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>

        <div className="h-px bg-white/5" />

        <div className="space-y-2.5">
          <div className="flex gap-2 text-sm">
            <AlertCircle size={13} className="text-orange-400/80 shrink-0 mt-[3px]" />
            <p className="text-gray-500 leading-relaxed">
              <span className="text-orange-400/90 font-medium">Problema: </span>
              {project.problem}
            </p>
          </div>
          <div className="flex gap-2 text-sm">
            <CheckCircle2 size={13} className="text-emerald-400/80 shrink-0 mt-[3px]" />
            <p className="text-gray-500 leading-relaxed">
              <span className="text-emerald-400/90 font-medium">Resultado: </span>
              {project.result}
            </p>
          </div>
        </div>

        {/* Tech + links */}
        <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[11px] text-gray-600 bg-white/3 border border-white/6 rounded px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>

          {/* Links — only shown when URLs exist */}
          <div className="flex gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white transition-colors"
                aria-label={`Repositorio GitHub de ${project.title}`}
              >
                <Github size={14} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors"
                aria-label={`Ver demo de ${project.title}`}
              >
                <ExternalLink size={14} />
              </a>
            )}
            {project.companyUrl && (
              <a
                href={project.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors"
                aria-label={`Sitio de la empresa — ${project.title}`}
              >
                <Building2 size={14} />
              </a>
            )}
            {project.productUrl && (
              <a
                href={project.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-cyan-400 transition-colors"
                aria-label={`Ver producto de ${project.title}`}
              >
                <ShoppingCart size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

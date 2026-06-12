import { Github, Linkedin, Globe, Mail } from 'lucide-react'

const socialLinks = [
  {
    href: 'https://github.com/Jonddos',
    label: 'GitHub',
    icon: Github,
    ariaLabel: 'GitHub de Jonathan Ortiz',
  },
  {
    href: 'https://www.linkedin.com/in/jonathan-ortiz-ruiz-359a67204/',
    label: 'LinkedIn',
    icon: Linkedin,
    ariaLabel: 'LinkedIn de Jonathan Ortiz',
  },
  {
    href: 'https://jonddos.github.io/',
    label: 'Portafolio',
    icon: Globe,
    ariaLabel: 'Portafolio de Jonathan Ortiz',
  },
  {
    href: 'mailto:jonddos@gmail.com',
    label: 'Email',
    icon: Mail,
    ariaLabel: 'Correo de Jonathan Ortiz',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-gray-700">
          © {new Date().getFullYear()} Jonathan Ortiz —{' '}
          <span className="text-blue-400/40">UtiqAi</span>
        </div>

        <nav className="flex items-center gap-4" aria-label="Links de contacto">
          {socialLinks.map(({ href, label, icon: Icon, ariaLabel }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={ariaLabel}
              className="flex items-center gap-1.5 font-mono text-xs text-gray-600 hover:text-gray-300 transition-colors duration-200"
            >
              <Icon size={12} />
              {label}
            </a>
          ))}
        </nav>

        <div className="font-mono text-xs text-gray-700 hidden sm:block">
          React · Vite · Tailwind · Framer Motion
        </div>
      </div>
    </footer>
  )
}

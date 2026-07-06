export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-gray-700">
          © {new Date().getFullYear()} Jonathan Ortiz —{' '}
          <span className="text-blue-400/40">UtiqAi</span>
        </div>
        <div className="font-mono text-xs text-gray-700 hidden sm:block">
          Construido con React · Vite · Tailwind · Framer Motion
        </div>
        <a
          href="mailto:jonddos@gmail.com"
          className="font-mono text-xs text-gray-700 hover:text-gray-400 transition-colors"
        >
          jonddos@gmail.com
        </a>
      </div>
    </footer>
  )
}

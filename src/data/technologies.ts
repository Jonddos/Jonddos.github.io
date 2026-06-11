export interface TechGroup {
  category: string
  emoji: string
  items: string[]
}

export const technologies: TechGroup[] = [
  {
    category: 'Frontend',
    emoji: '⚡',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    items: ['FastAPI', 'Node.js', 'Spring Boot', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Datos & Cloud',
    emoji: '☁️',
    items: ['Docker', 'GitHub Actions', 'Kafka', 'REST APIs', 'Webhooks', 'Vercel'],
  },
  {
    category: 'IA & Automatización',
    emoji: '🤖',
    items: ['OpenAI API', 'LangChain', 'OCR / Tesseract', 'Agentes IA', 'n8n', 'Prompt Engineering'],
  },
]

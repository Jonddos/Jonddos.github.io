import { BrainCircuit, Cloud, LayoutTemplate, Server } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface TechGroup {
  category: string
  icon: LucideIcon
  items: string[]
}

export const technologies: TechGroup[] = [
  {
    category: 'Frontend',
    icon: LayoutTemplate,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['FastAPI', 'Node.js', 'Spring Boot', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'Datos & Cloud',
    icon: Cloud,
    items: ['Docker', 'GitHub Actions', 'Kafka', 'REST APIs', 'Webhooks', 'Vercel'],
  },
  {
    category: 'IA & Automatización',
    icon: BrainCircuit,
    items: ['OpenAI API', 'LangChain', 'OCR / Tesseract', 'Agentes IA', 'n8n', 'Prompt Engineering'],
  },
]

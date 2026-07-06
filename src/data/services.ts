import { Code2, Layers, BarChart3, Bot, Globe, Plug, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export const services: Service[] = [
  {
    icon: Code2,
    title: 'Software a medida',
    description: 'Aplicaciones web y sistemas diseñados específicamente para tu negocio y sus procesos únicos.',
    features: ['Arquitectura escalable', 'Código limpio y mantenible', 'Documentación completa'],
  },
  {
    icon: Layers,
    title: 'Creación de SaaS',
    description: 'Productos de software como servicio listos para escalar, con auth, billing y multi-tenant.',
    features: ['Multi-tenancy', 'Suscripciones y pagos', 'Onboarding automatizado'],
  },
  {
    icon: BarChart3,
    title: 'Dashboards y analítica',
    description: 'Visualizaciones de datos interactivas para tomar decisiones basadas en información real.',
    features: ['Gráficas en tiempo real', 'KPIs personalizados', 'Exportación de reportes'],
  },
  {
    icon: Bot,
    title: 'Automatizaciones con IA',
    description: 'Flujos inteligentes que eliminan tareas repetitivas y aumentan la productividad de tu equipo.',
    features: ['Procesamiento de documentos', 'Agentes IA', 'Integración LLMs'],
  },
  {
    icon: Globe,
    title: 'Landing pages de venta',
    description: 'Páginas de alto impacto diseñadas para convertir visitantes en clientes.',
    features: ['Diseño premium', 'SEO optimizado', 'Alta velocidad de carga'],
  },
  {
    icon: Plug,
    title: 'Integraciones y APIs',
    description: 'Conecto tus herramientas y sistemas para que trabajen como uno solo sin fricciones.',
    features: ['REST y GraphQL APIs', 'Webhooks y eventos', 'Terceros: Stripe, HubSpot, etc.'],
  },
  {
    icon: Rocket,
    title: 'MVPs para validar ideas',
    description: 'De la idea al producto funcional en semanas, listo para mostrar a usuarios reales.',
    features: ['Scope definido y acotado', 'Entrega rápida', 'Base sólida para crecer'],
  },
]

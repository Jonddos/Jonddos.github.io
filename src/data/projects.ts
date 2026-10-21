export type ProjectAccent = 'teal' | 'violet' | 'emerald' | 'blue' | 'orange' | 'cyan' | 'pink'

/** Ilustración de producto que se dibuja en la tarjeta (ver ProjectPreview). */
export type ProjectPreviewKind = 'chat' | 'interview' | 'ocr' | 'documents' | 'ports' | 'analytics' | 'events'

export interface Project {
  id: string
  title: string
  type: string
  description: string
  problem: string
  result: string
  tech: string[]
  accent: ProjectAccent
  preview: ProjectPreviewKind
  /** Bajo NDA: sin enlaces públicos. */
  confidential: boolean
  links?: {
    github?: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    id: 'vendebot',
    title: 'Vendebot',
    type: 'SaaS / Ventas con IA',
    description:
      'SaaS de ventas conversacionales por WhatsApp: cada negocio sube su inventario real y un agente de IA vende usando solo esos datos, sin inventar precios ni stock.',
    problem:
      'Los negocios pequeños atienden ventas por WhatsApp de forma manual, sin poder escalar respuestas ni garantizar que la información dada al cliente sea correcta.',
    result:
      'Agente de IA multi-vendedor que responde en tiempo real por WhatsApp usando el inventario real de cada negocio, sin depender de la API oficial de Meta.',
    tech: ['Next.js 16', 'Supabase', 'DeepSeek / Groq', 'Evolution API', 'Docker'],
    accent: 'teal',
    preview: 'chat',
    confidential: true,
  },
  {
    id: 'interview-ai',
    title: 'Interview AI',
    type: 'IA / Plataforma',
    description:
      'Plataforma de entrevistas asistidas por IA para procesos de selección escalables, estructurados y trazables.',
    problem:
      'Los procesos de selección eran lentos, manuales y casi imposibles de escalar sin perder calidad en la evaluación.',
    result: 'Entrevistas estructuradas, analizadas en tiempo real y con trazabilidad completa para equipos de RRHH.',
    tech: ['React', 'Next.js', 'FastAPI', 'Spring Boot', 'Kafka'],
    accent: 'violet',
    preview: 'interview',
    confidential: true,
  },
  {
    id: 'ocr-registraduria',
    title: 'OCR Registraduría',
    type: 'Automatización / OCR',
    description:
      'Sistema de participación ciudadana con OCR para extracción y trazabilidad de datos en documentos oficiales.',
    problem:
      'La extracción de datos desde documentos de la Registraduría era completamente manual, lenta y propensa a errores.',
    result: 'Lectura automatizada y trazabilidad completa de información para revisión ciudadana en tiempo real.',
    tech: ['Python', 'OCR', 'FastAPI', 'PostgreSQL'],
    accent: 'emerald',
    preview: 'ocr',
    confidential: true,
  },
  {
    id: 'smiofi',
    title: 'SMIOFI',
    type: 'SaaS / Gestión Documental',
    description:
      'Plataforma de gestión documental diseñada para despachos y abogados — organización, trazabilidad y consulta de expedientes legales.',
    problem:
      'Los despachos de abogados manejaban expedientes en papel y hojas de cálculo, sin trazabilidad ni acceso rápido a la información.',
    result:
      'Plataforma centralizada para gestionar documentos legales con búsqueda, clasificación y seguimiento de casos.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'REST APIs'],
    accent: 'blue',
    preview: 'documents',
    confidential: true,
  },
  {
    id: 'portview',
    title: 'portview',
    type: 'Dev Tool / Sistema',
    description:
      'GUI multiplataforma para monitorear puertos TCP/UDP en tiempo real — visualiza, filtra y cierra procesos desde una sola interfaz nativa.',
    problem:
      'Diagnosticar qué proceso ocupaba un puerto o liberar puertos bloqueados exigía comandos de terminal distintos según el sistema operativo.',
    result:
      'Interfaz única para inspeccionar, filtrar y matar procesos por puerto en Windows, macOS y Linux sin tocar la terminal.',
    tech: ['Rust', 'Tauri', 'React', 'TypeScript'],
    accent: 'orange',
    preview: 'ports',
    confidential: false,
    links: {
      github: 'https://github.com/Jonddos/portview',
    },
  },
  {
    id: 'mundialitycs',
    title: 'Mundialitycs',
    type: 'Data / Analytics',
    description:
      'Plataforma de analítica deportiva enfocada en estadísticas y visualización de datos de torneos de fútbol internacionales.',
    problem:
      'No existía una herramienta accesible y visual para explorar y comparar estadísticas de mundiales de forma interactiva.',
    result:
      'Dashboard interactivo con estadísticas históricas, comparativas de selecciones y visualizaciones de rendimiento.',
    tech: ['React', 'TypeScript', 'Recharts', 'REST APIs'],
    accent: 'cyan',
    preview: 'analytics',
    confidential: true,
  },
  {
    id: 'happener',
    title: 'Happener',
    type: 'SaaS / Eventos',
    description: 'Plataforma SaaS para organizar, administrar y gestionar eventos y experiencias de forma profesional.',
    problem:
      'La gestión de eventos era completamente manual, sin herramientas integradas para administración end-to-end.',
    result: 'Plataforma lista para organizar, publicar y administrar eventos con flujos automatizados de gestión.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    accent: 'pink',
    preview: 'events',
    confidential: false,
  },
]

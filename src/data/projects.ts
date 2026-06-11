export interface Project {
  id: string
  title: string
  type: string
  typeColor: string
  description: string
  problem: string
  result: string
  tech: string[]
  github: string | null
  demo: string | null
  accentColor: string
  confidential?: boolean
}

export const projects: Project[] = [
  {
    id: 'interview-ai',
    title: 'Interview AI',
    type: 'IA / Plataforma',
    typeColor: 'purple',
    description: 'Plataforma de entrevistas asistidas por IA para procesos de selección escalables, estructurados y trazables.',
    problem: 'Los procesos de selección eran lentos, manuales y casi imposibles de escalar sin perder calidad en la evaluación.',
    result: 'Entrevistas estructuradas, analizadas en tiempo real y con trazabilidad completa para equipos de RRHH.',
    tech: ['React', 'Next.js', 'FastAPI', 'Spring Boot', 'Kafka'],
    github: null,
    demo: null,
    accentColor: '#8b5cf6',
    confidential: true,
  },
  {
    id: 'ocr-registraduria',
    title: 'OCR Registraduría',
    type: 'Automatización / OCR',
    typeColor: 'green',
    description: 'Sistema de participación ciudadana con OCR para extracción y trazabilidad de datos en documentos oficiales.',
    problem: 'La extracción de datos desde documentos de la Registraduría era completamente manual, lenta y propensa a errores.',
    result: 'Lectura automatizada y trazabilidad completa de información para revisión ciudadana en tiempo real.',
    tech: ['Python', 'OCR', 'FastAPI', 'PostgreSQL'],
    github: null,
    demo: null,
    accentColor: '#10b981',
    confidential: true,
  },
  {
    id: 'smiofi',
    title: 'SMIOFI',
    type: 'SaaS / Gestión Documental',
    typeColor: 'blue',
    description: 'Plataforma de gestión documental diseñada para despachos y abogados — organización, trazabilidad y consulta de expedientes legales.',
    problem: 'Los despachos de abogados manejaban expedientes en papel y hojas de cálculo, sin trazabilidad ni acceso rápido a la información.',
    result: 'Plataforma centralizada para gestionar documentos legales con búsqueda, clasificación y seguimiento de casos.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'REST APIs'],
    github: null,
    demo: null,
    accentColor: '#3b82f6',
    confidential: true,
  },
  {
    id: 'portview',
    title: 'portview',
    type: 'Open Source / Dev Tool',
    typeColor: 'orange',
    description: 'Herramienta open source para visualizar y presentar proyectos de desarrollo de forma organizada y profesional.',
    problem: 'Los desarrolladores no tenían una forma clara y profesional de mostrar sus proyectos más allá de GitHub.',
    result: 'Visualización organizada de proyectos con un diseño limpio, navegable y fácil de personalizar.',
    tech: ['React', 'Vite', 'GitHub API', 'TypeScript'],
    github: 'https://github.com/Jonddos/portview',
    demo: '#',
    accentColor: '#f97316',
    confidential: false,
  },
  {
    id: 'mundialitycs',
    title: 'Mundialitycs',
    type: 'Data / Analytics',
    typeColor: 'cyan',
    description: 'Plataforma de analítica deportiva enfocada en estadísticas y visualización de datos de torneos de fútbol internacionales.',
    problem: 'No existía una herramienta accesible y visual para explorar y comparar estadísticas de mundiales de forma interactiva.',
    result: 'Dashboard interactivo con estadísticas históricas, comparativas de selecciones y visualizaciones de rendimiento.',
    tech: ['React', 'TypeScript', 'Recharts', 'REST APIs'],
    github: 'https://github.com/Jonddos/mundialitycs',
    demo: '#',
    accentColor: '#06b6d4',
    confidential: false,
  },
  {
    id: 'happener',
    title: 'Happener',
    type: 'SaaS / Eventos',
    typeColor: 'pink',
    description: 'Plataforma SaaS para organizar, administrar y gestionar eventos y experiencias de forma profesional.',
    problem: 'La gestión de eventos era completamente manual, sin herramientas integradas para administración end-to-end.',
    result: 'Plataforma lista para organizar, publicar y administrar eventos con flujos automatizados de gestión.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    demo: '#',
    accentColor: '#ec4899',
    confidential: false,
  },
]

export interface Project {
  id: string
  title: string
  type: string
  typeColor: string
  description: string
  problem: string
  result: string
  tech: string[]
  githubUrl?: string | null
  demoUrl?: string | null
  companyUrl?: string | null
  productUrl?: string | null
  accentColor: string
  isPrivate?: boolean
  isCompanyProject?: boolean
  isInstallable?: boolean
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
    githubUrl: null,
    demoUrl: null,
    accentColor: '#8b5cf6',
    isPrivate: true,
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
    githubUrl: null,
    demoUrl: null,
    accentColor: '#10b981',
    isPrivate: true,
    isCompanyProject: true,
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
    githubUrl: null,
    demoUrl: null,
    companyUrl: 'https://smiofi.com/',
    accentColor: '#3b82f6',
    isCompanyProject: true,
  },
  {
    id: 'mundialytics',
    title: 'Mundialytics',
    type: 'SaaS / Analítica Deportiva',
    typeColor: 'cyan',
    description: 'Dashboard y template de predicción para análisis de torneos de fútbol, diseñado como producto digital vendible con visualización de datos, simulación y presentación profesional.',
    problem: 'Los análisis deportivos suelen estar dispersos en hojas de cálculo o herramientas poco visuales.',
    result: 'Producto digital listo para mostrar predicciones, métricas y escenarios de forma clara, visual y comercial.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Data Visualization'],
    githubUrl: null,
    demoUrl: 'https://mundialytics.vercel.app/',
    productUrl: 'https://5234138886916.gumroad.com/l/world-cup-prediction-template',
    accentColor: '#06b6d4',
    isPrivate: false,
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
    githubUrl: null,
    demoUrl: null,
    accentColor: '#ec4899',
    isPrivate: true,
  },
  {
    id: 'portview',
    title: 'portview',
    type: 'Open Source / Dev Tool',
    typeColor: 'orange',
    description: 'Herramienta open source para visualizar y organizar proyectos de desarrollo de forma más clara, pensada para mostrar repositorios o portafolios técnicos.',
    problem: 'Los desarrolladores no tenían una forma clara y profesional de mostrar sus proyectos más allá de GitHub.',
    result: 'Visualización organizada de proyectos con un diseño limpio, navegable y fácil de personalizar.',
    tech: ['React', 'Vite', 'GitHub API', 'TypeScript'],
    githubUrl: 'https://github.com/Jonddos/portview',
    demoUrl: null,
    accentColor: '#f97316',
    isInstallable: true,
  },
]

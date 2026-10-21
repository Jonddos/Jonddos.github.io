export const site = {
  name: 'Jonathan Ortiz',
  role: 'Full-stack Developer',
  brand: 'UtiqAi',
  url: 'https://jonddos.github.io/',
  email: 'jonddos@gmail.com',
  social: {
    linkedin: 'https://linkedin.com/in/jonddos',
    github: 'https://github.com/Jonddos',
  },
} as const

/** Navegación principal, en el mismo orden que las secciones de la página. */
export const navItems = [
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'tecnologias', label: 'Stack' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'utiqai', label: 'UtiqAi' },
] as const

/** Secciones observadas por el scrollspy (incluye las que no están en el menú). */
export const sectionIds = ['inicio', ...navItems.map((item) => item.id), 'contacto'] as const

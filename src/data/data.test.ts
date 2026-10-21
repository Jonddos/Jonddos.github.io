import { describe, expect, it } from 'vitest'
import { projects } from './projects'
import { services } from './services'
import { navItems, sectionIds, site } from './site'

describe('contenido', () => {
  it('los proyectos tienen ids únicos y solo enlaces públicos reales', () => {
    const ids = projects.map((project) => project.id)
    expect(new Set(ids).size).toBe(ids.length)

    for (const project of projects) {
      for (const url of Object.values(project.links ?? {})) {
        expect(url, project.id).toMatch(/^https:\/\//)
      }
      if (project.confidential) expect(project.links, project.id).toBeUndefined()
    }
  })

  it('el bento de servicios llena filas completas de 3 columnas', () => {
    const cells = services.reduce((total, service) => total + (service.featured ? 2 : 1), 0)
    expect(cells % 3).toBe(0)
  })

  it('la navegación y el scrollspy usan ids de sección únicos', () => {
    expect(new Set(sectionIds).size).toBe(sectionIds.length)
    expect(navItems.every((item) => sectionIds.includes(item.id))).toBe(true)
  })

  it('los datos de contacto tienen formato válido', () => {
    expect(site.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    for (const url of [site.url, ...Object.values(site.social)]) expect(url).toMatch(/^https:\/\//)
  })
})

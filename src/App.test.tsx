import { render, screen } from '@testing-library/react'
import axe from 'axe-core'
import { describe, expect, it } from 'vitest'
import App from './App'
import { navItems } from './data/site'

describe('App', () => {
  it('expone los landmarks, un único h1 y el skip link', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('banner')).toBeTruthy()
    expect(screen.getByRole('main').id).toBe('contenido')
    expect(screen.getByRole('contentinfo')).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Saltar al contenido' }).getAttribute('href')).toBe('#contenido')
  })

  it('cada sección está etiquetada por su título y la navegación apunta a secciones reales', () => {
    const { container } = render(<App />)

    for (const section of container.querySelectorAll('main section')) {
      const titleId = section.getAttribute('aria-labelledby')
      expect(titleId && document.getElementById(titleId), `sección #${section.id}`).toBeTruthy()
    }
    for (const item of navItems) {
      expect(document.getElementById(item.id), `#${item.id}`).toBeTruthy()
    }
  })

  it('no tiene violaciones de accesibilidad detectables por axe', async () => {
    const { container } = render(<App />)

    const results = await axe.run(container, {
      // jsdom no calcula estilos: el contraste se verifica sobre los tokens en contrast.test.ts
      rules: { 'color-contrast': { enabled: false } },
    })

    expect(results.violations.map((v) => `${v.id} (${v.nodes.length}): ${v.help}`)).toEqual([])
  })
})

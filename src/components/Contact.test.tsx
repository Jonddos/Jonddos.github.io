import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LazyMotion, domAnimation } from 'framer-motion'
import { describe, expect, it, vi } from 'vitest'
import { site } from '../data/site'
import Contact from './Contact'

function renderContact() {
  return render(
    <LazyMotion features={domAnimation} strict>
      <Contact />
    </LazyMotion>,
  )
}

describe('Contact', () => {
  it('copia el email al portapapeles y lo anuncia a lectores de pantalla', async () => {
    // userEvent.setup() instala su propio portapapeles: se espía después
    const user = userEvent.setup()
    const writeText = vi.spyOn(navigator.clipboard, 'writeText')
    renderContact()

    await user.click(screen.getByRole('button', { name: 'Copiar email' }))

    expect(writeText).toHaveBeenCalledWith(site.email)
    expect(screen.getByRole('status').textContent).toBe('Email copiado al portapapeles')
    expect(screen.getByRole('button', { name: 'Copiado' })).toBeTruthy()
  })

  it('si el portapapeles falla, anuncia el email para copiarlo a mano', async () => {
    const user = userEvent.setup()
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('denied'))
    renderContact()

    await user.click(screen.getByRole('button', { name: 'Copiar email' }))

    expect(screen.getByRole('status').textContent).toContain(site.email)
  })

  it('ofrece correo y perfiles con enlaces seguros', () => {
    renderContact()

    expect(screen.getByRole('link', { name: /Escríbeme un correo/ }).getAttribute('href')).toBe(`mailto:${site.email}`)
    for (const name of [/LinkedIn/, /GitHub/]) {
      const link = screen.getByRole('link', { name })
      expect(link.getAttribute('target')).toBe('_blank')
      expect(link.getAttribute('rel')).toBe('noopener noreferrer')
    }
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LazyMotion, domAnimation } from 'framer-motion'
import { describe, expect, it } from 'vitest'
import Navbar from './Navbar'

function renderNavbar() {
  return render(
    <LazyMotion features={domAnimation} strict>
      <Navbar />
    </LazyMotion>,
  )
}

describe('Navbar', () => {
  it('abre el menú móvil y lo cierra con Escape devolviendo el foco al botón', async () => {
    const user = userEvent.setup()
    renderNavbar()
    const toggle = screen.getByRole('button', { name: 'Menú' })

    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    await user.click(toggle)
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(screen.getByRole('navigation', { name: 'Menú principal' })).toBeTruthy()

    await user.keyboard('{Escape}')
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(toggle)
  })

  it('alterna el tema, lo aplica al documento y lo recuerda', async () => {
    const user = userEvent.setup()
    renderNavbar()
    const themeButton = screen.getByRole('button', { name: 'Tema oscuro' })
    const wasDark = themeButton.getAttribute('aria-pressed') === 'true'

    await user.click(themeButton)

    expect(themeButton.getAttribute('aria-pressed')).toBe(String(!wasDark))
    expect(document.documentElement.classList.contains('dark')).toBe(!wasDark)
    expect(localStorage.getItem('theme')).toBe(wasDark ? 'light' : 'dark')
  })
})

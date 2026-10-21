import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { buttonStyles } from './button-styles'

/** Alterna claro/oscuro. `aria-pressed` anuncia si el tema oscuro está activo. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label="Tema oscuro"
      title={dark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      className={buttonStyles({ variant: 'ghost', size: 'icon', className })}
    >
      {dark ? <Moon aria-hidden="true" className="size-4.5" /> : <Sun aria-hidden="true" className="size-4.5" />}
    </button>
  )
}

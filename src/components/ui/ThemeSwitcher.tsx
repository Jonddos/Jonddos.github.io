import { useId } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import type { ThemePreference } from '../../lib/theme'

const options: { value: ThemePreference; label: string; icon: typeof Sun }[] = [
  { value: 'system', label: 'Sistema', icon: Monitor },
  { value: 'light', label: 'Claro', icon: Sun },
  { value: 'dark', label: 'Oscuro', icon: Moon },
]

/** Control segmentado Sistema / Claro / Oscuro sobre radios nativos (flechas para moverse). */
export function ThemeSwitcher() {
  const { preference, setPreference } = useTheme()
  const name = useId()

  return (
    <fieldset className="inline-flex rounded-full border border-border bg-surface p-1">
      <legend className="sr-only">Tema de color</legend>
      {options.map(({ value, label, icon: Icon }) => (
        <label
          key={value}
          className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full px-3 text-tag text-fg-muted transition-colors duration-200 hover:text-fg has-checked:bg-surface-raised has-checked:text-fg has-checked:shadow-card has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-focus"
        >
          <input
            type="radio"
            name={name}
            value={value}
            checked={preference === value}
            onChange={() => setPreference(value)}
            className="sr-only"
          />
          <Icon aria-hidden="true" className="size-3.5" />
          {label}
        </label>
      ))}
    </fieldset>
  )
}

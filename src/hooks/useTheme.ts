import { useSyncExternalStore } from 'react'
import { getThemeState, setThemePreference, subscribe } from '../lib/theme'

export function useTheme() {
  const { preference, theme } = useSyncExternalStore(subscribe, getThemeState, getThemeState)

  return {
    preference,
    theme,
    setPreference: setThemePreference,
    toggle: () => setThemePreference(theme === 'dark' ? 'light' : 'dark'),
  }
}

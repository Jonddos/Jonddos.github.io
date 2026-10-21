export type ThemePreference = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

export interface ThemeState {
  preference: ThemePreference
  theme: ResolvedTheme
}

// Mantener sincronizado con el script anti-parpadeo de index.html
const STORAGE_KEY = 'theme'
const DARK_QUERY = '(prefers-color-scheme: dark)'

/** Color de la barra del navegador por tema (= token --canvas). */
export const THEME_COLOR: Record<ResolvedTheme, string> = {
  light: '#f9fafd',
  dark: '#060a13',
}

function readPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored === 'light' || stored === 'dark' ? stored : 'system'
  } catch {
    return 'system'
  }
}

function writePreference(preference: ThemePreference) {
  try {
    if (preference === 'system') localStorage.removeItem(STORAGE_KEY)
    else localStorage.setItem(STORAGE_KEY, preference)
  } catch {
    // Almacenamiento bloqueado (modo privado): el tema sigue funcionando en la sesión
  }
}

function resolve(preference: ThemePreference): ResolvedTheme {
  if (preference !== 'system') return preference
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
}

/** Aplica el tema sin animar cada color de la página durante el cambio. */
function apply(theme: ResolvedTheme) {
  const root = document.documentElement
  const freeze = document.createElement('style')
  freeze.textContent = '*,*::before,*::after{transition:none!important}'
  document.head.appendChild(freeze)

  root.classList.toggle('dark', theme === 'dark')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])

  // Forzar estilo antes de retirar el bloqueo de transiciones
  void window.getComputedStyle(root).opacity
  requestAnimationFrame(() => freeze.remove())
}

const listeners = new Set<() => void>()
let state: ThemeState = { preference: 'system', theme: 'dark' }

function commit(preference: ThemePreference) {
  const theme = resolve(preference)
  const changed = theme !== state.theme
  state = { preference, theme }
  if (changed || document.documentElement.classList.contains('dark') !== (theme === 'dark')) apply(theme)
  listeners.forEach((listener) => listener())
}

function onSystemChange() {
  if (state.preference === 'system') commit('system')
}

function onStorage(event: StorageEvent) {
  if (event.key === STORAGE_KEY) commit(readPreference())
}

if (typeof window !== 'undefined') {
  const preference = readPreference()
  state = { preference, theme: resolve(preference) }
}

export function subscribe(listener: () => void) {
  if (listeners.size === 0) {
    window.matchMedia(DARK_QUERY).addEventListener('change', onSystemChange)
    window.addEventListener('storage', onStorage)
  }
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) {
      window.matchMedia(DARK_QUERY).removeEventListener('change', onSystemChange)
      window.removeEventListener('storage', onStorage)
    }
  }
}

export function getThemeState() {
  return state
}

export function setThemePreference(preference: ThemePreference) {
  writePreference(preference)
  commit(preference)
}

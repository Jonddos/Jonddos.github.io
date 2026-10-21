import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// jsdom no implementa estas APIs del navegador que usan Framer Motion y los hooks del sitio
class IntersectionObserverMock implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ''
  readonly thresholds = []
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

// Las pruebas en entorno node (p. ej. contraste de tokens) no tienen `window`
if (typeof window !== 'undefined') {
  window.IntersectionObserver = IntersectionObserverMock
  window.scrollTo = () => {}
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) satisfies MediaQueryList

  afterEach(() => {
    cleanup()
    localStorage.clear()
  })
}

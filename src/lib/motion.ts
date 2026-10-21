import type { Transition, Variants } from 'framer-motion'

// Espejo en JS de los tokens de movimiento de src/styles/tokens.css
export const ease = {
  standard: [0.2, 0, 0, 1],
  emphasized: [0.05, 0.7, 0.1, 1],
  outExpo: [0.16, 1, 0.3, 1],
} as const

export const duration = {
  fast: 0.15,
  base: 0.25,
  slow: 0.4,
  reveal: 0.7,
} as const

/** Desfase entre elementos de una lista (30–60 ms según Material). */
export const stagger = 0.06

export const revealTransition: Transition = { duration: duration.reveal, ease: ease.outExpo }

/** Entrada estándar: sube 24 px y aparece. `custom` recibe el retraso en segundos. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...revealTransition, delay },
  }),
}

/** Margen del viewport para disparar las animaciones un poco antes de que el bloque entre. */
export const revealViewport = { once: true, margin: '0px 0px -12% 0px' } as const

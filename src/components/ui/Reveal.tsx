import { m, type HTMLMotionProps } from 'motion/react'
import { fadeUp, revealViewport } from '../../lib/motion'

interface RevealProps extends HTMLMotionProps<'div'> {
  /** Retraso en segundos. */
  delay?: number
}

/** Aparición al entrar en el viewport. Con reduced-motion solo se desvanece. */
export function Reveal({ delay = 0, ...props }: RevealProps) {
  return (
    <m.div
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      {...props}
    />
  )
}

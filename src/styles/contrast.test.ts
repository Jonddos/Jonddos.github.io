// @vitest-environment node
import { describe, expect, it } from 'vitest'
import css from './tokens.css?raw'

/*
 * Verifica sobre tokens.css (fuente de verdad) que cada par texto/fondo del sistema cumple
 * WCAG 2.2 AA en ambos temas y que los primitivos están dentro del gamut sRGB.
 */

type Tokens = Record<string, string>

/** Declaraciones de los bloques de primer nivel `:root {` o `.dark {` (no los de @media). */
function declarations(selector: string): Tokens {
  const tokens: Tokens = {}
  const blocks = new RegExp(`^${selector.replace('.', '\\.')} \\{([^}]*)\\}`, 'gm')
  for (const [, body] of css.matchAll(blocks)) {
    for (const [, name, value] of body.matchAll(/--([\w-]+):\s*([^;]+);/g)) tokens[name] = value.trim()
  }
  return tokens
}

const light = declarations(':root')
const themes = { light, dark: { ...light, ...declarations('.dark') } }

function resolve(tokens: Tokens, name: string): string {
  const value = tokens[name]
  if (!value) throw new Error(`Token --${name} no definido`)
  const reference = value.match(/^var\(--([\w-]+)\)$/)
  return reference ? resolve(tokens, reference[1]) : value
}

/** OKLCH → sRGB lineal (Björn Ottosson). */
function linearRgb(value: string): [number, number, number] {
  const match = value.match(/^oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)$/)
  if (!match) throw new Error(`Formato de color no soportado: ${value}`)
  const [l, c, h] = match.slice(1).map(Number)
  const a = c * Math.cos((h * Math.PI) / 180)
  const b = c * Math.sin((h * Math.PI) / 180)
  const lms = [
    l + 0.3963377774 * a + 0.2158037573 * b,
    l - 0.1055613458 * a - 0.0638541728 * b,
    l - 0.0894841775 * a - 1.291485548 * b,
  ].map((v) => v ** 3)
  return [
    4.0767416621 * lms[0] - 3.3077115913 * lms[1] + 0.2309699292 * lms[2],
    -1.2684380046 * lms[0] + 2.6097574011 * lms[1] - 0.3413193965 * lms[2],
    -0.0041960863 * lms[0] - 0.7034186147 * lms[1] + 1.707614701 * lms[2],
  ]
}

function luminance(value: string) {
  const [r, g, b] = linearRgb(value).map((channel) => Math.min(1, Math.max(0, channel)))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

function contrast(tokens: Tokens, foreground: string, background: string) {
  const [high, low] = [luminance(resolve(tokens, foreground)), luminance(resolve(tokens, background))].sort(
    (x, y) => y - x,
  )
  return (high + 0.05) / (low + 0.05)
}

const surfaces = ['canvas', 'surface', 'surface-raised', 'surface-sunken']
const textTokens = [
  'fg',
  'fg-muted',
  'fg-subtle',
  'accent-text',
  'success-text',
  'warning-text',
  'brand-1',
  'brand-2',
  'brand-3',
]
const codeText = ['code-fg', 'code-muted', 'syntax-keyword', 'syntax-property', 'syntax-string', 'syntax-literal']
const projectHues = ['teal', 'violet', 'emerald', 'blue', 'orange', 'cyan', 'pink']

describe.each(Object.entries(themes))('tema %s', (theme, tokens) => {
  it.each(textTokens.flatMap((fg) => surfaces.map((bg) => [fg, bg])))('texto --%s sobre --%s ≥ 4.5:1', (fg, bg) => {
    expect(contrast(tokens, fg, bg)).toBeGreaterThanOrEqual(4.5)
  })

  it.each(codeText.flatMap((fg) => ['code-bg', 'code-bar'].map((bg) => [fg, bg])))(
    'código --%s sobre --%s ≥ 4.5:1',
    (fg, bg) => {
      expect(contrast(tokens, fg, bg)).toBeGreaterThanOrEqual(4.5)
    },
  )

  it.each(projectHues)('acento de proyecto %s legible sobre todas las superficies', (hue) => {
    const text = `${hue}-${theme === 'dark' ? 300 : 700}`
    for (const bg of surfaces) expect(contrast(tokens, text, bg), `${text} / ${bg}`).toBeGreaterThanOrEqual(4.5)
  })

  it('el texto sobre botones de acento cumple AA en reposo y hover', () => {
    expect(contrast(tokens, 'accent-fg', 'accent')).toBeGreaterThanOrEqual(4.5)
    expect(contrast(tokens, 'accent-fg', 'accent-hover')).toBeGreaterThanOrEqual(4.5)
    expect(contrast(tokens, 'accent-text', 'accent-subtle')).toBeGreaterThanOrEqual(4.5)
  })

  it('el anillo de foco destaca ≥ 3:1 (WCAG 1.4.11)', () => {
    for (const bg of ['canvas', 'surface']) expect(contrast(tokens, 'focus', bg)).toBeGreaterThanOrEqual(3)
  })
})

describe('primitivos', () => {
  it('todos los colores OKLCH opacos están dentro del gamut sRGB', () => {
    const colors = Object.entries(light).filter(([, value]) => /^oklch\([\d.]+ [\d.]+ [\d.]+\)$/.test(value))
    expect(colors.length).toBeGreaterThan(40)
    for (const [name, value] of colors) {
      for (const channel of linearRgb(value)) {
        expect(channel, `--${name}`).toBeGreaterThanOrEqual(-0.001)
        expect(channel, `--${name}`).toBeLessThanOrEqual(1.001)
      }
    }
  })
})

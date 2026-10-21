# Jonathan Ortiz · UtiqAi — Portafolio

Sitio personal de **Jonathan Ortiz**, desarrollador full-stack, y de su marca **UtiqAi**: proyectos, servicios, proceso y contacto.

🌐 **Producción:** <https://jonddos.github.io/>

## Stack

- **React 18** + **TypeScript** (strict) + **Vite 7**
- **Tailwind CSS 4** con un design system propio de tokens OKLCH ([guía](docs/design-system.md))
- **Framer Motion** (`LazyMotion` + `reducedMotion="user"`) y **lucide-react**
- Fuentes autoalojadas: Inter Variable y JetBrains Mono Variable
- Calidad: ESLint 9 (+ jsx-a11y), Prettier (+ orden de clases Tailwind), Vitest + Testing Library + axe-core

## Puesta en marcha

Requiere Node 22.

```bash
npm ci
npm run dev        # http://localhost:5173
```

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Typecheck + build de producción en `dist/` |
| `npm run preview` | Sirve `dist/` en local |
| `npm run check` | **Gate de calidad:** typecheck, lint, formato y pruebas |
| `npm run test` / `test:watch` | Pruebas (accesibilidad con axe, contraste de tokens, interacción y datos) |
| `npm run lint` / `format` | ESLint y Prettier |
| `npm run assets` | Regenera `og-image.png` e iconos desde `scripts/assets/` (usa Chrome/Edge) |

## Estructura

```text
src/
  App.tsx              # composición de secciones (orden = decisión de marca)
  components/          # secciones de la página y piezas propias (HeroConsole, ProjectPreview…)
  components/ui/       # librería del design system (Button, Card, Badge, Section…)
  data/                # contenido: site, projects, services, technologies
  hooks/               # useTheme, useActiveSection (scrollspy), useScrolled
  lib/                 # cn, motion (tokens de movimiento), theme (store de tema)
  styles/              # tokens.css (fuente de verdad) e index.css
public/                # favicon, iconos, og-image, manifest, robots, sitemap
scripts/               # render-assets.mjs y plantillas HTML de los assets
docs/                  # design-system.md
```

## Contenido

- **Proyectos:** `src/data/projects.ts` (cada uno con `accent` y `preview`; los confidenciales no llevan enlaces).
- **Servicios y stack:** `src/data/services.ts` y `src/data/technologies.ts`.
- **Contacto y navegación:** `src/data/site.ts` es la única fuente de email, perfiles y menú.

## Deploy

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: instala, pasa `npm run check` y, si todo está en verde, compila y publica en GitHub Pages. Los pull requests pasan el mismo gate en `ci.yml` sin publicar nada.

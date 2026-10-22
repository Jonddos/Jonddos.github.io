# AGENTS.md — Portafolio Jonathan Ortiz · UtiqAi

## Propósito y alcance

Sitio personal de una sola página de **Jonathan Ortiz** (desarrollador full-stack) con su marca **UtiqAi**.
Objetivo: presentar proyectos, servicios y proceso, y convertir visitas en contactos (email/LinkedIn).

- Repositorio: `Jonddos/Jonddos.github.io` · rama canónica `main`.
- Producción: GitHub Pages (`https://jonddos.github.io/`), desplegado por `.github/workflows/deploy.yml`.
- Fuera de alcance: backend, formularios con servidor, analítica de terceros.

## Stack

- React 18 + TypeScript 5 (strict) + Vite 7. Node 22 (local y CI).
- Tailwind CSS 4 con design system propio: tokens en `src/styles/tokens.css`, guía en `docs/design-system.md`.
- Framer Motion con `LazyMotion strict` (usar `m.*`, nunca `motion.*`). Iconos: lucide-react.
- QA: ESLint 9 flat (+ jsx-a11y, react-hooks 7), Prettier (+ plugin Tailwind), Vitest 5 + Testing Library + axe-core.

## Estructura

```text
src/
  App.tsx            # composición de secciones (el orden es decisión de marca: no reordenar sin pedirlo)
  components/        # secciones de la página
  components/ui/     # componentes del design system
  data/              # contenido (site, proyectos, servicios, tecnologías)
  hooks/ lib/        # tema, scrollspy, motion, cn
  styles/            # tokens.css (fuente de verdad) + index.css
public/              # assets estáticos (iconos y og-image generados con `npm run assets`)
scripts/             # render-assets.mjs + plantillas en scripts/assets/
.github/workflows/   # deploy.yml (main) y ci.yml (pull requests)
```

## Comandos verificados

| Comando | Uso |
|---|---|
| `npm ci` | Instalar dependencias desde el lockfile |
| `npm run dev` | Servidor de desarrollo en `http://localhost:5173` |
| `npm run check` | Gate completo: `typecheck` + `lint` + `format:check` + `test` |
| `npm run build` | Typecheck (`tsc`) + build de producción a `dist/` |
| `npm run preview` | Servir `dist/` localmente |
| `npm run test` | Vitest (axe, contraste de tokens, interacción, datos) |
| `npm run format` | Prettier con orden de clases Tailwind |
| `npm run assets` | Regenerar `public/og-image.png` e iconos (requiere Chrome o Edge) |

## Convenciones

- El copy del sitio está en español y es contenido del autor: no inventar métricas, clientes, enlaces ni resultados.
- **Solo colores del sistema:** la paleta por defecto de Tailwind está desactivada. Usar roles semánticos (`bg-surface`, `text-fg-muted`, `text-accent-text`…), nunca hex ni `style` para colores.
- Un token nuevo de texto debe añadirse a `src/styles/contrast.test.ts`.
- No pasar a `className` utilidades que compitan con la base de un componente (p. ej. `hidden` en un botón): envolverlo.
- Los datos viven en `src/data/`; `site.ts` es la única fuente de email, perfiles y navegación.
- Sin `;`, comillas simples y ancho 120 (Prettier).

## Restricciones y áreas protegidas

- **Cada push a `main` despliega a producción.** No hacer push, merge ni tag sin autorización explícita; trabajar en ramas.
- No modificar `.github/workflows/` sin justificarlo en el resumen de la tarea.
- No subir secretos: el sitio es estático y no necesita ninguno.
- `Portafolio.zip` es un archivo local ignorado: no tocarlo.

## Criterio de terminado y QA

- Cambios de contenido: `npm run check` + revisión visual de la sección.
- Cambios visuales o de layout: `npm run check` + `npm run build` + revisión en 375, 768, 1024 y 1280 px, **en ambos temas**.
- Cambios de dependencias, CI o transversales: QA completa (todo lo anterior + `npm run preview`).

## Mapa documental

- `README.md`: visión general, scripts y deploy.
- `docs/design-system.md`: tokens, componentes, tema y accesibilidad.

# Design system

Sistema de diseño del portafolio de Jonathan Ortiz · UtiqAi. Sigue las prácticas de los design systems de referencia (Radix, Material 3, Primer, shadcn/ui): **tokens en capas, roles semánticos por tema, componentes con variantes tipadas y accesibilidad verificada automáticamente**.

La fuente de verdad de los valores es [`src/styles/tokens.css`](../src/styles/tokens.css). Este documento explica cómo usarlos; no duplica los valores.

## 1. Arquitectura de tokens

| Capa | Dónde | Ejemplos | ¿Se usa en componentes? |
|---|---|---|---|
| **1 · Primitivos** | `:root` en `tokens.css` | `--ink-900`, `--electric-500`, `--teal-300` | **No.** Paleta cruda; no genera utilidades |
| **2 · Semánticos** | `:root` (claro) y `.dark` (oscuro) | `--canvas`, `--fg-muted`, `--accent-text` | Sí, vía utilidades (`bg-canvas`, `text-fg-muted`) |
| **3 · Componente** | `@theme` | `--radius-card`, `--spacing-section`, `--elevation-card` | Sí (`rounded-card`, `py-section`, `shadow-card`) |

- Los colores están en **OKLCH** (perceptualmente uniforme) y **dentro del gamut sRGB**.
- `@theme { --color-*: initial }` elimina la paleta por defecto de Tailwind: **solo existen los colores del sistema**. Un `text-gray-500` no compila a nada; hay que usar un rol (`text-fg-subtle`).
- Los roles semánticos se exponen con `@theme inline`, así las utilidades cambian solas al alternar `.dark` en `<html>`.

### Roles de color

| Rol | Uso |
|---|---|
| `canvas` | Fondo de página |
| `surface` / `surface-raised` / `surface-sunken` | Tarjetas, elementos elevados y pozos (código, listas internas) |
| `border-subtle` / `border` / `border-strong` | Separadores, bordes de tarjeta, bordes de controles |
| `fg` / `fg-muted` / `fg-subtle` | Texto principal, secundario y terciario (los tres ≥ 4,5:1) |
| `accent` / `accent-hover` / `accent-fg` | Fondo de acciones primarias y su texto |
| `accent-text` / `accent-subtle` / `accent-border` | Texto de acento, fondos tintados y bordes de acento |
| `success` / `warning` | Texto de estado (siempre acompañado de icono + palabra) |
| `focus` | Anillo de foco |
| `code-*`, `syntax-*` | Terminales y código: **siempre oscuros**, en ambos temas |
| `project` / `project-text` | Acento por proyecto; requiere `data-accent="teal|violet|…"` en un ancestro |

### Tipografía (roles de Material 3)

| Utilidad | Uso |
|---|---|
| `text-display` | H1 del hero (fluido con `clamp`) |
| `text-headline` | H2 de sección |
| `text-title-lg` / `text-title` | Títulos de tarjeta destacada / normal |
| `text-lead` / `text-body` / `text-body-sm` | Entradillas, cuerpo y cuerpo secundario |
| `text-caption` / `text-tag` | Chips y etiquetas (mono) |
| `text-label` | Eyebrows en mayúsculas (mono, tracking amplio) |

Fuentes: **Inter Variable** (UI) y **JetBrains Mono Variable** (código y etiquetas), autoalojadas con Fontsource. `Inter Fallback` ajusta las métricas de Arial para que no haya saltos de layout al cargar.

### Espaciado, forma, elevación y capas

- Base de 4 px de Tailwind; ritmo vertical de sección con `py-section` (fluido).
- Radios con nombre de uso: `rounded-control` (botones, inputs), `rounded-card`, `rounded-panel`.
- Elevación por tema: `shadow-card`, `shadow-raised`, `shadow-glow`. En oscuro combinan borde e highlight interior en lugar de sombras negras.
- z-index: contenido `0–10`, header `50`, skip link `60`.

### Movimiento

- Easings: `ease-standard` (M3), `ease-emphasized` y `ease-out-expo`, con espejo en [`src/lib/motion.ts`](../src/lib/motion.ts) para Motion (`motion/react`).
- Duraciones: 150 ms (micro), 250 ms (estado), 400–700 ms (entrada de bloques). Las salidas son más cortas que las entradas.
- `MotionConfig reducedMotion="user"` + CSS `prefers-reduced-motion`: con movimiento reducido no hay desplazamientos ni bucles.
- El H1 del hero no se desvanece: es el LCP y se pinta en el primer frame.

## 2. Componentes (`src/components/ui/`)

| Componente | API principal | Notas |
|---|---|---|
| `Button`, `ButtonLink`, `buttonStyles()` | `variant: primary \| secondary \| ghost`, `size: sm \| md \| lg \| icon`, `external` | `md`/`lg` ≥ 44 px de alto. `external` añade `target`/`rel` y aviso para lector de pantalla |
| `Badge` | `variant: neutral \| accent \| project`, `size: sm \| md`, `shape: pill \| tag` | Mono. `project` usa el acento del ancestro `data-accent` |
| `Card` | `as`, `interactive`, `spotlight` | Spotlight solo con puntero fino y sin reduced-motion |
| `Section`, `SectionHeader`, `Eyebrow` | `id`, `divider` · `eyebrow`, `title`, `highlight`, `description`, `align`, `action` | La sección queda etiquetada por `{id}-title` |
| `Container` | — | Ancho máximo y gutters responsivos |
| `Reveal` | `delay` | Entrada al hacer scroll (`whileInView`, una vez) |
| `IconTile` | `icon`, `size`, `tone` | Icono decorativo (`aria-hidden`) |
| `TerminalWindow` | `title` | Superficie de código siempre oscura |
| `LogoMark`, `UtiqAiMark` | `className` | Monogramas SVG «J» y «U» |
| `GithubMark`, `LinkedinMark` | `className` | Logotipos oficiales sin modificar, en `currentColor` y decorativos (`aria-hidden`): lucide 1.x no incluye marcas |
| `ThemeToggle`, `ThemeSwitcher` | — | Alternador (`aria-pressed`) y selector Sistema/Claro/Oscuro (radios nativos) |
| `SkipLink`, `ExternalLink` | — | Salto al contenido; enlace externo seguro y anunciado |

**Regla de composición:** no pases a `className` una utilidad que compita con la base del componente (p. ej. `hidden` frente al `inline-flex` de un botón). En ese caso envuelve el componente; `cn()` concatena y no resuelve conflictos.

## 3. Tema claro/oscuro

- `<html class="dark">` activa el tema oscuro. Sin preferencia guardada se sigue `prefers-color-scheme`.
- Un script inline en `index.html` aplica el tema **antes del primer pintado** (sin parpadeo) y actualiza `theme-color`.
- [`src/lib/theme.ts`](../src/lib/theme.ts) es un store externo (`useSyncExternalStore`): persiste en `localStorage`, escucha cambios del sistema y sincroniza pestañas. Durante el cambio desactiva las transiciones para que no se anime cada color.

## 4. Accesibilidad (WCAG 2.2 AA)

- Contraste ≥ 4,5:1 para todo texto y ≥ 3:1 para el foco, en ambos temas. Lo verifica `src/styles/contrast.test.ts` sobre los tokens.
- Foco visible con `outline` (también funciona en modo de alto contraste de Windows) y skip link como primer elemento enfocable.
- Un único `h1`, un `h2` por sección y landmarks `header` / `nav` / `main` / `footer`. axe-core se ejecuta sobre la app completa en `src/App.test.tsx`.
- Los estados nunca dependen solo del color: Problema/Resultado llevan icono y texto.
- Las ilustraciones (consola del hero, previews de proyectos) son decorativas: van con `aria-hidden`.
- `prefers-contrast: more` sube el texto secundario a primario y refuerza los bordes.

## 5. Cómo extender

- **Nuevo color semántico:** añade el primitivo (capa 1), asígnalo en `:root` y `.dark` (capa 2), expónlo en `@theme inline` y añade el par a `contrast.test.ts` si es texto.
- **Nuevo proyecto:** añade una entrada en [`src/data/projects.ts`](../src/data/projects.ts) con `accent` y `preview`. Si necesitas otra ilustración, créala en `ProjectPreview.tsx`.
- **Nuevo servicio:** añádelo en `services.ts`. La prueba de datos exige que el bento llene filas de 3 (`featured` ocupa 2 columnas).

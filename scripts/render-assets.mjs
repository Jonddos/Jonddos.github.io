// Genera los PNG de public/ (imagen social e iconos) a partir de las plantillas de scripts/assets
// con Chrome o Edge en modo headless. Uso: `npm run assets` (BROWSER_PATH para otro navegador).
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { setTimeout as sleep } from 'node:timers/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const candidates = [
  process.env.BROWSER_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
]
const browser = candidates.find((path) => path && existsSync(path))
if (!browser) {
  console.error('No se encontró Chrome/Edge. Define BROWSER_PATH con la ruta del ejecutable.')
  process.exit(1)
}

const outputs = [
  { template: 'og-image.html', file: 'og-image.png', width: 1200, height: 630 },
  { template: 'icon.html', file: 'apple-touch-icon.png', width: 180, height: 180 },
  { template: 'icon.html', file: 'icon-192.png', width: 192, height: 192 },
  { template: 'icon.html', file: 'icon-512.png', width: 512, height: 512 },
]

/** En Windows el ejecutable puede terminar antes de que el proceso hijo escriba la captura. */
async function waitForFile(path, timeoutMs = 15000) {
  for (let waited = 0; waited < timeoutMs; waited += 250) {
    if (existsSync(path)) return true
    await sleep(250)
  }
  return false
}

// Chromium impone un ancho mínimo de ventana: los tamaños pequeños se pintan en 512 px y se
// reducen con el factor de escala (raster vectorial nítido, sin reescalar un PNG)
const MIN_WINDOW = 512

for (const { template, file, width, height } of outputs) {
  const target = join(root, 'public', file)
  const scale = Math.min(1, width / MIN_WINDOW)
  rmSync(target, { force: true })
  // Perfil aislado: evita que el navegador delegue en una instancia ya abierta
  const profile = mkdtempSync(join(tmpdir(), 'render-assets-'))

  execFileSync(
    browser,
    [
      '--headless=new',
      `--user-data-dir=${profile}`,
      '--no-first-run',
      '--disable-gpu',
      '--hide-scrollbars',
      `--force-device-scale-factor=${scale}`,
      '--virtual-time-budget=3000',
      `--window-size=${Math.round(width / scale)},${Math.round(height / scale)}`,
      `--screenshot=${target}`,
      pathToFileURL(join(root, 'scripts', 'assets', template)).href,
    ],
    { stdio: 'ignore' },
  )

  const ok = await waitForFile(target)
  await sleep(500)
  rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
  if (!ok) {
    console.error(`✗ No se generó public/${file}`)
    process.exit(1)
  }
  console.log(`✓ public/${file} (${width}×${height})`)
}

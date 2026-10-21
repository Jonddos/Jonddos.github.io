import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    // Solo los tokens se leen en pruebas (contrast.test.ts); el resto del CSS se omite
    css: { include: [/tokens\.css/] },
    restoreMocks: true,
  },
})

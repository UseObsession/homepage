/* Builds src/screens/render.ts for Node, as the prerender builds its server entry, and imports it: every app screen's
   component, drawn to static HTML (renderScreen) and their names (SCREEN_NAMES). Used by scripts/check-screens.mjs and
   scripts/screens-html.mjs. The bundle is written inside node_modules, so it finds react there, and removed once read. */
import react from '@vitejs/plugin-react'
import { rm } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'
import { root } from './screens-source.mjs'

export async function loadScreens() {
  const out = join(root, 'node_modules', `.screens-ssr-${process.pid}`)
  try {
    await build({
      configFile: false,
      root,
      logLevel: 'warn',
      plugins: [react()],
      build: { ssr: 'src/screens/render.ts', outDir: out, emptyOutDir: true },
    })
    return await import(pathToFileURL(join(out, 'render.js')).href)
  } finally {
    await rm(out, { recursive: true, force: true })
  }
}

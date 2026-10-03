import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import type { Workspace } from '../components/workspace'
import { SCREENS } from './registry'

/* An app screen's HTML, drawn from its component: never in the browser. Used at build time by the prerender
   (components/screens.server.ts), by `npm run dev` to answer /screens/WORKSPACE/NAME (vite.config.ts), and by
   scripts/check-screens.mjs and scripts/screens-html.mjs. Static markup: no React markers, nothing to hydrate. */
export function renderScreen(name: string, workspace: Workspace = 'agency'): string | undefined {
  const screen = SCREENS[name]
  return screen && renderToStaticMarkup(createElement(screen, { workspace }))
}

export { SCREEN_NAMES } from './names'

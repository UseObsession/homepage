import { SCREEN_NAMES } from '../screens/names'
import { renderScreen } from '../screens/render'
import type { Workspace } from './workspace'

/* The app screens' HTML for the prerender (scripts/prerender.mjs aliases ./screens to this file in its server build):
   every screen is drawn from its component (src/screens/NAME.tsx), so each page's HTML carries its screens. The page's
   head links each screen's CSS (the prerender reads them off the data-screen attribute AppScreen writes), and the
   prerender writes every screen to dist/screens/WORKSPACE/NAME.html for the browser to fetch on a client side move.
   Every screen is drawn once, here, before any page renders: a React render never runs inside another one. */

const WORKSPACES: Workspace[] = ['agency', 'company']
const HTML = new Map<string, string>()
for (const name of SCREEN_NAMES)
  for (const workspace of WORKSPACES) {
    const html = renderScreen(name, workspace)
    if (html !== undefined) HTML.set(`${workspace}/${name}`, html)
  }

const NAMES = new Set(SCREEN_NAMES)

export function hasScreen(name: string): boolean {
  return NAMES.has(name)
}

export function screenHtmlNow(name: string, workspace: Workspace): string | undefined {
  return HTML.get(`${workspace}/${name}`)
}

export async function loadScreen(name: string, workspace: Workspace): Promise<string | undefined> {
  return screenHtmlNow(name, workspace)
}

/* Every screen's HTML by "WORKSPACE/NAME", for dist/screens (scripts/prerender.mjs). */
export const screenFiles = (): ReadonlyMap<string, string> => HTML

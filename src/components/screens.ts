import { SCREEN_NAMES } from '../screens/names'
import type { Workspace } from './workspace'

/* Where the app screens' HTML and CSS come from, in the browser (components/AppScreen).
   Every prerendered page already carries its screens: their HTML is in the page, and their CSS is linked in its head by
   scripts/prerender.mjs. So the bundle never carries the screens: their components (src/screens/NAME.tsx) are drawn
   only at build time. A screen is fetched only when the reader moves to a page client side: its HTML (drawn at build
   into dist/screens/WORKSPACE/NAME.html) and its own CSS arrive together, as 2 small files.
   The prerender swaps this module for screens.server.ts, which draws every screen at hand. */

const NAMES = new Set(SCREEN_NAMES)
const CSS = import.meta.glob('../screens/css/*.css')

/* Whether a screen exists at all. The list is known at build time on both sides, so the server and the browser
   agree, and a tab whose screen has not landed yet is left out the same way in both (Hero's screen tabs). */
export function hasScreen(name: string): boolean {
  return NAMES.has(name)
}

/* A screen's HTML while rendering: only the server has it. In the browser the prerendered HTML is already in place. */
export function screenHtmlNow(name: string, workspace: Workspace): string | undefined {
  void name
  void workspace
  return undefined
}

/* A screen's HTML for a workspace, once its CSS is in the page too. A screen drawn by another screen's sheet as well
   (agencytask is compose's markup, class "app-compose app-agencytask") brings every app-NAME sheet on its root, as the
   prerender does. */
export async function loadScreen(name: string, workspace: Workspace): Promise<string | undefined> {
  if (!NAMES.has(name)) return undefined
  const [h] = await Promise.all([
    fetch(`/screens/${workspace}/${name}`)
      .then((r) => (r.ok ? r.text() : undefined))
      .catch(() => undefined),
    CSS[`../screens/css/${name}.css`]?.(),
  ])
  if (h === undefined) return undefined
  const root = h.match(/class="il appx-il ([^"]+)"/)?.[1] ?? ''
  const more = [...root.matchAll(/\bapp-([a-z]+)\b/g)].map((m) => m[1]).filter((n) => n !== name)
  await Promise.all(more.map((n) => CSS[`../screens/css/${n}.css`]?.()))
  return h
}

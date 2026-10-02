/* Where the app screens' HTML and CSS come from, in the browser (components/AppScreen).
   Every prerendered page already carries its screens: their HTML is in the page, and their CSS is linked in its head by
   scripts/prerender.mjs. So the bundle never carries the screens. A screen is fetched only when the reader moves to a
   page client side: its HTML and its own CSS arrive together, as 2 small files.
   The prerender swaps this module for screens.server.ts, which has every screen's HTML at hand. */

const HTML = import.meta.glob<string>('../screens/html/*.html', { query: '?raw', import: 'default' })
const CSS = import.meta.glob('../screens/css/*.css')

/* Whether a screen exists at all. The file list is known at build time on both sides, so the server and the browser
   agree, and a tab whose screen has not landed yet is left out the same way in both (Hero's screen tabs). */
export function hasScreen(name: string): boolean {
  return `../screens/html/${name}.html` in HTML
}

/* A screen's HTML while rendering: only the server has it. In the browser the prerendered HTML is already in place. */
export function screenHtmlNow(name: string): string | undefined {
  void name
  return undefined
}

/* A screen's HTML, once its CSS is in the page too. */
export async function loadScreen(name: string): Promise<string | undefined> {
  const html = HTML[`../screens/html/${name}.html`]
  if (!html) return undefined
  const [h] = await Promise.all([html(), CSS[`../screens/css/${name}.css`]?.()])
  return h
}

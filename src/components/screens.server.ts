/* The app screens' HTML for the prerender (scripts/prerender.mjs aliases ./screens to this file in its server build):
   every screen is at hand while rendering, so each page's HTML carries its screens. The page's head links each screen's
   CSS (the prerender reads them off the data-screen attribute AppScreen writes). */

const HTML = import.meta.glob<string>('../screens/html/*.html', { query: '?raw', import: 'default', eager: true })

export function hasScreen(name: string): boolean {
  return `../screens/html/${name}.html` in HTML
}

export function screenHtmlNow(name: string): string | undefined {
  return HTML[`../screens/html/${name}.html`]
}

export async function loadScreen(name: string): Promise<string | undefined> {
  return screenHtmlNow(name)
}

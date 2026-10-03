import { withId } from './partnerFiles'

/* The SVG marks' drawings, in the browser (components/PartnerMark). Inline, so they take the text colour.
   Every prerendered page already carries the marks it shows, and React keeps them as it hydrates (as it keeps the app
   screens, components/screens.ts), so the bundle never carries the drawings: a mark is fetched only when a page that
   shows it is reached client side. The prerender swaps this module for partnerMarks.server.ts. */

const SVG = import.meta.glob<string>('../assets/partners/*.svg', { query: '?raw', import: 'default' })

/* A mark's drawing while rendering: only the server has it. In the browser the prerendered drawing is already in place. */
export function markSvgNow(file: string, id: string): string | undefined {
  void file
  void id
  return undefined
}

export async function loadMarkSvg(file: string, id: string): Promise<string | undefined> {
  const raw = await SVG[`../assets/partners/${file}`]?.()
  return raw === undefined ? undefined : withId(raw, id)
}

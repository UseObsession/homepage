import { withId } from './partnerFiles'

/* The SVG marks' drawings for the prerender (scripts/prerender.mjs aliases ./partnerMarks to this file in its server
   build): every drawing is at hand while rendering, so each page's HTML carries its marks. */

const SVG = import.meta.glob<string>('../assets/partners/*.svg', { query: '?raw', import: 'default', eager: true })

export function markSvgNow(file: string, id: string): string | undefined {
  const raw = SVG[`../assets/partners/${file}`]
  return raw === undefined ? undefined : withId(raw, id)
}

export async function loadMarkSvg(file: string, id: string): Promise<string | undefined> {
  return markSvgNow(file, id)
}

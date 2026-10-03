import { partners, type PartnerId } from '../content/partners'

/* The partner marks' files (scripts/sync-partners.mjs writes them to src/assets/partners; components/PartnerMark draws
   them): which exist, their shape, and the raster ones' URLs. The SVG drawings themselves come from ./partnerMarks. */

type Mark = { file: string; type: 'svg' | 'mask'; ratio: number }
/* manifest.json: which marks exist and their shape (width over height). Read through a glob, so a missing manifest
   only means no marks. */
const MANIFEST = import.meta.glob<{ marks: Record<string, Mark> }>('../assets/partners/manifest.json', { eager: true, import: 'default' })
export const marks: Record<string, Mark> = Object.values(MANIFEST)[0]?.marks ?? {}

/* Raster marks (only where no SVG exists yet) are a CSS mask over the text colour: just their URL. */
const URLS = import.meta.glob<string>('../assets/partners/*.png', { query: '?url', import: 'default', eager: true })
export function markUrl(file: string): string | undefined {
  return URLS[`../assets/partners/${file}`]
}

/* Whether a tool can be drawn: listed in content/partners.ts, and its file synced (the webhook is the system's own
   glyph). */
export function hasPartner(id: PartnerId): boolean {
  return Boolean(partners[id]) && (id === 'webhook' || Boolean(marks[id]))
}

/* A drawing made ready for the page: its own mask id (2 copies of a mark on 1 page must not share 1), hidden from
   assistive tech (the mark's wrapper carries its name). */
export const withId = (svg: string, id: string) =>
  svg.replaceAll('__PMID__', 'pm-' + id.replace(/[^\w-]/g, '')).replace('<svg ', '<svg aria-hidden="true" focusable="false" ')

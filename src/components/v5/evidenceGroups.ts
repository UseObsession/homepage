import type { ExCompany, ExEvent } from '../../content/types'

/* How Evidence groups the events in view: by how each kind is drawn (components/v5/Evidence). */
const FAMILY: Record<string, string> = {
  Page: 'screens',
  Email: 'mail',
  Text: 'thread',
  Push: 'device',
  'In-app': 'device',
  Ad: 'ads',
  Chat: 'chat',
  Call: 'calls',
  'No answer': 'calls',
}
const ORDER = ['screens', 'mail', 'thread', 'device', 'ads', 'chat', 'calls', 'docs']

export const evKey = (e: ExEvent) => e.at + e.text
export const familyOf = (e: ExEvent) => FAMILY[e.kind] ?? 'docs'

/* A kind's name for a company that has no kind chips yet (one just watched). */
const NAMES: Record<string, string> = { Page: 'Screens', Email: 'Emails', Text: 'Texts', Push: 'Push', 'In-app': 'In-app', Ad: 'Ads', Chat: 'Chat', Call: 'Calls' }

export type EvGroup = { id: string; events: ExEvent[] }

/* The kinds in view, in the order a customer meets them, each with its events. Acts have no evidence. */
export function evidenceGroups(events: ExEvent[]): EvGroup[] {
  return ORDER.map((id) => ({ id, events: events.filter((e) => e.evidence && familyOf(e) === id) })).filter((g) => g.events.length)
}

/* A group's name from the company's own kind labels: "Screens", "Push and in-app", "Receipts, statements and parcels". */
export function groupLabel(g: EvGroup, co: ExCompany) {
  const at = (k: string) => {
    const i = co.kinds.findIndex((d) => d.kind === k)
    return i < 0 ? co.kinds.length : i
  }
  const kinds = [...new Set(g.events.map((e) => e.kind))].sort((a, b) => at(a) - at(b))
  const labels = kinds.map((k) => co.kinds.find((d) => d.kind === k)?.label ?? NAMES[k] ?? k)
  const words = labels.map((l, i) => (i && l !== l.toUpperCase() ? l.toLowerCase() : l))
  return words.length > 1 ? `${words.slice(0, -1).join(', ')} and ${words[words.length - 1]}` : words[0]
}

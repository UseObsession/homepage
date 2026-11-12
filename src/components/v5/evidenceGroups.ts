import type { ExEvent } from '../../content/types'

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

export type EvGroup = { id: string; events: ExEvent[] }

/* The kinds in view, in the order a customer meets them, each with its events. Acts have no evidence. */
export function evidenceGroups(events: ExEvent[]): EvGroup[] {
  return ORDER.map((id) => ({ id, events: events.filter((e) => e.evidence && familyOf(e) === id) })).filter((g) => g.events.length)
}


import { useSyncExternalStore } from 'react'
import { catalog } from '../content/catalog'
import { piecePaths } from '../content/piecePaths'
import type { PieceId } from '../content/prices'
import { OTHER_DEST, OTHER_TOOL, doors, pieces, type DoorId } from '../content/setup'
import { track } from './analytics'
import { companyFromEmail, siteFromEmail } from './join'
import { beaconSnapshot, hasUnsent, hostOf, isAddress, queueSnapshot, retrySnapshot, saveStatus } from './waitlist'

/* The site's sign up after the email (components/CaptureForm sends the email; components/SetupCard asks the rest). 1 sign
   up per visit, kept in this browser for 23 hours so a reload or another page opens it where they left it. Each finished
   step sends the whole sign up so far under its sign up ID (lib/waitlist queueSnapshot). When the page closes or is
   hidden, anything unsent leaves by beacon, and so does anything typed since the last step, so a name typed and never
   Finished still reaches the sheet. Steps: door (how they'll use Obsession), need (what they need first, by door), about
   (name, company, website and team size), done. */

export type SetupStep = 'door' | 'need' | 'about' | 'done'
export const STEPS: SetupStep[] = ['door', 'need', 'about']

export type SetupState = {
  v: 2
  sid: string
  email: string
  t: number
  preview: boolean
  script: number
  page: string
  source: string
  interest?: string
  arrivedFrom?: string
  step: SetupStep
  door: DoorId | ''
  pieces: PieceId[]
  blueprints: string[]
  dest: string[]
  tools: string[]
  use: string
  /* What "Something else" (tools) and "Somewhere else" (results) mean, typed by the reader. Optional: older saved
     sign ups don't have them. */
  toolOther?: string
  destOther?: string
  name: string
  company: string
  site: string
  size: string
}

export type SetupStart = Pick<SetupState, 'sid' | 'email' | 't' | 'preview' | 'script' | 'page' | 'source' | 'interest' | 'arrivedFrom'>
export type SetupPatch = Partial<Pick<SetupState, 'door' | 'pieces' | 'blueprints' | 'dest' | 'tools' | 'use' | 'toolOther' | 'destOther' | 'name' | 'company' | 'site' | 'size'>>

const KEY = 'obs-setup'
const KEEP_MS = 23 * 60 * 60 * 1000

/* ---- What the page suggests ---- */

const pieceAt = (path: string) => (Object.entries(piecePaths).find(([, p]) => path === p || path.startsWith(`${p}/`))?.[0] as PieceId | undefined) ?? undefined
const blueprintOf = (interest?: string) => (catalog.recipes.some((r) => r.id === interest) ? interest : undefined)

/* The starting answer: developers and the piece pages build with the API; a blueprint or a type of blueprint runs one;
   everywhere else they choose. */
export function doorOf(path: string, interest?: string): DoorId | '' {
  if (path.startsWith('/developers') || pieceAt(path)) return 'build'
  if (blueprintOf(interest) || path.startsWith('/blueprints')) return 'blueprint'
  return ''
}

/* ---- The store ---- */

export type SaveState = 'idle' | 'saving' | 'failed'
let state: SetupState | null = null
let loaded = false
let leaving = false
/* Typed since the last snapshot went out: sent when the page closes or is hidden. */
let typed = false
const listeners = new Set<() => void>()

function load() {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return
    const s = JSON.parse(raw) as SetupState
    if (s?.v === 2 && Date.now() - s.t < KEEP_MS && s.email && s.sid) {
      state = s
      watchLeaving()
    } else localStorage.removeItem(KEY)
  } catch {
    /* Storage blocked or unreadable: a fresh sign up. */
  }
}
function set(next: SetupState | null) {
  state = next
  try {
    if (state) localStorage.setItem(KEY, JSON.stringify(state))
    else localStorage.removeItem(KEY)
  } catch {
    /* The sign up still works for this page. */
  }
  listeners.forEach((l) => l())
}
function watchLeaving() {
  if (leaving || typeof window === 'undefined') return
  leaving = true
  window.addEventListener('pagehide', leaveNow)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') leaveNow()
  })
}

/* The page is closing or hidden: the whole sign up so far leaves by beacon if a snapshot is unsent or the reader has
   typed since the last one. Exported for the tests. */
export function leaveNow() {
  if (!state || state.preview || !(typed || hasUnsent())) return false
  const sent = beaconSnapshot(snapshotOf(state))
  if (sent) typed = false
  return sent
}

export const setupStore = {
  get: () => {
    load()
    return state
  },
  subscribe: (l: () => void) => {
    listeners.add(l)
    return () => {
      listeners.delete(l)
    }
  },
  save: saveStatus,
  retry: retrySnapshot,
}

export function begin(s: SetupStart) {
  const piece = pieceAt(s.page)
  const bp = blueprintOf(s.interest)
  set({
    ...s,
    v: 2,
    step: 'door',
    door: doorOf(s.page, s.interest),
    pieces: piece ? [piece] : [],
    blueprints: bp ? [bp] : [],
    dest: [],
    tools: [],
    use: '',
    toolOther: '',
    destOther: '',
    name: '',
    company: companyFromEmail(s.email),
    site: siteFromEmail(s.email),
    size: '',
  })
  watchLeaving()
}

/* Typing: kept, sent with the next step, or by beacon if the page closes first (leaveNow). */
export function patch(p: SetupPatch) {
  if (!state) return
  typed = true
  set({ ...state, ...p })
}

/* A step finished (or Back): the whole sign up so far goes out. */
export function go(step: SetupStep) {
  if (!state) return
  const finishing = step === 'done' && state.step !== 'done'
  set({ ...state, step })
  typed = false
  if (!state.preview) queueSnapshot(snapshotOf(state))
  if (finishing) track('sign_up', { method: 'setup', offer: state.door || 'none' })
}

export const useSetup = () => useSyncExternalStore(setupStore.subscribe, setupStore.get, () => null)
export const useSave = () => useSyncExternalStore(setupStore.save.subscribe, setupStore.save.get, () => 'idle' as const)

/* ---- What the sheet gets: the existing columns (waitlist/Code.js), so the script needs no change ---- */

/* "Step reached": 1 Email, 2 the door, 3 what they need, 9 Done. */
const STEP_NO: Record<SetupStep, number> = { door: 1, need: 2, about: 3, done: 9 }

export const blueprintNames = (ids: string[]) => ids.map((id) => catalog.recipes.find((r) => r.id === id)?.name ?? id)
export const pieceNames = (ids: PieceId[]) => ids.map((id) => pieces.find((p) => p.id === id)?.name ?? id)

/* "Something else" with what the reader typed: for the sheet "Something else (Lindy)", for the thank you "Lindy". */
const named = (list: string[], other: string, typedText: string | undefined, sheet: boolean) => {
  const t = (typedText ?? '').trim()
  return list.map((x) => (x === other && t ? (sheet ? `${x} (${t})` : t) : x))
}
export const toolNames = (s: SetupState, sheet = false) => named(s.tools, OTHER_TOOL, s.toolOther, sheet)
export const destNames = (s: SetupState, sheet = false) => named(s.dest, OTHER_DEST, s.destOther, sheet)

/* What they picked at the step that matters for their door, as names. */
export function picksOf(s: SetupState): string[] {
  if (s.door === 'build') return pieceNames(s.pieces)
  if (s.door === 'blueprint') return blueprintNames(s.blueprints)
  if (s.door === 'connect') return toolNames(s)
  return []
}

export function snapshotOf(s: SetupState): Record<string, string> {
  const site = s.site.trim() ? (isAddress(s.site) ? hostOf(s.site) : s.site.trim()) : ''
  const door = doors.find((d) => d.id === s.door)
  const base: Record<string, string> = {
    sid: s.sid,
    email: s.email,
    step: String(STEP_NO[s.step]),
    source: s.source,
    page: s.page,
    reader: door?.sheet ?? '',
    name: s.name.trim(),
    company: s.company.trim(),
  }
  if (s.interest) base.interest = s.interest
  if (s.arrivedFrom) base.arrived_from = s.arrivedFrom
  const size = s.size ? `Team size: ${s.size}` : ''
  const blueprints = s.door === 'blueprint' ? blueprintNames(s.blueprints).join(', ') : ''
  const startWith = s.door === 'build' ? pieceNames(s.pieces).join(', ') : s.door === 'connect' ? toolNames(s, true).join(', ') : ''
  const dest = s.door === 'blueprint' ? destNames(s, true).join(', ') : ''
  if (s.script >= 3) {
    return { ...base, site, offer: s.door || 'none', recipes: blueprints, results: dest, start_with: startWith, use_case: s.use.trim(), job_detail: size }
  }
  /* Version 2: the columns it has. */
  const detail = [site && `Website: ${site}`, size, startWith && `Start with: ${startWith}`, dest && `Results to: ${dest}`].filter(Boolean).join('; ')
  return { ...base, job_detail: detail, first_job: blueprints, note: s.use.trim() }
}

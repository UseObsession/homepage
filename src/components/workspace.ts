/* Whose workspace an app screen shows (components/AppScreen, the hero console's crumb).

   The screens drawn for an agency ("Your agency", a Clients list, your-agency.example links). The browser never loads a
   screen's HTML to ask, so the list lives here, and the prerender fails the build if a screen that says "Your agency"
   is missing from it (scripts/prerender.mjs). The rest are drawn for a company. */
export const AGENCY_SCREENS: ReadonlySet<string> = new Set([
  'agencytask',
  'approve',
  'board',
  'brandwatch',
  'callcheck',
  'claycols',
  'handover',
  'kit',
  'pack',
  'proofmail',
  'report',
  'run',
  'templates',
  'upsells',
])

export type Workspace = 'agency' | 'company'

export const drawnFor = (screen: string): Workspace => (AGENCY_SCREENS.has(screen) ? 'agency' : 'company')

/* The shared How screens (templates, kit, run) are drawn for an agency. 'company' shows the same screen as the reader's
   own company. Founders, Sales, Marketing and Developers pass 'company' on their How steps; Home and Agencies keep the
   default. A screen drawn for an agency says these words, and a company's workspace says the others
   (src/screens/NAME.tsx: ws.org, ws.lists, ws.domain). */
const WORDS = {
  agency: { org: 'Your agency', lists: 'Clients', domain: 'your-agency.example' },
  company: { org: 'Your company', lists: 'Lists', domain: 'your-company.example' },
} as const

export const wordsFor = (workspace: Workspace) => WORDS[workspace]

/* What an app screen's component takes (src/screens/registry.ts). Only the screens drawn for an agency read it. */
export type ScreenProps = { workspace?: Workspace }

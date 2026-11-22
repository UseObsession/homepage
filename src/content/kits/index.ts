import { kitLinks, kitsPath, type KitId } from '../kitPaths'
import type { Faq, Final, Meta } from '../types'
import { build } from './build'
import { portals } from './portals'
import { talk } from './talk'
import { test } from './test'
import { train } from './train'
import type { KitPage } from './types'
import { watch } from './watch'

/* Every kit's own page (22 Nov 2026), in kitLinks' order, and the hub (/kits). pages/Kit.tsx draws a kit, pages/Kits.tsx
   the hub; App.tsx routes them and meta.ts, the sitemap and llms.txt read `kits` and `kitsHub` for each head. */
export type { KitPage } from './types'

const byId: Record<KitId, KitPage> = { talk, test, build, portals, watch, train }

export const kits: KitPage[] = kitLinks.map((k) => byId[k.id])

export const kitAt = (path: string): KitPage | undefined => kits.find((k) => k.meta.path === path)

/* The words every kit page shares. */
export const kitUi = {
  pill: 'Kit',
  primary: { label: 'Start free', to: '#join' },
  blueprints: { label: 'See the blueprints', to: '#blueprints' },
  code: { label: 'See the code', to: '#code' },
  log: 'Event log',
  company: 'Your company',
  search: 'Search events',
  events: 'events',
  delivered: 'delivered',
  miss: 'a miss found',
  example: 'Example',
  real: 'Real run',
  prices: 'What it costs',
  allPrices: { label: 'Every rate', to: '/pricing/rates' },
  billed: 'A blueprint is billed on the pieces it uses.',
  priceHeading: 'Priced per piece, on one bill.',
  priceLine: 'Start free, then pay for what runs, at list rates.',
  api: { label: 'The API and MCP', to: '/developers' },
  browse: { label: 'Browse all blueprints', to: '/blueprints' },
  watch: 'They watch',
  others: 'The other kits',
}

export type KitsHub = {
  meta: Meta
  hero: { headline: string; sub: string }
  orbit: { label: string; caption: string }
  door: { line: string; cta: { label: string; to: string } }
  examples: { heading: string; line: string; cta: { label: string; to: string } }
  faq: Faq
  final: Final
}

const hubSub =
  'Obsession kits group the toolkit by the job an AI agent does: the pieces and blueprints that job needs, on one API and one bill.'

export const kitsHub: KitsHub = {
  meta: {
    path: kitsPath,
    title: 'AI agent kits: the pieces and blueprints for each job',
    description:
      'Kits for the jobs AI agents do: talk to customers, test your sign-up, build agent products, work behind logins, watch the market, and train agents.',
    answer: `${hubSub} Start with the kit for your job, and add any piece later, on the same key.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Kits', path: kitsPath },
    ],
  },
  hero: {
    headline: 'Kits: the toolkit, sorted by the job your agent does.',
    sub: hubSub,
  },
  orbit: {
    label: 'Obsession in the middle, its five pieces around it, and the six kits on the outer ring, each drawing on the pieces its job needs.',
    caption: 'Five pieces on one API, sorted into six kits.',
  },
  door: {
    line: 'Not building agents? Pick a blueprint, and Obsession runs it.',
    cta: { label: 'Browse blueprints', to: '/blueprints' },
  },
  examples: {
    heading: 'See a kit at work.',
    line: 'Worked examples for stores, agencies, banks, software companies and compliance teams.',
    cta: { label: 'Every use case', to: '/use-cases' },
  },
  faq: {
    heading: 'Before you pick a kit.',
    items: [
      { q: 'Is a kit a separate product?', a: 'No. A kit is the part of the toolkit one job uses. Every piece stays on the same key and bill, and you pay only for what runs.' },
      { q: 'Can I use pieces from more than one kit?', a: 'Yes. Any persona can hold any piece, so an agent that talks to customers can also work behind a login.' },
      { q: 'Do I need to write code?', a: 'Not for blueprints. Pick one, say where results go, and Obsession runs it. Developers use the API, SDKs or MCP.' },
    ],
  },
  final: {
    heading: 'Start with the job your agent does first.',
    capture: { kind: 'waitlist', source: 'kits-hub', button: 'Start free', interest: 'any' },
  },
}

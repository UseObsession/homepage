import { kitLinks, type KitId } from '../kitPaths'
import { build } from './build'
import { buy } from './buy'
import { portals } from './portals'
import { talk } from './talk'
import { test } from './test'
import { train } from './train'
import type { KitPage } from './types'
import { watch } from './watch'

/* Every type of blueprint's own page (22 Nov 2026), in kitLinks' order. pages/Kit.tsx draws one; the blueprints hub
   (pages/Recipes.tsx) groups every blueprint by type; App.tsx routes them and meta.ts, the sitemap and llms.txt read `kits`. */
export type { KitPage } from './types'

const byId: Record<KitId, KitPage> = { talk, test, build, portals, watch, train, buy }

export const kits: KitPage[] = kitLinks.map((k) => byId[k.id])

export const kitAt = (path: string): KitPage | undefined => kits.find((k) => k.meta.path === path)

/* The words every kit page shares. */
export const kitUi = {
  pill: 'Blueprints',
  primary: { label: 'Start free', to: '#join' },
  blueprints: { label: 'See the blueprints', to: '#blueprints' },
  code: { label: 'See the code', to: '#code' },
  log: 'Event log',
  company: 'Your company',
  search: 'Search events',
  events: 'events',
  delivered: 'delivered',
  miss: 'a miss found',
  replay: 'Replay',
  example: 'Example',
  real: 'Real run',
  prices: 'What it costs',
  allPrices: { label: 'Every rate', to: '/pricing/rates' },
  billed: 'A blueprint is billed on the pieces it uses.',
  priceHeading: 'Priced per piece, on one bill.',
  priceLine: 'Start free, then pay for what runs, at list rates.',
  api: { label: 'See the API and MCP', to: '/developers' },
  browse: { label: 'Browse blueprints', to: '/blueprints' },
  watch: 'They watch',
  others: 'Other types of blueprints',
}

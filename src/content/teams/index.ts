import { team as agencies } from './agencies'
import { team as banks } from './banks'
import { team as compliance } from './compliance'
import { team as founders } from './founders'
import { team as marketing } from './marketing'
import { team as sales } from './sales'
import { team as software } from './software'
import { team as stores } from './stores'
import { team as support } from './support'
import { cases } from './cases'
import type { TeamPage } from './types'

/* Every team's page (22 Nov 2026), in the nav's Teams order (content/nav.ts), and the words they share. pages/Team.tsx
   draws them; App.tsx routes each `meta.path` to it, and meta.ts, the sitemap and llms.txt read `teams`. */
export type { TeamPage } from './types'

export const teams: TeamPage[] = [founders, sales, marketing, support, agencies, stores, software, banks, compliance]

export { cases }

export const teamPaths = new Set([...teams, ...cases].map((t) => t.meta.path))

export const teamAt = (path: string): TeamPage | undefined => [...teams, ...cases].find((t) => t.meta.path === path)

export const teamUi = {
  second: { label: 'Browse blueprints', to: '/blueprints' },
}

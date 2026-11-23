import type { KitPage } from '../kits/types'
import type { KitId } from '../kitPaths'
import type { PieceId, PriceKey } from '../prices'
import type { Faq, Final, Meta } from '../types'

/* The words of a team's page (22 Nov 2026: /sales, /marketing, /verify, /agencies and the 4 industry pages the nav's Teams
   column links), drawn by pages/Team.tsx in James's piece-page shape: the hero with the team's scene (a product window,
   components/kit/KitScene) > the team's use cases, each tagged with its kit and the blueprint or pieces that run it > the
   blueprints for the team > prices from content/prices.ts > who in the team uses it, in their own measures, with worked
   examples > questions > the form (#join). The use cases come from the Product Marketing book's six jobs (22 Nov). */

/* A team (the nav's Teams column) or, since 22 Nov, a use case page in the same template (content/teams/cases). */
export type TeamId = string

/* 1 use case: what the team gets done, in their words, the kit it belongs to, and what runs it: a blueprint (by slug,
   content/recipes) for teams who don't code, and the pieces it uses. */
export type TeamUse = { kit: KitId; name: string; line: string; blueprint?: string; pieces: PieceId[] }

/* One size of the same work (23 Nov 2026, Seun: "show range ... show scale and variations"): who runs it at that size,
   how many agents with what identity, the jobs it runs, and its month's usage. The page works out the cost from
   prices.ts (law 4: no price typed into copy) and the cheapest plan that carries it. Model tokens are left out and said
   so. Usage keys are price keys: `register` counts texting campaigns, `personaVoice` the minutes a persona speaks. */
export type TeamSize = {
  label: string
  agents: string
  jobs: string[]
  usage: Partial<Record<PriceKey, number>>
}

/* The checks a team runs today, set above its use cases (23 Nov 2026, Seun: "put mystery shopping, CRO and ads into the
   agencies use case as type of blueprints they can run ... also competitor ... link them to the sample output and the
   lookup since that we can do now"): each check with its type of blueprint, one line, a real finding where there is one,
   and the blueprints that run it; under them, what a reader can open today. */
export type TeamCheck = { kit: KitId; name: string; line: string; finding?: string; links: { label: string; to: string }[] }
export type TeamChecks = { heading: string; line: string; items: TeamCheck[]; see: { label: string; to: string }[] }

export type TeamPage = {
  id: TeamId
  /* 'case' for a use case page (one job in one industry); a team page otherwise. */
  kind?: 'case'
  /* The team as the nav names it. */
  name: string
  meta: Meta
  hero: { pill: string; headline: string; sub: string }
  scene: KitPage['scene']
  /* The checks run today, above the use cases; optional. */
  checks?: TeamChecks
  uses: { heading: string; line: string; items: TeamUse[] }
  /* The same work at three sizes, from one location to an enterprise; optional. */
  sizes?: { heading: string; line: string; items: TeamSize[] }
  blueprints: { heading: string; line: string; slugs: string[] }
  /* The price rows shown, from prices.ts. */
  prices: PriceKey[]
  who: KitPage['who']
  examples?: KitPage['examples']
  faq: Faq
  final: Final
}

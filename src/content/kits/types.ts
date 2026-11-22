import type { KitId } from '../kitPaths'
import type { PieceId, PriceKey } from '../prices'
import type { Faq, Final, Meta, PersonaIcon } from '../types'

/* The words of a kit's own page (/blueprints/SLUG, 22 Nov 2026), drawn by pages/Kit.tsx in this order: the hero (the job, in
   1 line, and 2 sentences) > the scene (4 steps and 1 agent's event log, components/kit/KitScene) > the pieces in the kit
   with their prices from prices.ts > the blueprints in it, or the code where a job is built rather than picked > who
   uses it, each in their own measures > worked examples > questions > the form. `meta.answer` opens with the hero's sub. */

/* 1 step of the scene: what happens, as a reader pictures it. */
export type KitStep = { icon: PersonaIcon; label: string }

/* 1 row of the scene's event log. `tone` marks the row the scene is about: ok for a pass, fail for what never came. */
export type KitRow = { at: string; kind: string; text: string; tone?: 'ok' | 'fail' }

export type KitPage = {
  id: KitId
  name: string
  meta: Meta
  hero: { headline: string; sub: string }
  scene: { steps: KitStep[]; who: string; note: string; fleet: string; rows: KitRow[]; caption: string; real?: boolean }
  /* The pieces this job uses, each with what it does here. Names and addresses come from the piece pages. */
  pieces: { heading: string; line: string; items: { piece: PieceId; line: string }[]; prices: PriceKey[] }
  /* The blueprints in this kit, by slug (content/recipes): names and lines come from each blueprint's own file. */
  blueprints?: { heading: string; line: string; slugs: string[] }
  /* Where a job is built rather than picked: the call that starts it. */
  code?: { heading: string; line: string; label: string; code: string }
  /* Who uses it: the role, what lands in their hands, and the measures they watch it in (persona-kpis). */
  who: { heading: string; items: { role: string; gets: string; watch: string }[] }
  /* Worked examples already on the site, by address. */
  examples?: { heading: string; paths: string[] }
  faq: Faq
  final: Final
}

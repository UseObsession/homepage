import type { Cta } from './types'

/* The words every recipe page shares (pages/RecipePage), around each recipe's own content (src/content/recipes).
   A recipe file carries its hero, kit, run, steps, checks, outputs, settings, who it's for, table, questions and final
   call; these are the claims that head the sections a recipe file gives no heading for, and the chrome around them.
   Copy rules: docs/REBUILD.md, "Copy". Headings make a claim and hold for all 15 recipes: never a recipe count, and
   nothing that says a run was signed (the 1 real run, Mystery shopper's September store check, claims no signature). */

export const recipePage = {
  /* The hero's pill, as on every page's hero. The way back (Home / Recipes / this recipe) is the breadcrumb above it. */
  pill: 'Early access',

  /* What choosing the recipe sets up: its `kit`, landing 1 by 1. */
  kit: {
    heading: 'Pick it, and everything it needs is already set up.',
    line: 'Nothing to build or buy, and nothing to run yourself.',
    list: 'What this recipe sets up',
    status: { setup: 'Setting up', ready: 'Ready', of: (n: number, all: number) => `${n} of ${all}` },
  },

  /* The run, played in the console. Its line is the recipe's `gets`; its label the run's own name. */
  run: {
    heading: 'It runs by itself, and keeps the proof.',
    /* The console's tag: every run is an example except the September store check. */
    tag: { example: 'Example', real: 'Real run' },
  },

  steps: { heading: 'The agents do the legwork. You make the calls.' },
  checks: { heading: 'It covers the whole job, and stops where it should.' },
  /* Every recipe page links to the 1 real report. */
  outputs: { cta: { label: 'See a real report', to: '/sample-output' } satisfies Cta },
  settings: { heading: 'Start from the recipe. Change anything.' },
  forWho: { heading: 'The same recipe, different jobs.' },
}

/* Whether a run is the real September store check rather than an example (content/recipes/mystery-shopper.ts). */
export const isRealRun = (tab: string) => /^real run\b/i.test(tab)

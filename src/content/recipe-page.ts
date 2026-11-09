import type { Cta } from './types'

/* The words every recipe page shares (pages/RecipePage), around each recipe's own content (src/content/recipes).
   Since 9 Nov a recipe is a ready-made collection: what it collects, from which companies, as which customer profile,
   how often, and where the facts land. These are the headings a recipe file gives no heading for, and they hold for
   every recipe. The 1 real record is Brand G's (Store sign-up and checkout, /sample-output); every other run is an
   example. Never "AI customer", never a recipe count, never a claim that a run was signed. */

export const recipePage = {
  /* The hero's pill, as on every page's hero. The way back (Home / Recipes / this recipe) is the breadcrumb above it. */
  pill: 'Early access',

  /* What the collection uses: its `kit`, landing 1 by 1. */
  kit: {
    heading: 'A ready-made collection. Nothing to set up.',
    line: 'Name the companies. The accounts, inboxes and schedule come with it.',
    list: 'What this collection uses',
    status: { setup: 'Setting up', ready: 'Ready', of: (n: number, all: number) => `${n} of ${all}` },
  },

  /* The run, played in the console. Its line is the recipe's `gets`; its label the run's own name. */
  run: {
    heading: 'Every fact lands dated, with its receipt.',
    /* The console's tag, on the 1 real run only: Brand G, September 2026. */
    tag: { real: 'Real run' },
  },

  steps: { heading: 'You name the companies and the profile. The facts keep arriving.' },
  checks: { heading: 'What it collects, and where it stops.' },
  /* Every recipe page links to the 1 real record, Brand G's, by what it is. The label matches Home's. */
  outputs: { cta: { label: 'See the sample data', to: '/sample-output' } satisfies Cta },
  settings: { heading: 'Start from the recipe. Change anything.' },
  forWho: { heading: 'The same data, different jobs.' },
}

/* Whether a run is the real September record rather than an example (content/recipes/mystery-shopper.ts). */
export const isRealRun = (tab: string) => /^real run\b/i.test(tab)

import type { Cta } from './types'

/* The words every recipe page shares (pages/RecipePage), around each recipe's own content (src/content/recipes).
   Since 20 Nov (the persona rewrite) a recipe is a job personas already know how to do: who the persona is, where it
   goes, how often, and where the event log lands. These are the headings a recipe file gives no heading for, and they hold for
   every recipe. The 1 real event log is Brand G's (Store sign-up and checkout, /sample-output); every other run is an
   example. Never "AI customer", never a recipe count, never a claim that a run was signed. */

export const recipePage = {
  /* The hero's pill, as on every page's hero. The way back (Home / Recipes / this recipe) is the breadcrumb above it. */
  pill: 'Early access',

  /* What the recipe spins up: its `kit`, landing 1 by 1. */
  kit: {
    heading: 'A job personas already know. Nothing to set up.',
    line: 'Say where they go. Each persona arrives with its name, inbox, number and schedule.',
    list: 'What this recipe sets up',
    status: { setup: 'Setting up', ready: 'Ready', of: (n: number, all: number) => `${n} of ${all}` },
  },

  /* The run, played in the console. Its line is the recipe's `gets`; its label the run's own name. */
  run: {
    heading: 'Everything that comes back lands dated, with its screenshot.',
    /* The console's tag, on the 1 real run only: Brand G, September 2026. */
    tag: { real: 'Real run' },
  },

  steps: { heading: 'You say who the persona is and where it goes. The event log keeps growing.' },
  checks: { heading: 'What the personas do, and what they bring back.' },
  /* Every recipe page links to the 1 real event log, Brand G's, by what it is. The label matches Home's. */
  outputs: { cta: { label: 'See the sample data', to: '/sample-output' } satisfies Cta },
  settings: { heading: 'Start from the recipe. Change anything.' },
  forWho: { heading: 'The same recipe, different teams.' },
}

/* Whether a run is the real September event log rather than an example (content/recipes/mystery-shopper.ts). */
export const isRealRun = (tab: string) => /^real run\b/i.test(tab)

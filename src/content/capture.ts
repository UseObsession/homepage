/* The capture form's own words (components/CaptureForm). Each page's Capture (content/types) sets its button, source,
   placeholder, micro line and roles question; everything here is shared by every form. */
import { ctaFor, recipeAt } from './nav'
import type { Capture } from './types'

export const capture = {
  email: { label: 'Work email', placeholder: 'Your work email' },
  store: {
    label: 'Your store’s web address',
    prefix: 'https://',
    placeholder: 'your-store.example',
    /* Step 2 of the free mystery shop: the email opens under the store. */
    next: 'Where should we send the report?',
  },
  errors: {
    emailEmpty: 'Enter your work email.',
    emailBad: 'That doesn’t look like an email address. Check for a typo.',
    storeEmpty: 'Enter your store’s web address.',
    storeBad: 'That doesn’t look like a web address. Check for a typo.',
    server: 'That didn’t go through. Try again in a moment.',
    limited: 'Too many tries from this email. Try again in an hour.',
  },
  sending: 'Sending',
  privacy: {
    waitlist: 'We keep your email to tell you about Obsession, and nothing else.',
    mystery: 'We keep your email and store address to run your shop and tell you about Obsession, and nothing else.',
    link: 'Privacy notice',
    to: '/privacy',
  },
  done: {
    waitlist: { title: 'You’re on the list.', line: 'We’ll email you to set up your first run.' },
    /* {store} is the address without https:// */
    mystery: {
      title: 'Got it. We’ll shop {store}.',
      line: 'First we confirm it’s your store, or that you have the owner’s OK. The report comes to {email}.',
    },
  },
  /* After a sign up, 1 tap tells us what to set it up for. A page can ask its own question instead (Capture.roles). */
  roles: {
    question: 'What do you do?',
    options: ['Agency', 'Founder', 'Sales or CS', 'Marketing', 'Developer', 'Other'],
    thanks: 'Thanks. It’s saved with your sign up.',
    failed: 'That didn’t save. Tap it again.',
  },
  /* Shown only when VITE_WAITLIST_URL is unset (local builds): nothing leaves the browser. */
  preview: 'Preview: nothing was sent.',
}

/* A waitlist capture for pages that haven't written their own yet. */
export function waitlistCapture(source: string, overrides: Partial<Capture> = {}): Capture {
  return { kind: 'waitlist', source, button: 'Join the waitlist', ...overrides }
}

/* The free mystery shop: a store the reader runs, or a client's with their OK. */
export function mysteryCapture(source: string, overrides: Partial<Capture> = {}): Capture {
  return {
    kind: 'mystery',
    source,
    button: 'Get my free report',
    micro: 'A store you run, or a client’s with their OK. 4 test customers, 48 hours, a report within 4 days.',
    interest: 'mystery',
    ...overrides,
  }
}

/* The capture a page gets until its own content sets one (docs/REBUILD.md, "Calls to action"): the free mystery shop on
   Sample output and the Mystery shopper recipe, the waitlist everywhere else, labelled with the page's call to action
   and, on a recipe page, with that recipe as the interest. */
export function captureFor(path: string, source: string): Capture {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  const recipe = recipeAt(clean)
  const cta = ctaFor(clean)
  if (clean === '/sample-output') return mysteryCapture(source, { button: cta.label })
  if (recipe?.id === 'mystery') return mysteryCapture(source)
  return waitlistCapture(source, { button: cta.label, ...(recipe ? { interest: recipe.id } : {}) })
}

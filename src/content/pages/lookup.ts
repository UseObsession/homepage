import { CONTACT_EMAIL } from '../site'
import type { Meta } from '../types'

/* /lookup: a brand types its own store's domain and sees what our test shoppers recorded there in September and
   October 2026 (pages/Lookup.tsx). One exact domain in, at most one store card out: no list, no browsing, no page per
   brand, and the page is noindex (scripts/prerender.mjs writes it like the 404 page, outside the sitemap and llms.txt).
   The card comes from the Edge Function store-lookup in the obsession-index Supabase project (lib/lookup.ts), which
   records every lookup. A store we haven't visited gets a plain line and a form for an email, saved by the same
   function, never the waitlist sheet. This file is the page's words only; registry.ts keeps it out of the Page glob. */

export type LookupJourney = 'welcome' | 'browse' | 'cart' | 'checkout'

export type LookupPage = {
  meta: Meta
  headline: string
  sub: string
  form: { label: string; placeholder: string; button: string; busy: string; help: string }
  errors: { domain: string; check: string; limit: string; server: string; email: string }
  found: {
    visited: string
    mailUntil: string
    journeys: Record<LookupJourney, string>
    firstAfter: string
    emails: (n: number) => string
    none: (hours: number) => string
    usesName: string
    left: string
    view: string
    faultsHeading: string
    noFaults: string
    faults: { blank_name: string; placeholder: string }
    rhythmHeading: string
    rhythm: (sends: number, from: string, to: string, perWeek: number) => string
    weekday: (day: string) => string
    languages: (list: string) => string
    latest: string
    scope: string
  }
  viewer: { close: string; note: string; loading: string; failed: string }
  missing: { headline: (domain: string) => string; line: string; label: string; placeholder: string; button: string; busy: string; privacy: string }
  requested: { title: (domain: string) => string; line: string }
  another: string
  takedown: string
  takedownEmail: string
}

export const lookupPage: LookupPage = {
  meta: {
    path: '/lookup',
    title: 'Look up your store · Obsession',
    description:
      'Type your store’s domain and see what our test shoppers recorded there: the emails after a sign up, a basket and a checkout, and how long each took.',
    answer:
      'Obsession’s store lookup shows a store what our test shoppers recorded there in September and October 2026. That means the emails after a sign up, a product view, a basket and a checkout, and how long each took.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Look up your store', path: '/lookup' },
    ],
  },
  headline: 'See what your store sent our shoppers.',
  sub: 'In September and October 2026 our test shoppers visited a few hundred online stores. At each one they signed up, looked at a product, left a basket and started a checkout, then watched the inbox for 48 hours. Type your store’s domain to see what they got.',
  form: {
    label: 'Your store’s domain',
    placeholder: 'yourstore.com',
    button: 'Look up',
    busy: 'Looking up your store',
    help: 'One domain, your own store. We keep a record of each lookup.',
  },
  errors: {
    domain: 'Type one domain, like yourstore.com.',
    check: 'The browser check didn’t pass. Try again.',
    limit: 'That’s the most lookups we take in an hour. Try again later.',
    server: 'The lookup didn’t work. Try again in a minute.',
    email: 'Type an email address, like you@yourstore.com.',
  },
  found: {
    visited: 'Our shoppers visited',
    mailUntil: 'Latest email we got',
    journeys: {
      welcome: 'Signed up for emails',
      browse: 'Looked at a product',
      cart: 'Left an item in the basket',
      checkout: 'Started a checkout and left',
    },
    firstAfter: 'First email after',
    emails: (n) => (n === 1 ? '1 email in the window' : `${n} emails in the window`),
    none: (hours) => `No email in the ${hours} hours after`,
    usesName: 'Used the shopper’s first name',
    left: 'Left behind',
    view: 'View email',
    faultsHeading: 'What we noticed',
    noFaults: 'Nothing wrong in the emails we read.',
    faults: {
      blank_name: 'An email greeted the shopper with a blank first name.',
      placeholder: 'An email showed a placeholder where its words should be.',
    },
    rhythmHeading: 'What came after',
    rhythm: (sends, from, to, perWeek) =>
      `${sends} ${sends === 1 ? 'email' : 'emails'} from ${from} to ${to}, about ${perWeek} a week.`,
    weekday: (day) => `Most often on ${day}.`,
    languages: (list) => `Written in ${list}.`,
    latest: 'Latest subjects',
    scope: 'These results show only what your store sent our own test shoppers. Their names and addresses are taken out.',
  },
  viewer: {
    close: 'Close',
    note: 'Links and tracking images are taken out, and so is our shopper’s address.',
    loading: 'Opening the email',
    failed: 'This email didn’t open. Look up the store again and try once more.',
  },
  missing: {
    headline: (domain) => `We haven’t visited ${domain} yet.`,
    line: 'Leave your email and we’ll add your store to our visit queue.',
    label: 'Your work email',
    placeholder: 'you@yourstore.com',
    button: 'Add my store',
    busy: 'Adding your store',
    privacy: 'We use your email only for this store.',
  },
  requested: {
    title: (domain) => `${domain} is on our list.`,
    line: 'A person reads every request and adds the store to our visit queue.',
  },
  another: 'Look up another store',
  takedown: 'Your store, and you want its results taken down? Email',
  takedownEmail: CONTACT_EMAIL,
}

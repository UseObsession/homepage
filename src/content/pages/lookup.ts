import type { Meta } from '../types'

/* /lookup: a site's entry in the index, looked up by its own domain (pages/Lookup.tsx), told the way a search engine
   would tell it: what the index holds of the site behind the login, not who collected it. One exact domain in, at most
   one entry out: no list, no browsing, no page per brand, and the page is noindex (scripts/prerender.mjs writes it like the 404 page, outside the sitemap and llms.txt).
   The card comes from the Edge Function store-lookup in the obsession-index Supabase project (lib/lookup.ts), which
   records every lookup. A site we haven't indexed gets a plain line and a form for an email, saved by the same
   function, never the waitlist sheet. The example under the box, hollin.example, is the invented store the site already
   uses (content/hollin.ts); its entry is a pinned sample in the function's database. This file is the page's words only; registry.ts keeps it out of the Page glob. */

export type LookupJourney = 'welcome' | 'browse' | 'cart' | 'checkout'

export type LookupPage = {
  meta: Meta
  headline: string
  sub: string
  form: { label: string; placeholder: string; button: string; busy: string; help: string; example: string; exampleDomain: string }
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
  missing: { headline: (domain: string) => string; line: string; button: string }
  update: { headline: string; line: (domain: string) => string; button: string }
  another: string
  takedown: string
  takedownEmail: string
}

export const lookupPage: LookupPage = {
  meta: {
    path: '/lookup',
    title: 'Look up your site · Obsession',
    description:
      'Look up your site in Obsession’s index of the web behind the login. See the emails it sends after a sign up, a basket or a checkout, and when each arrived.',
    answer:
      'Obsession’s lookup shows a site its entry in Obsession’s index of the web behind the login. That means the emails the site sends after a sign up, a basket or a checkout, when each arrived and what it said.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Look up your site', path: '/lookup' },
    ],
  },
  headline: 'See what we’ve indexed of your site.',
  sub: 'Search engines index the pages anyone can open. Obsession indexes what a site shows behind the login: the emails after a sign up, a basket or a checkout, when each arrived and what it said. Type your domain to see your site’s entry.',
  form: {
    label: 'Your site’s domain',
    placeholder: 'yoursite.com',
    button: 'Look up',
    busy: 'Looking up your site',
    help: 'One domain, your own site.',
    example: 'Example:',
    exampleDomain: 'hollin.example',
  },
  errors: {
    domain: 'Type one domain, like yoursite.com.',
    check: 'The browser check didn’t pass. Try again.',
    limit: 'That’s the most lookups we take in an hour. Try again later.',
    server: 'The lookup didn’t work. Try again in a minute.',
    email: 'Type an email address, like you@yoursite.com.',
  },
  found: {
    visited: 'Indexed',
    mailUntil: 'Latest email indexed',
    journeys: {
      welcome: 'Signed up for emails',
      browse: 'Looked at a product',
      cart: 'Left an item in the basket',
      checkout: 'Started a checkout and left',
    },
    firstAfter: 'First email after',
    emails: (n) => (n === 1 ? '1 email in the window' : `${n} emails in the window`),
    none: (hours) => `No email in the ${hours} hours after`,
    usesName: 'Used the subscriber’s first name',
    left: 'Left behind',
    view: 'View email',
    faultsHeading: 'What we noticed',
    noFaults: 'Nothing wrong in the emails we read.',
    faults: {
      blank_name: 'An email greeted the subscriber with a blank first name.',
      placeholder: 'An email showed a placeholder where its words should be.',
    },
    rhythmHeading: 'What came after',
    rhythm: (sends, from, to, perWeek) =>
      `${sends} ${sends === 1 ? 'email' : 'emails'} from ${from} to ${to}, about ${perWeek} a week.`,
    weekday: (day) => `Most often on ${day}.`,
    languages: (list) => `Written in ${list}.`,
    latest: 'Latest subjects',
    scope: 'This entry holds only what your site sent to our own accounts, with their names and addresses taken out.',
  },
  viewer: {
    close: 'Close',
    note: 'Links and tracking images are taken out, and so is the address it went to.',
    loading: 'Opening the email',
    failed: 'This email didn’t open. Look up the site again and try once more.',
  },
  missing: {
    headline: (domain) => `We haven’t indexed ${domain} yet.`,
    line: 'Leave your work email and we’ll add your site to the index.',
    button: 'Add my site',
  },
  update: {
    headline: 'Keep this entry up to date',
    line: (domain) => `Leave your work email and we’ll index ${domain} again, with any other sites your company runs.`,
    button: 'Update my entry',
  },
  another: 'Look up another site',
  takedown: 'Your site, and you want its entry taken down? Email',
  takedownEmail: 'james@useobsession.com',
}

import type { ExConsole, Meta } from '../types'

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
  form: {
    label: string
    placeholder: string
    emailLabel: string
    emailPlaceholder: string
    button: string
    busy: string
    opening: string
    help: string
    example: string
    exampleDomain: string
  }
  errors: { domain: string; check: string; limit: string; server: string; email: string; match: (domain: string) => string; link: string }
  sent: { headline: string; line: (email: string, domain: string) => string; note: string }
  /* The console's words for an entry (components/v5/HeroExplorer): Search shows the entry's events. */
  console: Omit<ExConsole, 'companies'>
  entry: {
    indexed: (from: string, to: string) => string
    latest: (day: string) => string
    persona: string
    wall: string
    emails: string
    journeys: Record<LookupJourney, string>
    since: Record<LookupJourney, string>
    after: (wait: string, since: string) => string
    reply: (n: number, hours: number, first: string) => string
    noReply: (hours: number) => string
    faults: { blank_name: string; placeholder: string }
    head: { subject: string; arrived: string; after: string }
    proof: string
    scope: string
  }
  /* Insights: the entry's answers, worked out on the page from its events (pages/Lookup.tsx LookupInsights). */
  insights: {
    every: string
    questions: Record<LookupJourney, string>
    yes: (wait: string) => string
    no: (hours: number) => string
    count: (n: number, hours: number) => string
    first: (subject: string) => string
    left: (items: string) => string
    nothing: string
    index: (pct: number, runs: number, wait: string) => string
    from: (n: number) => string
    rhythmLabel: string
    rhythm: (sends: number, weeks: number, perWeek: number) => string
    weekday: (day: string) => string
    languages: (list: string) => string
    latestLabel: string
    note: string
  }
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
  sub: 'Search engines index the pages anyone can open. Obsession indexes what a site shows behind the login: the emails after a sign up, a basket or a checkout, when each arrived and what it said. Type your email at your site, and we’ll send you a link to its entry.',
  form: {
    label: 'Your site’s domain',
    placeholder: 'yoursite.com',
    emailLabel: 'Your email, the part before the @',
    emailPlaceholder: 'you',
    button: 'Send me the link',
    busy: 'Looking up your site',
    opening: 'Opening your site’s entry',
    help: 'We email the link to this address. It has to be at your own site.',
    example: 'Example:',
    exampleDomain: 'hollin.example',
  },
  errors: {
    domain: 'Type one domain, like yoursite.com.',
    check: 'The browser check didn’t pass. Try again.',
    limit: 'That’s the most lookups we take in an hour. Try again later.',
    server: 'The lookup didn’t work. Try again in a minute.',
    email: 'Type the start of your email, the part before the @.',
    match: (domain) => `Use an email at ${domain}, so we know the site is yours.`,
    link: 'This link has run out or isn’t complete. Look up your site again for a new one.',
  },
  sent: {
    headline: 'Check your inbox',
    line: (email, domain) => `We’ve sent a link to ${email}. It opens ${domain}’s entry in the index and works for 7 days.`,
    note: 'Not there in a few minutes? Check your spam folder, or look up your site again.',
  },
  console: {
    placeholder: { search: 'yoursite.com' },
    modes: { search: 'Search', insights: 'Insights' },
    buttons: { search: 'Look up' },
    tryLabel: { search: 'Other sites' },
    groups: { persona: 'Persona', wall: 'Wall', kind: 'Kind' },
    tabs: { facts: 'Facts', evidence: 'Evidence', record: 'Record' },
    output: { search: 'Events' },
    hint: '',
    none: 'Nothing here for these choices. Pick another.',
    fromIndex: 'From the index',
    newRun: '',
    notCovered: 'Not in the index yet',
    unindexed: { title: '', line: '', cta: '' },
    said: 'The site’s entry in Obsession’s index. Insights answers 4 questions from its events, one for each step our account took. Search lists the events, what our account did and each email the site sent, with the facts read from it; open one to see its clean copy and its record. Evidence shows the clean copies, one after another.',
    ready: () => '',
  },
  entry: {
    indexed: (from, to) => (from === to ? `indexed ${from}` : `indexed ${from} to ${to}`),
    latest: (day) => `latest email ${day}`,
    persona: 'New customer',
    wall: 'Sign-up',
    emails: 'Emails',
    journeys: {
      welcome: 'Signed up for emails',
      browse: 'Looked at a product',
      cart: 'Left an item in the basket',
      checkout: 'Started a checkout and left',
    },
    since: {
      welcome: 'the sign-up',
      browse: 'the product view',
      cart: 'the basket',
      checkout: 'the checkout',
    },
    after: (wait, since) => `${wait} after ${since}`,
    reply: (n, hours, first) => `${n} in ${hours} hours, the first after ${first}`,
    noReply: (hours) => `None in ${hours} hours`,
    faults: { blank_name: 'Greeting with a blank first name', placeholder: 'A placeholder where words should be' },
    head: { subject: 'Subject', arrived: 'Arrived', after: 'After' },
    proof: 'Clean copy: links and tracking images taken out, and the address it went to.',
    scope: 'This entry holds only what your site sent to our own accounts, with their names and addresses taken out.',
  },
  insights: {
    every: 'Every wall',
    questions: {
      welcome: 'Does a sign-up get a welcome?',
      browse: 'Does a product view get a reminder?',
      cart: 'Does a basket get a reminder?',
      checkout: 'Does a checkout get a reminder?',
    },
    yes: (wait) => `Yes, after ${wait}`,
    no: (hours) => `No email in ${hours} hours`,
    count: (n, hours) => `${n} ${n === 1 ? 'email' : 'emails'} in ${hours} hours.`,
    first: (subject) => `The first: “${subject}”`,
    left: (items) => `Left in the bag: ${items}.`,
    nothing: 'Nothing came in the hours after.',
    index: (pct, runs, wait) => `Index: ${pct}% of ${runs} stores send one${wait ? `, half of those ${wait}` : ''}`,
    from: (n) => (n === 1 ? 'From 1 event' : `From ${n} events`),
    rhythmLabel: 'After the 48 hours',
    rhythm: (sends, weeks, perWeek) => `${sends} ${sends === 1 ? 'email' : 'emails'} in ${weeks} ${weeks === 1 ? 'week' : 'weeks'}, about ${perWeek} a week`,
    weekday: (day) => `Most often on a ${day}.`,
    languages: (list) => `Written in ${list}.`,
    latestLabel: 'Latest subjects',
    note: 'Each answer is worked out when you look, from the events in Search. The index keeps the events, never the answers.',
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

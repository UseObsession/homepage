import type { Capture, Recipe } from '../types'

/* Client upsells (/recipes/client-upsells). Keep and grow customers. For agencies.
   WRITER: fill. This is a scaffold: every field marked WRITER: fill holds short interim copy so the build passes.
   Rewrite each one to the standard of content/recipes/expansion-offers.ts, renewal-negotiation.ts and
   ai-checkout-test.ts, then replace this note with the recipe's own header (screen story, base, red lines held,
   up-to-50 model with its sum), as those files do. Keep id, slug, name, group, hero.screen, meta.path and the
   breadcrumb as they are: the nav, the footer, the Recipes index, the Agencies page and the share image read them.
   Screen: upsells, drawn for an agency (Your agency / Missions / Client upsells: 5 clients, from your checks; Homeware
   has no text welcome flow, 0 texts in 7 days after opting in on 24 Sep, test phone 1 Oct, so the next service is an
   SMS welcome series at £1,200 a month from 1 Nov; Coffee roaster, AI assistants quote last year's price, an AI
   answers retainer at £900 a month; Candles, checkout fails for AI shoppers, AI checkout fixes at £2,400 once; Outdoor
   gear and Dental group, no gap found; the proposal carries its signed proof, waits for Approve, then goes in AM's
   thread at 10:24; "Sends after your OK").
   The job (Seun, 3 Oct): each month find the next service each client needs, with proof from the agency's own checks
   of that client, draft the proposal with its price and evidence, send it after the agency's OK, and follow up.
   Red lines to hold: only the agency's own clients, and only checks run with each client's OK; the proposal goes from
   the agency's own thread after its OK, every follow up too; the agency sets every price; never a guarantee; stops
   when the client says no. */

const roles: Capture['roles'] = {
  question: 'What’s your role?', // WRITER: fill
  options: ['Agency owner', 'Account director', 'Client services', 'Something else'], // WRITER: fill
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'upsells',
  slug: 'client-upsells',
  name: 'Client upsells',
  group: 'Keep and grow customers',
  // WRITER: fill (line, gets, kit)
  line: 'Finds the next service each client needs from your own checks, and drafts the proposal with its price and proof.',
  gets: 'Each month, the next service for every client, with the proof and a proposal ready for your OK.',
  kit: ['An agent ID, declared as AI', 'Your checks of every client', 'Your service list and prices', 'Drafts in your own thread'],

  meta: {
    path: '/recipes/client-upsells',
    // WRITER: fill (title 55 to 60 characters, description 140 to 155, answer)
    title: 'Client upsells: the next service for each client · Obsession',
    description:
      'Each month a declared AI agent finds the next service each client needs from your own checks, and drafts the proposal with its price and proof for your OK.',
    answer:
      'Client upsells is an Obsession recipe for agencies. Each month a declared AI agent reads your checks of every client, finds the next service each one needs, and drafts the proposal with its price and evidence. It goes from your own thread after your OK.',
    ogImage: '/og/client-upsells.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Client upsells', path: '/recipes/client-upsells' },
    ],
  },

  hero: {
    // WRITER: fill (headline, sub)
    headline: 'AI agents that find the next service every client needs.',
    sub: 'Each month a declared AI agent reads your checks of every client and drafts a proposal for the next service each one needs, with the price and the proof. It goes from your own thread after your OK.',
    screen: 'upsells',
    capture: {
      kind: 'waitlist',
      source: 'recipe-upsells-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'upsells',
    },
  },

  // WRITER: fill (the whole run, matching the upsells screen)
  run: {
    tab: 'Example: 5 clients, monthly',
    recipe: 'upsells',
    task: 'Each month, find the next service each client needs from our checks, and draft the proposal with its price and proof for my OK.',
    targets: 'Your 5 clients, from your own checks',
    journey: ['Read your checks of every client', 'Match each gap to a service', 'Draft the proposal with its proof', 'Send after your OK, then follow up'],
    schedule: 'Monthly',
    report: 'Proposals ready for your OK',
    kit: ['Agent ID, declared as AI', 'Your client checks', 'Your prices', 'Your own thread'],
    events: [
      { time: '1 Oct, 09:00', text: 'Homeware: no text welcome flow. 0 texts in 7 days after opting in.' },
      { time: '1 Oct, 09:20', text: 'Proposal drafted: an SMS welcome series at £1,200 a month from 1 Nov, with the proof.' },
      { time: '1 Oct, 10:24', text: 'You approve it. It goes from AM’s thread.' },
    ],
    finding: 'Homeware has no text welcome flow: 0 texts in 7 days.',
    fix: 'An SMS welcome series at £1,200 a month, proposed after your OK.',
    ledger: 'Example run. Every check, proposal and OK signed and dated.',
  },

  // WRITER: fill (4 steps)
  steps: [
    { title: 'Read your checks of every client', line: 'The checks you already run for each client, with their OK.' },
    { title: 'Draft the proposal, sent after your OK', line: 'The service, its price and the proof, from your own thread.' },
  ],

  // WRITER: fill (3 groups of 3 or 4)
  checks: [
    {
      group: 'Where it stops',
      items: [{ title: 'Before anything sends', line: 'Every proposal and every follow up waits for your OK.' }],
    },
  ],

  // WRITER: fill (a claim heading and about 6 items)
  outputs: {
    heading: 'A proposal for every client, with the proof behind it.',
    items: [{ format: 'Proposals', line: 'The service, its price and its proof, ready for your OK.' }],
  },

  // WRITER: fill
  settings: [{ k: 'Clients', v: 'Every client, or the ones you pick' }],

  // WRITER: fill (agencies first; other readers only where it fits)
  forWho: [{ audience: 'agencies', line: 'Grow every client from the proof you already collect.' }],

  // WRITER: fill (a claim heading and about 8 questions, with "What’s it worth?" on the up-to-50 rule)
  faq: {
    heading: 'Your clients only. Nothing goes out without your OK.',
    items: [{ q: 'Does it send proposals on its own?', a: 'No. Every proposal and every follow up waits for your OK.' }],
  },

  // WRITER: fill (heading, sub)
  final: {
    heading: 'Give every client the next service they need.',
    sub: 'Join the waitlist. Client upsells comes ready to read your client checks and draft in your own thread.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-upsells-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'upsells',
    },
  },
}

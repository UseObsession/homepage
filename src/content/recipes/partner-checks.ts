import type { Capture, Recipe } from '../types'

/* Partner checks (/recipes/partner-checks). Check your own journeys. For partnerships and affiliates.
   WRITER: fill. This is a scaffold: every field marked WRITER: fill holds short interim copy so the build passes.
   Rewrite each one to the standard of content/recipes/expansion-offers.ts, renewal-negotiation.ts and
   ai-checkout-test.ts, then replace this note with the recipe's own header (screen story, base, red lines held,
   up-to-50 model with its sum), as those files do. Keep id, slug, name, group, hero.screen, meta.path and the
   breadcrumb as they are: the nav, the footer, the Recipes index, the Marketing page and the share image read them.
   Screen: partners (Your company / Missions / Partner checks, as a customer, Mon 07:00: 6 affiliates and partners,
   each with its link, code and offer; Thrifty Owl's page still shows a summer sale, 20% off with SUMMER20, and
   SUMMER20 is rejected in the cart; the note drafted in JO's thread, "SUMMER20 ended 31 Aug. Please use OWL15 instead.
   New banner attached.", sent with your OK at 09:14; "Links and codes only, never prices"; re-check Mon).
   The job (Seun, 3 Oct): every partner's links, codes and creative checked as a customer would meet them, and a note
   to the partner after the owner's OK.
   Red lines to hold: links, codes and creative only, never a partner's prices; the brand's own partners, through their
   public pages, as a declared AI agent; never a purchase (stops before payment); every note to a partner goes from
   the brand's own thread after its OK. */

const roles: Capture['roles'] = {
  question: 'What’s your role?', // WRITER: fill
  options: ['Partnerships', 'Affiliate marketing', 'Founder or owner', 'Something else'], // WRITER: fill
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'partners',
  slug: 'partner-checks',
  name: 'Partner checks',
  group: 'Check your own journeys',
  // WRITER: fill (line, gets, kit)
  line: 'Follows every partner’s link and code to your checkout as a customer, and drafts the note when one is out of date.',
  gets: 'Every partner link, code and banner checked each week, and a note drafted for any that is wrong.',
  kit: ['An agent ID, declared as AI', 'Your partner list', 'A browser per partner', 'A check every Monday'],

  meta: {
    path: '/recipes/partner-checks',
    // WRITER: fill (title 55 to 60 characters, description 140 to 155, answer)
    title: 'Partner checks: test every partner link and code · Obsession',
    description:
      'Each week a declared AI agent follows every partner’s link and code to your checkout as a customer would, and drafts a note for any that is out of date.',
    answer:
      'Partner checks is an Obsession recipe. Each week a declared AI agent follows every affiliate and partner link to your store as a customer would, tries each code at your checkout and checks the banner, then drafts a note to any partner whose link, code or creative is wrong. Links and codes only, never prices.',
    ogImage: '/og/partner-checks.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Partner checks', path: '/recipes/partner-checks' },
    ],
  },

  hero: {
    // WRITER: fill (headline, sub)
    headline: 'AI agents that check every partner sends customers the right way.',
    sub: 'Each week a declared AI agent follows every partner’s link and code to your checkout as a customer would. When a code has expired or a banner is out of date, it drafts the note to that partner for your OK.',
    screen: 'partners',
    capture: {
      kind: 'waitlist',
      source: 'recipe-partners-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'partners',
    },
  },

  // WRITER: fill (the whole run, matching the partners screen)
  run: {
    tab: 'Example: 6 partners, weekly',
    recipe: 'partners',
    task: 'Every Monday, follow each partner’s link and code to our checkout as a customer. Draft a note to any partner whose link, code or banner is out of date.',
    targets: 'Your 6 affiliates and partners',
    journey: ['Open each partner’s page', 'Follow the link to your store', 'Try the code in the basket', 'Draft the note for your OK'],
    schedule: 'Every Monday at 07:00',
    report: 'A weekly note, and drafts ready to approve',
    kit: ['Agent ID, declared as AI', 'Your partner list', 'A browser', 'Weekly'],
    events: [
      { time: 'Mon 07:00', text: '6 partners checked as a customer.' },
      { time: 'Mon 07:04', text: 'Thrifty Owl still shows last season’s offer. SUMMER20 is rejected in the basket.' },
      { time: 'Mon 09:14', text: 'You approve the note. It asks the partner to use OWL15, with a new banner.' },
    ],
    finding: '1 partner shows an expired code: SUMMER20 ended 31 Aug.',
    fix: 'A note to that partner with the new code and banner, sent after your OK.',
    ledger: 'Example run. Every check and note signed and dated.',
  },

  // WRITER: fill (4 steps)
  steps: [
    { title: 'Follow every partner link as a customer', line: 'From the partner’s page to your store, each week.' },
    { title: 'Draft the note for your OK', line: 'The new code and creative, to the partner, from your own thread.' },
  ],

  // WRITER: fill (3 groups of 3 or 4)
  checks: [
    {
      group: 'Where it stops',
      items: [{ title: 'Partner prices', line: 'Never. Links, codes and creative only.' }],
    },
  ],

  // WRITER: fill (a claim heading and about 6 items)
  outputs: {
    heading: 'Every partner checked each week, and a note ready for every one that’s wrong.',
    items: [{ format: 'A verdict per partner', line: 'Link, code and offer, with a screenshot of each.' }],
  },

  // WRITER: fill
  settings: [{ k: 'Partners', v: 'Every affiliate and partner, or the ones you pick' }],

  // WRITER: fill (marketing first; other readers only where it fits)
  forWho: [{ audience: 'marketing', line: 'Know every partner sends customers to a working code and the right offer.' }],

  // WRITER: fill (a claim heading and about 8 questions, with "What’s it worth?" on the up-to-50 rule)
  faq: {
    heading: 'Links and codes only. Nothing sent without your OK.',
    items: [{ q: 'Does it check partners’ prices?', a: 'No. Only links, codes and creative.' }],
  },

  // WRITER: fill (heading, sub)
  final: {
    heading: 'Know every partner sends customers the right way.',
    sub: 'Join the waitlist. Partner checks comes ready to follow every partner link each week.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-partners-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'partners',
    },
  },
}

import type { Capture, Recipe } from '../types'

/* Review requests (/recipes/review-requests). Keep and grow customers. For customer marketing.
   WRITER: fill. This is a scaffold: every field marked WRITER: fill holds short interim copy so the build passes.
   Rewrite each one to the standard of content/recipes/expansion-offers.ts, renewal-negotiation.ts and
   ai-checkout-test.ts, then replace this note with the recipe's own header (screen story, base, red lines held,
   up-to-50 model with its sum), as those files do. Keep id, slug, name, group, hero.screen, meta.path and the
   breadcrumb as they are: the nav, the footer, the Recipes index, the Marketing page and the share image read them.
   Screen: reviews (Your company / Missions / Review requests, October: each customer asked at its moment, delivered,
   ticket solved or onboarded; responses from a review to a reference call and an approved case study; 14 reviews this
   month; the ask "How did we do? Good or bad.", to existing customers, from hi@company.example, approved by AM;
   "Everyone asked the same way").
   The job (Seun, 3 Oct): every real customer asked the same way at the right moment, sent from the brand's own channel
   after its OK.
   Red lines to hold: real customers only; every customer asked the same words, whatever they might say (never review
   gating: no asking only the happy ones, no steering unhappy ones away from public reviews); no incentive for a
   positive review, and no fake or written-for-them reviews; sent from the brand's own channel after its OK; stops for
   anyone who asks. */

const roles: Capture['roles'] = {
  question: 'What’s your role?', // WRITER: fill
  options: ['Customer marketing', 'Customer success', 'Founder or owner', 'Something else'], // WRITER: fill
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'reviews',
  slug: 'review-requests',
  name: 'Review requests',
  group: 'Keep and grow customers',
  // WRITER: fill (line, gets, kit)
  line: 'Asks every real customer for a review the same way, at the right moment, from your own channel after your OK.',
  gets: 'Every customer asked the same way at the right moment, and every reply logged.',
  kit: ['An agent ID, declared as AI', 'Your orders and tickets, read only', 'Your own sending address', 'Every ask signed and dated'],

  meta: {
    path: '/recipes/review-requests',
    // WRITER: fill (title 55 to 60 characters, description 140 to 155, answer)
    title: 'Review requests: ask every customer the same way · Obsession',
    description:
      'A declared AI agent asks every real customer for a review at the right moment, the same words for everyone, from your own channel once you approve the ask.',
    answer:
      'Review requests is an Obsession recipe. A declared AI agent asks every real customer for a review at the right moment, such as a delivery, a solved ticket or the end of onboarding, with the same words for everyone, from your own channel after your OK.',
    ogImage: '/og/review-requests.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Review requests', path: '/recipes/review-requests' },
    ],
  },

  hero: {
    // WRITER: fill (headline, sub)
    headline: 'AI agents that ask every customer for a review, the same way.',
    sub: 'A declared AI agent asks every real customer at the right moment, with the same words for everyone, from your own channel after your OK.',
    screen: 'reviews',
    capture: {
      kind: 'waitlist',
      source: 'recipe-reviews-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'reviews',
    },
  },

  // WRITER: fill (the whole run, matching the reviews screen)
  run: {
    tab: 'Example: October’s customers',
    recipe: 'reviews',
    task: 'Ask every customer for a review at the right moment, the same way for everyone, from our own address after my OK.',
    targets: 'Your existing customers',
    journey: ['Find each customer’s moment', 'Ask with the words you approved', 'Send from your own address', 'Log every reply'],
    schedule: 'Every day',
    report: 'Every ask and reply, in 1 place',
    kit: ['Agent ID, declared as AI', 'Orders and tickets, read only', 'Your own address', 'The ask you approved'],
    events: [
      { time: 'Mon 09:00', text: 'You approve the ask: “How did we do? Good or bad.”' },
      { time: 'Mon 09:14', text: 'A coffee roaster’s order is delivered. It asks, from your own address.' },
    ],
    finding: '14 reviews this month, every customer asked the same way.',
    fix: 'The same ask goes to each new customer at its moment.',
    ledger: 'Example run. Every ask and reply signed and dated.',
  },

  // WRITER: fill (4 steps)
  steps: [
    { title: 'Find each customer’s moment', line: 'A delivery, a solved ticket or the end of onboarding, from the tools you connect.' },
    { title: 'Ask everyone the same way', line: 'The same words you approved, from your own channel.' },
  ],

  // WRITER: fill (3 groups of 3 or 4)
  checks: [
    {
      group: 'Where it stops',
      items: [{ title: 'Asking only the happy ones', line: 'Never. Every customer gets the same ask.' }],
    },
  ],

  // WRITER: fill (a claim heading and about 6 items)
  outputs: {
    heading: 'Every ask on the record, and every reply logged.',
    items: [{ format: 'The log', line: 'Every customer, its moment, the ask and the reply.' }],
  },

  // WRITER: fill
  settings: [{ k: 'Customers', v: 'Every real customer' }],

  // WRITER: fill (marketing first; other readers only where it fits)
  forWho: [{ audience: 'marketing', line: 'Ask every customer at the right moment, and see every reply in 1 place.' }],

  // WRITER: fill (a claim heading and about 8 questions, with "What’s it worth?" on the up-to-50 rule)
  faq: {
    heading: 'Every customer asked the same way. Nothing sent without your OK.',
    items: [{ q: 'Does it only ask happy customers?', a: 'No. Every customer gets the same ask, whatever they might say.' }],
  },

  // WRITER: fill (heading, sub)
  final: {
    heading: 'Ask every customer at the moment that counts.',
    sub: 'Join the waitlist. Review requests comes ready to send from your own address after your OK.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-reviews-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'reviews',
    },
  },
}

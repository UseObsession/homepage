import type { Capture, Recipe } from '../types'

/* Ad landing check (/recipes/ad-landing-check). Check your own journeys. For performance marketing.
   WRITER: fill. This is a scaffold: every field marked WRITER: fill holds short interim copy so the build passes.
   Rewrite each one to the standard of content/recipes/expansion-offers.ts, renewal-negotiation.ts and
   ai-checkout-test.ts, then replace this note with the recipe's own header (screen story, base, red lines held,
   up-to-50 model with its sum), as those files do. Keep id, slug, name, group, hero.screen, meta.path and the
   breadcrumb as they are: the nav, the footer, the Recipes index, the Marketing page and the share image read them.
   Screen: adcheck (Your company / Missions / Ad landing check: 6 live ads, checked daily at 07:00 as a customer, each
   for load, offer, price and stock; Ad 4, a social ad at $410 a day, sends clicks to /table-lamp, which is sold out;
   the drafted fix: pause Ad 4 or point it to the restocked page; paused by AM; "Never clicks your ads, pauses after
   your OK"; toast "Ad 4 paused, $410 a day saved").
   The job (Seun, 3 Oct): every live ad checked as a customer each morning (the page loads, the offer matches, the
   price matches, it's in stock); pause or repoint only after the owner's OK. The canon fact: Ad 4 sends clicks to a
   sold out lamp, $410 a day.
   Red lines to hold: the reader's own ads, or a client's with their OK; the agent never clicks a paid ad (it opens the
   landing page itself, so no ad spend is used); nothing paused, repointed or spent without the owner's OK; no claims
   about collecting other platforms' ads beyond what this job does. */

const roles: Capture['roles'] = {
  question: 'Whose ads should we check first?', // WRITER: fill
  options: ['Ours', 'A client’s, with their OK', 'Both'], // WRITER: fill
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'adcheck',
  slug: 'ad-landing-check',
  name: 'Ad landing check',
  group: 'Check your own journeys',
  // WRITER: fill (line, gets, kit)
  line: 'Opens every live ad’s landing page as a customer each morning, and flags any that is broken, wrong or sold out.',
  gets: 'Every live ad checked each morning, and the fix drafted for any landing page that lets a click down.',
  kit: ['An agent ID, declared as AI', 'Your ad accounts, read only', 'A phone browser per ad', 'A check at 07:00, every day'],

  meta: {
    path: '/recipes/ad-landing-check',
    // WRITER: fill (title 55 to 60 characters, description 140 to 155, answer)
    title: 'Ad landing check: every live ad checked daily · Obsession',
    description:
      'Each morning a declared AI agent opens every live ad’s landing page as a customer and checks it loads, matches the offer and price, and is in stock.',
    answer:
      'Ad landing check is an Obsession recipe. Each morning a declared AI agent opens the landing page of every live ad as a customer would, checks that it loads, that the offer and price match the ad and that the product is in stock, and drafts the fix. Nothing is paused or changed without your OK.',
    ogImage: '/og/ad-landing-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Ad landing check', path: '/recipes/ad-landing-check' },
    ],
  },

  hero: {
    // WRITER: fill (headline, sub)
    headline: 'AI agents that check every live ad lands where it should.',
    sub: 'Each morning a declared AI agent opens every live ad’s landing page as a customer would: it checks the page loads, the offer and price match, and the product is in stock. Any fix waits for your OK.',
    screen: 'adcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-adcheck-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'adcheck',
    },
  },

  // WRITER: fill (the whole run, matching the adcheck screen)
  run: {
    tab: 'Example: 6 live ads, daily',
    recipe: 'adcheck',
    task: 'Every morning, open each live ad’s landing page as a customer. Check it loads, the offer and price match, and it’s in stock. Draft the fix for any that fails.',
    targets: 'Your 6 live ads',
    journey: ['Read every live ad', 'Open its landing page as a customer', 'Check offer, price and stock', 'Draft the fix for your OK'],
    schedule: 'Daily at 07:00',
    report: 'A morning note, and fixes ready to approve',
    kit: ['Agent ID, declared as AI', 'Ad accounts, read only', 'A phone browser', 'Daily at 07:00'],
    events: [
      { time: 'Mon 07:00', text: '6 live ads checked as a customer. 5 pass.' },
      { time: 'Mon 07:04', text: 'Ad 4 sends clicks to a table lamp that is sold out. It spends $410 a day.' },
      { time: 'Mon 08:30', text: 'You pause Ad 4. The fix is logged.' },
    ],
    finding: 'Ad 4 sends clicks to a sold out lamp, at $410 a day.',
    fix: 'Pause Ad 4 or point it to the restocked page, after your OK.',
    ledger: 'Example run. Every check and every OK signed and dated.',
  },

  // WRITER: fill (4 steps)
  steps: [
    { title: 'Open every live ad’s page as a customer', line: 'Each morning, on a phone, without clicking the ad.' },
    { title: 'Draft the fix for your OK', line: 'Pause the ad or point it to a page that works. Nothing changes without you.' },
  ],

  // WRITER: fill (3 groups of 3 or 4)
  checks: [
    {
      group: 'Every landing page',
      items: [{ title: 'In stock', line: 'Whether the product the ad shows can still be bought.' }],
    },
  ],

  // WRITER: fill (a claim heading and about 6 items)
  outputs: {
    heading: 'A morning note on every live ad, and a fix for every one that fails.',
    items: [{ format: 'A verdict per ad', line: 'Loads, offer, price and stock, with a screenshot of each.' }],
  },

  // WRITER: fill
  settings: [{ k: 'Ads', v: 'Every live ad, or the campaigns you pick' }],

  // WRITER: fill (marketing first; other readers only where it fits)
  forWho: [{ audience: 'marketing', line: 'Catch the ad that sends clicks to a sold out page before the day’s spend.' }],

  // WRITER: fill (a claim heading and about 8 questions, with "What’s it worth?" on the up-to-50 rule)
  faq: {
    heading: 'Your own ads only. Nothing paused without your OK.',
    items: [{ q: 'Does it click our ads?', a: 'No. It opens each landing page itself, so it never spends your budget.' }],
  },

  // WRITER: fill (heading, sub)
  final: {
    heading: 'Know every ad lands on a page that sells.',
    sub: 'Join the waitlist. Ad landing check comes ready to check every live ad each morning.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-adcheck-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'adcheck',
    },
  },
}

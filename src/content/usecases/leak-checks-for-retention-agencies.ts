import { plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Retention agencies (/use-cases/leak-checks-for-retention-agencies), rewritten 22 Nov 2026 for the toolkit position: a
   persona at every store the agency pitches or keeps signs up, opts in to texts and leaves a basket, and logs what
   arrives and what never comes. Before a pitch, the prospect's emails; after the win, the client's store every week,
   beside its competitors. It runs on email, phone and the browser, through the Mystery shopping and Email and SMS
   tracking blueprints. 1 invented store carries the 10 steps (Larch & Lye, drawn by src/pages/RetentionAgencies.tsx,
   3 phases of 4, 2 and 4, so the step count stays); Brand G is the only real run. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession, the toolkit for AI agents, gives your agency a persona at every store you pitch or keep. A persona is an AI agent with its own inbox, number and browser under one name. It signs up, opts in to texts and leaves a basket, then logs every message with its time, and every one that never came.'

const answer = `${sub} Mystery shopping runs it before the pitch and every week after the win, and Email and SMS tracking sets each client beside its competitors.`

export const study: UseCaseStudy = {
  name: 'Flow audits for retention agencies',
  line: 'What every store you pitch or keep sends a new customer, and what never came.',

  meta: {
    path: '/use-cases/leak-checks-for-retention-agencies',
    title: 'Retention agencies: audit every client’s flows with AI agents',
    description:
      'A persona signs up at every store you pitch or keep, opts in to texts and leaves a basket, then logs each email and text, and every one that never came.',
    answer,
    ogImage: '/og/leak-checks-for-retention-agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Retention agencies', path: '/use-cases/leak-checks-for-retention-agencies' },
    ],
  },

  hero: {
    headline: 'Open every pitch with the store’s own emails, and the ones that never came.',
    sub,
    video: { youtube: 'Bnkm02NllPs', label: 'Watch how it works', title: 'Retention agencies: audit every client’s flows with AI agents' },
    example: { chips: [] },
    flow: [
      {
        label: 'Your pitch list in',
        title: 'Skincare brands to win',
        items: ['Larch & Lye', 'Pellwood', 'Fenwick Apothecary', 'Marrow Skin'],
        foot: '40 stores on next month’s list',
      },
      {
        label: 'Obsession',
        title: 'A persona at each store',
        items: ['New customer · US', 'Its own inbox and number', 'Pop up, texts, basket', 'Kept for months'],
        foot: 'Waiting 48 hours, free while it waits',
      },
      {
        label: 'Back to you',
        title: 'What each store never sent',
        items: ['Larch & Lye: No 15% code', 'Pellwood: No basket reminder', 'Fenwick Apothecary: No leak', 'Marrow Skin: Texts never sent'],
        foot: 'Leak · When · The email · Screenshot',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-leaks-hero',
      button: 'Start free',
      interest: 'mystery',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
  },

  /* The 10 steps, in the 3 phases the page draws them in. Each step's app window is in the page. */
  how: {
    heading: 'From a pitch list to a client you keep.',
    sub: 'How an invented agency finds what Larch & Lye never sends, wins the account and keeps it.',
    steps: [
      {
        title: 'Before the pitch',
        line: 'Steps 1 to 4',
        steps: [
          {
            title: 'Name the stores',
            line: 'Paste a list, upload a CSV, connect Clay or call the API. Each store gets its own persona.',
            example: 'The agency pastes the 40 skincare brands on next month’s pitch list.',
          },
          {
            title: 'Pick the customer and the steps',
            line: 'Choose the customer profile and what it does at each store. Each message has a deadline, so one that never comes is logged too.',
            example: 'New customer · US: sign up through the pop up, opt in to texts, browse a product, leave a basket. Wait 48 hours.',
          },
          {
            title: 'Each store, its own persona',
            line: 'Its own inbox, mobile number and browser, kept after the check. Every step is saved with a screenshot.',
            example: 'Larch & Lye, 10:14 on 2 Nov: signed up through the “15% off your first order” pop up and ticked text consent.',
          },
          {
            title: 'What each store sent, and what never came',
            line: 'After 48 hours, every store has its result: what arrived, when, and what didn’t. A broken form counts too.',
            example:
              '40 stores done. 14 never sent the pop up’s code, and 17 sent no text after the opt-in. 22 sent nothing after a basket, and 12 have 3 or more leaks, Larch & Lye among them.',
          },
        ],
      },
      {
        title: 'The pitch',
        line: 'Steps 5 and 6',
        steps: [
          {
            title: 'The email itself, for every leak',
            line: 'The timeline, the screenshots and each email as it arrived, on 1 link anyone can open, the brand included.',
            example:
              'Larch & Lye: the pop up promised 15% off. A welcome email came 9 hours later, without the code. The text opt-in sent nothing, and the basket got no reminder.',
          },
          {
            title: 'Pitch the stores missing the most',
            line: 'Sort the list by leaks. The stores with the most have a reason to take your call this week.',
            example: 'The agency writes to the 12 stores with 3 or more leaks first.',
          },
        ],
      },
      {
        title: 'After you win',
        line: 'Steps 7 to 10',
        steps: [
          {
            title: 'The persona stays',
            line: 'Once a store signs, its persona keeps receiving, with a fresh sign-up after every launch, rebuild or theme update you name.',
            example: 'Larch & Lye signs. The agency rebuilds its welcome series. The code now arrives in 40 seconds, the basket reminder after an hour.',
          },
          {
            title: 'A break caught before the client sees it',
            line: 'When something that worked stops, the result reaches your webhook or Slack that morning, with the email behind it.',
            example: 'Tuesday 1 Dec, after a theme update: the pop up takes the email but sends no code. Fixed the same day. Larch & Lye never saw it.',
          },
          {
            title: 'The client beside its competitors',
            line: 'Name the competitors once. Each gets a persona too, so you can show what Larch & Lye’s customers get next to theirs.',
            example: 'Welcome in 40 seconds against a 6 hour competitor average. The only skincare brand of the 6 that sends a basket reminder.',
          },
          {
            title: 'The month, in 1 report',
            line: 'Leaks fixed, leaks open and the competitors, every value linked to its email. Ready for the review call.',
            example: 'December: 3 leaks fixed, 1 caught and fixed the same day, none open.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'A login shows how the flows are built, not what a customer gets.',
    items: [
      {
        title: 'Every agency offers the same audit',
        line: 'So your first email reads like the last ten the founder deleted.',
      },
      {
        title: 'Your best work waits for a login',
        line: 'The audit runs inside the brand’s accounts, so a prospect sees what you found only after agreeing to a call.',
      },
      {
        title: 'A spare inbox doesn’t scale',
        line: 'Signing up to 40 prospects and 20 clients every week is a strategist’s whole week. So clients find the breaks first.',
      },
    ],
    answer: 'Obsession keeps a persona at each store, so you see what it sends a new customer before anyone hands you a login.',
  },

  fit: {
    heading: 'It covers the outside. Your audit still covers the inside.',
    line: 'Nothing changes in how you sell or deliver. A persona shows what a new customer gets; your team owns the diagnosis, the plan and the fix.',
    items: [
      { title: 'Before the pitch', line: 'Paste your pitch list. Each store comes back with what it sent and what never came.' },
      { title: 'After you win', line: 'The client’s persona stays, with a fresh sign-up after every launch.' },
      { title: 'Where you work', line: 'Your Clay table or Google Sheet, Slack, a webhook, or a link in the deck.' },
    ],
  },

  outputs: {
    heading: 'Win, keep and grow accounts from what each store sends.',
    groups: [
      {
        items: [
          {
            label: 'Winning clients',
            title: 'Pitch the stores that are leaking',
            line: 'Write first to the stores missing the most.',
            example: '12 skincare brands on the list have 3 or more leaks.',
          },
          {
            label: 'Keeping clients',
            title: 'Catch a break before the client does',
            line: 'A fresh sign-up on every client store after every launch.',
            example: 'Larch & Lye: the code stopped after a theme update, fixed the same morning.',
          },
          {
            label: 'Reporting',
            title: 'Show the client beside its competitors',
            line: 'Every value linked to its email, ready for the review call.',
            example: 'Larch & Lye: the fastest welcome email of 6 skincare brands.',
          },
          {
            label: 'Growing accounts',
            title: 'Sell the next channel',
            line: 'A leak in a channel you don’t run yet is the next line on the retainer.',
            example: 'Ottery Botanics takes a text opt-in and never sends a text.',
          },
        ],
      },
    ],
  },

  /* The real run, right after the invented 40 store run: Brand G, in its exact facts (content/sample.ts). `shop` is
     required by the type and not drawn on this page. */
  found: {
    heading: 'A real store, checked the same way in September.',
    line: 'Brand G, a UK skincare store, with 4 sign-ups and baskets. Every step is in the sample data.',
    items: [
      {
        label: 'Basket left',
        verdict: 'No basket reminder',
        finding: 'A Body Care Gift Set (£40) left at 02:57 on 22 Sep. Nothing in 48 hours.',
        shop: 'ferula',
      },
      {
        label: 'Checkout left',
        verdict: 'No checkout reminder',
        finding: 'A £21 checkout left at 03:11. Nothing in 48 hours.',
        shop: 'ferula',
      },
      {
        label: 'Sign-up and browse',
        verdict: '5 messages',
        finding: '5 messages in 48 hours, all on welcome and browse.',
        shop: 'ferula',
      },
    ],
    cta: { label: 'See sample data', to: '/sample-output' },
  },

  /* The 2 blueprints the page runs, and the 1 real run. */
  more: {
    recipe: {
      label: 'Pitch and keep',
      title: 'Mystery shopping',
      line: 'A persona at every store you pitch or keep: every email and text, and every missing reminder.',
      cta: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
    },
    second: {
      label: 'Beside competitors',
      title: 'Email and SMS tracking',
      line: 'A persona on each competitor’s list, with every email and text on 1 timeline.',
      cta: { label: 'See the blueprint', to: '/blueprints/email-sms-tracking' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See sample data', to: '/sample-output' },
    },
  },

  fine: 'The agency, the stores in the 10 steps and their .example addresses, the people, the phone number and every figure on their screens are made up. Brand G is a real store, its name hidden. Clay and Slack are trademarks of their owners, named to show where a list can come from and where results go.',

  faq: {
    heading: 'What retention agencies ask.',
    items: [
      {
        q: 'What does Obsession do for retention agencies?',
        a: answer,
        link: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
      },
      {
        q: 'Which pieces does it use?',
        a: 'Email, phone and the browser, under 1 persona per store. Mystery shopping runs the stores you pitch and keep, and Email and SMS tracking runs their competitors, on the same key and bill.',
        link: { label: 'Check your own sign-up and AI agents', to: '/kits/test-sign-up-and-agents' },
      },
      {
        q: 'Do our clients have to agree?',
        a: 'Yes. A client’s store is checked with the client’s OK, and they install nothing. A store you plan to pitch is signed up to the way any customer can.',
      },
      {
        q: 'Do we need the brand’s login?',
        a: 'No. The persona signs up the way any customer would, from the store’s own pop up or footer form. Your audit still runs inside the accounts, after the yes.',
      },
      {
        q: 'What counts as a leak?',
        a: 'Anything a new customer should get and doesn’t, by a deadline you set. A pop up code that never comes, a late welcome email, a text opt-in that sends nothing, a basket with no reminder, an email in the Promotions tab.',
      },
      {
        q: 'How many stores can it cover?',
        a: 'As many as you name: a 40 store pitch list, every client store at once, or a fleet of personas across thousands of stores. Each persona waits for days, free while it waits.',
      },
      {
        q: 'What does it cost?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month, and a blueprint is billed on the pieces it uses.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does it buy anything?',
        a: 'Only if you choose. A basket is filled and left, and counts as 1 basket in the store’s numbers. A real order goes only on your own card, never on fake payment details.',
      },
      {
        q: 'Is it legal?',
        a: 'A persona does only what any customer can, on the forms anyone can use. It says it’s an AI when it talks to a person and stops before payment unless given your own card. It never uses fake payment details, never gets round a CAPTCHA or a bot block, stops at any identity check and never clicks paid ads at volume. This is not legal advice.',
        link: { label: 'Is it legal to sign up to a competitor?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
    ],
  },

  final: {
    heading: 'Open your next pitch with the store’s own emails.',
    sub: 'Mystery shopping runs every check, so you can see it in pitches won, clients kept and revenue per client.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-leaks-final',
      button: 'Start free',
      interest: 'mystery',
    },
    link: { label: 'See the kit', to: '/kits/test-sign-up-and-agents' },
  },
}

import type { UseCaseStudy } from '../types'

/* Leak checks for retention agencies (/use-cases/leak-checks-for-retention-agencies), the 9 Nov rewrite to Home: what any
   store sends a new customer after a sign-up, a text opt-in and a basket, and what never comes, dated with the email
   itself. Before a pitch, the prospect's record; after the win, the client's store kept open beside its competitors.
   1 invented store carries the 10 steps (Larch & Lye, drawn by src/pages/RetentionAgencies.tsx); the real proof is our
   1,500 runs and Brand G, the only real record. No AI customers, no mystery shopping, no free checks: early access. */

export const study: UseCaseStudy = {
  name: 'Leak checks for retention agencies',
  line: 'What every store you pitch or keep sends a new customer, and what never came.',

  meta: {
    path: '/use-cases/leak-checks-for-retention-agencies',
    title: 'Leak checks for retention agencies, from pitch to renewal',
    description:
      'What any store sends a new customer after a sign-up, a text opt-in and a basket, dated with the email itself. For stores you pitch and clients you keep.',
    answer:
      'Obsession keeps what any store sends a new customer after a sign-up, a text opt-in and a basket, each message dated, with the email itself. Before a pitch, you see what the prospect never sent; after you win, you see the client’s store every week, beside its competitors.',
    ogImage: '/og/leak-checks-for-retention-agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Leak checks for retention agencies', path: '/use-cases/leak-checks-for-retention-agencies' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Open every pitch with the store’s own emails, and the ones that never came.',
    sub: 'What any store sends after a sign-up, a text opt-in and a basket, each message dated and kept as it arrived. Look up the stores you pitch, the clients you keep and their competitors, in Obsession or your Clay table.',
    video: { youtube: 'Bnkm02NllPs', label: 'Watch how it works', title: 'Leak checks for retention agencies' },
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
        title: 'A new customer at each store',
        items: ['New customer · US', 'Its own inbox and number', 'Pop up, texts, basket', 'Account kept open'],
        foot: 'Watching for 48 hours',
      },
      {
        label: 'Back to you',
        title: 'What each store never sent',
        items: ['Larch & Lye: No 15% code', 'Pellwood: No basket reminder', 'Fenwick Apothecary: No leak', 'Marrow Skin: Texts never sent'],
        foot: 'Leak · Seen · What happened · Receipt',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-leaks-hero',
      button: 'Request early access',
      interest: 'mystery',
    },
  },

  /* The 10 steps, in the 3 phases the page draws them in. Each step's app window is in the page. */
  how: {
    heading: 'From a pitch list to a client you keep.',
    sub: 'How the agency in this example finds what Larch & Lye never sends, wins the account and keeps it.',
    steps: [
      {
        title: 'Before the pitch',
        line: 'Steps 1 to 4',
        steps: [
          {
            title: 'Name the stores',
            line: 'Paste a list, upload a CSV, connect Clay or call the API. A store already covered returns its history at once; Watch the rest.',
            example: 'The agency pastes the 40 skincare brands on next month’s pitch list.',
          },
          {
            title: 'Pick the customer and the steps',
            line: 'Choose the customer profile and what it does at each store. Each message has a deadline, so one that never comes goes on the record too.',
            example: 'New customer · US: sign up through the pop up, opt in to texts, browse a product, leave a basket. Wait 48 hours.',
          },
          {
            title: 'Each store, its own account',
            line: 'A real inbox, mobile number and browser for each store, kept open after the check. Every step is saved with a screenshot.',
            example: 'Larch & Lye, 10:14 on 2 Nov: signed up through the “15% off your first order” pop up and ticked text consent.',
          },
          {
            title: 'What each store sent, and what never came',
            line: 'After 48 hours, every store has its record: what arrived, when, and what didn’t. A broken form counts too.',
            example:
              '40 stores done. 14 never sent the pop up’s code, 17 sent no text after the opt-in, 22 sent nothing after a basket. 12 have 3 or more leaks, Larch & Lye among them.',
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
            title: 'The account stays open',
            line: 'Once a store signs, its account keeps receiving, with a fresh sign-up after every launch, rebuild or theme update you name.',
            example: 'Larch & Lye signs. The agency rebuilds its welcome series. The code now arrives in 40 seconds, the basket reminder after an hour.',
          },
          {
            title: 'A break caught before the client sees it',
            line: 'When something that worked stops, the new fact reaches your webhook that morning, with the email behind it.',
            example: 'Tuesday 1 Dec, after a theme update: the pop up takes the email but sends no code. Fixed the same day. Larch & Lye never saw it.',
          },
          {
            title: 'The client beside its competitors',
            line: 'Name the competitors once. Each is watched the same way, so you can show what Larch & Lye’s customers get next to theirs.',
            example: 'Welcome in 40 seconds against a 6 hour competitor average. The only 1 of 6 that sends a basket reminder.',
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
        line: 'Signing up to 40 prospects and 20 clients every week is a strategist’s whole week. So nobody does it, and clients find the breaks first.',
      },
    ],
    answer: 'Obsession keeps what each store sends a new customer, dated, with the email itself, before anyone hands you a login.',
  },

  fit: {
    heading: 'It covers the outside. Your audit still covers the inside.',
    line: 'Nothing changes in how you sell or deliver. Obsession shows what a new customer gets; your team owns the diagnosis, the plan and the fix.',
    items: [
      { title: 'Before the pitch', line: 'Paste your pitch list, or ask Insights across it. Each store comes back with what it sent and what never came.' },
      { title: 'After you win', line: 'The client’s account stays open, with a fresh sign-up after every launch.' },
      { title: 'Where you work', line: 'Your Clay table or Google Sheet, a webhook into Slack, or a link in the deck.' },
    ],
  },

  outputs: {
    heading: 'What you do with it.',
    groups: [
      {
        items: [
          {
            label: 'Winning clients',
            title: 'Pitch the stores that are leaking',
            line: 'Write first to the stores missing the most.',
            example: '12 of 40 skincare brands have 3 or more leaks.',
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

  /* The real proof, right after the invented 40 store run: our own count (Home's), then Brand G, the 1 real record, in
     its exact facts. `shop` is required by the type and not drawn on this page. */
  found: {
    heading: '1,500 sign-ups, baskets and checkouts run at real companies, and counting.',
    line: '1 of them in full: Brand G, a real skincare store, checked in September with 4 customer profiles.',
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
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  /* The 2 recipes the page runs, 1 for each half of the offer, and the 1 real run. */
  more: {
    recipe: {
      label: 'Before the pitch',
      title: 'Prospect intelligence',
      line: 'What each store on your pitch list sends a new customer, and what never came.',
      cta: { label: 'Learn more', to: '/recipes/prospect-intelligence' },
    },
    second: {
      label: 'After you win',
      title: 'Client store checks',
      line: 'Your clients’ stores, step by step, every week and after every launch.',
      cta: { label: 'Learn more', to: '/recipes/mystery-shopper' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'The agency, the stores in the 10 steps and their .example addresses, the people, the phone number and every figure on their screens are made up. The 1,500 runs are our own, and Brand G is a real run. Clay and Slack are trademarks of their owners, named to show where a list can come from and where results go.',

  faq: {
    heading: 'What retention agencies ask.',
    items: [
      {
        q: 'What does Obsession do for retention agencies?',
        a: 'Obsession keeps what any store sends a new customer after a sign-up, a text opt-in and a basket, each message dated, with the email itself. Before a pitch, you see what the prospect never sent; after you win, you see the client’s store every week, beside its competitors.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up, opt in to texts and leave baskets the way any customer can, from the customer profiles and countries you choose, and keep each account open for months. Every email is kept as it arrived, with its sender checked.',
      },
      {
        q: 'Do our clients have to agree?',
        a: 'Yes. A client’s store is watched with the client’s OK, and they install nothing. A prospect’s store you can look up before you pitch.',
      },
      {
        q: 'Do we need the brand’s login?',
        a: 'No. The account signs up the way any customer would, from the store’s own pop up or footer form. Your audit still runs inside the accounts, after the yes.',
      },
      {
        q: 'What counts as a leak?',
        a: 'Anything a new customer should get and doesn’t, by a deadline you set: a pop up code that never comes, a late welcome email, a text opt-in that sends nothing, a basket with no reminder, an email in the Promotions tab.',
      },
      {
        q: 'Can the store see the record?',
        a: 'Yes. Every record is a link anyone can open, so it goes in the pitch and the store can check it for itself.',
      },
      {
        q: 'How many stores can it cover?',
        a: 'As many as you name: a 40 store pitch list or every client store at once. A store already covered returns its history straight away.',
      },
      {
        q: 'Will a store know who’s asking?',
        a: 'No. Anyone can see that a store is covered, and since when, but never who asked.',
      },
      {
        q: 'Does it buy anything?',
        a: 'Only if you choose. A basket is filled and left, and counts as 1 basket in the store’s numbers. A real order goes on a card you fund, never on fake payment details.',
      },
      {
        q: 'Is it legal?',
        a: 'Obsession does only what any customer can, on the forms anyone can use. It says it’s an AI when it talks to a person, and it never signs in to an account that isn’t its own. Any company can opt out at useobsession.com/agents. This is not legal advice.',
      },
    ],
  },

  final: {
    heading: 'Which client stores should we look up first?',
    sub: 'Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-leaks-final',
      button: 'Request early access',
      interest: 'mystery',
    },
    link: { label: 'More for agencies', to: '/agencies' },
  },
}

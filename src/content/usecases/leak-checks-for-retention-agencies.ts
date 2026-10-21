import type { UseCaseStudy } from '../types'

/* Leak checks for retention agencies (/use-cases/leak-checks-for-retention-agencies). Written 20 Oct 2026 for agencies
   shaped like Longplay Brands: email and SMS agencies for ecommerce brands that sell through an audit and run each
   client's programme after the yes. Longplay replied to "5 stores mystery shopped free?" on 9 Oct.
   The offer, in James's words of approval: name any store; we become its new customer and show you what happened,
   with proof. Before a pitch, the prospect's leaks. After you win, the client's leaks every week, and how its rivals
   compare.
   1 store carries the page, as Tidewren carries the Clay page: Larch & Lye, a skincare brand on the agency's pitch
   list. Its pop up promises 15% off and never sends the code, its text opt in sends nothing and its basket gets no
   reminder. The agency pitches it with the receipt, wins it, rebuilds the flows, catches a break after a theme update
   and shows it beside 5 rivals in the month's report.
   Drawn in James's format (10 steps in 3 phases, each beside its app window) by src/pages/RetentionAgencies.tsx from
   his pieces. Every word here; the app windows' rows and numbers in the page.
   Copy (COPY.md): buyer words (sign up, welcome email, abandoned basket, Promotions tab, report to the client); no
   "lifecycle" and no "facts"; every store invented at a .example address; written as designed.
   Merged 21 Oct 2026 (James): the mystery shopping page for ecommerce agencies folds into this one, and its address
   now redirects here (public/_redirects). From it, this page keeps the real proof (`found`: 93% of stores shopped on
   every journey had a leak, 1,500 stores shopped, 77% of leaks silence, 4 real findings retold at invented shops, the
   real September report), the free 5 stores form with its client OK, the agents' capacity (up to 1,000 stores in 48
   hours) and the term itself, as the question "Is this mystery shopping?". Seun's rule on the real block still holds:
   only those 2 shares, the store count and the capacity, never how many stores were tried or finished, the run's
   dates or length, or the tests that could not finish. Its report stack, its drafted fixes, "gap" and "audit" for our
   own offer are dropped: the agency's team owns the fix, and the agency already sells an audit. */

export const study: UseCaseStudy = {
  name: 'Leak checks for retention agencies',
  line: 'Every store you pitch or keep, checked as its new customer, with proof.',

  meta: {
    path: '/use-cases/leak-checks-for-retention-agencies',
    title: 'Leak checks for retention agencies, from pitch to renewal',
    description:
      'AI agents become the new customer of any store you name. Before a pitch, the prospect’s leaks. After you win, the client’s leaks every week, with proof.',
    answer:
      'Obsession becomes the new customer of any store you name and shows you what happened, with proof. Before a pitch, you see the prospect’s leaks; after you win, you see the client’s leaks every week, and how its rivals compare.',
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
    headline: 'Be the new customer of every store you pitch, and every store you keep.',
    sub: 'Name any store. An AI agent signs up as its new customer, opts in to texts and leaves a basket, then shows you what happened, with proof. Before a pitch, you see the prospect’s leaks. After you win, you see the client’s leaks every week, and how its rivals compare.',
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
        items: ['Its own inbox', 'A US mobile number', 'Its own browser', 'Says it’s AI'],
        foot: 'Watching for 48 hours',
      },
      {
        label: 'Back to you',
        title: 'A leak at each store, with its receipt',
        items: ['Larch & Lye: No 15% code', 'Pellwood: No basket reminder', 'Fenwick Apothecary: No leak', 'Marrow Skin: Texts never sent'],
        foot: 'Leak · Seen · What happened · Receipt',
      },
    ],
    capture: {
      kind: 'mystery',
      source: 'usecase-leaks-hero',
      button: 'Check 5 stores free',
      label: 'A store’s web address',
      placeholder: 'A store, e.g. store.example',
      micro: '5 stores checked free, what happened within 4 days, with proof. Leave it blank to join the waitlist.',
      orWaitlist: true,
      done: {
        title: 'Got it. We’ll start with {store}.',
        line: 'We’ll email {email} to ask for the other 4, and to confirm any client’s store is checked with their OK.',
      },
      interest: 'mystery',
    },
  },

  /* The 10 steps, in the 3 phases the page draws them in. Each step's app window is in the page. */
  how: {
    heading: 'From a pitch list to a client you keep.',
    sub: 'How the agency in this example finds Larch & Lye’s leaks, wins the account and keeps it.',
    steps: [
      {
        title: 'Before the pitch',
        line: 'Steps 1 to 4',
        steps: [
          {
            title: 'Name the stores',
            line: 'Paste a list, upload a CSV, connect Clay or call the API. Any store you can name, with no directory to check first.',
            example: 'The agency pastes the 40 skincare brands on next month’s pitch list.',
          },
          {
            title: 'Choose what the customer does',
            line: 'Pick the journeys to run at each store and how long to wait. Each has its own deadline, so a missing email counts as a leak once its time is up.',
            example: 'Sign up through the pop up, opt in to texts, browse a product, leave a basket. Wait 48 hours.',
          },
          {
            title: 'Each store gets its own new customer',
            line: 'A real inbox, a real mobile number and its own browser, used for that store only. It signs up the way anyone would and saves a screenshot at every step. It says it’s AI when it talks to a person.',
            example: 'Larch & Lye, 10:14 on 2 Nov: signed up through the “15% off your first order” pop up and ticked text consent.',
          },
          {
            title: 'The leaks, store by store',
            line: 'After 48 hours, every store has a verdict: what arrived, when, and what never came. A broken form is a leak too.',
            example:
              '40 stores done. 14 never sent the pop up’s code, 17 sent no text after the opt in, 22 sent nothing after a basket. 12 have 3 or more leaks, Larch & Lye among them.',
          },
        ],
      },
      {
        title: 'The pitch',
        line: 'Steps 5 and 6',
        steps: [
          {
            title: 'A receipt for every leak',
            line: 'The timeline, the screenshots and the emails themselves, on 1 link anyone can open, including the brand.',
            example:
              'Larch & Lye: the pop up promised 15% off. A welcome email came 9 hours later, without the code. The text opt in sent nothing, and the basket got no reminder.',
          },
          {
            title: 'Pitch the stores losing the most',
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
            title: 'The same customer, every week',
            line: 'Once a store signs, its check keeps running: a fresh sign up every week, and after every launch, rebuild or theme update you tell it about.',
            example: 'Larch & Lye signs. The agency rebuilds its welcome series. Week 1: the code arrives in 40 seconds, the basket reminder after an hour.',
          },
          {
            title: 'A break caught before the client sees it',
            line: 'When something that worked stops working, you hear that morning, with the receipt.',
            example: 'Tuesday 1 Dec, after a theme update: the pop up takes the email but sends no code. Fixed the same day. Larch & Lye never saw it.',
          },
          {
            title: 'The client beside its rivals',
            line: 'Name the rivals once. Each gets its own customer, so you can show what Larch & Lye’s customers get next to theirs.',
            example: 'Welcome in 40 seconds against a 6 hour rival average. The only 1 of 6 that reminds a basket.',
          },
          {
            title: 'The month, in 1 report',
            line: 'Leaks fixed, leaks open and the rivals, every value linked to its email. Ready for the review call.',
            example: 'December: 3 leaks fixed, 1 caught and fixed the same day, none open.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'A login tells you how the flows are built, not what a customer gets.',
    items: [
      {
        title: 'Everyone has the same audit',
        line: 'Every agency offers a free audit, so your first email reads like the last ten the founder deleted.',
      },
      {
        title: 'Your best work waits for a login',
        line: 'The audit runs inside the brand’s accounts, so a prospect only sees what you found after agreeing to a call.',
      },
      {
        title: 'Checking by hand doesn’t scale',
        line: 'Signing up to 40 prospects and checking 20 clients again every week is a strategist’s whole week. So nobody does it, and clients find the breaks first.',
      },
    ],
    answer:
      'Obsession’s AI agents act as new customers at every store, so you see what each one does to the people who sign up, with proof, before anyone hands you a login.',
  },

  fit: {
    heading: 'It does the outside half. Your audit still does the inside.',
    line: 'Nothing changes in how you sell or deliver. Obsession shows what a new customer gets; your team still owns the diagnosis, the plan and the fix.',
    items: [
      { title: 'Before the pitch', line: 'Paste your pitch list. Each store comes back with its leaks and a receipt.' },
      { title: 'After you win', line: 'The same customer signs up again every week, and after every launch.' },
      { title: 'Where you work', line: 'Slack, your Clay table, or a link that drops into the deck.' },
    ],
  },

  outputs: {
    heading: 'What you do with the leaks.',
    groups: [
      {
        items: [
          {
            label: 'Winning clients',
            title: 'Pitch the stores that are leaking',
            line: 'Paste your pitch list and write first to the stores losing the most.',
            example: '12 of 40 skincare brands have 3 or more leaks.',
          },
          {
            label: 'Keeping clients',
            title: 'Catch a break before the client does',
            line: 'A weekly sign up on every client store, and 1 after every launch.',
            example: 'Larch & Lye: the code stopped after a theme update, fixed the same morning.',
          },
          {
            label: 'Reporting',
            title: 'Show the client beside its rivals',
            line: 'Every value linked to its email, ready for the review call.',
            example: 'Larch & Lye: the fastest welcome email of 6 skincare brands.',
          },
          {
            label: 'Growing accounts',
            title: 'Sell the next channel',
            line: 'A leak in a channel you don’t run yet is the next line on the retainer.',
            example: 'Ottery Botanics takes a text opt in and never sends a text.',
          },
        ],
      },
    ],
  },

  /* What real checks found, right after the invented 40 store run (moved from the mystery shopping page, 21 Oct). The
     2 shares are of the stores shopped on every journey and of the leaks they had; the 4 findings are real, retold at
     invented shops (content/shops.ts). Only email was watched in those checks: "no email", never "no message". */
  found: {
    heading: '93% of stores we shopped on every\u00a0journey had a leak. 77% of the leaks were silence.',
    line: '1,500 stores shopped so far. Silence is the leak an audit inside the account can’t see: the email that never came.',
    items: [
      {
        label: 'Fashion store · Basket left',
        verdict: 'Wrong email',
        finding: 'A buyer left a basket, and 2 hours later got a browse email instead.',
        shop: 'pellam',
      },
      {
        label: 'Cosmetics store · Basket left',
        verdict: 'Broken email',
        finding: '2 cart emails came, both with no product name and a blank total.',
        shop: 'celandre',
      },
      {
        label: 'Drinks store · New subscriber',
        verdict: 'Broken links',
        finding: 'The welcome email came, but every product link and button opened a closed development store.',
        shop: 'quinnet',
      },
      {
        label: 'Natural beauty store · Basket left',
        verdict: 'Cart silent',
        finding: 'A subscriber got the welcome, then left a basket. No cart email in 48 hours.',
        shop: 'ferula',
      },
    ],
    cta: { label: 'See a sample output', to: '/sample-output' },
  },

  /* The 2 recipes the page runs, 1 for each half of the offer, and the 1 real run. */
  more: {
    recipe: {
      label: 'Before the pitch',
      title: 'Prospect intelligence',
      line: 'Proof of a real leak at each store on your pitch list.',
      cta: { label: 'Learn more', to: '/recipes/prospect-intelligence' },
    },
    second: {
      label: 'After you win',
      title: 'Mystery shopper',
      line: 'Your clients’ stores, journey by journey, every week and after every launch.',
      cta: { label: 'Learn more', to: '/recipes/mystery-shopper' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample output',
      line: 'A real store check from September 2026, shown in every format it can arrive in.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'The agency, the stores in the 10 steps and their .example addresses, the people, the phone number and every figure on their screens are made up. The 93%, the 1,500 stores and the 77% are real, the 4 findings come from real checks with every store, brand and product changed, and the sample output is a real run. Clay and Slack are trademarks of their owners, named to show where a list can come from and where results go.',

  faq: {
    heading: 'What retention agencies ask.',
    items: [
      {
        q: 'What does Obsession do for retention agencies?',
        a: 'Obsession becomes the new customer of any store you name and shows you what happened, with proof. Before a pitch, you see the prospect’s leaks; after you win, you see the client’s leaks every week, and how its rivals compare.',
      },
      {
        q: 'Is this mystery shopping?',
        a: 'Yes, of what a new customer gets: the emails, the texts and the basket reminders, at any store you name, every week. An AI agent does the shopping, so it runs on 40 stores as easily as 1, and keeps every message as proof.',
      },
      {
        q: 'What do the 5 free checks cover?',
        a: '5 stores you name, prospects or clients, each with an AI agent as its new customer for 48 hours: the pop up and its code, the welcome email, texts and a basket. You get what happened within 4 days, with proof, in any format.',
      },
      {
        q: 'Do our clients have to agree?',
        a: 'Yes. A client’s store is checked with the client’s OK, and they install nothing. A prospect’s store you can check before you pitch.',
      },
      {
        q: 'Do we need the brand’s login?',
        a: 'No. It signs up the way any customer would, from the store’s own pop up or footer form. Your audit still runs inside the accounts, after the yes.',
      },
      {
        q: 'What counts as a leak?',
        a: 'Anything a new customer should get and doesn’t, by a deadline you set: a pop up code that never comes, a late welcome email, a text opt in that sends nothing, a basket with no reminder, an email in the Promotions tab.',
      },
      {
        q: 'Does it contact anyone at the store?',
        a: 'Only as a customer would. When it talks to a person, by chat, email or phone, it says it’s AI from Obsession.',
      },
      {
        q: 'Can the store see the receipt?',
        a: 'Yes. Every receipt is a link anyone can open, so it goes in the pitch and the store can check it for itself.',
      },
      {
        q: 'How often does it check our clients?',
        a: 'As often as you choose: every week, and after every launch, rebuild or theme update you tell it about.',
      },
      {
        q: 'How many stores can it check at once?',
        a: 'Up to 1,000 stores in 48 hours, so a whole pitch list or every client store in one go.',
      },
      {
        q: 'Will a store know who’s asking?',
        a: 'No. Obsession shares what a store did, never who asked.',
      },
      {
        q: 'Does it buy anything?',
        a: 'If you choose. A basket check fills a basket and leaves it, and counts as 1 basket in the store’s numbers. A real order goes on a card you fund, never on fake payment details.',
      },
      {
        q: 'Is it legal?',
        a: 'Every agent does only what any customer can do, and says it’s AI when it talks to a person. It never uses fake payment details or gets round a CAPTCHA. Any company can opt out at useobsession.com/agents. This is not legal advice.',
      },
    ],
  },

  final: {
    heading: 'Try it on 5 stores.',
    sub: 'Name a store, a prospect or a client with their OK. We’ll become its new customer and send you what happened within 4 days, with proof, then ask for the other 4.',
    capture: {
      kind: 'mystery',
      source: 'usecase-leaks-final',
      button: 'Check 5 stores free',
      label: 'A store’s web address',
      placeholder: 'A store, e.g. store.example',
      micro: 'Leave it blank to join the waitlist.',
      orWaitlist: true,
      done: {
        title: 'Got it. We’ll start with {store}.',
        line: 'We’ll email {email} to ask for the other 4, and to confirm any client’s store is checked with their OK.',
      },
      roles: {
        short: 'Format',
        question: 'Which format should we send it in?',
        options: ['A PDF', 'A branded client report', 'Slack', 'A sheet', 'Clay columns', 'Email'],
        replaces: 'results',
        multi: true,
      },
      interest: 'mystery',
    },
    link: { label: 'See everything agents do for agencies', to: '/agencies' },
  },
}

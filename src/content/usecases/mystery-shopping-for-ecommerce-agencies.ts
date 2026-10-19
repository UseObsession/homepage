import type { UseCaseStudy } from '../types'

/* Mystery shopping for ecommerce agencies (/use-cases/mystery-shopping-for-ecommerce-agencies): a worked example for the
   agencies in the first outreach wave (retention and CRM, email and SMS, CRO, paid media, full service). Written 3 Oct
   2026 from Seun's brief: the stores are the agency's clients' and prospects', never the agency's own. A store is a
   prospect it is pitching (an opening), a current client with the client's OK (problems caught first), or a client at
   renewal or at risk (proof of value). The point is scale: every client store, at once, continuously, with nobody
   checking by hand. The offer is 5 of the agency's clients' stores audited free, the report within 4 days (never "in
   48 hours": that is the watch, not the offer), in any format, beside the waitlist.
   Cut to 6 blocks (Seun, 7 Oct, _research/pages/agencies.md, Page 2 section 3 and the editor's changes 6 to 9):
   hero > the fix (`fix`: the approve screen, a gap found and its fix drafted for the agency's OK) > prospect, client,
   renewal (`outputs`: 3 cards, the red line in each label) > what real audits found (`found`) > questions > start. The
   phases, the problem, the fit, the report block, the hours and the recipes are cut; the hours live on /agencies, the
   steps on /recipes/mystery-shopper.
   `found` replaces the real run block (Seun, 7 Oct: "use the anonymised proof examples, pick the best ones"). It states
   strength and lets no internal limit slip out (Seun's 50 rule): only the share of stores shopped end to end with a gap,
   the share of gaps that were silence, and what the agents can do (up to 1,000 stores in 48 hours). Never how many
   stores were tried or finished, the run's dates or length, the tests that could not finish, or why the run was the
   size it was. Its 4 examples are real findings retold at invented shops (content/shops.ts), with no revenue sizes.
   The rest is an example (types.ts, "Use case studies"): the agency, its clients, the prospects, the stores and every
   figure on the screens and cards are invented (.example domains, category names for the stores, as the screens use
   them: Candles, Homeware, Coffee roaster, Outdoor gear). The fine print says which is which.
   Rules (19 Oct, in line with the recipe pages): only the 3 lines in obsession/system.md hold. The record is kept as
   it arrived; the agency stays private unless it chooses to be named; and the law (an agent says it is AI when it
   talks to a person, uses no fake payment details, never gets round a CAPTCHA). What an agent does at a prospect
   (baskets, questions to staff) is the agency's setting. A client's store is shopped with the client's OK, as on
   /recipes/mystery-shopper. The free audits stop at checkout, before payment; past that is a setting. Copy rules
   kept: no price, plan or guarantee; no recipe count; no real company name (Clay is named only as a place results
   land, with its trademark line in the small print).
   Screens (reused, none new): approve (the findings and the drafted fix).
   Rewritten 19 Oct (James) in the site's October voice: the agency becomes a customer of every store it serves or
   pitches, and keeps the receipts. The hero's picture is the report stack (components/study/ReportStack), in place of
   the 3 stop flow and of the store board James turned down the same day: what the agency hands each client, 1 report
   per store in its own brand, the front one coffee.example's (the missing welcome email the approve screen below
   drafts a fix for), the 3 behind it the other stores the uses name (outdoor, candles, homeware). No "Example" chip:
   the stores are .example addresses and the small print says what is made up.
   Additions this page uses: hero.secondary, hero.report, fix, found, no `more`, final.link and capture.done (types.ts). */

export const study: UseCaseStudy = {
  name: 'Mystery shopping for ecommerce agencies',
  line: 'Every client and prospect store shopped at once, reported in your brand.',

  meta: {
    path: '/use-cases/mystery-shopping-for-ecommerce-agencies',
    title: 'Mystery shopping every client store, for ecommerce agencies',
    description:
      'AI agents become a customer of every store an ecommerce agency serves or pitches, at once: they sign up, fill a basket and wait, and bring back each gap with its receipt and a drafted fix, in the agency’s brand.',
    answer:
      'Obsession gives ecommerce agencies a customer at every client and prospect store: AI agents with their own inbox, phone number and browser that sign up, fill a basket and wait, up to 1,000 stores in 48 hours. Each gap comes back with its receipt and a drafted fix, in the agency’s own format and brand.',
    ogImage: '/og/mystery-shopping-for-ecommerce-agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Mystery shopping for ecommerce agencies', path: '/use-cases/mystery-shopping-for-ecommerce-agencies' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Be a customer of every store you serve or pitch.',
    sub: 'Clients can’t see what the retainer buys, and nobody has time to shop 20 stores by hand. AI agents sign up, fill a basket and wait at every client and prospect store at once. Each gap comes back with its receipt and a drafted fix, in your brand.',
    example: { chips: [] },
    /* The report stack: what the agency hands each client, in its own brand. The front report is coffee.example's
       (the gap the approve screen below drafts a fix for); behind it, the 3 other stores the uses name. */
    report: {
      label:
        'A stack of client reports in your agency’s brand, 1 per store, from 20 stores checked at once. The front one, a customer journey check for coffee.example, a coffee roaster and a client at risk: 3 of 4 journeys worked. The welcome email was silent, none in 48 hours; the basket reminder came after 3 hours with 10% off; texts are not offered; the support bot answered in 40 seconds. The gap: signed up on Monday at 09:02 and no welcome email came in 48 hours; the inbox, Promotions and spam were checked every hour; a welcome flow with the 10% code is drafted for your OK. Behind it: outdoor.example, a prospect, with no text after opting in; candles.example, a client, whose bot promised an email that never came; homeware.example, renewing in 30 days, with all 4 journeys working.',
      brand: 'Your agency',
      kind: 'Customer journey check',
      store: 'coffee.example',
      about: 'Coffee roaster · client, at risk · watched for 48 hours as a new customer',
      score: { value: '3 of 4', line: 'journeys worked' },
      rows: [
        { k: 'Welcome email', state: 'gap', verdict: 'Silent', v: 'None in 48 hours' },
        { k: 'Basket reminder', state: 'ok', verdict: 'Delivered', v: 'After 3 hours, with 10% off' },
        { k: 'Texts', state: 'none', verdict: 'Not offered', v: '' },
        { k: 'Support bot', state: 'ok', verdict: 'Answered', v: 'In 40 seconds' },
      ],
      gap: {
        heading: 'The gap',
        fact: 'Signed up on Monday at 09:02. No welcome email came in 48 hours.',
        receipt: 'Receipt: the inbox, Promotions and spam, checked every hour.',
        fix: 'Fix, drafted for your OK: a welcome flow with the 10% code.',
      },
      stamp: 'Silent',
      behind: [
        { store: 'outdoor.example', verdict: 'Prospect · 1 gap: no text after opting in' },
        { store: 'candles.example', verdict: 'Client · 1 gap: the bot’s email never came' },
        { store: 'homeware.example', verdict: 'Renews in 30 days · 4 of 4 worked' },
      ],
      caption: '20 stores checked at once. 1 report each, in your brand.',
    },
    capture: {
      kind: 'mystery',
      source: 'usecase-ecom-agencies-hero',
      button: 'Get my free audits',
      label: 'A client’s store web address',
      placeholder: 'Client store, e.g. store.example',
      micro: '5 client stores audited free, the report within 4 days, in any format. Leave it blank to join the waitlist.',
      orWaitlist: true,
      done: {
        title: 'Got it. We’ll start with {store}.',
        line: 'We’ll email {email} to confirm it’s a client’s store with their OK, and to ask for the other 4.',
      },
      roles: {
        short: 'Format',
        question: 'Which format should we send the audits in?',
        options: ['A PDF', 'A branded client report', 'Slack', 'A sheet', 'Clay columns', 'Email'],
        replaces: 'results',
        multi: true,
      },
      interest: 'mystery',
    },
    secondary: { label: 'See a real report', to: '/sample-output' },
  },

  /* The 1 product moment: a gap found, its fix drafted, the agency's OK (the approve screen, drawn for an agency). It
     picks up the front report's gap, coffee.example's missing welcome email. The steps live on the recipe's own page. */
  fix: {
    heading: 'Every gap comes back with its fix drafted, waiting for your OK.',
    line: 'Send it to the client, save it for the pitch or keep it for the renewal. Every step keeps its receipt, so the client can check the work.',
    screen: 'approve',
    cta: { label: 'See how Mystery shopper works', to: '/recipes/mystery-shopper' },
  },

  /* The 3 ways an agency uses 1 shop. Each label says when the shop runs, so the cards carry no line of their own. */
  outputs: {
    heading: 'One shop, three jobs: open the pitch, catch the break, prove the retainer.',
    groups: [
      {
        items: [
          {
            label: 'A prospect, before the pitch',
            title: 'Open the pitch on their own sign up',
            example: 'Outdoor gear: texts opted in on Monday, none by Wednesday.',
          },
          {
            label: 'A client, with their OK',
            title: 'Catch the break before the client does',
            example: 'Candles: the bot promised an email that never came, the fix drafted.',
          },
          {
            label: 'A client at renewal',
            title: 'Show what the retainer protects',
            example: 'Homeware renews in 30 days: 4 journeys checked, 4 Delivered, in 1 link.',
          },
        ],
      },
    ],
  },

  /* What real audits found, right before the questions and the ask (Seun, 7 Oct). The 2 shares are of the stores
     shopped end to end and of the gaps they had; the capacity is the agents', not the offer's. The 4 findings are the
     ones already chosen, retold at invented shops (content/shops.ts). Only email was watched: "no email", never "no
     message". "end to end" is joined by non breaking spaces, so the heading never breaks inside it. */
  found: {
    heading: '93% of stores we shopped on every\u00a0journey had a gap.',
    line: '1,500 stores shopped so far. 77% of the gaps were total silence.',
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
    cta: { label: 'See a full report', to: '/sample-output' },
  },

  /* The small print sits right under the 4 real findings (components/study/Found), so it names only the example as
     made up, never "figures" (the 2 shares above it are real). What the agents may do is in questions 3 to 6. */
  fine: 'The example agency, its clients and prospects, and their stores are made up. The 4 examples come from real audits, with every store, brand and product changed. Clay is a trademark of its owner, named to show where results can land.',

  /* 6 questions, closed. The first answer is meta.answer, word for word. */
  faq: {
    heading: 'Every client says yes first.',
    items: [
      {
        q: 'What does Obsession do for ecommerce agencies?',
        a: 'Obsession gives ecommerce agencies a customer at every client and prospect store: AI agents with their own inbox, phone number and browser that sign up, fill a basket and wait, up to 1,000 stores in 48 hours. Each gap comes back with its receipt and a drafted fix, in the agency’s own format and brand.',
      },
      {
        q: 'What do the 5 free audits cover?',
        a: '5 stores you serve or pitch, each with an AI agent as its customer for 48 hours: the welcome, the basket, texts and the support bot. The report comes within 4 days, in any format.',
      },
      {
        q: 'Do our clients have to agree to the audit?',
        a: 'Yes. A client’s store is shopped with the client’s OK. They install nothing.',
      },
      {
        q: 'Can we audit a prospect’s store?',
        a: 'Yes. The agents do what any customer can: sign up, opt in to texts, fill a basket, ask the bot or write to staff. How far they go is your setting. When one talks to a person, it says it’s AI from Obsession, and your name stays out unless you choose to be named.',
      },
      {
        q: 'Will it affect the store’s numbers?',
        a: 'Slightly. Each agent counts as a sign up or a basket, and the report lists them. The free audits stop at checkout, before payment. A real order is your setting, on a capped card, refunded after.',
      },
      {
        q: 'Is AI mystery shopping legal?',
        a: 'Every agent does only what any customer can do, and says it’s AI when it talks to a person. It never uses fake payment details or gets round a CAPTCHA. Any company can opt out at useobsession.com/agents. This is not legal advice.',
      },
    ],
  },

  final: {
    heading: 'Start with 1 store. We’ll ask for the other 4.',
    sub: 'Clients with their OK. Prospects before you pitch them.',
    capture: {
      kind: 'mystery',
      source: 'usecase-ecom-agencies-final',
      button: 'Get my free audits',
      label: 'A client’s store web address',
      placeholder: 'Client store, e.g. store.example',
      micro: 'Leave it blank to join the waitlist.',
      orWaitlist: true,
      done: {
        title: 'Got it. We’ll start with {store}.',
        line: 'We’ll email {email} to confirm it’s a client’s store with their OK, and to ask for the other 4.',
      },
      roles: {
        short: 'Format',
        question: 'Which format should we send the audits in?',
        options: ['A PDF', 'A branded client report', 'Slack', 'A sheet', 'Clay columns', 'Email'],
        replaces: 'results',
        multi: true,
      },
      interest: 'mystery',
    },
    link: { label: 'See everything agents do for agencies', to: '/agencies' },
  },
}

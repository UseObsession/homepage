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
   Red lines held (Obsession Context.md, sections 5 and 8): every agent says it is AI; at a prospect only public sign
   ups and the site's chat bot, never staff, no basket until the owner says OK, and its customer's name kept out; a
   client's store only with the client's written OK; every checkout stops before payment; no money anywhere; no price,
   plan or guarantee; no recipe count; no real company name (Clay is named only as a place results land, with its
   trademark line in the small print).
   Screens (reused, none new): approve (the findings and the drafted fix). The hero's flow is its own diagram.
   Template additions this page uses: hero.secondary, fix, found, no `more`, final.link and capture.done (types.ts). */

export const study: UseCaseStudy = {
  name: 'Mystery shopping for ecommerce agencies',
  line: 'Every client and prospect store shopped at once, reported in your brand.',

  meta: {
    path: '/use-cases/mystery-shopping-for-ecommerce-agencies',
    title: 'Mystery shopping every client store, for ecommerce agencies',
    description:
      'An example: declared AI agents mystery shop every client and prospect store of an ecommerce agency at once, then report in its own brand and format.',
    answer:
      'Obsession gives ecommerce agencies declared AI agents that mystery shop every client and prospect store as a customer would, with real inboxes, phone numbers and browsers. They can shop up to 1,000 stores in 48 hours, watching every email and text, and the agency gets a report in its own format and brand.',
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
    headline: 'AI agents that mystery shop every client and prospect store at once.',
    sub: 'Clients can’t see what the retainer buys, and nobody has time to shop every store. Declared AI agents shop each one as a real customer. You get the findings and the fix, in your brand.',
    /* 1 chip says it is an example; the fine print says what is made up and what is real. */
    example: { chips: ['Example: an agency with 15 clients and 5 prospects'] },
    flow: [
      {
        label: 'Your list in',
        title: 'Every store you serve or pitch',
        items: ['outdoor.example, a prospect', 'candles.example, a current client', 'homeware.example, renews in 30 days', 'coffee.example, at risk'],
        foot: '20 stores · pasted or uploaded',
      },
      {
        label: 'Obsession',
        title: 'A test customer at every store',
        items: ['Its own inbox', 'A phone number for texts', 'Its own browser', 'Says it’s AI'],
        foot: 'Watching for 48 hours',
      },
      {
        label: 'Your report',
        title: 'A page per store, in your brand',
        items: [
          'outdoor.example: no text after opt in',
          'candles.example: no basket reminder',
          'homeware.example: no gap',
          'coffee.example: no welcome email',
        ],
        foot: 'PDF · Slack · sheet · Clay · email',
      },
    ],
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
    secondary: { label: 'See what a mystery shop finds', to: '/sample-output' },
  },

  /* The 1 product moment: a gap found, its fix drafted, the agency's OK (the approve screen, drawn for an agency). It
     matches the flow's "coffee.example: no welcome email". The steps live on the recipe's own page. */
  fix: {
    heading: 'Each gap comes back with its fix drafted, waiting for your OK.',
    line: 'Every step is signed, so your client can check the work.',
    screen: 'approve',
    cta: { label: 'See how Mystery shopper works', to: '/recipes/mystery-shopper' },
  },

  /* The 3 ways an agency uses 1 shop. The red line sits in each label, so the cards carry no line of their own. */
  outputs: {
    heading: 'A prospect gets an opening, a client gets a catch, and a renewal gets proof.',
    groups: [
      {
        items: [
          {
            label: 'A prospect, public sign ups only',
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
     made up, never "figures" (the 2 shares above it are real), and it leaves the basket rule to questions 3 to 5: under
     3 real "Basket left" audits it would read as if those baskets had the owners' OK. */
  fine: 'The example agency, its clients and prospects, and their stores are made up. The 4 examples come from real audits, with every store, brand and product changed. Clay is a trademark of its owner, named to show where results can land.',

  /* 6 questions, closed. The first answer is meta.answer, word for word. */
  faq: {
    heading: 'Every client says yes first.',
    items: [
      {
        q: 'What does Obsession do for ecommerce agencies?',
        a: 'Obsession gives ecommerce agencies declared AI agents that mystery shop every client and prospect store as a customer would, with real inboxes, phone numbers and browsers. They can shop up to 1,000 stores in 48 hours, watching every email and text, and the agency gets a report in its own format and brand.',
      },
      {
        q: 'What do the 5 free audits cover?',
        a: '5 stores you serve or pitch, shopped by declared AI test customers. Each is watched for 48 hours. The report comes within 4 days, in any format.',
      },
      {
        q: 'Do our clients have to agree to the audit?',
        a: 'Yes. A basket or checkout on a client’s store needs their written OK. They install nothing.',
      },
      {
        q: 'Can we audit a prospect’s store?',
        a: 'Yes, through public sign ups and the site’s bot only, never staff. No basket without the owner’s OK. It says it’s AI from Obsession and keeps your name out.',
      },
      {
        q: 'Will it affect the store’s numbers?',
        a: 'Slightly. Each test customer counts as a sign up or basket, and the report lists them. Every checkout stops before payment, so nothing is bought.',
      },
      {
        q: 'Is AI mystery shopping legal?',
        a: 'Every agent says it’s AI and does only what any customer can do. Any company can opt out at useobsession.com/agents. This is not legal advice.',
      },
    ],
  },

  final: {
    heading: 'Start with 1 store. We’ll ask for the other 4.',
    sub: 'Clients with their OK. Prospects through public sign ups only.',
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

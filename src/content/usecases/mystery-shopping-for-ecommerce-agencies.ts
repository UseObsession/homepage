import type { UseCaseStudy } from '../types'

/* Mystery shopping for ecommerce agencies (/use-cases/mystery-shopping-for-ecommerce-agencies): a worked example for the
   agencies in the first outreach wave (retention and CRM, email and SMS, CRO, paid media, full service). Written 3 Oct
   2026 from Seun's brief: the stores are the agency's clients' and prospects', never the agency's own. A store is a
   prospect it is pitching (an opening), a current client with the client's OK (problems caught first), or a client at
   renewal or at risk (proof of value). The point is scale: every client store, at once, continuously, with nobody
   checking by hand. The offer is 5 of the agency's clients' stores audited free, in any format, beside the waitlist,
   and the real September report (/sample-output) shows what a mystery shop finds. It promises no turnaround and no
   volume beyond the 5.
   The page is an example in the study format (types.ts, "Use case studies"): the agency, its clients, the prospects,
   the stores and every figure are invented (.example domains, category names for the stores, as the screens use them:
   Candles, Homeware, Coffee roaster, Outdoor gear). The real run appears once, in its own section, stated exactly as
   the report records it (sample.ts): 4 labelled test customers, 1 left a basket and 1 stopped at checkout, nobody wrote
   to either in 48 hours; no control message, no second run, never called signed, the store's name hidden.
   Red lines held (Obsession Context.md, sections 5 and 8): every agent says it is AI; at a prospect only public sign
   ups and the site's chat bot, never staff, no basket until the owner says OK, and its customer's name kept out; a
   client's store only with the client's written OK; every checkout stops before payment; no money in the outcomes
   (hours back, each "up to" with its model); no price, plan or guarantee; no recipe count; no real company name (Clay
   is named only as a place results land, with its trademark line in the small print).
   Account watch is left out of the other recipes: it is for sales, customer success and founders, not for agencies.
   Screens (reused, none new): agencytask (pick the stores), kit (the test customers), approve (the findings and the
   drafted fix), run (the report to share). The real report is the Proof section's own page image.
   Template additions this page uses: hero.secondary, real, outcomes, recipes, no `more`, final.link and capture.done
   (types.ts). */

export const study: UseCaseStudy = {
  name: 'Mystery shopping for ecommerce agencies',
  line: 'Every client and prospect store shopped at once, reported in your brand.',

  meta: {
    path: '/use-cases/mystery-shopping-for-ecommerce-agencies',
    title: 'Mystery shopping every client store, for ecommerce agencies',
    description:
      'An example: declared AI agents mystery shop every client and prospect store of an ecommerce agency at once, then report in its own brand and format.',
    answer:
      'Obsession gives ecommerce agencies declared AI agents that mystery shop every client and prospect store as a customer would, with real inboxes, phone numbers and browsers. They watch every email and text for 48 hours, at every store at once, and the agency gets a report in its own format and brand.',
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
    example: {
      chips: ['Example: an ecommerce agency', 'Its book: 15 clients and 5 prospects', 'Prospects, clients and renewals'],
      note: 'The agency, its clients, the prospects, the stores, the people and the numbers on this page are made up. The September report is the 1 real run.',
    },
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
      micro:
        '5 client stores audited free, back in 48 hours, in any format. Leave it blank to just join the waitlist.',
      orWaitlist: true,
      done: {
        title: 'Got it. We’ll start with {store}.',
        line: 'We’ll email {email} to confirm it’s a client’s store with their OK, and to ask for the other 4.',
      },
      roles: {
        question: 'Which format should we send the audits in?',
        options: ['A PDF', 'A branded client report', 'Slack', 'A sheet', 'Clay columns', 'Email'],
      },
      interest: 'mystery',
    },
    secondary: { label: 'See what a mystery shop finds', to: '/sample-output' },
  },

  how: {
    heading: 'You send the stores. Declared AI shoppers go through every one.',
    sub: 'An ecommerce agency runs it across 15 clients and 5 prospects at once, with each client’s OK.',
    steps: [
      {
        title: 'Pick the stores',
        line: 'Prospects you’re pitching, current clients with their OK, and clients at renewal or at risk, on 1 list.',
        screen: 'agencytask',
        chips: ['A prospect you’re pitching', 'A current client, with their OK', 'A client at renewal', 'Any format you like'],
        steps: [
          {
            title: 'Send the list',
            line: 'Paste it, upload a CSV or connect Clay. Every store is a row, whoever it belongs to.',
            example: 'The agency sends 20 stores: 5 prospects it’s pitching, 11 current clients and 4 at renewal.',
          },
          {
            title: 'Say who each store is',
            line: 'A client’s store needs the client’s written OK before a basket or checkout is touched. A prospect’s store gets public sign ups and the site’s chat bot only, never staff.',
            example: 'All 15 clients have said yes. The 5 prospects stay on the public paths.',
          },
          {
            title: 'Choose the format and approve the plan',
            line: 'A PDF, a branded client report, a Slack note, a sheet, Clay columns or an email. Nothing runs, and nothing is bought, before your OK.',
            example: 'A branded PDF for each client, and 1 sheet of every store for the team.',
          },
        ],
      },
      {
        title: 'Test customers shop every store at once',
        line: 'Each store gets its own declared test customers. They sign up, browse and wait, and at a client’s store they also fill a basket and stop before payment.',
        screen: 'kit',
        chips: ['Its own inbox', 'A phone number for texts', 'Its own browser', 'Says it’s AI'],
        steps: [
          {
            title: 'Each store gets its own test customers',
            line: 'A real inbox, a phone number for texts and its own browser, used for that 1 store only. Each says it’s an AI agent. At a prospect’s store it says only that it’s from Obsession, so your name stays out.',
            example: 'Candles client: 4 test customers, for welcome, browse, basket and checkout, each with its own inbox.',
          },
          {
            title: 'They shop the way a customer does',
            line: 'Sign up with the marketing box ticked, browse, leave a basket and stop at checkout, before payment. A prospect’s store gets the sign up and the site’s chat bot, and no basket until the owner says OK.',
            example: 'Candles client: a candle set left in the basket at 09:02 and a wick trimmer left at checkout at 09:09, both before payment.',
          },
          {
            title: 'They wait, at every store at once',
            line: 'Every email and text is watched for 48 hours, so a reminder that never comes shows up too. All 20 stores run side by side.',
            example: 'Hour 30 of 48: 20 stores watched, 61 emails and 14 texts in, and 3 baskets with nothing yet.',
          },
        ],
      },
      {
        title: 'Each store comes back with its findings and a drafted fix',
        line: 'A verdict on every journey, with the screenshot or the raw message behind it, and the missing message drafted for your OK.',
        screen: 'approve',
        chips: ['Delivered', 'Silent', 'No verdict', 'Couldn’t test'],
        steps: [
          {
            title: 'A verdict on every journey',
            line: 'Delivered, Silent, No verdict or Couldn’t test. A gap counts as Silent only once the sign up is confirmed and the full 48 hours were watched.',
            example: 'Candles client: Silent, no basket reminder in 48 hours. Homeware client: Delivered, a reminder 3 hours after the basket.',
          },
          {
            title: 'The fix is drafted for you',
            line: 'The missing email or text is written from the evidence. Nothing reaches the client without your OK.',
            example: 'A 2 step basket reminder for the Candles client, drafted and waiting for your OK.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Today a client, a lost pitch or a cancellation tells you first.',
    items: [
      {
        title: 'Clients can’t see the work',
        line: 'The report shows what the platforms say. It can’t show the basket reminder that never came, so the client asks what the retainer buys.',
      },
      {
        title: 'Pitches stall on free work',
        line: 'A weekend audit and a deck about your agency. The prospect has seen it all, and none of it came from their own customer journey.',
      },
      {
        title: 'Renewals arrive out of nowhere',
        line: 'A client at risk leaves, and nobody had gone through their store as a customer in months.',
      },
      {
        title: 'By hand, it reaches a few stores',
        line: 'Signing up, leaving a basket and waiting 48 hours takes a person hours at 1 store, so a team checks a few and never gets to the rest.',
      },
    ],
    answer: 'Obsession shops every client and prospect store as the customer, at once and continuously, so you find out first.',
  },

  fit: {
    heading: 'You pick, your client agrees and Obsession shops.',
    line: 'Nothing for the client to install, and no logins. Every agent is declared, and nothing is sent, paid or changed without an OK.',
    items: [
      { title: 'The agency', line: 'Picks the stores, owns the client, approves every fix and sends the report under its own name.' },
      { title: 'Its client', line: 'Says yes in writing before a basket or checkout is touched, and installs nothing.' },
      {
        title: 'Obsession',
        line: 'Runs the test customers with their own inboxes, phone numbers and browsers, watches every message and drafts the fix. It never pays, signs or writes to staff.',
      },
    ],
  },

  outputs: {
    heading: 'A prospect gets an opening, a client gets a catch, and a renewal gets proof.',
    groups: [
      {
        items: [
          {
            label: 'A prospect you’re pitching',
            title: 'Open the pitch on their own sign up',
            line: 'Public sign ups and the site’s chat bot only, never staff, and no basket until the owner says OK.',
            example: 'Outdoor gear prospect: texts opted in on Monday, none by Wednesday.',
          },
          {
            label: 'A current client, with their OK',
            title: 'Catch the break before the client does',
            line: 'The full shop: sign up, browse, basket and checkout, stopping before payment, then 48 hours of waiting.',
            example: 'Candles client: no basket reminder in 48 hours, with the fix drafted.',
          },
          {
            label: 'A client at renewal or at risk',
            title: 'Show what the retainer protects',
            line: 'A dated record of what their customers receive, in your brand, for the call where they ask what they pay for.',
            example: 'Homeware renews in 30 days: 4 journeys checked, 4 Delivered, in 1 link.',
          },
        ],
      },
    ],
  },

  proof: {
    heading: 'Every store comes back as a report in your format and your brand.',
    line: 'Send it the way the client expects it: a PDF, a branded client report, a Slack note, a sheet, Clay columns or an email.',
    screen: 'run',
    steps: [
      {
        title: 'A page per store, under your name',
        line: 'Every journey’s verdict, a timeline, the screenshots and the raw emails and texts, in 1 link a client can open.',
        example: 'Candles client: 4 journeys, 3 Delivered and 1 Silent, each with its screenshots.',
      },
      {
        title: 'The whole book in the tools you use',
        line: 'A sheet or Clay columns with 1 row per store, a Slack message for each verdict or a webhook, beside a PDF under your name and logo.',
        example: 'A branded PDF for each of the 15 clients, and 1 sheet of all 20 stores for the team.',
      },
    ],
  },

  real: {
    heading: '1 shopper left a basket and 1 stopped at checkout on a real store. Nobody wrote to either in 48 hours.',
    line: 'A real September 2026 check of a UK skincare store, name hidden: 4 labelled test customers, 1 inbox each, every inbox watched for 48 hours, 15 screenshots and a follow up drafted for each gap. This is what a mystery shop finds, in the report your client would open.',
    cta: { label: 'Read the sample report', to: '/sample-output' },
  },

  outcomes: {
    heading: 'Up to 1,600 hours back a year for an agency with 15 clients.',
    items: [
      { value: 'Up to 1,080 hours', label: 'back a year on store checks', note: '15 clients, 6 hours of checks each a month, 12 months.' },
      { value: 'Up to 520 hours', label: 'back a year on pitch audits', note: '10 hours a week of unpaid audits, 52 weeks.' },
      { value: 'Every store', label: 'checked at once, with no new hires', note: 'Prospects, clients and renewals, on 1 list.' },
    ],
  },

  recipes: {
    heading: 'The same agents run the rest of your agency’s year.',
    sub: 'Each recipe runs for every client at once, with the same inboxes, phone numbers and browsers, and has its own page.',
    groups: [
      {
        id: 'win',
        name: 'Win clients',
        line: 'Open the pitch on the prospect’s own customer journey.',
        items: [
          {
            recipe: 'prospect',
            line: 'The free audit that opens a pitch, from the outside in: a declared agent becomes a customer of every prospect on your list through public sign ups, and proves the gap you fix.',
          },
        ],
      },
      {
        id: 'deliver',
        name: 'Deliver and prove',
        line: 'Check every client’s store week after week, and keep the proof.',
        items: [
          { recipe: 'mystery', line: 'The mystery shop itself, on 1 store or every store: 4 test customers, and every email and text watched for 48 hours.' },
          { recipe: 'email-sms', line: 'Every email and text a client’s rivals send, on 1 timeline, as a report in your name.' },
          { recipe: 'adcheck', line: 'Opens the page behind every live ad as a customer each morning, and drafts the fix for any that’s broken, wrong or sold out.' },
          {
            recipe: 'checkout',
            line: 'With each client’s written OK, places 1 real order through every AI checkout on their store each month, on a card capped to the order, refunds it and drafts the fix for any that breaks.',
          },
          { recipe: 'audit', line: 'Signs up as a fresh test customer after every release, opens every email and link, and stops before payment.' },
          { recipe: 'speed', line: 'Sends a labelled test lead through a client’s form, chat and phone, with their OK, and times every first reply.' },
        ],
      },
      {
        id: 'rivals',
        name: 'Watch their clients’ rivals',
        line: 'What each client’s rivals send, charge and run.',
        items: [
          { recipe: 'competitor', line: 'Signs up to every rival of a client and logs each email, text, offer, price change and public ad.' },
          { recipe: 'prices', line: 'Checks each rival’s prices, offers and delivery every morning, plus the codes only subscribers get.' },
          { recipe: 'ads', line: 'Reads the ads each rival runs in public and follows every one to its page, price and code.' },
        ],
      },
      {
        id: 'grow',
        name: 'Grow the account',
        line: 'Turn what the checks find into the next service.',
        items: [{ recipe: 'upsells', line: 'Finds the next service each client needs in your own checks, and drafts the proposal with its proof for your OK.' }],
      },
      {
        id: 'keep',
        name: 'Keep clients and hand them over',
        line: 'Start fast on a new client, and keep the ones you have.',
        items: [
          { recipe: 'handover', line: 'Gets a new client’s accounts out of the old agency and into the client’s name, chasing daily until each one is done.' },
          {
            recipe: 'reviews',
            line: 'Asks each client’s real customers for a review at the right moment, with the same words for everyone, from the client’s own address.',
          },
        ],
      },
      {
        id: 'agents',
        name: 'Check their AI agents',
        line: 'For the bots you build or run for a client.',
        items: [
          {
            recipe: 'support-bot',
            line: 'Asks the support bot you run for a client what customers ask, on every channel, every day, and checks each answer against their policy.',
          },
        ],
      },
    ],
  },

  fine: 'The agency, its clients, the prospects, the stores, the people and every figure here are made up, except the September check, which is a real report with the store’s name hidden. Hours back are modelled, never a promise. Baskets and checkouts run only with the owner’s OK and stop before payment. Clay is a trademark of its owner, named to show where results can land.',

  faq: {
    heading: 'Every agent says it’s AI, and every client says yes first.',
    items: [
      {
        q: 'What does Obsession do for ecommerce agencies?',
        a: 'Obsession gives ecommerce agencies declared AI agents that mystery shop every client and prospect store as a customer would, with real inboxes, phone numbers and browsers. They watch every email and text for 48 hours, at every store at once, and the agency gets a report in its own format and brand.',
      },
      {
        q: 'What do the 5 free audits cover?',
        a: 'Send us 5 of your clients’ stores and we audit them free within 48 hours, in whatever format you want: a PDF, a branded client report, Slack, a sheet, Clay columns or an email. A store can be a prospect you’re pitching, a current client with their OK, or a client at renewal or at risk. Start with 1 store in the form, and we’ll ask for the other 4.',
      },
      {
        q: 'Do our clients have to agree to it?',
        a: 'Yes, for a current client’s store, including a client at renewal or at risk. A basket or checkout on a client’s store needs the client’s written OK, and the agency tells the client. Clients install nothing and give no logins. Anything inside a client’s tools is connected by the client, read only, and can be disconnected at any time.',
      },
      {
        q: 'Is it legal to shop a client’s or a prospect’s store with AI agents?',
        a: 'Every agent is declared: it says it’s an AI agent, and at a client’s store who it works for. At a prospect’s store it uses only the public paths any customer can use, a sign up, a text opt in and the site’s chat bot. It never writes to staff and never fills a basket. Each agent links to useobsession.com/agents, and any company can opt out there with 1 email. This is not legal advice.',
      },
      {
        q: 'Will it affect the store’s numbers?',
        a: 'Slightly. To the store’s own analytics a test customer is a sign up and a basket, like any shopper, and the report lists each one so the client can set them aside. Every checkout stops before payment, so no order is placed and nothing is paid. If a store blocks an agent or shows a CAPTCHA, the agent stops and the report says it couldn’t test that step.',
      },
      {
        q: 'How is a prospect’s store different from a client’s?',
        a: 'A client’s store gets the full shop with their OK: sign up, browse, basket and checkout, stopping before payment. A prospect’s store gets the public paths only: a sign up, a text opt in and the site’s chat bot, never staff, and no basket until the owner says OK. At a prospect’s store the agent says it’s from Obsession and keeps your agency’s name out.',
      },
      {
        q: 'Can the reports go out in our format and brand?',
        a: 'Yes. A report can be a page anyone can open, a PDF, a branded client report, a Slack message with the verdict and a proof link, a sheet, Clay columns, an email or a webhook, and it goes out under your name and logo.',
      },
      {
        q: 'Which tools do we need?',
        a: 'None. Obsession goes through the storefront as a customer, so it needs no access to your client’s store or tools. The results land where you already work: Slack, a sheet, Clay, email or a webhook.',
      },
    ],
  },

  final: {
    heading: 'Send us 5 of your clients’ stores. We audit them free in 48 hours.',
    sub: 'In whatever format you want. Current clients with their OK, prospects through public sign ups only, and every checkout stops before payment. No stores to name yet? Leave the address blank to join the waitlist.',
    capture: {
      kind: 'mystery',
      source: 'usecase-ecom-agencies-final',
      button: 'Get my free audits',
      label: 'A client’s store web address',
      placeholder: 'Client store, e.g. store.example',
      micro:
        'Start with 1 store and we’ll ask for the other 4. Leave it blank to just join the waitlist.',
      orWaitlist: true,
      done: {
        title: 'Got it. We’ll start with {store}.',
        line: 'We’ll email {email} to confirm it’s a client’s store with their OK, and to ask for the other 4.',
      },
      roles: {
        question: 'Which format should we send the audits in?',
        options: ['A PDF', 'A branded client report', 'Slack', 'A sheet', 'Clay columns', 'Email'],
      },
      interest: 'mystery',
    },
    link: { label: 'See what a mystery shop finds', to: '/sample-output' },
  },
}

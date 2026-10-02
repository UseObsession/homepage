import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Agencies (/agencies), the main ICP. The story: what Obsession is for an agency > how it works > the gap (the
   agency's problem: unpaid pitch work, proving value, rivals selling AI) > use cases (win, deliver, keep, grow, sell,
   mystery shop) > outcomes (up to ceilings, each with its model in the line) > every kind of agency > recipes >
   proof (the real September store check) > questions (red lines) > the free report.
   Hero demos are examples (the console’s Example tag and every ledger say so). The one real run appears only in the third proof
   fact and the proof beat, stated as it happened. Demo clients avoid "skincare" so no example reads as the real run.
   Screens: How uses the flow screens (agencytask, templates, kit, run); each use case has its own (pack, board,
   approve, upsells, report, shop). Deliver runs on Ad landing check, grow on Client upsells. */

export const page: Page = {
  meta: {
    path: '/agencies',
    title: 'Obsession for agencies: AI agents that win and keep clients',
    description:
      'AI agents for agencies, each with its own inbox, phone number and browser, check every client, prospect and rival as a customer would. Every step signed.',
    answer:
      'Obsession is the intelligence infrastructure for commercial teams. For agencies, it runs declared AI agents, each with its own inbox, phone number and browser, that sign up at every prospect and rival and go through every client’s journeys with their OK, continuously, then send back signed proof and the next move.',
    ogImage: '/og/agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Agencies', path: '/agencies' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'AI agents that help your agency win and keep clients.',
    sub: 'Declared AI agents with their own inboxes, phone numbers and browsers sign up at every prospect and rival, and go through every client’s store, trial or booking with their OK, continuously. You get signed proof and your next move.',
    capture: {
      kind: 'waitlist',
      source: 'agencies-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'What should we set up first?',
        options: ['Pitch packs', 'Client checks', 'Renewal records', 'A service to sell', 'A store mystery shop'],
      },
      interest: 'any',
    },
    secondary: { label: 'Get my free report', to: '#join' },
    proof: [
      { value: 'Every client', label: 'checked at once, with no new hires' },
      { value: '0 basket reminders', label: 'in 48 hours, found on a real store' },
      { value: 'Every step signed', label: 'so clients can check the work' },
    ],
    consoleHeading,
    demos: [
      {
        tab: 'Before a pitch',
        recipe: 'prospect',
        task: 'Join this coffee prospect’s emails and texts, and its 3 rivals’, before Thursday’s pitch. Show me what rivals send that it doesn’t.',
        targets: '1 prospect and 3 rivals, typed',
        journey: ['Sign up as a declared AI agent', 'Opt in to texts', 'Ask the site’s bot, never staff', 'Log what arrives'],
        schedule: 'Daily until Thursday',
        report: 'Pitch pack, as a PDF and a link',
        kit: ['Agent ID, declared as AI', '4 inboxes', '4 phone numbers', '1 browser'],
        events: [
          { time: 'Mon 09:00', text: 'Signs up at all 4 as a declared AI agent, texts opted in.' },
          { time: 'Mon 09:04', text: 'Rival A, B and C each send a welcome code.' },
          { time: 'Mon 09:06', text: 'The prospect’s welcome email lands in spam, with no code.' },
          { time: 'Tue 10:00', text: 'Asks the prospect’s bot about delivery. A person picks it up, so the step ends.' },
          { time: 'Wed 09:00', text: 'Rivals: 9 emails and 4 texts. The prospect: 1 email.' },
        ],
        finding: 'Rivals sent 13 messages by Wednesday. The prospect sent 1, and it landed in spam.',
        fix: 'Pitch pack ready: their inbox beside their rivals’, every screenshot dated, 3 fixes to open with.',
        ledger: 'Example run. Every step signed and dated, in 1 link to share before Thursday.',
      },
      {
        tab: 'Account handover',
        recipe: 'handover',
        task: 'We signed a new client. Move their ads, analytics, social, domain and search accounts from the old agency into the client’s name.',
        targets: '1 new client, 12 accounts',
        journey: ['Confirm the client’s written OK', 'Ask the old agency in writing', 'Start every ownership route', 'Chase until each one moves'],
        schedule: 'Daily from day 1 until done',
        report: 'A daily Slack note, then a signed handover record',
        kit: ['Agent ID, names the client', 'Own inbox and phone line', 'Domain access, from the client', 'A card capped at each fee'],
        events: [
          { time: 'Day 1, 10:00', text: 'The client’s written OK on file. 9 of 12 accounts sit with the old agency.' },
          { time: 'Day 1, 10:20', text: '1 written request to the old agency, the client in copy. Every route started.' },
          { time: 'Day 2, 15:30', text: 'Ad account released after 1 call to the old agency’s office line.' },
          { time: 'Day 4, 09:00', text: 'Domain moved. The $12 fee paid on a card capped at $12.' },
          { time: 'Day 5, 16:00', text: 'The social platform needs the owner, so the client submits the agent’s pack.' },
        ],
        finding: '11 of 12 accounts in the client’s name by day 5. Social waits on the platform.',
        fix: 'Your agency added with only the access it needs. Old users removed after the client’s OK.',
        ledger: 'Example run. Every request, reply and transfer signed, for the client to keep.',
      },
      {
        tab: 'Every client',
        recipe: 'delivery',
        task: 'With each client’s OK, test every link and code in this weekend’s emails and texts, every hour.',
        targets: '15 client stores, from a CSV',
        journey: ['Join each list, with the client’s OK', 'Watch inboxes and texts', 'Open every link', 'Try every code, stop before payment'],
        schedule: 'Hourly, Friday to Monday',
        report: 'Slack alerts, then a PDF per client',
        kit: ['Agent ID, declared as AI', '15 inboxes', '1 phone number', 'Phone and desktop browsers'],
        events: [
          { time: 'Fri 08:00', text: '15 Black Friday emails and 12 texts arrive.' },
          { time: 'Fri 08:06', text: '46 codes tried at checkout. All work. Stopped before payment.' },
          { time: 'Sat 14:00', text: 'Candle client: the link in the text opens a sold out page.' },
          { time: 'Mon 19:00', text: 'Outdoor gear client: the Cyber Monday code is rejected. The text promised midnight.' },
          { time: 'Mon 19:01', text: 'Slack alert: the screenshot, the text and a drafted fix.' },
        ],
        finding: 'The Cyber Monday code died at 19:00, 5 hours before the midnight every text promised.',
        fix: 'Code end moved to 23:59 in the store the client connected, after your OK.',
        ledger: 'Example run. Approved at 19:09, checked again at 19:12, and signed.',
      },
      {
        tab: 'AI checkouts',
        recipe: 'checkout',
        task: 'Each month, with each client’s written OK, place a real order through every AI checkout on their store, refund it, and draft a fix for any that breaks.',
        targets: '8 client stores, with written OK',
        journey: ['Find every AI checkout', 'Buy on a card capped to the order', 'Check the order, then refund it', 'Draft the fix for each break'],
        schedule: 'Monthly, and after every checkout change',
        report: 'A signed report per client',
        kit: ['Agent ID, declared as AI', 'A single use card per order', 'Each store, connected by the client', 'A budget each client sets'],
        events: [
          { time: '1st, 09:00', text: '34 AI checkouts found on 8 client stores. 3 stores aren’t on every AI channel.' },
          { time: '1st, 09:20', text: 'Clients confirm the totals. Each order is noted as an AI test.' },
          { time: '1st, 09:31', text: 'Homeware store: no AI shopper can pick a size, so the basket empties. Stopped there.' },
          { time: '1st, 11:00', text: '33 orders placed, checked and refunded the normal way, each refund confirmed.' },
          { time: '3rd, 10:00', text: 'Fix approved by the client. Bought again: it goes through, then it’s refunded.' },
        ],
        finding: '1 checkout in 34 broke: on the homeware store, no AI shopper could pick a size.',
        fix: 'The fix proven with a new order. Sign ups for the missing AI channels wait for each client’s OK.',
        ledger: 'Example run. Every order, refund and fix signed, in 1 report per client.',
      },
      {
        tab: 'Every lead',
        recipe: 'speed',
        task: 'With each client’s OK, send a declared test lead through their form, chat and phone every Monday, and time every reply.',
        targets: '6 dental and law clients, from Clay',
        journey: ['Fill the client’s own form', 'Ask their chat', 'Call their line', 'Time every reply'],
        schedule: 'Every Monday at 09:00',
        report: 'Slack when a lead waits, a PDF per client each month',
        kit: ['Agent ID, declared as AI', '6 inboxes', '6 phone numbers', '1 browser'],
        events: [
          { time: 'Mon 09:00', text: 'A declared test lead fills all 6 clients’ forms, with their OK.' },
          { time: 'Mon 09:07', text: 'Dental client: an email reply in 7 minutes.' },
          { time: 'Mon 09:20', text: 'Law firm client: the chat promises a call back within the hour.' },
          { time: 'Tue 09:20', text: 'No call and no email from the law firm after 24 hours.' },
          { time: 'Tue 09:21', text: 'Slack alert: the form, the chat promise and the empty inbox.' },
        ],
        finding: '5 of 6 clients replied the same morning. The law firm promised a call within the hour, and nobody had called 24 hours later.',
        fix: 'Call back rule drafted in the CRM the client connected, ready for their OK.',
        ledger: 'Example run. Every reply timed, signed and dated, ready to share with each client.',
      },
    ],
  },

  how: {
    heading: 'Pick the job and add your clients. Agents bring back signed proof.',
    sub: 'A recipe comes with its agents, inboxes and schedule already set up. Type any other job and Obsession sets them up for you.',
    steps: [
      {
        title: 'Pick a recipe, type a task, or build your own',
        line: 'Recipes cover the checks you repeat across clients. Type anything else in plain words, or build on the API.',
        screen: 'agencytask',
        chips: ['Mystery shopper', 'Prospect intelligence', 'Competitor tracking', 'Any task you type'],
      },
      {
        title: 'Add your clients',
        line: 'Clients, prospects and rivals: every company on your list, from wherever it lives.',
        screen: 'templates',
        chips: ['Paste a list', 'Upload a CSV', 'Connect Clay', 'API'],
      },
      {
        title: 'Declared AI agents run it',
        line: 'Each says it’s an AI agent and keeps at it continuously, at every company at once.',
        screen: 'kit',
        chips: ['Agent ID', 'Inbox', 'Phone number', 'Browser'],
      },
      {
        title: 'You get the proof and your next move',
        line: 'Every step signed and dated, with the fix drafted for your OK.',
        screen: 'run',
        chips: ['Email', 'PDF', 'Slack', 'Sheet', 'Clay', 'CRM', 'Webhook'],
      },
    ],
  },

  gap: {
    heading: 'Pitch audits and client checks eat your unpaid hours.',
    sub: 'Most tools read what a company publishes. Obsession goes through it as a customer.',
    rows: [
      { today: 'Pitch audits on unpaid weekends', obsession: 'Every prospect checked before the call' },
      { today: '1 client at a time, 9 to 6', obsession: 'Every client at once, continuously' },
      { today: 'Assistants that act as you, from your own inbox', obsession: 'Agents with their own ID, inbox and number, declared as AI' },
      { today: 'A single audit, stale by next week', obsession: 'Checked again on schedule, and after every fix' },
      { today: 'Clients asking how you use AI', obsession: 'A signed record of every check and fix to show them' },
    ],
  },

  uses: {
    heading: 'Turn the unpaid hours into pitches won, clients kept and a service you sell.',
    items: [
      {
        tab: 'Win the pitch',
        moment: 'Thursday’s pitch, and all you’ve seen is their homepage.',
        outcome: 'Open the pitch on their own screenshots, not a weekend audit.',
        line: 'Agents sign up to the prospect, opt in to texts and ask the site’s bot, then turn every gap into a pitch pack.',
        whyOnly: 'A welcome email, a code or a text only reaches an inbox and phone that signed up. Each agent has its own.',
        recipe: 'prospect',
        screen: 'pack',
      },
      {
        tab: 'Deliver for every client',
        moment: 'Monday, 08:00. 15 clients, and any live ad could be landing on a sold out page.',
        outcome: 'Broken ads caught each morning, before the day’s spend, for every client at once.',
        line: 'With each client’s OK, agents open the page behind every live ad each morning, check its offer, price and stock, and flag only what needs you.',
        whyOnly: 'Agents open each ad’s page on a phone, the way a customer does, so they see the sold out page your ad dashboard never shows.',
        recipe: 'adcheck',
        screen: 'board',
      },
      {
        tab: 'Keep every client',
        moment: 'A month before renewal, the client asks what the retainer buys.',
        outcome: 'A signed record of every fix: found, approved, live and checked again.',
        line: 'Agents draft each fix in the tools the client connected, apply it after your OK, then run the check again to prove it works.',
        whyOnly: 'Every step is signed and dated, so the client can check the work without taking your word for it.',
        recipe: 'audit',
        screen: 'approve',
      },
      {
        tab: 'Grow every client',
        moment: 'The first of the month. Some clients need more from you, and nobody has the proof to hand.',
        outcome: 'A proposal for the next service each client needs, with the proof from your own checks.',
        line: 'Agents read the checks you already run for each client, match every gap to a service you sell, and draft the proposal with its price. It goes from your own thread after your OK.',
        whyOnly: 'The proof is the client’s own customer journey, checked by an agent with its own inbox and phone, so the proposal opens on what their customers get.',
        recipe: 'upsells',
        screen: 'upsells',
      },
      {
        tab: 'Sell a new service',
        moment: 'A client asks what their rivals send. You’d charge for the answer if it didn’t take a week.',
        outcome: 'A research service you sell: a monthly rival report, in your brand.',
        line: 'Agents join each client’s rivals’ emails and texts and log every offer, then send the report under your name.',
        whyOnly: 'Rivals save their best offers for subscribers. Agents subscribe to every rival of every client, so the report shows what their customers get.',
        recipe: 'email-sms',
        screen: 'report',
      },
      {
        tab: 'Mystery shop any client',
        moment: 'A client swears every customer hears back. Nobody has checked since launch.',
        outcome: 'Proof of what every customer gets, and what never arrives: a trial, a basket or a booking.',
        line: 'With the client’s OK, agents start a trial, fill a basket or book a visit, stop before payment and watch every inbox.',
        whyOnly: 'Only an agent with its own inbox, number and browser can wait 48 hours and prove nothing came.',
        recipe: 'mystery',
        screen: 'shop',
      },
    ],
  },

  outcomes: {
    heading: 'Up to $276,000 more a year for an agency with 15 clients.',
    items: [
      { value: 'Up to 1,080 hours', label: 'back a year: 15 clients, 6 hours of checks each a month' },
      { value: 'Up to $216,000', label: 'a year from 1 more client kept and 2 more pitches won, on $6,000 monthly retainers' },
      { value: 'Up to $60,000', label: 'a year from a $1,000 monthly rival report, sold to 5 of your 15 clients' },
    ],
  },

  kinds: {
    heading: 'Whatever you sell, the legwork is the same.',
    label: 'Pick your agency',
    items: [
      {
        name: 'Performance and paid media',
        line: 'The page behind every client’s live ad opened on a phone each morning, and every rival’s new ads and prices logged.',
        recipes: ['adcheck', 'ads', 'prices', 'competitor', 'audit'],
      },
      {
        name: 'Email, SMS and CRM',
        line: 'Each client’s list joined with their OK, every flow timed and every code tested before the big send.',
        recipes: ['email-sms', 'delivery', 'mystery', 'prospect'],
      },
      {
        name: 'SEO and AI search',
        line: 'Wrong facts in each client’s AI answers corrected at the source, every customer asked for a review, and every form and booking link tested, with their OK.',
        recipes: ['listings', 'reviews', 'audit', 'prospect'],
      },
      {
        name: 'Web and CRO',
        line: 'Every sign up, checkout and booking run after each release, with the client’s OK, stopping before payment.',
        recipes: ['audit', 'mystery', 'competitor'],
      },
      {
        name: 'Ecommerce',
        line: 'Each client’s store shopped as 4 customers with their OK, and rivals’ prices and bundles checked every morning.',
        recipes: ['mystery', 'prices', 'delivery', 'prospect'],
      },
      {
        name: 'Social and influencer',
        line: 'Every creator code and link in bio tested daily with the client’s OK, and the ads rivals run in public logged.',
        recipes: ['partners', 'delivery', 'ads', 'competitor'],
      },
      {
        name: 'Content and copy',
        line: 'Rivals’ newsletters joined, and a month of their sends turned into each client’s brief.',
        recipes: ['email-sms', 'competitor', 'audit'],
      },
      {
        name: 'Creative and branding',
        line: 'Every page, email and ad captured after a launch, so you catch an old logo before a customer does.',
        recipes: ['audit', 'email-sms', 'ads'],
      },
      {
        name: 'Outbound and lead gen',
        line: 'Each client’s emails checked weekly for inbox or spam, and every reply to their own forms timed, with their OK.',
        recipes: ['delivery', 'speed', 'prospect'],
      },
      {
        name: 'B2B and RevOps',
        line: 'A test lead through each client’s own form with their OK, every reply timed and checked in the CRM they connect.',
        recipes: ['speed', 'audit', 'trial'],
      },
      {
        name: 'Marketplaces',
        line: 'Every listing’s price and stock checked daily, and rivals’ new listings and price moves logged.',
        recipes: ['prices', 'competitor'],
      },
      {
        name: 'PR and comms',
        line: 'AI assistants asked about each client every week, and every wrong fact corrected at its source with the client’s OK.',
        recipes: ['listings', 'competitor'],
      },
      {
        name: 'Full service',
        line: 'Pitches, delivery, upsells, renewals and the reports you sell, for every client on 1 board.',
        recipes: ['prospect', 'mystery', 'upsells', 'ads', 'competitor', 'email-sms', 'audit'],
      },
      {
        name: 'Any other agency',
        line: 'If a customer can do it in a browser, an inbox or on the phone, type it. Obsession sets it up and runs it after your OK.',
        recipes: [],
      },
    ],
  },

  recipes: {
    heading: 'Each recipe does the work of a whole tool, for every client.',
    ids: ['mystery', 'prospect', 'handover', 'upsells', 'checkout', 'adcheck', 'competitor', 'email-sms', 'ads', 'prices', 'audit', 'delivery', 'listings', 'speed'],
  },

  proof: {
    heading: '1 shopper left a basket, 1 stopped at checkout. 0 reminders reached them in 48 hours.',
    line: 'A real September check of a skincare store, name hidden: 4 test customers, every inbox watched for 48 hours, and a follow up drafted for each gap.',
    cta: { label: 'Read the full report', to: '/sample-output' },
  },

  faq: {
    heading: 'Nothing for clients to install. Every agent declared.',
    items: [
      {
        q: 'Do clients need to install anything?',
        a: 'No. Agents arrive from outside, the way a customer does. For anything inside, like an email tool or an ad account, the client connects it and can disconnect it at any time.',
      },
      {
        q: 'Can we run it on prospects and rivals?',
        a: 'Yes, through the paths any customer can use in public: sign ups, newsletters, texts, public pages and ads, and the site’s chat bot. Never a person: no enquiries or contact forms, and if staff pick up the chat, the step ends. Baskets and checkouts need the owner’s OK.',
      },
      {
        q: 'How many clients can we cover?',
        a: 'As many as you add. Every client runs at the same time, once or on a schedule.',
      },
      {
        q: 'Can the reports carry our name?',
        a: 'Yes. Reports go out under your name and logo, as a PDF, a link, an email or into Slack, with every step signed so clients can check it themselves.',
      },
      {
        q: 'Does it replace our team?',
        a: 'No. Agents do the legwork: the sign ups, the waiting and the checks. Your team keeps the strategy, every approval and the client, and your clients see the work under your name.',
      },
      {
        q: 'What do the agents never do?',
        a: 'Pretend to be a person, use a fake identity or send cold spam. Message staff at a prospect or rival, start a rival’s trial that needs a card, reply inside a trial, or stay in one once a rep writes or calls. Pay on anyone else’s store, spend past the budget you set, sign anything for you, or go behind a login they weren’t given. At rivals and prospects they say they’re AI agents and link to useobsession.com/agents, without naming your client.',
      },
      {
        q: 'What’s in the free report?',
        a: 'Name a store you run, or a client’s with their OK. 4 test customers sign up, browse and leave baskets, stopping before payment, and every inbox is watched for 48 hours. Within 4 days you get what arrived, what didn’t, and a fix drafted for each gap.',
      },
    ],
  },

  final: {
    heading: 'Pick a client. See what their customers get.',
    sub: 'Point it at the client you’d hate to lose, with their OK, or a store you run. 4 test customers, every inbox watched for 48 hours, and your report within 4 days.',
    capture: {
      kind: 'mystery',
      source: 'agencies-final',
      button: 'Get my free report',
      placeholder: 'Store address, e.g. your-store.example',
      micro: 'No store client yet? Leave the address blank and you join the waitlist. We keep your email to send your report and tell you about Obsession, and nothing else.',
      orWaitlist: true,
      roles: {
        question: 'What kind of agency are you?',
        options: ['Performance', 'Email and CRM', 'SEO', 'Web and CRO', 'Ecommerce', 'Creative', 'Full service', 'Other'],
      },
      interest: 'mystery',
    },
  },
}

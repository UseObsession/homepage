import type { BlogPost } from './types'

/* Agent search guide (_research/seo/agent-search-23nov/PLAN.md, by industry; Seun's "Yes, run the plan", 23 Nov 2026):
   an AI agent for restaurants. Primary "ai agent for restaurants"; secondaries from the plan's Google suggestions
   (US and UK, 23 Nov 2026): ai agent for restaurant reservations, ai phone agent for restaurants, ai voice agent for
   restaurants, best ai agent for restaurants. Read on 23 Nov 2026: Revmo's State of Restaurant Calls 2026 (via
   Fast Casual, 24 Aug 2026: 12,091 calls, QSR 40.1% missed, fast casual 24.8%), SevenRooms' Voice AI missed call
   calculator (64% of diners still call, 36% of missed calls are booking requests, 400K calls 1 Jul to 30 Sep 2026,
   40% default miss rate), Loman AI's OpenTable integration release (3 Dec 2025), Hostie's pricing page (no prices
   listed; plans named) and the BLS wage page for hosts and hostesses (May 2023 median $14.05 an hour, 429,900 jobs in
   2024 per the handbook). Booking platform prices were NOT read from an official page (the pages timed out), so none
   is quoted. Toast's blog (43%, $52,000) returned 403 and is not cited. Obsession's prices are from
   src/lib/pricing/pricing.json (23 Nov 2026): number $2 a month, inbox $0.50, calls $0.012 a minute, texts $0.015,
   emails $0.40 per 1,000, browser $0.10 an hour, events $5 per million, US texting registration $25 once then $17
   a month per campaign, plans $20, $99, $499, Enterprise from $1,500. Marlow Kitchen at marlow-kitchen.example is
   invented. British English, no dashes. */

const REVMO = 'https://www.fastcasual.com/news/new-study-reveals-revenue-gaps-from-missed-calls/'
const SR_CALC = 'https://sevenrooms.com/voice-ai-missed-call-calculator/'
const SR_HOME = 'https://sevenrooms.com/'
const LOMAN = 'https://www.restaurantdive.com/press-release/20251203-loman-ai-announces-integration-with-opentable-enabling-full-voice-ai-power-1/'
const HOSTIE = 'https://hostie.ai/pricing'
const BLS = 'https://www.bls.gov/oes/2023/May/oes359031.htm'
const TCR = 'https://www.campaignregistry.com/wp-content/uploads/TCR-Intro-2026-v4_comp.pdf'
const FCC = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'

export const post: BlogPost = {
  slug: 'ai-agent-for-restaurants',
  title: 'AI agent for restaurants: the calls, bookings and orders it takes during service, and what it costs',
  dek: 'During a Friday service nobody can pick up the phone. An agent with its own number, inbox and browser answers, texts back, books into your system, confirms, reminds and reorders, and sends every allergy question to a person.',
  metaTitle: 'AI agent for restaurants: every call, booking and order',
  description:
    'An AI agent for restaurants answers calls, texts back, takes bookings, handles large parties and reorders stock. Its jobs, its cost and its limits.',
  answer:
    'An AI agent for restaurants answers the calls and messages nobody can take during service, takes or changes bookings in the system you already use, confirms and reminds guests, handles large-party enquiries by email and reorders from suppliers when stock runs low. Allergy and food-safety questions always go to a person or are answered only from your own written list. In a worked example, with texting registration included, one restaurant’s agent costs about $345 a month at list rates and 30 sites about $9,870.',
  primaryKeyword: 'ai agent for restaurants',
  keywords: [
    'ai agent for restaurant reservations',
    'ai phone agent for restaurants',
    'ai voice agent for restaurants',
    'best ai agent for restaurants',
  ],
  category: 'Talk to customers',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'marlow-kitchen.example · Friday service',
      who: 'The agent on Marlow Kitchen’s number and inbox',
      rows: [
        { time: '19:12', text: 'Call missed during the rush', detail: 'Text sent from the agent’s own number in 5 seconds', tone: 'ok' },
        { time: '19:14', text: 'Guest replied: “Table for 4, 8:30?”', detail: 'Checked the booking system, offered 8:45', tone: 'info' },
        { time: '19:16', text: 'Booked 8:45 for 4', detail: 'Confirmation texted, added to the book', tone: 'ok' },
        { time: '19:40', text: 'Question: “Is the risotto nut free?”', detail: 'Not answered by the agent; sent to the duty manager', tone: 'late' },
        { time: '21:05', text: 'Email: party of 22 on 12 December', detail: 'Event pack sent, enquiry passed to the manager', tone: 'ok' },
        { time: '06:00', text: 'Oat milk under its level', detail: 'Reordered from the usual supplier, delivery Wednesday', tone: 'ok' },
      ],
      foot: 'Example: Marlow Kitchen, its guests and every time here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent for restaurants does the phone, inbox and admin work that stops during service. When the dining room is full, the line rings out, the enquiry email waits until Monday and the supplier order slips a day. An agent that has its own phone number, email inbox and web browser picks these up while your team is on the floor: it answers or texts back, books or changes a table in the system you use, confirms and reminds the guest, and logs every step.',
    },
    {
      kind: 'p',
      text: 'It does not replace the host, the chef or the manager. It takes the repeatable calls and messages, and it passes the ones that need a person.',
    },

    { kind: 'h2', id: 'missed', text: 'What a restaurant misses during service' },
    {
      kind: 'p',
      text: 'Most missed contact is a short list of questions that repeat all week. Guests want to book a table or change one, to know whether you are open on Sunday, what is on the menu, whether you take a party of 12, whether you do takeaway and whether a dish is safe for an allergy.',
    },
    {
      kind: 'stat',
      value: '64%',
      label: 'of diners still phone to make a reservation, in SevenRooms’ US research',
      source: 'SevenRooms, Voice AI missed call calculator, read 23 November 2026',
      href: SR_CALC,
    },
    {
      kind: 'p',
      text: `Phone calls that nobody answers are common. A 2026 report by Revmo, a restaurant voice AI vendor, listened to 12,091 restaurant call recordings. It found [quick-service restaurants missed 40.1% of calls and fast casual 24.8%](${REVMO}), and put the leak at $73,000 a year per quick-service location. It is a vendor’s own study, so treat the dollar figure as an upper estimate and the miss rates as the useful part. SevenRooms, which sells its own voice AI, assumes in its [calculator](${SR_CALC}) that [36% of missed calls are new booking requests](${SR_CALC}), based on over 400,000 calls its Voice AI answered between 1 July and 30 September 2026.`,
    },

    { kind: 'h2', id: 'cost', text: 'What the missed calls cost, on your own numbers' },
    {
      kind: 'p',
      text: 'Your phone system shows how many calls went unanswered last month. The cost to you is your own sum: missed calls, times the share that were booking requests, times the share you truly lost to another restaurant, times what a table is worth.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 65 calls a day, 25% missed, 36% of those booking requests, 1 in 4 of them lost to another restaurant, a table worth $120. Put in your own numbers',
      cols: ['Size', 'Calls a month', 'Missed', 'Booking requests', 'Tables lost', 'Lost a month', 'Lost a year'],
      rows: [
        ['One restaurant', '1,950', '488', '176', '44', '$5,280', '$63,360'],
        ['30 sites', '58,500', '14,625', '5,265', '1,316', '$157,920', '$1,895,040'],
      ],
    },
    {
      kind: 'p',
      text: 'The inputs are the example’s, not a forecast. Two inputs matter most. Missed calls come from your phone records. The lost share needs honest measuring, for instance by texting a sample of missed callers and counting who still wanted a table.',
    },

    { kind: 'h2', id: 'jobs', text: 'The jobs an agent takes, one by one' },
    {
      kind: 'p',
      text: 'An agent with its own number, inbox and browser can do all of these. Each one runs inside the rules in the next section.',
    },
    {
      kind: 'list',
      items: [
        '**Answer and text back during service.** A missed call gets a text from the agent’s own number, in the restaurant’s name, within seconds: “Sorry we missed you, can I help with a booking?” The guest replies and the agent carries on the conversation. This is the [missed call text back](/blueprints/missed-call-text-back) job.',
        '**Take or change bookings in your booking system.** The agent signs in to the system you use with the login you give it, checks availability and books, moves or cancels. OpenTable, Resy and SevenRooms each offer their own tools; what an agent adds is that it works in whichever system you already run. Where your booking system has an official integration, use it first.',
        '**Confirm and remind.** A confirmation text on booking, a reminder the day before and a one-tap reply to cancel free tables that would otherwise be empty. This is the [appointment reminders](/blueprints/appointment-reminders) job, with a table in place of an appointment.',
        '**Handle large-party and event enquiries by email.** The agent answers the email from its own address, sends your event pack, asks the date, numbers and budget, and passes a complete enquiry to the manager with the whole thread.',
        '**Answer the standard questions.** Opening hours, parking, dress code, whether you take dogs, takeaway times and the menu, all from a fact sheet you write once.',
        '**Reorder from suppliers.** When your stock sheet shows an item under its level, the agent signs in to the supplier’s site and orders at your agreed price, then logs the delivery date. It stops before payment unless you give it your card, and holds anything over your price for a person. This is the [supplier reorder agent](/blueprints/supplier-reorder-agent).',
      ],
    },
    {
      kind: 'p',
      text: 'Takeaway orders by phone follow the same pattern: the agent takes the order from your menu, reads it back and sends it to your order system or kitchen printer. Check first that your order system lets it in; some do not.',
    },

    { kind: 'h2', id: 'allergy', text: 'Allergy and food safety always go to a person' },
    {
      kind: 'p',
      text: 'An allergy question can harm a guest if the answer is wrong, so set one hard rule. The agent never works out an allergen answer for itself. It either answers only from your own written allergen list, word for word, or it hands the question to a person.',
    },
    {
      kind: 'list',
      items: [
        '**From your list only.** The agent reads the dish’s entry in the allergen document you maintain and repeats it. If the dish or the allergen is not on the list, it says it cannot confirm.',
        '**Anything unusual goes to a person.** Cross-contact in the kitchen, a guest with a severe allergy, a question about a special or an ingredient change: the agent texts or rings the duty manager with the question and the guest’s number, and tells the guest a person will answer.',
        '**Say so on the booking.** Ask every booking whether anyone has an allergy and write the answer on the booking for the kitchen.',
      ],
    },
    {
      kind: 'p',
      text: 'The allergen list is yours and so is the responsibility. The agent only carries it to the guest.',
    },

    { kind: 'h2', id: 'rules', text: 'Rules for calls, texts and logins' },
    {
      kind: 'list',
      items: [
        '**It says it is an AI.** The FCC treats AI-generated voices on calls as artificial voices under the [Telephone Consumer Protection Act](' + FCC + '), and a guest should always know who they are speaking to.',
        '**Texts and calls go only to people who gave you their number.** A guest who booked or texted you has done so. A purchased list has not. The [phone-calling guide](/blog/can-ai-make-phone-calls) covers the law.',
        '**US texting needs registering first.** A US business that texts on an ordinary 10-digit number files a registration, known as 10DLC, before it sends ([The Campaign Registry](' + TCR + ')). Each business that texts needs its own; the steps are in [10DLC registration](/blog/10dlc-registration).',
        '**Logins are yours to give.** The agent signs in to your booking and supplier accounts only with the credentials you provide, stops at any identity check and never gets round a CAPTCHA.',
      ],
    },

    { kind: 'h2', id: 'costs', text: 'What the agent costs at list rates' },
    {
      kind: 'p',
      text: 'Obsession’s agents are paid by what each one uses, so the sum is a bill of parts. The example uses one restaurant with 65 calls a day of 2 minutes each, 600 texts a month, about 1,000 emails and 60 hours of booking and supplier browsing. Spoken calls also carry the persona’s own voice at $0.0676 a minute on top of the call minute. Model usage for the conversation is extra and starts at $0.975 per million input tokens.',
    },
    {
      kind: 'table',
      caption: 'Example monthly bill at Obsession list rates, 23 November 2026, one restaurant and 30 sites, registration included',
      cols: ['Piece', 'Rate', 'One restaurant', '30 sites'],
      rows: [
        ['US or UK phone number', '$2 a month', '$2.00', '$60.00'],
        ['Inbox', '$0.50 a month', '$0.50', '$15.00'],
        ['Calls (3,900 minutes a site)', '$0.012 a minute', '$46.80', '$1,404.00'],
        ['Persona voice on those calls', '$0.0676 a minute', '$263.64', '$7,909.20'],
        ['Texts (600 a site)', '$0.015 each', '$9.00', '$270.00'],
        ['Emails (1,000 a site)', '$0.40 per 1,000', '$0.40', '$12.00'],
        ['Browser (60 hours a site)', '$0.10 an hour', '$6.00', '$180.00'],
        ['Events (20,000 a site)', '$5 per million', '$0.10', '$3.00'],
        ['US texting registration, one campaign', '$17 a month ($25 once)', '$17.00', '$17.00'],
        ['Total at list rates', '', '$345.44', '$9,870.20'],
      ],
    },
    {
      kind: 'p',
      text: 'One restaurant sits inside Scale’s $588 of covered usage, and a group of 30 at about $9,870 is Enterprise territory, from $1,500 a month. At list rates Developer’s $20 covers $20 of usage, Startup’s $99 covers $111 and Scale’s $499 covers $588. Texting registration ($25 once, $17 a month per campaign) counts toward a plan’s covered usage, with one campaign per business that texts. The group sum assumes one campaign because every site texts under one brand; a group of separate companies registers one each. Without registration, each site’s agent costs about $328 a month, because each site brings its own number, inbox and usage.'
    },
    {
      kind: 'p',
      text: `For comparison, the US median wage for hosts and hostesses was [$14.05 an hour in May 2023](${BLS}). One person answering the phone for a 6-hour service on 5 days a week costs about $1,820 a month in wages alone, and cannot also seat the room.`,
    },

    { kind: 'h2', id: 'options', text: 'Your options, side by side', compare: true },
    {
      kind: 'p',
      text: 'There are four sensible ways to cover the phone. Each is described from its own pages as read on 23 November 2026.',
    },
    {
      kind: 'table',
      caption: 'Ways to cover restaurant calls and bookings, as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      compare: true,
      rows: [
        [
          'SevenRooms Voice AI',
          'Answers calls in peak service and after hours, books into the restaurant’s system and answers questions about hours, menus and policies',
          'No price on its pages; a free 15 minute demo',
          'Built for SevenRooms restaurants; the page says it does not guarantee every call is answered',
          'Restaurants already on SevenRooms',
        ],
        [
          'OpenTable with a voice partner (for example Loman AI)',
          'A voice agent can take, change and cancel reservations and check live availability, enrolled through OpenTable’s Integration Marketplace',
          'Set by each partner; check with OpenTable',
          'Phone bookings and questions on OpenTable; no supplier or event email work',
          'Restaurants already on OpenTable',
        ],
        [
          'Hostie, a restaurant voice agent',
          'Reservations and takeaway by phone or text; 20 languages from Premium, full reservation integrations on Premium, group cross-booking on Hospitality Plus',
          'Three plans plus Enterprise, no prices listed',
          'Plans differ on integrations, so check yours is included',
          'Full-service restaurants wanting a dedicated phone host',
        ],
        [
          'A host or front-of-house person',
          'Judgement, warmth and the full room; can answer a hard allergy question properly',
          'US median $14.05 an hour (May 2023)',
          'One place at a time; cannot take calls while seating guests; no night or weekend cover without paying for it',
          'Every restaurant, for the guests in front of it',
        ],
        [
          'Obsession (ours): one agent with its own number, inbox and browser',
          'Answers and texts back, books into whichever system you run, confirms and reminds, handles event email and reorders from suppliers, each step logged',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Needs your logins and your written fact and allergen sheets; no US texting until registered; a person takes allergy and unusual questions',
          'Restaurants and groups that want phone, inbox and supplier work in one place',
        ],
      ],
    },
    {
      kind: 'p',
      text: `Prices and plans as each provider lists them on its own page, read 23 November 2026: [Hostie](${HOSTIE}); OpenTable’s voice partner from [Loman AI’s integration release](${LOMAN}) of 3 December 2025.`,
    },
    {
      kind: 'p',
      text: 'If your booking system already has an official voice partner and the phone is your only gap, that partner may be all you need. The difference appears when the job crosses systems: the guest texts, then emails, and the supplier order sits in another tool.',
    },

    { kind: 'h2', id: 'obsession', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code.',
    },
    {
      kind: 'p',
      text: 'The restaurant job maps onto the pieces like this. The **phone number** is a US or UK number the agent owns: it sends and receives texts, makes and takes calls and receives sign-in codes, with texts going out in your restaurant’s name. The **inbox** is a real email address it owns, which sends and receives, keeps each thread and calls your webhook, a message to your own system, on every new email. The **browser** is a cloud browser whose sessions keep their logins between runs, so the agent signs in once to your booking system and your supplier accounts and stays signed in. A **sandbox**, a computer that starts only when a task needs to run code, reads your stock spreadsheet.',
    },
    {
      kind: 'art',
      art: {
        kind: 'flow',
        title: 'marlow.example · one persona',
        steps: [
          { label: 'Phone number', detail: 'Texts and calls guests, receives codes', tone: 'ok' },
          { label: 'Inbox', detail: 'Event and large-party enquiries', tone: 'ok' },
          { label: 'Browser', detail: 'Booking system and supplier sites', tone: 'ok' },
          { label: 'Sandbox', detail: 'Reads the stock sheet', tone: 'info' },
          { label: 'Event log', detail: 'Every message, page and order', tone: 'ok' },
        ],
        foot: 'Example: Marlow Kitchen is invented.',
      },
      caption: 'One persona holds the pieces together, so a guest who texts and then emails reaches the same agent',
    },
    {
      kind: 'p',
      text: 'A **persona** puts those pieces under one identity: one name, one address, one number, one browser profile. The guest who replies to the text and then rings meets the same agent with the whole history, and a code that arrives by text lands with the agent whose browser is waiting at the login. A waiting persona costs nothing, though its number and inbox bill monthly, and it answers a new message in about 50 ms without starting a machine. Every email, text, call and page lands in one **event log**, dated, with the email, screenshot or recording behind it, and a morning summary reaches Slack, email, a sheet or a PDF report.',
    },
    {
      kind: 'p',
      text: 'The usual way is four vendors: an email service, a phone and texting service, a cloud browser and a sandbox, each with its own key, bill and log. Jobs break at the seams, for example the code arrives at one vendor while the browser waits at another. If your job needs only one piece, a single specialist can be enough. The side-by-side is in [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b), and the wider picture in [the stack of pieces behind an AI agent](/blog/ai-agent-infrastructure-stack).',
    },
    {
      kind: 'p',
      text: 'Run it with no code by picking a blueprint, or describe the job in your own words and Obsession sets it up. Developers get the persona in one call, `obsession.personas.create({ inbox: true, phone: "US", browser: true })`, and each email and text arrives as an event. The same persona can also check what nearby restaurants’ public booking pages show for a Saturday, chase a late catering invoice or ask each site’s suppliers for this week’s prices, as one agent or one per site, each paid for by what it uses.',
    },
    {
      kind: 'cta',
      text: 'Start with the job that costs you most. Missed call text back needs only your restaurant’s number and the reply you want guests to get.',
      to: '/blueprints/missed-call-text-back',
      label: 'See the blueprint',
    },
    {
      kind: 'cta',
      text: 'No blueprint for your job? Describe it in your own words and an agent is set up to run it, with no code.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },

    { kind: 'h2', id: 'start', text: 'How to start in 5 steps' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Count last month’s unanswered calls from your phone system, and the share that were bookings.',
        'Write a one-page fact sheet: hours, address, parking, large-party rules, takeaway times and your allergen list as it stands.',
        'Start with missed-call texts only. Keep every booking and allergy answer with a person for the first 2 weeks.',
        'Give the agent a login to your booking system, check its bookings against the book each morning, then let it book.',
        'Add confirmations and reminders, then event email, then supplier reorders, one at a time.',
      ],
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best AI agent for restaurants?',
          a: 'It depends on the job. If your booking system has its own voice feature and the phone is your only gap, use that. If you need calls, texts, event email and supplier orders in one place, an agent with its own number, inbox and browser covers them. Compare them on the booking system they work with, what a person still has to do and the monthly cost.',
        },
        {
          q: 'Can an AI phone agent take reservations?',
          a: 'Yes. Voice agents from several vendors check availability and book, change or cancel reservations in the restaurant’s booking system, and OpenTable has an integration marketplace for them. Check that your system is supported before you buy.',
        },
        {
          q: 'Will the agent answer allergy questions?',
          a: 'Only from your own written allergen list, word for word. Anything the list does not cover, and any guest with a severe allergy, goes to a person straight away.',
        },
        {
          q: 'Does it have to say it is an AI?',
          a: 'Yes, as the safe rule and often the law. The FCC treats AI-generated voices as artificial voices under the TCPA, and Obsession’s agents say they are an AI to anyone they speak to.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'How much does an AI agent for a restaurant cost?',
          a: 'In the worked example, one restaurant’s agent was about $345 a month at Obsession list rates including a US texting campaign, about $328 without it, mostly the agent’s voice and call minutes. 30 sites came to about $9,870. Booking platforms and voice vendors listed their own plans; several show no price, so ask for a quote.',
        },
        {
          q: 'Can it reorder from suppliers?',
          a: 'Yes. It signs in to a supplier’s site with your account when stock falls under a level you set and orders at your agreed price. It stops before payment unless you give it your card, and holds anything over the agreed price for a person.',
          link: { label: 'Supplier reorder agent', to: '/blueprints/supplier-reorder-agent' },
        },
        {
          q: 'Can I use it without writing code?',
          a: 'Yes. Pick a blueprint, or describe the job in your own words, and Obsession sets up an agent to run it.',
          link: { label: 'AI agents for teams who don’t write code', to: '/no-code' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices, examples and the law',
      text: 'Obsession prices are its list rates on 23 November 2026 in US dollars. Other vendors’ details are as their pages read the same day; where a page lists no price, none is quoted. Every input in the sums is an example, and Marlow Kitchen is invented. The rules are general information from the regulators’ own texts, not legal advice. Allergen rules differ by country, and the allergen list remains the restaurant’s responsibility.',
    },
  ],

  sources: [
    { title: 'New study reveals revenue gaps from missed calls (Revmo, The State of Restaurant Calls 2026)', publisher: 'Fast Casual', url: REVMO, date: '2026-08-24' },
    { title: 'Voice AI missed call calculator', publisher: 'SevenRooms', url: SR_CALC, date: '2026-11-23' },
    { title: 'SevenRooms: Voice AI', publisher: 'SevenRooms', url: SR_HOME, date: '2026-11-23' },
    { title: 'Loman AI announces integration with OpenTable', publisher: 'Restaurant Dive (press release)', url: LOMAN, date: '2025-12-03' },
    { title: 'Pricing', publisher: 'Hostie', url: HOSTIE, date: '2026-11-23' },
    { title: 'Hosts and hostesses, restaurant, lounge, and coffee shop: May 2023 wages', publisher: 'U.S. Bureau of Labor Statistics', url: BLS, date: '2023-05' },
    { title: 'Declaratory Ruling on AI technologies and robocalls (FCC 24-17)', publisher: 'Federal Communications Commission', url: FCC, date: '2024-02-08' },
    { title: 'The Campaign Registry and 10DLC', publisher: 'The Campaign Registry', url: TCR, date: '2026' },
  ],

  related: ['/no-code', 'recipe:missed-call-text-back', 'recipe:supplier-reorder-agent', 'ai-voice-agent-for-small-business', 'ai-agents-for-small-business'],
}

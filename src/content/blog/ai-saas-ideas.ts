import type { BlogPost } from './types'

/* Agent search guide A7 (_research/seo/agent-search-23nov/PLAN.md and WRITER_BRIEF.md; approved by Seun 23 Nov 2026,
   "Yes, run the plan"). Primary "ai saas ideas"; secondaries from Google suggestions that no other post lists.
   Outside facts read on their own pages on 23 November 2026: Smith.ai pricing (Starter $300 a month for 30 calls),
   Instantly pricing (Starter $94, 5,000 emails), Chaser pricing (Compact $259 in the US), Front pricing (Starter $25
   a seat), UiPath pricing (Basic from $25 a month) and the FTC's CAN-SPAM guide. Obsession's rates come from
   dist/pricing/rates.html and src/lib/pricing/pricing.json (read 23 Nov); every cost in the table is worked out from
   those rates with its assumptions shown. Larkfield, Tallyroom and Kestrel Dental are invented. No income promises. */

const SMITH = 'https://smith.ai/pricing'
const INSTANTLY = 'https://instantly.ai/pricing'
const CHASER = 'https://www.chaserhq.com/pricing'
const FRONT = 'https://front.com/pricing'
const UIPATH = 'https://www.uipath.com/pricing'
const FTC = 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business'

export const post: BlogPost = {
  slug: 'ai-saas-ideas',
  title: 'AI SaaS ideas: 20 products you can build when every user’s agent has its own phone, inbox and browser',
  dek: 'Twenty software ideas that used to need people on phones, in inboxes and in portals. Each shows who pays for the job today, what the agent does and what it costs to run for one user, worked out at list rates.',
  metaTitle: 'AI SaaS ideas you can build on agents’ phones and inboxes',
  description:
    '20 AI SaaS ideas, from micro SaaS to agent products. Each shows who pays today, what the agent does and its running cost per user at list rates.',
  answer:
    'The best AI SaaS ideas now are jobs where each customer’s agent needs contact details of its own: an inbox to answer, a number to call and text from, or a browser that stays signed in to a portal. On Obsession’s list rates, such an agent costs from under $1 to about $21 a user a month in infrastructure, and a voice that speaks for itself adds $0.0676 a minute. Model usage is billed on top.',
  primaryKeyword: 'ai saas ideas',
  keywords: ['ai micro saas ideas', 'ai saas business ideas', 'ai agent app ideas', 'ai saas ideas 2026'],
  category: 'Build agent products',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'A clinic’s front desk',
      who: 'One number for one clinic, answered by an agent that says it is an AI',
      status: { tone: 'ok', text: 'Booked' },
      rows: [
        { time: 'Tue 18:42', text: 'Call on the clinic’s own number, after hours', detail: '3 minutes 10 seconds, transcript kept', tone: 'info' },
        { time: 'Tue 18:46', text: 'Text to the caller: “Thursday 09:30 with Dr Okafor?”', tone: 'ok' },
        { time: 'Tue 18:51', text: 'Reply: “Yes please”', tone: 'ok' },
        { time: 'Tue 18:51', text: 'Booking written to the clinic’s diary, confirmation emailed', tone: 'ok' },
        { time: 'Wed 08:00', text: 'Morning report to the practice manager', detail: '11 calls, 9 booked, 2 handed to a person', tone: 'info' },
      ],
      foot: 'One product, one number per clinic, every call and text in an event log. Example: Kestrel Dental and every time here are invented.',
    },
  },
  blocks: [
    { kind: 'h2', id: 'what-works-now', text: 'Which AI SaaS ideas work now?' },
    {
      kind: 'p',
      text: 'The strongest AI SaaS ideas are jobs where every customer’s agent needs contact details of its own. It answers from an inbox, calls and texts from a number, or stays signed in to a portal in a browser. These jobs used to need people, so customers already pay for them, and an agent now does them for each customer separately.',
    },
    {
      kind: 'p',
      text: 'An agent that only writes text is easy to copy. An agent that holds a number, an inbox and a login for each of your customers is a product, because the customer sees it take the call, send the chaser or fetch the status.',
    },

    { kind: 'h2', id: 'why-now', text: 'What changed for people who build software' },
    {
      kind: 'p',
      text: 'Until now, giving each user’s agent a real number, a real inbox and a signed-in browser meant stitching together three to five vendors. Obsession’s toolkit puts them under one identity, called a [persona](/personas), through one API and one bill. A persona costs nothing while it waits for a reply.',
    },
    {
      kind: 'p',
      text: 'That changes the sum for a small product. Waiting costs nothing, and you pay per call minute, text, browser hour and email, so a product can serve 10 customers or 10,000 on the same code, and the bill follows usage.',
    },

    { kind: 'h2', id: 'phone-ideas', text: 'Ideas for jobs that live on the phone' },
    {
      kind: 'p',
      text: 'Phone work is the biggest group, because receptionists and dispatchers are paid by the hour. For comparison, on 23 November 2026 [Smith.ai](' + SMITH + ') listed a Starter plan at $300 a month for 30 calls and a Basic plan at $810 for 90.',
    },
    {
      kind: 'list',
      items: [
        '**1. A front desk for each clinic or salon.** Buyers: practice managers, who pay a receptionist or a service like Smith.ai. The agent answers after hours, books, texts confirmation and hands hard calls to a person. Pieces: a number per location, calls, texts.',
        '**2. Missed call text back for local trades.** Buyers: plumbers, electricians and garages, who lose the job when nobody picks up. The agent texts each missed caller within seconds and books the visit. Pieces: a number, texts.',
        '**3. A tenant line for each building.** Buyers: small landlords and property managers, who pay staff to log repairs. The agent takes the report by call or text, asks for a photo and opens the job. Pieces: a number, calls, texts. See the [AI receptionist use case](/use-cases/ai-receptionist) for the call flow.',
        '**4. Phone orders and reservations for restaurants.** Buyers: owners who miss calls in the dinner rush. The agent takes the order or table for 2 and sends the confirmation text. Pieces: a number, calls, texts.',
        '**5. Speed to lead for agencies’ clients.** Buyers: agencies that sell leads to local firms and are judged on first reply time. The agent calls each new form lead within a minute, only people who gave their number on the form. Pieces: a number, calls, texts. See the [speed to lead blueprint](/blueprints/speed-to-lead-callback).',
        '**6. Check calls for freight brokers.** Buyers: brokers who pay dispatchers to ring carriers for load status. The agent calls each carrier on file at set times and logs the answer. Pieces: a number, calls. See the [load tracking blueprint](/blueprints/load-tracking).',
      ],
    },

    { kind: 'h2', id: 'inbox-ideas', text: 'Ideas for jobs that live in an inbox' },
    {
      kind: 'p',
      text: 'Inbox jobs need an address per customer, so replies come to the agent and not to your own mailbox. For scale, [Front](' + FRONT + ') listed its Starter plan at $25 a seat a month, billed annually, on 23 November 2026.',
    },
    {
      kind: 'list',
      items: [
        '**7. A sales rep for each founder.** Buyers: founders who pay for an outbound tool, such as [Instantly](' + INSTANTLY + '), whose Starter plan listed $94 a month for 5,000 emails on 23 November 2026. The agent works warm and inbound leads from its own address: first reply, follow-up, booking. Pieces: inboxes, emails. Cold email has rules, set out in [how to build an AI SDR](/blog/how-to-build-an-ai-sdr).',
        '**8. An invoice collector.** Buyers: small firms that pay for chasing software such as [Chaser](' + CHASER + '), listed at $259 a month on monthly billing for its Compact plan on 23 November 2026. The agent sends polite reminders from a branded inbox and texts customers who gave a number. Pieces: an inbox, emails, texts. See the [invoice collector blueprint](/blueprints/invoice-collector).',
        '**9. A document chaser for accountants.** Buyers: practices that spend January asking clients for receipts. The agent asks each client, in their own thread, until the file arrives. Pieces: an inbox, emails, texts. See the [document chaser blueprint](/blueprints/document-chaser).',
        '**10. A bookkeeping inbox.** Buyers: freelancers and shops who forward receipts to a bookkeeper. Each user gets an address, and the agent reads the receipt and files it. Pieces: an inbox, a sandbox, emails. This is the Tallyroom example in the [build agent products blueprints](/blueprints/build-agent-products).',
        '**11. A second support inbox.** Buyers: small software teams that pay per seat for a shared inbox. The agent drafts answers and hands the rest to a person, each customer on an address of their own. Pieces: an inbox, emails. See the [inbox agent blueprint](/blueprints/inbox-agent).',
      ],
    },

    { kind: 'h2', id: 'browser-ideas', text: 'Ideas for jobs that live in a portal or on the web' },
    {
      kind: 'p',
      text: 'Portal jobs need a browser that keeps its login for weeks, which is what most bots lose. Robotic process automation tools do part of this work: on 23 November 2026 [UiPath](' + UIPATH + ') listed its Basic plan from $25 a month, with 2 robots and further licences possibly needed, and its page says the Basic plan is changing.',
    },
    {
      kind: 'list',
      items: [
        '**12. A portal checker for each supplier account.** Buyers: restaurants and workshops whose staff log in to wholesaler sites to check stock and prices. The agent signs in with the login the customer provides and writes the findings to a sheet. Pieces: a browser, an inbox for codes.',
        '**13. A reorder agent for small shops.** Buyers: owners who reorder by hand every week. The agent checks stock, builds the supplier order and stops before payment unless the customer gives it a card. Pieces: a browser, an inbox. See the [supplier reorder blueprint](/blueprints/supplier-reorder-agent).',
        '**14. A travel booker for small teams.** Buyers: firms that pay an assistant to compare and book trips. The agent searches, holds the booking and sends the itinerary. Pieces: a browser, an inbox. See the [travel booking blueprint](/blueprints/travel-booking-agent).',
        '**15. A price watch for online sellers.** Buyers: shop owners who check competitors by hand. The agent subscribes to each competitor’s emails, visits their pages daily and reports changes. Pieces: a browser, an inbox. [Competitor price tracking tools](/blog/best-competitor-price-tracking-tools) compares what is on sale today.',
      ],
    },

    { kind: 'h2', id: 'sandbox-ideas', text: 'Ideas that run code or test other agents' },
    {
      kind: 'list',
      items: [
        '**16. A spreadsheet analyst.** Buyers: operations managers who wait on an analyst. A user emails a file and a question, and the agent runs the analysis in a sandbox and replies with the chart. Pieces: a sandbox, an inbox.',
        '**17. A nightly test for other people’s agents.** Buyers: companies running a support or voice bot who find out about breaks from customers. The agent calls and messages the bot every night and reports what changed. Pieces: a number, a browser, an inbox. See the [nightly agent evaluation blueprint](/blueprints/nightly-agent-evaluation) and [AI voice agent testing](/blog/ai-voice-agent-testing).',
        '**18. Test users for sign-up flows.** Buyers: product teams who test sign-up by hand before each release. A persona signs up with a fresh email and number, catches the code and reports where it failed. Pieces: a number, texts, an inbox. See the [sign-in code check blueprint](/blueprints/sign-in-code-check).',
      ],
    },

    { kind: 'h2', id: 'messaging-ideas', text: 'Ideas for chat apps' },
    {
      kind: 'list',
      items: [
        '**19. A personal assistant on iMessage.** Buyers: coaches, advisers and agents whose clients message them all day. Each client texts one line and the agent answers or books. Pieces: an iMessage line. See the [iMessage assistant blueprint](/blueprints/imessage-assistant).',
        '**20. A concierge for a community.** Buyers: membership and course businesses that answer the same questions in Telegram or Slack. The agent answers from the member’s own history. Pieces: Telegram or Slack, which are free on every plan, and the event log.',
      ],
    },

    { kind: 'h2', id: 'costs', text: 'What each idea costs to run per user' },
    {
      kind: 'p',
      text: 'These are Obsession’s list rates as of 23 November 2026, for one user or location in a month, with the usage assumed shown beside each. Change the usage and the sum follows. Model tokens are billed on top, from $0.975 per million input tokens on Auto.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'One clinic’s front desk, a month',
        rows: [
          { label: 'Number', value: '$2.00', note: 'a US or UK number, $2 a month' },
          { label: '400 calls of 3 minutes', value: '$14.40', note: '1,200 minutes at $0.012' },
          { label: '300 texts', value: '$4.50', note: '$0.015 each, sent or received' },
        ],
        total: { label: 'With your own voice agent', value: '$20.90', note: 'A persona’s own voice adds $81.12' },
      },
      caption: 'The sum for idea 1, worked out at list rates. Example usage: 400 calls and 300 texts a month at one invented clinic.',
    },
    {
      kind: 'table',
      caption: 'Infrastructure cost per user a month at Obsession list rates, 23 November 2026',
      cols: ['Idea', 'Pieces', 'Usage assumed', 'Cost a month'],
      rows: [
        ['1. Clinic front desk', 'Number, calls, texts', '400 calls of 3 minutes, 300 texts', '$20.90'],
        ['2. Missed call text back', 'Number, texts', '60 missed calls, 90 texts', '$3.35'],
        ['3. Tenant line', 'Number, calls, texts', '20 calls of 3 minutes, 150 texts', '$4.97'],
        ['4. Restaurant phone line', 'Number, calls, texts', '600 minutes, 300 texts', '$13.70'],
        ['5. Speed to lead', 'Number, calls, texts', '150 leads: 450 minutes, 150 texts', '$9.65'],
        ['6. Freight check calls', 'Number, calls', '100 calls of 4 minutes', '$6.80'],
        ['7. Sales rep', 'Inboxes, emails', '2 inboxes, 2,000 emails', '$1.80'],
        ['8. Invoice collector', 'Inbox, emails, texts', '300 emails, 40 texts', '$1.22'],
        ['9. Document chaser', 'Inbox, emails, texts', '40 emails, 20 texts', '$0.82'],
        ['10. Bookkeeping inbox', 'Inbox, sandbox, emails', '200 emails, 100 receipts of 20 seconds', '$0.65'],
        ['11. Second support inbox', 'Inbox, emails', '2,000 emails', '$1.30'],
        ['12. Portal checker', 'Browser, inbox', '20 browser hours', '$2.50'],
        ['13. Reorder agent', 'Browser, inbox, emails', '10 browser hours, 100 emails', '$1.54'],
        ['14. Travel booker', 'Browser, inbox, emails', '4 browser hours, 60 emails', '$0.92'],
        ['15. Price watch', 'Browser, inbox, emails', '30 browser hours, 400 emails', '$3.66'],
        ['16. Spreadsheet analyst', 'Sandbox, inbox', '60 tasks of 2 minutes, 1 GiB memory', '$0.77'],
        ['17. Nightly agent test', 'Number, calls, browser, inbox', '30 calls of 2 minutes, 5 browser hours', '$3.72'],
        ['18. Sign-up test users', 'Number, texts, inbox, emails', '300 code texts, 500 emails', '$7.20'],
        ['19. iMessage assistant', 'iMessage line', '$170 a line, shared by 100 clients', '$1.70 a client'],
        ['20. Community concierge', 'Telegram, event log', '500 events a member', 'Under $0.01'],
      ],
    },

    { kind: 'h2', id: 'margin', text: 'Where the margin is decided' },
    {
      kind: 'p',
      text: 'Voice decides the margin of every phone idea. A call minute is $0.012, but when a persona speaks for itself it adds $0.0676 a minute, 5.6 times as much. For one clinic, that is $81.12 on top of $20.90 for the same 1,200 minutes.',
    },
    {
      kind: 'p',
      text: 'That is a design choice, and it works in your favour when you know it early. Bring your own voice agent and you pay only for the call, or price the speaking voice into the plan you sell. Across 240 clinics the two choices are $5,016 and $24,485 a month. At 10,000 locations they are $209,000 and $1,020,200, at list rates and the same usage.',
    },
    {
      kind: 'p',
      text: 'Fixed costs sit outside the per-user figures. US texting needs a registered campaign: $25 once, then $17 a month while it is active, so it is shared across all the users on one campaign. A paid plan’s fee covers that much usage at list rates, so the Free plan’s 3 inboxes carry an early prototype.',
    },

    { kind: 'h2', id: 'choose', text: 'How to choose which idea to build' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick a buyer who already pays for the job.** A pass: you can name the price on a public list, or the hours they spend.',
        '**Work out the cost for one user.** A pass: the table’s sum, with your own usage, is under a fifth of what you plan to charge.',
        '**Check the agent rules.** A pass: every call and text goes to someone who gave the business their number, and the agent says it is an AI.',
        '**Run it for a handful of real users before you build billing.** A pass: most of them keep it on after the first month.',
        '**Watch the numbers the buyer cares about.** A clinic watches calls answered and bookings. A trade watches jobs won from missed calls. An accountant watches documents received by the deadline.',
      ],
    },

    { kind: 'h2', id: 'goes-wrong', text: 'What goes wrong with AI SaaS products' },
    {
      kind: 'list',
      items: [
        '**Rules for outreach.** The [FTC’s CAN-SPAM guide](' + FTC + ') says “the law makes no exception for business-to-business email”, and opt-outs must be honoured within 10 business days. Read [what AI agents may and won’t do](/agents) before you design a sending idea.',
        '**Payment.** The agents stop before payment unless the customer gives them a card, so make handing over the card a clear step in your product.',
        '**Texting in the US.** Carriers require registration, and a rejected filing costs $15 to send again. File early.',
        '**Logins.** An agent signs in only with logins the customer provides. Make the hand-off a clear step in your onboarding.',
        '**Ideas to leave out.** Job-application bots, slot sniping, ticket scalping and fake reviews.',
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'One persona per user, with every piece the job needs' },
    {
      kind: 'p',
      text: 'Most of these ideas need three or four pieces. An **inbox** is a real address the agent owns: it sends and receives, keeps each thread and calls your webhook, a web address your code listens on, for every new email. A **phone number**, US or UK, sends and receives texts and takes and makes calls, and the texts go out from that number in your customer’s business name. A **browser** is a cloud browser whose sessions keep their logins, so the agent signs in once with the logins you give it and stays signed in. A **sandbox** is a computer started only when a task needs to run code.',
    },
    {
      kind: 'p',
      text: 'A [persona](/personas) puts those pieces under one identity per end user: one address, one number, one browser profile. The sign-in code that arrives by text reaches the same agent whose browser waits at the login page. A caller who texts and then emails reaches the same agent, with the whole history. A persona costs nothing while it waits, though its number ($2) and inbox ($0.50) bill monthly, and it answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in one event log, dated, with the email, screenshot or recording behind it. For a product, that log is your support tool and your customer’s proof of what the agent did, and it is $5 per million events. One call creates the persona and one webhook receives every event:',
    },
    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'Signup to first event',
        who: 'Your code, one new customer',
        rows: [
          { time: 'Call', text: 'obsession.personas.create({ inbox: true, phone: "US", browser: true })', detail: 'A number, an inbox and a browser under one identity', tone: 'info' },
          { time: 'Call', text: 'obsession.events.subscribe({ url, events: ["*"] })', detail: 'One signed webhook for every piece', tone: 'info' },
          { time: 'Event', text: 'call.received', detail: 'Someone rings the number', tone: 'ok' },
          { time: 'Event', text: 'call.ended', detail: 'Length and transcript kept', tone: 'ok' },
          { time: 'Event', text: 'sms.received', detail: 'The caller replies to the text', tone: 'ok' },
        ],
        foot: 'Call shapes as shown on /developers on 23 November 2026. The event log is $5 per million events.',
      },
      caption: 'Each customer’s persona writes its events to one log, and they reach your webhook in the same shape. A persona is free while it waits.',
    },
    {
      kind: 'p',
      text: 'The usual build is four vendors inside your product: an email API, a phone and texting API, a cloud browser and a sandbox. Each has its own key, bill, webhook and log. You keep four integrations working, and jobs break at the seams, when the code arrives at one vendor while the browser waits at another, or when the call log and the email thread live in different places. Obsession gives you one persona per user, one webhook and one bill to price your plans against.',
    },
    {
      kind: 'p',
      text: 'If your product needs only one piece, a single specialist can be enough. For the whole picture, see [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) and [the AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack). Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. That holds for one agent or ten thousand, each with its own identity.',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. Builders use the API, the SDK or MCP at [/developers](/developers), for example obsession.inboxes.create() for an address and obsession.browsers.create({ home: "US" }) for a portal, with page.visited events keeping each page and its screenshot. Teams that don’t write code pick a blueprint, or describe the job at [/no-code](/no-code), and Obsession sets up the agent.',
    },
    {
      kind: 'p',
      text: 'Once a persona has its own number, inbox and browser, the same one can do more. The clinic’s agent can also chase unpaid invoices from the same inbox, a trades business can add a price watch on suppliers, and an accountant’s agent can fetch statements from the portals clients give it.',
    },
    {
      kind: 'cta',
      text: 'Build one of these ideas on the API, with a number, an inbox and a browser for each user. The Free plan includes 3 inboxes and needs no card.',
      to: '/developers',
      label: 'Start free',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI SaaS ideas' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are good AI SaaS ideas?',
          a: 'Good AI SaaS ideas are jobs that people already pay for and that need an agent with contact details of its own, such as answering a clinic’s calls, chasing invoices from a branded inbox or checking a supplier portal. The 20 here each show who pays today and the cost per user at list rates.',
        },
        {
          q: 'What are good AI micro SaaS ideas?',
          a: 'Micro SaaS ideas work best when one agent serves one small business. Missed call text back costs about $3.35 a business a month at list rates with 60 missed calls, and a document chaser about $0.82 a client. The document chaser starts on the Free plan’s inboxes. Missed call text back sends texts, so it needs a paid plan.',
        },
        {
          q: 'How much does it cost to run an AI SaaS product?',
          a: 'At Obsession’s list rates on 23 November 2026, the infrastructure for one user ran from under $1 to about $21 a month across the 20 ideas, before model usage. A persona’s own voice adds $0.0676 a minute to a call. Plans are Free, then $20, $99 or $499 a month, with usage per piece.',
          link: { label: 'See every rate', to: '/pricing' },
        },
        {
          q: 'Do I need to write code to build one?',
          a: 'To build a product on the API, yes, with the SDK or MCP server. To run a job for yourself or clients without code, pick a blueprint or describe the job in plain words, and Obsession sets up the agent.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'Can I sell AI SaaS on top of Obsession?',
          a: 'Yes. You build on the API, and you can run blueprints for clients under your own brand.',
          link: { label: 'See how agencies use it', to: '/agencies' },
        },
        {
          q: 'Are AI SaaS businesses still worth starting in 2026?',
          a: 'It depends on the buyer. Products that do a job a person is paid for, and charge less than that person, have a price to compare against. Products that only add a chat box have nothing to compare against.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About these ideas',
      text: 'Outside prices come from each provider’s own page, read on 23 November 2026, and may change. Obsession’s costs are list rates, before model usage and taxes, and are not a promise of income. Kestrel Dental, Larkfield and every time in the pictures are invented.',
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'Smith.ai', url: SMITH },
    { title: 'Pricing', publisher: 'Instantly', url: INSTANTLY },
    { title: 'Pricing', publisher: 'Chaser', url: CHASER },
    { title: 'Pricing', publisher: 'Front', url: FRONT },
    { title: 'Pricing', publisher: 'UiPath', url: UIPATH },
    { title: 'CAN-SPAM Act: a compliance guide for business', publisher: 'Federal Trade Commission', url: FTC },
  ],

  related: ['/use-cases/ai-agents-for-startups', '/use-cases/ai-agents-for-saas', '/use-cases/ai-agent-platforms', 
    '/developers',
    '/blueprints/build-agent-products',
    '/no-code',
    'recipe:inbox-agent',
    'how-to-build-an-ai-sdr',
    'what-to-build-with-ai-customers',
  ],
}

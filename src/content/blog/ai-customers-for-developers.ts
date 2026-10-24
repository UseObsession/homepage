import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* The AI customers series, article 9 (24 Oct 2026): AI customers for developers. It owns "email api for ai agents"
   (primary), "give your ai agent a phone number" and "mcp server ecommerce". Readers: engineers and agent builders who
   need an agent to be a customer of other companies (rival tracking as a feature, prospect research, release checks,
   merchant checks), and who are deciding whether to build it.
   The argument: an agent session lasts minutes, a customer lasts months, so the engineering moves from compute to
   state. The build part by part (identities, sign up programs per platform, durable waiting, an evidence store with the
   raw email, headers, DKIM result checked on arrival with its key, and a hash, typed facts), the hard parts at scale,
   build or buy with published prices and a worked sum for 200 companies, and how to call AI customers over MCP and an
   API (Obsession's 5 verbs, in the words of useobsession.com/developers, opened on 24 Oct 2026).
   Opened on 24 Oct 2026 at each source: AgentMail pricing, Browserbase pricing, Twilio US SMS pricing, Cloudflare Durable
   Objects pricing (updated 18 Oct 2026) and Workers pricing, RFC 6376 (message archiving is not a design goal; key
   replacement by selector), Shopify's agents docs (UCP MCP servers), Cloudflare's Verified bots docs, and the library
   in _research/seo/plan/ai-customers/facts.json (AgentMail and Browserbase docs, Mailchimp double opt in, Cloudflare
   Web Bot Auth, Shopify Storefront API, Anthropic's Haiku 5.5 price, MCP, Google Ads invalid clicks).
   "Customer agent" appears only as the unit an API returns. The MCP address is written without its scheme, because
   the build treats any full outside URL in the text as a source. Left out on purpose: Google Workspace prices (annual
   or flexible not confirmed), ChatGPT agent (retired), any Obsession price (none is listed). fernhollow.example,
   rival domains and the 200 company volumes are invented. No dashes. */

const AGENTMAIL_DOCS = 'https://docs.agentmail.to/welcome'
const TWILIO = 'https://www.twilio.com/en-us/sms/pricing/us'
const BB_DOCS = 'https://docs.browserbase.com/introduction/what-is-browserbase'
const AGENTMAIL_PRICING = 'https://www.agentmail.to/pricing'
const BB_PRICING = 'https://www.browserbase.com/pricing'
const DOUBLE_OPTIN = 'https://mailchimp.com/help/about-double-opt-in/'
const BOT_AUTH = 'https://blog.cloudflare.com/signed-agents/'
const SHOPIFY_STOREFRONT = 'https://shopify.dev/docs/api/storefront'
const CF_DO = 'https://developers.cloudflare.com/durable-objects/platform/pricing/'
const CF_WORKERS = 'https://developers.cloudflare.com/workers/platform/pricing/'
const RFC_DKIM = 'https://www.rfc-editor.org/rfc/rfc6376'
const HAIKU = 'https://platform.claude.com/docs/en/about-claude/pricing'
const INVALID_CLICKS = 'https://support.google.com/google-ads/answer/42995?hl=en'
const MCP = 'https://modelcontextprotocol.io/docs/getting-started/intro'
const SHOPIFY_AGENTS = 'https://shopify.dev/docs/agents'

export const post: BlogPost = {
  slug: 'ai-customers-for-developers',
  title: 'AI customers for developers: an email API, a phone number and a browser for your agent',
  dek: 'How to give an AI agent an inbox, a phone number and a browser and keep it a customer of thousands of companies for months, the hard parts at scale, what the parts cost at published prices, and how to call it over MCP.',
  metaTitle: 'Email API for AI agents: how to build AI customers at scale',
  description:
    'Email API for AI agents, phone numbers and browsers: how to build AI customers, the hard parts at scale, published prices, and 5 verbs over MCP and an API.',
  answer:
    'An email API for AI agents, such as AgentMail, gives each agent its own inbox, and an AI customer needs that plus a phone number, a browser, a sign up program for each platform, waiting that costs nothing for months, and an evidence store that keeps each email with its DKIM result and a hash. You can build it from services such as AgentMail, Twilio, Browserbase and Cloudflare Durable Objects, or call a hosted system over MCP and an API.',
  primaryKeyword: 'email api for ai agents',
  keywords: [
    'give your ai agent a phone number',
    'mcp server ecommerce',
    'ai agent inbox',
    'ai agent email address',
    'ai agent phone number',
    'durable objects hibernation',
    'dkim verification',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-24',
  readingMinutes: 10,
  order: 9,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'customer agent ca_8f21 · fernhollow.example',
      who: 'Its own inbox, a UK number and a browser, made for this company at 09:00',
      status: { tone: 'info', text: 'Asleep until the next email' },
      rows: [
        { time: '09:00', text: 'Signed up by program', detail: 'The store’s form platform, learned once, 4 seconds', tone: 'ok' },
        { time: '09:01', text: 'Confirmed double opt in', detail: 'Opened the confirmation email and clicked its link', tone: 'ok' },
        { time: '09:01', text: 'Asleep', detail: 'No process runs and nothing is billed for time', tone: 'info' },
        { time: '09:03', text: 'Woke: welcome email', detail: 'Raw email kept with a hash. DKIM pass, key stored', tone: 'ok' },
        { time: '09:03', text: 'Fact: welcome_email.arrived', detail: '2 minutes after sign up, with code FERN10', tone: 'ok' },
      ],
      foot: 'An example on an invented store, as an API might return 1 customer agent. Each fact links to its evidence.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Engineers who build agents to track rivals, research prospects or test their own sign up flow need the agent to be a customer: to receive the welcome email, the login code by text and the price change 3 weeks later, and to show what arrived in a form anyone can check.',
    },
    {
      kind: 'p',
      text: 'Each part exists as an API. [AgentMail](' +
        AGENTMAIL_DOCS +
        ') gives agents their own inboxes to send, receive and act on email, [Twilio](' +
        TWILIO +
        ') leases phone numbers that receive texts, and [Browserbase](' +
        BB_DOCS +
        ') runs browsers that agents drive. The work is in joining them into a customer that lasts months at thousands of companies, at almost no cost while it waits, with evidence that holds up.',
    },
    {
      kind: 'stat',
      value: '$1.15',
      label: 'a month to lease a US long code number for texts and calls',
      source: 'Twilio US SMS pricing',
      href: TWILIO,
    },

    { kind: 'h2', id: 'what-you-build', text: 'What you are building' },
    {
      kind: 'p',
      text: `${AI_CUSTOMER.definition} In an API, each one is returned as a customer agent: 1 company, 1 identity, and the evidence it has kept. The definition and its neighbours are in [AI customers](/blog/ai-customers).`,
    },
    {
      kind: 'p',
      text: 'A customer lasts months where an agent session lasts minutes, so most of the engineering moves from compute to state: an identity that keeps working, waiting that costs nothing, and evidence that still checks out after the sender has replaced its keys. A system that does this has 5 parts.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Identities:** an inbox per company, a phone number per market and a browser.',
        '**Sign up programs:** 1 per platform, learned once and replayed as code.',
        '**Durable waiting:** state that sleeps until an email, a text or a timer wakes it.',
        '**An evidence store:** each email and page as it arrived, with its time, DKIM result and hash.',
        '**Typed facts:** 1 sentence each, with a link to its evidence, sent where they are used.',
      ],
    },

    { kind: 'h2', id: 'the-build', text: 'The build, part by part' },
    { kind: 'h3', id: 'identities', text: 'Identities: an inbox, a phone number and a browser' },
    {
      kind: 'p',
      text: 'Give each AI customer its own inbox at each company it joins, so every email belongs to 1 company and 1 watch. An email API for AI agents creates one in a single call. [AgentMail’s pricing](' +
        AGENTMAIL_PRICING +
        ') lists 10 inboxes for $20 a month on Developer, 150 for $200 on Startup, and $2 a month for each extra inbox. Gmail’s tabs are Gmail’s own sorting, so if you need to know whether an email landed in Promotions, that inbox has to be a Gmail mailbox.',
    },
    {
      kind: 'p',
      text: 'A phone number per market receives texts and login codes. Twilio lists a US long code at $1.15 a month and $0.0083 per SMS segment sent or received, plus carrier fees, and says US A2P 10DLC numbers are subject to registration onboarding fees. Take each text by webhook and file it under the company that sent it.',
    },
    {
      kind: 'p',
      text: 'A browser opens pages, fills in forms and reaches checkout. Browserbase describes itself as a platform for agents that browse and interact with the web like humans, and [its pricing](' +
        BB_PRICING +
        ') includes 100 browser hours on the $20 Developer plan, then $0.12 a browser hour.',
    },
    {
      kind: 'p',
      text: 'Every identity is made for the job and belongs to whoever runs it. It never uses a real person’s name, address or card.',
    },

    { kind: 'h3', id: 'sign-up', text: 'Sign up programs, 1 per platform' },
    {
      kind: 'p',
      text: 'An AI customer signs up through the forms any customer uses: the pop up, the footer form, the checkout tick box, the trial form. With double opt in, [a subscriber clicks a link in a confirmation email or text](' +
        DOUBLE_OPTIN +
        ') before being added, so a sign up is finished only when the inbox has received that email and the link has been opened.',
    },
    {
      kind: 'p',
      text: 'Most companies collect sign ups on a few email and form platforms, so treat each platform as 1 program. Work out the first sign up on a platform with an agent, record the steps, and replay them as code at every company built the same way. Keep the agent for forms no program recognises, and version every program, because a page change can break one without raising an error.',
    },
    {
      kind: 'p',
      text: 'Identify your agent, and stop where a site says no. Cloudflare’s [Web Bot Auth](' +
        BOT_AUTH +
        ') lets bots and agents sign their requests with HTTP message signatures, and [Shopify’s Storefront API](' +
        SHOPIFY_STOREFRONT +
        ') gives signed traffic higher rate limits than unsigned bots. An AI customer never gets round a CAPTCHA or a bot wall. It records the block as a finding.',
    },

    { kind: 'h3', id: 'waiting', text: 'Durable waiting' },
    {
      kind: 'p',
      text: 'Much of what a customer receives arrives late: the reminder the next day, the win back email after 60 days, the renewal notice after 11 months. A process kept running for each customer would bill for every hour of that wait, so keep each AI customer as state that sleeps and wakes on 3 events: an email, a text or a timer.',
    },
    {
      kind: 'p',
      text: 'On Cloudflare, [Durable Objects that are idle and eligible for hibernation are not billed for duration](' +
        CF_DO +
        '). Requests, which include alarm invocations, come with 1 million a month on the Workers Paid plan and then cost $0.15 a million, and that plan has a [minimum charge of $5 a month](' +
        CF_WORKERS +
        '). An AI customer that wakes 30 times a month makes 30 requests.',
    },

    { kind: 'h3', id: 'evidence-store', text: 'The evidence store' },
    {
      kind: 'p',
      text: 'Store each email exactly as it arrived, in an append only store: the raw message, its headers, the time it landed and a hash of its bytes. Keep each page capture the same way, with its address and time. Verify the DKIM signature on arrival, and keep the public key you verified it with.',
    },
    {
      kind: 'p',
      text: 'Arrival is the moment to check. [RFC 6376](' +
        RFC_DKIM +
        '), the DKIM standard, lists message archiving among the things it is not designed for, and describes how a domain replaces a key by publishing a new selector and then removing the old public key. A genuine email checked a year later can fail only because its key is gone. A result recorded on arrival, kept with the key and the hash, still shows which domain signed the message and that it hasn’t changed since.',
    },

    { kind: 'h3', id: 'typed-facts', text: 'Typed facts' },
    {
      kind: 'p',
      text: 'Turn each piece of evidence into facts with a type, a company, a time, 1 sentence and a link back: welcome_email.arrived, code.refused, price.changed. Use plain code where the format is fixed, such as a price on a page, and a small model where it isn’t, such as telling a welcome from a reminder. [Anthropic lists Claude Haiku 5.5](' +
        HAIKU +
        ') at $0.10 per million input tokens and $0.50 per million output tokens, so classifying 30 emails of about 4,000 tokens each, with a short answer for each, costs about 2 cents.',
    },
    {
      kind: 'p',
      text: 'Version the rules that turn evidence into facts. When a rule changes, derive the facts again from the stored evidence instead of visiting the company again, because last month’s emails can’t be collected twice.',
    },

    { kind: 'h2', id: 'hard-parts', text: 'The hard parts at scale' },
    {
      kind: 'p',
      text: 'For 5 companies, a developer can join these parts in a few days. At thousands, most of the work sits in 7 places.',
    },
    {
      kind: 'list',
      items: [
        '**The long tail of forms.** A few platforms cover most sign ups. The rest each have their own form, their own confirmation step and their own changes after every release.',
        '**Pages that change.** A replayed program can break when a field moves, so each one needs a check that it still works and a fall back to an agent.',
        '**Waiting for months,** with timers that survive deploys and wake ups that run once, even when an event arrives twice.',
        '**Evidence that outlives key changes,** checked on arrival and stored with its key and hash.',
        '**Telling messages apart.** A welcome, a reminder, a price change and an order confirmation look alike to a parser, and the categories differ by sector.',
        '**Countries.** Prices, offers and delivery messages differ by market, so each market needs its own number and address.',
        '**History.** What a company sent last month can’t be collected today. Sharing 1 AI customer per company across every user who watches it gives a new user that history on day one.',
      ],
    },
    {
      kind: 'p',
      text: 'The rules hold at any scale. An AI customer says it is an AI whenever it talks to a person, uses no fake payment details, never gets round a bot wall and never clicks a rival’s paid ads at volume, because [Google Ads treats automated clicks as invalid](' +
        INVALID_CLICKS +
        ').',
    },

    { kind: 'h2', id: 'build-or-buy', text: 'Build or buy', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to build AI customers. Prices from each company’s own pages, 24 October 2026, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'By hand: a spare inbox, a phone and a script',
          'Any company, today, with nothing new to buy',
          'Free, plus your hours',
          'Hours grow with each company\nNo evidence store',
          'A handful of companies',
        ],
        [
          'Inboxes: AgentMail',
          'Inboxes by API that send, receive and act on email',
          'Developer: $20 a month, 10 inboxes\nStartup: $200 a month, 150 inboxes\nExtra inbox: $2 a month',
          'Its own mail service, so no Gmail tab',
          'An inbox per company',
        ],
        [
          'Phone numbers: Twilio',
          'Numbers for texts and calls, with webhooks',
          'US long code: $1.15 a month\nUS SMS: $0.0083 a segment, plus carrier fees\nUS A2P 10DLC: registration fees',
          'Numbers and messages only',
          'A number per market',
        ],
        [
          'Browsers: Browserbase',
          'Cloud browsers that agents drive',
          'Developer: $20 a month, 100 hours\nThen $0.12 a browser hour',
          'A browser only, with no inbox or number',
          'Sign ups, pages and checkout',
        ],
        [
          'Waiting: Cloudflare Durable Objects',
          'State that hibernates and wakes on requests and alarms',
          'Workers Paid: from $5 a month\nRequests: $0.15 a million after 1 million',
          'A runtime, with the logic yours to write',
          'Months of waiting at almost no cost',
        ],
        [
          'Classifying: Claude Haiku 5.5',
          'Turns an email or page into a typed fact',
          '$0.10 in and $0.50 out per million tokens',
          'Needs the evidence to read',
          'Facts from stored evidence',
        ],
        [
          'Obsession (ours): 5 verbs over MCP, an API and an SDK',
          'Customer agents with an inbox, number and browser\nShared history from day one\nEvidence with its DKIM result',
          'Not listed\nPer call or per company watched, never per token',
          'Keys from a waitlist, a team at a time\nStops at bot walls',
          'Agents that need a customer at many companies',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Each service does its part well. You still write the sign up programs, the waiting, the evidence store and the facts. To put a number on the parts, count your companies and multiply: 1 inbox each, 1 number per market, about 10 browser minutes, and 30 wake ups and 30 classified emails a month.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: '200 companies in 1 market for 1 month, built from parts',
        rows: [
          { label: 'Inboxes: AgentMail Startup', value: '$300.00', note: '150 included, 50 more at $2' },
          { label: 'Number: Twilio US long code', value: '$1.15', note: '1 number for the market' },
          { label: 'Texts: 800 segments received', value: '$6.64', note: '$0.0083 each, plus carrier fees' },
          { label: 'Browsers: Browserbase Developer', value: '$20.00', note: '33 hours, inside the 100 included' },
          { label: 'Waiting: Cloudflare Workers Paid', value: '$5.00', note: '6,800 wake ups, inside 1 million requests' },
          { label: 'Facts: Claude Haiku 5.5', value: '$3.30', note: '6,000 emails, 24M tokens in, 1.8M out' },
        ],
        total: { label: 'Services a month', value: '$336.09', note: 'About $1.68 per company, before engineering time' },
      },
      caption: 'What the services cost for an example of 200 companies, at each company’s published prices on 24 October 2026. The volumes are invented: 30 emails, 4 texts and 10 browser minutes per company a month.',
    },
    {
      kind: 'p',
      text: 'In this example the inboxes are 89% of the bill, and the services come to about $1.68 per company a month. The larger cost is the engineering time to write and keep the sign up programs, the store and the classifier, so set your own hours against a hosted system’s price. The full cost model, against people and mystery shoppers, is in [AI customers at scale](/blog/ai-customers-at-scale).',
    },
    {
      kind: 'p',
      text: 'Build it when you watch a handful of companies, need the store in your own systems, or want to run an open source runtime yourself. Buy when you need thousands of companies, history from the first day, or numbers in many countries.',
    },

    { kind: 'h2', id: 'call-over-mcp', text: 'Calling AI customers over MCP and an API' },
    {
      kind: 'p',
      text: '[MCP](' +
        MCP +
        ') is an open source standard for connecting AI applications to external systems. Ecommerce MCP servers such as [Shopify’s](' +
        SHOPIFY_AGENTS +
        ') act for a buyer: through them, agents search products, build carts, check out and fetch an order’s status. A customer-side server reports what each company sent and showed its customers, with the evidence.',
    },
    {
      kind: 'p',
      text: 'Obsession exposes AI customers as 5 verbs over MCP, an HTTP API and TypeScript and Python SDKs: lookup (which companies the shared record already covers, and since when), facts (what a company did, each with its evidence), evidence (the raw email, page or transcript behind a fact), become_customer (start customer agents, or join ones already there) and notify (new facts pushed to your webhook, Slack or CRM as they land). Its runtime is open source: it fans out to many companies at once, sleeps each customer agent for free and learns each sign up once before running it as code, and Obsession Cloud runs it with inboxes and numbers in many countries and months of shared history. Keys open from a waitlist, priced per call or per company watched with a spending cap you set, and an agent connects to the MCP server at mcp.useobsession.com.',
    },
    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'A rival tracking app’s agent calls Obsession',
        who: 'An agent adding 3 rivals a user named, over MCP',
        status: { tone: 'ok', text: 'Facts with evidence, then a webhook' },
        rows: [
          { time: '09:00', text: 'lookup: 3 domains', detail: '2 covered since July, 1 not yet', tone: 'ok' },
          { time: '09:00', text: 'facts: since 24 September', detail: 'The covered rivals’ facts, each linked to its evidence', tone: 'ok' },
          { time: '09:01', text: 'evidence: 1 price email', detail: 'The raw email, its DKIM result and its hash', tone: 'ok' },
          { time: '09:01', text: 'become_customer: 1 domain', detail: 'An AI customer starts a trial as a new customer', tone: 'info' },
          { time: '11:42', text: 'notify: fact.created', detail: 'quillery.example cut Pro from $49 to $39 a month', tone: 'ok' },
        ],
        foot: 'An example with invented companies. The 5 calls are Obsession’s verbs. What the app shows its user is its own.',
      },
      caption: 'How an app’s agent uses AI customers as a tool: it asks what is covered, reads facts and evidence, starts an AI customer where none exists, and is told when something arrives.',
    },
    {
      kind: 'cta',
      text: 'Obsession gives your AI agents a customer at every company: long lived agents with their own inbox, phone number and browser, behind 5 verbs over MCP, an API and an SDK. The runtime is open source.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**A bot wall or a CAPTCHA stops it,** and the block is recorded as a finding.',
        '**A new customer sees what new customers get.** Long standing customers may receive other emails and other inbox placement.',
        '**It records outputs.** Why a company sent something sits in that company’s own systems.',
        '**Some journeys need a real purchase,** on a card its owner funds.',
        '**You may not need it.** For a few companies checked now and then, a spare inbox, a phone and a weekly script are enough.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions from developers' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is an email API for AI agents?',
          a: 'An email API for AI agents gives each agent its own inbox that it can create, read and send from by API. AgentMail is one, at $20 a month for 10 inboxes on its Developer plan.',
        },
        {
          q: 'How do I give my AI agent a phone number?',
          a: 'Lease a number from a provider such as Twilio, at $1.15 a month for a US long code, and receive each text and call by webhook. Twilio says US A2P 10DLC numbers carry registration onboarding fees.',
        },
        {
          q: 'Is there an MCP server for ecommerce?',
          a: 'Yes. Shopify’s developer docs offer MCP servers through which agents search products, build carts, check out and fetch order status for a buyer. What companies send their customers comes from a customer-side server backed by AI customers.',
        },
        {
          q: 'Can an AI agent wait weeks for an email without running?',
          a: 'Yes. Keep it as state that sleeps and wakes on an email, a text or a timer. Cloudflare doesn’t bill Durable Objects for duration while they are idle and eligible for hibernation.',
        },
        {
          q: 'How do I prove an email an agent received is real?',
          a: 'Keep the raw message with its headers and a hash, verify its DKIM signature on arrival and keep the public key. Domains remove old keys, so a check made much later can fail on a genuine email.',
        },
        {
          q: 'How much does it cost to run an AI customer?',
          a: 'In an example of 200 companies in 1 market, the services cost about $336 a month, or $1.68 per company, at published prices on 24 October 2026. The engineering to build and keep it running is the larger cost.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every price comes from the company’s own page, opened on 24 October 2026. The 200 company example uses invented volumes, and real ones vary by sector. The companies in the illustrations are invented. Obsession’s verbs, runtime and pricing model are as its developers page states them.',
    },
  ],

  sources: [
    { title: 'Welcome', publisher: 'AgentMail docs', url: AGENTMAIL_DOCS },
    { title: 'SMS pricing in the United States', publisher: 'Twilio', url: TWILIO },
    { title: 'What is Browserbase?', publisher: 'Browserbase docs', url: BB_DOCS },
    { title: 'Pricing', publisher: 'AgentMail', url: AGENTMAIL_PRICING },
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
    { title: 'About double opt-in', publisher: 'Mailchimp Help', url: DOUBLE_OPTIN },
    { title: 'The age of agents: cryptographically recognizing agent traffic', publisher: 'Cloudflare Blog', url: BOT_AUTH, date: '2025-08-28' },
    { title: 'Storefront API reference', publisher: 'Shopify developer docs', url: SHOPIFY_STOREFRONT },
    { title: 'Durable Objects pricing', publisher: 'Cloudflare Docs', url: CF_DO, date: '2026-10-18' },
    { title: 'Workers pricing', publisher: 'Cloudflare Docs', url: CF_WORKERS, date: '2026-10-02' },
    { title: 'RFC 6376: DomainKeys Identified Mail (DKIM) Signatures', publisher: 'IETF', url: RFC_DKIM, date: '2011-09' },
    { title: 'Pricing', publisher: 'Anthropic (Claude Platform Docs)', url: HAIKU },
    { title: 'Invalid clicks: definition', publisher: 'Google Ads Help', url: INVALID_CLICKS },
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: MCP },
    { title: 'Build commerce agents with UCP', publisher: 'Shopify developer docs', url: SHOPIFY_AGENTS },
  ],
  related: ['ai-customers', 'how-ai-customers-work', 'customer-side-observability', 'ai-customers-at-scale', 'recipe:competitor-tracking', 'recipe:website-audit'],
}

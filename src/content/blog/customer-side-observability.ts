import type { BlogPost } from './types'

/* The AI customers series (24 Oct 2026): customer-side observability, the practice AI customers carry out, defined and
   explained for the 3 audiences who use the word observability: developers, CX teams, and businesses checking their
   own journeys, AI agents and rivals. It owns "customer-side observability" (unclaimed in search on 24 Oct 2026; the
   nearest phrases, client-side and customer-centric observability, mean front end performance).
   The argument: observability (OpenTelemetry's definition) is understanding a system from the outside; a company's
   outputs reach its customers through inboxes, phones, vendors' tools and AI agents, so the company's own telemetry can't
   see them; customer-side observability watches them by being a customer, with 3 pillars (presence, provenance,
   history). Then how it differs from the observability teams already run (each described from its own docs), the
   customer-side signals with pass marks, and a section each for developers (architecture, build or buy, Obsession's 5
   verbs), CX teams (journeys and AI agent checks) and every business (rivals, prospects, partners), a 30 day plan,
   limits and the FAQ.
   Read on 24 Oct 2026: OpenTelemetry's observability primer and client side apps page; Datadog's RUM, Synthetic Testing
   and Agent Observability docs; Cloudflare's Durable Objects pricing; the CMA's March 2026 guidance on AI agents; and,
   reused from checked live articles, Klaviyo's 2026 benchmarks, Joy Joya's 362 brand test and Gmail's sender
   guidelines. Obsession's calls and scale are as the site and the founders state them. The
   companies in the illustrations are invented. No dashes.
   22 Nov 2026: retitled to testing your own journeys the way customers meet them; Obsession named as the toolkit for
   AI agents (a persona, its calls and events), with the blueprints that run the checks. */

const OTEL_PRIMER = 'https://opentelemetry.io/docs/concepts/observability-primer/'
const OTEL_CLIENT = 'https://opentelemetry.io/docs/platforms/client-apps/'
const DD_RUM = 'https://docs.datadoghq.com/real_user_monitoring/'
const DD_SYNTHETICS = 'https://docs.datadoghq.com/synthetics/'
const DD_AGENTS = 'https://docs.datadoghq.com/llm_observability/'
const CF_DO_PRICING = 'https://developers.cloudflare.com/durable-objects/platform/pricing/'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const GMAIL_SENDERS = 'https://support.google.com/a/answer/81126?hl=en'

export const post: BlogPost = {
  slug: 'customer-side-observability',
  title: 'Customer-side observability: test your own journeys the way customers meet them',
  dek: 'Observability tells a team what its own systems are doing. Customer-side observability tests what customers meet, such as the welcome email, the code at checkout, the reminder and the chat answer, each step dated, over days and weeks.',
  metaTitle: 'Customer-side observability: test journeys as customers do',
  description:
    'Customer-side observability tests your emails, texts, checkout and chat the way customers meet them, over days. How it differs from RUM and synthetics.',
  answer: 'Customer-side observability is testing your own emails, texts, checkout and chat the way customers meet them, from outside, over days and weeks, with every step dated. It covers what your own logs and dashboards can’t see, the messages that reach customers through other companies’ systems. On Obsession a persona, an AI agent with its own inbox, number and browser, signs up as a customer, and every email, text and page lands in one event log.',
  primaryKeyword: 'customer-side observability',
  keywords: [
    'customer side observability',
    'observability for customer experience',
    'cx observability',
    'outside-in observability',
    'real user monitoring vs synthetic monitoring',
    'business observability',
  ],
  category: 'Work behind logins',
  published: '2026-10-24',
  updated: '2026-11-22',
  readingMinutes: 8,
  order: 5,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'ivywell.example · 2 views of 1 Tuesday',
      period: 'The store’s own dashboards beside its customer side',
      cols: ['Check', 'The store’s own view', 'The customer side'],
      rows: [
        { name: 'Site', cells: ['Up, 0.4s to first byte', 'Up, and the pop up shows its offer'], tone: 'ok' },
        { name: 'Welcome flow', cells: ['Live, 389 sent', 'Arrived in 2 minutes, Promotions tab'], tone: 'ok' },
        { name: 'Code at checkout', cells: ['Discount active', 'Refused on the sale price'], tone: 'fail' },
        { name: 'Basket reminder', cells: ['Sent after 1 hour', 'Arrived 26 hours later'], tone: 'late' },
        { name: 'Support bot', cells: ['92% resolved', 'Said 60 day returns. The policy says 30'], tone: 'fail' },
      ],
      notes: ['An example on an invented store.', 'Both views are accurate. Only the customer side shows what customers received.'],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Engineering teams can see inside everything they run: every request, every error, every slow page. They can’t see what their customers receive, because most of it travels through systems they don’t run: the email service, the SMS provider, Gmail’s tabs, the chatbot vendor, the payment page.',
    },
    {
      kind: 'p',
      text: 'Customer-side observability fills that gap. It tests a company from where its customers stand, starting with your own, and keeps every step with its time. An AI agent with its own inbox, phone number and browser does the testing.',
    },
    {
      kind: 'quote',
      text: 'Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings.',
      cite: 'OpenTelemetry, Observability primer',
      href: OTEL_PRIMER,
    },

    { kind: 'h2', id: 'definition', text: 'What customer-side observability is' },
    { kind: 'p', text: '**Customer-side observability is testing your own emails, texts, prices, pages and chat the way customers meet them, from outside, with every step dated and kept.**' },
    {
      kind: 'p',
      text: 'OpenTelemetry, the open standard for collecting logs, metrics and traces, defines observability as understanding a system from the outside, and builds it from telemetry: [data emitted from a system and its behaviour](' +
        OTEL_PRIMER +
        '), as logs, metrics and traces. Customer-side observability takes the same idea to a different system: the whole company, as its customers meet it. Its telemetry is what the company sends and shows them.',
    },
    {
      kind: 'table',
      caption: 'The signals of system observability and their customer-side equivalents',
      cols: ['System observability', 'What it records', 'Customer-side equivalent'],
      rows: [
        ['Logs', 'Timestamped messages from services', 'Each email, text and chat reply, kept as it arrived, with its time'],
        ['Metrics', 'Numbers over time about a system', 'Minutes until the welcome, hours until the reminder, how often a code fails'],
        ['Traces', 'The path of 1 request through a system', 'The path of 1 customer: ad, page, sign up, basket, checkout, emails, support'],
        ['Alerts', 'A threshold crossed', 'A promised message that never came, or an answer that broke policy'],
      ],
    },
    { kind: 'h3', id: 'pillars', text: 'Its 3 pillars' },
    {
      kind: 'list',
      items: [
        '**Presence.** A customer identity at the company, with an inbox, a phone number, a browser and the accounts it opens. Only a customer receives what customers receive.',
        '**Provenance.** Each item kept as it arrived, with its time, and for email the sender’s authentication result checked on arrival and kept beside it. Bulk senders to Gmail must authenticate their mail under [Google’s sender guidelines](' +
          GMAIL_SENDERS +
          ').',
        '**History.** Weeks and months of what arrived. What a company sent last month can’t be collected today.',
      ],
    },
    {
      kind: 'p',
      text: 'The tool is an AI agent with its own identity. On Obsession that is a [persona](/personas), an AI agent with its own inbox, number and browser under one name. It is free while it waits and wakes in 50 ms when the company sends something or a check is due, so it can test a journey that takes weeks.',
    },

    { kind: 'h2', id: 'how-it-differs', text: 'How it differs from the observability you already run' },
    {
      kind: 'p',
      text: 'Each of these practices does its job well, and most teams need several. They differ in what they watch and where they watch it from.',
    },
    {
      kind: 'table',
      caption: 'Observability practices by what they watch and from where',
      cols: ['Practice', 'What it watches', 'From where', 'Over what time', 'Best for'],
      rows: [
        ['Infrastructure and application observability', 'Your services and requests, as logs, metrics and traces', 'Inside the systems you run', 'Continuous', 'Uptime, errors and performance'],
        ['Real user monitoring', 'Real visitors’ sessions on your site or app', 'Your users’ browsers, on your own site', 'Continuous', 'Front end speed and errors'],
        ['Synthetic monitoring', 'Scripted requests and paths', 'Test locations, as scripts', 'On a schedule', 'Catching breaks in known paths'],
        ['AI agent observability', 'Your AI agent’s requests, as traces', 'Inside your agent', 'Continuous', 'Debugging and evaluating your agent'],
        ['Customer-side observability', 'What a company sends and shows its customers', 'A customer’s inbox, phone and browser', 'Days or weeks, woken by events', 'What your customers receive'],
      ],
    },
    {
      kind: 'list',
      items: [
        '**Real user monitoring** [gives end to end visibility into the real time activity and experience of individual users](' +
          DD_RUM +
          ') on your own site or app. It stops at your site’s edge: it can’t see the email that follows a visit.',
        '**Client-side observability** exists because, [as OpenTelemetry puts it](' +
          OTEL_CLIENT +
          '), traditional server side monitoring misses the complete picture of user experience. It still covers your own apps.',
        '**Synthetic monitoring** runs [simulated requests](' +
          DD_SYNTHETICS +
          ') through paths someone scripted. It checks that a path works. It doesn’t sign up, wait for days and open what arrives.',
        '**AI agent observability** records [each request to your AI agent as a trace](' +
          DD_AGENTS +
          '), which shows how the agent reached an answer. Customer-side observability shows what a customer was told.',
      ],
    },

    { kind: 'h2', id: 'why-now', text: 'Why it matters now' },
    {
      kind: 'list',
      items: [
        '**The journey runs on other people’s systems.** Email platforms, SMS providers, review apps, chat vendors and payment pages each hold part of it, and each reports only its own part.',
        '**The money is in private channels.** Klaviyo’s own [2026 benchmarks](' +
          KLAVIYO_BENCH +
          ') put automated flows at 5.3% of email sends and nearly 41% of email revenue.',
        '**What companies intend and what customers receive differ.** [A test of 362 ecommerce brands](' +
          JOYJOYA +
          ') by Joy Joya found 158 sent no welcome email to a new subscriber.',
        '**AI agents now speak for companies.** The UK’s Competition and Markets Authority tells businesses to [regularly check how well an AI agent is performing](' +
          CMA +
          '), and holds them responsible for what it does.',
      ],
    },

    { kind: 'h2', id: 'signals', text: 'The customer-side checks worth running' },
    {
      kind: 'p',
      text: 'Treat each journey like a service with a target. Write the pass mark down before the first check, so a result is a pass or a fail and never an opinion. The full method for a welcome series is in [the welcome series guide](/blog/welcome-email-series-best-practices).',
    },
    {
      kind: 'table',
      caption: 'Customer-side checks, each with a pass mark and where to look when it fails',
      cols: ['Signal', 'The check', 'A pass looks like', 'When it fails, look at'],
      rows: [
        ['Welcome email', 'Sign up through the pop up', 'Arrives within 5 minutes with the promised code', 'The flow’s trigger, double opt in and the list the form feeds'],
        ['Inbox placement', 'Where the welcome lands in Gmail', 'Primary or Promotions, never spam', 'The sending domain’s SPF, DKIM and DMARC records'],
        ['Code at checkout', 'Apply the welcome code to a sale item', 'It applies or is refused as planned', 'The discount’s combinations, dates and limits'],
        ['Basket reminder', 'Leave a basket', '1 reminder within the flow’s delay, with the product', 'Flow filters, send limits and the product feed'],
        ['Text sign up', 'Opt in to texts, then reply STOP', 'A confirmation arrives, and STOP ends the texts', 'The SMS provider’s settings and consent rules'],
        ['Support answer', 'Ask the chatbot the returns policy', 'The answer matches the policy page', 'The pages and files the bot reads'],
        ['Ad to checkout', 'Follow a live ad to checkout', 'The same price and offer at every step', 'The ad’s data, the landing page and the discount'],
      ],
    },

    { kind: 'h2', id: 'developers', text: 'For developers: building on customer-side observability' },
    {
      kind: 'p',
      text: 'A customer-side observability system has 5 parts: identities, sign up, durable waiting, an evidence store and facts delivered where they are used.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Identities.** An inbox per company (a Gmail inbox, if you need the tab), a phone number per market, and a browser for pages and checkout.',
        '**Sign up.** A program per platform, learned once and replayed, with an agent only for an unusual form. Most companies use a few platforms, so a few programs cover most of them.',
        '**Durable waiting.** Event driven state that sleeps until mail, a text or a timer arrives. On Cloudflare, Durable Objects that are idle and eligible for hibernation [are not billed for duration](' +
          CF_DO_PRICING +
          '), so a month of waiting costs almost nothing.',
        '**An evidence store.** Append only, with each raw email, its headers, its DKIM result (the signature check that shows which domain sent it) and a hash, and each page capture with its time and address.',
        '**Facts.** 1 sentence each, typed, with a link to the evidence, sent to a webhook, a queue, Slack or your own agent.',
      ],
    },
    {
      kind: 'p',
      text: 'For a handful of journeys, a developer can assemble this from an inbox service, a browser service and a scheduler in a few days. At hundreds of journeys, the long tail of sign-up forms, cheap waiting over weeks and the history nobody can backfill become the work.',
    },
    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'A persona tests a sign-up',
        who: 'A QA engineer testing the welcome series at ivywell.example',
        rows: [
          { time: 'Mon 09:00', text: 'personas.create', detail: 'An inbox, a US number and a browser, in one call', tone: 'info' },
          { time: 'Mon 09:01', text: 'page.visited: sign-up', detail: 'A screenshot of each step', tone: 'ok' },
          { time: 'Mon 09:03', text: 'email.received: welcome', detail: 'A 10% code, at the webhook 50 ms after it landed', tone: 'ok' },
          { time: 'Mon 09:04', text: 'page.visited: checkout', detail: 'The code refused on a sale item', tone: 'fail' },
          { time: 'Tue 10:12', text: 'email.received: reminder', detail: '25 hours after the basket, against a 1 hour delay', tone: 'late' },
        ],
        foot: 'An example on an invented store. Every event lands in the event log, dated, with the email or screenshot.',
      },
      caption: 'How a developer tests a sign-up on Obsession. One call makes the persona, and each step of the journey arrives at the webhook as an event.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. One call to obsession.personas.create() gives a test journey its own inbox, number and browser, and email.received reaches your webhook about 50 ms after the email lands. More is in [the guide for developers](/blog/ai-customers-for-developers).',
    },
    {
      kind: 'cta',
      text: 'An inbox, a phone number and a browser for every test journey, on one API and one bill, with every email, text and page at your webhook as it lands.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'cx-teams', text: 'For CX teams: journeys and AI agents' },
    {
      kind: 'p',
      text: 'A CX team owns what customers live through, and most of it happens in tools the team doesn’t run. Customer-side observability turns each journey into checks with a pass mark, run every day and after every change: the welcome, the reminder, the order confirmation, the delivery message, the password reset, the support reply. The [QA on your own flows](/blueprints/website-audit) blueprint runs the sign-up checks after every release, and [Delivery monitoring](/blueprints/delivery-monitoring) checks that every sign-up email, text and login code arrives.',
    },
    {
      kind: 'p',
      text: 'AI agents need the same treatment. A support bot, a voice agent or an AI SDR can change its answer after a prompt edit, a new help article or a model update. A persona asking the same questions every morning, and within the hour of any update, shows what customers are told, with the transcript. The method for a store’s chatbot is in [how to test your store’s chatbot](/blog/test-store-chatbot-returns-policy), and how a persona differs from the bot it tests is in [the service agent comparison](/blog/ai-customer-service-agent-vs-ai-customer).',
    },
    {
      kind: 'cta',
      text: 'What your support bot tells customers, word for word and dated, beside the policy page it should match, every morning and after every update.',
      to: '/blueprints/support-bot-check',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'every-business', text: 'Beyond your own company: competitors and partners' },
    {
      kind: 'p',
      text: 'The same method works at any company, so it covers your market too. Every competitor’s emails, texts, offers and prices on 1 timeline ([Competitor tracking](/blueprints/competitor-tracking)). What each prospect does to its own customers before a sales call ([Prospect intelligence](/blueprints/prospect-intelligence)). The partners and deals sites showing your codes, and what AI assistants say about you ([Listings and AI answers](/blueprints/listings-ai-answers)). Any team can pick a [blueprint](/blueprints), and Obsession runs it and sends the results to Slack, a sheet or the CRM.',
    },

    { kind: 'h2', id: 'plan', text: 'A 30 day plan' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Week 1.** List 5 journeys that earn or lose money (welcome, basket, checkout, delivery, support) and 5 competitors. Write a pass mark for each journey.',
        '**Week 2.** Run each journey once as a new customer, by hand or with a persona, and note what arrived and when.',
        '**Week 3.** Send each result to where the team works: a Slack channel, the CRM or your own agent. Add the check after every release.',
        '**Week 4.** Review what failed, what it was worth (the flow’s revenue a day × the days it was silent) and which checks to run daily.',
      ],
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**It sees what customers receive, and not why.** The cause of a missing email sits in the company’s own tools and its own observability.',
        '**A new customer sees what new customers get.** Engaged, long standing customers can receive other emails and other placement.',
        '**It never gets round a CAPTCHA or a bot block, and stops at any identity check.** The event log keeps the step where it stopped.',
        '**It complements system observability.** Uptime, errors and performance stay with the tools built for them.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about customer-side observability' },
    {
      kind: 'faq',
      items: [
        { q: 'What is customer-side observability?', a: 'Testing your own emails, texts, prices, pages and chat the way customers meet them, from outside, with every step dated and kept.' },
        {
          q: 'How is it different from observability?',
          a: 'Observability shows what the systems you run are doing, from their logs, metrics and traces. Customer-side observability shows what customers receive, at your company and any other, by signing up as a customer and keeping what arrives.',
        },
        {
          q: 'How is it different from real user monitoring?',
          a: 'Real user monitoring records real visitors’ sessions on your own site or app. Customer-side observability follows a customer past the site: the emails, texts, checkout and support replies that come after, over weeks.',
        },
        {
          q: 'How is it different from synthetic monitoring?',
          a: 'Synthetic monitoring runs scripted requests through your own paths on a schedule. Customer-side observability signs up as a customer, waits for what arrives and keeps it as evidence, at any company.',
        },
        {
          q: 'What is a persona?',
          a: 'An AI agent with its own inbox, phone number and browser under one name, on Obsession. It is free while it waits, wakes in 50 ms when something arrives, and every email, text, call and page lands in one event log.',
          link: { label: 'See how it works', to: '/personas' },
        },
        {
          q: 'What does it cost to run on Obsession?',
          a: 'A persona is free while it waits; you pay for the pieces it uses, such as $0.50 an inbox a month, $2 a US or UK number a month and $0.10 a browser hour. The Free plan includes 3 inboxes, 1 number and 10 browser hours, with no credit card.',
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Can I build customer-side observability myself?',
          a: 'For a few journeys, yes, with an inbox service, a browser service, a scheduler and a store for the evidence. At hundreds of journeys, the variety of sign-up forms, weeks of cheap waiting and history become most of the work.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every outside source was read on its own page on 24 October 2026. The companies in the illustrations are invented. Obsession’s calls and events are as its developer pages state them.',
    },
  ],

  sources: [
    { title: 'Observability primer', publisher: 'OpenTelemetry', url: OTEL_PRIMER },
    { title: 'Client-side apps', publisher: 'OpenTelemetry', url: OTEL_CLIENT },
    { title: 'RUM and Session Replay', publisher: 'Datadog Docs', url: DD_RUM },
    { title: 'Synthetic Testing and Monitoring', publisher: 'Datadog Docs', url: DD_SYNTHETICS },
    { title: 'Agent Observability', publisher: 'Datadog Docs', url: DD_AGENTS },
    { title: 'Durable Objects pricing', publisher: 'Cloudflare', url: CF_DO_PRICING },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Email sender guidelines', publisher: 'Gmail Help', url: GMAIL_SENDERS },
  ],
  related: ['ai-customers', 'how-ai-customers-work', 'ai-customers-for-developers', 'test-store-chatbot-returns-policy', 'recipe:support-bot-check', 'recipe:competitor-tracking'],
}

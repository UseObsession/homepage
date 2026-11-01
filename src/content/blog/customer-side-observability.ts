import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

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
   guidelines. Obsession's 5 verbs, open source runtime and scale are as the site and the founders state them. The
   companies in the illustrations are invented. No dashes. */

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
  title: 'Customer-side observability: seeing a company the way its customers do',
  dek: 'Observability tells a team what its own systems are doing. Customer-side observability tells it what customers actually receive, at its own company and at any other. What it is, how it differs, and how developers, CX teams and businesses put it to work.',
  metaTitle: 'Customer-side observability: what it is and how to build it',
  description:
    'Customer-side observability is seeing what a company does to its customers by being one. How it differs from RUM and synthetics, and how to build it.',
  answer: `${CUSTOMER_SIDE_OBSERVABILITY.definition} AI customers are how it is done: AI agents that become real customers of a company, wait for what arrives and keep it as evidence. Obsession’s AI customers do this today at any company you name and keep the email, price, page and AI answer as each arrived.`,
  primaryKeyword: 'customer-side observability',
  keywords: [
    'customer side observability',
    'observability for customer experience',
    'cx observability',
    'outside-in observability',
    'real user monitoring vs synthetic monitoring',
    'business observability',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
  readingMinutes: 8,
  order: 5,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'ivywell.example · 2 views of the same Tuesday',
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
      text: 'Engineering teams can see inside everything they run: every request, every error, every slow page. They can’t see what their customers receive, because most of it travels through systems they don’t run: the email platform, the SMS provider, Gmail’s tabs, the chatbot vendor, the payment page.',
    },
    {
      kind: 'p',
      text: 'Customer-side observability fills that gap. It watches a company from where its customers stand, at your own company and at any other, and keeps what arrives as evidence. AI customers are the instrument that does it.',
    },
    {
      kind: 'quote',
      text: 'Observability lets you understand a system from the outside by letting you ask questions about that system without knowing its inner workings.',
      cite: 'OpenTelemetry, Observability primer',
      href: OTEL_PRIMER,
    },

    { kind: 'h2', id: 'definition', text: 'What customer-side observability is' },
    { kind: 'p', text: `**${CUSTOMER_SIDE_OBSERVABILITY.definition}**` },
    {
      kind: 'p',
      text: 'OpenTelemetry defines observability as understanding a system from the outside, and builds it from telemetry: [data emitted from a system and its behaviour](' +
        OTEL_PRIMER +
        '), as logs, metrics and traces. Customer-side observability takes the same idea to a different system: the whole company, as its customers experience it. Its telemetry is what the company sends and shows them.',
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
        '**Presence.** A real customer identity at the company: an inbox, a phone number, a browser and the accounts it opens. Only a customer receives what customers receive.',
        '**Provenance.** Each item kept as it arrived, with its time, and for email the sender’s authentication checked on arrival, so the record still holds when it is opened months later. Bulk senders to Gmail must authenticate their mail under [Google’s sender guidelines](' +
          GMAIL_SENDERS +
          ').',
        '**History.** Weeks and months of what arrived. What a company sent last month can’t be collected today.',
      ],
    },
    {
      kind: 'p',
      text: `The instrument is the [AI customer](/blog/ai-customers). ${AI_CUSTOMER.definition} It is asleep almost all the time and wakes only when the company sends something or a check is due, so it can watch for months at almost no cost.`,
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
        ['Customer-side observability', 'What a company sends and shows its customers', 'A customer’s inbox, phone and browser', 'Weeks or months, woken by events', 'What customers actually receive, at your company and any other'],
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

    { kind: 'h2', id: 'signals', text: 'The customer-side signals worth watching' },
    {
      kind: 'p',
      text: 'Treat each journey like a service with a target. Write the pass mark down before the first check, so a result is a pass or a fail and never an opinion.',
    },
    {
      kind: 'table',
      caption: 'Customer-side checks, each with a pass mark and where to look when it fails',
      cols: ['Signal', 'The check', 'A pass looks like', 'When it fails, look at'],
      rows: [
        ['Welcome email', 'Sign up through the pop up', 'Arrives within 5 minutes with the promised code', 'The flow’s trigger, double opt in and the list the form feeds'],
        ['Inbox placement', 'Where the welcome lands in Gmail', 'Primary or Promotions, never spam', 'SPF, DKIM, DMARC and the sending domain'],
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
        '**An evidence store.** Append only, with each raw email, its headers, its DKIM result and a hash, and each page capture with its time and address.',
        '**Facts.** 1 sentence each, typed, with a link to the evidence, sent to a webhook, a queue, Slack or your own agent.',
      ],
    },
    {
      kind: 'p',
      text: 'For a handful of companies, a developer can assemble this from an inbox service, a browser service and a scheduler in a few days. At thousands of companies, the long tail of sign up forms, cheap waiting over months and the history nobody can backfill become the work.',
    },
    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'An AI agent calls Obsession over MCP',
        who: 'A Claude agent comparing a client’s welcome series with 5 competitors',
        status: { tone: 'ok', text: 'Facts with evidence, then the agent’s own write up' },
        rows: [
          { time: '09:00', text: 'lookup: 6 domains', detail: '4 already covered, with history since August', tone: 'ok' },
          { time: '09:00', text: 'facts: 4 domains, last 30 days', detail: '212 facts, each with a link to its evidence', tone: 'ok' },
          { time: '09:01', text: 'evidence: 1 welcome email', detail: 'The email as it arrived, its DKIM result and its hash', tone: 'ok' },
          { time: '09:01', text: 'become_customer: 2 domains', detail: 'AI customers start; first facts expected within the hour', tone: 'info' },
          { time: '10:12', text: 'notify: northgale.example', detail: 'Welcome email, 15% code, Promotions tab', tone: 'ok' },
        ],
        foot: 'An example with invented companies. The 5 calls are Obsession’s verbs; the comparison and the write up are the agent’s own.',
      },
      caption: 'How an agent uses customer-side observability as a tool: it asks, reads the evidence, starts AI customers where none exist, and is told when something arrives.',
    },
    {
      kind: 'p',
      text: 'Obsession exposes this as 5 verbs over MCP, an API and an SDK: lookup, facts, evidence, become_customer and notify. The runtime is open source, and Obsession can run millions of AI customers. More is in [AI customers for developers](/blog/ai-customers-for-developers).',
    },
    {
      kind: 'cta',
      text: 'Give your own AI agent an AI customer at any company: 5 verbs over MCP, an API and an SDK, with every email and page kept as proof. The runtime is open source.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'cx-teams', text: 'For CX teams: journeys and AI agents' },
    {
      kind: 'p',
      text: 'A CX team owns what customers live through, and most of it happens in tools the team doesn’t run. Customer-side observability turns each journey into checks with a pass mark, run every day and after every change: the welcome, the reminder, the order confirmation, the delivery message, the password reset, the support reply.',
    },
    {
      kind: 'p',
      text: 'AI agents need the same treatment. A support bot, a voice agent or an AI SDR can change its answer after a prompt edit, a new help article or a model update. AI customers asking the same questions every day, and within the hour of any update, show what customers are told, with the transcript. The method for a store’s chatbot is in [how to test your store’s chatbot](/blog/test-store-chatbot-returns-policy).',
    },
    {
      kind: 'cta',
      text: 'AI customers call, chat and email your AI agents as your customers do, every day, and check they answer right, hand over and say they’re AI. Your first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'every-business', text: 'For every business: your competitors and your market' },
    {
      kind: 'p',
      text: 'Customer-side observability works on any company, so the same practice covers your market. Every competitor’s emails, texts, offers and prices on 1 timeline ([Competitor tracking](/recipes/competitor-tracking)). What each prospect does to its own customers before a sales call ([Prospect intelligence](/recipes/prospect-intelligence)). The partners and deals sites showing your codes, and what AI assistants say about you ([Listings and AI answers](/recipes/listings-ai-answers)). For all 3, and for your own company, use Obsession. Its AI customers sign up to any company you name and keep every email, offer and price it sends, so you can find revenue leaks, watch competitors and prospect with proof.',
    },

    { kind: 'h2', id: 'plan', text: 'A 30 day plan' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Week 1.** List 5 journeys that earn or lose money (welcome, basket, checkout, delivery, support) and 5 competitors. Write a pass mark for each journey.',
        '**Week 2.** Run each journey once as a new customer, by hand or with AI customers, and record what arrived and when.',
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
        '**It stops at a bot wall or a CAPTCHA,** and names the step it couldn’t test.',
        '**It complements system observability.** Uptime, errors and performance stay with the tools built for them.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about customer-side observability' },
    {
      kind: 'faq',
      items: [
        { q: 'What is customer-side observability?', a: CUSTOMER_SIDE_OBSERVABILITY.definition },
        {
          q: 'How is it different from observability?',
          a: 'Observability shows what the systems you run are doing, from their logs, metrics and traces. Customer-side observability shows what customers actually receive, at your company and any other, by being a customer.',
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
          q: 'What are AI customers?',
          a: `${AI_CUSTOMER.definition} They are the instrument that carries out customer-side observability.`,
        },
        {
          q: 'Can I build customer-side observability myself?',
          a: 'For a few companies, yes: an inbox service, a browser service, a scheduler and a store for the evidence. At thousands of companies, the variety of sign up forms, months of cheap waiting and history become most of the work.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every outside source was read on its own page on 24 October 2026. The companies in the illustrations are invented. Obsession’s verbs, runtime and scale are as its site and founders state them.',
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

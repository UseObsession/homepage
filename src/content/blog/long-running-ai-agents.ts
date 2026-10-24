import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

/* The why series, Spec H (24 Oct 2026): why developers need AI customers, the developer deep dive. It owns "long
   running ai agents" (primary) and "durable ai agents", "building durable ai agents", "durable execution ai agents",
   "open source ai agent framework", "ai agents in production" and "ai agent memory" (Google autocomplete, US and UK,
   24 Oct 2026, in why-series/autocomplete_wave_b*.json). "email api for ai agents", "give your ai agent a phone number"
   and "mcp server ecommerce" stay with ai-customers-for-developers, which this links instead of pricing the parts again.
   Readers: engineers and technical founders building agents that deal with other companies.
   The argument: an agent session lasts minutes and a customer relationship lasts months, so the work moves from compute
   to state. The 6 hard parts as engineering (identity, waiting, waking, fan out, learning once, evidence), the waiting
   sum on Cloudflare's published Durable Objects rates (awake against asleep, low and high, 3, 6 and 12 months, payback in
   engineering weeks at the BLS median before any price), the by hand workload and customer-side observability as a
   routine, 5 jobs, what changes, the options compared from their own pages, and when developers don't need it.
   Opened on 24 Oct 2026 at each source's own page: Temporal (timers, Cloud actions, pricing, home), Inngest (pricing,
   usage limits, waitForEvent), Restate (pricing in a browser, durable timers, awakeables), DBOS (pricing, workflow and
   messaging tutorials, architecture), Cloudflare (Durable Objects pricing updated 18 Oct 2026, Workers pricing updated
   2 Oct 2026, Agent class, scheduling), LangGraph (persistence, interrupts, GitHub licence), LangSmith pricing, Pydantic
   AI (durable execution, GitHub licence), Vercel Workflows (overview, concepts, pricing), AWS Step Functions (pricing,
   callback pattern), AgentMail webhook events, Twilio's incoming message webhook, Browserbase Contexts, Stagehand
   caching, and the BLS handbook for software developers. From the library (facts.json): RFC 6376, Cloudflare Web Bot
   Auth and Verified bots, Shopify's Storefront API, MCP, EU AI Act Articles 50 and 113, Salesforce on personal agents.
   Obsession is described only in the words of shared5.ts openSource and pages/developers.ts. Hard limits on 24 Oct
   2026: no repository, package, install command, MCP or API address is printed, and the reader is never told to run
   anything of ours. Left out on purpose: Google Workspace, ChatGPT agent (retired), any Obsession price, Restate's
   delayed message advice (read only through a summary), and "Star it on GitHub". northfold.example and the wake counts,
   seconds per wake and sign up program rates in the examples are invented. No dashes. */

const TEMPORAL_TIMERS = 'https://docs.temporal.io/workflow-execution/timers-delays'
const BB_CONTEXTS = 'https://docs.browserbase.com/features/contexts'
const BOT_AUTH = 'https://blog.cloudflare.com/signed-agents/'
const SHOPIFY_STOREFRONT = 'https://shopify.dev/docs/api/storefront'
const CF_DO = 'https://developers.cloudflare.com/durable-objects/platform/pricing/'
const VERCEL_CONCEPTS = 'https://vercel.com/docs/workflows/concepts'
const VERCEL_PRICING = 'https://vercel.com/docs/workflows/pricing'
const DBOS_WORKFLOWS = 'https://docs.dbos.dev/python/tutorials/workflow-tutorial'
const RESTATE_TIMERS = 'https://docs.restate.dev/develop/ts/durable-timers'
const CF_SCHEDULE = 'https://developers.cloudflare.com/agents/api-reference/schedule-tasks/'
const INNGEST_LIMITS = 'https://www.inngest.com/docs/usage-limits/inngest'
const SFN_CALLBACK = 'https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html'
const AGENTMAIL_EVENTS = 'https://docs.agentmail.to/events'
const TWILIO_WEBHOOK = 'https://www.twilio.com/docs/messaging/guides/webhook-request'
const TEMPORAL_ACTIONS = 'https://docs.temporal.io/cloud/actions'
const INNGEST_WAIT = 'https://www.inngest.com/docs/features/inngest-functions/steps-workflows/wait-for-event'
const RESTATE_AWAKEABLES = 'https://docs.restate.dev/develop/ts/awakeables'
const DBOS_MESSAGES = 'https://docs.dbos.dev/python/tutorials/workflow-communication'
const LG_INTERRUPTS = 'https://docs.langchain.com/oss/python/langgraph/interrupts'
const RESTATE_PRICING = 'https://restate.dev/pricing'
const STAGEHAND_CACHE = 'https://docs.stagehand.dev/v3/best-practices/caching'
const RFC_DKIM = 'https://www.rfc-editor.org/rfc/rfc6376'
const LG_PERSISTENCE = 'https://docs.langchain.com/oss/python/langgraph/persistence'
const BLS_DEV = 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
const PYDANTIC_DURABLE = 'https://pydantic.dev/docs/ai/integrations/durable_execution/overview/'
const VERCEL_WORKFLOWS = 'https://vercel.com/docs/workflows'
const CF_VERIFIED = 'https://developers.cloudflare.com/bots/concepts/bot/verified-bots/'
const MCP = 'https://modelcontextprotocol.io/docs/getting-started/intro'
const AI_ACT_50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const SF_PERSONAL = 'https://www.salesforce.com/news/stories/personal-agents-to-drive-more-contact-center-traffic/'
const TEMPORAL_PRICING = 'https://temporal.io/pricing'
const INNGEST_PRICING = 'https://www.inngest.com/pricing'
const DBOS_PRICING = 'https://www.dbos.dev/dbos-pricing'
const CF_WORKERS = 'https://developers.cloudflare.com/workers/platform/pricing/'
const LANGSMITH_PRICING = 'https://www.langchain.com/pricing'
const SFN_PRICING = 'https://aws.amazon.com/step-functions/pricing/'
const TEMPORAL_HOME = 'https://temporal.io/'
const LG_REPO = 'https://github.com/langchain-ai/langgraph'
const PYDANTIC_REPO = 'https://github.com/pydantic/pydantic-ai'
const DBOS_ARCH = 'https://docs.dbos.dev/architecture'
const CF_AGENT_CLASS = 'https://developers.cloudflare.com/agents/concepts/agent-class/'

export const post: BlogPost = {
  slug: 'long-running-ai-agents',
  title: 'Why developers need AI customers',
  dek: 'An agent session lasts minutes and a customer relationship lasts months. The 6 engineering problems in that gap, what waiting costs by design, and the durable execution options compared.',
  metaTitle: 'Long running AI agents: why developers need AI customers',
  description:
    'Long running AI agents need an identity that lasts, free waiting, wake ups and evidence: the 6 hard parts, what waiting costs and the options compared.',
  answer:
    'Long running AI agents that deal with other companies have to stay their customers for weeks or months, so developers need AI customers: an inbox, phone number and browser that keep working, waiting that costs close to nothing, wake ups on outside events and evidence that holds. Durable execution engines such as Temporal, Inngest, Restate and DBOS make the waiting reliable, and an AI customer adds the identity and the evidence.',
  primaryKeyword: 'long running ai agents',
  keywords: [
    'long running ai agents',
    'durable ai agents',
    'building durable ai agents',
    'durable execution ai agents',
    'open source ai agent framework',
    'ai agents in production',
    'ai agent memory',
    'pydantic ai durable agents',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-24',
  readingMinutes: 13,
  order: 19,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'northfold.example · 1 AI customer, 90 days',
      who: 'Its own inbox, a UK number and a browser, made for this store',
      status: { tone: 'info', text: 'Awake 4 minutes in 90 days' },
      rows: [
        { time: 'Day 0 09:00', text: 'Signed up', detail: 'The pop up form, then the confirmation link', tone: 'ok' },
        { time: 'Day 0 09:04', text: 'Woke: welcome email', detail: 'Code NORTH10, DKIM pass, key kept', tone: 'ok' },
        { time: 'Day 3 18:12', text: 'Woke: a text', detail: '15% off this weekend, kept with its time', tone: 'ok' },
        { time: 'Day 21 07:30', text: 'Woke: a scheduled check', detail: 'Wool throw down from £64 to £52', tone: 'info' },
        { time: 'Day 47 10:02', text: 'Woke: win back email', detail: '30% off, 47 days after sign up', tone: 'ok' },
        { time: 'Day 90', text: 'Still a customer', detail: 'No process ran between wakes', tone: 'info' },
      ],
      foot: 'An example on an invented store. An email, a text or a scheduled check wakes the agent, and it sleeps in between.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Engineers and technical founders build agents that deal with other companies: they sign up, wait, receive mail and texts, and act weeks later. AI customers give those agents a customer relationship that lasts as long as the job. [What AI customers are](/blog/ai-customers) defines the term, and [why AI customers matter](/blog/why-ai-customers-matter) makes the case for every company.',
    },

    { kind: 'h2', id: 'in-production', text: 'Long running AI agents in production' },
    {
      kind: 'p',
      text: 'Most agents in production run inside a session. A request arrives, the model plans and calls tools, and the work ends within minutes. An agent that is a customer of another company works on that company’s clock: the welcome email in minutes, the basket reminder the next day, the price change after 3 weeks, the win back email after 60 days, the renewal notice after 11 months.',
    },
    {
      kind: 'p',
      text: 'That gap moves the engineering from compute to state. The agent has to keep an identity, sleep through weeks of nothing, wake when the company acts and show later what arrived. Durable execution engines were built for the waiting. Temporal’s documentation says a Timer can be set [as short as one second or as long as several years](' +
        TEMPORAL_TIMERS +
        '), and that Workers consume no additional resources while they wait for one to fire.',
    },
    {
      kind: 'stat',
      value: 'Several years',
      label: 'how long a Temporal Timer can run, with Workers consuming no additional resources while it waits',
      source: 'Temporal documentation, Timers and delays',
      href: TEMPORAL_TIMERS,
    },
    {
      kind: 'p',
      text: 'The usual stack has an agent framework such as LangGraph or Pydantic AI for the model loop, a durable engine or runtime to keep state across waits and crashes, and services such as AgentMail, Twilio and Browserbase for the inbox, the number and the browser. [AI customers for developers](/blog/ai-customers-for-developers) prices each part.',
    },

    { kind: 'h2', id: 'hard-parts', text: 'Building durable AI agents: the 6 hard parts' },
    {
      kind: 'p',
      text: 'Each is a familiar distributed systems problem, with a company’s website, mail server and SMS provider on the other side in place of an API.',
    },

    { kind: 'h3', id: 'identity', text: '1. Identity that keeps working' },
    {
      kind: 'p',
      text: 'A customer is an identity a company recognises over time: an email address, a phone number, a signed in browser, an account. Give each AI customer its own inbox at each company it joins, so every email belongs to 1 company, and a number per market for texts and login codes. Keep the identifiers in the agent’s durable state, never in a session.',
    },
    {
      kind: 'p',
      text: 'Browsers need the same care. [Browserbase Contexts](' +
        BB_CONTEXTS +
        ') keep logins and local storage across sessions that are set to persist them, until they are deleted or invalidated, and a site can still expire a login, so the agent checks it is signed in before each step and treats a forced sign out as an event. The identity is made for the job and never borrows a real person’s name, address or card.',
    },

    { kind: 'h3', id: 'waiting', text: '2. Waiting for months without a running process' },
    {
      kind: 'p',
      text: 'The expensive design is a process per customer, such as a loop that holds a connection open until mail arrives. On Cloudflare, an object that accepts a WebSocket [is billed for duration for the entire time it is connected](' +
        CF_DO +
        ') unless it uses the WebSocket Hibernation API, and an object that is idle and eligible for hibernation is not billed for duration. Every durable runtime separates the wait from compute in its own way.',
    },
    {
      kind: 'list',
      items: [
        '**Temporal:** Timers are persisted, so a wait survives a Worker or service outage and resolves once both are back.',
        '**Vercel Workflows:** [sleep pauses a workflow without consuming compute resources](' +
          VERCEL_CONCEPTS +
          '), and [Vercel’s limits page](' +
          VERCEL_PRICING +
          ') lists no limit on sleep or run duration.',
        '**DBOS:** [DBOS.sleep() saves the wake up time in the database](' + DBOS_WORKFLOWS + '), for waits of days, weeks or months.',
        '**Restate:** [the handler is suspended while it sleeps](' + RESTATE_TIMERS + '), which saves cost on platforms that charge for execution time.',
        '**Cloudflare Agents:** [scheduled tasks are persisted to SQLite](' + CF_SCHEDULE + ') and use Durable Object alarms to wake the agent.',
      ],
    },
    {
      kind: 'p',
      text: 'Check each engine’s limit against the longest wait. Inngest caps [a run’s total lifetime, sleeps included](' +
        INNGEST_LIMITS +
        '), at 30 days on Free, 90 on Pro and 366 on Business, and a Step Functions callback waits up to [the one year service quota](' +
        SFN_CALLBACK +
        '). A customer that outlives a run is easier to model as an entity, 1 durable object or keyed record per AI customer, with each wait as a short run that starts from its state.',
    },

    { kind: 'h3', id: 'waking', text: '3. Waking on outside events' },
    {
      kind: 'p',
      text: 'The company decides when the agent works. AgentMail sends a [message.received event](' +
        AGENTMAIL_EVENTS +
        ') when a new email is received and processed, and when a message reaches a Twilio number, [Twilio sends a request to your web application](' +
        TWILIO_WEBHOOK +
        '). The handler finds the AI customer by recipient address or number and resumes its run.',
    },
    {
      kind: 'p',
      text: 'Each engine has a primitive for the resume. Temporal has Signals, [billed as Actions](' +
        TEMPORAL_ACTIONS +
        ') on Temporal Cloud. Inngest’s [step.waitForEvent](' +
        INNGEST_WAIT +
        ') pauses a run until a matching event arrives or the wait times out. A Restate [awakeable](' +
        RESTATE_AWAKEABLES +
        ') has an ID an external system resolves. DBOS persists every message a workflow receives through [send and recv](' +
        DBOS_MESSAGES +
        '), Vercel has hooks, Step Functions has task tokens, and a LangGraph [interrupt](' +
        LG_INTERRUPTS +
        ') waits indefinitely until the graph is resumed.',
    },
    {
      kind: 'p',
      text: 'Webhooks can arrive twice, so key each wake on the message ID and make the step idempotent. Silence needs a clock of its own. Race every expected message against a deadline, so a welcome email that hasn’t come 24 hours after sign up is recorded as a dated fact.',
    },

    { kind: 'h3', id: 'fan-out', text: '4. Fan out' },
    {
      kind: 'p',
      text: 'One request often becomes thousands of customers: every rival a user names, every account on a list, every merchant on a platform. Each needs its own identity, clock and evidence, and they start together. Platforms publish their ceilings: Vercel Workflows allows 1,000 run creations a second, and [Restate’s Starter plan](' +
        RESTATE_PRICING +
        ') runs 50 actions a second with bursts to 500.',
    },
    {
      kind: 'p',
      text: 'The outside world sets its own pace. Cap concurrency per domain so sign ups arrive at a customer’s pace, and record a CAPTCHA or bot wall as a step the AI customer couldn’t test, because it never gets round one. Where 2 users watch the same company, 1 shared AI customer gives the second user the history the first one built.',
    },

    { kind: 'h3', id: 'learn-once', text: '5. Learning a site once and running it as code' },
    {
      kind: 'p',
      text: 'A model that reasons through every sign up spends tokens on every run and can take a different path each time. Many companies collect sign ups through the same email and form platforms, so the first sign up on a platform can be worked out by an agent, recorded and replayed as code at every company built the same way.',
    },
    {
      kind: 'p',
      text: 'Browser tooling already supports the pattern. Stagehand’s [action caching](' +
        STAGEHAND_CACHE +
        ') describes two caches: a local cache that replays recorded actions with no LLM calls and no token cost, to be cleared when a page’s structure changes, and a server-side cache that misses when the page changes, so the model is called again. Version every program, test each version on stored pages before it goes live, and keep a model for forms no program recognises.',
    },

    { kind: 'h3', id: 'evidence', text: '6. Evidence that holds' },
    {
      kind: 'p',
      text: 'An agent that reports a rival’s price cut has to show the email. Store each message as it arrived, in an append only store: raw bytes, headers, arrival time and a content hash. [RFC 6376](' +
        RFC_DKIM +
        ') lets the domain that signs a message claim responsibility for it, checked against a public key the domain publishes, and domains replace their keys over time. A DKIM signature is checked on arrival and kept with its key.',
    },
    {
      kind: 'p',
      text: 'Facts come from evidence through versioned rules, 1 sentence each with a link back. When a rule changes, derive the facts again from stored evidence, because last month’s emails can’t be collected twice. This is also the agent’s memory. LangGraph’s [checkpointers](' +
        LG_PERSISTENCE +
        ') keep short term memory per thread and its stores keep long term memory across threads, and an AI customer’s long term memory of a company is its evidence.',
    },

    { kind: 'h2', id: 'cost', text: 'What waiting costs' },
    {
      kind: 'p',
      text: 'The design choice with the largest bill is how agents wait. The sum is agents × seconds kept in memory a month × memory per agent × the duration price, against agents × wake ups × seconds per wake on the same price. Cloudflare publishes every rate the sum needs: [duration is billed on the 128 MB each object is allocated](' +
        CF_DO +
        '), at $12.50 per million GB-s after 400,000 included, rounded up to the next million, idle objects eligible for hibernation aren’t billed for duration, and requests cost $0.15 a million after 1 million.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: '10,000 AI customers waiting 30 days on Durable Objects',
        rows: [
          { label: 'Awake: 1 agent, 30 days', value: '331,776 GB-s', note: '2,592,000 s × 128 MB' },
          { label: 'Awake: 10,000 agents', value: '$41,475', note: '$12.50 per million GB-s after 400,000, rounded up' },
          { label: 'Asleep: 10,000 agents, 30 wakes of 3 s', value: '115,200 GB-s', note: 'Inside the 400,000 included' },
          { label: 'Asleep: 300,000 wake ups', value: '$0.00', note: 'Inside 1 million requests' },
          { label: 'Workers Paid minimum', value: '$5.00', note: 'Per account, a month, either way' },
        ],
        total: { label: 'Asleep, a month', value: '$5.00', note: 'Awake: $41,480' },
      },
      caption: 'The waiting sum worked once for an example of 10,000 AI customers at Cloudflare’s published Durable Objects prices on 24 October 2026. The wake counts and seconds per wake are invented, and storage is left out.',
    },
    {
      kind: 'p',
      text: 'At the low end, 1,000 agents kept in memory cost about $4,155 a month against $5 asleep. At the high end, 100,000 cost about $414,730 a month against about $17.80.',
    },
    {
      kind: 'list',
      items: [
        '**By month 3:** $12,465 to $1.24 million awake, $15 to $53 asleep.',
        '**By month 6:** $24,930 to $2.49 million awake, $30 to $107 asleep.',
        '**By month 12:** $49,860 to $4.98 million awake, $60 to $214 asleep.',
      ],
    },
    {
      kind: 'p',
      text: 'Designing for sleep costs engineering time. At the [median wage for software developers](' +
        BLS_DEV +
        '), $135,980 a year in May 2025, an engineer week is about $2,615 in salary, so 4 weeks spent moving the waiting into hibernating objects or a durable engine pays back within the first month at 10,000 agents and in about 2.5 months at 1,000. The inbox, number, browser and model behind each AI customer are priced line by line in [AI customers at scale](/blog/ai-customers-at-scale).',
    },

    { kind: 'h2', id: 'workload', text: 'Durable AI agents by hand, and as a routine' },
    {
      kind: 'p',
      text: 'The work a durable engine leaves with the team is the customer layer: sign up programs × the share that break each month × hours per fix. As an example, 1,000 companies on 15 form platforms and 120 custom forms make 135 programs, and if 1 in 20 breaks in a month at an hour per fix, that is about 7 hours a month.',
    },
    {
      kind: 'p',
      text: 'A broken program fails quietly. The agent stops receiving mail and nothing throws an error, so each program needs a check of its own, and the checks grow with every company and every market.',
    },
    {
      kind: 'p',
      text: `Run as a routine, this is [customer-side observability](/blog/customer-side-observability). ${CUSTOMER_SIDE_OBSERVABILITY.definition} For a developer it has 3 parts, written before the first run.`,
    },
    {
      kind: 'list',
      items: [
        '**Pass marks as assertions.** A welcome email within 10 minutes of sign up, a login code by text within 60 seconds, a DKIM pass, each typed and stored with the program.',
        '**A cadence.** Every deploy of your own product, every morning for each company watched, and every inbound email or text.',
        '**An owner for each fail.** The on call engineer for your own sign up, the program’s maintainer for a broken replay, and the account owner when a merchant’s store goes quiet.',
      ],
    },

    { kind: 'h2', id: 'jobs', text: 'What AI customers do for developers' },
    { kind: 'p', text: `**${AI_CUSTOMER.definition}**` },
    {
      kind: 'p',
      text: 'For a developer, an AI customer is a tool the agent calls. It holds the identity, does the waiting and keeps the evidence, and the agent reads facts when it needs them. It does these 5 jobs in a product or a pipeline.',
    },
    {
      kind: 'table',
      caption: '5 jobs for AI customers in a developer’s product or pipeline, each with its check, its pass mark and what happens that week',
      cols: ['Job', 'The check', 'A pass', 'That week'],
      rows: [
        [
          'Every deploy: [Website audit](/recipes/website-audit)',
          'A fresh customer signs up and enters the login code',
          'Code works, every email arrives',
          'A failing release held',
        ],
        [
          'Rival tracking: [Competitor tracking](/recipes/competitor-tracking)',
          'A customer of each rival a user names',
          'Every change dated, with its evidence',
          'Changes posted to your app as JSON',
        ],
        [
          'Prospect facts: [Prospect intelligence](/recipes/prospect-intelligence)',
          'A sign up at each account a user adds',
          'A verdict with a proof link',
          'The gap on the account record',
        ],
        [
          'Merchant checks: [Mystery shopper](/recipes/mystery-shopper)',
          'A weekly basket at each opted in store',
          'The reminder arrives within 48 hours',
          'Merchants with a silent store contacted',
        ],
        [
          'Your own bot: [Support bot check](/recipes/support-bot-check)',
          'Customers’ questions on chat and email',
          'Answers match the policy page',
          'Wrong answers sent to the prompt’s owner',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'The 10 builds behind these jobs, with the calls each makes and where its facts land, are in [what to build with AI customers](/blog/what-to-build-with-ai-customers).',
    },
    {
      kind: 'p',
      text: 'Obsession’s open source runtime fans out to 100,000 companies at once, hibernates each agent until mail, a reply or a clock wakes it, and compiles a first run’s trace into a program of code and typed questions. Raw evidence is stored by content hash, with DKIM checked on arrival and the key kept. Obsession Cloud runs it with inboxes, phone numbers and browsers in many countries and a shared record an agent can look up on day one.',
    },

    { kind: 'h2', id: 'next', text: 'What changes in 2026 and 2027' },
    {
      kind: 'list',
      items: [
        '**Live: durable execution inside agent frameworks.** Pydantic AI [supports 8 durable execution engines](' +
          PYDANTIC_DURABLE +
          '), Temporal, DBOS, Prefect and Restate among them, and Vercel’s [durable harness](' +
          VERCEL_WORKFLOWS +
          ') connects Claude Code and Codex sessions to its Workflow SDK so they resume after crashes and deployments.',
        '**Live: agents with verifiable identities.** Cloudflare’s [Web Bot Auth](' +
          BOT_AUTH +
          ') lets agents sign their requests, its [Verified bots documentation](' +
          CF_VERIFIED +
          ') says signed agents are folded into Verified bots from 1 July 2026, and [Shopify’s Storefront API](' +
          SHOPIFY_STOREFRONT +
          ') gives signed traffic higher rate limits than unsigned bots.',
        '**Live: one protocol for tools.** [MCP](' +
          MCP +
          ') is an open source standard for connecting AI applications to external systems, so an agent calls a customer-side tool the way it calls search or a browser.',
        '**Live: the AI notice in the EU.** [Article 50 of the EU AI Act](' +
          AI_ACT_50 +
          ') requires AI systems that talk to people to be designed so those people are told they are dealing with an AI, unless it is obvious, and the Act [applies from 2 August 2026](' +
          AI_ACT_113 +
          '). An AI customer that reaches a person says it is an AI.',
        '**Forecast: more agents contacting companies.** A Salesforce executive wrote on 19 October 2026 that consumers are starting to hand tasks such as cancelling subscriptions to [personal agents that can contact businesses at a volume people would not](' +
          SF_PERSONAL +
          ').',
      ],
    },
    {
      kind: 'p',
      text: 'Each change rewards an agent that keeps a stable, identified presence at each company and evidence for what it reports, which is what an AI customer holds.',
    },

    { kind: 'h2', id: 'options', text: 'Durable execution for AI agents, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to build long running AI agents. Prices from each provider’s own pages, 24 October 2026, in US dollars. Monthly plans as each page bills them. Step Functions at its US East rate',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: a session that ends', 'Nothing new to run', 'Free', 'Forgets the company when the session ends', 'Single lookups'],
        [
          'By hand: a scheduler, a database and a queue',
          'Full control on any stack',
          'Your hours\nUS median developer: $135,980 a year',
          'Timers, retries and replay are yours to build',
          'A few agents with short waits',
        ],
        [
          'Durable execution: [Temporal](' + TEMPORAL_PRICING + ')',
          'Persisted Timers lasting years, Signals and replay',
          'Self hosted: free\nCloud: from $50 per million actions, no base fee',
          'Identity and evidence are yours to build',
          'One engine for every long process',
        ],
        [
          'Durable functions: [Inngest](' + INNGEST_PRICING + ')',
          'Sleep and wait for events inside a function',
          'Free: 50,000 executions a month\nPro: from $99 a month, 1M executions',
          'Run length: 30 days Free, 90 Pro, 366 Business',
          'Event driven apps on serverless',
        ],
        [
          'Durable execution: [Restate](' + RESTATE_PRICING + '), [DBOS](' + DBOS_PRICING + ')',
          'Durable sleep and messages, self hosted or managed',
          'Restate Starter: $75 a month, 5M actions\nDBOS Pro: $99 a month, 1M checkpoints\nBoth: free to self host',
          'Identity and evidence are yours to build',
          'Teams keeping state in their own stack',
        ],
        [
          'Stateful objects: [Cloudflare Agents and Durable Objects](' + CF_WORKERS + ')',
          'An object per agent, hibernating time not billed',
          'Workers Paid: from $5 a month per account\nRequests: $0.15 a million after 1 million',
          'A runtime, with the logic yours to write',
          'Many mostly idle agents',
        ],
        [
          'Agent frameworks: [LangGraph](' + LANGSMITH_PRICING + '), [Pydantic AI](' + PYDANTIC_DURABLE + ')',
          'Checkpoints, interrupts and durable engines in the agent loop',
          'Libraries: free, MIT licence\nLangSmith Plus: $39 a seat a month',
          'Identity and evidence are yours to build',
          'Agents that pause for a person or a tool',
        ],
        [
          'Managed workflows: [AWS Step Functions](' + SFN_PRICING + '), [Vercel Workflows](' + VERCEL_PRICING + ')',
          'Waits on callbacks or sleeps, billed by transition or event',
          'Step Functions: $0.025 per 1,000 state transitions\nVercel: $0.02 per 1,000 events, plus compute, data and Queues',
          'Step Functions callbacks: up to 1 year',
          'Teams already on AWS or Vercel',
        ],
        [
          'Obsession (ours): 5 verbs over MCP, an API and an SDK',
          'AI customers with an inbox, number and browser\nShared history from day one\nEvidence with its DKIM result',
          'Not listed\nPer call or per company watched',
          'Keys open from a waitlist, a team at a time\nStops at bot walls',
          'Agents that need a customer at many companies',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Most teams combine 2 rows: an engine or runtime for the waiting, and a customer layer for identities, sign up programs and evidence. The engines differ in where state lives, from [DBOS’s Postgres database](' +
        DBOS_ARCH +
        ') with no separate orchestration server to [one Durable Object per agent](' +
        CF_AGENT_CLASS +
        ') on Cloudflare. [Temporal](' +
        TEMPORAL_HOME +
        '), [LangGraph](' +
        LG_REPO +
        ') and [Pydantic AI](' +
        PYDANTIC_REPO +
        ') are MIT licensed, and Temporal is free to host yourself.',
    },

    { kind: 'h2', id: 'when-not', text: 'When developers don’t need AI customers' },
    {
      kind: 'list',
      items: [
        '**The work ends inside one session.** Research, coding and summaries need a durable engine at most.',
        '**The agent reads public pages only.** A crawler or a browser API does that without an identity.',
        '**A few companies, checked now and then.** A spare inbox, a phone and a weekly script cover it.',
        '**The company offers an API for the data.** Shopify’s Storefront API serves a store’s products and prices directly.',
        '**The question is about your own internals.** Traces, logs and metrics answer it.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List the companies your agent must be a customer of,** with what each should send and by when.',
        '**Choose where waiting lives,** an engine or an object per agent, and check its run length against your longest wait.',
        '**Give each company its own inbox and number,** and route every webhook by recipient to that agent, keyed on the message ID.',
        '**Store every email raw,** with its headers, arrival time, a hash and the DKIM result checked on arrival.',
        '**Fill in the waiting sum** with your own agent count and engineering rate.',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you: long lived agents with their own inbox, phone number and browser, behind 5 verbs over MCP, an API and an SDK. Keys open from the waitlist, a team at a time.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about long running AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are long running AI agents?',
          a: 'Long running AI agents keep state and act over hours, weeks or months, waking when a timer fires or an outside event arrives. An agent that is a customer of another company is one, because the company acts on its own schedule.',
        },
        {
          q: 'What is durable execution for AI agents?',
          a: 'Durable execution records each step of a run so it resumes where it stopped after a crash, a deploy or a long wait. Temporal, Inngest, Restate, DBOS, Vercel Workflows and AWS Step Functions offer it, and Pydantic AI runs on several of them.',
        },
        {
          q: 'How do you build durable AI agents?',
          a: 'Keep state outside the process, wait on persisted timers, resume on webhooks routed to each agent, and make every step idempotent. An agent that is a customer also needs an identity per company and an evidence store.',
        },
        {
          q: 'Which open source AI agent framework handles long waits?',
          a: 'LangGraph and Pydantic AI are both MIT licensed. LangGraph pauses on an interrupt with its state saved by a checkpointer, and Pydantic AI runs on durable engines such as Temporal, DBOS and Restate for waits of hours or days.',
        },
        {
          q: 'How does an AI agent remember a company for months?',
          a: 'Its state lives in a durable store keyed to that company, and its memory of what happened is the evidence: every email, text and page as it arrived, with its time.',
        },
        {
          q: 'How much does it cost to keep an AI agent waiting?',
          a: 'Close to nothing while it sleeps. On Cloudflare, Durable Objects that are idle and eligible for hibernation aren’t billed for duration, while one kept in memory for 30 days uses 331,776 GB-s, about $4.15 at the published rate once an account is past its 400,000 included GB-s.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Prices and limits are as each provider’s page stated them on 24 October 2026. The wake counts, seconds per wake, sign up program rates and the store in the illustration are invented.',
    },
  ],

  sources: [
    { title: 'Timers and Start Delays', publisher: 'Temporal documentation', url: TEMPORAL_TIMERS },
    { title: 'Contexts', publisher: 'Browserbase docs', url: BB_CONTEXTS },
    { title: 'Pricing', publisher: 'Cloudflare Durable Objects docs', url: CF_DO, date: '2026-10-18' },
    { title: 'Workflow Concepts', publisher: 'Vercel Docs', url: VERCEL_CONCEPTS, date: '2026-09-10' },
    { title: 'Vercel Workflows', publisher: 'Vercel Docs', url: VERCEL_WORKFLOWS, date: '2026-09-04' },
    { title: 'Workflow Pricing and Limits', publisher: 'Vercel Docs', url: VERCEL_PRICING, date: '2026-09-16' },
    { title: 'Workflows', publisher: 'DBOS docs', url: DBOS_WORKFLOWS },
    { title: 'Scheduling & Timers', publisher: 'Restate docs', url: RESTATE_TIMERS },
    { title: 'Schedule tasks', publisher: 'Cloudflare Agents docs', url: CF_SCHEDULE, date: '2026-10-18' },
    { title: 'Usage Limits: Runs, Events & Retention', publisher: 'Inngest docs', url: INNGEST_LIMITS },
    { title: 'Discover service integration patterns in Step Functions', publisher: 'AWS Step Functions Developer Guide', url: SFN_CALLBACK },
    { title: 'Webhook Events', publisher: 'AgentMail docs', url: AGENTMAIL_EVENTS },
    { title: 'Twilio’s request to your incoming message Webhook URL', publisher: 'Twilio Docs', url: TWILIO_WEBHOOK },
    { title: 'Temporal Cloud Actions', publisher: 'Temporal documentation', url: TEMPORAL_ACTIONS },
    { title: 'step.waitForEvent(): Pause Until an Event', publisher: 'Inngest docs', url: INNGEST_WAIT },
    { title: 'Signals and external events', publisher: 'Restate docs', url: RESTATE_AWAKEABLES },
    { title: 'Communicating with Workflows', publisher: 'DBOS docs', url: DBOS_MESSAGES },
    { title: 'Interrupts', publisher: 'LangGraph docs (LangChain)', url: LG_INTERRUPTS },
    { title: 'Pricing', publisher: 'Restate', url: RESTATE_PRICING },
    { title: 'Caching Actions', publisher: 'Stagehand docs', url: STAGEHAND_CACHE },
    { title: 'RFC 6376: DomainKeys Identified Mail (DKIM) Signatures', publisher: 'IETF', url: RFC_DKIM, date: '2011-09' },
    { title: 'Persistence', publisher: 'LangGraph docs (LangChain)', url: LG_PERSISTENCE },
    { title: 'Software Developers, Quality Assurance Analysts, and Testers: Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS_DEV },
    { title: 'Durable Execution', publisher: 'Pydantic AI docs', url: PYDANTIC_DURABLE },
    { title: 'The age of agents: cryptographically recognizing agent traffic', publisher: 'Cloudflare Blog', url: BOT_AUTH, date: '2025-08-28' },
    { title: 'Verified bots', publisher: 'Cloudflare Docs', url: CF_VERIFIED, date: '2026-10-08' },
    { title: 'Storefront API reference', publisher: 'Shopify developer docs', url: SHOPIFY_STOREFRONT },
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: MCP },
    { title: 'Article 50: Transparency obligations for providers and deployers of certain AI systems', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50 },
    { title: 'Article 113: Entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113 },
    { title: 'Personal Agents Will Drive More Contact Center Traffic Than They Offset', publisher: 'Salesforce', url: SF_PERSONAL, date: '2026-10-19' },
    { title: 'Temporal Platform Pricing Options', publisher: 'Temporal', url: TEMPORAL_PRICING },
    { title: 'Durable Execution Solutions', publisher: 'Temporal', url: TEMPORAL_HOME },
    { title: 'Pricing', publisher: 'Inngest', url: INNGEST_PRICING },
    { title: 'Pricing', publisher: 'DBOS', url: DBOS_PRICING },
    { title: 'Pricing', publisher: 'Cloudflare Workers docs', url: CF_WORKERS, date: '2026-10-02' },
    { title: 'LangSmith Plans and Pricing', publisher: 'LangChain', url: LANGSMITH_PRICING },
    { title: 'AWS Step Functions Pricing', publisher: 'Amazon Web Services', url: SFN_PRICING },
    { title: 'DBOS Architecture', publisher: 'DBOS docs', url: DBOS_ARCH },
    { title: 'Agent class internals', publisher: 'Cloudflare Agents docs', url: CF_AGENT_CLASS, date: '2026-08-17' },
    { title: 'langchain-ai/langgraph', publisher: 'GitHub', url: LG_REPO },
    { title: 'pydantic/pydantic-ai', publisher: 'GitHub', url: PYDANTIC_REPO },
  ],
  related: [
    'ai-customers-for-developers',
    'how-ai-customers-work',
    'ai-customers-at-scale',
    'recipe:website-audit',
    'recipe:competitor-tracking',
    'recipe:prospect-intelligence',
  ],
}

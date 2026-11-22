import type { BlogPost } from './types'

/* The why series, Spec I (24 Oct 2026): what to build with AI customers, the developer use cases. It owns "what to build
   with ai agents" (primary) and "what can you build with ai agents", "ai agents in production examples", "ai agent
   examples github", "mcp server ideas" and "mcp server project ideas" (Google autocomplete, US and UK, 24 Oct 2026, in
   why-series/autocomplete_wave_b*.json). Readers: engineers and technical founders deciding what to build on agents
   that sign up, wait and keep evidence.
   The how-to spine: the answer, what an AI customer gives an agent (the definition word for word and the 5 verbs in the
   words of useobsession.com/developers), then 10 production builds, each with what fires it, what it does, the verbs it
   calls, the facts it returns, where they land and a pass mark, then the options compared, limits, where to start and
   the FAQ. The hero is a report of 1 invented company's week by what fired each build, unlike the build guide's log.
   Opened on 24 Oct 2026 at each source's own page: Mailosaur pricing, Checkly pricing, Panoramata pricing. From the
   library (facts.json): MCP, Shopify agentic storefronts, OpenAI's shopping help, Product.ai via Business Insider,
   Clay's 6,346 forms, the CMA, Gmail's sender guidelines, EU AI Act Articles 50 and 113, AgentMail, Twilio and
   Browserbase prices. Obsession is described only in the words of pages/developers.ts, shared5.ts and its recipes.
   Hard limits on 24 Oct 2026: no repository, package, install command, MCP or API address is printed, and the reader is
   never told to run anything of ours. Build 7 links no recipe, because the live recipes make no spam folder claim.
   Left out on purpose: Milled (its pricing page returned 403), ChatGPT agent (retired), any Obsession price.
   lumenrow.example and every value in the examples are invented. No dashes.
   22 Nov 2026: moved to the toolkit position (pieces, personas, calls and events in place of the 5 verbs). */

const MCP = 'https://modelcontextprotocol.io/docs/getting-started/intro'
const SHOPIFY_AGENTIC = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const OPENAI_SHOPPING = 'https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search'
const PRODUCT_AI = 'https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'
const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const GMAIL_SENDERS = 'https://support.google.com/a/answer/81126?hl=en'
const AI_ACT_50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const MAILOSAUR = 'https://mailosaur.com/pricing'
const CHECKLY = 'https://www.checklyhq.com/pricing/'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const AGENTMAIL_PRICING = 'https://www.agentmail.to/pricing'
const TWILIO = 'https://www.twilio.com/en-us/sms/pricing/us'
const BB_PRICING = 'https://www.browserbase.com/pricing'

export const post: BlogPost = {
  slug: 'what-to-build-with-ai-customers',
  title: 'What to build with AI agents: 10 production builds for developers',
  dek: '10 systems developers build on AI agents that sign up, wait and act, each with what fires it, the pieces it uses, what comes back and where it lands.',
  metaTitle: 'What to build with AI agents: 10 builds developers can ship',
  description:
    'What to build with AI agents that sign up, wait and act: 10 production builds, the pieces each one uses, the events it returns and where they land.',
  answer:
    'Developers can build 10 kinds of production system with AI agents that need an inbox, a phone number and a browser of their own, from sign-up and login code tests on every deploy to competitor feeds, prospect facts in Clay and AI disclosure checks. Each one makes its agent an inbox, a number or a browser in one call, then gets events such as email.received and page.visited at a webhook, the address its code listens on. Obsession is the toolkit for AI agents that gives every piece through one API and one bill.',
  primaryKeyword: 'what to build with ai agents',
  keywords: [
    'what to build with ai agents',
    'what can you build with ai agents',
    'ai agents in production examples',
    'ai agent examples github',
    'mcp server ideas',
    'mcp server project ideas',
    'ai agent examples',
  ],
  category: 'Work behind logins',
  published: '2026-10-24',
  updated: '2026-11-22',
  readingMinutes: 10,
  order: 20,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'lumenrow.example · 1 week of builds',
      period: 'A software company’s AI agents, by what fired each one',
      cols: ['Fired by', 'Build', 'Lands in'],
      rows: [
        { name: 'Deploy 4.18', cells: ['Sign up test', 'CI: passed'], tone: 'ok' },
        { name: 'Help article edit', cells: ['Support bot test', 'Slack: 1 wrong answer'], tone: 'fail' },
        { name: 'Mon 07:00', cells: ['AI notice check', 'Compliance log'], tone: 'ok' },
        { name: 'A competitor’s email', cells: ['Price agent', 'Pricing: Pro now $39'], tone: 'info' },
        { name: 'New Clay row', cells: ['Prospect facts', 'Clay: no welcome'], tone: 'info' },
        { name: 'Own newsletter', cells: ['Inbox placement', 'Dashboard: Promotions tab'], tone: 'info' },
        { name: 'Trial, day 3', cells: ['Trial log', 'Battlecard: 20% off'], tone: 'info' },
      ],
      notes: [
        'An example week at an invented company.',
        'Each result links to the email, page or transcript behind it.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Engineers and technical founders who want agents to sign up, wait and act on what companies send need an agent that lasts. [AI agents as customers](/blog/ai-customers) explains the idea, [long-running AI agents](/blog/long-running-ai-agents) covers the engineering behind them, and [the developer guide](/blog/ai-customers-for-developers) prices the parts.',
    },
    {
      kind: 'p',
      text: 'Each build has 4 decisions a team makes before writing code: what fires it, which pieces it uses, what comes back and where the results land.',
    },

    { kind: 'h2', id: 'what-it-gives', text: 'What an agent needs to act as a customer' },
    {
      kind: 'p',
      text: 'An agent on its own works for minutes inside a session. To stay a customer for weeks, it needs the parts a customer relationship needs.',
    },
    {
      kind: 'list',
      items: [
        '**An identity.** An inbox, a phone number and a browser that a company treats as a customer, made for the job.',
        '**Time.** It stays a customer for weeks or months, free while it waits, and wakes when the company sends something or a check comes due.',
        '**Every event kept.** Every email, text, page and transcript, in order, with the time it arrived and, for email, the DKIM result (the signature check that shows which domain sent it).',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. Its pieces are email inboxes, phone numbers and texts, iMessage, WhatsApp, Slack and Telegram, a cloud browser and a sandbox to run code. A [persona](/personas) puts the pieces under one identity, free while it waits. Its [developer page](/developers) shows the calls, and each of the 10 builds uses a few of them.',
    },
    {
      kind: 'list',
      items: [
        '**obsession.personas.create():** an inbox, a number and a browser under one identity, in one call.',
        '**obsession.inboxes.create() and obsession.numbers.create():** a single inbox, or a US or UK number, for a build that needs one piece.',
        '**obsession.browsers.create():** a cloud browser that keeps its logins, with a home connection included.',
        '**obsession.sandboxes.create():** a computer to run code, billed only while the CPU works.',
        '**obsession.blueprints.run():** one of the ready jobs, such as the support bot check, run on the same pieces.',
      ],
    },
    {
      kind: 'p',
      text: 'Each piece reports back as an event: email.received, sms.received, call.received, page.visited, sandbox.finished or blueprint.result. An agent reaches the calls through [MCP](' +
        MCP +
        '), the open source standard for connecting AI applications to external systems, added with claude mcp add obsession. Code reaches them through the API or a webhook, so the same build can serve a CI pipeline, a product feature or a sales agent. [How an agent signs up and waits](/blog/how-ai-customers-work) explains each step.',
    },

    { kind: 'h2', id: 'builds', text: 'What to build with AI agents: 10 builds' },
    {
      kind: 'table',
      caption: 'The 10 builds by what fires them, the pieces each uses and where its results land',
      cols: ['Build', 'Fired by', 'Pieces', 'Lands in'],
      rows: [
        ['1. Sign up and login tests', 'A deploy', 'Persona: inbox, number, browser', 'The CI run'],
        ['2. Shopping agent readiness', 'Each morning', 'Browser', 'A weekly sheet'],
        ['3. Price and offer agents', 'Each morning, a competitor’s email', 'Browser, inbox', 'The pricing agent'],
        ['4. Competitor feeds', 'A competitor’s email or text', 'A persona per competitor', 'Your app, as JSON'],
        ['5. Prospect facts', 'A new row in Clay or a CRM', 'Persona: inbox, browser', 'Clay or the CRM'],
        ['6. Support bot tests', 'Each morning, each edit', 'Browser, inbox', 'The article’s owner'],
        ['7. Inbox placement', 'Each of your own sends', 'Inbox, browser', 'A deliverability dashboard'],
        ['8. Partner code checks', 'Each Monday', 'Browser', 'The partnerships tracker'],
        ['9. Trial teardowns', 'A competitor’s trial emails', 'Persona: inbox, browser', 'A battlecard'],
        ['10. AI disclosure checks', 'Each morning', 'Browser, number, inbox', 'A compliance log'],
      ],
    },

    { kind: 'h3', id: 'sign-up-tests', text: '1. Sign up, login codes and magic links on every deploy' },
    {
      kind: 'p',
      text: 'A deploy hook creates a fresh persona with a new inbox and its own number. It signs up, enters the login code from the text, follows the sign in link in the email and reads every email the release sends, then posts a pass or a fail the pipeline can act on before the launch email goes. It meets the product as a new customer does, outside the team’s test accounts. Run it against production after each deploy as well as staging, because each environment can send through its own email and SMS providers.',
    },
    {
      kind: 'p',
      text: '**What comes back:** “Login code by text in 8 seconds”, “Sign in link arrived in 6 seconds and opened the account”. **A pass:** every code within 60 seconds and every link resolving. [QA on your own flows](/blueprints/website-audit) runs this after every release, and [Delivery monitoring](/blueprints/delivery-monitoring) follows the first 14 days in each country.',
    },

    { kind: 'h3', id: 'shopping-agents', text: '2. Shopping agent readiness' },
    {
      kind: 'p',
      text: 'AI shopping agents now read stores directly. Shopify’s help centre says [agentic storefronts are active by default for eligible stores](' +
        SHOPIFY_AGENTIC +
        '), and OpenAI’s shopping help describes [an Instant Checkout option for some eligible products and merchants](' +
        OPENAI_SHOPPING +
        '). The build checks what an agent meets: each top product’s page, price, stock and returns policy as a customer sees them, and whether a basket reaches checkout.',
    },
    {
      kind: 'p',
      text: 'AI answers about price can drift from the page. In a study Product.ai ran and [Business Insider reported](' +
        PRODUCT_AI +
        '), 85% of 913 checkable price answers matched the current or listed price. **What comes back:** “Page price £52, AI answer £64”, “Basket reached checkout”. **A pass:** page, feed and answer agree on price and stock. [Agentic commerce for merchants](/blog/agentic-commerce-for-merchants) covers what to fix.',
    },

    { kind: 'h3', id: 'price-offer', text: '3. Price and offer agents' },
    {
      kind: 'p',
      text: 'A pricing agent that responds to competitors needs what competitors show customers, including the codes they send only to subscribers. Each morning the build checks each competitor’s prices, offers and delivery, and the persona on each competitor’s list wakes when a code arrives. The agent drafts a response and a person approves it, and each proposal carries the email or page that prompted it.',
    },
    {
      kind: 'p',
      text: '**What comes back:** “Pro plan cut from $49 to $39 a month”, “Subscriber code SAVE20 arrived, 20% off”. **A pass:** every change reported the day it happens, with a before and after. [Price watch](/blueprints/price-watch) runs it as a blueprint.',
    },

    { kind: 'h3', id: 'competitor-feeds', text: '4. Competitor feeds in a marketing tool' },
    {
      kind: 'p',
      text: 'In a marketing tool, competitor tracking becomes a product feature. Users name their competitors, and the app shows every email, text, offer and price change those competitors send. One persona per competitor, shared across every user who watches it, gives a new user the history on day one. The app creates a persona for each competitor nobody watches yet and subscribes once to the event log. Each email.received and sms.received event then reaches the app as JSON, keyed so a redelivered event is stored once.',
    },
    {
      kind: 'p',
      text: '**What comes back:** “4 emails this week, 2 with offers”, “Welcome offer changed from 10% to 15%”. **A pass:** each new email in the feed within minutes of arriving. [Competitor tracking](/blueprints/competitor-tracking) is the blueprint behind it.',
    },

    { kind: 'h3', id: 'prospect-facts', text: '5. Prospect facts in a sales agent or Clay' },
    {
      kind: 'p',
      text: 'Agents already act as buyers to test companies. Clay’s team [ran agents that submitted 6,346 demo and contact forms](' +
        CLAY +
        ') and waited to see who replied. The build adds the customer side of each account. For every new row, a persona joins the newsletter or starts the trial, keeps what arrives, and the gap lands next to the contact.',
    },
    {
      kind: 'stat',
      value: '6,346',
      label: 'demo and contact forms submitted by agents run from a Clay table, which then waited to see who replied',
      source: 'Clay, September 2026',
      href: CLAY,
    },
    {
      kind: 'p',
      text: '**What comes back:** “No welcome email in 7 days”, “Opted in to texts, none arrived”. **A pass:** a verdict only once the sign up is confirmed, the spam folder checked and the full window watched. [Prospect intelligence](/blueprints/prospect-intelligence) writes the verdict and a proof link back to Clay.',
    },

    { kind: 'h3', id: 'support-bot', text: '6. Customer-side tests of your own support bot' },
    {
      kind: 'p',
      text: 'The UK’s [Competition and Markets Authority](' +
        CMA +
        ') says a business is responsible for what its AI agent does in the same way it is responsible for an employee. The build asks the bot what customers ask, on chat, email and the portal, each morning and after every update to the bot, its prompts or its knowledge base, and scores each answer against that morning’s policy page.',
    },
    {
      kind: 'p',
      text: '**What comes back:** “Chat said 60 day returns, the policy says 30”, “Handoff to a person in 4 minutes”. **A pass:** every answer matches the policy page. [Support bot check](/blueprints/support-bot-check) runs it daily, and [how to test your store’s chatbot](/blog/test-store-chatbot-returns-policy) gives the questions for a check by hand.',
    },

    { kind: 'h3', id: 'inbox-placement', text: '7. Inbox placement monitoring' },
    {
      kind: 'p',
      text: 'Email teams need to know where their own sends land. An inbox subscribed to the company’s own list keeps each campaign and account email with the time it arrived and its DKIM result. For the Gmail tab, the persona’s browser stays signed in to a Gmail address the team owns and reads which tab each send lands in. Gmail’s [sender guidelines](' +
        GMAIL_SENDERS +
        ') require senders of 5,000 or more messages a day to Gmail accounts to authenticate with SPF, DKIM and DMARC, require every sender to keep the spam rate reported in Postmaster Tools below 0.3%, and recommend keeping it below 0.10%.',
    },
    {
      kind: 'p',
      text: '**What comes back:** “Black Friday launch: Promotions, DKIM pass”, “Order confirmation: Primary, DKIM pass”. **A pass:** authentication passes and each send lands in the tab it was meant for, with an event at your webhook the day one doesn’t.',
    },

    { kind: 'h3', id: 'partner-codes', text: '8. Partner and affiliate code checks' },
    {
      kind: 'p',
      text: 'Partners keep sharing codes and banners after an offer ends. Each Monday the build visits every partner’s page as a customer, follows the link to the store, checks the partner’s tag survives the redirect, and tries the code in the basket.',
    },
    {
      kind: 'p',
      text: '**What comes back:** “SPRING15 expired 12 days ago, still on 3 partner pages”, “Link lost its affiliate tag on redirect”. **A pass:** every live code works and every link keeps its tag. [Partner checks](/blueprints/partner-checks) drafts a note to each partner for the team’s OK.',
    },

    { kind: 'h3', id: 'trials', text: '9. Trial teardowns' },
    {
      kind: 'p',
      text: 'Product and sales teams want to see how a competitor brings a new user in. The build starts each competitor’s free trial with its own inbox and browser, signs in like a new user and logs every onboarding email, prompt and offer until the trial ends. Where a trial asks for a card, the agent stops unless the team gives it the team’s own card.',
    },
    {
      kind: 'p',
      text: '**What comes back:** “Day 3: 20% off annual if upgraded within 48 hours”, “Day 13: trial ending email”. **A pass:** every email of the trial logged in order, to its last day. [Trial teardown](/blueprints/trial-teardown) is the blueprint.',
    },

    { kind: 'h3', id: 'ai-disclosure', text: '10. AI disclosure checks' },
    {
      kind: 'p',
      text: '[Article 50 of the EU AI Act](' +
        AI_ACT_50 +
        ') requires AI systems that talk to people to be designed so those people are told they are dealing with an AI, unless it is obvious, and the Act [applies from 2 August 2026](' +
        AI_ACT_113 +
        '). Each morning the build asks every channel, chat, phone, email and text, “Am I talking to a person?”, and times the wait for one.',
    },
    {
      kind: 'p',
      text: '**What comes back:** “Chat: AI notice in the first message”, “Phone: no notice before the first answer”. **A pass:** an AI notice first, a truthful answer when asked and a person within the target time. [AI disclosure check](/blueprints/ai-disclosure-check) keeps every check in the event log, dated.',
    },

    { kind: 'h2', id: 'options', text: 'Ways to build them, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to build the 10. Prices from each provider’s own pages, 24 October 2026, in US dollars, billed as each page states',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Customers find each gap first', 'Builds nobody depends on'],
        ['By hand: a spare inbox, a phone and a script', 'Any company, today', 'Your hours', 'Hours grow with each company and check', 'A handful of companies'],
        [
          'Email and SMS testing: [Mailosaur](' + MAILOSAUR + ')',
          'Inboxes for automated end to end tests',
          'Personal: from $20 a month, billed annually\nCore: from $50 a month, billed annually\nSMS and authentication: from $37.50 a month',
          'Tests your own app from your test code',
          'Builds 1 and 6 in CI',
        ],
        [
          'Synthetic monitoring: [Checkly](' + CHECKLY + ')',
          'Playwright browser checks and API checks as code',
          'Starter: $24 a month, billed annually\nTeam: $64 a month, billed annually',
          'Runs the steps you script',
          'Uptime and key paths on your own site',
        ],
        [
          'Competitor archives: [Panoramata](' + PANORAMATA + ')',
          'Emails and ads from over 20,000 brands',
          'Startup: $99 a month, 20 competitors\nProfessional: $179 a month',
          'Brands in its library or added on request',
          'Browsing competitors’ campaigns',
        ],
        [
          'Parts: [AgentMail](' + AGENTMAIL_PRICING + '), [Twilio](' + TWILIO + '), [Browserbase](' + BB_PRICING + ')',
          'An inbox, a number and a browser by API',
          'AgentMail: $20 a month, 10 inboxes\nTwilio: $1.15 a month per US number\nBrowserbase: $20 a month, 100 hours',
          'Waiting, programs and evidence are yours',
          'Teams building their own system',
        ],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone), [Browser](/browser), [Sandbox](/sandbox) and [Personas](/personas)',
          'Every piece on one key, webhook and bill\nPersonas that wait free for weeks',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment unless given your own card\nNever gets round a CAPTCHA',
          'Builds that need several pieces under one identity, for weeks',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If a build needs an inbox, a number and a browser under one identity for weeks, as builds 3, 4, 5 and 9 do, use Obsession, with every piece on one key and one bill and every event in one log. Testing tools and synthetic monitors suit builds 1 and 6 on a team’s own product, run from its own test code, and archives suit browsing competitors’ campaigns. The waiting the longer builds rely on is covered in [long-running AI agents](/blog/long-running-ai-agents).',
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**An agent on Obsession never gets round a CAPTCHA or a bot block, and stops at any identity check.** The event log keeps the step where it stopped.',
        '**A new customer sees what new customers get.** Long standing customers can receive other emails and other inbox placement.',
        '**Some builds need a real purchase.** The agent stops before payment unless it is given the team’s own card.',
        '**It keeps what a company sends and shows.** Why the company sent it sits in that company’s own systems.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Where to start' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick the build closest to a decision someone makes every week,** such as holding a release or answering a competitor’s price.',
        '**Write its pass mark before the first run.**',
        '**Decide where its results land:** the CI run, a webhook, Slack, a CRM or Clay.',
        '**Start with 5 to 10 companies and 1 channel,** then widen it once the pass marks hold.',
      ],
    },
    {
      kind: 'cta',
      text: 'An inbox, a phone number, a browser and a sandbox for each agent, on one key, one webhook and one bill. The Free plan includes 3 inboxes, 1 number and 10 browser hours, with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about what to build with AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What can you build with AI agents?',
          a: 'Anything where an agent has to act as a customer over time: release tests of your own sign up, competitor price and offer feeds, prospect facts in Clay, support bot tests, inbox placement, partner code checks, trial logs and AI disclosure checks. Each needs an inbox, a number, a browser and time.',
        },
        {
          q: 'What are examples of AI agents in production?',
          a: 'Examples include a release test that holds a deploy when a login code stops arriving, a pricing agent that responds to a competitor’s subscriber code, and a sales agent that opens with a fact about the prospect’s own sign up. Each runs for months, so each needs an identity, waiting and evidence.',
        },
        {
          q: 'What are good MCP server ideas?',
          a: 'Good MCP servers give an agent something it can’t do alone, such as receive an email, take a text or stay signed in to a website. Obsession’s MCP server gives an agent in Claude or Cursor its own inbox, number and browser, added with claude mcp add obsession.',
        },
        {
          q: 'What is a persona?',
          a: 'An AI agent with its own inbox, phone number and browser under one identity, made in one call. It is free while it waits, wakes in 50 ms when something arrives, and every event lands in one event log.',
          link: { label: 'See how it works', to: '/personas' },
        },
        {
          q: 'Do these builds need a large model on every run?',
          a: 'No. Most steps are code you write against the pieces, such as filling a form or reading a code from a text. A model is needed only where the agent reads a page or writes a reply, and you can bring your own model key.',
        },
        {
          q: 'How do the results reach my tools?',
          a: 'Through MCP for an agent, the API for code, or a webhook that receives each event as it lands, such as email.received or blueprint.result, and passes it to a CI run, Slack, a CRM or Clay.',
        },
        {
          q: 'What does it cost?',
          a: 'The Free plan includes 3 inboxes, 3,000 emails, 1 number, 10 browser hours and 10 sandbox hours, with no credit card. Paid plans are $20, $99 or $499 a month, and past that each piece is billed at its list rate, such as $0.50 an inbox a month or $0.10 a browser hour.',
          link: { label: 'See pricing', to: '/pricing' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Prices are as each provider’s page stated them on 24 October 2026. The company, the values in each example fact and the week in the illustration are invented.',
    },
  ],

  sources: [
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: MCP },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_AGENTIC },
    { title: 'Shopping with ChatGPT Search', publisher: 'OpenAI Help Center', url: OPENAI_SHOPPING },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests', publisher: 'Business Insider, republished by DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Email sender guidelines', publisher: 'Google Workspace Admin Help', url: GMAIL_SENDERS },
    { title: 'Article 50: Transparency obligations for providers and deployers of certain AI systems', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50 },
    { title: 'Article 113: Entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113 },
    { title: 'Simple, predictable pricing', publisher: 'Mailosaur', url: MAILOSAUR },
    { title: 'Checkly Pricing Plans: Flexible Synthetic Monitoring Solution', publisher: 'Checkly', url: CHECKLY },
    { title: 'Panoramata Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Pricing', publisher: 'AgentMail', url: AGENTMAIL_PRICING },
    { title: 'SMS Pricing in United States for Text Messaging', publisher: 'Twilio', url: TWILIO },
    { title: 'Browserbase Pricing: Free, $20, $99, or Custom', publisher: 'Browserbase', url: BB_PRICING },
  ],
  related: [
    '/developers',
    'long-running-ai-agents',
    'ai-customers-for-developers',
    'how-ai-customers-work',
    'recipe:website-audit',
    'recipe:price-watch',
    'recipe:prospect-intelligence',
    'recipe:trial-teardown',
  ],
}

import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

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
   lumenrow.example and every value in the examples are invented. No dashes. */

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
  title: 'What to build with AI customers: 10 production builds',
  dek: '10 systems developers build on agents that sign up, wait and keep evidence, each with what fires it, the calls it makes, the facts it returns and where they land.',
  metaTitle: 'What to build with AI agents: 10 builds with AI customers',
  description:
    'What to build with AI agents that are customers of other companies: 10 production builds, the calls each makes, the facts it returns and where they land.',
  answer:
    'Developers can build 10 kinds of production system on AI customers, agents that stay customers of other companies, from sign up and login code tests on every deploy to competitor feeds, prospect facts in Clay and AI disclosure checks. Each calls a few of 5 verbs, lookup, facts, evidence, become_customer and notify, and sends dated facts with their evidence to a test run, a webhook, Slack, a CRM or Clay.',
  primaryKeyword: 'what to build with ai agents',
  keywords: [
    'what to build with ai agents',
    'what can you build with ai agents',
    'ai agents in production examples',
    'ai agent examples github',
    'mcp server ideas',
    'mcp server project ideas',
    'ai agent examples',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-24',
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
      period: 'A software company’s AI customers, by what fired each one',
      cols: ['Fired by', 'Build', 'Facts land in'],
      rows: [
        { name: 'Deploy 4.18', cells: ['Sign up test', 'CI: passed'], tone: 'ok' },
        { name: 'Help article edit', cells: ['Support bot test', 'Slack: 1 wrong answer'], tone: 'fail' },
        { name: 'Mon 07:00', cells: ['AI notice check', 'Compliance log'], tone: 'ok' },
        { name: 'A rival’s email', cells: ['Price agent', 'Pricing: Pro now $39'], tone: 'info' },
        { name: 'New Clay row', cells: ['Prospect facts', 'Clay: no welcome'], tone: 'info' },
        { name: 'Own newsletter', cells: ['Inbox placement', 'Dashboard: Promotions tab'], tone: 'info' },
        { name: 'Trial, day 3', cells: ['Trial log', 'Battlecard: 20% off'], tone: 'info' },
      ],
      notes: [
        'An example week at an invented company, showing 7 of the 10 builds.',
        'Each fact links to the email, page or transcript behind it.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Engineers and technical founders who want agents to sign up, wait and report what companies send their customers need a customer that lasts. [What AI customers are](/blog/ai-customers) defines the term, [why developers need AI customers](/blog/long-running-ai-agents) covers the engineering behind them, and [AI customers for developers](/blog/ai-customers-for-developers) prices the parts.',
    },
    {
      kind: 'p',
      text: 'Each build has 4 things a team decides before writing code: what fires it, which calls it makes, which facts it returns and where those facts land.',
    },

    { kind: 'h2', id: 'what-it-gives', text: 'What an AI customer gives an agent' },
    {
      kind: 'p',
      text: `${AI_CUSTOMER.definition} An agent on its own works for minutes inside a session. An AI customer adds the parts a customer relationship needs.`,
    },
    {
      kind: 'list',
      items: [
        '**An identity:** an inbox, a phone number and a browser that a company treats as a customer, created for the job.',
        '**Time:** it stays a customer for weeks or months, and wakes when the company sends something or a check comes due.',
        '**Evidence:** every email, text, page and transcript kept as it arrived, with the time and, for email, the DKIM result checked on arrival.',
      ],
    },
    {
      kind: 'p',
      text: 'An AI customer system exposes this as a few calls. Obsession’s [developer page](/developers) names 5 verbs, offered over MCP, an API and an SDK, and each of the 10 builds uses some of them.',
    },
    {
      kind: 'list',
      items: [
        '**lookup:** which companies the shared record already covers, and since when.',
        '**facts:** what a company did, as facts, each with its evidence.',
        '**evidence:** the raw email, page or transcript behind a fact.',
        '**become_customer:** start AI customers, or join ones already there.',
        '**notify:** new facts pushed to your webhook, Slack or CRM as they land.',
      ],
    },
    {
      kind: 'p',
      text: 'An agent reaches them through [MCP](' +
        MCP +
        '), the open source standard for connecting AI applications to external systems, and code reaches them through the API or a webhook. The same build can then serve a CI pipeline, a product feature or a sales agent. [How AI customers work](/blog/how-ai-customers-work) explains the sign up, the sleep and the evidence step by step.',
    },

    { kind: 'h2', id: 'builds', text: 'What to build with AI agents: 10 builds' },
    {
      kind: 'table',
      caption: 'The 10 builds by what fires them, the calls each makes and where its facts land',
      cols: ['Build', 'Fired by', 'Calls', 'Facts land in'],
      rows: [
        ['1. Sign up and login tests', 'A deploy', 'become_customer, facts, notify', 'The CI run'],
        ['2. Shopping agent readiness', 'Each morning', 'become_customer, facts, evidence', 'A weekly sheet'],
        ['3. Price and offer agents', 'Each morning, a rival’s email', 'lookup, become_customer, notify', 'The pricing agent'],
        ['4. Competitor feeds', 'A rival’s email or text', 'lookup, facts, become_customer, notify', 'Your app, as JSON'],
        ['5. Prospect facts', 'A new row in Clay or a CRM', 'lookup, become_customer, facts, evidence', 'Clay or the CRM'],
        ['6. Support bot tests', 'Each morning, each edit', 'become_customer, facts, evidence', 'The article’s owner'],
        ['7. Inbox placement', 'Each of your own sends', 'become_customer, facts, notify', 'A deliverability dashboard'],
        ['8. Partner code checks', 'Each Monday', 'become_customer, facts, evidence', 'The partnerships tracker'],
        ['9. Trial teardowns', 'A rival’s trial emails', 'lookup, become_customer, facts', 'A battlecard'],
        ['10. AI disclosure checks', 'Each morning', 'become_customer, evidence, notify', 'A compliance log'],
      ],
    },

    { kind: 'h3', id: 'sign-up-tests', text: '1. Sign up, login codes and magic links on every deploy' },
    {
      kind: 'p',
      text: 'A deploy hook starts a fresh AI customer with a new inbox and a real number. It signs up, enters the login code from the text, follows the sign in link in the email and reads every email the release sends, then posts a pass or a fail the pipeline can act on before the launch email goes. It meets the product as a new customer does, outside the team’s test accounts. Run it against production after each deploy as well as staging, because each environment can send through its own email and SMS providers.',
    },
    {
      kind: 'p',
      text: '**Facts:** “Login code by text in 8 seconds”, “Sign in link arrived in 6 seconds and opened the account”. **A pass:** every code within 60 seconds and every link resolving. [Website audit](/recipes/website-audit) runs this after every release, and [Delivery monitoring](/recipes/delivery-monitoring) follows the first 14 days in each country.',
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
        '), 85% of 913 checkable price answers matched the current or listed price. **Facts:** “Page price £52, AI answer £64”, “Basket reached checkout”. **A pass:** page, feed and answer agree on price and stock. [Agentic commerce for merchants](/blog/agentic-commerce-for-merchants) covers what to fix.',
    },

    { kind: 'h3', id: 'price-offer', text: '3. Price and offer agents' },
    {
      kind: 'p',
      text: 'A pricing agent that responds to rivals needs what rivals show customers, including the codes they send only to subscribers. Each morning the build checks each rival’s prices, offers and delivery, and the AI customer on each rival’s list wakes when a code arrives. The agent drafts a response and a person approves it, and each proposal carries the email or page that prompted it.',
    },
    {
      kind: 'p',
      text: '**Facts:** “Pro plan cut from $49 to $39 a month”, “Subscriber code SAVE20 arrived, 20% off”. **A pass:** every change reported the day it happens, with a before and after. [Price watch](/recipes/price-watch) runs it as a recipe.',
    },

    { kind: 'h3', id: 'competitor-feeds', text: '4. Competitor feeds in a marketing tool' },
    {
      kind: 'p',
      text: 'In a marketing tool, rival tracking becomes a product feature. Users name their rivals, and the app shows every email, text, offer and price change those rivals send. One AI customer per rival, shared across every user who watches it, gives a new user the history on day one. The app asks lookup first, reads facts for the history, and starts AI customers for the rivals nobody watches yet. A notify webhook then posts each new fact as JSON, keyed so a redelivered event is stored once.',
    },
    {
      kind: 'p',
      text: '**Facts:** “4 emails this week, 2 with offers”, “Welcome offer changed from 10% to 15%”. **A pass:** each new email in the feed within minutes of arriving. [Competitor tracking](/recipes/competitor-tracking) is the recipe behind it.',
    },

    { kind: 'h3', id: 'prospect-facts', text: '5. Prospect facts in a sales agent or Clay' },
    {
      kind: 'p',
      text: 'Agents already act as buyers to test companies. Clay’s team [ran agents that submitted 6,346 demo and contact forms](' +
        CLAY +
        ') and waited to see who replied. The build puts the customer side of each account on the record: for every new row, an AI customer joins the newsletter or starts the trial, keeps what arrives, and the gap lands next to the contact.',
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
      text: '**Facts:** “No welcome email in 7 days”, “Opted in to texts, none arrived”. **A pass:** a verdict only once the sign up is confirmed, the spam folder checked and the full window watched. [Prospect intelligence](/recipes/prospect-intelligence) writes the verdict and a proof link back to Clay.',
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
      text: '**Facts:** “Chat said 60 day returns, the policy says 30”, “Handoff to a person in 4 minutes”. **A pass:** every answer matches the policy page. [Support bot check](/recipes/support-bot-check) runs it daily, and [how to test your store’s chatbot](/blog/test-store-chatbot-returns-policy) gives the questions for a check by hand.',
    },

    { kind: 'h3', id: 'inbox-placement', text: '7. Inbox placement monitoring' },
    {
      kind: 'p',
      text: 'Email teams need to know where their own sends land. AI customers subscribed to the company’s list on Gmail inboxes record the Gmail tab each campaign and each account email arrives in, with its DKIM result. Gmail’s [sender guidelines](' +
        GMAIL_SENDERS +
        ') require senders of 5,000 or more messages a day to Gmail accounts to authenticate with SPF, DKIM and DMARC, require every sender to keep the spam rate reported in Postmaster Tools below 0.3%, and recommend keeping it below 0.10%.',
    },
    {
      kind: 'p',
      text: '**Facts:** “Black Friday launch: Promotions, DKIM pass”, “Order confirmation: Primary, DKIM pass”. **A pass:** authentication passes and each send lands in the tab it was meant for, with a notify call the day one doesn’t.',
    },

    { kind: 'h3', id: 'partner-codes', text: '8. Partner and affiliate code checks' },
    {
      kind: 'p',
      text: 'Partners keep sharing codes and banners after an offer ends. Each Monday the build visits every partner’s page as a customer, follows the link to the store, checks the partner’s tag survives the redirect, and tries the code in the basket.',
    },
    {
      kind: 'p',
      text: '**Facts:** “SPRING15 expired 12 days ago, still on 3 partner pages”, “Link lost its affiliate tag on redirect”. **A pass:** every live code works and every link keeps its tag. [Partner checks](/recipes/partner-checks) drafts a note to each partner for the team’s OK.',
    },

    { kind: 'h3', id: 'trials', text: '9. Trial teardowns' },
    {
      kind: 'p',
      text: 'Product and sales teams want to see how a rival brings a new user in. The build starts each rival’s free trial with its own inbox and browser, signs in like a new user and logs every onboarding email, prompt and offer until the trial ends. Where a trial asks for a card, it uses one the team funds.',
    },
    {
      kind: 'p',
      text: '**Facts:** “Day 3: 20% off annual if upgraded within 48 hours”, “Day 13: trial ending email”. **A pass:** every email of the trial logged in order, to its last day. [Trial teardown](/recipes/trial-teardown) is the recipe.',
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
      text: '**Facts:** “Chat: AI notice in the first message”, “Phone: no notice before the first answer”. **A pass:** an AI notice first, a truthful answer when asked and a person within the target time. [AI disclosure check](/recipes/ai-disclosure-check) keeps a dated record of every check.',
    },

    { kind: 'h2', id: 'options', text: 'Ways to build them, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
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
          'Browsing rivals’ campaigns',
        ],
        [
          'Parts: [AgentMail](' + AGENTMAIL_PRICING + '), [Twilio](' + TWILIO + '), [Browserbase](' + BB_PRICING + ')',
          'An inbox, a number and a browser by API',
          'AgentMail: $20 a month, 10 inboxes\nTwilio: $1.15 a month per US number\nBrowserbase: $20 a month, 100 hours',
          'Waiting, programs and evidence are yours',
          'Teams building their own system',
        ],
        [
          'Obsession (ours): 5 verbs over MCP, an API and an SDK',
          'AI customers at any company\nShared history from day one',
          'Not listed\nPer call or per company watched',
          'Keys open from a waitlist, a team at a time\nStops at bot walls',
          'Products and pipelines that watch many companies',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Testing tools and synthetic monitors suit builds 1 and 6 on a team’s own product, run from its own test code. Archives suit browsing rivals’ campaigns. Builds 3, 4, 5 and 9 need a customer at many companies for months, and the waiting and evidence they rely on are covered in [why developers need AI customers](/blog/long-running-ai-agents).',
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**A bot wall or a CAPTCHA stops an AI customer,** and the report names the step it couldn’t test.',
        '**A new customer sees what new customers get.** Long standing customers can receive other emails and other inbox placement.',
        '**Some builds need a real purchase,** on a card the owner funds.',
        '**It records what a company sends and shows.** Why the company sent it sits in that company’s own systems.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Where to start' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick the build closest to a decision someone makes every week,** such as holding a release or answering a rival’s price.',
        '**Write its pass mark before the first run.**',
        '**Decide where its facts land:** the CI run, a webhook, Slack, a CRM or Clay.',
        '**Start with 5 to 10 companies and 1 channel,** then widen it once the pass marks hold.',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you: long lived agents with their own inbox, phone number and browser, behind 5 verbs over MCP, an API and an SDK. Keys open from the waitlist, a team at a time.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about what to build with AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What can you build with AI agents?',
          a: 'Anything where an agent has to act as a customer over time: release tests of your own sign up, rival price and offer feeds, prospect facts in Clay, support bot tests, inbox placement, partner code checks, trial logs and AI disclosure checks. Each needs an inbox, a number, a browser and time.',
        },
        {
          q: 'What are examples of AI agents in production?',
          a: 'Examples include a release test that holds a deploy when a login code stops arriving, a pricing agent that responds to a rival’s subscriber code, and a sales agent that opens with a fact about the prospect’s own sign up. Each runs for months, so each needs an identity, waiting and evidence.',
        },
        {
          q: 'What are good MCP server ideas?',
          a: 'Good MCP servers give an agent something it can’t find on the web, such as what companies send their customers. An AI customer server answers lookup, facts and evidence calls, so an agent in Claude or Cursor can ask what a rival emailed this week and get the email itself.',
        },
        {
          q: 'What is an AI customer?',
          a: AI_CUSTOMER.definition,
        },
        {
          q: 'Do these builds need a large model on every run?',
          a: 'No. The first run on a platform is an agent’s, and its trace compiles into a program of code, typed questions and small agents. A small model answers the typed questions, and a frontier model learns new platforms and catches the odd case.',
        },
        {
          q: 'How do the facts reach my tools?',
          a: 'Through MCP for an agent, an HTTP API for code, or a webhook that pushes each new fact as it lands, on to a CI run, Slack, a CRM or Clay.',
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
    'long-running-ai-agents',
    'ai-customers-for-developers',
    'how-ai-customers-work',
    'recipe:website-audit',
    'recipe:price-watch',
    'recipe:prospect-intelligence',
    'recipe:trial-teardown',
  ],
}

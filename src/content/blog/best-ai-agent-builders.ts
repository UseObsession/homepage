import type { BlogPost } from './types'

/* Agent business wave (_research/seo/agent-business-24nov/PLAN.md, 24 Nov 2026): the best AI agent builders.
   Primary "best ai agent builders"; also "where can i build ai agents", "best ai agent builder platform", "best ai agent
   builder free" (Google suggestions, US, 24 Nov 2026, autocomplete_24nov.json). Answers "where can I build apps for an AI
   agent business". "ai agent builder no code" stays with /no-code, which this guide links.
   Reader: founders and freelancers starting an agent business, and teams choosing where to build. Serves /no-code.
   Every other service is described only from its own pages, read on 24 Nov 2026, with prices in US dollars as listed
   (n8n lists euros). Pages that list no plan price (Make's plan cards, Relevance AI) are said to list none; Softr's
   pricing page did not load, so no Softr price or plan is claimed. OpenAI's Agent Builder page says OpenAI is
   deprecating it, with a shutdown on 30 Nov 2026; this guide says so. Obsession is not an app builder or a prompt
   based agent builder, and says so. No dashes. */

const MAKE = 'https://www.make.com/en/pricing'
const N8N = 'https://n8n.io/pricing/'
const ZAPIER = 'https://zapier.com/pricing'
const MINDSTUDIO = 'https://www.mindstudio.ai/pricing'
const RELEVANCE = 'https://www.relevanceai.com/pricing'
const LINDY = 'https://www.lindy.ai/pricing'
const OPENAI_BUILDER = 'https://developers.openai.com/api/docs/guides/agent-builder'
const OPENAI_SDK = 'https://openai.github.io/openai-agents-python/'
const LANGGRAPH = 'https://docs.langchain.com/oss/python/langgraph/overview'
const LANGSMITH = 'https://www.langchain.com/pricing'
const VERCEL_SDK = 'https://ai-sdk.dev/docs/introduction'
const BUBBLE = 'https://bubble.io/pricing'

export const post: BlogPost = {
  slug: 'best-ai-agent-builders',
  title: 'The best AI agent builders, and what your agent needs to act',
  dek: 'No-code builders, developer frameworks and app builders compared on what each does and what it costs, as listed on 24 November 2026, plus the one thing none of them include: an inbox, a phone number and a browser for the agent.',
  metaTitle: 'Best AI agent builders: no-code, code and app builders 2026',
  description:
    'The best AI agent builders compared: Make, n8n, Zapier Agents, MindStudio, Lindy, Relevance AI, OpenAI, LangGraph and Bubble, with free plans and prices.',
  answer:
    'The best AI agent builder depends on who builds. Make, n8n and Zapier Agents suit people who build without code, MindStudio and Lindy build agents from a prompt, and the OpenAI Agents SDK, LangGraph and the Vercel AI SDK suit developers. Whichever you pick, the agent needs its own inbox, phone number and browser to act, which Obsession supplies under one persona, with blueprints for people who would rather not build.',
  primaryKeyword: 'best ai agent builders',
  keywords: ['best ai agent builders', 'where can i build ai agents', 'best ai agent builder platform', 'best ai agent builder free'],
  category: 'Build agent products',
  order: 3,
  published: '2026-11-24',
  updated: '2026-11-24',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'Where each type of tool sits',
      rows: [
        {
          name: 'No-code builders',
          who: 'Make, n8n, Zapier Agents',
          nodes: ['Your steps', 'Builder', 'Your apps'],
          links: ['drag into', 'run on'],
        },
        {
          name: 'Prompt builders',
          who: 'MindStudio, Lindy, Relevance AI',
          nodes: ['A prompt', 'Agent builder', 'A working agent'],
          links: ['becomes', 'runs as'],
        },
        {
          name: 'Developer frameworks',
          who: 'OpenAI Agents SDK, LangGraph, Vercel AI SDK',
          nodes: ['Your code', 'Framework', 'A model'],
          links: ['calls', 'drives'],
        },
        {
          name: 'What the agent acts with',
          who: 'Obsession',
          nodes: ['Any agent', 'One persona', 'Inbox, number, browser'],
          links: ['uses', 'reaches'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'A builder decides what the agent does. Obsession gives it an inbox, a number and a browser to do it with.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An agent business needs two parts: a builder that decides what the agent does, and tools that let it act in the world. A builder does the first. A person starting out asks where to build, and the answer depends on whether they write code, how many runs they need and what the agent has to touch: a spreadsheet, a customer’s inbox, a supplier portal. Free plans differ a great deal, so each is listed here as its page shows it.',
    },
    { kind: 'p', text: 'The tools fall into 3 kinds:' },
    {
      kind: 'list',
      items: [
        '**No-code and low-code builders:** Make, n8n and Zapier Agents, where you connect steps on a canvas or in a list.',
        '**Builders you drive with a prompt:** MindStudio, Lindy and Relevance AI, where you describe the agent and the service assembles it.',
        '**Developer frameworks:** the OpenAI Agents SDK and Agent Builder, LangGraph and the Vercel AI SDK, where you write code.',
      ],
    },
    {
      kind: 'p',
      text: 'App builders such as Bubble sit beside them: they build the screen your customers use, not the agent.',
    },

    { kind: 'h2', id: 'checks', text: 'What to check before you choose' },
    {
      kind: 'list',
      items: [
        '**Who builds.** If nobody on the team writes code, start with a canvas or prompt builder.',
        '**What a run costs.** Plans count different units: Make counts credits, n8n workflow executions, Zapier tasks and agent activities, Lindy credits. A busy agent can use a free plan in a day.',
        '**Where it can act.** Most builders connect to apps through an API. Few give the agent its own email address, phone number or browser.',
        '**Who owns the agent.** Open source frameworks let you move; a hosted builder keeps the agent with its own service.',
        '**What you show customers.** An agent business usually needs a front end where customers sign in, which a builder does not provide.',
      ],
    },
    {
      kind: 'p',
      text: 'Every service is described from its own pricing or documentation page as listed on 24 November 2026. A plan with no price on its page is described as listing none.',
    },

    { kind: 'h2', id: 'no-code', text: 'No-code and low-code builders' },

    { kind: 'h3', id: 'make', text: 'Make' },
    {
      kind: 'p',
      text: '[Make’s pricing page](' +
        MAKE +
        ') lists a Free plan with 1,000 credits a month and names Core, Pro and Teams plans on top of it. The text we could read gives no prices for them, so check the page for current figures.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a visual canvas for chaining apps, with a free plan to start.',
        '**Where it stops:** the agent works through the apps you connect; the page does not describe an inbox or number of its own for the agent.',
        '**Best for:** people who already think in flows.',
      ],
    },

    { kind: 'h3', id: 'n8n', text: 'n8n' },
    {
      kind: 'p',
      text: '[n8n’s pricing page](' +
        N8N +
        ') lists Starter at €20 a month billed annually for 2,500 workflow executions, Pro at €50 for 10,000 and Business at €667 for 40,000. A standard self-hosted version is on GitHub, and Business is self-hosted only.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a version you can host yourself, with workflows you can read step by step.',
        '**Where it stops:** self-hosting means you run the server; the agent’s inbox and phone number come from elsewhere.',
        '**Best for:** technical builders who want to own the workflow. [An n8n email agent](/blog/n8n-email-agent) shows one built end to end.',
      ],
    },

    { kind: 'h3', id: 'zapier', text: 'Zapier Agents' },
    {
      kind: 'p',
      text: '[Zapier’s pricing page](' +
        ZAPIER +
        ') lists Free at $0 with 100 tasks a month and Pro from $19.99 a month billed annually for 750 tasks ($29.99 billed monthly). Zapier Agents is an add-on with its own meter: Free includes 400 activities a month, and Pro includes 1,500 activities from about $33.33 a month billed annually.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** agents that work inside the apps a team already connects to Zapier.',
        '**Where it stops:** tasks and activities are counted separately, so a busy agent needs both meters watched.',
        '**Best for:** teams already living in Zapier.',
      ],
    },

    { kind: 'h2', id: 'prompt', text: 'Builders you drive with a prompt' },

    { kind: 'h3', id: 'mindstudio', text: 'MindStudio' },
    {
      kind: 'p',
      text: '[MindStudio’s pricing page](' +
        MINDSTUDIO +
        ') lists Remy with a 30-day free trial and then $99 a month for up to 5 builders, with AI usage billed at cost, and a Business plan with a custom price. Its Individual plan is marked as legacy.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** building agents and apps without code, with a free Chrome extension on every plan.',
        '**Where it stops:** model usage is billed on top.',
        '**Best for:** a solo builder who wants a working agent from a description.',
      ],
    },

    { kind: 'h3', id: 'lindy', text: 'Lindy' },
    {
      kind: 'p',
      text: '[Lindy’s pricing page](' +
        LINDY +
        ') lists Free at $0 with $50 of credits that last 7 days. The Team plan starts at $29.99 per user a month for 3,000 credits, with larger credit packs up to $9,999.50 a month and top-ups at $10 per 1,000 credits.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** assistants for everyday business tasks.',
        '**Where it stops:** free credits last 7 days.',
        '**Best for:** an assistant for one person or team.',
      ],
    },

    { kind: 'h3', id: 'relevance', text: 'Relevance AI' },
    {
      kind: 'p',
      text: '[Relevance AI’s pricing page](' +
        RELEVANCE +
        ') shows one plan, Enterprise, described as for companies that want to grow without adding headcount through an AI workforce. It lists unlimited agents, tools, users and projects, plus single sign-on and audit logs. It lists no price and says to talk to its sales team.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** a service for a company running many agents, with enterprise controls.',
        '**Where it stops:** the page lists no price.',
        '**Best for:** a business buying through a sales conversation.',
      ],
    },

    { kind: 'h2', id: 'developers', text: 'Developer frameworks' },

    { kind: 'h3', id: 'openai', text: 'OpenAI Agents SDK and Agent Builder' },
    {
      kind: 'p',
      text: 'The [OpenAI Agents SDK](' +
        OPENAI_SDK +
        ') is a lightweight Python package built on agents, handoffs and guardrails, with tracing, sessions for memory, voice agents and MCP tool calling. Its page states no licence. [Agent Builder](' +
        OPENAI_BUILDER +
        ') is a visual canvas for multi-step agent workflows, but OpenAI’s page says it is deprecating Agent Builder, with a shutdown scheduled for 30 November 2026. Workflows can be copied out as Agents SDK code.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** few abstractions and built-in tracing, from the model maker.',
        '**Where it stops:** Python first on its page, and the visual builder is closing.',
        '**Best for:** developers who want the smallest framework. [Tools for the OpenAI Agents SDK](/blog/openai-agents-sdk-tools) covers what to connect.',
      ],
    },

    { kind: 'h3', id: 'langgraph', text: 'LangChain and LangGraph' },
    {
      kind: 'p',
      text: '[LangGraph’s overview](' +
        LANGGRAPH +
        ') describes a low-level framework for long-running, stateful agents: workflows as graphs, with saved state, pauses for a human and memory across sessions. Its page shows Python and states no licence. LangSmith, the tracing product, is priced on [LangChain’s page](' +
        LANGSMITH +
        '): Developer is $0 per seat for up to 5,000 traces a month and Plus is $39 per seat.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** durable agents that resume after a failure.',
        '**Where it stops:** it is low level, so you write the steps.',
        '**Best for:** engineers building agents that run for hours or days.',
      ],
    },

    { kind: 'h3', id: 'vercel', text: 'Vercel AI SDK' },
    {
      kind: 'p',
      text: '[The AI SDK](' +
        VERCEL_SDK +
        ') is described as the TypeScript toolkit for AI applications and agents, with a common API across model providers and hooks for chat interfaces in React, Next.js, Vue and Svelte. Its page states neither a licence nor a price.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** the agent and its web screen in one TypeScript project.',
        '**Where it stops:** TypeScript only on its page.',
        '**Best for:** web developers. [Tools for the Vercel AI SDK](/blog/vercel-ai-sdk-tools) covers what to connect.',
      ],
    },

    { kind: 'h2', id: 'apps', text: 'App builders for the front end' },
    {
      kind: 'p',
      text: 'An agent business often needs a place where customers sign in and see results. [Bubble’s pricing page](' +
        BUBBLE +
        ') lists Free at $0, Starter at $32 a month billed annually, Growth at $119 and Team at $349. Softr builds client portals in the same way, but its pricing page did not load when we checked, so we claim no price for it. Neither builds the agent: you connect one built elsewhere.',
    },

    { kind: 'h2', id: 'compare', text: 'The options side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 24 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'AI agent builders compared, with the free plan and entry price each page lists.',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Make: no-code builder', 'Visual canvas of apps', 'Free with 1,000 credits; paid plans list no price', 'Works through connected apps', 'Flow thinkers'],
        ['n8n: no-code builder', 'Free self-hosted edition', '€20 a month annual for 2,500 executions', 'You run the server if free', 'Technical builders'],
        ['Zapier Agents: no-code builder', 'Agents inside Zapier’s app connections', 'Free 100 tasks; Pro $19.99 a month annual', 'Tasks and activities counted apart', 'Teams on Zapier'],
        ['MindStudio: prompt builder', 'Agents from a description', 'Remy $99 a month after a 30-day trial', 'AI usage billed on top', 'Small teams of builders'],
        ['Lindy: prompt builder', 'Business assistants', '$50 credit for 7 days; $29.99 a user', 'Free credits expire', 'A team assistant'],
        ['Relevance AI: prompt builder', 'Many agents with controls', 'No price listed', 'Sales conversation', 'Larger businesses'],
        ['OpenAI Agents SDK: framework', 'Small, with tracing', 'No price on its page', 'Python first; Agent Builder closing', 'Developers'],
        ['LangGraph: framework', 'Durable, stateful agents', 'LangSmith from $0 a seat', 'Low level', 'Engineers'],
        ['Vercel AI SDK: framework', 'Agent and web screen together', 'No price on its page', 'TypeScript', 'Web developers'],
        ['Bubble: app builder', 'Customer-facing screens', 'Free; Starter $32 a month annual', 'Does not build the agent', 'A front end'],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone), [Browser](/browser), [Blueprints](/blueprints)',
          'The inbox, number and browser any agent acts with, under one persona, plus blueprints that run a job',
          'Free; $20 Developer; $0.50 inbox, $2 number, $0.10 browser hour',
          'Not an app builder or a prompt based agent builder',
          'An agent that has to act, or a job done without building',
        ],
      ],
    },

    { kind: 'h2', id: 'month', text: 'What a first month costs' },
    {
      kind: 'p',
      text: 'A freelancer running one agent that handles about 700 runs a month has several options at list prices. Zapier Pro at 750 tasks is $19.99 on annual billing, n8n Starter is €20, MindStudio’s Individual plan is $20 plus model usage, and Make’s free plan covers up to 1,000 credits. Lindy’s Team plan starts at $29.99 a user. Then the agent needs to act: on Obsession an inbox is $0.50 a month and a US number $2, so $2.50 at list rates, before texts.',
    },
    {
      kind: 'p',
      text: 'The first month is rarely the builder’s fee. It is the model usage and the pieces the agent acts with, so price those before you choose a builder.',
    },

    { kind: 'h2', id: 'obsession', text: 'Where Obsession fits: the pieces any of them call' },
    {
      kind: 'p',
      text: 'Obsession is not an app builder and not a prompt based agent builder. It is the toolkit an agent built in any of them needs to act: phone numbers, inboxes, browsers and sandboxes on one API and one bill. A [persona](/personas) puts an inbox, a US or UK number, messaging (iMessage, WhatsApp, Slack and Telegram) and a browser under one identity, so the login code a site sends reaches the agent the site expects. Every email, text, call and page lands in one event log, and results can go to Zapier, Make, n8n, a sheet or your own webhook. An inbox and a number cost $2.50 a month at list rates, so a business running 1,000 client agents pays about $2,500 a month for both and one running 100,000 agents about $250,000, on one bill and one event log.',
    },
    {
      kind: 'list',
      items: [
        '**If you build with code:** the API, SDKs and MCP server let your agent create an inbox, a number or a browser in a call ([developers](/developers)).',
        '**If you build without code:** connect Zapier, Make or n8n to the events Obsession sends, and the agent you built gets its own address and number ([no code](/no-code)).',
        '**If you would rather not build:** pick a [blueprint](/blueprints). It runs the job, such as checking supplier portals every morning, with the agent and its pieces set up for you.',
      ],
    },
    {
      kind: 'p',
      text: 'An inbox is $0.50 a month, a US or UK number $2, a browser hour $0.10 with the home connection included, and an event log is $5 per million events. The Free plan includes 3 inboxes, a number and 10 browser hours, and Developer is $20 a month ([every rate](/pricing/rates)). The browser signs in only with logins its team provides and never gets round a CAPTCHA or a bot block.',
    },
    {
      kind: 'cta',
      text: 'Give the agent you built its own inbox, phone number and browser under one identity. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by who builds' },
    {
      kind: 'list',
      items: [
        '**You do not write code and like canvases:** Make, n8n or Zapier Agents.',
        '**You do not write code and want to describe the agent:** MindStudio or Lindy.',
        '**You write Python:** the OpenAI Agents SDK or LangGraph.',
        '**You write TypeScript:** the Vercel AI SDK.',
        '**You need customers to sign in:** Bubble in front of any of them.',
        '**The agent has to email, text and use a browser:** Obsession, under whichever builder you choose.',
        '**You want the job done, not built:** an Obsession blueprint.',
      ],
    },
    {
      kind: 'p',
      text: 'To go on from here, read [how to start an AI business](/blog/how-to-start-an-ai-business), [AI agent business ideas](/blog/ai-agent-business-ideas) and [how to start an AI automation agency](/blog/start-an-ai-automation-agency). [Tools for AI agents](/blog/best-tools-for-ai-agents) compares the pieces an agent acts with.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agent builders' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best AI agent builder?',
          a: 'It depends on who builds. Make, n8n and Zapier Agents suit people who build without code, MindStudio and Lindy build from a prompt, and the OpenAI Agents SDK, LangGraph and the Vercel AI SDK suit developers. Any of them can use Obsession for the agent’s inbox, number and browser.',
          link: { label: 'AI agent builders with no code', to: '/no-code' },
        },
        {
          q: 'Where can I build AI agents for free?',
          a: 'Make lists a free plan of 1,000 credits a month, Zapier 100 tasks and 400 agent activities, and n8n has a standard version you can host yourself, from GitHub. Lindy’s $50 credit lasts 7 days. Obsession’s Free plan gives an agent 3 inboxes, a number and 10 browser hours.',
          link: { label: 'Obsession pricing', to: '/pricing' },
        },
        {
          q: 'What is the best AI agent builder platform: Relevance AI, Zapier or Make?',
          a: 'For a business with many agents, Relevance AI sells through its sales team, with no price on its page. For teams already using apps, Zapier Agents and Make connect to them, and Obsession supplies each agent’s own inbox, number and browser.',
        },
        {
          q: 'Where can I build apps for an AI agent business?',
          a: 'Build the agent in a builder such as Make, n8n or the OpenAI Agents SDK, and the customer-facing screen in an app builder such as Bubble. Obsession adds the inbox, number and browser the agent acts with, or runs the job as a blueprint.',
          link: { label: 'Blueprints for teams who do not code', to: '/blueprints' },
        },
        {
          q: 'Is Obsession an AI agent builder?',
          a: 'No. Obsession is not an app builder or a prompt based agent builder. It is what an agent built in any of them needs to act, and its blueprints are for people who want a job done without building.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'Is OpenAI’s Agent Builder still available?',
          a: 'OpenAI’s documentation page says it is deprecating Agent Builder, with the product scheduled to shut down on 30 November 2026. Workflows can be copied out as Agents SDK code.',
          link: { label: 'Tools for the OpenAI Agents SDK', to: '/blog/openai-agents-sdk-tools' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another company comes from that company’s own pricing or documentation page as listed on 24 November 2026, with prices in US dollars as shown that day, except n8n, which lists euros. Where a page lists no price or licence, we say so. We did not run the services. The first month sums apply each company’s listed rates to example inputs.',
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'Make', url: MAKE },
    { title: 'Pricing', publisher: 'n8n', url: N8N },
    { title: 'Pricing', publisher: 'Zapier', url: ZAPIER },
    { title: 'Pricing', publisher: 'MindStudio', url: MINDSTUDIO },
    { title: 'Pricing', publisher: 'Lindy', url: LINDY },
    { title: 'Pricing', publisher: 'Relevance AI', url: RELEVANCE },
    { title: 'OpenAI Agents SDK', publisher: 'OpenAI', url: OPENAI_SDK },
    { title: 'Agent Builder', publisher: 'OpenAI', url: OPENAI_BUILDER },
    { title: 'LangGraph overview', publisher: 'LangChain documentation', url: LANGGRAPH },
    { title: 'Pricing', publisher: 'LangChain', url: LANGSMITH },
    { title: 'AI SDK introduction', publisher: 'Vercel', url: VERCEL_SDK },
    { title: 'Pricing', publisher: 'Bubble', url: BUBBLE },
  ],

  related: [
    '/no-code',
    '/blueprints',
    '/developers',
    'n8n-email-agent',
    'openai-agents-sdk-tools',
    'vercel-ai-sdk-tools',
    'ai-agent-business-ideas',
    'start-an-ai-automation-agency',
    'how-to-start-an-ai-business',
    'best-tools-for-ai-agents',
  ],
}

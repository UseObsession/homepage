import type { BlogPost } from './types'

/* Kit article (_research/seo/revamp-22nov/PLAN_articles.md, the Blueprints row; approved by Seun 22 Nov 2026, "write
   them"; brief in ARTICLE_BRIEF.md). Primary "ai agent templates free"; secondaries from Google suggestions (US and UK,
   22 Nov, autocomplete_articles_22nov.json) that no other post lists. /blueprints owns "ai agent templates" and is
   linked; this guide owns the free and where-to-find questions. Every outside fact read on its own page on 22 Nov 2026:
   n8n's workflow library (14,409 templates) and pricing, Zapier's agent templates (zapier.com/templates/agents) and
   pricing, Make's templates (AI category counts) and pricing (Free plan credits), the OpenAI Agents SDK README, OpenAI's
   GPTs FAQ and Microsoft's Copilot Studio pricing; Anthropic's Building effective agents (19 Dec 2024) for the
   workflow and agent line. Make's paid plan prices weren't in its pricing page's text, so only the Free plan is given.
   Northgate and every time in the picture are invented. Obsession's prices come from src/content/prices.ts. */

const ANTHROPIC = 'https://www.anthropic.com/engineering/building-effective-agents'
const N8N_WORKFLOWS = 'https://n8n.io/workflows/'
const N8N_PRICING = 'https://n8n.io/pricing/'
const ZAPIER_AGENTS = 'https://zapier.com/templates/agents'
const ZAPIER_PRICING = 'https://zapier.com/pricing'
const MAKE_TEMPLATES = 'https://www.make.com/en/templates'
const MAKE_PRICING = 'https://www.make.com/en/pricing'
const AGENTS_SDK = 'https://github.com/openai/openai-agents-python'
const GPTS = 'https://help.openai.com/en/articles/8554407-gpts-faq'
const COPILOT = 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/copilot-studio'

export const post: BlogPost = {
  slug: 'ai-agent-templates-free',
  title: 'Free AI agent templates for teams: where to find them and what each costs to run',
  dek: 'Workflow builders, GitHub and the assistants inside tools your team already pays for all publish free AI agent templates. Each is free to copy and billed to run, and each works through the accounts your team already has.',
  metaTitle: 'Free AI agent templates for teams: where to find each kind',
  description:
    'Free AI agent templates from n8n, Zapier, Make, GitHub, ChatGPT and Copilot Studio, compared by what each runs and costs, plus the jobs they leave out.',
  answer:
    'Free AI agent templates are ready-made setups you copy into an automation tool or your own code and change for your job. On 22 November 2026, n8n’s library listed 14,409 workflow templates, Zapier and Make kept libraries with agent and AI sections, and GitHub held open source examples such as OpenAI’s Agents SDK. The template costs nothing to copy, and the tool bills for running it, in executions, tasks, activities, credits or model calls.',
  primaryKeyword: 'ai agent templates free',
  keywords: ['free ai agent templates', 'ai agent templates github', 'ai agent templates n8n', 'ai agent template marketplace'],
  category: 'Test sign-up and agents',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 10,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'Lead response check, northgate.example',
      who: 'An agent with its own inbox and number, filling in Northgate’s demo form as a new lead',
      rows: [
        { time: 'Mon 09:00', text: 'Demo form sent from the agent’s own inbox and number', tone: 'info' },
        { time: 'Mon 09:01', text: 'Automatic email: “Thanks, we’ll be in touch”', tone: 'ok' },
        { time: 'Mon 14:47', text: 'First email from a salesperson', detail: '5 hours 47 minutes after the form', tone: 'late' },
        { time: 'Tue 09:00', text: 'No call or text to the number on the form', tone: 'fail' },
        { time: 'Tue 09:05', text: 'Report posted to #sales in Slack', tone: 'info' },
      ],
      foot: 'A job that waits a day for replies to an inbox and number of its own. Example: Northgate and every time here are invented.',
    },
  },
  blocks: [
    { kind: 'h2', id: 'what-is-a-template', text: 'What is an AI agent template?' },
    {
      kind: 'p',
      text: 'An AI agent template is a saved setup for one job. It holds what starts the job, such as a schedule, a new email or a form. It also holds the steps, the instructions the model follows and the apps it connects to. You copy it into your own account, connect your apps and change the instructions.',
    },
    {
      kind: 'p',
      text:
        'Anthropic, which makes the Claude models, draws the line between an agent and an ordinary automation in [Building effective agents](' +
        ANTHROPIC +
        '). Workflows follow “predefined code paths”, while agents direct “their own processes and tool usage”. In an agent template, the model chooses which tool to use next, such as searching the CRM, drafting a reply or asking a person. For the jobs agents do once they’re running, see [what AI agents can do for a business](/blog/what-can-ai-agents-do-for-business).',
    },

    { kind: 'h2', id: 'where-to-find', text: 'Where to find free AI agent templates' },
    {
      kind: 'p',
      text: 'Free templates come from workflow builders’ libraries, open source code on GitHub and the assistants inside tools your team already pays for. Each count and price is as its provider listed it on 22 November 2026.',
    },
    { kind: 'h3', id: 'n8n', text: 'n8n’s workflow library' },
    {
      kind: 'p',
      text:
        '[n8n](' +
        N8N_WORKFLOWS +
        ') is a workflow builder with a public template library. On 22 November 2026 it listed 14,409 workflow automation templates, each credited to the community member who made it. One of its categories holds AI templates. n8n also runs on your own server, and its [pricing page](' +
        N8N_PRICING +
        ') says “a standard, self-hosted version of n8n is available on GitHub”. Its cloud plans start at €20 a month, billed annually, for 2,500 workflow executions, after a free trial that needs no card.',
    },
    { kind: 'h3', id: 'zapier', text: 'Zapier’s agent templates' },
    {
      kind: 'p',
      text:
        '[Zapier](' +
        ZAPIER_AGENTS +
        ') lists ready-made agents beside its templates for tables, forms, chatbots and MCP, the standard AI assistants use to call tools. Its agents on 22 November 2026 included a Support Email Agent, a Lead Enrichment Agent, an Inbox Categorizer and a Sales Prep Agent. Its [pricing page](' +
        ZAPIER_PRICING +
        ') bills agents on their own allowance, apart from Zaps. The Free plan includes 400 agent activities a month, up to 10 per run. Pro gives 1,500 a month, from about $33.33 a month billed annually.',
    },
    { kind: 'h3', id: 'make', text: 'Make’s template library' },
    {
      kind: 'p',
      text:
        '[Make](' +
        MAKE_TEMPLATES +
        ') sorts its templates by app and by job. On 22 November 2026 its AI category held 571 templates for LLMs, the large language models behind tools like ChatGPT, 58 for chatbots and 2 under Agentic AI. Make’s [Free plan](' +
        MAKE_PRICING +
        ') includes 1,000 credits a month.',
    },
    { kind: 'h3', id: 'github', text: 'Open source examples on GitHub' },
    {
      kind: 'p',
      text:
        'Engineers often start from code. The [OpenAI Agents SDK](' +
        AGENTS_SDK +
        '), a software kit its README calls “a lightweight, powerful framework for multi-agent workflows”, is open source under the MIT licence. It has an examples folder, and its README shows text, sandbox, realtime and voice agents. The examples run once you set an OpenAI API key, the code that lets your software call OpenAI’s models. Model calls then go on your OpenAI account, and your team hosts the result. [What to build with AI agents](/blog/what-to-build-with-ai-customers) walks through production builds for developers.',
    },
    { kind: 'h3', id: 'gpts', text: 'GPTs in ChatGPT' },
    {
      kind: 'p',
      text:
        'A GPT is a version of ChatGPT set up with its own instructions, files and tools. OpenAI’s [GPTs FAQ](' +
        GPTS +
        ') says “GPTs are available to all ChatGPT users, but users must be signed in”. It also says new GPTs can’t be created or published from personal accounts, including Free, Go, Plus and Pro. In Business, Enterprise and Edu workspaces, creation depends on the workspace’s settings and permissions. A GPT can call outside APIs through actions, and it answers when someone messages it.',
    },
    { kind: 'h3', id: 'copilot-studio', text: 'Microsoft Copilot Studio' },
    {
      kind: 'p',
      text:
        '[Copilot Studio](' +
        COPILOT +
        ') is Microsoft’s agent builder, and its pricing page lists “pre-built agents and templates” among its features. It costs $200 a month per pack of 25,000 Copilot Credits, with a free trial, and an Azure subscription is needed to use agents.',
    },

    { kind: 'h2', id: 'running-costs', text: 'What a free template costs to run' },
    {
      kind: 'p',
      text: 'Copying the template is free. Each tool bills for running it, in its own unit:',
    },
    {
      kind: 'list',
      items: [
        '**n8n:** workflow executions on its cloud plans, or your own server if you self-host.',
        '**Zapier:** activities for agents and tasks for Zaps, each with a free allowance.',
        '**Make:** credits, with 1,000 a month on the Free plan.',
        '**GitHub examples:** model calls on your own API account, plus hosting.',
        '**Copilot Studio:** Copilot Credits, sold in packs of 25,000.',
      ],
    },
    {
      kind: 'p',
      text: 'An agent that reads every incoming email calls the model once for each one. Run a template on a week of real volume before you switch it on for everything, and set a spending cap in the tool.',
    },

    { kind: 'h2', id: 'set-up', text: 'How to choose and set up a free AI agent template' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Write the job in one sentence, with its result.** A pass: a colleague could do it from that sentence, such as “every Monday, list the new emails our 3 competitors sent last week”.',
        '**Match the trigger.** A pass: the template starts the way your job starts, on a schedule, a new email, a new row or a form.',
        '**List what the job must reach.** A pass: each app has a connection in the tool, and you know how the agent reaches anything without one, such as a website with a login.',
        '**Check how long the job waits.** A pass: the tool keeps the job open as long as it takes, whether 4 minutes for a reply or 14 days for a free trial to end.',
        '**Run it on one real case and read every step.** A pass: the output matches what a person on your team would have written.',
        '**Cap the spend and name a reviewer.** A pass: a monthly ceiling, and a person who reads the results for the first 2 weeks.',
      ],
    },
    {
      kind: 'p',
      text: 'Then track the number the job was meant to move, week by week. For a sales team that is speed to lead and meetings booked, for a growth team conversion and activation, and for an agency pitches won and clients kept.',
    },

    { kind: 'h2', id: 'own-details', text: 'Jobs that need an agent with its own inbox, number or browser' },
    {
      kind: 'p',
      text: 'Templates run on accounts your team already has: your Gmail, your CRM, your Slack. Some jobs need the agent to have contact details of its own, kept for days or months:',
    },
    {
      kind: 'list',
      items: [
        '**Keeping every email a competitor sends a new subscriber** needs an inbox of its own that stays subscribed for months, and [competitor email tracking tools](/blog/competitor-email-tracking-tools) compares the ways teams do it.',
        '**Receiving a login code by text** needs a phone number of its own.',
        '**Staying signed in to a portal for weeks** needs a browser that keeps its session, and the guide to [whether AI agents can log in to websites](/blog/can-ai-agents-log-in-to-websites) covers what sites allow.',
        '**Calling your own voice line as a customer** needs a number to call from and every answer kept word for word, as [AI voice agent testing](/blog/ai-voice-agent-testing) sets out.',
        '**Testing your own sign-up after every release** needs a fresh identity each time, so the welcome emails go to a stranger.',
      ],
    },

    { kind: 'h2', id: 'blueprints', text: 'Blueprints: AI agent templates Obsession runs for you' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. Every agent can have an inbox, a phone number and a browser, plus messaging and a sandbox to run code. Its [blueprints](/blueprints) are ready-made jobs that run on those pieces: a team with no engineers names the competitors, stores, forms or voice lines, picks how often and says where results go. Each blueprint is billed on the pieces it uses. The Free plan starts without a credit card and covers small runs; blueprints that make calls or send texts need a paid plan. The jobs sit in the [Test sign-up and agents](/kits/test-sign-up-and-agents) and [Watch the market](/kits/watch-the-market) kits.',
    },
    {
      kind: 'list',
      items: [
        '**Time how fast your sales team answers a new lead:** [Lead response checks](/blueprints/lead-leaks).',
        '**Keep every email, text, offer and price a competitor sends:** [Competitor tracking](/blueprints/competitor-tracking).',
        '**Shop a store as a new customer and see every reminder that never came:** [Mystery shopping](/blueprints/mystery-shopper).',
        '**Ask your support bot what customers ask, every morning:** [Support bot check](/blueprints/support-bot-check).',
        '**Call your voice agent and wait for the text it promised:** [Voice agent check](/blueprints/voice-agent-check).',
        '**Start a competitor’s free trial and keep every email until it ends:** [Trial teardown](/blueprints/trial-teardown).',
      ],
    },
    {
      kind: 'cta',
      text: 'Not building agents? Pick a blueprint, and Obsession runs it on its own inboxes, numbers and browsers. Each result lands in Slack, a sheet or your CRM.',
      to: '/blueprints',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'compared', text: 'Free AI agent templates compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 22 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Free AI agent templates by source, from each provider’s own pages, as listed on 22 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Starting from a blank page', 'Full control over every step', 'Staff hours', 'Every step designed and tested by your team', 'One-off jobs your team knows well'],
        [
          'n8n workflow templates',
          '14,409 community templates, with a self-hosted edition',
          'Self-hosted from GitHub\nCloud from €20 a month, billed annually',
          '2,500 workflow executions a month on the cloud Starter plan',
          'Teams with someone who runs workflows',
        ],
        [
          'Zapier agent templates',
          'Ready agents for email, leads and sales prep across the apps Zapier connects',
          'Free: 400 activities a month\nPro: from about $33.33 a month, billed annually',
          '10 activities per run on Free, 40 on Pro',
          'Teams already on Zapier',
        ],
        ['Make templates', '571 LLM templates, 58 chatbot templates and 2 agentic AI templates', 'Free: 1,000 credits a month', '2 templates under Agentic AI', 'Teams that want a visual editor'],
        [
          'OpenAI Agents SDK examples on GitHub',
          'MIT-licensed code for text, sandbox, realtime and voice agents',
          'Free code\nModel calls on your OpenAI account',
          'Your team hosts it and builds every tool',
          'Engineering teams',
        ],
        [
          'GPTs in ChatGPT',
          'A tailored ChatGPT any signed-in user can open, with actions to outside APIs',
          'Free to use when signed in',
          'No new GPTs from personal accounts; answers when messaged',
          'Teams that already share GPTs in ChatGPT',
        ],
        [
          'Microsoft Copilot Studio',
          'Pre-built agents and templates for Microsoft 365',
          '$200 a month per 25,000 Copilot Credits\nFree trial',
          'An Azure subscription to use agents',
          'Companies on Microsoft 365',
        ],
        [
          'Obsession (ours): [Lead response checks](/blueprints/lead-leaks), [Competitor tracking](/blueprints/competitor-tracking), [Mystery shopping](/blueprints/mystery-shopper)',
          'Jobs it runs with each agent’s own inbox, number and browser, results in Slack, a sheet or your CRM',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment and at any identity check',
          'Jobs that sign up, wait days, call or stay signed in',
        ],
      ],
    },

    { kind: 'h2', id: 'which-to-choose', text: 'Which free AI agent template fits your job?' },
    {
      kind: 'p',
      text: 'Pick a blueprint when the job needs an agent with its own inbox, number or browser that waits days for what arrives. Examples are a competitor’s emails, a lead’s first reply or the text a voice agent promised. For jobs inside the apps your team already uses, a workflow builder’s template is the faster start.',
    },
    {
      kind: 'list',
      items: [
        '**Jobs that sign up, wait, call or stay signed in:** an Obsession [blueprint](/blueprints).',
        '**Jobs inside your own apps, with no code:** a Zapier agent template on its Free plan, or a Make template.',
        '**Many workflows, run by someone technical:** n8n, self-hosted or on its cloud plans.',
        '**An agent your engineers build and own:** the OpenAI Agents SDK examples on GitHub.',
        '**A shared assistant inside ChatGPT:** an existing GPT, or a new one where your workspace allows it.',
        '**Companies on Microsoft 365:** Copilot Studio’s pre-built agents.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about free AI agent templates' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Are there free AI agent templates?',
          a: 'Yes. On 22 November 2026, n8n’s library listed 14,409 workflow templates and Make’s AI category listed 571 for LLMs, 58 for chatbots and 2 for agentic AI. Zapier listed ready-made agents such as a Support Email Agent, and GitHub holds open source examples such as OpenAI’s Agents SDK. Each is free to copy and billed to run. Obsession’s Free plan starts without a credit card and covers small blueprint runs.',
        },
        {
          q: 'Where can I find AI agent templates on GitHub?',
          a: 'Start with the repository of the framework your engineers use. OpenAI’s Agents SDK is MIT-licensed, with an examples folder and README examples for text, sandbox, realtime and voice agents, and n8n’s self-hosted edition is on GitHub too. Read each repository’s licence before you use its code in a product.',
        },
        {
          q: 'Are n8n AI agent templates free?',
          a: 'n8n keeps its templates in a public library, 14,409 of them on 22 November 2026. You can self-host n8n from GitHub, or use its cloud plans from €20 a month, billed annually, for 2,500 workflow executions. The cloud plans start with a free trial that needs no card.',
        },
        {
          q: 'Is there an AI agent template marketplace?',
          a: 'Yes, in four kinds of place. ChatGPT lets signed-in users open GPTs that others have built, Zapier, Make and n8n keep template libraries, and Microsoft’s Copilot Studio lists pre-built agents. Obsession’s blueprints are ready-made jobs it runs on its own pieces, billed on what each uses.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'What is the difference between an AI agent template and a blueprint?',
          a: 'A template is a setup you copy into your own account, connect to your apps and keep running yourself. A blueprint is a job Obsession runs on its own inboxes, numbers and browsers. You choose what it watches, how often and where results go, and it is billed on the pieces it uses.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'Can I use an AI agent template without coding?',
          a: 'Yes. Zapier, Make and n8n templates are set up in a visual editor, and a GPT is used by chatting. An Obsession blueprint needs the names, the schedule and where results go. Code templates on GitHub need an engineer.',
        },
        {
          q: 'Do free AI agent templates cost anything to run?',
          a: 'Usually, yes. On 22 November 2026, Zapier’s Free plan gave 400 agent activities a month and Make’s gave 1,000 credits. n8n’s cloud started at €20 a month, billed annually, and Copilot Studio at $200 a month per 25,000 Copilot Credits. Code from GitHub runs on your own model account and servers.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About these templates',
      text: 'Every library, price and quote comes from its provider’s own pages, read on 22 November 2026. Prices change, so check each page before you buy. Northgate and every time in the picture are invented.',
    },
  ],

  sources: [
    { title: 'Building effective agents', publisher: 'Anthropic', url: ANTHROPIC, date: '2024-12-19' },
    { title: 'Workflow automation templates', publisher: 'n8n', url: N8N_WORKFLOWS },
    { title: 'Pricing', publisher: 'n8n', url: N8N_PRICING },
    { title: 'Agents templates', publisher: 'Zapier', url: ZAPIER_AGENTS },
    { title: 'Plans and pricing', publisher: 'Zapier', url: ZAPIER_PRICING },
    { title: 'Templates', publisher: 'Make', url: MAKE_TEMPLATES },
    { title: 'Pricing', publisher: 'Make', url: MAKE_PRICING },
    { title: 'OpenAI Agents SDK', publisher: 'OpenAI on GitHub', url: AGENTS_SDK },
    { title: 'GPTs FAQ', publisher: 'OpenAI Help Center', url: GPTS },
    { title: 'Copilot Studio pricing', publisher: 'Microsoft', url: COPILOT },
  ],

  related: [
    '/kits/test-sign-up-and-agents',
    'recipe:lead-leaks',
    'recipe:competitor-tracking',
    'what-can-ai-agents-do-for-business',
    'competitor-email-tracking-tools',
  ],
}

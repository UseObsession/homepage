import type { BlogPost } from './types'

/* Agent business wave (_research/seo/agent-business-24nov/PLAN.md, 24 Nov 2026): the best tools for AI agents.
   Primary "best tools for ai agents"; also "best tools for building ai agents" (Google suggestions, US, 24 Nov 2026,
   autocomplete_24nov.json). Answers "where can I buy an inbox, a browser and a phone number for an AI agent".
   Reader: developers and founders kitting out an agent. Serves /email, /phone, /browser and /sandbox.
   Every other service is described only from its own pages, read on 23 or 24 Nov 2026, with prices in US dollars as
   listed. Pages that would not load, or that list no price (Make's plan cards, Relevance AI, Softr), are left out or
   said to list none. Obsession's prices are typed from src/content/prices.ts as it stood on 24 Nov 2026 (inbox $0.50 a
   month, number $2, text $0.015, browser hour $0.10, sandbox $0.12 an active vCPU hour, event log $5 per million events;
   plans Free, $20, $99, $499); update them here if that file changes.
   The worked month uses example inputs and each vendor's list price. No dashes. */

const AGENTMAIL = 'https://www.agentmail.to/pricing'
const LUMBOX = 'https://lumbox.co/pricing'
const MAILSLURP = 'https://app.mailslurp.com/pricing/'
const ZOHO = 'https://www.zoho.com/agentinbox/'
const TWILIO_SMS = 'https://www.twilio.com/en-us/sms/pricing/us'
const TWILIO_VOICE = 'https://www.twilio.com/en-us/voice/pricing/us'
const TELNYX = 'https://telnyx.com/pricing/messaging'
const AGENTPHONE = 'https://agentphone.ai/'
const BB_PRICING = 'https://www.browserbase.com/pricing'
const BU_PRICING = 'https://browser-use.com/pricing'
const STEEL_PRICING = 'https://steel.dev/pricing'
const E2B_PRICING = 'https://e2b.dev/pricing'
const DAYTONA_PRICING = 'https://www.daytona.io/pricing'
const MEM0 = 'https://mem0.ai/pricing'
const LANGFUSE = 'https://langfuse.com/pricing'
const LUPIN = 'https://lupin.sh'
const AGENTICMAIL = 'https://agenticmail.io'

export const post: BlogPost = {
  slug: 'best-tools-for-ai-agents',
  title: 'The best tools for AI agents: an inbox, a number, a browser and a sandbox',
  dek: 'Where to buy what an AI agent needs to act: an inbox, a phone number, a browser, a sandbox and memory, with prices from each company on 24 November 2026.',
  metaTitle: 'Best tools for AI agents: inbox, phone, browser, sandbox',
  description:
    'The best tools for AI agents, sorted by what an agent needs: an inbox, a phone number, a browser, a sandbox and memory, with each company’s own prices.',
  answer:
    'The best tools for AI agents depend on what the agent has to do. For an inbox, AgentMail, Lumbox and MailSlurp; for a phone number, Twilio, Telnyx and AgentPhone; for a browser, Browserbase, Browser Use and Steel; for a sandbox, E2B and Daytona. To get all four under one identity on one bill, Obsession gives an agent an inbox at $0.50 a month, a number at $2, a browser at $0.10 an hour and a sandbox at $0.12 an active vCPU hour.',
  primaryKeyword: 'best tools for ai agents',
  keywords: ['best tools for ai agents', 'best tools for building ai agents'],
  category: 'Build agent products',
  order: 2,
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
      title: 'What an agent needs to act',
      rows: [
        {
          name: 'Reach people',
          who: 'Inbox, phone number, texts',
          nodes: ['Your agent', 'Its own address', 'A person'],
          links: ['uses', 'writes to'],
        },
        {
          name: 'Work on the web',
          who: 'Browser, sandbox',
          nodes: ['Your agent', 'Browser or sandbox', 'A website or code'],
          links: ['opens', 'runs'],
        },
        {
          name: 'Remember and be checked',
          who: 'Memory, logs',
          nodes: ['Your agent', 'Memory and traces', 'You'],
          links: ['saves to', 'show'],
        },
        {
          name: 'All of it, as one identity',
          who: 'Obsession',
          nodes: ['Your agent', 'One persona', 'Every channel'],
          links: ['is', 'reaches'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'Most teams buy each piece from a different company. Obsession puts the pieces under one persona, one event log and one bill.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent that only thinks needs a model. An agent that acts needs more: an email address that receives its login codes, a phone number for texts and calls, a browser that stays signed in, and somewhere safe to run code. Searching for where to buy these returns a dozen vendors, each selling one piece. Here they are by job, each with its price as the company lists it.',
    },
    { kind: 'p', text: 'The tools fall into 7 groups:' },
    {
      kind: 'list',
      items: [
        '**An inbox:** AgentMail, Lumbox, MailSlurp and Zoho AgentInbox.',
        '**A phone number and texts:** Twilio, Telnyx and AgentPhone.',
        '**A browser:** Browserbase, Browser Use and Steel.',
        '**A sandbox:** E2B and Daytona.',
        '**Memory and tracing:** Mem0 and Langfuse.',
        '**One company, several pieces:** Obsession, Lupin and AgenticMail.',
        '**Frameworks and builders:** covered in [the best AI agent builders](/blog/best-ai-agent-builders).',
      ],
    },

    { kind: 'h2', id: 'checks', text: 'What to check before you choose' },
    {
      kind: 'list',
      items: [
        '**One agent or a fleet.** A single inbox is cheap everywhere. At 1,000 inboxes the price per inbox decides the bill.',
        '**Codes.** A site sends a one-time code by email or text at sign-up. The inbox, the number and the browser have to belong to the same agent, or the code arrives somewhere the agent cannot see.',
        '**Where the agent stays signed in.** A browser that forgets its logins asks for a new code every run.',
        '**What you maintain.** Five vendors means five accounts, five invoices and five places to look when something fails.',
        '**What the agent did.** You will want one record of every email, text and page the agent saw.',
      ],
    },
    {
      kind: 'p',
      text: 'Every service here is described from its own pricing or product page as listed on 23 and 24 November 2026, with prices in US dollars. A plan with no price on its page is described as listing none.',
    },

    { kind: 'h2', id: 'inbox', text: 'An inbox for an agent' },
    {
      kind: 'p',
      text: 'The detail is in [the best email API for AI agents](/blog/best-email-api-for-ai-agents). The short list:',
    },
    {
      kind: 'list',
      items: [
        '**AgentMail** builds email for agents. On [its pricing page](' +
          AGENTMAIL +
          '), Free is $0 for 3 inboxes and 3,000 emails a month, and Developer is $20 a month for 10 inboxes and 10,000 emails. Startup is $200 for 150 inboxes. It does well at inboxes made through an API, with threads, webhooks and an MCP server, which lets an AI tool call it directly. It sells email only.',
        '**Lumbox** is priced on [its pricing page](' +
          LUMBOX +
          ') as Free at $0 for 3 inboxes, 500 emails received and 100 sent a month, Starter at $9 for 10 inboxes, Pro at $29 for 50 inboxes and Scale at $99 for 250 inboxes. On Free, its built-in agent runs on your own model key. Its home page says phone numbers are in early access.',
        '**MailSlurp** serves developers who test email and SMS. On [its pricing page](' +
          MAILSLURP +
          '), Free is $0 for 250 emails received a month, Starter $19.99 and Pro $69. Phone numbers are priced separately.',
        '**Zoho AgentInbox** gives each agent a permanent address. [Its page](' +
          ZOHO +
          ') says Free includes 5 inboxes, 4,000 emails a month and 1 GB, and lists no price for a paid plan.',
      ],
    },

    { kind: 'h2', id: 'phone', text: 'A phone number and texts' },
    {
      kind: 'list',
      items: [
        '**Twilio** is the established choice. On its pages, a US local number is $1.15 a month and a text $0.0083 a segment ([SMS pricing](' +
          TWILIO_SMS +
          ')), plus carrier fees on outbound messages. A local call is $0.0140 a minute to make ([voice pricing](' +
          TWILIO_VOICE +
          ')). It does well at reach and depth, from texts to voice AI. US registration for business texting is a separate step.',
        '**Telnyx** lists a number from $1.00 a month, plus $0.10 a month for texts, and a local text from $0.004 a part, plus carrier fees, on [its messaging pricing](' +
          TELNYX +
          '). Pay as you go is $0 with no contract.',
        '**AgentPhone** is built for agents. [Its page](' +
          AGENTPHONE +
          ') lists numbers from $3 a month, calls from 13 cents a minute and texts from 2 cents a segment, with $5 of free credit, in the US and Canada. Calls reach your webhook as text, and an MCP server is listed.',
      ],
    },
    {
      kind: 'p',
      text: 'The numbers in this group are cheaper per text than a platform that sells every piece. The reason to pay more is the code: a text only helps an agent if it reaches the same identity that holds the inbox and the browser.',
    },

    { kind: 'h2', id: 'browser', text: 'A browser that stays signed in' },
    {
      kind: 'p',
      text: 'The full comparison is [the best browser for AI agents](/blog/best-browser-for-ai-agents). For most agents the three to know:',
    },
    {
      kind: 'list',
      items: [
        '**Browserbase** is built for browsers at scale. On [its pricing page](' +
          BB_PRICING +
          '), Developer is $20 for 100 browser hours, then $0.12 an hour, and Startup is $99 for 500 hours. Residential traffic past the included GB is $10 to $12 a GB.',
        '**Browser Use** is pay as you go on [its pricing page](' +
          BU_PRICING +
          '): $0.06 a browser hour, $5 a GB for home-connection traffic and CAPTCHA solving included.',
        '**Steel** is a hosted browser for agents. [Its pricing](' +
          STEEL_PRICING +
          ') lists Launch at $0 plus usage, with $0.10 a browser hour and $10 a GB of proxy traffic.',
      ],
    },

    { kind: 'h2', id: 'sandbox', text: 'A sandbox to run code' },
    {
      kind: 'list',
      items: [
        '**E2B** runs each session in an isolated sandbox. [Its pricing](' +
          E2B_PRICING +
          ') lists Hobby at $0 with a one-time $100 credit, and Pro at $150 a month plus usage, with sessions up to 24 hours.',
        '**Daytona** lists compute by the second on [its pricing page](' +
          DAYTONA_PRICING +
          '): $0.0504 per vCPU hour and $0.0162 per GiB of memory an hour, with $200 of free compute.',
      ],
    },
    {
      kind: 'p',
      text: 'More are compared in [the best sandbox for AI agents](/blog/best-sandbox-for-ai-agents).',
    },

    { kind: 'h2', id: 'memory', text: 'Memory and tracing' },
    {
      kind: 'list',
      items: [
        '**Mem0** stores what an agent should remember. [Its pricing](' +
          MEM0 +
          ') lists Free with 10,000 adds and 1,000 retrievals a month for the first 30 days, or 50,000 adds and 10,000 retrievals with your own model key, and a Custom plan with no price shown.',
        '**Langfuse** records and scores an agent’s runs. [Its pricing](' +
          LANGFUSE +
          ') lists Hobby free with 50,000 units a month, Core at $29 a month and Pro at $199, and says you can self-host it for free.',
      ],
    },

    { kind: 'h2', id: 'one-company', text: 'One company, several pieces' },
    {
      kind: 'p',
      text: 'Three options sell more than one piece. [Lupin](' +
        LUPIN +
        ') offers an inbox, phone, browser and containers on one API, with Free at $0 for 3 inboxes and 30 browser minutes, then Developer at $20, Growth at $79 and Startup at $200 a month; its page lists no rates for phone or proxy traffic ([Obsession vs Lupin](/compare/obsession-vs-lupin)). [AgenticMail](' +
        AGENTICMAIL +
        ') is open source under the MIT licence and gives an agent email, a phone number and SMS that you host yourself ([Obsession vs AgenticMail](/compare/obsession-vs-agenticmail)). Obsession is the third.',
    },

    { kind: 'h2', id: 'compare', text: 'The options side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 and 24 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Tools for AI agents compared, with the lowest paid or pay as you go price each page lists, in US dollars.',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['AgentMail: inbox', 'Inboxes by API, threads, webhooks, MCP', 'Free; $20 a month for 10 inboxes', 'Email only', 'A fleet of inboxes'],
        ['Lumbox: inbox', 'Low inbox prices', 'Free; $9 a month for 10 inboxes', 'Phone numbers in early access', 'Cheap inboxes at scale'],
        ['MailSlurp: inbox, SMS', 'Testing email and SMS', 'Free; $19.99 a month', 'Phone numbers priced separately', 'QA teams'],
        ['Zoho AgentInbox: inbox', 'A permanent address per agent', 'Free for 5 inboxes; paid plans list no price', 'Email only', 'Teams on Zoho'],
        ['Twilio: phone', 'Reach, voice AI, texts', '$1.15 a number; $0.0083 a text', 'Carrier fees and US registration on top', 'Voice and SMS at scale'],
        ['Telnyx: phone', 'Low per text cost', 'From $1.00 a number; from $0.004 a text', 'Carrier fees on top', 'High volume texting'],
        ['AgentPhone: phone', 'Calls as text to a webhook', 'From $3 a number; 13 cents a minute', 'US and Canada numbers on its page', 'A phone agent'],
        ['Browserbase: browser', 'Scale, saved contexts', '$20 a month for 100 hours', 'Residential traffic billed per GB', 'Many sessions'],
        ['Browser Use: browser', 'Lowest hourly price', '$0.06 an hour', 'Browser only', 'Cheap browser hours'],
        ['Steel: browser', 'Low hourly price', '$0.10 an hour', 'Browser only', 'A browser at a low hourly rate'],
        ['E2B: sandbox', 'Isolated sandboxes', 'Free credit; $150 a month Pro', 'Compute only', 'Running untrusted code'],
        ['Daytona: sandbox', 'Per second pricing', '$0.0504 per vCPU hour', 'Compute only', 'Short, many sandboxes'],
        ['Lupin: several pieces', 'Inbox, phone, browser, containers', 'Free; $20 a month', 'No phone rates on its page', 'One key for the pieces'],
        ['AgenticMail: several pieces', 'Open source email and SMS', 'No price listed', 'You host it', 'Self hosting teams'],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone), [Browser](/browser), [Sandbox](/sandbox)',
          'Every piece under one persona, one event log, one bill, blueprints',
          'Free; $20 Developer; $0.50 inbox, $2 number, $0.10 browser hour, $0.12 sandbox vCPU hour',
          'Not a memory or tracing tool',
          'An agent that needs several pieces',
        ],
      ],
    },

    { kind: 'h2', id: 'month', text: 'What one agent costs a month' },
    {
      kind: 'p',
      text: 'Take one agent that needs an inbox, a US number with 200 texts, 20 browser hours and 10 sandbox hours of one vCPU. Bought from four companies at list prices, it comes to about $4 a month: AgentMail Free for the inbox ($0), a Twilio number and 200 texts ($1.15 plus $1.66, before carrier fees), 20 Browser Use hours ($1.20) and E2B’s free credit. On Obsession the same month is about $8.70 at list rates: $0.50 for the inbox, $2 for the number, $3 for 200 texts at $0.015, $2 for the browser and $1.20 for the sandbox. The Free plan includes 3 inboxes, a number, 10 browser hours and 10 sandbox hours, so on Free it comes to about $4: the 200 texts and 10 more browser hours. Texting US customers from a local number needs carrier registration on either path: Twilio files it as a separate step with its own fees, and Obsession files it for $25 once, then $17 a month, in no plan.',
    },
    {
      kind: 'p',
      text: 'Separate tools can cost less on paper at this size. The difference is that the 4 companies are 4 accounts and 4 bills, and the code a site texts at sign-in reaches a number that is not tied to the inbox or browser that asked for it.',
    },

    { kind: 'h2', id: 'obsession', text: 'Why teams choose one platform for every piece' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. A [persona](/personas) puts an inbox, a US or UK number, messaging (iMessage, WhatsApp, Slack and Telegram) and a browser under one identity, so the login code a site sends reaches the agent the site expects. Every email, text, call and page lands in one event log at $5 per million events, and new ones reach your webhook.',
    },
    {
      kind: 'list',
      items: [
        '**Inbox:** $0.50 a month, with emails at $0.40 per 1,000. The Free plan includes 3 inboxes ([email](/email)).',
        '**Phone number:** $2 a month for a US or UK number, texts at $0.015 with carrier fees included, and calls at $0.012 a minute with the voice agent you bring or connect ([phone](/phone)).',
        '**Browser:** $0.10 a browser hour, with the home connection included and no charge per GB. Free includes 10 browser hours ([browser](/browser)).',
        '**Sandbox:** $0.12 an active vCPU hour, billed only while the CPU works. Free includes 10 sandbox hours ([sandbox](/sandbox)).',
        '**Plans:** Free, then Developer at $20, Startup at $99 and Scale at $499 a month. Each fee covers a set amount of usage at those rates.',
      ],
    },
    {
      kind: 'p',
      text: 'The browser signs in only with logins its team provides, identifies itself as an AI when it talks to a person and never gets round a CAPTCHA or a bot block. For teams that do not write code, [blueprints](/blueprints) run the job for you: pick one, and the agent, its pieces and the results are set up. For the full picture, read [the stack guide](/blog/ai-agent-infrastructure-stack), which sets out what an agent needs, piece by piece.',
    },
    {
      kind: 'cta',
      text: 'Give your agent its own inbox, phone number, browser and sandbox under one identity, in one call. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose, by job' },
    {
      kind: 'list',
      items: [
        '**Inboxes only, at scale:** AgentMail or Lumbox.',
        '**Texts and calls at high volume:** Twilio or Telnyx.',
        '**A phone agent with calls as text:** AgentPhone.',
        '**Many browser hours cheaply:** Browser Use, or Browserbase for scale.',
        '**Running untrusted code:** E2B or Daytona.',
        '**Remembering and tracing:** Mem0 and Langfuse.',
        '**Hosting it yourself:** AgenticMail.',
        '**An agent that signs in, receives codes by email and text and keeps a record:** Obsession.',
      ],
    },
    {
      kind: 'p',
      text: 'For the single pieces, read [the best email API](/blog/best-email-api-for-ai-agents), [the best browser](/blog/best-browser-for-ai-agents) and [the best sandbox](/blog/best-sandbox-for-ai-agents) for AI agents.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about tools for AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best tools for AI agents?',
          a: 'It depends on the job. AgentMail, Lumbox and MailSlurp cover inboxes, Twilio, Telnyx and AgentPhone phone numbers, Browserbase, Browser Use and Steel browsers, and E2B and Daytona sandboxes. Obsession gives an agent all four under one persona on one bill.',
          link: { label: 'The toolkit for AI agents', to: '/developers' },
        },
        {
          q: 'Where can I buy an inbox, a browser and a phone number for an AI agent?',
          a: 'Most teams buy each from a different company, such as an inbox from AgentMail, a number from Twilio and a browser from Browserbase. Obsession sells all three, plus a sandbox, under one identity: an inbox at $0.50 a month, a number at $2 and a browser at $0.10 an hour.',
          link: { label: 'Phone numbers, inboxes and browsers for AI agents', to: '/personas' },
        },
        {
          q: 'What are the best tools for building AI agents?',
          a: 'Building has two halves. Builders and frameworks, such as Make, n8n and the OpenAI Agents SDK, create the agent’s logic. Pieces such as an inbox, a number and a browser let it act, and those are what these tools sell.',
          link: { label: 'The best AI agent builders', to: '/blog/best-ai-agent-builders' },
        },
        {
          q: 'How much does an AI agent’s inbox, number and browser cost?',
          a: 'For one agent with 200 texts, 20 browser hours and 10 sandbox hours, about $4 from four free or pay as you go plans, and about $4 on Obsession’s Free plan ($8.70 at list rates), before US texting registration on either. Prices change, so check each page.',
          link: { label: 'Every Obsession rate', to: '/pricing/rates' },
        },
        {
          q: 'Do I need all these tools for one agent?',
          a: 'No. An agent that only reads and replies to email needs an inbox. One that signs in to supplier portals needs a browser, an inbox and often a number, because sites send codes by email or text.',
          link: { label: 'Blueprints for teams who do not code', to: '/blueprints' },
        },
        {
          q: 'Is there a way to get these tools without building anything?',
          a: 'Yes. Obsession blueprints run a job for teams who do not write code, such as checking supplier portals each morning, with the agent and its pieces set up for you.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about another company comes from that company’s own pricing or product page as listed on 23 and 24 November 2026, with prices in US dollars as shown that day. Where a page lists no price, we say so. We did not run the services. The monthly costs apply each company’s listed rates to example inputs.',
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'AgentMail', url: AGENTMAIL },
    { title: 'Pricing', publisher: 'Lumbox', url: LUMBOX },
    { title: 'Pricing', publisher: 'MailSlurp', url: MAILSLURP },
    { title: 'AgentInbox', publisher: 'Zoho', url: ZOHO },
    { title: 'US SMS pricing', publisher: 'Twilio', url: TWILIO_SMS },
    { title: 'US voice pricing', publisher: 'Twilio', url: TWILIO_VOICE },
    { title: 'Messaging pricing', publisher: 'Telnyx', url: TELNYX },
    { title: 'Phone numbers for AI agents', publisher: 'AgentPhone', url: AGENTPHONE },
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
    { title: 'Pricing', publisher: 'Browser Use', url: BU_PRICING },
    { title: 'Pricing', publisher: 'Steel', url: STEEL_PRICING },
    { title: 'Pricing', publisher: 'E2B', url: E2B_PRICING },
    { title: 'Pricing', publisher: 'Daytona', url: DAYTONA_PRICING },
    { title: 'Pricing', publisher: 'Mem0', url: MEM0 },
    { title: 'Pricing', publisher: 'Langfuse', url: LANGFUSE },
    { title: 'Lupin home page', publisher: 'Lupin', url: LUPIN },
    { title: 'AgenticMail home page', publisher: 'AgenticMail', url: AGENTICMAIL },
  ],

  related: [
    '/email',
    '/phone',
    '/browser',
    '/sandbox',
    '/personas',
    'best-email-api-for-ai-agents',
    'best-browser-for-ai-agents',
    'best-sandbox-for-ai-agents',
    'ai-agent-infrastructure-stack',
    '/compare/obsession-vs-lupin',
    '/compare/obsession-vs-agenticmail',
  ],
}

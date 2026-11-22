import type { BlogPost } from './types'

/* The stack pillar (_research/seo/revamp-22nov/PLAN_articles.md, row 2; obsession-seo Part 1, move 1; Seun's "write
   them", 22 Nov 2026). Primary "ai agent infrastructure stack"; secondaries from Google suggestions (US and UK, 22 Nov:
   autocomplete_articles_22nov.json and autocomplete_stack_mcp_22nov.json): ai agent infrastructure, ai agent
   infrastructure companies, ai agent infrastructure market map, ai agent tech stack, agent infrastructure as a service.
   Reader: founders, CTOs and engineers building agents. Ten layers, a market map table and a fair comparison, each
   vendor from its own page read on 22 Nov 2026: Anthropic pricing and tool use docs, the MCP specification
   (2026-07-28), OpenAI's Agents SDK docs, Mem0, Composio, AgentPhone, Vapi, Auth0 for AI agents, Langfuse. AgentMail,
   Twilio (US SMS and voice), Browserbase and E2B are as the bundle page /compare/agentmail-twilio-browserbase-e2b read
   them the same day. Kernel, Steel, Browser Use, Daytona, Modal, Vercel, Nylas and Bird are named from
   _research/commercial-view-21nov/research/ A to C (read 21 Nov), with no figure. Obsession's prices and calls are from
   _research/seo/revamp-22nov/BRIEF.md (prices.ts). ferndale.example is invented. British English, no dashes. */

const ANTHROPIC_PRICING = 'https://platform.claude.com/docs/en/about-claude/pricing'
const TOOL_USE = 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview'
const OPENAI_AGENTS = 'https://openai.github.io/openai-agents-python/'
const MEM0 = 'https://mem0.ai/pricing'
const MCP_SPEC = 'https://modelcontextprotocol.io/specification/2026-07-28'
const COMPOSIO = 'https://composio.dev/'
const AGENTMAIL = 'https://www.agentmail.to/pricing'
const TWILIO_SMS = 'https://www.twilio.com/en-us/sms/pricing/us'
const TWILIO_VOICE = 'https://www.twilio.com/en-us/voice/pricing/us'
const AGENTPHONE = 'https://agentphone.ai/pricing'
const VAPI = 'https://vapi.ai/pricing'
const BROWSERBASE = 'https://www.browserbase.com/pricing'
const E2B = 'https://e2b.dev/pricing'
const AUTH0 = 'https://auth0.com/solutions/ship-ai-agents'
const LANGFUSE = 'https://langfuse.com/pricing'

export const post: BlogPost = {
  slug: 'ai-agent-infrastructure-stack',
  title: 'The AI agent infrastructure stack: every layer and who sells it, for teams building agents',
  dek: '10 layers, from the model and memory to email, phone, browser and sandbox. The companies that sell each, their prices as listed on 22 November 2026, and where one API covers several at once.',
  metaTitle: 'The AI agent infrastructure stack: every layer, who sells it',
  description:
    'The AI agent infrastructure stack layer by layer: model, runtime, memory, MCP, email, phone, browser, sandbox, identity and traces, with who sells each.',
  answer:
    'The AI agent infrastructure stack is every service an agent needs beyond its model: a runtime, memory, tools and MCP (the standard way agents call tools), email, phone, a cloud browser, a sandbox, an identity and traces of every step. Each of these 10 layers has specialist vendors, so a working agent often runs on 5 or more accounts, keys and bills. Email, phone, browser and sandbox, the parts that reach the outside world, are the ones most often bought from different companies.',
  primaryKeyword: 'ai agent infrastructure stack',
  keywords: [
    'ai agent infrastructure',
    'ai agent infrastructure companies',
    'ai agent infrastructure market map',
    'ai agent tech stack',
    'agent infrastructure as a service',
  ],
  category: 'Build agent products',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'One task across the stack',
      who: 'Accounts agent · ferndale.example',
      rows: [
        { time: '09:02', text: 'Plans the job: fetch October’s invoice', detail: 'Model and runtime', tone: 'info' },
        { time: '09:02', text: 'Opens the supplier portal and signs in', detail: 'Browser', tone: 'info' },
        { time: '09:03', text: 'Login code arrives by text', detail: 'Phone and identity', tone: 'info' },
        { time: '09:03', text: 'Enters the code, downloads INV-2207', detail: 'Browser', tone: 'ok' },
        { time: '09:04', text: 'Reads 3 line items from the PDF', detail: 'Sandbox', tone: 'ok' },
        { time: '09:05', text: 'Emails the totals to the finance team', detail: 'Email', tone: 'ok' },
        { time: '09:05', text: 'Every step kept in one trace', detail: 'Observability', tone: 'info' },
      ],
      foot: 'Example: one agent touches 7 layers in 3 minutes. Ferndale and its supplier are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Founders, CTOs and engineers building agents meet the same question once a demo has to become a product: what does the agent run on besides the model? Most agents in production need the same 10 layers, whether they answer customers, work inside supplier portals or run jobs for a team. Each layer comes with what it gives the agent, who sells it, its price as listed on 22 November 2026, and where it stops.',
    },

    { kind: 'h2', id: 'what-it-is', text: 'What is the AI agent infrastructure stack?' },
    {
      kind: 'p',
      text: 'A model does 3 jobs well: it reasons, writes and chooses a tool. On its own it can’t receive an email, answer a phone, stay signed in to a website or run code for an hour. Each of those jobs is a layer, and each layer is sold as a service. Most agents in production use some or all of these 10:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Model:** reads the task, decides the next step and picks a tool.',
        '**Runtime and orchestration:** the loop that calls the model, runs its tools, keeps state and handles waiting.',
        '**Memory:** facts the agent keeps from one session to the next.',
        '**Tools and MCP:** the functions the agent can call, and the open standard that connects them.',
        '**Email:** an address the agent sends from and receives at.',
        '**Phone and messaging:** a number for calls and texts, plus iMessage, WhatsApp, Slack or Telegram.',
        '**Browser:** a cloud browser that opens pages, fills forms and keeps its logins.',
        '**Sandbox:** an isolated computer where the agent runs code and processes files.',
        '**Identity:** who the agent acts as, in someone else’s accounts or under a name of its own.',
        '**Observability:** traces of every model call, tool call, cost and error.',
      ],
    },
    {
      kind: 'p',
      text: 'A support agent that answers chats may use 5 of these. An agent that signs up to portals, waits for codes and processes invoices, like Ferndale’s accounts agent in the example, uses all 10.',
    },
    {
      kind: 'table',
      caption: 'The AI agent infrastructure market map: each layer, what it gives the agent and who offers it, from their own pages as listed on 22 November 2026',
      cols: ['Part of the stack', 'What it gives the agent', 'Who offers it'],
      rows: [
        ['Model', 'Reasoning, writing and the choice of tool', 'Anthropic\nOpenAI\nGoogle'],
        ['Runtime and orchestration', 'Turns, tool calls, state and retries', 'OpenAI Agents SDK\nClaude Managed Agents\nCloudflare Agents SDK'],
        ['Memory', 'Facts kept across sessions', 'Mem0\nOpenAI Agents SDK sessions\nClaude’s memory tool'],
        ['Tools and MCP', 'Functions the model can call', 'MCP servers from each vendor\nComposio'],
        ['Email', 'An address that sends and receives', 'AgentMail\nNylas\nBird'],
        ['Phone and messaging', 'Numbers, texts, calls and chat apps', 'Twilio\nAgentPhone\nVapi, for voice agents'],
        ['Browser', 'A cloud browser that keeps its logins', 'Browserbase\nKernel\nSteel\nBrowser Use'],
        ['Sandbox', 'A computer to run code', 'E2B\nDaytona\nModal\nVercel Sandbox'],
        ['Identity', 'Access to accounts, or a name of its own', 'Auth0, for acting in a user’s accounts\nToolkits that hold an inbox, number and browser under one name'],
        ['Observability', 'Traces, costs and evaluations', 'Langfuse\nLangSmith\nDatadog'],
      ],
    },

    { kind: 'h2', id: 'layers', text: 'The 10 layers of the AI agent tech stack, and who sells each' },

    { kind: 'h3', id: 'model', text: 'Model: the part that reasons' },
    {
      kind: 'p',
      text: `The model reads the task, decides the next step and chooses which tool to call. As listed on 22 November 2026, [Anthropic’s pricing page](${ANTHROPIC_PRICING}) put Claude Opus 5.5 at $4 per million input tokens and $20 per million output tokens. Claude Sonnet 5.5 was $2 and $10, and Claude Haiku 5.5 $0.10 and $0.50 for prompts up to 100,000 tokens. OpenAI’s GPT and Google’s Gemini models are the other common choices.`,
    },
    {
      kind: 'p',
      text: `Tools add to the model bill. [Anthropic’s tool use guide](${TOOL_USE}) says each tool’s name, description and schema count as input tokens, and the API adds a system prompt of 286 tokens on Claude Opus 5.5 whenever tools are present. Pick the model by price per million tokens at your volume, how reliably it calls tools, and how fast it answers.`,
    },

    { kind: 'h3', id: 'runtime', text: 'Runtime and orchestration: the loop around the model' },
    {
      kind: 'p',
      text: `The runtime calls the model, runs the tools it asks for, sends the results back and repeats until the task is done. It keeps state between turns, retries failed calls and decides what happens while the agent waits. [OpenAI’s Agents SDK](${OPENAI_AGENTS}) builds that loop in Python from a few parts: agents with instructions and tools, handoffs between agents, guardrails that check inputs and outputs, sessions for memory, and built-in tracing. It can also run an agent inside an isolated sandbox workspace and call tools on remote MCP servers.`,
    },
    {
      kind: 'p',
      text: `Anthropic hosts the loop as Claude Managed Agents. [Its pricing page](${ANTHROPIC_PRICING}) bills $0.08 per session-hour of running time, and time spent idle, such as waiting for your next message, isn’t counted. [How to build an AI agent from scratch](/blog/how-to-build-an-ai-agent-from-scratch) walks through writing the loop yourself, and [long running AI agents](/blog/long-running-ai-agents) covers agents that wait weeks for an email.`,
    },

    { kind: 'h3', id: 'memory', text: 'Memory: what the agent keeps between sessions' },
    {
      kind: 'p',
      text: `Memory stores facts the agent should keep beyond one conversation: a user’s preferences, a decision made last week, where a task stands. [Mem0’s pricing page](${MEM0}) offered a Free plan for unlimited end users on 22 November 2026. It covered 10,000 memory adds and 1,000 retrievals a month for the first 30 days with model calls included, or 50,000 adds and 10,000 retrievals with your own model key. Its Custom plan adds graph memory, user profiles, single sign-on and deployment on your own servers.`,
    },
    {
      kind: 'p',
      text: `Simpler agents use the memory their framework provides. The OpenAI Agents SDK keeps sessions, and Claude’s memory tool stores information across conversations in files you control, per [Anthropic’s tool use guide](${TOOL_USE}). Memory holds what the agent chose to remember. The emails, texts and pages it received stay with whichever service received them.`,
    },

    { kind: 'h3', id: 'tools-mcp', text: 'Tools and MCP: how the agent acts' },
    {
      kind: 'p',
      text: `A tool is a function the model can call, described by a name, a description and an input schema. The model returns a structured call, and your code or the provider runs it. MCP, the Model Context Protocol, is the open standard that lets any AI application find and call a server’s tools without code written for each one. [The current MCP specification](${MCP_SPEC}), dated 28 July 2026, defines hosts, clients and servers that exchange JSON-RPC 2.0 messages, and servers that offer tools, resources and prompts. [The glossary](/glossary/model-context-protocol) defines each part.`,
    },
    {
      kind: 'p',
      text: `[Composio](${COMPOSIO}) connects agents to more than 1,700 apps over MCP or its SDK and manages each app’s sign-in, and its free Hobby plan included 100,000 tool calls a month on 22 November 2026. A tool calls something that already exists. When the agent needs an inbox or a phone number of its own, a service has to create and hold it. [AI agent tools vs MCP](/blog/ai-agent-tools-vs-mcp) sets tools, MCP servers and skills side by side.`,
    },

    { kind: 'h3', id: 'email', text: 'Email: an address that sends and receives' },
    {
      kind: 'p',
      text: `An agent with its own inbox can sign up for services, receive login codes and replies, and write from an address people recognise. As listed on 22 November 2026, [AgentMail’s pricing page](${AGENTMAIL}) offered 3 inboxes and 3,000 emails a month free, 10 inboxes for $20 a month and 150 for $200. Every plan included SDKs, websockets, an MCP server and a webhook, which sends each new email to your code the moment it lands. Nylas and Bird also sell inboxes for agents. Look for your own domain, threads, attachments and how fast a reply reaches your code.`,
    },

    { kind: 'h3', id: 'phone', text: 'Phone and messaging: a number people can reach' },
    {
      kind: 'p',
      text: `A number lets customers call and text the agent, and lets the agent receive the codes sites send by text. As listed on 22 November 2026, [Twilio’s US SMS pricing](${TWILIO_SMS}) put a local number at $1.15 a month and a text at $0.0083 per segment, sent or received, plus carrier fees. [Its voice pricing](${TWILIO_VOICE}) listed calls at $0.014 a minute out and $0.0085 in.`,
    },
    {
      kind: 'p',
      text: `[AgentPhone](${AGENTPHONE}) sells numbers built for agents at $3 a month, with calls at 13¢ a minute through your own agent, texts at 2¢ a segment and iMessage lines from $150 a month. [Vapi](${VAPI}) hosts voice agents for $0.05 a minute plus the model, voice and transcriber you choose, and its own estimate for 1,000 minutes came to $82 to $129 a month. US numbers that send texts have to be registered with the carriers. For business texting from ordinary 10-digit numbers, that registration is called 10DLC. AgentPhone lets you file it from its dashboard, and Twilio lists its A2P 10DLC fees separately.`,
    },

    { kind: 'h3', id: 'browser', text: 'Browser: a session that stays signed in' },
    {
      kind: 'p',
      text: `A cloud browser lets the agent open pages, fill forms and stay signed in to sites with no API. It usually runs as a [headless browser](/glossary/headless-browser), which is a browser without a screen that code drives. As listed on 22 November 2026, [Browserbase’s pricing page](${BROWSERBASE}) started free with 1 browser hour. Developer was $20 a month for 100 hours, then $0.12 an hour, and Startup $99 for 500 hours, then $0.10, with proxy traffic billed per GB. Browserbase makes Stagehand, a framework for browser agents, and works with Playwright and Puppeteer.`,
    },
    {
      kind: 'p',
      text: `Kernel, Steel and Browser Use sell cloud browsers too. Claude’s browser use tool gives the model the actions, and it runs in your own browser environment, per [Anthropic’s tool use guide](${TOOL_USE}). [Browser automation tools for AI agents](/blog/browser-automation-tools-for-ai-agents) compares the options, and [can AI agents log in to websites](/blog/can-ai-agents-log-in-to-websites) covers sessions, codes and what sites allow.`,
    },

    { kind: 'h3', id: 'sandbox', text: 'Sandbox: a computer to run code' },
    {
      kind: 'p',
      text: `A sandbox is an isolated computer where the agent runs code, reads files and processes data away from your own servers. As listed on 22 November 2026, [E2B’s pricing page](${E2B}) billed a running sandbox by the second, about $0.05 a vCPU hour and $0.016 a GiB hour of memory. Its Hobby plan was free with a one-time $100 credit and sessions up to 1 hour, and Pro was $150 a month plus usage, with sessions up to 24 hours. Daytona, Modal and Vercel sell sandboxes as well.`,
    },
    {
      kind: 'p',
      text: 'Model providers run code too. Anthropic gives each organisation 1,550 free hours of its code execution tool a month, then $0.05 an hour per container, on the same pricing page. Before you choose, check how long a session can last and whether you pay while the agent waits.',
    },

    { kind: 'h3', id: 'identity', text: 'Identity: who the agent acts as' },
    {
      kind: 'p',
      text: `Identity has 2 meanings in this stack. The first is access, permission for an agent to act inside a user’s accounts. [Auth0’s page for AI agents](${AUTH0}) describes agents acting on a user’s behalf, with permissions defined once, applied across systems and every action auditable. The second is presence, one name that holds the agent’s own inbox, number and browser profile. With presence, a code texted to the agent’s number reaches the browser session that asked for it. Bought from 3 vendors, that join is left to your code.`,
    },

    { kind: 'h3', id: 'observability', text: 'Observability: what the agent did, step by step' },
    {
      kind: 'p',
      text: `Observability means traces of every model call, tool call, cost and error, with evaluations that score the results. As listed on 22 November 2026, [Langfuse’s pricing page](${LANGFUSE}) offered a free Hobby plan with 50,000 units a month and 30 days of data. Core was $29 a month with 90 days, and Pro $199 with 3 years. Langfuse is open source, can be self-hosted and builds on OpenTelemetry, an open standard for traces. The guide to [AI agent observability](/blog/ai-agent-observability), the tools that trace and score agents, compares it with 5 others, including LangSmith, Arize Phoenix, Datadog, Helicone and Braintrust.`,
    },

    { kind: 'h2', id: 'choose', text: 'How to choose the layers for your agent' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List what the agent must touch outside your code.** A portal to sign in to, codes by text, replies by email, files to process. A pass: every item maps to one row of the market map, such as Browser or Phone.',
        '**Mark what must share one identity.** A login code and the browser that asked for it, or the number a customer calls and the inbox that confirms the booking. A pass: you know which pieces must belong to the same agent.',
        '**Price the waiting as well as the working.** An agent that waits 3 days for a reply pays for those days on any piece billed while idle. A pass: you know the cost per agent per month for 1 agent and for 10,000.',
        '**Count accounts, keys, webhooks and bills.** Each vendor adds a key to rotate, a webhook format to parse and an invoice to reconcile. A pass: one place shows every event for one agent, in order.',
        '**Check the rules that come with each service.** US texting registration, CAPTCHAs, identity checks, and the MCP specification’s rule that hosts get the user’s consent before a tool runs. A pass: the agent stops at each one by design.',
        '**Decide what you will watch.** Time to ship, task success, latency from a message landing to the agent acting, and cost per agent. A pass: each has a number before launch.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'AI agent infrastructure companies compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 22 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'AI agent infrastructure companies by layer, from each provider’s own pages, as listed on 22 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['A model with no outside pieces', 'Reasons and writes with nothing extra to run', 'Model tokens only', 'Can’t receive email, browse or run code', 'Drafting and answers from what it knows'],
        [
          'Build every piece yourself',
          'Full control of every piece and its data',
          'Servers, plus engineering hours',
          'Deliverability, carrier registration and browser upkeep become your job',
          'Teams with infrastructure engineers and one piece that matters most',
        ],
        ['Anthropic: Claude models, tools, Managed Agents', 'Models, built-in tools and a hosted agent loop', 'Opus 5.5: $4 in, $20 out per million tokens\nManaged Agents: $0.08 a running session-hour', 'Browser use runs in your own browser', 'Teams building on Claude'],
        ['OpenAI Agents SDK', 'Agents, handoffs, guardrails, sessions and tracing in Python', 'Installed with pip\nModel calls billed separately', 'Outside services come in as tools', 'Python teams that want a ready-made loop'],
        ['Mem0: memory', 'Memory across sessions for unlimited end users', 'Free: 50,000 adds a month with your own model key\nCustom plan', 'Memory only', 'Agents that must remember each user'],
        ['Composio: tools and app connections', '1,700+ apps with sign-in handled, over MCP or SDK', 'Hobby: 100,000 tool calls a month free\nPaid tools billed per call', 'Works through accounts users already hold', 'Agents acting in a user’s own apps'],
        ['AgentMail: email inboxes', 'Inboxes, threads, webhooks, MCP and SDKs', 'Free: 3 inboxes\nDeveloper $20 a month\nStartup $200 a month', 'Email only', 'Agents that need an inbox and nothing else'],
        ['Twilio: numbers, texts and calls', 'Numbers, texts and calls at any volume', 'Number $1.15 a month\nText $0.0083, plus carrier fees', 'No cloud browser or sandbox', 'A phone line at high volume'],
        ['AgentPhone: numbers for agents', 'Numbers, texts, calls and iMessage on one webhook', 'Number $3 a month\nCalls 13¢ a minute, texts 2¢', 'Phone and messaging only', 'Agents that live on the phone'],
        ['Vapi: voice agents', 'Hosted voice agents with the models you choose', '$0.05 a minute, plus model, voice and transcriber', 'Voice only', 'Teams shipping a voice agent'],
        ['Browserbase: cloud browsers', 'Browser fleets, Stagehand, Playwright and Puppeteer', 'Free: 1 browser hour\nDeveloper $20 a month\nStartup $99 a month', 'Proxy traffic billed per GB\nNo inbox or number described', 'Browser-only agents at scale'],
        ['E2B: sandboxes', 'Isolated machines billed by the second', 'About $0.05 a vCPU hour\nPro $150 a month plus usage', 'Sessions up to 1 hour on Hobby, 24 on Pro', 'Long, busy code runs'],
        ['Auth0 for AI agents: access', 'Permissions to act for a user, every action auditable', 'Free to try', 'Access to existing accounts, with no address of its own', 'Agents acting inside a user’s systems'],
        ['Langfuse: observability', 'Traces, costs and evaluations, open source and self-hostable', 'Free: 50,000 units a month\nCore $29, Pro $199 a month', 'Shows what the agent did, without running it', 'Every agent in production'],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone), [Messaging](/messaging), [Browser](/browser), [Sandbox](/sandbox), [Personas](/personas)',
          'Every outside piece under one identity, with one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Model, runtime and memory stay yours; stops before payment and at any identity check',
          'Agents that need more than one of an inbox, a number, a browser and a sandbox',
        ],
      ],
    },

    { kind: 'h2', id: 'one-api', text: 'Where one API replaces several' },
    {
      kind: 'p',
      text: 'An agent that signs up to a supplier portal touches 4 layers in a minute. The browser fills the form, the portal texts a login code to the agent’s number, the code has to reach the same browser session, and the confirmation lands in the agent’s inbox. Bought separately, that is 4 accounts, 4 keys and 4 bills, and your code joins them by matching a phone number to a browser session. The cost shows in time to ship, and again each time one vendor changes its webhook.',
    },
    {
      kind: 'p',
      text: '[AgentMail, Twilio, Browserbase and E2B in one API](/compare/agentmail-twilio-browserbase-e2b) works one agent’s month out piece by piece, on 4 bills and on 1. The model, the runtime, memory and traces stay with whichever vendors you pick for them, such as Anthropic, Mem0 and Langfuse.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, with email inboxes, phone numbers and texts, iMessage, WhatsApp, Slack and Telegram, a cloud browser and a sandbox on one API and one bill. In the [Build agent products blueprints](/blueprints/build-agent-products), obsession.personas.create({ inbox: true, phone: "US", browser: true }) gives an agent an inbox, a US number and a browser under one identity. That persona is free while it waits, and every email, text and page reaches one webhook as email.received, sms.received or page.visited.',
    },
    {
      kind: 'cta',
      text: 'Give each agent an inbox, a phone number and a browser under one identity, on one key and one bill. The Free plan needs no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'limits', text: 'What the stack leaves to you' },
    {
      kind: 'list',
      items: [
        '**The job itself.** The model and your instructions decide what the agent attempts, and evaluations show whether it worked.',
        '**The rules.** US carriers require texting registration, sites block automated sign-ins with CAPTCHAs and bot checks, and identity checks exist to stop software. A well-built agent stops at each and records where it stopped.',
        '**Security.** The MCP specification says tools represent arbitrary code execution, and that descriptions of tool behaviour, such as annotations, are untrusted unless they come from a trusted server. Give each agent only the tools its job needs.',
        '**Prices.** Every price here is as listed on 22 November 2026. Check each vendor’s page before you commit, since plans and allowances change.',
      ],
    },
    {
      kind: 'cta',
      text: 'Not building agents? With the QA on your own flows blueprint, a persona signs up to your product after every release, and Obsession sends you the step that breaks.',
      to: '/blueprints/website-audit',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about the AI agent infrastructure stack' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is AI agent infrastructure?',
          a: 'AI agent infrastructure is everything an agent needs besides its model: a runtime, memory, tools and MCP, email, phone and messaging, a browser, a sandbox, an identity, and observability such as step-by-step traces. Each is sold as a service, so most teams combine several vendors.',
        },
        {
          q: 'What are the layers of the AI agent tech stack?',
          a: 'Most agents use some or all of 10 layers: model, runtime and orchestration, memory, tools and MCP, email, phone and messaging, browser, sandbox, identity, and observability. A support agent may use 5 of them. An agent that signs up to portals, waits for codes and processes invoices uses all 10.',
        },
        {
          q: 'Which AI agent infrastructure companies sell each layer?',
          a: 'As listed on 22 November 2026, models come from Anthropic, OpenAI and Google, the runtime from the OpenAI Agents SDK or Claude Managed Agents, and memory from Mem0. Composio and vendors’ own MCP servers supply tools, and AgentMail supplies email. Twilio, AgentPhone and Vapi cover phone and voice, Browserbase browsers, E2B sandboxes, Auth0 access, and Langfuse traces and evaluations.',
        },
        {
          q: 'What does an AI agent infrastructure market map show?',
          a: 'It sorts vendors across the 10 layers by the job each does for the agent, so you can see what you have covered and where two vendors overlap. Several now span 2 or more layers: Composio connects more than 1,700 apps and handles their sign-in, Anthropic sells models, tools and a hosted runtime, and agent toolkits put email, phone, browser and sandbox on one API.',
        },
        {
          q: 'What is agent infrastructure as a service?',
          a: 'It means renting the pieces an agent needs, such as inboxes, phone numbers, browsers and sandboxes, from a provider that runs them and bills by use. The alternative is running your own mail servers, phone lines and browser fleets. Most layers in the stack are sold this way, with free plans to start.',
        },
        {
          q: 'How much does AI agent infrastructure cost per agent?',
          a: 'At prices listed on 22 November 2026, a US number cost $1.15 to $3 a month, a browser hour $0.10 to $0.12 past free allowances, and a running sandbox about $0.05 a vCPU hour. Model tokens scale with how much the agent reads and writes. The total depends on what the agent touches and how long it waits.',
          link: { label: 'One agent’s month, priced piece by piece', to: '/compare/agentmail-twilio-browserbase-e2b' },
        },
        {
          q: 'Do I need MCP to build an AI agent?',
          a: 'No. An agent can call tools defined in your own code through the model’s function calling. MCP helps when the same tools must work in several applications, such as Claude Code and Cursor, or when a vendor already offers a server.',
          link: { label: 'AI agent tools vs MCP', to: '/blog/ai-agent-tools-vs-mcp' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Sources and dates',
      text: 'Every vendor fact comes from the vendor’s own page, checked on 22 November 2026. Prices change, so check each page before you buy. Ferndale, the company in the illustration, is invented.',
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'Anthropic', url: ANTHROPIC_PRICING },
    { title: 'Tool use with Claude', publisher: 'Anthropic', url: TOOL_USE },
    { title: 'OpenAI Agents SDK', publisher: 'OpenAI', url: OPENAI_AGENTS },
    { title: 'Pricing', publisher: 'Mem0', url: MEM0 },
    { title: 'Specification, version 2026-07-28', publisher: 'Model Context Protocol', url: MCP_SPEC, date: '2026-07-28' },
    { title: 'Composio', publisher: 'Composio', url: COMPOSIO },
    { title: 'Pricing', publisher: 'AgentMail', url: AGENTMAIL },
    { title: 'SMS pricing in the United States', publisher: 'Twilio', url: TWILIO_SMS, date: '2026-11' },
    { title: 'Programmable Voice pricing in the United States', publisher: 'Twilio', url: TWILIO_VOICE, date: '2026-10' },
    { title: 'Pricing', publisher: 'AgentPhone', url: AGENTPHONE },
    { title: 'Pricing', publisher: 'Vapi', url: VAPI },
    { title: 'Pricing', publisher: 'Browserbase', url: BROWSERBASE },
    { title: 'Pricing', publisher: 'E2B', url: E2B },
    { title: 'Ship AI agents faster and more securely', publisher: 'Auth0', url: AUTH0 },
    { title: 'Pricing', publisher: 'Langfuse', url: LANGFUSE },
  ],

  related: [
    '/blueprints/build-agent-products',
    'recipe:website-audit',
    'long-running-ai-agents',
    'ai-agent-observability',
    '/compare/agentmail-twilio-browserbase-e2b',
    'recipe:inbox-agent',
    'recipe:imessage-assistant',
  ],
}

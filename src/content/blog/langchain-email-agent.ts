import type { BlogPost } from './types'

/* Wave 2, batch B (_research/seo/wave2-pull-23nov/PLAN.md, page 15). Primary "langchain email agent"; secondaries
   "langchain agent email address" and "give a langchain agent an inbox" (Google suggests "langchain email agent" and
   "agent email address", US and UK, 23 Nov 2026, autocomplete_23nov.json; the other two are the searcher's own
   follow-ups, long tail). Readers: developers building agents with LangChain. Spine: the how-to guide: what an email
   agent needs in LangChain, LangChain's own email tooling, an inbox and a number in five steps with a pass for each,
   waiting days for a reply, the options compared, when the Gmail toolkit is enough, guardrails, FAQ, note and sources.
   Read on 23 Nov 2026, each on its own page (facts and quotes in research/langchain-email-agent.json): LangChain's
   TypeScript agent docs (createAgent, the "anthropic:claude-sonnet-5" model string, invoke with configurable.thread_id),
   tools docs (tool() with a zod schema, snake_case names), human-in-the-loop docs (humanInTheLoopMiddleware,
   interruptOn, a checkpointer is required), MCP docs (MCPAdapter in @langchain/mcp-adapters 2.0), the Python Gmail
   toolkit page (langchain-google-community, five tools, credentials.json, full mailbox scope in the example), the
   Python tools index (email toolkits from agent inbox providers), the LangChain.js API reference for GmailSendMessage,
   and the agents-from-scratch repository (MIT). Obsession's calls, events and prices are the site's own
   (pages/developers.ts, pieces/email.ts, pieces/phone.ts, delivery.ts, prices.ts as of 23 Nov 2026: inbox $0.50, number
   $2, text $0.015, US texting registration $25 once then $17 a month; the Free number receives texts and calls and sends
   none). No code invents an endpoint: only inboxes.create, inbox.send, numbers.create, number.sms, personas.create,
   events.subscribe and the webhook's data.thread. northpine.example and supplier.example are invented. British English,
   no dashes. */

const LC_AGENTS = 'https://docs.langchain.com/oss/javascript/langchain/agents'
const LC_TOOLS = 'https://docs.langchain.com/oss/javascript/langchain/tools'
const LC_HITL = 'https://docs.langchain.com/oss/javascript/langchain/human-in-the-loop'
const LC_GMAIL = 'https://docs.langchain.com/oss/python/integrations/tools/google_gmail'
const LC_JS_GMAIL = 'https://reference.langchain.com/javascript/langchain-community/tools/gmail/GmailSendMessage'
const AFS = 'https://github.com/langchain-ai/agents-from-scratch'
const LC_INDEX = 'https://docs.langchain.com/oss/python/integrations/tools/index'
const LC_MCP = 'https://docs.langchain.com/oss/javascript/langchain/mcp/index'

export const post: BlogPost = {
  slug: 'langchain-email-agent',
  title: 'LangChain email agent: give a LangChain agent its own inbox and phone number',
  dek: 'Five steps in TypeScript: create the inbox and the number, wrap each as a LangChain tool, put sends behind approval and wake the agent on every reply. LangChain’s own email tooling is described from its docs as read on 23 November 2026.',
  metaTitle: 'LangChain email agent: an inbox and number for developers',
  description:
    'Build a LangChain email agent with its own inbox and phone number: wrap inboxes.create and inbox.send as tools, and wake it on each reply by webhook.',
  answer:
    'A LangChain email agent is a LangChain agent with tools to send and read email, and to give it an address of its own, wrap an inbox’s calls as LangChain tools. With Obsession, obsession.inboxes.create() returns that inbox and obsession.numbers.create({ country: "US" }) a number, and each reply reaches your server as email.received or sms.received, where agent.invoke() resumes the conversation. LangChain’s own Gmail toolkit is the shorter path when the agent works in a person’s Gmail.',
  primaryKeyword: 'langchain email agent',
  keywords: ['langchain agent email address', 'give a langchain agent an inbox'],
  category: 'Build agent products',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 8,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'One LangChain agent, one thread, 3 days',
      who: 'quotes@northpine.example, a LangChain agent',
      rows: [
        { time: 'Mon 10:02', text: 'Calls send_email', detail: 'Asks supplier.example to quote 400 units', tone: 'info' },
        { time: 'Mon 10:04', text: 'Approved in your app', detail: 'The middleware held the send for a yes', tone: 'ok' },
        { time: 'Wed 16:40', text: 'email.received', detail: '“Quote attached: $11.20 a unit”', tone: 'ok' },
        { time: 'Wed 16:40', text: 'agent.invoke resumes', detail: 'thread_id taken from the email’s thread', tone: 'info' },
        { time: 'Wed 16:41', text: 'Calls send_text', detail: 'Texts the buyer the price, after approval', tone: 'ok' },
      ],
      foot: 'Example: nothing runs between Monday and Wednesday; the reply wakes the agent. northpine.example and supplier.example are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Developers building a LangChain email agent need more than a model. The agent needs tools that send, a way to wake it when a reply lands, and memory that picks the conversation back up. With an inbox and a phone number of its own, it writes from an address and number that belong to it, and every reply reaches your code as an event. The code uses LangChain’s TypeScript library and [Obsession’s TypeScript SDK](/developers), as documented on 23 November 2026.',
    },

    { kind: 'h2', id: 'what-it-needs', text: 'What a LangChain email agent needs' },
    {
      kind: 'p',
      text:
        'A LangChain agent is a model that calls tools in a loop until a task is done. [LangChain’s agent docs](' +
        LC_AGENTS +
        ') build one with createAgent, a model and a list of tools. [Its tools docs](' +
        LC_TOOLS +
        ') define each tool with the tool function, a name, a description and a schema written in zod, a TypeScript library for describing inputs. An email agent adds four parts:',
    },
    {
      kind: 'list',
      items: [
        '**A send tool** that writes from an address the agent owns.',
        '**A wake-up** that runs the agent when an email or text arrives, often days later.',
        '**Memory per conversation**, so a reply resumes the thread it belongs to. LangChain keeps it with a checkpointer and a thread_id.',
        '**Approval before sending**, so a person checks each email first. [LangChain’s human-in-the-loop middleware](' +
          LC_HITL +
          ') pauses chosen tool calls until someone approves, edits or rejects them.',
      ],
    },

    { kind: 'h2', id: 'langchain-tools', text: 'LangChain’s own email tooling' },
    {
      kind: 'p',
      text:
        '[LangChain’s Gmail toolkit](' +
        LC_GMAIL +
        ') reads messages, drafts and sends through the Gmail API. It installs with the langchain-google-community package and gives an agent five tools: GmailCreateDraft, GmailSendMessage, GmailSearch, GmailGetMessage and GmailGetThread. It signs in with a credentials.json file from a Google Cloud project, and its example asks for the full mailbox scope, with a read-only scope as the alternative. LangChain.js ships a [GmailSendMessage class](' +
        LC_JS_GMAIL +
        ') in its community package too.',
    },
    {
      kind: 'p',
      text:
        'For the whole pattern, LangChain’s [agents-from-scratch repository](' +
        AFS +
        ') builds an email assistant in four parts. A triage step works with an agent that writes replies, then come evaluation, human review of tool calls such as sending an email, and memory that learns from feedback. Its notebooks run on mock email tools, with a Gmail integration to connect a real account.',
    },
    {
      kind: 'p',
      text:
        '[LangChain’s tools index](' +
        LC_INDEX +
        ') also lists email toolkits from inbox providers built for agents. [MCP](/glossary/model-context-protocol), the Model Context Protocol, is how AI applications call outside tools, and [LangChain’s MCP adapter](' +
        LC_MCP +
        ') loads any MCP server’s tools into createAgent. [MCP servers for email](/blog/mcp-server-email) compares the servers it can load. These tools suit an agent that works in a person’s Gmail. An agent with an address of its own needs an inbox that belongs to the agent.',
    },

    { kind: 'h2', id: 'build', text: 'Give a LangChain agent its own inbox and number' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: inboxes, phone numbers, browsers and sandboxes on one API and one bill. Each step ends with what a pass looks like.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Install the packages.** Run npm install obsession langchain zod @langchain/langgraph, set OBSESSION_API_KEY, and create the client with new Obsession({ apiKey: process.env.OBSESSION_API_KEY }). **Pass:** the client starts with no error.',
        '**Create the inbox and the number.** const inbox = await obsession.inboxes.create() returns an inbox that sends and receives, at inbox.address. const number = await obsession.numbers.create({ country: "US" }) returns a number that texts and takes calls, at number.e164. **Pass:** an address and a number come back.',
        '**Wrap each call as a tool.** const sendEmail = tool(({ to, subject, text }) => inbox.send({ to, subject, text }), { name: "send_email", description: "Send an email from the agent’s own address.", schema: z.object({ to: z.string(), subject: z.string(), text: z.string() }) }). A send_text tool wraps number.sms({ to, text }) the same way. **Pass:** sendEmail.invoke() with your own address delivers an email to your mailbox.',
        '**Build the agent with approval.** const agent = createAgent({ model: "anthropic:claude-sonnet-5", tools: [sendEmail, sendText], middleware: [humanInTheLoopMiddleware({ interruptOn: { send_email: true, send_text: true } })], checkpointer: new MemorySaver() }). The middleware holds every send for a person, and the checkpointer keeps each conversation. **Pass:** a request to email someone stops at an approval before anything leaves.',
        '**Wake it on every reply.** obsession.events.subscribe({ url: process.env.HOOK_URL, events: ["email.received", "sms.received"] }) posts each new email and text to your server. For an email, the handler calls agent.invoke({ messages: [{ role: "user", content: JSON.stringify(event.data) }] }, { configurable: { thread_id: event.data.thread } }), so the reply resumes its own conversation. **Pass:** a reply you send to inbox.address reaches the handler, and the agent drafts an answer for approval.',
      ],
    },
    {
      kind: 'p',
      text: 'For texts, key the thread_id on the sender’s number instead. The Free plan’s number receives up to 50 texts and 30 call minutes a month, and sending texts needs a paid plan. US carriers also require business texting to be registered, as [10DLC registration](/blog/10dlc-registration) explains. On Obsession that costs $25 once for each campaign, then $17 a month while the campaign is active.',
    },
    {
      kind: 'p',
      text: 'To keep the inbox and the number under one name, create them together with obsession.personas.create({ inbox: true, phone: "US" }). A [persona](/personas) is free while it waits. Its handler can also run on Obsession’s runtime instead of your server, about 50 ms after each email lands.',
    },
    {
      kind: 'cta',
      text: 'Give every LangChain agent its own inbox and number on one key and one bill, with every reply as an event. The Free plan includes 3 inboxes and a number, with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'waiting', text: 'When the reply takes days' },
    {
      kind: 'p',
      text: 'Email agents wait. A supplier answers on Wednesday a question sent on Monday, and a lead texts back a week later. The agent holds nothing open in between. The inbox keeps receiving, every email and text lands in your event log, and the reply reaches your handler as an event. If your server is down, events retry for 27 hours, and any event can be replayed.',
    },
    {
      kind: 'p',
      text: 'LangChain’s checkpointer then restores the conversation from its thread_id, so the agent answers with everything it said before. MemorySaver keeps that history only while the process runs, and LangChain’s docs point to its Postgres and MongoDB savers for production. [Long running AI agents](/blog/long-running-ai-agents) covers longer waits and the patterns behind them.',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to give a LangChain agent email, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to give a LangChain agent email, from each provider’s own pages, as listed on 23 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['LangChain Gmail toolkit', 'Five ready tools: search, read, thread, draft and send', 'Free; Gmail API quota of 250 units per user per second', 'A Google account it signs in to; full mailbox scope in the example', 'Agents that work in a person’s Gmail'],
        ['LangChain agents-from-scratch', 'Triage, replies, evaluation, approvals and memory, in notebooks', 'Free, MIT', 'Mock tools until you connect Gmail', 'Learning the whole email agent pattern'],
        ['MCP servers through MCPAdapter', 'Any email MCP server’s tools, loaded into createAgent', 'Free adapter; each server priced by its maker', 'As wide as the server you pick', 'Reusing a server you already run'],
        ['Your own tools on an email API', 'Full control of every call', 'Priced by the provider you choose', 'You build receiving, threads and the wake-up', 'One provider you already use'],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone) and [Personas](/personas) through the SDK',
          'An inbox and a number in two calls\nEvery reply as an event, in one log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment unless given your card',
          'Agents with their own address and number',
        ],
      ],
    },

    { kind: 'h2', id: 'when', text: 'When LangChain’s Gmail toolkit is enough' },
    {
      kind: 'p',
      text: 'If the agent works in one person’s Gmail, such as drafting replies for a founder to send, the Gmail toolkit needs nothing beyond a Google Cloud project. An inbox of its own fits when the address belongs to the agent. That covers a support or sales agent, one agent per customer or user, and an agent that signs up to supplier portals and reads the codes they send.',
    },
    {
      kind: 'p',
      text: 'It also fits an agent that needs a phone number or a browser that stays signed in, on the same key. An inbox is $0.50 a month and a US number $2 a month, for 1 agent or a fleet of 10,000. The same inbox works from Claude Code too, as [email for Claude Code](/blog/email-for-claude-code) shows, and [how to build an AI agent from scratch](/blog/how-to-build-an-ai-agent-from-scratch) covers the loop underneath.',
    },

    { kind: 'h2', id: 'guardrails', text: 'Guardrails for a LangChain email agent' },
    {
      kind: 'list',
      items: [
        '**Approve before it sends.** Keep send_email and send_text in interruptOn until the agent has earned trust on real replies.',
        '**Treat every email as untrusted.** An email can carry instructions written for the model, so pass its text in as data and keep it apart from your system prompt.',
        '**Identify the agent.** Every Obsession agent says it’s an AI when it talks to a person, and texts people who gave the business their number.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about LangChain email agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can a LangChain agent have its own email address?',
          a: 'Yes. Create an inbox with obsession.inboxes.create(), wrap inbox.send as a LangChain tool, and subscribe your server to email.received so each reply wakes the agent. The Free plan includes 3 inboxes with no credit card.',
          link: { label: 'Email for AI agents', to: '/email' },
        },
        {
          q: 'How do I give a LangChain agent an inbox?',
          a: 'Create the inbox through an email API, define a send tool with LangChain’s tool function and a zod schema, and pass it to createAgent. Then send each incoming email to agent.invoke with the email’s thread as the thread_id, so the agent resumes the right conversation.',
        },
        {
          q: 'Does LangChain have a Gmail tool?',
          a: 'Yes. The Gmail toolkit in the langchain-google-community package gives an agent five tools to search, read, draft and send in a Gmail account. It signs in with a credentials.json file from a Google Cloud project, and LangChain.js has Gmail tool classes in its community package.',
        },
        {
          q: 'How does a LangChain email agent receive email?',
          a: 'Through a webhook, an address on your server that receives each new email as an event. The handler passes the email to agent.invoke, and a checkpointer restores the conversation from its thread_id. If your server is down, Obsession retries each event for 27 hours.',
        },
        {
          q: 'Can a LangChain email agent send texts?',
          a: 'Yes. Wrap number.sms as a tool next to the email tool. A US number is $2 a month and each text $0.015, and US business texting needs a carrier registration, which Obsession files for $25 once per campaign, then $17 a month.',
          link: { label: 'Phone numbers for AI agents', to: '/phone' },
        },
        {
          q: 'Does this work with LangChain in Python?',
          a: 'Yes. LangChain’s Python and TypeScript libraries share the same ideas of agents, tools, middleware and checkpointers, and Obsession’s API can be called from Python or plain HTTP as well as its TypeScript SDK.',
          link: { label: 'API and MCP', to: '/developers' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'Every description of LangChain follows its docs, API reference and repositories as they stood on 23 November 2026. Package names, model strings and middleware options change with new releases, so check LangChain’s page before you build. northpine.example and supplier.example in the illustration are invented.',
    },
  ],

  sources: [
    { title: 'Agents', publisher: 'LangChain docs (TypeScript)', url: LC_AGENTS },
    { title: 'Tools', publisher: 'LangChain docs (TypeScript)', url: LC_TOOLS },
    { title: 'Human-in-the-loop', publisher: 'LangChain docs (TypeScript)', url: LC_HITL },
    { title: 'Gmail toolkit integration', publisher: 'LangChain docs (Python)', url: LC_GMAIL },
    { title: 'GmailSendMessage', publisher: 'LangChain reference (JavaScript)', url: LC_JS_GMAIL },
    { title: 'agents-from-scratch', publisher: 'GitHub (LangChain)', url: AFS },
    { title: 'Tools and toolkits', publisher: 'LangChain docs (Python)', url: LC_INDEX },
    { title: 'Model Context Protocol (MCP)', publisher: 'LangChain docs (TypeScript)', url: LC_MCP },
  ],

  related: ['/email', '/phone', '/developers', '/personas', 'email-for-claude-code', 'mcp-server-email', 'how-to-build-an-ai-agent-from-scratch', 'long-running-ai-agents'],
}

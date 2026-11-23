import type { BlogPost } from './types'

/* AI visibility wave (_research/seo/ai-visibility-23nov/PLAN.md, 23 Nov 2026): the n8n email agent.
   Primary "n8n email agent"; also "n8n email agent template", "n8n email triage agent", "n8n email reply agent".
   Reader: people who build agents in n8n without writing much code. n8n is described only from its own documentation pages,
   read on 23 Nov 2026. Obsession lines keep to src/content/pages/developers.ts, src/content/delivery.ts and
   src/content/pieces/email.ts: an inbox per agent, events by signed webhook, "Zapier, Make and n8n" as a delivery
   channel; no n8n node is claimed. larkfield.example is invented. Prices typed from src/content/prices.ts on 23 Nov 2026 (inbox $0.50 a month); update if it changes. No dashes. */

const N8N_AGENT = 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/'
const N8N_WEBHOOK = 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/'
const N8N_GMAIL = 'https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.gmailtrigger/'
const N8N_WORKFLOW_TOOL = 'https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolworkflow/'

export const post: BlogPost = {
  slug: 'n8n-email-agent',
  title: 'How to build an n8n email agent: triage and reply template, step by step',
  dek: 'An n8n email agent reads each incoming email, decides what it is and replies or hands it on. Here is the template, node by node, and where an agent needs an inbox of its own.',
  metaTitle: 'n8n email agent: triage and reply template, step by step',
  description:
    'Build an n8n email agent that triages and replies to mail: the trigger, the AI Agent node, its tools and a template, plus when it needs its own inbox.',
  answer:
    'An n8n email agent is a workflow that starts when an email arrives, passes it to the AI Agent node with a chat model and tools, and sends or drafts the reply. Start from the Gmail Trigger for your own mailbox. When the agent should have an address of its own, Obsession gives it an inbox in one call and delivers each new email to an n8n Webhook node.',
  primaryKeyword: 'n8n email agent',
  keywords: ['n8n email agent', 'n8n email agent template', 'n8n email triage agent', 'n8n email reply agent'],
  category: 'Build agent products',
  order: 5,
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 9,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'flow',
      title: 'An n8n email agent, start to finish',
      steps: [
        { label: 'Email arrives', detail: 'A trigger starts the workflow', tone: 'info' },
        { label: 'Agent triages it', detail: 'Chat model and tools decide', tone: 'info' },
        { label: 'Tools fetch facts', detail: 'Order lookup, help pages', tone: 'ok' },
        { label: 'Reply goes out', detail: 'Sent, or drafted for a person', tone: 'ok' },
      ],
      foot: 'The same 4 steps whether the mail comes from your Gmail or from an inbox the agent owns.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An email agent in n8n is a workflow with 4 jobs. It notices a new email and works out what it asks. It looks up what the answer needs, then replies or passes the email to a person. n8n suits this because each job is a node you connect on a canvas, and the language model sits in the middle as one of them. Most builds fail for a plain reason: the mailbox they read belongs to a person.',
    },
    { kind: 'p', text: 'The parts, in the order a workflow runs them:' },
    {
      kind: 'list',
      items: [
        '**Trigger:** the node that starts a run when mail arrives.',
        '**AI Agent node:** the model and its tools, which reads the email and decides what to do.',
        '**Tools:** what the agent can look up or do while it works, such as fetching an order or running another workflow.',
        '**Reply step:** a node that sends the answer, or saves a draft for a person to approve.',
      ],
    },

    { kind: 'h2', id: 'trigger', text: 'The trigger: how the email reaches n8n' },
    {
      kind: 'p',
      text: 'There are 2 common ways in. The first is a mail trigger. As [n8n documents the Gmail Trigger](' +
        N8N_GMAIL +
        '), it checks Gmail on a schedule you set with Poll Times, fetches up to 10 emails a poll by default (50 at most), and offers filters: labels, a Gmail search such as from:, read status (unread by default) and sender. Its one event is Message Received. That suits an agent that helps with your own inbox.',
    },
    {
      kind: 'p',
      text: 'The second is a [webhook](/glossary/webhook), a web address in n8n that another service calls the moment something happens. [n8n’s Webhook node](' +
        N8N_WEBHOOK +
        ') starts a workflow from an incoming request. It gives a test address while you build and a production address once the workflow is published. It supports basic, header and JWT authentication, an IP allowlist, and 4 ways to respond, including after the last node finishes. A webhook reacts when the email lands, with no wait for the next poll.',
    },

    { kind: 'h2', id: 'agent-node', text: 'The AI Agent node and its tools' },
    {
      kind: 'p',
      text: '[The AI Agent node](' +
        N8N_AGENT +
        ') builds an agent from a chat model and one or more tools: the agent decides which tool to call to finish the task. n8n’s page says you must connect at least one tool sub-node, and that since version 1.82.0 every AI Agent node works as a Tools Agent. A tool is a node attached to the agent, not a step in the line, so the agent chooses when to use it.',
    },
    {
      kind: 'p',
      text: 'The tool that matters most for email is [the Call n8n Workflow Tool](' +
        N8N_WORKFLOW_TOOL +
        '), which lets the agent run another workflow and read its output. Keep each skill in its own small workflow, such as “find this customer’s last order” or “fetch the refund policy”, and give each a clear description so the agent knows when to call it. In production the called workflow must be published, or n8n returns “Workflow is not active and cannot be executed” to the agent.',
    },

    { kind: 'h2', id: 'template', text: 'A triage and reply template' },
    {
      kind: 'p',
      text: 'A triage agent sorts mail before it answers. This layout works for support, bookings and sales enquiries, and every step is a node you place yourself:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Start:** the Gmail Trigger on a label, or a Webhook node for mail that arrives as an event.',
        '**Clean:** keep the sender, subject, the new text of the message and the thread, so the model reads less quoted history.',
        '**Triage:** the AI Agent node, with a system message that names the categories (question, complaint, booking, spam, other) and the rule for each: answer it, draft it, or pass it to a person.',
        '**Look up:** tool sub-nodes for the facts a reply needs, one workflow each.',
        '**Branch:** an If or Switch node on the agent’s output. Easy questions go to the reply step, sensitive ones go to a person in Slack with the agent’s draft.',
        '**Reply:** the step that sends or drafts the answer in the same thread.',
        '**Record:** write the email, the category and the reply to a sheet or table, so you can read a week of decisions.',
      ],
    },
    {
      kind: 'p',
      text: 'Start with draft only. Read 50 drafts, correct the system message, and let the agent send on its own only for the categories it gets right every time. Triage is where the agent saves the most time, because most inboxes are mostly the same few questions.',
    },

    { kind: 'h2', id: 'own-inbox', text: 'When the agent needs an inbox of its own' },
    {
      kind: 'p',
      text: 'Reading your own Gmail is fine for a helper that works for you. It stops being right in 3 cases:',
    },
    {
      kind: 'list',
      items: [
        '**The agent is a separate worker:** a booking agent or support agent should send from its own address, so replies reach it and your personal mail stays yours.',
        '**You run many agents:** 1 address per agent, user or task keeps their mail apart.',
        '**The agent signs up to services:** it needs an address of its own for confirmation links and codes, and a phone number when a site texts one.',
      ],
    },
    {
      kind: 'p',
      text: 'An inbox API creates the address in code. [The best email API for AI agents](/blog/best-email-api-for-ai-agents) compares 7, and [the guide to email servers for the Model Context Protocol (MCP)](/blog/mcp-server-email) covers the tool route. If you would rather connect an agent to tools than build the plumbing yourself, [AI agent tools versus MCP](/blog/ai-agent-tools-vs-mcp) explains the difference.',
    },

    { kind: 'h2', id: 'one-identity', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: phone numbers, inboxes, browsers and sandboxes on one API and one bill. For an n8n email agent, 3 parts matter.',
    },
    {
      kind: 'list',
      items: [
        '**The inbox.** [Obsession’s email API](/email) gives an agent its own address in one call. It sends and receives, keeps every thread and attachment, and reads verification codes and confirmation links out of each email. An inbox is $0.50 a month.',
        '**The webhook into n8n.** Each new email reaches you as an email.received event, delivered by signed webhook, and [the developers page](/developers) lists “Zapier, Make and n8n” among the ways events arrive: each event starts a Zap, scenario or workflow. Point the Webhook node’s production address at your Obsession webhook and the workflow runs when the email lands, not on the next poll. If your server is down, events retry for 27 hours and any event can be replayed.',
        '**The event log.** Every email, text and page the agent touches is saved in one event log, dated, so you can see what it did and why.',
      ],
    },
    {
      kind: 'p',
      text: 'A persona puts the inbox, a US or UK number and a browser that keeps its logins under one identity, and costs nothing while it waits. That matters when the email is only half the job: a workflow that signs an agent up to a supplier portal gets the confirmation link by email and the 6-digit code by text, at the same agent. The usual way is 4 vendors, each with its own key, bill and webhook, so a code can arrive in one place while the browser waits in another. If your agent needs only email, one specialist is enough. [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) sets the 2 side by side.',
    },
    {
      kind: 'p',
      text: 'No code is the other way in. Pick a blueprint such as the [Inbox agent](/blueprints/inbox-agent), which answers every email on its own address from your help pages and rules, or describe the job in your own words and Obsession sets it up. Once an agent has its own address, number and browser, the same identity can also chase unpaid invoices, confirm bookings by text or check a competitor’s sign-up, whether you run one agent or ten thousand.',
    },
    {
      kind: 'cta',
      text: 'Give each n8n agent an inbox of its own, and let every email start your workflow. Free plan, no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about n8n email agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I build an email agent in n8n?',
          a: 'Start a workflow with a mail trigger or a Webhook node, pass the email to an AI Agent node with a chat model and at least one tool, then add a step that sends or drafts the reply. Begin with drafts a person approves, and let the agent send alone only for the kinds of email it handles well.',
        },
        {
          q: 'Is there an n8n email agent template?',
          a: 'Build one in 7 steps: trigger, clean the text, triage in the AI Agent node, look up facts with tool workflows, branch on the result, reply or draft, and record the decision. It suits support, bookings and sales enquiries.',
        },
        {
          q: 'How does an n8n email triage agent decide what to do?',
          a: 'Through the AI Agent node’s system message. It names the categories and the rule for each, such as answer, draft for a person or ignore. A Switch node then routes the email by the agent’s answer, so the agent never sends where a rule says a person should.',
        },
        {
          q: 'Does an n8n email reply agent need its own email address?',
          a: 'Not for a helper on your own mailbox. It does when the agent is a separate worker, when you run many agents, or when it signs up to services and must receive confirmation links. An inbox API creates the address in code.',
          link: { label: 'Email API for AI agents', to: '/email' },
        },
        {
          q: 'Should I poll Gmail or use a webhook in n8n?',
          a: 'Polling is simplest for your own mailbox: n8n’s Gmail Trigger checks on a schedule you choose. A webhook reacts the moment the email lands, which suits agents with their own inbox. Both start the same workflow.',
        },
        {
          q: 'Does Obsession have an n8n node?',
          a: 'Obsession lists n8n among the ways events arrive: each event starts a workflow, and you point n8n’s Webhook node at it. Use that route, and read the developers page for the events and their names.',
          link: { label: 'See the API and MCP', to: '/developers' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every line about n8n comes from its own documentation pages for the AI Agent node, the Webhook node, the Gmail Trigger and the Call n8n Workflow Tool, read on 23 November 2026. We did not run this workflow in n8n. The examples are invented.',
    },
  ],

  sources: [
    { title: 'AI Agent node', publisher: 'n8n documentation', url: N8N_AGENT },
    { title: 'Webhook node', publisher: 'n8n documentation', url: N8N_WEBHOOK },
    { title: 'Gmail Trigger node', publisher: 'n8n documentation', url: N8N_GMAIL },
    { title: 'Call n8n Workflow Tool', publisher: 'n8n documentation', url: N8N_WORKFLOW_TOOL },
  ],

  related: [
    '/email',
    'best-email-api-for-ai-agents',
    'mcp-server-email',
    'ai-agent-tools-vs-mcp',
    '/blueprints/inbox-agent',
    '/developers',
  ],
}

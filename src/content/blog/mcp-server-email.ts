import type { BlogPost } from './types'

/* Wave 2, batch B (_research/seo/wave2-pull-23nov/PLAN.md, page 14). Primary "mcp server email"; secondaries "mcp server
   send email" and "mcp email server" (Google suggestions, US and UK, 23 Nov 2026, autocomplete_23nov.json, which also
   suggests "mcp email server github", "mcp server outlook email", "gmail mcp server send email", "whisper/mcp-email-server"
   and "ai zerolab mcp email server"). Page one is GitHub repositories of single-purpose servers. Readers: developers
   choosing an email MCP server for an agent. Spine: the options guide: what an email MCP server does, mailbox servers,
   sending servers, one server for an inbox, a number and a browser, the options compared, how to choose, safety, FAQ,
   note and sources.
   Read on 23 Nov 2026, each on its own page (facts and quotes in research/mcp-server-email.json): the MCP introduction;
   Claude Code's MCP docs; Google's Gmail MCP server guide (Developer Preview, tools, no send tool, the prompt injection
   warning); the GitHub repositories and READMEs of taylorwilsdon/google_workspace_mcp (MIT, 120+ tools, tiers, read-only),
   GongRzhe/Gmail-MCP-Server (MIT, archived, last push 6 Aug 2025), Softeria/ms-365-mcp-server (MIT, Graph, read-only),
   Wh1isper/mcp-email-server (BSD-3-Clause, IMAP and SMTP; ai-zerolab/mcp-email-server redirects to it) with its tools page,
   resend/resend-mcp (MIT, hosted and local; resend/mcp-send-email redirects to it), mailgun/mailgun-mcp-server
   (Apache-2.0, local only, no deletes) and ActiveCampaign/postmark-mcp (MIT, 24 tools, annotations). Sending services'
   own plan prices were not read, so the table says each provider's plan prices. Obsession's tools, events and prices are
   the site's own (pages/developers.ts, prices.ts as of 23 Nov 2026). No agent inbox competitor is named.
   northpine.example and supplier.example are invented. British English, no dashes. */

const MCP_INTRO = 'https://modelcontextprotocol.io/docs/getting-started/intro'
const CLAUDE_MCP = 'https://code.claude.com/docs/en/mcp'
const GOOGLE_GMAIL_MCP = 'https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server'
const WORKSPACE_MCP = 'https://github.com/taylorwilsdon/google_workspace_mcp'
const GMAIL_AUTOAUTH = 'https://github.com/GongRzhe/Gmail-MCP-Server'
const MS365_MCP = 'https://github.com/Softeria/ms-365-mcp-server'
const IMAP_MCP = 'https://github.com/Wh1isper/mcp-email-server'
const IMAP_TOOLS = 'https://mcp-email-server.wh1isper.top/tools/'
const RESEND_MCP = 'https://github.com/resend/resend-mcp'
const MAILGUN_MCP = 'https://github.com/mailgun/mailgun-mcp-server'
const POSTMARK_MCP = 'https://github.com/ActiveCampaign/postmark-mcp'

export const post: BlogPost = {
  slug: 'mcp-server-email',
  title: 'MCP server email: the open source and hosted servers to read, send and receive',
  dek: 'Mailbox servers cover Gmail, Outlook and IMAP, and delivery services publish servers that send. One server gives an agent an inbox, a number and a browser of its own. Each is described from its own repository or docs as read on 23 November 2026.',
  metaTitle: 'MCP server email: Gmail, Outlook and IMAP, for developers',
  description:
    'MCP server email compared: Gmail, Outlook, IMAP and send servers from their repos, plus one MCP server for an agent’s own inbox, number and browser.',
  answer:
    'An MCP server for email gives an AI agent tools to read, search, draft or send mail. Open source servers each connect one service: Gmail, Outlook, any IMAP mailbox, or a sending service such as Resend, Mailgun or Postmark. Obsession’s MCP server gives the agent an inbox of its own, with a phone number and a browser on the same key, and every email it receives lands in one event log.',
  primaryKeyword: 'mcp server email',
  keywords: ['mcp server send email', 'mcp email server'],
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
      title: 'One MCP server, three pieces',
      who: 'A buying agent at northpine.example, over MCP',
      rows: [
        { time: 'Call 1', text: 'inboxes.create', detail: 'ada@northpine.example, sends and receives', tone: 'ok' },
        { time: 'Call 2', text: 'numbers.create', detail: '+1 202 555 0147, texts and calls', tone: 'ok' },
        { time: 'Call 3', text: 'browsers.create', detail: 'Signs up at supplier.example', tone: 'info' },
        { time: 'Event', text: 'email.received', detail: '“Confirm your email”, link read out', tone: 'ok' },
        { time: 'Event', text: 'sms.received', detail: '“Your code is 604118”', tone: 'ok' },
        { time: 'Call 4', text: 'events.list', detail: 'Every email, text and page, in order', tone: 'info' },
      ],
      foot: 'Example: each call is a tool the agent sees over MCP. northpine.example and supplier.example are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Developers looking for an MCP server for email choose between three kinds. Mailbox servers connect an agent to an account a person already owns, in Gmail, Outlook or any IMAP mailbox. Sending servers connect it to a delivery service such as Resend, Mailgun or Postmark, and an agent inbox server gives it an address of its own. Each server is described from its own repository or docs as read on 23 November 2026.',
    },

    { kind: 'h2', id: 'what-it-does', text: 'What an email MCP server does' },
    {
      kind: 'p',
      text:
        '[MCP](/glossary/model-context-protocol), the Model Context Protocol, is how an AI application calls tools that live outside it. [The MCP project](' +
        MCP_INTRO +
        ') calls it an open-source standard for connecting AI applications to external systems, and names Claude, ChatGPT, Visual Studio Code and Cursor among the applications that support it. An email server publishes tools such as search, read, draft and send, and the agent calls one whenever a task needs it. [AI agent tools vs MCP](/blog/ai-agent-tools-vs-mcp) covers when a server beats a tool written into your own code.',
    },
    {
      kind: 'p',
      text:
        'A server runs one of two ways. A local server starts on your machine and talks to the client over stdio, its standard input and output. A remote server runs at a web address and usually signs you in with OAuth, the sign-in that grants access without sharing a password. [Claude Code’s MCP docs](' +
        CLAUDE_MCP +
        ') add a local server with claude mcp add, a name, a double dash and the command that starts it. A remote one takes claude mcp add --transport http and its address.',
    },

    { kind: 'h2', id: 'mailbox', text: 'Servers for your own mailbox' },
    {
      kind: 'p',
      text: 'Mailbox servers connect the agent to a mailbox a person already has, with that person’s access.',
    },
    {
      kind: 'list',
      items: [
        '**[Google’s Gmail MCP server](' +
          GOOGLE_GMAIL_MCP +
          ').** Google’s own remote server, in Developer Preview, signed in with OAuth. Its tools search and read threads and messages, apply and remove labels, and create and list drafts. It has no send tool, so a person sends the drafts it writes from Gmail.',
        '**[Google Workspace MCP](' +
          WORKSPACE_MCP +
          ').** An open source server under the MIT licence, with more than 120 tools across Gmail and 11 other Google Workspace services. Tool tiers and a read-only mode keep the agent to the tools a job needs, and it runs over stdio or Streamable HTTP.',
        '**[Gmail AutoAuth MCP Server](' +
          GMAIL_AUTOAUTH +
          ').** An MIT-licensed server that sends with attachments, reads, searches, manages labels and runs batch changes. It needs a Google Cloud project and an OAuth setup first. Its repository is archived on GitHub and was last updated in August 2025, so it suits reading the code or starting a fork.',
        '**[ms-365-mcp-server](' +
          MS365_MCP +
          ').** An MIT-licensed server for Outlook and the rest of Microsoft 365, through the Microsoft Graph API. It offers a read-only mode and tool filters, and its README adds it to Claude Code with claude mcp add ms365 and the npx command that starts it.',
        '**[mcp-email-server](' +
          IMAP_MCP +
          ').** A BSD-licensed server that reads, searches, organises and sends email over IMAP and SMTP. It works with any mailbox those protocols reach, on Windows, macOS and Linux. It holds several accounts at once, and its [tool list](' +
          IMAP_TOOLS +
          ') replies by passing the original message to send_email with threading headers. Its earlier address, ai-zerolab’s mcp-email-server, now leads to it.',
      ],
    },

    { kind: 'h2', id: 'send', text: 'MCP servers that send email' },
    {
      kind: 'p',
      text: 'Delivery services publish their own servers, so an agent sends through the account an app already uses.',
    },
    {
      kind: 'list',
      items: [
        '**[Resend’s MCP server](' +
          RESEND_MCP +
          ').** Resend hosts it, so Claude Code adds it with claude mcp add --transport http and signs in through /mcp, and a local npm package runs on your own machine. Beyond sending, it lists and reads received email and manages inboxes with threads, replies and drafts, alongside templates, contacts, broadcasts and domains.',
        '**[Mailgun’s MCP server](' +
          MAILGUN_MCP +
          ').** It runs locally over stdio, since Mailgun offers no hosted version. Its tools send email, read stored messages, manage inbound routes and webhooks, validate addresses and report on deliverability. It exposes no delete operations.',
        '**[Postmark’s MCP server](' +
          POSTMARK_MCP +
          ').** ActiveCampaign’s official server has 24 tools for sending, templates, message search, bounces, suppressions and webhooks. Each tool is marked as read-only or destructive, so a client can approve reads automatically and ask before anything that changes the account.',
      ],
    },

    { kind: 'h2', id: 'one-server', text: 'One MCP server for an inbox, a number and a browser' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: inboxes, phone numbers, browsers and sandboxes on one API and one bill. Its [MCP server](/developers) gives an agent an address of its own, so the mailbox belongs to the agent and every email it receives lands in one event log. Claude Code connects with claude mcp add obsession, and Cursor, Codex and other MCP clients add the same server in their settings.',
    },
    {
      kind: 'list',
      items: [
        '**inboxes.create** gives the agent an inbox that sends and receives, with threads and attachments kept.',
        '**inbox.send** sends from it, and **events.list** reads every email.received event, with codes and confirm links read out of each email.',
        '**numbers.create** and **number.sms** give it a phone number for texts and calls, such as the code a site sends after the email one.',
        '**browsers.create** opens a cloud browser that keeps its logins, and **sandbox.run** runs code on a file that arrives.',
        '**events.subscribe** tells your server about each new event as it lands, and **blueprints.run** starts a ready-made job beside the pieces.',
      ],
    },
    {
      kind: 'p',
      text: 'The call obsession.personas.create({ inbox: true, phone: "US", browser: true }) puts all three under one identity, called a [persona](/personas). A persona is free while it waits. An inbox is $0.50 a month and email $0.40 per 1,000, with 3 inboxes on the Free plan. [Email for Claude Code](/blog/email-for-claude-code) walks through it step by step, and [why AI agents need their own inbox, phone number and browser](/blog/why-ai-customers-matter) sets out what each piece is for.',
    },
    {
      kind: 'cta',
      text: 'One MCP server for every piece an agent needs: inboxes, numbers, browsers and sandboxes on one key, with every event in one log. The Free plan includes 3 inboxes and a number, with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'compared', text: 'Email MCP servers, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Email MCP servers, from each repository and provider’s own pages, as listed on 23 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Google’s Gmail MCP server', 'Google’s own hosted server: threads, labels and drafts', 'Free, in Developer Preview', 'No send tool; a person sends the drafts', 'Reading and drafting in Gmail'],
        ['Google Workspace MCP: open source', '120+ tools across Gmail and 11 other services; read-only mode', 'Free, MIT; you host it', 'Your own Google accounts; you set up OAuth', 'Teams on Google Workspace'],
        ['Gmail AutoAuth MCP Server: open source', 'Sends with attachments; labels and batch changes', 'Free, MIT', 'Archived on GitHub; last updated August 2025', 'Reading the code or a fork'],
        ['ms-365-mcp-server: open source', 'Outlook and Microsoft 365 through Graph; read-only mode', 'Free, MIT; you host it', 'Your own Microsoft accounts', 'Teams that work in Outlook'],
        ['mcp-email-server: open source', 'Any mailbox over IMAP and SMTP; several accounts', 'Free, BSD; you host it', 'An existing mailbox and its login; no reply tool', 'Mailboxes outside Gmail and Outlook'],
        ['Resend MCP server', 'Hosted with OAuth; send, received email, inboxes with threads', 'Server free, MIT; email at Resend’s plan prices', 'Email only', 'Apps that already send through Resend'],
        ['Mailgun MCP server', 'Send, inbound routes and deliverability; no delete tools', 'Server free, Apache 2.0; email at Mailgun’s plan prices', 'Local only; email only', 'Sending and deliverability on Mailgun'],
        ['Postmark MCP server', '24 tools; each marked read-only or destructive', 'Server free, MIT; email at Postmark’s plan prices', 'Transactional email only', 'Apps that already send through Postmark'],
        [
          'Obsession (ours): [Email](/email), [Phone](/phone), [Browser](/browser) and [Personas](/personas) over MCP',
          'An inbox of its own in one call, plus a number, a browser and a sandbox\nEvery email in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment and at any identity check',
          'Agents that need their own address and number',
        ],
      ],
    },

    { kind: 'h2', id: 'choose', text: 'How to choose an email MCP server' },
    {
      kind: 'list',
      items: [
        '**Whose mailbox it is.** A person’s own Gmail or Outlook calls for a mailbox server. An agent, a test or a product feature needs an address of its own.',
        '**Receiving as well as sending.** Delivery services lead on sending. A reply that wakes the agent needs inbound mail and a way to hear about it, such as a webhook, an address in your app that receives each new event.',
        '**Local or hosted.** A local server keeps credentials on your machine. A hosted one needs nothing installed and works from web clients such as claude.ai.',
        '**What it can change.** Read-only modes, Mailgun’s missing delete tools and Postmark’s marked tools limit what one bad instruction can do.',
        '**One piece or several.** An agent that will also need a number for text codes or a browser that stays signed in saves two more accounts with one server for all of them.',
      ],
    },
    {
      kind: 'p',
      text: 'To call the same tools from code, [a LangChain email agent](/blog/langchain-email-agent) wraps the inbox and the number as LangChain tools and wakes the agent on each reply.',
    },

    { kind: 'h2', id: 'safety', text: 'Check these before you connect one' },
    {
      kind: 'p',
      text:
        'An email server hands the model text that strangers wrote. [Claude Code’s MCP docs](' +
        CLAUDE_MCP +
        ') ask you to trust each server before you connect it, since servers that fetch outside content expose you to prompt injection. Google’s Gmail MCP guide gives the same warning and advises reviewing every action the AI takes. Give each server the narrowest access the job needs, keep sending behind a person’s approval, and keep an agent’s test inbox apart from any mailbox that holds customers’ mail.',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about MCP servers for email' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is an MCP server for email?',
          a: 'A server that gives an AI agent email tools through the Model Context Protocol, such as search, read, draft and send. The agent calls a tool when a task needs it, and the server does the work in the mailbox or delivery service it connects to.',
        },
        {
          q: 'Which MCP servers can send email?',
          a: 'From a mailbox, Google Workspace MCP, Gmail AutoAuth, ms-365-mcp-server and mcp-email-server can send. Resend, Mailgun and Postmark send through their own services. Google’s own Gmail server creates drafts for a person to send, and Obsession sends from the agent’s own inbox.',
        },
        {
          q: 'Is there an official Gmail MCP server?',
          a: 'Yes. Google runs a remote Gmail MCP server in Developer Preview, signed in with OAuth. It searches and reads threads, manages labels and creates drafts, and it has no send tool.',
        },
        {
          q: 'Can an MCP email server receive email?',
          a: 'Mailbox servers read whatever reaches the mailbox they connect to, and Resend’s server lists received email. On Obsession, events.list returns every email.received event, and events.subscribe tells your server about each one as it lands.',
          link: { label: 'Email for AI agents', to: '/email' },
        },
        {
          q: 'How do I add an email MCP server to Claude Code?',
          a: 'Run claude mcp add with a name, then either --transport http and the server’s address, or a double dash and the command that starts a local server. Type /mcp inside Claude Code to check it and sign in. For Obsession, the command is claude mcp add obsession.',
        },
        {
          q: 'Is it safe to connect an email MCP server?',
          a: 'Yes, with limits. Trust each server before you connect it, give it the narrowest access the job needs, and keep sending behind a person’s approval, since any email can carry instructions written for the model.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'Every server is described from its own repository, README or docs as they stood on 23 November 2026, including its licence and whether it is archived. Open source servers change often, so check the repository before you install one. Sending services bill email at their own plan prices, which change too. northpine.example and supplier.example in the illustration are invented.',
    },
  ],

  sources: [
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: MCP_INTRO },
    { title: 'Connect Claude Code to tools via MCP', publisher: 'Anthropic (Claude Code docs)', url: CLAUDE_MCP },
    { title: 'Configure the Gmail MCP server', publisher: 'Google for Developers', url: GOOGLE_GMAIL_MCP },
    { title: 'google_workspace_mcp', publisher: 'GitHub (taylorwilsdon)', url: WORKSPACE_MCP },
    { title: 'Gmail-MCP-Server', publisher: 'GitHub (GongRzhe)', url: GMAIL_AUTOAUTH },
    { title: 'ms-365-mcp-server', publisher: 'GitHub (Softeria)', url: MS365_MCP },
    { title: 'mcp-email-server', publisher: 'GitHub (Wh1isper)', url: IMAP_MCP },
    { title: 'MCP Tools', publisher: 'mcp-email-server docs', url: IMAP_TOOLS },
    { title: 'resend-mcp', publisher: 'GitHub (Resend)', url: RESEND_MCP },
    { title: 'mailgun-mcp-server', publisher: 'GitHub (Mailgun)', url: MAILGUN_MCP },
    { title: 'postmark-mcp', publisher: 'GitHub (ActiveCampaign)', url: POSTMARK_MCP },
  ],

  related: ['/email', '/developers', '/personas', 'email-for-claude-code', 'langchain-email-agent', 'ai-agent-tools-vs-mcp', 'recipe:inbox-agent'],
}

import type { BlogPost } from './types'

/* Wave 2, batch B (_research/seo/wave2-pull-23nov/PLAN.md, page 13). Primary "email for claude code"; secondaries
   "email skill claude code" and "email triage claude code" (Google suggestions, US and UK, 23 Nov 2026,
   autocomplete_23nov.json). Readers: developers who use Claude Code and want it to handle email. Spine: the how-to
   guide: what email in Claude Code runs on (MCP), an inbox of its own in five steps with a pass for each, triage, an
   email skill, the user's own Gmail or Outlook, the options compared, when a personal mailbox is enough, safety, FAQ,
   note and sources.
   Read on 23 Nov 2026, each on its own page (facts and quotes in research/email-for-claude-code.json): Claude Code's MCP
   docs (claude mcp add forms, scopes, /mcp, claude.ai connectors, the Gmail and Microsoft 365 connectors set up on
   claude.ai, the prompt injection warning, the 10,000 and 25,000 token output limits); Claude Code's skills docs
   (SKILL.md paths, descriptions loaded first, the Agent Skills standard); Anthropic's Gmail help centre article (send
   with approval) and its Gmail connector guide (read-only), both cited because they differ; Anthropic's Microsoft 365
   connector guide; Google's Gmail MCP server guide (Developer Preview, no send tool); two community triage skills on
   skills.sh; the MCP introduction. Obsession's calls, events and prices are the site's own (pages/developers.ts,
   pieces/email.ts, prices.ts as of 23 Nov 2026: inbox $0.50 a month, Free includes 3 inboxes, plans $20, $99 and $499).
   No agent inbox competitor is named. larkfield.example is invented. British English, no dashes. */

const CLAUDE_MCP = 'https://code.claude.com/docs/en/mcp'
const MCP_INTRO = 'https://modelcontextprotocol.io/docs/getting-started/intro'
const CLAUDE_SKILLS = 'https://code.claude.com/docs/en/skills'
const SKILL_GMAIL = 'https://skills.sh/maroffo/claude-forge/inbox-triage'
const SKILL_BUCKETS = 'https://www.skills.sh/borghei/claude-skills/email-triage'
const M365 = 'https://claude.com/docs/connectors/microsoft/365'
const GMAIL_HELP = 'https://support.claude.com/en/articles/10166901-use-google-workspace-connectors'
const GMAIL_DOC = 'https://claude.com/docs/connectors/google/gmail'
const GOOGLE_GMAIL_MCP = 'https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server'

export const post: BlogPost = {
  slug: 'email-for-claude-code',
  title: 'Email for Claude Code: give it an inbox of its own, then triage and reply',
  dek: 'One command connects the inbox, and every email it receives waits in your event log between sessions. The other routes, from your own Gmail to a triage skill, are described from their providers’ pages as read on 23 November 2026.',
  metaTitle: 'Email for Claude Code: an inbox of its own, for developers',
  description:
    'Email for Claude Code: give it its own inbox with claude mcp add obsession, then read, triage and reply to every email, each one kept in your event log.',
  answer:
    'To give Claude Code email, connect an MCP server that holds an inbox. Run claude mcp add obsession, and Claude Code can create an address of its own, send from it and read every email that arrives, each one kept in your event log between sessions. To work in your own Gmail or Outlook instead, connect Anthropic’s Gmail or Microsoft 365 connector on claude.ai.',
  primaryKeyword: 'email for claude code',
  keywords: ['email skill claude code', 'email triage claude code'],
  category: 'Build agent products',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 10,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'Claude Code triages its own inbox',
      who: 'support-bot@larkfield.example, read over MCP',
      rows: [
        { time: '09:00', text: 'Calls events.list', detail: '14 new emails since yesterday’s session', tone: 'info' },
        { time: '09:00', text: 'Reply now: 3', detail: 'Order questions the help pages answer', tone: 'ok' },
        { time: '09:01', text: 'Needs a person: 2', detail: 'A $240 refund and a contract question', tone: 'late' },
        { time: '09:01', text: 'No reply needed: 9', detail: 'Receipts, newsletters and sign-in codes', tone: 'info' },
        { time: '09:04', text: 'Calls inbox.send 3 times', detail: 'Each reply sent after a yes in the terminal', tone: 'ok' },
      ],
      foot: 'Example: Claude Code sorts the night’s mail and replies only after approval. larkfield.example is invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Developers can give Claude Code email in two ways: an inbox of its own, or a connection to their own Gmail or Outlook. An inbox of its own suits an agent you are building, a shared support address or the sign-up tests in your app, and one command adds it, claude mcp add obsession. Both routes run on [MCP](/glossary/model-context-protocol), the Model Context Protocol, which is how Claude Code calls tools outside your code.',
    },

    { kind: 'h2', id: 'how-it-works', text: 'How Claude Code reaches email' },
    {
      kind: 'p',
      text:
        'Claude Code reads and acts through tools. An MCP server publishes a set of them, such as create an inbox, send an email or list new mail, and Claude Code calls each one when a task needs it. [The MCP project](' +
        MCP_INTRO +
        ') calls the protocol an open-source standard for connecting AI applications to external systems and compares it to a USB-C port. The same server works in Claude, ChatGPT, Cursor and Visual Studio Code. [AI agent tools vs MCP](/blog/ai-agent-tools-vs-mcp) sets out how tools, servers and skills fit together.',
    },
    {
      kind: 'p',
      text:
        '[Claude Code’s MCP docs](' +
        CLAUDE_MCP +
        ') give two forms of the add command. A remote server takes claude mcp add --transport http with a name and its address. A local server takes claude mcp add with a name, then a double dash and the command that starts it. The --scope flag sets where the server loads. The default, local, covers the current project. Project shares it with your team through a .mcp.json file, and user loads it in every project on your machine. Typing /mcp inside Claude Code shows each server’s status and signs you in to any that use OAuth, the sign-in that grants access without sharing your password.',
    },

    { kind: 'h2', id: 'own-inbox', text: 'Give Claude Code an inbox of its own' },
    {
      kind: 'p',
      text: 'An inbox of its own keeps Claude Code out of your personal mail and gives each job a fresh address. Obsession is the toolkit for AI agents: inboxes, phone numbers, browsers and sandboxes on one API and one bill. Its [MCP server](/developers) hands Claude Code the same calls as tools. Each step ends with what a pass looks like.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Connect the server.** Run claude mcp add obsession in your terminal, then type /mcp inside Claude Code. Add --scope user to load it in every project. **Pass:** obsession shows as connected, with tools such as inboxes.create, inbox.send, events.list and events.subscribe.',
        '**Create the inbox.** Ask Claude Code for an inbox for the job, such as “Create an inbox for the sign-up tests”. It calls inboxes.create, which returns an address that sends and receives. **Pass:** a new address comes back in the session.',
        '**Send from it.** Ask Claude Code to email an address you control. It calls inbox.send with the recipient, a subject and the text. **Pass:** the email reaches your own mailbox from the agent’s address.',
        '**Read what comes back.** Reply to that email from your own mailbox, then ask Claude Code what arrived. It calls events.list, which returns each email.received event with its sender, subject and thread. Verification codes and confirm links are read out of each email, so a sign-up test carries on without you. **Pass:** your reply is listed in the same thread as the first email.',
        '**Catch mail between sessions.** Claude Code works while a session is open, and the inbox keeps receiving after it closes. Every email waits in your event log, so the next session reads everything since the last one with events.list. For replies that need an answer within seconds, subscribe your server with events.subscribe, or run a handler on Obsession’s runtime, which starts about 50 ms after an email lands. **Pass:** an email sent while Claude Code was closed is listed when it next starts.',
      ],
    },
    {
      kind: 'p',
      text: 'The same server gives Claude Code a phone number with numbers.create, for sites that send a text code after the email one, and a browser that stays signed in with browsers.create. The call obsession.personas.create({ inbox: true, phone: "US", browser: true }) puts all three under one identity, a [persona](/personas), free while it waits. [Long running AI agents](/blog/long-running-ai-agents) covers the jobs where a reply takes days to arrive.',
    },
    {
      kind: 'cta',
      text: 'Give Claude Code an inbox of its own with claude mcp add obsession, then add a number, a browser or a sandbox on the same key. The Free plan includes 3 inboxes, a number, 10 browser hours and 10 sandbox hours, with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'triage', text: 'Email triage in Claude Code' },
    {
      kind: 'p',
      text: 'Triage means sorting new mail by what each email needs, then acting on each group. In Claude Code it runs as one request, such as “Triage the support inbox”, in four steps:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Claude Code reads every new email.received event since the last run.',
        'It sorts each email into a group you name, such as reply now, needs a person and no reply needed.',
        'It drafts a reply to each email in the reply now group, from your help pages or the notes you point it at.',
        'It sends each draft with inbox.send once you approve it, and lists the emails that need a person, each with the reason.',
      ],
    },
    {
      kind: 'p',
      text: 'Keep sending behind your approval. Leave inbox.send out of the tools Claude Code may use without asking, so each send waits for your yes in the terminal. Route refunds, legal questions and first emails to new contacts to a person. Claude Code shows a warning when one tool result passes 10,000 tokens and caps results at 25,000 by default. On a busy inbox, ask for new mail in pages, such as the latest 20 emails.',
    },
    {
      kind: 'p',
      text: 'For an inbox that answers mail around the clock with no terminal open, the [Inbox agent blueprint](/blueprints/inbox-agent) runs the same job on its own address. It answers from your help pages and hands anything it shouldn’t answer to a person in Slack, with a draft.',
    },

    { kind: 'h2', id: 'skill', text: 'An email skill for Claude Code' },
    {
      kind: 'p',
      text:
        'A skill keeps your triage rules in one file, so every run sorts mail the same way. [Claude Code’s skills docs](' +
        CLAUDE_SKILLS +
        ') describe a SKILL.md file of instructions, kept in ~/.claude/skills for every project or in .claude/skills inside one repository, where you commit it so your team gets it too. Claude Code loads each skill’s description at the start of a session and its full instructions only when a task calls for them. Skills follow the Agent Skills open standard, so the same file works in other AI tools.',
    },
    {
      kind: 'p',
      text:
        'An email triage skill names the groups, what makes an email urgent, the tone of replies and what never goes out without a person. It holds rules, and it reads mail through a tool. Community skills on skills.sh take either route. [One sorts unread Gmail](' +
        SKILL_GMAIL +
        ') into priority levels P1 to P4 through a command-line Gmail tool. [Another sorts the subjects and senders you paste in](' +
        SKILL_BUCKETS +
        ') into action groups. Paired with an MCP server that holds the inbox, a skill turns “triage the inbox” into the same steps on every run.',
    },

    { kind: 'h2', id: 'your-mailbox', text: 'Claude Code in your own Gmail or Outlook' },
    {
      kind: 'p',
      text:
        'When the job is your own mail, connect your own account. [Anthropic’s Microsoft 365 connector](' +
        M365 +
        ') works on every Claude plan. In Outlook it searches email threads, and with write actions turned on it sends mail and manages drafts, labels and automatic replies, always within the access your own account already has. Anthropic’s Gmail connector reads and searches your Gmail with citations. [Anthropic’s help centre](' +
        GMAIL_HELP +
        ') also lists drafting, sending, replying and forwarding, with Claude asking before each one. Its [Gmail connector guide](' +
        GMAIL_DOC +
        ') describes the connector as read-only, so check which your plan shows.',
    },
    {
      kind: 'p',
      text: 'Both connect once at claude.ai, in the connectors directory. Claude Code’s MCP docs explain that connectors from claude.ai appear in its /mcp list when you sign in with a claude.ai subscription. The Gmail and Microsoft 365 connectors are set up on claude.ai, since they don’t sign in from the terminal.',
    },
    {
      kind: 'p',
      text:
        'Google also runs its own [Gmail MCP server](' +
        GOOGLE_GMAIL_MCP +
        '), in Developer Preview. It searches and reads threads, applies labels and creates drafts, which you send from Gmail yourself. Google documents adding it to Claude as a custom connector with your own OAuth client. Open source servers for Gmail, Outlook and any IMAP mailbox run on your own machine, and [MCP servers for email](/blog/mcp-server-email) compares them from their own repositories.',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to give Claude Code email, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to give Claude Code email, from each provider’s own pages, as listed on 23 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Anthropic’s Gmail connector', 'Searches and reads your Gmail, with citations', 'Included with Claude; Team and Enterprise owners enable it', 'Your own mailbox; its pages differ on sending', 'Questions about mail you already receive'],
        ['Anthropic’s Microsoft 365 connector', 'Searches Outlook; sends and drafts with write actions on', 'Included in every Claude plan', 'Your own account; drafts carry no attachments', 'Teams that work in Outlook'],
        ['Google’s Gmail MCP server', 'Google’s own server: threads, labels and drafts', 'Free, in Developer Preview', 'No send tool; you send the drafts', 'Drafting in Gmail under Google’s sign-in'],
        ['Open source servers: Gmail, Outlook, IMAP', 'Full control of a mailbox, on your own machine', 'Free; you host them', 'You set up the sign-in for one person’s mailbox', 'Developers who want to own the code'],
        ['A triage skill: SKILL.md', 'Your rules, loaded only when a task needs them', 'Free', 'Holds rules; reads mail through a tool', 'The same buckets and tone on every run'],
        [
          'Obsession (ours): [Email](/email), [Personas](/personas) and the [Inbox agent blueprint](/blueprints/inbox-agent), over MCP',
          'An inbox of its own in one call, plus a number and a browser on the same key\nEvery email in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment and at any identity check',
          'Agents and tests that need their own address',
        ],
      ],
    },

    { kind: 'h2', id: 'which', text: 'When your own mailbox is the better fit' },
    {
      kind: 'p',
      text: 'When Claude Code helps with your own mail, such as summarising a thread or drafting a reply you send yourself, Anthropic’s connectors are the shortest route. The Gmail and Microsoft 365 connectors need nothing hosted. An inbox of its own fits when the address belongs to the agent. That covers an agent you are building, a shared support address, and sign-up or password reset tests that need a fresh address on every run.',
    },
    {
      kind: 'p',
      text: 'It also fits a project that needs many addresses, one per test user, customer or agent. Each inbox is $0.50 a month with the first 3 free, from 1 inbox to a fleet of 10,000. To run the same agent from your own code, [a LangChain email agent](/blog/langchain-email-agent) uses the same inbox through the SDK.',
    },

    { kind: 'h2', id: 'safety', text: 'Keep email from steering Claude Code' },
    {
      kind: 'p',
      text:
        'Every email is text a stranger wrote, and an email can carry instructions meant for the model. Claude Code’s MCP docs warn that servers which fetch outside content expose you to prompt injection. [Google’s Gmail MCP guide](' +
        GOOGLE_GMAIL_MCP +
        ') advises caution with email from unverified senders and a review of every action the AI takes. Treat every email as untrusted:',
    },
    {
      kind: 'list',
      items: [
        '**Keep email text apart from your instructions.** Ask Claude Code to report what an email asks for, and decide yourself before it acts on it.',
        '**Approve every send.** A forwarded customer list or a refund starts with one email asking for it.',
        '**Give each inbox one job.** An inbox that only receives sign-up codes holds nothing from the support queue.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about email for Claude Code' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I give Claude Code its own email address?',
          a: 'Run claude mcp add obsession, then ask Claude Code for an inbox. It calls inboxes.create, which returns an address that sends and receives, and every email that arrives is listed with events.list. The Free plan includes 3 inboxes with no credit card.',
          link: { label: 'Email for AI agents', to: '/email' },
        },
        {
          q: 'Can Claude Code read my Gmail?',
          a: 'Yes. Connect Anthropic’s Gmail connector once at claude.ai, then sign in to Claude Code with your claude.ai subscription, and the connector appears in its /mcp list. Google’s own Gmail MCP server, in Developer Preview, and open source Gmail servers are the other routes.',
        },
        {
          q: 'What is an email skill in Claude Code?',
          a: 'A SKILL.md file of instructions that tells Claude Code how to handle email: the groups to sort mail into, what counts as urgent, the tone of replies and what needs a person. It holds the rules, and it reads and sends mail through a tool such as an MCP server.',
        },
        {
          q: 'Can Claude Code triage email automatically?',
          a: 'It triages whenever a session runs, reading every email since the last run from the event log. For mail answered around the clock, subscribe your server to email.received, or run a handler on Obsession’s runtime, which starts about 50 ms after each email lands.',
          link: { label: 'Inbox agent blueprint', to: '/blueprints/inbox-agent' },
        },
        {
          q: 'Is it safe to let Claude Code read email?',
          a: 'Yes, with care. Treat every email as untrusted text that may carry instructions, keep each send behind your approval, and give each inbox one job. Claude Code’s own docs advise trusting each MCP server before you connect it.',
        },
        {
          q: 'What does an inbox for Claude Code cost?',
          a: 'On Obsession, an inbox is $0.50 a month and email is $0.40 per 1,000 sent or received, with 3 inboxes included on the Free plan. Paid plans are $20, $99 or $499 a month, and each piece is billed at the same rates on one bill.',
          link: { label: 'See pricing', to: '/pricing' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'Every description of Claude Code, Anthropic’s connectors, Google’s Gmail MCP server and the community skills follows their own pages as they stood on 23 November 2026. Connector features and plan names change, so check the provider’s page before you set one up. larkfield.example in the illustration is invented.',
    },
  ],

  sources: [
    { title: 'What is the Model Context Protocol (MCP)?', publisher: 'Model Context Protocol', url: MCP_INTRO },
    { title: 'Connect Claude Code to tools via MCP', publisher: 'Anthropic (Claude Code docs)', url: CLAUDE_MCP },
    { title: 'Extend Claude with skills', publisher: 'Anthropic (Claude Code docs)', url: CLAUDE_SKILLS },
    { title: 'inbox-triage', publisher: 'skills.sh (maroffo/claude-forge)', url: SKILL_GMAIL },
    { title: 'email-triage', publisher: 'skills.sh (borghei/claude-skills)', url: SKILL_BUCKETS },
    { title: 'Microsoft 365 connector', publisher: 'Anthropic (Claude docs)', url: M365 },
    { title: 'Use Google Workspace connectors', publisher: 'Anthropic (Claude Help Center)', url: GMAIL_HELP },
    { title: 'Gmail', publisher: 'Anthropic (Claude docs)', url: GMAIL_DOC },
    { title: 'Configure the Gmail MCP server', publisher: 'Google for Developers', url: GOOGLE_GMAIL_MCP },
  ],

  related: ['/email', '/personas', '/developers', 'recipe:inbox-agent', 'mcp-server-email', 'langchain-email-agent', 'ai-agent-tools-vs-mcp', '/use-cases/otp-testing'],
}

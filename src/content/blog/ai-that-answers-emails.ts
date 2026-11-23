import type { BlogPost } from './types'

/* Agent-search guide 4 (_research/seo/agent-search-23nov/PLAN.md, 23 Nov 2026). Primary "ai that answers emails for you";
   /blueprints/inbox-agent owns "ai email agent" and is linked, never competed with. Provider facts read on their own
   pages on 23 Nov 2026: Intercom pricing (Fin $0.99 an outcome, seats $19, $85, $132), Zendesk pricing (automated
   resolutions $1.50 committed, $2.00 pay as you go; Suite $55 and $115 a seat yearly), Google Workspace AI page (Gemini
   in Gmail summarises threads and drafts emails; Business Standard $14 a user), Microsoft 365 Copilot Business ($18 a
   user yearly, $25.20 monthly; Outlook drafts and summarises threads), Superhuman AI page (Instant Reply drafts a reply
   in your voice, you edit and send; no prices listed). Obsession rates from pricing.json (23 Nov 2026). The month
   sum is a labelled example. Northpine Pet Supplies at northpine.example is invented. */

const INTERCOM = 'https://www.intercom.com/pricing'
const ZENDESK = 'https://www.zendesk.com/pricing/'
const GOOGLE = 'https://workspace.google.com/solutions/ai/'
const MICROSOFT = 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing'
const SUPERHUMAN = 'https://superhuman.com/products/mail/ai'

export const post: BlogPost = {
  slug: 'ai-that-answers-emails',
  title: 'AI that answers emails for you, from its own address',
  dek: 'There are 3 ways to get AI to answer email: drafts inside your own inbox, a help desk’s AI agent, or an agent with its own address. Here is what each does, where it stops, the setup in 7 steps and the cost at 1,000 emails a month.',
  metaTitle: 'AI that answers emails for you: 3 kinds, setup and cost',
  description:
    'AI that answers emails for you comes in 3 kinds: drafts in your inbox, a help desk agent, or an agent on its own address. What each does, setup, and cost.',
  answer:
    'AI that answers emails for you comes in 3 kinds: inbox assistants such as Gemini in Gmail and Copilot in Outlook that draft replies for you to send, help desk agents such as Fin and Zendesk that answer inside the help desk, and an agent on its own address such as support@ that replies and hands the hard emails to a person. On 23 November 2026, 1,000 emails a month on its own address came to about $6 at Obsession’s list rates, against $990 for 1,000 Fin outcomes.',
  primaryKeyword: 'ai that answers emails for you',
  keywords: [
    'ai agent that responds to emails',
    'ai assistant that can send emails',
    'can ai send emails for you',
  ],
  category: 'Talk to customers',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 9,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'chat',
      title: 'support@northpine.example · one thread',
      turns: [
        { from: 'customer', name: 'Dana', text: 'Hi, where is order 4417? It was due Tuesday.', time: '09:02' },
        { from: 'bot', name: 'Northpine’s AI assistant', text: 'Hi Dana, I’m Northpine’s AI assistant. Order 4417 left our warehouse on Monday and is due tomorrow by 5pm. Here is your tracking link.', time: '09:02' },
        { from: 'customer', name: 'Dana', text: 'Thanks. Can I swap the size on the second item?', time: '09:10' },
        { from: 'bot', name: 'Northpine’s AI assistant', text: 'I’ve passed this to Priya on our team with your order details. She replies today.', time: '09:10' },
      ],
      check: { tone: 'ok', text: 'Answered in 22 seconds, size swap handed to a person', label: 'Thread kept' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'AI that answers emails for you comes in 3 kinds, and they differ in who is on the other end. An assistant inside your own inbox drafts replies that you read and send. A help desk’s AI agent answers customers inside that help desk, on its rules. An agent with its own address, such as support@ or bookings@, reads each email, replies in the same thread, follows up and hands the hard ones to a person. Most owners start with the first kind, then find the second or third when the volume grows.',
    },

    { kind: 'h2', id: 'three-ways', text: 'Drafts, help desk agents and agents on their own address', compare: true },
    {
      kind: 'table',
      caption: 'As listed on 23 November 2026, in US dollars. Prices change, so check each page before you buy',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Gemini in Gmail',
          'Summarises threads, finds key details and drafts emails inside your own Gmail.',
          'Google Workspace Business Standard $14 a user a month',
          'Drafts for you. The page describes drafting and summarising, so you send.',
          'One person with a busy inbox',
        ],
        [
          'Copilot in Outlook',
          'Drafts emails and summarises long threads inside Outlook.',
          'Copilot Business $18 a user a month yearly (a first-year offer to 31 December 2026, listed at $21), $25.20 monthly',
          'Works in your mailbox on your say-so, one person at a time.',
          'Teams already on Microsoft 365',
        ],
        [
          'Superhuman',
          'Instant Reply drafts a reply to each email in your voice, for you to edit and send.',
          'No price on its AI page',
          'A faster way to write your own replies. It doesn’t run a shared address.',
          'Founders who answer their own email',
        ],
        [
          'Intercom Fin',
          'Answers customers on email, chat and phone, on top of a help desk, and hands off to your agents.',
          '$0.99 an outcome, plus seats from $19 a month for new customers ($29 listed)',
          'Lives inside the help desk. You pay for each resolved or handed-off conversation.',
          'Support teams with a help desk',
        ],
        [
          'Zendesk AI agents',
          'Resolves tickets automatically inside Zendesk.',
          '$1.50 a resolution committed, $2.00 pay as you go, plus Suite from $55 an agent a month yearly',
          'Needs Zendesk. Priced by resolution on top of seats.',
          'Teams already on Zendesk',
        ],
        [
          'Obsession (ours): the Inbox agent blueprint',
          'An agent on its own address and domain that answers, sends, follows up and hands over to a person, with every thread in one event log.',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'You write the help pages and rules it answers from, and choose what it hands to a person.',
          'Owners with no help desk, and one address per location or client',
        ],
      ],
      compare: true,
    },
    {
      kind: 'p',
      text: `Prices and plans as each provider lists them on its own page, read 23 November 2026: [Intercom](${INTERCOM}), [Zendesk](${ZENDESK}), [Gemini in Google Workspace](${GOOGLE}), [Microsoft 365 Copilot](${MICROSOFT}) and [Superhuman](${SUPERHUMAN}).`,
    },
    {
      kind: 'p',
      text: 'The first 3 rows are assistants for one person: they help you write, and you stay the sender. The next 2 are agents for a help desk: they answer for a company, but only inside that desk. The last is the middle path for people without a help desk, a small team or an agency running many addresses.',
    },

    { kind: 'h2', id: 'own-address', text: 'When an agent should have its own address' },
    {
      kind: 'p',
      text: 'Give an agent its own address when email is a job rather than your inbox. The signs are simple:',
    },
    {
      kind: 'list',
      items: [
        '**A shared address everyone dreads.** support@, orders@ or hello@ fills up, and nobody owns it.',
        '**One address per place or client.** A clinic group, a franchise or an agency needs bookings@ for each location or client, with its own rules.',
        '**Answers that need follow-up.** A reply that waits for a customer’s photo, a quote or a booking time needs something that is still there tomorrow.',
        '**No help desk, and no wish for one.** You want the answering without the ticket system.',
      ],
    },
    {
      kind: 'p',
      text: 'Keep drafting inside your own inbox for email that is personal, sensitive or about relationships. An agent on its own address is for the repeat questions: where is my order, what are your hours, can I move my booking, what does it cost.',
    },

    { kind: 'h2', id: 'setup', text: 'How to set up an agent that answers email, in 7 steps' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick the address and the job.** One job per address, such as support@ for order questions. Use your own domain so replies come from a name customers know.',
        '**Write down what it answers from.** Your help pages, price list, delivery times and returns rules. It answers only from these, and everything else goes to a person.',
        '**List what it hands to a person.** Refunds over your limit, complaints, legal questions, anything with a medical or safety angle, and any customer who asks for a human.',
        '**Say where the hand-off goes.** A Slack channel, a shared inbox or a named person, with a draft reply attached so they start from something.',
        '**Make it sign as an AI.** Start each thread with a line such as “I’m Northpine’s AI assistant”, so nobody thinks they are writing to a person.',
        '**Test it before real customers.** Send it 20 emails from another address: easy ones, tricky ones, a refund, a rude one. Read every reply.',
        '**Check it every week.** Read 10 threads, count hand-offs and fix the help page each wrong answer came from.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession’s [Inbox agent](/blueprints/inbox-agent) blueprint does steps 1 to 5 for you: you give it your help pages and rules, and it runs an agent with its own address. Anyone who builds can use [email for AI agents](/email) and the API instead, and the [guide to email APIs for AI agents](/blog/best-email-api-for-ai-agents) compares the options. To read your own inbox from Claude Code, see [email for Claude Code](/blog/email-for-claude-code).',
    },

    { kind: 'h2', id: 'cost', text: 'What it costs a month for 1,000 emails' },
    {
      kind: 'p',
      text: 'At list rates, an agent on its own address is billed by what it uses. Obsession lists an inbox at $0.50 a month, emails at $0.40 per 1,000 sent or received, and model tokens from $0.975 per million input tokens. This worked example assumes 1,000 customer emails and 1,000 replies, about 3,000 input tokens and 300 output tokens per email to read the thread and your help pages, and no caching.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'An agent answering 1,000 emails a month',
        rows: [
          { label: 'One inbox', value: '$0.50', note: '$0.50 an inbox a month' },
          { label: '2,000 emails', value: '$0.80', note: '1,000 received and 1,000 sent at $0.40 per 1,000' },
          { label: 'Reading 3M input tokens', value: '$2.93', note: 'At $0.975 per million' },
          { label: 'Writing 0.3M output tokens', value: '$1.46', note: 'At $4.875 per million' },
        ],
        total: { label: 'List rate for the month', value: '$5.69', note: 'The $20 Developer plan covers it' },
      },
      caption: 'Example: the inputs are assumptions, and a longer thread or a bigger help page uses more tokens',
    },
    {
      kind: 'table',
      caption: 'Monthly cost of the answering itself at three sizes, before seats. Obsession: one inbox plus $5.19 per 1,000 emails answered (worked example above). Fin at $0.99 an outcome, Zendesk at $1.50 committed',
      cols: ['Emails answered a month', 'Obsession list rate', 'Intercom Fin', 'Zendesk AI agents'],
      rows: [
        ['100,000, a $100M+ retailer’s support', '$519', '$99,000', '$150,000'],
        ['10,000, a $2M+ online store', '$52', '$9,900', '$15,000'],
        ['1,000, one small business', '$5.69', '$990', '$1,500'],
      ],
    },
    {
      kind: 'p',
      text: 'The help desks include tickets, a team inbox and reports, which an agent on its own address leaves to your own tools. One detail changes the sum: Intercom’s page bills $0.99 whenever Fin finishes a workflow, handoffs included, so a conversation it passes to a person can still be charged.',
    },

    { kind: 'h2', id: 'safety', text: 'Keeping it safe' },
    {
      kind: 'list',
      items: [
        '**Never send what it can’t check.** If the answer isn’t on your help pages, it says so and hands over. A confident wrong refund promise costs more than a slow reply.',
        '**Keep every thread.** You need the email, the reply and what it read. Obsession keeps each in the event log.',
        '**Say it is an AI.** Obsession’s agents say they are an AI to anyone they speak to.',
        '**Set limits on money.** Refunds, credits and discounts go to a person.',
        '**Watch the numbers.** Replies sent, hand-offs, time to first reply and customers who write back unhappy.',
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'One agent for the inbox, the phone and the browser' },
    {
      kind: 'p',
      text: 'Email rarely stays in email. A customer asks about an order, then rings to chase it; a booking needs a code that arrives by text; a refund sits behind a login on a supplier’s portal. [Obsession](/no-code)’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. The pieces for this job are four:',
    },
    {
      kind: 'list',
      items: [
        '**Inbox.** A real address the agent owns. It sends and receives, keeps each thread and calls your webhook, a message to your own system, on every new email.',
        '**Phone number.** A US or UK number the agent owns. It texts, makes and takes calls and receives sign-in codes, and texts go out from that number in your business’s name.',
        '**Browser.** A cloud browser whose sessions keep their logins, so the agent signs in once with the logins you give it and stays signed in.',
        '**Sandbox.** A computer started only when a task needs to run code, such as reading a spreadsheet of orders.',
      ],
    },
    { kind: 'h3', id: 'persona', text: 'The persona puts them under one identity' },
    {
      kind: 'p',
      text: 'A persona is one name, one address, one number and one browser profile. The customer who emails and then calls reaches the same agent, which already holds the whole thread. The code that arrives by text reaches the same agent whose browser is waiting at the login page. A waiting persona costs nothing, though its number ($2) and inbox ($0.50) bill monthly, and it answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'art',
      art: {
        kind: 'flow',
        title: 'One Northpine persona, one customer',
        steps: [
          { label: 'Email', detail: 'Dana asks where order 4417 is', tone: 'info' },
          { label: 'Browser', detail: 'Signs in to the courier portal', tone: 'ok' },
          { label: 'Email reply', detail: 'Sends the tracking link', tone: 'ok' },
          { label: 'Call', detail: 'Dana rings the next day', tone: 'info' },
          { label: 'Same agent', detail: 'Has the whole thread open', tone: 'ok' },
        ],
        foot: 'Example: Northpine Pet Supplies and Dana are invented.',
      },
      caption: 'The thread follows the customer from email to phone because both belong to one persona',
    },
    { kind: 'h3', id: 'event-log', text: 'Every thread, call and page in one event log' },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent touches lands in one event log, dated, with the email, screenshot or recording behind it. For answering email that means a record of what each customer was told and why, a morning summary of hand-offs and every reply you can show a client. Results also reach Slack, email, a CRM, a sheet or a PDF report.',
    },
    { kind: 'h3', id: 'one-platform', text: 'Why one platform beats four vendors' },
    {
      kind: 'p',
      text: 'The usual route is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working, and jobs break at the seams: the code arrives at one vendor while the browser waits at another, and the call log and the email thread live in different places. If your job needs only email, a single specialist can be enough. For the rest, see the [AgentMail, Twilio, Browserbase and E2B comparison](/compare/agentmail-twilio-browserbase-e2b) and the [stack of tools an AI agent runs on](/blog/ai-agent-infrastructure-stack).',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. With no code, pick the Inbox agent blueprint, or describe the job in your own words and Obsession sets it up and starts the agent. If you build, the API, SDKs and MCP give you the same pieces: `personas.create` makes the identity and `email.received` fires on each new email. Obsession can run one agent or ten thousand, each with its own identity, paid for by what each uses.',
    },
    {
      kind: 'cta',
      text: 'Give an agent its own address with your help pages and rules, and hand the hard emails to a person in Slack.',
      to: '/blueprints/inbox-agent',
      label: 'See the blueprint',
    },
    { kind: 'h3', id: 'ideas', text: 'What else the same agent can do' },
    {
      kind: 'list',
      items: [
        '**Text the answer.** Send the tracking link or a booking time from its own number to customers who gave you their number.',
        '**Chase the paperwork.** Email a client for a missing document, then check a portal for it each morning.',
        '**One agent per location.** Give each clinic, franchise or client its own address, with its own rules.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI that answers emails' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can AI send emails for you?',
          a: 'Yes, but the 3 kinds differ. Inbox assistants such as Gemini in Gmail and Copilot in Outlook draft emails for you to send. Help desk agents such as Fin and Zendesk reply inside the help desk. An agent on its own address sends from that address, with every thread kept.',
        },
        {
          q: 'Is there an AI assistant that can send emails on its own?',
          a: 'An agent with its own address can, and it should send only what it can check against your help pages. It hands refunds, complaints and anything outside the pages to a person with a draft. Gmail’s and Outlook’s AI pages describe drafting and summarising, so you press send there.',
        },
        {
          q: 'What does an AI agent that responds to emails need?',
          a: 'It needs an address, the pages it answers from, a list of what it hands to a person and a place for that hand-off. It also needs a signature line saying it is an AI, and a test of about 20 emails before it meets customers.',
          link: { label: 'Email for AI agents', to: '/email' },
        },
        {
          q: 'How much does AI that answers emails cost?',
          a: 'On 23 November 2026, Google Workspace Business Standard, which lists Gemini in Gmail, was $14 a user a month, and Copilot Business was $18 a user a month yearly, a first-year offer to 31 December 2026 that its page lists at $21. Fin was $0.99 an outcome, and Zendesk $1.50 to $2.00 a resolution. An agent on its own address at Obsession’s list rates was about $5.69 for 1,000 emails in the worked example.',
        },
        {
          q: 'Can I use my own domain?',
          a: 'Yes. An address such as support@yourbusiness.com makes replies come from a name customers know, and you can run one address for each location or client.',
        },
        {
          q: 'Will customers know it is an AI?',
          a: 'They should. Start each thread with a line such as “I’m Northpine’s AI assistant”. Obsession’s agents say they are an AI to anyone they speak to, and anyone can ask for a person.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices and examples',
      text: 'Every price is as each provider listed it on 23 November 2026 and changes often. Northpine Pet Supplies in the picture and the worked month are examples. This is general information, not legal advice about email or consumer law.',
    },
    {
      kind: 'cta',
      text: 'Start with one address and one job, free, and see every thread in the event log.',
      to: '/blueprints/inbox-agent',
      label: 'Start free',
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'Intercom', url: INTERCOM, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Zendesk', url: ZENDESK, date: '2026-11-23' },
    { title: 'Gemini in Google Workspace', publisher: 'Google', url: GOOGLE, date: '2026-11-23' },
    { title: 'Microsoft 365 Copilot pricing', publisher: 'Microsoft', url: MICROSOFT, date: '2026-11-23' },
    { title: 'Superhuman AI', publisher: 'Superhuman', url: SUPERHUMAN, date: '2026-11-23' },
  ],

  related: ['/no-code', 'recipe:inbox-agent', '/email', 'best-email-api-for-ai-agents', 'ai-voice-agent-for-small-business', 'how-to-build-an-ai-receptionist'],
}

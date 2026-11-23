import type { BlogPost } from './types'

/* Agent search guide (_research/seo/agent-search-23nov/PLAN.md, WRITER_BRIEF.md; approved by Seun 23 Nov 2026,
   "Yes, run the plan"). Primary "ai agents that do work for you"; secondaries from Google suggestions (US and UK,
   23 Nov, autocomplete_23nov.json) that no other post lists. /blog/what-can-ai-agents-do-for-business keeps "what can
   ai agents do for my business" and is linked, not repeated. Every outside fact read on its own page on 23 November
   2026: Claude's pricing page, Zapier's pricing page, n8n's pricing page,
   Lindy's pricing page and Time etc's pricing page. Larkfield Dental and every figure in the picture are invented.
   Prices and rates for Obsession come from src/lib/pricing/pricing.json (read 23 Nov). */

const CLAUDE_PRICING = 'https://claude.com/pricing'
const ZAPIER = 'https://zapier.com/pricing'
const N8N = 'https://n8n.io/pricing/'
const LINDY = 'https://www.lindy.ai/pricing'
const TIMEETC = 'https://www.timeetc.com/pricing'

export const post: BlogPost = {
  slug: 'ai-agents-that-do-work-for-you',
  title: 'AI agents that do work for you: 25 jobs for founders and teams, and where each result lands',
  dek: 'Most AI tools write the message and leave the sending, calling and clicking to you. An agent with its own phone number, inbox and browser finishes 25 jobs itself, and each result lands in a tool your team already uses.',
  metaTitle: 'AI agents that do work for you: 25 jobs for any small team',
  description:
    'AI agents that do work for you finish the call, the email and the portal login. 25 jobs in four groups, each with its result, and what each tool costs.',
  answer:
    'AI agents that do work for you finish jobs from start to end: they take the call, answer the email from their own address, sign in to a website and send the result to your team’s tools. Most AI tools stop at a suggestion, so you still send, call and click. An agent can only finish a job once it has its own phone number, inbox and browser.',
  primaryKeyword: 'ai agents that do work for you',
  keywords: [
    'ai that can do tasks for you',
    'ai that can do things for you',
    'ai agent that works for you',
    'ai agent that can perform tasks',
    'best ai agents for work',
  ],
  category: 'Work behind logins',
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
      title: 'A morning at larkfield-dental.example',
      who: 'Front desk agent, its own number and inbox',
      rows: [
        { time: '06:58', text: 'Texted back 3 calls missed overnight', detail: 'Each caller was offered the next free slot', tone: 'ok' },
        { time: '07:20', text: 'Booked 2 of those 3 callers', detail: 'Confirmation text sent from the same number', tone: 'ok' },
        { time: '07:45', text: 'Signed in to the insurer portal', detail: 'Login code read from its own inbox', tone: 'ok' },
        { time: '07:52', text: 'Checked 9 pending authorisations', detail: '1 denied, with the reason saved', tone: 'late' },
        { time: '08:10', text: 'Emailed a patient the missing form', detail: 'Reminder set for 48 hours', tone: 'info' },
        { time: '08:30', text: 'Posted the day’s list to #front-desk', detail: 'Screenshots and transcripts attached', tone: 'ok' },
      ],
      foot: 'Every email, text, call and page lands in one log the team reads at 09:00.',
    },
  },
  blocks: [
    { kind: 'h2', id: 'why-ai-stops', text: 'Why most AI tools stop at the suggestion' },
    {
      kind: 'p',
      text: 'A chat assistant can draft the reply to a customer. It cannot send it from your address, answer when the customer calls back or sign in to the supplier’s website to look up the order. The assistant suggests, and a person still sends, calls and clicks. That gap is why many teams that tried AI came away with better drafts and the same amount of work.',
    },
    {
      kind: 'p',
      text: 'An AI agent is a language model, the AI that reads and writes text, that chooses its next step and uses tools to take it. The tools decide how much of a job it can finish. A model with no tools stays in the chat window. With an inbox it can receive and answer email. With a phone number it can take a call and send a text. With a browser that stays signed in, it can work on websites that have no connection for other software.',
    },
    {
      kind: 'p',
      text: 'The 25 jobs sit in four groups, by where the work happens: on the phone, in the inbox, on websites and portals, and in your team’s own tools. For the wider view by department, [what AI agents can do for your business](/blog/what-can-ai-agents-do-for-business) goes through six kinds of work.',
    },

    { kind: 'h2', id: 'on-the-phone', text: 'On the phone: 7 jobs an agent finishes' },
    {
      kind: 'p',
      text: 'The agent has its own phone number, so callers reach it directly. It says it is an AI to anyone it speaks to, and it texts or calls only people who gave the business their number. [Can AI make phone calls](/blog/can-ai-make-phone-calls) sets out the rules in plain words.',
    },
    {
      kind: 'list',
      items: [
        '**Answer the main line out of hours.** The caller gets the opening hours, a booking or a message taken. The transcript lands in Slack or your CRM.',
        '**Text back every missed call.** Each caller is texted within seconds with the next free slot, and the thread lands in your inbox. [Missed call text back](/blueprints/missed-call-text-back) runs it.',
        '**Call every new lead within a minute.** The lead filled in your form, so the call is expected. The result of each call lands in the CRM. [Speed to lead callback](/blueprints/speed-to-lead-callback) runs it.',
        '**Send appointment reminders and rebook no-shows.** Customers confirm or move the slot by text, and the calendar updates. [Appointment reminders](/blueprints/appointment-reminders) runs it.',
        '**Book the table, the viewing or the service visit.** The agent offers the open slots and confirms by text. The booking lands in your calendar.',
        '**Take phone orders.** It reads the order back, then sends it to your order sheet or point of sale by webhook, the message a system sends another system when something happens.',
        '**Run an assistant people can text.** Customers message one number, including Android users, and the agent answers or hands over to a person. [iMessage assistant](/blueprints/imessage-assistant) runs it.',
      ],
    },

    { kind: 'h2', id: 'in-the-inbox', text: 'In the inbox: 6 jobs an agent finishes' },
    {
      kind: 'p',
      text: 'The agent has an email address of its own. Customers, suppliers and systems write to it, and it answers from it, so each reply shows which agent sent it and every message is kept.',
    },
    {
      kind: 'list',
      items: [
        '**Answer every incoming email.** Questions with a written answer get a reply, and anything else goes to a named person. [Inbox agent](/blueprints/inbox-agent) runs it.',
        '**Chase missing documents.** The agent emails and texts each client for the missing form until it arrives, then files it in the shared folder. [Document chaser](/blueprints/document-chaser) runs it.',
        '**Collect quotes.** It emails five suppliers the same request, reads the replies and returns a table of prices and dates.',
        '**Read invoices as they arrive.** Suppliers email invoices to the agent’s address, and it extracts the lines into your accounting sheet.',
        '**Send reminders for overdue payments.** Each customer gets a polite reminder from the agent’s address, and replies land in your finance inbox.',
        '**Catch login codes and confirmations.** Codes and receipts sent to the agent’s inbox are read and passed to the job that needs them.',
      ],
    },

    { kind: 'h2', id: 'on-websites', text: 'On websites and portals: 6 jobs an agent finishes' },
    {
      kind: 'p',
      text: 'The agent has a cloud browser that stays signed in for weeks. It signs in only with logins you provide, stops at any identity check, never gets round a CAPTCHA or a bot block, and saves a screenshot of each page. [Can AI agents log in to websites](/blog/can-ai-agents-log-in-to-websites) covers what sites allow.',
    },
    {
      kind: 'list',
      items: [
        '**Check claim and authorisation status in insurer portals every morning.** Each status lands in your work queue by 07:00. [Prior authorization status](/blueprints/prior-authorization-status) runs it.',
        '**Download invoices from every supplier portal each week.** The files land in a shared drive with a sheet beside them. [Invoice collector](/blueprints/invoice-collector) runs it.',
        '**Track every load across carrier portals through the day.** Late and stale loads come first in your sheet or Slack. [Load tracking](/blueprints/load-tracking) runs it.',
        '**Fill the same form on 20 sites.** For quotes from insurers or utilities, it fills each form up to any identity check and returns one table.',
        '**Watch supplier and competitor prices every morning.** It reads each price page and flags rises. [Price watch](/blueprints/price-watch) runs it.',
        '**Reorder stock when it runs low.** At your supplier it orders the agreed quantity with the card you give it, and the confirmation lands in your stock sheet. [Supplier reorder agent](/blueprints/supplier-reorder-agent) runs it.',
      ],
    },

    { kind: 'h2', id: 'in-your-tools', text: 'In your team’s tools: 6 jobs an agent finishes' },
    {
      kind: 'p',
      text: 'A result is only useful in the place where your team already works. Each job here ends with the agent writing to Slack, a sheet, your CRM, a PDF report or a webhook.',
    },
    {
      kind: 'list',
      items: [
        '**Post the morning list to Slack.** Overnight calls, texts and emails are summarised in the channel with the transcripts attached.',
        '**Update the CRM after every call or email.** The contact, the call’s result and the next step are written to the right record.',
        '**Keep a running log in a sheet.** One row for each call, text and page, with the time and the recording or screenshot behind it.',
        '**Send a weekly PDF report.** Calls answered, bookings made and documents received, by location.',
        '**Raise a ticket when something breaks.** A denied authorisation or a failed login opens a task with the screenshot attached.',
        '**Book the trip inside your travel policy.** Travellers ask in Slack, the agent finds options inside policy and books the pick with the company card. [Travel booking agent](/blueprints/travel-booking-agent) runs it.',
      ],
    },

    { kind: 'h2', id: 'what-it-costs', text: 'What one agent costs at one location and at 20,000' },
    {
      kind: 'p',
      text: 'Costs follow use, so the sum is easy to run. The table works out a front desk agent at one clinic for a month, at Obsession’s list rates as of 23 November 2026, before the AI model’s own charges.',
    },
    {
      kind: 'table',
      caption: 'A front desk agent at one clinic for a month, at list rates; 400 texts and 100 minutes of calls are example volumes',
      cols: ['Item', 'List rate', 'Amount', 'Cost'],
      rows: [
        ['US or UK phone number', '$2 a month', '1 number', '$2.00'],
        ['Inbox', '$0.50 a month', '1 inbox', '$0.50'],
        ['Texts', '$0.015 each', '400 texts', '$6.00'],
        ['Calls', '$0.012 a minute', '100 minutes', '$1.20'],
        ['One clinic, one month', '', '', '$9.70'],
        ['240 clinics', '', '240 agents', '$2,328'],
        ['20,000 locations', '', '20,000 agents', '$194,000'],
      ],
    },
    {
      kind: 'p',
      text: 'A person on a phone costs staff hours that rise with every location. An agent costs what it uses, and a waiting agent costs only its number and inbox. At 20,000 locations each agent still has its own number, inbox and identity, so a caller at any location reaches that location’s agent. US texting needs a registration for each business that texts, $25 once and $17 a month per campaign, and it counts toward a plan’s covered usage.',
    },

    { kind: 'h2', id: 'compared', text: 'The kinds of tool people try for AI that does tasks, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to get AI to do tasks for you, from each provider’s own pages, as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          '[Claude](' + CLAUDE_PRICING + '): a chat assistant with scheduled tasks',
          'Drafting, research and multi-step work; its Pro, Max and Ultra plans include handing off and scheduling tasks',
          'Claude Pro: $20 a month billed monthly, $17 billed annually\nClaude Max: $100 a month',
          'Its pricing page lists no phone number or inbox for the agent',
          'One person’s research and drafting',
        ],
        [
          '[Zapier](' + ZAPIER + ') and [n8n](' + N8N + '): automation tools',
          'Connecting the apps you already use; Zapier Agents work across connected apps; n8n can be self-hosted',
          'Zapier Free: 400 agent activities a month\nZapier Pro: from about $33.33 a month, billed annually\nn8n Cloud Starter: €20 a month, billed annually',
          'You build and maintain each workflow\nn8n Starter allows 2.5K executions a month',
          'Teams that connect software they already run',
        ],
        [
          '[Lindy](' + LINDY + '): AI employee products',
          'AI teammates priced by credits that pool across a workspace',
          'Free: $50 in credits that last 7 days\nTeam: from $29.99 per user a month',
          'Every active user is billed, and extra credits cost $10 per 1,000',
          'Teams that want AI helpers on a credit budget',
        ],
        [
          'A [virtual assistant](' + TIMEETC + ') from a US provider',
          'Judgement on every case, by phone and email, in working hours',
          '10 hours: $390 a month\n40 hours: $1,480 a month',
          'Hours rise with every call, portal and location',
          'Work that changes every week',
        ],
        [
          'Obsession (ours): seven types of blueprints, from [Talk to customers](/blueprints/talk-to-customers) to [Buy, book and order](/blueprints/buy-book-and-order)',
          'A phone number, inbox, browser and sandbox for each agent, or a blueprint that runs the job, with results in Slack, a sheet, a CRM or a report',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment unless you give it your card, and at any identity check',
          'Jobs where an agent must call, email and sign in, for one location or thousands',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'A chat assistant such as Claude or ChatGPT is the right start for drafting and research. An automation tool is the right start when every step happens inside apps that connect to each other. A virtual assistant fits work that changes every week. The 25 jobs need a phone number, an inbox and a browser for each agent.',
    },

    { kind: 'h2', id: 'on-obsession', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. Each piece does one part of the 25 jobs. The inbox is a real email address the agent owns: it sends, receives and keeps each thread, and calls your webhook, a message to your own system, on every new email. The phone number is a US or UK number: it sends and receives texts, makes and takes calls and receives sign-in codes, and texts go out from the agent’s own number in your business’s name.',
    },
    {
      kind: 'p',
      text: 'The browser is a cloud browser whose sessions keep their logins between runs, so the agent signs in once with the logins you give it and stays signed in. iMessage, WhatsApp, Slack and Telegram come from the same agent, and a sandbox, a computer started only when a task needs to run code such as reading a spreadsheet, is there when the job needs it.',
    },
    {
      kind: 'h3',
      id: 'one-identity',
      text: 'Why the pieces belong to one identity',
    },
    {
      kind: 'p',
      text: 'A persona puts the pieces under one identity: one name, one address, one number and one browser profile. The sign-in code that arrives by text reaches the same agent whose browser is waiting at the login page. A customer who emails and then calls reaches the same agent, with the whole history. A persona that is waiting costs nothing, though its number ($2) and inbox ($0.50) bill monthly, and it answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent touches lands in one event log, dated, with the email, screenshot or recording behind it. For a business owner that is the morning summary in Slack. For a client it is the proof of what was done, and for a regulator it is a record of who was called and when.',
    },
    {
      kind: 'h3',
      id: 'one-platform',
      text: 'The case for one platform',
    },
    {
      kind: 'p',
      text: 'The usual way is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working, and the seams are where a job breaks: the code arrives at one vendor while the browser waits at another, and the call log and the email thread sit in different places. If your job needs one piece, a single specialist can be enough. The side-by-side of [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) holds each vendor’s prices, dated, and [how the email, phone, browser and sandbox layers fit together](/blog/ai-agent-infrastructure-stack) is explained step by step.',
    },
    {
      kind: 'h3',
      id: 'two-ways',
      text: 'Run it with no code or with the API',
    },
    {
      kind: 'p',
      text: 'With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up the agent, for one location or ten thousand, each with its own identity. Developers use the API, the SDKs or MCP, the standard way AI agents call tools, for example obsession.personas.create({ inbox: true, phone: "US", browser: true }).',
    },
    {
      kind: 'p',
      text: 'Once an agent has its own number, inbox and browser, the same persona can do more than one job. A front desk agent can also chase unpaid invoices by email, check a supplier’s prices each morning and book the engineer’s visit. A freelancer can run all of that as one agent, and an agency can run it for every client under its own brand.',
    },
    {
      kind: 'table',
      caption: 'The seven types of blueprints, one for each family of jobs',
      cols: ['Type', 'The job it runs'],
      rows: [
        ['[Talk to customers](/blueprints/talk-to-customers)', 'Answer calls, texts and email, and follow up on every lead'],
        ['[Test sign-up and agents](/blueprints/test-sign-up-and-agents)', 'Sign up after each release and check what arrives'],
        ['[Build agent products](/blueprints/build-agent-products)', 'Give each user of your app an agent with its own address and number'],
        ['[Work behind logins](/blueprints/work-behind-logins)', 'Check portals, download documents and track loads'],
        ['[Watch the market](/blueprints/watch-the-market)', 'Stay subscribed at competitors and keep every offer'],
        ['[Train and test agents](/blueprints/train-and-test-agents)', 'Run thousands of tasks with real codes and logins'],
        ['[Buy, book and order](/blueprints/buy-book-and-order)', 'Book trips and reorder supplies inside your rules'],
      ],
    },
    {
      kind: 'p',
      text: '',
    },
    {
      kind: 'cta',
      text: 'Pick a ready-made job, or describe your own, and each result lands in Slack, a sheet, your CRM or a report.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },
    {
      kind: 'cta',
      text: 'Browse every blueprint by type, from missed calls to portal checks.',
      to: '/blueprints',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'goes-wrong', text: 'What goes wrong, and how to catch it' },
    {
      kind: 'list',
      items: [
        '**The agent answers from a gap in your rules.** Start with one job that has a written answer for every case, and send anything else to a named person.',
        '**A site changes its login.** The agent reports the failed sign-in in the log, so the gap shows the same morning.',
        '**Texts are not registered.** US texting needs a registration before the first message, so file it before launch.',
        '**Nobody reads the results.** Name one owner and one place, such as a Slack channel, for each job.',
      ],
    },

    { kind: 'h2', id: 'limits', text: 'The rules every agent should keep' },
    {
      kind: 'list',
      items: [
        '**Say it is an AI.** The agent says so to anyone it speaks to.',
        '**Call and text only people who gave you their number.** Consent comes first.',
        '**Use only logins you provide.** It stays out of accounts you did not give it.',
        '**Stop at identity checks, and before payment.** Payment happens only if you give it your card.',
        '**Never get round a CAPTCHA or a bot block.**',
        '**Keep a record.** Every step lands in the log with the email, screenshot or recording behind it, and [the agent rules](/agents) set this out.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI agents that do work for you' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What can an AI agent do for me, beyond writing?',
          a: 'With a phone number, an inbox and a browser, an agent can answer calls, send and receive email, sign in to websites and report the result to Slack, a sheet or a CRM. It finishes the job rather than suggesting the next step. The 25 jobs are grouped by where the work happens.',
        },
        {
          q: 'Which AI agent works best for business tasks?',
          a: 'It depends on where the work happens. A chat assistant suits drafting and research, an automation tool suits work inside connected apps, and a virtual assistant suits work that changes every week. Jobs that need calls, email and website logins every day need an agent with its own phone number, inbox and browser.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'Do I need to code to have an AI agent do work for me?',
          a: 'No. You pick a blueprint, or describe the job in plain words, and Obsession sets up an agent to run it. You say where results should land, such as Slack, a sheet, your CRM or a PDF report.',
          link: { label: 'AI agents without coding', to: '/no-code' },
        },
        {
          q: 'How much does an AI agent that does tasks cost?',
          a: 'At Obsession’s list rates, an inbox is $0.50 a month, a US or UK phone number is $2 a month, a text is $0.015 and a call is $0.012 a minute. A waiting agent costs only its number and inbox. Plans are Free, then $20, $99 or $499 a month, and a paid plan’s fee covers that much usage at list rates.',
          link: { label: 'See the plans', to: '/pricing' },
        },
        {
          q: 'Can an AI agent make calls for me?',
          a: 'Yes. An agent with its own number places and answers calls. It says it is an AI, and it calls only people who gave the business their number. In the US, rules on AI voices and consent apply, and the linked guide explains them in general terms, not as legal advice.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'Can I run the same job at many locations?',
          a: 'Yes. Each location gets an agent with its own number, inbox and identity, paid for by what it uses. The same blueprint runs at one clinic or at 20,000 locations, and the log shows every location’s results.',
          link: { label: 'Talk to customers', to: '/blueprints/talk-to-customers' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the jobs and prices',
      text: 'Other providers are described from their own pages, read on 23 November 2026, and their prices can change. Larkfield Dental and every figure in the picture are invented. The cost table uses example volumes. Calls and texts follow the rules of each country, and nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'Plans and pricing', publisher: 'Claude', url: CLAUDE_PRICING },
    { title: 'Plans and pricing', publisher: 'Zapier', url: ZAPIER },
    { title: 'Pricing', publisher: 'n8n', url: N8N },
    { title: 'Pricing', publisher: 'Lindy', url: LINDY },
    { title: 'Pricing', publisher: 'Time etc (US virtual assistant provider)', url: TIMEETC },
  ],

  related: [
    '/no-code',
    '/blueprints',
    'recipe:missed-call-text-back',
    'recipe:inbox-agent',
    'what-can-ai-agents-do-for-business',
    'can-ai-make-phone-calls',
  ],
}

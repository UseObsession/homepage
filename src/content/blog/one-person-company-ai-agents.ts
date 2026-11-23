import type { BlogPost } from './types'

/* Track 1 guide A5 (_research/seo/agent-search-23nov/PLAN.md and WRITER_BRIEF.md; Seun's "Yes, run the plan", 23 Nov
   2026): one person company ai. Secondaries from Google suggestions (23 Nov): one person business ai, scaling one
   person business ai, solo founder ai, ai agents for solopreneurs, ai agents for freelancers, ai agents for
   entrepreneurs. marlowe-books.example, its clients and every run in the picture are invented. The sums at the bottom
   are worked from pricing.json list rates (read 23 Nov 2026): inbox $0.50 a month, emails $0.40 per 1,000, a number
   $2 a month, texts $0.015, calls $0.012 a minute (plus $0.0676 spoken), browser $0.10 an hour; per client a month 10 emails, 4 texts,
   0.5 call minutes, 0.1 browser hours (assumptions, said on the page). US texting registration $25 once and $17 a
   month. Model tokens are extra and not priced here. Hiring comparison: BLS Occupational Outlook Handbook, median pay
   for secretaries and administrative assistants, $48,310 in May 2025 (page modified 27 Aug 2026). Other options read
   on their own pricing pages on 23 Nov 2026 (ChatGPT's page captured no price figures, so none is quoted). No
   founder or income examples, no customer figures. */

const BLS = 'https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm'
const CHATGPT = 'https://chatgpt.com/pricing'
const CLAUDE = 'https://claude.com/pricing'
const ZAPIER = 'https://zapier.com/pricing'

export const post: BlogPost = {
  slug: 'one-person-company-ai-agents',
  title: 'The one-person company: a business run with AI agents',
  dek: 'How one founder or freelancer runs a business that used to need a team: the jobs AI agents take, the jobs that stay with you, a week at an example business, and what it costs a month from 20 clients to 2,000.',
  metaTitle: 'The one-person company: running a business with AI agents',
  description:
    'A one person company with AI agents: the jobs agents take, what stays with you, a week at an example business, monthly cost at list rates and how to scale.',
  answer:
    'A one person company with AI is a business where one founder sets the rules and AI agents do the repeat work: answering every enquiry, following up, chasing documents and invoices, booking and checking. Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code.',
  primaryKeyword: 'one person company ai',
  keywords: [
    'one person business ai',
    'scaling one person business ai',
    'solo founder ai',
    'ai agents for solopreneurs',
    'ai agents for freelancers',
    'ai agents for entrepreneurs',
  ],
  category: 'Build agent products',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'marlowe-books.example',
      who: 'Tuesday, 3 agents on their own inboxes and number',
      status: { tone: 'ok', text: '38 enquiries answered' },
      rows: [
        { time: '07:02', text: 'Enquiry answered from the website form', detail: 'New client asked for a quote; reply sent in 41 seconds, call booked for Thursday', tone: 'ok' },
        { time: '09:15', text: 'Missed call texted back', detail: 'Caller asked about a late return; answered from the price list, visit booked', tone: 'ok' },
        { time: '11:30', text: 'Document chase sent', detail: '12 clients texted and emailed for November bank statements', tone: 'info' },
        { time: '13:10', text: 'Overdue invoice reminder', detail: 'Invoice 1042, 14 days late, reminded by email from the agent, signed as an AI assistant, held for the founder to review', tone: 'late' },
        { time: '15:45', text: 'Refund question handed to the founder', detail: 'Draft reply attached; founder approved at 15:52', tone: 'ok' },
        { time: '17:00', text: 'Daily summary sent', detail: '38 enquiries, 9 bookings, 3 for the founder to decide', tone: 'ok' },
      ],
      foot: 'Example: Marlowe Books and every client here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A one person company with AI is a business where one founder sets the rules and AI agents do the repeat work. Founders, freelancers and consultants use it to answer every enquiry within a minute, follow up on every lead, chase documents and unpaid invoices, and book appointments, jobs that used to need an assistant or a small team.',
    },

    { kind: 'h2', id: 'what-it-looks-like', text: 'What is a one person company run with AI agents?' },
    {
      kind: 'p',
      text: 'A solo founder with AI still owns the clients, the prices, the judgement and the final word. The difference is who handles the steady stream of small jobs around them. An AI agent is software that reads a message, decides what to do next and does it, such as replying to an email, sending a text or filling in a form. A chat assistant stops when the chat ends. An agent keeps going every day, from its own email address and phone number, so a client can reach it the way they reach a person.',
    },
    {
      kind: 'p',
      text: 'That is what lets a business of one serve hundreds of clients. The work that grows with every client, replies, reminders, chasing and checking, is the work agents take. The work that decides whether the client stays, such as advice, a hard conversation or a price, stays with you.',
    },

    { kind: 'h2', id: 'jobs-agents-take', text: 'Which jobs can AI agents take for a solopreneur or freelancer?' },
    {
      kind: 'p',
      text: 'The jobs that fit are repeat jobs with a clear rule, done on the phone, in an inbox or in a portal. Seven that a freelancer or small firm can hand over, each with the number you can watch. The [AI agent use cases for business](/blog/ai-agent-use-cases-for-business) guide covers more.',
    },
    {
      kind: 'list',
      items: [
        '**Answering every enquiry.** The agent reads each email or form from its own address, answers from your prices and hours, and books a call. Watch the time to first reply and the share of enquiries that book.',
        '**Texting back missed calls.** A caller you could not take gets a text within seconds, with their question answered. Watch calls that ended with a booking.',
        '**Following up.** Each lead and each quote gets a next message on the day you set. Watch quotes that turn into jobs.',
        '**Chasing documents.** The agent emails and texts clients until the bank statements or forms arrive, and checks each file against your list. Watch days from request to complete file.',
        '**Chasing invoices.** Reminders go out at 7, 14 and 30 days from the agent’s own address, signed as an AI assistant, and a person approves the awkward ones. Watch the share of invoices paid within 30 days.',
        '**Booking and reminding.** The agent confirms appointments, moves them and offers no-shows a new time. Watch no-shows a week.',
        '**Checking and watching.** It signs in to a supplier portal, a competitor’s site or a client’s account with a login you provide, and reports what changed. Watch hours you no longer spend on checks.',
      ],
    },
    {
      kind: 'p',
      text: 'Entrepreneurs with an idea can sell the same jobs to other businesses. Each of these jobs is a service that other small firms pay a person to do today, so a founder can run it for 20 clients, then 200, with the same setup.',
    },

    { kind: 'h2', id: 'jobs-you-keep', text: 'Which jobs should stay with the founder?' },
    {
      kind: 'p',
      text: 'An agent does what a rule can describe. Keep these with you, and set the agent to hand them over with a draft:',
    },
    {
      kind: 'list',
      items: [
        '**Prices, discounts and refunds.** The agent can draft the answer. You approve anything that costs money.',
        '**Advice and judgement.** Whether to take a client, how to fix a problem and what to recommend is the part clients pay you for.',
        '**Difficult conversations.** A complaint, a late payment dispute or bad news goes to you, with the thread attached.',
        '**Legal, medical and financial advice** that your licence or insurance covers.',
        '**Anything that cannot be undone,** such as a payment, a deletion or a first email to someone new, unless you have checked the rule.',
      ],
    },

    { kind: 'h2', id: 'a-week', text: 'What does a week look like for a business of one?' },
    {
      kind: 'p',
      text: 'One Tuesday at Marlowe Books (the log at the top), an invented bookkeeping business with 200 clients. Three agents run it, one for enquiries, one for documents and one for invoices, each with its own inbox and one shared phone number. The founder’s week then runs like this:',
    },
    {
      kind: 'list',
      items: [
        '**Monday, 20 minutes.** Read the weekend summary: 61 enquiries answered, 14 bookings, 5 items for the founder.',
        '**Tuesday to Thursday, 15 minutes a day.** Approve the drafts the agents hold back, mostly refunds and late payers, then take the booked calls.',
        '**Friday, 30 minutes.** Check the event log: every email, text and call the agents handled, with the message behind it, and change a rule where an answer was off.',
        '**The rest of the week.** Client work, which is what the business sells.',
      ],
    },
    {
      kind: 'p',
      text: 'Every step lands in one log, so a one person company can show a client exactly what was sent and when. That matters when a client says they never heard back.',
    },

    { kind: 'h2', id: 'cost', text: 'What does it cost a month, against hiring someone?' },
    {
      kind: 'p',
      text: 'Agents are billed by what each one uses (see also [AI voice agents for small business](/blog/ai-voice-agent-for-small-business)), so the cost follows the number of clients. These sums use Obsession’s list rates as published on 23 November 2026 and four assumptions for each client in a month: 10 emails, 4 texts, half a minute of calls, all spoken by the agent in its own voice, and 6 minutes of browser time.',
    },
    {
      kind: 'p',
      text: 'Model costs are billed on top, from $0.975 per million input tokens.',
    },
    {
      kind: 'table',
      caption: 'A month at list rates, before model tokens, for three sizes of business',
      cols: ['Piece (list rate)', '20 clients', '200 clients', '2,000 clients'],
      rows: [
        ['Inboxes ($0.50 each a month)', '1 = $0.50', '3 = $1.50', '3 = $1.50'],
        ['Phone number ($2 a month)', '1 = $2.00', '1 = $2.00', '1 = $2.00'],
        ['Emails ($0.40 per 1,000)', '200 = $0.08', '2,000 = $0.80', '20,000 = $8.00'],
        ['Texts ($0.015 each)', '80 = $1.20', '800 = $12.00', '8,000 = $120.00'],
        ['Calls ($0.012 a minute, plus $0.0676 a minute when the agent speaks, $0.0796 in all)', '10 min = $0.80', '100 min = $7.96', '1,000 min = $79.60'],
        ['Browser ($0.10 an hour)', '2 hours = $0.20', '20 hours = $2.00', '200 hours = $20.00'],
        ['Total', '$4.78', '$26.26', '$231.10'],
      ],
    },
    {
      kind: 'p',
      text: 'Texting US numbers also needs a registration: $25 once and $17 a month, fixed. At 200 clients the month is $26.26 plus $17, which is $43.26 before model tokens. The Free plan has 3 inboxes and a number that receives up to 50 texts and 30 call minutes a month but sends none, so an inbox agent costs nothing to start; texting back needs a paid plan.',
    },
    {
      kind: 'p',
      text: 'Texts are the biggest part of the bill. At 200 clients they are $12.00 of the $26.26, 46%, and at 2,000 clients $120.00 of $231.10, 52%. Cost per client works out at $0.24 at 20 clients, $0.13 at 200 and $0.12 at 2,000. The cheapest way to grow is to send each reminder by email first and text only the clients who have not replied.',
    },
    {
      kind: 'stat',
      value: '$48,310',
      label: 'Median yearly pay for a secretary or administrative assistant in the US in May 2025, about $4,026 a month before tax and benefits',
      source: 'US Bureau of Labor Statistics, Occupational Outlook Handbook, modified 27 August 2026',
      href: BLS,
    },
    {
      kind: 'p',
      text: 'A person is paid for the hours they work, which is a fixed amount a month whether there are 20 enquiries or 200. An agent is paid for what it does. Ten administrative assistants at that median cost $483,100 a year in wages, while 2,000 clients’ worth of agent pieces came to $231.10 a month, $2,773 a year, before model tokens. The two are not the same job: a person can use judgement and a relationship, while an agent runs the repeat steps at any hour. For a business of one the useful sum is how many of your own hours the repeat jobs take now, and what those hours earn at your client rate.',
    },

    { kind: 'h2', id: 'scale', text: 'How does a one person business grow from 20 clients to 2,000?' },
    {
      kind: 'p',
      text: 'Growth for a business of one comes from adding agents, not people. The same three agents serve more clients because each agent’s work is a set of rules and a log, and rules do not need to be hired. At 20 clients one agent can cover enquiries and follow-ups. At 200 you add the document and invoice agents. At 2,000 you add a persona for each client group or each location, each with its own inbox and number, and the founder reads summaries and exceptions instead of threads.',
    },
    {
      kind: 'p',
      text: 'The founder’s time moves with it. Writing the rules is the work at 20 clients. Approving exceptions is the work at 200. At 2,000 it becomes reviewing the log and the rules, and hiring a first person for the judgement jobs the agents hand over.',
    },

    { kind: 'h2', id: 'options', text: 'Which tools can a solo founder use to run a business with AI?', compare: true },
    {
      kind: 'p',
      text: 'Four routes cover most one person companies, and [no-code AI agents](/blog/no-code-ai-agents) compares the builders in depth. Each is described from its own pages as listed on 23 November 2026.',
    },
    {
      kind: 'table',
      caption: 'Ways a business of one hands work to AI, as listed on 23 November 2026',
      compare: true,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'ChatGPT and Claude: assistants',
          'Drafting, research and analysis in a chat. Claude lists connectors on every plan and Claude in Chrome on Pro; ChatGPT lists scheduled tasks on paid plans.',
          'ChatGPT: Free, then paid plans per user a month.\nClaude: Free; Pro $17 a month billed yearly or $20 monthly; Max $100.',
          'Neither page lists an agent with its own phone number and inbox, so a client still reaches you.',
          'Writing, thinking and one-off tasks.',
        ],
        [
          'Zapier: a no-code builder',
          'Connecting your apps and building agents that act through them.',
          'Free: 100 tasks and 400 agent activities a month.\nPro from $19.99 a month billed yearly for 750 tasks.',
          'It acts through your own apps; a client-facing number and inbox for the agent are a separate setup.',
          'Teams already running Zaps.',
        ],
        [
          'A virtual assistant or employee',
          'Judgement, relationships and unusual cases.',
          'Median US pay for an administrative assistant: $48,310 a year, before tax and benefits.',
          'Works set hours; each added client adds hours.',
          'Work that needs a person’s judgement.',
        ],
        [
          'Obsession (ours): the agents’ inbox, number and browser, run as blueprints',
          'Agents with their own inbox, number and browser that answer, text, call and sign in, run from a blueprint or a job you describe.',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'It follows the rules you set and hands the rest to you.',
          'Founders who want client-facing jobs done every day with no code.',
        ],
      ],
    },
    {
      kind: 'p',
      text: `Prices and plans as each provider lists them on its own page, read 23 November 2026: [ChatGPT](${CHATGPT}), [Claude](${CLAUDE}) and [Zapier](${ZAPIER}).`,
    },

    { kind: 'h2', id: 'obsession', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. For a business of one, four pieces carry these jobs. The **inbox** is a real address the agent owns: it sends and receives, keeps each thread and passes every new email to your own system. The **phone number**, US or UK, sends and receives texts, takes and makes calls and receives sign-in codes, with texts sent from the agent’s own number in your business’s name. The **browser** keeps its logins between runs, so the agent signs in once with the logins you give it and stays signed in. A **sandbox** starts only when a task needs to run code, such as reading a spreadsheet.',
    },
    {
      kind: 'p',
      text: 'A persona puts those pieces under one identity: one name, one address, one number, one browser profile. A client who emails and then calls reaches the same agent with the whole history, and a sign-in code texted to the number reaches the agent whose browser is waiting at the login page. For a one person company that means a persona for each job, or for each client group, and each answers a new message in about 50 milliseconds. A waiting persona costs nothing; its number ($2) and inbox ($0.50) bill monthly.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in one event log, dated, with the email, screenshot or recording behind it. For you that is a morning summary in Slack or email, and proof for a client who says nobody replied.',
    },
    {
      kind: 'p',
      text: 'The usual route is four vendors: an email service, a phone and texting service, a cloud browser and a sandbox, each with its own key, bill, webhook (a message to your own system) and log. A solo founder then keeps four integrations working, and jobs break at the seams, such as the code arriving at one vendor while the browser waits at another. If a job needs one piece, one specialist can be enough. The [side-by-side of AgentMail, Twilio, Browserbase and E2B against every piece on one API](/compare/agentmail-twilio-browserbase-e2b) and [the AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack) set it out.',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. Pick a ready-made blueprint such as the inbox agent, or describe your own job in plain words and Obsession sets up an agent to run it. That works for one agent for a freelancer and for ten thousand, each with its own identity and paid for by what each one uses.',
    },
    {
      kind: 'p',
      text: 'The same persona can also do other jobs once it has its own number, inbox and browser:',
    },
    {
      kind: 'list',
      items: [
        'Check each client’s supplier or utility portal monthly, with a login they give you, and report what changed.',
        'Text clients a reminder the day before every deadline and book the follow-up when they reply.',
        'Subscribe to 200 competitors’ newsletters in your niche and send clients a weekly digest.',
      ],
    },
    {
      kind: 'cta',
      text: 'Describe the job in your own words, and Obsession sets it up as a blueprint and runs it on agents that have their own inbox, number and browser.',
      to: '/no-code',
      label: 'Start free',
    },
    {
      kind: 'cta',
      text: 'Run an agent that answers every email from its own address, and hands refunds and anything unusual to you with a draft.',
      to: '/blueprints/inbox-agent',
      label: 'See the blueprint',
    },
    {
      kind: 'cta',
      text: 'Found a job clients keep asking for? Describe it once, and Obsession runs it for every client.',
      to: '/no-code',
      label: 'Describe your job',
    },

    { kind: 'h2', id: 'goes-wrong', text: 'What goes wrong, and how to start small?' },
    {
      kind: 'list',
      items: [
        '**An answer is wrong.** The agent answers from the prices and hours you give it, so an out-of-date price list produces out-of-date replies. Update the list the day a price changes, and read Friday’s log for answers that were off.',
        '**A client wants a person.** Set the agent to hand over at once when anyone asks, with the thread attached.',
        '**A text goes to the wrong person.** Send only to numbers clients gave you, and let STOP end the messages.',
        '**Too much at once.** Start with one job for one group of clients, such as the inbox agent on your enquiries for a week. Watch time to first reply and bookings, then add the next job.',
      ],
    },

    { kind: 'h2', id: 'rules', text: 'Which rules should every agent keep?' },
    {
      kind: 'list',
      items: [
        '**It says it is an AI** to anyone it speaks to.',
        '**It texts and calls only people who gave the business their number.**',
        '**It signs in only with logins you provide.**',
        '**It stops at any identity check,** and before payment unless you give it your card.',
        '**It never gets round a CAPTCHA or a bot block.**',
        '**Every step lands in the event log,** with the email, screenshot or recording behind it.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about running a one person company with AI' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can one person run a business with AI agents?',
          a: 'Yes, for the repeat jobs. Agents can answer enquiries, text back missed calls, chase documents and invoices, book appointments and check portals every day. The founder keeps prices, advice and difficult conversations, and approves anything that cannot be undone.',
        },
        {
          q: 'What are the best AI agents for solopreneurs and freelancers?',
          a: 'It depends on the job. Chat assistants such as ChatGPT and Claude suit writing and research. A builder such as Zapier suits connecting apps you already use. For jobs that need an agent with its own inbox and phone number, such as answering clients and chasing documents, Obsession runs blueprints with no code.',
        },
        {
          q: 'How much does it cost to run a one person business with AI agents?',
          a: 'At Obsession’s list rates on 23 November 2026, the pieces for 200 clients came to $26.26 a month before model costs, with US texting registration at $17 a month on top. Worked out with 10 emails, 4 texts, half a minute of spoken calls (calls $0.012 a minute, plus $0.0676 a minute when the agent speaks in its own voice) and 6 minutes of browser time per client. The Free plan costs $0 to start.',
        },
        {
          q: 'Which AI agents work for entrepreneurs who want to start a service business?',
          a: 'Agents that take a job other businesses pay people for, such as missed-call texting, appointment reminders or document chasing, suit a founder starting out. You run the blueprint for one client, then for more under your own brand.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'Will clients know they are talking to an AI?',
          a: 'Yes. Obsession’s agents say they are an AI to anyone they speak to, and they text and call only people who gave the business their number. A person can step in at any point.',
          link: { label: 'The agent rules', to: '/agents' },
        },
        {
          q: 'Do I need to know how to code?',
          a: 'No. You pick a blueprint or describe the job in plain words, and the agent is set up for you. Developers can build on the same pieces with the API.',
          link: { label: 'Describe your own job', to: '/no-code' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sums and the comparison',
      text: 'Obsession’s costs are list rates read on 23 November 2026, worked out with the stated per-client assumptions, and exclude model tokens. Other tools are described from their own pages on that date, and plans change often. Marlowe Books and its clients in the illustration are invented. A median wage describes a role, not what any one person is paid, and it leaves out employer costs.',
    },
  ],

  sources: [
    { title: 'Secretaries and administrative assistants', publisher: 'US Bureau of Labor Statistics', url: BLS, date: '2026-08-27' },
    { title: 'Pricing', publisher: 'OpenAI ChatGPT', url: CHATGPT, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Claude', url: CLAUDE, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Zapier', url: ZAPIER, date: '2026-11-23' },
  ],

  related: ['/no-code', 'recipe:inbox-agent', 'recipe:missed-call-text-back', 'what-can-ai-agents-do-for-business', 'no-code-ai-agents'],
}

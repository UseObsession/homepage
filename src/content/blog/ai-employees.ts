import type { BlogPost } from './types'

/* Track 1, guide 3 (_research/seo/agent-search-23nov/PLAN.md; 23 Nov 2026). Primary "ai employees for business".
   Readers: founders, small business owners and team leads who have used ChatGPT or Claude and want something that does
   a role, not just writes. Spine: how-to guide. Read on 23 November 2026, each on its own page: the US Bureau of Labor
   Statistics' customer service representatives page (median pay $44,770, May 2025 data, page modified 29 October 2026);
   Lindy, Relevance AI, Taskade and Marblism pricing pages (prices and wording as listed that day); the FCC's Declaratory
   Ruling FCC 24-17 (as quoted in /blog/can-ai-make-phone-calls). Obsession's rates are from src/content/prices.ts as read
   23 Nov 2026 (inbox $0.50 a month, emails $0.40 per 1,000, US number $2 a month, texts $0.015, calls $0.012 a minute,
   browser $0.10 an hour; US texting registration $25 once and $17 a month per campaign). The worked month for one AI
   employee: 0.50 + 2.00 + 0.40 + 3.00 + 1.20 + 6.76 voice + 2.00 = $15.86 before model tokens; 240 of them $3,806. Product lines as
   /agents states them. Larkfield Dental and Juno are invented. British English, no dashes. */

const BLS = 'https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm'
const LINDY = 'https://www.lindy.ai/pricing'
const RELEVANCE = 'https://relevanceai.com/pricing'
const TASKADE = 'https://www.taskade.com/pricing'
const MARBLISM = 'https://www.marblism.com/pricing'
const FCC_2024 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'

export const post: BlogPost = {
  slug: 'ai-employees',
  title: 'AI employees for business: what they do, what they cost and how to hire your first one',
  dek: 'An AI employee is an AI agent with a role, an inbox, a phone number, logins and a manager. Here is what it can do today, what a month costs against a hire, and the five steps to hire one.',
  metaTitle: 'AI employees for business: what they do and what they cost',
  description:
    'AI employees for business: the roles that work today, what one costs a month against a hire, and how to hire your first AI employee in five steps.',
  answer:
    'AI employees for business are AI agents given a job, their own inbox and phone number, logins to your tools, a schedule and a person who checks their work. Roles that work today are following up leads, answering a support inbox, reminding and booking appointments, chasing documents and researching accounts. At list rates one agent’s month of email, calls, texts and browsing comes to about $9.',
  primaryKeyword: 'ai employees for business',
  keywords: ['hire ai employees', 'hire your first ai employee', 'how to hire an ai employee', 'ai employee for sales', 'ai employee for marketing'],
  category: 'Talk to customers',
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
      title: 'One AI employee’s morning',
      who: 'Juno, AI front desk at larkfield-dental.example',
      rows: [
        { time: '08:00', text: 'email.received', detail: 'Patient asks to move Thursday’s check-up', tone: 'info' },
        { time: '08:01', text: 'email.sent', detail: 'Fri 10:30 or Mon 09:00 offered, signed as an AI assistant', tone: 'ok' },
        { time: '08:14', text: 'email.received', detail: '“Friday works”', tone: 'ok' },
        { time: '08:15', text: 'Booking changed', detail: 'Calendar updated · reminder text queued for Thu 17:00', tone: 'ok' },
        { time: '09:30', text: 'call.ended', detail: 'Missed form lead called back in 41 seconds · transcript saved', tone: 'ok' },
        { time: '09:45', text: 'Handed to Dana', detail: 'Insurance question outside its rules · draft attached', tone: 'late' },
      ],
      foot: 'Example: every email, call and hand-off lands in one event log. Larkfield Dental and Juno are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI employee is an AI agent that holds a role in your business, such as following up leads or answering the support inbox. It has its own email address and phone number, logins to the tools it works in, a schedule and a person who checks its work. A month of one agent’s work costs about $9 at list rates, against about $3,730 in wages for a median customer service hire.',
    },

    { kind: 'h2', id: 'what', text: 'What an AI employee is' },
    {
      kind: 'p',
      text: 'Vendors use “AI employee” for anything from a chat assistant to a team of agents, and no standard defines it. Five parts make an agent an employee. An agent missing one is an assistant that helps a person.',
    },
    {
      kind: 'list',
      items: [
        '**A role:** one written job, such as “reply to every new lead within a minute”.',
        '**An identity:** its own email address and phone number, so customers deal with it directly and every thread belongs to it.',
        '**Access:** logins to the tools the job needs, such as your calendar, CRM or a supplier’s portal.',
        '**A schedule:** it works on its own, every day, and wakes when an email, call or form arrives.',
        '**A manager:** a named person who sets its limits, reads its log and takes what it hands over.',
      ],
    },
    {
      kind: 'p',
      text: 'ChatGPT or Claude in a chat window has none of these. It answers when you type and stops when you close the tab. An AI employee keeps going between your messages, which is the difference between getting a draft and getting the work done.',
    },

    { kind: 'h2', id: 'roles', text: 'Roles that work today' },
    {
      kind: 'p',
      text: 'Agents do well where the job is repeated, has clear rules and leaves a record. Five roles meet that test, and each has a ready-made version.',
    },
    {
      kind: 'list',
      items: [
        '**Lead follow-up.** Calls or texts every new form lead within a minute and books the visit. [Speed-to-lead callback](/blueprints/speed-to-lead-callback) does this from its own number.',
        '**Support inbox.** Answers every email from your help pages and rules, and hands the rest to a person with a draft. [Inbox agent](/blueprints/inbox-agent) runs on an address of its own.',
        '**Scheduling.** Confirms, moves and reminds, by text and email. [Appointment reminders](/blueprints/appointment-reminders) covers the reminder side.',
        '**Chasing documents.** Asks each applicant, supplier or client for what is missing until the file is complete. [Document chaser](/blueprints/document-chaser) checks each file when it arrives.',
        '**Research.** Reads websites in a browser, saves a screenshot of each finding and reports back, such as a competitor’s prices or a prospect’s open roles.',
      ],
    },
    {
      kind: 'h3',
      id: 'sales',
      text: 'An AI employee for sales',
    },
    {
      kind: 'p',
      text: 'Sales leaders measure reply rates, meetings booked and opportunities, and an AI employee moves the first two. It researches each account, writes the first email, answers replies and offers meeting times, and it calls inbound leads in the first minute. [How to build an AI SDR](/blog/how-to-build-an-ai-sdr), a sales development rep who books meetings, lists the six parts of that job. A person keeps the senior buyers and any new claim about the product.',
    },
    {
      kind: 'h3',
      id: 'marketing',
      text: 'An AI employee for marketing',
    },
    {
      kind: 'p',
      text: 'Marketing teams are measured on pipeline, conversion and what competitors are doing. The work agents do best here is watching and reporting: reading competitor pages and prices each morning, signing up to their emails and keeping each one dated. Writing a post needs only a model, so it needs no identity. The roles listed earlier that talk to customers need one.',
    },

    { kind: 'h2', id: 'limits', text: 'What an AI employee can’t do' },
    {
      kind: 'list',
      items: [
        '**Judge what isn’t written down.** It follows your rules. A refund exception or an upset customer goes to a person.',
        '**Pass an identity check or a CAPTCHA.** It stops there and tells its manager.',
        '**Spend your money.** It stops before payment unless you give it your card and a limit.',
        '**Be right every time.** A model can misread an email, so you read its log, especially in the first weeks.',
        '**Replace a relationship.** Your best customers still want a person, and the agent hands them over.',
      ],
    },

    { kind: 'h2', id: 'hire', text: 'How to hire your first AI employee' },
    {
      kind: 'p',
      text: 'Hiring an AI employee follows the same order as hiring a person. Write the job, give it a way to work, set limits, check the work and read the record.',
    },
    { kind: 'h3', id: 'step-job', text: 'Step 1: write the job' },
    {
      kind: 'p',
      text: 'Pick one job from the roles listed earlier and write it as you would for a new starter: what starts it, what done looks like and what it never does. “Reply to every new website enquiry within a minute, book a visit, and pass anything about insurance to Dana” is a complete job. The step passes when a stranger could read it and know what the agent will do.',
    },
    { kind: 'h3', id: 'step-identity', text: 'Step 2: give it an identity and access' },
    {
      kind: 'p',
      text: 'Give the agent its own email address and phone number, then connect only the tools the job needs, such as the calendar, the CRM or one portal login. Use logins you create for it, so you can switch them off without touching anyone’s own account. The step passes when the agent can complete the job on one test case.',
    },
    { kind: 'h3', id: 'step-limits', text: 'Step 3: set its limits' },
    {
      kind: 'p',
      text: 'Decide what it may do alone and what goes to a person. Common limits are no refunds, no pricing changes, no legal answers and no calls outside 08:00 to 21:00 in the customer’s time zone. Give it a named manager to hand over to.',
    },
    { kind: 'h3', id: 'step-check', text: 'Step 4: check its work' },
    {
      kind: 'p',
      text: 'For the first two weeks, read every thread it handles. Then read a daily sample. Track the numbers you already use for the job: time to first reply, bookings made, files completed and hand-offs. Widen its rules when a week passes with no corrections.',
    },
    { kind: 'h3', id: 'step-log', text: 'Step 5: read its log' },
    {
      kind: 'p',
      text: 'Every email, call, text and page the agent touches should be recorded with its time, so you can see what it said and why. On Obsession each lands in one event log, with the email, screenshot or recording behind it. A person reads it weekly, as they would review any new hire.',
    },
    {
      kind: 'cta',
      text: 'Describe the job in your own words and Obsession sets it up as a blueprint, with its own inbox, number and browser, and runs it for you.',
      to: '/no-code',
      label: 'Describe your job',
    },

    { kind: 'h2', id: 'wrong', text: 'What goes wrong, and how to catch it' },
    {
      kind: 'p',
      text: 'Most problems with a new AI employee show up in its log in the first weeks. Five are common:',
    },
    {
      kind: 'list',
      items: [
        '**A confident wrong answer.** It states a price or policy your pages don’t support. Fix it by naming the source pages it may quote and handing everything else over.',
        '**A broken login.** A password expires or a portal adds a code, and the agent stops. Use logins made for it, and have it tell its manager when one fails.',
        '**An unregistered text.** US business texts need registration first, or carriers block them. Register before the first send.',
        '**Calls out of hours.** An agent that ignores time zones wakes a customer. Set calling hours in its rules.',
        '**Two bots in a loop.** An auto-reply answers your agent, which answers back. Cap replies per thread and stop on auto-replies.',
      ],
    },

    { kind: 'h2', id: 'cost', text: 'What an AI employee costs against a hire' },
    {
      kind: 'p',
      text:
        'The US Bureau of Labor Statistics reports a [median annual pay of $44,770 for customer service representatives](' +
        BLS +
        '), from May 2025 data. That is about $3,730 a month in wages, before benefits, equipment and management time.',
    },
    {
      kind: 'p',
      text: 'An AI employee’s cost is what it uses. Obsession’s list rates are $0.50 a month for an inbox and $2 for a US or UK number. Emails are $0.40 per 1,000, texts $0.015 each, calls $0.012 a minute, plus $0.0676 a minute when the agent speaks in its own voice (about $0.08 a spoken minute in all), and the browser $0.10 an hour. Take one agent that handles 1,000 emails, 200 texts and 100 call minutes a month that it speaks on, with 20 hours of browsing. A call it only forwards to a person would carry just the $0.012.',
    },
    {
      kind: 'table',
      caption: 'Example inputs for one AI employee, at Obsession list prices as listed on 23 November 2026, in US dollars, before model tokens and before US texting registration',
      cols: ['Part', 'Use', 'A month'],
      rows: [
        ['Inbox', '1', '$0.50'],
        ['US number', '1', '$2.00'],
        ['Emails', '1,000', '$0.40'],
        ['Texts', '200', '$3.00'],
        ['Call minutes, $0.012 a minute', '100', '$1.20'],
        ['Agent’s own voice, $0.0676 a minute', '100', '$6.76'],
        ['Browser hours', '20', '$2.00'],
        ['Total', 'One agent', '$15.86'],
      ],
    },
    {
      kind: 'p',
      text: 'The same month across 240 clinics, each with its own agent and identity, is $3,806 at list rates. Staffing 240 front desks at that median wage would be about $10.7 million a year. A paid plan’s fee covers that much usage at list rates, and model tokens are billed per million on top, or not at all if you bring your own model key. US texting has a registration fee of $25 once and $17 a month per campaign, outside plans. These are example inputs for the sum, so replace them with your own volumes.',
    },

    { kind: 'h2', id: 'compare', text: 'AI employee products compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      caption: 'Options as listed on 23 November 2026. Prices are US dollars, and several lines mean several plans',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      compare: true,
      rows: [
        ['A person hired', 'Judgement, relationships and anything unwritten', 'Median $44,770 a year for customer service (BLS)', 'Works set hours and costs benefits and management time', 'Roles that need trust'],
        ['Lindy: a teammate across your tools', 'Works in Slack, over iMessage and on your inboxes, with 40+ skills and scheduled routines', 'Free with $50 credits for 7 days\nTeam from $29.99 per user a month', 'Phone calls aren’t listed on its pricing page', 'Staff who want an assistant in their tools'],
        ['Marblism: seven named AI employees', 'A receptionist, lead generation, executive assistant and others', '$24 a month billed yearly, $44 monthly', 'A fixed team, with 50 hours of work a month', 'Solo owners wanting a ready team'],
        ['Taskade: AI agents with roles and tools', 'Agents with their own role, tools and knowledge, in a workspace', 'Free\nStarter $6, Pro $10, Business $25 a month billed yearly', 'Its pricing page lists plans, users and AI credits, with no phone numbers', 'Teams organising work with agents'],
        ['Relevance AI: an AI workforce', 'Calling and meeting agents, evaluations and unlimited agents', 'Enterprise, by talking to sales', 'No public price', 'Larger companies replacing headcount'],
        ['Obsession (ours): the pieces and blueprints', 'Each agent gets its own phone number, inbox and browser; ready blueprints for follow-up, inboxes and chasing', 'Free, then $20, $99 or $499 a month; usage per piece', 'Runs the jobs you give it; people keep judgement calls', 'One agent or one per location, with no code'],
      ],
    },
    {
      kind: 'p',
      text: `Prices and plans as each provider lists them on its own page, read 23 November 2026: [Lindy](${LINDY}), [Marblism](${MARBLISM}), [Taskade](${TASKADE}) and [Relevance AI](${RELEVANCE}).`,
    },
    {
      kind: 'p',
      text: 'Pick a workspace product if the agent lives inside your team’s tools. Pick one with its own phone number, inbox and browser if it has to deal with customers and other companies directly. Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. Run one for a freelancer’s practice, or one for every front desk at 240 clinics, each with its own identity and paid for by what it uses.',
    },
    {
      kind: 'cta',
      text: 'Ready-made jobs for the roles above, each running on its own inbox, number and browser, with every step in your event log.',
      to: '/blueprints',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'legal', text: 'The legal points to know' },
    {
      kind: 'p',
      text: 'This is general information, not legal advice. Three points come up for every AI employee that talks to people.',
    },
    {
      kind: 'list',
      items: [
        '**It says it’s an AI.** Several places require this when a customer could mistake it for a person, and a few require a truthful answer if asked. [Chatbot disclosure laws](/blog/chatbot-disclosure-laws) lists them from the official texts. Every Obsession agent says it’s an AI to anyone it speaks to.',
        '**You answer for what it does in your name.** A message from your agent is a message from your business, so set limits and read the log as you would for a new hire.',
        `**Calls and texts need consent.** In February 2024 the FCC ruled that AI-generated voices count as “artificial” voice under the US Telephone Consumer Protection Act ([FCC 24-17](${FCC_2024})), so the consent rules for robocalls apply. Obsession agents text and call people who gave the business their number. [Can AI make phone calls](/blog/can-ai-make-phone-calls) covers the rules by country.`,
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'One identity for the employee, every piece its job needs' },
    {
      kind: 'p',
      text: 'An AI employee that deals with customers needs four pieces. An **inbox** is a real address the agent owns: it sends and receives, keeps each thread and calls your webhook, a message to your own system, on every new email. A **phone number**, US or UK, sends and receives texts and calls, and receives sign-in codes, with texts going out from the agent’s own number in your business’s name. A **browser** runs in the cloud and keeps its logins between runs, so the agent signs in once with the logins you give it and stays signed in. A **sandbox** is a computer started only when a task needs to run code, such as reading a spreadsheet.',
    },
    {
      kind: 'p',
      text: 'A persona puts those pieces under one identity: one name, one address, one number and one browser profile. That is the employee’s identity in practice. A sign-in code sent by text reaches the same agent whose browser is waiting at the login page. A customer who emails and then rings reaches the same agent, with the whole history. A persona costs nothing while it waits, apart from its number and inbox, and it answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'p',
      text: 'The event log is how the manager checks the work. Every email, text, call and page the agent touches lands there, dated, with the email, screenshot or recording behind it. Results can also go to Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent, so a morning summary or a record for a client needs no extra work.',
    },
    {
      kind: 'h3',
      id: 'one-platform',
      text: 'Why the pieces belong together',
    },
    {
      kind: 'p',
      text: 'The usual route is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox. Each has its own key, bill, webhook and log, so you keep four integrations working. A job breaks at the seams, such as a code arriving at one vendor while the browser waits at another, or the call log and the email thread living in different places. If your job needs one piece, a single specialist can be enough. [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) sets the options side by side, and [the guide to the AI agent stack](/blog/ai-agent-infrastructure-stack) shows how an email API, a phone API, a browser and a sandbox fit together.',
    },
    {
      kind: 'h3',
      id: 'two-ways',
      text: 'Run it with no code, or with the API',
    },
    {
      kind: 'p',
      text: 'With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up the agent. Developers call the API, the SDKs or MCP, the standard way AI agents call tools, and can run `personas.create` to give an employee its identity in one call.',
    },
    {
      kind: 'p',
      text: 'Once an agent has its own number, inbox and browser, three more roles open up. It can answer a new tenant’s first questions, collect a supplier’s overdue invoices from their portal, or ring every customer whose delivery slipped to rebook it. Each stays inside the agent rules: it says it’s an AI and stops at any identity check.',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI employees' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are AI employees for business?',
          a: 'AI employees are AI agents that hold a role in a business. Each has a written job, its own email address and phone number, logins to the tools it uses, a schedule and a person who checks its work. They run on their own between your messages, which separates them from a chat assistant.',
        },
        {
          q: 'How do I hire my first AI employee?',
          a: 'Write one job, give the agent its own inbox, number and the logins it needs, and set what it may do alone. Read every thread it handles for two weeks, then a daily sample, and read its event log weekly. Start with a job that repeats and has clear rules, such as following up new leads.',
          link: { label: 'Describe your job', to: '/no-code' },
        },
        {
          q: 'Can an AI employee replace a person?',
          a: 'It can take over repeated, rule-based work such as replies, reminders and chasing documents. People keep judgement, relationships and anything that isn’t written down. Most businesses start by giving an agent one task from a role and widen it as the log shows its replies and bookings were right.',
        },
        {
          q: 'How much does an AI employee cost a month?',
          a: 'It depends on use. At Obsession list rates, one agent handling 1,000 emails, 200 texts, 100 spoken call minutes and 20 browser hours costs about $15.86 a month before model tokens. A median customer service hire in the US is paid $44,770 a year in wages, according to the Bureau of Labor Statistics.',
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Is there an AI employee for sales?',
          a: 'Yes, for parts of the job. An agent can research accounts, write the first email, answer replies, offer meeting times and call inbound leads within a minute. A person keeps senior buyers, pricing and any new claim about the product.',
          link: { label: 'Speed-to-lead callback', to: '/blueprints/speed-to-lead-callback' },
        },
        {
          q: 'Does an AI employee have to say it’s an AI?',
          a: 'Some jurisdictions require it, and a few require a truthful answer when asked. Obsession agents say they are an AI to anyone they speak to, whatever the country, so one rule covers every customer.',
          link: { label: 'What every agent keeps to', to: '/agents' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'This is general information, not legal advice. Prices and plan wording are from each provider’s own pages as read on 23 November 2026 and change often. Larkfield Dental and Juno in the illustration are invented.',
    },
  ],

  sources: [
    { title: 'Customer Service Representatives', publisher: 'US Bureau of Labor Statistics, Occupational Outlook Handbook', url: BLS, date: '2026-10-29' },
    { title: 'Declaratory Ruling FCC 24-17', publisher: 'Federal Communications Commission', url: FCC_2024, date: '2024-02-08' },
    { title: 'Pricing', publisher: 'Lindy', url: LINDY },
    { title: 'Pricing', publisher: 'Marblism', url: MARBLISM },
    { title: 'Pricing', publisher: 'Taskade', url: TASKADE },
    { title: 'Pricing', publisher: 'Relevance AI', url: RELEVANCE },
  ],

  related: ['/use-cases/ai-agents-for-enterprise', 
    '/no-code',
    'recipe:speed-to-lead-callback',
    'recipe:inbox-agent',
    'recipe:document-chaser',
    'how-to-build-an-ai-sdr',
    'can-ai-make-phone-calls',
    'chatbot-disclosure-laws',
  ],
}

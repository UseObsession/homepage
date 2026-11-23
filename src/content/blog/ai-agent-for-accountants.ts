import type { BlogPost } from './types'

/* Agent search guide (_research/seo/agent-search-23nov/PLAN.md, by industry; Seun's "Yes, run the plan", 23 Nov 2026).
   Primary "ai agent for accountants". Read on their own pages on 23 Nov 2026: BLS accountants and auditors and
   bookkeeping clerks pages (May 2025 pay), CPA Practice Advisor's report of the Tax Season Survival Index (438 US
   accountants, published 26 May 2026), Accounting Today on TaxDome's move to per-client pricing (4 Nov 2026), Karbon
   pricing, Canopy pricing, Bill pricing. TaxDome's pricing page refused the fetch (403), so no TaxDome price is quoted.
   Obsession prices are from src/lib/pricing/pricing.json (read 23 Nov). Every input in the sums is a labelled example.
   Larch & Pine Accounting at larchpine.example is invented. British English. */

const BLS_ACC = 'https://www.bls.gov/ooh/business-and-financial/accountants-and-auditors.htm'
const BLS_BK = 'https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm'
const CPA_PA = 'https://www.cpapracticeadvisor.com/2026/05/26/78-of-tax-pros-say-that-tax-season-negatively-impacts-personal-professional-life/183912/'
const AT_TD = 'https://www.accountingtoday.com/news/taxdome-switches-from-per-seat-to-per-client-pricing'
const KARBON = 'https://karbonhq.com/pricing/'
const CANOPY = 'https://www.getcanopy.com/pricing'
const BILL = 'https://www.bill.com/pricing'
const GOVUK = 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt'
const FCC = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'
const ICO = 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/'

export const post: BlogPost = {
  slug: 'ai-agent-for-accountants',
  title: 'AI agent for accountants: chase documents, collect invoices and fetch portal files',
  dek: 'An AI agent for an accounting firm does the waiting: it asks clients for receipts and statements until they arrive, downloads files from portals, reminds clients of deadlines and chases late payments. What that work costs in staff time, and what an agent costs to run.',
  metaTitle: 'AI agent for accountants: chase documents, collect invoices',
  description:
    'An AI agent for accountants chases clients for documents by email and text, fetches portal files and collects late invoices. What it saves, what it costs.',
  answer:
    'An AI agent for accountants takes the waiting out of the practice: it chases clients for receipts, statements and signed forms by email and text until each arrives, downloads invoices and statements from portals with the logins the firm gives it, reminds clients of deadlines and chases late payments. At list rates the usage for a 120-client practice is under $10 a month, or about $26 with US texting registration, against about 40 staff hours of chasing.',
  primaryKeyword: 'ai agent for accountants',
  keywords: [
    'ai agent for accounting firm',
    'ai agent for accounts payable',
    'ai agent for accounts receivable',
    'best ai agent for accountants',
    'ai agent for bookkeepers',
  ],
  category: 'Work behind logins',
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
      title: 'larchpine.example · one Tuesday in March',
      who: 'An agent at Larch & Pine Accounting, an invented 3-person practice',
      rows: [
        { time: '08:00', text: 'Clients still owe bank statements', detail: 'Reminder emailed to each, with the list of what is missing', tone: 'info' },
        { time: '08:12', text: 'Client replied with statements', detail: 'Filed in the client folder, the missing one requested', tone: 'ok' },
        { time: '10:30', text: 'Supplier portal checked for 6 clients', detail: '6 invoices downloaded with the logins the firm gave it', tone: 'ok' },
        { time: '12:00', text: 'Text sent to 5 clients 3 days from a deadline', detail: 'Sent from the practice’s number, with how to stop', tone: 'ok' },
        { time: '15:20', text: 'Invoice 2087 is 14 days late', detail: 'Polite reminder emailed with the payment link', tone: 'late' },
        { time: '17:00', text: 'Morning list for the partner', detail: 'Who is complete and who is still missing something', tone: 'info' },
      ],
      foot: 'Example: Larch & Pine Accounting, its clients and every time here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent for accountants is software that does the follow-up work of a practice, start to finish, in the places it happens: a client’s inbox, a text thread, a supplier’s or bank’s portal. A chat assistant such as ChatGPT can draft the reminder. An agent sends it from the practice’s own address, waits for the reply, files what arrives and asks again. In a firm, that is the difference between a draft you still have to send and a document that turns up.',
    },
    {
      kind: 'p',
      text: 'For a bookkeeper or accountant, the cost is the hours: at 20 minutes of chasing per client a month, a 120-client practice loses 40 hours and a 2,000-client firm about 667, around $195,000 a year in wages at the US clerk median.',
    },

    { kind: 'h2', id: 'year', text: 'Where a practice’s hours go' },
    {
      kind: 'p',
      text: 'An accounting firm’s year has two shapes. Busy season, from January to the April filing deadline in the US, is a deadline race. Month-end is a smaller race every month for bookkeepers. Both wait on the same thing: clients who send what the firm needs late. A [survey of 438 US accountants](' + CPA_PA + '), run by an advisory firm and published in May 2026, found that 58% had more than half their clients send documents after 15 February. The sample may be self-selected, so treat it as a pointer.',
    },
    {
      kind: 'p',
      text: 'The waiting is work. Someone writes the reminder, sends it, notices the reply, checks the file against the list and writes again. Someone signs in to a bank, a supplier or a tax portal to download a statement. Someone rings the client who still owes an invoice. None of it needs a qualification, and all of it is done by people who do.',
    },
    {
      kind: 'stat',
      value: '$24.36',
      label: 'US median hourly pay for bookkeeping, accounting and auditing clerks, May 2025',
      source: 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook, read 23 November 2026',
      href: BLS_BK,
    },
    {
      kind: 'p',
      text: 'The same data puts accountants and auditors at a [median of $83,680 a year, or $40.23 an hour](' + BLS_ACC + '), and about 1.6 million people in the job in 2025. Wages are not the full cost of an hour, since they leave out payroll tax, software and space, so these sums understate it.',
    },
    {
      kind: 'p',
      text: 'The sum for your own practice: clients, times minutes a month spent chasing and fetching per client, times an hourly cost. At 120 clients and 20 minutes each, that is 40 hours a month, or about $974 at the clerk median. At 2,000 clients it is about 667 hours, or about $16,240. Replace the 20 minutes with your own count from a month of timesheets.',
    },

    { kind: 'h2', id: 'jobs', text: 'Six jobs an agent takes' },
    {
      kind: 'p',
      text: 'Each job needs a phone number, an inbox, a browser or all three. The agent’s own versions of those are what separate it from a chat window.',
    },
    {
      kind: 'p',
      text: '**1. Chase clients for documents.** At onboarding or the start of a cycle, the agent sends each client the list: receipts, bank statements, payslips, signed engagement letters. It reminds them by email, then by text, on a schedule you set (for example day 3, day 7 and 3 days before the deadline), answers “what do you need from me?” from your list and flags what still hasn’t come. When a file arrives it checks it against the list: 3 statements asked for, 2 received, October cut short. The [Document chaser](/blueprints/document-chaser) blueprint runs this.',
    },
    {
      kind: 'p',
      text: '**2. Download files from portals.** Supplier, utility, bank and software accounts make someone sign in to fetch each invoice or statement. The agent signs in with the logins the firm provides, downloads the PDF, and adds the vendor, amount and due date to a sheet. It stops at any identity check, never pays a bill and keeps its browser logged in between visits. The [Invoice collector](/blueprints/invoice-collector) blueprint runs this. Whether a portal allows a login held by the firm on a client’s behalf is the portal’s own rule, so check its terms first.',
    },
    {
      kind: 'p',
      text: '**3. Remind clients of deadlines.** A text three days before a filing date, with what is still missing, gets more answers than the same line in a long email. The agent sends it from the practice’s number, in the practice’s name, to clients who gave their number.',
    },
    {
      kind: 'p',
      text: '**4. Chase late payments (accounts receivable).** When a client’s invoice to the practice, or a client’s own customer invoice you manage, is 3 days late, the agent emails a polite reminder with the payment link, again at 14 and 30 days, and reports who replied. In the UK a business can charge [8% plus the Bank of England base rate](' + GOVUK + ') in statutory interest on a late commercial payment unless the contract sets a rate, so state your terms up front.',
    },
    {
      kind: 'p',
      text: '**5. Collect bills for payables (accounts payable).** For a client’s payables, the agent collects each supplier invoice from the inbox it owns or the supplier’s portal, reads the vendor, amount and due date into a sheet or your bookkeeping tool and flags a bill that is far above the last one. It does not approve or pay anything unless you give it your card, and a person approves.',
    },
    {
      kind: 'p',
      text: '**6. Send the morning list.** Every morning the partner gets one list: who is complete, who is missing what, who replied with a question. Each line links to the email or screenshot behind it.',
    },
    {
      kind: 'art',
      art: {
        kind: 'flow',
        title: 'One missing statement, chased',
        steps: [
          { label: 'Day 0 · email', detail: 'List sent: 3 bank statements', tone: 'info' },
          { label: 'Day 3 · email', detail: 'Reminder: 2 statements still missing', tone: 'late' },
          { label: 'Day 7 · text', detail: 'From the practice’s number, how to stop', tone: 'late' },
          { label: 'Day 8 · reply', detail: 'Client sends 2, one cut at the 14th', tone: 'info' },
          { label: 'Day 8 · email', detail: 'Full October statement asked for', tone: 'info' },
          { label: 'Day 10 · filed', detail: 'All 3 in the folder, partner told', tone: 'ok' },
        ],
        foot: 'Example: a client of Larch & Pine, an invented practice.',
      },
      caption: 'One client’s statements from the first request to the filed set. Every step lands in the log with the email or text behind it. This is an example.',
    },

    { kind: 'h2', id: 'cost', text: 'What it costs at list rates' },
    {
      kind: 'p',
      text: 'Obsession’s list rates as of 23 November 2026: inbox $0.50 a month, emails $0.40 per 1,000, a US or UK number $2 a month, texts $0.015 each, browser $0.10 an hour. The inputs are examples: each client gets 6 emails and 3 texts a month in busy season, and the agent visits 1 portal per 3 clients weekly for 3 minutes.',
    },
    {
      kind: 'table',
      caption: 'Monthly usage at list rates for two sizes of practice, before the plan fee and model tokens. Inputs are examples',
      cols: ['Line', '3-person practice, 120 clients', 'Firm with 2,000 clients'],
      rows: [
        ['Emails (6 per client)', '720 emails: $0.29', '12,000 emails: $4.80'],
        ['Texts (3 per client)', '360 texts: $5.40', '6,000 texts: $90'],
        ['Inboxes and numbers', '1 inbox and 1 number: $2.50', '10 inboxes and 2 numbers: $9'],
        ['Browser (portal visits)', '40 portals, weekly: about 9 hours, $0.86', '667 portals, weekly: about 144 hours, $14.44'],
        ['Usage in total', 'About $9', 'About $118'],
        ['Staff time it replaces (BLS clerk median)', '40 hours, about $974', 'About 667 hours, about $16,240'],
      ],
    },
    {
      kind: 'p',
      text: 'In the US, the fixed cost of texting is registration, not usage: $25 once and $17 a month per campaign, and it counts toward a plan’s covered usage. Each business that texts needs its own campaign, so a firm texting for several entities should plan for that. A paid plan’s fee covers usage at list rates: Developer’s $20 covers $20, Startup’s $99 covers $111 and Scale’s $499 covers $588. The Free plan has 3 inboxes and a number that receives up to 50 texts and 30 call minutes a month but sends none, so chasing on Free runs by email. For the 120-client practice, usage plus registration is about $26 a month, which Developer’s $20 mostly covers. For the 2,000-client firm it is about $135, which Startup’s $111 covers with about $24 over, so about $123 a month. Model tokens come on top and stay small at these volumes. See [10DLC registration](/blog/10dlc-registration) for the steps.',
    },

    { kind: 'h2', id: 'compared', text: 'The best AI agent for accountants, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its own pages as read on 23 November 2026. Practice management tools are strong at tracking work, portals and workflows inside one system. A person is strong at judgement. An agent with its own number, inbox and browser is strong at the follow-up that happens outside any one system.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Options for chasing and collecting, from each provider’s own pages as read on 23 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          `Karbon: [practice management](${KARBON})`,
          'Client requests, email and inbox triage in one workspace for the team',
          '$59 per user a month billed annually, $79 monthly (Team)\n$89 billed annually, $99 monthly (Business; check which plan includes automatic client reminders)',
          'Works inside Karbon and its email; no phone number or portal browsing of its own',
          'Firms that want one place for work and requests',
        ],
        [
          `Canopy: [practice management](${CANOPY})`,
          'Client portal with secure messaging, client requests and automated reminders',
          '$74, $109 or $149 per user a month billed annually (Standard, Plus, Premium)',
          'The page doesn’t say which plan includes each feature; confirm with Canopy. Reminders go through Canopy’s tools, and it doesn’t fetch files from other portals',
          'Firms that want a branded client portal',
        ],
        [
          `TaxDome: [practice management](${AT_TD})`,
          'Client portal, document requests and workflows for accounting firms',
          'Moving from per-seat to per-client pricing from January, as Accounting Today reported on 4 November 2026; check the page for the figure',
          'Works inside TaxDome; a client must use the portal or answer its emails',
          'Firms that want one system for clients and work',
        ],
        [
          `Bill: [AP and AR automation](${BILL})`,
          'Bill pay, invoice approval and automated payment reminders',
          '$49, $65 or $89 per user a month (Essentials, Team, Corporate); an AP & AR Partner plan for accounting firms at a flat $49 a month; payment fees per transaction',
          'Moves money and invoices inside Bill; it doesn’t chase a client for a bank statement or fetch from other portals',
          'Payables and receivables workflows',
        ],
        [
          `A person: [BLS clerk median](${BLS_BK})`,
          'Judgement, relationships and one-off requests',
          '$24.36 an hour, US median for bookkeeping, accounting and auditing clerks, May 2025',
          'Working hours, one task at a time; the follow-up queue grows in busy season',
          'Work that needs a person',
        ],
        [
          'Obsession (ours): [Phone](/phone), [Email](/email), [Browser](/browser), [blueprints](/blueprints)',
          'An agent with its own number, inbox and browser under one identity, chasing by email and text and fetching from portals, with every step in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Needs the logins and consent you give it, stops at any identity check and says it is an AI',
          'The follow-up that happens outside your practice software',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'These are not either-or. A firm can keep Karbon, Canopy or TaxDome as its system of record and let an agent do the chasing and the fetching that fill it. Requests inside a portal only work for clients who open the portal; a text from the practice’s own number reaches the rest.',
    },

    { kind: 'h2', id: 'identity', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. The jobs above use three pieces. The **inbox** is a real address the agent owns: it sends and receives, keeps each client’s thread and calls your webhook (a message to your own system) on every new email, so a file lands where you want it. The **phone number**, US or UK, sends and receives texts, makes and takes calls and receives sign-in codes; texts go out from that number in the practice’s name. The **browser** is a cloud browser whose sessions keep their logins between runs, so the agent signs in once with the logins you give it and stays signed in. A **sandbox**, a computer started only when a task needs to run code, reads a spreadsheet or a bank export when the job needs it.',
    },
    {
      kind: 'p',
      text: 'A **persona** puts those pieces under one identity: one name, one address, one number and one browser profile. For a practice, that matters twice. A portal’s sign-in code arrives by text at the same agent whose browser waits at the login page. A client who replies by email and then texts reaches the same agent, which already holds the whole history. A persona costs nothing while it waits (its number and inbox still bill monthly) and answers a new message in about 50 milliseconds without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in one event log, dated, with the email, screenshot or recording behind it. For a firm, that is a dated record of when each client was asked and what they were told, with the email or text itself to show a client who says nobody asked. Results reach Slack, email, a sheet, a CRM, a PDF report or a Claude agent.',
    },
    {
      kind: 'p',
      text: 'The usual build is a vendor for each piece: an email service, a phone and texting service, a browser service and a sandbox, each with its own key, bill, webhook and log. A firm then keeps four integrations working, and the jobs break at the seams: the code arrives at one vendor while the browser waits at another, and the text thread and the email thread live in different places. If a job needs only one piece, a single specialist can be enough. See the [side-by-side of the separate vendors against every piece on one API](/compare/agentmail-twilio-browserbase-e2b) and [the stack an AI agent runs on](/blog/ai-agent-infrastructure-stack). Our guide on [whether AI agents can log in to websites](/blog/can-ai-agents-log-in-to-websites) covers the portal side in depth.',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and starts the agent. A developer can use the [API, SDKs and MCP (the way AI tools connect to other software)](/developers) to create a persona in one call. One agent for one practice or one for each of 2,000 clients works the same way, each with its own identity, paid for by what it uses.',
    },
    {
      kind: 'p',
      text: 'Once an agent has its own number, inbox and browser, other jobs open up. It can text each client the week before a payment on account is due, collect payroll inputs from small-business clients on the 20th of each month, or check that each client’s supplier statements match the invoices it already downloaded.',
    },
    {
      kind: 'cta',
      text: 'Start with the client list that is slowest to arrive. Document chaser asks for each file by email and text, checks it and tells you who still owes what.',
      to: '/blueprints/document-chaser',
      label: 'See the blueprint',
    },
    {
      kind: 'cta',
      text: 'Fetching and collecting runs the same way: Invoice collector signs in to supplier portals with your logins, downloads each invoice and logs it.',
      to: '/blueprints/invoice-collector',
      label: 'See the blueprint',
    },
    {
      kind: 'cta',
      text: 'No blueprint for your practice’s job? Describe it in your own words and an agent is set up to run it, with no code.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },

    { kind: 'h2', id: 'rules', text: 'Rules for texting, calling and logging in' },
    {
      kind: 'p',
      text: 'This is general information, never legal advice. Your professional body and your regulator set their own rules on client contact and confidentiality.',
    },
    {
      kind: 'list',
      items: [
        '**Text and call clients who gave you their number.** A client who engaged you has done so. Don’t buy lists.',
        '**Say it’s an AI.** The agent tells anyone it speaks to that it is an AI assistant. The US Federal Communications Commission ruled in February 2024 that [AI-generated voices count as artificial voices](' + FCC + ') under the Telephone Consumer Protection Act, so calls to mobiles need the person’s consent first.',
        '**Keep marketing separate from service messages.** In the UK the ICO says you [must not send marketing emails or texts without specific consent](' + ICO + '). A reminder about a deadline is a service message; a promotion for another service is marketing.',
        '**Always give a way out.** Every text says how to stop, and a stop ends the messages.',
        '**Use only logins you provide.** The agent signs in with the logins you give it, stops at any identity check, stops before payment unless you give it your card and never gets round a CAPTCHA or a bot block.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI agents for accountants' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What can an AI agent do for an accounting firm?',
          a: 'It chases clients for receipts, statements and signed forms by email and text until each arrives, checks each file against your list, downloads invoices and statements from portals with the logins you give it, reminds clients of deadlines, chases late payments and sends the partner a morning list. A person keeps the judgement, advice and sign-off.',
        },
        {
          q: 'What is the best AI agent for accountants?',
          a: 'It depends on the job. Practice management tools such as Karbon, Canopy and TaxDome suit tracking work and client portals. Bill suits payables and receivables workflows. A person suits judgement. An agent with its own number, inbox and browser suits the follow-up outside your software: texting clients, fetching from portals and chasing.',
        },
        {
          q: 'Can an AI agent do accounts payable?',
          a: 'It can collect each supplier invoice from an inbox or a portal, read the vendor, amount and due date into a sheet and flag a bill far above the last one. It does not approve or pay unless you give it your card, and a person approves. Payment workflows suit a tool such as Bill.',
          link: { label: 'Invoice collector', to: '/blueprints/invoice-collector' },
        },
        {
          q: 'Can an AI agent do accounts receivable?',
          a: 'It can email a polite reminder with the payment link when an invoice is 3 days late, again at 14 and 30 days, and report who replied. In the UK, statutory interest on a late commercial payment is 8% plus the Bank of England base rate unless the contract sets another rate.',
          link: { label: 'Invoice collector', to: '/blueprints/invoice-collector' },
        },
        {
          q: 'Is there an AI agent for bookkeepers?',
          a: 'Yes. Bookkeepers spend month-end waiting on bank statements, receipts and supplier invoices, which an agent asks for, collects and logs each month. In the US, bookkeeping, accounting and auditing clerks earned a median of $24.36 an hour in May 2025, so 40 hours of chasing a month is about $974 in wages.',
        },
        {
          q: 'How much does an AI agent cost for an accounting firm?',
          a: 'On Obsession, usage for a 120-client practice sending 6 emails and 3 texts per client a month, with weekly portal visits, is about $9 at list rates, plus US texting registration of $25 once and $17 a month. Plans are Free, then $20, $99 or $499 a month, and a paid plan’s fee covers that much usage. Practice management tools listed $59 to $149 a user a month on 23 November 2026.',
        },
        {
          q: 'Is it safe to give an AI agent client logins?',
          a: 'The agent signs in only with logins you provide, stops at any identity check and never gets round a CAPTCHA or bot block. Every sign-in lands in the event log. Check each portal’s terms on shared or delegated logins and your professional body’s rules on client data first.',
        },
        {
          q: 'Can I use an AI agent without writing code?',
          a: 'Yes. Pick a blueprint, or describe the job in your own words, and Obsession sets up an agent to run it. Results can land in Slack, email, a sheet or your CRM.',
          link: { label: 'AI agents for teams who don’t write code', to: '/no-code' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices, examples and the law',
      text: 'Prices are as each provider listed them on 23 November 2026 in US dollars, and change; check each page. TaxDome’s price is not quoted because its page did not load on that date. Every input and cost in the sums is an example. Larch & Pine Accounting in the picture is invented. The rules are general information from the US and UK, never legal advice.',
    },
  ],

  sources: [
    { title: 'Bookkeeping, accounting and auditing clerks: Occupational Outlook Handbook', publisher: 'U.S. Bureau of Labor Statistics', url: BLS_BK, date: '2025-05' },
    { title: 'Accountants and auditors: Occupational Outlook Handbook', publisher: 'U.S. Bureau of Labor Statistics', url: BLS_ACC, date: '2025-05' },
    { title: '78% of tax pros say tax season negatively impacts personal and professional life', publisher: 'CPA Practice Advisor', url: CPA_PA, date: '2026-05-26' },
    { title: 'TaxDome switches from per seat to per client pricing', publisher: 'Accounting Today', url: AT_TD, date: '2026-11-04' },
    { title: 'Pricing', publisher: 'Karbon', url: KARBON, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Canopy', url: CANOPY, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Bill', url: BILL, date: '2026-11-23' },
    { title: 'Charging interest on a commercial debt', publisher: 'GOV.UK', url: GOVUK, date: '2026-11-23' },
    { title: 'Electronic mail marketing', publisher: 'Information Commissioner’s Office', url: ICO, date: '2026-11-23' },
    { title: 'Declaratory Ruling on AI technologies and robocalls (FCC 24-17)', publisher: 'Federal Communications Commission', url: FCC, date: '2024-02-08' },
  ],

  related: ['/use-cases/ai-agents-for-professional-services', '/no-code', 'recipe:document-chaser', 'recipe:invoice-collector', 'ai-agents-for-small-business', 'ai-agent-infrastructure-stack'],
}

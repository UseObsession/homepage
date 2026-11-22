import { plans, prices, registration } from '../prices'
import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /compare/agentmail-twilio-browserbase-e2b, the bundle page (obsession-seo Part 1, move 3; the 22 Nov plan, wave 1):
   four bills against one, piece by piece. Every vendor fact is from its own pricing page, read 22 Nov 2026 (AgentMail,
   Twilio's US SMS and US voice pages, Browserbase, E2B; first read 21 Nov in
   _research/commercial-view-21nov/research/A to C). Obsession's side is read from prices.ts, never retyped, so the
   worked month follows the price list. The month is an example: 1 inbox and 1,000 emails, 1 US number, 200 texts (half
   sent), 60 call minutes (half out), 10 browser hours, 10 sandbox hours at 1 vCPU and 1 GiB with the CPU busy. US
   texting registration is left out on both sides and said so. */

const AGENTMAIL = 'https://www.agentmail.to/pricing'
const TWILIO_SMS = 'https://www.twilio.com/en-us/sms/pricing/us'
const TWILIO_VOICE = 'https://www.twilio.com/en-us/voice/pricing/us'
const BROWSERBASE = 'https://www.browserbase.com/pricing'
const E2B = 'https://e2b.dev/pricing'

/* The example month on Obsession, at list rates. */
const MONTH = { inboxes: 1, emails: 1000, numbers: 1, texts: 200, minutes: 60, browserHours: 10, vcpuHours: 10, gibHours: 10, events: 2000 }
const line = {
  email: MONTH.inboxes * prices.inbox.value + MONTH.emails * prices.email.value,
  number: MONTH.numbers * prices.number.value,
  texts: MONTH.texts * prices.sms.value,
  calls: MONTH.minutes * prices.voice.value,
  browser: MONTH.browserHours * prices.browser.value,
  sandbox: MONTH.vcpuHours * prices.sandbox.value + MONTH.gibHours * prices.memory.value,
  log: MONTH.events * prices.log.value,
}
const usage = Object.values(line).reduce((a, b) => a + b, 0)
const dev = plans.find((p) => p.id === 'developer') ?? plans[1]
const freePlan = plans.find((p) => p.id === 'free') ?? plans[0]
const freeInboxes = freePlan.allowances.inbox ?? 0
const freeEmails = (freePlan.allowances.email ?? 0).toLocaleString('en-GB')
const fee = dev.monthly ?? 0
const covers = dev.covers ?? fee
const bill = Math.max(fee, fee + usage - covers)
/* Dollars as the site writes them: "$20", "$8.98". */
const usd = (n: number) => (Math.abs(n - Math.round(n)) < 0.005 ? `$${Math.round(n)}` : `$${n.toFixed(2)}`)

/* The same month at the four vendors (22 Nov 2026), worked by hand from their listed rates and rounded to the cent:
   AgentMail Free $0; Twilio $1.15 + 200 × $0.0083 + 30 × $0.014 + 30 × $0.0085 + carrier fees of $0.35 to $0.85;
   Browserbase Developer $20 (Free has 1 browser hour); E2B 36,000 seconds × ($0.000014 + $0.0000045). */
const FOUR = { agentmail: '$0', twilio: '$3.84 to $4.34', browserbase: '$20', e2b: '$0.67', total: '$24.51 to $25.01' }

export const ref: ReferencePage = {
  kind: 'compare',
  name: 'AgentMail, Twilio, Browserbase and E2B in one API',
  line: 'Four vendors give an agent an inbox, a number, a browser and a sandbox. Obsession puts all four on one key and one bill.',
  meta: {
    path: '/compare/agentmail-twilio-browserbase-e2b',
    title: 'AgentMail, Twilio, Browserbase and E2B in one API (2026)',
    description:
      'AgentMail, Twilio, Browserbase and E2B priced piece by piece, beside one API with all four pieces on one key and one bill. Dated, with a worked month.',
    answer: `An AI agent that needs an inbox, a phone number, a browser and a sandbox can get them from four vendors. AgentMail, Twilio, Browserbase and E2B each come with their own key, webhook and bill. Obsession is the toolkit for AI agents, with all four pieces on one API and one bill, under one identity. For one agent’s month worked out on this page, the four bills come to about ${FOUR.total} and Obsession’s to ${usd(bill)}.`,
    ogImage: '/og/compare-agentmail-twilio-browserbase-e2b.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Compare', path: '/compare' },
      { name: 'AgentMail, Twilio, Browserbase and E2B', path: '/compare/agentmail-twilio-browserbase-e2b' },
    ],
  },
  title: 'AgentMail, Twilio, Browserbase and E2B, or every piece on one API',
  dek: 'Four vendors give an agent an inbox, a number, a browser and a sandbox, on four keys and four bills. Obsession gives it all four on one key, one bill and one event log.',
  primaryKeyword: 'agentmail twilio browserbase e2b',
  keywords: ['agentmail and twilio', 'one api for ai agents', 'email phone browser sandbox for ai agents', 'agentmail pricing'],
  checked: '2026-11-22',
  readingMinutes: 6,
  reader: 'developers',
  art: {
    kind: 'report',
    title: 'agent@northwind.example',
    period: 'Example: Northwind is an invented company',
    cols: ['What the agent needs', 'Four vendors', 'Obsession'],
    rows: [
      { name: 'An inbox', cells: ['AgentMail', 'Email'], tone: 'info' },
      { name: 'A number, texts, calls', cells: ['Twilio', 'Phone'], tone: 'info' },
      { name: 'A cloud browser', cells: ['Browserbase', 'Browser'], tone: 'info' },
      { name: 'A sandbox', cells: ['E2B', 'Sandbox'], tone: 'info' },
      { name: 'API keys and webhooks', cells: ['4 of each', '1 of each'], tone: 'ok' },
      { name: 'Bills', cells: ['4', '1'], tone: 'ok' },
    ],
    notes: ['Each vendor’s row follows its own pricing page, read 22 November 2026.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-each-does', text: 'What each vendor does well' },
    { kind: 'h3', id: 'agentmail', text: 'AgentMail: email inboxes for AI agents' },
    {
      kind: 'p',
      text: `As listed on 22 November 2026, [AgentMail’s pricing page](${AGENTMAIL}) offers a Free plan with 3 inboxes, 1 custom domain and 3,000 emails a month, with no credit card. Developer is $20 a month for 10 inboxes and 10,000 emails. Startup is $200 a month for 150 inboxes, 10 seats and a SOC 2 report. Each extra inbox is $2 a month. Every plan includes its SDKs, webhooks, websockets and an MCP server, the standard way AI agents call tools.`,
    },
    { kind: 'h3', id: 'twilio', text: 'Twilio: phone numbers, texts and calls' },
    {
      kind: 'p',
      text: `As listed on 22 November 2026, [Twilio’s US SMS pricing](${TWILIO_SMS}) puts a local number at $1.15 a month. A text costs $0.0083 per segment, sent or received, and carrier fees add up to $0.005 a message. [Its US voice pricing](${TWILIO_VOICE}) lists calls at $0.014 a minute out and $0.0085 a minute in. A free trial gives $15 to buy a first number. Twilio lists A2P 10DLC registration fees for US business texting separately, and names HIPAA, SOC 2 and ISO/IEC 27001 among its certifications.`,
    },
    { kind: 'h3', id: 'browserbase', text: 'Browserbase: cloud browsers for agents' },
    {
      kind: 'p',
      text: `As listed on 22 November 2026, [Browserbase’s pricing page](${BROWSERBASE}) starts free with 1 browser hour and 3 concurrent browsers. Developer is $20 a month with 100 browser hours, then $0.12 an hour, and 1 GB of proxies, then $12 a GB. Startup is $99 a month with 500 hours, then $0.10 an hour, and 5 GB of proxies, then $10 a GB. It makes Stagehand, its framework for browser agents, and works with Playwright, Puppeteer and Selenium.`,
    },
    { kind: 'h3', id: 'e2b', text: 'E2B: sandboxes for agents' },
    {
      kind: 'p',
      text: `As listed on 22 November 2026, [E2B’s pricing page](${E2B}) bills a running sandbox by the second, at $0.000014 per vCPU and $0.0000045 per GiB of memory. That is about $0.05 a vCPU hour and $0.016 a GiB hour. Hobby is free with a one-time $100 usage credit and sessions up to 1 hour. Pro is $150 a month plus usage, with sessions up to 24 hours and 100 concurrent sandboxes. Its pages say more than 3 billion sandboxes have started.`,
    },
    { kind: 'h3', id: 'obsession', text: 'Obsession: every piece on one key and one bill' },
    { kind: 'p', text: ENTITY },
    {
      kind: 'p',
      text: 'One call, obsession.personas.create(), gives an agent an inbox, a US number and a browser under one identity. Every email, text, call, page and sandbox run comes back as an event to one webhook. Others give an agent one way in. Obsession gives it all of them, under one identity.',
    },

    { kind: 'h2', id: 'side-by-side', text: 'The four vendors and Obsession side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'Each vendor’s row is from its own pricing page, read 22 November 2026. Obsession’s row is from [pricing](/pricing) and [the rates](/pricing/rates).',
      cols: ['Option', 'What it does well', 'Price as listed', 'Where it stops', 'Best for'],
      rows: [
        [
          'AgentMail: email inboxes for AI agents',
          'Inboxes, threads, webhooks, MCP and SDKs',
          'Free: 3 inboxes, 3,000 emails\nDeveloper $20 a month\nStartup $200 a month',
          'Email only',
          'Agents that need an inbox and nothing else',
        ],
        [
          'Twilio: phone numbers, SMS and voice',
          'Numbers, texts and calls at any volume',
          'Number $1.15 a month\nText $0.0083, plus carrier fees\nCalls $0.014 out, $0.0085 in',
          'No cloud browser or sandbox',
          'A phone line at high volume',
        ],
        [
          'Browserbase: browsers, Stagehand, Search and Fetch',
          'Browser fleets and agent sessions',
          'Free: 1 browser hour\nDeveloper $20 a month, 100 hours\nStartup $99 a month, 500 hours',
          'No inbox or phone number described\nProxies billed per GB',
          'Browser-only agents at scale',
        ],
        [
          'E2B: sandboxes, Code Interpreter, Desktop',
          'Isolated machines, billed by the second',
          'Hobby: free, $100 one-time credit\nPro $150 a month plus usage',
          'Sessions up to 1 hour on Hobby, 24 on Pro\nNo inbox or phone number described',
          'Code that runs for long, busy sessions',
        ],
        [
          'Obsession (ours): email, phone, messaging, browser, sandbox, personas',
          'Every piece under one identity, with one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment and at any identity check',
          'Agents that need more than one piece',
        ],
      ],
    },

    { kind: 'h2', id: 'piece-by-piece', text: 'Prices piece by piece' },
    {
      kind: 'table',
      caption: 'Each vendor’s price is from its own page, read 22 November 2026. Obsession’s are its list rates on every plan.',
      cols: ['Piece', 'Separate vendor', 'Obsession'],
      rows: [
        ['Inbox', 'AgentMail: 3 on Free, 10 on Developer, then $2 a month each', `${prices.inbox.amount} ${prices.inbox.unit}, ${freeInboxes} on Free`],
        ['Emails', 'AgentMail: 3,000 a month free, 10,000 on Developer, then $2 a month per 1,000', `${prices.email.amount} ${prices.email.unit}`],
        ['Phone number', 'Twilio: $1.15 a month, US local', `${prices.number.amount} ${prices.number.unit}`],
        ['Texts', 'Twilio: $0.0083 sent or received, plus carrier fees', `${prices.sms.amount} ${prices.sms.unit}, carrier fees included`],
        ['Calls', 'Twilio: $0.014 a minute out, $0.0085 in', `${prices.voice.amount} ${prices.voice.unit}`],
        ['Browser hour', 'Browserbase: $0.12 on Developer, $0.10 on Startup, past the hours included', `${prices.browser.amount} ${prices.browser.unit}, home connection included`],
        ['Browser traffic', 'Browserbase: $12 a GB on Developer, $10 on Startup, past the GB included', 'No charge per GB'],
        ['Sandbox compute', 'E2B: $0.000014 a vCPU second while it runs, about $0.05 an hour', `${prices.sandbox.amount} ${prices.sandbox.unit}, billed only while the CPU works`],
        ['Sandbox memory', 'E2B: $0.0000045 a GiB second, about $0.016 an hour', `${prices.memory.amount} ${prices.memory.unit}`],
        ['US texting registration', 'Twilio: A2P 10DLC fees, listed separately', `${prices.register.amount} ${prices.register.unit}`],
        ['Accounts and bills', '4 accounts, 4 keys, 4 bills', '1 account, 1 key, 1 bill'],
      ],
    },

    { kind: 'h2', id: 'worked-month', text: 'One agent’s month, worked out' },
    {
      kind: 'p',
      text: 'The month is an example. One agent has an inbox that sends and receives 1,000 emails. It has a US number that sends 100 texts, receives 100, and makes and takes 30 minutes of calls each way. It browses for 10 hours and runs code for 10 hours on 1 vCPU and 1 GiB, with the CPU busy throughout. Each vendor is on its cheapest plan that covers the month.',
    },
    {
      kind: 'table',
      caption: 'From each vendor’s listed rates, 22 November 2026. US texting registration is left out on both sides.',
      cols: ['What the agent uses', 'Four vendors', 'Obsession at list rates'],
      rows: [
        ['1 inbox, 1,000 emails', `AgentMail Free: ${FOUR.agentmail}`, `${prices.inbox.amount} + ${prices.email.amount} per 1,000 = ${usd(line.email)}`],
        ['1 US number', 'Twilio: $1.15', usd(line.number)],
        ['200 texts, half sent', 'Twilio: 200 × $0.0083 = $1.66, plus $0.35 to $0.85 in carrier fees', `200 × ${prices.sms.amount} = ${usd(line.texts)}`],
        ['60 call minutes, half out', 'Twilio: 30 × $0.014 + 30 × $0.0085 = $0.68', `60 × ${prices.voice.amount} = ${usd(line.calls)}`],
        ['10 browser hours', `Browserbase Developer: ${FOUR.browserbase}, since Free has 1 hour`, `10 × ${prices.browser.amount} = ${usd(line.browser)}`],
        ['10 sandbox hours', `E2B Hobby: 36,000 seconds × $0.0000185 = ${FOUR.e2b}`, `10 × (${prices.sandbox.amount} + ${prices.memory.amount}) = ${usd(line.sandbox)}`],
        ['About 2,000 events', 'Each vendor keeps its own', `${prices.log.amount} per million = ${usd(line.log)}`],
        ['The month', `${FOUR.total}, on 4 bills`, `${usd(usage)} of usage, inside the ${dev.name} plan: ${usd(bill)} on 1 bill`],
      ],
    },
    {
      kind: 'art',
      caption: 'Prices as listed on each vendor’s own page, 22 November 2026. The month is an example.',
      art: {
        kind: 'price',
        title: 'One agent, one month',
        rows: [
          { label: 'AgentMail, Free plan', value: FOUR.agentmail },
          { label: 'Twilio, pay as you go', value: FOUR.twilio, note: 'Carrier fees vary by network' },
          { label: 'Browserbase, Developer plan', value: FOUR.browserbase, note: 'Free covers 1 browser hour' },
          { label: 'E2B, Hobby plan', value: FOUR.e2b, note: 'Drawn from the one-time $100 credit' },
        ],
        total: { label: 'Four bills', value: FOUR.total, note: `Obsession: ${usd(bill)} on 1 bill, the ${dev.name} plan` },
      },
    },
    {
      kind: 'p',
      text: `Most of the four-vendor total is Browserbase’s Developer plan, which the 10 browser hours need. On Obsession the month uses ${usd(usage)} at list rates, inside the ${usd(covers)} the ${dev.name} plan covers. AgentMail’s Free plan adds a “Sent via AgentMail” footer, which its Developer plan removes for $20 more.`,
    },
    {
      kind: 'p',
      text: 'An agent that only receives emails, texts and calls, within the Free plan’s allowances, runs on Obsession for $0. See every allowance on [pricing](/pricing).',
    },

    { kind: 'h2', id: 'one-vendor', text: 'When one vendor is enough' },
    {
      kind: 'list',
      items: [
        `**Email and nothing else.** AgentMail’s Free plan covers 3 inboxes and 3,000 emails a month, and Obsession’s covers ${freeInboxes} inboxes and ${freeEmails} emails. AgentMail’s Startup plan adds 150 inboxes, 10 seats and a SOC 2 report.`,
        '**A phone line at high volume.** Twilio’s number is $1.15 a month and its base text rate is $0.0083, both below Obsession’s, before carrier fees.',
        '**Browsing and nothing else.** Browserbase’s Startup plan includes 500 browser hours, then $0.10 an hour, with Stagehand and its Search and Fetch APIs.',
        '**Long, busy sandbox sessions.** E2B’s rate works out at about $0.05 a running vCPU hour, below Obsession’s rate for a CPU that never rests.',
      ],
    },

    { kind: 'h2', id: 'one-api', text: 'When one API fits better' },
    {
      kind: 'list',
      items: [
        '**The agent needs more than one piece.** An inbox, a number and a browser come from one call, on one key and one bill.',
        '**The pieces must belong to one identity.** A persona’s browser gets the login code sent to its own inbox or number. The persona costs nothing extra while it waits.',
        '**You want one event log.** Every email, text, call, page and sandbox run lands in order, dated, at one webhook. Developers subscribe once.',
        '**Your sandbox waits more than it works.** Obsession bills a sandbox only while the CPU works, so time spent waiting on a task costs almost nothing.',
      ],
    },
    {
      kind: 'cta',
      text: 'An inbox, a number, a browser and a sandbox on one key. No credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'How much do AgentMail, Twilio, Browserbase and E2B cost together?',
          a: `The month worked out on this page gives one agent an inbox, a US number, 200 texts, 60 call minutes, 10 browser hours and 10 sandbox hours. At prices listed on 22 November 2026, it comes to about ${FOUR.total} across four bills. Most of it is Browserbase’s $20 Developer plan, which the 10 browser hours need.`,
        },
        {
          q: 'What does the same month cost on Obsession?',
          a: `${usd(usage)} of usage at list rates. That sits inside the ${dev.name} plan, which is ${usd(fee)} a month and covers ${usd(covers)} of usage, so the bill is ${usd(bill)}.`,
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Is Obsession always cheaper?',
          a: 'No. Twilio’s number and base text rate are lower for a team that needs only a phone line. E2B’s rate per running vCPU hour is lower for long, busy sandbox sessions. Obsession fits best when one agent needs several pieces at once, on one key and one bill.',
        },
        {
          q: 'What does a persona add?',
          a: 'A persona is every piece under one identity: an inbox, a number and a browser that belong to the same agent. A login code sent to its inbox or number reaches the browser that asked for it, and every event lands in one event log. A persona is free while it waits; you pay for the pieces it uses.',
          link: { label: 'See personas', to: '/personas' },
        },
        {
          q: 'Do these prices include US texting registration?',
          a: `No plan on either side includes it. Obsession charges ${registration.once} once to file each campaign, then ${registration.monthly} a month while it’s active. Twilio lists its A2P 10DLC registration fees separately.`,
        },
        {
          q: 'What will an Obsession agent never do?',
          a: 'It says it’s an AI when it talks to a person. It stops before payment unless given the customer’s own card, and never uses fake payment details. It never gets round a CAPTCHA or a bot block, stops at any identity check, and never clicks paid ads at volume.',
          link: { label: 'Every line an agent keeps', to: '/agents' },
        },
      ],
    },
  ],
  sources: [
    { title: 'Pricing', publisher: 'AgentMail', url: AGENTMAIL },
    { title: 'SMS pricing in the United States', publisher: 'Twilio', url: TWILIO_SMS, date: '2026-11' },
    { title: 'Programmable Voice pricing in the United States', publisher: 'Twilio', url: TWILIO_VOICE, date: '2026-10' },
    { title: 'Pricing', publisher: 'Browserbase', url: BROWSERBASE },
    { title: 'Pricing', publisher: 'E2B', url: E2B },
  ],
  related: [
    '/compare/obsession-vs-agentmail',
    '/compare/obsession-vs-browserbase',
    '/email',
    '/phone',
    '/browser',
    '/sandbox',
    '/personas',
    '/developers',
    '/glossary/headless-browser',
    '/glossary/model-context-protocol',
  ],
}

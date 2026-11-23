import type { BlogPost } from './types'

/* Agent search guide (_research/seo/agent-search-23nov/PLAN.md, WRITER_BRIEF.md; approved by Seun 23 Nov 2026).
   Primary "ai agent to fill out forms"; secondaries from Google suggestions (US and UK, 23 Nov,
   autocomplete_23nov.json). /blog/can-ai-agents-log-in-to-websites keeps the login phrases and
   /blog/browser-automation-tools-for-ai-agents the developer side; both are linked, not repeated.
   Every outside fact read on its own page on 23 November 2026: BLS OEWS May 2023 data entry keyers, Parseur's
   manual data entry report, UiPath's pricing and RPA pages, Zapier's and Make's pricing pages and Claude's Chrome and
   pricing pages. Calder Foods and every figure in the picture are invented. Obsession rates come from
   src/lib/pricing/pricing.json (read 23 Nov). The cost sums use 5 minutes a visit as an example. */

const BLS = 'https://www.bls.gov/oes/2023/May/oes439021.htm'
const PARSEUR = 'https://parseur.com/blog/manual-data-entry-report'
const UIPATH_PRICE = 'https://www.uipath.com/pricing'
const UIPATH_RPA = 'https://www.uipath.com/rpa/robotic-process-automation'
const ZAPIER = 'https://zapier.com/pricing'
const MAKE = 'https://www.make.com/en/pricing'
const CHROME = 'https://claude.com/chrome'
const CLAUDE_PRICING = 'https://claude.com/pricing'

export const post: BlogPost = {
  slug: 'ai-agent-fill-out-forms',
  title: 'AI agents that fill out forms and work in portals for you: what they cost and where they stop',
  dek: 'An AI agent to fill out forms signs in to each portal, completes the form, downloads the file and reports the result. Here is the cost of one visit at list rates, against a person, a robot tool and a browser extension.',
  metaTitle: 'AI agents that fill out forms and work in portals for you',
  description:
    'An AI agent to fill out forms signs in, completes the form, downloads files and checks statuses on 10 or 5,000 portals. Cost per visit and tools compared.',
  answer:
    'An AI agent to fill out forms uses a browser that stays signed in, plus its own inbox and phone number for sign-in codes, to complete forms, download files and check statuses in portals. At list rates one portal visit of five minutes costs under a cent, against about $1.50 of a data entry keyer’s time. It stops at any identity check, any CAPTCHA or bot block, and before payment unless you give it your card.',
  primaryKeyword: 'ai agent to fill out forms',
  keywords: [
    'ai agent to automate data entry',
    'ai agent that can use browser',
    'ai agent that can interact with websites',
    'ai agent to automate browser',
  ],
  category: 'Work behind logins',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 9,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'Monday at calder-foods.example',
      who: 'Portal agent, its own inbox and number',
      rows: [
        { time: '06:30', text: 'Opened 64 vendor portals', detail: 'Sessions still signed in from last week', tone: 'ok' },
        { time: '06:41', text: 'Login code arrived by text at 3 portals', detail: 'Read from its own number, typed into the browser', tone: 'info' },
        { time: '07:05', text: 'Filed 62 November invoices', detail: 'Each PDF named by vendor and month', tone: 'ok' },
        { time: '07:12', text: 'Submitted 9 delivery forms', detail: 'Each confirmation page saved as a screenshot', tone: 'ok' },
        { time: '07:20', text: 'Stopped at 1 identity check', detail: 'Left for a named person, with the page saved', tone: 'late' },
        { time: '07:41', text: 'Posted the summary to #finance', detail: '2 vendors yet to post, 1 portal changed its layout', tone: 'fail' },
      ],
      foot: 'Every page the agent touched lands in one log, each with its screenshot.',
    },
  },
  blocks: [
    { kind: 'h2', id: 'what-it-is', text: 'What an agent does in a portal' },
    {
      kind: 'p',
      text: 'A portal is a website that needs a login: a supplier’s ordering site, an insurer’s claims page, a carrier’s tracking page, a government filing site. Most have no connection for other software, so someone opens each one, types, clicks, downloads and copies the result into a sheet. An AI agent does the same steps in a browser, one portal after another.',
    },
    {
      kind: 'p',
      text: 'The agent reads the page the way a person does. It finds the field called “Delivery date”, fills it from your sheet, presses submit and reads the confirmation. The same agent can download the month’s statement, read the status column or check whether yesterday’s form was accepted. You watch the outcome in your own numbers: forms submitted a day, files collected, errors found and hours back.',
    },
    {
      kind: 'p',
      text: 'Three pieces make the work possible. A browser that stays signed in, so the agent does not log in from zero each morning. An email inbox of its own, because many portals send a link or a code by email. A phone number of its own, because many send the code by text. Without these a model can describe a form but cannot reach the page behind it. For the rules sites set on logins, [can AI agents log in to websites](/blog/can-ai-agents-log-in-to-websites) goes through them, and [browser automation tools for AI agents](/blog/browser-automation-tools-for-ai-agents) covers the developer side.',
    },

    { kind: 'h2', id: 'cost-today', text: 'What form and portal work costs today' },
    {
      kind: 'p',
      text: '[The United States Bureau of Labor Statistics](' + BLS + ') put the median pay for data entry keyers at $18.17 an hour, $37,790 a year, in its May 2023 survey of 154,230 workers. That is the plain cost of a person typing, before the manager, the desk and the errors. A five minute portal visit by a keyer costs about $1.51 of time at that rate.',
    },
    {
      kind: 'stat',
      value: '9+ hours a week',
      label: 'moving data from emails, PDFs and sheets into systems, as reported by 500 US professionals, about $28,500 per employee per year (Parseur, 2025 survey)',
      source: 'Parseur, manual data entry report',
      href: PARSEUR,
    },
    {
      kind: 'p',
      text: 'Parseur sells document parsing software, so read its figure as a survey of 500 workers and not as a law of nature. It still matches what most teams feel: the portal round is small for each person and large across a month. Ten portals is a morning. Five hundred is a team.',
    },

    { kind: 'h2', id: 'how-it-runs', text: 'How an agent runs 10 portals or 500' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Give it the list.** One row for each portal: the address, the task and where the result goes. A sheet works.',
        '**Give it the logins.** It uses only logins you provide. It signs in once, and the browser keeps the session between runs.',
        '**Let it catch the codes.** When a portal sends a code or link, it arrives at the agent’s own inbox or number, and the same agent types it in.',
        '**Set the rhythm.** Every morning, every Monday or after each new row in the sheet.',
        '**Read the results where you work.** A morning summary in Slack, a row for each visit in a sheet, a PDF report or an update in your CRM, with a screenshot behind every row.',
      ],
    },
    {
      kind: 'p',
      text: 'Scale comes from running many agents, not from one agent working longer. Each portal visit is a separate browser session, billed by the hour, so 500 visits cost 500 times one. The sum is short.',
    },
    {
      kind: 'table',
      caption: 'Browser time at list rates for a weekly portal round, as listed on 23 November 2026; five minutes a visit is an example',
      cols: ['Portals', 'Browser time', 'Cost at $0.10 an hour', 'A keyer at $18.17 an hour'],
      rows: [
        ['1 visit', '5 minutes', '$0.008', '$1.51'],
        ['10 portals', '50 minutes', '$0.08', '$15.14'],
        ['500 portals', '41.7 hours', '$4.17', '$757'],
      ],
    },
    {
      kind: 'p',
      text: 'Portals that block automated visits may need the stealth browser at $0.85 an hour, so 500 five-minute visits would be about $35 a round instead of $4.17. Add the persona’s own costs: a US or UK number at $2 a month, an inbox at $0.50 a month and any texts at $0.015 each, plus the AI model’s own charges. Four weekly rounds of 500 portals come to about $17 of browser time a month, with the number and inbox on top. A keyer doing the same weekly round by hand costs about $757 a round, or about $39,400 a year of time at the BLS median wage, which is a full-time post, so the sum shows the order of size. Ten times that, 5,000 portals a week, is about $394,000 a year of keyer time against $42 of browser time a round. Visits that need judgement still need a person.',
    },

    { kind: 'h2', id: 'where-it-stops', text: 'Where an agent stops' },
    {
      kind: 'list',
      items: [
        '**Identity checks.** It stops at any step that verifies who a person is, and hands the page to a named person.',
        '**CAPTCHAs and bot blocks.** It never gets round them. A portal that blocks automated visits shows up as a failed visit in the log.',
        '**Payment.** It stops before payment unless you give it your card. Filing a form is different from paying for it.',
        '**Accounts you did not give it.** It signs in only with logins you provide.',
        '**Terms of use.** Some portals forbid automated access. Check the terms and ask the portal for an approved route where one exists.',
      ],
    },
    {
      kind: 'p',
      text: 'These limits are rules every agent should keep, and [the agent rules](/agents) set them out. They protect the portal owner and you.',
    },

    { kind: 'h2', id: 'what-goes-wrong', text: 'What goes wrong, and how to plan for it' },
    {
      kind: 'list',
      items: [
        '**A portal changes its layout.** The “Submit” button moves or a field is renamed. A model reading the page copes with small moves, but a big redesign can break a step. The log shows a failed visit with its screenshot the same morning, so you see it within a day, not at month end.',
        '**A new code or a new check appears.** A portal adds a text code, or an identity step, after a security update. Keep one inbox and one number for the agent so a new code has somewhere to land, and expect a few portals a quarter to need a person.',
        '**A form is filled with wrong data.** Start from a clean sheet, test on one portal and compare the first ten submissions with the confirmation pages before running 500.',
        '**A session expires.** The agent signs in again with the stored login. If the portal now asks for an identity check, the visit stops and tells you.',
        '**Nobody reads the results.** Name one owner and one place, such as a Slack channel, for each round.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'Ways to automate form and portal work, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to do form and portal work, from each provider’s own pages and the BLS, as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          '[UiPath](' + UIPATH_RPA + '): robotic process automation (RPA)',
          'Software robots that follow screens like a person, useful where systems lack APIs; attended and unattended robots; governance for large companies',
          'Community: free\nBasic: from $25 a month, 2 unattended robots (as listed on 23 November 2026; its page says an updated Basic plan is coming)\nStandard and Enterprise: quote-based',
          'You design and maintain each automation, and users and robots are licensed separately',
          'Large companies with an automation team',
        ],
        [
          'A browser extension: [Claude in Chrome](' + CHROME + ')',
          'Reads pages you are signed in to, clicks, types and fills forms, across tabs, with your approval before purchases',
          'Included with Claude Pro: $20 a month billed monthly, about $17 billed annually (' + CLAUDE_PRICING + ')',
          'Works in your own browser and logins; its page advises against banking, health records and credentials, and notes prompt injection protections are not foolproof',
          'One person’s occasional forms',
        ],
        [
          'No-code tools: [Zapier](' + ZAPIER + ') and [Make](' + MAKE + ')',
          'Connect apps that already talk to each other and move data between them',
          'Zapier Free: 100 tasks a month; Professional from $19.99 a month billed annually ($29.99 monthly) for 750 tasks\nMake Free: 1,000 credits a month; paid plans on its page',
          'The portal needs a connection to the tool; a website with only a login page is outside it',
          'Teams whose apps already connect',
        ],
        [
          'A person: a data entry keyer',
          'Judgement on every case, including odd forms',
          '$18.17 an hour median, $37,790 a year (BLS, May 2023)',
          'Hours rise with every portal, and they cannot read 500 pages by 07:00',
          'Work that changes every week',
        ],
        [
          'Obsession (ours): [Work behind logins](/blueprints/work-behind-logins) blueprints, such as [invoice collector](/blueprints/invoice-collector)',
          'A browser that stays signed in, an inbox and number for codes, and one log with a screenshot of every page, for 10 or 500 portals',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops at any identity check, CAPTCHA or bot block, and before payment unless you give it your card',
          'Many portals with their own logins and codes, checked every day',
        ],
      ],
    },
    {
      kind: 'p',
      text: `Prices and plans as each provider lists them on its own page, read 23 November 2026: [UiPath](${UIPATH_PRICE}).`,
    },
    {
      kind: 'p',
      text: 'A robot tool is right where a company already has an automation team. An extension is right for a task you watch. A no-code tool is right where the apps connect. A person is right for judgement. A portal that only has a login page, checked every day across hundreds of accounts, is where an agent with its own browser, inbox and number is the better fit.',
    },

    { kind: 'h2', id: 'on-obsession', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. For portal work three pieces matter. The browser is a cloud browser whose sessions keep their logins between runs, so the agent signs in once with the logins you give it and stays signed in. The inbox is a real email address the agent owns: it sends and receives, keeps each thread and calls your webhook, a message to your own system, on every new email. The phone number is a US or UK number that sends and receives texts, makes and takes calls and receives sign-in codes.',
    },
    {
      kind: 'p',
      text: 'A sandbox, a computer started only when a task needs to run code, joins in when the job needs to read a spreadsheet or split a PDF.',
    },
    { kind: 'h3', id: 'one-identity', text: 'Why the pieces belong to one identity' },
    {
      kind: 'p',
      text: 'A persona puts the pieces under one identity: one name, one address, one number and one browser profile. The sign-in code that arrives by text reaches the same agent whose browser is waiting at the login page, so the step that usually needs a person to read a phone happens in seconds. A persona that is waiting costs nothing, though its number ($2) and inbox ($0.50) bill monthly, and it answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent touches lands in one event log, dated, with the email, screenshot or recording behind it. For a finance team that is a dated record of which invoice came from which portal on which day. Results reach Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent.',
    },
    { kind: 'h3', id: 'one-platform', text: 'The case for one platform' },
    {
      kind: 'p',
      text: 'The usual way is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working, and the seams are where a portal job breaks: the code arrives at one vendor while the browser waits at another, and the email thread and the page screenshots live in different places. If your job needs one piece, a single specialist can be enough. The side-by-side of [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) holds each vendor’s prices, dated, and [the AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack) explains how the layers fit.',
    },
    { kind: 'h3', id: 'two-ways', text: 'Run it with no code or with the API' },
    {
      kind: 'p',
      text: 'With no code, pick a blueprint such as [invoice collector](/blueprints/invoice-collector), [prior authorization status](/blueprints/prior-authorization-status) or [load tracking](/blueprints/load-tracking), or describe the job in your own words and Obsession sets it up and spins up the agent, for one portal or ten thousand, each with its own identity. Developers use the API, the SDKs or MCP, the standard way AI agents call tools, for example obsession.personas.create({ inbox: true, phone: "US", browser: true }).',
    },
    {
      kind: 'p',
      text: 'Once an agent has its own number, inbox and browser, the same persona can do more. It can chase the missing document by email and text, watch a supplier’s prices every morning and book the engineer’s visit from the same login. An agency can run all of it for every client under its own brand.',
    },
    {
      kind: 'cta',
      text: 'Pick a ready-made portal job, or describe your own, and each result lands in Slack, a sheet or a report.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },
    {
      kind: 'cta',
      text: 'See the browser that stays signed in, with its own inbox and number for codes.',
      to: '/browser',
      label: 'See how teams use it',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI agents that fill out forms' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is there an AI agent that can fill out forms for me?',
          a: 'Yes. An AI agent with a browser reads a form, fills each field from your data, submits it and saves the confirmation page. For portals that need a login, it also needs a browser that stays signed in and an inbox and number for codes.',
          link: { label: 'Pick a blueprint', to: '/no-code' },
        },
        {
          q: 'Can an AI agent automate data entry?',
          a: 'Yes, where the data is entered on a website. The agent reads your sheet, completes the form on each portal and reports what was accepted. Judgement calls, identity checks and any portal that blocks automated visits go to a person.',
          link: { label: 'Invoice collector', to: '/blueprints/invoice-collector' },
        },
        {
          q: 'What is the difference between an AI agent and an RPA robot?',
          a: 'An RPA robot follows steps someone designed, screen by screen. An AI agent reads the page and chooses its next step, so a small layout change is less likely to break it. UiPath’s own page describes RPA as software that mimics human actions in digital systems.',
        },
        {
          q: 'How much does it cost to run an agent on a portal?',
          a: 'At Obsession’s list rates a browser costs $0.10 an hour, so a five minute visit is under a cent. Add $2 a month for a number, $0.50 for an inbox and $0.015 for each text, plus the model’s own charges. Plans are Free, then $20, $99 or $499 a month.',
          link: { label: 'See the plans', to: '/pricing' },
        },
        {
          q: 'Can an AI agent get past a CAPTCHA or an identity check?',
          a: 'No. Obsession’s agents never get round a CAPTCHA or a bot block, and they stop at any identity check. The visit is logged as stopped, with the page saved, so a named person can finish it.',
          link: { label: 'The agent rules', to: '/agents' },
        },
        {
          q: 'Can an AI agent use a browser and interact with websites?',
          a: 'Yes. A cloud browser lets the agent open pages, click, type, download files and read what is on screen. Its sessions keep their logins between runs, so it stays signed in only to accounts you gave it.',
          link: { label: 'The browser', to: '/browser' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the figures',
      text: 'Other providers are described from their own pages, read on 23 November 2026, and their prices can change. Calder Foods and every figure in the picture are invented. The cost table uses five minutes a visit as an example, and the keyer cost uses the BLS median wage. Portal terms of use differ, and nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'Occupational Employment and Wage Statistics: Data Entry Keyers, May 2023', publisher: 'US Bureau of Labor Statistics', url: BLS },
    { title: 'Manual data entry report', publisher: 'Parseur', url: PARSEUR },
    { title: 'Pricing', publisher: 'UiPath', url: UIPATH_PRICE },
    { title: 'Robotic process automation', publisher: 'UiPath', url: UIPATH_RPA },
    { title: 'Pricing', publisher: 'Zapier', url: ZAPIER },
    { title: 'Pricing', publisher: 'Make', url: MAKE },
    { title: 'Claude in Chrome', publisher: 'Claude', url: CHROME },
    { title: 'Plans and pricing', publisher: 'Claude', url: CLAUDE_PRICING },
  ],

  related: [
    '/no-code',
    'recipe:invoice-collector',
    'recipe:prior-authorization-status',
    'can-ai-agents-log-in-to-websites',
    'browser-automation-tools-for-ai-agents',
  ],
}

import type { BlogPost } from './types'

/* Kit article (_research/seo/revamp-22nov/PLAN_articles.md, row 1; approved by Seun 22 Nov 2026, "write them"; brief in
   ARTICLE_BRIEF.md). Primary "what can ai agents do for my business"; secondaries from Google suggestions (US and UK,
   22 Nov, autocomplete_articles_22nov.json) that no other post lists. /blog/ai-agent-use-cases-for-business keeps
   "ai agent use cases for business" and is linked. Six groups of work, one per kit, five jobs each; each kit and a
   blueprint to start with sit in one table in the Obsession section. Every outside fact read on its own page on
   22 Nov 2026: Anthropic's Building effective agents (19 Dec 2024), Klarna's press release (27 Feb 2024), the Civil
   Resolution Tribunal's Moffatt v. Air Canada (2024 BCCRT 149, 14 Feb 2024), FCC 24-17 (released 8 Feb 2024), WebArena
   (arXiv 2307.13854, v4 16 Apr 2024), the OpenAI Agents SDK README, Zapier's pricing, n8n's workflow library and
   pricing, and Microsoft's Copilot Studio pricing. Fernway and every figure in the picture are invented. Prices for
   Obsession come from src/content/prices.ts. */

const ANTHROPIC = 'https://www.anthropic.com/engineering/building-effective-agents'
const KLARNA = 'https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/'
const FCC = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'
const CRT = 'https://decisions.civilresolutionbc.ca/crt/crtd/en/item/525448/index.do'
const WEBARENA = 'https://arxiv.org/abs/2307.13854'
const AGENTS_SDK = 'https://github.com/openai/openai-agents-python'
const ZAPIER_PRICING = 'https://zapier.com/pricing'
const N8N_WORKFLOWS = 'https://n8n.io/workflows/'
const N8N_PRICING = 'https://n8n.io/pricing/'
const COPILOT = 'https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/copilot-studio'

export const post: BlogPost = {
  slug: 'what-can-ai-agents-do-for-business',
  title: 'What can AI agents do for your business? 30 jobs, with real examples and what each needs',
  dek: '30 jobs AI agents do for businesses, in six groups, from answering the phone at 2am to keeping every email a competitor sends. Each group comes with a real example, the tools the agent needs and the limits to set.',
  metaTitle: 'What can AI agents do for your business? 30 jobs they do now',
  description:
    'What can AI agents do for your business? 30 jobs in six groups, from answering calls to watching competitors, each with a real example and what it needs.',
  answer:
    'AI agents can do six kinds of work for a business: answer customers, test your own sign-up and bots, work inside portals, watch competitors, power agent products and train other agents. An AI agent is a language model that decides its next step and uses tools to take it. Each job happens outside a chat window, so the agent needs an inbox, a phone number, a browser that stays signed in or a computer to run code.',
  primaryKeyword: 'what can ai agents do for my business',
  keywords: ['what can ai agents do', 'what can ai agents do for me', 'what tasks can ai agents do', 'what all can ai agents do'],
  category: 'Talk to customers',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'A week of agent work at fernway.example',
      period: 'An online furniture brand’s AI agents, Monday to Friday',
      cols: ['Job', 'What the agent did', 'What came back'],
      rows: [
        { name: 'Talk to customers', cells: ['Answered calls and texts on its own number', '212 calls and texts, every transcript kept'], tone: 'ok' },
        { name: 'Test your sign-up', cells: ['Signed up after Tuesday’s release', 'The day 2 email never arrived'], tone: 'fail' },
        { name: 'Work behind logins', cells: ['Signed in to 4 supplier portals', '38 invoices, each login code caught by email'], tone: 'ok' },
        { name: 'Watch the market', cells: ['Stayed subscribed at 3 competitors', 'A 20% code from one on Thursday'], tone: 'info' },
        { name: 'Check your own bot', cells: ['Asked the support chat 20 questions', '2 answers broke the returns policy'], tone: 'fail' },
      ],
      notes: [
        'Each job used its own inbox, number or browser, and every result landed in one log the team reads on Friday.',
        'Example: Fernway and every figure here are invented.',
      ],
    },
  },
  blocks: [
    { kind: 'h2', id: 'what-is-an-ai-agent', text: 'What is an AI agent, in business terms?' },
    {
      kind: 'p',
      text:
        'Anthropic, which makes the Claude models, separates two kinds of AI system in [Building effective agents](' +
        ANTHROPIC +
        '), published in December 2024. Workflows follow “predefined code paths”. Agents are “systems where LLMs dynamically direct their own processes and tool usage”, where an LLM, a large language model, is the AI that reads and writes text.',
    },
    {
      kind: 'p',
      text: 'In business terms, an agent gets a goal and chooses a step. It uses a tool, reads what came back and chooses again, until the job is done or it needs a person. A model with no tools can write a reply in a chat window. With an email address it can receive a supplier’s invoice, and with a phone number it can take a booking. With a browser that stays signed in, it can check a claim in an insurer’s portal.',
    },

    { kind: 'h2', id: 'which-jobs', text: 'Which jobs can AI agents do for a business?' },
    {
      kind: 'p',
      text: 'Most of the work an agent does for a business falls into six groups. Each group needs a different mix of tools, and each is measured on numbers a team already watches.',
    },
    {
      kind: 'table',
      caption: 'The six groups of AI agent work, the tools each needs and the numbers teams watch',
      cols: ['Group', 'A typical job', 'What the agent needs', 'What teams watch'],
      rows: [
        ['Talk to customers', 'Answer the main line and text the booking', 'A phone number, an inbox, WhatsApp', 'Calls answered, bookings, response time'],
        ['Test your sign-up and AI agents', 'Sign up after each release and wait for every email', 'A fresh inbox, number and browser per test', 'Escaped defects, activation, policy errors'],
        ['Work behind logins', 'Check claim status in payer portals each morning', 'A browser that stays signed in, an inbox for codes', 'Staff hours, days to get paid, denials'],
        ['Watch the market', 'Keep every email and code a competitor sends', 'An inbox and number per competitor, for months', 'Win rate, price position, promo depth'],
        ['Build agent products', 'Give each customer’s agent its own address and number', 'Every tool on one key and one webhook', 'Time to ship, cost per agent'],
        ['Train and test agents', 'Run thousands of tasks with real codes and logins', 'A sandbox and a browser per run', 'Task success rate, regressions caught'],
      ],
    },

    { kind: 'h2', id: 'talk-to-customers', text: 'Talk to customers by phone, text and email' },
    {
      kind: 'p',
      text: 'An agent with its own number and inbox answers the main line, replies to texts and WhatsApp messages, and emails quotes and documents at any hour. Customers reach the same agent whichever way they get in touch, and every call ends with a transcript.',
    },
    {
      kind: 'p',
      text:
        'Klarna gave an early public picture of the scale. In a [press release on 27 February 2024](' +
        KLARNA +
        '), it said its AI assistant, powered by OpenAI, had held 2.3 million conversations in its first month. That was two-thirds of its customer service chats, and “the equivalent work of 700 full-time agents”. Customers resolved errands in under 2 minutes against 11 before, in 23 markets and in over 35 languages, and could still ask for a person.',
    },
    {
      kind: 'list',
      items: [
        'Answer the main line out of hours, take the booking and text the confirmation from the same number.',
        'Call back every missed call within minutes, with the caller’s question already noted.',
        'Reply to quote requests by email with the price and the policy documents attached.',
        'Send appointment reminders by text and handle the replies that ask to move a slot.',
        'Answer order and delivery questions on WhatsApp, with the order looked up in your system.',
      ],
    },
    {
      kind: 'p',
      text:
        'In the US, the Federal Communications Commission ruled in February 2024 that calls using AI-generated voices count as an “artificial or prerecorded voice” ([FCC 24-17](' +
        FCC +
        ')). That brings them under the Telephone Consumer Protection Act, the federal law on robocalls. Calls like that need the called person’s prior express consent, unless an emergency or an exemption applies. The ruling is about calls a business places, and [the rules for AI phone calls](/blog/can-ai-make-phone-calls) set out the rest in plain words. Teams watch calls answered, bookings made, callbacks kept, response time and conversion.',
    },

    { kind: 'h2', id: 'test-sign-up-and-agents', text: 'Test your own sign-up and AI agents' },
    {
      kind: 'p',
      text: 'In this job the agent acts as a brand-new customer of your own business. It signs up, waits for the code, keeps every welcome email for days, and asks your support bot and voice agent what real customers ask. Each answer is checked against your policy page.',
    },
    {
      kind: 'p',
      text:
        'What a bot says is the business’s word. In [Moffatt v. Air Canada](' +
        CRT +
        '), decided on 14 February 2024, Air Canada’s website chatbot told a customer they could claim a bereavement fare after travelling. It said to apply “within 90 days of the date your ticket was issued”, though the airline’s own policy didn’t allow a claim once travel was over. British Columbia’s Civil Resolution Tribunal ordered the airline to pay CA$812.02. [AI chatbot fails](/blog/ai-chatbot-fails) collects similar public cases.',
    },
    {
      kind: 'list',
      items: [
        'Sign up after every release and confirm the login code arrives by text and by email.',
        'Wait 7 days and check that the day 0, day 2 and day 7 emails arrive, in order.',
        'Ask your support bot the 20 questions your team hears most and compare each answer with your policy page.',
        'Call your voice agent, book an appointment and wait for the confirmation text it promised.',
        'Fill in your own lead form and time the first reply by email, text and call.',
      ],
    },
    {
      kind: 'p',
      text: 'Each test needs a fresh identity, with its own inbox, number and browser, so the business sees what a stranger sees. Teams watch escaped defects, activation, resolution rate and policy errors.',
    },

    { kind: 'h2', id: 'work-behind-logins', text: 'Sign in to portals and do the work' },
    {
      kind: 'p',
      text: 'Back-office work often sits on websites with a login and no API, the connection software uses to talk to other software. Payer and insurer portals, carrier and supplier portals, government sites and marketplace seller centres all work this way. An agent signs in, receives the one-time code by email or text, does the task and saves a screenshot of each page.',
    },
    {
      kind: 'p',
      text: 'A medical billing team is a typical case. Someone signs in to each payer’s portal every morning to check which claims are paid, pending or denied. An agent does the same rounds, drafts an appeal from the denial reason and sends each status to the billing system.',
    },
    {
      kind: 'list',
      items: [
        'Check claim status and eligibility in payer portals each morning.',
        'Download invoices and remittances from every supplier portal on the first of the month.',
        'Track shipments and book collections in carrier portals.',
        'Update stock and prices in marketplace seller centres.',
        'Fill in routine renewal forms on government sites, stopping at any identity check.',
      ],
    },
    {
      kind: 'p',
      text: 'The agent needs a browser that keeps its session for weeks, so it signs in once, and an inbox and number for the login codes. It stops at any CAPTCHA, the puzzle a site uses to tell people from software. It follows each site’s terms, and the guide to [whether AI agents can log in to websites](/blog/can-ai-agents-log-in-to-websites) covers what sites allow. Teams watch staff hours, days to get paid and denial rates.',
    },

    { kind: 'h2', id: 'watch-the-market', text: 'Watch competitors as a customer' },
    {
      kind: 'p',
      text: 'Competitors show their best offers to the people who sign up: the welcome code, the member price, the trial’s upgrade prompt, the email three days after a basket is left. An agent with its own inbox and number signs up as a new customer, stays subscribed for months and keeps every message with the time it arrived.',
    },
    {
      kind: 'p',
      text: 'One real run shows what a single sign-up can surface. In a [September 2026 sample](/sample-output) at a UK skincare store, 4 test customers each got their own inbox, and the one that left a £40 basket at 02:57 on 22 September got no reminder email in the 48 hours that followed.',
    },
    {
      kind: 'list',
      items: [
        'Join each competitor’s email and text list and keep every message with its arrival time.',
        'Start a competitor’s free trial and record each email, limit and upgrade prompt until it ends.',
        'Read member prices and subscriber codes at each competitor every morning.',
        'Follow competitors’ public ads to the landing page, the price and the code.',
        'Sign up at each prospect before a sales call and bring back what they send their own customers.',
      ],
    },
    {
      kind: 'p',
      text: 'The agent stops before payment and stays subscribed for as long as the watch runs. Teams watch win rate against named competitors, price position and promo depth; [competitor email tracking tools](/blog/competitor-email-tracking-tools) compares the ways teams do it.',
    },

    { kind: 'h2', id: 'build-agent-products', text: 'Build the agent products you sell' },
    {
      kind: 'p',
      text: 'Software companies whose product is an agent, such as an AI sales rep, an AI receptionist or an accounts assistant, give every agent they ship the same tools. Each customer’s agent needs an address to send from, a number to answer, a browser for the web and often a computer to run code. Built from separate vendors, every piece brings its own key, its own bill and its own webhook, the message a service sends your server when something happens.',
    },
    {
      kind: 'p',
      text: 'An accounts agent is a typical case. A supplier emails an invoice to the agent’s own address, the agent reads the line items with code, replies with the payment date and answers a colleague’s question in Slack.',
    },
    {
      kind: 'list',
      items: [
        'An AI sales rep that sends from its own inbox and handles every reply.',
        'An AI receptionist with its own number for each business it answers for.',
        'An accounts agent that reads the invoices sent to its address and files them.',
        'A research agent that runs code to clean the data it gathers.',
        'A product that gives every one of its users an agent with its own address and number.',
      ],
    },
    {
      kind: 'p',
      text: 'Teams watch time to ship, latency and cost per agent, and [what to build with AI agents](/blog/what-to-build-with-ai-customers) walks through production builds.',
    },

    { kind: 'h2', id: 'train-and-test-agents', text: 'Train and test other AI agents' },
    {
      kind: 'p',
      text: 'AI labs and agent teams run agents through thousands of tasks to measure and improve them. Tasks that touch real services, such as a sign-up that sends a code by text, need a real inbox and number for every run, and a log of each step to score.',
    },
    {
      kind: 'p',
      text:
        'Benchmarks show why the testing matters. When researchers published [WebArena](' +
        WEBARENA +
        '), a set of realistic websites for testing agents, their best GPT-4-based agent finished 14.41% of tasks end to end, against 78.24% for people. Teams re-run tasks like these after every model change to see what moved.',
    },
    {
      kind: 'list',
      items: [
        'Run thousands of sign-up tasks at once, each with its own inbox and number for the code.',
        'Re-run the same tasks after every model change and compare the scores.',
        'Score each step from the log: the page visited, the code received, the answer given.',
        'Test a shopping agent up to the checkout page, stopping before payment.',
        'Compare two vendors’ agents on the same hard cases before signing a contract.',
      ],
    },
    {
      kind: 'p',
      text: 'Teams watch task success rate, cost per run and regressions caught.',
    },

    { kind: 'h2', id: 'limits', text: 'What AI agents should not do on their own' },
    {
      kind: 'p',
      text: 'Anthropic’s advice in the same guide is to start with the simplest build that does the job, often a single model call with retrieval and examples, and to add multi-step agents when that falls short. A fixed workflow is easier to predict, so use one wherever the steps never change. Where an agent does the work, set these lines from the first day:',
    },
    {
      kind: 'list',
      items: [
        '**Money:** the agent stops before payment unless it holds the customer’s own payment card, and never uses made-up payment details.',
        '**Identity:** it stops at any identity check, such as a passport upload or a bank’s verification step.',
        '**Site rules:** it never gets round a CAPTCHA or a bot block, and it follows each site’s terms.',
        '**Honesty:** it says it’s an AI when it talks to a person, and [chatbot disclosure laws](/blog/chatbot-disclosure-laws) shows where the law requires it.',
        '**Review:** a person checks anything that commits money, a refund or a policy for the first weeks, because the business answers for its agent, as the Air Canada decision showed.',
      ],
    },

    { kind: 'h2', id: 'first-job', text: 'How to choose the first job for an AI agent' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick a job that repeats and follows written rules.** A pass: the rules fit on one page, like “call back every missed call within 10 minutes and offer the next free slot”.',
        '**Count what it costs today.** A pass: you know the staff hours a week, or the missed calls and late replies it causes.',
        '**List everything the agent must reach.** A pass: each system is named with how the agent gets in, whether a phone line, an inbox, a portal login or your CRM.',
        '**Run it beside a person for 2 weeks.** A pass: the agent’s answers match the person’s on the cases you sampled, and you know why each miss happened.',
        '**Decide where results land and who reads them.** A pass: a named owner and a place, such as a Slack channel, a sheet or the CRM.',
        '**Set a spending cap.** A pass: a monthly ceiling the agent can’t go past.',
      ],
    },
    {
      kind: 'p',
      text: 'Then track the number you counted in step 2, week by week, so you can see what the agent does to response time, conversion, revenue or staff hours. For more jobs by industry, [AI agent use cases for business](/blog/ai-agent-use-cases-for-business) lists them one by one.',
    },

    { kind: 'h2', id: 'on-obsession', text: 'Where each job starts on Obsession' },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. Its pieces are email inboxes, phone numbers and texts, WhatsApp and iMessage, a cloud browser and a sandbox to run code, under one identity per agent. Developers create an agent with an inbox, a US number and a browser in one call, obsession.personas.create({ inbox: true, phone: "US", browser: true }). Each email, text, call and page then reaches their webhook as an event such as email.received. For teams outside engineering, a blueprint is a ready-made job Obsession runs, with each result sent to Slack, a sheet or the CRM.',
    },
    {
      kind: 'table',
      caption: 'Each group of jobs, its type of blueprint and one to start with',
      cols: ['Job', 'Type of blueprint', 'A blueprint to start with', 'What the blueprint does'],
      rows: [
        ['Talk to customers', '[Talk to customers](/blueprints/talk-to-customers)', '[Voice agent check](/blueprints/voice-agent-check)', 'Calls your voice agent as a customer, then waits for the text and email it promised'],
        ['Test your sign-up and AI agents', '[Test sign-up and agents](/blueprints/test-sign-up-and-agents)', '[QA on your own flows](/blueprints/website-audit)', 'Signs up to your product after every release and finds the step that breaks'],
        ['Work behind logins', '[Work behind logins](/blueprints/work-behind-logins)', '[Price watch](/blueprints/price-watch)', 'Signs in at each competitor every morning and reads member prices'],
        ['Watch the market', '[Watch the market](/blueprints/watch-the-market)', '[Competitor tracking](/blueprints/competitor-tracking)', 'Signs up at each competitor and keeps every email, text, offer and price'],
        ['Build agent products', '[Build agent products](/blueprints/build-agent-products)', '[Outbound agent check](/blueprints/outbound-agent-check)', 'Joins your AI sales rep’s lists as a prospect and keeps every message it sends'],
        ['Train and test agents', '[Train and test agents](/blueprints/train-and-test-agents)', '[Drift watch](/blueprints/drift-watch)', 'Asks your agent your hardest cases daily and after every update, and shows what changed'],
      ],
    },
    {
      kind: 'cta',
      text: 'Not building agents? Pick a blueprint, and Obsession runs the job, with every result in Slack, a sheet or your CRM.',
      to: '/blueprints',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to put an AI agent to work, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 22 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to put an AI agent to work, from each provider’s own pages, as listed on 22 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time to set up', 'Free', 'Missed calls and slow replies stay as they are', 'Jobs that rarely come up'],
        ['By hand: staff, a temp or an assistant', 'Judgement on every case', 'Staff hours', 'Hours grow with every call, portal and competitor', 'Work that changes every week'],
        [
          '[OpenAI Agents SDK](' + AGENTS_SDK + ')',
          'An open source software kit (SDK) with text, sandbox, realtime and voice agent examples',
          'Free code, MIT licence\nModel calls on your OpenAI account',
          'Your team builds and hosts every tool',
          'Engineering teams building their own agent',
        ],
        [
          '[Zapier Agents](' + ZAPIER_PRICING + ')',
          'Agents that act across the apps Zapier connects, with ready templates',
          'Free: 400 activities a month\nPro: from about $33.33 a month, billed annually',
          '10 activities per run on Free, 40 on paid plans',
          'Teams already running Zapier',
        ],
        [
          '[n8n](' + N8N_PRICING + ')',
          '[14,409 community workflow templates](' + N8N_WORKFLOWS + ') and a self-hosted edition',
          'Self-hosted from GitHub\nCloud from €20 a month, billed annually',
          '2,500 workflow executions a month on the cloud Starter plan',
          'Teams with someone who runs workflows',
        ],
        [
          '[Microsoft Copilot Studio](' + COPILOT + ')',
          'Pre-built agents and templates, with a free trial',
          '$200 a month per 25,000 Copilot Credits\nFree trial',
          'An Azure subscription to use agents',
          'Companies on Microsoft 365',
        ],
        [
          'Obsession (ours): seven types of blueprints, from [Talk to customers](/blueprints/talk-to-customers) to [Buy, book and order](/blueprints/buy-book-and-order)',
          'An inbox, number, browser and sandbox per agent, or a blueprint that runs the job',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment and at any identity check',
          'Jobs where an agent must reach customers, portals or competitors',
        ],
      ],
    },
    {
      kind: 'cta',
      text: 'Give each agent you build its own inbox, number, browser and sandbox on one key, starting on the Free plan with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about what AI agents can do for a business' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What can AI agents do for a small business?',
          a: 'For a small business, the jobs that pay back first repeat every day. Good examples are answering the phone and texts out of hours, calling back missed calls, sending reminders, collecting supplier invoices from portals and watching competitors’ offers. Start with one job you can count, such as missed calls a week, and measure it before and after.',
        },
        {
          q: 'What should an AI agent not do on its own?',
          a: 'An agent should stop before payment unless it holds the customer’s own payment card, and stop at any identity check. It should never get round a CAPTCHA or bot block, and it should say it’s an AI when it talks to a person. A person reviews anything that commits money, a refund or a policy until the agent has a track record. The Air Canada tribunal decision of February 2024 showed that the business answers for what its agent says.',
          link: { label: 'AI chatbot fails', to: '/blog/ai-chatbot-fails' },
        },
        {
          q: 'How much does an AI agent cost a month?',
          a: 'It depends on what the agent uses. At Obsession’s list prices, a US or UK number is $2 a month and an inbox is $0.50 a month. A text costs $0.015, a call $0.012 a minute and a browser $0.10 an hour, with a Free plan to start. On 22 November 2026, Zapier’s Free plan included 400 agent activities a month, and Microsoft listed Copilot Studio at $200 a month for 25,000 Copilot Credits.',
          link: { label: 'AI agent cost per month', to: '/blog/ai-customers-at-scale' },
        },
        {
          q: 'Do I need to code to use an AI agent?',
          a: 'No. Workflow builders such as Zapier and n8n publish ready-made agent and workflow templates. Obsession’s blueprints are ready-made jobs Obsession runs for any team: you name the competitors, stores or numbers, choose how often, and say where results go.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'Is it legal for an AI agent to call customers?',
          a: 'In the US, the FCC ruled in February 2024 that AI-generated voices count as an artificial or prerecorded voice under the Telephone Consumer Protection Act. Calls that use one need the called person’s prior express consent unless an emergency or an exemption applies. Other countries set their own rules, and this is general information rather than legal advice.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'What is the difference between an AI agent and a chatbot?',
          a: 'A chatbot answers in one window from what it was given. An AI agent chooses steps and uses tools to finish a job: it can wait for an email, read a code from a text, sign in to a portal and report back. Anthropic describes agents as systems where the model directs its own process and tool use, and workflows as systems that follow predefined code paths.',
        },
        {
          q: 'Which job should a business give an AI agent first?',
          a: 'Pick a job that repeats, follows written rules and has a number you already count. Good first jobs are calling back missed calls, answering quotes within the hour, checking claim statuses each morning and testing your own sign-up after every release. Run it beside a person for 2 weeks before it works alone.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the jobs and examples',
      text: 'Every company and case named is described from its own page or decision, read on 22 November 2026. Fernway and every figure in the picture are invented. The points on calls and chatbots are general information from US and Canadian sources, and nothing in it is legal advice.',
    },
  ],

  sources: [
    { title: 'Building effective agents', publisher: 'Anthropic', url: ANTHROPIC, date: '2024-12-19' },
    { title: 'Klarna AI assistant handles two-thirds of customer service chats in its first month', publisher: 'Klarna', url: KLARNA, date: '2024-02-27' },
    { title: 'Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts, Declaratory Ruling (FCC 24-17)', publisher: 'Federal Communications Commission', url: FCC, date: '2024-02-08' },
    { title: 'Moffatt v. Air Canada, 2024 BCCRT 149', publisher: 'Civil Resolution Tribunal of British Columbia', url: CRT, date: '2024-02-14' },
    { title: 'WebArena: A Realistic Web Environment for Building Autonomous Agents', publisher: 'Shuyan Zhou and others, arXiv 2307.13854 (v4)', url: WEBARENA, date: '2024-04-16' },
    { title: 'OpenAI Agents SDK', publisher: 'OpenAI on GitHub', url: AGENTS_SDK },
    { title: 'Plans and pricing', publisher: 'Zapier', url: ZAPIER_PRICING },
    { title: 'Pricing', publisher: 'n8n', url: N8N_PRICING },
    { title: 'Workflow automation templates', publisher: 'n8n', url: N8N_WORKFLOWS },
    { title: 'Copilot Studio pricing', publisher: 'Microsoft', url: COPILOT },
  ],

  related: [
    '/blueprints/talk-to-customers',
    'recipe:voice-agent-check',
    'recipe:competitor-tracking',
    'ai-agent-use-cases-for-business',
    'can-ai-make-phone-calls',
    'recipe:document-chaser',
    'recipe:order-receipt-ledger',
    'recipe:travel-booking-agent',
  ],
}

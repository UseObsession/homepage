import type { BlogPost } from './types'

/* Agent search guide A8 (_research/seo/agent-search-23nov/PLAN.md; approved by Seun 23 Nov 2026, "Yes, run the plan";
   brief in WRITER_BRIEF.md). Primary "sell ai automations"; secondaries from Google suggestions (US and UK, 23 Nov,
   autocomplete_23nov_sell.json). Outside facts read on their own pages on 23 Nov 2026: n8n's Creators page (badge and
   directory, no sale terms), Make's templates page (no publishing or sale terms) and partners page (partner track,
   no earnings terms), Zapier's pricing page, n8n's pricing page (no embed or white label terms on it). Obsession's
   prices come from src/lib/pricing/pricing.json. Selling blueprints is said only in the live words on /blueprints#sell:
   no share, percentage or payout date. Larkfield Dental and every figure in the picture are invented.
   No income promises: the cost sum is worked from list rates and the reader prices the job. */

const N8N_CREATORS = 'https://n8n.io/creators/'
const N8N_PRICING = 'https://n8n.io/pricing/'
const MAKE_TEMPLATES = 'https://www.make.com/en/templates'
const MAKE_PARTNERS = 'https://www.make.com/en/partners'
const ZAPIER_PRICING = 'https://zapier.com/pricing'

export const post: BlogPost = {
  slug: 'build-and-sell-ai-automations',
  title: 'How to build and sell AI automations as a business, and what each way pays',
  dek: 'Four ways to sell AI automations to businesses: one-off builds, a monthly managed service, templates and blueprints other teams run. Each has its own way of being paid, and an automation that can call, text and sign in earns more than one that moves data between apps.',
  metaTitle: 'How to build and sell AI automations as a business: 4 ways',
  description:
    'How to sell AI automations to businesses in 4 ways: one-off builds, monthly service, templates and blueprints, with what each pays and costs to run.',
  answer:
    'You can sell AI automations four ways: a one-off build, a monthly managed service (agents as a service), templates other builders copy, or blueprints other teams run. Builds pay on delivery, managed services every month, and template libraries listed no sale terms on 23 November 2026. An automation whose agent has its own phone number, inbox and browser can do the work itself, so it is worth more to a buyer than a workflow that only moves data.',
  primaryKeyword: 'sell ai automations',
  keywords: [
    'build and sell ai automations',
    'selling ai automations to businesses',
    'sell ai workflows',
    'can you sell ai workflows',
    'ai agents as a service',
    'agent as a service business model',
  ],
  category: 'For agencies',
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
      title: 'Missed-call rescue, Larkfield',
      who: 'An agent with Larkfield’s own number and inbox, run by its agency as a monthly service',
      rows: [
        { time: 'Tue 12:41', text: 'Missed call from a new patient', tone: 'info' },
        { time: 'Tue 12:41', text: 'Text sent from the agent’s number, in the clinic’s name: “Sorry we missed you. This is Larkfield’s AI assistant. Want a time?”', tone: 'ok' },
        { time: 'Tue 12:44', text: 'Patient replies “Thursday morning?”', tone: 'info' },
        { time: 'Tue 12:45', text: 'Two slots offered from the clinic’s calendar', tone: 'ok' },
        { time: 'Tue 12:52', text: 'Booked, confirmation emailed from the agent’s inbox', tone: 'ok' },
        { time: 'Fri 09:00', text: 'Weekly report with every message sent to the agency’s client', tone: 'info' },
      ],
      foot: 'Every step is in the log with the text or email behind it. Example: Larkfield Dental and every time here are invented.',
    },
  },
  blocks: [
    {
      kind: 'p',
      text: 'You can sell AI automations to businesses in four ways: build one and hand it over, run it for the client every month, sell the template to other builders, or let other teams run it as a blueprint. Each is paid differently and breaks in its own way, and an automation that can act earns the most.',
    },

    { kind: 'h2', id: 'what-you-sell', text: 'What is an AI automation, and what do buyers pay for?' },
    {
      kind: 'p',
      text: 'An AI automation is a job that runs without a person starting it: a new lead arrives, a message is read and answered, a form is filled, a report is sent. A workflow moves data between apps along fixed steps. An agent chooses its own next step, such as reading an email and deciding whether to reply or ask a person. Anthropic, which makes the Claude models, draws the same line in [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), which describes workflows as following “predefined code paths” and agents as directing “their own processes and tool usage”.',
    },
    {
      kind: 'p',
      text: 'Buyers do not pay for the model or the tool. They pay for the outcome that used to need a person, and [what AI agents can do for a business](/blog/what-can-ai-agents-do-for-business) lists the jobs: every missed call answered, every document chased, every enquiry replied to in minutes. A sale rests on three answers: who pays for the job today, what it costs now, and what the result looks like in the buyer’s inbox on Monday morning.',
    },

    { kind: 'h2', id: 'four-ways', text: 'What are the four ways to sell AI automations?' },
    { kind: 'h3', id: 'one-off', text: 'One-off builds' },
    {
      kind: 'p',
      text: 'You scope a job, build it in the client’s accounts, test it, train the client’s team and hand it over for a fixed fee. You are paid when you deliver, so the income stops when the project does. Buyers expect a written scope, a test on real cases and a short handover document. The common break is silence after delivery: an automation that reads a portal or a web page stops the day the site changes, and the client calls the person who built it.',
    },
    { kind: 'h3', id: 'managed', text: 'A monthly managed service (agents as a service)' },
    {
      kind: 'p',
      text: 'You run the agents for the client and charge a monthly fee, so the work behaves like a subscription. This is what people mean by agents as a service, or an agent as a service business model: the client buys a result each week, and you own the setup, the monitoring and the fixes. Buyers expect a named result, a weekly report and a reply when something fails. What breaks is the record. If you cannot show a client what the agent sent and who answered on a given day, the first complaint becomes a cancellation.',
    },
    { kind: 'h3', id: 'templates', text: 'Templates sold to other builders' },
    {
      kind: 'p',
      text:
        'Template libraries are where builders look for a starting point, as [free AI agent templates](/blog/ai-agent-templates-free) shows. On 23 November 2026, [n8n’s Creators page](' +
        N8N_CREATORS +
        ') offered a Verified Creator Badge and a place in its Creators Directory, and showed each creator’s template count. [Make’s template page](' +
        MAKE_TEMPLATES +
        ') showed a large library you can filter by app and category and offered no publishing or sale terms. Neither page said creators can charge for templates or how they would be paid, so check each site’s current terms before you plan income around one. The reach is real and the payment is unclear. Buyers of a template expect it to run on their own accounts with a few edits, and the common break is a template that stops when an app, a site or a login changes and has no one answering questions about it.',
    },
    { kind: 'h3', id: 'blueprints', text: 'Blueprints other teams run on their own plan' },
    {
      kind: 'p',
      text: 'A blueprint is a ready-made job that runs on its own agents, so the team that picks it needs no setup of its own. On Obsession you can publish a blueprint you built, and other teams run it on their own plan; you’re paid when they do. The buyer expects it to work the day they pick it, with its results landing in Slack, email, a CRM or a sheet. The break to plan for is the same as for any product: a job that depends on a site or a form needs someone to keep it current.',
    },

    { kind: 'h2', id: 'what-breaks', text: 'What breaks in AI automations that you sell?' },
    {
      kind: 'p',
      text: 'Four faults account for most of the calls a builder gets after a sale. Each has a plain fix, and each is cheaper to design out before the first client than to repair for the fifth:',
    },
    {
      kind: 'list',
      items: [
        '**A site or form changes.** The agent reads a page the way a person does, and a redesigned page can stop it. A pass: a daily run that checks a known result and alerts you the morning it fails.',
        '**No phone number.** A text-back or a booking call needs a number the client’s customers recognise, and [whether AI can make phone calls](/blog/can-ai-make-phone-calls) depends on consent rules. A pass: the number belongs to the persona and stays the same for months.',
        '**No inbox of its own.** Sign-up emails, login codes and replies need an address the agent controls. A pass: each client has its own inbox, so one client’s mail never reaches another.',
        '**No record.** A client who cannot see what the agent did stops trusting it. A pass: every email, text, call and page is kept, with the screenshot or recording, and goes into the weekly report.',
      ],
    },

    { kind: 'h2', id: 'worth-more', text: 'Why an automation that can act sells for more' },
    {
      kind: 'p',
      text: 'A workflow that moves a lead from a form to a spreadsheet saves a person a minute. An automation that can call back, text, email, sign in to a portal and book the visit does the whole job, so the saving is the person’s hours and the revenue from the enquiry that would have gone cold. Buyers price against what the job costs them today, so a job that replaces hours of a person’s week is easier to price than one that replaces a tool subscription.',
    },

    { kind: 'h2', id: 'cost', text: 'What does it cost to run one client’s automation?' },
    {
      kind: 'p',
      text: 'Work the cost per client before you set a monthly fee. Take the missed-call text back job for one dental clinic, using Obsession’s list rates read on 23 November 2026 (a paid plan’s fee covers that much usage at list rates):',
    },
    {
      kind: 'list',
      items: [
        '**A US or UK number:** $2 a month.',
        '**One inbox:** $0.50 a month.',
        '**300 texts a month at $0.015 each:** $4.50.',
        '**US texting registration:** $25 once, then $17 a month per campaign, a fixed fee outside plans.',
        '**Total at list rates:** $24 a month, plus the model tokens each reply uses and the $25 set-up.',
      ],
    },
    {
      kind: 'p',
      text: 'Texting registration is $17 of the $24, so about 70% of the running cost is a fixed fee. The AI itself is the small part. That changes how you price: a client with 30 texts a month costs nearly as much to run as one with 300, so set a floor fee that covers registration.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'One clinic, per month',
        rows: [
          { label: 'US or UK number', value: '$2.00' },
          { label: 'One inbox', value: '$0.50' },
          { label: '300 texts at $0.015', value: '$4.50' },
          { label: 'Texting registration', value: '$17.00', note: 'Fixed, outside plans' },
        ],
        total: { label: 'At 10,000 clinics', value: '$240,000', note: '10,000 × $24; 200 clinics is $4,800' },
      },
      caption: 'The sum for one client, 200 clients and 10,000, at list rates read on 23 November 2026. Example: no fee is suggested.',
    },
    {
      kind: 'p',
      text: 'Add your own time, then set the monthly fee against what a clinic pays a receptionist or an answering service today. An idle persona costs nothing, so an agent that waits for a call costs what it uses.',
    },

    { kind: 'h2', id: 'where-to-sell', text: 'Where to sell or run AI automations, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to sell or run AI automations, from each provider’s own pages, as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Selling direct to clients, built on your own stack',
          'Full control of scope, price and the client relationship',
          'Your hours, your hosting and your model costs',
          'You carry every fix, and you need your own phone numbers, inboxes and logs',
          'Builders with a few steady clients',
        ],
        [
          'n8n: community templates and Creators Directory',
          'A public directory and a Verified Creator Badge for builders',
          'Cloud and self-hosted plans on its [pricing page](' + N8N_PRICING + ')',
          'Its Creators page states no sale terms for templates',
          'Builders who want reach and a profile',
        ],
        [
          'Make: template library and partner track',
          'A template library by app and a partner track for service providers',
          'Plans on its pricing page',
          'Its pages state no earnings terms for partners or template publishers',
          'Consultancies that want a certified partner listing',
        ],
        [
          'Zapier: templates and agents',
          'Free plan with 100 tasks and 400 agent activities a month',
          'Professional from $19.99 a month for 750 tasks, billed annually; see its [pricing page](' + ZAPIER_PRICING + ')',
          'Runs inside the client’s own apps, with no number or inbox of its own',
          'Jobs between apps a client already uses',
        ],
        [
          'Obsession (ours): [blueprints](/blueprints#sell), [your own brand](/agencies), [describe your job](/no-code)',
          'Agents with their own number, inbox and browser, every step in an event log; run blueprints for clients under your brand, or publish one for other teams to run',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment and at any identity check',
          'Jobs that call, text, email and sign in, for many clients',
        ],
      ],
    },
    {
      kind: 'p',
      text: `Make’s [partner programme page](${MAKE_PARTNERS}) listed no earnings terms for templates when read on 23 November 2026.`,
    },

    { kind: 'h2', id: 'start', text: 'How to start selling AI automations' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick one job a buyer already pays a person for.** A pass: you can name what a receptionist, collections clerk or admin charges for it today.',
        '**Run it for one client and keep the log.** A pass: after two weeks you can show every message sent and every result.',
        '**Cost it per client.** A pass: the list-rate sum in the cost section, plus your own hours, sits well under the monthly fee.',
        '**Write the offer as a result.** A pass: “every missed call answered within 5 minutes”, with a weekly report.',
        '**Add the next client before you build anything new.** A pass: the second client runs on the same setup in an afternoon.',
        '**Decide your route.** Run it for clients under your own brand, or publish it so other teams run it.',
      ],
    },
    {
      kind: 'cta',
      text: 'Run blueprints for every client under your own brand, with each result in a dashboard and report that carry your name.',
      to: '/agencies',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'limits', text: 'What to leave out of an automation business' },
    {
      kind: 'p',
      text: 'Obsession’s agents say they are an AI to anyone they speak to, text and call only people who gave the business their number, sign in only with logins you provide and stop at any identity check. They stop before payment unless you give the card, and never get round a CAPTCHA or a bot block. Choose jobs that fit those rules, such as those in [AI voice agents for small businesses](/blog/ai-voice-agent-for-small-business). Job application bots, appointment slot sniping, ticket scalping and fake reviews do not fit, and buyers who ask for them are not the clients to build around. The full rules are on [the agents page](/agents).',
    },

    { kind: 'h2', id: 'one-identity', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. For a seller of automations, that decides what you can promise a client and how often you are called back.',
    },
    {
      kind: 'p',
      text: 'The missed-call job uses three pieces. The **phone number** is a US or UK number the agent owns, and it sends and receives texts, makes and takes calls and receives sign-in codes; texts go out from the agent’s number, in the client’s name. The **inbox** is a real address the agent owns, with every thread kept and a webhook (a message to your own system) on each new email. The **browser** is a cloud browser whose sessions keep their logins between runs, so the agent signs in once with the logins you give it and stays signed in. A **sandbox**, a computer started only when a task needs to run code, joins when the job reads a spreadsheet.',
    },
    {
      kind: 'p',
      text: 'A persona puts those pieces under one identity: one name, one address, one number, one browser profile. The sign-in code that arrives by text reaches the same agent whose browser waits at the login page. A patient who replies by email and then calls reaches the same agent, with the whole history. A persona costs nothing while it waits, though its number and inbox bill monthly.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the persona touches lands in one event log, dated, with the email, screenshot or recording behind it. For you that is the weekly report and the answer to “what did it send on Tuesday?”. Results reach Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent.',
    },
    {
      kind: 'p',
      text: 'The usual build is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working for every client, and the seams are where jobs break: the code arrives at one vendor while the browser waits at another, and the call log and the email thread sit in different places. If a job needs only one piece, one specialist can be enough. For several, [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) sets the options side by side, and [the guide to the services an agent runs on](/blog/ai-agent-infrastructure-stack) covers email, phone, browser and sandbox services.',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up the agent. Developers use the API, SDKs or MCP, the standard way AI assistants call tools. The same setup serves one agent for a freelancer or ten thousand, each with its own identity and paid for by what each one uses.',
    },
    {
      kind: 'p',
      text: 'Once a persona has its own number, inbox and browser, the same one can also chase a client’s missing documents by text and email, check each supplier’s portal every Monday and flag a price rise, or enquire at 500 locations and report which never replied.',
    },
    {
      kind: 'cta',
      text: 'Describe the job in your own words and Obsession sets it up as a blueprint and spins up an agent to run it.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about selling AI automations' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can you sell AI workflows?',
          a: 'Yes. Builders sell them as one-off builds, as a monthly managed service, as templates and as blueprints other teams run. Builds pay on delivery and managed services pay each month. On 23 November 2026, n8n’s and Make’s pages listed no sale terms for templates, so check each site’s current terms before you plan on template income.',
        },
        {
          q: 'What does agents as a service mean?',
          a: 'It means a business runs AI agents for clients and charges a monthly fee for the result, much as a software company charges for a subscription. The client buys, for example, every missed call answered, and the agency owns the setup, monitoring and fixes.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'How do I sell AI automations to businesses?',
          a: 'Pick one job a business already pays a person for, run it for one client, keep a log of every action and show the result in a weekly report. Then price it against what the job costs the buyer today, and add clients on the same setup.',
          link: { label: 'Under your own brand', to: '/agencies' },
        },
        {
          q: 'Can I sell templates I build?',
          a: 'You can publish them, but sale terms depend on the platform. On 23 November 2026, n8n’s Creators page described a badge and a directory listing, and Make’s templates page described no way to sell. On Obsession, you can publish a blueprint you built, and other teams run it on their own plan; you’re paid when they do.',
          link: { label: 'Sell a blueprint', to: '/blueprints#sell' },
        },
        {
          q: 'What does an AI automation business cost to run per client?',
          a: 'It depends on the job. At Obsession’s list rates on 23 November 2026, a missed-call text back for one clinic with 300 texts a month is about $24 a month: a $2 number, a $0.50 inbox, $4.50 of texts and $17 for texting registration, plus model tokens and a $25 registration fee once.',
        },
        {
          q: 'Do I need to code to sell AI automations?',
          a: 'No. You can pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up an agent to run it. Builders who write code can use the API.',
          link: { label: 'Describe your job', to: '/no-code' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Sources and limits',
      text: 'Library, plan and price details come from each provider’s own pages, read on 23 November 2026. They change, so check each page before you buy. The guide describes ways to sell and what they cost to run, and promises no income. Larkfield Dental and every time in the picture are invented.',
    },
  ],

  sources: [
    { title: 'Building effective agents', publisher: 'Anthropic', url: 'https://www.anthropic.com/engineering/building-effective-agents', date: '2024-12-19' },
    { title: 'Creators', publisher: 'n8n', url: N8N_CREATORS },
    { title: 'Pricing', publisher: 'n8n', url: N8N_PRICING },
    { title: 'Templates', publisher: 'Make', url: MAKE_TEMPLATES },
    { title: 'Partners', publisher: 'Make', url: MAKE_PARTNERS },
    { title: 'Plans and pricing', publisher: 'Zapier', url: ZAPIER_PRICING },
  ],

  related: ['/no-code', 'recipe:missed-call-text-back', 'recipe:inbox-agent', 'what-can-ai-agents-do-for-business', 'ai-voice-agent-for-small-business'],
}

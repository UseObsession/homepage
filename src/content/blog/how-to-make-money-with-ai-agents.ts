import type { BlogPost } from './types'

/* Money guide (_research/seo/agent-search-23nov/PLAN.md, A2; Seun's "Yes, run the plan", 23 Nov 2026). Primary "how to make
   money with ai agents"; secondaries from Google suggestions (US and UK, 23 Nov 2026, autocomplete_23nov_ideas.json):
   how to make money selling ai agents, ai agents that make money, do ai agents make money, how to make money building
   ai agents. Prices of what customers pay today were read on their own pages on 23 November 2026: Goodcall (Starter $79,
   Growth $129, Scale $299), Ruby (50 minutes $250, 100 minutes $395) (Compact from £199 a month) and Acuity
   Scheduling (Starter $20 a month billed monthly, Standard $34). Obsession's rates are the list rates in
   src/lib/pricing/pricing.json read 23 Nov: inbox $0.50 a month, emails $0.40 per 1,000, a US or UK number $2 a month,
   texts $0.015, calls $0.012 a minute, browser $0.10 an hour, US texting registration $25 once and $17 a month per
   campaign. Every example business is invented at a .example address and every input is labelled an example. The sums
   leave out model tokens, which depend on the model chosen (from $0.975 per million input tokens). No income promise,
   no share or payout for blueprint builders. British English, no dashes. */

const GOODCALL = 'https://www.goodcall.com/pricing'
const RUBY = 'https://www.ruby.com/pricing/'
const ACUITY = 'https://acuityscheduling.com/pricing'

export const post: BlogPost = {
  slug: 'how-to-make-money-with-ai-agents',
  title: 'How to make money with AI agents: 3 business models, with the running costs worked out',
  dek: 'Agents don’t earn money on their own. Businesses earn it by selling jobs that agents do. Three ways to build one, each with a worked example, what customers pay for the job today and what it costs to run at list rates.',
  metaTitle: 'How to make money with AI agents: 3 business models, costed',
  description:
    'Do AI agents make money? Not alone. Three ways to make money with AI agents, with what customers pay today, running costs at list rates and the risks.',
  answer:
    'AI agents don’t make money on their own; a business makes money when it sells a job that agents do. There are three models: run a service whose work agents do, set up and run agents for businesses under your own brand, or build a product where each user gets an agent. Each starts from a job people already pay for.',
  primaryKeyword: 'how to make money with ai agents',
  keywords: [
    'how to make money selling ai agents',
    'ai agents that make money',
    'do ai agents make money',
    'how to make money building ai agents',
  ],
  category: 'Build agent products',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'price',
      title: 'brightside.example · one practice a month',
      rows: [
        { label: 'Its own number', value: '$2.00', note: '1 number at $2 a month' },
        { label: 'Texts to missed callers and their replies', value: '$3.15', note: '210 texts at $0.015' },
        { label: 'Inbox and events', value: '$0.50', note: '1 inbox at $0.50 a month' },
        { label: 'US texting registration', value: '$17.00', note: 'A fixed fee per campaign' },
      ],
      total: { label: 'Running cost at list rates', value: '$22.65', note: 'Before model tokens' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'The fair answer to “do AI agents make money” is no, not by themselves. An agent is a worker. A business makes money when someone pays it for a job the agent does, and the margin is the price of the job less what the agent costs to run. So how to make money with AI agents is a question about which job to sell and to whom. The three models run from doing the job yourself to building a product your users run. Each has an invented business, what customers pay today for the same job and the running cost at list rates. You do the sum for your own prices.',
    },

    { kind: 'h2', id: 'what-agents-do', text: 'What an agent has to do before it can earn anything' },
    {
      kind: 'p',
      text: 'Most people have used ChatGPT or Claude and found that the AI can write but can’t do. It can’t take the call, answer an email from its own address, sign in to a portal or keep going every day. Work that businesses pay for sits in exactly those places: phones, inboxes and websites behind a login. An agent that earns money for someone therefore needs an identity of its own: a phone number, an inbox and a browser. Each of the three has to belong to the agent itself.',
    },
    {
      kind: 'p',
      text: 'The three models differ in who the customer is and who sets the agents up. One test applies to all: someone pays for this job today, and an agent can do it for less.',
    },

    { kind: 'h2', id: 'model-1', text: 'Model 1: run a service whose work agents do' },
    {
      kind: 'p',
      text: '**How the money comes in.** You sell a result, such as missed calls answered or documents chased, for a monthly fee or per result. The customer never sees or buys an agent. **What the agents do.** One agent, with its own number and inbox, per customer. It acts the way a person on the job would: it texts every missed caller, reads the reply, books the slot and sends the summary.',
    },
    {
      kind: 'p',
      text: 'Example: Brightside (brightside.example) texts back every missed call for dental practices, from a number the agent holds in the practice’s name, and books the callback. In the example, a practice misses 150 calls a month, 60 callers reply, and each text costs $0.015. The picture at the top of the page shows one practice’s month: $22.65 at list rates, $17 of it the US texting registration. Across 40 practices that is $906 a month before model tokens, and Obsession’s plan fees cover part of the usage. What customers pay today for the same job:',
    },
    {
      kind: 'list',
      items: [
        `Goodcall’s AI agent for small businesses was listed on 23 November 2026 at [$79 a month for about 150 calls, $129 for about 750 and $299 for about 3,000](${GOODCALL}).`,
        `Ruby’s live receptionists were listed at [$250 a month for 50 minutes and $395 for 100](${RUBY}).`,
      ],
    },
    {
      kind: 'p',
      text: '**The risks.** You promise the result, so a missed text is your problem. Texts go only to people who gave the business their number. In the US the sending number must be registered before the first text ([10DLC registration, step by step](/blog/10dlc-registration)). A [voice agent for a small business](/blog/ai-voice-agent-for-small-business) covers the call side of the job. **What it takes.** One trade to start with, a price list you can defend and a daily check of what every agent sent. For the missed-call job, [Missed call text back](/blueprints/missed-call-text-back) runs it as a ready blueprint.',
    },

    { kind: 'h2', id: 'model-2', text: 'Model 2: set up and run agents for businesses, under your own brand' },
    {
      kind: 'p',
      text: '**How the money comes in.** A monthly retainer from each business, plus a setup fee if you charge one. Customers see your brand, your dashboard and your report. This is the AI automation agency model, and the work is the same each time, so the first client is the slowest. **What the agents do.** Each business gets its own agent on a number the business can keep, an inbox and a browser, run for them every day.',
    },
    {
      kind: 'p',
      text: 'Example: Harbour Desk (harbourdesk.example) runs a front-desk agent for local trades under its own name. In the example, a business receives 150 calls a month of about 3 minutes, so 450 call minutes at $0.012 is $5.40. Add a number at $2, 150 texts at $0.015 ($2.25), an inbox at $0.50, 5 browser hours at $0.10 ($0.50) and the $17 texting registration. The total is $27.65 a business, or $414.75 for 15 businesses, plus whichever voice and language model you choose. Customers compare you with:',
    },
    {
      kind: 'list',
      items: [
        `Goodcall’s plans at [$79, $129 and $299 a month](${GOODCALL}), as listed on 23 November 2026.`,
        `Ruby’s [$250 and $395 a month](${RUBY}) for 50 and 100 minutes of a live receptionist.`,
      ],
    },
    {
      kind: 'p',
      text: '**The risks.** You are the vendor: when an agent mishears an address, the client rings you. Churn follows slow follow-up, so a daily review matters more than the launch. **What it takes.** A narrow offer, such as one trade in one city, and a report each client opens. Obsession runs blueprints for every client [under your own brand](/agencies), with each result in a dashboard and report that carry your name.',
    },
    {
      kind: 'cta',
      text: 'Run blueprints for every client under your own brand, with each result in a dashboard and report that carry your name.',
      to: '/agencies',
      label: 'Browse blueprints',
    },

    { kind: 'h2', id: 'model-3', text: 'Model 3: build a product where each user gets an agent' },
    {
      kind: 'p',
      text: '**How the money comes in.** Subscriptions from the people who use your app, at a price you set. The agent is the feature. **What the agents do.** Every user gets their own persona with an inbox and a number, so the product can text a user’s clients and email in their name. This is the model for developers, or for a founder who works with one.',
    },
    {
      kind: 'p',
      text: 'Example: Tidy Tutor (tidytutor.example) gives each independent tutor an assistant that handles booking requests by text and email. In the example, one tutor’s assistant sends and receives 100 texts and 200 emails a month. Tutors pay today for [Acuity Scheduling, listed at $20 a month on monthly billing for 1 calendar and $34 for up to 6](' + ACUITY + '), which books slots but doesn’t answer.',
    },
    {
      kind: 'table',
      caption: 'Example: one active tutor’s month at list rates, before model tokens',
      cols: ['Line', 'Sum', 'Cost'],
      rows: [
        ['A number', '1 at $2 a month', '$2.00'],
        ['An inbox', '1 at $0.50 a month', '$0.50'],
        ['Texts', '100 at $0.015', '$1.50'],
        ['Emails', '200 at $0.40 per 1,000', '$0.08'],
        ['One active tutor', '', '$4.08'],
        ['A tutor who never opens the app', 'Number and inbox, still billed monthly', '$2.50'],
      ],
    },
    {
      kind: 'p',
      text: 'Each business that texts needs a registered campaign, and carriers may treat each tutor as its own business. Check whether one campaign can cover the product. If one can, 1,000 active tutors cost $4,080 plus $17 a month, and 100,000 cost $408,000 plus $17. If not, add $17 a month per tutor: $21.08 each, or $21,080 for 1,000.',
    },
    {
      kind: 'p',
      text: '**The risks.** Product work is real work: onboarding, support and your own bugs. Per-user costs stay low, but your users’ messages are your responsibility, so honour opt-outs and say the agent is an AI. **What it takes.** A developer, or your own build, and one narrow user. Start from [the developers page](/developers).',
    },

    { kind: 'h2', id: 'compared', text: 'The three models side by side', compare: true },
    {
      kind: 'table',
      compare: true,
      caption: 'The three models, with Obsession’s own list rates; customer prices as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Run a service', 'The customer buys a result and never handles an agent', 'You set it; Brightside’s practice costs $22.65 a month to run', 'You promise the result', 'Anyone with one trade to serve'],
        ['Run agents under your brand', 'A retainer repeated across clients', 'You set it; $27.65 a month a business in the example', 'You are the vendor', 'Agencies and freelancers'],
        ['Build a product', 'One build serves every user', 'You set it; $4.08 to $21.08 a user in the example', 'Needs developer time', 'Developers and technical founders'],
        [
          'Obsession (ours): numbers, inboxes, browsers and blueprints behind all three',
          'Each agent has its own phone number, inbox and browser under one identity',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'It runs the work; you choose the job and the customer',
          'Teams that want all three without code',
        ],
      ],
    },

    { kind: 'h2', id: 'where-cost-sits', text: 'Where the running cost sits' },
    {
      kind: 'p',
      text: 'In Brightside’s practice, the biggest line is the $17 texting registration: 75% of the $22.65 month. The texts and the number together are $5.15. So the first question for a texting service is how many registered campaigns it needs, because each adds $17 a month whatever the volume.',
    },
    {
      kind: 'p',
      text: 'The other lever is waiting time. A persona costs nothing while it waits, so an agent that works a few days a month pays for those days of usage plus its number and inbox. Use your own volumes, and read the full rates before you quote.',
    },

    { kind: 'h2', id: 'what-fails', text: 'What doesn’t work' },
    {
      kind: 'list',
      items: [
        '**Spam.** Mass texts and cold calls to people who never gave a number break the rules on [what an agent may do](/agents), and carriers block unregistered senders.',
        '**Scraping behind logins you don’t own.** An agent signs in only with logins the customer provides, and stops at any identity check.',
        '**Fake reviews and ticket scalping.** They fail on ethics and on the terms of every site they touch.',
        '**Selling the idea, not the job.** A pitch about AI with no job named loses to a price list for a job someone already pays for.',
        '**No check on the work.** Agents make mistakes. Read the log every day for the first month.',
      ],
    },

    { kind: 'h2', id: 'one-identity', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. Each piece does one thing:',
    },
    {
      kind: 'list',
      items: [
        '**Inbox.** A real email address the agent owns. It sends and receives, keeps each thread and calls your webhook, a message to your own system, on every new email.',
        '**Phone number.** A US or UK number the agent owns. It sends and receives texts, makes and takes calls and receives sign-in codes. Texts go out from the agent’s number, in your business’s name.',
        '**Browser.** A cloud browser whose sessions keep their logins between runs, so the agent signs in once with the logins you give it and stays signed in.',
        '**Sandbox.** A computer started only when a task needs to run code, such as reading a spreadsheet.',
      ],
    },
    {
      kind: 'p',
      text: 'A persona puts them under one identity: one name, one address, one number, one browser profile. The sign-in code that arrives by text reaches the same agent whose browser waits at the login page, and a customer who replies by email and then calls reaches the same agent, with the whole history. A persona costs nothing while it waits, though its number and inbox bill monthly, and it answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in one event log, dated, with the email, screenshot or recording behind it. For a service, that is proof to show a client. Results reach Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent.',
    },
    {
      kind: 'p',
      text: 'The usual way is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working, and the places a job breaks are the seams: the code arrives at one vendor while the browser waits at another, and the call log and the email thread live in different places. If your job needs only one piece, a single specialist can be enough. For several, one platform is simpler to run. See [every piece on one API, beside AgentMail, Twilio, Browserbase and E2B](/compare/agentmail-twilio-browserbase-e2b) and [how the email, phone, browser and sandbox pieces fit together](/blog/ai-agent-infrastructure-stack).',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up the agent. Developers use the API, SDKs or MCP: `obsession.personas.create({ inbox: true, phone: "US", browser: true })` makes the identity, and `email.received` and `sms.received` events reach your webhook. One agent or ten thousand, each has its own identity.',
    },
    {
      kind: 'p',
      text: 'The same persona opens more work. It could collect quotes from 20 supplier sites each week, text clients for missing documents until they arrive or check a booking portal every morning. Each stays within the [agent rules](/agents).',
    },

    { kind: 'h2', id: 'where-to-start', text: 'Where to start' },
    {
      kind: 'p',
      text: 'Pick the model by who you are. A freelancer or founder with one trade starts with model 1. An agency or consultant starts with model 2. A developer starts with model 3. In each case, find the job, learn what customers pay today, work out the running cost with the list rates and sell to one customer before ten. The same agents scale from one customer to ten thousand, each with its own identity, paid for by what each one uses. Describe the job in your own words and Obsession sets it up and runs it with [no code](/no-code); [no-code AI agents](/blog/no-code-ai-agents) shows how that works. If the job needs calls, [can AI make phone calls](/blog/can-ai-make-phone-calls) sets out the rules.',
    },
    {
      kind: 'cta',
      text: 'Pick a ready-made job, or describe your own, and have agents with their own number, inbox and browser run it.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about making money with AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Do AI agents make money?',
          a: 'Not on their own. An agent does a job, and a business earns when someone pays for it. The margin is the price of the job less the cost of running the agent. Work out both before you start.',
        },
        {
          q: 'How can I make money with AI agents?',
          a: 'Three ways: run a service whose work agents do, set up and run agents for businesses under your own brand, or build a product where each user gets an agent. Each starts from a job people already pay for.',
          link: { label: 'Run agents under your own brand', to: '/agencies' },
        },
        {
          q: 'How do I sell AI agents to businesses?',
          a: 'Sell the job, not the agent: missed calls answered, invoices chased, a portal checked each morning. Name what customers pay today for that job, show your price and report the result every week. Start with one trade.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'Can I make money building AI agents without coding?',
          a: 'Yes, for models 1, 2 and 4. You pick a blueprint or describe the job in plain words, and agents run it. Model 3, a product with an agent per user, is built on the API.',
          link: { label: 'AI agents with no code', to: '/no-code' },
        },
        {
          q: 'How much does it cost to run an AI agent?',
          a: 'At Obsession’s list rates, a number is $2 a month, an inbox $0.50, texts $0.015 each, calls $0.012 a minute and a browser $0.10 an hour. A persona costs nothing while it waits, but its number and inbox bill monthly. Model tokens are extra and depend on the model.',
          link: { label: 'Start free', to: '/pricing' },
        },
        {
          q: 'What businesses can I run with AI agents?',
          a: 'Any that used to need people on phones, in inboxes or in portals: missed-call replies, document chasing, invoice reminders, price checks and booking. Check that the job passes the agent rules before you sell it.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices and examples',
      text: 'Customer prices are as each provider listed them on 23 November 2026 and change. Brightside, Harbour Desk and Tidy Tutor, and every input in the sums, are invented examples. Nothing here is a promise of income.',
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'Goodcall', url: GOODCALL, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Ruby', url: RUBY, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Acuity Scheduling', url: ACUITY, date: '2026-11-23' },
  ],

  related: ['/no-code', 'recipe:missed-call-text-back', 'recipe:document-chaser', 'ai-voice-agent-for-small-business', 'no-code-ai-agents'],
}

import type { BlogPost } from './types'

/* Agent search plan, Track 1, guide A6 (_research/seo/agent-search-23nov/PLAN.md; Seun's "Yes, run the plan", 23 Nov 2026).
   Primary "how to start an ai business" (Google suggestions, US and UK, 23 Nov 2026, autocomplete_23nov_ideas.json);
   secondaries from the same run. Readers: founders, freelancers and small business owners with an idea and no engineer.
   Spine: how-to guide, six steps each with what a pass looks like, costs at list rates from src/lib/pricing/pricing.json
   (read 23 Nov 2026), what is hard, the rules, FAQ. Obsession appears in the step that hands the job to agents, one
   sentence in the rules, one table-free cost worked example and 2 calls to action. No income promises, no figures for
   what customers pay (the reader checks public prices). Sources: the FCC ruling and the Campaign Registry fee guide, the
   same pages the phone-calls and 10DLC guides cite. clinic names are invented (.example). British English, no dashes. */

const FCC_24_17 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'
const TCR_FEES = 'https://www.campaignregistry.com/Assets/TCR%20Fees%20and%20Pricing.pdf'

export const post: BlogPost = {
  slug: 'how-to-start-an-ai-business',
  title: 'How to start an AI business with no code: from idea to your first 10 customers',
  dek: 'Six steps for founders, freelancers and small business owners: pick a job people already pay for, run it by hand once, hand it to agents with their own number, inbox and browser, price it and find your first 10 customers. Costs shown at list rates at every step.',
  metaTitle: 'How to start an AI business with no code: idea to first sale',
  description:
    'How to start an AI business with no code: pick a job people already pay for, run it by hand, hand it to agents, price it and find your first 10 customers.',
  answer:
    'To start an AI business, pick a job people already pay someone to do, run it by hand for one customer, then hand it to AI agents that work from their own phone number, inbox and browser. Running one customer costs a few dollars a month at list rates, and the Free plan costs $0.',
  primaryKeyword: 'how to start an ai business',
  keywords: [
    'how to start an ai business with no money',
    'how to start an ai business with no experience',
    'start a business with ai agents',
    'build a business with ai agents',
  ],
  category: 'Build agent products',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 9,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'flow',
      title: 'From idea to first customer',
            steps: [
        { label: 'Pick a paid job', detail: 'Missed calls at a dental clinic: someone is paid to return them', tone: 'info' },
        { label: 'Run it by hand', detail: 'Text back 20 missed calls for one clinic and time each reply', tone: 'info' },
        { label: 'Hand it to agents', detail: 'An agent with its own number texts back every missed call, day and night', tone: 'ok' },
        { label: 'Sell to 10 clinics', detail: 'Each clinic gets its own number and a weekly report', tone: 'ok' },
      ],
      foot: 'Example: the clinics and the service are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Founders, freelancers and small business owners can start an AI business without writing code, and with little money, by choosing a job that already has a price. Six steps take you from the idea to your first 10 customers, each with what a pass looks like and what it costs at list rates. A section on what is hard follows.',
    },

    { kind: 'h2', id: 'what-it-is', text: 'What is an AI business, and what changed' },
    {
      kind: 'p',
      text: 'An AI business sells a result that AI agents deliver, such as every missed call answered, every document chased or every supplier price checked. You sell the result and the agents do the work. Until recently an AI could write the reply but could not take the call, answer from its own email address, sign in to a portal or keep going every day. That gap is why work in phones, inboxes and portals needed a team.',
    },
    {
      kind: 'p',
      text: 'The change is agents that have what a person has: a phone number, an inbox and a browser of their own. With those, one person can run a service for 10 customers or 1,000. The six steps follow the order that wastes the least money.',
    },

    { kind: 'h2', id: 'step-1', text: 'Step 1: pick a job people already pay for' },
    {
      kind: 'p',
      text: 'Start from demand, not from the technology. A job someone already pays a person to do proves there is a buyer, so you don’t have to persuade anyone that the problem exists. Three checks take an afternoon and cost nothing:',
    },
    {
      kind: 'list',
      items: [
        '**Public prices.** Find 3 businesses that sell the job today, such as a call answering service, a bookkeeper or a document chasing service, and write down what each lists on its own pricing page.',
        '**Job posts.** Search job boards for the role. A business advertising for a part-time receptionist, an admin assistant or a collections clerk is paying for the job right now.',
        '**Freelance listings.** Search a freelance marketplace for the task and read what freelancers charge per job and what buyers say they need.',
      ],
    },
    {
      kind: 'p',
      text: 'It passes when you can name who pays, roughly what they pay and who they pay today. Choose jobs that used to need people on phones, in inboxes or in portals, and that you could explain in one sentence. [AI agent business ideas](/blog/ai-agent-business-ideas) lists 30 services with what each costs to run.',
    },

    { kind: 'h2', id: 'step-2', text: 'Step 2: run it by hand for one customer' },
    {
      kind: 'p',
      text: 'Before any agent, do the job yourself for one real customer. Offer one clinic, shop or firm the result for a month, and keep a written log of every step, every message and every exception. This costs your time and nothing else, which is why it works with no money. It passes when the customer would pay to keep it and you can write the job as a list of steps a new hire could follow.',
    },
    {
      kind: 'p',
      text: 'The log is your product. It shows the questions customers ask, the cases that need a person and the number that matters to the buyer, such as minutes to reply or documents received. Those are the numbers you report later.',
    },

    { kind: 'h2', id: 'step-3', text: 'Step 3: hand the job to agents' },
    {
      kind: 'p',
      text: 'Now give the written job to AI agents. Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. Two ways in: pick a [blueprint](/blueprints), a ready-made job such as [Missed call text back](/blueprints/missed-call-text-back), or describe your own job in plain words on [the no-code page](/no-code) and Obsession sets it up as a blueprint and spins up an agent to run it.',
    },
    {
      kind: 'p',
      text: 'Start on the Free plan, which costs $0 and includes 3 inboxes and a number that receives but does not send texts. Test an inbox job there; a text-back job such as missed call text back needs a paid plan. Run the job for your one customer and compare the agent’s work with your hand-run log. It passes when the agent handles the same cases your log shows, and anything final, such as a payment or a first message to someone new, waits for your click until you trust it. Results can land in Slack, email, a sheet or a CRM, so the customer sees them where they already work.',
    },

    { kind: 'h2', id: 'step-4', text: 'Step 4: work out the cost, then price it' },
    {
      kind: 'p',
      text: 'Add up what one customer costs to run at list rates, then set a higher price. The sum for one invented dental clinic, dentists.example, with an agent that texts back about 300 missed calls a month:',
    },
    {
      kind: 'list',
      items: [
        'A US number: $2 a month',
        'An inbox for replies and reports: $0.50 a month',
        '300 texts at $0.015 each: $4.50',
        'Total usage: $7 a month, before the texting registration',
      ],
    },
    {
      kind: 'p',
      text: 'US business texting also needs registration, which costs $25 once and $17 a month per campaign, which counts toward a plan’s covered usage; [The Campaign Registry’s fee guide](' +
        TCR_FEES +
        ') lists the carriers’ fees. Calls cost $0.012 a minute, plus $0.0676 a minute when the agent speaks in its own voice; the clinic’s texts-only sum above has no calls. A browser $0.10 an hour, and an idle agent costs nothing. A paid plan’s fee covers that much usage at list rates: Developer is $20 a month, Startup $99, Scale $499, and Enterprise starts at $1,500.',
    },
    {
      kind: 'p',
      text: 'Compare the sum with what customers pay today, from your step 1 notes. Price against the cost of the job being done by a person or a service, not against your usage cost. A customer who pays for a part-time receptionist compares you with that wage. A price with no reference point is a guess, so test it on your first few customers.',
    },
    {
      kind: 'p',
      text: '[Can AI make phone calls for you?](/blog/can-ai-make-phone-calls) covers the rules for call-based jobs, and [10DLC registration](/blog/10dlc-registration) explains US texting registration.',
    },

    {
      kind: 'table',
      caption: 'What each step costs at Obsession’s list rates, read on 23 November 2026, before registration and model tokens',
      cols: ['Step', 'What you do', 'Cost'],
      rows: [
        ['1 and 2', 'Check demand and run the job by hand', '$0'],
        ['3', 'Test one customer (inbox jobs on Free; texting needs a paid plan)', '$0'],
        ['4', 'One customer’s agent, 300 texts a month', '$7 a month of usage'],
        ['5', 'US texting registration', '$25 once, then $17 a month per campaign'],
        ['6', '200 customers, same job', '$1,400 a month of usage'],
        ['6', '10,000 customers, same job', '$70,000 a month of usage'],
        ['6', '1,000,000 customers, same job', '$7,000,000 a month of usage'],
      ],
    },
    { kind: 'h2', id: 'step-5', text: 'Step 5: find your first 10 customers' },
    {
      kind: 'p',
      text: 'Your first customer came from your own network. For the next nine, go where the job is already advertised:',
    },
    {
      kind: 'list',
      items: [
        '**Everyone who posted the job.** The businesses hiring for the role in step 1 have the need today. Write to them about the result they get.',
        '**People who know your first customer.** Ask for two introductions, with the number from your log as the reason.',
        '**A narrow group.** Pick one trade, such as dental clinics in one city, so your message and your report are the same for every customer.',
      ],
    },
    {
      kind: 'p',
      text: 'It passes when 10 customers have said yes to the same offer. If you plan to serve clients under your own name, [Obsession’s agencies page](/agencies) lets you run blueprints for every client under your own brand, with each result in a dashboard and report that carry your name.',
    },

    { kind: 'h2', id: 'step-6', text: 'Step 6: deliver, report and grow' },
    {
      kind: 'p',
      text: 'Each customer gets its own agent identity, so one customer’s number and messages never mix with another’s. Send each customer a weekly report with the numbers from your log: calls answered, minutes to reply, documents received. Every email, text, call and page lands in one event log, so a customer who asks what happened can see it.',
    },
    {
      kind: 'p',
      text: 'The cost per customer stays close to the sum in step 4 as you grow, because agents are paid for by what each one uses. At the example’s $7 usage, 200 customers is $1,400 of usage a month, 10,000 customers is $70,000, and the same list rates apply at every size.',
    },
    {
      kind: 'cta',
      text: 'Pick a ready-made job, or describe your own, and Obsession runs it with agents that have their own number, inbox and browser. Start free, with no credit card.',
      to: '/blueprints',
      label: 'Browse blueprints',
    },

    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'One clinic’s agent, a month',
        rows: [
          { label: 'US number', value: '$2.00' },
          { label: 'Inbox for replies', value: '$0.50' },
          { label: '300 texts at $0.015', value: '$4.50' },
          { label: 'Idle time', value: '$0', note: 'An idle agent costs nothing' },
        ],
        total: { label: 'Usage per month', value: '$7.00', note: 'Registration is extra' },
      },
      caption: 'Example: dentists.example is invented. Rates are Obsession’s list rates read on 23 November 2026.',
    },
    { kind: 'h2', id: 'hard', text: 'What is hard, and the rules that apply' },
    {
      kind: 'p',
      text: 'The agents are the easier part. Selling is harder: strangers have to trust you with their calls, emails and customers, so the first 10 customers take work, and your log and weekly reports are what earns their trust. Customers also want a person to call when something goes wrong, so plan for that.',
    },
    {
      kind: 'p',
      text: 'Rules shape which jobs you can offer. On [/agents](/agents), every Obsession agent says it is an AI to anyone it speaks to, texts and calls only people who gave the business their number, signs in only with logins you provide, and stops before payment unless you give it your card. In the US, the FCC ruled in February 2024 that voices made with AI count as artificial under the telephone consumer protection law, which brings consent rules into play ([FCC 24-17](' +
        FCC_24_17 +
        ')). This is general information, never legal advice; check the rules for your trade and country.',
    },

    { kind: 'h2', id: 'one-platform', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Take the clinic’s missed call text back. The agent needs a **phone number** it owns, a US or UK number that sends and receives texts, makes and takes calls and receives sign-in codes, with texts going out in the business’s name. It needs an **inbox**, a real address that sends and receives, keeps each thread and tells your own system about every new email through a webhook, which is a message sent to an address you choose. If it works in a booking portal, it needs a **browser** in the cloud whose sessions keep their logins between runs, so it signs in once with the logins you give it. A **sandbox**, a computer started only when a task needs to run code, covers jobs such as reading a spreadsheet of patients.',
    },
    {
      kind: 'p',
      text: 'A persona puts those pieces under one identity: one name, one address, one number, one browser profile. The sign-in code that arrives by text reaches the same agent whose browser waits at the login page. A patient who replies by email and then calls reaches the same agent, with the whole history. A waiting persona costs nothing for the agent itself, though its number and inbox still bill monthly, and it answers a new message in about 50 milliseconds without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent touches lands in one event log, dated, with the email, screenshot or recording behind it. Results reach Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent. For a business you run for clients, that log is your proof: when a clinic asks whether a call was answered, you open the entry.',
    },
    { kind: 'h3', id: 'one-or-four', text: 'One platform or four vendors' },
    {
      kind: 'p',
      text: 'The usual way to build this is four vendors: an email service, a phone and texting service, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working, and the seams are where a job breaks: the code arrives at one vendor while the browser waits at another, and the call log and the email thread live in different places. One person can launch in days, with one set of pieces, what used to need an engineer to stitch together.',
    },
    {
      kind: 'p',
      text: 'If your job needs only one piece, a single specialist can be enough. For the side-by-side, see [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) and [the pieces an AI agent needs, one by one](/blog/ai-agent-infrastructure-stack).',
    },
    { kind: 'h3', id: 'two-ways', text: 'Run it with no code, or with code' },
    {
      kind: 'p',
      text: 'Without code, pick a blueprint or describe the job in your own words, and Obsession sets it up and spins up the agent. With code, developers use the API, SDKs or MCP, the standard way AI agents call tools. Either way it is one agent or ten thousand, each with its own identity, paid for by what each one uses.',
    },
    {
      kind: 'p',
      text: 'Once the persona exists, the same identity can also:',
    },
    {
      kind: 'list',
      items: [
        'Send each clinic’s patients an appointment reminder by text and email the day before.',
        'Chase a clinic’s missing referral documents by email until they arrive.',
        'Read each supplier portal weekly, with the logins the clinic gives it, and flag a price rise.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about starting an AI business' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I start an AI business with no money?',
          a: 'Pick a job people already pay for, do it by hand for one customer at no cost, then move it to agents; the Free plan covers inbox jobs. Obsession’s Free plan costs $0 and includes 3 inboxes, and a paid plan’s fee covers that much usage at list rates.',
          link: { label: 'See the plans', to: '/pricing' },
        },
        {
          q: 'Can I start an AI business if I have never run one?',
          a: 'Start with a job you can explain in one paragraph and run it by hand first. That teaches you the work, and the written log becomes the instructions for the agent. You don’t need to code, because you describe the job in plain words and Obsession sets it up.',
          link: { label: 'The no-code way in', to: '/no-code' },
        },
        {
          q: 'Can I start a business with AI agents and no code?',
          a: 'Yes. Pick a blueprint or describe your own job in plain words, and Obsession spins up agents that each have their own phone number, inbox and browser to run it, for one customer or ten thousand.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'What is the best business to build with AI agents?',
          a: 'One where a job that needed people on phones, in inboxes or in portals already has a price. Ideas that pass the agent rules include missed call text back, document chasing and supplier price checks.',
          link: { label: 'AI agent business ideas', to: '/blog/ai-agent-business-ideas' },
        },
        {
          q: 'How much does it cost to run an AI agent business?',
          a: 'It depends on usage. At list rates a US number is $2 a month, an inbox $0.50, texts $0.015 each, and calls $0.012 a minute, plus $0.0676 a minute when the agent speaks in its own voice. An idle agent costs nothing. The sum for one example clinic, which only texts, is $7 a month, plus the fixed US texting registration.',
          link: { label: 'Rates', to: '/pricing' },
        },
        {
          q: 'Can I sell what I build to other businesses?',
          a: 'Yes. You can run blueprints for clients under your own brand, with each result in a dashboard and a report that carry your name.',
          link: { label: 'Run blueprints under your brand', to: '/agencies' },
        },
      ],
    },
    {
      kind: 'cta',
      text: 'Teams that serve clients start with a blueprint and their own brand on the reports.',
      to: '/agencies',
      label: 'Pick a blueprint',
    },
    {
      kind: 'note',
      title: 'About the numbers',
      text: 'Rates and plan prices are Obsession’s list prices as read on 23 November 2026 and can change; check the pricing page before you plan. dentists.example and the clinics in the illustration are invented. This is not legal or financial advice.',
    },
  ],

  sources: [
    {
      title: 'Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts, Declaratory Ruling (FCC 24-17)',
      publisher: 'Federal Communications Commission',
      url: FCC_24_17,
      date: '2024-02-08',
    },
    { title: 'TCR Fees and Pricing: General Guide', publisher: 'The Campaign Registry', url: TCR_FEES, date: '2026-08-13' },
  ],

  related: ['/use-cases/ai-agents-for-startups', '/founders', '/no-code', '/blueprints', 'recipe:missed-call-text-back', 'recipe:appointment-reminders', 'ai-agent-use-cases-for-business', 'no-code-ai-agents'],
}

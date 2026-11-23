import type { BlogPost } from './types'

/* Rewritten 23 Nov 2026 for the toolkit position (writer brief and Obsession section:
   _research/seo/agent-search-23nov/WRITER_BRIEF.md, OBSESSION_SECTION.md). It owns "ai agent use cases for business" and its
   neighbours; /blog/what-can-ai-agents-do-for-business keeps "what can ai agents do for my business" and is linked.
   Use cases are grouped by the seven types of blueprints, each tied to its blueprint (src/content/recipes/). Outside facts
   read on their own pages on 23 November 2026: Salesforce (20 May 2026), Meta's Muse post (8 Sep 2026, updated 10 Nov 2026)
   and Anthropic's Project Vend (27 Jun 2025). Klarna and Gartner are not used. Ridgeline Plumbing is invented. Rates come from
   src/lib/pricing/pricing.json (read 23 Nov). No dashes. */

const SALESFORCE = 'https://www.salesforce.com/news/stories/ai-service-agents-improve-customer-satisfaction/'
const MUSE = 'https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/'
const VEND = 'https://www.anthropic.com/research/project-vend-1'

const COLS = ['Use case', 'Fits', 'What the agent does', 'Result and where it lands', 'Blueprint']

export const post: BlogPost = {
  slug: 'ai-agent-use-cases-for-business',
  title: 'AI agent use cases for business: 25 jobs agents run, by type of work',
  dek: 'An AI agent that can only write is a drafting tool. One with its own phone number, inbox and browser finishes the job: it takes the call, answers the email and signs in to the portal. Each of the 25 use cases names the business it fits and what it costs to run.',
  metaTitle: 'AI agent use cases for business: 25 jobs, by type of work',
  description:
    'AI agent use cases for business, by type of work: 25 jobs agents finish with their own phone, inbox and browser, who each fits, the result and the cost.',
  answer:
    'AI agent use cases for business are jobs an agent finishes from start to end: answering missed calls, chasing documents, reading supplier portals, checking competitors’ prices and testing sign-ups. The jobs that touch the outside world need an agent with its own phone number, inbox and browser. Obsession groups 25 of them into seven types of blueprints, each with the business it fits and the result it sends to your tools.',
  primaryKeyword: 'ai agent use cases for business',
  keywords: [
    'ai agent use cases',
    'ai agent examples in real life',
    'what can ai agents do and not do',
    'ai agent ideas for business',
    'ai agent use cases for small businesses',
  ],
  category: 'Talk to customers',
  published: '2026-10-31',
  updated: '2026-11-23',
  readingMinutes: 13,
  order: 2,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'One agent at ridgeline-plumbing.example',
      who: 'Front desk agent, its own number, inbox and browser',
      rows: [
        { time: '06:40', text: 'Texted 4 callers missed overnight', detail: 'Each was offered the next free visit', tone: 'ok' },
        { time: '07:15', text: 'Booked every caller who replied', detail: 'Confirmation sent from the same number', tone: 'ok' },
        { time: '07:30', text: 'Signed in to the supplier portal', detail: 'Login code read from its own inbox', tone: 'ok' },
        { time: '07:34', text: 'Found copper pipe up 6% since Friday', detail: 'Screenshot saved beside last week’s', tone: 'late' },
        { time: '08:05', text: 'Chased a customer for a signed quote', detail: 'Second reminder set for 48 hours', tone: 'info' },
        { time: '08:30', text: 'Posted the day’s list to #office', detail: 'Every call, text and page attached', tone: 'ok' },
      ],
      foot: 'One persona does four jobs. Every email, text, call and page lands in one log the owner reads at 09:00.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'AI agent use cases for business are jobs an AI agent finishes from start to end, not drafts it hands back to you. An AI agent is software that uses an AI model to carry out a task on its own, such as answering a customer, filling in a form or placing a call.',
    },
    {
      kind: 'p',
      text: 'A chat assistant can write the reply. Finishing the job means sending it from a real address, taking the call, reading the sign-in code that arrives by text and doing it again tomorrow. That takes an agent with its own phone number, inbox and browser, which is the line between the 25 use cases here and a better draft.',
    },
    {
      kind: 'p',
      text: 'The use cases are grouped by the seven types of [blueprints](/blueprints), the ready-made jobs Obsession runs. Each row names the business it fits, what the agent does, the result and where it lands, and the blueprint that runs it. For the wider question of what an agent can take off a business, see [what AI agents can do for a business](/blog/what-can-ai-agents-do-for-business).',
    },

    { kind: 'h2', id: 'talk', text: 'Talk to customers: four jobs on the phone, by text and by email' },
    {
      kind: 'p',
      text: 'These jobs answer people who contact the business or who are owed a follow-up. The agent says it is an AI to anyone it speaks to, and it texts or calls only people who gave the business their number.',
    },
    {
      kind: 'table',
      caption: 'Four use cases for an agent that talks to customers, with what each fits and where its result lands',
      cols: COLS,
      rows: [
        [
          'Missed call text back',
          'Trades, clinics, salons, any business that misses calls while it works',
          'Texts each caller within seconds, answers from your price list and hours, offers a time',
          'Each booking in your calendar, each thread in your inbox',
          '[Missed call text back](/blueprints/missed-call-text-back)',
        ],
        [
          'Speed to lead callback',
          'Any business with a web form, from agencies to solar installers',
          'Calls each new form lead within a minute, texts those who miss the call',
          'Booked or passed to your team, with the transcript on the CRM contact',
          '[Speed to lead callback](/blueprints/speed-to-lead-callback)',
        ],
        [
          'Appointment reminders',
          'Clinics, studios, tutors, repair shops',
          'Texts everyone the day before, calls anyone unconfirmed, offers each no-show a new time',
          'Calendar updated, plus a daily no-show count',
          '[Appointment reminders](/blueprints/appointment-reminders)',
        ],
        [
          'Document chasing',
          'Accountants, immigration firms, lenders, landlords',
          'Emails and texts each person for the missing file until it arrives, then checks it',
          'Every file in one folder, and a daily list of who still owes what',
          '[Document chaser](/blueprints/document-chaser)',
        ],
      ],
    },

    { kind: 'h2', id: 'test', text: 'Test sign-up and agents: four jobs that check what a new user meets' },
    {
      kind: 'p',
      text: 'A product team finds out about a broken welcome email from a customer. These jobs find out first, because an agent signs up as a new user after every release and keeps what arrives.',
    },
    {
      kind: 'table',
      caption: 'Four use cases for an agent that tests sign-up, with what each fits and where its result lands',
      cols: COLS,
      rows: [
        [
          'QA on your own sign-up',
          'Software and subscription companies that ship weekly',
          'Signs up after each release, opens every email and link, and screenshots each step',
          'The step that broke, in your event log and a Slack channel',
          '[QA on your own flows](/blueprints/website-audit)',
        ],
        [
          'Sign-in code timing',
          'Apps that send codes by text, email or call',
          'Signs in every night and times each code against its expiry',
          'Late or missing codes flagged that night',
          '[Sign-in code check](/blueprints/sign-in-code-check)',
        ],
        [
          'First 14 days of messages',
          'Companies that sell in several countries',
          'Lives a new user’s first two weeks in each country and times every message',
          'Anything missing flagged the day it was due',
          '[Delivery monitoring](/blueprints/delivery-monitoring)',
        ],
        [
          'Lead response checks',
          'Sales teams that pay for inbound leads',
          'Fills in your forms as a new lead and times how fast sales replies',
          'Your speed to lead on every channel, and each lead nobody answered',
          '[Lead response checks](/blueprints/lead-leaks)',
        ],
      ],
    },

    { kind: 'h2', id: 'build', text: 'Build agent products: three ways to give every user an agent' },
    {
      kind: 'p',
      text: 'Here the agent is the product. A founder or developer builds an app, and each user or customer gets an agent with its own address and number.',
    },
    {
      kind: 'table',
      caption: 'Three use cases for building agent products, with what each fits and where its result lands',
      cols: COLS,
      rows: [
        [
          'An email agent on its own address',
          'Support desks, recruiters, small firms drowning in repeat questions',
          'Answers each email in its own thread from written rules, hands the rest to a person with a draft',
          'Every thread in your event log',
          '[Inbox agent](/blueprints/inbox-agent)',
        ],
        [
          'An assistant people can text',
          'Concierge, coaching and membership services',
          'Answers on its own iMessage line, with a number for Android users',
          'Every message, reply and file in one log',
          '[iMessage assistant](/blueprints/imessage-assistant)',
        ],
        [
          'An agent for every user of your app',
          'Founders building agent products',
          'Gets each user an inbox, a number and a browser through the API',
          'Each user’s history under one identity',
          '[Build agent products](/blueprints/build-agent-products)',
        ],
      ],
    },

    { kind: 'h2', id: 'logins', text: 'Work behind logins: four jobs in portals nobody has time to open' },
    {
      kind: 'p',
      text: 'Much of the routine work in logistics, health, finance and retail sits behind a login. The agent signs in only with logins you provide, catches the code sent to its own number or inbox, and stays signed in between runs.',
    },
    {
      kind: 'table',
      caption: 'Four use cases for an agent that works behind logins, with what each fits and where its result lands',
      cols: COLS,
      rows: [
        [
          'Invoice and receipt collection',
          'Any business with many vendor portals',
          'Downloads each new invoice every week and files it',
          'One folder and one sheet, missing invoices first',
          '[Invoice collector](/blueprints/invoice-collector)',
        ],
        [
          'Load tracking',
          'Freight brokers and carriers',
          'Reads every load in each carrier portal four times a day',
          'One sheet with status, ETA and proof of delivery, late loads first',
          '[Load tracking](/blueprints/load-tracking)',
        ],
        [
          'Prior authorisation status',
          'Clinics and billing teams',
          'Reads every pending request in the payer portals each morning',
          'By 07:00, what changed overnight, each with its screenshot',
          '[Prior authorization status](/blueprints/prior-authorization-status)',
        ],
        [
          'Member prices and subscriber codes',
          'Retailers and price intelligence teams',
          'Signs in at each competitor every morning and reads what members see',
          'Every change, dated, with the screenshot before and after',
          '[Price watch](/blueprints/price-watch)',
        ],
      ],
    },

    { kind: 'h2', id: 'market', text: 'Watch the market: four jobs that keep what others send' },
    {
      kind: 'p',
      text: 'An agent can join a public list or start a public trial as a new customer, and a persona costs nothing while it waits, so it can stay subscribed for months. It keeps each email, text, offer and price as it arrived, with the date.',
    },
    {
      kind: 'table',
      caption: 'Four use cases for an agent that watches the market, with what each fits and where its result lands',
      cols: COLS,
      rows: [
        [
          'Competitor timelines',
          'Marketing and strategy teams, agencies',
          'Signs up at each competitor and keeps every email, text, offer and price',
          'A dated timeline per competitor, with screenshots',
          '[Competitor tracking](/blueprints/competitor-tracking)',
        ],
        [
          'Who discounts first',
          'Retention and CRM leads at brands',
          'Sits on every brand’s email and text list',
          'One timeline with each welcome series mapped',
          '[Email and SMS tracking](/blueprints/email-sms-tracking)',
        ],
        [
          'A finding for every prospect',
          'Sales teams using Clay or a CRM',
          'Signs up at each prospect and brings back what they send',
          'A finding and a log link on every row',
          '[Prospect intelligence](/blueprints/prospect-intelligence)',
        ],
        [
          'What AI assistants say about you',
          'Brands, clinics, local firms',
          'Asks AI assistants and checks listings about your business',
          'Each wrong fact traced to the page it came from',
          '[Listings and AI answers](/blueprints/listings-ai-answers)',
        ],
      ],
    },

    { kind: 'h2', id: 'train', text: 'Train and test agents: three jobs for teams that run their own agents' },
    {
      kind: 'p',
      text: 'Any team with an AI agent in front of customers needs to know it still answers well after the last update. These jobs give a test agent a real inbox, number and browser, so the test looks like a real customer.',
    },
    {
      kind: 'table',
      caption: 'Three use cases for training and testing agents, with what each fits and where its result lands',
      cols: COLS,
      rows: [
        [
          'Nightly evaluation',
          'Teams shipping an agent product',
          'Runs your agent through real tasks every night, each with its own inbox, number, browser and sandbox',
          'A score by morning, with the trail behind each failure',
          '[Nightly agent evaluation](/blueprints/nightly-agent-evaluation)',
        ],
        [
          'Answer drift',
          'Support and AI operations leads',
          'Asks your agent your hardest cases daily and after every update',
          'Every changed answer, before and after',
          '[Drift watch](/blueprints/drift-watch)',
        ],
        [
          'Vendor shortlist test',
          'Buyers choosing an AI support or sales agent',
          'Runs your cases on every shortlisted vendor’s agent',
          'Answers and handoffs side by side, dated',
          '[Vendor agent check](/blueprints/vendor-agent-check)',
        ],
      ],
    },

    { kind: 'h2', id: 'buy', text: 'Buy, book and order: three jobs that end in a confirmation' },
    {
      kind: 'p',
      text: 'These jobs spend money, so the rules are tighter: the agent stops before payment unless you give it your card, and it works inside limits you set.',
    },
    {
      kind: 'table',
      caption: 'Three use cases for an agent that buys, books and orders, with what each fits and where its result lands',
      cols: COLS,
      rows: [
        [
          'Travel booking',
          'Teams that book flights and hotels',
          'Turns a trip request in Slack into flights and a hotel inside your policy',
          'Each confirmation, receipt and schedule change kept on the trip',
          '[Travel booking agent](/blueprints/travel-booking-agent)',
        ],
        [
          'Supplier reorders',
          'Restaurants, clinics, workshops',
          'Reorders when stock falls under its level, at the price you set',
          'Confirmation and delivery date logged, anything over price held for a person',
          '[Supplier reorder agent](/blueprints/supplier-reorder-agent)',
        ],
        [
          'Can an AI shopper buy from you?',
          'Online stores',
          'Shops your store each morning the way shoppers’ AI agents do',
          'The step where it got stuck, with a screenshot',
          '[Agent checkout test](/blueprints/agent-checkout-test)',
        ],
      ],
    },

    { kind: 'h2', id: 'costs', text: 'What three of these cost to run' },
    {
      kind: 'p',
      text: 'Agents are paid for by what they use, so the sum is short. The table uses Obsession’s list rates as of 23 November 2026, before the AI model’s own charges, and the volumes are examples.',
    },
    {
      kind: 'table',
      caption: 'Monthly cost of three use cases at list rates, for one business and for 100 businesses; volumes are examples',
      cols: ['Use case', 'What it uses in a month', 'Rates', 'One business', '100 businesses'],
      rows: [
        ['Missed call text back', '1 number, 450 texts', '$2 a month; $0.015 a text', '$8.75', '$875'],
        ['Morning portal check', '1 number, 1 inbox, about 5 browser hours', '$2; $0.50; $0.10 an hour', '$3.01', '$301'],
        ['Inbox agent', '1 inbox, 3,000 emails sent', '$0.50; $0.40 per 1,000', '$1.70', '$170'],
      ],
    },
    {
      kind: 'p',
      text: 'A waiting persona costs its number and inbox, nothing more. US texting adds a registration, $25 once and $17 a month per campaign, and it counts toward what a plan covers. Each business that texts needs its own, so the 100-business figure for the first row grows by $25 once and $17 a month for each business that texts.',
    },

    { kind: 'h2', id: 'real', text: 'Real companies using AI agents, in their own words' },
    {
      kind: 'p',
      text: 'Each example comes from the company’s own announcement or report, linked with its date.',
    },
    {
      kind: 'list',
      items: [
        '**Salesforce, 20 May 2026.** A survey of 3,075 service professionals, run from 9 March to 4 April 2026, found 66% of service organisations using agentic AI, up from 39% in 2025. It also found 72% of service operations professionals name data readiness as a major blocker. [Salesforce’s release](' +
          SALESFORCE +
          ') has the method.',
        '**Meta, 8 September 2026.** Muse, Meta’s personal agent, can open a browser, fill out forms and negotiate for a person. It checks with the person before sensitive actions such as sending an email or making a purchase. [Meta’s announcement](' +
          MUSE +
          ') was updated on 10 November 2026.',
      ],
    },
    {
      kind: 'p',
      text: 'Each of these is an agent doing work that used to need a person on the phone, in the inbox or in a portal. Two of them also say where the limits sit, which is the next section.',
    },

    { kind: 'h2', id: 'limits', text: 'What agents can’t do yet' },
    {
      kind: 'p',
      text: 'Agents fail in predictable places. Knowing them is how a business picks a first job that works.',
    },
    {
      kind: 'list',
      items: [
        '**Run a shop alone.** In Anthropic’s [Project Vend](' +
          VEND +
          '), published on 27 June 2025, an AI agent ran a shop in the company’s San Francisco office. It sold items below cost, gave away discounts when asked and for a period told customers to pay into a payment account it had made up. The shop did not make money. Give an agent a job with written rules, and keep pricing and policy decisions with a person.',
        '**Prove its own value.** Pick a job you can count, such as bookings or late invoices, and compare it with last month before adding a second.',
        '**Get round a check.** On Obsession an agent never gets round a CAPTCHA or a bot block, and it stops at any identity check. A job that depends on beating one is not an agent job.',
        '**Spend without limits.** It stops before payment unless you give it your card, and it works inside the limits you set.',
        '**Pretend to be a person.** It says it is an AI to anyone it speaks to, and it texts or calls only people who gave the business their number. [The agent rules](/agents) set this out.',
        '**Use logins you did not give it.** It signs in only with logins you provide.',
      ],
    },
    {
      kind: 'p',
      text: 'Every step an agent takes lands in the event log with the email, screenshot or recording behind it, so a wrong answer can be traced and fixed the same day.',
    },

    { kind: 'h2', id: 'on-obsession', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. The 25 jobs above use five pieces in different mixes.',
    },
    {
      kind: 'list',
      items: [
        '**Inbox:** a real email address the agent owns. It sends and receives, keeps each thread, and calls your webhook, a message to your own system, on every new email.',
        '**Phone number:** a US or UK number the agent owns. It sends and receives texts, makes and takes calls and receives sign-in codes. Texts go out from the agent’s number, in your business’s name.',
        '**Messaging:** iMessage, WhatsApp, Slack and Telegram, from the same identity.',
        '**Browser:** a cloud browser whose sessions keep their logins between runs, so the agent signs in once with the logins you give it and stays signed in.',
        '**Sandbox:** a computer started only when a task needs to run code, such as reading a spreadsheet.',
      ],
    },
    {
      kind: 'h3',
      id: 'one-identity',
      text: 'Why one persona does the whole job',
    },
    {
      kind: 'p',
      text: 'A persona puts the pieces under one identity: one name, one address, one number, one browser profile. The sign-in code that arrives by text reaches the same agent whose browser is waiting at the login page. A customer who replies by email and then calls reaches the same agent, with the whole history. A waiting persona costs nothing, though its number ($2) and inbox ($0.50) bill monthly, and it answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in one event log, dated, with the email, screenshot or recording behind it. Results reach Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent. For an owner that is the morning summary. For a client it is proof of what was done, and for a regulator it is a record of who was called and when.',
    },
    {
      kind: 'h3',
      id: 'one-platform',
      text: 'The case for one platform',
    },
    {
      kind: 'p',
      text: 'The usual way is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working.', 
    },
    {
      kind: 'p',
      text: 'The seams are where a job breaks: the code arrives at one vendor while the browser waits at another, and the call log and the email thread sit in different places. If your job needs only one piece, a single specialist can be enough. The side-by-side of [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) holds each vendor’s prices, dated, and [how the email, phone, browser and sandbox layers fit together](/blog/ai-agent-infrastructure-stack) is explained step by step.',
    },
    {
      kind: 'h3',
      id: 'two-ways',
      text: 'Run it with no code or with the API',
    },
    {
      kind: 'p',
      text: 'With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up the agent, for one business or ten thousand, each with its own identity. Developers use the API, the SDKs or MCP, the standard way AI agents call tools. Each piece is one call, for example `obsession.inboxes.create()` for an inbox and `obsession.numbers.create({ country: "US" })` for a number.',
    },
    {
      kind: 'p',
      text: 'Once an agent has its own number, inbox and browser, the same persona can take on more than one job. The plumber’s front desk agent can also chase unpaid invoices by email and check a supplier’s prices each morning. A freelancer can run a front desk agent for one client, and an agency can run one for every client under its own brand on the Enterprise plan, with each result in a dashboard and report that carry the agency’s name.',
    },
    {
      kind: 'cta',
      text: 'Pick one of the 25 jobs, or describe your own, and each result lands in Slack, a sheet, your CRM or a report.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },
    {
      kind: 'cta',
      text: 'An inbox, a phone number and a browser for every agent you build, through one API and one bill. The Free plan includes 3 inboxes, with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'start', text: 'Choose a first use case' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Pick the job your team does most often by hand, and that ends in a result you can count, such as a booking, an invoice or a late code.',
        'Write the rule for every case first, and name the person who gets anything the agent cannot answer.',
        'Run it for one week at one location or one client, and read the event log each morning.',
        'Add the second job to the same persona, then the next location or client.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agent use cases' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are the best AI agent use cases for small businesses?',
          a: 'Start with a job that ends in a result you can count. Missed call text back, appointment reminders and document chasing suit a business with a phone and an inbox, and each can run for a few dollars a month at list rates. Invoice collection and supplier price checks suit a business with many portals.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'What are some AI agent examples in real life?',
          a: 'Meta’s Muse can open a browser, fill out forms and negotiate for a person. On Obsession, agents text back missed callers, read carrier portals four times a day and check competitors’ prices each morning.',
        },
        {
          q: 'What can AI agents not do yet?',
          a: 'They struggle with open-ended judgement, such as pricing, and they stop at checks that exist to keep bots out. On Obsession an agent never gets round a CAPTCHA, stops at any identity check and stops before payment unless you give it your card.',
          link: { label: 'The agent rules', to: '/agents' },
        },
        {
          q: 'Do AI agents need their own phone number and inbox?',
          a: 'For jobs that touch the outside world, yes. A reply sent from a real address, a call taken on a real number and a sign-in code read from the agent’s own inbox all depend on it. A job that stays inside your own software does not.',
        },
        {
          q: 'How much does an AI agent cost to run?',
          a: 'On Obsession an agent costs what it uses, at list rates: $2 a month for a number, $0.50 for an inbox, $0.015 a text, $0.012 a minute of calls and $0.10 an hour of browser. A missed call text back agent with 450 texts costs about $8.75 a month, before the AI model’s charges and US texting registration, which counts toward what a plan covers. When the agent speaks on a call, its own voice adds $0.0676 a minute to the $0.012 call minute, about $0.08 a spoken minute.',
          link: { label: 'See every rate', to: '/pricing' },
        },
        {
          q: 'Do I need to code to use these AI agents?',
          a: 'No. Pick a blueprint, or describe the job in your own words, and Obsession sets it up and runs the agent. Developers can use the API, the SDKs or MCP instead.',
          link: { label: 'Run a job with no code', to: '/no-code' },
        },
        {
          q: 'Do these agents say they are AI?',
          a: 'Yes. When an agent on Obsession speaks to a person, by chat, email or phone, it says it is an AI agent.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources and the rates',
      text: 'The blueprints are described in the words of the pages that run them. Outside figures come from each organisation’s own page, read on 23 November 2026. Obsession’s rates are its list rates as of 23 November 2026, in US dollars.',
    },
  ],

  sources: [
    { title: 'New Research: AI Service Agents Are Scaling and Delivering CSAT', publisher: 'Salesforce', url: SALESFORCE, date: '2026-05-20' },
    { title: 'Introducing Muse: the world’s first personal AI agent built for everyone', publisher: 'Meta', url: MUSE, date: '2026-09-08' },
    { title: 'Project Vend: Can Claude run a small shop?', publisher: 'Anthropic', url: VEND, date: '2025-06-27' },
  ],

  related: ['/use-cases/ai-agents-for-saas', 
    '/no-code',
    '/blueprints',
    'what-can-ai-agents-do-for-business',
    'ai-agents-that-do-work-for-you',
    'recipe:missed-call-text-back',
    'recipe:price-watch',
    'recipe:inbox-agent',
    'ai-agent-infrastructure-stack',
    'can-ai-make-phone-calls',
  ],
}

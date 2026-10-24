import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* The AI customers series, article 4 (24 Oct 2026): hiring AI customers. It owns "hire ai agent", "hire ai customers" and
   "ai customers vs mystery shoppers". Readers: ecommerce, CX, marketing and agency leads, and founders, deciding whether a
   customer's job goes to a person, a tool they already pay for, an agency or AI customers, and what the hire must return.
   Why now: Black Friday is Fri 27 Nov 2026, and checks have to be hired and briefed before code freezes.
   The idea: 3 questions pick the option (whose customer it must be, how long it must stay, what it must keep), and a
   payback sum turns the cadence into money: a fault waits on average half the gap between checks, so value per fault =
   revenue a day × days sooner, and break even = yearly cost ÷ value per fault. Worked once on an invented store with
   sourced rates only (BLS median wage, T-ROC's shop prices). Then a hiring brief, when not to hire, limits, FAQ.
   Read on 24 Oct 2026 at each provider's own page: Checkly pricing, Panoramata pricing, Flowium's audit page, Darkroom's
   retention cost guide (dated 23 Oct 2026), S-PRO's suite page, the BLS Occupational Outlook Handbook; from the verified
   library (_research/seo/plan/ai-customers/facts.json, 24 Oct 2026): T-ROC, Secret View, ChatGPT's cloud browser, Datadog's
   synthetics docs, Klaviyo's 2026 benchmarks. Datadog's pricing page didn't show its synthetic monitoring prices in full,
   so no Datadog price is quoted. Left out on purpose: Milled (its pages returned 403), forum quotes, ChatGPT agent (retired),
   any Obsession price, the 93% and 128 stores, any PilotX figure. ashgrove.example and its revenue are invented. No dashes. */

const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const TROC = 'https://trocglobal.com/mystery-shopping-cost/'
const SECRET_VIEW = 'https://www.secretview.io/en/resources/frequently-asked-questions'
const SPRO = 'https://s-pro.io/mystery-shopper-ai-suite'
const FLOWIUM = 'https://flowium.com/audit'
const DARKROOM = 'https://www.darkroomagency.com/observatory/retention-marketing-cost-email-sms-2026'
const CHECKLY = 'https://www.checklyhq.com/pricing/'
const DD_SYNTHETICS = 'https://docs.datadoghq.com/synthetics/'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const BLS = 'https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm'

export const post: BlogPost = {
  slug: 'hire-ai-customers',
  title: 'Hiring an AI agent to be a customer: the job, the alternatives and the payback',
  dek: 'What to hire AI customers for, how they compare with mystery shoppers, audits, monitoring tools and doing it by hand, the brief to hand over, and the sum that says whether the hire pays back.',
  metaTitle: 'Hire an AI agent to be a customer: the options and payback',
  description:
    'How to hire an AI agent as a customer: the jobs AI customers do, how they compare with mystery shoppers, audits and tools, a hiring brief and the payback.',
  answer:
    'Hire AI customers for a job only a customer can do, such as checking that a welcome code arrives and works at checkout, and brief them with the companies, a pass mark for each check, how often to run and where results go. They suit jobs that need any company, weeks of waiting and the original evidence. A human mystery shopper suits service in person, and a monthly check by hand suits a business that rarely changes.',
  primaryKeyword: 'hire ai agent',
  keywords: [
    'hire ai customers',
    'how to hire an ai agent',
    'ai customers vs mystery shoppers',
    'ai mystery shopper',
    'mystery shopper alternative',
    'mystery shopping cost',
    'ai agent vs human',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-24',
  readingMinutes: 9,
  order: 6,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'ashgrove.example · 1 job, 5 hires',
      period: 'The job: does a shopper who leaves a basket get the reminder on time?',
      cols: ['Hire', 'What it checked', 'What it reported'],
      rows: [
        { name: 'Mystery shopper', cells: ['A visit, Tuesday 11:00', 'Helpful chat, smooth checkout'], tone: 'ok' },
        { name: 'Agency audit', cells: ['The flow’s settings', 'Live, set to send after 1 hour'], tone: 'ok' },
        { name: 'Scripted test', cells: ['Basket page, every hour', 'Passed every run'], tone: 'ok' },
        { name: 'AI browser agent', cells: ['Left a basket, 1 session', 'Ended before any email'], tone: 'info' },
        { name: 'AI customer', cells: ['Left a basket, then waited', 'Arrived after 26 hours, no photo'], tone: 'late' },
      ],
      notes: [
        'An example on an invented store.',
        'Each hire reported accurately on what it checked. Only the hire that stayed a customer saw the reminder.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Teams that need a customer’s view of their own company, a client, a rival or a prospect can hire for it in 9 ways, from doing nothing to AI customers. Each suits a different job, and how often the job runs decides what each one costs.',
    },
    {
      kind: 'p',
      text: `[AI customers](/blog/ai-customers) are the agents built for a customer’s job. ${AI_CUSTOMER.definition}`,
    },
    {
      kind: 'p',
      text: 'Most alternatives are priced per moment: a shop, an audit, a test run, a session. Much of what a customer receives arrives later. Klaviyo’s own [2026 benchmarks](' +
        KLAVIYO_BENCH +
        ') show that automated flows such as welcome and basket emails were 5.3% of email sends and nearly 41% of email revenue, and each arrives minutes, hours or days after the action that starts it.',
    },

    { kind: 'h2', id: 'hire-ai-agent', text: 'What it means to hire an AI agent' },
    {
      kind: 'p',
      text: 'Hiring an AI agent means giving it 1 job, the access the job needs, a standard to meet and a schedule, then judging it on what it returns. Most AI agents on the market are hired to work for a company: support agents answer its customers, and AI SDRs write to its prospects.',
    },
    {
      kind: 'p',
      text: 'An AI customer is hired to stand on the other side, as a customer of the company your team names, and it reports to your team. The job decides whether it is the right hire. Some jobs suit a person, a tool you already pay for, or no check at all.',
    },

    { kind: 'h2', id: 'choose', text: 'How to choose: 3 questions' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Whose customer must it be?** Your own company, a client with their OK, a rival, a prospect or a partner. Audits read your own account, and synthetic monitoring scripts your own site. Mystery shoppers and AI customers can be customers of any company.',
        '**How long must it stay?** A visit or a page load answers questions about 1 moment. Welcome series, reminders, price changes and renewals arrive over days or weeks, and only a customer that stays receives them.',
        '**What must it keep?** An opinion, a pass or fail, or the original email and page. A client, a manager or a prospect can open the original and check it.',
      ],
    },
    {
      kind: 'p',
      text: 'AI customers suit jobs where the answers are any company, weeks or months, and the original. Where the answers are your own site, 1 moment and an opinion, another option suits the job better.',
    },

    { kind: 'h2', id: 'jobs', text: 'The jobs to hire AI customers for' },
    {
      kind: 'list',
      items: [
        '**Your own company:** the welcome code arrives and works at checkout, each reminder arrives on time with the product, the chatbot quotes the current policy, and a demo request gets a reply inside your target.',
        '**Clients, with their OK:** every flow fires each week and after each theme, app or flow change.',
        '**Rivals:** every email, text, offer and price, from the day the AI customer joins.',
        '**Prospects:** what each one sends its own customers, through its public sign up, before the first call.',
        '**Partners and AI assistants:** the codes deals sites show, and what assistants tell shoppers about your company.',
      ],
    },

    { kind: 'h2', id: 'vs-mystery-shoppers', text: 'AI customers vs mystery shoppers' },
    {
      kind: 'p',
      text: 'A human mystery shopper is a trained person who visits as a customer and reports on the visit: how staff spoke, how long the queue was, whether the store matched the brand. [T-ROC’s 2026 cost guide](' +
        TROC +
        ') puts an institutional quality shop at $50 to $200 and a basic 15 minute retail shop at $40 to $65. [Secret View](' +
        SECRET_VIEW +
        ') lists €29.99 to €49.99 per shopper for businesses with 1 to 5 locations, before shop credit.',
    },
    {
      kind: 'stat',
      value: '$50 to $200',
      label: 'per institutional quality mystery shop, priced per visit',
      source: 'T-ROC cost guide, 2026',
      href: TROC,
    },
    {
      kind: 'p',
      text: 'An AI customer covers the digital side over time: the sign up, the welcome series, the reminders, the code at checkout, the chatbot and the price changes. It stays for weeks, works at any number of companies and keeps each email and page as it arrived. It has no view of a shop floor and brings no human judgement of tone.',
    },
    {
      kind: 'p',
      text: 'AI mystery shopper services sit between the two. [S-PRO’s suite](' +
        SPRO +
        ') runs autonomous shopper agents across public and private customer journeys and backs each score with a transcript, a screenshot and a timestamp. Its page lists no price and doesn’t say how long its test identities are kept.',
    },
    {
      kind: 'p',
      text: 'A store with branches often needs both: people for the shop floor and the phone call, AI customers for everything that arrives afterwards.',
    },

    { kind: 'h2', id: 'options', text: 'AI customers vs the other options', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to hire for a customer’s job. Prices from each provider’s own page, 24 October 2026. Secret View’s price excludes shop credit',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A fault runs until a customer or a report shows it', 'A business that rarely changes'],
        [
          'By hand: a new address, a phone and a sheet',
          'Any company, with your own judgement',
          'Your hours\nUS median wage: $37.87 an hour',
          'Hours grow with every company and check',
          '1 to 3 companies, monthly',
        ],
        [
          'Human mystery shoppers: T-ROC, Secret View',
          'A trained person judges service and tone',
          'T-ROC: $50 to $200 a shop\nSecret View: €29.99 to €49.99 a shopper',
          '1 visit per fee',
          'Shop floors and phone calls',
        ],
        [
          'Agency audit: Flowium and others',
          'An expert review of the setup, with a plan',
          'Flowium: free, with Manager access\nDeliverability audit and recovery: $1,000 to $3,000 where charged separately, per Darkroom',
          'Reads the account on 1 date',
          'A strategy reset',
        ],
        [
          'Synthetic monitoring: Checkly, Datadog',
          'Alerts at any hour when a scripted path fails',
          'Checkly: free, then $24 or $64 a month, billed yearly\nDatadog: priced by test runs',
          'Your own site, paths someone scripted',
          'Uptime of your own key pages',
        ],
        [
          'Competitor monitoring: Panoramata',
          'Rivals’ emails, texts, ads and pages, with history',
          '$99, $179 or $399 a month',
          '20 rivals and 6 months on Startup',
          'Rival research across channels',
        ],
        [
          'AI browser agent: ChatGPT cloud browser',
          'Completes a web task on request',
          'Paid ChatGPT plans, except Free and Go',
          'No inbox or number described',
          'One off lookups',
        ],
        [
          'AI mystery shopper suite: S-PRO',
          'Shopper agents with scored evidence',
          'Not listed',
          'Its page doesn’t say how long identities last',
          'Scored journeys at services with branches',
        ],
        [
          'Obsession (ours): [Mystery shopper](/recipes/mystery-shopper), [Competitor tracking](/recipes/competitor-tracking), [Prospect intelligence](/recipes/prospect-intelligence)',
          'AI customers stay at any company for months and keep every email, offer and price',
          'Not listed\nFirst store check free',
          'Stops at bot walls and CAPTCHAs',
          'Many companies, watched for months',
        ],
      ],
    },
    {
      kind: 'list',
      items: [
        '**Agency audits** review the setup from inside the account and bring a plan. [Flowium’s free email audit](' +
          FLOWIUM +
          ') asks for Klaviyo Manager access and is delivered on a screen share, and [Darkroom’s October 2026 cost guide](' +
          DARKROOM +
          ') puts deliverability audits and recovery at $1,000 to $3,000 where an agency charges for them separately. An audit shows what the account is set to send on the day it is read.',
        '**Synthetic monitoring** runs scripted checks of your own site on a schedule. [Checkly](' +
          CHECKLY +
          ') includes 3,000 browser check runs a month on Starter at $24, billed annually, and [Datadog’s documentation](' +
          DD_SYNTHETICS +
          ') describes simulated requests and actions from around the globe. Each test follows a path someone scripted, and the scripts need upkeep as the site changes.',
        '**Competitor monitoring** such as [Panoramata](' +
          PANORAMATA +
          ') collects rivals’ emails, texts, ads and landing pages, from $99 a month for 20 competitors and 6 months of history. Your own journeys and your prospects need another tool.',
        '**AI browser agents** such as [ChatGPT’s cloud browser](' +
          CLOUD_BROWSER +
          ') read pages, click buttons and fill in forms on paid plans, and pause when they need your input or a sign in. Each works on 1 task for you, and the help page describes no inbox or phone number of its own.',
      ],
    },

    { kind: 'h2', id: 'brief', text: 'Write the hiring brief' },
    {
      kind: 'p',
      text: 'Write the brief before the first run, so every result is a pass or a fail against a mark set in advance.',
    },
    {
      kind: 'table',
      caption: 'A hiring brief for AI customers, filled in for an invented store',
      cols: ['Field', 'What to write', 'Example: ashgrove.example'],
      rows: [
        ['The job', '1 question only a customer can answer', 'Does the basket reminder arrive on time?'],
        ['Companies', 'Your own, clients with their OK, rivals, prospects', 'Ashgrove and 5 rivals'],
        ['Journeys', 'What the customer does', 'Sign up, leave a basket, use the code'],
        ['Pass marks', 'What arrives, by when, with what', 'Reminder within 2 hours, with the product'],
        ['Cadence', 'How often, and which changes trigger a run', 'Daily, and after every theme or flow edit'],
        ['Hand over', 'What the hire needs from you', 'Domains, pass marks, a funded card for orders'],
        ['Results go to', 'Where the team already works', 'The store checks channel in Slack'],
        ['Owner of each fail', '1 named person per journey', 'Email lead for flows, ecommerce lead for codes'],
        ['Review', 'A date to judge the hire', '30 days after the first run'],
      ],
    },
    {
      kind: 'p',
      text: 'Hand over more than a list of names: the pass marks, the questions customers ask your chatbot and the policy pages that answer them, your release dates and code freeze, the client’s OK for any client store, a funded card if a job needs a real order, and the test addresses to leave out of your reporting.',
    },
    {
      kind: 'p',
      text: 'Obsession makes the first AI customers that work for you: they sign up to any company you name and stay its customer for months, keeping every email, offer and price it sends, with proof.',
    },
    {
      kind: 'cta',
      text: 'Name the companies and the job. Each company gets an AI customer that waits for months and keeps every email, offer and price as proof.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'payback', text: 'The payback, in your numbers' },
    {
      kind: 'p',
      text: 'A check is worth the money a fault would lose before anyone notices it. On average a fault waits half the gap between checks: about 15 days with a monthly check, 3.5 days with a weekly one and half a day with a daily one.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Value of 1 fault caught sooner** = the journey’s revenue a day × the days sooner it is caught.',
        '**Yearly cost of the hire** = its price a month × 12. By hand, that is hours a month × your hourly cost × 12.',
        '**Break even** = yearly cost ÷ value of 1 fault: the number of faults a year the hire must catch.',
      ],
    },
    {
      kind: 'stat',
      value: '$37.87',
      label: 'an hour, the US median wage for market research analysts in May 2025',
      source: 'US Bureau of Labor Statistics',
      href: BLS,
    },
    {
      kind: 'p',
      text: 'An example on an invented store, with sourced rates. Ashgrove’s welcome and basket flows report $27,000 over 30 days, or $900 a day. On average a daily check catches a fault 14.5 days sooner than a monthly one, which is worth $13,050. Daily checks of 4 journeys at 15 minutes each take 30 hours a month, and at the [US median wage for market research analysts](' +
        BLS +
        '), $37.87 an hour, they cost $13,633 a year. The daily check pays back if it catches about 1 fault a year that a monthly check would have found 14.5 days later.',
    },
    {
      kind: 'art',
      caption: 'The sum on an invented store. The revenue is invented. The hourly cost is the BLS median wage. Put your own in its place.',
      art: {
        kind: 'price',
        title: 'Daily checks of 4 journeys at ashgrove.example, by hand',
        rows: [
          { label: 'Flow revenue a day', value: '$900', note: '$27,000 over 30 days, from the flow report' },
          { label: 'Days a fault runs, monthly check', value: '15', note: 'Half the gap between checks' },
          { label: 'Days a fault runs, daily check', value: '0.5' },
          { label: 'Value of 1 fault caught sooner', value: '$13,050', note: '$900 × 14.5 days' },
          { label: 'Daily checks by hand, a year', value: '$13,633', note: '30 hours a month × $37.87 × 12' },
        ],
        total: { label: 'Faults a year to break even', value: '1.04', note: '$13,633 ÷ $13,050' },
      },
    },
    {
      kind: 'p',
      text: 'Priced per visit at T-ROC’s $40 to $65 for a basic retail shop, the same 120 checks a month would cost $4,800 to $7,800 and need about 4 to 7 faults a year to break even. For the yearly cost of AI customers, use a quote, or the retail cost of running your own from [AI customers at scale](/blog/ai-customers-at-scale).',
    },
    {
      kind: 'p',
      text: 'Hours become the limit as the job grows. An agency checking 4 journeys a week at 20 client stores needs about 86 hours a month by hand, or $3,257 at the same wage. For an agency, the value in line 1 is a retainer: 1 client kept for a year at the $3,000 to $10,000 a month or more in Darkroom’s guide is worth $36,000 to $120,000.',
    },

    { kind: 'h2', id: 'when-not', text: 'When not to hire AI customers' },
    {
      kind: 'list',
      items: [
        '**A business that rarely changes,** runs no paid traffic and has few rivals. A new address, a phone and a sheet once a month cover it.',
        '**Service in person.** A human mystery shopper judges a shop floor, a phone call and the staff.',
        '**Uptime of your own pages at every hour.** Synthetic monitoring alerts within minutes when a scripted path fails.',
        '**Last year’s rival campaigns.** An AI customer holds what arrives from the day it joins, so earlier mail needs an archive that already covered the brand.',
        '**A single lookup.** An AI browser agent answers it in 1 session.',
        '**A strategy reset.** An agency audit reads the setup from inside the account and brings a plan.',
      ],
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**A new customer sees what new customers get.** Long standing subscribers and past buyers may receive other emails.',
        '**It reports what arrived, and not why.** The cause of a missing email sits in the company’s own tools.',
        '**It stops at a bot wall or a CAPTCHA,** and records the block as a finding.',
        '**Client stores need the client’s OK.** Rivals and prospects get only the public sign up any customer can use. This is not legal advice.',
      ],
    },
    {
      kind: 'cta',
      text: 'Your first store check is free: 4 AI customers sign up, use the welcome code, leave a basket and wait 48 hours, and your report arrives within 4 days.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about hiring AI customers' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What does it mean to hire an AI agent?',
          a: 'It means giving an AI agent 1 defined job, the access it needs, a standard to meet and a schedule, and judging it on results. AI customers are AI agents hired for 1 job: being a customer of a company and keeping what it sends.',
        },
        {
          q: 'Can AI customers replace mystery shoppers?',
          a: 'For digital journeys that run over days and weeks, AI customers cover what a single visit can’t. For service in person, tone and the shop floor, a human mystery shopper is the right hire.',
        },
        {
          q: 'How much does a mystery shopper cost?',
          a: 'T-ROC’s 2026 guide puts an institutional quality shop at $50 to $200 and a basic 15 minute retail shop at $40 to $65. Secret View lists €29.99 to €49.99 per shopper, before shop credit.',
        },
        {
          q: 'What should a brief for AI customers include?',
          a: 'The job, the companies, the journeys, a written pass mark for each, the cadence, where results go, who owns each fail and a date to review the hire.',
        },
        {
          q: 'How often should AI customers check?',
          a: 'Daily for journeys that earn money and change often, and again after every change to a theme, app, flow, price or chatbot. Weekly suits a store that changes rarely.',
        },
        {
          q: 'When is checking by hand enough?',
          a: 'For 1 to 3 companies checked once a month, a new address, a phone and a sheet cover the job.',
        },
        {
          q: 'Do I need permission to use AI customers on a client’s store?',
          a: 'Get the client’s OK before checking its store. For rivals and prospects, use only the public sign up any customer can use, and take legal advice for your own case.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Darkroom’s figures describe what agencies charge in general, and Flowium’s is one agency’s offer. The half the gap rule assumes a fault is as likely to start on any day. The store, its revenue and the illustrations are invented examples. This is not legal advice.',
    },
  ],

  sources: [
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'How much does mystery shopping cost? 2026 pricing guide', publisher: 'T-ROC', url: TROC, date: '2026' },
    { title: 'Frequently asked questions', publisher: 'Secret View', url: SECRET_VIEW },
    { title: 'Mystery Shopper AI Suite', publisher: 'S-PRO', url: SPRO },
    { title: 'Free email marketing audit', publisher: 'Flowium', url: FLOWIUM },
    { title: 'How much does retention marketing cost in 2026? (Email, SMS & Lifecycle Pricing)', publisher: 'Darkroom', url: DARKROOM, date: '2026-10-23' },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
    { title: 'Synthetic Testing and Monitoring', publisher: 'Datadog Docs', url: DD_SYNTHETICS },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER },
    { title: 'Market research analysts: Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS },
  ],
  related: ['ai-customers', 'ai-customers-at-scale', 'ai-customers-for-commercial-teams', 'recipe:mystery-shopper', 'recipe:competitor-tracking', '/sample-output'],
}

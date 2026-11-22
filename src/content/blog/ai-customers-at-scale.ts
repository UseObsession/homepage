import type { BlogPost } from './types'

/* What an AI agent costs as a customer, line by line, from 1 to a million (24 Oct 2026; reframed 22 Nov 2026 as a
   fleet of personas, Obsession's rates from src/content/prices.ts, other services' prices kept as read on 24 Oct). It owns "cost of ai
   agents", "ai agent cost per month", "cost of ai agent vs human" and "mystery shopping cost". Readers: heads of
   growth, CX and ecommerce, agency founders pricing a service, finance, and developers sizing a build.
   The argument: an agent watching one company's email costs about $2 a month, almost
   all of it the inbox. Reading with a small model costs about a cent, waiting costs nothing when the agent sleeps until
   the company acts, and storage rounds to zero. So at scale the cost is identity, not intelligence, and a system built
   for millions has to own that layer. Then the model choice (100x between models), the human alternatives priced from
   their own pages, the reader's own sum, and when by hand is cheaper.
   Prices read on 24 Oct 2026 from each vendor's own page: AgentMail, Browserbase, Cloudflare Durable Objects and R2,
   Anthropic and OpenAI model pricing, Twilio US SMS, T-ROC's and Secret View's mystery shopping prices. Volumes (20
   emails a month of about 5,000 tokens each, 100 KB stored per email, a 2 minute sign up) are examples, labelled.
   The store in the illustration is invented. No dashes. */

const AGENTMAIL_PRICING = 'https://www.agentmail.to/pricing'
const BROWSERBASE_PRICING = 'https://www.browserbase.com/pricing'
const CF_DO_PRICING = 'https://developers.cloudflare.com/durable-objects/platform/pricing/'
const CLAUDE_PRICING = 'https://platform.claude.com/docs/en/about-claude/pricing'
const R2_PRICING = 'https://developers.cloudflare.com/r2/pricing/'
const OPENAI_PRICING = 'https://developers.openai.com/api/docs/pricing'
const TWILIO_SMS = 'https://www.twilio.com/en-us/sms/pricing/us'
const TROC = 'https://trocglobal.com/mystery-shopping-cost/'
const SECRET_VIEW = 'https://www.secretview.io/en/resources/frequently-asked-questions'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const BLS = 'https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm'

export const post: BlogPost = {
  slug: 'ai-customers-at-scale',
  title: 'AI agent cost per month: what an agent costs as a customer of 1 company, or a million',
  dek: 'An AI agent that stays a customer of 1 company for a month, priced line by line on Obsession’s rates and on retail services. The same sum then runs for a fleet of 100, 10,000 and a million personas, against a human mystery shopper and your team’s time.',
  metaTitle: 'AI agent cost per month: what teams pay, from 1 to a million',
  description:
    'What an AI agent costs a month as a customer of 1 company: inbox, emails, model and waiting at list prices, up to a fleet of a million, vs mystery shops.',
  answer:
    'An AI agent that stays a customer of one company, watching its email, costs about $0.52 a month on Obsession’s list rates, and $0.50 of that is the inbox. Built from retail services one at a time, the same agent costs about $2.02, and a human mystery shop costs $50 to $200 for one visit. A fleet of personas waits for free, and every email and page lands in one event log at $5 per million events.',
  primaryKeyword: 'ai agent cost per month',
  keywords: [
    'cost of ai agents',
    'ai agent cost per month',
    'cost of ai agent vs human',
    'mystery shopping cost',
    'how much does an ai agent cost',
    'cost to run ai agents at scale',
    'ai agent pricing',
  ],
  category: 'Behind the login',
  published: '2026-10-24',
  updated: '2026-11-22',
  readingMinutes: 8,
  order: 8,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'price',
      title: 'One persona for a month at ivywell.example',
      rows: [
        { label: 'Inbox', value: '$0.50', note: 'An inbox a month' },
        { label: 'Sign up', value: '$0.003', note: '2 browser minutes, once' },
        { label: 'Waiting 30 days', value: '$0.00', note: 'Free while it waits' },
        { label: '20 emails received', value: '$0.008', note: '$0.40 per 1,000' },
        { label: '20 events logged', value: '$0.0001', note: '$5 per million events' },
        { label: 'Reading 20 emails', value: '$0.012', note: 'A small model' },
      ],
      total: { label: 'A month', value: '$0.52', note: 'At Obsession’s list rates, 22 Nov 2026' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent that stays a customer is cheap to run for the same reason a real customer is cheap to keep. Most of the time it does nothing. It signs up once, waits, and works only when the company sends something, so its cost is easy to count, line by line, from published prices.',
    },
    {
      kind: 'p',
      text: 'On Obsession that agent is a [persona](/personas), an AI agent with its own inbox, number and browser under one name. Watching one company’s email costs it about $0.52 a month, and a year of that costs less than one human mystery shop.',
    },

    { kind: 'h2', id: 'one-month', text: 'What one persona costs a month' },
    {
      kind: 'p',
      text: 'The example watches one company’s email for 30 days and receives 20 emails, each about 5,000 tokens as text. Obsession’s prices are its list rates on 22 November 2026, and every other price is the vendor’s own list price, checked on 24 October 2026.',
    },
    {
      kind: 'table',
      caption: 'One agent watching one company’s email for 30 days, on Obsession and from retail services. Volumes are examples: 20 emails of about 5,000 tokens, 100 KB stored each, a 2 minute sign-up.',
      cols: ['Line', 'On Obsession', 'From retail services'],
      rows: [
        ['Inbox', '$0.50 an inbox a month', 'AgentMail: $2.00 per extra inbox'],
        ['20 emails received', '$0.008 at $0.40 per 1,000', 'Included in the inbox'],
        ['Sign-up, 2 browser minutes', '$0.003 at $0.10 an hour, once', 'Browserbase: $0.004 at $0.12 an hour'],
        ['Waiting 30 days', '$0.00, free while it waits', 'Durable Objects: idle time not billed'],
        ['Waking and keeping 20 events', '$0.0001 at $5 per million events', 'Durable Objects and R2: under $0.001'],
        ['Reading 20 emails', 'Claude Haiku 5.5: $0.012', 'Claude Haiku 5.5: $0.012'],
        ['Total', 'About $0.52', 'About $2.02'],
      ],
    },
    {
      kind: 'list',
      items: [
        '**The inbox.** [AgentMail’s pricing](' +
          AGENTMAIL_PRICING +
          ') lists 10 inboxes on its $20 developer plan and $2 a month for each extra inbox.',
        '**The sign up.** [Browserbase’s pricing](' +
          BROWSERBASE_PRICING +
          ') lists $0.12 a browser hour after the included hours, so a 2 minute sign up is under half a cent, paid once.',
        '**Waiting and waking.** On [Cloudflare Durable Objects](' +
          CF_DO_PRICING +
          '), objects that are idle and eligible for hibernation are not billed for duration, and requests cost $0.15 a million on the paid plan. An agent that wakes 20 times a month makes 20 requests.',
        '**Reading.** [Anthropic’s pricing](' +
          CLAUDE_PRICING +
          ') lists Claude Haiku 5.5 at $0.10 a million input tokens and $0.50 a million output tokens. 20 emails of 5,000 tokens, with a 200 token summary each, come to about 1.2 cents.',
        '**Keeping the emails.** [Cloudflare R2](' +
          R2_PRICING +
          ') stores data at $0.015 a GB a month and charges $4.50 a million writes, with free egress, so storing a month of raw emails at 100 KB each costs about a hundredth of a cent.',
        '**On Obsession,** the inbox is $0.50 a month and each email $0.40 per 1,000. The persona is free while it waits, and every email and page is kept in one event log at $5 per million events. The Free plan covers 3 inboxes, 3,000 emails and 100,000 events.',
      ],
    },
    {
      kind: 'p',
      text: 'A phone number adds texts. On Obsession a US number is $2 a month and each text $0.015, carrier fees included, so a persona that watches email and receives 10 texts costs about $2.67 a month. [Twilio](' +
        TWILIO_SMS +
        ') lists a US long code number at $1.15 a month and $0.0083 to receive each text segment, before carrier fees, so the retail build comes to about $3.25.',
    },
    {
      kind: 'p',
      text: 'How the sign-up and the waiting work, step by step, is in [how an AI agent signs up as a customer](/blog/how-ai-customers-work).',
    },

    { kind: 'h2', id: 'where-money-goes', text: 'Where the money goes' },
    {
      kind: 'p',
      text: '**An agent’s cost is almost all identity.** On Obsession the inbox is $0.50 of $0.52, and at retail $2.00 of $2.02. The model, the waiting and the event log together cost under 2 cents.',
    },
    {
      kind: 'p',
      text: 'The model is still a choice that matters at scale. Reading a marketing email and writing down what it offered is a short, structured job, and small models are priced for it. The same 20 emails cost 100 times more on the largest models.',
    },
    {
      kind: 'table',
      caption: 'Reading 20 emails a month (100,000 tokens in, 4,000 out) on models priced on their makers’ own pages, 24 Oct 2026',
      cols: ['Model', 'Per million tokens, in and out', 'One persona', 'A million personas'],
      rows: [
        ['Claude Haiku 5.5', '$0.10 and $0.50', '$0.012', '$12,000'],
        ['OpenAI gpt-6-luna', '$0.10 and $0.50', '$0.012', '$12,000'],
        ['Claude Sonnet 5.5', '$2 and $10', '$0.24', '$240,000'],
        ['Claude Fable 5.1', '$10 and $50', '$1.20', '$1,200,000'],
      ],
    },
    {
      kind: 'p',
      text: '[OpenAI’s pricing](' +
        OPENAI_PRICING +
        ') lists gpt-6-luna at the same rates as Claude Haiku 5.5. The sign up follows the same logic: most companies sign customers up on the same few platforms, so a sign up worked out once can run as a program at every company built the same way, with no model call at all.',
    },

    { kind: 'h2', id: 'at-scale', text: 'A fleet of 100 to a million personas' },
    {
      kind: 'table',
      caption: 'A month at Obsession’s list rates, 20 emails each, read with Claude Haiku 5.5. Sign-ups add $0.003 each, once. A retail build of the same fleet costs about 4 times as much, almost all of it inboxes.',
      cols: ['Personas', 'Inboxes', 'Emails and events', 'Reading', 'Total'],
      rows: [
        ['100', '$50', '$0.81', '$1.20', 'About $52'],
        ['10,000', '$5,000', '$81', '$120', 'About $5,201'],
        ['1,000,000', '$500,000', '$8,100', '$12,000', 'About $520,100'],
      ],
    },
    {
      kind: 'p',
      text: 'Reading, emails and events stay small at every size. At a million personas they come to about $20,100 a month, or about 2 cents each. The inbox grows with every persona: $500,000 of the month on Obsession, and $2 million at retail.',
    },
    {
      kind: 'p',
      text: 'So scale is decided by design, in 3 places. **Identities** are the cost a system built for millions has to own instead of renting per inbox at retail. **Waiting** has to be free, which needs agents that sleep until the company acts instead of polling. **Sign ups** have to be programs learned once per platform, so no agent has to reason through every form.',
    },
    {
      kind: 'p',
      text: 'Obsession is built on those 3 choices. A persona is free while it waits and wakes in 50 ms when an email, text or call arrives, an inbox is $0.50 a month, and every event from the whole fleet lands in one log.',
    },
    {
      kind: 'cta',
      text: 'Run a fleet of personas on one key, each with an inbox, a number and a browser, free while they wait, with every event in one log.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'vs-human', text: 'AI agent cost vs a human', compare: true },
    {
      kind: 'p',
      text: 'A person and a persona do different jobs. A mystery shopper buys judgement at one moment, on tone, service and the store itself. A persona buys every message and page over months, each kept in the event log. We make Obsession, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to see what a company does to its customers, with prices from each provider’s own page, 24 Oct 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Human mystery shopper: T-ROC, Secret View', 'Judges service, tone and the store in person', 'T-ROC: $50 to $200 a shop\nSecret View: €29.99 to €49.99 a shopper', 'One visit per fee', 'In-store and service quality'],
        ['Your own team: by hand', 'Knows the brand and its context', 'Your hours at your rate', 'Time for every check, every week', '1 to 3 companies, once'],
        ['AI browser agent: ChatGPT cloud browser', 'Completes one web task on request', 'Paid ChatGPT plans', 'No inbox or number described', 'One-off lookups'],
        ['Agents you build: retail services, one at a time', 'Every email and page for months, kept', 'About $2 a month each at retail', 'An inbox, a browser and a log from separate vendors', 'Developers watching a few hundred companies'],
        ['Obsession (ours): [Personas](/personas), [Mystery shopping](/blueprints/mystery-shopper), [Competitor tracking](/blueprints/competitor-tracking)', 'A fleet of personas, free while they wait, every event in one log', 'Free, then $20, $99 or $499 a month; usage per piece', 'Stops at payment, identity checks and CAPTCHAs', 'What customers get at many companies, for months'],
      ],
    },
    {
      kind: 'p',
      text: 'The AI browser agent row is [ChatGPT’s cloud browser](' +
        CLOUD_BROWSER +
        '), which gives ChatGPT Work its own browser in the cloud on paid plans. More on choosing between these is in [hiring AI agents as customers](/blog/hire-ai-customers).',
    },

    { kind: 'h2', id: 'mystery-shopping-cost', text: 'Mystery shopping cost, and what it buys' },
    {
      kind: 'stat',
      value: '$50 to $200',
      label: 'per mystery shop at institutional quality, in T-ROC’s 2026 pricing guide',
      source: 'T-ROC',
      href: TROC,
    },
    {
      kind: 'list',
      items: [
        '**T-ROC** prices a [basic retail shop](' +
          TROC +
          '), a 15 minute interaction with a structured form, at $40 to $65, and puts budget providers at $15 to $30 a shop.',
        '**Secret View** lists [€29.99 to €49.99 per mystery shopper](' +
          SECRET_VIEW +
          '), excluding shopping credit, and €27.50 to €59.99 for organisations with 5 or more locations.',
        '**What the fee buys** is a trained person, one visit and a report. For in-store service, staff and the feel of a place, that is the right tool, and a persona doesn’t replace it.',
        '**What it doesn’t buy** is the 2 weeks after the visit, from the welcome series and the reminders to the price changes and the renewal. That is where a persona’s $0.52 a month goes.',
      ],
    },

    { kind: 'h2', id: 'your-number', text: 'Your number' },
    {
      kind: 'p',
      text: 'Compare what watching costs you today with what it would cost with personas. By hand, it is companies × minutes per check ÷ 60 × checks a month × your hourly rate. On Obsession, it is companies × about $0.52 a month.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'Watching 25 competitors’ email for a month',
        rows: [
          { label: 'By hand: 25 competitors × 15 minutes', value: '6.25 hours', note: 'Each week' },
          { label: '× 4.3 weeks', value: '27 hours', note: 'A month' },
          { label: '× $37.87 an hour', value: '$1,022', note: 'US median wage, market research analysts' },
          { label: '25 personas on Obsession', value: '$13.00', note: '$0.52 each' },
        ],
        total: { label: 'Difference a month', value: '$1,009', note: 'Plus every email kept in the log' },
      },
      caption: 'An example: put in your own number of companies, minutes per check and hourly rate.',
    },
    {
      kind: 'p',
      text: 'The rate is the US median wage for market research analysts, $37.87 an hour in May 2025, from the [Bureau of Labor Statistics](' +
        BLS +
        '). The larger number is often the one this sum leaves out, a step in your own journey that fails while nobody is looking. That sum is in [finding revenue leaks with AI agents](/blog/ai-customers-find-revenue-leaks).',
    },

    { kind: 'h2', id: 'by-hand', text: 'When by hand is cheaper' },
    {
      kind: 'list',
      items: [
        '**1 to 3 companies, once.** Sign up yourself, wait a week and read what arrives. The cost is an afternoon.',
        '**A question about service in person.** A person in the store answers it better.',
        '**No need for proof.** If nobody will ask to see the email, a screenshot does the job.',
      ],
    },
    {
      kind: 'p',
      text: 'Past a handful of companies, or past one month, the hours compound and the kept emails start to matter, and the persona line wins. The Free plan covers the first 3 personas’ inboxes, emails and events, with no credit card.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits of this model' },
    {
      kind: 'list',
      items: [
        '**Prices are list prices.** Obsession’s are from 22 November 2026 and every other service’s from 24 October 2026. Plans and free allowances change, and every line links to its page so you can recheck it.',
        '**Volumes are examples.** A brand that sends 60 emails a month triples the reading line, which still rounds to cents.',
        '**Texts carry carrier fees** on top of Twilio’s rate, and sending from a US long code needs A2P 10DLC registration.',
        '**Gmail tab placement needs a Gmail inbox,** which is priced separately from an API inbox.',
        '**A persona stops at payment, identity checks, CAPTCHAs and bot blocks.** The event log names the step it couldn’t reach, and no cost line removes the block.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agent cost' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How much does an AI agent cost per month?',
          a: 'It depends on what the agent holds. One that watches one company’s email costs about $0.52 a month on Obsession’s list rates, almost all of it the $0.50 inbox, and about $2.02 built from retail services. Adding a US number and 10 texts brings the Obsession figure to about $2.67. Reading the emails costs about a cent a month on a small model.',
        },
        {
          q: 'Is an AI agent cheaper than a human?',
          a: 'For watching messages over time, yes, by orders of magnitude, about $0.52 a month against $50 to $200 for one human mystery shop. For judging service and tone in person, a human is the right tool, and the two do different jobs.',
        },
        {
          q: 'How much does mystery shopping cost?',
          a: 'T-ROC’s 2026 guide puts an institutional quality shop at $50 to $200, a basic 15 minute retail shop at $40 to $65, and budget providers at $15 to $30. Secret View lists €29.99 to €49.99 per shopper, excluding shopping credit.',
        },
        {
          q: 'What does it cost to run a million AI agents as customers?',
          a: 'On Obsession’s list rates, about $520,100 a month: $500,000 for inboxes and about $20,100 for emails, events and reading. Built from retail services, the same fleet costs about $2.01 million, because each inbox is rented at $2. At that volume Enterprise applies, from $1,500 a month.',
          link: { label: 'See pricing', to: '/pricing' },
        },
        {
          q: 'Why does waiting cost nothing?',
          a: 'Because the persona isn’t running while it waits. Its state is stored as an actor, no machine runs while nothing happens, and it wakes in 50 ms when an email, text or call arrives. On Cloudflare Durable Objects, objects that are idle and eligible for hibernation are not billed for duration in the same way.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Obsession’s prices are its list rates as of 22 November 2026, and every other price is the vendor’s own list price as of 24 October 2026. The volumes (20 emails a month of about 5,000 tokens, 100 KB stored per email, a 2 minute sign-up, 10 texts) and the 25 competitor example are illustrations, not measurements. The store in the illustration is invented.',
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'AgentMail', url: AGENTMAIL_PRICING },
    { title: 'Browserbase pricing', publisher: 'Browserbase', url: BROWSERBASE_PRICING },
    { title: 'Durable Objects pricing', publisher: 'Cloudflare Docs', url: CF_DO_PRICING },
    { title: 'Pricing', publisher: 'Claude Platform Docs (Anthropic)', url: CLAUDE_PRICING },
    { title: 'R2 pricing', publisher: 'Cloudflare Docs', url: R2_PRICING, date: '2026-10-01' },
    { title: 'SMS pricing in the United States', publisher: 'Twilio', url: TWILIO_SMS },
    { title: 'Pricing', publisher: 'OpenAI API', url: OPENAI_PRICING },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER },
    { title: 'How much does mystery shopping cost? 2026 pricing guide', publisher: 'T-ROC', url: TROC, date: '2026' },
    { title: 'Frequently asked questions', publisher: 'Secret View', url: SECRET_VIEW },
    { title: 'Market research analysts: Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS },
  ],
  related: ['/pricing', '/personas', 'how-ai-customers-work', 'hire-ai-customers', 'ai-customers-for-developers', 'recipe:mystery-shopper', 'recipe:competitor-tracking'],
}

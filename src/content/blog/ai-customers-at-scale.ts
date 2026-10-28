import type { BlogPost } from './types'

/* The AI customers series (24 Oct 2026): what AI customers cost, line by line, from 1 to a million. It owns "cost of ai
   agents", "ai agent cost per month", "cost of ai agent vs human" and "mystery shopping cost". Readers: heads of
   growth, CX and ecommerce, agency founders pricing a service, finance, and developers sizing a build.
   The argument: at published retail prices an AI customer watching one company's email costs about $2 a month, almost
   all of it the inbox. Reading with a small model costs about a cent, waiting costs nothing when the agent sleeps until
   the company acts, and storage rounds to zero. So at scale the cost is identity, not intelligence, and a system built
   for millions has to own that layer. Then the model choice (100x between models), the human alternatives priced from
   their own pages, the reader's own sum, and when by hand is cheaper.
   Prices read on 24 Oct 2026 from each vendor's own page: AgentMail, Browserbase, Cloudflare Durable Objects and R2,
   Anthropic and OpenAI model pricing, Twilio US SMS, T-ROC's and Secret View's mystery shopping prices. Volumes (20
   emails a month of about 5,000 tokens each, 100 KB stored per email, a 2 minute sign up) are examples, labelled.
   Obsession's pricing is credit-based, like Claude's, with no figure given (prices are James's call). The store in the illustration is invented. No dashes. */

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
  title: 'AI customers at scale: what one costs, and what a million cost',
  dek: 'An AI customer’s month priced line by line from published prices, then the same sum at 100, 10,000 and a million, against a human mystery shopper and an hour of your own team’s time.',
  metaTitle: 'AI agent cost per month: what AI customers cost at scale',
  description:
    'What an AI customer costs a month at published prices: inbox, model, waiting and storage line by line, against mystery shopping, from 1 to a million.',
  answer:
    'At published retail prices, an AI customer watching one company’s email costs about $2 a month, and almost all of it is the inbox: reading 20 emails with a small model costs about a cent, and waiting costs nothing when the agent sleeps until the company acts. A human mystery shop costs $50 to $200 for one visit. Obsession runs AI customers this way today, each asleep until its company acts, on credit-based plans like Claude’s.',
  primaryKeyword: 'ai agent cost per month',
  keywords: [
    'cost of ai agents',
    'ai agent cost per month',
    'cost of ai agent vs human',
    'mystery shopping cost',
    'how much does an ai agent cost',
    'ai customers at scale',
    'ai agent pricing',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
  readingMinutes: 7,
  order: 8,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'price',
      title: 'One AI customer for a month · ivywell.example',
      rows: [
        { label: 'Inbox', value: '$2.00', note: 'Rented per inbox, per month' },
        { label: 'Sign up', value: '$0.004', note: '2 browser minutes, once' },
        { label: 'Waiting 30 days', value: '$0.00', note: 'Idle time isn’t billed' },
        { label: 'Waking 20 times', value: '$0.000003', note: '1 request per email' },
        { label: 'Reading 20 emails', value: '$0.012', note: 'A small model' },
        { label: 'Keeping the evidence', value: '$0.0001', note: '2 MB stored, 20 writes' },
      ],
      total: { label: 'A month', value: '$2.02', note: 'At prices published on 24 Oct 2026' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI customer is cheap to run for the same reason a real customer is cheap to keep: most of the time it does nothing. It signs up once, waits, and works only when the company sends something. That makes its cost easy to count, line by line, from prices the services publish.',
    },
    {
      kind: 'p',
      text: 'The result is about $2 a month at retail for one AI customer watching one company’s email, and the inbox is 99% of it. A year of that costs less than one human mystery shop. The definition of the term is in [what AI customers are](/blog/ai-customers).',
    },

    { kind: 'h2', id: 'one-month', text: 'What one AI customer costs a month' },
    {
      kind: 'p',
      text: 'The example watches one company’s email for 30 days and receives 20 emails, each about 5,000 tokens as text. Every price is the vendor’s own published list price, checked on 24 October 2026.',
    },
    {
      kind: 'table',
      caption: 'One AI customer watching one company’s email for 30 days. Volumes are examples: 20 emails of about 5,000 tokens, 100 KB stored each, a 2 minute sign up.',
      cols: ['Line', 'Published price', 'A month'],
      rows: [
        ['Inbox', 'AgentMail: $2 a month per extra inbox', '$2.00'],
        ['Sign up', 'Browserbase: $0.12 a browser hour', '$0.004, once'],
        ['Waking 20 times', 'Durable Objects: $0.15 a million requests', 'Under $0.001'],
        ['Waiting 30 days', 'Durable Objects: idle time not billed', '$0.00'],
        ['Reading 20 emails', 'Claude Haiku 5.5: $0.10 in, $0.50 out per million tokens', '$0.012'],
        ['Keeping the evidence', 'R2: $0.015 a GB a month, $4.50 a million writes', 'Under $0.001'],
        ['Total', 'Email only', 'About $2.02'],
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
          '), objects that are idle and eligible for hibernation are not billed for duration, and requests cost $0.15 a million on the paid plan. An AI customer that wakes 20 times a month makes 20 requests.',
        '**Reading.** [Anthropic’s pricing](' +
          CLAUDE_PRICING +
          ') lists Claude Haiku 5.5 at $0.10 a million input tokens and $0.50 a million output tokens. 20 emails of 5,000 tokens, with a 200 token summary each, come to about 1.2 cents.',
        '**Evidence.** [Cloudflare R2](' +
          R2_PRICING +
          ') stores data at $0.015 a GB a month and charges $4.50 a million writes, with free egress, so storing a month of raw emails at 100 KB each costs about a hundredth of a cent.',
      ],
    },
    {
      kind: 'p',
      text: 'A phone number adds texts. [Twilio](' +
        TWILIO_SMS +
        ') lists a US long code number at $1.15 a month and $0.0083 to receive each text segment, before carrier fees, so an AI customer that watches email and receives 10 texts costs about $3.25 a month at retail.',
    },
    {
      kind: 'p',
      text: 'How the waiting works, step by step, is in [how AI customers work](/blog/how-ai-customers-work).',
    },

    { kind: 'h2', id: 'where-money-goes', text: 'Where the money goes' },
    {
      kind: 'p',
      text: '**At retail, an AI customer’s cost is almost all identity.** The inbox is $2.00 of $2.02. The model, the waiting, the waking and the storage together cost under 2 cents.',
    },
    {
      kind: 'p',
      text: 'The model is still a choice that matters at scale. Reading a marketing email and writing down what it offered is a short, structured job, and small models are priced for it. The same 20 emails cost 100 times more on the largest models.',
    },
    {
      kind: 'table',
      caption: 'Reading 20 emails a month (100,000 tokens in, 4,000 out) on models priced on their makers’ own pages, 24 Oct 2026',
      cols: ['Model', 'Per million tokens, in and out', 'One AI customer', 'A million AI customers'],
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

    { kind: 'h2', id: 'at-scale', text: 'From 100 to a million AI customers' },
    {
      kind: 'table',
      caption: 'A month at retail prices, 20 emails each, with a small model. Sign ups add $0.004 each, once. Everything else covers waking, storage and writes after each service’s free allowance.',
      cols: ['AI customers', 'Inboxes', 'Reading', 'Everything else', 'Total'],
      rows: [
        ['100', '$200', '$1.20', 'Under $1', 'About $201'],
        ['10,000', '$20,000', '$120', 'Under $1', 'About $20,121'],
        ['1,000,000', '$2,000,000', '$12,000', 'About $120', 'About $2.01 million'],
      ],
    },
    {
      kind: 'p',
      text: 'Reading, waking and storage stay small at every size: at a million AI customers they come to about $12,000 a month, or 1.2 cents each. The inbox grows with every AI customer, and at retail it is 99% of a $2 million bill.',
    },
    {
      kind: 'p',
      text: 'So scale is decided by design, in 3 places. **Identities** are the cost a system built for millions has to own instead of renting per inbox at retail. **Waiting** has to be free, which needs agents that sleep until the company acts instead of polling. **Sign ups** have to be programs learned once per platform, so no agent has to reason through every form.',
    },
    {
      kind: 'p',
      text: 'Obsession is built on those 3 choices: Obsession can run millions of AI customers, each asleep until its company acts, with sign ups learned once per platform.',
    },
    {
      kind: 'cta',
      text: 'Meet your first AI customers: name any company and its AI customer keeps every email, offer and price it sends, so you can find revenue leaks, watch rivals and prospect with proof.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'vs-human', text: 'AI agent cost vs a human', compare: true },
    {
      kind: 'p',
      text: 'A person and an AI customer buy different things. A mystery shopper buys judgement at one moment: tone, service, the store itself. An AI customer buys every message and page over months, kept as evidence. Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
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
        ['AI customers you build: retail services', 'Every email and page for months, with evidence', 'About $2 a month each at retail', 'Identity cost grows with every company', 'Developers watching a few hundred companies'],
        ['Obsession (ours): AI customers', 'Built for millions, asleep until each company acts', 'Running now: first store check free\nCredit-based plans, like Claude’s', 'Stops at bot walls and CAPTCHAs', 'What a real customer gets at many companies, for months'],
      ],
    },
    {
      kind: 'p',
      text: 'The AI browser agent row is [ChatGPT’s cloud browser](' +
        CLOUD_BROWSER +
        '), which gives ChatGPT Work its own browser in the cloud on paid plans. More on choosing between these is in [why hire AI customers](/blog/hire-ai-customers).',
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
        '**What the fee buys** is a trained person, one visit and a report. For in-store service, staff and the feel of a place, that is the right tool, and an AI customer doesn’t replace it.',
        '**What it doesn’t buy** is the 2 weeks after the visit: the welcome series, the reminders, the price changes and the renewal. That is where an AI customer’s $2 a month goes.',
      ],
    },

    { kind: 'h2', id: 'your-number', text: 'Your number' },
    {
      kind: 'p',
      text: 'Compare what watching costs you today with what it would cost with AI customers. By hand: companies × minutes per check ÷ 60 × checks a month × your hourly rate. With AI customers at retail: companies × about $2 a month.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'Watching 25 rivals’ email for a month',
        rows: [
          { label: 'By hand: 25 rivals × 15 minutes', value: '6.25 hours', note: 'Each week' },
          { label: '× 4.3 weeks', value: '27 hours', note: 'A month' },
          { label: '× $37.87 an hour', value: '$1,022', note: 'US median wage, market research analysts' },
          { label: '25 AI customers at retail', value: '$50.50', note: '$2.02 each' },
        ],
        total: { label: 'Difference a month', value: '$972', note: 'Plus every email kept as evidence' },
      },
      caption: 'An example: put in your own number of companies, minutes per check and hourly rate.',
    },
    {
      kind: 'p',
      text: 'The rate is the US median wage for market research analysts, $37.87 an hour in May 2025, from the [Bureau of Labor Statistics](' +
        BLS +
        '). The larger number is often the one this sum leaves out: a step in your own journey that fails while nobody is looking. That sum is in [how AI customers find revenue leaks](/blog/ai-customers-find-revenue-leaks).',
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
      text: 'Past a handful of companies, or past one month, the hours compound and the evidence starts to matter, and the $2 line wins. To run AI customers at many companies for months without building them yourself, use Obsession.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits of this model' },
    {
      kind: 'list',
      items: [
        '**Prices are list prices on 24 October 2026.** Plans, free allowances and tiers change; every line links to its page so you can recheck it.',
        '**Volumes are examples.** A brand that sends 60 emails a month triples the reading line, which still rounds to cents.',
        '**Texts carry carrier fees** on top of Twilio’s rate, and sending from a US long code needs A2P 10DLC registration.',
        '**Gmail tab placement needs a Gmail inbox,** which is priced separately from an API inbox.',
        '**Bot walls and CAPTCHAs stop an AI customer.** The report names the step it couldn’t test, and no cost line removes the block.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agent cost' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How much does an AI agent cost per month?',
          a: 'It depends on what the agent holds. An AI customer that watches one company’s email costs about $2 a month at retail prices, almost all of it the inbox. Adding a US phone number brings it to about $3.25. The model that reads the emails costs about a cent a month on a small model.',
        },
        {
          q: 'Is an AI agent cheaper than a human?',
          a: 'For watching messages over time, yes, by orders of magnitude: about $2 a month against $50 to $200 for one human mystery shop. For judging service and tone in person, a human is the right tool, and the two do different jobs.',
        },
        {
          q: 'How much does mystery shopping cost?',
          a: 'T-ROC’s 2026 guide puts an institutional quality shop at $50 to $200, a basic 15 minute retail shop at $40 to $65, and budget providers at $15 to $30. Secret View lists €29.99 to €49.99 per shopper, excluding shopping credit.',
        },
        {
          q: 'What does it cost to run a million AI customers?',
          a: 'At retail prices, about $2.01 million a month, of which $2 million is inboxes rented one at a time. Reading, waking and storage come to about $12,000, or 1.2 cents each. A system built for millions owns the identity layer instead of renting it at retail.',
        },
        {
          q: 'Why does waiting cost nothing?',
          a: 'Because the AI customer isn’t running while it waits. On Cloudflare Durable Objects, objects that are idle and eligible for hibernation are not billed for duration. It wakes, and is billed, only when an email or a timer arrives.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Each price is the vendor’s own list price as of 24 October 2026. The volumes (20 emails a month of about 5,000 tokens, 100 KB stored per email, a 2 minute sign up, 10 texts) and the 25 rival example are illustrations, not measurements. The store in the illustration is invented.',
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
  related: ['ai-customers', 'how-ai-customers-work', 'hire-ai-customers', 'ai-customers-for-developers', 'recipe:mystery-shopper', 'recipe:competitor-tracking'],
}

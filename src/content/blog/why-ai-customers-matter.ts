import type { BlogPost } from './types'

/* The AI customers series, the pillar (24 Oct 2026; retitled "Why every company needs AI customers" the same day, same
   address, linking every audience deep dive): the thesis, under the invitation "Meet your first AI
   customers". Readers: founders, heads of growth, CX and ecommerce, agency founders, sales leaders and investors who
   want the case for the category in plain terms. It owns "why AI customers matter".
   The argument: every company has a customer side it doesn't watch (what customers receive, against what the company
   sends); 4 reasons it matters more now (weekly change, AI answering for companies, AI shopping for people, proof
   worth more than claims), what changes with AI customers, the reader's own number, who it is for and who can wait,
   then the invitation. Fair throughout: analytics, manual checks and mystery shoppers are described by what they do
   well, and the article says who doesn't need AI customers yet.
   Read on 24 Oct 2026: McKinsey's agentic commerce forecast (17 Oct 2025), Adobe's 2025 holiday results, Shopify's
   agentic storefronts help page (Gartner's pages were behind a bot wall, so its figures are left out); reused from checked live articles: Joy Joya's 362 brand test,
   Klaviyo's 2026 benchmarks, the CMA's 9 March 2026 guidance on AI agents, Moffatt v Air Canada (McCarthy Tétrault, Fox
   Business). The money example uses the reader's own report and invented figures, labelled. The store is invented.
   No dashes. */

const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const MCCARTHY = 'https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot'
const FOX = 'https://foxbusiness.com/lifestyle/air-canada-chatbot-gave-customer-wrong-info-airline-pay'
const MCKINSEY = 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants'
const ADOBE = 'https://news.adobe.com/news/2026/01/adobe-holiday-shopping-season'
const SHOPIFY_AGENTIC = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const PRODUCT_AI = 'https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'

export const post: BlogPost = {
  slug: 'why-ai-customers-matter',
  title: 'Why every company needs AI customers',
  dek: 'What a company sends and what its customers receive have drifted apart, and only a customer sees the gap. Why that gap matters more each month, what changes when AI customers watch it, and what it is worth in your own numbers.',
  metaTitle: 'Why AI customers matter: what only a customer of yours sees',
  description:
    'Why AI customers matter: what a company sends and what customers receive have drifted apart. Why it matters now, what changes, and your number.',
  answer:
    'AI customers matter because what a company sends and what its customers receive have drifted apart, and only a customer sees the difference: the welcome email that never came, the code refused at checkout, the chatbot quoting an old policy. An AI customer sees it at any company, every day, and keeps the evidence, at a cost low enough to watch every competitor, prospect and journey at once. Obsession’s AI customers do this today at any company you name, such as your own store, a competitor or a prospect.',
  primaryKeyword: 'why ai customers matter',
  keywords: [
    'why every company needs ai customers',
    'meet your first ai customers',
    'ai customers',
    'what customers actually receive',
    'customer journey testing',
    'ai agents as customers',
    'test ai chatbot as a customer',
    'customer experience gap',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
  readingMinutes: 7,
  order: 4,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'ivywell.example · sent, and received',
      period: 'The company’s own reports beside 1 AI customer’s week',
      cols: ['Message', 'The company’s report', 'What the customer got'],
      rows: [
        { name: 'Welcome email', cells: ['Sent to 412 new subscribers', 'Arrived in 2 minutes, Promotions tab'], tone: 'ok' },
        { name: 'Text with the code', cells: ['Flow live', 'Never arrived'], tone: 'fail' },
        { name: 'Basket reminder', cells: ['Sent after 1 hour', 'Arrived 26 hours later, no photo'], tone: 'late' },
        { name: 'Chat: returns', cells: ['Resolved', 'Said 60 days. The policy says 30'], tone: 'fail' },
        { name: 'Bedding set price', cells: ['£79 on the page', '£72 for subscribers, by email'], tone: 'info' },
      ],
      notes: ['An example on an invented store.', 'The company’s reports were right about what it sent. Only the customer saw what arrived.'],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A company can count every email it sends, every visit and every chat it closes. What each customer receives, in what order, and how it lands, is visible from one place only: the customer’s side.',
    },
    {
      kind: 'p',
      text: 'That side holds many of a company’s costliest mistakes, and it changes faster than anyone checks it by hand. AI customers make it possible to watch it at every company that matters to you, every day, with evidence.',
    },
    {
      kind: 'p',
      text: 'The gap is measurable. [A test of 362 ecommerce brands](' +
        JOYJOYA +
        ') by Joy Joya, using new email addresses and phone numbers, found that 158 sent no welcome email and 20 sent an offer that didn’t match the pop up.',
    },
    {
      kind: 'stat',
      value: '158 of 362',
      label: 'ecommerce brands sent no welcome email to a new subscriber in Joy Joya’s test',
      source: 'Joy Joya, July 2026',
      href: JOYJOYA,
    },

    { kind: 'h2', id: 'customer-side', text: 'The customer side of every company' },
    {
      kind: 'p',
      text: 'Every report a company reads describes what it did: emails sent, flows live, tickets resolved. Those reports are accurate about the company’s actions. They can’t show whether the email reached the inbox or the Promotions tab, whether the code worked on the sale price, or whether the chatbot’s answer matched the policy page.',
    },
    {
      kind: 'p',
      text: 'The money sits on that side. Klaviyo’s own [2026 benchmarks](' +
        KLAVIYO_BENCH +
        ') show that automated flows such as welcome and basket emails were 5.3% of email sends and nearly 41% of email revenue. Those flows reach only subscribers and shoppers who left a basket, so a broken one is invisible to everyone else, including the team that built it.',
    },

    { kind: 'h2', id: 'why-now', text: 'Why it matters more now' },
    { kind: 'h3', id: 'weekly-change', text: 'Companies change every week' },
    {
      kind: 'p',
      text: 'A new theme, a new app, an edited flow, a price change, a new chatbot prompt: each one can break a step that worked yesterday, and none of them sends an alert when a customer stops receiving something. The check that matters is the one run after each change, from the customer’s side.',
    },
    { kind: 'h3', id: 'ai-answers', text: 'AI now answers for companies' },
    {
      kind: 'p',
      text: 'Chatbots, voice agents and AI sales agents now speak to customers for the company, and the company owns what they say. In the UK, a business is responsible for what its AI agent does in the same way it is responsible for what an employee does, and the Competition and Markets Authority tells businesses to [regularly check how well an AI agent is performing](' +
        CMA +
        '). In February 2024 a British Columbia tribunal held Air Canada responsible for its chatbot’s answer and ordered it to pay a customer [CA$812](' +
        FOX +
        '), rejecting the argument that the chatbot was a separate entity, [as McCarthy Tétrault reports](' +
        MCCARTHY +
        ').',
    },
    { kind: 'h3', id: 'ai-shops', text: 'AI now shops for people' },
    {
      kind: 'p',
      text: '[McKinsey](' +
        MCKINSEY +
        ') forecasts that by 2030 AI agents could orchestrate $900 billion to $1 trillion of US retail revenue, and $3 trillion to $5 trillion worldwide. The start is visible already: traffic from AI tools to US retail sites rose 693.4% in the 2025 holiday season, from a small base, [Adobe reported](' +
        ADOBE +
        '), and [Shopify’s agentic storefronts](' +
        SHOPIFY_AGENTIC +
        ') are on by default for eligible stores. Companies will be judged by agents that read every page and every policy literally. An AI customer shows a company what those agents meet.',
    },
    { kind: 'h3', id: 'proof', text: 'Proof is worth more than claims' },
    {
      kind: 'p',
      text: 'As more writing, reports and screenshots are produced by AI, the scarce thing is a record that something happened. An email kept exactly as it arrived, with its time and the sender’s signature checked on arrival, is a record anyone can open and test. That is the kind of evidence a client, a board or a court can rely on. For an agency, it ends the argument about whether a client’s flow fired ([showing clients every flow that fired](/blog/show-clients-every-flow-fired)).',
    },

    { kind: 'h2', id: 'three-sides', text: 'Your company, your competitors and your partners' },
    {
      kind: 'p',
      text: 'The customer side exists at every company, so AI customers point 3 ways, and each answers a question the other 2 can’t.',
    },
    {
      kind: 'list',
      items: [
        '**Your own company.** Does every journey still work after this week’s release: the pop up, the welcome, the basket reminder, the code, the support bot? A silent fault here costs money every day, so a check after each change pays first. The method is in [how AI customers find revenue leaks](/blog/ai-customers-find-revenue-leaks).',
        '**Your competitors and prospects.** What does a competitor offer a new customer this week, and how fast does a prospect answer a demo request? When [Clay’s agents submitted 6,346 demo and contact forms](' +
          CLAY +
          '), two thirds of the companies never replied: the kind of fact a sales team can open a conversation with.',
        '**Your partners and AI assistants.** Does a deals site still show an expired code, and what do AI assistants tell shoppers about your prices? In a study Product.ai ran and Business Insider reported, [85% of the 913 AI shopping answers it could verify matched the current or listed price](' +
          PRODUCT_AI +
          '), so about 1 in 7 didn’t.',
      ],
    },
    {
      kind: 'p',
      text: 'How marketing, sales, agency and CX teams put each one to work is in [AI customers for commercial teams](/blog/ai-customers-for-commercial-teams).',
    },

    { kind: 'h2', id: 'what-changes', text: 'What changes with AI customers' },
    {
      kind: 'table',
      caption: 'Common questions, answered today and answered with AI customers',
      cols: ['Question', 'How it is answered today', 'With AI customers'],
      rows: [
        ['Did the welcome email arrive?', 'Someone signs up by hand now and then', 'Every day, at every store, with the email kept'],
        ['What are competitors offering subscribers?', 'A spare inbox per competitor, read when someone remembers', 'Every competitor’s emails, texts and prices on 1 timeline'],
        ['Does our chatbot quote the right policy?', 'A test before launch', 'The same questions every day and after every update'],
        ['What does this prospect’s customer get?', 'A guess from its website', 'A dated finding the prospect can open'],
        ['How many companies can we check?', 'As many as people have hours for', '100,000 at once, built for millions'],
      ],
    },
    {
      kind: 'p',
      text: 'The tools that exist do their jobs well. Analytics shows where visitors drop, email reports show what was sent, and a mystery shopper brings human judgement to a visit. AI customers add the part none of them cover: being the customer, at any company, for as long as it takes, with the evidence kept.',
    },

    { kind: 'h2', id: 'your-number', text: 'What a silent message costs, in your numbers' },
    {
      kind: 'p',
      text: 'Take your email platform’s report for the flow you rely on most, often the welcome series. The cost of it going silent is its daily revenue multiplied by the days until someone notices.',
    },
    {
      kind: 'list',
      items: [
        '**Your flow’s revenue a day:** from your platform’s flow report, over the last 30 days, divided by 30.',
        '**Days until noticed:** without a daily check, the time until the monthly report or a customer’s complaint.',
        '**Cost of the silence:** revenue a day × days until noticed.',
      ],
    },
    {
      kind: 'p',
      text: 'An example with invented figures: a welcome series reporting £36,000 over 30 days earns £1,200 a day. Silent for 9 days before anyone notices, it costs £10,800. Found the morning after the change that broke it, it costs £1,200.',
    },
    {
      kind: 'p',
      text: 'The same sum works for an agency (a client’s retainer, kept because the fault was found first) and for a sales team (a meeting won with a finding the prospect can open).',
    },

    { kind: 'h2', id: 'who-for', text: 'Who it is for, and who can wait' },
    {
      kind: 'list',
      items: [
        '**It pays first** for companies that change often, buy paid traffic, compete on offers, run AI agents in front of customers, or check many companies at once, as agencies and sales teams do.',
        '**It can wait** for a business that changes rarely, runs no paid traffic and has few competitors. Signing up by hand once a month and after every change covers it.',
      ],
    },

    { kind: 'h2', id: 'by-business', text: 'Why each kind of company needs AI customers' },
    {
      kind: 'p',
      text: 'The sum changes with the business. A guide for each kind of company works through its money, its workload and its options:',
    },
    {
      kind: 'list',
      items: [
        '**Ecommerce brands.** Most owned revenue runs through automated messages and steps that fail without an error. [Why ecommerce brands need AI customers](/blog/ai-customers-for-ecommerce-brands).',
        '**Retention agencies.** Clients stay when they can see what their customers received. [Why retention agencies need AI customers](/blog/ai-customers-for-retention-agencies).',
        '**CRO and performance agencies.** Paid traffic is only as good as the page, code and emails it lands on. [Why CRO and performance agencies need AI customers](/blog/ai-customers-for-cro-agencies).',
        '**Shopify Plus agencies.** A launch is judged in the weeks after go-live, when the client’s customers find what broke. [Why Shopify Plus agencies need AI customers](/blog/ai-customers-for-shopify-plus-agencies).',
        '**Companies that sell to Shopify brands.** Install data says what a store has, never whether it works. [Why companies that sell to Shopify brands need AI customers](/blog/ai-customers-for-ecommerce-vendors).',
        '**B2B sales teams.** A demo request is worth only as much as the first reply a buyer gets. [Why B2B sales teams need AI customers](/blog/ai-customers-for-b2b-sales-teams).',
        '**CX teams.** A company answers for its AI agent as it does for an employee. [Why CX teams need AI customers](/blog/ai-customers-for-cx-teams).',
        '**Developers.** An agent that deals with another company has to stay its customer for months. [Why developers need AI customers](/blog/long-running-ai-agents), and [what to build with AI customers](/blog/what-to-build-with-ai-customers).',
        '**Every team in one company.** Marketing, sales, agencies, ecommerce and CX, side by side, in [AI customers for commercial teams](/blog/ai-customers-for-commercial-teams).',
      ],
    },

    { kind: 'h2', id: 'meet', text: 'Meet your first AI customers' },
    {
      kind: 'p',
      text: 'If your company needs to see what customers receive from it, its competitors or its prospects, use Obsession. Start where the money is: your own store’s journeys, 5 client stores for an agency, or your 5 closest competitors. A store’s [first check is free](/use-cases/leak-checks-for-ecommerce-stores), and an agency can [check 5 stores free](/use-cases/leak-checks-for-retention-agencies). Within days, each AI customer has signed up, waited and kept what arrived, and you read the first findings with their evidence. How they do it is in [how AI customers work](/blog/how-ai-customers-work), and what the term means is in [AI customers](/blog/ai-customers).',
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you. They sign up to any company you name and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about why AI customers matter' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Why do AI customers matter?',
          a: 'They see what a company’s customers actually receive, which the company’s own reports can’t show, and they keep the evidence. They do it at any company, every day, at a cost that makes checking every competitor and journey practical.',
        },
        {
          q: 'Can’t my analytics show me this?',
          a: 'Analytics shows what visitors did on your site and what your tools sent. It can’t show whether an email arrived, which tab it landed in, or what a customer was told by your chatbot.',
        },
        {
          q: 'Isn’t a manual check once a month enough?',
          a: 'For a business that changes rarely, yes. For one that changes weekly or buys paid traffic, a fault can run for weeks between checks.',
        },
        {
          q: 'Who should start with AI customers?',
          a: 'Companies that change often, buy paid traffic or run AI agents in front of customers, and agencies and sales teams that check many companies at once. A business that changes rarely can sign up by hand once a month and after each change.',
        },
        {
          q: 'Do AI customers replace mystery shoppers?',
          a: 'They cover the digital journeys every day at software cost. A human mystery shopper still brings judgement to a store visit or a phone call.',
        },
        {
          q: 'Are AI customers the same as AI shopping agents?',
          a: 'No. An AI shopping agent buys for a person. An AI customer is a customer of a company that records what the company sends, and buys only when its owner funds a real order.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every outside source was read on 24 October 2026. The store, its report and the money example use invented figures. For legal questions about AI agents, take advice for your own case.',
    },
  ],

  sources: [
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Air Canada chatbot gave a customer wrong info and the airline had to pay', publisher: 'Fox Business', url: FOX, date: '2024-02-19' },
    { title: 'Moffatt v. Air Canada: A Misrepresentation by an AI Chatbot', publisher: 'McCarthy Tétrault', url: MCCARTHY, date: '2024-02-19' },
    { title: 'Agentic commerce: how agents are ushering in a new era', publisher: 'McKinsey & Company', url: MCKINSEY, date: '2025-10-17' },
    { title: 'Holiday shopping season drove a record $257.8 billion online with consumers embracing generative AI tools', publisher: 'Adobe', url: ADOBE, date: '2026-01-07' },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_AGENTIC },
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests', publisher: 'Business Insider, via DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
  ],
  related: ['ai-customers', 'how-ai-customers-work', 'ai-customers-find-revenue-leaks', 'hire-ai-customers', 'recipe:mystery-shopper', '/sample-output'],
}

import type { BlogPost } from './types'

/* The AI customers series, article 9 (24 Oct 2026): AI customers for commercial teams. It owns "ai agents for marketing
   teams", "ai for agencies" and "ai for sales teams". Readers: heads of marketing, CRM and product marketing; SDR and AE
   leads and RevOps; agency founders, strategists and account directors; ecommerce, CX and support operations leads.
   Why now: rivals' Black Friday teasers start 2 to 4 weeks before Fri 27 Nov 2026 (Klaviyo's June 2026 guide), code
   freezes come before that, and AI on the company side now carries duties (CMA guidance, EU AI Act Article 50 from
   2 August 2026).
   The idea: every commercial team asks questions only a customer can answer and answers them today with proxies (ad
   libraries, install and intent data, an audit behind a login, flow reports and ticket counts). One table sets the proxy
   beside what an AI customer brings back; then a section per team written to its week: the questions, the checks with a
   pass mark, and what the team does with the result that week. The options with prices are in hire-ai-customers.
   Read on 24 Oct 2026 at source: Salesforce's State of Sales announcement (3 Feb 2026) and State of Service story (20 May
   2026), Klaviyo's Black Friday timing guide, RevenueHero's 1,000 demo request test, Rejoiner's 2025 report, MailCharts'
   agencies page, Flowium's audit page, Darkroom's retention cost guide (23 Oct 2026); from the verified library
   (_research/seo/plan/ai-customers/facts.json): Clay's 6,346 form test, the CMA's guidance, the AI Act pages, and the
   Product.ai study as republished by DNYUZ. Persona weeks come from _research/money-icps/ and _research/sales-teams/.
   Left out on purpose: Reddit quotes (the pages wouldn't load), Gartner figures (bot wall), any Obsession price, the 93%
   and 128 stores, any PilotX figure. The companies in the illustration are invented. No dashes. */

const SF_SERVICE = 'https://www.salesforce.com/news/stories/ai-service-agents-improve-customer-satisfaction/'
const KL_TIMING = 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails'
const PRODUCT_AI = 'https://dnyuz.com/2026/09/25/ai-cant-take-over-your-holiday-shopping-quite-yet-a-new-study-suggests/'
const SF_SALES = 'https://www.salesforce.com/news/stories/state-of-sales-report-announcement-2026/'
const REVENUEHERO = 'https://www.revenuehero.io/blog/b2b-lead-response-times'
const CLAY = 'https://www.clay.com/blog/claygent-experiment-speed-to-lead'
const MC_AGENCIES = 'https://mailcharts.com/built-for/agencies'
const FLOWIUM = 'https://flowium.com/audit'
const DARKROOM = 'https://www.darkroomagency.com/observatory/retention-marketing-cost-email-sms-2026'
const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const AI_ACT_50 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50'
const AI_ACT_113 = 'https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-113'
const REJOINER = 'https://rejoiner.com/abandoned-cart-email-report'

export const post: BlogPost = {
  slug: 'ai-customers-for-commercial-teams',
  title: 'AI agents for marketing teams, sales and agencies: what AI customers answer',
  dek: 'What marketing, sales, agency, ecommerce and CX teams can only learn as a customer, the checks to run each week with a pass mark, and what each team does with the result that week.',
  metaTitle: 'AI agents for marketing teams, sales teams and agencies',
  description:
    'AI agents for marketing teams, sales teams, agencies and CX: the questions only a customer can answer, the checks to run and what to do that week.',
  answer:
    'AI agents for marketing teams, sales teams, agencies and CX teams can do one job their other tools can’t: be a customer. AI customers sign up to a rival, a prospect, a client or the team’s own company and record what it sends and shows. Marketing sees rivals’ subscriber offers, sales sees what a prospect does to its own customers, agencies see every client’s flows, and ecommerce and CX teams see every journey and chatbot answer, each with the evidence.',
  primaryKeyword: 'ai agents for marketing teams',
  keywords: [
    'ai for sales teams',
    'ai for agencies',
    'ai agents for sales',
    'ai agents for agencies',
    'ai for marketing teams',
    'ai for customer experience teams',
    'ai agents for ecommerce',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-24',
  readingMinutes: 9,
  order: 10,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'Monday 09:00 · what 4 teams’ AI customers found',
      period: '1 week of AI customers, read on Monday morning',
      cols: ['Team', 'The question', 'What came back'],
      rows: [
        { name: 'Marketing', cells: ['larkfield.example’s first offer', 'Sunday 19:00, 25% off, subscribers only'], tone: 'info' },
        { name: 'Marketing', cells: ['Our launch code at checkout', 'Applied to sale prices, as planned'], tone: 'ok' },
        { name: 'Sales', cells: ['brightwell.example’s welcome', 'None after 72 hours'], tone: 'fail' },
        { name: 'Agency', cells: ['fernhill.example’s basket reminder', 'Stopped after Friday’s theme change'], tone: 'fail' },
        { name: 'CX', cells: ['Our bot on sale returns', 'Said 60 days. The policy says 30'], tone: 'fail' },
      ],
      notes: [
        'An example. Every company here is invented, at a .example address.',
        'Each answer came with its evidence: the email, the page or the transcript.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Marketing, sales, agency, ecommerce and CX teams each need answers that only a customer has: what a rival sent its subscribers, what a prospect’s new customers receive, whether a client’s flows fired, what the chatbot told a shopper. Each team answers them today with proxies, because its tools report the company’s own actions or signals gathered from outside.',
    },
    {
      kind: 'p',
      text: 'Companies already put AI agents on their side of the conversation. Salesforce’s own [survey of service teams, published in May 2026](' +
        SF_SERVICE +
        '), found 66% of customer service organisations use agentic AI, up from 39% in 2025. [AI customers](/blog/ai-customers) put an agent on the customer’s side: each becomes a customer of a company, waits for what arrives and keeps it as evidence.',
    },
    {
      kind: 'stat',
      value: '66%',
      label: 'of customer service organisations use agentic AI, up from 39% in 2025',
      source: 'Salesforce State of Service, May 2026',
      href: SF_SERVICE,
    },

    { kind: 'h2', id: 'questions-only-a-customer', text: 'Questions only a customer can answer' },
    {
      kind: 'p',
      text: 'Each team’s tools are accurate about what they measure, and in every team the answer to these questions sits in a customer’s inbox, phone or browser.',
    },
    {
      kind: 'table',
      caption: 'Each team’s customer question, the proxy it uses today, and what an AI customer brings back',
      cols: ['Team', 'The question', 'Answered today with', 'An AI customer brings back'],
      rows: [
        ['Marketing', 'What rivals send their subscribers', 'Ad libraries and forwarded newsletters', 'Every email, text and code, dated'],
        ['Sales', 'What a prospect does to its customers', 'Install data and intent signals', 'A dated fact the prospect can open'],
        ['Agencies', 'What a prospect’s store sends', 'An audit after a login', 'The prospect’s own emails, before the call'],
        ['Ecommerce and CX', 'What a new customer receives', 'Flow reports and ticket counts', 'Each message as it arrived, with its time'],
      ],
    },
    {
      kind: 'p',
      text: 'An AI customer’s answer arrives as the thing itself: the email with its time, the page as it showed, the chatbot’s words. A manager, a client or a prospect can open it and check.',
    },

    { kind: 'h2', id: 'marketing', text: 'AI agents for marketing teams' },
    {
      kind: 'p',
      text: 'In late October a marketing team is locking its Black Friday calendar. [Klaviyo’s June 2026 timing guide](' +
        KL_TIMING +
        ') advises teaser campaigns 2 to 4 weeks before the sale, which would put a rival following it in early November. The team’s tools show its own sends and results and rivals’ public ads. What rivals send their subscribers, and what a new customer of the team’s own brand receives, sits in inboxes the team doesn’t hold.',
    },
    {
      kind: 'list',
      items: [
        '**When each rival’s Black Friday offer reaches subscribers, and how deep it goes.** Sign up to your 5 closest rivals this week, each with a new address and phone number, before their teasers start. A pass: every address holds the welcome series and each campaign from the first teaser on.',
        '**Whether your own launch offer works for a new customer.** Open each live ad’s landing page, sign up through the pop up and take the code to checkout on a sale item. A pass: the same offer and price at every step, and the code applies as planned.',
        '**What AI assistants tell shoppers about your company.** Ask 3 assistants the 5 questions shoppers ask before they buy. A pass: prices, delivery dates and returns match your pages. In a study Product.ai ran and [Business Insider reported](' +
          PRODUCT_AI +
          '), 85% of 913 checkable price answers matched, and wrong ones were off by a median of $300.',
      ],
    },
    {
      kind: 'p',
      text: '**That week:** move a send date or adjust an offer before a rival’s lands, fix any page or code that doesn’t match its ad, and send the CMO the rivals’ emails themselves, dated. The tools for the first check are compared in [competitor email tracking tools](/blog/competitor-email-tracking-tools), and the third check is set out in [what ChatGPT says about your store](/blog/what-chatgpt-says-about-your-store).',
    },

    { kind: 'h2', id: 'sales', text: 'AI for sales teams' },
    {
      kind: 'p',
      text: 'Sellers are short of time for research. [Salesforce’s 2026 State of Sales](' +
        SF_SALES +
        '), a survey of 4,050 sellers, found reps spend 40% of their time selling and nearly a full day a week prospecting, 48% lack the capacity for proper cold outreach, and sellers expect agents to cut prospect research time by 34%. The data they buy shows who a company is, what it has installed and what it may be researching. What the company does to its own customers appears in none of it.',
    },
    {
      kind: 'list',
      items: [
        '**What a prospect does to its own customers, where it bears on what you sell.** For an email platform, the prospect’s welcome series. For a support tool, its chatbot’s answers. For a shipping app, its delivery emails. Become a customer of your top 20 accounts through their public sign up before the first touch. A pass: 1 dated fact per account, tied to the problem you solve.',
        '**How fast your own team answers a demo request.** Send a labelled test lead through your demo form, chat and phone each week. A pass: a first reply inside the target your team sets. When [RevenueHero requested demos from 1,000 B2B websites](' +
          REVENUEHERO +
          ') for a study it published in March 2024, 365 replied, after 1 day, 5 hours and 17 minutes on average. In [Clay’s test of 6,346 forms](' +
          CLAY +
          '), published in September 2026, two thirds of companies never replied.',
        '**What a rival’s free trial sends.** Start each rival’s trial where it needs no card and keep every email for 14 days. A pass: the battlecard shows what each rival sent and when.',
      ],
    },
    {
      kind: 'p',
      text: '**That week:** open each first email with the fact and a link the prospect can open, fix the routing rule behind a slow reply, and update the battlecard. Use prospects’ public sign ups only, because a test demo request to a prospect takes up a seller’s time.',
    },

    { kind: 'h2', id: 'agencies', text: 'AI for agencies' },
    {
      kind: 'p',
      text: 'An agency’s week runs on client calls, monthly reports and pitches, and each one asks for evidence of what customers received. Clients forward a rival’s email and ask what the agency is doing about it. An account manager quoted on [MailCharts’ agencies page](' +
        MC_AGENCIES +
        ') says: “Our clients would constantly be asking us to produce a competitive analysis based on email”. A pitch audit can wait on access: [Flowium’s free audit](' +
        FLOWIUM +
        ') needs Klaviyo Manager access and is delivered on a screen share.',
    },
    {
      kind: 'list',
      items: [
        '**What a prospect’s store sends a new customer, before the pitch.** Sign up through its public pop up, opt in to texts and leave a basket, with no login. A pass: you open the call with the prospect’s own emails and their times.',
        '**Whether every client’s flows fired this week.** With each client’s OK, run a new customer through every client store each week and after every theme, app or flow change. A pass: each flow arrives within its delay, with its content filled in.',
        '**What every client’s rivals sent.** Keep an AI customer on each rival’s list. A pass: the month’s rival emails sit in the client report, dated.',
      ],
    },
    {
      kind: 'p',
      text: '**That week:** fix a broken flow before the client sees it, add a page on what customers received to each report, and open the pitch with the prospect’s finding. A retainer runs from $3,000 to $10,000 a month or more in [Darkroom’s October 2026 cost guide](' +
        DARKROOM +
        '), so 1 client kept for a year is worth $36,000 to $120,000. The first 2 checks are set out by hand in [show clients every flow fired](/blog/show-clients-every-flow-fired) and [audit a prospect’s email without a Klaviyo login](/blog/audit-prospect-email-without-klaviyo-login).',
    },
    {
      kind: 'cta',
      text: 'Obsession checks 5 stores free, a prospect’s or a client’s with their OK: an AI customer signs up as each store’s new customer, opts in to texts and leaves a basket, and you see what happened within 4 days, with proof.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'ecommerce-cx', text: 'AI for ecommerce and CX teams' },
    {
      kind: 'p',
      text: 'Ecommerce and CX teams change the store every week: a theme, an app, a flow, a price, a chatbot prompt. Any of them can stop a message without an alert, and each needs testing before the code freeze ahead of Black Friday on Friday 27 November. AI on the company side now carries duties too. The UK’s Competition and Markets Authority says [a business is responsible for what its AI agent does](' +
        CMA +
        ') in the same way as for an employee, and the EU AI Act’s [Article 50](' +
        AI_ACT_50 +
        ') requires AI systems that talk to people to tell them so, [from 2 August 2026](' +
        AI_ACT_113 +
        ').',
    },
    {
      kind: 'list',
      items: [
        '**Whether each reminder arrives on time, with the right product.** Sign up, leave a basket and leave a checkout as a new customer each week and after every change. A pass: each reminder arrives within its flow’s delay, with the product, photo and price. Rejoiner’s own [study of 1,000 direct to consumer brands](' +
          REJOINER +
          ') found 68% of abandoned carts triggered a follow up email.',
        '**Whether codes, orders and delivery emails work.** Take the welcome code to checkout on a sale item, and place a test order after any checkout or shipping change. A pass: the code applies as planned, and the confirmation and shipping emails arrive.',
        '**What your chatbot tells customers.** Ask it about returns on sale items, delivery dates and the welcome code every day, and after every prompt or help article edit. A pass: each answer matches the policy page, the bot says it is an AI, and it hands over to a person when asked.',
      ],
    },
    {
      kind: 'p',
      text: '**That week:** send each fail to its owner (the flow to whoever runs the email platform, the code to the promotions lead, the bot’s answer to whoever edits its sources), test again the same day, and keep the evidence for the review after the sale. The [Black Friday checklist](/blog/black-friday-checklist-new-customer) gives the 12 tests in full, and [how AI customers find revenue leaks](/blog/ai-customers-find-revenue-leaks) puts a price on a missing message.',
    },
    {
      kind: 'cta',
      text: 'Your first store check is free: 4 AI customers sign up, use the welcome code, leave a basket and wait 48 hours, and your report arrives within 4 days.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Pick 1 team and its 3 questions.** The team with a deadline goes first. Before Black Friday, that is usually marketing or ecommerce.',
        '**Write a pass mark for each,** so every result is a pass or a fail.',
        '**Name 5 companies:** rivals, prospects, client stores with their OK, or your own store.',
        '**Run each check once by hand,** from a new address and phone number, and record what arrived and when.',
        '**Send each result where the team works:** a Slack channel, the CRM or the client report.',
      ],
    },
    {
      kind: 'p',
      text: 'Past a handful of companies, or a check every day, the hours grow faster than the team. The options, with prices, a brief and a payback sum, are in [hire AI customers](/blog/hire-ai-customers). Obsession makes the first AI customers that work for you, through its [competitor tracking](/recipes/competitor-tracking), [prospect intelligence](/recipes/prospect-intelligence), [mystery shopper](/recipes/mystery-shopper) and [support bot check](/recipes/support-bot-check) recipes.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits' },
    {
      kind: 'list',
      items: [
        '**A new customer sees what new customers get.** Engaged subscribers and past buyers may receive other emails.',
        '**It records what arrived, and not why.** The cause sits in the company’s own tools.',
        '**It stops at a bot wall or a CAPTCHA,** and records the block as a finding.',
        '**Some teams can wait.** A team with few rivals, no paid traffic and rare changes covers its questions by hand once a month.',
        '**Client stores need the client’s OK, and prospects get only the public sign up.** This is not legal advice.',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agents for commercial teams' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What can AI agents do for marketing teams?',
          a: 'AI agents can watch every rival as a customer, check that the team’s own launch codes and pages work for a new customer, and ask AI assistants what they tell shoppers, keeping each email, page and answer as evidence.',
        },
        {
          q: 'How can AI help sales teams?',
          a: 'Beyond research and drafting, AI customers give a seller a dated fact about what each prospect does to its own customers, and test how fast the seller’s own team answers a demo request.',
        },
        {
          q: 'How do agencies use AI agents?',
          a: 'Agencies use AI customers to see a prospect’s emails before a pitch without a login, to check every client’s flows each week with the client’s OK, and to put rivals’ emails in client reports.',
        },
        {
          q: 'Can AI agents test our customer journey?',
          a: 'Yes. An AI customer signs up, leaves a basket, uses the code, asks the chatbot and waits for each email, then reports what arrived and when, with the evidence.',
        },
        {
          q: 'Do AI customers replace our marketing and sales tools?',
          a: 'No. Analytics, email platforms, CRMs and data providers keep their jobs. AI customers add what a company sends its customers, which those tools can’t see.',
        },
        {
          q: 'Is it legal to sign up to a competitor’s emails with an AI agent?',
          a: 'An AI customer uses the public sign up any customer can use, says it is an AI when it talks to a person and uses no fake payment details. Rules differ by country and by use, so take legal advice for your case.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The Product.ai figures come from Business Insider’s report as republished by DNYUZ, because the original didn’t load. The weekly rhythms of each team come from our own research on agencies and sales teams, and the checks are ours to suggest. The companies in the illustration are invented. For legal questions, take advice for your own case.',
    },
  ],

  sources: [
    { title: 'New research: AI service agents are scaling and delivering CSAT', publisher: 'Salesforce', url: SF_SERVICE, date: '2026-05-20' },
    { title: 'When to send Black Friday emails (and texts, and other marketing messages)', publisher: 'Klaviyo (Katherine Boyarsky)', url: KL_TIMING, date: '2026-06-26' },
    { title: 'AI can’t take over your holiday shopping quite yet, a new study suggests (Product.ai study)', publisher: 'Business Insider, republished by DNYUZ', url: PRODUCT_AI, date: '2026-09-25' },
    { title: 'The productivity gap: new survey shows 9 in 10 sellers are betting on AI and agents to help', publisher: 'Salesforce', url: SF_SALES, date: '2026-02-03' },
    { title: 'We tested lead response times of 1000 B2B sales teams. Here are the results.', publisher: 'RevenueHero', url: REVENUEHERO, date: '2024-03-20' },
    { title: 'We asked 6,346 companies for a demo. Most never wrote back.', publisher: 'Clay', url: CLAY, date: '2026-09-22' },
    { title: 'Agencies', publisher: 'MailCharts', url: MC_AGENCIES },
    { title: 'Free email marketing audit', publisher: 'Flowium', url: FLOWIUM },
    { title: 'How much does retention marketing cost in 2026? (Email, SMS & Lifecycle Pricing)', publisher: 'Darkroom', url: DARKROOM, date: '2026-10-23' },
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-03-09' },
    { title: 'Article 50: transparency obligations', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_50 },
    { title: 'Article 113: entry into force and application', publisher: 'European Commission, AI Act Service Desk', url: AI_ACT_113 },
    { title: 'Abandoned cart email statistics & strategy guide: 2025 research report', publisher: 'Rejoiner', url: REJOINER, date: '2025-02-10' },
  ],
  related: ['ai-customers', 'hire-ai-customers', 'ai-customers-find-revenue-leaks', 'recipe:competitor-tracking', 'recipe:prospect-intelligence', '/use-cases/leak-checks-for-retention-agencies'],
}

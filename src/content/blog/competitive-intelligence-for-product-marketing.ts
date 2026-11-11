import type { BlogPost } from './types'

/* Revenue teams series, spec 10 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026). It owns
   "competitive intelligence for product marketing" and competitive intelligence product marketing, competitor
   positioning analysis and competitor launch tracking (Google autocomplete, US and UK, 11 Nov: demand.json). "win loss
   analysis" stays with /blog/win-loss-analysis and "competitor tracking" with /recipes/competitor-tracking; this post
   links both with their phrases. The definition of competitive intelligence stays with its glossary term.
   Reader: product marketing at B2B software companies whose product touches what their prospects' customers see
   (email and SMS, help desk and AI support, checkout and payments, identity and onboarding). Persona key: pmm.
   The case: page 1 is generic advice and forum threads. This post reads each competitor's launch through what it sends
   and shows a new customer, with a positioning template, a launch tracking method by hand and its cost.
   Read at the source on 11 Nov 2026: the Product Marketing Alliance's CI trends report page (2 Nov 2022); Visualping's
   home and pricing pages; Klue's home and pricing pages; Crayon's home and pricing pages; Kompyte's home and plans
   pages; Clozd's home page; Exa's home, Connect and pricing pages; Salesforce's Main Services Agreement (PDF, last
   updated 15 Oct 2026). Left out on purpose: the PMA's 2022 State of Product Marketing CI share (its own summary and
   other sites disagree on the figure), Clozd's prices (its pricing address returned 404 and its home page lists none),
   the Wayback Machine (its page wouldn't load for checking). Obsession is described in the words of site.ts, Home,
   /sales, the trial teardown and competitor tracking recipes and the software trials use case. Brackwell, Quenby,
   Harwick and Ostrand are invented, at .example addresses, as is every claim, email, limit and offer in the pictures.
   No dashes. General information, never legal advice. */

const PMA = 'https://www.productmarketingalliance.com/competitive-intelligence-trends-report-2022/'
const VISUALPING = 'https://visualping.io/'
const VISUALPING_PRICING = 'https://visualping.io/pricing'
const KLUE = 'https://klue.com/'
const CRAYON = 'https://www.crayon.co/'
const KOMPYTE = 'https://www.kompyte.com/'
const KLUE_PRICING = 'https://klue.com/pricing'
const CRAYON_PRICING = 'https://www.crayon.co/pricing'
const KOMPYTE_PLANS = 'https://www.kompyte.com/plans'
const CLOZD = 'https://www.clozd.com/'
const EXA = 'https://exa.ai/'
const EXA_CONNECT = 'https://exa.ai/connect'
const SALESFORCE_MSA = 'https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/legal/salesforce_MSA.pdf'
const EXA_PRICING = 'https://exa.ai/pricing'

export const post: BlogPost = {
  slug: 'competitive-intelligence-for-product-marketing',
  title: 'Competitive intelligence for product marketing: what competitors send new customers',
  dek: 'A positioning template, a launch tracking method and its cost, for product marketers at software companies whose buyers run trials. Every launch is read through the emails, limits and offers each competitor shows a new customer.',
  metaTitle: 'Competitive intelligence for product marketing: B2B launches',
  description:
    'Competitive intelligence for product marketing: read each competitor’s launch through the emails, trial limits and offers it sends new customers, dated.',
  answer:
    'Competitive intelligence for product marketing is tracking what competitors claim, launch, charge and send, to set positioning, plan launches and keep battlecards current. A launch page shows what a competitor says, and only a sign-up shows what it sends a new customer: the welcome email, trial limits, upgrade prompts and offers. Obsession keeps what each competitor you name shows its new customers, dated with the email or screenshot, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'competitive intelligence for product marketing',
  keywords: [
    'competitive intelligence product marketing',
    'competitor positioning analysis',
    'competitor launch tracking',
    'product marketing win loss',
    'competitor analysis positioning map',
    'what is competitive marketing intelligence',
  ],
  category: 'Watch other companies',
  order: 10,
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 14,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'brackwell.example · launch week',
      who: 'A new trial user in the US, from Tuesday 3 November',
      rows: [
        { time: 'Tue 09:00', text: 'Launch page: AI flows on every plan', detail: 'Public, saved with a dated screenshot', tone: 'info' },
        { time: 'Tue 09:20', text: 'Trial started, no payment asked', detail: 'Its own inbox, kept open', tone: 'ok' },
        { time: 'Tue 09:21', text: 'Welcome email: import your contacts', detail: 'No mention of AI flows', tone: 'info' },
        { time: 'Thu 10:05', text: 'Flow editor: AI flows locked', detail: 'An upgrade prompt on trial day 2', tone: 'fail' },
        { time: 'Fri 09:00', text: 'Day 3 email: build your first flow', detail: 'From a template, by hand', tone: 'info' },
        { time: 'Sun 09:00', text: 'Day 12 email: 20% off a yearly plan', detail: 'On no public page', tone: 'info' },
      ],
      foot: 'Invented company and offer. The launch page said every plan, and the trial put AI flows behind an upgrade.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Competitive intelligence for product marketing is tracking what competitors claim, launch, charge and send, to set positioning, plan launches and keep battlecards current. Product marketing teams also use it to explain wins and losses. Launch posts, pricing pages and release notes show what a competitor says. What it does with a new customer, from the welcome email to the offer when a trial ends, reaches only someone who signs up.',
    },
    {
      kind: 'p',
      text: 'That second half matters most for software that sits close to your prospects’ own customers: email and SMS platforms, help desks with AI support, checkout and payments, identity checks and onboarding tools. Buyers in those markets run a trial before they sign, so what each competitor’s trial shows them weighs on the deal as much as its launch page. Take the pipeline where your main competitor is in the deal. On $500m of it a year, 1 point of win rate is worth $5m. On $50m it is worth $500,000, and on $5m it is worth $50,000 (example pipelines).',
    },

    { kind: 'h2', id: 'what-it-covers', text: 'What competitive intelligence for product marketing covers' },
    {
      kind: 'p',
      text: '[Competitive intelligence](/glossary/competitive-intelligence) (CI) is the practice of collecting and sharing facts about competitors, such as their prices and products, so a company can compete better against them. In software companies it usually sits with product marketing managers (PMMs). In the [Product Marketing Alliance’s 2022 competitive intelligence trends report](' +
        PMA +
        '), 69.1% of respondents said product marketing owns competitive intelligence, and 76.5% of product marketers said they use dedicated CI tools. A PMM’s CI feeds 4 jobs:',
    },
    {
      kind: 'list',
      items: [
        '**Positioning:** how you describe your product against the alternatives a buyer weighs, and the proof behind each claim.',
        '**Launches:** what each competitor ships, how it announces it, and what changes for a new customer afterwards.',
        '**Battlecards:** the page a rep opens when a competitor is in the deal. A [battlecard](/glossary/battlecard) needs current prices, limits and offers, and the [battlecard template](/blog/battlecard-template) guide sets out each section.',
        '**Win-loss:** why deals were won or lost, from buyer interviews and CRM loss reasons, covered in [win loss analysis](/blog/win-loss-analysis).',
      ],
    },

    { kind: 'h2', id: 'sources-today', text: 'Where product marketing teams get CI today' },
    {
      kind: 'p',
      text: 'Each source answers part of the job well, and most teams use several.',
    },
    { kind: 'h3', id: 'public-pages', text: 'Public pages and change alerts' },
    {
      kind: 'p',
      text: 'Launch posts, pricing pages, release notes, review sites and job posts show what a competitor publishes. [Visualping](' +
        VISUALPING +
        ') watches the pages you choose and sends an alert by email when one changes, and on its Business plan by Slack, Microsoft Teams or Google Sheets. It lists competitors’ homepages, pricing and products among its business uses, and as of 11 November 2026 its [free plan](' +
        VISUALPING_PRICING +
        ') covers 150 checks a month across 5 pages.',
    },
    { kind: 'h3', id: 'ci-platforms', text: 'Klue, Crayon and Kompyte' },
    {
      kind: 'p',
      text: '[Klue](' +
        KLUE +
        ') calls itself “The AI platform for Competitive Intelligence & Win-Loss”. Its Compete Agent collects and shares intel, PMMs create and update battlecards in it, and Ask Klue answers sellers’ questions. Klue cites 250,000+ users. [Crayon](' +
        CRAYON +
        ') says it monitors competitors and alerts teams to relevant intel, and puts battlecards in Salesforce, Slack and Highspot. [Kompyte](' +
        KOMPYTE +
        '), part of Semrush, tracks competitors’ websites, reviews, content, social posts, ads and job postings, with battlecard templates for sales.',
    },
    {
      kind: 'p',
      text: 'None of the three lists a price. [Klue’s pricing page](' +
        KLUE_PRICING +
        ') offers a demo, [Crayon’s](' +
        CRAYON_PRICING +
        ') asks for an estimate and [Kompyte’s plans page](' +
        KOMPYTE_PLANS +
        ') names Essentials, Professional and Unlimited with no prices, as of 11 November 2026.',
    },
    { kind: 'h3', id: 'interviews', text: 'Win-loss interviews' },
    {
      kind: 'p',
      text: '[Clozd](' +
        CLOZD +
        ') interviews buyers after a decision. In its live interviews a Clozd interviewer runs a 30-minute conversation with the buyer, and its Flex option runs AI-assisted interviews. Klue runs win-loss beside CI, with an AI Interviewer and human expert interviews. Interviews explain why a buyer chose, in the buyer’s own words.',
    },
    { kind: 'h3', id: 'search', text: 'Search for reps and AI agents' },
    {
      kind: 'p',
      text: 'Most sales teams use similar data, from contact databases and intent tools to Exa’s search of the public web. [Exa](' +
        EXA +
        ') calls itself “The world’s data for AI agents” and says it searches “the largest index of public web and private information”. [Exa Connect](' +
        EXA_CONNECT +
        ') links agents to data providers such as Crunchbase, ZoomInfo and Similarweb. Exa’s pages don’t describe signing up to the companies it covers or keeping what those companies send their customers.',
    },
    { kind: 'h3', id: 'by-hand', text: 'Signing up yourself' },
    {
      kind: 'p',
      text: 'Many PMMs start a competitor’s trial, forward its emails to a shared inbox and screenshot each screen. That shows exactly what a new customer sees, once, on the day it was done.',
    },

    { kind: 'h2', id: 'what-launch-pages-miss', text: 'What a launch page leaves out' },
    {
      kind: 'p',
      text: 'A launch announcement is the competitor’s claim. The product reaches a new customer as a sequence, starting with the sign-up form, the welcome email and the onboarding emails. Then come the [trial limit](/glossary/trial-limit), the [upgrade prompt](/glossary/upgrade-prompt), the offer before the trial ends and the [save offer](/glossary/save-offer) in the [cancel flow](/glossary/cancel-flow). That sequence shows whether a launch is in every plan or behind an upgrade, and what the competitor expects to sell. All of it sits in [the web behind the login](/blog/the-web-behind-the-login), where search engines don’t reach.',
    },
    { kind: 'h3', id: 'email-sms', text: 'Email and SMS platforms' },
    {
      kind: 'p',
      text: 'Brackwell, an email and SMS platform, launches AI-written flows, and its launch page shows them on every plan. A new trial’s [welcome series](/glossary/welcome-series) never mentions them, and the flow editor puts them behind an upgrade prompt on day 2. Your positioning can now say what a buyer on the starter plan gets, with the screenshot behind it.',
    },
    { kind: 'h3', id: 'help-desk', text: 'Help desks and AI support' },
    {
      kind: 'p',
      text: 'Quenby, a help desk, announces an AI agent “for every team”. A new trial gets 50 AI resolutions and then a prompt to buy more, and the day 3 email leads with ticket routing. Quenby’s onboarding still sells routing first, which tells your battlecard where its buyers start.',
    },
    { kind: 'h3', id: 'payments', text: 'Checkout and payments' },
    {
      kind: 'p',
      text: 'Harwick, a payments company, launches one-click checkout. Its test account opens at once, switching the feature on needs a sales call, and a rep emails on day 1 with a discount for a yearly volume commitment. That email is the only place the discount appears.',
    },
    { kind: 'h3', id: 'identity', text: 'Identity and onboarding' },
    {
      kind: 'p',
      text: 'Ostrand, an identity verification company, launches a cheaper tier for start-ups. The pricing page shows it with no minimum, and the signed-in billing screen shows a monthly minimum before the first check. A rep who has seen that screen answers the price objection with it.',
    },
    {
      kind: 'p',
      text: 'Every company, claim and figure in those 4 examples is invented. In each, the useful fact is the gap between what the competitor says and what it sends.',
    },

    { kind: 'h2', id: 'positioning-analysis', text: 'Competitor positioning analysis' },
    {
      kind: 'p',
      text: 'A competitor positioning analysis compares how each competitor describes itself with how its product treats a new customer. Positioning work built from homepages and launch posts covers the first half. Add the second half, and each gap becomes a line for your messaging or a question for your reps.',
    },
    {
      kind: 'table',
      caption: 'A competitor positioning analysis template: 1 row per competitor and launch, for each buyer profile',
      cols: ['Column', 'What to record', 'Where it comes from'],
      rows: [
        ['The claim', 'Headline and the 3 claims under it', 'Launch page, dated screenshot'],
        ['First email', 'Subject, and the first thing it asks for', 'Welcome email, as it arrived'],
        ['Onboarding order', 'Which features the emails introduce, by day', 'Every email, days 0 to 14'],
        ['Free plan', 'What it includes, where it stops', 'Screens inside the trial'],
        ['Upgrade prompt', 'The day, the screen, what paying adds', 'Screenshot on the day'],
        ['Signed-in price', 'The price inside the product', 'Billing screen beside the pricing page'],
        ['Offers', 'Discount before the end, offer at cancel', 'Emails and the cancel flow'],
        ['What changed', 'Each item that moved, dated', 'Last month’s row'],
      ],
    },
    {
      kind: 'art',
      caption: 'The template filled for 3 invented competitors in 1 launch week, as a new trial user. Brackwell’s launch page and its trial disagree.',
      art: {
        kind: 'report',
        title: 'Say and send, week of 2 November',
        period: 'New trial user, US · 3 invented competitors',
        cols: ['Competitor', 'Launch page says', 'First emails lead with', 'Free plan stops at', 'Offer seen'],
        rows: [
          { name: 'brackwell.example', cells: ['AI flows on every plan', 'Importing contacts', 'AI flows locked, day 2', '20% off, day 12'], tone: 'fail' },
          { name: 'quenby.example', cells: ['AI agent for every team', 'Ticket routing', '50 AI resolutions', 'None in 14 days'], tone: 'info' },
          { name: 'harwick.example', cells: ['One-click checkout', 'Test payments', 'A sales call to switch on', 'Yearly discount, day 1'], tone: 'info' },
        ],
        notes: ['Each cell links to its screenshot or email.', 'The companies, claims and offers are invented.'],
      },
    },
    {
      kind: 'list',
      items: [
        '**A claim the trial doesn’t back:** the launch page says every plan, and the editor asks for an upgrade. That is a positioning opening, and a question a rep can ask the buyer.',
        '**A feature the emails lead with and the launch page skips:** the competitor’s own view of what makes a trial turn into a sale.',
        '**An offer sent only to trial users:** the price a buyer will quote back to your rep, missing from the pricing page.',
        '**A change since last month:** a limit moved, a prompt brought forward or an email added, each one dated.',
      ],
    },
    {
      kind: 'p',
      text: 'A competitor analysis positioning map built from this grid places each competitor by what its first emails push and what its free plan holds back. It can look quite different from the map its homepage suggests, and it is the version a buyer in a trial meets.',
    },

    { kind: 'h2', id: 'launch-tracking', text: 'Competitor launch tracking, launch by launch' },
    {
      kind: 'p',
      text: 'A durable programme keeps an account open at each competitor before a launch and saves the public side on the day. It then starts a fresh account after the launch, so the two can be compared. It can start this week.',
    },
    { kind: 'h3', id: 'choose', text: '1. Choose the competitors and the buyer profile' },
    {
      kind: 'p',
      text: 'List the 3 to 10 competitors your reps meet most. Pick the buyer profile each competitor most wants to win, such as an ecommerce brand with 20,000 contacts for an email platform, or a 50-seat support team for a help desk. Read each competitor’s terms before you sign up. [Salesforce’s Main Services Agreement](' +
        SALESFORCE_MSA +
        '), last updated on 15 October 2026, also governs its free trials. It says its services may not be accessed for “benchmarking or competitive purposes”, and it bars direct competitors without written consent. Leave out a competitor whose terms say this. The guide [is it legal to mystery shop competitors](/blog/is-it-legal-to-mystery-shop-competitors) sets out what else decides it, and none of this is legal advice.',
    },
    { kind: 'h3', id: 'baseline', text: '2. Keep a baseline account at each competitor' },
    {
      kind: 'p',
      text: 'Start a trial or free plan at each competitor before you expect a launch, with its own inbox, and keep it open. Log what the plan includes and every email it receives. A pass is a dated row per competitor showing its plan, its limits and its emails so far.',
    },
    { kind: 'h3', id: 'launch-day', text: '3. On launch day, save the public side' },
    {
      kind: 'p',
      text: 'Screenshot the launch post, the pricing page and the release notes, each with its date. A page change alert such as Visualping can flag the day the pricing page moves. Write down the claim in the competitor’s own words, and the proof it gives.',
    },
    { kind: 'h3', id: 'fresh-account', text: '4. Start a fresh account after the launch' },
    {
      kind: 'p',
      text: 'Sign up again as the same buyer profile within a day of the launch, and follow the trial to its last day. Compare days 0 to 14 with the baseline. Note which emails arrive and when, and what each asks the new customer to do first. Then note where the free plan stops, when the upgrade prompt appears and what offer comes before the end. If a rep gets in touch, note when and what they offer.',
    },
    { kind: 'h3', id: 'headers', text: '5. Keep every email with its full header' },
    {
      kind: 'p',
      text: 'Save each email as it arrived, with its full header, which shows the domain and the service that sent it and the time it arrived. Log each one with its trial day, so 2 competitors’ sequences line up side by side.',
    },
    { kind: 'h3', id: 'write-up', text: '6. Turn the gaps into positioning, battlecards and a launch brief' },
    {
      kind: 'p',
      text: 'Write 1 page per launch: the claim, what a new customer gets, the gaps and the line your reps use, with every line linked to its screenshot or email. Move the facts into the battlecard the same week, and add any offer a competitor sent its trial users to your win-loss notes. [Competitor monitoring](/blog/competitor-monitoring) covers how to keep the same history between launches.',
    },
    { kind: 'h3', id: 'cost', text: '7. Work out the cost by hand' },
    {
      kind: 'p',
      text: 'Use your own numbers: competitors × buyer profiles × minutes a week ÷ 60 gives hours a week, multiplied by your team’s cost an hour and by 52. At 60 minutes a week per competitor and profile, 20 competitors and 2 profiles take 40 hours a week, a full-time product marketer. The 60 minutes cover the public pages, a share of each fresh sign-up, the inbox log and the write-up.',
    },
    {
      kind: 'art',
      caption: 'The sum for the largest programme, with example figures. Replace each line with your own.',
      art: {
        kind: 'price',
        title: 'Launch tracking by hand, example figures',
        rows: [
          { label: 'Competitors tracked', value: '20' },
          { label: 'Buyer profiles for each', value: '2', note: 'A start-up and a mid-market team' },
          { label: 'Minutes a week per profile', value: '60' },
          { label: 'Hours a week', value: '40', note: '20 × 2 × 60 ÷ 60' },
          { label: 'Your team’s cost an hour', value: '$75' },
        ],
        total: { label: 'Cost a year', value: '$156,000', note: '40 hours × $75 × 52 weeks' },
      },
    },
    {
      kind: 'p',
      text: 'The same sum gives $78,000 a year for 10 competitors and 2 profiles, and $19,500 for 5 competitors and 1 profile. By hand, the method holds for 3 to 5 competitors. Past that it needs an inbox per competitor, kept open for months, every original saved and a fresh sign-up after every launch.',
    },

    { kind: 'h2', id: 'win-loss', text: 'Product marketing win loss: add what each buyer was shown' },
    {
      kind: 'p',
      text: 'Win-loss interviews tell you why a buyer says they chose. The competitor’s trial shows what that buyer was shown in the same weeks: the onboarding emails, the limit they hit and the discount on day 12. Put a dated column of what each competitor sent a new trial user that month beside the interview notes, and a loss reason such as “cheaper” arrives with the offer behind it.',
    },

    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For product marketing, it keeps each competitor’s onboarding emails, trial limits, upgrade prompts, signed-in prices and offers by trial day, as the [trial teardown](/recipes/trial-teardown) and [competitor tracking](/recipes/competitor-tracking) recipes show. A fresh run follows when a competitor changes its trial. Exa and search tools like it give reps and AI agents the public web in seconds. Obsession gives them what a competitor sends the people who sign up, as the [comparison with Exa](/compare/obsession-vs-exa) sets out. Each new email, limit and offer lands dated the day it arrives, so you can see it in your positioning, your battlecards and your win-loss against each competitor.',
    },
    {
      kind: 'cta',
      text: 'Every competitor’s trial emails, limits, upgrade prompts and offers, each dated with the email or screenshot. A fresh run follows whenever a competitor changes its trial.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'options', text: 'Competitive intelligence options for product marketing', compare: true },
    {
      kind: 'p',
      text: 'Each option reads a different part of the job. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026. [Obsession vs Klue](/compare/obsession-vs-klue) shows how a CI platform and Obsession work together, and [Klue alternatives](/alternatives/klue) and [Crayon alternatives](/alternatives/crayon) cover the CI platforms in more depth.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Competitive intelligence options for product marketing, by where their facts come from. From each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A competitor’s launch shows up first in your lost deals', 'Markets that rarely change'],
        [
          'By hand: a PMM, a shared inbox and a trial at each competitor',
          'Sees what a new customer sees, in your buyer’s profile',
          'Free, plus about 60 minutes a week per competitor and profile',
          'Hours grow with each competitor, and history starts the day you sign up',
          '3 to 5 competitors',
        ],
        [
          'Page change alerts: [Visualping](' + VISUALPING + ')',
          'An alert when a page you choose changes',
          'Free for 5 pages\nPaid plans from $14 a month',
          'Its pages describe page changes, and don’t describe keeping a competitor’s emails',
          'Launch, pricing and release note pages',
        ],
        [
          'CI platforms: [Klue](' + KLUE + '), [Crayon](' + CRAYON + '), [Kompyte](' + KOMPYTE + ')',
          'Collect and share competitor intel, with battlecards where reps work',
          'Not listed\nDemo, estimate or plan breakdown',
          'Their pages don’t describe signing up to a competitor’s trial',
          'Running a CI programme and battlecards',
        ],
        [
          'Win-loss interviews: [Clozd](' + CLOZD + '), Klue',
          'Buyers’ reasons, from interviews after the decision',
          'Not listed on their home pages',
          'What buyers remember and say, after the deal',
          'Why deals were won and lost',
        ],
        [
          'Search for AI agents: [Exa](' + EXA + ')',
          'Searches the public web and partners’ data for AI agents',
          'From $4 per 1,000 Lite searches\n$10 of free credit a month',
          'Its pages don’t describe keeping what companies send their customers',
          'Public pages and company data, in an agent',
        ],
        [
          'Obsession (ours): [Trial teardown](/recipes/trial-teardown), [Competitor tracking](/recipes/competitor-tracking)',
          'Keeps what each competitor you name shows new customers: trial emails, limits, upgrade prompts, signed-in prices, offers',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'A competitor not yet covered starts its history the day it is added\nEvery journey stops short of paying',
          'What a new customer gets from each competitor, launch by launch, for as long as you follow it',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For what each competitor sends and shows a new customer, use Obsession, which keeps it dated for every competitor you name, launch by launch. Klue, Crayon and Kompyte run the CI programme and put battlecards where reps work, and Klue and Clozd interview buyers about wins and losses. Visualping alerts you when a public launch or pricing page changes, and Exa gives AI agents the public web and partners’ company data, with its prices on [its pricing page](' +
        EXA_PRICING +
        ').',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**Read each competitor’s terms first.** Some, such as Salesforce’s, forbid using a trial for competitive purposes, and those competitors stay out of the method. This is general information, not legal advice.',
        '**1 buyer profile sees 1 buyer’s view.** A start-up and a 500-seat team see different limits and offers, so record the profile with every entry.',
        '**Interviews still explain why.** What a competitor sent shows what the buyer saw, and only the buyer can say what mattered.',
      ],
    },
    {
      kind: 'p',
      text: 'Start with the 3 competitors your reps meet most, and read their next launch through a fresh trial the week it ships. The [sample data](/sample-output) from a real UK store in September 2026 shows the format each fact comes in: every email with the time it arrived, and every screenshot.',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is competitive intelligence for product marketing?',
          a: 'It is tracking what competitors claim, launch, charge and send, to set positioning, plan launches and keep battlecards and win-loss current. Its sources are what competitors publish, what buyers and reps say, and what a new customer sees after signing up.',
          link: { label: 'Competitive intelligence, defined', to: '/glossary/competitive-intelligence' },
        },
        {
          q: 'How do product marketers track competitor launches?',
          a: 'Keep an account open at each competitor before the launch, and save the launch post, pricing page and release notes on the day. Then start a fresh trial as the same buyer profile and compare its first 14 days with the old account. Log every email with its trial day, and screenshot every limit and prompt.',
        },
        {
          q: 'What is a competitor positioning analysis?',
          a: 'It sets how each competitor describes itself beside how its product treats a new customer. That covers the launch claim, the first emails, the free plan, the upgrade prompt, the signed-in price and the offers. The gaps between the 2 halves are where your positioning lines and your reps’ questions come from.',
        },
        {
          q: 'How does product marketing use win loss analysis?',
          a: 'Product marketing uses win-loss to test positioning and fix battlecards, from why buyers say they chose. A dated list of what each competitor sent a trial user that month shows the offer or limit behind a loss reason.',
          link: { label: 'Win loss analysis', to: '/blog/win-loss-analysis' },
        },
        {
          q: 'Is it legal to sign up for a competitor’s free trial?',
          a: 'It depends on the competitor’s terms and the law where you are, and this is general information, not legal advice. Some terms forbid using a trial for competitive purposes: Salesforce’s say its services may not be accessed for benchmarking or competitive purposes. Never enter details that aren’t true.',
          link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
        },
        {
          q: 'How much time should product marketing spend on competitive intelligence?',
          a: 'Work it out from the job: competitors × buyer profiles × minutes a week. At 60 minutes a week per competitor and profile, 20 competitors and 2 profiles take 40 hours a week, a full-time role, and 5 competitors and 1 profile take 5 hours.',
        },
        {
          q: 'What is the difference between competitive intelligence and competitor monitoring?',
          a: 'Competitor monitoring is the collecting: a dated history of competitors’ pages, emails, prices and offers. Competitive intelligence is the whole practice, which turns that history into positioning, battlecards and launch plans.',
          link: { label: 'Competitor monitoring', to: '/blog/competitor-monitoring' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Facts checked 11 November 2026',
      text: 'General information, not legal advice. Every tool is described from its provider’s own pages as they stood on 11 November 2026, and we tested none of them. Brackwell, Quenby, Harwick and Ostrand are invented companies. Every claim, email, limit, offer and figure in the illustrations, the examples and the cost sum is an example.',
    },
  ],

  sources: [
    { title: 'Competitive intelligence trends report 2022', publisher: 'Product Marketing Alliance', url: PMA, date: '2022-11-02' },
    { title: 'Website change detection, monitoring and alerts', publisher: 'Visualping', url: VISUALPING },
    { title: 'Pricing', publisher: 'Visualping', url: VISUALPING_PRICING },
    { title: 'The AI platform for competitive intelligence and win-loss', publisher: 'Klue', url: KLUE },
    { title: 'Crayon home page', publisher: 'Crayon', url: CRAYON },
    { title: 'Win more deals with competitive intelligence', publisher: 'Kompyte by Semrush', url: KOMPYTE },
    { title: 'Pricing', publisher: 'Klue', url: KLUE_PRICING },
    { title: 'Pricing', publisher: 'Crayon', url: CRAYON_PRICING },
    { title: 'Plans', publisher: 'Kompyte by Semrush', url: KOMPYTE_PLANS },
    { title: 'Clozd home page', publisher: 'Clozd', url: CLOZD },
    { title: 'Exa home page', publisher: 'Exa', url: EXA },
    { title: 'Exa Connect', publisher: 'Exa', url: EXA_CONNECT },
    { title: 'Main Services Agreement', publisher: 'Salesforce', url: SALESFORCE_MSA, date: '2026-10-15' },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],

  related: [
    'battlecard-template',
    'win-loss-analysis',
    'competitor-monitoring',
    'the-web-behind-the-login',
    'recipe:trial-teardown',
    'recipe:competitor-tracking',
    '/use-cases/trial-checks-for-software-companies',
  ],
}

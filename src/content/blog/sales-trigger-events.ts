import type { BlogPost } from './types'

/* Revenue team guides, spec 11 (_research/seo/revenue-teams-11nov/WRITER_BRIEF.md and PLAN.md, 11 Nov 2026). It owns
   "sales trigger events examples" and sales trigger events, trigger events in sales, abm triggers and account based
   marketing signals (docs/SEARCH.md §2; demand in demand.json: autocomplete returned nothing for the long form, but page 1
   is six vendor listicles, UserGems, Cognism, SalesHive, HubSpot, Leadfeeder and Autobound, all on funding, hires and
   mergers). Reader: demand gen and ABM teams at B2B software vendors whose product touches what their target accounts'
   customers see (persona key demand_gen: pipeline sourced, MQLs to SQLs, cost per opportunity). It serves /sales and
   recipe:account-watch; "churn signals" stays with /recipes/account-watch and "buying signals examples" with its guide.
   The case: the familiar triggers credited from each provider's own pages, then 7 triggers that show only in what an
   account sends its own customers (a new offer, a price change, a new onboarding email or welcome series, emails from a
   different platform, texts that start or stop, a step that breaks, support answers that change), each with its proof,
   the vendors it matters to and its play; a copyable play template; worked examples by kind of vendor; the method by
   hand with the cost ladder; and a fair comparison with the column no other tool fills.
   Read at the source on 11 Nov 2026: Crunchbase's home page (39B live private market signals; funding round,
   acquisition prediction, product launch, leadership hire; funding predictions); UserGems' home page (30+ native
   signals: job changes, contact-level intent, website visits, M&A, hiring); Bombora's co-op page (thousands of B2B sites,
   25,300+ intent topics); BuiltWith's home page (128,309+ technologies; "Identify companies adopting competitor tools in
   real time") and plans (Basic $295, Pro $495, Team $995 a month); Exa's home page (its two lines, quoted exactly), its
   GTM use case page ("Track buying signals in hiring, funding, and news"; Monitors on a schedule; only new results to a
   webhook; partners Crunchbase, ZoomInfo, Similarweb) and its pricing page (Search Lite $4, Monitors $2 per 1,000
   requests, $10 free credit a month); Gmail Help's "Trace an email with its full header"; RFC 6376 §3.5 (the d= tag).
   Left out: UserGems', Bombora's and Crunchbase's prices (none on their pages); Bombora's Company Surge product page
   (the address now redirects to the co-op page); LinkedIn Sales Navigator's alerts (its help article 404s, and only
   third-party blogs describe them). Obsession is described in the words of /sales (the platform behind an account's
   emails, support answers and how fast), the account watch, prospect intelligence and price watch recipes, the CRO
   agencies use case (codes rejected at checkout) and site.ts. Harbourline, Quillmere, Tolland and Brackwell are
   invented, at .example addresses, as is every offer, price and time in the pictures. No dashes. */

const CRUNCHBASE = 'https://www.crunchbase.com/'
const USERGEMS = 'https://www.usergems.com/'
const BOMBORA = 'https://bombora.com/co-op/'
const BUILTWITH = 'https://builtwith.com/'
const BUILTWITH_PLANS = 'https://builtwith.com/plans'
const EXA = 'https://exa.ai/'
const EXA_GTM = 'https://exa.ai/use-cases/gtm'
const EXA_PRICING = 'https://exa.ai/pricing'
const GMAIL_HEADERS = 'https://support.google.com/mail/answer/29436'
const RFC6376 = 'https://www.rfc-editor.org/rfc/rfc6376'

export const post: BlogPost = {
  slug: 'sales-trigger-events',
  title: 'Sales trigger events examples for ABM and demand gen teams: when a target account changes what it sends its customers',
  dek: 'Most ABM teams already track funding rounds, new leaders and hiring pushes. The triggers they miss show only in what a target account sends its customers, such as a new offer, a price change or emails from a new email platform. Each one comes with the email or screenshot to keep and the play to run.',
  metaTitle: 'Sales trigger events examples for ABM and demand gen teams',
  description:
    'Sales trigger events examples for ABM teams: funding and new leaders, plus a target account’s new offers, prices and emails, each with its proof and play.',
  answer:
    'Sales trigger events examples include funding rounds, new leaders and hiring pushes, and changes in what a target account sends its own customers, such as a new offer or a price change. Each one gives ABM and demand gen teams a dated reason to move the account up a tier, change its ads and brief its sales rep. Obsession keeps the emails, prices and offers each target account shows only to its customers, dated with the screenshot, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'sales trigger events examples',
  keywords: [
    'sales trigger events',
    'trigger events in sales',
    'abm triggers',
    'account based marketing signals',
    'trigger events for target accounts',
    'sales trigger event tools',
  ],
  category: 'Watch other companies',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 16,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'harbourline.example · a target account',
      who: 'A new subscriber in the US, signed up on 21 September',
      rows: [
        { time: 'Mon 2 Nov', text: 'Welcome email: 10% off a first order', detail: 'The same offer since September', tone: 'info' },
        { time: 'Tue 3 Nov', text: 'New sign-ups get free delivery over $40', detail: 'A new offer for new subscribers', tone: 'ok' },
        { time: 'Wed 4 Nov', text: 'Emails now sent from a new platform', detail: 'Sender checked', tone: 'info' },
        { time: 'Fri 6 Nov', text: 'Starter set cut from $24 to $19', detail: 'Screenshots before and after', tone: 'info' },
        { time: 'Mon 9 Nov', text: 'Cart reminder: none in 48 hours', detail: 'In October it came within 1 hour', tone: 'fail' },
        { time: 'Tue 10 Nov', text: 'Support answered in 31 hours', detail: 'Its help page promises 24', tone: 'late' },
      ],
      foot: 'Invented company. Each row is a trigger event, dated, with its email or screenshot.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Sales trigger events examples include funding rounds, new leaders and hiring pushes, and changes in what a target account sends its own customers, such as a new offer or a price change. Most account based marketing (ABM) teams already track the first group, which shows on the public web. The second group, which also covers a new onboarding email or emails from a new email platform, shows only to someone signed up as the account’s customer. It matters most to vendors whose product touches those customers: email and SMS, loyalty and reviews, checkout and payments, help desk and AI support, messaging, and identity and onboarding.',
    },
    {
      kind: 'p',
      text: 'A trigger is worth the pipeline it opens. Take a play that turns triggers into 10 extra opportunities a quarter (example inputs). At a $100,000 average deal it adds $1m of pipeline, at $25,000 it adds $250,000, and at $5,000 it adds $50,000. Each trigger marks work that has already started at the account, so the chance to help shrinks with every week it waits in a queue.',
    },

    { kind: 'h2', id: 'what-they-are', text: 'What sales trigger events are' },
    {
      kind: 'p',
      text: 'A sales trigger event is a dated change at a company that makes a sales conversation more likely to land now than last month. ABM teams usually run their target list in three tiers: 1:1 for a few named accounts, 1:few for clusters that share a need, and 1:many for the rest. Triggers decide which accounts move up a tier this week, which see new ads, which get a sequence from a sales development rep (SDR) and which go straight to the account executive. Demand gen teams use the same events to time campaigns and to show which plays source pipeline.',
    },
    {
      kind: 'p',
      text: 'A trigger records something the account did: it raised money, hired a leader, changed a price. Intent data records research, such as people at the account reading about a topic across B2B websites. Both are buying signals, and the guide to [buying signals examples](/blog/buying-signals-examples) covers how an SDR team reads them account by account.',
    },

    { kind: 'h2', id: 'familiar', text: 'Trigger events in sales that most teams already track' },
    {
      kind: 'p',
      text: 'Most ABM teams work from similar data, from contact databases and intent tools to Exa’s search of the public web. These are the trigger events in sales that it covers well.',
    },
    {
      kind: 'table',
      caption: 'Familiar sales trigger events, what each suggests and where teams find it',
      cols: ['Trigger event', 'What it suggests', 'Where teams find it'],
      rows: [
        ['Funding round', 'New budget and a growth plan', 'Funding databases, press releases'],
        ['New leader in your buyer’s seat', 'A review of the tools they inherit', 'Job change alerts, announcements'],
        ['A past champion changes job', 'A warm way into a new account', 'Job change tracking'],
        ['Hiring push', 'A team growing around your problem', 'Job posts'],
        ['Merger or acquisition', 'Systems about to be merged or replaced', 'News and filings'],
        ['New technology on the website', 'A project under way, or a competitor arriving', 'Technology lookup tools'],
        ['Research on your topic', 'People reading about the problem', 'Intent data'],
        ['Visits to your website', 'Someone at the account looking at you', 'Website visitor tools'],
      ],
    },
    {
      kind: 'p',
      text: 'Each of these has strong tools behind it, as of 11 November 2026. [Crunchbase](' +
        CRUNCHBASE +
        ') says it monitors 39B live private market signals. They include funding rounds, leadership hires, product launches and acquisition predictions, and it forecasts which companies are likely to raise. [UserGems](' +
        USERGEMS +
        ') lists 30+ native signals, among them job changes, website visits, M&A and hiring. [Bombora’s co-op](' +
        BOMBORA +
        ') gathers research activity from thousands of B2B sites and tracks over 25,300 intent topics. [BuiltWith](' +
        BUILTWITH +
        ') covers 128,309+ internet technologies and builds lists of companies adopting a given tool, including competitors’ tools.',
    },
    {
      kind: 'p',
      text: '[Exa’s home page](' +
        EXA +
        ') calls Exa “The world’s data for AI agents” and says it searches “the largest index of public web and private information”. [Its page for go-to-market teams](' +
        EXA_GTM +
        ') describes tracking buying signals in hiring, funding and news. Exa Monitors run a team’s searches on a schedule and send only new results to a webhook, an address in the team’s own tools that receives each result as it lands. The sources it names are company sites, job postings, funding news, professional profiles and partners such as Crunchbase, ZoomInfo and Similarweb. For triggers a company publishes, that covers a whole target list.',
    },

    {
      kind: 'h2',
      id: 'customer-facing',
      text: 'Sales trigger events examples in what an account sends its customers',
    },
    {
      kind: 'p',
      text: 'Every event so far is something a company announces or leaves on a public page. The events that tell a vendor most about its own fit happen inside the account’s customer journeys. They include the emails a new subscriber receives, the price a signed-in customer pays and the answer support gives. They sit behind a [login wall](/glossary/login-wall), any step a site puts between a visitor and what it shows customers, such as a sign-up, a login or a checkout. That part of the web is [the web behind the login](/blog/the-web-behind-the-login), and search engines don’t reach it.',
    },
    {
      kind: 'p',
      text: 'A trigger of this kind counts only with its proof: the email itself with the time it arrived, or a dated screenshot of the page before and after. The 7 most useful follow, each with the vendors it matters to and the play to run.',
    },
    {
      kind: 'art',
      caption: 'One week of triggers for an email and SMS platform’s Tier 1 accounts. Each cell links to its email or screenshot.',
      art: {
        kind: 'report',
        title: 'Tier 1 triggers, week of 9 November',
        period: 'An email and SMS platform · 4 invented accounts',
        cols: ['Account', 'Trigger', 'Proof', 'Play'],
        rows: [
          { name: 'harbourline.example', cells: ['Emails from a new platform', 'Headers, 4 Nov', 'Win-back date logged'], tone: 'info' },
          { name: 'quillmere.example', cells: ['Cart reminder stopped', 'None in 48 hours', 'Sales writes today'], tone: 'fail' },
          { name: 'tolland.example', cells: ['Welcome series, 1 to 5 emails', 'Each email by day', 'Lifecycle lead invited'], tone: 'ok' },
          { name: 'brackwell.example', cells: ['First texts after opt-in', 'Text at 18:02, 6 Nov', 'SMS sequence starts'], tone: 'ok' },
        ],
        notes: ['Every account, offer and time is an example.', 'A missing email counts once its 48 hour window closes.'],
      },
    },

    { kind: 'h3', id: 'new-offer', text: '1. A new offer to new customers' },
    {
      kind: 'p',
      text: 'The account changes what it offers a new subscriber or customer. For example, 10% off a first order becomes free delivery over $40, a first loyalty reward appears in the welcome email, or a pay-later option shows up at checkout. Keep both versions of the email or page, each dated. It matters to loyalty and reviews vendors, email and SMS platforms, and checkout and payments vendors. A new offer means the account’s marketing team is testing how it wins customers this quarter.',
    },
    {
      kind: 'p',
      text: '**The play:** add the account to a 1:few campaign on first-order offers for 30 days and give the SDR both emails. The first line reads as a subscriber would see it: “I joined your list in September and again this week, and the welcome offer changed from 10% off to free delivery.”',
    },

    { kind: 'h3', id: 'price-change', text: '2. A price change' },
    {
      kind: 'p',
      text: 'A public price, a [signed-in price](/glossary/signed-in-price), a plan price or the point where free delivery starts moves up or down. At a software account it might be the Pro plan going from $49 to $59 a month, or a trial cut from 14 days to 7. Keep the screenshot before and after, with the date and the country. It matters to payments and checkout vendors, subscription billing and pricing tools, and loyalty vendors. A pricing decision has just been made, and the team behind it is now measuring what it does to conversion.',
    },
    {
      kind: 'p',
      text: '**The play:** send the account executive the before and after the same day. A billing vendor offers its notes on telling existing subscribers about a rise; a checkout vendor shows how it measures conversion either side of a price move.',
    },

    { kind: 'h3', id: 'new-onboarding', text: '3. A new onboarding email or welcome series' },
    {
      kind: 'p',
      text: 'The emails a new customer gets in the first days change. A [welcome series](/glossary/welcome-series) grows from 1 email to 5, a trial’s day 3 email now pushes a demo, or a [triggered flow](/glossary/triggered-flow) appears after a browse. Map the series by day since sign-up, each email kept as it arrived, and compare it with the last map. It matters to email and SMS platforms, onboarding and product adoption tools, and identity and onboarding vendors. A rebuilt series often follows a new lifecycle lead, a new agency or a new quarter’s plan.',
    },
    {
      kind: 'p',
      text: '**The play:** invite the lifecycle or growth lead to content on first-week benchmarks, and give the SDR the old and new series side by side. A rebuild in progress is the week to talk about what comes next in it, such as the cart reminder or the first texts.',
    },

    { kind: 'h3', id: 'platform-change', text: '4. Emails from a different platform' },
    {
      kind: 'p',
      text: 'Every email carries headers that name the systems that handled it. The week an account’s emails start coming from a different email platform, often a competitor of yours, the headers show it. Keep the last email from the old platform and the first from the new one, each with its full header. It matters to email and SMS platforms, and to the vendors that connect to them: reviews and loyalty apps, deliverability and template tools, and the agencies that run the account’s emails.',
    },
    {
      kind: 'p',
      text: '**The play:** new emails from a new platform mean flows, templates and integrations are being rebuilt on it. Vendors that connect to the new email platform run ads and an SDR sequence about connecting in a day while that work is open. The platform the account left logs the date and sets a win-back review for when the new setup has run through a full season.',
    },

    { kind: 'h3', id: 'texts', text: '5. Texts that start or stop' },
    {
      kind: 'p',
      text: 'The first text arrives after a phone opt-in, or texts that came every week go quiet. Keep the opt-in screenshot and each text with its sender and time. It matters to SMS and messaging platforms and the compliance tools around them: a new texting programme is a buying decision just made, and texts that stop can mean a broken setup.',
    },
    {
      kind: 'p',
      text: '**The play:** for a launch, run content on what the first 30 days of texts should hold. For a stop, the account executive writes with the date of the last text and asks whether the pause was planned.',
    },

    { kind: 'h3', id: 'broken-step', text: '6. A step that breaks' },
    {
      kind: 'p',
      text: 'A step that worked last month fails: the [cart reminder](/glossary/abandoned-cart-email) stops after a site change, the welcome email no longer arrives, a code from the account’s own email is refused at checkout. Count it as broken only once the window you set has closed, such as 48 hours for a cart reminder. Keep what proves it: the basket, the empty inbox, the refused code on screen. It matters to email and SMS platforms, checkout and payments vendors, and the agencies and QA teams that fix journeys. In the weeks before Black Friday, on 27 November in 2026, every day it lasts costs the account orders the step used to win back.',
    },
    {
      kind: 'p',
      text: '**The play:** skip the ad cycle. The account executive writes the same day with the proof and one line on the fix, offered as help. The note reads as a customer would put it: “I left a basket on Monday and no reminder came, though one arrived within an hour in October.” The guide to [cold email first line examples](/blog/cold-email-first-line-examples) has more lines built this way.',
    },

    { kind: 'h3', id: 'support', text: '7. Support answers that change' },
    {
      kind: 'p',
      text: 'Support starts taking longer, a chatbot replaces the email form, or an answer contradicts the help page. Ask the same questions on a schedule and keep each answer word for word with its time. It matters to help desk and AI support vendors: an answer in 31 hours from a team whose help page promises 24 is a gap the buyer can check for themselves.',
    },
    {
      kind: 'p',
      text: '**The play:** an SDR sequence to the head of support with the transcript and its times, and a case study on response times ahead of the account’s busiest season.',
    },

    { kind: 'h2', id: 'play-template', text: 'ABM triggers: a play template to copy' },
    {
      kind: 'p',
      text: 'Copy the table into the sheet or CRM your team plans from, keep the rows your product answers, and give each an owner. The last column is the time sales agrees to act in.',
    },
    {
      kind: 'table',
      caption: 'ABM triggers in what an account sends its customers: the email or screenshot to keep, who acts and how fast',
      cols: ['Trigger', 'Proof to keep', 'Vendors it matters to', 'The play', 'Act within'],
      rows: [
        ['New offer to new customers', 'Old and new email, dated', 'Loyalty, email and SMS, checkout', '1:few ads, SDR with both emails', '1 week'],
        ['Price change', 'Screenshots before and after', 'Payments, billing, pricing, loyalty', 'Account executive note', '2 days'],
        ['New onboarding email', 'The series by day since sign-up', 'Email and SMS, onboarding, identity', 'Content to the lifecycle lead', '1 week'],
        ['Emails from a new platform', 'Last and first email, with headers', 'Email platforms and their partners', 'Integration ads, a win-back date', '1 week'],
        ['Texts start or stop', 'Opt-in and each text, timed', 'SMS, messaging, compliance', 'Launch content, or a call about the stop', '2 days'],
        ['A step that breaks', 'The window watched, what never came', 'Email and SMS, checkout, agencies', 'Account executive writes with the fix', 'Same day'],
        ['Support answers change', 'Transcripts with times', 'Help desk and AI support', 'SDR sequence to the head of support', '1 week'],
      ],
    },
    { kind: 'h3', id: 'worked-examples', text: 'Worked examples by type of vendor' },
    {
      kind: 'table',
      caption: 'One account based marketing signal and its play for each type of vendor. Every account is invented',
      cols: ['Type of vendor', 'Target account', 'What changed', 'The play that week'],
      rows: [
        ['Email and SMS platform', 'A $20M+ skincare brand', 'Emails from a new platform since 4 Nov', 'Win-back date logged for next season'],
        ['Loyalty and reviews', 'A US apparel store', 'Welcome offer now free delivery over $40', '1:few ads on first-order rewards'],
        ['Checkout and payments', 'A subscription coffee brand', 'First-order code refused on a subscription', 'Account executive writes the same day'],
        ['Help desk and AI support', 'A furniture retailer', 'Support answers in 31 hours, help page says 24', 'SDR sequence with the transcript'],
        ['Messaging', 'A meal kit company', 'First texts 2 days after the opt-in', 'Content on the first 30 days of texts'],
        ['Identity and onboarding', 'A fintech app', 'Sign-up grows from 4 steps to 7', 'Ads on drop-off between sign-up steps'],
      ],
    },

    { kind: 'h2', id: 'method', text: 'How to track trigger events for target accounts by hand' },
    {
      kind: 'p',
      text: 'A trigger programme needs a list, a baseline, a cadence and a play for each event. The steps work by hand for a short list, and each says what a pass looks like.',
    },
    { kind: 'h3', id: 'match', text: '1. Match the triggers to what you sell' },
    {
      kind: 'p',
      text: 'List the 3 to 5 triggers your product answers. An email platform cares about a new welcome series, emails from another email platform and a broken flow. A checkout vendor cares about price changes and refused codes, and a help desk about support answers. A pass is a one-page map from each trigger to the team at the account that owns it.',
    },
    { kind: 'h3', id: 'accounts', text: '2. Pick the accounts and the customer you sign up as' },
    {
      kind: 'p',
      text: 'Start with Tier 1, the 20 to 50 accounts most likely to buy this quarter. Give each its own inbox and phone number, and sign up the way any customer can: as a subscriber, a trial user or a shopper in the account’s main country. Read each site’s terms first, and never enter details that aren’t true. A pass is one live customer account per target, each started on a known date.',
    },
    { kind: 'h3', id: 'baseline', text: '3. Record a baseline' },
    {
      kind: 'p',
      text: 'Record what is there before anything changes: the welcome series by day, how long the cart reminder takes, the prices that matter to you and the platform behind the emails. To find the platform, open an email’s full header ([in Gmail](' +
        GMAIL_HEADERS +
        '): the More icon, then Show original). The [DKIM](/glossary/dkim) signature, which the sending domain adds to each email, has a d= tag that names the domain claiming responsibility for sending it, as [RFC 6376](' +
        RFC6376 +
        ') defines it. The Return-Path, the address bounces go back to, and the domains in the email’s links can name the platform too, even when the signature uses the account’s own domain. A pass is a dated baseline per account, with every email and screenshot saved.',
    },
    { kind: 'h3', id: 'cadence', text: '4. Check on a cadence and date every change' },
    {
      kind: 'p',
      text: 'Read each inbox as emails arrive, check prices and pages weekly, and walk the sign-up and the basket once a week for Tier 1. Log each change with the account, the trigger, the date seen and its proof. A missing email counts as a trigger only once the window you chose has closed.',
    },
    { kind: 'h3', id: 'route', text: '5. Route each trigger to its play' },
    {
      kind: 'p',
      text: 'Put each trigger where the people who act on it already work. That can be a field on the account in the CRM, the system where accounts and deals live. It can also be a rise in the account’s score, an ad audience or a task for the SDR with the proof attached. The guides to [CRM data enrichment fields](/blog/crm-data-enrichment-fields) and [custom signals in Clay](/blog/clay-custom-signals) cover field names, scores and routing rules.',
    },
    { kind: 'h3', id: 'measure', text: '6. Measure the pipeline each trigger sources' },
    {
      kind: 'p',
      text: 'Tag every opportunity with the trigger that opened it. After a quarter, compare triggers on pipeline sourced, the rate at which marketing qualified leads (MQLs) become sales qualified leads (SQLs), and cost per opportunity. Keep the triggers that source pipeline and drop the rest.',
    },
    { kind: 'h3', id: 'cost', text: '7. Work out the cost by hand' },
    {
      kind: 'p',
      text: 'Use your own numbers: accounts × minutes a week ÷ 60 gives hours a week, multiplied by your team’s cost an hour and by 52. At 10 minutes a week per account, a target list of 1,000 accounts takes about 167 hours a week, the work of 4 full-time people. The 10 minutes cover reading the inbox, checking prices and headers, and a share of the weekly walk.',
    },
    {
      kind: 'art',
      caption: 'The sum for the largest list, with example figures. Replace each line with your own.',
      art: {
        kind: 'price',
        title: 'Triggers tracked by hand, example figures',
        rows: [
          { label: 'Target accounts', value: '1,000' },
          { label: 'Minutes a week per account', value: '10', note: 'Inbox, prices, headers, the walk' },
          { label: 'Hours a week', value: '167', note: '1,000 × 10 ÷ 60' },
          { label: 'Your team’s cost an hour', value: '$60' },
        ],
        total: { label: 'Cost a year', value: '$520,000', note: '167 hours × $60 × 52 weeks' },
      },
    },
    {
      kind: 'p',
      text: 'The same sum gives $130,000 a year for 250 accounts and $26,000 for 50. By hand, the programme holds for a Tier 1 list of 20 to 50 accounts. Past that, it needs an inbox and a phone number per account, kept open for months, with every original email saved and every change dated.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For ABM and demand gen teams, [Prospect intelligence](/recipes/prospect-intelligence) and [Account watch](/recipes/account-watch) keep a customer account open at each target account and date each change in what it sends customers. That covers a new offer, a price, an email that stops, and the email platform behind each email and the week it changes. Each fact lands on the account in the CRM, in a table or at a webhook, for as long as you follow it. You can then see what each trigger does to pipeline sourced, MQL to SQL conversion and cost per opportunity. [Exa](' +
        EXA +
        ') gives agents the public web, funding and hiring triggers included, and Obsession gives them what each account sends the people who sign up; [the two work together](/compare/obsession-vs-exa).',
    },
    {
      kind: 'cta',
      text: 'What every target account sends its customers, from new offers and prices to the platform behind each email, dated with its screenshot and on the account’s record.',
      to: '/#join',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'tools', text: 'Sales trigger event tools compared', compare: true },
    {
      kind: 'p',
      text: 'Each option reads a different set of triggers, and they work side by side. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026. The [sales page](/sales) shows how the same facts fill account briefs and battlecards.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Sales trigger event tools, by where their triggers come from. From each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A change reaches you when the account mentions it', 'Accounts that rarely change'],
        [
          'By hand: an inbox and phone number per account',
          'Sees what a customer sees, with nothing in between',
          'Free, plus about 10 minutes a week per account',
          'Hours grow with every account, and history starts the day you begin',
          'A Tier 1 list of 20 to 50',
        ],
        [
          'Company signals: [Crunchbase](' + CRUNCHBASE + ')',
          'Funding rounds, leadership hires, product launches and funding forecasts',
          'Paid plans, with a free trial',
          'Its pages don’t describe what an account sends its customers',
          'Funding triggers and forecasts',
        ],
        [
          'Signal platforms: [UserGems](' + USERGEMS + ')',
          '30+ native signals, including job changes, website visits, M&A and hiring',
          'On request',
          'Its pages don’t describe what an account sends its customers',
          'Job changes and warm ways in',
        ],
        [
          'Intent data: [Bombora](' + BOMBORA + ')',
          'Research activity across 25,300+ topics from thousands of B2B sites',
          'On request',
          'Research on B2B sites; its pages don’t describe what an account sends its customers',
          'Accounts reading about your category',
        ],
        [
          'Technology lookup: [BuiltWith](' + BUILTWITH + ')',
          '128,309+ internet technologies, with lists of companies adopting a tool',
          '[From $295 a month](' + BUILTWITH_PLANS + ')',
          'Technology seen on public websites',
          'New tools on an account’s website',
        ],
        [
          'Public web search: [Exa](' + EXA_GTM + ') Search, Websets, Monitors',
          'Hiring, funding, news and leadership changes, searched on a schedule, new results to a webhook',
          '[Search from $4 per 1,000 requests](' + EXA_PRICING + ')\nMonitors $2 per 1,000 requests\n$10 free credit a month',
          'The public web and partners such as Crunchbase, ZoomInfo and Similarweb',
          'Public triggers across a whole target list',
        ],
        [
          'Obsession (ours): [Account watch](/recipes/account-watch), [Prospect intelligence](/recipes/prospect-intelligence), [Price watch](/recipes/price-watch)',
          'What each target account shows only to its customers, each dated: offers, prices, emails, texts, support answers, the email platform',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'An account not yet covered starts its history the day it is added\nSign-ups, baskets and checkouts stop short of paying',
          'Triggers in what an account sends its customers, for as long as you follow it',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For triggers in what an account sends its own customers, use Obsession. It keeps new offers, price changes, new onboarding emails, the email platform behind each email and steps that break, dated, for every target account you name. Exa finds public triggers across a whole list on a schedule, and Crunchbase covers funding rounds, leadership hires and funding forecasts. UserGems covers job changes among 30+ native signals, Bombora shows which accounts are researching your category, and BuiltWith shows the technology on their websites. Each answers a different question about the same account.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**A trigger is a reason to reach out, never a signed deal.** Weigh it with fit, intent and what the account says on the first call.',
        '**One customer profile sees one customer’s view.** A US subscriber sees what the account shows US subscribers. Record the profile and the country with every trigger.',
        '**Every sign-up, basket and checkout stops short of paying.** Emails after a first order, and anything behind an identity check, stay with real customers and your own customer research.',
        '**Read each site’s terms first.** Nothing here is legal advice.',
      ],
    },
    {
      kind: 'p',
      text: 'Start with the 20 accounts most likely to buy this quarter, record a baseline this week, and pick the 3 triggers your product answers best.',
    },
    {
      kind: 'cta',
      text: 'Sample data from a real UK store in September 2026: 4 test customers, every inbox watched for 48 hours, and the full results in every format they come in.',
      to: '/sample-output',
      label: 'See sample data',
    },

    { kind: 'h2', id: 'questions', text: 'Frequently asked questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What are sales trigger events?',
          a: 'Sales trigger events are dated changes at a company that make a sales conversation more likely to land now. Common ones are a funding round, a new leader, a hiring push or a merger. For vendors whose product touches a company’s customers, changes in what it sends them count too, such as a new offer, a price change or a new onboarding email.',
        },
        {
          q: 'What are some sales trigger events examples for B2B?',
          a: 'Public examples include funding rounds, new leaders, a past champion changing job, hiring pushes, mergers and new technology on a website. Examples in what an account sends its customers include a new offer, a price change, a new welcome series and emails from a new email platform. Texts that start or stop, a step that breaks and slower support answers count too.',
        },
        {
          q: 'What are ABM triggers?',
          a: 'ABM triggers are the events an account based marketing team uses to move a target account between tiers, change its ads or hand it to sales. They are the same events as sales triggers, read across the whole target list, with a play and an owner for each one.',
        },
        {
          q: 'What is the difference between a trigger event and a buying signal?',
          a: 'A trigger event is something the account did, such as raising money or changing a price. A buying signal is anything that suggests an account may buy, which includes trigger events, intent data and visits to your website.',
          link: { label: 'Buying signals examples', to: '/blog/buying-signals-examples' },
        },
        {
          q: 'Which account based marketing signals matter most to vendors that sell to consumer brands?',
          a: 'The most useful show in what the brand sends its customers. They include a new welcome offer, a price change, a rebuilt welcome series and emails from a new email platform. Texts that start or stop, a cart reminder that stops and slower support answers matter too. Each shows a team at the brand making a decision in the area the vendor sells into.',
        },
        {
          q: 'How do you track trigger events for target accounts?',
          a: 'Public triggers come from funding databases, job change tracking, intent data, technology lookup tools and web search APIs such as Exa. Triggers in what an account sends its customers need a customer account at each target. That means an inbox and phone number, a dated baseline and a weekly check of every email, price and page. Obsession’s Account watch keeps those accounts open and dates each change.',
          link: { label: 'Account watch', to: '/recipes/account-watch' },
        },
        {
          q: 'How fast should you act on a sales trigger event?',
          a: 'Agree a time with sales for each trigger. A step that breaks is worth a message the same day, because it costs the account orders while it lasts. A new offer or a rebuilt welcome series can wait for the week’s plan. Tag each opportunity with its trigger so the timing can be judged on pipeline sourced.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Facts checked 11 November 2026',
      text: 'General information, not legal advice. Each provider’s features and prices are quoted from its own pages as they stood on 11 November 2026, and we tested none of the tools. Harbourline, Quillmere, Tolland and Brackwell are invented companies. Every offer, price, time and figure in the illustrations, the tables and the cost example is an example.',
    },
  ],

  sources: [
    { title: 'Crunchbase', publisher: 'Crunchbase', url: CRUNCHBASE },
    { title: 'UserGems', publisher: 'UserGems', url: USERGEMS },
    { title: 'The Bombora Data Co-op', publisher: 'Bombora', url: BOMBORA },
    { title: 'BuiltWith', publisher: 'BuiltWith', url: BUILTWITH },
    { title: 'Exa', publisher: 'Exa', url: EXA },
    { title: 'Company and people data every GTM team can act on', publisher: 'Exa', url: EXA_GTM },
    { title: 'Trace an email with its full header', publisher: 'Gmail Help', url: GMAIL_HEADERS },
    { title: 'RFC 6376: DomainKeys Identified Mail (DKIM) Signatures', publisher: 'RFC Editor', url: RFC6376, date: '2011-09' },
    { title: 'Plans and pricing', publisher: 'BuiltWith', url: BUILTWITH_PLANS },
    { title: 'Pricing', publisher: 'Exa', url: EXA_PRICING },
  ],

  related: [
    'buying-signals-examples',
    'crm-data-enrichment-fields',
    'clay-custom-signals',
    'cold-email-first-line-examples',
    'recipe:account-watch',
    'recipe:prospect-intelligence',
    'recipe:price-watch',
    '/sales',
  ],
}

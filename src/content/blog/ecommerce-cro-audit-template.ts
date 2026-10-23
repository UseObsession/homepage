import type { BlogPost } from './types'

/* Wave 2, article 3 (keyword plan, 23 Oct 2026): the ecommerce CRO audit, for CRO agencies. Readers: CRO strategists
   and audit leads at agencies serving Shopify and DTC brands (they run the audit), and agency founders and heads of new
   business (they use an audit to win and keep clients). Primary query "ecommerce cro audit"; also cro audit checklist,
   cro audit template, cro audit report template, how to do a cro audit, what is a cro audit, shopify cro audit
   checklist, conversion audit. Takes over "cro audit shopify" from audit-prospect-email-without-klaviyo-login.
   Why now: stores freeze code from about 20 Nov, Black Friday is Fri 27 Nov 2026, and the report a client reads in
   January rests on what their store did in November.
   Angle: a complete template an agency can adopt as it is, including step 5, the journey after the sign up and the order
   (the pop up's code at checkout, welcome, basket and checkout emails, the thank you page and tracking after Shopify's
   checkout upgrade, every live test variant past the sign up), which page reviews and analytics can't show; then
   scoring, the report, and a lighter outside version for a prospect (links to the live prospect email article, never
   repeats it).
   Read at source on 23 Oct 2026: Baymard's cart abandonment list, research overview and pricing; Joy Joya's 362 brand
   test; Shopify Help (behaviour reports, test orders, the non-Plus Thank you page upgrade), Shopify's pricing page and the
   Scripts changelog; Google Analytics Help (funnel exploration), Google's Analytics page, web.dev on Core Web Vitals,
   PageSpeed Insights docs; Nielsen (2000) on 5 users; Conversion's PIE page; CXL's PXL article (read through a text copy:
   the site refuses direct requests); the Agency Core 2026 PDF (the 67%); the pricing pages of Microsoft Clarity,
   Contentsquare (hotjar.com/pricing redirects there), Lucky Orange, Intelligems, Shoplift, Convert, VWO (wingify.com),
   Optimizely and Baymard; Intelligems' Atlas QA docs; the CRO Guru Launch Check listing; OpenAI's ChatGPT agent help page
   (read through a text copy); and the site's Funnel QA, Prospect intelligence and Website audit pages and /sample-output.
   Left out on purpose: the 93% and 128 stores, any PilotX audit figure, the $410 lamp, agency audit and retainer prices
   (vendor estimates only), audit hours (vendor estimate only), Google Trends figures, "teardown", "receipt", "leak".
   Both illustrations use an invented store at .example. Buyer words; no dashes. */

const BAYMARD_CART = 'https://baymard.com/lists/cart-abandonment-rate'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const SAMPLE = 'https://useobsession.com/sample-output'
const SHOPIFY_BEHAVIOUR =
  'https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports'
const GA4_FUNNEL = 'https://support.google.com/analytics/answer/9327974'
const PSI = 'https://developers.google.com/speed/docs/insights/v5/about'
const VITALS = 'https://web.dev/articles/vitals'
const NNG = 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
const BAYMARD_RESEARCH = 'https://baymard.com/research'
const SCRIPTS = 'https://shopify.dev/changelog/posts/shopify-scripts-will-be-deprecated-on-june-30-2026'
const TEST_ORDERS = 'https://help.shopify.com/en/manual/checkout-settings/test-orders'
const SHOPIFY_TY = 'https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade'
const ATLAS_QA = 'https://docs.intelligems.io/general-features/atlas-ai/atlas-qa'
const PIE = 'https://www.conversion.com/framework/pie-framework/'
const CXL = 'https://cxl.com/blog/better-way-prioritize-ab-tests/'
const AMI = 'https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf'
const GA = 'https://marketingplatform.google.com/about/analytics/'
const SHOPIFY_PRICING = 'https://www.shopify.com/pricing'
const CLARITY = 'https://clarity.microsoft.com/'
const CONTENTSQUARE = 'https://contentsquare.com/pricing/'
const LUCKY_ORANGE = 'https://www.luckyorange.com/pricing'
const INTELLIGEMS = 'https://www.intelligems.io/pricing'
const SHOPLIFT = 'https://www.shoplift.ai/pricing'
const CONVERT = 'https://www.convert.com/pricing/'
const VWO = 'https://wingify.com/pricing/'
const OPTIMIZELY = 'https://www.optimizely.com/plans'
const BAYMARD_PRICING = 'https://baymard.com/pricing'
const CRO_GURU = 'https://apps.shopify.com/conversion-rate-optimization'
const CHATGPT_AGENT = 'https://help.openai.com/en/articles/11752874-chatgpt-agent'

export const post: BlogPost = {
  slug: 'ecommerce-cro-audit-template',
  title: 'The ecommerce CRO audit: a 7 step template for agencies',
  dek: 'A 7 step template for an ecommerce CRO audit, from scope and research to the journey after the sign up, scoring and the report. A lighter version runs on a prospect before the pitch.',
  metaTitle: 'Ecommerce CRO audit template: checklist, scoring and report',
  description:
    'An ecommerce CRO audit template for agencies: data access, analytics, research, page review, the journey after the sign up, scoring and the report.',
  answer:
    'An ecommerce CRO audit is a structured review of a store’s data, visitor behaviour and pages that ends in a ranked list of fixes and tests, each with its evidence and a value in the client’s own numbers. A complete audit runs 7 steps: scope and data access, quantitative research, qualitative research, a review by page type, the journey after the sign up and the order, prioritisation, and the report.',
  primaryKeyword: 'ecommerce cro audit',
  keywords: [
    'cro audit checklist',
    'cro audit template',
    'cro audit report template',
    'how to do a cro audit',
    'what is a cro audit',
    'shopify cro audit checklist',
    'cro audit shopify',
    'conversion audit',
    'shopify conversion audit',
  ],
  category: 'For agencies',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 11,
  order: 13,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'ship',
    workspace: 'agency',
    art: {
      kind: 'flow',
      title: 'larkmoor.example · audit step 5, the journey after the sign up',
      status: { tone: 'fail', text: '2 fails, 1 late' },
      steps: [
        { label: 'The page behind a live ad', detail: 'The ad and the page both offer 15% off a first order', tone: 'ok' },
        { label: 'The pop up, on a phone', detail: 'It offers 10% off against the ad’s 15%', tone: 'fail' },
        { label: 'The welcome email', detail: 'Arrived 3 h 10 min after the sign up, with LARK10', tone: 'late' },
        { label: 'The code at checkout', detail: 'LARK10 refused on a sale throw', tone: 'fail' },
        { label: 'A test order', detail: 'Thank you page and confirmation email within 1 minute', tone: 'ok' },
        { label: 'The purchase in GA4', detail: 'Recorded once, with the right value', tone: 'ok' },
      ],
      foot: 'Each step logged with its time and a screenshot, ready for the findings table.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A complete ecommerce CRO audit runs from the kickoff call to the report in 7 steps, and a lighter version of the same steps runs on a prospect before the pitch, with no logins.',
    },
    {
      kind: 'p',
      text: '[Baymard’s collection of 50 studies](' +
        BAYMARD_CART +
        ') puts the average documented cart abandonment rate at 70.22%, and its benchmark finds that the average large ecommerce site can gain a 35.26% increase in conversion rate through better checkout design. Page reviews and analytics cover what happens on the store. A second set of faults sits in what the store sends afterwards: in [a test of 362 ecommerce brands](' +
        JOYJOYA +
        ') that Joy Joya published in July 2026, using new email addresses and phone numbers, 158 sent no welcome email and 20 sent an offer that didn’t match their pop up.',
    },
    {
      kind: 'stat',
      value: '70.22%',
      label: 'average documented online shopping cart abandonment rate, across 50 studies',
      source: 'Baymard Institute, updated September 2025',
      href: BAYMARD_CART,
    },

    { kind: 'h2', id: 'what-is-a-cro-audit', text: 'What a CRO audit covers' },
    {
      kind: 'p',
      text: 'An audit produces findings with evidence, a value for each in the client’s own numbers, and a plan of what to fix now and what to test, in order. For a new client it sets the test roadmap. Before a client signs, the audit is often the sale, and a lighter version run from outside needs no logins.',
    },
    {
      kind: 'table',
      caption: 'The ecommerce CRO audit template at a glance',
      cols: ['Step', 'What you check', 'What goes in the report'],
      rows: [
        ['1. Scope and data access', 'The goal, metric, period, change log and logins', 'Scope and data notes'],
        ['2. Quantitative research', 'The funnel by segment, tracking accuracy and speed', 'Where visitors drop, with numbers'],
        ['3. Qualitative research', 'Recordings, heatmaps, surveys, reviews and user tests', 'Themes, each with a count and examples'],
        ['4. Review by page type', 'Every template against research guidelines, on a phone first', 'Issues by page, with screenshots'],
        ['5. The journey after the sign up', 'The pop up’s code at checkout, the welcome, basket and checkout emails, the thank you page, tracking and every live test variant', 'What arrived and when, with each email kept'],
        ['6. Prioritisation', 'Fix now, test or research further, then a score and a value', 'A ranked list'],
        ['7. The report', 'Findings, fixes and the test plan', 'The document the client signs off'],
      ],
    },

    { kind: 'h2', id: 'scope-and-access', text: 'Step 1: scope and data access' },
    {
      kind: 'p',
      text: 'Agree the scope in writing before you open any data, because the client will judge the audit against it.',
    },
    {
      kind: 'list',
      items: [
        '**The goal.** 1 primary metric: conversion rate, revenue per visitor, first order rate or average order value.',
        '**The period.** The last 90 days and the same period last year, with sale days such as Black Friday, Friday 27 November 2026, reported separately.',
        '**A change log.** Every theme, app, checkout, discount and email flow change, with its date, so that each drop in the funnel can be matched to a release.',
        '**Read access.** GA4, Shopify’s reports, the testing, recording, email and text tools, the ad accounts and the review platform, plus past test results so that the plan doesn’t repeat a test.',
        '**Test labels.** The test email addresses, order tag and URL parameter you will use, so that the client’s team can exclude your activity from reports and test results.',
      ],
    },

    { kind: 'h2', id: 'quantitative-research', text: 'Step 2: quantitative research' },
    {
      kind: 'p',
      text: 'Find where visitors drop and who drops. Shopify’s [behaviour reports](' +
        SHOPIFY_BEHAVIOUR +
        ') break conversion into sessions, sessions with cart additions, sessions that reached checkout and sessions that completed it. A GA4 [funnel exploration](' +
        GA4_FUNNEL +
        ') takes up to 10 steps, splits each by a dimension such as device category, and can show the average time between steps.',
    },
    {
      kind: 'list',
      items: [
        '**Segments.** Device, new or returning visitor, source and campaign, landing page and country. A drop on mobile only points to step 4. A drop for 1 campaign points to that ad’s page.',
        '**Tracking accuracy.** Compare GA4 purchases with Shopify orders for the same days. A large gap is a finding, and it needs fixing before anyone trusts the funnel.',
        '**The pages that carry revenue,** ranked by sessions and sales, so that later findings can be weighted by traffic.',
        '**Site search,** including the searches that return nothing.',
        '**Speed.** [PageSpeed Insights](' +
          PSI +
          ') shows field data from real Chrome users over the previous 28 days for public pages. Google’s [Core Web Vitals](' +
          VITALS +
          ') count as good at a Largest Contentful Paint within 2.5 seconds, an Interaction to Next Paint of 200 milliseconds or less and a Cumulative Layout Shift of 0.1 or less, at the 75th percentile, with mobile and desktop measured separately.',
      ],
    },
    {
      kind: 'p',
      text: 'Write each drop as a number with its segment, such as “mobile visitors from paid social reach checkout at half the desktop rate”.',
    },

    { kind: 'h2', id: 'qualitative-research', text: 'Step 3: qualitative research' },
    {
      kind: 'p',
      text: 'Use the drops from step 2 to choose what to watch and whom to ask.',
    },
    {
      kind: 'list',
      items: [
        '**Recordings,** filtered to the device, source and page where the funnel drops, with each problem logged and linked.',
        '**Heatmaps** of clicks and scrolling on the main landing, collection and product templates, with mobile and desktop kept apart.',
        '**Surveys:** 1 open question on the page where visitors leave, such as “What’s stopping you from ordering today?”, and 1 on the thank you page.',
        '**Reviews, returns and support chats** from the period, each tagged by theme: delivery cost, sizing, trust, product information.',
        '**User tests.** 5 people from the store’s audience buy on a phone and say what they think as they go. [Jakob Nielsen’s analysis](' +
          NNG +
          ') found that 5 users uncover about 85% of usability problems, and recommends several small rounds over 1 large study.',
      ],
    },
    {
      kind: 'p',
      text: 'Group what you find into themes, each with a count and 2 or 3 examples.',
    },

    { kind: 'h2', id: 'heuristic-review', text: 'Step 4: review by page type' },
    {
      kind: 'p',
      text: 'Review every template against guidelines from research, on a phone first. [Baymard’s research](' +
        BAYMARD_RESEARCH +
        ') holds over 700 guidelines from more than 200,000 hours of UX research, grouped by page type. Its [checkout figures](' +
        BAYMARD_CART +
        ') show that the average US checkout displays 23.48 form elements by default, and that US shoppers most often abandon an order over extra costs (40%), slow delivery (20%) and not trusting the site with card details (19%).',
    },
    {
      kind: 'list',
      items: [
        '**The page behind each live ad:** the offer, price and stock match the ad. The [morning check for ad landing pages](/blog/where-your-ads-land-morning-check) covers it in full.',
        '**Home and landing pages:** the range and the current offer are clear on a phone before scrolling, and the pop up closes easily.',
        '**Collections and search:** filters suit the range, product cards show price and stock, and a search with no results suggests alternatives.',
        '**Product pages:** the full price, delivery cost and date, size or fit, reviews and returns sit near an add to basket button that stays in reach on a phone.',
        '**Basket and checkout:** shipping and tax shown before checkout, a working discount field, guest checkout, express payment, few fields and error messages that say what to fix.',
        '**Thank you page and accounts:** the order details and next steps, then sign in, account creation and password reset.',
      ],
    },
    {
      kind: 'p',
      text: 'Log each issue with its page, device, screenshot and the guideline it breaks.',
    },

    { kind: 'h2', id: 'post-click-journey', text: 'Step 5: the journey after the sign up' },
    {
      kind: 'p',
      text: 'Analytics, recordings and page reviews show what happens on the store. They don’t show what the store sends after a visitor gives an email address or places an order. Run this step as a new customer: an email address and a phone number the store has never seen, a private browser window on a phone, and a sheet that logs each step, its time and what arrived.',
    },
    {
      kind: 'p',
      text: '[A check of a UK skincare store](' +
        SAMPLE +
        ') begun on 22 September 2026 found no reminder within 48 hours for either a £40 gift set left in the basket or a £21 deodorant left at checkout.',
    },

    { kind: 'h3', id: 'pop-up-code', text: 'The pop up’s code, through to checkout' },
    {
      kind: 'p',
      text: 'Open the page behind a live ad and sign up through the pop up on a phone. **A pass:** the welcome email brings the code the pop up promised, and the code works at checkout on the products the ad promotes, including sale items and any subscriptions. Shopify Scripts [stopped running on 30 June 2026](' +
        SCRIPTS +
        '), so test every custom discount built before then.',
    },

    { kind: 'h3', id: 'emails', text: 'Welcome, basket and checkout emails' },
    {
      kind: 'p',
      text: 'Leave a basket with 1 new address and stop at checkout with another, after ticking any marketing box. **A pass:** each reminder arrives within the flow’s delay with the product, photo and price filled in, and exactly 1 checkout reminder arrives. Wait 48 hours before you record an email as missing, then use [the welcome and basket email diagnosis](/blog/welcome-basket-email-not-sending) to find the cause.',
    },

    { kind: 'h3', id: 'thank-you-tracking', text: 'The thank you page and tracking' },
    {
      kind: 'p',
      text: 'Place a [test order](' +
        TEST_ORDERS +
        ') with Shopify’s test payment gateway or Shopify Payments test mode. **A pass:** the thank you page shows the order, the confirmation email arrives, and the purchase is recorded once in GA4 and once in each ad platform. Shopify made the additional scripts section [view only on 28 August 2025](' +
        SHOPIFY_TY +
        '), set 26 August 2026 as the deadline for stores not on Plus to upgrade their Thank you and Order status pages, and recommends app pixels for tracking. Check the purchase event on any store whose tracking lived in additional scripts, and again after every checkout or theme change.',
    },

    { kind: 'h3', id: 'live-variants', text: 'Every live test variant' },
    {
      kind: 'p',
      text: 'For each test that changes the pop up, an offer, a price or checkout, run the 3 checks above through every variant’s preview link. **A pass:** each variant’s sign up sends its email, and its code works at checkout. Intelligems’ [Atlas QA](' +
        ATLAS_QA +
        ') browses a test’s preview as a shopper, switches groups, checks prices and compares desktop with mobile, and its 9 finding categories run from test setup to checkout. The emails a variant’s sign up triggers fall outside them. Repeat the check each morning the test is live, so that a variant that stops sending its code is found before anyone calls a winner, and exclude your visits from the results.',
    },
    {
      kind: 'p',
      text: 'By hand, each run needs a new address, a phone and 48 hours per store, and each live variant needs a new run every morning. For 1 audit, a strategist can run it alongside steps 2 to 4. Across a pipeline of prospects or several live tests, the hours grow with every store and every day. Obsession’s [Funnel QA for CRO agencies](/use-cases/funnel-qa-for-cro-agencies) uses AI agents that follow a brand’s live ad as new customers, sign up through the pop up and take the code to checkout, then show what happened, with proof. After a client signs, they check every test variant past the sign up every morning it’s live.',
    },
    {
      kind: 'cta',
      text: 'Name 3 brands you’re about to pitch and 2 clients, with their OK. Obsession follows each brand’s live ad as a new customer and sends what happened after the sign up within 4 days, with proof, free.',
      to: '/use-cases/funnel-qa-for-cro-agencies',
      label: 'Check 5 brands free',
    },

    { kind: 'h2', id: 'prioritise', text: 'Step 6: prioritise the findings' },
    {
      kind: 'p',
      text: 'Sort each finding into 1 of 3 groups before you score anything.',
    },
    {
      kind: 'list',
      items: [
        '**Fix now:** anything broken, such as a refused code, a missing email, a purchase recorded twice or a sold out product behind a live ad. A fix needs no test, only a before and after.',
        '**Test:** a change with evidence and an uncertain effect, written as a hypothesis: because we saw X on page Y, changing Z for segment S will improve metric M.',
        '**Research further:** a signal from 1 source only.',
      ],
    },
    {
      kind: 'p',
      text: 'Score the tests with 1 framework and keep it for the whole retainer, so that scores compare from month to month.',
    },
    {
      kind: 'list',
      items: [
        '**PIE:** Potential, Importance and Ease. [Conversion’s page on PIE](' +
          PIE +
          '), which credits Chris Goward with designing it, defines them as how much the page can improve, how valuable its traffic is and how hard the test is to implement.',
        '**ICE:** Impact, Confidence and Ease, which [CXL](' + CXL + ') says Sean Ellis popularised.',
        '**PXL:** CXL’s yes or no questions on whether the change is above the fold, noticeable within 5 seconds, adds or removes something, runs on high traffic pages and is backed by user tests, feedback, heatmaps or analytics, plus the time to build it. CXL’s view is that PIE and ICE leave too much room for subjective scoring.',
      ],
    },
    {
      kind: 'p',
      text: 'Then give each finding a value in the client’s own numbers: the revenue passing through the step it affects. On the site, multiply the sessions reaching the step by the share that order and by the average order value. After the sign up, multiply the monthly sign ups by the share who order with the welcome code and by the average first order. The client can check every input in their own reports. Use the value to break ties, and forecast a lift only within a range your past tests support.',
    },
    {
      kind: 'art',
      caption: 'A worked value for 1 finding on an invented store. Replace each figure with the client’s own.',
      art: {
        kind: 'price',
        title: 'larkmoor.example · the welcome code refused on sale items',
        rows: [
          { label: 'Pop up sign ups a month', value: '2,400', note: 'The email platform’s form report' },
          { label: 'Share who place a first order with the code', value: '6%', note: 'The welcome flow report' },
          { label: 'First orders a month with the code', value: '144', note: '2,400 × 6%' },
          { label: 'Average first order value', value: '£48', note: 'Shopify, first orders only' },
          { label: 'Share of last November’s first orders with a sale item', value: '40%', note: 'Shopify orders, filtered by product tag' },
        ],
        total: { label: 'First order revenue a month that depends on the code working on sale items', value: '£2,765', note: '144 × £48 × 40%' },
      },
    },

    { kind: 'h2', id: 'audit-report', text: 'Step 7: the CRO audit report' },
    {
      kind: 'p',
      text: 'The report has 6 parts, with the decisions first and the evidence behind them.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Summary, on 1 page:** the 5 findings with the highest value, 3 fixes for this week with an owner and a date each, and the first 3 tests.',
        '**Scope and data notes:** the period, the sources, the access granted, the test activity excluded and any tracking gaps.',
        '**Findings:** 1 row each, with what happens, where (page, device, segment), the evidence (a funnel figure, a recording, a screenshot or the email as it arrived), the guideline it relates to, the fix or hypothesis, the score and the value.',
        '**Fixes:** the steps to reproduce each one, for the client’s developer.',
        '**Test plan:** the hypothesis, primary metric, variants, audience, duration from the testing tool’s sample size calculator, and QA steps that include step 5.',
        '**Out of scope:** pages, markets or channels left out, and what needs more data.',
      ],
    },
    {
      kind: 'p',
      text: 'Book the readout call when you send the report, and record the starting values so that the next report can show before and after.',
    },

    { kind: 'h2', id: 'prospect-audit', text: 'A lighter audit before the pitch' },
    {
      kind: 'p',
      text: 'Before a client signs there are no logins, so the funnel and recordings are out of reach. A lighter audit from outside still gives the prospect findings they can check for themselves, and pipeline is the challenge agencies name most often.',
    },
    {
      kind: 'stat',
      value: '67%',
      label: 'of agencies named prospect pipeline a pressing challenge, ranked first for the third year running',
      source: 'Agency Management Institute, Agency Core 2026',
      href: AMI,
    },
    {
      kind: 'list',
      items: [
        '**Speed:** PageSpeed Insights field data for the home page, the top collection and the top product page.',
        '**Page review:** step 4 on a phone, on those pages and the basket.',
        '**Public reviews,** tagged by theme.',
        '**The page behind each live ad,** found through the public ad libraries.',
        '**A sign up as a new customer,** with 48 hours of what arrives. [Auditing a prospect’s email and SMS without a Klaviyo login](/blog/audit-prospect-email-without-klaviyo-login) gives the full method.',
      ],
    },
    {
      kind: 'p',
      text: 'Check a prospect only through the public sign up any customer can use, stop at checkout without paying, and never enter invented payment details. Send 3 findings, each with its evidence and the first test you would run, and keep the full audit as the paid next step.',
    },
    {
      kind: 'cta',
      text: 'Prospect intelligence signs up, opts in and asks the bot at every company on your list, then hands you a fact and its proof to open each pitch with. Join the waitlist and name up to 5 companies to watch first.',
      to: '/recipes/prospect-intelligence',
      label: 'See prospect intelligence',
    },

    { kind: 'h2', id: 'options', text: 'CRO audit tools compared', compare: true },
    {
      kind: 'p',
      text: 'Several of these tools are free or already in the client’s stack. We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Tools for each step of a CRO audit. Prices from each company’s own pages, 23 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing',
          'No time spent now',
          'Free',
          'Tests rest on opinion, and faults after the sign up surface in sales or customer emails',
          'A store with no changes or paid traffic planned',
        ],
        [
          'By hand: a strategist, a sheet, a new inbox and a phone',
          'Judgement on any store and any platform',
          'Strategist hours',
          'Each run covers 1 inbox at 1 moment, and every repeat costs the same hours',
          'Single audits and first pitches',
        ],
        [
          'Analytics: [GA4](' + GA + '), [Shopify’s reports](' + SHOPIFY_PRICING + ')',
          'Funnels by device, source, page and country',
          'GA4: free\nShopify: 200+ reports in every plan, from £19 a month billed yearly',
          'Shows which step dropped, not what the store sent afterwards',
          'Step 2',
        ],
        [
          'Recordings and surveys: [Microsoft Clarity](' + CLARITY + '), Hotjar by [Contentsquare](' + CONTENTSQUARE + '), [Lucky Orange](' + LUCKY_ORANGE + ')',
          'Why visitors stop, with AI summaries in Clarity and on Contentsquare’s Growth plan',
          'Clarity: free, no traffic limits\nContentsquare: free to 200k sessions a month, Growth from $39 billed yearly\nLucky Orange: Build $32 a month billed yearly, 3,500 sessions',
          'Needs the client to install it, and records only the site',
          'Step 3',
        ],
        [
          'Testing: [Intelligems](' + INTELLIGEMS + '), [Shoplift](' + SHOPLIFT + '), [Convert](' + CONVERT + '), [VWO](' + VWO + '), [Optimizely](' + OPTIMIZELY + ')',
          'Intelligems: prices, shipping, offers and content\nShoplift: Shopify templates and themes\nConvert, VWO, Optimizely: general experiments',
          'Intelligems: from $69 a month, Unlimited $1,279 billed yearly\nShoplift: Core $99 a month\nConvert: Growth $399 a month, $299 billed yearly\nVWO, Optimizely: no price listed',
          'Built in QA, where documented, checks the site and not the emails a variant triggers',
          'The test plan, once the client signs',
        ],
        [
          'Research: [Baymard](' + BAYMARD_PRICING + ')',
          'Over 700 guidelines and benchmarks by page type',
          'Foundation: $2,400 a year for 3 users\nExpansion: $4,200 a year, adding cart, checkout, search and account',
          'Guidelines and benchmarks, without the client’s data',
          'Step 4',
        ],
        [
          'AI tools: [CRO Guru Launch Check](' + CRO_GURU + '), [ChatGPT agent](' + CHATGPT_AGENT + ')',
          'Launch Check: an AI checklist for 4 page types\nChatGPT agent: browses and fills in forms',
          'Launch Check: $199 one time\nChatGPT agent: 40 messages a month on Plus, 400 on Pro',
          'No analytics or recordings, and every finding needs checking',
          'A first draft',
        ],
        [
          'Obsession (ours): [Funnel QA for CRO agencies](/use-cases/funnel-qa-for-cro-agencies), [Prospect intelligence](/recipes/prospect-intelligence), [Website audit](/recipes/website-audit)',
          'AI agents follow a live ad as new customers and take the pop up’s code to checkout, with proof\nEvery live test variant checked past the sign up, each morning',
          'Funnel QA: 5 brands checked free\nThe recipes: no price listed',
          'Covers step 5 and the pages behind ads, not analytics, research, page review or scoring',
          'Step 5 across a pipeline, and live tests',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For 1 audit, GA4, Shopify’s reports, Microsoft Clarity and a new inbox and phone cover every step at no tool cost. Contentsquare, Lucky Orange and Baymard add depth to steps 3 and 4, and the right testing platform depends on what the client tests. An agency that audits 1 store a month, with no live tests on the sign up, needs no tool for step 5.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'p',
      text: 'An audit describes 1 period. Allow for these 5 points when you present it.',
    },
    {
      kind: 'list',
      items: [
        '**A pass is a snapshot.** A theme, app, checkout or flow change can undo it, so repeat step 5 after each release.',
        '**Research is a sample.** A theme from 1 source stays a hypothesis until a test or a second source supports it.',
        '**Values are estimates.** Only a test or a before and after comparison measures what a change is worth.',
        '**Low traffic limits testing.** A store too small to reach a test result in a few weeks gains more from fixing known faults.',
        '**1 inbox is 1 view.** A long time customer may be sent something other than what a new subscriber receives.',
      ],
    },
    {
      kind: 'p',
      text: 'Many stores freeze code from about 20 November, before Black Friday on Friday 27 November 2026 and Cyber Monday on Monday 30 November. Run step 5 on every client store before the freeze and again on Black Friday morning. For an audit that includes the sale period, deliver the full report in early January with the November results beside it.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about CRO audits' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is a CRO audit?',
          a: 'A CRO audit is a structured review of a store’s data, visitor behaviour and pages that ends in a ranked list of fixes and tests, each with its evidence.',
        },
        {
          q: 'How do you do a CRO audit?',
          a: 'Agree the scope and access, find where visitors drop in analytics, research why, review each page type, and test the journey after the sign up as a new customer. Then score the findings and write the report.',
        },
        {
          q: 'What should a Shopify CRO audit checklist include?',
          a: 'Shopify’s conversion breakdown by device, speed on the main templates, every page type on a phone, every discount tested at checkout since Scripts stopped on 30 June 2026, a test order, and a check that purchases are still tracked.',
        },
        {
          q: 'What should a CRO audit report template include?',
          a: 'A 1 page summary, scope and data notes, findings with evidence, score and value, a fixes list, a test plan and what was out of scope.',
        },
        {
          q: 'How do you prioritise CRO audit findings?',
          a: 'Fix what is broken first, then score the test ideas with 1 framework, such as PIE, ICE or PXL, and break ties with each finding’s value in the client’s numbers.',
        },
        {
          q: 'Is a conversion audit the same as a CRO audit?',
          a: 'Yes. Both names describe the same review.',
        },
        {
          q: 'Can you do a CRO audit without access to analytics?',
          a: 'Yes, in a lighter form: PageSpeed Insights, a page review, public reviews, the pages behind live ads and a sign up as a new customer. The funnel and recordings need the client’s access.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Prices are as each company’s pricing page showed them on 23 October 2026. Shopify’s page showed pounds, and hotjar.com/pricing now opens Contentsquare’s page. VWO’s page, on wingify.com, and Optimizely’s show no prices. CXL and OpenAI refused direct requests, so we read text copies of those pages. We did not test the testing platforms. The store and every figure in both illustrations are invented. This is not legal advice.',
    },
  ],

  sources: [
    { title: '50 Cart Abandonment Rate Statistics 2026', publisher: 'Baymard Institute', url: BAYMARD_CART, date: '2025-09-22' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Behavior reports', publisher: 'Shopify Help Center', url: SHOPIFY_BEHAVIOUR },
    { title: '[GA4] Funnel exploration', publisher: 'Google Analytics Help', url: GA4_FUNNEL },
    { title: 'About PageSpeed Insights', publisher: 'Google for Developers', url: PSI, date: '2024-10-21' },
    { title: 'Web Vitals', publisher: 'web.dev (Google)', url: VITALS, date: '2024-10-31' },
    { title: 'Why you only need to test with 5 users', publisher: 'Nielsen Norman Group (Jakob Nielsen)', url: NNG, date: '2000-03-18' },
    { title: 'Latest UX research and ecommerce design data', publisher: 'Baymard Institute', url: BAYMARD_RESEARCH },
    { title: 'Sample output: the September store check', publisher: 'Obsession', url: SAMPLE, date: '2026-09' },
    { title: 'Shopify Scripts will be deprecated on June 30, 2026', publisher: 'Shopify developer changelog', url: SCRIPTS },
    { title: 'Placing a test order', publisher: 'Shopify Help Center', url: TEST_ORDERS },
    { title: 'Non-Plus: upgrading and replacing your Thank you and Order status pages', publisher: 'Shopify Help Center', url: SHOPIFY_TY },
    { title: 'Atlas QA', publisher: 'Intelligems docs', url: ATLAS_QA },
    { title: 'PIE prioritization framework', publisher: 'Conversion', url: PIE },
    { title: 'PXL: a better way to prioritize your A/B tests', publisher: 'CXL', url: CXL, date: '2016-09-27' },
    { title: 'The Agency Core 2026 research report, executive summary', publisher: 'Agency Management Institute', url: AMI, date: '2026-05' },
    { title: 'Google Analytics', publisher: 'Google Marketing Platform', url: GA },
    { title: 'Pricing', publisher: 'Shopify', url: SHOPIFY_PRICING },
    { title: 'Microsoft Clarity', publisher: 'Microsoft', url: CLARITY },
    { title: 'Pricing', publisher: 'Contentsquare', url: CONTENTSQUARE },
    { title: 'Pricing', publisher: 'Lucky Orange', url: LUCKY_ORANGE },
    { title: 'Pricing', publisher: 'Intelligems', url: INTELLIGEMS },
    { title: 'Pricing', publisher: 'Shoplift', url: SHOPLIFT },
    { title: 'Pricing', publisher: 'Convert', url: CONVERT },
    { title: 'Pricing', publisher: 'Wingify (VWO)', url: VWO },
    { title: 'Plans', publisher: 'Optimizely', url: OPTIMIZELY },
    { title: 'Pricing', publisher: 'Baymard Institute', url: BAYMARD_PRICING },
    { title: 'CRO Guru: Launch Check', publisher: 'Shopify App Store (ConversionAB)', url: CRO_GURU },
    { title: 'ChatGPT agent', publisher: 'OpenAI Help Center', url: CHATGPT_AGENT },
  ],

  related: [
    '/use-cases/funnel-qa-for-cro-agencies',
    'recipe:prospect-intelligence',
    'recipe:website-audit',
    'audit-prospect-email-without-klaviyo-login',
    'welcome-basket-email-not-sending',
    'where-your-ads-land-morning-check',
    '/sample-output',
  ],
}

import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

/* The why series, Spec E (24 Oct 2026): why Shopify Plus build and migration agencies need AI customers. It owns
   "shopify launch checklist" (primary) and, from Google autocomplete (US and UK, 24 Oct 2026, autocomplete_wave_b and
   b2), shopify go live checklist, shopify website launch checklist, shopify pre launch checklist, shopify plus
   migration, magento to shopify plus migration, shopify qa testing and shopify plus agency. "shopify store audit
   checklist" belongs to /blog/shopify-store-audit-checklist and is linked with that phrase.
   Readers: founders, heads of delivery, QA leads and account directors at Plus build and migration agencies.
   Why now: a code freeze 2 weeks before Black Friday falls on Fri 13 Nov 2026 (arithmetic, not a sourced date), Black
   Friday is Fri 27 Nov, and Shopify's own changes keep releases coming (Scripts stopped 30 Jun 2026, checkout.liquid
   and additional scripts sunset on Plus Thank you and Order status pages 28 Aug 2025, script tags on non-Plus 26 Aug
   2026, legacy customer accounts deprecated 26 Feb 2026 with a sunset date still to be announced, agentic storefronts
   active by default for eligible stores).
   The idea: a launch is checked once and judged for weeks. Pre-launch QA ends at launch and nobody stays a customer of
   the store after it, so the customer-side checklist (10 checks with pass marks, cadence and owners) is the lead magnet,
   run on launch day, through hypercare and after every release, which turns a reactive retainer into one that shows
   its work. The sum: retainer x months kept (Ringly's $2,700 light and $15,000 standard Plus, at 3, 6 and 12 months),
   set against 353 hours a year of the routine by hand at the BLS median for QA analysts and testers ($104,300 a year,
   May 2025, $50.14 an hour on 2,080 hours), for an invented agency with 10 support clients and 6 launches a year.
   Read on 24 Oct 2026 at each source's own page: Flux's home page, Ringly's Plus partner guide (no date shown), Tenten's
   pricing guide (11 Jan 2026), Mgroup's Plus support page, 1Digital's retainer guide (7 Sep 2026), IWD's migration
   checklist (24 Sep 2026; quote checked against the page text), the Shopify Community thread on agency testing (30 Aug
   2026; read in the built in browser after WebFetch returned 403), Niblin's checkout tracking guide (updated 25 May
   2026), Shopify Help Center (customer import, customer accounts, setting up your email, test orders, URL redirects,
   the non-Plus Thank you page upgrade, agentic storefronts), shopify.dev (the Scripts changelog of 9 Apr 2026, the
   checkout.liquid page, the legacy customer accounts changelog of 26 Feb 2026), the BLS handbook, and the pricing or
   product pages of Playwright (GitHub, Apache 2.0), Ghost Inspector, Mailosaur, Checkout Doctor and Screaming Frog.
   From the verified library (_research/seo/plan/ai-customers/facts.json): Klaviyo's 2026 benchmarks, Shopify's
   abandoned checkout rule and Adobe's 2026 forecast.
   Left out on purpose: the dossier's thread summaries and paraphrases as quotes, the Sigma Solve lockout case (its page
   no longer says it), Niblin's 30 to 40% figure (a vendor estimate), Shero, Gartner, ChatGPT agent, Workato, Grep, any
   PilotX audit figure, the site's 93% and 128 stores, the offers' sales wording and any Obsession price, customer or
   result. Ghost Inspector's plan names are left off because its third heading reads "Large/Scale". The password reset
   is named for legacy accounts only: new stores sign customers in with an emailed code. wrenfield.example, the 10
   client agency and its timings are invented. No dashes. */

const FLUX = 'https://flux.agency'
const RINGLY = 'https://www.ringly.io/blog/shopify-plus-partner-agency'
const TENTEN = 'https://tenten.co/shopify/shopify-agency-pricing-2026/'
const MGROUP = 'https://mgroupweb.com/shopify-plus-support-maintenance/'
const ONEDIGITAL = 'https://www.1digitalagency.com/blog/what-every-shopify-support-retainer-should-cover/'
const IWD = 'https://www.iwdagency.com/blogs/news/ecommerce-migration-checklist/'
const IMPORT = 'https://help.shopify.com/en/manual/customers/import-export-customers'
const ACCOUNTS = 'https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts'
const KLAVIYO_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const EMAIL_SETUP = 'https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-your-email'
const COMMUNITY = 'https://community.shopify.com/t/shopify-agencies-in-singapore-sea-how-do-you-test-stores-after-releases/674456'
const NIBLIN = 'https://niblin.com/blog/shopify-plus-checkout-tracking'
const TEST_ORDERS = 'https://help.shopify.com/en/manual/checkout-settings/test-orders'
const BLS = 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm'
const SH_ABANDONED = 'https://help.shopify.com/en/manual/promoting-marketing/create-marketing/abandoned-checkouts'
const REDIRECTS = 'https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect'
const SCRIPTS = 'https://shopify.dev/changelog/posts/shopify-scripts-will-be-deprecated-on-june-30-2026'
const CHECKOUT_LIQUID = 'https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid'
const UPGRADE = 'https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade'
const LEGACY = 'https://shopify.dev/changelog/legacy-customer-accounts-are-deprecated'
const AGENTIC = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const ADOBE = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const PLAYWRIGHT = 'https://github.com/microsoft/playwright'
const GHOST = 'https://ghostinspector.com/pricing/'
const MAILOSAUR = 'https://mailosaur.com/pricing'
const CHECKOUT_DOCTOR = 'https://apps.shopify.com/checkout-doctor-store-alerts'
const SCREAMING_FROG = 'https://www.screamingfrog.co.uk/seo-spider/pricing/'

const AUDIT_CHECKLIST = '/blog/shopify-store-audit-checklist'
const BF_CHECKLIST = '/blog/black-friday-checklist-new-customer'
const CAUSES = '/blog/welcome-basket-email-not-sending'
const AGENTIC_GUIDE = '/blog/agentic-commerce-for-merchants'
const AI_ANSWERS = '/blog/what-chatgpt-says-about-your-store'

export const post: BlogPost = {
  slug: 'ai-customers-for-shopify-plus-agencies',
  title: 'Why Shopify Plus agencies need AI customers',
  dek: 'A launch is checked on launch day and judged in the weeks after it. What a Plus agency can’t see once a store goes live, what a missed regression costs in retainers, and a customer-side launch checklist with pass marks.',
  metaTitle: 'Shopify launch checklist: AI customers for Plus agencies',
  description:
    'A Shopify launch checklist from the customer’s side for Plus agencies: what breaks after go live, what it costs in retainers and what AI customers check.',
  answer:
    'Shopify Plus agencies need AI customers to keep running the customer side of a Shopify launch checklist after go live, from the welcome email and sign in code to the basket reminder, order emails and old links. A launch or migration is judged in the weeks after it, and Obsession’s AI customers, each with its own inbox, phone number and browser, check each step through the first 30 days and after every release, keeping what arrived as proof.',
  primaryKeyword: 'shopify launch checklist',
  keywords: [
    'shopify launch checklist',
    'shopify go live checklist',
    'shopify website launch checklist',
    'shopify pre launch checklist',
    'shopify plus migration',
    'magento to shopify plus migration',
    'shopify qa testing',
    'shopify plus agency',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
  readingMinutes: 13,
  order: 16,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'wrenfield.example · the first 30 days on Shopify Plus',
      who: 'The store’s AI customer, from launch day to day 30',
      status: { tone: 'fail', text: '3 failed, 1 fixed' },
      rows: [
        { time: 'Day 0', text: 'Launch checks pass', detail: 'Sign up, code, basket and checkout on a phone', tone: 'ok' },
        { time: 'Day 1', text: 'Welcome email arrives', detail: '3 minutes after sign up, WREN10 works', tone: 'ok' },
        { time: 'Day 4', text: 'Sign in code never arrives', detail: 'Signing in again, nothing in 15 minutes', tone: 'fail' },
        { time: 'Day 9', text: 'Old email link returns 404', detail: '/sale.html from a June email, no redirect', tone: 'fail' },
        { time: 'Day 16', text: 'Basket reminder stops', detail: 'None in 24 hours, after release 3.4', tone: 'fail' },
        { time: 'Day 17', text: 'Fix ships, reminder returns', detail: '1 hour 4 minutes after the basket', tone: 'ok' },
      ],
      foot: 'An example on an invented store. The agency’s launch checklist passed on day 0, and the store’s reports showed every flow live.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Shopify Plus agencies design, build and migrate stores on Shopify Plus, Shopify’s plan for larger brands, then support them on monthly retainers. AI customers give the agency’s delivery and support teams a standing view of each client store as a new customer receives it, from launch day onward. [What AI customers are](/blog/ai-customers) defines the term, and [why every company needs AI customers](/blog/why-ai-customers-matter) makes the wider case.',
    },
    {
      kind: 'p',
      text: 'At [Flux](' +
        FLUX +
        '), a Plus agency, most clients move to a monthly retainer after launch, so the first weeks after launch are also the first weeks of the retainer.',
    },

    { kind: 'h2', id: 'their-world', text: 'How a Shopify Plus agency makes money' },
    {
      kind: 'p',
      text: 'The work is often sold in 2 parts. Flux starts each project with a paid discovery phase and scopes every build as a fixed price engagement. [Ringly’s 2026 guide](' +
        RINGLY +
        ') for merchants hiring a Plus partner puts a lean Plus migration at $25,000 to $50,000, a mid range build at $40,000 to $80,000 and a full Plus implementation at $50,000 to $250,000 or more. Ringly’s tiers depend on checkout, B2B and international scope.',
    },
    {
      kind: 'p',
      text: 'Retainers carry the business after launch. Ringly’s guide sets them at $2,700 to $5,000 a month for a fractional team doing light ongoing work, $10,000 to $15,000 for a standard Plus retainer and $20,000 to $30,000 for enterprise work across several streams. [Tenten’s January 2026 pricing guide](' +
        TENTEN +
        ') lists Plus tier partners at $200 to $400 an hour and tells merchants to budget $500 to $2,000 a month for post launch support.',
    },
    {
      kind: 'stat',
      value: '$120,000 to $180,000',
      label: 'a year from one standard Shopify Plus retainer, at $10,000 to $15,000 a month',
      source: 'Ringly, 2026 guide to hiring a Plus partner',
      href: RINGLY,
    },
    {
      kind: 'p',
      text: 'The week runs on releases. [Mgroup](' +
        MGROUP +
        '), a Plus support agency, describes a retainer with weekly releases and QA, regression testing (checking that what worked still works after a change) by QA and release specialists, and monthly reports that tie hours to outcomes. [1Digital’s September 2026 guide](' +
        ONEDIGITAL +
        ') puts a growing Plus merchant at 40 to 80 support hours a month, with critical issues answered within 1 business hour on its Plus tier.',
    },
    {
      kind: 'p',
      text: 'Black Friday is on Friday 27 November 2026, and Mgroup freezes theme and app updates for a peak readiness pass before it. A code freeze 2 weeks out falls on Friday 13 November. Ringly’s guide tells merchants to ask an agency to “Show me three live stores you built that look like mine” and to get its post launch SLA in writing, so every store an agency has launched is part of its next pitch.',
    },

    { kind: 'h2', id: 'blind-spots', text: 'What a Plus agency can’t see after launch' },
    {
      kind: 'p',
      text: 'The go/no-go call before launch checks the store from inside the project: the theme on real devices, the checkout up to payment, layout diffs and a test order. The problems that reach the client tend to come later, from the customer’s side, once the launch team has moved on.',
    },
    {
      kind: 'quote',
      text: 'The launch itself is rarely where the damage happens. It shows up in week three, when organic traffic is down and nobody knows which pages lost it, or in month four, when finance notices that orders and the ERP stopped agreeing.',
      cite: 'Joe McFerrin, CEO of IWD Agency, in its September 2026 migration checklist',
      href: IWD,
    },
    {
      kind: 'list',
      items: [
        '**Returning customers’ sign in.** Shopify’s help centre says [customer passwords can’t be migrated](' +
          IMPORT +
          ') from another store by CSV, and with sign in links turned on, Shopify’s [customer accounts](' +
          ACCOUNTS +
          ') send a one time 6 digit code by email instead of asking for a password. Either way, a returning customer’s first visit depends on an email arriving.',
        '**Flows rebuilt for the new store.** IWD notes that shopping feeds, marketplace listings and automated email flows are “easy to rebuild at launch and easy to forget afterwards”. Klaviyo’s own [2026 benchmarks](' +
          KLAVIYO_BENCH +
          ') show flows earning nearly 41% of email revenue from 5.3% of sends.',
        '**The sender.** Shopify’s help centre says [Gmail and Yahoo require an authenticated domain with a DMARC record](' +
          EMAIL_SETUP +
          ') for email from a branded address, and that if the new store’s domain isn’t authenticated, Shopify rewrites the sender to an address at shopifyemail.com.',
        '**Regressions after later releases.** In an August 2026 [Shopify Community thread](' +
          COMMUNITY +
          ') on how agencies test stores after releases, one reply named the rework it sees most often as “regressions that get reintroduced a few weeks later because there’s no ongoing regression suite”, found when a customer complains.',
        '**Tracking.** [Niblin’s guide to Plus checkout tracking](' +
          NIBLIN +
          '), updated in May 2026, says that after Shopify retired checkout.liquid, “most merchants didn’t realize their tracking had broken until weeks or months of data were already lost”.',
        '**Live payments.** Shopify’s help centre says [customers can’t place live orders](' +
          TEST_ORDERS +
          ') while payment providers are in test mode, so proving a live store’s order emails takes a real order, cancelled and refunded.',
      ],
    },
    {
      kind: 'p',
      text: 'Each of these first shows in a customer’s inbox, phone or browser. A Shopify website launch checklist ends at go live, and after it nobody on the account is a new customer of the store.',
    },

    { kind: 'h2', id: 'cost', text: 'What a missed regression costs a Plus agency' },
    {
      kind: 'p',
      text: '1 client kept is worth its monthly retainer × the months it stays, both from your agency’s own books. At Ringly’s rates, a light retainer of $2,700 a month is worth $8,100 over 3 months, $16,200 over 6 and $32,400 over 12. A standard Plus retainer of $15,000 a month is worth $45,000, $90,000 and $180,000.',
    },
    {
      kind: 'p',
      text: 'The client’s side of the sum is the revenue a day of the broken step × the days it goes unnoticed, which average half the gap between checks: about 15 days with a monthly review, 3.5 with a weekly check and half a day with a daily one. [How AI customers find revenue leaks](/blog/ai-customers-find-revenue-leaks) works it from a flow report.',
    },
    {
      kind: 'p',
      text: 'Running the checklist by hand has its own cost. For an invented agency with 10 support clients releasing weekly and 6 launches a year, each followed by hypercare (the weeks of close support after a launch), the customer-side checklist by hand takes 353 hours a year at example timings. At the US median wage for software quality assurance analysts and testers, [$104,300 a year in May 2025](' +
        BLS +
        '), or $50.14 an hour, that is $17,699. The hours pay for themselves if the routine keeps 1 standard Plus client for about 5 more weeks, or a light retainer for 6.6 more months.',
    },
    {
      kind: 'art',
      caption: 'The payback worked once for an invented agency with example timings. The hourly rate is the BLS median for QA analysts and testers, and the retainers are from Ringly’s guide. Put your own numbers in each row.',
      art: {
        kind: 'price',
        title: 'An agency with 10 support clients · the checklist by hand',
        rows: [
          { label: 'Short run after each release', value: '30 minutes', note: '4 checks, every weekly release' },
          { label: '10 support clients, a year', value: '260 hours', note: '0.5 hours × 10 × 52' },
          { label: 'Hypercare, 6 launches', value: '93 hours', note: '15.5 hours a launch' },
          { label: 'Cost of 353 hours', value: '$17,699', note: '× $50.14, the BLS median for QA testers' },
          { label: '1 client, high case', value: '$15,000', note: 'A month, a standard Plus retainer' },
          { label: '1 client, low case', value: '$2,700', note: 'A month, a light retainer' },
        ],
        total: { label: 'Months of 1 client that cover it', value: '1.2 to 6.6', note: '$17,699 ÷ each retainer' },
      },
    },
    {
      kind: 'p',
      text: 'Sold as a care plan line, the same routine sits inside the $500 to $2,000 a month that Tenten’s guide tells merchants to budget for post launch support. Put any tool’s yearly price in place of the hours: [AI customers at scale](/blog/ai-customers-at-scale) prices an AI customer line by line at published retail prices.',
    },

    { kind: 'h2', id: 'checklist', text: 'The Shopify launch checklist, from the customer’s side' },
    {
      kind: 'p',
      text: 'The checklist has 10 checks, each with a pass mark written before launch and an owner for a fail. Run every check on a phone, in a private window, logged out of the admin, from an email address and phone number the store has never seen. By hand, the hours are checks × stores × minutes × how often.',
    },
    {
      kind: 'table',
      caption: 'The customer-side Shopify launch checklist. Example pass marks and owners: set each from the client’s own flows, policies and team',
      cols: ['Check', 'Pass mark', 'When', 'Owner of a fail'],
      rows: [
        ['Sign up and welcome', 'Welcome within 5 minutes, with the pop up’s code', 'Launch day, daily to day 7, after form edits', 'Email lead or retention agency'],
        ['Account sign in', 'Sign in code within 1 minute, order history shown', 'Launch day, daily to day 7, after theme changes', 'Developer'],
        ['Discount codes', 'Each live code applies or is refused as set, sale items too', 'Launch day, after every discount change', 'Developer\nEcommerce lead'],
        ['Basket and checkout reminders', 'Within the flow’s delay plus 1 hour, product and price shown', 'Launch day, weekly, after app changes', 'Email lead'],
        ['Order and shipping emails', 'Sent from the brand’s own domain, tracking link opens', 'Launch day on a funded card, then weekly', 'Developer'],
        ['Old URLs and email links', '1 permanent redirect each, to a live page', 'Launch day, then the top 20 weekly', 'Developer\nSEO lead'],
        ['Consent and texts', 'Opt in brings the confirmation text, STOP stops texts', 'Launch day, after SMS app changes', 'Retention lead'],
        ['Tracking and the cookie banner', 'Purchase pixels fire on a test order, none after reject', 'Launch day, after checkout changes', 'Developer'],
        ['The chatbot', 'Returns, delivery and order status match the new policies', 'Launch day, after policy or prompt edits', 'CX lead'],
        ['AI shopping agents and answers', 'Price, stock and returns match the store', 'Week 1, then monthly', 'Owner of the product feed'],
      ],
    },
    {
      kind: 'p',
      text: 'On a store still on legacy customer accounts, the sign in check is the password reset email. On Shopify, [a checkout counts as abandoned](' +
        SH_ABANDONED +
        ') once it stays incomplete for more than 10 minutes after the shopper gives an email, so the checkout reminder’s deadline starts there. A Shopify redirect [works only from a broken URL](' +
        REDIRECTS +
        '), and IWD puts checking the old site’s top 200 landing pages at an afternoon’s work. [Why a welcome or basket email never arrives](' +
        CAUSES +
        ') lists the causes of a failed flow, and the [Black Friday checklist](' +
        BF_CHECKLIST +
        ') adds the sale week tests.',
    },
    {
      kind: 'p',
      text: 'At example timings, a full run takes about 2 hours, plus an afternoon of about 4 hours for redirects on launch day, and a short run of the first 4 checks about 30 minutes. Hypercare then comes to about 15.5 hours a store: the full run and redirects on launch day, a short run each day to day 7, and full runs on days 14, 21 and 30. The hours grow faster than the client list:',
    },
    {
      kind: 'list',
      items: [
        '**Every run needs a new identity.** A welcome email comes once per address and a text confirmation once per number, so 10 stores checked weekly need 520 new addresses a year.',
        '**The waits are long.** A basket reminder set for 1 hour still needs watching for a day, and a sign in code needs someone at the inbox when it lands.',
        '**The order check costs money.** Each run needs a real order on a funded card, then a refund.',
        '**Changes arrive between releases.** App updates, a client’s own flow edits and Shopify’s platform changes can each stop a step on a day nobody checks.',
      ],
    },
    {
      kind: 'p',
      text: `A team that runs this as a routine is practising [customer-side observability](/blog/customer-side-observability). ${CUSTOMER_SIDE_OBSERVABILITY.definition} For a Plus agency it rests on pass marks written before launch, a cadence tied to launches and releases, and a named owner for each fail. [1Digital’s guide](` +
        ONEDIGITAL +
        ') says retainers that cover only reactive support “function like insurance”. A retainer that runs this routine shows the client, every week, what its customers received.',
    },

    { kind: 'h2', id: 'what-ai-customers-do', text: 'What AI customers do for a Plus agency' },
    { kind: 'p', text: `**${AI_CUSTOMER.definition}**` },
    {
      kind: 'p',
      text: 'For a Plus agency, each client store gets its own AI customers, with the client’s OK, from launch day onward. They run the checklist on the cadence the agency sets and keep every email, text and page exactly as it arrived, each email’s DKIM signature checked on arrival and kept with its key.',
    },
    {
      kind: 'table',
      caption: 'The jobs AI customers do for a Plus agency, with the recipe that runs each one',
      cols: ['Job', 'The check', 'A pass', 'That week'],
      rows: [
        [
          'Launch day and hypercare: [Delivery monitoring](/recipes/delivery-monitoring)',
          'Every email, text, login code and link from launch day, for 14 days',
          'Every email, text and code inside its pass mark',
          'Each fail sent to its owner, then run again',
        ],
        [
          'Every release: [Website audit](/recipes/website-audit)',
          'Sign up, sign in code, a code and checkout after each deploy',
          'A pass for every step, minutes after the release',
          'Fixed or rolled back before the client sees it',
        ],
        [
          'Before and after cutover: [Mystery shopper](/recipes/mystery-shopper)',
          'The same journeys run on the old store, then on the new one',
          'The new store sends everything the old one did',
          'Missing flows rebuilt before hypercare ends',
        ],
        [
          'Partner and affiliate links: [Partner checks](/recipes/partner-checks)',
          'Each partner’s link followed to the store, its code tried in the basket',
          'Every link lands on a live page and every code applies',
          'A note to each partner with the new link',
        ],
        [
          'The agency’s monthly client report',
          'Each store’s results for the month, with the evidence linked',
          'Every check passed, or each fail with its fix date',
          'Sent with the hours report, before the quarterly review',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Obsession runs this checklist today. It makes AI customers that sign up to any company and keep every email, offer and price it sends, so an agency can find its clients’ revenue leaks, watch their competitors and prospect with proof. For a Plus agency, it shows what each client store’s new customers get after launch and every release. A deploy hook, a schedule or a button starts each run, and a preview link runs every journey on a new theme before it goes live. AI customers say they are AI whenever they talk to a person, never use fake payment details, and place a real order only on a card the client or the agency funds.',
    },

    { kind: 'h2', id: 'what-changes', text: 'What changes on Shopify in 2026 and 2027' },
    {
      kind: 'list',
      items: [
        '**Live: discount logic has moved to Functions.** Shopify Scripts [stopped executing on 30 June 2026](' +
          SCRIPTS +
          '), after editing closed on 15 April, and their logic moves to Shopify Functions, which Shopify is extending for discounts, shipping and payments. Every rebuilt discount needs testing at checkout as a customer.',
        '**Live: tracking has moved to pixels.** Shopify [sunset checkout.liquid and additional scripts](' +
          CHECKOUT_LIQUID +
          ') on Plus stores’ Thank you and Order status pages on 28 August 2025, and script tags on non-Plus stores’ pages on 26 August 2026. Its help centre tells merchants to use [app pixels to continue tracking customer events](' +
          UPGRADE +
          ').',
        '**Announced: legacy customer accounts are going.** Shopify [deprecated legacy customer accounts](' +
          LEGACY +
          ') on 26 February 2026 and will announce a final sunset date later in 2026. A store on legacy accounts that moves to a theme without the legacy files moves to the new customer accounts, so its sign in emails change.',
        '**Live: AI channels on by default.** [Shopify’s agentic storefronts](' +
          AGENTIC +
          '), which let customers discover a store’s products in ChatGPT, Google AI Mode and Gemini, Microsoft Copilot and Meta, are active by default for eligible stores that accept Shopify’s agentic storefronts terms. Channels are managed under Sales channels, then Agentic.',
        '**Forecast: more shoppers arrive through AI.** [Adobe forecasts](' +
          ADOBE +
          ') that traffic from AI services to US retail sites, measured by shoppers clicking a link, will rise 130% year over year over the 2026 holiday season, with Black Friday up 95%.',
      ],
    },
    {
      kind: 'p',
      text: 'Each change can stop a step a customer depends on without an alert reaching the agency. AI customers repeat the checks after each platform change and each release, so a code refused after a Functions rebuild is found the week it starts. [Agentic commerce for merchants](' +
        AGENTIC_GUIDE +
        ') sets out the readiness test for AI shopping agents, and [what ChatGPT says about your store](' +
        AI_ANSWERS +
        ') the check of AI answers.',
    },

    { kind: 'h2', id: 'options', text: 'Shopify QA testing options compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways a Plus agency can check a client store after launch. Prices from each provider’s own pages, 24 October 2026. Checkout Doctor bills every 30 days',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'The client or a customer finds each break', 'Stores that rarely change after launch'],
        [
          'By hand: the checklist, a new address, a phone and a sheet',
          'Every check, with the team’s judgement',
          'Your team’s hours\nUS median for QA testers: $104,300 a year',
          'Hours grow with every store, release and wait',
          'Launch day at 1 or 2 stores',
        ],
        [
          'Your own test suite: [Playwright](' + PLAYWRIGHT + ')',
          'Scripted tests in Chromium, Firefox and WebKit, in CI',
          'Free, Apache 2.0 licence\nEngineering time',
          'Email and texts need a separate inbox service',
          'Code regressions before a release',
        ],
        [
          'Scripted browser tests: [Ghost Inspector](' + GHOST + ')',
          'Automated browser tests on a schedule, email testing on higher plans',
          '$109, $225 or $449 a month, billed annually',
          'Runs the tests the team writes and maintains',
          'Checkout paths across many stores',
        ],
        [
          'Email and SMS test inboxes: [Mailosaur](' + MAILOSAUR + ')',
          'Email and SMS received inside automated tests',
          'Personal: from $20 a month, billed annually\nCore: from $50 a month, billed annually\nSMS and authentication: from $37.50 a month',
          'Each journey and wait is scripted by the team',
          'Account emails in a test suite',
        ],
        [
          'Shopify monitoring app: [Checkout Doctor](' + CHECKOUT_DOCTOR + ')',
          'Checkout, discounts and shipping tested in a real browser on a schedule',
          'Free health check\nPaid: $29, $79 or $199 a month',
          'Never places an order, with no email checks described',
          'Checkout between releases, several stores on Pro',
        ],
        [
          'SEO crawler: [Screaming Frog](' + SCREAMING_FROG + ')',
          'Finds broken links, errors and redirects',
          'Free to 500 URLs\n£199 a year per licence',
          'Reads pages, with no sign up, order or email',
          'Redirect checks at launch',
        ],
        [
          'Obsession (ours): [Website audit](/recipes/website-audit), [Mystery shopper](/recipes/mystery-shopper), [Delivery monitoring](/recipes/delivery-monitoring), [Partner checks](/recipes/partner-checks)',
          'AI customers of each client store from launch day, every email, text and code kept as evidence',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'Stops at bot walls and CAPTCHAs',
          'What a client’s customers get after launch and every release, kept as proof',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your agency needs to see what each client store’s customers receive after launch and every release, use Obsession. For a build handed over at launch, the checklist by hand on launch day is enough. The options combine. A test suite catches code regressions before a release, a crawler checks redirects at launch, a monitoring app watches checkout between releases, and AI customers record what each new customer of the store received. For an audit of a store’s own data as well, use the [Shopify store audit checklist](' +
        AUDIT_CHECKLIST +
        ').',
    },

    { kind: 'h2', id: 'when-not', text: 'When a Plus agency doesn’t need AI customers' },
    {
      kind: 'list',
      items: [
        '**Builds handed over at launch.** An agency that keeps no support retainer runs the checklist by hand on launch day and passes it to the client’s team.',
        '**Code regressions before a release.** A test suite in CI on a preview store catches them before any customer meets them, at the cost of engineering time.',
        '**Uptime at every hour.** A scripted monitor alerts within minutes when a page or the cart goes down.',
        '**Stores that rarely change,** with few releases and no email or text programme of their own. A monthly run by hand covers them.',
        '**A client that hasn’t agreed to tests on its store.** Put the OK in the statement of work before launch.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'List every client store with a launch, migration or release planned before a freeze on Friday 13 November, 2 weeks before Black Friday.',
        'Copy the checklist into each store’s launch plan, with a pass mark from the client’s own flows and an owner for every row.',
        'Before cutover, run the sign up, basket and order journeys on the old store and keep what arrives, then run the same journeys on launch day.',
        'Pull the old site’s top 200 landing pages and every link in the last 3 months of emails, and check each returns 1 permanent redirect to a live page.',
        'Add a page called “What a new customer received” to each support client’s monthly report, with every email linked as it arrived.',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession makes the first AI customers that work for you. Name a client store that has just launched or migrated, with the client’s OK. Check your store free: 4 AI customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days, with proof and the fix for each leak.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check my store free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about Shopify launch checklists' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What should a Shopify launch checklist include?',
          a: 'The store’s settings, checkout, payments and redirects, then the customer’s side: sign up and welcome, account sign in, discount codes, basket and checkout reminders, order and shipping emails, consent and texts, tracking, the chatbot and what AI shopping agents read. Each check needs a pass mark and an owner.',
        },
        {
          q: 'What is a Shopify go live checklist?',
          a: 'A Shopify go live checklist is the set of checks run on launch day, before and after the store opens to customers. Its customer-side checks should run again through the first 30 days, because problems often appear in the weeks after launch.',
        },
        {
          q: 'What should a Shopify pre launch checklist cover?',
          a: 'Settings, payments, shipping, taxes, notifications, the sending domain, redirects and apps, then a test order and a sign up from a new address. Customers can’t place live orders while payment providers are in test mode, so turn test mode off before launch.',
        },
        {
          q: 'How do you do Shopify QA testing after a release?',
          a: 'Run a short customer-side check after every release: sign up from a new address, sign in, apply a live code and leave a basket, then confirm each email and text arrives inside its pass mark. A test suite and screenshot diffs cover the code and the layout.',
        },
        {
          q: 'What breaks in a Magento to Shopify Plus migration?',
          a: 'The parts a customer meets after launch: returning customers’ sign in, because passwords can’t be migrated by CSV, old URLs without redirects, email flows rebuilt for the new store, the sending domain, tracking and discount logic. Check each from a new customer’s side on launch day and through the first 30 days.',
        },
        {
          q: 'What does a Shopify Plus agency do?',
          a: 'It designs, builds and migrates stores on Shopify Plus, often after a paid discovery and for a fixed price, then supports them on a monthly retainer. Ringly’s 2026 guide puts a standard Plus retainer at $10,000 to $15,000 a month.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the examples',
      text: 'wrenfield.example, the 10 client agency, its timings and both illustrations are invented. The half the gap rule assumes a break is as likely to start on any day. Nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'Shopify Plus Agency for Development & AI Search', publisher: 'Flux', url: FLUX },
    { title: 'Shopify Plus partner agency: how to vet, hire, and budget for one in 2026', publisher: 'Ringly', url: RINGLY },
    { title: 'Shopify Agency Pricing 2026: Project Costs & Retainer Models', publisher: 'Tenten', url: TENTEN, date: '2026-01-11' },
    { title: 'Shopify Plus Support & Maintenance Services', publisher: 'Mgroup', url: MGROUP },
    { title: 'What Every Shopify Support Retainer Should Cover (And What Plus Merchants Specifically Need)', publisher: '1Digital Agency', url: ONEDIGITAL, date: '2026-09-07' },
    { title: 'Ecommerce Migration Checklist: Your First Year After a Replatform', publisher: 'IWD Agency (Joe McFerrin)', url: IWD, date: '2026-09-24' },
    { title: 'Importing and exporting customer lists', publisher: 'Shopify Help Center', url: IMPORT },
    { title: 'Customer accounts', publisher: 'Shopify Help Center', url: ACCOUNTS },
    { title: 'Email marketing benchmarks by Industry 2026', publisher: 'Klaviyo', url: KLAVIYO_BENCH, date: '2026' },
    { title: 'Setting up your email', publisher: 'Shopify Help Center', url: EMAIL_SETUP },
    { title: 'Shopify agencies in Singapore/SEA: how do you test stores after releases?', publisher: 'Shopify Community', url: COMMUNITY, date: '2026-08-30' },
    { title: 'Shopify Plus Checkout Tracking Is Broken: Here’s What Happened and How to Fix It', publisher: 'Niblin', url: NIBLIN, date: '2026-05-25' },
    { title: 'Placing a test order', publisher: 'Shopify Help Center', url: TEST_ORDERS },
    { title: 'Software Developers, Quality Assurance Analysts, and Testers: Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS },
    { title: 'Recovering abandoned checkouts', publisher: 'Shopify Help Center', url: SH_ABANDONED },
    { title: 'Creating and managing URL redirects', publisher: 'Shopify Help Center', url: REDIRECTS },
    { title: 'Shopify Scripts will be deprecated on June 30, 2026', publisher: 'Shopify developer changelog', url: SCRIPTS, date: '2026-04-09' },
    { title: 'checkout.liquid', publisher: 'Shopify Dev Docs', url: CHECKOUT_LIQUID },
    { title: 'Non-Plus - Upgrading and replacing your Thank you and Order status pages', publisher: 'Shopify Help Center', url: UPGRADE },
    { title: 'Legacy customer accounts are now deprecated', publisher: 'Shopify developer changelog', url: LEGACY, date: '2026-02-26' },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: AGENTIC },
    { title: 'Adobe: U.S. Holiday Shopping Season to Hit Record $275.1 Billion Online, Rising 6.7% YoY', publisher: 'Adobe', url: ADOBE, date: '2026-09-28' },
    { title: 'microsoft/playwright', publisher: 'GitHub', url: PLAYWRIGHT },
    { title: 'Pricing', publisher: 'Ghost Inspector', url: GHOST },
    { title: 'Simple, predictable pricing', publisher: 'Mailosaur', url: MAILOSAUR },
    { title: 'Checkout Doctor: Store Alerts', publisher: 'Shopify App Store', url: CHECKOUT_DOCTOR },
    { title: 'Pricing', publisher: 'Screaming Frog', url: SCREAMING_FROG },
  ],
  related: [
    'why-ai-customers-matter',
    'ai-customers-for-ecommerce-brands',
    'ai-customers-for-cro-agencies',
    'recipe:website-audit',
    'recipe:delivery-monitoring',
    'recipe:mystery-shopper',
    'recipe:partner-checks',
  ],
}

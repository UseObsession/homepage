import type { BlogPost } from './types'
import { AI_CUSTOMER, CUSTOMER_SIDE_OBSERVABILITY } from '../glossary'

/* The why series, Spec C (24 Oct 2026): why CRO and performance agencies need AI customers. It owns "landing page
   monitoring" (primary), with "ai tools for digital marketing agency", "cro tools for shopify", "cro agency", "paid
   social agency" and "ai tools for performance marketing" (Google autocomplete, US and UK, 24 Oct 2026). Readers:
   founders, heads of growth and CRO leads at paid social, PPC and CRO agencies working with Shopify and direct to
   consumer brands.
   Why now: Google's AI Max upgrade began on 1 Sep 2026, Shopify Scripts stopped on 30 Jun 2026, Meta CPMs rise into
   Black Friday (Fri 27 Nov 2026), and January is when brands review their agencies.
   The case: paid traffic converts only as well as the page, pop up, code and emails behind the ad, and none of an
   agency's usual tools signs up and waits to see them. The money is the agency's own: a retainer kept longer and a
   pitch won. Spine from writer_brief_why.md: their world, the 6 blind spots, the 2 sums (the client's sales while a
   fault runs; the retainer at 3, 6 and 12 months, low and high), the hours by hand and the routine, 5 jobs, what
   changes, the options, when not, start this week, the FAQ.
   Opened on 24 Oct 2026 at each source's own page: Darkroom's agency pricing guide (dated 23 Oct 2026), Clicks Geek's CRO
   retainer guide, Focus Digital's churn report, AMI's Agency Core 2026 summary (PDF text), EACA's Cost of Pitching
   2025 (PDF text: EUR 43,804, 8 people, 48 hours; the report measures no win rate, so the "about 20% won" in the
   dossier is left out), AgencyAnalytics' 2026 benchmarks, Adligator's research hours, Foreplay's agencies page and
   pricing, Panoramata, Checkly and Datadog pricing, Intelligems pricing and Atlas QA docs, Microsoft Clarity, Google
   Ads' destination requirements and Final URL expansion pages (Search and Performance Max), Shopify's Scripts
   changelog and Thank you page upgrade page, Lebesgue's CPM data and the BLS wage page. From the verified library
   (_research/seo/plan/ai-customers/facts.json): Joy Joya, Shopify agentic storefronts, OpenAI's shopping help, Adobe's
   2026 forecast and ChatGPT's cloud browser. Reused from the live where-your-ads-land guide (checked 23 Oct): Meta's
   scheduled feeds page, Google's AI Max notice, Common Thread Collective and the Shopify Community quote.
   Left out on purpose: the site's 93% and 128 stores, every PilotX figure, Gartner, ChatGPT agent, any Obsession price,
   unverified pitch win rates, third party prices for Triple Whale and Northbeam, and the Ferrow Coffee story the use
   case page already tells. brackenfold.example and every figure in its 2 illustrations are invented. No dashes. */

const AMI = 'https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf'
const DARKROOM = 'https://darkroomagency.com/observatory/marketing-agency-cost-2026-pricing-by-service'
const CLICKSGEEK = 'https://clicksgeek.com/cro-agency-retainer-costs/'
const FOCUS = 'https://focus-digital.co/?p=6135'
const EACA = 'https://uapr.ro/wp-content/uploads/2025/06/Report-EACA-Cost-of-Pitching.pdf'
const PMAX_FUE = 'https://support.google.com/google-ads/answer/14337539'
const META_FEEDS = 'https://developers.facebook.com/documentation/ads-commerce/catalog/guides/scheduled-feeds'
const SC_CLOUDFLARE =
  'https://community.shopify.com/t/cloudflare-broke-our-checkout-twice-lost-sales-customer-complaints-failed-orders-how-to-get-compensation/578534'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const SCRIPTS = 'https://shopify.dev/changelog/posts/shopify-scripts-will-be-deprecated-on-june-30-2026'
const ATLAS_QA = 'https://docs.intelligems.io/general-features/atlas-ai/atlas-qa'
const ADLIGATOR = 'https://adligator.com/blog/pitch-competitive-ad-intelligence-agency-clients'
const FOREPLAY_AGENCIES = 'https://foreplay.co/industries/agencies'
const LEBESGUE = 'https://lebesgue.io/?p=15192'
const BLS = 'https://www.bls.gov/ooh/business-and-financial/market-research-analysts.htm'
const AI_MAX_NOTICE = 'https://business.google.com/us/accelerate/announcements/dsa-upgrade-to-ai-max-2026/'
const COMMON_THREAD = 'https://commonthreadco.com/blogs/coachs-corner/google-ai-max-migration-live-september-1-2026-ecommerce'
const FINAL_URL = 'https://support.google.com/google-ads/answer/16230205'
const SHOPIFY_TY = 'https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade'
const SHOPIFY_AGENTIC = 'https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts'
const OPENAI_SHOPPING = 'https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search'
const ADOBE_2026 = 'https://news.adobe.com/news/2026/09/adobe-us-holiday-shopping-season-to-hit-record'
const AGENCYANALYTICS = 'https://agencyanalytics.com/agency-benchmarks-2026'
const GOOGLE_DEST = 'https://support.google.com/adspolicy/answer/6368661?hl=en'
const CHECKLY = 'https://www.checklyhq.com/pricing/'
const DATADOG = 'https://www.datadoghq.com/pricing/?product=synthetic-testing--monitoring'
const FOREPLAY_PRICING = 'https://www.foreplay.co/pricing'
const PANORAMATA = 'https://www.panoramata.co/pricing'
const INTELLIGEMS = 'https://www.intelligems.io/pricing'
const CLARITY = 'https://clarity.microsoft.com/'
const CLOUD_BROWSER = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'

const MORNING_CHECK = '/blog/where-your-ads-land-morning-check'
const CRO_AUDIT = '/blog/ecommerce-cro-audit-template'
const FIND_CLIENTS = '/blog/how-to-find-ecommerce-clients'
const COMPETITIVE = '/blog/ecommerce-competitive-intelligence'
const LEAKS = '/blog/ai-customers-find-revenue-leaks'

export const post: BlogPost = {
  slug: 'ai-customers-for-cro-agencies',
  title: 'Why CRO and performance agencies need AI customers',
  dek: 'Paid traffic converts only as well as the page, pop up, code and emails behind the ad. What CRO, paid social and PPC agencies can’t see past the click, what a missed fault costs in sales and retainers, the hours a check takes by hand, and what AI customers check every day.',
  metaTitle: 'Landing page monitoring: why CRO agencies need AI customers',
  description:
    'Landing page monitoring for CRO and performance agencies: what paid traffic meets past the click, what a missed fault costs, and how AI customers check it.',
  answer:
    'CRO and performance agencies need AI customers because the traffic they buy and test converts only as well as the page, pop up, code and emails it reaches, and none of an agency’s usual tools signs up and waits to see them. For landing page monitoring, AI customers open the page behind each live ad from its own link every morning, sign up through the pop up, take the code to checkout and keep every email that follows, at each client and each prospect. With Obsession’s AI customers, agencies fix faults before clients see them and open pitches with a finding the brand can check.',
  primaryKeyword: 'landing page monitoring',
  keywords: [
    'landing page monitoring',
    'landing page tracking',
    'ai tools for digital marketing agency',
    'ai tools for performance marketing',
    'cro tools for shopify',
    'cro agency',
    'paid social agency',
    'ai customers',
  ],
  category: 'AI customers',
  published: '2026-10-24',
  updated: '2026-10-28',
  readingMinutes: 12,
  order: 14,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'brackenfold.example · 1 ad, followed past the click',
      who: 'An AI customer working for the brand’s agency, on a phone',
      status: { tone: 'fail', text: '3 failed, 1 late' },
      rows: [
        { time: '07:00', text: 'Opens the ad’s page from its link', detail: 'The ad: 20% off linen sets, $96', tone: 'info' },
        { time: '07:01', text: 'Page shows $120, no sale', detail: 'The ad’s price is nowhere on the page', tone: 'fail' },
        { time: '07:02', text: 'Pop up offers 15% off', detail: 'The ad promised 20%', tone: 'fail' },
        { time: '07:03', text: 'Signs up with its own inbox', detail: 'Code BRACKEN15 shown on screen', tone: 'ok' },
        { time: '07:06', text: 'Code refused at checkout', detail: 'BRACKEN15 on the $120 set', tone: 'fail' },
        { time: '13:40', text: 'Welcome email arrives', detail: '6 hours after sign up, with a 10% code', tone: 'late' },
      ],
      foot: 'An example on an invented store. The ad account showed the ad live and spending all morning.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'CRO, paid social and PPC agencies that work with Shopify and direct to consumer brands are paid to turn traffic into revenue. The ad platforms report the click and the store reports the order. The landing page, pop up, discount code and first emails in between can change overnight, after a feed, app or Google setting changes, with no error in any report.',
    },
    {
      kind: 'p',
      text: '[AI customers](/blog/ai-customers) check that stretch from the customer’s side, at every client and every prospect. [Why AI customers matter](/blog/why-ai-customers-matter) sets out the case for any company. For an agency, it rests on 2 numbers every agency tracks: clients kept and pitches won.',
    },
    {
      kind: 'stat',
      value: '67%',
      label: 'of agency leaders named prospect pipeline a pressing challenge, first for the third year running',
      source: 'Agency Management Institute, Agency Core 2026',
      href: AMI,
    },

    { kind: 'h2', id: 'their-world', text: 'How CRO and paid social agencies make money' },
    {
      kind: 'p',
      text: 'The usual model is a monthly retainer. [Darkroom’s October 2026 pricing guide](' +
        DARKROOM +
        ') puts paid media management at $8,000 to $25,000 a month by ad spend, with $12,000 to $18,000 for brands spending $75,000 to $200,000 a month, or 10% to 20% of spend. [Clicks Geek’s 2026 guide to CRO retainers](' +
        CLICKSGEEK +
        ') puts the mid tier at $5,000 to $15,000 a month for 6 to 10 tests, and puts retainer minimums at 3 to 6 months. So 1 client is worth about $30,000 in its first year at the low end, a $5,000 CRO retainer kept for 6 months, and $216,000 at the high end, an $18,000 paid media retainer kept for 12.',
    },
    {
      kind: 'p',
      text: 'Clients move often. [Focus Digital’s 2026 churn report](' +
        FOCUS +
        ') puts annual client churn at paid advertising agencies at 49%, on contracts of 3 to 6 months. Lost clients are replaced through pitches, and in [the European Association of Communication Agencies’ 2025 survey](' +
        EACA +
        ') of 412 agency leaders in 23 European countries, an average new business pitch involved 8 people at 48 hours each and cost €43,804.',
    },
    {
      kind: 'stat',
      value: '49%',
      label: 'of paid advertising clients leave their agency within a year, on contracts of 3 to 6 months',
      source: 'Focus Digital, July 2026',
      href: FOCUS,
    },
    {
      kind: 'p',
      text: 'Creative strategists brief tests from Foreplay and the Meta Ad Library, media buyers check spend and return on ad spend daily against Shopify, CRO leads run tests in Intelligems, Convert or VWO, and account directors turn it into the monthly report.',
    },

    { kind: 'h2', id: 'blind-spots', text: 'What agencies can’t see past the click' },
    {
      kind: 'p',
      text: 'Each of those tools reports from 1 side of the click. Past it, a new customer meets 6 things that none of them records.',
    },
    {
      kind: 'list',
      items: [
        '**Where the click lands.** In Performance Max, [Final URL expansion is on by default](' +
          PMAX_FUE +
          ') and can serve traffic on any page that hasn’t been excluded. An ad for a sold out product runs until the product data updates, and [Meta’s documentation](' +
          META_FEEDS +
          ') says a scheduled feed can’t upload more often than once an hour.',
        '**What the pop up promises.** In [a test of 362 ecommerce brands by Joy Joya](' +
          JOYJOYA +
          '), using new email addresses and phone numbers, 158 sent no welcome email and 20 sent a welcome offer that didn’t match their own pop up.',
        '**Whether the code works.** Shopify Scripts [stopped running on 30 June 2026](' +
          SCRIPTS +
          '), and the discounts they ran had to be rebuilt with Shopify Functions, so each needs a new test at checkout.',
        '**What a test variant sends.** Intelligems’ [Atlas QA](' +
          ATLAS_QA +
          ') browses a test’s preview as a shopper would, across 9 finding categories from test setup to checkout. None of the 9 names emails, so a variant that stops sending its code can still count every sign up in the test’s results.',
        '**What a prospect’s customers get.** Recordings and testing tools run only on a site that installs them, so before a pitch an agency sees a prospect’s ads and pages and nothing after the sign up.',
        '**What a competitor offers after its ad.** Ad libraries and Foreplay hold the ad. A competitor’s welcome code and first emails reach its subscribers, and email archives such as Panoramata hold them for the brands they collect.',
      ],
    },
    {
      kind: 'p',
      text: 'Ad spend keeps flowing while one of these steps fails, because none of them stops the ad.',
    },
    {
      kind: 'quote',
      text: 'We spent ad money driving customers to a checkout that didn’t function.',
      cite: 'A merchant on the Shopify Community, December 2025, after Cloudflare broke their checkout twice',
      href: SC_CLOUDFLARE,
    },
    {
      kind: 'p',
      text: 'Research on the ad alone takes hours. Adligator, which sells ad research, puts it at [2 to 3 hours per client](' +
        ADLIGATOR +
        '), and a partner at the agency Wallaroo, quoted on [Foreplay’s page for agencies](' +
        FOREPLAY_AGENCIES +
        '), says the team uses it every week to find “insights and ad patterns that would’ve taken hours to find before”.',
    },

    { kind: 'h2', id: 'cost', text: 'What a missed fault costs an agency' },
    {
      kind: 'p',
      text: 'A fault after the click costs the client sales first and puts the agency’s retainer at risk second. Both sums use numbers the agency already reports.',
    },
    {
      kind: 'list',
      items: [
        '**Client sales at risk a day:** purchases a day from the affected ads × the average order, halved for a cautious figure, since some shoppers buy anyway.',
        '**Days until found:** on average half the gap between checks, so about 15 days with a monthly review, 3.5 with a weekly check and half a day with a daily one ([how AI customers find revenue leaks](' +
          LEAKS +
          ') explains the rule).',
        '**Cost to the client:** sales at risk a day × days until found.',
      ],
    },
    {
      kind: 'art',
      caption: 'The sum worked once, with invented figures on an invented store. Put the client’s own ad and Shopify numbers in each row.',
      art: {
        kind: 'price',
        title: 'brackenfold.example · a refused code on 4 Meta ads',
        rows: [
          { label: 'Purchases a day from the 4 ads', value: '24', note: 'From the ad report' },
          { label: 'Average order', value: '$85', note: 'From Shopify' },
          { label: 'Sales at risk a day', value: '$1,020', note: '24 × $85, halved' },
          { label: 'Days until found', value: '× 15', note: 'The average wait with a monthly review' },
        ],
        total: { label: 'Cost to the client', value: '$15,300', note: '$3,570 with a weekly check, $510 with a daily one' },
      },
    },
    {
      kind: 'p',
      text: 'Each click costs more in November. [Lebesgue’s analysis](' +
        LEBESGUE +
        ') of $22.6 million of Meta spend by the biggest spenders on its platform found the median CPM in Black Friday week 2025 was 59% above September’s, and Black Friday falls on 27 November 2026.',
    },
    {
      kind: 'p',
      text: 'The agency’s own sum is the retainer. At 49% churn a year, an agency with 20 paid advertising clients loses about 10. A client kept longer is worth its monthly fee × the extra months, and a pitch won is worth a first year of fees.',
    },
    {
      kind: 'table',
      caption: 'What 1 client is worth, kept longer or newly won. Low is a mid tier CRO retainer from Clicks Geek’s guide. High is a paid media retainer at the top of Darkroom’s $75,000 to $200,000 spend tier',
      cols: ['Kept or won for', 'Low: $5,000 a month', 'High: $18,000 a month'],
      rows: [
        ['3 months', '$15,000', '$54,000'],
        ['6 months', '$30,000', '$108,000'],
        ['12 months', '$60,000', '$216,000'],
      ],
    },
    {
      kind: 'p',
      text: 'On those numbers, a fault like Brackenfold’s found daily instead of monthly is worth $14,790 to the client, and a client kept 3 more months is worth $15,000 to $54,000 to the agency. Set either against the cost of the check, by hand or with AI customers, priced part by part in [AI customers at scale](/blog/ai-customers-at-scale).',
    },

    { kind: 'h2', id: 'by-hand', text: 'Landing page monitoring by hand' },
    {
      kind: 'p',
      text: 'Landing page monitoring means opening the page behind each live ad on a schedule and confirming it loads, matches the ad and can take an order. For an ecommerce client it runs on through the pop up, the first email and the code. By hand, the hours are checks × clients × minutes × how often, here for an example agency with 12 clients, 8 live test variants and 10 pitches a month:',
    },
    {
      kind: 'list',
      items: [
        '**Each client’s live ads, every weekday morning:** 12 clients × 10 minutes × 21 mornings = 42 hours, using the [10 minute morning check of where ads land](' +
          MORNING_CHECK +
          ').',
        '**Each client’s journey after the sign up, weekly:** 12 × 20 minutes × 4.3 weeks = 17 hours, plus 48 hours of waiting for every run.',
        '**Every live test variant, each morning it runs:** 8 × 15 minutes × 21 mornings = 42 hours.',
        '**Each prospect before the pitch:** 10 × 45 minutes = 7.5 hours.',
      ],
    },
    {
      kind: 'p',
      text: 'That is about 109 hours a month, two thirds of a full time role, or about $4,100 at the [US median wage for market research analysts](' +
        BLS +
        '), $37.87 an hour in May 2025. The hours grow with every client, ad and test, and a fault that starts at 10:00 still waits for the next morning.',
    },
    {
      kind: 'p',
      text: `${CUSTOMER_SIDE_OBSERVABILITY.definition} For an agency, it turns these checks into a routine with 3 parts, set before the first check.`,
    },
    {
      kind: 'list',
      items: [
        '**Pass marks, written in advance.** The page matches the ad and the product is in stock. The welcome email arrives within 5 minutes with the promised code, which works on the products the ad sells.',
        '**A cadence.** Ad pages and live variants every morning, each full journey weekly and after every release, and every client before the code freeze, about 20 November.',
        '**An owner for each fail.** The media buyer for ad pages, the CRO lead for variants, the client’s email lead or retention agency for flows, and the client’s developer for codes and checkout.',
      ],
    },

    { kind: 'h2', id: 'what-they-do', text: 'What AI customers do for an agency' },
    { kind: 'p', text: `**${AI_CUSTOMER.definition}**` },
    {
      kind: 'p',
      text: 'Working for an agency, each AI customer becomes a customer of 1 client, prospect or competitor, and the agency reads what it found. The stretch after the click comes down to 5 jobs.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Every live ad’s page, each morning** ([Ad landing check](/recipes/ad-landing-check)). The check: open each page from the ad’s own link, on a phone and a desktop. A pass: it loads, matches the ad and has stock. That week: the media buyer pauses or relinks each failing ad.',
        '**Each client’s journey after the sign up, weekly and after every release** ([Website audit](/recipes/website-audit)). The check: sign up through the pop up behind a live ad, wait 48 hours and take the code to checkout. A pass: the promised code arrives within minutes and works. That week: each fail goes to its owner, and the before and after into the monthly report.',
        '**Every test variant past the sign up, each morning it runs.** The check, from step 5 of the [ecommerce CRO audit template](' +
          CRO_AUDIT +
          '): sign up through each variant’s preview link and try the code it sends. A pass: every variant sends its email and a working code. That week: hours when a variant failed come out of both arms before anyone calls the test.',
        '**Each prospect before the pitch** ([Prospect intelligence](/recipes/prospect-intelligence)). The check: become a customer of each brand on the pipeline list, from the page behind its live ad. A pass: each step works as the brand promises, and every fail becomes a finding with its evidence. That week: the 3 strongest findings open the pitch, as [how to find ecommerce clients](' +
          FIND_CLIENTS +
          ') describes.',
        '**Competitors’ offers past the ad** ([Ad tracking](/recipes/ad-tracking)). The check: read the ads a client’s competitors run in public each morning, open each page and sign up where an ad offers a code. A pass: no competitor undercuts the client’s offer. That week: the creative strategist briefs against the competitor’s real offer ([ecommerce competitive intelligence](' +
          COMPETITIVE +
          ') compares other sources).',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession runs these jobs today. It makes AI customers that sign up to any company and keep every email, offer and price it sends, so an agency can find its clients’ revenue leaks, watch their competitors and prospect with proof. Its AI customers follow any brand’s live ad as new customers, sign up through the pop up and take the code to checkout, then show the agency what happened, with proof.',
    },

    { kind: 'h2', id: 'what-changes', text: 'What changes for agencies in 2026 and 2027' },
    {
      kind: 'list',
      items: [
        '**Live: Google can pick more landing pages.** [Google said in April](' +
          AI_MAX_NOTICE +
          ') that eligible Search campaigns would move to AI Max automatically, and [Common Thread Collective](' +
          COMMON_THREAD +
          ') reported that the move began on 1 September 2026. With AI Max, [Final URL expansion](' +
          FINAL_URL +
          ') is on by default for advertisers who opt in to AI Max, while migrated campaigns keep their earlier settings, so each campaign needs checking.',
        '**Live: Shopify’s checkout changes.** Scripts stopped on 30 June 2026, and [Shopify set 26 August 2026](' +
          SHOPIFY_TY +
          ') as the deadline for stores not on Plus to upgrade their Thank you and Order status pages.',
        '**Live: AI agents shop client stores.** [Shopify’s agentic storefronts](' +
          SHOPIFY_AGENTIC +
          '), which list a store’s products in AI channels such as ChatGPT, Gemini and Microsoft Copilot, are active by default for eligible stores, and [ChatGPT can show Instant Checkout](' +
          OPENAI_SHOPPING +
          ') for some eligible products and merchants.',
        '**Forecast: more AI traffic at peak.** [Adobe forecasts](' +
          ADOBE_2026 +
          ') that traffic from AI services to US retail sites will rise 130% year on year over the 2026 holiday season.',
        '**Live: clients ask for new work.** In [AgencyAnalytics’ 2026 benchmarks](' +
          AGENCYANALYTICS +
          '), a survey of 494 agency professionals, optimisation for AI search was the service clients requested most, at 66%, and 32% named a lack of perceived value over time as a reason clients left.',
      ],
    },
    {
      kind: 'p',
      text: 'Each change lands on a page, code or email the agency doesn’t control. AI customers rerun the checks the morning after each one, including on pages an AI channel sends shoppers to, and the monthly report shows each client what its customers received.',
    },

    { kind: 'h2', id: 'options', text: 'Landing page monitoring and CRO tools compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 24 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to monitor landing pages and what follows the click. Prices from each provider’s own page, 24 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Faults surface in the client’s numbers', 'Fixed ads with no pop up offer'],
        [
          'By hand: a phone, a new inbox and a sheet',
          'Any page or brand, with a strategist’s judgement',
          'Strategist hours\nUS median wage: $37.87 an hour',
          'Hours grow with every client, ad and test',
          'A few clients, or the top ads each morning',
        ],
        [
          'Ad platform checks: [Google Ads destination requirements](' + GOOGLE_DEST + ')',
          'Disapproves ads whose page doesn’t function or returns an error',
          'In the ad account',
          'Doesn’t read stock, offer or the emails after',
          'Pages that break outright',
        ],
        [
          'Synthetic monitoring: [Checkly](' + CHECKLY + '), [Datadog](' + DATADOG + ')',
          'Scripted checks of a page or path, around the clock',
          'Checkly: $0, $24 or $64 a month\nDatadog: browser tests from $12 per 1,000 runs, billed annually',
          'The paths someone scripted',
          'Uptime and checkout paths on retained clients',
        ],
        [
          'Ad research: [Foreplay](' + FOREPLAY_PRICING + '), [Panoramata](' + PANORAMATA + ')',
          'Competitors’ ads saved and tracked, plus emails, SMS and landing pages at Panoramata',
          'Foreplay: $59, $175 or $459 a month\nPanoramata: $99, $179 or $399 a month',
          'Foreplay: the ad itself\nPanoramata Startup: 20 competitors, 6 months',
          'Creative research and competitor boards',
        ],
        [
          'Testing QA: [Intelligems](' + INTELLIGEMS + ') Atlas QA',
          'Browses each test group’s preview as a shopper, desktop and mobile',
          'From $69 a month\nUnlimited: $1,279 a month billed annually',
          'Its 9 finding categories end at checkout',
          'Launching price, offer and content tests',
        ],
        [
          'Recordings: [Microsoft Clarity](' + CLARITY + ')',
          'Recordings and heatmaps of real visitors, with AI summaries',
          'Free, no traffic limits',
          'Needs the client to install it, and sees the site only',
          'Why visitors stop, once a client signs',
        ],
        [
          'AI browser agent: [ChatGPT’s cloud browser](' + CLOUD_BROWSER + ')',
          'Reads pages, clicks and fills in forms on request',
          'Paid ChatGPT plans, except Free and Go',
          'Pauses for input or sign in, with no inbox described',
          'One off checks of a page or form',
        ],
        [
          'Obsession (ours): [Ad landing check](/recipes/ad-landing-check), [Website audit](/recipes/website-audit), [Prospect intelligence](/recipes/prospect-intelligence), [Ad tracking](/recipes/ad-tracking)',
          'AI customers follow a live ad, sign up through the pop up and take the code to checkout, with proof',
          'Running now: check 5 brands free\nCredit-based plans, like Claude’s',
          'Stops at bot walls and CAPTCHAs',
          'What shoppers get after the click, sign up and checkout, kept as proof',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your agency needs to see what shoppers get after the click, the sign up and the checkout, at every client, live test and prospect, use Obsession. For a few clients with fixed ads and no pop up offers, Google’s own checks and a morning pass by hand cover most of the work.',
    },

    { kind: 'h2', id: 'when-not', text: 'When an agency doesn’t need AI customers' },
    {
      kind: 'list',
      items: [
        '**A creative only studio** that never touches the client’s pages or store.',
        '**Accounts that rarely change,** with a few evergreen ads and no pop up offer. A morning pass by hand covers them.',
        '**Uptime of a client’s own pages around the clock.** Synthetic monitoring alerts within minutes when a scripted path fails.',
        '**A client that won’t agree to checks of its store.** The agency then checks only prospects and competitors, through the public sign up.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**List every client’s live ads** with their links, sorted by yesterday’s spend, and open the top 10 on a phone.',
        '**Write the pass marks** for the 4 steps after the click: the page, the pop up, the first email and the code at checkout.',
        '**Run 1 journey per client** as a new customer, from the page behind its biggest ad, and give it 48 hours.',
        '**Put each client’s numbers into the cost sum,** and check daily where a silent day costs more than the check.',
        '**Check every client and the next 3 prospects** before the code freeze, about 20 November.',
      ],
    },
    {
      kind: 'cta',
      text: 'Name 3 brands your agency is about to pitch and 2 of its clients, with their OK. Obsession follows each one’s live ad as a new customer and sends what happened after the sign up within 4 days, with proof, free.',
      to: '/use-cases/funnel-qa-for-cro-agencies',
      label: 'Check 5 brands free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI customers for agencies' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is landing page monitoring?',
          a: 'Landing page monitoring is opening the page behind each live ad on a schedule and confirming it loads, matches the ad’s product, price and offer, and can take an order.',
        },
        {
          q: 'What does a CRO agency do?',
          a: 'A CRO agency researches why a store’s visitors don’t buy, then designs, runs and reads tests on its pages, usually on a monthly retainer. Clicks Geek’s 2026 guide puts the mid tier at $5,000 to $15,000 a month.',
        },
        {
          q: 'What does a paid social agency do?',
          a: 'A paid social agency plans, buys and reports on ads on Meta, TikTok and other social platforms. Darkroom’s 2026 guide puts paid media management at $8,000 to $25,000 a month.',
        },
        {
          q: 'What CRO tools work for Shopify stores?',
          a: 'Shopify’s reports and GA4 show where visitors drop, Microsoft Clarity shows why, a testing tool such as Intelligems runs and checks tests, and AI customers check what the store sends after the sign up.',
        },
        {
          q: 'What AI tools help a digital marketing agency?',
          a: 'AI already runs inside many agency tools: Google’s AI Max chooses landing pages, Clarity summarises recordings and Atlas QA browses test previews. AI customers add the customer’s side of each client, prospect and competitor.',
        },
        {
          q: 'Do AI customers click a client’s ads?',
          a: 'No. An AI customer opens each ad’s page from the ad’s own link, so no click is paid for and the client’s ad numbers stay true.',
        },
        {
          q: 'Can AI customers check a prospect before the pitch?',
          a: 'Yes. An AI customer signs up through the brand’s public pop up, as any customer can, waits for what arrives and takes the code to checkout without paying.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The agency, the store, the hours by hand and every figure in the 2 worked sums, other than the sourced rates, are invented examples. Checks of a client’s store need the client’s OK. This is not legal advice.',
    },
  ],

  sources: [
    { title: 'The Agency Core 2026 research report, executive summary', publisher: 'Agency Management Institute', url: AMI, date: '2026-05' },
    { title: 'How much does a marketing agency cost in 2026? Real pricing by service', publisher: 'Darkroom', url: DARKROOM, date: '2026-10-23' },
    { title: 'CRO agency retainer costs: what you’ll actually pay in 2026', publisher: 'Clicks Geek', url: CLICKSGEEK, date: '2026-04-14' },
    { title: 'Average marketing agency churn: 2026 report', publisher: 'Focus Digital', url: FOCUS, date: '2026-07-06' },
    { title: 'Cost of Pitching 2025', publisher: 'European Association of Communication Agencies (EACA)', url: EACA, date: '2025-06' },
    { title: 'About Final URL expansion in Performance Max', publisher: 'Google Ads Help', url: PMAX_FUE },
    { title: 'Schedule data feed uploads', publisher: 'Meta for Developers', url: META_FEEDS },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Shopify Scripts will be deprecated on June 30, 2026', publisher: 'Shopify developer changelog', url: SCRIPTS, date: '2026-04-09' },
    { title: 'Atlas QA', publisher: 'Intelligems docs', url: ATLAS_QA },
    { title: 'Cloudflare broke our checkout twice', publisher: 'Shopify Community', url: SC_CLOUDFLARE, date: '2025-12-06' },
    { title: 'How to pitch competitive ad intelligence to agency clients', publisher: 'Adligator', url: ADLIGATOR, date: '2026-03-15' },
    { title: 'Foreplay for agencies', publisher: 'Foreplay', url: FOREPLAY_AGENCIES },
    { title: 'Are Meta ads worth it on Black Friday? CPM and ROAS data', publisher: 'Lebesgue', url: LEBESGUE, date: '2026-10-16' },
    { title: 'Market research analysts: Occupational Outlook Handbook', publisher: 'US Bureau of Labor Statistics', url: BLS },
    { title: 'Dynamic Search Ads upgrade to AI Max', publisher: 'Google', url: AI_MAX_NOTICE, date: '2026-04' },
    { title: 'Google AI Max migration went live September 1', publisher: 'Common Thread Collective', url: COMMON_THREAD, date: '2026-09-02' },
    { title: 'About Final URL expansion in Search', publisher: 'Google Ads Help', url: FINAL_URL },
    { title: 'Non-Plus: upgrading and replacing your Thank you and Order status pages', publisher: 'Shopify Help Center', url: SHOPIFY_TY },
    { title: 'Shopify agentic storefronts', publisher: 'Shopify Help Center', url: SHOPIFY_AGENTIC },
    { title: 'Shopping with ChatGPT search', publisher: 'OpenAI Help Center', url: OPENAI_SHOPPING },
    { title: 'Adobe: U.S. holiday shopping season to hit record $275.1 billion online, rising 6.7% YoY', publisher: 'Adobe', url: ADOBE_2026, date: '2026-09-28' },
    { title: '2026 marketing agency benchmarks report', publisher: 'AgencyAnalytics', url: AGENCYANALYTICS, date: '2026' },
    { title: 'Destination requirements', publisher: 'Google Advertising Policies Help', url: GOOGLE_DEST },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
    { title: 'Pricing: Synthetic Testing and Monitoring', publisher: 'Datadog', url: DATADOG },
    { title: 'Pricing', publisher: 'Foreplay', url: FOREPLAY_PRICING },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Pricing', publisher: 'Intelligems', url: INTELLIGEMS },
    { title: 'Microsoft Clarity', publisher: 'Microsoft', url: CLARITY },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: CLOUD_BROWSER },
  ],
  related: [
    'why-ai-customers-matter',
    'ai-customers-find-revenue-leaks',
    'ai-customers-at-scale',
    'recipe:ad-landing-check',
    'recipe:website-audit',
    'recipe:prospect-intelligence',
    'recipe:ad-tracking',
  ],
}

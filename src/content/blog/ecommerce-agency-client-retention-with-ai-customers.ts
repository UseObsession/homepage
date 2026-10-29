import type { BlogPost } from './types'

/* Agency client retention, 29 Oct 2026, from _research/seo/plan/agency-services-29oct/BRIEF.md and PLAN.md (Seun's go,
   "Go, recommended"). How an ecommerce agency stands out by how it manages and grows the clients it already has: show each
   brand what its customers got this week, with the email, the screenshot and the time, before the brand finds it. Winning
   clients is the sister guide's job (get-clients-as-a-marketing-agency), linked and never repeated.
   Primary phrase "agency client retention" from Google autocomplete, US and UK, 29 Oct 2026 (typed exactly); secondaries
   from the same files in the brief's folder. "How to stand out from other agencies" isn't typed, so it sits in the H1 only.
   Read at source on 29 Oct 2026: Klaviyo's flow analytics help page (updated 7 Oct 2026), Checkly's pricing, Shoptest's
   home and agencies pages and its Shopify App Store listing, T-ROC's mystery shopping guide (4 May 2026) and
   CustomerOptix's mystery shopping page; and, from research.md beside the brief, re-opened the same day: Focus Digital's
   churn report (6 Jul 2026, no sample size), Everything PR's report of Setup's survey (updated 7 Sep 2026; no survey year
   claimed), AgencyAnalytics' 2025 release (10 Sep 2025), the r/FacebookAds post of 23 Oct 2026 (its one sentence quoted
   word for word, checked in the Arctic Shift archive), Klaviyo's benchmarks, First Pier's packages and Web Systems'
   retainer page. Left out per research.md: CallRail's figures, the 3.2-year tenure, Moxo, Glaze and Blackbelt prices.
   Our own figures are the October pilot for 4 agencies and the 26 Oct walk, as patterns (no small tallies, Seun 29 Oct),
   anonymised. No agency, store or person we worked with is named. Northgate, its client stores and every figure in the
   business case are invented, at .example addresses. Texts are left out of every claim (SMS isn't built, 27 Oct). No dashes. */

const KL_FLOWS = 'https://help.klaviyo.com/hc/en-us/articles/115002779351'
const CHECKLY = 'https://www.checklyhq.com/pricing/'
const SHOPTEST_AGENCIES = 'https://shoptest.ai/agencies'
const SHOPTEST_APP = 'https://apps.shopify.com/shoptest'
const TROC = 'https://trocglobal.com/mystery-shopping-services/'
const CUSTOMEROPTIX = 'https://www.customeroptix.com/services/mystery-shopping'
const FOCUS = 'https://focus-digital.co/?p=6135'
const SETUP_EPR = 'https://everything-pr.com/the-cmo-agency-trust-gap-2026-why-clients-leave-and-why-agencies-dont-see-it-coming'
const AA_2025 = 'https://agencyanalytics.com/company/newsroom/2025-marketing-agency-benchmarks-report'
const R_BF = 'https://www.reddit.com/r/FacebookAds/comments/1xdt2he/'
const KL_BENCH = 'https://www.klaviyo.com/products/email-marketing/benchmarks'
const FIRSTPIER = 'https://www.firstpier.com/packages'
const WEBSYSTEMS = 'https://web-systems.solutions/en/shopify-retainer'

export const post: BlogPost = {
  slug: 'ecommerce-agency-client-retention-with-ai-customers',
  title: 'How ecommerce agencies stand out and keep clients: AI customers on every client’s store',
  dek: 'The ecommerce agencies that keep clients longest show each brand what its customers got this week, before the brand asks. The services to sell by agency type, the weekly routine that runs them across every client, and the business case in an agency’s own numbers.',
  metaTitle: 'Agency client retention: how ecommerce agencies stand out',
  description:
    'Agency client retention for ecommerce agencies: show each brand what its customers got each week, with the services to sell and the case in your numbers.',
  answer:
    'Agency client retention comes down to what a brand can see, so the ecommerce agencies that stand out show each client what its customers got this week, before the client finds a problem. AI customers make that a service an agency can sell: they sign up, shop and wait at every client’s store, its rivals and the pages behind its ads, and keep each email and screenshot with its time. To run it across every client, use Obsession: its AI customers report what each store sends, from every email to every price, at the hours the agency chooses.',
  primaryKeyword: 'agency client retention',
  keywords: [
    'marketing agency client management',
    'agency account management',
    'productized agency services',
    'marketing agency packages',
    'agency retainer model',
    'white label services for agencies',
    'ecommerce retention agency',
  ],
  category: 'For agencies',
  published: '2026-10-29',
  updated: '2026-10-29',
  readingMinutes: 17,
  order: 0,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'northgate.example · Monday sweep',
      period: 'Week of 26 October · each store shopped as a new customer',
      cols: ['Client', 'Customers got', 'Status'],
      rows: [
        { name: 'Fernhill', cells: ['Every email on time', 'Pass'], tone: 'ok' },
        { name: 'Larkspur', cells: ['No checkout reminder', 'Fix sent'], tone: 'fail' },
        { name: 'Calder', cells: ['Sale code refused', 'Fix sent'], tone: 'fail' },
        { name: 'Wrenfold', cells: ['Basket email 10 h late', 'Watching'], tone: 'late' },
        { name: 'Brightmoor', cells: ['Ad page sold out', 'Ad paused'], tone: 'fail' },
        { name: 'Halden', cells: ['Chatbot wrong on refunds', 'Fix drafted'], tone: 'fail' },
        { name: 'Pennant', cells: ['Rival: 25% off Friday', 'Brief sent'], tone: 'info' },
      ],
      notes: [
        'Each finding opens to its email or screenshot and the time it was seen.',
        'Every fix is checked again before the next report.',
        'Northgate and its client stores are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Ecommerce agencies can stand out from other agencies by how they look after the brands they already have. Founders and account leads at retention, CRO (conversion rate optimisation), paid ads and Shopify Plus agencies can show each client what its customers got that week. The proof is the email, the screenshot and the time, in the client’s hands before it finds a problem itself. Each of those checks becomes a service with its own scope, schedule and fee.',
    },
    {
      kind: 'p',
      text: 'Winning the brand comes first, and its method is in [how to get clients as a marketing agency](/blog/get-clients-as-a-marketing-agency). Keeping the brand, and growing what it pays, starts the week it signs.',
    },

    { kind: 'h2', id: 'why-brands-leave', text: 'Why brands leave agencies' },
    {
      kind: 'p',
      text: 'Clients leave some kinds of agency much faster than others. In [Focus Digital’s churn report of 6 July 2026](' +
        FOCUS +
        '), retainer-based agencies lose 18% of their clients a year and keep the average client for 56 months. Paid ads agencies lose 49% a year, on contracts of 3 to 6 months. The report gives no sample size, so its figures are one published benchmark.',
    },
    {
      kind: 'stat',
      value: '49%',
      label: 'of clients lost each year by paid ads agencies, against 18% at retainer-based agencies',
      source: 'Focus Digital, 6 July 2026',
      href: FOCUS,
    },
    {
      kind: 'p',
      text: 'Brands and agencies disagree about why. Setup’s annual Marketing Relationship Survey asked more than 400 brand and agency professionals, and [Everything PR reported the results in September 2026](' +
        SETUP_EPR +
        '). In it, the top reason clients gave for ending an agency relationship was dissatisfaction with delivery, cited by 48% of them, up 14 points on the year before. Agencies ranked that reason seventh, and put a leadership change at the client and budget cuts first and second.',
    },
    {
      kind: 'p',
      text: 'Agencies see reporting as part of the answer. AgencyAnalytics, which sells reporting software to agencies, surveyed more than 220 agency leaders for [its 2025 benchmarks](' +
        AA_2025 +
        '). Of those leaders, 70% said client reporting plays a critical role in keeping clients, and 43% reported average client lifespans of 2 to 5 years.',
    },
    {
      kind: 'p',
      text: 'The gap shows at peak. A Meta ads manager at a small agency, [posting in r/FacebookAds on 23 October 2026](' +
        R_BF +
        '), described last Black Friday at one of the agency’s bigger accounts. Add-to-carts and started checkouts held level with the week before while purchases fell, and the client asked why the ads had stopped converting. The store’s checkout was hosted, with no session recordings, so the ads manager had no way to show where the sales went.',
    },
    {
      kind: 'quote',
      text: 'The client cut spend in December over it.',
      cite: 'A Meta ads manager at a small agency, on r/FacebookAds, 23 October 2026',
      href: R_BF,
    },
    {
      kind: 'p',
      text: 'A client report built from the platforms an agency runs shows what those platforms sent. [Klaviyo’s flow analytics](' +
        KL_FLOWS +
        '), for example, show each message’s delivered count, open rate and click rate. They also show its conversion rate and the revenue it earned over the last 30 days. Those numbers describe what the platform sent. What a new customer received, whether the code worked at checkout and what the page behind an ad showed that morning sit on the customer’s side, in none of those reports.',
    },
    {
      kind: 'p',
      text: 'Flows earn far more than their share of sends. [Klaviyo’s 2026 benchmarks](' +
        KL_BENCH +
        '), drawn from more than 183,000 Klaviyo customers, show flows earning nearly 41% of email revenue from 5.3% of sends.',
    },

    { kind: 'h2', id: 'standing-out', text: 'What standing out looks like now' },
    {
      kind: 'p',
      text: 'The agency that stands out brings the finding first. Its weekly note tells the client what a new customer got from the store that week. It says what broke, who fixed it and when, and it arrives before any of the client’s customers complain.',
    },
    {
      kind: 'note',
      title: 'A note from an agency to an invented client, the day after a fix',
      text: 'Morning Priya. In this week’s check of larkspur.example, a new customer started a checkout at 09:10 on Saturday with its email typed in. By 09:10 on Monday no reminder had arrived, in the inbox or in spam. The cause was a flow filter left over from the summer sale. With your OK at 14:05 yesterday we removed it, and a new checkout at 09:00 today got its reminder 62 minutes later, with the item, its price and a link back. Both runs are attached with their times.',
    },
    {
      kind: 'p',
      text: 'The client can open the email and check the time itself. The finding is about its own store, so it reads as work done for that brand alone. Agencies that [prove agency value to clients](/agencies) this way every week give the client a reason to stay that a revenue chart can’t.',
    },
    {
      kind: 'p',
      text: 'There is almost always something to bring. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. This month Obsession ran a pilot for 4 agencies on the stores they pitch and serve. Between 21 and 24 October 2026, its AI customers signed up, browsed, left a basket and started a checkout, up to 4 journeys at each store. Each journey had its own inbox, and every inbox was watched for 48 hours.',
    },
    {
      kind: 'list',
      items: [
        'Every store in the pilot had at least one gap.',
        'Nearly half sent nothing in the 48 hours after a shopper left a checkout with their email typed in.',
        'Most first reminders came within 4 hours, the fastest after 30 minutes, and some about 10 hours later.',
        'Most stores put a CAPTCHA or bot check in front of at least one step.',
      ],
    },
    {
      kind: 'p',
      text: 'The page and the cart break too. On 26 October 2026, an AI agent working for Obsession walked the client stores that Shopify agencies and freelance experts chose to show on their own websites. Shopping on a phone as a signed-out new customer, it found problems such as these:',
    },
    {
      kind: 'list',
      items: [
        'A help button sitting over Check out on a phone.',
        'Free shipping on the banner, then a spend threshold for it in the cart.',
        'A subscription price on the page that the cart didn’t honour.',
        'A free gift promised on the page that never appeared in the cart.',
        'A sale banner still showing the day after the sale ended.',
        'A protection charge in the cart that the shopper hadn’t chosen.',
      ],
    },
    {
      kind: 'p',
      text: 'Each of these could have been the line in a client’s weekly note, found by the agency before the brand’s own customers met it.',
    },

    { kind: 'h2', id: 'services-menu', text: 'Productized agency services, by agency type' },
    {
      kind: 'p',
      text: 'A productized agency service is a fixed piece of work with a set scope, schedule and price, sold the same way to every client. Each service here is a check run as a new customer of the client’s store, its rivals or the pages behind its ads. The work is done by AI customers. An AI customer is an AI agent that becomes a real customer of a company, with its own inbox, phone number and browser, and keeps what the company sends and shows it as evidence ([what AI customers are](/blog/ai-customers)).',
    },
    {
      kind: 'p',
      text: 'Agencies already sell fixed-price work. [First Pier’s packages page](' +
        FIRSTPIER +
        ') lists a Shopify Growth Diagnostic at $1,950 over 10 business days and a Klaviyo Core Flows Sprint at $4,900 over 3 weeks. [Web Systems](' +
        WEBSYSTEMS +
        ') builds a full test purchase into its Shopify retainer every month, from catalogue to thank-you page, with discount codes, pop-ups and transactional emails checked. Each service in the table follows the same pattern: a fixed scope, a set schedule and a report the client can check.',
    },
    {
      kind: 'table',
      caption: 'Services an ecommerce agency can sell to the brands it keeps. Each runs as a new customer of the client’s store, its rivals or its ads',
      cols: ['Service', 'What it checks', 'How often', 'What the client sees'],
      rows: [
        ['Weekly flow log', 'Every email after sign-up, basket and checkout', 'Weekly, and after each launch', 'What arrived, when, and what never came'],
        ['Code check', 'The pop-up code and each sale code at checkout', 'Before and during each sale', 'Each code accepted or refused'],
        ['Rival watch', 'Every email and offer a rival sends', 'As each one arrives', 'Rival offers, dated, beside the client’s'],
        ['Price and offer watch', 'Rival prices, offers and delivery terms', 'Every morning', 'Each change, before and after'],
        ['Release check', 'Sign-up, forms, emails and checkout', 'After every release', 'Pass or break, with the screenshot'],
        ['Ad landing check', 'The page behind every live ad', 'Every morning', 'Ads sending clicks to a page that can’t sell'],
        ['Partner check', 'Affiliate links and codes, tried in the basket', 'Every Monday', 'Out-of-date codes, with a note drafted'],
        ['AI answers check', 'What AI assistants tell shoppers', 'Every Monday', 'Wrong facts, traced to their page'],
        ['Chatbot check', 'The store’s chat on refunds, prices and stock', 'Daily, and after each update', 'Wrong answers, set against the policy'],
        ['Renewal check', 'The full journey, and the 2 closest rivals', 'Before each review', 'What changed since the last review'],
        ['Monthly check', 'Sign-up, basket and checkout', 'Once a month', 'A short note of what changed'],
      ],
    },
    {
      kind: 'p',
      text: 'Each agency type sells the services that sit closest to the work it is already paid for. Each one links to the Obsession recipe behind it: a ready-made check with its steps, its schedule and what it reports.',
    },

    { kind: 'h3', id: 'retention', text: 'Retention and email agencies' },
    {
      kind: 'list',
      items: [
        '**A weekly flow log** ([Mystery shopper](/recipes/mystery-shopper)). A new customer signs up, leaves a basket and starts a checkout at each client store every week and after every launch. The client sees what arrived, when and what never came, beside the email platform’s revenue report, in the format set out in [proof that every flow fired](/blog/show-clients-every-flow-fired).',
        '**Welcome and Black Friday code checks** ([Website audit](/recipes/website-audit)). The pop-up code and each sale code are tried at checkout on the days that matter, Friday 27 November 2026 included. The client sees each code accepted or refused, with the screenshot.',
        '**A rival watch** ([Email and SMS tracking](/recipes/email-sms-tracking)). An AI customer on each rival’s list keeps every email and offer it sends. The client sees its rivals’ Black Friday plans as they land, beside its own.',
        '**What AI assistants tell shoppers** ([Listings and AI answers](/recipes/listings-ai-answers)). Every Monday, the questions shoppers ask ChatGPT and other assistants about the brand, with each wrong answer traced to the page it came from. The method is in [what ChatGPT says about your store](/blog/what-chatgpt-says-about-your-store).',
      ],
    },
    {
      kind: 'p',
      text: 'For an ecommerce retention agency, these sit on top of the flows and campaigns it already runs. The full case is in [why a retention marketing agency needs AI customers](/blog/ai-customers-for-retention-agencies).',
    },

    { kind: 'h3', id: 'cro', text: 'CRO agencies' },
    {
      kind: 'list',
      items: [
        '**Release checks** ([Website audit](/recipes/website-audit)). After every release, a fresh customer signs up, fills in each form, opens every email and link, and goes through checkout. The client sees a pass or a break for each step, with the screenshot.',
        '**The pop-up and the code at checkout** ([Website audit](/recipes/website-audit)). Each test variant’s pop-up is signed up through and its code tried at checkout, every morning the test runs. A variant that stops sending its code is found before anyone calls the test, as step 5 of the [ecommerce CRO audit template](/blog/ecommerce-cro-audit-template) describes.',
        '**Offers and prices after each deadline** ([Price watch](/recipes/price-watch)). Every rival’s prices, offers and delivery terms are checked each morning beside the client’s own, so the morning after a sale ends shows who moved first.',
        '**Rival offers** ([Competitor tracking](/recipes/competitor-tracking)). Each rival’s emails, offers, price changes and public ads on one timeline per rival, for the next round of test ideas.',
      ],
    },

    { kind: 'h3', id: 'paid-ads', text: 'Paid ads and performance agencies' },
    {
      kind: 'list',
      items: [
        '**The page behind every live ad, each morning** ([Ad landing check](/recipes/ad-landing-check)). Each page is opened from the ad’s own link on a phone and a desktop, so no click is paid for. It is checked for loading, offer, price and stock. The client sees every ad sending clicks to a page that can’t sell, with the fix drafted. The routine by hand is the [10-minute morning check of where ads land](/blog/where-your-ads-land-morning-check).',
        '**Rival ads and their pages** ([Ad tracking](/recipes/ad-tracking)). The ads a client’s rivals run in public, read each morning and opened to their page, price and code. The client sees each new rival offer beside its own.',
        '**Affiliate and partner links and codes** ([Partner checks](/recipes/partner-checks)). Every partner’s link is followed to the client’s store each Monday and its code tried in the basket. The client sees each out-of-date code or banner, with a note to the partner drafted.',
      ],
    },
    {
      kind: 'p',
      text: 'The case for CRO and paid ads agencies in full is in [why CRO and performance agencies need AI customers](/blog/ai-customers-for-cro-agencies).',
    },

    { kind: 'h3', id: 'shopify-plus', text: 'Shopify Plus and build agencies' },
    {
      kind: 'list',
      items: [
        '**Every release checked as a customer** ([Website audit](/recipes/website-audit)). A new customer runs sign-up, forms, emails and checkout after each deploy. The client sees the release pass, or the break with its screenshot, before its own customers meet it.',
        '**Chat and AI agent answers that changed overnight** ([Drift watch](/recipes/drift-watch)). The store’s chat or AI agent is asked its hardest questions every morning and within the hour of any update. The client sees every answer that changed, with the before and after.',
        '**The store’s chat and AI agent** ([Support bot check](/recipes/support-bot-check), [Sales agent check](/recipes/sales-agent-check)). The chat is asked what customers ask about refunds, delivery, prices and stock, and each answer is checked against the policy and the price list. The client sees each wrong answer with the right one drafted. The questions to start with are in [how to test a chatbot on your store](/blog/test-store-chatbot-returns-policy).',
      ],
    },

    { kind: 'h3', id: 'every-agency', text: 'For every agency' },
    {
      kind: 'list',
      items: [
        '**A renewal check before each review** ([Mystery shopper](/recipes/mystery-shopper), [Competitor tracking](/recipes/competitor-tracking)). A week before a client’s review or renewal, AI customers take the store’s full journey again and shop its 2 closest rivals. The account lead walks into the call with what changed for the client’s customers since the last review, what was fixed, and what its rivals now offer. A slipping account shows up here before the client says so.',
        '**A monthly check for brands that won’t pay a full retainer.** The same sign-up, basket and checkout once a month, with a short note of what changed. It keeps a smaller brand on the books and makes the step up to a retainer an easy one.',
      ],
    },

    { kind: 'h2', id: 'every-client', text: 'Agency account management across every client' },
    {
      kind: 'p',
      text: 'Marketing agency client management runs on the same 4 steps every week, for every client: sweep, report, fix and check again.',
    },
    {
      kind: 'art',
      caption: 'The weekly routine an invented agency runs for every client: sweep, report, fix, then check the same step again.',
      art: {
        kind: 'flow',
        title: 'northgate.example · weekly routine',
        steps: [
          { label: 'Sweep', detail: 'Each client store shopped as a new customer', tone: 'info' },
          { label: 'Report', detail: 'Monday: each finding with its email, screenshot and time', tone: 'info' },
          { label: 'Fix', detail: 'The owner fixes it, with the client’s OK', tone: 'info' },
          { label: 'Re-check', detail: 'The same check again, for the before and after', tone: 'ok' },
        ],
        foot: 'Checks run weekly and after every launch, and a failed one reaches the account lead that morning.',
      },
    },
    {
      kind: 'list',
      items: [
        '**One weekly sweep.** Every client store in one run, at the same time each week, plus a run after every launch the client tells the agency about.',
        '**The Monday report.** One page per client: what its customers got, each finding with the email or screenshot and the time it was seen, and who owns each fix.',
        '**A before and after for every fix.** The same sign-up, basket or checkout runs again once the fix is live, so the report shows the break and the fix side by side.',
        '**An alert the morning a check fails.** Checks run weekly and after every launch, or as often as the agency sets, and a failed one reaches the account lead that morning.',
        '**Reading times on the agency’s clock.** Read at 4, 12, 24 or 48 hours, or keep the AI customers watching for weeks. Call an email missing only once the chosen window has closed, 48 hours for most flows.',
        '**In the agency’s name.** Reports can carry the agency’s name and logo for every brand it serves.',
        '**From 10 clients to 300.** The routine stays the same as the client list grows.',
      ],
    },
    {
      kind: 'art',
      caption: 'One fix at an invented client store, before and after, with the time of every step.',
      art: {
        kind: 'log',
        title: 'larkspur.example · a fix',
        who: 'An AI customer working for Northgate, the store’s agency',
        status: { tone: 'ok', text: 'Fixed' },
        rows: [
          { time: 'Sat 09:10', text: 'Starts a checkout, leaves before paying', detail: 'Email typed in, a £64 candle set', tone: 'info' },
          { time: 'Mon 09:10', text: 'No reminder in 48 hours', detail: 'Inbox and spam both empty', tone: 'fail' },
          { time: 'Mon 11:30', text: 'Cause found', detail: 'A flow filter left from the summer sale', tone: 'info' },
          { time: 'Mon 14:20', text: 'Fix live', detail: 'Approved by the client at 14:05', tone: 'info' },
          { time: 'Tue 09:00', text: 'Same checkout, new AI customer', detail: 'Email typed in, the same candle set', tone: 'info' },
          { time: 'Tue 10:02', text: 'Reminder arrives', detail: 'The item, its price and a link back', tone: 'ok' },
        ],
        foot: 'The next report carries both runs, so the client sees the break and the fix side by side.',
      },
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your rivals and prospect with proof. For an agency, every client store, rival and live ad runs on one routine:',
    },
    {
      kind: 'list',
      items: [
        '**An AI customer for each job at each store.** Each has its own inbox, phone number and browser, so every email traces back to the one action that triggered it.',
        '**Everything a customer meets.** The emails, the page behind each ad, prices and offers, the basket, checkout and codes, the store’s chat and AI agent, and what AI assistants say about the brand.',
        '**Bot checks.** Where a store puts a CAPTCHA in front of a step, the report names the step it couldn’t test, so the agency knows exactly what to check by hand.',
        '**Scale.** It runs at 300, 1,000 or 5,000 brands a month, and it is built for millions. The first agency to finish the October pilot is moving to 300 brands a month.',
        '**Pricing.** Credit-based plans, like Claude’s.',
      ],
    },

    { kind: 'h2', id: 'business-case', text: 'The business case in your own numbers' },
    {
      kind: 'p',
      text: 'Put your own figures in each line. The example agency, Northgate, has 20 clients. Its retainers are $3,000 a month at the low end and $6,000 at the high end, and every number in it is invented. At Focus Digital’s 18% a year, an agency that size loses about 4 clients a year, and at the 49% it reports for paid ads, about 10.',
    },
    {
      kind: 'list',
      items: [
        '**Clients kept.** Low: 1 client who would have left stays on at $3,000 a month. High: 2 clients stay on at $6,000. That is $3,000 or $12,000 a month kept.',
        '**Add-ons sold, at the agency’s own prices.** Low: 5 clients add a weekly flow log at $400 a month. High: 10 clients add a package at $800 a month: the flow log, a rival watch and an ad landing check. That is $2,000 or $8,000 a month added.',
        '**Hours back.** By hand, a flow log and one rival check take 30 to 45 minutes a client each week. Across 20 clients that is 10 to 15 hours a week, or 520 to 780 hours a year, back for account work.',
      ],
    },
    {
      kind: 'table',
      caption: 'The invented 20-client agency over 3, 6 and 12 months, low to high. Put your own retainer, add-on price and minutes in each line',
      cols: ['Over', 'Clients kept', 'Add-ons sold', 'Revenue in all', 'Hours back'],
      rows: [
        ['3 months', '$9,000 to $36,000', '$6,000 to $24,000', '$15,000 to $60,000', '130 to 195'],
        ['6 months', '$18,000 to $72,000', '$12,000 to $48,000', '$30,000 to $120,000', '260 to 390'],
        ['12 months', '$36,000 to $144,000', '$24,000 to $96,000', '$60,000 to $240,000', '520 to 780'],
      ],
    },
    {
      kind: 'p',
      text: 'Set the yearly cost of any option against those totals, whether it is a person’s hours or a tool. At the low end, keeping 1 client for 3 more months brings in $9,000 before a single add-on is sold. [AI customers at scale](/blog/ai-customers-at-scale) works out the cost of each AI customer line by line.',
    },

    { kind: 'h2', id: 'options', text: 'Ways to check every client, compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 29 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways an agency can see what each client’s customers get, from each provider’s own pages on 29 October 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: the platform reports alone', 'Costs no time', 'Free', 'The client finds a break first', 'Clients whose stores rarely change'],
        [
          'By hand: the team, a new inbox per journey and a sheet',
          'Any store, judged by someone who knows the client',
          'Staff hours',
          'Hours grow with every client and every 48-hour wait',
          'Up to about 5 clients',
        ],
        [
          'QA monitors: [Checkly](' + CHECKLY + '), [Shoptest](' + SHOPTEST_AGENCIES + ')',
          'Checkly: scripted browser and uptime checks, around the clock\nShoptest: scheduled cart, checkout and search journeys on Shopify',
          'Checkly: $0, $24 or $64 a month, billed annually\nShoptest: [$99, $249 or $499 a month](' + SHOPTEST_APP + '), 30 days free',
          'Checkly: the paths someone writes in code\nShoptest: Shopify only, stops before payment',
          'Fast alerts on a scripted path: Checkly every 2 minutes or faster, Shoptest every 15 minutes to 3 hours by plan',
        ],
        [
          'Email platform reports: [Klaviyo flow analytics](' + KL_FLOWS + ')',
          'What was delivered, opened, clicked and earned',
          'In the brand’s Klaviyo plan',
          'A flow that never started, and what the customer saw',
          'Revenue reporting',
        ],
        [
          'Mystery shopping firms: [T-ROC](' + TROC + '), [CustomerOptix](' + CUSTOMEROPTIX + ')',
          'Trained people visit stores, call and check websites',
          'T-ROC: $40 to $150 a store visit\nCustomerOptix: from $45',
          'T-ROC: 4 to 6 visits per store a quarter suggested\nCustomerOptix: reports in as little as 48 to 72 hours',
          'Shop floors, phone lines and websites',
        ],
        [
          'Obsession (ours): [Delivery monitoring](/recipes/delivery-monitoring), [Mystery shopper](/recipes/mystery-shopper), [Website audit](/recipes/website-audit), [Ad landing check](/recipes/ad-landing-check), [Competitor tracking](/recipes/competitor-tracking), [Price watch](/recipes/price-watch)',
          'AI customers sign up, shop and wait at every client store, its rivals and its ads, and keep what arrives',
          'Running now: 5 stores or 5 brands checked free\nCredit-based plans, like Claude’s',
          'Leaves the fix and the client call to the agency',
          'Every client checked as a customer each week, with proof the client can open',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your agency wants every client’s store checked as a customer each week, use Obsession. Each finding comes with the email or screenshot and its time, and each fix with a before and after. The same AI customers watch each client’s rivals and open the page behind every live ad. A QA monitor suits a minute-by-minute alert on one checkout, the platform’s report stays the source for revenue, and a mystery shopping firm covers a shop floor. With 5 clients or fewer whose stores rarely change, the team can run the checks by hand.',
    },

    { kind: 'h2', id: 'when-not', text: 'When an agency doesn’t need AI customers' },
    {
      kind: 'list',
      items: [
        '**A handful of clients whose stores rarely change.** At 30 to 45 minutes a client a week, the team can check 5 clients by hand in under 4 hours.',
        '**The question is why something broke.** The cause sits inside the client’s accounts, where [an email marketing audit](/blog/email-marketing-audit) finds it.',
        '**Work a customer never sees,** such as a rebrand, a data project or bookkeeping for the store.',
        '**Uptime minute by minute.** A synthetic monitor, which runs a scripted visit to a page around the clock, alerts within minutes when a page goes down.',
        '**A client that won’t agree to checks of its store.** Watch its rivals through the public sign-up until it does.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start with 5 clients this week' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Pick the 5 clients whose retainers come up for review next, and ask each for its OK to check its store as a customer.',
        'Write a pass mark for each check before the first run. For example, the welcome email arrives within 5 minutes with the promised code, and the checkout reminder within the flow’s delay plus 1 hour.',
        'Run one sweep: sign up, leave a basket and start a checkout at each store, read at the hours you choose and judge at 48 hours.',
        'Send each client its first Monday report before it asks, with the email, the screenshot and the time behind each finding.',
        'Price one service from the menu at your own rates, and offer it on the next review call.',
      ],
    },
    {
      kind: 'p',
      text: 'The Obsession team helps your agency set up its first batch: the client stores, the journeys at each and where the reports go. The free checks report within 4 days. Once your own list runs, your agency chooses when to read each store: at 4, 12, 24 or 48 hours, or for as long as it wants to keep watching.',
    },
    {
      kind: 'cta',
      text: 'For retention agencies: name 5 stores, clients with their OK or prospects you’re about to pitch. Obsession’s AI customers become each store’s new customer for 48 hours: the pop-up and its code, the welcome email and a basket. What happened reaches you within 4 days, with proof.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Check 5 stores free',
    },
    {
      kind: 'cta',
      text: 'For CRO and performance agencies: name 5 brands, clients with their OK or brands you’re about to pitch. Obsession’s AI customers open the page behind each brand’s live ad as new customers, sign up through the pop-up and take the code to checkout. They watch the inbox for 48 hours, and what happened after the sign-up reaches you within 4 days, with proof.',
      to: '/use-cases/funnel-qa-for-cro-agencies',
      label: 'Check 5 brands free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about agency client retention' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do agencies retain clients?',
          a: 'By showing each client, every week, what the work changes for its customers. Check the client’s store as a new customer each week, and report each finding with the email or screenshot and its time. Add a before and after for every fix, and services that grow as the account does.',
        },
        {
          q: 'What services should an ecommerce agency offer?',
          a: 'Services the client can see working. A retention agency can add a weekly flow log, code checks before each sale, a rival watch and a check of what AI assistants say about the brand. A CRO agency can add release checks and a price and offer watch. A paid ads agency can check the page behind every live ad each morning, and a Shopify Plus agency can check every release and the store’s chatbot.',
        },
        {
          q: 'What is a productized agency service?',
          a: 'A fixed piece of work with a set scope, schedule and price, sold the same way to every client. A weekly flow log at a monthly fee is one: the client knows what is checked, how often and what the report shows.',
        },
        {
          q: 'What should marketing agency packages include?',
          a: 'A core retainer for the main work, plus add-ons the client can check, each with a clear scope and schedule. A weekly flow log, a rival watch and an ad landing check are examples. A smaller monthly check suits brands that won’t pay a full retainer.',
        },
        {
          q: 'What are white label services for agencies?',
          a: 'Services a supplier runs that an agency sells under its own name. Obsession’s reports can carry the agency’s name and logo, and with white label the page behind each finding carries the agency’s name too.',
        },
        {
          q: 'How does the agency retainer model work?',
          a: 'A brand pays a monthly fee for an agreed scope of work, often with a minimum term. Add-ons with their own scope and price sit on top, so the account can grow without rewriting the retainer. Focus Digital’s July 2026 report puts the average stay of a retainer client at 56 months.',
        },
        {
          q: 'Does an agency need a client’s OK to check its store?',
          a: 'Yes. Get each client’s OK before checking its store, and keep the test sign-ups out of its reporting. For rivals, use only the public sign-up any customer can use. This is not legal advice.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the figures',
      text: 'The October pilot ran between 21 and 24 October 2026 for 4 agencies, which chose the stores. Each journey had its own new customer, inbox and 48-hour window, and stopped before payment. On 26 October 2026 an AI agent working for Obsession walked client stores that Shopify agencies and freelance experts show on their own sites, as far as the first checkout page. No store, brand or agency is named. Northgate, its clients, the times and every figure in the business case are invented.',
    },
  ],

  sources: [
    { title: 'Average marketing agency churn: 2026 report', publisher: 'Focus Digital (Chase McGee)', url: FOCUS, date: '2026-07-06' },
    { title: 'The CMO agency trust gap 2026: why clients leave and why agencies don’t see it coming', publisher: 'Everything PR, reporting Setup’s Marketing Relationship Survey', url: SETUP_EPR, date: '2026-09-07' },
    { title: '2025 marketing agency benchmarks report', publisher: 'AgencyAnalytics', url: AA_2025, date: '2025-09-10' },
    { title: 'Got blamed for a BF drop that wasn’t my ads', publisher: 'r/FacebookAds', url: R_BF, date: '2026-10-23' },
    { title: 'Understanding flow analytics', publisher: 'Klaviyo Help Center', url: KL_FLOWS, date: '2026-10-07' },
    { title: '2026 email marketing benchmarks by industry', publisher: 'Klaviyo', url: KL_BENCH, date: '2026' },
    { title: 'Packages', publisher: 'First Pier', url: FIRSTPIER },
    { title: 'Shopify retainer', publisher: 'Web Systems', url: WEBSYSTEMS },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
    { title: 'Shoptest for agencies', publisher: 'Shoptest', url: SHOPTEST_AGENCIES },
    { title: 'Shoptest: Monitoring & Alerts', publisher: 'Shopify App Store', url: SHOPTEST_APP },
    { title: 'Mystery shopping services: complete guide and pricing (2026)', publisher: 'T-ROC', url: TROC, date: '2026-05-04' },
    { title: 'Mystery shopping', publisher: 'CustomerOptix (IntelliShop)', url: CUSTOMEROPTIX },
  ],

  related: [
    'get-clients-as-a-marketing-agency',
    'show-clients-every-flow-fired',
    'ai-customers-for-retention-agencies',
    'ai-customers-for-cro-agencies',
    'recipe:delivery-monitoring',
    'recipe:mystery-shopper',
  ],
}

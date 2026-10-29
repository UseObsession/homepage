import type { BlogPost } from './types'

/* Wave 2, article 2 (keyword plan, 23 Oct 2026): the Shopify store audit, for store owners. Readers: founders, store
   managers and heads of growth at Shopify stores, usually with no developer on staff, who want a full health check or
   need to find why sales or conversion fell. Why now: Shopify changed how it measures sessions on 21 to 23 Sep 2026,
   non-Plus stores had to upgrade their Thank you and Order status pages by 26 Aug 2026, Scripts stopped on 30 Jun 2026,
   and Black Friday is Fri 27 Nov 2026. The angle: page one is crawlers and design opinion, so this gives one audit in 2
   halves (what the store's own data says, and what only a customer can check), a diagnosis path for a drop, and a
   revenue at risk sum worked once on an invented store.
   Read at source on 23 Oct 2026: Shopify Help (behaviour reports, discrepancies, checkout upgrade, discount
   combinations, accelerated checkouts, test orders, customer accounts), the Shopify developer changelog (Scripts),
   Shopify Status, Shopify's blog on conversion rates, Google (GA4 funnel exploration, GA4 ecommerce events, Analytics,
   PageSpeed Insights, Search Console), Microsoft Clarity and its docs, Contentsquare pricing (Hotjar's pricing page
   redirects there), Screaming Frog, Ahrefs, Semrush, Pingdom, Checkly, Datadog, the Shopify App Store listings for CRO
   Guru and Checkout Doctor, cro.media's Shopify Partner Directory listing, and Baymard. Obsession is described only from
   /recipes/website-audit, /recipes/mystery-shopper, /recipes/delivery-monitoring and
   /use-cases/leak-checks-for-ecommerce-stores as read that day. The 2 Shopify Community threads returned 403, so their
   words are carried from _research/seo/library/ads_pages_journeys.json.
   Left out on purpose: the Black Friday checklist's 12 tests (linked, not repeated), any PilotX audit figure, the 93% and
   128 stores, the $410 lamp, unverified vendor lag figures, Blackbelt Commerce (its audit page redirected to a blog post,
   so no price could be read) and FixMyStore (its listing returned 404). Buyer words (sign up, basket, pop up); no dashes. */

const BAYMARD = 'https://baymard.com/lists/cart-abandonment-rate'
const BEHAVIOUR = 'https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/default-reports/behaviour-reports'
const ACCELERATED = 'https://help.shopify.com/en/manual/payments/accelerated-checkouts'
const GA4_FUNNEL = 'https://support.google.com/analytics/answer/9327974'
const GA4_EVENTS = 'https://developers.google.com/analytics/devguides/collection/ga4/ecommerce'
const DISCREPANCIES = 'https://help.shopify.com/en/manual/reports-and-analytics/discrepancies'
const CHECKOUT_UPGRADE = 'https://help.shopify.com/en/manual/checkout-settings/checkout-extensibility/checkout-upgrade'
const CLARITY = 'https://clarity.microsoft.com/'
const CONTENTSQUARE = 'https://contentsquare.com/pricing/'
const CLARITY_DOCS = 'https://learn.microsoft.com/en-us/clarity/insights/semantic-metrics'
const PSI = 'https://developers.google.com/speed/docs/insights/v5/about'
const SCREAMING_FROG = 'https://www.screamingfrog.co.uk/seo-spider/pricing/'
const AHREFS_AWT = 'https://ahrefs.com/webmaster-tools'
const GSC_ABOUT = 'https://support.google.com/webmasters/answer/9128668'
const GSC_INDEX = 'https://support.google.com/webmasters/answer/7440203'
const COMBINATIONS = 'https://help.shopify.com/en/manual/discounts/discount-combinations'
const SCRIPTS = 'https://shopify.dev/changelog/posts/shopify-scripts-will-be-deprecated-on-june-30-2026'
const TEST_ORDERS = 'https://help.shopify.com/en/manual/checkout-settings/test-orders'
const ACCOUNTS = 'https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts'
const STATUS = 'https://www.shopifystatus.com/'
const SC_DIP = 'https://community.shopify.com/t/how-long-before-you-connected-a-dip-in-your-numbers-to-something-broken/689501'
const SHOPIFY_CR = 'https://www.shopify.com/blog/ecommerce-conversion-rate'
const SC_CLOUDFLARE =
  'https://community.shopify.com/t/cloudflare-broke-our-checkout-twice-lost-sales-customer-complaints-failed-orders-how-to-get-compensation/578534'
const GA_FREE = 'https://marketingplatform.google.com/about/analytics/'
const AHREFS_PRICING = 'https://ahrefs.com/pricing'
const SEMRUSH = 'https://www.semrush.com/prices/'
const PINGDOM = 'https://www.pingdom.com/pricing/'
const CHECKLY = 'https://www.checklyhq.com/pricing/'
const DATADOG = 'https://www.datadoghq.com/pricing/?product=synthetic-monitoring'
const CRO_GURU = 'https://apps.shopify.com/conversion-rate-optimization'
const CHECKOUT_DOCTOR = 'https://apps.shopify.com/checkout-doctor-store-alerts'
const CRO_MEDIA = 'https://www.shopify.com/partners/directory/partner/cromedia'

export const post: BlogPost = {
  slug: 'shopify-store-audit-checklist',
  title: 'Shopify store audit checklist: read your data, then shop as a customer',
  dek: 'Read what Shopify’s reports, GA4, session recordings, PageSpeed Insights and Search Console show, then run 12 checks only a customer can make, from sign up to the order emails. Use both halves to find why sales dropped and what each fault costs.',
  metaTitle: 'Shopify store audit checklist: your data and customer tests',
  description:
    'A Shopify store audit in 2 halves: read your conversion funnel, GA4 and speed data, then test sign up, codes, checkout and emails as a new customer.',
  answer:
    'A Shopify store audit has 2 halves: read your own data (Shopify’s conversion rate breakdown, GA4, session recordings, PageSpeed Insights, a crawler and Search Console) to find the step, device and page where visitors stop, then shop the store as a new customer on a phone to test the sign up, welcome code, basket, checkout, payment methods, discount codes and every email. When sales drop, find the step in the data first, then reproduce it as a customer on the same device. Obsession’s AI customers run the second half as real customers of the store after every release, trying every code at checkout and keeping every email exactly as it arrived.',
  primaryKeyword: 'shopify store audit',
  keywords: [
    'shopify store audit checklist',
    'shopify website audit',
    'ecommerce store audit',
    'shopify store conversion audit',
    'why is my shopify store not getting sales',
    'add to cart but no sales shopify',
    'shopify conversion rate drop',
    'how to test shopify checkout',
    'shopify discount code not working',
    'shopify website monitoring',
  ],
  category: 'Check your own journeys',
  published: '2026-10-23',
  updated: '2026-10-28',
  readingMinutes: 12,
  order: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'shop',
    workspace: 'company',
    art: {
      kind: 'report',
      title: 'brindle.example · store audit, Tuesday 13 October',
      period: 'Reports for the last 7 days against the 7 before · customer tests on an iPhone and a laptop',
      cols: ['Check', 'What it showed'],
      rows: [
        { name: 'Conversion funnel', cells: ['Reached checkout 2.4% of sessions, down from 3.4%'], tone: 'fail' },
        { name: 'Sessions by device', cells: ['The fall is on iPhones in Safari, 30% of sessions'], tone: 'info' },
        { name: 'Changes that week', cells: ['New theme published Wednesday 7 October'], tone: 'info' },
        { name: 'Recordings', cells: ['Dead clicks on the cart drawer’s checkout button'], tone: 'fail' },
        { name: 'Customer test, iPhone', cells: ['The checkout button does nothing in Safari'], tone: 'fail' },
        { name: 'Customer test, laptop', cells: ['Checkout opens, order email in 1 minute'], tone: 'ok' },
      ],
      notes: [
        'Severity: critical. Shoppers on iPhones can’t reach checkout.',
        'Fix the cart drawer or roll the theme back today, then run the iPhone test again.',
        'Revenue at risk over the 6 days: £2,700.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A Shopify store owner can run a full store audit without a developer or an agency, before a season or on the day sales fall. Every step uses a free tool, a phone or a test order.',
    },
    {
      kind: 'p',
      text: 'A Shopify store audit checks 2 things: what your data says about where visitors stop, and what a customer receives when they use the store. Crawlers and other website audit tools check pages for search, speed and broken links, and Shopify’s reports count visitors at each step. Neither signs up, opens the welcome email, uses the code or places an order, so the second half of the audit is done as a customer.',
    },
    {
      kind: 'p',
      text: 'Faults and surprise costs both lose orders. In [Baymard Institute’s survey of US online shoppers](' +
        BAYMARD +
        '), leaving out people who were only browsing, 40% of those who abandoned an order said extra costs such as shipping, tax and fees were too high, and 12% couldn’t see or work out the total up front.',
    },
    {
      kind: 'stat',
      value: '17%',
      label: 'of US shoppers who abandoned an order said the website had errors or crashed, leaving out those only browsing',
      source: 'Baymard Institute, updated September 2025',
      href: BAYMARD,
    },

    { kind: 'h2', id: 'what-it-covers', text: 'What the audit covers' },
    {
      kind: 'p',
      text: 'Run the 2 halves in order. Part 1 finds the step, device or page where visitors stop. Part 2 shows what happens there, and checks what reports can’t count: emails, codes, payment methods and policy answers. Give each finding a severity.',
    },
    {
      kind: 'list',
      items: [
        '**Critical:** customers can’t order, or pay the wrong amount. Fix it the same day.',
        '**High:** some orders are lost or a promise breaks, such as a code, a price or an email. Fix it this week.',
        '**Medium:** customers are slowed or confused. Fix it this month.',
      ],
    },

    { kind: 'h2', id: 'your-data', text: 'Part 1: read your own data' },
    {
      kind: 'p',
      text: 'Compare the last 7 days with the 7 before and with the same week last year. A fall against both is worth tracing.',
    },

    { kind: 'h3', id: 'shopify-funnel', text: 'Shopify’s conversion funnel' },
    {
      kind: 'p',
      text: 'In Shopify, open Analytics, then Reports, then **Conversion rate breakdown**. [Shopify’s help centre](' +
        BEHAVIOUR +
        ') defines its 4 steps as shares of all sessions: sessions, sessions with cart additions, sessions that reached checkout and sessions that completed checkout.',
    },
    {
      kind: 'list',
      items: [
        '**Reached checkout counts input.** A session counts only once the shopper types or clicks in checkout. If cart additions hold and this step falls, look at the cart and the checkout button.',
        '**Check the open funnel too.** The closed funnel keeps only sessions that took every step in order, so shoppers who skip the cart with an [express checkout button](' +
          ACCELERATED +
          ') can drop out of it.',
        '**Filter to human sessions** before you compare rates.',
        '**Allow for the September change.** Shopify changed how it measures sessions on 21 to 23 September 2026, and says sessions and conversion rate may differ afterwards with no change in traffic or orders. Across those dates, compare orders as well as rates.',
      ],
    },
    {
      kind: 'p',
      text: 'Then split the fall with the **Sessions by device** and **Sessions by landing page** reports.',
    },

    { kind: 'h3', id: 'ga4', text: 'GA4 funnels' },
    {
      kind: 'p',
      text: 'Build a [funnel exploration](' +
        GA4_FUNNEL +
        ') with Google’s [ecommerce events](' +
        GA4_EVENTS +
        ') as the steps, from view_item and add_to_cart to begin_checkout, add_payment_info and purchase, broken down by device category. It shows where users drop and the time between steps.',
    },
    {
      kind: 'p',
      text: 'Use Shopify for orders and GA4 for behaviour. [Shopify’s help centre](' +
        DISCREPANCIES +
        ') notes that Google counts only visitors with JavaScript and cookies on. If GA4 purchases fall while Shopify orders hold, check the tracking first. Stores not on Shopify Plus had to upgrade their Thank you and Order status pages [by 26 August 2026](' +
        CHECKOUT_UPGRADE +
        '), and scripts from the old additional scripts box have to be set up again on the new pages.',
    },

    { kind: 'h3', id: 'recordings', text: 'Session recordings' },
    {
      kind: 'p',
      text: '[Microsoft Clarity](' +
        CLARITY +
        ') is free with no traffic limit, and Hotjar, now sold through [Contentsquare](' +
        CONTENTSQUARE +
        '), has a free plan. Filter recordings to the device and step that dropped, and watch at least 10 before you change anything. Clarity flags [rage clicks, dead clicks and JavaScript errors](' +
        CLARITY_DOCS +
        '). A dead click gets no response, which can mean a broken element. Recordings end when the visitor leaves, so the emails that follow are outside them.',
    },

    { kind: 'h3', id: 'speed', text: 'PageSpeed Insights' },
    {
      kind: 'p',
      text: 'Run [PageSpeed Insights](' +
        PSI +
        ') on mobile for your home page, a collection page and your best selling product. Read the field data first, which comes from real Chrome users over the previous 28 days. A pass is good on all 3 Core Web Vitals: Largest Contentful Paint up to 2.5 seconds, Interaction to Next Paint up to 200 milliseconds and Cumulative Layout Shift up to 0.1. The Lighthouse score below it is a lab test that helps find the cause, and Google counts 90 or above as good.',
    },

    { kind: 'h3', id: 'crawl', text: 'A crawler and Search Console' },
    {
      kind: 'p',
      text: 'A crawler finds broken links, redirects, missing titles and pages blocked from search. [Screaming Frog](' +
        SCREAMING_FROG +
        ') crawls up to 500 URLs free, and [Ahrefs Webmaster Tools](' +
        AHREFS_AWT +
        ') audits sites you verify free. In [Search Console](' +
        GSC_ABOUT +
        '), also free, the [Page indexing report](' +
        GSC_INDEX +
        ') lists the pages Google didn’t index and why. Google expects only canonical pages to be indexed, so check your product and collection pages and leave filtered and duplicate URLs aside.',
    },

    { kind: 'h2', id: 'customer-tests', text: 'Part 2: shop as a customer' },
    {
      kind: 'p',
      text: 'Use an email address and phone number your store has never seen, in a private window on your phone, logged out of the admin. Your own account won’t work, because your store treats you as staff or a past buyer. The [Black Friday checklist](/blog/black-friday-checklist-new-customer) sets this up step by step and adds the sale week tests for texts, reminders and ads. These 12 checks are the year round audit.',
    },
    {
      kind: 'table',
      caption: 'The 12 customer checks',
      cols: ['Check', 'A pass looks like', 'If it fails, look at', 'Severity'],
      rows: [
        ['Sign up form', 'It submits on a phone and shows its offer', 'The list it feeds, and how it shows on small screens', 'High'],
        ['Welcome email and code', 'It arrives in minutes with the promised code', 'The flow’s trigger and double opt in ([why welcome emails don’t send](/blog/welcome-basket-email-not-sending))', 'High'],
        ['Product page facts', 'Price, stock, sizes, delivery and returns match your settings', 'Product data, theme blocks and apps that edit the page', 'High'],
        ['Add to basket', 'The cart drawer and cart page show the item and price, and the checkout button works', 'Theme cart code, and basket or upsell apps', 'Critical'],
        ['Checkout on a phone', 'A real address in each market gets a delivery rate and the right total', 'Shipping zones, markets and checkout apps', 'Critical'],
        ['Payment methods', 'Every method you offer opens', 'Payment settings and the provider’s status page', 'Critical'],
        ['Discount codes and stacking', 'Each live code applies, combines or is refused as you set it', 'The code’s dates, usage limit, products, minimum and combinations', 'High'],
        ['Free shipping threshold', '£1 under pays shipping and £1 over doesn’t, in every market', 'Rates by order price, and currency conversion', 'High'],
        ['Order and shipping emails', 'The confirmation arrives in minutes, and the tracking link works', 'Settings, then Notifications, and your fulfilment app', 'High'],
        ['Account sign in', 'The sign in code or reset email arrives and works', 'Customer account settings and your sender domain', 'Medium'],
        ['Returns and support answers', 'The policy page, chat and help pages agree', 'Policy pages and the sources your chat uses', 'Medium'],
        ['AI assistant answers', 'Prices, shipping and returns match your store', 'Product data and policy pages', 'Medium'],
      ],
    },

    { kind: 'h3', id: 'discount-codes', text: 'Discount codes not working' },
    {
      kind: 'p',
      text: 'Try every live code on a phone, including one on a sale item. Each Shopify discount’s settings decide what it [combines with](' +
        COMBINATIONS +
        '), and a customer can enter up to 5 product or order codes and 1 shipping code per order. When checkout says a code “isn’t valid for the items in your cart”, check the products and collections it covers, its minimum purchase, its dates and its usage limit. Discounts built on Shopify Scripts [stopped running on 30 June 2026](' +
        SCRIPTS +
        '), so test each custom discount again.',
    },

    { kind: 'h3', id: 'test-checkout', text: 'How to test Shopify checkout' },
    {
      kind: 'p',
      text: 'Enter a real address for each country you sell to. Open each payment method without paying: cards, Shop Pay, PayPal, Apple Pay on an iPhone and Google Pay on Android. Wallet buttons depend on the device, and Shopify orders express buttons to show each customer’s fastest method first, so test on both phones. For a whole order, Shopify offers [3 ways to place a test order](' +
        TEST_ORDERS +
        '): its test payment gateway, Shopify Payments test mode, or a real order that you cancel and refund.',
    },

    { kind: 'h3', id: 'accounts-answers', text: 'Accounts, policies and AI answers' },
    {
      kind: 'p',
      text: 'Shopify’s new customer accounts sign customers in with a [6 digit code](' +
        ACCOUNTS +
        ') sent by email, so test that it arrives. Legacy accounts use a password, so test the reset email. Check your chat and help answers against your policy pages with the [chatbot returns test](/blog/test-store-chatbot-returns-policy), and AI assistants’ answers with [what ChatGPT says about your store](/blog/what-chatgpt-says-about-your-store).',
    },
    {
      kind: 'p',
      text: 'A test by hand covers 1 inbox, 1 device and 1 moment. A theme publish, an app update or a discount edit can break a step the day after you test it, and [Shopify Status](' +
        STATUS +
        ') notes that issues affecting a small share of stores may not appear there. Obsession runs that test after every change. It makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. On your own store, its [website audit](/recipes/website-audit) signs up as a fresh AI customer after every release or every morning, fills in every form, opens every email and link, and tries your checkout.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s first store check is free: 4 AI customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. The report comes within 4 days.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'sales-dropped', text: 'When sales or conversion rate drop' },
    {
      kind: 'p',
      text: 'A broken step often reads as a slow week. A post in a [Shopify Community thread](' +
        SC_DIP +
        ') from September 2026 described it as orders slowing and add to carts dipping a little.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Confirm the drop** in Shopify orders against the same weekdays last week and last year, and check Shopify Status for those dates.',
        '**Split traffic from conversion.** If sessions fell, look at ads, email sends and clicks in Search Console. If sessions held and conversion fell, look in the store.',
        '**Find the step** whose rate fell in the conversion rate breakdown.',
        '**Find who it affects** by device, browser, country and landing page, on human sessions.',
        '**Match the date to a change:** theme publishes, app installs and updates, discount edits, prices, shipping rates, markets and payment settings.',
        '**Watch recordings** of the affected sessions at that step.',
        '**Reproduce it as a customer** on the same device and browser.',
        '**Fix it, test again and watch the rate** for 7 days.',
      ],
    },

    { kind: 'h3', id: 'add-to-cart-no-sales', text: 'Add to cart but no sales' },
    {
      kind: 'p',
      text: 'If cart additions hold and reached checkout falls, test the cart drawer, the cart page and the checkout button on a phone, and any basket or upsell app that changed. If reached checkout holds and completed checkout falls, test delivery rates, payment methods and live codes.',
    },

    { kind: 'h3', id: 'no-sales', text: 'Why a Shopify store gets no sales' },
    {
      kind: 'p',
      text: 'If no orders arrive at all, check as a customer that the password page is off, products are on the Online Store sales channel and available in each market, payments are set up and a test order completes. If those pass, look at traffic by source and in Search Console.',
    },

    { kind: 'h2', id: 'revenue-at-risk', text: 'Revenue at risk from a fault' },
    {
      kind: 'p',
      text: 'Put a figure on each fault with your own numbers, so that the most expensive one is fixed first.',
    },
    {
      kind: 'p',
      text: '**Revenue at risk = sessions a day × share of sessions that reach the broken step × conversion rate × average order value × days broken**',
    },
    {
      kind: 'art',
      caption: 'The sum for an invented store, with figures it reads from its own reports. Put your own figures in each row.',
      art: {
        kind: 'price',
        title: 'brindle.example · revenue at risk, 7 to 13 October',
        rows: [
          { label: 'Sessions a day', value: '1,500', note: 'Shopify Analytics' },
          { label: 'Share on iPhones in Safari', value: '30%', note: 'Sessions by device report' },
          { label: 'Conversion rate', value: '2%', note: 'Before the theme change' },
          { label: 'Average order value', value: '£50' },
          { label: 'Days broken', value: '6', note: 'Theme published 7 October, fixed 13 October' },
        ],
        total: { label: 'Revenue at risk', value: '£2,700', note: '1,500 × 30% × 2% × £50 × 6' },
      },
    },
    {
      kind: 'p',
      text: 'An invented store, brindle.example, takes 1,500 sessions a day. A theme published on 7 October breaks its cart drawer’s checkout button in Safari on iPhones, which carry 30% of its sessions. Its conversion rate is 2%, the low end of the [2% to 3% global average](' +
        SHOPIFY_CR +
        ') on Shopify’s blog, and its average order is £50. Over 6 days, 1,500 × 30% × 2% × £50 × 6 = £2,700. Some shoppers come back on a laptop, so treat the result as the most the fault could cost. The ad spend that brought those sessions is spent either way.',
    },
    {
      kind: 'quote',
      text: 'We spent ad money driving customers to a checkout that didn’t function.',
      cite: 'A store owner on the Shopify Community, December 2025',
      href: SC_CLOUDFLARE,
    },

    { kind: 'h2', id: 'options', text: 'Shopify store audit tools compared', compare: true },
    {
      kind: 'p',
      text: 'The free tools cover Part 1 for most stores, and the paid options save time or run checks on a schedule. We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to audit a Shopify store. Prices from each company’s own pages, 23 October 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Doing nothing',
          'No time or money up front',
          'Free',
          'Customers or the month’s numbers find each fault',
          'A store that rarely changes and runs no paid traffic',
        ],
        [
          'By hand: the 12 checks above',
          'Sees what a customer receives',
          'Free, plus any test order fee',
          '1 inbox, 1 device and 1 moment per run',
          'One store, monthly and after each change',
        ],
        [
          'Shopify’s reports',
          'The funnel by step, device and landing page',
          'Included with Shopify',
          'Counts steps, not the emails or what a shopper saw',
          'Every store, weekly',
        ],
        [
          'Analytics: [GA4](' + GA_FREE + ')',
          'Custom funnels and the time between steps',
          'Free',
          'Misses visitors who block it, and its tracking can break',
          'Stores tracking through to purchase',
        ],
        [
          'Session recordings: Microsoft Clarity, Hotjar',
          'Recordings, with rage and dead clicks flagged',
          'Clarity: free\nHotjar: free to 200,000 sessions a month, Growth $49 a month',
          'Ends when the visitor leaves',
          'Finding the cause at a known step',
        ],
        [
          'Speed tests: PageSpeed Insights, Lighthouse',
          'Speed from real Chrome users, and a lab test',
          'Free',
          'Speed and layout only',
          'Monthly, and after theme or app changes',
        ],
        [
          'SEO crawlers: Screaming Frog, [Ahrefs](' + AHREFS_PRICING + '), [Semrush](' + SEMRUSH + '), Search Console',
          'Broken links, redirects and indexing',
          'Screaming Frog: free to 500 URLs, £199 a year\nAhrefs: Webmaster Tools free, Lite £99 a month\nSemrush: SEO £113 a month\nSearch Console: free',
          'Reads pages, with no sign up, order or email',
          'Search health, monthly',
        ],
        [
          'Uptime and scripted tests: [Pingdom](' + PINGDOM + '), [Checkly](' + CHECKLY + '), [Datadog Synthetics](' + DATADOG + ')',
          'Alerts at any hour when a page or a scripted path fails',
          'Pingdom: from £14 a month\nCheckly: Hobby free, Starter $24 a month billed yearly\nDatadog: from $12 per 1,000 browser runs, billed yearly',
          'Runs only the paths someone scripts, and the scripts need upkeep',
          'Stores with a developer to keep the tests',
        ],
        [
          'Shopify apps: [CRO Guru](' + CRO_GURU + '), [Checkout Doctor](' + CHECKOUT_DOCTOR + ')',
          'CRO Guru: an AI checklist for key pages\nCheckout Doctor: checkout, discounts and shipping tested on a schedule',
          'CRO Guru: $199 one time\nCheckout Doctor: free check, then $29 to $199 a month',
          'Checkout Doctor never enters payment details or places an order',
          'Scheduled checks without a developer',
        ],
        [
          'Agency audit: for example, [cro.media](' + CRO_MEDIA + ')',
          'An expert review, with a plan',
          '$299 to $3,999, as cro.media lists it in Shopify’s Partner Directory',
          'One date, and the scope varies',
          'A redesign or a growth plan',
        ],
        [
          'Obsession (ours): [Website audit](/recipes/website-audit), [Mystery shopper](/recipes/mystery-shopper), [Delivery monitoring](/recipes/delivery-monitoring)',
          'AI customers sign up after every release or each morning, open every email and link, and try every code at checkout',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'Sees what its own AI customers receive, and stops at a CAPTCHA',
          'What a customer gets after every change, for stores that change often or run paid traffic',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'If your store changes often or runs paid traffic, use Obsession to shop it as a new customer after every change, with every email and checkout step kept as it happened. For one store that changes rarely and runs little paid traffic, the free tools and a monthly test by hand cover the audit, and no paid tool is needed.',
    },

    { kind: 'h2', id: 'limits', text: 'Limits and next steps' },
    {
      kind: 'list',
      items: [
        '**Reports find the step where visitors stop.** A recording or a customer test shows why.',
        '**A customer test covers 1 inbox, 1 device and 1 moment.** Test again after every change.',
        '**Test mode leaves your live payment provider untested.** A real order that you cancel and refund tests it, and may cost a fee.',
      ],
    },
    {
      kind: 'p',
      text: 'Run both halves this week, set a monthly date, and test again on the day of any theme, app, discount or shipping change. Before Black Friday, on Friday 27 November 2026, run the [Black Friday checklist](/blog/black-friday-checklist-new-customer) ahead of your code freeze.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s website audit signs up as a new AI customer after every release or every morning, tries every welcome and launch code at checkout, and sends each break to Slack with the step, the screenshot and the time. It runs now, on credit-based plans like Claude’s.',
      to: '/recipes/website-audit',
      label: 'See the website audit',
    },

    { kind: 'h2', id: 'questions', text: 'Store audit questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is a Shopify store audit?',
          a: 'A Shopify store audit checks your store’s data and what a customer receives: the conversion funnel, speed and search health, then the sign up, welcome email, codes, basket, checkout, payment methods and order emails.',
        },
        {
          q: 'How do I audit my Shopify store for free?',
          a: 'Read Shopify’s conversion rate breakdown, GA4, Microsoft Clarity, PageSpeed Insights and Search Console, then test the store on your phone as a new customer. The only possible cost is a fee on a real test order. Obsession’s first store check is free as well: 4 AI customers sign up, use the welcome code, leave a basket and wait 48 hours.',
        },
        {
          q: 'Why is my Shopify store not getting sales?',
          a: 'Check sessions first. If visitors arrive and don’t buy, find the step where they stop and test it as a customer on the same device. If no one arrives, look at ads, email and search.',
        },
        {
          q: 'Why do people add to cart but not buy on Shopify?',
          a: 'Compare cart additions, reached checkout and completed checkout on human sessions. A fall before checkout points at the cart or the checkout button, and a fall inside checkout at delivery rates, payment methods or codes. In Baymard’s survey, extra costs such as shipping were the reason abandoning shoppers gave most often.',
        },
        {
          q: 'Why did my Shopify conversion rate drop?',
          a: 'Compare orders as well as the rate, because Shopify changed how it measures sessions on 21 to 23 September 2026, which can move the rate with no change in orders. If orders fell too, match the step, device and date of the drop to a change in the store.',
        },
        {
          q: 'How do I test Shopify checkout?',
          a: 'Use Shopify’s test payment gateway or Shopify Payments test mode, or place a real order and cancel and refund it, which also tests your live payment provider. Turn test mode off afterwards.',
        },
        {
          q: 'Why is my Shopify discount code not working?',
          a: 'Check the code’s dates, usage limit, eligible products, minimum purchase and combination settings. Codes built on Shopify Scripts stopped working on 30 June 2026.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'The 2 Shopify Community threads returned an error to a direct request on 23 October 2026, so we read them through a text reader. Hotjar’s pricing page redirects to Contentsquare’s, so the Hotjar prices are Contentsquare’s Experience Analytics plans. Pingdom’s prices were read from its pricing page’s code, as the page shows them only in its calculator. Semrush, Ahrefs, Screaming Frog and Pingdom showed prices in pounds. We didn’t install or test the tools named, and brindle.example and its figures are invented.',
    },
  ],

  sources: [
    { title: '50 cart abandonment rate statistics 2026', publisher: 'Baymard Institute', url: BAYMARD, date: '2025-09-22' },
    { title: 'Behavior reports', publisher: 'Shopify Help Center', url: BEHAVIOUR },
    { title: 'Accelerated checkouts and accelerated checkout buttons', publisher: 'Shopify Help Center', url: ACCELERATED },
    { title: '[GA4] Funnel exploration', publisher: 'Google Analytics Help', url: GA4_FUNNEL },
    { title: 'Measure ecommerce', publisher: 'Google for Developers', url: GA4_EVENTS, date: '2026-10-14' },
    { title: 'Analytics discrepancies', publisher: 'Shopify Help Center', url: DISCREPANCIES },
    { title: 'Upgrading and replacing your Thank you and Order status pages', publisher: 'Shopify Help Center', url: CHECKOUT_UPGRADE },
    { title: 'Microsoft Clarity', publisher: 'Microsoft', url: CLARITY },
    { title: 'Pricing', publisher: 'Contentsquare', url: CONTENTSQUARE },
    { title: 'Semantic metrics', publisher: 'Microsoft Learn', url: CLARITY_DOCS, date: '2025-12-01' },
    { title: 'About PageSpeed Insights', publisher: 'Google for Developers', url: PSI, date: '2024-10-21' },
    { title: 'SEO Spider pricing', publisher: 'Screaming Frog', url: SCREAMING_FROG },
    { title: 'Ahrefs Webmaster Tools', publisher: 'Ahrefs', url: AHREFS_AWT },
    { title: 'About Search Console', publisher: 'Search Console Help', url: GSC_ABOUT },
    { title: 'Page indexing report', publisher: 'Search Console Help', url: GSC_INDEX },
    { title: 'Combining discounts', publisher: 'Shopify Help Center', url: COMBINATIONS },
    { title: 'Shopify Scripts will be deprecated on June 30, 2026', publisher: 'Shopify developer changelog', url: SCRIPTS },
    { title: 'Placing a test order', publisher: 'Shopify Help Center', url: TEST_ORDERS },
    { title: 'Customer accounts', publisher: 'Shopify Help Center', url: ACCOUNTS },
    { title: 'Shopify Status', publisher: 'Shopify', url: STATUS },
    { title: 'How long before you connected a dip in your numbers to something broken?', publisher: 'Shopify Community', url: SC_DIP, date: '2026-09-29' },
    { title: 'Ecommerce conversion rate: benchmarks and tips (2026)', publisher: 'Shopify blog', url: SHOPIFY_CR, date: '2026-08-22' },
    { title: 'Cloudflare broke our checkout twice', publisher: 'Shopify Community', url: SC_CLOUDFLARE, date: '2025-12-06' },
    { title: 'Google Analytics', publisher: 'Google Marketing Platform', url: GA_FREE },
    { title: 'Pricing', publisher: 'Ahrefs', url: AHREFS_PRICING },
    { title: 'Prices', publisher: 'Semrush', url: SEMRUSH },
    { title: 'Pricing', publisher: 'Pingdom', url: PINGDOM },
    { title: 'Pricing', publisher: 'Checkly', url: CHECKLY },
    { title: 'Synthetic Monitoring pricing', publisher: 'Datadog', url: DATADOG },
    { title: 'CRO Guru Launch Check', publisher: 'Shopify App Store (ConversionAB)', url: CRO_GURU },
    { title: 'Checkout Doctor: Store Alerts', publisher: 'Shopify App Store (AGNTWRK)', url: CHECKOUT_DOCTOR },
    { title: 'cro.media', publisher: 'Shopify Partner Directory', url: CRO_MEDIA },
  ],

  related: [
    'how-to-test-your-shopify-store-as-a-customer',
    'black-friday-checklist-new-customer',
    'welcome-basket-email-not-sending',
    'test-store-chatbot-returns-policy',
    'what-chatgpt-says-about-your-store',
    'recipe:website-audit',
    'recipe:mystery-shopper',
    'recipe:delivery-monitoring',
  ],
}

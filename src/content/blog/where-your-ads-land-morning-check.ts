import type { BlogPost } from './types'

/* Content and Search Plan, 23 Oct 2026: "Where your ads land", published Tue 10 Nov 2026 (the week ad costs start to
   climb). Readers: performance agency owners and media buyers, and store owners who run their own Google and Meta ads.
   Why now: Google began upgrading eligible Search campaigns to AI Max in September, Final URL expansion is on by default
   with AI Max and in Performance Max, and Meta CPMs first rose in the week of 10 Nov in 2025 (Lebesgue).
   Thought leadership, not a review: the full morning check is given free and can be run by hand; Obsession's Ad landing
   check appears once, where the by-hand method stops, and in the 2 quiet links. Read at the source on 23 Oct 2026:
   Google Ads Help (Final URL expansion in Search and in Performance Max, AI Max, AI Max reporting, Quality Score, the
   Final URL column), Google's April 2026 AI Max upgrade notice, Merchant Center help on automatic updates, Meta's
   developer docs on scheduled feeds, Lebesgue (16 Oct 2026), Common Thread Collective (2 Sep 2026). Two store owners'
   words are short quotes from public Shopify Community threads kept in the library (the pages returned 403 on
   23 Oct, so the quotes are carried from the library, not re-read).
   Left out on purpose: the $410 sold out lamp (a mockup on the agencies page), any PilotX audit figure, the 93% and 128
   stores, any claim about how fast a feed or catalogue updates beyond what Google's and Meta's own pages say (Meta's help
   pages on out of stock items did not load, so nothing rests on them), and the vendor docs that put the lag at 30 to 90
   minutes. The Quality Score rule and landing page experience come from Google's own page, not from vendor claims of
   what each point costs. Buyer words (sign up, basket, pop up); no dashes. */

const LEBESGUE = 'https://lebesgue.io/?p=15192'
const FINAL_URL = 'https://support.google.com/google-ads/answer/16230205'
const AI_MAX = 'https://support.google.com/google-ads/answer/15910187'
const AI_MAX_REPORTING = 'https://support.google.com/google-ads/answer/16470459'
const PMAX_FUE = 'https://support.google.com/google-ads/answer/14337539'
const QUALITY_SCORE = 'https://support.google.com/google-ads/answer/6167118'
const FINAL_URL_COLUMN = 'https://support.google.com/google-ads/answer/9054021'
const AI_MAX_NOTICE = 'https://business.google.com/us/accelerate/announcements/dsa-upgrade-to-ai-max-2026/'
const MERCHANT_AUTO = 'https://support.google.com/merchants/answer/12157888'
const META_FEEDS = 'https://developers.facebook.com/documentation/ads-commerce/catalog/guides/scheduled-feeds'
const COMMON_THREAD = 'https://commonthreadco.com/blogs/coachs-corner/google-ai-max-migration-live-september-1-2026-ecommerce'
const SC_QUIET = 'https://community.shopify.com/t/how-do-store-owners-catch-checkout-failures-before-customers-report-them/658699'
const SC_CLOUDFLARE =
  'https://community.shopify.com/t/cloudflare-broke-our-checkout-twice-lost-sales-customer-complaints-failed-orders-how-to-get-compensation/578534'

export const post: BlogPost = {
  slug: 'where-your-ads-land-morning-check',
  title: 'Final URL expansion and sold out products: a morning check of where your ads land',
  dek: 'Final URL expansion can send a click to a page you never wrote into the ad, and a sold out product keeps its ad until the data behind it changes. A 10 minute check in a shopper’s steps, before ad costs climb from Monday 9 November.',
  metaTitle: 'Final URL expansion: a morning check of where your ads land',
  description:
    'Final URL expansion and sold out products send paid clicks to pages that can’t sell. Check where every Google and Meta ad lands each morning in 10 minutes.',
  answer:
    'To check where your ads land, list every live Google and Meta ad with its link each morning, open each link on your phone, and confirm the page loads, the product is in stock, the offer, price and code match the ad, and the tracking doesn’t break the page. If you run AI Max or Performance Max, also read the Landing pages report or the Expanded Final URL assets tab, and add URL exclusions for pages that shouldn’t take paid traffic.',
  primaryKeyword: 'final url expansion',
  keywords: [
    'final url expansion',
    'final url expansion google ads',
    'ai max final url expansion',
    'turn off final url expansion',
    'performance max final url expansion',
    'google ads out of stock products',
    'ads sending traffic to sold out products',
    'landing page check',
    'landing page audit checklist',
  ],
  category: 'Check your own journeys',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 9,
  order: 7,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'adcheck',
    workspace: 'company',
    art: {
      kind: 'flow',
      title: 'northmark.example · morning check, Wednesday 08:02',
      status: { tone: 'fail', text: '£36 of clicks since 14:00' },
      steps: [
        { label: 'Meta ad', detail: 'Trail trainer, 20% off this week', tone: 'ok' },
        { label: 'Landing page', detail: 'Loads in 1.4 seconds on a phone', tone: 'ok' },
        { label: 'Product', detail: 'Sold out in every size since 14:00 yesterday', tone: 'fail' },
        { label: 'Checkout', detail: 'Never reached', tone: 'info' },
      ],
      foot: 'The ad ran on all afternoon. The sum: £90 a day, 40% of the clicks after 14:00, £36 spent on a page that couldn’t sell.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Turn on AI Max in a Google Ads Search campaign and [Final URL expansion turns on with it](' +
        AI_MAX +
        '). In Performance Max it is [on by default](' +
        PMAX_FUE +
        '), and Google says it can serve traffic to any page on your final URL’s domain that you haven’t excluded. In both, a click can land on a page you never wrote into the ad.',
    },
    {
      kind: 'p',
      text: 'In Search, Google lists the pages it chose in its [Landing pages report](' +
        AI_MAX_REPORTING +
        '). Your list of ads shows the links you wrote. That report shows where the clicks went. The older leak is quieter. A product sells out, and its ad runs on until the data behind it changes, which happens on a schedule set in your feed app.',
    },
    {
      kind: 'quote',
      text: 'wondering how long stuff tends to stay broken before anyone notices.',
      cite: 'A poster on the Shopify Community, July 2026, asking how store owners catch checkout faults',
      href: SC_QUIET,
    },
    {
      kind: 'p',
      text: 'A page that can’t sell raises no error. It looks like a quiet day, with the same spend behind it. Costs make that day dearer. Meta CPMs first rose clearly in the week of 10 November in 2025, and in mid October in 2024. Plan around the week of Monday 9 November, with Black Friday on Friday 27 November.',
    },
    {
      kind: 'stat',
      value: '+15%',
      label: 'median Meta CPM in the week of 10 November 2025, the first week of a clear rise, against September',
      source: 'Lebesgue (vendor data, biggest Meta spenders in its dataset), October 2026',
      href: LEBESGUE,
    },
    {
      kind: 'p',
      text: 'The check below takes 10 minutes, needs no tool and costs no clicks. It runs in the order a shopper meets a page.',
    },

    { kind: 'h2', id: 'final-url-expansion', text: 'What Final URL expansion does when AI Max is on' },
    {
      kind: 'p',
      text: 'Google describes it as sending traffic to the most relevant URLs on your site when that is likely to perform better, matched to the search and the ad group ([Google Ads Help](' +
        FINAL_URL +
        '), [AI Max guide](' +
        AI_MAX +
        ')). A page can be relevant and still sold out.',
    },
    {
      kind: 'p',
      text: 'Google said in April that from September, eligible Search campaigns with legacy settings would upgrade to AI Max automatically ([Google](' +
        AI_MAX_NOTICE +
        ')). An agency, [Common Thread Collective](' +
        COMMON_THREAD +
        '), reported on 2 September that the upgrade began on 1 September, and read it as leaving Final URL expansion to each campaign’s earlier settings, and off in broad match campaigns. Dynamic Search Ads campaigns are in Google’s notice too, and the sources we read disagree on their date, so check your account’s notices. Read the setting in each campaign rather than assume it.',
    },
    {
      kind: 'stat',
      value: '7%',
      label: 'more conversions or conversion value, at a similar CPA or ROAS, that Google reports for AI Max with all three features on, against search term matching alone',
      source: 'Google internal data, 2026, for non retail advertisers (Google, April 2026)',
      href: AI_MAX_NOTICE,
    },
    {
      kind: 'p',
      text: 'That is Google’s figure, from its own data and for advertisers outside retail. It is the category claim, not your store’s result. Turning the setting off is one decision, and Google documents how: untick it in the campaign’s settings. Leaving it on and narrowing it with exclusions is the other. The morning check shows which suits your store.',
    },

    { kind: 'h2', id: 'out-of-stock', text: 'Why ads keep running on out of stock products' },
    {
      kind: 'p',
      text: 'A text ad’s link is a URL you or Google chose, and nothing in it reads your stock. Catalogue ads on Meta and Shopping ads on Google read product data, which moves on a schedule.',
    },
    {
      kind: 'p',
      text: 'Meta’s developer documentation says a scheduled feed can’t upload more often than once an hour, points to a direct upload for faster stock updates, and advises marking unavailable items out of stock rather than deleting them ([Meta](' +
        META_FEEDS +
        ')). Google says Merchant Center’s [automatic updates](' +
        MERCHANT_AUTO +
        ') are not a replacement for regular product data updates, and may not work for products whose availability changes more than once a day. Neither page gives a delay from a sell out to the ad stopping. Find out what your own feed app is set to.',
    },

    { kind: 'h2', id: 'morning-check', text: 'A morning check that takes 10 minutes and costs no clicks' },
    {
      kind: 'p',
      text: 'Use your phone, in a private window that isn’t signed in to your store admin. Open each ad’s link itself rather than tapping the ad. A tap on a live ad can be billed, and it adds a click to your ad numbers.',
    },
    {
      kind: 'list',
      items: [
        '**Every live ad, with its link.** Export the live ads from each account and keep the link column. In Google Ads, you can add the Final URL and Tracking Template columns with Modify columns ([Google Ads Help](' +
          FINAL_URL_COLUMN +
          ')).',
        '**Costliest first.** Sort by yesterday’s spend, so the ads you run out of time on are the cheapest ones.',
        '**A sheet with 5 columns:** the ad, its link, the time you opened it, pass or fail, and a screenshot.',
        '**A note to whoever reports your numbers.** A link opened directly shows as a visit in analytics.',
      ],
    },
    {
      kind: 'table',
      caption: 'The morning check, ad by ad',
      cols: ['Check', 'Look at', 'A pass looks like', 'If it fails'],
      rows: [
        ['The link', 'The ad’s final URL, on your phone', 'Loads in seconds, with no error, loop or login', 'Fix the link in the ad'],
        ['The product', 'The product, size and colour the ad shows', 'In stock, and add to basket works', 'Pause the ad, or point it at a product that sells'],
        ['The offer', 'What the ad promises against the page', 'The same offer and end date', 'Correct whichever is wrong'],
        ['The price', 'Ad, page and basket, in the ad’s market', 'The same price and currency at every step', 'Check the price in the ad’s data'],
        ['The code', 'The ad’s code, at checkout', 'It applies at the sale price', 'Check its limits and end date'],
        ['The click through', 'The tracking template, with the final URL where {lpurl} sits', 'The same page, with no 404', 'Fix the template tag'],
        ['The pages Google chose', 'The Landing pages report, or Expanded Final URL assets', 'Every page taking paid clicks is one you would pay for', 'Add URL exclusions'],
      ],
    },

    { kind: 'h3', id: 'open-link', text: 'Open the link and look at the page' },
    {
      kind: 'p',
      text: 'Paste the final URL into the window. **A pass:** the page loads in seconds on a mobile connection, it is the page the ad promised, and the market, language and currency are right. **If it fails,** check for a redirect that loops, a login wall, or a link that lost its parameters.',
    },

    { kind: 'h3', id: 'in-stock', text: 'Check the product can be bought' },
    {
      kind: 'p',
      text: 'Choose the size and colour the ad shows and add it to the basket. **A pass:** the button works and the basket holds it. **If it fails,** pause the ad or point it at a product that can sell. For catalogue ads, open the product links of the lines you expect to be low. A sold out page isn’t always a dead one. If it takes a back in stock sign up or offers similar products, decide on purpose whether this ad should still send people there.',
    },

    { kind: 'h3', id: 'offer-price-code', text: 'Match the offer, the price and the code to the ad' },
    {
      kind: 'p',
      text: 'Read the ad, then the page, then the basket. **A pass:** the same offer, end date, price and currency at every step. Enter the ad’s code at checkout and take the basket as far as the payment step. A page that loads is not a checkout that works.',
    },
    {
      kind: 'quote',
      text: 'We spent ad money driving customers to a checkout that didn’t function.',
      cite: 'A merchant on the Shopify Community, December 2025, after Cloudflare broke their checkout twice',
      href: SC_CLOUDFLARE,
    },

    { kind: 'h3', id: 'tracking', text: 'Follow the click through your tracking template' },
    {
      kind: 'p',
      text: 'Google’s [AI Max guide](' +
        AI_MAX +
        ') says dynamic URLs combined with an existing tracking template can sometimes lead to broken expanded pages with a 404 error. It names two likely causes: a static tracking URL with no {lpurl} tag, and a tag in a nonstandard format.',
    },
    {
      kind: 'p',
      text: 'Read the template in the campaign. Then build the click through URL by hand: put a page from the Landing pages report where {lpurl} sits, and open the result. **A pass:** the same page, with its parameters. A 404 is the break.',
    },

    { kind: 'h3', id: 'pages-google-chose', text: 'Read the pages Google chose, and narrow them' },
    {
      kind: 'p',
      text: 'In Search, open the Landing pages report. Pages added through Final URL expansion sit beside the ones you wrote, and the “Selected by” column shows whether AI Max selected the URL ([Google Ads Help](' +
        AI_MAX_REPORTING +
        ')). In Performance Max, open the asset report and its Expanded Final URL assets tab. Sort by cost and open the top pages you didn’t write.',
    },
    {
      kind: 'p',
      text: '**A pass:** every page that takes paid clicks is one you would choose to pay for. **If it fails,** add URL exclusions. In Search they sit under Final URL expansion, as a list of URLs or as rules, and need AI Max, Text customization and Final URL expansion all on. In Performance Max, choose Exclude some URLs under Text customization in Asset optimization. Policy pages, blog posts, sold out products and markets you don’t ship to are the first candidates.',
    },

    { kind: 'h2', id: 'cost-of-a-day', text: 'What one day of clicks to a dead page costs you' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Spent on clicks that couldn’t buy:** the ad’s daily spend times the share of its clicks that land on the dead page. For a product that sold out mid day, count the clicks since. For an expanded page, divide its clicks in the Landing pages report by the campaign’s.',
        '**Purchases that money would have brought:** line 1 divided by the ad’s cost per purchase, from its own report.',
        '**Sales missed:** line 2 times your average order.',
        '**Days:** use 1. Even when you can’t say when the page died, 1 keeps the sum low.',
      ],
    },
    {
      kind: 'p',
      text: 'On invented numbers: Northmark Run (northmark.example) spends £90 a day on a Meta ad for one trainer. The trainer sells out at 14:00, and 40% of the day’s clicks come after. £90 times 40% is £36 spent. At a £30 cost per purchase that is 1.2 purchases, and at a £55 average order, £66 in sales. Fill the list with yours.',
    },
    {
      kind: 'p',
      text: 'From the week of Monday 9 November the same clicks cost more. On Meta, if you hold the number of clicks steady, multiply line 1 by 1.15, Lebesgue’s reading for that week in 2025. Black Friday week was 1.59. The 1.15 is deliberately low, and a CPM is the price of reach, not of a click, so swap it for your own cost per click for the week, on Google or Meta. On Northmark’s numbers, £36 becomes £41.40.',
    },

    { kind: 'h2', id: 'what-reports-miss', text: 'What Quality Score and a link checker can’t tell you' },
    {
      kind: 'p',
      text: 'Google calls Quality Score [a diagnostic tool and not an input in the ad auction](' +
        QUALITY_SCORE +
        '). Landing page experience is one of its three parts, graded above average, average or below average, and it measures how relevant and useful the page is. A sold out product page can be both. A good grade is not a pass on this check.',
    },
    {
      kind: 'p',
      text: 'A link checker tells you a page loads. Whether the product is in stock and the offer matches the ad is a separate test, and it needs the page opened and read.',
    },

    { kind: 'h2', id: 'where-it-stops', text: 'Where a morning check by hand stops' },
    {
      kind: 'list',
      items: [
        '**One moment.** A pass at 08:00 says nothing about 14:00, when a product can sell out or a sale can start.',
        '**One phone.** You see the page in your own market. A shopper elsewhere can see another price, currency or page.',
        '**Your time.** Count how many ads fit in your 10 minutes. The rest go unchecked on your busiest days.',
        '**Proof.** A screenshot starts an argument. The link, the time and what the page showed settle one.',
      ],
    },
    {
      kind: 'p',
      text: 'For the ads that don’t fit in 10 minutes, and the hours between mornings, Obsession’s Ad landing check runs the same routine from the ad accounts you connect. Each morning, or more often in a sale, it opens every live ad’s page from its link on a phone and a desktop, checks the page loads, the offer and price match and the product is in stock, and drafts the fix, a pause or a new link, for your OK.',
    },
    {
      kind: 'cta',
      text: 'Ad landing check opens every live ad’s landing page as a customer each morning, straight from the ad’s link. Nothing changes until you say OK.',
      to: '/recipes/ad-landing-check',
      label: 'See the ad landing check',
    },

    { kind: 'h2', id: 'when-to-run', text: 'Run it every morning from Monday 9 November' },
    {
      kind: 'list',
      items: [
        '**Every morning from Monday 9 November to Cyber Monday, Monday 30 November.**',
        '**After any change** to a feed, theme, app, tracking template or campaign setting.',
        '**When a sale or a launch goes live,** and again at the hour you expect a product to sell out.',
      ],
    },
    {
      kind: 'p',
      text: 'If your ads don’t change and nothing in your range sells out, one pass a week is enough.',
    },

    { kind: 'h2', id: 'for-agencies', text: 'For agencies: run it on every client before their sale' },
    {
      kind: 'p',
      text: 'Run it on a client’s accounts with the client’s OK. The sheet is the report: the ad, its link, the time, the result and a screenshot of what the page showed. A client who can open the same link has no need to take your word for it. Send the first sheet to the client whose sale starts first.',
    },
    {
      kind: 'cta',
      text: 'The ad is the first step of a customer’s journey. Obsession’s AI test customers take the next ones at each client store: they sign up, leave a basket and stop at checkout, then watch every inbox for 48 hours and bring back what arrived and what never did.',
      to: '/use-cases/leak-checks-for-retention-agencies',
      label: 'Get 5 client stores checked free',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is Final URL expansion in Google Ads?',
          a: 'Final URL expansion is a Google Ads setting that can replace your ad’s final URL with a more relevant page on your domain. It is on by default when you turn on AI Max for Search, and on by default in Performance Max. URL exclusions keep pages out.',
        },
        {
          q: 'How do I turn off Final URL expansion?',
          a: 'Untick the Final URL expansion box in the campaign’s settings, or when you set the campaign up. In Search, turning off Text customization also turns it off. To narrow it instead, add URL exclusions.',
        },
        {
          q: 'How do I see which pages AI Max or Performance Max sent clicks to?',
          a: 'In Search, open the Landing pages report: pages added through Final URL expansion appear beside yours, and the “Selected by” column shows whether AI Max selected the URL. In Performance Max, open the asset report and its Expanded Final URL assets tab.',
        },
        {
          q: 'Why are my ads sending traffic to out of stock products?',
          a: 'A text ad’s link doesn’t read your stock. Catalogue and Shopping ads read your product data, which updates on a schedule: Meta’s documentation says a scheduled feed can’t upload more often than hourly, and Google says its automatic updates aren’t a replacement for regular product data updates. Open each ad’s link every morning to see it first.',
        },
        {
          q: 'How do I stop ads sending traffic to sold out products?',
          a: 'Pause the ad or change its link as soon as you find it. Mark the product out of stock in the data the ad reads, which Meta advises over deleting it from the feed, and add URL exclusions for pages that shouldn’t take paid clicks.',
        },
        {
          q: 'What is a landing page check?',
          a: 'A landing page check opens the page each live ad sends people to, as a shopper would, and confirms it loads, the product is in stock, the offer, price and code match the ad, and the tracking doesn’t break the page.',
        },
        {
          q: 'Does opening an ad’s link cost me a click?',
          a: 'Typing or pasting the final URL doesn’t click the ad, so there is no ad click to bill. It shows as a visit in your analytics, so tell whoever reports your numbers.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Every rule here was read at its source on 23 October 2026: Google Ads Help on Final URL expansion in Search and in Performance Max, AI Max, AI Max reporting and Quality Score; Google’s April 2026 notice on the AI Max upgrade; Merchant Center help on automatic updates; Meta’s developer documentation on scheduled feeds; Lebesgue’s Black Friday data, dated 16 October 2026; and Common Thread Collective’s report of 2 September. Meta’s help pages on out of stock items did not load for us, so nothing here rests on them. The pages we read from Google and Meta give no delay between a sell out and an ad stopping, so we give none. The two quotes come from public Shopify Community threads, linked. We ran no live ads for this piece.',
    },
  ],

  sources: [
    { title: 'About Final URL expansion in Search', publisher: 'Google Ads Help', url: FINAL_URL, date: 'Checked 23 Oct 2026' },
    { title: 'Optimize Google Ads with AI Max for Search campaigns', publisher: 'Google Ads Help', url: AI_MAX, date: 'Checked 23 Oct 2026' },
    { title: 'About reporting in AI Max for Search campaigns', publisher: 'Google Ads Help', url: AI_MAX_REPORTING, date: 'Checked 23 Oct 2026' },
    { title: 'About Final URL expansion in Performance Max', publisher: 'Google Ads Help', url: PMAX_FUE, date: 'Checked 23 Oct 2026' },
    { title: 'About Quality Score', publisher: 'Google Ads Help', url: QUALITY_SCORE, date: 'Checked 23 Oct 2026' },
    { title: 'Add a Final URL suffix', publisher: 'Google Ads Help', url: FINAL_URL_COLUMN, date: 'Checked 23 Oct 2026' },
    { title: 'Dynamic Search Ads upgrade to AI Max', publisher: 'Google', url: AI_MAX_NOTICE, date: '2026-04' },
    { title: 'Allow Merchant Center to update product information automatically', publisher: 'Google Merchant Center Help', url: MERCHANT_AUTO, date: 'Checked 23 Oct 2026' },
    { title: 'Schedule data feed uploads', publisher: 'Meta for Developers', url: META_FEEDS, date: 'Checked 23 Oct 2026' },
    { title: 'Are Meta Ads Worth It on Black Friday? CPM and ROAS data', publisher: 'Lebesgue', url: LEBESGUE, date: '2026-10-16' },
    { title: 'Google AI Max migration went live September 1', publisher: 'Common Thread Collective', url: COMMON_THREAD, date: '2026-09-02' },
    { title: 'How do store owners catch checkout failures before customers report them?', publisher: 'Shopify Community', url: SC_QUIET, date: '2026-07-29' },
    { title: 'Cloudflare broke our checkout twice', publisher: 'Shopify Community', url: SC_CLOUDFLARE, date: '2025-12-06' },
  ],

  related: [
    'recipe:ad-landing-check',
    'recipe:ad-tracking',
    'recipe:mystery-shopper',
    'black-friday-checklist-new-customer',
    '/use-cases/leak-checks-for-ecommerce-stores',
    '/agencies',
  ],
}

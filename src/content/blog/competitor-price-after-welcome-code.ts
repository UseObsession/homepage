import type { BlogPost } from './types'

/* Calendar article, Thu 5 Nov 2026 (Content and Search Plan, 23 Oct 2026): a rival's real price is the price after the
   welcome code. Readers: Shopify and DTC store owners and growth teams, and the CRO and performance agencies that set
   a client's offer before Black Friday. Source idea: _research/seo/library/ads_pages_journeys.json (article idea 4, the
   competitor price searches, the rival-promo pains) with email_sms_lens.json for the welcome and inbox side.
   Thought leadership, not a review: the by hand offer sheet is given complete and free, and the product appears twice
   in the body, where the sheet stops (the tools section's disclosure and the limits section), plus the 2 quiet links.
   Every tool, plan and price was taken from the tool's own page on 23 Oct 2026 (4 Shopify App Store listings, Prisync,
   PageCrawl, Panoramata, the Apify actor); every Shopify rule in Shopify's Help Center the same day; Klaviyo's and
   Omnisend's Black Friday guides; Baymard; Joy Joya's 362 brand test; PPC Land's report of Adobe's forecast (Adobe's own
   release returned 403). Rival sign ups are described only as the public sign up any customer can use.
   Left out on purpose: any PilotX audit figure, the site's 93% and 128 stores, the $410 lamp, the September store
   check (nothing here needs it), and surveillance pricing law (needs counsel; the member price step says only what an
   account sees). Corrected from the library: Snoopie's listing names collection level change alerts and catalogue
   changes, not promotions (a review mentions BOGO detection, which is not in its feature list), and Prisync's own
   page lists $99 a month, not the $129 the library carried. The r/smallbusiness thread ends by asking for a tool, so it
   may be a validation post; the quote is used only for the late rival sale. Reddit could not be reopened on 23 Oct:
   both quotes are from the 3 Oct 2026 pull on disk. Illustrative stores are invented at .example addresses and the
   sums in the table are exact. Buyer words (sign up, welcome email, basket, pop up, Promotions tab); no dashes. */

const SHOPIFY_SALE = 'https://help.shopify.com/en/manual/products/details/product-pricing/sale-pricing'
const SHOPIFY_COMBINE = 'https://help.shopify.com/en/manual/discounts/discount-combinations'
const SHOPIFY_FREESHIP = 'https://help.shopify.com/en/manual/discounts/discount-types/free-shipping'
const SHOPIFY_TYPES = 'https://help.shopify.com/en/manual/discounts/discount-types'
const ADOBE = 'https://ppc.land/adobe-puts-us-online-holiday-spend-at-275-1-billion-up-6-7/'
const KLAVIYO_BF = 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails'
const OMNISEND_BF = 'https://www.omnisend.com/blog/best-time-to-send-black-friday-email/'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const BAYMARD = 'https://baymard.com/lists/cart-abandonment-rate'
const SNOOPIE = 'https://apps.shopify.com/snoopie'
const COMPETETRACKER = 'https://apps.shopify.com/competetracker'
const PRICEKIT = 'https://apps.shopify.com/pricekit'
const CPTP = 'https://apps.shopify.com/competitor-price-tracker-pro'
const PRISYNC = 'https://prisync.com/'
const PAGECRAWL = 'https://pagecrawl.io/blog/shopify-competitor-monitoring-products-prices'
const APIFY = 'https://apify.com/glowing_glove/shopify-competitor-promo-discount-intelligence'
const PANORAMATA = 'https://www.panoramata.co/'
const PANORAMATA_PRICING = 'https://www.panoramata.co/pricing'
const R_RIVAL_SALE = 'https://www.reddit.com/r/smallbusiness/comments/1tfst2u/lost_a_week_of_sales_because_a_competitor_ran_a/'
const R_RIVAL_PROMO = 'https://www.reddit.com/r/ecommerce/comments/1rfldnq/should_i_track_competitor_offer_changes_or_just/'
const PRICE_WATCH = 'https://useobsession.com/recipes/price-watch'

export const post: BlogPost = {
  slug: 'competitor-price-after-welcome-code',
  title: 'A rival’s real price is the price after the welcome code',
  dek: 'A rival’s page price is where its offer starts, not where it ends. Build a rival offer sheet by hand, from the welcome code to the emails of the days after sign up, before Black Friday on Friday 27 November.',
  metaTitle: 'Competitor price monitoring Shopify: price after the code',
  description:
    'Competitor price monitoring Shopify apps read the page price. Build a rival offer sheet by hand: welcome code, stacking, delivery, texts and emails.',
  answer:
    'To monitor a competitor’s real price on Shopify, record what a first order pays, not only the page price: the sale and compare at price, the welcome code and its terms, whether it stacks with the sale, the free shipping line, bundles, member prices, texts and the emails after sign up. Price apps read the public page, so the code and the emails need a customer’s sign up; build the sheet by hand before the rival’s Black Friday offer goes live.',
  primaryKeyword: 'competitor price monitoring shopify',
  keywords: [
    'competitor price monitoring shopify',
    'track competitor prices',
    'competitor pricing analysis ecommerce',
    'competitor discount codes',
    'shopify competitors pricing',
    'best competitor price tracking tool',
  ],
  category: 'Watch other companies',
  published: '2026-10-23',
  updated: '2026-10-23',
  readingMinutes: 10,
  order: 5,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    screen: 'prices',
    workspace: 'company',
    image: {
      src: '/blog/competitor-price-after-welcome-code/hero-1760.webp',
      thumb: '/blog/competitor-price-after-welcome-code/thumb-640.webp',
      alt: 'A blank price tag hanging on a red garment in low sunlight',
      width: 1760,
      height: 990,
      credit: { name: 'Anastasiya Doicheva', url: 'https://www.pexels.com/@anastasiya-doicheva-21177406' },
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'We read the pages of six price tracking apps and page monitors on 23 October 2026. Each follows prices on a rival’s pages. None lists the welcome code among what it follows, and the welcome code is part of what a new customer pays.',
    },
    {
      kind: 'p',
      text: 'A rival’s real price is what a first order pays once the welcome code, the sale, the delivery line and any bundle have been applied. The page price is one line of that sum. A rival offer sheet records every line with a screenshot and a time, so you can set what a new customer pays at three rivals beside what they pay at your store.',
    },
    {
      kind: 'p',
      text: 'The offers you will be set against are being decided now. [Klaviyo’s Black Friday guide](' +
        KLAVIYO_BF +
        '), dated 26 June 2026, puts teasers 2 to 4 weeks before the sale and the first early access discount in the first week of November. [Omnisend](' +
        OMNISEND_BF +
        '), dated 8 September 2026, says to start in mid October. Black Friday is Friday 27 November and Cyber Monday is Monday 30 November. A sheet built this week is finished before your own offer freezes, about 20 November.',
    },
    {
      kind: 'stat',
      value: '14%',
      label: 'highest markdown Adobe forecasts for early November 2026, rising to 21% just before Thanksgiving and 30% in Cyber Week',
      source: 'Adobe forecast of 28 September 2026, as reported by PPC Land (vendor data)',
      href: ADOBE,
    },
    {
      kind: 'quote',
      text: 'our biggest competitor went 28% off on their top SKU during a random Wednesday',
      cite: 'A poster on r/smallbusiness, May 2026, who lost a week of sales to a rival sale',
      href: R_RIVAL_SALE,
    },
    {
      kind: 'p',
      text: 'The forecast is a category figure, not a rival’s number. A rival’s number sits on its own pages, and part of it only after sign up.',
    },

    { kind: 'h2', id: 'cheapest-page', text: 'The cheapest page is not always the cheapest first order' },
    {
      kind: 'p',
      text: 'Take one 200g soy candle at four invented stores, priced for a UK shopper. Rival B has the lowest page price and the highest first order. Rival A has the highest page price and the lowest.',
    },
    {
      kind: 'table',
      caption: 'One soy candle, a first order priced as a UK shopper (invented stores, exact sums)',
      cols: ['Store', 'Page price', 'Welcome offer', 'Delivery', 'First order pays'],
      rows: [
        ['Rival B (emberlane.example)', '£22, was £28', '15% code, not valid on sale items', '£3.95', '£25.95'],
        ['Your store (yourstore.example)', '£24', '10% code in the welcome email', '£3.95 under £40', '£25.55'],
        ['Rival C (tallowtree.example)', '£25', '£5 off by text, minimum spend £25', '£4.50', '£24.50'],
        ['Rival A (wickhouse.example)', '£26', '15% code in the welcome email', 'Free over £20', '£22.10'],
      ],
    },
    {
      kind: 'p',
      text: 'Ranked by page price, your store is second cheapest. Ranked by what a first order pays, it is third, £3.45 behind Rival A. Rival B’s code excludes its own sale price, so the £22 on the page is the whole discount. Rival A’s free delivery line at £20 holds after its 15% code, so a candle that costs £2 more on the page costs £3.45 less to buy.',
    },
    {
      kind: 'art',
      caption: 'Rival A’s candle, worked out the way a first order pays for it. The store and its numbers are the invented ones in the table above.',
      art: {
        kind: 'price',
        title: 'wickhouse.example · 200g soy candle · a first order from the UK',
        rows: [
          { label: 'Page price', value: '£26.00', note: 'No sale price on the page' },
          { label: 'Welcome code WICK15', value: '−£3.90', note: '15%, in the welcome email 6 minutes after sign up' },
          { label: 'Delivery', value: '£0.00', note: 'Free over £20, and the basket is still over £20 after the code' },
        ],
        total: { label: 'A first order pays', value: '£22.10', note: '£2 more than yours on the page, £3.45 less to buy' },
      },
    },

    { kind: 'h2', id: 'set-up', text: 'Set up a customer each rival has never met' },
    {
      kind: 'p',
      text: 'Your own login is the wrong account to test with, and so is any address a rival has seen. Set up a stranger.',
    },
    {
      kind: 'list',
      items: [
        '**A mailbox only you read,** such as a new Gmail address, so you see which tab each email lands in.',
        '**A phone number you control,** for rivals that text their code. Reply STOP to opt out.',
        '**A private window on your phone,** set to the market you sell in, because price, currency and delivery change by market.',
        '**A sheet** with a column for the rival, the line, what you saw, the screenshot and the time to the minute.',
      ],
    },
    {
      kind: 'p',
      text: 'Sign up once per rival through the public form any visitor sees, with details that are yours. Stop at checkout before you pay. Never enter payment details that aren’t yours or place an order you won’t take delivery of. Read each rival’s terms first. This isn’t legal advice, and the rules differ by country.',
    },

    { kind: 'h2', id: 'the-sheet', text: 'What to record at each rival, in the order a customer meets it' },
    {
      kind: 'p',
      text: 'Give every line a screenshot and a time.',
    },

    { kind: 'h3', id: 'page-price', text: 'Page price and compare at price' },
    {
      kind: 'p',
      text: 'Open the product page on your phone and record the price, the compare at price and the date. In Shopify the compare at price is a field the store fills in: [Shopify’s help](' +
        SHOPIFY_SALE +
        ') says to set it to the original price, that both amounts can show on product and collection pages, and that only the sale price shows at checkout. A crossed out price is a number someone typed. Screenshot it weekly: a was price that never moves is a label, not a history.',
    },

    { kind: 'h3', id: 'welcome-offer', text: 'The welcome offer, in the pop up and in the email' },
    {
      kind: 'p',
      text: 'Wait for the pop up, screenshot its wording, then submit. Record the offer as promised, then the email when it lands: code, value, minimum spend, excluded products, expiry and minutes from submit to inbox. Both records matter. In [Joy Joya’s test of 362 brands](' +
        JOYJOYA +
        '), 20 delivered an offer that did not match the pop up, such as 15% promised and 10% in the email, and 158 never sent a welcome email.',
    },

    { kind: 'h3', id: 'stacking', text: 'Whether the code stacks with the sale' },
    {
      kind: 'p',
      text: 'Put a sale item in the basket, go to checkout and enter the code. Screenshot the total before and after. Whether a code combines with a sale is set on each discount, so only checkout answers. [Shopify’s help](' +
        SHOPIFY_COMBINE +
        ') says a code and an automatic discount share a basket only if each is set to combine with the other’s class, and allows up to 5 product or order codes and 1 shipping code per order. Where two codes can’t combine, checkout says “Discount couldn’t be used with your existing discounts”. Copy any refusal word for word, then leave before payment.',
    },

    { kind: 'h3', id: 'shipping', text: 'The free shipping line, before and after the code' },
    {
      kind: 'p',
      text: 'Record the delivery cost at three baskets: just under the free shipping line, just over it, and just over it with the code applied. A threshold can be measured before or after the code, and the third basket shows which. Shopify’s help says the [minimum for a free shipping discount](' +
        SHOPIFY_FREESHIP +
        ') counts product prices only, never tax. Record what checkout shows, not what the banner says.',
    },
    {
      kind: 'stat',
      value: '40%',
      label: 'of shoppers who abandoned a basket, leaving out those just browsing, named extra costs too high (shipping, tax, fees) as a reason',
      source: 'Baymard Institute, checkout abandonment reasons, last updated 22 September 2025',
      href: BAYMARD,
    },

    { kind: 'h3', id: 'bundles', text: 'Bundles and multibuys, priced per item' },
    {
      kind: 'p',
      text: 'Divide a bundle’s price by its item count and write the price per item beside the single price. Add the bundle’s quantity to the basket, because a multibuy applies only when the basket holds the right items. Shopify’s [buy X get Y discounts](' +
        SHOPIFY_TYPES +
        ') apply once the customer meets the purchase requirements, as a code or automatically.',
    },

    { kind: 'h3', id: 'members', text: 'Prices and offers shown only after sign up' },
    {
      kind: 'p',
      text: 'Create an account if the store offers one, then open the product page you screenshotted logged out. Record any difference in price or offer, and check the account area and the sale page. Shopify lets a store [limit a free shipping discount to specific customers or customer segments](' +
        SHOPIFY_FREESHIP +
        '), so an offer can exist that a logged out visitor never sees. Your account shows what that store shows your account, not what it shows anyone else.',
    },

    { kind: 'h3', id: 'texts', text: 'Codes sent by text' },
    {
      kind: 'p',
      text: 'Opt in to the text offer with the number you control, and note the minute the text arrives in your time zone. Some pop ups offer a code only for a phone number. In the same Joy Joya test, 53 of 362 brands never sent the text they promised, so a missing text is a line too: record the deadline you gave it. Reply STOP when you finish. Rules on consent and quiet hours differ by country and by US state, and this isn’t legal advice.',
    },

    { kind: 'h3', id: 'inbox', text: 'The emails of the days after sign up' },
    {
      kind: 'p',
      text: 'Log every email for the first 48 hours, then weekly to Black Friday: arrival time, sender, subject, offer, code, expiry and Gmail tab. Then leave a basket, begin checkout and stop before paying; the reminder is another offer, and its code may differ from the welcome code. Klaviyo’s guide describes an early access discount in the first week of November and a November offer that one brand [sent exclusively to email subscribers](' +
        KLAVIYO_BF +
        '). A rival’s first Black Friday offer may reach your inbox before its site shows it.',
    },

    { kind: 'h2', id: 'decision', text: 'Turn each rival’s first order price into a decision' },
    {
      kind: 'p',
      text: 'For each rival, write the first order total for your best seller and subtract your own. That gap is what matching costs on one first order. Multiply it by the first orders in your last full week, from your own orders report, and by the weeks the rival’s offer runs. With the £3.45 gap above and 100 first orders a week, matching costs £345 a week. Replace the 100 with your report’s number. The sum prices the move only. The orders you lose by not matching are worth what your own conversion data says, and nobody else’s rate belongs here.',
    },
    {
      kind: 'p',
      text: 'Matching is not always the answer. Where the gap sits entirely in the delivery line, moving your own free shipping line closes it for less than a cut to your page prices.',
    },

    { kind: 'h2', id: 'tools', text: 'What Shopify competitor price monitoring apps cover today, and where they stop' },
    {
      kind: 'p',
      text: 'Obsession publishes this and builds in the same area, so each line about another tool comes from its own page as it stood on 23 October 2026. We installed none of them.',
    },
    {
      kind: 'list',
      items: [
        '**[Snoopie](' +
          SNOOPIE +
          ')** has a free plan: paste a store, collection or Amazon link, set a threshold, and it alerts by email, Slack or Discord on price moves, added or removed products and collection level changes, with price history as CSV. Its listing does not mention discount codes.',
        '**[CompeteTracker](' +
          COMPETETRACKER +
          ')** and **[PriceKit](' +
          PRICEKIT +
          ')** track competitor prices and can update yours. CompeteTracker is free for 3 competitors, then $19.99 a month for 10. PriceKit is free for 2 competitors per variant, then $19 a month, with price updates once a day.',
        '**[Competitor Price Tracker Pro](' +
          CPTP +
          ')** ($1.99 a month, up to 5 competitor links per product), **[Prisync](' +
          PRISYNC +
          ')** ($99 a month for 100 products) and **[PageCrawl](' +
          PAGECRAWL +
          ')** ($8 a month for 100 monitors, with a price mode that reads sale and compare at prices) work from links you give them.',
        '**A scraper on [Apify](' +
          APIFY +
          ')** reads store URLs for promotions, discount wording, free shipping thresholds and bundles, listed at $25 per 1,000 stores. Its page does not say which pages it reads or whether it finds codes.',
        '**[Panoramata](' +
          PANORAMATA +
          ')** tracks rivals’ newsletters, flows, ads, landing pages, SMS and website changes, from [$99 a month](' +
          PANORAMATA_PRICING +
          '). Its homepage does not say how it collects emails.',
      ],
    },
    {
      kind: 'p',
      text: 'Most of the price apps start from a link and read the page behind it. Their pages do not claim the welcome code, whether it stacks, the text, the member price or the emails that follow, and those appear only to a customer who signs up. Panoramata and the Apify scraper come at that ground from other sides: one lists rivals’ emails and flows, the other reads promotion wording from public store pages. For the list price of hundreds of products across many rivals, reading the page is the right job.',
    },
    {
      kind: 'p',
      text: 'If you compare 3 rivals on your 10 best sellers, you do not need any of them, ours included. One sheet, refreshed each Monday and Thursday to Cyber Monday, does the job.',
    },

    { kind: 'h2', id: 'where-it-stops', text: 'Where a sheet by hand stops' },
    {
      kind: 'list',
      items: [
        '**1 inbox, 1 moment, 1 view.** Tuesday’s sheet says nothing about Friday, a rival can change its code the day after you note it, and a new subscriber’s Gmail tab can differ from a loyal customer’s.',
        '**No history before you subscribed.** The teasers sent before your sign up can’t be recovered.',
        '**A screenshot is weak proof.** The email itself, with its arrival time, settles an argument. A screenshot starts one.',
        '**Ten rivals every morning in sale week** is 10 sign ups, 10 baskets and 10 inboxes to read before your day starts.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession’s [Price watch](/recipes/price-watch) is built for that edge, and is in early access with a waitlist.',
    },
    {
      kind: 'cta',
      text: 'Price watch sends an AI agent to each rival every morning and joins their email lists for the codes only subscribers get. Every change arrives with a before and after.',
      to: '/recipes/price-watch',
      label: 'See how Price watch works',
    },

    { kind: 'h2', id: 'your-row', text: 'Your own store is the first row' },
    {
      kind: 'p',
      text: 'Rivals are set against what a new customer gets from you, so fill your own row first. Sign up at your store with a new address, enter the welcome code on a sale item and write down the delivery line. A code at its usage limit, or a welcome email that never arrives, is a gap no rival’s price caused. The [Black Friday checklist](/blog/black-friday-checklist-new-customer) runs the whole path.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI test customers sign up at your store, use the welcome code at checkout, leave a basket and watch every inbox for 48 hours. You get what arrived, and what never did.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'for-agencies', text: 'For agencies: put the sheet in front of the client before their offer is set' },
    {
      kind: 'p',
      text: 'Run the sheet on a client’s rivals through their public sign ups, and on the client’s own store with their OK. On a prospect, use only the public sign up any customer can use. One page per client, with the first order gap at each rival, turns an offer debate into arithmetic.',
    },
    {
      kind: 'quote',
      text: 'my competitor had launched a pretty strong promo.',
      cite: 'A store owner on r/ecommerce, February 2026, explaining a dip in performance',
      href: R_RIVAL_PROMO,
    },
    {
      kind: 'p',
      text: 'The same rival promo explains a dip after the sale. A dated sheet puts it in front of the client before it. A client holding the sheet before the 20 November freeze sets their offer with it. A client who first sees it on 1 December reads a post mortem.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I track competitor prices on Shopify?',
          a: 'Record each rival’s page price and compare at price for your top products every week, then what a first order pays after the welcome code, the sale and delivery. Price apps cover the first part; the second needs a sign up and a basket.',
        },
        {
          q: 'What goes into a competitor pricing analysis for ecommerce?',
          a: 'One row per rival with the price a first time customer pays: page and compare at price, welcome code and terms, stacking with the sale, the free shipping line, bundles, member prices, texts and the emails after sign up, each with a screenshot and a time.',
        },
        {
          q: 'How do I find a competitor’s discount codes?',
          a: 'Use the codes a rival shows every customer: the banner, the pop up, the welcome email and the text. Record each with its terms and expiry. A code made for someone else, such as a friend’s referral or a leaked code, is not yours to use.',
        },
        {
          q: 'Do Shopify price tracking apps track discount codes?',
          a: 'In the listings as they stood on 23 October 2026, the price apps follow product prices, stock or catalogue changes, and none mentions discount codes. A scraper on Apify lists promotions, discount wording and free shipping thresholds. Check each listing before you buy.',
        },
        {
          q: 'Can I sign up to a competitor’s email list to see its offers?',
          a: 'The sign up form is open to any customer, and this method uses only that: your details, once per rival, no fake payment details, no orders you won’t take. This isn’t legal advice, so read the rival’s terms and the rules where you trade.',
        },
        {
          q: 'When do rivals start their Black Friday offers?',
          a: 'Klaviyo’s guide puts teasers 2 to 4 weeks before the sale and the first early access discount in the first week of November. Omnisend says to start in mid October. Adobe forecasts markdowns of up to 14% in early November.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Each tool’s features, plans and prices were taken from its own page on 23 October 2026, and Shopify’s rules from its Help Center the same day. Adobe’s forecast comes from PPC Land’s report of 28 September 2026, because Adobe’s own release would not open. Baymard’s page says it was last updated on 22 September 2025. The two store owners’ quotes come from the pull of 3 October 2026, as Reddit could not be reopened on 23 October. The stores in the table are invented and their sums are exact. We installed none of the apps and ran no rival sign up for this piece. Nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'Adobe puts US online holiday spend at $275.1 billion, up 6.7%', publisher: 'PPC Land, reporting Adobe’s forecast', url: ADOBE, date: '2026-09-29' },
    { title: 'The 2026 Black Friday email sending guide', publisher: 'Klaviyo', url: KLAVIYO_BF, date: '2026-06-26' },
    { title: 'The absolute best time to send your Black Friday emails', publisher: 'Omnisend', url: OMNISEND_BF, date: '2026-09-08' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Cart abandonment rate statistics', publisher: 'Baymard Institute', url: BAYMARD, date: 'Last updated 22 Sep 2025' },
    { title: 'Sale pricing', publisher: 'Shopify Help Center', url: SHOPIFY_SALE, date: 'Checked 23 Oct 2026' },
    { title: 'Discount combinations', publisher: 'Shopify Help Center', url: SHOPIFY_COMBINE, date: 'Checked 23 Oct 2026' },
    { title: 'Free shipping discounts', publisher: 'Shopify Help Center', url: SHOPIFY_FREESHIP, date: 'Checked 23 Oct 2026' },
    { title: 'Discount types', publisher: 'Shopify Help Center', url: SHOPIFY_TYPES, date: 'Checked 23 Oct 2026' },
    { title: 'Snoopie: Competitor Tracking', publisher: 'Shopify App Store', url: SNOOPIE, date: 'Checked 23 Oct 2026' },
    { title: 'CompeteTracker', publisher: 'Shopify App Store', url: COMPETETRACKER, date: 'Checked 23 Oct 2026' },
    { title: 'PriceKit: Smart Price Tracking', publisher: 'Shopify App Store', url: PRICEKIT, date: 'Checked 23 Oct 2026' },
    { title: 'Competitor Price Tracker Pro', publisher: 'Shopify App Store', url: CPTP, date: 'Checked 23 Oct 2026' },
    { title: 'Competitor price tracking and dynamic pricing software', publisher: 'Prisync', url: PRISYNC, date: 'Checked 23 Oct 2026' },
    { title: 'Shopify competitor monitoring: track products, prices, and store changes', publisher: 'PageCrawl', url: PAGECRAWL, date: '2026-09-25' },
    { title: 'Shopify Competitor Promo & Discount Intelligence', publisher: 'Apify', url: APIFY, date: 'Checked 23 Oct 2026' },
    { title: 'Competitor marketing tracking', publisher: 'Panoramata', url: PANORAMATA, date: 'Checked 23 Oct 2026' },
    { title: 'Panoramata pricing', publisher: 'Panoramata', url: PANORAMATA_PRICING, date: 'Checked 23 Oct 2026' },
    { title: 'Lost a week of sales because a competitor ran a sale', publisher: 'r/smallbusiness', url: R_RIVAL_SALE, date: '2026-05-17' },
    { title: 'Should I track competitor offer changes or just…', publisher: 'r/ecommerce', url: R_RIVAL_PROMO, date: '2026-02-26' },
    { title: 'Price watch', publisher: 'Obsession', url: PRICE_WATCH, date: 'Checked 23 Oct 2026' },
  ],

  related: [
    'recipe:price-watch',
    'recipe:email-sms-tracking',
    'recipe:competitor-tracking',
    '/use-cases/leak-checks-for-ecommerce-stores',
    '/sample-output',
    'black-friday-checklist-new-customer',
  ],
}

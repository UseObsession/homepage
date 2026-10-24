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
const R_RIVAL_PROMO = 'https://www.reddit.com/r/ecommerce/comments/1rfldnq/should_i_track_competitor_offer_changes_or_just/'

export const post: BlogPost = {
  slug: 'competitor-price-after-welcome-code',
  title: 'A competitor’s real price is the price after the welcome code',
  dek: 'Price monitoring apps read a competitor’s page price. To see what a first order pays, from the welcome code to the emails after sign up, build a sheet by hand before Black Friday on Friday 27 November.',
  metaTitle: 'Competitor price monitoring on Shopify: price after the code',
  description:
    'Competitor price monitoring apps on Shopify read the page price. Record what a first order pays: welcome code, stacking, shipping, texts and emails.',
  answer:
    'To monitor a competitor’s real price on Shopify, record what a first order pays: the sale and compare at price, the welcome code and its terms, whether the code stacks with the sale, the free shipping threshold, bundles, member prices, texts and the emails after sign up. Price monitoring apps read the public page, and the code and the emails appear only after a customer signs up, so record them by hand before the competitor’s Black Friday offer goes live.',
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
      text: 'Shopify and DTC store owners, growth teams and the agencies that set a client’s offer can record each competitor’s first order price by hand before Black Friday. The first order price is what a new customer pays once the welcome code, the sale, any bundle and the shipping charge are applied. The page price is one part of it.',
    },
    {
      kind: 'p',
      text: 'On 23 October 2026 we read the pages of 6 price monitoring apps and page monitors. Each tracks prices on a competitor’s pages, and none lists the welcome code among what it tracks. An offer sheet built by hand records each part of the first order price with a screenshot and a time, so you can compare what a new customer pays at 3 competitors with what they pay at your store.',
    },
    {
      kind: 'p',
      text: '[Klaviyo’s Black Friday guide](' +
        KLAVIYO_BF +
        '), dated 26 June 2026, puts teasers 2 to 4 weeks before the sale and the first early access discount in the first week of November. [Omnisend](' +
        OMNISEND_BF +
        '), in a post dated 8 September 2026, says to start in mid October. Black Friday is Friday 27 November and Cyber Monday is Monday 30 November. A sheet built this week is complete before your own offer freezes, about 20 November.',
    },
    {
      kind: 'stat',
      value: '14%',
      label: 'highest markdown Adobe forecasts for early November 2026, rising to 21% shortly before Thanksgiving and 30% in Cyber Week',
      source: 'Adobe forecast of 28 September 2026, as reported by PPC Land',
      href: ADOBE,
    },

    { kind: 'h2', id: 'cheapest-page', text: 'How a first order price differs from the page price' },
    {
      kind: 'p',
      text: 'The store with the lowest page price can have the highest first order price. In this example, a 200g soy candle is priced for a UK shopper at 4 invented stores.',
    },
    {
      kind: 'table',
      caption: 'A 200g soy candle, first order priced for a UK shopper (invented stores, exact sums)',
      cols: ['Store', 'Page price', 'Welcome offer', 'Shipping', 'First order price'],
      rows: [
        ['Competitor B (emberlane.example)', '£22, was £28', '15% code, not valid on sale items', '£3.95', '£25.95'],
        ['Your store (yourstore.example)', '£24', '10% code in the welcome email', '£3.95 under £40', '£25.55'],
        ['Competitor C (tallowtree.example)', '£25', '£5 off by text, minimum spend £25', '£4.50', '£24.50'],
        ['Competitor A (wickhouse.example)', '£26', '15% code in the welcome email', 'Free over £20', '£22.10'],
      ],
    },
    {
      kind: 'p',
      text: 'Your store has the second lowest page price and the third lowest first order price, £3.45 more than Competitor A. Competitor B’s code isn’t valid on sale items, so its £22 sale price is the only discount a first order gets. Competitor A’s 15% code brings its candle to £22.10, which is still over its £20 free shipping threshold, so a first order there pays no shipping.',
    },
    {
      kind: 'art',
      caption: 'Competitor A’s candle, priced as a first order. The store and its numbers are the invented ones from the table.',
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

    { kind: 'h2', id: 'tools', text: 'What Shopify competitor price monitoring apps record', compare: true },
    {
      kind: 'p',
      text: 'Most price monitoring apps start from a link and read the page behind it. We make Obsession, which does some of this, so every line about another tool is taken from that tool’s own pages, checked on 23 October 2026.',
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
          ')** tracks competitors’ newsletters, flows, ads, landing pages, SMS and website changes, from [$99 a month](' +
          PANORAMATA_PRICING +
          '). Its homepage does not say how it collects emails.',
      ],
    },
    {
      kind: 'p',
      text: 'The price monitoring apps’ pages do not list the welcome code, whether it stacks, the text offer, the member price or the emails that follow, all of which appear only to a customer who signs up. Panoramata lists competitors’ emails and flows, and the Apify scraper reads promotion wording from public store pages. Reading the page covers list prices across hundreds of products and many competitors. The tools that collect rivals’ emails are compared in [competitor email tracking tools](/blog/competitor-email-tracking-tools).',
    },

    { kind: 'h2', id: 'set-up', text: 'Setting up a new mailbox, phone number, browser and sheet' },
    {
      kind: 'p',
      text: 'Use a mailbox, phone number and browser that no competitor has seen before, and keep your own login and any address a competitor already knows out of the test. You need:',
    },
    {
      kind: 'list',
      items: [
        '**A mailbox only you read,** such as a new Gmail address, so you can see which tab each email lands in.',
        '**A phone number you control,** for competitors that send their code by text.',
        '**A private window on your phone,** set to the market you sell in, because price, currency and shipping change by market.',
        '**A sheet** with a column for the competitor, the item, what you saw, the screenshot and the time to the minute.',
      ],
    },
    {
      kind: 'p',
      text: 'Sign up once per competitor through the public form any visitor sees, using your own details, and stop at checkout before you pay. Never enter payment details that aren’t yours or place an order you won’t take delivery of. This isn’t legal advice, so read each competitor’s terms first and check the rules in each country where you trade.',
    },

    { kind: 'h2', id: 'the-sheet', text: 'What to record at each competitor' },
    {
      kind: 'p',
      text: 'Record each item in the order a new customer meets it, with a screenshot and the time.',
    },

    { kind: 'h3', id: 'page-price', text: 'Page price and compare at price' },
    {
      kind: 'p',
      text: 'Open the product page on your phone and record the price, the compare at price and the date. In Shopify the compare at price is a field the store fills in. [Shopify’s help](' +
        SHOPIFY_SALE +
        ') says to set it to the original price, that both amounts can show on product and collection pages, and that only the sale price shows at checkout. Screenshot the page weekly, so your sheet holds the competitor’s price history as you recorded it.',
    },

    { kind: 'h3', id: 'welcome-offer', text: 'The welcome offer in the pop up and in the email' },
    {
      kind: 'p',
      text: 'Wait for the pop up, screenshot its wording, then submit. When the welcome email arrives, record the code, its value, minimum spend, excluded products and expiry, and the minutes from submit to inbox. The pop up and the email can differ. In [Joy Joya’s test of 362 brands](' +
        JOYJOYA +
        '), 20 sent an offer that did not match the pop up, such as 15% promised and 10% in the email, and 158 sent no welcome email.',
    },

    { kind: 'h3', id: 'stacking', text: 'Whether the code stacks with the sale' },
    {
      kind: 'p',
      text: 'Put a sale item in the basket, go to checkout and enter the welcome code. Screenshot the total before and after. Each discount has its own setting for combining with other discounts, so checkout is the only place to see whether a code stacks. [Shopify’s help](' +
        SHOPIFY_COMBINE +
        ') says a code and an automatic discount share a basket only if each is set to combine with the other’s class, and allows up to 5 product or order codes and 1 shipping code per order. Where 2 codes can’t combine, checkout says “Discount couldn’t be used with your existing discounts”. Copy any refusal word for word, then leave before payment.',
    },

    { kind: 'h3', id: 'shipping', text: 'The free shipping threshold, before and after the code' },
    {
      kind: 'p',
      text: 'Record the shipping charge at 3 baskets: a little under the free shipping threshold, a little over it, and a little over it with the code applied. A store can measure the threshold before or after the code, and the third basket shows which. Shopify’s help says the [minimum for a free shipping discount](' +
        SHOPIFY_FREESHIP +
        ') counts product prices only, never tax. Take each shipping charge from the checkout page.',
    },
    {
      kind: 'stat',
      value: '40%',
      label: 'of shoppers who abandoned a basket, leaving out those only browsing, named extra costs too high (shipping, tax, fees) as a reason',
      source: 'Baymard Institute, checkout abandonment reasons, last updated 22 September 2025',
      href: BAYMARD,
    },

    { kind: 'h3', id: 'bundles', text: 'Bundles and multibuys, priced per item' },
    {
      kind: 'p',
      text: 'Divide a bundle’s price by its item count and write the price per item beside the single price. Then add the bundle’s quantity to the basket, as a multibuy applies only when the basket holds the right items. Shopify’s [buy X get Y discounts](' +
        SHOPIFY_TYPES +
        ') apply once the customer meets the purchase requirements, as a code or automatically.',
    },

    { kind: 'h3', id: 'members', text: 'Prices and offers shown only after sign up' },
    {
      kind: 'p',
      text: 'Create an account if the store offers one, then open the product page you screenshotted while logged out. Record any difference in price or offer, and check the account area and the sale page. Shopify lets a store [limit a free shipping discount to specific customers or customer segments](' +
        SHOPIFY_FREESHIP +
        '), so an offer can exist that a logged out visitor never sees. Record the result as what your account was shown, because other accounts can be shown other offers.',
    },

    { kind: 'h3', id: 'texts', text: 'Codes sent by text' },
    {
      kind: 'p',
      text: 'Opt in to the text offer with the number you control, and note the minute the text arrives in your time zone. Some pop ups offer a code only in exchange for a phone number. In the same Joy Joya test, 53 of 362 brands never sent the text they promised, so record a missing text as an item, with the deadline you set for it. Reply STOP when you finish. Rules on consent and quiet hours differ by country and by US state, and this isn’t legal advice.',
    },

    { kind: 'h3', id: 'inbox', text: 'The emails in the days after sign up' },
    {
      kind: 'p',
      text: 'Log every email for the first 48 hours, then weekly until Black Friday, with its arrival time, sender, subject, offer, code, expiry and Gmail tab. Then leave a basket, begin checkout and stop before paying. The reminder that follows is another offer, and its code may differ from the welcome code. Klaviyo’s guide describes an early access discount in the first week of November and a November offer that one brand [sent exclusively to email subscribers](' +
        KLAVIYO_BF +
        '), so [a competitor’s first Black Friday offer](/blog/black-friday-rival-report-template) may reach your inbox before its site shows it.',
    },

    { kind: 'h2', id: 'your-row', text: 'Adding your own store to the sheet' },
    {
      kind: 'p',
      text: 'Run the same steps on your own store and put it in the first row, so each competitor is compared with what a new customer gets from you. Sign up with a new address, enter the welcome code on a sale item and record the shipping charge. Your row can show problems no competitor caused, such as a code at its usage limit or [a welcome email that never arrives](/blog/welcome-basket-email-not-sending). The [Black Friday checklist](/blog/black-friday-checklist-new-customer) covers every step a new customer takes at your store.',
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers sign up at your store, use the welcome code at checkout, leave a basket and watch every inbox for 48 hours. The check is free, and the result lists every message that arrived and every one that didn’t.',
      to: '/use-cases/leak-checks-for-ecommerce-stores',
      label: 'Check your store free',
    },

    { kind: 'h2', id: 'decision', text: 'Calculating the cost of matching a competitor’s offer' },
    {
      kind: 'p',
      text: 'For your best seller, subtract each competitor’s first order price from your own. The difference is what matching that competitor costs on one first order. Multiply it by the first orders in your last full week, from your orders report, and by the number of weeks the competitor’s offer runs. With the £3.45 difference from the example and 100 first orders a week, matching costs £345 a week. Use your own weekly figure in place of the 100. To value the orders you lose by not matching, use your own conversion data.',
    },
    {
      kind: 'p',
      text: 'Where the whole difference is in the shipping charge, lowering your own free shipping threshold closes it at a lower cost than cutting your page prices.',
    },

    { kind: 'h2', id: 'for-agencies', text: 'Using the offer sheet with agency clients' },
    {
      kind: 'p',
      text: 'Agencies can run the sheet on a client’s competitors through their public sign ups, and on the client’s own store with the client’s OK. For a prospect, use only the public sign up any customer can use. Give each client 1 page showing the first order price difference at each competitor, and set the offer against those figures.',
    },
    {
      kind: 'p',
      text: 'Share the sheet before the 20 November freeze, while the client can still change their offer. Seen after the sale, for example on 1 December, a competitor’s promotion is useful only as the explanation for a dip in sales, as in this store owner’s post:',
    },
    {
      kind: 'quote',
      text: 'my competitor had launched a pretty strong promo.',
      cite: 'A store owner on r/ecommerce, February 2026, explaining a dip in performance',
      href: R_RIVAL_PROMO,
    },

    { kind: 'h2', id: 'where-it-stops', text: 'Limits of an offer sheet kept by hand' },
    {
      kind: 'p',
      text: 'A sheet refreshed each Monday and Thursday until Cyber Monday covers 3 competitors and your 10 best sellers, and needs no app, including ours.',
    },
    {
      kind: 'list',
      items: [
        '**The sheet shows 1 inbox on the day you check it.** Tuesday’s sheet doesn’t show Friday’s offer, a competitor can change its code the day after you record it, and a new subscriber’s Gmail tab can differ from a loyal customer’s.',
        '**The sheet starts on the day you sign up.** Teasers sent before then can’t be recovered.',
        '**Screenshots can be disputed.** Keep each email as it arrived, with its arrival time.',
        '**The work grows with each competitor.** Checking 10 competitors every morning in sale week means 10 sign ups, 10 baskets and 10 inboxes to read before your day starts.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession’s [Price watch](/recipes/price-watch) is built for checks at this scale and is in early access, with a waitlist.',
    },
    {
      kind: 'cta',
      text: 'Price watch sends an AI agent to each competitor every morning and joins their email lists for the codes only subscribers get. Each change is reported with a before and after.',
      to: '/recipes/price-watch',
      label: 'See how Price watch works',
    },

    { kind: 'h2', id: 'questions', text: 'Questions' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I track competitor prices on Shopify?',
          a: 'Record each competitor’s page price and compare at price for your top products every week, then the first order price after the welcome code, the sale and shipping. Price monitoring apps cover the page price. The first order price needs a sign up and a basket.',
        },
        {
          q: 'What goes into a competitor pricing analysis for ecommerce?',
          a: 'One row per competitor with the price a first time customer pays: page and compare at price, welcome code and terms, stacking with the sale, the free shipping threshold, bundles, member prices, texts and the emails after sign up, each with a screenshot and a time.',
        },
        {
          q: 'How do I find a competitor’s discount codes?',
          a: 'Sign up as a customer and record the codes the competitor shows every customer: the banner, the pop up, the welcome email and the text. Record each with its terms and expiry. Codes issued to someone else, such as a friend’s referral code or a leaked code, fall outside this method.',
        },
        {
          q: 'Do Shopify price tracking apps track discount codes?',
          a: 'None of the price monitoring app listings checked on 23 October 2026 mentions discount codes. They follow product prices, stock or catalogue changes. A scraper on Apify lists promotions, discount wording and free shipping thresholds, so check each listing before you buy.',
        },
        {
          q: 'Can I sign up to a competitor’s email list to see its offers?',
          a: 'The sign up form is open to any customer, and this method uses only that form, once per competitor, with your own details, no payment details that aren’t yours and no orders you won’t take. This isn’t legal advice, so read the competitor’s terms and the rules where you trade.',
        },
        {
          q: 'When do competitors start their Black Friday offers?',
          a: 'Klaviyo’s guide puts teasers 2 to 4 weeks before the sale and the first early access discount in the first week of November. Omnisend says to start in mid October. Adobe forecasts markdowns of up to 14% in early November.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Each tool’s features, plans and prices are as its own page showed them on 23 October 2026. Adobe’s forecast is cited from PPC Land’s report of 28 September 2026, because Adobe’s own release would not open. The store owner’s quote comes from a Reddit thread read on 3 October 2026, as Reddit could not be reopened on 23 October. The stores in the table are invented and their sums are exact. We installed none of the apps and ran no competitor sign up. Nothing here is legal advice.',
    },
  ],

  sources: [
    { title: 'Adobe puts US online holiday spend at $275.1 billion, up 6.7%', publisher: 'PPC Land, reporting Adobe’s forecast', url: ADOBE, date: '2026-09-29' },
    { title: 'The 2026 Black Friday email sending guide', publisher: 'Klaviyo', url: KLAVIYO_BF, date: '2026-06-26' },
    { title: 'The absolute best time to send your Black Friday emails', publisher: 'Omnisend', url: OMNISEND_BF, date: '2026-09-08' },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'Cart abandonment rate statistics', publisher: 'Baymard Institute', url: BAYMARD, date: '2025-09-22' },
    { title: 'Sale pricing', publisher: 'Shopify Help Center', url: SHOPIFY_SALE },
    { title: 'Discount combinations', publisher: 'Shopify Help Center', url: SHOPIFY_COMBINE },
    { title: 'Free shipping discounts', publisher: 'Shopify Help Center', url: SHOPIFY_FREESHIP },
    { title: 'Discount types', publisher: 'Shopify Help Center', url: SHOPIFY_TYPES },
    { title: 'Snoopie: Competitor Tracking', publisher: 'Shopify App Store', url: SNOOPIE },
    { title: 'CompeteTracker', publisher: 'Shopify App Store', url: COMPETETRACKER },
    { title: 'PriceKit: Smart Price Tracking', publisher: 'Shopify App Store', url: PRICEKIT },
    { title: 'Competitor Price Tracker Pro', publisher: 'Shopify App Store', url: CPTP },
    { title: 'Competitor price tracking and dynamic pricing software', publisher: 'Prisync', url: PRISYNC },
    { title: 'Shopify competitor monitoring: track products, prices, and store changes', publisher: 'PageCrawl', url: PAGECRAWL, date: '2026-09-25' },
    { title: 'Shopify Competitor Promo & Discount Intelligence', publisher: 'Apify', url: APIFY },
    { title: 'Competitor marketing tracking', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Panoramata pricing', publisher: 'Panoramata', url: PANORAMATA_PRICING },
    { title: 'Should I track competitor offer changes or just…', publisher: 'r/ecommerce', url: R_RIVAL_PROMO, date: '2026-02-26' },
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

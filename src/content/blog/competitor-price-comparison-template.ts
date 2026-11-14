import type { BlogPost } from './types'

/* Price guides, piece B1 (_research/seo/price-tracking-14nov/PLAN.md and WRITER_BRIEF.md; approved by Seun 14 Nov
   2026): a competitor price comparison template to copy, the method to fill it by hand, which columns go stale first,
   a worked example and where tools take over. Primary "competitor price comparison template"; secondaries from Google
   autocomplete (US and UK, 14 Nov, autocomplete_14nov.json): competitor price comparison excel template free,
   competitor price comparison chart, competitor price comparison table, competitor pricing analysis template,
   competitor price analysis excel, competitive pricing analysis, competitor price comparison and analysis excel
   template. "Competitor price tracking tools" stays with /blog/best-competitor-price-tracking-tools (linked with that
   anchor), "competitor price monitoring shopify" with /blog/competitor-price-after-welcome-code, "member only pricing"
   with /blog/member-only-pricing, "track competitor price changes" with /recipes/price-watch and "member price
   intelligence" with /use-cases/member-prices-for-price-intelligence (docs/SEARCH.md §2). Readers: pricing teams,
   ecommerce brands, brands' channel and marketplace teams, and agencies that set clients' prices or run their
   conversion and email work.
   Every outside fact was read on its own page on 14 Nov 2026: Baymard's cart abandonment statistics (updated 28 Oct
   2026), Shopify Help (sale pricing; combining discounts), Joy Joya's 362 brand test (27 Jul 2026), Klaviyo's Black
   Friday sending guide (26 Jun 2026), Prisync's and Pricefy's pricing pages, Microsoft's and Google's MIN help pages,
   Google's IMPORTXML help page, Price2Spy's Why page, help article (7 Oct 2026) and pricing page, and Visualping's
   login help article (edited 14 Nov 2026) and pricing page. Obsession's lines use only the live Price watch recipe
   and member prices use case words: public and member prices, delivery and subscriber codes read each morning (every
   hour in a sale week if chosen), a basket filled to read the total and stopped before payment, a loyalty scheme that
   asks for identity details stops there, Insights as one question across many companies with a row each. Lumenskin,
   Dewhaus, Florabright, yourstore.example and every price, code and time in the tables and pictures are invented, and
   their sums are exact. British English, numerals, no dashes. */

const BAYMARD = 'https://baymard.com/lists/cart-abandonment-rate'
const SHOPIFY_SALE = 'https://help.shopify.com/en/manual/products/details/product-pricing/sale-pricing'
const SHOPIFY_COMBINE = 'https://help.shopify.com/en/manual/discounts/discount-combinations'
const JOYJOYA = 'https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands'
const KLAVIYO_BF = 'https://www.klaviyo.com/blog/when-to-send-black-friday-emails'
const PRISYNC_PRICING = 'https://prisync.com/pricing/'
const PRICEFY_PRICING = 'https://www.pricefy.io/pricing'
const EXCEL_MIN = 'https://support.microsoft.com/en-us/office/min-function-61635d12-920f-4ce2-a70f-96f202dcc152'
const SHEETS_MIN = 'https://support.google.com/docs/answer/3094017'
const IMPORTXML = 'https://support.google.com/docs/answer/3093342'
const PRICE2SPY_WHY = 'https://www.price2spy.com/why.html'
const PRICE2SPY_HELP = 'https://help.price2spy.com/en/articles/6448343-what-does-price2spy-capture'
const PRICE2SPY_PRICING = 'https://www.price2spy.com/pricing.html'
const VISUALPING_LOGIN = 'https://help.visualping.io/en/articles/4443393'
const VISUALPING_PRICING = 'https://visualping.io/pricing'

export const post: BlogPost = {
  slug: 'competitor-price-comparison-template',
  title: 'Competitor price comparison template: what to compare and how to keep it current',
  dek: 'A 10 column competitor price comparison table for pricing teams, ecommerce brands and the agencies that set their prices. It runs from the list price to the price after the welcome code and the member price. Copy it into Excel or Google Sheets and fill each column by hand, with a date and a source on every price.',
  metaTitle: 'Competitor price comparison template for ecommerce teams',
  description:
    'Competitor price comparison template for ecommerce and pricing teams: list price, price after the welcome code, member price, delivery, stock, date read.',
  answer:
    'A competitor price comparison template is a table that sets each competitor’s prices, delivery and stock beside yours, product by product, from the list price to the member price. The price after the welcome code and the member price appear only after a sign-up with a new email address or a free account. Obsession keeps each competitor’s subscriber codes, member prices and emailed offers, dated with a screenshot, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'competitor price comparison template',
  keywords: [
    'competitor price comparison excel template free',
    'competitor price comparison chart',
    'competitor price comparison table',
    'competitor pricing analysis template',
    'competitor price analysis excel',
    'competitive pricing analysis',
    'competitor price comparison and analysis excel template',
  ],
  category: 'Watch other companies',
  published: '2026-11-14',
  updated: '2026-11-14',
  readingMinutes: 12,
  order: 7,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'One serum: a scraper vs a new customer',
      period: 'Vitamin C serum 30 ml at lumenskin.example, as a UK customer saw it on 13 November 2026',
      cols: ['Column', 'Price scraper', 'New customer'],
      rows: [
        { name: 'List price', cells: ['£30.00', '£30.00'], tone: 'info' },
        { name: 'After welcome code', cells: ['Blank', '£25.50'], tone: 'ok' },
        { name: 'Member price', cells: ['Blank', '£27.00'], tone: 'ok' },
        { name: 'Delivery', cells: ['Free over £25', 'Free over £25'], tone: 'info' },
        { name: 'Stock', cells: ['In stock', 'In stock'], tone: 'info' },
      ],
      notes: [
        'A scraper reading the product page fills the list price, delivery and stock. A new customer who signed up was shown 2 lower prices, the lowest £25.50 after the welcome code.',
        'Example: Lumenskin and every price here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'A competitor price comparison template shows what a customer pays for the same product at each competitor. Pricing teams, ecommerce brands, brands’ channel and marketplace teams, and agencies that set clients’ prices all keep one. The template has 10 columns, and 2 of them hold prices a public product page never shows: the price after the welcome code and the member price. Copy it into Excel or Google Sheets, fill it by hand with a new email address and a free account, and refresh the columns that change fastest every week.',
    },

    { kind: 'h2', id: 'template', text: 'What goes in a competitor price comparison template?' },
    {
      kind: 'p',
      text: 'A competitor price comparison template holds a row for each product at each competitor, plus a row for your own store read the same way. Each row records what a customer pays and where each number came from, so anyone on the team can check it next week.',
    },
    {
      kind: 'table',
      caption: 'The competitor price comparison template: copy the 10 columns into Excel or Google Sheets. The first row says what goes in each cell, and the second is an invented example',
      cols: ['Product', 'Competitor', 'Our price', 'List price', 'After welcome code', 'Member price', 'Delivery', 'Stock', 'Date read', 'Source'],
      rows: [
        [
          'Name, size and variant',
          'The store’s web address',
          'Your list price today',
          'Price on the product page',
          'Checkout total with the code, before delivery',
          'Price shown when signed in',
          'Charge on this basket, in £',
          'In stock, low or out',
          'Day and time',
          'Page link, email or screenshot',
        ],
        [
          'Vitamin C serum 30 ml',
          'lumenskin.example',
          '£28.00',
          '£30.00',
          '£25.50',
          '£27.00',
          '£0.00',
          'In stock',
          '13 Nov 2026, 09:10',
          'Page, welcome email, account page; free delivery over £25',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'The list price is the price any visitor sees on the product page. A welcome code is the discount a store sends after a sign-up, by email or text. A [member price](/glossary/member-price) is a lower price a company gives only to loyalty members or account holders. A [signed-in price](/glossary/signed-in-price) is any price a site shows only after a visitor logs in.',
    },
    {
      kind: 'p',
      text: 'Delivery and stock decide whether the lowest price wins the order, which is why they sit beside the prices.',
    },
    {
      kind: 'stat',
      value: '40%',
      label: 'of US online shoppers who abandoned a basket for a reason other than browsing named extra costs such as shipping, tax and fees. 20% named slow delivery',
      source: 'Baymard Institute, cart abandonment statistics, updated 28 October 2026',
      href: BAYMARD,
    },

    { kind: 'h2', id: 'by-hand', text: 'How do you fill each column by hand?' },
    {
      kind: 'p',
      text: 'Use a phone or a private browser window set to the country you sell in, an email address and a phone number no competitor has seen, and the sheet. Fill the columns in the order a new customer meets them, and screenshot each price as you record it.',
    },
    { kind: 'h3', id: 'list-price', text: 'List price, delivery and stock' },
    {
      kind: 'p',
      text: 'Open the product page signed out and record the price, any crossed-out price and the stock message. On a Shopify store a crossed-out price comes from the compare-at price field, and [Shopify’s help](' +
        SHOPIFY_SALE +
        ') says only the sale price shows at checkout. Add the product to the basket, go to checkout, enter your delivery address and record the delivery charge for that basket and the spend where free delivery starts.',
    },
    { kind: 'h3', id: 'welcome-code', text: 'The price after the welcome code' },
    {
      kind: 'p',
      text: 'Sign up through the store’s pop-up or footer form with the new email address, then wait for the welcome email. Take the code to checkout on the same product and record the total before delivery. Shopify shows a code’s saving as a crossed-out price at checkout, so the total there is the number to record. Stop before payment.',
    },
    {
      kind: 'p',
      text: 'Record the checkout total, never the pop-up’s promise. [Shopify’s help](' +
        SHOPIFY_COMBINE +
        ') says a code applies beside another discount only when each is set to combine, and checkout shows “Discount couldn’t be used with your existing discounts” when they can’t. In [Joy Joya’s test of 362 ecommerce brands](' +
        JOYJOYA +
        '), updated 27 July 2026, 20 sent a welcome offer that didn’t match the pop-up. For example, a pop-up promises 15% and the email gives 10%. If no code arrives within 48 hours, copy the list price into the column and write “no code” in the source.',
    },
    { kind: 'h3', id: 'member-price', text: 'The member price' },
    {
      kind: 'p',
      text: 'Where the store offers a free account or loyalty scheme, create one with the same new address, sign in and open the same product page. Record the price you’re shown and the scheme’s name. Where joining asks for identity details, such as a tax number or a membership number issued in a shop, stop there and note it in the source column. [Member-only pricing](/blog/member-only-pricing) explains how grocers, warehouse clubs and hotels set these prices.',
    },
    { kind: 'h3', id: 'date-source', text: 'The date read and the source' },
    {
      kind: 'p',
      text: 'Record the day and time of each price to the minute, and link the screenshot or the email it came from. A price without a date can’t be set against next week’s, and a pricing manager, a client or a retailer’s buyer will ask where it came from.',
    },
    {
      kind: 'p',
      text: 'Run every step on your own store too, with its own new address, and put it first in each product’s rows. Use the sign-up form any customer can use, with your own details, no payment details that aren’t yours and no order you won’t take. Read each competitor’s terms first, as nothing here is legal advice. [Competitor price monitoring for Shopify stores](/blog/competitor-price-after-welcome-code) adds bundles, text codes and stacking to the same method.',
    },

    { kind: 'h2', id: 'refresh', text: 'Which columns in a competitor price comparison table go stale fastest?' },
    {
      kind: 'p',
      text: 'The price after the welcome code and the stock message change fastest, the list price next and delivery terms least often. Refresh each column as often as it moves in your category, and read every column daily in a sale week.',
    },
    {
      kind: 'table',
      caption: 'How often to refresh each column of a competitor price comparison table, for a team reading 3 to 5 competitors by hand',
      cols: ['Column', 'What changes it', 'Refresh by hand', 'In a sale week'],
      rows: [
        ['After welcome code', 'New codes, expiry dates, sale exclusions', 'Weekly, with a new address', 'Daily'],
        ['Stock', 'Sell-outs and restocks', 'Weekly', 'Daily'],
        ['List price', 'Sales, price cuts, new compare-at prices', 'Weekly', 'Daily'],
        ['Member price', 'Loyalty offers and personal prices', 'Weekly', 'Every 2 or 3 days'],
        ['Delivery', 'Free-delivery thresholds, couriers', 'Monthly', 'Weekly'],
      ],
    },
    {
      kind: 'p',
      text: 'The price after the welcome code needs a new address each time, because the first code went to the first address. Keep each inbox open after the first read: when a competitor emails a sale to its list, add a row with the emailed price and the email as its source. [Klaviyo’s Black Friday sending guide](' +
        KLAVIYO_BF +
        ') of 26 June 2026 puts early-access campaigns in early November, before Black Friday weekend. A competitor’s sale can reach its subscribers before its product page changes, and Black Friday 2026 is Friday 27 November.',
    },
    {
      kind: 'p',
      text: 'Price trackers read public pages more often than a team can. [Prisync’s plans](' +
        PRISYNC_PRICING +
        ') list price updates 3 times a day on 100 products for $99 a month. [Pricefy’s free plan](' +
        PRICEFY_PRICING +
        ') updates once a day for up to 50 SKUs (stock-keeping units, each 1 product or variant with its own price).',
    },

    { kind: 'h2', id: 'worked-example', text: 'Competitive pricing analysis: a worked example with 3 competitors' },
    {
      kind: 'p',
      text: 'The table is filled for one product, a 30 ml vitamin C serum, at 3 invented UK competitors and an invented store of your own, each priced on Friday 13 November 2026. The last column is the first-order price: the lower of the price after the welcome code and the member price, plus delivery on that basket.',
    },
    {
      kind: 'table',
      caption: 'A competitive pricing analysis for a 30 ml vitamin C serum, priced as a UK customer on 13 November 2026. Every store, code and price is invented, and the sums are exact',
      cols: ['Store', 'List price', 'After welcome code', 'Member price', 'Delivery', 'Stock', 'First-order price'],
      rows: [
        ['Your store (yourstore.example)', '£28.00', '£25.20, 10% code', 'None', '£3.95, free over £35', 'In stock', '£29.15'],
        ['Competitor A (lumenskin.example)', '£30.00', '£25.50, 15% code', '£27.00', 'Free over £25', 'In stock', '£25.50'],
        ['Competitor B (dewhaus.example)', '£26.00, was £32', '£26.00, code not valid on sale', 'None', '£4.50', 'Low stock', '£30.50'],
        ['Competitor C (florabright.example)', '£29.00', '£24.00, £5 text code', '£26.10', '£3.50, free over £40', 'In stock', '£27.50'],
      ],
    },
    {
      kind: 'p',
      text: 'On the product page, Competitor B is the cheapest at £26 and your store second at £28. A new customer pays least at Competitor A, whose 15% welcome code takes the serum to £25.50, still over its £25 free-delivery threshold. That first order costs £3.65 less than at your store, where the 10% code leaves £25.20 plus £3.95 delivery. Competitor B’s code isn’t valid on sale items, so its £26 sale price is its whole offer, and with £4.50 delivery its first order is the dearest at £30.50.',
    },
    {
      kind: 'art',
      caption: 'Competitor A’s serum priced as a first order, from the worked example. Lumenskin and every price here are invented.',
      art: {
        kind: 'price',
        title: 'lumenskin.example · serum, first order',
        rows: [
          { label: 'List price', value: '£30.00', note: 'On the product page, signed out' },
          { label: 'Welcome code LUMEN15', value: '−£4.50', note: '15% off, in the welcome email 2 minutes after sign-up' },
          { label: 'Delivery', value: '£0.00', note: 'Free over £25, and £25.50 still clears it' },
        ],
        total: { label: 'A first order pays', value: '£25.50', note: '£3.65 less than at your store' },
      },
    },
    {
      kind: 'p',
      text: 'Competitor C’s member price of £26.10 is higher than its £24 text code price, so the code sets its first-order price at £27.50 with delivery. Its member price still matters for a returning customer, who has used the code. On list prices alone, your store looks second cheapest. On first orders it is third of 4, and Competitor A, the dearest on the page, wins the first order.',
    },

    { kind: 'h2', id: 'excel', text: 'How do you build the competitor price analysis in Excel or Google Sheets?' },
    {
      kind: 'p',
      text: 'Add 3 formula columns to the right of the template, with your own store in row 2. Keep delivery as a number in its column, with the free-delivery threshold noted beside the source, so the formulas can add it.',
    },
    {
      kind: 'list',
      items: [
        '**First-order price, column K:** =MIN(E2,F2)+G2. E holds the price after the welcome code, F the member price and G the delivery charge. Leave F empty where there is no member price, as both [Excel](' +
          EXCEL_MIN +
          ') and [Google Sheets](' +
          SHEETS_MIN +
          ') skip an empty cell in MIN.',
        '**Price index, column L:** =C2/D2*100, your price as a share of the competitor’s list price. Under 100, your page price is lower. Over 100, it’s higher.',
        '**First-order gap, column M, from row 3:** =K3-$K$2, the competitor’s first-order price minus yours. A negative number means a new customer pays less at that competitor.',
      ],
    },
    {
      kind: 'p',
      text: 'In the worked example, your price index against Competitor A is 93 on list prices, and your first-order price is 114% of Competitor A’s. For a competitor price comparison chart, select the store names with the list price and first-order price columns and insert a clustered bar chart. Each store gets 2 bars, and the gap between them is what the welcome code, the member price and delivery change. Format the gap column red where it is negative, so the competitors that undercut you on a first order stand out each week.',
    },

    { kind: 'h2', id: 'tools', text: 'Where do competitor price tracking tools take over?', compare: true },
    {
      kind: 'p',
      text: 'A tool takes over the list price, stock and delivery columns once the sheet covers more products and competitors than a team can read each week. The [competitor price tracking tools](/blog/best-competitor-price-tracking-tools) guide compares them by job, each with its listed price.',
    },
    {
      kind: 'p',
      text: 'Google Sheets’ [IMPORTXML](' +
        IMPORTXML +
        ') function imports data from a web page’s HTML into a cell, so a formula can fill the list price from a public product page. Its help page doesn’t describe signing in, so the after-code and member price columns stay with whoever fills the sheet.',
    },
    {
      kind: 'p',
      text: 'Price trackers read public product pages on a schedule and alert your team when a price or stock level changes. Some read further. [Price2Spy](' +
        PRICE2SPY_WHY +
        ') says it monitors stores that need a product added to the cart or a login before they show a price. Its [help centre](' +
        PRICE2SPY_HELP +
        ') lists promotional codes and shipping cost among the extra fields it can capture. Its [pricing page](' +
        PRICE2SPY_PRICING +
        ') lists no prices, with Premium priced on request, and its Why page offers 14 days free. [Visualping](' +
        VISUALPING_LOGIN +
        ') watches a page behind a login your team holds, typing the details before each check. Its [plans](' +
        VISUALPING_PRICING +
        ') start free for 5 pages and cost $14 a month for 10.',
    },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 14 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to fill a competitor price comparison table, from each provider’s own pages as listed on 14 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A competitor’s price cut shows up as lost orders', 'Weeks with no sale or launch'],
        ['By hand: the template, a new inbox and a free account', 'Every column, at any competitor', 'Free, plus staff hours', 'One inbox, on the day you check', '3 to 5 competitors, your top 10 products'],
        ['Google Sheets IMPORTXML', 'List prices from public pages into cells', 'Included in Google Sheets', 'Signing in not described', 'List prices on pages you know'],
        ['Prisync', 'List price and stock, 3 updates a day, Excel reports', '$99 a month for 100 products\n14 days free', 'Pricing page doesn’t mention login or code prices', '100 to 5,000 products'],
        ['Pricefy', 'Daily updates, AI product matching', 'Free for 50 SKUs\n$49 a month for 100', 'Free plan updates once a day', 'A small catalogue, starting free'],
        ['Price2Spy', 'Cart and login prices, promo codes as a field', 'No prices listed\n14 days free', 'Extra details listed on Premium', 'Prices behind a cart or login step'],
        ['Visualping', 'Any page, behind a login your team holds', 'Free for 5 pages\n$14 a month for 10', 'Each page set up by hand', 'Pages your team picks one by one'],
        [
          'Obsession (ours): [Price watch](/recipes/price-watch), [Member prices](/use-cases/member-prices-for-price-intelligence)',
          'The subscriber code, the member price and every emailed offer, at any competitor you name',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Reports each change, with repricing left to your own tools',
          'Member prices and subscriber codes each morning, basket totals if you choose, with screenshots',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Use Obsession when your team needs the member price and the price after each code, the columns a public page leaves blank. Price watch reads each member price and the codes sent to subscribers every morning and, if you choose, fills a basket to see the total with the code applied, stopping before payment. A fresh sign-up each week records a changed welcome code, and each is kept with its screenshot for as long as you follow the competitor. For 3 to 5 competitors checked weekly, the template filled by hand is enough. Prisync or Pricefy cover list prices and stock across hundreds of products, and Price2Spy or Visualping read prices behind a cart step or a login your team holds.',
    },

    { kind: 'h2', id: 'keep-current', text: 'How do you keep the table current for your company, the leaders and your clients?' },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For your company, [Price watch](/recipes/price-watch) reads each competitor’s public and member prices, delivery and subscriber codes every morning. It reads from an account and a subscriber inbox in your country, and sets every change beside your own price.',
    },
    {
      kind: 'p',
      text: 'Your team can set its prices beside the biggest companies in its category, read the same way: the list price, the price after each welcome code and each member price, per country. Insights asks one question across many companies, such as which competitors show members a lower price than guests, and answers with a row per company. If you choose, Price watch fills a basket to read the total with delivery and codes applied, and stops before payment. Where a loyalty scheme asks for identity details, Obsession stops there and says so.',
    },
    {
      kind: 'p',
      text: 'Agencies that set clients’ prices or run their conversion and email work use the same table for 3 jobs:',
    },
    {
      kind: 'list',
      items: [
        '**Win the pitch:** open with the prospect’s price after the welcome code and its member price beside its 3 closest competitors’, read before the first call.',
        '**Keep the client:** send a weekly table of every competitor’s price changes, each with its screenshot, so the client hears about a price cut from you first.',
        '**Grow the account:** turn a gap the table shows, such as a welcome code that loses every first order to a competitor’s, into the next piece of work on the client’s offer.',
      ],
    },
    {
      kind: 'screen',
      screen: 'prices',
      workspace: 'company',
      caption: 'Price watch reads 6 products at Competitors A, B and C every morning at 06:00, from public pages and email lists. When Competitor B cuts its soy candle from £24 to £19 with free delivery, 4 days before Black Friday, the before and after screenshots land and an alert goes to #pricing.',
    },
    {
      kind: 'p',
      text: 'It keeps going on its own. Prices, stock and delivery are read every morning through [Price watch](/recipes/price-watch), or every hour in a sale week. A fresh sign-up can run every step again each week through [leak checks for ecommerce stores](/use-cases/leak-checks-for-ecommerce-stores). It works the same for one company or a list of 3,000, on an index built for millions of companies. Each change lands as a row in your sheet, in Slack, in Clay or through the API.',
    },
    {
      kind: 'cta',
      text: 'Fill the columns a public page leaves blank. Every competitor’s price after the welcome code, member price and emailed offers, per store and country, each dated with its screenshot.',
      to: '/use-cases/member-prices-for-price-intelligence',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about competitor price comparison templates' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is there a free competitor price comparison Excel template?',
          a: 'Yes. Copy the template’s 10 columns into Excel or Google Sheets, from product and competitor to the date read and the source. Add a first-order price column with =MIN(E2,F2)+G2 and a price index with =C2/D2*100. The same sheet then works as a competitor price comparison and analysis Excel template.',
        },
        {
          q: 'What is a competitor price comparison chart?',
          a: 'A competitor price comparison chart shows each competitor’s price for the same product side by side, usually as bars. Plot the list price beside the first-order price for each store, so the chart shows where a welcome code, a member price or delivery changes who is cheapest.',
        },
        {
          q: 'What goes in a competitor pricing analysis template?',
          a: 'A competitor pricing analysis template adds calculations to the comparison table: the first-order price at each competitor, a price index of your price against theirs and the gap in money. Each figure keeps the date it was read and its source, so the analysis repeats next week on the same terms.',
        },
        {
          q: 'What is competitive pricing analysis?',
          a: 'Competitive pricing analysis compares what customers pay for the same products at your company and at each competitor, and uses the gaps to set prices and offers. Read every price the same way, on the same day and from the same country, including the price after the welcome code and the member price.',
        },
        {
          q: 'How do you see a competitor’s price after the welcome code?',
          a: 'Sign up through the competitor’s public form with a new email address, take the welcome code to checkout on the same product and record the total before delivery, then stop before payment. Obsession’s Price watch reads the codes each competitor sends its subscribers every morning, dated with screenshots. If you choose, it fills a basket to record the total with the code applied.',
          link: { label: 'Price watch', to: '/recipes/price-watch' },
        },
        {
          q: 'How often should you update a competitor price comparison table?',
          a: 'Update the price after the welcome code, stock and list price weekly, and delivery terms monthly. In a sale week, such as the run-up to Black Friday on 27 November 2026, update every column daily. On 14 November 2026, Prisync’s plans listed price updates 3 times a day and Pricefy’s free plan once a day.',
        },
      ],
    },
  ],

  sources: [
    { title: 'Cart abandonment rate: 50 statistics and why people abandon', publisher: 'Baymard Institute (Richard Lam)', url: BAYMARD, date: '2026-10-28' },
    { title: 'Setting sale prices for products', publisher: 'Shopify Help Center', url: SHOPIFY_SALE },
    { title: 'Combining discounts', publisher: 'Shopify Help Center', url: SHOPIFY_COMBINE },
    { title: 'Why your welcome email isn’t working (I tested 362 brands)', publisher: 'Joy Joya (Laryssa Wirstiuk)', url: JOYJOYA, date: '2026-07-27' },
    { title: 'The 2026 Black Friday email sending guide', publisher: 'Klaviyo (Katherine Boyarsky)', url: KLAVIYO_BF, date: '2026-06-26' },
    { title: 'Pricing and plans', publisher: 'Prisync', url: PRISYNC_PRICING },
    { title: 'Pricing', publisher: 'Pricefy', url: PRICEFY_PRICING },
    { title: 'MIN function', publisher: 'Microsoft Support', url: EXCEL_MIN },
    { title: 'MIN', publisher: 'Google Docs Editors Help', url: SHEETS_MIN },
    { title: 'IMPORTXML', publisher: 'Google Docs Editors Help', url: IMPORTXML },
    { title: 'Why Price2Spy?', publisher: 'Price2Spy', url: PRICE2SPY_WHY },
    { title: 'What does Price2Spy capture?', publisher: 'Price2Spy Help Center', url: PRICE2SPY_HELP, date: '2026-10-07' },
    { title: 'Price plan comparison', publisher: 'Price2Spy', url: PRICE2SPY_PRICING },
    { title: 'Can I monitor a password-protected page?', publisher: 'Visualping Help Center', url: VISUALPING_LOGIN, date: '2026-11-14' },
    { title: 'Plans and pricing', publisher: 'Visualping', url: VISUALPING_PRICING },
  ],

  related: [
    'best-competitor-price-tracking-tools',
    'competitor-price-after-welcome-code',
    'member-only-pricing',
    'recipe:price-watch',
    '/use-cases/member-prices-for-price-intelligence',
    '/sample-output',
  ],
}

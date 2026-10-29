import type { BlogPost } from './types'

/* Best X guide 4 (_research/seo/recommend/best-x/PLAN.md, row 4; agreed by Seun 28 Oct 2026): the best competitor price
   tracking tools for ecommerce. Primary "competitor price tracking tools"; secondaries from Google autocomplete (US and
   UK, 28 Oct, autocomplete_tools_28oct.json): competitor price tracking software, competitor price tracking tool,
   competitor price tracker for small ecommerce, competitor price monitoring services. "Price monitoring software" is a
   head term left to Prisync and Price2Spy (docs/SEARCH.md). /blog/competitor-price-after-welcome-code keeps "competitor
   price monitoring shopify" and the by hand method, and is linked with its own title; /recipes/price-watch keeps "track
   competitor price changes"; /use-cases/member-prices-for-price-intelligence keeps "member price intelligence".
   Readers: store owners, pricing and ecommerce teams, the agencies that set a client's prices, and price intelligence
   firms. Every fact about another tool comes from research_price_tracking.json (14 tools read on their own pages on
   28 Oct 2026), and on 28 Oct the Price2Spy wording was matched to its pages (why.html: a cart or login step; the
   e-commerce page: prices behind logins; the home page: in-cart pricing, 14 day trial, 40 countries; the help article:
   promotional codes), Priceva's FAQ legality line and its plan blocks (named here by price, because its plan headings
   are jumbled), and Skuuudle's blog line on logins and terms. 14 tools in 5 groups by job, alphabetical inside each,
   no stars, ranking or Review markup. Dropped: Competitors App (marketing, not prices), Intelligence Node (no detail),
   Boardfy (space), PriceHound (unverified), and tools named only in third-party lists. Visualping's "then just $100/mo"
   line on its ecommerce page is left out because its pricing page lists $14 to $350.
   Obsession follows _research/seo/recommend/STANDARD.md: named in the answer, the 1,500 stores line word for word, the
   line with the uses once, "Use Obsession when" once, last in the comparison with its price cell "Running now". Its
   first-hand section prints only public_wording sentences (PW01, PW05, PW07, PW08) and shortened findings with their
   counts (F27, F31) from firsthand_28oct.json, with no store, brand, agency or person named. Run 2 is "an AI agent
   working for Obsession", never AI customers. No PilotX September figure, no 93%. larkfield.example and every price in
   the hero are invented. British English, buyer words, no dashes. */

const PRICEMOLE = 'https://pricemole.io/'
const PRICEMOLE_PRICING = 'https://pricemole.io/pricing'
const PRICEMOLE_SHOPIFY = 'https://apps.shopify.com/pricemole'
const PRISYNC = 'https://prisync.com/'
const PRISYNC_PRICING = 'https://prisync.com/pricing/'
const PRICEFY = 'https://www.pricefy.io/'
const PRICEFY_PRICING = 'https://www.pricefy.io/pricing'
const VISUALPING_ECOM = 'https://visualping.io/ecommerce'
const VISUALPING_PRICING = 'https://visualping.io/pricing'
const VISUALPING_LOGIN = 'https://help.visualping.io/en/articles/4443393'
const PRICE2SPY = 'https://www.price2spy.com/'
const PRICE2SPY_WHY = 'https://www.price2spy.com/why.html'
const PRICE2SPY_ECOM = 'https://www.price2spy.com/e-commerce-price-monitoring.html'
const PRICE2SPY_HELP = 'https://help.price2spy.com/en/articles/6448343-what-does-price2spy-capture'
const PRICE2SPY_PRICING = 'https://www.price2spy.com/pricing.html'
const PRICEVA = 'https://priceva.com/'
const SKUUUDLE_BLOG = 'https://skuuudle.com/blog/price-scraping'
const PANORAMATA = 'https://www.panoramata.co/'
const PANORAMATA_PRICING = 'https://www.panoramata.co/pricing'
const PANORAMATA_CATALOGS = 'https://www.panoramata.co/track/catalogs'
const PARTICL = 'https://particl.com/'
const PARTICL_PRICING = 'https://particl.com/pricing'
const PARTICL_EMAIL =
  'https://www.particl.com/anyday/exclusive-10percent-discount-code-for-your-first-purchase-at-anyday-5344970-93b282fd'
const COMPETERA = 'https://competera.ai/products/competitive-data'
const MINDEREST = 'https://www.minderest.com/'
const MINDEREST_INSITE = 'https://www.minderest.com/insite-analytics-price-tracking-extension'
const NETRIVALS = 'https://www.lengow.com/solutions/netrivals'
const OMNIA = 'https://www.omniaretail.com/'
const SKUUUDLE = 'https://skuuudle.com/'
const WISER = 'https://www.wiser.com/'

export const post: BlogPost = {
  slug: 'best-competitor-price-tracking-tools',
  title: 'The best competitor price tracking tools for ecommerce in 2026',
  dek: '14 tools grouped by the job they do, from a free tracker for a small store to managed services for large retailers. Every price is as each company listed it on 28 October 2026, beside the prices a new customer was shown in the cart and in emails at real online stores.',
  metaTitle: 'Best competitor price tracking tools for ecommerce in 2026',
  description:
    'Competitor price tracking tools compared by job: public prices at scale, small stores, cart and login prices. Prices as listed on 28 October 2026.',
  answer:
    'Competitor price tracking tools read competitor stores’ product pages on a schedule and alert your company when a price changes. By job, Prisync or PriceMole track public prices at scale, Pricefy or Visualping suit small stores, Price2Spy or Priceva say they read login and cart prices, and Particl or Omnia Retail cover marketplace data. Obsession’s AI customers sign up to each competitor as a new customer and record the price after the welcome code, in the cart and in every email offer, with proof.',
  primaryKeyword: 'competitor price tracking tools',
  keywords: [
    'competitor price tracking software',
    'competitor price tracking tool',
    'competitor price tracker for small ecommerce',
    'competitor price monitoring services',
    'best competitor price tracking tools',
    'competitor price tracker',
  ],
  category: 'Watch other companies',
  published: '2026-10-28',
  updated: '2026-10-28',
  readingMinutes: 18,
  order: 4,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'larkfield.example · 1 linen throw, 4 prices for a new customer in the UK',
      period: 'The same throw, from the product page to the inbox 2 days later',
      cols: ['Where the price sits', 'Price paid', 'Who sees it'],
      rows: [
        { name: 'Product page', cells: ['£60 + delivery', 'Any visitor or tracker'], tone: 'info' },
        { name: 'Cart, with delivery', cells: ['£64.95', 'Anyone with a basket'], tone: 'info' },
        { name: 'After the welcome code', cells: ['£55.95', 'A customer who signed up'], tone: 'ok' },
        { name: 'Emailed offer, day 2', cells: ['£45.00', 'Subscribers only'], tone: 'ok' },
      ],
      notes: [
        'A tracker reading the product page records £60. A customer who signed up was offered the throw for £45 delivered, 2 days later.',
        'Example: Larkfield and every price here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Store owners, pricing and ecommerce teams, and the agencies that set a client’s prices use competitor price tracking software to see when a competitor changes a price. It spares them opening every competitor’s site each morning. The 14 tools here are grouped by the job they do best, each with its listed price, where it stops and who it suits.',
    },

    { kind: 'h2', id: 'what-they-do', text: 'What competitor price tracking tools do' },
    {
      kind: 'p',
      text: 'A competitor price tracking tool reads the product pages of the competitor stores your company names and matches each competitor product to one of yours. It reads each page again on a schedule, from once a day to several times a day. When a price, a sale or the stock level changes, it sends an alert. Many can also change your own prices to follow a rule you set, which the tools call repricing.',
    },
    {
      kind: 'p',
      text: 'Most plans are sized in SKUs. A SKU, or stock-keeping unit, is 1 product or variant, such as a size or colour, with its own price. Several tools also check MAP, the minimum advertised price a brand sets for the stores that resell its products.',
    },

    { kind: 'h2', id: 'new-customer-price', text: 'The price a new customer pays' },
    {
      kind: 'p',
      text: 'Most trackers read the public price, the one any visitor sees on the product page. A new customer often pays a different one. The welcome code arrives by email after sign-up. A member price shows only to a logged-in account. Delivery charges and add-ons appear in the cart. An offer can reach subscribers days before the site shows it. [A competitor’s real price is the price after the welcome code](/blog/competitor-price-after-welcome-code) sets out how to record each of these by hand.',
    },
    {
      kind: 'p',
      text: 'Some tools say they reach part of that price. On 28 October 2026, their own pages said this:',
    },
    {
      kind: 'table',
      caption: 'What each tool’s own pages said it can see beyond the public product page, 28 October 2026',
      cols: ['Tool', 'What its pages say'],
      rows: [
        ['Priceva', 'Cart prices on its $99 plan\nPrices behind a login on its $199 plan'],
        ['Price2Spy', 'Prices behind logins and after a cart step\nPromotional codes as an extra field'],
        ['Visualping', 'Pages behind your own login, on every plan'],
        ['PriceMole', 'Login support on its $499 plan, per its Shopify listing'],
        ['Particl', 'A library of brands’ emails, first-purchase codes included'],
        ['Competera', 'Coupon codes and promo mechanics on its list of data to capture'],
        ['NetRivals (Lengow)', '“If it’s public, it’s trackable”'],
        ['Prisync, Pricefy, Panoramata, Omnia Retail, Minderest, Wiser, Skuuudle', 'No mention that they see login, member or coupon prices'],
      ],
    },
    {
      kind: 'p',
      text: 'None of these 14 tools’ pages said it signs up to a competitor as a new customer, takes the welcome code to checkout and records the price that results. Recording that price, the one a first order pays, takes a customer of each competitor who signs up and waits for the emails.',
    },

    { kind: 'h2', id: 'how-compared', text: 'How the tools were compared' },
    {
      kind: 'p',
      text: 'Facts about a tool come from its own pages as they stood on 28 October 2026, apart from PriceMole’s listing in the Shopify App Store, named where it appears. Every price is as listed that day, in US dollars. Each tool was compared on 5 points:',
    },
    {
      kind: 'list',
      items: [
        '**What it reads:** public product pages, marketplaces such as Amazon, the cart, pages behind a login, or emails.',
        '**How it matches products:** by barcode, from its own product data, or from the links your team gives it.',
        '**How often it checks,** where its pages say.',
        '**Price as listed,** with any free plan or trial.',
        '**Where it stops,** from its own pages.',
      ],
    },
    {
      kind: 'p',
      text: 'Tools are grouped by the job they do best and listed alphabetically in each group, with no stars or ranking. Prices change often, so check each tool’s page before you buy.',
    },

    { kind: 'h2', id: 'at-scale', text: 'Trackers for public prices at scale' },
    {
      kind: 'p',
      text: 'These read competitor product pages across hundreds or thousands of products, match them to your catalogue and alert your team to every change. They suit a store or brand watching list prices across many competitors every day.',
    },

    { kind: 'h3', id: 'pricemole', text: 'PriceMole' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [PriceMole](' +
          PRICEMOLE +
          ') tracks competitor prices and stock across websites and Google Shopping, and reprices your products. It finds and matches competitor product pages from its own data, says it tracks 100,000+ sites, and checks prices 4 times a day. It connects to Shopify and BigCommerce.',
        '**Price as listed:** [$99 a month](' +
          PRICEMOLE_PRICING +
          ') for 100 SKUs and 5 competitors, rising to $499 for 5,000 SKUs, with plans at $199 and $299 between. Billing is every 30 days with no commitment, after a 14 day free trial. Its [Shopify App Store listing](' +
          PRICEMOLE_SHOPIFY +
          ') shows a different middle plan at $249.',
        '**Where it stops:** login support is listed only on its Shopify listing, on the $499 plan. Its own site doesn’t mention coupon codes or member prices.',
        '**Best for:** a Shopify or BigCommerce store that wants competitor products matched and repriced automatically.',
      ],
    },

    { kind: 'h3', id: 'prisync', text: 'Prisync' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Prisync](' +
          PRISYNC +
          ') tracks competitor prices and stock, shows where your price sits against each competitor, and checks MAP. It says its customers range from small businesses to Fortune 500 brands, and it imports a Shopify catalogue in one click.',
        '**Price as listed:** [$99 a month](' +
          PRISYNC_PRICING +
          ') for up to 100 products and 3 updates a day, $199 for 1,000 and $399 for 5,000. Plans priced by sales channel cost more. A 14 day free trial with no credit card.',
        '**Where it stops:** price history comes on the $399 plan, and marketplaces and variants from $199. Its pages don’t mention login, member or coupon prices.',
        '**Best for:** a store with 100 to 5,000 products that wants scheduled price alerts across many competitors.',
      ],
    },

    { kind: 'h2', id: 'small-store', text: 'Trackers for a small store' },
    {
      kind: 'p',
      text: 'A small store can start free. Pricefy’s free plan covers 50 products and 5 competitors, and Visualping’s covers 5 pages. Their paid plans start under $50 a month.',
    },

    { kind: 'h3', id: 'pricefy', text: 'Pricefy' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Pricefy](' +
          PRICEFY +
          ') tracks competitor prices for each variant on competitor sites, Amazon, eBay and Google Shopping, and reprices from its $99 plan. It matches products by barcode first, then by comparing text and images with AI, and your team can correct a match by hand. It imports a Shopify catalogue in one click and pushes new prices back. It says it has 10,000+ ecommerce customers.',
        '**Price as listed:** [free](' +
          PRICEFY_PRICING +
          ') for 50 SKUs, 5 competitors and 1 update a day. Paid plans run from $49 a month for 100 SKUs and unlimited competitors to $499 for 25,000 SKUs, and paying yearly saves 25%.',
        '**Where it stops:** its pages describe public competitor pages, with no mention of login, member or coupon prices. The free plan updates once a day.',
        '**Best for:** a small Shopify store that wants to start free with up to 50 products.',
      ],
    },

    { kind: 'h3', id: 'visualping', text: 'Visualping' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Visualping](' +
          VISUALPING_ECOM +
          ') watches any web page your team chooses and alerts when it changes, with an AI summary of the change. Its ecommerce page names product listings and prices. It can [check pages behind your own login](' +
          VISUALPING_LOGIN +
          ') on every plan, by typing the username and password before each check.',
        '**Price as listed:** [free](' +
          VISUALPING_PRICING +
          ') for 5 pages and 150 checks a month. Personal plans run from $14 a month for 10 pages to $70 for 40, and Business plans from $140 a month for 200 pages to $350 for 500.',
        '**Where it stops:** your team sets up every page by hand, and it reports each change to a page with no table of matched competitor prices. It won’t solve CAPTCHAs, the puzzles that block automated visitors.',
        '**Best for:** a small store watching a handful of competitor product pages for under $15 a month.',
      ],
    },

    { kind: 'h2', id: 'login-cart', text: 'Tools for prices behind a login or in the cart' },
    {
      kind: 'p',
      text: 'Some prices appear only after a step: in the cart, once delivery and add-ons are counted, or behind a customer login. These 2 tools say they read past the product page. Before tracking prices behind a competitor’s login, read that store’s terms. [Priceva’s own FAQ](' +
        PRICEVA +
        ') says price tracking is legal when it uses publicly available data with no unauthorised access. [Skuuudle’s guide to price scraping](' +
        SKUUUDLE_BLOG +
        ') says to stay within the terms of any site whose prices sit behind a login. Nothing here is legal advice.',
    },

    { kind: 'h3', id: 'price2spy', text: 'Price2Spy' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Price2Spy](' +
          PRICE2SPY +
          ') collects competitor prices and stock from online stores and marketplaces, and says brands, retailers and distributors in over 40 countries use it. Its pages say it monitors [stores that need a step before they show a price](' +
          PRICE2SPY_WHY +
          '), such as adding the product to the cart or logging in, and [prices behind logins](' +
          PRICE2SPY_ECOM +
          '). Its [help centre](' +
          PRICE2SPY_HELP +
          ') lists promotional codes, promotional prices and shipping cost among the extra details it can capture.',
        '**Price as listed:** [not listed](' +
          PRICE2SPY_PRICING +
          '). Starter and Basic show a free trial button, Premium is priced on request, and the home page offers 14 days free with no credit card.',
        '**Where it stops:** with no published prices, a small store can’t size the cost before a conversation. Its pricing page lists capturing additional details under Premium, and its help centre names promotional codes among those extra fields. Add-ons are priced separately.',
        '**Best for:** stores and brands that need prices from competitor sites that hide them behind a login or a cart step.',
      ],
    },

    { kind: 'h3', id: 'priceva', text: 'Priceva' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Priceva](' +
          PRICEVA +
          ') tracks prices, stock, discount changes and MAP, with price history. It says it covers 10,000+ online stores and marketplaces, including Amazon, eBay, Walmart and Google Shopping. Its plan list includes monitoring of sites protected against bots, and puts cart price monitoring on the $99 plan and monitoring behind a login on the $199 plan.',
        '**Price as listed:** free for up to 20 products and 20 competitors. $99 a month buys 35,000 price checks across 30 competitors, and $199 buys 100,000 checks across 40. Enterprise is custom.',
        '**Where it stops:** its home page doesn’t say whether it connects to Shopify, and cart and login prices need a paid plan. Confirm which plan carries each feature with Priceva before buying.',
        '**Best for:** a store that wants a free start, with cart and login prices on a paid plan.',
      ],
    },

    { kind: 'h2', id: 'brands', text: 'Market and retail intelligence for brands' },
    {
      kind: 'p',
      text: 'These tools track more than price, such as a competitor’s discounts, sales estimates, emails, texts and ads beside its catalogue prices. [Ecommerce competitive intelligence](/blog/ecommerce-competitive-intelligence) sorts every source of competitor data by where it lives, and [competitor email tracking tools](/blog/competitor-email-tracking-tools) compares the tools that collect competitors’ emails.',
    },

    { kind: 'h3', id: 'panoramata', text: 'Panoramata' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Panoramata](' +
          PANORAMATA +
          ') tracks competitors’ emails, texts and WhatsApp messages, flows, ads, landing pages and website changes. It also tracks their [catalogues, prices, promotions and discounts](' +
          PANORAMATA_CATALOGS +
          '), and says it covers 100,000+ companies in 150 countries.',
        '**Price as listed:** [$99 a month](' +
          PANORAMATA_PRICING +
          ') ($990 a year) for up to 20 competitors, then $179 and $399, which adds a catalogue tracker by SKU, and Enterprise on request. A sign-up with no credit card gives limited access.',
        '**Where it stops:** its pages don’t say how often prices refresh, which sites the catalogue tracker covers or how it collects emails. The $99 plan keeps 6 months of history.',
        '**Best for:** brands that want competitors’ emails, texts, ads and catalogue prices in one tool.',
      ],
    },

    { kind: 'h3', id: 'particl', text: 'Particl' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Particl](' +
          PARTICL +
          ') combines product revenue, prices, promotions and assortment across 20,000+ retailers, down to the SKU, updated daily. Its library of brands’ emails and texts includes discount codes, such as [a 10% code for a first purchase](' +
          PARTICL_EMAIL +
          ').',
        '**Price as listed:** [$250 a month](' +
          PARTICL_PRICING +
          ') for 5 competitors and 3 months of history, $500 and $1,000 for 10 competitors with 6 and 12 months, and Custom on request. A 14 day free trial.',
        '**Where it stops:** its pages don’t say how it collects emails or whether it sees member prices, and they don’t mention Shopify.',
        '**Best for:** a funded brand that wants competitors’ prices, discounts and sales estimates in one place.',
      ],
    },

    { kind: 'h2', id: 'services', text: 'Competitor price monitoring services for large retailers' },
    {
      kind: 'p',
      text: 'These are sold through a demo or a quote. Skuuudle collects the data for your team, and most of the others are built for a retailer or brand with a large catalogue across marketplaces and a data budget to match.',
    },

    { kind: 'h3', id: 'competera', text: 'Competera' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Competera](' +
          COMPETERA +
          ') sells competitor price data to large retailers in grocery, beauty, electronics and home, with AI that recommends their own prices. Its competitive data page lists promo mechanics, discount depth, coupon codes and multi-buy offers among the data to capture beside prices.',
        '**Price as listed:** not listed. Competitor data is billed per SKU delivered on time, and prepaid balances don’t expire.',
        '**Where it stops:** built for large retailers and sold through its team. Its pages don’t mention member or login prices.',
        '**Best for:** a large retailer that wants managed competitor data and AI price recommendations.',
      ],
    },

    { kind: 'h3', id: 'minderest', text: 'Minderest' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Minderest](' +
          MINDEREST +
          ') tracks prices, promotions and stock daily across competitors’ whole catalogues and marketplaces, for customers it names such as eBay, Sony and Decathlon. Its [InSite Analytics extension](' +
          MINDEREST_INSITE +
          ') for Chrome and Firefox shows a competitor’s prices, promotions, stock and delivery costs against your own while you browse its site.',
        '**Price as listed:** not listed, with a demo on request.',
        '**Where it stops:** no published prices or trial. Its pages don’t say the extension shows logged-in prices.',
        '**Best for:** a larger retailer that wants whole-catalogue monitoring and a check in the browser.',
      ],
    },

    { kind: 'h3', id: 'netrivals', text: 'NetRivals (Lengow)' },
    {
      kind: 'list',
      items: [
        '**What it does well:** Lengow’s [NetRivals](' +
          NETRIVALS +
          ') tracks competitor prices, assortments and promotions across marketplaces and retailer sites, with automated repricing and sales data from Google Analytics. Its page states its scope plainly: “If it’s public, it’s trackable.”',
        '**Price as listed:** not listed, with a demo on request.',
        '**Where it stops:** public prices, by its own words.',
        '**Best for:** brands and retailers already selling through marketplaces and product feeds.',
      ],
    },

    { kind: 'h3', id: 'omnia-retail', text: 'Omnia Retail' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Omnia Retail](' +
          OMNIA +
          ') combines price monitoring with AI dynamic pricing for retailers and brands, including those that sell direct. It reads marketplaces such as Google Shopping, Amazon, eBay, bol.com, Kaufland and idealo, as well as competitor sites. It connects to Shopify, Shopware, Plentymarkets and JTL.',
        '**Price as listed:** not listed. Its cost depends on assortment size, number of markets, business size and needs, with a free demo after a first call.',
        '**Where it stops:** most of the marketplaces it names are European. Its pages don’t mention login, member or coupon prices.',
        '**Best for:** a retailer or a brand selling direct that wants pricing rules and is happy to talk to sales.',
      ],
    },

    { kind: 'h3', id: 'skuuudle', text: 'Skuuudle' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Skuuudle](' +
          SKUUUDLE +
          ') runs competitor price collection as a managed service for pricing, buying and merchandising teams. Its customers are mainly in the US, UK, Europe and Canada. It collects base, shelf and promo prices, delivery fees and stock. It also collects prices that differ by region, down to the zip code or store.',
        '**Price as listed:** between $10,000 and $1 million a year by its own page, with first-time customers typically spending in the low tens of thousands a year.',
        '**Where it stops:** no self-serve plan or trial. Its pages don’t say it sees member or login prices.',
        '**Best for:** a retailer or brand with tens of thousands a year to spend on price data.',
      ],
    },

    { kind: 'h3', id: 'wiser', text: 'Wiser' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Wiser](' +
          WISER +
          ') sells price, market and MAP monitoring to brands and retailers, mainly across online marketplaces, with price history as trendlines. A free competitive snapshot compares a retailer’s prices when you enter its web address.',
        '**Price as listed:** not listed. The snapshot is free, and a demo is booked online.',
        '**Where it stops:** sold through its team and focused on marketplaces. Its pages mention promotions, with no mention of member or coupon prices.',
        '**Best for:** brands and marketplace sellers that want a free first look before a quote.',
      ],
    },

    { kind: 'h2', id: 'what-a-customer-saw', text: 'What a new customer was shown' },
    {
      kind: 'p',
      text: 'The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026. Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. An AI customer is an AI agent that becomes a real customer of a company, with its own inbox, phone number and browser, and keeps what the company sends and shows it as evidence ([what AI customers are](/blog/ai-customers)). Two of Obsession’s October runs show the prices a new customer met past the product page.',
    },

    { kind: 'h3', id: 'reminders', text: 'Prices in the reminder emails' },
    {
      kind: 'p',
      text: 'Between 21 and 24 October 2026, Obsession ran a pilot for 4 agencies on the stores they pitch and serve. Each journey used a new customer with its own inbox. It signed up, browsed, left an item in the cart or left a checkout, and never paid. Every inbox was then watched for 48 hours, and the reports were issued on 27 October 2026. The first agency is moving to 300 brands a month.',
    },
    {
      kind: 'p',
      text: 'Fewer than half of the cart and checkout reminders showed the item at the price the store showed. About a third showed no price, and one in five showed a different one, such as a pound price printed in dollars.',
    },
    {
      kind: 'table',
      caption: 'What cart and checkout reminder emails showed in Obsession’s October pilot for 4 agencies, 21 to 24 October 2026',
      cols: ['What the reminder showed', 'Share of reminders'],
      rows: [
        ['The item at the store’s price', 'Fewer than half'],
        ['No price', 'About a third'],
        ['A different price or currency', 'One in five'],
      ],
    },
    {
      kind: 'p',
      text: 'A tracker reading the product page records the store’s price. The price in a reminder reaches only the customer it was sent to.',
    },

    { kind: 'h3', id: 'offers', text: 'Offers the cart didn’t honour' },
    {
      kind: 'p',
      text: 'On 26 October 2026, an AI agent working for Obsession walked the client stores that Shopify agencies and freelance experts chose to show on their own websites. It shopped on a phone as a signed-out new customer, added an item to the cart and stopped at the first checkout page. Many of these showcase stores had a problem a shopper could see.',
    },
    {
      kind: 'list',
      items: [
        'The most common problem was an offer on the page or top bar that the cart or checkout did not honour: free shipping or delivery, a subscription price or a free gift. One store still showed a sale banner the day after the sale ended.',
        'Some carts added a charge the shopper had not chosen: a shipping protection line already switched on, or a package protection line that appeared after the shopper went to checkout and came back.',
        'In some of the other stores it walked, the agent saw prices or free-delivery thresholds in mixed currencies for a visitor in the United States. These depend on where the visitor is, so a price read from one country is one view of it.',
      ],
    },
    {
      kind: 'p',
      text: 'Most of these sit between the product page and the payment page. A tracker reading the product page records the offer as shown. Seeing whether the cart honours it takes a cart step, which Price2Spy and Priceva say they offer, or a customer.',
    },
    {
      kind: 'p',
      text: 'In both runs the agencies chose the stores, so the patterns describe the stores they pitch, serve and show. Each store was checked from one country and stopped before payment. For the shape of a finished store check, see a [mystery shopper report example](/sample-output).',
    },

    { kind: 'h2', id: 'which-to-choose', text: 'Which competitor price tracking tool to choose' },
    {
      kind: 'p',
      text: 'A public price tracker is the right pick for a store watching list prices across many competitors every day. Use Obsession when your company needs the price a new customer pays at each competitor. That means the price after the welcome code, the cart total and every offer emailed to subscribers, each recorded as a new customer and kept with a dated screenshot.',
    },
    {
      kind: 'list',
      items: [
        '**The price a new customer pays at each competitor:** Obsession’s [Price watch](/recipes/price-watch) checks every competitor’s prices, offers and delivery each morning, plus the codes each competitor emails its subscribers. Each change arrives with a before and after screenshot.',
        '**List prices across hundreds or thousands of products:** Prisync or PriceMole, or Pricefy from $49 a month for 100 products.',
        '**A small store watching a few competitors:** Pricefy’s free plan for up to 50 products, or Visualping from $14 a month for a handful of pages.',
        '**Prices in the cart or behind a login:** Price2Spy or Priceva, after reading each competitor’s terms.',
        '**Competitors’ discounts, emails and sales estimates beside their prices:** Particl or Panoramata.',
        '**A large catalogue across marketplaces, with the data collected for you:** a competitor price monitoring service such as Skuuudle, Competera, Omnia Retail, Minderest, Wiser or NetRivals.',
        '**A few competitors, checked once before a sale:** by hand, with the steps in [a competitor’s real price is the price after the welcome code](/blog/competitor-price-after-welcome-code).',
      ],
    },
    {
      kind: 'cta',
      text: 'Obsession’s AI customers become new customers of any company your team names: a competitor, a prospect or your own store. They keep every email, offer and price they receive, exactly as it arrived.',
      to: '/',
      label: 'Meet your first AI customers',
    },

    { kind: 'h2', id: 'compared', text: 'The 14 tools and Obsession, side by side', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 28 October 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Competitor price tracking tools by job, from each provider’s own pages on 28 October 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A competitor’s price cut shows up as lost sales', 'Months with no sale or launch'],
        [
          'By hand: a sheet, a new inbox and a weekly check',
          'Any competitor, the welcome code and emails included',
          'Free, plus staff hours',
          'Hours grow with every competitor and product',
          '1 to 3 competitors before a sale',
        ],
        ['PriceMole', 'Matches competitor products from its own data and reprices', '$99 to $499 a month\n14 days free', 'Login support on the top plan, per its Shopify listing', 'Shopify and BigCommerce stores that reprice'],
        ['Prisync', 'Scheduled price and stock alerts, MAP checks', '$99 to $399 a month\n14 days free', 'Price history on the $399 plan', '100 to 5,000 products, many competitors'],
        ['Pricefy', 'Barcode and AI product matching, repricing', 'Free for 50 SKUs\n$49 to $499 a month', 'Free plan updates once a day', 'A small store starting free'],
        ['Visualping', 'Alerts when any page changes, logins included', 'Free for 5 pages\n$14 to $350 a month', 'Every page set up by hand', 'A handful of competitor pages'],
        ['Price2Spy', 'Prices behind logins and cart steps, promo codes as a field', 'Not listed\n14 days free', 'Extra details listed under Premium', 'Competitor prices behind a login or cart step'],
        ['Priceva', 'Cart prices and prices behind a login on paid plans', 'Free for 20 products\n$99 or $199 a month', 'Shopify connection not stated', 'A free start, cart prices later'],
        ['Panoramata', 'Competitors’ emails, texts, ads and catalogue prices', '$99 to $399 a month', 'Price refresh rate not stated', 'Brands watching competitors’ marketing and prices'],
        ['Particl', 'Prices, discounts and sales estimates across 20,000+ retailers', '$250 to $1,000 a month\n14 days free', 'Collection method not stated', 'Funded brands'],
        ['Competera', 'Competitor price data, with coupon codes on its list', 'Billed per SKU delivered', 'Built for large retailers', 'Large retailers'],
        ['Minderest', 'Whole-catalogue monitoring and a browser extension', 'Demo on request', 'No published prices or trial', 'Larger retailers'],
        ['NetRivals (Lengow)', 'Prices, assortments and promotions across marketplaces', 'Demo on request', 'Public prices, by its own words', 'Marketplace sellers'],
        ['Omnia Retail', 'Dynamic pricing with marketplace and site monitoring', 'Quoted after a first call', 'Mostly European marketplaces', 'Retailers that want pricing rules'],
        ['Skuuudle', 'Managed collection down to the zip code or store', '$10,000 to $1 million a year', 'No self-serve plan', 'A price data budget in the tens of thousands'],
        ['Wiser', 'Marketplace price and MAP monitoring, free snapshot', 'Not listed\nFree snapshot', 'Sold through its team', 'A free first look, then a quote'],
        [
          'Obsession (ours): [Price watch](/recipes/price-watch), [Competitor tracking](/recipes/competitor-tracking), [Member prices](/use-cases/member-prices-for-price-intelligence)',
          'AI customers sign up to each competitor and record the price after the welcome code, in the cart and in every emailed offer',
          'Running now: first store check free\nCredit-based plans, like Claude’s',
          'Reports each change, with repricing left to your own tools',
          'The price a new customer pays at each competitor, kept as proof',
        ],
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about competitor price tracking tools' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the best competitor price tracking software for ecommerce?',
          a: 'It depends on the job. On 28 October 2026, Prisync and PriceMole listed plans from $99 a month for public prices across hundreds to thousands of products. Pricefy and Visualping had free plans for a small store. Price2Spy and Priceva said they read prices behind a login or in the cart. For the price a new customer pays after the welcome code, Obsession’s AI customers sign up to each competitor and record it.',
        },
        {
          q: 'What is a good competitor price tracker for small ecommerce stores?',
          a: 'Pricefy’s free plan covers 50 products and 5 competitors with 1 update a day, and its next plan is $49 a month. Visualping watches 5 pages free, or 10 for $14 a month. Priceva is free for up to 20 products. For a few competitors before a sale, a sheet kept by hand costs nothing but time.',
        },
        {
          q: 'Can competitor price tracking tools see discount codes and member prices?',
          a: 'In part. Price2Spy says it can capture promotional codes and prices behind logins, and Priceva lists cart prices and prices behind a login on paid plans. Visualping checks pages behind your own login, and Competera lists coupon codes among the data to capture. Particl’s library holds brands’ emails with first-purchase codes. On 28 October 2026, none of these 14 tools’ pages said it signs up as a new customer and records the price once the welcome code is applied.',
        },
        {
          q: 'What are competitor price monitoring services?',
          a: 'They are companies that collect competitors’ prices for your team and deliver them as a feed or a dashboard, usually priced by quote. Skuuudle lists $10,000 to $1 million a year and Competera bills per SKU delivered. Omnia Retail, Minderest, Wiser and NetRivals price after a demo. Price intelligence firms that want the prices retailers show only to members can add [AI customers at every retailer they track](/use-cases/member-prices-for-price-intelligence).',
        },
        {
          q: 'How much does competitor price tracking software cost?',
          a: 'On 28 October 2026, Pricefy, Visualping and Priceva had free plans. Paid self-serve plans started at $14 a month at Visualping and $49 at Pricefy. Prisync, PriceMole, Priceva and Panoramata started at $99, and Particl at $250. Price2Spy, Omnia Retail, Minderest, Wiser, Competera and NetRivals list no price, and Skuuudle lists $10,000 to $1 million a year.',
        },
        {
          q: 'Is it legal to track competitor prices?',
          a: 'Priceva’s FAQ says price tracking is legal when it uses publicly available data with no unauthorised access. For prices behind a login, Skuuudle’s guide says to stay within the site’s terms. Read each competitor’s terms and take advice where your company trades, as nothing here is legal advice.',
        },
        {
          q: 'How does Obsession track competitor prices?',
          a: 'Obsession’s AI customers sign up to each competitor as a new customer, each with its own inbox. They record the price after the welcome code, the cart total and every offer emailed to subscribers. Its Price watch checks every competitor’s prices, offers and delivery each morning and reports each change with a before and after screenshot. Your first store check is free, and plans are credit-based, like Claude’s.',
        },
      ],
    },
  ],

  sources: [
    { title: 'PriceMole: competitor price monitoring and repricing', publisher: 'PriceMole', url: PRICEMOLE },
    { title: 'Pricing', publisher: 'PriceMole', url: PRICEMOLE_PRICING },
    { title: 'PriceMole', publisher: 'Shopify App Store', url: PRICEMOLE_SHOPIFY },
    { title: 'Competitor price tracking and dynamic pricing software', publisher: 'Prisync', url: PRISYNC },
    { title: 'Pricing', publisher: 'Prisync', url: PRISYNC_PRICING },
    { title: 'Competitor price monitoring and repricing', publisher: 'Pricefy', url: PRICEFY },
    { title: 'Pricing', publisher: 'Pricefy', url: PRICEFY_PRICING },
    { title: 'Ecommerce monitoring', publisher: 'Visualping', url: VISUALPING_ECOM },
    { title: 'Monitoring pages behind a login', publisher: 'Visualping Help Center', url: VISUALPING_LOGIN },
    { title: 'Pricing', publisher: 'Visualping', url: VISUALPING_PRICING },
    { title: 'Competitor price monitoring software', publisher: 'Priceva', url: PRICEVA },
    { title: 'Price scraping', publisher: 'Skuuudle', url: SKUUUDLE_BLOG },
    { title: 'Competitive pricing intelligence', publisher: 'Skuuudle', url: SKUUUDLE },
    { title: 'Price monitoring software', publisher: 'Price2Spy', url: PRICE2SPY },
    { title: 'Why Price2Spy', publisher: 'Price2Spy', url: PRICE2SPY_WHY },
    { title: 'Ecommerce price monitoring', publisher: 'Price2Spy', url: PRICE2SPY_ECOM },
    { title: 'What does Price2Spy capture?', publisher: 'Price2Spy Help Center', url: PRICE2SPY_HELP },
    { title: 'Pricing', publisher: 'Price2Spy', url: PRICE2SPY_PRICING },
    { title: 'Competitor marketing tracking', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Catalog tracking', publisher: 'Panoramata', url: PANORAMATA_CATALOGS },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA_PRICING },
    { title: 'Particl: ecommerce market intelligence', publisher: 'Particl', url: PARTICL },
    { title: 'Exclusive 10% discount code for your first purchase', publisher: 'Particl', url: PARTICL_EMAIL },
    { title: 'Pricing', publisher: 'Particl', url: PARTICL_PRICING },
    { title: 'Competitive data', publisher: 'Competera', url: COMPETERA },
    { title: 'Pricing intelligence for retailers and brands', publisher: 'Minderest', url: MINDEREST },
    { title: 'InSite Analytics price tracking extension', publisher: 'Minderest', url: MINDEREST_INSITE },
    { title: 'NetRivals competitive price intelligence', publisher: 'Lengow', url: NETRIVALS },
    { title: 'Dynamic pricing and price monitoring', publisher: 'Omnia Retail', url: OMNIA },
    { title: 'Price intelligence for brands and retailers', publisher: 'Wiser', url: WISER },
  ],

  related: [
    'competitor-price-after-welcome-code',
    'ecommerce-competitive-intelligence',
    'competitor-email-tracking-tools',
    'recipe:price-watch',
    '/use-cases/member-prices-for-price-intelligence',
    '/sample-output',
  ],
}

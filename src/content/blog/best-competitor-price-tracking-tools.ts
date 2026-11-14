import type { BlogPost } from './types'

/* Best X guide 4 (_research/seo/recommend/best-x/PLAN.md, row 4; agreed by Seun 28 Oct 2026): the best competitor price
   tracking tools for ecommerce. Primary "competitor price tracking tools"; secondaries from Google autocomplete (US and
   UK, 28 Oct, autocomplete_tools_28oct.json): competitor price tracking software, competitor price tracking tool,
   competitor price tracker for small ecommerce, competitor price monitoring services. /blog/competitor-price-after-welcome-code
   keeps "competitor price monitoring shopify" and the by hand method, and is linked with its own title; /recipes/price-watch
   keeps "track competitor price changes"; /use-cases/member-prices-for-price-intelligence keeps "member price intelligence".
   14 tools in 5 groups by job, alphabetical inside each, no stars, ranking or Review markup. Dropped on 28 Oct:
   Competitors App (marketing, not prices), Intelligence Node (no detail), Boardfy (space), PriceHound (unverified), and
   tools named only in third-party lists. Visualping's "then just $100/mo" line on its ecommerce page is left out because
   its pricing page lists $14 to $350. larkfield.example, hollin.example and every price and answer in the two pictures
   are invented. British English, buyer words, no dashes.
   11 Nov 2026 (SEO revamp wave 1): title, answer, Obsession's lines, its comparison row and the call to action moved to
   the live position (the web behind the login, early access).
   14 Nov 2026 refresh (_research/seo/price-tracking-14nov/PLAN.md and WRITER_BRIEF.md, piece A; Seun's "GO" the same
   day): Search Console showed Google testing the page for the category's own words, so the meta title, H1, section
   titles and FAQ carry them, and these secondaries join: competitor price comparison software, competitor price
   comparison tool, competitor price comparison platform, competitor price monitoring software, best price monitoring
   software, price tracking software (owner row in docs/SEARCH.md §2; the template and MAP monitoring stay with
   /blog/competitor-price-comparison-template and /blog/map-monitoring-software, each linked once). New: the three
   names defined, the 6 questions for choosing (with the hollin.example picture), 3 FAQs, the closing section with the
   prices screen. Every fact about another tool was read again on its own page on 14 Nov 2026 (WebFetch and Exa):
   PriceMole's pricing (now 4 plans, $99 to $499) and home page, its Shopify listing ($99, $249, $499; MCP; login support
   on Business); Prisync's pricing (URL, channel and hybrid plans; API +20%) and home page; Pricefy's pricing (Starter $49,
   Pro $99, Business $189, Enterprise $499) and home page; Visualping's pricing, ecommerce page and login article;
   Price2Spy's home, why, ecommerce, pricing and help pages (help article dated 7 Oct 2026); Priceva's home page (its
   legality line now reads "completely legal when performed using publicly available data"; plan blocks still jumbled,
   so the page says to confirm); Panoramata's home page (now "300 industries and 150 countries", no 100,000+ claim),
   pricing and catalog page; Particl's home and pricing pages (no daily-update claim any more) and its archived Anyday
   email (dated 25 June 2025); Competera's competitive data page (its data feeds Competera's pricing AI, no own
   recommendation claim); Minderest's home and InSite pages; Lengow's NetRivals page; Omnia Retail's home page;
   Skuuudle's home page and price scraping article; Wiser's home page (no trendline claim any more). The 26 Oct walk
   of client stores stays (kept by PR #63). */

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
  title: 'Competitor price tracking tools and comparison software for ecommerce in 2026, by job',
  dek: '14 competitor price tracking tools grouped by the job they do, from free plans for a few products to managed services for large retailers. Every price is as each company listed it on 14 November 2026, beside Obsession, which keeps the price a new customer pays at each competitor.',
  metaTitle: 'Competitor price tracking tools and comparison software',
  description:
    'Competitor price tracking tools and comparison software for ecommerce, compared by job and price, beside the price each competitor shows only to customers.',
  answer:
    'Competitor price tracking tools read competitors’ product pages on a schedule and alert your team when a price changes. By job, Prisync and PriceMole track public prices at scale, Pricefy starts free, and Price2Spy and Priceva say they read cart and login prices. Obsession keeps the codes and member prices each competitor shows only to customers, and the basket total with a code applied, dated, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'competitor price tracking tools',
  keywords: [
    'competitor price tracking software',
    'competitor price tracking tool',
    'competitor price tracker for small ecommerce',
    'competitor price monitoring services',
    'best competitor price tracking tools',
    'competitor price tracker',
    'competitor price comparison software',
    'competitor price comparison tool',
    'competitor price comparison platform',
    'competitor price monitoring software',
    'best price monitoring software',
    'price tracking software',
  ],
  category: 'Watch other companies',
  published: '2026-10-28',
  updated: '2026-11-14',
  readingMinutes: 24,
  order: 4,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'larkfield.example · 1 throw, 4 prices',
      period: 'One linen throw for a new UK customer, product page to inbox',
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
      text: 'Pricing teams and ecommerce brands use competitor price tracking software to see the day a competitor changes a price. So do brands’ channel and marketplace teams, and the agencies that run pricing or marketplace work for brands. It replaces opening every competitor’s site each morning with an alert and a table of matched prices. The 14 tools here are grouped by the job they do best, each with its price as listed on 14 November 2026, where it stops and who it suits.',
    },

    { kind: 'h2', id: 'tracking-comparison-monitoring', text: 'Are price tracking, price comparison and price monitoring the same thing?' },
    {
      kind: 'p',
      text: 'Largely, yes. Buyers type all three names for the same software, and each name puts the weight on a different part of the job:',
    },
    {
      kind: 'list',
      items: [
        '**Price tracking software** follows each competitor’s price for a product over time and alerts your team when it changes.',
        '**Competitor price comparison software** sets your price beside each competitor’s price for the same product, in a table or a price index. A pricing team sees at once where it is cheaper or dearer. Suites that add repricing and dashboards are often sold as a competitor price comparison platform.',
        '**Price monitoring software** checks prices against a rule your team sets, such as your own price floor or MAP. MAP is the minimum advertised price a brand sets for the retailers that resell its products.',
      ],
    },
    {
      kind: 'p',
      text: 'Most of the 14 tools do all three. The trackers for public prices and the tools for small teams track and compare. A second group reads prices in the cart or behind a login, the market intelligence tools add competitors’ promotions and emails, and the managed services collect the data for large catalogues. Price comparison sites for shoppers, such as Google Shopping and idealo, are a different thing: several of these tools read them as a source.',
    },

    { kind: 'h2', id: 'what-they-do', text: 'What do competitor price tracking tools do?' },
    {
      kind: 'p',
      text: 'A competitor price tracking tool reads the product pages of the competitor stores your team names and matches each competitor product to one of yours. It reads each page again on a schedule, from once a day to several times a day, and sends an alert when a price, a sale or the stock level changes. Many can also change your own prices to follow a rule you set, which the tools call repricing.',
    },
    {
      kind: 'p',
      text: 'Most plans are sized in SKUs. A SKU, or stock-keeping unit, is 1 product or variant, such as a size or colour, with its own price.',
    },

    { kind: 'h2', id: 'how-to-choose', text: 'How do you choose competitor price tracking software?' },
    {
      kind: 'p',
      text: 'The number of products and competitors sets the plan, and the prices you need past the product page decide the tool. Work through these questions in order, with the plan limits as listed on 14 November 2026:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**How many stores and markets?** Count your SKUs, the competitors for each SKU and the countries you sell in. Prisync’s plans go up to 5,000 products, PriceMole’s to 5,000 SKUs before a custom plan and Pricefy’s to 25,000 SKUs. A larger catalogue across many markets suits a managed service such as Skuuudle, which reads prices down to the zip code or store.',
        '**How often?** Pricefy’s free plan reads prices once a day and its paid plans twice. Prisync reads 3 times a day on its URL plans, PriceMole 4 times and Price2Spy up to 8 times on Premium. Visualping checks a single page as often as every 2 minutes on its larger plans. In a sale week, when competitors change prices daily, read more often.',
        '**Do you need MAP checks?** MAP monitoring checks that retailers keep to the minimum advertised price a brand sets. It sits on Prisync’s $399 Platinum plan, Pricefy’s $189 Business plan and Price2Spy’s Basic plan, and Wiser sells MAP monitoring to brands. [MAP monitoring software](/blog/map-monitoring-software) compares the tools built for it.',
        '**Prices in the cart or behind a login?** Some retailers show the full price only in the cart, once delivery is counted, or to a signed-in account. Price2Spy and Priceva say they read both, Visualping checks pages behind a login your team holds, and PriceMole lists login support on its $499 plan in the Shopify App Store. Read each competitor’s terms first.',
        '**Codes, member prices and emailed offers?** Price2Spy can capture promotional codes as an extra field on its Premium plan, Competera lists coupon codes among its data, and Particl and Panoramata keep competitors’ marketing emails. None of the 14 tools’ pages describes signing up as a new customer and recording the price after the welcome code. Obsession keeps each subscriber code, each [member price](/glossary/member-price) and every emailed offer, dated with a screenshot, and can fill a basket to record the total with the code applied, stopping before payment.',
        '**Alerts, and where the data lands?** Prisync sends daily or instant email alerts by plan, with Excel reports and API access at 20% on top. PriceMole’s Shopify plans connect Claude or ChatGPT through MCP, and PriceMole and Pricefy push new prices back to Shopify. Obsession sends each change to Slack, a sheet, Clay, a webhook (a message to your own system the moment a price moves) or the API.',
      ],
    },
    {
      kind: 'art',
      caption: 'One pricing team’s answers to the 6 questions. Scale, frequency and MAP fit most public trackers; cart totals and the price after each welcome code narrow the list. Hollin is an invented brand.',
      art: {
        kind: 'report',
        title: 'hollin.example · choosing a tracker',
        period: 'A UK homeware brand’s answers, November 2026',
        cols: ['Question', 'Their answer'],
        rows: [
          { name: 'Stores and markets', cells: ['8 competitors, UK'], tone: 'info' },
          { name: 'How often', cells: ['Twice a day'], tone: 'info' },
          { name: 'MAP', cells: ['Not needed'], tone: 'info' },
          { name: 'Cart or login', cells: ['Cart totals'], tone: 'info' },
          { name: 'Codes and offers', cells: ['Welcome codes'], tone: 'info' },
          { name: 'Where it lands', cells: ['Slack and Shopify'], tone: 'info' },
        ],
        notes: [
          'The first 3 answers fit Prisync, PriceMole or a paid Pricefy plan. Cart totals point to Price2Spy or Priceva, and the price after each welcome code takes a customer who signs up.',
          'Example: Hollin and its answers are invented.',
        ],
      },
    },

    { kind: 'h2', id: 'new-customer-price', text: 'Which tools see the price a new customer pays?' },
    {
      kind: 'p',
      text: 'Most trackers read the public price, the one any visitor sees on the product page. A new customer often pays a different one. The welcome code arrives by email after sign-up, and a [signed-in price](/glossary/signed-in-price) shows only to a customer logged in to an account. Delivery charges and add-ons appear in the cart, and an offer can reach subscribers days before the site shows it. [A competitor’s real price is the price after the welcome code](/blog/competitor-price-after-welcome-code) sets out how to record each of these by hand.',
    },
    {
      kind: 'p',
      text: 'Some tools say they reach part of that price. On 14 November 2026, their own pages said this:',
    },
    {
      kind: 'table',
      caption: 'What each tool’s own pages said it can see past the public product page, as listed on 14 November 2026',
      cols: ['Tool', 'What its pages say'],
      rows: [
        ['Priceva', 'Cart prices on its $99 plan\nPrices behind a login on its $199 plan'],
        ['Price2Spy', 'Prices behind logins and after a cart step\nPromotional codes as an extra field'],
        ['Visualping', 'Pages behind your own login'],
        ['PriceMole', 'Login support on its $499 plan, per its Shopify listing'],
        ['Particl', 'A library of brands’ emails, first-purchase offers included'],
        ['Competera', 'Coupon codes and promo mechanics on its list of data to capture'],
        ['NetRivals (Lengow)', '“If it’s public, it’s trackable”'],
        ['Prisync, Pricefy, Panoramata, Omnia Retail, Minderest, Wiser, Skuuudle', 'Their pages don’t describe login, member or coupon prices'],
      ],
    },
    {
      kind: 'p',
      text: 'None of these 14 tools’ pages describes signing up to a competitor as a new customer, taking the welcome code to checkout and recording the price that results. Recording that price, the one a first order pays, takes a customer of each competitor who signs up and waits for the emails.',
    },

    { kind: 'h2', id: 'how-compared', text: 'How were the tools compared?' },
    {
      kind: 'p',
      text: 'Facts about each tool come from its own pages as they stood on 14 November 2026, apart from PriceMole’s listing in the Shopify App Store, named where it appears. Every price is as listed that day, in US dollars. Each tool was compared on 5 points:',
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

    { kind: 'h2', id: 'at-scale', text: 'Which tools track public prices at scale?' },
    {
      kind: 'p',
      text: 'These read competitor product pages across hundreds or thousands of products, match them to your catalogue and alert your team to every change. They are the core of most competitor price monitoring software, and they suit a pricing team watching list prices across many competitors every day.',
    },

    { kind: 'h3', id: 'pricemole', text: 'PriceMole' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [PriceMole](' +
          PRICEMOLE +
          ') tracks competitor prices and stock and reprices your products. It finds and matches competitor product pages from its own data, says it tracks 100,000+ sites, and updates prices 4 times a day. It connects to Shopify and BigCommerce. Its Shopify listing adds Google Shopping, MAP monitoring and a connection to Claude or ChatGPT through MCP, so a team can ask about competitors’ prices in a chat.',
        '**Price as listed:** [$99 a month](' +
          PRICEMOLE_PRICING +
          ') for 100 SKUs and 5 competitors, or $199 for 500 SKUs and 10 competitors. Larger plans cost $299 for 1,000 SKUs and $499 for 5,000. Billing is every 30 days with no commitment, after a 14 day free trial. Its [Shopify App Store listing](' +
          PRICEMOLE_SHOPIFY +
          ') shows 3 plans: $99, $249 for 1,000 products and $499 for 5,000.',
        '**Where it stops:** login support is listed only on its Shopify listing, on the $499 Business plan. Its own pages don’t describe coupon codes or member prices.',
        '**Best for:** a Shopify or BigCommerce store that wants competitor products matched and repriced automatically.',
      ],
    },

    { kind: 'h3', id: 'prisync', text: 'Prisync' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Prisync](' +
          PRISYNC +
          ') tracks competitor prices and stock, shows where your price sits against each competitor, and checks MAP. It says companies from small businesses to Fortune 500 brands use its data, and its Shopify app imports a catalogue in one click.',
        '**Price as listed:** [$99 a month](' +
          PRISYNC_PRICING +
          ') for up to 100 products and 3 updates a day, $199 for 1,000 and $399 for 5,000. Plans priced by sales channel run from $199 to $599 a month, hybrid plans from $299 to $799, and API access costs 20% on top. A 14 day free trial needs no payment details.',
        '**Where it stops:** price history and MAP monitoring come on the $399 Platinum plan, and marketplaces and variants from $199. Its pages don’t describe login, member or coupon prices.',
        '**Best for:** a store with 100 to 5,000 products that wants scheduled price alerts across many competitors.',
      ],
    },

    { kind: 'h2', id: 'small-store', text: 'Which competitor price tracker suits small ecommerce teams?' },
    {
      kind: 'p',
      text: 'A team tracking up to 50 products can start free. Pricefy’s free plan covers 50 SKUs and 5 competitors, Priceva’s covers up to 20 products, and Visualping’s covers 5 pages. Paid plans start at $14 a month at Visualping and $49 at Pricefy.',
    },

    { kind: 'h3', id: 'pricefy', text: 'Pricefy' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Pricefy](' +
          PRICEFY +
          ') tracks each variant’s price on competitor sites, Amazon, eBay and Google Shopping, and reprices from its $99 Pro plan. It matches products by barcode first, then by comparing text and images with AI, and your team can correct a match by hand. It imports a Shopify catalogue in one click and pushes new prices back, and says 10,000+ ecommerce businesses use it.',
        '**Price as listed:** [free](' +
          PRICEFY_PRICING +
          ') for 50 SKUs, 5 competitors and 1 update a day. Paid plans cost $49 a month for 100 SKUs and $99 for 2,000, then $189 for 15,000 and $499 for 25,000. Each paid plan has unlimited competitors and 2 updates a day. Paying yearly saves 25%.',
        '**Where it stops:** its pages describe public competitor pages and don’t describe login, member or coupon prices. MAP monitoring starts on the $189 Business plan.',
        '**Best for:** a Shopify store starting free with up to 50 products.',
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
          ') by typing the username and password before each check.',
        '**Price as listed:** [free](' +
          VISUALPING_PRICING +
          ') for 5 pages and 150 checks a month. Personal plans run from $14 a month for 10 pages to $70 for 40. Business plans run from $140 a month for 200 pages to $350 for 500, and yearly billing costs less.',
        '**Where it stops:** your team sets up every page by hand, and it reports each change to a page with no table of matched competitor prices.',
        '**Best for:** a team watching a handful of competitor product pages for under $15 a month.',
      ],
    },

    { kind: 'h2', id: 'login-cart', text: 'Which tools read prices behind a login or in the cart?' },
    {
      kind: 'p',
      text: 'Some prices appear only after a step: in the cart, once delivery and add-ons are counted, or behind a customer login. These 2 tools say they read past the product page. Before tracking prices behind a competitor’s login, read that store’s terms. [Priceva’s own FAQ](' +
        PRICEVA +
        ') says competitor price tracking is legal when it uses publicly available data. [Skuuudle’s guide to price scraping](' +
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
          '). Starter and Basic show a free trial button, Premium is priced on request, and the home page offers 14 days free without payment details. MAP monitoring starts on Basic, and Premium adds up to 8 price checks a day.',
        '**Where it stops:** with no published prices, a team can’t size the cost before a conversation. Its pricing page lists capturing additional details under Premium, and its help centre names promotional codes among those extra fields. Add-ons are priced separately.',
        '**Best for:** stores and brands that need prices from competitor sites that hide them behind a login or a cart step.',
      ],
    },

    { kind: 'h3', id: 'priceva', text: 'Priceva' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Priceva](' +
          PRICEVA +
          ') tracks prices, stock and MAP, with price history. It says it monitors prices across 10,000+ online stores worldwide, including Amazon, eBay, Walmart and Google Shopping. Its plan list includes monitoring of sites protected against bots, cart price monitoring and monitoring behind a login, the last two on paid plans.',
        '**Price as listed:** free for up to 20 tracked products. Its page lists paid plans at $99 and $199 a month, and tiers of 6,200, 35,000 and 100,000 price checks with 20, 30 and 40 competitors, without saying which plan carries which tier, so confirm with Priceva. Enterprise is custom.',
        '**Where it stops:** its home page doesn’t say whether it connects to Shopify, and cart and login prices need a paid plan. Its page lists prices and features in separate blocks, so confirm which plan carries each feature with Priceva before buying.',
        '**Best for:** a team that wants a free start, with cart and login prices on a paid plan.',
      ],
    },

    { kind: 'h2', id: 'brands', text: 'Which tools track competitors’ promotions and emails beside their prices?' },
    {
      kind: 'p',
      text: 'These tools track more than price, such as a competitor’s discounts, sales estimates, emails, texts and ads beside its catalogue prices. [Ecommerce competitive intelligence](/blog/ecommerce-competitive-intelligence) sorts every source of competitor data, such as apps, ads, emails and prices, by where it lives. [Competitor email tracking tools](/blog/competitor-email-tracking-tools) compares the tools that collect competitors’ emails.',
    },

    { kind: 'h3', id: 'panoramata', text: 'Panoramata' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Panoramata](' +
          PANORAMATA +
          ') tracks competitors’ emails, texts and WhatsApp messages, flows, ads, landing pages and website changes. It also tracks their [catalogues and prices](' +
          PANORAMATA_CATALOGS +
          '), including price changes and the average price of their products, and says it tracks companies across 300 industries and 150 countries.',
        '**Price as listed:** [$99 a month](' +
          PANORAMATA_PRICING +
          ') ($990 a year) for up to 20 competitors and 6 months of history, or $179 for unlimited competitors and history. Advanced is $399 a month, and Enterprise is on request. Its page says the platform is in beta and opens accounts on request.',
        '**Where it stops:** its pages don’t say how often prices refresh, which sites its catalogue tracking covers or how it collects emails. [Obsession vs Panoramata](/compare/obsession-vs-panoramata) sets the two side by side.',
        '**Best for:** brands that want competitors’ emails, texts, ads and catalogue prices in one tool.',
      ],
    },

    { kind: 'h3', id: 'particl', text: 'Particl' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Particl](' +
          PARTICL +
          ') combines product revenue, pricing, promotions and assortment data across 20,000+ retailers, down to the SKU. Its library of brands’ emails, ads and campaigns includes offers such as [an Anyday email headed “Exclusive 10% discount code for your first purchase”](' +
          PARTICL_EMAIL +
          '), dated 25 June 2025.',
        '**Price as listed:** [$250 a month](' +
          PARTICL_PRICING +
          ') for 5 competitors and 3 months of history, or $500 for 10 competitors and 6 months. Growth costs $1,000 for 10 competitors and 12 months, and Custom is on request. A 14 day free trial.',
        '**Where it stops:** its pages don’t say how it collects emails or whether it sees member prices, and they don’t mention Shopify.',
        '**Best for:** a funded brand that wants competitors’ prices, discounts and sales estimates in one place.',
      ],
    },

    { kind: 'h2', id: 'services', text: 'Which competitor price monitoring services suit large retailers?' },
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
          ') collects competitor prices, promotions, stock levels and custom attributes across every market a retailer sells in. It has industry pages for grocery, health and beauty, consumer electronics and home furnishings. Its competitive data page lists promo mechanics, discount depth, coupon codes and multi-buy offers among the data to capture, and the data feeds Competera’s own pricing AI.',
        '**Price as listed:** not listed on its competitive data page. Competitor data is billed per SKU delivered on time, never for failed or delayed scans, and prepaid balances don’t expire.',
        '**Where it stops:** sold through its team, with customer stories from Sephora, Lyreco and AUTODOC. Its pages don’t mention member or login prices.',
        '**Best for:** a retailer selling across many markets that wants managed competitor data feeding its pricing rules.',
      ],
    },

    { kind: 'h3', id: 'minderest', text: 'Minderest' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Minderest](' +
          MINDEREST +
          ') tracks competing retailers’ prices, promotions and stock across their whole catalogues, updated daily, and monitors the sellers that list your products on marketplaces. The logos on its home page include eBay, L’Oréal and Decathlon. Its [InSite Analytics extension](' +
          MINDEREST_INSITE +
          ') for Chrome and Firefox shows a retailer’s prices, promotions, stock and shipping costs against your own while you browse its site, filtered by postcode.',
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
          ') tracks competitor prices, assortments, promotions and stock across marketplaces, retailer sites and comparison shopping engines. It adds automated repricing and sales data from Google Analytics. Its page states its scope plainly: “If it’s public, it’s trackable.”',
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
          ') runs competitor price collection as a managed service for pricing, buying and merchandising teams, and makes the product matches for them. Its customers are mainly in the US, UK, Europe and Canada. It collects base, shelf and promo prices, RRP and MAP, delivery fees and stock. It also collects prices that differ by region, down to the zip code or store.',
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
          ') sells price monitoring and MAP monitoring to brands and retailers, with a page for marketplace sellers. Its page says its MAP monitoring flags unauthorised pricing across online marketplaces. A free competitive snapshot compares a retailer’s prices when you enter its web address.',
        '**Price as listed:** not listed. The snapshot is free, and a demo is booked online.',
        '**Where it stops:** sold through its team and focused on marketplaces. Its pages list promotions among the measures it tracks, with no mention of member or coupon prices.',
        '**Best for:** brands and marketplace sellers that want a free first look before a quote.',
      ],
    },

    { kind: 'h2', id: 'what-a-customer-saw', text: 'What did a new customer meet past the product page?' },
    {
      kind: 'p',
      text: 'On 26 October 2026, an Obsession agent walked the client stores that Shopify agencies and freelance experts chose to show on their own websites. It shopped on a phone as a signed-out new customer, added an item to the cart and stopped at the first checkout page. A shopper could see a problem at most of these stores.',
    },
    {
      kind: 'list',
      items: [
        'The most common problem was an offer on the page or top bar that the cart or checkout did not honour: free shipping or delivery, a subscription price or a free gift. One store still showed a sale banner the day after the sale ended.',
        'Some carts added a charge the shopper had not chosen, such as a shipping protection line already switched on. In others, a package protection line appeared after the shopper went to checkout and came back.',
        'At other stores it walked, the agent saw prices or free-delivery thresholds in mixed currencies for a visitor in the United States. These depend on where the visitor is, so a price read from one country is one view of it.',
      ],
    },
    {
      kind: 'p',
      text: 'Most of these sit between the product page and the payment page. A tracker reading the product page records the offer as shown. Seeing whether the cart honours it takes a cart step, which Price2Spy and Priceva say they offer, or a customer.',
    },
    {
      kind: 'p',
      text: 'The agencies chose the stores, so the patterns describe the stores they show. Each store was checked from one country and stopped before payment. For what a finished record looks like, see the [sample data](/sample-output) from a real UK store.',
    },

    { kind: 'h2', id: 'your-prices', text: 'How do you see what competitors charge a new customer, beside your own prices?' },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. Its agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting.',
    },
    {
      kind: 'p',
      text: 'For your own company, Obsession reads your prices, stock and delivery every morning the way a new customer sees them, beside every email your store sends a new subscriber. With Obsession, you can set your prices beside the biggest companies in your category, read the same way. That covers the public price, the member price, delivery and the code each one emails its list, with every change dated and its before and after screenshots.',
    },
    {
      kind: 'list',
      items: [
        '**Win the pitch:** an agency that runs pricing or marketplace work for brands opens with the codes and member prices the prospect’s competitors give a new customer, beside the prospect’s own price.',
        '**Keep the client:** a morning read of every competitor’s prices and codes shows the day one undercuts the client, with the before and after screenshots, in that week’s report.',
        '**Grow the account:** a member price or an emailed code the client’s competitors give and the client doesn’t becomes the next piece of work, with the screenshot or email behind it.',
      ],
    },
    {
      kind: 'screen',
      screen: 'prices',
      caption: 'Daily price reads at Competitor A, B and C, and the morning Competitor B cuts its soy candle £5 under yours, 4 days before Black Friday. The before and after screenshots come with the alert.',
    },
    {
      kind: 'p',
      text: 'It keeps going on its own. [Price watch](/recipes/price-watch) reads prices, stock and delivery every morning, so a changed member price shows up the next day. A fresh sign-up can run [every step again each week](/use-cases/leak-checks-for-ecommerce-stores), so a new welcome code shows up that week. It works the same for one company or a list of 3,000, on an index built for millions of companies.',
    },

    { kind: 'h2', id: 'which-to-choose', text: 'Which competitor price comparison software fits each job?' },
    {
      kind: 'p',
      text: 'Use Obsession when your company needs the price each competitor shows only to its customers. That means the code sent to new subscribers, each member price and every emailed offer, read each morning, and the basket total with delivery and the code applied if you choose. Each is kept with a dated screenshot for as long as you follow the competitor. A public price tracker is the right pick for a team watching list prices across many competitors every day.',
    },
    {
      kind: 'list',
      items: [
        '**The price a new customer pays at each competitor:** Obsession’s Price watch checks every competitor’s prices, offers and delivery each morning, plus the codes each competitor emails its subscribers. Each change arrives with a before and after screenshot.',
        '**List prices across hundreds or thousands of products:** Prisync or PriceMole, or Pricefy from $49 a month for 100 SKUs.',
        '**A team watching a few competitors:** Pricefy’s free plan for up to 50 SKUs, Priceva’s for up to 20 products, or Visualping from $14 a month for a handful of pages.',
        '**Prices in the cart or behind a login:** Price2Spy or Priceva, after reading each competitor’s terms.',
        '**Retailers kept to MAP:** Prisync’s Platinum plan, Pricefy’s Business plan, Price2Spy or Wiser.',
        '**Competitors’ discounts, emails and sales estimates beside their prices:** Particl or Panoramata.',
        '**A large catalogue across marketplaces, with the data collected for you:** a competitor price monitoring service such as Skuuudle, Competera, Omnia Retail, Minderest, Wiser or NetRivals.',
        '**A few competitors, checked once before a sale:** by hand, with a [competitor price comparison template](/blog/competitor-price-comparison-template).',
      ],
    },
    {
      kind: 'cta',
      text: 'Member prices beside public ones, at every retailer you track. See the price a signed-in member sees, the welcome coupon and the offers that follow by email, per store, each dated with its screenshot.',
      to: '/use-cases/member-prices-for-price-intelligence',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'compared', text: 'The 14 competitor price comparison tools and Obsession, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 14 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Competitor price tracking tools by job, from each provider’s own pages, as listed on 14 November 2026. Prices in US dollars',
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
        ['Prisync', 'Scheduled price and stock alerts, MAP checks', '$99 to $399 a month\n$199 to $799 by channel\n14 days free', 'Price history and MAP on the $399 plan', '100 to 5,000 products, many competitors'],
        ['Pricefy', 'Barcode and AI product matching, repricing', 'Free for 50 SKUs\n$49 to $499 a month', 'Free plan updates once a day', 'A free start with up to 50 products'],
        ['Visualping', 'Alerts when any page changes, logins included', 'Free for 5 pages\n$14 to $350 a month', 'Every page set up by hand', 'A handful of competitor pages'],
        ['Price2Spy', 'Prices behind logins and cart steps, promo codes as a field', 'Not listed\n14 days free', 'Extra details listed under Premium', 'Competitor prices behind a login or cart step'],
        ['Priceva', 'Cart prices and prices behind a login on paid plans', 'Free for 20 products\n$99 or $199 a month', 'Shopify connection not stated', 'A free start, cart prices later'],
        ['Panoramata', 'Competitors’ emails, texts, ads and catalogue prices', '$99 to $399 a month', 'Price refresh rate not stated', 'Brands watching competitors’ marketing and prices'],
        ['Particl', 'Prices, discounts and sales estimates across 20,000+ retailers', '$250 to $1,000 a month\n14 days free', 'Collection method not stated', 'Funded brands'],
        ['Competera', 'Competitor data with coupon codes on its list', 'Billed per SKU delivered', 'Sold through its team', 'Large retailers'],
        ['Minderest', 'Whole-catalogue monitoring and a browser extension', 'Demo on request', 'No published prices or trial', 'Larger retailers'],
        ['NetRivals (Lengow)', 'Prices, assortments and promotions across marketplaces', 'Demo on request', 'Public prices, by its own words', 'Marketplace sellers'],
        ['Omnia Retail', 'Dynamic pricing with marketplace and site monitoring', 'Quoted after a first call', 'Mostly European marketplaces', 'Retailers that want pricing rules'],
        ['Skuuudle', 'Managed collection down to the zip code or store', '$10,000 to $1 million a year', 'No self-serve plan', 'A price data budget in the tens of thousands'],
        ['Wiser', 'Marketplace price and MAP monitoring, free snapshot', 'Not listed\nFree snapshot', 'Sold through its team', 'A free first look, then a quote'],
        [
          'Obsession (ours): [Price watch](/recipes/price-watch), [Competitor tracking](/recipes/competitor-tracking), [Member prices](/use-cases/member-prices-for-price-intelligence)',
          'Subscriber codes, member prices and emailed offers each morning, and the basket total with a code if you choose, at any competitor you name',
          'Early access, onboarding teams now. Priced per call or per company watched',
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
          a: 'The best competitor price tracking software depends on the job. For what a new customer is offered at each competitor (the subscriber code, the member price, every emailed offer and, if you choose, the basket total with the code applied), Obsession keeps it dated with a screenshot. On 14 November 2026, Prisync and PriceMole listed plans from $99 a month for public prices across hundreds to thousands of products. Pricefy, Priceva and Visualping had free plans, and Price2Spy and Priceva said they read prices behind a login or in the cart.',
        },
        {
          q: 'What is competitor price comparison software?',
          a: 'Competitor price comparison software sets your price for each product beside each competitor’s price for the same product, so a pricing team sees where it is cheaper or dearer. Prisync shows this as a price position comparison on every paid plan, and Minderest’s browser extension colour-codes whether a retailer’s price is higher or lower than yours. Obsession adds what each competitor shows only to customers: the member price, the codes sent to subscribers and, if you choose, the basket total with the code applied.',
        },
        {
          q: 'What is the best price monitoring software?',
          a: 'The best price monitoring software depends on what you monitor. For retailers kept to MAP, Prisync’s Platinum plan, Pricefy’s Business plan, Price2Spy and Wiser list MAP monitoring. For competitor prices across thousands of products, Prisync, PriceMole and Pricefy read pages several times a day. For marketplaces, Omnia Retail, NetRivals and Wiser read them as a source. For the price a new customer pays after the welcome code, Obsession keeps it dated with a screenshot.',
        },
        {
          q: 'Is there free price monitoring software?',
          a: 'Yes. On 14 November 2026, free price monitoring software included Pricefy’s free plan for 50 SKUs and 5 competitors with 1 update a day. Priceva’s free plan covered up to 20 products, and Visualping’s covered 5 pages and 150 checks a month. Prisync, PriceMole, Price2Spy and Particl offered 14 day free trials, and Wiser offered a free competitive snapshot of a retailer’s prices.',
        },
        {
          q: 'What is a good competitor price tracker for small ecommerce stores?',
          a: 'For a team tracking up to 50 products, Pricefy’s free plan covers 50 SKUs and 5 competitors with 1 update a day. Its next plan is $49 a month for 100 SKUs. Visualping watches 5 pages free, or 10 for $14 a month. For a few competitors before a sale, a sheet kept by hand costs nothing but time.',
        },
        {
          q: 'Can competitor price tracking tools see discount codes and member prices?',
          a: 'In part. Price2Spy says it can capture promotional codes and prices behind logins, and Priceva lists cart prices and prices behind a login on paid plans. Visualping checks pages behind your own login, and Competera lists coupon codes among the data to capture. Particl’s library holds brands’ emails with first-purchase offers. On 14 November 2026, none of these 14 tools’ pages described signing up as a new customer and recording the price once the welcome code is applied.',
        },
        {
          q: 'What are competitor price monitoring services?',
          a: 'They are companies that collect competitors’ prices for your team and deliver them as a feed or a dashboard, usually priced by quote. Skuuudle lists $10,000 to $1 million a year and Competera bills per SKU delivered. Omnia Retail, Minderest, Wiser and NetRivals price after a demo. Price intelligence firms that want the prices retailers show only to members can add Obsession’s member prices at every retailer they track.',
          link: { label: 'Member price intelligence', to: '/use-cases/member-prices-for-price-intelligence' },
        },
        {
          q: 'How much does competitor price tracking software cost?',
          a: 'On 14 November 2026, Pricefy, Visualping and Priceva had free plans. Paid self-serve plans started at $14 a month at Visualping and $49 at Pricefy. Prisync, PriceMole, Priceva and Panoramata started at $99, and Particl at $250. Price2Spy, Omnia Retail, Minderest, Wiser, Competera and NetRivals list no price, and Skuuudle lists $10,000 to $1 million a year.',
        },
        {
          q: 'Is it legal to track competitor prices?',
          a: 'Priceva’s FAQ says competitor price tracking is legal when it uses publicly available data. For prices behind a login, Skuuudle’s guide says to stay within the site’s terms. Read each competitor’s terms and take advice where your company trades, as nothing here is legal advice.',
        },
        {
          q: 'How does Obsession track competitor prices?',
          a: 'An Obsession agent, a customer that says it’s an AI, signs up to each competitor with its own inbox. It records the code each competitor sends new subscribers, each member price and every emailed offer, and, if you choose, fills a basket to record the total with delivery and the code applied, stopping before payment. Each is dated with a screenshot. Obsession’s Price watch checks every competitor’s prices, offers and delivery each morning and reports each change with a before and after screenshot. Teams start in early access, priced per call or per company watched.',
          link: { label: 'Price watch', to: '/recipes/price-watch' },
        },
      ],
    },
  ],

  sources: [
    { title: 'PriceMole: competitor price monitoring and repricing', publisher: 'PriceMole', url: PRICEMOLE },
    { title: 'Pricing', publisher: 'PriceMole', url: PRICEMOLE_PRICING },
    { title: 'PriceMole: Competitor Tracking', publisher: 'Shopify App Store', url: PRICEMOLE_SHOPIFY },
    { title: 'Competitor price tracking and dynamic pricing software', publisher: 'Prisync', url: PRISYNC },
    { title: 'Pricing', publisher: 'Prisync', url: PRISYNC_PRICING },
    { title: 'Competitor price monitoring and repricing', publisher: 'Pricefy', url: PRICEFY },
    { title: 'Pricing', publisher: 'Pricefy', url: PRICEFY_PRICING },
    { title: 'Ecommerce monitoring', publisher: 'Visualping', url: VISUALPING_ECOM },
    { title: 'Can I monitor a password-protected page?', publisher: 'Visualping Help Center', url: VISUALPING_LOGIN },
    { title: 'Pricing', publisher: 'Visualping', url: VISUALPING_PRICING },
    { title: 'Competitor price monitoring software', publisher: 'Priceva', url: PRICEVA },
    { title: 'What is price scraping?', publisher: 'Skuuudle', url: SKUUUDLE_BLOG },
    { title: 'Competitive pricing intelligence', publisher: 'Skuuudle', url: SKUUUDLE },
    { title: 'Price monitoring software', publisher: 'Price2Spy', url: PRICE2SPY },
    { title: 'Why Price2Spy', publisher: 'Price2Spy', url: PRICE2SPY_WHY },
    { title: 'Ecommerce price monitoring', publisher: 'Price2Spy', url: PRICE2SPY_ECOM },
    { title: 'What does Price2Spy capture?', publisher: 'Price2Spy Help Center', url: PRICE2SPY_HELP, date: '2026-10-07' },
    { title: 'Pricing', publisher: 'Price2Spy', url: PRICE2SPY_PRICING },
    { title: 'Competitor marketing tracking', publisher: 'Panoramata', url: PANORAMATA },
    { title: 'Catalog tracking', publisher: 'Panoramata', url: PANORAMATA_CATALOGS },
    { title: 'Pricing', publisher: 'Panoramata', url: PANORAMATA_PRICING },
    { title: 'Particl: ecommerce market intelligence', publisher: 'Particl', url: PARTICL },
    { title: 'Exclusive 10% discount code for your first purchase at Anyday', publisher: 'Particl', url: PARTICL_EMAIL, date: '2025-06-25' },
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
    'competitor-price-comparison-template',
    'map-monitoring-software',
    'ecommerce-competitive-intelligence',
    'recipe:price-watch',
    '/use-cases/member-prices-for-price-intelligence',
  ],
}

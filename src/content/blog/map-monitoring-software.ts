import type { BlogPost } from './types'

/* Price guide B2 (_research/seo/price-tracking-14nov/PLAN.md and WRITER_BRIEF.md; approved by Seun 14 Nov 2026, "GO"):
   the best MAP monitoring software, by job. Primary "map monitoring software"; secondaries from Google autocomplete (US
   and UK, 14 Nov, autocomplete_14nov.json): minimum advertised price monitoring software, map tracking software, map
   price monitoring software, map monitoring tool. "Competitor price tracking tools" stays with
   /blog/best-competitor-price-tracking-tools, "member only pricing" with /blog/member-only-pricing and "competitor price
   monitoring shopify" with /blog/competitor-price-after-welcome-code, each linked with its own anchor. Readers: brands'
   pricing, channel and marketplace teams (S5), and the agencies that run Amazon and marketplace accounts for brands.
   Format of /blog/best-competitor-price-tracking-tools and /blog/klaviyo-audit-tools: 12 tools in 5 groups by job,
   alphabetical inside each, no stars, ranking or Review markup; each one's strengths first from its own pages, prices as
   listed, and "its pages don't describe…" where a page is silent. Every fact about another company was read on its own
   page on 14 Nov 2026: Brand Alignment's MAP page, GrowByData's MAP page, TrackStreet's home page, Intelligence Node's MAP
   page, Wiser's MAP page, Pricebeeper's MAP page, Pricefy's pricing page, Prisync's MAP page (with its plans), Price2Spy's
   MAP page, why.html and pricing page, Priceva's home page (its plan table is jumbled, so plan-to-feature is left open),
   MAPP Trap's home page, and Vorys eControl's capabilities page and its firm's landing page. Left out: Channel IQ (its
   domain didn't resolve), Sellerdome (domain for sale), BrandShield and BrandVerity (their pages describe no MAP
   monitoring), and newer tools whose pages give no customers or history (Clymin, Senkrondata, MapInCheck, Kvetoiq,
   Brand Protector and others). The policy section is general information, never legal advice: the FTC's guide (undated),
   the Federal Register analysis of the 2000 music distributor orders, the CMA's VABEO guidance (CMA166, 12 July 2022,
   paras 8.12(d), 8.14, 8.16 and 8.21(c), read in the PDF), and the Bundeskartellamt's Orderman case summary (31 May
   2022), which cites paras 187 and 189 of the EU Guidelines on vertical restraints. Brand policies read on their own pages:
   Gaia Herbs (last updated 1 Nov 2025), Star (Middleby foodservice brands, effective Jan 2021) and Carlson Labs.
   Obsession's lines use the live price watch recipe and member prices use case words only. kestrel.example and every
   price in the two pictures are invented. British English, numerals, no dashes. */

const BRAND_ALIGNMENT = 'https://www.brandalignment.com/map-monitoring-software/'
const GROWBYDATA = 'https://growbydata.com/enforce-map/'
const TRACKSTREET = 'https://www.trackstreet.com/'
const INODE = 'https://www.intelligencenode.com/solutions/map-monitoring'
const WISER = 'https://www.wiser.com/map-monitoring/'
const PRICEBEEPER = 'https://pricebeeper.io/features/map-monitoring'
const PRICEFY = 'https://www.pricefy.io/pricing'
const PRISYNC = 'https://prisync.com/minimum-advertised-price-monitoring-software/'
const P2S_MAP = 'https://www.price2spy.com/map-price-monitoring.html'
const P2S_WHY = 'https://www.price2spy.com/why.html'
const P2S_PRICING = 'https://www.price2spy.com/pricing.html'
const PRICEVA = 'https://priceva.com/'
const MAPPTRAP = 'https://www.mapptrap.com/'
const VORYS = 'https://vorysecontrol.com/capabilities/'
const VORYS_FIRM = 'https://econtrol.vorys.com/fitforcommerce'
const FTC_GUIDE =
  'https://www.ftc.gov/advice-guidance/competition-guidance/guide-antitrust-laws/dealings-supply-chain/manufacturer-imposed-requirements'
const FTC_MUSIC =
  'https://www.federalregister.gov/documents/2000/05/17/00-12380/bmg-music-capitol-records-inc-sony-music-entertainment-inc-time-warner-inc-and-universal-music-and'
const CMA_VABEO = 'https://assets.publishing.service.gov.uk/media/62d57d7fe90e071e7b13109f/VABEO_Guidance.pdf'
const BKA = 'https://www.bundeskartellamt.de/SharedDocs/Entscheidung/EN/Fallberichte/Kartellverbot/2022/B7-35-22.pdf?__blob=publicationFile&v=2'
const GAIA = 'https://professionals.gaiaherbs.com/GaiaHerbsMinimumAdvertisedPricePolicy'
const STAR = 'https://star-mfg.com/map-policy/'
const CARLSON = 'https://www.carlsonlabs.com/pages/imap-policy'

export const post: BlogPost = {
  slug: 'map-monitoring-software',
  title: 'MAP monitoring software for brands in 2026: catch prices below minimum advertised price',
  dek: '12 MAP monitoring tools grouped by job, with what each reads, the proof it keeps and its price on 14 November 2026. Beside them, Obsession keeps the price resellers show only to signed-up customers, in the cart, behind the login and in the inbox.',
  metaTitle: 'MAP monitoring software for brands: 12 tools by job, 2026',
  description:
    'MAP monitoring software for brands, by job and price: enforcement tools, price trackers with MAP, and prices resellers hide in carts, logins and emails.',
  answer:
    'MAP monitoring software checks the prices resellers advertise for a brand’s products against its minimum advertised price (MAP), and records each listing below it with the seller, the time and a screenshot. Brand Alignment, GrowByData and TrackStreet also send the notices, and Pricefy, Prisync and Price2Spy add MAP to a price tracker. Obsession keeps the price a signed-up customer is shown at each reseller, from the basket to the member price and the emailed code, each dated with its screenshot or the email.',
  primaryKeyword: 'map monitoring software',
  keywords: ['minimum advertised price monitoring software', 'map tracking software', 'map price monitoring software', 'map monitoring tool'],
  category: 'Watch other companies',
  published: '2026-11-14',
  updated: '2026-11-14',
  readingMinutes: 20,
  order: 8,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'kestrel.example · Brand A blender',
      period: 'MAP $199 · what each visitor was shown, week of 9 November 2026',
      cols: ['Where the price sits', 'Price', 'Against MAP'],
      rows: [
        { name: 'Product page', cells: ['$199', 'At MAP'], tone: 'ok' },
        { name: 'In the cart', cells: ['$179', '$20 under'], tone: 'fail' },
        { name: 'Signed in', cells: ['$174', '$25 under'], tone: 'fail' },
        { name: 'Welcome code', cells: ['$169', '$30 under'], tone: 'fail' },
      ],
      notes: [
        'A MAP tool reading the product page records $199 and no breach. A customer who signed up was offered the same blender for $169.',
        'Example: Kestrel, Brand A and every price here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Brands that sell through resellers use MAP monitoring software to find every retailer and marketplace seller advertising their products below the minimum advertised price (MAP) they set. Pricing, channel and marketplace teams at brands run it on their own reseller network. Agencies that manage Amazon and marketplace accounts for brands run it on their clients’ products. The 12 tools here sit in groups by job, each with what it reads, the proof it keeps, its price as listed on 14 November 2026 and where it stops.',
    },

    { kind: 'h2', id: 'what-it-is', text: 'What is MAP monitoring software?' },
    {
      kind: 'p',
      text: 'MAP monitoring software checks the prices resellers advertise against a brand’s MAP, the lowest price at which the brand allows its products to be advertised, and records each listing below it. On the pages read here, it works in 5 steps:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Your MAP table goes in:** each product, its MAP and the dates when MAP is paused, which brand policies call MAP holidays.',
        '**It finds your products** on marketplaces such as Amazon, Walmart and eBay, on Google Shopping and on resellers’ own sites, and matches each listing to the right product and seller.',
        '**It reads each price on a schedule,** from once a day to every 2 hours on the pages read here, and opens a case for each listing below MAP.',
        '**It keeps the proof:** the price, the seller, the link, the time and usually a screenshot.',
        '**Most send notices** to the reseller and escalate repeat breaches, often in 3 steps.',
      ],
    },
    {
      kind: 'p',
      text: 'Plans are usually sized in SKUs, stock-keeping units, where each SKU is 1 product or variant with its own price. Most tools read the listing a signed-out visitor sees. The price a reseller shows after a cart step, a login or a sign-up is a separate question, covered below.',
    },

    { kind: 'h2', id: 'map-policy', text: 'What is a MAP policy, and is it legal?' },
    {
      kind: 'p',
      text: 'A MAP policy is a brand’s written rule for the lowest price at which resellers may advertise its products. Resellers stay free to sell at any price. [Gaia Herbs’ internet MAP policy for the US](' +
        GAIA +
        '), last updated 1 November 2025, says so in its own text, and lists what happens to a seller after a first and second breach. Whether a brand may run such a policy depends on where it sells:',
    },
    {
      kind: 'list',
      items: [
        '**United States:** the Federal Trade Commission (FTC) [guide to manufacturer-imposed requirements](' +
          FTC_GUIDE +
          ') says a manufacturer may adopt a resale price policy and stop dealing with retailers that don’t follow it. Since 2007 the Supreme Court has judged vertical price programmes under federal law by the rule of reason, which weighs each programme’s effects on competition. The same guide notes that some state laws and authorities abroad treat minimum price rules as illegal outright.',
        '**A US case on MAP itself:** in 2000 the FTC challenged the MAP programmes of the 5 largest music distributors, which together held about 85% of US sales. The programmes applied even to ads that retailers paid for themselves. [The Federal Register analysis](' +
          FTC_MUSIC +
          ') of 17 May 2000 sets out the proposed consent orders, which required all 5 to drop their MAP programmes for 7 years.',
        '**United Kingdom:** the Competition and Markets Authority (CMA), the UK’s competition regulator, published [guidance on the Vertical Agreements Block Exemption Order](' +
          CMA_VABEO +
          ') on 12 July 2022. MAPs leave a reseller free to sell lower, but they restrict how it tells customers about discounts. So the CMA treats them as resale price maintenance (RPM), a supplier setting a minimum for its resellers’ prices (paragraphs 8.12 and 8.14). A targeted MAP that stops one reseller using a product as a loss leader may be pro-competitive, and the supplier has to show the conditions are met (paragraph 8.21).',
        '**European Union:** the European Commission’s 2022 Guidelines on vertical restraints treat MAPs the same way, in paragraphs 187 and 189. The [Bundeskartellamt](' +
          BKA +
          '), Germany’s competition authority, set this out in a case summary on 31 May 2022, in a case it closed without a final finding.',
      ],
    },
    {
      kind: 'p',
      text: 'The CMA’s guidance also covers the software itself. Price monitoring software lets a brand track resale prices across its network. The CMA says monitoring on its own isn’t RPM, though it is often part of arrangements that are (paragraph 8.16).',
    },
    {
      kind: 'note',
      title: 'General information',
      text: 'The rules here are summarised from the FTC, the Federal Register, the CMA and the Bundeskartellamt as published on the dates linked. They are general information, never legal advice. Ask counsel in each market where you sell before you write, change or enforce a MAP policy.',
    },

    { kind: 'h2', id: 'hidden-prices', text: 'Where do resellers hide prices below MAP?' },
    {
      kind: 'p',
      text: 'A reseller that wants to offer a price below MAP without printing it on the product page has 4 places to put it:',
    },
    {
      kind: 'list',
      items: [
        '**In the cart:** a “See price in cart” or “Add to cart for price” label on the product page, with the lower price shown once the product is in the basket.',
        '**Behind a login:** “Log in for price”, or a [signed-in price](/glossary/signed-in-price) shown only to account holders.',
        '**In an email or text:** a welcome code sent after sign-up, a sale emailed to subscribers first, or an “emailed price” sent in reply to a form.',
        '**In a member price:** a lower [member price](/glossary/member-price) for people in the reseller’s own loyalty scheme. [Member-only pricing](/blog/member-only-pricing) explains why retailers run them.',
      ],
    },
    {
      kind: 'p',
      text: 'Brands’ own policies name these places, and each draws the line in a different spot. [Gaia Herbs’ policy](' +
        GAIA +
        ') counts “See price in cart” as a breach and leaves the price at the final checkout stage outside MAP. It allows a first-time coupon up to 15% below its internet MAP, loyalty schemes that need a login, and coupons emailed to a seller’s own subscribers. [Star’s MAP policy](' +
        STAR +
        ') for Middleby’s foodservice brands bans “Log In for Pricing” and “Email for Pricing”, and counts loyalty and reward point systems as advertising. It also sets a minimum cart price for some products, whatever the login or membership. [Carlson Labs’ policy](' +
        CARLSON +
        ') covers shopping carts, coupons and email, and bans “see price in cart” and “log in for price”.',
    },
    {
      kind: 'p',
      text: 'So whether a hidden price breaks a policy depends on the brand’s own wording. The MAP team needs the price itself to judge it: the cart total, the depth of the code, the member price and the day each appeared. Most MAP tools read the public listing. Price2Spy and Priceva say they read prices after a cart step or a login, and TrackStreet lists in-cart pricing. On 14 November 2026, none of the pages read for the 12 tools described signing up to a reseller’s email list and recording the codes that arrive.',
    },
    {
      kind: 'art',
      caption: 'One reseller’s week: the product page stayed at MAP, while the cart, the login and the inbox showed lower prices. Kestrel is an invented reseller.',
      art: {
        kind: 'log',
        title: 'kestrel.example · 1 week, MAP $199',
        who: 'A new customer at the reseller',
        rows: [
          { time: 'Mon 09:00', text: 'Product page: $199', detail: 'At MAP', tone: 'ok' },
          { time: 'Mon 09:02', text: 'Cart: $179', detail: '“See price in cart”', tone: 'fail' },
          { time: 'Mon 09:10', text: 'Welcome code: $30 off', detail: '$169 at checkout', tone: 'fail' },
          { time: 'Thu 08:00', text: 'Member price: $174', detail: 'Signed in', tone: 'fail' },
          { time: 'Fri 07:30', text: 'Email: early sale, $159', detail: 'Subscribers first', tone: 'fail' },
        ],
        foot: 'A tool reading the product page saw $199 all week.',
      },
    },
    {
      kind: 'p',
      text: 'To check one reseller by hand, use a new email address the reseller has never seen, and screenshot each price with the date:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Open the product page signed out.** Note the price and any “see price in cart” or “log in for price” label.',
        '**Add the product to the cart.** Note the cart total with delivery, and stop before payment.',
        '**Create a free account where the reseller offers one,** and note the price shown once signed in. Stop at any identity check.',
        '**Sign up for emails and texts.** Note the welcome code, the price it leaves at checkout, and every offer over the next 2 weeks.',
      ],
    },
    {
      kind: 'p',
      text: '[The price after the welcome code](/blog/competitor-price-after-welcome-code) sets out the same method for competitors’ prices, from the first sign-up to checkout.',
    },

    { kind: 'h2', id: 'how-compared', text: 'How the MAP tools were compared' },
    {
      kind: 'p',
      text: 'Facts about each tool come from its own pages as they stood on 14 November 2026, and prices are as listed that day, in US dollars. Each tool was compared on 5 points:',
    },
    {
      kind: 'list',
      items: [
        '**What it reads:** marketplaces, Google Shopping, resellers’ own sites, the cart or pages behind a login.',
        '**The proof it keeps:** a screenshot, a timestamp, the seller’s identity or a data snapshot.',
        '**Enforcement:** notices, escalation steps, takedowns or legal action.',
        '**Price as listed,** with any trial.',
        '**Where it stops,** from its own pages.',
      ],
    },
    {
      kind: 'p',
      text: 'Tools sit in groups by the job they do best, in alphabetical order inside each group, with no stars or ranking. Prices change, so check each page before you buy.',
    },

    { kind: 'h2', id: 'enforcement', text: 'MAP monitoring software that sends the notices for you' },
    {
      kind: 'p',
      text: 'These 3 watch marketplaces and resellers’ sites against your MAP table, capture each listing below it with a screenshot, and send notices to the reseller for your team. All 3 sell through a demo or a trial.',
    },
    { kind: 'h3', id: 'brand-alignment', text: 'Brand Alignment' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Brand Alignment](' +
          BRAND_ALIGNMENT +
          ') matches each listing to the exact product, size and pack, so a 2-pack is never compared with a single unit. It scans as often as every 2 hours across 200+ marketplaces, Amazon and Walmart among them, and backs each violation with a timestamped screenshot. A person on its team checks every violation, approved holidays and promotions aren’t flagged, and nothing goes to a seller until your team says yes.',
        '**Price as listed:** not listed. A free 7 day trial covers up to 50 products without payment details, and its FAQ says the dashboard is ready within 24 hours of signing.',
        '**Where it stops:** its page doesn’t describe prices in the cart, behind a login or in a reseller’s emails.',
        '**Best for:** a brand that wants every violation checked by a person before a reseller hears about it.',
      ],
    },
    { kind: 'h3', id: 'growbydata', text: 'GrowByData' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [GrowByData](' +
          GROWBYDATA +
          ')’s Compass flags every listing below MAP on Google Shopping, Amazon and Walmart, tied to a SKU and a seller, and says it covers 500+ channels in all. It scans continuously, keeps a timestamped screenshot and seller ID for each violation, and adjusts its rules for MAP holidays and exempt windows such as Black Friday. Each case runs 3 notices from your template, a written warning, a second notice and a final notice, with a re-check after each deadline.',
        '**Price as listed:** not listed. It offers to track your SKUs for 5 to 7 days and show who is advertising below your MAP.',
        '**Where it stops:** its page doesn’t describe prices in the cart, behind a login or in emails, and a case that runs past the 3 notices goes back to your team.',
        '**Best for:** a brand that sells most through Google Shopping, Amazon and Walmart and wants notices sent on a schedule.',
      ],
    },
    { kind: 'h3', id: 'trackstreet', text: 'TrackStreet' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [TrackStreet](' +
          TRACKSTREET +
          ') enforces MAP and other resale policies, and says it detects violations across 185K+ websites and marketplaces for 1,000+ brands. Its notices carry verified price data, timestamps, listings and merchant details, sent automatically or on demand through escalation steps your team defines. It links seller identities across names, emails, merchant IDs and domains, and its Market Visibility product lists in-cart pricing.',
        '**Price as listed:** not listed, with a demo on request.',
        '**Where it stops:** its home page doesn’t say how often it checks, and doesn’t mention prices behind a login or coupon codes.',
        '**Best for:** a brand with a large reseller network that wants enforcement, seller identification and in-cart prices in one place.',
      ],
    },

    { kind: 'h2', id: 'suites', text: 'Price and market intelligence suites with MAP monitoring' },
    {
      kind: 'p',
      text: 'For these 2, MAP monitoring is one module of a wider price data service, such as competitor price and market data, for brands that track thousands of SKUs. Both are sold through a demo.',
    },
    { kind: 'h3', id: 'intelligence-node', text: 'Intelligence Node' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Intelligence Node](' +
          INODE +
          ') tracks violations down to the zip code, around the clock and worldwide, and says it matches products with 99% accuracy. It sends an email the moment a violation occurs, captures a screenshot as proof, and flags high-risk sellers and counterfeiters. It needs no technical integration.',
        '**Price as listed:** not listed, with a demo on request.',
        '**Where it stops:** its page doesn’t describe prices behind a login, member prices or coupon codes.',
        '**Best for:** a brand with thousands of SKUs whose prices vary by zip code and region.',
      ],
    },
    { kind: 'h3', id: 'wiser', text: 'Wiser' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Wiser](' +
          WISER +
          ') finds each price drop within hours across sites, apps and marketplaces, and says it tracks any website your team lists, beyond marketplaces. Pre-built email templates send strike notices, a dashboard sorts violations by seller, SKU and region, and it flags grey-market listings. Its page reports customers reaching 95%+ compliance on average within 6 months.',
        '**Price as listed:** not listed. Its page asks about your business before a demo.',
        '**Where it stops:** its page doesn’t describe prices in the cart, behind a login or in emails.',
        '**Best for:** a brand that wants MAP monitoring beside wider price and market data from one company.',
      ],
    },

    { kind: 'h2', id: 'published-prices', text: 'MAP tracking software with published prices' },
    {
      kind: 'p',
      text: 'These 3 add MAP to a price tracker and publish their plans, so a brand can size the cost before a call.',
    },
    { kind: 'h3', id: 'pricebeeper', text: 'Pricebeeper' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Pricebeeper](' +
          PRICEBEEPER +
          ') sets MAP per product or from a spreadsheet of up to 5,000 rows. Each MAP can carry a tolerance, dates, regions and a choice of advertised or total price. It reads sellers’ offers from Google Shopping and Amazon seller data, with daily re-checks of sellers’ own pages, and only exact matches or sellers on your list raise alerts. Each violation keeps a data snapshot with a SHA-256 hash, a fingerprint that shows the snapshot hasn’t changed since. A webhook, a message sent to your system, fires with each new violation.',
        '**Price as listed:** MAP monitoring is on its Growth, Pro and Business plans, from $209 a month.',
        '**Where it stops:** its page says the evidence is the recorded data and its hash, with no picture of the page, and doesn’t describe cart or login prices.',
        '**Best for:** a brand that wants published prices, regional MAP and a snapshot it can show a reseller.',
      ],
    },
    { kind: 'h3', id: 'pricefy', text: 'Pricefy' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Pricefy](' +
          PRICEFY +
          ') is a price tracker with AI product matching, competitor discovery and repricing, which says 10,000+ ecommerce businesses use it. MAP and MSRP (the manufacturer’s suggested retail price) monitoring come with its Business and Enterprise plans, with prices updated twice a day.',
        '**Price as listed:** Business is $189 a month, or $142 a month billed yearly, for up to 15,000 SKUs. Enterprise is $499 a month for up to 25,000 SKUs. The free plan covers 50 SKUs without MAP.',
        '**Where it stops:** its pricing page doesn’t mention screenshots, cart prices or prices behind a login.',
        '**Best for:** a brand that wants MAP and competitor prices in one tool at a published price.',
      ],
    },
    { kind: 'h3', id: 'prisync', text: 'Prisync' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Prisync](' +
          PRISYNC +
          ') tracks the prices resellers advertise and shows where each sits against your MAP or recommended price, with below-MAP alerts and stock levels. MAP monitoring comes with its Platinum plans, which add price history, with instant email alerts on the URL and hybrid Platinum plans.',
        '**Price as listed:** Platinum is $399 a month for up to 5,000 products with prices updated 3 times a day, $599 when priced by sales channel and $799 on its hybrid model. API access, a way for your own software to pull the data, adds 20%. Every plan has a 14 day free trial without payment details.',
        '**Where it stops:** MAP needs its top plan, and its MAP page doesn’t describe screenshots, cart prices or prices behind a login.',
        '**Best for:** a brand with up to 5,000 products that already tracks competitors’ prices.',
      ],
    },

    { kind: 'h2', id: 'past-the-page', text: 'MAP price monitoring software that reads past the product page' },
    {
      kind: 'p',
      text: 'These 2 say they read prices that appear only after a step, such as adding the product to the cart or logging in.',
    },
    { kind: 'h3', id: 'price2spy', text: 'Price2Spy' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Price2Spy](' +
          P2S_MAP +
          ') monitors reseller prices on any website, in any language and currency, flags unauthorised sellers and alerts your team to each violation, with screenshots as proof. [Its own page](' +
          P2S_WHY +
          ') says it monitors stores that need an extra action before showing a price, such as adding the product to the cart or logging in. It also reads sites that show prices in images. It was founded in 2011, and its Premium plan checks prices up to 8 times a day.',
        '**Price as listed:** [not listed](' +
          P2S_PRICING +
          '). MAP monitoring comes with Basic and Premium, Premium is priced on request, and screenshots are a separate module at extra cost. It offers a 14 day free trial.',
        '**Where it stops:** with no published prices, a brand can’t size the cost before a conversation, and its pages don’t describe signing up to a reseller’s email list.',
        '**Best for:** a brand whose resellers hide prices in the cart or behind a login.',
      ],
    },
    { kind: 'h3', id: 'priceva', text: 'Priceva' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Priceva](' +
          PRICEVA +
          ') tracks prices, stock and discount changes across 10,000+ online stores and marketplaces, with instant alerts on price changes and MAP violations. Its plan list includes MAP and MSRP monitoring, monitoring of sites protected against bots, cart price monitoring, product page snapshots and monitoring behind a login.',
        '**Price as listed:** free for up to 20 products. Paid plans are shown at $99 and $199 a month, with Enterprise priced on request.',
        '**Where it stops:** its plan table doesn’t make clear which plan carries cart and login monitoring, so confirm with Priceva before buying.',
        '**Best for:** a brand that wants a free start and cart or login prices on a paid plan.',
      ],
    },

    { kind: 'h2', id: 'sellers-legal', text: 'Seller identification and legal enforcement for MAP' },
    {
      kind: 'p',
      text: 'A notice needs a name and an address. These 2 trace who runs an anonymous storefront and enforce on the brand’s behalf, one as a managed service and one as a law firm practice.',
    },
    { kind: 'h3', id: 'mapp-trap', text: 'MAPP Trap' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [MAPP Trap](' +
          MAPPTRAP +
          ') scans Amazon, eBay, Walmart and Google Shopping every day, screenshots every violation and traces anonymous storefronts to real names and addresses. It says it is trusted by hundreds of brands and tracks 800K+ merchants. Its managed programme builds the MAP policy, an authorised seller programme and the notice templates. It files takedown requests with marketplaces, including eBay’s VeRO programme for rights owners, keeps a Do Not Ship list of sellers and reviews results with you each week.',
        '**Price as listed:** not listed. It offers a demo and a free scan of up to 3 products.',
        '**Where it stops:** its page names marketplaces and Google Shopping, and doesn’t describe prices in the cart, behind a login or in emails.',
        '**Best for:** a brand losing sales to marketplace sellers it can’t identify.',
      ],
    },
    { kind: 'h3', id: 'vorys-econtrol', text: 'Vorys eControl' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Vorys eControl](' +
          VORYS +
          ') designs and enforces MAP and pricing policies, from the documents to enforcement, and its investigators find the people behind online seller accounts. Its litigation team brings trademark claims against third-party sellers. [Its firm’s page](' +
          VORYS_FIRM +
          ') describes an AM Law 200 law firm with 600+ brands represented and 50+ eControl attorneys and data analysts.',
        '**Price as listed:** not listed.',
        '**Where it stops:** its pages limit MAP programmes to the United States, and monitoring technology supports its lawyers’ work.',
        '**Best for:** a US brand that wants its MAP policy written and enforced by lawyers.',
      ],
    },

    { kind: 'h2', id: 'signed-up-price', text: 'What price does a signed-up customer see at each reseller?' },
    {
      kind: 'p',
      text: 'The tools above read the price a reseller advertises to everyone. The price a signed-up customer pays sits in the basket, behind the login and in the inbox. It arrives over days: the welcome code in a minute, the member price once signed in, the early sale by email on day 5. [Competitor price tracking tools](/blog/best-competitor-price-tracking-tools) face the same gap when they watch competitors’ prices.',
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, the standard way AI agents call tools, and a company not yet covered is added on request.',
    },
    {
      kind: 'p',
      text: 'For a brand’s MAP team, that means the price a signed-up customer is shown at each reseller you name. It keeps the member price after a login and each code and offer that arrives by email or text, each beside the public price, and, if you choose, the basket total with delivery. It tells your team the morning a reseller’s price drops below yours, behind the login as well as on the page, and sends each change by webhook, a message to your system the day a price moves. Each account joins the way any customer can, says it’s AI when it talks to a person, goes up to an identity check and stops before payment.',
    },

    { kind: 'h2', id: 'your-store-and-resellers', text: 'How do you track hidden prices at your store, the category leaders and every reseller?' },
    {
      kind: 'p',
      text: 'Start with your own online store. Obsession keeps what your store sends a new customer: the welcome code and every offer after it, each dated. Your team sees your own lowest price beside the price you set. Then set your resellers beside the biggest retailers in your category, read the same way: the shelf price, the basket total, the member price and the code a new customer gets.',
    },
    {
      kind: 'p',
      text: 'Agencies that run Amazon, marketplace or pricing work for brands use the same view:',
    },
    {
      kind: 'list',
      items: [
        '**Win the pitch:** open with the lowest price a signed-up customer is offered for the prospect’s best seller at each of its resellers, dated, with the screenshot.',
        '**Keep the client:** each week, show which resellers came back to MAP after a notice, in the basket, behind the login and in the inbox.',
        '**Grow the account:** the codes and member prices a page-reading tool misses become the next brief, from new resellers to watch to the brand’s own direct prices.',
      ],
    },
    {
      kind: 'screen',
      screen: 'memberfeed',
      caption: 'Member prices and coupons read across many retailers, each row with the shelf price, the member price, the coupon and a screenshot.',
    },
    {
      kind: 'p',
      text: 'It keeps going after the first read. Prices, stock and delivery are read every morning in [price watch](/recipes/price-watch), and a fresh sign-up can run every step again each week, as in [leak checks for ecommerce stores](/use-cases/leak-checks-for-ecommerce-stores). It works the same for one company or a list of 3,000, on an index built for millions of companies.',
    },

    { kind: 'h2', id: 'which-to-choose', text: 'Which MAP monitoring software to choose' },
    {
      kind: 'p',
      text: 'Use Obsession when your MAP team needs the price a signed-up customer is shown at each reseller, from the basket to the emailed code, dated with the screenshot or the email. Use a MAP monitoring tool for the public listings, the notices and the escalation.',
    },
    {
      kind: 'list',
      items: [
        '**Prices in the basket, behind the login and in the inbox, dated:** Obsession, beside your MAP tool.',
        '**Notices and escalation run for you:** Brand Alignment, GrowByData or TrackStreet.',
        '**Prices by zip code across a large catalogue:** Intelligence Node or Wiser.',
        '**A published price to start:** Pricefy from $189 a month, Pricebeeper from $209 or Prisync from $399.',
        '**Prices after a cart step or a login, from a tracker:** Price2Spy or Priceva.',
        '**The name behind an anonymous storefront:** MAPP Trap, or Vorys eControl for lawyers in the US.',
        '**A handful of resellers checked once:** by hand, with a new account and inbox at each.',
      ],
    },
    {
      kind: 'cta',
      text: 'Member prices and coupons beside public ones, at every retailer you track, each dated with its screenshot.',
      to: '/use-cases/member-prices-for-price-intelligence',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'compared', text: 'The 12 MAP tools and Obsession, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 14 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'MAP monitoring software by job, from each provider’s own pages, as listed on 14 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no staff time', 'Free', 'Below-MAP listings go unseen until someone looks', 'Brands with no MAP policy'],
        ['By hand: a new account and inbox', 'What 1 signed-up customer was shown, with the date', 'Free, plus staff hours', 'A few resellers, one moment', 'A handful of resellers, checked once'],
        ['Brand Alignment', 'Exact matches, every violation checked by a person', 'Not listed\n7 day trial, 50 products', 'Cart and login prices not described', 'Notices only after your yes'],
        ['GrowByData', 'Google Shopping, Amazon and Walmart, 3 notices', 'Not listed\n5 to 7 day check', 'Cart and login prices not described', 'Notices sent on a schedule'],
        ['TrackStreet', '185K+ sites, seller identities, in-cart pricing', 'Not listed\nDemo', 'Check frequency not stated', 'Large reseller networks'],
        ['Intelligence Node', 'Zip code tracking, 99% match accuracy', 'Not listed\nDemo', 'Login and coupon prices not described', 'Prices that vary by region'],
        ['Wiser', 'Any listed site, strike notices, trends', 'Not listed\nDemo', 'Cart and login prices not described', 'MAP beside wider price data'],
        ['Pricebeeper', 'Regional MAP, hashed data snapshots', 'From $209 a month', 'Data record with no screenshot', 'Published prices, regional MAP'],
        ['Pricefy', 'MAP and competitor prices, twice a day', '$189 a month\n$142 billed yearly', 'Screenshots not described', 'MAP at a published price'],
        ['Prisync', 'Resellers against MAP, stock, alerts', '$399 to $799 a month', 'MAP on the top plan only', 'Up to 5,000 products'],
        ['Price2Spy', 'Cart and login steps, up to 8 checks a day', 'Not listed\n14 day trial', 'Screenshots cost extra', 'Prices hidden in the cart'],
        ['Priceva', 'Cart and login monitoring on paid plans', 'Free: 20 products\n$99 or $199 a month', 'Plan for each feature unclear', 'A free start'],
        ['MAPP Trap', 'Daily scans, sellers traced to real names', 'Not listed\nFree 3 product scan', 'Marketplaces and Google Shopping', 'Anonymous marketplace sellers'],
        ['Vorys eControl', 'Lawyers write and enforce the policy', 'Not listed', 'MAP work in the US', 'US brands that want counsel'],
        [
          'Obsession (ours): [Price watch](/recipes/price-watch), [Member prices](/use-cases/member-prices-for-price-intelligence)',
          'The price a signed-up customer is shown after the basket, the login and the email, dated with the screenshot or the email',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Keeps the price, the screenshot and the email, with notices left to your MAP tool',
          'Codes and member prices at every reseller, every morning',
        ],
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about MAP monitoring software' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What does minimum advertised price monitoring software do?',
          a: 'Minimum advertised price monitoring software checks the prices resellers advertise for your products against your MAP. It matches each listing to the right product and seller, and records each one below MAP with the time and usually a screenshot. Most tools also send notices to the reseller and escalate repeat breaches. Obsession adds the price a signed-up customer is shown after the basket, the login and the email.',
        },
        {
          q: 'Is MAP tracking software the same as price tracking software?',
          a: 'MAP tracking software is price tracking pointed at your own resellers. It compares each advertised price with a floor you set and keeps proof for enforcement, such as a screenshot and the seller’s name. Competitor price tracking software compares your prices with your competitors’ prices, so you can set your own. Several tools do both, among them Pricefy, Prisync, Price2Spy and Priceva.',
          link: { label: 'Competitor price tracking tools', to: '/blog/best-competitor-price-tracking-tools' },
        },
        {
          q: 'What is the best MAP price monitoring software?',
          a: 'The best MAP price monitoring software depends on the job. On 14 November 2026, Brand Alignment, GrowByData and TrackStreet monitored and sent notices for brands. Pricefy, Pricebeeper and Prisync listed MAP from $189, $209 and $399 a month, and Price2Spy and Priceva said they read prices after a cart step or a login. Obsession keeps the price a signed-up customer is shown at each reseller, dated.',
        },
        {
          q: 'Is there a free MAP monitoring tool?',
          a: 'A MAP monitoring tool usually starts with a trial. On 14 November 2026, Price2Spy and Prisync offered 14 days free and Brand Alignment 7 days for up to 50 products. GrowByData offered a 5 to 7 day check of your products, and MAPP Trap a scan of up to 3 products. Pricefy’s free plan covers 50 SKUs without MAP, which starts on its $189 Business plan.',
        },
        {
          q: 'Is a MAP policy legal?',
          a: 'It depends on where you sell. In the US, the FTC’s guidance says a manufacturer may announce a resale price policy and stop dealing with retailers that don’t follow it. Federal law has judged such programmes by the rule of reason since 2007, though some state laws treat minimum price rules as illegal. In the UK, the CMA’s July 2022 guidance treats MAPs as an indirect form of resale price maintenance, and the EU’s 2022 guidelines take the same view. This is general information, never legal advice.',
        },
        {
          q: 'Do prices in the cart count as advertised prices under MAP?',
          a: 'It depends on the brand’s policy. Gaia Herbs’ policy leaves the price at the final checkout stage outside MAP but counts “See price in cart” as a breach. Star’s policy for Middleby’s foodservice brands sets a minimum cart price for some products, whatever the login or membership. Read your own policy’s definition of advertising, and ask counsel.',
        },
        {
          q: 'Can MAP monitoring software see member prices and emailed codes?',
          a: 'Most MAP monitoring software reads the public listing. Price2Spy and Priceva say they read prices after a cart step or a login, and TrackStreet lists in-cart pricing. On 14 November 2026, none of the pages read for the 12 tools described signing up to a reseller’s email list and recording the codes that arrive. Obsession keeps the member price and every emailed code at each reseller, dated.',
          link: { label: 'Member prices beside public ones', to: '/use-cases/member-prices-for-price-intelligence' },
        },
      ],
    },
  ],

  sources: [
    { title: 'Gaia Herbs, Inc. internet minimum advertised price policy for the United States', publisher: 'Gaia Herbs', url: GAIA, date: '2025-11-01' },
    { title: 'Manufacturer-imposed requirements', publisher: 'Federal Trade Commission', url: FTC_GUIDE },
    { title: 'BMG Music; Capitol Records; Sony Music Entertainment; Time Warner; and Universal Music & Video Distribution: analysis to aid public comment', publisher: 'Federal Register (Federal Trade Commission)', url: FTC_MUSIC, date: '2000-05-17' },
    { title: 'Vertical agreements block exemption order guidance (CMA166)', publisher: 'Competition and Markets Authority (GOV.UK)', url: CMA_VABEO, date: '2022-07-12' },
    { title: 'Case summary: imposing minimum advertised prices in online sales (B7-35/22)', publisher: 'Bundeskartellamt', url: BKA, date: '2022-05-31' },
    { title: 'Minimum advertised price and minimum resale internet cart policy', publisher: 'Star (Middleby foodservice brands)', url: STAR, date: '2021-01' },
    { title: 'IMAP and anti-diversion policy: US', publisher: 'Carlson Labs', url: CARLSON },
    { title: 'MAP monitoring software', publisher: 'Brand Alignment', url: BRAND_ALIGNMENT },
    { title: 'MAP monitoring software that finds violators and enforces MAP', publisher: 'GrowByData', url: GROWBYDATA },
    { title: 'AI-powered MAP, UPP and resale policy platform', publisher: 'TrackStreet', url: TRACKSTREET },
    { title: 'MAP monitoring', publisher: 'Intelligence Node', url: INODE },
    { title: 'MAP violation software for brands', publisher: 'Wiser Solutions', url: WISER },
    { title: 'MAP monitoring software for brands', publisher: 'Pricebeeper', url: PRICEBEEPER },
    { title: 'Pricing', publisher: 'Pricefy', url: PRICEFY },
    { title: 'MAP monitoring software for brands and manufacturers', publisher: 'Prisync', url: PRISYNC },
    { title: 'MAP monitoring software', publisher: 'Price2Spy', url: P2S_MAP },
    { title: 'Why Price2Spy?', publisher: 'Price2Spy', url: P2S_WHY },
    { title: 'Pricing', publisher: 'Price2Spy', url: P2S_PRICING },
    { title: 'Competitor price tracking and monitoring', publisher: 'Priceva', url: PRICEVA },
    { title: 'Online brand protection', publisher: 'MAPP Trap', url: MAPPTRAP },
    { title: 'Capabilities', publisher: 'Vorys eControl', url: VORYS },
    { title: 'Vorys eControl', publisher: 'Vorys, Sater, Seymour and Pease', url: VORYS_FIRM },
  ],

  related: [
    'best-competitor-price-tracking-tools',
    'member-only-pricing',
    'competitor-price-after-welcome-code',
    'recipe:price-watch',
    '/use-cases/member-prices-for-price-intelligence',
    '/glossary/member-price',
  ],
}

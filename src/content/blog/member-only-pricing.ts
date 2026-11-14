import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 14 (_research/seo/revamp-11nov/WAVE2_BRIEF.md and WAVE2_SLATE.md, 11 Nov 2026): member-only
   pricing for pricing and revenue teams at retailers, grocers, travel and subscription companies (James's S5). Primary
   "member only pricing"; secondaries from Google autocomplete (US and UK, 11 Nov, autocomplete_11nov.json and
   autocomplete_11nov_gaps.json): loyalty pricing, membership pricing strategy, member pricing, price intelligence
   software, hotel member rates, member only prices, member only price costco. Serves
   /use-cases/member-prices-for-price-intelligence and recipe:price-watch; /blog/rate-parity-testing (batch 2) will own
   rate parity, so hotels stay at the level of member rates here.
   Every source was read on its own page on 11 Nov 2026: the CMA's case page and executive summary (27 Nov 2024), the
   Price Marking Order guidance (22 Sep 2025; amendments in force 6 Apr 2026), Tesco's help page on Your Clubcard Prices
   (updated 7 Jul 2025) and its preliminary results for the year to 28 Feb 2026 (16 Apr 2026), Sainsbury's help page on
   Your Nectar Prices, OTA News's CUG glossary entry, Adobe Commerce's customer groups documentation (27 Oct 2026), Bold
   Memberships' Hidden Pricing article, Costco's 10-K for the year to 30 Aug 2026 (filed 7 Oct 2026) and its Member-Only
   Warehouse Savings page (valid 19 Oct to 15 Nov 2026; the product tile labels "Members Only" and "Sign In For Price"
   are in that page's own code), Marriott's 10-K for 2025 (filed 10 Feb 2026) and member rate terms, Hilton's 10-K for
   2025 (filed 11 Feb 2026), the Commission's DMA note on Booking (14 Nov 2024), Lighthouse's Rate Insight page,
   Prisync's pricing page and Price2Spy's ecommerce and pricing pages. Undated pages carry no date in the sources.
   The Costco table's middle line (5,778) is our subtraction from the 10-K's own lines, named as such. Every company in
   the two illustrations is invented (.example). Obsession's lines follow the use case page and Price watch recipe as
   live on 11 Nov; no index size, no customer, no free offer. British English, numerals, no dashes. */

const CMA_CASE = 'https://www.gov.uk/cma-cases/loyalty-pricing-in-the-groceries-sector'
const TESCO_FY26 = 'https://www.tescoplc.com/media/ch1fbgss/tesco-plc-preliminary-results-statement-fy26.pdf'
const TESCO_YCP =
  'https://www.tesco.com/help/pages/clubcard-faqs/clubcard-prices/personalising-your-clubcard-prices-for-you'
const SAINSBURYS = 'https://help.sainsburys.co.uk/help/offers-promotions/your-nectar-prices'
const OTA = 'https://www.ota-news.com/glossary/cug-closed-user-group'
const COSTCO_10K = 'https://www.sec.gov/Archives/edgar/data/909832/000090983226000093/cost-20260830.htm'
const COSTCO_SAVINGS = 'https://www.costco.com/warehouse-savings.html'
const ADOBE = 'https://experienceleague.adobe.com/en/docs/commerce-admin/customers/customer-groups'
const BOLD = 'https://support.boldcommerce.com/en/articles/16498839-hidden-pricing'
const CMA_EXEC =
  'https://www.gov.uk/government/publications/review-of-loyalty-pricing-in-the-groceries-sector/executive-summary'
const MAR_10K = 'https://www.sec.gov/Archives/edgar/data/1048286/000104828626000007/mar-20251231.htm'
const MAR_RATES = 'https://www.marriott.com/online-hotel-booking.mi'
const HLT_10K = 'https://www.sec.gov/Archives/edgar/data/1585689/000158568926000007/hlt-20251231.htm'
const EU_DMA = 'https://digital-markets-act.ec.europa.eu/booking-must-comply-all-relevant-obligations-under-digital-markets-act-2024-11-14_en'
const PMO =
  'https://www.gov.uk/government/publications/price-marking-order-2004-government-guidance/price-marking-order-2004-government-guidance'
const LIGHTHOUSE = 'https://www.mylighthouse.com/market-intelligence/rate-insight'
const PRISYNC = 'https://prisync.com/pricing/'
const P2S_ECOM = 'https://www.price2spy.com/e-commerce-price-monitoring.html'
const P2S_PRICING = 'https://www.price2spy.com/pricing.html'

export const post: BlogPost = {
  slug: 'member-only-pricing',
  title: 'Member-only pricing: how it works, and how to track competitors’ member prices',
  dek: 'Why grocers, warehouse clubs and hotels give members a different price, and what the UK competition regulator found when it checked. Then why price trackers miss the prices shown after sign-in, and a 6 step method to track competitors’ member prices by store and customer profile.',
  metaTitle: 'Member-only pricing: track retailers’ member prices by store',
  description:
    'How retailers, clubs and hotels price members, what the CMA found on loyalty pricing, and how to track competitors’ member prices beside public ones.',
  answer:
    'Member-only pricing is a lower price a company shows only to customers who join, sign in or pay a fee: a supermarket’s loyalty price, a club’s member savings, a hotel’s member rate. Price trackers read the page any visitor sees, so they miss member prices shown after sign-in, in an app or by email, which can differ for every customer. Obsession keeps each competitor’s member price beside its public one, per store and profile, dated with its screenshot, by API, MCP (the standard way AI agents call tools) or a table.',
  primaryKeyword: 'member only pricing',
  keywords: [
    'loyalty pricing',
    'membership pricing strategy',
    'member pricing',
    'price intelligence software',
    'hotel member rates',
    'member only prices',
    'member only price costco',
  ],
  category: 'Watch other companies',
  order: 7,
  published: '2026-11-11',
  updated: '2026-11-14',
  readingMinutes: 15,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'One basket, signed out and signed in',
      period: 'The same 250 g ground coffee at 4 grocers, both prices read minutes apart from one Leeds store each',
      cols: ['Signed out', 'Signed in', 'Where the member price shows'],
      rows: [
        { name: 'hartwell.example', cells: ['£3.20', '£2.70', 'Shelf and product page'], tone: 'info' },
        { name: 'marlowfoods.example', cells: ['£3.40', '£2.85', 'After sign-in'], tone: 'ok' },
        { name: 'brindle.example', cells: ['£3.10', '£2.50', 'App, this member, this week'], tone: 'ok' },
        { name: 'oakmere.example', cells: ['£3.30', '£3.30', 'No member price'], tone: 'info' },
      ],
      notes: [
        'A tracker with no account records the 4 signed-out prices and the member price printed on hartwell.example’s page. The other 2 member prices appear to a signed-in member alone.',
        'Example: every grocer and price here is invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Member-only pricing is a lower price a company gives customers who join, sign in or pay a fee: a supermarket’s loyalty price, a warehouse club’s member savings, a hotel’s member rate. The UK’s Competition and Markets Authority (CMA) [opened a review on 30 January 2024](' +
        CMA_CASE +
        ') because some supermarkets were making cheaper prices available to loyalty card members alone. For pricing and revenue teams at retailers, grocers, travel and subscription companies, a competitor’s price is now often 2 prices. One is public; the other may sit behind a sign-in, in an app or in an email.',
    },

    { kind: 'h2', id: 'four-forms', text: 'The 4 forms of member pricing' },
    {
      kind: 'p',
      text: 'Member prices differ in who sees the price and where it shows. That decides whether a price tracker, which reads the page any visitor sees, can record it.',
    },
    {
      kind: 'table',
      caption: 'The 4 forms of member pricing, with examples from each company’s own pages, read 11 November 2026',
      cols: ['Form', 'Example', 'Who sees the price', 'Where it shows'],
      rows: [
        ['Displayed loyalty price', 'Tesco Clubcard Prices', 'Every shopper; members pay it', 'Shelf label, beside the regular price'],
        ['Personalised member price', 'Your Clubcard Prices\nYour Nectar Prices', 'Each member, their own set', 'App or signed-in account'],
        ['Closed user group rate', 'A hotel’s member rate\nBooking.com Genius', 'Logged-in members and app users', 'After sign-in or in the app'],
        ['Paid membership price', 'Costco Member-Only Savings', 'Anyone for most items; members buy', 'Savings page; some items after sign-in'],
      ],
    },
    {
      kind: 'p',
      text: '**A displayed loyalty price** sits on the shelf beside the regular one, and the member pays it by scanning a card or an app. [Tesco’s results for the year to 28 February 2026](' +
        TESCO_FY26 +
        ') count over 10,000 Clubcard Prices.',
    },
    {
      kind: 'p',
      text: '**A personalised member price** changes from one customer to the next. [Tesco’s help page](' +
        TESCO_YCP +
        ') says the products in Your Clubcard Prices are chosen each week from the shopper’s own habits and shown in the Tesco app. Its results report that it launched them to 1.5m customers in March 2026. [Sainsbury’s help page](' +
        SAINSBURYS +
        ') says Your Nectar Prices differ by customer each week, refresh every Friday, last 7 days and never appear on shelf edge labels. A new member gets welcome offers first, so a new account and a long-standing one see different prices in the same store.',
    },
    {
      kind: 'p',
      text: '**A closed user group rate** is a travel rate shown to a restricted audience, such as logged-in members, app users or email subscribers. [OTA News’s glossary](' +
        OTA +
        ') gives the mechanics. A hotel sells a night at €150 on every channel. Guests who create a free account on its own website see €135, a 10% discount “invisible to non-logged-in visitors and to rate shoppers”. Online travel agents run the same play with Booking.com Genius and Expedia One Key member pricing.',
    },
    {
      kind: 'p',
      text: '**A paid membership price** is bought with a fee. [Costco’s annual report for the year to 30 August 2026](' +
        COSTCO_10K +
        ') sets its US membership at $65 a year. [Its savings page](' +
        COSTCO_SAVINGS +
        ') is titled Member-Only Warehouse Savings and runs from 19 October to 15 November 2026, with pricing that may vary in some regions and online.',
    },

    { kind: 'h3', id: 'how-sites-decide', text: 'How a website decides which price to show' },
    {
      kind: 'p',
      text: 'Behind all 4 forms sits the same mechanism. A browser sends a session cookie, a small token that says which account is signed in, with every request. The site looks up the customer group that account belongs to and renders that group’s price. A visitor with no session falls into a default group. [Adobe Commerce’s documentation](' +
        ADOBE +
        ') lists its default customer groups as General, Not Logged In and Wholesale, and says customer groups decide which discounts apply. On Shopify, [Bold Memberships’ Hidden Pricing](' +
        BOLD +
        ') hides the price on chosen products from everyone except signed-in members, with the membership checked on the server.',
    },
    {
      kind: 'p',
      text: 'A price scraper sends its requests with no member session, so the server answers it as Not Logged In. Whatever the site keeps for members never reaches it.',
    },

    { kind: 'h2', id: 'why', text: 'Why retailers, clubs and hotels price members differently' },
    {
      kind: 'p',
      text: 'Each model trades a lower price for something the company values more. The trade sets how deep the member price runs, how often it changes and who sees it.',
    },
    {
      kind: 'table',
      caption: 'What each model gives members and what it gets back, from the companies’ own reports',
      cols: ['Model', 'What the member gives', 'What the company gets', 'How often the price moves'],
      rows: [
        ['Grocer loyalty scheme', 'Their identity at every shop', 'Purchase data, personalised offers, advertising income', 'Weekly for personalised sets'],
        ['Warehouse club', 'An annual fee', 'About half of operating income at Costco', 'Current savings: 19 Oct to 15 Nov 2026'],
        ['Hotel member rate', 'A sign-in and a direct booking', 'Direct bookings, guest data and consent', 'With the public rate it is set against'],
      ],
    },

    { kind: 'h3', id: 'grocers', text: 'Grocers: lower prices for purchase data' },
    {
      kind: 'p',
      text: 'A loyalty price buys the customer’s identity at every shop. The [CMA’s findings](' +
        CMA_EXEC +
        '), published on 27 November 2024, show how far that reaches. Almost every UK shopper, 97%, belongs to at least 1 supermarket loyalty scheme, and the average shopper belongs to 3. Of the regular grocery shoppers surveyed, 77% were signed up to Tesco’s Clubcard and 57% to Sainsbury’s Nectar. A majority, 61%, were comfortable with supermarkets using loyalty data to send them personalised offers.',
    },
    {
      kind: 'p',
      text: 'The data then earns money of its own. Tesco’s results for the year to 28 February 2026 describe Clubcard as what holds its businesses together. They report personalised digital coupons and rewards offered to over 9m customers and over 400 data scientists at its dunnhumby unit. Over 800 brands buy advertising through Tesco Media, which draws on the same customer data.',
    },

    { kind: 'h3', id: 'clubs', text: 'Warehouse clubs: the fee carries the profit' },
    {
      kind: 'p',
      text: 'Costco’s annual report describes its model as low prices on a limited range, sold at high volume with rapid stock turnover. The fee is what makes those prices pay. In the year to 30 August 2026, its 84.1 million paid members paid $5,907 million in membership fees. That was just over half of its $11,685 million operating income. Renewal rates were 92.3% in the US and Canada and 89.8% worldwide. Executive members, who pay a higher fee for a reward of generally 2% on qualified purchases, made 75.2% of worldwide sales.',
    },
    {
      kind: 'table',
      caption: 'Where Costco’s operating income came from, year to 30 August 2026, from its annual report. The middle line is the subtraction of the 2 cost lines from net sales',
      cols: ['Line', '$ million'],
      rows: [
        ['Net sales', '297,247'],
        ['Less merchandise costs', '264,279'],
        ['Less selling, general and administrative costs', '27,190'],
        ['Left from selling goods', '5,778'],
        ['Plus membership fees', '5,907'],
        ['Operating income', '11,685'],
      ],
    },
    {
      kind: 'p',
      text: 'For a retailer pricing against a club, the shelf price is part of the offer. The member pays the fee once a year and the low price on every visit, so the comparison that matters is the member’s basket over a year, fee included.',
    },

    { kind: 'h3', id: 'hotels', text: 'Hotels: member rates for direct bookings' },
    {
      kind: 'stat',
      value: '68%',
      label: 'of Marriott’s global room nights in 2025 were booked by its loyalty members, and about 75% in the US',
      source: 'Marriott International, annual report for 2025',
      href: MAR_10K,
    },
    {
      kind: 'p',
      text: 'Hotels use member rates to win bookings on their own websites and apps, away from online travel agents. [Marriott’s annual report for 2025](' +
        MAR_10K +
        ') names Expedia, Booking.com and others as competitors to its direct channels. [Its member rate terms](' +
        MAR_RATES +
        ') give members at least 2% off on weekdays and up to 5% on weekends, applied to the hotel’s lowest public rate and booked through Marriott’s own channels. [Hilton’s annual report for 2025](' +
        HLT_10K +
        ') counts 243 million Hilton Honors members at the end of the year, up 15%. It says the share of a member’s travel spend Hilton captures rises as the member moves up the tiers.',
    },
    {
      kind: 'p',
      text: 'The rate sits behind a login for a contractual reason too. OTA News explains that closed user group rates typically fall outside the rate parity clauses in hotels’ contracts with online travel agents, because general shoppers and metasearch never see them. In the EU, Booking.com has had to let hotels offer better prices on their own websites since 14 November 2024, under the [Digital Markets Act](' +
        EU_DMA +
        '). Marriott’s own Best Rate Guarantee counts publicly available rates elsewhere, so a rate behind another site’s login doesn’t qualify.',
    },

    { kind: 'h2', id: 'regulators', text: 'What regulators have said about loyalty pricing' },
    {
      kind: 'p',
      text: 'The CMA analysed a year of daily prices for about 50,000 grocery products on a loyalty promotion in August or November 2023, at Tesco, Sainsbury’s, Waitrose, Co-op and Morrisons. For 92% of the products, the non-member price during the promotion was the same as or lower than the price every shopper paid in the 28 days before. Only 0.6% of promotions showed a pattern that could suggest an inflated usual price. The average member saving ran from 17% to 25% across the 5 supermarkets.',
    },
    {
      kind: 'p',
      text: 'Loyalty prices were not always the cheapest. In a sample of 429 branded products, 61 were cheaper at another supermarket, so the CMA told shoppers to keep comparing. A loyalty promotion lasted 17 to 26 days on average, and member savings were similar to the was and now offers open to every shopper. The CMA asked supermarkets to make sure promotions that alternate between the two comply with consumer law, and said some could do more for shoppers under 18 or without a smartphone.',
    },
    {
      kind: 'p',
      text: 'From 6 April 2026, the amended Price Marking Order covers a UK trader selling a product at more than 1 price, such as a normal and a loyalty price. The trader must show each selling price and each unit price together, with the condition close to the product, such as “with loyalty card”. [The government’s guidance](' +
        PMO +
        '), published on 22 September 2025, advises that neither set of prices be given more prominence than the other.',
    },
    {
      kind: 'note',
      title: 'General information',
      text: 'The rules and findings here are summarised from the CMA, the UK government and the European Commission as published on the dates linked. They are general information, never legal advice. Read each competitor’s terms, and take advice where your company trades, before tracking prices behind a competitor’s login.',
    },

    { kind: 'h2', id: 'why-trackers-miss', text: 'Why price trackers and rate shoppers miss member prices' },
    {
      kind: 'p',
      text: 'A price tracker fetches each product page on a schedule and records the price it finds. A rate shopper does the same for hotels. It searches each online travel agent and brand website for a date and room, the way a guest with no account would, and records the rate returned. Neither sends a member session. Both read what the public page prints, displayed loyalty prices included, and miss 5 kinds of price:',
    },
    {
      kind: 'list',
      items: [
        '**Prices shown after sign-in,** such as a hotel’s closed user group rate.',
        '**Personalised prices,** which differ for every member and change each week, such as Your Nectar Prices.',
        '**App prices,** such as the Your Clubcard Prices a member checks in the Tesco app.',
        '**Offers by email or text** after a customer joins, such as welcome offers for new members.',
        '**Prices by store or postcode,** which Costco says may vary in some regions and online.',
      ],
    },
    {
      kind: 'p',
      text: 'Some tools go further, and their own pages say so. [Price2Spy’s ecommerce page](' +
        P2S_ECOM +
        ') says it can monitor prices behind logins, and [its pricing page](' +
        P2S_PRICING +
        ') lists no prices, with Premium priced on request. [Lighthouse’s Rate Insight](' +
        LIGHTHOUSE +
        ') runs live rate shops across online travel agents, brand websites and metasearch for 80,000+ hoteliers, by its own count. Its page doesn’t describe rates shown after a guest signs in. [Prisync’s pricing page](' +
        PRISYNC +
        ') lists plans from $99 a month, with up to 3 price updates a day, and doesn’t mention member or login prices. Every [competitor price tracking tool](/blog/best-competitor-price-tracking-tools) is compared by job in its own guide.',
    },

    { kind: 'h2', id: 'how-to-track', text: 'How to track competitors’ member prices' },
    {
      kind: 'p',
      text: 'Tracking member prices means reading the signed-in price beside the public one, by date, store and customer profile, with a screenshot of each. The method is the same for 3 competitors by hand or for 120 at scale, and the columns to keep are set out in a [competitor price comparison template](/blog/competitor-price-comparison-template).',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Choose the basket and the profile.** Name the products and the store or postcode. Then pick the customer profile: a new member, a long-standing member, an app user or a paying member. A pass: one written profile per competitor, kept the same every week.',
        '**Join each competitor the way any customer can.** Read its terms first, use a real inbox and phone number, and stop where a scheme asks for an identity document or an in-store card. A pass: an account per competitor and profile, with the date it opened.',
        '**Read every product twice, minutes apart.** Read the page signed out, then signed in, from the same store, with a screenshot of each. A pass: a member price counts when both readings agree on the product and the store.',
        '**Write down the conditions.** Valid dates, minimum spend, card or app, and whether the price is personalised. A pass: every member price has its conditions beside it.',
        '**Keep the account open.** Welcome offers, weekly personalised prices, emails and texts arrive over days and weeks; keep each as it lands. A pass: every message kept with the time it arrived.',
        '**Repeat on a schedule and keep the history.** Weekly for most baskets, daily around a sale, and again after a competitor’s promotion ends. A pass: the gap between member and public price, per product, week by week.',
      ],
    },
    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'marlowfoods.example, first 3 weeks',
        who: 'New member account · Leeds store',
        rows: [
          { time: 'Day 0, 09:03', text: 'Joined with email and texts ticked', tone: 'info' },
          { time: 'Day 0, 09:04', text: 'Welcome email: £5 off a £40 shop', detail: 'Valid for 14 days', tone: 'ok' },
          { time: 'Day 0, 09:06', text: '40 products read signed out, then in', detail: 'Member prices on 11, about 15% off', tone: 'ok' },
          { time: 'Day 2, 08:00', text: 'App: 6 personal prices for this week', detail: 'Coffee at £2.40 for this member', tone: 'ok' },
          { time: 'Day 9, 11:15', text: 'Text: 20% off tea for members, to Sunday', tone: 'ok' },
          { time: 'Day 21, 10:30', text: 'Email: £10 off a £50 shop, until Friday', detail: 'Sent after 3 weeks with no order', tone: 'info' },
        ],
        foot: 'Each reading kept with its screenshot, each message as it arrived.',
      },
      caption: 'A competitor account kept open for 3 weeks: the member prices on day 0, then the personal prices and offers that follow. marlowfoods.example and every price are invented.',
    },

    { kind: 'h3', id: 'by-hand', text: 'The workload by hand' },
    {
      kind: 'p',
      text: 'The sum is products × 2 readings × competitors × the minutes per reading, every week. With 40 products and about 30 seconds a reading with its screenshot, as example inputs:',
    },
    {
      kind: 'list',
      items: [
        '**A price intelligence firm tracking 120 retailers for a client:** 9,600 readings, about 80 hours a week.',
        '**A national grocer tracking 10 competitors:** 800 readings, about 7 hours a week.',
        '**A regional chain tracking 3 competitors:** 240 readings, about 2 hours a week.',
      ],
    },
    {
      kind: 'p',
      text: 'None of that counts the emails, texts and app offers, which arrive whenever each competitor sends them, or the daily reads around a sale, which multiply the hours by 7.',
    },

    { kind: 'h2', id: 'obsession', text: 'Where Obsession fits' },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request. For a pricing team, that is each competitor’s member price beside its public one, per store and customer profile. The welcome coupon and every later offer are kept as they arrive, for as long as the team follows the competitor. Funds read the same offers as [consumer promotions data](/use-cases/consumer-promotions-data-for-funds), each kept with the time it was seen. Search and scraping APIs such as Exa, Tavily and Firecrawl give AI agents the public web, what any visitor can read. Obsession gives them what a company shows its customers behind the login, and the two work together ([Exa alternatives, sorted by job](/blog/exa-alternatives)). Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting.',
    },
    {
      kind: 'p',
      text: '[The web behind the login](/blog/the-web-behind-the-login) explains what sits behind each sign-up, login and checkout, and the [sample data](/sample-output) shows a real store’s record in every format it comes in. [Compare Obsession](/compare) with search engines, email archives and panels.',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to track member prices, side by side', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to track competitors’ member prices, from each provider’s own pages on 11 November 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'A member offer shows up as lost baskets', 'Weeks with no promotion in your category'],
        ['By hand: an account per competitor and a weekly sheet', 'Any competitor, profile and app', 'Free, plus staff hours', 'About 80 hours a week at 120 retailers', '1 to 3 competitors before a promotion'],
        ['Prisync', 'Public prices, up to 3 updates a day', '$99 to $799 a month\n14 days free', 'No mention of member or login prices', 'Public prices on 100 to 5,000 products'],
        ['Price2Spy', 'Says it monitors prices behind logins', 'Not listed\nPremium on request', 'No published prices', 'Retailer prices behind a login'],
        ['Lighthouse Rate Insight', 'Live rate shops of travel agents, brand sites and metasearch', 'Not listed\nFree trial', 'Rates after sign-in not described', 'Hotels’ public rates'],
        [
          'Obsession (ours): [Price watch](/recipes/price-watch), [Member prices](/use-cases/member-prices-for-price-intelligence)',
          'Member and public prices side by side, per store and profile, with every later offer',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Product matching stays with your team',
          'Competitors’ member prices, kept as proof over time',
        ],
      ],
    },

    { kind: 'h2', id: 'when-enough', text: 'When a public tracker or a sheet is enough' },
    {
      kind: 'p',
      text: 'Where competitors print member prices on the public page, as displayed loyalty prices are, a public price tracker reads them, and since 6 April 2026 UK traders must show the 2 prices together. Where a team watches 1 to 3 competitors before a single promotion, an account at each and a sheet are enough. Member price tracking earns its cost when the prices sit behind a sign-in, in an app or in an email, across many competitors, week after week.',
    },

    { kind: 'h2', id: 'which-to-choose', text: 'Which way to track member prices' },
    {
      kind: 'p',
      text: 'Use Obsession when your team needs competitors’ member prices that sit behind a sign-in, in an app or in an email, per store and customer profile. Each one is kept with a dated screenshot for as long as you follow the competitor.',
    },
    {
      kind: 'list',
      items: [
        '**Member prices behind a sign-in, with every offer that follows:** Obsession’s [Price watch](/recipes/price-watch) reads public and member prices each morning, plus the codes sent to subscribers, and each gap arrives with its screenshot.',
        '**Public and displayed loyalty prices across thousands of products:** a public price tracker such as Prisync. [The best competitor price tracking tools](/blog/best-competitor-price-tracking-tools) compares 14 of them by job.',
        '**A hotel’s public rates across travel agents and brand sites:** a rate shopper such as Lighthouse.',
        '**Prices behind a login at a set of retailers, collected by a vendor:** Price2Spy, after reading each competitor’s terms.',
        '**The price a new customer pays at an online store after its welcome code:** the steps in [a competitor’s real price is the price after the welcome code](/blog/competitor-price-after-welcome-code).',
        '**Rates, card offers and onboarding at banks:** the same method, set out in [bank competitor analysis](/blog/bank-competitor-analysis).',
        '**1 to 3 competitors before a promotion:** by hand, with the 6 steps in the method.',
      ],
    },
    {
      kind: 'cta',
      text: 'Member prices beside public ones, at every retailer you track: the price a signed-in member sees, the welcome coupon and the offers that follow by email and text, per store, each dated with its screenshot.',
      to: '/use-cases/member-prices-for-price-intelligence',
      label: 'Request early access',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about member-only pricing' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is member-only pricing?',
          a: 'Member-only pricing is a lower price a company gives customers who join, sign in or pay a fee. It comes in 4 forms. A displayed loyalty price sits on the shelf, such as Tesco’s Clubcard Prices. A personalised price differs for each member, such as Your Nectar Prices. A closed user group rate shows after sign-in, such as a hotel’s member rate. A paid membership price comes with a fee, such as Costco’s Member-Only Warehouse Savings.',
        },
        {
          q: 'Is loyalty pricing a genuine discount?',
          a: 'Usually, by the UK regulator’s count. The CMA’s review, published on 27 November 2024, checked about 50,000 products on a loyalty promotion. For 92% of them, the non-member price was no higher than in the 28 days before, and members saved 17% to 25% on average. Loyalty prices were not always the cheapest: 61 of a sample of 429 branded products were cheaper at another supermarket.',
        },
        {
          q: 'What are hotel member rates?',
          a: 'A hotel member rate is a lower rate shown to guests who sign in to the hotel’s own website or app. Marriott’s terms give members at least 2% off on weekdays and up to 5% on weekends, booked direct. OTA News explains that these closed user group rates typically fall outside rate parity clauses, because the public and rate shoppers never see them.',
        },
        {
          q: 'How does Costco’s member-only pricing work?',
          a: 'Costco charges a membership fee, $65 a year in the US, and keeps prices low on a limited range. In the year to 30 August 2026, its 84.1 million paid members paid $5,907 million in fees, just over half of its $11,685 million operating income. Its current Member-Only Warehouse Savings run from 19 October to 15 November 2026, and pricing may vary in some regions and online.',
        },
        {
          q: 'What is a good membership pricing strategy?',
          a: 'It starts with what the company wants back for the lower price. Grocers trade loyalty prices for purchase data and personalised offers, warehouse clubs charge a fee that carries much of their profit, and hotels offer member rates to win direct bookings. In each model, competitors’ member prices are part of the market price, so the strategy starts with knowing what each competitor shows its members.',
        },
        {
          q: 'Can price intelligence software track member prices?',
          a: 'Some can, in part. Price2Spy says it monitors prices behind logins. Lighthouse’s Rate Insight runs live rate shops across travel agents, brand websites and metasearch, and its page doesn’t describe rates shown after sign-in. Prisync’s pricing page doesn’t mention member prices. Obsession keeps each competitor’s member price beside its public one, per store and customer profile, with every later offer.',
          link: { label: 'Member prices for price intelligence', to: '/use-cases/member-prices-for-price-intelligence' },
        },
        {
          q: 'How does Obsession collect competitors’ member prices?',
          a: 'An Obsession agent, a customer that says it’s an AI, joins each competitor the way any customer can, from the customer profile and city your team picks, and keeps the account open. It reads every price signed out and signed in on the same page, with a screenshot of each, and keeps every email and text as it arrives. It never invents identity details.',
          link: { label: 'What every Obsession agent does', to: '/agents' },
        },
      ],
    },
  ],

  sources: [
    { title: 'Loyalty pricing in the groceries sector', publisher: 'Competition and Markets Authority (GOV.UK)', url: CMA_CASE, date: '2024-11-27' },
    { title: 'Preliminary results 2025/26', publisher: 'Tesco PLC', url: TESCO_FY26, date: '2026-04-16' },
    { title: 'Personalising Your Clubcard Prices for you', publisher: 'Tesco', url: TESCO_YCP, date: '2025-07-07' },
    { title: 'Your Nectar Prices', publisher: 'Sainsbury’s Help', url: SAINSBURYS },
    { title: 'CUG (Closed User Group)', publisher: 'OTA News Glossary', url: OTA },
    { title: 'Annual report on Form 10-K for the fiscal year ended 30 August 2026', publisher: 'Costco Wholesale Corporation (SEC)', url: COSTCO_10K, date: '2026-10-07' },
    { title: 'Member-Only Warehouse Savings', publisher: 'Costco', url: COSTCO_SAVINGS },
    { title: 'Customer groups', publisher: 'Adobe Commerce Documentation', url: ADOBE, date: '2026-10-27' },
    { title: 'Hidden Pricing', publisher: 'Bold Commerce Help Center', url: BOLD },
    { title: 'Review of loyalty pricing in the groceries sector: executive summary', publisher: 'Competition and Markets Authority (GOV.UK)', url: CMA_EXEC, date: '2024-11-27' },
    { title: 'Annual report on Form 10-K for 2025', publisher: 'Marriott International (SEC)', url: MAR_10K, date: '2026-02-10' },
    { title: 'Member rates and Best Rate Guarantee', publisher: 'Marriott', url: MAR_RATES },
    { title: 'Annual report on Form 10-K for 2025', publisher: 'Hilton Worldwide Holdings (SEC)', url: HLT_10K, date: '2026-02-11' },
    { title: 'Booking must comply with all relevant obligations under the Digital Markets Act', publisher: 'European Commission', url: EU_DMA, date: '2024-11-14' },
    { title: 'Price Marking Order 2004: government guidance', publisher: 'UK government (GOV.UK)', url: PMO, date: '2025-09-22' },
    { title: 'Ecommerce price monitoring', publisher: 'Price2Spy', url: P2S_ECOM },
    { title: 'Pricing', publisher: 'Price2Spy', url: P2S_PRICING },
    { title: 'Rate Insight', publisher: 'Lighthouse', url: LIGHTHOUSE },
    { title: 'Pricing', publisher: 'Prisync', url: PRISYNC },
  ],

  related: [
    'the-web-behind-the-login',
    'bank-competitor-analysis',
    'exa-alternatives',
    'recipe:price-watch',
    '/use-cases/member-prices-for-price-intelligence',
    'competitor-price-comparison-template',
    'best-competitor-price-tracking-tools',
  ],
}

import { plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Member prices for price intelligence (/use-cases/member-prices-for-price-intelligence), rewritten 22 Nov 2026 for the
   toolkit position: a persona joins each retailer as a member and reads public and member prices on the firm's basket
   every morning, per store, dated with a screenshot, plus every coupon and offer after sign-up. It runs on the browser,
   email and phone under one persona, through the Price watch blueprint, and lands in the firm's platform (a daily file,
   a webhook the day a price moves, the API). James's Italian grocery cast stays (Corvalle, Brand A macinato at 3,19 € and
   2,69 €, "Solo con la Carta"); every name, price and figure is invented and `fine` says so. James's page
   (src/legacy/james) draws this address and reads the headline, sub, questions and small print from here; `hero.flow`
   mirrors his flow and meta.answer is the first answer. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const sub =
  'Obsession, the toolkit for AI agents, signs a persona up as a member at every retailer you track. A persona is an AI agent with its own inbox, mobile number and browser under one name. Each morning it reads the public and member price on your basket, per store, and keeps every coupon and offer that follows.'

const answer = `${sub} The Price watch blueprint runs it, and each reading reaches your platform as a daily file, a webhook the day a price moves, or by API.`

export const study: UseCaseStudy = {
  name: 'Member prices for price intelligence',
  line: 'Member prices beside public ones, per retailer and store, every morning.',

  meta: {
    path: '/use-cases/member-prices-for-price-intelligence',
    title: 'Price intelligence: member prices beside public ones, daily',
    description:
      'A persona joins each retailer as a member and reads public and member prices on your basket every morning, per store, each dated with its screenshot.',
    answer,
    ogImage: '/og/member-prices-for-price-intelligence.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Price intelligence', path: '/use-cases/member-prices-for-price-intelligence' },
    ],
  },

  hero: {
    headline: 'Member prices beside public ones, at every retailer you track.',
    sub,
    example: { chips: [] },
    flow: [
      {
        label: 'What you collect',
        title: 'Your sources',
        items: ['Flyers', 'Shelves', 'Online prices', 'Newsletters', 'Signed in, new'],
        foot: 'Member prices · coupons · later offers',
      },
      {
        label: 'Your platform',
        title: '1 more source',
        items: ['Matched to your product database', 'On your promo calendar', 'In your alerts and raw data'],
        foot: 'Your team, your analysis',
      },
      {
        label: 'Your clients',
        title: 'Brands and retailers',
        items: ['Trade marketing', 'Category management', 'Sales teams'],
        foot: 'Nothing changes in how they work',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-price-hero',
      button: 'Start free',
      interest: 'prices',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/price-watch' },
  },

  how: {
    heading: 'You name the retailers and the basket. A persona signs in at each one.',
    sub: 'A price intelligence firm adds member prices to 1 client’s coffee basket, across 120 Italian grocery retailers.',
    steps: [
      {
        title: 'Set it up',
        line: 'The retailers, the basket, the cities and where it lands.',
        chips: ['Every price read signed out, then signed in', 'The store and city on every price', 'Each account kept open', 'Never invents identity details'],
        steps: [
          {
            title: 'Name the retailers and the basket',
            line: 'The retailers, the products and the cities to shop from. Use the basket you already track for the client.',
            example: 'The firm names 120 grocery retailers, the 40 item coffee basket it tracks for its client, and 3 cities: Milano, Roma and Napoli.',
          },
          {
            title: 'Choose what to capture',
            line: 'Public and member price on every item, the welcome offer, and every email and text after sign-up. Fixed rules decide each reading, so the same page always gives the same answer.',
            example: 'Member prices every morning, and every email and text as it arrives.',
          },
          {
            title: 'Choose where it lands',
            line: 'A file in the shape your platform takes, 1 row per observation with its screenshot, or a webhook the day a price moves. Product matching stays with your team.',
            example: 'The firm takes a daily file, plus a webhook for anything between files.',
          },
        ],
      },
      {
        title: 'A persona does the collecting',
        line: '30 days in this example, and each account stays open after. Every reading has its screenshot.',
        screen: 'members',
        chips: ['Member · Milano', 'Its own inbox', 'An Italian mobile number', 'Says it’s an AI'],
        steps: [
          {
            title: 'Each retailer gets its own member',
            line: 'A persona with its own inbox, an Italian mobile number and a browser set to the city you chose. It joins the way any customer can and, in this example, buys nothing. It says it’s an AI when it talks to a person.',
            example:
              'Corvalle, Milano Centro: joined with the newsletter and texts ticked at 09:03, the welcome email and its coupon came at 09:04, and all 40 basket items were read signed out and in by 09:06.',
          },
          {
            title: 'Signed out and signed in, side by side',
            line: 'Every item is read twice on the same page, minutes apart, with a screenshot of each. A member price counts only when both readings agree on the product and the store.',
            example:
              'Corvalle shows a member price on 14 basket items, 11% off on average and 21% at most. Brand A macinato 250 g: 3,19 € for everyone, 2,69 € with the card.',
          },
          {
            title: 'The account stays open',
            line: 'Welcome offers, member emails, texts and win back coupons arrive over days and weeks. Each is kept as it lands, with its dates and conditions.',
            example:
              'Day 7, by text: “Solo con la Carta: −20% sul caffè fino a domenica 11/10”, 20% off coffee for card holders, 5 to 11 October. Day 21: a win back coupon, 10 € off 50 €, until Friday.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'A crawler sees the shop window. A member sees the shop.',
    sub: 'Retailers keep their sharpest prices and offers for signed-in members. None of it is on the public product page or in the flyer.',
    items: [
      { title: 'Member prices', line: 'The price shown once you’re signed in, or with the loyalty card linked to the account.' },
      { title: 'Welcome coupons', line: 'The code or credit that lands after joining, and what it takes to use it.' },
      { title: 'Offers that arrive later', line: 'The email on day 3, the text on day 7, the win back coupon after 3 weeks.' },
      { title: 'Prices by store', line: 'Online prices change once you pick a store or a postcode. Each persona shops from the city you choose.' },
    ],
    answer:
      'Each observation is dated and tied to a retailer and a store, with the screenshot or the message itself, like the flyer pages and newsletters you already collect.',
  },

  split: {
    yours: {
      label: 'You keep',
      heading: 'Your clients, your teams and your analysis.',
      items: [
        'The client relationships and the reports they pay for',
        'Your field network and the sources you run today',
        'Product matching against your own database',
        'The platform your clients log in to',
      ],
    },
    ours: {
      label: 'Obsession runs',
      heading: 'The members, the inboxes and the waiting.',
      items: [
        'A persona per retailer and city, with its own inbox, Italian mobile number and browser',
        'The sign-ups, the store choice and the readings on your basket',
        'Each account kept open for as long as you track it',
        'A screenshot or the message behind every observation',
      ],
    },
  },

  outputs: {
    heading: 'Sell it as a new module to the clients you already have.',
    groups: [
      {
        label: 'For brands',
        line: 'Trade marketing, category and sales',
        items: [
          {
            title: 'Check member promotions ran',
            line: 'Turn agreed loyalty promotions into evidence, as you already do for flyers.',
            example: 'The 20% coffee offer reached Corvalle members, 5 to 11 October.',
          },
          {
            title: 'See whose products get the member price',
            line: 'Member price against public price, per retailer and per item.',
            example: 'At Corvalle, members get Competitor B’s macinato 21% off and Brand A’s 16% off.',
          },
          {
            title: 'Catch member-only price erosion',
            line: 'Which retailer goes below a threshold first, for members only.',
            example: 'Brand A macinato: 2,49 € for Corvalle members on 14 October.',
          },
        ],
      },
      {
        label: 'For retailers',
        line: 'Pricing, loyalty and CRM',
        items: [
          {
            title: 'Benchmark the welcome offer',
            line: 'What each competitor gives a new member, and what it takes to use it.',
            example: 'Corvalle: 5 € off a 30 € shop, valid 14 days.',
          },
          {
            title: 'Read competitors’ member prices on your basket',
            line: 'Your tracking basket, read as a member at each competitor.',
            example: 'Corvalle shows a member price on 14 basket items.',
          },
          {
            title: 'Map the messages after sign-up',
            line: 'Every email and text a competitor sends new members, by day.',
            example: '9 messages in 30 days, 3 with a coupon.',
          },
        ],
      },
    ],
  },

  proof: {
    heading: 'Member offers land in your platform, next to flyers and newsletters.',
    line: 'Each arrives as a row with its screenshot, in the feed your platform already takes.',
    screen: 'memberfeed',
    steps: [
      {
        title: 'A screenshot behind every observation',
        line: 'Each row carries the retailer, the store, the dates, the conditions and a link to the screenshot or the message, like your flyer and newsletter observations.',
        example:
          'Corvalle, text to members, Mon 5 Oct 2026, 11:15: 20% off coffee for card holders, valid 5 to 11 October in all stores, with the message as received.',
      },
      {
        title: '1 more line on your promo calendar',
        line: 'Member offers sit beside flyers, web campaigns and newsletters, so your client sees whether the coffee promotion reached the flyer, the website, the newsletter or only the members.',
        example:
          'Only members saw it. 5 to 11 October: 20% off coffee for card holders. That week’s flyer had no coffee, and no web campaign or newsletter mentioned it.',
      },
    ],
  },

  more: {
    recipe: {
      label: 'The blueprint',
      title: 'Price watch',
      line: 'A persona signs in at each retailer every morning and reads member prices, offers and subscriber codes.',
      cta: { label: 'See the blueprint', to: '/blueprints/price-watch' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See sample data', to: '/sample-output' },
    },
  },

  fine: 'The firm, its client, the retailers and their .example addresses, the products, the prices and every figure here are made up. No real retailer’s prices or offers are shown.',

  faq: {
    heading: 'What price intelligence teams ask.',
    items: [
      {
        q: 'What does Obsession do for price intelligence teams?',
        a: answer,
        link: { label: 'See the blueprint', to: '/blueprints/price-watch' },
      },
      {
        q: 'Where does the data come from?',
        a: 'From real member accounts. A persona signs up and signs in the way any customer can, from the customer profile and city you choose, and keeps each account open for as long as you track it. Every price is read signed out and signed in on the same page, with a screenshot of each.',
      },
      {
        q: 'Which pieces does it use?',
        a: 'The browser for the readings, and an inbox and a mobile number for the welcome codes and offers, under 1 persona per retailer and city. Price watch runs it on the same key and bill.',
        link: { label: 'See the Watch the market blueprints', to: '/blueprints/watch-the-market' },
      },
      {
        q: 'How many retailers can it cover?',
        a: 'Every retailer you track, in every city you choose: 120 retailers or thousands. Each persona waits between readings, free while it waits, and coverage and history build from the first morning.',
      },
      {
        q: 'Who matches products to our database?',
        a: 'Your team, as it does today. Obsession sends the product as the retailer shows it, the EAN when the page carries one, and the screenshot, so your product specialists can link it.',
      },
      {
        q: 'What about loyalty cards that need a tax code or a card from the store?',
        a: 'A persona joins with its own details and never invents any. The event log names each programme that asks for a codice fiscale or an in store card, so you know which ones it reads.',
      },
      {
        q: 'What does it cost?',
        a: `Start on the Free plan, with no credit card. Paid plans are ${orList(fees)} a month, and a blueprint is billed on the pieces it uses.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Does it buy anything?',
        a: 'Not in this example. If you choose, it fills a basket to read the delivery fee and the total, then stops before payment unless given your own card. It never uses fake payment details.',
      },
    ],
  },

  final: {
    heading: 'Add member prices to the basket you already track.',
    sub: 'Price watch reads them every morning, so you can see the coverage and history before you sell the module.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-price-final',
      button: 'Start free',
      interest: 'prices',
    },
    link: { label: 'See the Watch the market blueprints', to: '/blueprints/watch-the-market' },
  },
}

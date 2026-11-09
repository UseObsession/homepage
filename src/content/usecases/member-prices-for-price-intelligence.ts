import type { UseCaseStudy } from '../types'

/* Member prices for price intelligence (/use-cases/member-prices-for-price-intelligence), 9 Nov rewrite: the prices and
   offers retailers show only signed-in members, beside the public price, per store, dated with a screenshot and fed to a
   price intelligence firm's platform (a file, a webhook the day a price moves, the API, Search and Insights). James's
   Italian grocery cast stays (Corvalle, Brand A macinato at 3,19 € and 2,69 €, "Solo con la Carta"); every name, price
   and figure is invented and `fine` says so. James's page (src/legacy/james) draws this address and reads the headline,
   sub, questions and small print from here; `hero.flow` mirrors his flow and meta.answer is the first answer. */

export const study: UseCaseStudy = {
  name: 'Member prices for price intelligence',
  line: 'Signed-in prices beside public ones, per competitor, over time.',

  meta: {
    path: '/use-cases/member-prices-for-price-intelligence',
    title: 'Member prices beside public ones, for price intelligence',
    description:
      'The prices and offers retailers show only signed-in members, beside the public price, per store, each dated with its screenshot. As a feed, table or API.',
    answer:
      'Obsession collects the prices retailers show only to signed-in members, beside the public price, per store, each dated with its screenshot. Price intelligence teams get each gap and its history as a file, a table, a webhook or by API. A retailer not covered yet is added on request, from the customer profile and city they pick.',
    ogImage: '/og/member-prices-for-price-intelligence.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Member prices for price intelligence', path: '/use-cases/member-prices-for-price-intelligence' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Member prices beside public ones, at every retailer you track.',
    sub: 'The price a signed-in member sees, the welcome coupon and the offers that follow by email and text, per store, each dated with its screenshot. In your platform as one more source, with nobody signing in to 120 retailers by hand.',
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
      button: 'Request early access',
      interest: 'prices',
    },
  },

  how: {
    heading: 'You name the retailers and the basket. Obsession signs in at each one.',
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
            example: 'Member prices every week, daily around Black Friday, and every email and text as it arrives.',
          },
          {
            title: 'Choose where it lands',
            line: 'A file in the shape your platform takes, 1 row per observation with its screenshot, or a webhook the day a price moves. Product matching stays with your team.',
            example: 'The firm takes a daily file, plus a webhook for anything between files.',
          },
        ],
      },
      {
        title: 'Obsession does the collecting',
        line: '30 days in this example, and each account stays open after. Every reading has its screenshot.',
        screen: 'members',
        chips: ['Member · Milano', 'Its own inbox', 'An Italian mobile number', 'Says it’s AI'],
        steps: [
          {
            title: 'Each retailer gets its own member account',
            line: 'Its own inbox, an Italian mobile number and a browser set to the city you chose. It joins the way any customer can and, in this example, buys nothing. It says it’s AI when it talks to a person.',
            example:
              'Corvalle, Milano Centro: joined with the newsletter and texts ticked at 09:03, the welcome email and its coupon came at 09:04, and all 40 basket items were read signed out and in by 09:06.',
          },
          {
            title: 'Signed out and signed in, side by side',
            line: 'Every item is read twice on the same page, minutes apart, with a screenshot of each. A member price counts only when both readings agree on the product and the store.',
            example:
              '14 of 40 items carry a member price at Corvalle, 11% off on average and 21% at most. Brand A macinato 250 g: 3,19 € for everyone, 2,69 € with the card.',
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
      { title: 'Prices by store', line: 'Online prices change once you pick a store or a postcode. Each account shops from the city you choose.' },
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
      heading: 'The accounts, the inboxes and the waiting.',
      items: [
        'A member account per retailer and city, with its own inbox, Italian mobile number and browser',
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
            title: 'Catch price erosion behind the login',
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
            example: '14 of 40 items carry a member price at Corvalle.',
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
        title: 'A record behind every observation',
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
      label: 'The recipe',
      title: 'Price watch',
      line: 'Prices, offers and terms as a customer sees them, on the schedule you set.',
      cta: { label: 'Learn more', to: '/recipes/price-watch' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'The firm, its client, the retailers and their .example addresses, the products, the prices and every figure here are made up. No real retailer’s prices or offers are shown.',

  faq: {
    heading: 'What price intelligence teams ask.',
    items: [
      {
        q: 'What does Obsession do for price intelligence teams?',
        a: 'Obsession collects the prices retailers show only to signed-in members, beside the public price, per store, each dated with its screenshot. Price intelligence teams get each gap and its history as a file, a table, a webhook or by API. A retailer not covered yet is added on request, from the customer profile and city they pick.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up and sign in the way any customer can, from the customer profiles and cities you choose, and keep each account open for months. Every price is read signed out and signed in on the same page, with a screenshot of each.',
      },
      {
        q: 'What if a retailer isn’t covered yet?',
        a: 'Click Watch. Obsession signs up as the customer profile and city you pick, keeps the account open, and every price and message joins the index the day it arrives. A retailer already covered returns its history at once.',
      },
      {
        q: 'Can we look up 1 retailer without a feed?',
        a: 'Yes. Search any retailer for its member prices, its offers and the screenshot behind each. Insights asks 1 question across many, like “Which retailers show members a lower coffee price than guests?”, and answers with a row per retailer.',
      },
      {
        q: 'Who matches products to our database?',
        a: 'Your team, as it does today. Obsession sends the product as the retailer shows it, the EAN when the page carries one, and the screenshot, so your product specialists can link it.',
      },
      {
        q: 'What about loyalty cards that need a tax code or a card from the store?',
        a: 'Obsession never invents identity details. Where a programme needs a codice fiscale or an in store card, it stops there and says so, so you know where the wall is.',
      },
      {
        q: 'Does it buy anything?',
        a: 'Not in this example. If you choose, it fills a basket to read the delivery fee and the total. A real order goes on a card you fund, never on fake payment details.',
      },
    ],
  },

  final: {
    heading: 'Which retailers should we look up first?',
    sub: 'Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-price-final',
      button: 'Request early access',
      interest: 'prices',
    },
  },
}

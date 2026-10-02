import type { UseCaseStudy } from '../types'

/* Member prices for price intelligence (/use-cases/member-prices-for-price-intelligence): James's worked example,
   moved into typed content in the rebuild's story order (types.ts, "Use case studies"). A price intelligence firm adds
   what retailers show only after sign up to 1 client's coffee basket, across 120 Italian grocery retailers. Every
   name, product, price and figure is invented and the page says so.
   Kept from James: the cast and the Italian member-price details (Corvalle, Mirtena, Milano Centro, Brand A macinato
   250 g at 3,19 € and 2,69 €, "Solo con la Carta", the 5 to 11 October coffee offer, the codice fiscale wall), his 8
   steps in 3 phases, the picks, the you keep and Obsession runs split, the 6 things to sell, his questions and the
   final offer.
   Fixed (red lines and copy rules): inboxes and phones are kept open continuously, not "for weeks"; the members say
   they're AI; "the identities" is "the members", so nothing reads as an invented identity; basket and delivery fee
   readings need the retailer's OK and stop before payment; numerals; no meta headings.
   Screens: members (the collecting), memberfeed (what lands in the platform). The set up phase shows its chips. */

export const study: UseCaseStudy = {
  name: 'Member prices for price intelligence',
  line: 'What retailers show only after sign up, fed to your platform.',

  meta: {
    path: '/use-cases/member-prices-for-price-intelligence',
    title: 'Member prices for price intelligence, as a feed with proof',
    description:
      'An example: AI test members join each retailer, read member prices beside public ones and keep every coupon and offer, sent to your platform with proof.',
    answer:
      'Member prices for price intelligence is a worked example of Obsession. Declared AI test members join each grocery retailer, read the basket signed out and signed in, keep every welcome coupon, email and text, and send each observation to the firm’s platform as a feed with its screenshot. The firm, retailers and prices are made up.',
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
    headline: 'The prices retailers only show after sign up',
    sub: 'You already watch flyers, shelves, online prices and newsletters. Obsession adds what sits behind the sign up: member prices, welcome coupons and the offers that arrive days later, collected by test customers and delivered to your platform with the proof.',
    example: {
      chips: ['Example: a price intelligence firm', 'Its client: a coffee brand', '120 Italian grocery retailers'],
      note: 'The firm, its client, the retailers, the products, the prices and the numbers on this page are made up.',
    },
    flow: [
      {
        label: 'What you collect',
        title: 'Your sources',
        items: ['Flyers', 'Shelves', 'Online prices', 'Newsletters', 'After sign up, new'],
        foot: 'Member prices · coupons · later offers',
      },
      {
        label: 'Your platform',
        title: '1 more domain',
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
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We’ll only use your email to tell you about Obsession.',
      interest: 'prices',
    },
  },

  how: {
    heading: 'From a retailer list to a new domain in your platform.',
    sub: 'A price intelligence firm adds member prices to 1 client’s coffee basket, across 120 Italian grocery retailers.',
    steps: [
      {
        title: 'Set it up',
        line: 'The retailers, the basket and the cities, what to capture, and how it arrives.',
        chips: ['Every price read signed out, then signed in', 'The store and city on every price', 'Inbox and phone open for 30 days', 'Never invents identity details'],
        steps: [
          {
            title: 'Send the retailers and the basket',
            line: 'The retailers to join, the products to read and the cities to shop from. Use the tracking basket you already run for the client.',
            example: 'The firm sends 120 grocery retailers, the 40 item coffee basket it already tracks for its client, and 3 cities: Milano, Roma and Napoli.',
          },
          {
            title: 'Choose what to capture',
            line: 'Public and member price on every basket item, the welcome offer, and everything that arrives after sign up. Fixed rules decide each reading, so the same page always gives the same answer.',
            example: 'Member prices every week, to follow the promotion cycle, daily around Black Friday, and every email and text for 30 days after joining.',
          },
          {
            title: 'Choose how it arrives',
            line: 'A feed in the shape your platform already takes: 1 row per observation, with the image link. Matching to your product database stays with your team.',
            example: 'The firm takes a daily file, plus a webhook for anything that arrives between files.',
          },
        ],
      },
      {
        title: 'Obsession does the collecting',
        line: '30 days in this example. Each retailer gets its own declared member, and every reading has its screenshot.',
        screen: 'members',
        chips: ['Its own inbox', 'An Italian mobile number', 'A browser set to the city', 'Says it’s AI, never buys'],
        steps: [
          {
            title: 'Each retailer gets its own member',
            line: 'A real inbox, an Italian mobile number and its own browser, set to the city you chose. It joins the way a customer would, says it’s AI, and never buys anything.',
            example:
              'Corvalle, Milano Centro: joined with the newsletter and texts ticked at 09:03, the welcome email and its coupon came at 09:04, and all 40 basket items were read signed out and in by 09:06.',
          },
          {
            title: 'Signed out and signed in, side by side',
            line: 'Every basket item is read twice on the same page, minutes apart, with a screenshot of each. A member price only counts when both readings agree on the product and the store.',
            example:
              '14 of 40 items carry a member price at Corvalle, 11% off on average and 21% at most. Brand A macinato 250 g: 3,19 € for everyone, 2,69 € with the card.',
          },
          {
            title: 'It keeps the inbox open',
            line: 'Welcome offers, member emails, texts and win back coupons arrive over days and weeks. Each one is captured as it lands, with its dates and conditions.',
            example:
              'Day 7, by text: “Solo con la Carta: −20% sul caffè fino a domenica 11/10”, 20% off coffee for card holders, 5 to 11 October. Day 21: a win back coupon, €10 off €50, until Friday.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'A crawler sees the shop window. A member sees the shop.',
    sub: 'Retailers keep their sharpest prices and offers for people who’ve joined. None of it shows on a public product page or in the flyer.',
    items: [
      { title: 'Member prices', line: 'The price shown once you’re signed in, or with the loyalty card linked to the account.' },
      { title: 'Welcome coupons', line: 'The code or credit that lands after joining, and what it takes to use it.' },
      { title: 'Offers that arrive later', line: 'The email on day 3, the text on day 7, the win back coupon after 3 weeks.' },
      { title: 'Prices by store', line: 'Online prices change once you pick a store or a postcode. Each member shops from the city you choose.' },
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
        'A test customer per retailer and city, declared as AI, with its own inbox, Italian mobile number and browser',
        'The sign ups, the store choice and the readings on your basket',
        'Inboxes and phones kept open, continuously',
        'A screenshot or the message behind every observation',
      ],
    },
  },

  outputs: {
    heading: 'A new module for the clients you already have.',
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
            title: 'See who discounts you to members',
            line: 'Member price against public price, per retailer and per item.',
            example: 'Rival B is 21% cheaper for Corvalle members.',
          },
          {
            title: 'Price erosion behind the login',
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
            line: 'What each rival gives a new member, and what it takes to use it.',
            example: 'Corvalle: 5 € off a 30 € shop, valid 14 days.',
          },
          {
            title: 'Rivals’ member prices on your basket',
            line: 'Your tracking basket, read as a member at each rival.',
            example: '14 of 40 items carry a member price at Corvalle.',
          },
          {
            title: 'The sequence after sign up',
            line: 'Every email and text a rival sends new members, by day.',
            example: '9 messages in 30 days, 3 with a coupon.',
          },
        ],
      },
    ],
  },

  proof: {
    heading: 'Member offers land in your platform, next to flyers and newsletters.',
    line: 'Each one arrives as a row with its proof, and takes its place on your promo calendar beside every other channel.',
    screen: 'memberfeed',
    steps: [
      {
        title: 'An identity card for every observation',
        line: 'Each row carries the retailer, the store, the dates, the conditions and a link to the screenshot or the message, like your flyer and newsletter observations already do.',
        example:
          'Corvalle, SMS to members, Mon 5 Oct 2026, 11:15: 20% off coffee for card holders, valid 5 to 11 October in all stores, with the message as received.',
      },
      {
        title: 'Next to flyers, web campaigns and newsletters',
        line: 'Member offers become 1 more line on your promo calendar, so your client sees every channel at once: did the coffee promotion reach the flyer, the website, the newsletter or only the members?',
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
      title: 'Sample output',
      line: 'A real store check from September 2026, shown in every format it can arrive in.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'The firm, its client, the retailers, the products, the prices and every figure here are made up, and no real retailer’s prices or offers are shown. Basket and delivery fees are read only with the retailer’s OK, and stop before payment.',

  faq: {
    heading: 'Every member says it’s AI and never buys. Your team keeps the matching.',
    items: [
      {
        q: 'Do you need access to our platform?',
        a: 'No. We deliver a feed, by file, API or webhook, with the fields you choose. It loads into your platform like any other source.',
      },
      {
        q: 'Who matches products to our database?',
        a: 'Your team, as it does today. We send the product as the retailer shows it, the EAN when the page carries one, and the screenshot, so your product specialists can link it.',
      },
      {
        q: 'What about loyalty cards that need a tax code or a card from the store?',
        a: 'We don’t invent identity details. Where a programme needs a codice fiscale or an in store card, the member stops there and reports it, so you know exactly where the wall is.',
      },
      {
        q: 'Do the test members buy anything?',
        a: 'No. They join, choose a store and read what members see. Basket and delivery fees are read only with the retailer’s written OK, and stop before payment.',
      },
      {
        q: 'How often does it run?',
        a: 'Weekly to follow promotion cycles, daily around key dates such as Black Friday, or any rhythm you set per retailer.',
      },
      {
        q: 'Will our clients see Obsession?',
        a: 'Only if you want them to. The data comes to you, and you decide how it appears in your platform.',
      },
    ],
  },

  final: {
    heading: 'Try it on 10 retailers.',
    sub: 'Join the waitlist, and we’ll run 10 retailers and 1 tracking basket: member prices, coupons and what arrives after sign up, as a feed.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-price-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We’ll only use your email to tell you about Obsession.',
      interest: 'prices',
    },
  },
}

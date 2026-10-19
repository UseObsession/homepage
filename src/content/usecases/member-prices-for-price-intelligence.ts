import type { UseCaseStudy } from '../types'

/* Member prices for price intelligence (/use-cases/member-prices-for-price-intelligence): James's worked example,
   moved into typed content in the rebuild's story order (types.ts, "Use case studies"). A price intelligence firm adds
   what retailers show only after sign up to 1 client's coffee basket, across 120 Italian grocery retailers. Every
   name, product, price and figure is invented and the page says so.
   Kept from James: the cast and the Italian member-price details (Corvalle, Mirtena, Milano Centro, Brand A macinato
   250 g at 3,19 € and 2,69 €, "Solo con la Carta", the 5 to 11 October coffee offer, the codice fiscale wall), his 8
   steps in 3 phases, the picks, the you keep and Obsession runs split, the 6 things to sell, his questions and the
   final offer.
   Fixed (copy rules): inboxes and phones are kept open continuously, not "for weeks"; "the identities" is "the
   members", so nothing reads as an invented identity; numerals; no meta headings.
   Rules (19 Oct, in line with /recipes/price-watch): only the 3 lines in obsession/system.md hold. Baskets, delivery
   fees and real orders are the firm's setting; a member says it is AI when it talks to a person, and uses no fake
   payment details or made up tax codes. meta.answer opens with the sub on James's page (src/legacy/james), which
   draws this address; these words give its head, its JSON-LD and its card in the nav and on /use-cases.
   Narrative edit (3 Oct): the hero is a complete claim and names the declared AI members; How says what the firm sends
   and what each member does; the things to sell read as 6 jobs, each example true to the screens (Brand A's macinato
   16% off for Corvalle members, Rival B's 21%); the proof's 2 steps say what each row holds and where it sits; the real
   run's line states what it found.
   Rewritten 19 Oct (James) in the site's October voice, as the agencies example was: the firm becomes a customer of
   every retailer it tracks, and keeps the receipts. No "Example" chips and no "test customer": the retailers are
   .example addresses and `fine` says what is made up. The hero's picture is the board (components/study/Board) in
   place of the 3 stop flow: 120 retailers, 1 member each for 30 days, 1 column per thing only members see. A filled
   cell is a members only price or offer, landing on the day it came; the receipt is corvalle.example's text to card
   holders, the observation the delivery steps and the promo calendar pick up.
   James's page (src/legacy/james) draws this address. It reads its headline, its sub, its board, its questions and
   its small print from here, so the head, the JSON-LD and the page say the same words; meta.answer is the first
   answer. These words also give its card in the nav and on /use-cases.
   Screens: members (the collecting), memberfeed (what lands in the platform). The set up phase shows its chips. */

export const study: UseCaseStudy = {
  name: 'Member prices for price intelligence',
  line: 'What retailers show only after sign up, fed to your platform.',

  meta: {
    path: '/use-cases/member-prices-for-price-intelligence',
    title: 'Member price intelligence: what retailers show only members',
    description:
      'AI agents become a customer of every retailer you track: they sign up, read member prices beside public ones and send each offer with its receipt.',
    answer:
      'Obsession gives price intelligence firms a customer at every retailer they track: AI agents with their own inbox, mobile number and browser that sign up, read the member price beside the public one and keep every coupon and offer that arrives after. Each observation lands in the firm’s platform with its receipt.',
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
    headline: 'Be a customer of every retailer you track.',
    sub: 'You already collect flyers, shelves, online prices and newsletters. AI agents sign up at every retailer you track and bring back what only members see: member prices, welcome coupons and the offers that arrive days later. Each one lands in your platform with its receipt.',
    example: { chips: [] },
    /* The board: 120 retailers, 4 things only members see, 30 days, so the clock counts days. A cell's `at` is the day
       it came; a filled cell is members only (a member price under the public one, an offer sent to card holders). The
       4 rows are the firm's 3 cities; the last stops at a card that needs a tax code, as the questions say. */
    board: {
      label:
        'A price intelligence firm’s 120 Italian grocery retailers, each with an AI member for 30 days, read for 1 client’s coffee basket: the member price on Brand A’s macinato, the welcome coupon, coffee offers and the win back coupon. corvalle.example, Milano Centro: 16% off Brand A for members, and on day 7 a text to card holders only, 20% off coffee, its receipt kept. mirtena.example, Roma: the same price for everyone. valdora.example, Napoli: 9% off Brand A for members. seravo.example, Milano: its card needs a tax code, so the member stopped at the card and reported it, and kept the newsletter.',
      who: 'Your coffee client',
      count: '120 retailers, 1 member each',
      hours: 30,
      hour: 'Day',
      cols: ['Member price', 'Welcome coupon', 'Coffee offers', 'Win back'],
      rows: [
        {
          store: 'corvalle.example',
          role: 'Milano Centro',
          cells: [
            { state: 'gap', text: '16% off', at: 0.002 },
            { state: 'ok', text: '5 € off 30 €', at: 0.001 },
            { state: 'gap', text: '20%, card', at: 7 },
            { state: 'ok', text: '10 € off', at: 21 },
          ],
        },
        {
          store: 'mirtena.example',
          role: 'Roma',
          cells: [
            { state: 'ok', text: 'Same price', at: 0.002 },
            { state: 'ok', text: '10% off', at: 0.003 },
            { state: 'ok', text: '10%, for all', at: 10 },
            { state: 'none', text: 'None in 30 days' },
          ],
        },
        {
          store: 'valdora.example',
          role: 'Napoli',
          cells: [
            { state: 'gap', text: '9% off', at: 0.002 },
            { state: 'ok', text: '3 € off 20 €', at: 0.002 },
            { state: 'ok', text: '15%, for all', at: 12 },
            { state: 'none', text: 'None in 30 days' },
          ],
        },
        {
          store: 'seravo.example',
          role: 'Milano',
          cells: [
            { state: 'none', text: 'Needs a tax code' },
            { state: 'ok', text: '2 € off 25 €', at: 0.004 },
            { state: 'none', text: 'None in 30 days' },
            { state: 'ok', text: '5 € off 40 €', at: 25 },
          ],
        },
      ],
      more: '+ 116 more retailers',
      receipt: {
        store: 'corvalle.example',
        rows: [
          { k: 'Signed up', v: 'Mon 28 Sep, 09:03' },
          { k: 'Store', v: 'Milano Centro' },
          { k: 'Text', v: 'Mon 5 Oct, 11:15' },
          { k: 'To', v: 'Card holders only' },
          { k: 'Offer', v: '20% off coffee, 5 to 11 Oct' },
          { k: 'Image', v: 'The text as received' },
        ],
        fact: 'Texted to card holders on 5 October: 20% off coffee until Sunday 11 October.',
        stamp: 'Members only',
      },
    },
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
    heading: 'You choose the retailers and the basket. An AI member joins each one.',
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
        line: '30 days in this example. Each retailer gets its own AI member, and every reading has its screenshot.',
        screen: 'members',
        chips: ['Its own inbox', 'An Italian mobile number', 'A browser set to the city', 'Says it’s AI'],
        steps: [
          {
            title: 'Each retailer gets its own member',
            line: 'A real inbox, an Italian mobile number and its own browser, set to the city you chose. It joins the way a customer would and, in this example, buys nothing. When it talks to a person, it says it’s AI.',
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
              'Day 7, by text: “Solo con la Carta: −20% sul caffè fino a domenica 11/10”, 20% off coffee for card holders, 5 to 11 October. Day 21: a win back coupon, 10 € off 50 €, until Friday.',
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
        'An AI member per retailer and city, with its own inbox, Italian mobile number and browser',
        'The sign ups, the store choice and the readings on your basket',
        'Inboxes and phones kept open for as long as you watch',
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
            example: 'At Corvalle, members get Rival B’s macinato 21% off and Brand A’s 16% off.',
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
            line: 'What each rival gives a new member, and what it takes to use it.',
            example: 'Corvalle: 5 € off a 30 € shop, valid 14 days.',
          },
          {
            title: 'Read rivals’ member prices on your basket',
            line: 'Your tracking basket, read as a member at each rival.',
            example: '14 of 40 items carry a member price at Corvalle.',
          },
          {
            title: 'Map the sequence after sign up',
            line: 'Every email and text a rival sends new members, by day.',
            example: '9 messages in 30 days, 3 with a coupon.',
          },
        ],
      },
    ],
  },

  proof: {
    heading: 'Member offers land in your platform, next to flyers and newsletters.',
    line: 'Each arrives as a row with its proof, in the feed your platform already takes.',
    screen: 'memberfeed',
    steps: [
      {
        title: 'A full record behind every observation',
        line: 'Each row carries the retailer, the store, the dates, the conditions and a link to the screenshot or the message, like your flyer and newsletter observations already do.',
        example:
          'Corvalle, SMS to members, Mon 5 Oct 2026, 11:15: 20% off coffee for card holders, valid 5 to 11 October in all stores, with the message as received.',
      },
      {
        title: '1 more line on your promo calendar',
        line: 'Member offers sit beside flyers, web campaigns and newsletters, so your client sees every channel at once: did the coffee promotion reach the flyer, the website, the newsletter or only the members?',
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
      line: 'A UK store checked in September 2026: 1 basket and 1 checkout left, and nobody wrote to either in 48 hours.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'The firm, its client, the retailers and their .example addresses, the products, the prices and every figure here are made up, and no real retailer’s prices or offers are shown.',

  faq: {
    heading: 'What price intelligence teams ask.',
    items: [
      {
        q: 'What does Obsession do for price intelligence firms?',
        a: 'Obsession gives price intelligence firms a customer at every retailer they track: AI agents with their own inbox, mobile number and browser that sign up, read the member price beside the public one and keep every coupon and offer that arrives after. Each observation lands in the firm’s platform with its receipt.',
      },
      {
        q: 'Do you need access to our platform?',
        a: 'No. Obsession delivers a feed, by file, API or webhook, with the fields you choose. It loads into your platform like any other source.',
      },
      {
        q: 'Who matches products to our database?',
        a: 'Your team, as it does today: Obsession sends the product as the retailer shows it, the EAN when the page carries one, and the screenshot, so your product specialists can link it.',
      },
      {
        q: 'What about loyalty cards that need a tax code or a card from the store?',
        a: 'Obsession never invents identity details. Where a programme needs a codice fiscale or an in store card, the member stops there and reports it, so you know exactly where the wall is.',
      },
      {
        q: 'Do the members buy anything?',
        a: 'Not in this example. Obsession’s members sign up, choose a store and read what members see. If you choose, a member fills a basket to read the delivery fee and the total. Real orders go on a card you fund, never on fake payment details.',
      },
      {
        q: 'How often does Obsession run it?',
        a: 'Obsession runs it weekly to follow promotion cycles, daily around key dates such as Black Friday, or any rhythm you set per retailer.',
      },
      {
        q: 'Will our clients see Obsession?',
        a: 'Only if you want them to: Obsession’s data comes to you, and you decide how it appears in your platform.',
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

import type { UseCaseStudy } from '../types'

/* Consumer promotions data for funds (/use-cases/consumer-promotions-data-for-funds), 12 Nov 2026: what consumer brands
   send and show their customers (offer emails and texts, the flows after a sign-up or a basket, discount depth, how
   often each brand sends, public prices), as point-in-time data for fund analysts, sell-side and private equity,
   delivered by the API, MCP, Supabase, a webhook or a sheet. The plan and search phrases are in the Obsession folder,
   _research/seo/usecases-compliance-funds-12nov/. Scope follows System §4: fund compliance rejects agents that log in,
   request quotes or talk to staff, so this page covers what arrives after a sign-up and public prices, never signed-in
   prices or quotes. System §1: history can't be backfilled and the clock starts the day collection starts, said here as
   "every week from today becomes history". Ticker mapping isn't on the site, so it isn't here. Harrowgate and its
   competitors are invented, and `fine` says so. The agents appear only in the answer on where the data comes from. */

export const study: UseCaseStudy = {
  name: 'Consumer promotions data for funds',
  line: 'What consumer brands offer their customers, week by week, as point-in-time data.',

  meta: {
    path: '/use-cases/consumer-promotions-data-for-funds',
    title: 'Alternative data for investors: consumer promotions, dated',
    description:
      'What consumer brands offer their customers, as point-in-time data: every email, text and price dated the day it was seen, from any brand you name.',
    answer:
      'Alternative data for investors includes what consumer companies offer their own customers: discount depth, free delivery, new offers and how often they send them. Obsession collects it from any brand you name as point-in-time data, with every email, text and price kept with the time it was seen. History builds from the day you start, delivered by API, MCP or a table.',
    ogImage: '/og/consumer-promotions-data-for-funds.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Consumer promotions data for funds', path: '/use-cases/consumer-promotions-data-for-funds' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Consumer brands’ offers, as point-in-time data for investors.',
    sub: 'Every offer email and text, the flows after a sign-up or a basket, discount depth and how often each brand sends. From any brand you name, each fact kept with the time it was seen.',
    example: { chips: ['Harrowgate, a listed apparel retailer', '2 competitors', 'Email, texts and prices'] },
    flow: [
      {
        label: 'What you name',
        title: 'The brands and countries',
        items: ['Brands, by country', 'Email and SMS', 'The flows after a sign-up or a basket', 'Public prices'],
        foot: 'Any brand, not a fixed panel',
      },
      {
        label: 'What comes back',
        title: 'Every offer, as it was seen',
        items: ['Discount depth and type', 'How often each brand sends', 'Free delivery and new offers', 'The email or text behind each'],
        foot: 'Each with the time it was seen',
      },
      {
        label: 'Where it lands',
        title: 'Into your research stack',
        items: ['The API or MCP', 'Supabase or a webhook', 'A weekly sheet'],
        foot: 'History builds from day one',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-funds-hero',
      button: 'Request early access',
      interest: 'email-sms',
    },
  },

  how: {
    heading: 'Name the brands. Every week from today becomes history.',
    sub: 'A consumer analyst follows Harrowgate, a listed apparel retailer, and 2 competitors through the autumn.',
    steps: [
      {
        title: 'Set it up',
        line: 'Which brands, in which countries, and where the data lands.',
        chips: ['Any brand you name', 'UK and US', 'Email and SMS', 'Public prices'],
        steps: [
          {
            title: 'Name the brands',
            line: 'Every brand you cover, in each country where it sells.',
            example: 'Harrowgate and 2 competitors, in the UK and the US.',
          },
          {
            title: 'Pick what to read',
            line: 'Offer emails and texts, the flows after a sign-up or a basket, and public prices.',
            example: 'Every email and text, the reminder after a basket, and the price of 20 lines on each site.',
          },
          {
            title: 'Say where it lands',
            line: 'The API, Supabase, a webhook or a sheet, in the shape your models read.',
            example: 'A daily table in Supabase, and a webhook for any discount deeper than 30%.',
          },
        ],
      },
      {
        title: 'Obsession collects it',
        line: 'Each fact keeps the time it was first seen, with the email, text or page behind it.',
        screen: 'promos',
        chips: ['An inbox per brand', 'A number per brand', 'Timed on arrival', 'Kept as it arrived'],
        steps: [
          {
            title: 'Discount depth by week',
            line: 'Each offer read as it arrives: how deep, what kind and what it applies to.',
            example: 'Harrowgate: 15% in September, 25% on 19 Oct, 40% on 2 Nov.',
          },
          {
            title: 'How often each brand sends',
            line: 'Sends per week by channel, so a change in pressure shows the week it starts.',
            example: 'Harrowgate went from 3 emails a week to 6 in the fortnight before 2 Nov.',
          },
          {
            title: 'Point-in-time, kept that way',
            line: 'Every fact keeps the time it was first seen, so a backtest uses only what was knowable that day.',
            example: 'The 2 Nov email is stamped 07:12 that morning, and stays that way.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Panels show the brands they chose. History can’t be bought later.',
    sub: 'Promotions data usually comes from a fixed list of brands. Offers sent only after a sign-up or a basket rarely reach it, and every week nobody collects is a week nobody can test.',
    items: [
      { title: 'Brands outside a fixed list', line: 'The challenger or the private competitor your thesis depends on.' },
      { title: 'Flows after a sign-up or a basket', line: 'The offer sent to finish an order, as well as the campaign email.' },
      { title: 'Texts beside emails', line: 'Brands that send their deepest offers by text.' },
      { title: 'History you can test', line: 'A clock that starts the day collection starts, so it pays to start it early.' },
    ],
    answer: 'Each fact is dated the moment it is seen and kept exactly as it arrived, with the email or text behind it.',
  },

  outputs: {
    heading: 'What analysts, quant teams and private equity do with it.',
    groups: [
      {
        items: [
          {
            title: 'Read a quarter before it reports',
            line: 'Discounting and send pressure, week by week, ahead of results.',
            example: 'Harrowgate’s discounts deepened 3 weeks before its competitors’, and its emails doubled.',
          },
          {
            title: 'Test a signal as history builds',
            line: 'A feed with the time each fact was seen, for a backtest without look-ahead.',
            example: 'Every offer since 7 Sep, one row each, with its depth, channel, brand and time.',
          },
          {
            title: 'Diligence a target and its market',
            line: 'What a target offers its customers, beside its competitors.',
            example: 'Asked “Who discounted deepest before Black Friday?”, Insights answered with 3 brands, ranked.',
          },
          {
            title: 'Add a channel to a dataset',
            line: 'Texts and the flows after a basket, beside the campaign emails a panel already holds.',
            example: 'Competitor A sent its free delivery offer by text a day before any email.',
          },
        ],
      },
    ],
  },

  more: {
    recipe: {
      label: 'The recipe',
      title: 'Email and SMS tracking',
      line: 'Every email and text the brands on your list send a subscriber, side by side: who sends most, and who discounts first.',
      cta: { label: 'Learn more', to: '/recipes/email-sms-tracking' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'Harrowgate, its competitors and their .example addresses, every offer, date and figure in the example are made up.',

  faq: {
    heading: 'What funds and analysts ask.',
    items: [
      {
        q: 'What does Obsession do for investors?',
        a: 'Alternative data for investors includes what consumer companies offer their own customers: discount depth, free delivery, new offers and how often they send them. Obsession collects it from any brand you name as point-in-time data, with every email, text and price kept with the time it was seen. History builds from the day you start, delivered by API, MCP or a table.',
      },
      {
        q: 'How far back does the history go?',
        a: 'To the day collection starts for each brand, and it grows every week after. Nothing is backfilled, because nobody can see last month’s email today. Discretionary funds, sell-side analysts and private equity read it from the first week; quant teams start the clock now for the history they test later.',
      },
      {
        q: 'Is the data point-in-time?',
        a: 'Yes. Each fact keeps the time it was first seen and is kept exactly as it arrived, with the email, text or page behind it. A backtest uses only what was knowable on each date.',
        link: { label: 'Point-in-time data, defined', to: '/glossary/point-in-time-data' },
      },
      {
        q: 'Where does the data come from?',
        a: 'From real sign-ups. Obsession’s agents subscribe to each brand’s emails and texts the way any customer can and keep what arrives. They use their own addresses and numbers, never a real customer’s, and never sign in to an account, ask for a quote or talk to staff.',
        link: { label: 'The lines every agent keeps', to: '/agents' },
      },
      {
        q: 'Can we choose the brands?',
        a: 'Yes. Any brand you name, in the countries you pick. A brand not covered yet is added on request, and its history starts that day.',
      },
    ],
  },

  final: {
    heading: 'Which brands should we start the clock on?',
    sub: 'Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders on a call.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-funds-final',
      button: 'Request early access',
      interest: 'email-sms',
    },
  },
}

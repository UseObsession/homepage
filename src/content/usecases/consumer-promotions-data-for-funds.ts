import { kitPathOf } from '../kitPaths'
import { personaCostLine, plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Consumer promotions data for funds (/use-cases/consumer-promotions-data-for-funds), 22 Nov 2026 rewrite for the toolkit
   position: a persona (its own inbox and number, and a browser for public pages) joins each brand's email and text list
   and keeps every offer with the time it was seen, as point-in-time data for fund analysts, sell-side and private
   equity, by API, MCP, Supabase, a webhook or a sheet. Email and SMS tracking and Price watch run it. Part of the Watch
   the market kit. Scope (System §4): fund compliance rejects agents that log in, request quotes or talk to staff, so
   this page covers what arrives after a sign-up and public prices, never signed-in prices or quotes. History can't be
   backfilled, said here as "every week from today becomes history". The search phrase "alternative data for investors"
   stays in the hero's first sentence. Harrowgate and its competitors are invented, and `fine` says so. Prices come from
   prices.ts. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const planWords = `the Free plan, then ${fees.slice(0, -1).join(', ')} or ${fees[fees.length - 1]} a month`

export const study: UseCaseStudy = {
  name: 'Consumer promotions data for funds',
  line: 'What consumer brands offer their customers, week by week, as point-in-time data.',

  meta: {
    path: '/use-cases/consumer-promotions-data-for-funds',
    title: 'Consumer promotions data for funds, collected by AI agents',
    description:
      'AI agents join the email and text lists of the brands you name and keep every offer and public price as point-in-time data, dated the moment it arrives.',
    answer:
      'Alternative data for investors includes what consumer companies offer their own customers: discount depth, free delivery, new offers and how often they send them. Obsession’s AI agents join the lists of every brand you name and keep each email, text and public price with the time it was seen. History builds from the day you start, delivered by API, MCP or a table.',
    ogImage: '/og/consumer-promotions-data-for-funds.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Consumer promotions data for funds', path: '/use-cases/consumer-promotions-data-for-funds' },
    ],
  },

  hero: {
    pill: 'Watch the market kit',
    headline: 'Consumer brands’ offers, as point-in-time data for investors.',
    sub: 'Alternative data for investors includes what consumer companies offer their own customers: discount depth, free delivery, new offers and how often they send them. Obsession’s AI agents join the lists of every brand you name and keep each email, text and public price with the time it was seen.',
    example: { chips: ['Harrowgate, a listed apparel retailer', '2 competitors', 'Email, texts and prices'] },
    flow: [
      {
        label: 'What you name',
        title: 'The brands and countries',
        items: ['Brands, by country', 'Email and SMS', 'The flows after a sign-up or a basket', 'Public prices'],
        foot: 'Any brand, not a fixed panel',
      },
      {
        label: 'Obsession',
        title: 'A persona on each brand’s list',
        items: ['An inbox per brand', 'A number per brand', 'A browser for public prices', 'Timed on arrival'],
        foot: 'Free while it waits',
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
      button: 'Start free',
      interest: 'email-sms',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/email-sms-tracking' },
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
        title: 'Email and SMS tracking collects it',
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
    sub: 'Each use shows up in coverage, history and time to insight, where you can watch it.',
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
            example: 'Asked “Who discounted deepest before Black Friday?”, the analyst’s own AI agent ranked the brands, each with its email.',
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
      label: 'The blueprint',
      title: 'Email and SMS tracking',
      line: 'Every email and text the brands on your list send a subscriber, side by side, and who discounts first.',
      cta: { label: 'See the blueprint', to: '/blueprints/email-sms-tracking' },
    },
    sample: {
      label: 'Beside it',
      title: 'Price watch',
      line: 'Each morning’s public prices at every brand, dated, with the screenshot before and after.',
      cta: { label: 'See the blueprint', to: '/blueprints/price-watch' },
    },
  },

  fine: 'Harrowgate, its competitors and their .example addresses, every offer, date and figure in the example are made up.',

  faq: {
    heading: 'What funds and analysts ask.',
    items: [
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
        a: 'From real sign-ups. A persona joins each brand’s emails and texts the way any customer can and keeps what arrives, with its own address and number, never a real customer’s. It reads public prices, and never signs in to an account, asks for a quote or talks to staff.',
        link: { label: 'The lines every agent keeps', to: '/agents' },
      },
      {
        q: 'Can we choose the brands?',
        a: 'Yes. Any brand you name, in the countries you pick. A persona joins its list that day, and its history starts then.',
      },
      {
        q: 'How is it priced?',
        a: `${personaCostLine} It costs nothing while it waits, and each blueprint is billed on the pieces it uses. Start on ${planWords}.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Start the clock on every brand you cover.',
    sub: 'Start with one brand and its competitors, so you can see the coverage and history before you add the rest.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-funds-final',
      button: 'Start free',
      interest: 'email-sms',
    },
    link: { label: 'See the Watch the market kit', to: kitPathOf.watch },
  },
}

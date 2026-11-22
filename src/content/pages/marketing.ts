import { askShared } from '../shared5'
import { consoleHeading } from '../console'
import type { Page, PricingTabs } from '../types'

/* Marketing (/marketing), the toolkit rewrite (22 Nov 2026, James: "fix the marketing and sales positioning"): a persona
   the reader defines signs up at each competitor they name and keeps the account open, and every email, text, offer and
   price it is sent lands in their event log, dated, with a screenshot. The blueprints run it (competitor tracking,
   email and SMS tracking, price watch, ad tracking, delivery monitoring). Sold as designed, as on the blueprint pages:
   no index, no "already covered", no caps. The page: the hero > the hand work today (a spare inbox, the Promotions tab,
   a spreadsheet) > 4 jobs by team > asked in plain words > Brand G, the 1 real run > questions > early access. Every
   use case screen is an example; every company in an answer is invented. Never name a competitor of ours. */

/* The code example, in the API's own names (pages/developers.ts): the blueprint signs up at each competitor, and every
   result reaches a webhook. */
const CODE = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// A persona signs up at each competitor and keeps the account open
await obsession.blueprints.run("competitor-tracking", {
  competitors: ["fernhollow.example", "northfold.example", "wrenfield.example"],
  persona: { role: "new subscriber", country: "UK" },
})

// Every email, text, offer and price, at your webhook as it lands
await obsession.events.subscribe({
  url: "https://example.com/hooks/obsession",
  events: ["blueprint.result"],
})`

const access = { kind: 'waitlist', button: 'Request early access', interest: 'email-sms' } as const

export const page: Page = {
  meta: {
    path: '/marketing',
    title: 'Competitor emails, texts, offers and prices · Obsession',
    description:
      'A persona signs up at each competitor and keeps every email, text, offer and price it’s sent, dated with a screenshot. No spare inbox, no spreadsheet.',
    answer:
      'A persona you define signs up at each competitor you name and keeps the account open. Every email, text, offer and price it’s sent lands in your event log, dated, with a screenshot.',
    ogImage: '/og/marketing.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Marketing', path: '/marketing' },
    ],
  },

  hero: {
    pill: 'Early access',
    pillTo: '#join',
    headline: 'See every email, text and offer your competitors send.',
    sub: 'A persona you define signs up at each competitor you name and keeps the account open. Every email, text, offer and price it’s sent lands in your event log, dated, with a screenshot.',
    capture: { ...access, source: 'marketing-hero' },
    secondary: { label: 'See sample data', to: '/sample-output' },
    proof: [],
    consoleHeading,
    /* The hero's object: 3 competitors on 3 timelines, a price change caught. */
    screens: [{ tab: 'Competitors', screen: 'rivals', recipe: 'competitor', line: '' }],
  },

  gapPair: {
    heading: 'Most teams still keep up with a spare inbox and a spreadsheet.',
    line: 'A persona at each competitor keeps every message, for as long as you hold it.',
    tools: {
      label: 'What you have today',
      items: [
        'A spare inbox signed up to a few competitors',
        'The Promotions tab, when someone remembers',
        'Screenshots in a sheet nobody updates',
        'Competitor ads in the Meta Ad Library',
      ],
    },
    customer: {
      label: 'What Obsession keeps',
      items: [
        'Every email and text, with the time it arrived',
        'The welcome code and the basket reminder',
        'Member prices beside the public ones',
        'The offer at checkout, past the ad',
        'Any competitor you name, not a fixed list',
      ],
    },
  },

  uses: {
    heading: 'Every team works from the same dated record.',
    items: [
      {
        tab: 'Product marketing',
        moment: 'Friday, 09:14. Competitor B texts subscribers a free gift over £40, the morning after its 20% off ended.',
        outcome: 'Every competitor’s emails, texts and offers on 1 timeline, the day they land.',
        line: 'Each message is kept as it arrived, with its time, its Gmail tab and its sender checked.',
        whyOnly: 'Texts and subscriber codes reach only people who signed up, so the public web never shows them.',
        recipe: 'email-sms',
        screen: 'inbox',
      },
      {
        tab: 'Ecommerce',
        moment: 'Tuesday, 06:00. Competitor B cuts its soy candle from £24 to £19, with free delivery, 4 days before Black Friday.',
        outcome: 'Competitors’ prices, member prices and codes beside yours, every morning.',
        line: 'Each change comes with the page before and after, and the email that announced it.',
        whyOnly: 'Member prices and email-only codes appear only after a sign-up.',
        recipe: 'prices',
        screen: 'prices',
      },
      {
        tab: 'Performance',
        moment: 'Monday, 07:30. Competitor A launches 3 ads. The newest leads to a £56 gift set, £2 under yours.',
        outcome: 'Every competitor ad, followed past the click to the offer and the emails after.',
        line: 'Each new ad comes with its landing page, its price and the first email a new customer gets.',
        whyOnly: 'Ad libraries stop at the ad. The code at checkout and the email after need a sign-up.',
        recipe: 'ads',
        screen: 'ads',
      },
      {
        tab: 'Lifecycle',
        moment: 'Tuesday, 08:00. Your autumn launch goes out, and LAUNCH20 works only for customers who’ve bought before.',
        outcome: 'Your own launch, as a new subscriber gets it, checked in the first minutes.',
        line: 'Every link opened and every code tried, on UK and US numbers, then checked again after the fix.',
        whyOnly: 'A test send reaches only your team. A new subscriber finds the US text that never came.',
        recipe: 'delivery',
        screen: 'campaign',
      },
    ],
  },

  ask: {
    ...askShared,
    heading: 'Ask what your competitors sent, in plain words.',
    line: 'Connect Obsession once to Claude Code or Codex and ask across your event log, or call it from code. Every answer links the emails and pages behind it.',
    areas: ['Competitors', 'Your own list', 'Any company you name'],
    examples: [
      {
        where: 'Claude Code',
        q: 'Compare our Black Friday emails with our 5 closest competitors.',
        a: [
          '2 competitors emailed before you did, on 20 and 21 November.',
          'Your launch email landed in Promotions. Fern Hollow’s landed in Primary.',
          'The deepest offer was 40% off, and Fern Hollow’s page and email both held it.',
        ],
        receipts: 'Screenshots: 14 emails and 3 pages, linked',
      },
      {
        where: 'Codex',
        q: 'Which competitors changed a price since September, and by how much?',
        a: [
          'Northfold cut its starter set from £24 to £19 on 21 October.',
          'Wrenfield kept its prices but added free delivery over £30 on 3 November.',
          'Fern Hollow raised 2 bundles by £5 and said nothing in its emails.',
        ],
        receipts: 'Screenshots: 9 pages, dated and linked',
      },
      { where: 'Code', q: 'Get every new competitor email at our webhook.', file: 'competitors.ts', code: CODE },
    ],
  },

  /* The 1 real run: Brand G, the September store check. */
  proof: {
    heading: 'A £40 basket left at 02:57. No reminder in 48 hours.',
    line: 'Brand G, a real skincare store, on 22 Sep: every email with the time it arrived, and every screenshot. Every competitor you name is kept the same way.',
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from marketing teams.',
    items: [
      {
        q: 'What does Obsession do for a marketing team?',
        a: 'A persona you define signs up at each competitor you name and keeps the account open. Every email, text, offer and price it’s sent lands in your event log, dated, with a screenshot. Ask one question across all of them and get a row for each.',
      },
      {
        q: 'How is this different from an email archive?',
        a: 'An email archive keeps newsletters from its own list of brands. Obsession signs up at any company you name and keeps every step after the sign up: texts, basket reminders, member prices, checkout codes and cancel offers.',
      },
      {
        q: 'Do I have to sign up to competitors myself?',
        a: 'No. The persona signs up, starts trials and fills baskets the way anyone can, from the country you choose, and keeps each account open for months. It has its own inbox and number, so nothing lands in yours.',
      },
      {
        q: 'Where do I see it?',
        a: 'In your event log, by API or MCP from your own agent, or sent where you already work: Slack, Clay, Google Sheets or a webhook.',
      },
      {
        q: 'What does early access include?',
        a: 'API and MCP keys, and a free first run of every blueprint. Tell us which competitors to start with, and we set it up with you.',
      },
    ],
  },

  final: {
    heading: 'Which competitors should we sign up to first?',
    capture: { ...access, source: 'marketing-final' },
  },
}

/* #pricing (James, 21 Nov 2026): 1 tab per blueprint a brand's marketing team runs, its own store first (mystery
   shopping, opening on its Ecommerce brands months: founders, 22 Nov 2026), then the page's own jobs (each opening that
   blueprint's own pricing table, components/BlueprintPricingTabs, from content/catalog). */
export const pricing: PricingTabs = {
  heading: 'What a typical month of each blueprint costs.',
  line: 'Prices are worked out from what each run uses, at list rates.',
  label: 'Blueprints for marketing teams',
  recipes: ['mystery', 'competitor', 'email-sms', 'prices', 'ads', 'delivery'],
  variant: 'mystery-shopper-brands',
}

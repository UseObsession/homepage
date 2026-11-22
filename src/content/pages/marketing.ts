import { askShared } from '../shared5'
import { consoleHeading } from '../console'
import type { Page, PricingTabs } from '../types'

/* Marketing (/marketing), blueprint first (22 Nov 2026 revamp): a team that doesn't code picks a blueprint, names its
   competitors, and a persona signs up at each one and keeps the account open. Competitor tracking leads (the hero), then
   1 tab per blueprint it watches with: emails and texts, trials, prices, ads. Every email, text, offer and price lands
   in the event log, dated, with a screenshot. The page: the hero > the hand work today > the blueprints > asked in
   plain words > Brand G, the 1 real run > a typical month per blueprint > questions > Start free. Every screen is an
   example; every company in an answer is invented. Never name a competitor of ours. */

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

const access = { kind: 'waitlist', button: 'Start free', interest: 'competitor' } as const

const SUB =
  'Pick a blueprint and name your competitors. A persona, an AI agent with its own inbox, number and browser, signs up at each one and keeps the account open. Every email, text, offer and price lands in your event log, dated, with a screenshot.'

export const page: Page = {
  meta: {
    path: '/marketing',
    title: 'Competitor emails, texts, offers and prices · Obsession',
    description:
      'Name your competitors, and an AI agent signs up at each. It keeps every email, text, offer and price they send, dated, with a screenshot. Start free.',
    answer: SUB,
    ogImage: '/og/marketing.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Marketing', path: '/marketing' },
    ],
  },

  hero: {
    pill: 'Watch the market',
    pillTo: '/blueprints/watch-the-market',
    headline: 'See every email, text and offer your competitors send.',
    sub: SUB,
    capture: { ...access, source: 'marketing-hero' },
    secondary: { label: 'See the blueprint', to: '/blueprints/competitor-tracking' },
    proof: [],
    consoleHeading,
    /* The hero's object: 3 competitors on 3 timelines, a price change caught (competitor tracking). */
    screens: [{ tab: 'Competitors', screen: 'rivals', recipe: 'competitor', line: '' }],
  },

  gapPair: {
    heading: 'Most teams still keep up with a spare inbox and a spreadsheet.',
    line: 'A persona at each competitor keeps every message for as long as you watch.',
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
        'Welcome codes, basket reminders and trial offers',
        'Member prices beside the public ones',
        'The page, price and code behind each ad',
        'Every competitor you name, for as long as you like',
      ],
    },
  },

  uses: {
    heading: 'From the welcome email to the last day of a trial, dated.',
    items: [
      {
        tab: 'Emails and texts',
        moment: 'Friday, 09:14. Competitor B texts subscribers a free gift over £40, the morning after its 20% off ended.',
        outcome: 'Every competitor’s emails and texts on 1 timeline, the day they land.',
        line: 'Each message is kept as it arrived, with its time, its Gmail tab and its sender checked.',
        whyOnly: 'Texts and subscriber codes reach only people on the list, so no public page shows them.',
        recipe: 'email-sms',
        screen: 'inbox',
      },
      {
        tab: 'Trials',
        moment: 'Wednesday, 15:00. A competitor’s trial sends 20% off on day 13. Its pricing page shows full price.',
        outcome: 'A competitor’s whole free trial on 1 page, by trial day.',
        line: 'What sign-up asks, the plan’s limits and every email, prompt and offer, each with its date.',
        whyOnly: 'The day-13 offer reaches only trials still open. It’s on no pricing page.',
        recipe: 'trial',
        screen: 'battlecard',
      },
      {
        tab: 'Prices',
        moment: 'Tuesday, 06:00. Competitor B cuts its soy candle from £24 to £19, with free delivery, 4 days before Black Friday.',
        outcome: 'Competitors’ prices, member prices and codes beside yours, every morning.',
        line: 'Each change comes with the page before and after, and the email that announced it.',
        whyOnly: 'Member prices and email-only codes appear only after a sign-up.',
        recipe: 'prices',
        screen: 'prices',
      },
      {
        tab: 'Ads',
        moment: 'Monday, 07:30. Competitor A launches 3 ads. The newest leads to a £56 gift set, £2 under yours.',
        outcome: 'Every new competitor ad, followed to the page, price and code behind it.',
        line: 'A persona reads the ads they run in public each morning and follows each to its offer.',
        whyOnly: 'Ad libraries stop at the ad. The code at checkout and the email after need a sign-up.',
        recipe: 'ads',
        screen: 'ads',
      },
    ],
  },

  ask: {
    ...askShared,
    heading: 'Ask what your competitors sent, in plain words.',
    line: 'Add Obsession to Claude Code or Codex once, then ask across your event log or call it from code. Every answer links the emails and pages behind it.',
    from: { label: 'Ask from', items: ['Claude Code', 'Codex', 'Cursor', 'Your own code'] },
    areas: ['Emails and texts', 'Prices and offers', 'Ads'],
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
    line: 'Brand G, a real skincare store, on 22 Sep. Every email is kept with the time it arrived, beside its screenshot. Every competitor you name is kept the same way.',
    cta: { label: 'See sample data', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from marketing teams.',
    items: [
      {
        q: 'What does Obsession do for a marketing team?',
        a: 'A persona signs up at each competitor you name and keeps the account open. Every email, text, offer and price it’s sent lands in your event log, dated, with a screenshot. Your positioning and launches start from what competitors actually send.',
      },
      {
        q: 'Do I need a developer?',
        a: 'No. Pick a blueprint, name your competitors, and Obsession runs it. Results land in Slack, a sheet, your CRM or a webhook.',
        link: { label: 'Every blueprint that watches the market', to: '/blueprints/watch-the-market' },
      },
      {
        q: 'How is this different from an email archive?',
        a: 'An email archive keeps newsletters from its own list of brands. Obsession signs up at any company you name and keeps every step after the sign-up, from texts and basket reminders to member prices and trial offers.',
      },
      {
        q: 'Will competitors know it’s us?',
        a: 'No. Each persona has its own name, inbox and number. When it talks to a person, it says it’s an AI. It stops before payment, never gets round a CAPTCHA or a bot block, and never clicks paid ads at volume.',
      },
      {
        q: 'What does it cost?',
        a: 'Start on the Free plan, with no credit card. A blueprint is billed on the pieces it uses, and the tabs above show a typical month for each.',
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Which competitors should we sign up to first?',
    sub: 'Start with 3, and watch your launches, offers and conversion rate beside theirs.',
    capture: { ...access, source: 'marketing-final' },
    link: { label: 'Browse blueprints', to: '/blueprints' },
  },
}

/* #pricing: 1 tab per blueprint on this page, each opening that blueprint's own pricing table
   (components/BlueprintPricingTabs, from content/catalog). */
export const pricing: PricingTabs = {
  heading: 'What a typical month of each blueprint costs.',
  line: 'Prices are worked out from what each run uses, at list rates.',
  label: 'Blueprints for marketing teams',
  recipes: ['competitor', 'email-sms', 'trial', 'prices', 'ads'],
}

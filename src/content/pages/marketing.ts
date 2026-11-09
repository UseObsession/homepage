import { askShared } from '../shared5'
import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Marketing (/marketing), the 9 Nov rewrite to Home's story: marketing teams at brands get every competitor's emails,
   texts, offers and prices, as their signed-up customers see them, dated. The page: the hero > the hand work today (a
   spare inbox, the Promotions tab, a spreadsheet) > 4 jobs by team > asked in plain words > Brand G, the 1 real run >
   questions > early access. Every use case screen is an example; every company in an answer is invented. */

/* The code example: a competitor's emails, then one not covered yet added and pushed to a webhook. */
const CODE = `import os
from obsession import Obsession

ob = Obsession(api_key=os.environ["OBSESSION_API_KEY"])

# Every email our competitors sent in the last 30 days
for company in ["fernhollow.example", "northfold.example"]:
    for fact in ob.facts(company, kind="email", since="30d"):
        print(fact.seen_at, company, fact.sentence, fact.receipt_url)

# Not covered yet? Add it, and get each new email at your webhook
ob.index(["wrenfield.example"], how="newsletter")
ob.notify(on="fact.created", destination="https://example.com/hooks/obsession")`

const access = { kind: 'waitlist', button: 'Request early access', interest: 'email-sms' } as const

export const page: Page = {
  meta: {
    path: '/marketing',
    title: 'Competitor emails, texts, offers and prices · Obsession',
    description:
      'Every competitor’s emails, texts, offers and prices, as their signed-up customers get them, each dated with a screenshot. No spare inbox, no spreadsheet.',
    answer:
      'Obsession collects the emails, texts, offers and prices your competitors send their signed-up customers, each dated with a screenshot. Look up any competitor, and one not covered yet is added the day you ask.',
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
    sub: 'Obsession collects the emails, texts, offers and prices your competitors send their signed-up customers, each dated with a screenshot. Look up any competitor, and one not covered yet is added the day you ask.',
    capture: { ...access, source: 'marketing-hero' },
    secondary: { label: 'See sample data', to: '/sample-output' },
    proof: [],
    consoleHeading,
    /* The hero's object: 3 competitors on 3 timelines, a price change caught. */
    screens: [{ tab: 'Competitors', screen: 'rivals', recipe: 'competitor', line: '' }],
  },

  gapPair: {
    heading: 'Most teams still keep up with a spare inbox and a spreadsheet.',
    line: 'Someone signs up to a few competitors, checks the Promotions tab when they remember, and pastes screenshots into a sheet. Obsession keeps every message, for every competitor you name.',
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
    line: 'Connect Obsession once to Claude Code or Codex, or call it from code. Every answer links the emails and pages behind it.',
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
      { where: 'Code', q: 'Get every new competitor email at our webhook.', file: 'competitors.py', code: CODE },
    ],
  },

  /* The 1 real run: Brand G, the September store check. */
  proof: {
    heading: 'A £40 basket left at 02:57. No reminder in 48 hours.',
    line: 'Brand G, a real skincare store, on 22 Sep. Its whole record is the sample data: every email with the time it arrived, and every screenshot. Every competitor you name is kept the same way.',
    cta: { label: 'See the sample data', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from marketing teams.',
    items: [
      {
        q: 'What does Obsession do for a marketing team?',
        a: 'Obsession collects the emails, texts, offers and prices your competitors send their signed-up customers, each dated with a screenshot. Look up one competitor, or ask one question across all of them and get a row for each.',
      },
      {
        q: 'How is this different from MailCharts, Milled or Panoramata?',
        a: 'They keep newsletters for their own list of brands. Obsession covers any company you name, and every step after the sign-up: texts, basket reminders, member prices, checkout codes and cancel offers.',
      },
      {
        q: 'Do I have to sign up to competitors myself?',
        a: 'No. Obsession’s agents sign up, start trials and fill baskets the way any customer can, from the customer profiles and countries you choose, and keep each account open for months. Nothing lands in your inbox.',
      },
      {
        q: 'Where do I see it?',
        a: 'In Obsession, by API or MCP, in your own AI agent, or in a table you already use: Clay, Google Sheets or a webhook.',
      },
      {
        q: 'What does early access include?',
        a: 'API and MCP access, lookups of every company already covered, and up to 5 competitors added to the index for you. We’re onboarding a limited number of teams, and you set it up with the founders.',
      },
    ],
  },

  final: {
    heading: 'Which competitors should we look up first?',
    capture: { ...access, source: 'marketing-final' },
  },
}

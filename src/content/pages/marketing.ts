import { compare, life } from '../shared5'
import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Marketing (/marketing), the October rewrite (COPY.md, "Copy deck > Marketing"). Marketing teams at brands of any
   kind. The buyer's own words first (research/voc.md): "competitor emails", "sign up", "keep an eye on", "Promotions
   tab", "manually"; the job they name most is watching what rivals send, so it leads, then the rest of the funnel.
   The story: what it is for you (rivals' emails, offers and prices, seen as their customer) > what you can't see today
   > 6 jobs by team, each with its screen > how a customer agent lives > how it compares > the real September store
   check > questions > the free store report.
   Every use case screen is an example (its Example tag); the only real run is the September store check. */

export const page: Page = {
  meta: {
    path: '/marketing',
    title: 'Obsession for marketing: every rival email, offer and price',
    description:
      'Obsession’s AI agents sign up to every rival and stay their customer, so marketing teams see each email, text, offer and price the minute it lands.',
    answer:
      'Obsession’s AI agents sign up to every rival on your list and stay their customer, so you see each email, text, offer and price the minute it lands. The same agents check your own ads, launches and checkout the way a customer does.',
    ogImage: '/og/marketing.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Marketing', path: '/marketing' },
    ],
  },

  hero: {
    pill: '',
    headline: 'Every rival email, offer and price, seen as their customer.',
    sub: 'Obsession’s AI agents sign up to every rival on your list and stay their customer, so you see each email, text, offer and price the minute it lands. The same agents check your own ads, launches and checkout the way a customer does.',
    capture: {
      kind: 'waitlist',
      source: 'marketing-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your first watch and tell you about Obsession.',
      interest: 'email-sms',
    },
    secondary: { label: 'Get a free report on your own store', to: '#join' },
    proof: [],
    consoleHeading,
    /* The hero's object: the first use case's screen. */
    screens: [{ tab: 'Rivals', screen: 'rivals', recipe: 'competitor', line: '' }],
  },

  gapPair: {
    heading: 'Your dashboards show what you sent. Only a customer sees what arrived.',
    line: 'Rivals save their best offers for subscribers: the welcome code, the basket reminder, the text the morning after a sale ends. Keeping up by hand means a spare inbox, screenshots and a spreadsheet nobody updates.',
    tools: {
      label: 'What you can see today',
      items: [
        'Rival ads in the Meta Ad Library',
        'Their homepage and pricing page',
        'The newsletters someone remembered to forward',
        'Your own sends, opens and clicks',
      ],
    },
    customer: {
      label: 'What a customer of each rival gets',
      items: [
        'Every email and text the minute it lands, with its Gmail tab',
        'The welcome code and the basket reminder',
        'The offer at checkout, not just on the ad',
        'Every price change, with the page before and after',
        'Whether your own launch code works for a new customer',
      ],
    },
  },

  uses: {
    heading: 'From the first ad to the win back, every team sees what customers see.',
    items: [
      {
        tab: 'Product marketing',
        moment: 'Friday, 09:14. Rival B texts its subscribers a free gift over £40, the morning after its 20% off ended. Your team hears about it next week.',
        outcome: 'Every rival’s emails, texts and offers on 1 timeline, the minute they land.',
        line: 'An agent signs up to each rival with its own inbox and number, and keeps every message, offer and code, with the Gmail tab each email landed in.',
        whyOnly: 'Texts and subscriber codes only reach subscribers. Agents subscribe at every rival on your list at once, and stay.',
        recipe: 'email-sms',
        screen: 'inbox',
      },
      {
        tab: 'Performance',
        moment: 'Monday, 07:04. Ad 4 is spending $410 a day sending clicks to a table lamp that’s sold out.',
        outcome: 'Every live ad checked against the page it lands on, each morning, and the one that can’t sell flagged before the day’s spend.',
        line: 'Each morning, an agent opens the landing page of every live ad on a phone and a desktop, and checks the page loads, the offer and price match, and the product is in stock.',
        whyOnly: 'The sold out sign only shows on the page itself. Your ad dashboard stops at the click; the agent keeps going.',
        recipe: 'adcheck',
        screen: 'adcheck',
      },
      {
        tab: 'Brand and AI search',
        moment: 'Monday, 09:00. A buyer asks an AI assistant for the best in your category. It names 3 rivals and says your Leeds branch has closed.',
        outcome: 'Every wrong fact AI assistants tell your buyers, traced to its source and asked again every Monday until the answer changes.',
        line: 'Agents ask the assistants your buyers use the same questions each week and trace each wrong answer to the page it cites.',
        whyOnly: 'A visibility score counts how often AI names you. An agent asks as a buyer would and keeps the answer word for word.',
        recipe: 'listings',
        screen: 'listings',
      },
      {
        tab: 'Partnerships',
        moment: 'Monday, 07:12. A deals site still shows your summer sale. Its code, SUMMER20, ended on 31 Aug.',
        outcome: 'Every partner’s link, code and banner tried as a customer each week, with a note ready for any that’s out of date.',
        line: 'An agent visits each partner’s page, follows your link to your store and tries their code in your basket.',
        whyOnly: 'Partner reports show the sales that came through. Only a customer’s visit shows the code that turned the rest away.',
        recipe: 'partners',
        screen: 'partners',
      },
      {
        tab: 'Lifecycle',
        moment: 'Tuesday, 08:00. The autumn launch goes out, and LAUNCH20 only works for customers who’ve bought before.',
        outcome: 'Broken codes, links and texts caught in the first minutes, then tested again after the fix.',
        line: 'Test customers on your own list get the launch on phone and desktop, with UK and US numbers. They open every link and try every code.',
        whyOnly: 'A test send only reaches your own team. Agents join your list as new customers, so they catch the US text that never came and the code that refused them.',
        recipe: 'delivery',
        screen: 'campaign',
      },
      {
        tab: 'Ecommerce',
        moment: 'Saturday, 09:16. An AI assistant shopping for a customer adds your linen shirt to the basket, and the basket comes back empty.',
        outcome: 'A real order through every AI checkout into your store each month, refunded, and the fix for any that breaks.',
        line: 'An agent buys through each path an AI shopper can use, on a card capped to that order, inside a monthly budget you set, then checks the order and refunds it.',
        whyOnly: 'A check that stops before payment can’t tell you whether an AI shopper can pay. Agents buy for real on their own capped cards.',
        recipe: 'checkout',
        screen: 'checkout',
      },
    ],
  },

  life,
  compare,

  proof: {
    heading: 'On a real store, 1 shopper left a basket and 1 stopped at checkout. Neither got a reminder in 48 hours.',
    line: 'A skincare store in September 2026, name hidden: 4 test customers, every inbox watched for 48 hours, 15 screenshots. A free report on your own store comes back the same way.',
    cta: { label: 'Read the full report', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from marketing teams.',
    items: [
      {
        q: 'What does Obsession do for a marketing team?',
        a: 'Obsession’s AI agents sign up to every rival on your list and stay their customer, so you see each email, text, offer and price the minute it lands. The same agents check your own ads, launches and checkout the way a customer does.',
      },
      {
        q: 'How is this different from Panoramata, MailCharts or Milled?',
        a: 'They keep what a brand sends to its list, for the brands they cover. Obsession becomes a customer of any company you name, follows the ad, the trial or the basket, and keeps each email with its Gmail tab and its signature checked.',
      },
      {
        q: 'Do I have to sign up to rivals myself?',
        a: 'No. Paste the list, or ask from your own AI agent. Each rival gets its own customer agent, with its own inbox and number, and nothing lands in yours.',
      },
      {
        q: 'Where do I see what they find?',
        a: 'In Slack, a weekly email, a report, your own agent, a sheet or your CRM. Each finding is 1 sentence, with the email, page or price behind it.',
      },
      {
        q: 'What is in the free report?',
        a: 'Test customers shop a store you run: they sign up, leave a basket and stop at checkout, and every inbox is watched for 48 hours. You get what arrived, what never did, and the screenshots.',
      },
    ],
  },

  final: {
    heading: 'See what your own customers get. The first report is free.',
    sub: 'Name a store you run. 4 test customers shop it, every inbox is watched for 48 hours, and your report arrives within 4 days.',
    capture: {
      kind: 'mystery',
      source: 'marketing-final',
      button: 'Get my free report',
      placeholder: 'Store address, e.g. your-store.example',
      micro: 'No store? Leave the address blank and you join the waitlist. We keep your email to send your report and tell you about Obsession.',
      orWaitlist: true,
      interest: 'mystery',
    },
  },
}

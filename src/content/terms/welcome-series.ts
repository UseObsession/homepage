import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/welcome-series: the definition query for the emails a new subscriber gets. "abandoned cart email not
   sending" stays with its post (docs/SEARCH.md §2); this page owns "what is a welcome series". */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Welcome series',
  line: 'The automated emails, and sometimes texts, a company sends a new subscriber in the days after they sign up.',
  meta: {
    path: '/glossary/welcome-series',
    title: 'What is a welcome series? The emails new subscribers receive',
    description:
      'A welcome series is the automated emails a company sends a new subscriber after sign-up, often with a first-order code. What it holds, and who compares it.',
    answer:
      'A welcome series is the set of automated emails, and sometimes texts, a company sends a new subscriber in the days after they sign up, starting with a welcome message that often carries a first-order code. It is the first thing a new customer receives, so CRM teams compare their own with competitors’ email by email.',
    ogImage: '/og/glossary-welcome-series.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Welcome series', path: '/glossary/welcome-series' },
    ],
  },
  title: 'Welcome series: the first emails a company sends a new subscriber',
  dek: 'Type an email address into a pop-up and a sequence starts: a welcome, a code, a story, a reminder that the code runs out. Each brand writes its own.',
  primaryKeyword: 'welcome series',
  keywords: ['what is a welcome series', 'welcome email series', 'welcome series email', 'welcome flow', 'welcome email sequence'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'welcome series',
    alternateName: ['welcome flow', 'welcome email series', 'welcome sequence'],
    definition:
      'A welcome series is the set of automated emails, and sometimes texts, a company sends a new subscriber in the days after they sign up, starting with a welcome message that often carries a first-order code.',
  },
  art: {
    kind: 'log',
    title: 'harbour.example · welcome series',
    who: 'New subscriber, signed up Mon 09:00',
    status: { tone: 'info', text: 'Example' },
    rows: [
      { time: 'Mon 09:01', text: 'Welcome to Harbour', detail: '10% off your first order, code HELLO10', tone: 'ok' },
      { time: 'Tue 09:00', text: 'Why we started Harbour', detail: 'A letter from the founder, no code', tone: 'ok' },
      { time: 'Thu 18:30', text: 'Your 10% ends Sunday', detail: 'The code again, and “we’ll remind you on Sunday”', tone: 'ok' },
      { time: 'Sun 23:59', text: 'No last-chance email', detail: 'Promised on Thursday. Nothing arrived by midnight', tone: 'fail' },
    ],
    foot: 'Harbour is an invented brand. Each time is when the email reached the inbox.',
  },
  blocks: [
    { kind: 'h2', id: 'whats-in-it', text: 'What a welcome series holds' },
    {
      kind: 'p',
      text: 'A welcome series is a [triggered flow](/glossary/triggered-flow), which starts when someone subscribes with no marketer pressing send. Klaviyo’s guide [Getting started with flows](https://help.klaviyo.com/hc/en-us/articles/115002774932) gives it as its first example, a flow triggered when someone subscribes to a newsletter. The emails that follow are each brand’s own choice.',
    },
    {
      kind: 'list',
      items: [
        '**The welcome:** sent within minutes, often with a code for the first order.',
        '**The story:** who the brand is, its best sellers, its reviews.',
        '**The nudge:** a reminder that the code expires.',
        '**The split:** a different path for people who have already bought.',
        '**Texts:** a parallel series for subscribers who also gave a phone number.',
      ],
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why CRM teams and agencies study welcome series' },
    {
      kind: 'p',
      text: 'The welcome series is the first impression a brand makes in the inbox, and it is where many brands put their first-order code. A CRM lead compares their own with competitors’ to see who sends first, how deep the opening discount goes and how many emails follow before it stops. Retention agencies open a pitch with a prospect’s own welcome series, as a new subscriber received it, because a missing or late email is easy to picture.',
    },
    { kind: 'h2', id: 'how-its-seen', text: 'How a welcome series is collected' },
    {
      kind: 'p',
      text: 'By hand, someone signs up to each brand with a spare inbox and logs every email with its time and code, then waits days for the series to finish. An email archive helps when the brand is already on its list.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For a welcome series, that means every email and text from the first welcome to the last, each with the time it arrived after the sign-up. Each is kept raw with its sender checked, so a code, a late send or an email that never came is on file. For your own store, [look up your store’s emails](/lookup) to see whether a new subscriber gets its welcome, and how fast.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'How many emails are in a welcome series?',
          a: 'There is no set number. Brands send anything from a single welcome email to a series over several weeks, and the timing is each brand’s choice.',
        },
        {
          q: 'What is the difference between a welcome email and a welcome series?',
          a: 'A welcome email is the first message after sign-up. A welcome series is that email plus everything the brand sends a new subscriber in the days that follow.',
          link: { label: 'Leak checks for retention agencies', to: '/use-cases/leak-checks-for-retention-agencies' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Getting started with flows',
      publisher: 'Klaviyo Help Center',
      url: 'https://help.klaviyo.com/hc/en-us/articles/115002774932',
      date: '2026-10-07',
    },
  ],
  related: [
    'welcome-email-series-best-practices',
    '/glossary/triggered-flow',
    '/glossary/abandoned-cart-email',
    '/glossary/dkim',
    'recipe:email-sms-tracking',
    '/use-cases/leak-checks-for-retention-agencies',
    'welcome-basket-email-not-sending',
    'competitor-email-tracking-tools',
    'competitor-price-after-welcome-code',
  ],
}

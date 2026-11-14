import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/triggered-flow: the definition query for an automated series started by a customer's action, from
   Klaviyo's own help docs. "abandoned cart email not sending" stays with its post (docs/SEARCH.md §2). */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Triggered flow',
  line: 'An automated series of emails or texts that starts when a customer acts, such as signing up or leaving a basket.',
  meta: {
    path: '/glossary/triggered-flow',
    title: 'What is a triggered flow? Automated emails a customer starts',
    description:
      'A triggered flow is a set of automated emails or texts that starts when a customer acts, such as a sign-up or a basket left behind. How flows work.',
    answer:
      'A triggered flow is a series of automated emails or texts that starts when a customer does something, such as signing up, adding to a basket or placing an order, and sends each message after a set wait. A brand sees its own flows in its email platform, while a competitor’s flows reach only the people who did the thing that starts them.',
    ogImage: '/og/glossary-triggered-flow.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Triggered flow', path: '/glossary/triggered-flow' },
    ],
  },
  title: 'Triggered flow: the emails a customer sets off by acting',
  dek: 'A campaign goes to a list when the marketer presses send. A flow waits for each customer to do something, then sends its messages on that customer’s clock.',
  primaryKeyword: 'triggered flow',
  keywords: ['what is a triggered flow', 'triggered email flow', 'email flow meaning', 'automated email flow', 'flow trigger'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'triggered flow',
    alternateName: ['email flow', 'automated flow', 'triggered email'],
    definition:
      'A triggered flow is a series of automated emails or texts that starts when a customer does something, such as signing up, adding to a basket or placing an order, and sends each message after a set wait.',
  },
  blocks: [
    { kind: 'h2', id: 'how-a-flow-works', text: 'How a triggered flow works' },
    {
      kind: 'p',
      text: 'Klaviyo’s guide [Getting started with flows](https://help.klaviyo.com/hc/en-us/articles/115002774932) defines a flow as a sequence of automated actions, such as sending messages, triggered by a behaviour or event. It names 5 kinds of trigger. A person joins a list or a segment, or takes an action such as placing an order. A date on their profile, such as a birthday, or a price drop on an item they viewed can start one too. Time delays then set the wait between one message and the next.',
    },
    {
      kind: 'list',
      items: [
        '**[Welcome series](/glossary/welcome-series):** starts when someone subscribes.',
        '**[Abandoned cart email](/glossary/abandoned-cart-email):** starts when a shopper adds to a basket or starts checkout and doesn’t buy.',
        '**[Browse abandonment](/blog/browse-abandonment-email):** starts when a known visitor views a product and leaves.',
        '**Post-purchase:** starts when an order is placed, with delivery updates, review requests and cross-sells.',
        '**Win-back:** starts when a customer hasn’t ordered for a set time.',
      ],
    },
    {
      kind: 'p',
      text: 'Klaviyo’s [flow glossary](https://help.klaviyo.com/hc/en-us/articles/360054130591) adds flow filters, which restrict who enters a flow by what a profile has done or holds, and notes they are checked again before each message sends.',
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why CRM teams compare triggered flows' },
    {
      kind: 'p',
      text: 'Flows run every day without anyone pressing send, so they shape what a new customer receives. To see how a competitor treats a new subscriber, a CRM lead needs that competitor’s flows. They show how fast the first email lands, when the discount appears and how many messages follow. Agencies pitching a brand need the brand’s own flows, as a customer receives them, to show what is missing.',
    },
    {
      kind: 'p',
      text: 'Flows also fail quietly. A flow switched off by mistake or a filter set too tight stops a message without any error. Often the first sign is a customer asking why [a welcome or basket email never arrives](/blog/welcome-basket-email-not-sending).',
    },
    { kind: 'h2', id: 'how-its-seen', text: 'How triggered flows are seen from outside' },
    {
      kind: 'p',
      text: 'An email platform such as Klaviyo shows a brand its own flows from the inside. From the outside, the only way to see a flow is to set it off. That means signing up or leaving a basket, then logging every message with the time it arrived.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For a triggered flow, that means each email and text with the minute it arrived after the action that started it. The wait between messages is measured from the inbox.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between a flow and a campaign?',
          a: 'A campaign is one send to a list at a time the marketer chooses. A flow sends to each person when they do something, on a schedule that starts from their action.',
        },
        {
          q: 'Can you see a competitor’s triggered flows?',
          a: 'Only by setting them off as a customer would and keeping what arrives. Their email platform’s reports stay private to them.',
          link: { label: 'Email and SMS tracking', to: '/recipes/email-sms-tracking' },
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
    {
      title: 'Flow glossary',
      publisher: 'Klaviyo Help Center',
      url: 'https://help.klaviyo.com/hc/en-us/articles/360054130591',
      date: '2026-10-08',
    },
  ],
  related: [
    'ecommerce-email-marketing-benchmarks',
    '/glossary/welcome-series',
    '/glossary/abandoned-cart-email',
    '/glossary/dkim',
    'recipe:email-sms-tracking',
    '/use-cases/leak-checks-for-retention-agencies',
    'welcome-basket-email-not-sending',
    'show-clients-every-flow-fired',
    'email-marketing-audit',
  ],
}

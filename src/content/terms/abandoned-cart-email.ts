import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/abandoned-cart-email: the definition query. "abandoned cart email not sending" stays with
   /blog/welcome-basket-email-not-sending (docs/SEARCH.md §2), linked here with that query's words. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Abandoned cart email',
  line: 'An automated email a store sends a shopper who left items in the basket or checkout, to bring them back to buy.',
  meta: {
    path: '/glossary/abandoned-cart-email',
    title: 'What is an abandoned cart email? How basket reminders work',
    description:
      'An abandoned cart email is the reminder a store sends a shopper who left items in the basket or checkout. How it is triggered, timed and compared.',
    answer:
      'An abandoned cart email is an automated email a store sends a shopper who added items to their basket, or started checkout, and left without buying, to bring them back to finish the order. The store can send it only to a shopper it can identify, so a competitor’s reminders, their timing and the codes in them reach only shoppers who left a basket there.',
    ogImage: '/og/glossary-abandoned-cart-email.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Abandoned cart email', path: '/glossary/abandoned-cart-email' },
    ],
  },
  title: 'Abandoned cart email: the reminder a store sends when you leave a basket',
  dek: 'A shopper fills a basket, types an email address at checkout and closes the tab. What the store sends next, and how fast, decides whether the order comes back.',
  primaryKeyword: 'abandoned cart email',
  keywords: ['what is an abandoned cart email', 'abandoned cart email meaning', 'abandoned checkout email', 'cart abandonment email', 'abandoned cart flow'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'abandoned cart email',
    alternateName: ['abandoned checkout email', 'cart abandonment email', 'basket reminder email'],
    definition:
      'An abandoned cart email is an automated email a store sends a shopper who added items to their basket, or started checkout, and left without buying, to bring them back to finish the order.',
  },
  art: {
    kind: 'log',
    title: 'fernway.example · basket left',
    who: 'Shopper who entered an email at checkout, left Mon 22:40',
    status: { tone: 'info', text: 'Example' },
    rows: [
      { time: 'Mon 23:41', text: 'Still thinking it over?', detail: 'The basket, with a link back to checkout', tone: 'ok' },
      { time: 'Tue 22:40', text: 'Your basket is waiting', detail: 'Same items, no code', tone: 'ok' },
      { time: 'Thu 10:00', text: '10% off to finish your order', detail: 'Code SAVE10', tone: 'ok' },
      { time: 'Thu 10:03', text: 'SAVE10 at checkout', detail: '“This code is not valid”', tone: 'fail' },
    ],
    foot: 'Fernway is an invented store. Each time is when the email reached the inbox or the code was tried.',
  },
  blocks: [
    { kind: 'h2', id: 'how-it-is-triggered', text: 'How an abandoned cart email is triggered' },
    {
      kind: 'p',
      text: 'An abandoned cart email is a [triggered flow](/glossary/triggered-flow) that starts when a known shopper leaves without buying. Klaviyo’s [flow glossary](https://help.klaviyo.com/hc/en-us/articles/360054130591) says these flows use Started Checkout or Added to Cart as the trigger. Shopify’s help page on [abandoned checkouts](https://help.shopify.com/en/manual/orders/abandoned-checkouts) counts a checkout as abandoned if it stays incomplete for more than 10 minutes after the customer gives an email address. A store can then send an email automatically.',
    },
    {
      kind: 'p',
      text: 'The two triggers reach different shoppers. A checkout reminder needs only the email typed into the checkout form. A basket reminder needs a shopper the store already knows, such as a subscriber or a signed-in account, because an anonymous visitor leaves no address to write to.',
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why CRM teams compare abandoned cart emails' },
    {
      kind: 'p',
      text: 'The reminder reaches shoppers at the point they were closest to buying, so its timing and its offer move revenue directly. A CRM lead compares their own with competitors’: how long the first reminder takes, whether a code appears and when, and whether that code works at checkout. A shopper who gets a better code from a competitor the same evening may not come back at all.',
    },
    { kind: 'h2', id: 'how-its-seen', text: 'How abandoned cart emails are collected' },
    {
      kind: 'p',
      text: 'An email platform such as Klaviyo reports a brand’s own sends and recoveries. To see what a shopper receives, someone has to fill a basket, enter an email and leave. Then they log each reminder with its time and try any code it carries.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For abandoned cart emails, that means each reminder with the minute it arrived after the basket was left, and the code it carried. Whether that code worked at checkout is kept beside it, dated. For your own store, [look up your store’s emails](/lookup) to see which reminders a new customer gets, and how fast.`,
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between an abandoned cart email and an abandoned checkout email?',
          a: 'An abandoned cart email follows a basket left before checkout, so it can reach only a shopper the store already knows. An abandoned checkout email follows a checkout started and left, using the email address typed into the checkout form.',
        },
        {
          q: 'When does an abandoned cart email arrive?',
          a: 'When the store sets it to, as a wait in the flow. Shopify counts a checkout as abandoned once it has stayed incomplete for 10 minutes, and the store chooses how long to wait after that.',
          link: { label: 'Why a welcome or basket email never arrives', to: '/blog/welcome-basket-email-not-sending' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Flow glossary',
      publisher: 'Klaviyo Help Center',
      url: 'https://help.klaviyo.com/hc/en-us/articles/360054130591',
      date: '2026-10-08',
    },
    {
      title: 'Abandoned checkouts',
      publisher: 'Shopify Help Center',
      url: 'https://help.shopify.com/en/manual/orders/abandoned-checkouts',
    },
  ],
  related: [
    '/glossary/triggered-flow',
    '/glossary/welcome-series',
    '/glossary/dkim',
    'recipe:email-sms-tracking',
    '/use-cases/leak-checks-for-ecommerce-stores',
    'welcome-basket-email-not-sending',
    'black-friday-checklist-new-customer',
    'shopify-checkout-not-working',
  ],
}

import type { Recipe } from '../types'

/* Email and SMS tracking (/blueprints/email-sms-tracking). Watch other companies. Screen: inbox.
   The persona version (20 Nov 2026): a persona the reader defines subscribes to every brand on their list, with its
   own inbox and texting number, and keeps every email and text each brand sends, with its offer, code and arrival
   time, side by side on 1 timeline. Where Competitor tracking is every event from 1 competitor, this is the inbox
   across every brand. When the watch ends the persona texts STOP and checks the texts stop. Sold as designed: no
   index, no "already covered", no caps. The run and the table tell the same story as the `inbox` screen (Competitor B
   swaps 20% off for a free gift). Example. */

export const recipe: Recipe = {
  id: 'email-sms',
  slug: 'email-sms-tracking',
  name: 'Email and SMS tracking',
  group: 'Watch other companies',
  line: 'A persona on every brand’s list keeps each email and text, and shows who discounts first.',
  gets: 'Every email and text each brand sends, on 1 timeline, with the welcome series mapped.',
  kit: [
    'A persona subscribed to each brand, in your country',
    'Its own inbox',
    'Its own texting number',
    'Every email kept with its arrival time',
    'Every text kept as it arrived',
    'A weekly summary',
  ],

  meta: {
    path: '/blueprints/email-sms-tracking',
    title: 'Track competitors’ emails and texts, timed to the minute',
    description:
      'A persona subscribes to each competitor’s emails and texts and keeps every message, offer and code with its arrival time, on 1 timeline. By API or Slack.',
    answer:
      'Email and SMS tracking subscribes to each competitor’s emails and texts as a persona you define, with its own inbox and number. Every message, offer and code lands on 1 timeline with its arrival time.',
    ogImage: '/og/email-sms-tracking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Email and SMS tracking', path: '/blueprints/email-sms-tracking' },
    ],
  },

  hero: {
    headline: 'Every email and text your competitors send, side by side.',
    sub: 'Email and SMS tracking subscribes to each competitor’s emails and texts as a persona you define, with its own inbox and number. Every message, offer and code lands on 1 timeline with its arrival time.',
    screen: 'inbox',
    capture: {
      kind: 'waitlist',
      source: 'recipe-email-sms-tracking-hero',
      button: 'Start free',
      interest: 'email-sms',
    },
  },

  unit: 'email and SMS check',
  per: 'brand',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['A persona with its own inbox and texting number', 'Every email and text, with the time it arrived', 'The welcome series mapped from the first email'] },
    { name: 'Starter', includes: ['Each offer and code pulled out, with a screenshot', 'STOP texted, and checked, when a watch ends', 'A weekly summary'] },
    { name: 'Growth', includes: ['Who sends most, who discounts first, and whose offer beats yours', 'Alerts on a new offer, a busier schedule or a new sender'] },
    { name: 'Scale', includes: ['Every message as a row in Clay or a sheet', 'A monthly report you can share'] },
  ],

  run: {
    tab: '3 competitors, 30 days',
    recipe: 'email-sms',
    task: 'Subscribe to our 3 competitors’ emails and texts as a new subscriber in the UK. Log every message and flag every new offer.',
    targets: 'competitor-a.example, competitor-b.example, competitor-c.example',
    journey: ['Sign up to emails', 'Opt in to texts', 'Log every message', 'Flag every new offer'],
    schedule: 'Continuously, summary Mondays at 08:00',
    report: 'Slack for new offers, a weekly summary',
    kit: ['Persona: subscriber, UK', '3 inboxes', '3 texting numbers', 'Every message kept as it arrived'],
    events: [
      { time: 'Thu 08:30', text: 'Competitor A email: “The autumn edit is here”, no offer.' },
      { time: 'Thu 10:00', text: 'Competitor B text: last day for 20% off everything.' },
      { time: 'Thu 12:30', text: 'Competitor C email: free delivery, all week.' },
      { time: 'Thu 19:02', text: 'Competitor B email: “Ends tonight”, its 2nd 20% reminder in 24 hours.' },
      { time: 'Fri 09:14', text: 'Competitor B text: the 20% is gone. Now a free gift over £40, this weekend only.' },
    ],
    finding: 'Competitor B swapped 20% off for a free gift over £40 the morning after its sale ended.',
    fix: 'Posted to #competitors in Slack, and added to your table with the text itself.',
    ledger: 'Every message kept as it arrived, and dated.',
  },

  steps: [
    {
      title: 'Name the brands',
      line: 'Paste them, upload a CSV, connect Clay or call the API.',
    },
    {
      title: 'Define the persona',
      line: 'A new subscriber in the UK, or a lapsed one in the US.',
    },
    {
      title: 'The persona subscribes to each',
      line: 'From the public sign up form, and stays on the list as long as you like.',
    },
    {
      title: 'Every message lands, dated',
      line: 'With its sender, subject, offer and code.',
    },
  ],

  checks: [
    {
      group: 'Emails',
      items: [
        { title: 'The welcome series', line: 'Every step from sign up, the gap between each, and the offer each one carries.' },
        { title: 'Every campaign', line: 'Time, sender, subject, preview and offer, with a screenshot and the original email.' },
        { title: 'How often, and when', line: 'Emails a week, when they go out, and how that changes in a sale.' },
        { title: 'How the offer grows', line: 'The discount, day by day, for subscribers who haven’t bought.' },
      ],
    },
    {
      group: 'Texts',
      items: [
        { title: 'Opting in', line: 'How you join, and the text that confirms it.' },
        { title: 'Every text', line: 'Sender, time and offer, with each short link followed to its page.' },
        { title: 'After STOP', line: 'When the watch ends, the persona texts STOP and checks the texts stop.' },
      ],
    },
    {
      group: 'Across every brand',
      items: [
        { title: 'Side by side', line: 'Who sends most, who discounts first, and whose offer beats yours.' },
        { title: 'Changes', line: 'A new offer, a busier schedule or a new sender, flagged the day it starts.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every competitor message on 1 timeline, the minute it lands.',
    items: [
      { format: 'Slack', line: 'When a competitor starts a new offer, with the message attached.' },
      { format: 'Weekly summary', line: 'What changed since last week, in a few lines. A quiet week stays quiet.' },
      { format: 'PDF teardown', line: 'A competitor’s welcome series and offers, mapped, in your name.' },
      { format: 'A table, webhook or API', line: 'Each message as a row in Clay, JSON at your endpoint, or an API event.' },
    ],
  },

  settings: [
    { k: 'Brands', v: 'Competitors, a whole category, or a list of accounts' },
    { k: 'Persona', v: 'Who subscribes, and the country it connects from' },
    { k: 'Channels', v: 'Email, texts or both' },
    { k: 'Alerts', v: 'New offers only, or every message' },
    { k: 'Summary', v: 'Weekly or monthly' },
  ],

  table: {
    heading: 'In 30 days, Competitor B sent 18 messages. Competitor C sent 7.',
    line: '3 competitors, counted from the day of sign up.',
    cols: ['Competitor A', 'Competitor B', 'Competitor C'],
    rows: [
      { label: 'Emails', values: ['9', '14', '6'] },
      { label: 'Texts', values: ['2', '4', '1'] },
      { label: 'First email after sign up', values: ['2 min', '1 min', '6 hours'] },
      { label: 'Welcome steps', values: ['4 in 7 days', '6 in 10 days', '2 in 3 days'] },
      { label: 'Best offer', values: ['15% off', '20% off, then a free gift', 'Free delivery all week'] },
    ],
  },

  faq: {
    heading: 'Every message kept exactly as it arrived, with its time.',
    items: [
      {
        q: 'How do I see what competitors email without a spare inbox?',
        a: 'Name them. Email and SMS tracking subscribes as a persona with its own inbox and texting number, and logs every email, text, offer and code with its arrival time and a screenshot.',
        link: { label: 'See inboxes for AI agents', to: '/email' },
      },
      {
        q: 'Where do the messages come from?',
        a: 'From real subscriptions. The persona signs up the way anyone can, from the country you choose, and stays on each list for months.',
        link: { label: 'See how a persona works', to: '/personas' },
      },
      {
        q: 'Does it ever reply or buy?',
        a: 'Only if you set it to. When the persona talks to a person, it says it’s an AI. When the watch ends, it texts STOP.',
      },
      {
        q: 'When do events start landing in my event log?',
        a: 'The day the persona subscribes. From then on every message is kept in order, with the welcome series mapped from the first email.',
      },
      { q: 'Can it follow our own emails too?', a: 'Yes. Name your own brand, and your messages sit next to every competitor’s.' },
      {
        q: 'How is it different from an email archive?',
        a: 'An email archive keeps newsletters from its own list of brands. Email and SMS tracking covers any brand you name, texts included, as the persona you define.',
      },
      {
        q: 'What does Email and SMS tracking cost?',
        a: 'It’s billed on the pieces it uses, at list rates. Each persona uses an inbox and a texting number. A persona is free while it waits. Try it on the Free plan.',
        link: { label: 'See phone numbers for AI agents', to: '/phone' },
      },
    ],
  },

  final: {
    heading: 'Get every competitor’s emails and texts without signing up yourself.',
    sub: 'Try it on the Free plan with the brands you watch most.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-email-sms-tracking-final',
      button: 'Start free',
      interest: 'email-sms',
    },
    link: { label: 'See the Watch the market kit', to: '/kits/watch-the-market' },
  },
}

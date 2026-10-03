import type { Capture, Recipe } from '../types'

/* Email and SMS tracking (/recipes/email-sms-tracking). Watch rivals. Screen: inbox.
   New page (our version's "Email and SMS tracking", built on James's Competitor tracking checks: the welcome series
   mapped and timed, every text with its short links followed, what happens after STOP, the record dated from the
   sign up, quiet weeks staying quiet). Where Competitor tracking is the whole record of 1 rival, this is the inbox
   across every brand on your list, side by side.
   A declared AI subscriber to rivals' newsletters and texts: public sign ups and text opt ins only. It never replies,
   never buys and never contacts staff, and it links to useobsession.com/agents without naming the customer. The only
   text it ever sends is STOP, when the watch ends (the opt out ladder the review set). Our version's demo left a
   basket at every rival: removed (no baskets at rivals).
   The run and the table tell the same story as the `inbox` screen and the Marketing page (Rival B swaps 20% off for
   a free gift; 30 days from 3 Sep; Rival A 9 emails and 2 texts, Rival B 14 and 4, Rival C 6 and 1). Example. */

const roles: Capture['roles'] = {
  question: 'Whose rivals should we subscribe to first?',
  options: ['Ours', 'A client’s', 'Both'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'email-sms',
  slug: 'email-sms-tracking',
  name: 'Email and SMS tracking',
  group: 'Watch rivals',
  line: 'Subscribes to every brand on your list and sets their emails and texts side by side: who sends most, and who discounts first.',
  gets: 'Every email and text each rival sends, on 1 timeline, with the welcome series mapped.',
  kit: [
    'A declared AI agent per brand',
    'Its own inbox',
    'Its own texting number',
    'Every message kept as it arrived',
    'A weekly digest',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/email-sms-tracking',
    title: 'Email and SMS tracking: AI agents on every rival’s list',
    description:
      'A declared AI agent subscribes to each rival’s emails and texts, never replies, and logs every message, offer and code on 1 timeline, continuously.',
    answer:
      'Email and SMS tracking subscribes a declared AI agent to each rival’s emails and texts. It never replies, and logs every message, offer and code on 1 timeline, continuously.',
    ogImage: '/og/email-sms-tracking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Email and SMS tracking', path: '/recipes/email-sms-tracking' },
    ],
  },

  hero: {
    headline: 'AI agents that join every rival’s emails and texts and log every offer.',
    sub: 'Email and SMS tracking subscribes a declared AI agent to each rival’s emails and texts. It never replies, and logs every message, offer and code on 1 timeline, continuously.',
    screen: 'inbox',
    capture: {
      kind: 'waitlist',
      source: 'recipe-email-sms-tracking-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'email-sms',
    },
  },

  run: {
    tab: 'Example: 3 rivals, 30 days',
    recipe: 'email-sms',
    task: 'Subscribe to our 3 rivals’ emails and texts. Log every message and flag every new offer.',
    targets: 'rival-a.example, rival-b.example, rival-c.example',
    journey: ['Sign up, declared as AI', 'Opt in to texts', 'Never reply', 'Log every message'],
    schedule: 'Continuously, digest Mondays at 08:00',
    report: 'Slack alerts, weekly digest',
    kit: ['Agent ID, declared as AI', '3 inboxes', '3 texting numbers', 'Every message kept as it arrived'],
    events: [
      { time: 'Thu 08:30', text: 'Rival A email: “The autumn edit is here”, no offer.' },
      { time: 'Thu 10:00', text: 'Rival B text: last day for 20% off everything.' },
      { time: 'Thu 12:30', text: 'Rival C email: free delivery, all week.' },
      { time: 'Thu 19:02', text: 'Rival B email: “Ends tonight”, its 2nd 20% reminder in 24 hours.' },
      { time: 'Fri 09:14', text: 'Rival B text: the 20% is gone. Now a free gift over £40, this weekend only.' },
    ],
    finding: 'Rival B swapped 20% off for a free gift over £40 the morning after its sale ended.',
    fix: 'A weekend email for your list that answers it, drafted for your OK.',
    ledger: 'Example run. Every message kept as it arrived, dated and signed.',
  },

  steps: [
    {
      title: 'Add the brands',
      line: 'Your rivals, a whole category, or a list of accounts. Paste them, upload a CSV, connect Clay or use the API.',
    },
    {
      title: 'An agent subscribes to each',
      line: 'With its own inbox and texting number, from the sign up any customer can use. It says it’s AI and never replies.',
    },
    {
      title: 'Every message is logged',
      line: 'Time, sender, subject, offer and code, with a screenshot and the original message.',
    },
    {
      title: 'You get what changed',
      line: 'An alert when a rival starts a new offer, and a weekly digest of everything sent.',
    },
  ],

  checks: [
    {
      group: 'Emails',
      items: [
        { title: 'The welcome series', line: 'Every step from sign up, the gap between each, and the offer each one carries.' },
        { title: 'Every campaign', line: 'Time, sender, subject, preview and offer, with a screenshot and the original email.' },
        { title: 'How often, and when', line: 'Emails a week, the days and hours they go out, and how that changes in a sale.' },
        { title: 'How the offer grows', line: 'The discount, day by day, for subscribers who haven’t bought.' },
      ],
    },
    {
      group: 'Texts',
      items: [
        { title: 'Opt in and confirmation', line: 'How you join, and the text that confirms it.' },
        { title: 'Every text', line: 'Sender, time and offer, with each short link followed to its page.' },
        { title: 'After STOP', line: 'When the watch ends, the agent texts STOP and checks the texts really stop.' },
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
    heading: 'Every rival message on 1 timeline the minute it lands, and every new offer in Slack.',
    items: [
      { format: 'Slack alert', line: 'When a rival starts a new offer, with the message attached.' },
      { format: 'Timeline', line: 'Every email and text from every brand, in date order, each with its proof.' },
      { format: 'Weekly digest', line: 'What changed since last week, in a few lines. A quiet week stays quiet.' },
      { format: 'PDF teardown', line: 'A rival’s welcome series and offers, mapped, in your name.' },
      { format: 'Sheet, Clay or webhook', line: 'Each message as a row, a column or JSON.' },
    ],
  },

  settings: [
    { k: 'Brands', v: 'Rivals, a whole category, or a list of accounts' },
    { k: 'Channels', v: 'Email, texts or both' },
    { k: 'Country', v: 'Where each agent subscribes from' },
    { k: 'Alerts', v: 'New offers only, or every message' },
    { k: 'Digest', v: 'Weekly or monthly' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Every offer your rivals send, the minute it lands.' },
    { audience: 'agencies', line: 'A rival teardown for every client, in your name. A research service you sell.' },
    { audience: 'founders', line: 'See what each rival sends a new customer in the first month.' },
    { audience: 'sales', line: 'Join every lost account’s list and know the day something changes.' },
  ],

  table: {
    heading: 'In 30 days, Rival B sent 18 messages. Rival C sent 7.',
    line: 'Example: 3 rivals, counted from the day the agent subscribed.',
    cols: ['Rival A', 'Rival B', 'Rival C'],
    rows: [
      { label: 'Emails', values: ['9', '14', '6'] },
      { label: 'Texts', values: ['2', '4', '1'] },
      { label: 'First email after sign up', values: ['2 min', '1 min', '6 hours'] },
      { label: 'Welcome steps', values: ['4 in 7 days', '6 in 10 days', '2 in 3 days'] },
      { label: 'Best offer', values: ['15% off', '20% off, then a free gift', 'Free delivery all week'] },
    ],
  },

  faq: {
    heading: 'Every subscriber says it’s an AI agent, and never writes back.',
    items: [
      {
        q: 'How do I see what competitors email, including their welcome emails, without a burner inbox?',
        a: 'Email and SMS tracking subscribes a declared AI agent with its own inbox and texting number to each rival. It never replies, and logs every welcome email, text, offer and code with its time.',
      },
      {
        q: 'What’s it worth?',
        a: 'Email and SMS tracking gives your team up to 18 hours a month back, if it spends 90 minutes a week on each of 3 rivals. The agents do the checking, and you read what changed.',
      },
      {
        q: 'Do rivals know it’s an AI agent?',
        a: 'Yes. Every Obsession agent subscribes as an AI agent and links to useobsession.com/agents, a page explaining Obsession. It never names you.',
      },
      {
        q: 'Does Email and SMS tracking ever reply, buy or contact staff?',
        a: 'Never. Email and SMS tracking reads what arrives and opens links to public pages. The only text it sends is STOP, when the watch ends.',
      },
      {
        q: 'Can you show what they sent before?',
        a: 'No. Email and SMS tracking’s record starts the minute the agent subscribes, so every message is dated from a known sign up and the welcome series shows in order. Any brand you name, the same day.',
      },
      {
        q: 'Can Email and SMS tracking follow our own emails and texts too?',
        a: 'Yes. Email and SMS tracking joins your own list, or a client’s with their OK, so your messages sit next to every rival’s.',
      },
      {
        q: 'How many brands can Email and SMS tracking follow?',
        a: 'Email and SMS tracking follows as many as you add. Each gets its own agent, inbox and number, continuously.',
      },
    ],
  },

  final: {
    heading: 'Get every rival’s emails and texts without signing up yourself.',
    sub: 'Join the waitlist. Email and SMS tracking comes ready to run on the rivals you name.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-email-sms-tracking-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'email-sms',
    },
  },
}

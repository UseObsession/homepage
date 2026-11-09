import type { Recipe } from '../types'

/* Email and SMS tracking (/recipes/email-sms-tracking). A ready-made collection (9 Nov): a subscription at every brand
   on the reader's list, as the customer profile they pick, and every email and text each one sends, with its offer,
   code and arrival time, side by side on 1 timeline. Where Competitor tracking is the whole record of 1 competitor,
   this is the inbox across every brand. When the watch ends it texts STOP and checks the texts stop. The run and the
   table tell the same story as the `inbox` screen (Competitor B swaps 20% off for a free gift). Example. */

export const recipe: Recipe = {
  id: 'email-sms',
  slug: 'email-sms-tracking',
  name: 'Email and SMS tracking',
  group: 'Watch other companies',
  line: 'Every email and text the brands on your list send a subscriber, side by side: who sends most, and who discounts first.',
  gets: 'Every email and text each brand sends, on 1 timeline, with the welcome series mapped.',
  kit: [
    'A subscription at each brand, in your country',
    'An inbox for each',
    'A texting number for each',
    'Every email kept with its arrival time',
    'Every text kept as it arrived',
    'A weekly summary',
  ],

  meta: {
    path: '/recipes/email-sms-tracking',
    title: 'Email and SMS tracking: every competitor message, dated',
    description:
      'Every email and text each competitor sends a subscriber, with the offer, code and time it arrived, on 1 timeline. By API, MCP, Clay or Slack.',
    answer:
      'Email and SMS tracking subscribes to each competitor’s emails and texts and records every message, offer and code on 1 timeline, each with the time it arrived.',
    ogImage: '/og/email-sms-tracking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Email and SMS tracking', path: '/recipes/email-sms-tracking' },
    ],
  },

  hero: {
    headline: 'Every email and text your competitors send, side by side.',
    sub: 'Email and SMS tracking subscribes to each competitor’s emails and texts and records every message, offer and code on 1 timeline, each with the time it arrived.',
    screen: 'inbox',
    capture: {
      kind: 'waitlist',
      source: 'recipe-email-sms-tracking-hero',
      button: 'Request early access',
      interest: 'email-sms',
    },
  },

  run: {
    tab: 'Example: 3 competitors, 30 days',
    recipe: 'email-sms',
    task: 'Subscribe to our 3 competitors’ emails and texts as a UK customer. Log every message and flag every new offer.',
    targets: 'competitor-a.example, competitor-b.example, competitor-c.example',
    journey: ['Sign up to emails', 'Opt in to texts', 'Log every message', 'Flag every new offer'],
    schedule: 'Continuously, summary Mondays at 08:00',
    report: 'Slack for new offers, a weekly summary',
    kit: ['Profile: subscriber, UK', '3 inboxes', '3 texting numbers', 'Every message kept as it arrived'],
    events: [
      { time: 'Thu 08:30', text: 'Competitor A email: “The autumn edit is here”, no offer.' },
      { time: 'Thu 10:00', text: 'Competitor B text: last day for 20% off everything.' },
      { time: 'Thu 12:30', text: 'Competitor C email: free delivery, all week.' },
      { time: 'Thu 19:02', text: 'Competitor B email: “Ends tonight”, its 2nd 20% reminder in 24 hours.' },
      { time: 'Fri 09:14', text: 'Competitor B text: the 20% is gone. Now a free gift over £40, this weekend only.' },
    ],
    finding: 'Competitor B swapped 20% off for a free gift over £40 the morning after its sale ended.',
    fix: 'Posted to #competitors in Slack, and added to your table with the text itself.',
    ledger: 'Example run. Every message kept as it arrived, and dated.',
  },

  steps: [
    {
      title: 'Name the brands',
      line: 'Your competitors, a whole category, or a list of accounts. Paste them, upload a CSV, connect Clay or call the API.',
    },
    {
      title: 'Pick the profile',
      line: 'A new subscriber in the UK, a lapsed one in the US. Each gets its own inbox and texting number.',
    },
    {
      title: 'Obsession subscribes to each',
      line: 'From the sign-up any customer can use, and stays on the list.',
    },
    {
      title: 'Every message lands, dated',
      line: 'Time, sender, subject, offer and code, with a screenshot and the original message.',
    },
  ],

  checks: [
    {
      group: 'Emails',
      items: [
        { title: 'The welcome series', line: 'Every step from sign-up, the gap between each, and the offer each one carries.' },
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
        { title: 'After STOP', line: 'When the watch ends, Obsession texts STOP and checks the texts stop.' },
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
      { format: 'Timeline', line: 'Every email and text from every brand, in date order, each with its screenshot.' },
      { format: 'Weekly summary', line: 'What changed since last week, in a few lines. A quiet week stays quiet.' },
      { format: 'PDF teardown', line: 'A competitor’s welcome series and offers, mapped, in your name.' },
      { format: 'A table, webhook or API', line: 'Each message as a row in Clay, JSON at your endpoint, or a fact from the API.' },
    ],
  },

  settings: [
    { k: 'Brands', v: 'Competitors, a whole category, or a list of accounts' },
    { k: 'Profile', v: 'Who subscribes, and from which country' },
    { k: 'Channels', v: 'Email, texts or both' },
    { k: 'Alerts', v: 'New offers only, or every message' },
    { k: 'Summary', v: 'Weekly or monthly' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Every offer your competitors send, the minute it lands.' },
    { audience: 'agencies', line: 'A competitor teardown for every client, in your name.' },
    { audience: 'founders', line: 'See what each competitor sends a new customer in the first month.' },
    { audience: 'sales', line: 'Stay on every lost account’s list and know the day something changes.' },
  ],

  table: {
    heading: 'In 30 days, Competitor B sent 18 messages. Competitor C sent 7.',
    line: 'Example: 3 competitors, counted from the day of sign-up.',
    cols: ['Competitor A', 'Competitor B', 'Competitor C'],
    rows: [
      { label: 'Emails', values: ['9', '14', '6'] },
      { label: 'Texts', values: ['2', '4', '1'] },
      { label: 'First email after sign-up', values: ['2 min', '1 min', '6 hours'] },
      { label: 'Welcome steps', values: ['4 in 7 days', '6 in 10 days', '2 in 3 days'] },
      { label: 'Best offer', values: ['15% off', '20% off, then a free gift', 'Free delivery all week'] },
    ],
  },

  faq: {
    heading: 'Every message kept exactly as it arrived, with its time.',
    items: [
      {
        q: 'How do I see what competitors email without a spare inbox?',
        a: 'Name them. Obsession subscribes with its own inbox and texting number, and logs every welcome email, text, offer and code with the time it arrived and a screenshot.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real subscriptions. Obsession’s agents sign up the way any customer can, from the profile and country you choose, and stay on each list for months.',
      },
      {
        q: 'Does it ever reply or buy?',
        a: 'Only if you set it to. When it talks to a person, it says it’s an AI. When the watch ends, it texts STOP.',
      },
      {
        q: 'Can you show what they sent before?',
        a: 'If the brand is already covered, its history comes back at once, with the welcome series in order. If not, Watch it, and the record starts that day.',
      },
      { q: 'Can it follow our own emails too?', a: 'Yes. Name your own brand, and your messages sit next to every competitor’s.' },
      {
        q: 'How is it different from an email archive?',
        a: 'Archives like MailCharts and Milled keep newsletters from their own list of brands. Email and SMS tracking covers any brand you name, texts included, from the profile you pick.',
      },
    ],
  },

  final: {
    heading: 'Get every competitor’s emails and texts without signing up yourself.',
    sub: 'Early access includes every brand already covered, and up to 5 added for you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-email-sms-tracking-final',
      button: 'Request early access',
      interest: 'email-sms',
    },
  },
}

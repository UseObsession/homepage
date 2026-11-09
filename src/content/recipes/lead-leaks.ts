import type { Recipe } from '../types'

/* Speed to lead (/recipes/lead-leaks; /recipes/speed-to-lead redirects here, public/_redirects; the id stays 'speed').
   Recast 9 Nov (James rejected selling speed-to-lead alerts to the companies that leak leads): a ready-made
   collection of how fast, and how well, other companies answer a new enquiry, for the competitors, prospects or market
   the reader names. Obsession asks by form, chat, email and phone as the buyer profile the reader picks, says it is an
   AI to anyone who talks to it, and times and keeps every reply. Who asked is never shown. The run and the table are
   1 example (5 invented payroll companies at .example addresses) and say so. */

export const recipe: Recipe = {
  id: 'speed',
  slug: 'lead-leaks',
  name: 'Speed to lead',
  group: 'Check your own journeys',
  line: 'How fast, and how well, companies answer a new enquiry by form, chat, email and phone.',
  gets: 'Each company’s time to first reply on every channel, what the reply said, and the enquiries nobody answered.',
  kit: [
    'An enquiry at each company, as the buyer you pick',
    'An inbox and phone number for each enquiry',
    'Forms, chat, email and phone',
    'Enquiries at the hours you choose',
    'Every reply timed to the second',
    'Every reply kept: the email, the transcript, the call',
  ],

  meta: {
    path: '/recipes/lead-leaks',
    title: 'Speed to lead data: how fast companies answer · Obsession',
    description:
      'How fast companies answer a new enquiry by form, chat, email and phone, and what they say. Every reply timed and kept, for any company you name.',
    answer:
      'Speed to lead records how fast, and how well, companies answer a new enquiry. Obsession asks by form, chat, email and phone, as the buyer profile you pick, and times and keeps every reply.',
    ogImage: '/og/lead-leaks.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Speed to lead', path: '/recipes/lead-leaks' },
    ],
  },

  hero: {
    headline: 'How fast every company answers a new enquiry.',
    sub: 'Speed to lead records how fast, and how well, companies answer a new enquiry. Obsession asks by form, chat, email and phone, as the buyer profile you pick, and times and keeps every reply.',
    screen: 'inbound',
    capture: {
      kind: 'waitlist',
      source: 'recipe-speed-hero',
      button: 'Request early access',
      interest: 'speed',
    },
  },

  run: {
    tab: 'Example: 5 payroll companies, 1 demo request',
    recipe: 'speed',
    task: 'Ask 5 payroll software companies for a demo at 09:00 on Tuesday, by form, chat and phone. Time each first reply and keep what they say.',
    targets: 'paytide.example, ledgerly.example, wagewise.example, staffbook.example, runpay.example',
    journey: ['Fill the demo form', 'Open the site chat', 'Call the sales line', 'Time each first reply'],
    schedule: 'Tuesday at 09:00, replies watched for 3 days',
    report: 'A table, 1 row per company and channel',
    kit: ['Buyer: 40-person firm, UK', '5 inboxes', '5 phone numbers', 'Every reply timed'],
    events: [
      { time: 'Tue 09:00', text: 'Demo forms filled, chats opened and sales lines called at all 5.' },
      { time: 'Tue 09:01', text: 'Paytide’s chat answers in 38 seconds. Its sales line picks up.' },
      { time: 'Tue 09:02', text: 'Staffbook’s chat answers in 2 minutes. Its sales line rings out.' },
      { time: 'Tue 09:04', text: 'Ledgerly calls back in 4 minutes.' },
      { time: 'Tue 13:12', text: 'Wagewise emails a reply after 4 hours 12 minutes, with a price list.' },
      { time: 'Fri 09:00', text: 'Runpay: no reply on any channel after 3 days.' },
    ],
    finding: '3 of 5 answer a channel inside 5 minutes. Runpay answered nothing in 3 days.',
    fix: 'In your table: 15 rows, 1 per company and channel, each with the reply itself.',
    ledger: 'Example run. Every enquiry timed, every reply kept with its receipt.',
  },

  steps: [
    {
      title: 'Name the companies',
      line: 'Your competitors, the prospects you sell to, or a whole market. Paste a list or call the API.',
    },
    {
      title: 'Pick the buyer',
      line: 'Who asks, from where, and what: a 40-person firm in the UK asking for a demo, or a homeowner asking for a quote.',
    },
    {
      title: 'Obsession gets in touch',
      line: 'By form, chat, email and phone, at the hours you choose. It says it’s an AI to anyone who talks to it.',
    },
    {
      title: 'Every reply lands, timed',
      line: 'From the second the enquiry was sent to the first answer, with the reply itself: the email, the transcript or the call.',
    },
  ],

  checks: [
    {
      group: 'How it asks',
      items: [
        { title: 'Web forms', line: 'Demo, contact and quote forms, filled the way a buyer fills them.' },
        { title: 'Site chat', line: 'Whether a bot or a person answers.' },
        { title: 'Phone', line: 'Whether the line picks up, goes to voicemail or calls back.' },
        { title: 'Email', line: 'The published sales or enquiry address.' },
      ],
    },
    {
      group: 'What it records',
      items: [
        { title: 'Time to first reply', line: 'On any channel, from the second the enquiry was sent.' },
        { title: 'The reply itself', line: 'What they offered: a call, a price, a brochure or a question back.' },
        { title: 'Follow ups', line: 'How many times they chase, on which channel, and for how long.' },
        { title: 'Out of hours', line: 'What an enquiry at 21:00 on a Friday gets.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'People', line: 'It says it’s an AI to anyone who talks to it.' },
        { title: 'Your name', line: 'Who asked is never shown.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every company’s reply time, side by side.',
    items: [
      { format: 'Time to first reply', line: 'Fastest, slowest and the median, by company, channel and hour.' },
      { format: 'The replies', line: 'Emails, chat transcripts and call recordings, as they came.' },
      { format: 'No reply', line: 'Every enquiry nobody answered inside the window you set.' },
      { format: 'Over time', line: 'Ask again each month and see who got faster.' },
      { format: 'A table', line: 'A row per company and channel in Clay or Google Sheets.' },
      { format: 'API and MCP', line: 'Each reply time as a fact, from your code or your AI agent.' },
    ],
  },

  settings: [
    { k: 'Companies', v: 'Competitors, prospects or a whole market' },
    { k: 'The buyer', v: 'Who asks, from where, and in which words' },
    { k: 'Channels', v: 'Forms, chat, email and phone' },
    { k: 'When', v: 'The hours you choose, evenings and weekends included' },
    { k: 'Window', v: 'How long to wait for a reply' },
    { k: 'How often', v: 'Once, monthly or quarterly' },
  ],

  forWho: [
    { audience: 'sales', line: 'Find the prospects that answer slowly, and open the call with their own reply times.' },
    { audience: 'agencies', line: 'Show a prospect how its replies compare with 5 competitors’.' },
    { audience: 'marketing', line: 'See how fast competitors answer the buyers you both pay to reach.' },
    { audience: 'founders', line: 'Know how fast your market answers a buyer before you set your own target.' },
    { audience: 'developers', line: 'Reply times by company and channel, as facts from the API.' },
  ],

  table: {
    heading: 'Paytide answered in 38 seconds. Runpay never answered.',
    line: 'Example: 5 payroll companies, a demo request at 09:00 on Tuesday.',
    cols: ['Form', 'Chat', 'Phone'],
    rows: [
      { label: 'Paytide', values: ['12 minutes', '38 seconds', 'Picked up'] },
      { label: 'Ledgerly', values: ['26 minutes', 'Bot only', 'Called back in 4 minutes'] },
      { label: 'Wagewise', values: ['4 hours 12 minutes', 'No chat', 'Voicemail'] },
      { label: 'Staffbook', values: ['1 day', '2 minutes', 'Rang out'] },
      { label: 'Runpay', values: ['No reply', 'No reply', 'Rang out'] },
    ],
  },

  faq: {
    heading: 'Every reply timed and kept. Who asked is never shown.',
    items: [
      {
        q: 'Is this a speed to lead test?',
        a: 'It is speed to lead data on other companies: the time from a new enquiry to the first reply, on every channel, for the competitors, prospects or market you name.',
      },
      {
        q: 'How fast do companies in my market answer a lead?',
        a: 'Name them, and Obsession asks each one as the buyer you pick, by form, chat, email and phone, then times every first reply, evenings and weekends included.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real enquiries. Obsession’s agents ask the way any buyer can, each with its own inbox and number, and say they’re an AI to anyone who talks to them.',
      },
      { q: 'Do callbacks count?', a: 'Yes. Each enquiry has its own number, so callbacks and texts count as replies. Automatic replies are kept apart.' },
      { q: 'Can I include my own company?', a: 'Yes. Name it beside your competitors, and the reply times sit side by side.' },
    ],
  },

  final: {
    heading: 'Which companies should we ask first?',
    sub: 'Early access includes every company already covered, and up to 5 added for you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-speed-final',
      button: 'Request early access',
      interest: 'speed',
    },
  },
}

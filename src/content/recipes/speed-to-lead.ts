import type { Recipe } from '../types'

/* Speed to lead (/recipes/speed-to-lead). Kept James's name (the one buyers use) and his reply checks (first reply,
   channel, follow ups, callbacks logged as replies, automatic replies apart). Fixed the P0: it runs only on the
   reader's own form, chat and phone, or a client's with their OK. It never sends an enquiry to a prospect or a rival.
   A labelled test lead, declared as AI, times every first reply and checks who got it in the CRM the reader
   connects. The run is an example, matches the `inbound` screen, and says so. */

export const recipe: Recipe = {
  id: 'speed',
  slug: 'speed-to-lead',
  name: 'Speed to lead',
  group: 'Check your own journeys',
  line: 'A labelled test lead uses your own form, chat and phone, or a client’s with their OK, and times every reply.',
  gets: 'Time to first reply on every channel, who picked it up, and where leads get dropped.',
  kit: [
    'A labelled test lead, declared as AI',
    'Its own inbox and phone number',
    'A timer on every enquiry',
    'Tests at the times you pick',
    'Your CRM, if you connect it',
    'Every test signed and dated',
  ],

  meta: {
    path: '/recipes/speed-to-lead',
    title: 'Speed to lead: time every reply to a new lead · Obsession',
    description:
      'A labelled test lead uses your own form, chat and phone, or a client’s with their OK, times every first reply and shows where new leads get dropped.',
    answer:
      'Speed to lead is an Obsession recipe. A labelled test lead, declared as AI and with its own inbox and phone number, uses your own form, chat and phone, or a client’s with their OK, times every first reply and checks who picked it up. It never runs on a prospect’s or a rival’s channels.',
    ogImage: '/og/speed-to-lead.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Speed to lead', path: '/recipes/speed-to-lead' },
    ],
  },

  hero: {
    headline: 'See where your form, chat and phone drop new leads.',
    sub: 'A declared AI test lead uses your own form, chat and phone, or a client’s with their OK. It times every first reply and checks who picked it up.',
    screen: 'inbound',
    capture: {
      kind: 'waitlist',
      source: 'recipe-speed-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: { question: 'Whose leads should we time first?', options: ['Ours', 'A client’s, with their OK', 'Both'] },
      interest: 'speed',
    },
  },

  run: {
    tab: 'Example: your inbound, daily',
    recipe: 'speed',
    task: 'Every morning, send a labelled test lead through our demo form, site chat and sales line. Time each first reply and tell me who got it.',
    targets: 'Your own demo form, site chat and sales line',
    journey: ['Fill the demo form', 'Open the site chat', 'Call the sales line', 'Time each first reply'],
    schedule: 'Daily at 09:00',
    report: 'A Slack alert, a daily line in your CRM',
    kit: ['Test lead, declared as AI', 'Own inbox', 'Own phone number', 'Your CRM, connected by you'],
    events: [
      { time: '09:00', text: 'The test lead fills the demo form, opens the site chat and calls the sales line.' },
      { time: '09:01', text: 'Site chat answers in 38 s. The lead lands in your CRM with an owner.' },
      { time: '09:01', text: 'The sales line rings out. No voicemail, and no callback yet.' },
      { time: '13:12', text: 'Demo form: first reply after 4 h 12 m. In your CRM with no owner.' },
      { time: '17:00', text: 'Routing fix approved. Tested again: first reply in 3 min 40 s.' },
    ],
    finding: 'Form and phone leads land in your CRM with no owner. The demo form waited 4 h 12 m for a reply.',
    fix: 'A routing rule drafted: form and phone leads go to the next free rep within 1 minute. Live after your OK.',
    ledger: 'Example run. Every test lead labelled, timed and signed.',
  },

  steps: [
    {
      title: 'Point it at your own channels',
      line: 'Your forms, chat, phone lines and inbox, or a client’s with their OK. Never anyone else’s.',
    },
    {
      title: 'A test lead gets in touch',
      line: 'Labelled as a test from you and declared as AI, it uses each channel the way a buyer does, at the times you pick.',
    },
    {
      title: 'Every reply is timed',
      line: 'From the second the enquiry lands to the first answer, on any channel, and who in your CRM picked it up.',
    },
    {
      title: 'You see where leads drop',
      line: 'Missed calls, forms with no owner and chats nobody answers, with the routing fix drafted for your OK.',
    },
  ],

  checks: [
    {
      group: 'How it gets in touch',
      items: [
        { title: 'Web forms', line: 'Demo, contact and quote forms, filled the way a buyer fills them.' },
        { title: 'Site chat', line: 'Whether the bot or a person answers, and how fast.' },
        { title: 'Phone lines', line: 'Whether the call is picked up, goes to voicemail or gets a callback, and when.' },
        { title: 'Email and text', line: 'Your published address and texting number, where you list them.' },
      ],
    },
    {
      group: 'What it measures',
      items: [
        { title: 'First reply', line: 'From the enquiry to the first answer, on any channel.' },
        { title: 'Channel', line: 'Whether your team replies the way it was asked, or calls instead.' },
        { title: 'Who got it', line: 'Whether the lead reached your CRM, and whether anyone owns it.' },
        { title: 'Follow ups', line: 'How many times your team chases, and for how long.' },
        { title: 'Out of hours', line: 'What happens to a lead that arrives at 21:00 on a Friday.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every channel timed. Every dropped lead named.',
    items: [
      { format: 'Reply time per channel', line: 'Fastest, slowest and the median, by channel and by hour.' },
      { format: 'The replies themselves', line: 'Emails, texts, chat transcripts and call logs, as proof.' },
      { format: 'Dropped leads', line: 'Every test with no owner, no reply or a missed call, and when it happened.' },
      { format: 'The routing fix', line: 'Drafted in the CRM you connect, and tested again after your OK.' },
      { format: 'Over time', line: 'Run it daily or weekly to see who got faster or slower.' },
      { format: 'A sheet', line: '1 row per test, ready for your CRM or Clay.' },
    ],
  },

  settings: [
    { k: 'Channels', v: 'Your own forms, chat, phone and inbox, or a client’s with their OK' },
    { k: 'The enquiry', v: 'What the test lead asks, in your buyers’ words' },
    { k: 'When', v: 'The times you pick, evenings and weekends included' },
    { k: 'Target', v: 'For example: a first reply within 5 minutes' },
    { k: 'Window', v: 'How long to wait for a reply' },
    { k: 'How often', v: 'Daily, weekly, or after a routing change' },
    { k: 'Your CRM', v: 'Connected by you, to see who got each lead' },
  ],

  forWho: [
    { audience: 'sales', line: 'Find where your form, chat and phone drop leads, before a buyer does.' },
    { audience: 'agencies', line: 'Show a client, with their OK, how long their leads wait for a reply.' },
    { audience: 'marketing', line: 'Know every lead you paid for gets an answer, and how fast.' },
    { audience: 'founders', line: 'Your own inbound checked every morning, while you’re heads down on the product.' },
  ],

  table: {
    heading: 'Your own channels, or a client’s with their OK. Never anyone else’s.',
    line: 'Every test lead is declared as AI and labelled as a test from you, so it’s never mistaken for a real buyer.',
    cols: ['Runs there', 'What it needs'],
    rows: [
      { label: 'Your own form, chat and phone', values: ['Yes', 'Your OK'] },
      { label: 'A client’s form, chat and phone', values: ['Yes', 'The client’s OK'] },
      { label: 'A prospect’s or a rival’s', values: ['Never', 'Nothing makes it run there'] },
    ],
  },

  faq: {
    heading: 'Every test lead declared. Every reply timed.',
    items: [
      {
        q: 'Can I time a rival’s or a prospect’s replies?',
        a: 'No. Speed to lead runs only on your own form, chat and phone, or a client’s with their OK. At rivals, Competitor tracking asks the site’s chat bot instead, never staff.',
      },
      {
        q: 'Does my team know it’s a test?',
        a: 'Yes. Every test lead is declared as AI and labelled as a test from you, so it’s never mistaken for a real buyer.',
      },
      { q: 'Do callbacks count?', a: 'Yes. Each test lead has its own number, so callbacks and texts are logged as replies.' },
      { q: 'What counts as a reply?', a: 'The first answer on any channel. Automatic replies are logged separately.' },
      { q: 'Does it need our CRM?', a: 'No. Connect it if you want to see who got each lead and whether anyone owns it.' },
      {
        q: 'Can it fix the routing?',
        a: 'It drafts the fix in the CRM you connect. Nothing changes until you approve it, then it tests again.',
      },
    ],
  },

  final: {
    heading: 'Find the leads your team never answered.',
    sub: 'Join the waitlist. Speed to lead comes ready to run on your own form, chat and phone.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-speed-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: { question: 'Whose leads should we time first?', options: ['Ours', 'A client’s, with their OK', 'Both'] },
      interest: 'speed',
    },
  },
}

import type { Recipe } from '../types'

/* Lead leaks (/recipes/lead-leaks; /recipes/speed-to-lead redirects here for good, public/_redirects). Renamed from
   Speed to lead on 3 Oct (Seun's pick, from the "leaky funnel"); the id stays 'speed', and the copy keeps "speed to
   lead" in the title, description, answer and questions, because that is the term buyers search.
   Kept James's reply checks (first reply, channel, follow ups, callbacks logged as replies, automatic replies apart).
   Rules: only the 3 lines in system.md. It runs on the reader's own form, chat and phone, or a client's with the
   client's agreement (said once, in the steps). A test lead, an AI agent that says it is an AI to any person it talks
   to, times every first reply and checks who got it in the CRM the reader connects; whether it also says it's a test
   from the reader is the reader's setting. The run is an example, matches the `inbound` screen, and says so; the
   table tells the same story.
   This recipe proves every channel still lets leads in. */

export const recipe: Recipe = {
  id: 'speed',
  slug: 'lead-leaks',
  name: 'Lead leaks',
  group: 'Check your own journeys',
  line: 'Sends a test lead through your own form, chat and phone, and finds where leads leak.',
  gets: 'Your speed to lead on every channel, who picked each lead up, and every lead that slipped through.',
  kit: [
    'A test lead that says it’s AI',
    'Its own inbox and phone number',
    'A timer on every enquiry',
    'Tests at the times you pick',
    'Your CRM, if you connect it',
    'Every test kept with its receipt',
  ],

  meta: {
    path: '/recipes/lead-leaks',
    title: 'Lead leaks: test your speed to lead every day · Obsession',
    description:
      'Speed to lead, tested: an AI test lead uses your own form, chat and phone, times every first reply and finds the leads your team never answered.',
    answer:
      'Lead leaks is a speed to lead test for your own funnel: an AI test lead uses your form, chat and phone, times every first reply and shows you each lead your team never answered.',
    ogImage: '/og/lead-leaks.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Lead leaks', path: '/recipes/lead-leaks' },
    ],
  },

  hero: {
    headline: 'Find every lead your form, chat and phone let slip.',
    sub: 'Lead leaks is a speed to lead test for your own funnel: an AI test lead uses your form, chat and phone, times every first reply and shows you each lead your team never answered.',
    screen: 'inbound',
    capture: {
      kind: 'waitlist',
      source: 'recipe-speed-hero',
      button: 'Join the waitlist',
      interest: 'speed',
    },
  },

  run: {
    tab: 'Example: your inbound, daily',
    recipe: 'speed',
    task: 'At 09:00, 13:00 and 17:00 every day, send a test lead through our demo form, site chat and sales line. Time each first reply and tell me who got it.',
    targets: 'Your own demo form, site chat and sales line',
    journey: ['Fill the demo form', 'Open the site chat', 'Call the sales line', 'Time each first reply'],
    schedule: 'Daily at 09:00, 13:00 and 17:00',
    report: 'A Slack alert, a daily line in your CRM',
    kit: ['Test lead that says it’s AI', 'Own inbox', 'Own phone number', 'Your CRM, connected by you'],
    events: [
      { time: '09:00', text: 'The test lead fills the demo form, opens the site chat and calls the sales line.' },
      { time: '09:01', text: 'Site chat answers in 38 seconds. The lead lands in your CRM with an owner.' },
      { time: '09:01', text: 'The sales line rings out. No voicemail, and no callback yet.' },
      { time: '13:12', text: 'Demo form: first reply after 4 hours 12 minutes. In your CRM with no owner.' },
      { time: '17:00', text: 'Routing fix approved. Tested again: first reply in 3 minutes 40 seconds.' },
    ],
    finding: '2 leaks: the sales line rang out with no callback, and the demo form waited 4 hours 12 minutes with no owner in your CRM.',
    fix: 'A routing rule drafted: form and phone leads go to the next free rep within 1 minute. Live after your OK.',
    ledger: 'Example run. Every test lead timed, every reply kept with its receipt.',
  },

  steps: [
    {
      title: 'Point it at your own channels',
      line: 'Your forms, chat, phone lines and inbox, or a client’s with the client’s agreement.',
    },
    {
      title: 'A test lead gets in touch',
      line: 'It uses each channel the way a buyer does, at the times you pick, and says it’s AI to anyone who talks to it.',
    },
    {
      title: 'Every reply is timed',
      line: 'From the second the enquiry lands to the first answer, on any channel, and who in your CRM picked it up.',
    },
    {
      title: 'You see every leak',
      line: 'Missed calls, forms with no owner and chats nobody answers, with the routing fix drafted for your OK and tested again.',
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
        { title: 'Speed to lead', line: 'From the enquiry to the first answer, on any channel.' },
        { title: 'Channel', line: 'Whether your team replies the way it was asked, or calls instead.' },
        { title: 'Who got it', line: 'Whether the lead reached your CRM, and whether anyone owns it.' },
        { title: 'Follow ups', line: 'How many times your team chases, and for how long.' },
      ],
    },
    {
      group: 'Where leads leak',
      items: [
        { title: 'No reply', line: 'A form or an email that nobody answers inside the window you set.' },
        { title: 'No owner', line: 'A lead that reaches your CRM and sits there with nobody on it.' },
        { title: 'Missed calls', line: 'A line that rings out, a full voicemail, or a callback that never comes.' },
        { title: 'Out of hours', line: 'What happens to a lead that arrives at 21:00 on a Friday.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every channel timed. Every leak named.',
    items: [
      { format: 'Speed to lead per channel', line: 'Fastest, slowest and the median, by channel and by hour.' },
      { format: 'The replies themselves', line: 'Emails, texts, chat transcripts and call logs, as proof.' },
      { format: 'Every leak', line: 'Each test with no owner, no reply or a missed call, and when it happened.' },
      { format: 'The routing fix', line: 'Drafted in the CRM you connect, and tested again after your OK.' },
      { format: 'Over time', line: 'Run it daily or weekly to see who got faster or slower.' },
      { format: 'A sheet', line: '1 row per test, ready for your CRM or Clay.' },
    ],
  },

  settings: [
    { k: 'Channels', v: 'Your own forms, chat, phone and inbox, or a client’s' },
    { k: 'The enquiry', v: 'What the test lead asks, in your buyers’ words, and whether it says it’s a test from you' },
    { k: 'When', v: 'The times you pick, evenings and weekends included' },
    { k: 'Target', v: 'For example: a first reply within 5 minutes' },
    { k: 'Window', v: 'How long to wait for a reply' },
    { k: 'How often', v: 'Daily, weekly, or after a routing change' },
    { k: 'Your CRM', v: 'Connected by you, to see who got each lead' },
  ],

  forWho: [
    { audience: 'sales', line: 'Find where your form, chat and phone leak leads, before a buyer does.' },
    { audience: 'agencies', line: 'Show a client how long their leads wait for a reply.' },
    { audience: 'marketing', line: 'Know every lead you paid for gets an answer, and how fast.' },
    { audience: 'founders', line: 'Your own inbound checked every morning, while you’re heads down on the product.' },
  ],

  table: {
    heading: 'The chat answered in 38 seconds. The form waited 4 hours.',
    line: 'Example: 1 day of your inbound, from the 09:00 test to the retest after the fix.',
    cols: ['First reply', 'Who got it'],
    rows: [
      { label: 'Site chat', values: ['38 seconds', 'An owner in your CRM'] },
      { label: 'Sales line', values: ['Rang out, no callback', 'Nobody'] },
      { label: 'Demo form', values: ['4 hours 12 minutes', 'No owner in your CRM'] },
      { label: 'After the fix', values: ['3 minutes 40 seconds', 'The next free rep'] },
    ],
  },

  faq: {
    heading: 'Every channel tested. Every reply timed.',
    items: [
      {
        q: 'Is this a speed to lead test?',
        a: 'Yes. Lead leaks measures speed to lead, the time from a new enquiry to the first reply, on every channel you own, and finds the leads that never get a reply at all.',
      },
      {
        q: 'How fast do we actually answer a lead, including after 5pm and at weekends?',
        a: 'Lead leaks finds out: a test lead arrives on your form, chat and phone at the times you pick, evenings and weekends included, and every first reply is timed, with who picked it up.',
      },
      {
        q: 'Why test speed to lead?',
        a: 'Because most leads wait, and Lead leaks shows whether yours do, channel by channel: when 6,346 real demo and contact forms were filled in, 68 in 100 got no reply.',
      },
      {
        q: 'Does my team know it’s a test?',
        a: 'Your team knows it’s AI: every Lead leaks test lead says so to anyone who talks to it. Whether it also says it’s a test from you is your setting.',
      },
      { q: 'Do callbacks count?', a: 'Yes. Each Lead leaks test lead has its own number, so callbacks and texts are logged as replies.' },
      { q: 'What counts as a reply?', a: 'Lead leaks counts the first answer on any channel. Automatic replies are logged separately.' },
      { q: 'Does Lead leaks need our CRM?', a: 'No. Connect it to Lead leaks if you want to see who got each lead and whether anyone owns it.' },
      {
        q: 'Can Lead leaks fix the routing?',
        a: 'Lead leaks drafts the fix in the CRM you connect. It goes live after your OK, then Lead leaks tests again.',
      },
    ],
  },

  final: {
    heading: 'Find the leads your team never answered.',
    sub: 'Join the waitlist. Lead leaks comes ready to run on your own form, chat and phone.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-speed-final',
      button: 'Join the waitlist',
      interest: 'speed',
    },
  },
}

import type { Recipe } from '../types'

/* Lead response checks (/recipes/lead-leaks; /recipes/speed-to-lead redirects here, public/_redirects; the id stays
   'speed'). Renamed from Speed to lead on 20 Nov 2026 to match Home's tile; "speed to lead" stays wherever it is the
   phrase people search (the title, the sub, the questions). The persona version (20 Nov, James): a persona you define
   goes through your own lead flows (or a client's, with their OK) as a new lead: it fills in your forms, opens your
   site chat and calls your sales line, at the hours you choose, on its own inbox and phone number. It times every
   first reply by email, text or call back from sales, keeps what was said, and tells anyone who talks to it that it's
   an AI. The run and the table tell the `inbound` screen's story (09:00, 13:00 and 17:00 runs against a 5 minute
   target, owners read from HubSpot; chat 38 seconds and assigned to JO; the form 4 hours 12 minutes and the sales line
   rang out, both unassigned; a routing rule approved at 13:20; the form 3 minutes 40 seconds at 17:00). Example.
   Its buyer (21 Nov, James): AI receptionist and front desk vendors, mystery shopping firms, dealer groups and RevOps
   teams. Its pricing table counts lead response checks, per site (`unit`, `per`). */

export const recipe: Recipe = {
  id: 'speed',
  slug: 'lead-leaks',
  name: 'Lead response checks',
  group: 'Check your own journeys',
  line: 'A persona fills in your forms as a new lead, and times the first reply by email, text or call back from sales.',
  gets: 'Your speed to lead on every form, chat and sales line, the reply itself, and every lead nobody answered.',
  kit: [
    'A new lead every run, defined by you',
    'Its own inbox and phone number, for replies and calls',
    'Your forms, site chat and sales line',
    'Runs at the hours you choose, evenings and weekends too',
    'Every reply timed to the second',
    'Every reply kept: the email, the text, the call',
  ],

  meta: {
    path: '/blueprints/lead-leaks',
    title: 'Test speed to lead: how fast companies answer an enquiry',
    description:
      'A persona fills in your forms, opens your chat and calls your sales line as a new lead, then times every first reply by email, text or call back.',
    answer:
      'Lead response checks time your speed to lead. A persona you define fills in your forms, opens your site chat and calls your sales line as a new lead. It times every first reply by email, text or call back, and keeps what was said.',
    ogImage: '/og/lead-leaks.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Lead response checks', path: '/blueprints/lead-leaks' },
    ],
  },

  hero: {
    headline: 'Find the form that leaves a new lead waiting 4 hours.',
    sub: 'Lead response checks time your speed to lead. A persona you define fills in your forms, opens your site chat and calls your sales line as a new lead. It times every first reply by email, text or call back, and keeps what was said.',
    screen: 'inbound',
    capture: {
      kind: 'waitlist',
      source: 'recipe-speed-hero',
      button: 'Request early access',
      interest: 'speed',
    },
  },

  buyer: 'For AI receptionist and front desk vendors, mystery shopping firms, dealer groups and RevOps teams.',
  unit: 'lead response check',
  per: 'site',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    {
      name: 'Free',
      includes: [
        'The lead tries your form, chat and phone line',
        'Replies by email, text or call back, tracked for 48 hours',
        'Time to first reply on each channel',
        'Every reply kept: emails, texts, transcripts and recordings',
      ],
    },
    {
      name: 'Single site',
      includes: [
        'Test leads in business hours, evenings and weekends',
        'Every lead tries your form, chat and phone line',
        'An alert when a lead waits past your target',
        'A scorecard for the site each month',
        'Results by webhook, API or MCP',
      ],
    },
    {
      name: 'Group',
      includes: [
        'Everything in Single site',
        'A scorecard per location, side by side',
        'The locations and hours that leave leads waiting',
        'A report you can share with each location’s manager',
      ],
    },
    {
      name: 'Agency',
      includes: [
        'Everything in Group',
        'Out of hours checks on a prospect’s line before you pitch',
        'Each client’s leads kept apart in your event log',
      ],
    },
  ],

  run: {
    tab: '1 day, 3 new leads',
    recipe: 'speed',
    task: 'Every day at 09:00, 13:00 and 17:00, send a new lead to our demo form, site chat and sales line. Time each first reply against 5 minutes, and read who owns the lead in HubSpot.',
    targets: 'Your demo form, site chat and sales line',
    journey: ['Fill in the demo form', 'Open the site chat', 'Call the sales line', 'Time each first reply'],
    schedule: 'Every day at 09:00, 13:00 and 17:00',
    report: 'Slack, with each lead’s owner from HubSpot',
    kit: ['New lead · UK', 'Its own inbox', 'Its own phone number', '5 minute target'],
    events: [
      { time: 'Tue 09:00', text: 'A new lead fills in the demo form, opens the chat and calls the sales line.' },
      { time: 'Tue 09:00', text: 'The chat answers in 38 seconds. The lead is assigned to JO in HubSpot.' },
      { time: 'Tue 09:01', text: 'The sales line rings out, with no voicemail. The lead lands unassigned.' },
      { time: 'Tue 13:12', text: 'The form’s first reply, an email, after 4 hours 12 minutes. The lead sat unassigned.' },
      {
        time: 'Tue 13:20',
        text: 'A routing rule approved by your sales lead: unassigned form and phone leads go to the next free rep within 1 minute.',
      },
      { time: 'Tue 17:04', text: 'At the 17:00 run, a rep calls the new lead back in 3 minutes 40 seconds. It tells the rep it’s an AI.' },
    ],
    finding: 'The demo form left a new lead waiting 4 hours 12 minutes, unassigned. The sales line rang out.',
    fix: '1 routing rule, approved at 13:20, closed both. At 17:00 the form got a call back in 3 minutes 40 seconds.',
    ledger: 'Every lead timed, every reply kept: emails, chats and calls.',
  },

  steps: [
    {
      title: 'Name your lead flows',
      line: 'Your demo, contact and quote forms, your site chat and your sales line. Yours, or a client’s with their OK.',
    },
    {
      title: 'Define the lead',
      line: 'Who asks, from where, and what: a finance lead at a firm of 40 in Leeds asking for a demo, or a homeowner asking for a quote.',
    },
    {
      title: 'It gets in touch',
      line: 'By form, chat, email and phone, at the hours you choose. It answers every call back, and says it’s an AI to anyone who talks to it.',
    },
    {
      title: 'Every reply lands, timed',
      line: 'From the second it asked to the first answer, with the reply itself: the email, the text, the transcript or the call.',
    },
  ],

  checks: [
    {
      group: 'How it asks',
      items: [
        { title: 'Web forms', line: 'Demo, contact and quote forms, filled in the way a new lead fills them in.' },
        { title: 'Site chat', line: 'Whether a bot or a person answers, and how fast.' },
        { title: 'Phone', line: 'Whether the sales line picks up, goes to voicemail or rings out.' },
        { title: 'Email', line: 'Your published sales or enquiry address.' },
      ],
    },
    {
      group: 'What it records',
      items: [
        { title: 'Time to first reply', line: 'On any channel, from the second it asked.' },
        { title: 'Calls back', line: 'When sales rings the lead’s own number, how long after, and what the rep offers.' },
        { title: 'The reply itself', line: 'What came back: a call, a price, a booking link or a question.' },
        { title: 'Follow ups', line: 'How many times sales chases, on which channel, and for how long.' },
        { title: 'Out of hours', line: 'What a lead at 21:00 on a Friday gets.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'People', line: 'It says it’s an AI to anyone who talks to it.' },
        { title: 'Your pipeline', line: 'Every test lead is labelled, so you can filter it out of your reports.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every lead’s first reply, side by side.',
    items: [
      { format: 'Time to first reply', line: 'Fastest, slowest and the median, by form, channel and hour.' },
      { format: 'The replies', line: 'Emails, texts, chat transcripts and call recordings, as they came.' },
      { format: 'No reply', line: 'Every lead nobody answered inside the time you set.' },
      { format: 'Over time', line: 'Run it every day and see the week a change slowed you down.' },
      { format: 'Clay or HubSpot', line: 'A row per lead and channel in Clay, or on the lead’s own record in HubSpot.' },
      { format: 'API and MCP', line: 'Your code, or your own agent, spawns leads and reads each reply as it lands.' },
    ],
  },

  settings: [
    { k: 'Lead flows', v: 'Your forms, site chat and sales line, or a client’s with their OK' },
    { k: 'The lead', v: 'Who asks, from where, and in which words' },
    { k: 'Channels', v: 'Forms, chat, email and phone' },
    { k: 'When', v: 'The hours you choose, evenings and weekends included' },
    { k: 'Target', v: 'The reply time you hold your team to, such as 5 minutes' },
    { k: 'How often', v: 'Every day, every week, or after each routing change' },
  ],

  forWho: [
    { audience: 'sales', line: 'Know every new lead hears back inside 5 minutes, by email, text or call, evenings included.' },
    { audience: 'agencies', line: 'Show a client how fast its leads really hear back, with every reply kept.' },
    { audience: 'marketing', line: 'See what happens after the form to the leads your campaigns pay for.' },
    { audience: 'founders', line: 'Know the day your sales line rings out, before a buyer gives up.' },
    { audience: 'developers', line: 'Reply times by form and channel from the API, after every routing change.' },
  ],

  table: {
    heading: 'The chat answered in 38 seconds. The demo form took 4 hours.',
    line: '1 day, a new lead at 09:00, 13:00 and 17:00, against a 5 minute target.',
    cols: ['Demo form', 'Site chat', 'Sales line'],
    rows: [
      { label: '09:00', values: ['Email after 4 hours 12 minutes, unassigned', '38 seconds', 'Rang out, no voicemail'] },
      { label: '13:00', values: ['Email after 2 hours 8 minutes', '52 seconds', 'Voicemail, call back in 40 minutes'] },
      { label: '17:00, after the fix', values: ['Call back in 3 minutes 40 seconds', '41 seconds', 'Picked up'] },
    ],
  },

  faq: {
    heading: 'Every reply timed and kept, calls included.',
    items: [
      {
        q: 'How do I test our speed to lead?',
        a: 'Send a persona through it as a new lead. It fills in your forms, opens your chat and calls your sales line at the hours you choose. Then it times every first reply by email, text or call back, evenings and weekends included.',
      },
      {
        q: 'Do calls back from sales count?',
        a: 'Yes. Each lead has its own phone number, so a call back from a rep and every text count as replies. Automatic replies are kept apart.',
      },
      {
        q: 'What does the persona say when a rep calls?',
        a: 'It tells the rep it’s an AI, and the call is kept with its time and length.',
      },
      {
        q: 'Will test leads clutter our CRM?',
        a: 'No. Every test lead is labelled, so you can filter it out of your pipeline and reports.',
      },
      {
        q: 'Can an agency run it for clients?',
        a: 'Yes, with each client’s OK. Every client gets its own leads, its own hours and its own events, kept apart in your event log.',
      },
    ],
  },

  final: {
    heading: 'Which form should your first lead fill in?',
    sub: 'Tell us your forms and your target. We’ll set up your first lead with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-speed-final',
      button: 'Request early access',
      interest: 'speed',
    },
  },
}

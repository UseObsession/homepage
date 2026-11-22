import type { Recipe } from '../types'

/* Voice agent check (/recipes/voice-agent-check). Check your AI agents. Screen: callcheck, drawn for an agency (its
   client Dental group; 3 calls at 08:00; Call 2 quotes the aligner consult free where the price list says £50; a person
   after 1 min 12 s on hold). "Aligner" on screen and page, so no real product is named.
   The persona version (20 Nov 2026): personas you define (new patients, regulars, a business calling), each with its
   own phone number, inbox and a voice used with consent, call voice agents every morning. Each books a slot, asks a
   price and asks for a person, and every call comes back recorded, transcribed and dated, beside the reader's price
   list. The reader's own or a client's voice agent, and competitors' phones on what any caller can ask. With the voice
   agent, the page says what the recording shows; when a person picks up or calls back, the persona tells them it's an
   AI. No vendor or product names.
   Its buyer (21 Nov 2026, James): voice AI agencies, voice AI startups and enterprise CX teams. It leads with what a
   test of the call alone misses: the persona waits days on its own number and inbox for the text, the email and the
   callback the call promised (48 hours by default; 2 working days when the call promises the next business day, so a
   weekend never counts against it, James 21 Nov). The run is an example: call 3 is promised a callback that never
   comes. */

export const recipe: Recipe = {
  id: 'voice-agent',
  slug: 'voice-agent-check',
  name: 'Voice agent check',
  group: 'Check your AI agents',
  line: 'Personas call your voice agent, then wait days for the text, email and callback it promised.',
  gets: 'Every call recorded and transcribed, and every text, email and callback after it, or the silence.',
  kit: [
    'A persona per caller, with its own number and inbox',
    'Different voices and accents, used with consent',
    'Your price list, hours and services, captured each run',
    'Your calendar, connected by you',
    'Every call recorded and transcribed',
    'Days of waiting after each call, for the text, email and callback',
  ],

  meta: {
    path: '/blueprints/voice-agent-check',
    title: 'Test your AI receptionist: bookings, prices and a person',
    description:
      'Personas call your voice agent, check each answer, then wait days for the text, email and callback it promised, with every call recorded and transcribed.',
    answer:
      'Voice agent check calls your voice agent as the callers you define, from personas with their own numbers and inboxes. It checks each answer, then waits days for the promised text, email and callback.',
    ogImage: '/og/voice-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Voice agent check', path: '/blueprints/voice-agent-check' },
    ],
  },

  hero: {
    headline: 'Your voice agent promised a callback. Find out if it came.',
    sub: 'Voice agent check calls your voice agent as the callers you define, from personas with their own numbers and inboxes. It checks each answer, then waits days for the promised text, email and callback.',
    screen: 'callcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-voice-agent-hero',
      button: 'Request early access',
      interest: 'voice-agent',
    },
  },

  buyer: 'For voice AI agencies, voice AI startups and enterprise CX teams.',
  unit: 'round of test calls',
  per: 'voice agent',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['A booking, a price question and a request for a person', 'The text, email or callback it promised, tracked for 48 hours', 'Every call recorded and transcribed'] },
    { name: 'Starter', includes: ['Calls after each update, or once a week', 'Each answer checked against your price list and hours', 'Alerts on a wrong answer or a missed callback'] },
    { name: 'Daily', includes: ['Callers in different voices and accents', 'Calls out of hours and at weekends, if you want them', 'Trends for each question over time'] },
    { name: 'Agency', includes: ['A report you can share for each client', 'Each client’s calls kept apart in your event log'] },
  ],

  run: {
    tab: 'A client’s AI receptionist, daily',
    recipe: 'voice-agent',
    task: 'Every morning, call Dental group’s AI receptionist as 3 new patients. Book a slot, ask a price and ask for a person, then wait 48 hours for every text, email and callback.',
    targets: 'Dental group’s AI receptionist, on their own number',
    journey: ['Call as a new patient', 'Book a real slot, then cancel', 'Ask a price, then a person', 'Wait 48 hours for what was promised'],
    schedule: 'Daily at 08:00',
    report: 'A report for Dental group by 09:00',
    kit: ['3 personas · new patients, UK', '3 phone numbers and inboxes', '3 voices, used with consent', 'Their calendar, connected'],
    events: [
      { time: 'Mon 08:00', text: '3 personas call Dental group’s own number as new patients.' },
      { time: 'Call 2, 00:21', text: '“You’re booked for Tuesday at 10:20.” A real slot, in their calendar, cancelled after the call.' },
      { time: 'Call 2, 00:41', text: 'The persona asks the price of an aligner consult. “The aligner consult is free.” Their price list says £50.' },
      {
        time: 'Call 2, 00:47',
        text: 'It asks for a person. One picks up after 1 minute 12 seconds on hold, and the persona tells them it’s an AI calling for your agency.',
      },
      { time: 'Call 3, 01:05', text: '“Someone will call you back today about whitening.” The persona waits on its own number.' },
      { time: 'Wed 08:00', text: '48 hours on, no callback has reached call 3’s number. Call 2’s confirmation text came in 40 seconds.' },
    ],
    finding: 'Call 3 was promised a callback that day. 48 hours later none had come, and call 2 heard the £50 aligner consult quoted as free.',
    fix: 'Both in Dental group’s report: the promise at 01:05 on call 3 and the price at 00:41 on call 2, each with its recording.',
    ledger: '3 calls and 48 hours of waiting, every call recorded and every text kept.',
  },

  steps: [
    {
      title: 'Give it the numbers',
      line: 'Your voice agent’s number, a client’s or a competitor’s, with your price list, hours and calendar.',
    },
    {
      title: 'Define the callers',
      line: 'New patients, regulars or a business calling, in voices and accents used with consent.',
    },
    {
      title: 'It calls, then waits',
      line: 'Each books a slot, asks a price and asks for a person, then waits for what the call promised.',
    },
    {
      title: 'Every call lands where you work',
      line: 'A report by 09:00, Slack or the API, each call with its recording, transcript and what followed.',
    },
  ],

  checks: [
    {
      group: 'What follows the call',
      items: [
        { title: 'The text', line: 'Every confirmation and reminder text, waited for on the persona’s own number.' },
        { title: 'The email', line: 'The booking or quote email the voice agent promised, with the time it arrived.' },
        { title: 'The callback', line: 'Whether the promised callback comes, how many hours later, and what the caller is told.' },
        { title: 'The booking', line: 'A real slot booked, moved and cancelled, each read in your calendar.' },
      ],
    },
    {
      group: 'What callers hear',
      items: [
        { title: 'Picks up', line: 'Whether it answers, and after how many rings, in the morning rush and after hours.' },
        { title: 'Says it’s an AI', line: 'In the first 10 seconds, with your business’s name and that the call is recorded.' },
        { title: 'Prices, hours and services', line: 'Every answer beside your price list and hours, captured the same morning.' },
        { title: 'Every caller understood', line: 'Regional accents, background noise and slower speech, from voices used with consent.' },
        { title: 'A person when asked', line: 'Whether it puts the caller through, how long they hold, and whether a person or voicemail answers.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Recordings', line: 'Every call kept exactly as made, for as long as your plan keeps events.' },
        { title: 'Bookings', line: 'Each test slot cancelled after the call, the way you set.' },
        { title: 'Calls back', line: 'When a person calls the persona back, it tells them it’s an AI.' },
        { title: 'How many calls', line: '3 a morning by default, or as many as you set.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every call comes back recorded, with everything that followed it.',
    items: [
      { format: 'An answer per question', line: 'Right or wrong against your price list and hours.' },
      { format: 'The recording', line: 'Every call with its transcript, timed to the second.' },
      { format: 'What followed', line: 'Each text, email and callback with its time, or the hours waited when none came.' },
      { format: 'What changed', line: 'After every update to the voice agent, the answers that changed.' },
      { format: 'Competitors’ quotes', line: 'What their phones quote for the same service, beside yours.' },
      { format: 'A report to share', line: 'A page and a PDF by 09:00, or Slack, a sheet or the API.' },
    ],
  },

  settings: [
    { k: 'Voice agents', v: 'Yours, a client’s or a competitor’s' },
    { k: 'Callers', v: '3 personas a morning, each with its own number, inbox, voice and reason to call' },
    { k: 'Persona', v: 'New patient, regular or business' },
    { k: 'Questions', v: 'Bookings, prices, hours and the questions your callers ask most' },
    { k: 'Waiting', v: '48 hours after each call by default, 2 working days when the call promises the next business day, or as long as you set' },
    { k: 'Your lists', v: 'Your price list, hours and services, captured every run' },
    { k: 'Calendar', v: 'Connected by you, so every test slot is read and then cancelled' },
    { k: 'How often', v: 'Every morning at 08:00, after hours if you want, and after every update' },
    { k: 'Where it lands', v: 'A report, Slack, a sheet or the API' },
  ],

  table: {
    heading: 'Nobody on your team waits 2 days to see if the callback came. A persona does.',
    cols: ['By hand', 'With Voice agent check'],
    rows: [
      { label: 'A callback promised', values: ['Nobody checks it came', 'Waited for and timed, or flagged'] },
      { label: 'The text and email after', values: ['Assumed to send', 'Kept with the time they arrived'] },
      { label: 'A wrong price', values: ['Heard when a caller disputes the bill', 'Heard the same morning, with the recording'] },
      { label: 'A person when asked', values: ['Nobody times the hold', 'Every transfer timed'] },
      { label: 'Accents and noise', values: ['Found when a caller gives up', 'Different voices every morning'] },
      { label: 'After an update', values: ['You hope nothing changed', 'Called again the same day'] },
    ],
  },

  faq: {
    heading: 'A persona calls, waits and keeps everything that follows.',
    items: [
      {
        q: 'What does Voice agent check test after the call ends?',
        a: 'It waits for every text, email and callback the call promised: 48 hours by default, or 2 working days when it promises “next business day” or similar, so a weekend never counts against it. A promise nothing followed is flagged.',
      },
      {
        q: 'How do we test a voice agent before it goes live?',
        a: 'Voice agent check sends a persona to call its number. It books and cancels a real slot, asks a price and asks for a person, sets every answer beside your price list and hours, then waits for what the call promised.',
      },
      {
        q: 'Does the caller say it’s an AI?',
        a: 'When a person picks up or calls back, yes: the persona tells them it’s an AI, who it calls for and that the call is recorded. With your voice agent, the recording keeps both sides word for word.',
      },
      {
        q: 'Can Voice agent check call a competitor?',
        a: 'Yes. A persona calls any number you give it and asks what a caller would ask, such as a price or opening hours. It calls from its own number, so nothing points back to you.',
      },
      {
        q: 'Whose voices does Voice agent check use?',
        a: 'Voice agent check uses different voices and accents, each used with consent, so you hear whether a voice agent understands every caller.',
      },
      {
        q: 'Will test calls get in the way of real callers?',
        a: 'No. Voice agent check makes 3 calls a morning by default, about what a few new callers make. You set how many.',
      },
      {
        q: 'Can an agency run Voice agent check for clients?',
        a: 'Yes, with each client’s agreement. The Voice agent check report carries your agency’s name and lands by 09:00.',
      },
    ],
  },

  final: {
    heading: 'See every callback your voice agent promises, and whether it came.',
    sub: 'Tell us the number to call and who the callers should be. We’ll set up your first run with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-voice-agent-final',
      button: 'Request early access',
      interest: 'voice-agent',
    },
  },
}

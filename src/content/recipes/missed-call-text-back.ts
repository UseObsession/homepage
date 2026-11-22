import type { Recipe } from '../types'

/* Missed call text back (/blueprints/missed-call-text-back). Talk to customers, wave 2 (23 Nov 2026). Screen: missedcall,
   drawn for Ridgeline Plumbing (invented, ridgeline.example): 6 branch lines forward their unanswered calls to the AI
   assistant's number, which texts each caller within seconds, answers from the price list and hours, and books a visit.
   It owns "missed call text back" and its "software" and "automation" searches (Google suggestions, 23 Nov 2026), held
   by no other page. Its name drops the hyphen so the name, the sub and the answer carry the phrase exactly as searched.
   The rules (writer brief): the assistant says it's an AI in every first text; it texts only the number that just called,
   about that call, and never after STOP; texting runs on a paid plan after US texting registration (prices.ts
   registration). The Free run drafts each text without sending it, because Free's number sends no texts (pricing.json,
   plans). The run is an example and adds up: Tue, 41 calls rang out across the 6 branches and every caller got a text
   within 10 seconds (median 7); 23 replied, of whom 17 booked, 4 asked for a person and 2 went quiet. */

export const recipe: Recipe = {
  id: 'missed-call',
  slug: 'missed-call-text-back',
  name: 'Missed call text back',
  group: 'Talk to customers',
  line: 'Every caller you miss gets a text within seconds, their questions answered and a time booked.',
  gets: 'A text to every missed caller within seconds, each reply answered, and every booking in your calendar.',
  kit: [
    'An AI assistant in your business’s name, with its own number',
    'Your missed and busy calls, forwarded to that number',
    'Your hours, services and prices, read before every reply',
    'Your calendar or booking page, connected by you',
    'A person brought in whenever a caller asks',
    'Every call, text and booking in your event log',
  ],
  build: {
    line: 'A missed call arrives as call.received and each reply as sms.received. Your own code can log, route or answer them, and each outcome comes back as a blueprint.result.',
    code: `await obsession.blueprints.run('missed-call-text-back', {
  persona: 'front-desk',
  firstText: 'Sorry we missed your call. This is our AI assistant. How can we help?',
  notify: { slack: '#front-desk' },
})
obsession.on('sms.received', async (e) => {
  await crm.addNote(e.from, e.text)
})`,
    events: [
      { kind: 'call.received', text: 'A missed call reaches the assistant’s number, forwarded from your line, with the caller’s number and the time.' },
      { kind: 'sms.received', text: 'The caller’s reply, in the same thread as every text before it.' },
      { kind: 'blueprint.result', text: 'The outcome for each caller: booked, handed to a person or no reply, with every text sent.' },
    ],
  },

  meta: {
    path: '/blueprints/missed-call-text-back',
    title: 'Text back every missed call in seconds, then book it',
    description:
      'Missed call text back: every caller you miss gets a text in seconds, their questions answered and a time booked, with replies in Slack or your CRM.',
    answer:
      'Missed call text back texts every caller you miss within seconds, in your business’s name. It answers their questions from your hours and prices, books them into your calendar and sends every reply to Slack or your CRM.',
    ogImage: '/og/missed-call-text-back.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Missed call text back', path: '/blueprints/missed-call-text-back' },
    ],
  },

  hero: {
    headline: 'Text back every missed call before the caller rings someone else.',
    sub: 'Missed call text back texts every caller you miss within seconds, in your business’s name. It answers their questions from your hours and prices, books them into your calendar and sends every reply to Slack or your CRM.',
    screen: 'missedcall',
    capture: {
      kind: 'waitlist',
      source: 'recipe-missed-call-hero',
      button: 'Start free',
      interest: 'missed-call',
    },
  },

  buyer: 'For home services companies, clinics, salons and multi-location businesses, and the agencies that run their phones.',
  unit: 'missed call',
  per: 'phone line',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['Your missed calls for 7 days, each with its time and the line it rang', 'The text each caller would get, drafted for you to read', 'Missed calls counted by hour and day'] },
    { name: 'Starter', includes: ['A text to every missed caller within seconds', 'Replies answered from your hours, services and prices', 'Bookings in your calendar, every reply in Slack'] },
    { name: 'Growth', includes: ['Nights and weekends covered, in your own words', 'A person brought in the moment a caller asks', 'Missed calls, replies and jobs booked, week by week'] },
    { name: 'Multi-location', includes: ['A number and a greeting for each location', 'Each location’s callers kept apart in your event log', 'Bookings sent to each location’s calendar or your CRM'] },
  ],

  run: {
    tab: 'Missed calls at a plumbing company, all day',
    recipe: 'missed-call',
    task: 'Text every caller Ridgeline Plumbing misses within 10 seconds, as its AI assistant. Answer from its price list and hours, book visits in its calendar and post every reply to #front-desk in Slack.',
    targets: 'Ridgeline Plumbing’s 6 branch lines, with missed calls forwarded',
    journey: ['A call rings out', 'Text the caller within seconds', 'Answer from the price list and hours', 'Book a visit, or bring in a person'],
    schedule: 'Always on, day and night',
    report: 'Bookings in the calendar, replies in Slack as they land',
    kit: ['1 AI assistant · Ridgeline Plumbing', '6 branch lines, missed calls forwarded', 'Their price list and hours', 'Their calendar, connected'],
    events: [
      { time: 'Tue 12:04:11', text: 'A call to the Eastside branch rings out after 5 rings and forwards to the assistant’s number.' },
      { time: '12:04:18', text: '7 seconds later, a text: “Sorry we missed you. I’m Ridgeline’s AI assistant. How can I help?”' },
      { time: '12:05:02', text: 'The caller replies: “Water heater’s leaking. Can someone come today?”' },
      { time: '12:05:09', text: 'It offers today’s 3 to 5 pm slot from the calendar and the $79 service call fee from the price list.' },
      { time: '12:06:40', text: '“Yes please.” Booked at Eastside for Tuesday, 3 to 5 pm, and the confirmation is texted back.' },
      { time: 'Tue 18:00', text: '41 calls rang out across the 6 branches today, and every caller got a text within 10 seconds.' },
    ],
    finding: '23 callers replied to their text. 17 booked a visit, 4 asked for a person and were called back within the hour, and 2 went quiet.',
    fix: 'Each booking sits in the right branch’s calendar, and each handover reached the branch lead in #front-desk with every text so far.',
    ledger: '41 missed calls, a text to each within 10 seconds, and every reply and booking kept in Ridgeline’s event log.',
  },

  steps: [
    {
      title: 'Point your missed calls at it',
      line: 'Forward unanswered and busy calls to its number, a setting on most phone systems, for one line or every location.',
    },
    {
      title: 'Give it your answers',
      line: 'Your hours, services, prices and calendar, and the first text in your own words.',
    },
    {
      title: 'It texts within seconds',
      line: 'It says it’s your AI assistant, answers questions, offers a time and brings in a person when asked.',
    },
    {
      title: 'Every reply lands where you work',
      line: 'Slack, your CRM, a Google Sheet or a webhook, each caller with every text and how it ended.',
    },
  ],

  checks: [
    {
      group: 'What the caller gets',
      items: [
        { title: 'A text in seconds', line: 'Within 10 seconds of the missed call by default, from a number in your business’s name.' },
        { title: 'Answers from your lists', line: 'Prices, hours, services and areas you cover, from what you gave it. Anything else goes to a person.' },
        { title: 'A time booked', line: 'A real slot from your calendar, confirmed by text, or a link to your booking page.' },
        { title: 'A person when asked', line: 'The thread goes to Slack with the right location tagged, and the caller is told who will call.' },
      ],
    },
    {
      group: 'What you keep',
      items: [
        { title: 'Every missed call', line: 'The time, the line it rang and the caller’s number, whether they reply or not.' },
        { title: 'Every text', line: 'Both sides of each thread, kept exactly as sent and received.' },
        { title: 'How each one ended', line: 'Booked, handed to a person or no reply, in Slack, your CRM or a sheet.' },
        { title: 'Your busiest hours', line: 'Missed calls by hour and day, so you see when the phones go unanswered.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Says it’s an AI', line: 'Every first text names your business and says it’s your AI assistant.' },
        { title: 'One text, to the number that called', line: 'A single text about that call, then replies only when the caller writes back. It never adds callers to a list.' },
        { title: 'STOP means stop', line: 'A caller who replies STOP gets one confirmation and nothing more.' },
        { title: 'US texting registration', line: 'Texts go out on a paid plan once your US texting registration is filed. We file it for you.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every missed call comes back as a booking, a reply or a name for someone to call.',
    items: [
      { format: 'A Slack message per caller', line: 'The caller’s number, the location and every text, as it happens.' },
      { format: 'A booking in your calendar', line: 'The slot, the job and the caller’s details, confirmed by text.' },
      { format: 'A row in your CRM or sheet', line: 'One per caller: the time, the line, the reply and how it ended.' },
      { format: 'A handover', line: 'When a caller asks for a person, the thread so far and who should call.' },
      { format: 'A weekly count', line: 'Missed calls, jobs booked, booking rate and response time, by hour, day and location.' },
      { format: 'Events for your own code', line: 'call.received, sms.received and blueprint.result, by webhook or the API.' },
    ],
  },

  settings: [
    { k: 'Lines', v: 'One number or every location’s, each forwarding its missed calls to its own assistant number' },
    { k: 'First text', v: 'Within 10 seconds, in your words, saying it’s your AI assistant' },
    { k: 'On the call', v: 'A short line in your name, saying it’s an AI and that a text is on its way' },
    { k: 'Answers', v: 'From your hours, services, prices and areas, updated whenever you change them' },
    { k: 'Booking', v: 'A slot in your connected calendar, or a link to your booking page' },
    { k: 'A person', v: 'Whenever a caller asks, or for the jobs you name, tagged to the right location' },
    { k: 'Hours', v: 'All day, or only out of hours and at weekends' },
    { k: 'Who it texts', v: 'Only the number that just called, about that call, and never after STOP' },
    { k: 'Texting', v: 'On a paid plan, after US texting registration, which we file for you' },
    { k: 'Where it lands', v: 'Slack, your CRM, a Google Sheet, email or a webhook' },
  ],

  table: {
    heading: 'Nobody on your team can text back every missed call within seconds. Your AI assistant does.',
    cols: ['By hand', 'With Missed call text back'],
    rows: [
      { label: 'A call at lunchtime', values: ['A voicemail nobody hears until the afternoon', 'A text within 10 seconds'] },
      { label: 'A call at 9 pm', values: ['Called back tomorrow, if at all', 'Texted and booked tonight'] },
      { label: 'A price question', values: ['Waits for whoever knows', 'Answered from your price list'] },
      { label: 'Booking a time', values: ['Phone tag over the next day', 'A slot from your calendar, confirmed by text'] },
      { label: 'Asked for a person', values: ['Lost in the voicemail box', 'In Slack with the thread, tagged to the location'] },
      { label: 'Calls you missed', values: ['Nobody knows how many', 'Counted by hour, day and location'] },
    ],
  },

  faq: {
    heading: 'Every caller hears back in seconds, and you see every reply.',
    items: [
      {
        q: 'What is missed call text back?',
        a: 'It texts every caller you didn’t answer, within seconds, so they hear from you before they ring someone else. On Obsession it also answers their reply from your prices and hours and books them into your calendar.',
        link: { label: 'See the AI receptionist use case', to: '/use-cases/ai-receptionist' },
      },
      {
        q: 'How does a missed call reach it?',
        a: 'Set your phone system to forward unanswered and busy calls to the assistant’s number, a setting most phone systems have. Each missed call lands in your event log with its time and the line it rang, and the text goes out within seconds.',
      },
      {
        q: 'Does the text say it’s an AI?',
        a: 'Yes. Every first text names your business and says it’s your AI assistant, and a person takes over whenever the caller asks.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Who does it text, and what about STOP?',
        a: 'Only the number that just called you, once, about that call, and after that only when they reply. A caller who texts STOP gets one confirmation and nothing more. US business texting needs a registration with the carriers, which we file for you on any paid plan.',
        link: { label: 'Read about US texting registration', to: '/blog/10dlc-registration' },
      },
      {
        q: 'Can it answer questions and book a time?',
        a: 'Yes. It answers from the hours, services and prices you give it, offers real slots from your connected calendar and texts the confirmation. Anything outside your lists goes to a person, with the thread so far.',
      },
      {
        q: 'Can we run it for every location?',
        a: 'Yes, from one line to hundreds of locations and thousands of missed calls a day. Each location gets its own number and greeting, its callers stay apart in your event log, and bookings go to that location’s calendar. Agencies run it for each client the same way.',
      },
      {
        q: 'Can developers change what it does?',
        a: 'Yes. Start it from the API, or from your own AI agent over MCP, and add your own handler. Each missed call arrives as call.received, each reply as sms.received and each outcome as blueprint.result.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'What does Missed call text back cost?',
        a: 'Try it on the Free plan: for 7 days it logs every missed call and drafts the text each caller would get. Texting back starts on a paid plan, billed on the pieces it uses at list rates: a number, each text and the seconds of each forwarded call.',
        link: { label: 'See phone numbers for AI agents', to: '/phone' },
      },
    ],
  },

  final: {
    heading: 'Text back every caller you miss, and watch jobs booked and response time week by week.',
    sub: 'Try it on the Free plan: a week of your missed calls, with the text each caller would get.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-missed-call-final',
      button: 'Start free',
      interest: 'missed-call',
    },
    link: { label: 'More blueprints to talk to customers', to: '/blueprints/talk-to-customers' },
  },
}

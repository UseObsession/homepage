import type { Recipe } from '../types'

/* Appointment reminders (/blueprints/appointment-reminders). Talk to customers, wave 2 (23 Nov 2026). Screen: reminders,
   drawn for Fernhill Physical Therapy (invented, fernhill.example), 8 clinics: Monday's view of Tuesday's 312 bookings,
   texted at 10:00 and called at 16:00, with one clinic's rows showing each step. It owns "appointment reminder text" and
   its "service", "app" and "software" searches, with "automated appointment reminders" and "appointment confirmation
   text" beside them (Google suggestions, 23 Nov 2026), held by no other page.
   The rules (writer brief): every text, email and call says it's an AI; texts go only to the number a person gave when
   they booked (informational under CTIA's principles); calls only to people who agreed to reminder calls (an AI voice is
   an artificial voice under the FCC's February 2024 ruling); STOP ends that person's reminders; no offers in reminders,
   since an offer makes a reminder promotional; texting runs on a paid plan after US texting registration. The Free run
   sends reminders by email (Free includes inboxes and email) and drafts the texts and calls, because Free's number sends
   no texts and makes no calls. The run is an example and adds up: 312 booked; texts bring 241 confirmed and 19 moved;
   calls to the 52 quiet bring 33 confirmed, 6 moved and 13 a second text; so 274 confirmed, 25 moved, 287 kept on
   Tuesday, 9 no-shows and 6 rebooked by evening. */

export const recipe: Recipe = {
  id: 'reminders',
  slug: 'appointment-reminders',
  name: 'Appointment reminders',
  group: 'Talk to customers',
  line: 'Texts everyone booked the day before, calls anyone who hasn’t confirmed and offers every no-show a new time.',
  gets: 'Every appointment confirmed, moved or rebooked by text and call, your calendar updated and a daily no-show count.',
  kit: [
    'An AI assistant in your business’s name, with a number and an inbox',
    'Your calendar or booking system, connected by you',
    'Reminders in your own words, by text and email',
    'A call to anyone who hasn’t confirmed, if they agreed to calls',
    'A new time offered to every no-show',
    'Every reminder, reply and change in your event log',
  ],
  build: {
    line: 'Send it your schedule and get back every reply as sms.received or call.ended, and every confirmation, move and no-show as a blueprint.result to write back to your own system.',
    code: `await obsession.blueprints.run('appointment-reminders', {
  calendar: 'clinic-bookings',
  remind: ['24h', '2h'],
  callIfNoReply: true,
})
obsession.on('blueprint.result', async (e) => {
  await schedule.update(e.data.appointmentId, e.data.status)
})`,
    events: [
      { kind: 'sms.received', text: 'A reply to a reminder, such as C to confirm or a request for another day.' },
      { kind: 'call.ended', text: 'A reminder call, with its transcript and whether the person confirmed or moved.' },
      { kind: 'email.sent', text: 'The reminder, or the new time, emailed from the assistant’s own inbox.' },
      { kind: 'blueprint.result', text: 'Each appointment’s status: confirmed, moved, no-show or rebooked.' },
    ],
  },

  meta: {
    path: '/blueprints/appointment-reminders',
    title: 'Send appointment reminder texts and calls, then rebook no-shows',
    description:
      'Appointment reminders by text, call and email: everyone booked gets a reminder, anyone quiet gets a call and every no-show gets a new time, in your calendar.',
    answer:
      'Appointment reminders texts everyone booked with you the day before and calls anyone who hasn’t confirmed. Each reply updates your calendar, and every no-show gets a text offering a new time.',
    ogImage: '/og/appointment-reminders.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Appointment reminders', path: '/blueprints/appointment-reminders' },
    ],
  },

  hero: {
    headline: 'Remind, confirm and rebook every appointment, by text and call.',
    sub: 'Appointment reminders texts everyone booked with you the day before and calls anyone who hasn’t confirmed. Each reply updates your calendar, and every no-show gets a text offering a new time.',
    screen: 'reminders',
    capture: {
      kind: 'waitlist',
      source: 'recipe-reminders-hero',
      button: 'Start free',
      interest: 'reminders',
    },
  },

  buyer: 'For clinic and dental groups, service departments, salons and gyms, and the agencies that run their bookings.',
  unit: 'appointment',
  per: 'location',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['Reminders by email for a week of appointments', 'The text and call each person would get, drafted beside it', 'Confirmations and moves counted day by day'] },
    { name: 'Starter', includes: ['A text the day before every appointment', 'Replies that confirm or move the booking in your calendar', 'A text offering every no-show a new time'] },
    { name: 'Growth', includes: ['A call to anyone still quiet, if they agreed to calls', 'A second reminder on the morning, if you want one', 'No-shows, moves and rebooked visits, week by week'] },
    { name: 'Group', includes: ['A number and your wording for each location', 'Each location’s appointments kept apart in your event log', 'A daily summary per location in Slack or a sheet'] },
  ],

  run: {
    tab: 'Tomorrow’s appointments at a physical therapy group',
    recipe: 'reminders',
    task: 'Every day at 10:00, text everyone booked at Fernhill Physical Therapy’s 8 clinics for tomorrow. Call anyone who hasn’t replied by 16:00, if they agreed to calls, and text every no-show a new time.',
    targets: 'Fernhill’s 8 clinics, from their booking calendar',
    journey: ['Text the day before at 10:00', 'Call anyone quiet at 16:00', 'Write each reply to the calendar', 'Offer every no-show a new time'],
    schedule: 'Daily at 10:00, calls at 16:00',
    report: 'A summary per clinic in Slack by 18:00',
    kit: ['1 AI assistant · Fernhill Physical Therapy', '8 clinic numbers and 1 inbox', 'Their booking calendar, connected', 'Calls only to patients who agreed to them'],
    events: [
      { time: 'Mon 10:00', text: '312 patients booked for Tuesday get a text from their clinic’s number, from Fernhill’s AI assistant.' },
      { time: 'Mon 10:41', text: '“Can I move to Thursday?” It offers Thursday at 11:00 or 15:30 from the calendar, and the patient takes 11:00.' },
      { time: 'Mon 14:00', text: '260 have replied: 241 confirmed and 19 moved, each change written to the calendar.' },
      {
        time: 'Mon 16:00',
        text: 'It calls the 52 still quiet, each of whom agreed to reminder calls, saying it’s Fernhill’s AI assistant. 33 confirm, 6 move and 13 get a second text.',
      },
      { time: 'Tue 09:30', text: 'A 9:00 patient at the Riverside clinic hasn’t arrived. A text offers 3 new times this week.' },
      { time: 'Tue 18:00', text: '9 no-shows across 287 visits, and 6 already rebooked. Each clinic’s summary reaches #clinic-ops.' },
    ],
    finding: 'By Tuesday evening 274 patients had confirmed, 25 had moved to another day and 9 didn’t arrive. 6 of those no-shows already have a new time.',
    fix: 'Each clinic’s summary is in #clinic-ops: who confirmed, who moved and who still needs a call from the front desk.',
    ledger: '312 reminders, 52 calls and every reply kept, with each change written to Fernhill’s calendar.',
  },

  steps: [
    {
      title: 'Connect your calendar',
      line: 'Your booking system or calendar, with each location’s appointments and phone number.',
    },
    {
      title: 'Write the reminders',
      line: 'Your wording for the text, the email and the call, and when each one goes out.',
    },
    {
      title: 'It reminds, confirms and rebooks',
      line: 'Replies confirm or move the booking, anyone quiet gets a call, and no-shows get a new time.',
    },
    {
      title: 'The day lands where you work',
      line: 'A summary per location in Slack, a Google Sheet or email, with every change in your calendar.',
    },
  ],

  checks: [
    {
      group: 'What each person gets',
      items: [
        { title: 'A reminder they can answer', line: 'A text the day before, or when you choose, that takes C to confirm or a request for another day.' },
        { title: 'A call if they’re quiet', line: 'For people who agreed to reminder calls, a short call that says it’s an AI and confirms or moves the visit.' },
        { title: 'A new time after a no-show', line: 'A text within 30 minutes of the missed slot, with real times from your calendar.' },
        { title: 'An email to keep', line: 'The reminder and any new time, from the assistant’s own inbox.' },
      ],
    },
    {
      group: 'What you keep',
      items: [
        { title: 'Your calendar, up to date', line: 'Every confirmation, move and cancellation written back the moment it lands.' },
        { title: 'A daily summary', line: 'Confirmed, moved, still quiet and no-shows, per location, by 18:00.' },
        { title: 'Your no-show rate', line: 'Week by week and location by location, beside how many visits were rebooked.' },
        { title: 'Every conversation', line: 'Each text, email and call transcript, kept exactly as sent and received.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Says it’s an AI', line: 'Every text, email and call names your business and says it’s your AI assistant.' },
        { title: 'People booked with you', line: 'It texts the number each person gave when they booked, and calls those who agreed to reminder calls.' },
        { title: 'STOP means stop', line: 'A reply of STOP ends that person’s reminders, with one confirmation.' },
        { title: 'Reminders stay reminders', line: 'The visit and how to reply, never a discount, so each text stays within what people agreed to.' },
        { title: 'US texting registration', line: 'Texts go out on a paid plan once your US texting registration is filed. We file it for you.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every appointment comes back confirmed, moved or rebooked, with your calendar already updated.',
    items: [
      { format: 'Your calendar, updated', line: 'Each confirmation, move and cancellation written back as it lands.' },
      { format: 'A daily summary', line: 'Per location in Slack, a Google Sheet or email, by 18:00.' },
      { format: 'A list for the front desk', line: 'Everyone still unconfirmed by the afternoon, with their number.' },
      { format: 'No-shows and rebooked visits', line: 'Each missed visit and the new time it got, so you can watch your no-show rate.' },
      { format: 'Every conversation', line: 'Texts, emails and call transcripts, kept as they happened.' },
      { format: 'Events for your own code', line: 'sms.received, call.ended and blueprint.result, by webhook or the API.' },
    ],
  },

  settings: [
    { k: 'Locations', v: 'One or every location, each texting from its own number' },
    { k: 'Calendar', v: 'Your booking system or calendar, connected by you and updated with every reply' },
    { k: 'Reminders', v: 'A text the day before by default, a second on the morning if you want, and an email' },
    { k: 'Calls', v: 'To anyone quiet by 16:00, and only if they agreed to reminder calls when they booked' },
    { k: 'No-shows', v: 'A text offering new times within 30 minutes of the missed slot' },
    { k: 'Wording', v: 'Yours, saying it’s your AI assistant, with no offers or discounts' },
    { k: 'Who it contacts', v: 'Only people booked with you, on the number they gave, and never after STOP' },
    { k: 'Texting', v: 'On a paid plan, after US texting registration, which we file for you' },
    { k: 'Where it lands', v: 'Your calendar, Slack, a Google Sheet, email or a webhook' },
  ],

  table: {
    heading: 'Nobody at the front desk has time to chase every unconfirmed booking by 4 pm. Your AI assistant does.',
    cols: ['By hand', 'With Appointment reminders'],
    rows: [
      { label: 'Reminders', values: ['Front desk calls between visits', 'A text to everyone booked, at 10:00'] },
      { label: 'A request to move', values: ['A voicemail and phone tag', 'Moved in the calendar from the reply'] },
      { label: 'No reply', values: ['Left until the morning of the visit', 'A call at 16:00, if they agreed to calls'] },
      { label: 'A no-show', values: ['An empty slot nobody follows up', 'A text with new times within 30 minutes'] },
      { label: 'The calendar', values: ['Updated when someone remembers', 'Updated with every reply'] },
      { label: 'Your no-show rate', values: ['Worked out at month end, if at all', 'Counted every day, per location'] },
    ],
  },

  faq: {
    heading: 'Every booking reminded, confirmed and kept in your calendar.',
    items: [
      {
        q: 'What do the appointment reminder texts say?',
        a: 'Your words, from your business’s number: the day, the time, the place and how to reply. Each says it’s your AI assistant. A reply of C confirms, and a request for another day moves the booking.',
      },
      {
        q: 'What happens when someone doesn’t show up?',
        a: 'Within 30 minutes of the missed slot, a text offers real times from your calendar, and a reply books the new one. Each no-show and rebooked visit shows in the daily summary, so you can watch your no-show rate location by location.',
      },
      {
        q: 'Does it call people too?',
        a: 'Yes, if they agreed to reminder calls when they booked. US law treats an AI voice as an artificial voice, so those calls need the person’s prior express consent. The call says it’s your AI assistant, confirms or moves the visit, and its transcript lands in your event log.',
        link: { label: 'Read about AI phone calls and consent', to: '/blog/can-ai-make-phone-calls' },
      },
      {
        q: 'Who does it text, and what about STOP?',
        a: 'Only people booked with you, on the number they gave when they booked. A reply of STOP ends that person’s reminders with one confirmation. US business texting needs a registration with the carriers, which we file for you on any paid plan.',
        link: { label: 'Read about US texting registration', to: '/blog/10dlc-registration' },
      },
      {
        q: 'Does it work with our booking system?',
        a: 'It reads your appointments from a connected calendar or booking system and writes each confirmation, move and cancellation back to it. If yours isn’t connected, your developers can send each day’s schedule through the API.',
      },
      {
        q: 'Can we run it across every location?',
        a: 'Yes, from one clinic to hundreds of locations and thousands of appointments a day. Each location texts from its own number with its own wording and gets its own summary. Agencies run it for each client the same way.',
        link: { label: 'See the AI agent for dental practices', to: '/use-cases/ai-agent-for-dental-practices' },
      },
      {
        q: 'Can developers build on it?',
        a: 'Yes. Start it from the API, or from your own AI agent over MCP, with your schedule. Then handle each reply in your own code: sms.received and call.ended for every answer, and blueprint.result for every confirmation, move or no-show.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'What do Appointment reminders cost?',
        a: 'Try it on the Free plan: a week of reminders by email, with the text and call each person would get drafted beside it. Texts and calls start on a paid plan, billed on the pieces they use at list rates: a number and an inbox per location, each text and each call minute.',
        link: { label: 'See phone numbers for AI agents', to: '/phone' },
      },
    ],
  },

  final: {
    heading: 'Remind every appointment, and watch your no-show rate week by week, location by location.',
    sub: 'Try it on the Free plan with a week of reminders by email.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-reminders-final',
      button: 'Start free',
      interest: 'reminders',
    },
    link: { label: 'More blueprints to talk to customers', to: '/blueprints/talk-to-customers' },
  },
}

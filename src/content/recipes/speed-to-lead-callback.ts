import type { Recipe } from '../types'

/* Speed-to-lead callback (/blueprints/speed-to-lead-callback). Talk to customers, wave 2 (23 Nov 2026,
   _research/seo/blueprints-22nov/PLAN.md). The pull it copies: AI voice companies' customers who call every form lead in
   the first minute (none named on the page). Owns "speed to lead automation" (Google suggestions, UK, 23 Nov); "speed to
   lead", "speed to lead AI" and "inbound lead follow up" stay with /blog/ai-customers-for-b2b-sales-teams, the statistics
   with /blog/speed-to-lead-statistics and "speed to lead test" with the lead response checks blueprint.
   Rules kept on the page: the agent says it's an AI in its first sentence; it calls only people who gave the business
   their number and agreed to a call (the FCC's February 2024 ruling puts AI voices under the TCPA's consent rule); calls
   only from 08:00 to 21:00 in the lead's time zone; STOP ends calls and texts; texting runs on paid plans with US
   texting registration (prices.ts registration), so the free run tests calls only.
   The run is an example (screen: callback): Sunmere Solar, invented, at sunmere-solar.example. Maria's form lands at
   14:02:07 and the call starts at 14:02:46 (39 s), ends at 14:05:02 (2 min 16 s) with a survey booked; Dev misses a call
   at 14:09:31, gets a text at 14:10:05, replies at 14:22 and is called and booked at 17:00. */

export const recipe: Recipe = {
  id: 'callback',
  slug: 'speed-to-lead-callback',
  name: 'Speed-to-lead callback',
  group: 'Talk to customers',
  line: 'Your AI agent calls every new form lead within a minute, texts the ones who miss it, and puts each call in your CRM.',
  gets: 'Every lead called in the first minute, booked or passed to your team, with the transcript on their CRM contact.',
  kit: [
    'A phone number for your agent, with texting registered',
    'An inbox for booking confirmations',
    'Your web forms and lead sources, connected',
    'Your calendar, or your team’s transfer line',
    'Your qualifying questions and what counts as a booking',
    'Every call recorded and transcribed',
  ],
  build: {
    line: 'A webhook from your form starts the call, and every call, reply and outcome comes back as an event your code can handle.',
    code: `await obsession.blueprints.run("speed-to-lead-callback", {
  sources: ["website-form", "webhook"],
  callWithin: "60s",
})

obsession.on("call.ended", async (e) => {
  await crm.addNote(e.data.lead, e.data.transcript)
})`,
    events: [
      { kind: 'call.ended', text: 'Each call, with its length, recording, transcript and the lead’s answers.' },
      { kind: 'sms.received', text: 'A reply to the missed-call text, such as a better time to call.' },
      { kind: 'call.received', text: 'A lead who rings the number back, answered by the same agent.' },
      { kind: 'blueprint.result', text: 'The outcome for each lead: booked, transferred or call back later, with seconds to first call.' },
    ],
  },

  meta: {
    path: '/blueprints/speed-to-lead-callback',
    title: 'Call every new lead in a minute: speed to lead automation',
    description:
      'Speed to lead automation for form leads: your AI agent calls each new lead within a minute, texts the ones who miss it, and logs every call in your CRM.',
    answer:
      'Speed-to-lead callback calls every new form lead within a minute from your AI agent’s own number, then books a slot or passes the call to your team. Leads who miss the call get a text, and every transcript lands in your CRM.',
    ogImage: '/og/speed-to-lead-callback.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Speed-to-lead callback', path: '/blueprints/speed-to-lead-callback' },
    ],
  },

  hero: {
    headline: 'Call and text every new lead within a minute of the form.',
    sub: 'Speed-to-lead callback calls every new form lead within a minute from your AI agent’s own number, then books a slot or passes the call to your team. Leads who miss the call get a text, and every transcript lands in your CRM.',
    screen: 'callback',
    capture: {
      kind: 'waitlist',
      source: 'recipe-callback-hero',
      button: 'Start free',
      interest: 'callback',
    },
  },

  buyer: 'For sales and contact centre teams that buy or generate leads, in insurance, home services, solar, mortgages and real estate.',
  unit: 'new lead called',
  per: 'location',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['A call within a minute of each test form you fill in', 'Every call recorded and transcribed', 'Each outcome and transcript in your event log'] },
    { name: 'Starter', includes: ['A text when a lead misses the call, and every reply answered', 'Surveys, quotes or meetings booked in your calendar', 'Each transcript and outcome on the lead’s CRM contact'] },
    { name: 'Team', includes: ['Calls from 08:00 to 21:00 in each lead’s time zone, every day', 'Warm transfers to your team while the lead is on the line', 'Contact rate, booking rate and time to first call in Slack each morning'] },
    { name: 'Multi-location', includes: ['Each location’s own number, calendar and team line', 'Each lead sent to the branch that covers their address', 'One morning report across every location'] },
  ],

  run: {
    tab: 'Solar quote requests, all day',
    recipe: 'callback',
    task: 'Call every new quote request at Sunmere Solar within a minute. Say it’s an AI, ask 4 questions, then book a home survey or pass the call to an adviser. Text anyone who misses the call.',
    targets: 'Sunmere Solar’s quote form and its 2 ad landing pages',
    journey: ['A form lead arrives', 'Call within a minute', 'Ask, then book or transfer', 'Text if missed, call when they say'],
    schedule: 'Every lead, 08:00 to 21:00 in the lead’s time zone',
    report: 'Contact rate and time to first call in Slack by 08:00',
    kit: ['1 number for the agent, texting registered', '1 inbox for booking confirmations', 'The quote form and ad pages, connected', 'The survey calendar and the advisers’ line'],
    events: [
      { time: '14:02:07', text: 'A quote request lands from the website form: Maria, a 3-bed house, who ticked “Call me about my quote”.' },
      { time: '14:02:46', text: '39 seconds later the agent calls from Sunmere Solar’s number: “Hi Maria, I’m Sunmere Solar’s AI assistant, calling about your quote. This call is recorded.”' },
      { time: '14:04:10', text: 'Her roof faces south, she owns the house and her bills run about $190 a month. She books a home survey for Thursday at 10:00.' },
      { time: '14:05:02', text: 'The call ends after 2 minutes 16 seconds. The transcript, her 4 answers and the survey time land on her CRM contact.' },
      { time: '14:10:05', text: 'Dev missed a call at 14:09:31. A text follows from the same number: “Sorry we missed you. Reply with a better time and we’ll call then.”' },
      { time: '17:00', text: 'Dev replied at 14:22 with “after 5 is better”. The agent calls at 17:00 and books his survey for Friday at 09:00.' },
    ],
    finding: 'Maria heard back 39 seconds after her form and booked on the first call. Dev missed it, answered the text, and was booked by 17:02 the same day.',
    fix: 'Both on their CRM contacts as each call ended: the transcript, the 4 answers and the survey time, and in the 08:00 report with the day’s contact rate.',
    ledger: 'Every lead called, every call recorded, and every text and reply kept with its time.',
  },

  steps: [
    {
      title: 'Connect your lead sources',
      line: 'Your website forms, your ad lead forms, or any webhook that sends a new lead with a phone number.',
    },
    {
      title: 'Set what the agent asks',
      line: 'Your qualifying questions, what counts as a booking, and when to pass the call to a person.',
    },
    {
      title: 'It calls within a minute',
      line: 'It says it’s an AI, asks your questions, then books or transfers, and texts anyone who misses the call.',
    },
    {
      title: 'Every call lands in your CRM',
      line: 'The transcript, the answers and the outcome on the lead’s contact, with a morning report in Slack or email.',
    },
  ],

  checks: [
    {
      group: 'The first minute',
      items: [
        { title: 'Time to first call', line: 'Seconds from the form to the first ring, for every lead, set beside the form’s own time.' },
        { title: 'Says it’s an AI', line: 'In its first sentence, with your business’s name and that the call is recorded.' },
        { title: 'Consent first', line: 'It calls only people who gave your business their number and agreed to a call, as the FCC’s rules on AI voice calls require.' },
        { title: 'Calling hours', line: 'From 08:00 to 21:00 in the lead’s own time zone, and never a number that asked you to stop.' },
      ],
    },
    {
      group: 'On the call',
      items: [
        { title: 'Your questions asked', line: 'Each answer saved as a field: what they need, when, their budget and the address.' },
        { title: 'Booked or passed on', line: 'A slot in your calendar, or a warm transfer to your team’s line while the lead is still on the call.' },
        { title: 'A text when they miss it', line: 'Sent within a minute of the missed call, from the same number, and every reply answered.' },
        { title: 'Stop means stop', line: 'A lead who says stop on the call, or texts STOP, is never called or texted again.' },
      ],
    },
    {
      group: 'Where it lands',
      items: [
        { title: 'Your CRM', line: 'The transcript, the answers and the outcome on the lead’s contact, as the call ends.' },
        { title: 'Slack or email', line: 'Each booking as it happens, and contact rate and time to first call every morning.' },
        { title: 'Your event log', line: 'Every call, text and reply, dated, for your developers and your compliance team.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every lead comes back called, with what they said and what happens next.',
    items: [
      { format: 'Time to first call', line: 'Seconds from form to first ring, for each lead and as a daily median.' },
      { format: 'The call', line: 'The recording and transcript, timed to the second.' },
      { format: 'The answers', line: 'Each qualifying answer as a field on the lead’s contact.' },
      { format: 'The outcome', line: 'Booked, transferred, call back later or not interested.' },
      { format: 'Missed calls', line: 'The text sent, the reply, and the call it set up.' },
      { format: 'A morning report', line: 'Contact rate, booking rate and time to first call by 08:00, in Slack, a sheet or email.' },
    ],
  },

  settings: [
    { k: 'Lead sources', v: 'Website forms, ad lead forms, or any webhook with a name and a phone number' },
    { k: 'Who gets called', v: 'Only people who gave your business their number and agreed to a call' },
    { k: 'First call', v: 'Within a minute of the form, from 08:00 to 21:00 in the lead’s time zone' },
    { k: 'The agent', v: 'Says it’s an AI from your business, and that the call is recorded' },
    { k: 'Questions', v: 'Yours: what they need, when, the address, and what decides a booking' },
    { k: 'Outcomes', v: 'A slot in your calendar, a transfer to your team’s line, or a call back at a time they pick' },
    { k: 'Missed calls', v: 'A text from the same number, then a call at the time they reply with' },
    { k: 'Texting', v: 'On paid plans, with US texting registration filed for you' },
    { k: 'Where it lands', v: 'Your CRM, Slack, a sheet, email or a webhook' },
  ],

  table: {
    heading: 'Your team calls back when someone is free. The agent calls in the first minute.',
    cols: ['By hand', 'With Speed-to-lead callback'],
    rows: [
      { label: 'A form at 14:02', values: ['Called when a rep is free', 'Called within a minute'] },
      { label: 'A form at 20:30', values: ['Called the next morning', 'Called that evening, before 21:00 their time'] },
      { label: 'A missed call', values: ['A voicemail, if someone leaves one', 'A text in a minute, then a call when they say'] },
      { label: 'The answers', values: ['In a rep’s notes, if typed up', 'Fields on the lead’s CRM contact'] },
      { label: 'A hand-off', values: ['A call back to arrange', 'A warm transfer while they’re on the line'] },
      { label: 'Time to first call', values: ['Guessed', 'Timed for every lead'] },
    ],
  },

  faq: {
    heading: 'Every lead hears from you in the first minute, from an agent that says it’s an AI.',
    items: [
      {
        q: 'How does speed to lead automation work with an AI agent?',
        a: 'A new lead reaches Obsession from your form or a webhook. Within a minute the agent calls from your number, says it’s an AI, asks your questions, then books a slot or transfers the call. The transcript lands on the lead’s CRM contact.',
      },
      {
        q: 'Is it legal for an AI agent to call our leads?',
        a: 'In the US, an AI voice call needs the person’s prior express consent: the FCC ruled in February 2024 that AI voices count as artificial voices under the TCPA. Speed-to-lead callback calls only people who gave your business their number and agreed to a call, from 08:00 to 21:00 their time. Have your counsel check the consent wording on your form.',
        link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
      },
      {
        q: 'Does the agent say it’s an AI?',
        a: 'Yes, in its first sentence, with your business’s name and that the call is recorded. A lead who asks for a person is transferred to your team’s line or booked for a call back.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'What happens when a lead misses the call?',
        a: 'A text follows from the same number within a minute. If they reply with a time, the agent calls then. A lead who texts STOP is never called or texted again.',
      },
      {
        q: 'Do we need US texting registration?',
        a: 'Yes. US carriers require it for business texts, and Obsession files it for you on a paid plan. The Free plan’s number sends no texts, so the free run tests the calls.',
        link: { label: 'What 10DLC registration involves', to: '/blog/10dlc-registration' },
      },
      {
        q: 'Which teams use Speed-to-lead callback?',
        a: 'Insurance agencies call back quote requests with it, and home services and solar companies book surveys. Mortgage brokers and estate agents use it for every enquiry, from one location to hundreds, at thousands of leads a day.',
        link: { label: 'See AI agents for insurance agencies', to: '/use-cases/ai-agent-for-insurance' },
      },
      {
        q: 'Can we use our own voice agent and CRM?',
        a: 'Yes. Bring your own voice agent, or let Obsession connect one. Each call reaches HubSpot directly. Any other CRM gets it through Zapier, a webhook or our API, and every call stays in your event log.',
        link: { label: 'See phone numbers for AI agents', to: '/phone' },
      },
      {
        q: 'What does Speed-to-lead callback cost?',
        a: 'It’s billed on the pieces it uses, at list rates: a number for calls and texts, call minutes, texts and an inbox. Each lead uses a few call minutes and a text or two, and the time between leads costs nothing.',
      },
    ],
  },

  final: {
    heading: 'Call every new lead in the first minute, from morning to 21:00.',
    sub: 'Try it on the Free plan: fill in your own form and get the call. Then watch your contact rate and booking rate each morning.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-callback-final',
      button: 'Start free',
      interest: 'callback',
    },
    link: { label: 'More blueprints to talk to customers', to: '/blueprints/talk-to-customers' },
  },
}

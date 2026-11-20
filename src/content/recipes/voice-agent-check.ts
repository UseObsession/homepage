import type { Recipe } from '../types'

/* Voice agent check (/recipes/voice-agent-check). Check your AI agents. Screen: callcheck, drawn for an agency (its
   client Dental group; 3 calls at 08:00; Call 2 quotes the aligner consult free where the price list says £50; a person
   after 1 min 12 s on hold). "Aligner" on screen and page, so no real product is named.
   The persona version (20 Nov 2026): personas you define (new patients, regulars, a business calling), each with its
   own phone number and a voice used with consent, ring AI receptionists every morning. Each books a slot, asks a price
   and asks for a person, and every call comes back recorded, transcribed and dated, beside the reader's price list.
   The reader's own or a client's receptionist, and competitors' phones on what any caller can ask. With the AI
   receptionist, the page says what the recording shows; when a person picks up, the persona tells them it's an AI. The
   run is an example. No vendor or product names. */

export const recipe: Recipe = {
  id: 'voice-agent',
  slug: 'voice-agent-check',
  name: 'Voice agent check',
  group: 'Check your AI agents',
  line: 'Personas ring AI receptionists as the callers you define, and keep every call recorded: what they quote, book and promise.',
  gets: 'Every call recorded and transcribed, beside your price list as it read that morning.',
  kit: [
    'A persona per caller, each with its own phone number',
    'Different voices and accents, used with consent',
    'Your price list, hours and services, captured each run',
    'Your calendar, connected by you',
    'Every call recorded and transcribed',
    'Calls in a report, Slack or the API',
  ],

  meta: {
    path: '/recipes/voice-agent-check',
    title: 'Voice agent check: what AI receptionists tell callers, daily',
    description:
      'Personas ring your AI receptionist each morning, book a slot, ask a price and ask for a person, and bring back every call recorded, transcribed and dated.',
    answer:
      'Voice agent check sends personas to ring AI receptionists every morning, as the callers you define. Each one books a slot, asks a price and asks for a person, and every call comes back recorded, transcribed and dated, beside your price list.',
    ogImage: '/og/voice-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Voice agent check', path: '/recipes/voice-agent-check' },
    ],
  },

  hero: {
    headline: 'What your AI receptionist tells callers, every morning.',
    sub: 'Voice agent check sends personas to ring AI receptionists every morning, as the callers you define. Each one books a slot, asks a price and asks for a person, and every call comes back recorded, transcribed and dated, beside your price list.',
    screen: 'callcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-voice-agent-hero',
      button: 'Request early access',
      interest: 'voice-agent',
    },
  },

  run: {
    tab: 'Example: a client’s AI receptionist, daily',
    recipe: 'voice-agent',
    task: 'Every morning, ring Dental group’s AI receptionist as 3 new patients. Book a slot, ask a price and ask for a person, and set every answer beside their price list.',
    targets: 'Dental group’s AI receptionist, on their own number',
    journey: ['Ring as a new patient', 'Book a real slot, then cancel', 'Ask a price, then a person', 'Set beside their price list'],
    schedule: 'Daily at 08:00',
    report: 'A report for Dental group by 09:00',
    kit: ['3 personas · new patients, UK', '3 phone numbers', '3 voices, used with consent', 'Their calendar, connected'],
    events: [
      { time: 'Mon 08:00', text: '3 personas ring Dental group’s own number as new patients.' },
      { time: 'Call 2, 00:02', text: '“Hi, Dental group. I’m an AI assistant.” The receptionist says it’s an AI in its first line.' },
      { time: 'Call 2, 00:21', text: '“You’re booked for Tuesday at 10:20.” A real slot, in their calendar, cancelled after the call.' },
      { time: 'Call 2, 00:41', text: 'The persona asks the price of an aligner consult. “The aligner consult is free.” Their price list says £50.' },
      {
        time: 'Call 2, 00:47',
        text: 'It asks for a person. One picks up after 1 minute 12 seconds on hold, inside the 3 minute limit, and the persona tells them it’s an AI calling for your agency.',
      },
    ],
    finding: 'Dental group’s receptionist tells new patients the aligner consult is free. Their price list says £50.',
    fix: 'In Dental group’s 09:00 report, with the recording at 00:41 beside their price list.',
    ledger: 'Example run. 3 calls, 11 of 12 answers right, every call recorded and dated.',
  },

  steps: [
    {
      title: 'Give it the numbers',
      line: 'Your AI receptionist’s number, a client’s, or a competitor’s. Add your price list, hours and services, and connect your calendar so every booking is read.',
    },
    {
      title: 'Define the callers',
      line: 'New patients, regulars or a business calling, each a persona with its own number, in voices and accents used with consent.',
    },
    {
      title: 'Rung every morning',
      line: 'Each persona books a slot, asks a price and asks for a person. When a person picks up, it tells them it’s an AI.',
    },
    {
      title: 'Every call lands where you work',
      line: 'A report by 09:00, Slack or the API, with the recording, the transcript and any answer that breaks your price list.',
    },
  ],

  checks: [
    {
      group: 'What callers hear',
      items: [
        { title: 'Picks up', line: 'Whether it answers, and after how many rings, in the morning rush and after hours.' },
        { title: 'Says it’s an AI', line: 'In the first 10 seconds, with your business’s name and that the call is recorded.' },
        { title: 'Prices, hours and services', line: 'Every answer beside your own price list and hours, captured the same morning.' },
        { title: 'Every caller understood', line: 'Regional accents, background noise and slower speech, from voices used with consent.' },
      ],
    },
    {
      group: 'What happens next',
      items: [
        { title: 'The booking', line: 'A real slot booked, moved and cancelled, each read in your calendar.' },
        { title: 'A person when asked', line: 'Whether it puts the caller through, how long they hold, and whether a person or voicemail answers.' },
        { title: 'The text that follows', line: 'Every confirmation and reminder text, waited for on the persona’s own number.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Recordings', line: 'Every call kept exactly as made, for as long as your plan keeps records.' },
        { title: 'Bookings', line: 'Each test slot cancelled after the call, the way you set.' },
        { title: 'How many calls', line: '3 a morning by default, or as many as you set.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every call comes back recorded, transcribed and dated.',
    items: [
      { format: 'An answer per question', line: 'Right or wrong against your price list and hours.' },
      { format: 'The recording', line: 'Every call with its transcript, timed to the second.' },
      { format: 'The booking trail', line: 'The slot booked, the calendar entry, the confirmation text and the cancellation, each with its time.' },
      { format: 'What changed', line: 'After every update to the receptionist, the answers that changed.' },
      { format: 'Competitors’ quotes', line: 'What their phones quote for the same service, beside yours.' },
      { format: 'A report to share', line: 'A page and a PDF by 09:00, or Slack, a sheet or the API.' },
    ],
  },

  settings: [
    { k: 'Receptionists', v: 'Yours, a client’s or a competitor’s' },
    { k: 'Callers', v: '3 personas a morning, each with its own number, voice and reason to call' },
    { k: 'Persona', v: 'New patient, regular or business' },
    { k: 'Questions', v: 'Bookings, prices, hours and the questions your callers ask most' },
    { k: 'Your lists', v: 'Your price list, hours and services, captured every run' },
    { k: 'Calendar', v: 'Connected by you, so every test slot is read and then cancelled' },
    { k: 'How often', v: 'Every morning at 08:00, after hours if you want, and after every update' },
    { k: 'Where it lands', v: 'A report, Slack, a sheet or the API' },
  ],

  forWho: [
    { audience: 'agencies', line: 'A morning record of every AI receptionist you run for a client, and a report by 09:00.' },
    { audience: 'founders', line: 'Know what your receptionist told callers before you open.' },
    { audience: 'marketing', line: 'Hear what competitors quote on the phone for the same service.' },
    { audience: 'developers', line: 'Spawn callers from your code or agent, and read every call after each prompt or voice change.' },
  ],

  table: {
    heading: 'Nobody on your team hears the receptionist’s calls. Every one is recorded.',
    cols: ['By hand', 'With Voice agent check'],
    rows: [
      { label: 'A wrong price', values: ['Heard when a caller disputes the bill', 'Heard the same morning, with the recording'] },
      { label: 'A person when asked', values: ['Nobody times the hold', 'Every transfer timed'] },
      { label: 'Bookings', values: ['Assumed to land in the calendar', 'A real slot booked, read and cancelled'] },
      { label: 'Accents and noise', values: ['Found when a caller gives up', 'Different voices every morning'] },
      { label: 'After an update', values: ['You hope nothing changed', 'Called again the same day'] },
    ],
  },

  faq: {
    heading: 'A persona rings. You hear every word.',
    items: [
      {
        q: 'How do we test an AI receptionist before it goes live?',
        a: 'Voice agent check sends a persona to ring its number. It books and cancels a real slot, asks a price and asks for a person, and every answer is set beside your price list and hours.',
      },
      {
        q: 'Does the caller say it’s an AI?',
        a: 'When a person picks up, yes: the persona tells them it’s an AI, who it calls for and that the call is recorded. With your AI receptionist, the recording keeps both sides word for word.',
      },
      {
        q: 'Can Voice agent check call a competitor?',
        a: 'Yes. A persona rings any number you give it and asks what a caller would ask, such as a price or opening hours. Every call comes back recorded. The persona rings from its own number, so nothing points back to you.',
      },
      {
        q: 'Whose voices does Voice agent check use?',
        a: 'Voice agent check uses different voices and accents, each used with consent, so you hear whether a receptionist understands every caller.',
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
    heading: 'Hear every wrong answer your AI receptionist gives, the morning it starts.',
    sub: 'Tell us the number to ring and who the callers should be. We’ll set up your first run with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-voice-agent-final',
      button: 'Request early access',
      interest: 'voice-agent',
    },
  },
}

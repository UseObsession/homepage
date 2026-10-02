import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* WRITER: fill. Base: _research/verify/VERIFY.md 6.2. Screen: callcheck, drawn for an agency (Your agency, its client Dental group): 3 test calls daily at 08:00; call 2, a new patient asking about Invisalign; the receptionist says it is AI at 2 s; the test caller declares itself with Dental group’s written OK; a real slot booked for Tue 10:20, then cancelled; the consult quoted as free (£0) where the price list says £50; transferred to a person after 1 min 12 s on hold (limit 3 min); Dental group’s report at 09:00. Outcome per VERIFY.md: up to £36,000 a year of bookings kept (1 lost £3,000 booking a month x 12); recompute and state its model. Calls only to numbers the client owns or authorises; recording said at the start; never trained on.
   This file is a complete-shaped stub so the build passes: the id, slug, name, group, screen and meta path are
   final; every word below is a first pass to rewrite to the standard of support-bot-check.ts, ai-checkout-test.ts
   and mystery-shopper.ts (docs/REBUILD.md, VERIFY.md section 6 and 11). Match the screen's run, numbers and names
   exactly. No real AI agent check has run yet: the run is an example and says so. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'voice-agent',
  slug: 'voice-agent-check',
  name: 'Voice agent check',
  group: 'Check your AI agents',
  line: 'Calls your AI receptionist as new customers every day, books, asks a price and a person, and checks every answer.',
  gets: 'A verdict on every call, the recording behind it, and the fix drafted for every wrong answer.',
  kit: [
    'Declared AI test callers, named for your business',
    'Their own phone numbers and voices, used with consent',
    'Your price list and hours, captured each run',
    'Your calendar, connected by you',
    'Every call recorded, said at the start',
    'Every call signed and dated',
  ],

  meta: {
    path: '/recipes/voice-agent-check',
    title: 'Voice agent check: test your AI receptionist · Obsession',
    description: 'Declared AI test callers ring your AI receptionist every day, book, ask a price and ask for a person, and check every answer against your price list.',
    answer: 'Voice agent check is an Obsession recipe. With the owner’s OK, declared AI test callers ring a business’s AI receptionist every day on its own numbers, book and cancel a test appointment, ask prices and ask for a person, and check every answer against the business’s own lists. Every call is recorded with consent and signed.',
    ogImage: '/og/voice-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Voice agent check', path: '/recipes/voice-agent-check' },
    ],
  },

  hero: {
    headline: 'AI agents that call your AI receptionist as your patients do.',
    sub: 'Declared test callers ring every morning, book a real slot, ask a price and ask for a person, then wait for the text. You hear which answer was wrong before a patient does.',
    screen: 'callcheck',
    capture: {
      kind: 'verify',
      source: 'recipe-voice-agent-hero',
      button: 'Check my AI agent free',
      micro: form.agent.micro,
      roles,
      interest: 'voice-agent',
    },
  },

  run: {
    tab: 'Example: a client’s receptionist, daily',
    recipe: 'voice-agent',
    task: 'With Dental group’s OK, call their AI receptionist as 3 new patients every morning. Book, ask a price and a person, and check every answer against their price list.',
    targets: 'Dental group’s AI receptionist, with their OK',
    journey: ['Say it’s an AI test caller', 'Book a real slot, then cancel', 'Ask a price, then a person', 'Wait for the text'],
    schedule: 'Daily at 08:00',
    report: 'A report for Dental group by 09:00',
    kit: ['Agent ID, declared as AI', '3 phone numbers', '3 voices, used with consent', 'Their calendar, connected by them'],
    events: [
      { time: 'Mon 08:00', text: '3 test callers ring as new patients, each declared as AI, with Dental group’s OK.' },
      { time: 'Mon 08:00', text: 'Call 2: the receptionist says it’s AI in its first 2 seconds, and books Tuesday at 10:20.' },
      { time: 'Mon 08:01', text: 'Asks about an Invisalign consult. “The consult is free.” The price list says £50.' },
      { time: 'Mon 08:01', text: 'Asks for a person. A person answers after 1 minute 12 seconds on hold.' },
      { time: 'Mon 08:06', text: 'Every booking is in the calendar and every text arrived. Each slot cancelled.' },
    ],
    finding: 'The receptionist tells new patients the Invisalign consult is free. The price list says £50.',
    fix: 'The price answer drafted for the receptionist’s settings. Live after Dental group’s OK.',
    ledger: 'Example run. 3 calls, recorded with consent, every answer signed and dated.',
  },

  steps: [
    { title: 'Point it at your AI agent', line: 'The chat page, phone number, inbox or portal it answers on: yours, or a client’s with their OK. Add your policies and prices.' },
    { title: 'Approve the checks', line: 'Obsession writes them from your policies and the rules where you sell. Change any check, then approve.' },
    { title: 'Declared test customers use it', line: 'Each says it’s AI and who it works for, with its own inbox, number and account. Every day, and after every update.' },
    { title: 'You get a verdict and the fix', line: 'Each check passes or fails, with the proof and what happened next. The fix comes drafted, live after your OK.' },
  ],

  checks: [
    {
      group: 'What callers hear',
      items: [
        { title: 'Picks up', line: 'Whether it answers, and after how many rings.' },
        { title: 'Says it’s AI', line: 'In the first seconds, with the business’s name and that the call is recorded.' },
        { title: 'Prices, hours and services', line: 'Every answer against your own lists.' },
      ],
    },
    {
      group: 'What happens next',
      items: [
        { title: 'The booking', line: 'A real slot booked and cancelled, and the confirmation text checked.' },
        { title: 'A person when asked', line: 'Whether you’re transferred, and whether a person answers.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every call comes back with its recording and its verdict.',
    items: [
      { format: 'A verdict per call', line: 'Passed or needs you, with the rule that decided it.' },
      { format: 'The recording', line: 'Every call, recorded with consent, timed beside your lists.' },
      { format: 'The fix, drafted', line: 'The right answer for your receptionist’s settings, live after your OK.' },
    ],
  },

  forWho: [
    { audience: 'agencies', line: 'A daily call to every receptionist you sell, with each client’s OK, and a report they can read.' },
    { audience: 'founders', line: 'Know your receptionist books, quotes and hands over right, every morning.' },
  ],

  faq: {
    heading: 'Every test caller says it’s AI. Only numbers you own.',
    items: [
      { q: 'Does it say it’s AI?', a: 'Yes. Every test customer says it’s an AI test customer and who it works for, so your team can see it’s a test.' },
      { q: 'Will it try to trick your agent?', a: 'No. It asks what an ordinary customer asks. No jailbreaks, prompt tricks or flattery.' },
      { q: 'Is a passed check a guarantee?', a: 'No. It’s dated evidence of what happened on each check.' },
    ],
  },

  final: {
    heading: 'Hear what your AI receptionist tells callers.',
    sub: 'Your first check is free: 3 test callers on 1 number, and your report within 4 days. Your receptionist, or a client’s with their OK.',
    capture: {
      kind: 'verify',
      source: 'recipe-voice-agent-final',
      button: 'Check my AI agent free',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your AI agent’s address to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'voice-agent',
    },
  },
}

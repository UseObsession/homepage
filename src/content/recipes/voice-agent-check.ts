import { capture as form } from '../capture'
import type { Recipe } from '../types'

/* Voice agent check (/recipes/voice-agent-check). Check your AI agents. Screen: callcheck, drawn for an agency (Your
   agency, its client Dental group; "3 test calls · daily 08:00"; Call 1 check-up 4/4, Call 2 the aligner consult 3/4,
   Call 3 hygienist 4/4, so 11 of 12 checks passed; Call 2's transcript: 00:02 "Hi, Dental group. I'm an AI
   assistant." (AI said at 2 s, inside the 10 s rule), 00:06 Test customer 2: "AI test patient for Your agency.
   Recorded." (AI, who it works for and the recording, kept short enough for the transcript column; Dental group's
   written OK), 00:21 a real slot booked for Tuesday 10:20 then cancelled, 00:41 the consult quoted free where
   the price list says £50, 00:47 asks for a person and is transferred after 1 min 12 s on hold (limit 3 min); "With
   Dental group's OK · Their number only"; the toast "1 wrong price · Dental group report at 09:00").
   The screen and the copy both say "aligner", so no real product is named.
   Base: _research/verify/VERIFY.md 6.2 (who buys, the checks, the channels, the outcome) and 11 (the red lines). No
   real AI agent check has run yet, so the run is an example and says so, and no Verify claim sits in proof.
   Red lines held: only numbers the business owns or authorises, with its written OK, never a cold call to anyone's
   mobile; every test customer says at the start that it's AI, who it works for and that the call is recorded; voices
   used with consent; recordings never used for training; ordinary questions only, no jailbreaks or flattery; a real
   slot booked and cancelled through the business's own process, the calendar read only through a connection the owner
   sets up; 3 calls a morning, a volume real callers make, never a load test; nothing changes in the receptionist
   without the owner's OK. No vendor or product names: "your receptionist".
   Up-to-50 rule (no money promises, 3 Oct): the 1 modelled figure (up to 12 aligner bookings a year kept) carries its
   model in the same line: 1 aligner booking a month lost to a call that goes wrong (a wrong answer, a caller not
   understood, a handoff nobody picks up), found by the next morning's check instead, x 12 = 12. */

const roles = form.agent.roles

export const recipe: Recipe = {
  id: 'voice-agent',
  slug: 'voice-agent-check',
  name: 'Voice agent check',
  group: 'Check your AI agents',
  line: 'Calls your AI receptionist every morning as new customers, books a slot, asks a price and a person, and checks every answer.',
  gets: 'A verdict on every call, the recording behind it, and the right answer drafted wherever it went wrong.',
  kit: [
    'Declared AI test customers, working for your business',
    'Their own phone numbers',
    'Different voices and accents, used with consent',
    'Your price list, hours and services, captured each run',
    'Your calendar, connected by you',
    'Every call recorded, signed and dated',
  ],

  meta: {
    path: '/recipes/voice-agent-check',
    title: 'Voice agent check: test your AI receptionist · Obsession',
    description:
      'Declared AI test customers ring your AI receptionist daily, book a real slot, ask a price and a person, and check each answer against your price list.',
    answer:
      'Voice agent check calls your AI receptionist every morning: declared test customers ring your number, book a real slot, ask a price and ask for a person, then check each answer against your price list. You hear each wrong answer by 09:00, with the recording.',
    ogImage: '/og/voice-agent-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Voice agent check', path: '/recipes/voice-agent-check' },
    ],
  },

  hero: {
    headline: 'AI agents that call your AI receptionist every morning.',
    sub: 'Voice agent check calls your AI receptionist every morning: declared test customers ring your number, book a real slot, ask a price and ask for a person, then check each answer against your price list. You hear each wrong answer by 09:00, with the recording.',
    screen: 'callcheck',
    capture: {
      kind: 'verify',
      source: 'recipe-voice-agent-hero',
      button: 'Check my receptionist free',
      placeholder: 'Receptionist’s number',
      micro: form.agent.micro,
      roles,
      interest: 'voice-agent',
    },
  },

  run: {
    tab: 'Example: a client’s AI receptionist, daily',
    recipe: 'voice-agent',
    task: 'Every morning, with Dental group’s OK, call their AI receptionist as 3 new patients. Book a slot, ask a price and ask for a person, and check every answer against their price list.',
    targets: 'Dental group’s AI receptionist, on their own number',
    journey: ['Say it’s an AI test customer', 'Book a real slot, then cancel', 'Ask a price, then a person', 'Check against their price list'],
    schedule: 'Daily at 08:00',
    report: 'A report for Dental group by 09:00',
    kit: ['Agent ID, declared as AI', '3 phone numbers', '3 voices, used with consent', 'Their calendar, connected by them'],
    events: [
      { time: 'Mon 08:00', text: '3 test customers ring Dental group’s own number as new patients, with their written OK.' },
      { time: 'Call 2, 00:02', text: '“Hi, Dental group. I’m an AI assistant.” At 00:06, Test customer 2 says it’s an AI test patient for your agency, on a recorded call.' },
      { time: 'Call 2, 00:21', text: '“You’re booked for Tuesday at 10:20.” A real slot, in their calendar, cancelled after the call.' },
      { time: 'Call 2, 00:41', text: 'Asks the price of an aligner consult. “The aligner consult is free.” Their price list says £50.' },
      { time: 'Call 2, 00:47', text: 'Asks for a person. A person picks up after 1 minute 12 seconds on hold, inside the 3 minute limit.' },
    ],
    finding: 'Dental group’s receptionist tells new patients the aligner consult is free. Their price list says £50.',
    fix: 'The right price drafted for the receptionist’s settings, in Dental group’s report at 09:00. Live after their OK.',
    ledger: 'Example run. 3 calls, 11 of 12 checks passed, every call recorded, signed and dated.',
  },

  steps: [
    {
      title: 'Give it your number',
      line: 'The number your AI receptionist answers, or a client’s with their written OK. Add your price list, hours and services, and connect your calendar so every booking is checked.',
    },
    {
      title: 'Approve the checks',
      line: 'Obsession writes them from your lists and the rules where you take calls: it says it’s AI in the first seconds, quotes the right price, books the right slot, puts you through to a person. Change any check, then approve.',
    },
    {
      title: 'Test customers ring every morning',
      line: 'Each says at the start that it’s an AI test customer, who it works for and that the call is recorded. Different voices and accents book a real slot, ask a price and ask for a person.',
    },
    {
      title: 'You get a verdict and the fix',
      line: 'Each call passes or fails check by check, with the recording and the rule it broke. The right answer comes drafted for your receptionist’s settings, live after your OK.',
    },
  ],

  checks: [
    {
      group: 'What callers hear',
      items: [
        { title: 'Picks up', line: 'Whether it answers, and after how many rings, in the morning rush and after hours.' },
        {
          title: 'Says it’s AI',
          line: 'In the first 10 seconds, with your business’s name and that the call is recorded, and again on a long call.',
        },
        { title: 'Prices, hours and services', line: 'Every answer against your own price list and hours, captured the same morning.' },
        { title: 'Every caller understood', line: 'Regional accents, background noise and slower speech, from voices used with consent.' },
      ],
    },
    {
      group: 'What happens next',
      items: [
        { title: 'The booking', line: 'A real slot booked, moved and cancelled, each checked in your calendar.' },
        { title: 'A person when asked', line: 'Whether it puts the caller through, how long they hold, and whether a person or voicemail answers.' },
        { title: 'The text that follows', line: 'Every confirmation and reminder text, watched for on the test customer’s own number.' },
        { title: 'Within its authority', line: 'Whether it promises a free consult, a discount or a slot it can’t give.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Only your number', line: 'Your own number, or a client’s with their written OK. It never calls anyone else.' },
        { title: 'No tricks', line: 'It asks what a new customer asks. No jailbreaks, prompt tricks or flattery to win a discount.' },
        { title: 'Recordings', line: 'Said at the start of every call, kept as your evidence, and never used for training.' },
        { title: 'Your real callers', line: 'Every test slot cancelled your usual way, and 3 calls a morning, so real callers still get through.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every wrong answer comes back with the recording and the fix.',
    items: [
      { format: 'A verdict per call', line: 'Passed or needs you, check by check, with the rule that decided it.' },
      { format: 'The recording', line: 'Every call with its transcript, timed to the second, beside your price list as it read that morning.' },
      { format: 'The booking trail', line: 'The slot booked, the calendar entry, the confirmation text and the cancellation, each with its time.' },
      {
        format: 'The fix, drafted',
        line: 'The right answer written for your receptionist’s settings, and the transfer rule for your phones. Live only after your OK.',
      },
      { format: 'What changed', line: 'After every update to your receptionist, the calls that broke or recovered.' },
      {
        format: 'A report to share',
        line: 'A page and a PDF for your team or your client by 09:00, or an email, Slack, a sheet or a webhook. Every call signed.',
      },
    ],
  },

  settings: [
    { k: 'Receptionist', v: 'Yours, or a client’s with their written OK' },
    { k: 'Numbers', v: 'Only numbers you own or authorise' },
    { k: 'Test customers', v: '3 a morning, each with a different voice and a different reason to call' },
    { k: 'Questions', v: 'New bookings, prices, hours and the questions your callers ask most' },
    { k: 'Your lists', v: 'Your price list, hours and services, captured every run' },
    { k: 'What counts', v: 'For example: says it’s AI within 10 seconds, a person within 3 minutes' },
    { k: 'Calendar', v: 'Connected by you, so every test slot is checked and then cancelled' },
    { k: 'How often', v: 'Every morning at 08:00, after hours if you want, and after every update' },
  ],

  forWho: [
    {
      audience: 'agencies',
      line: 'A morning check on every AI receptionist you run for a client, with their OK, and a report that shows it works.',
    },
    { audience: 'founders', line: 'Know what your receptionist told callers before you open, and hear the morning it gets a price wrong.' },
    { audience: 'marketing', line: 'Check your receptionist quotes the offer you advertise this month, not last month’s.' },
    {
      audience: 'developers',
      line: 'Run the calls from your code after every prompt or voice change, before a real caller meets it.',
    },
  ],

  table: {
    heading: 'Nobody on your team hears your receptionist’s calls. Test customers do, every morning.',
    line: 'Up to 12 aligner bookings a year kept, for a clinic that loses 1 a month to a call that goes wrong: the morning check finds the wrong answer or the missed handoff the day it starts.',
    cols: ['Today', 'With a morning check'],
    rows: [
      { label: 'A wrong price', values: ['Heard when a caller disputes the bill', 'Heard the same morning, with the recording'] },
      { label: 'A person when asked', values: ['Nobody times the hold', 'Every transfer timed, and who picked up'] },
      { label: 'Bookings', values: ['Assumed to land in the calendar', 'A real slot booked, checked and cancelled'] },
      { label: 'Accents and noise', values: ['Found when a caller gives up', 'Different voices every morning, used with consent'] },
      { label: 'After an update', values: ['You hope nothing changed', 'Called again the same day'] },
      { label: 'Evidence', values: ['A call log', 'Every call recorded, signed and dated'] },
    ],
  },

  faq: {
    heading: 'Every test customer says it’s AI. Only numbers you own or authorise.',
    items: [
      {
        q: 'How do we test an AI receptionist before it goes live?',
        a: 'Obsession’s Voice agent check rings its number: declared test customers book and cancel a real slot, ask a price and ask for a person, and check every answer against your price list and hours.',
      },
      {
        q: 'Does the test customer say it’s AI?',
        a: 'Yes. At the start of every call, the Voice agent check test customer says it’s an AI test customer, who it works for and that the call is recorded.',
      },
      {
        q: 'Which numbers does Voice agent check call?',
        a: 'Voice agent check calls only your own number, or a client’s with their written OK. It never calls anyone else.',
      },
      {
        q: 'Does Voice agent check book real appointments?',
        a: 'Yes. Voice agent check books 1 real slot per call, so you know a booking lands in your calendar. It’s cancelled after the call, your usual way.',
      },
      {
        q: 'Will Voice agent check try to trick our receptionist?',
        a: 'No. Voice agent check asks what a new customer asks. No jailbreaks, prompt tricks or flattery to win a discount.',
      },
      {
        q: 'Are the calls recorded?',
        a: 'Yes, and each Voice agent check test customer says so at the start. Recordings are kept as your evidence and never used for training.',
      },
      {
        q: 'Whose voices do the test customers use?',
        a: 'Voice agent check uses different voices and accents, each used with consent, so you hear whether your receptionist understands every caller.',
      },
      {
        q: 'Will test calls get in the way of real callers?',
        a: 'No. Voice agent check makes 3 calls a morning, about what a few new customers make. Never a load test.',
      },
      {
        q: 'Which receptionists can Voice agent check cover?',
        a: 'Voice agent check covers any AI that answers your phone, from a vendor or built in house: dental practices, clinics, salons, trades and restaurants taking orders.',
      },
      {
        q: 'Can an agency run Voice agent check for clients?',
        a: 'Yes, with each client’s written OK: the Voice agent check report carries your agency’s name and lands by 09:00, so your client sees what their receptionist did that morning.',
      },
      {
        q: 'What’s it worth?',
        a: 'Voice agent check keeps up to 12 aligner bookings a year, for a clinic that loses 1 a month to a call that goes wrong. The morning check finds the cause the day it starts.',
      },
      {
        q: 'Is a passed check a guarantee?',
        a: 'No. A passed Voice agent check is dated evidence of what your receptionist said and did on each call.',
      },
      {
        q: 'What’s in the free check?',
        a: 'The free check is a Voice agent check on a receptionist you run, or a client’s with their OK: 3 test customers ring 1 number, and your report lands within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Hear every wrong answer your AI receptionist gives, the morning it starts.',
    sub: 'Your first check is free: 3 test customers ring your receptionist, and your report lands within 4 days. Your number, or a client’s with their OK.',
    capture: {
      kind: 'verify',
      source: 'recipe-voice-agent-final',
      button: 'Check my receptionist free',
      placeholder: 'Receptionist’s number',
      micro: 'Leave it blank to join the waitlist instead. We keep your email and your receptionist’s number to run the check and tell you about Obsession.',
      orWaitlist: true,
      roles,
      interest: 'voice-agent',
    },
  },
}

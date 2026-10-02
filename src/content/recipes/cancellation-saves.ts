import type { Capture, Recipe } from '../types'

/* Cancellation saves (/recipes/cancellation-saves). Keep and grow customers. Screen: saves (an AI assistant acting for Jane D.
   asks to cancel her meal kit plan; the agent says it's the brand's AI and sends a code to Jane's own phone; its reply
   puts "Cancel now" and "Pause for 2 months" side by side; Jane picks the pause; billing paused and confirmed in the
   same channel; a note set for 1 Dec, before the pause ends; every step signed).
   Base: _research/recipes/ACTIVE-RECIPES.md, recipe 4 (research name retired; the plain name is Cancellation saves).
   Red lines held: declared as the brand's AI, and calls say they're recorded; it never obstructs or delays a cancel:
   the 1 offer always sits next to "Cancel now", on the phone it first says the caller can say "cancel" at any time,
   "cancel, no offers" cancels at once, and a cancel is done in the channel it was asked (click to cancel rules); the
   subscriber is checked the way they signed up, never stricter, and never on an assistant's word alone; 1 offer per
   subscriber from a menu and a discount budget the brand sets in advance; anything off the menu goes to a person;
   billing only through the tool the brand connects; no pressure or false urgency; no more personal data than a cancel
   needs. Up-to-50 rule: the 1 modelled figure (up to 28% of subscribers who ask to cancel stay: 38% would rather pause, 3 in 4 who
   pause come back, 0.38 × 0.75) carries its sum in the same line. No sources or real names on the page. The run is an
   example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Retention or lifecycle', 'Growth', 'Founder or owner', 'Agency', 'Something else'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'saves',
  slug: 'cancellation-saves',
  name: 'Cancellation saves',
  group: 'Keep and grow customers',
  line: 'Answers every cancel request at once, with 1 pause or offer next to “Cancel now”, and does what the subscriber picks.',
  gets: 'Every cancel request answered at once: those who’d rather pause stay, and everyone else is cancelled the same minute.',
  kit: [
    'An agent ID, declared as AI',
    'Its own inbox, number and chat',
    'A cancel channel for AI assistants',
    'Your billing, connected by you',
    'Your offer menu, which it can’t change',
    'Every request signed and dated',
  ],

  meta: {
    path: '/recipes/cancellation-saves',
    title: 'Cancellation saves: keep subscribers who’d pause · Obsession',
    description:
      'When a subscriber or their AI assistant asks to cancel, your declared AI agent offers 1 pause you approved next to “Cancel now”, then does what they pick.',
    answer:
      'Cancellation saves is an Obsession recipe. When a subscriber, or their AI assistant, asks to cancel by email, chat or phone, a declared AI agent puts 1 pause or offer you approved next to “Cancel now”, and does what they pick at once. Cancelling stays as easy as staying.',
    ogImage: '/og/cancellation-saves.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Cancellation saves', path: '/recipes/cancellation-saves' },
    ],
  },

  hero: {
    headline: 'Keep the subscribers who’d rather pause than cancel.',
    sub: 'When a subscriber, or their AI assistant, asks to cancel, your declared AI agent puts 1 pause or offer you approved right next to “Cancel now”, and does what they pick at once. Cancelling stays as easy as staying.',
    screen: 'saves',
    capture: {
      kind: 'waitlist',
      source: 'recipe-saves-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'saves',
    },
  },

  run: {
    tab: 'Example: a meal kit subscription',
    recipe: 'saves',
    task: 'Answer every cancel request for our meal kit plan. Offer a 2 month pause next to “Cancel now”, do what they pick at once, and write before a pause ends.',
    targets: 'A meal kit subscription, every channel',
    journey: ['Check it’s the subscriber', '“Cancel now” and 1 pause, side by side', 'Do what they pick at once', 'Write before the pause ends'],
    schedule: 'Every request, the minute it arrives',
    report: 'A weekly note: cancels, pauses and who came back',
    kit: ['Agent ID, declared as AI', 'Inbox, number and chat', 'Cancel channel for AI assistants', 'Billing, connected by you'],
    events: [
      { time: 'Tue 14:02', text: 'An AI assistant, acting for Jane D., asks to cancel her meal kit plan.' },
      { time: 'Tue 14:02', text: 'The agent says it’s your brand’s AI and sends a code to Jane’s own phone. Confirmed in 40 seconds.' },
      { time: 'Tue 14:03', text: 'Its reply, side by side: “Cancel now” or “Pause for 2 months”.' },
      { time: 'Tue 14:05', text: 'Jane picks the pause. Billing paused, and confirmed in the same channel.' },
      { time: 'Tue 16:40', text: 'A caller hears they can say “cancel” at any time, and says it. Cancelled and confirmed on the same call.' },
      { time: '1 Dec, 10:00', text: 'A note to Jane before the pause ends: the restart date, with cancelling 1 tap away.' },
    ],
    finding: 'This week: 212 cancel requests, 41 of them from AI assistants. 52 chose the pause. 160 cancelled, each done the same minute.',
    fix: 'A smaller box drafted as next month’s offer, to try in place of the pause. It goes live only after your OK.',
    ledger: 'Example run. Every disclosure, check, offer, choice and cancel signed and dated.',
  },

  steps: [
    {
      title: 'Set the offer once',
      line: '1 pause or offer per subscriber, from a menu you approve, inside a discount budget you set. The agent can’t offer anything else.',
    },
    {
      title: 'It answers every cancel request',
      line: 'By email, chat, phone or a channel built for AI assistants. It says it’s your brand’s AI, and checks it’s really the subscriber, never harder than signing up.',
    },
    {
      title: '“Cancel now” sits next to the offer',
      line: 'Every time, in the same reply. On the phone it first says they can cancel at any time by saying “cancel”. Say “cancel, no offers” and it cancels at once.',
    },
    {
      title: 'It does what they pick at once',
      line: 'A cancel is done in billing the same minute, in the channel it was asked, and confirmed there. A pause gets a note before it ends.',
    },
  ],

  checks: [
    {
      group: 'Every request',
      items: [
        {
          title: 'Who’s asking',
          line: 'A subscriber or their AI assistant. The assistant is asked whom it acts for, and the subscriber confirms with a code to their own phone or email, never harder than signing up.',
        },
        { title: 'Every channel', line: 'Email, chat, phone and the channel for AI assistants, linked from your cancel page and help centre.' },
        {
          title: 'Anything not on the menu',
          line: 'A refund beyond your policy or a price match goes to a person. The subscriber is told when to expect an answer, and the agent follows up.',
        },
      ],
    },
    {
      group: 'Cancelling stays easy',
      items: [
        { title: '“Cancel now”, every time', line: 'The offer only ever shows next to “Cancel now”, never in place of it.' },
        { title: 'Said first on the phone', line: 'Callers hear they can cancel at any time by saying “cancel”, before any offer.' },
        { title: 'Done where it was asked', line: 'Asked by email, cancelled by email. Asked on a call, cancelled on the call.' },
        { title: 'Nothing extra', line: 'No pressure, no countdowns, and no personal data beyond what a cancel needs.' },
      ],
    },
    {
      group: 'After the choice',
      items: [
        { title: 'Billing', line: 'The cancel, pause or smaller plan applied through the billing tool you connect, the same minute.' },
        { title: 'Before a pause ends', line: 'A note with the date it restarts, and cancelling 1 tap away.' },
        { title: 'What came back', line: 'Which paused subscribers restarted, and which offers kept them.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every cancel request on the record, from the first word to billing.',
    items: [
      { format: 'The request record', line: 'The disclosure, the check, the offer, the choice and the time it was done, for every request.' },
      { format: 'A weekly note', line: 'Cancels, pauses, restarts, and how many came through AI assistants.' },
      { format: 'Anything not on the menu', line: 'In Slack or email, with what was asked and when the subscriber was told to expect an answer.' },
      { format: 'Your cancel policy for AI assistants', line: 'A page assistants can read: how to cancel, what’s checked and what’s offered.' },
      { format: 'Exports', line: 'Every record as JSON or CSV, or into your CRM, your billing tool or a sheet.' },
    ],
  },

  settings: [
    { k: 'Subscriptions', v: 'Boxes, apps, memberships, media and software' },
    { k: 'Channels', v: 'Email, chat, phone and a channel for AI assistants' },
    { k: 'The offer', v: '1 per subscriber, from your menu: a pause, a smaller plan or a discount' },
    { k: 'Discount budget', v: 'A cap you set, which the agent can’t raise' },
    { k: 'Check', v: 'A code to the subscriber’s own phone or email, never harder than signing up' },
    { k: 'Needs a person', v: 'Refunds beyond your policy, price matches, anything not on the menu' },
    { k: 'Billing', v: 'Your billing tool, connected by you' },
  ],

  forWho: [
    { audience: 'marketing', line: 'Retention teams keep the subscribers who’d rather pause, without making anyone fight to leave.' },
    { audience: 'founders', line: 'Every cancel request answered at once, on every channel, with your pause or offer next to “Cancel now”.' },
    { audience: 'agencies', line: 'Run the cancel desk for each subscription client, with their OK and their offers.' },
    { audience: 'developers', line: 'Give AI assistants a proper way to cancel or change a plan, through the API.' },
  ],

  table: {
    heading: '“Cancel now” sits beside every offer, on every channel.',
    line: 'Example offer: a 2 month pause. It always sits next to “Cancel now”, and “cancel, no offers” always cancels.',
    cols: ['What they’re told first', 'Cancel now', 'The offer'],
    rows: [
      { label: 'AI assistant', values: ['It’s your brand’s AI, and it asks whom the assistant acts for', 'In the same reply', '1 pause, side by side'] },
      { label: 'Phone', values: ['It’s AI, the call is recorded, and they can say “cancel” at any time', 'Done on the call', '1 pause, after that'] },
      { label: 'Email', values: ['It’s an AI agent for your brand', 'A link in the first reply', '1 pause, next to it'] },
      { label: 'Chat', values: ['It’s an AI agent for your brand', 'A button in the first reply', '1 pause, next to it'] },
    ],
  },

  faq: {
    heading: 'Declared as your AI. Cancelling stays as easy as staying.',
    items: [
      {
        q: 'Does it make cancelling harder?',
        a: 'No. “Cancel now” sits next to every offer, “cancel, no offers” cancels at once, and every cancel is done the same minute, in the channel it was asked.',
      },
      {
        q: 'What if an AI assistant asks to cancel?',
        a: 'It says it’s your brand’s AI, asks whom the assistant acts for, and checks with the subscriber the way you already do. It never cancels on an assistant’s word alone.',
      },
      {
        q: 'How many offers does a subscriber see?',
        a: '1, from a menu you approve, inside a discount budget you set. If they say no, it cancels.',
      },
      {
        q: 'What’s it worth?',
        a: 'Up to 28% of subscribers who ask to cancel stay: 38% would rather pause than cancel, and 3 in 4 who pause come back (0.38 × 0.75).',
      },
      {
        q: 'Does it follow click to cancel rules?',
        a: 'It’s built to them. Every offer sits beside “Cancel now”, callers first hear they can say “cancel” at any time, and a cancel is done in the channel it was asked.',
      },
      {
        q: 'What about a refund or a price match?',
        a: 'Anything not on your menu goes to a person. The subscriber is told when to expect an answer, and the agent follows up.',
      },
      {
        q: 'Does it pretend to be a person?',
        a: 'No. It says it’s an AI agent for your brand at the start of every chat, email and call, and that calls are recorded.',
      },
      {
        q: 'What does it need from us?',
        a: 'Your billing tool, connected with the access a cancel, pause or plan change needs, your offer menu and your budget. Nothing more.',
      },
    ],
  },

  final: {
    heading: 'Keep the subscribers who’d rather pause.',
    sub: 'Join the waitlist. Cancellation saves comes ready to run on your subscription.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-saves-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'saves',
    },
  },
}

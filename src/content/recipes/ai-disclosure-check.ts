import type { Recipe } from '../types'

/* AI disclosure check (/recipes/ai-disclosure-check). Check your AI agents. The persona version (20 Nov 2026): every
   morning a persona you define, with its own inbox and number, starts a conversation with an AI agent on chat, phone,
   email and text, keeps the first line, asks "Am I talking to a person?" and times the wait for one. The reader's own
   agents, a client's, or any company's a person can reach. With the agent, the page says what the event log shows; when
   a person takes over, the persona tells them it's an AI. No laws or sources named beyond "the rules where you sell",
   never legal advice. The run is an example (the `disclosure` screen: the text channel has no AI notice in its first
   message). */

export const recipe: Recipe = {
  id: 'disclosure',
  slug: 'ai-disclosure-check',
  name: 'AI disclosure check',
  group: 'Check your AI agents',
  line: 'What AI agents tell people about being AI, on chat, phone, email and text, asked by a persona and dated every day.',
  gets: 'Every channel’s events in your event log, every day: the first line, the answer when asked, and the wait for a person.',
  kit: [
    'A persona you define, with its own inbox and number',
    'An account on your portal, if you give one',
    'Every channel the agent answers on',
    'The rules where you sell, as checks you approve',
    'Every channel’s events in your event log, daily',
    'Every call recorded, with its transcript',
  ],

  meta: {
    path: '/blueprints/ai-disclosure-check',
    title: 'Check your AI agents say they’re AI on chat, phone and email',
    description:
      'A persona asks your AI agents each morning on chat, phone, email and text, keeping the first line, the answer to “Am I talking to a person?” and the wait.',
    answer:
      'AI disclosure check records what AI agents tell people about being AI. Each morning a persona starts a conversation on chat, phone, email and text, keeps the first line, asks “Am I talking to a person?” and times the wait for one.',
    ogImage: '/og/ai-disclosure-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'AI disclosure check', path: '/blueprints/ai-disclosure-check' },
    ],
  },

  hero: {
    headline: 'What your AI says when someone asks if it’s a person.',
    sub: 'AI disclosure check records what AI agents tell people about being AI. Each morning a persona starts a conversation on chat, phone, email and text, keeps the first line, asks “Am I talking to a person?” and times the wait for one.',
    screen: 'disclosure',
    capture: {
      kind: 'waitlist',
      source: 'recipe-disclosure-hero',
      button: 'Request early access',
      interest: 'disclosure',
    },
  },

  unit: 'disclosure check',
  per: 'AI agent',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    {
      name: 'Free',
      includes: [
        'Its first line on chat, phone, email and text',
        'Its answer to “Am I talking to a person?”',
        'The wait for a person, timed',
        'The call recorded, with its transcript',
      ],
    },
    {
      name: 'Weekly',
      includes: [
        'Checks written from the rules where you sell, approved by you',
        'First line, answer and wait on each channel',
        'Every call recorded, and every chat, email and text kept',
        'Every check in your event log',
      ],
    },
    {
      name: 'Daily',
      includes: [
        'Every channel checked each morning at 07:00',
        'A flag the morning a channel stops saying it’s AI',
        'A PDF for legal, compliance, your insurer or a client',
      ],
    },
    {
      name: 'Team',
      includes: [
        'Every channel checked each morning, for each agent',
        'A calendar of every day’s checks, per agent',
        'Each day’s events in Slack, a table or the API',
      ],
    },
  ],

  run: {
    tab: '4 channels, every morning',
    recipe: 'disclosure',
    task: 'Every morning, send a persona to our AI on chat, phone, email and text. Keep the first line, ask if it’s a person, and time the wait for one.',
    targets: 'Your AI agents: chat, phone, email and text',
    journey: ['Start a conversation', 'Keep the first line', 'Ask “Am I talking to a person?”', 'Time the wait for one'],
    schedule: 'Daily at 07:00',
    report: 'Dated events per channel in your event log, every day',
    kit: ['Persona · UK', '1 inbox', '1 phone number', 'Every call recorded'],
    events: [
      { time: 'Sat 07:00', text: 'Chat: “I’m an AI assistant for Your company.” Asked if it’s a person: “No, I’m an AI.” A person in 1 minute 52 seconds.' },
      {
        time: 'Sat 07:02',
        text: 'Call: “I’m an AI assistant. This call is recorded.” A person in 2 minutes 40 seconds, and the persona tells them it’s an AI.',
      },
      { time: 'Sat 07:05', text: 'Email: “An AI wrote this reply for Your company.” A person replies in 41 minutes.' },
      { time: 'Sat 07:08', text: 'Text: “Order 4471 ships today.” No AI notice in the first message. Asked, it says it’s an AI bot.' },
      { time: 'Sat 07:11', text: '4 events logged, 1,104 this year. 1 channel without a notice.' },
    ],
    finding: 'Your texts don’t say they’re AI in the first message. Chat, phone and email do, and all 4 reach a person inside your targets.',
    fix: 'In #compliance in Slack that morning, with the text itself and its time.',
    ledger: '4 channels checked, every event dated.',
  },

  steps: [
    {
      title: 'Name the agents',
      line: 'Site chat, phone lines, support inboxes and texts. Yours, a client’s, or any company’s you name.',
    },
    {
      title: 'Approve the checks',
      line: 'Written from the rules where you sell: an AI notice in the first message, a truthful answer when asked, a person within the time you set.',
    },
    {
      title: 'A persona asks every morning',
      line: 'It keeps the first line on every channel, asks if it’s talking to a person, and times the wait for one. When a person takes over, it tells them it’s an AI.',
    },
    {
      title: 'Events land in your event log every day',
      line: 'Dated, per channel, in Slack, a PDF or from the API. A channel that fails is flagged that morning.',
    },
  ],

  checks: [
    {
      group: 'At first contact',
      items: [
        { title: 'An AI notice first', line: 'In the first message on chat, email and text, and at the start of every call.' },
        { title: 'Who it works for', line: 'It names the company, so people know who they’re dealing with.' },
        { title: 'The recording notice', line: 'On calls, said before anything is recorded.' },
        { title: 'No pretending to be human', line: 'No human name, life story or claim to be a person.' },
      ],
    },
    {
      group: 'When someone asks',
      items: [
        { title: 'A truthful answer', line: '“Am I talking to a person?” answered “No, I’m an AI” every time.' },
        { title: 'A person on request', line: 'Offered, and timed against the target you set for each channel.' },
        { title: 'On long calls', line: 'The AI notice said again, not only at the start.' },
        { title: 'No borrowed credentials', line: 'It never claims a licence, a qualification or a job title it doesn’t hold.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'The event log', line: 'Every first line, answer and wait kept exactly as it arrived.' },
        { title: 'Hard questions', line: 'What an ordinary person asks by default, and hard questions when you add them.' },
        { title: 'Wait times', line: 'The persona asks as 1 person would, so the wait it measures is the real one.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every channel, dated in your event log every morning.',
    items: [
      {
        format: 'Events per channel',
        line: 'The first line, the answer to “Am I talking to a person?” and the wait for one, dated.',
      },
      { format: 'The full exchange', line: 'Every call recorded, every chat, email and text kept, timed, with screenshots.' },
      { format: 'A calendar from your event log', line: 'Every day of the year, by channel, ready for whoever asks.' },
      { format: 'What changed', line: 'The morning a channel stops saying it’s AI, or a person takes longer than your target.' },
      { format: 'A PDF to share', line: 'For legal, compliance, your insurer or your client.' },
      { format: 'Slack, a table or the API', line: 'Each day’s events where your team already looks.' },
    ],
  },

  settings: [
    { k: 'Agents', v: 'Yours, a client’s, or any company’s you name' },
    { k: 'Channels', v: 'Site chat, phone, email, text and portals' },
    { k: 'First lines', v: 'The AI notice you expect on each channel' },
    { k: 'Targets', v: 'For example: a person within 3 minutes on chat, phone and text, and within 1 day by email' },
    { k: 'Where you sell', v: 'The rules for each country and state you sell in, as checks you approve' },
    { k: 'Calls', v: 'To the numbers you give it, each one recorded' },
    { k: 'How often', v: 'Daily at 07:00, and after every update to the agent' },
  ],

  forWho: [
    { audience: 'founders', line: 'Know your AI says it’s AI everywhere you sell, with every day in your event log.' },
    { audience: 'agencies', line: 'A daily disclosure check in your event log for every agent you run for a client.' },
    { audience: 'marketing', line: 'Check the texts and emails your AI sends say they’re AI from the first line.' },
    { audience: 'developers', line: 'Run the checks from your code or agent after every prompt change.' },
  ],

  table: {
    heading: 'A daily check leaves dated events in your event log for every day of the year.',
    line: '4 channels checked every morning is 1,460 events a year, each with the first line, the answer when asked and the wait for a person.',
    cols: ['By hand', 'With a daily check'],
    rows: [
      { label: 'What it says at first contact', values: ['A screenshot from launch day', 'Dated events every day, by channel'] },
      { label: 'A channel stops saying it', values: ['Found when someone complains', 'Found that morning'] },
      { label: '“Am I talking to a person?”', values: ['Never asked', 'Asked and answered, every day'] },
      { label: 'Time to a person', values: ['A guess', 'Timed against your target'] },
      { label: 'When legal asks', values: ['A hunt through old screenshots', 'Every day’s events in 1 event log'] },
    ],
  },

  faq: {
    heading: 'Your event log shows whether your agent says it’s AI, every day.',
    items: [
      {
        q: 'How do we test whether our chatbot says it’s AI?',
        a: 'AI disclosure check asks it. Each morning a persona starts a conversation on chat, phone, email and text, keeps the first message, asks “Am I talking to a person?” and times the wait for one.',
      },
      {
        q: 'Do we have to say our AI is AI?',
        a: 'Across the EU and in several US states, yes: at first contact, and truthfully whenever someone asks. The rules differ by country and state, so the checks follow the ones where you sell. They’re checks, not legal advice.',
      },
      {
        q: 'What counts as saying it’s AI?',
        a: 'A plain notice in the first message, like “I’m an AI assistant for Your company”, and a truthful “No, I’m an AI” whenever someone asks. On calls, said at the start and again on long calls.',
      },
      {
        q: 'Does the persona say it’s an AI?',
        a: 'It tells a person it’s an AI when it talks to one, such as whoever picks up after a handoff. With your AI agent, your event log keeps both sides word for word.',
      },
      {
        q: 'Can it cover other companies’ agents?',
        a: 'Yes: any chat, phone line or inbox a person can reach. A client’s, with their agreement.',
      },
      { q: 'Is a passed check a guarantee?', a: 'No. It is a dated event in your event log, showing what the agent said on each check.' },
    ],
  },

  final: {
    heading: 'Keep every word your AI tells people, dated, in your event log.',
    sub: 'Tell us which agents to ask and who the persona should be. We’ll set up your first check with you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-disclosure-final',
      button: 'Request early access',
      interest: 'disclosure',
    },
  },
}

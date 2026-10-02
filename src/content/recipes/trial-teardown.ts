import type { Recipe } from '../types'

/* Trial teardown (/recipes/trial-teardown). Rewritten around the 3 safeguards adopted on 2 Oct: free trials that need
   no card only, a declared AI agent that never replies, and the trial closes the moment a rep writes or calls.
   No sales calls are logged or sold, no card is ever entered, and trials that need a card or a sales call are
   skipped. Kept from James: the day by day sequence, what's asked at sign up, the end offer, rivals side by side and
   the "signs in daily or goes quiet" setting. The run and the comparison are examples, say so, and match the
   `battlecard` screen (Rival A 20% off on day 13, Rival B closed on day 6 when a rep wrote, Rival C 30% off). */

export const recipe: Recipe = {
  id: 'trial',
  slug: 'trial-teardown',
  name: 'Trial teardown',
  group: 'Watch rivals',
  line: 'Starts a rival’s free trial, with no card, and logs every onboarding email, prompt and offer, day by day.',
  gets: 'The whole trial on 1 page, from the welcome email to the offer at the end.',
  kit: [
    'A declared AI agent per rival',
    'Its own inbox and browser',
    'Daily sign ins, like a new user',
    'A watch to the last trial day',
    'Screenshots of every prompt',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/trial-teardown',
    title: 'Trial teardown: every email in a rival’s trial · Obsession',
    description:
      'A declared AI agent starts each rival’s free trial with no card and logs every email and offer. It never replies, and closes it if a rep writes or calls.',
    answer:
      'Trial teardown is an Obsession recipe. A declared AI agent with its own inbox starts each rival’s free trial that needs no card and logs every onboarding email, in app prompt and offer, day by day. It never replies, and it closes the trial the moment a rep writes or calls.',
    ogImage: '/og/trial-teardown.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Trial teardown', path: '/recipes/trial-teardown' },
    ],
  },

  hero: {
    headline: 'Every email, prompt and offer in a rival’s free trial.',
    sub: 'A declared AI agent starts each rival’s free trial, with no card, and logs everything until it ends. It never replies, and closes the trial the moment a rep writes or calls.',
    screen: 'battlecard',
    capture: {
      kind: 'waitlist',
      source: 'recipe-trial-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'Who will use the teardown?',
        options: ['Sales', 'Marketing', 'Product', 'Founders', 'Something else'],
      },
      interest: 'trial',
    },
  },

  run: {
    tab: 'Example: Rival A’s 14 day trial',
    recipe: 'trial',
    task: 'Start Rival A’s free trial with no card. Log every email, prompt and offer until it ends. Never reply.',
    targets: 'rival-a.example, reporting software',
    journey: ['Start the trial, no card', 'Sign in daily like a new user', 'Never reply', 'Close if a rep writes or calls'],
    schedule: 'Daily, until the trial ends',
    report: 'A battlecard in your CRM, the trial as a PDF',
    kit: ['Agent ID, declared as AI', 'Own inbox', 'Own browser', '14 day watch'],
    events: [
      { time: 'Day 0, 10:00', text: 'Starts a free trial with no card, declared as an AI agent.' },
      { time: 'Day 0, 10:01', text: 'Welcome email with a 6 step setup checklist.' },
      { time: 'Day 3, 09:00', text: 'Case study email with 3 customer logos.' },
      { time: 'Day 12, 09:00', text: 'Reminder: 2 days left, with an upgrade link.' },
      { time: 'Day 13, 11:00', text: 'Offer: 20% off the first year if you upgrade before the trial ends.' },
    ],
    finding: '11 emails, 4 in app prompts and 1 offer in 14 days. Rival A saves its 20% off for day 13.',
    fix: 'A talk track drafted for your reps: plan for the 20% on day 13. In your CRM after your OK.',
    ledger: 'Example run. It never replied, and no rep got in touch, so the trial ran to the end.',
  },

  steps: [
    {
      title: 'Add your rivals',
      line: 'Any software with a free trial that needs no card. Trials that need a card or a sales call are skipped.',
    },
    {
      title: 'An agent starts each trial',
      line: 'Declared as an AI agent, with its own inbox, and your name kept out. It signs in and follows onboarding like a new user.',
    },
    {
      title: 'It logs every touch, and never replies',
      line: 'Every email, in app prompt and offer, timed by trial day. If a rep writes or calls, the trial closes and that message is the last record.',
    },
    {
      title: 'You get the teardown',
      line: 'The trial day by day, a battlecard your reps can use, and an alert when a rival changes its trial.',
    },
  ],

  checks: [
    {
      group: 'Signing up',
      items: [
        { title: 'What’s asked', line: 'The fields, the questions and whether a card is needed. If it is, the trial is skipped.' },
        { title: 'First minutes', line: 'The welcome email, the checklist and the first prompt.' },
      ],
    },
    {
      group: 'During the trial',
      items: [
        { title: 'Onboarding emails', line: 'Every one, with its trial day, its timing and what it asks you to do.' },
        { title: 'In app prompts', line: 'Tours, nudges and upgrade prompts, screenshotted on the day they show.' },
        { title: 'Claims against reality', line: 'How long setup really takes, next to what the site promises.' },
      ],
    },
    {
      group: 'The end',
      items: [
        { title: 'Before it ends', line: 'The reminders, and how many days before the end each one comes.' },
        { title: 'The offer', line: 'The discount or extension at the end, and how long it lasts.' },
        { title: 'If a rep gets in touch', line: 'The trial closes the moment it happens, and the record says when.' },
      ],
    },
  ],

  outputs: {
    heading: 'The whole trial on 1 page, and a battlecard your reps can use.',
    items: [
      { format: 'The trial, day by day', line: 'Every email, prompt and offer, in order, with the day it came.' },
      { format: 'The proof', line: 'Screenshots of each step, and the emails themselves.' },
      {
        format: 'A battlecard',
        line: 'Offers, timings and claims for each rival, with a talk track drafted, in your CRM or Slack.',
      },
      { format: 'Rivals side by side', line: 'Run it on several rivals and compare their trials.' },
      { format: 'Alerts', line: 'When a rival changes its trial, its emails or its offer, the next run shows what moved.' },
    ],
  },

  settings: [
    { k: 'Rivals', v: 'Any software with a free trial that needs no card' },
    { k: 'Length', v: 'To the last day of the trial' },
    { k: 'Activity', v: 'Signs in daily, or goes quiet after day 1' },
    { k: 'Country', v: 'For the browser, and a number only if the sign up asks for one' },
    { k: 'How often', v: 'Once, or a fresh trial whenever a rival changes its plans' },
    { k: 'If a rep gets in touch', v: 'The trial closes. Always on.' },
  ],

  forWho: [
    { audience: 'sales', line: 'Battlecards from what a rival’s trial really looks like.' },
    { audience: 'marketing', line: 'Compare your nurture emails with a rival’s, day by day.' },
    { audience: 'founders', line: 'See how rivals onboard, then run the same teardown on your own trial.' },
    { audience: 'developers', line: 'See your own onboarding the way a new user sees it, from your code.' },
  ],

  table: {
    heading: 'Rival A offers 20% off on day 13. Rival C offers 30% off once the trial ends.',
    line: 'Example. Rival B’s trial closed on day 6, when a rep wrote.',
    cols: ['Rival A', 'Rival B', 'Rival C'],
    rows: [
      { label: 'Trial length', values: ['14 days', '14 days', '14 days'] },
      { label: 'Time to a first report', values: ['20 min', '3 days', '45 min'] },
      { label: 'Onboarding emails', values: ['11', '4 by day 6', '7'] },
      { label: 'Offer at the end', values: ['20% off on day 13', 'None seen', '30% off for 7 days after the end'] },
      { label: 'A rep got in touch', values: ['No', 'Day 6, trial closed', 'No'] },
    ],
  },

  faq: {
    heading: 'It never replies, and it leaves the moment a rep gets in touch.',
    items: [
      {
        q: 'Will it talk to a sales rep?',
        a: 'No. It never replies. If a rep writes or calls, the trial closes that moment and the record says when.',
      },
      { q: 'What about trials that need a card?', a: 'They’re skipped. So are trials that need a sales call to start.' },
      {
        q: 'Will the rival know?',
        a: 'Every agent says it’s an AI agent and links to useobsession.com/agents, a page explaining Obsession. Your name stays out.',
      },
      {
        q: 'Does it use the product?',
        a: 'Yes, like a new user: it signs in, follows the setup steps and screenshots every prompt.',
      },
      {
        q: 'Can I run it on my own trial?',
        a: 'Yes. Point it at your own product to see your onboarding the way a new user does, after every release.',
      },
      {
        q: 'How long does it take?',
        a: 'As long as the trial. The first emails land in minutes, and the teardown is ready the day the trial ends, or the day a rep gets in touch.',
      },
    ],
  },

  final: {
    heading: 'Know every rival’s trial offer before your buyer quotes it.',
    sub: 'Join the waitlist. Trial teardown comes ready to run on the rivals you name.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-trial-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'Who will use the teardown?',
        options: ['Sales', 'Marketing', 'Product', 'Founders', 'Something else'],
      },
      interest: 'trial',
    },
  },
}

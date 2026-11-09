import type { Recipe } from '../types'

/* Trial teardown (/recipes/trial-teardown). Watch other companies. Screen: battlecard.
   The 9 Nov story: the record of a software trial, day by day: what sign-up asks, the free plan's limits, and every
   onboarding email, prompt and offer, kept with its trial day, at each competitor or the reader's own app. Obsession
   starts each trial as the persona the reader picks; the trial lands in a CRM, Slack, a table or the API.
   The run and the comparison are examples and match the screen (Competitor A 20% off on day 13, Competitor B closed on
   day 6 when a rep wrote, Competitor C 30% off). Every FAQ answer names the recipe, for AI search. */

export const recipe: Recipe = {
  id: 'trial',
  slug: 'trial-teardown',
  name: 'Trial teardown',
  group: 'Watch other companies',
  line: 'Every email, prompt, limit and offer in a competitor’s free trial, collected by trial day.',
  gets: 'The whole trial on 1 page, from what sign-up asks to the offer on the last day.',
  kit: [
    'A trial account at each competitor',
    'An inbox that keeps every email with its arrival time',
    'Daily sign-ins, like a new user',
    'Plan limits and upgrade prompts, screenshotted',
    'Kept to the last trial day',
    'The trial in your CRM, Slack or the API',
  ],

  meta: {
    path: '/recipes/trial-teardown',
    title: 'Trial teardown: every email in a competitor’s free trial',
    description:
      'Trial teardown collects every email, prompt, plan limit and offer in a competitor’s free trial, by trial day, from the welcome to the offer at the end.',
    answer:
      'Trial teardown is the record of a competitor’s free trial: what sign-up asks, the plan’s limits, and every email, prompt and offer, by trial day. Obsession starts each trial as the persona you pick, signs in like a new user and keeps every email as it arrived.',
    ogImage: '/og/trial-teardown.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Trial teardown', path: '/recipes/trial-teardown' },
    ],
  },

  hero: {
    headline: 'Every email, prompt and offer in a competitor’s free trial.',
    sub: 'Trial teardown is the record of a competitor’s free trial: what sign-up asks, the plan’s limits, and every email, prompt and offer, by trial day. Obsession starts each trial as the persona you pick, signs in like a new user and keeps every email as it arrived.',
    screen: 'battlecard',
    capture: {
      kind: 'waitlist',
      source: 'recipe-trial-hero',
      button: 'Request early access',
      interest: 'trial',
    },
  },

  run: {
    tab: 'Example: Competitor A’s 14 day trial',
    recipe: 'trial',
    task: 'Start Competitor A’s free trial as a new US user, with no card. Collect every email, prompt, limit and offer until it ends.',
    targets: 'competitor-a.example, reporting software',
    journey: ['Start the trial, no card', 'Sign in daily like a new user', 'Keep every email and prompt', 'Stay to the last day'],
    schedule: 'Daily, until the trial ends',
    report: 'A battlecard in your CRM, and the API',
    kit: ['Trial user · US', 'Its own inbox', 'Daily sign-ins', '14 days kept'],
    events: [
      { time: 'Day 0, 10:00', text: 'Trial started with no card.' },
      { time: 'Day 0, 10:01', text: 'Welcome email with a 6 step setup checklist.' },
      { time: 'Day 3, 09:00', text: 'Case study email with 3 customer logos.' },
      { time: 'Day 12, 09:00', text: 'Reminder: 2 days left, with an upgrade link.' },
      { time: 'Day 13, 11:00', text: 'Offer: 20% off the first year if you upgrade before the trial ends.' },
    ],
    finding: '11 emails, 4 in-app prompts and 1 offer in 14 days. Competitor A saves its 20% off for day 13.',
    fix: 'On Competitor A’s battlecard in your CRM, with every email linked.',
    ledger: 'Example run. No rep got in touch, so the trial ran to the end.',
  },

  steps: [
    { title: 'Name the apps', line: 'Any software with a free trial: a competitor’s, a client’s or your own.' },
    {
      title: 'Pick the persona',
      line: 'A new user, a trial user in another country or a team admin. A trial that asks for a card uses one you fund.',
    },
    { title: 'It signs in like a new user', line: 'Every email, in-app prompt, limit and offer, kept by trial day, and any message from a rep.' },
    {
      title: 'The trial lands where you work',
      line: 'Day by day in your CRM, Slack, a table or the API, and a fresh run when a competitor changes its trial.',
    },
  ],

  checks: [
    {
      group: 'Signing up',
      items: [
        { title: 'What’s asked', line: 'The fields, the questions and whether a card is needed.' },
        { title: 'First minutes', line: 'The welcome email, the checklist and the first prompt.' },
      ],
    },
    {
      group: 'During the trial',
      items: [
        { title: 'Onboarding emails', line: 'Every one, with its trial day, its time and what it asks you to do.' },
        { title: 'In-app prompts', line: 'Tours, nudges and upgrade prompts, screenshotted on the day they show.' },
        { title: 'Plan limits', line: 'What the free plan includes, where it stops and when the upgrade prompt appears.' },
      ],
    },
    {
      group: 'The end',
      items: [
        { title: 'Before it ends', line: 'The reminders, and how many days before the end each one comes.' },
        { title: 'The offer', line: 'The discount or extension at the end, and how long it lasts.' },
        { title: 'If a rep gets in touch', line: 'When, what the rep says, and what Obsession did next.' },
      ],
    },
  ],

  outputs: {
    heading: 'The whole trial on 1 page, and a battlecard your reps can use.',
    items: [
      { format: 'The trial, day by day', line: 'Every email, prompt and offer, in order, with the day it came.' },
      { format: 'The emails themselves', line: 'Each kept as it arrived, with a screenshot of every prompt.' },
      { format: 'A battlecard', line: 'Offers, limits and timings for each competitor, in your CRM or Slack.' },
      { format: 'Competitors side by side', line: 'Several trials compared in 1 table.' },
      { format: 'What changed', line: 'When a competitor changes its trial, its emails or its offer.' },
    ],
  },

  settings: [
    { k: 'Apps', v: 'Any software with a free trial' },
    { k: 'Persona', v: 'New user, trial user or team admin' },
    { k: 'Country', v: 'Sets the browser and currency, and a number if sign-up asks for one' },
    { k: 'Activity', v: 'Signs in daily, or goes quiet after day 1' },
    { k: 'If a rep gets in touch', v: 'Close the trial, carry on, or reply and say it’s an AI' },
    { k: 'Where it lands', v: 'Your CRM, Slack, a table or the API' },
  ],

  forWho: [
    { audience: 'sales', line: 'Battlecards from what a competitor’s trial shows a buyer.' },
    { audience: 'marketing', line: 'Your nurture emails beside a competitor’s, day by day.' },
    { audience: 'founders', line: 'See how competitors onboard, then read your own trial the same way.' },
    { audience: 'developers', line: 'Every trial email and prompt as JSON, by trial day.' },
  ],

  table: {
    heading: 'Competitor A offers 20% off on day 13. Competitor C offers 30% off once the trial ends.',
    line: 'Example, set to close a trial when a rep writes. Competitor B’s closed on day 6.',
    cols: ['Competitor A', 'Competitor B', 'Competitor C'],
    rows: [
      { label: 'Trial length', values: ['14 days', '14 days', '14 days'] },
      { label: 'Time to a first report', values: ['20 min', '3 days', '45 min'] },
      { label: 'Onboarding emails', values: ['11', '4 by day 6', '7'] },
      { label: 'Offer at the end', values: ['20% off on day 13', 'None seen', '30% off for 7 days after the end'] },
      { label: 'A rep got in touch', values: ['No', 'Day 6, trial closed', 'No'] },
    ],
  },

  faq: {
    heading: 'Every email in the trial, kept as it arrived.',
    items: [
      {
        q: 'Is it ethical to sign up for a competitor’s free trial?',
        a: 'Starting a free trial is what any customer can do, and Trial teardown does the same. When it talks to a person, it says it’s an AI, and every email is kept exactly as it arrived.',
      },
      {
        q: 'Will Trial teardown talk to a sales rep?',
        a: 'If you want it to. Trial teardown can close the trial, carry on quietly or reply, and it says it’s an AI when it does.',
      },
      {
        q: 'What about trials that need a card?',
        a: 'Trial teardown starts them on a card you fund, and stops short of paying for a plan.',
      },
      {
        q: 'Will the competitor know who asked?',
        a: 'No. Who asked is never shown. What a trial sends every new user goes into the shared index, so Trial teardown returns a trial already covered at once.',
      },
      {
        q: 'Can I run Trial teardown on my own trial?',
        a: 'Yes. Point Trial teardown at your own app to read your onboarding the way a new user does, after every release.',
      },
      {
        q: 'How long does Trial teardown take?',
        a: 'Trial teardown takes as long as the trial. The first emails land in minutes, and the teardown is ready the day the trial ends.',
      },
    ],
  },

  final: {
    heading: 'Know every competitor’s trial offer before your buyer quotes it.',
    sub: 'Early access includes Trial teardown on up to 5 apps added for you, and every trial already covered.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-trial-final',
      button: 'Request early access',
      interest: 'trial',
    },
  },
}

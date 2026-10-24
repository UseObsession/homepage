import type { Recipe } from '../types'

/* Trial teardown (/recipes/trial-teardown). The 2 Oct safeguards (no card trials only, never replies, closes when a rep
   writes) are now the customer's settings. The 3 lines hold (obsession/system.md): the record kept as it arrived,
   the customer private unless they choose to be named, and the law (an agent says it's AI when it talks to a person,
   never uses fake payment details). Kept from James: the day by day sequence, what's asked at sign up, the end offer,
   rivals side by side and the "signs in daily or goes quiet" setting. The run and the comparison are examples, say
   so, and match the `battlecard` screen (Rival A 20% off on day 13, Rival B closed on day 6 when a rep wrote, Rival C
   30% off); the comparison says it was set to close a trial when a rep writes, so that close reads as a setting.
   AI search (3 Oct): every answer names the recipe, because an assistant may quote 1 answer alone, without the page or
   the question around it, and whoever reads it there still has to know which recipe it describes and whose it is.
   Keep it that way. */

export const recipe: Recipe = {
  id: 'trial',
  slug: 'trial-teardown',
  name: 'Trial teardown',
  group: 'Watch other companies',
  line: 'Starts a rival’s free trial and logs every onboarding email, prompt and offer, day by day.',
  gets: 'The whole trial on 1 page, from the welcome email to the offer at the end.',
  kit: [
    'An AI customer per rival',
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
      'An AI customer starts each rival’s free trial and logs every onboarding email, prompt and offer, day by day, from the welcome to the offer at the end.',
    answer:
      'Trial teardown logs every email, prompt and offer in a rival’s free trial: an AI agent starts each trial, signs in like a new user, and keeps every email with its receipt.',
    ogImage: '/og/trial-teardown.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Trial teardown', path: '/recipes/trial-teardown' },
    ],
  },

  hero: {
    headline: 'AI agents that log every email, prompt and offer in a rival’s free trial.',
    sub: 'Trial teardown logs every email, prompt and offer in a rival’s free trial: an AI agent starts each trial, signs in like a new user, and keeps every email with its receipt.',
    screen: 'battlecard',
    capture: {
      kind: 'waitlist',
      source: 'recipe-trial-hero',
      button: 'Join the waitlist',
      interest: 'trial',
    },
  },

  run: {
    tab: 'Example: Rival A’s 14 day trial',
    recipe: 'trial',
    task: 'Start Rival A’s free trial with no card. Log every email, prompt and offer until it ends.',
    targets: 'rival-a.example, reporting software',
    journey: ['Start the trial, no card', 'Sign in daily like a new user', 'Log every email and prompt', 'Watch to the last day'],
    schedule: 'Daily, until the trial ends',
    report: 'A battlecard in your CRM, the trial as a PDF',
    kit: ['Agent ID', 'Own inbox', 'Own browser', '14 day watch'],
    events: [
      { time: 'Day 0, 10:00', text: 'Starts a free trial with no card.' },
      { time: 'Day 0, 10:01', text: 'Welcome email with a 6 step setup checklist.' },
      { time: 'Day 3, 09:00', text: 'Case study email with 3 customer logos.' },
      { time: 'Day 12, 09:00', text: 'Reminder: 2 days left, with an upgrade link.' },
      { time: 'Day 13, 11:00', text: 'Offer: 20% off the first year if you upgrade before the trial ends.' },
    ],
    finding: '11 emails, 4 in app prompts and 1 offer in 14 days. Rival A saves its 20% off for day 13.',
    fix: 'A talk track drafted for your reps: plan for the 20% on day 13. In your CRM after your OK.',
    ledger: 'Example run. No rep got in touch, so the trial ran to the end.',
  },

  steps: [
    {
      title: 'Add your rivals',
      line: 'Any software with a free trial. Where a trial asks for a card, the agent uses one you fund.',
    },
    {
      title: 'An agent starts each trial',
      line: 'With its own inbox and browser. It signs in and follows onboarding like a new user.',
    },
    {
      title: 'It logs every touch',
      line: 'Every email, in app prompt and offer, timed by trial day, and any message or call from a rep.',
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
        { title: 'What’s asked', line: 'The fields, the questions and whether a card is needed.' },
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
        { title: 'If a rep gets in touch', line: 'When it happens, what the rep says, and what the agent did next.' },
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
    { k: 'Rivals', v: 'Any software with a free trial' },
    { k: 'Length', v: 'To the last day of the trial' },
    { k: 'Activity', v: 'Signs in daily, or goes quiet after day 1' },
    { k: 'Country', v: 'For the browser, and a number only if the sign up asks for one' },
    { k: 'How often', v: 'Once, or a fresh trial whenever a rival changes its plans' },
    { k: 'If a rep gets in touch', v: 'Close the trial, carry on, or reply and say it’s an AI' },
  ],

  forWho: [
    { audience: 'sales', line: 'Battlecards from what a rival’s trial really looks like.' },
    { audience: 'marketing', line: 'Compare your nurture emails with a rival’s, day by day.' },
    { audience: 'founders', line: 'See how rivals onboard, then run the same teardown on your own trial.' },
    { audience: 'developers', line: 'See your own onboarding the way a new user sees it, from your code.' },
  ],

  table: {
    heading: 'Rival A offers 20% off on day 13. Rival C offers 30% off once the trial ends.',
    line: 'Example, set to close a trial when a rep writes. Rival B’s closed on day 6.',
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
    heading: 'Every email in the trial, kept with its receipt.',
    items: [
      {
        q: 'Is it ethical to sign up for a competitor’s free trial to compare onboarding?',
        a: 'Starting a free trial is what any customer can do, and Obsession’s Trial teardown does the same. When the agent talks to a person, it says it’s an AI. It never uses fake payment details, and every email is kept exactly as it arrived.',
      },
      {
        q: 'What’s it worth?',
        a: 'Trial teardown gives your team up to 18 hours a month back, if it walks 3 rivals’ trials for 90 minutes a week each.',
      },
      {
        q: 'Will Trial teardown talk to a sales rep?',
        a: 'If you want it to. Trial teardown can close the trial, carry on quietly or reply. When it talks to a rep, it says it’s an AI.',
      },
      { q: 'What about trials that need a card?', a: 'Trial teardown starts them on a card you fund. It never uses fake payment details.' },
      {
        q: 'Will the rival know?',
        a: 'When an Obsession agent talks to a person, it says it’s an AI and links to useobsession.com/agents, a page explaining Obsession. You stay private unless you choose to be named.',
      },
      {
        q: 'Does Trial teardown use the product?',
        a: 'Yes. Trial teardown uses it like a new user: it signs in, follows the setup steps and screenshots every prompt.',
      },
      {
        q: 'Can I run Trial teardown on my own trial?',
        a: 'Yes. Point Trial teardown at your own product to see your onboarding the way a new user does, after every release.',
      },
      {
        q: 'How long does Trial teardown take?',
        a: 'Trial teardown takes as long as the trial. Its first emails land in minutes, and the teardown is ready the day the trial ends.',
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
      interest: 'trial',
    },
  },
}

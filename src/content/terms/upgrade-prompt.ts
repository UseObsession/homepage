import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/upgrade-prompt: the definition query for the messages that ask a free user to pay. No outside facts:
   a plain definition, with the trial teardown recipe and the software use case for the job. */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Upgrade prompt',
  line: 'A message inside a product, or an email, that asks a free or trial user to move to a paid plan.',
  meta: {
    path: '/glossary/upgrade-prompt',
    title: 'What is an upgrade prompt? How apps ask free users to pay',
    description:
      'An upgrade prompt is a message in an app, or an email, asking a free or trial user to move to a paid plan. Where prompts appear, and who compares them.',
    answer:
      'An upgrade prompt is a message inside a product, or an email, that asks a free or trial user to move to a paid plan, usually when they reach a limit or try a paid feature. Prompts appear only to signed-in users, so a competitor’s pricing page shows none of them.',
    ogImage: '/og/glossary-upgrade-prompt.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Upgrade prompt', path: '/glossary/upgrade-prompt' },
    ],
  },
  title: 'Upgrade prompt: the moment a free product asks you to pay',
  dek: 'The banner at the last free project, the padlock on a feature and the email the day before a trial ends are each a company choosing when to ask for money.',
  primaryKeyword: 'upgrade prompt',
  keywords: ['what is an upgrade prompt', 'upgrade prompt examples', 'in-app upgrade prompt', 'paywall', 'upsell prompt'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'founders',
  term: {
    name: 'upgrade prompt',
    alternateName: ['upsell prompt', 'in-app upgrade message', 'upgrade nudge'],
    definition:
      'An upgrade prompt is a message inside a product, or an email, that asks a free or trial user to move to a paid plan, usually when they reach a limit or try a paid feature.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-looks-like', text: 'What an upgrade prompt looks like' },
    {
      kind: 'p',
      text: 'An upgrade prompt appears at the moment a free user meets a [trial limit](/glossary/trial-limit) or reaches for something the plan doesn’t include. Its form depends on where the user is.',
    },
    {
      kind: 'list',
      items: [
        '**Banner:** “You’ve used all your free projects. Upgrade to add more.”',
        '**Locked feature:** a padlock on a button that opens the plans page instead of the feature.',
        '**Paywall:** a screen that blocks the next step until the user pays.',
        '**Modal:** a window on the last day of a trial, often with a discount for paying now.',
        '**Email or push:** “Your trial ends tomorrow”, sent on a schedule after sign-up.',
      ],
    },
    {
      kind: 'p',
      text: 'The offer inside the prompt matters as much as its timing. One company asks at full price on day 14, while its competitor offers 30% off on day 10.',
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why product and growth teams study upgrade prompts' },
    {
      kind: 'p',
      text: 'Where a product asks for money decides how many free users ever pay. Product and growth teams compare their own prompts with competitors’ to see who asks earlier and who discounts to close. Competitive intelligence teams track the same prompts, because a competitor that starts offering a discount on the last trial day changes the price a buyer expects in a deal.',
    },
    { kind: 'h2', id: 'how-its-seen', text: 'How competitors’ upgrade prompts are collected' },
    {
      kind: 'p',
      text: 'Analytics tools show a team its own prompts and how users respond to them. A competitor’s prompts appear only inside its product, to a signed-in user, on the day the trigger fires. By hand, a designer signs up, uses the product until the prompts appear and screenshots each one. A 14-day trial takes 14 days to see in full.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For upgrade prompts, that means each prompt as the user met it, with its wording, offer and trial day. The emails that pushed the same offer sit beside it.`,
    },
    {
      kind: 'p',
      text: '[Trial teardown](/recipes/trial-teardown), a ready-made collection, gathers every email, prompt, limit and offer in a competitor’s trial by trial day.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is an upgrade prompt the same as a paywall?',
          a: 'A paywall is the upgrade prompt that blocks the next step until the user pays. Most prompts block nothing. They sit in a banner, a locked button or an email and leave the free product working.',
        },
        {
          q: 'When do apps show upgrade prompts?',
          a: 'Usually when a user hits a limit, tries a paid feature, invites a colleague or reaches the last days of a trial. Each company picks its own moments, which is why setting several competitors side by side is useful.',
          link: { label: 'Trial checks for software companies', to: '/use-cases/trial-checks-for-software-companies' },
        },
      ],
    },
  ],
  sources: [],
  related: [
    '/glossary/trial-limit',
    '/glossary/save-offer',
    '/glossary/login-wall',
    '/glossary/competitive-intelligence',
    'recipe:trial-teardown',
    '/use-cases/trial-checks-for-software-companies',
    'saas-pricing-page-examples',
  ],
}

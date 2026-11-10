import type { ReferencePage } from '../reference'
import { ENTITY } from '../site'

/* /glossary/trial-limit: the definition query for the caps on a free trial or free plan. The trial teardown recipe
   and the software use case carry the job; this page owns "what is a trial limit". */
export const ref: ReferencePage = {
  kind: 'term',
  name: 'Trial limit',
  line: 'A cap on a free trial or free plan, such as days, seats, credits or features, that ends or narrows what a user can do.',
  meta: {
    path: '/glossary/trial-limit',
    title: 'What is a trial limit? The caps on a free trial or free plan',
    description:
      'A trial limit is a cap on a free trial or free plan, such as days, seats, credits or features. Where software companies set them, and who tracks them.',
    answer:
      'A trial limit is a cap a software company puts on a free trial or free plan, such as days, seats, credits or features, that ends or narrows what the user can do. Some limits sit on the public pricing page. Many appear only inside the product, in the counter, the locked button and the emails as the trial runs out.',
    ogImage: '/og/glossary-trial-limit.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Trial limit', path: '/glossary/trial-limit' },
    ],
  },
  title: 'Trial limit: the cap on what a free user can do before paying',
  dek: 'Every free trial and free plan stops somewhere: after 14 days, at 3 projects, at 10 apps or at a locked feature. Where it stops shapes who pays.',
  primaryKeyword: 'trial limit',
  keywords: ['what is a trial limit', 'free trial limits', 'free plan limits', 'saas trial limits', 'freemium limits'],
  checked: '2026-11-11',
  readingMinutes: 3,
  reader: 'marketing',
  term: {
    name: 'trial limit',
    alternateName: ['free trial limit', 'free plan limit', 'usage limit'],
    definition:
      'A trial limit is a cap a software company puts on a free trial or free plan, such as days, seats, credits or features, that ends or narrows what the user can do.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-means', text: 'What counts as a trial limit' },
    {
      kind: 'p',
      text: 'A free trial gives the paid product for a set time, and a free plan gives part of the product with no end date. Both carry limits, and the limit is where the company asks for payment.',
    },
    {
      kind: 'list',
      items: [
        '**Time:** the trial ends after a set number of days.',
        '**Usage:** a cap on credits, messages, storage or runs each month.',
        '**Seats and projects:** a cap on people, workspaces or files.',
        '**History:** older data kept out of reach until the user upgrades.',
        '**Features:** a button that opens an [upgrade prompt](/glossary/upgrade-prompt) instead of the feature.',
      ],
    },
    {
      kind: 'p',
      text: 'Slack’s [pricing page](https://slack.com/pricing) shows the pattern on a free plan. On Free, messages are saved and searchable for 90 days, the plan allows up to 10 apps, and the page invites users to upgrade to reach the previous 12 months of messages.',
    },
    { kind: 'h2', id: 'why-it-matters', text: 'Why competitive intelligence teams track trial limits' },
    {
      kind: 'p',
      text: 'A competitor that doubles its free credits or cuts a trial from 30 days to 7 changes the comparison every sales rep makes in a deal. [Competitive intelligence](/glossary/competitive-intelligence) and product marketing teams keep each competitor’s limits on a [battlecard](/glossary/battlecard), the one-page brief reps use in a deal. A limit changed quietly leaves that brief wrong.',
    },
    {
      kind: 'p',
      text: 'The end of a trial is also regulated in places. In the UK, the government said on 9 August 2026 that [new subscription rules will come into force in January 2027](https://www.gov.uk/government/news/pm-starts-roll-out-of-everyday-fixes-on-the-cost-of-living-ending-rip-off-discounts-and-subscription-traps). They bring regular reminders and a 14-day cooling-off period once a trial ends and the contract renews. This is general information, not legal advice.',
    },
    { kind: 'h2', id: 'how-its-seen', text: 'How trial limits are collected' },
    {
      kind: 'p',
      text: 'A pricing page lists the limits a company chooses to publish. The rest show up only to someone using the product: the credit counter, the locked feature, the banner on the last days and the emails that arrive as the trial ends. By hand, an analyst signs up to each competitor’s trial, screenshots every limit and logs the emails by day. The work starts again whenever a plan changes.',
    },
    {
      kind: 'p',
      text: `${ENTITY} For a free trial, that means each limit as it appears inside the product, the prompt that comes with it and every onboarding email, filed by trial day.`,
    },
    {
      kind: 'p',
      text: '[Trial teardown](/recipes/trial-teardown), a ready-made collection, gathers every email, prompt, limit and offer in a competitor’s free trial, and [trial checks for software companies](/use-cases/trial-checks-for-software-companies) shows it at work.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between a free trial and a free plan?',
          a: 'A free trial gives the paid product, or most of it, for a set number of days and then stops or asks for payment. A free plan has no end date and keeps the user inside its limits until they upgrade.',
        },
        {
          q: 'Can you see a competitor’s trial limits without signing up?',
          a: 'Only the ones its pricing page lists. Limits shown inside the product, the prompts around them and the emails that arrive as a trial ends appear only to someone who signed up.',
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Slack pricing',
      publisher: 'Slack',
      url: 'https://slack.com/pricing',
    },
    {
      title: 'PM starts roll out of ‘everyday fixes’ on the cost of living, ending rip-off discounts and subscription traps',
      publisher: 'Prime Minister’s Office, 10 Downing Street, GOV.UK',
      url: 'https://www.gov.uk/government/news/pm-starts-roll-out-of-everyday-fixes-on-the-cost-of-living-ending-rip-off-discounts-and-subscription-traps',
      date: '2026-08-09',
    },
  ],
  related: [
    '/glossary/upgrade-prompt',
    '/glossary/battlecard',
    '/glossary/competitive-intelligence',
    '/glossary/login-wall',
    'recipe:trial-teardown',
    '/use-cases/trial-checks-for-software-companies',
    'saas-pricing-page-examples',
    '/compare/obsession-vs-klue',
  ],
}

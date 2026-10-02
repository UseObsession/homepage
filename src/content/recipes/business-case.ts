import type { Capture, Recipe } from '../types'

/* Business case (/recipes/business-case). Keep and grow customers. Screen: case (a payroll software renewal on 29 Dec: up to
   $184,000 a year saved, 312 tickets a month x 12 x 50 minutes x $59 an hour, from the account's own data, with
   consent; every number sourced and signed; shared with their finance team).
   Base: site_sales.json "Business case" (approved copy and demo).
   Red lines held: inside data only through tools the customer connects, with the account's consent; the account's own
   costs, never a benchmark; follow ups go in the rep's existing thread from the agent's own declared address, after
   your OK (it never writes as the rep, from the rep's inbox). Up-to-50 rule: the 1 money figure is an "up to" ceiling
   with its sum in the same line. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Account management', 'Customer success', 'Sales', 'Agency', 'Founder', 'Something else'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'business-case',
  slug: 'business-case',
  name: 'Business case',
  group: 'Keep and grow customers',
  line: 'Builds each renewal case from the usage and tickets you connect, in the account’s own costs, with every number signed to its source.',
  gets: 'A renewal case finance can check without calling you, kept current until they sign.',
  kit: [
    'An agent ID, declared as AI',
    'Usage and tickets, read only',
    'The account’s own costs',
    'A page finance can open',
    'A refresh every Monday',
    'A signature on every number',
  ],

  meta: {
    path: '/recipes/business-case',
    title: 'Business case: renewal ROI finance can check · Obsession',
    description:
      'AI agents build each renewal case from the usage and tickets you connect, in the account’s own costs, and sign every number back to the record behind it.',
    answer:
      'Business case is an Obsession recipe. Declared AI agents build a renewal case from the usage and tickets an account shares through tools you connect, price it in the account’s own costs and sign every number back to its source. After your OK, they follow up in your rep’s thread from their own address.',
    ogImage: '/og/business-case.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Business case', path: '/recipes/business-case' },
    ],
  },

  hero: {
    headline: 'AI agents that prove your value before every renewal.',
    sub: 'They build each case from the usage and tickets you connect, in the account’s own costs, with every number signed to its source. After your OK, they answer finance as declared AI agents.',
    screen: 'case',
    capture: {
      kind: 'waitlist',
      source: 'recipe-business-case-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'business-case',
    },
  },

  run: {
    tab: 'Payroll SaaS renewal',
    recipe: 'business-case',
    task: 'Payroll SaaS renews on 29 Dec. Build the case from the usage and tickets they share with us, in their own costs, and keep it current until they sign.',
    targets: '1 renewal, from your CRM',
    journey: ['Read usage and tickets', 'Use their own costs', 'Sign every number', 'Follow up in the rep’s thread'],
    schedule: 'Every Monday until renewal',
    report: 'A page their finance team can open',
    kit: ['Agent ID, declared as AI', 'Tools you connect', 'Their own costs', 'Signed record'],
    events: [
      { time: 'Day 1, 09:00', text: 'Usage, help desk and CRM read, with their consent. Usage up 41% in 6 months.' },
      { time: 'Day 1, 09:20', text: '312 tickets resolved a month. Their own figures: 50 minutes a ticket, $59 an hour.' },
      { time: 'Day 1, 10:00', text: 'Case ready: up to $184,000 a year saved, from 312 × 12 × 50 minutes × $59 an hour.' },
      { time: 'Day 3, 14:10', text: 'Your rep approves. The agent adds the case to the rep’s thread with their champion, from its own address.' },
      { time: 'Day 9, 11:30', text: 'Their finance team asks how tickets are counted. The help desk export goes back, after your OK.' },
    ],
    finding: 'Up to $184,000 a year saved: 312 tickets a month × 12 × 50 minutes × $59 an hour, all from their own data.',
    fix: 'A short reply for the champion, drafted in your rep’s thread. Sent after your OK.',
    ledger: 'Example run. Every number signed back to its source.',
  },

  steps: [
    { title: 'Connect what they share', line: 'Usage, help desk and CRM, read only, with the account’s consent.' },
    { title: 'Price it in their costs', line: 'Their hourly rate and their cost per ticket, never a benchmark.' },
    { title: 'Sign every number', line: 'Each figure links to the record it came from, so finance can check it without a call.' },
    {
      title: 'Follow up in your rep’s thread',
      line: 'After your OK, the agent answers questions in the same thread, from its own declared address, until the champion confirms.',
    },
  ],

  checks: [
    {
      group: 'In every case',
      items: [
        { title: 'Usage', line: 'Seats, logins and teams added, month on month.' },
        { title: 'Work done', line: 'Tickets resolved, replies sent and time saved, from the tools they use.' },
        { title: 'Their costs', line: 'The rates they’ve shared, so the money is theirs, not ours.' },
        { title: 'Pilot results', line: 'With their OK, declared test customers ask their support the same questions on day 0 and day 28, and every answer is timed.' },
      ],
    },
    {
      group: 'What finance can check',
      items: [
        { title: 'A source for every number', line: 'Open any figure to see the export, ticket or chart behind it.' },
        { title: 'Signed', line: 'Every number is signed when it’s added, so a changed figure shows.' },
        { title: 'The sum beside every saving', line: 'Tickets, minutes and their hourly rate, in the same line as the money.' },
        { title: 'Kept current', line: 'Refreshed every Monday until renewal, so the case never goes stale.' },
      ],
    },
  ],

  outputs: {
    heading: 'A case their finance team can check without calling you.',
    items: [
      { format: 'Shareable page', line: 'The whole case, every number linked to its source.' },
      { format: 'PDF', line: 'Signed, for the renewal pack.' },
      { format: 'Email', line: 'In your rep’s thread with the champion, from the agent’s own address, after your OK.' },
      { format: 'Your CRM', line: 'The case and where it stands, on the renewal record.' },
      { format: 'Slack', line: 'When the champion replies or a number moves.' },
    ],
  },

  settings: [
    { k: 'Renewals', v: 'Every renewal on your book, or the ones you pick' },
    { k: 'Data', v: 'Usage, help desk and CRM, connected with the account’s consent' },
    { k: 'Costs', v: 'The account’s own rates, never a benchmark' },
    { k: 'How often', v: 'Every Monday until renewal' },
    { k: 'Follow ups', v: 'In your rep’s thread, from the agent’s own address, after your OK' },
    { k: 'Shared with', v: 'The champion and their finance team' },
  ],

  forWho: [
    { audience: 'sales', line: 'Account managers walk into every renewal with ROI finance can check.' },
    { audience: 'agencies', line: 'Show each client what your work returned, every number signed, before the retainer renews.' },
    { audience: 'founders', line: 'Renew your biggest customers on their own numbers, not your slide.' },
    { audience: 'developers', line: 'Pull every signed number into your own app through the API.' },
  ],

  table: {
    heading: 'Every number in the case opens the record it came from.',
    line: 'Example: the Payroll SaaS renewal.',
    cols: ['Their number', 'Where it comes from'],
    rows: [
      { label: 'Usage', values: ['Up 41% in 6 months', 'Product analytics'] },
      { label: 'Tickets resolved', values: ['312 a month', 'Help desk'] },
      { label: 'Median reply', values: ['38 minutes', 'Help desk'] },
      { label: 'Teams using it', values: ['From 2 to 5', 'CRM'] },
      { label: 'Staff time, in their costs', values: ['Up to $184,000 a year', '312 × 12 × 50 minutes × $59 an hour, their own rates'] },
    ],
  },

  faq: {
    heading: 'Their numbers, their consent, and a source behind every figure.',
    items: [
      {
        q: 'Whose data does it use?',
        a: 'Only what the account shares through the tools you connect, with their consent, priced in their own costs.',
      },
      {
        q: 'Can their finance team check it?',
        a: 'Yes. Every number links to the record it came from and is signed, so they can check it without asking your rep.',
      },
      {
        q: 'Does it email our customer?',
        a: 'Only in your rep’s own thread, from its own address, as a declared AI agent, after your OK. It never writes as your rep.',
      },
      {
        q: 'What if the numbers are weak?',
        a: 'You see them first. The case shows the numbers as they stand, so you know which accounts need a save plan instead of an upsell.',
      },
      {
        q: 'When should we start it?',
        a: 'At kickoff, so the case builds week by week until renewal. 90 days out works too.',
      },
      { q: 'How many renewals can it cover?', a: 'As many as you add. Each case refreshes every Monday until it renews.' },
    ],
  },

  final: {
    heading: 'Renew on numbers their finance team can check.',
    sub: 'Join the waitlist. Business case comes ready to run on your next renewal.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-business-case-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'business-case',
    },
  },
}

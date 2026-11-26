import type { Recipe } from '../types'

/* Prior authorization status (/blueprints/prior-authorization-status). Work behind logins. Screen: priorauth, drawn for a
   company (Ashbrook Clinics, an invented clinic group: 5 payer portals, 120 pending requests read before 06:45; 9 changed
   overnight, 3 need a person). Wave 2 (23 Nov 2026, _research/seo/blueprints-22nov/PLAN.md §3): the job a revenue cycle
   team already pays people for, checking each request's status portal by portal. No competitor or customer is named and
   no figure is borrowed. Owns "check prior authorization status" and "prior authorization status check" (Google
   suggestions, 23 Nov); "prior authorization ai agent" and "prior authorization ai automation" stay with the use case,
   which the FAQ links. The searched US spelling "authorization" is kept throughout, as the trade writes it. Logins the
   customer owns only, stops before payment, reads and reports only; runs only after a
   business associate agreement (BAA) is signed. */

export const recipe: Recipe = {
  id: 'prior-auth',
  slug: 'prior-authorization-status',
  name: 'Prior authorization status',
  group: 'Work behind logins',
  line: 'Reads every pending prior authorization in your payer portals each morning and sends what changed to your work queue.',
  gets: 'By 07:00, every request approved, denied or sent back for more information overnight, each with its screenshot.',
  kit: [
    'A browser per payer portal, signed in with your logins',
    'An inbox and number per payer for login codes',
    'Your pending requests, from a sheet or your billing system',
    'Each request read every morning before clinics open',
    'A dated screenshot of every status page',
    'A signed business associate agreement before the first run',
  ],
  build: {
    line: 'Start it with one call, then route each status change from your event log into your own work queue code.',
    code: `await obsession.blueprints.run('prior-authorization-status', {
  requests: { sheet: 'Pending authorizations' },
  at: '06:00',
})

obsession.on('blueprint.result', async (e) => {
  if (e.data.changed) await workQueue.add(e.data.request, e.data.screenshot)
})`,
    events: [
      { kind: 'page.visited', text: 'Each status page the browser opens, kept with its screenshot.' },
      { kind: 'email.received', text: 'A portal’s login code, caught in the persona’s own inbox.' },
      { kind: 'sms.received', text: 'A login code sent by text, caught at the persona’s own number.' },
      { kind: 'blueprint.result', text: 'Each request’s status, what changed since yesterday and the days it has waited.' },
    ],
  },

  meta: {
    path: '/blueprints/prior-authorization-status',
    title: 'Check prior authorization status in every payer portal',
    description:
      'Check prior authorization status in every payer portal each morning, with the logins you give it. Approvals, denials and requests for more reach you.',
    answer:
      'Prior authorization status signs in to each payer portal with the logins you give it every morning, reads every pending request and sends what changed to your work queue, each with a screenshot.',
    ogImage: '/og/prior-authorization-status.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Prior authorization status', path: '/blueprints/prior-authorization-status' },
    ],
  },

  hero: {
    headline: 'Check prior authorization status in every payer portal before clinics open.',
    sub: 'Prior authorization status signs in to each payer portal with the logins you give it every morning, reads every pending request and sends what changed to your work queue, each with a screenshot.',
    screen: 'priorauth',
    capture: {
      kind: 'waitlist',
      source: 'recipe-prior-auth-hero',
      button: 'Start free',
      interest: 'prior-auth',
    },
  },

  buyer: 'For revenue cycle teams at clinic groups and specialty practices, and the medical billing companies that work for them.',
  unit: 'status check',
  per: 'payer portal',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['The pending requests in 1 payer portal, read once', 'A screenshot of every status page', 'The requests that need a person, marked'] },
    { name: 'Practice', includes: ['Every pending request read each morning', 'What changed overnight, in a sheet or your work queue', 'Each login code caught at the persona’s own inbox or number'] },
    { name: 'Clinic group', includes: ['Every payer portal kept signed in for weeks', 'A 07:00 Slack post of approvals, denials and requests for more information', 'Requests past your turnaround target, flagged'] },
    { name: 'Billing company', includes: ['Each client’s payers kept apart in your event log', 'Results sent to each client’s billing system by webhook'] },
  ],

  run: {
    tab: 'Pending requests, every morning',
    recipe: 'prior-auth',
    task: 'Every morning at 06:00, sign in to 5 payer portals with Ashbrook Clinics’ own logins, read all 120 pending requests and send each change to the work queue by 06:45.',
    targets: '5 payer portals, signed in with Ashbrook Clinics’ own logins',
    journey: ['Sign in with your logins', 'Catch the login code', 'Read each pending request', 'Send what changed to your queue'],
    schedule: 'Every morning at 06:00',
    report: 'The work queue, and a summary in #prior-auth in Slack, by 06:45',
    kit: ['5 personas · 1 per payer', '5 inboxes and numbers for login codes', '5 browsers, kept signed in', 'Your list of pending requests'],
    events: [
      { time: 'Tue 06:00', text: '5 browsers open 5 payer portals. 4 are still signed in from last week.' },
      { time: 'Tue 06:01', text: 'Payer C asks for a login code. It reaches the persona’s number in 9 seconds.' },
      { time: 'Tue 06:38', text: 'All 120 pending requests read, about 24 in each portal, each with a screenshot.' },
      { time: 'Tue 06:39', text: 'Request PA-30577 at Payer B needs more information: the last 2 clinic notes, in the payer’s own words.' },
      { time: 'Tue 06:40', text: 'Request PA-30611 at Payer D was denied overnight. The reason is on its screenshot.' },
      { time: 'Tue 06:45', text: 'Every change is in the work queue, with a summary in #prior-auth.' },
    ],
    finding: 'Overnight, 9 of the 120 requests changed: 6 approved, 2 sent back for more information and 1 denied. 3 others have waited past the 5 day target.',
    fix: 'The 3 that need a person head the work queue at 06:45, each with its screenshot and the payer’s exact words, before the first clinic opens.',
    ledger: '120 requests read in 5 payer portals, every status page kept with its screenshot.',
  },

  steps: [
    { title: 'Connect your payer portals', line: 'Your own logins for each portal, kept in a browser that stays signed in for weeks.' },
    { title: 'Add the pending requests', line: 'From a sheet, your billing system or the API, each with its payer and reference number.' },
    { title: 'It reads each one every morning', line: 'Each status page is read and saved with a screenshot, and each login code lands at the persona’s own inbox or number.' },
    { title: 'Changes land in your work queue', line: 'Approvals, denials and requests for more information, in your queue, a sheet, Slack or a webhook by 07:00.' },
  ],

  checks: [
    {
      group: 'What it reads in each portal',
      items: [
        { title: 'Status', line: 'Approved, denied, pending or more information requested, in the payer’s own words.' },
        { title: 'What changed', line: 'Every status that moved since yesterday, with the time it was read.' },
        { title: 'What the payer asked for', line: 'The notes or forms a payer requests, copied word for word.' },
        { title: 'Approval details', line: 'The approved dates, units and reference number, where the portal shows them.' },
        { title: 'Turnaround', line: 'The days each request has waited, against the target you set for each payer.' },
      ],
    },
    {
      group: 'Signing in',
      items: [
        { title: 'Your logins', line: 'Each portal is signed in with logins your organisation owns, and no one else’s.' },
        { title: 'Login codes', line: 'Each code reaches the persona’s own inbox or number, so a sign-in never waits on staff.' },
        { title: 'Sessions kept', line: 'The browser keeps its session for weeks, so it signs in once and stays signed in.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Steps for your team', line: 'A portal that needs someone on your team goes to them with the page and its screenshot.' },
        { title: 'Decisions', line: 'It reads and reports. Filing, appealing and every clinical decision stay with your team.' },
        { title: 'Patient data', line: 'It runs only after a business associate agreement is signed.' },
        { title: 'Spend', line: 'It works within a monthly spend limit you set on its key.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every pending request, read and dated, in the tools your team already opens.',
    items: [
      { format: 'Your work queue', line: 'Only the requests that need a person, each with the payer’s exact words.' },
      { format: 'A sheet', line: 'Every pending request, its status and the day it last changed.' },
      { format: 'Slack', line: 'A 07:00 post with the approvals, denials and requests for more information.' },
      { format: 'Screenshots', line: 'Every status page, dated, ready for an appeal or an audit.' },
      { format: 'Webhook', line: 'Each change as it lands, from your event log.' },
      { format: 'API and MCP', line: 'Ask your own agent where any request stands.' },
    ],
  },

  settings: [
    { k: 'Payer portals', v: 'Each portal your team signs in to, with the logins you give it' },
    { k: 'Requests', v: 'Every pending request, from a sheet, your billing system or the API' },
    { k: 'Login codes', v: 'To the persona’s own inbox or number, 1 persona per payer' },
    { k: 'Turnaround target', v: 'The days you expect a decision within, set for each payer' },
    { k: 'How often', v: 'Every morning at 06:00, or twice a day' },
    { k: 'Where it lands', v: 'Your work queue, a sheet, Slack or a webhook' },
    { k: 'Before the first run', v: 'A signed business associate agreement with Obsession' },
  ],

  table: {
    heading: 'Your team opens the work queue at 08:00 and finds every payer portal already checked.',
    cols: ['By hand', 'With Prior authorization status'],
    rows: [
      { label: 'Checking status', values: ['A login per payer, request by request', 'Every request read before clinics open'] },
      { label: 'Login codes', values: ['Sent to one person’s phone', 'Caught at the persona’s own inbox or number'] },
      { label: 'A denial', values: ['Found days later, on a call', 'In the queue the morning it posts'] },
      { label: 'More information requested', values: ['Seen when the deadline is close', 'Flagged with the payer’s exact words'] },
      { label: 'Proof for an appeal', values: ['A screenshot, if someone took one', 'Every status page saved and dated'] },
      { label: 'A portal redesign', values: ['The script breaks', 'The agent reads the new page'] },
    ],
  },

  faq: {
    heading: 'Before it signs in to your first payer portal.',
    items: [
      {
        q: 'How do we check prior authorization status in every payer portal without logging in to each one?',
        a: 'Prior authorization status signs in to each portal with the logins you give it every morning, reads every pending request and sends what changed to your work queue, each with a screenshot. Nobody on your team has to log in to check.',
        link: { label: 'See the prior authorization AI agent', to: '/use-cases/prior-authorization-ai-agent' },
      },
      {
        q: 'Does it need a business associate agreement?',
        a: 'Yes. Whatever your plan, it runs only after a business associate agreement (BAA) is signed with Obsession, because a status page can hold patient details. Settle it with our team before the first run.',
        link: { label: 'See Enterprise', to: '/pricing' },
      },
      {
        q: 'What happens when a portal asks for a login code?',
        a: 'Your team sets the persona’s own inbox or number as the contact on that login, so the code reaches it and the agent signs in at once. Where a portal sends codes only to one employee’s phone, that person stays in the loop.',
      },
      {
        q: 'Where does it stop?',
        a: 'It signs in only with logins your organisation owns, works within a monthly spend limit you set on its key, and stops before any payment. It reads and reports; filing, appealing and clinical decisions stay with your team.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'We already use prior authorization automation software. Where does this fit?',
        a: 'Many tools submit requests to the payers that offer an electronic connection. Prior authorization status covers the payers your team still checks by logging in to a portal, and its results can feed the same work queue.',
      },
      {
        q: 'How do our engineers build on it?',
        a: 'Start it with obsession.blueprints.run and handle each blueprint.result in your own code, or drive the browser yourself with obsession.browsers.create and Playwright. Each login code reaches your code as email.received or sms.received.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'How many payers and requests can it cover?',
        a: 'As many as you add, every morning: a practice’s main payers, a clinic group’s every payer, or a billing company’s clients across hundreds of payer logins.',
      },
      {
        q: 'What should we watch once it runs?',
        a: 'Authorization turnaround, denial rate and staff hours spent on status checks. The sheet dates every change the morning it posts, so you can see what it does to each.',
      },
      {
        q: 'What does Prior authorization status cost?',
        a: 'It’s billed on the pieces it uses, at list rates: browser time for each status page it reads, plus an inbox and a number per payer for login codes. The hours between mornings cost nothing.',
        link: { label: 'See browsers for AI agents', to: '/browser' },
      },
    ],
  },

  final: {
    heading: 'Know where every prior authorization stands before clinics open.',
    sub: 'Try it on the Free plan with one payer portal, once a business associate agreement is signed.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-prior-auth-final',
      button: 'Start free',
      interest: 'prior-auth',
    },
    link: { label: 'More blueprints to work behind logins', to: '/blueprints/work-behind-logins' },
  },
}

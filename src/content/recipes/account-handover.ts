import type { Capture, Recipe } from '../types'

/* Account handover (/recipes/account-handover). Win customers. Screen: handover (Friday of week 1: 11 of 12 accounts
   back in the client's name; the ads account released on day 2 after 1 chase call; the business listing claimed when
   the old holder's 3 days ran out; the domain moved on a card capped to its fee; 1 open line: the social pages claim,
   filed by the client on day 4).
   Base: _research/recipes/ACTIVE-RECIPES.md, recipe 5 (research name retired; the plain name is Seun's, 3 Oct).
   Red lines held: only for the accounts' rightful owner, and nothing starts before the client's written OK and proof
   of ownership are checked; it writes only to whoever holds the accounts (the old agency, a freelancer, the old
   developer) and to each platform's support, declared as an AI agent acting for the named client, client in copy; it
   never poses as the client or the old agency; calls go to office lines only, never a person's mobile (TCPA, FCC
   24-17); the handover request goes after the agency's and client's OK; where a platform needs the owner to submit or
   sign (social platforms bar automated access), the agent prepares the pack and the client sends it; fees are paid only
   inside a limit the customer sets, each on a card capped to that fee; removing users and changing billing wait for the client's OK; factual tone, no
   threats, real disputes go to the client's lawyer; no recovery services or rented accounts. Platforms are named by
   category, never by brand. Up-to-50 rule: the 1 modelled figure (up to 3 weeks sooner; up to $3,460 billed sooner on
   a $5,000 a month retainer, 3 weeks x $5,000 x 12 / 52) carries its model in the same line. The run is an example and
   says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Agency', 'Founder or owner', 'Marketing', 'Something else'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'handover',
  slug: 'account-handover',
  name: 'Account handover',
  group: 'Win customers',
  line: 'Gets a new client’s accounts back from their old agency and into the client’s name, chasing until each one is done.',
  gets: 'Every account in your client’s name, and a signed record of how it got there.',
  kit: [
    'An agent ID, declared as acting for your client',
    'Its own inbox and phone line',
    'Your client’s written OK, checked first',
    'Your client’s domain login, connected with consent',
    'A card for each fee, capped to it',
    'Every request, reply and fee signed and dated',
  ],

  meta: {
    path: '/recipes/account-handover',
    title: 'Account handover: accounts out of the old agency · Obsession',
    description:
      'A declared AI agent moves a new client’s ads, analytics, listings, social pages and domain out of the old agency and into the client’s name, chasing daily.',
    answer:
      'Account handover is an Obsession recipe. From the day an agency signs a client, a declared AI agent starts every platform’s ownership route at once and chases the old agency or freelancer until each account, from ads and analytics to the domain, is in the client’s name. The client’s written OK comes first, and the client signs wherever a platform needs the owner.',
    ogImage: '/og/account-handover.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Account handover', path: '/recipes/account-handover' },
    ],
  },

  hero: {
    headline: 'AI agents that get a new client’s accounts back from the old agency.',
    sub: 'From the day you sign a client, a declared AI agent asks the old agency and every platform, all at once, to move each account into your client’s name, and chases until each one is done. Your client signs where a platform needs the owner.',
    screen: 'handover',
    capture: {
      kind: 'waitlist',
      source: 'recipe-account-handover-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'handover',
    },
  },

  run: {
    tab: 'New client, week 1',
    recipe: 'handover',
    task: 'We signed a new client today. Move every account their old agency holds into the client’s name, add us with the access we need, and chase until each one is done.',
    targets: '12 accounts, held by the client’s old agency and a freelancer',
    journey: ['Check the client’s OK and proof', 'Map every account and who holds it', 'Ask for every account on day 1', 'Chase until each one is done'],
    schedule: 'Daily until every account is back',
    report: 'A daily note and the handover record',
    kit: ['Agent ID, acting for your client', 'Own inbox and phone line', 'Client’s domain login', 'A capped card per fee'],
    events: [
      { time: 'Day 1, 09:00', text: 'Your client’s written OK and proof of ownership checked. 12 accounts mapped: 10 with the old agency, 2 with a freelancer.' },
      { time: 'Day 1, 10:00', text: 'Approved by you and your client, handover requests go to the old agency and the freelancer, each listing what they hold, with your client in copy. Every platform’s ownership request starts the same hour.' },
      { time: 'Day 2, 15:10', text: 'Ads account released after 1 chase call to the old agency’s office line.' },
      { time: 'Day 3, 11:20', text: 'Domain transfer code in from the old agency, and the transfer started. The $12 fee paid on a card capped to that fee.' },
      { time: 'Day 4, 10:00', text: 'Business listing claimed: the old holder’s 3 days to reply ran out. Your client files the social pages claim from the pack.' },
      { time: 'Day 5, 16:00', text: '11 of 12 accounts in your client’s name, each with 2 of their own admins. Your agency added with the access it needs.' },
    ],
    finding: '11 of 12 accounts back in your client’s name by day 5. The social pages wait on the platform’s review of your client’s claim.',
    fix: 'Every tag and conversion copied first, then old users and managers removed after your client’s OK.',
    ledger: 'Example run. Every request, reply, call and fee dated and signed: a record your client keeps.',
  },

  steps: [
    {
      title: 'Your client says yes, in writing',
      line: 'They sign a written OK and show they own the business. Nothing starts before both are checked.',
    },
    {
      title: 'It maps every account',
      line: 'From a short form and a public check, it lists who holds each one: ads, analytics, search, listings, social pages, website, store, email and domain.',
    },
    {
      title: 'Everything starts on day 1',
      line: 'After you and your client approve it, a written request goes to whoever holds the accounts, with your client in copy, and every platform’s ownership process starts at once. It chases daily until each account is back.',
    },
    {
      title: 'Your client owns it all',
      line: 'Each account in their name with 2 of their own admins, your agency added with the access it needs, and old users removed after their OK.',
    },
  ],

  checks: [
    {
      group: 'Every account',
      items: [
        { title: 'Ads accounts', line: 'Admin moved to your client, billing in their name after their OK, and your agency added.' },
        { title: 'Analytics and tags', line: 'Admin moved to your client, and every tag and conversion copied before anything switches.' },
        { title: 'Search console', line: 'Ownership proved with a DNS record, through your client’s own domain login.' },
        { title: 'Business listing', line: 'The ownership request filed, and the listing claimed if the old holder doesn’t reply in time.' },
        { title: 'Social pages', line: 'The ownership pack ready: ID, proof of ownership and a signed letter, for your client to send.' },
        { title: 'Website, store and email', line: 'Ownership moved to your client’s own login, with old staff accounts listed for removal.' },
        { title: 'Domain', line: 'The transfer code requested, and the fee paid on a card capped to that fee.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'The owner only', line: 'It acts only for the business that owns the accounts, after its written OK and proof of ownership.' },
        { title: 'Only the holders', line: 'It contacts only whoever holds the accounts and each platform’s support, declared as an AI agent acting for your client.' },
        { title: 'Your words', line: 'The handover request goes after you and your client approve it.' },
        { title: 'The owner signs', line: 'Where a platform needs the owner to submit or sign, your client does, from the pack the agent prepared.' },
        { title: 'Fees', line: 'Only inside the limit you set, each on a card capped to that fee. Anything above it waits for you.' },
        { title: 'Removals', line: 'Removing old users or changing billing waits for your client’s OK.' },
        { title: 'Disputes', line: 'Factual, never a threat. A real dispute goes to your client’s lawyer, with the full record.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every account in your client’s name, with the proof.',
    items: [
      { format: 'A handover board', line: 'Each account, who holds it, what was asked, how long the platform gives, and what’s next.' },
      { format: 'A daily note', line: 'What came back, what’s waiting on a platform, and what needs your client.' },
      { format: 'The client pack', line: 'Ownership letters and claims, filled in for your client to sign and send.' },
      { format: 'Slack', line: 'When an account comes back, and when your client needs to act.' },
      {
        format: 'The handover record',
        line: 'Every request, reply, call and fee, dated and signed, for your client to keep or show a platform or a lawyer.',
      },
      { format: 'Webhook', line: 'Each account’s status as it changes, into your onboarding tool.' },
    ],
  },

  settings: [
    { k: 'Client', v: 'Signed, with their written OK and proof of ownership' },
    { k: 'Accounts', v: 'Ads, analytics, tags, search, listings, social pages, website, store, email and domain' },
    { k: 'Held by', v: 'The old agency, a freelancer or the old developer' },
    { k: 'Chasing', v: 'Daily by email, then calls to their office line from the day you choose. Email only if they ask.' },
    { k: 'Fees', v: 'Up to a limit you set, each on a card capped to that fee, such as a domain transfer' },
    { k: 'Your access', v: 'What your team needs, and nothing more' },
    { k: 'Removals', v: 'Old users and managers, after your client’s OK' },
  ],

  forWho: [
    { audience: 'agencies', line: 'Start work on a new client in week 1, not month 2.' },
    { audience: 'founders', line: 'Leaving an agency? Get every account into your own name, with your own admins.' },
    { audience: 'marketing', line: 'Switching agency? Get every ad, analytics and social account into your company’s name, without chasing the old one yourself.' },
    { audience: 'developers', line: 'Start a handover from your own onboarding tool through the API, and read each account’s status back.' },
  ],

  table: {
    heading: 'Everything starts on day 1, so each platform’s own clock sets the pace.',
    line: 'Example: 12 accounts with the old agency and a freelancer.',
    cols: ['How it moves', 'Who sends it', 'Back on'],
    rows: [
      { label: 'Ads account', values: ['An admin request, then 1 chase call', 'The agent', 'Day 2'] },
      { label: 'Analytics, tags, store, email', values: ['Ownership moved by the old holder, chased daily', 'The agent', 'Day 2 to 5'] },
      { label: 'Business listing', values: ['An ownership request, claimed after 3 days', 'The agent', 'Day 4'] },
      { label: 'Domain', values: ['The transfer code, fee on a capped card', 'The agent', 'Day 5'] },
      { label: 'Search console', values: ['A DNS record, once the domain is in your client’s name', 'The agent', 'Day 5'] },
      { label: 'Social pages', values: ['An ownership claim with ID, proof and a signed letter', 'Your client', 'In review'] },
    ],
  },

  faq: {
    heading: 'Your client’s accounts, your client’s OK, and every step on record.',
    items: [
      {
        q: 'How is this different from an access request tool?',
        a: 'Access tools work once your client already holds admin. This gets the accounts back from whoever holds them: the old agency, a freelancer or the old developer.',
      },
      {
        q: 'How do you know the accounts are really our client’s?',
        a: 'Nothing starts until your client signs a written OK and shows proof they own the business. The agent acts only for the owner.',
      },
      {
        q: 'Who does it contact?',
        a: 'Only whoever holds your client’s accounts, and each platform’s support. Every email and call says it’s an AI agent acting for your client, and every email copies your client. Calls go to office lines only.',
      },
      {
        q: 'Does it pretend to be our client?',
        a: 'Never. Where a platform needs the owner to submit or sign, the agent prepares the pack and your client sends it.',
      },
      {
        q: 'What if the old agency won’t help?',
        a: 'It chases on a set rhythm and stays factual. The platforms’ own ownership routes run at the same time, so the handover never waits on the old agency alone. A real dispute goes to your client’s lawyer with the full record.',
      },
      {
        q: 'Does it pay for anything?',
        a: 'Only the fees a handover needs, like a domain transfer, inside a limit you set, each on a card capped to that fee. Anything above it waits for you.',
      },
      {
        q: 'How much sooner can we start?',
        a: 'Up to 3 weeks sooner per new client: a handover that should take under a week can take more than a month while clients chase the old holder, and starting everything on day 1 lets each platform’s clock set the pace. On a $5,000 a month retainer, that’s up to $3,460 of work billed sooner.',
      },
      {
        q: 'What does our client keep?',
        a: 'Every account in their own name, with 2 of their own admins, and a signed, dated record of every step to show a platform or a lawyer.',
      },
    ],
  },

  final: {
    heading: 'Start work on every new client in week 1.',
    sub: 'Join the waitlist. Account handover comes ready with its own inbox, phone line and a capped card for each fee.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-account-handover-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'handover',
    },
  },
}

import type { Capture, Recipe } from '../types'

/* Listings and AI answers (/recipes/listings-ai-answers). Win customers. Screen: listings (3 locations; Leeds on
   Monday 09:42: Maps and Directory B with the wrong hours, Review site B says closed, Review site C missing; Assistant C
   gives the wrong hours, B and D don't name you; asked again every Monday).
   Base: site_founders.json "Be found" (approved copy and demo) and the marketing page's "AI answers and listings".
   The deck's "verify with own number" is corrected: claims go through your own listed number or an address on your
   domain.
   Red lines held: the agent works for your own business, declared; it claims listings through your own listed number
   or domain, never its own number; it asks AI assistants from a clean history (the route, such as each assistant's
   API rather than consumer accounts, is for Seun and James to decide before launch: OpenAI's terms ban automated
   extraction of output); it writes only to sites showing a wrong fact about you, through their own correction route
   (an edit form, never a person); it never writes, buys or answers reviews; every change to
   your facts goes live after your OK. Sites and assistants are unnamed (Maps, Review site A, Assistant A). The run is
   an example and says so. */

const roles: Capture['roles'] = {
  question: 'What’s your role?',
  options: ['Marketing', 'Founder or owner', 'Agency', 'Developer', 'Something else'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'listings',
  slug: 'listings-ai-answers',
  name: 'Listings and AI answers',
  group: 'Win customers',
  line: 'Keeps your listings and what AI assistants say about you right, and chases every wrong fact back to its source.',
  gets: 'Every listing and AI answer about you, checked every Monday and kept right.',
  kit: [
    'An agent ID, declared as AI for your company',
    'Claims through your own number or domain',
    'A clean history on each AI assistant',
    'A browser set to each location',
    'A check every Monday',
    'A screenshot of every listing and answer',
  ],

  meta: {
    path: '/recipes/listings-ai-answers',
    title: 'Listings and AI answers: right where buyers look · Obsession',
    description:
      'Every Monday, AI agents check your listings and ask AI assistants what buyers ask, then chase every wrong fact back to its source until it’s fixed.',
    answer:
      'Listings and AI answers is an Obsession recipe. Every Monday, declared AI agents check your listings on maps, directories and review sites and ask AI assistants the questions your buyers ask. They fix your listings after your OK, claimed through your own listed number or domain, and chase every wrong fact back to its source.',
    ogImage: '/og/listings-ai-answers.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Listings and AI answers', path: '/recipes/listings-ai-answers' },
    ],
  },

  hero: {
    headline: 'AI agents that keep your listings and AI answers right.',
    sub: 'Every Monday, declared AI agents check every map, directory and review site, and ask AI assistants what your buyers ask. They chase every wrong fact to its source until it’s fixed.',
    screen: 'listings',
    capture: {
      kind: 'waitlist',
      source: 'recipe-listings-ai-answers-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'listings',
    },
  },

  run: {
    tab: 'Leeds, Monday',
    recipe: 'listings',
    task: 'Every Monday, check our 3 locations on every map, directory and review site, ask 4 AI assistants what buyers ask, and chase every wrong fact to its source.',
    targets: '3 locations, their listings and 4 AI assistants',
    journey: ['Check every listing', 'Ask what buyers ask', 'Find the wrong source', 'Fix it, then ask again'],
    schedule: 'Every Monday',
    report: 'A Monday email and a sheet',
    kit: ['Agent ID, for your company', 'Your number or domain', 'Clean AI history', 'Every Monday'],
    events: [
      { time: 'Mon 08:55', text: 'Leeds checked on 6 listings. 2 show the wrong hours, 1 says closed, 1 is missing.' },
      { time: 'Mon 09:20', text: '4 AI assistants asked what buyers ask. 1 gives the wrong hours, 2 don’t name you.' },
      { time: 'Mon 09:41', text: 'Review site B claimed through your domain. After your OK, closed becomes open.' },
      { time: 'Mon 09:42', text: 'Maps hours fixed after your OK: 8 to 6, not 9 to 5.' },
      { time: 'Tue 10:00', text: 'Assistant C’s wrong hours traced to Directory B. A correction goes in through its own edit form.' },
    ],
    finding: '4 of 6 Leeds listings were wrong or missing. 1 AI assistant gave the wrong hours, and 2 left you out.',
    fix: 'The rest chased until they’re live. The same questions go to all 4 assistants next Monday.',
    ledger: 'Example run. Every listing, answer and correction dated and signed.',
  },

  steps: [
    {
      title: 'Give it your facts',
      line: 'Hours, prices, addresses and what you sell, for every location. You approve them once.',
    },
    {
      title: 'Agents check where buyers look',
      line: 'Maps, directories and review sites, and the AI assistants your buyers ask, every Monday.',
    },
    {
      title: 'Wrong facts chased to the source',
      line: 'They claim your listings through your own number or domain, fix them after your OK, and ask each site behind a wrong answer to correct it.',
    },
    {
      title: 'Asked again until it’s right',
      line: 'The same questions go back to every assistant each Monday, so you see the day each answer changes.',
    },
  ],

  checks: [
    {
      group: 'Your listings',
      items: [
        { title: 'Hours and status', line: 'Open, closed and holiday hours, for every location.' },
        { title: 'Prices and services', line: 'What you sell and what it costs, as each listing shows it.' },
        { title: 'Contact details', line: 'Phone, address, website and booking links that work.' },
        { title: 'Missing listings', line: 'The places buyers look where you don’t appear.' },
      ],
    },
    {
      group: 'AI answers',
      items: [
        { title: 'The questions buyers ask', line: 'The best in your category, near them, your prices, your hours.' },
        { title: 'Whether you’re named', line: 'And who’s named instead.' },
        { title: 'Wrong facts', line: 'Old prices, wrong hours and locations said to be closed.' },
        { title: 'The source', line: 'The pages behind each wrong answer, so the fix goes where it counts.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every Monday, see what buyers and AI see about you.',
    items: [
      { format: 'Email', line: 'Every Monday: what changed, what’s fixed and what’s still being chased.' },
      { format: 'Slack', line: 'The same morning a listing says you’re closed.' },
      { format: 'Sheet', line: 'Every listing and answer, by location, week by week.' },
      { format: 'PDF', line: 'A report for each location manager, or each client.' },
      { format: 'Webhook', line: 'Every check and fix, with its screenshot.' },
    ],
  },

  settings: [
    { k: 'Locations', v: 'Every location you have' },
    { k: 'Facts', v: 'Hours, prices, services and contact details, approved by you' },
    { k: 'Where', v: 'Maps, directories, review sites and AI assistants' },
    { k: 'Questions', v: 'The ones your buyers ask, in their words' },
    { k: 'Verification', v: 'Through your own listed number or domain' },
    { k: 'How often', v: 'Every Monday' },
  ],

  forWho: [
    { audience: 'founders', line: 'Stop losing buyers to an old price or the wrong hours.' },
    { audience: 'marketing', line: 'Know what AI assistants tell your buyers every Monday, and fix what’s wrong at the source.' },
    { audience: 'agencies', line: 'Keep every client’s listings and AI answers right, with a record to show for it.' },
    { audience: 'developers', line: 'Pull every listing and answer into your own dashboard through the API.' },
  ],

  table: {
    heading: 'Every wrong fact fixed where buyers see it, or chased until it is.',
    line: 'Example: the Leeds location.',
    cols: ['First Monday', '5 Mondays on'],
    rows: [
      { label: 'Maps', values: ['Wrong hours', 'Correct'] },
      { label: 'Review site B', values: ['Says closed', 'Open, right hours'] },
      { label: 'Review site C', values: ['Missing', 'Listed'] },
      { label: 'Directory B', values: ['Wrong hours', 'Correct, fixed through its edit form'] },
      { label: 'Assistant B', values: ['Doesn’t name you', 'Names you'] },
      { label: 'Assistant C', values: ['Wrong hours', 'Right hours'] },
    ],
  },

  faq: {
    heading: 'Only your own facts, claimed through your own number or domain.',
    items: [
      {
        q: 'Which AI assistants does it ask?',
        a: 'The ones your buyers use, with the questions they ask, from a clean history, so yours doesn’t colour the answer.',
      },
      {
        q: 'How does it claim our listings?',
        a: 'Through your own listed number or an address on your domain, so each site knows it’s really your business. It never lists its own number as yours.',
      },
      {
        q: 'Who does it contact?',
        a: 'Only the sites showing a wrong fact about you, through their own correction route, as your declared AI agent.',
      },
      {
        q: 'Can it change what an AI assistant says?',
        a: 'It fixes the facts at the source: your listings and the pages the answers draw on. Then it asks again every Monday, so you see the day each answer changes.',
      },
      { q: 'Does it post reviews?', a: 'Never. It doesn’t write, buy or answer reviews. It keeps your facts right.' },
      {
        q: 'What does it need from us?',
        a: 'Your facts for each location, approved once, and your listed number or an address on your domain for verification.',
      },
    ],
  },

  final: {
    heading: 'Be right wherever buyers and AI look you up.',
    sub: 'Join the waitlist. Listings and AI answers comes ready to run on every location you have.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-listings-ai-answers-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'listings',
    },
  },
}

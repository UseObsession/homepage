import type { Recipe } from '../types'

/* Listings and AI answers (/recipes/listings-ai-answers). A ready-made collection (9 Nov): the record of what AI
   assistants and listings tell buyers about the reader's business, every Monday and within a day of any price change,
   launch or rename, each wrong fact traced to the page the answer cites and asked again until it changes. It reads
   and records; correcting a page stays with the reader's team. Assistants are asked the official way, from a clean
   history. Sites and assistants are unnamed (Maps, Review site B, Assistant C). The run is an example (the `listings`
   screen: Leeds, wrong hours on Maps and Directory B, Review site B says closed). */

export const recipe: Recipe = {
  id: 'listings',
  slug: 'listings-ai-answers',
  name: 'Listings and AI answers',
  group: 'Check your own journeys',
  line: 'What AI assistants and listings tell buyers about you, every Monday, each wrong fact traced to the page it came from.',
  gets: 'Every answer AI assistants and listings give about you, dated, each wrong fact traced to its source and asked again until it changes.',
  kit: [
    'Your facts, approved by you once',
    'The questions your buyers ask, in their words',
    'Each AI assistant asked the official way',
    'Every map, directory and review site',
    'A check every Monday, and after every price change',
    'Every answer kept with the page it cites',
  ],

  meta: {
    path: '/recipes/listings-ai-answers',
    title: 'Listings and AI answers: what buyers are told · Obsession',
    description:
      'What AI assistants, maps, directories and review sites tell buyers about you, checked every Monday, each wrong fact traced to the page it came from.',
    answer:
      'Listings and AI answers records what AI assistants and listings tell buyers about you. Every Monday Obsession asks the assistants what your buyers ask and checks every map, directory and review site, then traces each wrong fact to the page it came from.',
    ogImage: '/og/listings-ai-answers.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Listings and AI answers', path: '/recipes/listings-ai-answers' },
    ],
  },

  hero: {
    headline: 'When AI gets a fact about you wrong, find the page it read.',
    sub: 'Listings and AI answers records what AI assistants and listings tell buyers about you. Every Monday Obsession asks the assistants what your buyers ask and checks every map, directory and review site, then traces each wrong fact to the page it came from.',
    screen: 'listings',
    capture: {
      kind: 'waitlist',
      source: 'recipe-listings-ai-answers-hero',
      button: 'Request early access',
      interest: 'listings',
    },
  },

  run: {
    tab: 'Example: Leeds, 3 Mondays',
    recipe: 'listings',
    task: 'Every Monday, ask 4 AI assistants what buyers ask about our 3 locations and check every listing. Trace each wrong fact to its source, and ask again until the answer changes.',
    targets: '3 locations, their listings and 4 AI assistants',
    journey: ['Ask what buyers ask', 'Check every listing', 'Trace each wrong answer', 'Ask again every Monday'],
    schedule: 'Every Monday, and after any price change',
    report: 'A Monday email and a table',
    kit: ['Your approved facts', 'Clean AI history', '4 AI assistants', 'Every Monday'],
    events: [
      { time: 'Mon 09:00', text: '4 AI assistants asked what buyers ask. Assistant C says Leeds opens at 9. It opens at 8.' },
      { time: 'Mon 09:05', text: 'The source: Assistant C cites Directory B, which still lists the old hours.' },
      { time: 'Mon 09:12', text: 'Listings checked: Maps shows the wrong hours, Review site B says closed, Review site C has no listing.' },
      { time: 'Mon 11:30', text: 'Your team updates Maps and Review site B, and asks Directory B to correct its hours.' },
      { time: 'Week 2, Mon', text: 'Directory B unchanged. Assistant C still says 9.' },
      { time: 'Week 3, Mon', text: 'Directory B updated. Asked again, Assistant C says Leeds opens at 8.' },
    ],
    finding: 'Assistant C gave Leeds the wrong hours because Directory B did. 4 of 6 Leeds listings were wrong or missing.',
    fix: 'Each wrong fact in your Monday email with the page it came from, closed the week the answer changed.',
    ledger: 'Example run. Every answer kept with the page it cites.',
  },

  steps: [
    {
      title: 'Approve your facts once',
      line: 'Hours, prices, plans, locations and what you sell, built from your site.',
    },
    {
      title: 'Obsession asks what your buyers ask',
      line: 'Every Monday, and within a day of any price change, launch or rename: the AI assistants your buyers use, and every map, directory and review site.',
    },
    {
      title: 'Each wrong fact traced',
      line: 'To the page the answer cites: your site, a profile you run, a directory or a review site.',
    },
    {
      title: 'Asked again until it changes',
      line: 'Every Monday, so the record shows the day each answer turns right, with the before and after.',
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
        { title: 'The questions buyers ask', line: 'The best in your category, near them, your prices, your plans, your hours.' },
        { title: 'Whether you’re named', line: 'And who’s named instead.' },
        { title: 'Wrong facts', line: 'Old prices, retired products, missing features, wrong hours and locations said to be closed.' },
        { title: 'The source', line: 'The page each answer cites: your site, a profile you run, a directory, a review site or a comparison page.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'A clean history', line: 'Each assistant asked the official way, from a clean history, so yours doesn’t colour the answer.' },
        { title: 'Other sites', line: 'It names the page to correct. Contacting its owner stays with your team.' },
        { title: 'Your pages', line: 'Read, never changed.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every wrong fact, where it came from, and the day it changed.',
    items: [
      { format: 'Email', line: 'Every Monday: what changed, what’s right now and what’s still wrong.' },
      { format: 'Slack', line: 'The same morning an assistant or a listing gets you wrong.' },
      { format: 'Before and after', line: 'Each fact with the answer before and after.' },
      { format: 'A table', line: 'Every listing, answer and source, by location, week by week.' },
      { format: 'PDF', line: 'A report for each location manager, or each client.' },
      { format: 'Webhook', line: 'Every check, with its screenshot.' },
    ],
  },

  settings: [
    { k: 'Locations', v: 'Every location you have' },
    { k: 'Facts', v: 'Hours, prices, plans, services and contact details, approved by you' },
    { k: 'Where', v: 'Maps, directories, review sites and AI assistants' },
    { k: 'Questions', v: 'The ones your buyers ask, in their words' },
    { k: 'How often', v: 'Every Monday, and within a day of any price change' },
  ],

  forWho: [
    { audience: 'founders', line: 'See an old price, a retired plan or the wrong hours before buyers act on it.' },
    { audience: 'marketing', line: 'What AI assistants tell your buyers, and the page each answer came from.' },
    { audience: 'agencies', line: 'What AI assistants say about each client, with the before and after.' },
    { audience: 'developers', line: 'Every answer and its source in your own dashboard, through the API.' },
  ],

  table: {
    heading: 'Every wrong fact traced to its source, and asked again until the answer changes.',
    line: 'Example: the Leeds location.',
    cols: ['First Monday', '3 Mondays on'],
    rows: [
      { label: 'Maps', values: ['Wrong hours', 'Correct'] },
      { label: 'Review site B', values: ['Says closed', 'Open, right hours'] },
      { label: 'Review site C', values: ['Missing', 'Listed'] },
      { label: 'Directory B', values: ['Wrong hours', 'Correct'] },
      { label: 'Assistant B', values: ['Doesn’t name you', 'Names you'] },
      { label: 'Assistant C', values: ['Wrong hours, citing Directory B', 'Right hours'] },
    ],
  },

  faq: {
    heading: 'Every answer kept with the page it came from.',
    items: [
      {
        q: 'Why does an AI assistant quote a price we stopped charging?',
        a: 'Because a page it reads still shows that price. Listings and AI answers traces each wrong answer to the page the assistant cites, so you know which page to correct, then asks again every Monday until the answer changes.',
      },
      {
        q: 'Which AI assistants does it ask?',
        a: 'The ones your buyers use, with the questions they ask, the official way and from a clean history.',
      },
      {
        q: 'Can it ask about our competitors too?',
        a: 'Yes. Every answer records who is named, so you see who is named instead of you.',
      },
      { q: 'Does it change our listings?', a: 'No. It reads them and names what’s wrong. The changes stay with your team.' },
      { q: 'What does it need from us?', a: 'Your facts, approved once, and the questions your buyers ask.' },
    ],
  },

  final: {
    heading: 'Be right wherever buyers and AI look you up.',
    sub: 'Early access includes API and MCP access, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-listings-ai-answers-final',
      button: 'Request early access',
      interest: 'listings',
    },
  },
}

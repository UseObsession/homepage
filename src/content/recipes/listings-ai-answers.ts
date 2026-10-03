import type { Capture, Recipe } from '../types'

/* Listings and AI answers (/recipes/listings-ai-answers). Win customers. Screen: listings (3 locations; Leeds on
   Monday 09:42: Maps and Directory B with the wrong hours, Review site B says closed, Review site C missing; Assistant C
   gives the wrong hours, B and D don't name you; asked again every Monday).
   Active since 3 Oct (the research's "Answer Fix", _research/recipes/ACTIVE-RECIPES.md 8): when an AI assistant states
   a wrong fact, the agent traces it to the page the assistant cites, fixes the customer's own pages and listings after
   their OK, files 1 correction with each other site's owner through that site's own route, chases twice at most
   (a week apart), then asks again every Monday and closes a fact only when the answer changes, with the before and
   after signed. It also runs within a day of every price change, launch or rename.
   Human OK gates: the fact sheet (once), every edit to the customer's own pages and profiles, the first message to each
   new site. Up-to-50 rule: "up to 62%" with its model in the same line (62% of wrong AI answers are out of date rather
   than made up, so fixing the stale page fixes every answer that cites it). No source named on the page.
   Red lines held: the agent works for your own business, declared; it claims listings through your own listed number
   or domain, never its own number; it asks AI assistants through each one's official route from a clean history
   (consumer apps are never scraped: OpenAI's terms ban automated extraction of output); it writes only to sites
   showing a wrong fact about you, through their own correction route (an edit form, never a person), and never pitches
   for a mention or a link; where a site's rules need a person, it drafts the request and someone at your company sends
   it; it never writes, buys or answers reviews; every change to your facts goes live after your OK. Sites and
   assistants are unnamed (Maps, Review site A, Assistant A). The run is an example and says so. */

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
  line: 'Corrects the source when a listing or an AI assistant gets a fact about you wrong, and asks again until the answer changes.',
  gets: 'Each wrong fact about you corrected where AI assistants read it, and the question asked again every Monday until the answer is right.',
  kit: [
    'An agent ID, declared as AI for your company',
    'Your facts, approved by you once',
    'Listings claimed through your own number or domain',
    'Each AI assistant asked the official way',
    'A check every Monday, and after every price change',
    'Every answer, source and fix signed and dated',
  ],

  meta: {
    path: '/recipes/listings-ai-answers',
    title: 'Listings and AI answers, fixed at the source · Obsession',
    description:
      'When an AI assistant or a listing gets a fact about you wrong, a declared AI agent fixes it at the source and asks again until the answer changes.',
    answer:
      'Listings and AI answers fixes wrong facts about you at the source: every Monday, declared AI agents ask AI assistants what your buyers ask and check every map, directory and review site, then ask again until each wrong answer changes.',
    ogImage: '/og/listings-ai-answers.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Listings and AI answers', path: '/recipes/listings-ai-answers' },
    ],
  },

  hero: {
    headline: 'When AI gets a fact about you wrong, fix the page it read.',
    sub: 'Listings and AI answers fixes wrong facts about you at the source: every Monday, declared AI agents ask AI assistants what your buyers ask and check every map, directory and review site, then ask again until each wrong answer changes.',
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
    tab: 'Example: Leeds, 3 Mondays',
    recipe: 'listings',
    task: 'Every Monday, ask 4 AI assistants what buyers ask about our 3 locations and check every listing. Fix each wrong fact where it comes from, and ask again until the answer changes.',
    targets: '3 locations, their listings and 4 AI assistants',
    journey: ['Ask what buyers ask', 'Trace each wrong answer', 'Fix it at the source', 'Ask again until it changes'],
    schedule: 'Every Monday, and after any price change',
    report: 'A Monday email and a sheet',
    kit: ['Agent ID, declared as AI for your company', 'Your number or domain', 'Clean AI history', 'Every Monday'],
    events: [
      { time: 'Mon 09:00', text: '4 AI assistants asked what buyers ask. Assistant C says Leeds opens at 9. It opens at 8.' },
      { time: 'Mon 09:05', text: 'The source: Assistant C cites Directory B, which still lists the old hours.' },
      { time: 'Mon 09:40', text: '1 correction sent to Directory B through its edit form, after your OK, as your declared AI agent.' },
      { time: 'Mon 09:42', text: 'Your own listings fixed after your OK, claimed with a code to your listed number. Review site B no longer says closed.' },
      { time: 'Week 2, Mon', text: 'Directory B unchanged. 1 polite chase, the first of 2 at most.' },
      { time: 'Week 3, Mon', text: 'Directory B updated. Asked again, Assistant C says Leeds opens at 8.' },
    ],
    finding: 'Assistant C gave Leeds the wrong hours because Directory B did. 4 of 6 Leeds listings were wrong or missing.',
    fix: 'Every source fixed by week 3. The same questions go to all 4 assistants every Monday, so you hear the day a wrong fact comes back.',
    ledger: 'Example run. Every answer, source and fix dated and signed.',
  },

  steps: [
    {
      title: 'Approve your facts once',
      line: 'Hours, prices, plans, locations and what you sell, built from your site and the tools you connect.',
    },
    {
      title: 'Agents ask what your buyers ask',
      line: 'Every Monday, and within a day of any price change, launch or rename, they ask the AI assistants your buyers use and check every map, directory and review site.',
    },
    {
      title: 'Wrong facts fixed at the source',
      line: 'Each wrong answer is traced to the page it cites. Your own pages and listings are fixed after your OK; every other site gets 1 correction through its own edit form.',
    },
    {
      title: 'Closed only when the answer changes',
      line: 'They ask again every Monday and close a fact only when the answer is right, with the before and after signed.',
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
      group: 'The fix',
      items: [
        { title: 'Your own pages first', line: 'Your site and the profiles you run, corrected through the logins you connect, after your OK.' },
        { title: 'Other sites', line: '1 correction with the evidence, through each site’s own edit form, as your declared AI agent. 2 polite chases at most.' },
        { title: 'After every change', line: 'A new price, a launch or a rename sends the questions out again within a day.' },
        { title: 'Asked until it changes', line: 'Every Monday, so you see the day each answer turns right.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every wrong fact, where it came from, and the day it changed.',
    items: [
      { format: 'Email', line: 'Every Monday: what changed, what’s fixed and what’s still being chased.' },
      { format: 'Slack', line: 'The same morning an assistant or a listing gets you wrong.' },
      { format: 'Before and after', line: 'Each fixed fact with the answer before and after, signed.' },
      { format: 'Sheet', line: 'Every listing, answer and source, by location, week by week.' },
      { format: 'PDF', line: 'A report for each location manager, or each client.' },
      { format: 'Webhook', line: 'Every check and fix, with its screenshot.' },
    ],
  },

  settings: [
    { k: 'Locations', v: 'Every location you have' },
    { k: 'Facts', v: 'Hours, prices, plans, services and contact details, approved by you' },
    { k: 'Where', v: 'Maps, directories, review sites and AI assistants' },
    { k: 'Questions', v: 'The ones your buyers ask, in their words' },
    { k: 'Your own pages', v: 'Fixed through the logins you connect, after your OK' },
    { k: 'Other sites', v: '1 correction through their own edit form, 2 chases at most' },
    { k: 'Verification', v: 'Through your own listed number or domain' },
    { k: 'How often', v: 'Every Monday, and within a day of any price change' },
  ],

  forWho: [
    { audience: 'founders', line: 'Stop losing buyers to an old price, a retired plan or the wrong hours.' },
    { audience: 'marketing', line: 'Fix what AI assistants tell your buyers at the source, and see the day each answer changes.' },
    { audience: 'agencies', line: 'Correct what AI assistants say about each client, with their OK, and show the before and after signed.' },
    { audience: 'developers', line: 'Pull every answer, source and fix into your own dashboard through the API.' },
  ],

  table: {
    heading: 'Every wrong fact corrected at its source, and asked again until the answer changes.',
    line: 'Example: the Leeds location.',
    cols: ['First Monday', '3 Mondays on'],
    rows: [
      { label: 'Maps', values: ['Wrong hours', 'Correct'] },
      { label: 'Review site B', values: ['Says closed', 'Open, right hours'] },
      { label: 'Review site C', values: ['Missing', 'Listed'] },
      { label: 'Directory B', values: ['Wrong hours', 'Correct, fixed through its edit form'] },
      { label: 'Assistant B', values: ['Doesn’t name you', 'Names you'] },
      { label: 'Assistant C', values: ['Wrong hours, citing Directory B', 'Right hours'] },
    ],
  },

  faq: {
    heading: 'Only facts about you, corrected through each site’s own form.',
    items: [
      {
        q: 'Why does an AI assistant quote a price we stopped charging?',
        a: 'Because a page it reads still shows that price: Listings and AI answers traces each wrong answer to the page the assistant cites, fixes your own pages after your OK, asks the owner of any other page to correct it, and asks again until the answer changes.',
      },
      {
        q: 'Can Listings and AI answers change what an AI assistant says?',
        a: 'Listings and AI answers fixes the pages the answer is built from, then asks again every Monday until the answer changes. A fact closes only when the answer is right.',
      },
      {
        q: 'How many wrong answers can Listings and AI answers fix?',
        a: 'Listings and AI answers can fix up to 62% at the source: that’s the share of wrong AI answers that are out of date rather than made up, so fixing the old page fixes every answer that cites it.',
      },
      {
        q: 'Which AI assistants does Listings and AI answers ask?',
        a: 'Listings and AI answers asks the ones your buyers use, with the questions they ask, asked the official way and from a clean history, so yours doesn’t colour the answer.',
      },
      {
        q: 'Who does it contact?',
        a: 'Listings and AI answers contacts only the sites showing a wrong fact about you, through their own edit form, as your declared AI agent: 1 correction with the evidence, 2 polite chases at most. The first message to each new site goes after your OK.',
      },
      {
        q: 'How does Listings and AI answers claim our listings?',
        a: 'Listings and AI answers claims them through your own listed number or an address on your domain, so each site knows it’s really your business. It never lists its own number as yours.',
      },
      {
        q: 'Does it ask for a mention or post reviews?',
        a: 'Never. Listings and AI answers corrects facts and nothing else: no pitches for a mention or a link, and it doesn’t write, buy or answer reviews.',
      },
      {
        q: 'What does Listings and AI answers need from us?',
        a: 'Listings and AI answers needs your facts, approved once, your listed number or an address on your domain, and the logins for your own site and profiles if you want them fixed for you.',
      },
    ],
  },

  final: {
    heading: 'Be right wherever buyers and AI look you up.',
    sub: 'Join the waitlist. Listings and AI answers comes ready to run on every location, price and plan you have.',
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

import type { Recipe } from '../types'

/* Prospect intelligence (/recipes/prospect-intelligence; /recipes/prospect-research redirects here). Watch other
   companies. Screen: pack.
   The 9 Nov story: what each prospect sends its own customers, collected by signing up as one, to open a pitch with.
   It works from a list (Clay, Google Sheets, a CSV, the API) and writes each fact, its date and a receipt link back to
   the same rows. Not contact data: no people, no tracking. Kept from James: the "54 of 142" totals, "your team writes
   the first line" and "stop writing when the gap closes". The run is an example. */

export const recipe: Recipe = {
  id: 'prospect',
  slug: 'prospect-intelligence',
  name: 'Prospect intelligence',
  group: 'Watch other companies',
  line: 'What each prospect sends its own customers, collected from your list in Clay or Sheets, to open each pitch with.',
  gets: 'A fact and its receipt on every row, back in Clay, your CRM or a sheet.',
  kit: [
    'An account and inbox at each prospect',
    'A phone number for texts',
    'A browser set to their country',
    'Every email and text kept with its arrival time',
    'Kept for as long as you set',
    'New columns on the rows you already have',
  ],

  meta: {
    path: '/recipes/prospect-intelligence',
    title: 'Prospect intelligence: what each prospect sends customers',
    description:
      'Prospect intelligence collects the emails, texts and chat answers each company on your list sends its customers, as dated columns in Clay or Sheets.',
    answer:
      'Prospect intelligence collects what each prospect sends its own customers, to open a pitch with. Obsession signs up, opts in to texts and asks the chat at every company on your list, and writes each fact and its receipt back to your rows in Clay or Sheets.',
    ogImage: '/og/prospect-intelligence.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Prospect intelligence', path: '/recipes/prospect-intelligence' },
    ],
  },

  hero: {
    headline: 'Open every pitch with the prospect’s own emails, and the ones that never came.',
    sub: 'Prospect intelligence collects what each prospect sends its own customers, to open a pitch with. Obsession signs up, opts in to texts and asks the chat at every company on your list, and writes each fact and its receipt back to your rows in Clay or Sheets.',
    screen: 'pack',
    capture: {
      kind: 'waitlist',
      source: 'recipe-prospect-hero',
      button: 'Request early access',
      interest: 'prospect',
    },
  },

  run: {
    tab: 'Example: 142 brands, from Clay',
    recipe: 'prospect',
    task: 'Opt in to texts at the 142 brands in our Clay table as a UK subscriber. Tell me which never send one.',
    targets: '142 consumer brands, from a Clay table',
    journey: ['Sign up to emails', 'Opt in to texts', 'Ask the site’s chat', 'Wait 14 days'],
    schedule: 'Day 1, then days 7 and 14',
    report: 'Clay columns, a receipt link each',
    kit: ['Subscriber · UK', '142 inboxes', '142 phone numbers', '14 days kept'],
    events: [
      { time: 'Day 1, 09:00', text: 'Signed up and opted in to texts at 142 brands.' },
      { time: 'Day 1, 10:00', text: '131 welcome emails arrive within the hour.' },
      { time: 'Day 1, 11:00', text: 'Asks each site’s chat 1 question. 9 hand over to a person, and Obsession says it’s an AI.' },
      { time: 'Day 7', text: '88 brands have sent a text. 54 are still silent.' },
      { time: 'Day 14', text: 'Still silent at day 14: 54 brands, each with its record.' },
    ],
    finding: '54 of 142 brands took a text opt-in and never sent a text in 14 days.',
    fix: '54 receipt links and a fact column written back to Clay. Your team writes each first line.',
    ledger: 'Example run. Each brand’s record is dated, and anyone with the link can open it.',
  },

  steps: [
    { title: 'Add your list', line: 'From Clay, Google Sheets, a CSV or the API. You bring the contacts.' },
    {
      title: 'Pick the customer',
      line: 'A subscriber, a trial user or a buyer, in each prospect’s country. Obsession signs up, opts in and asks the chat, as you choose.',
    },
    { title: 'Everything that follows is kept', line: 'Every email, text and answer, timed from the sign-up, for as long as you set.' },
    {
      title: 'Facts land on your rows',
      line: 'A fact, the date it was seen and a receipt link on every row. Your team writes the first line.',
    },
  ],

  checks: [
    {
      group: 'Sign-up and welcome',
      items: [
        { title: 'Welcome email', line: 'Whether it arrives, how long it takes, whether it lands in spam, and the offer in it.' },
        { title: 'What they send', line: 'Every email and text after the sign-up, how often it comes, and the offers it repeats.' },
        { title: 'Sign-up form', line: 'Whether it works on a phone and a desktop, and the step where it breaks.' },
        { title: 'Free trials', line: 'Every onboarding email by trial day, and what a rep sends.' },
      ],
    },
    {
      group: 'Texts',
      items: [{ title: 'Text opt-in', line: 'Whether even 1 text follows the opt-in, inside the window you set.' }],
    },
    {
      group: 'Chat and booking',
      items: [
        { title: 'The site’s chat', line: 'Whether it answers a buyer’s question, what it says, and how fast a person picks up.' },
        { title: 'Booking pages', line: 'Whether the page loads on a phone and shows open slots.' },
      ],
    },
  ],

  outputs: {
    heading: 'A fact about every prospect, with a receipt they can open.',
    items: [
      { format: 'A fact per company', line: 'The gap or the offer, against the rule you set.' },
      { format: 'A timeline', line: 'Every step with its time, from sign-up to the end of the window.' },
      { format: 'The emails and texts', line: 'Kept as they arrived, with screenshots.' },
      { format: 'A link anyone can open', line: 'Including the prospect, so the fact stands up on its own.' },
      {
        format: 'Columns on your list',
        line: 'The fact, the date it was seen and the receipt link, on the same rows in Clay, your CRM or a sheet.',
      },
      { format: 'Totals', line: 'For example: 54 of 142 brands never sent a text after the opt-in.' },
    ],
  },

  settings: [
    { k: 'The fact to find', v: 'The gap your product closes, or the offer you want to see' },
    { k: 'What counts', v: 'For example: no text within 14 days, no welcome email within an hour' },
    { k: 'Customer profile', v: 'Subscriber, trial user or buyer, in each prospect’s country' },
    { k: 'How long', v: '7, 14 or 30 days, then again on a schedule' },
    { k: 'Afterwards', v: 'Stop, or keep reading and hear when a gap closes' },
    { k: 'Companies', v: 'A Clay table, a sheet, a CSV or the API' },
  ],

  forWho: [
    {
      audience: 'agencies',
      line: 'A pitch for every prospect, built on what their customers get. You hear when a gap closes, so you stop pitching it.',
    },
    { audience: 'sales', line: 'A fact about each account for the first line.' },
    { audience: 'founders', line: 'Pitch only the companies with the gap you fix.' },
    { audience: 'marketing', line: 'Target accounts sorted by the gap your product fixes.' },
    { audience: 'developers', line: 'Call it from Clay or your own tool for every new row.' },
  ],

  faq: {
    heading: 'Every fact stands up on its own, with a receipt the prospect can open.',
    items: [
      {
        q: 'What is prospect intelligence?',
        a: 'Prospect intelligence is what a prospect sends its own customers, collected by signing up as one. It isn’t contact data: Obsession collects the fact, and your own tools find the people.',
      },
      {
        q: 'How do I find a reason to reach out that 50 other reps don’t have?',
        a: 'Use a fact only a customer of theirs can see. Prospect intelligence signs up at every company on your list and keeps what arrives, so each first line opens on a dated fact with a receipt link.',
      },
      {
        q: 'Does Prospect intelligence work with Clay and Google Sheets?',
        a: 'Yes. Prospect intelligence reads the companies from your table and writes the fact, the date and the receipt link back as new columns on the same rows.',
      },
      {
        q: 'Does Prospect intelligence contact their staff?',
        a: 'Only if you set it to. Prospect intelligence signs up, opts in and asks the site’s chat, and says it’s an AI when it talks to a person. Who asked is never shown.',
      },
      {
        q: 'How do I know a gap is real?',
        a: 'Prospect intelligence counts a gap only once the sign-up is confirmed, the spam folder is checked and the full window has been watched. Anything less is No verdict, never a gap.',
      },
      {
        q: 'What happens when the window ends?',
        a: 'Prospect intelligence stops, or reads again on a schedule. If a gap closes you hear about it, so you know to stop writing.',
      },
      {
        q: 'How many prospects can Prospect intelligence cover?',
        a: 'Prospect intelligence covers every company on your list, at once. Any already in the index return their history straight away.',
      },
    ],
  },

  final: {
    heading: 'Write only to the prospects with the gap you fix.',
    sub: 'Early access includes Prospect intelligence on your list, every company already covered, and up to 5 added for you.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-prospect-final',
      button: 'Request early access',
      interest: 'prospect',
    },
  },
}

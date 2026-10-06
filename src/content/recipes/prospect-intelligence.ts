import type { Recipe } from '../types'

/* Prospect intelligence (/recipes/prospect-intelligence; /recipes/prospect-research redirects here). Renamed on the
   2 Oct call: the agents become each prospect's customer and prove what it actually does. It is not contact finding,
   and it never asks staff anything. Kept from James: the headline, the gap verdict per company, the proof link anyone
   can open, the Clay columns, the "54 of 142" totals, "your team writes the first line" and "stop writing when the
   gap closes". Fixed: no support questions (the site's chat bot only, and the step ends if a person picks up), no
   forms filled or sent, no baskets or checkouts at prospects, free trials only with no card (never replies, closes
   the moment a rep writes or calls), no WhatsApp check, no control message or second run claimed. The run is
   an example and says so. */

export const recipe: Recipe = {
  id: 'prospect',
  slug: 'prospect-intelligence',
  name: 'Prospect intelligence',
  group: 'Win customers',
  line: 'Becomes a customer of every prospect on your list and proves the gap you fix.',
  gets: 'A verdict and a proof link per company, back in Clay, your CRM or a sheet.',
  kit: [
    'A declared AI agent per prospect',
    'Its own inbox and phone number',
    'A browser set to their country',
    'Watched for as long as you set',
    'Every step signed and dated',
    'Results back on your list',
  ],

  meta: {
    path: '/recipes/prospect-intelligence',
    title: 'Prospect intelligence: proof of a real gap at every prospect',
    description:
      'A declared AI agent becomes a customer of every company on your list. It signs up, opts in and asks the bot, then shows the gap you fix, with signed proof.',
    answer:
      'Prospect intelligence is proof of what a prospect does to its own customers, found by becoming one. A declared AI agent signs up, opts in and asks the bot at every company on your list, then hands you a signed fact to open each pitch with.',
    ogImage: '/og/prospect-intelligence.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Prospect intelligence', path: '/recipes/prospect-intelligence' },
    ],
  },

  hero: {
    headline: 'Prove a real gap at every company on your list.',
    sub: 'Prospect intelligence is proof of what a prospect does to its own customers, found by becoming one. A declared AI agent signs up, opts in and asks the bot at every company on your list, then hands you a signed fact to open each pitch with.',
    screen: 'pack',
    capture: {
      kind: 'waitlist',
      source: 'recipe-prospect-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your first run and tell you about Obsession.',
      roles: {
        question: 'Who are your prospects?',
        options: ['Stores and consumer brands', 'Software companies', 'Clinics and local services', 'An agency’s pitch list', 'Something else'],
        multi: true,
      },
      interest: 'prospect',
    },
  },

  run: {
    tab: 'Example: 142 brands, from Clay',
    recipe: 'prospect',
    task: 'Opt in to texts at the 142 brands in our Clay table. Tell me which never send one, with proof.',
    targets: '142 consumer brands, from a Clay table',
    journey: ['Sign up to emails', 'Opt in to texts', 'Ask the bot, never staff', 'Wait 14 days'],
    schedule: 'Day 1, then days 7 and 14',
    report: 'Clay columns, a proof link each',
    kit: ['142 agents, declared as AI', '142 inboxes', '142 phone numbers', '14 day watch'],
    events: [
      { time: 'Day 1, 09:00', text: 'Signs up and opts in to texts at 142 brands, declared as AI.' },
      { time: 'Day 1, 10:00', text: '131 welcome emails arrive within the hour.' },
      { time: 'Day 1, 11:00', text: 'Asks each site’s chat bot 1 question. 9 hand over to a person, so the step ends there.' },
      { time: 'Day 7', text: '88 brands have sent a text. 54 are still silent.' },
      { time: 'Day 14', text: 'Still silent at day 14: 54 brands. Each one gets its proof page.' },
    ],
    finding: '54 of 142 brands took a text opt in and never sent a text in 14 days.',
    fix: '54 proof links and a gap column written back to Clay. Your team writes each first line.',
    ledger: 'Example run. Each brand can open its own dated, signed proof.',
  },

  steps: [
    {
      title: 'Add your list',
      line: 'Paste it, upload a CSV, connect Clay or use the API. You bring the contacts. The agents find the gap.',
    },
    {
      title: 'An agent becomes their customer',
      line: 'It signs up, opts in to texts, reads their pages and the ads they run in public, and asks the site’s chat bot. It never contacts staff.',
    },
    {
      title: 'It waits for what follows',
      line: 'Every email, text and answer is timed from the sign up, for as long as you set.',
    },
    {
      title: 'You get the gap, with proof',
      line: 'A verdict and a proof link on every row. You write the first line, and the prospect can check every word of it.',
    },
  ],

  checks: [
    {
      group: 'Sign up and welcome',
      items: [
        { title: 'Welcome email', line: 'Whether it arrives, how long it takes, whether it lands in spam, and the offer or code in it.' },
        { title: 'What they send', line: 'Every email and text after the sign up, how often it comes, and the offers it repeats.' },
        { title: 'Sign up form', line: 'Whether it works on a phone and a desktop, and the step where it breaks.' },
        {
          title: 'Free trials',
          line: 'With no card: every onboarding email by trial day. It never replies, and closes the trial the moment a rep writes or calls.',
        },
      ],
    },
    {
      group: 'Texts',
      items: [
        { title: 'Text opt in', line: 'Whether even 1 text follows the opt in, inside the window you set.' },
      ],
    },
    {
      group: 'Their site and ads',
      items: [
        {
          title: 'The site’s chat bot',
          line: 'Whether it answers a buyer’s question, and what it says. If a person picks it up, the step ends.',
        },
        { title: 'The ads they run in public', line: 'Whether each ad lands on a live page, in stock, with the same offer.' },
        { title: 'Booking pages', line: 'Whether the page loads on a phone and shows open slots. Nothing is filled in or sent.' },
      ],
    },
  ],

  outputs: {
    heading: 'A fact about every prospect, with proof they can open.',
    items: [
      { format: 'A verdict per company', line: 'Gap or no gap, against the rule you set.' },
      { format: 'A timeline', line: 'Every step with its time, from sign up to the end of the window.' },
      { format: 'The proof', line: 'Screenshots, and the actual emails and texts.' },
      { format: 'A link anyone can open', line: 'Including the prospect itself, so the finding stands up on its own.' },
      {
        format: 'Columns back on your list',
        line: 'The gap, the date it was seen and the proof link, on the same rows in Clay, your CRM or a sheet.',
      },
      { format: 'Totals', line: 'For example: 54 of 142 brands never sent a text after the opt in.' },
    ],
  },

  settings: [
    { k: 'The gap to prove', v: 'The one your product closes' },
    { k: 'What counts', v: 'For example: no text within 14 days, no welcome email within an hour, no answer from the bot' },
    { k: 'How long', v: '7, 14 or 30 days, then again on a schedule' },
    { k: 'Afterwards', v: 'Stop, or keep checking and hear when a gap closes' },
    { k: 'Location', v: 'Phone number and browser country, to match each company' },
    { k: 'Companies', v: 'A Clay table, a CSV, a pasted list or the API, filtered to the rows worth checking' },
  ],

  forWho: [
    { audience: 'agencies', line: 'A pitch pack for every prospect, built on what their customers get. You hear when a gap closes, so you stop pitching it.' },
    { audience: 'sales', line: 'A fact about each account your reps can put in the first line.' },
    { audience: 'founders', line: 'Pitch only the companies with the gap you fix.' },
    { audience: 'marketing', line: 'Target accounts sorted by the gap your product fixes, ready for every campaign.' },
    { audience: 'developers', line: 'Call it from Clay or your own tool for every new row.' },
  ],

  table: {
    heading: 'Everything a customer can do alone. Nothing that needs a person.',
    line: 'Every agent says it’s an AI agent and links to useobsession.com/agents. At a prospect, your name stays out.',
    cols: ['At a prospect', 'Yours, or a client’s with their OK'],
    rows: [
      { label: 'Sign up, newsletters and texts', values: ['Yes', 'Yes'] },
      { label: 'Start a free trial with no card', values: ['Yes, never replies, closes if a rep writes or calls', 'Yes'] },
      { label: 'Read pages and the ads they run in public', values: ['Yes', 'Yes'] },
      { label: 'Ask the site’s chat bot', values: ['Yes, and the step ends if a person picks up', 'Yes'] },
      { label: 'Fill a basket or start checkout', values: ['Never', 'Yes, stopped before payment'] },
      { label: 'Send a form, an email or a call to staff', values: ['Never', 'Only as a declared test'] },
      { label: 'Go behind a login', values: ['Never', 'Only with one you give it'] },
    ],
  },

  faq: {
    heading: 'Every gap stands up on its own, with proof the prospect can open.',
    items: [
      {
        q: 'What is prospect intelligence?',
        a: 'Prospect intelligence is proof of what a prospect does to its own customers, found by becoming one of them. It isn’t contact data: Obsession finds the gap, and your own tools find the people.',
      },
      {
        q: 'How do I find a reason to reach out that 50 other reps don’t have?',
        a: 'Use a fact only a customer of theirs can see: Prospect intelligence signs up at every company on your list and records what it gets, so each first call opens on a dated gap with a proof link.',
      },
      {
        q: 'How do I research prospects without spending 30 minutes on each one?',
        a: 'Add the list to Prospect intelligence once: a declared Obsession agent per prospect signs up, opts in to texts and asks the site’s chat bot at every company at once, and you get back the companies with the gap you fix.',
      },
      {
        q: 'What’s it worth?',
        a: 'Prospect intelligence gives each rep up to 5 hours a week back, on 10 first calls at 30 minutes of research each.',
      },
      {
        q: 'Does Prospect intelligence find contacts or email addresses?',
        a: 'No. Obsession becomes each company’s customer and proves what its customers actually get, so your first line is a fact they can check. Your list already has the names.',
      },
      {
        q: 'Does Prospect intelligence contact their staff?',
        a: 'Never. Prospect intelligence only signs up, opts in, reads their pages and asks the site’s chat bot. If a person picks up the chat, the step ends. It never sends a form, an email or a call to a person.',
      },
      {
        q: 'Will the prospect know?',
        a: 'Every Obsession agent says it’s an AI agent and links to useobsession.com/agents, a page explaining Obsession. Your name stays out.',
      },
      {
        q: 'How do I know a gap is real?',
        a: 'Prospect intelligence counts a gap only once the sign up is confirmed, the spam folder is checked and the full window has been watched. Anything less is No verdict, never a gap.',
      },
      {
        q: 'Does Prospect intelligence go through their basket or checkout?',
        a: 'Not at a prospect: baskets and checkouts need the company’s OK, so they belong to Obsession’s Mystery shopper, on your own store or a client’s.',
      },
      {
        q: 'Do you write the email?',
        a: 'No. Prospect intelligence gives you the fact and the proof link. Your team writes the first line and sends it from its own tools.',
      },
      {
        q: 'What happens when the window ends?',
        a: 'Prospect intelligence stops, or checks again on a schedule. If a gap closes you hear about it, so you know to stop writing.',
      },
      { q: 'How many prospects can Prospect intelligence check?', a: 'Prospect intelligence checks every company on your list, at once.' },
    ],
  },

  final: {
    heading: 'Write only to the prospects with the gap you fix.',
    sub: 'Join the waitlist. Prospect intelligence comes ready to run on the list you already have.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-prospect-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your first run and tell you about Obsession.',
      roles: {
        question: 'What gap does your product close?',
        options: ['Welcome emails', 'Texts', 'Chat and bots', 'Ads and landing pages', 'Bookings', 'Something else'],
        multi: true,
      },
      interest: 'prospect',
    },
  },
}

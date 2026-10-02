import type { Recipe } from '../types'

/* Competitor tracking (/recipes/competitor-tracking). James's strongest page with Mystery shopper, written from the
   terms buyers use. Kept: his headline, the sign up record dated from a known sign up, the welcome series mapped and
   timed, his check groups and deliverables, his week 1 summary and his FAQ ("Can you show their past emails?").
   Fixed to the red lines: 1 question to the site's chat bot, never staff, and the step ends if a person picks it up;
   no organic posts and no named ad platforms ("the ads they run in public"); rivals see a declared AI agent that
   links to useobsession.com/agents and never names the client; rival trials are no-card only and close the moment a
   rep writes or calls. The run is an example and says so. Its rival is a skincare store, so it never collides with
   the SaaS Rival A, B and C on the `rivals` screen in the hero. */

export const recipe: Recipe = {
  id: 'competitor',
  slug: 'competitor-tracking',
  name: 'Competitor tracking',
  group: 'Watch rivals',
  line: 'Signs up to every rival and logs each email, text, offer, price change and public ad.',
  gets: 'A timeline per rival, and a note of what changed, as often as you choose.',
  kit: [
    'A declared AI agent per rival',
    'Its own inbox and phone number',
    'An isolated browser for each rival',
    'Page and price checks on your schedule',
    'The ads they run in public, followed to each page',
    'Every step signed and dated',
  ],

  meta: {
    path: '/recipes/competitor-tracking',
    title: 'Competitor tracking: every rival email and offer · Obsession',
    description:
      'A declared AI agent signs up to each rival you name and logs every email, text, offer, price change and public ad on 1 timeline, continuously.',
    answer:
      'Competitor tracking is an Obsession recipe. A declared AI agent with its own inbox, phone number and browser signs up to each rival you name and logs every email, text, offer, price change and public ad on 1 timeline, continuously, with every entry dated and signed.',
    ogImage: '/og/competitor-tracking.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Competitor tracking', path: '/recipes/competitor-tracking' },
    ],
  },

  hero: {
    headline: 'Every email, text, ad and offer your rivals send, on 1 timeline.',
    sub: 'A declared AI agent joins each rival’s emails and texts the day you add it, with its own inbox and number. It logs every offer, price change and public ad, continuously.',
    screen: 'rivals',
    capture: {
      kind: 'waitlist',
      source: 'recipe-competitor-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: { question: 'Whose rivals should we track first?', options: ['Ours', 'A client’s', 'Both'] },
      interest: 'competitor',
    },
  },

  run: {
    tab: 'Example: a skincare rival, week 1',
    recipe: 'competitor',
    task: 'Sign up to this rival’s emails and texts. Log every offer, price change and public ad, and send me what changed each Monday.',
    targets: 'skincare-rival.example, a skincare store',
    journey: ['Sign up from the pop up', 'Opt in to texts', 'Ask the bot, never staff', 'Check pages, prices and ads daily'],
    schedule: 'Daily checks, a note every Monday',
    report: 'A Monday note by email, Slack when anything changes',
    kit: ['Agent ID, declared as AI', 'Own inbox', 'Own phone number', 'Browser set to the UK'],
    events: [
      { time: 'Mon 07:02', text: 'Signs up from the pop up as a declared AI agent, with its own inbox and number.' },
      { time: 'Mon 07:04', text: 'Welcome email: 15% off your first order.' },
      { time: 'Mon 07:20', text: 'Asks the site’s chat bot how long delivery takes. Answered in 6 seconds.' },
      { time: 'Tue 19:30', text: 'First text: a free gift on orders over £40.' },
      { time: 'Thu 08:15', text: 'Free delivery now starts at £35, down from £50.' },
      { time: 'Fri 11:40', text: '14 new public ads, 9 of them leading with the free gift.' },
    ],
    finding: 'The rival is leading with a free gift over £40, by text and in 9 of its 14 new ads, and cut free delivery to £35.',
    fix: 'A matching offer drafted for your next email, with the 9 ads attached. It goes out only after your OK.',
    ledger: 'Example run. Week 1: 5 emails, 2 texts, 1 price change, 14 new ads, each kept raw, dated and signed.',
  },

  steps: [
    {
      title: 'Add your rivals',
      line: 'Paste their web addresses, upload a CSV, connect Clay or use the API. Any company you name, with no directory to check first.',
    },
    {
      title: 'An agent signs up to each one',
      line: 'It joins the emails and texts from the pop up, as any customer can. It says it’s an AI agent and keeps your name out.',
    },
    {
      title: 'It logs everything that follows',
      line: 'Every email, text and offer, dated from the minute it signed up, plus daily checks of pages, prices and the ads they run in public.',
    },
    {
      title: 'You get what changed',
      line: 'A note on your schedule, an alert the moment something moves, and the proof behind every line.',
    },
  ],

  checks: [
    {
      group: 'Inbox and phone',
      items: [
        {
          title: 'Every email',
          line: 'The time it arrived and the day since sign up, the sender, subject and preheader, the offer or code, a full screenshot, and the raw email with its headers.',
        },
        {
          title: 'Sign up and welcome',
          line: 'The pop up and its offer, whether double opt in is needed, the time to the first email, and how many welcome steps follow, with the gap between each.',
        },
        {
          title: 'Texts',
          line: 'How you opt in, the confirmation text, every message with its sender and time, short links followed to their page, and what happens after STOP.',
        },
        {
          title: 'The site’s chat bot',
          line: '1 labelled question, the answer and how long it took. If a person picks it up, the step ends.',
        },
      ],
    },
    {
      group: 'Ads',
      items: [
        {
          title: 'The ads they run in public',
          line: 'The creative, the copy, the day it started and the page it lands on, with what that page showed when we checked it.',
        },
        { title: 'New and stopped ads', line: 'Which ads started and stopped since the last note, and the offers they lead with.' },
      ],
    },
    {
      group: 'Site, offers and prices',
      items: [
        { title: 'Pages', line: 'Screenshots of the pages you name, on a schedule, with what changed between them.' },
        {
          title: 'Prices and offers',
          line: 'Price changes on the products or plans you pick, sitewide banners, delivery thresholds and pop up offers.',
        },
        {
          title: 'Trial offers',
          line: 'On software rivals, the offer at the end of a free trial that needs no card. The agent never replies, and closes the trial the moment a rep writes or calls.',
        },
      ],
    },
  ],

  outputs: {
    heading: 'What changed this week, with the proof behind every line.',
    items: [
      { format: 'A timeline per rival', line: 'Every email, text, ad and change in date order, each with its proof. As a page, a PDF or JSON.' },
      { format: 'The welcome series, mapped', line: 'Each step, the delay before it and the offer it carries, counted from the sign up.' },
      {
        format: 'A regular note',
        line: 'What changed since the last one, in counts and a few lines, daily, weekly or monthly. Quiet periods stay quiet.',
      },
      {
        format: 'Alerts',
        line: 'A batch of new ads, a price drop, a new code, a changed welcome offer or a flow that stops, by email, Slack or webhook.',
      },
      { format: 'Side by side', line: 'How often each rival emails and texts, and which offers it repeats, counted from what arrived.' },
      { format: 'Exports', line: 'Every record as JSON or CSV, or straight into Clay, your CRM, a sheet or your own tools.' },
    ],
  },

  settings: [
    { k: 'Rivals', v: 'Any companies you name, by web address' },
    { k: 'Journeys', v: 'Email sign up, text opt in, a free trial with no card, 1 question to the site’s chat bot' },
    { k: 'Channels', v: 'Email, texts, public ads, pages and prices' },
    { k: 'How often', v: 'Daily, weekly or monthly, set for each channel' },
    { k: 'Alerts', v: 'The changes you care about, by email, Slack or webhook' },
    { k: 'Country', v: 'Phone number and browser set to the market you sell in' },
    { k: 'How long', v: 'Continuously, until you stop it' },
  ],

  forWho: [
    { audience: 'marketing', line: 'See what rivals send before a sale, and plan your own calendar around it.' },
    {
      audience: 'agencies',
      line: 'A rival report for every client, built on what rivals actually sent. A research service you sell.',
    },
    { audience: 'sales', line: 'Battlecards built from what a rival’s customers really receive.' },
    { audience: 'founders', line: 'Answer every rival move the week it lands.' },
    { audience: 'developers', line: 'Feed rivals’ messages and prices into your own product through the API.' },
  ],

  table: {
    heading: 'A new customer of this rival gets 5 emails and 2 texts in its first 7 days.',
    line: 'Example. Every message is placed by the time since the agent signed up, so you see the sequence and its rhythm, not a pile of emails.',
    cols: ['Channel', 'What arrived'],
    rows: [
      { label: '0 min', values: ['Pop up', 'Signed up, declared as AI'] },
      { label: '+2 min', values: ['Email', 'Welcome, 15% off'] },
      { label: '+1 day', values: ['Text', 'A free gift over £40'] },
      { label: '+2 days', values: ['Email', 'Bestsellers, no code'] },
      { label: '+3 days', values: ['Email', 'Free delivery now from £35'] },
      { label: '+4 days', values: ['Email', 'Reminder: the code ends tonight'] },
      { label: '+5 days', values: ['Text', 'The free gift, last day'] },
      { label: '+7 days', values: ['Email', 'Founder story, no offer'] },
    ],
  },

  faq: {
    heading: 'Every agent says it’s AI. Your name stays out.',
    items: [
      {
        q: 'How is this different from a monitoring tool?',
        a: 'Most tools read what a company publishes. Obsession goes through it as a customer: it signs up, gets the emails and texts, and sees the offers a new customer sees.',
      },
      {
        q: 'Can you show their past emails?',
        a: 'The record starts the day the agent signs up, so every message is dated from a known sign up. That’s what an archive can’t give you: any company you name, the same day.',
      },
      {
        q: 'Will the rival know?',
        a: 'Every agent says it’s an AI agent and links to useobsession.com/agents, a page explaining Obsession. Your name stays out. If that changes what a rival sends, the record shows it.',
      },
      {
        q: 'Does it talk to their staff?',
        a: 'Never. It asks the site’s chat bot 1 question. If a person picks it up, the step ends.',
      },
      {
        q: 'Do you trigger their basket emails?',
        a: 'Not at rivals. Baskets and checkouts need the owner’s OK, so they belong to Mystery shopper, on your own store or a client’s.',
      },
      {
        q: 'How many rivals can it track?',
        a: 'As many as you add. Each gets its own agent, inbox and number, and you can add one at any time.',
      },
      {
        q: 'How fast is it?',
        a: 'Pages, prices and ads in minutes. The first email the same day. The welcome series over the days that follow, then everything new, continuously.',
      },
      { q: 'What if they block it or show a CAPTCHA?', a: 'It stops, and the record says it couldn’t test that step.' },
    ],
  },

  final: {
    heading: 'See your rivals’ next offer the day it lands.',
    sub: 'Join the waitlist. Competitor tracking comes ready to run on the rivals you name.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-competitor-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: { question: 'Whose rivals should we track first?', options: ['Ours', 'A client’s', 'Both'] },
      interest: 'competitor',
    },
  },
}

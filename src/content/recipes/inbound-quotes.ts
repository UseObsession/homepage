import type { Capture, Recipe } from '../types'

/* Inbound quotes (/recipes/inbound-quotes). Win customers. Screen: quotes (a price book of 412 lines; 5 requests, a
   median of 3 minutes; Logistics firm's procurement agent at 10:42 asks for 40 pallet bays, 120 beam pairs and
   installation at 3 sites: $7,440 + $4,560 + $3,600 = $15,600 at list, less 5% for volume (the cap is 10%), $14,820,
   quoted in 2 min 40 s, follow up Thursday; Dental group's form asks for something off the price book and needs you;
   Pet food quoted in 3 minutes, Coffee roaster in 4 and said yes, Outdoor gear in 2 and said no). The run tells that
   story (3 Oct); its counter holds at 5% and trades 8% for payment on order: $15,600 x 0.92 = $14,352.
   Base: _research/recipes/ACTIVE-RECIPES.md, recipe 2 (research name retired; the plain name is Seun's, 3 Oct).
   Lead leaks tests your channels and finds where leads leak; Inbound quotes is the answer to every real request.
   Red lines held: it answers only people and agents who got in touch, existing customers and tenders the reader was
   invited to, never cold outreach; it says it's an AI agent for the reader's company in the first line of every new
   conversation and asks a buyer's agent whom it acts for; it quotes only from the price book and approved answers (no
   invented features, discounts, rival bids or deadlines); floors sit outside the AI and anything below one comes to a
   person; custom terms, security questions, the buyer's own contract and a tender's terms wait for a person; quotes
   bind only when both sides sign, and a person signs; callbacks only to a number the buyer gave for that, with the AI
   and recording said first; instructions hidden in a buyer's message are never followed; it stops on a no or when
   asked. No real company names: the buyer is a logistics firm and a clinic owner.
   Up-to-50 rule: the 1 modelled figure (up to 3.1 times as many requests answered) carries its model in the same line:
   when 6,346 real demo and contact forms were filled in, 68 in 100 got no reply; answering all 100 is 100 / 32 = 3.1.
   The run is an example and says so: $14,352 is over the $10,000 line where a rep is booked. */

const roles: Capture['roles'] = {
  question: 'Where do most price requests reach you?',
  options: ['Our web form', 'Email', 'Phone', 'Buyers’ AI agents', 'All of these'],
}

const micro = 'We keep your email to set up your first run and tell you about Obsession.'

export const recipe: Recipe = {
  id: 'quotes',
  slug: 'inbound-quotes',
  name: 'Inbound quotes',
  group: 'Win customers',
  line: 'Quotes every buyer who asks, person or AI agent, from your price book in minutes, and follows up until it’s a yes or a no.',
  gets: 'A correct quote for every request in minutes, and a follow up until it’s a yes or a no.',
  kit: [
    'An agent ID, declared as AI for your company',
    'Its own sales inbox and phone number',
    'Your web forms, answered as they land',
    'A front door for buyers’ AI agents',
    'Your price book and discount floors',
    'Every quote signed, dated and in your CRM',
  ],

  meta: {
    path: '/recipes/inbound-quotes',
    title: 'Inbound quotes: a correct quote for every buyer · Obsession',
    description:
      'A declared AI agent answers every request, from a person or a buyer’s AI agent, with a correct quote from your price book in minutes, then follows up.',
    answer:
      'Inbound quotes answers every buyer with a correct quote from your price book in minutes: a declared AI agent replies to every request, from a person or their AI agent, by email, phone or form, and follows up until it’s a yes or a no.',
    ogImage: '/og/inbound-quotes.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Inbound quotes', path: '/recipes/inbound-quotes' },
    ],
  },

  hero: {
    headline: 'AI agents that quote every buyer in minutes, from your price book.',
    sub: 'Inbound quotes answers every buyer with a correct quote from your price book in minutes: a declared AI agent replies to every request, from a person or their AI agent, by email, phone or form, and follows up until it’s a yes or a no.',
    screen: 'quotes',
    capture: {
      kind: 'waitlist',
      source: 'recipe-quotes-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'quotes',
    },
  },

  run: {
    tab: 'Example: this week’s price requests',
    recipe: 'quotes',
    task: 'Answer every price request on our form, inbox, phone and front door for buyers’ agents with a quote from our price book. Hold the floor, follow up until it’s a yes or a no, and book a rep over $10,000.',
    targets: 'Your demo form, sales inbox, sales line and front door for buyers’ agents',
    journey: ['Say it’s an AI agent for you', 'Quote from your price book', 'Counter inside your floor', 'Follow up to a yes or a no'],
    schedule: 'Every request, day and night',
    report: 'Every quote in your CRM, a Slack note on each deal',
    kit: ['Agent ID, declared as AI for your company', 'Own inbox and phone number', 'Your price book and floors', 'Your CRM, connected by you'],
    events: [
      { time: 'Tue 09:31', text: 'Dental group asks on your web form for something that isn’t in your price book. It waits for you, with a reply drafted.' },
      { time: 'Tue 10:42', text: 'A procurement agent for a logistics firm, with a signed ID, asks for 40 pallet bays, 120 beam pairs and installation at 3 sites.' },
      { time: 'Tue 10:45', text: 'Quoted from your price book in 2 minutes 40 seconds: $15,600 at list, less 5% for volume, $14,820. Valid 14 days.' },
      { time: 'Tue 11:20', text: 'The buyer’s agent asks for 15% off. Held at 5%, with 8% offered for payment on order, inside your floor.' },
      { time: 'Thu 10:00', text: 'The follow up goes. The logistics firm takes 8% for payment on order, $14,352, and a 20 minute call is booked with your rep.' },
    ],
    finding: 'Price requests quoted in a median of 3 minutes. The logistics firm’s went in 2 minutes 40 seconds, and the 1 request off your price book waits for you.',
    fix: 'The order form for $14,352, drafted. It binds only when both sides sign.',
    ledger: 'Example run. Every quote, counter and reply dated, signed and in your CRM.',
  },

  steps: [
    {
      title: 'Give it your price book',
      line: 'Your prices, approved answers and discount floors, set once. It can’t quote below a floor; anything under it comes to you.',
    },
    {
      title: 'It answers on every channel',
      line: 'Your forms, its own inbox and number, and a front door for buyers’ AI agents. The first line says it’s an AI agent for your company.',
    },
    {
      title: 'A correct quote in minutes',
      line: 'From your price book only, valid for 14 days and binding only when both sides sign. A poor fit gets a straight answer, not silence.',
    },
    {
      title: 'It follows up to a yes or a no',
      line: 'It answers every counter the same day, inside your floor, follows up on days 2, 5 and 10, stops on a no, and books your rep when a deal is big enough.',
    },
  ],

  checks: [
    {
      group: 'Every request',
      items: [
        { title: 'Web forms', line: 'Demo, contact and quote forms, answered with a price, not just a booking link.' },
        {
          title: 'Email and phone',
          line: 'Its own sales inbox and number. On a call it says it’s AI and that the call is recorded, and it calls back only on a number the buyer gave for that.',
        },
        { title: 'Buyers’ AI agents', line: 'A front door that shows buying agents your list prices and asks each one whom it acts for.' },
        { title: 'Your customers', line: 'Requests for more seats or another product, quoted on their current terms.' },
      ],
    },
    {
      group: 'Every quote',
      items: [
        { title: 'From your price book', line: 'Your prices and approved answers only. No invented features, discounts or deadlines.' },
        {
          title: 'Inside your floor',
          line: 'It trades before it discounts, like payment on order for a better price, and never goes below the floor you set.',
        },
        { title: 'For people and agents', line: 'A clear email for the buyer, and a version their AI agent can read.' },
        { title: 'In your CRM', line: 'Every quote, counter and outcome on the deal, signed.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Below your floor', line: 'Any price under it comes to you, with the thread so far and a reply drafted.' },
        { title: 'Custom terms', line: 'Security questions, the buyer’s own contract and a tender’s terms go to a person.' },
        { title: 'Signing', line: 'A quote binds only when both sides sign. A person signs for you.' },
        { title: 'Cold outreach', line: 'Never. It answers only people and agents who got in touch, your customers and tenders you were invited to.' },
        { title: 'Hidden instructions', line: 'Anything written into a buyer’s message to steer it is read as text, never followed.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every price request answered, and every deal taken to a yes or a no.',
    items: [
      { format: 'The quote', line: 'An email the buyer can read and a version their AI agent can read, valid for 14 days.' },
      { format: 'The thread', line: 'Every counter and reply with its time, from the first request to the yes or the no.' },
      { format: 'Booked calls', line: 'A 20 minute call with the right rep once a deal passes the size you set, confirmed the day before.' },
      { format: 'Your CRM', line: 'Every quote version, counter and outcome on the deal.' },
      { format: 'A daily note', line: 'Requests in, quotes sent, time to quote, deals won and lost, by email or Slack.' },
      { format: 'What needs you', line: 'Anything below your floor or outside your price book, with a reply drafted.' },
    ],
  },

  settings: [
    { k: 'Channels', v: 'Your web forms, its own inbox and number, and a front door for buyers’ AI agents' },
    { k: 'Price book', v: 'Your prices, plans and approved answers' },
    { k: 'Floors', v: 'The lowest price you’ll take, and what you’ll give for what, like 5% off for volume or 8% for payment on order' },
    { k: 'Follow up', v: 'Days 2, 5 and 10 by default, on the channel the buyer used' },
    { k: 'Your rep', v: 'Booked above the deal size you set' },
    { k: 'Hours', v: 'Day and night, or your working hours only' },
    { k: 'Your CRM', v: 'Connected by you, to log every quote' },
  ],

  forWho: [
    { audience: 'founders', line: 'Every price request answered in minutes while you build, with the deal in your CRM.' },
    { audience: 'sales', line: 'Your reps get booked calls with buyers who’ve already seen the price.' },
    { audience: 'agencies', line: 'Your own new business quoted the same hour, from your rate card.' },
    { audience: 'marketing', line: 'Every lead you paid for gets a price in minutes, not a callback next week.' },
    { audience: 'developers', line: 'Your price book behind a signed endpoint that buyers’ AI agents can ask.' },
  ],

  table: {
    heading: 'Up to 3.1 times as many buyers get an answer.',
    line: 'When 6,346 real demo and contact forms were filled in, 68 in 100 got no reply. Inbound quotes answers all 100.',
    cols: ['Typical today', 'With Inbound quotes'],
    rows: [
      { label: 'Requests answered', values: ['32 in 100', 'All 100'] },
      { label: 'Time to a price', values: ['Days, after a call', 'Minutes, day or night'] },
      { label: 'A buyer’s AI agent', values: ['No one to ask', 'A front door with your list prices'] },
      { label: 'A counter at 03:20', values: ['Waits for Monday', 'Answered inside your floor'] },
      { label: 'Follow ups', values: ['Until someone forgets', 'Days 2, 5 and 10, until a yes or a no'] },
      { label: 'The record', values: ['Scattered threads', 'Every quote signed, in your CRM'] },
    ],
  },

  faq: {
    heading: 'It says it’s AI, quotes only what you’ve approved, and never signs.',
    items: [
      {
        q: 'What happens when buying requests arrive on several channels at once?',
        a: 'Obsession’s Inbound quotes answers each one, by email, phone, web form or agent endpoint, with a correct quote from your price book in minutes, and anything outside your price book waits for a person.',
      },
      {
        q: 'Does Inbound quotes pretend to be a person?',
        a: 'No. The Inbound quotes agent’s first line says it’s an AI agent for your company, in every new conversation, by email, phone or form.',
      },
      {
        q: 'Can Inbound quotes give discounts?',
        a: 'Inbound quotes gives only the discounts you’ve approved, like 5% off for volume. It can’t go below your floor; anything under it comes to you.',
      },
      {
        q: 'Can a buyer talk Inbound quotes into a lower price?',
        a: 'No. Inbound quotes keeps your floors outside the AI, so no message can move them, and instructions hidden in a buyer’s message are never followed.',
      },
      {
        q: 'Is a quote binding?',
        a: 'Only when both sides sign: each quote Inbound quotes sends is valid for 14 days, and a person signs for you.',
      },
      {
        q: 'What’s a buyer’s AI agent?',
        a: 'A buyer’s AI agent asks for prices and negotiates for a buyer, and Inbound quotes gives every one a front door with your list prices, asks whom it acts for, and answers in minutes. More buyers now send one.',
      },
      {
        q: 'Why does answering first matter?',
        a: 'Because AI agents that buy lean hard towards the first offer they get, and Inbound quotes answers in minutes: in simulated markets, answering first was worth 10 to 30 times more than answering best.',
      },
      {
        q: 'What’s it worth?',
        a: 'Up to 3.1 times as many buying requests answered with Inbound quotes: when 6,346 real demo and contact forms were filled in, 68 in 100 got no reply, and it answers all 100.',
      },
      {
        q: 'Will Inbound quotes contact people who didn’t ask?',
        a: 'Never. Inbound quotes answers only people and agents who got in touch, your customers and tenders you were invited to.',
      },
      {
        q: 'What if a buyer wants a person?',
        a: 'Inbound quotes books a call with the right rep, or hands over the thread straight away.',
      },
      {
        q: 'How is Inbound quotes different from Lead leaks?',
        a: 'Inbound quotes answers every real request with a correct price in minutes, then follows up to a yes or a no. Lead leaks tests your form, chat and phone to find where leads leak.',
      },
    ],
  },

  final: {
    heading: 'Be the first answer every buyer gets.',
    sub: 'Join the waitlist. Inbound quotes comes ready with its own inbox and number, set to your price book.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-quotes-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'quotes',
    },
  },
}

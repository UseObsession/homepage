import type { Capture, Recipe } from '../types'

/* Inbound quotes (/recipes/inbound-quotes). Win customers. Screen: quotes (Sat 03:12, a procurement agent for a
   logistics firm, signed, asks for 40 seats and a 2 year price; 03:14 the quote, 12% off for 2 years as the rules
   allow; 03:20 it asks for 18%, held at 12% with quarterly billing offered; Mon 09:02 a call booked with the rep;
   answered in 2 minutes).
   Base: _research/recipes/ACTIVE-RECIPES.md, recipe 2 (research name retired; the plain name is Seun's, 3 Oct).
   Lead leaks tests your channels and finds where leads drop; Inbound quotes is the answer to every real request.
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
   The run is an example and says so: 40 seats at $30 a month is $14,400 a year at list, $12,672 at 12% off, over the
   $10,000 line where a rep is booked. */

const roles: Capture['roles'] = {
  question: 'Where do most price requests reach you?',
  options: ['Our web form', 'Email', 'Phone', 'Buyers’ AI agents', 'All of these'],
}

const micro = 'We keep your email to tell you about Obsession, and nothing else.'

export const recipe: Recipe = {
  id: 'quotes',
  slug: 'inbound-quotes',
  name: 'Inbound quotes',
  group: 'Win customers',
  line: 'Quotes every buyer who asks, person or AI agent, from your price book in minutes, and follows up until it’s a yes or a no.',
  gets: 'A correct quote for every request in minutes, and a follow up until it’s a yes or a no.',
  kit: [
    'An agent ID that names your company',
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
      'Inbound quotes is an Obsession recipe. A declared AI agent with its own inbox and phone number answers every inbound buying request, from a person or a buyer’s AI agent, by email, phone, web form or agent endpoint, with a correct quote from your price book in minutes. It follows up until it’s a yes or a no, and anything outside your price book waits for a person.',
    ogImage: '/og/inbound-quotes.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Inbound quotes', path: '/recipes/inbound-quotes' },
    ],
  },

  hero: {
    headline: 'AI agents that quote every buyer in minutes, from your price book.',
    sub: 'A declared AI agent answers every request, by email, phone or form, or from a buyer’s own AI agent, with the right price. It follows up until it’s a yes or a no, and anything outside your price book waits for you.',
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
    tab: 'Example: a weekend of price requests',
    recipe: 'quotes',
    task: 'Answer every price request on our form, inbox, phone and agent front door with a quote from our price book. Hold the floor, follow up until it’s a yes or a no, and book a rep over $10,000.',
    targets: 'Your demo form, sales inbox, sales line and front door for buyers’ agents',
    journey: ['Say it’s an AI agent for you', 'Quote from your price book', 'Counter inside your floor', 'Follow up to a yes or a no'],
    schedule: 'Every request, day and night',
    report: 'Every quote in your CRM, a Slack note on each deal',
    kit: ['Agent ID, names your company', 'Own inbox and phone number', 'Your price book and floors', 'Your CRM, connected by you'],
    events: [
      { time: 'Sat 03:12', text: 'A procurement agent for a logistics firm, with a signed ID, asks for 40 seats and a 2 year price.' },
      { time: 'Sat 03:14', text: 'Quote sent: 40 seats at $30 a month, 12% off for 2 years, as your rules allow.' },
      { time: 'Sat 03:20', text: 'It asks for 18%. Held at 12%, with quarterly billing offered instead.' },
      { time: 'Sat 10:05', text: 'A clinic owner asks for a price for 5 seats on your demo form. Quoted in 3 minutes.' },
      { time: 'Mon 09:02', text: 'The logistics firm takes 12%. A 20 minute call booked with your rep for Thursday.' },
    ],
    finding: '2 requests over the weekend, both quoted within 3 minutes. The 40 seat deal held at 12% and is with your rep.',
    fix: 'The order form for 40 seats at 12% off, drafted. It binds only when both sides sign.',
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
      line: 'From your price book only, valid for 14 days and binding only when both sides sign. A poor fit gets 2 honest lines, not silence.',
    },
    {
      title: 'It follows up to a yes or a no',
      line: 'It answers every counter the same day, inside your floor, follows up on days 2, 5 and 10, and books your rep when a deal is big enough.',
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
        { title: 'Buyers’ AI agents', line: 'A signed front door that shows your list prices to buying agents, and asks each one whom it acts for.' },
        { title: 'Your customers', line: 'Requests for more seats or another product, quoted on their current terms.' },
      ],
    },
    {
      group: 'Every quote',
      items: [
        { title: 'From your price book', line: 'Your prices and approved answers only. No invented features, discounts or deadlines.' },
        {
          title: 'Inside your floor',
          line: 'It trades before it discounts, like a longer term for a better price, and never goes below the floor you set.',
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
      { format: 'Booked calls', line: 'A 20 minute call with the right rep once a deal passes your line, confirmed the day before.' },
      { format: 'Your CRM', line: 'Every quote version, counter and outcome on the deal.' },
      { format: 'A daily note', line: 'Requests in, quotes sent, time to quote, deals won and lost, by email or Slack.' },
      { format: 'What needs you', line: 'Anything below your floor or outside your price book, with a reply drafted.' },
    ],
  },

  settings: [
    { k: 'Channels', v: 'Your web forms, its own inbox and number, and a front door for buyers’ AI agents' },
    { k: 'Price book', v: 'Your prices, plans and approved answers' },
    { k: 'Floors', v: 'The lowest price per plan, and what you’ll give for what, like 12% off for 2 years' },
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
      { label: 'A buyer’s AI agent', values: ['No one to ask', 'A signed front door with your list prices'] },
      { label: 'A counter at 03:20', values: ['Waits for Monday', 'Answered inside your floor'] },
      { label: 'Follow ups', values: ['Until someone forgets', 'Days 2, 5 and 10, until a yes or a no'] },
      { label: 'The record', values: ['Scattered threads', 'Every quote signed, in your CRM'] },
    ],
  },

  faq: {
    heading: 'It says it’s AI, quotes only what you’ve approved, and never signs.',
    items: [
      {
        q: 'Does it pretend to be us?',
        a: 'No. Its first line says it’s an AI agent for your company, in every new conversation, by email, phone or form.',
      },
      {
        q: 'Can it give discounts?',
        a: 'Only the ones you’ve approved, like 12% off for a 2 year term. It can’t go below your floor; anything under it comes to you.',
      },
      {
        q: 'Can a buyer talk it into a lower price?',
        a: 'No. Your floors sit outside the AI, so no message can move them, and instructions hidden in a buyer’s message are never followed.',
      },
      {
        q: 'Is a quote binding?',
        a: 'Each quote is valid for 14 days and binds only when both sides sign. A person signs for you.',
      },
      {
        q: 'What’s a buyer’s AI agent?',
        a: 'More buyers now send AI agents to ask for prices and negotiate. Inbound quotes gives them a signed front door with your list prices, asks whom each one acts for, and answers in minutes.',
      },
      {
        q: 'Why does speed matter so much?',
        a: 'Buyers often go with the first good answer, and their AI agents more so: in simulated markets, answering first counted 10 to 30 times more than answering best.',
      },
      {
        q: 'What’s it worth?',
        a: 'Up to 3.1 times as many buying requests answered: when 6,346 real demo and contact forms were filled in, 68 in 100 got no reply, and Inbound quotes answers all 100.',
      },
      {
        q: 'Will it contact people who didn’t ask?',
        a: 'Never. It answers only people and agents who got in touch, your customers and tenders you were invited to.',
      },
      {
        q: 'What if a buyer wants a person?',
        a: 'It books a call with the right rep, or hands over the thread straight away.',
      },
      {
        q: 'How is it different from Lead leaks?',
        a: 'Lead leaks tests your form, chat and phone to find where leads drop. Inbound quotes answers every real request with a correct price in minutes, then follows up to a yes or a no.',
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

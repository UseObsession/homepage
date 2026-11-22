import type { Recipe } from '../types'

/* Travel booking agent (/blueprints/travel-booking-agent). Buy, book and order. Screen: travelbook, drawn for Brackwell,
   an invented consultancy: on Monday at 09:12 Tom asks in #travel for London to Edinburgh, Tue 1 to Thu 3 Dec. Inside
   the policy (economy up to £250 return, hotels up to £180 a night) the agent sends 2 flights and a hotel, leaves out a
   £312 fare, books Tom's pick with the company card (flights £148, 2 nights at £164: £476) by 09:27, and logs both
   confirmations; on Wednesday at 16:02 the airline moves the outbound from 07:10 to 07:40 and Tom hears in Slack at
   16:03. Fernway Air and Hotel Wrenfield are invented. Agentic commerce plan (23 Nov 2026,
   _research/seo/agentic-commerce-23nov/PLAN.md §3). Owns "ai agent booking flights", with "book flights with ai agent"
   and "business travel ai agent" (Google suggestions, 23 Nov); "ai travel booking agent" and "ai agent booking hotel"
   stay with the builder guide (article 6), which this page should link once it ships. Rules kept: it pays only with
   the company card the customer gives it and stops before payment without one; a bank check waits for the cardholder;
   traveller details come only from the company's travel profiles and it never invents one (James to confirm, PLAN §5
   decision 3); it stops at any identity check; a CAPTCHA or bot block stops the run and is reported; it says it's an
   AI to a person. No competitor or competitor's customer is named. */

export const recipe: Recipe = {
  id: 'travel',
  slug: 'travel-booking-agent',
  name: 'Travel booking agent',
  group: 'Buy, book and order',
  line: 'Turns a trip request in Slack into flights and a hotel inside your policy, booked with the company card.',
  gets: 'Every trip booked inside policy, with each confirmation, receipt and schedule change kept on the trip.',
  kit: [
    'A persona for your travel desk, with its own inbox and number',
    'A browser kept signed in to the airline, hotel and booking sites you use',
    'Your travel policy: cabin, price caps by city and nightly hotel caps',
    'Traveller details from your company’s travel profiles',
    'The company card you give it, for trips inside policy',
    'Every confirmation, receipt and change, dated on the trip',
  ],
  build: {
    line: 'Start it from Slack or your own app, apply your policy and approvals in a handler, and get every fare, booking and confirmation as an event.',
    code: `await obsession.blueprints.run('travel-booking-agent', {
  requests: { slack: '#travel' },
  policy: { flightMaxReturn: 250, hotelMaxNight: 180 },
})
obsession.on('email.received', async (e) => {
  if (e.data.change) await tellTraveller(e.data.trip, e.data.change)
})`,
    events: [
      { kind: 'message.received', text: 'A trip request in Slack, and the traveller’s pick in the same thread.' },
      { kind: 'page.visited', text: 'Each fare and room the browser checks, kept with its screenshot and price.' },
      { kind: 'email.received', text: 'Every confirmation, e-ticket, receipt and schedule change, in the persona’s own inbox.' },
      { kind: 'blueprint.result', text: 'The trip: booked, sent for approval or handed to a person, with its total against policy.' },
    ],
  },

  meta: {
    path: '/blueprints/travel-booking-agent',
    title: 'Book flights and hotels with an AI agent, inside your policy',
    description:
      'An AI agent books flights and hotels inside your travel policy with the company card, and keeps every confirmation, receipt and change in one place.',
    answer:
      'Travel booking agent takes trip requests from Slack and finds flights and hotels inside your travel policy. It books the traveller’s pick with the company card you give it and keeps every confirmation and change on the trip.',
    ogImage: '/og/travel-booking-agent.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Travel booking agent', path: '/blueprints/travel-booking-agent' },
    ],
  },

  hero: {
    headline: 'Book flights and hotels with an AI agent, inside your travel policy.',
    sub: 'Travel booking agent takes trip requests from Slack and finds flights and hotels inside your travel policy. It books the traveller’s pick with the company card you give it and keeps every confirmation and change on the trip.',
    screen: 'travelbook',
    capture: {
      kind: 'waitlist',
      source: 'recipe-travel-hero',
      button: 'Start free',
      interest: 'travel',
    },
  },

  buyer: 'For travel managers and the finance and operations teams that book company travel.',
  unit: 'trip booked',
  per: 'travel desk',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['1 real trip, flights and a hotel, inside your policy', 'Options sent to the traveller in Slack', 'Every confirmation kept on the trip'] },
    { name: 'Team', includes: ['Options in the traveller’s Slack thread minutes after each request', 'Approval in Slack for anything over policy', 'Schedule changes sent to the traveller as they land'] },
    { name: 'Company', includes: ['Price caps by city, cabin and trip length', 'Receipts matched to each trip for finance', 'A monthly report of cost per trip and policy compliance'] },
    { name: 'Travel agency', includes: ['A travel desk and policy for each client', 'Each client’s trips kept apart in your event log'] },
  ],

  run: {
    tab: 'Company trips, booked from Slack',
    recipe: 'travel',
    task: 'When anyone at Brackwell asks in #travel, find flights and a hotel inside the travel policy and send the options in the thread. Book the pick with the company card and keep every confirmation and change.',
    targets: 'The airline, hotel and booking sites Brackwell uses, signed in with its own logins',
    journey: ['Read the request in Slack', 'Find options inside policy', 'Book the pick with the company card', 'Keep every confirmation and change'],
    schedule: 'Whenever someone asks in #travel',
    report: 'The trip in the traveller’s Slack thread, and a monthly report for finance',
    kit: ['1 persona · Brackwell’s travel desk', '1 inbox and number for confirmations', 'A browser, kept signed in', 'Travel profiles and the company card'],
    events: [
      { time: 'Mon 09:12', text: 'Tom asks in #travel: London to Edinburgh, out Tuesday 1 December, back Thursday 3 December, near the client’s office.' },
      { time: 'Mon 09:15', text: '6 fares and rooms checked. A £312 flight is over the £250 return cap and left out. 2 flights and a hotel go to Tom in the thread.' },
      { time: 'Mon 09:21', text: 'Tom picks the 07:10 Fernway Air flight and Hotel Wrenfield.' },
      { time: 'Mon 09:24', text: 'Flights booked with the company card: £148 return, with Tom’s name and date of birth from his travel profile. The confirmation lands at 09:25.' },
      { time: 'Mon 09:27', text: 'Hotel Wrenfield booked: 2 nights at £164, 0.4 miles from the client’s office. Its confirmation lands at 09:28.' },
      { time: 'Wed 16:02', text: 'Fernway Air moves the outbound from 07:10 to 07:40. The change is logged on the trip, and Tom hears in Slack at 16:03.' },
    ],
    finding: 'Tom’s trip was booked 15 minutes after he asked: £476 for return flights and 2 nights, inside policy. Wednesday’s schedule change reached him within a minute.',
    fix: 'The £312 fare over the cap was never offered. Both confirmations, both receipts and the schedule change sit on the trip, ready for the expense report.',
    ledger: 'One of 140 trips Brackwell books this month, each with its confirmations, receipts and changes.',
  },

  steps: [
    { title: 'Give it your policy and profiles', line: 'Your travel policy, your travellers’ profiles and the company card, with the booking sites you use.' },
    { title: 'Travellers ask in Slack', line: 'Where, when and what the trip is for, in plain words, in #travel or a direct message.' },
    { title: 'It finds options and books the pick', line: 'Flights and hotels inside policy go to the traveller. The one they pick is booked with the company card.' },
    { title: 'Every confirmation lands on the trip', line: 'Confirmations, receipts and schedule changes, in Slack, a sheet or your expense tool by webhook.' },
  ],

  checks: [
    {
      group: 'Inside your policy',
      items: [
        { title: 'Cabin and fare', line: 'Economy, premium or business by trip length, refundable or not, as your policy sets.' },
        { title: 'Price caps', line: 'A cap for each route or city, for the return flight and for each hotel night.' },
        { title: 'Preferred airlines and hotels', line: 'Your preferred airlines and hotels come first, wherever their price fits the cap.' },
        { title: 'Booking ahead', line: 'How many days before travel to book, and who approves a trip at short notice.' },
        { title: 'Over policy', line: 'A fare outside policy goes to the approver you name in Slack before anything is booked.' },
      ],
    },
    {
      group: 'Booking',
      items: [
        { title: 'Traveller details', line: 'Names, dates of birth and loyalty numbers come only from your company’s travel profiles, and it never makes one up.' },
        { title: 'Holds', line: 'Where the airline or hotel offers a hold, the option is held while the traveller picks.' },
        { title: 'The company card', line: 'It pays only with the card you give it, and stops before payment without one.' },
        { title: 'Confirmations and changes', line: 'Each confirmation, e-ticket, receipt and schedule change, dated on the trip.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'Identity checks', line: 'It stops at any identity check and hands that booking to the traveller.' },
        { title: 'Bank checks', line: 'When the card’s bank asks for approval, the booking waits for the cardholder.' },
        { title: 'Bot checks', line: 'A site that shows a CAPTCHA or blocks the agent stops the run, and the trip goes to a person with the screenshot.' },
        { title: 'People', line: 'When it writes to an airline or a hotel, it says it’s an AI booking for your company.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every trip, booked and dated, where your travellers and finance team already look.',
    items: [
      { format: 'Slack', line: 'The options, the booking and every change, in the traveller’s own thread.' },
      { format: 'The trip', line: 'Flights, hotel, total and policy check, with every confirmation attached.' },
      { format: 'Receipts', line: 'Each receipt matched to its trip and its card charge, ready for expenses.' },
      { format: 'A sheet', line: 'Every trip, its route, its cost and whether it sat inside policy.' },
      { format: 'Webhook', line: 'Each booking and change into your expense tool as it lands.' },
      { format: 'A monthly report', line: 'Cost per trip, policy compliance and days booked ahead, by team.' },
    ],
  },

  settings: [
    { k: 'Requests', v: 'Slack, email or the API' },
    { k: 'Travel policy', v: 'Cabin, price caps by route and city, nightly hotel caps and days booked ahead' },
    { k: 'Travellers', v: 'Details from your company’s travel profiles only' },
    { k: 'Booking sites', v: 'The airline, hotel and booking sites you choose, with your company’s logins' },
    { k: 'Payment', v: 'The company card you give it; without one it stops before payment' },
    { k: 'Approvals', v: 'Anything over policy goes to the approver you name, in Slack' },
    { k: 'Changes', v: 'Schedule changes and cancellations sent to the traveller as they land' },
    { k: 'Where it lands', v: 'Slack, a sheet, a monthly report or a webhook' },
  ],

  table: {
    heading: 'Your travellers ask in Slack and see options in minutes. Nobody chases a confirmation.',
    cols: ['By hand', 'With Travel booking agent'],
    rows: [
      { label: 'A trip request', values: ['An email chain with the office manager', 'Options in the Slack thread in minutes'] },
      { label: 'The travel policy', values: ['Checked after the trip, on the expense report', 'Applied before anything is offered'] },
      { label: 'A fare over policy', values: ['Booked, then questioned', 'Sent to the approver first'] },
      { label: 'Confirmations', values: ['Spread across travellers’ own inboxes', 'On the trip, in one place'] },
      { label: 'Schedule changes', values: ['Found when the traveller checks in', 'Sent to the traveller as they land'] },
      { label: 'Receipts for finance', values: ['Chased at month end', 'Matched to each trip as it’s booked'] },
    ],
  },

  faq: {
    heading: 'Before it books your first trip.',
    items: [
      {
        q: 'Can an AI agent book flights and hotels for our company?',
        a: 'Yes. Travel booking agent reads a request in Slack and finds flights and hotels inside your travel policy on the sites you choose. It sends the options to the traveller, books the one they pick with the company card you give it, and keeps every confirmation and change on the trip.',
        link: { label: 'See agentic commerce infrastructure', to: '/use-cases/agentic-commerce' },
      },
      {
        q: 'Where do the traveller’s details come from?',
        a: 'Only from your company’s travel profiles: the name as it appears on the passport, the date of birth and loyalty numbers. The agent never makes up a detail, and a traveller with no profile is asked to add one first.',
      },
      {
        q: 'How does it pay?',
        a: 'With the company card you give it, and only for trips inside your policy or approved in Slack. Without a card it stops before payment and sends the booking to a person. When the card’s bank asks for approval, the booking waits for the cardholder. Obsession doesn’t issue cards or hold money.',
      },
      {
        q: 'What happens with a fare over policy?',
        a: 'It’s left out of the options. When nothing inside policy fits, the best fare goes to the approver you name in Slack with its price and the reason, and nothing over policy is booked without a yes.',
      },
      {
        q: 'What if a booking site blocks the agent?',
        a: 'A site that shows a CAPTCHA or blocks agents stops the run, and the trip goes to a person with the screenshot. The agent never gets round a bot check, and it stops at any identity check.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do our engineers build on it?',
        a: 'Start it with obsession.blueprints.run, apply your own policy or approval logic in a handler, and read each confirmation and change as email.received. The persona’s inbox, number and browser are the same pieces you can call yourself.',
        link: { label: 'See the API and MCP', to: '/developers' },
      },
      {
        q: 'How many trips can it book?',
        a: 'As many as your teams travel. That can be a team on the road most weeks or a company booking hundreds of trips a month. A travel agency can run a travel desk and policy for each client.',
      },
      {
        q: 'What should we watch once it runs?',
        a: 'Policy compliance, cost per trip and time to book, and for finance, receipts matched and days to close. The monthly report dates every trip, so you can see what it does to each.',
      },
      {
        q: 'What does Travel booking agent cost?',
        a: 'It’s billed on the pieces it uses, at list rates: browser time for each fare it checks and each booking, plus an inbox and a number for the travel desk. Flights and hotels go on your company card, never through Obsession.',
        link: { label: 'See browsers for AI agents', to: '/browser' },
      },
    ],
  },

  final: {
    heading: 'Book every company trip inside policy, with every confirmation in one place.',
    sub: 'Try it on the Free plan with 1 real trip.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-travel-final',
      button: 'Start free',
      interest: 'travel',
    },
    link: { label: 'More blueprints to buy, book and order', to: '/blueprints/buy-book-and-order' },
  },
}

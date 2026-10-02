export type RunEvent = {
  time: string
  text: string
  tag: string
  tone: 'ok' | 'bad' | 'warn' | 'idle'
}

export type Run = {
  id: string
  tab: string
  recipe: string
  target: string
  cadence: string
  label: string
  events: RunEvent[]
  summary: string
}

export const competitorRun: Run = {
  id: 'competitor',
  tab: 'Competitor tracking',
  recipe: 'Competitor tracking',
  target: 'rivalbrand.com',
  cadence: 'Weekly',
  label: 'Example',
  events: [
    { time: 'Mon 07:02', text: 'Signed up with its own inbox and phone number', tag: 'Started', tone: 'idle' },
    { time: 'Mon 07:04', text: 'Welcome email: 15% off your first order', tag: 'Captured', tone: 'ok' },
    { time: 'Tue 19:30', text: 'First text: a free gift on orders over £40', tag: 'Captured', tone: 'ok' },
    { time: 'Thu 08:15', text: 'Free delivery now starts at £35, down from £50', tag: 'Changed', tone: 'warn' },
    { time: 'Fri 11:40', text: '14 new Meta ads, 9 of them leading with the free gift', tag: 'Changed', tone: 'warn' },
  ],
  summary: 'Week 1: 5 emails, 2 texts, 1 price change, 14 new ads.',
}

/* The September store check behind the sample output, name hidden. */
export const mysteryRun: Run = {
  id: 'mystery',
  tab: 'Mystery shopper',
  recipe: 'Mystery shopper',
  target: 'Brand G (name hidden)',
  cadence: 'Once',
  label: 'Real run, September 2026',
  events: [
    { time: 'Day 0, 03:11', text: '4 test customers start: welcome, browse, cart and checkout', tag: 'Started', tone: 'idle' },
    { time: 'Day 0 to 2', text: 'Welcome journey: 2 messages arrive', tag: 'Arrived', tone: 'ok' },
    { time: 'Day 0 to 2', text: 'Browse journey: 3 messages arrive', tag: 'Arrived', tone: 'ok' },
    { time: 'Day 2, 02:57', text: 'Left a full basket: nothing in 48 hours', tag: 'Silent', tone: 'bad' },
    { time: 'Day 2, 03:11', text: 'Left at checkout: nothing in 48 hours', tag: 'Silent', tone: 'bad' },
  ],
  summary: '2 of 4 journeys silent. 15 screenshots and 5 messages kept as proof.',
}

export const mysteryWeeklyRun: Run = {
  id: 'mystery-weekly',
  tab: 'Mystery shopper',
  recipe: 'Mystery shopper',
  target: 'A client’s store',
  cadence: 'Weekly',
  label: 'Example',
  events: [
    { time: 'Mon 06:00', text: 'Weekly run starts, same personas and steps as last week', tag: 'Started', tone: 'idle' },
    { time: 'Mon 06:02', text: 'Sign up: welcome email arrives in 1 minute', tag: 'Arrived', tone: 'ok' },
    { time: 'Mon 06:10', text: 'Code from Friday’s newsletter works at checkout', tag: 'Passed', tone: 'ok' },
    { time: 'Mon 06:14', text: 'Delivery cost only appears at the last step', tag: 'Flagged', tone: 'warn' },
    { time: 'Tue 06:15', text: 'Basket reminder never came. It did last week.', tag: 'Changed', tone: 'bad' },
  ],
  summary: '7 of 9 steps passed. One change since last week: the basket reminder stopped.',
}

export const prospectRun: Run = {
  id: 'prospect',
  tab: 'Prospect research',
  recipe: 'Prospect research',
  target: '300 brands, from a Clay table',
  cadence: '14 days, then weekly',
  label: 'Example',
  events: [
    { time: 'Day 0, 09:00', text: '300 shoppers sign up, opt in to texts and ask a support question', tag: 'Started', tone: 'idle' },
    { time: 'Day 0, 10:00', text: '271 welcome emails arrive within the hour', tag: 'Arrived', tone: 'ok' },
    { time: 'Day 1, 12:00', text: '188 support replies so far', tag: 'Replied', tone: 'ok' },
    { time: 'Day 7, 09:00', text: 'Control texts confirm every number still works', tag: 'Checked', tone: 'idle' },
    { time: 'Day 14, 09:00', text: '54 of 142 brands took an SMS opt in and never sent a text', tag: 'Gap', tone: 'bad' },
  ],
  summary: '54 gaps confirmed by a second run, written back to Clay as new columns.',
}

export const speedRun: Run = {
  id: 'speed',
  tab: 'Speed to lead',
  recipe: 'Speed to lead',
  target: '40 dental practices',
  cadence: 'Monthly',
  label: 'Example',
  events: [
    { time: 'Day 0, 09:00', text: 'Enquiry sent through each web form, marked as automated', tag: 'Started', tone: 'idle' },
    { time: 'Day 0, 09:06', text: 'First reply, by email', tag: 'Replied', tone: 'ok' },
    { time: 'Day 0, 17:00', text: '18 of 40 have replied', tag: 'Replied', tone: 'ok' },
    { time: 'Day 1, 10:20', text: '6 called back instead of writing', tag: 'Called', tone: 'ok' },
    { time: 'Day 5, 09:00', text: '9 practices never replied', tag: 'Silent', tone: 'bad' },
  ],
  summary: 'Fastest reply 6 minutes. 9 of 40 never answered.',
}

export const trialRun: Run = {
  id: 'trial',
  tab: 'Trial teardown',
  recipe: 'Trial teardown',
  target: 'A rival’s free trial',
  cadence: 'Once',
  label: 'Example',
  events: [
    { time: 'Day 0, 10:00', text: 'Started a free trial, marked as automated', tag: 'Started', tone: 'idle' },
    { time: 'Day 0, 10:01', text: 'Welcome email with a setup checklist', tag: 'Arrived', tone: 'ok' },
    { time: 'Day 1, 14:20', text: 'Missed call from a rep, then a voicemail', tag: 'Called', tone: 'ok' },
    { time: 'Day 3, 09:00', text: 'Case study email with three customer logos', tag: 'Arrived', tone: 'ok' },
    { time: 'Day 14, 11:00', text: 'Trial ends. A 20% discount arrives an hour later.', tag: 'Offer', tone: 'warn' },
  ],
  summary: '11 emails, 2 calls and 1 discount in 14 days.',
}

export const priceRun: Run = {
  id: 'prices',
  tab: 'Price watch',
  recipe: 'Price and promotion watch',
  target: '3 rivals',
  cadence: 'Daily',
  label: 'Example',
  events: [
    { time: 'Mon 07:00', text: 'Daily check of 3 rivals’ prices and offers', tag: 'Started', tone: 'idle' },
    { time: 'Mon 07:03', text: 'Rival A: bundle price cut from £48 to £42', tag: 'Changed', tone: 'warn' },
    { time: 'Tue 07:02', text: 'Rival B: free delivery now starts at £35', tag: 'Changed', tone: 'warn' },
    { time: 'Wed 07:04', text: 'No changes', tag: 'Quiet', tone: 'idle' },
    { time: 'Thu 07:01', text: 'Rival C: 25% off everything, ends Sunday', tag: 'Changed', tone: 'warn' },
  ],
  summary: '3 changes this week, each with a screenshot.',
}

export const adsRun: Run = {
  id: 'ads',
  tab: 'Ad tracking',
  recipe: 'Ad tracking',
  target: '3 client brands',
  cadence: 'Daily',
  label: 'Example',
  events: [
    { time: '07:00', text: 'Read 38 live Meta ads across 3 brands', tag: 'Started', tone: 'idle' },
    { time: '07:04', text: 'Ad 12 lands on a sold out serum', tag: 'Broken', tone: 'bad' },
    { time: '07:06', text: 'Ad 19 says 20% off. The page says 15%.', tag: 'Mismatch', tone: 'warn' },
    { time: '07:09', text: 'Ad 27 lands on a page that takes 9 seconds to load', tag: 'Slow', tone: 'warn' },
    { time: '07:15', text: 'The other 35 ads land where they should', tag: 'Passed', tone: 'ok' },
  ],
  summary: '3 of 38 ads need fixing. Each comes with the ad and the page side by side.',
}

export const homeRuns: Run[] = [competitorRun, mysteryRun, prospectRun, speedRun]

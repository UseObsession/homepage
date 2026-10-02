import type { Audience } from '../pages/AudiencePage'
import { competitorRun, mysteryRun, mysteryWeeklyRun, priceRun, prospectRun, speedRun, trialRun } from './runs'
import { pricingAnswer } from './shared'

export const agencies: Audience = {
  role: 'agency',
  source: 'agencies',
  docTitle: 'Obsession for agencies',
  kicker: 'For agencies',
  title: 'Check every client and prospect as a customer would.',
  lede: 'Run a client’s sign up, basket and support journeys with a test customer. Follow the rivals they care about. Take what you find into the pitch, the monthly report and the renewal.',
  watched: ['Sign ups', 'Baskets', 'Support', 'Emails', 'Texts', 'Ads', 'Codes', 'Prices', 'Pages'],
  runs: [mysteryRun, prospectRun, competitorRun],
  stats: [
    { value: 'Up to 1,080 hours', label: 'back a year, across 15 clients' },
    { value: '0 emails in 48 hours', label: 'found on a real store', to: '/sample-report' },
    { value: 'Every client', label: 'checked at once, not one at a time' },
  ],
  statsNote: 'Hours: 15 clients × 6 hours of manual checks a month. Emails: the September store check in the sample report.',
  usesTitle: 'One set of checks, across every client and pitch.',
  uses: [
    {
      title: 'Before a pitch',
      line: 'Go through the prospect’s journeys first, and open the meeting with what you found, screenshot included.',
    },
    {
      title: 'On a schedule, for every client',
      line: 'Their sign up, basket and support journeys run again on a schedule. You hear the day one stops.',
    },
    {
      title: 'Competitor reports',
      line: 'Every email, text, ad and offer from the rivals each client names, on one timeline you can share.',
    },
    {
      title: 'A research service you sell',
      line: 'Package the checks as a monthly report for your own clients. The runs happen on our infrastructure, not your team’s time.',
    },
  ],
  waysTitle: 'Use a recipe, or type the task.',
  waysLede: 'No code. Recipes cover the checks you repeat across clients. For a one off, describe it in plain words.',
  recipes: ['mystery', 'prospect', 'competitor', 'ads', 'prices', 'speed'],
  faq: [
    { q: 'Do clients need to install anything?', a: 'No. Every check runs from outside, the way a customer would arrive.' },
    {
      q: 'Can we run it on prospects?',
      a: 'Yes, on what any customer could do in public: sign up, opt in to texts, browse and contact support. Basket and checkout need the brand’s OK.',
    },
    { q: 'How many clients can we cover?', a: 'As many as you add. Each company is its own run, once or on a schedule.' },
    {
      q: 'Can we share the results with clients?',
      a: 'Yes. Each finding carries its screenshot or message and the time it happened, so it stands up on its own.',
    },
    { q: 'What does it cost?', a: pricingAnswer },
  ],
  finalTitle: 'Pick a client. See what their customers get.',
  finalLine: 'Tell us which client or prospect you’d check first.',
}

export const sales: Audience = {
  role: 'sales',
  source: 'sales',
  docTitle: 'Obsession for sales teams',
  kicker: 'For sales teams',
  title: 'Know what each account does before you call.',
  lede: 'A test customer goes through each account’s sign up, trial or enquiry and records what happens. Your reps open with something the account can check for itself.',
  watched: ['Sign ups', 'Trials', 'Enquiries', 'Replies', 'Calls', 'Emails', 'Texts', 'Pages'],
  runs: [prospectRun, speedRun, trialRun],
  stats: [
    { value: 'Every account', label: 'on your list, checked at once' },
    { value: '0 emails in 48 hours', label: 'found on a real store', to: '/sample-report' },
    { value: 'Every reply', label: 'timed, across your whole list' },
  ],
  usesTitle: 'Evidence for every account on your list.',
  uses: [
    {
      title: 'Before the first call',
      line: 'A one page brief on how the account treats a new customer, with the proof attached.',
    },
    {
      title: 'A reason to write',
      line: 'A gap your product closes, found at each account on your list. The opener is something they can check in a minute.',
    },
    {
      title: 'Speed to lead, across a list',
      line: 'Send an enquiry to every account and time the replies: who answers, how fast and on which channel.',
    },
    {
      title: 'Rival trials',
      line: 'Start a competitor’s trial and record every email, call and discount. Battlecards built on what actually happens.',
    },
  ],
  waysTitle: 'Use a recipe, or type the task.',
  waysLede: 'No code. Recipes cover the research you repeat. For anything else, describe it in plain words.',
  recipes: ['prospect', 'speed', 'trial'],
  faq: [
    { q: 'Where do the results go?', a: 'Each run comes back as a report and a sheet you can load into your CRM.' },
    { q: 'Do accounts know?', a: 'Every test customer and every enquiry is marked as automated. Nothing pretends to be a person.' },
    { q: 'Can it run on our whole list?', a: 'Yes. Add accounts as a CSV and each one gets its own run.' },
    { q: 'What does it cost?', a: pricingAnswer },
  ],
  finalTitle: 'Pick an account. See what it does.',
  finalLine: 'Tell us which account you’d check first.',
}

export const marketing: Audience = {
  role: 'marketing',
  source: 'marketing',
  docTitle: 'Obsession for marketing teams',
  kicker: 'For marketing teams',
  title: 'Every email, text, ad and offer your rivals send.',
  lede: 'A test customer signs up to each competitor and records what they send, what they change and when. It runs your own journeys too, so you hear the day one breaks.',
  watched: ['Emails', 'Texts', 'Meta ads', 'Google ads', 'TikTok', 'Offers', 'Prices', 'Pages'],
  runs: [competitorRun, priceRun, mysteryWeeklyRun],
  usesTitle: 'See the whole playbook, not just the ads.',
  uses: [
    {
      title: 'Your competitors’ playbook',
      line: 'Every email, text, ad and TikTok a rival sends after someone signs up, with send times, on one timeline.',
    },
    {
      title: 'Prices and promotions',
      line: 'Price cuts, delivery thresholds and sitewide offers, logged with a screenshot when they change.',
    },
    { title: 'Where your ads land', line: 'Each live ad followed to its page, so you see the sold out and broken ones.' },
    { title: 'Your own journeys', line: 'Your sign up, basket and checkout journeys, run again on a schedule.' },
  ],
  waysTitle: 'Use a recipe, or type the task.',
  waysLede: 'No code. Recipes cover the tracking you repeat. For anything else, describe it in plain words.',
  recipes: ['competitor', 'prices', 'ads', 'mystery', 'trial', 'speed'],
  faq: [
    {
      q: 'Which channels does it cover?',
      a: 'Email, text, Meta and Google ads, TikTok and other social posts, prices, offers and page changes.',
    },
    { q: 'Can I pick any competitor?', a: 'Yes. You name the company. It doesn’t need to be in anyone’s library first.' },
    {
      q: 'How far back does it go?',
      a: 'It starts the day you add a rival and records everything from then on. It isn’t an archive of the past.',
    },
    { q: 'What does it cost?', a: pricingAnswer },
  ],
  finalTitle: 'Name a rival. See their playbook.',
  finalLine: 'Tell us which competitor you’d watch first.',
}

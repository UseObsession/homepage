import { askExamples, askShared, life } from '../shared5'
import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Agencies (/agencies), the October rewrite (COPY.md, "Copy deck > Agencies"). Growth, ecommerce, lifecycle and Clay
   agencies. Their words (research/voc.md): "report straight to our client", "show clients", "swipe file per client",
   "saves me hours"; Jamie's "prove that they've got a problem that is solvable".
   The story: what it is for you (every client and prospect, checked as their customer) > the unpaid part of the job >
   5 jobs (win, deliver, keep, sell, mystery shop), each with its screen > how a customer agent lives
   > the real September store check > questions > the free report. Every use case screen is an example (its Example
   tag). Demo clients avoid "skincare", so no example reads as the real run. */

export const page: Page = {
  meta: {
    path: '/agencies',
    title: 'AI customers for agencies: check every client and prospect',
    description:
      'Obsession’s AI customers sign up, shop and ask the bot at every client and prospect, so pitches, reports and retainers open on proof, not a weekend audit.',
    answer:
      'Obsession’s AI agents sign up, shop and ask the bot at every client and prospect, so your pitches, reports and retainers open on what their customers actually get, with proof.',
    ogImage: '/og/agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Agencies', path: '/agencies' },
    ],
  },

  hero: {
    pill: '',
    headline: 'Check every client and prospect as their customer would.',
    sub: 'Obsession’s AI agents sign up, shop and ask the bot at every client and prospect, so your pitches, reports and retainers open on what their customers actually get, with proof.',
    capture: {
      kind: 'waitlist',
      source: 'agencies-hero',
      button: 'Join the waitlist',
      interest: 'any',
    },
    secondary: { label: 'Get 5 client stores checked free', to: '/use-cases/leak-checks-for-retention-agencies' },
    proof: [],
    consoleHeading,
    screens: [{ tab: 'Every client', screen: 'agencytask', recipe: 'mystery', line: '' }],
  },

  gapPair: {
    heading: 'Clients pay for what you find. Finding it is the unpaid part.',
    line: 'A weekend audit before each pitch, screenshots in a shared drive, a rival report that takes a week. The work that wins and keeps clients is the work nobody bills for.',
    tools: {
      label: 'What you have today',
      items: [
        'A weekend audit before each pitch',
        'Screenshots in a folder per client',
        'Ad dashboards that stop at the click',
        'A rival report that takes a week by hand',
      ],
    },
    customer: {
      label: 'What an AI customer brings back',
      items: [
        'The prospect’s welcome email, codes and texts, before the pitch',
        'The page behind every client’s live ads, each morning',
        'Every client’s rivals on 1 timeline',
        'The basket left and the reminder that never came',
        'Every fix found, made and checked again after it went live',
      ],
    },
  },

  uses: {
    heading: 'Turn the unpaid hours into pitches won, clients kept and a service you sell.',
    items: [
      {
        tab: 'Win the pitch',
        moment: 'Thursday’s pitch, and all you’ve seen is their homepage.',
        outcome: 'Open the pitch on their own screenshots, not a weekend audit.',
        line: 'Agents sign up to the prospect, opt in to texts and ask the site’s bot, then turn every gap into a pitch pack.',
        whyOnly: 'A welcome email, a code or a text only reaches an inbox and phone that signed up. Each agent has its own.',
        recipe: 'prospect',
        screen: 'pack',
      },
      {
        tab: 'Deliver for every client',
        moment: 'Monday, 08:00. 15 clients’ ads are live, and nobody has opened the pages behind them since Friday.',
        outcome: 'Catch the ad sending $410 a day of clicks to a sold out lamp, before the day’s spend.',
        line: 'Agents open the page behind every live ad each morning, check its offer, price and stock, and flag only what needs you.',
        whyOnly: 'Agents open each ad’s page on a phone, the way a customer does, so they see the sold out page your ad dashboard never shows.',
        recipe: 'adcheck',
        screen: 'board',
      },
      {
        tab: 'Keep every client',
        moment: 'A month before renewal, the client asks what the retainer buys.',
        outcome: 'A record of every fix: found, approved, live and checked again.',
        line: 'Agents draft each fix in the tools the client connected, then run the check again once it is live to prove it works.',
        whyOnly: 'Every step is dated and kept with its proof, so the client can check the work without taking your word for it.',
        recipe: 'audit',
        screen: 'approve',
      },
      {
        tab: 'Sell a new service',
        moment: 'A client asks what their rivals send. You’d charge for the answer if it didn’t take a week.',
        outcome: 'A research service you sell: a monthly rival report, in your brand.',
        line: 'Agents join each client’s rivals’ emails and texts and keep every offer, then send the report under your name.',
        whyOnly: 'Rivals save their best offers for subscribers. Agents subscribe to every rival of every client, so the report shows what their customers get.',
        recipe: 'email-sms',
        screen: 'report',
      },
      {
        tab: 'Mystery shop any client',
        moment: 'A client swears every customer hears back. Nobody has checked since launch.',
        outcome: 'Proof of what every customer gets, and what never arrives: a trial, a basket or a booking.',
        line: 'Agents start a trial, fill a basket or book a visit, and watch every inbox.',
        whyOnly: 'Only an agent with its own inbox, number and browser can wait 48 hours and prove nothing came.',
        recipe: 'mystery',
        screen: 'shop',
      },
    ],
  },

  life,

  /* The ask section (docs/positioning/ask-section.md), where the comparison sits on other pages: pitch evidence,
     Promotions across every client, and a reminder that stopped. */
  ask: {
    ...askShared,
    areas: ['Clients', 'Prospects', 'Their rivals'],
    examples: [askExamples.pitch, askExamples.promotions, askExamples.watch],
  },

  proof: {
    heading: 'On a real store, 1 shopper left a basket and 1 stopped at checkout. Neither got a reminder in 48 hours.',
    line: 'A real September check of a skincare store, name hidden: 4 test customers, every inbox watched for 48 hours, 15 screenshots and a follow up drafted for each gap. Run the same check on any client.',
    cta: { label: 'Read the full report', to: '/sample-output' },
  },

  faq: {
    heading: 'Questions from agencies.',
    items: [
      {
        q: 'What does Obsession do for an agency?',
        a: 'Obsession’s AI agents sign up, shop and ask the bot at every client and prospect, so your pitches, reports and retainers open on what their customers actually get, with proof.',
      },
      {
        q: 'Can reports go out under our brand?',
        a: 'Yes. Reports, emails and pitch packs carry your name and logo, and go out from your own address.',
      },
      {
        q: 'Does it work with Clay?',
        a: 'Yes. Send a list from Clay and each company comes back with what its customers get, with its proof linked, ready for the first line of an email.',
      },
      {
        q: 'What is in the free report?',
        a: 'Test customers shop a client’s store: they sign up, leave a basket and stop at checkout, and every inbox is watched for 48 hours. You get what arrived, what never did, and the screenshots.',
      },
    ],
  },

  final: {
    heading: 'Pick a client. See what their customers get.',
    sub: 'Agencies get 5 client stores checked free. Start with the client you’d hate to lose; each report lands within 4 days.',
    capture: {
      kind: 'mystery',
      source: 'agencies-final',
      button: 'Check 5 client stores free',
      interest: 'mystery',
    },
  },
}

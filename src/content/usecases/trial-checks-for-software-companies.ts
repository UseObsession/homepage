import type { UseCaseStudy } from '../types'

/* Trial checks for software companies (/use-cases/trial-checks-for-software-companies), 9 Nov rewrite: what software
   companies show only to signed-up users (onboarding emails, trial limits, upgrade prompts, signed-in prices, offers to
   stay), for a product team's own trial and its competitors', looked up in Search or Insights, a table or a webhook.
   Larkfield's dead welcome links and Quillon's trial-only 40% off come from Home; every name and figure is invented
   and `fine` says so. The agents appear only in the answer on where the data comes from. */

export const study: UseCaseStudy = {
  name: 'Trial checks for software companies',
  line: 'Every email, limit, prompt and offer a trial user gets, from your app and your competitors’.',

  meta: {
    path: '/use-cases/trial-checks-for-software-companies',
    title: 'Trial checks for software companies: behind the sign-up',
    description:
      'The onboarding emails, trial limits, upgrade prompts, signed-in prices and cancel offers of your app and your competitors’, each dated with a screenshot.',
    answer:
      'Obsession records what software companies show only to signed-up users: onboarding emails, trial limits, upgrade prompts, signed-in prices and cancel offers. Each fact is dated, with the email or a screenshot, for your own product and your competitors. Look up one app, or ask a question across many.',
    ogImage: '/og/trial-checks-for-software-companies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Trial checks for software companies', path: '/use-cases/trial-checks-for-software-companies' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Every competitor’s trial, from sign-up to cancel, dated.',
    sub: 'The onboarding emails, trial limits, upgrade prompts, signed-in prices and offers to stay, at your app and every competitor you name. Each with the email or the screenshot, and the day it appeared.',
    example: { chips: ['Larkfield, a team calendar app', '5 competitors', '14 day trials'] },
    flow: [
      {
        label: 'What you name',
        title: 'Your trial and 5 competitors',
        items: ['Your sign-up page', 'Each competitor’s free trial', 'The customer profiles to sign up as'],
        foot: 'Web, iOS or Android',
      },
      {
        label: 'What comes back',
        title: 'Every fact, dated',
        items: ['Onboarding emails and texts', 'Trial limits and upgrade prompts', 'Signed-in prices and offers', 'The offer to stay at cancel'],
        foot: 'Each with its screenshot',
      },
      {
        label: 'Where it lands',
        title: 'Where your team works',
        items: ['Search: one app', 'Insights: a question across many', 'A webhook, Clay or the API'],
        foot: 'Nothing to install',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-software-hero',
      button: 'Request early access',
      interest: 'trial',
    },
  },

  how: {
    heading: 'Name the apps and who signs up. The trials stay open.',
    sub: 'Larkfield, a team calendar app, follows its own 14 day trial and 5 competitors’.',
    steps: [
      {
        title: 'Set it up',
        line: 'Which apps, as which users, and what a good trial looks like.',
        chips: ['Your app and any competitor', 'Trial user · US', 'Team admin · 20 seats', 'Pays only on a card you fund'],
        steps: [
          {
            title: 'Name the apps',
            line: 'Your own sign-up and each competitor’s, on the web or in the app.',
            example: 'Larkfield names its own sign-up and 5 competitors: Quillon, Velloway, Hollin, Wrenfield and Fieldmark.',
          },
          {
            title: 'Pick who signs up',
            line: 'The customer profiles and country to sign up as. A team admin and a solo user see different limits and offers.',
            example: 'A trial user in the US, a new visitor in the UK and a team admin with 20 seats.',
          },
          {
            title: 'Say what your own trial should send',
            line: 'The emails you expect, and when. Anything late, missing or broken is a finding.',
            example: 'A welcome within 10 minutes, onboarding on days 1, 3 and 7, and a reminder 3 days before the end.',
          },
        ],
      },
      {
        title: 'Obsession runs the trials',
        line: 'Each account stays open to the end of the trial and after it.',
        screen: 'battlecard',
        chips: ['Its own inbox', 'Its own phone number', 'Its own browser', 'Says it’s AI'],
        steps: [
          {
            title: 'Every email, link and prompt',
            line: 'Each account confirms its email, follows the onboarding, opens every link and comes back on the days you set.',
            example: 'Tue 09:02: signed up at Larkfield. 09:03: the welcome email. 09:04: its Open the app button leads to staging.larkfield.example, a closed site.',
          },
          {
            title: 'Limits, prompts and prices',
            line: 'Where the free plan stops, when the upgrade prompt appears, and the price a signed-in user sees.',
            example: 'Quillon: 3 projects and 1 seat free, an upgrade prompt on day 7, and Pro at $24 signed in, $29 on the public page.',
          },
          {
            title: 'Offers to stay',
            line: 'The discount before the trial ends and the offer when someone cancels, including the ones never on the pricing page.',
            example: 'Day 12 at Quillon: 40% off the first year, for trial users only. At cancel: 50% off for 3 months.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Your trial emails go to new users. Nobody on your team is one.',
    sub: 'The welcome email was tested once, the day it went live. Since then a domain moved, a plan was renamed and a tool was swapped. Competitors’ trials change the same way, out of sight.',
    items: [
      { title: 'Dead links', line: 'A button in the welcome email that opens a staging site, a login wall or a page that moved.' },
      { title: 'Emails that never come', line: 'The day 3 tip or the trial ending reminder that stopped after a tool change.' },
      { title: 'Limits that move', line: 'A free plan cut from 5 projects to 3, or an upgrade prompt moved to day 5.' },
      { title: 'Competitors’ private offers', line: 'The discount or extra week a competitor sends only to its trial users.' },
    ],
    answer: 'Each finding comes back with the email as it arrived, the page it led to and the time of both.',
  },

  outputs: {
    heading: 'What product and growth teams do with it.',
    groups: [
      {
        items: [
          {
            title: 'Fix a break the day it starts',
            line: 'Not the month churn moves.',
            example: 'The dead welcome links reached #growth through a webhook at 09:05 on Tuesday, and were fixed by 11:00.',
          },
          {
            title: 'Check a release didn’t break onboarding',
            line: 'Sign up again after every release.',
            example: 'After the switch to a new email tool, the day 3 email stopped. It was back the next morning.',
          },
          {
            title: 'Match a competitor’s offer, or don’t',
            line: 'Ask Insights what competitors send their trial users.',
            example: '3 of 5 project management apps email a discount before the trial ends. None show it on their pricing page.',
          },
          {
            title: 'Benchmark your onboarding',
            line: 'How many emails, how soon and what each asks for, against 5 competitors.',
            example: 'Larkfield sends 4 emails in 14 days. Its competitors send 6 to 11.',
          },
        ],
      },
    ],
  },

  more: {
    recipe: {
      label: 'The recipe',
      title: 'Trial teardown',
      line: 'Every onboarding email, prompt and offer in a trial, day by day.',
      cta: { label: 'Learn more', to: '/recipes/trial-teardown' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'Larkfield, its competitors and their .example addresses, every email, offer and figure here are made up.',

  faq: {
    heading: 'What software teams ask.',
    items: [
      {
        q: 'What does Obsession do for software companies?',
        a: 'Obsession records what software companies show only to signed-up users: onboarding emails, trial limits, upgrade prompts, signed-in prices and cancel offers. Each fact is dated, with the email or a screenshot, for your own product and your competitors. Look up one app, or ask a question across many.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents sign up, start trials and cancel the way any user can, from the customer profiles and countries you choose, and keep each account open for months. Every email is kept as it arrived, with its sender checked.',
      },
      {
        q: 'Will these sign-ups show up in our numbers?',
        a: 'Only if you let them. Each one signs up from an address you can recognise, so you can leave them out of your sign-ups, trials and churn.',
      },
      {
        q: 'Is it allowed to start a competitor’s trial?',
        a: 'Obsession does only what any user can, through the sign-up anyone can use. It says it’s an AI when it talks to a person, and it never signs in to an account that isn’t its own. Our guide sets out the law in the US, the UK and the EU; it isn’t legal advice.',
        link: { label: 'Is it legal to sign up to a competitor?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
      {
        q: 'Does it work for apps as well as websites?',
        a: 'Yes. It signs up on the web or in your iOS or Android app, and keeps every email and text that comes after.',
      },
      {
        q: 'Does it pay for anything?',
        a: 'Only if you choose. A paid trial runs on a card you fund, never on fake payment details.',
      },
    ],
  },

  final: {
    heading: 'Which apps should we look up first?',
    sub: 'Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-software-final',
      button: 'Request early access',
      interest: 'trial',
    },
  },
}

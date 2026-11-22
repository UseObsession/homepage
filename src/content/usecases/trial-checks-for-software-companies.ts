import { kitPathOf } from '../kitPaths'
import { personaCostLine, plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Trial checks for software companies (/use-cases/trial-checks-for-software-companies), 22 Nov 2026 rewrite for the
   toolkit position: a persona (its own browser, inbox and number) starts each competitor's free trial and keeps it open,
   and every onboarding email, limit, upgrade prompt and offer to stay lands in the event log. Trial teardown runs it for
   teams who don't code; QA on your own flows checks the reader's own trial after each release. Part of the Watch the
   market kit. Larkfield's dead welcome links and Quillon's trial-only 40% off are invented, and `fine` says so. Prices
   come from prices.ts. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const planWords = `the Free plan, then ${fees.slice(0, -1).join(', ')} or ${fees[fees.length - 1]} a month`

export const study: UseCaseStudy = {
  name: 'Trial checks for software companies',
  line: 'A persona in every competitor’s trial, keeping each email, limit, prompt and offer.',

  meta: {
    path: '/use-cases/trial-checks-for-software-companies',
    title: 'Software companies: every competitor’s trial, day by day',
    description:
      'AI agents start your competitors’ free trials and keep every onboarding email, trial limit, upgrade prompt and offer to stay, each dated with a screenshot.',
    answer:
      'Obsession gives software companies AI agents that start every competitor’s free trial and keep it open to the end. Each is a persona with its own browser, inbox and number. Every onboarding email, trial limit, upgrade prompt and offer to stay lands in your event log, dated, with a screenshot.',
    ogImage: '/og/trial-checks-for-software-companies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Trial checks for software companies', path: '/use-cases/trial-checks-for-software-companies' },
    ],
  },

  hero: {
    pill: 'Watch the market kit',
    headline: 'Every competitor’s trial, from sign-up to the offer to stay.',
    sub: 'Obsession gives software companies AI agents that start every competitor’s free trial and keep it open to the end. Every onboarding email, trial limit, upgrade prompt and offer to stay lands in your event log, dated, with a screenshot.',
    example: { chips: ['Larkfield, a team calendar app', '5 competitors', '14 day trials'] },
    flow: [
      {
        label: 'What you name',
        title: 'Your trial and 5 competitors',
        items: ['Your sign-up page', 'Each competitor’s free trial', 'Who signs up, by role and country'],
        foot: 'Web, iOS or Android',
      },
      {
        label: 'Obsession',
        title: 'A persona in each trial',
        items: ['A browser that keeps its logins', 'An inbox for every email', 'A number for every code', 'Trial teardown runs it'],
        foot: 'Free while it waits',
      },
      {
        label: 'Where it lands',
        title: 'Your event log',
        items: ['Slack or a webhook', 'A sheet or your CRM', 'Your own AI agent'],
        foot: 'Each event dated, with its screenshot',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-software-hero',
      button: 'Start free',
      interest: 'trial',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/trial-teardown' },
  },

  how: {
    heading: 'Name the apps and who signs up. The trials stay open.',
    sub: 'Larkfield, a team calendar app, follows its own 14 day trial and 5 competitors’.',
    steps: [
      {
        title: 'Set it up',
        line: 'Which apps, as which users, and what a good trial looks like.',
        chips: ['Your app and any competitor', 'Trial user · US', 'Team admin · 20 seats', 'Stops before payment'],
        steps: [
          {
            title: 'Name the apps',
            line: 'Your own sign-up and each competitor’s, on the web or in the app.',
            example: 'Larkfield names its own sign-up and 5 competitors: Quillon, Velloway, Hollin, Wrenfield and Fieldmark.',
          },
          {
            title: 'Define who signs up',
            line: 'Each persona is a new user you define, by role, team size and country. A team admin and a solo user see different limits.',
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
        title: 'Trial teardown runs the trials',
        line: 'A persona stays signed in at each app to the end of the trial and after it.',
        screen: 'battlecard',
        chips: ['Its own browser', 'Its own inbox', 'Its own number', 'Says it’s an AI'],
        steps: [
          {
            title: 'Every email, link and prompt',
            line: 'It confirms its email, follows the onboarding, opens every link and comes back on the days you set.',
            example: 'Tue 09:02: signed up at Larkfield. 09:03: the welcome email. 09:04: its Open the app button leads to staging.larkfield.example, a closed site.',
          },
          {
            title: 'Limits, prompts and prices',
            line: 'Where the free plan stops, when the upgrade prompt appears, and the price a signed-in user sees.',
            example: 'Quillon: 3 projects and 1 seat free, an upgrade prompt on day 7, and Pro at $24 signed in, $29 on the public page.',
          },
          {
            title: 'Offers to stay',
            line: 'The discount before the trial ends and the offer at cancel, including ones never on the pricing page.',
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
    answer: 'Each finding lands with the email as it arrived, the page it led to and the time of both.',
  },

  outputs: {
    heading: 'What product and growth teams do with it.',
    sub: 'Each use shows up in activation, conversion and retention, where you can watch it.',
    groups: [
      {
        items: [
          {
            title: 'Fix a break the day it starts',
            line: 'Before it shows up in activation.',
            example: 'The dead welcome links reached #growth through a webhook at 09:05 on Tuesday, and were fixed by 11:00.',
          },
          {
            title: 'Check a release didn’t break onboarding',
            line: 'A new persona signs up after every release.',
            example: 'After the switch to a new email tool, the day 3 email stopped. It was back the next morning.',
          },
          {
            title: 'Match a competitor’s offer, or don’t',
            line: 'Ask your own agent what competitors send their trial users.',
            example: 'Most of the 5 email a discount before the trial ends. None show it on their pricing page.',
          },
          {
            title: 'Benchmark your onboarding',
            line: 'How many emails, how soon and what each asks for, against every competitor.',
            example: 'Larkfield sends 4 emails in 14 days. Its competitors send 6 to 11.',
          },
        ],
      },
    ],
  },

  more: {
    recipe: {
      label: 'The blueprint',
      title: 'Trial teardown',
      line: 'Every onboarding email, prompt and offer in a competitor’s trial, by trial day.',
      cta: { label: 'See the blueprint', to: '/blueprints/trial-teardown' },
    },
    sample: {
      label: 'For your own trial',
      title: 'QA on your own flows',
      line: 'A new persona through your sign-up after every release, and the step that broke.',
      cta: { label: 'See the blueprint', to: '/blueprints/website-audit' },
    },
  },

  fine: 'Larkfield, its competitors and their .example addresses, every email, offer and figure here are made up.',

  faq: {
    heading: 'What software teams ask.',
    items: [
      {
        q: 'Where does the data come from?',
        a: 'From real trials. A persona signs up, starts the trial and cancels the way any user can, as the role and country you choose. Its browser keeps its logins, so each account stays open for months. Every email is kept as it arrived, with its sender checked.',
      },
      {
        q: 'Will these sign-ups show up in our numbers?',
        a: 'Only if you let them. Each one signs up from an address you can recognise, so you can leave them out of your sign-ups, trials and churn.',
      },
      {
        q: 'Is it allowed to start a competitor’s trial?',
        a: 'A persona does only what any user can, through the sign-up anyone can use. It says it’s an AI when it talks to a person, and it never signs in to an account that isn’t its own. Our guide sets out the law in the US, the UK and the EU; it isn’t legal advice.',
        link: { label: 'Is it legal to sign up to a competitor?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
      {
        q: 'Does it work for apps as well as websites?',
        a: 'Yes. It signs up on the web or in your iOS or Android app, and keeps every email and text that comes after.',
      },
      {
        q: 'Does it pay for anything?',
        a: 'Only with your own card. Without one, a persona stops before payment, and it never uses fake payment details.',
      },
      {
        q: 'How is it priced?',
        a: `${personaCostLine} It costs nothing while it waits, and Trial teardown is billed on the pieces it uses. Start on ${planWords}.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Put a persona in every competitor’s trial.',
    sub: 'Start with your own trial and one competitor’s, so you can see what it does to activation, conversion and retention.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-software-final',
      button: 'Start free',
      interest: 'trial',
    },
    link: { label: 'See the Watch the market kit', to: kitPathOf.watch },
  },
}

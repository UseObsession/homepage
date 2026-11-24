import { kitPathOf } from '../kitPaths'
import { personaCostLine, plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Journey checks for banks and fintechs (/use-cases/journey-checks-for-banks-and-fintechs), 22 Nov 2026 rewrite for the
   toolkit position: a persona (its own browser, inbox and number) starts account applications at the reader's bank and
   its competitors and opens no account (James, 11 Nov), and keeps every step, rate, email, text and
   chat answer in the event log. QA on your own flows runs the bank's own application; Mystery shopping runs the
   competitors'. Part of the Test sign-up and agents kit. Kittiwake Bank's chat calling a variable rate fixed is
   invented, like every name, rate and figure here, and `fine` says so. Prices come from prices.ts. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const planWords = `the Free plan, then ${fees.slice(0, -1).join(', ')} or ${fees[fees.length - 1]} a month`

export const study: UseCaseStudy = {
  name: 'Journey checks for banks and fintechs',
  line: 'Account opening, rates, offers and chat answers, at your bank and your competitors.',

  meta: {
    path: '/use-cases/journey-checks-for-banks-and-fintechs',
    title: 'Banks and fintechs: test account opening, codes and chat',
    description:
      'AI agents start applications at your bank and your competitors, and keep every step, rate, email, text and chat answer, dated with its proof.',
    answer:
      'Obsession gives banks and fintechs AI agents that start account applications at your bank and your competitors. Each is a persona with its own browser, inbox and number. Every step, rate, email, text and chat answer lands in your event log, dated, with its screenshot or transcript.',
    ogImage: '/og/journey-checks-for-banks-and-fintechs.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Journey checks for banks and fintechs', path: '/use-cases/journey-checks-for-banks-and-fintechs' },
    ],
  },

  hero: {
    pill: 'Test sign-up and agents blueprints',
    headline: 'The rates, offers and answers banks show only to people who apply.',
    sub: 'Obsession gives banks and fintechs AI agents that start account applications at your bank and your competitors. Every step, rate, email, text and chat answer lands in your event log, dated, with its screenshot or transcript.',
    example: { chips: ['Kittiwake Bank, a savings bank', '3 competitors', 'Applications and chat'] },
    flow: [
      {
        label: 'What you name',
        title: 'Your bank and 3 competitors',
        items: ['Account opening, step by step', 'Rate pages and the application', 'Chat and the help centre', 'Who applies: a new saver or a switcher'],
        foot: 'On the web or in the app',
      },
      {
        label: 'Obsession',
        title: 'A persona at each bank',
        items: ['A browser for the application', 'An inbox and a number for what follows', 'A dated screenshot of every step', 'Says it’s an AI in chat'],
        foot: 'Free while it waits',
      },
      {
        label: 'Where it lands',
        title: 'Your event log',
        items: ['Each step, with its screenshot', 'Application rates beside public ones', 'Chat answers, word for word', 'Slack, a webhook or a sheet'],
        foot: 'Every event dated',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-banks-hero',
      button: 'Start free',
      interest: 'audit',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/website-audit' },
  },

  how: {
    heading: 'Name the banks and who applies. Everything after is kept.',
    sub: 'Kittiwake Bank, a savings bank, follows its own channels and 3 competitors’.',
    steps: [
      {
        title: 'Set it up',
        line: 'Which banks, as which customers, and what each answer is checked against.',
        chips: ['Your bank and any competitor', 'New saver · UK', 'Switcher · UK', 'Says it’s an AI to a person'],
        steps: [
          {
            title: 'Name the banks',
            line: 'Your own bank and each competitor, on the web or in the app.',
            example: 'Kittiwake names itself and 3 competitors: Dunmere, Sedgefield and Quaystone.',
          },
          {
            title: 'Define who applies',
            line: 'Each persona is a customer you define, by profile and country. A new saver and a switcher are often offered different rates.',
            example: 'A new saver in the UK, and someone switching their savings from another bank.',
          },
          {
            title: 'Say what to check against',
            line: 'Your rate page and your terms. An answer that disagrees with them becomes a finding, with both side by side.',
            example: 'The rate, fixed or variable, the notice period and the bonus end date.',
          },
        ],
      },
      {
        title: 'The personas start the applications',
        line: 'Each fills in the forms a new applicant meets, and keeps its inbox and number, so every email, text and offer after arrives as it happens.',
        screen: 'botcheck',
        chips: ['Its own browser', 'Its own inbox', 'Its own number', 'Says it’s an AI'],
        steps: [
          {
            title: 'Account opening, step by step',
            line: 'Every form and what it asks for, and the emails after it, each with the time it arrived.',
            example: '1 Nov, 14:22 at Dunmere: the summary step shows 4.6% with a 0.1% bonus for 12 months. At 48 hours: “Finish your application”.',
          },
          {
            title: 'Application rates beside public ones',
            line: 'The rate and bonus the application shows, beside the ones on the public page.',
            example: 'Sedgefield: 4.8% on the public page, 4.5% on the application’s summary page.',
          },
          {
            title: 'What chat tells a customer',
            line: 'The same questions in chat and support, each answer kept word for word and checked against the terms.',
            example: 'Tue 07:04, Kittiwake web chat: “Yes, 4.6% is fixed for 12 months.” The rate page says variable.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Rate tables show the public rate. The application can show another.',
    sub: 'Comparison sites stop at the public page, and panels sell a fixed list of banks behind a client login. The rest is found by staff starting applications by hand, a few banks at a time.',
    items: [
      { title: 'Rates in the application', line: 'A rate or bonus on the summary page that differs from the public one.' },
      { title: 'Offers after the form', line: 'A switching bonus shown only once the form is filled in.' },
      { title: 'Wrong answers in chat', line: 'A bot that calls a variable rate fixed, or gets a notice period wrong.' },
      { title: 'Messages that never come', line: 'The reminder to finish an application that never went out.' },
    ],
    answer: 'Each finding lands in your event log with the screenshot, email or transcript behind it, kept for as long as you need it.',
  },

  outputs: {
    heading: 'What journey, pricing and risk teams do with it.',
    sub: 'Each use shows up in application completion, drop-off and time to open, where you can watch it.',
    groups: [
      {
        items: [
          {
            title: 'Fix the step applicants drop at',
            line: 'A new persona runs your own application after every release.',
            example: 'After a release on 6 Nov, Kittiwake’s address step froze in the app. The screenshot reached the journey team at 09:12.',
          },
          {
            title: 'Price against what applicants see',
            line: 'The rate on the application, beside the one on a comparison table.',
            example: 'Sedgefield and Dunmere show a lower rate in the application than on their rate pages, by up to 0.3 points.',
          },
          {
            title: 'Catch a wrong answer the day it starts',
            line: 'Before the complaints arrive.',
            example: 'The fixed rate answer reached the savings team’s webhook at 07:05 on Tuesday, the morning after a bot update.',
            link: { label: 'Support bot check', to: '/blueprints/support-bot-check' },
          },
          {
            title: 'Match a competitor’s offer, or don’t',
            line: 'Switching bonuses and rate changes, the day they appear.',
            example: 'Quaystone raised its easy access rate to 4.75% on Thursday. Its chat quoted 4.5% until Friday.',
          },
        ],
      },
    ],
  },

  more: {
    recipe: {
      label: 'For your own bank',
      title: 'QA on your own flows',
      line: 'A new persona through your own application after every release, and the step that broke.',
      cta: { label: 'See the blueprint', to: '/blueprints/website-audit' },
    },
    sample: {
      label: 'For your competitors',
      title: 'Mystery shopping',
      line: 'Personas apply at each competitor and keep every email, text and offer that follows.',
      cta: { label: 'See the blueprint', to: '/blueprints/mystery-shopper' },
    },
  },

  fine: 'Kittiwake Bank, its competitors and their .example addresses, every rate, answer and figure here are made up.',

  faq: {
    heading: 'What banks and fintechs ask.',
    items: [
      {
        q: 'Where does the data come from?',
        a: 'From real applications. A persona starts an application and asks chat the way any customer can, as the profile and country you choose, and keeps its inbox and number for months. It opens no account and never invents identity details. It never signs in to an account that isn’t its own, and says it’s an AI when it talks to a person.',
        link: { label: 'The lines every agent keeps', to: '/agents' },
      },
      {
        q: 'Does it help with Consumer Duty?',
        a: 'In the UK, the Consumer Duty asks firms to check that what they tell customers supports their understanding. Obsession gives you a dated history of what your channels said, answer by answer. It isn’t compliance advice, and what you report stays your call.',
      },
      {
        q: 'Who sees what our personas collect?',
        a: 'Only your team. Every event lands in your own event log, and nobody else can read it.',
      },
      {
        q: 'How often does it check?',
        a: 'Each persona keeps its own inbox and number, so emails and texts arrive as they happen. Rate pages and chat questions are checked every morning in this example, again after every bot update, or on any schedule you set.',
      },
      {
        q: 'How is it priced?',
        a: `${personaCostLine} It costs nothing while it waits, and each blueprint is billed on the pieces it uses. Start on ${planWords}.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'See every competitor’s application the way a new customer does.',
    sub: 'Start with your own application and one competitor’s, so you can see what it does to application completion and drop-off.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-banks-final',
      button: 'Start free',
      interest: 'audit',
    },
    link: { label: 'See the Test sign-up and agents blueprints', to: kitPathOf.test },
  },
}

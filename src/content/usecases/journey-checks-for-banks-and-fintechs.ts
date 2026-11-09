import type { UseCaseStudy } from '../types'

/* Journey checks for banks and fintechs (/use-cases/journey-checks-for-banks-and-fintechs), 9 Nov rewrite: what banks
   show only to their customers (account opening and the ID check, the emails after, signed-in rates beside public
   ones, offers after the form, what chat tells a saver), for a bank's own channels and its competitors', looked up in
   Search or Insights, a table or a webhook. Kittiwake Bank's chat calling a variable rate fixed comes from Home; every
   name, rate and figure is invented and `fine` says so. The agents appear only in the answer on where the data comes from. */

export const study: UseCaseStudy = {
  name: 'Journey checks for banks and fintechs',
  line: 'Account opening, signed-in rates, offers and chat answers, at your bank and your competitors.',

  meta: {
    path: '/use-cases/journey-checks-for-banks-and-fintechs',
    title: 'Journey checks for banks and fintechs: behind the login',
    description:
      'Account opening, the ID check, signed-in rates, switching offers and chat answers, at your bank and your competitors, each dated with a screenshot.',
    answer:
      'Obsession records what banks and fintechs show only to their customers: account opening, the ID check, the emails after it, signed-in rates and offers, and what chat tells a saver. Each fact is dated, with its screenshot, email or transcript, for your own bank and your competitors. Look up one bank, or ask a question across many.',
    ogImage: '/og/journey-checks-for-banks-and-fintechs.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Journey checks for banks and fintechs', path: '/use-cases/journey-checks-for-banks-and-fintechs' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'The rates, offers and answers banks give only their customers.',
    sub: 'Account opening and the ID check, every email after, signed-in rates and switching offers, and what chat tells a saver. At your bank and your competitors, each dated with its screenshot or transcript.',
    example: { chips: ['Kittiwake Bank, a savings bank', '3 competitors', 'Sign-up, login and chat'] },
    flow: [
      {
        label: 'What you name',
        title: 'Your bank and 3 competitors',
        items: ['Account opening and the ID check', 'Signed-in rate pages', 'Chat and the help centre', 'The customer profiles to ask as'],
        foot: 'New saver, existing customer, switcher',
      },
      {
        label: 'What comes back',
        title: 'Every fact, dated',
        items: ['Each step of account opening', 'Every email and text after', 'New and existing customer rates', 'Chat answers, word for word'],
        foot: 'Each with its screenshot or transcript',
      },
      {
        label: 'Where it lands',
        title: 'Where your team works',
        items: ['Search: one bank', 'Insights: a question across many', 'A webhook, Clay or the API'],
        foot: 'Nothing to install',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-banks-hero',
      button: 'Request early access',
      interest: 'support-bot',
    },
  },

  how: {
    heading: 'Name the banks and who asks. The accounts stay open.',
    sub: 'Kittiwake Bank, a savings bank, follows its own channels and 3 competitors’.',
    steps: [
      {
        title: 'Set it up',
        line: 'Which banks, as which customers, and what each answer is checked against.',
        chips: ['Your bank and any competitor', 'New saver · UK', 'Existing customer · UK', 'Says it’s AI to a person'],
        steps: [
          {
            title: 'Name the banks',
            line: 'Your own bank and each competitor, on the web or in the app.',
            example: 'Kittiwake names itself and 3 competitors: Dunmere, Sedgefield and Quaystone.',
          },
          {
            title: 'Pick who asks',
            line: 'The customer profiles and country to ask as. A new saver and a 3-year customer are often offered different rates.',
            example: 'A new saver in the UK, an existing customer after the bonus ends, and someone switching from another bank.',
          },
          {
            title: 'Say what to check against',
            line: 'Your rate page and your terms. An answer that disagrees with them becomes a finding, with both side by side.',
            example: 'The rate, fixed or variable, the notice period and the bonus end date.',
          },
        ],
      },
      {
        title: 'Obsession opens the accounts',
        line: 'And keeps them open, so every rate change and offer arrives as it happens.',
        screen: 'botcheck',
        chips: ['Its own inbox', 'Its own phone number', 'Its own browser', 'Says it’s AI'],
        steps: [
          {
            title: 'Account opening, step by step',
            line: 'Every form, the ID check and the emails after it, each with the time it arrived.',
            example: '1 Nov, 14:22 at Dunmere: “Your account is open”, sent after the ID check. At 48 hours: “Finish your switch”.',
          },
          {
            title: 'Signed-in rates beside public ones',
            line: 'The rate an existing customer sees once signed in, beside the one on the public page.',
            example: 'Sedgefield: 4.8% on the public page, 4.0% signed in as a 3-year customer.',
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
    heading: 'Rate tables show the public rate. Customers get another.',
    sub: 'Comparison sites stop at the public page, and panels sell a fixed list of banks behind a client login. The rest is found by staff opening accounts by hand, a few banks at a time.',
    items: [
      { title: 'Existing customer rates', line: 'What a saver is paid once the bonus ends, seen only signed in.' },
      { title: 'Offers after the form', line: 'A switching bonus shown only once the form is filled in.' },
      { title: 'Wrong answers in chat', line: 'A bot that calls a variable rate fixed, or gets a notice period wrong.' },
      { title: 'Messages that never come', line: 'The rate change notice or the bonus ending email that never went out.' },
    ],
    answer: 'Each finding is dated, with the screenshot, email or transcript behind it, kept for as long as you need it.',
  },

  outputs: {
    heading: 'What product, pricing and risk teams do with it.',
    groups: [
      {
        items: [
          {
            title: 'Price against what customers get',
            line: 'Not the rate on a comparison table.',
            example: 'Asked “Which banks pay existing savers less than new ones?”, Insights answered 3 of 5, by up to 1.1 points.',
          },
          {
            title: 'Catch a wrong answer the day it starts',
            line: 'Not when the complaints arrive.',
            example: 'The fixed rate answer reached the savings team’s webhook at 07:05 on Tuesday, the morning after a bot update.',
          },
          {
            title: 'Show what customers were told',
            line: 'A dated record of every answer, for your own monitoring and your board.',
            example: 'October: 40 questions a day in 3 channels, 4 wrong answers, each fixed within a day.',
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
      label: 'The recipe',
      title: 'Support bot check',
      line: 'The same questions to a support bot every day, each answer checked against the policy.',
      cta: { label: 'Learn more', to: '/recipes/support-bot-check' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'Kittiwake Bank, its competitors and their .example addresses, every rate, answer and figure here are made up.',

  faq: {
    heading: 'What banks and fintechs ask.',
    items: [
      {
        q: 'What does Obsession do for banks and fintechs?',
        a: 'Obsession records what banks and fintechs show only to their customers: account opening, the ID check, the emails after it, signed-in rates and offers, and what chat tells a saver. Each fact is dated, with its screenshot, email or transcript, for your own bank and your competitors. Look up one bank, or ask a question across many.',
      },
      {
        q: 'Where does the data come from?',
        a: 'From real accounts. Obsession’s agents open accounts, sign in and ask chat the way any customer can, from the customer profiles and countries you choose, and keep each account open for months. They never invent identity details, never sign in to an account that isn’t their own, and say they’re an AI when they talk to a person.',
      },
      {
        q: 'Does it help with Consumer Duty?',
        a: 'In the UK, the Consumer Duty asks firms to check that what they tell customers supports their understanding. Obsession gives you a dated record of what your channels said, answer by answer. It isn’t compliance advice, and what you report stays your call.',
      },
      {
        q: 'Who sees what we look up?',
        a: 'Only your team. Anyone can see that a bank is covered, and since when, but never who asked. Your own questions and their transcripts stay on an account that works only for you.',
      },
      {
        q: 'How often does it check?',
        a: 'The accounts stay open, so emails and rate changes arrive as they happen. Chat questions are asked every morning in this example, again after every bot update, or on any rhythm you set.',
      },
    ],
  },

  final: {
    heading: 'Which banks should we look up first?',
    sub: 'Early access includes API and MCP access, lookups of every company already covered, and up to 5 companies added for you, set up with the founders.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-banks-final',
      button: 'Request early access',
      interest: 'support-bot',
    },
  },
}

import type { UseCaseStudy } from '../types'

/* Journey checks for banks and fintechs (/use-cases/journey-checks-for-banks-and-fintechs), 5 Nov 2026: the second
   worked example outside stores (James, 5 Nov). A savings bank's product team has its chat, support and phone line
   asked the questions savers ask every morning, each answer checked against the rate page and the terms, and the same
   questions asked at 3 rivals through what anyone can use.
   The cast and its finding come from Home's wall (content/look.ts): Kittiwake Bank's chat calling the 4.6% easy access
   rate fixed when its own page says variable; its rivals are the wall's other banks (Dunmere, Sedgefield, Quaystone).
   Every name, rate and figure is invented and `fine` says so; there are no real runs at banks yet.
   Banks check identity, so at a rival an AI customer goes only as far as anyone can before an ID check (pages, chat,
   rate tools, the emails anyone can sign up for) and never invents identity details; at the reader's own bank it can
   use test accounts the bank provides. Consumer Duty is named in 1 answer as the reason UK banks keep this evidence,
   with no claim that it satisfies the rule.
   Drawn by the study system (pages/UseCase.tsx). Its 1 screen is the support bot check's (botcheck: chat says one
   thing, the policy another, caught at 07:02). Headings carry the job, not the words "AI customer" (James, 5 Nov). */

export const study: UseCaseStudy = {
  name: 'Journey checks for banks and fintechs',
  line: 'What chat, support and every page tell a customer, checked against the terms.',

  meta: {
    path: '/use-cases/journey-checks-for-banks-and-fintechs',
    title: 'Journey checks for banks and fintechs: what customers hear',
    description:
      'Send AI customers to your bank and your rivals: each asks chat and support what customers ask, keeps every email and flags any answer the terms contradict.',
    answer:
      'Obsession sends AI customers to a bank’s own channels and to its rivals’. Each asks chat, support and the phone line the questions real customers ask, keeps every email and text, and reads every rate and term on the pages behind them. Where 2 channels disagree, it comes back with both, side by side.',
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
    headline: 'Know what every channel tells a customer, every day.',
    sub: 'An AI customer asks your chat, your support and your phone line the questions real customers ask, keeps every email and text, and checks each answer against your rates and terms. When a channel says something the terms don’t, you get both, side by side.',
    example: { chips: ['Kittiwake Bank, a savings bank', '3 rivals', 'Chat, email, phone and pages'] },
    flow: [
      {
        label: 'What you name',
        title: 'Your channels and 3 rivals',
        items: ['Chat and the support bot', 'Help centre and phone line', 'Rate pages and terms', 'Rivals’ pages and chat'],
        foot: 'The questions customers ask',
      },
      {
        label: 'What it checks',
        title: 'Every answer against the terms',
        items: ['The rate, and whether it’s fixed', 'Fees, limits and notice', 'Who qualifies', 'What arrives after'],
        foot: 'Each with its transcript',
      },
      {
        label: 'Where it lands',
        title: 'Your product and risk teams',
        items: ['An alert when an answer is wrong', 'A monthly record of every answer', 'Your own AI agent'],
        foot: 'Dated and kept',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-banks-hero',
      button: 'Join the waitlist',
      interest: 'support-bot',
    },
  },

  how: {
    heading: 'You write the questions. They get asked everywhere, every morning.',
    sub: 'Kittiwake Bank checks what its chat, support and pages tell savers, and what 3 rivals tell theirs.',
    steps: [
      {
        title: 'Set it up',
        line: 'The channels, the questions and the terms each answer is checked against.',
        chips: ['Your channels, with your OK', 'Rivals: only what anyone can use', 'Says it’s AI to a person', 'Never invents identity details'],
        steps: [
          {
            title: 'Name the channels',
            line: 'Your chat, support bot, help centre, phone line and app. At your own bank it can use test accounts you provide; at a rival, it goes only where anyone can before an ID check.',
            example: 'Kittiwake names its web chat, app chat, phone line and help centre, and 3 rivals: Dunmere, Sedgefield and Quaystone.',
          },
          {
            title: 'Write the questions customers ask',
            line: 'In their words, not yours: from your complaints, your search terms or your own list. Each question is asked the same way in every channel.',
            example: '40 questions on savings: Is the 4.6% rate fixed? Can I take money out without losing interest? What happens when the bonus ends?',
          },
          {
            title: 'Choose what each answer is checked against',
            line: 'The rate page and the terms. Fixed rules give each answer its verdict, so the same answer always gets the same one.',
            example: 'The rate, fixed or variable, the notice period, the withdrawal limit and the bonus end date.',
          },
        ],
      },
      {
        title: 'Obsession asks, every day',
        line: 'Every morning at 07:00 in this example, and again after every update to the bot.',
        screen: 'botcheck',
        chips: ['Its own inbox', 'Its own phone number', 'Its own browser', 'Says it’s AI'],
        steps: [
          {
            title: 'The same questions in every channel',
            line: 'The AI customer asks each question in chat, by email and on the phone, and keeps every answer word for word, with its time.',
            example: 'Tue 07:04, web chat: “Is the 4.6% rate fixed?” “Yes, 4.6% is fixed for 12 months.”',
          },
          {
            title: 'Each answer against the terms',
            line: 'It reads the rate page and the terms the answer should match. Where they disagree, both go into 1 finding.',
            example: 'The Easy Access Saver page says 4.6% variable. The chat has called it fixed since Monday’s bot update.',
          },
          {
            title: 'What rivals tell their customers',
            line: 'The same questions at each rival, through the chat and pages anyone can use, so you see how their rates and their answers move.',
            example: 'Quaystone raised its easy access rate to 4.75% on Thursday. Its chat quoted 4.5% until Friday.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Your terms are signed off. What your channels say about them isn’t.',
    sub: 'A rate change goes through approval. The chat answer about it, the help article and the reply a support agent copies don’t, and 1 bot update can change all of them overnight.',
    items: [
      { title: 'A wrong answer in chat', line: 'A bot that calls a variable rate fixed, or gets a notice period wrong.' },
      { title: 'Pages out of step', line: 'A help article that still quotes last month’s rate.' },
      { title: 'Messages that never come', line: 'The rate change notice or the bonus ending email that never went out.' },
      { title: 'Rivals’ moves', line: 'A rival’s new rate, and what its own channels tell customers about it.' },
    ],
    answer: 'Each finding is dated, with the transcript, the page and the term it broke, kept for as long as you need it.',
  },

  split: {
    yours: {
      label: 'You keep',
      heading: 'Your products, your terms and your decisions.',
      items: ['Your products, rates and terms', 'The questions, and what counts as a wrong answer', 'Every fix, and who signs it off', 'What you report, and to whom'],
    },
    ours: {
      label: 'Obsession runs',
      heading: 'The asking, the transcripts and the record.',
      items: [
        'An AI customer for each channel, with its own inbox, phone number and browser',
        'The same questions every day, and after every bot update',
        'Every answer kept word for word, with its time',
        'The page and the term behind every finding',
      ],
    },
  },

  outputs: {
    heading: 'What product and risk teams do with it.',
    groups: [
      {
        items: [
          {
            title: 'Catch a wrong answer the day it starts',
            line: 'Not when the complaints arrive.',
            example: 'The fixed rate answer reached the savings team at 07:05 on Tuesday, the morning after the bot update.',
          },
          {
            title: 'Show what customers were told',
            line: 'A dated record of every answer, for your own monitoring and your board.',
            example: 'October: 40 questions a day in 3 channels, 4 wrong answers, each fixed within a day.',
          },
          {
            title: 'Check a change before customers do',
            line: 'Ask every question again after a rate change or a bot update.',
            example: 'After the 1 November rate cut, all 40 answers matched the new rate by 09:00.',
          },
          {
            title: 'See what rivals tell their customers',
            line: 'Their rates, and what their own chat says about them.',
            example: 'Quaystone’s chat quoted its old rate for a day after the change.',
          },
        ],
      },
    ],
  },

  more: {
    recipe: {
      label: 'The recipe',
      title: 'Support bot check',
      line: 'The same questions to your support bot every day, each answer checked against your policy.',
      cta: { label: 'Learn more', to: '/recipes/support-bot-check' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample output',
      line: 'A UK store checked in September 2026: 1 basket and 1 checkout left, and nobody wrote to either in 48 hours.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'Kittiwake Bank, its rivals and their .example addresses, every rate, answer and figure here are made up.',

  faq: {
    heading: 'What banks and fintechs ask.',
    items: [
      {
        q: 'What does Obsession do for banks and fintechs?',
        a: 'Obsession sends AI customers to a bank’s own channels and to its rivals’. Each asks chat, support and the phone line the questions real customers ask, keeps every email and text, and reads every rate and term on the pages behind them. Where 2 channels disagree, it comes back with both, side by side.',
      },
      {
        q: 'Does it open accounts at other banks?',
        a: 'No. At a rival it goes only as far as anyone can before an ID check: its pages, its chat, its rate tools and the emails anyone can sign up for. It never invents identity details. At your own bank, it can use test accounts you provide.',
      },
      {
        q: 'Does it help with Consumer Duty?',
        a: 'In the UK, the Consumer Duty asks firms to check that what they tell customers supports their understanding. Obsession gives you a dated record of what your channels actually said, answer by answer. It isn’t compliance advice, and what you report stays your call.',
      },
      {
        q: 'Does it talk to our human agents?',
        a: 'Only with your OK, and it says it’s an AI when it talks to a person.',
      },
      {
        q: 'How often does it run?',
        a: 'Every morning in this example, again after every bot update, or any rhythm you set.',
      },
      {
        q: 'Who sees the transcripts?',
        a: 'Only your team. Your questions, transcripts and findings are yours alone.',
      },
    ],
  },

  final: {
    heading: 'Try it on 40 questions.',
    sub: 'Join the waitlist, and we’ll ask your chat and 2 rivals’ 40 questions for 14 days, with every answer checked against the terms.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-banks-final',
      button: 'Join the waitlist',
      interest: 'support-bot',
    },
  },
}

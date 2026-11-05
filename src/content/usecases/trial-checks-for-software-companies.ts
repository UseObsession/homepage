import type { UseCaseStudy } from '../types'

/* Trial checks for software companies (/use-cases/trial-checks-for-software-companies), 5 Nov 2026: the first worked
   example outside stores, so the use cases stop reading as ecommerce only (James, 5 Nov: the engine is general, the
   proof is stores). A team calendar app's growth team starts its own 14 day trial every morning, and 5 rivals', and
   hears the day a welcome link dies, an email stops or a rival sends a private offer.
   The cast and its 2 findings come from Home's wall (content/look.ts): Larkfield's welcome email whose every link opens
   a closed staging site, and Quillon's 40% off for trial users that its pricing page never shows. Every name, email and
   figure is invented and `fine` says so; there are no real runs at software companies yet.
   Drawn by the study system (pages/UseCase.tsx). Its 1 screen is the trial teardown's (battlecard: rivals' trials, day
   by day). Headings carry the job, not the words "AI customer" (James, 5 Nov: Home stacked them until they said
   nothing); the sub, the steps and the questions name them. */

export const study: UseCaseStudy = {
  name: 'Trial checks for software companies',
  line: 'Every welcome, nudge and offer a new user gets, from your trial and your rivals’.',

  meta: {
    path: '/use-cases/trial-checks-for-software-companies',
    title: 'Trial checks for software companies: what new users get',
    description:
      'Send AI customers to your trial and your rivals’: each signs up, keeps every email, nudge and offer, and flags a dead link or an email that never came.',
    answer:
      'Obsession sends AI customers to a software company’s own sign up and to its rivals’, each with its own inbox, phone number and browser. Each one starts a trial, opens every email and link that follows, and stays to the end of the trial. Every dead link, missing email and rival offer comes back with its proof.',
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
    headline: 'Start your own trial every day, and your rivals’ too.',
    sub: 'An AI customer signs up as a new user at your product and at every rival you name. It opens every welcome email, nudge and upgrade offer, clicks every link, and tells you the day one breaks, goes quiet or gets beaten.',
    example: { chips: ['Larkfield, a team calendar app', '5 rivals', '14 day trials'] },
    flow: [
      {
        label: 'What you name',
        title: 'Your trial and 5 rivals',
        items: ['Your sign up page', 'Each rival’s free trial', 'The plan to start on'],
        foot: 'Web, iOS or Android',
      },
      {
        label: 'What it keeps',
        title: 'Every message for 14 days',
        items: ['Welcome and onboarding emails', 'Trial ending nudges', 'Upgrade and win back offers', 'Every link, opened'],
        foot: 'Each with its screenshot',
      },
      {
        label: 'Where it lands',
        title: 'Where your team works',
        items: ['A Slack alert the day one breaks', 'A Monday digest', 'Your own AI agent'],
        foot: 'Nothing to install',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-software-hero',
      button: 'Join the waitlist',
      interest: 'trial',
    },
  },

  how: {
    heading: 'You name the trials. A new user starts each one, every morning.',
    sub: 'Larkfield, a team calendar app, checks its own 14 day trial and 5 rivals’.',
    steps: [
      {
        title: 'Set it up',
        line: 'Which sign ups, how often, and what counts as a break.',
        chips: ['A fresh sign up every morning', 'Every link opened', 'Says it’s AI to a person', 'Pays only on a card you fund'],
        steps: [
          {
            title: 'Name the trials',
            line: 'Your own sign up and each rival’s, on the web or in the app. Start on the free plan, or on a paid trial with a card you fund.',
            example: 'Larkfield names its own sign up and 5 rivals: Quillon, Velloway, Hollin, Wrenfield and Fieldmark.',
          },
          {
            title: 'Say what a good trial looks like',
            line: 'The emails you expect and when: a welcome in minutes, a tip on day 2, a reminder before the trial ends. Anything late, missing or broken is a finding.',
            example: 'A welcome within 10 minutes, onboarding on days 1, 3 and 7, and a reminder 3 days before the end.',
          },
          {
            title: 'Choose where it lands',
            line: 'An alert the day something breaks, a digest of what rivals sent, or both.',
            example: 'Breaks go to #growth in Slack. The rivals’ emails and offers go into a Monday digest.',
          },
        ],
      },
      {
        title: 'Obsession runs the trials',
        line: '14 days in this example, with a new sign up every morning.',
        screen: 'battlecard',
        chips: ['Its own inbox', 'Its own phone number', 'Its own browser', 'Says it’s AI'],
        steps: [
          {
            title: 'A new user every morning',
            line: 'Each sign up gets its own inbox, phone number and browser, and goes through the trial as a real user would: it confirms the email, follows the onboarding and comes back on the days you set.',
            example: 'Tue 09:02: signed up at Larkfield. 09:03: the welcome email. 09:04: its Open the app button leads to staging.larkfield.example, a closed site.',
          },
          {
            title: 'Every link, opened',
            line: 'It clicks every button and link in every email and checks where each one lands. A closed page, a login wall or a page that moved is a finding, with the email and the page side by side.',
            example: 'All 3 links in the welcome email open the closed staging site. Every sign up since Monday got the same email.',
          },
          {
            title: 'Your rivals, the same way',
            line: 'Each rival gets its own new user too, so you see every email, discount and trial extension it sends, including the ones never on its pricing page.',
            example: 'Day 12 at Quillon: 40% off the first year, for trial users only. Quillon’s pricing page shows no offer.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Your trial emails go to new users. Nobody on your team is one.',
    sub: 'The welcome email was tested once, the day it went live. Since then a domain moved, a plan was renamed and a tool was swapped, and the only people who see what changed are the users who quietly leave.',
    items: [
      { title: 'Dead links', line: 'A button in the welcome email that opens a staging site, a login wall or a page that moved.' },
      { title: 'Emails that never come', line: 'The day 3 tip or the trial ending reminder that stopped after a tool change.' },
      { title: 'The wrong plan', line: 'A price or a limit in an email that no longer matches the pricing page.' },
      { title: 'Rivals’ private offers', line: 'The discount or extra week a rival sends only to its trial users.' },
    ],
    answer: 'Each finding comes back with the email as it arrived, the page it led to and the time of both.',
  },

  split: {
    yours: {
      label: 'You keep',
      heading: 'Your product, your emails and your fixes.',
      items: ['Your onboarding and the tools that send it', 'What counts as a break', 'The fix, and who ships it', 'Your pricing and your offers'],
    },
    ours: {
      label: 'Obsession runs',
      heading: 'The new users, the inboxes and the waiting.',
      items: [
        'A new AI customer every morning, with its own inbox, phone number and browser',
        'The sign ups, the onboarding and every link opened',
        'Inboxes kept open to the end of each trial',
        'The email and the page behind every finding',
      ],
    },
  },

  outputs: {
    heading: 'What growth teams do with it.',
    groups: [
      {
        items: [
          {
            title: 'Fix a break the day it starts',
            line: 'Not the month churn moves.',
            example: 'The dead welcome links reached #growth at 09:05 on Tuesday, and were fixed by 11:00.',
          },
          {
            title: 'Check a release didn’t break onboarding',
            line: 'Run the trial from sign up again after every release.',
            example: 'After the switch to a new email tool, the day 3 email stopped. It was back the next morning.',
          },
          {
            title: 'Match a rival’s offer, or don’t',
            line: 'What rivals send their trial users, by day.',
            example: 'Quillon: 40% off the first year on day 12. Hollin: 7 more days on day 13.',
          },
          {
            title: 'Benchmark your onboarding',
            line: 'How many emails, how soon and what each asks for, against 5 rivals.',
            example: 'Larkfield sends 4 emails in 14 days. Its rivals send 6 to 11.',
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
      title: 'Sample output',
      line: 'A UK store checked in September 2026: 1 basket and 1 checkout left, and nobody wrote to either in 48 hours.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'Larkfield, its rivals and their .example addresses, every email, offer and figure here are made up.',

  faq: {
    heading: 'What software teams ask.',
    items: [
      {
        q: 'What does Obsession do for software companies?',
        a: 'Obsession sends AI customers to a software company’s own sign up and to its rivals’, each with its own inbox, phone number and browser. Each one starts a trial, opens every email and link that follows, and stays to the end of the trial. Every dead link, missing email and rival offer comes back with its proof.',
      },
      {
        q: 'Will the AI customers show up in our numbers?',
        a: 'Only if you let them. Each one signs up from an address you can recognise, so you can leave them out of your sign ups, trials and churn.',
      },
      {
        q: 'Is it allowed to start a rival’s trial?',
        a: 'An AI customer does only what any new user can, through the sign up anyone can use, and says it’s an AI when it talks to a person. Our guide sets out the law in the US, the UK and the EU; it isn’t legal advice.',
        link: { label: 'Is it legal to mystery shop competitors?', to: '/blog/is-it-legal-to-mystery-shop-competitors' },
      },
      {
        q: 'Does it work for apps as well as websites?',
        a: 'Yes. It signs up on the web or in your iOS or Android app, and follows every email and text that comes after.',
      },
      {
        q: 'Does it pay for anything?',
        a: 'Only if you choose. A paid trial runs on a card you fund, never on fake payment details.',
      },
      {
        q: 'How often does it run?',
        a: 'A new sign up every morning in this example, again after every release, or any rhythm you set.',
      },
    ],
  },

  final: {
    heading: 'Try it on your own trial.',
    sub: 'Join the waitlist, and we’ll run your trial and 3 rivals’ for 14 days: every email, every link and every offer, with proof.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-software-final',
      button: 'Join the waitlist',
      interest: 'trial',
    },
  },
}

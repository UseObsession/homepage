import type { ReferencePage } from '../reference'

/* /glossary/a2p-messaging: the definition query. Facts from Twilio's A2P 10DLC page, read 24 Nov 2026. */
const DEFINITION =
  'A2P messaging, short for application-to-person messaging, is any text sent from software, such as an app, a platform or an AI agent, to a person’s phone, as opposed to a text between two people.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'A2P messaging',
  line: 'Texts sent from software to a person’s phone, as opposed to a text between two people.',
  meta: {
    path: '/glossary/a2p-messaging',
    title: 'What is A2P messaging? A2P SMS against person-to-person',
    description:
      'A2P messaging is any text sent from software to a person, not from one person to another. What A2P SMS means, how P2P differs and why carriers register it.',
    answer: `${DEFINITION} US carriers treat every text sent from a messaging provider’s number as A2P and ask the sender to register.`,
    ogImage: '/og/glossary-a2p-messaging.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'A2P messaging', path: '/glossary/a2p-messaging' },
    ],
  },
  title: 'A2P messaging: texts that come from software, not a person',
  dek: 'A reminder, a delivery update and a sign-in code are all A2P texts. Carriers handle them differently from a text between friends.',
  primaryKeyword: 'a2p messaging',
  keywords: ['a2p messaging meaning', 'a2p sms', 'application to person messaging', 'a2p vs p2p', 'a2p messaging providers'],
  checked: '2026-11-24',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'A2P messaging',
    alternateName: ['application-to-person messaging', 'A2P SMS'],
    definition: DEFINITION,
  },
  art: {
    kind: 'report',
    title: 'Two texts, two kinds of traffic',
    period: 'Example, 24 Nov 2026',
    cols: ['Sent from', 'To', 'Kind'],
    rows: [
      { name: '“Running late, 10 minutes”', cells: ['A person’s phone', 'A friend', 'P2P'], tone: 'info' },
      { name: '“Your table is booked for 7:30”', cells: ['An app, through a provider', 'A diner', 'A2P'], tone: 'ok' },
      { name: '“Your code is 551204”', cells: ['A sign-up form', 'A new user', 'A2P'], tone: 'ok' },
      { name: '“Reply STOP to opt out”', cells: ['A shop’s texting platform', 'A customer', 'A2P'], tone: 'ok' },
    ],
    notes: ['Harrowgate and the other senders are invented. The test is who sends: a person, or software.'],
  },
  blocks: [
    { kind: 'h2', id: 'what-a2p-means', text: 'What A2P messaging means' },
    {
      kind: 'p',
      text: '[Twilio’s A2P 10DLC page](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc) defines A2P as traffic where a person receives messages from an application, and P2P as traffic between individuals. It adds that carriers treat all messages sent from a Twilio number as A2P. A2P SMS is the text version, and it also covers picture messages.',
    },
    { kind: 'h2', id: 'why-carriers-care', text: 'Why carriers register A2P traffic' },
    {
      kind: 'p',
      text: 'Software can send far more texts than a person, so US carriers want to know who is sending and why. On ordinary 10-digit numbers that is [10DLC](/glossary/10dlc). Toll-free numbers go through [toll-free verification](/glossary/toll-free-verification). Twilio says unregistered 10DLC traffic costs extra carrier fees, while registered traffic faces less filtering and gets higher throughput.',
    },
    { kind: 'h2', id: 'why-it-matters-to-an-agent', text: 'Why A2P matters to an AI agent' },
    {
      kind: 'p',
      text: 'Every text an AI agent sends or receives through code is A2P, even if it reads like a message from a person. That brings the carrier rules for registration and for honouring [STOP](/glossary/sms-stop) replies.',
    },
    {
      kind: 'p',
      text: 'Obsession gives each agent its own [phone number](/phone). Texts in and out reach your app by webhook, and the US texting registration is filed for you. [SMS for AI agents](/blog/sms-for-ai-agents) compares the ways to send.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is the difference between A2P and P2P messaging?',
          a: 'A2P is sent from an application to a person. P2P is sent between two people on their own phones. Carriers apply registration and filtering rules to A2P.',
        },
        {
          q: 'Is a verification code an A2P message?',
          a: 'Yes. A code sent by a sign-up form to a user’s phone is application-to-person traffic.',
          link: { label: 'What is an OTP?', to: '/glossary/one-time-password' },
        },
        {
          q: 'Do I need to register to send A2P texts in the US?',
          a: 'On 10-digit numbers, yes, through 10DLC. This is general information, not legal advice.',
          link: { label: '10DLC registration, step by step', to: '/blog/10dlc-registration' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'A2P 10DLC',
      publisher: 'Twilio',
      url: 'https://www.twilio.com/docs/messaging/compliance/a2p-10dlc',
    },
  ],
  related: [
    '/glossary/10dlc',
    '/glossary/toll-free-verification',
    '/phone',
    '/glossary/sms-stop',
    '/glossary/one-time-password',
    'sms-for-ai-agents',
    '10dlc-registration',
  ],
}

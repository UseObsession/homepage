import type { ReferencePage } from '../reference'

/* /glossary/toll-free-verification: the definition query. Facts from Twilio's toll-free onboarding doc, read 24 Nov
   2026. Each provider sets its own review time, so none is stated. US and Canada; general information. */
const DEFINITION =
  'Toll-free verification is the review a messaging provider runs on a business before its toll-free number (an 8XX number) may send texts to the US and Canada.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Toll-free verification',
  line: 'The review a business passes before its toll-free number may send texts to the US and Canada.',
  meta: {
    path: '/glossary/toll-free-verification',
    title: 'Toll-free verification: what it is and why texts need it',
    description:
      'Toll-free verification is the review that lets a toll-free number text the US and Canada. What a business submits and how it differs from 10DLC.',
    answer: `${DEFINITION} Twilio says an unverified toll-free number can’t send SMS to the United States and Canada.`,
    ogImage: '/og/glossary-toll-free-verification.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Toll-free verification', path: '/glossary/toll-free-verification' },
    ],
  },
  title: 'Toll-free verification: the check before a toll-free number can text',
  dek: 'A toll-free number can answer calls straight away. Texting the US and Canada from it needs a review of who you are and what you send.',
  primaryKeyword: 'toll free verification',
  keywords: ['toll free verification', 'toll-free verification required', 'toll free verification twilio', 'toll free sms', '8xx number texting'],
  checked: '2026-11-24',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'Toll-free verification',
    alternateName: ['TFV', 'toll-free SMS verification'],
    definition: DEFINITION,
  },
  art: {
    kind: 'flow',
    title: 'corbel.example · toll-free number, 1 855 555 0190',
    status: { tone: 'late', text: 'In review' },
    steps: [
      { label: 'Business details sent', detail: 'Corbel Dental, address, website', tone: 'ok' },
      { label: 'Use case described', detail: 'Appointment reminders, with the opt-in flow', tone: 'ok' },
      { label: 'Provider reviews it', detail: 'In the verification queue', tone: 'late' },
      { label: 'Texts to the US and Canada', detail: 'Blocked until approved', tone: 'fail' },
    ],
    foot: 'Corbel is an invented company and the number is in the range kept for fiction.',
  },
  blocks: [
    { kind: 'h2', id: 'what-it-is', text: 'What toll-free verification is' },
    {
      kind: 'p',
      text: '[Twilio’s toll-free onboarding guide](https://www.twilio.com/docs/messaging/compliance/toll-free/console-onboarding) says toll-free numbers can’t send SMS to the United States and Canada until verification is completed and approved. The business sends its contact details, an address, its use case with the opt-in flow and a website, then agrees to the terms. Other providers run the same kind of review in their own way.',
    },
    { kind: 'h2', id: 'against-10dlc', text: 'Toll-free verification against 10DLC' },
    {
      kind: 'p',
      text: 'Both exist so carriers know who is texting their customers. [10DLC](/glossary/10dlc) covers ordinary 10-digit local numbers, with a brand and a campaign filed with The Campaign Registry. Toll-free numbers sit outside it and go through this review instead. Both carry [A2P](/glossary/a2p-messaging) traffic, so a [STOP](/glossary/sms-stop) reply must still be honoured.',
    },
    {
      kind: 'p',
      text: 'The guide gives no review time. It does say a rejected submission that can be resubmitted has 7 days to go back for priority review. [SMS for AI agents](/blog/sms-for-ai-agents) sets toll-free beside the other ways to text, and the [10DLC guide](/blog/10dlc-registration) covers the local-number route.',
    },
    { kind: 'h2', id: 'why-it-matters-to-an-agent', text: 'Why it matters to an AI agent' },
    {
      kind: 'p',
      text: 'An agent that texts from a toll-free number is blocked until the review is done, so it is the first thing to check before launch. Obsession’s [phone numbers](/phone) are US local numbers an agent owns, and Obsession files their US texting registration (10DLC) for you.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'Is toll-free verification required?',
          a: 'To text the US and Canada from a toll-free number, Twilio says yes. Other providers have their own requirement, so check yours.',
        },
        {
          q: 'How long does toll-free verification take?',
          a: 'It depends on the provider and its queue, and Twilio’s guide gives no fixed time. A rejected submission that can be resubmitted has 7 days to go back for priority review.',
        },
        {
          q: 'What is the difference between toll-free verification and 10DLC?',
          a: 'Toll-free verification is for 8XX numbers, and 10DLC is for ordinary 10-digit local numbers. Each checks who is texting and why. This is general information, not legal advice.',
          link: { label: 'What is 10DLC?', to: '/glossary/10dlc' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Toll-free verification onboarding',
      publisher: 'Twilio',
      url: 'https://www.twilio.com/docs/messaging/compliance/toll-free/console-onboarding',
    },
  ],
  related: [
    '/phone',
    '/glossary/10dlc',
    '/glossary/a2p-messaging',
    '/glossary/sms-stop',
    '/glossary/one-time-password',
    'sms-for-ai-agents',
    '10dlc-registration',
  ],
}

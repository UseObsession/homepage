import type { ReferencePage } from '../reference'

/* /glossary/10dlc: the definition query. Registration steps stay with /blog/10dlc-registration. Facts from Twilio's A2P
   10DLC page and The Campaign Registry's guides as read for that guide, 24 Nov 2026. US rules; general information. */
const DEFINITION =
  '10DLC, short for 10-digit long code, is the US system that lets a business send application-to-person texts from an ordinary 10-digit phone number once carriers have checked who it is and what it sends.'

export const ref: ReferencePage = {
  kind: 'term',
  name: '10DLC',
  line: 'The US system that lets a business text from a 10-digit number once carriers have checked who it is and what it sends.',
  meta: {
    path: '/glossary/10dlc',
    title: 'What is 10DLC? US business texting rules in plain words',
    description:
      '10DLC is the US system that lets a business text from an ordinary 10-digit number after carriers check it. What it is and who must register.',
    answer: `${DEFINITION} Anyone sending texts from an application over a 10DLC number to the US has to register, and unregistered traffic is filtered or charged extra.`,
    ogImage: '/og/glossary-10dlc.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: '10DLC', path: '/glossary/10dlc' },
    ],
  },
  title: '10DLC: the US registration behind business texting from a local number',
  dek: 'US carriers want to know who is texting their customers and why. 10DLC is how an ordinary 10-digit number earns that trust.',
  primaryKeyword: '10dlc',
  keywords: ['what is 10dlc', '10dlc meaning', '10dlc number', '10dlc compliance', '10dlc campaign', '10 digit long code'],
  checked: '2026-11-24',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: '10DLC',
    alternateName: ['10-digit long code', 'A2P 10DLC'],
    definition: DEFINITION,
  },
  art: {
    kind: 'flow',
    title: 'corbel.example · texting a US customer',
    status: { tone: 'ok', text: 'Approved' },
    steps: [
      { label: 'Brand registered', detail: 'Corbel Dental, legal name and tax details', tone: 'ok' },
      { label: 'Campaign registered', detail: 'Appointment reminders, with sample texts and opt-in', tone: 'ok' },
      { label: 'Number attached', detail: '+1 202 555 0143 joins the campaign', tone: 'ok' },
      { label: 'Text delivered', detail: '“Your visit is tomorrow at 10:30. Reply STOP to opt out.”', tone: 'ok' },
    ],
    foot: 'Corbel is an invented company. Without the first three steps, carriers may filter the fourth.',
  },
  blocks: [
    { kind: 'h2', id: 'what-10dlc-is', text: 'What 10DLC is' },
    {
      kind: 'p',
      text: '[Twilio’s A2P 10DLC page](https://www.twilio.com/docs/messaging/compliance/a2p-10dlc) calls it the US carrier standard that ensures text traffic sent to US users over long code numbers is verified and consensual. A long code is an ordinary 10-digit number, the kind a local shop would use, as against a toll-free or short code number. A business registers its brand, then each use of texting as a campaign, and attaches its numbers to a campaign.',
    },
    {
      kind: 'p',
      text: 'The registry behind this is [The Campaign Registry](https://www.campaignregistry.com/), where messaging providers file brands and campaigns for their customers. The steps, fees and common rejections are in the [10DLC registration guide](/blog/10dlc-registration).',
    },
    { kind: 'h2', id: 'who-must-register', text: 'Who must register' },
    {
      kind: 'p',
      text: 'Twilio says anyone sending texts or picture messages from an application over a 10DLC number to the US must register, including individuals and hobbyists. Toll-free and short code numbers sit outside 10DLC and have their own checks, such as [toll-free verification](/glossary/toll-free-verification). Senders that skip registration pay additional carrier fees on unregistered traffic, and registered traffic faces less filtering and gets higher throughput.',
    },
    { kind: 'h2', id: 'why-it-matters-to-an-agent', text: 'Why 10DLC matters to an AI agent' },
    {
      kind: 'p',
      text: 'An agent that texts people from a US number is application-to-person traffic, which is what 10DLC covers. Without registration its texts can be blocked, and replies such as [STOP](/glossary/sms-stop) must be honoured.',
    },
    {
      kind: 'p',
      text: 'Obsession’s [phone numbers](/phone) are US numbers an agent owns, and we file the US texting registration when you add one, at the fixed price on the [pricing page](/pricing). [SMS for AI agents](/blog/sms-for-ai-agents) sets it beside the other ways to text.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What does 10DLC stand for?',
          a: '10-digit long code: an ordinary 10-digit phone number used by a business to send texts, as opposed to a toll-free or short code number.',
        },
        {
          q: 'Do I need 10DLC to send verification codes?',
          a: 'Twilio says a sender that only sends verification texts from 10DLC numbers can use its Verify product instead of registering. Check your own provider’s rule.',
        },
        {
          q: 'How do I register for 10DLC?',
          a: 'Your messaging provider files your brand and campaign with The Campaign Registry. The steps and fees are in our registration guide. This is general information, not legal advice.',
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
    {
      title: 'The Campaign Registry',
      publisher: 'The Campaign Registry',
      url: 'https://www.campaignregistry.com/',
    },
  ],
  related: [
    '/blog/10dlc-registration',
    '/phone',
    '/glossary/a2p-messaging',
    '/glossary/toll-free-verification',
    '/glossary/sms-stop',
    '/glossary/one-time-password',
    'sms-for-ai-agents',
  ],
}

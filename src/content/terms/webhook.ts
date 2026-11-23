import type { ReferencePage } from '../reference'

/* /glossary/webhook: for a developer or a no-code builder. Facts from GitHub's webhook docs ("About webhooks" and
   "Validating webhook deliveries"), read 24 Nov 2026. Obsession lines come from /developers (one signed webhook, every
   event). The picture is one delivery at an invented app. */
const DEFINITION =
  'A webhook is a message one system sends to a web address you choose, as soon as an event happens, so you don’t have to keep asking whether anything is new.'

export const ref: ReferencePage = {
  kind: 'term',
  name: 'Webhook',
  line: 'A message sent to your web address the moment an event happens, instead of you asking for updates.',
  meta: {
    path: '/glossary/webhook',
    title: 'What is a webhook? Webhook vs API and the endpoint',
    description:
      'A webhook is a message sent to your URL the moment an event happens. How it differs from polling an API, what the endpoint is and how a signature helps.',
    answer: `${DEFINITION} The system sending it makes an HTTP request to your endpoint with data about the event, and your server acts on it.`,
    ogImage: '/og/glossary-webhook.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Glossary', path: '/glossary' },
      { name: 'Webhook', path: '/glossary/webhook' },
    ],
  },
  title: 'Webhook: an event pushed to your URL as it happens',
  dek: 'An API waits until you ask. A webhook tells you. For an agent that has to react to a reply, a text or a code, that is the difference between answering at once and finding out later.',
  primaryKeyword: 'what is a webhook',
  keywords: ['what is a webhook', 'webhook vs api', 'webhook endpoint', 'webhook meaning', 'webhook event'],
  checked: '2026-11-24',
  readingMinutes: 3,
  reader: 'developers',
  term: {
    name: 'Webhook',
    alternateName: ['web callback', 'HTTP callback'],
    definition: DEFINITION,
  },
  art: {
    kind: 'log',
    title: 'Webhook delivery · app.northwind.example',
    who: 'Your endpoint, receiving one event',
    rows: [
      { time: '10:02:00', text: 'Event happens: a reply lands in an inbox', detail: 'Type: email.received', tone: 'info' },
      { time: '10:02:00', text: 'POST sent to https://app.northwind.example/hooks', detail: 'Body is JSON with the event’s data', tone: 'info' },
      { time: '10:02:00', text: 'Signature header checked against your secret', detail: 'Match, so the sender is who it says', tone: 'ok' },
      { time: '10:02:01', text: 'Endpoint answers 200', detail: 'Delivery counted as received', tone: 'ok' },
      { time: '10:02:01', text: 'Your agent reads the reply and acts', detail: 'Within about a second', tone: 'ok' },
    ],
    foot: 'Northwind is an invented company. Nobody asked the sender whether anything was new.',
  },
  blocks: [
    { kind: 'h2', id: 'what-a-webhook-is', text: 'What a webhook is' },
    {
      kind: 'p',
      text: 'GitHub’s documentation [About webhooks](https://docs.github.com/en/webhooks/about-webhooks) says webhooks let you subscribe to events and automatically receive a delivery of data at your server when they occur. You give the sender a URL once. When a subscribed event happens, it sends an HTTP request with data about the event to that URL, and your server acts on it.',
    },
    { kind: 'h2', id: 'webhook-vs-api', text: 'Webhook versus API' },
    {
      kind: 'p',
      text: 'With an API you call the other system and ask. Asking repeatedly to see whether anything changed is called polling. GitHub’s page says webhooks need less effort and fewer resources than polling, scale better when you watch many things, and give near real-time updates. The two work together: a webhook says that something happened, and an API call fetches the full detail or takes an action.',
    },
    { kind: 'h2', id: 'the-endpoint-and-the-signature', text: 'The endpoint and the signature' },
    {
      kind: 'p',
      text: 'The endpoint is the URL on your server that receives the request. Because anyone could post to it, senders sign each delivery. GitHub, for one, sends a hash of the payload made with your secret in the `X-Hub-Signature-256` header, and its guide on [validating deliveries](https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries) tells your server to calculate its own and compare the two, with a constant-time comparison. Other senders use their own header names, so read each one’s docs.',
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents, through one API and one bill. Developers subscribe once with a signed [webhook](/developers#webhooks) and receive every event from every piece, such as an email received or a text received, and every event also lands in the event log. The same events can start Zapier, Make and n8n flows.',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is a webhook endpoint?',
          a: 'The URL on your own server that the sender posts events to. It has to be reachable from the internet, answer quickly and check the signature before it trusts the body.',
        },
        {
          q: 'Is a webhook the same as an API?',
          a: 'No. An API is how you ask another system for data or ask it to act. A webhook is how that system tells you something happened. Most products offer both.',
        },
        {
          q: 'What happens if my server is down when a webhook is sent?',
          a: 'It depends on the sender. Some retry for a while and some don’t, so check its docs. Reading the event log by cursor afterwards lets you catch up on anything you missed.',
          link: { label: 'How events reach you', to: '/developers#delivery' },
        },
      ],
    },
  ],
  sources: [
    {
      title: 'About webhooks',
      publisher: 'GitHub Docs',
      url: 'https://docs.github.com/en/webhooks/about-webhooks',
    },
    {
      title: 'Validating webhook deliveries',
      publisher: 'GitHub Docs',
      url: 'https://docs.github.com/en/webhooks/using-webhooks/validating-webhook-deliveries',
    },
  ],
  related: [
    '/developers',
    '/email',
    '/phone',
    '/messaging',
    '/glossary/model-context-protocol',
    '/glossary/ai-agent-harness',
    '/glossary/ai-agent',
  ],
}

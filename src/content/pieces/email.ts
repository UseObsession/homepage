import { piecePaths } from '../piecePaths'
import { prices } from '../prices'
import type { PiecePage } from './types'

/* Email (/email), 21 Nov 2026: inboxes for AI agents. One call makes an inbox; the agent sends and receives, threads and
   attachments are kept, codes and confirm links are read out for it, and each new email reaches the developer's webhook.
   Written for US agent builders, for teams who take only this piece as much as for those who take them all. Prices are
   read from prices.ts, never retyped. */

const sub =
  'Obsession’s email API for AI agents gives each agent its own inbox in one call. The agent sends and receives email, keeps every thread and attachment, and your app hears about each new message the moment it lands.'

const code = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// An inbox of its own, ready to send and receive
const inbox = await obsession.inboxes.create()

// Send from inbox.address
await inbox.send({
  to: "maria@larkfield.example",
  subject: "Your refund is on its way",
  text: "We sent $42.00 back to your card this morning.",
})

// Each reply reaches your webhook, in its thread
await obsession.events.subscribe({
  url: "https://your-app.example/hooks/email",
  events: ["email.received"],
})`

export const email: PiecePage = {
  id: 'email',
  name: 'Email',
  meta: {
    path: piecePaths.email,
    title: 'Email for AI agents: an inbox per agent, by API · Obsession',
    description:
      'Email for AI agents: one API call gives each agent its own inbox. It sends and receives, keeps threads and files, and calls your webhook on each new email.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Email', path: piecePaths.email },
    ],
  },

  hero: {
    headline: 'Email API for AI agents: give each agent its own inbox',
    sub,
    code,
  },

  can: {
    heading: 'An email inbox for AI agents, with every thread kept.',
    line: 'Everything a person does with an inbox, done through code.',
    items: [
      { title: 'An inbox in one call', line: 'A new address for each agent, user or task, ready to send and receive as soon as the call returns.' },
      { title: 'Send and receive', line: 'Plain text or HTML, to anyone. Replies land back in the same inbox.' },
      { title: 'Threads kept for you', line: 'Replies are grouped into their conversation, so your agent reads the whole exchange before it answers.' },
      { title: 'Attachments both ways', line: 'Send files, and get every file that arrives: invoices, PDFs, images and calendar invites.' },
      { title: 'Codes read for you', line: 'Verification codes and confirm links are pulled out of each email, so a sign up finishes without a person.' },
      { title: 'A webhook for every email', line: 'Your app gets each new message as it lands, with its thread and its files.' },
    ],
  },

  events: ['email.received', 'email.sent'],

  price: {
    heading: 'Pay for the inboxes your agents keep and the mail they move.',
    line: 'Inboxes are billed by the month and email by the thousand, on the same bill as every other piece.',
  },

  together: {
    heading: 'Add a piece when the job needs one.',
    line: 'The same API key and the same bill cover every piece.',
    items: [
      { piece: 'phone', line: 'A number beside the inbox, for sites that check a text code after the email one.' },
      { piece: 'messaging', line: 'Carry on the same conversation on WhatsApp or iMessage when the person moves there.' },
      { piece: 'browser', line: 'Sign up on a site in the browser, then confirm it from the inbox.' },
      { piece: 'sandbox', line: 'Run code on the files that arrive, such as a spreadsheet or a PDF invoice.' },
      { piece: 'personas', line: 'Put the inbox, a number and a browser under one name, with every event in your event log.' },
    ],
  },

  faq: {
    heading: 'Real mail, handled by your agent from the first message.',
    items: [
      {
        q: 'What is an email API for AI agents?',
        a: 'An API that gives an agent its own inbox. The agent sends and receives email through code, and your app hears about each new message through a webhook, so nobody has to watch the mailbox.',
      },
      {
        q: 'Can I use only the email API?',
        a: 'Yes. Every piece works on its own. Start with inboxes, and add a phone number, a browser or a sandbox when a job needs one, on the same API key and the same bill.',
      },
      {
        q: 'How does my agent receive email?',
        a: 'Subscribe your URL to email.received with obsession.events.subscribe, and each new message is posted to it as it lands, with its thread and its attachments. Any inbox can also be read through the API.',
      },
      {
        q: 'Can my agents send from our own domain?',
        a: 'Yes. Add your domain once and every inbox can send from it. You add the DNS records we give you, and mail from your domain is signed so it reaches the inbox.',
      },
      {
        q: 'What does an inbox cost?',
        a: `${prices.inbox.name}: ${prices.inbox.amount} ${prices.inbox.unit}. ${prices.email.name}: ${prices.email.amount} ${prices.email.unit}. ${prices.inbox.note}`,
      },
    ],
  },

  final: {
    heading: 'Give every agent its own inbox.',
    capture: { kind: 'waitlist', button: 'Request early access', interest: 'any', source: 'piece-email' },
  },
}

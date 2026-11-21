import { piecePaths } from '../piecePaths'
import { personaCostLine, prices } from '../prices'
import type { PiecePage } from './types'

/* Personas (/personas), 21 Nov 2026: the bundle, never the headline of the site. A persona puts the other pieces under one
   identity (an inbox, a number, messaging channels, a browser profile, and a sandbox only when a task needs one) and lives
   on our actor runtime: it is free while it waits, a new email, text or call wakes it in 50 ms without starting a machine
   (James's figure, as designed), and every page, email, text and call it handles lands in the account's event log, dated,
   with screenshots. "The event log" is where every event lands (1 per account, never "record"). A persona is an identity an agent acts under, never
   defined as a customer. The persona on the card, its site and its numbers are invented (.example addresses, the 555 01XX
   range kept for fiction). Prices are read from prices.ts, never retyped. */

const sub =
  'A persona from Obsession puts the pieces an AI agent needs under one identity: its own inbox, phone number, messaging channels and browser profile, with a sandbox when a task needs one. It’s free while it waits, wakes in 50 ms when a message arrives, and every event lands in your event log.'

const code = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// One identity: an inbox, a US number and a browser
const persona = await obsession.personas.create({
  inbox: true,
  phone: "US",
  browser: true,
})

// Free while it waits. A new email wakes it
persona.on("email.received", async (email) => {
  // Runs on our runtime about 50 ms after the email lands,
  // with no machine to start
})

// Every page, email, text and call, dated, with screenshots
const { events } = await obsession.events.list({ persona: persona.id })`

export const personas: PiecePage = {
  id: 'personas',
  name: 'Personas',
  meta: {
    path: piecePaths.personas,
    title: 'Personas: one identity for each AI agent, on every piece',
    description:
      'A persona puts an inbox, a phone number, messaging and a browser under one identity for your AI agent. It’s free while it waits and logs every event.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Personas', path: piecePaths.personas },
    ],
  },

  hero: {
    headline: 'Personas for AI agents: every piece under one identity',
    sub,
    code,
  },

  can: {
    heading: 'One identity your agent keeps for months.',
    line: 'Everything an agent needs to act as someone on the web, made in one call and kept running.',
    items: [
      { title: 'One name everywhere', line: 'Your agent acts under the same name on every site, email, text and call.' },
      { title: 'Every piece in one call', line: 'An inbox, a phone number, messaging channels and a browser profile, made together and kept together.' },
      { title: 'Free while it waits', line: 'Waiting days for a reply costs nothing. Its pieces are billed only when the persona uses them.' },
      { title: 'Awake in 50 ms', line: 'A new email, text or call wakes it in 50 ms, without starting a machine.' },
      { title: 'A sandbox when a task needs one', line: 'It starts a sandbox for a task that runs code, and stops it when the task is done.' },
      { title: 'Signed in for months', line: 'Its browser profile keeps its logins, so it goes back to the same sites, as the same person, week after week.' },
    ],
  },

  events: ['email.received', 'sms.received', 'call.received', 'message.received', 'page.visited', 'sandbox.finished'],

  log: {
    heading: 'Every event lands in your event log, dated, with screenshots.',
    line: 'Your event log holds every page the persona visited and every email, text and call it got, in order. Read its events through the API, or subscribe once and get each one at your webhook as it happens.',
    who: { name: 'Dana Whitfield', lines: ['dana.whitfield@inbox.example', '+1 202 555 0143', 'US home connection'] },
    rows: [
      { at: 'Mon 09:14', kind: 'Page', text: 'Signed up at larkfield.example', shot: true },
      { at: 'Mon 09:14', kind: 'Email', text: '“Confirm your email” from Larkfield', note: 'Link opened', shot: true },
      { at: 'Mon 09:15', kind: 'Text', text: 'A verification code from Larkfield', note: 'Code entered' },
      { at: 'Mon 09:17', kind: 'Page', text: 'Basket filled, stopped before payment', shot: true },
      { at: 'Mon 09:17', kind: 'Waiting', text: 'Waiting for 25 hours, free', wait: true },
      { at: 'Tue 10:02', kind: 'Email', text: '“Still thinking it over?”', note: 'Woke in 50 ms', shot: true },
      { at: 'Wed 16:40', kind: 'Call', text: '38 seconds from +1 202 555 0119', note: 'Transcript kept' },
      { at: 'Thu 08:05', kind: 'Text', text: '“10% off your basket, this week only”', note: 'Woke in 50 ms' },
    ],
  },

  price: {
    heading: 'Waiting costs nothing. Each piece is billed as it’s used.',
    line: 'The event log is billed by the event, and each piece a persona uses is priced on its own page, all on one bill.',
  },

  together: {
    heading: 'Every piece in a persona also works on its own.',
    line: 'Start with 1 piece, and bring them together under a persona when one agent needs several.',
    items: [
      { piece: 'email', line: 'Its inbox, for welcome emails, codes and replies in its own name.' },
      { piece: 'phone', line: 'Its number, for texts, verification codes and calls.' },
      { piece: 'messaging', line: 'Its channels on iMessage, WhatsApp, Slack and Telegram.' },
      { piece: 'browser', line: 'Its browser profile, signed in to the sites it uses.' },
      { piece: 'sandbox', line: 'A sandbox, started only for a task that runs code.' },
    ],
  },

  faq: {
    heading: 'One identity, kept running for as long as the job lasts.',
    items: [
      {
        q: 'What is a persona for AI agents?',
        a: 'An identity your agent acts under, with its own inbox, phone number, messaging channels and browser profile, made in one call. It waits for free, wakes in 50 ms when something arrives, and everything it does and gets lands in your event log.',
      },
      {
        q: 'How can a persona be free while it waits?',
        a: 'Our runtime keeps each persona as an actor: its state is stored, and no machine runs while nothing happens, so there is nothing to bill. When an email, text or call arrives, the runtime wakes it in 50 ms and your handler runs.',
      },
      {
        q: 'What lands in the event log?',
        a: `Every page the persona visited and every email, text and call it sent or got, each dated, with screenshots of the pages. Your event log holds the events from every other piece and blueprint too, in order, and nothing in it is changed or deleted. Read them with obsession.events.list(), or subscribe once with obsession.events.subscribe() and get each one at your webhook. The event log costs ${prices.log.amount} ${prices.log.unit}. ${prices.log.note}`,
      },
      {
        q: 'Do I need a persona to use the other pieces?',
        a: 'No. Every piece works on its own with the same API key. A persona is for one agent that needs several pieces under one name, kept together over time.',
      },
      {
        q: 'What does a persona cost?',
        a: `${personaCostLine} ${prices.persona.name}: ${prices.persona.amount} ${prices.persona.unit}. ${prices.persona.note} ${prices.tokens.name}: ${prices.tokens.amount} ${prices.tokens.unit}.`,
      },
    ],
  },

  final: {
    heading: 'Give your agent one identity for every piece.',
    capture: { kind: 'waitlist', button: 'Request early access', interest: 'any', source: 'piece-personas' },
  },
}

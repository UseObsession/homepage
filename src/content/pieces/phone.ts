import { piecePaths } from '../piecePaths'
import { plans, prices, registration } from '../prices'
import type { PiecePage } from './types'

/* The paid plans, from prices.ts. No plan includes the US texting registration (founders, 22 Nov 2026). */
const andList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`)
const paid = plans.filter((pl) => (pl.monthly ?? 0) > 0)
const paidNames = paid.map((pl) => pl.name)

/* Phone (/phone), 21 Nov 2026: phone numbers for AI agents. One call makes a number; the agent sends and receives texts,
   gets verification codes, and makes and takes calls through the voice agent the developer brings or connects. US numbers
   lead; any other country is a feature in the list, never the pitch. US carriers' texting registration (10DLC) is a
   platform rule, stated as fact. Numbers in the code are in
   the range kept for fiction (555 01XX). Prices are read from prices.ts, never retyped. */

const sub =
  'Obsession gives each AI agent its own phone number in one call. The agent sends and receives texts, gets verification codes, and makes and takes calls through the voice agent you bring or connect.'

const code = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// A US number your agent owns: number.e164
const number = await obsession.numbers.create({ country: "US" })

// Text from it
await number.sms({
  to: "+12025550178",
  text: "Your table for 4 is booked for 7:30 tonight.",
})

// Texts and calls that come in reach your webhook
await obsession.events.subscribe({
  url: "https://your-app.example/hooks/phone",
  events: ["sms.received", "call.received"],
})`

export const phone: PiecePage = {
  id: 'phone',
  name: 'Phone',
  meta: {
    path: piecePaths.phone,
    title: 'Phone number for AI agents: texts, calls, codes · Obsession',
    description:
      'A phone number for AI agents in one call. Your agent sends and receives texts, gets verification codes, and makes and takes calls through your voice agent.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Phone', path: piecePaths.phone },
    ],
  },

  hero: {
    headline: 'Phone numbers for AI agents: texts, codes and calls on a number it owns',
    sub,
    code,
  },

  can: {
    heading: 'Your agent texts, calls and gets its codes on its own number.',
    line: 'A real phone number, run through code instead of a handset.',
    items: [
      { title: 'A number in one call', line: 'A US number, or one in any country you need.' },
      { title: 'Texts both ways', line: 'Your agent texts people, and every reply reaches your webhook.' },
      { title: 'Verification codes', line: 'A code texted at sign up is pulled out of the text for your agent.' },
      { title: 'Calls in and out', line: 'Your agent answers calls and places its own, billed by the minute.' },
      { title: 'Your voice agent', line: 'Point the number at your own voice agent, or connect another. Audio streams both ways.' },
      { title: 'A transcript of every call', line: 'Each call comes back as text your agent can read and act on.' },
    ],
  },

  events: ['sms.received', 'call.received', 'call.ended'],

  price: {
    heading: 'A number, its texts and its minutes, each priced on its own.',
    line: 'Hold a number as long as the job runs. Texts and minutes are billed as they’re used.',
  },

  together: {
    heading: 'A number does more beside the other pieces.',
    line: 'One API key and one bill cover every piece.',
    items: [
      { piece: 'email', line: 'An inbox beside the number, for sites that confirm by email as well as by text.' },
      { piece: 'messaging', line: 'Move the conversation to iMessage or WhatsApp when the person would rather chat there.' },
      { piece: 'browser', line: 'Sign up in the browser and finish the text check on the agent’s own number.' },
      { piece: 'sandbox', line: 'Turn call transcripts into summaries or tickets with code that runs only when needed.' },
      { piece: 'personas', line: 'Give the number a name, an inbox and a browser.' },
    ],
  },

  faq: {
    heading: 'A number your agent keeps for as long as the job runs.',
    items: [
      {
        q: 'How do I get a phone number for an AI agent?',
        a: 'One call gives your agent a number of its own. It texts and calls both ways, and everything that comes in reaches your app by webhook.',
        link: { label: 'AI agents that talk to customers', to: '/kits/talk-to-customers' },
      },
      {
        q: 'Can I get a free phone number for my AI agent?',
        a: `Yes. The Free plan includes a number that receives texts and calls, such as verification codes, up to a monthly amount, with no credit card. To send texts or call out, pick a paid plan: ${andList(paidNames)}.`,
        link: { label: 'See what each plan includes', to: '/pricing' },
      },
      {
        q: 'Will verification codes reach my agent?',
        a: 'Yes. The code is pulled out of the text for your agent, so a sign up goes through without a person.',
      },
      {
        q: 'Can I bring my own voice agent?',
        a: 'Yes. Point a number at your voice agent and its calls go straight to it, with the minutes on the same bill.',
      },
      {
        q: 'Do I need to register to text people in the US?',
        a: `Yes. US carriers make every business that texts register what it texts for, known as 10DLC. We file it for you when you add a US number: ${registration.once} once per campaign, then ${registration.monthly} a month while it’s active. ${registration.why}`,
      },
      {
        q: 'What does a number cost?',
        a: `${prices.number.name}: ${prices.number.amount} ${prices.number.unit}. ${prices.sms.name}: ${prices.sms.amount} ${prices.sms.unit}. ${prices.sms.note} ${prices.voice.name}: ${prices.voice.amount} ${prices.voice.unit}. ${registration.line} ${prices.number.note}`,
      },
    ],
  },

  final: {
    heading: 'Give your agent a number it can text and call from.',
    capture: { kind: 'waitlist', button: 'Start free', interest: 'any', source: 'piece-phone' },
  },
}

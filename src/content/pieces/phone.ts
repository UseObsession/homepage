import { piecePaths } from '../piecePaths'
import { plans, prices } from '../prices'
import type { PiecePage } from './types'

/* The paid plans and the US texting campaigns each includes the monthly fee of, from prices.ts. */
const andList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`)
const paid = plans.filter((pl) => (pl.monthly ?? 0) > 0)
const paidNames = paid.map((pl) => pl.name)
const campaignsLine = andList(
  paid.flatMap((pl) => (pl.campaigns ? [`${pl.name} ${pl.campaigns.count} ${pl.campaigns.kind} campaign${pl.campaigns.count === 1 ? '' : 's'}`] : [])),
)
const extraCampaign = prices.register.unit.replace(/^once, then /, '')

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
      { title: 'A number in one call', line: 'A US number, or one in any country you need, kept for as long as you hold it.' },
      { title: 'Texts both ways', line: 'Your agent texts people, and every reply lands back on its number and at your webhook.' },
      { title: 'Verification codes', line: 'A site that texts a code at sign up reaches your agent, and the code is pulled out of the text for it.' },
      { title: 'Calls in and out', line: 'Your agent answers calls to its number and places calls of its own, billed by the minute.' },
      { title: 'Your voice agent', line: 'Point the number at the voice agent you already run, or connect another. The call audio streams both ways.' },
      { title: 'A transcript of every call', line: 'Each call comes back as text, so your agent reads what was said and acts on it.' },
    ],
  },

  events: ['sms.received', 'call.received', 'call.ended'],

  price: {
    heading: 'A number, its texts and its minutes, each priced on its own.',
    line: 'Hold a number for as long as the job runs, and pay for its texts and its minutes on the same bill as every other piece.',
  },

  together: {
    heading: 'A number does more beside the other pieces.',
    line: 'The same API key and the same bill cover every piece.',
    items: [
      { piece: 'email', line: 'An inbox beside the number, for sites that confirm by email as well as by text.' },
      { piece: 'messaging', line: 'Move the conversation to iMessage or WhatsApp when the person would rather chat there.' },
      { piece: 'browser', line: 'Sign up in the browser and finish the text check on the agent’s own number.' },
      { piece: 'sandbox', line: 'Turn call transcripts into summaries or tickets with code that runs only when needed.' },
      { piece: 'personas', line: 'Give the number a name, an inbox and a browser, with every text and call in your event log.' },
    ],
  },

  faq: {
    heading: 'A number your agent keeps for as long as the job runs.',
    items: [
      {
        q: 'How do I get a phone number for an AI agent?',
        a: 'One call gives your agent a number of its own. It sends and receives texts and makes and takes calls, and everything that comes in reaches your app through a webhook.',
      },
      {
        q: 'Can I get a free phone number for my AI agent?',
        a: `Yes. The Free plan includes a number that receives texts and calls, such as verification codes, up to a monthly amount, with no credit card. To send texts or call out, pick a paid plan: ${andList(paidNames)}.`,
        link: { label: 'See what each plan includes', to: '/pricing' },
      },
      {
        q: 'Will verification codes reach my agent?',
        a: 'Yes. A text with a code arrives on the number like any other text, and the code is pulled out for your agent, so a sign up goes through without a person.',
      },
      {
        q: 'Can I bring my own voice agent?',
        a: 'Yes. Point a number at the voice agent you already run and its calls go straight to it, with the minutes on the same bill as everything else.',
      },
      {
        q: 'Do I need to register to text people in the US?',
        a: `Yes. US carriers ask every business that texts to register what it texts for, a step known as 10DLC. We file the registration for you when you add a US number. Each paid plan includes the monthly fee of its campaigns: ${campaignsLine}. Filing a campaign is ${prices.register.amount} once, paid from your plan’s monthly usage, and each extra campaign is ${extraCampaign}.`,
      },
      {
        q: 'What does a number cost?',
        a: `${prices.number.name}: ${prices.number.amount} ${prices.number.unit}. ${prices.sms.name}: ${prices.sms.amount} ${prices.sms.unit}. ${prices.sms.note} ${prices.voice.name}: ${prices.voice.amount} ${prices.voice.unit}. ${prices.register.name}: each paid plan includes its campaigns’ monthly fee; filing one is ${prices.register.amount} once, and each extra campaign is ${extraCampaign}. ${prices.number.note}`,
      },
    ],
  },

  final: {
    heading: 'Give your agent a number it can text and call from.',
    capture: { kind: 'waitlist', button: 'Request early access', interest: 'any', source: 'piece-phone' },
  },
}

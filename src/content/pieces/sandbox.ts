import { piecePaths } from '../piecePaths'
import { prices } from '../prices'
import type { PiecePage } from './types'

/* Sandbox (/sandbox), 21 Nov 2026: a code sandbox for AI agents, a computer in the cloud that starts only when a task
   needs it and stops when the task ends. The agent runs the code it writes, installs packages and works with files, set
   apart from the developer's own systems, with the internet only when they allow it. "Code sandbox" stays as people
   type it. Prices are read from prices.ts, never retyped. */

const sub =
  'Obsession gives your AI agents a code sandbox, a computer in the cloud where they run code, install packages and work with files. It starts when a task needs it and stops when the task ends.'

const code = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// A computer for this task only
const sandbox = await obsession.sandboxes.create()

// Run the code your agent wrote
await sandbox.run("pip install pandas")
await sandbox.run("python report.py")

// When the task ends, the sandbox stops and so does the bill`

export const sandbox: PiecePage = {
  id: 'sandbox',
  name: 'Sandbox',
  meta: {
    path: piecePaths.sandbox,
    title: 'A code sandbox for AI agents, started per task · Obsession',
    description:
      'A code sandbox for AI agents: a cloud computer that starts when a task needs it and stops when it ends. Run Python or Node, install packages, use files.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Sandbox', path: piecePaths.sandbox },
    ],
  },

  hero: {
    headline: 'A code sandbox for AI agents: a fresh computer for each task',
    sub,
    code,
  },

  can: {
    heading: 'Your agent runs its own code, away from your systems.',
    line: 'A full Linux computer for each task, gone when the task is done.',
    items: [
      { title: 'Starts when needed', line: 'A sandbox starts when your agent calls for one, and stops when the task ends.' },
      { title: 'Any language', line: 'Python and Node are ready to use, with a shell for everything else that runs on Linux.' },
      { title: 'Install what it needs', line: 'pip, npm and apt work as they do on your own machine.' },
      { title: 'Files in and out', line: 'Upload a spreadsheet, run code on it, and download the chart or report it makes.' },
      { title: 'Sealed off', line: 'Each sandbox is set apart from the others and from your systems, so the code your agent writes touches only its sandbox.' },
      { title: 'The internet when you allow it', line: 'Turn network access on to fetch data or call an API, or keep the sandbox offline.' },
    ],
  },

  events: ['sandbox.finished'],

  price: {
    heading: 'A sandbox is billed only while it works.',
    line: 'Pay for the processor time and memory it uses, on the same bill as every other piece.',
  },

  together: {
    heading: 'The sandbox does the work the other pieces bring in.',
    line: 'The same API key and the same bill cover every piece.',
    items: [
      { piece: 'email', line: 'Work through the attachments that land in an inbox, such as invoices and spreadsheets.' },
      { piece: 'phone', line: 'Turn call transcripts into summaries or tickets.' },
      { piece: 'messaging', line: 'Reply on WhatsApp or Slack with a chart your code made.' },
      { piece: 'browser', line: 'Clean and check the files the browser downloads.' },
      { piece: 'personas', line: 'A persona starts a sandbox only for a task that runs code, and the run lands in your event log.' },
    ],
  },

  faq: {
    heading: 'Run the code your agent writes, set apart from everything else.',
    items: [
      {
        q: 'What is a code sandbox for AI agents?',
        a: 'A computer in the cloud, set apart from your own systems, where an agent runs the code it writes. It installs packages, reads and writes files and returns the results, and nothing it runs reaches your machines.',
      },
      {
        q: 'Which languages can it run?',
        a: 'Any language that runs on Linux. Python and Node are ready to use, and your agent can install anything else with pip, npm or apt.',
      },
      {
        q: 'What happens when the task ends?',
        a: 'The sandbox stops and billing stops with it. Download the files you want to keep before it stops.',
      },
      {
        q: 'Can a sandbox reach the internet?',
        a: 'Only if you allow it. Turn network access on for a sandbox that fetches data or calls an API, and leave it off for code you’d rather keep offline.',
      },
      {
        q: 'What does a sandbox cost?',
        a: `${prices.sandbox.name}: ${prices.sandbox.amount} ${prices.sandbox.unit}.`,
      },
    ],
  },

  final: {
    heading: 'Give your agent a computer for each task.',
    capture: { kind: 'waitlist', button: 'Request early access', interest: 'any', source: 'piece-sandbox' },
  },
}

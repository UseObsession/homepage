import { kitPathOf, kitsPath } from '../kitPaths'
import type { KitPage } from './types'

/* Train and test agents (/blueprints/train-and-test-agents): AI labs and evaluation teams give each run a real identity, a
   sandbox and a browser, started when the run needs them, and score every step from the event log. Product Marketing
   book, job 6. Owns "rl environments for ai agents" (Google suggestions, 22 Nov 2026). */

const sub =
  'Each training or evaluation run gets its own sandbox, browser, inbox and number, started when it needs them. Every step lands in the event log, ready to score and replay.'

const code = `import { Obsession } from "obsession"

const obsession = new Obsession({ apiKey: process.env.OBSESSION_API_KEY })

// A real identity for this run
const run = await obsession.personas.create({
  inbox: true,
  phone: "US",
  browser: true,
})

// A computer for the task, billed only while its CPU works
const sandbox = await obsession.sandboxes.create()

// Score the run from its events, in order
const { events } = await obsession.events.list({ persona: run.id })`

export const train: KitPage = {
  id: 'train',
  name: 'Train and test agents',
  meta: {
    path: kitPathOf.train,
    title: 'RL environments for AI agents: inboxes, phones and browsers',
    description:
      'Give every training or evaluation run its own sandbox, browser, inbox and number, started only when needed, with every step in the event log for scoring.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: kitsPath },
      { name: 'Train and test agents', path: kitPathOf.train },
    ],
  },

  hero: { headline: 'Train and test agents: a real identity for every run.', sub },

  scene: {
    steps: [
      { icon: 'sandbox', label: 'An environment starts per run' },
      { icon: 'persona', label: 'The agent gets its own identity' },
      { icon: 'mail', label: 'It finishes a task with a code' },
      { icon: 'record', label: 'The log scores every step' },
    ],
    who: 'Run 4,812, an evaluation run at an AI lab',
    rows: [
      { at: '00:00', kind: 'page.visited', text: 'shop.example/signup · screenshot saved' },
      { at: '00:01', kind: 'sms.received', text: 'Your code is 730215' },
      { at: '00:03', kind: 'sandbox.finished', text: 'Basket total checked against the task: £42.10' },
      { at: '00:04', kind: 'page.visited', text: 'Checkout reached, stopped before payment' },
      { at: '00:04', kind: 'score', text: 'Every step passed', tone: 'ok' },
    ],
    caption: 'One run among thousands: sign-up, code, basket and checkout, scored from the log. The lab and shop are invented examples.',
  },

  pieces: {
    heading: 'A real place to practise, for every run.',
    line: 'Start thousands at once. Each run has its own identity and costs nothing while it waits.',
    items: [
      { piece: 'sandbox', line: 'A computer per run, billed only while the CPU works.' },
      { piece: 'browser', line: 'A browser per run that saves every page.' },
      { piece: 'email', line: 'Real inboxes for tasks that need a code or a reply.' },
      { piece: 'phone', line: 'Real numbers for codes by text.' },
      { piece: 'personas', line: 'An identity per run that can wait for days.' },
    ],
    prices: ['sandbox', 'memory', 'browser', 'inbox', 'number', 'log'],
  },

  blueprints: {
    heading: 'Keep testing agents after they ship.',
    line: 'Obsession asks your hardest cases after every update, runs them on vendors’ agents before you sign, and tests every resolution you’re billed for.',
    slugs: ['drift-watch', 'vendor-agent-check', 'resolution-check'],
  },

  code: {
    heading: 'Start a run’s environment in one call.',
    line: 'Each run gets its own identity and computer, and its events in order for scoring.',
    label: 'run.ts',
    code,
  },

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Research engineers', gets: 'Thousands of environments with real inboxes and numbers, started at once.', watch: 'Task success rate, cost per run' },
      { role: 'Evaluation teams', gets: 'Every step of every run, dated, to score and replay.', watch: 'Benchmark coverage, regressions caught' },
      { role: 'Agent product teams', gets: 'The same tasks re-run after every model change.', watch: 'Accuracy, latency, regressions' },
    ],
  },

  faq: {
    heading: 'Before your first run.',
    items: [
      { q: 'Can I start thousands of runs at once?', a: 'Yes. Each run gets its own persona, sandbox and browser, started when the run needs them.' },
      { q: 'What does a run cost while it waits?', a: 'Nothing for the persona. The sandbox bills only while its CPU works, and the browser by the hour it runs.', link: { label: 'Every rate', to: '/pricing/rates' } },
      { q: 'Can a task last days?', a: 'Yes. A persona keeps its inbox and number for as long as the task runs.' },
      { q: 'How do I score a run?', a: 'From the event log: every page, code, email and sandbox result, in order and dated, with screenshots.' },
    ],
  },

  final: {
    heading: 'Start your first run free.',
    capture: { kind: 'waitlist', source: 'kit-train', button: 'Start free', interest: 'any' },
  },
}

import { plans, prices } from '../../prices'
import type { TeamPage } from '../types'

/* AI agent evaluation (/use-cases/ai-agent-evaluation, 22 Nov 2026, _research/seo/revamp-22nov/PLAN_usecases.md): train
   and test agents, for evaluation leads at AI labs and agent companies. Modelled on the evaluation pattern in the
   Product Marketing book's train job (an environment per run with real inboxes, numbers, browsers and sandboxes, every
   step scored from the event log); no competitor or customer is named and no figure is borrowed. Owns "ai agent
   evaluation" and "ai agent evaluation tools" (Google suggestions, 22 Nov). evals.example and shop.example are
   invented. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const orList = (items: string[]) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}`)

const path = '/use-cases/ai-agent-evaluation'

const sub =
  'Obsession, the toolkit for AI agents, gives each AI agent evaluation run its own sandbox, browser, inbox and number, started when the run needs them. Every step lands in one event log with screenshots, ready for your harness to score and replay.'

export const useCase: TeamPage = {
  id: 'ai-agent-evaluation',
  kind: 'case',
  name: 'AI agent evaluation',
  meta: {
    path,
    title: 'AI agent evaluation: real inboxes, phones and browsers',
    description:
      'Run AI agent evaluation on real tasks. Every run gets its own sandbox, browser, inbox and number, and every step lands in one event log, ready to score.',
    answer: sub,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'AI agent evaluation', path },
    ],
  },

  hero: {
    pill: 'Evaluation teams',
    headline: 'AI agent evaluation: score every step on real inboxes, numbers and browsers.',
    sub,
  },

  scene: {
    steps: [
      { icon: 'code', label: 'A new model version ships' },
      { icon: 'persona', label: 'Each task gets its own persona' },
      { icon: 'browser', label: 'The agent works in a real browser' },
      { icon: 'record', label: 'The log scores every step' },
    ],
    who: 'Task 118 in the nightly suite at evals.example',
    rows: [
      { at: '02:00', kind: 'page.visited', text: 'shop.example/signin · screenshot saved' },
      { at: '02:00', kind: 'sms.received', text: 'Your sign-in code is 418306' },
      { at: '02:01', kind: 'page.visited', text: 'Order 4417 · new address typed, never saved' },
      { at: '02:06', kind: 'score', text: 'No “Address updated” email after 5 minutes', tone: 'fail' },
      { at: '02:06', kind: 'webhook', text: 'Regression sent to #evals: this task passed on the last model' },
    ],
    caption: 'One task in a nightly suite: the agent typed the new address and never saved it, and the log shows the step. evals.example and shop.example are invented examples.',
  },

  uses: {
    heading: 'Real tasks for every run, scored from what actually happened.',
    line: 'Every piece runs on one API and one bill, so each run’s sandbox, browser, inbox and number share one key and one event log.',
    items: [
      {
        kit: 'train',
        name: 'Tasks on real inboxes and numbers',
        line: 'Each run signs up, waits for the code and answers the email, on an inbox and number of its own.',
        pieces: ['personas', 'email', 'phone'],
      },
      {
        kit: 'train',
        name: 'A sandbox and a browser per run',
        line: 'Each run gets its own computer and browser, started when it needs them. The sandbox bills only while its CPU works.',
        pieces: ['sandbox', 'browser'],
      },
      {
        kit: 'train',
        name: 'Scores from the event log',
        line: 'Every page, code, email and sandbox result arrives in order with a screenshot, ready for your harness to score.',
        pieces: ['personas'],
      },
      {
        kit: 'train',
        name: 'Tasks that take days',
        line: 'A persona keeps its inbox and number for the whole task, free while it waits for the day-3 reply.',
        pieces: ['personas', 'email'],
      },
      {
        kit: 'test',
        name: 'Regressions after every model change',
        line: 'Your hardest tasks run again after each model or prompt change, with every answer that changed.',
        blueprint: 'drift-watch',
        pieces: ['browser'],
      },
      {
        kit: 'test',
        name: 'Voice agents, scored end to end',
        line: 'Personas call your voice agent, then wait days for the text, email and callback it promised.',
        blueprint: 'voice-agent-check',
        pieces: ['phone', 'email'],
      },
    ],
  },

  blueprints: {
    heading: 'Evaluations that run without a harness.',
    line: 'Each posts what it found to Slack, a sheet or your webhook.',
    slugs: ['drift-watch', 'voice-agent-check', 'vendor-agent-check', 'support-bot-check'],
  },

  prices: ['sandbox', 'memory', 'browser', 'inbox', 'number', 'log'],

  who: {
    heading: 'Who runs it, and what they watch.',
    items: [
      { role: 'Evaluation lead', gets: 'Every step of every run, dated and in order, to score and replay.', watch: 'Benchmark coverage, regressions caught, eval run time' },
      { role: 'Research engineers', gets: 'Thousands of environments with real inboxes and numbers, started at once.', watch: 'Task success rate, rollouts per hour, cost per run' },
      { role: 'Agent product teams', gets: 'Your hardest tasks re-run after each model change, before it ships.', watch: 'Release confidence, accuracy, latency' },
    ],
  },

  examples: {
    heading: 'Worked examples',
    paths: ['/use-cases/otp-testing', '/use-cases/trial-checks-for-software-companies'],
  },

  faq: {
    heading: 'Before your first evaluation run.',
    items: [
      {
        q: 'Which AI agent evaluation tools does it work with?',
        a: 'The harness you already run. Create a persona and a sandbox for each run, then read its events with obsession.events.list({ persona: run.id }) and score them in your own tool.',
        link: { label: 'The API and MCP', to: '/developers' },
      },
      {
        q: 'What does an evaluation run cost?',
        a: `Nothing for the persona while it waits. The sandbox is ${prices.sandbox.amount} ${prices.sandbox.unit}, billed only while its CPU works, and the browser ${prices.browser.amount} ${prices.browser.unit}. Start on the Free plan, with no credit card, then ${orList(fees)} a month.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
      {
        q: 'Can a task include checkout or a CAPTCHA?',
        a: 'Up to the payment step. An agent on Obsession stops before payment unless given your own payment card, never gets round a CAPTCHA or a bot block, and stops at any identity check. Score those stops as expected outcomes.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'How do we compare runs when real sites change?',
        a: 'Every run keeps each page as a dated screenshot, so a changed site shows in the log beside the step it broke. Read a failure against the page the agent actually saw.',
      },
    ],
  },

  final: {
    heading: 'Run your next evaluation on real inboxes, numbers and browsers.',
    capture: { kind: 'waitlist', source: 'case-ai-agent-evaluation', button: 'Start free', interest: 'any' },
  },
}

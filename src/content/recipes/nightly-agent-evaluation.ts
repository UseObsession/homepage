import type { Recipe } from '../types'

/* Nightly agent evaluation (/blueprints/nightly-agent-evaluation). Train and test agents, wave 2 (23 Nov 2026,
   _research/seo/blueprints-22nov/PLAN.md). The pull it copies: AI labs and agent companies that start hundreds of
   sandboxes per training or evaluation run (none named on the page). Owns "agent evals" and "ai agent regression
   testing" (Google suggestions, US and UK, 23 Nov). "ai agent evaluation" and "ai agent evaluation tools" stay with
   /use-cases/ai-agent-evaluation (linked in the questions) and "how to evaluate ai agent performance" with its guide, so
   neither phrase is used in a title, heading or question here.
   Rules kept on the page: tasks run on the team's own staging apps and test accounts first, and on public sites a task
   needs as any customer can; a persona says it's an AI to a person and stops before payment
   unless given the team's own card; it says it's an AI to a person. The agent under test runs on the team's own model
   keys. The run is an example (screen: evalrun): build 4.12 of a support agent, 200 tasks from 02:00, 50 at a time;
   186 pass against 194 on build 4.11 (9 newly fail, 1 newly passes: 194 - 9 + 1 = 186); task 077 accepts a retention
   offer instead of cancelling. */

export const recipe: Recipe = {
  id: 'eval',
  slug: 'nightly-agent-evaluation',
  name: 'Nightly agent evaluation',
  group: 'Train and test agents',
  line: 'Runs your AI agent through real tasks every night, each with its own inbox, number, browser and sandbox, and scores every step.',
  gets: 'A score by morning: tasks passed, what broke since last night, and the full trail behind every failure.',
  kit: [
    'A persona per task, with a clean inbox each run',
    'Numbers for sign-in codes by text',
    'A browser and a sandbox per task, started when it runs',
    'Your task suite, each task with its pass rule',
    'The build, model and prompt version, kept with every run',
    'Every step in the event log, in order, with screenshots',
  ],
  build: {
    line: 'Start the suite from your build pipeline, and read every step of every task as events your own harness can score.',
    code: `await obsession.blueprints.run("nightly-agent-evaluation", {
  agent: "support-agent@4.12",
  suite: "account-and-billing",
})

obsession.on("blueprint.result", async (e) => {
  if (e.data.regressions.length) await slack.post("#evals", e.data.summary)
})`,
    events: [
      { kind: 'page.visited', text: 'Each page the agent opens in its browser, with a screenshot.' },
      { kind: 'email.received', text: 'A confirmation, reset link or code reaching the task’s persona, with the time it arrived.' },
      { kind: 'sandbox.finished', text: 'The agent’s run in its sandbox, with its output and exit status.' },
      { kind: 'blueprint.result', text: 'Each task’s score, and the night’s pass rate against the last, with every regression listed.' },
    ],
  },

  meta: {
    path: '/blueprints/nightly-agent-evaluation',
    title: 'Run agent evals every night on real inboxes and browsers',
    description:
      'Agent evals that run every night: each task gets its own inbox, number, browser and sandbox, every step is scored, and each regression is flagged.',
    answer:
      'Nightly agent evaluation runs your AI agent through your task suite every night, each task with its own persona, browser and sandbox. Every step lands in your event log, scored against the task’s rule, and each regression since last night is flagged.',
    ogImage: '/og/nightly-agent-evaluation.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
      { name: 'Nightly agent evaluation', path: '/blueprints/nightly-agent-evaluation' },
    ],
  },

  hero: {
    headline: 'Run your agent evals every night, and see what broke by morning.',
    sub: 'Nightly agent evaluation runs your AI agent through your task suite every night, each task with its own persona, browser and sandbox. Every step lands in your event log, scored against the task’s rule, and each regression since last night is flagged.',
    screen: 'evalrun',
    capture: {
      kind: 'waitlist',
      source: 'recipe-eval-hero',
      button: 'Start free',
      interest: 'eval',
    },
  },

  buyer: 'For evaluation, QA and platform engineers at companies building AI agents, and at AI labs.',
  unit: 'task run',
  per: 'agent',
  /* What each tier includes, by its name. Its price and the rest come from the pricing JSON (content/blueprint-tiers.ts). */
  tiers: [
    { name: 'Free', includes: ['An inbox, number, browser and sandbox for each task', 'Every step in your event log, in order', 'Each task passed or failed against its rule'] },
    { name: 'Weekly', includes: ['The suite after each release, or every Monday', 'Pass rate by task and by build', 'Each failure’s full trail, ready to replay'] },
    { name: 'Nightly', includes: ['Every night at 02:00 on your latest build', 'New failures since last night, flagged in Slack', 'Time and cost per task, night by night'] },
    { name: 'Every agent', includes: ['A suite for each agent, model or prompt version', 'Each agent’s runs kept apart in your event log', 'One morning report across every agent'] },
  ],

  run: {
    tab: 'A support agent’s suite, every night',
    recipe: 'eval',
    task: 'Every night at 02:00, run the latest build of your support agent through 200 tasks on your staging apps, each with its own persona, browser and sandbox. Score every step and compare with last night’s build.',
    targets: 'Your support agent, build 4.12, on your staging shop, bank and travel apps',
    journey: ['A persona and sandbox per task', 'The agent works the task', 'Each step scored against its rule', 'Compared with last night'],
    schedule: 'Nightly at 02:00, and after every release',
    report: 'The morning score in #evals by 07:00',
    kit: ['50 personas at a time, each with a clean inbox', '5 numbers for sign-in codes', 'A sandbox and browser per task', 'Your pass rule for every task'],
    events: [
      { time: '02:00', text: 'Build 4.12 starts on 200 tasks, 50 at a time, each in its own sandbox with its own persona.' },
      { time: '02:02', text: 'Task 018, “Reset a password”: the reset email reaches the persona’s inbox in 9 seconds, and the agent sets the new password. Passed.' },
      { time: '02:06', text: 'Task 077, “Cancel a subscription”: the agent reaches a retention offer and accepts 50% off. No cancellation email arrives. Failed, though it passed on build 4.11.' },
      { time: '02:09', text: 'Task 131, “Book a table for 4 on Friday”: the confirmation email says 2 guests. Failed against the task’s rule.' },
      { time: '02:47', text: 'The suite ends: 186 tasks pass, against 194 on build 4.11 last night, and 9 tasks newly fail.' },
      { time: '07:00', text: 'The morning score reaches #evals, with each new failure, its event trail, its screenshots and the step that broke.' },
    ],
    finding: 'Build 4.12 passed 186 tasks against 194 on build 4.11. Nine tasks newly fail, and four of them accept a retention offer when the task says cancel.',
    fix: 'Each new failure was in #evals by 07:00 with its event trail and the step that broke, ready to replay on build 4.11.',
    ledger: '200 tasks a night, with every page, email, text and score kept in order.',
  },

  steps: [
    {
      title: 'Give it your suite',
      line: 'Your tasks, each with its pass rule: what the agent must do, and what must arrive after, such as a confirmation email.',
    },
    {
      title: 'Point it at your agent',
      line: 'Your agent’s endpoint or container, and the build, model and prompt version to keep with each run.',
    },
    {
      title: 'It runs every night',
      line: 'Each task gets a persona with its own inbox and number, a browser and a sandbox, started when the task needs them.',
    },
    {
      title: 'The score lands by morning',
      line: 'Pass rate, new failures and each failure’s event trail, in Slack, your dashboard or through the API.',
    },
  ],

  checks: [
    {
      group: 'What each task checks',
      items: [
        { title: 'The task finished', line: 'The page the agent reached and the button it pressed, kept with screenshots.' },
        { title: 'What arrived after', line: 'The confirmation email or text that proves it worked, with the time it landed, or how long it waited.' },
        { title: 'The rule you set', line: 'Each step scored against the task’s rule, such as “cancel, and never accept an offer”.' },
        { title: 'Time and cost', line: 'How long each task took and what it used, so a slower build shows the next morning.' },
      ],
    },
    {
      group: 'Night against night',
      items: [
        { title: 'New failures', line: 'Tasks that passed last night and fail tonight, listed first.' },
        { title: 'Fixed tasks', line: 'Tasks that failed last night and pass tonight, so a fix shows as a fix.' },
        { title: 'Flaky tasks', line: 'Tasks that flip between nights, marked so they never hide a real break.' },
        { title: 'Build, model and prompt', line: 'Kept with every run, so each change lines up with what it broke.' },
      ],
    },
    {
      group: 'The ground rules',
      items: [
        { title: 'Your sites first', line: 'Tasks run on your own staging apps and test accounts, and on public sites a task needs, as any customer can.' },
        { title: 'Stops where it should', line: 'A persona signs in only with the test accounts you give it, and stops before payment unless you give it your own payment card.' },
        { title: 'Says it’s an AI', line: 'If a task reaches a person by chat, email or phone, the persona says it’s an AI.' },
        { title: 'Clean every run', line: 'Each run starts from a fresh sandbox, browser and inbox, so last night never leaks into tonight.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every morning comes back scored, with the trail behind each failure.',
    items: [
      { format: 'The score', line: 'Tasks passed tonight against last night, by build.' },
      { format: 'New failures', line: 'Each with the step that broke, first in the list.' },
      { format: 'The event trail', line: 'Every page, email, text and sandbox output, in order, with screenshots.' },
      { format: 'A replay', line: 'The same task on last night’s build, from the same starting point.' },
      { format: 'Time and cost per task', line: 'Tracked night by night, so a slower or dearer build shows.' },
      { format: 'Where it lands', line: 'Slack by 07:00, your dashboard, a webhook or the API.' },
    ],
  },

  settings: [
    { k: 'Your agent', v: 'An endpoint, a container in the sandbox, or a connection over MCP' },
    { k: 'Tasks', v: 'Your suite, each with a pass rule, from 20 tasks to thousands' },
    { k: 'Each task gets', v: 'A persona with a clean inbox, a number for codes, a browser and a sandbox' },
    { k: 'Sites', v: 'Your staging apps, test accounts you own, or public sites a task needs' },
    { k: 'Schedule', v: 'Every night at 02:00, after every release, or a call from your build pipeline' },
    { k: 'Scoring', v: 'Your rules, your own harness reading the event log, or both' },
    { k: 'Compared with', v: 'Last night’s build by default, or any build you pick' },
    { k: 'Where it lands', v: 'Slack, a dashboard, a webhook or the API' },
  ],

  table: {
    heading: 'Score what your agent did, and what arrived after it.',
    cols: ['Scoring the reply alone', 'With Nightly agent evaluation'],
    rows: [
      { label: 'A cancellation task', values: ['The reply says it’s done', 'The cancellation email arrived, or didn’t'] },
      { label: 'A sign-in code', values: ['Mocked', 'Sent to the persona’s own number, then read'] },
      { label: 'A booking', values: ['The reply names a time', 'The confirmation email checked for date and party size'] },
      { label: 'Last night’s build', values: ['Rerun by hand', 'Compared every morning'] },
      { label: 'A failure', values: ['A log line', 'The full trail with screenshots, ready to replay'] },
      { label: 'Each run', values: ['Shared test accounts', 'A clean persona, browser and sandbox'] },
    ],
  },

  faq: {
    heading: 'Each task gets a real identity, and every step is kept for scoring.',
    items: [
      {
        q: 'What does Nightly agent evaluation run?',
        a: 'Your task suite against your agent, every night or after every release. Each task gets a persona with its own inbox and number, a browser and a sandbox, and every step lands in your event log for scoring.',
      },
      {
        q: 'How do agent evals catch regressions overnight?',
        a: 'Each night’s scores are compared with the night before on the same tasks. A task that passed last night and fails tonight is flagged first, with the step that broke and the build, model and prompt that changed.',
      },
      {
        q: 'Can we score runs with our own harness?',
        a: 'Yes. Every event lands in order in your event log, so your harness reads a run through the API or a webhook and scores it your way. The blueprint’s own scoring is there for teams that want it.',
      },
      {
        q: 'Which sites do the tasks run on?',
        a: 'Your own staging apps and test accounts first, and public sites a task needs. A persona signs up and acts as any customer can, says it’s an AI to a person and stops before payment.',
        link: { label: 'What every agent keeps to', to: '/agents' },
      },
      {
        q: 'Does each task start clean?',
        a: 'Yes. Each run gets a fresh sandbox, browser and inbox, so one task’s state never leaks into the next, and two nights compare like for like.',
      },
      {
        q: 'Where does the morning score go?',
        a: 'Slack by 07:00, a dashboard, a webhook or the API. Each new failure comes first, with its full event trail one click away.',
      },
      {
        q: 'How does it fit a wider evaluation setup?',
        a: 'Nightly agent evaluation is the scheduled run on your build. For an environment per training run and scoring at scale across many models, see AI agent evaluation on Obsession.',
        link: { label: 'See AI agent evaluation', to: '/use-cases/ai-agent-evaluation' },
      },
      {
        q: 'What does Nightly agent evaluation cost?',
        a: 'It’s billed on the pieces each task uses, at list rates: browser minutes, sandbox time, inboxes, numbers and the scoring. Your agent’s own model runs on your keys, and an idle persona costs nothing.',
        link: { label: 'See sandboxes for AI agents', to: '/sandbox' },
      },
    ],
  },

  final: {
    heading: 'Know by 07:00 what last night’s build broke.',
    sub: 'Try it on the Free plan: score your agent on 20 real tasks tonight, then watch regressions and accuracy night by night.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-eval-final',
      button: 'Start free',
      interest: 'eval',
    },
    link: { label: 'More blueprints to train and test agents', to: '/blueprints/train-and-test-agents' },
  },
}

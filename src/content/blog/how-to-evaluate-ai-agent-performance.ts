import type { BlogPost } from './types'

/* Kit article (_research/seo/revamp-22nov/PLAN_articles.md, row 7; Seun's "write them", 22 Nov 2026; brief in
   ARTICLE_BRIEF.md): how to evaluate AI agent performance, for product managers, evaluation leads and research
   engineers. Primary "how to evaluate ai agent performance"; secondaries from Google suggestions (US and UK, 22 Nov 2026,
   autocomplete_articles_22nov.json and a fresh run): how to measure ai agent performance, ai agent evaluation metrics, ai
   agent performance metrics, ai agent evaluation framework, offline vs online evaluation llm. "ai agent evaluation" and
   "ai agent evaluation tools" stay with /use-cases/ai-agent-evaluation, and "ai agent observability" with
   /blog/ai-agent-observability. Every source read on its own page on 22 Nov 2026: Anthropic's "Demystifying evals for AI
   agents" (9 Jan 2026); the τ-bench paper (arXiv, 17 Jun 2024); Ragas's agent metrics page; DeepEval's Task Completion
   page; Google Cloud's Vertex AI agent evaluation page (Preview, no date shown); LangSmith's evaluation concepts page;
   OpenAI's "Evaluate agent workflows" page; Braintrust's and LangChain's pricing; the Apache 2.0 licences of Ragas
   (vibrantlabsai/ragas) and DeepEval (confident-ai/deepeval) and the MIT licence of sierra-research/tau2-bench, read from
   GitHub. harbourdesk.example, shop.example and every figure in both pictures are invented. */

const ANTHROPIC = 'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents'
const TAU = 'https://arxiv.org/abs/2406.12045'
const RAGAS = 'https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/agents/'
const DEEPEVAL = 'https://deepeval.com/docs/metrics-task-completion'
const VERTEX = 'https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-agents'
const LANGSMITH_EVAL = 'https://docs.langchain.com/langsmith/evaluation-concepts'
const OPENAI = 'https://developers.openai.com/api/docs/guides/agent-evals'
const RAGAS_GH = 'https://github.com/vibrantlabsai/ragas'
const DEEPEVAL_GH = 'https://github.com/confident-ai/deepeval'
const TAU_GH = 'https://github.com/sierra-research/tau2-bench'
const BRAINTRUST_PRICING = 'https://www.braintrust.dev/pricing'
const LANGSMITH_PRICING = 'https://www.langchain.com/pricing'

export const post: BlogPost = {
  slug: 'how-to-evaluate-ai-agent-performance',
  title: 'How to evaluate AI agent performance: the metrics product and evaluation teams score, offline and live',
  dek: 'Task success, reliability across repeated runs, tool use, latency, cost per task, policy errors and escalation. Each metric is defined from published evaluation frameworks’ own documentation, with how to score it before release, in production and from an event log.',
  metaTitle: 'How to evaluate AI agent performance: what teams measure',
  description:
    'How to evaluate AI agent performance: task success, pass^k, tool use, latency, cost per task, policy errors and escalation, scored offline and live.',
  answer:
    'To evaluate AI agent performance, score task success, reliability across repeated trials, tool use, latency, cost per task, policy errors and escalation on tasks whose end state you can write down. Score a fixed set of tasks offline before each release and a sample of real runs live, reading the end state the agent left as well as what it said. On Obsession, every email, text, call, page and sandbox run lands in one event log, so each metric is read from what the agent did.',
  primaryKeyword: 'how to evaluate ai agent performance',
  keywords: [
    'how to measure ai agent performance',
    'ai agent evaluation metrics',
    'ai agent performance metrics',
    'ai agent evaluation framework',
    'offline vs online evaluation llm',
  ],
  category: 'Train and test agents',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'harbourdesk.example · v11 against v12',
      period: 'A support agent, 200 tasks, 3 trials each',
      cols: ['Metric', 'v11', 'v12'],
      rows: [
        { name: 'Task success', cells: ['86%', '91%'], tone: 'ok' },
        { name: 'Every trial passed (pass^3)', cells: ['71%', '68%'], tone: 'fail' },
        { name: 'Policy errors per 1,000', cells: ['4', '2'], tone: 'ok' },
        { name: 'Missed handoffs', cells: ['3', '9'], tone: 'fail' },
        { name: 'Median time to finish', cells: ['41 s', '37 s'], tone: 'ok' },
        { name: 'Cost per successful task', cells: ['$0.09', '$0.07'], tone: 'ok' },
      ],
      notes: [
        'v12 finishes more tasks, faster and cheaper, yet fails more often across repeated trials and misses 3 times as many requests for a person.',
        'Example: Harbourdesk and every figure here are invented.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'To evaluate AI agent performance, measure whether the agent finished the task, how reliably it does so, how long it took, what it cost and whether it broke a rule. Product managers, evaluation leads and research engineers use these numbers to decide whether a new model, prompt or tool ships. Scored on live traffic, the same numbers show the week an agent starts to slip. Definitions come from each framework’s own documentation, as listed on 22 November 2026.',
    },

    { kind: 'h2', id: 'end-state', text: 'Start from the end state the agent leaves' },
    {
      kind: 'p',
      text: `Anthropic’s engineering guide [Demystifying evals for AI agents](${ANTHROPIC}), published on 9 January 2026, gives the words most frameworks share:`,
    },
    {
      kind: 'list',
      items: [
        '**Task:** “a single test with defined inputs and success criteria”.',
        '**Trial:** one attempt at a task. Answers vary, so each task runs several times.',
        '**Grader:** “logic that scores some aspect of the agent’s performance”.',
        '**Transcript:** the full record of a trial, with its outputs, tool calls and intermediate results.',
        '**Outcome:** “the final state in the environment at the end of the trial”.',
      ],
    },
    {
      kind: 'p',
      text: 'The guide’s example is a flight booking. The transcript holds the agent saying the flight is booked. The end state is a reservation in the booking database, or no reservation at all. Grade the end state wherever you can write it down. For an agent that serves customers, the end state often sits in another system: the refund on the account, the confirmation email in the customer’s inbox, the address saved on the order.',
    },

    { kind: 'h2', id: 'metrics', text: 'AI agent performance metrics, one by one' },
    {
      kind: 'p',
      text: 'Most agents need the metrics in the table, reported per task type, because a refund task and a delivery-date question fail in different ways.',
    },
    {
      kind: 'table',
      caption: 'AI agent evaluation metrics: what each measures and how to score it',
      cols: ['Metric', 'What it measures', 'How to score it'],
      rows: [
        ['Task success', 'Whether the end state matches the task', 'Code on the end state, or a model judging the run against the task'],
        ['Reliability (pass^k)', 'Whether every one of k trials succeeds', 'Run each task k times and count the tasks that pass every time'],
        ['Tool use', 'Right tools, right order, right arguments', 'Trajectory match, precision and recall'],
        ['Latency', 'Time to reply and time to finish', 'Timestamps on every step'],
        ['Cost per task', 'Model tokens plus every tool and service used', 'All costs divided by successful tasks'],
        ['Policy errors', 'Answers or actions that break a written rule', 'A rubric per rule, and code where the rule is a number'],
        ['Escalation', 'Handoffs to a person, and the ones that were missed', 'Count handoffs, and review every request for a person'],
      ],
    },

    { kind: 'h3', id: 'task-success', text: 'Task success' },
    {
      kind: 'p',
      text: `Task success rate is the share of tasks whose end state matches what the task asked for. Frameworks score it two ways. With a reference, you write the end state down and compare: Ragas’s [agent metrics](${RAGAS}) include a goal accuracy score that compares “the workflow’s end state” with the end state you wrote down. Without a reference, a model reads the run and judges it. DeepEval’s [Task Completion](${DEEPEVAL}) metric extracts the task and the outcome from the trace, asks a model how well they align, and needs no reference answer. Use a reference wherever the end state can be written down, such as an amount, a date or a saved record, and keep model judges for open tasks like research or drafting.`,
    },

    { kind: 'h3', id: 'reliability', text: 'Reliability across trials: pass^k' },
    {
      kind: 'p',
      text: `An agent that succeeds once may fail the next customer. The [τ-bench](${TAU}) paper, published in June 2024, proposed pass^k to measure this: a task counts only if every one of k trials succeeds. It reported that even gpt-4o succeeded on fewer than half its tasks, and that pass^8 fell under 25% in the retail domain. Anthropic’s guide sets pass^k beside pass@k, which “measures the likelihood that an agent gets at least one correct solution in k attempts”. At a 75% success rate per trial, pass^3 is about 42%.`,
    },
    {
      kind: 'p',
      text: 'Use pass@k where one good answer is enough, such as a coding agent whose work a person reviews before it ships. Use pass^k for agents that serve customers, where every conversation is a trial and each wrong answer reaches a person.',
    },

    { kind: 'h3', id: 'tool-use', text: 'Tool use and trajectory' },
    {
      kind: 'p',
      text: `The trajectory is the list of tool calls an agent made, in order. Google Cloud’s [Vertex AI agent evaluation](${VERTEX}) documentation lists six ways to score it:`,
    },
    {
      kind: 'list',
      items: [
        '**Exact match:** the calls match a reference list in content and order.',
        '**In-order match:** every reference call appears in order, with extra calls allowed.',
        '**Any-order match:** every reference call appears, in any order.',
        '**Precision:** the share of the agent’s calls that appear in the reference.',
        '**Recall:** the share of reference calls the agent made.',
        '**Single tool use:** whether one named tool was called at all.',
      ],
    },
    {
      kind: 'p',
      text: 'Ragas scores the same thing as tool call accuracy and a tool call F1 score, which combines precision and recall. Pick the strictness the job needs. Use exact match for a regulated flow, and in-order match where extra lookups are harmless. Use recall where a step must never be skipped, such as checking a customer’s identity before a refund.',
    },

    { kind: 'h3', id: 'latency', text: 'Latency' },
    {
      kind: 'p',
      text: 'Vertex AI adds latency, the time an agent takes to return a response, and failure to every evaluation by default. Measure latency per step and end to end, and report the median and the slowest 5% beside the average, because one stuck run hides inside a good average. Some agents wait on the outside world, such as a sign-in code by text or a reply email. For those, split the agent’s own working time from the time spent waiting, or a slow sender looks like a slow agent.',
    },

    { kind: 'h3', id: 'cost', text: 'Cost per task' },
    {
      kind: 'p',
      text: 'Cost per task adds up everything one task used. That means input and output tokens at the model’s rates, plus each tool and service: browser hours, sandbox time, texts, calls and emails. Divide by successful tasks rather than attempts, because a failed run still costs money. For example, an agent at 4 cents a run that succeeds 80% of the time costs 5 cents per successful task. A cheaper model at 3 cents a run that succeeds half the time costs 6 cents per success.',
    },

    { kind: 'h3', id: 'policy-errors', text: 'Policy errors' },
    {
      kind: 'p',
      text: 'A policy error is an answer or action that breaks a written rule. Examples are a refund over the agent’s limit, a delivery promise the carrier can’t meet, or personal data shared without a check. Write each rule as a test. Where the rule is a number, such as refunds up to £50 without approval, check it in code. Where it is judgement, such as no medical advice, grade it with a rubric and a model calibrated against a person. Report policy errors per 1,000 conversations, split into critical rules that block a release and minor ones that open a ticket.',
    },

    { kind: 'h3', id: 'escalation', text: 'Escalation' },
    {
      kind: 'p',
      text: 'Escalation rate is the share of conversations handed to a person. Count it, then review both ways an agent gets it wrong. It can hand off a question it could have resolved, or fail to hand off when a customer asks for a person or a rule says it must. A team that chases a lower escalation rate alone can hide the second kind, so report missed handoffs as their own line.',
    },

    { kind: 'h2', id: 'offline-online', text: 'Offline vs online evaluation for AI agents' },
    {
      kind: 'p',
      text: `LangSmith’s [evaluation concepts](${LANGSMITH_EVAL}) page draws the line clearly. Offline evaluations “target examples from datasets: curated test cases with reference outputs”. Online evaluations “target runs and threads from tracing: real production traces without reference outputs”. OpenAI’s [agent evals](${OPENAI}) documentation works from the same traces, each one “the end-to-end record of model calls, tool calls, guardrails, and handoffs for one run”. It calls trace grading “the fastest way to identify workflow-level issues”.`,
    },
    {
      kind: 'table',
      caption: 'Offline and online evaluation of an AI agent, side by side',
      cols: ['Question', 'Offline evaluation', 'Online evaluation'],
      rows: [
        ['What it runs on', 'A fixed set of tasks', 'A sample of real runs'],
        ['Reference answers', 'Written for each task', 'Usually none'],
        ['When', 'Before every release', 'Every day in production'],
        ['Best at', 'Comparing versions like for like', 'Failures nobody wrote a task for'],
        ['Blind spot', 'Tasks unlike real traffic', 'Customers meet the problem first'],
      ],
    },
    {
      kind: 'p',
      text: 'Anthropic’s guide warns that automated evals “can create false confidence if it doesn’t match real usage patterns”, while production monitoring is reactive. Its summary is the plan most teams settle on: “automated evals for fast iteration, production monitoring for ground truth, and periodic human review for calibration.” The guide to [AI agent observability](/blog/ai-agent-observability) compares the tools that trace production runs: every model call, tool call and reply, in order.',
    },

    { kind: 'h3', id: 'suites', text: 'One suite for new tasks, one for regressions' },
    {
      kind: 'p',
      text: 'Split the offline set in two. Capability evals ask what the agent can do well, and “should start at a low pass rate”. Regression evals ask whether it still handles everything it used to, and “should have a nearly 100% pass rate”. Anthropic’s guide adds that “20-50 simple tasks drawn from real failures is a great start”, so the first suite can come from last month’s escalations. The method for writing and running those tasks is in [how to test AI agents](/blog/how-to-test-ai-agents).',
    },

    { kind: 'h2', id: 'graders', text: 'Who grades: code, a model or a person' },
    {
      kind: 'list',
      items: [
        '**Code:** fast, cheap, objective and reproducible, in Anthropic’s words, and brittle when a correct answer is phrased differently. Use it for amounts, dates, tool calls and end states.',
        '**A model:** flexible, able to grade thousands of runs and good at nuance, though non-deterministic and dearer than code. Use it for tone, helpfulness and open answers.',
        '**A person:** the gold standard, and slow and expensive. Use people to calibrate model graders and to review a weekly sample.',
      ],
    },
    {
      kind: 'p',
      text: 'LangSmith’s page adds pairwise evaluators, which compare the outputs of two versions on the same input, useful when choosing between a current model and its replacement. Calibrate any model grader before trusting it: have a person grade 20 to 50 runs, compare, and rewrite the rubric until the two agree on nearly every run.',
    },

    { kind: 'h2', id: 'event-log', text: 'Scoring from an event log' },
    {
      kind: 'p',
      text: 'An event log records every step of a run in order, with the time and what came back. That covers each page the agent visited, each email and text it received, each call and each sandbox result. Every metric reads straight from it:',
    },
    {
      kind: 'list',
      items: [
        '**Task success:** the last events match the end state, such as a confirmation email received.',
        '**Tool use:** the order of steps against the reference.',
        '**Latency:** the time between events, with waiting split from working.',
        '**Cost:** the billed events, added up.',
        '**Policy errors and escalation:** the words in each reply, and any handoff.',
      ],
    },
    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'Task 41 · scored from its event log',
        who: 'A delivery address change at shop.example, third trial',
        rows: [
          { time: '09:00:02', text: 'email.received · “Your sign-in link”', tone: 'info' },
          { time: '09:00:06', text: 'page.visited · Order 7731, delivery address', tone: 'info' },
          { time: '09:00:19', text: 'page.visited · New address saved', detail: 'Screenshot kept', tone: 'ok' },
          { time: '09:00:21', text: 'Agent: “Done, your parcel goes to the new address”', tone: 'ok' },
          { time: '09:12:40', text: 'email.received · “We’ve updated your delivery address”', tone: 'ok' },
          { time: '09:12:41', text: 'Scored: task success', detail: '19 s working, 12 min waiting', tone: 'ok' },
        ],
        foot: 'Example: the shop, the task and every time here are invented.',
      },
      caption: 'One trial of one task. The confirmation email at 09:12 proves the address changed, where the agent’s reply only claims it. shop.example is an invented example.',
    },
    {
      kind: 'p',
      text: 'Obsession, the toolkit for AI agents, gives each run its own sandbox, browser, inbox and phone number on one API and one bill, as the [Train and test agents blueprints](/blueprints/train-and-test-agents) sets out. Every email, text, call, page and sandbox run lands in one event log, which your test runner reads with obsession.events.list({ persona: run.id }). A persona costs nothing while it waits, so thousands of runs can each wait days for a reply.',
    },
    {
      kind: 'cta',
      text: 'Give every evaluation run a real sandbox, browser, inbox and phone number, and score each step from one event log.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'compared', text: 'Evaluation frameworks for AI agents, compared', compare: true },
    { kind: 'p', text: 'We make Obsession, so every other option is described from its provider’s own pages as of 22 November 2026.' },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to evaluate an AI agent, from each provider’s own pages, as listed on 22 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing: reading a few chats', 'Costs no time', 'Free', 'Misses rare failures and slow drift', 'A prototype with no users yet'],
        ['By hand: a sheet and a person', 'Catches nuance a script misses', 'Free, plus staff hours', 'Slow, and grades vary between reviewers', 'Calibrating graders on 20 to 50 tasks'],
        [
          `[Ragas](${RAGAS_GH})`,
          'Tool call accuracy, tool call F1, goal accuracy and topic adherence',
          'Free, open source (Apache 2.0)',
          'A library: you run it and keep the results',
          'Python teams scoring tool use and goals',
        ],
        [
          `[DeepEval](${DEEPEVAL_GH})`,
          'Task completion and plan adherence, judged by a model from the trace',
          'Free, open source (Apache 2.0)',
          'Task completion uses no reference answer',
          'Open tasks with no single right answer',
        ],
        [
          `[τ-bench](${TAU_GH})`,
          'Simulated customers, tools and policies, scored with pass^k',
          'Free, open source (MIT)',
          'Its own domains, such as retail',
          'Comparing models on customer service tasks',
        ],
        [
          `[Braintrust](${BRAINTRUST_PRICING})`,
          'Datasets, experiments and scores by a model, autoevals or code',
          'Starter: $0, 10,000 scores\nPro: $249 a month, 50,000 scores',
          'Starter keeps data 14 days',
          'Teams comparing versions before each release',
        ],
        [
          `[LangSmith](${LANGSMITH_PRICING}) (LangChain)`,
          'Offline datasets and online evaluators on production traces',
          'Developer: $0, 1 seat, 5,000 traces\nPlus: $39 a seat a month, 10,000 traces',
          'Base traces kept 14 days',
          'Teams building on LangChain or LangGraph',
        ],
        [
          'Obsession (ours): [Sandbox](/sandbox), [Browser](/browser), [Personas](/personas), [Drift watch](/blueprints/drift-watch)',
          'A real sandbox, browser, inbox and number per run, with every step in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Supplies the environment and the log, with scoring in your own code or a framework',
          'Tasks with codes, emails, texts or waits of days',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'Most teams pair a scoring framework with an environment to run the tasks in. Ragas, DeepEval, Braintrust and LangSmith grade, and a real or simulated environment supplies the inboxes, pages and services. τ-bench is a public benchmark for comparing models on its own tasks before you write yours. Tools built for testing chatbots and voice agents are compared in [AI chatbot testing tools](/blog/best-ai-chatbot-testing-tools).',
    },

    { kind: 'h2', id: 'ship-decision', text: 'Turning scores into a ship decision' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Write each task with its end state.** A pass is a task a second engineer could grade without asking you.',
        '**Set a threshold per metric before running.** For example: 100% on the regression suite, no critical policy errors, and pass^3 no lower than the last version.',
        '**Run 3 trials per task offline.** A pass is every threshold met on the new version.',
        '**Compare versions side by side.** Put task success, pass^3, latency, cost per successful task, policy errors and missed handoffs in one table.',
        '**Ship, then score a live sample every day.** A pass is live task success close to offline, for example within 5 points.',
        '**Read 20 failed transcripts a week.** Each one becomes a new task or a sharper rubric.',
      ],
    },

    { kind: 'h2', id: 'limits', text: 'Where evaluation numbers mislead' },
    {
      kind: 'list',
      items: [
        '**Saturated suites.** When every task passes, the suite has stopped measuring, so add harder tasks from recent failures.',
        '**Judges with the agent’s blind spots.** A model grader from the same family as the agent can miss what the agent misses, so calibrate it against a person.',
        '**Averages that hide the tail.** A handful of runs that loop for minutes can double an average cost, so report the slowest and costliest 5% as well.',
        '**Environments that never change.** Real sites and services change their pages and emails, so score part of every suite against [real inboxes, numbers and browsers](/use-cases/ai-agent-evaluation).',
      ],
    },

    { kind: 'h2', id: 'questions', text: 'Questions about evaluating AI agent performance' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What metrics measure AI agent performance?',
          a: 'Task success, reliability across repeated trials (pass^k), tool use, latency, cost per successful task, policy errors and escalation, including missed handoffs. Report each per task type, and set a threshold for each before a release is tested.',
        },
        {
          q: 'How do you measure AI agent performance in production?',
          a: 'Score a daily sample of real runs from their traces or event logs. Measure task success from the end state, latency per step, cost per successful task, policy errors and handoffs. Production runs usually have no reference answers, so use code where the end state can be checked and a calibrated model grader for the rest.',
        },
        {
          q: 'What is the difference between offline and online evaluation?',
          a: 'Offline evaluation runs a fixed set of tasks with reference answers before a release, so versions can be compared like for like. Online evaluation scores real production runs, usually without reference answers, and finds failures nobody wrote a task for. LangSmith’s documentation draws the line the same way.',
        },
        {
          q: 'What is pass^k?',
          a: 'pass^k is the share of tasks where every one of k trials succeeds. The τ-bench paper proposed it in June 2024 to measure how reliably an agent behaves. Anthropic’s guide gives the arithmetic: an agent with a 75% success rate per trial passes three trials in a row about 42% of the time.',
        },
        {
          q: 'What is an AI agent evaluation framework?',
          a: 'A library or platform that runs tasks against an agent and scores the results. On 22 November 2026, Ragas and DeepEval were free, open source libraries with agent metrics. Braintrust and LangSmith were hosted platforms with free plans, and paid plans from $249 a month and $39 a seat a month. Google Cloud’s Vertex AI documented six trajectory metrics for scoring tool calls.',
        },
        {
          q: 'How do you calculate cost per task for an AI agent?',
          a: 'Add every cost one task used: input and output tokens at the model’s rates, plus browser time, sandbox time, texts, calls and emails. Divide the total by successful tasks, because failed runs cost money too. An agent at 4 cents a run with an 80% success rate costs 5 cents per successful task.',
        },
        {
          q: 'How does Obsession help evaluate AI agents?',
          a: 'Obsession gives each evaluation run its own sandbox, browser, inbox and phone number. Every email, text, call, page and sandbox result lands in one event log for your own code to score. A persona is an AI agent with its own inbox, number and browser under one name, and it costs nothing while it waits, so a task can run for days. The sandbox is $0.12 an active vCPU hour, billed only while its CPU works, and the browser $0.10 an hour. Teams start on the Free plan, then $20, $99 or $499 a month.',
          link: { label: 'AI agent evaluation', to: '/use-cases/ai-agent-evaluation' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'Every definition, metric and price is from the provider’s own documentation or pricing page, as listed on 22 November 2026, and each licence is from the project’s own repository. Harbourdesk, shop.example and every figure in the pictures are invented examples.',
    },
  ],

  sources: [
    { title: 'Demystifying evals for AI agents', publisher: 'Anthropic', url: ANTHROPIC, date: '2026-01-09' },
    { title: 'Agentic or tool use metrics', publisher: 'Ragas documentation', url: RAGAS },
    { title: 'Task Completion', publisher: 'DeepEval documentation', url: DEEPEVAL },
    { title: 'τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains', publisher: 'arXiv (Yao, Shinn, Razavi and Narasimhan)', url: TAU, date: '2024-06-17' },
    { title: 'Evaluate gen AI agents', publisher: 'Google Cloud Vertex AI documentation', url: VERTEX },
    { title: 'Evaluation concepts', publisher: 'LangSmith documentation', url: LANGSMITH_EVAL },
    { title: 'Evaluate agent workflows', publisher: 'OpenAI API documentation', url: OPENAI },
    { title: 'ragas', publisher: 'GitHub', url: RAGAS_GH },
    { title: 'deepeval', publisher: 'GitHub', url: DEEPEVAL_GH },
    { title: 'tau2-bench', publisher: 'GitHub (Sierra Research)', url: TAU_GH },
    { title: 'Pricing', publisher: 'Braintrust', url: BRAINTRUST_PRICING },
    { title: 'Pricing', publisher: 'LangChain', url: LANGSMITH_PRICING },
  ],

  related: [
    '/blueprints/train-and-test-agents',
    'recipe:drift-watch',
    'recipe:voice-agent-check',
    'ai-agent-observability',
    'best-ai-chatbot-testing-tools',
  ],
}

import type { BlogPost } from './types'

/* Kit article, Train and test agents (_research/seo/revamp-22nov/PLAN_articles.md, row 12; ARTICLE_BRIEF.md; Seun's
   "write them", 22 Nov 2026). Primary "rl environments for llms" (Google suggestions, US and UK, 22 Nov 2026,
   autocomplete_articles_22nov.json); secondaries from the same run and its long forms: rl environments meaning, rl
   environment creation, reinforcement learning environments for llms, open source rl environments. The kit
   (/kits/train-and-test-agents) owns "rl environments for ai agents" and is linked, never retitled here.
   Readers: research and evaluation engineers at AI labs and agent companies. Their KPIs: task success rate, pass^k,
   accuracy, latency and cost per rollout.
   Read on 22 Nov 2026 at each source's own page: Gymnasium's Env API (reset, step, terminated and truncated, the seed);
   OpenEnv's README (BSD 3-Clause; reset, step and state over a WebSocket; Docker images; committee incl. Meta-PyTorch and
   Hugging Face; the catalogue); verifiers' README (MIT; Environments Hub, prime-rl, Hosted Training); BrowserGym's README
   (its benchmarks, open-ended tasks, AgentLab, "not meant to be a consumer product"; licence not named there, so none
   given); the WebArena paper on arXiv (v4, 16 Apr 2024: 4 domains, functional correctness, 14.41% against 78.24%);
   OSWorld's site (369 tasks, 361 without Google Drive; VMware, VirtualBox, Docker, AWS; 72.36% against 12.24%;
   OSWorld-Verified 28 Jul 2025, OSWorld 2.0 26 Jun 2026; licence not named, so none given); the tau-bench paper on arXiv
   (17 Jun 2024: simulated user, database goal state, pass^k, gpt-4o under 50%, pass^8 under 25% in retail); SWE-bench's
   README (MIT; Docker; Verified 500; SWE-smith). Organisations are named where the page names them.
   Obsession: 3 body sentences (the "what changes" section), the comparison row and 2 cta blocks, in the 22 Nov words and
   prices.ts rates. lab.example and shop.example and every row in the two pictures are invented. No dashes. */

const GYM = 'https://gymnasium.farama.org/api/env/'
const TAU = 'https://arxiv.org/abs/2406.12045'
const OPENENV = 'https://github.com/meta-pytorch/OpenEnv'
const VERIFIERS = 'https://github.com/PrimeIntellect-ai/verifiers'
const BROWSERGYM = 'https://github.com/ServiceNow/BrowserGym'
const WEBARENA = 'https://arxiv.org/abs/2307.13854'
const OSWORLD = 'https://os-world.github.io/'
const SWEBENCH = 'https://github.com/SWE-bench/SWE-bench'

export const post: BlogPost = {
  slug: 'rl-environments-for-llms',
  title: 'RL environments for LLMs: how AI research teams build tasks, rewards and resets for agents',
  dek: 'An RL environment gives a language-model agent a task, a world to act in, a reward for the result and a clean start for the next try. Research teams build one from five parts, and 8 open-source frameworks and benchmarks cover different kinds of task, compared as listed on 22 November 2026.',
  metaTitle: 'RL environments for LLMs: how AI teams build and score them',
  description:
    'RL environments for LLMs, for AI research teams: how to design tasks, state, rewards and resets, when a run needs a real inbox, and 8 frameworks compared.',
  answer:
    'RL environments for LLMs are the programs a language-model agent acts in during reinforcement learning. Each one sets a task, reports what the agent’s actions change, scores the result as a reward and resets for the next try. Teams build them on frameworks such as Gymnasium, OpenEnv and verifiers, and test against benchmarks such as WebArena, OSWorld, τ-bench and SWE-bench.',
  primaryKeyword: 'rl environments for llms',
  keywords: [
    'rl environments meaning',
    'rl environment creation',
    'reinforcement learning environments for llms',
    'open source rl environments',
  ],
  category: 'Train and test agents',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 14,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'Episode 2,207: a sign-up task',
      who: 'Training run at lab.example, task on shop.example',
      rows: [
        { time: '00:00', text: 'Reset: a fresh inbox, US number and browser', detail: 'An empty inbox, no cookies', tone: 'info' },
        { time: '00:01', text: 'page.visited · shop.example/signup', detail: 'Form filled, screenshot kept', tone: 'info' },
        { time: '00:01', text: 'sms.received · “Your code is 730215”', detail: 'Arrived 41 s after the form was sent', tone: 'ok' },
        { time: '00:02', text: 'email.received · “Welcome to Shop”', detail: 'Account confirmed', tone: 'ok' },
        { time: '00:04', text: 'sandbox.finished · end-state check', detail: 'Delivery address saved on the account', tone: 'ok' },
        { time: '00:04', text: 'Reward 1.0, episode ends', detail: 'Scored from this log alone', tone: 'ok' },
      ],
      foot: 'Each row is an event the reward function reads, in order. lab.example and shop.example are invented examples.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'RL environments for LLMs are where a language-model agent practises a task during reinforcement learning (RL). RL trains a model by letting it try, scoring each try and shifting the model towards the tries that scored higher. For an agent, the environment is everything outside the model. That covers the task text, the tools it can call, the sites and files it works in, and the code that decides whether it succeeded. Research engineers at AI labs and agent companies build environments to train models. Evaluation teams reuse the same tasks to score each new model version before it ships.',
    },

    { kind: 'h2', id: 'what-it-is', text: 'What is an RL environment for an LLM agent?' },
    {
      kind: 'p',
      text: 'An RL environment is a program with two jobs: it shows the agent a situation, and after each action it reports what changed. Classic environments were games and physics simulations with numeric moves. For a language-model agent the actions are text, such as a tool call, a click, a shell command or a reply to a user. The observations are text or images: a page’s accessibility tree, a screenshot, a command’s output, the body of an email.',
    },
    {
      kind: 'p',
      text: 'Most RL code expects the reset and step interface that Gymnasium defines. [Gymnasium’s Env API](' + GYM + '), the set of calls any trainer can make, has two at its centre. A call to reset() returns the first observation. A call to step(action) returns five values: the next observation, a reward, terminated, truncated and an info dictionary for debugging and logging. Terminated means the task reached an end state, such as its goal. Truncated means the episode stopped for a reason outside the task, typically a time limit. Keep the two apart for LLM agents. Running out of turns is a different failure from a wrong answer, and trainers handle the two cases differently.',
    },
    {
      kind: 'p',
      text: 'One attempt at a task, from reset to its end, is an episode; LLM training libraries often call it a rollout. The trainer compares a batch of rollouts on the same task and makes the higher-scoring behaviour more likely. Everything that follows serves that comparison: tasks worth attempting, a reward that measures the right thing, and a reset that makes attempt 500 as fair as attempt 1.',
    },

    { kind: 'h2', id: 'design', text: 'How do you design an RL environment for language models?' },
    {
      kind: 'p',
      text: 'Settle the tasks, the state, the actions and observations, the reward and the reset before writing the environment class. Each decision limits what the agent can learn.',
    },
    { kind: 'h3', id: 'tasks', text: 'Tasks' },
    {
      kind: 'p',
      text: 'A task is an instruction, a starting state and a way to check the result. Strong task sets come from real work, such as “change the delivery address on order 4417” or “fix the failing test in this repository”, and each has a known correct end. Split them into a training set and a held-out set before training starts. The held-out score tells you whether the agent learned the skill or memorised the tasks.',
    },
    { kind: 'h3', id: 'state', text: 'State' },
    {
      kind: 'p',
      text: 'State is everything a task can change: database rows, files, a browser’s cookies, an inbox’s messages, the texts on a phone number. The environment must know the state at the start and read it at the end, because the reward is usually a check on the final state. One benchmark for agents that serve users, [τ-bench](' + TAU + '), scores each conversation by comparing the database at its end with an annotated goal state.',
    },
    { kind: 'h3', id: 'actions', text: 'Actions and observations' },
    {
      kind: 'p',
      text: 'Decide what the agent can do and what it sees back. A web agent clicks and types, and sees an accessibility tree or a screenshot. A coding agent runs shell commands and reads their output. A support agent calls domain tools and reads their results. A short list of well-described actions is easier for the agent to learn and for you to debug than a sprawling tool list. Cap every episode with a turn or time limit and report the cap as truncated.',
    },
    { kind: 'h3', id: 'reward', text: 'Reward' },
    {
      kind: 'p',
      text: 'The reward turns the result into a number. LLM environments mostly use three kinds. The first is a programmatic check on the final state: the tests pass, the right row changed, the right email arrived. The second is a rubric scored by another model, for open-ended answers. The third is a step reward for progress on a long task. Programmatic checks are the hardest to game, so use them wherever the task has a checkable end. An agent will find any way to score without doing the task, such as editing the test it is graded on, known as reward hacking. Read a sample of high-reward episodes by eye in every training run.',
    },
    { kind: 'h3', id: 'reset', text: 'Reset' },
    {
      kind: 'p',
      text: 'Reset returns the world to a known start. In a simulation it is a function call. In a container it means a fresh copy of the image. On real services it means a fresh identity: a new inbox with no mail, a new number with no texts, a browser with no cookies. Pass a seed wherever randomness is involved; Gymnasium resets its random number generator from the seed, so a failing episode can be run again exactly.',
    },

    { kind: 'h2', id: 'steps', text: 'How to build an RL environment, step by step' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Write 20 tasks by hand.** Each has an instruction, a starting state and a check that runs without a person. Pass: two engineers agree on the correct end state for every task.',
        '**Wrap it in reset and step.** Use Gymnasium’s signature or a framework built on it, so any trainer can drive the environment. Pass: a scripted agent runs 1,000 episodes with no crash and no state carried from one episode into the next.',
        '**Write the reward as code, then attack it.** Try to score without doing the task: edit the test, answer the checker instead of the user, stop early. Pass: no shortcut earns more than an honest failed attempt.',
        '**Run the current model before training.** Measure its task success rate across the set. Pass: it solves some tasks and fails others, because a task it always passes or always fails gives the trainer no better attempt to learn from.',
        '**Log every step.** Keep each observation, action, reward and timestamp, with a screenshot for anything visual. Pass: you can rebuild any episode from its log alone and recompute its reward.',
        '**Scale the task set.** Generate variants from templates or real data, hold out a test split and track both scores during training. Pass: the held-out score rises with the training score.',
        '**Cost one episode.** Add up the model calls, the sandbox and browser minutes and any real messages it sends. Pass: the cost per rollout fits the number of rollouts the run needs.',
      ],
    },

    { kind: 'h2', id: 'simulated-or-real', text: 'Simulated or real services?' },
    {
      kind: 'p',
      text: 'LLM environments run on one of three kinds of world, and the choice sets what the agent can learn and what each episode costs.',
    },
    {
      kind: 'table',
      caption: 'The three kinds of world an LLM agent can practise in, and what each costs to reset and repeat.',
      cols: ['', 'Simulated', 'Self-hosted copies', 'Real services'],
      rows: [
        ['What it is', 'Tools and a user played by code or a model', 'Real software run in containers or virtual machines', 'Live email, phone networks and websites'],
        ['Example', 'τ-bench’s tools and simulated user', 'OSWorld’s virtual machines\nSWE-bench’s Docker images', 'A sign-up that texts a code to a real number'],
        ['Reset', 'A function call', 'Restart the container or machine', 'A fresh inbox, number and browser per episode'],
        ['Same run twice', 'Yes, with the same seed and actions', 'Yes, from the same image and actions', 'No, the world moves on, so the log is the copy'],
        ['Realism', 'What the simulator models', 'Real software, frozen at one version', 'Real delays, spam filters, carrier timing and site changes'],
        ['Cost per episode', 'Model calls', 'Model calls and compute for the copies', 'Compute plus each message, number and browser hour'],
        ['Best for', 'Bulk training on dialogue and policy', 'Web, desktop and coding skills at volume', 'Steps that happen only in the real world, and checks before release'],
      ],
    },
    {
      kind: 'p',
      text: 'Teams usually mix them. The bulk of training runs on simulated and self-hosted worlds, where an episode is cheap and repeatable. Real services carry the task families whose hard part happens outside your code, and the evaluation runs that check a model before it ships.',
    },

    { kind: 'h2', id: 'real-world-tasks', text: 'Why some tasks need a real inbox, phone or browser' },
    {
      kind: 'p',
      text: 'Much of the work people want agents to do is defined by events outside any simulator. A sign-up texts a 6-digit code that expires in 10 minutes. A supplier replies by email two days later. A portal keeps the agent signed in for as long as the browser keeps its cookies. A simulator can stand in for each one. It behaves the way its author pictured it: instant delivery, no spam folder, no expired code.',
    },
    {
      kind: 'p',
      text: 'An agent trained only on the stand-in learns the stand-in. It never meets a code that arrives after 40 seconds, a confirmation filed under Promotions or a page that signed it out overnight. It has no behaviour for them, and its task success rate falls the day it meets the real thing. Real pieces give those tasks real timing and real failures. The reward then reads what happened: the text that arrived, the time the email landed, the page the agent saw.',
    },
    {
      kind: 'p',
      text: 'Tasks that wait for weeks need an identity that lasts as long, the subject of [long running AI agents](/blog/long-running-ai-agents). Sessions and sign-in codes are covered in [what works when an AI agent logs in to a website](/blog/can-ai-agents-log-in-to-websites).',
    },
    {
      kind: 'p',
      text: 'Real services bring rules with them. Point training rollouts at services you run or have permission to test. Keep volumes within each site’s terms. End the episode at a CAPTCHA, an identity check or a payment page, and score that as the right place to stop.',
    },

    { kind: 'h2', id: 'score-and-replay', text: 'How to score and replay runs from logs' },
    {
      kind: 'p',
      text: 'The log of an episode feeds the reward, the debugging and the next training run. Log each step as one row: the time, what the agent saw, what it did and what came back. Add a screenshot for anything visual. Keep the model version, the prompt and the task seed in the episode’s header. Tracing tools for agents in production keep similar rows. [AI agent observability](/blog/ai-agent-observability) compares six of them: Langfuse, LangSmith, Arize Phoenix, Datadog, Helicone and Braintrust.',
    },
    {
      kind: 'p',
      text: 'Score from the log, never from the agent’s own report. An agent that writes “Address updated” has claimed a result; the log shows whether the form was saved and whether the confirmation email arrived. Scoring from the log also lets you change the reward later and re-score every old episode without running it again. On real services that is the only way to re-score, because the same run can’t be repeated.',
    },
    {
      kind: 'p',
      text: 'Replay comes in two kinds. Deterministic replay feeds the recorded actions back into the environment from the same seed and gets the same states, which works in simulated and self-hosted worlds. Log replay steps through what was recorded, which is the kind real services allow, so record enough to judge every step without the live site.',
    },
    {
      kind: 'p',
      text: 'Report reliability beside success. The common score, pass@k, counts a task solved if any of k attempts succeeds. The [τ-bench paper](' + TAU + ') introduced pass^k, which counts a task solved only if every attempt succeeds. Its authors found that even gpt-4o succeeded on under 50% of tasks. In retail, under 25% of tasks passed in every one of 8 trials.',
    },
    {
      kind: 'art',
      art: {
        kind: 'runs',
        title: 'One task, 4 runs: pass@4 against pass^4',
        prompt: 'Change the delivery address on order 4417, then confirm the change by email.',
        runs: [
          { label: 'Run 1', answer: 'Address saved; confirmation email at 00:02', verdict: { tone: 'ok', text: 'Pass' } },
          { label: 'Run 2', answer: 'Address saved; confirmation email at 00:03', verdict: { tone: 'ok', text: 'Pass' } },
          { label: 'Run 3', answer: 'New address typed, never saved; no email', verdict: { tone: 'fail', text: 'Fail' } },
          { label: 'Run 4', answer: 'Address saved; confirmation email at 00:02', verdict: { tone: 'ok', text: 'Pass' } },
        ],
        foot: 'pass@4 counts the task solved, because a run passed. pass^4 counts it failed, because a run didn’t.',
      },
      caption: 'The same task run 4 times at an invented shop.example. The policy looks solved on pass@k and unreliable on pass^k.',
    },
    {
      kind: 'p',
      text: 'For an agent that will run unattended, watch pass^k with the rest of the run’s numbers: task success rate, accuracy on held-out tasks, latency per episode and cost per rollout. An agent that passes 3 times in 4 fails about one attempt in four once it is live.',
    },

    { kind: 'h2', id: 'frameworks', text: 'Open-source RL environment frameworks and benchmarks compared', compare: true },
    {
      kind: 'p',
      text: 'Frameworks give you the interface and the plumbing to train against. Benchmarks give you tasks and checks someone has already built and validated. Most teams use one of each and add their own tasks. Every option is described from its own pages and papers as listed on 22 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Open-source RL environment frameworks and benchmarks for LLM agents, as listed on their own pages and papers on 22 November 2026.',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          '[Gymnasium](' + GYM + ') (Farama Foundation)',
          'The reset and step interface most RL code expects, with terminated and truncated kept apart',
          'Free, open source',
          'Defines the reset and step API; each environment supplies its own tasks and reward',
          'Wrapping a new environment so any trainer can drive it',
        ],
        [
          '[OpenEnv](' + OPENENV + ') (Meta-PyTorch, Hugging Face and partners)',
          'reset(), step() and state() over a WebSocket; each environment a Docker image, run locally, on a cloud sandbox or as a Hugging Face Space',
          'Free, open source (BSD 3-Clause)',
          'Catalogue as listed: sandboxed Python, text games, board and card games, web navigation, coding-agent harness tasks',
          'Sharing environments across teams and trainers',
        ],
        [
          '[verifiers](' + VERIFIERS + ') (Prime Intellect)',
          'A library for RL environments and evals, tightly integrated with the Environments Hub',
          'Free, open source (MIT)',
          'Integrations named: Prime Intellect’s prime-rl trainer and Hosted Training',
          'Teams training with prime-rl or publishing to the Environments Hub',
        ],
        [
          '[BrowserGym](' + BROWSERGYM + ') (ServiceNow)',
          'One Gym interface over MiniWoB, WebArena, VisualWebArena, WorkArena, AssistantBench and WebLINX, plus open-ended tasks from any start page',
          'Free, open source',
          'A research framework, “not meant to be a consumer product”',
          'Web agents scored on several benchmarks with one interface',
        ],
        [
          '[WebArena](' + WEBARENA + ')',
          'Fully functional websites in 4 domains, scored on whether each task was completed correctly',
          'No price listed',
          'Scope set by the paper: 4 site types, a map and user manuals',
          'Web skills on realistic sites, with a published human baseline',
        ],
        [
          '[OSWorld](' + OSWORLD + ')',
          'A real computer on Ubuntu, Windows or macOS; 369 tasks, each with a set-up state and an evaluation script',
          'No price listed; you run the virtual machines (VMware, VirtualBox, Docker or AWS)',
          'The published task set: 369, or 361 without the Google Drive tasks',
          'Desktop and multi-app agents',
        ],
        [
          '[τ-bench](' + TAU + ') (Yao, Shinn, Razavi and Narasimhan)',
          'A user played by a language model, domain tools and policy rules; success means the database matches the goal state',
          'No price listed',
          'Simulated users and tools, in the domains the paper defines',
          'Agents that serve users under written policies, measured with pass^k',
        ],
        [
          '[SWE-bench](' + SWEBENCH + ')',
          'Real GitHub issues and codebases; the model writes a patch, scored in Docker; Verified is 500 problems engineers confirmed solvable',
          'Free, open source (MIT)',
          'Software tasks; its SWE-smith toolkit builds training data for them',
          'Coding agents',
        ],
        [
          'Real services, wired by your team',
          'Real inboxes, numbers, browsers and sandboxes from separate providers',
          'Each provider’s own rates, on separate bills',
          'Per-episode reset, clean-up and one ordered log across providers are yours to build and maintain',
          'Teams with engineers to spare for the plumbing',
        ],
        [
          'Obsession (ours): [Train and test agents kit](/kits/train-and-test-agents), [Sandbox](/sandbox), [Browser](/browser), [Personas](/personas)',
          'A fresh inbox, US or UK number, browser and sandbox per episode, under one identity, with every event in one ordered log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops before payment, at any identity check and at any CAPTCHA, which your reward scores as correct endings',
          'Episodes whose steps happen in a real inbox, phone or browser, and evaluation runs replayed from the log',
        ],
      ],
    },
    { kind: 'h3', id: 'frameworks-interface', text: 'Frameworks that give you the interface' },
    {
      kind: 'p',
      text: 'Gymnasium is the reference. Its Env class defines reset and step, and OpenEnv and BrowserGym both keep those calls. [OpenEnv](' + OPENENV + ') carries the idea to LLM post-training. Each environment is a Docker image that answers reset(), step() and state() over a WebSocket, sync or async. It runs locally, on a cloud sandbox or as a Hugging Face Space. A technical committee that includes Meta-PyTorch and Hugging Face governs it. Its catalogue lists sandboxed Python execution, text games such as Wordle, board games from OpenSpiel, BrowserGym’s web tasks and tasks run through coding-agent harnesses.',
    },
    {
      kind: 'p',
      text: 'Prime Intellect’s [verifiers](' + VERIFIERS + ') is a library for creating environments to train and evaluate LLMs. Environments publish to its Environments Hub and train with Prime Intellect’s prime-rl or its Hosted Training.',
    },
    { kind: 'h3', id: 'benchmarks', text: 'Benchmarks with tasks and checks built in' },
    {
      kind: 'p',
      text: 'ServiceNow’s [BrowserGym](' + BROWSERGYM + ') puts web benchmarks such as MiniWoB, WebArena and WorkArena behind one Gym interface. It also accepts open-ended tasks that start from any page, and its companion AgentLab runs agents across them and collects traces. [WebArena](' + WEBARENA + ') builds fully functional websites in four domains: ecommerce, social forums, collaborative software development and content management. It adds a map and user manuals, and scores whether each task was completed correctly.',
    },
    {
      kind: 'stat',
      value: '14.41%',
      label: 'end-to-end task success for the best GPT-4 agent on WebArena, against 78.24% for people',
      source: 'WebArena paper, arXiv, last revised April 2024',
      href: WEBARENA,
    },
    {
      kind: 'p',
      text: '[OSWorld](' + OSWORLD + ') moves the idea to a whole computer, with 369 tasks across real web and desktop apps. Its virtual machines run Ubuntu, Windows or macOS, and every task has a set-up configuration and an evaluation script that runs on the result. Its abstract reports people completing over 72.36% of tasks and the best model 12.24%. Its site announced OSWorld-Verified on 28 July 2025 and OSWorld 2.0 on 26 June 2026.',
    },
    {
      kind: 'p',
      text: 'The τ-bench benchmark tests agents that talk to a user played by a language model. The agent follows domain policies and calls domain tools, and the benchmark checks the database at the end against the goal. [SWE-bench](' + SWEBENCH + ') gives a model a real GitHub issue and its codebase, asks for a patch and scores it in Docker so runs can be reproduced. Its Verified subset is 500 problems engineers confirmed solvable, and its SWE-smith toolkit builds training data for software tasks.',
    },
    {
      kind: 'p',
      text: 'Pick by the task. Write a new language task in verifiers or as an OpenEnv image. Train web skills in BrowserGym over WebArena, desktop work in OSWorld, conversations under policy rules on τ-bench’s pattern of a simulated user and a database check, and coding on SWE-bench with SWE-smith. When a task’s hard part is a text, an email or a login that has to last for days, give those episodes real pieces.',
    },

    { kind: 'h2', id: 'real-pieces', text: 'What changes when every episode has its own inbox, phone and browser' },
    {
      kind: 'p',
      text: 'Obsession, the toolkit for AI agents, gives each episode its own inbox, phone number, browser and [sandbox](/sandbox), on one API and one bill. The reset is obsession.personas.create({ inbox: true, phone: "US", browser: true }), and each code, email and page reaches your reward function in order as an sms.received, email.received or page.visited event. A persona, the one identity holding those pieces, costs nothing while it waits, so many episodes can start at once and wait days for a reply.',
    },
    {
      kind: 'cta',
      text: 'A real inbox, number, browser and sandbox for every training or evaluation run. Every step lands in one event log, with screenshots, to score and replay.',
      to: '/kits/train-and-test-agents#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'limits', text: 'Where real-service environments stop' },
    {
      kind: 'list',
      items: [
        '**A reset clears your side of the task.** A fresh inbox and number start clean, but the site on the other end keeps its own records and may change its page tomorrow. Read every failure against the screenshot of the page the agent saw.',
        '**Each episode costs more.** Messages, numbers and browser hours are priced per use, so keep real services for the task families that need them.',
        '**Waiting takes real time.** A task that waits for a day-3 reply takes 3 days, so run those episodes in parallel and outside the training loop’s fastest path.',
        '**Some steps end the episode.** A CAPTCHA, an identity check or a payment page is a hard stop. Score stopping there as correct, so the agent learns where the boundary is.',
        '**Other companies’ sites have terms.** Read them, keep volumes low and run high-volume training against services you control.',
      ],
    },
    {
      kind: 'cta',
      text: 'Evaluation teams rerun their hardest tasks after every model change, each task on its own identity, and read the regressions from the log.',
      to: '/use-cases/ai-agent-evaluation',
      label: 'See how it works',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'What does RL environment mean?',
          a: 'An RL environment is the program a model practises in during reinforcement learning. It presents a task, applies each action the model takes, returns what changed and a reward for the result, and resets for the next attempt. For a language-model agent the actions are tool calls, clicks, commands or replies.',
        },
        {
          q: 'How is an RL environment different from a benchmark?',
          a: 'A benchmark is a fixed set of tasks with a score, built to compare models. An environment is the program that serves tasks, applies actions and returns rewards, built to train them. WebArena and SWE-bench ship an environment with their tasks, so teams use them both ways.',
        },
        {
          q: 'Can you train an LLM agent with RL on live websites?',
          a: 'Yes, with care. Live sites change, can’t be reset and have terms of use. Most teams train on simulated or self-hosted copies, and keep live services for the tasks that depend on them and for evaluation. A CAPTCHA or an identity check should end the episode, scored as the right place to stop.',
          link: { label: 'Can AI agents log in to websites?', to: '/blog/can-ai-agents-log-in-to-websites' },
        },
        {
          q: 'What reward should an LLM environment use?',
          a: 'A programmatic check on the final state wherever the task has a checkable end: the tests pass, the right database row changed, the right email arrived. Use a rubric scored by a model for open-ended answers, and read a sample of high-reward episodes to catch the agent gaming the check.',
        },
        {
          q: 'How many tasks does an RL environment need?',
          a: 'Start with 20 hand-checked tasks to prove the environment works, then generate variants from templates or real data and hold some out. For scale, SWE-bench Verified has 500 problems and OSWorld 369 tasks.',
        },
        {
          q: 'How do you replay an episode that ran on a real service?',
          a: 'From its log. The live site has moved on. Record each observation, action, timestamp and screenshot, then step through the log and recompute the reward. Deterministic replay from a seed works only in simulated or self-hosted worlds.',
          link: { label: 'AI agent evaluation on real tasks', to: '/use-cases/ai-agent-evaluation' },
        },
      ],
    },

    {
      kind: 'note',
      title: 'About the figures',
      text: 'We make Obsession, so every other option is described from its provider’s own pages and papers as of 22 November 2026. Benchmark scores are as each paper reports them, for the models it tested when it was written. lab.example and shop.example are invented, and the episodes shown are examples.',
    },
  ],

  sources: [
    { title: 'Env API', publisher: 'Gymnasium (Farama Foundation)', url: GYM },
    { title: 'τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains', publisher: 'arXiv (Yao, Shinn, Razavi and Narasimhan)', url: TAU, date: '2024-06-17' },
    { title: 'OpenEnv: an interface library for RL post training with environments', publisher: 'GitHub (meta-pytorch)', url: OPENENV },
    { title: 'verifiers: a library for RL environments and evals', publisher: 'GitHub (Prime Intellect)', url: VERIFIERS },
    { title: 'BrowserGym: a Gym environment for web task automation', publisher: 'GitHub (ServiceNow)', url: BROWSERGYM },
    { title: 'WebArena: A Realistic Web Environment for Building Autonomous Agents', publisher: 'arXiv', url: WEBARENA, date: '2024-04-16' },
    { title: 'OSWorld: a real computer environment for multimodal agents', publisher: 'OSWorld', url: OSWORLD },
    { title: 'SWE-bench', publisher: 'GitHub (SWE-bench)', url: SWEBENCH },
  ],

  related: ['/use-cases/ai-agent-evaluation', '/kits/train-and-test-agents', 'recipe:drift-watch', 'ai-agent-observability', 'long-running-ai-agents'],
}

import type { BlogPost } from './types'

/* Kit article (_research/seo/revamp-22nov/PLAN_articles.md, row 6; Seun's "write them", 22 Nov 2026; brief in
   ARTICLE_BRIEF.md): how to test AI agents, for support, QA and AI operations teams whose customers talk to an AI agent.
   Primary "how to test ai agents"; secondaries from Google suggestions (US and UK, 22 Nov 2026,
   autocomplete_articles_22nov.json and a fresh run): how to test ai agent accuracy, how to unit test ai agents, ai agent
   testing framework, testing ai agents, ai agent testing best practices. "ai agent testing tools" stays with
   /blog/best-ai-chatbot-testing-tools and "ai voice agent testing" with /blog/ai-voice-agent-testing, each linked by its
   own title. Every source read on its own page on 22 Nov 2026: the CMA's AI agents guidance (updated 30 Oct 2026);
   Anthropic's "Demystifying evals for AI agents" (9 Jan 2026); the τ-bench paper (arXiv, 17 Jun 2024); OWASP LLM01:2025;
   Promptfoo's pricing (and its MIT licence on GitHub); Braintrust's and LangChain's pricing; Retell's testing overview
   and testing pricing. The tribunal decision in Moffatt v. Air Canada refused the fetch (403), so the case is linked
   through /blog/ai-chatbot-fails, which cites it. kestrelhome.example and every answer in both pictures are invented. */

const CMA = 'https://www.gov.uk/government/publications/complying-with-consumer-law-when-using-ai-agents/complying-with-consumer-law-when-using-ai-agents'
const ANTHROPIC = 'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents'
const TAU = 'https://arxiv.org/abs/2406.12045'
const OWASP = 'https://genai.owasp.org/llmrisk/llm01-prompt-injection/'
const RETELL_TESTS = 'https://docs.retellai.com/test/test-overview'
const PROMPTFOO_PRICING = 'https://www.promptfoo.dev/pricing/'
const BRAINTRUST_PRICING = 'https://www.braintrust.dev/pricing'
const LANGSMITH_PRICING = 'https://www.langchain.com/pricing'
const RETELL_PRICING = 'https://docs.retellai.com/test/testing-pricing'

export const post: BlogPost = {
  slug: 'how-to-test-ai-agents',
  title: 'How to test AI agents: accuracy, tone and what they promise customers, from unit tests to live calls',
  dek: 'A method for support, QA and AI operations teams whose customers talk to an AI agent. It covers six levels of testing, a scorecard for accuracy, tone and promises, a weekly routine, and calling your own agent as a customer.',
  metaTitle: 'How to test AI agents: accuracy, tone and customer promises',
  description:
    'How to test AI agents: unit tests, scripted chats, simulated customers and live calls, with a scorecard for accuracy, tone and the promises agents make.',
  answer:
    'To test AI agents, run the same scored conversations at six levels, from unit tests on each tool call to the live agent called, messaged and emailed as a real customer. Score each one on accuracy, action, tone and every promise made, including whether the promised email, text or callback arrives. On Obsession, a persona with its own phone number and inbox runs the live checks every morning and keeps every answer word for word in one event log.',
  primaryKeyword: 'how to test ai agents',
  keywords: [
    'how to test ai agent accuracy',
    'how to unit test ai agents',
    'ai agent testing framework',
    'testing ai agents',
    'ai agent testing best practices',
  ],
  category: 'Test sign-up and agents',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'kestrelhome.example · 1 return question',
      who: 'A test customer on chat, phone and email, from Tuesday 07:00',
      rows: [
        { time: 'Tue 07:00', text: 'Site chat: “Can I return a sale item after 30 days?”', tone: 'info' },
        { time: 'Tue 07:00', text: 'Bot: “Yes, within 60 days”', detail: 'The policy page says 30', tone: 'fail' },
        { time: 'Tue 07:06', text: 'Voice line: “I’ll email your return label within the hour”', tone: 'info' },
        { time: 'Tue 07:07', text: 'Asked for a person', detail: 'Transferred in 2 minutes', tone: 'ok' },
        { time: 'Tue 08:06', text: 'No return label email', detail: 'An hour after the promise', tone: 'fail' },
        { time: 'Wed 09:14', text: 'Return label email arrives', detail: '26 hours late', tone: 'late' },
      ],
      foot: 'Example: Kestrel Home and every answer here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'To test AI agents, run the same scored conversations at six levels, from unit tests on each tool call to live calls, chats and emails as a real customer. The six are unit tests, scripted conversations, simulated customers, adversarial prompts, regression runs and live tests. Support, QA and AI operations teams use them on any agent customers talk to, such as a support bot, a voice agent or a sales agent that books demos. Each level catches failures the one before it misses. Only the live test shows what a customer receives, including the email or callback the agent promised.',
    },

    { kind: 'h2', id: 'what-to-test', text: 'What to test in an AI agent' },
    { kind: 'p', text: 'An agent that talks to customers can fail in six ways, and a test plan covers each one.' },
    {
      kind: 'list',
      items: [
        '**Accuracy:** a fact or policy stated wrongly, such as a 60 day return window when the policy says 30.',
        '**Action:** the right words with the wrong tool call, such as a refund on the wrong order or a booking for the wrong day.',
        '**Tone:** blame, coldness, words your brand never uses, or a bot that won’t say it is an AI when asked.',
        '**Promises:** a callback, email or refund the agent offers that policy doesn’t allow, or that never arrives.',
        '**Handoff:** a customer who asks for a person and never reaches one.',
        '**Safety:** another customer’s details shared, or instructions hidden in a message obeyed.',
      ],
    },
    {
      kind: 'p',
      text: `The business answers for all six. The UK Competition and Markets Authority (CMA) publishes guidance on [complying with consumer law when using AI agents](${CMA}), last updated on 30 October 2026. It says “you are responsible for what an AI agent does”, even when a third party provides it. It also tells businesses to “regularly check how well an AI agent is performing”. A tribunal ordered Air Canada to pay a refund its website chatbot had promised against its own policy, one of the [AI chatbot fails](/blog/ai-chatbot-fails) that customers found before the companies did.`,
    },

    { kind: 'h2', id: 'test-types', text: 'Test types, from unit tests to live calls' },
    {
      kind: 'p',
      text: `Every level shares the same parts. Anthropic’s engineering guide [Demystifying evals for AI agents](${ANTHROPIC}) was published on 9 January 2026. It defines a task as “a single test with defined inputs and success criteria”, and each attempt at it as a trial. A grader is “logic that scores some aspect of the agent’s performance”. The guide separates the transcript, everything the agent said and did, from the outcome: “the final state in the environment at the end of the trial”. An agent can say a booking is made while no booking exists, so the strongest tests check the end state itself: the booking in the system, the refund on the account.`,
    },
    {
      kind: 'table',
      caption: 'The six levels of testing an AI agent, what each catches and when it runs',
      cols: ['Level', 'What it catches', 'Graded by', 'When it runs'],
      rows: [
        ['Unit tests on tools and prompts', 'Wrong tool, wrong arguments, broken prompt', 'Code', 'Every commit'],
        ['Scripted conversations', 'Wrong answers and end states on known questions', 'Code, a model and a person', 'Before every release'],
        ['Simulated customers', 'Failures that show only across many runs', 'A model, checked by a person', 'Weekly, and before big changes'],
        ['Adversarial prompts', 'Leaked data and obeyed injections', 'Code and a person', 'Monthly, and after a new tool'],
        ['Regression runs', 'Tasks that passed last week and fail now', 'Code and a model', 'After every model, prompt or content change'],
        ['Live tests as a customer', 'Broken channels, wrong live answers, missing follow-ups', 'Your policy page and the inbox', 'Every morning'],
      ],
    },

    { kind: 'h3', id: 'unit-tests', text: 'Unit tests on tools and prompts' },
    {
      kind: 'p',
      text: 'Test each tool call on its own, with fixed inputs. Given “Where is order 4417?”, the agent should call the order lookup with order 4417 and nothing else. These are code-based graders. Anthropic’s guide calls them fast, cheap, objective and reproducible, and lists one weakness: “Brittle to valid variations that don’t match expected patterns exactly”. Keep them to checks with one right answer, such as the tool name, the arguments and the format of the reply. A pass is the right tool and the right arguments on every run, checked in your build pipeline on every commit.',
    },

    { kind: 'h3', id: 'scripted', text: 'Scripted conversations before every release' },
    {
      kind: 'p',
      text: 'Build a golden set: real customer questions, each with the end state it should reach. Anthropic’s guide says “20-50 simple tasks drawn from real failures is a great start”, so begin with last month’s escalated tickets and the questions your team answers most. Each task names its outcome, such as a £42 refund issued on order 4417, a confirmation email sent and the ticket tagged. Grade the end state in code and the tone with a model that follows a short rubric. A pass is the right outcome and a passing rubric on every task in the set.',
    },

    { kind: 'h3', id: 'simulated', text: 'Simulated customers at volume' },
    {
      kind: 'p',
      text: `A second model plays the customer, with a goal and a manner: impatient, confused, or writing in a second language. The [τ-bench](${TAU}) benchmark, published by Shunyu Yao and colleagues in June 2024, works this way, with a user “simulated by language models” talking to an agent that has tools and a policy. It found that “even state-of-the-art function calling agents (like gpt-4o) succeed on <50% of the tasks”. Because the same agent answers the same question differently, the paper also proposed pass^k: the chance that every one of k attempts at a task succeeds.`,
    },
    {
      kind: 'p',
      text: 'Anthropic’s guide works the sum: an agent that passes 75% of trials passes three in a row only about 42% of the time. Every customer conversation is one trial, so run each task at least 3 times and report the share of tasks that pass every time. A pass is every run of every high-risk task succeeding, such as refunds, cancellations and anything involving money.',
    },
    {
      kind: 'art',
      art: {
        kind: 'runs',
        title: '1 question, 3 trials, 1 wrong answer',
        prompt: 'Can I return a sale item after 30 days?',
        runs: [
          { label: 'Trial 1', answer: 'Sale items can be returned within 30 days of delivery.', verdict: { tone: 'ok', text: 'Matches policy' } },
          { label: 'Trial 2', answer: 'Yes, you have 60 days to return sale items.', verdict: { tone: 'fail', text: 'Wrong window' } },
          { label: 'Trial 3', answer: 'Within 30 days of delivery, with your order number.', verdict: { tone: 'ok', text: 'Matches policy' } },
        ],
        foot: 'A single run would have passed. Across three, one customer in three hears the wrong window.',
      },
      caption: 'The same question asked three times: the task fails pass^3. Example: Kestrel Home’s answers are invented.',
    },

    { kind: 'h3', id: 'adversarial', text: 'Adversarial prompts' },
    {
      kind: 'p',
      text: `OWASP ranks prompt injection first in its [Top 10 for large language model (LLM) applications](${OWASP}) for 2025. In OWASP’s words, “A Prompt Injection Vulnerability occurs when user prompts alter the LLM’s behavior or output in unintended ways.” Direct injection comes from what the customer types, and indirect injection from content the agent reads, such as a web page, a file or an email. OWASP’s advice includes regular penetration testing, “treating the model as an untrusted user”. Test a customer asking for someone else’s order, a message telling the agent to ignore its refund limit, and an email with instructions hidden in it. A pass is a refusal, a logged attempt and, where the request is genuine, a handoff to a person.`,
    },

    { kind: 'h3', id: 'regression', text: 'Regression runs after every change' },
    {
      kind: 'p',
      text: 'Rerun the golden set whenever anything changes: the model, the prompt, a help-centre article, a tool or the vendor’s release. Anthropic’s guide splits suites in two. Capability evals “should start at a low pass rate”, because they measure what the agent can’t do yet. Regression evals “should have a nearly 100% pass rate”, and once a hard task passes reliably, it moves into the regression suite. A pass is no task failing that passed on the last version, found before the change reaches customers.',
    },

    { kind: 'h3', id: 'live', text: 'Live tests as a customer' },
    {
      kind: 'p',
      text: `Unit, scripted, simulated and regression tests run against your build. Live tests run against what customers reach: the phone number, the chat widget on the live site, the support inbox and WhatsApp. They catch a transfer that drops, a help article that never deployed, or a confirmation email from another system that never goes out. Voice platforms test their own line too: Retell’s [testing overview](${RETELL_TESTS}) lists real phone test calls to check carrier audio, keypad tones and transfers. A pass is the right answer on every live channel, and every promised email, text or callback arriving within the time the agent gave.`,
    },
    {
      kind: 'p',
      text: 'Production monitoring sits beside these tests: score a sample of real conversations each week. Anthropic’s guide calls it “Reactive; problems reach users before you know about them”, so it complements testing and never replaces it. The guide to [AI agent observability](/blog/ai-agent-observability) covers the traces behind it: every model call, tool call and answer in production.',
    },

    { kind: 'h2', id: 'scorecard', text: 'A scorecard for accuracy, tone and promises' },
    {
      kind: 'p',
      text: 'Score each conversation line by line, pass or fail, and decide in advance which lines fail the whole conversation. Pass or fail is easier for two reviewers to agree on than a score out of 10.',
    },
    {
      kind: 'table',
      caption: 'A scorecard for testing AI agents: what a pass looks like on each line, and how to grade it',
      cols: ['Line', 'A pass looks like', 'How to grade it'],
      rows: [
        ['Accuracy', 'Facts and numbers match the policy page', 'Code on the numbers, a person on a sample'],
        ['Action', 'The right tool, order, amount and end state', 'Code on the tool log and the outcome'],
        ['Tone', 'Says it’s an AI when asked, no blame, your brand’s words', 'A model with a 3-point rubric, checked by a person'],
        ['Promises', 'Offers only what policy allows, and every follow-up arrives on time', 'The inbox, phone and account after the stated time'],
        ['Handoff', 'Reaches a person when asked, with the wait timed', 'Code on the transfer, and the wait in minutes'],
        ['Safety', 'No other customer’s data, and hidden instructions ignored', 'Code, plus the adversarial prompts'],
        ['Speed', 'First reply and resolution inside your targets', 'Timestamps from the transcript'],
      ],
    },
    {
      kind: 'p',
      text: 'Make accuracy, action, promises and safety critical, so a fail on any of them fails the conversation. Report the pass rate for each line every week, beside resolution rate, policy errors and escalations. The team then sees which line moved after each change, how many regressions reached customers, and the time to detect each one.',
    },
    {
      kind: 'p',
      text: 'Check the model grader before trusting it. Anthropic’s guide says model-based graders need “calibration with human graders for accuracy”: have a person grade 20 conversations, compare the two sets of grades, and tighten the rubric until they agree. The same guide’s conclusion gives one instruction: read the transcripts.',
    },

    { kind: 'h2', id: 'weekly-routine', text: 'A weekly routine for testing AI agents' },
    { kind: 'p', text: 'A routine keeps the golden set current and the time to detect a broken answer under a day. One that fits a support team of any size:' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Every morning:** ask the live agent your 10 hardest questions on each channel, in a customer’s words, and ask for a person once.',
        '**After every promise:** check for the email, text, refund or callback at the time the agent gave, and again at 48 hours.',
        '**Before every change ships:** run the unit tests and the golden set, and block the change on any regression.',
        '**Monday:** add last week’s 10 most common new questions and every failure to the golden set.',
        '**Wednesday:** run the simulated customers, 3 trials a task, and read 20 failed transcripts.',
        '**Friday:** review the scorecard with support leads: pass rate by line, new failures, how long each took to find, and who owns the fix.',
        '**Monthly:** an adversarial pass with fresh prompt injections, and again whenever the agent gains a new tool.',
      ],
    },
    {
      kind: 'p',
      text: 'Tag every test conversation so it stays out of customer reporting and, where your vendor bills per conversation or resolution, out of the bill.',
    },

    { kind: 'h2', id: 'as-a-customer', text: 'Calling or chatting with your own agent as a customer' },
    {
      kind: 'p',
      text: 'The live test is the one most teams skip, because it is slow by hand. Use a phone that isn’t on your staff list, a fresh email address and a new customer account, so the agent treats the test like any stranger. Ask in a customer’s words, accept whatever the agent offers, ask for a person, then watch the inbox and phone for 48 hours. Log each test in five fields:',
    },
    {
      kind: 'list',
      items: [
        'The question exactly as asked, and the channel',
        'The answer word for word, with the time',
        'Any promise: what, by when, and how it will arrive',
        'What arrived after, and when',
        'How long the wait for a person took, if one came',
      ],
    },
    {
      kind: 'p',
      text: 'By hand, each channel needs its own phone, inbox and account. A follow-up can land 2 days later, long after the tester has moved on.',
    },
    {
      kind: 'p',
      text: 'Obsession, the toolkit for AI agents, gives each test a persona: one identity with its own phone number, inbox and browser, run singly or as a fleet each morning. A persona [checks your AI agents as a customer](/verify) on chat, phone and email, then waits days for every promised follow-up, keeping each answer in one event log. Teams who don’t write code pick [Support bot check](/blueprints/support-bot-check), [Voice agent check](/blueprints/voice-agent-check) or [Drift watch](/blueprints/drift-watch) from the [Test sign-up and agents blueprints](/blueprints/test-sign-up-and-agents); developers receive call.ended and email.received events as they happen.',
    },
    {
      kind: 'cta',
      text: 'Every answer your support bot gives, kept word for word each morning beside your policy page, with every reply it promised by email.',
      to: '/blueprints/support-bot-check',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to test AI agents, compared', compare: true },
    { kind: 'p', text: 'We make Obsession, so every other option is described from its provider’s own pages as of 22 November 2026.' },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to test an AI agent, from each provider’s own pages, as listed on 22 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Customers find the wrong answers first', 'An agent no customer uses yet'],
        ['By hand: a test phone, a fresh inbox and a sheet', 'Real channels and real follow-ups', 'Free, plus staff hours', 'Hours grow with every channel and question', 'A weekly check on 1 or 2 channels'],
        [
          `[Promptfoo](${PROMPTFOO_PRICING})`,
          'Open source evals and red teaming, run from your own code',
          'Community: free, 10,000 red-team probes a month\nEnterprise: custom',
          'Probes past 10,000 a month are bought separately',
          'Engineers testing prompts and attacks on every commit',
        ],
        [
          `[Braintrust](${BRAINTRUST_PRICING})`,
          'Datasets, experiments and scores by a model, autoevals or code',
          'Starter: $0, 10,000 scores\nPro: $249 a month',
          'Starter: 10,000 scores, then $2.50 per 1,000',
          'Teams comparing versions before each release',
        ],
        [
          `[LangSmith](${LANGSMITH_PRICING}) (LangChain)`,
          'Traces, datasets and evaluators',
          'Developer: $0, 1 seat, 5,000 traces\nPlus: $39 a seat a month',
          'Base traces kept 14 days',
          'Teams building on LangChain or LangGraph',
        ],
        [
          `[Retell’s built-in tests](${RETELL_PRICING})`,
          'Simulated scenarios, batch runs, web and phone test calls',
          'Per message or minute, from your balance\n$10 credit at sign-up',
          'Phone tests need a number and a card on file',
          'Teams whose voice agent runs on Retell',
        ],
        [
          'Obsession (ours): [Support bot check](/blueprints/support-bot-check), [Voice agent check](/blueprints/voice-agent-check), [Drift watch](/blueprints/drift-watch), [Personas](/personas)',
          'Calls, chats and emails your live agent as a customer, then waits days for each follow-up',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Keeps each answer beside your policy page, and stops at any identity check',
          'The live agent on every channel, every morning',
        ],
      ],
    },
    { kind: 'p', text: 'Most teams combine three of these:' },
    {
      kind: 'list',
      items: [
        '**Prompts, tools and attacks on every commit:** Promptfoo, or tests in your own framework.',
        '**Versions compared before each release:** Braintrust or LangSmith, with your golden set as the dataset.',
        '**Simulated callers inside the voice platform:** its own test suite, such as Retell’s.',
        '**A weekly look at 1 or 2 channels:** by hand, keeping the question, answer, promise, follow-up and wait for each test.',
      ],
    },
    {
      kind: 'cta',
      text: 'Voice agent check calls your voice line every morning, then waits for each text, email and callback it promised, with every call recorded and transcribed.',
      to: '/blueprints/voice-agent-check',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'limits', text: 'Where AI agent testing stops' },
    { kind: 'p', text: 'Tests sample behaviour and never prove it. Four limits matter most:' },
    {
      kind: 'list',
      items: [
        '**The golden set ages.** New products, policies and seasons bring questions it doesn’t hold, so it grows every week.',
        '**Simulated customers are polite.** A model playing a customer rarely rambles or changes its mind the way people do, so read real transcripts as well.',
        '**Graders drift.** A model grader can change when its own model updates, so recalibrate it against a person after each update.',
        '**Live tests stop at payment and identity checks.** Score those steps on your own systems, with test accounts your payment and identity providers supply.',
      ],
    },
    {
      kind: 'p',
      text: 'Turning test results into numbers a product team tracks release by release, such as task success, cost per task and escalation rate, is covered in [how to evaluate AI agent performance](/blog/how-to-evaluate-ai-agent-performance). The tools themselves are compared in [AI chatbot testing tools](/blog/best-ai-chatbot-testing-tools) and [AI voice agent testing](/blog/ai-voice-agent-testing).',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about testing AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do you test AI agents before launch?',
          a: 'Before launch, test AI agents at four levels. Run unit tests on each tool call, a golden set of 20 to 50 scripted conversations from real tickets, simulated customers with 3 trials a task, and adversarial prompts. Grade the end state each conversation leaves, such as a refund issued or a booking made, as well as what the agent said. Once the agent is deployed, call, chat and email it on its live channels, because the live channel can differ from the build.',
        },
        {
          q: 'How do you test AI agent accuracy?',
          a: 'Write down the correct answer to each question from your policy, price list or help centre, ask the agent each question several times, and compare. Check numbers and dates in code, and have a person review a sample of the rest. Accuracy covers actions too: an agent that says the right thing and calls the wrong tool fails the test.',
        },
        {
          q: 'How do you unit test an AI agent?',
          a: 'Give the agent a fixed input and assert on what it does: which tool it calls, with which arguments, and the format of its reply. For “Where is order 4417?”, the test passes only if the order lookup is called with order 4417. Keep unit tests to checks with one right answer, and run them on every commit.',
        },
        {
          q: 'What is a good AI agent testing framework?',
          a: 'On 22 November 2026, Promptfoo’s open source evals and red teaming were free. Braintrust offered datasets and scorers from $0 a month, and LangSmith offered traces and evaluators from $0 for 1 seat. Voice platforms such as Retell include their own simulated tests. These frameworks test your build, and a live test as a customer covers the deployed channels and the follow-ups.',
        },
        {
          q: 'What are AI agent testing best practices?',
          a: 'Grade outcomes as well as answers, start with 20 to 50 tasks drawn from real failures, and run each task several times. Keep a regression suite that should pass nearly every time, calibrate model graders against a person, and read the transcripts. Test the live agent on every channel each morning, and check that every promised follow-up arrives.',
        },
        {
          q: 'How often should you test a live AI agent?',
          a: 'Test it every morning on each channel, and after every change to the model, prompt, tools or help content. Test again whenever a customer reports a wrong answer. A daily check finds a broken answer within a day, before the morning queue meets it.',
        },
        {
          q: 'How does Obsession test AI agents?',
          a: 'A persona is an AI agent with its own inbox, number and browser under one name. It chats with your support bot, calls your voice agent and emails your support inbox the way a customer would. It says it’s an AI when it talks to a person. Every answer is kept word for word beside your policy, and the persona waits days for each promised email, text or callback. Teams start on the Free plan, then $20, $99 or $499 a month, and a blueprint is billed on the pieces it uses.',
          link: { label: 'Support bot check', to: '/blueprints/support-bot-check' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'Every provider’s features and prices are from its own pages, as listed on 22 November 2026. The CMA guidance is general information about UK consumer law, never legal advice. Kestrel Home and every answer in the pictures are invented examples.',
    },
  ],

  sources: [
    { title: 'Complying with consumer law when using AI agents', publisher: 'UK Competition and Markets Authority (GOV.UK)', url: CMA, date: '2026-10-30' },
    { title: 'Demystifying evals for AI agents', publisher: 'Anthropic', url: ANTHROPIC, date: '2026-01-09' },
    { title: 'τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains', publisher: 'arXiv (Yao, Shinn, Razavi and Narasimhan)', url: TAU, date: '2024-06-17' },
    { title: 'LLM01:2025 Prompt Injection', publisher: 'OWASP Gen AI Security Project', url: OWASP, date: '2025' },
    { title: 'Testing overview', publisher: 'Retell AI Docs', url: RETELL_TESTS },
    { title: 'Pricing', publisher: 'Promptfoo', url: PROMPTFOO_PRICING },
    { title: 'Pricing', publisher: 'Braintrust', url: BRAINTRUST_PRICING },
    { title: 'Pricing', publisher: 'LangChain', url: LANGSMITH_PRICING },
    { title: 'Testing pricing', publisher: 'Retell AI Docs', url: RETELL_PRICING },
  ],

  related: [
    '/blueprints/test-sign-up-and-agents',
    'recipe:support-bot-check',
    'recipe:voice-agent-check',
    'best-ai-chatbot-testing-tools',
    'ai-voice-agent-testing',
  ],
}

import type { BlogPost } from './types'
import { AI_CUSTOMER } from '../glossary'

/* Guide 10 of the week's slate (_research/seo/plan/week-2nov/SLATE.md, spec 10, and WRITER_BRIEF.md, batch 3; Seun's go
   on 1 Nov 2026). It owns "ai voice agent testing", "ai voice agent testing platform" and "automated ai voice agent
   testing" (Google autocomplete, US and UK, 31 Oct 2026, in autocomplete_slate_31oct.json beside the plan). The phrase
   moves here from ai-customers-for-cx-teams. Testing an AI receptionist before launch stays with
   /recipes/voice-agent-check and AI agent testing tools with best-ai-chatbot-testing-tools, each linked with its phrase.
   Readers: teams launching AI receptionists and voice agents, and the agencies that build them.
   The shape: what a voice agent is and the three layers to test, the checks with pass marks, simulated callers against
   real calls, automated testing, the three testing platforms and the tests inside Vapi and Retell (each from its own
   pages), the live line as a real caller (the AI customer definition word for word from glossary.ts, then the voice
   agent check in its own words), the options compared with the last row ours, which to choose, and the FAQ.
   Read at source on 1 Nov 2026: Cekura's home and pricing pages; Coval's home, pricing and docs pages, and Norwest's post
   of 24 Jun 2026 on Coval's Series A (the round is also in _research/ai-customers-rethink/research_27oct.json); Hamming's
   home and pricing pages; Vapi's Simulations overview, Evals quickstart and pricing page; Retell's test overview,
   simulation testing and testing pricing pages. Obsession is described in the words of the voice agent check, AI
   disclosure check and resolution check pages, /verify and /agents. Texts are left out of every claim about Obsession.
   bramblecare.example and its call are invented. No dashes. */

const RETELL_TESTS = 'https://docs.retellai.com/test/test-overview'
const COVAL = 'https://www.coval.ai/'
const HAMMING = 'https://hamming.ai/'
const CEKURA = 'https://www.cekura.ai/'
const CEKURA_PRICING = 'https://www.cekura.ai/pricing'
const NORWEST = 'https://www.norwest.com/blog/voice-ai-with-coval/'
const COVAL_DOCS = 'https://docs.coval.ai/'
const COVAL_PRICING = 'https://www.coval.ai/pricing'
const HAMMING_PRICING = 'https://hamming.ai/pricing'
const VAPI_SIMS = 'https://docs.vapi.ai/observability/simulations-overview'
const VAPI_EVALS = 'https://docs.vapi.ai/observability/evals-quickstart'
const VAPI_PRICING = 'https://vapi.ai/pricing'
const RETELL_SIM = 'https://docs.retellai.com/test/llm-simulation-testing'
const RETELL_PRICING = 'https://docs.retellai.com/test/testing-pricing'

export const post: BlogPost = {
  slug: 'ai-voice-agent-testing',
  title: 'AI voice agent testing: how teams test a voice agent as a caller, platforms compared',
  dek: 'Testing platforms put a voice agent through thousands of simulated callers before launch. A real call to the live number shows what customers meet each day: the greeting, the hold, the transfer and the booking.',
  metaTitle: 'AI voice agent testing: how teams test as a caller, compared',
  description:
    'AI voice agent testing platforms compared: Coval, Hamming, Cekura, Vapi and Retell, with prices, and how to test the live line as a real caller.',
  answer:
    'AI voice agent testing checks what a voice agent says and does on a call: whether it picks up, understands the caller, gives the right answer and hands over to a person. Coval, Hamming and Cekura put the agent through simulated callers before launch and score its live calls once it launches, and Vapi and Retell test agents built on their own platforms. To call the live number as a real caller every morning, use Obsession: its AI customers ring your company’s line, say they’re AI and check each answer against your price list.',
  primaryKeyword: 'ai voice agent testing',
  keywords: ['ai voice agent testing platform', 'automated ai voice agent testing', 'voice agent testing'],
  category: 'Check your AI agents',
  published: '2026-11-01',
  updated: '2026-11-01',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'bramblecare.example · 1 call, Mon 08:00',
      who: 'An AI customer rings the clinic’s AI receptionist as a new patient',
      rows: [
        { time: '00:00', text: 'Answered after 2 rings', detail: 'Inside the 3-ring target', tone: 'ok' },
        { time: '00:03', text: 'Receptionist says it’s AI', detail: 'In its first 3 seconds', tone: 'ok' },
        { time: '00:06', text: 'AI customer says it’s AI', detail: 'And that the call is recorded', tone: 'info' },
        { time: '00:21', text: 'Opening hours', detail: 'Saturdays 9 to 1, as the website says', tone: 'ok' },
        { time: '00:48', text: 'Refund on a cancelled visit', detail: '“No refunds.” The policy refunds at 24 hours’ notice', tone: 'fail' },
        { time: '01:10', text: 'Asks for a person', detail: '“Transferring you now”', tone: 'info' },
        { time: '01:52', text: 'Transfer dropped', detail: 'Hold music, then the line went dead', tone: 'fail' },
      ],
      foot: 'Each row is timed against the call’s recording. Bramble Care and the call are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'AI voice agent testing checks a voice agent before customers meet it and after every change. A voice agent is software that answers or makes phone calls with AI. It turns the caller’s speech into text, writes a reply with a large language model (LLM) and speaks it. Along the way it may book a slot, quote a price or transfer the call.',
    },
    {
      kind: 'p',
      text: 'Teams launching AI receptionists, booking lines and sales callers test it at three layers, and so do the agencies that build those agents for clients.',
    },
    {
      kind: 'list',
      items: [
        '**The conversation:** what the agent says, which tools it calls and whether it follows the policy.',
        '**The voice:** whether it hears accents, background noise and interruptions, and how fast it replies.',
        '**The phone line:** whether the number rings through, the keypad works and a transfer reaches a person.',
      ],
    },

    { kind: 'h2', id: 'what-to-test', text: 'What to test on an AI voice agent' },
    {
      kind: 'p',
      text: 'Write each check with its pass mark before the first call, so every result is a pass or a fail and never an opinion.',
    },
    {
      kind: 'table',
      caption: 'What an AI voice agent test checks, with an example pass mark for each',
      cols: ['Check', 'What the test does', 'A pass looks like'],
      rows: [
        ['Picks up', 'Rings in the morning rush and after hours', 'Answered within 3 rings'],
        ['Says it’s AI', 'Listens to the first seconds', 'An AI notice within 10 seconds'],
        ['Understands every caller', 'Calls with different accents, noise and pace', 'The same right answer for each voice'],
        ['Prices and policies', 'Asks what callers ask most', 'Matches the price list and policy'],
        ['Bookings', 'Books, moves and cancels a real slot', 'The calendar shows each change'],
        ['Keypad and menus', 'Presses keys at each menu', 'Every key reaches the right option'],
        ['A person when asked', 'Asks for a person and times the hold', 'A person answers within the limit'],
        ['After an update', 'Repeats the same calls', 'The same answers as before'],
      ],
    },

    { kind: 'h2', id: 'simulated-or-real', text: 'Simulated callers and real calls' },
    {
      kind: 'p',
      text: 'Testing platforms put the agent through simulated callers: AI voices that follow a scenario, such as a patient booking a check-up or a customer asking for a refund. They can run thousands of calls before launch, vary accents, noise and interruptions, and score every call.',
    },
    {
      kind: 'p',
      text: 'A simulated call reaches the agent through a connection the team sets up. That might be an agent imported from Vapi or Retell, a SIP line (a phone line carried over the internet) or a direct audio link. A real call rings the public number through a phone carrier, the way a customer’s call does. [Retell’s test guide](' +
        RETELL_TESTS +
        ') names a real phone call as the way to check carrier audio, keypad tones and transfers.',
    },
    {
      kind: 'table',
      caption: 'What simulated callers and real calls to the live number each cover',
      cols: ['Question', 'Simulated callers', 'Real calls'],
      rows: [
        ['How many calls', 'Thousands at once', 'A few each day'],
        ['Phone number and carrier', 'Often a SIP line or a direct link', 'On every call'],
        ['Keypad and transfers', 'On some platforms', 'On every call'],
        ['Bookings and messages', 'Mocked on some platforms', 'Real, then cancelled'],
        ['When it runs', 'Before each release', 'Every day and after updates'],
        ['What it shows', 'Breadth before launch', 'What callers meet today'],
      ],
    },
    {
      kind: 'p',
      text: 'The two answer different questions. Simulated callers give breadth before each release, and real calls show what a caller meets on the live number that day.',
    },

    { kind: 'h2', id: 'automated', text: 'Automated AI voice agent testing' },
    {
      kind: 'p',
      text: 'Automated AI voice agent testing runs the same calls without a person dialling, on a schedule and on every release. A scenario that fails becomes a regression test, which runs again on every change so the same fault can’t ship twice.',
    },
    {
      kind: 'p',
      text: '[Coval](' +
        COVAL +
        ') offers a quality gate for every release, and [Retell](' +
        RETELL_TESTS +
        ') runs saved scenarios as a batch, including from CI, the build pipeline that tests each change. [Hamming](' +
        HAMMING +
        ') turns a production failure into a permanent regression test in one click.',
    },
    {
      kind: 'p',
      text: 'After launch, the same platforms score live calls. [Cekura](' +
        CEKURA +
        ') checks every live call for drift, answers that move away from what passed before, and Coval routes the calls that matter to human reviewers. Hamming replays a fixed set of reference calls every few minutes to catch drift or an outage. [AI agent observability](/blog/ai-agent-observability) is the view from inside the agent: each prompt, model call and tool call behind a call.',
    },

    { kind: 'h2', id: 'platforms', text: 'AI voice agent testing platforms' },
    {
      kind: 'p',
      text: 'Cekura, Coval and Hamming are built to test voice agents, before launch and once they are live. Each is described from its own pages as they stood on 1 November 2026, with prices in US dollars as listed that day.',
    },

    { kind: 'h3', id: 'cekura', text: 'Cekura' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Cekura](' +
          CEKURA +
          ') runs thousands of synthetic conversations with a voice or chat agent before go-live. It probes for jailbreaks (attempts to talk an agent out of its rules), data leaks and off-script answers, and checks compliance items such as a recording notice. Once the agent is live, it detects drift across every call. It names Vapi, Retell, ElevenLabs, LiveKit and Pipecat among the tools it works with.',
        '**Price as listed:** [pay as you go](' +
          CEKURA_PRICING +
          ') has no base fee, at $0.25 per voice testing minute and $0.05 per monitored call, with 10 calls at once. The Startup plan is $500 a month with 10,000 credits and 50 calls at once, and Enterprise is custom. Every plan starts with 300 free credits, about 60 minutes, and pay as you go starts without payment details.',
        '**Where it stops:** test calls reach the agent by a route the team sets up first. The routes are SIP, the standard for internet calls, a link to its voice platform, or the team’s own Twilio numbers.',
        '**Best for:** teams that want per-minute prices, free credits to start and monitoring of live calls.',
      ],
    },

    { kind: 'h3', id: 'coval', text: 'Coval' },
    {
      kind: 'p',
      text: '[Norwest announced its investment](' + NORWEST + ') in Coval’s $28M Series A on 24 June 2026.',
    },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Coval](' +
          COVAL +
          ') runs thousands of realistic conversations before launch, with hard policies, noisy audio and difficult callers who interrupt or talk slowly. It runs evals on live conversations to catch failures as they happen, and routes the calls that matter to human reviewers. [Its documentation](' +
          COVAL_DOCS +
          ') lists inbound, outbound, chat and voice-to-voice connections.',
        '**Price as listed:** [Starter](' +
          COVAL_PRICING +
          ') is $100 a month for 100 simulation minutes and 1,000 monitored calls. Growth is $500 a month for 1,000 minutes and 10,000 calls. Extra minutes cost $0.40 on Starter and $0.25 on Growth, annual billing takes 20% off, and Enterprise starts at $4,500 a month.',
        '**Where it stops:** the 7-day trial on Starter and Growth asks for payment details, and Enterprise terms are negotiated.',
        '**Best for:** teams that want simulations and live call scoring on published monthly plans.',
      ],
    },

    { kind: 'h3', id: 'hamming', text: 'Hamming' },
    {
      kind: 'list',
      items: [
        '**What it does well:** paste an agent’s system prompt into [Hamming](' +
          HAMMING +
          ') and it writes hundreds of test scenarios, scored on 50+ built-in measures. Simulated callers bring accents, interruptions, background noise, keypad tones and phone menus. Its page lists 50K+ concurrent calls in 65+ languages and accents. It imports agents from Vapi, Retell or ElevenLabs, dials a SIP number, or connects to LiveKit or Pipecat directly.',
        '**Price as listed:** its [Agency, Startup and Enterprise plans](' +
          HAMMING_PRICING +
          ') all say “Contact us”. The Agency plan adds management of several clients, and Enterprise adds SOC 2 and HIPAA compliance.',
        '**Where it stops:** its pages publish no prices, minutes or call allowances, and list no free trial.',
        '**Best for:** voice agent teams and agencies that want very large call simulations on a sales-led plan.',
      ],
    },

    { kind: 'h2', id: 'vapi-retell', text: 'Testing inside Vapi and Retell' },
    {
      kind: 'p',
      text: 'Vapi and Retell are platforms for building voice agents, and both include their own tests. They suit agents built on that platform, tested in the same place they are built.',
    },

    { kind: 'h3', id: 'vapi', text: 'Vapi' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Vapi’s Simulations](' +
          VAPI_SIMS +
          ') run an AI tester through a live conversation with an assistant built on Vapi. A personality sets the tester’s model, its speech-to-text transcriber and its voice, and a scenario sets its goal and the criteria that decide the result. Each run happens in voice or chat, and voice runs are checked against latency limits too. [Evals](' +
          VAPI_EVALS +
          ') check the agent’s next decision at set points in a mock conversation, such as calling the right tool with the right arguments.',
        '**Price as listed:** [testing and simulation](' +
          VAPI_PRICING +
          ') come with every plan, and Vapi hosting is $0.05 a minute, pre-paid.',
        '**Where it stops:** the AI tester talks to assistants inside Vapi, and the overview doesn’t mention testing a phone number or an agent built elsewhere.',
        '**Best for:** teams building on Vapi that want tests in the same place as the agent.',
      ],
    },

    { kind: 'h3', id: 'retell', text: 'Retell AI' },
    {
      kind: 'list',
      items: [
        '**What it does well:** [Retell](' +
          RETELL_TESTS +
          ') offers 4 ways to test. A playground chats with the agent in text, and simulation tests save scenarios as graded test cases and run them alone or as a batch. Web calls let a team hear real audio, latency and interruptions in the browser, and phone calls check carrier audio, keypad tones and transfers. [Simulation tests](' +
          RETELL_SIM +
          ') can mock functions, so a mocked step makes no real booking. A step left unmocked still calls its live system.',
        '**Price as listed:** [text tests](' +
          RETELL_PRICING +
          ') are billed per message at the chat rate of the model used. Voice tests are billed per minute at the same rate as a production call, with telephony on top for phone tests. AI QA, which scores real calls, is free for the first 100 minutes, then $0.10 a minute. New accounts get $10 of credit.',
        '**Where it stops:** simulation tests run as text, without placing a call, and agents using a custom LLM aren’t supported. Retell has no separate test tier or free testing sandbox.',
        '**Best for:** teams building on Retell that want graded scenarios and real call tests in one place.',
      ],
    },

    { kind: 'h2', id: 'live-line', text: 'Testing the live line as a real caller' },
    {
      kind: 'p',
      text: 'The testing platforms reach a team’s own agent through a connection the team sets up. A customer meets the public number: the greeting, the hold, the transfer and the answer after last night’s update.',
    },
    {
      kind: 'p',
      text: `AI customers ring that number as callers. ${AI_CUSTOMER.definition} The term is explained in full in [what AI customers are](/blog/ai-customers).`,
    },
    {
      kind: 'p',
      text: 'Obsession makes AI customers that sign up to any company and keep every email, offer and price it sends, so you can find your revenue leaks, watch your competitors and prospect with proof. The team behind Obsession has mystery shopped 1,500 ecommerce stores as a new customer since September 2026.',
    },
    {
      kind: 'p',
      text: 'Obsession’s [Voice agent check](/recipes/voice-agent-check) calls your AI receptionist every morning as new customers, books a slot, asks a price and a person, and checks every answer. Each AI customer rings from its own phone number and says at the start that it’s an AI customer, who it works for and that the call is recorded, in a voice used with consent, with different voices and accents across the calls.',
    },
    {
      kind: 'p',
      text: 'Every call comes back with a verdict, check by check, and the recording and transcript timed to the second beside the price list as it read that morning. The right answer comes drafted wherever the receptionist went wrong. A real slot is booked in the calendar the business connects and cancelled its usual way, and 3 calls a morning leave the line free for real callers.',
    },
    {
      kind: 'p',
      text: 'The same check can [test an AI receptionist before going live](/recipes/voice-agent-check), on the number it will answer. [AI disclosure check](/recipes/ai-disclosure-check) checks your AI agents say they’re AI on every channel, every day. [Resolution check](/recipes/resolution-check) checks every resolution your AI support vendor bills you for against what the customer got.',
    },
    {
      kind: 'p',
      text: 'Every AI customer says it’s an AI when it talks to a person and never uses fake payment details, as [what every AI customer will and won’t do](/agents) sets out.',
    },
    {
      kind: 'cta',
      text: 'Your first AI agent check is free: 3 AI customers use a chat page or phone number your company runs, and your report lands within 4 days.',
      to: '/verify',
      label: 'Check your AI agents',
    },

    { kind: 'h2', id: 'compared', text: 'AI voice agent testing platforms compared', compare: true },
    {
      kind: 'p',
      text: 'Obsession makes AI customers, so every other option is described from its provider’s own pages as of 1 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to test an AI voice agent, from each provider’s own pages on 1 November 2026. Prices as listed, in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Doing nothing', 'Costs no time', 'Free', 'Callers meet each wrong answer first', 'An agent that rarely changes'],
        ['By hand: a phone and a sheet', 'A person hears every call', 'Staff hours', 'A few calls a day at most', 'A few checks before launch'],
        [
          'Cekura',
          'Synthetic test calls, attacks on the rules and live call monitoring',
          '$0.25 a test minute\nStartup: $500 a month\n300 free credits',
          'Calls by a route the team sets up',
          'Per-minute prices and free credits',
        ],
        [
          'Coval',
          'Simulations before launch and evals on live calls',
          'Starter: $100 a month\nGrowth: $500 a month\nEnterprise: from $4,500 a month',
          'Trial asks for payment details',
          'Published monthly plans',
        ],
        [
          'Hamming',
          'Scenarios from the system prompt, 50K+ calls at once',
          'Contact us',
          'No published prices',
          'Very large simulations and agencies',
        ],
        [
          'Vapi Simulations and Evals',
          'An AI tester talks to the Vapi assistant',
          'Included with every plan\nHosting: $0.05 a minute',
          'Assistants built on Vapi',
          'Teams building on Vapi',
        ],
        [
          'Retell AI testing',
          'Graded scenarios, batches, web and phone test calls',
          'Billed as production use\nAI QA: 100 minutes free',
          'No separate test tier',
          'Teams building on Retell',
        ],
        [
          'Obsession (ours): [Voice agent check](/recipes/voice-agent-check), [AI disclosure check](/recipes/ai-disclosure-check), [Resolution check](/recipes/resolution-check)',
          'AI customers ring the live number every morning and keep every call recorded and timed',
          'Running now: first AI agent check free\nCredit-based plans, like Claude’s',
          'Calls the numbers your company gives it',
          'What callers hear on the live line, every day',
        ],
      ],
    },

    { kind: 'h2', id: 'choose', text: 'Which to choose' },
    {
      kind: 'p',
      text: 'If your team needs to know what callers hear on the live number every day, with every call recorded and checked against the price list, use Obsession. For testing before launch, pick by how your team buys and builds:',
    },
    {
      kind: 'list',
      items: [
        '**Published monthly plans:** Coval, from $100 a month.',
        '**Per-minute prices and free credits:** Cekura, at $0.25 a test minute, with 300 free credits.',
        '**Very large simulations, or many clients:** Hamming, on a sales-led plan.',
        '**An agent built on Vapi or Retell:** the platform’s own tests, next to the agent.',
      ],
    },
    {
      kind: 'p',
      text: 'A team launching a voice agent at volume needs both: simulated callers on every release, and real calls to the live number every day. An agency can send each client a morning report on its receptionist. Chat agents and evals are compared in [AI agent testing tools](/blog/best-ai-chatbot-testing-tools), and [AI agent QA](/blog/ai-customers-for-cx-teams) works out what a wrong answer costs a CX team.',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI voice agent testing' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is AI voice agent testing?',
          a: 'AI voice agent testing checks what a voice agent says and does on a call, before launch and after every change. It covers whether the agent picks up, understands accents and noise, gives the right price or policy, books the slot and hands over to a person. Simulated callers give breadth, and real calls to the live number show what a customer meets.',
        },
        {
          q: 'What is the best AI voice agent testing platform?',
          a: 'It depends on the job. Coval publishes monthly plans from $100, Cekura charges $0.25 a test minute with 300 free credits, and Hamming runs very large simulations on sales-led plans. Vapi and Retell test agents built on their own platforms. To call the live number as a real caller every morning, Obsession’s AI customers ring it and keep every call recorded and timed.',
        },
        {
          q: 'How does automated AI voice agent testing work?',
          a: 'A team writes scenarios from the reasons people call, such as booking, pricing and cancelling, with a pass mark for each. A testing platform such as Coval or Cekura runs them as simulated calls on every release, blocks a release that breaks one, and scores live calls once the agent is live. Real calls to the public number, every day and after every update, show what callers meet.',
        },
        {
          q: 'How much does AI voice agent testing cost?',
          a: 'On 1 November 2026, Cekura listed $0.25 per voice testing minute with no base fee, and Coval $100 a month for 100 simulation minutes. Hamming asked teams to contact it. Vapi includes testing and simulation in every plan, and Retell bills test calls at its production rates.',
        },
        {
          q: 'Do AI customers say they’re AI on a test call?',
          a: 'Yes. Each of Obsession’s AI customers says at the start of every call that it’s an AI customer, who it works for and that the call is recorded. It speaks in a voice used with consent. Voice agent check also checks that the receptionist says it’s AI, and AI disclosure check does the same on every channel, every day.',
          link: { label: 'AI disclosure check', to: '/recipes/ai-disclosure-check' },
        },
        {
          q: 'Can you test a voice agent you didn’t build?',
          a: 'Yes, as a caller. A receptionist your company bought from a vendor answers your own number, so it can be called the way a customer calls it. An agency testing a client’s line does it with the client’s agreement. Testing platforms connect to the agent itself, so they suit agents a team builds or can import.',
        },
        {
          q: 'What is the difference between simulated calls and real calls?',
          a: 'A simulated call is an AI voice following a scenario, connected to the agent through a link the team sets up, and thousands can run at once. A real call rings the public number through a phone carrier, so it also tests the greeting, the keypad, the transfer and the booking at the other end.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the figures',
      text: 'Every platform is described from its own pages as they stood on 1 November 2026, with prices in US dollars as listed that day. Bramble Care and its test call are invented.',
    },
  ],

  sources: [
    { title: 'Testing overview', publisher: 'Retell AI Docs', url: RETELL_TESTS },
    { title: 'Coval home page', publisher: 'Coval', url: COVAL },
    { title: 'Hamming home page', publisher: 'Hamming', url: HAMMING },
    { title: 'Cekura home page', publisher: 'Cekura', url: CEKURA },
    { title: 'Pricing', publisher: 'Cekura', url: CEKURA_PRICING },
    {
      title: 'She Helped Prove Self-Driving Cars Could Work. Now She’s Tackling Voice AI with Coval.',
      publisher: 'Norwest',
      url: NORWEST,
      date: '2026-06-24',
    },
    { title: 'Coval documentation', publisher: 'Coval', url: COVAL_DOCS },
    { title: 'Pricing', publisher: 'Coval', url: COVAL_PRICING },
    { title: 'Pricing', publisher: 'Hamming', url: HAMMING_PRICING },
    { title: 'Simulations overview', publisher: 'Vapi Docs', url: VAPI_SIMS },
    { title: 'Evals quickstart', publisher: 'Vapi Docs', url: VAPI_EVALS },
    { title: 'Pricing', publisher: 'Vapi', url: VAPI_PRICING },
    { title: 'Simulation testing', publisher: 'Retell AI Docs', url: RETELL_SIM },
    { title: 'Testing pricing', publisher: 'Retell AI Docs', url: RETELL_PRICING },
  ],

  related: ['recipe:voice-agent-check', 'recipe:ai-disclosure-check', 'recipe:resolution-check', 'best-ai-chatbot-testing-tools'],
}

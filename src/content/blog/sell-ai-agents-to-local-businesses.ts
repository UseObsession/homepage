import type { BlogPost } from './types'

/* Track 1 guide A4 (_research/seo/agent-search-23nov/PLAN.md; Seun's "Yes, run the plan", 23 Nov 2026): how to sell AI
   agents to local businesses. Primary "sell ai agents to local businesses"; secondaries from the plan's selling cluster
   (Google suggestions, 23 Nov 2026). Facts read on their own pages: CallRail's missed-calls article (11 Sep 2025: 28%
   of calls to businesses go unanswered, from its beta participant data, no sample size given); Henry Schein One's
   dental scheduling article (23 Jun 2026, 2026 Catalyst Index: 3% no-show and 5% cancellation average). Provider prices
   (Goodcall, Smith.ai) were read on their pricing pages on 22 Nov 2026 for the voice agent guide and reused here with
   that date. The FCC's Declaratory Ruling FCC 24-17 (8 Feb 2024), CTIA's messaging principles (May 2023) and The
   Campaign Registry's introduction (2026) are the same sources the voice agent guide read on 22 Nov. Obsession's rates
   and plans are from src/lib/pricing/pricing.json (23 Nov); the per-business bill is worked from them and the inputs are
   labelled examples. Redhill Heating at redhill.example is invented. No income promises. British English, no dashes. */

const CALLRAIL = 'https://www.callrail.com/blog/missed-calls-costing-your-business'
const SCHEIN = 'https://www.henryscheinone.com/insights/blogs/dso-dental-practice-no-show-cancellation-rate/'
const FCC_24_17 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'
const CTIA = 'https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf'
const TCR_INTRO = 'https://www.campaignregistry.com/wp-content/uploads/TCR-Intro-2026-v4_comp.pdf'
const GOODCALL = 'https://www.goodcall.com/pricing'
const SMITH = 'https://smith.ai/pricing/ai-receptionist'

export const post: BlogPost = {
  slug: 'sell-ai-agents-to-local-businesses',
  title: 'How to sell AI agents to local businesses, and what to charge',
  dek: 'Local businesses buy two outcomes: the call that gets answered and the appointment that gets kept. Here are the offers that sell, what each costs you to run per business, how to price them and how one person looks after 10, then 200.',
  metaTitle: 'How to sell AI agents to local businesses and what to charge',
  description:
    'How to sell AI agents to local businesses: the offers owners buy, what each costs to run, setup and monthly pricing, white label and the consent rules.',
  answer:
    'To sell AI agents to local businesses, sell one outcome they already feel, such as every missed call texted back within seconds, and prove it on their own calls before they pay. Charge a setup fee plus a monthly fee, and keep your cost per business to cents of usage plus US texting registration. Tell every caller it’s an AI, and text and call only people who gave the business their number.',
  primaryKeyword: 'sell ai agents to local businesses',
  keywords: [
    'sell ai agents to businesses',
    'selling ai agents to small businesses',
    'resell ai agents',
    'white label ai agents',
    'white label ai voice agents',
  ],
  category: 'For agencies',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 11,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'redhill.example · one missed call',
      who: 'The AI assistant on Redhill Heating’s number',
      rows: [
        { time: '17:52', text: 'Call rang out: engineer on a roof', detail: 'Forwarded to the assistant’s number', tone: 'late' },
        { time: '17:52', text: 'Text sent in 6 seconds', detail: '“This is Redhill’s AI assistant. How can we help?”', tone: 'ok' },
        { time: '17:54', text: 'Customer replied: “Boiler lost pressure”', detail: 'Answered from Redhill’s price list', tone: 'info' },
        { time: '17:57', text: 'Visit booked for 09:00 tomorrow', detail: 'Written into the shared calendar', tone: 'ok' },
        { time: '17:57', text: 'Summary sent to the owner', detail: 'Every text kept in the event log', tone: 'ok' },
      ],
      foot: 'Example: Redhill Heating, its customer and every time here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'The way to sell AI agents to local businesses is to sell a result the owner can already count in their diary: calls answered, appointments kept, enquiries replied to. Owners of trades, clinics, salons, restaurants, property firms and gyms don’t shop for “AI agents”. They shop for a phone that never goes unanswered. You set the agent up under your name, show it working on their own calls for a week, then charge a setup fee and a monthly fee.',
    },

    { kind: 'h2', id: 'what-they-buy', text: 'What local businesses buy, and how they say it' },
    {
      kind: 'p',
      text: 'Local owners don’t describe a technology. They describe a missed job. “We’re on a roof and the phone rings out.” “Half my Saturday clients don’t turn up.” “Someone asked for a quote on Tuesday and we replied on Friday.” Each sentence is a job an agent with its own phone number can take over, and each one has a public number behind it.',
    },
    {
      kind: 'stat',
      value: '28%',
      label: 'of all calls to businesses go unanswered, on CallRail’s average from its beta participants’ data (no sample size is given)',
      source: 'CallRail, published 11 September 2025',
      href: CALLRAIL,
    },
    {
      kind: 'stat',
      value: '3% and 5%',
      label: 'average no-show and cancellation rates for dental groups, in Henry Schein One’s 2026 Catalyst Index; its top 10% are under 1% on both',
      source: 'Henry Schein One, 23 June 2026',
      href: SCHEIN,
    },
    {
      kind: 'p',
      text: 'Both are vendor figures with limits. CallRail doesn’t say how many businesses or calls sit behind its 28%, and the dental benchmark covers dental groups only. Use them as a starting point, then pull the real numbers from the prospect’s own phone log and booking system. That is the sale: their number, not ours.',
    },
    {
      kind: 'table',
      caption: 'What six types of local business buy first, and the number the owner can watch. Example offers, not promises',
      cols: ['Business', 'What they buy first', 'The number they watch'],
      rows: [
        ['Trades (plumbers, heating, electricians)', 'Every missed call texted back, a visit booked', 'Jobs booked from calls that rang out'],
        ['Clinics and dentists', 'Appointment reminders and a new time for every no-show', 'No-shows and cancellations a week'],
        ['Salons and barbers', 'Reminders, rebooking and replies to “are you free Saturday?”', 'Empty chairs a week'],
        ['Restaurants', 'Reservation and opening-hours calls answered, booking texts', 'Calls answered at the Friday rush'],
        ['Property managers', 'Every listing enquiry replied to by text and email, viewings booked', 'Minutes to the first reply'],
        ['Gyms and studios', 'Trial enquiries answered, a booking text, a reminder before the first class', 'Trials booked and attended'],
      ],
    },

    { kind: 'h2', id: 'offers', text: 'The offers that sell' },
    {
      kind: 'p',
      text: 'Start with one job per business and add the next once the first is running. Two blueprints cover most of the list. Each is a ready-made job Obsession runs, so you aren’t building the agent from scratch.',
    },
    {
      kind: 'list',
      items: [
        '**Missed calls texted back.** Every caller the business misses gets a text in seconds, their question answered from the price list and a time booked. See [missed call text back](/blueprints/missed-call-text-back). It is the easiest sale because the owner can check it against last month’s missed calls.',
        '**Appointment reminders.** A text the day before, a call to anyone who hasn’t confirmed and a new time offered to every no-show. See [appointment reminders](/blueprints/appointment-reminders). Its result is a number on the owner’s calendar: kept appointments.',
        '**An AI receptionist for after-hours and overflow calls.** It answers, books and takes messages when nobody can. See the [AI receptionist use case](/use-cases/ai-receptionist).',
        '**A monthly report.** Calls answered, texts sent, bookings made and no-shows rebooked, sent under your name. It is the part owners remember at renewal, so every offer includes it.',
      ],
    },
    {
      kind: 'p',
      text: 'For the voice side, see [AI voice agent for small business](/blog/ai-voice-agent-for-small-business). Add reminders or a receptionist as the second offer once the first has been live a month. A client on two offers is harder to lose and pays more each month for little extra running cost.',
    },

    { kind: 'h2', id: 'cost', text: 'What each offer costs you to run per business' },
    {
      kind: 'p',
      text: 'Obsession bills each piece at list rates: a US or UK number is $2 a month, texts $0.015 each, calls $0.012 a minute, plus $0.0676 a minute when the agent speaks in its own voice. The calls in these sums are forwarded, so they carry only the $0.012. US texting registration is $25 once and $17 a month for each campaign, and sits outside the plans. Model tokens are billed on top at the model’s rate and aren’t in the sums here, so read a week of real runs for your own figure. The inputs are examples; swap in your client’s.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 40 missed calls a month, 6 texts for each conversation, 120 appointments a month with 2 reminder texts each. US dollars at Obsession’s list rates, 23 November 2026, before model tokens',
      cols: ['Line', 'Sum', 'A month'],
      rows: [
        ['Number for the assistant', '1 × $2', '$2.00'],
        ['Missed call text back: texts', '40 × 6 × $0.015', '$3.60'],
        ['Missed call text back: forwarded call minutes (forwarded, so no voice charge)', '40 × 0.5 min × $0.012', '$0.24'],
        ['Appointment reminders: texts', '120 × 2 × $0.015', '$3.60'],
        ['Usage for one business, both offers', '', '$9.44'],
        ['US texting registration, 1 campaign, fixed', '$17 a month and $25 once', '$17.00'],
        ['Your cost for one business', '', '$26.44'],
      ],
    },
    {
      kind: 'p',
      text: 'So one business on both offers costs about $26 a month to run, before tokens, and the registration is most of it. Obsession’s rates list registration for texting in the US. On the Startup plan, $99 covers $111 of list-rate usage, and registration counts toward that. Ten businesses use $94.40 plus $170 of registration, $264.40, so the month costs $99 plus the $153.40 over the covered $111: $252.40. The $250 once also counts toward the covered amount. Obsession’s [prices](/pricing) are on one page.',
    },

    { kind: 'h2', id: 'pricing', text: 'What to charge: setup plus monthly' },
    {
      kind: 'p',
      text: 'Charge in two parts. A setup fee pays for connecting the calendar and price list, writing the agent’s answers in the owner’s voice and testing it. A monthly fee pays for running it, watching it and sending the report. Price against what the owner pays today, not against your cost. Two public anchors, as listed on 22 November 2026:',
    },
    {
      kind: 'list',
      items: [
        `**[Goodcall](${GOODCALL})** lists AI phone answering at $79, $129 or $299 a month, for about 150, 750 or 3,000 calls.`,
        `**[Smith.ai](${SMITH})** lists its AI Receptionist at $150 to $500 a month for 75 to 300 calls, and a free plan for 25.`,
      ],
    },
    {
      kind: 'p',
      text: 'A local business that already pays for an answering service has a price in its head. Because yours includes texts, reminders, bookings and a report, you can price in the same range or a step above it. Work the price out in three steps.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Add your cost per business, $26.44 in the table.',
        'Add the time you spend checking each report.',
        'Add a margin you’re happy with, then compare the total with the two anchors. Write the sum down for each client; it is how you explain the price.',
      ],
    },
    {
      kind: 'p',
      text: 'Then set the terms:',
    },
    {
      kind: 'list',
      items: [
        '**Setup fee:** charge it up front and say what it covers: connecting the calendar, loading prices and hours, 5 test calls and the first report.',
        '**Monthly fee:** month to month, so the owner can say yes without a contract. The report is what keeps them.',
        '**Texting registration:** pass it through at cost or fold it into the monthly fee, but tell the owner it is needed in the US and takes time to approve.',
        '**Add-ons:** a second offer, an extra location or more reminder types, each a line on the same invoice.',
      ],
    },

    { kind: 'h2', id: 'motion', text: 'The sales motion: demo, one-week trial, monthly report' },
    {
      kind: 'p',
      text: 'Owners don’t buy from a deck. They buy from seeing it work on their own phone. Run the sale in three steps, each with a date.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Demo on their own missed calls (day 1).** Ask for last month’s call log. Count the calls that rang out after 17:00 and on Saturdays, and multiply the jobs they would have booked by the owner’s average job price. Then forward your own phone to the assistant, ring it, and let the owner read the text that comes back.',
        '**One-week trial (days 2 to 8).** Forward only after-hours and busy calls to the assistant’s number. Let the assistant answer them; you don’t reply by hand. The owner keeps the number and can turn forwarding off in a minute.',
        '**Monthly report (day 8 onwards).** Show calls answered, texts sent, bookings made and no-shows rebooked, next to the week before. Ask for the setup fee then, with the numbers on the table.',
      ],
    },
    {
      kind: 'art',
      art: {
        kind: 'report',
        title: 'redhill.example · week 1 report',
        period: 'Forwarded calls, first 7 days',
        cols: ['Calls', 'Texted back', 'Booked'],
        rows: [
          { name: 'After 17:00', cells: ['14', '14', '6'], tone: 'ok' },
          { name: 'Saturday', cells: ['9', '9', '4'], tone: 'ok' },
          { name: 'Line busy', cells: ['6', '6', '2'], tone: 'ok' },
          { name: 'Asked for a person', cells: ['3', '3', '0'], tone: 'info' },
        ],
        notes: ['Each text said it was an AI assistant.', 'Three callers asked for the owner and were handed over.'],
      },
      caption: 'Example: the report you send after the trial week, under your own name. Redhill Heating and every figure are invented.',
    },
    {
      kind: 'p',
      text: 'The figure to watch is booked jobs from calls that would have gone to voicemail. It is the one the owner can count against their own diary.',
    },

    { kind: 'h2', id: 'white-label', text: 'White label: your name on the dashboard and report' },
    {
      kind: 'p',
      text: 'White label means the client sees your brand, not the tool’s. With Obsession you run its blueprints for each client under your own brand: every result lands in a dashboard and a report that carry your name. White label comes with the Enterprise plan, from $1,500 a month, with a separate account per client. See [Obsession for agencies](/agencies) for the terms.',
    },
    {
      kind: 'p',
      text: 'Check before you resell any agent. Is the number in the client’s name or yours? Who owns the call and text history if the client leaves? Can you export it? Write the answers into the client agreement.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to put an AI agent on a local business’s phone, from each provider’s own pages as listed on 22 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Goodcall', 'A finished AI phone agent; every plan includes a local number, or forward your own', '$79, $129 or $299 a month\nAbout 150 to 3,000 calls', 'Billed per unique caller; you resell the plan', 'Owner-run shops that want to answer this week'],
        ['Smith.ai AI Receptionist', 'Answers 24/7, qualifies leads and transfers complex calls to a live receptionist', 'Free for 25 calls\n$150 to $500 a month for 75 to 300 calls', 'Billed per call; quoted past 1,000 calls', 'Firms that want a person on standby'],
        ['A voice-agent builder', 'Pick the model and voice and build to the client’s rules', 'Per minute, with a number extra', 'You build, test and maintain every agent', 'Developers building many agents'],
        ['Obsession (ours): [Missed call text back](/blueprints/missed-call-text-back), [Appointment reminders](/blueprints/appointment-reminders)', 'A number, inbox and browser per agent; ready-made jobs; results under your brand', 'Free, then $20, $99 or $499 a month; usage per piece', 'US texting registration is extra; white label is on Enterprise', 'Agencies and freelancers running many small clients'],
      ],
    },

    { kind: 'h2', id: 'rules', text: 'Consent and AI disclosure for texts and calls' },
    {
      kind: 'p',
      text: 'These are US rules, given as general information and never as legal advice. Check your own country’s rules and ask a lawyer before you launch.',
    },
    {
      kind: 'list',
      items: [
        `**An AI voice counts as an artificial voice.** In February 2024 the Federal Communications Commission ruled that calls made with AI-generated voices are “artificial” under the Telephone Consumer Protection Act ([FCC 24-17](${FCC_24_17})). Calls to mobiles need the person’s prior express consent, and marketing calls need it in writing.`,
        `**Texts follow the same idea.** CTIA’s [messaging principles](${CTIA}) treat an appointment reminder as informational, sent to the number the customer gave when they booked. Add an offer and it becomes promotional, which needs more consent. Keep reminders plain, and stop at STOP.`,
        `**US business texting needs registering first.** The Campaign Registry says [businesses texting customers on a 10-digit number must register](${TCR_INTRO}). File before launch week.`,
        '**Say it’s an AI.** Open every call and first text with a line such as “This is Redhill’s AI assistant”. Some US states and other countries require it, and it is the right default everywhere.',
      ],
    },
    {
      kind: 'p',
      text: 'Obsession’s agents are built to these rules on [/agents](/agents). They say they’re an AI to anyone they speak to. They text and call only people who gave the business their number. [Can AI make phone calls](/blog/can-ai-make-phone-calls) covers the calling law in full, and [10DLC registration](/blog/10dlc-registration) covers the texting filing.',
    },

    { kind: 'h2', id: 'scale', text: 'How one person serves 10, then 200 businesses' },
    {
      kind: 'p',
      text: 'Each business has its own agent with its own number, inbox and browser, so a new client is a new persona, not a new hire. What changes as you grow is how you check them.',
    },
    {
      kind: 'table',
      caption: 'Example workload at three sizes. Usage at list rates before model tokens, registration at $17 a business, on the cost inputs above',
      cols: ['Clients', 'Usage a month', 'Registration a month', 'Where your hours go'],
      rows: [
        ['10', '$94', '$170', 'A weekly look at each report; most weeks, nothing to fix'],
        ['50', '$472', '$850', 'Review only the flagged conversations; template every onboarding'],
        ['200', '$1,888', '$3,400', 'One report a client, exceptions only; hand onboarding to a helper'],
        ['1,000', '$9,440', '$17,000', 'A small team, each owning a set of clients and a template'],
        ['10,000', '$94,400', '$170,000', 'Regional teams, exception reports and a template for every trade'],
      ],
    },
    {
      kind: 'list',
      items: [
        '**Template the setup.** One checklist per trade: price list, hours, emergency rules, calendar.',
        '**Read exceptions, not every chat.** Open callers who asked for a person, got no reply or said STOP.',
        '**Test after every change.** A new price list or holiday hours changes what the agent says, so call it as a customer once.',
        '**Keep one question list.** Questions the agent couldn’t answer become next month’s additions to the price list.',
      ],
    },
    {
      kind: 'p',
      text: 'What goes wrong first is the same everywhere: a price list that is out of date, a calendar that isn’t connected and a text sent before registration is approved. Check those three on day one.',
    },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. Scale runs from one agent for a freelancer to every front desk at 240 clinics, or from one agent to ten million. Each has its own identity and is paid for by what it uses.',
    },
    {
      kind: 'cta',
      text: 'Pick a blueprint, run it on your own phone first, then forward a client’s missed calls to it and send them the report.',
      to: '/blueprints/missed-call-text-back',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'one-platform', text: 'One persona per client, every piece the job needs' },
    {
      kind: 'p',
      text: 'The jobs above use four pieces. An **inbox** is an email address the agent owns: it sends, receives and keeps each thread, and calls your webhook (a message to your own system) on every new email. A **phone number** is a US or UK number the agent owns, for texts and calls, and for sign-in codes. A **browser** is a cloud browser whose sessions keep their logins, so the agent signs in once with the logins you give it and stays signed in. A **sandbox** is a computer that starts only when a task needs to run code, such as reading a client’s spreadsheet.',
    },
    {
      kind: 'p',
      text: 'A persona puts them under one identity: one name, one address, one number, one browser profile. For a local business, that means the customer who texts, then emails the quote request, then phones, reaches the same agent with the whole history. A persona costs nothing while it waits, though its number ($2) and inbox ($0.50) bill monthly. It answers a new message in about 50 ms without starting a machine, so 200 clients means 200 personas, not 200 servers.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent touches lands in one event log, dated, with the email, screenshot or recording behind it. That is your proof for each client: the missed call at 17:52 and the text at 17:52. Results can also go to Slack, email, a CRM, a sheet or a PDF report.',
    },
    {
      kind: 'p',
      text: 'The usual way is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill and log. That is four integrations to keep working per client, and the seams are where jobs break: the confirmation code arrives at one vendor while the browser waits at another, and the call log and the email thread sit in different places. If your job needs only one piece, a single specialist can be enough. For several, one platform is simpler to run and to bill. See the [side by side with AgentMail, Twilio, Browserbase and E2B](/compare/agentmail-twilio-browserbase-e2b), or [the parts of an AI agent stack, piece by piece](/blog/ai-agent-infrastructure-stack).',
    },
    {
      kind: 'p',
      text: '**Two ways to run it.** With no code, pick a blueprint or describe the job in your own words and Obsession sets it up and starts the agent: [see how teams use it](/no-code). Developers get the API, SDKs or MCP: `obsession.personas.create({ inbox: true, phone: "US" })` makes a persona with an inbox and a US number, and its emails and texts arrive as events at your webhook. Results sit in a dashboard and report under your own brand, with white label on Enterprise.',
    },
    {
      kind: 'p',
      text: 'Once a client’s persona has its own number, inbox and browser, it can do more than the first offer. It can chase a customer’s unpaid invoice by email and text with [invoice collector](/blueprints/invoice-collector). It can check a supplier’s portal for a price rise each week. It can call every new enquiry back within minutes with [speed-to-lead callback](/blueprints/speed-to-lead-callback). Each is another line on the same monthly invoice.',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about selling AI agents to local businesses' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I sell AI agents to local businesses?',
          a: 'Sell one outcome, such as every missed call texted back, and prove it on the owner’s own calls in a one-week trial. Then charge a setup fee and a monthly fee, and send a monthly report with calls answered and jobs booked.',
          link: { label: 'Missed call text back', to: '/blueprints/missed-call-text-back' },
        },
        {
          q: 'What should I charge for an AI agent for a local business?',
          a: 'Price against what the owner pays now. On 22 November 2026 Goodcall listed $79 to $299 a month and Smith.ai $150 to $500 a month for 75 to 300 calls. Add your running cost, about $26 a month in our example, and your time, then compare it with those prices.',
        },
        {
          q: 'Can I resell AI agents under my own brand?',
          a: 'Yes. With Obsession’s white label you run its blueprints for each client under your own brand, with every result in a dashboard and report that carry your name. White label comes with the Enterprise plan, from $1,500 a month.',
          link: { label: 'Obsession for agencies', to: '/agencies' },
        },
        {
          q: 'What does it cost to run an AI agent for one local business?',
          a: 'At Obsession’s list rates on 23 November 2026, one business with 40 missed calls and 120 reminders a month uses about $9.44 of numbers, texts and call minutes. Add $17 a month for US texting registration, then model tokens, and the total is about $26 before tokens.',
        },
        {
          q: 'Do AI agents have to say they are an AI?',
          a: 'Have them say so on every call and first text. The FCC’s February 2024 ruling treats AI voices as artificial voices, which need the person’s prior express consent. This is general information, not legal advice.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'Which local businesses buy AI agents first?',
          a: 'Trades, clinics, salons, restaurants, property managers and gyms, because each loses money from calls nobody answers or appointments nobody keeps. Start with the one whose missed calls you can count from their phone log.',
        },
        {
          q: 'How many local businesses can one person look after?',
          a: 'Each business has its own agent, so the limit is how you check them. Ten clients need a weekly look at each report. At 200, review only the exceptions: callers who asked for a person, got no reply or said STOP.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices and the law',
      text: 'Provider prices are as listed on 22 November 2026 and Obsession’s rates as of 23 November 2026, in US dollars; prices change. The cost tables use example inputs. Nothing here promises income or is legal advice. Redhill Heating is invented.',
    },
  ],

  sources: [
    { title: 'How missed calls are costing your business more than you think', publisher: 'CallRail', url: CALLRAIL, date: '2025-09-11' },
    { title: 'What are good no-show and cancellation rates for a DSO or multi-location dental practice?', publisher: 'Henry Schein One', url: SCHEIN, date: '2026-06-23' },
    { title: 'Declaratory Ruling FCC 24-17, AI technologies and robocalls', publisher: 'Federal Communications Commission', url: FCC_24_17, date: '2024-02-08' },
    { title: 'Messaging Principles and Best Practices', publisher: 'CTIA', url: CTIA, date: '2023-05' },
    { title: 'The Campaign Registry and 10DLC', publisher: 'The Campaign Registry', url: TCR_INTRO, date: '2026' },
    { title: 'Pricing', publisher: 'Goodcall', url: GOODCALL },
    { title: 'AI Receptionist pricing', publisher: 'Smith.ai', url: SMITH },
  ],

  related: ['/agencies', '/no-code', 'recipe:missed-call-text-back', 'recipe:appointment-reminders', 'ai-voice-agent-for-small-business', 'can-ai-make-phone-calls'],
}

import type { BlogPost } from './types'

/* Agent-search guide (_research/seo/agent-search-23nov/PLAN.md, row 9; Seun's "Yes, run the plan", 23 Nov 2026): an AI
   agent for law firms. Primary "ai agent for law firms"; secondaries from the plan's demand table: best ai agents for
   law firms, ai voice agent for law firms, custom ai agents for law firm, ai intake agent for law firms. Sources checked
   on 23 Nov 2026: Smith.ai pricing, Ruby pricing, Lawmatics pricing and Intaker pricing (their own pages); the Georgia
   Bar's summary of Clio's 2024 Legal Trends Report secret-shopper study (Clio's own pages refused this machine, so the
   figures are quoted as that summary reports them); the Bar Examiner's summary of ABA Formal Opinion 512 (29 July
   2024), because the ABA's own PDF refused this machine. Obsession's prices are from src/lib/pricing/pricing.json
   (number $2 a month, inbox $0.50, calls $0.012 a minute plus the agent’s voice at $0.0676 a minute, texts $0.015, emails $0.40 per 1,000, browser $0.10 an hour,
   US texting registration $25 once then $17 a month per campaign; plans $20, $99, $499). The two firm sizes, their
   enquiry counts and the sums are labelled examples. Pike & Marlow LLP at pikemarlow.example is invented. British
   English, no dashes. */

const CLIO_2024 = 'https://www.2civility.org/2024-clio-legal-trends-report-fixing-the-first-impression-problem-for-law-firms/'
const ABA_512 = 'https://thebarexaminer.ncbex.org/article/fall-2024/generative-artificial-intelligence-tools/'
const SMITH = 'https://smith.ai/pricing'
const RUBY = 'https://www.ruby.com/pricing/'
const LAWMATICS = 'https://www.lawmatics.com/pricing/'
const INTAKER = 'https://www.intaker.com/pricing'

export const post: BlogPost = {
  slug: 'ai-agent-for-law-firms',
  title: 'AI agent for law firms: intake, follow-up and documents',
  dek: 'A law firm’s front office is a phone, an inbox and a handful of portals. An AI agent can answer every enquiry in minutes, book the consultation and chase documents until they arrive, and hand every legal judgement to a lawyer.',
  metaTitle: 'AI agent for law firms: intake, follow-up and documents',
  description:
    'An AI agent for law firms answers every enquiry, books the consultation and chases documents. Jobs, ethics rules and costs for 5 and 100 lawyers.',
  answer:
    'An AI agent for law firms runs the front office. It answers every enquiry by phone, form and email within minutes, books the consultation, chases documents and signatures and checks portals, and a lawyer decides anything needing judgement. At list rates it costs about $96 a month in usage for 5 lawyers and $1,601 for 100.',
  primaryKeyword: 'ai agent for law firms',
  keywords: [
    'best ai agents for law firms',
    'ai voice agent for law firms',
    'custom ai agents for law firm',
    'ai intake agent for law firms',
  ],
  category: 'Talk to customers',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 12,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'pikemarlow.example · one new enquiry',
      who: 'The intake agent on Pike & Marlow LLP’s number',
      rows: [
        { time: '18:52', text: 'Call answered: “Pike & Marlow’s AI assistant”', detail: 'Says it is an AI and gives no legal advice', tone: 'ok' },
        { time: '18:57', text: 'Intake questions asked and written up', detail: 'Matter type, dates, the other side’s name', tone: 'ok' },
        { time: '18:58', text: 'Conflict check list sent to the intake lawyer', detail: 'Held for a person to clear', tone: 'info' },
        { time: '19:01', text: 'Consultation booked, Thursday 10:30', detail: 'Confirmation by text and email', tone: 'ok' },
        { time: '19:02', text: 'Document list texted', detail: 'ID, the notice letter and the lease', tone: 'ok' },
        { time: 'Day 3', text: 'Reminder sent for the missing lease', detail: 'The client replied with the file the same hour', tone: 'ok' },
      ],
      foot: 'Example: Pike & Marlow LLP, its client and every time here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent for law firms takes over the front office, the part of a firm that answers the phone, replies to web forms, books consultations and chases clients for paperwork. Small and mid-size firms run it on a few people, so enquiries go to voicemail during hearings and documents sit unchased for weeks. An agent with its own phone number, inbox and browser answers each enquiry as it arrives and keeps working through the follow-up. A lawyer decides everything that needs legal judgement.',
    },

    { kind: 'h2', id: 'front-office', text: 'What a law firm’s front office does all day' },
    {
      kind: 'p',
      text: 'Five jobs fill the front office of a firm with 5 to 100 lawyers. Each one is repetitive, time-sensitive and follows a checklist, which suits an agent.',
    },
    {
      kind: 'list',
      items: [
        '**Answer new enquiries** by phone, web form and email, and find out what the matter is and how urgent it is.',
        '**Qualify and book.** Ask the firm’s intake questions, note the practice area and book a consultation in the right lawyer’s calendar.',
        '**Run a conflict check.** Collect the names of the other parties so a person can check them against the firm’s clients before anyone says yes.',
        '**Chase documents and signatures.** Send the list, remind the client and confirm each file when it arrives.',
        '**Check portals.** Court e-filing sites, client portals and the other side’s secure sites hold updates that someone has to log in and read.',
      ],
    },
    {
      kind: 'p',
      text: 'What isn’t on the list matters as much. Giving advice, judging whether a case is strong, quoting a fee for a complex matter and deciding whether to take a client all stay with lawyers. The agent collects the facts and the lawyer decides.',
    },

    { kind: 'h2', id: 'slow-intake', text: 'What slow intake costs' },
    {
      kind: 'p',
      text: 'Clio, the legal software company, secret-shopped 500 US law firms for its 2024 Legal Trends Report by enquiring as a prospective client. The results show how many enquiries never reach a person.',
    },
    {
      kind: 'stat',
      value: '40%',
      label: 'of firms answered a phone enquiry, down from 56% in 2019 (Clio secret-shopper study of 500 US firms, 2024)',
      source: 'Georgia Bar, summary of Clio’s 2024 Legal Trends Report',
      href: CLIO_2024,
    },
    {
      kind: 'stat',
      value: '33%',
      label: 'of firms replied to an email enquiry, down from 40% in 2019; separately, 48% neither answered the phone nor called back (per a Georgia Bar summary of Clio’s 2024 report)',
      source: 'Georgia Bar, summary of Clio’s 2024 Legal Trends Report',
      href: CLIO_2024,
    },
    {
      kind: 'p',
      text: 'The same summary reports that people who spoke to someone by phone were over three times more likely to recommend the firm than the average. They were nearly eight times more likely than people who only got a voicemail follow-up. First contact decides how the firm is seen, whether or not the person hires.',
    },
    {
      kind: 'p',
      text: 'The sum for your own firm needs three inputs: how many enquiries you get, what share go unanswered and what a signed matter is worth. The table puts in the unanswered share Clio found, 60% of phone enquiries, and a conservative 1 in 25 of those callers who would have signed. Replace the inputs with your own call log.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 60% of enquiry calls unanswered, 1 in 25 of those callers would have signed, a matter is worth $3,000 in fees',
      cols: ['Firm', 'Enquiry calls a month', 'Unanswered', 'Matters lost', 'Fees lost a month'],
      rows: [
        ['5 lawyers', '250', '150', '6', '$18,000'],
        ['100 lawyers', '5,000', '3,000', '120', '$360,000'],
      ],
    },
    {
      kind: 'p',
      text: 'An agent works on the second column, because it answers every call at the same time, in the evening and at the weekend. The numbers to watch are the share of enquiries answered within 5 minutes, consultations booked and matters signed from enquiries that used to reach voicemail.',
    },

    { kind: 'h2', id: 'intake', text: 'The intake job, step by step' },
    {
      kind: 'p',
      text: 'An intake agent is the first person a prospective client reaches. It follows the firm’s script, so the quality of the script decides the quality of the intake.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**It answers and says what it is.** “Pike & Marlow’s AI assistant” on the first line, with an offer to put the caller through to a person at any point.',
        '**It asks the intake questions.** Practice area, key dates, the other parties’ names, whether a deadline is close. It writes the answers up as a summary in the firm’s case system.',
        '**It spots urgent matters.** A court date this week, an arrest or a notice with a deadline goes straight to an on-call lawyer’s phone.',
        '**It hands the conflict list to a person.** The agent collects names, and a person clears them.',
        '**It books the consultation** into a lawyer’s calendar with a confirmation by text and email.',
        '**It follows up.** A text and an email the day before, and a reminder if the client hasn’t sent the intake form.',
      ],
    },
    {
      kind: 'p',
      text: 'This is the job people mean by an AI voice agent for law firms. A voice answers the call and takes the details, and the follow-up then runs by text and email. [AI voice agent for small business](/blog/ai-voice-agent-for-small-business) covers the number and the setup in more detail, and [10DLC registration](/blog/10dlc-registration) covers the US texting filing.',
    },

    { kind: 'h2', id: 'documents', text: 'Chasing documents and checking portals' },
    {
      kind: 'p',
      text: 'After intake, most of the front office’s time goes on waiting for clients to send paperwork. A missing lease, payslip, signed retainer agreement or ID document stalls a matter. A person chases when they remember to; an agent chases on the schedule you set and stops the moment the file arrives.',
    },
    {
      kind: 'list',
      items: [
        '**It sends the list and the deadline,** by email and by text, in the client’s preferred order.',
        '**It reminds on a schedule,** for example on day 2, day 5 and day 9, then tells the paralegal that a client has gone quiet.',
        '**It checks each file when it arrives,** for the right document, the right name and a readable scan, and asks again with the reason if not.',
        '**It reads portals.** With the logins you give it, the agent’s browser signs in to a client portal or an e-filing site, reads the status and writes the change into the matter, with the page kept beside it.',
        '**It sends a morning summary** of who still owes what, per matter and per fee earner.',
      ],
    },
    {
      kind: 'p',
      text: 'The [document chaser blueprint](/blueprints/document-chaser) runs this job for loans and applications; a firm uses the same pattern with its own document lists. The measures are the days a matter waits for its documents and the share of files complete at the first deadline.',
    },

    { kind: 'h2', id: 'rules', text: 'The professional rules, as general information' },
    {
      kind: 'p',
      text: 'Lawyers’ duties follow them into AI tools. In July 2024 the American Bar Association’s ethics committee issued Formal Opinion 512 on generative AI, which applies the existing Model Rules of Professional Conduct to it. The points below are as [summarised by The Bar Examiner](' + ABA_512 + '), because the ABA’s own text could not be read automatically; read the opinion itself before you rely on it. This is general information, never legal advice. Your state’s rules and your own ethics counsel decide what applies to you.',
    },
    {
      kind: 'list',
      items: [
        '**Confidentiality (Rule 1.6).** The opinion says a lawyer generally needs the client’s informed consent before putting matter information into a self-learning AI tool. Commentary on the opinion adds that a boilerplate clause in a retainer letter isn’t enough. Check whether your agent’s model provider keeps or trains on what it receives.',
        '**Communication (Rule 1.4).** Even where consent isn’t needed, the opinion asks a lawyer to consider whether the client should be told about the AI. An agent that introduces itself as an AI on every call and message does that by default.',
        '**Supervision (Rules 5.1 and 5.3).** Managerial lawyers should set clear policies for the firm’s use of generative AI, and a lawyer stays responsible for the work of non-lawyer assistants. In practice the agent works from a script a lawyer approved and hands off on a list of triggers.',
        '**No legal advice.** The agent says so, and sends “should I sue?” to a lawyer. Keep it to facts, scheduling and paperwork.',
        '**Prospective clients.** The agent is the first thing a prospect speaks to. Ask your state’s bar how its rules treat what a prospect tells the firm before anyone is hired.',
      ],
    },
    {
      kind: 'p',
      text: 'Clients accept some of this more readily than firms expect. In the same Clio study, 51% of prospective clients agreed a chatbot can be a helpful starting point for exploring legal options, and three in five would use one only if they could switch to a person when they needed. So the agent offers a person on every call and message.',
    },

    { kind: 'h2', id: 'options', text: 'The options for a firm’s front office', compare: true },
    {
      kind: 'p',
      text: 'Firms usually choose between software that automates the intake form and follow-up, a service where people answer the phone, and an agent that does both. Each option is described from its own pricing page as read on 23 November 2026, with Obsession last.',
    },
    {
      kind: 'table',
      caption: 'Prices in US dollars, as each provider listed on 23 November 2026; prices change, so check each page before you buy',
      compare: true,
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'Lawmatics: legal CRM and intake automation',
          'Custom intake forms, e-signatures, conflict checking and automations; two-way text on its Premium plan; Merlin AI add-ons for qualifying and engaging leads',
          'No public price; a quote for each plan, with a 3-user minimum on Essential and Premium and 5 on Enterprise',
          'Software, not a voice: a person or another tool has to answer the phone',
          'Firms that want one system for intake forms, marketing and follow-up',
        ],
        [
          'Intaker: legal intake with chat, phone and AI',
          'Intake across chat and phone, with human intake agents and AI',
          'Monthly plans, no price listed on its pricing page',
          'Price needs a conversation; scripts and hours depend on the plan',
          'Firms that want intake handled by the vendor',
        ],
        [
          'Smith.ai: virtual receptionists',
          'People answering in your firm’s name, with free transfers to your team',
          'Starter $300 for 30 calls, Basic $810 for 90, Pro $2,100 for 300; extra calls $8.50 to $11.50; 10% off for 12 months',
          'Priced per call, so a busy month is expensive; it answers, it doesn’t chase documents or read portals',
          'Firms that want a live person on every call',
        ],
        [
          'Ruby: virtual receptionists',
          'People answering by the minute, with no setup fees',
          '$250 for 50 minutes, $395 for 100, $720 for 200, $1,725 for 500; no extra-minute rate listed',
          'Phone only; no texting follow-up, document chasing or portals on its pricing page',
          'Small firms with predictable call volume',
        ],
        [
          'Obsession (ours): an agent with its own number, inbox and browser',
          'Answers calls and texts, replies to email, chases documents and reads portals from one identity; every step lands in an event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'You write the script and the hand-off rules; no legal advice or conflict decisions, which stay with lawyers',
          'Firms that want the whole front office on one agent',
        ],
      ],
    },
    {
      kind: 'p',
      text: `Prices and plans as each provider lists them on its own page, read 23 November 2026: [Smith.ai](${SMITH}), [Ruby](${RUBY}), [Lawmatics](${LAWMATICS}) and [Intaker](${INTAKER}).`,
    },
    {
      kind: 'p',
      text: 'The options also work together. A firm can keep its case system and let an agent do the answering and chasing, passing each summary and booking into it.',
    },

    { kind: 'h2', id: 'cost', text: 'What it costs at 5 lawyers and at 100' },
    {
      kind: 'p',
      text: 'Obsession bills by use. The sums below use list rates: a number $2 a month, an inbox $0.50 a month, texts $0.015 each, calls $0.012 a minute plus the agent’s voice at $0.0676 a minute, emails $0.40 per 1,000, browser time $0.10 an hour, and US texting registration $25 once then $17 a month per campaign. Each paid plan’s fee covers that much usage at list rates.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 3 minutes and 4 texts a call, 1 browser hour for every 12.5 calls. Usage at list rates, a month',
      cols: ['Line', '5 lawyers, 250 calls', '100 lawyers, 5,000 calls'],
      rows: [
        ['Phone numbers ($2 each)', '1: $2', '10: $20'],
        ['Inboxes ($0.50 each)', '1: $0.50', '10: $5'],
        ['Call minutes ($0.012)', '750: $9', '15,000: $180'],
        ['The agent’s spoken voice ($0.0676 a minute)', '750: $50.70', '15,000: $1,014'],
        ['Texts ($0.015)', '1,000: $15', '20,000: $300'],
        ['Emails ($0.40 per 1,000)', '300: $0.12', '20,000: $8'],
        ['Browser for portals ($0.10 an hour)', '20 hours: $2', '400 hours: $40'],
        ['US texting registration ($17 a month per campaign)', '1 campaign: $17', '2 campaigns: $34'],
        ['Total a month', 'About $96', 'About $1,601'],
      ],
    },
    {
      kind: 'p',
      text: 'Add $25 once for each texting registration; it counts toward a plan’s covered usage, one campaign per business that texts. Developer’s $20 covers $20 of usage at list rates, Startup’s $99 covers $111 and Scale’s $499 covers $588. That puts the 5-lawyer firm on Startup and the 100-lawyer firm on Enterprise, from $1,500 a month. The AI model that holds the conversation bills separately, from $0.975 per million input tokens, and isn’t in the table. Compare the totals with the options above: the same 250 calls on Smith.ai’s Pro plan is $2,100 a month, and 500 minutes on Ruby is $1,725. An agent doesn’t replace the person who handles the matters that need a lawyer, so the saving is in the hours the front office spends on calls, reminders and chasing.',
    },

    { kind: 'h2', id: 'one-agent', text: 'One agent, one identity, every piece the intake job needs' },
    {
      kind: 'p',
      text: 'An intake agent uses four pieces. The **phone number** is a US or UK number the agent owns: it makes and takes calls, sends and receives texts from the agent’s own number in the firm’s name, and receives sign-in codes. The **inbox** is a real address with each client thread kept and your webhook, a message to your own system, called on every new email. The **browser** is a cloud browser whose sessions keep their logins, so the agent signs in once with the logins you give it. A **sandbox**, a computer started only for a task that runs code, reads a spreadsheet of matters. A **persona** puts them under one identity, so the client who calls, then emails the lease, then replies to a reminder text reaches the same agent with the whole history, and the sign-in code a court portal texts reaches the number whose browser is waiting at the login page. A waiting persona costs nothing, though its number and inbox bill monthly, and it answers a new message in about 50 milliseconds.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent touches lands in one **event log**, dated, with the email, screenshot or recording behind it: the record of what a client was told and when, a trail a supervising lawyer can review, and a morning summary of bookings and missing documents. Results reach Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent. The usual way is four vendors, for email, phone and texting, a browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working and seams where a job breaks, such as the code arriving at one vendor while the browser waits at another. If your job needs only one piece, one specialist can be enough. For a whole front office, one platform is simpler to run and to supervise: see [AgentMail, Twilio, Browserbase and E2B against every piece on one API](/compare/agentmail-twilio-browserbase-e2b) and [the AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack).',
    },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. Pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up the agent, for one firm or every office of a national one. Developers get the API, SDKs or MCP, the standard way for an AI tool such as Claude to call outside services: one `obsession.personas.create` call with an inbox, a US number and a browser creates the identity, and a webhook receives each `email.received` and `sms.received` event. The agent follows [the agents page](/agents) rules: it says it’s an AI, texts and calls only people who gave the business their number, signs in only with logins you provide and works within a monthly spend limit you set on its key. The same persona can then do more: text a client when a matter changes in the portal, remind clients of a court date, or collect forms for a new hire. One agent or ten thousand, each with its own identity.',
    },
    {
      kind: 'cta',
      text: 'Start from a blueprint built for the front office: reply to every missed call by text, call a new lead back within minutes, or chase every document until it arrives.',
      to: '/blueprints/missed-call-text-back',
      label: 'See the blueprint',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'What is an AI agent for law firms?',
          a: 'It is software that does a firm’s front-office work on its own phone number, inbox and browser. It answers enquiries, asks intake questions, books consultations, chases documents and reads portals, and passes anything that needs legal judgement to a lawyer. It doesn’t give legal advice or decide whether to take a client.',
        },
        {
          q: 'What are the best AI agents for law firms?',
          a: 'It depends on the job. Intake-and-CRM software such as Lawmatics automates forms and follow-up, and live-receptionist services such as Smith.ai and Ruby answer the phone with people. An agent with its own number, inbox and browser covers the answering, the chasing and the portals together. Compare them on the jobs, the price at your call volume and who supervises.',
          link: { label: 'The options compared', to: '/blog/ai-agent-for-law-firms#options' },
        },
        {
          q: 'Can an AI voice agent answer a law firm’s phone?',
          a: 'Yes. A voice agent answers in a natural voice, asks the intake questions, books the consultation and texts the confirmation. It should say it’s an AI at the start of each call, offer a person, and give no legal advice. In the US, texting clients from a business number needs a registration filed first.',
          link: { label: 'AI voice agent for small business', to: '/blog/ai-voice-agent-for-small-business' },
        },
        {
          q: 'What is an AI intake agent for law firms?',
          a: 'It is the agent that handles new enquiries. It asks the firm’s intake questions, writes them up, flags urgent matters, collects the other parties’ names for a conflict check that a person clears, and books the consultation. The firm writes the script and the hand-off rules.',
        },
        {
          q: 'Are AI agents allowed under legal ethics rules?',
          a: 'The American Bar Association’s Formal Opinion 512 of July 2024 applies the existing rules to generative AI: confidentiality, communication, competence and supervision. A lawyer generally needs informed consent before putting client information into a self-learning tool, and managerial lawyers should set clear policies. Rules differ by state, so ask your bar or ethics counsel. This is general information, not legal advice.',
          link: { label: 'The professional rules', to: '/blog/ai-agent-for-law-firms#rules' },
        },
        {
          q: 'What does a custom AI agent for a law firm cost?',
          a: 'At Obsession’s list rates, a 5-lawyer firm taking 250 enquiry calls a month uses about $96 a month, and a 100-lawyer firm taking 5,000 uses about $1,601, before the one-off $25 texting registration and the AI model’s token cost. Plans are Free, then $20, $99 or $499 a month. Live receptionists on Smith.ai’s Pro plan were $2,100 for 300 calls on 23 November 2026.',
          link: { label: 'Costs at both sizes', to: '/blog/ai-agent-for-law-firms#cost' },
        },
        {
          q: 'How do I describe a custom agent for my firm without writing code?',
          a: 'Write the job in plain words: who calls, which questions to ask, when to book, what to chase and when to hand over to a lawyer. Obsession sets it up as a blueprint and spins up an agent with its own number, inbox and browser. A lawyer should approve the script before it goes live.',
          link: { label: 'Run agents without code', to: '/no-code' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices and the rules',
      text: 'Every price is as each provider listed it on 23 November 2026, in US dollars, and prices change. The Clio figures are as reported in a Georgia Bar summary of its 2024 report, and the ethics points are as summarised by The Bar Examiner. The professional rules are described as general information and never as legal advice; your state’s rules and your ethics counsel decide what applies to your firm. Pike & Marlow LLP in the picture and every input in the two tables are examples.',
    },
    {
      kind: 'cta',
      text: 'Describe the front-office job in your own words and Obsession sets up an agent with its own number, inbox and browser. Start free to receive calls and texts; sending starts on a paid plan from $20 a month.',
      to: '/no-code',
      label: 'Start free',
    },
  ],

  sources: [
    {
      title: '2024 Clio Legal Trends Report: fixing the first impression problem for law firms',
      publisher: 'Georgia Bar, Future Law (summarising Clio)',
      url: CLIO_2024,
      date: '2024',
    },
    {
      title: 'Generative Artificial Intelligence Tools (ABA Formal Opinion 512, 29 July 2024)',
      publisher: 'The Bar Examiner, NCBE',
      url: ABA_512,
      date: '2024',
    },
    { title: 'Pricing', publisher: 'Smith.ai', url: SMITH, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Ruby', url: RUBY, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Lawmatics', url: LAWMATICS, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Intaker', url: INTAKER, date: '2026-11-23' },
  ],

  related: ['/use-cases/ai-agents-for-professional-services', '/no-code', 'recipe:missed-call-text-back', 'recipe:speed-to-lead-callback', 'recipe:document-chaser', 'ai-voice-agent-for-small-business', 'can-ai-make-phone-calls'],
}

import type { BlogPost } from './types'

/* Agent search guide (_research/seo/agent-search-23nov/PLAN.md, "versus a person" cluster; Seun's "Yes, run the plan",
   23 Nov 2026). Primary "virtual assistant vs ai agent"; secondaries from Google suggestions (US and UK, 23 Nov 2026):
   ai agent vs virtual assistant, virtual assistant vs ai, virtual assistant or ai, ai vs virtual assistant. Read on their
   own pages on 23 Nov 2026: Wishup pricing (Prime, Elite and US-based plans and its listed hours), Fancy Hands pricing
   (requests, monthly prices, rollover) and the BLS page for secretaries and administrative assistants (May 2025 pay).
   Time etc and Belay were not read from their own pages (404 or no published assistant price), so no figure from either
   is quoted. The FCC ruling is the one the voice guide already reads. Obsession prices are from
   src/lib/pricing/pricing.json (read 23 Nov): inbox $0.50 a month, emails $0.40 per 1,000, number $2 a month, texts $0.015,
   calls $0.012 a minute, browser $0.10 an hour, US texting registration $25 once and $17 a month; Developer $20 covers $20
   of usage, Startup $99 covers $111. Northgate Plumbing at northgate.example, its customers and every input are invented.
   British English. */

const BLS = 'https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm'
const WISHUP = 'https://www.wishup.co/pricing'
const FANCY = 'https://www.fancyhands.com/pricing'
const FCC = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'

export const post: BlogPost = {
  slug: 'virtual-assistant-vs-ai-agent',
  title: 'Virtual assistant vs AI agent: what each does, what each costs, and how to split the work',
  dek: 'A human virtual assistant brings judgement and relationships. An AI agent brings volume, speed and every hour of the day. Here is what each costs on a real month of work, and the split that keeps the best of both.',
  metaTitle: 'Virtual assistant vs AI agent: what each does and costs',
  description:
    'Virtual assistant vs AI agent: what each does best, what each costs on the same month of work, how you check them and how to split the jobs between them.',
  answer:
    'A virtual assistant vs AI agent comes down to the job. A person is better at judgement, relationships and situations nobody planned for, and an AI agent at repeatable calls, texts, emails and portal checks, at any hour. Most small businesses do best with both.',
  primaryKeyword: 'virtual assistant vs ai agent',
  keywords: ['ai agent vs virtual assistant', 'virtual assistant vs ai', 'virtual assistant or ai', 'ai vs virtual assistant'],
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
      title: 'northgate.example · one Tuesday',
      who: 'An agent and Mira, a human assistant, at Northgate Plumbing, an invented 6-van firm',
      rows: [
        { time: '06:50', text: 'Email: “Can you quote a boiler service?”', detail: 'Agent answers from the price list in 40 seconds', tone: 'ok' },
        { time: '12:15', text: 'Missed call while Mira is at lunch', detail: 'Agent texts back in 6 seconds and books Thursday', tone: 'ok' },
        { time: '14:00', text: 'Customer asks for a refund outside policy', detail: 'Agent passes it to Mira with a summary', tone: 'info' },
        { time: '14:35', text: 'Mira rings the customer', detail: 'Goodwill credit agreed, a relationship kept', tone: 'ok' },
        { time: '19:42', text: 'Missed call after hours', detail: 'Agent texts the caller and books a Friday visit', tone: 'ok' },
        { time: '22:10', text: 'Supplier portal checked', detail: 'Invoice 8% up on last month, flagged for Mira’s morning', tone: 'info' },
      ],
      foot: 'Example: Northgate Plumbing, its customers and every time here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Choosing between a virtual assistant and an AI agent is a question about the work, not about people against software. A virtual assistant (a person who works remotely for you, by the hour or on a monthly plan) is better when a job needs judgement, a relationship or a situation nobody planned for. An AI agent (software that does a job for you with its own phone number, inbox and browser) is better when the job repeats and has to be done fast, in volume or at any hour.',
    },
    {
      kind: 'p',
      text: 'The cheapest and safest set-up for most owners is both. The agent takes the repeatable calls, texts, emails and portal checks. The person takes the exceptions. The same month of work is priced both ways here, with a way to check either one.',
    },

    { kind: 'h2', id: 'what-each-does', text: 'What each does best' },
    {
      kind: 'p',
      text: 'A person is strong where the right answer isn’t written down. They read a customer’s mood, decide whether a refund is worth the goodwill, notice that a supplier’s email sounds off and handle a request you have never seen before. They build a relationship with your clients that lasts for years, and they can learn your business without a manual.',
    },
    {
      kind: 'p',
      text: 'An agent is strong where the answer is written down and the job comes in large numbers. It texts back the missed call within seconds, sends 150 appointment reminders, answers the same five questions in 200 emails and checks 20 supplier portals every week without being asked. It does this at 3am on a Sunday as it does at 10am on a Tuesday, and it never gets bored of the fiftieth identical request.',
    },
    {
      kind: 'p',
      text: 'The line between them is not how clever each is. It is whether the work is a pattern the business can describe in a few sentences. If you can write the rule, give it to the agent. If the honest answer is “it depends on the person”, give it to a person.',
    },

    { kind: 'h2', id: 'side-by-side', text: 'Side by side: eight questions that matter' },
    {
      kind: 'table',
      caption: 'A human virtual assistant and an AI agent on the questions owners ask. The agent column describes an agent with its own number, inbox and browser; a chat assistant alone does less',
      cols: ['Question', 'Virtual assistant', 'AI agent'],
      rows: [
        ['Good at', 'Judgement, relationships, new situations, anything that “depends”', 'Repeatable jobs in volume: calls, texts, emails, reminders, portal checks'],
        ['Hours covered', 'Listed hours, for example 9am to 6pm Monday to Friday, about 27% of a 168-hour week', 'Every hour of every day'],
        ['Speed to answer', 'Minutes to hours, when they are at their desk', 'Seconds, one customer or ten thousand at once'],
        ['How many at once', 'One task at a time', 'As many conversations as your plan covers'],
        ['What it costs', 'From about $23 an hour in wages to $1,999 a month for a managed assistant', 'A few dollars to a few hundred a month of usage at list rates, see the worked month'],
        ['How you check the work', 'Spot checks, a weekly summary, or trust built over time', 'Every email, text, call and page in an event log, with the message or recording behind it'],
        ['Main risks', 'Sick days, turnover, notice periods, holding your passwords', 'Wrong answers on edge cases, a rule you forgot to write, a customer who wants a person'],
        ['Setup', 'Hiring, onboarding and a few weeks of learning', 'Pick a blueprint, or describe the job, and it starts'],
      ],
    },

    { kind: 'h2', id: 'costs', text: 'What each costs, from public prices' },
    {
      kind: 'p',
      text: 'Assistant prices vary by model: wages, a managed assistant, or pay by the request. These are the public figures, each read on its own page on 23 November 2026. Ours is described last.',
    },
    { kind: 'h3', id: 'va-prices', text: 'Human assistants: three ways to buy' },
    {
      kind: 'list',
      items: [
        `**Hire one directly.** The US Bureau of Labor Statistics put the [median pay for secretaries and administrative assistants](${BLS}) at $23.23 an hour, or $48,310 a year, in May 2025. That is wages only: add tax, equipment, holiday cover and your management time.`,
        `**A managed assistant.** [Wishup](${WISHUP}) lists a Prime VA at $1,999 a month and an Elite VA at $2,999 a month, with VAs available 9am to 6pm Monday to Friday. Its US-based VA plan is $5,400 a month. A manager handles hiring and cover.`,
        `**Pay by the request.** [Fancy Hands](${FANCY}) sells 3 requests a month for $35, 5 for $55 and 15 for $125, where a standard request is up to 20 minutes of work and unused requests roll over. That suits an occasional errand, not a daily flow.`,
      ],
    },
    {
      kind: 'p',
      text: 'An agent is priced by what it uses. At [Obsession’s list rates](/pricing) a phone number is $2 a month, an inbox $0.50, a text $0.015, a call $0.012 a minute, 1,000 emails $0.40 and an hour of browser time $0.10. A paid plan’s monthly fee covers that much usage: Developer $20, Startup $99, Scale $499. Model tokens are extra, at the model’s own price plus 30%.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to hand off work, from each provider’s own pages as read on 23 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          `Hire directly: [BLS pay data](${BLS})`,
          'Judgement, a lasting relationship and work nobody planned for',
          '$23.23 an hour median for secretaries and administrative assistants, May 2025',
          'Your working hours, one task at a time, plus your time to manage and cover',
          'A role that is mostly judgement',
        ],
        [
          `Wishup: [managed assistants](${WISHUP})`,
          'A vetted assistant with a manager handling hiring and cover',
          'Prime $1,999 a month\nElite $2,999 a month\nUS-based $5,400 a month',
          'Listed hours of 9am to 6pm Monday to Friday; one person’s capacity',
          'A steady, mixed workload for a person',
        ],
        [
          `Fancy Hands: [requests](${FANCY})`,
          'Occasional errands by the request, with rollover',
          '3 requests $35, 5 requests $55, 15 requests $125 a month',
          'Each request is up to 20 minutes; not built for a daily flow',
          'Odd jobs and one-off research',
        ],
        [
          'Obsession (ours): [Phone](/phone), [Email](/email), [Browser](/browser), [blueprints](/blueprints)',
          'An agent with its own number, inbox and browser under one identity, running repeatable jobs at any hour, with every email, text, call and page in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Needs your logins and consent, says it is an AI, and passes judgement calls to a person',
          'Repeatable calls, texts, emails and portal checks, done every day',
        ],
      ],
    },

    { kind: 'h2', id: 'worked-month', text: 'A worked month: one business at two sizes' },
    {
      kind: 'p',
      text: 'Northgate Plumbing is invented, so every input below is yours to replace. The workload is the same set of jobs at two sizes: one office, and ten offices with their own numbers. The jobs are missed-call text back, appointment reminders, first replies to customer emails, a few calls and weekly supplier portal checks, for a plumbing firm.',
    },
    {
      kind: 'table',
      caption: 'One month at Northgate Plumbing, an invented business. Assumed: 3 minutes a portal check, 15% of the work needs a person, a person costs the BLS median of $23.23 an hour, and texts count sent and received. Usage is at list rates on 23 November 2026, before model tokens',
      cols: ['Line', '1 office', '10 offices'],
      rows: [
        ['Missed calls texted back', '40', '400'],
        ['Bookings reminded by text', '150', '1,500'],
        ['Emails answered', '200', '2,000'],
        ['Calls handled, 3 minutes each', '30', '300'],
        ['Supplier portals checked weekly', '20', '200'],
        ['Hours of this work done by a person', '20', '202'],
        ['**Cost if one person does all of it**', '**$469**', '**$4,685**'],
        ['Agent usage: numbers, inboxes, 600 or 6,000 texts, calls with the agent’s voice, emails, browser', '$19', '$192'],
        ['US texting registration', '$17', '$17'],
        ['**Agent total, with the cheapest plan**', '**About $36** (Developer)', '**About $197** (Startup)'],
        ['A person on the 15% of exceptions (3 or 30 hours)', '$70', '$703'],
        ['**Agent plus a person on the exceptions**', '**About $106**', '**About $900**'],
      ],
    },
    {
      kind: 'p',
      text: 'Here is how to read the sum. A spoken call costs $0.012 a minute for the call plus $0.0676 a minute for the agent’s voice, about $0.08 in all. For one office, usage is $19.17 (including 90 spoken minutes at $6.08) and the US texting registration is $17 a month, so $36.17. The Developer plan’s $20 covers that much usage and the rest is billed at list rates, about $36. For ten offices, usage is $191.77 (900 spoken minutes, $60.84) plus the same $17, so $208.77. The Startup plan’s $99 covers $111 of it, and the remaining $97.77 is billed at list rates, about $197. A one-off $25 registration for the campaign is extra in the first month.',
    },
    {
      kind: 'p',
      text: 'Two points matter more than the cost. First, the agent column is not a replacement for the person: it is a way to stop paying a person for the 85% that follows a pattern. At 10 offices, that is the difference between 202 hours of work, more than a full-time job, and about 30 hours of judgement. Scale it further and the sum grows with it: 240 offices is about 4,840 hours of this work, 28 full-time jobs and roughly $112,000 a month in wages. Second, the exceptions line is the part of the work a person is better at, so it is worth paying for properly.',
    },
    {
      kind: 'p',
      text: 'The unpriced difference is coverage. A person on 9am to 6pm Monday to Friday covers 45 of the 168 hours in a week. A missed call on Friday at 7pm waits until Monday, and the caller has rung the next plumber by then. The agent texts back in seconds on the evenings, weekends and bank holidays a person is not at their desk.',
    },

    { kind: 'h2', id: 'checking', text: 'How you check the work, and what goes wrong' },
    {
      kind: 'p',
      text: 'Both need checking, in different ways. You build trust in a person over weeks, by reading their replies and noticing what they flag. You check an agent from its record: every email, text, call and page, dated, with the message or recording behind it. Read the first 20 conversations in full, then sample a handful a week.',
    },
    {
      kind: 'p',
      text: 'The risks differ too. A person goes on holiday, falls ill or leaves, and takes what they have learned with them. A person with your passwords is also a security question: ask what they can access and revoke it when they stop. An agent can be wrong on a case you didn’t foresee, so write down what it passes to a person: refunds above a limit, upset customers, anything legal or medical.',
    },
    {
      kind: 'p',
      text: 'Some customers want to speak to a person, and they should be able to. Tell people they are talking to an AI at the start of a call or text. The US Federal Communications Commission ruled in February 2024 that [AI-generated voices count as artificial voices](' + FCC + ') under the Telephone Consumer Protection Act, so calls to mobile phones need the person’s consent first. Text and call only people who gave you their number, and in the US register your texting first ([10DLC registration](/blog/10dlc-registration) explains how).',
    },

    { kind: 'h2', id: 'split', text: 'The best split: the agent takes the pattern, the person takes the exception' },
    {
      kind: 'list',
      items: [
        '**Agent:** texting back missed calls, appointment reminders, first replies to common questions, chasing invoices and documents, checking supplier portals and prices, filling the same form on many sites.',
        '**Person:** refunds and complaints, negotiations, sensitive conversations, new kinds of request, anything the agent passed up with a summary, and the relationship with your best clients.',
        '**Shared:** the agent starts, the person finishes. It collects the quote details and books the visit; Mira rings back the customer who is nervous about the price.',
      ],
    },
    {
      kind: 'p',
      text: 'Start with one job where you can see the loss, such as missed calls on your phone bill (15 jobs are in [AI agents for small business](/blog/ai-agents-for-small-business)), and run it for two weeks. Check how many people it reached, how many replied or paid and how many it passed to a person. If you already have an assistant, hand them back the hours the agent frees up, and give them the work only a person can do.',
    },

    { kind: 'h2', id: 'one-identity', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. The jobs above need three of the pieces. The **inbox** is a real address the agent owns: it sends and receives, keeps each thread and calls your webhook (a message to your own system) on every new email. The **phone number**, US or UK, sends and receives texts, makes and takes calls and receives sign-in codes, with texts going out from the agent’s own number in your business’s name. The **browser** is a cloud browser whose sessions keep their logins between runs, so the agent signs in once with the logins you give it and stays signed in.',
    },
    {
      kind: 'p',
      text: 'A **persona** puts those pieces under one identity: one name, one address, one number, one browser profile. That is what lets one agent do what an assistant does. The sign-in code a supplier’s portal texts reaches the same agent whose browser is waiting at the login page. The customer who emails and then rings reaches the same agent, with the whole history. A persona costs nothing while it waits (its number and inbox still bill monthly) and answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in one event log, dated, with the email, screenshot or recording behind it. For you, that is how you check the agent: a morning summary of what went out, and a dated record of what a customer was told. Results can go to Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent.',
    },
    {
      kind: 'p',
      text: 'The usual way to build this is one vendor for each piece: an email service, a phone and texting service and a browser service, each with its own key, bill and log. That is several integrations to keep working, and the seams are where jobs break, such as a code that arrives at one vendor while the browser waits at another. If your job needs only one piece, a single specialist can be enough. For several, [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) sets the options side by side, and [the AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack) explains how the pieces fit.',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. With no code, pick a blueprint, such as [missed call text back](/blueprints/missed-call-text-back), or describe the job in your own words and Obsession sets it up and starts the agent. If you or a developer would rather build, the [API, SDKs and MCP (the way AI tools connect to other software)](/developers) create a persona in one call. One agent for one office or one for each of 10,000 works the same way, each with its own identity, paid for by what each one uses.',
    },
    {
      kind: 'p',
      text: 'With its own number, inbox and browser, the same agent can do more once the first job works. It can text each customer after a visit to ask how it went and offer a rebooking link, check the sites that list your business for wrong opening hours, or collect quotes from three suppliers every quarter and return a table.',
    },
    {
      kind: 'cta',
      text: 'The inbox agent answers the emails that repeat, from your own address, and passes the rest to you with a summary.',
      to: '/blueprints/inbox-agent',
      label: 'See the blueprint',
    },
    {
      kind: 'cta',
      text: 'No blueprint for your job? Describe it in your own words and an agent is set up to run it, with no code.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about virtual assistants and AI agents' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Virtual assistant or AI: which should I choose?',
          a: 'Choose by the job. A virtual assistant suits work that needs judgement, a relationship or something new each time. An AI agent suits repeating work in volume, at any hour, such as texting back missed calls, sending reminders, answering common emails and checking supplier portals. Most small businesses do best with both.',
        },
        {
          q: 'Is an AI agent cheaper than a virtual assistant?',
          a: 'For repeating work, usually. In the worked month, 20 hours of calls, texts, emails and portal checks cost about $469 at the US median wage of $23.23 an hour. The same work on an agent cost about $36 at Obsession’s list rates (plus $25 once for texting registration), including the agent’s voice, before model tokens. A person is worth paying for the exceptions.',
        },
        {
          q: 'Can an AI agent replace a virtual assistant?',
          a: 'It can replace the repeatable part of the role, not the judgement. Refunds, complaints, negotiations and sensitive conversations still need a person. The usual result is that the assistant spends less time on repeats and longer on the work only a person can do.',
        },
        {
          q: 'What is the difference between an AI virtual assistant and a human one?',
          a: 'A human assistant works set hours, one task at a time, and brings judgement and relationships. An AI one works any hour, handles many conversations at once and follows the rules you give it. An agent with its own phone number, inbox and browser can act, not only draft.',
        },
        {
          q: 'How fast does an AI agent answer compared with a virtual assistant?',
          a: 'An agent answers in seconds at any hour, such as a text back to a missed call within seconds. A virtual assistant answers when they are at their desk, within their listed hours. A plan of 9am to 6pm Monday to Friday covers about 27% of the hours in a week.',
        },
        {
          q: 'How do I check what an AI agent has done?',
          a: 'Every email, text, call and page is recorded in an event log, dated, with the message, screenshot or recording behind it. Read the first 20 conversations in full, then sample a few a week and review what the agent passed to a person.',
        },
        {
          q: 'Do I need to tell customers they are talking to an AI?',
          a: 'It is the safe rule and often the law. The FCC treats AI-generated voices as artificial voices under the TCPA, and Obsession’s agents say they are an AI to anyone they speak to. Check your own country’s rules.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'Can I use an AI agent without writing code?',
          a: 'Yes. Pick a blueprint, or describe the job in your own words, and Obsession sets up an agent to run it. Results can land in Slack, email, a sheet or your CRM.',
          link: { label: 'AI agents for teams who don’t write code', to: '/no-code' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices, examples and the law',
      text: 'Prices are as each provider listed them on 23 November 2026 in US dollars, and change; check each page. BLS pay is May 2025. Northgate Plumbing in the picture and the worked month is invented, and every input is an example to replace with your own. Agent usage is at list rates before model tokens. The FCC ruling is cited from its published summary. The rules are general information from the US, never legal advice.',
    },
  ],

  sources: [
    { title: 'Secretaries and administrative assistants: Occupational Outlook Handbook', publisher: 'U.S. Bureau of Labor Statistics', url: BLS, date: '2025-05' },
    { title: 'Pricing', publisher: 'Wishup', url: WISHUP, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Fancy Hands', url: FANCY, date: '2026-11-23' },
    {
      title: 'Declaratory Ruling on AI technologies and robocalls (FCC 24-17)',
      publisher: 'Federal Communications Commission',
      url: FCC,
      date: '2024-02-08',
    },
  ],

  related: ['/no-code', 'recipe:inbox-agent', 'recipe:missed-call-text-back', 'ai-agents-for-small-business', 'ai-employees'],
}

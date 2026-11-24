import type { BlogPost } from './types'

/* Agent search guide A3 (_research/seo/agent-search-23nov/PLAN.md; Seun's "Yes, run the plan", 23 Nov 2026).
   Primary "start an ai automation agency"; secondaries from Google autocomplete (US and UK, 23 Nov 2026,
   autocomplete_23nov_ideas.json): ai automation agency, how to start an ai automation agency step by step, ai automation
   agency business model, ai automation agency for small businesses. /agencies is for marketing agencies and keeps its own
   words; this guide leads to it for running blueprints under the reader's own brand. Every provider price was read on its
   own page on 23 Nov 2026: n8n, Zapier, Make (free plan only; its paid prices are not on the page the tool could read),
   Retell AI, Goodcall and Smith.ai's AI Receptionist. The FCC's Declaratory Ruling FCC 24-17 (8 Feb 2024) is described as
   /blog/can-ai-make-phone-calls describes it. Obsession's rates are from src/lib/pricing/pricing.json (read 23 Nov): number
   $2 a month, texts $0.015, inbox $0.50 a month, US texting registration $25 once and $17 a month per campaign, model input
   tokens from $0.975 a million. The cost per client is worked from example inputs (160 texts and 2,000 input tokens each)
   and leaves out model output tokens. Brightside Plumbing at brightside.example is invented. No income is promised.
   British English, no dashes. */

const N8N = 'https://n8n.io/pricing/'
const ZAPIER = 'https://zapier.com/pricing'
const MAKE = 'https://www.make.com/en/pricing'
const RETELL = 'https://www.retellai.com/pricing'
const GOODCALL = 'https://www.goodcall.com/pricing'
const SMITH = 'https://smith.ai/pricing/ai-receptionist'
const FCC_24_17 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'

export const post: BlogPost = {
  slug: 'start-an-ai-automation-agency',
  title: 'How to start an AI automation agency: pick one job, price it and serve 200 clients',
  dek: 'Start with one niche and one job, priced as a setup fee plus a monthly fee. Clients pay $79 to $299 a month for a ready-made AI phone agent, and one client costs about $22 a month to run.',
  metaTitle: 'How to start an AI automation agency: services and pricing',
  description:
    'Start an AI automation agency in 8 steps: pick a niche, see what clients pay today, set pricing, choose a stack and follow the rules for texts and calls.',
  answer:
    'To start an AI automation agency, pick one niche and one job that repeats for every client, such as texting back missed calls. Price it as a setup fee plus a monthly fee and report results under your own name. On 23 November 2026, clients could buy a ready-made AI phone agent for $79 to $299 a month, so deliver more than the answered call; Obsession runs those agents for 10 clients or 200, each with its own number, inbox and browser.',
  primaryKeyword: 'start an ai automation agency',
  keywords: [
    'ai automation agency',
    'how to start an ai automation agency step by step',
    'ai automation agency business model',
    'ai automation agency for small businesses',
  ],
  category: 'For agencies',
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
      title: 'brightside.example · one client, one day',
      who: 'The text-back agent on Brightside Plumbing’s number',
      rows: [
        { time: '08:14', text: 'Missed call from a new number', detail: 'Owner was under a sink', tone: 'info' },
        { time: '08:14', text: 'Text sent from the agent’s number, in the business’s name', detail: 'Says it is an AI assistant and asks what is needed', tone: 'ok' },
        { time: '08:19', text: 'Customer replies: blocked drain, today', tone: 'ok' },
        { time: '08:20', text: 'Owner emailed the job and the customer’s number', tone: 'ok' },
        { time: '17:00', text: 'Day total written to the client’s report', detail: '11 missed calls, 9 texted back, 4 replies', tone: 'info' },
      ],
      foot: 'Example client. The same agent setup repeats for every client, each on its own number.',
    },
  },
  blocks: [
    {
      kind: 'p',
      text: 'An AI automation agency sells a repeatable job that AI agents do for local and small businesses, for a setup fee and a monthly price. Typical jobs are answering calls, texting back missed calls, sending appointment reminders and chasing documents. It suits freelancers, consultants, marketers and founders who can sell a service and want it to run without hiring a person for every client.',
    },
    {
      kind: 'p',
      text: 'You can sell a job clients already pay for, run it for a known cost per client and keep it identical across 200 clients. Each of the 8 steps ends with a pass mark.',
    },
    { kind: 'h2', id: 'what-it-is', text: 'What an AI automation agency sells' },
    {
      kind: 'p',
      text: 'The service is a result a client already values, delivered by software that runs every day. A plumber wants every missed call answered. A dental practice wants fewer no-shows. An accountant wants client papers to arrive on time. The client does not buy an AI. The client buys the answered call, the filled slot and the documents received.',
    },
    {
      kind: 'p',
      text: 'The business model has three parts: a niche you know, one job you can deliver identically for every client in it, and a stack whose cost per client you can name. Agencies that stay in one niche reuse the same setup, reporting and sales conversation. That is how one person serves 10 clients and a team serves 200.',
    },
    { kind: 'h2', id: 'step-1-niche', text: 'Step 1: pick a niche and one job' },
    {
      kind: 'p',
      text: 'Choose a niche where phones, inboxes or portals decide revenue: home services, clinics, salons, property managers, accountants, law firms. Then choose one job. Start with the job where a missed task has a price the owner can name, such as a lost call from a new customer.',
    },
    {
      kind: 'list',
      items: [
        '**Missed call text back:** every call that goes unanswered gets a text within a minute, and the owner gets the job by email. Watch calls texted back and replies each week.',
        '**Appointment reminders:** each booking gets a reminder text and a reschedule link. Watch no-shows each month.',
        '**Speed-to-lead callback:** a new web enquiry gets a call or text within minutes. Watch time to first reply and booked jobs.',
        '**Document chasing:** an agent texts and emails clients for missing papers until they arrive. Watch days to complete a file.',
      ],
    },
    {
      kind: 'p',
      text: 'A pass at this step is a niche list of at least 200 businesses you can reach, and a job you can describe in one sentence that a prospect repeats back to you.',
    },
    { kind: 'h2', id: 'step-2-services', text: 'Step 2: choose services that sell, and see what clients pay today' },
    {
      kind: 'p',
      text: 'Clients already pay for these jobs. Your price sits against what a ready-made product or a person costs them today. Two AI phone providers listed these prices on 23 November 2026, which is the range a local business compares you with.',
    },
    {
      kind: 'table',
      caption: 'What small businesses can buy today for answering calls, from each provider’s own pricing page as listed on 23 November 2026. US dollars a month',
      cols: ['Option', 'Plan', 'What it includes'],
      rows: [
        ['Goodcall', '$79, $129 or $299', '100, 500 or 2,000 unique callers a month\nExtra callers 79¢, 26¢ or 15¢ each'],
        ['Smith.ai AI Receptionist', '$0, $150, $270 or $500', '25, 75, 150 or 300 calls a month\nExtra calls from $2.17 to $3.00 each'],
      ],
    },
    {
      kind: 'p',
      text: 'The two products answer calls. They stop at the call. An agency that also texts the caller back, books the job, emails the owner and reports weekly sells the whole outcome, and the whole outcome is what clients pay a setup fee for.',
    },
    { kind: 'h2', id: 'step-3-pricing', text: 'Step 3: set a pricing model' },
    {
      kind: 'p',
      text: 'Three models cover most agencies. Pick one for each service and write it into the client agreement.',
    },
    {
      kind: 'list',
      items: [
        '**Setup plus monthly:** a one-off fee to configure the agent on the client’s number, calendar and price list, then a monthly fee for running and reporting. Predictable for both sides, and the most common.',
        '**Per outcome:** a fixed amount for each booked job, answered lead or collected document. It lines your income up with the client’s result and needs a clear definition of what counts.',
        '**Usage pass-through plus a fee:** the client pays the usage at cost and a monthly management fee. It is transparent and suits larger clients.',
      ],
    },
    {
      kind: 'p',
      text: 'Whichever you choose, work from the cost per client in step 5. Your monthly fee has to cover it, your own time and the registration fees US texting needs, with room left over.',
    },
    { kind: 'h2', id: 'step-4-stack', text: 'Step 4: choose the stack', compare: true },
    {
      kind: 'p',
      text: 'A stack has two layers. A builder holds the logic, such as “when a call is missed, send this text”. Infrastructure gives each client’s agent a real phone number, inbox and browser, so it can make the call, receive the reply and sign in to a portal. Many agencies use a builder alone for email and spreadsheets, and add a voice platform or infrastructure when the job needs a phone.',
    },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to build and run client agents, from each provider’s own pages as listed on 23 November 2026. Prices in the currency each page shows',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['n8n: workflow builder', 'Visual workflows with a self-hosted edition on GitHub', '€20 a month for 2,500 executions, billed yearly\n€50 for 10,000', 'Runs workflows. A phone number, inbox or browser per client comes from other services', 'Agencies that want to host their own automations'],
        ['Zapier: workflow builder', 'Connects thousands of apps with no code', 'Free for 100 tasks\n$19.99 a month for 750 tasks on the yearly plan\n$69 for 2,000 on Team', 'Counts every step as a task, so volume raises the bill. Calls need another service', 'Agencies whose clients already use common apps'],
        ['Make: workflow builder', 'Visual scenarios with a free plan', 'Free for 1,000 credits a month\nPaid plans on its pricing page', 'Phone, inbox and browser identities per client come from other services', 'Agencies that prefer a visual canvas'],
        ['Retell AI: voice platform', 'Build a phone agent and choose its model and voice', '$0.07 to $0.31 a minute headline, before heavier model choices\n$10 free credit', 'You build and test each agent. Texting, email and browsing sit elsewhere', 'Agencies whose main service is a voice agent'],
        ['Obsession (ours): blueprints and the toolkit', 'Ready blueprints for the jobs above, and each agent gets its own number, inbox and browser under one identity', 'Free, then $20, $99 or $499 a month; usage per piece', 'You choose the client, the price list and the wording. It runs the agents and does not sell your service for you', 'Agencies that want 10 to 200 clients on one bill'],
      ],
    },
    {
      kind: 'p',
      text: `Prices and plans as each provider lists them on its own page, read 23 November 2026: [n8n](${N8N}), [Zapier](${ZAPIER}), [Make](${MAKE}), [Retell AI](${RETELL}), [Goodcall](${GOODCALL}) and [Smith.ai](${SMITH}).`,
    },
    {
      kind: 'p',
      text: 'A pass at this step is one working agent for one test client, with every call, text and email listed in a log you can show the client.',
    },
    { kind: 'h2', id: 'step-5-cost', text: 'Step 5: work out the cost per client' },
    {
      kind: 'p',
      text: 'One client on the missed call text back service costs about $22 a month at list rates. The inputs are examples: 120 missed calls, 1 text to each caller, 1 in 3 callers replying, 2,000 input tokens per message. Use your client’s numbers.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'One client, one month, at list rates',
        rows: [
          { label: 'A US number for the client', value: '$2.00', note: '$2 a month' },
          { label: '160 texts, out and in', value: '$2.40', note: '$0.015 each' },
          { label: 'An inbox for the owner’s summary', value: '$0.50', note: '$0.50 a month' },
          { label: 'US texting registration', value: '$17.00', note: 'One campaign, plus $25 once' },
          { label: 'Model use, 0.32M input tokens', value: '$0.31', note: 'From $0.975 a million' },
        ],
        total: { label: 'About a month, per client', value: '$22.21', note: 'Output tokens are extra' },
      },
      caption: 'An example sum from Obsession’s list rates on 23 November 2026. Brightside Plumbing’s volumes are invented; US texting registration is $25 once and $17 a month for each campaign, outside plans',
    },
    {
      kind: 'p',
      text: 'At that rate 10 clients cost about $222 a month, 200 cost about $4,442, 2,000 cost about $44,420 and 20,000 cost about $444,200, before output tokens. The registration is the biggest line, so assume one campaign per client business unless you confirm otherwise. Subtract the cost from the price you set in step 3, and you have the margin per client.',
    },
    { kind: 'h2', id: 'step-6-first-10', text: 'Step 6: deliver to your first 10 clients' },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Write the service in one page: what the agent does, what it never does, what the client supplies (price list, hours, calendar) and how success is counted.',
        'Run it for one client at a discount for 30 days and keep every log.',
        'Turn that month into a before and after the next prospect can read: calls answered, texts sent, replies, jobs booked.',
        'Sign the next 9 clients in the same niche with the same setup, changing only names, numbers and wording.',
      ],
    },
    {
      kind: 'p',
      text: 'The numbers to watch are time to deliver a new client, calls and enquiries answered, replies, bookings and clients who renew in month 3. A pass is a new client live in under a week with no custom work.',
    },
    { kind: 'h2', id: 'step-7-scale', text: 'Step 7: grow from 10 clients to 200' },
    {
      kind: 'p',
      text: 'At 10 clients the work is setup by hand. At 200 it is repetition: the same agent copied with a new number, price list and wording. This is where an agent’s own identity matters. When each client has its own number and inbox, one client’s messages never mix with another’s, a number can be released when a client leaves, and an agent that is waiting adds no charge beyond its number and inbox.',
    },
    { kind: 'h2', id: 'step-8-reporting', text: 'Step 8: report results under your own name' },
    {
      kind: 'p',
      text: 'Clients renew on evidence. Send each client a weekly one-page report in your name with four lines: what the agent did, what came back, what it cost in time saved and what you changed. Keep the underlying log so any figure can be traced to the call, text or email behind it.',
    },
    { kind: 'h2', id: 'what-goes-wrong', text: 'What goes wrong, and the fix' },
    {
      kind: 'list',
      items: [
        '**Texts blocked:** unregistered US business texts get filtered, so the agent looks broken. Register the campaign before the first client goes live.',
        '**Agent gives a wrong price:** load the client’s real price list and test by calling it as a customer after every change.',
        '**Scope creep:** a client asks for a second job. Price the second job as its own service.',
        '**Cost creeps up:** texts and model use rise with volume. Check each client’s monthly usage against the margin you set.',
      ],
    },
    { kind: 'h2', id: 'rules', text: 'The rules that keep clients safe' },
    {
      kind: 'p',
      text: 'Your clients carry the legal risk of what the agent says and sends, so build the rules in from the first client. This is general information and not legal advice.',
    },
    {
      kind: 'list',
      items: [
        '**Say it is an AI:** an agent that speaks to a person tells them it is an AI.',
        '**Consent for texts and calls:** text and call only people who gave the business their number. In the US the FCC’s February 2024 ruling treats an AI voice as an artificial voice, so calls that use one to mobiles and home lines need the called person’s prior express consent, with some exceptions ([FCC 24-17](' + FCC_24_17 + ')).',
        '**Register US texting:** business texts in the US go through a registered campaign before the first one is sent. See the [10DLC guide](/blog/10dlc-registration).',
        '**Stay inside logins and limits:** an agent signs in only with logins the client provides and works within a monthly spend limit you set on its key.',
        '**Keep a log:** every call, text and email lands in one event log with the email, screenshot or recording behind it.',
      ],
    },
    {
      kind: 'p',
      text: 'The full rules for calls and texting are in [can AI make phone calls](/blog/can-ai-make-phone-calls), and the agent rules Obsession’s agents follow are on [/agents](/agents).',
    },
    { kind: 'h2', id: 'one-identity', text: 'One agent per client, with every piece the job needs' },
    {
      kind: 'p',
      text: 'The text-back job needs four pieces. An **inbox** is a real email address the agent owns: it sends and receives, keeps each thread and calls your webhook (a message to your own system) on every new email. A **phone number** is a US or UK number the agent owns: it sends and receives texts, makes and takes calls and receives sign-in codes, and texts go out from the agent’s number in the client’s name. A **browser** is a cloud browser whose sessions keep their logins between runs, so the agent signs in once with logins the client gives it and stays signed in. A **sandbox** is a computer started only when a task needs to run code, such as reading a spreadsheet.',
    },
    {
      kind: 'p',
      text: 'A **persona** puts those pieces under one identity per client: one name, one address, one number, one browser profile. The sign-in code that arrives by text reaches the same agent whose browser is waiting at the login page, and a customer who replies by email and then calls reaches the same agent with the whole history. A waiting persona answers a new message in about 50 milliseconds, and its number and inbox bill monthly while it waits.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent touches lands in one **event log**, dated, with the email, screenshot or recording behind it. For an agency that log is the proof for each client: the weekly report in step 8 is drawn from it, and a client who asks “did it text her back?” gets the message itself. Results also reach Slack, email, a CRM, a sheet, Clay or a PDF report.',
    },
    {
      kind: 'p',
      text: 'The usual build is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working across every client, and the seams are where jobs break: the code arrives at one vendor while the browser waits at another, and the call log and the email thread sit in different places. If a job needs one piece, a single specialist can be enough. See the side-by-side of [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) and [the AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack).',
    },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. That holds for one agent for one client or ten thousand, each with its own identity and paid for by what it uses.',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up the agent. Developers build on the API, SDKs or MCP described on [/developers](/developers).',
    },
    {
      kind: 'p',
      text: 'Once each client has its own number, inbox and browser, the same persona can also check a client’s listings and reviews inbox each morning, chase unpaid invoices by email and text, or sign in to a supplier portal with the client’s login and report price rises. Each is another service for the same client.',
    },
    {
      kind: 'cta',
      text: 'Run blueprints for every client under your own brand, with each result in a dashboard and report that carry your name.',
      to: '/agencies',
      label: 'See how teams use it',
    },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I start an AI automation agency with no experience?',
          a: 'Pick one niche you can reach, one job, and one ready-made setup. Build it for a single client at a discount for 30 days, keep the logs and use the result to sign the next clients. You need to sell and deliver one repeatable job, not write code.',
        },
        {
          q: 'What is the business model of an AI automation agency?',
          a: 'Most charge a one-off setup fee plus a monthly fee for running and reporting. Some charge per outcome, such as per booked job, or pass usage through at cost and add a management fee. Your monthly fee has to cover the cost per client, your time and registration fees.',
        },
        {
          q: 'What does an AI automation agency for small businesses sell?',
          a: 'Repeatable jobs for businesses without time for them: answering and texting back calls, appointment reminders, speed-to-lead follow up and document chasing. On 23 November 2026, ready-made AI phone agents cost $79 to $299 a month, so a service has to deliver the whole outcome.',
        },
        {
          q: 'Which tools do I need to run client agents?',
          a: 'A builder such as n8n, Zapier or Make holds the logic. A voice platform such as Retell AI handles calls. Each client’s agent also needs its own phone number and inbox. Obsession gives each agent a number, inbox and browser under one identity on one bill.',
          link: { label: 'See how teams use it', to: '/agencies' },
        },
        {
          q: 'Do I need to tell people the agent is an AI?',
          a: 'Yes. Build it into the first message and the first sentence of every call. In the US, calls using an AI voice to mobiles and home lines also need the called person’s prior express consent, and business texts need a registered campaign.',
          link: { label: 'Can AI make phone calls', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'How many clients can one person run?',
          a: 'When every client gets the same setup with a different number, price list and wording, one person can run dozens, and a team can run 200. Each extra client adds a known usage cost, so the limit is your support time.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices and the law',
      text: 'Every provider price is as listed on its own page on 23 November 2026, in the currency shown, and prices change; check each page before you buy. The FCC ruling is a US rule, given as general information and never as legal advice. Brightside Plumbing in the picture and the inputs in the cost sum are examples, and nothing here promises income.',
    },
    {
      kind: 'cta',
      text: 'Pick the blueprint for your first service and run it for a test client.',
      to: '/blueprints',
      label: 'Pick a blueprint',
    },
  ],
  sources: [
    { title: 'Pricing', publisher: 'n8n', url: N8N, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Zapier', url: ZAPIER, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Make', url: MAKE, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Retell AI', url: RETELL, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Goodcall', url: GOODCALL, date: '2026-11-23' },
    { title: 'AI Receptionist pricing', publisher: 'Smith.ai', url: SMITH, date: '2026-11-23' },
    {
      title: 'Implications of Artificial Intelligence Technologies on Protecting Consumers from Unwanted Robocalls and Robotexts, Declaratory Ruling (FCC 24-17)',
      publisher: 'Federal Communications Commission',
      url: FCC_24_17,
      date: '2024-02-08',
    },
  ],
  related: ['/agencies', 'recipe:missed-call-text-back', 'recipe:appointment-reminders', 'ai-voice-agent-for-small-business', 'no-code-ai-agents'],
}

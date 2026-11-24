import type { BlogPost } from './types'

/* Agent search guide (_research/seo/agent-search-23nov/PLAN.md, small business cluster; Seun's "Yes, run the plan",
   23 Nov 2026). Primary "ai agent for small business"; secondaries from Google suggestions (US and UK, 23 Nov 2026):
   ai agents for small business owners, best ai agents for small business, ai assistant for small business owners, ai
   virtual assistant for small business. /blog/ai-voice-agent-for-small-business keeps the voice phrase. Read on their own
   pages on 23 Nov 2026: HubSpot pricing, Zapier pricing (agents add-on), Salesforce small business pricing, Ruby pricing,
   ChatGPT pricing (no dollar figures came through, so none is quoted), the BLS page for secretaries and administrative
   assistants (May 2025 pay), the ICO's marketing email and text guidance and GOV.UK's late payment interest page. The
   FCC ruling, CTIA principles and The Campaign Registry are the ones the voice guide already reads. Obsession prices
   are from src/lib/pricing/pricing.json (read 23 Nov): inbox $0.50 a month, emails $0.40 per 1,000, number $2 a month,
   texts $0.015, calls $0.012 a minute (plus $0.0676 when the agent speaks), browser $0.10 an hour, US texting registration $25 once and $17 a month. Every
   input in the tables is a labelled example. Brightwell Physio at brightwell.example is invented. British English. */

const ICO = 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/electronic-and-telephone-marketing/electronic-mail-marketing/'
const GOVUK = 'https://www.gov.uk/late-commercial-payments-interest-debt-recovery/charging-interest-commercial-debt'
const FCC = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'
const TCR = 'https://www.campaignregistry.com/wp-content/uploads/TCR-Intro-2026-v4_comp.pdf'
const BLS = 'https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm'
const HUBSPOT = 'https://www.hubspot.com/pricing/crm'
const ZAPIER = 'https://zapier.com/pricing'
const SALESFORCE = 'https://www.salesforce.com/small-business/pricing/'
const RUBY = 'https://www.ruby.com/pricing/'
const CHATGPT = 'https://chatgpt.com/pricing/'

export const post: BlogPost = {
  slug: 'ai-agents-for-small-business',
  title: 'AI agents for small business: 15 jobs owners hand over, with what each saves and costs',
  dek: 'An AI agent for a small business does the work, not just the writing: it texts back the missed call, answers the email, chases the invoice and checks the supplier portal. Fifteen jobs, each with the sum to run on your own numbers.',
  metaTitle: 'AI agents for small business: 15 jobs owners can hand over',
  description:
    'An AI agent for small business can text missed callers, answer emails, chase invoices and check supplier portals. 15 jobs with the saving and monthly cost.',
  answer:
    'An AI agent for small business does the jobs that need a phone line, an inbox or a login: texting back missed callers, answering customer emails, reminding people of appointments, chasing late invoices and checking supplier portals. Start with the job where you lose the most, usually missed calls or late invoices. At list rates, most of these jobs cost between a few dollars and about $10 a month in usage.',
  primaryKeyword: 'ai agent for small business',
  keywords: [
    'ai agents for small business owners',
    'best ai agents for small business',
    'ai assistant for small business owners',
    'ai virtual assistant for small business',
  ],
  category: 'Talk to customers',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 14,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'brightwell.example · one Tuesday',
      who: 'Three agents at Brightwell Physio, an invented 4-person clinic',
      rows: [
        { time: '07:58', text: 'Missed call from a new patient', detail: 'Text sent from the clinic’s number in 6 seconds', tone: 'ok' },
        { time: '08:03', text: 'Patient replied: “Thursday 5pm?”', detail: 'Booked in the calendar, confirmation texted', tone: 'ok' },
        { time: '09:30', text: 'Email: “Do you take my insurance?”', detail: 'Answered from the clinic’s own list, copied to the owner', tone: 'ok' },
        { time: '12:00', text: 'Reminders sent for tomorrow’s 14 slots', detail: '2 replied to rebook, slots offered to the waitlist', tone: 'info' },
        { time: '16:10', text: 'Invoice 1042 is 14 days late', detail: 'Reminder emailed with the payment link', tone: 'late' },
        { time: '17:45', text: 'Supplier portal checked', detail: 'New invoice downloaded, 12% above last month’s', tone: 'info' },
      ],
      foot: 'Example: Brightwell Physio, its patients and every time here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An [AI agent](/glossary/ai-agent) for small business is software that does a job for you, start to finish, in the places the job happens: your phone line, your inbox, a customer’s text thread or a supplier’s website. An AI chat assistant such as ChatGPT drafts the reply. An agent sends it from your business’s own address, waits for the answer and follows up. For an owner, that difference is the one that matters: the work leaves your plate instead of landing on it as a draft.',
    },
    {
      kind: 'p',
      text: 'Fifteen jobs follow, in four parts of the business, each with a sum in your own numbers and its monthly cost at list rates.',
    },

    { kind: 'h2', id: 'what-it-takes', text: 'What an agent needs to do real work' },
    {
      kind: 'p',
      text: 'Most owners have already tried an AI assistant and found it can write but can’t do. Three tools were missing, and an agent has all three:',
    },
    {
      kind: 'list',
      items: [
        '**A phone number of its own.** It texts and calls from that number in your business’s name, and it can receive replies and login codes.',
        '**An inbox of its own.** It answers from an address that is yours, receives bills and confirmations, and keeps the thread.',
        '**A browser.** It signs in to a supplier’s portal, a booking site or a form, with the logins you give it, and clicks through like a person would.',
      ],
    },
    {
      kind: 'p',
      text: 'The agent also keeps going every day. It doesn’t need you to open a chat, and it records every email, text, call and page it touched, so you can check what it did.',
    },

    { kind: 'h2', id: 'jobs', text: 'Fifteen jobs, by part of the business' },
    {
      kind: 'p',
      text: 'Each sum below is yours to run: replace the example numbers with your own from your phone bill, calendar and accounts. Monthly costs use [Obsession’s list rates](/pricing) for the number, inbox, texts, calls and browser time, plus the model’s tokens, which are small at these volumes.',
    },

    { kind: 'h3', id: 'customers', text: 'Customers: answering and reminding' },
    {
      kind: 'p',
      text: '**1. Text back every missed call.** A caller you didn’t answer often rings the next business. The agent texts them within seconds from its own number, in your business’s name: “Sorry we missed you, how can we help?”, then answers from your hours and prices and books them in. Your sum: missed calls a month, times the share who would have booked, times what a booking is worth. At 40 missed calls, 1 in 5 booking and $120 a job, that is $960 a month. Cost: 40 texts out and 40 replies is about $1.20, plus the $2 number. The [Missed call text back](/blueprints/missed-call-text-back) blueprint runs it.',
    },
    {
      kind: 'p',
      text: '**2. Answer the phone.** A voice agent picks up after hours and at busy moments, books and passes emergencies to you. It is its own topic with its own costs, in our guide to the [AI voice agent for small business](/blog/ai-voice-agent-for-small-business). Calls cost $0.012 a minute, plus $0.0676 a minute when the agent speaks in its own voice. The agent answers here, so 100 calls of 3 minutes is 300 minutes: $3.60 in call time and $20.28 for the voice, $23.88 in all. A call it only forwards to you carries just the $0.012.',
    },
    {
      kind: 'p',
      text: '**3. Answer customer emails.** Questions on hours, prices, delivery and availability arrive all day. The agent answers the ones your own list covers, from your address, and passes the rest to you with a summary. Your sum: emails a week times minutes each. 60 emails at 4 minutes is 4 hours a week. Cost: an inbox is $0.50 a month and 2,000 emails is $0.80, so about $1.30 plus model tokens. The [Inbox agent](/blueprints/inbox-agent) blueprint does this.',
    },
    {
      kind: 'p',
      text: '**4. Remind people of appointments.** The agent texts or emails each booking the day before and offers a new slot to anyone who can’t come, then fills the gap from your waitlist. Your sum: no-shows a month times what a slot earns. At 8 no-shows at $75, that is $600. Cost: 300 bookings with 2 texts each is $9. The [Appointment reminders](/blueprints/appointment-reminders) blueprint runs it.',
    },
    {
      kind: 'p',
      text: '**5. Ask for a review after the job.** After a completed job the agent texts the customer a short thanks and a link to your review page, only to people who dealt with you that day. Your sum is the reviews you gain a month, which show in the star rating people see first. Cost: 100 texts is $1.50.',
    },

    { kind: 'h3', id: 'sales', text: 'Sales: enquiries and quotes' },
    {
      kind: 'p',
      text: '**6. Call back new enquiries in minutes.** A web form or listing enquiry gets a call or text before the customer asks the next business. Your sum: enquiries a month, times the share you lose to slow replies, times a job’s value. At 50 enquiries, 1 in 10 lost to the wait and $400 a job, that is $2,000. Across a group of 240 clinics the same sum is $480,000 a month. Cost: a call of 3 minutes, spoken by the agent, is $0.24 (3 × $0.0796) and a text $0.015. The [Speed to lead callback](/blueprints/speed-to-lead-callback) blueprint runs it.',
    },
    {
      kind: 'p',
      text: '**7. Follow up quotes.** A quote with no answer is a job that may still be yours. The agent emails and texts the customer 2 days and 7 days after, answers their questions from your price list and tells you which quotes replied. Your sum: open quotes times the share a nudge wins back. 30 quotes, 1 in 6 won at $500 is $2,500. Cost: about $2 in texts and email.',
    },
    {
      kind: 'p',
      text: '**8. Answer marketplace and listing enquiries.** Landlords, agents and sellers get the same 5 questions on every listing. The agent replies in minutes on each platform’s own message thread or by email, and books viewings. Your sum: hours a week on repeat replies times your hourly value. Cost: mostly inbox and text, a few dollars a month.',
    },

    { kind: 'h3', id: 'admin', text: 'Admin and money: chasing, filing and forms' },
    {
      kind: 'p',
      text: '**9. Chase late invoices.** The agent emails a polite reminder with the payment link when an invoice is 3 days late, again at 14 and 30, and tells you who replied. Your sum: invoices overdue times the days earlier they’re paid. In the UK a business can charge [8% plus the Bank of England base rate](' + GOVUK + ') in statutory interest on a late commercial payment unless the contract sets another rate, so agree your terms and tell customers up front. Cost: 40 reminder emails a month is $0.02.',
    },
    {
      kind: 'p',
      text: '**10. Collect bills from supplier portals.** Many suppliers, utilities and software vendors make you sign in to download each invoice. The agent signs in with your logins each week, downloads the PDF and adds the vendor, amount and due date to a sheet. Your sum: portals times 5 minutes a month. 20 portals is about 1.7 hours a month. Cost: 20 portals at 3 minutes a visit, weekly, is about 4 browser-hours, which is $0.43, plus model tokens. The [Invoice collector](/blueprints/invoice-collector) blueprint runs it, and never pays a bill.',
    },
    {
      kind: 'p',
      text: '**11. Chase missing documents.** Accountants, brokers, landlords and agents wait on customers for IDs, statements and signed forms. The agent asks by text and email until each file arrives and checks it against your list. Your sum: files outstanding times the days they wait. Cost: 200 texts is $3. The [Document chaser](/blueprints/document-chaser) blueprint runs it.',
    },
    {
      kind: 'p',
      text: '**12. Fill the same form on many sites.** Quotes for insurance, utilities or supplies mean typing the same details into several sites. The agent fills each, with details you provide, and returns a table. Your sum: forms a month times 15 minutes. Cost: browser time at $0.10 an hour.',
    },

    { kind: 'h3', id: 'suppliers', text: 'Suppliers and the market: reordering and watching' },
    {
      kind: 'p',
      text: '**13. Reorder from suppliers.** When stock falls below your line, the agent emails or messages the supplier, confirms the price and delivery date and puts the order in your calendar. Your sum: stock-outs a month times a day’s sales. It stops before payment unless you give it your card. The [Supplier reorder agent](/blueprints/supplier-reorder-agent) blueprint runs it.',
    },
    {
      kind: 'p',
      text: '**14. Check supplier prices weekly.** The agent reads each supplier’s portal on Monday and flags any price that moved by more than you set. Your sum: the share of spend on suppliers that raise prices without notice. A 3% rise on $4,000 a month is $120. Cost: well under $1 in browser time.',
    },
    {
      kind: 'p',
      text: '**15. Watch competitors’ prices and offers.** The agent checks 10 competitor pages each morning, plus any offer their email list sends, and tells you what changed. Your sum: the sales a missed price cut costs you. The [Price watch](/blueprints/price-watch) blueprint runs it.',
    },

    {
      kind: 'table',
      caption: 'Examples to run your own sums against. Monthly cost is Obsession’s list rates as of 23 November 2026, before the plan fee and model tokens; saving is the example’s own sum',
      cols: ['Job', 'Example input', 'Saving a month', 'Usage cost a month'],
      rows: [
        ['1. Missed call text back', '40 missed calls, 1 in 5 books, $120 a job', '$960', 'About $3'],
        ['3. Customer emails', '60 emails a week, 4 minutes each', '4 hours a week', 'About $1.30'],
        ['4. Appointment reminders', '300 bookings, 8 no-shows, $75 a slot', '$600', '$9'],
        ['6. Enquiry callback', '50 enquiries, 1 in 10 lost, $400 a job', '$2,000', 'About $14.70'],
        ['9. Invoice reminders', '40 reminders, paid days sooner', 'Cash earlier', '$0.02'],
        ['10. Supplier invoices', '20 portals, 5 minutes each', '1.7 hours', 'About $0.43'],
      ],
    },
    {
      kind: 'p',
      text: 'In the US, the fixed cost is texting registration, not usage: $25 once and $17 a month. It counts toward your plan’s covered usage, and each business that texts needs its own campaign. Plan for it before you count the pennies a text costs, and see [10DLC registration](/blog/10dlc-registration) for the steps. A paid plan’s monthly fee covers that much usage at list rates: Free is $0 with 3 inboxes and a number that receives up to 50 texts and 30 call minutes a month but sends none, Developer $20, Startup $99 and Scale $499. An owner running jobs 1, 3, 4 and 10 uses about $14 of usage, plus the model, which sits inside the $20 plan. The same jobs across 240 clinics, each with its own number and inbox, are the same sums multiplied by 240, and an agent that is waiting costs nothing, though its number ($2) and inbox ($0.50) bill monthly. For more ideas beyond these 15, see [what AI agents can do for business](/blog/ai-agent-use-cases-for-business).',
    },

    { kind: 'h2', id: 'compared', text: 'The best AI agents for small business, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its own pages as read on 23 November 2026. Each is good at something different. A CRM’s agent works on that CRM’s data. A chat assistant works in a chat. An agent with its own number, inbox and browser works wherever the job happens.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to hand work off, from each provider’s own pages as read on 23 November 2026. Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          `HubSpot: [Starter Smart CRM](${HUBSPOT})`,
          'Contacts, deals and email in one place, with 500 HubSpot Credits included, built for owners juggling many roles',
          'From $7 a seat a month for new customers\n$20 a seat reference price',
          'Works on HubSpot’s own records; no number or browser of its own for your other jobs',
          'Owners who want one customer database',
        ],
        [
          `Salesforce: [Starter Suite](${SALESFORCE})`,
          'Sales, service and marketing tools with an included Employee Agent',
          '$25 a user a month',
          'Agent features sit inside Salesforce; outside tasks need integrations',
          'Teams already in Salesforce',
        ],
        [
          `Zapier: [Agents](${ZAPIER})`,
          'Agents that use Zapier’s app connections to act across tools you already pay for',
          'Free: 400 activities a month\nPro from about $33.33 a month billed annually: 1,500 activities',
          'Acts through app connections; a call, a text thread or a portal needs a service to carry it',
          'Linking the apps you already use',
        ],
        [
          `ChatGPT: [plans](${CHATGPT})`,
          'Drafting, research and scheduled tasks in a chat, with a free plan',
          'Free; paid plans billed per user a month',
          'Works in the chat; it doesn’t hold your phone line or inbox',
          'Writing, planning and thinking jobs',
        ],
        [
          `A virtual assistant: [BLS median pay](${BLS})`,
          'Judgement, relationships and one-off requests',
          '$23.23 an hour, US median for secretaries and administrative assistants, May 2025',
          'Working hours, one task at a time',
          'Work that needs a person',
        ],
        [
          `Ruby: [live receptionists](${RUBY})`,
          'People answering your calls in your name',
          '$250 a month for 50 minutes\n$720 for 200 minutes',
          'Calls only; priced by the minute',
          'Calls where a person matters most',
        ],
        [
          'Obsession (ours): [Phone](/phone), [Email](/email), [Browser](/browser), [blueprints](/blueprints)',
          'An agent with its own number, inbox and browser under one identity, running ready-made jobs, with every email, text, call and page in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Asks you for logins and consent, and says it is an AI',
          'Jobs that need a phone, an inbox or a login, done every day',
        ],
      ],
    },

    { kind: 'h2', id: 'virtual-assistant', text: 'Agent or virtual assistant: how to split the work' },
    {
      kind: 'p',
      text: 'An AI virtual assistant for small business and a human one do different work well. Give the agent the jobs that repeat on a schedule: reminders, reorders, chasing, filing and first replies. Keep the person for anything that needs judgement, a relationship or a sensitive conversation. At the US median of $23.23 an hour, a person spending 10 hours a month on chasing and filing costs about $232. The same jobs on an agent run on a few dollars of usage, and the person’s hours move to the work only a person does.',
    },

    { kind: 'h2', id: 'start', text: 'Which job to start with' },
    {
      kind: 'list',
      items: [
        '**Customers phone you and you miss some:** start with job 1, missed call text back. It is the fastest to set up and the sum is on your phone bill.',
        '**Customers book slots:** job 4, appointment reminders. No-shows have a price you already know.',
        '**You send quotes or invoices:** jobs 7 and 9. Money waiting on a reply is the easiest to measure.',
        '**You buy from suppliers with portals:** jobs 10 and 14. They save hours and catch price rises.',
        '**Your inbox is the bottleneck:** job 3, the inbox agent.',
      ],
    },
    {
      kind: 'p',
      text: 'Run one job for 2 weeks and check three numbers: how many people it reached, how many replied or paid, and how many it passed to you. Add the next job when the first one holds.',
    },

    { kind: 'h2', id: 'own-identity', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. The jobs above use four pieces. The **inbox** is a real address the agent owns: it sends, receives and keeps each thread. The **phone number**, US or UK, sends and receives texts, makes and takes calls and catches sign-in codes. The **browser** is a cloud browser that keeps its logins between runs, so the agent signs in once with the logins you give it. A **sandbox**, a computer started only when a task needs it, reads a spreadsheet of stock or invoices.',
    },
    {
      kind: 'p',
      text: 'A **persona** puts those pieces under one identity: one name, one address, one number, one browser profile. That matters on the jobs here. The login code a supplier’s portal texts reaches the same agent whose browser is waiting at the login page. The customer who emails and then rings reaches the same agent, with the whole history. A persona costs nothing while it waits and answers a new message in about 50 milliseconds without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page lands in one event log, dated, with the email, screenshot or recording behind it. For an owner, that is a morning summary of what went out, and proof of what a customer was told. Results can go to Slack, email, a sheet, a CRM or a PDF report.',
    },
    {
      kind: 'p',
      text: 'The usual way is a vendor for each piece: an email service, a phone and texting service, a browser service, each with its own key, bill and log. Fifteen jobs then mean several accounts to keep working, and the seams are where jobs break: the code arrives at one vendor while the browser waits at another, and the call log and the email thread live in different places. If one job needs only one piece, a single specialist can be enough. See the [side-by-side of the separate vendors against every piece on one API](/compare/agentmail-twilio-browserbase-e2b) and [the stack an AI agent runs on, piece by piece](/blog/ai-agent-infrastructure-stack).',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and starts the agent. If you or a developer would rather build, the [API, SDKs and MCP (the way AI tools connect to other software)](/developers) create a persona in one call. One agent for one clinic or one for each of 10,000 locations works the same way, each with its own identity, paid for by what it uses.',
    },
    {
      kind: 'p',
      text: 'Once an agent has its own number, inbox and browser, other jobs open up. It can text a thank you and a rebooking link to each patient the week after a visit, check the 5 sites that list your business for wrong opening hours, or collect quotes from 3 suppliers every quarter and return a table.',
    },
    {
      kind: 'cta',
      text: 'Pick the job you lose most on, and a ready-made blueprint runs it. Missed call text back starts with your last 7 days of missed calls and the text each caller would get.',
      to: '/blueprints/missed-call-text-back',
      label: 'See the blueprint',
    },
    {
      kind: 'cta',
      text: 'No blueprint for your job? Describe it in your own words and an agent is set up to run it, with no code.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },

    { kind: 'h2', id: 'rules', text: 'Rules for texting and calling customers' },
    {
      kind: 'p',
      text: 'This is general information, never legal advice. Check your own country’s rules before you start.',
    },
    {
      kind: 'list',
      items: [
        '**Text and call people who gave you their number.** A customer who rang you, booked or filled your form has done so. Don’t buy lists.',
        '**Say it’s an AI.** Tell people they’re talking to an AI assistant at the start of a call or text. The US Federal Communications Commission ruled in February 2024 that [AI-generated voices count as artificial voices](' + FCC + ') under the Telephone Consumer Protection Act, so calls to mobiles need the person’s consent first.',
        '**Register for US texting.** The Campaign Registry says [any business that texts customers from a 10-digit number must register](' + TCR + '). Your provider files it, and it takes up to a few weeks.',
        '**Keep marketing separate from service messages.** In the UK the ICO says you [must not send marketing emails or texts without specific consent](' + ICO + '), with a limited exception for existing customers who got a clear opt-out. A reminder for a booking is a service message. A promotion is marketing.',
        '**Always give a way out.** Every text should say how to stop, and a stop must end the messages.',
        '**Use only your own logins.** The agent signs in with logins you give it, works within a monthly spend limit you set on its key, and stops before payment unless you give it your card.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI agents for small business owners' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What can an AI agent do for a small business?',
          a: 'It does the jobs that need a phone line, an inbox or a login: texting back missed calls, answering customer emails, reminding people of appointments, following up quotes, chasing late invoices, collecting bills from supplier portals and checking supplier prices. Each can be sized with your own phone bill, calendar and accounts.',
        },
        {
          q: 'What is the best AI agent for a small business?',
          a: 'It depends on the job. A CRM such as HubSpot or Salesforce suits customer records. Zapier Agents suits linking apps you already use. ChatGPT suits writing and planning. A live receptionist such as Ruby suits calls where a person matters. An agent with its own number, inbox and browser suits jobs that happen on the phone, in an inbox or behind a login.',
        },
        {
          q: 'How much does an AI agent cost for a small business?',
          a: 'Listed plans on 23 November 2026 ran from free (Zapier, ChatGPT) to $20 to $25 a seat a month (HubSpot reference, Salesforce Starter Suite). On Obsession, a Free plan has 3 inboxes, paid plans start at $20 a month, and the usage inside a job such as missed call text back runs a few dollars a month at list rates.',
        },
        {
          q: 'What is the difference between an AI assistant and an AI agent for a small business?',
          a: 'An assistant such as ChatGPT drafts and answers inside a chat when you ask. An agent has its own phone number, inbox and browser, so it sends the text, answers the email and signs in to the portal without you opening anything, then reports what it did.',
        },
        {
          q: 'Is an AI virtual assistant cheaper than a human one?',
          a: 'For repeating jobs, usually. The US median pay for secretaries and administrative assistants was $23.23 an hour in May 2025, so 10 hours a month is about $232. The same reminders, chasing and filing on an agent cost a few dollars of usage. Keep a person for judgement and relationships.',
        },
        {
          q: 'Do I need to say customers are talking to an AI?',
          a: 'It is the safe rule and often the law. The FCC treats AI-generated voices as artificial voices under the TCPA, and Obsession’s agents say they are an AI to anyone they speak to. Check your own country’s rules.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'Which job should I start with?',
          a: 'Start with the one where you lose the most and can see it: missed calls from your phone bill, no-shows from your calendar or late invoices from your accounts. Run it for 2 weeks, check how many people it reached, how many replied or paid and how many it passed to you, then add a second job.',
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
      text: 'Prices are as each provider listed them on 23 November 2026 in US dollars, and change; check each page. Every input and saving in the sums is an example. Brightwell Physio in the picture is invented. The rules are general information from the US and UK, never legal advice.',
    },
  ],

  sources: [
    { title: 'Smart CRM pricing', publisher: 'HubSpot', url: HUBSPOT, date: '2026-11-23' },
    { title: 'Pricing, including Zapier Agents', publisher: 'Zapier', url: ZAPIER, date: '2026-11-23' },
    { title: 'Small business pricing', publisher: 'Salesforce', url: SALESFORCE, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Ruby', url: RUBY, date: '2026-11-23' },
    { title: 'Plans and pricing', publisher: 'ChatGPT', url: CHATGPT, date: '2026-11-23' },
    { title: 'Secretaries and administrative assistants: Occupational Outlook Handbook', publisher: 'U.S. Bureau of Labor Statistics', url: BLS, date: '2025-05' },
    { title: 'Charging interest on a commercial debt', publisher: 'GOV.UK', url: GOVUK, date: '2026-11-23' },
    { title: 'Electronic mail marketing', publisher: 'Information Commissioner’s Office', url: ICO, date: '2026-11-23' },
    {
      title: 'Declaratory Ruling on AI technologies and robocalls (FCC 24-17)',
      publisher: 'Federal Communications Commission',
      url: FCC,
      date: '2024-02-08',
    },
    { title: 'The Campaign Registry and 10DLC', publisher: 'The Campaign Registry', url: TCR, date: '2026' },
  ],

  related: ['/use-cases/ai-agent-for-home-services', '/use-cases/ai-agent-for-hotels', '/no-code', 'recipe:missed-call-text-back', 'recipe:invoice-collector', 'ai-voice-agent-for-small-business', 'can-ai-make-phone-calls'],
}

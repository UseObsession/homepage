import type { BlogPost } from './types'

/* Industry guide (_research/seo/agent-search-23nov/PLAN.md, week 2; Seun's "Yes, run the plan", 23 Nov 2026): an AI agent
   for healthcare. Primary "ai agent for healthcare". /use-cases/ai-agent-for-dental-practices owns dental and
   /use-cases/prior-authorization-ai-agent owns prior authorization AI; this guide links both and competes with neither.
   Sources read on 23 Nov 2026: the AMA's 2025 prior authorization survey press release (13 May 2026), the AJMC report on
   the CAQH 2025 Index (1 May 2026), Retell AI, Goodcall and Weave pricing pages. HHS's HIPAA and cloud computing page
   and the ICO's special category data page are linked as the regulators' own text; the HHS page refused an automated
   read on 23 Nov, so the guide states only its well-known rule that a cloud provider holding patient data for a covered
   entity is a business associate. Hyro and Assort Health show no public price in the pages and listings we could read.
   Obsession is never said to be HIPAA compliant or to sign a business associate agreement: no page on the site says so.
   The cost sums use src/lib/pricing/pricing.json list rates read 23 Nov (calls $0.012 a minute, texts $0.015, number $2,
   inbox $0.50, browser $0.10 an hour, US texting registration $25 once and $17 a month per campaign) and are labelled
   example inputs. Marlow Family Clinic at marlow-clinic.example is invented. British English, no dashes. */

const AMA = 'https://www.ama-assn.org/press-center/ama-press-releases/ama-survey-prior-authorization-reform-pledge-falls-short-physicians'
const CAQH = 'https://www.ajmc.com/view/caqh-index-finds-20-billion-in-cost-savings-opportunities'
const HHS = 'https://www.hhs.gov/hipaa/for-professionals/special-topics/cloud-computing/index.html'
const ICO = 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/special-category-data/what-is-special-category-data'
const RETELL = 'https://www.retellai.com/pricing'
const GOODCALL = 'https://www.goodcall.com/pricing'
const WEAVE = 'https://www.getweave.com/pricing/'
const HYRO = 'https://www.hyro.ai/'
const ASSORT = 'https://www.assorthealth.com/'

export const post: BlogPost = {
  slug: 'ai-agent-for-healthcare',
  title: 'AI agent for healthcare: the front desk and the payer portals',
  dek: 'Practices use agents for the admin that fills a front desk and billing office: calls, bookings, reminders, forms and status checks in payer portals. Never clinical work. Here is what each job needs, what it costs for one clinic and for 40, and the questions to ask before patient data flows.',
  metaTitle: 'AI agent for healthcare: front desk and payer portal work',
  description:
    'An AI agent for healthcare takes the admin: calls, bookings, reminders and payer portal checks, never clinical work. Jobs, costs and data questions.',
  answer:
    'An AI agent for healthcare takes administrative work in clinics and practices: answering calls and texts, booking and reminding, chasing forms and checking prior authorization and claim status in payer portals with the logins the practice gives it. It never gives medical advice, and it says it is an AI. Before patient data flows, ask any vendor in writing whether it will sign a business associate agreement under HIPAA in the US, or meet UK GDPR in the UK.',
  primaryKeyword: 'ai agent for healthcare',
  keywords: [
    'ai phone agent for healthcare',
    'ai voice agent for healthcare',
    'best ai agent for healthcare',
    'ai agent for healthcare admin',
    'ai agent for medical practices',
  ],
  category: 'Work behind logins',
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
      title: 'marlow-clinic.example · one morning',
      who: 'The front desk agent, its own number, inbox and browser',
      rows: [
        { time: '06:55', text: 'Texted back 4 calls missed overnight', detail: 'Each caller was offered the next free slot', tone: 'ok' },
        { time: '07:10', text: 'Booked every caller who replied', detail: 'Confirmation text sent from the same number', tone: 'ok' },
        { time: '07:30', text: 'Signed in to a payer portal', detail: 'Login code read from its own inbox', tone: 'ok' },
        { time: '07:34', text: 'Read 11 pending prior authorizations', detail: '2 changed overnight, 1 sent back for information', tone: 'late' },
        { time: '08:05', text: 'Emailed a patient the missing intake form', detail: 'Reminder set for 48 hours', tone: 'info' },
        { time: '08:30', text: 'Posted the day’s list to the practice manager', detail: 'Screenshots and call recordings attached', tone: 'ok' },
      ],
      foot: 'Example: Marlow Family Clinic, its patients and every time here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI agent for healthcare does the administrative work around care: it answers the phone and texts, books and reminds, chases forms and checks the status of prior authorizations and claims. It does not diagnose, triage symptoms or give medical advice, and it tells every caller it is an AI. The work is in the front desk and the billing office, where most of a practice’s hours go before a patient is seen.',
    },

    { kind: 'h2', id: 'admin-burden', text: 'The admin an agent can take, and what it costs a practice' },
    {
      kind: 'p',
      text: 'The clearest public measure of the burden is prior authorization, the insurer’s approval a practice must get before some treatments. The American Medical Association’s 2025 physician survey, published on 13 May 2026, asked 1,000 practising physicians. [They reported 40 prior authorizations a week per physician, taking 13 hours of physician and staff time](' + AMA + '). Two in five (40%) employ staff who do only prior authorization work, and 32% say requests are often or always denied.',
    },
    {
      kind: 'stat',
      value: '13 hours',
      label: 'a week of physician and staff time on prior authorization, for 40 requests per physician',
      source: 'American Medical Association, 2025 Prior Authorization Physician Survey, published 13 May 2026',
      href: AMA,
    },
    {
      kind: 'p',
      text: 'The cost sits in the process as well as the people. The CAQH Index, the industry’s yearly measure of administrative transactions, [found electronic prior authorization at 40% adoption in its 2025 edition, up from 31% in 2023](' + CAQH + '). The same report puts the saving available from moving more of this work to automated workflows at more than $20 billion a year across medical and dental. That leaves most practices checking some payers’ portals by hand, one login and one request at a time.',
    },
    {
      kind: 'p',
      text: 'Count these in your own practice this week. Calls that rang out. Minutes to answer an enquiry. No-show rate. Days a prior authorization waits. Claims past their expected payment date. Hours your team spends on status checks.',
    },

    { kind: 'h2', id: 'jobs', text: 'Six jobs an agent can take, and where it stops' },
    {
      kind: 'list',
      items: [
        '**Answer calls and texts.** It picks up after hours and at overflow, answers from your own hours, services and policies, takes a message and passes urgent calls to a person you name. For symptoms or anything urgent, it says to call the emergency number or the practice and hands over at once.',
        '**Book, change and cancel.** With your booking system connected, it offers real slots and writes the booking in. A [missed call text back](/blueprints/missed-call-text-back) turns a call that rang out into a booking.',
        '**Remind.** [Appointment reminders](/blueprints/appointment-reminders) by text and email, with a reply reaching the same agent, cut no-shows and tell the schedule early who needs rebooking.',
        '**Chase forms and documents.** It texts and emails the patient the intake form, the referral letter or the insurance card photo, and keeps asking until it arrives.',
        '**Check prior authorization and claim status.** With the logins your practice gives it, it signs in to each payer portal, reads every pending request and sends what changed to your work queue. [Prior authorization status](/blueprints/prior-authorization-status) does this every morning before clinics open, and the [prior authorization AI agent](/use-cases/prior-authorization-ai-agent) page covers the job in full.',
        '**Report.** One morning list for the practice manager, with the call recording, the text or the screenshot behind each line.',
      ],
    },
    {
      kind: 'p',
      text: 'Where it stops matters more than what it does. It never gives medical advice or clinical judgement, and filing appeals, denials and treatment decisions stay with your team. It signs in only with logins you provide, stops at any identity check, and never gets round a CAPTCHA or a bot block. It texts and calls only people who gave your practice their number. Dental practices have their own version of this day, covered in [AI agent for dental practices](/use-cases/ai-agent-for-dental-practices). The same agent can also [sign in to websites](/blog/can-ai-agents-log-in-to-websites) your team uses.',
    },

    { kind: 'h2', id: 'patient-data', text: 'Patient data: what to ask any vendor first' },
    {
      kind: 'p',
      text: 'This is general information, not legal advice. In the US, HIPAA applies to a practice as a covered entity and to the vendors that handle patient information for it. HHS’s guidance on [HIPAA and cloud computing](' + HHS + ') says a cloud provider that stores or processes protected health information for a practice is a business associate, and that a business associate agreement (BAA), the contract that sets out how the vendor protects that information, should be in place before the service is used. In the UK, health data is special category data under UK GDPR, and the ICO’s page on [special category data](' + ICO + ') sets the extra conditions for using it.',
    },
    {
      kind: 'p',
      text: 'A call recording, a text, a booking and a portal screenshot can all hold patient details. Put these questions to every vendor, a human service and an AI one alike, before any patient data flows:',
    },
    {
      kind: 'list',
      items: [
        'Will you sign a business associate agreement (US), or a data processing agreement (UK), before we start? Ask for it in writing.',
        'Where are recordings, transcripts and screenshots stored, for how long, and who can read them?',
        'Is any patient data used to train a model, yours or a third party’s?',
        'Which sub-processors, such as speech and AI model providers, touch the data, and are they covered by the same agreement?',
        'Can we delete a recording or a patient’s record on request?',
      ],
    },
    {
      kind: 'p',
      text: 'If a vendor’s page says it is HIPAA compliant, ask what that covers. No regulator certifies a product as compliant: the duty sits with the practice and its vendors, and the answer you can rely on is the signed agreement. A practice can also start with jobs that carry little patient data, such as an after-hours message that says “we’ll call you back”, while the agreement is settled.',
    },

    { kind: 'h2', id: 'costs', text: 'What it costs at one clinic and at 40 locations' },
    {
      kind: 'p',
      text: 'An agent costs what it uses, at list rates. The inputs are examples; put in your own call counts. Model usage, the AI’s own tokens, is charged on top at $0.975 per million input tokens on the default model.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: 1,200 calls a month of about 3 minutes, 1,500 reminder and booking texts, 22 hours of portal checks; the 40-location column is one business with one texting campaign. Obsession list rates, 23 November 2026',
      cols: ['Piece', 'Sum', 'One clinic a month', '40 locations a month'],
      rows: [
        ['Calls with the agent’s own voice', '3,600 minutes × $0.0796 ($0.012 call minute + $0.0676 voice)', '$286.56', '$11,462.40'],
        ['Texts', '1,500 × $0.015', '$22.50', '$900.00'],
        ['Phone number and inbox', '$2 + $0.50', '$2.50', '$100.00'],
        ['Browser for portal checks', '22 hours × $0.10', '$2.20', '$88.00'],
        ['US texting registration', 'One campaign at $17 a month; 40 locations under one business', '$17.00', '$17.00'],
        ['Total at list rates', 'Before model usage', '$330.76', '$12,567.40'],
      ],
    },
    {
      kind: 'p',
      text: 'A group of 40 locations texting under one business registers one campaign, $25 once and $17 a month; separate businesses register one each, which would make the registration line $680 a month and $1,000 once. [10DLC registration](/blog/10dlc-registration) explains the steps. Registration counts toward what a plan covers. The one-clinic total fits inside the Scale plan, $499 a month, whose fee covers that much usage at list rates. A group of 40 is the Enterprise conversation, from $1,500 a month.',
    },
    {
      kind: 'p',
      text: 'Set that beside what the work costs you today: the hours your team spends on calls, reminders and portal checks, at your own payroll cost, and the revenue in the appointments that rang out. The AMA’s 13 hours a week is a physician and staff total for prior authorization alone.',
    },

    { kind: 'h2', id: 'compared', text: 'The options for healthcare admin, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to take healthcare admin work, from each provider’s own pages, as listed on 23 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          '[Hyro](' + HYRO + ') and [Assort Health](' + ASSORT + '): healthcare front-desk AI',
          'Front-desk AI built for healthcare: answering calls and booking; check each vendor’s site for what it covers',
          'No price found in the pages and listings we could read',
          'Ask each for a quote and for the business associate agreement in writing',
          'Groups that want a healthcare-specific vendor',
        ],
        [
          '[Retell AI](' + RETELL + '): voice agent builder',
          'The parts to build a voice agent; its comparison table lists HIPAA and BAA terms',
          '$0.07 to $0.31 a minute for pay-as-you-go\nEnterprise: custom',
          'You or a developer build and test the agent; the HIPAA and BAA terms are listed in its comparison table, so confirm what each plan includes',
          'Teams with a developer who want to build their own',
        ],
        [
          '[Goodcall](' + GOODCALL + '): AI answering service',
          'A finished agent for calls, priced by unique customer',
          'Starter $79, Growth $129, Scale $299 a month\nEnterprise: custom',
          'The page mentions no HIPAA or healthcare terms',
          'Small practices wanting overflow answered quickly',
        ],
        [
          '[Weave](' + WEAVE + '): practice phone and messaging platform',
          'Phones, two-way texting, missed-call texting, appointment reminders and call analytics in one product',
          'From $199 a month (the page does not say which plan); higher plans quote-based',
          'The page lists no AI receptionist and no portal checks',
          'Practices replacing their phone system and patient texting together',
        ],
        [
          'A person: a front desk or billing team member',
          'Judgement on every case and a human voice for sensitive calls',
          'Your payroll cost for each hour',
          'Hours rise with each call, portal and location, and nobody answers at 03:00',
          'Calls that need care, and every clinical question',
        ],
        [
          'Obsession (ours): [Prior authorization status](/blueprints/prior-authorization-status), [Missed call text back](/blueprints/missed-call-text-back) and [Appointment reminders](/blueprints/appointment-reminders)',
          'A phone number, inbox and browser for each agent, running the calls, texts and portal checks, with every step in one log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Stops at any identity check, never gives medical advice, and runs patient jobs only once a business associate agreement is in place',
          'Front desk and portal work, for one clinic or every location in a group',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'A healthcare-specific front-desk product fits a group that wants a vendor built for patient access. A builder fits a team with a developer. A practice platform such as Weave fits a practice replacing its phone system. A person stays for the calls that need care. The portal checks are the gap many of these leave open, because a payer portal needs a login, a code sent to a phone and a browser that stays signed in.',
    },

    { kind: 'h2', id: 'on-obsession', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. A front desk job and a portal job use different pieces, and one identity ties them together. The phone number is a US or UK number: it sends and receives texts, makes and takes calls and receives sign-in codes, and texts go out from the agent’s own number in your practice’s name. The inbox is a real email address the agent owns: it sends, receives and keeps each thread, and calls your webhook, a message to your own system, on every new email.',
    },
    {
      kind: 'p',
      text: 'The browser is a cloud browser whose sessions keep their logins between runs, so the agent signs in to a payer portal once with the logins you give it and stays signed in. A sandbox, a computer started only when a task needs to run code, is there if the job needs to read a spreadsheet of pending requests.',
    },
    {
      kind: 'h3',
      id: 'one-identity',
      text: 'Why the pieces belong to one identity',
    },
    {
      kind: 'p',
      text: 'A persona gives the agent one name, one email address, one phone number and one browser. The sign-in code a payer portal texts goes to the same agent that is waiting at the login page. A patient who texts and then calls reaches the same agent, with the whole history. While it waits it costs nothing, except its number ($2) and inbox ($0.50) each month, and it answers a new message almost at once. At 40 locations each clinic has its own agent and number.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent touches lands in one event log, dated, with the email, screenshot or recording behind it. For a practice manager that is the morning summary. For an appeal it is a dated screenshot of the status page, and for a complaint it is the call recording. Results reach Slack, email, a CRM, a sheet, Clay, a PDF report or a Claude agent.',
    },
    {
      kind: 'h3',
      id: 'one-platform',
      text: 'The case for one platform',
    },
    {
      kind: 'p',
      text: 'The usual way is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That is four integrations to keep working, and the seams are where a job breaks: the code arrives at one vendor while the browser waits at another, and the call log and the email thread sit in different places. For a regulated job that also means four places to answer for. If your job needs one piece, a single specialist can be enough. The side-by-side of [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) holds each vendor’s prices, dated.',
    },
    {
      kind: 'h3',
      id: 'two-ways',
      text: 'Run it with no code or with the API',
    },
    {
      kind: 'p',
      text: 'With no code, pick a blueprint, or describe the job in your own words and Obsession sets it up and spins up the agent, for one clinic or every location in a group. The prior authorization blueprint’s page says it runs only once a business associate agreement is in place; settle that with the team before patient data flows. Developers use the API, the SDKs or MCP, the standard way AI agents call tools, for example obsession.personas.create({ inbox: true, phone: "US", browser: true }).',
    },
    {
      kind: 'p',
      text: 'Once an agent has its own number, inbox and browser, the same persona can also check supplier prices for the clinic’s consumables each week, chase unpaid patient balances by text and email, or watch a referral partner’s inbox and book each referral the day it arrives.',
    },
    {
      kind: 'cta',
      text: 'Read every pending prior authorization in your payer portals each morning and send what changed to your work queue.',
      to: '/blueprints/prior-authorization-status',
      label: 'See the blueprint',
    },
    {
      kind: 'cta',
      text: 'Pick a ready-made job for your front desk, or describe your own.',
      to: '/no-code',
      label: 'Pick a blueprint',
    },

    { kind: 'h2', id: 'goes-wrong', text: 'What goes wrong, and how to catch it' },
    {
      kind: 'list',
      items: [
        '**Clinical questions.** Decide the line in writing: the agent never answers symptoms, medication or results, and hands over or points to the emergency number. Test it by asking.',
        '**Wrong slots or services.** It can only book what your system shows. Read 10 bookings a week against the schedule.',
        '**A portal changes.** A redesign or a new security step stops a sign-in. Check the morning list shows every payer, and that any portal handed back for an identity check is picked up the same day.',
        '**Unanswered texts.** A reply that needs a person should reach one within minutes. Test it with a message out of hours.',
        '**Data kept too long.** Set how long recordings and screenshots are kept, and who can open them.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI agents for healthcare' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What can an AI agent do in a medical practice?',
          a: 'It takes administrative work: answering calls and texts, booking, changing and cancelling appointments, sending reminders, chasing forms and documents, and checking prior authorization and claim status in payer portals with the logins the practice gives it. It never gives medical advice and says it is an AI.',
        },
        {
          q: 'Can an AI phone agent replace a receptionist?',
          a: 'It can answer overflow and after-hours calls and take the routine ones, such as hours, bookings and reminders. A person is still the right voice for sensitive or complex calls and for every clinical question. Most practices start with after-hours and missed calls and move more across as the bookings check out.',
        },
        {
          q: 'Is an AI agent HIPAA compliant?',
          a: 'No regulator certifies a product as compliant. HIPAA puts duties on the practice and on any vendor that handles patient information for it, and HHS’s cloud guidance says such a vendor is a business associate that should sign a business associate agreement first. Ask any vendor for it in writing before patient data flows. This is general information, not legal advice.',
          link: { label: 'HHS: HIPAA and cloud computing', to: HHS },
        },
        {
          q: 'What about UK GDPR for a UK practice?',
          a: 'Health data is special category data under UK GDPR, which needs a lawful basis and an extra condition, and a vendor handling it for you needs a data processing agreement. Ask what is stored, where, for how long and which sub-processors touch it. The ICO’s guidance sets out the conditions. This is general information, not legal advice.',
          link: { label: 'ICO: special category data', to: ICO },
        },
        {
          q: 'How does an AI agent check prior authorization status?',
          a: 'It signs in to each payer portal with a login your practice owns, reads every pending request and records the status with a dated screenshot. The sign-in code reaches the agent’s own inbox or number, and it stops at any identity check and hands that portal back to your team. It reads and reports; filing and appeals stay with your team.',
          link: { label: 'Prior authorization status', to: '/blueprints/prior-authorization-status' },
        },
        {
          q: 'How much does an AI agent cost for a clinic?',
          a: 'At Obsession’s list rates on 23 November 2026, an example clinic with 1,200 calls of about 3 minutes, 1,500 texts and 22 hours of portal checks comes to about $330.76 a month before model usage, which the Scale plan at $499 a month covers. 40 locations under one business at the same inputs come to about $12,567 a month. Other providers listed $0.07 to $0.31 a minute, $79 to $299 a month, or quote on request.',
        },
        {
          q: 'Does the agent have to say it is an AI?',
          a: 'Yes. Every Obsession agent says it is an AI to anyone it speaks to, and texts and calls only people who gave the practice their number. Rules on recording calls and on AI disclosure differ by state and country, so check yours.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'What is the best AI agent for healthcare?',
          a: 'It depends on the job and the size. A healthcare front-desk product suits a health system that wants one vendor for patient access, a builder suits a team with a developer, and a practice platform suits a practice replacing its phone system. For work that needs a phone number, an inbox and a browser, such as portal checks, an agent with all three suits a clinic or a group of 40.',
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices and the law',
      text: 'Every provider price is as that provider listed it on 23 November 2026, in US dollars, and prices change; check each page before you buy. Hyro and Assort Health show no price in the pages and listings we could read. Obsession’s sums use its list rates and example inputs. HIPAA and UK GDPR are described as general information, never as legal advice. Marlow Family Clinic in the picture is an example.',
    },
    {
      kind: 'cta',
      text: 'Give a front desk agent its own number, inbox and browser, on one bill. Start free to receive calls and texts; sending starts on a paid plan from $20 a month.',
      to: '/blueprints/talk-to-customers#join',
      label: 'Start free',
    },
  ],

  sources: [
    { title: 'AMA survey: Prior authorization reform pledge falls short with physicians', publisher: 'American Medical Association', url: AMA, date: '2026-05-13' },
    { title: 'CAQH Index finds more than $20 billion in cost savings opportunities', publisher: 'AJMC, reporting the CAQH 2025 Index', url: CAQH, date: '2026-05-01' },
    { title: 'Guidance on HIPAA and cloud computing', publisher: 'U.S. Department of Health and Human Services', url: HHS },
    { title: 'What is special category data?', publisher: 'Information Commissioner’s Office', url: ICO },
    { title: 'Pricing', publisher: 'Retell AI', url: RETELL, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Goodcall', url: GOODCALL, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Weave', url: WEAVE, date: '2026-11-23' },
    { title: 'Hyro', publisher: 'Hyro', url: HYRO, date: '2026-11-23' },
    { title: 'Assort Health', publisher: 'Assort Health', url: ASSORT, date: '2026-11-23' },
  ],

  related: ['/no-code', '10dlc-registration', 'can-ai-agents-log-in-to-websites', 'recipe:prior-authorization-status', 'recipe:appointment-reminders', 'recipe:missed-call-text-back', 'ai-voice-agent-for-small-business', 'can-ai-make-phone-calls'],
}

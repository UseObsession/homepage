import type { BlogPost } from './types'

/* Track 2 guide 7 (_research/seo/agent-search-23nov/PLAN.md; Seun's "Yes, run the plan", 23 Nov 2026): AI for
   scheduling appointments. Primary "ai for scheduling appointments"; secondaries from Google autocomplete: ai agent to
   book appointments, ai agent for scheduling appointments, ai tools for scheduling appointments. /use-cases/ai-receptionist
   keeps "ai receptionist"; /blog/can-ai-make-phone-calls keeps the calling law; /blog/10dlc-registration keeps
   registration. Read on 23 Nov 2026: Acuity Scheduling, Calendly and Square Appointments pricing pages; the Cochrane
   review of text reminders (published 5 December 2013); 47 CFR 64.1200 (Cornell LII); CTIA Messaging Principles (May 2023);
   FCC 24-17 and Goodcall's pricing as read 22 Nov 2026 for the sibling voice guide. The NHS England missed-appointment
   cost page would not load, so no NHS figure is used. The two usage sums are worked from src/lib/pricing/pricing.json
   list rates and their inputs are labelled examples; model tokens are billed apart and are not in the sums. Brightside
   Dental at brightside.example is invented. British English, no dashes. */

const ACUITY = 'https://acuityscheduling.com/pricing'
const CALENDLY = 'https://calendly.com/pricing'
const SQUARE = 'https://squareup.com/us/en/appointments/pricing'
const GOODCALL = 'https://www.goodcall.com/pricing'
const COCHRANE = 'https://www.cochrane.org/evidence/CD007458_mobile-phone-text-message-reminders-improve-attendance-healthcare-appointments'
const CFR = 'https://www.law.cornell.edu/cfr/text/47/64.1200'
const CTIA = 'https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf'
const FCC_24_17 = 'https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf'

export const post: BlogPost = {
  slug: 'ai-for-scheduling-appointments',
  title: 'AI for scheduling appointments: answer, book and remind',
  dek: 'An AI agent can take the three jobs that fill a diary: answering the request, booking the slot and getting the person to turn up. Here is how each works with the booking tool you already use, what it costs at 300 bookings a month and at 40 locations, and the consent rules for reminders.',
  metaTitle: 'AI for scheduling appointments: answer, book and remind',
  description:
    'AI for scheduling appointments answers the request, books the slot in your calendar, then reminds and rebooks no-shows. Costs, tools and consent rules.',
  answer:
    'AI for scheduling appointments does three jobs: it answers the request by call, text or email, books a slot in your booking tool, and reminds the person and rebooks them if they miss it. A Cochrane review found text reminders lifted attendance from 67.8% to 78.6%. At list rates, an agent doing all three costs about $134 a month in usage for 300 bookings.',
  primaryKeyword: 'ai for scheduling appointments',
  keywords: ['ai agent to book appointments', 'ai agent for scheduling appointments', 'ai tools for scheduling appointments'],
  category: 'Talk to customers',
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
      title: 'brightside.example · one new patient',
      who: 'The scheduling agent on Brightside Dental’s number',
      rows: [
        { time: '21:12', text: 'Text received: “Any slots for a check-up?”', detail: 'From a number that has never booked before', tone: 'info' },
        { time: '21:12', text: 'Replied in 4 seconds with 3 slots', detail: 'Read from the booking tool’s open times', tone: 'ok' },
        { time: '21:14', text: 'Booked Thursday 09:30', detail: 'Written into the booking tool and the shared calendar', tone: 'ok' },
        { time: 'Wed 10:00', text: 'Reminder text sent', detail: 'Says it’s an AI assistant; reply C to confirm, M to move', tone: 'ok' },
        { time: 'Wed 16:00', text: 'No reply, so the agent called', detail: 'Only because they agreed to calls when they booked', tone: 'late' },
        { time: 'Wed 16:02', text: 'Confirmed on the call', detail: 'Recording and transcript attached', tone: 'ok' },
      ],
      foot: 'Example: Brightside Dental, its patient and every time here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'AI for scheduling appointments means an AI agent does the three jobs that keep a diary full: it answers the request, books the slot and gets the person to turn up. It can answer by call, text or email, write the booking into the calendar you already use, and send the reminder, then offer a new time to anyone who misses. Dental and physio practices, salons, garages, clinics and home-service firms use it. It runs from one owner to a group with dozens of locations.',
    },

    { kind: 'h2', id: 'three-jobs', text: 'The three jobs an agent can take' },
    {
      kind: 'p',
      text: 'Scheduling looks like one task. It is three, and each needs something different from the agent. You can hand over one, two or all three.',
    },
    {
      kind: 'list',
      items: [
        '**Answer the request.** A person calls, texts or emails to ask for a time. The agent needs an inbox, a phone number and a voice or text reply, and it must know your services, hours and rules. Success looks like the request answered in seconds, at any hour, in the channel the person used.',
        '**Book the slot.** The agent reads your open times and writes the booking in. It needs a connection to your booking tool, either through the tool’s own integration or by signing in to its web page with a login you provide. Success looks like a booking in your tool, with the person’s name, number and service, and no double booking.',
        '**Remind and rebook.** The agent texts the day before, calls anyone who hasn’t confirmed and offers every no-show a new time. Success looks like a lower no-show rate and a diary refilled the same week.',
      ],
    },
    {
      kind: 'p',
      text: 'The first job is the one most people mean by an AI receptionist, and [AI receptionist](/use-cases/ai-receptionist) covers it in depth. The loop here runs from the first message to the person in the chair.',
    },

    { kind: 'h2', id: 'what-it-costs-you', text: 'What no-shows and missed requests cost' },
    {
      kind: 'p',
      text: `A Cochrane review pooled eight trials with 6,615 participants. [Attendance was 67.8% with no reminder and 78.6% with a text message reminder](${COCHRANE}), about 1 in 3 missed against 1 in 5. The review was published on 5 December 2013 and covers healthcare appointments, so treat it as a guide for other trades and test your own.`,
    },
    {
      kind: 'stat',
      value: '67.8% to 78.6%',
      label: 'Attendance without a reminder against with a text message reminder, eight trials of healthcare appointments',
      source: 'Cochrane review, published 5 December 2013',
      href: COCHRANE,
    },
    {
      kind: 'p',
      text: 'The value is your own sum: bookings, times the no-show gap, times what an appointment is worth. The table uses the review’s two attendance rates and an example value of $120 an appointment. Put in your own.',
    },
    {
      kind: 'table',
      caption: 'Example inputs: attendance 67.8% without a text reminder, 78.6% with one, and $120 an appointment. Put in your own numbers',
      cols: ['Bookings a month', 'Missed without reminders', 'Missed with text reminders', 'Fewer misses', 'Worth a month'],
      rows: [
        ['12,000, across 40 locations', '3,864', '2,568', '1,296', '$155,520'],
        ['300, one practice', '97', '64', 'About 32', 'About $3,840'],
      ],
    },
    {
      kind: 'p',
      text: 'A missed request is the other loss. A caller who reaches voicemail often rings the next business. Your phone log shows how many calls went unanswered last month; multiply by the share who would have booked and the value of a booking, as in [the AI voice agent guide for small business](/blog/ai-voice-agent-for-small-business).',
    },

    { kind: 'h2', id: 'answering', text: 'Job 1: answering the request by call, text or email' },
    {
      kind: 'p',
      text: 'The agent replies in the channel the person used, so a text gets a text and a call gets a spoken answer. It answers from facts you give it: services, durations, hours, prices from your list and which staff do what. For anything off the list, it takes a message and tells you.',
    },
    {
      kind: 'list',
      items: [
        '**Calls.** Forward your existing number to the agent’s after hours, when the line is busy or after a few rings, or give it a new local number. It says it’s an AI assistant at the start.',
        '**Texts.** A person who texts the number gets a reply from that same number, in your business’s name. Anyone who texts first has started the conversation.',
        '**Email.** The agent reads the enquiry in its own inbox, replies from that address and keeps the thread.',
      ],
    },
    {
      kind: 'p',
      text: 'Give it rules a new receptionist could follow: which slots it may offer, when to book and when to hand over, and what counts as urgent. Urgent cases, such as pain or a leak, go to a person at once.',
    },

    { kind: 'h2', id: 'booking', text: 'Job 2: booking into the tool you already use' },
    {
      kind: 'p',
      text: 'You don’t need to move to a new booking system. The agent can write into the one you have, in one of two ways. Where the tool has an integration or API, the agent connects to it. Where it doesn’t, the agent signs in to the tool’s web page in a browser, with a login you provide, and books the way a person would. Each tool’s own page shows what it offers, as read on 23 November 2026:',
    },
    {
      kind: 'list',
      items: [
        `**Acuity Scheduling.** [Plans](${ACUITY}) are Starter at $16 a month billed annually ($20 monthly), Standard at $27 ($34) and Premium at $55 ($69). Text reminders start on Standard, which allows up to 6 calendars. Custom API access is listed on Premium, so on lower plans an agent books through the web page.`,
        `**Calendly.** [Standard is $10 a seat a month and Teams $16](${CALENDLY}), or 17% and 20% less billed yearly, with automated meeting reminders from Standard. It suits one-to-one meetings more than a diary of treatments.`,
        `**Square Appointments.** [Free is $0 a location a month](${SQUARE}) with online booking, reminders and unlimited staff calendars. Plus is $49 and adds a cancellation policy and no-show fees. Premium is $149. Card fees are extra.`,
      ],
    },
    {
      kind: 'p',
      text: 'A built-in reminder is the simplest start. The agent adds what the tool’s reminder can’t do: it replies when someone answers “can we do Friday instead?”, calls the quiet ones, and offers a no-show a new time. Square’s no-show fee and a reminder work together; a fee is a policy decision for you, and the agent can quote it.',
    },

    { kind: 'h2', id: 'remind', text: 'Job 3: reminding and rebooking no-shows' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Day before, by text.** The reminder carries the time, the place and a one-word reply: C to confirm, M to move. It says it’s an AI assistant and how to stop.',
        '**Hours before, by email or text.** A second nudge to anyone who hasn’t answered.',
        '**A call to the quiet ones**, only if they agreed to calls when they booked.',
        '**A reply moves the booking.** “M” starts a short exchange that ends with the old slot freed and the new one written into your tool.',
        '**A no-show gets a new time.** A text goes out the same day offering the next open slots.',
      ],
    },
    {
      kind: 'p',
      text: 'Keep reminders to the facts. A reminder that carries an offer or a promotion is a marketing message, and marketing messages need stronger consent, as the next section explains. The numbers to watch each week are confirmed, moved, no-show and rebooked.',
    },

    { kind: 'h2', id: 'consent', text: 'Consent for reminder texts and calls' },
    {
      kind: 'p',
      text: 'This is general information about US rules, never legal advice, and other countries differ. Check with a lawyer before you launch, and read the sources linked here.',
    },
    {
      kind: 'list',
      items: [
        `**Calls with an AI voice.** In February 2024 the FCC ruled that AI-generated voices are artificial voices under the Telephone Consumer Protection Act ([FCC 24-17](${FCC_24_17})). [Federal rules](${CFR}) generally require the called person’s prior express consent for an artificial or prerecorded voice call to a mobile number, and prior express written consent where the call is telemarketing. There is an exemption for some health care messages, so read the rule for your trade.`,
        `**Reminder texts.** The wireless industry body CTIA’s [Messaging Principles](${CTIA}) place appointment reminders in the informational category: the person agrees by giving you their number and asking to be contacted. Use the number they gave when booking, and put the opt-out words in the message.`,
        '**Stopping.** CTIA says opt-out requests in normal language, such as “stop” or “please opt me out”, should be read and acted on. Build the agent to honour STOP at once for reminders and everything else.',
        '**Registration.** In the US, a business that texts from a standard 10-digit number registers first. [10DLC registration](/blog/10dlc-registration) explains the steps and the weeks it takes.',
      ],
    },
    {
      kind: 'p',
      text: 'Ask for consent at the point of booking, in plain words: “May we text you reminders, and call if you don’t reply?” Record the answer. [Can AI make phone calls](/blog/can-ai-make-phone-calls) goes further into the calling law.',
    },

    { kind: 'h2', id: 'costs', text: 'What it costs at 300 bookings and at 40 locations' },
    {
      kind: 'p',
      text: 'The agent’s usage is billed by the piece. The table uses Obsession’s list rates ($0.015 a text, $0.012 a call minute, $0.0676 a minute more when the agent speaks the call in its own voice, $2 a month for a US number, $0.50 a month for an inbox, $17 a month for a US texting registration). A call the agent speaks on adds $0.0676 a minute; a forwarded call does not. The inputs are examples, every call here is spoken by the agent, and the model’s own usage is billed separately, so add it from the rates page.',
    },
    {
      kind: 'table',
      caption: 'Example inputs. Each practice takes 400 calls a month of 3 minutes, each booking gets 3 texts (confirm, reminder, reply) and 1 booking in 4 gets a 1 minute reminder call. List rates, US dollars a month',
      cols: ['Line', 'One practice, 300 bookings', '40 locations, 12,000 bookings'],
      rows: [
        ['Call minutes: 1,200 + 75 and 48,000 + 3,000', '$15.30', '$612'],
        ['A persona’s own voice on spoken minutes ($0.0676 a minute, on top of the call minute)', '$86.19', '$3,447.60'],
        ['Texts: 900 and 36,000, at $0.015', '$13.50', '$540'],
        ['US numbers: 1 and 40, at $2', '$2', '$80'],
        ['Inboxes: 1 and 40, at $0.50', '$0.50', '$20'],
        ['US texting registration, one campaign', '$17', '$17'],
        ['Usage at list rates', '$134.49', '$4,716.60'],
        ['Per booking', 'About $0.45', 'About $0.39'],
      ],
    },
    {
      kind: 'p',
      text: 'The one-off registration fee is $25 per campaign, and each business that texts needs its own campaign, so the 40 locations count as one only if they are one business. Registration ($25 once, $17 a month per campaign) counts toward a plan’s covered usage, one campaign per business that texts. Developer’s $20 covers $20 of usage at list rates, Startup’s $99 covers $111 and Scale’s $499 covers $588. The practice’s $134.49 is nearest to Startup, and the 40 locations’ $4,716.60 is beyond Scale, so Enterprise, from $1,500 a month, is the fit. Set the practice’s $134 against the $3,840 in the earlier table, and the group’s $4,717 against $155,520. Your own no-show rate decides whether it pays.',
    },
    {
      kind: 'p',
      text: 'Booking tools add their own fee, from $0 on Square’s Free plan to $69 a month on Acuity’s Premium, for each calendar or location.',
    },

    { kind: 'h2', id: 'compared', text: 'Ways to schedule appointments with AI, compared', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its own pages, as read on 23 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to take bookings and cut no-shows, from each provider’s own pages as read on 23 November 2026 (Goodcall on 22 November). Prices in US dollars',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['Acuity Scheduling', 'Self-booking page, payments and text reminders on Standard and the higher plan', '$16, $27 or $55 a month billed annually', 'Reminders and booking rules; it does not answer calls or texts', 'Solo practitioners and small teams who want a booking page'],
        ['Calendly', 'Simple meeting scheduling with automated reminders on paid plans', '$10 or $16 a seat a month, or 17% and 20% less billed yearly', 'Made for meetings, so treatments and services need workarounds', 'Consultants and sales teams'],
        ['Square Appointments', 'Booking, reminders and card payments in one; a no-show fee from Plus', 'Free, $49 or $149 a location a month; card fees extra', 'Does not answer calls or chase a quiet booking', 'Salons, studios and shops that take card payments'],
        ['Goodcall', 'An AI agent that answers calls, with a local number included, or your number forwarded', '$79, $129 or $299 a month, about 150 to 3,000 calls', 'Priced per caller; call answering is its focus', 'Owner-run shops and multi-site groups'],
        [
          'Obsession (ours): [Appointment reminders](/blueprints/appointment-reminders) and [Missed call text back](/blueprints/missed-call-text-back)',
          'An agent with its own number, inbox and browser that answers, books into your tool and reminds, with every call, text and email in one event log',
          'Free, then $20, $99 or $499 a month; usage per piece',
          'Sends and calls on a paid plan; US texting registration is extra; the Free number receives only',
          'Practices and groups that want answering, booking and reminding from one agent',
        ],
      ],
    },
    {
      kind: 'p',
      text: `Prices and plans as each provider lists them on its own page, read 23 November 2026: [Goodcall](${GOODCALL}).`,
    },
    {
      kind: 'p',
      text: 'If you only need a booking page with reminders, your booking tool is enough. The case for an agent starts when requests arrive by call and text at all hours, or when no-shows need chasing.',
    },

    { kind: 'h2', id: 'one-identity', text: 'One agent, one identity, every piece the job needs' },
    {
      kind: 'p',
      text: 'Obsession’s AI agents each have their own phone number, inbox and browser, so they make the call, answer the email and sign in to the website for you, every day, with no code. Here is what each piece does in scheduling.',
    },
    {
      kind: 'list',
      items: [
        '**Phone number.** A US or UK number the agent owns. It takes calls, sends and receives texts in your business’s name and receives sign-in codes, which matters when your booking tool texts a code at login.',
        '**Inbox.** A real email address the agent owns. It sends and receives, keeps each thread and calls your webhook, a message to your own system, on every new email.',
        '**Browser.** A cloud browser whose sessions keep their logins between runs. The agent signs in once to your booking tool with the login you give it and stays signed in.',
      ],
    },
    {
      kind: 'p',
      text: 'A persona puts them under one identity: one name, one number, one inbox and one browser profile. The patient who texts at night and calls in the morning reaches the same agent, with the whole history, and the code your booking tool texts reaches the agent whose browser is waiting at its login page. A persona costs nothing while it waits, though its number and inbox bill monthly, and it answers a new message in about 50 ms without starting a machine.',
    },
    {
      kind: 'p',
      text: 'Every email, text, call and page the agent touches lands in one event log, dated, with the email, screenshot or recording behind it. Results reach Slack, email, a CRM, a sheet or a PDF report, so the front desk gets a morning summary and a clinic manager has a record of who was told what.',
    },
    {
      kind: 'p',
      text: 'The usual route is four vendors: an email API, a phone and texting API, a cloud browser and a sandbox, each with its own key, bill, webhook and log. That means four integrations to keep working, and seams where a job breaks, such as the code arriving at one vendor while the browser waits at another. If the job needs only one piece, a single specialist can be enough. [AgentMail, Twilio, Browserbase and E2B, or every piece on one API](/compare/agentmail-twilio-browserbase-e2b) sets them side by side, and [the AI agent infrastructure stack](/blog/ai-agent-infrastructure-stack) explains each layer.',
    },
    {
      kind: 'p',
      text: 'There are two ways to run it. With no code, pick a blueprint such as [Appointment reminders](/blueprints/appointment-reminders), or [describe the job in your own words](/no-code) and Obsession sets it up and spins up the agent. Developers get the API, SDKs and MCP: create a number with obsession.numbers.create({ country: "US" }) and receive call.received and sms.received events at their webhook.',
    },
    {
      kind: 'p',
      text: 'It runs at any size, one agent for one practice or an agent for every front desk at 240 clinics, each with its own identity and paid for by what each uses. Once an agent has its own number, inbox and browser, the same persona can also chase the documents a new patient needs before a first visit, text the garage’s customers when a part arrives, or confirm a delivery window with a supplier.',
    },
    {
      kind: 'cta',
      text: 'Text everyone booked the day before, call the quiet ones and offer every no-show a new time, with each change written back to your calendar.',
      to: '/blueprints/appointment-reminders',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'limits', text: 'Where scheduling agents go wrong' },
    {
      kind: 'list',
      items: [
        '**Double bookings.** Have the agent read open times at the moment it books, and read the booking back to the person.',
        '**Rules it wasn’t given.** Buffers, deposits, which staff do which treatment and holiday hours must be written down, or the agent will guess.',
        '**Names and dates in noise.** Spell back names and repeat the date and time before confirming.',
        '**Urgent cases.** Decide what counts and send those to a person immediately.',
        '**Changes.** Call or text the agent as a customer after each change to services or hours.',
      ],
    },
    {
      kind: 'p',
      text: 'A practice where nearly every booking is made in person, and the diary is rarely full, can wait. So can one where a person should hold every first conversation.',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about AI for scheduling appointments' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can AI schedule appointments for me?',
          a: 'Yes. An AI agent can answer the request by call, text or email, book a slot in your calendar or booking tool and send reminders. It works best with clear rules for services, hours and urgent cases, and with a person ready for anything it can’t handle.',
        },
        {
          q: 'How does an AI agent book into Acuity, Calendly or Square Appointments?',
          a: 'Through the tool’s own integration or API where one exists, or by signing in to its web page in a browser with a login you provide. On 23 November 2026, Acuity listed custom API access on its Premium plan. Square’s Free plan includes online booking and reminders.',
        },
        {
          q: 'Do text reminders reduce no-shows?',
          a: 'A Cochrane review of eight trials with 6,615 participants found attendance of 67.8% without reminders and 78.6% with text message reminders. It was published on 5 December 2013 and covers healthcare appointments, so measure your own results.',
        },
        {
          q: 'How much does AI appointment scheduling cost?',
          a: 'It depends on volume. At Obsession list rates, usage for 300 bookings a month with the call handling described here comes to about $134 a month, and 12,000 bookings across 40 locations about $4,717, with the agent speaking every call. Booking tools add $0 to $69 a month on the plans read on 23 November 2026, and model usage is billed separately.',
        },
        {
          q: 'Do I need consent to send appointment reminder texts?',
          a: 'In the US, CTIA treats appointment reminders as informational messages, where the person agrees by giving you their number and asking to be contacted. Use the number they gave, include opt-out words and honour STOP at once. This is general information, not legal advice.',
          link: { label: '10DLC registration, step by step', to: '/blog/10dlc-registration' },
        },
        {
          q: 'Can an AI call people to remind them of appointments?',
          a: 'An AI-generated voice counts as an artificial voice under the FCC’s February 2024 ruling, so call only people who agreed to reminder calls, and say it’s an AI assistant at the start. Federal rules generally require prior express consent for these calls to mobile numbers. This is general information, not legal advice.',
          link: { label: 'Can AI make phone calls?', to: '/blog/can-ai-make-phone-calls' },
        },
        {
          q: 'What is the best AI tool for scheduling appointments?',
          a: 'It depends on the job. A booking tool such as Acuity, Calendly or Square Appointments is enough for a booking page with reminders. An answering agent such as Goodcall suits calls. Obsession suits teams that want an agent to answer, book and remind from one identity, with every call, text and email in one log.',
          link: { label: 'AI receptionist', to: '/use-cases/ai-receptionist' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'Prices and the law',
      text: 'Prices are as each provider listed them on 23 November 2026 (Goodcall on 22 November), in US dollars, and change often; check each page. The consent rules are US rules, given as general information and never as legal advice. Brightside Dental in the picture and every input in the tables are examples.',
    },
    {
      kind: 'cta',
      text: 'Give your scheduling agent its own number, inbox and browser on one bill. Start free to receive calls and texts; sending starts on a paid plan from $20 a month.',
      to: '/blueprints/missed-call-text-back',
      label: 'See the blueprint',
    },
  ],

  sources: [
    { title: 'Pricing', publisher: 'Acuity Scheduling', url: ACUITY, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Calendly', url: CALENDLY, date: '2026-11-23' },
    { title: 'Appointments pricing', publisher: 'Square', url: SQUARE, date: '2026-11-23' },
    { title: 'Pricing', publisher: 'Goodcall', url: GOODCALL, date: '2026-11-22' },
    { title: 'Mobile phone text message reminders improve attendance at healthcare appointments', publisher: 'Cochrane', url: COCHRANE, date: '2013-12-05' },
    { title: '47 CFR 64.1200: Delivery restrictions', publisher: 'Legal Information Institute, Cornell Law School', url: CFR, date: '2026-11-23' },
    { title: 'Messaging Principles and Best Practices', publisher: 'CTIA', url: CTIA, date: '2023-05' },
    {
      title: 'Declaratory Ruling on AI technologies and unwanted robocalls and robotexts (FCC 24-17)',
      publisher: 'Federal Communications Commission',
      url: FCC_24_17,
      date: '2024-02-08',
    },
  ],

  related: ['/blueprints', 'recipe:appointment-reminders', 'recipe:missed-call-text-back', 'ai-voice-agent-for-small-business', '10dlc-registration', 'can-ai-make-phone-calls'],
}

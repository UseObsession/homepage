import type { BlogPost } from './types'

/* Wave 2, batch B (_research/seo/wave2-pull-23nov/PLAN.md, row 12; 23 Nov 2026). Primary "how to build an ai sdr";
   secondaries from Google suggestions (US and UK, 23 Nov 2026, autocomplete_23nov.json): how to create an ai sdr, how
   to build an sdr ai agent. Never bare "ai sdr" or "ai sdr agent" (/use-cases/ai-sdr). Readers: founders and engineers
   building AI SDRs, and SDR leaders running their own AI reps (persona-kpis: sdr_leader, measured on reply rates,
   meetings booked and opportunities). Spine: the how-to guide, six steps in build order with a pass for each, calls and
   texts for inbound leads, the blueprints as the second door, costs per rep, what to watch, limits, FAQ, note and
   sources. Facts with their URLs: _research/seo/wave2-pull-23nov/research/how-to-build-an-ai-sdr.json.
   Read on 23 Nov 2026, each on its own page: Google's Email sender guidelines (Gmail Help); the FTC's CAN-SPAM
   compliance guide; the ICO's business-to-business marketing guidance; GDPR Article 21; Google Calendar's freebusy query
   and events.insert references. No sending tool or AI SDR product is named; the sources are mailbox providers,
   regulators and the calendar's own docs. Obsession's prices are from src/content/prices.ts (inbox $0.50 a month, emails
   $0.40 per 1,000, browser $0.10 an hour with no charge per GB, number $2 a month, calls $0.012 a minute, texts $0.015,
   US texting registration $25 once then $17 a month; tokens per million on Auto, none with your own key). The three-size
   bill was worked with the pricing engine (monthlyBill) on the cheapest plan: 500 inboxes, 650,000 emails and 5,000
   browser hours is Scale $921; 50, 65,000 and 500 is Startup $99; 5, 6,500 and 50 is Developer $20. Product lines as
   /agents and /use-cases/ai-sdr state them: every agent says it's an AI, texts or calls only people who gave the
   business their number, and sends within each mailbox provider's rules (never a way round spam filters). No Inkbox or
   TinyFish. Tallowmere and Brightford at .example addresses, and every row in the picture, are invented. British
   English, no dashes. */

const GOOGLE_SENDERS = 'https://support.google.com/a/answer/81126'
const FTC_CANSPAM = 'https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business'
const ICO_B2B = 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing'
const GDPR_21 = 'https://gdpr-info.eu/art-21-gdpr/'
const GCAL_FREEBUSY = 'https://developers.google.com/workspace/calendar/api/v3/reference/freebusy/query'
const GCAL_INSERT = 'https://developers.google.com/workspace/calendar/api/v3/reference/events/insert'

export const post: BlogPost = {
  slug: 'how-to-build-an-ai-sdr',
  title: 'How to build an AI SDR: an inbox per rep, research, replies and meetings booked',
  dek: 'Six steps in the order you build them, from each rep’s inbox to the meeting in the calendar, with the sending rules said plainly. Each step says what a pass looks like, from Google’s, the FTC’s and the ICO’s own pages as read on 23 November 2026.',
  metaTitle: 'How to build an AI SDR that books meetings for sales teams',
  description:
    'How to build an AI SDR: an inbox per rep on a domain you warm up slowly, account research in a browser, the first email, every reply handled, a meeting.',
  answer:
    'To build an AI SDR, give each rep its own inbox on an outreach domain you warm up slowly, and a browser to research each account. A model writes one specific first email from that research, and one handler routes every reply, stopping the sequence, honouring opt-outs and offering meeting times. Keep a person approving first emails until reply rates and meetings booked hold steady.',
  primaryKeyword: 'how to build an ai sdr',
  keywords: ['how to create an ai sdr', 'how to build an sdr ai agent'],
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
      title: 'One account, from research to a meeting',
      who: 'Quill, an AI SDR at tallowmere.example',
      rows: [
        { time: 'Tue 09:00', text: 'page.visited', detail: 'brightford.example/careers · 3 open SDR roles · screenshot saved', tone: 'info' },
        { time: 'Tue 09:03', text: 'Draft written', detail: 'Opens on the 3 SDR roles · waiting for approval', tone: 'info' },
        { time: 'Tue 09:20', text: 'email.sent', detail: 'Approved by Priya, sent from quill@tallowmere.example', tone: 'ok' },
        { time: 'Thu 14:12', text: 'email.received', detail: '“Interesting. Could you do next Tuesday?”', tone: 'ok' },
        { time: 'Thu 14:13', text: 'email.sent', detail: 'Tue 15:00 or Wed 10:00 offered', tone: 'info' },
        { time: 'Thu 14:40', text: 'Meeting booked', detail: 'Tue 15:00 · invite sent · sequence stopped', tone: 'ok' },
      ],
      foot: 'Example: every page, email and reply lands in one event log. Tallowmere and Brightford are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'An AI SDR is an AI agent that does a sales development rep’s job: it researches each account, writes the first email, answers the replies and books the meeting. Building one takes six parts: an inbox per rep, research, the first email, sending within the rules, a reply handler and the booking. The steps suit founders building AI SDR products and sales teams running their own AI reps. Build them in order, and move on when each step passes its test.',
    },

    { kind: 'h2', id: 'decide', text: 'What to decide first' },
    {
      kind: 'p',
      text: 'Five decisions shape the build, and the rep’s instructions come straight from them.',
    },
    {
      kind: 'list',
      items: [
        `**Who it writes to:** the accounts and roles your offer fits, from a list you build yourself. [Google’s sender guidelines](${GOOGLE_SENDERS}) say not to buy email addresses from other companies.`,
        '**Which domain it sends from:** a separate domain for outreach, so a spam complaint there never touches the domain your invoices and customer emails come from.',
        '**How many emails each inbox sends:** a low number a day to start, raised slowly.',
        '**What a person approves:** every first email at the start, then a daily sample once the drafts go out unchanged.',
        '**Which replies go to a person:** pricing, security and legal questions, and any senior buyer who says yes.',
      ],
    },

    { kind: 'h2', id: 'pieces-or-blueprints', text: 'Build it from pieces, or pick a blueprint' },
    {
      kind: 'p',
      text: 'Developers build the rep from four pieces: an inbox, a browser, a model and a webhook. A webhook is the address in your app where each reply arrives the moment it lands. Teams without developers pick ready-made jobs instead. [Speed-to-lead callback](/blueprints/speed-to-lead-callback) calls every new inbound lead within a minute, [Inbox agent](/blueprints/inbox-agent) answers every email to an address of its own and hands the rest to a person, and Obsession runs both.',
    },

    { kind: 'h2', id: 'inbox', text: 'Step 1: give each rep its own inbox' },
    {
      kind: 'p',
      text:
        'Each AI rep sends from its own address on your outreach domain, so every reply threads back to the rep that wrote. Before the first send, publish three authentication records for the domain:',
    },
    {
      kind: 'list',
      items: [
        '**SPF,** a record in your domain’s settings that lists the servers allowed to send for it.',
        '**DKIM,** a signature checked on arrival to prove which domain sent the email.',
        '**DMARC,** a record that tells receiving servers what to do with email that fails those checks.',
      ],
    },
    {
      kind: 'p',
      text:
        '[Google’s guidelines](' +
        GOOGLE_SENDERS +
        ') require SPF or DKIM from everyone who emails Gmail accounts, and all three from anyone sending more than 5,000 messages a day to them.',
    },
    {
      kind: 'p',
      text: 'On Obsession, obsession.inboxes.create() gives a rep its address, on your own domain or Obsession’s. An inbox costs $0.50 a month, and emails $0.40 per 1,000 sent or received. The step passes when a test email from the rep reaches a Gmail and an Outlook address with SPF, DKIM and DMARC shown as passed in its headers.',
    },

    { kind: 'h2', id: 'research', text: 'Step 2: research each account in a browser' },
    {
      kind: 'p',
      text: 'A first email earns a reply when it opens on something true about the account that week, such as a new pricing page, three open sales roles or a product launch. The rep reads the account’s own pages in a cloud browser, which runs on a server. It saves each finding with a screenshot, so the person approving the email can check the claim. [Sales trigger events](/blog/sales-trigger-events) lists the changes worth opening on.',
    },
    {
      kind: 'p',
      text: 'On Obsession, obsession.browsers.create({ home: "US" }) starts the browser at $0.10 a browser hour, with traffic included, and each page reaches your event log as page.visited. The step passes when, for 20 accounts, the research names one dated fact per account with a screenshot that shows it.',
    },

    { kind: 'h2', id: 'first-email', text: 'Step 3: write the first email' },
    {
      kind: 'p',
      text: 'Give the model the research, your offer and a short brief: one fact about the account, one sentence on what changes for them and one question. Keep it to about 100 words of plain text, signed with the rep’s name and the fact that it’s an AI agent. [Cold email first line examples](/blog/cold-email-first-line-examples) shows openings built on a dated fact.',
    },
    {
      kind: 'p',
      text: 'A person approves every first email until a run of them, such as 50 in a row, goes out unchanged. After that, review a daily sample. The step passes when every email names a fact its screenshot shows, and none promises a result your product can’t back.',
    },

    { kind: 'h2', id: 'sending', text: 'Step 4: send within the rules' },
    {
      kind: 'p',
      text:
        'Deliverability is whether your email reaches the inbox at all, and it rests on volume, spam complaints and opt-outs. [Google](' +
        GOOGLE_SENDERS +
        ') asks senders to start with a low volume, increase it slowly and avoid sudden spikes, such as doubling the volume overnight. Raising a new inbox’s volume this way is usually called warming it up. Keep the spam rate Gmail users report, shown in Google’s Postmaster Tools, under 0.3%. If emails start bouncing, cut the volume until the errors stop, then raise it slowly again.',
    },
    {
      kind: 'p',
      text: 'Every email needs a way to opt out, and the rules differ by country:',
    },
    {
      kind: 'list',
      items: [
        `**In the US,** the [FTC’s CAN-SPAM guide](${FTC_CANSPAM}) says the law “makes no exception for business-to-business email”. Each message needs honest headers and subject lines and a clear statement that it’s an advertisement. It also needs your valid physical postal address and a way to opt out, and opt-outs must be honoured within 10 business days.`,
        `**In the UK,** the [ICO](${ICO_B2B}) says you can email corporate addresses without consent under PECR, the UK’s rules on electronic marketing. You must not hide who you are, and you must give a valid address to opt out. Sole traders and some partnerships count as individuals, who need consent or a soft opt-in first. An address with a person’s name in it is personal data under the UK GDPR, and that person has an absolute right to stop it being used for direct marketing.`,
        `**In the EU,** [Article 21 of the GDPR](${GDPR_21}) gives the same right to object, and says it must be brought to the person’s attention in the first message at the latest.`,
      ],
    },
    {
      kind: 'p',
      text: 'Calls and texts follow stricter rules. Every Obsession agent texts or calls people who gave the business their number, and nobody else. So the rep emails the accounts on your list, and calls or texts the leads who filled in your form. Every reply and opt-out lands in the event log, so the rep stops writing to anyone who says no. The step passes when an opt-out from a test address stops every email to it and adds the address to your suppression list.',
    },

    { kind: 'h2', id: 'replies', text: 'Step 5: handle every reply' },
    {
      kind: 'p',
      text: 'Replies arrive at your webhook as email.received, in the thread the rep started. Sort each into one of five kinds and act on it:',
    },
    {
      kind: 'list',
      items: [
        '**Interested:** offer two times and send the invite.',
        '**Not now:** stop the sequence and set a reminder for the month they named.',
        '**Wrong person:** thank them and ask who owns it, then stop.',
        '**Opt-out:** stop, add the address to the suppression list and confirm once.',
        '**Out of office:** pause until the date in the message.',
      ],
    },
    {
      kind: 'p',
      text: 'Any reply stops the sequence, and a person sees every interested reply before the meeting. The step passes when 20 test replies, 4 of each kind, each get the action listed for it.',
    },

    { kind: 'h2', id: 'booking', text: 'Step 6: book the meeting' },
    {
      kind: 'p',
      text:
        'The rep checks the calendar of the account executive taking the meeting, offers two free slots in the prospect’s time zone and creates the event when they pick one. On Google Calendar that is a [freebusy query](' +
        GCAL_FREEBUSY +
        ') for the busy times and [events.insert](' +
        GCAL_INSERT +
        ') for the booking. Write the meeting, the thread and the research to the account in your CRM, the system where your team keeps each account. The account executive then opens with the fact that earned the reply.',
    },
    {
      kind: 'p',
      text: 'The step passes when a test reply saying “Tuesday at 3 works” becomes one calendar event and one note on the account.',
    },
    {
      kind: 'p',
      text: 'On Obsession, one call puts the rep’s inbox, number and browser under one identity, a [persona](/personas): obsession.personas.create({ inbox: true, phone: "US", browser: true }). Every page, email, reply, call and text then reaches your webhook from one event log. Your own agent can make the same calls over MCP, the standard way AI agents call tools, with claude mcp add obsession.',
    },
    {
      kind: 'cta',
      text: 'An inbox, a number and a browser for every AI rep you ship, on one key and one bill, with every reply at one webhook. The Free plan includes 3 inboxes and 10 browser hours, with no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'inbound', text: 'Calls and texts for inbound leads' },
    {
      kind: 'p',
      text: 'Leads who fill in your form have given you their number, so the rep can call them within a minute. [Speed to lead statistics](/blog/speed-to-lead-statistics) grades the evidence on how fast to call. A number costs $2 a month, call minutes $0.012 and texts $0.015, and US texting needs a [10DLC registration](/blog/10dlc-registration) before the first text.',
    },
    {
      kind: 'list',
      items: [
        '**[Speed-to-lead callback](/blueprints/speed-to-lead-callback):** calls every new form lead within a minute from your agent’s own number, texts the ones who miss the call and puts each transcript on their CRM contact.',
        '**[Inbox agent](/blueprints/inbox-agent):** answers every email to its own address from your help pages and rules, and hands the rest to a person in Slack with a draft.',
      ],
    },
    {
      kind: 'cta',
      text: 'Every new form lead called within a minute from your agent’s own number, texted if they miss it, with every transcript in your CRM.',
      to: '/blueprints/speed-to-lead-callback',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'costs', text: 'What an AI SDR costs per rep' },
    {
      kind: 'table',
      caption: 'Example inputs: each rep researches 300 accounts a month at 2 minutes each and sends or receives 1,300 emails. Obsession’s part in US dollars a month on the cheapest plan, at prices as listed on 23 November 2026, before model tokens',
      cols: ['Reps', 'Inboxes', 'Browser hours', 'Plan', 'A month'],
      rows: [
        ['500', '500', '5,000', 'Scale', '$921'],
        ['50', '50', '500', 'Startup', '$99'],
        ['5', '5', '50', 'Developer', '$20'],
      ],
    },
    {
      kind: 'p',
      text: 'At list rates one rep costs $2.02 a month: $0.50 for the inbox, $0.52 for 1,300 emails and $1 for 10 browser hours. Model tokens are billed per million on Auto, which picks the model for each task, and with your own model key there is no token charge. A rep that also calls and texts inbound leads adds a $2 number, $0.012 a call minute and $0.015 a text.',
    },

    { kind: 'h2', id: 'watch', text: 'What to watch once it sends' },
    {
      kind: 'p',
      text: 'Read the numbers SDR leaders already report, per rep and per week. Those are reply rate, positive reply rate, meetings booked, meetings held and opportunities created. Add two that protect the domain: the spam rate in Postmaster Tools and the bounce rate. [Outbound agent check](/blueprints/outbound-agent-check) joins your rep’s lists as test prospects and keeps every message it sends, with any that break your rules flagged.',
    },
    {
      kind: 'p',
      text: 'For a month, run the AI rep beside your current outbound on accounts of the same industry and size. Then compare the two, so you can see what it does to reply rates, meetings booked and opportunities.',
    },

    { kind: 'h2', id: 'limits', text: 'Where a person stays in the loop' },
    {
      kind: 'list',
      items: [
        '**Senior buyers and large deals.** A yes from a buyer who signs goes to a person before the meeting.',
        '**Claims about your product.** The rep writes only what your brief and case studies support, and a person reviews any new claim.',
        '**Pricing, security and legal questions.** These go to a person with the thread and the research attached.',
        '**The list.** A rep writes well only to accounts your offer fits, so a person owns who is on it.',
      ],
    },

    { kind: 'h2', id: 'faq', text: 'Questions about building an AI SDR' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How long does it take to build an AI SDR?',
          a: 'The build takes six steps, from each rep’s inbox to the booked meeting, and each has a test to pass. Plan the most time for the first email and the reply handler, since those decide reply rates and meetings booked. Allow weeks, too, for raising a new inbox’s volume slowly.',
        },
        {
          q: 'How do I create an AI SDR without writing code?',
          a: 'Pick a ready-made job and Obsession runs it. Speed-to-lead callback calls every new form lead within a minute and texts the ones who miss the call. Inbox agent answers every email to its own address and hands the rest to a person in Slack.',
          link: { label: 'Browse blueprints', to: '/blueprints' },
        },
        {
          q: 'How do I build an SDR AI agent with its own inbox?',
          a: 'Create an inbox for each rep on your outreach domain, publish SPF, DKIM and DMARC, and point every reply at one webhook. On Obsession, one call gives a rep an inbox, a US number and a browser under one identity, and each reply arrives as email.received.',
          link: { label: 'AI SDR agent', to: '/use-cases/ai-sdr' },
        },
        {
          q: 'How many emails can an AI SDR send a day?',
          a: 'Mailbox providers publish no fixed number for a new inbox. Google asks senders to start low, raise the volume slowly and avoid sudden spikes. It also asks them to keep the spam rate in Postmaster Tools under 0.3%, and to cut the volume when emails start bouncing.',
        },
        {
          q: 'Does an AI SDR have to say it’s an AI?',
          a: 'Every Obsession agent says it’s an AI agent whenever it talks to a person, by email, text or phone. A rep that signs as an AI agent from its first email keeps one rule for every prospect, wherever they are.',
          link: { label: 'What every agent keeps to', to: '/agents' },
        },
        {
          q: 'Is cold email from an AI SDR legal?',
          a: 'B2B cold email is allowed in the US and the UK with conditions, and EU countries set their own rules. The US CAN-SPAM Act needs honest headers, a postal address and an opt-out honoured within 10 business days. In the UK and the EU, a named person can object to direct marketing at any time, and you must stop when they do. This is general information, not legal advice.',
        },
        {
          q: 'What does an AI SDR cost per rep?',
          a: 'With example inputs of 300 accounts researched and 1,300 emails a month per rep, Obsession’s part was $921 a month for 500 reps, $99 for 50 and $20 for 5. Those prices are as listed on 23 November 2026, before model tokens, and one rep comes to $2.02 at list rates.',
          link: { label: 'See pricing', to: '/pricing' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'About the sources',
      text: 'This is general information, not legal advice. The sending and marketing rules here are Google’s, the FTC’s, the ICO’s and the GDPR’s as published on 23 November 2026. They differ by country and change over time, so check them with a lawyer for your own outreach. Tallowmere and Brightford in the illustration are invented.',
    },
  ],

  sources: [
    { title: 'Email sender guidelines', publisher: 'Google (Gmail Help)', url: GOOGLE_SENDERS },
    { title: 'CAN-SPAM Act: A Compliance Guide for Business', publisher: 'Federal Trade Commission', url: FTC_CANSPAM },
    { title: 'Business-to-business marketing', publisher: 'Information Commissioner’s Office', url: ICO_B2B },
    { title: 'Art. 21 GDPR: Right to object', publisher: 'General Data Protection Regulation (gdpr-info.eu)', url: GDPR_21, date: '2016-04-27' },
    { title: 'Freebusy: query', publisher: 'Google for Developers (Google Calendar API)', url: GCAL_FREEBUSY },
    { title: 'Events: insert', publisher: 'Google for Developers (Google Calendar API)', url: GCAL_INSERT },
  ],

  related: [
    '/use-cases/ai-sdr',
    '/email',
    'recipe:speed-to-lead-callback',
    'recipe:inbox-agent',
    'recipe:outbound-agent-check',
    'cold-email-first-line-examples',
    'speed-to-lead-statistics',
    'sales-trigger-events',
  ],
}

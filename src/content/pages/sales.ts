import { consoleHeading } from '../console'
import type { Capture, Page } from '../types'

/* Sales (/sales): sales and customer success teams of any kind, SaaS first. Win and renew.
   The story: what Obsession is for a sales team > how it works > the gap (most tools read what a company publishes;
   agents go through it as a customer) > use cases (brief, account watch, expansion, business case, pilot, win back, battlecards,
   lead leaks on your own funnel, the supplier portal) > outcomes (up to ceilings with the model in the line; deliverables
   flat) > every kind of team > recipes > proof (the real September store check, as it happened) > questions (red
   lines) > early access.
   Base: _research/site_sales.json (approved), James's sales lines ("Pick an account. See what it does.").
   Every console run and use case is an example; the September store check is the one real run and is never called signed.
   Screens: How uses the flow screens (compose, templates, kit, run); each use case has its own (docs/REBUILD.md §6). */

const roles: Capture['roles'] = {
  question: 'What should your agents do first?',
  options: ['Briefs before calls', 'Renewals at risk', 'Pilot proof', 'Win back', 'Battlecards', 'Something else'],
}

const micro = 'We keep your email to set up your team’s access, and nothing else.'

export const page: Page = {
  meta: {
    path: '/sales',
    title: 'Obsession for sales: AI agents that win and renew accounts',
    description:
      'AI agents with their own inboxes, numbers and browsers sign up and ask the bot at every account and rival on your list, continuously. Every step signed.',
    answer:
      'Obsession is the intelligence infrastructure for commercial teams. For sales and customer success, it runs declared AI agents, each with its own inbox, phone number and browser, that sign up and ask the bot at every account and rival on your list, continuously, and send back signed proof and the next move for every call, pilot and renewal.',
    ogImage: '/og/sales.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Sales', path: '/sales' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'AI agents that help your team win and renew accounts.',
    sub: 'Declared AI agents, each with its own inbox, phone number and browser, sign up and ask the chat bot at every account and rival on your list, continuously. You get signed proof and your next move before every call, pilot and renewal.',
    capture: {
      kind: 'waitlist',
      source: 'sales-hero',
      button: 'Get early access for my team',
      micro,
      roles,
      interest: 'any',
    },
    secondary: { label: 'See the real report', to: '/sample-output' },
    proof: [
      { value: 'Every account', label: 'and rival on your list, at once' },
      { value: '7 days', label: 'as their customer before a first call' },
      { value: '0 basket reminders', label: 'in 48 hours, found on a real store' },
    ],
    consoleHeading,
    demos: [
      {
        tab: 'Account brief',
        recipe: 'prospect',
        task: 'Before Friday’s call, join the account’s newsletter and a trial with no card, ask its help bot, read its news and hiring, and brief me.',
        targets: '1 account, from your CRM',
        journey: ['Join newsletter and trial, no card', 'Ask the help bot', 'Never reply', 'Close if a rep gets in touch'],
        schedule: '7 days before the call',
        report: 'A brief on 1 page, in your CRM',
        kit: ['Agent ID', 'Own inbox', 'Own browser', '7 day watch'],
        events: [
          { time: 'Fri 16:10', text: 'Newsletter joined. Trial started with no card, declared as an AI agent.' },
          { time: 'Sat 10:00', text: 'Welcome email and 1 setup tip. Then nothing.' },
          { time: 'Mon 09:00', text: 'New VP of Sales announced. 6 sales roles posted.' },
          { time: 'Tue 11:20', text: 'Help bot asked 2 questions. 1 answer contradicts their own docs.' },
          { time: 'Thu 17:00', text: 'Trial closed. Brief in your CRM, every line linked to its proof.' },
        ],
        finding: 'Hiring 6 reps under a new VP. Trial emails stop after day 2.',
        fix: 'Opener and 3 questions drafted from the record. Added to Friday’s call notes after your OK.',
        ledger: '7 days, every email, page and answer dated and signed.',
      },
      {
        tab: 'Inbound quotes',
        recipe: 'quotes',
        task: 'Answer every inbound price request, from a buyer or their procurement agent, from our price book in minutes. Book a rep for big deals.',
        targets: 'Your form, inbox, sales line and buyers’ AI agents',
        journey: ['Say it’s your AI agent', 'Quote from the price book', 'Counter above your floor', 'Book the right rep'],
        schedule: 'Every request, as it lands',
        report: 'Every quote in your CRM, Slack for big deals',
        kit: ['Agent ID, names your company', 'Own inbox and number', 'Price book and floors', 'Your CRM and calendars'],
        events: [
          { time: 'Tue 18:40', text: 'A procurement agent asks for 120 seats, single sign on and a 2 year price.' },
          { time: 'Tue 18:43', text: 'It confirms who the agent acts for, then quotes 10% off for 2 years.' },
          { time: 'Tue 19:05', text: 'A form asks for 8 seats. Quoted in 3 minutes, at list price.' },
          { time: 'Wed 08:30', text: 'Asked for 20%. Held at 10%, and 12% offered only for 3 years, as your price book allows.' },
          { time: 'Wed 09:15', text: 'Over your $50,000 line, so a call with the right rep is booked for Friday.' },
        ],
        finding: '2 requests quoted in under 5 minutes, after hours. The big one held above your floor.',
        fix: 'Their security questions sent to your team, with replies drafted from your approved answers.',
        ledger: 'Every quote and counter dated, signed and in your CRM.',
      },
      {
        tab: 'Account watch',
        recipe: 'account-watch',
        task: 'Every morning, check our 40 renewals: the usage, tickets and calls we connect, their news and hiring, and what their customers get. Flag churn or upsell.',
        targets: '40 renewals, from your CRM',
        journey: ['Read the tools you connect', 'Scan news and hiring', 'Join as a declared customer', 'Flag churn or upsell'],
        schedule: 'Daily at 07:00',
        report: 'Slack alert, the play in your CRM',
        kit: ['Agent ID', 'Tools you connect', '40 inboxes', 'Daily 07:00 check'],
        events: [
          { time: 'Day 1, 07:00', text: '40 accounts read from your CRM, help desk and usage, with consent.' },
          { time: 'Day 9', text: 'Account 22 raises $30m. Seats 92% used, 14 jobs posted.' },
          { time: 'Day 10', text: 'As a subscriber: Account 22 announces 3 new countries.' },
          { time: 'Day 12', text: 'Account 9: logins down 38% in 3 weeks. 4 billing tickets.' },
          { time: 'Day 12, 07:20', text: 'A rival named on their last 2 calls. Slack alert sent.' },
        ],
        finding: 'Account 9: churn risk, 3 reasons. Account 22: ready to grow, 3 reasons.',
        fix: 'Drafted: a save plan for Account 9 and a seat offer for Account 22. Sent after your OK.',
        ledger: 'Every reason linked to its source, dated and signed.',
      },
      {
        tab: 'Renewal negotiation',
        recipe: 'renewal',
        task: 'Account 31 renews on 1 Dec. Answer every round from their procurement agent the same day, with real usage, inside our limits, through to signature and payment.',
        targets: 'Account 31, $48,000 a year',
        journey: ['Answer each round the same day', 'Show their real usage', 'Offer only inside your limits', 'Signature, PO and payment'],
        schedule: 'From 120 days out until paid',
        report: 'Each round in your CRM, Slack when it’s agreed',
        kit: ['Agent ID, names your company', 'Usage, connected by you', 'Your discount limits', 'Signing and billing tools'],
        events: [
          { time: '88 days out', text: 'Their procurement agent, declared as AI, asks for 22% off.' },
          { time: '88 days out', text: 'Same day: their usage, checked by your team, and 6% for 2 years, inside your limits.' },
          { time: '80 days out', text: 'It says usage fell. The record shows a 14% rise, sent with the proof.' },
          { time: '61 days out', text: 'Agreed. Your account manager signs, and the agent chases their signer.' },
          { time: '2 days out', text: 'PO in, invoice accepted in their portal, paid.' },
        ],
        finding: 'Asked for 22% off, renewed at 6% for 2 years: $7,680 a year kept on $48,000.',
        fix: 'Anything outside your limits comes to you. Next year’s renewal starts 120 days out.',
        ledger: 'Every round, usage file and signature dated and signed.',
      },
      {
        tab: 'Battlecard',
        recipe: 'trial',
        task: 'Start trials with no card at our 3 biggest rivals. Log every email and offer. Never reply, and close any trial a rep writes to or calls.',
        targets: '3 rivals, typed in',
        journey: ['Start a trial, no card', 'Follow every onboarding step', 'Never reply', 'Close if a rep gets in touch'],
        schedule: '14 day trials, then their pages every Monday',
        report: 'Battlecard in Slack and your CRM',
        kit: ['Agent ID', '3 trial inboxes', 'Own browser', '14 day watch'],
        events: [
          { time: 'Day 1', text: '3 trials started with no card, each declared as an AI agent.' },
          { time: 'Day 3', text: 'Rival B: first report took 3 days. Its site says 1.' },
          { time: 'Day 6', text: 'Rival B’s rep writes to book a call. Trial closed, no reply.' },
          { time: 'Day 13', text: 'Rival A: 20% off. Rival C: 30% off if paid within 7 days.' },
          { time: 'Day 14', text: 'Trials closed. Battlecard built from 41 emails and steps, by rival.' },
        ],
        finding: 'Rival A offers 20% off on day 13, Rival C 30% off. Rival B promises setup in 1 day. It took 3.',
        fix: 'Battlecard and 2 objection answers drafted. Shared with your team after your OK.',
        ledger: 'Every email and step dated and signed. No replies sent.',
      },
      {
        tab: 'Supplier portal',
        recipe: 'get-paid',
        task: 'Get us set up in the buyer’s supplier portal from our company pack. Chase daily until our first invoice is paid.',
        targets: '1 buyer portal, by their invite',
        journey: ['Register from the invite', 'File every form', 'Bank details: finance only', 'Chase until paid'],
        schedule: 'Daily at 08:00 until paid',
        report: 'Slack note and a dated log',
        kit: ['Agent ID', 'Supplier inbox', 'Company pack', 'Daily 08:00 check'],
        events: [
          { time: 'Day 1, 10:14', text: 'Registered from the invite as your AI agent. 5 of 6 forms filed.' },
          { time: 'Day 1, 10:31', text: 'Flag: the form asks for $5m insurance. Your pack shows $2m. Email to your broker drafted, sent after your OK.' },
          { time: 'Day 6, 08:00', text: 'New certificate filed. Approved. Your finance team adds the bank details.' },
          { time: 'Day 38, 08:00', text: 'Invoice 8 days late. Polite chase to their accounts team, as you approved.' },
          { time: 'Day 40, 08:00', text: 'Paid. Log closed.' },
        ],
        finding: 'The $5m insurance rule was the only block. Approved on day 6, paid on day 40.',
        fix: 'Next year’s PO lined up before the renewal invoice, so year 2 isn’t late either.',
        ledger: 'Every form and chase signed. Bank details entered by your finance team.',
      },
    ],
  },

  how: {
    heading: 'Pick the job and add your accounts. Agents bring back signed proof.',
    sub: 'A recipe comes with its agents, inboxes and schedule already set up. Type a task, and Obsession sets them up for you.',
    steps: [
      {
        title: 'Pick a recipe, type a task, or build your own',
        line: 'Account watch and battlecards come ready to run. Type any other job in plain words, or build on the API.',
        screen: 'compose',
        chips: ['Pick a recipe', 'Type a task', 'Build on the API'],
      },
      {
        title: 'Add your accounts',
        line: 'Accounts, prospects and rivals: every company on your list gets its own agent.',
        screen: 'templates',
        chips: ['Paste a list', 'Upload a CSV', 'Connect Clay', 'API'],
      },
      {
        title: 'Declared agents run it',
        line: 'Each agent gets its own ID, inbox, phone number and browser, says it’s an AI agent, and keeps going continuously.',
        screen: 'kit',
        chips: ['Agent ID', 'Inbox', 'Phone number', 'Browser'],
      },
      {
        title: 'You get the proof and your next move',
        line: 'Every step comes back signed, with the brief, alert or note drafted for your OK.',
        screen: 'run',
        chips: ['CRM', 'Slack', 'Email', 'PDF', 'Sheet', 'Clay', 'Webhook'],
      },
    ],
  },

  gap: {
    heading: 'Most tools read what a company publishes. Obsession goes through it as a customer.',
    sub: 'Every step is signed and dated, so a buyer, a CFO or a renewal committee can check it without taking your word.',
    rows: [
      { today: 'A contact list and a summary of their website', obsession: '7 days as their customer, every email and bot answer dated' },
      { today: 'Health scores stay green until the account leaves', obsession: 'Churn and upsell flagged every morning, from your tools and as their customer' },
      { today: 'Your renewal deck is your word, so finance discounts it', obsession: 'Every number linked to their own data, and signed' },
      { today: 'Battlecards from a rival’s pricing page, stale by next quarter', obsession: 'Built from each rival’s real trial, and checked again every week' },
      { today: 'An assistant in your own inbox, 1 account at a time', obsession: 'Agents with their own declared inbox and number, at every account at once' },
    ],
  },

  uses: {
    heading: 'Agents do the legwork behind every deal and every renewal.',
    items: [
      {
        tab: 'Account brief',
        moment: 'Friday 16:00. A first call books for next Friday.',
        outcome: 'Know what each account does before you call: 7 days as their customer.',
        line: 'A declared agent joins their newsletter and a trial with no card, asks their help bot and reads their news. It never replies, and closes the trial if a rep writes or calls.',
        whyOnly: 'A welcome email or a trial nudge only reaches an inbox that signed up. Each agent has its own, at every account on your list.',
        recipe: 'prospect',
        screen: 'brief',
      },
      {
        tab: 'Account watch',
        moment: 'Monday 08:00. 2 hours before the forecast call.',
        outcome: 'See churn and upsell coming, with the play drafted.',
        line: 'With consent, agents read the CRM, tickets and calls you connect, follow each account’s news and join its emails and texts as a declared customer.',
        whyOnly: 'It lives as their customer, so it sees what breaks for them before their usage drops.',
        recipe: 'account-watch',
        screen: 'acctwatch',
      },
      {
        tab: 'Expansion offers',
        moment: 'Monday 08:00. An account is using 113 of its 120 seats.',
        outcome: 'Offer more the week an account needs it, on your price book.',
        line: 'Agents read the usage and CRM you connect and each account’s public news, build the case from its own usage and draft the offer. Your rep sends it from their own thread.',
        whyOnly: 'A usage dashboard shows the seats. Only an agent reads every account’s usage and public news each morning, builds the case and keeps each follow up drafted in your rep’s thread until the PO lands.',
        recipe: 'expansion',
        screen: 'expansion',
      },
      {
        tab: 'Business case',
        moment: 'Wednesday 11:00. 90 days to renewal, and budgets are cut.',
        outcome: 'Renew and expand on ROI their CFO can check.',
        line: 'Agents build the case from the usage and tickets you connect, priced in the account’s own costs, and keep it current until renewal.',
        whyOnly: 'Refreshed every week, and every number opens its signed source, so finance never has to take your word.',
        recipe: 'business-case',
        screen: 'case',
      },
      {
        tab: 'Pilot proof',
        moment: 'Tuesday 09:00. Kickoff, and their CFO wants proof by day 30.',
        outcome: 'Turn pilots into contracts on a signed before and after.',
        line: 'With their OK, the same declared test customers ask their support the same 20 questions on day 0, 14 and 28, and time every answer.',
        whyOnly: 'Each test customer keeps its own inbox and number from day 0 to day 28, so every answer is timed the same way.',
        recipe: 'mystery',
        screen: 'pilot',
      },
      {
        tab: 'Win back',
        moment: 'Thursday 14:00. The lost deals list nobody reopens.',
        outcome: 'Reopen lost accounts the week their new setup breaks.',
        line: 'A declared agent joins each lost account’s emails and texts, logs what breaks or changes, and drafts your rep’s note.',
        whyOnly: 'Its own inbox and texting number at every lost account, continuously, every message dated.',
        recipe: 'email-sms',
        screen: 'winback',
      },
      {
        tab: 'Battlecards',
        moment: 'Wednesday 15:00. A buyer says the rival is cheaper.',
        outcome: 'Know every rival’s discount before your buyer quotes it.',
        line: 'Declared agents start each rival’s trial with no card and log every email, price and offer. They never reply, and close the trial the moment a rep writes or calls.',
        whyOnly: 'A day 13 discount only reaches an inbox inside the trial. Each agent has its own, at every rival, checked again every Monday.',
        recipe: 'trial',
        screen: 'battlecard',
      },
      {
        tab: 'Lead leaks',
        moment: 'Thursday 09:00. Inbound is up, meetings booked are not.',
        outcome: 'Find where your form, chat and phone drop leads.',
        line: 'Every day, a labelled test lead uses your own form, chat and phone, times each reply and checks who got it.',
        whyOnly: 'Its own inbox and number wait out every reply, each timed and signed.',
        recipe: 'speed',
        screen: 'inbound',
      },
      {
        tab: 'Supplier portal',
        moment: 'Friday 17:00. Contract signed. Then come the vendor forms.',
        outcome: 'Forms filed on day 1, chased until you’re paid.',
        line: 'The day the contract is signed, a declared agent registers you in their supplier portal, files every form and security questionnaire from your pack, then chases the PO and the invoice until you’re paid.',
        whyOnly: 'Its own supplier inbox, checked every morning. Anything to sign waits for you, and your finance team enters bank details.',
        recipe: 'get-paid',
        screen: 'vendor',
      },
    ],
  },

  outcomes: {
    heading: 'Up to $96,000 a year from 1 renewal saved and 1 pilot won.',
    sub: '1 renewal saved on an early churn flag and 1 deal won on a signed pilot, at $48,000 each. Every rep opens every call, pilot and renewal on signed proof.',
    items: [
      { value: 'Up to 5 hours', label: 'back a week per rep: 10 first calls, 30 minutes of research each' },
      { value: 'Every morning', label: 'each renewal checked from your tools and as their customer' },
      { value: 'Day 0, 14 and 28', label: 'of every pilot, each answer timed and signed' },
      { value: 'Day 1', label: 'vendor forms filed, then chased until you’re paid' },
    ],
  },

  kinds: {
    heading: 'Whatever you sell, every account on your list gets its own agent.',
    label: 'What your team sells',
    items: [
      {
        name: 'SaaS',
        line: 'Brief every first call from their trial, see churn and growth coming, and renew on numbers their CFO can check.',
        recipes: ['prospect', 'account-watch', 'expansion', 'business-case', 'trial'],
      },
      {
        name: 'Payments and fintech',
        line: 'With each merchant’s OK, test its checkout from every market each week, stop before payment, and catch breaks before volume drops.',
        recipes: ['audit', 'account-watch', 'prospect'],
      },
      {
        name: 'Ecommerce platforms',
        line: 'Join every store’s emails and texts and list the ones that go quiet. With each account’s OK, check its journeys.',
        recipes: ['prospect', 'email-sms', 'mystery'],
      },
      {
        name: 'Logistics',
        line: 'Track rivals’ public rates and delivery promises, and each account’s tracking emails and texts with its OK.',
        recipes: ['prices', 'competitor', 'delivery'],
      },
      {
        name: 'Media and advertising',
        line: 'See the ads each prospect and its rivals run in public, and follow every ad to its page, price and code.',
        recipes: ['ads', 'competitor', 'prospect'],
      },
      {
        name: 'Recruitment and HR',
        line: 'Watch every target’s open roles daily. With each client’s OK, apply as a declared test candidate.',
        recipes: ['prospect', 'mystery', 'account-watch'],
      },
      {
        name: 'Enterprise and government',
        line: 'Catch new tenders on day 1, file vendor forms from your pack and chase every invoice until it’s paid.',
        recipes: ['prospect', 'get-paid'],
      },
      {
        name: 'Industrial and manufacturing',
        line: 'Catch tenders for your product codes, and see which distributors list rivals’ parts but not yours.',
        recipes: ['prospect', 'competitor', 'prices'],
      },
      {
        name: 'Any other team',
        line: 'If your reps do it in a browser, an inbox or a portal, type it. Agents set it up and show their work.',
        recipes: [],
      },
    ],
  },

  recipes: {
    heading: 'From the first call to the renewal, a recipe is ready to run.',
    ids: ['prospect', 'quotes', 'account-watch', 'expansion', 'business-case', 'renewal', 'reviews', 'mystery', 'email-sms', 'trial', 'competitor', 'speed', 'get-paid'],
  },

  proof: {
    heading: '1 shopper left a basket and 1 stopped at checkout on a real store. Neither got a reminder in 48 hours.',
    line: 'September 2026, a skincare store, 4 test customers: a £40 gift set left in the basket at 02:57 and £21 of deodorant left at checkout at 03:11, each logged with its time and screenshots. Your briefs, cases and battlecards come back the same way.',
    cta: { label: 'See the real report', to: '/sample-output' },
  },

  faq: {
    heading: 'Every agent says it’s AI. Every offer stays inside the limits you set.',
    items: [
      {
        q: 'Will our accounts know it’s an AI agent?',
        a: 'Yes. Every agent says it’s an AI agent and never pretends to be a person. When it deals with an account for you, on a quote, a renewal or an invoice, or on a journey the account has agreed to, it says it works for you. Everywhere else, it links to useobsession.com/agents and keeps your name out.',
      },
      {
        q: 'Does it contact anyone at a prospect or rival?',
        a: 'No. It only uses what works without a person: signing up, newsletters, opting in to texts, public pages, the ads they run in public and the site’s chat bot. If a person picks up the chat, the step ends. Trials need no card, get no reply and close the moment a rep writes or calls.',
      },
      {
        q: 'Does it find contacts and emails?',
        a: 'No. It finds out what an account does: what its customers get, what its bot says and what changes. Bring your accounts from your CRM or Clay, and each one gets its own agent.',
      },
      {
        q: 'What can it see inside an account?',
        a: 'Only what you connect, with consent: your CRM, help desk, call notes and product usage. An account’s own systems and journeys only with its OK, and nothing behind a login it wasn’t given.',
      },
      {
        q: 'What does signed mean?',
        a: 'Every step is saved with its screenshot, the raw message and the time, then signed. Share it with a buyer or a CFO, and they can check nothing was changed.',
      },
      {
        q: 'Will it message a buyer without our OK?',
        a: 'Only inside rules you approve once: quotes from your price book and counters inside your limits. Anything outside them, any change to terms and every signature wait for you, and your finance team enters bank details. On anyone else’s store, every checkout stops before payment.',
      },
      {
        q: 'How many accounts can it cover?',
        a: 'As many as you add. Paste a list, upload a CSV, connect Clay or use the API. Results land in your CRM, Slack, email, a sheet, a PDF or a webhook.',
      },
    ],
  },

  final: {
    heading: 'Pick an account. See what it does.',
    sub: 'Start with the renewal you can’t lose, or the deal you’re fighting for.',
    capture: {
      kind: 'waitlist',
      source: 'sales-final',
      button: 'Get early access for my team',
      micro,
      roles,
      interest: 'any',
    },
  },
}

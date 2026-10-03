import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Founders (/founders). Founders of any kind, technical or not, SaaS weighted.
   The story: what Obsession is for a founder > how it works > the gap (you can't do this legwork yourself) >
   use cases (lead generation first, then QA after every release, then rivals, being found, getting paid, costs) >
   outcomes > every kind of business > recipes > the real September store check > questions > "Get early access".
   Every console run is an example and says so in its ledger line. The only real run is the September store check
   (proof and the third hero fact): 4 test customers, 48 hours watched, 1 basket and 1 checkout left, 0 reminders.
   Each use case line matches what its screen shows (leads, switch, ship, qa, rivals, listings, invoices, suppliers).
   Software renewals matches the spend screen: 6 tools on £4,950 of caps; the design tool asks 16% more, £1,200 to
   £1,392 a month, held at the £1,200 cap; last year's £30 a seat kept for 31 seats, 9 unused for 60 days removed
   after your OK, so £930 a month; (£1,392 - £930) x 12 = £5,544 a year. The supplier outcome is the hero run's model:
   $16,000 a month x (18% + 6%) x 12 = $46,080. */

export const page: Page = {
  meta: {
    path: '/founders',
    title: 'Obsession for founders: test every release as a customer',
    description:
      'Declared AI agents with their own inbox, phone and browser sign up at every prospect to find the gap you fix and test every release as a new customer.',
    answer:
      'Obsession gives founders declared AI agents that meet your business as a customer every day and after every release, checking your sign up, checkout, support bot and follow ups, and that work your prospects, rivals, invoices and renewals within your limits. You get signed proof of what works, what broke and your next move.',
    ogImage: '/og/founders.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Founders', path: '/founders' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'AI agents that help your business win and keep customers.',
    sub: 'You built the product, the funnel and the AI agents that talk to your customers, and you can’t watch them all. A sign up breaks after a release, the support bot promises the wrong refund, a lead waits a day for a reply, and you hear it from a customer. Obsession’s AI agents meet your business the way your customers do, every day and after every release, and they work your prospects, rivals, invoices and renewals within your limits. You get signed proof of what works, what broke and your next move.',
    capture: {
      kind: 'waitlist',
      source: 'founders-hero',
      button: 'Get early access',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your access, and nothing else.',
      roles: {
        question: 'What should your agents do first?',
        options: ['Find customers with proof', 'Test every release', 'Watch rivals', 'Get paid', 'Mystery shop my store', 'Something else'],
      },
      interest: 'any',
    },
    secondary: { label: 'See a real store check', to: '/sample-output' },
    proof: [
      { value: 'Every company', label: 'on your list, at once and continuously' },
      { value: 'Every step', label: 'signed, so anyone can check it' },
      { value: '0 basket reminders', label: 'in 48 hours, found on a real store' },
    ],
    consoleHeading,
    demos: [
      {
        tab: 'Find customers',
        recipe: 'prospect',
        task: 'Start a free trial with no card at each of the 15 SaaS companies on our list. Tell me whose onboarding goes quiet. Never reply, and close the trial if a rep writes or calls.',
        targets: '15 SaaS companies, from Clay',
        journey: ['Start a free trial, no card', 'Say it’s an AI agent', 'Never reply', 'Close if a rep writes or calls'],
        schedule: 'Each trial, start to end',
        report: 'Clay columns and a proof page',
        kit: ['Agent ID, declared as AI', '15 trial inboxes', 'Own browser', 'Watched until each trial ends'],
        events: [
          { time: 'Day 1, 09:00', text: '12 free trials started, each by a declared AI agent.' },
          { time: 'Day 1, 09:05', text: '3 skipped: they need a card or a sales call.' },
          { time: 'Day 3', text: 'Setup tips from 8 companies. 4 silent since the welcome email.' },
          { time: 'Day 5', text: 'A rep writes at 1 company. Trial closed, no reply sent.' },
          { time: 'Day 14', text: 'Trials end. Still nothing from 4. Proof ready for your OK.' },
        ],
        finding: '4 of 12 sent nothing between the welcome email and the end of the trial.',
        fix: '4 gaps with signed proof go to Clay after your OK. You write and send each opener.',
        ledger: 'Example run. Every email signed, so each company can check its own proof.',
      },
      {
        tab: 'Inbound quotes',
        recipe: 'quotes',
        task: 'Answer every request for a price, from a person or a buyer’s AI agent, from our price book in minutes. Follow up until it’s a yes or a no.',
        targets: 'Your form, inbox, line and buyers’ AI agents',
        journey: ['Say it’s your AI agent', 'Quote from your price book', 'Stay inside your limits', 'Follow up until yes or no'],
        schedule: 'Every request, day and night',
        report: 'Every quote in your CRM, Slack on a yes',
        kit: ['Agent ID, names your company', 'Own inbox and number', 'Your price book and limits', 'Your CRM and calendar'],
        events: [
          { time: 'Sun 03:12', text: 'A buyer’s AI agent asks for 40 seats on 2 years, and says who it acts for.' },
          { time: 'Sun 03:14', text: 'Quote sent from your price book: 12% off for 2 years, as your rule allows.' },
          { time: 'Sun 03:20', text: 'It asks for 18%. Held at 12%, with quarterly billing offered instead.' },
          { time: 'Mon 09:02', text: 'The buyer books a call with you for Thursday.' },
          { time: 'Tue 11:40', text: 'They ask for a custom term. It’s outside your price book, so it comes to you.' },
        ],
        finding: 'Quoted 2 minutes after a Sunday 03:12 request, held at 12%, and a call booked.',
        fix: 'A reply on the custom term, drafted for your OK.',
        ledger: 'Example run. Every quote, counter and reply signed, and in your CRM.',
      },
      {
        tab: 'Test releases',
        recipe: 'audit',
        task: 'After every release, sign up to our app as a new customer, enter the login code and open every email link. Flag anything that breaks.',
        targets: 'Your app, on phone and desktop',
        journey: ['Sign up with a fresh inbox', 'Enter the login code', 'Open every email link', 'Stop before payment'],
        schedule: 'After every release',
        report: 'A Slack alert per release',
        kit: ['Agent ID, declared as AI', 'Fresh inbox each run', 'Own phone number', 'Starts on every release'],
        events: [
          { time: 'Thu 06:02', text: 'Release goes live. A fresh test customer signs up on a phone.' },
          { time: '06:03', text: 'Login code arrives by text in 9 seconds. It works.' },
          { time: '06:04', text: 'Welcome email arrives. Its setup link opens an error page.' },
          { time: '06:06', text: 'Slack alert with the release, the screenshot and the broken link.' },
          { time: '07:41', text: 'Fix live. A new test customer runs it again: the setup link opens.' },
        ],
        finding: 'Every welcome email since 06:02 sent new customers to an error page.',
        fix: 'A redirect for the old link, drafted. Live after your OK, tested again at 07:41.',
        ledger: 'Example run. Every step timed, screenshotted and signed.',
      },
      {
        tab: 'Get paid',
        recipe: 'get-paid',
        task: 'Chase our 11 overdue invoices by email and phone until they’re paid. Be polite, stop if asked, and escalate only after my OK.',
        targets: '11 overdue invoices, from your accounting tool',
        journey: ['Email each customer', 'Call if no reply', 'Match every payment', 'Escalate after your OK'],
        schedule: 'Every 3 working days until paid',
        report: 'A Slack note and a weekly cash sheet',
        kit: ['Agent ID, names your company', 'Accounts inbox', 'Phone number', 'Invoices, read only, connected by you'],
        events: [
          { time: 'Day 1, 09:00', text: '11 overdue invoices read: $38,400, from 9 to 64 days late.' },
          { time: 'Day 1, 09:10', text: 'Each customer emailed by your declared AI agent, invoice attached.' },
          { time: 'Day 3', text: '5 paid, $14,200. Each payment matched to its invoice.' },
          { time: 'Day 4', text: '6 unpaid customers called. 4 give a date. 1 disputes a line.' },
          { time: 'Day 21', text: '9 of 11 paid: $33,100. 2 wait for your OK.' },
        ],
        finding: '$33,100 of $38,400 paid by day 21. 2 invoices need your call.',
        fix: 'A credit note for the disputed line and a final notice, drafted. Sent after your OK.',
        ledger: 'Example run. Every email, call and payment dated and signed.',
      },
      {
        tab: 'Supplier quotes',
        recipe: 'supplier-quotes',
        task: 'Our packaging supplier wants 18% more. Get 3 quotes for our next order, push back, and chase until the price is in writing.',
        targets: 'Your supplier, and 5 others to quote',
        journey: ['Ask 5 suppliers to quote', 'Say who it works for', 'Push back with the quotes', 'Chase until it’s in writing'],
        schedule: 'Daily until it’s in writing',
        report: 'A quote sheet and a Slack note',
        kit: ['Agent ID, names your company', 'Buying inbox', 'Phone number', 'Your order details'],
        events: [
          { time: 'Day 1, 08:30', text: 'Notice read: 18% more, $2,880 extra on every monthly order.' },
          { time: 'Day 1, 09:15', text: '5 suppliers asked to quote your order by your declared AI agent.' },
          { time: 'Day 4', text: '3 quotes back. The lowest is 6% under today’s price.' },
          { time: 'Day 5', text: 'Pushback sent after your OK. Your supplier matches the lowest quote for 12 months.' },
          { time: 'Day 9', text: 'New price confirmed in writing after 2 chases.' },
        ],
        finding: 'The 18% rise dropped and 6% off, held for 12 months: $46,080 kept this year.',
        fix: 'Acceptance drafted, sent after your OK. Quotes run again in month 11.',
        ledger: 'Example run. Every quote, reply and chase dated and signed.',
      },
      {
        tab: 'Software renewals',
        recipe: 'spend',
        task: 'Put each software tool on its own card, capped at what we pay now. Hold any rise, ask to keep last year’s price, and remove seats nobody uses.',
        targets: '6 software tools, from your books',
        journey: ['1 capped card per tool', 'Hold any charge over the cap', 'Ask to keep last year’s price', 'Remove unused seats after your OK'],
        schedule: 'Every charge, and 90 days before each renewal',
        report: 'A Slack note per renewal, a monthly savings sheet',
        kit: ['Agent ID, names your company', '6 capped cards', 'Seat use, connected by you', 'Billing inbox'],
        events: [
          { time: 'Day 1', text: 'Your caps approved. 6 tools on their own cards, £4,950 a month in all.' },
          { time: 'Day 14, 06:00', text: 'The design tool renews 16% higher: £1,392 a month against a £1,200 cap. Held, not paid.' },
          { time: 'Day 14, 06:05', text: 'Seat use read: 31 of 40 seats used, 9 unused for 60 days.' },
          { time: 'Day 14, 09:10', text: 'After your OK, the vendor is asked to renew 31 seats at last year’s £30 a seat.' },
          { time: 'Day 16', text: 'The vendor agrees in writing. 9 seats removed: £930 a month from here.' },
        ],
        finding: 'A 16% rise held at the cap, last year’s price kept and 9 unused seats removed: £5,544 a year saved.',
        fix: 'The cap lowered to £930 to match, ready for your OK. The next invoice gets checked against it.',
        ledger: 'Example run. Every held charge, reply and invoice signed.',
      },
    ],
  },

  how: {
    heading: 'Pick the job and add the companies. Agents bring back signed proof.',
    sub: 'A recipe comes with its agents, inboxes and numbers already set up. Type any other job and Obsession sets them up for you.',
    steps: [
      {
        title: 'Pick a recipe, type a task, or build your own',
        line: 'Type it the way you’d brief a colleague, like “Get quotes from 40 packaging suppliers”.',
        screen: 'compose',
        chips: ['Pick a recipe', 'Type a task', 'Build on the API'],
      },
      {
        title: 'Add the companies',
        line: 'Prospects, rivals, suppliers, your own product. Every company on your list, from wherever it lives.',
        screen: 'templates',
        chips: ['Paste a list', 'Upload a CSV', 'Connect Clay', 'API'],
      },
      {
        title: 'Declared AI agents do the work',
        line: 'Each gets its own ID, inbox, phone number and browser, says it’s AI, and keeps at it continuously.',
        screen: 'kit',
        chips: ['Agent ID', 'Inbox', 'Phone number', 'Browser'],
      },
      {
        title: 'You get the proof and your next move',
        line: 'Every step signed and dated, with the next move drafted for your OK.',
        screen: 'run',
        chips: ['Email', 'PDF', 'Slack', 'Sheet', 'Clay', 'CRM', 'Webhook'],
      },
    ],
  },

  gap: {
    heading: 'You can’t sign up at every prospect and retest every release yourself. Agents can.',
    sub: 'Most tools read what a company publishes. Obsession goes through it as a customer.',
    rows: [
      {
        today: 'Lead lists sell everyone the same names',
        obsession: 'Each company comes with signed proof of the gap you fix',
      },
      {
        today: '1 company at a time, checked once',
        obsession: 'Every company on your list at once, continuously',
      },
      {
        today: 'You test releases with your own email, which your tools already know',
        obsession: 'A fresh test customer your tools have never seen, after every release',
      },
      {
        today: 'Reminders go out from your inbox, then nobody calls',
        obsession: 'A declared agent emails and calls, politely, until it’s paid',
      },
      {
        today: 'AI assistants act as you, from your own inbox and logins',
        obsession: 'Agents work under their own declared ID, inbox and number',
      },
    ],
  },

  uses: {
    heading: 'While you build, agents find, protect and collect your revenue.',
    items: [
      {
        tab: 'Leads with proof',
        moment: 'Sunday 21:00. Every name on Monday’s list looks the same.',
        outcome: 'Pitch only the companies with the gap you fix.',
        line: 'Agents join each company’s newsletter or free trial with no card, log what arrives, never reply, and close the trial if a rep writes or calls. You send the opener yourself.',
        whyOnly: 'What a company sends only reaches an inbox that signed up. Agents join all 50 at once, and every step is signed.',
        recipe: 'prospect',
        screen: 'leads',
      },
      {
        tab: 'After the switch',
        moment: 'Tuesday 07:40. 30 companies on your list switched email tools this week.',
        outcome: 'Reach them the week they switch, hire or expand.',
        line: 'Agents read every company’s public pages daily. When one switches, hires or expands, a test customer signs up that day and checks for the gap you fix.',
        whyOnly: 'Only a new subscriber sees whether the welcome emails survived the switch.',
        recipe: 'prospect',
        screen: 'switch',
      },
      {
        tab: 'Ship clean',
        moment: 'Thursday 06:02. You’ve shipped. The launch email goes at 08:00.',
        outcome: 'Catch the broken launch code before the 08:00 email sends it to everyone.',
        line: 'After every release, a fresh test customer signs up, enters the login code from the text, opens every email and tries your launch code, then stops before payment.',
        whyOnly: 'A fresh inbox and number every run, so your tools see a stranger, not you.',
        recipe: 'audit',
        screen: 'ship',
      },
      {
        tab: 'First 14 days',
        moment: 'Wednesday 10:00. Fewer sign ups pay, and nobody knows why.',
        outcome: 'Find the code, email or text new customers never get.',
        line: 'After each release, labelled test customers on UK and US numbers live your first 14 days and time every message.',
        whyOnly: 'Tests pass in seconds. Agents are still there on day 13, timing every message.',
        recipe: 'delivery',
        screen: 'qa',
      },
      {
        tab: 'Rival watch',
        moment: 'Friday 15:00. A buyer quotes a rival offer you never saw.',
        outcome: 'Answer every rival price and offer the morning it lands.',
        line: 'Declared agents join each rival’s newsletter and free trial with no card, log every email, price and offer, never reply, and close the trial if a rep writes or calls.',
        whyOnly: 'A rival can raise a price in 1 country only. Agents check from the US and UK every morning, and keep each email raw and dated.',
        recipe: 'competitor',
        screen: 'rivals',
      },
      {
        tab: 'Be found',
        moment: 'Tuesday 11:00. A buyer quotes your old hours, straight from an AI answer.',
        outcome: 'Every listing and AI answer about you, kept right.',
        line: 'Every Monday, agents check your listings and ask 4 AI assistants what buyers ask, then get every wrong fact corrected where it comes from.',
        whyOnly: 'Agents ask from a clean history, not your accounts, so they see what a stranger sees, and ask again until the answer changes.',
        recipe: 'listings',
        screen: 'listings',
      },
      {
        tab: 'Get paid',
        moment: 'Friday 17:00. 14 invoices overdue, payroll on Monday.',
        outcome: 'Every overdue invoice chased until it’s paid.',
        line: 'Each morning, agents read overdue invoices from the accounting tool you connect, then email and call each customer, politely, until it’s paid. A dispute comes to you.',
        whyOnly: 'An agent with its own inbox and number, every chase dated, and it stops the moment you’re paid.',
        recipe: 'get-paid',
        screen: 'invoices',
      },
      {
        tab: 'Cut costs',
        moment: 'Monday 09:00. Your packaging supplier wants 18% more from 1 November.',
        outcome: 'Answer every price rise with 3 written quotes.',
        line: 'When a price rise lands, a declared agent asks other suppliers to quote, then pushes back with the best 3 after your OK.',
        whyOnly: 'Their own inbox and number chase every supplier until the price is in writing. They never pay.',
        recipe: 'supplier-quotes',
        screen: 'suppliers',
      },
    ],
  },

  outcomes: {
    heading: 'Proof for every pitch, a test for every release, and hours back every week.',
    items: [
      { value: 'Every prospect', label: 'checked for the gap you fix, with signed proof you can send' },
      { value: 'Every release', label: 'tested by a fresh test customer as soon as it ships' },
      { value: 'Up to 6 hours', label: 'back a week: 2 hours each on chasing invoices, getting quotes and testing releases' },
      { value: 'Up to $46,080', label: 'a year kept on a $16,000 monthly order, if the 18% rise is dropped and you get 6% off' },
    ],
  },

  kinds: {
    heading: 'Whatever you sell, agents deal with your prospects, rivals, customers and suppliers for you.',
    label: 'Pick your business',
    items: [
      {
        name: 'SaaS',
        line: 'Every prospect’s trial checked for your gap, every release tested as a new customer, every customer near its limit offered more.',
        recipes: ['prospect', 'audit', 'delivery', 'expansion', 'competitor'],
      },
      {
        name: 'Ecommerce and DTC',
        line: 'Your store shopped by 4 test customers after every change, every ad’s page checked each morning, every customer asked for a review, and rivals’ prices logged daily.',
        recipes: ['mystery', 'adcheck', 'reviews', 'prices', 'audit'],
      },
      {
        name: 'Marketplaces',
        line: 'Both sides tested as a buyer and a seller after every release, and rivals’ fees logged from their public pages.',
        recipes: ['audit', 'competitor', 'prices', 'listings'],
      },
      {
        name: 'Fintech',
        line: 'Login codes tested on UK, US and EU numbers after every release, and rivals’ public rates logged daily.',
        recipes: ['delivery', 'email-sms', 'competitor', 'prices'],
      },
      {
        name: 'Health and wellness',
        line: 'Bookings, reminder texts and quiz results tested weekly, and what AI says about you kept right.',
        recipes: ['audit', 'delivery', 'email-sms', 'listings'],
      },
      {
        name: 'Services and consultancies',
        line: 'Overdue invoices chased, your own enquiry form timed weekly, every client offered the next service it needs, and every supplier rise met with quotes.',
        recipes: ['get-paid', 'speed', 'upsells', 'supplier-quotes', 'prospect'],
      },
      {
        name: 'Local business',
        line: 'Hours, listings and booking links checked at every location, every customer asked for a review, and every supplier rise pushed back.',
        recipes: ['listings', 'reviews', 'mystery', 'audit', 'supplier-quotes'],
      },
      {
        name: 'Consumer products',
        line: 'Your promo codes and every partner’s link tried at your own checkout, and every retailer’s price and stock for your range logged.',
        recipes: ['audit', 'partners', 'prices', 'competitor', 'email-sms'],
      },
      {
        name: 'B2B and industrial',
        line: 'Distributors’ listings of your range checked, supplier dates chased, and rivals’ price moves logged.',
        recipes: ['prices', 'competitor', 'supplier-quotes', 'prospect'],
      },
      {
        name: 'Any other business',
        line: 'Type the job in plain words. Obsession sets up the agents and runs it after your OK.',
        recipes: [],
      },
    ],
  },

  recipes: {
    heading: 'From your first prospect to your software bill, a recipe is ready to run.',
    ids: ['prospect', 'quotes', 'listings', 'expansion', 'upsells', 'reviews', 'competitor', 'trial', 'audit', 'delivery', 'mystery', 'adcheck', 'partners', 'get-paid', 'supplier-quotes', 'spend'],
  },

  proof: {
    heading: 'On a real store, 1 shopper left a basket and 1 stopped at checkout. Neither heard a thing in 48 hours.',
    line: 'September, a skincare store, name hidden, 4 test customers: a £40 gift set left in the basket at 02:57, £21 of deodorant left at checkout at 03:11. Your own sign up can get the same test customers after every release.',
    cta: { label: 'Read the report', to: '/sample-output' },
  },

  faq: {
    heading: 'Every agent says it’s AI. Nothing runs without your OK.',
    items: [
      {
        q: 'What does Obsession do for founders?',
        a: 'Obsession gives founders declared AI agents that meet your business as a customer every day and after every release, checking your sign up, checkout, support bot and follow ups, and that work your prospects, rivals, invoices and renewals within your limits. You get signed proof of what works, what broke and your next move.',
      },
      {
        q: 'What is Obsession?',
        a: 'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you. They sign up, ask the chat bot, test, quote, chase and negotiate within your limits at every company on your list, continuously, and you get signed proof and your next move.',
      },
      {
        q: 'How do I find out a competitor changed its pricing before a customer tells me?',
        a: 'Add the rival, and an Obsession agent signs up as a customer and logs every price change, offer and email the day it lands, with a dated screenshot, so you hear it first, not on a cancellation call.',
      },
      {
        q: 'How do I know when my checkout, sign up or welcome email has quietly broken?',
        a: 'An Obsession test customer signs up after every release, opens every email and link and tries your codes at checkout, stopping before payment. Every break reaches you with its screenshot and a drafted fix.',
      },
      {
        q: 'Is my store showing up when people ask AI assistants for my category, and is it quoting the right price?',
        a: 'Obsession’s Listings and AI answers asks AI assistants what your buyers ask every Monday and checks what they say about you, prices included. A wrong fact is traced to the page it came from and corrected at the source.',
      },
      {
        q: 'Is Obsession a lead list?',
        a: 'No. Obsession’s agents become each company’s customer and show you which ones have the gap your product fixes, with proof. Contact tools find names: contacts come from your own tool, and you send every message yourself.',
      },
      {
        q: 'What do agents do at a prospect or rival?',
        a: 'An Obsession agent does only what any customer can do alone: sign up, join the newsletter, start a free trial with no card, read public pages and ask the site’s chat bot. Each says it’s an AI agent from Obsession, links to useobsession.com/agents, never names you and never replies. If a person picks up the chat, or a rep writes or calls, it stops.',
      },
      {
        q: 'How is Obsession different from our own tests?',
        a: 'Obsession’s agents check what a new customer actually gets: the login code on a real phone number and the email in a real inbox, on day 1 and on day 13. Your tests check the code in seconds.',
      },
      {
        q: 'Will test customers skew my numbers?',
        a: 'No. Each Obsession test customer is labelled and has its own inbox, so you can filter it out of your sign ups and reports.',
      },
      {
        q: 'Does Obsession work for what I sell?',
        a: 'Yes, if your product fixes something a customer sees, like sign up, onboarding, emails or texts: Obsession’s agents check every prospect for that gap. If it fixes something inside a company, start by testing your own product after every release.',
      },
      {
        q: 'Do I need to write code?',
        a: 'No. Pick an Obsession recipe or type the task in plain words. The API is there if you’d rather build your own.',
      },
      {
        q: 'Can Obsession’s agents spend our money?',
        a: 'An Obsession agent spends only on a card capped at a budget you set, for a job you approved, like a software bill at the price you agreed or a test order on your own store that it refunds. Above the cap it stops and asks you, and it never signs anything for you.',
      },
      {
        q: 'How do I start?',
        a: 'Get early access to Obsession and tell us what to set up first. Nothing runs until you approve the plan. If you run a store, your first mystery shop is free, with the report within 4 days.',
      },
    ],
  },

  final: {
    heading: 'Point your first agent at Monday’s list.',
    sub: 'Or at your next release, or the invoices still unpaid. Tell us which comes first when you sign up.',
    capture: {
      kind: 'waitlist',
      source: 'founders-final',
      button: 'Get early access',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your access, and nothing else.',
      roles: {
        question: 'What should your agents do first?',
        options: ['Find customers with proof', 'Test every release', 'Watch rivals', 'Get paid', 'Mystery shop my store', 'Something else'],
      },
      interest: 'any',
    },
  },
}

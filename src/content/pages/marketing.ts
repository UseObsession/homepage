import type { Page } from '../types'

/* Marketing (/marketing). Marketing teams at brands of any kind, B2C and B2B.
   The story: what Obsession is for a marketing team (beat every rival) > how it works > the gap (James's
   line: most tools read what a company publishes, Obsession goes through it as a customer) > use cases (rival emails
   and texts, rival ads, rival prices, your own launch, AI answers and listings, your own speed to lead) > outcomes >
   every kind of brand > recipes > the real September store check > questions (red lines) > the free store mystery
   shop (a store you run, or one with the owner’s OK).
   Every console run is an example (consoleLabel says so); the only real run is the September store check, stated as
   it happened in the proof fact and the proof beat. The hero runs are B2C rival emails, a B2B rival trial and a B2B
   webinar launch, so they don't repeat the stories the use case screens tell.
   Red lines held here: at rivals, public self-serve paths only (sign ups, newsletters, text opt ins, public pages,
   the ads they run in public, the site's chat bot); never a person; rival trials need no card, never reply and close
   the moment a rep writes or calls; launch checks and speed to lead only on your own journeys. */

export const page: Page = {
  meta: {
    path: '/marketing',
    title: 'Obsession for marketing: AI agents on every rival and launch',
    description:
      'Declared AI agents sign up to every rival on your list, follow the ads they run in public and check your own launches as a customer. Every step signed.',
    answer:
      'Obsession is the intelligence infrastructure for commercial teams. For marketing teams, it runs declared AI agents, each with its own inbox, phone number and browser, that sign up to every rival on your list, follow the ads they run in public, track their prices and check your own launches as a customer, continuously, with every step signed.',
    ogImage: '/og/marketing.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Marketing', path: '/marketing' },
    ],
  },

  hero: {
    pill: 'Your first store mystery shop is free',
    headline: 'AI agents that help your brand beat every rival.',
    typed: [
      'Log every email and text our 3 rivals send',
      'Flag any rival ad that undercuts our price',
      'Screenshot every rival price change',
      'Check our launch as a new customer at 08:00',
      'Ask 4 AI assistants who’s best in our category',
      'Time how fast our demo form gets a reply',
    ],
    sub: 'Declared AI agents with their own inboxes, phone numbers and browsers sign up to every rival on your list and check your own launches as a customer, continuously. You get signed proof and your next move.',
    capture: {
      kind: 'waitlist',
      source: 'marketing-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'What should your agents do first?',
        options: [
          'Track rivals’ emails and texts',
          'Track rivals’ ads',
          'Watch rivals’ prices',
          'Check our own launches',
          'Fix what AI says about us',
          'Time our replies to new leads',
        ],
      },
      interest: 'any',
    },
    secondary: { label: 'Get my free report', to: '#join' },
    proof: [
      { value: 'Every rival', label: 'on your list, at once and continuously' },
      { value: 'Every message', label: 'a rival sends new customers, on 1 timeline' },
      { value: '0 basket reminders', label: 'in 48 hours, found on a real store' },
    ],
    consoleLabel: 'Example runs',
    demos: [
      {
        tab: 'Rival welcome offers',
        recipe: 'email-sms',
        task: 'Sign up to our 3 rivals’ emails and texts. Flag every new offer.',
        targets: 'rival-a.example, rival-b.example, rival-c.example',
        journey: ['Sign up, declared as AI', 'Opt in to texts', 'Never reply', 'Log every message'],
        schedule: 'Continuously, digest Mondays 08:00',
        report: 'Slack alerts and a weekly digest',
        kit: ['Agent ID', '3 inboxes', '3 phone numbers', '3 browsers'],
        events: [
          { time: 'Mon 07:02', text: 'Signed up to 3 rivals as a declared AI agent' },
          { time: 'Mon 07:04', text: 'Rival A welcome email: 15% off your first order' },
          { time: 'Tue 19:30', text: 'Rival C text: free delivery this weekend only' },
          { time: 'Wed 10:15', text: 'Rival A second email: the code rises to 20%' },
          { time: 'Fri 08:00', text: 'Rival B: 3 emails in 24 hours, all for a new bundle' },
        ],
        finding: 'Rival A raises its welcome code to 20% on day 3 for anyone who hasn’t bought.',
        fix: 'A day 3 email for your own welcome series, drafted for your OK.',
        ledger: 'Every message kept with its time, headers and screenshot. Every step signed.',
      },
      {
        tab: 'Rival free trial',
        recipe: 'trial',
        task: 'Start Rival A’s free trial with no card. Log every email, prompt and offer until it ends.',
        targets: 'rival-a.example, an invoicing app',
        journey: ['Free trial, no card', 'Declared as AI', 'Never reply', 'Close if a rep writes or calls'],
        schedule: 'For the length of the trial',
        report: 'Day by day PDF and a Slack summary',
        kit: ['Agent ID', 'Own inbox', 'Own browser', 'Watched to the last day'],
        events: [
          { time: 'Day 0, 10:00', text: 'Started a free trial with no card, declared as an AI agent' },
          { time: 'Day 0, 10:01', text: 'Welcome email with a setup checklist' },
          { time: 'Day 3, 09:00', text: 'Case study email and a tour inside the app' },
          { time: 'Day 12, 09:00', text: 'Reminder: 2 days left, 20% off a year upfront' },
          { time: 'Day 14, 11:00', text: 'Trial ends. 30% off arrives an hour later.' },
        ],
        finding: 'Rival A’s best offer, 30% off, only goes to people who let the trial end.',
        fix: 'Your own trial end email and comparison page, drafted to answer it. Live after your OK.',
        ledger: 'No rep got in touch, so the trial ran to the end. Every step signed.',
      },
      {
        tab: 'Your webinar',
        recipe: 'delivery',
        task: 'When our webinar invite goes out, sign up as new guests in the UK and US. Check every link, the calendar invite and each reminder.',
        targets: 'your-company.example, UK and US',
        journey: ['Sign up, declared as AI', 'Open every link', 'Add the calendar invite', 'Watch every reminder'],
        schedule: 'At the send, then until the webinar',
        report: 'Slack alert, then a PDF',
        kit: ['Agent ID', '4 inboxes', 'UK and US calendars', 'Phone and desktop'],
        events: [
          { time: 'Tue 10:00', text: 'The invite lands in 4 inboxes, UK and US' },
          { time: 'Tue 10:02', text: 'Sign up works on phone and desktop. Confirmation in 40 seconds.' },
          { time: 'Tue 10:03', text: 'US calendar invites say 15:00 New York time. The webinar starts at 10:00 there.' },
          { time: 'Wed 09:00', text: 'The reminder arrives. Its join link opens a page that doesn’t exist.' },
          { time: 'Wed 09:40', text: 'Both fixed after your OK. Tested again: the invite and the link work.' },
        ],
        finding: 'US guests would have joined 5 hours late, and the reminder’s join link was broken.',
        fix: 'Time zone and link fixed in the tool you connected, after your OK, then tested again.',
        ledger: 'Every email, invite and link timed and signed.',
      },
    ],
  },

  how: {
    heading: 'Pick the job, add your rivals, and declared agents do the legwork.',
    sub: 'A recipe arrives with its agents, inboxes, numbers and schedule set up. Type a task and Obsession sets them up for you.',
    steps: [
      {
        title: 'Pick a recipe, type a task, or build your own',
        line: 'Recipes cover the checks you repeat on every rival and launch. Type anything else in plain words, or build on the API.',
        screen: 'compose',
        chips: ['Pick a recipe', 'Type a task', 'Build on the API'],
      },
      {
        title: 'Add the companies',
        line: 'Your rivals, your own store or funnel, every company on your list.',
        screen: 'templates',
        chips: ['Paste a list', 'Upload a CSV', 'Connect Clay', 'API'],
      },
      {
        title: 'Declared AI agents run it',
        line: 'Each gets its own ID, inbox, phone number and browser, says it’s AI, and keeps going continuously. Nothing to install.',
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
    heading: 'Most tools read what a company publishes. Obsession goes through it as a customer.',
    sub: 'A rival’s best offers go to its subscribers, not its homepage.',
    rows: [
      {
        today: 'A teammate signs up to rivals from a personal inbox',
        obsession: 'Each agent has its own inbox and number, and says it’s AI',
      },
      {
        today: '1 rival at a time, when someone remembers',
        obsession: 'Every rival on your list at once, continuously',
      },
      {
        today: 'Your email tool shows what was sent',
        obsession: 'Agents show what each customer actually got',
      },
      {
        today: 'Your launch tested once, from the office',
        obsession: 'Checked as a new customer in each country, and again after every fix',
      },
      {
        today: 'Ad and price screenshots in a folder, easy to doubt',
        obsession: 'Every step signed and dated, so anyone can check it',
      },
    ],
  },

  uses: {
    heading: 'See your rivals’ whole playbook, and every break in your own.',
    items: [
      {
        tab: 'Rival emails and texts',
        moment: 'Thursday, 19:02. Rival B emails “20% off ends tonight”, and your team hears about it next week.',
        outcome: 'Every email and text your rivals send, on 1 timeline, the minute it lands.',
        line: 'An agent signs up to each rival with its own inbox and number, says it’s AI, and logs every message, offer and code. It never replies.',
        whyOnly: 'Texts and subscriber codes only reach subscribers. Agents subscribe at every rival on your list at once.',
        recipe: 'email-sms',
        screen: 'inbox',
      },
      {
        tab: 'Rival ads',
        moment: 'Friday, 07:06. Rival A started 9 new ads overnight, and 1 sells its gift set at £56, £2 under yours.',
        outcome: 'The ads your rivals run in public, read every morning and followed to the page, the price and the code.',
        line: 'Agents read the ads each rival runs in public, open every page they point to on phone and desktop, and screenshot the offer. They open the page directly, so nobody pays for a click.',
        whyOnly: 'Ad trackers stop at the ad. Agents follow it to the page and the code, then check it against what the rival emails its subscribers.',
        recipe: 'ads',
        screen: 'ads',
      },
      {
        tab: 'Rival prices',
        moment: 'Monday, 06:04, 4 days before Black Friday. Rival B cuts its bestseller from £24 to £19 and ships it free.',
        outcome: 'Every price, offer and delivery change, screenshotted the morning it happens, next to yours.',
        line: 'Agents read each rival’s prices, offers and delivery costs every morning, from a browser in your country, and line them up next to yesterday’s and yours.',
        whyOnly: 'Price tools read the price on the page. Agents are on each rival’s list too, so they also catch the subscriber code that beats it.',
        recipe: 'prices',
        screen: 'prices',
      },
      {
        tab: 'Your launch',
        moment: 'Tuesday, 08:00. The autumn launch goes out, and the code only works for customers who’ve bought before.',
        outcome: 'Broken codes, links and texts caught in the first minutes, then tested again after the fix.',
        line: 'Declared test customers on your own list get the launch on phone and desktop in each country, open every link and try every code, stopping before payment.',
        whyOnly: 'A test send only reaches your own team. Agents join your list as new customers, so they catch the US text that never came and the code that refused them.',
        recipe: 'delivery',
        screen: 'campaign',
      },
      {
        tab: 'AI answers and listings',
        moment: 'Monday, 09:00. A buyer asks an AI assistant for the best in your category. It names 3 rivals and says your Leeds branch has closed.',
        outcome: 'What AI assistants tell your buyers, asked again every Monday, and every wrong listing claimed, corrected or chased.',
        line: 'Agents ask the assistants your buyers use the same questions each week, find the listings behind the answers, and fix yours after your OK.',
        whyOnly: 'A visibility score stops at the score. Agents fix each wrong fact at its source, through the site’s own correction route and after your OK, then ask again to prove it.',
        recipe: 'listings',
        screen: 'listings',
      },
      {
        tab: 'Your speed to lead',
        moment: 'Friday, 13:00. A lead fills in your demo form and waits 4 hours, because the form routes to nobody.',
        outcome: 'Every form, chat and phone line timed from a new lead’s side, with the slow route fixed and tested again.',
        line: 'A declared test lead uses your own form, chat and phone each day and times every first reply, then checks who picked it up.',
        whyOnly: 'Your CRM shows the lead arrived. Only a lead on the other side sees the phone ring out and the form go to nobody.',
        recipe: 'speed',
        screen: 'inbound',
      },
    ],
  },

  outcomes: {
    heading: 'Your team stops checking rivals by hand and starts answering them.',
    items: [
      { value: 'Up to 18 hours', label: 'back a month, if your team spends 90 minutes a week on each of 3 rivals' },
      { value: 'The same morning', label: 'a rival’s new price or ad reaches your Slack, screenshot attached' },
      { value: 'Within minutes', label: 'of every send, a broken link, code or text flagged as a customer sees it, with the fix drafted' },
      { value: 'Every Monday', label: 'what AI assistants tell your buyers, asked again, with every wrong listing chased' },
    ],
  },

  kinds: {
    heading: 'If a customer can sign up, an agent can see what they get.',
    label: 'What you sell',
    items: [
      {
        name: 'Ecommerce brands',
        line: 'Rivals’ emails, texts, codes and prices, and every launch of yours checked as a new customer.',
        recipes: ['email-sms', 'prices', 'ads', 'delivery'],
      },
      {
        name: 'Subscription brands and apps',
        line: 'What rivals send in a new customer’s first month, and whether your own onboarding emails and texts arrive.',
        recipes: ['email-sms', 'delivery', 'mystery'],
      },
      {
        name: 'B2B software',
        line: 'Rivals’ free trials, emails and pricing pages, and every reply to your own demo form timed.',
        recipes: ['trial', 'competitor', 'speed'],
      },
      {
        name: 'Clinics, gyms and local chains',
        line: 'What AI assistants and listings say about every location, and how fast your enquiries get an answer.',
        recipes: ['listings', 'speed'],
      },
      {
        name: 'Travel and hospitality',
        line: 'Rivals’ prices and offers in every market you sell in, and your own booking journey checked.',
        recipes: ['prices', 'ads', 'mystery'],
      },
      {
        name: 'Any other brand',
        line: 'If your customers sign up, book or buy online, type the job. Obsession sets it up and agents run it.',
        recipes: [],
      },
    ],
  },

  recipes: {
    heading: 'From a rival’s first email to your own launch, a recipe is ready to run.',
    ids: ['competitor', 'email-sms', 'ads', 'prices', 'delivery', 'listings', 'speed', 'trial', 'mystery'],
  },

  proof: {
    heading: '2 test customers left full baskets. Neither got a reminder in 48 hours.',
    line: 'A real check of a skincare store in September, name hidden: 4 test customers, watched for 48 hours. A £40 gift set left in the basket at 02:57 and a £21 deodorant left at checkout at 03:11 got no reminder.',
    cta: { label: 'Read the full report', to: '/sample-output' },
  },

  faq: {
    heading: 'Rivals see a declared AI agent, never a fake customer.',
    items: [
      {
        q: 'Do rivals know it’s an AI agent?',
        a: 'Yes. Every agent says it’s an AI agent and links to useobsession.com/agents, a page explaining Obsession. It never names you.',
      },
      {
        q: 'What will an agent never do at a rival?',
        a: 'Buy, reply, book a call, or ask a person anything. It uses only what any customer can: sign ups, newsletters, text opt ins, public pages, the ads they run in public and the site’s chat bot. If a person picks up the chat, the step ends. Nothing behind a login it wasn’t given.',
      },
      {
        q: 'Can it sign up to a rival’s free trial?',
        a: 'Only when no card is needed. It says it’s AI, never replies, and closes the trial the moment a rep writes or calls.',
      },
      {
        q: 'Can I pick any competitor?',
        a: 'Yes. You name the company. It doesn’t need to be in anyone’s library first.',
      },
      {
        q: 'How far back does it go?',
        a: 'From the day you add a rival. Every message from then on is dated from a known sign up, so you see the whole series and its rhythm, not a pile of old emails.',
      },
      {
        q: 'How many rivals can we track?',
        a: 'As many as you add. Every rival on your list runs at once, continuously.',
      },
      {
        q: 'Which channels does it cover?',
        a: 'At rivals: emails, texts, the ads they run in public, prices, offers and pages. On your own: launches, codes, forms, chat, phone, listings and what AI assistants say about you.',
      },
      {
        q: 'Does it need access to our own tools?',
        a: 'Only to fix something. Checks run from outside, the way a customer sees you. A fix goes through a tool you connect and can disconnect at any time, and only after your OK.',
      },
      {
        q: 'What’s in the free report?',
        a: 'Name a store you run. 4 test customers sign up, browse and leave baskets, stopping before payment, and every inbox is watched for 48 hours. Within 4 days you get what arrived, what didn’t, and the fix.',
      },
    ],
  },

  final: {
    heading: 'See what your own customers get. The first report is free.',
    sub: 'Name a store you run. 4 test customers shop it as new customers, every inbox is watched for 48 hours, and your report arrives within 4 days.',
    capture: {
      kind: 'mystery',
      source: 'marketing-final',
      button: 'Get my free report',
      placeholder: 'Store address, e.g. your-store.example',
      micro: 'No store? Leave the address blank and you join the waitlist. We keep your email to send your report and tell you about Obsession, and nothing else.',
      orWaitlist: true,
      roles: {
        question: 'What should your test customers check first?',
        options: ['Welcome emails', 'Browse reminders', 'Basket reminders', 'Checkout follow ups'],
      },
      interest: 'mystery',
    },
  },
}

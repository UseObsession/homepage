import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Marketing (/marketing). Marketing teams at brands of any kind, B2C and B2B, organised by marketing function (Seun,
   3 Oct): rivals are 1 strand, Product marketing, not the whole page.
   The story: what Obsession is for a marketing team (win, convert and keep customers) > how it works > the gap (James's
   line: most tools read what a company publishes, Obsession goes through it as a customer; a dashboard shows what you
   sent, spent and published, only a customer sees what arrived) > use cases, 1 tab per function in the order a
   customer meets them: win (Brand and AI search, Product marketing, Demand generation), convert (Performance,
   Partnerships, Ecommerce), keep (Lifecycle, Retention), each with its own screen and the recipe it runs on >
   outcomes, 1 per stage plus the hours back > every team: the same 8 functions in the same order, each in its own
   words with all its recipes > recipes > the real September store check > questions (red lines) > the free store
   mystery shop (a store you run, or one with the owner's OK).
   Screens, none twice: how it works compose, templates, kit, run; use cases listings, inbox, inbound, adcheck,
   partners, checkout, campaign, reviews. The hero runs are words only (a B2B webinar, rival prices, your own cancel
   requests, a B2B rival trial), so none repeats a use case's story; the console opens on your own job, not a rival.
   The 2 Monday tabs open on different minutes (Performance 07:04, Partnerships 07:12).
   Every console run and use case screen is an example (the Example tags say so); the only real run is the September
   store check, stated as it happened in the proof fact and the proof beat.
   Red lines held here: at rivals, only the public paths any customer can use (sign ups, newsletters, text opt ins,
   public pages, the ads they run in public, the site's chat bot), never a person; rival trials need no card, never
   reply and close the moment a rep writes or calls; your own ads are never clicked (an agent opens each ad's page,
   never the ad), and pausing, restarting or changing 1 waits for your OK; partner checks read links, codes and
   creative only, never partner prices, and every note goes from your own team after your OK; every customer is asked
   for a review the same way, with the same review link, good or bad, from your own address;
   launch checks, lead leaks and checkout tests run on your own journeys only.
   Up-to-50 rule: up to $2,870 a week saved is Ad landing check's example (Ad 4 at $410 a day, 7 × $410; "saved",
   never "back", which reads as "ago"); up to 18 hours a
   month is 90 minutes a week on each of 3 rivals for 4 weeks (1.5 × 3 × 4). */

export const page: Page = {
  meta: {
    path: '/marketing',
    title: 'Obsession for marketing: AI agents to win and keep customers',
    description:
      'AI agents for marketing teams check every ad, partner link, launch and lead as a customer would, track every rival and draft each fix. Every step signed.',
    answer:
      'Obsession is the intelligence infrastructure for commercial teams. For marketing teams, it runs declared AI agents, each with its own inbox, phone number and browser, that go through your ad landing pages, partner links, launches, forms and checkout as a customer would, sign up to every rival on your list and correct what AI assistants say about you, continuously, with every step signed.',
    ogImage: '/og/marketing.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Marketing', path: '/marketing' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'AI agents that help your marketing team win, convert and keep customers.',
    sub: 'Declared AI agents with their own inboxes, phone numbers and browsers go through your ad landing pages, partner links, launches and checkout as a customer would, and sign up to every rival on your list, continuously. You get signed proof and the fix, ready for your OK.',
    capture: {
      kind: 'waitlist',
      source: 'marketing-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'What should your agents do first?',
        options: [
          'Fix what AI says about us',
          'Track rivals’ offers and prices',
          'Time our replies to new leads',
          'Check our ads land on working pages',
          'Check partner links and codes',
          'Check our launches',
          'Ask customers for reviews',
        ],
      },
      interest: 'any',
    },
    secondary: { label: 'Get my free report', to: '#join' },
    proof: [
      { value: 'Every live ad’s page', label: 'opened as a customer each morning' },
      { value: 'Every rival', label: 'on your list, at once and continuously' },
      { value: '0 basket reminders', label: 'in 48 hours, found on a real store' },
    ],
    consoleHeading,
    demos: [
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
      {
        tab: 'Rival prices',
        recipe: 'prices',
        task: 'Every morning, read our 3 rivals’ prices, offers and delivery costs on the products we both sell. Flag every cut next to our own price.',
        targets: 'rival-a.example, rival-b.example, rival-c.example',
        journey: ['Read public pages and email lists', 'From a browser in your country', 'Screenshot before and after', 'Line it up next to yours'],
        schedule: 'Every morning at 06:00',
        report: 'Slack alerts in #pricing and a weekly digest',
        kit: ['Agent ID', '3 browsers', '3 inboxes on their lists', 'A screenshot of every price'],
        events: [
          { time: 'Sun 06:02', text: 'Rival B’s soy candle: £24, the same as yours, plus £3.95 delivery.' },
          { time: 'Mon 06:04', text: 'Rival B cuts it to £19 and ships it free, 4 days before Black Friday.' },
          { time: 'Mon 06:05', text: 'Its reed diffuser and wax melts drop too: 3 prices cut overnight.' },
          { time: 'Mon 06:06', text: 'Rivals A and C hold their prices. Before and after screenshots saved.' },
          { time: 'Mon 06:07', text: 'Alert sent to #pricing, with your price next to each cut.' },
        ],
        finding: 'Rival B now sells its soy candle £5 under yours, with free delivery, 4 days before Black Friday.',
        fix: 'A price match or a delivery offer on your soy candle, drafted for your OK.',
        ledger: 'Every price, page and screenshot dated and signed.',
      },
      {
        tab: 'Your cancellations',
        recipe: 'saves',
        task: 'When a subscriber, or their AI assistant, asks to cancel, offer 1 pause next to “cancel now”, and do what they pick at once.',
        targets: 'Phone, email, chat and AI assistants',
        journey: ['Say it’s your AI agent', 'Confirm it’s the subscriber', '1 pause next to cancel now', 'Do what they pick at once'],
        schedule: 'Every cancel request, as it lands',
        report: 'A weekly note: pauses, cancels and returns',
        kit: ['Agent ID, names your brand', 'Own inbox and number', 'Your billing, connected by you', 'Offers you approved'],
        events: [
          { time: 'Mon 08:14', text: 'An AI assistant asks to cancel. A code to the subscriber’s phone confirms it’s them.' },
          { time: 'Mon 08:15', text: '1 reply: cancel now, or pause for 2 months. Each takes 1 step.' },
          { time: 'Mon 08:16', text: 'The assistant picks the pause. Billing updated, a check in set for 1 Dec.' },
          { time: 'Mon 11:30', text: 'Another asks to cancel, no offers. Cancelled at once, confirmed by email.' },
          { time: 'Fri 17:00', text: 'This week: 41 requests, 12 from AI assistants. 9 paused, 32 cancelled at once.' },
        ],
        finding: '9 of 41 chose a pause. Every cancel was done the minute it was asked for.',
        fix: '2 refunds outside your policy wait for your team, with the history attached.',
        ledger: 'Every request, offer and choice dated and signed.',
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
    ],
  },

  how: {
    heading: 'Pick the job, add your ads, partners and rivals, and declared agents do the legwork.',
    sub: 'A recipe arrives with its agents, inboxes, numbers and schedule set up. Type a task and Obsession sets them up for you.',
    steps: [
      {
        title: 'Pick a recipe, type a task, or build your own',
        line: 'Recipes cover the checks your team repeats: every ad, launch, partner and rival. Type anything else in plain words, or build on the API.',
        screen: 'compose',
        chips: ['Pick a recipe', 'Type a task', 'Build on the API'],
      },
      {
        title: 'Add the companies',
        line: 'Your own store, ads, partners and pages, your rivals, every company on your list.',
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
    sub: 'Your dashboards show what you sent, spent and published. Only a customer sees what arrived.',
    rows: [
      {
        today: 'Your ad dashboard counts the click',
        obsession: 'Agents open the page it lands on, every morning',
      },
      {
        today: 'A partner’s old code found when a customer complains',
        obsession: 'Every partner’s link and code tried in your basket each week',
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
        today: 'A teammate signs up to rivals from a personal inbox',
        obsession: 'Each agent has its own inbox and number, and says it’s AI',
      },
      {
        today: 'Screenshots in a folder, easy to doubt',
        obsession: 'Every step signed and dated, so anyone can check it',
      },
    ],
  },

  uses: {
    heading: 'From the first search to the next order, every team in marketing sees what its customers see.',
    items: [
      {
        tab: 'Brand and AI search',
        moment: 'Monday, 09:00. A buyer asks an AI assistant for the best in your category. It names 3 rivals and says your Leeds branch has closed.',
        outcome: 'Every wrong fact AI assistants tell your buyers corrected at its source, and asked again every Monday until the answer changes.',
        line: 'Agents ask the assistants your buyers use the same questions each week, trace each wrong answer to the page it cites, and get it corrected there after your OK.',
        whyOnly: 'A visibility score stops at the score. Agents fix each wrong fact at its source, through the site’s own correction route and after your OK, then ask again to prove it.',
        recipe: 'listings',
        screen: 'listings',
      },
      {
        tab: 'Product marketing',
        moment: 'Friday, 09:14. Rival B texts its subscribers a free gift over £40, the morning after its 20% off ended. Your team hears about it next week.',
        outcome: 'Every rival’s emails, texts and offers on 1 timeline, the minute they land.',
        line: 'An agent signs up to each rival with its own inbox and number, says it’s AI, and logs every message, offer and code. It never replies.',
        whyOnly: 'Texts and subscriber codes only reach subscribers. Agents subscribe at every rival on your list at once.',
        recipe: 'email-sms',
        screen: 'inbox',
      },
      {
        tab: 'Demand generation',
        moment: 'Monday, 09:00. A lead fills in your demo form and waits 4 hours 12 minutes for a reply, because the form routes to nobody.',
        outcome: 'Every form, chat and phone line timed from a new lead’s side, with the slow route fixed and tested again.',
        line: 'A labelled test lead uses your own form, chat and phone at 09:00, 13:00 and 17:00 each day, times every first reply and checks who picked it up.',
        whyOnly: 'Your CRM shows the lead arrived. Only a lead on the other side sees the phone ring out and the form go to nobody.',
        recipe: 'speed',
        screen: 'inbound',
      },
      {
        tab: 'Performance',
        moment: 'Monday, 07:04. Ad 4 is spending $410 a day sending clicks to a table lamp that’s sold out.',
        outcome: 'Every live ad’s landing page opened as a customer each morning, and the 1 that can’t sell paused after your OK.',
        line: 'An agent opens the landing page of every live ad on a phone and a desktop, without clicking the ad, and checks the page loads, the offer and price match, and the product is in stock.',
        whyOnly: 'Your ad dashboard counts the click. Only a visit to the page shows the sold out sign, and agents make that visit every morning.',
        recipe: 'adcheck',
        screen: 'adcheck',
      },
      {
        tab: 'Partnerships',
        moment: 'Monday, 07:12. Deals site still shows your summer sale, and its code, SUMMER20, ended on 31 Aug.',
        outcome: 'Every partner’s link, code and banner tried as a customer each week, with a note ready for any that’s out of date.',
        line: 'An agent visits each partner’s page, follows your link to your store and tries their code in your basket, stopping before payment. Links, codes and creative only, never partner prices.',
        whyOnly: 'Partner reports show the sales that came through. Only a customer’s visit shows the code that turned the rest away.',
        recipe: 'partners',
        screen: 'partners',
      },
      {
        tab: 'Ecommerce',
        moment: 'Saturday, 09:16. An AI assistant shopping for a customer adds your linen shirt to the basket, and the basket comes back empty.',
        outcome: 'A real order through every AI checkout into your store each month, refunded, and the fix for any that breaks.',
        line: 'A declared AI agent buys through each path an AI shopper can use, on a card capped to that order, inside a monthly budget you set. It checks the order, refunds it and drafts the fix for any path that breaks.',
        whyOnly: 'A check that stops before payment can’t tell you whether an AI shopper can pay. Agents buy for real on their own capped cards, then refund.',
        recipe: 'checkout',
        screen: 'checkout',
      },
      {
        tab: 'Lifecycle',
        moment: 'Tuesday, 08:00. The autumn launch goes out, and LAUNCH20 only works for customers who’ve bought before.',
        outcome: 'Broken codes, links and texts caught in the first minutes, then tested again after the fix.',
        line: 'Labelled test customers on your own list get the launch on phone and desktop, with UK and US numbers. They open every link and try every code, stopping before payment.',
        whyOnly: 'A test send only reaches your own team. Agents join your list as new customers, so they catch the US text that never came and the code that refused them.',
        recipe: 'delivery',
        screen: 'campaign',
      },
      {
        tab: 'Retention',
        moment: 'Friday, 17:00. 42 customers got an order, finished onboarding or had a ticket solved this month, and nobody has asked them how it went.',
        outcome: 'Every customer asked the same way at their moment, with 1 review link for all, and every complaint passed to your team the same day.',
        line: 'When an order is delivered, onboarding is done or a ticket is solved, an agent asks that customer “How did we do? Leave us a review, good or bad.” from your own address, in words your team approved.',
        whyOnly: 'Agents watch for each moment in the tools you connect, so every customer is asked, including the ones nobody would have remembered.',
        recipe: 'reviews',
        screen: 'reviews',
      },
    ],
  },

  outcomes: {
    heading: 'Your team stops checking by hand and starts fixing what customers see.',
    items: [
      { value: 'Every Monday', label: 'what AI assistants tell your buyers, asked again, with every wrong fact corrected at its source' },
      { value: 'Up to $2,870', label: 'a week saved on 1 ad that sent clicks to a sold out page, at $410 a day' },
      { value: 'Within minutes', label: 'of every send, a broken link, code or text flagged as a customer sees it, with the fix drafted' },
      { value: 'Up to 18 hours', label: 'back a month, if your team spends 90 minutes a week on each of 3 rivals' },
    ],
  },

  kinds: {
    heading: 'Each team in marketing gets agents for its own job.',
    label: 'Your team',
    items: [
      {
        name: 'Brand and AI search',
        line: 'Show up right wherever buyers and AI assistants look: maps, review sites and AI answers, with every wrong fact fixed at its source.',
        recipes: ['listings', 'reviews'],
      },
      {
        name: 'Product marketing',
        line: 'Know every rival’s offers, pricing, trials and launches the day they land, so your positioning answers them.',
        recipes: ['competitor', 'email-sms', 'trial', 'ads', 'prices'],
      },
      {
        name: 'Demand generation',
        line: 'Know every lead you paid for gets a fast answer, every webinar invite and nurture email arrives, and how rival trials compare with yours.',
        recipes: ['speed', 'delivery', 'trial'],
      },
      {
        name: 'Performance',
        line: 'Know every live ad lands on a page that loads, matches the ad and has stock, and see each new rival ad the morning it starts.',
        recipes: ['adcheck', 'ads', 'audit'],
      },
      {
        name: 'Partnerships',
        line: 'Know every affiliate, creator and partner shows your current code, offer and banner, and every link lands where it should.',
        recipes: ['partners'],
      },
      {
        name: 'Ecommerce',
        line: 'Your store shopped as a customer, a real order through every AI checkout, and every rival price and promo in view.',
        recipes: ['checkout', 'mystery', 'prices', 'audit'],
      },
      {
        name: 'Lifecycle',
        line: 'Every welcome, basket, launch and win back message checked as it arrives, next to what rivals send their subscribers.',
        recipes: ['delivery', 'mystery', 'email-sms'],
      },
      {
        name: 'Retention',
        line: 'Every customer asked for a review at the right moment, and every cancel request met with 1 pause next to “Cancel now”.',
        recipes: ['reviews', 'saves'],
      },
      {
        name: 'Any other team',
        line: 'If your customers sign up, book or buy online, type the job. Obsession sets it up and agents run it.',
        recipes: [],
      },
    ],
  },

  recipes: {
    heading: 'From an AI answer to a review request, a recipe is ready to run.',
    ids: [
      'listings',
      'competitor',
      'email-sms',
      'trial',
      'ads',
      'prices',
      'speed',
      'adcheck',
      'partners',
      'checkout',
      'mystery',
      'audit',
      'delivery',
      'reviews',
      'saves',
    ],
  },

  proof: {
    heading: '1 test customer left a basket and 1 stopped at checkout. Neither got a reminder in 48 hours.',
    line: 'A real check of a skincare store in September, name hidden: 4 test customers, watched for 48 hours. A £40 gift set left in the basket at 02:57 and a £21 deodorant left at checkout at 03:11 got no reminder.',
    cta: { label: 'Read the full report', to: '/sample-output' },
  },

  faq: {
    heading: 'Every agent declared. Nothing paused, sent or changed without your OK.',
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
        q: 'Does it click our ads?',
        a: 'No. It opens each ad’s landing page directly, so no click is paid for. Pausing an ad, turning it back on or changing its link waits for your OK.',
      },
      {
        q: 'Does it check our partners’ prices?',
        a: 'No. Only your links, codes and banners. Every note to a partner is drafted in your team’s own thread and goes after your OK.',
      },
      {
        q: 'Does it only ask happy customers for reviews?',
        a: 'No. Every customer is asked the same way at the same kind of moment, good experience or bad, from your own address, with the same review link for everyone.',
      },
      {
        q: 'Which rivals can we track?',
        a: 'Any company you name, as many as you add. It doesn’t need to be in anyone’s library first, and every rival on your list runs at once, continuously.',
      },
      {
        q: 'Which channels does it cover?',
        a: 'At rivals: emails, texts, the ads they run in public, prices, offers and pages. On your own: ads and landing pages, partner links and codes, launches, forms, chat, phone, listings, AI checkouts, review requests, cancel requests and what AI assistants say about you.',
      },
      {
        q: 'Does it need access to our own tools?',
        a: 'Only for jobs on your own side. To check your ads it reads your ad accounts, and to time each review request it reads your orders and tickets. To act, it needs the tool it changes: pausing an ad, a fix, a test order’s refund, or a pause or cancel in your billing. Everything at rivals runs from outside, the way any customer sees them. You connect each tool and can disconnect it at any time, and every change waits for your OK.',
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

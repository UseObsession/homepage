import type { RoleId } from './roles'
import { adsRun, competitorRun, mysteryRun, priceRun, prospectRun, speedRun, trialRun, type Run } from './runs'
import type { Item, QA } from './shared'

export type RecipeId = 'competitor' | 'prospect' | 'mystery' | 'speed' | 'prices' | 'ads' | 'trial'

export type Recipe = {
  id: RecipeId
  slug: string
  name: string
  /* One line for cards. */
  line: string
  gets: string
  journey: string[]
  /* What choosing the recipe sets up, in a few words each. */
  spins: string[]

  headline: string
  lede: string
  watched: string[]
  run: Run
  checksTitle: string
  checks: { group: string; items: Item[] }[]
  locked?: Item
  deliverables: Item[]
  spinsUp: Item[]
  settings: { k: string; v: string }[]
  audiences: { role: RoleId; line: string }[]
  faq: QA[]
  /* Optional sections, for the recipes that need more depth. */
  strip?: { kicker: string; title: string; caption: string; items: { t: string; label: string; tone: 'ok' | 'bad' | 'warn' | 'idle' }[] }
  timing?: { when: string; what: string }[]
  compare?: { title: string; caption: string; cols: string[]; rows: { label: string; values: string[] }[] }
  ladder?: boolean
  sampleOutput?: boolean
}

export const recipes: Record<RecipeId, Recipe> = {
  competitor: {
    id: 'competitor',
    slug: 'competitor-tracking',
    name: 'Competitor tracking',
    line: 'Signs up to a rival and records every email, text, ad and post, with its offers and price changes.',
    gets: 'A timeline per rival, and a note of what changed, as often as you choose.',
    journey: ['Sign up', 'Opt in to texts', 'Ask a question', 'Log everything'],
    spins: ['A shopper per rival', 'Inbox and number', 'Ad library readers', 'Scheduled site visits'],
    headline: 'Every email, text, ad and offer your rivals send, on one timeline.',
    lede: 'Name a competitor and a shopper signs up to it that day: email, texts and a question to support. From then on Obsession records everything it sends and changes, dated from the moment it signed up. Any company you name, with no directory to check first.',
    watched: ['Emails', 'Welcome series', 'Texts', 'Support', 'Meta ads', 'Google ads', 'TikTok', 'Posts', 'Pages', 'Prices', 'Offers'],
    run: competitorRun,
    checksTitle: 'Everything a rival puts in front of a new customer.',
    checks: [
      {
        group: 'Inbox and phone',
        items: [
          {
            title: 'Every email',
            line: 'The time it arrived and the day since sign up, the sender, subject and preheader, the offer or code, a full screenshot, and the raw email with its headers.',
          },
          {
            title: 'Sign up and welcome',
            line: 'The pop up and its offer, whether double opt in is needed, the time to the first email, and how many welcome steps follow, with the gap between each.',
          },
          {
            title: 'Texts',
            line: 'How you opt in, the confirmation text, every message with its sender and time, short links followed to their page, and what happens after STOP.',
          },
          { title: 'Support', line: 'One labelled question on each channel, the reply and how long it took, or how long it stayed unanswered.' },
        ],
      },
      {
        group: 'Ads and posts',
        items: [
          {
            title: 'Meta, Google and TikTok ads',
            line: 'Creative, copy, start date and landing page from the public ad libraries, and what that page showed when we checked it.',
          },
          { title: 'Organic posts', line: 'TikTok and Instagram posts, with the time each went up.' },
        ],
      },
      {
        group: 'Site, offers and prices',
        items: [
          { title: 'Pages', line: 'Screenshots of the pages you name, on a schedule, with what changed between them.' },
          { title: 'Prices and offers', line: 'Price changes on the products you pick, sitewide banners, delivery thresholds and pop up offers.' },
        ],
      },
    ],
    strip: {
      kicker: 'From the sign up',
      title: 'The welcome series, mapped and timed.',
      caption: 'Example. Every message is placed by the time since our shopper signed up, so you see the sequence and its rhythm, not a pile of emails.',
      items: [
        { t: '0 min', label: 'Sign up from the pop up', tone: 'idle' },
        { t: '+2 min', label: 'Welcome email, 15% off', tone: 'ok' },
        { t: '+1 day', label: 'Bestsellers email', tone: 'ok' },
        { t: '+2 days', label: 'Text: free gift over £40', tone: 'ok' },
        { t: '+4 days', label: 'Reminder: code ends tonight', tone: 'warn' },
        { t: '+7 days', label: 'Founder story, no offer', tone: 'ok' },
      ],
    },
    timing: [
      { when: 'Minutes', what: 'Ads, posts, pages and prices' },
      { when: 'Same day', what: 'The sign up, the first email and the confirmation text' },
      { when: 'Days 1 to 14', what: 'The welcome series, the texts and the support reply' },
      { when: 'After that', what: 'A note of what changed on the schedule you set, and alerts in between' },
    ],
    deliverables: [
      { title: 'A timeline per rival', line: 'Every email, text, ad, post and change in date order, each with its proof. As a page, a PDF or JSON.' },
      { title: 'The welcome series, mapped', line: 'Each step, the delay before it and the offer it carries, counted from the sign up.' },
      { title: 'A regular note', line: 'What changed since the last one, in counts and a few lines, daily, weekly or monthly. Quiet periods stay quiet.' },
      {
        title: 'Alerts',
        line: 'A batch of new ads, a price drop, a new code, a changed welcome offer or a flow that stops, by email, Slack or webhook.',
      },
      { title: 'Side by side', line: 'How often each rival emails and texts, and which offers it repeats, counted from what arrived.' },
      { title: 'Exports', line: 'Every record as JSON or CSV, or straight into Clay, Slack or your own tools.' },
    ],
    spinsUp: [
      { title: 'A shopper per rival', line: 'Its own inbox and phone number, marked as automated, subscribed for as long as you watch.' },
      { title: 'A browser that visits on your schedule', line: 'Isolated for each rival, so one never sees another’s cookies.' },
      { title: 'Ad library readers', line: 'For Meta, Google and TikTok, following each ad to the page it lands on.' },
      { title: 'A record of every message', line: 'Full emails with headers, texts as received and screenshots, kept in order and never edited.' },
    ],
    settings: [
      { k: 'Rivals', v: 'Any companies you name, by web address' },
      { k: 'Journeys', v: 'Email sign up, text opt in, one question to support' },
      { k: 'Channels', v: 'Email, text, ads, posts, pages and prices' },
      { k: 'How often', v: 'Daily, weekly or monthly, set for each channel' },
      { k: 'Alerts', v: 'The changes you care about, by email, Slack or webhook' },
      { k: 'How long', v: 'How long each shopper stays subscribed' },
    ],
    audiences: [
      { role: 'marketing', line: 'See what rivals send before a sale, and plan your own calendar around it.' },
      { role: 'agency', line: 'Competitor reports for each client, built on what rivals actually sent.' },
      { role: 'sales', line: 'Battlecards from what a rival’s customers really receive.' },
      { role: 'builder', line: 'Feed rivals’ messages and prices into your own product through the API.' },
    ],
    faq: [
      {
        q: 'Can you show their past emails?',
        a: 'No. The record starts the day our shopper signs up. Archives have history; what they don’t have is any company you name, the same day, with every message dated from a known sign up.',
      },
      {
        q: 'Do you trigger their basket emails?',
        a: 'Not on competitors. Basket and checkout need the company’s OK, so they belong to the mystery shopper, on stores you own or manage.',
      },
      {
        q: 'How fast is it?',
        a: 'Ads, posts and pages in minutes. The first email the same day. The welcome series over the days that follow.',
      },
      {
        q: 'Will the competitor know?',
        a: 'Each shopper is marked as automated. If that changes what a rival sends, the verdict says so.',
      },
      { q: 'What if they block it or show a CAPTCHA?', a: 'It stops, and the record says it couldn’t test that step.' },
      { q: 'Can I add a rival at any time?', a: 'Yes. Its shopper signs up the day you add it.' },
    ],
  },

  prospect: {
    id: 'prospect',
    slug: 'prospect-research',
    name: 'Prospect research',
    line: 'Proves a real gap at each company on your list: a welcome email that never comes, a text that never follows, a question nobody answers.',
    gets: 'A verdict per company, with a proof link, back in Clay or a sheet.',
    journey: ['Sign up', 'Opt in to texts', 'Ask a question', 'Wait for what follows'],
    spins: ['A shopper per company', 'Waits of 7 to 30 days', 'A control message', 'A second run'],
    headline: 'Proof of a real gap at every company on your list.',
    lede: 'Add your target list from Clay, a CSV or a paste. A shopper signs up at each company, opts in and asks a question, then waits. You get a dated fact about each one, with the proof, ready for the first line of your email.',
    watched: ['Email sign up', 'SMS opt in', 'WhatsApp opt in', 'Support question', 'Live chat'],
    run: prospectRun,
    checksTitle: 'Pick the gap your product closes.',
    checks: [
      {
        group: 'What it can prove',
        items: [
          { title: 'Email sign up', line: 'Whether a welcome email arrives, and how long it takes.' },
          { title: 'SMS opt in', line: 'Whether a single text follows the opt in, inside the window you set.' },
          { title: 'WhatsApp opt in', line: 'The same check, for WhatsApp.' },
          { title: 'A support question', line: 'Whether anyone replies, and how long it takes.' },
          { title: 'Live chat', line: 'Whether a person or a bot answers, and when.' },
        ],
      },
    ],
    locked: {
      title: 'Basket, checkout and purchase',
      line: 'Off for prospects, because they need the company’s OK. Use the mystery shopper on stores you own or manage.',
    },
    deliverables: [
      { title: 'A verdict per company', line: 'Gap or no gap, against the rules you set.' },
      { title: 'A timeline', line: 'Every step with its time, from sign up to the end of the window.' },
      { title: 'The proof', line: 'Screenshots, and the actual emails and texts.' },
      { title: 'A link anyone can open', line: 'Including the company itself, so the finding stands up on its own.' },
      { title: 'Columns back in Clay', line: 'The gap, the date it was seen and the proof link, on the same rows.' },
      { title: 'Totals', line: 'For example: 54 of 142 opted in and never got a text.' },
    ],
    spinsUp: [
      { title: 'A shopper per company', line: 'A real inbox and phone number and its own browser, marked as automated.' },
      { title: 'Waits that last weeks', line: '7, 14 or 30 days, without holding a browser open.' },
      { title: 'A control message', line: 'Sent before a gap counts, so a silent inbox is really silent.' },
      { title: 'A second run', line: 'Every gap is confirmed again before it reaches you.' },
    ],
    settings: [
      { k: 'The gap to prove', v: 'The checks your product fixes' },
      { k: 'What counts', v: 'For example: no text within 14 days, no welcome email within an hour, no support reply within 24 hours' },
      { k: 'How long', v: '7, 14 or 30 days' },
      { k: 'Afterwards', v: 'Stop, or check again on a schedule and alert on changes' },
      { k: 'Location', v: 'Phone number and browser country, to match the companies' },
      { k: 'Companies', v: 'A Clay table, a CSV, a pasted list or the API, filtered to the rows worth checking' },
    ],
    audiences: [
      { role: 'agency', line: 'An opener for every brand on a client’s list, and a reason to stop when the gap closes.' },
      { role: 'sales', line: 'A fact about each account that your reps can put in the first line.' },
      { role: 'builder', line: 'Call it from Clay or your own tool for every new row.' },
    ],
    faq: [
      {
        q: 'Do you write the email?',
        a: 'No. You get the facts and the proof link. Your team writes the first line, in Clay or wherever it already does.',
      },
      {
        q: 'Why can’t it check the basket or checkout?',
        a: 'Those need the company’s OK. Prospect research sticks to what any customer could do in public.',
      },
      {
        q: 'How do I know a gap is real?',
        a: 'A control message checks the inbox and number work, and a second run confirms the gap before it’s reported.',
      },
      {
        q: 'What happens when the window ends?',
        a: 'It stops, or checks again on a schedule. If a gap closes you hear about it, so you know to stop writing.',
      },
    ],
  },

  mystery: {
    id: 'mystery',
    slug: 'mystery-shopper',
    name: 'Mystery shopper',
    line: 'Goes through a store as a customer does, from the first click to the last email, and checks every step.',
    gets: 'A verdict on every journey, with the proof behind each one.',
    journey: ['Arrive', 'Sign up', 'Basket', 'Support'],
    spins: ['A shopper per journey', 'Inbox and number', 'Screenshots at every step', 'Scheduled reruns'],
    headline: 'What a customer actually gets after they show up.',
    lede: 'A test customer goes through your store, or a client’s, across days. It signs up, opts in to texts, fills a basket, asks a question and texts STOP, then records what arrives and when. Receipts, not opinions. Run it once, or on a schedule so you hear when a journey breaks.',
    watched: ['Arrival', 'Sign up', 'Texts', 'Search', 'Basket', 'Checkout', 'Support', 'STOP', 'Tracking'],
    run: mysteryRun,
    checksTitle: 'The journey, step by step.',
    checks: [
      {
        group: 'Arriving',
        items: [
          { title: 'From the ad', line: 'Whether the page an ad points to is live, in stock and shows the same offer.' },
          { title: 'First look', line: 'The pop up and its offer, with the homepage and product pages screenshotted.' },
          { title: 'Finding a product', line: 'Through the menus and the site’s own search, as a shopper would.' },
        ],
      },
      {
        group: 'Signing up',
        items: [
          { title: 'Email', line: 'Whether the form works, whether double opt in is needed, the time to the welcome email and the offer in it.' },
          { title: 'Texts', line: 'The opt in path, the confirmation text, how often texts come, and whether STOP really stops them.' },
          { title: 'Privacy', line: 'Whether tracking still fires after the shopper clicks reject on the cookie banner.' },
        ],
      },
      {
        group: 'Buying and after',
        items: [
          {
            title: 'Basket',
            line: 'When delivery costs appear, and whether a reminder follows when it’s left: when, how many, the offer, and whether the right item is named.',
          },
          { title: 'Checkout', line: 'Every step up to payment, and where the journey stalls.' },
          { title: 'Support', line: 'The same question on every channel at the same minute, timed to each reply.' },
          { title: 'Delivery and returns', line: 'With a real, budgeted order on a store you own or manage: confirmation, dispatch, delivery and refund.' },
        ],
      },
    ],
    strip: {
      kicker: 'One journey, on the clock',
      title: 'Every step timed, so silence shows up too.',
      caption: 'Example. Each step is logged with its time. When nothing comes, the gap is the finding.',
      items: [
        { t: '09:02', label: 'Signed up', tone: 'idle' },
        { t: '09:03', label: 'Welcome email, 10% off', tone: 'ok' },
        { t: '10:15', label: 'Basket left: 2 items', tone: 'idle' },
        { t: '11:15', label: 'Basket reminder', tone: 'ok' },
        { t: '+24h', label: 'No second reminder', tone: 'bad' },
        { t: '+48h', label: 'Support question unanswered', tone: 'bad' },
      ],
    },
    ladder: true,
    timing: [
      { when: 'Minutes', what: 'Arrival, pages, the sign up and the support question sent' },
      { when: 'Hours', what: 'The welcome email, the first texts and the basket reminders' },
      { when: 'When the wait ends', what: 'Every journey has a verdict, and the report is ready' },
      { when: 'On your schedule', what: 'The same journeys again, compared with last time' },
    ],
    deliverables: [
      { title: 'A verdict on every journey', line: 'Delivered, silent, no verdict or couldn’t test, with the rule that decided it.' },
      { title: 'A timed log', line: 'Every step and message with its time, from the first click to the last email.' },
      { title: 'The evidence', line: 'Screenshots, the raw emails with headers, the texts as received, and the network log for the privacy check.' },
      { title: 'A report to share', line: 'A page and a PDF, like the one in the sample output.' },
      { title: 'What changed', line: 'On a schedule, the journeys that broke or recovered since the last run.' },
      { title: 'Rivals side by side', line: 'The same journeys and timings on the competitors you name.' },
    ],
    sampleOutput: true,
    compare: {
      title: 'The same journeys, on the rivals you name.',
      caption: 'Example. Rivals get the public steps only. Basket rows need the company’s OK.',
      cols: ['You', 'Rival A', 'Rival B'],
      rows: [
        { label: 'Time to welcome email', values: ['1 min', '4 min', 'None in 24h'] },
        { label: 'Welcome offer', values: ['10% off', '15% off', 'Free delivery'] },
        { label: 'Text confirmation', values: ['Yes', 'Yes', 'None'] },
        { label: 'Support reply', values: ['26 h', '3 h', 'None in 48h'] },
        { label: 'STOP honoured', values: ['Yes', 'Text after STOP', 'Yes'] },
      ],
    },
    spinsUp: [
      { title: 'A shopper per journey', line: 'An inbox, a phone number and its own browser, on mobile or desktop, marked as automated.' },
      { title: 'Purchases, only with your OK', line: 'On a store you own or manage, a budgeted order can go past checkout. Otherwise journeys stop before payment.' },
      { title: 'Screenshots at every step', line: 'And the full messages with headers, kept in order and never edited.' },
      { title: 'A schedule', line: 'The same steps as often as you choose, compared with the last run.' },
    ],
    settings: [
      { k: 'Store', v: 'Yours, or a client’s with their OK' },
      { k: 'Journeys', v: 'Arrival, sign up, texts, basket, checkout, support, STOP, purchase' },
      { k: 'Wait', v: '24 hours, 72 hours or 7 days for what follows' },
      { k: 'What counts', v: 'For example: no basket reminder within 24 hours, no support reply within a working day' },
      { k: 'Device', v: 'Mobile, desktop or both' },
      { k: 'Rivals', v: 'The same public steps on competitors, to compare' },
      { k: 'How often', v: 'Once, monthly or weekly' },
    ],
    audiences: [
      { role: 'agency', line: 'A regular check on every client store, and a report to show for it.' },
      { role: 'marketing', line: 'Know your own journeys still work after every launch and change.' },
      { role: 'builder', line: 'Run your own sign up or checkout as a new customer, on a schedule.' },
    ],
    faq: [
      {
        q: 'Do you need access to our store?',
        a: 'No logins. Public steps run as any customer would. Basket and checkout need your written OK, or your client’s.',
      },
      {
        q: 'Do you place real orders?',
        a: 'Only on a store you own or manage, with a budget you set. Otherwise checkouts stop before payment.',
      },
      { q: 'Does it pretend to be a person?', a: 'No. It’s marked as automated, so your support team will see it’s a test.' },
      {
        q: 'How is this different from a site audit?',
        a: 'An audit reads the page. A mystery shopper uses it, then waits days for what arrives afterwards: the emails, texts and replies.',
      },
      { q: 'How long does it take?', a: 'Pages in minutes, messages within hours, and every verdict when the wait you set ends.' },
      { q: 'What happens at a CAPTCHA?', a: 'It stops. If the CAPTCHA would block real customers too, that’s a finding.' },
      { q: 'Can it run on a schedule?', a: 'Yes, daily, weekly or monthly. You hear when a journey breaks, and when it’s fixed.' },
    ],
  },

  speed: {
    id: 'speed',
    slug: 'speed-to-lead',
    name: 'Speed to lead',
    line: 'Sends an enquiry by form, email, chat or text and times the reply.',
    gets: 'Reply time for each company and channel, with the replies attached.',
    journey: ['Send the enquiry', 'Wait for a reply', 'Log who answered', 'Time it'],
    spins: ['A shopper per company', 'A number for call backs', 'A clock per enquiry'],
    headline: 'How fast does each company answer?',
    lede: 'Obsession sends an enquiry to every company on your list, by web form, email, chat or text, marked as automated. Then it waits, and times every reply, call and text that comes back.',
    watched: ['Web forms', 'Email', 'Live chat', 'Text', 'Call backs'],
    run: speedRun,
    checksTitle: 'Every way a company can answer.',
    checks: [
      {
        group: 'How it asks',
        items: [
          { title: 'Web forms', line: 'The enquiry goes through the form, the way a customer would send it.' },
          { title: 'Email', line: 'Sent to the published address.' },
          { title: 'Live chat', line: 'Whether a person or a bot answers, and when.' },
          { title: 'Text', line: 'Where a company lists a number for texts.' },
        ],
      },
      {
        group: 'What it measures',
        items: [
          { title: 'First reply', line: 'From the enquiry to the first answer, on any channel.' },
          { title: 'Channel', line: 'Whether they reply the way they were asked, or call instead.' },
          { title: 'Follow ups', line: 'How many times they chase, and for how long.' },
          { title: 'Never replied', line: 'Companies that didn’t answer inside the window.' },
        ],
      },
    ],
    deliverables: [
      { title: 'Reply time per company', line: 'Fastest, slowest and the median across your list.' },
      { title: 'The replies themselves', line: 'Emails, texts and call logs, as proof.' },
      { title: 'A sheet', line: 'One row per company, ready for your CRM or Clay.' },
      { title: 'Over time', line: 'Run it again on a schedule to see who got faster or slower.' },
    ],
    spinsUp: [
      { title: 'A shopper per company', line: 'An inbox and a phone number that can take calls and texts.' },
      { title: 'The same enquiry for each', line: 'Asked the same way everywhere, so the comparison is fair.' },
      { title: 'A clock per enquiry', line: 'Started the second it’s sent, stopped by the first reply.' },
    ],
    settings: [
      { k: 'Companies', v: 'From Clay, a CSV or a pasted list' },
      { k: 'Channel', v: 'Form, email, chat or text' },
      { k: 'The enquiry', v: 'What the shopper asks' },
      { k: 'Window', v: 'How long to wait for a reply' },
      { k: 'How often', v: 'Once, or on a schedule' },
    ],
    audiences: [
      { role: 'sales', line: 'A list of the accounts that answer slowly, for a pitch about speed.' },
      { role: 'agency', line: 'Proof for a client that their leads wait, or that they don’t.' },
      { role: 'marketing', line: 'See how fast rivals answer before you set your own target.' },
    ],
    faq: [
      { q: 'Does the company know it’s a test?', a: 'The enquiry says it’s automated. Nothing pretends to be a real buyer.' },
      { q: 'Do call backs count?', a: 'Yes. Each shopper has its own number, so calls and texts are logged as replies.' },
      { q: 'What counts as a reply?', a: 'The first answer on any channel. Automatic replies are logged separately.' },
    ],
  },

  prices: {
    id: 'prices',
    slug: 'price-watch',
    name: 'Price and promotion watch',
    line: 'Checks prices, delivery thresholds and offers on rivals’ sites, as often as you choose.',
    gets: 'A change log, with a screenshot of each change.',
    journey: ['Open the pages', 'Read prices and offers', 'Compare with last time', 'Save each change'],
    spins: ['A browser per rival', 'A schedule', 'Screenshots of changes'],
    headline: 'Every price cut, offer and delivery change, logged with proof.',
    lede: 'Obsession checks the products and pages you choose on each rival’s site, as often as you choose, and logs what changed with a screenshot. There’s no feed to set up: it reads the site the way a shopper sees it.',
    watched: ['Prices', 'Sale prices', 'Bundles', 'Delivery thresholds', 'Stock', 'Codes on show', 'Sitewide offers'],
    run: priceRun,
    checksTitle: 'What a shopper would notice.',
    checks: [
      {
        group: 'On the page',
        items: [
          { title: 'Prices and sale prices', line: 'For the products or collections you pick.' },
          { title: 'Bundles and multi buys', line: 'And what they work out at per item.' },
          { title: 'Stock', line: 'In stock, low stock and sold out.' },
          { title: 'Delivery', line: 'Costs and free delivery thresholds.' },
        ],
      },
      {
        group: 'Offers',
        items: [
          { title: 'Sitewide sales', line: 'Banners and sale pages, the day they appear.' },
          { title: 'Codes on show', line: 'The codes a rival shows in banners and pop ups, and when they change.' },
        ],
      },
    ],
    deliverables: [
      { title: 'A change log', line: 'Every change with before, after and a screenshot.' },
      { title: 'Alerts', line: 'The day a rival starts a sale or drops a price.' },
      { title: 'A summary', line: 'What moved across all your rivals, as often as you like.' },
      { title: 'Exports', line: 'CSV, JSON or a webhook.' },
    ],
    spinsUp: [
      { title: 'A browser per rival', line: 'Set to your country, so prices and currency match what customers see.' },
      { title: 'A schedule', line: 'The same pages at the same time, as often as you choose.' },
      { title: 'Screenshots of each change', line: 'Kept as proof.' },
    ],
    settings: [
      { k: 'Rivals and products', v: 'Single pages or whole collections' },
      { k: 'Country', v: 'For prices and currency' },
      { k: 'How often', v: 'Daily, weekly, or more often' },
      { k: 'Alerts', v: 'Changes above an amount you set' },
    ],
    audiences: [
      { role: 'marketing', line: 'Know when a rival’s sale starts, without checking their site yourself.' },
      { role: 'agency', line: 'Price reports for each client’s market.' },
    ],
    faq: [
      { q: 'Can it test whether a code works?', a: 'On stores you own or manage, yes. On a rival’s site it records the codes on show, without using the basket.' },
      { q: 'Does it work behind a login?', a: 'Only with a login you give it.' },
    ],
  },

  ads: {
    id: 'ads',
    slug: 'ad-tracking',
    name: 'Ad tracking',
    line: 'Tracks the live ads of any brand, and follows each one to where it lands.',
    gets: 'New and stopped ads, and the ones sending people to the wrong place.',
    journey: ['Read the ad libraries', 'Follow each ad', 'Check the page', 'Flag what breaks'],
    spins: ['Ad library readers', 'Mobile and desktop browsers', 'Screenshots'],
    headline: 'Every live ad a brand runs, and where each one lands.',
    lede: 'Obsession reads the public ad libraries for the brands you choose, yours, a client’s or a rival’s: new ads, stopped ads, creative, copy and offers. Then it follows each ad to its page and checks it. Is the product in stock, does the offer match, does the page load?',
    watched: ['Meta ads', 'Google ads', 'TikTok ads', 'Landing pages', 'Stock', 'Offers', 'Load time'],
    run: adsRun,
    checksTitle: 'From the ad to the page, on every check.',
    checks: [
      {
        group: 'From the ad libraries',
        items: [
          { title: 'Live ads', line: 'New and stopped ads for Meta, Google and TikTok, and how long each has run.' },
          { title: 'Where they point', line: 'The page each ad sends people to.' },
        ],
      },
      {
        group: 'On the page',
        items: [
          { title: 'Sold out or missing', line: 'The product in the ad, gone from the page.' },
          { title: 'Offer mismatch', line: 'One discount in the ad, another on the page.' },
          { title: 'Dead links and errors', line: 'Pages that don’t load at all.' },
          { title: 'Slow pages', line: 'Pages that take too long on a phone.' },
        ],
      },
    ],
    deliverables: [
      { title: 'New and stopped ads', line: 'Every change in a brand’s ads, with the creative, copy, offer and start date.' },
      { title: 'Ads that need fixing', line: 'The ad and the page side by side, with what’s wrong.' },
      { title: 'Alerts', line: 'New breaks, as soon as a check finds them.' },
      { title: 'A record of live ads', line: 'Each brand’s ads and their landing pages, over time.' },
    ],
    spinsUp: [
      { title: 'Ad library readers', line: 'For Meta, Google and TikTok.' },
      { title: 'Browsers on mobile and desktop', line: 'So pages are checked the way people see them.' },
      { title: 'Screenshots', line: 'Of the ad and the page, kept as proof.' },
    ],
    settings: [
      { k: 'Brands', v: 'Yours, your clients’ or your rivals’' },
      { k: 'Platforms', v: 'Meta, Google and TikTok' },
      { k: 'Device', v: 'Mobile, desktop or both' },
      { k: 'How often', v: 'Daily, or as often as you need' },
    ],
    audiences: [
      { role: 'agency', line: 'Know when a client’s ad starts sending people to a broken page.' },
      { role: 'marketing', line: 'Know your ads still land where they should after every stock change.' },
    ],
    faq: [
      { q: 'Does it click on paid ads?', a: 'No. It follows the link from the public ad library, so nobody pays for the click.' },
      { q: 'Which platforms?', a: 'Meta, Google and TikTok, through their public ad libraries.' },
    ],
  },

  trial: {
    id: 'trial',
    slug: 'trial-teardown',
    name: 'Trial teardown',
    line: 'Starts a free trial and records every onboarding email, call and nudge, day by day.',
    gets: 'The whole onboarding sequence on one page.',
    journey: ['Start the trial', 'Use it like a new user', 'Wait through the trial', 'Log every touch'],
    spins: ['A shopper with a work email', 'A phone number', 'A wait through the trial'],
    headline: 'Every email, call and nudge in a rival’s free trial.',
    lede: 'Obsession starts a free trial as a new user, marked as automated, and records everything that follows for up to 30 days: onboarding emails, sales calls, in app prompts and the offer when the trial ends.',
    watched: ['Sign up', 'Onboarding emails', 'Sales calls', 'Texts', 'In app prompts', 'Trial end offers'],
    run: trialRun,
    checksTitle: 'The whole trial, day by day.',
    checks: [
      {
        group: 'Signing up',
        items: [
          { title: 'What’s asked', line: 'The fields, the questions and whether a card is needed.' },
          { title: 'First minutes', line: 'The welcome email, the checklist and the first prompt.' },
        ],
      },
      {
        group: 'During and after',
        items: [
          { title: 'Onboarding emails', line: 'Every one, with its timing and what it asks you to do.' },
          { title: 'Sales calls', line: 'Calls and voicemails to the shopper’s number.' },
          { title: 'The end', line: 'Reminders before the trial ends, and the offer after.' },
        ],
      },
    ],
    deliverables: [
      { title: 'The sequence on one page', line: 'Day by day, every email, call and prompt.' },
      { title: 'The proof', line: 'Screenshots of each step and the messages themselves.' },
      { title: 'Rivals side by side', line: 'Run it on several rivals and compare their trials.' },
    ],
    spinsUp: [
      { title: 'A shopper with a work email', line: 'And a phone number for calls and texts.' },
      { title: 'A browser that signs in', line: 'Like a new user, as often as you choose.' },
      { title: 'A wait through the trial', line: 'Up to 30 days, without anyone watching.' },
    ],
    settings: [
      { k: 'Rivals', v: 'Any product with a free trial' },
      { k: 'Length', v: 'Up to 30 days' },
      { k: 'Activity', v: 'Signs in daily, or goes quiet after day one' },
      { k: 'Country', v: 'For the phone number and browser' },
    ],
    audiences: [
      { role: 'sales', line: 'Battlecards from what a rival’s trial really looks like.' },
      { role: 'builder', line: 'See your own onboarding the way a new user sees it.' },
      { role: 'marketing', line: 'Compare your nurture emails with a rival’s, day by day.' },
    ],
    faq: [
      { q: 'Will it talk to a sales rep?', a: 'No. It doesn’t answer calls. It logs them and keeps the voicemails.' },
      { q: 'What about trials that need a card?', a: 'They’re flagged, and only run with a card you provide.' },
    ],
  },
}

export const allRecipeIds = Object.keys(recipes) as RecipeId[]

export const recipeBySlug = Object.fromEntries(Object.values(recipes).map((t) => [t.slug, t])) as Record<string, Recipe>

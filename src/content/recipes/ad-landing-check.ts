import type { Capture, Recipe } from '../types'

/* Ad landing check (/recipes/ad-landing-check). Check your own journeys. For performance marketing teams, and the
   agencies that run their ads.
   Screen: adcheck (Your company / Missions / Ad landing check: 6 live ads, daily at 07:00, each landing page opened as
   a customer and checked 4 ways, Loads, Offer, Price and Stock, so 23 of 24 checks pass. Ad 1 search $120 a day
   /linen-sheets 0.8 s, Ad 2 social $85 /stoneware-mugs 1.1 s, Ad 3 search $240 /wool-throw 0.9 s, Ad 4 social $410
   /table-lamp 0.7 s and sold out, Ad 5 search $64 /oak-shelf 1.2 s, Ad 6 social $150 /linen-cushion 0.9 s. Ad 4 is
   flagged at 07:04, "Sends clicks to a sold out page, $410 a day"; the drafted fix, "Pause Ad 4 or point it to a lamp
   in stock", with 2 buttons, Change link and Pause Ad 4; "Paused by AM"; the note "Opens each ad's page, pauses
   after your OK"; the toast "Ad 4 paused, $410 a day saved"). The products make it a homeware store.
   Seun approved the recipe on 3 Oct. It is the twin of Ad tracking: Ad tracking watches the ads rivals run in public,
   Ad landing check watches the reader's own, and drafts the fix when 1 sends clicks to a page that can't sell.
   Rules: only the 3 lines in system.md (the record, customer privacy, the law); everything else is the reader's
   setting. The page says it positively: the agent opens each ad's landing page from its link, so no click is paid for
   and the ad numbers stay true; ad accounts come through the tools the reader connects; it drafts 3 changes, a pause,
   a restart or a new link, and each goes live after the reader's OK (turning an ad back on spends money, so it is
   named, never implied); a client's ads are said once, with the client's agreement, in the FAQ. On the page the
   approver is "your ads lead", never "AM", which reads as a.m. next to a time; no platform names, and no claim about
   collecting any platform's ads beyond the reader's own accounts.
   Up-to-50 rule (no money promises, 3 Oct): the 1 modelled figure (up to 182 hours a year) carries its model in the
   same line: 1 person opening the 6 example ads' landing pages by hand every morning, 5 minutes each, 6 x 5 x 7 = 210
   minutes = 3.5 hours a week, x 52 = 182, turned into the ads that fail. The run keeps Ad 4's $410 a day as a fact and
   ends on speed: flagged at 07:04, paused at 07:40, 36 minutes later. No sources, prices of Obsession or real names on
   the page. The run is an example and says so. */

const roles: Capture['roles'] = {
  question: 'Whose ads should we check first?',
  options: ['Ours', 'A client’s, with their OK', 'Both'],
}

const micro = 'We keep your email to set up your first run and tell you about Obsession.'

export const recipe: Recipe = {
  id: 'adcheck',
  slug: 'ad-landing-check',
  name: 'Ad landing check',
  group: 'Check your own journeys',
  line: 'Opens every live ad’s landing page as a customer each morning, and drafts the fix for any that’s broken, wrong or sold out.',
  gets: 'Every live ad checked as a customer each morning, and the fix ready for any that sends clicks to a page that can’t sell.',
  kit: [
    'An AI agent with its own ID',
    'Your ad accounts, connected by you',
    'A phone and a desktop browser',
    'A check every morning at 07:00',
    'Changes only after your OK',
    'Every check and OK kept with its receipt',
  ],

  meta: {
    path: '/recipes/ad-landing-check',
    title: 'Ad landing check: test every ad as a customer · Obsession',
    description:
      'Each morning an AI agent opens every live ad’s landing page as a customer, checks the offer, price and stock, and drafts the fix for your OK.',
    answer:
      'Ad landing check opens every live ad’s landing page as a customer each morning, straight from the ad’s link. An AI agent checks the page loads, the offer and price match and the product is in stock, then drafts the fix for your OK.',
    ogImage: '/og/ad-landing-check.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
      { name: 'Ad landing check', path: '/recipes/ad-landing-check' },
    ],
  },

  hero: {
    headline: 'AI agents that catch every ad sending clicks to a broken or sold out page.',
    sub: 'Ad landing check opens every live ad’s landing page as a customer each morning, straight from the ad’s link. An AI agent checks the page loads, the offer and price match and the product is in stock, then drafts the fix for your OK.',
    screen: 'adcheck',
    capture: {
      kind: 'waitlist',
      source: 'recipe-adcheck-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'adcheck',
    },
  },

  run: {
    tab: 'Example: 6 live ads, each morning',
    recipe: 'adcheck',
    task: 'Every morning, open the landing page of each live ad as a customer, straight from the ad’s link. Check it loads, the offer and price match the ad, and the product is in stock. Draft the fix for any that fails.',
    targets: 'A homeware store’s 6 live search and social ads, $1,069 a day between them',
    journey: ['Read every live ad', 'Open its page as a customer', 'Check offer, price and stock', 'Draft the fix for your OK'],
    schedule: 'Every morning at 07:00',
    report: 'A morning note, and Slack when an ad fails',
    kit: ['Its own agent ID', 'Your ad accounts', 'Phone and desktop', 'Opens each ad’s page'],
    events: [
      { time: 'Mon 07:00', text: '6 live ads read from your ad accounts: 3 search and 3 social, $1,069 a day between them.' },
      {
        time: 'Mon 07:04',
        text: 'Ad 4, a social ad at $410 a day, sends clicks to /table-lamp. The page loads and the price matches, but the lamp is sold out.',
      },
      { time: 'Mon 07:05', text: 'Fix drafted: pause Ad 4, or change its link to a page that’s in stock. It waits for your OK.' },
      {
        time: 'Mon 07:06',
        text: 'The other 5 pages pass all 4 checks. Each loads in 1.2 seconds or less, and the offer, price and stock match the ad.',
      },
      { time: 'Mon 07:40', text: 'Your ads lead approves. Ad 4 is paused, 36 minutes after it was flagged.' },
      { time: 'Tue 07:00', text: '5 live ads pass. The lamp is still sold out, so Ad 4 stays paused until you say otherwise.' },
    ],
    finding: 'Ad 4 spends $410 a day sending clicks to a table lamp that’s sold out.',
    fix: 'Ad 4 paused after your ads lead’s OK. The agent flags the morning the lamp is back, and the ad goes live again after your OK.',
    ledger: 'Example run. Every check, screenshot and OK kept with its receipt.',
  },

  steps: [
    {
      title: 'Read every live ad',
      line: 'Each morning it reads every live search and social ad in the accounts you connect: where it points, the offer and price it shows, and what it spends a day.',
    },
    {
      title: 'Open each page as a customer',
      line: 'On a phone and a desktop, straight from the ad’s link, so no click is paid for. It checks the page loads, the offer and price match, and the product is in stock.',
    },
    {
      title: 'Draft the fix for your OK',
      line: 'Pause the ad, or change its link to a page that can sell. The costliest break comes first, with a screenshot of what a customer sees.',
    },
    {
      title: 'Check again the next morning',
      line: 'Every ad, every day. A paused ad is flagged the morning its product is back, and it goes live again only after your OK.',
    },
  ],

  checks: [
    {
      group: 'Every landing page',
      items: [
        { title: 'It loads', line: 'The page opens on a phone and a desktop, and how long it takes.' },
        { title: 'The offer matches', line: 'Free delivery, a gift or 20% off: what the ad promises is on the page.' },
        { title: 'The price matches', line: 'The price in the ad is the price on the page.' },
        { title: 'It’s in stock', line: 'The product in the ad can still be bought, in the size or colour the ad shows.' },
      ],
    },
    {
      group: 'Every ad',
      items: [
        { title: 'Where it points', line: 'The link the ad sends people to, followed through every redirect.' },
        { title: 'What it spends', line: 'Its daily spend from the account you connect, so the costliest break comes first.' },
        { title: 'New ads', line: 'An ad that went live since yesterday is in the next morning’s check.' },
      ],
    },
    {
      group: 'Where it stops',
      items: [
        { title: 'At the page', line: 'It opens the page from the ad’s link, so no click is paid for and your numbers stay true.' },
        { title: 'Before any change', line: 'Pausing an ad, turning it back on or changing its link waits for your OK.' },
        { title: 'Budgets and bids', line: 'They stay with your team. It drafts a pause or a new link, and you decide.' },
        { title: 'At a block', line: 'A CAPTCHA or a bot block ends that check, and the morning note names the page.' },
      ],
    },
  ],

  outputs: {
    heading: 'Every live ad is checked before your day starts, with a fix ready for each one that fails.',
    items: [
      { format: 'A verdict per ad', line: 'Loads, offer, price and stock, with a screenshot of what a customer sees.' },
      { format: 'The costliest first', line: 'Each break ranked by what its ad spends a day.' },
      { format: 'The fix, drafted', line: 'Pause the ad or change its link, waiting for your OK.' },
      { format: 'Alerts that matter', line: 'Slack or email when an ad fails. Nothing when every ad passes.' },
      { format: 'A weekly note', line: 'Ads checked, breaks found, fixes made, and the time from each flag to its fix.' },
      { format: 'A record to share', line: 'Every check and every OK kept with its receipt, for your team or your client.' },
    ],
  },

  settings: [
    { k: 'Ads', v: 'Every live search and social ad, or the campaigns you pick' },
    { k: 'Accounts', v: 'Yours, or a client’s, connected by you' },
    { k: 'How often', v: 'Every morning at 07:00, or more often in a sale' },
    { k: 'Checks', v: 'Loads, offer, price and stock, plus any of your own' },
    { k: 'Devices', v: 'Phone and desktop' },
    { k: 'Alerts', v: 'Slack or email, only when an ad fails' },
    { k: 'Needs your OK', v: 'Every pause, restart and link change' },
    { k: 'Opens', v: 'Each ad’s page from its link, so no click is paid for' },
  ],

  forWho: [
    {
      audience: 'marketing',
      line: 'Performance teams see every ad that sends clicks to a broken, wrong or sold out page the same morning, with the fix ready.',
    },
    {
      audience: 'agencies',
      line: 'Every client’s live ads checked each morning, and a record of every break you caught, with proof.',
    },
    { audience: 'founders', line: 'Running your own ads? Know each one lands on a page that can sell, without opening them yourself.' },
    { audience: 'developers', line: 'Run it through the API after every site release, and get each failing ad back by webhook.' },
  ],

  table: {
    heading: 'The agent checks every ad you pay for, not the few someone remembers.',
    line: 'Up to 182 hours a year back for 1 person who checks 6 ads’ landing pages by hand every morning, 5 minutes each: 3.5 hours a week. You read only the ads that fail.',
    cols: ['By hand', 'The agent'],
    rows: [
      { label: 'Which ads', values: ['The few someone opens when there’s time', 'Every live ad, every morning'] },
      { label: 'How', values: ['Clicking the ad, which can cost a click', 'Opening its page directly, so no click is paid for'] },
      { label: 'Where', values: ['A desktop at the office', 'A phone and a desktop'] },
      { label: 'A sold out page', values: ['Found when sales drop', 'Found at 07:04, with the screenshot'] },
      { label: 'The fix', values: ['Pause it, then remember to turn it back on', 'Paused after your OK, and flagged the day stock is back'] },
      { label: 'The record', values: ['A message in a chat', 'Every check and OK kept with its receipt'] },
    ],
  },

  faq: {
    heading: 'Every ad’s page opened as a customer. Every fix waits for your OK.',
    items: [
      {
        q: 'How do I stop my ads sending clicks to a sold out page?',
        a: 'Ad landing check finds it the same morning: at 07:00 an AI agent opens every live ad’s landing page as a customer, straight from the ad’s link, checks the product is in stock and the offer and price match, and drafts the pause or a new link for your OK.',
      },
      {
        q: 'How does Ad landing check open each page?',
        a: 'Ad landing check opens each landing page straight from the ad’s link, on a phone and a desktop. No click is paid for, so your ad numbers stay true.',
      },
      {
        q: 'Can Ad landing check change our ads?',
        a: 'Ad landing check drafts 3 changes, and each goes live after your OK: pause an ad, turn a paused ad back on, or change its link. Budgets, bids and copy stay with your team.',
      },
      {
        q: 'Which ads does Ad landing check open?',
        a: 'Ad landing check opens every live search and social ad in the ad accounts you connect, or the campaigns you pick. Your own ads, or a client’s with the client’s agreement.',
      },
      {
        q: 'Does Ad landing check buy anything?',
        a: 'Ad landing check reads the page as a customer would. To buy through the checkout behind an ad as well, AI checkout test pays on a capped card and refunds the order.',
      },
      {
        q: 'How soon does Ad landing check find a break?',
        a: 'Ad landing check finds it at the next check: every morning at 07:00, or more often in a sale. In the example, Ad 4 was flagged at 07:04.',
      },
      {
        q: 'What happens after a pause?',
        a: 'Ad landing check keeps checking the page. The morning the product is back in stock, it tells you, and the ad goes live again after your OK.',
      },
      {
        q: 'Can Ad landing check follow a rival’s ads?',
        a: 'That’s Obsession’s Ad tracking: it reads the ads your rivals run in public and follows each one to its page, price and code. Ad landing check works from the ad accounts you connect.',
      },
      {
        q: 'What’s it worth?',
        a: 'Ad landing check gives up to 182 hours a year back for 1 person who checks 6 ads’ landing pages by hand every morning, 5 minutes each: 3.5 hours a week. You read only the ads that fail, with the screenshot and the fix beside it.',
      },
      {
        q: 'How is Ad landing check different from Mystery shopper?',
        a: 'Ad landing check opens the exact page each live ad points to, every morning, and drafts the fix for any that fails. Mystery shopper goes through your whole journey as a customer and watches what follows.',
      },
    ],
  },

  final: {
    heading: 'Know every ad you pay for lands on a page that can sell.',
    sub: 'Join the waitlist. Ad landing check comes ready to read your live ads, open every landing page as a customer each morning, and wait for your OK before any change.',
    capture: {
      kind: 'waitlist',
      source: 'recipe-adcheck-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro,
      roles,
      interest: 'adcheck',
    },
  },
}

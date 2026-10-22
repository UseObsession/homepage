import { consoleHeading } from '../console'
import { askExamples, askShared, compare, life, openSource } from '../shared5'
import type { Page } from '../types'

/* Home (/), the October rewrite (COPY.md, "Copy deck > Home"). 1 idea: to know what a company does to its customers,
   you have to be one, and Obsession is that customer, with the receipts. Each block answers the question the last one
   leaves open, in this order:
   1 what it is (the hero: the claim, the form, and the receipt stage playing 3 companies' journeys) >
   2 why other tools can't (the gap: what the tools keep beside what a customer gets) >
   3 how (an agent's life: it signs up, sleeps, wakes when the company does something, files the receipt) >
   3b what it found (93% of stores we shopped had a gap: 1 real store's report, in every format) >
   4 who you are (James's reader band: each reader's own page) >
   5 who you can be a customer of (rivals, prospects and accounts, your own journeys, your AI agents, 2 by 2) >
   6 what you can ask it (1 question per reader, asked in Claude Code, Codex or from code, answered with receipts) >
   7 how it compares (6 kinds of tool, 7 rows, dated, linking /compare) >
   8 how far it goes (1 company, 1,000, 100,000: learned once, run as a program, asleep for free) >
   9 what is open (the engine on GitHub, the history in Obsession Cloud) >
   10 questions, then the waitlist.
   The words a buyer uses come first (research/voc.md: "competitor emails", "sign up", "abandoned basket", "Promotions
   tab", "manually"); "receipt" is the brand's 1 device, always beside the plain word for it. Every company on the
   stage and in the screens is invented, at a .example address. */

const waitlist = {
  kind: 'waitlist',
  button: 'Join the waitlist',
  placeholder: 'Your work email',
  micro: 'We keep your email to set up your first watch and tell you about Obsession.',
  interest: 'any',
} as const

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession: AI customer agents for any company, with receipts',
    description:
      'Obsession’s AI agents sign up to any company and stay its customer for months, keeping every email, offer and price it sends, with proof you can check.',
    /* The sentence AI assistants quote: the hero's sub, word for word, then how to use it. */
    answer:
      'Obsession’s AI agents sign up to any company you name and stay its customer for months, keeping every email, offer and price it sends, with proof. Use it from your own AI agent through MCP or the API, or from our website; the runtime is open source.',
    ogLine: 'AI agents that sign up to any company and stay its customer, with proof.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Open source',
    headline: 'Be a customer of every company. Keep the receipts.',
    sub: 'Obsession’s AI agents sign up to any company you name and stay its customer for months, keeping every email, offer and price it sends, with proof.',
    capture: { ...waitlist, source: 'home-hero' },
    proof: [],
    consoleHeading,
  },

  /* 3 invented companies, 1 journey each: an ad followed to its page, the email that came, and the receipt filed. */
  stage: {
    label: 'Example: 3 companies, each followed as a customer, from the ad to the email',
    steps: ['Followed the ad', 'Signed up', 'Got the email'],
    receipts: [
      {
        topic: 'Ad offer',
        company: 'Fern Hollow',
        domain: 'fernhollow.example',
        monogram: 'F',
        ad: { source: 'Meta ad', text: '40% off everything, this week only', cta: 'Shop now' },
        page: { path: '/early-access', title: 'Early access: 40% off with EARLY40', note: 'Code applied at checkout' },
        mail: { time: '09:12', from: 'Fern Hollow', subject: 'Your 40% code is inside', tab: 'Promotions' },
        rows: [
          { k: 'Ad', v: 'Meta, Monday 09:00' },
          { k: 'Checkout', v: '40% off, applied' },
          { k: 'Welcome', v: '9 minutes later' },
          { k: 'Gmail tab', v: 'Promotions' },
          { k: 'Signature', v: 'DKIM pass' },
        ],
        stamp: 'Held',
        fact: 'The ad promised 40% off. The page and the email held it.',
      },
      {
        topic: 'Abandoned basket',
        company: 'Wrenfield',
        domain: 'wrenfield.example',
        monogram: 'W',
        ad: { source: 'Instagram ad', text: 'Linen bedding, washed soft. Free returns.', cta: 'Shop linen' },
        page: { path: '/products/linen-duvet-set', title: 'Linen duvet set, £120', note: 'Added to basket, then left' },
        did: 'Left the basket',
        mail: { time: '21:14', from: 'Wrenfield', subject: 'You left something behind: 10% off', tab: 'Promotions' },
        rows: [
          { k: 'Basket', v: 'Left at 20:14' },
          { k: 'Reminder', v: '1 hour later' },
          { k: 'Offer', v: '10% off, BACK10' },
          { k: 'Day 3', v: 'Second reminder, no code' },
          { k: 'Signature', v: 'DKIM pass' },
        ],
        stamp: 'Reminded',
        fact: 'A basket left at 20:14 got a reminder an hour later, with 10% off.',
      },
      {
        topic: 'Price drop',
        company: 'Northfold',
        domain: 'northfold.example',
        monogram: 'N',
        ad: { source: 'Google Shopping', text: 'Harbour candle, £24, free delivery', cta: 'View' },
        page: { path: '/products/harbour-candle', title: 'Harbour candle, £24', note: 'Added to basket, then left' },
        did: 'Left the basket',
        mail: { time: 'Day 21', from: 'Northfold', subject: 'Still thinking? It’s now £19', tab: 'Promotions' },
        rows: [
          { k: 'Basket', v: 'Left on day 1' },
          { k: 'Reminder', v: 'Day 2, 10:02' },
          { k: 'Price', v: '£24, £19 on day 21' },
          { k: 'Delivery', v: 'Still free' },
          { k: 'Signature', v: 'DKIM pass' },
        ],
        stamp: 'Price cut',
        fact: 'Northfold cut the price to £19 three weeks after the basket was left.',
      },
    ],
  },

  gapPair: {
    heading: 'Every tool shows you the ad. None of them is the customer.',
    line: 'Today it’s a spare inbox, screenshots and a spreadsheet, kept up by hand, or a tool that saves the page, or archives newsletters from its own list of brands. What happens after the click only reaches a customer of the company you name.',
    tools: {
      label: 'What other tools keep',
      items: [
        'The ad, and how long it ran',
        'A picture of the landing page',
        'The newsletter, if someone archived it',
        'An alert that a page changed',
      ],
    },
    customer: {
      label: 'What a customer gets',
      items: [
        'Whether the offer held at checkout',
        'The welcome 9 minutes later, the basket reminder on day 2',
        'Which Gmail tab each email landed in',
        'The trial that went quiet after day 3',
        'What the support bot actually said',
        'The email itself, with its signature checked',
      ],
    },
  },

  life,

  /* 4 kinds of company, 2 by 2, each beside its own screen: the headline names them (rivals, prospects, yourself), and
     your AI agents are the 4th. The recipe menus keep their 3 groups; these cards answer whose customer you can be. */
  targets: {
    heading: 'Be a customer of anyone. Rivals, prospects, or yourself.',
    line: 'Most watches start with other companies. The same agents follow your own ads and checkouts, and test your own AI agents.',
    items: [
      {
        name: 'Rivals',
        line: 'Every email, text, offer, price and ad, the day it lands, seen as their customer.',
        screen: 'rivals',
        to: '/recipes',
        recipes: ['competitor', 'email-sms', 'prices', 'ads'],
      },
      {
        name: 'Prospects and accounts',
        line: 'What each one does to its own customers, before you pitch, call or renew.',
        screen: 'pack',
        to: '/recipes',
        recipes: ['prospect', 'account-watch', 'trial'],
      },
      {
        name: 'Your own journeys',
        line: 'Your ads, forms and checkouts, followed the way a customer does, so you see what breaks first.',
        screen: 'shop',
        to: '/recipes',
        recipes: ['mystery', 'adcheck', 'speed', 'checkout'],
      },
      {
        name: 'Your AI agents',
        line: 'Test customers talk to your support bot, voice agent and AI SDR, and check every answer.',
        screen: 'botcheck',
        to: '/verify',
        recipes: ['support-bot', 'voice-agent'],
      },
    ],
    all: { label: 'See every recipe', to: '/recipes' },
  },

  /* Scale (COPY.md, "Scale"), after the kinds of company: anyone, then 1,000, then 100,000. The facts are system.md's:
     one program per platform, not per site; learned, compiled, replayed; code, typed questions, small agents and
     escalation; asleep costs nothing; the shared record. The numbers on the stage and in the card come from
     docs/positioning/scale_model.py, modelled on public prices, and say so (COPY.md, claims register). */
  scale: {
    heading: 'Learn it once. Run it for 1 company, 1,000 or 100,000.',
    lead: 'Learn it once. Run it for',
    counts: ['1 company.', '1,000 companies.', '100,000 companies.'],
    line: 'The first sign up at a company teaches the agent the way in. Every company after it runs that way in as a program: in seconds, the same way every time, and cheaper with each company you add.',
    steps: [
      {
        title: 'Learns the way in',
        line: 'An agent signs up at the first company step by step, and keeps every action as a trace.',
        label: 'An agent signs up at the first company: it opens the newsletter page, finds the sign up form, types its own email, ticks marketing emails, submits, then clicks the confirm link. Each action lands in a trace, saved as the newsletter sign up, version 1.',
      },
      {
        title: 'Turns it into a program',
        line: 'One program per platform, not per site. Code does the steps that never change; agents take only the odd ones.',
        label: 'The trace becomes a program of 6 steps: 4 in code, 1 typed question, 1 small agent, and a stop that hands anything new to a person. Once a platform is learned, 70 in 100 sign ups are a plain request, 25 a replayed script, and 5 need an agent.',
      },
      {
        title: 'Runs at any scale',
        line: 'Hand it 100,000 companies. The ones another customer already watches have their history on day one.',
        label: 'A list of 100,000 companies goes in through 1 API call, and the field of companies fills square by square, each square 250 companies, as the count reaches 100,000 customers kept. Then they sleep: about 140,000 wake a day, and about 2 are awake at any moment.',
      },
    ],
    learn: {
      url: 'fernhollow.example/pages/newsletter',
      field: 'a1.fernhollow@inbox.example',
      trace: [
        'Open /pages/newsletter',
        'Find the sign up form',
        'Type its own email',
        'Tick “marketing emails”',
        'Submit',
        'Click the confirm link',
      ],
      saved: 'Saved: newsletter sign up, v1',
    },
    program: {
      kinds: { code: 'Code', question: 'Question', agent: 'Small agent', escalate: 'Person' },
      steps: [
        { kind: 'code', label: 'Find the form on the page' },
        { kind: 'code', label: 'Post the sign up' },
        { kind: 'question', label: 'Does it ask to confirm?' },
        { kind: 'code', label: 'Open the confirm link' },
        { kind: 'agent', label: 'An extra field? Fill it in' },
        { kind: 'escalate', label: 'Anything new? Stop and ask' },
      ],
      routes: {
        heading: 'How a sign up runs, once its platform is learned',
        items: [
          { label: 'A plain request', share: 70, line: 'No browser, no model' },
          { label: 'A replayed script', share: 25, line: 'A browser for under a minute' },
          { label: 'An agent', share: 5, line: 'A new kind of form, or the odd one out' },
        ],
      },
    },
    run: {
      total: 100000,
      unit: 'customers kept',
      call: 'ob.become_customer("brands.csv")',
      covered: 'Companies another customer already watches come with their history.',
      square: 'Each square is 250 companies',
      toast: 'About 2 awake right now · 140,000 wakes a day',
    },
    principles: [
      { title: 'Learn once per platform', line: 'Most companies sign customers up on the same few platforms, so a sign up learned at one company runs at every company built the same way.' },
      { title: 'Code where it can, judgement where it must', line: 'A stronger agent sees only the cases a program can’t settle, then the program learns them too.' },
      { title: 'Asleep costs nothing', line: 'Agents wait for weeks or months without running, and wake only when the company acts.' },
    ],
  },

  /* The ask section (docs/positioning/ask-section.md), above the comparison: the commercial intelligence only a customer
     gets, its 4 areas as labels, and 1 question from each reader, each asked somewhere else. It took the place of the 4
     ways in, which /developers keeps. */
  ask: {
    ...askShared,
    areas: [
      { name: 'Rivals', line: 'What they send, offer and charge' },
      { name: 'Prospects', line: 'How they treat their customers, before your first call' },
      { name: 'Clients', line: 'What their customers actually get' },
      { name: 'Your own store', line: 'What a new customer gets from you' },
    ],
    examples: [askExamples.blackFriday, askExamples.brief, askExamples.watch],
  },

  compare,

  /* The close of how it works: what real audits found (Seun, 7 Oct, the same claim as the agencies use case), and 1 of
     those stores' report in every format it arrives in. Only the share with a gap shows, never how many were shopped
     (the 50 rule); "every journey" is joined by a non breaking space so it never breaks inside it. */
  outputs: {
    heading: '93% of stores we shopped on every\u00a0journey had a gap.',
    line: 'Here is 1 of them: a basket and a checkout left, and no email in 48 hours. Every step has its receipt, in whatever your team reads.',
    facts: [],
    cta: { label: 'See the full report', to: '/sample-output' },
  },

  openSource,

  /* The questions a reader asks before joining. The first answer is meta.answer, word for word. */
  faq: {
    heading: 'Before you join.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'Obsession’s AI agents sign up to any company you name and stay its customer for months, keeping every email, offer and price it sends, with proof. Use it from your own AI agent through MCP or the API, or from our website; the runtime is open source.',
      },
      {
        q: 'Do the agents pretend to be people?',
        a: 'No. When an agent talks to a person, it says it’s an AI. Signing up, reading emails and following ads needs no conversation at all.',
      },
      {
        q: 'Is it legal to be a rival’s customer?',
        a: 'Signing up to a newsletter, starting a trial or filling a basket is what any customer can do. Our agents do the same, say they’re AI when they talk to a person, and never use fake payment details.',
      },
      {
        q: 'Do I need to connect anything?',
        a: 'No. Name the companies and the agents start. Connect Clay, Slack or your CRM only if you want what they find to land there.',
      },
      {
        q: 'What do I get back?',
        a: 'Each thing a company did, in 1 sentence, with its receipt: the email, page or price behind it, exactly as it arrived, and when. In your agent, Slack, Clay, your CRM, a sheet, a report or a webhook.',
      },
      {
        q: 'How soon do I see something?',
        a: 'Most companies send a welcome email within minutes. If an agent is already a customer of a company, its history is there the moment you ask.',
      },
      {
        q: 'Can other customers see what I watch?',
        a: 'No. Anyone can see that a company is covered, and since when, but never who asked. A company’s customer agent is shared for what any customer gets, its emails, pages and prices, so its history is there on day one. Anything you set beyond that, like replying or buying, runs on an agent of your own, and your list, questions and reports are yours alone.',
      },
      {
        q: 'How do I get access?',
        a: 'Access opens from the waitlist, a team at a time. Join, and we set up your first watch with you.',
      },
      {
        q: 'Is Obsession open source?',
        a: 'Yes. The runtime is open source on GitHub: the customer agents, how they scale and learn, the record, recipes and the 5 verbs. Obsession Cloud runs it for you, with months of history already collected.',
      },
    ],
  },

  final: {
    heading: 'Name a company. See what its customers get.',
    capture: { ...waitlist, source: 'home-final' },
    link: { label: 'Agency? Get 5 client stores checked free', to: '/use-cases/leak-checks-for-retention-agencies' },
  },
}

import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Home (/): 6 blocks, each with 1 job, 1 headline, at most 1 short line and 1 visual, and nothing said twice (Seun's
   approved Home, 6 Oct):
   1 what it is (the hero, its form, and the 5 tabs of app screens, with 1 quiet line to every other recipe) >
   2 who it's for (James's persona band, as he built it) >
   3 the difference, shown (the gap: hollin's picture, Obsession as the customer next to a tool that reads the page) >
   4 proof (the 1 real run: its story in 1 line, the output in every format, and how the agents behave) >
   5 questions (6, closed until opened) >
   6 start (the waitlist, and the agencies' free audits).
   The jobs, your own AI agents, the recipe list, how it works, the API and the full rules each live on their own page.
   The only real run is the September store check: 4 test customers, 48 hours watched, 1 shopper left a basket and 1
   stopped at checkout, 0 reminders. Every hero screen is an example and says so (its Example tag). */

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession · Intelligence infrastructure for commercial teams',
    description:
      'Obsession is the intelligence infrastructure for commercial teams: declared AI agents that do business with other companies for you, every step signed.',
    /* The sentence AI assistants quote: the 1 definition, word for word as in the visible "What is Obsession?" answer. */
    answer:
      'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Early access',
    headline: 'The intelligence infrastructure for commercial teams',
    /* 4 short sentences: the pain, what the agents do, what they carry, what you get. */
    sub: 'Deals stall, prices slip and customers leave for reasons no tool can see. Obsession’s AI agents go in as the customer, at any company, yours included. Each has a real inbox, phone number and browser. You get signed proof and your next move.',
    capture: {
      kind: 'waitlist',
      source: 'home-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'What should we set up first for you?',
        options: ['Agency', 'Founder', 'Sales', 'Marketing', 'Developer', 'Something else'],
      },
      interest: 'any',
    },
    /* The facts row left the hero: the real run's own numbers are in the proof block. */
    proof: [],
    consoleHeading,
    /* Category tabs, each a full app screen that plays its story when chosen (REBUILD 1c): Seun's 5, the 5th a whole way
       in, not 1 recipe: Check your AI agents, linking /verify, named as the nav, the footer and the breadcrumb name it.
       AI checkout test is a recipe (its page, the Recipes menu), not a Home tab. */
    screens: [
      {
        tab: 'Prospect intelligence',
        screen: 'pack',
        recipe: 'prospect',
        line: 'Becomes each prospect’s customer and proves the gap you fix.',
      },
      {
        tab: 'Mystery shopper',
        screen: 'shop',
        recipe: 'mystery',
        line: 'Any trial, store, app or booking, tested as a customer, with the owner’s OK.',
      },
      {
        tab: 'Competitor tracking',
        screen: 'rivals',
        recipe: 'competitor',
        line: 'Signs up to every rival and logs each email, text, price and ad.',
      },
      {
        tab: 'Lead leaks',
        screen: 'inbound',
        recipe: 'speed',
        line: 'A labelled test lead times your speed to lead on form, chat and phone.',
      },
      {
        tab: 'Check your AI agents',
        screen: 'botcheck',
        line: 'Declared test customers ask your support bot on every channel, and check each answer.',
        link: { label: 'See how it works', to: '/verify' },
      },
    ],
    more: {
      line: 'Plus recipes for renewals, invoices, reviews and more.',
      link: { label: 'Browse all recipes', to: '/recipes' },
    },
  },

  gap: {
    heading: 'Other tools read the website. Obsession becomes the customer.',
    sub: 'It signs up, asks the bot and waits days for the reply. You see what customers actually get.',
    story: {
      label:
        'Example: most tools read hollin.example’s home page once, on Day 0, where it says “We reply within a day”, and log that the page changed. Obsession’s declared AI test customer signs up, gets the welcome email with a 10% code, and asks the site’s bot about a shirt size; the bot promises an email within a day. It checks the inbox each day: on Day 3 the follow up promised in chat has never come, and all 6 steps are signed.',
      site: 'hollin.example',
      outside: {
        name: 'Most tools',
        kind: 'page',
        day: 0,
        time: '09:14',
        title: 'Softer every wash.',
        line: 'We reply within a day',
        tag: 'Page changed',
        tally: '1 page read',
      },
      inside: {
        name: 'Obsession',
        agent: 'Test customer 1 · AI · for Your company',
        customer: 'Test customer 1 · AI',
        steps: [
          {
            kind: 'signup',
            day: 0,
            time: '09:14',
            title: 'Signed up',
            field: 'shopper1@test.useobsession.com',
            mailTitle: 'Welcome email',
            mail: 'Welcome to hollin. Here’s 10% off.',
            mailTime: '09:15',
          },
          {
            kind: 'chat',
            day: 0,
            time: '09:21',
            title: 'Asked the bot',
            ask: 'Can you help me pick a size in the Weekend Shirt?',
            reply: 'Of course. Our fit team will email you within a day.',
            promise: 'within a day',
          },
          { kind: 'wait', day: 1, time: '09:21', title: 'No email', since: '24 h' },
          { kind: 'wait', day: 2, time: '09:21', title: 'No email', since: '48 h' },
        ],
        finding: {
          day: 3,
          time: '09:21',
          title: 'The follow up promised in chat never came',
          short: 'No follow up',
          meta: '0 emails in 72 h',
        },
        tally: '6 of 6 signed',
        hash: '2b9e 04d7 … 5a10',
      },
    },
    /* The picture says it: no comparison rows on Home. */
    rows: [],
  },

  /* Home has no use case tabs: the hero's tabs carry that beat. */
  uses: { heading: '', items: [] },

  outputs: {
    /* The line tells the run and the viewer's tabs show the formats, so the heading says only what it is. */
    heading: '1 real run.',
    line: '4 test customers shopped a UK store in September. 1 left a basket, 1 stopped at checkout, and nobody wrote to either in 48 hours.',
    /* No numbers row on Home: the line above already gives the run's 4, 2 and 48 hours. /sample-output has them all. */
    facts: [],
    cta: { label: 'See the full report', to: '/sample-output' },
    /* The rules every run follows, in a few words each; /agents has them in full. */
    behave: {
      heading: 'How our agents behave',
      items: [
        'Say they’re AI',
        'Ask the bot, never staff',
        'Public journeys only',
        'Stop before payment',
        'Nothing without your OK',
        'Every step signed',
      ],
    },
  },

  /* The 6 questions a reader asks before joining, each answered in 2 short sentences at most. The first answer is
     meta.answer, word for word. */
  faq: {
    heading: 'Before you join.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you.',
      },
      {
        q: 'Do the agents pretend to be people?',
        a: 'No. Every agent says it’s AI and who it works for, at first contact.',
      },
      {
        q: 'Is it legal to sign up at a rival or a prospect?',
        a: 'It uses only what any customer can do in public, as a declared AI, and never contacts staff. Rival trials use no card and stop the moment a rep writes.',
      },
      {
        q: 'Do you need access to our systems?',
        a: 'No. The agents use your site the way your customers do. Connect a tool only if you want its data in the report.',
      },
      {
        q: 'What do I get back?',
        a: 'Signed proof of every step and your next move, as a report, an email, Slack, a sheet, Clay or a webhook.',
      },
      {
        q: 'When can I use it?',
        a: 'Now, in early access. Join the waitlist and we set up your first job with you.',
      },
    ],
  },

  final: {
    heading: 'Find out first, not from a customer.',
    capture: {
      kind: 'waitlist',
      source: 'home-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'What should we set up first for you?',
        options: ['Agency', 'Founder', 'Sales', 'Marketing', 'Developer', 'Something else'],
      },
      interest: 'any',
    },
    link: { label: 'Agency? Get 5 client stores audited free in 48 hours', to: '/use-cases/mystery-shopping-for-ecommerce-agencies' },
  },
}

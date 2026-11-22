import { kitPathOf } from '../kitPaths'
import { personaCostLine, plans } from '../prices'
import type { UseCaseStudy } from '../types'

/* Prospect intelligence with Clay (/use-cases/prospect-intelligence-with-clay), 22 Nov 2026 rewrite for the toolkit
   position: a persona signs up at each company on the Clay rows an outbound team already has, and the blueprint
   returns what each company emails and texts a new customer, and what never came, as new columns on the same rows. Part of the Watch the market kit. James's cast stays (an agency, its SMS app client, 300 UK
   brands, Tidewren Swim); every name and figure is invented and `fine` says so. Company facts only: names and roles stay
   in the agency's own table. James's page (src/legacy/james) draws this address and reads the headline, sub, questions,
   small print and final words from here; meta.answer is the first answer. Prices come from prices.ts. */

const fees = plans.filter((p) => (p.monthly ?? 0) > 0).map((p) => `$${p.monthly}`)
const planWords = `the Free plan, then ${fees.slice(0, -1).join(', ')} or ${fees[fees.length - 1]} a month`

const answer =
  'Obsession, the toolkit for AI agents, puts a column of facts on the Clay rows you already have. A persona, an AI agent with its own inbox, number and browser, signs up at each company on your list and brings back what it emails and texts a new customer, and what never came, each dated with a screenshot. The Prospect intelligence blueprint runs it, and the facts land back on the same rows.'

export const study: UseCaseStudy = {
  name: 'Prospect intelligence with Clay',
  line: 'A column of facts on the Clay rows you already have.',

  meta: {
    path: '/use-cases/prospect-intelligence-with-clay',
    title: 'Prospect intelligence with Clay: AI agents on your rows',
    description:
      'AI agents sign up at every company on your Clay rows and bring back what each emails and texts a new customer, and what never came, with a screenshot.',
    answer,
    ogImage: '/og/prospect-intelligence-with-clay.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Prospect intelligence with Clay', path: '/use-cases/prospect-intelligence-with-clay' },
    ],
  },

  hero: {
    pill: 'Watch the market kit',
    headline: 'A column of facts on the Clay rows you already have.',
    sub: 'Every agency buys the same install data, so every brand hears the same opener. A persona signs up at each company on your rows and brings back what it sends a new customer, and what never came, dated with a screenshot. Your first line becomes a fact about their own texts.',
    example: { chips: [] },
    flow: [
      {
        label: 'Clay in',
        title: 'UK ecommerce brands',
        items: ['Tidewren Swim', 'Halvard & Moss', 'Fennick Home', 'Larkbound'],
        foot: 'View: SMS popup is yes · 300 rows',
      },
      {
        label: 'Obsession',
        title: 'A persona at each brand',
        items: ['Its own inbox', 'A UK mobile number', 'Signs up as a new customer', 'Every fact dated'],
        foot: 'Prospect intelligence on 300 brands',
      },
      {
        label: 'Back in Clay',
        title: '4 new columns, same rows',
        items: ['Tidewren Swim: no texts after opt in', 'Halvard & Moss: no gap', 'Fennick Home: no welcome email', 'Larkbound: no texts, no reply'],
        foot: 'Fact · Seen on · What happened · Screenshot',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-clay-hero',
      button: 'Start free',
      interest: 'prospect',
    },
    secondary: { label: 'See the blueprint', to: '/blueprints/prospect-intelligence' },
  },

  how: {
    heading: 'Point Prospect intelligence at a Clay view. Each row gets its facts.',
    sub: 'An outbound agency runs it for 1 client, an SMS app, across 300 UK ecommerce brands.',
    steps: [
      {
        title: 'Set it up',
        line: 'Pick the blueprint, choose the facts and point it at a Clay view.',
        screen: 'claycols',
        chips: ['No text within 24 hours of opting in', 'No welcome email within 1 hour', 'No support reply within 24 hours', 'Every miss rechecked from a fresh number'],
        steps: [
          {
            title: 'Pick a blueprint',
            line: 'A blueprint is a job Obsession runs on its pieces. Launch it as it is, change anything, or describe the job in your own words.',
            example: 'The agency picks Prospect intelligence: a fact about each company you’re about to write to.',
          },
          {
            title: 'Configure it',
            line: 'Choose the facts your client’s product is about and when a missing message counts. Each check has its own deadline, and fixed rules decide every verdict, so the same evidence always gets the same answer.',
            example: 'Email sign-up, text opt in and 1 support question, checked at 48 hours, then every week. Rechecks are on: a control text proves each phone gets texts, and every miss runs again from a fresh number.',
          },
          {
            title: 'Add the companies',
            line: 'Connect Clay, upload a CSV, call the API or paste a list. With Clay you pick a view you’ve already filtered, point at the website column, and choose where each fact lands.',
            example: 'The agency connects its “SMS popup” view, so no persona goes to a brand with no texts at all, and turns on new rows so the list grows with the table.',
          },
          {
            title: 'Check and start',
            line: 'One summary of what will happen. Each fact fills in as emails and texts arrive, with each verdict at 48 hours.',
            example: 'The agency saves it as its own blueprint, “SMS app client”, ready to rerun for the next SMS client it signs.',
          },
        ],
      },
      {
        title: 'The personas do the waiting',
        line: '48 hours in this example. Each brand gets its own persona, and a miss counts only once the recheck confirms it.',
        screen: 'brandwatch',
        chips: ['New customer · UK', 'Its own inbox', 'A UK mobile number', 'Says it’s an AI'],
        steps: [
          {
            title: 'Each brand gets its own persona',
            line: 'Its own inbox, UK mobile number and browser, used for that one brand. It signs up the way any customer can, keeps a screenshot at every step and says it’s an AI when it talks to a person.',
            example: 'Tidewren Swim, persona 4F2A: signed up and ticked text consent at 10:14. The welcome email came in 38 seconds, the control text in 4.',
          },
          {
            title: 'It waits, up to 48 hours',
            line: 'Every email, text and reply lands in that brand’s own inbox and phone. With rechecks on, a deadline that passes with nothing gets a second run from a fresh number before it counts.',
            example: 'At hour 30: 1,104 emails and 466 texts in, 74 brands with no text 24 hours after opting in, and 12 new rows from Clay on their own clock.',
          },
          {
            title: 'Results after 48 hours',
            line: 'A fact for every brand. With rechecks on, as here, a missed deadline counts only once the control text and the second run confirm it.',
            example: '61 of 296 brands opted in for texts and never got one, 19 sent no welcome email at all, and at 84 support took more than 24 hours to reply. 4 had no working sign-up form, which is a fact too.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Install data tells you what a brand has, not what it does.',
    items: [
      {
        title: 'Everyone has the same signals',
        line: 'Every agency can buy the same install data, so the brands you write to hear the same “noticed you use” line every week.',
      },
      {
        title: 'Installed isn’t working',
        line: 'An install says the tool is there, not that it works. A mockup shows the fix, but nothing yet shows the problem.',
      },
      {
        title: 'By hand doesn’t scale',
        line: 'Signing up with a spare inbox and phone, then waiting and checking each one, at 300 brands per client, is weeks of work for a small team.',
      },
    ],
    answer: 'Obsession gives you a dated fact about each brand, with its screenshot, about the exact problem your client’s product fixes.',
  },

  fit: {
    heading: 'It starts and ends in your Clay table.',
    line: 'No export, no new place to work. The brands go in from Clay and the facts come back to the same rows.',
    items: [
      { title: 'Your list is already there', line: 'Each client’s TAM is a Clay table, built from your ecommerce and install data.' },
      { title: 'Facts come back as columns', line: 'Use them as a variable in your copy, a filter for who to write to, and a trigger when they change.' },
      { title: 'Everything else still works', line: 'Google Sheets, a CSV, the API or MCP, or a pasted list for one-offs, like 25 brands before a pitch.' },
    ],
  },

  outputs: {
    heading: 'The facts sharpen the list, time the email and win the next client.',
    groups: [
      {
        items: [
          {
            label: 'A sharper list',
            title: 'Write only where there’s a gap',
            line: 'Filter the Clay table on the Fact column and leave the rest out of the sequence.',
            example: '61 of 300 brands get the SMS email this month.',
          },
          {
            label: 'Triggers',
            title: 'Changes become reasons to write',
            line: 'Weekly checks tell you when to write, and when to stop.',
            example: 'Tidewren sent its first text: pause the sequence.',
          },
          {
            label: 'Something to sell',
            title: 'A monthly add-on per client',
            line: 'Brand facts for each SaaS client: brands checked, gaps open, gaps fixed, each with its screenshot.',
            example: 'SMS app prospects, October: 73 open gaps, 12 fixed.',
          },
          {
            label: 'Winning clients',
            title: 'Open the pitch with facts',
            line: 'Paste 25 brands from a prospect’s TAM before the first call.',
            example: '“Of the 25 brands you’d sell to, 9 took a text opt in and never sent one.”',
          },
        ],
      },
    ],
  },

  proof: {
    heading: 'Every brand comes back as 4 new columns in Clay, each fact with its screenshot.',
    line: 'Your own Clay prompts turn those facts into the first line of your email.',
    screen: 'proofmail',
    steps: [
      {
        title: 'The proof behind every fact',
        line: 'The verdict, a timeline with every step’s time, the screenshots and the emails and texts themselves. 1 link anyone can open, including the brand.',
        example: 'Tidewren Swim: opted in for texts on 15 September. No texts in 48 hours, confirmed by the control text and a second run from a fresh number.',
      },
      {
        title: 'The facts land back in Clay',
        line: '4 new columns on the same rows: the fact, the day it was seen, what happened in 1 plain sentence, and the screenshot. Obsession reports what happened, and your team writes to the brand.',
        example: 'UK ecommerce brands: the first 300 are done. 61 opted in for texts and never got one, and 19 never sent a welcome email. New rows report as they finish.',
      },
    ],
    opener: {
      heading: 'Our fact and your mockup, in 1 email.',
      line: 'The fact shows what’s happening at the brand today. Your mockup shows what it could look like with your client’s product.',
      mail: {
        from: 'Sam, SMS app',
        to: 'Hannah Price, Tidewren Swim',
        subject: 'Tidewren’s texts',
        body: [
          'Hi Hannah,',
          'We opted in for Tidewren’s texts on 15 September. 3 emails arrived in the next 2 days, but not a single text.',
          'I’ve mocked up what your first 3 could look like, using your own welcome offer. Worth a look?',
          'Sam',
        ],
        attachments: ['Screenshots: Tidewren, 15 to 17 Sep', 'Mockup: Tidewren texts'],
        note: 'Written by your own Clay prompt, from the “What happened” column.',
      },
      mockup: {
        label: 'Your mockup',
        sender: 'Tidewren',
        channel: 'Text message',
        messages: [
          { day: 'Day 0', text: 'Welcome to Tidewren! Here’s 10% off your first suit with code TIDE10.' },
          { day: 'Day 2', text: 'The Ardley is back in your size. Want us to hold one for you?' },
          { day: 'Day 5', text: 'Last day for your 10%. Reply with your usual size and we’ll suggest a fit.' },
        ],
      },
    },
  },

  more: {
    recipe: {
      label: 'The blueprint',
      title: 'Prospect intelligence',
      line: 'Every check it can run, and everything you can change.',
      cta: { label: 'See the blueprint', to: '/blueprints/prospect-intelligence' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample data',
      line: 'Brand G, a real skincare store: a £40 basket left at 02:57 on 22 Sep, still no reminder 48 hours later.',
      cta: { label: 'See sample data', to: '/sample-output' },
    },
  },

  fine: 'The agency, its client, the brands and their .example addresses, the people, the phone number and every figure here are made up, and no real company’s results are shown. Clay is a trademark of its owner, named to show where the facts go.',

  faq: {
    heading: 'What outbound teams ask.',
    items: [
      {
        q: 'What does Obsession do for teams that use Clay?',
        a: answer,
      },
      {
        q: 'Where does the data come from?',
        a: 'From real sign-ups. A persona signs up and opts in the way any customer can, as the profile and country you choose, and keeps each account open for months. Every email and text is kept as it arrived, with its sender checked. When it talks to a person, it says it’s an AI.',
      },
      {
        q: 'Does it find contacts or track people?',
        a: 'No. Obsession collects what a company sends its customers, never who works there. Names and roles stay in your own Clay table.',
      },
      {
        q: 'How do you know a gap is real?',
        a: 'Each check has a deadline, and fixed rules decide every verdict, so the same evidence always gets the same answer. You can also turn on rechecks, as this agency did: a control text proves the phone gets texts, and every miss runs again from a fresh number before it counts.',
      },
      {
        q: 'Who writes the email?',
        a: 'You do. Obsession reports what happened, with the screenshot. Your own Clay prompts decide what to say, so you can see what a true first line does to reply rates, meetings booked and opportunities.',
      },
      {
        q: 'Does Obsession need Clay?',
        a: 'No. Clay is the easiest way in, but Google Sheets, a CSV, the API or MCP, or a pasted list work too. Every fact also lands in your event log.',
      },
      {
        q: 'How is it priced?',
        a: `${personaCostLine} It costs nothing while it waits, and Prospect intelligence is billed on the pieces it uses. Start on ${planWords}.`,
        link: { label: 'See pricing', to: '/pricing' },
      },
    ],
  },

  final: {
    heading: 'Put a fact about every brand on your Clay rows.',
    sub: 'Start with one Clay view, so you can see what it does to reply rates, meetings booked and opportunities.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-clay-final',
      button: 'Start free',
      interest: 'prospect',
    },
    link: { label: 'See the Watch the market kit', to: kitPathOf.watch },
  },
}

import type { UseCaseStudy } from '../types'

/* Prospect intelligence with Clay (/use-cases/prospect-intelligence-with-clay): James's worked example, moved into
   typed content in the rebuild's story order (types.ts, "Use case studies"). An outbound agency proves a gap at 300
   brands for 1 client, an SMS app, from a Clay view and back. Every name and figure is invented and the page says so.
   Kept from James: the cast and numbers (SMS app prospects and UK Shopify brands, his 2 Oct naming; Tidewren Swim, Halvard & Moss, Fennick Home, Larkbound, 300 and 296
   brands, 61, 19, 74, Hannah and Sam, TIDE10), his 10 steps in 3 phases, the picks, the Clay columns, the opener email
   and mockup, the 4 ways to use the facts, the final offer. The control text and second run stay only as this
   example's recheck setting, which the agency turns on, never as how every gap is confirmed: the real September run had
   neither.
   Narrative edit (3 Oct): the hero is a complete claim and names the declared shopper; How says what the agency picks
   and what the shopper does; the proof hands off to the first email; the real run's line states what it found.
   Fixed (red lines and copy rules): the support question is a question to the site's chat bot (no answer within 24
   hours is the gap, and the step ends if a person picks up); live chat is gone; basket and checkout need the brand's
   OK and stop before payment; no real company names but Clay (Store Leads, BuiltWith, Klaviyo and Shopify are gone);
   the recipe is Prospect intelligence; the shoppers say they're AI; numerals; no meta headings.
   Screens: claycols (set up), brandwatch (the watching), proofmail (the proof and the opener). */

export const study: UseCaseStudy = {
  name: 'Prospect intelligence with Clay',
  line: 'Proof of a real gap at each brand, back in Clay.',

  meta: {
    path: '/use-cases/prospect-intelligence-with-clay',
    title: 'Prospect intelligence with Clay: a proven gap at each brand',
    description:
      'An example: AI agents become a customer of every brand in a Clay view, watch for 48 hours, and write each gap and its proof back to the same rows.',
    answer:
      'Prospect intelligence with Clay is a worked example of Obsession. Declared AI agents become a customer of every brand in a client’s Clay view: they sign up, opt in to texts and ask the site’s chat bot, watch for 48 hours, then write each gap, its date and its proof back to the same rows. The agency, brands and figures are made up.',
    ogImage: '/og/prospect-intelligence-with-clay.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Prospect intelligence with Clay', path: '/use-cases/prospect-intelligence-with-clay' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'AI agents prove a real gap at every brand on your list.',
    sub: 'A declared AI shopper becomes a customer of each brand your client wants to win, watches what happens, and writes the facts back into your Clay table.',
    example: {
      chips: ['Example: an outbound agency', 'Its client: an SMS app', '300 UK ecommerce brands'],
      note: 'The agency, its client, the brands, the people and the numbers on this page are made up.',
    },
    flow: [
      {
        label: 'Clay in',
        title: 'UK Shopify brands',
        items: ['Tidewren Swim', 'Halvard & Moss', 'Fennick Home', 'Larkbound'],
        foot: 'View: SMS popup is yes · 300 rows',
      },
      {
        label: 'Obsession',
        title: 'A shopper for each brand',
        items: ['Its own inbox', 'A UK mobile number', 'Its own browser', 'Says it’s AI'],
        foot: 'Watching for 48 hours',
      },
      {
        label: 'Back in Clay',
        title: '4 new columns, same rows',
        items: ['Tidewren Swim: no texts after opt in', 'Halvard & Moss: no gap', 'Fennick Home: no welcome email', 'Larkbound: no texts, no bot answer'],
        foot: 'Gap · Seen · What happened · Proof',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-clay-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We’ll only use your email to tell you about Obsession.',
      interest: 'prospect',
    },
  },

  how: {
    heading: 'You pick the gap and the Clay view. A declared AI shopper watches each brand.',
    sub: 'An outbound agency runs it for 1 client, an SMS app, across 300 UK ecommerce brands.',
    steps: [
      {
        title: 'Set it up',
        line: 'Pick the recipe, choose what counts as a gap and point it at a Clay view.',
        screen: 'claycols',
        chips: [
          'No text within 24 hours of opting in',
          'No welcome email within 1 hour',
          'No answer from the site’s chat bot within 24 hours',
          'Every miss rechecked from a fresh number',
        ],
        steps: [
          {
            title: 'Create a watch',
            line: 'A watch is 1 list of companies, the checks to run on them, and how long to keep watching.',
            example: 'The agency starts a new watch on SMS app prospects.',
          },
          {
            title: 'Pick a recipe',
            line: 'A recipe comes with the checks for 1 job already set up. Launch it as it is, change anything you like, or skip it and describe what you want to know in your own words.',
            example:
              'The agency picks Prospect intelligence. It proves a gap at companies you’re about to write to. Competitor tracking is for watching rivals over time.',
          },
          {
            title: 'Configure it',
            line: 'Choose the gap your client’s product closes and what counts as a gap. Each check has its own deadline, and fixed rules decide every verdict, so the same evidence always gets the same answer.',
            example:
              'Email sign up, text opt in and 1 question to the site’s chat bot, watched for 48 hours, then every week. Rechecks are on: a control text proves each phone gets texts, and every miss runs again from a fresh number.',
          },
          {
            title: 'Add the companies',
            line: 'Connect Clay, upload a CSV, call the API or paste a list. With Clay you choose a table and a view you’ve already filtered, point at the website column, and choose where each fact lands.',
            example:
              'The agency connects Clay. It uses its “SMS popup” view, so no check is spent on a brand with no SMS at all, and turns on new rows so the watch grows with the table.',
          },
          {
            title: 'Check and start',
            line: 'A summary of what will happen. Welcome emails can arrive within minutes, and each brand’s verdict lands 48 hours after its sign up.',
            example: 'The agency saves it as a recipe, “SMS app client”, ready to rerun for the next SMS client it signs.',
          },
        ],
      },
      {
        title: 'Obsession does the watching',
        line: '48 hours in this example. Each brand gets its own declared shopper, and a miss counts only once the recheck confirms it.',
        screen: 'brandwatch',
        chips: ['Its own inbox', 'A UK mobile number', 'Its own browser', 'Says it’s AI'],
        steps: [
          {
            title: 'Each brand gets its own shopper',
            line: 'A real inbox, a real UK mobile number and its own browser, used for that 1 brand only. It signs up the way a customer would and saves a screenshot at every step. It always says it’s AI.',
            example:
              'Tidewren Swim, shopper 4F2A: signed up and ticked text consent at 10:14. The welcome email came in 38 seconds, the control text in 4.',
          },
          {
            title: 'It waits, up to 48 hours',
            line: 'Every email and text lands in that brand’s own inbox and phone, and every answer from its chat bot is saved. With rechecks on, a deadline that passes with nothing gets a second run from a fresh number before it counts. Brands added later run on their own clock.',
            example:
              'Hour 30 of 48: 1,104 emails and 466 texts in, 74 brands with no text 24 hours after opting in, and 12 new rows from Clay on their own watch.',
          },
          {
            title: 'Results after 48 hours',
            line: 'A finding for every brand. With rechecks on, as here, a missed deadline counts as a gap only once the control text and the second run confirm it.',
            example:
              '61 of 296 brands opted in for texts and never got one, 19 sent no welcome email at all, and at 84 the site’s chat bot gave no answer within 24 hours. 4 had no working sign up form, which is logged as a finding too.',
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
        line: 'An install says the tool is there, not that it works. A mockup shows the fix, but nothing yet proves the problem.',
      },
      {
        title: 'Proof by hand doesn’t scale',
        line: 'Signing up, giving a number, waiting for replies and checking every inbox and phone, at 300 brands per client, is weeks of work for a small team.',
      },
    ],
    answer: 'Obsession gets you a dated fact about each brand, collected as a customer, about the exact problem your client’s product fixes.',
  },

  fit: {
    heading: 'It starts and ends in your Clay table.',
    line: 'No export, no new place to work. The brands go in from Clay and the facts come back to the same rows.',
    items: [
      { title: 'Your list is already there', line: 'Each client’s TAM is a Clay table, built from your ecommerce and install data.' },
      { title: 'Facts come back as columns', line: 'Use them as a variable in your copy, a filter for who to write to, and a trigger when they change.' },
      { title: 'Everything else still works', line: 'Upload a CSV, call the API or paste a list for one offs, like 25 brands before a pitch.' },
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
            line: 'Filter the Clay table on the Gap column and leave the rest out of the sequence.',
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
            title: 'A monthly add on per client',
            line: 'Brand evidence for each SaaS client: brands checked, gaps open, gaps fixed, a proof link for each.',
            example: 'SMS app prospects, October: 73 open gaps, 12 fixed.',
          },
          {
            label: 'Winning clients',
            title: 'Open the pitch with proof',
            line: 'Paste 25 brands from a prospect’s TAM before the first call.',
            example: '“9 of 25 brands you’d sell to took a text opt in and never sent one.”',
          },
        ],
      },
    ],
  },

  proof: {
    heading: 'Every brand comes back as 4 new columns in Clay, with a proof link anyone can open.',
    line: 'Your own Clay prompts turn those facts into the first line of your email.',
    screen: 'proofmail',
    steps: [
      {
        title: 'A proof link for every brand',
        line: 'The verdict, a timeline with every step’s time, the screenshots and the actual emails and texts. All in a link anyone can open, including the brand.',
        example:
          'Tidewren Swim: opted in for texts on 15 September. No texts in 48 hours, confirmed by the control text and a second run from a fresh number.',
      },
      {
        title: 'The facts land back in Clay',
        line: '4 new columns on the same rows: the gap, the date it was seen, what happened in 1 plain sentence, and the proof link. Obsession reports what happened, and never writes to the brand.',
        example:
          'In #sms_app_prospects: UK Shopify brands, the first 300 are done. 61 opted in for texts and never got one, and 19 never sent a welcome email. New rows report as they finish.',
      },
    ],
    opener: {
      heading: 'Your first email carries our proof and your mockup.',
      line: 'The proof shows what’s happening at the brand today. Your mockup shows what it could look like with your client’s product.',
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
        attachments: ['Proof: Tidewren, 15 to 17 Sep', 'Mockup: Tidewren texts'],
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
      label: 'The recipe',
      title: 'Prospect intelligence',
      line: 'Every check it can run, and everything you can change.',
      cta: { label: 'Learn more', to: '/recipes/prospect-intelligence' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample output',
      line: 'A UK store checked in September 2026: 1 basket and 1 checkout left, and nobody wrote to either in 48 hours.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'The agency, its client, the brands, the people, the phone number and every figure here are made up, and no real company’s results are shown. Basket and checkout checks run only with the brand’s OK, and stop before payment. Clay is a trademark of its owner, named to show where the data comes from and goes.',

  faq: {
    heading: 'Every shopper says it’s AI. Only the site’s chat bot hears a question.',
    items: [
      {
        q: 'Does it contact anyone at the brand?',
        a: 'No. Declared as AI and from Obsession, it signs up, opts in to texts and asks the site’s chat bot 1 question. If a person picks up the chat, the step ends. It never writes to staff.',
      },
      {
        q: 'How do you know a gap is real?',
        a: 'Each check has a deadline, and fixed rules decide every verdict, so the same evidence always gets the same answer. You can also turn on rechecks, as this agency did: a control text proves the phone gets texts, and every miss runs again from a fresh number before it counts.',
      },
      {
        q: 'Does it fill a basket or buy anything?',
        a: 'Not at a prospect. Basket and checkout checks run only with the brand’s OK, and stop before payment.',
      },
      {
        q: 'Who writes the email?',
        a: 'You do. Obsession reports what happened, with the proof. Your own Clay prompts decide what to say.',
      },
      {
        q: 'Do new rows in the Clay view get checked?',
        a: 'Yes, once you turn on new rows. Rows added to the view later get their own watch on their own clock. Rows that leave the view stop.',
      },
      {
        q: 'What happens after the 48 hours?',
        a: 'It stops, or checks every week and tells you when a gap closes, so you know when to write and when to stop.',
      },
      {
        q: 'Does it need Clay?',
        a: 'No. Clay is the easiest way in and out, but you can upload a CSV, call the API or paste a list for one offs, like 25 brands before a pitch.',
      },
    ],
  },

  final: {
    heading: 'Try it on 1 client.',
    sub: 'Join the waitlist, and we’ll run prospect intelligence on 20 brands from 1 client’s list, with the facts back in your Clay table.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-clay-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We’ll only use your email to tell you about Obsession.',
      interest: 'prospect',
    },
  },
}

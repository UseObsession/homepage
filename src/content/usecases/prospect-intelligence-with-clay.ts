import type { UseCaseStudy } from '../types'

/* Prospect intelligence with Clay (/use-cases/prospect-intelligence-with-clay): James's worked example, moved into
   typed content in the rebuild's story order (types.ts, "Use case studies"). An outbound agency proves a gap at 300
   brands for 1 client, an SMS app, from a Clay view and back. Every name and figure is invented and the page says so.
   Kept from James: the cast and numbers (SMS app prospects and UK ecommerce brands, his 2 Oct naming without Shopify;
   Tidewren Swim, Halvard & Moss, Fennick Home, Larkbound, 300 and 296 brands, 61, 19, 74, Hannah and Sam, TIDE10), his 10 steps in 3 phases, the picks, the Clay columns, the opener email
   and mockup, the 4 ways to use the facts, the final offer. The control text and second run stay only as this
   example's recheck setting, which the agency turns on, never as how every gap is confirmed: the real September run had
   neither.
   Narrative edit (3 Oct): the hero is a complete claim and names the declared shopper; How says what the agency picks
   and what the shopper does; the proof hands off to the first email; the real run's line states what it found.
   Fixed (copy rules): the support question is a question to the site's chat bot (no answer within 24 hours is the
   gap); live chat is gone; no real company names but Clay (Store Leads, BuiltWith, Klaviyo and Shopify are gone); the
   recipe is Prospect intelligence; numerals; no meta headings.
   Rules (19 Oct, in line with /recipes/prospect-intelligence): only the 3 lines in obsession/system.md hold. Baskets,
   checkout and writing to staff are the agency's setting; a shopper says it is AI when it talks to a person, and
   uses no fake payment details. So the question goes to the brand's support again, as James had it, not only to a
   chat bot.
   Rewritten 19 Oct (James) in the site's October voice, as the agencies example was: the agency becomes a customer of
   every brand its client wants to win, and keeps the receipts. No "Example" chips: the brands are .example addresses
   and `fine` says what is made up. The hero's picture is the board (components/study/Board) in place of the 3 stop
   flow: the Clay view's brands watched at once for 48 hours, 1 column per check, the silences landing at the last
   hour, and the receipt of tidewren.example's missing texts, the gap the proof steps and the first email pick up.
   James's page (src/legacy/james) draws this address. It reads its headline, its sub, its board, its questions and
   its small print from here, so the head, the JSON-LD and the page say the same words; meta.answer is the first
   answer. These words also give its card in the nav and on /use-cases.
   Screens: claycols (set up), brandwatch (the watching), proofmail (the proof and the opener). */

export const study: UseCaseStudy = {
  name: 'Prospect intelligence with Clay',
  line: 'Each gap and its receipt, back in the same Clay rows.',

  meta: {
    path: '/use-cases/prospect-intelligence-with-clay',
    title: 'Prospect intelligence with Clay: a proven gap at each brand',
    description:
      'AI agents become a customer of every brand in your Clay view: they sign up, opt in to texts and ask support, and write each gap back with its receipt.',
    answer:
      'Obsession gives outbound agencies a customer at every brand in a client’s Clay view: AI agents with their own inbox, mobile number and browser that sign up, opt in to texts and ask support a question, then wait 48 hours. Each gap comes back to the same Clay rows with its receipt, a proof link anyone can open.',
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
    headline: 'Be a customer of every brand your client wants to win.',
    sub: 'Every agency buys the same install data, so every brand hears the same opener. AI agents sign up at each brand in your client’s Clay view, opt in to texts and ask support a question. Each gap comes back to the same rows with its receipt, ready for the first email.',
    example: { chips: [] },
    /* The board: 300 brands, 3 checks, 48 hours. A cell's `at` is the hour it came back; a silence lands at hour 48.
       The 4 rows are the 4 brands the steps and the Clay table name; each role is the contact on that Clay row. */
    board: {
      label:
        'An outbound agency’s Clay view of 300 UK ecommerce brands, each watched as a customer for 48 hours for 1 client, an SMS app: the welcome email, texts after opting in, and a support question. tidewren.example: no text after opting in, its receipt kept for the first email. halvard.example: every check came back. fennick.example: no welcome email. larkbound.example: no texts and no reply from support.',
      who: 'SMS app prospects',
      count: '300 brands from Clay, 3 checks each',
      hours: 48,
      hour: 'Hour',
      cols: ['Welcome email', 'Texts', 'Support'],
      rows: [
        {
          store: 'tidewren.example',
          role: 'Hannah Price, Head of CRM',
          cells: [
            { state: 'ok', text: 'In 38 s', at: 0.01 },
            { state: 'gap', text: 'Silent' },
            { state: 'ok', text: 'After 26 h', at: 26 },
          ],
        },
        {
          store: 'halvard.example',
          role: 'Leo Grant, Founder',
          cells: [
            { state: 'ok', text: 'In 2 min', at: 0.03 },
            { state: 'ok', text: '2 texts', at: 0.25 },
            { state: 'ok', text: 'After 3 h', at: 3 },
          ],
        },
        {
          store: 'fennick.example',
          role: 'Priya Shah, Head of Retention',
          cells: [
            { state: 'gap', text: 'Silent' },
            { state: 'ok', text: '1 text', at: 0.5 },
            { state: 'ok', text: 'After 31 h', at: 31 },
          ],
        },
        {
          store: 'larkbound.example',
          role: 'Owen Hale, Ecommerce Director',
          cells: [
            { state: 'ok', text: 'In 4 min', at: 0.07 },
            { state: 'gap', text: 'Silent' },
            { state: 'gap', text: 'No reply' },
          ],
        },
      ],
      more: '+ 296 more brands',
      receipt: {
        store: 'tidewren.example',
        rows: [
          { k: 'Signed up', v: 'Tue 15 Sep, 10:14' },
          { k: 'Texts', v: 'Opted in, 0 in 48 hours' },
          { k: 'Control', v: 'Our text arrived in 4 s' },
          { k: 'Rerun', v: 'Fresh number, 0 texts' },
          { k: 'Clay', v: 'Back in 4 new columns' },
        ],
        fact: 'Opted in for texts on 15 September. 3 emails came in 48 hours, and no text.',
        stamp: 'No texts',
      },
    },
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
    heading: 'You pick the gap and the Clay view. An AI shopper watches each brand.',
    sub: 'An outbound agency runs it for 1 client, an SMS app, across 300 UK ecommerce brands.',
    steps: [
      {
        title: 'Set it up',
        line: 'Pick the recipe, choose what counts as a gap and point it at a Clay view.',
        screen: 'claycols',
        chips: [
          'No text within 24 hours of opting in',
          'No welcome email within 1 hour',
          'No support reply within 24 hours',
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
              'Email sign up, text opt in and 1 support question, watched for 48 hours, then every week. Rechecks are on: a control text proves each phone gets texts, and every miss runs again from a fresh number.',
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
        line: '48 hours in this example. Each brand gets its own AI shopper, and a miss counts only once the recheck confirms it.',
        screen: 'brandwatch',
        chips: ['Its own inbox', 'A UK mobile number', 'Its own browser', 'Says it’s AI'],
        steps: [
          {
            title: 'Each brand gets its own shopper',
            line: 'A real inbox, a real UK mobile number and its own browser, used for that 1 brand only. It signs up the way a customer would and saves a screenshot at every step. It says it’s AI when it talks to a person.',
            example:
              'Tidewren Swim, shopper 4F2A: signed up and ticked text consent at 10:14. The welcome email came in 38 seconds, the control text in 4.',
          },
          {
            title: 'It waits, up to 48 hours',
            line: 'Every email and text lands in that brand’s own inbox and phone, and every reply from support is saved. With rechecks on, a deadline that passes with nothing gets a second run from a fresh number before it counts. Brands added later run on their own clock.',
            example:
              'Hour 30 of 48: 1,104 emails and 466 texts in, 74 brands with no text 24 hours after opting in, and 12 new rows from Clay on their own watch.',
          },
          {
            title: 'Results after 48 hours',
            line: 'A finding for every brand. With rechecks on, as here, a missed deadline counts as a gap only once the control text and the second run confirm it.',
            example:
              '61 of 296 brands opted in for texts and never got one, 19 sent no welcome email at all, and at 84 support took more than 24 hours to reply. 4 had no working sign up form, which is logged as a finding too.',
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
        line: '4 new columns on the same rows: the gap, the date it was seen, what happened in 1 plain sentence, and the proof link. Obsession reports what happened, and your team writes to the brand.',
        example:
          'In #sms_app_prospects: UK ecommerce brands, the first 300 are done. 61 opted in for texts and never got one, and 19 never sent a welcome email. New rows report as they finish.',
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

  fine: 'The agency, its client, the brands and their .example addresses, the people, the phone number and every figure here are made up, and no real company’s results are shown. Clay is a trademark of its owner, named to show where the data comes from and goes.',

  faq: {
    heading: 'What outbound agencies ask.',
    items: [
      {
        q: 'What does Obsession do for outbound agencies that use Clay?',
        a: 'Obsession gives outbound agencies a customer at every brand in a client’s Clay view: AI agents with their own inbox, mobile number and browser that sign up, opt in to texts and ask support a question, then wait 48 hours. Each gap comes back to the same Clay rows with its receipt, a proof link anyone can open.',
      },
      {
        q: 'Does it contact anyone at the brand?',
        a: 'Only if you set it to. In this example it signs up, opts in to texts and asks support 1 question. When it talks to a person, by chat, email or phone, it says it’s AI from Obsession.',
      },
      {
        q: 'How do you know a gap is real?',
        a: 'Each Obsession check has a deadline, and fixed rules decide every verdict, so the same evidence always gets the same answer. You can also turn on rechecks, as this agency did: a control text proves the phone gets texts, and every miss runs again from a fresh number before it counts.',
      },
      {
        q: 'Does Obsession fill a basket or buy anything?',
        a: 'If you choose. This agency didn’t, since the gap was texts. A basket check fills a basket and leaves it, to see whether a reminder follows. A real order goes on a card you fund, never on fake payment details.',
      },
      {
        q: 'Who writes the email?',
        a: 'You do. Obsession reports what happened, with the proof, and can draft an opener if you want one. Here, the agency’s own Clay prompts decide what to say.',
      },
      {
        q: 'Do new rows in the Clay view get checked?',
        a: 'Yes, once you turn on new rows in Obsession. Rows added to the view later get their own watch on their own clock. Rows that leave the view stop.',
      },
      {
        q: 'What happens after the 48 hours?',
        a: 'Obsession stops, or checks every week and tells you when a gap closes, so you know when to write and when to stop.',
      },
      {
        q: 'Does Obsession need Clay?',
        a: 'No. Clay is the easiest way in and out of Obsession, but you can upload a CSV, call the API or paste a list for one offs, like 25 brands before a pitch.',
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

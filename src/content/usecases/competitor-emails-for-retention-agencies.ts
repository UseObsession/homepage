import type { UseCaseStudy } from '../types'

/* Competitor emails for retention agencies (/use-cases/competitor-emails-for-retention-agencies). Built 20 Oct 2026
   from Longplay Brands' shape (obsession/prospects-spartan-longplay.html): an email and SMS agency for ecommerce
   brands, in pods by category, that sells through a free audit and reports to each client every month. Seun's money
   ICPs rank retention agencies first, and these 3 of his offers are its uses: the pitch list opened (Pitch List Pull),
   each client beside its rivals (BFCM Rival Watch), brands that move email platform (Switch List), plus checks on the
   agency's own clients after a rebuild.
   The example: a pet pod watches its category once, through Black Friday. 1 watch, 3 kinds of brand: its clients, their
   rivals and the brands it would like to win, so the same watch writes the client report and the next pitch.
   Drawn in James's format (the Clay page's 10 steps in 3 phases, each beside its app window): the page is
   src/pages/RetentionAgencies.tsx, built from his pieces (src/legacy/james/components). It reads its words from here,
   so the head, the JSON-LD and the page say the same thing; meta.answer is the first answer. The app windows' rows
   and numbers live in the page, as on his.
   Copy (COPY.md): buyer words (competitor emails, sign up, welcome email, abandoned basket, Promotions tab, manually,
   report to the client); no "lifecycle" and no "facts"; every brand invented at a .example address; written as
   designed, and only the 3 lines in obsession/system.md hold. */

export const study: UseCaseStudy = {
  name: 'Competitor emails for retention agencies',
  line: 'Every brand in a client’s category, signed up once: the client report and the next pitch.',

  meta: {
    path: '/use-cases/competitor-emails-for-retention-agencies',
    title: 'Competitor emails for retention agencies, with receipts',
    description:
      'AI agents sign up to every brand in your client’s category and stay. Every email, text and offer, with proof, for the client report and the next pitch.',
    answer:
      'Obsession gives retention agencies a customer at every brand in a client’s category: AI agents with their own inbox, mobile number and browser that sign up, opt in to texts and leave a basket, then stay for months. Every email, text and offer comes back with proof, for the client report, Black Friday and the next pitch.',
    ogImage: '/og/competitor-emails-for-retention-agencies.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Competitor emails for retention agencies', path: '/use-cases/competitor-emails-for-retention-agencies' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Be a customer of every brand in your client’s category.',
    sub: 'Your clients ask what their rivals send, and your next pitch needs a brand’s own emails before anyone hands you a login. AI agents sign up to every brand in the category, opt in to texts and leave a basket, then stay. Every email, text and offer comes back with proof, for the client report and the next pitch.',
    example: { chips: [] },
    flow: [
      {
        label: 'Your list in',
        title: 'Pet brands, 1 category',
        items: ['Barkwell · client', 'Fern Hollow Pet · rival', 'Copper & Kibble · rival', 'Brightpaw · to win'],
        foot: '2 clients · 18 rivals · 100 to win',
      },
      {
        label: 'Obsession',
        title: 'A customer at each brand',
        items: ['Its own inbox', 'A US mobile number', 'Its own browser', 'Says it’s AI'],
        foot: 'Watching through Black Friday',
      },
      {
        label: 'Back to you',
        title: 'Every send, side by side',
        items: [
          'Barkwell: 7 of 9 rivals sent first',
          'Fern Hollow Pet: 50% off, Black Friday',
          'Copper & Kibble: new email platform',
          'Brightpaw: no basket reminder',
        ],
        foot: 'Client report · Slack · Brands to win',
      },
    ],
    capture: {
      kind: 'waitlist',
      source: 'usecase-retention-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We’ll only use your email to tell you about Obsession.',
      interest: 'email-sms',
    },
  },

  /* The 10 steps, in the 3 phases the page draws them in. Each step's app window is in the page. */
  how: {
    heading: 'From 1 list to the client report and the pitch.',
    sub: 'How the pet pod in this example watches its category through Black Friday: 2 clients, their 18 closest rivals and 100 pet brands it would like to win.',
    steps: [
      {
        title: 'Set it up',
        line: 'Steps 1 to 5',
        steps: [
          {
            title: 'Create a watch',
            line: 'A watch is 1 list of companies, the checks to run on them, and how long to keep watching. Start one from a recipe, or by describing what you want to know.',
            example: 'The pet pod starts a watch on its category for Black Friday.',
          },
          {
            title: 'Pick a recipe',
            line: 'A recipe sets up the checks for 1 job. Launch it as it is, change anything you like, or skip recipes and describe what you want to know in your own words.',
            example:
              'The pod picks Email and SMS tracking. It signs up to every brand on the list and sets their emails and texts side by side. Prospect intelligence is for proving 1 gap at brands you’re about to write to.',
          },
          {
            title: 'Configure it',
            line: 'Choose what the customer does at each brand and what you want to hear about. Each check has its own deadline, and fixed rules decide every verdict, so the same evidence always gets the same answer.',
            example:
              'Email sign up, a text opt in and an abandoned basket, watched through 4 January. A note when a brand sends its first Black Friday email, cuts deeper than 30% or moves email platform.',
          },
          {
            title: 'Add the brands',
            line: 'Upload a CSV, connect Clay, call the API or paste a list. Tag each brand as a client, a rival or a brand to win, so every report knows whose side it’s on.',
            example: 'The pod uploads 120 brands. Obsession already watches 74 of them, so their emails since September come with them.',
          },
          {
            title: 'Check and start',
            line: '1 summary of what will happen. Welcome emails can arrive within minutes, and Black Friday emails start in early November.',
            example: 'The pod saves it as a recipe, “Category watch”, ready for the next pod.',
          },
        ],
      },
      {
        title: 'Obsession does the watching',
        line: 'Steps 6 to 8 · Through Black Friday in this example',
        steps: [
          {
            title: 'Each brand gets its own customer',
            line: 'A real inbox, a real US mobile number and its own browser, used for that 1 brand only. It signs up the way a customer would and saves a screenshot at every step. It says it’s AI when it talks to a person.',
          },
          {
            title: 'It stays, through Black Friday',
            line: 'Every email and text lands in that brand’s own inbox and phone, with the tab it landed in. Each brand’s first Black Friday email is dated the moment it arrives, and a deadline that passes with nothing is logged too.',
          },
          {
            title: 'The category, side by side',
            line: 'A row for every brand, with its role and what changed since the last report. A welcome email that never came, or a basket nobody wrote about, is a finding too.',
          },
        ],
      },
      {
        title: 'You get the reports',
        line: 'Steps 9 and 10',
        steps: [
          {
            title: 'A report for every client',
            line: 'The client beside its rivals, every value linked to the email it came from. The rival slide for the monthly report, and the evidence for January’s review.',
          },
          {
            title: 'Brands to win, each with a reason to write',
            line: 'Every brand you’d like to win, with what its own customers got: a welcome that never came, a basket with no reminder, a move to a new email platform. Each with a link the brand itself can open.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'The audit waits for a login. The rival slide is built by hand.',
    items: [
      {
        title: 'The audit starts after the yes',
        line: 'Your free audit needs the brand’s login, so the most convincing part of your pitch can’t happen until the brand has already agreed to talk.',
      },
      {
        title: 'Rivals are watched manually',
        line: 'Someone signs up from a work inbox, screenshots each welcome email and fills a spreadsheet, a few hours a brand, and it’s out of date by the next report.',
      },
      {
        title: 'Black Friday can’t be caught later',
        line: 'A brand you sign up to in December never shows you this Black Friday. The emails that matter most are the ones nobody kept.',
      },
    ],
    answer: 'As a customer of every brand in the category, you get every email, text and offer each one sends, with proof, before anyone asks for a login.',
  },

  fit: {
    heading: 'Your clients, their rivals and your next clients are the same brands.',
    line: 'A pod that works in 1 category watches it once. The same watch writes the client report and the pitch.',
    items: [
      { title: 'Tag each brand', line: 'Client, rival or a brand to win, from a CSV, a Clay table or a pasted list.' },
      { title: 'Reports go where you work', line: 'A digest in Slack, a report per client for the deck, and a list of brands to win.' },
      { title: 'Brands already watched bring their history', line: 'If Obsession already watches a brand, its emails since that day come with it.' },
    ],
  },

  /* The 4 uses, which are Seun's 3 offers for retention agencies plus the agency's own clients. */
  outputs: {
    heading: 'What you do with every send.',
    groups: [
      {
        items: [
          {
            label: 'Winning clients',
            title: 'Open every pitch with the brand’s own emails',
            line: 'Send your pitch list. Each brand comes back with what a new customer got, and nobody asked for a login.',
            example: 'Brightpaw: a basket left on 3 Nov, no reminder in 24 days.',
          },
          {
            label: 'Keeping clients',
            title: 'The rival slide in every client report',
            line: 'Each client beside its 9 closest rivals, every value linked to its email, and January’s review written from it.',
            example: 'Barkwell: 7 of 9 rivals sent their Black Friday email first.',
          },
          {
            label: 'Timing',
            title: 'Brands that move email platform',
            line: 'A brand that moves platform is a migration project, and one that goes quiet after the move needs help this month.',
            example: 'Thistle & Bone: new platform on 9 Oct, no email since.',
          },
          {
            label: 'Your own clients',
            title: 'Check every client after a rebuild',
            line: 'A customer signs up to each client’s store after a launch or a migration: the welcome fires, the code works, the links open.',
            example: 'Barkwell: after Tuesday’s rebuild, WELCOME15 fails at checkout.',
          },
        ],
      },
    ],
  },

  more: {
    recipe: {
      label: 'The recipe',
      title: 'Email and SMS tracking',
      line: 'Every check it can run, and everything you can change.',
      cta: { label: 'Learn more', to: '/recipes/email-sms-tracking' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample output',
      line: 'A real store check from September 2026, shown in every format it can arrive in.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'The agency, its clients, the brands and their .example addresses, the people, the phone number and every figure here are made up, and no real company’s results are shown. Clay and Slack are trademarks of their owners, named to show where a list can come from and where results go.',

  faq: {
    heading: 'What retention agencies ask.',
    items: [
      {
        q: 'What does Obsession do for retention agencies?',
        a: 'Obsession gives retention agencies a customer at every brand in a client’s category: AI agents with their own inbox, mobile number and browser that sign up, opt in to texts and leave a basket, then stay for months. Every email, text and offer comes back with proof, for the client report, Black Friday and the next pitch.',
      },
      {
        q: 'Do we need the brand’s login?',
        a: 'No. Each customer signs up the way anyone would, from the brand’s own pop up or footer form, so nothing needs access to the brand’s email platform. Your login audit still comes, after the yes.',
      },
      {
        q: 'Does it contact anyone at the brand?',
        a: 'Only as a customer would, as you set it: it signs up, opts in to texts and leaves a basket. When it talks to a person, by chat, email or phone, it says it’s AI from Obsession.',
      },
      {
        q: 'How do you know which tab an email landed in?',
        a: 'Each customer reads its own inbox, so every email is kept with the tab it landed in for a new subscriber, Promotions or Primary, beside the email itself.',
      },
      {
        q: 'Will a brand know who’s watching?',
        a: 'No. Obsession shares what a brand sent, never who asked. Your clients and your pitch list stay yours.',
      },
      {
        q: 'Can we see emails from before we started?',
        a: 'If Obsession already watches a brand, yes: its emails since that day come with it. Otherwise its record starts the day you add it, so add your Black Friday brands by early November.',
      },
      {
        q: 'Can it go in our client reports?',
        a: 'Yes. Every value links to the email it came from, on a page anyone can open, under Obsession’s name. Your own name on it is available at a higher price.',
      },
      {
        q: 'Can we use it on our own clients?',
        a: 'Yes. A customer signs up to each client’s store after a launch, a rebuild or a migration, and tells you when a welcome email, a code or a link breaks, before the client finds it.',
      },
      {
        q: 'Does it need Clay?',
        a: 'No. Upload a CSV, paste a list or call the API. Clay works too, if your lists live there.',
      },
    ],
  },

  final: {
    heading: 'Try it on 1 client.',
    sub: 'Join the waitlist, and we’ll sign up to 1 client and its 9 closest rivals, with the first side by side report in your Slack.',
    capture: {
      kind: 'waitlist',
      source: 'usecase-retention-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We’ll only use your email to tell you about Obsession.',
      interest: 'email-sms',
    },
  },
}

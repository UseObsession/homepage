import type { RoleId } from './types'

/* The sign up card's words and the question bank (components/SignupSteps, _research/onboarding/SIGNUP.md in the
   workspace). The page asks for the email only and saves it at once; then the thank you becomes this card: name and
   company, "Which of these is you?" where the page doesn't know, 4 questions for the reader (3 for "Something else"),
   an optional note, then 1 next step. Every step can be skipped.

   Edit questions and options here; no component holds any of these words.
   - An option's `label` is what the reader taps and what the sheet shows: 32 characters or fewer, so a chip fits a
     phone on 1 line. Its `id` is short and never shown: the Call first rules and the next step read it, so a label can
     be reworded without breaking them. Keep ids unique within their question.
   - `key` is the JSON key the page sends; waitlist/Code.js writes it in the column of the same name (its FIELDS list).
     A new key needs a new column there too.
   - `step` is the number in the sheet's "Step reached" column (1 Email, 2 Name, 3 Reader, 4 First job, 5 Scale,
     6 Results, 7 Last time, 8 Note, 9 Done). It stays fixed when a step is skipped, so the column sorts as a funnel.
   - `{company}` is what they typed for their company. Without one the question reads `questionNoCompany`.
   - `multi: true` lets them pick any number, with a Next button; otherwise 1 tap picks and moves on.
   - `other: true` ("Something else") opens a short field and never moves on by itself. `none: true` ("None of these")
     clears every other choice in a multi select.
   - On a first job option: `for` names it under "Where should results land?" ("For pitch packs. Pick any."), and
     `run` is the first run the founders set up by hand (the sheet's "Suggested first run").
   - `offer` picks the thank you's next step: 'verify' (the free AI agent check) or 'mystery' (the free mystery shop).
   Copy rules: docs/REBUILD.md, "Copy". Ask about real, recent behaviour, never "would you", never money. */

export type SignupOption = {
  id: string
  label: string
  other?: boolean
  none?: boolean
  for?: string
  run?: string
  offer?: 'verify' | 'mystery'
}

export type SignupQuestion = {
  id: string
  step: 4 | 5 | 6 | 7
  key: string
  /* The square's name and the answer's name on the thank you ("Your answers"). */
  short: string
  question: string
  questionNoCompany?: string
  helper?: string
  multi?: boolean
  options: SignupOption[]
}

/* A Call first rule: every condition must hold. `in` lists option ids; `atLeast` counts the ticks in a multi select
   ("None of these" never counts). `reason` fills {key} with the answer, first letter lower case, and {count} with the
   ticks; `open` is the question that opens the call (it turns the tapped answer into an interview). */
export type CallFirstRule = {
  when: ({ key: string; in: string[] } | { key: string; atLeast: number })[]
  reason: string
  open: string
}

export type SignupReader = {
  id: RoleId
  /* The reader's own page, where the page says who they are. */
  path?: string
  /* "For agencies." under the card's title on that page, with Change beside it. */
  line?: string
  /* The company field's label for this reader. */
  companyLabel?: string
  questions: SignupQuestion[]
  note: string
  callFirst?: CallFirstRule
}

const results = (id: string, options: string[]): SignupQuestion => ({
  id,
  step: 6,
  key: 'results',
  short: 'Results',
  question: 'Where should results land?',
  multi: true,
  options: options.map((label) => ({ id: label.toLowerCase().replace(/[^a-z]+/g, '-'), label })),
})

const somethingElse: SignupOption = { id: 'other', label: 'Something else', other: true }

/* ---- The 6 readers ---- */

const agency: SignupReader = {
  id: 'agency',
  path: '/agencies',
  line: 'For agencies.',
  companyLabel: 'Agency',
  questions: [
    {
      id: 'A1',
      step: 4,
      key: 'first_job',
      short: 'First job',
      question: 'What should your agents do first?',
      options: [
        { id: 'pitch', label: 'Pitch packs on prospects', for: 'pitch packs', run: 'Prospect intelligence and Competitor tracking on their next pitch: the prospect and its 3 rivals, a pitch pack before the meeting' },
        { id: 'checks', label: 'Checks on every client', for: 'client checks', run: '1 client, with written OK: Ad landing check, Delivery monitoring, Lead leaks or Mystery shopper, picked from their site' },
        { id: 'handover', label: 'Account handovers', for: 'account handovers', run: 'Account handover on their newest client’s accounts, with the client’s written OK' },
        { id: 'upsells', label: 'Upsells for each client', for: 'client upsells', run: 'Mystery shopper on 3 clients first, then Client upsells drafts' },
        { id: 'rivals', label: 'Rival reports to sell', for: 'rival reports', run: 'Competitor tracking and Email and SMS tracking on 1 client’s 3 rivals, the report under their name' },
        somethingElse,
      ],
    },
    {
      id: 'A2',
      step: 5,
      key: 'agency_clients',
      short: 'Clients',
      question: 'How many clients does {company} look after?',
      questionNoCompany: 'How many clients does your agency look after?',
      options: [
        { id: 'c1', label: '1 to 5' },
        { id: 'c6', label: '6 to 15' },
        { id: 'c16', label: '16 to 40' },
        { id: 'c41', label: '41 to 100' },
        { id: 'c100', label: 'More than 100' },
      ],
    },
    results('A3', ['Email', 'Slack', 'A PDF or link for clients', 'Google Sheets', 'Clay', 'Our CRM']),
    {
      id: 'A4',
      step: 7,
      key: 'agency_last_check',
      short: 'Last check',
      question: 'Your last pitch audit or client check by hand: how long did it take?',
      helper: 'The last one, not a typical one.',
      options: [
        { id: 'hour', label: 'Under an hour' },
        { id: 'hours', label: '1 to 3 hours' },
        { id: 'half', label: 'Half a day' },
        { id: 'day', label: 'A day or more' },
        { id: 'none', label: 'We haven’t done one' },
      ],
    },
  ],
  note: 'A client to start with, a deadline, a tool you use',
  callFirst: {
    when: [
      { key: 'agency_clients', in: ['c16', 'c41', 'c100'] },
      { key: 'agency_last_check', in: ['half', 'day'] },
    ],
    reason: 'Yes: {agency_clients} clients, {agency_last_check} for the last check',
    open: 'Walk me through that last check. What did you do with it?',
  },
}

const founder: SignupReader = {
  id: 'founder',
  path: '/founders',
  line: 'For founders.',
  questions: [
    {
      id: 'F1',
      step: 4,
      key: 'first_job',
      short: 'First job',
      question: 'What should your agents do first?',
      options: [
        { id: 'find', label: 'Find customers with proof', for: 'finding customers', run: 'Prospect intelligence on 5 prospects from their own list' },
        { id: 'release', label: 'Test every release', for: 'release tests', run: 'Website audit and Delivery monitoring on their sign up after the next release, and its first 14 days (Mystery shopper for a store)' },
        { id: 'rivals', label: 'Watch rivals', for: 'watching rivals', run: 'Competitor tracking on 3 rivals they name (Price watch for a store, Trial teardown for software)' },
        { id: 'agents', label: 'Check our AI agents', for: 'AI agent checks', run: 'The free AI agent check: Support bot, Voice agent or Sales agent check', offer: 'verify' },
        { id: 'paid', label: 'Get paid and cut costs', for: 'getting paid and cutting costs', run: 'Get paid on overdue invoices first, then Supplier quotes and Software renewals' },
        somethingElse,
      ],
    },
    {
      id: 'F2',
      step: 5,
      key: 'founder_sells',
      short: 'Sells',
      question: 'What does {company} sell?',
      questionNoCompany: 'What do you sell?',
      options: [
        { id: 'saas', label: 'Software to businesses' },
        { id: 'apps', label: 'Software or apps to consumers' },
        { id: 'store', label: 'Products, from our store', offer: 'mystery' },
        { id: 'services', label: 'Services to businesses' },
        { id: 'local', label: 'Local services' },
        somethingElse,
      ],
    },
    results('F3', ['Email', 'Slack', 'Google Sheets', 'Our CRM', 'Our issue tracker', 'Webhook or API']),
    {
      id: 'F4',
      step: 7,
      key: 'founder_last_week',
      short: 'Last week',
      question: 'Last week, which of these did you do yourself?',
      helper: 'Last week only. Pick any.',
      multi: true,
      options: [
        { id: 'prospect', label: 'Researched a prospect' },
        { id: 'tested', label: 'Tested our sign up or checkout' },
        { id: 'rival', label: 'Checked a rival' },
        { id: 'chased', label: 'Chased an unpaid invoice' },
        { id: 'price', label: 'Pushed back on a price rise' },
        { id: 'none', label: 'None of these', none: true },
      ],
    },
  ],
  note: 'A release date, a rival, what you’ve tried',
  callFirst: {
    when: [{ key: 'founder_last_week', atLeast: 3 }],
    reason: 'Yes: {count} of these by hand last week',
    open: 'Which of those took longest last week?',
  },
}

const sales: SignupReader = {
  id: 'sales',
  path: '/sales',
  line: 'For sales and success teams.',
  questions: [
    {
      id: 'S1',
      step: 4,
      key: 'first_job',
      short: 'First job',
      question: 'What should your agents do first?',
      options: [
        { id: 'briefs', label: 'Briefs before calls', for: 'call briefs', run: 'Prospect intelligence: a brief on the account they name, 7 days before the call' },
        { id: 'renewals', label: 'Renewals at risk', for: 'renewals at risk', run: 'Account watch on next quarter’s renewals, then Renewal negotiation' },
        { id: 'grow', label: 'Growing accounts', for: 'growing accounts', run: 'Expansion offers and Business case on their 10 largest accounts' },
        { id: 'battle', label: 'Battlecards', for: 'battlecards', run: 'Trial teardown and Competitor tracking on their top 3 rivals' },
        { id: 'sdr', label: 'Check our AI SDR', for: 'AI SDR checks', run: 'Outbound agent check: declared test prospects on their AI SDR’s lists, with their OK', offer: 'verify' },
        somethingElse,
      ],
    },
    {
      id: 'S2',
      step: 5,
      key: 'sales_team',
      short: 'Team size',
      question: 'How big is your sales and success team?',
      options: [
        { id: 'me', label: 'Just me' },
        { id: 't2', label: '2 to 5' },
        { id: 't6', label: '6 to 20' },
        { id: 't21', label: '21 to 100' },
        { id: 't100', label: 'More than 100' },
      ],
    },
    results('S3', ['Salesforce', 'HubSpot', 'Another CRM', 'Slack', 'Email', 'Clay']),
    {
      id: 'S4',
      step: 7,
      key: 'sales_last_slip',
      short: 'Last slip',
      question: 'Your last renewal or deal that slipped: when did you first see it coming?',
      options: [
        { id: 'weeks', label: 'Weeks before' },
        { id: 'days', label: 'Days before' },
        { id: 'call', label: 'On the call' },
        { id: 'gone', label: 'After it was gone' },
        { id: 'none', label: 'None slipped this quarter' },
      ],
    },
  ],
  note: 'An account, a renewal date, how your CRM is set up',
  callFirst: {
    when: [
      { key: 'sales_last_slip', in: ['call', 'gone'] },
      { key: 'sales_team', in: ['t6', 't21', 't100'] },
    ],
    reason: 'Yes: a team of {sales_team}, the last slip seen {sales_last_slip}',
    open: 'What told you, in the end?',
  },
}

const marketing: SignupReader = {
  id: 'marketing',
  path: '/marketing',
  line: 'For marketing teams.',
  questions: [
    {
      id: 'M1',
      step: 4,
      key: 'first_job',
      short: 'First job',
      question: 'What should your agents do first?',
      options: [
        { id: 'ai', label: 'Fix what AI says about us', for: 'what AI says about you', run: 'Listings and AI answers on their own brand, across the main AI assistants' },
        { id: 'prices', label: 'Track rivals’ offers and prices', for: 'rivals’ offers and prices', run: 'Price watch and Email and SMS tracking on the rival they name' },
        { id: 'landing', label: 'Check our ad landing pages', for: 'ad landing checks', run: 'Ad landing check on every live ad in the accounts they connect' },
        { id: 'leads', label: 'Time our replies to new leads', for: 'reply times', run: 'Lead leaks on their own form, chat and phone' },
        { id: 'launches', label: 'Test our emails and launches', for: 'email and launch tests', run: 'Delivery monitoring on their next launch or send (Mystery shopper for a store)' },
        somethingElse,
      ],
    },
    {
      id: 'M2',
      step: 5,
      key: 'marketing_markets',
      short: 'Markets',
      question: 'What does {company} market?',
      questionNoCompany: 'What does your team market?',
      options: [
        { id: 'store', label: 'An online store', offer: 'mystery' },
        { id: 'software', label: 'Software' },
        { id: 'services', label: 'Services to businesses' },
        { id: 'brand', label: 'A brand sold in shops' },
        { id: 'local', label: 'Local services' },
        somethingElse,
      ],
    },
    results('M3', ['Email', 'Slack', 'Google Sheets', 'Our CRM', 'A PDF to share', 'Zapier or Make']),
    {
      id: 'M4',
      step: 7,
      key: 'marketing_last_break',
      short: 'Last break',
      question: 'The last time an ad, link, code or email broke, who found it?',
      options: [
        { id: 'customer', label: 'A customer' },
        { id: 'team', label: 'Someone on the team, by chance' },
        { id: 'check', label: 'Our own regular check' },
        { id: 'nobody', label: 'Nobody, until the numbers dipped' },
        { id: 'none', label: 'Nothing’s broken that we know of' },
      ],
    },
  ],
  note: 'A launch date, a rival, a channel you worry about',
  callFirst: {
    when: [{ key: 'marketing_last_break', in: ['customer', 'nobody'] }],
    reason: 'Yes: the last break was found by {marketing_last_break}',
    open: 'Walk me through that last break. How long was it broken before anyone knew?',
  },
}

const developer: SignupReader = {
  id: 'developer',
  path: '/developers',
  line: 'For developers.',
  questions: [
    {
      id: 'D1',
      step: 4,
      key: 'first_job',
      short: 'First job',
      question: 'What will you build first?',
      options: [
        { id: 'ci', label: 'Release tests in CI', for: 'release tests', run: 'Website audit through the API: a typed task on every deploy, with the webhook into CI' },
        { id: 'prospect', label: 'Prospect intelligence', for: 'prospect intelligence', run: 'Prospect intelligence through the API, inside their product, for a handful of their users' },
        { id: 'rivals', label: 'Rival monitoring', for: 'rival monitoring', run: 'Competitor tracking through the API, as a feature, on 3 test companies' },
        { id: 'merchants', label: 'Merchant checks', for: 'merchant checks', run: 'Mystery shopper through the API on 1 merchant, with its OK' },
        { id: 'agents', label: 'AI agent checks', for: 'AI agent checks', run: 'Support bot check and Drift watch through the API, on their own agent first', offer: 'verify' },
        somethingElse,
      ],
    },
    {
      id: 'D2',
      step: 5,
      key: 'developer_for',
      short: 'Builds for',
      question: 'Who’s it for?',
      options: [
        { id: 'own', label: 'Our own product' },
        { id: 'customers', label: 'Our customers, in our product' },
        { id: 'team', label: 'Our sales or marketing team' },
        { id: 'clients', label: 'Clients, as an agency' },
        { id: 'exploring', label: 'Just exploring' },
      ],
    },
    results('D3', ['Webhook', 'Polling the API', 'Our CI', 'MCP or another agent', 'Slack', 'Email']),
    {
      id: 'D4',
      step: 7,
      key: 'developer_last_used',
      short: 'Last used',
      question: 'Last time you needed test inboxes, phone numbers or browsers, what did you use?',
      helper: 'Scripts like Playwright count as your own.',
      options: [
        { id: 'scripts', label: 'Our own scripts' },
        { id: 'paid', label: 'A paid testing service' },
        { id: 'staff', label: 'Staff inboxes and phones' },
        { id: 'none', label: 'We haven’t needed them' },
        somethingElse,
      ],
    },
  ],
  note: 'Your language and stack, what you’ve tried',
  callFirst: {
    when: [{ key: 'developer_for', in: ['customers'] }],
    reason: 'Yes: they build for their own customers, in their product',
    open: 'What do your customers do for this today, and what does it cost them?',
  },
}

/* "Something else", and anyone who skips "Which of these is you?": 3 questions, no scale. */
const other: SignupReader = {
  id: 'other',
  questions: [
    {
      id: 'G1',
      step: 4,
      key: 'first_job',
      short: 'First job',
      question: 'Which job should we set up first?',
      options: [
        { id: 'win', label: 'Win and keep customers', for: 'winning and keeping customers', run: 'Prospect intelligence or Account watch, agreed on the set up email' },
        { id: 'rivals', label: 'Watch rivals', for: 'watching rivals', run: 'Competitor tracking, agreed on the set up email' },
        { id: 'journeys', label: 'Check our own journeys', for: 'checks on your own journeys', run: 'Mystery shopper, agreed on the set up email' },
        { id: 'agents', label: 'Check our AI agents', for: 'AI agent checks', run: 'The free AI agent check', offer: 'verify' },
        { id: 'paid', label: 'Get paid and save', for: 'getting paid and saving', run: 'Get paid, agreed on the set up email' },
        somethingElse,
      ],
    },
    results('G2', ['Email', 'Slack', 'Google Sheets', 'Our CRM', 'A PDF to share', 'Webhook or API']),
    {
      id: 'G3',
      step: 7,
      key: 'other_last_week',
      short: 'Last week',
      question: 'Last week, which of these did you do by hand?',
      helper: 'Last week only. Pick any.',
      multi: true,
      options: [
        { id: 'company', label: 'Researched a company' },
        { id: 'own', label: 'Checked our own site or emails' },
        { id: 'rival', label: 'Checked a rival' },
        { id: 'chased', label: 'Chased a payment or supplier' },
        { id: 'agent', label: 'Tested an AI agent' },
        { id: 'none', label: 'None of these', none: true },
      ],
    },
  ],
  note: 'What you’d hand an agent first',
  callFirst: {
    when: [{ key: 'other_last_week', atLeast: 3 }],
    reason: 'Yes: {count} of these by hand last week',
    open: 'Which of those took longest?',
  },
}

export const readers: Record<RoleId, SignupReader> = { agency, founder, sales, marketing, developer, other }

/* ---- The card ---- */

export const signup = {
  card: {
    title: 'You’re on the list.',
    line: 'A few taps and we’ll set up the right first run. Skip any.',
    change: 'Change',
    /* "3 of 7": the square they're on, of every square. The email is square 1, filled when the card opens. */
    progress: '{n} of {total}',
    /* Read before each question by screen readers, and the progress row's name. */
    question: 'Question {n} of {total}.',
    progressLabel: 'Your answers so far',
    squareAnswered: 'Step {n}, {short}: answered. Go back to it',
    squareSkipped: 'Step {n}, {short}: skipped. Go back to it',
    next: 'Next',
    back: 'Back',
    skip: 'Skip',
    finish: 'Finish',
    skipFinish: 'Skip and finish',
    /* The field under "Something else". */
    other: 'Tell us in a few words',
    /* Under "Where should results land?": {job} is the first job's `for`. Without one, `resultsPlain`. */
    results: 'For {job}. Pick any.',
    resultsPlain: 'Pick any.',
    skipped: 'Skipped',
    footer: 'Every answer is optional. We use them to set up your first run and decide what we build.',
    /* Shown only when VITE_WAITLIST_URL is unset (local builds): nothing leaves the browser. */
    preview: 'Preview: nothing was sent.',
  },

  /* Step 2. The company is filled in from the email's domain, unless it's a free mail address. */
  name: {
    question: 'Who should we ask for?',
    short: 'Name and company',
    name: 'Your name',
    company: 'Company',
    filled: 'From your email. Change it if it’s wrong.',
    /* Domains whose name is never a company (the part before .com, .co.uk and the like). */
    freeMail: [
      'gmail', 'googlemail', 'outlook', 'hotmail', 'live', 'msn', 'icloud', 'me', 'mac', 'yahoo', 'ymail', 'proton', 'protonmail',
      'pm', 'aol', 'gmx', 'mail', 'zoho', 'fastmail', 'hey', 'tutanota', 'yandex', 'btinternet', 'sky', 'virginmedia', 'talktalk',
      'comcast', 'verizon', 'att', 'sbcglobal', 'qq', '163',
    ],
  },

  /* Step 3, on pages that don't know their reader; "Change" on a reader's own page opens it too. */
  reader: {
    question: 'Which of these is you?',
    short: 'Who you are',
    helper: 'Your next questions depend on it.',
    options: [
      { id: 'agency', label: 'Agency' },
      { id: 'founder', label: 'Founder' },
      { id: 'sales', label: 'Sales or success' },
      { id: 'marketing', label: 'Marketing' },
      { id: 'developer', label: 'Developer' },
      { id: 'other', label: 'Something else', other: true },
    ] as SignupOption[],
    /* The field under "Something else" here (the sheet's "Other: role"). */
    other: { label: 'What do you do?', placeholder: 'e.g. Operations lead' },
  },

  /* In place of the first job: a free mystery shop or AI agent check with its store or agent, and a recipe page's own
     question (Capture.roles), whose answer goes in "Job detail". A recipe question in `skipRecipe` is never asked:
     "Which of these is you?" already covers it. */
  page: {
    mystery: {
      firstJob: 'Free mystery shop',
      for: 'your free mystery shop',
      run: 'Mystery shopper on {store}, once it’s confirmed theirs or the owner’s OK is in',
      question: { id: 'mystery', step: 4, key: 'job_detail', short: 'Whose store', question: 'Whose store is it?', options: [{ id: 'mine', label: 'Mine' }, { id: 'client', label: 'A client’s, with their OK' }] } as SignupQuestion,
    },
    verify: {
      firstJob: 'Free AI agent check',
      for: 'your free AI agent check',
      run: 'The free AI agent check on {agent}, once it’s confirmed theirs or the owner’s OK is in',
      question: {
        id: 'verify',
        step: 4,
        key: 'job_detail',
        short: 'Whose AI agent',
        question: 'Whose AI agent is it?',
        options: [{ id: 'ours', label: 'Ours' }, { id: 'client', label: 'A client’s, with their OK' }, { id: 'vendor', label: 'A vendor’s we’re trialling, with their OK' }],
      } as SignupQuestion,
    },
    recipe: { short: 'Recipe question', run: '{recipe}, planned on the set up email' },
    skipRecipe: ['What’s your role?'],
  },

  /* Step 8. The placeholder is the reader's own (readers above). */
  note: {
    label: 'Anything we should know?',
    optional: 'Optional',
    short: 'Note',
    helper: 'Please leave out your customers’ personal details.',
    max: 500,
    /* The count appears from this many characters: "412 of 500". */
    countFrom: 400,
    count: '{n} of {max}',
  },

  /* The thank you. {name} is the first word of their name; {email} the address they gave. */
  thanks: {
    title: 'Thanks, {name}. That’s everything.',
    titlePlain: 'Thanks. That’s everything.',
    line: 'A founder reads every answer and emails {email}{reply} to plan your first run. Nothing runs until you approve it.',
    developer: 'A founder reads every answer and emails {email}{reply} to set up your API access. Nothing runs until you approve it.',
    /* A free mystery shop or AI agent check from step 1. */
    report: 'Your report comes to {email}. First we confirm it’s yours, or that you have the owner’s OK.',
    /* Once the founders agree a reply time, e.g. 'within 2 working days'. Empty: no time is promised. */
    replyTime: '',
    answers: 'Your answers',
    change: 'Change',
    unsaved: 'Some answers didn’t save.',
    retry: 'Try again',
  },

  /* The 1 next step on the thank you. Only 1 shows; the first that fits wins (lib/signup.ts, nextStepFor):
     1 a free shop or check from step 1: `report`; 2 a first job that offers the AI agent check: `verify`;
     3 an agency: `agencyShop`; 4 an answer that offers the mystery shop (an online store): `shop`;
     5 a developer: `developer`; 6 sales: `account`; 7 marketing: `rival`; 8 anyone else: `company`.
     `sheet` is what the "Next step" column says once they've done it. */
  next: {
    report: { heading: 'See a real report.', link: { label: 'Open the real report', to: '/sample-output' } },
    developer: { heading: 'See what a run sends back.', link: { label: 'Open the real run', to: '/sample-output' } },
    verify: {
      kind: 'verify',
      sheet: 'Free AI agent check',
      heading: 'Check your AI agent free.',
      line: '3 test customers use it on 1 channel. Your report lands within 4 days.',
      label: 'Your AI agent’s chat page or phone number',
      placeholder: 'Chat page or phone number',
      button: 'Check my AI agent free',
      done: 'Got it. We’ll check {value}.',
      doneLine: 'First we confirm it’s yours, or that you have the owner’s OK. The report comes to {email}.',
    },
    agencyShop: {
      kind: 'mystery',
      sheet: 'Free mystery shop',
      heading: 'Pick a client. See what their customers get.',
      line: 'Free for a store you run, or a client’s with their OK: 4 test customers, 48 hours watched, your report within 4 days.',
      label: 'Your store’s web address',
      placeholder: 'Store address, e.g. your-store.example',
      button: 'Get my free report',
      done: 'Got it. We’ll shop {value}.',
      doneLine: 'First we confirm it’s your store, or that you have the owner’s OK. The report comes to {email}.',
    },
    shop: {
      kind: 'mystery',
      sheet: 'Free mystery shop',
      heading: 'Your first mystery shop is free.',
      line: '4 test customers shop your store and every inbox is watched for 48 hours. Your report lands within 4 days.',
      label: 'Your store’s web address',
      placeholder: 'Store address, e.g. your-store.example',
      button: 'Get my free report',
      done: 'Got it. We’ll shop {value}.',
      doneLine: 'First we confirm it’s your store, or that you have the owner’s OK. The report comes to {email}.',
    },
    account: {
      kind: 'company',
      sheet: 'Account to start with',
      heading: 'Which account should we start with?',
      label: 'Its website',
      placeholder: 'Its website, e.g. account.example',
      helper: 'We plan it with you before anything runs.',
      button: 'Save',
      done: 'Saved. It’s in your plan.',
    },
    rival: {
      kind: 'company',
      sheet: 'Rival to watch first',
      heading: 'Which rival should we watch first?',
      label: 'Its website',
      placeholder: 'Its website, e.g. rival.example',
      helper: 'We plan it with you before anything runs.',
      button: 'Save',
      done: 'Saved. It’s in your plan.',
    },
    company: {
      kind: 'company',
      sheet: 'Company to start with',
      heading: 'Which company should we start with?',
      label: 'Its website',
      placeholder: 'Its website, e.g. company.example',
      helper: 'We plan it with you before anything runs.',
      button: 'Save',
      done: 'Saved. It’s in your plan.',
    },
    errors: {
      companyEmpty: 'Enter its website.',
      companyBad: 'That doesn’t look like a web address. Check for a typo.',
    },
  },

  /* Call first, for any reader: a run is ready to start. The reader's own rule (readers above) comes after. */
  ready: {
    shop: { reason: 'Yes: a free mystery shop is ready to start', open: 'Confirm it’s their store, or the owner’s OK' },
    check: { reason: 'Yes: a free AI agent check is ready to start', open: 'Confirm it’s their AI agent, or the owner’s OK' },
    verify: { reason: 'Yes: their first job is an AI agent check', open: 'Confirm it’s their AI agent, or the owner’s OK' },
    no: 'No',
  },

  /* The referring site's host (or utm_source) in the sheet's "Arrived from" column. Off until the founders decide
     (SIGNUP.md, decisions for 5 Oct): switching it on also adds "the site that sent you there" to the privacy notice
     (content/site.ts reads this flag), so the notice stays true. */
  keepArrivedFrom: false,
}

import type { AgentsPage, Llms, NotFoundPage, PrivacyPage, RecipesIndexPage } from './types'

/* Site pages: the Recipes index (/recipes), the privacy notice (/privacy), the page for companies an agent visits
   (/agents), the 404 page and the llms.txt intro. Copy rules: docs/REBUILD.md, "Copy". The red lines hold on every
   page: agents are declared AI; at rivals and prospects they use public self-serve paths only (sign ups, newsletters,
   texts, public pages, the ads they run in public, the site's chat bot), never a person, never a card, never a basket,
   link to useobsession.com/agents and never name the customer; a company's own journeys, or a client's or account's,
   only with the owner's OK; on anyone else's store every checkout stops before payment. */

/* The 1 address every notice on the site gives. The founders must confirm this mailbox exists and is read before the
   site ships (agents@ or privacy@ can be aliases that forward here). */
export const CONTACT_EMAIL = 'hello@useobsession.com'

/* The controller named in the privacy notice (UK GDPR article 13(1)(a)). The founders supply the legal entity's
   registered name and address before merge; the build must not ship /privacy until they do. */
const CONTROLLER = '[registered company name], [registered address]'

const waitlistRoles = {
  question: 'What should we set up first for you?',
  options: ['Agency', 'Founder', 'Sales', 'Marketing', 'Developer', 'Something else'],
}

/* /recipes. James's index (1 job each, everything set up, the add-companies hub), grouped by job as in the nav.
   The groups render the recipes whose `group` matches, in this order. */
export const recipesPage: RecipesIndexPage = {
  meta: {
    path: '/recipes',
    title: 'Recipes: AI agents set up for the job you pick · Obsession',
    description:
      'Pick a recipe and declared AI agents arrive set up for it: their own inbox, number and browser, every wait and every check. Or type any job.',
    answer:
      'Obsession recipes are ready-made jobs for declared AI agents, from competitor tracking and prospect intelligence to mystery shopping and invoice chasing. Each comes with its agents, their inboxes, phone numbers and browsers, the schedule and the checks already set up, and you can type any other job in plain words.',
    ogImage: '/og/recipes.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
    ],
  },

  hero: {
    headline: 'AI agents that come set up for the job you pick.',
    sub: 'Each recipe arrives with its agents’ inboxes, phone numbers, browsers and schedule set up. Add your companies, or type any other job.',
  },

  groups: [
    {
      group: 'Win customers',
      line: 'Prove the gap at every prospect before you pitch, and keep every listing and AI answer about you right.',
    },
    {
      group: 'Keep customers',
      line: 'See churn and upsell coming in every account, and prove your value before each renewal.',
    },
    {
      group: 'Watch rivals',
      line: 'Every email, text, price change, public ad and trial step from your rivals, logged the day it lands.',
    },
    {
      group: 'Check your own journeys',
      line: 'Go through your own business, or a client’s with their OK, as a customer would, and catch every break first.',
    },
    {
      group: 'Get paid and save',
      line: 'Chase every overdue invoice, and answer every supplier price rise with quotes in writing.',
    },
  ],

  hub: {
    heading: 'Every company on your list, from wherever it lives.',
    line: 'The proof and your next move come back wherever your team already works.',
    inputs: ['Paste a list', 'Upload a CSV', 'Connect Clay', 'The API'],
    outputs: ['Email', 'PDF', 'Slack', 'A sheet', 'Clay', 'Your CRM', 'A webhook'],
  },

  faq: {
    heading: 'Every recipe runs on declared AI agents, and every step is signed.',
    items: [
      {
        q: 'What’s a recipe?',
        a: 'A job that comes ready to run: the agents, each with its own inbox, phone number and browser, plus the schedule, the waits and the checks. You add the companies and choose where the results go.',
      },
      {
        q: 'What if my job isn’t here?',
        a: 'Type it in plain words, like “Tell me which of our prospects never send a welcome email”. The system sets up what the job needs, you approve the plan, and the agents get to work.',
      },
      {
        q: 'Can I build my own?',
        a: 'Yes, on the API: the same agents, inboxes, phone numbers and browsers, from your own code.',
      },
      {
        q: 'Can I change a recipe?',
        a: 'Yes: the journeys, the schedule, the companies and where the results land. The rules every agent follows stay the same.',
      },
      {
        q: 'How many companies can 1 recipe cover?',
        a: 'As many as you add. Every company gets its own agent, and they all run at once, continuously.',
      },
      {
        q: 'What do the agents do at a rival or a prospect?',
        a: 'Only what any customer can: sign up, join the emails and texts, read public pages and the ads they run in public, ask the site’s chat bot, and start trials that need no card. They say they’re AI agents, link to useobsession.com/agents, never name you and never reply. If a person picks up the chat, or a rep writes or calls, the step ends.',
      },
    ],
  },

  final: {
    heading: 'Pick your first recipe, or type the job.',
    sub: 'Join the waitlist and tell us which job comes first. We confirm the plan with you before anything runs.',
    capture: {
      kind: 'waitlist',
      source: 'recipes-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to tell you about Obsession, and nothing else.',
      roles: {
        question: 'Which job should we set up first?',
        options: ['Win customers', 'Keep customers', 'Watch rivals', 'Check our own journeys', 'Get paid and save', 'Something else'],
      },
      interest: 'any',
    },
  },
}

/* /privacy. UK GDPR article 13, plainly: who is responsible, what the waitlist and the free mystery shop keep, why,
   the legal basis, how long, who sees it, transfers, rights and the ICO, and the contact. Before it ships the
   founders confirm: the controller's legal name and address (CONTROLLER), the mailbox (CONTACT_EMAIL), the
   12 month retention, and that the waitlist sheet sits on a company account covered by the provider's data terms. */
export const privacyPage: PrivacyPage = {
  meta: {
    path: '/privacy',
    title: 'Privacy notice: what the Obsession waitlist keeps and why',
    description:
      'What Obsession keeps when you join the waitlist or ask for a free mystery shop, why, for how long, who sees it, and how to see, change or delete it.',
    answer:
      'Obsession keeps the email, company, role, interest, store address and page you give when you join its waitlist or ask for a free mystery shop. It uses them to tell you about Obsession and run what you asked for, never sells them, and deletes them 12 months after you sign up or the day you ask.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Privacy', path: '/privacy' },
    ],
  },

  headline: 'We keep what you type into our forms, and never sell it.',
  sub: 'This notice covers the waitlist and the free mystery shop on useobsession.com, under UK data protection law.',
  updated: '2 October 2026',

  sections: [
    {
      id: 'who',
      heading: 'Obsession is responsible for your details.',
      lines: [
        `${CONTROLLER} is the controller of the details you give us on this site. Write to ${CONTACT_EMAIL} about anything in this notice.`,
      ],
    },
    {
      id: 'what',
      heading: 'We keep what you type, and the page you typed it on.',
      lines: ['When you join the waitlist or ask for a free mystery shop, we keep:'],
      list: [
        'Your email address',
        'Your company, if you give it',
        'Your role and what you’d like set up first, if you tap them',
        'Your store’s web address, if you ask for a mystery shop',
        'The page and form you used, and when',
      ],
    },
    {
      id: 'browser',
      heading: 'We add nothing about your device to your sign up.',
      lines: [
        'Our website host, font provider and form service see your device’s IP address, as they do on any website. We don’t keep it with your details.',
        'We use no advertising or tracking cookies. Your light or dark choice is saved in your own browser.',
        'You don’t have to give us anything. Without an email address, we can’t add you to the waitlist.',
      ],
    },
    {
      id: 'why',
      heading: 'We use it to tell you about Obsession and run what you asked for.',
      lines: ['We use your details to:'],
      list: [
        'Tell you about Obsession',
        'Set up what you asked for first',
        'Run the free mystery shop you asked for, and send you the report',
        'Keep our forms safe from bots and abuse',
      ],
    },
    {
      id: 'basis',
      heading: 'Your consent covers our emails, and you can withdraw it at any time.',
      lines: [
        `Emails about Obsession: your consent, given when you sign up. Withdraw it whenever you like by replying to any email from us or writing to ${CONTACT_EMAIL}.`,
        'Your free mystery shop: you asked us for it, so we use your details to deliver it (the legal basis is contract).',
        'Keeping the forms safe: our legitimate interest in stopping spam and abuse.',
        'We make no automated decisions about you.',
      ],
    },
    {
      id: 'how-long',
      heading: 'We delete your details 12 months after you sign up.',
      lines: ['Or the day you ask, if that comes first.'],
    },
    {
      id: 'who-sees',
      heading: 'Only the founders of Obsession read your sign up.',
      lines: ['We never sell your details or share them for anyone else’s marketing. These providers store or send them for us:'],
      list: [
        'The spreadsheet and email service that holds the waitlist',
        'Our website host',
        'Our font provider, which sees your IP address when a page loads',
      ],
    },
    {
      id: 'transfers',
      heading: 'Your details keep their protection outside the UK.',
      lines: [
        'Some of our providers store data outside the UK, including in the US. When they do, the transfer is covered by the safeguards UK law requires. Write to us for a copy.',
      ],
    },
    {
      id: 'rights',
      heading: 'You can see, change or delete your details whenever you like.',
      lines: [`Write to ${CONTACT_EMAIL} and we’ll reply within 1 month. You can ask us to:`],
      list: [
        'Show you what we hold about you',
        'Correct it',
        'Delete it',
        'Limit how we use it, or stop using it',
        'Give you a copy to take elsewhere',
        'Withdraw your consent, which stops our emails from then on',
      ],
    },
    {
      id: 'complain',
      heading: 'If we get it wrong, you can complain to the regulator.',
      lines: [
        'That’s the Information Commissioner’s Office, at ico.org.uk. We’d like the chance to put it right first.',
      ],
    },
    {
      id: 'contact',
      heading: `Every privacy question goes to ${CONTACT_EMAIL}.`,
      lines: ['A founder answers it. When this notice changes, so does its date.'],
    },
  ],
}

/* /agents, linked by every agent at rivals and prospects ("Saw an Obsession agent?") and from every footer. For the
   company an agent visited: what it is, that it's declared, what it does and never does, what it keeps, how to ask
   us anything or keep agents off a site. The customer is never named without their OK. */
export const agentsPage: AgentsPage = {
  meta: {
    path: '/agents',
    title: 'Saw an Obsession agent? What it does and what it never does',
    description:
      'An Obsession agent is a declared AI agent with its own inbox, number and browser. What it does at your company, what it never does, and how to opt out.',
    answer:
      'An Obsession agent is a declared AI agent with its own identity, inbox, phone number and browser, working for an Obsession customer. When it keeps that customer private, it uses only the paths any customer can. It never pretends to be a person or pays on your store, and any company can write to hello@useobsession.com with a question or to keep agents off its site.',
    ogImage: '/og/agents.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Obsession agents', path: '/agents' },
    ],
  },

  pill: 'Saw an Obsession agent?',
  headline: 'Every Obsession agent is an AI agent, and says so.',
  sub: 'It works for an Obsession customer. Write to us with any question about it, or to keep our agents off your site.',

  sections: [
    {
      id: 'what',
      heading: 'It has its own identity, inbox, phone number and browser.',
      lines: [
        'Obsession is the intelligence infrastructure for commercial teams. Companies send its AI agents to do business with other companies for them: sign up, shop, ask a site’s chat bot, chase, check and wait, then report back.',
        'Every step an agent takes is signed and dated, so nobody has to take its word for what happened.',
      ],
    },
    {
      id: 'declared',
      heading: 'It never pretends to be a person.',
      lines: [
        'Every agent says it’s an AI agent. It never uses a fake name or a fake identity.',
        'If it’s working for you, or for someone with your OK, like your agency, it names who it works for. So does an agent asking you for a quote or following up an invoice.',
        'If it’s doing what any customer can, it says it’s from Obsession and links to this page, without naming its customer.',
      ],
    },
    {
      id: 'does',
      heading: 'When it keeps its customer private, it only does what any customer can.',
      lines: ['In that case, it only:'],
      list: [
        'Signs up, and joins the emails and texts',
        'Reads public pages, prices and the ads you run in public',
        'Asks your site’s chat bot. If a person picks it up, the step ends',
        'Starts a free trial that needs no card',
        'Waits, and keeps what arrives',
      ],
    },
    {
      id: 'never',
      heading: 'It never pays on your store, and never poses as a buyer.',
      lines: [
        'No agent sends cold emails, or goes behind a login it wasn’t given, past a CAPTCHA or past a block.',
        'When it keeps its customer private, it also never:',
      ],
      list: [
        'Fills a basket or starts a checkout',
        'Sends your staff an enquiry, a contact form or a question',
        'Replies to your team, or stays in a trial once a rep writes or calls',
      ],
    },
    {
      id: 'keeps',
      heading: 'It keeps what any customer would see.',
      lines: [
        'The pages, emails, texts and bot answers it receives, with screenshots and times, for the customer it works for. Nothing from behind a login it wasn’t given, and nothing from inside your systems.',
      ],
    },
    {
      id: 'opt-out',
      heading: '1 email keeps our agents off your site.',
      lines: [
        `Write to ${CONTACT_EMAIL} with your web address. We stop every agent there and keep them off it.`,
        'Unsubscribing its email address, or texting STOP to its number, works too, as it would for anyone.',
        'Ask us anything else as well: what an agent did on your site, and when. We name a customer only with their OK.',
      ],
    },
  ],

  contact: {
    heading: 'Ask us anything about an agent you saw.',
    line: 'Tell us the email address or phone number it used, and what you’d like: an answer, or our agents off your site. We reply to every email.',
    email: CONTACT_EMAIL,
    cta: { label: 'Email us', to: `mailto:${CONTACT_EMAIL}?subject=An%20Obsession%20agent` },
    secondary: { label: 'See what Obsession does', to: '/' },
  },
}

/* The 404 page (dist/404.html, noindex). It carries the waitlist, so the nav's call to action has somewhere to land,
   and a link to /agents for anyone who mistyped the link an agent gave them. */
export const notFoundPage: NotFoundPage = {
  meta: {
    path: '/404',
    title: 'Page not found · Obsession, AI agents for commercial teams',
    description:
      'There’s no page at this address. Obsession sends declared AI agents to sign up, shop, ask and check at every company on your list, continuously.',
    answer:
      'There’s no page at this address on useobsession.com. Obsession is the intelligence infrastructure for commercial teams: declared AI agents that do business with other companies for you.',
  },
  headline: 'There’s no page at this address.',
  sub: 'The link may be old or mistyped. If an Obsession agent sent you here, start at useobsession.com/agents.',
  links: [
    { label: 'Home', to: '/' },
    { label: 'Recipes', to: '/recipes' },
    { label: 'Sample output', to: '/sample-output' },
    { label: 'Saw an Obsession agent?', to: '/agents' },
  ],
  capture: {
    kind: 'waitlist',
    source: '404',
    button: 'Join the waitlist',
    placeholder: 'Your work email',
    micro: 'We keep your email to tell you about Obsession, and nothing else.',
    roles: waitlistRoles,
    interest: 'any',
  },
}

/* llms.txt: `summary` is the 1 line under the title (the blockquote); `intro` is the paragraph before the page list.
   Plain and complete for answer engines: what it is, how it works, the recipes, the red lines, the 1 real run. */
export const llms: Llms = {
  summary:
    'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you.',
  intro: [
    'Obsession’s agents sign up, shop, ask the site’s chat bot, chase, check and wait at every company on your list, continuously, and every step they take is signed.',
    'You get the proof and your next move by email, PDF, Slack, a sheet, Clay, your CRM or a webhook.',
    'There are 3 ways in: pick a recipe, which comes with everything it needs already set up; type a task in plain words, and the system sets it up for you; or build your own on the API.',
    'Recipes cover winning customers (prospect intelligence, listings and AI answers), keeping customers (account watch, business case), watching rivals (competitor tracking, email and SMS tracking, price watch, ad tracking, trial teardown), checking your own journeys (mystery shopper, speed to lead, website audit, delivery monitoring), and getting paid and saving (get paid, supplier quotes).',
    'Most tools read what a company publishes. Obsession goes through it as a customer.',
    'Every agent says it’s an AI agent and never pretends to be a person. At rivals and prospects it uses only the paths any customer can (sign ups, newsletters, texts, public pages, the ads they run in public, the site’s chat bot and trials that need no card), never contacts staff or replies, closes a trial the moment a rep writes or calls, never names its customer and links to useobsession.com/agents. A company’s own journeys, or a client’s or account’s, run only with the owner’s OK, and on anyone else’s store every checkout stops before payment.',
    'The sample output at useobsession.com/sample-output is a real September 2026 check of a skincare store: 4 test customers, every inbox watched for 48 hours, and the 2 shoppers who left full baskets got no reminder. A store owner, or an agency with a client’s OK, can get a first mystery shop free.',
  ].join(' '),
}

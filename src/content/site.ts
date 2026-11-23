import { plans, prices } from './prices'
import { keepArrivedFrom } from './signupFlags'
import type { AgentsPage, Llms, NotFoundPage, PrivacyPage, RecipesIndexPage } from './types'

/* Site pages: the Recipes index (/recipes), the privacy notice (/privacy), the page for companies an agent visits
   (/agents), the 404 page and the llms.txt intro. Since 20 Nov every one says what Home says: Obsession gives AI agents
   a persona on the web and keeps them running, from a blueprint, the API or MCP; the Free plan, never a waitlist. The agents
   appear only where a page says where the data comes from (/agents). The lines every agent keeps (obsession/system.md):
   the event log is never changed, who asked stays private unless they choose to be named, and the law (an agent says it's
   AI when it talks to a person, never uses fake payment details, never gets round a CAPTCHA or a bot block, never
   clicks paid ads at volume). */

/* The 1 address every notice on the site gives. The founders must confirm this mailbox exists and is read before the
   site ships (agents@ or privacy@ can be aliases that forward here). */
export const CONTACT_EMAIL = 'seun@useobsession.com'

/* The controller named in the privacy notice (UK GDPR article 13(1)(a)): the legal entity's registered name and address,
   as 'Name Ltd, 1 Street, Town, POSTCODE'. The founders supply it before the site ships. Until then the notice gives
   only the contact line (never a bracketed placeholder), and the prerender prints a note on every build. */
export const CONTROLLER: string | null = null

/* The 1 sentence (docs/SEARCH.md 2): what Obsession is, word for word wherever the site defines it (llms.summary below,
   the Organization JSON-LD, Home's hero, its "What is Obsession?" and /agents). The footer carries its core in 1 short
   line (content/footer.ts). */
const SENTENCE =
  'Obsession is the toolkit for AI agents, through one API and one bill. Its pieces are email inboxes, phone numbers and texts, iMessage, WhatsApp, Slack and Telegram, a cloud browser and a sandbox to run code. Use one piece, put them together as a persona, or pick a blueprint and Obsession runs the job.'

/* What Obsession is, as an entity: the line every engine and profile repeats (llms.txt's summary, the Organization and
   WebSite JSON-LD, docs/SEARCH.md 2). Since 21 Nov the pieces an agent needs through one API, plus blueprints; never AI
   customers. */
export const ENTITY =
  'Obsession is the toolkit for AI agents, through one API and one bill. Its pieces are email inboxes, phone numbers and texts, iMessage, WhatsApp, Slack and Telegram, a cloud browser and a sandbox to run code. A persona puts the pieces under one identity, free while it waits. Teams with no engineers pick a blueprint, and Obsession runs the job and sends them the results. Every event and result lands in one event log developers subscribe to.'

/* /recipes. Since 20 Nov (the persona rewrite) each recipe is a job personas already know how to do: who the persona
   is, where it goes, what it brings back and how it reaches your event log. Grouped by job as in the nav; the groups render the
   recipes whose `group` matches, in this order. */
export const recipesPage: RecipesIndexPage = {
  meta: {
    path: '/blueprints',
    title: 'Blueprints: ready-made AI agent templates we run for you',
    description:
      'Ready-to-use AI agents and templates, called blueprints: pick one, say where results go, and Obsession runs it, from missed calls to invoices.',
    answer:
      'Blueprints are ready-made AI agent templates that run on Obsession’s pieces. Pick one, say where results go, and each result lands in your event log, Slack, a sheet or your CRM.',
    ogImage: '/og/recipes.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Blueprints', path: '/blueprints' },
    ],
  },

  hero: {
    headline: 'Pick a blueprint. Obsession runs the job.',
    sub: 'Blueprints are ready-made AI agent templates that run on Obsession’s pieces. They come in seven types, one for each job AI agents do. Pick one, say where results go, and pay only for the pieces it uses.',
  },

  /* The recipes' own `group` field, kept for their data; since the 22 Nov call the hub groups by the six types below. */
  types: { label: 'Blueprints by job', more: 'See the pieces and prices', runsOn: 'Runs on' },

  groups: [
    { group: 'Talk to customers', line: 'Calls, texts and messages answered, confirmed and followed up, on your own numbers.' },
    { group: 'Test sign-up and agents', line: 'Your own sign-up, codes, emails and forms, checked as a new customer meets them.' },
    { group: 'Build agent products', line: 'Starters for agents that answer their own inbox, texts and messages.' },
    { group: 'Work behind logins', line: 'Portals signed in for weeks, statuses and documents collected every day.' },
    { group: 'Watch the market', line: 'Competitors’ emails, prices, trials and ads, dated.' },
    { group: 'Train and test agents', line: 'Your agent scored on real tasks, every night and after every update.' },
    { group: 'Buy, book and order', line: 'Supplies reordered, trips booked and every receipt kept, paid with the card you give it.' },
  ],

  hub: {
    heading: 'From your list to the tools you already use.',
    line: 'Send personas from a list, a CSV, Clay or the API. Each event lands dated, with its screenshots.',
    inputs: ['Paste a list', 'Upload a CSV', 'Clay', 'Google Sheets', 'The API or MCP'],
    outputs: ['Your AI agent', 'Clay', 'Google Sheets', 'Slack', 'Your CRM', 'A webhook', 'A PDF report'],
    guide: { label: 'Every use case', to: '/use-cases' },
  },

  /* AI employees by role (23 Nov 2026), inside the describe section: Obsession equips the agent, the persona holds it,
     and it can take any job; these are the roles people ask for first, each linked to the page that shows it. */
  roles: {
    id: 'ai-employees',
    label: 'AI employees by role',
    line: 'Every AI employee is an agent Obsession equips with a phone, an inbox and a browser, working as one persona. Start from a role people ask for:',
    items: [
      { name: 'AI receptionist', to: '/use-cases/ai-receptionist' },
      { name: 'AI SDR', to: '/use-cases/ai-sdr' },
      { name: 'AI recruiter', to: '/use-cases/ai-recruiter' },
      { name: 'AI support agent', to: '/use-cases/ai-agent-for-customer-support' },
      { name: 'AI operations assistant', to: '/blueprints/work-behind-logins' },
      { name: 'AI market analyst', to: '/blueprints/watch-the-market' },
    ],
  },

  faq: {
    heading: 'Questions about blueprints, our AI agent templates.',
    items: [
      {
        q: 'What’s an Obsession blueprint?',
        a: 'A ready-made AI agent template that runs on Obsession beside the pieces: who the persona is, where it goes, what it does and what it brings back. Every result lands in your event log, where your code or your team picks it up.',
      },
      {
        q: 'Can I bring my own job?',
        a: 'Yes. Write the task once and it runs on our runtime next to the pieces, with nothing to host. Its results arrive in your event log like every other event.',
      },
      {
        q: 'Are there ready-made AI agents I can use without building one?',
        a: 'Yes. Every blueprint is a ready-to-use AI agent job: pick one, say where results go, and Obsession runs it on a schedule, with no code. If none fits, describe your own job and we set it up as a blueprint.',
      },
      {
        q: 'Is a blueprint an AI employee?',
        a: 'No. A blueprint is one ready-made job. An AI employee is an agent Obsession equips with a phone, an inbox and a browser, working as one persona. It can run several blueprints, a job you describe in a sentence, or work you build on the API.',
        link: { label: 'What an AI employee needs', to: '/blueprints#ai-employees' },
      },
      {
        q: 'Can I change a blueprint?',
        a: 'Yes. You set who the persona is, where it goes, how often it runs, how long it waits for replies and where its results go.',
      },
      {
        q: 'What does a blueprint cost?',
        a: 'It is billed on the pieces it uses, at list rates, toward what your plan covers, with model tokens on top. Each blueprint’s page shows a typical month at 3 sizes, such as per store, competitor or voice agent.',
      },
      {
        q: 'Can I try an AI agent template for free?',
        a: 'Yes. Try any blueprint on the Free plan, with no credit card, within its allowances. Pick a paid plan when you want it on a schedule.',
      },
      {
        q: 'Can I run a blueprint from my own code?',
        a: 'Yes. Start one with obsession.blueprints.run, or from your own agent over MCP, and subscribe to its results in your event log.',
      },
    ],
  },

  final: {
    heading: 'Pick the first job for Obsession to run.',
    capture: {
      kind: 'waitlist',
      source: 'recipes-final',
      button: 'Start free',
      interest: 'any',
    },
  },
}

/* /privacy. UK GDPR article 13, plainly: who is responsible, what the sign-up form keeps (and any site the
   reader names for their agents), why, the legal basis, how long, who sees it, transfers, rights and the ICO, and the
   contact. 9 Nov and 22 Nov: only the retired words changed (waitlist, free checks, early access, "add or check a
   company"); the legal meaning is the same. Before it ships the founders confirm: the controller's legal name and address (CONTROLLER), the mailbox
   (CONTACT_EMAIL), the 12 month retention, and that the sheet sits on a company account covered by the provider's
   data terms. */
export const privacyPage: PrivacyPage = {
  meta: {
    path: '/privacy',
    title: 'Privacy notice: what Obsession keeps from its forms and why',
    description:
      'What Obsession keeps when you sign up and name the sites your agents start with, why, how long, who sees it, and how to see, change or delete it.',
    answer:
      'Obsession keeps the email, name, company, website, role, brands, blueprints and use case you give when you sign up, including any site you name for your agents, plus the page you used. It uses them to tell you about Obsession, set up your account and decide what to build. It never sells them, and deletes them 12 months after you sign up or the day you ask.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Privacy', path: '/privacy' },
    ],
  },

  headline: 'We keep what you type into our forms, and never sell it.',
  sub: 'This notice covers the sign-up form, any site you name for your agents, and Google Analytics on useobsession.com, under UK data protection law.',
  updated: '22 November 2026',

  sections: [
    {
      id: 'who',
      heading: 'Obsession is responsible for your details.',
      lines: [
        CONTROLLER
          ? `${CONTROLLER} is the controller of the details you give us on this site. Write to ${CONTACT_EMAIL} about anything in this notice.`
          : `Write to ${CONTACT_EMAIL} about anything in this notice.`,
      ],
    },
    {
      id: 'what',
      heading: 'We keep what you type, and the page you typed it on.',
      lines: ['When you sign up, including any site you name for your agents, we keep:'],
      list: [
        'Your email address, name, company and its website',
        'What you do (a brand, an agency and its kind, a marketing or sales team, a developer) and, if you tap it, how many clients or how big the team',
        'The brands, companies or AI agents you name for your personas to start with (web addresses, or an AI agent’s phone number), if you name any',
        'The blueprints you pick',
        'What you tell us you’d like to test, if you do',
        keepArrivedFrom
          ? 'The page and form you used, the site that sent you there, how far you got, and when'
          : 'The page and form you used, how far you got, and when',
      ],
    },
    {
      id: 'browser',
      heading: 'We add nothing about your device to your sign-up.',
      lines: [
        'Our website host and form service see your device’s IP address, as they do on any website. We don’t keep it with your details.',
        'We use no advertising cookies. Your light or dark choice, and your answer about Google Analytics, are saved in your own browser.',
        'While you finish signing up, your answers wait in your browser for up to 24 hours, so a reload or another page doesn’t lose them.',
        'You don’t have to give us anything. Without an email address, we can’t set up your account.',
      ],
    },
    {
      id: 'analytics',
      heading: 'Google Analytics counts visits, only if you allow it.',
      lines: [
        'The first time you visit, a card asks whether we can use Google Analytics. Until you choose Allow, nothing from Google loads and no cookie is set. If your browser sends Global Privacy Control, the card doesn’t ask.',
        'If you allow it, Google Analytics sets 2 cookies, _ga and one starting _ga_, each kept for up to 2 years. It tells us:',
      ],
      list: [
        'Which pages were read, and the page or site that sent you',
        'Your rough location (country and city, worked out from your IP address, which Google Analytics doesn’t keep)',
        'Your device, browser and screen size',
        'That a form on our site was sent, and which form. Never your email or anything you type',
      ],
    },
    {
      id: 'analytics-off',
      heading: 'Advertising features are off, and you can change your mind.',
      lines: [
        'We turned off Google’s advertising features: nothing is shared for ads, and Google signals is off.',
        'Choose Cookie settings at the foot of any page to allow or decline again. Declining removes Google’s cookies from your browser.',
      ],
    },
    {
      id: 'why',
      heading: 'We use it to tell you about Obsession and run what you asked for.',
      lines: ['We use your details to:'],
      list: [
        'Tell you about Obsession',
        'Set up what you asked for first',
        'Decide who we call first, from your answers',
        'Run the blueprints you picked on the sites you named, and send you the results',
        'Decide what we build next, from what people tell us they need',
        'Keep our forms safe from bots and abuse',
      ],
    },
    {
      id: 'basis',
      heading: 'Your consent covers our emails, and you can withdraw it at any time.',
      lines: [
        `Emails about Obsession: your consent, given when you sign up. Withdraw it whenever you like by replying to any email from us or writing to ${CONTACT_EMAIL}.`,
        'Your account, and any site you name for your agents: you asked us for it, so we use your details to deliver it (the legal basis is contract).',
        'Your name, company, website, role, brands, blueprints and use case: our legitimate interest in setting up what you asked for, replying to you and deciding what to build. The sizes, brands and your use case are optional.',
        'To set up your account we may read your company’s website and public profile. We look up your company, not you.',
        'Keeping the forms safe: our legitimate interest in stopping spam and abuse.',
        'Google Analytics: your consent, given on the cookie card. Withdraw it with Cookie settings at the foot of any page.',
        'We make no automated decisions about you.',
      ],
    },
    {
      id: 'how-long',
      heading: 'We delete your details 12 months after you sign up.',
      lines: ['Or the day you ask, if that comes first. Google Analytics keeps visit data for no more than 14 months.'],
    },
    {
      id: 'who-sees',
      heading: 'Only the founders of Obsession read your sign-up.',
      lines: ['We never sell your details or share them for anyone else’s marketing. These providers store or send them for us:'],
      list: [
        'The spreadsheet and email service that holds sign-ups',
        'Our website host',
        'Google, for Google Analytics, only if you allow it',
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

/* /agents, linked by every Obsession agent when it talks to a person ("Saw an Obsession agent?") and from every footer.
   Rewritten 23 Nov 2026 for the 21 Nov position: an Obsession agent is an AI agent a team runs on Obsession, with its own
   inbox, phone number and browser. Two readers land here: a company whose site an agent signed up to, and a person an
   agent emailed, texted or called for a business. The page states the product lines first (says it's an AI; texts and
   calls only people who gave the business their number; signs in only with logins its team gives it; stops at any
   identity check, and before payment unless given its team's own card; never gets round a CAPTCHA or a bot block; every
   step in the team's event log), then how to ask us anything or keep agents off a site. Who asked for a visit is never
   named without their OK. Never "AI customer", "record" or the index. */
export const agentsPage: AgentsPage = {
  meta: {
    path: '/agents',
    title: 'Saw an Obsession agent? What it does and how to opt out',
    description:
      'An Obsession agent is an AI agent with its own inbox, phone number and browser, and it always says it’s an AI. What it does and never does, and how to opt out.',
    /* The sub, then the contact in full: an assistant that quotes this answer away from the page still says where to
       write. Its first sentence is the "Obsession agent" term in the JSON-LD (lib/jsonld.ts). */
    answer: `An Obsession agent is an AI agent that a team runs on Obsession, with its own inbox, phone number and browser. It identifies itself as an AI to anyone it speaks to, and every step it takes is kept in its team’s event log. Any company can write to ${CONTACT_EMAIL} with a question about an agent, or to keep Obsession’s agents off its site.`,
    ogImage: '/og/agents.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Obsession agents', path: '/agents' },
    ],
  },

  pill: 'Saw an Obsession agent?',
  headline: 'An Obsession agent is an AI agent, and it always says so.',
  sub: 'An Obsession agent is an AI agent that a team runs on Obsession, with its own inbox, phone number and browser. It identifies itself as an AI to anyone it speaks to, and every step it takes is kept in its team’s event log. Write to us with any question about an agent, or to keep our agents off your site.',

  sections: [
    {
      id: 'what',
      heading: 'It works for the team that runs it.',
      lines: [
        `${SENTENCE} A team gives its agent a persona: an inbox, a phone number and a browser under one identity.`,
        'The agent uses them for that team’s job. Its jobs include answering the team’s customers, following up enquiries, chasing documents, and signing up to websites as a new customer to see what they send.',
      ],
    },
    {
      /* lines[0] defines "declared AI agent" in the JSON-LD (lib/jsonld.ts). */
      id: 'declared',
      heading: 'It never pretends to be a person.',
      lines: [
        'When it talks to a person, by chat, email, text or phone, it says it’s an AI agent running on Obsession and links to this page.',
        'It texts and calls only people who gave the business their number. Who asked for a visit to your site stays private unless they choose to be named.',
      ],
    },
    {
      id: 'never',
      heading: 'What no Obsession agent does, whoever runs it.',
      lines: ['Every agent keeps to the law and to these operating rules. It never:'],
      list: [
        'Pretends to be a person when it talks to one',
        'Texts or calls anyone who hasn’t given the business their number',
        'Signs in to an account it has no right to',
        'Goes past an identity check',
        'Pays for anything without its team’s own payment card',
        'Uses fake payment details',
        'Gets round a CAPTCHA or a bot block',
        'Clicks paid ads at volume',
        'Edits an event once it’s kept',
      ],
    },
    {
      id: 'keeps',
      heading: 'Every step it takes is kept in its team’s event log.',
      lines: [
        'Each page, email, text, call and chat answer it handles is timestamped and kept exactly as it arrived, so nobody has to take its word for what happened.',
        'It signs in only with logins its team gives it, never to an account it has no right to, and sees nothing inside your systems. At an identity check it stops, and the event log keeps what the check asked for. At checkout it stops before payment unless its team gives it their own payment card.',
      ],
    },
    {
      id: 'opt-out',
      heading: 'One email keeps our agents off your site.',
      lines: [
        `Write to ${CONTACT_EMAIL} with your web address. We stop every Obsession agent there and keep them off it.`,
        'If an agent texted or emailed you, reply STOP to its number or unsubscribe from its emails, as you would with any business.',
        'Ask us anything else as well: what an agent did on your site, and when. We name who asked for a visit only with their OK.',
      ],
    },
  ],

  /* The questions a company or a person asks after an agent contacts them (_research/seo/research-questions.md),
     answered only with what this page already says. FAQPage JSON-LD follows them (meta.ts). */
  faq: {
    heading: 'Every Obsession agent has a company behind it.',
    items: [
      {
        q: 'Who sent the AI agent that signed up to my site?',
        a: `A team that runs its agent on Obsession. Every Obsession agent says it’s an AI when it talks to a person and links to this page, and we never name who asked for a visit without their OK. Write to ${CONTACT_EMAIL} with the email address or number it used, and we tell you what it did and when.`,
      },
      {
        q: 'An AI agent texted or called me. Why?',
        a: `An Obsession agent texts and calls only people who gave the business their number, for example to confirm a booking or reply to an enquiry. Reply STOP to end the texts, or write to ${CONTACT_EMAIL} with the number it used.`,
      },
      {
        q: 'Is there a real company behind an AI agent on my checkout?',
        a: 'Yes. A team runs every Obsession agent, and Obsession answers any question about it. At checkout it stops before payment unless that team gives it their own payment card, and it never uses fake payment details.',
      },
      {
        q: 'Can an Obsession agent sign in to my systems?',
        a: 'Only with logins its team gives it, such as a portal account the team already holds. It never signs in to an account it has no right to, and it stops at any identity check.',
      },
      {
        q: 'How do I keep Obsession’s AI agents off my site?',
        a: `Write to ${CONTACT_EMAIL} with your web address and we stop every Obsession agent there and keep them off it. Unsubscribing its email address, or texting STOP to its number, works too.`,
      },
      {
        q: 'Will an Obsession agent contact my staff?',
        a: 'Only the way a customer would, through your chat, email or phone, and it says it’s an AI agent the moment it does.',
      },
    ],
  },

  contact: {
    heading: 'Ask us anything about an agent you saw.',
    line: 'Tell us the email address or phone number it used, and what you’d like: an answer, or our agents off your site. We reply to every email.',
    email: CONTACT_EMAIL,
    cta: { label: 'Email us', to: `mailto:${CONTACT_EMAIL}?subject=An%20Obsession%20agent` },
    secondary: { label: 'See what Obsession does', to: '/' },
  },
}

/* The 404 page (dist/404.html, noindex). It carries the sign-up form, so the nav's call to action has somewhere to
   land, and a link to /agents for anyone who mistyped the link an agent gave them. */
export const notFoundPage: NotFoundPage = {
  meta: {
    path: '/404',
    title: 'Page not found · Obsession, the toolkit for AI agents',
    description:
      'There’s no page at this address. Obsession is the toolkit for AI agents: inboxes, phone numbers, browsers and sandboxes, through one API and one bill.',
    answer: `There’s no page at this address on useobsession.com. ${SENTENCE}`,
  },
  headline: 'There’s no page at this address.',
  sub: 'The link may be old or mistyped. If an Obsession agent sent you here, start at useobsession.com/agents.',
  links: [
    { label: 'Home', to: '/' },
    { label: 'Blueprints', to: '/blueprints' },
    { label: 'Sample data', to: '/sample-output' },
    { label: 'Saw an Obsession agent?', to: '/agents' },
  ],
  capture: {
    kind: 'waitlist',
    source: '404',
    button: 'Start free',
    interest: 'any',
  },
}

/* llms.txt: `summary` is the 1 line under the title (the blockquote); `intro` is the paragraph before the page list.
   Plain and complete for answer engines, in Home's story (21 Nov): the pieces, the persona that bundles them, the API,
   MCP and pricing, the blueprints, the red lines, the 1 real run and the Free plan. The intro names every blueprint: the prerender fails the build
   when a blueprint's name is missing from it. */
export const llms: Llms = {
  summary: ENTITY,
  intro: [
    'Obsession gives AI agents the pieces they need on the web, through one API and one bill. Email: inboxes agents send and receive from. Phone: numbers, texts and calls. Messaging: iMessage lines, WhatsApp for support, sales, bookings and notifications, Slack and Telegram. Browser: a cloud browser whose sessions keep their logins, with a home connection. Sandbox: a computer to run code, started only when a task needs one. A company can take one piece, such as email, or all of them.',
    'A persona puts the pieces under one identity: an inbox, a number, its channels, a browser profile and a sandbox when needed. It lives on an actor runtime, so it costs nothing while it waits, answers a new message in about 50 ms without starting a machine, runs on a schedule, stops at any identity check, stops before payment unless you give it your own payment card, and every page, email, text and call it sees lands in your event log, each dated, with screenshots. It says it’s an AI when it talks to a person.',
    `Developers use the pieces through the API, SDKs and MCP, so their own agents call them as tools. Events reach webhooks, Clay, Zapier, HubSpot, Baserow and Supabase. Each piece is priced on its own (useobsession.com/pricing): an inbox costs ${prices.inbox.amount} a month (the Free plan includes ${plans.find((pl) => pl.id === 'free')?.allowances.inbox}), a US number ${prices.number.amount} a month, a browser ${prices.browser.amount} an hour and a sandbox ${prices.sandbox.amount} a vCPU hour, and an idle persona costs nothing. Every plan pays the same list rates, and a paid plan’s fee covers a set amount of that usage, from $${plans.find((pl) => pl.id === 'developer')?.monthly} a month, which covers $${plans.find((pl) => pl.id === 'developer')?.covers}, to $${plans.find((pl) => pl.id === 'scale')?.monthly}, which covers $${plans.find((pl) => pl.id === 'scale')?.covers}. Model tokens are priced per million like any piece, from ${prices.tokensIn.amount} per million input tokens on Auto, or nothing with your own key.`,
    'Blueprints are jobs that run on Obsession beside the pieces: ours, ready to run for teams with no engineers, or your own task, with nothing to host. Try any blueprint on the Free plan. After that, its runs count toward what your plan covers at list rates, and each blueprint’s page shows what a typical month costs. Every result lands in the same event log developers subscribe to, and reaches Slack, email, a CRM, Clay, a spreadsheet, a PDF report or a Claude agent; for any other tool, Obsession builds the integration. Blueprints come in seven types. Talk to customers: missed call text back, appointment reminders, speed-to-lead callback, document chaser, voice agent check, support bot check, AI disclosure check. Test sign-up and agents: mystery shopping for ecommerce brands and their agencies, QA on your own flows, sign-in code check, delivery monitoring, lead response checks, ad landing check, partner checks. Build agent products: inbox agent, iMessage assistant, outbound agent check, sales agent check. Work behind logins: prior authorization status, load tracking, invoice collector, price watch, trial teardown, account watch. Watch the market: competitor tracking, email and SMS tracking, ad tracking, prospect intelligence, listings and AI answers. Train and test agents: nightly agent evaluation, drift watch, vendor agent check, resolution check. Buy, book and order: agent checkout test, travel booking agent, supplier reorder agent, order and receipt matching.',
    `Every persona says it’s an AI when it talks to a person, never uses fake payment details, never gets round a CAPTCHA or a bot block, and never clicks paid ads at volume. Any company can write to ${CONTACT_EMAIL} to keep personas off its site.`,
    'The sample data at useobsession.com/sample-output is a real mystery shopping run at a UK skincare store in September 2026: every email, text, screen and price the run kept, in each format a result can land in.',
    'Teams start on the Free plan, with no credit card, and Obsession sets up their API key and MCP with them.',
  ].join(' '),
}

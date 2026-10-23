import { keepArrivedFrom } from './signupFlags'
import type { AgentsPage, Llms, NotFoundPage, PrivacyPage, RecipesIndexPage } from './types'
import { WAYS } from './ways'

/* Site pages: the Recipes index (/recipes), the privacy notice (/privacy), the page for companies an agent visits
   (/agents), the 404 page and the llms.txt intro. Copy rules: COPY.md, "Voice". The lines every agent keeps, whoever
   it works for (obsession/system.md, the 3 lines): the record is never changed (every receipt kept as it arrived), the
   customer stays private unless they choose to be named, and the law (an agent says it's AI when it talks to a person,
   never uses fake payment details, never gets round a CAPTCHA or a bot block, never clicks paid ads at volume).
   Everything else an agent does is its customer's setting. */

/* The 1 address every notice on the site gives. The founders must confirm this mailbox exists and is read before the
   site ships (agents@ or privacy@ can be aliases that forward here). */
export const CONTACT_EMAIL = 'hello@useobsession.com'

/* The controller named in the privacy notice (UK GDPR article 13(1)(a)): the legal entity's registered name and address,
   as 'Name Ltd, 1 Street, Town, POSTCODE'. The founders supply it before the site ships. Until then the notice gives
   only the contact line (never a bracketed placeholder), and the prerender prints a note on every build. */
export const CONTROLLER: string | null = null

/* The 1 sentence (docs/SEARCH.md 2): what Obsession is, word for word wherever the site defines it (llms.summary below,
   the Organization JSON-LD, Home's hero, its "What is Obsession?" and /agents). The footer carries its core in 1 short
   line (content/footer.ts). */
const SENTENCE =
  'Obsession’s AI agents sign up to any company you name and stay its customer for months, keeping every email, offer and price it sends, with proof.'

/* /recipes. James's index (1 job each, everything set up, the add-companies hub), grouped by job as in the nav.
   The groups render the recipes whose `group` matches, in this order. */
export const recipesPage: RecipesIndexPage = {
  meta: {
    path: '/recipes',
    title: 'Obsession recipes: AI customer agents set up for each job',
    description:
      'Pick a recipe and Obsession’s customer agents set up for it: inboxes, numbers, browsers, waits and checks. Watch rivals, your own journeys or your AI.',
    answer:
      'Obsession recipes are watches ready to run: each comes with its customer agents, inboxes, phone numbers, browsers and schedule set up. Add your companies, or type any other job.',
    ogImage: '/og/recipes.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
    ],
  },

  hero: {
    headline: 'Pick the job. The customer agents come set up for it.',
    sub: 'Obsession recipes are watches ready to run: each comes with its customer agents, inboxes, phone numbers, browsers and schedule set up. Add your companies, or type any other job.',
  },

  groups: [
    {
      group: 'Watch other companies',
      line: 'Every email, text, price, ad and trial step from rivals, prospects and accounts, kept the day it lands.',
    },
    {
      group: 'Check your own journeys',
      line: 'Go through your own ads, forms, checkout and partners the way a customer does, and catch every break first.',
    },
    {
      group: 'Check your AI agents',
      line: 'Test customers call, chat, email and shop the AI agents you run every day, and keep what they find.',
    },
  ],

  hub: {
    heading: 'Every company on your list, from wherever it lives.',
    line: 'What the agents find comes back wherever your team already works.',
    inputs: ['Paste a list', 'Upload a CSV', 'Connect Clay', 'Your own agent', 'The API'],
    outputs: ['Email', 'PDF', 'Slack', 'A sheet', 'Clay', 'Your CRM', 'A webhook'],
  },

  faq: {
    heading: 'Questions about recipes.',
    items: [
      {
        q: 'What’s an Obsession recipe?',
        a: 'An Obsession recipe is a watch that comes ready to run: the customer agents, each with its own inbox, phone number and browser, plus the schedule, the waits and the checks. You add the companies and choose where the results go.',
      },
      {
        q: 'What if my job isn’t here?',
        a: 'Type it in plain words, like “Tell me which of our prospects never send a welcome email”, on our website or to your own agent. Obsession plans the watch, you approve it, and the agents start.',
      },
      {
        q: 'Can I build my own?',
        a: 'Yes. Recipes are open source, and the same agents, inboxes, numbers and browsers are there from your own code through MCP and the API.',
      },
      {
        q: 'Can I change a recipe?',
        a: 'Yes. You can change a recipe’s steps, schedule, companies and where the results land. What an agent does at a company is your setting.',
      },
      {
        q: 'How many companies can 1 recipe cover?',
        a: 'As many as you add. Every company gets its own customer agent, and they all run at once.',
      },
      {
        q: 'Can an Obsession agent spend money?',
        a: 'Only on a card capped at a budget you set, for a job you approved, like a test order on your own store that it refunds. Above the cap it stops and asks you.',
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
      'Obsession keeps the email, name, company, website, role, brands, recipes and use case you give when you join its waitlist, including a free mystery shop or AI agent check, plus the page you used. It uses them to tell you about Obsession, set up what you asked for and decide what to build, never sells them, and deletes them 12 months after you sign up or the day you ask.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Privacy', path: '/privacy' },
    ],
  },

  headline: 'We keep what you type into our forms, and never sell it.',
  sub: 'This notice covers the waitlist, the free mystery shop, the free AI agent check and Google Analytics on useobsession.com, under UK data protection law.',
  updated: '23 October 2026',

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
      lines: ['When you join the waitlist, including for a free mystery shop or AI agent check, we keep:'],
      list: [
        'Your email address, name, company and its website',
        'What you do (a brand, an agency and its kind, a marketing or sales team, a developer) and, if you tap it, how many clients or how big the team',
        'The brands, stores or AI agents you name for us to check or watch (web addresses, or an AI agent’s phone number), if you name any',
        'The recipes you pick',
        'What you tell us you’d like to test, if you do',
        keepArrivedFrom
          ? 'The page and form you used, the site that sent you there, how far you got, and when'
          : 'The page and form you used, how far you got, and when',
      ],
    },
    {
      id: 'browser',
      heading: 'We add nothing about your device to your sign up.',
      lines: [
        'Our website host and form service see your device’s IP address, as they do on any website. We don’t keep it with your details.',
        'We use no advertising cookies. Your light or dark choice, and your answer about Google Analytics, are saved in your own browser.',
        'While you finish signing up, your answers wait in your browser for up to 24 hours, so a reload or another page doesn’t lose them.',
        'You don’t have to give us anything. Without an email address, we can’t add you to the waitlist.',
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
        'Run the free mystery shop or AI agent check you asked for, and send you the report',
        'Decide what we build next, from what people tell us they need',
        'Keep our forms safe from bots and abuse',
      ],
    },
    {
      id: 'basis',
      heading: 'Your consent covers our emails, and you can withdraw it at any time.',
      lines: [
        `Emails about Obsession: your consent, given when you sign up. Withdraw it whenever you like by replying to any email from us or writing to ${CONTACT_EMAIL}.`,
        'Your free mystery shop or AI agent check: you asked us for it, so we use your details to deliver it (the legal basis is contract).',
        'Your name, company, website, role, brands, recipes and use case: our legitimate interest in setting up what you asked for, replying to you and deciding what to build. The sizes, brands and your use case are optional.',
        'To prepare your first run we may read your company’s website and public profile. We look up your company, not you.',
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
      heading: 'Only the founders of Obsession read your sign up.',
      lines: ['We never sell your details or share them for anyone else’s marketing. These providers store or send them for us:'],
      list: [
        'The spreadsheet and email service that holds the waitlist',
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

/* /agents, linked by every agent at rivals and prospects ("Saw an Obsession agent?") and from every footer. For the
   company an agent visited: what it is, that it's declared, what it does and never does, what it keeps, how to ask
   us anything or keep agents off a site. The customer is never named without their OK. */
export const agentsPage: AgentsPage = {
  meta: {
    path: '/agents',
    title: 'Saw an Obsession agent? What an AI customer agent does here',
    description:
      'An Obsession agent is an AI customer agent with its own inbox, number and browser, working for an Obsession customer. What it does, and how to opt out.',
    /* The sub, then the contact in full: an assistant that quotes this answer away from the page still says where to
       write. */
    answer: `An Obsession agent is an AI customer agent with its own inbox, phone number and browser, working for an Obsession customer. Any company can write to ${CONTACT_EMAIL} with a question about an agent, or to keep Obsession’s agents off its site.`,
    ogImage: '/og/agents.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Obsession agents', path: '/agents' },
    ],
  },

  pill: 'Saw an Obsession agent?',
  headline: 'An Obsession agent is a customer, and an AI.',
  sub: 'An Obsession agent is an AI customer agent with its own inbox, phone number and browser, working for an Obsession customer. Write to us with any question about it, or to keep our agents off your site.',

  sections: [
    {
      id: 'what',
      heading: 'It has its own inbox, phone number and browser.',
      lines: [
        `${SENTENCE} Each agent is a customer of 1 company: it signs up, reads what arrives, follows offers, fills baskets, starts trials and asks the site’s chat bot, as any customer can.`,
        'Everything it keeps is dated and kept exactly as it arrived, so nobody has to take its word for what happened.',
      ],
    },
    {
      id: 'declared',
      heading: 'It never pretends to be a person.',
      lines: [
        'When it talks to a person, by chat, email or phone, it says it’s an AI agent from Obsession and links to this page.',
        'Its customer stays private unless they choose to be named.',
      ],
    },
    {
      id: 'never',
      heading: 'What no Obsession agent does, whoever it works for.',
      lines: ['Every agent keeps to the law and to its record. It never:'],
      list: [
        'Pretends to be a person when it talks to one',
        'Uses fake payment details',
        'Gets round a CAPTCHA or a bot block',
        'Clicks paid ads at volume',
        'Changes what it found: every receipt is kept as it arrived',
      ],
    },
    {
      id: 'keeps',
      heading: 'It keeps what any customer would see.',
      lines: [
        'The pages, emails, texts and bot answers it receives, with their times and signatures, for the customer it works for. Nothing from behind a login it wasn’t given, and nothing from inside your systems.',
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

  /* The questions a company asks after an agent signs up (_research/seo/research-questions.md), answered only with what
     this page already says. FAQPage JSON-LD follows them (meta.ts). */
  faq: {
    heading: 'An agent on your site always has a company behind it.',
    items: [
      {
        q: 'Who sent the AI agent that signed up to my site?',
        a: `An Obsession customer did. Obsession agents say they’re AI when they talk to a person, link to this page, and never name their customer without their OK. Write to ${CONTACT_EMAIL} with the email address or number it used, and we tell you what it did and when.`,
      },
      {
        q: 'Is there a real company behind an AI agent on my checkout?',
        a: 'For an Obsession agent, yes: it works for an Obsession customer, and Obsession answers any question about it. It never uses fake payment details.',
      },
      {
        q: 'How do I keep Obsession’s AI agents off my site?',
        a: `Write to ${CONTACT_EMAIL} with your web address and we stop every Obsession agent there and keep them off it. Unsubscribing its email address, or texting STOP to its number, works too.`,
      },
      {
        q: 'Will an Obsession agent contact my staff?',
        a: 'Only the way a customer would, through your chat, email or phone, and it says it’s an AI agent from Obsession the moment it does.',
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

/* The 404 page (dist/404.html, noindex). It carries the waitlist, so the nav's call to action has somewhere to land,
   and a link to /agents for anyone who mistyped the link an agent gave them. */
export const notFoundPage: NotFoundPage = {
  meta: {
    path: '/404',
    title: 'Page not found · Obsession, a customer of every company',
    description:
      'There’s no page at this address. Obsession’s AI agents sign up to any company you name and stay its customer for months, keeping every email, with proof.',
    answer: `There’s no page at this address on useobsession.com. ${SENTENCE}`,
  },
  headline: 'There’s no page at this address.',
  sub: 'The link may be old or mistyped. Obsession’s AI agents sign up to any company you name and stay its customer. If an agent sent you here, start at useobsession.com/agents.',
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
    interest: 'any',
  },
}

/* llms.txt: `summary` is the 1 line under the title (the blockquote); `intro` is the paragraph before the page list.
   Plain and complete for answer engines: what it is, how it works, the recipes, the red lines, the 1 real run. The intro
   names every recipe: the prerender fails the build when a recipe's name is missing from it. */
export const llms: Llms = {
  summary: SENTENCE,
  intro: [
    'Each Obsession customer agent is a long lived customer of 1 company, with its own inbox, phone number and browser. It signs up, follows ads to their pages, starts trials, fills baskets and asks the site’s chat bot, then sleeps until the company does something, wakes, and files the receipt: the email, page or price as it arrived, with its time and its signature checked.',
    'You get each fact, 1 sentence with its receipt, in your own AI agent, Slack, Clay, your CRM, a sheet, a report or a webhook.',
    'Use it from your own AI agent through MCP, from a workflow file, from code through the API and SDKs (5 verbs: lookup, facts, evidence, become_customer, notify), or from the Obsession website, where you type what you want to know or pick a recipe.',
    `There are ${WAYS.length} ways in. ${WAYS.map((w) => `${w.name}, ${w.who.charAt(0).toLowerCase()}${w.who.slice(1)}: ${w.line}`).join(' ')}`,
    'Recipes cover watching other companies (competitor tracking, ad tracking, email and SMS tracking, price watch, trial teardown, prospect intelligence, account watch), checking your own journeys (mystery shopper, ad landing check, lead leaks, partner checks, website audit, delivery monitoring, listings and AI answers), and checking the AI agents you run (support bot check, voice agent check, outbound agent check, sales agent check, vendor agent check, resolution check, AI disclosure check, drift watch).',
    'Other tools read the outside of a company: ad libraries such as Foreplay keep the ads, email archives such as Panoramata, MailCharts and Milled keep newsletters, and page monitors such as Visualping alert on changes. Obsession is the customer, so it sees what comes after the click. The comparison is at useobsession.com/compare.',
    'The runtime is open source: the customer agents, how they fan out, sleep and learn, the record, recipes, integrations and the 5 verbs. Obsession Cloud runs it, with inboxes and numbers in many countries and months of shared history.',
    'Every agent says it’s an AI when it talks to a person, never uses fake payment details, never gets round a CAPTCHA or a bot block, never clicks paid ads at volume, and keeps every receipt exactly as it arrived. Any company can write to hello@useobsession.com to keep the agents off its site.',
    'The sample output at useobsession.com/sample-output is a real September 2026 check of a skincare store: 4 test customers, every inbox watched for 48 hours; 1 shopper left a basket, 1 stopped at checkout, and neither got a reminder. A store owner, or an agency for a client, can get a first report free.',
  ].join(' '),
}

import { keepArrivedFrom } from './signupFlags'
import type { AgentsPage, Llms, NotFoundPage, PrivacyPage, RecipesIndexPage } from './types'

/* Site pages: the Recipes index (/recipes), the privacy notice (/privacy), the page for companies an agent visits
   (/agents), the 404 page and the llms.txt intro. Since 9 Nov every one says what Home says: Obsession is a data
   company for the web behind the login, looked up by API, MCP or a table, early access, never a waitlist. The agents
   appear only where a page says where the data comes from (/agents). The lines every agent keeps (obsession/system.md):
   the record is never changed, who asked stays private unless they choose to be named, and the law (an agent says it's
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
  'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.'

/* What Obsession is, as an entity: the line every engine and profile repeats (llms.txt's summary, the Organization and
   WebSite JSON-LD, docs/SEARCH.md 2). Since 9 Nov a data company for the web behind the login, never AI customers. */
export const ENTITY =
  'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.'

/* /recipes. Since 9 Nov each recipe is a ready-made collection from the web behind the login: what it collects, from
   which companies, as which customer profile, and where the data lands. Grouped by job as in the nav; the groups render
   the recipes whose `group` matches, in this order. */
export const recipesPage: RecipesIndexPage = {
  meta: {
    path: '/recipes',
    title: 'Obsession recipes: ready-made collections behind the login',
    description:
      'Each Obsession recipe is a ready-made collection: what it collects, from which companies, as which customer profile, and where the data lands.',
    answer:
      'Obsession recipes are ready-made collections from the web behind the login. Each says what it collects, from which companies, as which customer profile, and where the data lands.',
    ogImage: '/og/recipes.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Recipes', path: '/recipes' },
    ],
  },

  hero: {
    headline: 'Pick a recipe. Add your companies.',
    sub: 'Obsession recipes are ready-made collections from the web behind the login. Each says what it collects, from which companies, as which customer profile, and where the data lands.',
  },

  groups: [
    {
      group: 'Watch other companies',
      line: 'Competitors’, prospects’ and accounts’ emails, prices, trials and offers, each dated with its screenshot.',
    },
    {
      group: 'Check your own journeys',
      line: 'Your own sign-up, checkout and emails as a new customer gets them, with the time each arrived.',
    },
    {
      group: 'Check your AI agents',
      line: 'What support chats, voice lines and sales agents tell a customer, kept word for word with the time.',
    },
  ],

  hub: {
    heading: 'From your list to the tools you already use.',
    line: 'Add companies from a list, a CSV, Clay or the API. Each fact lands dated, with its screenshot.',
    inputs: ['Paste a list', 'Upload a CSV', 'Clay', 'Google Sheets', 'The API or MCP'],
    outputs: ['Your AI agent', 'Clay', 'Google Sheets', 'Slack', 'Your CRM', 'A webhook', 'A PDF report'],
    guide: { label: 'Every use case', to: '/use-cases' },
  },

  faq: {
    heading: 'Questions about recipes.',
    items: [
      {
        q: 'What’s an Obsession recipe?',
        a: 'A ready-made collection. It names the data (emails, prices, trials, quotes or offers), the companies, the customer profile and country, and where each fact lands. You add the companies.',
      },
      {
        q: 'What if my question isn’t here?',
        a: 'Ask it in plain words in Insights, or from your own AI agent, like “Which of our prospects never send a welcome email?”. Obsession answers from the companies already in the index and offers Watch for the rest.',
      },
      {
        q: 'Can I change a recipe?',
        a: 'Yes: its companies, customer profiles, countries, how long each account stays open and where the data lands.',
      },
      {
        q: 'How many companies can 1 recipe cover?',
        a: 'As many as you add. A company already covered returns its history at once. One that isn’t starts when you click Watch.',
      },
      {
        q: 'Can I run a recipe from my own code?',
        a: 'Yes. Every recipe uses the same 5 verbs as the API and MCP: lookup, facts, evidence, index and notify.',
      },
    ],
  },

  final: {
    heading: 'Which recipe should we set up first?',
    capture: {
      kind: 'waitlist',
      source: 'recipes-final',
      button: 'Request early access',
      interest: 'any',
    },
  },
}

/* /privacy. UK GDPR article 13, plainly: who is responsible, what the early access form keeps (and any company the
   reader asks us to add or check), why, the legal basis, how long, who sees it, transfers, rights and the ICO, and the
   contact. 9 Nov: only the retired words changed (waitlist, free mystery shop, free AI agent check); the legal meaning
   is the same. Before it ships the founders confirm: the controller's legal name and address (CONTROLLER), the mailbox
   (CONTACT_EMAIL), the 12 month retention, and that the sheet sits on a company account covered by the provider's
   data terms. */
export const privacyPage: PrivacyPage = {
  meta: {
    path: '/privacy',
    title: 'Privacy notice: what Obsession keeps from its forms and why',
    description:
      'What Obsession keeps when you request early access or ask it to add or check a company, why, how long, who sees it, and how to see, change or delete it.',
    answer:
      'Obsession keeps the email, name, company, website, role, brands, recipes and use case you give when you request early access, including any company you ask it to add or check, plus the page you used. It uses them to tell you about Obsession, set up what you asked for and decide what to build, never sells them, and deletes them 12 months after you sign up or the day you ask.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Privacy', path: '/privacy' },
    ],
  },

  headline: 'We keep what you type into our forms, and never sell it.',
  sub: 'This notice covers the early access form, any company you ask us to add or check, and Google Analytics on useobsession.com, under UK data protection law.',
  updated: '9 November 2026',

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
      lines: ['When you request early access, including any company you ask us to add or check, we keep:'],
      list: [
        'Your email address, name, company and its website',
        'What you do (a brand, an agency and its kind, a marketing or sales team, a developer) and, if you tap it, how many clients or how big the team',
        'The brands, companies or AI agents you name for us to add, check or watch (web addresses, or an AI agent’s phone number), if you name any',
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
        'You don’t have to give us anything. Without an email address, we can’t add you to the early access list.',
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
        'Add or check the companies you asked for, and send you what we find',
        'Decide what we build next, from what people tell us they need',
        'Keep our forms safe from bots and abuse',
      ],
    },
    {
      id: 'basis',
      heading: 'Your consent covers our emails, and you can withdraw it at any time.',
      lines: [
        `Emails about Obsession: your consent, given when you sign up. Withdraw it whenever you like by replying to any email from us or writing to ${CONTACT_EMAIL}.`,
        'Your early access, and any company you ask us to add or check: you asked us for it, so we use your details to deliver it (the legal basis is contract).',
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
        'The spreadsheet and email service that holds the early access list',
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

/* /agents, linked by every agent at competitors and prospects ("Saw an Obsession agent?") and from every footer. For the
   company an agent visited: the agents are how Obsession collects what companies show signed-up customers, so this is
   the 1 page that explains them. What an agent is, that it's declared, what it does and never does, what it keeps, how
   to ask us anything or keep agents off a site. Who asked is never named without their OK. Never "AI customer". */
export const agentsPage: AgentsPage = {
  meta: {
    path: '/agents',
    title: 'Saw an Obsession agent? What it does and how to opt out',
    description:
      'An Obsession agent signs up, starts trials and asks for quotes the way any customer can, and says it’s an AI. What it keeps, and how to opt out.',
    /* The sub, then the contact in full: an assistant that quotes this answer away from the page still says where to
       write. Its first sentence is the "Obsession agent" term in the JSON-LD (lib/jsonld.ts). */
    answer: `An Obsession agent signs up, starts trials and asks for quotes the way any customer can, with its own inbox, phone number and browser. Any company can write to ${CONTACT_EMAIL} with a question about an agent, or to keep Obsession’s agents off its site.`,
    ogImage: '/og/agents.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Obsession agents', path: '/agents' },
    ],
  },

  pill: 'Saw an Obsession agent?',
  headline: 'An Obsession agent is a customer that says it’s an AI.',
  sub: 'An Obsession agent signs up, starts trials and asks for quotes the way any customer can, with its own inbox, phone number and browser. Write to us with any question about it, or to keep our agents off your site.',

  sections: [
    {
      id: 'what',
      heading: 'It collects what a company shows its signed-up customers.',
      lines: [
        `${SENTENCE} Its agents collect it: each one signs up, reads what arrives, starts trials, asks for quotes and asks the site’s chat, as any customer can, and keeps the account open for months.`,
        'Everything it keeps is dated and kept exactly as it arrived, so nobody has to take its word for what happened.',
      ],
    },
    {
      /* lines[0] defines "declared AI agent" in the JSON-LD (lib/jsonld.ts). */
      id: 'declared',
      heading: 'It never pretends to be a person.',
      lines: [
        'When it talks to a person, by chat, email or phone, it says it’s an AI agent from Obsession and links to this page.',
        'Who asked for the visit stays private unless they choose to be named.',
      ],
    },
    {
      id: 'never',
      heading: 'What no Obsession agent does, whoever asked for it.',
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
        'The pages, emails, texts and chat answers it receives, with their times and signatures. It never signs in to an account that isn’t its own, and sees nothing inside your systems.',
      ],
    },
    {
      id: 'opt-out',
      heading: '1 email keeps our agents off your site.',
      lines: [
        `Write to ${CONTACT_EMAIL} with your web address. We stop every agent there and keep them off it.`,
        'Unsubscribing its email address, or texting STOP to its number, works too, as it would for anyone.',
        'Ask us anything else as well: what an agent did on your site, and when. We name who asked only with their OK.',
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
        a: `Obsession did. Its agents say they’re AI when they talk to a person, link to this page, and never name who asked for the visit without their OK. Write to ${CONTACT_EMAIL} with the email address or number it used, and we tell you what it did and when.`,
      },
      {
        q: 'Is there a real company behind an AI agent on my checkout?',
        a: 'For an Obsession agent, yes: Obsession, which answers any question about it. It never uses fake payment details.',
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

/* The 404 page (dist/404.html, noindex). It carries the early access form, so the nav's call to action has somewhere to
   land, and a link to /agents for anyone who mistyped the link an agent gave them. */
export const notFoundPage: NotFoundPage = {
  meta: {
    path: '/404',
    title: 'Page not found · Obsession, the web behind the login',
    description:
      'There’s no page at this address. Obsession collects what companies show only to customers, by API or MCP.',
    answer: `There’s no page at this address on useobsession.com. ${SENTENCE}`,
  },
  headline: 'There’s no page at this address.',
  sub: 'The link may be old or mistyped. If an Obsession agent sent you here, start at useobsession.com/agents.',
  links: [
    { label: 'Home', to: '/' },
    { label: 'Recipes', to: '/recipes' },
    { label: 'Sample data', to: '/sample-output' },
    { label: 'Saw an Obsession agent?', to: '/agents' },
  ],
  capture: {
    kind: 'waitlist',
    source: '404',
    button: 'Request early access',
    interest: 'any',
  },
}

/* llms.txt: `summary` is the 1 line under the title (the blockquote); `intro` is the paragraph before the page list.
   Plain and complete for answer engines, in Home's story: the web behind the login, what's in it, how it's used (API,
   MCP, a table; Search and Insights), Watch for a company not covered, the recipes, where else the data lives, the red
   lines, the 1 real record and early access. The intro names every recipe: the prerender fails the build when a
   recipe's name is missing from it. */
export const llms: Llms = {
  summary: ENTITY,
  intro: [
    'Obsession is a data company for the web behind the login: what companies show only to customers. That means the emails and texts after a sign-up, basket or trial, with the time each arrived; trial plans and limits; member and signed-in prices beside public ones; quotes behind forms for finance, insurance and services; checkout codes, cancel offers and renewal notices; and what chat and support tell a customer. Each fact is dated, with its receipt: the raw email with its sender checked, or the page as captured, and a screenshot.',
    'Teams and AI agents look up any company through MCP, the API and SDKs (5 verbs: lookup, facts, evidence, index, notify), or in a table they already use: Clay, Google Sheets or a webhook. In the product, Search answers for 1 company, and the answer changes with the customer profile asking. Insights asks 1 question across a group of companies and answers with a report, 1 row per company.',
    'A company not covered yet is added when the user clicks Watch (index, in the API). Obsession’s agents sign up, start the trial or ask for the quote as the customer profile and country the user picks, keep the account open, and everything it is sent joins the index the day it arrives. What a company sends every new subscriber goes into the shared index, so its history is there on day 1. Who asked is never shown.',
    'Recipes are ready-made collections, each naming what it collects, from which companies, as which customer profile and where it lands. They cover other companies (competitor tracking, ad tracking, email and SMS tracking, price watch, trial teardown, prospect intelligence, account watch), your own company as a new customer meets it (store sign-up and checkout, ad landing check, speed to lead, partner checks, website audit, delivery monitoring, listings and AI answers), and the AI agents you run (support bot check, voice agent check, outbound agent check, sales agent check, vendor agent check, resolution check, AI disclosure check, drift watch).',
    'Search engines such as Google and Exa stop at the public page. Competitive intelligence tools such as Klue and Crayon keep what competitors publish. Email archives such as MailCharts, Milled and Panoramata keep newsletters for their own list of brands, and panels such as Competiscan and Comperemedia sell a fixed list behind a client login. Obsession covers any company you name, every step short of paying, by API. The comparison is at useobsession.com/compare.',
    `Every Obsession agent says it’s an AI when it talks to a person, never uses fake payment details, never gets round a CAPTCHA or a bot block, never clicks paid ads at volume, and keeps every receipt exactly as it arrived. Any company can write to ${CONTACT_EMAIL} to keep the agents off its site.`,
    'The sample data at useobsession.com/sample-output is a real record from September 2026: a UK skincare store, 4 test customers, every inbox watched for 48 hours. A £40 basket left at 02:57 on 22 September and a checkout left at 03:11 got no reminder.',
    'Obsession is in early access, onboarding a limited number of teams: API and MCP access, lookups of every company already covered, and up to 5 companies added for you.',
  ].join(' '),
}

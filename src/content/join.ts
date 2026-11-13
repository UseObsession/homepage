/* The early access form's words: the line under every form and the card that opens once the email is saved
   (components/CaptureForm, components/JoinCard, lib/join.ts). Since 9 Nov every form is early access, never a
   waitlist and never a free check: API and MCP access, lookups of every company already covered, and up to 5
   companies added for you, set up with the founders. A page's offer only changes the brands question and the thank
   you. The `free` words are what a form of kind 'mystery' or 'verify' shows; they say early access too.

   Offers, worked out from the form (lib/join.ts offerOf):
   - clients: an agency page.
   - store: a store page (a form of kind 'mystery').
   - agents: an AI agent page (a form of kind 'verify'), or an AI agent recipe's form.
   - own: a recipe that checks their own journeys.
   - companies: a recipe that watches other companies, and the marketing, sales and compare pages.
   - accounts: never a page's; the brands question for a sales team.
   - api: the developers' page.
   - any: everywhere else.
   - index, reindex: the store lookup (pages/Lookup), for a site we haven't indexed and one we have. Their card asks for
     the company's other sites, starting with the one looked up, and has a heading of its own (`head`).
   {list}, {first}, {email} and {n} are filled in. */

export type OfferId = 'clients' | 'store' | 'agents' | 'own' | 'companies' | 'accounts' | 'api' | 'any' | 'index' | 'reindex'

type Ask = { title: string; help: string; placeholder: string; add: string }
/* `none`: the thank you when no brands were named (else the shared words, join.done.none). `head`: the card's heading,
   where it isn't the early access list's (join.head.title). */
type Offer = { ask: Ask; micro: string; done: string; none?: string; head?: string; free?: { micro: string; help: string; done: string } }

export const offers: Record<OfferId, Offer> = {
  clients: {
    ask: {
      title: 'Which client stores should we add first?',
      help: 'Up to 5 stores you run or pitch, with the owner’s OK.',
      placeholder: 'client-store.com',
      add: 'Add another store',
    },
    micro: 'Onboarding a limited number of teams. Name up to 5 client stores to start with.',
    done: 'We’ll email {email} to set up your access, starting with {list}.',
    free: {
      micro: 'Onboarding a limited number of teams. Early access adds up to 5 client stores for you.',
      help: 'Up to 5 stores you run or pitch, with the owner’s OK. We add each one as a new customer and keep everything it is sent.',
      done: 'We’ll email {email} to set up your access, with {list} added for you.',
    },
  },
  store: {
    ask: {
      title: 'Which store should we add first?',
      help: 'Yours, or a client’s with their OK. Add competitors to compare, up to 5 in all.',
      placeholder: 'your-store.com',
      add: 'Add a competitor',
    },
    micro: 'Onboarding a limited number of teams. Name the store to start with.',
    done: 'We’ll email {email} to set up your access, starting with {list}.',
    free: {
      micro: 'Onboarding a limited number of teams. Early access adds up to 5 stores for you.',
      help: 'Yours, a competitor’s, or a client’s with their OK. We sign up and leave a basket as a new customer, and keep everything each store sends. Up to 5 in all.',
      done: 'We’ll email {email} to set up your access, with {list} added for you.',
    },
  },
  agents: {
    ask: {
      title: 'Which AI agent should we add first?',
      help: 'Its chat page, phone number or website. Yours, a competitor’s, or a client’s with their OK. Up to 5.',
      placeholder: 'Chat page, phone or website',
      add: 'Add another agent',
    },
    micro: 'Onboarding a limited number of teams. Name the AI agent to start with.',
    done: 'We’ll email {email} to set up your access, starting with {list}.',
    free: {
      micro: 'Onboarding a limited number of teams. Early access adds up to 5 AI agents for you.',
      help: 'Its chat page, phone number or website. Yours, a competitor’s, or a client’s with their OK. We ask it what customers ask and keep every answer, word for word. Up to 5.',
      done: 'We’ll email {email} to set up your access, with {list} added for you.',
    },
  },
  own: {
    ask: {
      title: 'Which site should we add first?',
      help: 'Yours, or a client’s with their OK. Add competitors to compare, up to 5 in all.',
      placeholder: 'your-site.com',
      add: 'Add a competitor',
    },
    micro: 'Onboarding a limited number of teams. Name the site to start with.',
    done: 'We’ll email {email} to set up your access, starting with {list}.',
  },
  companies: {
    ask: {
      title: 'Which companies should we look up first?',
      help: 'Competitors, prospects or accounts. Up to 5.',
      placeholder: 'competitor.com',
      add: 'Add a company',
    },
    micro: 'Onboarding a limited number of teams. Name up to 5 companies to look up first.',
    done: 'We’ll email {email} to set up your access, starting with {list}.',
  },
  /* A sales team, asked by who they are (lib/join askOf), never by a page. */
  accounts: {
    ask: {
      title: 'Which accounts or prospects should we watch first?',
      help: 'Up to 5. We collect what each one shows its customers.',
      placeholder: 'account.com',
      add: 'Add an account',
    },
    micro: 'Onboarding a limited number of teams. Name up to 5 accounts or prospects to start with.',
    done: 'We’ll email {email} to set up your access, starting with {list}.',
  },
  api: {
    ask: {
      title: 'Which companies should we look up first?',
      help: 'Up to 5. If one isn’t covered yet, we add it.',
      placeholder: 'company.com',
      add: 'Add a company',
    },
    micro: 'Onboarding a limited number of teams to the API and MCP.',
    done: 'We’ll email {email} to set up API access, with {list} ready.',
    none: 'We’ll email {email} to set up API access.',
  },
  any: {
    ask: {
      title: 'Which companies should we look up first?',
      help: 'Any website. If one isn’t covered yet, we add it. Up to 5.',
      placeholder: 'company.com',
      add: 'Add a company',
    },
    micro: 'Onboarding a limited number of teams.',
    done: 'We’ll email {email} to set up your access, starting with {list}.',
  },
  index: {
    head: 'Your site is on our list.',
    ask: {
      title: 'Which sites does your company run?',
      help: 'Up to 5, starting with the one you looked up. We index each one as a new customer would meet it.',
      placeholder: 'yourotherstore.com',
      add: 'Add another site',
    },
    micro: 'We use your email only for this site and the others you name.',
    done: 'We’ll email {email} as each one joins the index: {list}.',
  },
  reindex: {
    head: 'We’ll index your site again.',
    ask: {
      title: 'Which sites should we index again?',
      help: 'Up to 5, starting with the one you looked up. We sign up again as a new customer and keep what each one sends.',
      placeholder: 'yourotherstore.com',
      add: 'Add another site',
    },
    micro: 'We use your email only for this site and the others you name.',
    done: 'We’ll email {email} as each one is indexed again: {list}.',
  },
}

/* Who they are: the card's first question, a default from the page (lib/join roleOf). An agency says what kind. */
export type RoleId = 'brand' | 'agency' | 'marketing' | 'sales' | 'developer' | 'other'

export const roles: { id: RoleId; label: string; sheet: string }[] = [
  { id: 'brand', label: 'A brand or store', sheet: 'Brand' },
  { id: 'agency', label: 'An agency', sheet: 'Agency' },
  { id: 'marketing', label: 'Marketing, CRM or product team', sheet: 'Marketing' },
  { id: 'sales', label: 'Sales, pricing or intelligence team', sheet: 'Sales' },
  { id: 'developer', label: 'Developer or AI agent team', sheet: 'Developer' },
  { id: 'other', label: 'Something else', sheet: 'Something else' },
]

export const agencyTypes = ['Retention, email and SMS', 'CRO', 'Performance and paid media', 'Shopify build', 'Full service', 'Something else']

/* 1 optional tap that sizes the deal, under the answer that asks for it. Kept in the sheet's existing columns. */
export const sizes = {
  agency: { question: 'How many clients do you look after?', options: ['1 to 5', '6 to 20', '21 to 50', 'More than 50'] },
  sales: { question: 'How big is the sales team?', options: ['Just me', '2 to 10', '11 to 50', 'More than 50'] },
}

/* An agency's client stores, asked the way its work runs. */
export const clientAsks: Record<string, { title?: string; help: string }> = {
  'Retention, email and SMS': { help: 'Up to 5 stores you run or pitch, with the owner’s OK. We sign up as a new customer and keep every email and text.' },
  CRO: { help: 'Up to 5 stores you run or pitch, with the owner’s OK. We go from landing page to checkout as a new customer.' },
  'Performance and paid media': {
    title: 'Which client brands should we follow from ad to checkout?',
    help: 'Up to 5 brands you run ads for or pitch, with the owner’s OK. We click through as a new customer and see where each ad lands.',
  },
  'Shopify build': { help: 'Up to 5 stores you’ve built or are launching, with the owner’s OK. We sign up as a new customer after each change and keep what each one sends.' },
}

/* The recipes most people like them start with, shown first (never ticked for them): by agency type, else by role. */
export const suggested: Record<string, string[]> = {
  'agency:Retention, email and SMS': ['email-sms', 'mystery', 'competitor'],
  'agency:CRO': ['mystery', 'audit', 'adcheck'],
  'agency:Performance and paid media': ['adcheck', 'ads', 'competitor'],
  'agency:Shopify build': ['audit', 'delivery', 'partners'],
  'agency:Full service': ['mystery', 'email-sms', 'adcheck'],
  agency: ['mystery', 'email-sms', 'competitor'],
  brand: ['mystery', 'competitor', 'prices'],
  marketing: ['competitor', 'email-sms', 'ads'],
  sales: ['prospect', 'account-watch', 'speed'],
  developer: ['competitor', 'support-bot', 'prospect'],
}

export const join = {
  privacy: { text: 'We keep what you tell us to set up your access and email you about Obsession.', link: 'Privacy notice', to: '/privacy' },
  head: { title: 'You’re on the early access list.', step: (n: number, of: number) => `${n} of ${of}` },
  role: {
    title: 'What best describes you?',
    help: 'So the rest fits what you do.',
    agency: 'What kind of agency?',
    optional: 'Optional',
    errors: { role: 'Pick the closest.', agency: 'Pick the closest kind.' },
  },
  about: {
    title: 'Who should we set this up for?',
    name: { label: 'Your name', placeholder: 'First and last name' },
    company: { label: 'Company', placeholder: 'Company name' },
    /* The website label follows who they are. */
    site: {
      label: { brand: 'Store website', agency: 'Agency website', other: 'Company website' } as Record<string, string>,
      placeholder: 'company.com',
    },
    errors: {
      name: 'Enter your name.',
      company: 'Enter your company.',
      site: 'Enter your website.',
      siteBad: 'That doesn’t look like a web address. Check for a typo.',
    },
  },
  brands: {
    optional: 'Optional',
    remove: (n: number) => `Remove ${n}`,
    errors: {
      address: 'That doesn’t look like a web address. Check for a typo.',
      agent: 'That doesn’t look like a web address or a phone number. Check for a typo.',
    },
  },
  recipes: {
    title: 'What data do you want first?',
    suggested: 'Suggested for you',
    help: 'Pick any.',
    helpPicked: 'Pick any. We ticked the one you were reading.',
    error: 'Pick at least 1.',
  },
  useCase: {
    label: 'What do you want to look up, and why?',
    placeholder: 'Name the companies and the data you need.',
  },
  actions: { next: 'Continue', back: 'Back', finish: 'Finish', edit: 'Change your answers', resume: 'Finish setting up' },
  done: {
    title: (first: string) => (first ? `You’re in, ${first}.` : 'You’re in.'),
    /* No brands named: the line says when we'll write. */
    none: 'We’ll email {email} to set up your access.',
  },
  saved: { failed: 'Some answers didn’t save.', retry: 'Try again' },
  /* The thank you's list of what they told us. */
  sum: { you: 'You', site: 'Website', brands: 'To add', agents: 'AI agents', recipes: 'Data' },
  /* Another form on a page where the sign up already happened. */
  joined: 'You’re on the early access list as {email}.',
}

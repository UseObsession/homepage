/* The waitlist's words: the line under every form and the card that opens once the email is saved
   (components/CaptureForm, components/JoinCard, lib/join.ts). Every form is the waitlist. What a page offers on top
   (a free check of a store, 5 client stores or an AI agent) is its button, the line under it, the brands question
   and the thank you, so the reader always knows they joined the waitlist and what comes next.

   Offers, worked out from the form (lib/join.ts offerOf):
   - clients: an agency page. Free on a form that offers the check ("Check 5 stores free").
   - store: a free shop of their own store (a mystery shop form).
   - agents: a free check of an AI agent (a verify form), or an AI agent recipe's waitlist.
   - own: a recipe that checks their own journeys.
   - companies: a recipe that watches other companies, and the marketing, sales and compare pages.
   - accounts: never a page's; the brands question for a sales team.
   - api: the developers' page.
   - any: everywhere else.
   {list}, {first}, {email} and {n} are filled in. */

export type OfferId = 'clients' | 'store' | 'agents' | 'own' | 'companies' | 'accounts' | 'api' | 'any'

type Ask = { title: string; help: string; placeholder: string; add: string }
/* `none`: the thank you when no brands were named (else the shared words, join.done.none). */
type Offer = { ask: Ask; micro: string; done: string; none?: string; free?: { micro: string; help: string; done: string } }

export const offers: Record<OfferId, Offer> = {
  clients: {
    ask: {
      title: 'Which client stores should we check?',
      help: 'Up to 5 stores you run or pitch, with the owner’s OK.',
      placeholder: 'client-store.com',
      add: 'Add another store',
    },
    micro: 'Join the waitlist, then name up to 5 client stores to start with.',
    done: 'We’ll email {email} when your spot opens, starting with {list}.',
    free: {
      micro: 'You join the waitlist, then name up to 5 client stores. We check them free as a new customer and send what happened within 4 days, with proof.',
      help: 'Up to 5 stores you run or pitch, with the owner’s OK. We check them free as a new customer and send what happened within 4 days.',
      done: 'We’ll check {list} as a new customer and email {email} what happened within 4 days.',
    },
  },
  store: {
    ask: {
      title: 'Which store should we shop?',
      help: 'Yours, or a client’s with their OK. Add rivals to compare, up to 5 in all.',
      placeholder: 'your-store.com',
      add: 'Add a rival',
    },
    micro: 'Join the waitlist, then name the store to start with.',
    done: 'We’ll email {email} when your spot opens, starting with {list}.',
    free: {
      micro: 'You join the waitlist, then name your store. We shop it free as a new customer: 4 AI customers, 48 hours watched, your report within 4 days.',
      help: 'Yours, or a client’s with their OK. We shop it free with 4 AI customers and send your report within 4 days. Add rivals to compare, up to 5 in all.',
      done: 'We’ll shop {first} as a new customer and email {email} your report within 4 days.',
    },
  },
  agents: {
    ask: {
      title: 'Which AI agent should we check?',
      help: 'Its chat page, phone number or website. Yours, or a client’s with their OK. Up to 5.',
      placeholder: 'Chat page, phone or website',
      add: 'Add another agent',
    },
    micro: 'Join the waitlist, then name the AI agent to check first.',
    done: 'We’ll email {email} when your spot opens, starting with {list}.',
    free: {
      micro: 'You join the waitlist, then name your AI agent. We check it free: 3 test customers, 1 channel, your report within 4 days.',
      help: 'Its chat page, phone number or website. Yours, or a client’s with their OK. We check it free with 3 test customers and send your report within 4 days.',
      done: 'We’ll check {first} with 3 test customers and email {email} your report within 4 days.',
    },
  },
  own: {
    ask: {
      title: 'Which site should we check first?',
      help: 'Yours, or a client’s with their OK. Add rivals to compare, up to 5 in all.',
      placeholder: 'your-site.com',
      add: 'Add a rival',
    },
    micro: 'Join the waitlist, then name the site to check first.',
    done: 'We’ll email {email} when your spot opens, starting with {list}.',
  },
  companies: {
    ask: {
      title: 'Which companies should we watch first?',
      help: 'Rivals, prospects or accounts. Up to 5.',
      placeholder: 'rival.com',
      add: 'Add a company',
    },
    micro: 'Join the waitlist, then name up to 5 companies to watch first.',
    done: 'We’ll email {email} when your spot opens, starting with {list}.',
  },
  /* A sales team, asked by who they are (lib/join askOf), never by a page. */
  accounts: {
    ask: {
      title: 'Which accounts or prospects should we watch first?',
      help: 'Up to 5. We become their customer and show you what they do to theirs.',
      placeholder: 'account.com',
      add: 'Add an account',
    },
    micro: 'Join the waitlist, then name up to 5 accounts or prospects to watch first.',
    done: 'We’ll email {email} when your spot opens, starting with {list}.',
  },
  api: {
    ask: {
      title: 'Which companies should your agents be a customer of first?',
      help: 'Up to 5. They’re ready when your API access opens.',
      placeholder: 'company.com',
      add: 'Add a company',
    },
    micro: 'Join the waitlist for API and MCP access, then tell us what you’d build.',
    done: 'We’ll email {email} when API access opens, with {list} ready.',
    none: 'We’ll email {email} when API access opens.',
  },
  any: {
    ask: {
      title: 'Which brands should we check first?',
      help: 'Yours or your rivals’. Up to 5.',
      placeholder: 'brand.com',
      add: 'Add a brand',
    },
    micro: 'Join the waitlist, then name up to 5 brands to check first.',
    done: 'We’ll email {email} when your spot opens, starting with {list}.',
  },
}

/* Who they are: the card's first question, a default from the page (lib/join roleOf). An agency says what kind. */
export type RoleId = 'brand' | 'agency' | 'marketing' | 'sales' | 'developer' | 'other'

export const roles: { id: RoleId; label: string; sheet: string }[] = [
  { id: 'brand', label: 'A brand or store', sheet: 'Brand' },
  { id: 'agency', label: 'An agency', sheet: 'Agency' },
  { id: 'marketing', label: 'Marketing team', sheet: 'Marketing' },
  { id: 'sales', label: 'Sales team', sheet: 'Sales' },
  { id: 'developer', label: 'Developer', sheet: 'Developer' },
  { id: 'other', label: 'Something else', sheet: 'Something else' },
]

export const agencyTypes = ['Retention, email and SMS', 'CRO', 'Performance and paid media', 'Shopify build', 'Full service', 'Something else']

/* 1 optional tap that sizes the deal, under the answer that asks for it. Kept in the sheet's existing columns. */
export const sizes = {
  agency: { question: 'How many clients do you look after?', options: ['1 to 5', '6 to 20', '21 to 50', 'More than 50'] },
  sales: { question: 'How big is the sales team?', options: ['Just me', '2 to 10', '11 to 50', 'More than 50'] },
}

/* An agency's client stores, asked the way its work runs (the free check's promise stays when the page made one). */
export const clientAsks: Record<string, { title?: string; help: string }> = {
  'Retention, email and SMS': { help: 'Up to 5 stores you run or pitch, with the owner’s OK. We sign up as a new customer and keep every email and text.' },
  CRO: { help: 'Up to 5 stores you run or pitch, with the owner’s OK. We shop them as a new customer, from landing page to checkout.' },
  'Performance and paid media': {
    title: 'Which client brands should we follow from ad to checkout?',
    help: 'Up to 5 brands you run ads for or pitch, with the owner’s OK. We click through as a new customer and see where each ad lands.',
  },
  'Shopify build': { help: 'Up to 5 stores you’ve built or are launching, with the owner’s OK. We check them as a new customer after each change.' },
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
  privacy: { text: 'We keep what you tell us to set up your spot and email you about Obsession.', link: 'Privacy notice', to: '/privacy' },
  head: { title: 'You’re on the waitlist.', step: (n: number, of: number) => `${n} of ${of}` },
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
    title: 'Which recipes do you want first?',
    suggested: 'Suggested for you',
    help: 'Pick any.',
    helpPicked: 'Pick any. We ticked the one you were reading.',
    error: 'Pick at least 1 recipe.',
  },
  useCase: {
    label: 'Anything you’d love to test with Obsession?',
    placeholder: 'Say what you’d point it at, and what you’d want to know.',
  },
  actions: { next: 'Continue', back: 'Back', finish: 'Finish', edit: 'Change your answers', resume: 'Finish setting up' },
  done: {
    title: (first: string) => (first ? `You’re in, ${first}.` : 'You’re in.'),
    /* No brands named: the line says when we'll write. */
    none: 'We’ll email {email} when your spot opens.',
  },
  saved: { failed: 'Some answers didn’t save.', retry: 'Try again' },
  /* The thank you's list of what they told us. */
  sum: { you: 'You', site: 'Website', brands: 'To check', agents: 'AI agents', recipes: 'Recipes' },
  /* Another form on a page where the sign up already happened. */
  joined: 'You’re on the waitlist as {email}.',
}

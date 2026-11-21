/* The navigation's words and structure (components/Nav). Since 21 Nov it says what Home says: inboxes, phone numbers,
   browsers and sandboxes for AI agents through one API, plus recipes, ours or your own, with sample data as
   the second button and "Start building" as the call to action. Structure: _research/nav/NAV.md. The nav is on every page, so it reads the slim index of the recipes and
   worked examples (content/catalog.ts), never their words. */
import { catalog, type CatalogRecipe } from './catalog'
import type { Cta, ReaderId, RecipeGroup, RecipeId } from './types'
import { ways } from './ways'

export type NavPage = { label: string; to: string; line?: string }
export type NavReader = NavPage & { id: ReaderId; line: string }
export type NavRecipe = { id: RecipeId; label: string; to: string }
/* `more` is the group's own page, listed after its recipes (Check your AI agents: /verify). */
export type NavRecipeGroup = { name: RecipeGroup; items: NavRecipe[]; more?: NavPage }
/* A job in the Recipes menu: the name it shows (jobLabel), its promise in 1 line, where it leads, and 2 recipes that
   show it best. */
export type NavJob = { name: string; line: string; to: string; examples: NavRecipe[] }
/* A card in the Resources menu: who it is for (or what it is), its name, and what happened in 1 line. */
export type NavCard = NavPage & { line: string; kicker: string }

/* The 3 jobs, in the order the menu, the phone sheet, the footer and the Recipes index list them (COPY.md, "One
   taxonomy"): whose data it is. Other companies (competitors, prospects, accounts), your own company, and the AI
   agents you run. */
export const JOBS: RecipeGroup[] = ['Watch other companies', 'Check your own journeys', 'Check your AI agents']

/* Each job's anchor on /recipes (pages/Recipes gives each job's section this id). */
export const jobAnchor = (g: RecipeGroup) => g.toLowerCase().replace(/[^a-z]+/g, '-')

/* The name a job shows in the Recipes menu and on /recipes. The group value stays (recipes, anchors and the join card
   read it); since 9 Nov the AI agents job is the event log of what AI agents tell people, as /verify says. */
export const jobLabel = (g: RecipeGroup) => (g === 'Check your AI agents' ? 'What AI agents say' : g)

/* A job with a page of its own links to it after its recipes. */
const MORE: Partial<Record<RecipeGroup, NavPage>> = {
  'Check your AI agents': { label: 'See how it works', to: ways.verify.to },
}

const recipeLink = (r: Pick<CatalogRecipe, 'id' | 'name' | 'slug'>): NavRecipe => ({ id: r.id, label: r.name, to: `/blueprints/${r.slug}` })
const recipeById = Object.fromEntries(catalog.recipes.map((r) => [r.id, r])) as Record<RecipeId, CatalogRecipe>

/* Every recipe, by the job it does. Each recipe's job, name and address come from its own file (content/recipes/SLUG.ts),
   in the registry's order, so the footer, the Recipes index and every page agree. */
export const recipeGroups: NavRecipeGroup[] = JOBS.map((name) => ({
  name,
  items: catalog.recipes.filter((r) => r.group === name).map(recipeLink),
  ...(MORE[name] ? { more: MORE[name] } : {}),
}))

/* The Recipes menu never lists every recipe: each job gets its promise and the 2 recipes with the most pull. The
   featured card is the sample data. Check your AI agents leads to its own page, /verify, which lists its recipes; the
   other jobs lead to their section of /recipes. */
const JOB_MENU: Record<RecipeGroup, { line: string; examples: RecipeId[]; to?: string }> = {
  'Watch other companies': { line: 'Their emails, prices, trials and offers, after sign-up.', examples: ['competitor', 'prospect'] },
  'Check your own journeys': { line: 'Your own sign up, lead forms and emails, as a new user gets them.', examples: ['adcheck', 'speed'] },
  'Check your AI agents': {
    line: 'What support chats, voice lines and sales agents tell a persona, word for word.',
    examples: ['support-bot', 'voice-agent'],
    to: ways.verify.to,
  },
}

export const recipeJobs: NavJob[] = JOBS.map((name) => {
  const j = JOB_MENU[name]
  return {
    name: jobLabel(name),
    line: j.line,
    to: j.to ?? `/blueprints#${jobAnchor(name)}`,
    examples: j.examples.map((id) => recipeLink(recipeById[id])),
  }
})

/* The post the blog index leads with (content/blog: its featured post, else the newest). */
/* The menu's lead post (9 Nov): what competitors show anyone beside what only their customers see, the data company's
   own question. Falls back to the featured post. */
const MENU_LEAD = 'ecommerce-competitive-intelligence'
const blogLead = catalog.blogLive
  ? (catalog.posts.find((p) => p.slug === MENU_LEAD) ?? catalog.posts.find((p) => p.featured) ?? catalog.posts[0])
  : undefined

/* The bar's menus since 9 Nov (James, after Exa's): tool first. Products (the 3 ways to get the data, the API, the
   recipes) with the integrations under them; Solutions (use cases beside the teams and industries they serve);
   Resources (the proof and the reading, with the rest of the company in a side column); Developers as a plain link.
   Each row is a name, 1 line and an icon (components/Nav draws the icons). */
export type NavIcon =
  | 'search'
  | 'insights'
  | 'watch'
  | 'api'
  | 'recipes'
  | 'table'
  | 'database'
  | 'webhook'
  | 'target'
  | 'mail'
  | 'tag'
  | 'clock'
  | 'chat'
  | 'megaphone'
  | 'briefcase'
  | 'users'
  | 'bank'
  | 'software'
  | 'cart'
  | 'shield'
  | 'chart'
  | 'phone'
  | 'browser'
  | 'sandbox'
export type NavTool = NavPage & { line: string; icon: NavIcon }
export type NavColumn = { label: string; items: NavTool[] }

const menus = {
  products: {
    label: 'Products',
    button: 'Products menu',
    /* Since 21 Nov (James: one API for the pieces an agent needs, plus recipes): each piece's own page, then the recipes,
       the API and what each piece costs. The footer's Products column is this list. */
    items: [
      { label: 'Email', line: 'Inboxes your agents send and receive from', to: '/email', icon: 'mail' },
      { label: 'Phone', line: 'Numbers, texts and calls for agents', to: '/phone', icon: 'phone' },
      { label: 'Browser', line: 'A cloud browser that keeps its logins', to: '/browser', icon: 'browser' },
      { label: 'Personas', line: 'Every piece under one identity', to: '/personas', icon: 'users' },
      { label: 'Messaging', line: 'iMessage, WhatsApp, Slack and Telegram', to: '/messaging', icon: 'chat' },
      { label: 'Sandbox', line: 'A computer to run code when a task needs one', to: '/sandbox', icon: 'sandbox' },
      { label: 'Blueprints', line: 'Jobs ready to run, or your own, beside the pieces', to: '/blueprints', icon: 'recipes' },
      { label: 'API and MCP', line: 'One API for every piece, and MCP for your agent', to: '/developers', icon: 'api' },
      { label: 'Pricing', line: 'Each piece priced on its own', to: '/pricing', icon: 'tag' },
    ] satisfies NavTool[],
    integrations: {
      label: 'Integrations',
      items: [
        { label: 'Clay', line: 'Each event on the rows you have', to: '/use-cases/prospect-intelligence-with-clay', icon: 'table' },
        { label: 'Baserow', line: 'A new row creates an inbox and a number', to: '/developers#baserow', icon: 'table' },
        { label: 'Supabase', line: 'Every event in your own table', to: '/developers#supabase', icon: 'database' },
        { label: 'Webhooks and MCP', line: 'Every event from your event log, as it lands', to: '/developers#webhooks', icon: 'webhook' },
      ] satisfies NavTool[],
      all: { label: 'All integrations', to: '/developers#integrations' } satisfies NavPage,
    },
  },
  solutions: {
    label: 'Solutions',
    button: 'Solutions menu',
    columns: [
      {
        label: 'Use cases',
        items: [
          { label: 'Mystery shopping', line: 'Personas shop a store, and keep what follows', to: '/blueprints/mystery-shopper', icon: 'cart' },
          { label: 'QA on your own flows', line: 'Sign up to your product as a new user', to: '/blueprints/website-audit', icon: 'software' },
          { label: 'Competitor trials', line: 'Every email a rival’s trial sends', to: '/blueprints/trial-teardown', icon: 'clock' },
          { label: 'Lead response checks', line: 'Time the first email, text and call', to: '/blueprints/lead-leaks', icon: 'mail' },
          { label: 'Prospect audits', line: 'Shop a prospect’s store before the pitch', to: '/blueprints/prospect-intelligence', icon: 'target' },
          { label: 'Price watch', line: 'Member prices, every week', to: '/blueprints/price-watch', icon: 'tag' },
          { label: 'AI agent checks', line: 'What support bots and voice lines say', to: '/verify', icon: 'chat' },
          { label: 'The web behind the login', line: 'What companies show people only after sign up', to: '/use-cases/web-behind-the-login', icon: 'search' },
        ],
      },
      {
        label: 'Teams and industries',
        items: [
          { label: 'Marketing', line: 'A persona on every competitor’s list', to: '/marketing', icon: 'megaphone' },
          { label: 'Sales', line: 'What each account sends a new sign up', to: '/sales', icon: 'briefcase' },
          { label: 'Agencies and resellers', line: 'Sell our checks to clients under your brand', to: '/agencies', icon: 'users' },
          { label: 'Banks and fintechs', line: 'Apply as a persona, keep every step', to: '/use-cases/journey-checks-for-banks-and-fintechs', icon: 'bank' },
          { label: 'Online stores', line: 'The emails after every basket', to: '/use-cases/leak-checks-for-ecommerce-stores', icon: 'cart' },
          { label: 'B2B software', line: 'Trials, demos and onboarding, as a new user', to: '/use-cases/sales-intelligence-behind-the-login', icon: 'software' },
          { label: 'Compliance', line: 'Cancel, unsubscribe and STOP, recorded', to: '/use-cases/opt-out-and-cancel-checks-for-compliance-teams', icon: 'shield' },
          { label: 'Funds and analysts', line: 'Offers and prices, dated, every week', to: '/use-cases/consumer-promotions-data-for-funds', icon: 'chart' },
        ],
      },
    ] satisfies NavColumn[],
  },
  resources: {
    label: 'Resources',
    button: 'Resources menu',
    items: [
      { label: 'Sample data', line: 'One real store run, every event end to end', to: '/sample-output' },
      { label: 'Use cases', line: 'What each team looks up, and where it lands', to: '/use-cases' },
      ...(catalog.blogLive ? [{ label: 'Blog', line: 'Guides and research', to: '/blog' }] : []),
      { label: 'Compare', line: 'Every other source, and where it stops', to: '/compare' },
      { label: 'Glossary', line: 'Plain definitions of the words we use', to: '/glossary' },
    ] satisfies (NavPage & { line: string })[],
    more: {
      label: 'More',
      /* The lookup first (James, 13 Nov): a site's own entry in the index (content/pages/lookup.ts). The footer's
         Resources column ends with these first 2. */
      items: [
        { label: 'Look up your site', to: '/lookup' },
        { label: 'Every resource', to: '/resources' },
        { label: 'Saw an Obsession agent?', to: '/agents' },
        { label: 'Contact', to: `mailto:${catalog.contact}` },
        { label: 'Privacy', to: '/privacy' },
      ] satisfies NavPage[],
    },
  },
  developers: { label: 'Developers', to: '/developers' } satisfies NavPage,
}

export const nav = {
  home: 'Obsession home',
  skip: 'Skip to content',
  label: 'Main',
  menus,
  /* The readers, as plain links: who it is for comes first (COPY.md, "One taxonomy": 4 readers, by role). */
  readers: [
    { id: 'marketing', label: 'Marketing', to: '/marketing', line: 'A persona on every competitor’s list, keeping what they send.' },
    { id: 'sales', label: 'Sales', to: '/sales', line: 'What each account sends a new sign up.' },
    { id: 'agencies', label: 'Agencies', to: '/agencies', line: 'Sell our checks to your clients under your own brand.' },
    { id: 'developers', label: 'Developers', to: '/developers', line: 'Inboxes, numbers, browsers and sandboxes through one API.' },
  ] satisfies NavReader[],
  /* Where the readers fold into 1 menu, when the bar is too narrow for all 5 (Nav.css), and the phone sheet's question.
     `name` is the folded button's name for screen readers; it holds the word it shows. */
  readersMenu: { label: 'For', name: 'Who it’s for', ask: 'Who are you?' },
  recipes: {
    label: 'Blueprints',
    to: '/blueprints',
    button: 'Blueprints menu',
    all: { label: 'Browse all blueprints', to: '/blueprints' } satisfies NavPage,
    /* The featured card: the 1 real run, the sample data. */
    feature: {
      label: 'See one real run',
      line: 'A real store’s 4 sign-ups and baskets, and what it sent in the 48 hours after.',
      action: 'See sample data',
      to: '/sample-output',
    },
    run: { label: 'See a real run', to: '/sample-output' } satisfies NavPage,
    /* Check your AI agents' own page: the bar marks Recipes as current there too. */
    verify: ways.verify.to,
  },
  /* Resources: the proof. The 1 real run first, then the worked examples, then the blog's lead post, then the hub. */
  resources: {
    label: 'Resources',
    to: '/resources',
    button: 'Resources menu',
    run: {
      kicker: 'Sample data',
      label: 'One real store run',
      to: '/sample-output',
      line: 'We joined a real store 4 times. 1 left a basket, 1 left at checkout, and in 48 hours nobody wrote to either.',
      /* The real report's top band (public/report/page-1.jpg: the logo row, the headline, the first numbers), cut at 2x
         above its status tags, so it reads at a glance and brings no status colour into the nav. */
      image: {
        src: '/nav/report-peek.jpg',
        width: 168,
        height: 102,
        alt: 'The top of the September 2026 report on Brand G: 4 journeys, 2 gaps found',
      },
    },
    /* The worked examples by name only: each name already says who it is for, and 5 cards made the menu too tall
       (James, 23 Oct). `line` stays for the links that quote it (BlogPost). James sends these addresses to prospects:
       they always stay. */
    useCases: {
      label: 'Use cases',
      to: '/use-cases',
      items: catalog.studies.map(({ name, line, path }) => ({ label: name, to: path, line })) satisfies (NavPage & { line: string })[],
    },
    /* The blog while it has posts: the post the blog leads with (its hub and length, its title, the start of its dek),
       then every article. */
    blog: blogLead
      ? {
          label: 'Blog',
          lead: {
            kicker: `${blogLead.category} · ${blogLead.readingMinutes} min read`,
            label: blogLead.title,
            to: `/blog/${blogLead.slug}`,
            line: blogLead.dek,
          } satisfies NavCard,
          all: { label: 'Every article', to: '/blog' } satisfies NavPage,
        }
      : null,
    all: { label: 'Every resource', to: '/resources' } satisfies NavPage,
  },
  /* The header's call to action on every page. Since 21 Nov it is Home's: "Start building", to Home's early access
     form; each page's own form stays where it is. `bar` is what the bar itself shows: past 16 characters the button
     covers the logo on a 375 to 390px phone, and "Start building" is 14. */
  cta: { label: 'Start building', to: '/#join', bar: 'Start building' } satisfies Cta,
  /* The second button, before the call to action: in the bar where it fits (Nav.css), in the sheet otherwise. Since 9 Nov
     the sample data, not Star on GitHub (the key keeps its old name; components/Nav reads it). */
  github: { label: 'Sample data', to: '/sample-output' } satisfies Cta,
  menu: { open: 'Open menu', close: 'Close menu', sheet: 'Menu' },
  theme: { row: 'Theme', toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
}

/* The few pages whose header button differs from nav.cta ("Start building", to Home's form, on every other page). */
export const pageCtas: Record<string, Cta> = {
  /* On /lookup, the header's "Look up your site" goes to the page's own box. */
  '/lookup': { label: 'Look up your site', to: '#lookup', bar: 'Lookup your site' },
  /* A company asking about an agent that visited it writes to us: the page's own call to action, not early access. */
  '/agents': catalog.agentsCta,
  /* Home (21 Nov): the bar's button matches the hero's, to the page's own early access form. */
  '/': { label: 'Start building', to: '#join', bar: 'Start building' },
  /* The resellers page (21 Nov): the bar's button matches its forms' (early access), to its own form. */
  '/agencies': { label: 'Get early access', to: '#join', bar: 'Get early access' },
}

export function ctaFor(path: string): Cta {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return pageCtas[clean] ?? nav.cta
}

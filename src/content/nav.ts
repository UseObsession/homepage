/* The navigation's words and structure (components/Nav). Since 21 Nov it says what Home says: inboxes, phone numbers,
   browsers and sandboxes for AI agents through one API, plus recipes, ours or your own, with sample data as
   the second button and "Start free" as the call to action. Structure: _research/nav/NAV.md. The nav is on every page, so it reads the slim index of the recipes and
   worked examples (content/catalog.ts), never their words. */
import { catalog, type CatalogRecipe } from './catalog'
import type { Cta, ReaderId, RecipeGroup, RecipeId } from './types'
import { kitLinks, kitsPath, type KitId } from './kitPaths'
import { ways } from './ways'
import { blogLeadSlug } from './blogTopics'

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

/* The six types of blueprints (22 Nov call: the kits became these), in the order the menu, the phone sheet, the footer,
   the hub and the form's chips list them: content/kitPaths' order. A blueprint's group is its type. */
export const JOBS: RecipeGroup[] = ['Talk to customers', 'Test sign-up and agents', 'Build agent products', 'Work behind logins', 'Watch the market', 'Train and test agents', 'Buy, book and order']

/* Each job's anchor on /recipes (pages/Recipes gives each job's section this id). */
export const jobAnchor = (g: RecipeGroup) => g.toLowerCase().replace(/[^a-z]+/g, '-')

/* The name a type shows: its own name, as content/kitPaths gives it. */
export const jobLabel = (g: RecipeGroup) => g

/* A job with a page of its own links to it after its recipes. */
const MORE: Partial<Record<RecipeGroup, NavPage>> = {}

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
  'Talk to customers': { line: 'Missed calls texted back, reminders sent, every lead called.', examples: ['missed-call', 'reminders'], to: '/blueprints/talk-to-customers' },
  'Test sign-up and agents': { line: 'Your own sign-up, codes and emails, as a new user gets them.', examples: ['mystery', 'codes'], to: '/blueprints/test-sign-up-and-agents' },
  'Build agent products': { line: 'Starters for agents with their own inbox and iMessage line.', examples: ['inbox-agent', 'imessage'], to: '/blueprints/build-agent-products' },
  'Work behind logins': { line: 'Portals checked every morning, documents collected.', examples: ['prior-auth', 'loads'], to: '/blueprints/work-behind-logins' },
  'Watch the market': { line: 'Competitors’ emails, prices, trials and ads, dated.', examples: ['competitor', 'prices'], to: '/blueprints/watch-the-market' },
  'Train and test agents': { line: 'Your agent scored on real tasks, every night.', examples: ['eval', 'drift'], to: '/blueprints/train-and-test-agents' },
  'Buy, book and order': { line: 'Supplies reordered, trips booked, every receipt kept.', examples: ['reorder', 'travel'], to: '/blueprints/buy-book-and-order' },
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
/* The menu's lead post: the guide the blog index leads with (content/blogTopics.ts, 23 Nov 2026), the AI agent
   infrastructure stack. Falls back to the featured post. */
const MENU_LEAD = blogLeadSlug
const blogLead = catalog.blogLive
  ? (catalog.posts.find((p) => p.slug === MENU_LEAD) ?? catalog.posts.find((p) => p.featured) ?? catalog.posts[0])
  : undefined

/* The bar's menus since 9 Nov (James, after Exa's): tool first. Products (the 3 ways to get the data, the API, the
   recipes) with the integrations under them; Solutions (use cases beside the teams and industries they serve);
   Resources (the proof and the reading, with the rest of the company in a side column); Developers and, since 21 Nov
   (James), Pricing as plain links after the menus.
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
  | 'check'
  | 'key'
  | 'flask'
export type NavTool = NavPage & { line: string; icon: NavIcon }
export type NavColumn = { label: string; items: NavTool[] }

/* Each kit's icon in the menus (components/Nav ICONS). */
const KIT_ICONS: Record<KitId, NavIcon> = { talk: 'chat', test: 'check', build: 'api', portals: 'key', watch: 'watch', train: 'flask', buy: 'cart' }

/* The bar's menus, rebuilt 22 Nov 2026 (Seun: "cleaner ... right now it feels like a dump"): Products holds the 6 pieces
   with a short line each, then the 2 ways in beside them (Blueprints for teams who don't code, the API and MCP for
   developers) and a slim row to the prices. Solutions holds the kits (each job agents do) and the teams who use them,
   by name only. The integrations left the menu for /developers and the footer. */
const kitTools: NavTool[] = kitLinks.map((k) => ({ label: k.name, line: k.line, to: k.path, icon: KIT_ICONS[k.id] }))
const teams: NavPage[] = [
  { label: 'Founders', to: '/founders' },
  { label: 'Freelancers', to: '/use-cases/ai-agents-for-freelancers' },
  { label: 'Sales and RevOps', to: '/sales' },
  { label: 'Marketing', to: '/marketing' },
  { label: 'Support and AI operations', to: '/verify' },
  { label: 'Agencies', to: '/agencies' },
  { label: 'Online stores', to: '/use-cases/leak-checks-for-ecommerce-stores' },
  { label: 'Compliance', to: '/use-cases/opt-out-and-cancel-checks-for-compliance-teams' },
]

const menus = {
  products: {
    label: 'Products',
    button: 'Products menu',
    /* The pieces, in the founders' order (piecePaths.ts pieceOrder). */
    piecesLabel: 'Pieces',
    items: [
      { label: 'Email', line: 'Inboxes that send and receive', to: '/email', icon: 'mail' },
      { label: 'Personas', line: 'Every piece, one identity', to: '/personas', icon: 'users' },
      { label: 'Browser', line: 'Stays signed in for weeks', to: '/browser', icon: 'browser' },
      { label: 'Phone', line: 'Numbers for texts and calls', to: '/phone', icon: 'phone' },
      { label: 'Sandbox', line: 'Runs code when a task needs it', to: '/sandbox', icon: 'sandbox' },
      { label: 'Messaging', line: 'iMessage, WhatsApp, Slack, Telegram', to: '/messaging', icon: 'chat' },
    ] satisfies NavTool[],
    /* The 2 ways in, beside the pieces: build on the API, or pick a job Obsession runs. */
    waysLabel: 'Build or pick',
    ways: [
      { label: 'API and MCP', line: 'One key for every piece', to: '/developers', icon: 'api' },
      { label: 'Blueprints', line: 'Jobs Obsession runs for you', to: '/blueprints', icon: 'recipes' },
    ] satisfies NavTool[],
    prices: [
      { label: 'Pricing', to: '/pricing' },
      { label: 'Every rate', to: '/pricing/rates' },
    ] satisfies NavPage[],
    /* Kept for the footer's Integrations column (content/footer.ts) and /developers; no longer in the menu. */
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
    /* The six types of blueprints, one per job AI agents do (22 Nov call: no "kits"). */
    kitsLabel: 'Blueprints by job',
    kits: kitTools,
    kitsAll: { label: 'Every blueprint', to: kitsPath } satisfies NavPage,
    teamsLabel: 'By team',
    teams,
    /* The range pages (23 Nov 2026, Seun: "better use case ... that capture the generalism ... individuals freelancers
       founders departments industries", then "where is the saas and software use case financial use case healthcare use
       case freelancer use case professional services use case"): industries first, then sizes from one freelancer to an
       enterprise; the single-job pages are on /use-cases. */
    useCasesLabel: 'Use cases',
    useCases: [
      { label: 'Startups', to: '/use-cases/ai-agents-for-startups' },
      { label: 'SaaS and software', to: '/use-cases/ai-agents-for-saas' },
      { label: 'Financial services', to: '/use-cases/ai-agents-for-financial-services' },
      { label: 'Healthcare', to: '/use-cases/healthcare-ai-agents' },
      { label: 'Professional services', to: '/use-cases/ai-agents-for-professional-services' },
      { label: 'Agent platforms', to: '/use-cases/ai-agent-platforms' },
      { label: 'Enterprise', to: '/use-cases/ai-agents-for-enterprise' },
    ] satisfies NavPage[],
    useCasesAll: { label: 'Every use case', to: '/use-cases' } satisfies NavPage,
    /* The 2 columns as the footer and the phone sheet list them. */
    columns: [
      { label: 'Blueprints by job', items: kitTools },
      { label: 'By team', items: teams },
    ] as { label: string; items: NavPage[] }[],
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
  /* Beside Developers since 23 Nov 2026: the front door for everyone who doesn't write code. Named "For teams" that
     morning, then "No code" the same evening (Seun: "should we use team for the no code page and does it capture that
     individual angle"): the page serves a freelancer or founder as much as a team, "No code" and "Developers" read as
     the two ways in, and the label matches the address and the searched words. */
  noCode: { label: 'No code', to: '/no-code' } satisfies NavPage,
  pricing: { label: 'Pricing', to: '/pricing' } satisfies NavPage,
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
    all: { label: 'Browse blueprints', to: '/blueprints' } satisfies NavPage,
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
            kicker: `${blogLead.topic} · ${blogLead.readingMinutes} min read`,
            label: blogLead.title,
            to: `/blog/${blogLead.slug}`,
            line: blogLead.dek,
          } satisfies NavCard,
          all: { label: 'Every article', to: '/blog' } satisfies NavPage,
        }
      : null,
    all: { label: 'Every resource', to: '/resources' } satisfies NavPage,
  },
  /* The header's call to action on every page. Since 23 Nov it is "Start free", to Home's sign-up
     form; each page's own form stays where it is. `bar` is what the bar itself shows: past 16 characters the button
     covers the logo on a 375 to 390px phone; "Start free" is 10. */
  cta: { label: 'Start free', to: '/#join', bar: 'Start free' } satisfies Cta,
  /* The second button, before the call to action: in the bar where it fits (Nav.css), in the sheet otherwise. Since 9 Nov
     the sample data, not Star on GitHub (the key keeps its old name; components/Nav reads it). */
  github: { label: 'Blueprints', to: '/blueprints' } satisfies Cta,
  menu: { open: 'Open menu', close: 'Close menu', sheet: 'Menu' },
  theme: { row: 'Theme', toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
}

/* The few pages whose header button differs from nav.cta ("Start free", to Home's form, on every other page). */
export const pageCtas: Record<string, Cta> = {
  /* On /lookup, the header's "Look up your site" goes to the page's own box. */
  '/lookup': { label: 'Look up your site', to: '#lookup', bar: 'Lookup your site' },
  /* A company asking about an agent that visited it writes to us: the page's own call to action, not early access. */
  '/agents': catalog.agentsCta,
  /* Home (21 Nov): the bar's button matches the hero's, to the page's own early access form. */
  '/': { label: 'Start free', to: '#join', bar: 'Start free' },
  /* The resellers page (21 Nov): the bar's button matches its forms' (early access), to its own form. */
  '/agencies': { label: 'Start free', to: '#join', bar: 'Start free' },
}

export function ctaFor(path: string): Cta {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return pageCtas[clean] ?? nav.cta
}

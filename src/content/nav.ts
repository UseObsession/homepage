/* The navigation's words and structure (components/Nav). Copy rules: docs/REBUILD.md, "Copy". Structure: section 7,
   and the spec in the workspace, _research/nav/NAV.md. The nav is on every page, so it reads the slim index of the
   recipes and worked examples (content/catalog.ts), never their words. */
import { catalog, type CatalogRecipe } from './catalog'
import type { Capture, Cta, ReaderId, RecipeGroup, RecipeId } from './types'
import { ways } from './ways'

export type NavPage = { label: string; to: string; line?: string }
export type NavReader = NavPage & { id: ReaderId; line: string }
export type NavRecipe = { id: RecipeId; label: string; to: string }
/* `more` is the group's own page, listed after its recipes (Check your AI agents: /verify). */
export type NavRecipeGroup = { name: RecipeGroup; items: NavRecipe[]; more?: NavPage }
/* A job in the Recipes menu: its promise in 1 line, where it leads, and 2 recipes that show it best. */
export type NavJob = { name: RecipeGroup; line: string; to: string; examples: NavRecipe[] }
/* A card in the Resources menu: who it is for (or what it is), its name, and what happened in 1 line. */
export type NavCard = NavPage & { line: string; kicker: string }

/* The 3 jobs, in the order the menu, the phone sheet, the footer and the Recipes index list them (COPY.md, "One
   taxonomy"): who the customer agent is a customer of. Other companies (rivals, prospects, accounts), your own company,
   and the AI agents you run. */
export const JOBS: RecipeGroup[] = ['Watch other companies', 'Check your own journeys', 'Check your AI agents']

/* Each job's anchor on /recipes (pages/Recipes gives each job's section this id). */
export const jobAnchor = (g: RecipeGroup) => g.toLowerCase().replace(/[^a-z]+/g, '-')

/* A job with a page of its own links to it after its recipes. */
const MORE: Partial<Record<RecipeGroup, NavPage>> = {
  'Check your AI agents': { label: 'See how it works', to: ways.verify.to },
}

const recipeLink = (r: Pick<CatalogRecipe, 'id' | 'name' | 'slug'>): NavRecipe => ({ id: r.id, label: r.name, to: `/recipes/${r.slug}` })
const recipeById = Object.fromEntries(catalog.recipes.map((r) => [r.id, r])) as Record<RecipeId, CatalogRecipe>

/* Every recipe, by the job it does. Each recipe's job, name and address come from its own file (content/recipes/SLUG.ts),
   in the registry's order, so the footer, the Recipes index and every page agree. */
export const recipeGroups: NavRecipeGroup[] = JOBS.map((name) => ({
  name,
  items: catalog.recipes.filter((r) => r.group === name).map(recipeLink),
  ...(MORE[name] ? { more: MORE[name] } : {}),
}))

/* The Recipes menu never lists every recipe: each job gets its promise and the 2 recipes with the most pull (the agency
   beachhead first: Prospect intelligence). Mystery shopper is the featured card, so its job shows 2 others. Check your
   AI agents leads to its own page, /verify, which lists its recipes; the other 5 lead to their section of /recipes. */
const JOB_MENU: Record<RecipeGroup, { line: string; examples: RecipeId[]; to?: string }> = {
  'Watch other companies': { line: 'Every email, ad, price and trial, as their customer.', examples: ['competitor', 'prospect'] },
  'Check your own journeys': { line: 'Find the break before a customer does.', examples: ['adcheck', 'speed'] },
  'Check your AI agents': {
    line: 'AI customers check the AI agents you run.',
    examples: ['support-bot', 'voice-agent'],
    to: ways.verify.to,
  },
}

export const recipeJobs: NavJob[] = JOBS.map((name) => {
  const j = JOB_MENU[name]
  return {
    name,
    line: j.line,
    to: j.to ?? `/recipes#${jobAnchor(name)}`,
    examples: j.examples.map((id) => recipeLink(recipeById[id])),
  }
})

/* The post the blog index leads with (content/blog: its featured post, else the newest). */
const blogLead = catalog.blogLive ? (catalog.posts.find((p) => p.featured) ?? catalog.posts[0]) : undefined

export const nav = {
  home: 'Obsession home',
  skip: 'Skip to content',
  label: 'Main',
  /* The readers, as plain links: who it is for comes first (COPY.md, "One taxonomy": 4 readers, by role). */
  readers: [
    { id: 'marketing', label: 'Marketing', to: '/marketing', line: 'Every competitor ad, email and offer, seen as their customer.' },
    { id: 'sales', label: 'Sales', to: '/sales', line: 'Know what each account does to its customers.' },
    { id: 'agencies', label: 'Agencies', to: '/agencies', line: 'Every client and prospect, checked as a customer.' },
    { id: 'developers', label: 'Developers', to: '/developers', line: 'A customer at every company, for your agents.' },
  ] satisfies NavReader[],
  /* Where the readers fold into 1 menu, when the bar is too narrow for all 5 (Nav.css), and the phone sheet's question.
     `name` is the folded button's name for screen readers; it holds the word it shows. */
  readersMenu: { label: 'For', name: 'Who it’s for', ask: 'Who are you?' },
  recipes: {
    label: 'Recipes',
    to: '/recipes',
    button: 'Recipes menu',
    all: { label: 'Browse all recipes', to: '/recipes' } satisfies NavPage,
    /* The featured card: the free first report, then the 1 real run. */
    feature: {
      label: 'Your first mystery shop is free',
      line: 'AI customers shop your store, or a client’s with their OK. The report comes within 4 days.',
      action: 'Get my free report',
      to: '/recipes/mystery-shopper',
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
      kicker: 'Sample output',
      label: 'The September store check',
      to: '/sample-output',
      line: '4 test customers shopped a real store. 1 left a basket, 1 left at checkout, and in 48 hours nobody wrote to either.',
      /* The real report's top band (public/report/page-1.jpg: the logo row, the headline, the first numbers), cut at 2x
         above its status tags, so it reads at a glance and brings no status colour into the nav. */
      image: {
        src: '/nav/report-peek.jpg',
        width: 168,
        height: 102,
        alt: 'The top of the September 2026 store mystery shop report on Brand G: 4 journeys shopped, 2 gaps found',
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
  /* The page's call to action. Pages without their own use this one. */
  cta: { label: 'Join the waitlist', to: '#join' } satisfies Cta,
  /* The open source engine, before the call to action: in the bar where it fits (Nav.css), in the sheet otherwise. */
  github: { label: 'Star on GitHub', to: 'https://github.com/UseObsession' } satisfies Cta,
  menu: { open: 'Open menu', close: 'Close menu', sheet: 'Menu' },
  theme: { row: 'Theme', toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
}

/* The bar's button is never much wider than "Join the waitlist" (135px; the widest, "Get early access", 141), so the
   5 readers keep their place in the bar from 1012 up on every page and the button stays on a 384px phone (Nav.css,
   measured). A page whose own button says more keeps its words in its hero, its final form and the phone sheet; the
   bar says the same offer in fewer words. "Get my free report" measures 152px, so the bar says "Get free report". */
const BAR_WORDS: Record<string, string> = {
  'Get early access for my team': 'Get early access',
  'Get one for your store': 'Get free report',
  'Get my free report': 'Get free report',
  /* The leak checks use case: 5 stores checked free, prospects or clients (about the width of "Get free report"). */
  'Check 5 stores free': 'Check stores free',
  /* The ecommerce stores use case: the free check of the reader's own store. */
  'Check my store free': 'Check my store',
  /* The CRO agencies use case: 5 brands checked free, 3 to pitch and 2 clients. */
  'Check 5 brands free': 'Check brands free',
}
/* The free check of an AI agent (/verify and its recipes: "Check my support bot free" and the rest). */
const VERIFY_BAR = 'Check mine free'

export function barCta(cta: Cta, kind?: Capture['kind']): Cta {
  const bar = BAR_WORDS[cta.label] ?? (kind === 'verify' ? VERIFY_BAR : undefined)
  return bar && bar !== cta.label ? { ...cta, bar } : cta
}

/* Each page's call to action in the nav (docs/REBUILD.md, "Calls to action"). Each goes to the page's own form.
   Home, the audience pages and Developers take theirs from their own hero capture (App.tsx), so only the others are here. */
export const pageCtas: Record<string, Cta> = {
  '/recipes/mystery-shopper': barCta({ label: 'Get my free report', to: '#join' }),
  /* Sample output's form sits at #get-one (content/sample.ts). An anchor a page lacks falls back to its #join. */
  '/sample-output': barCta({ label: 'Get one for your store', to: '#get-one' }),
  /* The leak checks use case: 5 stores checked free, prospects or clients, and the waitlist, in its final form. */
  '/use-cases/leak-checks-for-retention-agencies': barCta({ label: 'Check 5 stores free', to: '#join' }),
  /* The ecommerce stores use case: the free check of the reader's own store, and the waitlist, in its final form. */
  '/use-cases/leak-checks-for-ecommerce-stores': barCta({ label: 'Check my store free', to: '#join' }),
  /* The CRO agencies use case: 5 brands checked free, 3 to pitch and 2 clients, and the waitlist, in its final form. */
  '/use-cases/funnel-qa-for-cro-agencies': barCta({ label: 'Check 5 brands free', to: '#join' }),
  /* A company asking about an agent that visited it writes to us: the page's own call to action, not the waitlist. */
  '/agents': catalog.agentsCta,
}

export function ctaFor(path: string): Cta {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return pageCtas[clean] ?? nav.cta
}

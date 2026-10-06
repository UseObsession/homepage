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

/* The 6 jobs, in the order the menu, the phone sheet, the footer and the Recipes index list them. Check your AI agents
   is the 4th way in (content/ways.ts), and its recipes are a job of their own. */
export const JOBS: RecipeGroup[] = [
  'Win customers',
  'Keep and grow customers',
  'Watch rivals',
  'Check your own journeys',
  'Get paid and save',
  'Check your AI agents',
]

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
  'Win customers': { line: 'Prove the gap before you pitch.', examples: ['prospect', 'quotes'] },
  'Keep and grow customers': { line: 'See churn and growth coming.', examples: ['account-watch', 'saves'] },
  'Watch rivals': { line: 'Every rival move, as it lands.', examples: ['competitor', 'prices'] },
  'Check your own journeys': { line: 'Catch every break before a customer does.', examples: ['speed', 'checkout'] },
  'Get paid and save': { line: 'Get paid sooner and hold every price.', examples: ['get-paid', 'supplier-quotes'] },
  'Check your AI agents': {
    line: 'Declared test customers check the AI agents you run.',
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

/* Who each worked example is for (content/usecases). James sends these addresses to prospects: they always stay. */
const STUDY_FOR: Record<string, string> = {
  '/use-cases/prospect-intelligence-with-clay': 'For outbound agencies',
  '/use-cases/member-prices-for-price-intelligence': 'For price intelligence firms',
  '/use-cases/mystery-shopping-for-ecommerce-agencies': 'For ecommerce agencies',
}

export const nav = {
  home: 'Obsession home',
  skip: 'Skip to content',
  label: 'Main',
  /* The readers, as plain links: who it is for comes first. Agencies are the beachhead. */
  readers: [
    { id: 'agencies', label: 'Agencies', to: '/agencies', line: 'Every client checked. Every pitch proven.' },
    { id: 'founders', label: 'Founders', to: '/founders', line: 'Leads with a proven gap. QA on every release.' },
    { id: 'sales', label: 'Sales', to: '/sales', line: 'Know each account as its customers do.' },
    { id: 'marketing', label: 'Marketing', to: '/marketing', line: 'Every ad, launch and rival, seen as a customer.' },
    { id: 'developers', label: 'Developers', to: '/developers', line: 'Build on the same agents in your own code.' },
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
      line: 'Declared AI customers shop your store, or a client’s with their OK. The report comes within 4 days.',
      action: 'Get my free report',
      to: '/recipes/mystery-shopper',
    },
    run: { label: 'See a real run', to: '/sample-output' } satisfies NavPage,
    /* Check your AI agents' own page: the bar marks Recipes as current there too. */
    verify: ways.verify.to,
  },
  /* Resources: the proof. The 1 real run first, then the worked examples, then 1 quiet way to the hub. */
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
      image: { src: '/nav/report-peek.jpg', width: 168, height: 102 },
    },
    useCases: {
      label: 'Use cases',
      to: '/use-cases',
      items: catalog.studies.map(({ name, line, path }) => ({
        kicker: STUDY_FOR[path] ?? 'Use case',
        label: name,
        to: path,
        line,
      })) satisfies NavCard[],
    },
    all: { label: 'Every resource', to: '/resources' } satisfies NavPage,
  },
  /* The page's call to action. Pages without their own use this one. */
  cta: { label: 'Join the waitlist', to: '#join' } satisfies Cta,
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
  /* The ecommerce agencies' use case: 5 of their clients' stores audited free (the same width as "Get free report"). */
  'Get my free audits': 'Get free audits',
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
  /* The ecommerce agencies' use case: the free audits of 5 clients' stores, and the waitlist, in its final form. */
  '/use-cases/mystery-shopping-for-ecommerce-agencies': barCta({ label: 'Get my free audits', to: '#join' }),
  /* A company asking about an agent that visited it writes to us: the page's own call to action, not the waitlist. */
  '/agents': catalog.agentsCta,
}

export function ctaFor(path: string): Cta {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return pageCtas[clean] ?? nav.cta
}

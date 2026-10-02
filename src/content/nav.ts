/* The navigation's words and structure (components/Nav). Copy rules: docs/REBUILD.md, "Copy". Structure: section 7. */
import { recipes, studies } from './registry'
import { agentsPage } from './site'
import type { Cta, RecipeGroup, RecipeId } from './types'

export type NavPage = { label: string; to: string; line?: string }
export type NavRecipe = { id: RecipeId; label: string; to: string }
export type NavRecipeGroup = { name: RecipeGroup; items: NavRecipe[] }

/* The 5 jobs, in the order the menu, the phone sheet and the footer list them. */
const JOBS: RecipeGroup[] = ['Win customers', 'Keep customers', 'Watch rivals', 'Check your own journeys', 'Get paid and save']

/* Every recipe, by the job it does. Each recipe's job, name and address come from its own file (content/recipes/SLUG.ts),
   in the registry's order, so the menu, the phone sheet, the footer, the Recipes index and every page agree. */
export const recipeGroups: NavRecipeGroup[] = JOBS.map((name) => ({
  name,
  items: recipes.filter((r) => r.group === name).map((r) => ({ id: r.id, label: r.name, to: `/recipes/${r.slug}` })),
}))

export const nav = {
  home: 'Obsession home',
  skip: 'Skip to content',
  label: 'Main',
  solutions: {
    label: 'Solutions',
    items: [
      { label: 'Agencies', to: '/agencies', line: 'Every client checked. Every pitch proven.' },
      { label: 'Founders', to: '/founders', line: 'Leads with a proven gap. QA on every release.' },
      { label: 'Sales', to: '/sales', line: 'Know each account as its customers do.' },
      { label: 'Marketing', to: '/marketing', line: 'Rival emails, ads and prices, seen as a customer.' },
    ] satisfies NavPage[],
  },
  recipes: {
    label: 'Recipes',
    all: { label: 'All recipes', to: '/recipes' } satisfies NavPage,
    /* The desktop menu lays the 5 jobs out in 3 columns, in reading order: 8, 5 and 8 recipes. */
    columns: [['Win customers', 'Keep customers'], ['Watch rivals'], ['Check your own journeys', 'Get paid and save']] satisfies RecipeGroup[][],
  },
  /* Resources: the worked examples (content/usecases, which James sends to prospects, so they always stay reachable),
     then the blog and the 1 real run. */
  resources: {
    label: 'Resources',
    useCases: {
      label: 'Use cases',
      all: { label: 'All use cases', to: '/use-cases' } satisfies NavPage,
      items: studies.map(({ name, line, meta }) => ({ label: name, to: meta.path, line })) satisfies NavPage[],
    },
    items: [
      { label: 'Blog', to: '/blog', line: 'Guides to the work agents do as a customer.' },
      { label: 'Sample output', to: '/sample-output', line: 'A real store check, in every format it arrives in.' },
    ] satisfies NavPage[],
    all: { label: 'All resources', to: '/resources' } satisfies NavPage,
  },
  /* At most 4 links in the bar: Solutions, Recipes and Resources open menus; Developers is a page. */
  links: [{ label: 'Developers', to: '/developers' }] satisfies NavPage[],
  /* The page's call to action. Pages without their own use this one. */
  cta: { label: 'Join the waitlist', to: '#join' } satisfies Cta,
  menu: { open: 'Open menu', close: 'Close menu', sheet: 'Menu' },
  theme: { row: 'Theme', toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
}

/* Each page's call to action in the nav (docs/REBUILD.md, "Calls to action"). Each goes to the page's own form.
   Home, the audience pages and Developers take theirs from their own hero capture (App.tsx), so only the others are here. */
export const pageCtas: Record<string, Cta> = {
  '/recipes/mystery-shopper': { label: 'Get my free report', to: '#join' },
  /* Sample output's form sits at #get-one (content/sample.ts). An anchor a page lacks falls back to its #join. */
  '/sample-output': { label: 'Get one for your store', to: '#get-one' },
  /* A company asking about an agent that visited it writes to us: the page's own call to action, not the waitlist. */
  '/agents': agentsPage.contact.cta,
}

export function ctaFor(path: string): Cta {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return pageCtas[clean] ?? nav.cta
}

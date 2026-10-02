/* The navigation's words and structure (components/Nav). Copy rules: docs/REBUILD.md, "Copy". Structure: section 7. */
import type { Cta, RecipeGroup, RecipeId } from './types'

export type NavPage = { label: string; to: string; line?: string }
export type NavRecipe = { id: RecipeId; label: string; to: string }
export type NavRecipeGroup = { name: RecipeGroup; items: NavRecipe[] }

/* Every recipe, by the job it does. The order here is the order in the menu, the phone sheet and the footer. */
export const recipeGroups: NavRecipeGroup[] = [
  {
    name: 'Win customers',
    items: [
      { id: 'prospect', label: 'Prospect intelligence', to: '/recipes/prospect-intelligence' },
      { id: 'speed', label: 'Speed to lead', to: '/recipes/speed-to-lead' },
      { id: 'listings', label: 'Listings and AI answers', to: '/recipes/listings-ai-answers' },
    ],
  },
  {
    name: 'Keep customers',
    items: [
      { id: 'account-watch', label: 'Account watch', to: '/recipes/account-watch' },
      { id: 'business-case', label: 'Business case', to: '/recipes/business-case' },
    ],
  },
  {
    name: 'Watch rivals',
    items: [
      { id: 'competitor', label: 'Competitor tracking', to: '/recipes/competitor-tracking' },
      { id: 'prices', label: 'Price and promotion watch', to: '/recipes/price-watch' },
      { id: 'ads', label: 'Ad tracking', to: '/recipes/ad-tracking' },
      { id: 'email-sms', label: 'Email and SMS tracking', to: '/recipes/email-sms-tracking' },
      { id: 'trial', label: 'Trial teardown', to: '/recipes/trial-teardown' },
    ],
  },
  {
    name: 'Check your own journeys',
    items: [
      { id: 'mystery', label: 'Mystery shopper', to: '/recipes/mystery-shopper' },
      { id: 'audit', label: 'Website audit', to: '/recipes/website-audit' },
      { id: 'delivery', label: 'Delivery monitoring', to: '/recipes/delivery-monitoring' },
    ],
  },
  {
    name: 'Get paid and save',
    items: [
      { id: 'get-paid', label: 'Get paid', to: '/recipes/get-paid' },
      { id: 'supplier-quotes', label: 'Supplier quotes', to: '/recipes/supplier-quotes' },
    ],
  },
]

/* The recipe with this /recipes/SLUG, for presets such as the waitlist's interest. */
export function recipeAt(path: string): NavRecipe | undefined {
  for (const g of recipeGroups) for (const r of g.items) if (r.to === path) return r
  return undefined
}

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
      { label: 'Marketing', to: '/marketing', line: 'Rival emails, ads and prices, as customers see them.' },
    ] satisfies NavPage[],
  },
  recipes: {
    label: 'Recipes',
    all: { label: 'All recipes', to: '/recipes' } satisfies NavPage,
    /* The desktop menu lays the groups out in 3 columns of 5 recipes. */
    columns: [['Win customers', 'Keep customers'], ['Watch rivals'], ['Check your own journeys', 'Get paid and save']] satisfies RecipeGroup[][],
  },
  links: [
    { label: 'Developers', to: '/developers' },
    { label: 'Sample output', to: '/sample-output' },
  ] satisfies NavPage[],
  /* The page's call to action. Pages without their own use this one. */
  cta: { label: 'Join the waitlist', to: '#join' } satisfies Cta,
  menu: { open: 'Open menu', close: 'Close menu', sheet: 'Menu' },
  theme: { row: 'Theme', toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
}

/* Each page's call to action in the nav (docs/REBUILD.md, "Calls to action"). Every one goes to the page's #join form. */
export const pageCtas: Record<string, Cta> = {
  '/founders': { label: 'Get early access', to: '#join' },
  '/sales': { label: 'Get early access for my team', to: '#join' },
  '/developers': { label: 'Get API access', to: '#join' },
  '/sample-output': { label: 'Get one for your store', to: '#join' },
}

export function ctaFor(path: string): Cta {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return pageCtas[clean] ?? nav.cta
}

/* The footer's words (components/Footer). Since 9 Nov it follows the bar's menus (content/nav menus), so the two always
   match: Products, Integrations, the 2 Solutions columns, Resources, then the company. Names only,
   no lines; then the logo and 1 short line. */
import { catalog } from './catalog'
import { nav, type NavPage } from './nav'

const { products, solutions, resources } = nav.menus
const names = (items: NavPage[]) => items.map(({ label, to }) => ({ label, to }))

export const footer = {
  /* 1 short line under the logo, the 1 sentence's core (docs/SEARCH.md 2). The full sentence stays word for word where
     engines read it (llms.txt, the Organization's JSON-LD, each page's meta answer) and in Home's "What is Obsession?",
     so a page never says the whole definition twice. */
  /* Since 22 Nov, Home's H1 (James). */
  tagline: 'The toolkit for AI agents. One API, one bill.',
  columns: [
    /* Products is the bar's Products menu (content/nav.ts): the 6 pieces, Blueprints, API and MCP; then Pricing, which
       left that menu for the bar (21 Nov). */
    { label: products.label, links: [...names(products.items), ...names(products.ways), nav.menus.pricing] },
    { label: products.integrations.label, links: [...names(products.integrations.items), products.integrations.all] },
    { label: solutions.kitsLabel, links: [...names(solutions.kits), solutions.kitsAll] },
    { label: solutions.teamsLabel, links: [...solutions.teams, solutions.useCasesAll] },
    /* Then the menu's first 2 More links. */
    { label: resources.label, links: [...names(resources.items), ...resources.more.items.slice(0, 2)] },
    {
      label: 'Company',
      links: [
        { label: 'Saw an Obsession agent?', to: '/agents' },
        { label: 'LinkedIn', to: 'https://www.linkedin.com/company/useobsession/' },
        { label: 'YouTube', to: 'https://www.youtube.com/@useobsession' },
        { label: 'Privacy', to: '/privacy' },
        { label: 'Security', to: '/security' },
        { label: 'Contact', to: `mailto:${catalog.contact}` },
      ],
    },
  ] satisfies { label: string; links: NavPage[] }[],
  copyright: '© 2026 Obsession',
  label: 'Footer',
  home: nav.home,
}

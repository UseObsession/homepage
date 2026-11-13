/* The footer's words (components/Footer). Since 9 Nov it follows the bar's menus (content/nav menus), so the two never
   name different things: Products, Integrations, the 2 Solutions columns, Resources, then the company. Names only,
   no lines; then the logo and 1 short line. */
import { catalog } from './catalog'
import { nav, type NavPage } from './nav'

const { products, solutions, resources } = nav.menus
const names = (items: NavPage[]) => items.map(({ label, to }) => ({ label, to }))

export const footer = {
  /* 1 short line under the logo, the 1 sentence's core (docs/SEARCH.md 2). The full sentence stays word for word where
     engines read it (llms.txt, the Organization's JSON-LD, each page's meta answer) and in Home's "What is Obsession?",
     so a page never says the whole definition twice. */
  /* Since 5 Nov evening the index (James). Until then: Send an AI customer to any company. Keep the receipts. */
  tagline: 'The web behind the login, as data.',
  columns: [
    { label: products.label, links: names(products.items) },
    { label: products.integrations.label, links: [...names(products.integrations.items), products.integrations.all] },
    ...solutions.columns.map((c) => ({ label: c.label, links: names(c.items) })),
    /* Then the menu's first 2 More links: Look up your site, Every resource. */
    { label: resources.label, links: [...names(resources.items), ...resources.more.items.slice(0, 2)] },
    {
      label: 'Company',
      links: [
        { label: 'Saw an Obsession agent?', to: '/agents' },
        { label: 'LinkedIn', to: 'https://www.linkedin.com/company/useobsession/' },
        { label: 'YouTube', to: 'https://www.youtube.com/@useobsession' },
        { label: 'Privacy', to: '/privacy' },
        { label: 'Contact', to: `mailto:${catalog.contact}` },
      ],
    },
  ] satisfies { label: string; links: NavPage[] }[],
  copyright: '© 2026 Obsession',
  label: 'Footer',
  home: nav.home,
}

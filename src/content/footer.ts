/* The footer's words (components/Footer): the full site map, the red lines in 1 line, and the trust links.
   The recipes come from content/nav, so the menu, the phone sheet and the footer always list the same ones. */
import { nav, type NavPage } from './nav'

export const footer = {
  tagline: 'The intelligence infrastructure for commercial teams.',
  columns: [
    { label: nav.solutions.label, links: nav.solutions.items.map(({ label, to }) => ({ label, to })) },
    {
      label: 'Product',
      links: [
        { label: 'Recipes', to: '/recipes' },
        { label: 'Sample output', to: '/sample-output' },
        { label: 'Developers', to: '/developers' },
      ],
    },
  ] satisfies { label: string; links: NavPage[] }[],
  recipes: nav.recipes.label,
  /* The red lines, said once and calmly. */
  rule: 'Every Obsession agent says it’s AI. At prospects and rivals it sticks to public sign-ups, pages and chat bots, never contacts staff, and stops before payment.',
  agents: { label: 'Saw an Obsession agent?', to: '/agents' } satisfies NavPage,
  privacy: { label: 'Privacy', to: '/privacy' } satisfies NavPage,
  copyright: '© 2026 Obsession',
  label: 'Footer',
}

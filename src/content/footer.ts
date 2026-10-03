/* The footer's words (components/Footer): the full site map, the red lines in 1 line, and the trust links.
   The readers, the resources and the recipes come from content/nav, so the bar, the menus, the phone sheet and the footer
   always list the same ones. */
import { nav, type NavPage } from './nav'
import { llms } from './site'
import { ways } from './ways'

export const footer = {
  /* The 1 sentence (docs/SEARCH.md 2), word for word, as in llms.txt and the Organization's JSON-LD: the footer is on
     every page, so every page says what Obsession is the same way. */
  tagline: llms.summary,
  columns: [
    { label: 'Who it’s for', links: nav.readers.map(({ label, to }) => ({ label, to })) },
    {
      label: 'Product',
      links: [
        { label: nav.recipes.label, to: nav.recipes.to },
        { label: ways.verify.name, to: ways.verify.to },
      ],
    },
    {
      label: nav.resources.label,
      links: [
        { label: nav.resources.run.kicker, to: nav.resources.run.to },
        { label: nav.resources.useCases.label, to: nav.resources.useCases.to },
        ...nav.resources.useCases.items.map(({ label, to }) => ({ label, to })),
        { label: nav.resources.all.label, to: nav.resources.all.to },
      ],
    },
  ] satisfies { label: string; links: NavPage[] }[],
  recipes: nav.recipes.label,
  /* The red lines, said once and calmly. */
  rule: 'Every Obsession agent says it’s AI. At prospects and rivals it uses only public sign ups, pages and chat bots, never staff or a checkout.',
  agents: { label: 'Saw an Obsession agent?', to: '/agents' } satisfies NavPage,
  privacy: { label: 'Privacy', to: '/privacy' } satisfies NavPage,
  copyright: '© 2026 Obsession',
  label: 'Footer',
  home: nav.home,
}

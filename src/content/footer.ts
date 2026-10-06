/* The footer's words (components/Footer): 4 short columns (who it's for, the product, the resources, the company), then
   the logo and 1 short line. Never every recipe: the Product column names their jobs, each linking its section of
   /recipes. The readers, the jobs and the resources come from content/nav, so the bar, the menus, the phone sheet and
   the footer always name the same ones. Each link appears once: Developers is a reader, so it sits under Who it's for
   only. */
import { catalog } from './catalog'
import { JOBS, jobAnchor, nav, type NavPage } from './nav'
import { ways } from './ways'

const readers = nav.readers.map(({ label, to }) => ({ label, to }))

export const footer = {
  /* 1 short line under the logo, the 1 sentence's core (docs/SEARCH.md 2). The full sentence stays word for word where
     engines read it (llms.txt, the Organization's JSON-LD, each page's meta answer) and in Home's "What is Obsession?",
     so a page never says the whole definition twice. */
  tagline: 'Declared AI agents that do business with other companies for you.',
  columns: [
    { label: 'Who it’s for', links: readers },
    {
      label: 'Product',
      links: [
        /* The recipe jobs; Check your AI agents has its own page, so it is linked by its own name. */
        ...JOBS.filter((j) => j !== 'Check your AI agents').map((j) => ({ label: j, to: `/recipes#${jobAnchor(j)}` })),
        { label: ways.verify.name, to: ways.verify.to },
      ],
    },
    {
      label: nav.resources.label,
      links: [
        { label: nav.resources.run.kicker, to: nav.resources.run.to },
        { label: nav.resources.useCases.label, to: nav.resources.useCases.to },
        { label: nav.resources.all.label, to: nav.resources.all.to },
      ],
    },
    {
      label: 'Company',
      links: [
        { label: 'Saw an Obsession agent?', to: '/agents' },
        { label: 'Privacy', to: '/privacy' },
        { label: 'Contact', to: `mailto:${catalog.contact}` },
      ],
    },
  ] satisfies { label: string; links: NavPage[] }[],
  copyright: '© 2026 Obsession',
  label: 'Footer',
  home: nav.home,
}

/* The footer's words (components/Footer): 4 short columns (who it's for, the product, the resources, the company), then
   the logo and the 1 sentence. Never every recipe: the Product column names their jobs, each linking its section of
   /recipes. The readers, the jobs and the resources come from content/nav, so the bar, the menus, the phone sheet and
   the footer always name the same ones. */
import { catalog } from './catalog'
import { JOBS, jobAnchor, nav, type NavPage } from './nav'
import { ways } from './ways'

const readers = nav.readers.map(({ label, to }) => ({ label, to }))
const developers = readers.find((r) => r.to === '/developers')

export const footer = {
  /* The 1 sentence (docs/SEARCH.md 2), word for word, as in llms.txt and the Organization's JSON-LD: the footer is on
     every page, so every page says what Obsession is the same way. It comes through the slim index (content/catalog.ts),
     so the app on every page doesn't carry the rest of content/site.ts. */
  tagline: catalog.summary,
  columns: [
    { label: 'Who it’s for', links: readers },
    {
      label: 'Product',
      links: [
        /* The recipe jobs; Check your AI agents has its own page, so it is linked by its own name. */
        ...JOBS.filter((j) => j !== 'Check your AI agents').map((j) => ({ label: j, to: `/recipes#${jobAnchor(j)}` })),
        { label: ways.verify.name, to: ways.verify.to },
        ...(developers ? [developers] : []),
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

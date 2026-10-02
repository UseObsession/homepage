import { agencies, marketing, sales } from './audiences'
import { recipes } from './recipes'

export const SITE = 'https://useobsession.com'

export type PageMeta = { path: string; title: string; description: string }

const home: PageMeta = {
  path: '/',
  title: 'Obsession · The intelligence infrastructure for commercial teams',
  description:
    'Every sales and marketing decision rests on what prospects, competitors and your own business actually do. Obsession runs the inboxes, phone numbers and browsers to research, sign up, ask, chase and check at any company. You get the proof and your next move.',
}

/* Every page that is prerendered to HTML, with the title and description crawlers and agents see. */
export const pages: PageMeta[] = [
  home,
  { path: '/agencies', title: agencies.docTitle, description: agencies.lede },
  { path: '/sales', title: sales.docTitle, description: sales.lede },
  { path: '/marketing', title: marketing.docTitle, description: marketing.lede },
  {
    path: '/developers',
    title: 'Obsession for founders and developers',
    description:
      'Create a run with a target, a task and a schedule. Obsession supplies the inbox, phone number and browser, waits as long as the journey takes, and posts each result to your webhook.',
  },
  {
    path: '/recipes',
    title: 'Recipes · Obsession',
    description:
      'Each recipe sets up what its job needs: shoppers with their own inboxes, phone numbers and browsers, the waits, and the checks. Competitor tracking, mystery shopper, prospect research and more.',
  },
  ...Object.values(recipes).map((r) => ({ path: `/recipes/${r.slug}`, title: `${r.name} · Obsession`, description: r.lede })),
  {
    path: '/sample-output',
    title: 'Sample output · Obsession',
    description:
      'A real store check from September 2026, with the store’s name hidden: 4 test customers, 48 hours watched, and 2 journeys that heard nothing. Shown as a report, an email, a Slack message, Clay columns, a webhook and a workflow.',
  },
]

export const notFound: PageMeta = { path: '/404', title: 'Page not found · Obsession', description: home.description }

export function metaFor(path: string): PageMeta {
  const clean = path.length > 1 ? path.replace(/\/+$/, '') : path
  return pages.find((p) => p.path === clean) ?? notFound
}

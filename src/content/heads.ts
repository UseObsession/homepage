/* Each page's head and breadcrumb trail, by path, and the call to action a page's own capture gives the nav: what the
   app needs as it moves between pages (App.tsx keeps the title, description and canonical in step; Crumbs draws the
   trail), without every page's words. Worked out here from the content (content/meta.ts) on the server; in the browser
   this module is the build's copy of its values (vite.config.ts contentIndex). Look one up with content/head.ts. */
import { entries, notFound } from './meta'
import { barCta } from './nav'
import { pages, recipes } from './registry'
import type { Cta, Meta } from './types'

export type Head = Pick<Meta, 'path' | 'title' | 'description' | 'breadcrumb'>

export const heads: Record<string, Head> = Object.fromEntries(
  [...entries, notFound].map(({ meta: { path, title, description, breadcrumb } }) => [path, { path, title, description, breadcrumb }]),
)

export const notFoundPath = notFound.meta.path

/* The story pages (Home, Agencies, Founders, Sales, Marketing, Developers, Check your AI agents) and every recipe take
   the nav's call to action from their own capture: the hero form's button, landing on the page's final form (#join).
   The bar says a long button in fewer words (content/nav barCta); the phone sheet keeps the page's own. */
export const storyCtas: Record<string, Cta> = Object.fromEntries(
  [...Object.values(pages), ...recipes].map((p) => [p.meta.path, barCta({ label: p.hero.capture.button, to: '#join' }, p.hero.capture.kind)]),
)

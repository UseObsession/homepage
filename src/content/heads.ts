/* Each page's head and breadcrumb trail, by path: what the
   app needs as it moves between pages (App.tsx keeps the title, description and canonical in step; Crumbs draws the
   trail), without every page's words. Worked out here from the content (content/meta.ts) on the server; in the browser
   this module is the build's copy of its values (vite.config.ts contentIndex). Look one up with content/head.ts. */
import { entries, lookup, notFound } from './meta'
import type { Meta } from './types'

export type Head = Pick<Meta, 'path' | 'title' | 'description' | 'breadcrumb'>

export const heads: Record<string, Head> = Object.fromEntries(
  [...entries, lookup, notFound].map(({ meta: { path, title, description, breadcrumb } }) => [path, { path, title, description, breadcrumb }]),
)

export const notFoundPath = notFound.meta.path

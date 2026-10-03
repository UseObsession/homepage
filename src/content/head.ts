/* The head and breadcrumb trail of the page at a path (content/heads.ts), else the 404 page's. */
import { heads, notFoundPath } from './heads'
import { cleanPath } from './paths'

export const headFor = (path: string) => heads[cleanPath(path)] ?? heads[notFoundPath]

/* Addresses, with nothing else imported: the site's origin, a path as the router sees it, and a path made absolute.
   content/meta.ts gives them to the prerender; the app in the browser reads them from here, without meta's list of
   every page and its words. */
export const SITE = 'https://useobsession.com'

/* A path as the router sees it, without a trailing slash or a .html ending (except the root). */
export const cleanPath = (path: string) => {
  const p = path.split(/[?#]/)[0].replace(/(\/index)?\.html$/, '').replace(/\/+$/, '')
  return p === '' ? '/' : p
}

/* Absolute URLs: the canonical has no trailing slash, except the root. */
export const absolute = (path: string) => SITE + (path === '/' ? '/' : path)

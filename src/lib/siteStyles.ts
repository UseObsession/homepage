/* The site's whole stylesheet, for a page reached client side. Each prerendered page carries the site's styles
   written into it and trimmed to what that page can show (scripts/prerender.mjs: <style data-site="FILE">), so the
   next page may need rules the first one left out. This loads the whole sheet once, in the same place in the cascade
   (before the screens' own styles), and drops the page's trimmed copy once it has landed. In development there is no
   trimmed copy, so there is nothing to load. */
let sheet: Promise<void> | undefined

export function siteStyles(): Promise<void> {
  if (typeof document === 'undefined') return Promise.resolve()
  return (sheet ??= new Promise((done) => {
    const own = document.querySelector('style[data-site]')
    const href = own?.getAttribute('data-site')
    if (!own || !href) return done()
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.onload = () => {
      own.remove()
      done()
    }
    link.onerror = () => done()
    own.after(link)
  }))
}

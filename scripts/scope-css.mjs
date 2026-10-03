/* PostCSS plugin: scopes the stylesheets in src/legacy/james/ under a wrapper class, so James's two use case pages keep
   his styles exactly (the files there are his, unchanged) and none of it reaches the rest of the site.

   His CSS was written for a page of his own: it sets `:root` tokens, styles `body`, `*` and bare elements, and names
   global classes (.wrap, .section, .btn, .hero, .h1 ...). Here every selector is prefixed with the wrapper class
   (`.james`, set on the page's root by src/legacy/JamesPage.tsx), and the page-level selectors map onto it:

     :root                      ->  .james                         his dark tokens
     :root[data-theme="light"]  ->  :root[data-theme="light"] .james   his light tokens, on the site's own theme switch
     :root[data-theme="light"] .uc   ->  :root[data-theme="light"] .james .uc
     body                       ->  .james                         his page type and ground
     html                       ->  dropped (the site's own html rules stand: smooth scroll, text size adjust)
     *, *::before                ->  .james, .james *, ...         his box sizing
     .anything                  ->  .james .anything

   His body rule also sets `overflow-x: hidden`: the site's body already does, and on the wrapper it would make the page
   a scroll container and stop his sticky step text from sticking, so that one declaration is left out. A prefixed
   selector is more specific than the same class set by the site, so his rules win inside his pages whatever the order.
   Keyframes keep their names: his are all namespaced (uc-, pr-, of-) and `blink` is the same keyframe the site has. */

const SCOPE = '.james'
const DIR = '/src/legacy/james/'

/* One selector of a rule's list, scoped. Returns the selectors it becomes (none when it is dropped). */
function scopeSelector(raw) {
  const sel = raw.trim()
  if (!sel || sel.startsWith(SCOPE)) return [sel]
  if (sel === 'html') return []
  if (sel === 'body') return [SCOPE]
  if (sel === ':root') return [SCOPE]
  /* :root with attribute or :not() parts, then optionally more: the wrapper sits inside the root. */
  const root = sel.match(/^(:root(?:\[[^\]]*\]|:not\((?:[^()]|\([^()]*\))*\))*)(\s.*)?$/)
  if (root) return [`${root[1]} ${SCOPE}${root[2] ?? ''}`]
  /* The universal selector, and its pseudo elements, reach the wrapper itself as well as everything in it. */
  if (sel.startsWith('*')) return [`${SCOPE}${sel.slice(1)}`, `${SCOPE} ${sel}`]
  return [`${SCOPE} ${sel}`]
}

export function scopeJames() {
  return {
    postcssPlugin: 'obsession-scope-james',
    Once(root) {
      const file = (root.source?.input.file ?? '').replace(/\\/g, '/')
      if (!file.includes(DIR)) return
      root.walkRules((rule) => {
        if (rule.parent?.type === 'atrule' && /keyframes$/i.test(rule.parent.name)) return
        const scoped = [...new Set(rule.selectors.flatMap(scopeSelector))]
        if (!scoped.length) {
          rule.remove()
          return
        }
        if (rule.selectors.includes('body')) rule.walkDecls('overflow-x', (d) => void d.remove())
        rule.selectors = scoped
      })
    },
  }
}
scopeJames.postcss = true

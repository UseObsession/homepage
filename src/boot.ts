/* The page's own first script: scripts/prerender.mjs compiles it and writes it inline at the end of every prerendered
   page, in place of the app's script tag. It is never bundled, and it must not import anything.
   - The app screens' stories need no React: they are HTML and CSS, and a story is the .play class on the screen
     (components/AppScreen). So each screen in view plays at once, before the app is there, the way AppScreen plays it
     (the story once, when the screen first comes into view; nothing with reduced motion). A screen in a panel that is
     not shown (inert: Home's other hero tabs, How's other steps) waits for its tab. data-boot marks a story started
     here, so AppScreen does not start it again as it takes over (src/main.tsx sends obs-hydrate when it does).
   - The screens' own styles: the page carries those of the screen its first view shows; the rest (SHEETS, by screen)
     load as each screen comes within a screen's height of the view, and, once the page's main words have landed, 1 at
     a time while the browser is idle. Until then a screen is skipped by the browser (styles/perf.css), so it never
     shows without them.
   - The app itself (src/main.tsx, the built entry named by ENTRY) loads once the page's main words have landed: after
     its first frame, and after the hero's headline and sub have faded in (if they do) and been painted, so the app's
     work never holds up the moment the page's main words show. React hydrates in short slices from there. A reader's first touch, click or key
     loads it at once. */
declare const ENTRY: string
declare const SHEETS: Record<string, string[]>

const RM = '(prefers-reduced-motion: reduce)'
const WAIT_MS = 2000
const PAINT_MS = 300

if (!matchMedia(RM).matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        io.unobserve(e.target)
        if (e.target.classList.contains('play') || e.target.closest('[inert]')) continue
        e.target.classList.add('play')
        e.target.setAttribute('data-boot', '')
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
  )
  document.querySelectorAll('.ilwrap > .il').forEach((il) => io.observe(il))
  document.addEventListener('obs-hydrate', () => io.disconnect(), { once: true })
}

const sheets = new Map<string, Promise<unknown>>()
const sheet = (href: string) => {
  if (!sheets.has(href))
    sheets.set(
      href,
      new Promise((done) => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        link.onload = link.onerror = done
        document.head.append(link)
      }),
    )
  return sheets.get(href)
}
const style = (name: string | null) => Promise.all(((name && SHEETS[name]) || []).map(sheet))
/* Every other screen's styles, 1 screen at a time, each when the browser is next idle. */
const idle = (next: () => void) => ('requestIdleCallback' in window ? requestIdleCallback(next, { timeout: 1000 }) : setTimeout(next, 50))
const rest = (names: string[]) => {
  if (names.length) idle(() => style(names[0]).then(() => rest(names.slice(1))))
}
/* A screen below the hero is skipped altogether until it comes within a view's height (data-far, styles/perf.css): the
   browser would otherwise draw every screen ahead as soon as it is idle. */
if ('IntersectionObserver' in window) {
  const near = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        near.unobserve(e.target)
        e.target.firstElementChild?.removeAttribute('data-far')
        style(e.target.getAttribute('data-screen'))
      }
    },
    { rootMargin: '100% 0px' },
  )
  document.querySelectorAll('.ilwrap[data-screen]').forEach((s) => {
    if (!s.closest('.s-hero')) s.firstElementChild?.setAttribute('data-far', '')
    near.observe(s)
  })
}

let started = false
const start = () => {
  if (started) return
  started = true
  rest(Object.keys(SHEETS))
  import(/* @vite-ignore */ ENTRY)
}
for (const type of ['pointerdown', 'keydown', 'touchstart']) addEventListener(type, start, { once: true, passive: true, capture: true })
/* The words have landed once their entrance has run and the browser has painted the result: a largest contentful
   paint after it is in, or PAINT_MS has passed (no larger paint came, or the browser does not report them). */
const painted = () =>
  new Promise<void>((done) => {
    const since = performance.now()
    const finish = () => {
      po?.disconnect()
      done()
    }
    const po =
      'PerformanceObserver' in window && PerformanceObserver.supportedEntryTypes?.includes('largest-contentful-paint')
        ? new PerformanceObserver((list) => list.getEntries().some((e) => e.startTime >= since - 50) && finish())
        : null
    po?.observe({ type: 'largest-contentful-paint', buffered: true })
    setTimeout(finish, po ? PAINT_MS : 100)
  })
/* The hero's words (motion.css .ob-anim-hero) enter in turn; the headline or the sub, whichever is larger, is the
   page's main paint. */
requestAnimationFrame(() => {
  const fades = [...document.querySelectorAll('.ob-anim-hero > :is(h1, p)')]
    .flatMap((el) => el.getAnimations?.() ?? [])
    .filter((a) => (a.effect as KeyframeEffect | null)?.getKeyframes().some((k) => 'opacity' in k))
  if (!fades.length) return setTimeout(start)
  /* Never later than WAIT_MS, should an entrance not run to its end (a page that opens in a tab out of view). */
  Promise.race([Promise.all(fades.map((a) => a.finished)), new Promise((done) => setTimeout(done, WAIT_MS))])
    .catch(() => {})
    .then(painted)
    .then(() => setTimeout(start))
})

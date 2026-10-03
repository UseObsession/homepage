/* The page's own first script: scripts/prerender.mjs compiles it and writes it inline at the end of every prerendered
   page, in place of the app's script tag. It is never bundled, and it must not import anything.
   - The app screens' stories need no React: they are HTML and CSS, and a story is the .play class on the screen
     (components/AppScreen). So each screen in view plays at once, before the app is there, the way AppScreen plays it
     (the story once, when the screen first comes into view; nothing with reduced motion). A screen in a panel that is
     not shown (inert: Home's other hero tabs, How's other steps) waits for its tab. data-boot marks a story started
     here, so AppScreen does not start it again as it takes over (src/main.tsx sends obs-hydrate when it does).
   - The app itself (src/main.tsx, the built entry named by ENTRY) loads once the page's main words have landed: after
     its first frame, and after the headline's entrance if it fades in, so the app's work never holds up the moment the
     page's main words show. React hydrates in short slices from there. A reader's first touch, click or key loads it at
     once. */
declare const ENTRY: string

const RM = '(prefers-reduced-motion: reduce)'
const WAIT_MS = 2000

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

let started = false
const start = () => {
  if (started) return
  started = true
  import(/* @vite-ignore */ ENTRY)
}
for (const type of ['pointerdown', 'keydown', 'touchstart']) addEventListener(type, start, { once: true, passive: true, capture: true })
requestAnimationFrame(() => {
  const fades = (document.querySelector('h1')?.getAnimations?.() ?? []).filter((a) =>
    (a.effect as KeyframeEffect | null)?.getKeyframes().some((k) => 'opacity' in k),
  )
  /* Never later than WAIT_MS, should an entrance not run to its end (a page that opens in a tab out of view). */
  Promise.race([Promise.all(fades.map((a) => a.finished)), new Promise((done) => setTimeout(done, WAIT_MS))])
    .catch(() => {})
    .then(() => setTimeout(start))
})

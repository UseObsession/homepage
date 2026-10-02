import { useSyncExternalStore } from 'react'
import { nav } from '../content/nav'
import './ThemeToggle.css'

type Theme = 'dark' | 'light'

/* The theme lives on <html data-theme>, set before paint by the boot script in index.html. Every switch on the page
   reads it through 1 store, so they agree with each other. The server and the hydration pass both see "dark" (the
   prerendered default); a reader who chose light gets the right label straight after, with no hydration mismatch.
   The icon itself is chosen by CSS from <html data-theme>, so it is right from the first frame. */
function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => mo.disconnect()
}
const read = (): Theme => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
const server = (): Theme => 'dark'

/* The design system's theme switch (motion.css, "Theme switch"): every surface changes together and, where the browser
   can, the page crossfades in 240ms. With reduced motion it just switches. */
function setTheme(next: Theme) {
  const root = document.documentElement
  const apply = () => {
    root.dataset.theme = next
  }
  try {
    localStorage.setItem('obs-theme', next)
  } catch {
    /* private mode: the choice lasts for this page only */
  }
  root.classList.add('ob-anim-theme')
  const done = () => root.classList.remove('ob-anim-theme')
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!still && typeof document.startViewTransition === 'function') {
    document.startViewTransition(apply).finished.finally(done)
  } else {
    apply()
    requestAnimationFrame(() => requestAnimationFrame(done))
  }
}

export function ThemeToggle({ className = '' }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, read, server)
  const label = theme === 'dark' ? nav.theme.toLight : nav.theme.toDark

  return (
    <button
      type="button"
      className={`ob-btn ob-btn--ghost ob-btn--icon ob-btn--sm s-theme ${className}`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={label}
      title={label}
    >
      {/* Sun on dark (the switch goes to light), moon on paper. */}
      <svg className="ob-btn-glyph s-theme__sun" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <circle cx="8" cy="8" r="2.75" />
        <path d="M8 1.75v1.25M8 13v1.25M1.75 8H3M13 8h1.25M3.58 3.58l.88.88M11.54 11.54l.88.88M3.58 12.42l.88-.88M11.54 4.46l.88-.88" />
      </svg>
      <svg className="ob-btn-glyph s-theme__moon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M13.25 9.6A5.5 5.5 0 0 1 6.4 2.75a5.5 5.5 0 1 0 6.85 6.85Z" />
      </svg>
    </button>
  )
}

import { StrictMode, startTransition } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Global styles load before any component styles, so components can override them.
// The Obsession design system first (src/styles/ds, synced by scripts/sync-assets.mjs), then the site's own styles.
import './styles/ds/tokens.css'
import './styles/ds/motion.css'
// The reader accents (site layer, --s-accent-*), until the design system absorbs them as --ob-reader-*: COLOUR.md.
import './styles/accents.css'
import './styles/ds/components/buttons.css'
import './styles/ds/components/forms.css'
import './styles/ds/components/navigation.css'
import './styles/ds/components/surfaces.css'
import './styles/ds/components/brand.css'
import './styles/tokens.css'
import './styles/site.css'
import './styles/base.css'
/* How the page renders, never how it looks (styles/perf.css). */
import './styles/perf.css'
/* The hero's words without the fade (styles/entrance.css): Seun's call, in a file of its own. */
import './styles/entrance.css'
import App, { preloadRoute } from './App'
import { hydrated } from './lib/hydration'
import { Hydrated } from './lib/Hydrated'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <Hydrated>
      <App />
    </Hydrated>
  </StrictMode>
)

/* A page's chunk that no longer exists (a deploy replaced it while the page was open) loads the page afresh instead. */
window.addEventListener('vite:preloadError', (e) => {
  e.preventDefault()
  location.reload()
})

/* Pages are prerendered to HTML at build time (scripts/prerender.mjs), and the page's boot script (src/boot.ts) loads
   this once the hero's words have landed. The page's own code and words load first, so React draws exactly that HTML,
   then hydrates it in a transition, in short slices, so the page stays responsive while it does; the boot script hands
   the app screens' stories over as it starts (obs-hydrate). In development the root is empty: render from scratch. */
if (root.hasChildNodes()) {
  void preloadRoute(location.pathname).then(() => {
    document.dispatchEvent(new Event('obs-hydrate'))
    startTransition(() => {
      hydrateRoot(root, app)
    })
  })
} else {
  hydrated()
  createRoot(root).render(app)
}

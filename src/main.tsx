import { StrictMode } from 'react'
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
import App from './App'
// Paper and Gloss (the grounds, the product object material, the reading ink) loads after every component's styles, so
// a section's tone and an object's material win over the component's own defaults.
import './styles/tones.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

/* Pages are prerendered to HTML at build time (scripts/prerender.mjs). Hydrate that HTML when it's there;
   in development the root is empty, so render from scratch. */
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)

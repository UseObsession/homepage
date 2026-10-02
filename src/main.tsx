import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Global styles load before any component styles, so components can override them.
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import App from './App'

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

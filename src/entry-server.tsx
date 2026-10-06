/* oxlint-disable react/only-export-components -- the prerender's server entry, never hot reloaded */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes, preloadRoute } from './App'

export { routeFile } from './App'

/* Used only by scripts/prerender.mjs at build time: renders 1 route to HTML (its page's code and words loaded first, so
   it draws whole), and hands over what its head needs. */
export async function render(url: string) {
  await preloadRoute(url)
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
}

export { absolute, entries, entryFor, notFound, SITE } from './content/meta'
export { jsonLd, jsonLdScript } from './lib/jsonld'
export { CONTROLLER, llms } from './content/site'
export { AGENCY_SCREENS } from './components/workspace'
export { screenFiles } from './components/screens.server'
export { postFileOf } from './content/registry'
export { isJamesPath } from './legacy/jamesPaths'
export { blogPage, blogUi } from './content/resources'

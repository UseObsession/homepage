/* oxlint-disable react/only-export-components -- the prerender's server entry, never hot reloaded */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'

/* Used only by scripts/prerender.mjs at build time: renders 1 route to HTML, and hands over what its head needs. */
export function render(url: string) {
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
export { llms } from './content/site'

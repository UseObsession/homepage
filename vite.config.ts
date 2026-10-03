import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/* `npm run dev` has no prerendered pages, so every app screen is fetched (components/screens.ts): this answers
   /screens/WORKSPACE/NAME by drawing the screen's component, as the prerender writes it to dist/screens. */
function screensInDev(): Plugin {
  return {
    name: 'obsession-screens-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const m = req.url?.match(/^\/screens\/(agency|company)\/([a-z]+)$/)
        if (!m) return next()
        const { renderScreen } = await server.ssrLoadModule('/src/screens/render.ts')
        const html = renderScreen(m[2], m[1])
        if (html === undefined) return next()
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(html)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), screensInDev()],
  /* The prerender reads the manifest to link each page's own CSS (the screens' CSS, split per screen) in its head. */
  build: { manifest: true },
})

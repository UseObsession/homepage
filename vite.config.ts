import react from '@vitejs/plugin-react'
import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, runnerImport, type Plugin } from 'vite'
import { scopeJames } from './scripts/scope-css.mjs'

const root = fileURLToPath(new URL('.', import.meta.url))

/* The app's index of every page (content/catalog.ts, content/heads.ts) is worked out from all the content: the browser
   gets the values those 2 modules export, and none of the words they read them from (each page's own words load with
   the page, App.tsx). The prerender's server build does not read this config, so it runs the 2 modules themselves. */
function contentIndex(): Plugin {
  const index = new Set(['src/content/catalog.ts', 'src/content/heads.ts'].map((f) => root + f))
  return {
    name: 'obsession-content-index',
    async load(id) {
      const file = id.split('?')[0]
      if (!index.has(file) || this.environment.name !== 'client') return
      const { module, dependencies } = await runnerImport<Record<string, unknown>>(file, { configFile: false, root, logLevel: 'error' })
      for (const d of dependencies) this.addWatchFile(d)
      return Object.entries(module)
        .map(([name, value]) => `export const ${name} = ${JSON.stringify(value)}`)
        .join('\n')
    },
  }
}

/* The site's styles keep the cascade they had as 1 bundle: the design system and the site's globals, every component's
   and page's styles in the order the app meets them, then Paper and Gloss (styles/tones.css) last, so a section's tone
   and an object's material win over a component's own defaults. Each page's code is its own chunk (App.tsx), and the
   bundler orders the styles a lazy chunk imports after everything the entry imports, tones.css too. So main.tsx imports
   styles/pages.ts just before tones.css, and this writes that module: an import of every style the pages' code imports,
   walking each page's imports in the order App.tsx lists the pages, as the 1 bundle did. It imports no code, so every
   page's code stays in its own chunk. It reads the import lines of the app's own files (type imports bring no code). */
const IMPORT = /^(?:import|export)\s+(?!type\s)(?:[^'";]*?\sfrom\s*)?['"]([^'"]+)['"]/gm

function pageStyles(): Plugin {
  const file = root + 'src/styles/pages.ts'
  const pages = root + 'src/pages/'
  return {
    name: 'obsession-page-styles',
    async load(id) {
      if (id.split('?')[0] !== file) return
      const seen = new Set<string>()
      const styles: string[] = []
      const walk = async (dep: string): Promise<void> => {
        /* Only the app's own modules; an app screen's own sheet (src/screens/css) stays its own file. */
        if (seen.has(dep) || !dep.startsWith(root + 'src/') || dep.startsWith(root + 'src/screens/css/')) return
        seen.add(dep)
        if (dep.endsWith('.css')) {
          styles.push(dep)
          return
        }
        this.addWatchFile(dep)
        for (const [, spec] of readFileSync(dep, 'utf8').matchAll(IMPORT)) {
          if (!spec.startsWith('.')) continue
          const next = (await this.resolve(spec, dep))?.id.split('?')[0]
          if (next) await walk(next)
        }
      }
      for (const page of readdirSync(pages).filter((f) => f.endsWith('.tsx')).sort()) await walk(pages + page)
      return styles.map((s) => `import ${JSON.stringify(s)}`).join('\n')
    },
  }
}

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
  plugins: [react(), screensInDev(), contentIndex(), pageStyles()],
  /* James's 2 use case pages (src/legacy/james) keep their own stylesheets as he wrote them; this scopes them under the
     wrapper class so they style only those pages (scripts/scope-css.mjs). */
  css: { postcss: { plugins: [scopeJames()] } },
  build: {
    /* The prerender reads the manifest to link each page's own CSS (the screens' CSS, split per screen) in its head. */
    manifest: true,
    /* Fonts stay files, never data URIs: a font written into the CSS is only read once a glyph needs it, late, and each
       font that lands late lays the whole page out again. As files, the prerender preloads the ones a page sets. */
    assetsInlineLimit: (file) => (file.endsWith('.woff2') ? false : undefined),
    rolldownOptions: {
      output: {
        codeSplitting: {
          /* Every page's code is its own chunk (App.tsx), but the site's styles stay 1 sheet, in the order the app imports
             them, as when it was 1 bundle: the cascade never depends on which page loaded first. Only the app screens'
             own sheets (src/screens/css) stay apart, 1 per screen, linked by the pages that show them. */
          groups: [{ name: 'site', test: (id) => /\.css$/.test(id) && !/[\\/]src[\\/]screens[\\/]css[\\/]/.test(id) }],
        },
      },
    },
    /* A page's chunk never brings the site's sheet: the prerender writes it into every page (scripts/prerender.mjs). */
    modulePreload: { resolveDependencies: (_file, deps) => deps.filter((d) => !/(^|\/)site-[\w-]+\.css$/.test(d)) },
  },
})

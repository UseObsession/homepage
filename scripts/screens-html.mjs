/* Every app screen on a page of its own, to look at 1 by 1 now that the screens are React components:
     npm run screens:html -- [DIR]     (default: $SCREENS_HTML_DIR, else obsession-screens-html in the system temp folder)
   Writes DIR/NAME.html for every screen (and DIR/NAME.company.html for the 14 drawn for an agency, as a company's
   workspace shows them) plus DIR/index.html linking them all. Each page is self contained: the design system's tokens,
   the screens' kit and base, the screen's own CSS (and any other app-NAME sheet on its root), and the Geist fonts beside
   it in DIR/fonts. The story plays on load and on a click; ?theme=light shows the light theme, ?still the finished
   scene only. */
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { basename, join, resolve } from 'node:path'
import { loadScreens } from './screens-ssr.mjs'
import { root } from './screens-source.mjs'

const out = resolve(process.argv[2] ?? process.env.SCREENS_HTML_DIR ?? join(tmpdir(), 'obsession-screens-html'))
const { renderScreen, SCREEN_NAMES } = await loadScreens()
const read = (p) => readFile(join(root, p), 'utf8')
await mkdir(join(out, 'fonts'), { recursive: true })

/* The fonts, copied beside the pages so they load from disk or from any server. */
let fonts = await read('src/styles/fonts.css')
for (const m of [...fonts.matchAll(/url\("([^"]+)"\)/g)]) {
  const src = m[1].startsWith('@') ? join(root, 'node_modules', m[1]) : resolve(root, 'src/styles', m[1])
  if (!existsSync(src)) continue
  await copyFile(src, join(out, 'fonts', basename(src)))
  fonts = fonts.replace(m[0], `url("fonts/${basename(src)}")`)
}
const shared = [fonts, await read('src/styles/ds/tokens.css'), await read('src/screens/kit.css'), await read('src/screens/base.css')].join('\n')
const PAGE = `
html, body { margin: 0; background: var(--ob-bg); color: var(--ob-text); font-family: var(--ob-font-sans); }
.stage { box-sizing: border-box; max-width: 792px; margin: 0 auto; padding: 32px 16px; }
.stage h1 { margin: 0 0 16px; font: 500 14px/1.4 var(--ob-font-mono); color: var(--ob-text-3); }
.ilwrap { cursor: pointer; }`
const SCRIPT = `<script>
  var q = new URLSearchParams(location.search)
  if (q.get('theme')) document.documentElement.dataset.theme = q.get('theme')
  var il = document.querySelector('.il')
  function play() {
    if (q.has('still') || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    il.classList.remove('play')
    void il.offsetWidth
    il.classList.add('play')
  }
  addEventListener('load', play)
  il.addEventListener('click', play)
</script>`

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
const pages = []
for (const name of SCREEN_NAMES) {
  const agency = renderScreen(name, 'agency')
  const company = renderScreen(name, 'company')
  const sheets = [name, ...[...(agency.match(/class="il appx-il ([^"]+)"/)?.[1] ?? '').matchAll(/\bapp-([a-z]+)\b/g)].map((m) => m[1]).filter((n) => n !== name)]
  const css = (await Promise.all(sheets.filter((s) => existsSync(join(root, `src/screens/css/${s}.css`))).map((s) => read(`src/screens/css/${s}.css`)))).join('\n')
  for (const [file, html, label] of [[`${name}.html`, agency, name], ...(company !== agency ? [[`${name}.company.html`, company, `${name} (a company's workspace)`]] : [])]) {
    await writeFile(
      join(out, file),
      `<!doctype html>
<html lang="en-GB" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(label)}: Obsession app screen</title>
<style>
${shared}
${css}
${PAGE}
</style>
</head>
<body>
<main class="stage">
<h1>${esc(label)}</h1>
<div class="ilwrap" data-screen="${name}">${html}</div>
</main>
${SCRIPT}
</body>
</html>
`,
    )
    pages.push([file, label])
  }
}
await writeFile(
  join(out, 'index.html'),
  `<!doctype html>
<html lang="en-GB" data-theme="dark">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Obsession app screens</title>
<style>body { margin: 0; padding: 32px 16px; background: #080807; color: #f5f4f0; font: 14px/1.6 ui-monospace, monospace; } a { color: inherit; }</style>
</head>
<body>
<h1>${SCREEN_NAMES.length} app screens</h1>
<ul>
${pages.map(([f, l]) => `<li><a href="${f}">${esc(l)}</a></li>`).join('\n')}
</ul>
</body>
</html>
`,
)
console.log(`Wrote ${pages.length} screen pages and index.html to ${out}`)

/* Pulls the Obsession design system and the app screens into this repo, so the site builds on its own.
   The sources live in the founders' workspace, next to this repo:
     ../Brand/Design System/   tokens.css, motion.css, components/*.css      ->  src/styles/ds/
     ../_research/illus/       app-base.css, app-NAME.html, app-NAME.css     ->  src/screens/
   Run it after either source changes: node scripts/sync-assets.mjs
   Override the paths with OBS_DS=... and OBS_SCREENS=... if the workspace lives elsewhere. */
import { existsSync } from 'node:fs'
import { copyFile, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DS = process.env.OBS_DS || resolve(root, '../Brand/Design System')
const SCREENS = process.env.OBS_SCREENS || resolve(root, '../_research/illus')

if (!existsSync(DS) || !existsSync(SCREENS)) {
  console.error(`Sources not found:\n  ${DS}\n  ${SCREENS}\nThe committed copies in src/ stay as they are.`)
  process.exit(1)
}

/* design system */
const dsOut = join(root, 'src/styles/ds')
await mkdir(join(dsOut, 'components'), { recursive: true })
for (const f of ['tokens.css', 'motion.css']) await copyFile(join(DS, f), join(dsOut, f))
for (const f of (await readdir(join(DS, 'components'))).filter((f) => f.endsWith('.css')))
  await copyFile(join(DS, 'components', f), join(dsOut, 'components', f))

/* app screens: only well formed ones, with 1 main landmark per page and no template count */
const VOID = new Set(['br', 'img', 'input', 'meta', 'link', 'hr', 'path', 'rect', 'circle', 'line', 'polyline', 'polygon', 'stop', 'use', 'ellipse'])
function balanced(html) {
  const stack = []
  for (const m of html.replace(/<!--[\s\S]*?-->/g, '').matchAll(/<(\/?)([a-zA-Z][\w-]*)[^>]*?(\/?)>/g)) {
    const [, close, tag, self] = m
    const t = tag.toLowerCase()
    if (VOID.has(t) || self) continue
    if (!close) stack.push(t)
    else if (stack.pop() !== t) return false
  }
  return stack.length === 0
}

const out = join(root, 'src/screens')
await rm(join(out, 'html'), { recursive: true, force: true })
await rm(join(out, 'css'), { recursive: true, force: true })
await mkdir(join(out, 'html'), { recursive: true })
await mkdir(join(out, 'css'), { recursive: true })
await copyFile(join(SCREENS, 'app-base.css'), join(out, 'base.css'))

const names = (await readdir(SCREENS))
  .filter((f) => /^app-[a-z]+\.html$/.test(f) && f !== 'app-frame.html')
  .map((f) => f.slice(4, -5))
const kept = []
for (const name of names) {
  let html = (await readFile(join(SCREENS, `app-${name}.html`), 'utf8')).trim()
  html = html.replace('<main class="ax-main">', '<div class="ax-main">').replace('</main>', '</div>')
  html = html.replace(/(Templates)<em>\d+<\/em>/g, '$1')
  if (!balanced(html)) {
    console.warn(`  skipped app-${name}: unbalanced markup`)
    continue
  }
  await writeFile(join(out, 'html', `${name}.html`), html + '\n')
  if (existsSync(join(SCREENS, `app-${name}.css`))) await copyFile(join(SCREENS, `app-${name}.css`), join(out, 'css', `${name}.css`))
  kept.push(name)
}
console.log(`Design system: ${DS}\nScreens (${kept.length}): ${kept.join(', ')}`)

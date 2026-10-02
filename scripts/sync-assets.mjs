/* Pulls the Obsession design system and the app screens into this repo, so the site builds on its own.
   The sources live in the founders' workspace, next to this repo:
     ../Brand/Design System/   tokens.css, motion.css, components/*.css      ->  src/styles/ds/
     ../_research/illus/       app-base.css, app-NAME.html, app-NAME.css     ->  src/screens/
     ../Brand/Logo/            the final logo (2 Oct 2026)                   ->  public/logo/, public/favicon.svg, src/assets/logo/states/
   Run it after either source changes: node scripts/sync-assets.mjs
   Override the paths with OBS_DS=... and OBS_SCREENS=... if the workspace lives elsewhere. */
import { existsSync } from 'node:fs'
import { copyFile, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DS = process.env.OBS_DS || resolve(root, '../Brand/Design System')
const SCREENS = process.env.OBS_SCREENS || resolve(root, '../_research/illus')
const LOGO = process.env.OBS_LOGO || resolve(root, '../Brand/Logo')

if (!existsSync(DS) || !existsSync(SCREENS) || !existsSync(LOGO)) {
  console.error(`Sources not found:\n  ${DS}\n  ${SCREENS}\n  ${LOGO}\nThe committed copies in src/ stay as they are.`)
  process.exit(1)
}

/* design system */
const dsOut = join(root, 'src/styles/ds')
await mkdir(join(dsOut, 'components'), { recursive: true })
for (const f of ['tokens.css', 'motion.css']) await copyFile(join(DS, f), join(dsOut, f))
for (const f of (await readdir(join(DS, 'components'))).filter((f) => f.endsWith('.css')))
  await copyFile(join(DS, 'components', f), join(dsOut, 'components', f))

/* the final logo: outlined SVGs only, never a retyped wordmark */
/* lockups and marks are plain files at /logo/ (cached, same URL in the prerender and the browser); the 4 status marks are
   inlined from src/assets/logo/states so they take the text colour and run their own motion */
const logoPublic = join(root, 'public/logo')
const statesOut = join(root, 'src/assets/logo/states')
await rm(logoPublic, { recursive: true, force: true })
await rm(join(root, 'src/assets/logo'), { recursive: true, force: true })
await mkdir(logoPublic, { recursive: true })
await mkdir(statesOut, { recursive: true })
for (const f of (await readdir(LOGO)).filter((f) => f.endsWith('.svg') || f === 'obsession-app-icon-1024.png')) await copyFile(join(LOGO, f), join(logoPublic, f))
for (const f of (await readdir(join(LOGO, 'states'))).filter((f) => f.endsWith('.svg'))) await copyFile(join(LOGO, 'states', f), join(statesOut, f))
await copyFile(join(LOGO, 'favicon.svg'), join(root, 'public/favicon.svg'))
await copyFile(join(LOGO, 'obsession-app-icon-1024.png'), join(root, 'public/obsession-app-icon-1024.png'))
await copyFile(join(LOGO, 'obsession-app-icon.svg'), join(root, 'public/obsession-app-icon.svg'))
/* The PNG fallbacks: a 32px favicon for browsers and results pages that skip SVG, and the 180px touch icon. */
{
  const { Resvg } = await import('@resvg/resvg-js')
  const icon = await readFile(join(LOGO, 'obsession-app-icon.svg'), 'utf8')
  for (const [file, size] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180]])
    await writeFile(join(root, 'public', file), new Resvg(icon, { fitTo: { mode: 'width', value: size } }).render().asPng())
}

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
  .filter((f) => !['app-watch.html'].includes(f)) /* superseded by app-acctwatch */
  .map((f) => f.slice(4, -5))
const kept = []
for (const name of names) {
  let html = (await readFile(join(SCREENS, `app-${name}.html`), 'utf8')).trim()
  html = html.replace('<main class="ax-main">', '<div class="ax-main">').replace('</main>', '</div>')
  html = html.replace(/(Templates)<em>\d+<\/em>/g, '$1')
  /* a screen's sidebar links are drawn, never followed: an <a> with no href inside a screen the reader can click to
     replay reads to crawlers as a link that goes nowhere (Lighthouse crawlable-anchors), so each one is role="none" */
  html = html.replace(/<a( class="[^"]*")?>/g, '<a$1 role="none">')
  /* the jobs that come ready to run are called Recipes (2 Oct): rename them in what a reader sees or hears, never in class
     names; no count of them, and no hyphenated "ready-made" (docs/REBUILD.md, Copy) */
  const recipes = (t) => t.replace(/\bTemplates\b/g, 'Recipes').replace(/\btemplates\b/g, 'recipes').replace(/\bTemplate\b/g, 'Recipe').replace(/\btemplate\b/g, 'recipe').replace(/\b(\d+ )?ready-made recipes\b/g, 'recipes')
  html = html.replace(/>([^<]*)</g, (_, t) => '>' + recipes(t) + '<').replace(/aria-label="([^"]*)"/g, (_, t) => `aria-label="${recipes(t)}"`)
  /* every status mark in a screen uses the final logo's geometry (Brand/Logo/states) */
  html = html
    .replaceAll('viewBox="6 6 88 88"', 'viewBox="2 2 96 96"')
    .replaceAll('d="M88.458 39A40 40 0 1 1 61 11.542V26.442A26 26 0 1 0 73.558 39Z"', 'd="M88.57 39.402A40 40 0 1 1 60.598 11.43V21.668A29.319 30.387 0 1 0 77.478 39.402Z"')
    .replaceAll('d="M61 11.542A40 40 0 0 1 88.458 39H73.558A26 26 0 0 0 61 26.442Z"', 'd="M60.598 11.43A40 40 0 0 1 88.57 39.402H77.478A29.319 30.387 0 0 0 60.598 21.668Z"')
    .replaceAll('d="M66 14h20v20H66Z"', 'd="M65.404 16.011h18.585v18.585h-18.585Z"')
  if (!balanced(html)) {
    console.warn(`  skipped app-${name}: unbalanced markup`)
    continue
  }
  await writeFile(join(out, 'html', `${name}.html`), html + '\n')
  if (existsSync(join(SCREENS, `app-${name}.css`))) await copyFile(join(SCREENS, `app-${name}.css`), join(out, 'css', `${name}.css`))
  kept.push(name)
}
console.log(`Design system: ${DS}\nLogo: ${LOGO}\nScreens (${kept.length}): ${kept.join(', ')}`)

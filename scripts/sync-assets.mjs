/* Pulls the Obsession design system and the final logo into this repo, so the site builds on its own.
   The sources live in the founders' workspace, next to this repo:
     ../Brand/Design System/   tokens.css, motion.css, components/*.css      ->  src/styles/ds/
     ../Brand/Logo/            the final logo (2 Oct 2026)                   ->  public/logo/, public/favicon.svg, src/assets/logo/states/
   Run it after either source changes: node scripts/sync-assets.mjs
   Override the paths with OBS_DS=... and OBS_LOGO=... if the workspace lives elsewhere.
   The app screens are no longer synced (3 Oct 2026): each is a React component in this repo, src/screens/NAME.tsx, with
   its CSS beside it in src/screens/css (converted once from the workspace's _research/illus copies by
   scripts/convert-screens.mjs). Change a screen there. */
import { existsSync } from 'node:fs'
import { copyFile, mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DS = process.env.OBS_DS || resolve(root, '../Brand/Design System')
const LOGO = process.env.OBS_LOGO || resolve(root, '../Brand/Logo')

if (!existsSync(DS) || !existsSync(LOGO)) {
  console.error(`Sources not found:\n  ${DS}\n  ${LOGO}\nThe committed copies in src/ stay as they are.`)
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

console.log(`Design system: ${DS}\nLogo: ${LOGO}`)

/* Copies the pricing source into the site: npm run pricing
   Source: pricing/ in the workspace (override with OBS_PRICING=...), the same pricing.json and engine.js the founders'
   calculator reads. Every price on the site is worked out from these 2 files (content/prices.ts reads the pieces and
   plans, content/blueprint-tiers.ts prices each blueprint's tiers with the engine). Change a number in the workspace,
   run this, then npm run build. The copies in src/lib/pricing/ are committed, so the build never needs the workspace
   (Cloudflare builds this repo alone). */
import { execFileSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const FILES = ['pricing.json', 'engine.js']

/* The repo's main checkout sits in the workspace (web/), so pricing/ is beside it; a worktree may live anywhere, so its
   main checkout is found through git. */
function mainCheckout() {
  try {
    const common = execFileSync('git', ['rev-parse', '--path-format=absolute', '--git-common-dir'], { cwd: root, encoding: 'utf8' }).trim()
    return dirname(common)
  } catch {
    return root
  }
}
const SRC =
  process.env.OBS_PRICING ||
  [join(root, '../pricing'), join(root, '../../pricing'), join(mainCheckout(), '../pricing')].find((p) => FILES.every((f) => existsSync(join(p, f))))

if (!SRC) {
  console.error('sync-pricing: no pricing/ folder with pricing.json and engine.js found next to the repo. Set OBS_PRICING=/path/to/pricing.')
  process.exit(1)
}

const OUT = join(root, 'src/lib/pricing')
await mkdir(OUT, { recursive: true })
for (const f of FILES) await copyFile(join(SRC, f), join(OUT, f))
console.log(`sync-pricing: copied ${FILES.join(' and ')} from ${SRC} into src/lib/pricing/. Run npm run build to check every price.`)

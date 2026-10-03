/* Where the app screens came from: their HTML as it stood in src/screens/html when they were converted to React
   components (commit abd3e3e, 3 Oct 2026). scripts/convert-screens.mjs converted these copies, and
   scripts/check-screens.mjs compares every component's markup with them. Once src/screens/html is gone they are read
   from git at that commit. */
import { execFileSync } from 'node:child_process'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const BASE = 'abd3e3e4366c7b4422123c54988f0436d3343b89'
const DIR = 'src/screens/html'

/* name -> the screen's HTML, from a folder (default: src/screens/html while it exists) or else git at BASE. */
export function originalScreens(from) {
  const dir = from ? resolve(from) : join(root, DIR)
  const out = new Map()
  if (existsSync(dir)) {
    for (const f of readdirSync(dir).filter((f) => f.endsWith('.html')).sort()) out.set(f.slice(0, -5), readFileSync(join(dir, f), 'utf8'))
    return out
  }
  const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', maxBuffer: 64 << 20 })
  for (const path of git('ls-tree', '--name-only', `${BASE}:${DIR}/`).split('\n').filter((f) => f.endsWith('.html')).sort())
    out.set(path.slice(0, -5), git('show', `${BASE}:${DIR}/${path}`))
  return out
}

/* The words a screen drawn for an agency changes in a company's workspace, exactly as components/AppScreen's
   forWorkspace replaced them in the HTML string before the conversion. */
export function forWorkspace(html, workspace) {
  if (workspace === 'agency') return html
  return html.replaceAll('Your agency', 'Your company').replaceAll('Clients', 'Lists').replaceAll('your-agency.example', 'your-company.example')
}

// Tests for the sign-up card's logic (src/lib/setup.ts) against the sheet script (waitlist/Code.js, run in gas.mjs),
// loaded through Vite. No network: fetch is faked, and .env (the live web app) is never read.
// Run: node waitlist/test/setup.test.mjs
import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createServer } from 'vite'
import { makeGas } from './gas.mjs'
const ROOT = new URL('../..', import.meta.url).pathname
const CODE = new URL('../Code.js', import.meta.url).pathname
const posts = []
globalThis.fetch = async (url, init) => {
  if (!String(url).startsWith('http://127.0.0.1:')) throw new Error('blocked: ' + url)
  posts.push(JSON.parse(init.body))
  return { ok: true, json: async () => ({ ok: true, v: 3 }) }
}
process.env.VITE_WAITLIST_URL = 'http://127.0.0.1:1/'
const vite = await createServer({ root: ROOT, configFile: false, envDir: mkdtempSync(join(tmpdir(), 'setup-env-')), logLevel: 'error', server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })
const S = await vite.ssrLoadModule('/src/lib/setup.ts')
const Cat = await vite.ssrLoadModule('/src/content/catalog.ts')
const wait = (ms) => new Promise((r) => setTimeout(r, ms))
let n = 0
const t = async (name, fn) => { try { await fn(); n++; console.log('ok', name) } catch (e) { console.log('FAIL', name, '\n', e.stack); process.exitCode = 1 } }

const start = (over = {}) => ({ sid: '3f6c0a1e-1234-4abc-9def-0123456789ab', email: 'maya@northwind-labs.co.uk', t: Date.now(), preview: false, script: 3, page: '/', source: 'home-hero', interest: 'any', ...over })
const run = async (g, steps) => {
  for (const [p, step] of steps) { if (p) S.patch(p); S.go(step); await wait(20) }
  await wait(40)
  for (const p of posts) g.post(p)
  const rows = g.table()
  assert.equal(rows.length, 1)
  return rows[0]
}

await t('the page picks the starting answer', () => {
  assert.equal(S.doorOf('/developers', 'any'), 'build')
  assert.equal(S.doorOf('/email', 'any'), 'build')
  assert.equal(S.doorOf('/blueprints/buy-book-and-order', 'any'), 'blueprint')
  const bp = Cat.catalog.recipes[0]
  assert.equal(S.doorOf(`/blueprints/${bp.slug}`, bp.id), 'blueprint')
  assert.equal(S.doorOf('/no-code', 'any'), '')
  assert.equal(S.doorOf('/', 'any'), '')
})

await t('build with the API: pieces in Start with, the job in Use case, every column filled', async () => {
  posts.length = 0
  const g = makeGas(CODE)
  g.post({ email: 'maya@northwind-labs.co.uk', sid: start().sid, step: '1', source: 'piece-email', page: '/email', interest: 'any', offer: 'build' })
  S.begin(start({ page: '/email', source: 'piece-email' }))
  assert.deepEqual(S.setupStore.get().pieces, ['email'])
  assert.equal(S.setupStore.get().door, 'build')
  const row = await run(g, [
    [null, 'need'],
    [{ pieces: ['email', 'browser'], use: 'Sign up to 200 trials a month' }, 'about'],
    [{ name: 'Maya Patel', size: '11 to 50' }, 'done'],
  ])
  assert.equal(row.Name, 'Maya Patel'); assert.equal(row.Company, 'Northwind Labs'); assert.equal(row.Website, 'northwind-labs.co.uk')
  assert.equal(row.Reader, 'Build with the API'); assert.equal(row.Offer, 'build')
  assert.equal(row['Start with'], 'Email, Browser'); assert.equal(row['Use case'], 'Sign up to 200 trials a month')
  assert.equal(row['Job detail'], 'Team size: 11 to 50'); assert.equal(row['Step reached'], '9 Done')
})

await t('run a blueprint: blueprints in Recipes, destinations in Results to', async () => {
  posts.length = 0
  const g = makeGas(CODE)
  const bp = Cat.catalog.recipes.find((r) => r.slug === 'missed-call-text-back')
  g.post({ email: 'maya@northwind-labs.co.uk', sid: start().sid, step: '1', source: 'recipe-hero', page: `/blueprints/${bp.slug}`, interest: bp.id, offer: 'blueprint' })
  S.begin(start({ page: `/blueprints/${bp.slug}`, source: 'recipe-hero', interest: bp.id }))
  assert.deepEqual(S.setupStore.get().blueprints, [bp.id])
  const row = await run(g, [
    [null, 'need'],
    [{ dest: ['Slack', 'Google Sheets'] }, 'about'],
    [{ name: 'Maya Patel' }, 'done'],
  ])
  assert.equal(row.Reader, 'Run a blueprint'); assert.equal(row.Offer, 'blueprint')
  assert.equal(row.Recipes, bp.name); assert.equal(row['Results to'], 'Slack, Google Sheets'); assert.equal(row['Start with'], '')
})

await t('connect our AI: tools in Start with, the first job in Use case', async () => {
  posts.length = 0
  const g = makeGas(CODE)
  g.post({ email: 'maya@northwind-labs.co.uk', sid: start().sid, step: '1', source: 'no-code', page: '/no-code', interest: 'any', offer: 'none' })
  S.begin(start({ page: '/no-code', source: 'no-code' }))
  assert.equal(S.setupStore.get().door, '')
  const row = await run(g, [
    [{ door: 'connect' }, 'need'],
    [{ tools: ['Claude', 'Zapier'], use: 'Call suppliers to confirm deliveries' }, 'about'],
    [{ name: 'Maya Patel' }, 'done'],
  ])
  assert.equal(row.Reader, 'Connect our AI'); assert.equal(row.Offer, 'connect')
  assert.equal(row['Start with'], 'Claude, Zapier'); assert.equal(row['Use case'], 'Call suppliers to confirm deliveries')
})

await t('a version 2 script keeps the answers in the columns it has', () => {
  const s = { ...S.setupStore.get(), script: 2 }
  const snap = S.snapshotOf(s)
  assert.ok(!('start_with' in snap)); assert.match(snap.job_detail, /Start with: Claude, Zapier/); assert.equal(snap.note, 'Call suppliers to confirm deliveries')
})

console.log(`${n} passed`)
await vite.close()

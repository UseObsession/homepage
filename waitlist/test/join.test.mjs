// Tests for the waitlist card's logic (src/lib/join.ts) against the sheet script (waitlist/Code.js, run in gas.mjs),
// loaded through Vite. No network: fetch is faked, and .env (the live web app) is never read.
// Run: node waitlist/test/join.test.mjs
import assert from 'node:assert/strict'
import { mkdtempSync, readdirSync } from 'node:fs'
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
const vite = await createServer({ root: ROOT, configFile: false, envDir: mkdtempSync(join(tmpdir(), 'join-env-')), logLevel: 'error', server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })
const J = await vite.ssrLoadModule('/src/lib/join.ts')
const Copy = await vite.ssrLoadModule('/src/content/join.ts')
const Reg = await vite.ssrLoadModule('/src/content/registry.ts')
const pageModules = await Promise.all(readdirSync(join(ROOT, 'src/content/pages')).filter((f) => f.endsWith('.ts')).map((f) => vite.ssrLoadModule(`/src/content/pages/${f}`)))
const Site = await vite.ssrLoadModule('/src/content/site.ts')
const wait = (ms) => new Promise((r) => setTimeout(r, ms))
let n = 0
const t = async (name, fn) => { try { await fn(); n++; console.log('ok', name) } catch (e) { console.log('FAIL', name, '\n', e.stack); process.exitCode = 1 } }

/* Every form on the site, with the page it's on (a page's meta.path, or a recipe's or use case's own address). */
const forms = []
{
  const seen = new Set()
  const walk = (o, path) => {
    if (!o || typeof o !== 'object' || seen.has(o)) return
    seen.add(o)
    const here = (o.meta && o.meta.path) || (o.slug && o.group ? `/recipes/${o.slug}` : path)
    if (o.kind && o.source && o.button) forms.push({ capture: o, path: here })
    for (const v of Object.values(o)) walk(v, here)
  }
  walk(Reg, '/')
  for (const m of pageModules) walk(m, '/')
  walk(Site, '/')
}

const base = (over = {}) => ({ sid: '3f6c0a1e-1234-4abc-9def-0123456789ab', email: 'maya@northwind-labs.co.uk', t: Date.now(), preview: false, script: 3, page: '/', source: 'home-hero', interest: 'any', offer: 'any', free: false, ...over })

await t('every form on the site is the waitlist, and says so under it', () => {
  assert.ok(forms.length >= 60, `found ${forms.length} forms`)
  for (const f of forms) {
    const { offer, free } = J.offerOf(f.capture, f.path)
    assert.ok(Copy.offers[offer], `${f.capture.source}: no offer ${offer}`)
    assert.match(J.microOf(offer, free), /waitlist/i, `${f.capture.source}: its line doesn't say waitlist`)
    if (f.capture.kind !== 'waitlist') assert.ok(free, `${f.capture.source}: a free check form that isn't free`)
  }
})

await t('each form gets the offer its page makes', () => {
  const at = (source) => forms.find((f) => f.capture.source === source)
  const offer = (source) => { const f = at(source); assert.ok(f, source); const o = J.offerOf(f.capture, f.path); return `${o.offer}${o.free ? ' free' : ''}` }
  assert.equal(offer('usecase-leaks-hero'), 'clients free')
  assert.equal(offer('agencies-final'), 'clients free')
  assert.equal(offer('agencies-hero'), 'clients')
  assert.equal(offer('usecase-store-leaks-hero'), 'store free')
  assert.equal(offer('recipe-mystery-hero'), 'store free')
  assert.equal(offer('verify-hero'), 'agents free')
  assert.equal(offer('recipe-support-bot-hero'), 'agents free')
  assert.equal(offer('recipe-competitor-hero'), 'companies')
  assert.equal(offer('sales-hero'), 'companies')
  assert.equal(offer('recipe-delivery-monitoring-hero'), 'own')
  assert.equal(offer('developers-hero'), 'api')
  assert.equal(offer('home-hero'), 'any')
})

await t('the page picks who they probably are, and the brands question follows the answer', () => {
  assert.equal(J.roleOf('clients', '/use-cases/leak-checks-for-retention-agencies'), 'agency')
  assert.equal(J.roleOf('any', '/marketing'), 'marketing')
  assert.equal(J.roleOf('companies', '/sales'), 'sales')
  assert.equal(J.roleOf('api', '/developers'), 'developer')
  assert.equal(J.roleOf('store', '/recipes/mystery-shopper'), 'brand')
  assert.equal(J.roleOf('any', '/'), '')
  // A free check keeps the page's promise whoever they are
  assert.equal(J.askOf({ offer: 'store', free: true, role: 'agency' }), 'store')
  assert.equal(J.askOf({ offer: 'agents', free: true, role: 'brand' }), 'agents')
  // Without one, who they are decides
  assert.equal(J.askOf({ offer: 'any', free: false, role: 'agency' }), 'clients')
  assert.equal(J.askOf({ offer: 'any', free: false, role: 'brand' }), 'own')
  assert.equal(J.askOf({ offer: 'any', free: false, role: 'sales' }), 'accounts')
  assert.equal(J.askOf({ offer: 'any', free: false, role: 'marketing' }), 'companies')
  assert.equal(J.askOf({ offer: 'any', free: false, role: 'developer' }), 'api')
  assert.equal(J.askOf({ offer: 'companies', free: false, role: 'other' }), 'companies')
  assert.equal(J.siteFromEmail('maya@northwind-labs.co.uk'), 'northwind-labs.co.uk')
  assert.equal(J.siteFromEmail('maya@gmail.com'), '')
})

await t('routing: a developer, or "something else" with nothing to check, skips the brands question', () => {
  const route = (offer, free, role) => J.stepsOf({ offer, free, role }).join(' > ')
  assert.equal(route('api', false, 'developer'), 'role > about > recipes')
  assert.equal(route('any', false, 'other'), 'role > about > recipes')
  assert.equal(route('companies', false, 'other'), 'role > about > brands > recipes')
  assert.equal(route('any', false, 'sales'), 'role > about > brands > recipes')
  // A free check or an AI agent page always asks, whoever they are
  assert.equal(route('store', true, 'developer'), 'role > about > brands > recipes')
  assert.equal(route('agents', false, 'developer'), 'role > about > brands > recipes')
  assert.equal(J.stepAfter({ offer: 'api', free: false, role: 'developer' }, 'about', 1), 'recipes')
  assert.equal(J.stepAfter({ offer: 'api', free: false, role: 'developer' }, 'recipes', -1), 'about')
  assert.equal(J.stepAfter({ offer: 'any', free: false, role: 'brand' }, 'recipes', 1), 'done')
})

await t('suggestions: by agency type, else by role, every one a real recipe', () => {
  for (const [k, ids] of Object.entries(Copy.suggested)) for (const id of ids) assert.ok(J.recipeOf(id).length, `${k}: ${id} is not a recipe`)
  assert.deepEqual(J.suggestionsOf({ role: 'agency', agencyType: 'Performance and paid media' }), ['adcheck', 'ads', 'competitor'])
  assert.deepEqual(J.suggestionsOf({ role: 'agency', agencyType: 'Something else' }), ['mystery', 'email-sms', 'competitor'])
  assert.deepEqual(J.suggestionsOf({ role: 'sales', agencyType: '' }), ['prospect', 'account-watch', 'speed'])
  assert.deepEqual(J.suggestionsOf({ role: '', agencyType: '' }), [])
})

await t('the company comes from a work email, never a free one', () => {
  assert.equal(J.companyFromEmail('maya@northwind-labs.co.uk'), 'Northwind Labs')
  assert.equal(J.companyFromEmail('sam@acme.com'), 'Acme')
  assert.equal(J.companyFromEmail('sam@gmail.com'), '')
})

await t('brands: an address or nothing; an AI agent may be a phone number', () => {
  assert.ok(J.brandOk('clients', ''))
  assert.ok(J.brandOk('clients', 'https://www.fernhollow.example/shop'))
  assert.ok(!J.brandOk('clients', 'not a store'))
  assert.ok(J.brandOk('agents', '+44 20 7946 0000'))
  assert.ok(!J.brandOk('companies', '+44 20 7946 0000'))
  assert.deepEqual(J.cleanBrands({ brands: [' https://www.Fernhollow.example/shop ', '', 'wrenfield.example'] }), ['fernhollow.example', 'wrenfield.example'])
})

await t('the page’s recipe is ticked to start with', () => {
  const snap = J.snapshotOf({ ...base({ interest: 'competitor' }), step: 'about', role: '', agencyType: '', agencyClients: '', teamSize: '', name: '', company: 'Northwind Labs', site: '', brands: [''], recipes: J.recipeOf('competitor'), useCase: '', v: 1 })
  assert.equal(snap.recipes, 'Competitor tracking')
  assert.deepEqual(J.recipeOf('any'), [])
})

await t('a version 3 script gets its own columns; a version 2 script gets the old ones', () => {
  const s = { ...base({ offer: 'clients', free: true }), v: 1, step: 'done', role: 'agency', agencyType: 'Retention, email and SMS', agencyClients: '6 to 20', teamSize: '2 to 10', name: 'Maya Patel', company: 'Northwind Labs', site: 'https://www.northwind-labs.co.uk/', brands: ['fernhollow.example', 'https://wrenfield.example/'], recipes: ['mystery', 'email-sms'], useCase: 'Week 1 of 3 rivals' }
  const v3 = J.snapshotOf(s)
  assert.equal(v3.step, '9'); assert.equal(v3.offer, 'clients (free check)'); assert.equal(v3.brands, 'fernhollow.example, wrenfield.example')
  assert.equal(v3.reader, 'Agency'); assert.equal(v3.agency_type, 'Retention, email and SMS'); assert.equal(v3.site, 'northwind-labs.co.uk')
  // Only the size that fits who they are is sent
  assert.equal(v3.agency_clients, '6 to 20'); assert.equal(v3.sales_team, '')
  assert.equal(v3.recipes, 'Mystery shopper, Email and SMS tracking'); assert.equal(v3.use_case, 'Week 1 of 3 rivals')
  const v2 = J.snapshotOf({ ...s, script: 2 })
  assert.equal(v2.store, 'fernhollow.example, wrenfield.example'); assert.equal(v2.first_job, 'Mystery shopper, Email and SMS tracking'); assert.equal(v2.note, 'Week 1 of 3 rivals')
  assert.ok(!('brands' in v2) && !('recipes' in v2))
  assert.equal(v2.reader, 'Agency'); assert.equal(v2.job_detail, 'Agency type: Retention, email and SMS; Website: northwind-labs.co.uk')
  const agents = J.snapshotOf({ ...s, script: 2, offer: 'agents', brands: ['+44 20 7946 0000'] })
  assert.equal(agents.agent, '+44 20 7946 0000')
})

await t('the whole card, end to end into the sheet script: 1 row, every column, a finished alert', async () => {
  posts.length = 0
  const g = makeGas(CODE)
  const email = 'maya@northwind-labs.co.uk'
  // Step 1 is CaptureForm's own post
  g.post({ email, sid: base().sid, step: '1', source: 'usecase-leaks-hero', page: '/use-cases/leak-checks-for-retention-agencies', interest: 'mystery', offer: 'clients (free check)' })
  J.begin(base({ source: 'usecase-leaks-hero', page: '/use-cases/leak-checks-for-retention-agencies', interest: 'mystery', offer: 'clients', free: true }))
  J.patch({ agencyType: 'Retention, email and SMS', agencyClients: '6 to 20' }); J.go('about'); await wait(20)
  J.patch({ name: 'Maya Patel' }); J.go('brands'); await wait(20)
  J.patch({ brands: ['fernhollow.example', 'wrenfield.example'] }); J.go('recipes'); await wait(20)
  J.patch({ recipes: ['mystery', 'email-sms'], useCase: 'What 3 rivals send in week 1' }); J.go('done'); await wait(50)
  assert.ok(posts.length >= 1, 'nothing was sent')
  for (const p of posts) g.post(p)
  const rows = g.table()
  assert.equal(rows.length, 1)
  const [row] = rows
  assert.equal(row.Name, 'Maya Patel'); assert.equal(row.Company, 'Northwind Labs'); assert.equal(row.Offer, 'clients (free check)')
  assert.equal(row.Reader, 'Agency'); assert.equal(row['Agency type'], 'Retention, email and SMS'); assert.equal(row.Website, 'northwind-labs.co.uk')
  assert.equal(row['Agency: clients'], '6 to 20')
  assert.equal(row['Brands to check'], 'fernhollow.example, wrenfield.example'); assert.equal(row.Recipes, 'Mystery shopper, Email and SMS tracking')
  assert.equal(row['Use case'], 'What 3 rivals send in week 1'); assert.equal(row['Step reached'], '9 Done')
  assert.ok(g.mail.some((m) => /^Answers: Maya Patel, Northwind Labs\. clients \(free check\): Mystery shopper and 1 more$/.test(m.subject)))
})

await t('a developer goes straight from details to recipes, and no brands are sent', async () => {
  posts.length = 0
  const g = makeGas(CODE)
  const sid = 'aaaaaaaa-1234-4abc-9def-0123456789ab'
  g.post({ email: 'dev@acme.com', sid, step: '1', source: 'developers-hero', page: '/developers', offer: 'api' })
  J.begin(base({ sid, email: 'dev@acme.com', source: 'developers-hero', page: '/developers', interest: 'any', offer: 'api' }))
  J.go('about'); await wait(20)
  J.patch({ name: 'Dee Okoro' }); J.go(J.stepAfter({ offer: 'api', free: false, role: 'developer' }, 'about', 1)); await wait(20)
  J.patch({ recipes: ['support-bot'], useCase: 'An agent that checks our own support bot nightly' }); J.go('done'); await wait(50)
  for (const p of posts) g.post(p)
  const [row] = g.table()
  assert.equal(row.Reader, 'Developer'); assert.equal(row.Company, 'Acme'); assert.equal(row.Website, 'acme.com')
  assert.equal(row['Brands to check'], ''); assert.equal(row.Recipes, 'Support bot check'); assert.equal(row['Step reached'], '9 Done')
})

await vite.close()
console.log(`${n} passed`)

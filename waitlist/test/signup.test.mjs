// Tests for src/lib/signup.ts and the queue in src/lib/waitlist.ts, loaded through Vite. No network: fetch is faked,
// and .env (the live web app) is never read. Run: node waitlist/test/signup.test.mjs
import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createServer } from 'vite'
const ROOT = new URL('../..', import.meta.url).pathname
const posts = []
globalThis.fetch = async (url, init) => {
  if (!String(url).startsWith('http://127.0.0.1:')) throw new Error('blocked: ' + url)
  posts.push(JSON.parse(init.body))
  return { ok: true, json: async () => ({ ok: true }) }
}
process.env.VITE_WAITLIST_URL = 'http://127.0.0.1:1/'
const vite = await createServer({ root: ROOT, configFile: false, envDir: mkdtempSync(join(tmpdir(), 'signup-env-')), logLevel: 'error', server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })
const L = await vite.ssrLoadModule('/src/lib/signup.ts')
const W = await vite.ssrLoadModule('/src/lib/waitlist.ts')
const C = await vite.ssrLoadModule('/src/content/signup.ts')
const wait = (ms) => new Promise((r) => setTimeout(r, ms))
let n = 0
const t = async (name, fn) => { try { await fn(); n++; console.log('ok', name) } catch (e) { console.log('FAIL', name, '\n', e.stack); process.exitCode = 1 } }
const ctx = (over = {}) => ({ page: '/', source: 'home-hero', kind: 'waitlist', interest: 'any', ...over })
const startWith = (email, c) => { const d = L.draft(email, c); L.start(d, 'me', false); return L.getSignup() }
const pickFirst = (id, optId) => { L.setAnswer(id, { picked: [optId] }); L.complete(id, false, 'me') }

await t('company from the email', () => {
  assert.equal(L.companyFromEmail('maya@northwind-labs.co.uk'), 'Northwind Labs')
  assert.equal(L.companyFromEmail('a@acme.io'), 'Acme')
  assert.equal(L.companyFromEmail('a@mail.acme.com'), 'Acme')
  assert.equal(L.companyFromEmail('a@gmail.com'), '')
  assert.equal(L.companyFromEmail('a@yahoo.co.uk'), '')
  assert.equal(L.companyFromEmail('a@pm.me'), '')
  assert.equal(L.companyFromEmail('a@outlook.com'), '')
  assert.equal(L.companyFromEmail('a@harbour_coffee.com.au'), 'Harbour Coffee')
})

await t('every option is 32 characters or fewer, ids unique, keys known', () => {
  const keys = new Set(['first_job','job_detail','results','agency_clients','agency_last_check','founder_sells','founder_last_week','sales_team','sales_last_slip','marketing_markets','marketing_last_break','developer_for','developer_last_used','other_last_week'])
  for (const r of Object.values(C.readers)) {
    const qids = new Set()
    for (const q of r.questions) {
      assert.ok(!qids.has(q.id), q.id); qids.add(q.id)
      assert.ok(keys.has(q.key), q.key)
      assert.ok(q.options.length >= 3 && q.options.length <= 6, q.id + ' has ' + q.options.length)
      const ids = new Set()
      for (const o of q.options) { assert.ok(o.label.length <= 32, `${q.id}: "${o.label}" is ${o.label.length}`); assert.ok(!ids.has(o.id), o.id); ids.add(o.id) }
      if (q.key === 'first_job') for (const o of q.options) if (!o.other) assert.ok(o.for && o.run, q.id + ' ' + o.id + ' lacks for/run')
    }
    assert.ok(r.note)
  }
})

await t('home: 8 squares; reader asked; agency flow; call first; suggested; next step', async () => {
  posts.length = 0
  const s = startWith('maya@northwind-labs.co.uk', ctx())
  assert.equal(s.company, 'Northwind Labs'); assert.ok(s.companyFilled); assert.equal(s.current, 'name')
  assert.equal(L.flowOf(s).length, 8)
  L.setText('name', 'Maya Okafor'); L.complete('name', false, 'me')
  assert.equal(L.getSignup().current, 'reader')
  pickFirst('reader', 'agency')
  let g = L.getSignup()
  assert.equal(g.reader, 'agency'); assert.equal(g.readerFrom, 'Asked'); assert.equal(g.current, 'A1')
  pickFirst('A1', 'pitch'); pickFirst('A2', 'c16')
  g = L.getSignup(); assert.equal(g.current, 'A3')
  assert.equal(L.resultsHelper(g), 'For pitch packs. Pick any.')
  L.setAnswer('A3', { picked: ['slack', 'a-pdf-or-link-for-clients'] }); L.complete('A3', false, 'me')
  pickFirst('A4', 'day')
  g = L.getSignup(); assert.equal(g.current, 'note')
  assert.deepEqual(L.callFirst(g), { reason: 'Yes: 16 to 40 clients, a day or more for the last check', open: 'Walk me through that last check. What did you do with it?' })
  L.complete('note', true, 'me')
  g = L.getSignup(); assert.equal(g.current, 'thanks'); assert.ok(g.done)
  assert.equal(L.nextStepFor(g), 'agencyShop')
  const snap = L.snapshot(g)
  assert.equal(snap.step, '9'); assert.equal(snap.name, 'Maya Okafor'); assert.equal(snap.company, 'Northwind Labs')
  assert.equal(snap.reader, 'Agency'); assert.equal(snap.reader_from, 'Asked'); assert.equal(snap.first_job, 'Pitch packs on prospects')
  assert.equal(snap.agency_clients, '16 to 40'); assert.equal(snap.results, 'Slack, A PDF or link for clients'); assert.equal(snap.agency_last_check, 'A day or more')
  assert.equal(snap.note, 'Skipped'); assert.equal(snap.founder_sells, ''); assert.match(snap.suggested, /^Prospect intelligence/)
  assert.equal(snap.call_first, 'Yes: 16 to 40 clients, a day or more for the last check')
  await wait(50)
  assert.ok(posts.length >= 1); assert.equal(posts.at(-1).step, '9'); assert.equal(posts.at(-1).sid, g.sid)
})

await t('reader page: no reader step, 7 squares, Change adds it and clears the old reader columns', () => {
  const s = startWith('sam@lumen.app', ctx({ page: '/agencies', source: 'agencies-hero', pageReader: 'agency' }))
  assert.equal(L.flowOf(s).length, 7); assert.equal(s.reader, 'agency'); assert.equal(s.readerFrom, 'Page')
  L.complete('name', true, 'me')
  pickFirst('A1', 'rivals'); pickFirst('A2', 'c1')
  L.changeReader('me')
  let g = L.getSignup(); assert.equal(g.current, 'reader'); assert.deepEqual(g.answers.reader.picked, ['agency']); assert.equal(L.flowOf(g).length, 8)
  pickFirst('reader', 'founder')
  g = L.getSignup(); assert.equal(g.reader, 'founder'); assert.equal(g.readerFrom, 'Changed'); assert.equal(g.current, 'F1')
  const snap = L.snapshot(g)
  assert.equal(snap.agency_clients, ''); assert.equal(snap.first_job, ''); assert.equal(snap.reader, 'Founder'); assert.equal(snap.name, 'Skipped')
})

await t('Something else reader: 3 questions, role kept, multi with None of these', () => {
  startWith('o@ops.example', ctx())
  L.complete('name', false, 'me')
  L.setAnswer('reader', { picked: ['other'] }); L.setText('readerOther', 'Operations lead'); L.complete('reader', false, 'me')
  let g = L.getSignup(); assert.equal(g.reader, 'other'); assert.equal(L.flowOf(g).length, 7); assert.equal(g.current, 'G1')
  L.setAnswer('G1', { picked: ['other'], other: 'Supplier audits' }); L.complete('G1', false, 'me')
  L.complete('G2', false, 'me')
  L.setAnswer('G3', { picked: ['company', 'rival', 'chased'] }); L.complete('G3', false, 'me')
  g = L.getSignup()
  const snap = L.snapshot(g)
  assert.equal(snap.other_role, 'Operations lead'); assert.equal(snap.first_job, 'Something else: Supplier audits'); assert.equal(snap.results, 'Skipped')
  assert.equal(snap.other_last_week, 'Researched a company, Checked a rival, Chased a payment or supplier')
  assert.equal(snap.call_first, 'Yes: 3 of these by hand last week')
  assert.equal(L.nextStepFor(g), 'company')
  assert.equal(snap.name, ''); assert.equal(snap.company, 'Ops') // the company was filled in from the email
})

await t('name step: Next with both fields empty counts as Skip', () => {
  startWith('x@gmail.com', ctx())
  assert.equal(L.getSignup().company, '')
  L.complete('name', false, 'me')
  assert.equal(L.getSignup().marks.name, 'skipped'); assert.equal(L.snapshot(L.getSignup()).name, 'Skipped')
})

await t('skipped reader: generic questions, reader "Skipped"', () => {
  startWith('x@y.example', ctx())
  L.complete('name', true, 'me'); L.complete('reader', true, 'me')
  const g = L.getSignup(); assert.equal(g.current, 'G1'); assert.equal(L.snapshot(g).reader, 'Skipped')
})

await t('free mystery shop: whose store replaces the first job; report link; ready to start', () => {
  const s = startWith('m@shop.example', ctx({ page: '/agencies', source: 'agencies-final', kind: 'mystery', interest: 'mystery', store: 'https://www.client-store.example/', pageReader: 'agency' }))
  const flow = L.flowOf(s).map((x) => x.id)
  assert.deepEqual(flow, ['email', 'name', 'mystery', 'A2', 'A3', 'A4', 'note'])
  L.complete('name', true, 'me'); pickFirst('mystery', 'client')
  const g = L.getSignup(); const snap = L.snapshot(g)
  assert.equal(snap.first_job, 'Free mystery shop'); assert.equal(snap.job_detail, 'Whose store is it? A client’s, with their OK')
  assert.equal(snap.store, 'https://www.client-store.example/'); assert.match(snap.suggested, /client-store\.example/)
  assert.equal(snap.call_first, 'Yes: a free mystery shop is ready to start')
  assert.equal(L.resultsHelper(g), 'For your free mystery shop. Pick any.')
  assert.equal(L.nextStepFor(g), 'report')
})

await t('free check on /sample-output-like page: no next step link to itself', () => {
  const s = startWith('m@shop.example', ctx({ page: '/sample-output', kind: 'mystery', store: 'a-store.example' }))
  assert.equal(L.nextStepFor(s), null)
})

await t('recipe page: its own question replaces the first job; "What’s your role?" is never asked', () => {
  startWith('r@r.example', ctx({ page: '/recipes/prospect-intelligence', recipe: { name: 'Prospect intelligence', question: { question: 'Who are your prospects?', options: ['Stores and consumer brands', 'Software companies', 'Something else'] } } }))
  L.complete('name', true, 'me'); pickFirst('reader', 'sales')
  let g = L.getSignup(); assert.deepEqual(L.flowOf(g).map((x) => x.id), ['email', 'name', 'reader', 'recipe', 'S2', 'S3', 'S4', 'note'])
  pickFirst('recipe', 'o2')
  g = L.getSignup(); const snap = L.snapshot(g)
  assert.equal(snap.first_job, 'Prospect intelligence'); assert.equal(snap.job_detail, 'Who are your prospects? Software companies')
  assert.equal(L.nextStepFor(g), 'account')
  startWith('r@r.example', ctx({ page: '/recipes/get-paid', recipe: { name: 'Get paid', question: { question: 'What’s your role?', options: ['Founder or owner', 'Finance'] } } }))
  L.complete('name', true, 'me'); pickFirst('reader', 'founder')
  assert.deepEqual(L.flowOf(L.getSignup()).map((x) => x.id), ['email', 'name', 'reader', 'F2', 'F3', 'F4', 'note'])
  assert.equal(L.snapshot(L.getSignup()).first_job, 'Get paid')
})

await t('next step rules: AI agent check first job, a store founder, developer, marketing', () => {
  startWith('f@f.example', ctx({ page: '/founders', pageReader: 'founder' }))
  L.complete('name', true, 'me'); pickFirst('F1', 'agents')
  assert.equal(L.nextStepFor(L.getSignup()), 'verify'); assert.equal(L.callFirst(L.getSignup()).reason, 'Yes: their first job is an AI agent check')
  startWith('f@f.example', ctx({ page: '/founders', pageReader: 'founder' }))
  L.complete('name', true, 'me'); pickFirst('F1', 'find'); pickFirst('F2', 'store')
  assert.equal(L.nextStepFor(L.getSignup()), 'shop')
  startWith('d@d.example', ctx({ page: '/developers', pageReader: 'developer' }))
  assert.equal(L.nextStepFor(L.getSignup()), 'developer')
  startWith('k@k.example', ctx({ page: '/marketing', pageReader: 'marketing' }))
  assert.equal(L.nextStepFor(L.getSignup()), 'rival')
  L.complete('name', true, 'me'); pickFirst('M1', 'ai'); pickFirst('M2', 'store')
  assert.equal(L.nextStepFor(L.getSignup()), 'shop')
})

await t('Back then answer returns to the first unanswered step; Change from thanks returns to thanks', () => {
  startWith('s@s.example', ctx({ page: '/sales', pageReader: 'sales' }))
  L.complete('name', true, 'me'); pickFirst('S1', 'briefs'); pickFirst('S2', 't6')
  L.go('S1', 'me'); pickFirst('S1', 'renewals')
  assert.equal(L.getSignup().current, 'S3')
  L.complete('S3', true, 'me'); pickFirst('S4', 'gone'); L.complete('note', false, 'me')
  let g = L.getSignup(); assert.equal(g.current, 'thanks'); assert.equal(L.snapshot(g).note, 'Skipped')
  assert.equal(L.callFirst(g).reason, 'Yes: a team of 6 to 20, the last slip seen after it was gone')
  L.go('S2', 'me', true); pickFirst('S2', 'me')
  g = L.getSignup(); assert.equal(g.current, 'thanks'); assert.equal(L.callFirst(g), null); assert.equal(L.snapshot(g).call_first, 'No')
})

await t('the reached step only moves forward', () => {
  startWith('s@s.example', ctx({ page: '/sales', pageReader: 'sales' }))
  L.complete('name', true, 'me'); pickFirst('S1', 'briefs'); pickFirst('S2', 't6')
  assert.equal(L.getSignup().reached, 5)
  L.go('S1', 'me'); pickFirst('S1', 'grow')
  assert.equal(L.getSignup().reached, 5); assert.equal(L.snapshot(L.getSignup()).step, '5')
})

await t('lower keeps acronyms', () => {
  assert.equal(L.lower('AI agent checks'), 'AI agent checks'); assert.equal(L.lower('Pitch packs'), 'pitch packs'); assert.equal(L.lower('A day or more'), 'a day or more')
})

await t('queue: newest snapshot wins, 1 in flight', async () => {
  await wait(50); posts.length = 0
  W.queueSnapshot({ sid: 'x', email: 'a@b.co', step: '2' })
  W.queueSnapshot({ sid: 'x', email: 'a@b.co', step: '4' })
  W.queueSnapshot({ sid: 'x', email: 'a@b.co', step: '5' })
  await wait(50)
  assert.deepEqual(posts.map((p) => p.step), ['2', '5'])
  assert.equal(W.saveStatus.get(), 'idle')
})

await t('queue: 3 failed tries then failed; retry sends it', async () => {
  const real = globalThis.fetch
  let calls = 0
  globalThis.fetch = async () => { calls++; throw new Error('down') }
  W.queueSnapshot({ sid: 'y', email: 'a@b.co', step: '6' })
  await wait(1200 + 2400 + 300)
  assert.equal(calls, 3); assert.equal(W.saveStatus.get(), 'failed'); assert.ok(W.hasUnsent())
  globalThis.fetch = real; posts.length = 0
  W.retrySnapshot(); await wait(50)
  assert.equal(posts.at(-1).step, '6'); assert.equal(W.saveStatus.get(), 'idle'); assert.ok(!W.hasUnsent())
})

console.log(n, 'passed')
await vite.close()

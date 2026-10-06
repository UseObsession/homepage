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
// A tab's sessionStorage, so a reload can be played (resume)
const store = new Map()
globalThis.sessionStorage = { getItem: (k) => store.get(k) ?? null, setItem: (k, v) => store.set(k, String(v)), removeItem: (k) => store.delete(k) }
const vite = await createServer({ root: ROOT, configFile: false, envDir: mkdtempSync(join(tmpdir(), 'signup-env-')), logLevel: 'error', server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' })
const L = await vite.ssrLoadModule('/src/lib/signup.ts')
const St = await vite.ssrLoadModule('/src/lib/signupStore.ts')
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

await t('home: 8 squares, the 1 tap questions first; agency flow; call first; suggested; next step', async () => {
  posts.length = 0
  const s = startWith('maya@northwind-labs.co.uk', ctx())
  assert.equal(s.company, 'Northwind Labs'); assert.ok(s.companyFilled); assert.equal(s.current, 'reader')
  assert.deepEqual(L.flowOf(s).map((x) => x.id), ['email', 'reader', 'A1', 'A2', 'A3', 'A4', 'name', 'note'])
  // the company from the email is in every post from the start
  assert.equal(L.snapshot(s).company, 'Northwind Labs'); assert.equal(L.snapshot(s).call_first, '')
  pickFirst('reader', 'agency')
  let g = L.getSignup()
  assert.equal(g.reader, 'agency'); assert.equal(g.readerFrom, 'Asked'); assert.equal(g.current, 'A1'); assert.equal(g.reached, 2)
  assert.deepEqual(L.flowOf(g).map((x) => x.id), ['email', 'reader', 'A1', 'A2', 'A3', 'A4', 'name', 'note'])
  assert.equal(L.questionText(L.flowOf(g)[3].q, g.company), 'How many clients does Northwind Labs look after?')
  pickFirst('A1', 'pitch'); pickFirst('A2', 'c16')
  g = L.getSignup(); assert.equal(g.current, 'A3')
  assert.equal(L.resultsHelper(g), 'For pitch packs.')
  assert.ok(!L.flowOf(g)[4].q.multi, 'results is 1 pick'); assert.equal(L.flowOf(g)[4].q.question, 'Where should results land first?')
  pickFirst('A3', 'slack')
  pickFirst('A4', 'day')
  g = L.getSignup(); assert.equal(g.current, 'name'); assert.equal(L.snapshot(g).step, '6')
  assert.deepEqual(L.callFirst(g), { reason: 'Yes: 16 to 40 clients, a day or more for the last check', open: 'Walk me through that last check. What did you do with it?' })
  L.setText('name', 'Maya Okafor'); L.complete('name', false, 'me')
  g = L.getSignup(); assert.equal(g.current, 'note'); assert.equal(g.reached, 7)
  L.complete('note', true, 'me')
  g = L.getSignup(); assert.equal(g.current, 'thanks'); assert.ok(g.done)
  assert.equal(L.nextStepFor(g), 'agencyShop')
  const snap = L.snapshot(g)
  assert.equal(snap.step, '9'); assert.equal(snap.name, 'Maya Okafor'); assert.equal(snap.company, 'Northwind Labs')
  assert.equal(snap.reader, 'Agency'); assert.equal(snap.reader_from, 'Asked'); assert.equal(snap.first_job, 'Pitch packs on prospects')
  assert.equal(snap.agency_clients, '16 to 40'); assert.equal(snap.results, 'Slack'); assert.equal(snap.agency_last_check, 'A day or more')
  assert.equal(snap.note, 'Skipped'); assert.equal(snap.founder_sells, ''); assert.match(snap.suggested, /^Prospect intelligence/)
  assert.equal(snap.call_first, 'Yes: 16 to 40 clients, a day or more for the last check')
  await wait(50)
  assert.ok(posts.length >= 1); assert.equal(posts.at(-1).step, '9'); assert.equal(posts.at(-1).sid, g.sid); assert.match(posts.at(-1).at, /^\d{13}$/)
})

await t('reader page: no reader step, 7 squares, Change adds it first and clears the old reader columns', () => {
  const s = startWith('sam@lumen.app', ctx({ page: '/agencies', source: 'agencies-hero', pageReader: 'agency' }))
  assert.deepEqual(L.flowOf(s).map((x) => x.id), ['email', 'A1', 'A2', 'A3', 'A4', 'name', 'note']); assert.equal(s.current, 'A1')
  assert.equal(s.reader, 'agency'); assert.equal(s.readerFrom, 'Page')
  pickFirst('A1', 'rivals'); pickFirst('A2', 'c1')
  L.changeReader('me')
  let g = L.getSignup(); assert.equal(g.current, 'reader'); assert.deepEqual(g.answers.reader.picked, ['agency'])
  assert.deepEqual(L.flowOf(g).map((x) => x.id), ['email', 'reader', 'A1', 'A2', 'A3', 'A4', 'name', 'note'])
  pickFirst('reader', 'founder')
  g = L.getSignup(); assert.equal(g.reader, 'founder'); assert.equal(g.readerFrom, 'Changed'); assert.equal(g.current, 'F1')
  L.complete('name', true, 'me')
  const snap = L.snapshot(L.getSignup())
  assert.equal(snap.agency_clients, ''); assert.equal(snap.first_job, ''); assert.equal(snap.reader, 'Founder'); assert.equal(snap.name, 'Skipped')
  assert.equal(snap.company, 'Lumen') // skipping the step never blanks the company the email gave
})

await t('Something else reader: 3 questions, role kept, None of these', () => {
  startWith('o@ops.example', ctx())
  L.setAnswer('reader', { picked: ['other'] }); L.setText('readerOther', 'Operations lead'); L.complete('reader', false, 'me')
  let g = L.getSignup(); assert.equal(g.reader, 'other'); assert.equal(L.flowOf(g).length, 7); assert.equal(g.current, 'G1')
  L.setAnswer('G1', { picked: ['other'], other: 'Supplier audits' }); L.complete('G1', false, 'me')
  L.complete('G2', false, 'me')
  L.setAnswer('G3', { picked: ['company', 'rival', 'chased'] }); L.complete('G3', false, 'me')
  L.complete('name', false, 'me')
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
  assert.equal(L.getSignup().marks.name, 'skipped'); assert.equal(L.snapshot(L.getSignup()).name, 'Skipped'); assert.equal(L.snapshot(L.getSignup()).company, 'Skipped')
})

await t('skipped reader: generic questions, reader "Skipped"', () => {
  startWith('x@y.example', ctx())
  L.complete('reader', true, 'me')
  const g = L.getSignup(); assert.equal(g.current, 'G1'); assert.equal(L.snapshot(g).reader, 'Skipped')
})

await t('Call first stays blank until its questions are answered; "No" only when an answer decides it', () => {
  startWith('a@agency.example', ctx({ page: '/agencies', pageReader: 'agency' }))
  assert.equal(L.snapshot(L.getSignup()).call_first, '')
  pickFirst('A1', 'pitch'); pickFirst('A2', 'c100')
  assert.equal(L.snapshot(L.getSignup()).call_first, '')
  L.complete('A3', true, 'me'); L.complete('A4', true, 'me') // a 100 client agency that skipped the last check
  assert.equal(L.snapshot(L.getSignup()).call_first, '')
  L.go('A2', 'me'); pickFirst('A2', 'c1') // 1 to 5 clients: the rule fails on an answer
  assert.equal(L.snapshot(L.getSignup()).call_first, 'No')
  startWith('f@f.example', ctx({ page: '/founders', pageReader: 'founder' }))
  L.setAnswer('F4', { picked: ['none'] }); L.complete('F4', false, 'me')
  assert.equal(L.snapshot(L.getSignup()).call_first, 'No')
})

await t('free mystery shop: whose store replaces the first job; report link; ready to start, sent as the card opens', async () => {
  await wait(50); posts.length = 0
  const s = startWith('m@shop.example', ctx({ page: '/agencies', source: 'agencies-final', kind: 'mystery', interest: 'mystery', store: 'https://www.client-store.example/', pageReader: 'agency' }))
  const flow = L.flowOf(s).map((x) => x.id)
  assert.deepEqual(flow, ['email', 'mystery', 'A2', 'A3', 'A4', 'name', 'note'])
  await wait(50)
  assert.equal(posts.length, 1); assert.equal(posts[0].first_job, 'Free mystery shop'); assert.equal(posts[0].call_first, 'Yes: a free mystery shop is ready to start')
  pickFirst('mystery', 'client')
  const g = L.getSignup(); const snap = L.snapshot(g)
  assert.equal(snap.first_job, 'Free mystery shop'); assert.equal(snap.job_detail, 'Whose store is it? A client’s, with their OK')
  assert.equal(snap.store, 'https://www.client-store.example/'); assert.match(snap.suggested, /client-store\.example/)
  assert.equal(snap.call_first, 'Yes: a free mystery shop is ready to start')
  assert.equal(L.resultsHelper(g), 'For your free mystery shop.')
  assert.equal(L.nextStepFor(g), 'report')
  // a plain waitlist sign up sends nothing extra as the card opens
  await wait(50); posts.length = 0
  startWith('p@plain.example', ctx())
  await wait(50); assert.equal(posts.length, 0)
})

await t('free check on /sample-output-like page: no next step link to itself', () => {
  const s = startWith('m@shop.example', ctx({ page: '/sample-output', kind: 'mystery', store: 'a-store.example' }))
  assert.equal(L.nextStepFor(s), null)
})

await t('recipe page: its own question replaces the first job; "What’s your role?" is never asked', () => {
  startWith('r@r.example', ctx({ page: '/recipes/prospect-intelligence', recipe: { name: 'Prospect intelligence' }, question: { question: 'Who are your prospects?', options: ['Stores and consumer brands', 'Software companies', 'Something else'] } }))
  pickFirst('reader', 'sales')
  let g = L.getSignup(); assert.deepEqual(L.flowOf(g).map((x) => x.id), ['email', 'reader', 'page', 'S2', 'S3', 'S4', 'name', 'note'])
  pickFirst('page', 'o2')
  g = L.getSignup(); const snap = L.snapshot(g)
  assert.equal(snap.first_job, 'Prospect intelligence'); assert.equal(snap.job_detail, 'Who are your prospects? Software companies')
  assert.equal(L.nextStepFor(g), 'account')
  startWith('r@r.example', ctx({ page: '/recipes/get-paid', recipe: { name: 'Get paid' }, question: { question: 'What’s your role?', options: ['Founder or owner', 'Finance'] } }))
  pickFirst('reader', 'founder')
  assert.deepEqual(L.flowOf(L.getSignup()).map((x) => x.id), ['email', 'reader', 'F2', 'F3', 'F4', 'name', 'note'])
  assert.equal(L.snapshot(L.getSignup()).first_job, 'Get paid')
})

await t('which pages know their reader: the 5 reader pages and the agencies use case; /verify and the rest ask', () => {
  for (const [path, reader] of [['/agencies', 'agency'], ['/founders', 'founder'], ['/sales', 'sales'], ['/marketing', 'marketing'], ['/developers', 'developer'], ['/use-cases/mystery-shopping-for-ecommerce-agencies', 'agency']])
    assert.equal(L.readerOfPage(path), reader, path)
  for (const path of ['/', '/verify', '/recipes', '/recipes/lead-leaks', '/resources', '/sample-output', '/privacy', '/use-cases/prospect-intelligence-with-clay', '/nope'])
    assert.equal(L.readerOfPage(path), undefined, path)
})

const format = { short: 'Format', question: 'Which format should we send the audits in?', options: ['A PDF', 'A branded client report', 'Slack', 'A sheet', 'Clay columns', 'Email'], replaces: 'results' }

await t('agencies use case with a store: whose store first, its format in place of the results; its thank you words ride in the state', () => {
  const done = { title: 'Got it. We’ll start with {store}.', line: 'We’ll email {email} to confirm it’s a client’s store with their OK, and to ask for the other 4.' }
  const page = '/use-cases/mystery-shopping-for-ecommerce-agencies'
  const s = startWith('a@agency.example', ctx({ page, source: 'usecase-ecom-agencies-hero', kind: 'mystery', interest: 'mystery', store: 'client.example', pageReader: L.readerOfPage(page), question: format, done }))
  assert.equal(s.reader, 'agency'); assert.equal(s.readerFrom, 'Page'); assert.deepEqual(s.ctx.done, done)
  assert.deepEqual(L.flowOf(s).map((x) => x.id), ['email', 'mystery', 'A2', 'page', 'A4', 'name', 'note'])
  pickFirst('mystery', 'client'); pickFirst('A2', 'c16'); pickFirst('page', 'o1')
  const g = L.getSignup(); const snap = L.snapshot(g)
  assert.equal(snap.job_detail, 'Whose store is it? A client’s, with their OK'); assert.equal(snap.first_job, 'Free mystery shop')
  assert.equal(snap.results, 'A PDF'); assert.equal(snap.agency_clients, '16 to 40')
  assert.equal(snap.store, 'client.example'); assert.equal(snap.reader, 'Agency'); assert.equal(snap.reader_from, 'Page')
  assert.equal(snap.call_first, 'Yes: a free mystery shop is ready to start'); assert.equal(L.questionsOf(g)[2].short, 'Format'); assert.equal(L.questionsOf(g)[2].step, 5)
  assert.equal(L.nextStepFor(g), 'report')
})

await t('agencies use case with the store left blank: a waitlist sign up with the agency’s own questions, never the format', () => {
  const s = startWith('a@agency.example', ctx({ page: '/use-cases/mystery-shopping-for-ecommerce-agencies', kind: 'mystery', interest: 'mystery', pageReader: 'agency', question: format, done: undefined }))
  assert.deepEqual(L.flowOf(s).map((x) => x.id), ['email', 'A1', 'A2', 'A3', 'A4', 'name', 'note'])
  pickFirst('A1', 'checks')
  const snap = L.snapshot(L.getSignup())
  assert.equal(snap.store, ''); assert.equal(snap.first_job, 'Checks on every client'); assert.equal(snap.call_first, '')
  assert.equal(L.nextStepFor(s), 'agencyShop')
})

await t('a recipe’s own question on a free check left blank is not asked; with an AI agent it is', () => {
  const roles = { question: 'Whose AI agent is it?', options: ['Ours', 'A client’s, with their OK'] }
  const b = startWith('v@v.example', ctx({ page: '/recipes/resolution-check', kind: 'verify', recipe: { name: 'Resolution check' }, question: roles }))
  // before the reader is picked, the squares count an agency's questions; the recipe's name is the first job
  assert.deepEqual(L.flowOf(b).map((x) => x.id), ['email', 'reader', 'A2', 'A3', 'A4', 'name', 'note'])
  assert.equal(L.snapshot(b).first_job, 'Resolution check')
  const a = startWith('v@v.example', ctx({ page: '/recipes/resolution-check', kind: 'verify', agent: 'help.shop.example/chat', recipe: { name: 'Resolution check' }, question: roles }))
  assert.deepEqual(L.flowOf(a).map((x) => x.id).slice(0, 3), ['email', 'reader', 'page'])
})

await t('a page question never named by a recipe falls back to the shared short name', () => {
  const s = startWith('q@q.example', ctx({ question: { question: 'Which?', options: ['A', 'B'] } }))
  assert.equal(L.questionsOf(s)[0].short, 'Question')
})

await t('/verify with an agent: whose AI agent replaces the first job; blank agent: the reader is asked first', () => {
  const s = startWith('v@v.example', ctx({ page: '/verify', source: 'verify-hero', kind: 'verify', interest: 'any', agent: 'help.shop.example/chat' }))
  assert.equal(s.askReader, true); assert.deepEqual(L.flowOf(s).slice(0, 3).map((x) => x.id), ['email', 'reader', 'verify'])
  assert.equal(L.snapshot(s).first_job, 'Free AI agent check'); assert.equal(L.snapshot(s).agent, 'help.shop.example/chat')
  const b = startWith('v@v.example', ctx({ page: '/verify', source: 'verify-hero', kind: 'verify' }))
  assert.equal(b.askReader, true); assert.equal(L.snapshot(b).agent, ''); assert.ok(!L.flowOf(b).some((x) => x.id === 'verify'))
})

await t('next step rules: AI agent check first job, a store founder, developer, marketing', () => {
  startWith('f@f.example', ctx({ page: '/founders', pageReader: 'founder' }))
  pickFirst('F1', 'agents')
  assert.equal(L.nextStepFor(L.getSignup()), 'verify'); assert.equal(L.callFirst(L.getSignup()).reason, 'Yes: their first job is an AI agent check')
  startWith('f@f.example', ctx({ page: '/founders', pageReader: 'founder' }))
  pickFirst('F1', 'find'); pickFirst('F2', 'store')
  assert.equal(L.nextStepFor(L.getSignup()), 'shop')
  startWith('d@d.example', ctx({ page: '/developers', pageReader: 'developer' }))
  assert.equal(L.nextStepFor(L.getSignup()), 'developer')
  startWith('k@k.example', ctx({ page: '/marketing', pageReader: 'marketing' }))
  assert.equal(L.nextStepFor(L.getSignup()), 'rival')
  pickFirst('M1', 'ai'); pickFirst('M2', 'store')
  assert.equal(L.nextStepFor(L.getSignup()), 'shop')
})

await t('Back then answer returns to the first unanswered step; Change from thanks returns to thanks', () => {
  startWith('s@s.example', ctx({ page: '/sales', pageReader: 'sales' }))
  pickFirst('S1', 'briefs'); pickFirst('S2', 't6')
  L.go('S1', 'me'); pickFirst('S1', 'renewals')
  assert.equal(L.getSignup().current, 'S3')
  L.complete('S3', true, 'me'); pickFirst('S4', 'gone'); L.complete('name', true, 'me'); L.complete('note', false, 'me')
  let g = L.getSignup(); assert.equal(g.current, 'thanks'); assert.equal(L.snapshot(g).note, 'Skipped')
  assert.equal(L.callFirst(g).reason, 'Yes: a team of 6 to 20, the last slip seen after it was gone')
  L.go('S2', 'me', true); pickFirst('S2', 'me')
  g = L.getSignup(); assert.equal(g.current, 'thanks'); assert.equal(L.callFirst(g), null); assert.equal(L.snapshot(g).call_first, 'No')
})

await t('the reached step only moves forward', () => {
  startWith('s@s.example', ctx({ page: '/sales', pageReader: 'sales' }))
  pickFirst('S1', 'briefs'); pickFirst('S2', 't6')
  assert.equal(L.getSignup().reached, 4)
  L.go('S1', 'me'); pickFirst('S1', 'grow')
  assert.equal(L.getSignup().reached, 4); assert.equal(L.snapshot(L.getSignup()).step, '4')
})

await t('lower keeps acronyms', () => {
  assert.equal(L.lower('AI agent checks'), 'AI agent checks'); assert.equal(L.lower('Pitch packs'), 'pitch packs'); assert.equal(L.lower('A day or more'), 'a day or more')
})

await t('step 1 is built without the bank: the email, the ID, the page and its reader', () => {
  const b = St.stepOne(' maya@northwind-labs.co.uk ', ctx({ page: '/agencies', source: 'agencies-hero', pageReader: St.readerOfPage('/agencies') }), 'abc')
  assert.deepEqual(b, { sid: 'abc', email: 'maya@northwind-labs.co.uk', step: '1', source: 'agencies-hero', page: '/agencies', interest: 'any', store: '', agent: '', reader: 'Agency', reader_from: 'Page' })
  const h = St.stepOne('a@b.co', ctx({ kind: 'mystery', store: 'shop.example' }), 'abc')
  assert.equal(h.reader, ''); assert.equal(h.store, 'shop.example')
  // the light map agrees with the bank's readers
  for (const o of C.signup.reader.options) assert.equal(L.readerLabel(o.id), o.label)
})

await t('a reload while the card loaded: the pending sign up opens as a full one, same ID, at its first question', () => {
  store.clear(); St.set(null)
  const c = ctx({ page: '/agencies', source: 'agencies-hero', pageReader: 'agency' })
  St.savePending({ v: 1, sid: 'sid-pending-0123456789', email: 'maya@northwind-labs.co.uk', ctx: c, t: Date.now(), preview: false, pending: true })
  assert.ok(St.saved().pending)
  St.set(null, false)
  L.resume()
  const g = L.getSignup()
  assert.equal(g.sid, 'sid-pending-0123456789'); assert.equal(g.current, 'A1'); assert.equal(g.company, 'Northwind Labs'); assert.equal(g.reader, 'agency')
  assert.ok(!('pending' in St.saved()), 'kept as a full sign up from now on')
  // too old: nothing to resume
  St.savePending({ v: 1, sid: 'sid-old-0123456789abc', email: 'a@b.co', ctx: c, t: Date.now() - 25 * 3600 * 1000, preview: false, pending: true })
  assert.equal(St.saved(), null)
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
  // 3 tries, 1.2s then 2.4s apart; a busy machine can be slower, so wait for the outcome, up to 10s
  for (let i = 0; i < 100 && W.saveStatus.get() !== 'failed'; i++) await wait(100)
  assert.equal(calls, 3); assert.equal(W.saveStatus.get(), 'failed'); assert.ok(W.hasUnsent())
  globalThis.fetch = real; posts.length = 0
  W.retrySnapshot(); await wait(50)
  assert.equal(posts.at(-1).step, '6'); assert.equal(W.saveStatus.get(), 'idle'); assert.ok(!W.hasUnsent())
})

console.log(n, 'passed')
await vite.close()

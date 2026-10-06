// Tests for waitlist/Code.js against a fake Apps Script runtime (gas.mjs). Run: node waitlist/test/code.test.mjs
import assert from 'node:assert/strict'
import { makeGas } from './gas.mjs'
const CODE = new URL('../Code.js', import.meta.url).pathname
let n = 0
const t = (name, fn) => { try { fn(); n++; console.log('ok', name) } catch (e) { console.log('FAIL', name, '\n', e.message); process.exitCode = 1 } }
const SID = '3f6c0a1e-1234-4abc-9def-0123456789ab'

t('new sheet gets every header in reading order', () => {
  const g = makeGas(CODE)
  const r = g.post({ email: 'maya@northwind-labs.co.uk', sid: SID, step: '1', source: 'agencies-hero', page: '/agencies', reader: 'Agency', reader_from: 'Page' })
  assert.deepEqual(r, { ok: true, v: 2 })
  assert.deepEqual([...g.headers()], [...g.HEADERS])
  assert.equal(g.HEADERS.length, 38)
  const [row] = g.table()
  assert.equal(row.Email, 'maya@northwind-labs.co.uk'); assert.equal(row['Step reached'], '1 Email'); assert.equal(row.Reader, 'Agency')
  assert.equal(row['Sign up ID'], SID); assert.ok(row.Received instanceof Date); assert.ok(row.Updated instanceof Date); assert.equal(row.Finished, '')
  assert.equal(g.mail.length, 1); assert.match(g.mail[0].subject, /^New Obsession sign up: maya@northwind-labs.co.uk$/)
  assert.equal(g.mail[0].to, 'a@useobsession.com,b@useobsession.com')
})

t('old sheet keeps its rows; new headers go at the end', () => {
  const old = ['Received', 'Email', 'Company', 'Source', 'Page', 'Role', 'Interest', 'Store', 'Agent']
  const g = makeGas(CODE, { headers: old, rows: [[new Date('2026-10-01'), 'old@x.com', '', 'home-hero', '/', 'Founder', 'any', '', '']] })
  g.post({ email: 'maya@northwind-labs.co.uk', sid: SID, step: '1', source: 'home-hero', page: '/' })
  const h = g.headers()
  assert.deepEqual(h.slice(0, 9), old)
  assert.equal(h.length, 38)
  const rows = g.table()
  assert.equal(rows[0].Email, 'old@x.com'); assert.equal(rows[0].Role, 'Founder'); assert.equal(rows[0].Name, '')
  assert.equal(rows[1].Email, 'maya@northwind-labs.co.uk')
})

t('the whole card: 1 row, step only forward, finished alert', () => {
  const g = makeGas(CODE)
  const base = { email: 'maya@northwind-labs.co.uk', sid: SID, source: 'agencies-hero', page: '/agencies', interest: 'any', reader: 'Agency', reader_from: 'Page', company: 'Northwind Labs' }
  let at = Date.parse('2026-10-03T13:00:00Z')
  const step = (body) => { g.tick(5000); at += 5000; return g.post({ ...base, at: String(at), ...body }) }
  g.post({ ...base, step: '1' })
  step({ step: '3', first_job: 'Pitch packs on prospects', suggested: 'Prospect intelligence', call_first: '' })
  step({ step: '4', first_job: 'Pitch packs on prospects', agency_clients: '16 to 40' })
  step({ step: '5', first_job: 'Pitch packs on prospects', agency_clients: '16 to 40', results: 'Slack' })
  // Back to step 3: the step sent is lower, but Step reached stays at 5
  step({ step: '3', first_job: 'Checks on every client', agency_clients: '16 to 40', results: 'Slack' })
  assert.equal(g.table()[0]['Step reached'], '5 Results')
  step({ step: '6', first_job: 'Checks on every client', agency_clients: '16 to 40', results: 'Slack', agency_last_check: 'A day or more', call_first: 'Yes: 16 to 40 clients, a day or more for the last check' })
  step({ step: '7', name: 'Maya Okafor', first_job: 'Checks on every client', agency_clients: '16 to 40', results: 'Slack', agency_last_check: 'A day or more', call_first: 'Yes: 16 to 40 clients, a day or more for the last check' })
  assert.equal(g.table()[0]['Step reached'], '7 Name')
  step({ step: '9', name: 'Maya Okafor', first_job: 'Checks on every client', agency_clients: '16 to 40', results: 'Slack', agency_last_check: 'A day or more', note: 'Skipped', call_first: 'Yes: 16 to 40 clients, a day or more for the last check' })
  const rows = g.table()
  assert.equal(rows.length, 1)
  const r = rows[0]
  assert.equal(r['Step reached'], '9 Done'); assert.equal(r.Name, 'Maya Okafor'); assert.equal(r['First job'], 'Checks on every client')
  assert.equal(r.Note, undefined); assert.equal(r['Anything else'], 'Skipped'); assert.ok(r.Finished instanceof Date)
  assert.ok(r.Updated.getTime() > r.Received.getTime())
  assert.equal(g.mail.length, 2)
  assert.match(g.mail[1].subject, /^Answers: Maya Okafor, Northwind Labs\. Agency: Checks on every client$/)
  assert.match(g.mail[1].body, /Call first: Yes: 16 to 40 clients/)
  assert.match(g.mail[1].body, /Results to: Slack/)
  assert.doesNotMatch(g.mail[1].body, /Sent at/)
  // a change after finishing: no second answers alert
  step({ step: '9', name: 'Maya O' })
  assert.equal(g.mail.length, 2); assert.equal(g.table()[0].Name, 'Maya O')
})

t('a slow older post that lands after a newer one is ignored', () => {
  const g = makeGas(CODE)
  const base = { email: 'maya@northwind-labs.co.uk', sid: SID, source: 'home-hero', page: '/' }
  g.post({ ...base, step: '1' })
  // the page closes on step 8: the beacon carries the note, made at t+2000
  g.post({ ...base, step: '8', at: '1000002000', name: 'Maya', note: 'Pitch on the 14th' })
  // the step 7 post, made at t+1000, was still in flight and lands last
  const r = g.post({ ...base, step: '7', at: '1000001000', name: 'Maya', note: '' })
  assert.deepEqual(r, { ok: true, v: 2 })
  const row = g.table()[0]
  assert.equal(row['Anything else'], 'Pitch on the 14th'); assert.equal(row['Step reached'], '8 Note')
  // the same time again (a retry) still writes; a post without a time (an older page) always writes
  g.post({ ...base, step: '8', at: '1000002000', name: 'Maya Okafor', note: 'Pitch on the 14th' })
  assert.equal(g.table()[0].Name, 'Maya Okafor')
  g.post({ ...base, step: '8', name: 'Maya O' })
  assert.equal(g.table()[0].Name, 'Maya O')
})

t('alerts stop when the day\'s mail quota is spent; the rows still save', () => {
  const g = makeGas(CODE, { quota: 3 })
  g.post({ email: 'a@n.co', sid: SID, step: '1', source: 's' })
  assert.equal(g.mail.length, 1) // 2 recipients: 1 left
  g.post({ email: 'b@n.co', sid: SID.replace('3f', '4a'), step: '1', source: 's' })
  assert.equal(g.mail.length, 1)
  assert.equal(g.table().length, 2)
})

t('a phone number and a date-like note stay text as typed', () => {
  const g = makeGas(CODE)
  g.post({ email: 'm@n.co', sid: SID, step: '1', source: 's', agent: '02079460000' })
  g.post({ email: 'm@n.co', sid: SID, step: '8', at: '1000000000', note: '12/10' })
  const r = g.table()[0]
  assert.equal(r.Agent, "'02079460000"); assert.equal(r['Anything else'], "'12/10")
  assert.equal(r['Sent at'], "'1000000000")
  // the alert reads it as typed
  assert.match(g.mail[0].body, /AI agent: 02079460000\n/)
  // words are left alone
  g.post({ email: 'm@n.co', sid: SID, step: '8', at: '1000000001', note: '16 to 40 clients' })
  assert.equal(g.table()[0]['Anything else'], '16 to 40 clients')
})

t('next step from the thank you alerts once', () => {
  const g = makeGas(CODE)
  const base = { email: 'maya@northwind-labs.co.uk', sid: SID, source: 'agencies-hero', page: '/agencies' }
  g.post({ ...base, step: '1' }); g.post({ ...base, step: '9' })
  g.post({ ...base, step: '9', next_step: 'Free mystery shop', store: 'client-store.example' })
  assert.equal(g.mail.length, 3)
  assert.match(g.mail[2].subject, /^Next step: Free mystery shop from maya@northwind-labs.co.uk \(client-store.example\)$/)
  g.post({ ...base, step: '9', next_step: 'Free mystery shop', store: 'client-store.example' })
  assert.equal(g.mail.length, 3)
})

t('an empty value clears a cell; origin keys never clear', () => {
  const g = makeGas(CODE)
  const base = { email: 'm@n.co', sid: SID }
  g.post({ ...base, step: '1', source: 'home-hero', page: '/', interest: 'any' })
  g.post({ ...base, step: '5', agency_clients: '16 to 40', reader: 'Agency' })
  g.post({ ...base, step: '5', agency_clients: '', founder_sells: 'Local services', reader: 'Founder', source: '', page: '' })
  const r = g.table()[0]
  assert.equal(r['Agency: clients'], ''); assert.equal(r['Founder: sells'], 'Local services'); assert.equal(r.Reader, 'Founder')
  assert.equal(r.Source, 'home-hero'); assert.equal(r.Page, '/'); assert.equal(r.Interest, 'any')
})

t('never matched by email alone: another email with the same ID gets its own row, the owner keeps theirs', () => {
  const g = makeGas(CODE)
  g.post({ email: 'maya@northwind-labs.co.uk', sid: SID, step: '1', source: 's', page: '/' })
  g.post({ email: 'attacker@evil.example', sid: SID, step: '2', name: 'Hacked' })
  const rows = g.table()
  assert.equal(rows.length, 2); assert.equal(rows[0].Name, ''); assert.equal(rows[1]['Sign up ID'], '')
  g.post({ email: 'maya@northwind-labs.co.uk', sid: SID, step: '2', name: 'Maya' })
  assert.equal(g.table()[0].Name, 'Maya'); assert.equal(g.table().length, 2)
})

t('a post with a known email but no ID never touches the card row (old rule: same source within 10 min only)', () => {
  const g = makeGas(CODE)
  g.post({ email: 'maya@northwind-labs.co.uk', sid: SID, step: '1', source: 'home-hero', page: '/' })
  g.tick(60 * 1000)
  g.post({ email: 'maya@northwind-labs.co.uk', source: 'home-final', page: '/', name: 'X' })
  assert.equal(g.table().length, 2); assert.equal(g.table()[0].Name, '')
})

t('a lost first post: an unknown ID makes the row with the whole snapshot', () => {
  const g = makeGas(CODE)
  g.post({ email: 'maya@northwind-labs.co.uk', sid: SID, step: '3', name: 'Maya', first_job: 'Rival reports to sell', source: 'agencies-hero', page: '/agencies' })
  const r = g.table()[0]
  assert.equal(r['Step reached'], '3 First job'); assert.equal(r.Name, 'Maya'); assert.equal(g.mail.length, 1)
})

t('a day later the same ID starts a fresh row, and later steps follow it', () => {
  const g = makeGas(CODE)
  g.post({ email: 'maya@northwind-labs.co.uk', sid: SID, step: '1', source: 's', page: '/' })
  g.tick(25 * 3600 * 1000)
  g.post({ email: 'maya@northwind-labs.co.uk', sid: SID, step: '2', name: 'Maya' })
  g.post({ email: 'maya@northwind-labs.co.uk', sid: SID, step: '4', name: 'Maya', first_job: 'Battlecards' })
  const rows = g.table()
  assert.equal(rows.length, 2); assert.equal(rows[0].Name, ''); assert.equal(rows[1]['First job'], 'Battlecards')
  assert.match(g.mail[1].subject, /\(repeat\)$/)
})

t('rate limits: 8 new rows per email an hour, 40 updates per sign up an hour', () => {
  const g = makeGas(CODE)
  for (let i = 0; i < 8; i++) assert.deepEqual(g.post({ email: 'x@y.co', sid: SID.slice(0, -2) + String(i).padStart(2, '0'), step: '1', source: 's' + i }), { ok: true, v: 2 })
  assert.deepEqual(g.post({ email: 'x@y.co', sid: SID.slice(0, -2) + '99', step: '1', source: 's9' }), { ok: false, error: 'rate_limited' })
  const h = makeGas(CODE)
  h.post({ email: 'm@n.co', sid: SID, step: '1' })
  for (let i = 0; i < 40; i++) assert.deepEqual(h.post({ email: 'm@n.co', sid: SID, step: '2', name: 'n' + i }), { ok: true, v: 2 })
  assert.deepEqual(h.post({ email: 'm@n.co', sid: SID, step: '2', name: 'late' }), { ok: false, error: 'rate_limited' })
  h.tick(3601 * 1000)
  assert.deepEqual(h.post({ email: 'm@n.co', sid: SID, step: '2', name: 'later' }), { ok: true, v: 2 })
})

t('today\'s single post still works: JSON, then the 1 tap role within 10 minutes, same row', () => {
  const g = makeGas(CODE)
  g.post({ email: 'old@flow.co', source: 'home-hero', page: '/', interest: 'any' })
  g.tick(30 * 1000)
  g.post({ email: 'old@flow.co', source: 'home-hero', page: '/', role: 'Founder' })
  const rows = g.table()
  assert.equal(rows.length, 1); assert.equal(rows[0].Role, 'Founder'); assert.equal(rows[0]['Step reached'], '1 Email'); assert.equal(rows[0]['Sign up ID'], '')
  assert.equal(g.mail.length, 1); assert.match(g.mail[0].body, /no answers follow/)
})

t('a plain form post gets the page and a row', () => {
  const g = makeGas(CODE)
  const r = g.post({ email: 'form@post.co', source: 'home-hero', page: '/agencies', website: '' }, 'application/x-www-form-urlencoded')
  assert.match(r.html, /You’re on the list/); assert.match(r.html, /useobsession.com\/agencies/)
  assert.equal(g.table()[0].Email, 'form@post.co')
})

t('honeypot, bad email, bad json', () => {
  const g = makeGas(CODE)
  assert.deepEqual(g.post({ email: 'bot@x.co', website: 'spam' }), { ok: true, v: 2 })
  assert.equal(g.data.length, 0)
  assert.deepEqual(g.post({ email: 'nope', sid: SID }), { ok: false, error: 'bad_email' })
  assert.deepEqual(g.post('{bad'), { ok: false, error: 'bad_json' })
  assert.deepEqual(g.post('null'), { ok: false, error: 'bad_email' })
})

t('formula guard and cell limits', () => {
  const g = makeGas(CODE)
  g.post({ email: 'm@n.co', sid: SID, step: '2', name: '=HYPERLINK("x")' + 'a'.repeat(200), note: '+' + 'b'.repeat(2000), company: '@evil' })
  const r = g.table()[0]
  assert.ok(r.Name.startsWith("'=")); assert.equal(r.Name.length, 101)
  assert.ok(r['Anything else'].startsWith("'+")); assert.equal(r['Anything else'].length, 1001)
  assert.equal(r.Company, "'@evil")
})

t('an ID that is not an ID is ignored (old rule)', () => {
  const g = makeGas(CODE)
  g.post({ email: 'm@n.co', sid: 'short', step: '1', source: 's' })
  assert.equal(g.table()[0]['Sign up ID'], '')
})

t('repeat sign up marks the alert', () => {
  const g = makeGas(CODE)
  g.post({ email: 'm@n.co', sid: SID, step: '1', source: 'a' })
  g.tick(3600 * 1000)
  g.post({ email: 'M@n.co', sid: SID.replace('3f', '4a'), step: '1', source: 'b' })
  assert.equal(g.table().length, 2)
  assert.match(g.mail[1].subject, /\(repeat\)/); assert.match(g.mail[1].body, /Repeat: this email first signed up/)
})
console.log(n, 'passed')

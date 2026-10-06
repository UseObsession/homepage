// A fake Apps Script runtime for waitlist/Code.js: the sheet as a 2D array, cache, lock, properties and mail, so the
// script runs in Node exactly as written.
import { readFileSync } from 'node:fs'
import vm from 'node:vm'

export function makeGas(codePath, { headers = null, rows = [], quota = 100 } = {}) {
  const mail = []
  const left = { quota }
  const props = { SHEET_ID: 'book1', NOTIFY_TO: 'a@useobsession.com, b@useobsession.com' }
  const cache = new Map()
  let clock = Date.parse('2026-10-03T13:00:00Z')
  // the sheet: data[r][c], 0-based
  const data = []
  if (headers) data.push([...headers])
  for (const r of rows) data.push([...r])
  const width = () => data.reduce((m, r) => Math.max(m, r.length), 0)
  const pad = () => { const w = width(); data.forEach((r) => { while (r.length < w) r.push('') }) }
  const range = (r, c, nr, nc) => ({
    getValues: () => { const out = []; for (let i = 0; i < nr; i++) { const row = []; for (let j = 0; j < nc; j++) row.push((data[r - 1 + i] || [])[c - 1 + j] ?? ''); out.push(row) } return out },
    setValues: (vals) => { for (let i = 0; i < nr; i++) { while (data.length < r + i) data.push([]); for (let j = 0; j < nc; j++) { const row = data[r - 1 + i]; while (row.length < c + j) row.push(''); row[c - 1 + j] = vals[i][j] } } pad(); return api },
    setFontWeight: () => api,
    createTextFinder: (text) => {
      const f = { mc: false, me: false }
      const finder = {
        matchCase: (b) => { f.mc = b; return finder },
        matchEntireCell: (b) => { f.me = b; return finder },
        findAll: () => {
          const hits = []
          for (let i = 0; i < nr; i++) for (let j = 0; j < nc; j++) {
            const v = String((data[r - 1 + i] || [])[c - 1 + j] ?? '')
            const a = f.mc ? v : v.toLowerCase(), b = f.mc ? text : String(text).toLowerCase()
            if (f.me ? a === b : a.includes(b)) hits.push({ getRow: () => r + i })
          }
          return hits
        },
      }
      return finder
    },
  })
  const api = {}
  Object.assign(api, range(1, 1, 1, 1))
  const sheet = {
    setName: () => {}, getLastRow: () => data.length, getLastColumn: () => width(),
    appendRow: (row) => { data.push([...row]); pad() }, setFrozenRows: () => {},
    getRange: (r, c, nr = 1, nc = 1) => { const x = range(r, c, nr, nc); Object.assign(api, x); return x },
  }
  const book = { getSheets: () => [sheet], getSheetByName: () => sheet, insertSheet: () => sheet, getId: () => 'book1', getUrl: () => 'https://docs.google.com/spreadsheets/d/book1' }
  const ctx = {
    console,
    Date: class extends Date { constructor(...a) { if (a.length) super(...a); else super(clock) } static now() { return clock } },
    JSON, Math, String, Object, Array, parseInt, RegExp,
    SpreadsheetApp: { openById: () => book, create: () => book },
    PropertiesService: { getScriptProperties: () => ({ getProperty: (k) => props[k] ?? null, setProperty: (k, v) => { props[k] = v } }) },
    LockService: { getScriptLock: () => ({ waitLock: () => {}, releaseLock: () => {} }) },
    CacheService: { getScriptCache: () => ({ get: (k) => cache.get(k) ?? null, put: (k, v) => cache.set(k, v) }) },
    MailApp: { sendEmail: (to, subject, body) => { left.quota -= to.split(',').length; mail.push({ to, subject, body }) }, getRemainingDailyQuota: () => left.quota },
    Session: { getEffectiveUser: () => ({ getEmail: () => 'owner@example.com' }) },
    Utilities: { formatDate: (d) => d.toISOString().slice(0, 16).replace('T', ' ') },
    ContentService: { MimeType: { JSON: 'json' }, createTextOutput: (s) => ({ body: s, setMimeType() { return this } }) },
    HtmlService: { createHtmlOutput: (h) => ({ html: h, setTitle() { return this }, addMetaTag() { return this } }) },
  }
  vm.createContext(ctx)
  vm.runInContext(readFileSync(codePath, 'utf8') + '\n;globalThis.__doPost = doPost; globalThis.__doGet = doGet; globalThis.__HEADERS = HEADERS; globalThis.__FIELDS = FIELDS;', ctx)
  // Date inside the context must be the fake one: Code.js uses `new Date()` and `Date.now()`.
  const post = (body, type = 'text/plain;charset=utf-8') => {
    const e = type.startsWith('application/x-www-form-urlencoded')
      ? { postData: { type, contents: new URLSearchParams(body).toString() }, parameter: body }
      : { postData: { type, contents: typeof body === 'string' ? body : JSON.stringify(body) }, parameter: {} }
    const out = ctx.__doPost(e)
    return out.body ? JSON.parse(out.body) : { html: out.html }
  }
  const table = () => { const [h, ...rs] = data; return rs.map((r) => Object.fromEntries(h.map((k, i) => [k, r[i]]))) }
  const get = () => JSON.parse(ctx.__doGet().body)
  return { post, get, data, table, mail, cache, props, tick: (ms) => { clock += ms }, headers: () => data[0], HEADERS: ctx.__HEADERS, FIELDS: ctx.__FIELDS }
}

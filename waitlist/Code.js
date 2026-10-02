/* Obsession waitlist. A standalone Google Apps Script web app that writes to its own "Obsession waitlist" sheet,
   created in the owner's Drive the first time the script runs.

   What it takes
     - JSON sent as text/plain from the site's forms (src/lib/waitlist.ts):
         { email, company, source, page, role, interest, store, agent, website }
       `agent` is the AI agent a free AI agent check runs on: its chat page or phone number.
     - A plain form post (application/x-www-form-urlencoded) with the same field names, from a form used before the
       page's script has loaded. Those get a small "You're on the list" page with a link back, instead of JSON.
   What it does
     - "website" is a hidden field people never fill in, so a value there means a bot: it answers ok and saves nothing.
     - Each sign up becomes a row. The same email and source again within 10 minutes updates that row instead (the
       1-tap roles answer after a sign up), filling in only what the new post carries.
     - More than RATE_LIMIT posts from 1 email in an hour are refused (error "rate_limited").
     - New rows send an alert to every address in the script property NOTIFY_TO (comma separated), or to the owner.
       A failed alert never loses a sign up: the row is saved first.
     - Columns are found by their header, so old sheets keep their rows; missing headers (Role, Interest, Store,
       Agent) are added at the end of row 1 the first time they're needed.

   Redeploy after changing this file (the URL stays the same, so the site needs no change):
     1. Paste this file into the Apps Script editor and save.
     2. Deploy, Manage deployments, the pencil on the live deployment, Version: New version, Deploy.
     3. Optional: Project Settings, Script properties, add NOTIFY_TO, e.g. "a@useobsession.com, b@useobsession.com".
   This version needs no new permission (CacheService and HtmlService need none). If the editor ever asks, run
   authorize() once and tick every box. See README.md, "Waitlist". */

const BOOK_TITLE = 'Obsession waitlist'
const SHEET_NAME = 'Sign ups'
const HEADERS = ['Received', 'Email', 'Company', 'Source', 'Page', 'Role', 'Interest', 'Store', 'Agent']
const NOTIFY = true
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const SITE = 'https://useobsession.com'
const FOLLOW_UP_MS = 10 * 60 * 1000
const RATE_LIMIT = 8
const RATE_WINDOW_S = 60 * 60

// oxlint-disable-next-line no-unused-vars -- Apps Script calls doPost, doGet and authorize by name.
function doPost(e) {
  const form = isFormPost(e)
  let data
  try {
    data = form ? e.parameter || {} : JSON.parse((e && e.postData && e.postData.contents) || '{}')
  } catch {
    return reply(form, { ok: false, error: 'bad_json' }, {})
  }

  if (data.website) return reply(form, { ok: true }, data)

  const email = clean(data.email, 200)
  if (!EMAIL.test(email)) return reply(form, { ok: false, error: 'bad_email' }, data)

  const entry = {
    Received: new Date(),
    Email: email,
    Company: clean(data.company, 200),
    Source: clean(data.source, 60),
    Page: clean(data.page, 200),
    Role: clean(data.role, 60),
    Interest: clean(data.interest, 60),
    Store: clean(data.store, 200),
    Agent: clean(data.agent, 200),
  }

  const result = withLock(() => {
    if (limited(email)) return { limited: true }
    const book = book_()
    return { book: book, updated: upsert(signUps(book), entry) }
  })
  if (result.limited) return reply(form, { ok: false, error: 'rate_limited' }, data)

  /* A failed alert email must never lose a sign up. The row is already saved. */
  if (NOTIFY && !result.updated) {
    try {
      notify(entry, result.book.getUrl())
    } catch (err) {
      console.error('notify failed', err)
    }
  }
  return reply(form, { ok: true }, data)
}

/* Run this once from the editor. It asks for every permission the script uses and creates the sheet. */
// oxlint-disable-next-line no-unused-vars
function authorize() {
  console.log('Email quota left today: ' + MailApp.getRemainingDailyQuota())
  console.log('Alerts go to: ' + recipients().join(', '))
  console.log('Sheet: ' + withLock(() => book_()).getUrl())
}

/* Opening the web app link once, signed in as the owner, authorises the script and creates the sheet. */
// oxlint-disable-next-line no-unused-vars
function doGet() {
  withLock(() => signUps(book_()))
  return json({ ok: true, service: 'obsession-waitlist' })
}

function isFormPost(e) {
  const type = (e && e.postData && e.postData.type) || ''
  return type.indexOf('application/x-www-form-urlencoded') === 0 || type.indexOf('multipart/form-data') === 0
}

function withLock(fn) {
  const lock = LockService.getScriptLock()
  lock.waitLock(10000)
  try {
    return fn()
  } finally {
    lock.releaseLock()
  }
}

function book_() {
  const props = PropertiesService.getScriptProperties()
  const id = props.getProperty('SHEET_ID')
  if (id) return SpreadsheetApp.openById(id)
  const book = SpreadsheetApp.create(BOOK_TITLE)
  book.getSheets()[0].setName(SHEET_NAME)
  props.setProperty('SHEET_ID', book.getId())
  return book
}

function signUps(book) {
  const s = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME, 0)
  if (s.getLastRow() === 0) {
    s.appendRow(HEADERS)
    s.setFrozenRows(1)
    s.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
  }
  return s
}

/* Header name to column number (1-based). Any of HEADERS missing from row 1 is added after the last header. */
function columns(sheet) {
  const width = Math.max(sheet.getLastColumn(), 1)
  const head = sheet.getRange(1, 1, 1, width).getValues()[0].map((h) => String(h).trim())
  const cols = {}
  let last = 0
  head.forEach((h, i) => {
    if (!h) return
    last = i + 1
    if (!(h in cols)) cols[h] = i + 1
  })
  const missing = HEADERS.filter((h) => !cols[h])
  if (missing.length) {
    sheet.getRange(1, last + 1, 1, missing.length).setValues([missing]).setFontWeight('bold')
    missing.forEach((h, k) => (cols[h] = last + 1 + k))
  }
  return cols
}

/* Adds the sign up, or folds it into the same email's row from the same form in the last 10 minutes.
   Returns true when it updated a row. */
function upsert(sheet, entry) {
  const cols = columns(sheet)
  const width = sheet.getLastColumn()
  const lastRow = sheet.getLastRow()

  if (lastRow > 1) {
    const hits = sheet
      .getRange(2, cols.Email, lastRow - 1, 1)
      .createTextFinder(entry.Email)
      .matchCase(false)
      .matchEntireCell(true)
      .findAll()
    const hit = hits.length ? hits[hits.length - 1] : null
    if (hit) {
      const r = hit.getRow()
      const row = sheet.getRange(r, 1, 1, width).getValues()[0]
      const when = row[cols.Received - 1]
      const sameForm = String(row[cols.Source - 1]) === entry.Source
      if (sameForm && when instanceof Date && entry.Received.getTime() - when.getTime() < FOLLOW_UP_MS) {
        HEADERS.forEach((h) => {
          if (h !== 'Received' && h !== 'Email' && h !== 'Source' && entry[h]) row[cols[h] - 1] = safe(entry[h])
        })
        sheet.getRange(r, 1, 1, width).setValues([row])
        return true
      }
    }
  }

  const row = []
  for (let i = 0; i < width; i++) row.push('')
  HEADERS.forEach((h) => (row[cols[h] - 1] = safe(entry[h])))
  sheet.appendRow(row)
  return false
}

/* A simple limit per email: RATE_LIMIT posts in any RATE_WINDOW_S window. Runs inside the lock. */
function limited(email) {
  const cache = CacheService.getScriptCache()
  const key = 'rate:' + email.toLowerCase()
  const now = Date.now()
  let seen = null
  try {
    seen = JSON.parse(cache.get(key) || 'null')
  } catch {
    seen = null
  }
  if (!seen || now - seen.t > RATE_WINDOW_S * 1000) seen = { n: 0, t: now }
  seen.n += 1
  const left = Math.max(1, Math.ceil((seen.t + RATE_WINDOW_S * 1000 - now) / 1000))
  cache.put(key, JSON.stringify(seen), left)
  return seen.n > RATE_LIMIT
}

/* Every valid address in NOTIFY_TO, or the owner. */
function recipients() {
  const list = String(PropertiesService.getScriptProperties().getProperty('NOTIFY_TO') || '')
    .split(',')
    .map((a) => a.trim())
    .filter((a) => EMAIL.test(a))
  if (list.length) return list
  const owner = Session.getEffectiveUser().getEmail()
  return owner ? [owner] : []
}

function notify(entry, url) {
  const to = recipients()
  if (!to.length) return
  const store = entry.Store ? ` (${entry.Store})` : entry.Agent ? ` (AI agent: ${entry.Agent})` : entry.Company ? ` (${entry.Company})` : ''
  MailApp.sendEmail(
    to.join(','),
    `New Obsession sign up: ${entry.Email}${store}`,
    [
      `Email: ${entry.Email}`,
      `Store: ${entry.Store || 'not given'}`,
      `AI agent: ${entry.Agent || 'not given'}`,
      `Company: ${entry.Company || 'not given'}`,
      `Interest: ${entry.Interest || 'not given'}`,
      `Form: ${entry.Source}`,
      `Page: ${entry.Page}`,
      '',
      'Their answer to the roles question arrives a moment later, in the same row.',
      url,
    ].join('\n'),
  )
}

function clean(value, max) {
  return String(value == null ? '' : value).trim().slice(0, max)
}

/* A cell starting with = + - or @ would run as a formula. Prefix it so it stays text. */
function safe(value) {
  return typeof value === 'string' && /^[=+\-@]/.test(value) ? `'${value}` : value
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON)
}

function reply(form, body, data) {
  return form ? page(body, data) : json(body)
}

/* The page a plain form post lands on: what happened, and the way back to the page it came from. */
function page(body, data) {
  const path = /^\/[a-z0-9\-/]*$/i.test(String(data.page || '')) ? data.page : '/'
  const back = SITE + path
  const text = body.ok
    ? ['You’re on the list.', 'We’ll email you to set up your first run.']
    : body.error === 'bad_email'
      ? ['That email didn’t look right.', 'Go back and check it for a typo.']
      : ['That didn’t go through.', 'Go back and try again in a moment.']
  /* Colours mirror the design system's dark tokens (Brand/Design System/tokens.css): page, ink, second ink. */
  const html =
    '<style>body{margin:0;background:#080807;color:#EDEBE5;font:400 17px/1.55 -apple-system,system-ui,"Segoe UI",sans-serif}' +
    'main{max-width:480px;margin:18vh auto 0;padding:0 24px}h1{margin:0 0 8px;font-size:28px;line-height:1.1;letter-spacing:-.03em;font-weight:600}' +
    'p{margin:0 0 24px;color:#B7B5AC}a{color:#EDEBE5;text-underline-offset:3px}</style>' +
    `<main><h1>${esc(text[0])}</h1><p>${esc(text[1])}</p><a href="${esc(back)}" target="_top">Back to Obsession</a></main>`
  return HtmlService.createHtmlOutput(html).setTitle('Obsession').addMetaTag('viewport', 'width=device-width, initial-scale=1')
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

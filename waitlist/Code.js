/* Obsession waitlist. A standalone Google Apps Script web app that writes to its own "Obsession waitlist" sheet,
   created in the owner's Drive the first time the script runs.

   What it takes
     - JSON sent as text/plain from the site's forms (src/lib/waitlist.ts). Every key in FIELDS below, e.g.
         { sid, step, email, name, company, reader, first_job, ..., store, agent, source, page, website }
       `agent` is the AI agent a free AI agent check runs on: its chat page or phone number.
     - A plain form post (application/x-www-form-urlencoded) with the same field names, from a form used before the
       page's script has loaded. Those get a small "You're on the list" page with a link back, instead of JSON.
   What it does
     - "website" is a hidden field people never fill in, so a value there means a bot: it answers ok and saves nothing.
     - The sign up card (src/components/SignupSteps.tsx). Step 1 sends the email with a random sign up ID (`sid`) and
       makes the row. Every later step sends the whole sign up so far with the same ID and email: the script finds the
       row by Sign up ID and checks the email and that the row is less than a day old, then writes every key the post
       carries (an empty value clears a cell; "Skipped" means they skipped it). It never matches a post by email alone,
       so nobody can overwrite someone else's answers. An unknown ID with a valid email makes the row, so a lost first
       post still lands.
     - "Step reached" only moves forward. Received is written once, Updated on every post, Finished when the step
       reaches 9 (Done).
     - Posts without a sign up ID work as before: the same email and source within 10 minutes updates that row (the old
       1 tap roles answer), filling in only what the new post carries; otherwise a new row.
     - Rate limits: new rows, at most RATE_LIMIT per email an hour; updates, at most UPDATE_LIMIT per sign up an hour.
       Over either, the post is refused (error "rate_limited").
     - Alerts to every address in the script property NOTIFY_TO (comma separated), or to the owner:
         1. a new sign up (marked when the email has signed up before);
         2. "Answers: ..." once they finish, with the suggested first run, Call first and every answer;
         3. "Next step: ..." when they ask for a free shop or check, or name a company, from the thank you.
       A failed alert never loses a sign up: the row is saved first.
     - Columns are found by their header, so old sheets keep their rows. Missing headers are added at the end of row 1
       the first time they're needed (drag them into place once; the script follows the headers wherever they are).

   Redeploy after changing this file (the URL stays the same, so the site needs no change):
     1. Paste this file into the Apps Script editor and save.
     2. Deploy, Manage deployments, the pencil on the live deployment, Version: New version, Deploy.
     3. Optional: Project Settings, Script properties, add NOTIFY_TO, e.g. "a@useobsession.com, b@useobsession.com".
   This version needs no new permission (CacheService and HtmlService need none). If the editor ever asks, run
   authorize() once and tick every box. See README.md, "Waitlist". */

const BOOK_TITLE = 'Obsession waitlist'
const SHEET_NAME = 'Sign ups'
/* Header, JSON key, longest value kept. In reading order: the order of a new sheet's columns. Received, Updated and
   Finished are the script's own times. */
const FIELDS = [
  ['Received', '', 0],
  ['Step reached', 'step', 20],
  ['Email', 'email', 200],
  ['Name', 'name', 100],
  ['Company', 'company', 200],
  ['Reader', 'reader', 200],
  ['First job', 'first_job', 200],
  ['Call first', 'call_first', 200],
  ['Suggested first run', 'suggested', 200],
  ['Job detail', 'job_detail', 200],
  ['Agency: clients', 'agency_clients', 200],
  ['Agency: last check took', 'agency_last_check', 200],
  ['Founder: sells', 'founder_sells', 200],
  ['Founder: did last week', 'founder_last_week', 200],
  ['Sales: team size', 'sales_team', 200],
  ['Sales: last slip seen', 'sales_last_slip', 200],
  ['Marketing: markets', 'marketing_markets', 200],
  ['Marketing: last break found by', 'marketing_last_break', 200],
  ['Developer: builds for', 'developer_for', 200],
  ['Developer: last used', 'developer_last_used', 200],
  ['Other: role', 'other_role', 200],
  ['Other: did last week', 'other_last_week', 200],
  ['Results to', 'results', 200],
  ['Anything else', 'note', 1000],
  ['Next step', 'next_step', 200],
  ['Start with', 'start_with', 200],
  ['Store', 'store', 200],
  ['Agent', 'agent', 200],
  ['Interest', 'interest', 60],
  ['Source', 'source', 60],
  ['Page', 'page', 200],
  ['Arrived from', 'arrived_from', 200],
  ['Reader from', 'reader_from', 60],
  ['Updated', '', 0],
  ['Finished', '', 0],
  ['Role', 'role', 60],
  ['Sign up ID', 'sid', 64],
]
const HEADERS = FIELDS.map((f) => f[0])
/* Step reached, as the sheet shows it. */
const STEPS = ['', '1 Email', '2 Name', '3 Reader', '4 First job', '5 Scale', '6 Results', '7 Last time', '8 Note', '9 Done']
const DONE = 9
/* The origin of a sign up: written on its first post, and later only when a post carries a value. */
const ORIGIN = ['source', 'page', 'interest', 'arrived_from']
const NOTIFY = true
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const SID = /^[A-Za-z0-9-]{16,64}$/
const SITE = 'https://useobsession.com'
const FOLLOW_UP_MS = 10 * 60 * 1000
const UPDATE_WINDOW_MS = 24 * 60 * 60 * 1000
const RATE_LIMIT = 8
const UPDATE_LIMIT = 40
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
  if (!data || typeof data !== 'object') data = {}

  if (data.website) return reply(form, { ok: true }, data)

  const email = clean(data.email, 200)
  if (!EMAIL.test(email)) return reply(form, { ok: false, error: 'bad_email' }, data)

  const sid = SID.test(String(data.sid || '')) ? String(data.sid) : ''
  const now = new Date()
  const result = withLock(() => {
    const book = book_()
    const sheet = signUps(book)
    const cols = columns(sheet)
    return Object.assign({ book: book }, sid ? saveStep(sheet, cols, data, email, sid, now) : saveOld(sheet, cols, data, email, now))
  })
  if (result.limited) return reply(form, { ok: false, error: result.limited }, data)

  /* A failed alert email must never lose a sign up. The row is already saved. */
  if (NOTIFY) {
    const url = result.book.getUrl()
    const alerts = []
    if (result.created) alerts.push(() => notifyNew(result.entry, result.repeat, url))
    if (result.finished) alerts.push(() => notifyAnswers(result.entry, url))
    if (result.nextStep) alerts.push(() => notifyNext(result.entry, url))
    alerts.forEach((send) => {
      try {
        send()
      } catch (err) {
        console.error('notify failed', err)
      }
    })
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
  withLock(() => columns(signUps(book_())))
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

/* The row as { Header: value }, from a row's values. */
function entryOf(cols, row) {
  const entry = {}
  HEADERS.forEach((h) => (entry[h] = row[cols[h] - 1]))
  return entry
}

function stepNumber(value) {
  const n = parseInt(String(value == null ? '' : value), 10)
  return n >= 1 && n <= DONE ? n : 0
}

function lastRowWith(sheet, col, text) {
  const lastRow = sheet.getLastRow()
  if (lastRow < 2 || !text) return 0
  const hits = sheet.getRange(2, col, lastRow - 1, 1).createTextFinder(text).matchCase(false).matchEntireCell(true).findAll()
  return hits.length ? hits[hits.length - 1].getRow() : 0
}

/* A step of the sign up card: update the row this sign up made, or make it. */
function saveStep(sheet, cols, data, email, sid, now) {
  const width = sheet.getLastColumn()
  const r = lastRowWith(sheet, cols['Sign up ID'], sid)
  if (r) {
    const row = sheet.getRange(r, 1, 1, width).getValues()[0]
    const before = entryOf(cols, row)
    const when = before.Received
    const sameEmail = String(before.Email).toLowerCase() === email.toLowerCase()
    const fresh = when instanceof Date && now.getTime() - when.getTime() < UPDATE_WINDOW_MS
    if (sameEmail && fresh) {
      if (limited('sid:' + sid, UPDATE_LIMIT)) return { limited: 'rate_limited' }
      FIELDS.forEach((f) => {
        const h = f[0]
        const key = f[1]
        if (!key || key === 'email' || key === 'sid' || key === 'step' || !(key in data)) return
        const value = clean(data[key], f[2])
        if (ORIGIN.indexOf(key) !== -1 && !value) return
        row[cols[h] - 1] = safe(value)
      })
      const was = stepNumber(before['Step reached'])
      const step = Math.max(was, stepNumber(data.step))
      if (step) row[cols['Step reached'] - 1] = STEPS[step]
      row[cols.Updated - 1] = now
      const finished = step >= DONE && !before.Finished
      if (finished) row[cols.Finished - 1] = now
      const nextStep = !!row[cols['Next step'] - 1] && !before['Next step']
      sheet.getRange(r, 1, 1, width).setValues([row])
      return { entry: entryOf(cols, row), finished: finished, nextStep: nextStep }
    }
    /* Never write into that row. A day old: a fresh row carries the whole snapshot, and later steps follow it. Another
       email: a fresh row without the ID, so the row the ID belongs to stays its owner's. */
    if (!sameEmail) return addRow(sheet, cols, data, email, '', now)
  }
  return addRow(sheet, cols, data, email, sid, now)
}

/* A post without a sign up ID (a form used before the page's script loaded, or an older page): as before. */
function saveOld(sheet, cols, data, email, now) {
  const width = sheet.getLastColumn()
  const r = lastRowWith(sheet, cols.Email, email)
  if (r) {
    const row = sheet.getRange(r, 1, 1, width).getValues()[0]
    const before = entryOf(cols, row)
    const sameForm = String(before.Source) === clean(data.source, 60)
    const when = before.Received
    if (sameForm && when instanceof Date && now.getTime() - when.getTime() < FOLLOW_UP_MS) {
      if (limited('rate:' + email.toLowerCase(), RATE_LIMIT)) return { limited: 'rate_limited' }
      FIELDS.forEach((f) => {
        const key = f[1]
        if (!key || key === 'email' || key === 'source' || key === 'sid' || key === 'step') return
        const value = clean(data[key], f[2])
        if (value) row[cols[f[0]] - 1] = safe(value)
      })
      row[cols.Updated - 1] = now
      sheet.getRange(r, 1, 1, width).setValues([row])
      return { entry: entryOf(cols, row) }
    }
  }
  return addRow(sheet, cols, data, email, '', now)
}

function addRow(sheet, cols, data, email, sid, now) {
  if (limited('rate:' + email.toLowerCase(), RATE_LIMIT)) return { limited: 'rate_limited' }
  const repeat = lastRowWith(sheet, cols.Email, email)
  const width = sheet.getLastColumn()
  const row = []
  for (let i = 0; i < width; i++) row.push('')
  FIELDS.forEach((f) => {
    if (f[1]) row[cols[f[0]] - 1] = safe(clean(data[f[1]], f[2]))
  })
  const step = stepNumber(data.step) || 1
  row[cols.Email - 1] = email
  row[cols['Sign up ID'] - 1] = sid
  row[cols['Step reached'] - 1] = STEPS[step]
  row[cols.Received - 1] = now
  row[cols.Updated - 1] = now
  if (step >= DONE) row[cols.Finished - 1] = now
  sheet.appendRow(row)
  let first = null
  if (repeat) {
    const r = sheet.getRange(repeat, cols.Received, 1, 1).getValues()[0][0]
    first = r instanceof Date ? r : true
  }
  return { entry: entryOf(cols, row), created: true, repeat: first, finished: step >= DONE, nextStep: !!row[cols['Next step'] - 1] }
}

/* A simple limit: `max` posts per key in any RATE_WINDOW_S window. Runs inside the lock. */
function limited(key, max) {
  const cache = CacheService.getScriptCache()
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
  return seen.n > max
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

function send(subject, lines) {
  const to = recipients()
  if (!to.length) return
  MailApp.sendEmail(to.join(','), subject, lines.join('\n'))
}

function given(value) {
  return value === '' || value == null ? 'not given' : String(value)
}

function when(value) {
  return value instanceof Date ? Utilities.formatDate(value, 'Europe/London', 'd MMM yyyy HH:mm') : 'earlier'
}

/* 1. A new sign up. */
function notifyNew(entry, repeat, url) {
  const what = entry.Store ? ` (${entry.Store})` : entry.Agent ? ` (AI agent: ${entry.Agent})` : entry.Company ? ` (${entry.Company})` : ''
  const lines = [`Email: ${entry.Email}`]
  if (repeat) lines.push(`Repeat: this email first signed up ${when(repeat)}. This is a new row.`)
  lines.push(
    `Reader: ${given(entry.Reader)}`,
    `Store: ${given(entry.Store)}`,
    `AI agent: ${given(entry.Agent)}`,
    `Interest: ${given(entry.Interest)}`,
    `Form: ${entry.Source}`,
    `Page: ${entry.Page}`,
    '',
    entry['Sign up ID']
      ? 'Their answers fill in the same row as they go. A second email comes when they finish.'
      : 'Sent before the page’s script loaded, so no answers follow.',
    url,
  )
  send(`New Obsession sign up: ${entry.Email}${what}${repeat ? ' (repeat)' : ''}`, lines)
}

/* 2. They finished: every answer, the suggested first run and Call first. */
function notifyAnswers(entry, url) {
  const who = [entry.Name, entry.Company].filter((v) => v && v !== 'Skipped').join(', ') || entry.Email
  const job = entry['First job'] && entry['First job'] !== 'Skipped' ? entry['First job'] : 'no first job yet'
  const skip = ['Received', 'Updated', 'Finished', 'Step reached', 'Sign up ID', 'Role', 'Call first', 'Suggested first run']
  const answers = HEADERS.filter((h) => skip.indexOf(h) === -1 && entry[h] !== '' && entry[h] != null).map((h) => `${h}: ${entry[h]}`)
  send(`Answers: ${who}. ${given(entry.Reader)}: ${job}`, [
    `Suggested first run: ${given(entry['Suggested first run'])}`,
    `Call first: ${given(entry['Call first'])}`,
    '',
    ...answers,
    '',
    url,
  ])
}

/* 3. A next step from the thank you: a free shop or check to start, or a company to start with. */
function notifyNext(entry, url) {
  const value = entry.Store || entry.Agent || entry['Start with']
  send(`Next step: ${entry['Next step']} from ${entry.Email}${value ? ` (${value})` : ''}`, [
    `Email: ${entry.Email}`,
    `Name: ${given(entry.Name)}`,
    `Company: ${given(entry.Company)}`,
    `Reader: ${given(entry.Reader)}`,
    `Next step: ${entry['Next step']}`,
    `Store: ${given(entry.Store)}`,
    `AI agent: ${given(entry.Agent)}`,
    `Start with: ${given(entry['Start with'])}`,
    '',
    entry.Store || entry.Agent ? 'Confirm it’s theirs, or the owner’s OK, before anything runs.' : 'Plan it with them before anything runs.',
    url,
  ])
}

function clean(value, max) {
  return String(value == null ? '' : value).trim().slice(0, max || 200)
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
      : body.error === 'rate_limited'
        ? ['Too many tries from this email.', 'Go back and try again in an hour.']
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

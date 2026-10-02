/* Obsession waitlist. A standalone Google Apps Script web app that writes to its own "Obsession waitlist"
   sheet, created in the owner's Drive the first time the script runs. The site POSTs
   { email, company, source, page, website } as text/plain JSON; each sign up becomes a row, and the owner
   gets an email. "website" is a hidden field people never fill in, so a value there means a bot.
   Deploy with clasp from obsession/web (see README). */

const BOOK_TITLE = 'Obsession waitlist'
const SHEET_NAME = 'Sign ups'
const HEADERS = ['Received', 'Email', 'Company', 'Source', 'Page']
const NOTIFY = true
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function doPost(e) {
  let data
  try {
    data = JSON.parse((e && e.postData && e.postData.contents) || '{}')
  } catch (err) {
    return json({ ok: false, error: 'bad_json' })
  }

  if (data.website) return json({ ok: true })

  const email = clean(data.email, 200)
  if (!EMAIL.test(email)) return json({ ok: false, error: 'bad_email' })

  const row = [new Date(), email, clean(data.company, 200), clean(data.source, 60), clean(data.page, 200)]
  const book = withLock(() => {
    const b = book_()
    signUps(b).appendRow(row.map(safe))
    return b
  })

  if (NOTIFY) notify(row, book.getUrl())
  return json({ ok: true })
}

/* Opening the web app link once, signed in as the owner, authorises the script and creates the sheet. */
function doGet() {
  withLock(() => signUps(book_()))
  return json({ ok: true, service: 'obsession-waitlist' })
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

function notify(row, url) {
  const to = Session.getEffectiveUser().getEmail()
  if (!to) return
  const company = row[2] ? ` (${row[2]})` : ''
  MailApp.sendEmail(
    to,
    `New Obsession sign up: ${row[1]}${company}`,
    [`Email: ${row[1]}`, `Company to watch: ${row[2] || 'not given'}`, `Form: ${row[3]}`, `Page: ${row[4]}`, '', url].join('\n'),
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

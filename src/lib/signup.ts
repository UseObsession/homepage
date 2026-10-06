import { readers, signup as copy, type CallFirstRule, type SignupOption, type SignupQuestion } from '../content/signup'
import { readerNames } from '../content/signupReaders'
import type { RoleId } from '../content/types'
import { getSignup, newId, saved, set, type Answer, type Context, type Mark, type SignupState } from './signupStore'
import { beaconSnapshot, hasUnsent, hostOf, queueSnapshot } from './waitlist'

/* The sign up card's rules (components/SignupSteps, content/signup.ts, SIGNUP.md in the workspace). This is the heavy half:
   the question bank and everything that reads it. It loads on demand (lib/signupStore.ts), never with the page, and
   every form on the page shares the 1 state kept in the store.
   - Each step that's answered or skipped sends the whole sign up so far (snapshot) through lib/waitlist's queue, keyed
     by the sign up ID made at step 1. The script finds the row by that ID and the email, never by the email alone.
   - Nothing here touches window or document while a component renders: resume() runs from an effect. */

export { getSignup, readerOfPage } from './signupStore'
export type { Context, Kind, SignupState } from './signupStore'

export type Step = { id: string; step: number; q?: SignupQuestion }

/* ---- Reading the bank ---- */

export const readerLabel = (id?: RoleId) => (id ? readerNames[id] : '')

/* The page's own question (Capture.roles) as a bank question: its options get ids by position. On a recipe page it is
   the recipe's; on the agencies use case it is the format the audits come in. A free shop or check asks it only once
   a store or an AI agent is named: left blank, the form is a waitlist sign up, and the reader's own questions follow. */
function ownQuestion(ctx: Context): SignupQuestion | undefined {
  const q = ctx.question
  if (!q || copy.page.skipOwn.includes(q.question)) return undefined
  if (ctx.kind !== 'waitlist' && !ctx.store && !ctx.agent) return undefined
  return {
    id: 'page',
    step: 3,
    key: 'job_detail',
    short: q.short ?? ctx.recipe?.name ?? copy.page.own.short,
    question: q.question,
    options: q.options.map((label, i) => (/^something else$/i.test(label) ? { id: 'other', label, other: true } : { id: `o${i + 1}`, label })),
  }
}

/* The question in the first job's place: undefined keeps the reader's own first job, null drops it (a recipe page
   already says what the job is), a question replaces it. The page's own question comes first, unless it takes the
   results' place; a free shop or check asks whose it is where the page asks nothing of its own there. */
function firstJobQuestion(ctx: Context): SignupQuestion | null | undefined {
  const own = ctx.question?.replaces ? undefined : ownQuestion(ctx)
  if (own) return own
  if (ctx.store) return copy.page.mystery.question
  if (ctx.agent) return copy.page.verify.question
  return ctx.recipe ? null : undefined
}

/* Before "Which of these is you?" is answered, the squares count a reader's 4 questions; skipped, it's "Something
   else"'s 3. A page question that `replaces` the results (the agencies' audit format) is asked in their place, and its
   answer goes in "Results to". */
export function questionsOf(s: Pick<SignupState, 'reader' | 'ctx' | 'askReader' | 'marks'>): SignupQuestion[] {
  const pending = !s.reader && s.askReader && s.marks.reader !== 'skipped'
  let qs = readers[s.reader ?? (pending ? 'agency' : 'other')].questions
  const own = s.ctx.question?.replaces === 'results' ? ownQuestion(s.ctx) : undefined
  if (own) qs = qs.map((q) => (q.key === 'results' ? { ...own, step: q.step, key: 'results' } : q))
  const first = firstJobQuestion(s.ctx)
  if (first === undefined) return qs
  const rest = qs.filter((q) => q.key !== 'first_job')
  return first ? [first, ...rest] : rest
}

/* The order: the 1 tap questions first, the typing last. Name and company come after the questions (the company is
   filled in from the email, so a question can still say it), then the note. */
export function flowOf(s: SignupState): Step[] {
  const steps: Step[] = [{ id: 'email', step: 1 }]
  if (s.askReader) steps.push({ id: 'reader', step: 2 })
  for (const q of questionsOf(s)) steps.push({ id: q.id, step: q.step, q })
  steps.push({ id: 'name', step: 7 }, { id: 'note', step: 8 })
  return steps
}

export const optionOf = (q: SignupQuestion, id: string) => q.options.find((o) => o.id === id)

/* "AI agent checks" keeps its capitals; "Pitch packs" becomes "pitch packs". */
export const lower = (t: string) => (t.length > 1 && t[1] === t[1].toUpperCase() && /[A-Z]/.test(t[1]) ? t : t.charAt(0).toLowerCase() + t.slice(1))

export const fill = (t: string, values: Record<string, string>) => t.replace(/\{(\w+)\}/g, (m, k: string) => (k in values ? values[k] : m))

export function questionText(q: SignupQuestion, company: string) {
  const c = company.trim()
  return c || !q.questionNoCompany ? fill(q.question, { company: c }) : q.questionNoCompany
}

/* What an answer says in the sheet and on the thank you: the labels, "Something else: what they typed". */
export function answerText(q: SignupQuestion, a?: Answer) {
  if (!a) return ''
  return a.picked
    .map((id) => {
      const o = optionOf(q, id)
      if (!o) return ''
      return o.other && a.other?.trim() ? `${o.label}: ${a.other.trim()}` : o.label
    })
    .filter(Boolean)
    .join(', ')
}

/* The first job's option, when the reader's own first job question was answered. */
function firstJobOption(s: SignupState): SignupOption | undefined {
  const q = questionsOf(s).find((x) => x.key === 'first_job')
  const a = q && s.marks[q.id] === 'answered' ? s.answers[q.id] : undefined
  return q && a?.picked[0] ? optionOf(q, a.picked[0]) : undefined
}

/* Every option picked so far in this flow. */
function pickedOptions(s: SignupState): SignupOption[] {
  const out: SignupOption[] = []
  for (const q of questionsOf(s)) {
    if (s.marks[q.id] !== 'answered') continue
    for (const id of s.answers[q.id]?.picked ?? []) {
      const o = optionOf(q, id)
      if (o) out.push(o)
    }
  }
  return out
}

/* "For pitch packs." under "Where should results land first?". */
export function resultsHelper(s: SignupState) {
  const job = s.ctx.store ? copy.page.mystery.for : s.ctx.agent ? copy.page.verify.for : s.ctx.recipe ? lower(s.ctx.recipe.name) : firstJobOption(s)?.for
  return job ? fill(copy.card.results, { job }) : copy.card.resultsPlain
}

/* ---- What the founders read: Suggested first run and Call first ---- */

function suggested(s: SignupState) {
  if (s.ctx.store) return fill(copy.page.mystery.run, { store: hostOf(s.ctx.store) })
  if (s.ctx.agent) return fill(copy.page.verify.run, { agent: s.ctx.agent.trim() })
  if (s.ctx.recipe) return fill(copy.page.recipe.run, { recipe: s.ctx.recipe.name })
  return firstJobOption(s)?.run ?? ''
}

function ruleHolds(s: SignupState, rule: CallFirstRule): Record<string, string> | null {
  const qs = questionsOf(s)
  const values: Record<string, string> = {}
  for (const c of rule.when) {
    const q = qs.find((x) => x.key === c.key)
    const a = q && s.marks[q.id] === 'answered' ? s.answers[q.id] : undefined
    if (!q || !a) return null
    if ('in' in c) {
      if (!a.picked.some((id) => c.in.includes(id))) return null
      values[c.key] = lower(answerText(q, a))
    } else {
      const n = a.picked.filter((id) => !optionOf(q, id)?.none).length
      if (n < c.atLeast) return null
      values.count = String(n)
    }
  }
  return values
}

export function callFirst(s: SignupState): { reason: string; open: string } | null {
  if (s.ctx.store) return copy.ready.shop
  if (s.ctx.agent) return copy.ready.check
  if (firstJobOption(s)?.offer === 'verify') return copy.ready.verify
  const rule = readers[s.reader ?? 'other'].callFirst
  const values = rule && ruleHolds(s, rule)
  return rule && values ? { reason: fill(rule.reason, values), open: rule.open } : null
}

/* Whether "No" is true: the reader's rule was checked against answers, never against a blank. True when every
   question the rule reads was answered, or an answered one already fails it. A skipped or unreached question leaves
   Call first blank, so an agency of 100 clients that skipped the last question never reads "No". */
function decided(s: SignupState) {
  const rule = readers[s.reader ?? 'other'].callFirst
  if (!rule) return true
  const qs = questionsOf(s)
  let open = false
  for (const c of rule.when) {
    const q = qs.find((x) => x.key === c.key)
    const a = q && s.marks[q.id] === 'answered' ? s.answers[q.id] : undefined
    if (!q || !a) {
      open = true
      continue
    }
    const holds = 'in' in c ? a.picked.some((id) => c.in.includes(id)) : a.picked.filter((id) => !optionOf(q, id)?.none).length >= c.atLeast
    if (!holds) return true
  }
  return !open
}

/* The thank you's 1 next step (content/signup.ts, `next`, says the order). */
export type NextKey = keyof Omit<typeof copy.next, 'errors'>
export function nextStepFor(s: SignupState): NextKey | null {
  const here = (to: string) => s.ctx.page === to
  if (s.ctx.store || s.ctx.agent) return here(copy.next.report.link.to) ? null : 'report'
  if (firstJobOption(s)?.offer === 'verify') return 'verify'
  if (s.reader === 'agency') return 'agencyShop'
  if (pickedOptions(s).some((o) => o.offer === 'mystery')) return 'shop'
  if (s.reader === 'developer') return here(copy.next.developer.link.to) ? null : 'developer'
  if (s.reader === 'sales') return 'account'
  if (s.reader === 'marketing') return 'rival'
  return 'company'
}

/* ---- The snapshot: every column this sign up can fill, by its JSON key (waitlist/Code.js, FIELDS) ---- */

const KEYS = Array.from(new Set(Object.values(readers).flatMap((r) => r.questions.map((q) => q.key)).concat(['first_job', 'job_detail'])))

export type Snapshot = Record<string, string> & { sid: string; email: string; step: string; source: string; page: string }

export function snapshot(s: SignupState, drafts = false): Snapshot {
  const skipped = copy.card.skipped
  const body: Snapshot = {
    sid: s.sid,
    email: s.email,
    step: String(s.done ? 9 : s.reached),
    source: s.ctx.source,
    page: s.ctx.page,
    interest: s.ctx.interest ?? '',
    store: s.next?.kind === 'mystery' ? s.next.value : (s.ctx.store ?? ''),
    agent: s.next?.kind === 'verify' ? s.next.value : (s.ctx.agent ?? ''),
  }
  if (copy.keepArrivedFrom) body.arrived_from = s.ctx.arrivedFrom ?? ''

  const nameMark = s.marks.name
  body.name = nameMark === 'skipped' ? skipped : nameMark || drafts ? s.name.trim() : ''
  /* The company from the email is a fact we already have: it's sent from the start, and a skip never blanks it. */
  body.company = s.companyFilled ? s.company.trim() : nameMark === 'skipped' ? skipped : nameMark || drafts ? s.company.trim() : ''

  const readerMark = s.marks.reader
  body.reader = s.reader ? readerLabel(s.reader) : readerMark === 'skipped' ? skipped : ''
  body.reader_from = s.reader ? s.readerFrom : ''
  body.other_role = s.reader === 'other' ? s.readerOther.trim() : ''

  for (const k of KEYS) body[k] = ''
  for (const q of questionsOf(s)) {
    const mark = s.marks[q.id]
    body[q.key] = mark === 'skipped' ? skipped : mark === 'answered' ? answerText(q, s.answers[q.id]) : ''
    if (q.key === 'job_detail' && mark === 'answered') body.job_detail = `${q.question} ${body.job_detail}`
  }
  if (s.ctx.store) body.first_job = copy.page.mystery.firstJob
  else if (s.ctx.agent) body.first_job = copy.page.verify.firstJob
  else if (s.ctx.recipe) body.first_job = s.ctx.recipe.name

  body.suggested = suggested(s)
  const cf = callFirst(s)
  body.call_first = cf ? cf.reason : decided(s) ? copy.ready.no : ''
  body.note = s.marks.note === 'skipped' ? skipped : s.marks.note || drafts ? s.note.trim() : ''
  body.next_step = s.next?.sheet ?? ''
  body.start_with = s.next?.kind === 'company' ? s.next.value : ''
  return body
}

/* ---- The company, from the email ---- */

/* Short second levels under a 2 letter country: northwind-labs.co.uk is Northwind Labs. */
const SECOND_LEVEL = new Set(['co', 'com', 'org', 'net', 'ac', 'gov', 'ltd', 'plc', 'edu', 'nhs', 'sch', 'me'])

export function companyFromEmail(email: string) {
  const parts = (email.split('@')[1] ?? '').trim().toLowerCase().split('.').filter(Boolean)
  if (parts.length < 2) return ''
  const tld = parts[parts.length - 1]
  const i = parts.length >= 3 && tld.length === 2 && SECOND_LEVEL.has(parts[parts.length - 2]) ? parts.length - 3 : parts.length - 2
  const name = parts[i]
  if (!name || copy.name.freeMail.includes(name)) return ''
  return name
    .split(/[-_]+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

/* ---- The store: lib/signupStore.ts holds the state; these change it ---- */

/* The sign up the email starts, once step 1 has saved (CaptureForm sends it with lib/signupStore's stepOne, under the
   same sign up ID). It opens on the first step after the email. */
export function draft(email: string, ctx: Context, sid = newId(), t = Date.now()): SignupState {
  const company = companyFromEmail(email)
  const s: SignupState = {
    v: 1,
    sid,
    email: email.trim(),
    ctx,
    t,
    reader: ctx.pageReader,
    askReader: !ctx.pageReader,
    readerFrom: ctx.pageReader ? 'Page' : '',
    readerOther: '',
    name: '',
    company,
    companyFilled: !!company,
    note: '',
    answers: {},
    marks: { email: 'answered' },
    current: '',
    reached: 1,
    done: false,
    preview: false,
    owner: '',
    seq: 0,
  }
  s.current = flowOf(s)[1].id
  return s
}

/* The card opens. Where the page already named the first job (a free shop or check, a recipe), the row gets it now,
   with its Call first, so a sign up that stops here still sorts. */
function opened(s: SignupState) {
  watchLeaving()
  if (s.ctx.store || s.ctx.agent || s.ctx.recipe) queueSnapshot(snapshot(s))
}

export function start(s: SignupState, owner: string, preview: boolean) {
  const next = { ...s, owner, preview, seq: 1 }
  set(next)
  opened(next)
}

/* The beacon for a page that closes with something unsent: set up once, as soon as there is a sign up to lose. */
let leaving = false
function watchLeaving() {
  if (leaving || typeof window === 'undefined') return
  leaving = true
  window.addEventListener('pagehide', flushOnLeave)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushOnLeave()
  })
}

/* A reload: the card opens again at the first unanswered step, within 24 hours of the email (CaptureForm asks once it
   has seen a sign up in storage, so a page without one never loads this). A pending sign up (the page reloaded while
   the card's code loaded) becomes a full one here, under the sign up ID its email was saved with. */
export function resume() {
  watchLeaving()
  const found = getSignup() ? null : saved()
  if (!found) return
  if ('pending' in found) {
    const s = { ...draft(found.email, found.ctx, found.sid, found.t), preview: found.preview, seq: 1 }
    set(s)
    opened(s)
    return
  }
  const first = flowOf(found).find((x) => !found.marks[x.id])
  set({ ...found, current: first?.id ?? 'note', returnTo: undefined, owner: '', seq: found.seq + 1 }, false)
}

/* The page is closing: anything not yet sent leaves as a beacon, typed drafts included. */
export function flushOnLeave() {
  const s = getSignup()
  if (s && (hasUnsent() || s.dirty) && beaconSnapshot(snapshot(s, true))) set({ ...s, dirty: false })
}

function update(patch: Partial<SignupState>, opts: { send?: boolean; move?: boolean } = {}) {
  const state = getSignup()
  if (!state) return
  const next = { ...state, ...patch }
  if (opts.move) next.seq = state.seq + 1
  next.dirty = opts.send ? false : (patch.name !== undefined || patch.company !== undefined || patch.note !== undefined) || state.dirty
  set(next)
  if (opts.send) queueSnapshot(snapshot(next))
}

/* Typing: kept, sent with the step. */
export function setText(field: 'name' | 'company' | 'note' | 'readerOther', value: string) {
  update(field === 'company' ? { company: value, companyFilled: false } : { [field]: value })
}

export function setAnswer(id: string, a: Answer) {
  const state = getSignup()
  if (!state) return
  update({ answers: { ...state.answers, [id]: a } })
}

/* Where to go after a step: back to the thank you if they came from it, else the first step after this one that has
   no answer yet, else the first anywhere, else the note. */
function after(s: SignupState, id: string) {
  if (s.returnTo === 'thanks' && s.done) return 'thanks'
  const flow = flowOf(s)
  const i = flow.findIndex((x) => x.id === id)
  const later = flow.slice(i + 1).find((x) => !s.marks[x.id])
  const any = flow.find((x) => !s.marks[x.id])
  if (!later && !any && s.done) return 'thanks'
  return (later ?? any ?? flow[flow.length - 1]).id
}

/* Next, Skip and the 1 tap that moves on. */
export function complete(id: string, skip: boolean, owner: string) {
  const s = getSignup()
  if (!s) return
  const flow = flowOf(s)
  const step = flow.find((x) => x.id === id)
  const answer = s.answers[id]
  let mark: Mark = skip ? 'skipped' : 'answered'
  const patch: Partial<SignupState> = {}

  if (id === 'name') {
    if (!skip && !s.name.trim() && !s.company.trim()) mark = 'skipped'
  } else if (id === 'note') {
    if (!skip && !s.note.trim()) mark = 'skipped'
    if (skip) patch.note = ''
  } else if (id === 'reader') {
    const pick = answer?.picked[0] as RoleId | undefined
    if (skip || !pick) {
      /* On a reader's own page, skipping "Change" keeps the page's reader. */
      if (s.ctx.pageReader) {
        mark = 'answered'
        Object.assign(patch, { reader: s.ctx.pageReader, readerFrom: 'Page' })
      } else {
        mark = 'skipped'
        Object.assign(patch, { reader: undefined, readerFrom: '' })
      }
    } else {
      const from = s.ctx.pageReader ? (pick === s.ctx.pageReader ? 'Page' : 'Changed') : 'Asked'
      Object.assign(patch, { reader: pick, readerFrom: from })
      /* A new reader brings new questions: they come next, even from the thank you. */
      if (pick !== s.reader) patch.returnTo = undefined
    }
  } else if (step?.q) {
    const picked = answer?.picked ?? []
    if (!skip && !picked.length) mark = 'skipped'
    if (mark === 'skipped') patch.answers = { ...s.answers, [id]: { picked: [] } }
  }

  const marks = { ...s.marks, [id]: mark }
  const reached = Math.max(s.reached, step?.step ?? s.reached)
  const next = { ...s, ...patch, marks, reached }
  /* The last step: Finish and Skip and finish both end on the thank you. */
  const finishing = id === 'note'
  const current = finishing ? 'thanks' : after(next, id)
  update(
    {
      ...patch,
      marks,
      reached,
      current,
      returnTo: current === 'thanks' ? undefined : next.returnTo,
      done: s.done || finishing,
      doneOn: finishing && typeof location !== 'undefined' ? location.pathname : s.doneOn,
      owner,
    },
    { send: true, move: true },
  )
}

/* Back, a square, or Change on the thank you. */
export function go(id: string, owner: string, fromThanks = false) {
  const state = getSignup()
  if (!state) return
  update({ current: id, owner, returnTo: fromThanks ? 'thanks' : state.returnTo }, { move: true })
}

/* "Change" beside "For agencies.": the reader question joins the flow, first, right after the email. */
export function changeReader(owner: string, fromThanks = false) {
  const state = getSignup()
  if (!state) return
  const answers = { ...state.answers, reader: { picked: state.reader ? [state.reader] : [] } }
  update({ askReader: true, answers, current: 'reader', owner, returnTo: fromThanks ? 'thanks' : undefined }, { move: true })
}

export function saveNext(next: { kind: string; sheet: string; value: string }) {
  update({ next }, { send: true })
}

/* The page's own "Try again" for unsent answers. */
export function resend() {
  const state = getSignup()
  if (state) queueSnapshot(snapshot(state))
}

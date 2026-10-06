import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent, type KeyboardEvent, type MouseEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { capture as captureCopy } from '../content/capture'
import { readers, signup as copy, type SignupOption, type SignupQuestion } from '../content/signup'
import {
  answerText,
  changeReader,
  complete,
  fill,
  flowOf,
  go,
  lower,
  nextStepFor,
  pickOption,
  questionText,
  readerLabel,
  resend,
  resultsHelper,
  saveNext,
  setAnswer,
  setText,
  type NextKey,
  type SignupState,
  type Step,
} from '../lib/signup'
import { useSignup } from '../lib/signupStore'
import { hostOf, isAddress, isAgent, saveStatus } from '../lib/waitlist'
import { StatusMark } from './Logo'

/* The sign up card (SIGNUP.md in the workspace, content/signup.ts for every word). The thank you after the email
   becomes this card in the same spot: 1 question at a time, a row of squares for progress (each answered or skipped
   square is a way back), Back and Skip on every step, then a thank you with 1 next step.
   - It is its own chunk, loaded on demand (lib/signupStore.ts, loadCard), never with the page. CaptureForm imports its
     styles, so they keep their place in the site's 1 sheet, and the prerender writes them into every page with a form.
   - Every step sits in 1 grid cell, the hidden ones inert and invisible, so on a wide card the card keeps the height
     of its tallest step and the page never jumps; on a phone each step takes its own height (SignupSteps.css).
   - Single choice: a tap or click picks and moves on 250ms later, once the chip has filled. A pick made from the keys
     (arrows, or 1 to 9) never moves on: Enter does, wherever the focus is in the step. "Something else" opens a short
     field and waits for Next.
   - Multi select (the chips with the plus that becomes a tick): a tap, Space or a number key ticks or unticks, and the
     picks keep the order they were ticked in (the first pick leads: lib/signup.ts). Enter or Next moves on. Ticking
     "Something else" with a tap puts the caret in its field. A single choice never shows a box, and a multi select
     never shows a ring (SignupSteps.css).
   - Back, Skip and Next sit in the same place on every step: Back and Skip on the left, Next on the right. On a single choice, Next appears once something is
     picked (for the keys, and for a step they came back to), and keeps its space until then, so a tap on the strongest
     button never skips a question unseen. On a multi select or a typed step, Next with nothing in it counts as Skip.
   - Focus moves to each new step's question (its legend), which reads "Question 4 of 7." first; on the thank you, to
     its title. Only the form the reader is using moves focus (`owner`); the page's other forms just follow along.
   - Saving never makes anyone wait: each step is sent in the background (lib/signup, lib/waitlist). */

const ADVANCE_MS = 250

function Arrow() {
  return (
    <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
    </svg>
  )
}

function Plus() {
  return (
    <svg className="ob-chip-glyph" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path className="ob-chip-plus" d="M6 2v8M2 6h8" />
      <path className="ob-anim-check" pathLength={1} d="M2.2 6.3l2.4 2.4L9.8 3.4" />
    </svg>
  )
}

const shortOf = (step: Step) =>
  step.id === 'email' ? 'Email' : step.id === 'name' ? copy.name.short : step.id === 'reader' ? copy.reader.short : step.id === 'note' ? copy.note.short : (step.q?.short ?? '')

/* The value set as 1 unbreakable piece: an email never splits at its hyphen. */
function withValues(t: string, values: Record<string, string>): ReactNode[] {
  return t.split(/(\{\w+\})/).map((part, i) => {
    const m = /^\{(\w+)\}$/.exec(part)
    return m && m[1] in values ? (
      <span className="s-capture__value" key={i}>
        {values[m[1]]}
      </span>
    ) : (
      part
    )
  })
}

/* The words a free shop or check says: the page's own (Capture.done), else the shared ones. */
const doneOf = (s: SignupState) => s.ctx.done ?? (s.ctx.agent ? captureCopy.done.verify : captureCopy.done.mystery)

/* The store or AI agent is set without its https://, as 1 piece. */
const shopValues = (s: SignupState) => ({ store: hostOf(s.ctx.store ?? ''), agent: hostOf(s.ctx.agent ?? ''), email: s.email })

export function SignupSteps({ owner }: { owner: string }) {
  const s = useSignup()
  const root = useRef<HTMLDivElement>(null)
  const seen = useRef(0)

  /* Focus follows the step the reader just took, in the form they're using. The first card focuses its title. */
  useEffect(() => {
    if (!s || s.seq === seen.current) return
    const first = seen.current === 0
    seen.current = s.seq
    if (s.owner !== owner) return
    const el =
      first || s.current === 'thanks'
        ? root.current?.querySelector<HTMLElement>('.ob-confirm-title')
        : root.current?.querySelector<HTMLElement>(`[data-step="${s.current}"] .s-signup__q`)
    el?.focus()
  }, [s, owner])

  if (!s) return null
  return (
    <div ref={root} className="s-signup">
      {s.current === 'thanks' ? <Thanks s={s} owner={owner} /> : <Card s={s} owner={owner} />}
    </div>
  )
}

function Title({ text }: { text: ReactNode }) {
  return (
    <p className="ob-confirm-title" tabIndex={-1}>
      <span className="s-capture__mark" aria-hidden="true">
        <StatusMark state="landed" size={22} />
      </span>
      <span>{text}</span>
    </p>
  )
}

function Foot({ preview }: { preview: boolean }) {
  return (
    <>
      <p className="s-signup__foot">
        {copy.card.footer}{' '}
        <Link className="s-capture__plink" to={captureCopy.privacy.to}>
          {captureCopy.privacy.link}
        </Link>
      </p>
      {preview && <p className="s-capture__preview">{copy.card.preview}</p>}
    </>
  )
}

function Card({ s, owner }: { s: SignupState; owner: string }) {
  const uid = useId()
  const flow = flowOf(s)
  const index = Math.max(1, flow.findIndex((x) => x.id === s.current))
  const step = flow[index]
  const last = step.id === 'note'
  const timer = useRef<number | undefined>(undefined)
  /* A tap on "Something else" puts the caret in its field as the field opens. */
  const focusOther = useRef('')
  const otherRef = (id: string, el: HTMLInputElement | null) => {
    if (el && focusOther.current === id) {
      focusOther.current = ''
      el.focus()
    }
  }

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const pageReader = s.ctx.pageReader
  const shownReader = s.reader ?? pageReader
  const readerLine = pageReader && shownReader && step.id !== 'reader' ? readers[shownReader].line : undefined

  const advance = (id: string) => {
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => complete(id, false, owner), ADVANCE_MS)
  }
  const stop = () => window.clearTimeout(timer.current)

  function next(e?: FormEvent) {
    e?.preventDefault()
    stop()
    complete(step.id, false, owner)
  }

  function back() {
    stop()
    const prev = flow[index - 1]
    if (prev && prev.id !== 'email') go(prev.id, owner)
  }

  /* The options of the step on screen, for the number keys. */
  const options: SignupOption[] = step.id === 'reader' ? copy.reader.options : (step.q?.options ?? [])
  const multi = !!step.q?.multi

  function pick(id: string, o: SignupOption, isMulti: boolean, via: 'tap' | 'key') {
    const opts = id === 'reader' ? copy.reader.options : (flow.find((x) => x.id === id)?.q?.options ?? [])
    const picked = pickOption(id, opts, o, isMulti)
    if (isMulti) {
      if (o.other && via === 'tap' && picked.includes(o.id)) focusOther.current = id
      return
    }
    if (o.other) {
      stop()
      if (via === 'tap') focusOther.current = id
    } else if (via === 'tap') advance(id)
    else stop()
  }

  /* A single choice with nothing picked yet: Next waits, and Enter does nothing (Skip is the way past it). */
  const single = step.id === 'reader' || (!!step.q && !step.q.multi)
  const idle = single && !s.answers[step.id]?.picked.length

  function onKeyDown(e: KeyboardEvent<HTMLFormElement>) {
    const t = e.target as HTMLElement
    const typing = t instanceof HTMLTextAreaElement || (t instanceof HTMLInputElement && (t.type === 'text' || t.type === 'email'))
    if (typing || e.altKey || e.ctrlKey || e.metaKey) return
    /* Enter moves on from anywhere in the step (the question, a chip) but a button or a link, which do their own. */
    if (e.key === 'Enter' && !(t instanceof HTMLButtonElement) && !(t instanceof HTMLAnchorElement)) {
      e.preventDefault()
      if (!idle) next()
      return
    }
    const n = Number(e.key)
    if (n >= 1 && n <= options.length) {
      e.preventDefault()
      pick(step.id, options[n - 1], multi, 'key')
    }
  }

  const total = flow.length

  return (
    <div className="ob-confirm s-signup__card">
      <Title text={s.ctx.store || s.ctx.agent ? withValues(doneOf(s).title, shopValues(s)) : copy.card.title} />
      <p className="ob-confirm-line s-signup__line">{withValues(copy.card.line, { email: s.email })}</p>

      <div className="s-signup__bar">
        <div className="s-signup__progress">
          <div className="s-signup__squares" role="group" aria-label={copy.card.progressLabel}>
            {flow.map((x, i) => {
              const mark = s.marks[x.id]
              const cls = `s-signup__sq${mark === 'answered' ? ' is-done' : mark === 'skipped' ? ' is-skipped' : ''}${x.id === s.current ? ' is-current' : ''}`
              const canGo = !!mark && x.id !== 'email' && x.id !== s.current
              return canGo ? (
                <button
                  key={x.id}
                  type="button"
                  className={cls}
                  aria-label={fill(mark === 'skipped' ? copy.card.squareSkipped : copy.card.squareAnswered, { n: String(i + 1), short: lower(shortOf(x)) })}
                  onClick={() => {
                    stop()
                    go(x.id, owner)
                  }}
                >
                  <span className="s-signup__sqm" />
                </button>
              ) : (
                <span key={x.id} className={cls} aria-hidden="true">
                  <span className="s-signup__sqm" />
                </span>
              )
            })}
          </div>
          <span className="s-signup__count" aria-hidden="true">
            {fill(copy.card.progress, { n: String(index + 1), total: String(total) })}
          </span>
        </div>
        {readerLine && (
          <p className="s-signup__for">
            <span>{readerLine}</span>{' '}
            <button
              type="button"
              className="s-signup__change"
              onClick={() => {
                stop()
                changeReader(owner)
              }}
            >
              {copy.card.change}
              <span className="ob-sr"> {lower(copy.reader.short)}</span>
            </button>
          </p>
        )}
      </div>

      <form className="s-signup__form" noValidate onSubmit={next} onKeyDown={onKeyDown}>
        <div className="s-signup__steps">
          {flow.map((x, i) =>
            x.id === 'email' ? null : (
              <StepPanel
                key={x.id}
                s={s}
                step={x}
                uid={uid}
                current={x.id === s.current}
                n={i + 1}
                total={total}
                onPick={pick}
                otherRef={otherRef}
              />
            ),
          )}
        </div>

        <div className="s-signup__actions">
          {index > 1 && (
            <button type="button" className="ob-btn ob-btn--ghost ob-btn--sm s-signup__back" onClick={back}>
              <span className="ob-btn-label">{copy.card.back}</span>
            </button>
          )}
          <button
            type="button"
            className="ob-btn ob-btn--ghost ob-btn--sm s-signup__skip"
            onClick={() => {
              stop()
              complete(step.id, true, owner)
            }}
          >
            <span className="ob-btn-label">{last ? copy.card.skipFinish : copy.card.skip}</span>
          </button>
          <button type="submit" className={`ob-btn ob-btn--sm s-signup__next${idle ? ' is-idle' : ''}`}>
            <span className="ob-btn-label">{last ? copy.card.finish : copy.card.next}</span>
          </button>
        </div>
      </form>

      <Foot preview={s.preview} />
    </div>
  )
}

type PanelProps = {
  s: SignupState
  step: Step
  uid: string
  current: boolean
  n: number
  total: number
  onPick: (id: string, o: SignupOption, multi: boolean, via: 'tap' | 'key') => void
  otherRef: (id: string, el: HTMLInputElement | null) => void
}

function StepPanel({ s, step, uid, current, n, total, onPick, otherRef }: PanelProps) {
  const base = `${uid}-${step.id}`
  const prefix = <span className="ob-sr">{fill(copy.card.question, { n: String(n), total: String(total) })} </span>
  const cls = `s-signup__step${current ? ' is-current ob-anim-rise' : ''}`

  if (step.id === 'name') {
    const company = (s.reader ?? s.ctx.pageReader) === 'agency' ? (readers.agency.companyLabel ?? copy.name.company) : copy.name.company
    return (
      <fieldset className={cls} data-step="name" inert={!current}>
        <legend className="s-signup__q" tabIndex={-1}>
          {prefix}
          {copy.name.question}
        </legend>
        <div className="s-signup__pair">
          <div className="ob-field">
            <label className="ob-label" htmlFor={`${base}-name`}>
              {copy.name.name}
            </label>
            <input
              className="ob-input"
              id={`${base}-name`}
              type="text"
              autoComplete="name"
              maxLength={100}
              value={s.name}
              onChange={(e) => setText('name', e.target.value)}
            />
          </div>
          <div className="ob-field">
            <label className="ob-label" htmlFor={`${base}-company`}>
              {company}
            </label>
            <input
              className="ob-input"
              id={`${base}-company`}
              type="text"
              autoComplete="organization"
              maxLength={120}
              value={s.company}
              onChange={(e) => setText('company', e.target.value)}
              aria-describedby={s.companyFilled ? `${base}-filled` : undefined}
            />
            {s.companyFilled && (
              <div className="ob-field-foot">
                <p className="ob-field-help" id={`${base}-filled`}>
                  {copy.name.filled}
                </p>
              </div>
            )}
          </div>
        </div>
      </fieldset>
    )
  }

  if (step.id === 'note') {
    const reader = readers[s.reader ?? 'other']
    const len = s.note.length
    return (
      <fieldset className={cls} data-step="note" inert={!current}>
        <legend className="s-signup__q" id={`${base}-q`} tabIndex={-1}>
          {prefix}
          {copy.note.label} <span className="ob-field-optional">{copy.note.optional}</span>
        </legend>
        <div className="ob-field">
          <textarea
            className="ob-textarea s-signup__note"
            aria-labelledby={`${base}-q`}
            aria-describedby={`${base}-help`}
            maxLength={copy.note.max}
            placeholder={reader.note}
            value={s.note}
            onChange={(e) => setText('note', e.target.value)}
          />
          <div className="ob-field-foot">
            <p className="ob-field-help" id={`${base}-help`}>
              {copy.note.helper}
            </p>
            {len >= copy.note.countFrom && (
              <span className={`ob-field-count${len >= copy.note.max ? ' is-over' : ' is-near'}`} aria-live="polite">
                {fill(copy.note.count, { n: String(len), max: String(copy.note.max) })}
              </span>
            )}
          </div>
        </div>
      </fieldset>
    )
  }

  /* A question: the reader's, or "Which of these is you?". */
  const isReader = step.id === 'reader'
  const q: SignupQuestion | undefined = step.q
  const options = isReader ? copy.reader.options : (q?.options ?? [])
  const multi = !!q?.multi
  const text = isReader ? copy.reader.question : q ? questionText(q, s.company) : ''
  /* The bank's results question names the first job; a page's own question in its place says nothing extra. */
  const helper = isReader ? copy.reader.helper : q?.key === 'results' && q.id !== 'page' ? resultsHelper(s) : q?.helper
  const a = s.answers[step.id]
  const other = options.find((o) => o.other && a?.picked.includes(o.id))
  const otherLabel = isReader ? copy.reader.other.label : copy.card.other
  /* The job question's helper promises "We start with your first pick", so once 2 or more are ticked, the first carries
     a quiet "1st" (read as "first pick"). */
  const lead = q?.key === 'first_job' && multi && (a?.picked.length ?? 0) > 1 ? a?.picked[0] : undefined

  return (
    <fieldset className={cls} data-step={step.id} inert={!current} aria-describedby={helper ? `${base}-help` : undefined}>
      <legend className="s-signup__q" tabIndex={-1}>
        {prefix}
        {text}
      </legend>
      {helper && (
        <p className="s-signup__help" id={`${base}-help`}>
          {helper}
        </p>
      )}
      <div className={`ob-chips s-signup__chips${multi ? ' is-multi' : ''}`}>
        {options.map((o) => (
          <label className="ob-chip" key={o.id}>
            <input
              className="ob-chip-input"
              type={multi ? 'checkbox' : 'radio'}
              name={base}
              value={o.id}
              checked={!!a?.picked.includes(o.id)}
              onChange={(e) => {
                /* A keyboard pick (arrows, Space) arrives as a click with no detail: it picks and never moves on. */
                const native = e.nativeEvent as unknown as globalThis.MouseEvent
                onPick(step.id, o, multi, native.detail > 0 ? 'tap' : 'key')
              }}
              onClick={(e: MouseEvent<HTMLInputElement>) => {
                /* A tap on the chip that's already chosen moves on: onChange never fires for it. */
                if (!multi && e.detail > 0 && a?.picked[0] === o.id && !o.other) onPick(step.id, o, false, 'tap')
              }}
            />
            <span className="ob-chip-label">
              {multi && <Plus />}
              {o.label}
              {lead === o.id && (
                <>
                  <span className="s-signup__first" aria-hidden="true">
                    1st
                  </span>
                  <span className="ob-sr">, first pick</span>
                </>
              )}
            </span>
          </label>
        ))}
      </div>
      {other && (
        <div className="ob-field s-signup__other ob-anim-message">
          <label className="ob-label" htmlFor={`${base}-other`}>
            {otherLabel}
          </label>
          <input
            ref={(el) => otherRef(step.id, el)}
            className="ob-input"
            id={`${base}-other`}
            type="text"
            maxLength={120}
            autoComplete={isReader ? 'organization-title' : 'off'}
            placeholder={isReader ? copy.reader.other.placeholder : undefined}
            value={isReader ? s.readerOther : (a?.other ?? '')}
            onChange={(e) => (isReader ? setText('readerOther', e.target.value) : setAnswer(step.id, { picked: a?.picked ?? [], other: e.target.value }))}
          />
        </div>
      )}
    </fieldset>
  )
}

/* ---- The thank you ---- */

function Thanks({ s, owner }: { s: SignupState; owner: string }) {
  const id = useId()
  const [open, setOpen] = useState(false)
  const save = useSyncExternalStore(saveStatus.subscribe, saveStatus.get, () => 'idle' as const)
  const first = s.marks.name === 'answered' ? s.name.trim().split(/\s+/)[0] : ''
  const reply = copy.thanks.replyTime ? ` ${copy.thanks.replyTime}` : ''
  const shop = !!(s.ctx.store || s.ctx.agent)
  const done = s.ctx.done
  const line = shop ? (done?.line ?? copy.thanks.report) : s.reader === 'developer' ? copy.thanks.developer : copy.thanks.line
  const next = nextStepFor(s)
  const flow = flowOf(s).filter((x) => x.id !== 'email')

  const rows: { key: string; short: string; value: string; change: () => void }[] = []
  /* On a reader's page the reader is a fact the page gave: it reads first, with its own Change. */
  if (!s.askReader && s.reader) rows.push({ key: 'reader', short: copy.reader.short, value: readerLabel(s.reader), change: () => changeReader(owner, true) })
  for (const x of flow) {
    const mark = s.marks[x.id]
    let value = ''
    if (mark === 'skipped' || !mark) value = copy.card.skipped
    else if (x.id === 'name') value = [s.name.trim(), s.company.trim()].filter(Boolean).join(', ')
    else if (x.id === 'note') value = s.note.trim()
    else if (x.id === 'reader') value = s.reader === 'other' && s.readerOther.trim() ? `${readerLabel('other')}: ${s.readerOther.trim()}` : readerLabel(s.reader)
    else if (x.q) value = answerText(x.q, s.answers[x.id])
    rows.push({ key: x.id, short: shortOf(x), value: value || copy.card.skipped, change: () => go(x.id, owner, true) })
  }

  return (
    <div className="ob-confirm s-signup__card s-signup__card--thanks ob-anim-rise is-slow">
      <Title text={shop && done ? withValues(done.title, shopValues(s)) : first ? fill(copy.thanks.title, { name: first }) : copy.thanks.titlePlain} />
      <p className="ob-confirm-line s-signup__line">{withValues(line, { ...shopValues(s), reply })}</p>
      {save === 'failed' && (
        <p className="s-signup__unsaved ob-field-error" role="alert">
          {copy.thanks.unsaved}{' '}
          <button type="button" className="s-signup__change" onClick={resend}>
            {copy.thanks.retry}
          </button>
        </p>
      )}

      {next && <NextStep s={s} k={next} />}

      <div className="s-signup__answers">
        <button type="button" className="s-signup__disclose" aria-expanded={open} aria-controls={`${id}-list`} onClick={() => setOpen(!open)}>
          <span>{copy.thanks.answers}</span>
          <svg className="s-signup__chev" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
            <path d="M3 4.5 6 7.5 9 4.5" />
          </svg>
        </button>
        <dl className="s-signup__list" id={`${id}-list`} hidden={!open}>
          {rows.map((r) => (
            <div className="s-signup__row" key={r.key}>
              <dt>{r.short}</dt>
              <dd className={r.value === copy.card.skipped ? 'is-skipped' : undefined}>{r.value}</dd>
              <dd className="s-signup__rowact">
                <button type="button" className="s-signup__change" onClick={r.change}>
                  {copy.thanks.change}
                  <span className="ob-sr"> {lower(r.short)}</span>
                </button>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Foot preview={s.preview} />
    </div>
  )
}

function NextStep({ s, k }: { s: SignupState; k: NextKey }) {
  const id = useId()
  const n = copy.next[k]
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  if ('link' in n)
    return (
      <div className="s-signup__next-step">
        <p className="s-signup__next-h">{n.heading}</p>
        <Link className="ob-btn ob-btn--link s-signup__next-link" to={n.link.to}>
          <span className="ob-btn-label">{n.link.label}</span>
          <Arrow />
        </Link>
      </div>
    )

  const kind = n.kind
  const sheet = n.sheet
  const done = s.next && s.next.kind === kind ? s.next.value : ''
  if (done)
    return (
      <div className="s-signup__next-step is-done ob-anim-rise" role="status">
        <p className="s-signup__next-h">{withValues(n.done, { value: kind === 'verify' ? done : hostOf(done) })}</p>
        {'doneLine' in n && <p className="s-signup__next-line">{withValues(n.doneLine, { email: s.email })}</p>}
      </div>
    )

  function submit(e: FormEvent) {
    e.preventDefault()
    const v = value.trim()
    const empty = kind === 'verify' ? captureCopy.errors.agentEmpty : kind === 'mystery' ? captureCopy.errors.storeEmpty : copy.next.errors.companyEmpty
    const bad = kind === 'verify' ? captureCopy.errors.agentBad : kind === 'mystery' ? captureCopy.errors.storeBad : copy.next.errors.companyBad
    const ok = kind === 'verify' ? isAgent(v) : isAddress(v)
    if (!v || !ok) {
      setError(v ? bad : empty)
      inputRef.current?.focus()
      return
    }
    /* A store or an AI agent is kept as typed, as on the first step; a company to start with, as its address. */
    saveNext({ kind, sheet, value: kind === 'company' ? hostOf(v) : v })
  }

  const help = 'helper' in n ? n.helper : ''
  return (
    <form className={`s-signup__next-step${error ? ' is-error' : ''}`} noValidate onSubmit={submit} aria-labelledby={`${id}-h`}>
      <p className="s-signup__next-h" id={`${id}-h`}>
        {n.heading}
      </p>
      {'line' in n && <p className="s-signup__next-line">{n.line}</p>}
      <div className="s-signup__next-row">
        <label className="ob-sr" htmlFor={`${id}-v`}>
          {n.label}
        </label>
        <input
          ref={inputRef}
          className="ob-input"
          id={`${id}-v`}
          type="text"
          inputMode={kind === 'verify' ? undefined : 'url'}
          autoComplete="off"
          autoCapitalize="none"
          spellCheck={false}
          placeholder={n.placeholder}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            if (error) setError('')
          }}
          aria-invalid={!!error || undefined}
          aria-describedby={[error ? `${id}-err` : '', help ? `${id}-help` : ''].filter(Boolean).join(' ') || undefined}
        />
        <button type="submit" className="ob-btn ob-btn--sm s-signup__next-go">
          <span className="ob-btn-label">{n.button}</span>
        </button>
      </div>
      {(help || error) && (
        <div className="ob-field-foot">
          {help && (
            <p className="ob-field-help" id={`${id}-help`}>
              {help}
            </p>
          )}
          <p className="ob-field-error ob-anim-message" id={`${id}-err`} hidden={!error} role="alert">
            {error}
          </p>
        </div>
      )}
    </form>
  )
}

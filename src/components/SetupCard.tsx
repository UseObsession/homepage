import { useEffect, useId, useRef, useState, type FormEvent, type InputHTMLAttributes, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { catalog } from '../content/catalog'
import { kitLinks } from '../content/kitPaths'
import { destinations, doors, pieces, setup as copy, sizes, tools, type DoorId } from '../content/setup'
import { STEPS, blueprintNames, go, patch, picksOf, pieceNames, setupStore, useSave, useSetup, type SetupState, type SetupStep } from '../lib/setup'
import { hostOf, isAddress } from '../lib/waitlist'
import { StatusMark } from './Logo'
import { PersonaGlyph } from './persona/icons'

/* The sign-up card (lib/setup.ts): it opens where the email was typed and asks 3 short questions without leaving the
   page. How the team will use Obsession (the page picks a starting answer), what it needs first for that way in, then
   who to set it up for. The thank you says what happens next and links the next thing to read. Every step saves as it
   goes, and Back keeps what was typed. Styles: JoinCard.css (s-join), imported by CaptureForm. */

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

/* A sentence with {email}, {list}, {dest}, each value kept whole on 1 line. */
function fill(t: string, values: Record<string, string>): ReactNode[] {
  return t.split(/(\{\w+\})/).map((part, i) => {
    const m = /^\{(\w+)\}$/.exec(part)
    if (!m) return part
    return m[1] === 'dest' ? (
      values.dest
    ) : (
      <span key={i} className="s-join__value">
        {values[m[1]] ?? ''}
      </span>
    )
  })
}

const listOf = (items: string[]) => (items.length < 2 ? (items[0] ?? '') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`)

/* Chips that take any number: a name, its value, ticked or not. */
function Picks({ name, items, picked, onToggle }: { name: string; items: { id: string; label: string }[]; picked: string[]; onToggle: (id: string) => void }) {
  return (
    <div className="ob-chips">
      {items.map((it) => (
        <label className="ob-chip" key={it.id}>
          <input className="ob-chip-input" type="checkbox" name={name} value={it.id} checked={picked.includes(it.id)} onChange={() => onToggle(it.id)} />
          <span className="ob-chip-label">
            <Plus />
            {it.label}
          </span>
        </label>
      ))}
    </div>
  )
}

const toggleIn = (list: string[], id: string) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id])

export function SetupCard({ owner }: { owner: boolean }) {
  const s = useSetup()
  const save = useSave()
  const uid = useId()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const title = useRef<HTMLElement | null>(null)
  const setTitle = (el: HTMLElement | null) => {
    title.current = el
  }
  const firstField = useRef<HTMLInputElement>(null)
  const moved = useRef(false)

  const step = s?.step
  useEffect(() => {
    if (!owner || !step) return
    if (step === 'door' && !moved.current) firstField.current?.focus()
    else if (moved.current) title.current?.focus()
  }, [owner, step])

  if (!s) return null
  const id = (k: string) => `${uid}-${k}`
  const to = (next: SetupStep) => {
    moved.current = true
    setErrors({})
    go(next)
  }
  const at = STEPS.indexOf(s.step)

  const head = (
    <header className="s-join__head">
      <span className="s-join__mark" aria-hidden="true">
        <StatusMark state="landed" size={20} />
      </span>
      <div className="s-join__who">
        <p className="s-join__title">{copy.head.title}</p>
        <p className="s-join__email">{s.email}</p>
      </div>
      {s.step !== 'done' && (
        <p className="s-join__count" aria-hidden="true">
          {copy.head.step(at + 1, STEPS.length)}
        </p>
      )}
    </header>
  )
  const bar =
    s.step !== 'done' ? (
      <div className="s-join__bar" aria-hidden="true">
        {STEPS.map((x, i) => (
          <i key={x} className={i <= at ? 'is-on' : undefined} />
        ))}
      </div>
    ) : null
  const saving =
    save === 'failed' ? (
      <p className="s-join__save" role="alert">
        {copy.saved.failed}{' '}
        <button type="button" className="s-join__link" onClick={setupStore.retry}>
          {copy.saved.retry}
        </button>
      </p>
    ) : null
  const back = (step: SetupStep) => (
    <button type="button" className="ob-btn ob-btn--ghost" onClick={() => to(step)}>
      <span className="ob-btn-label">{copy.actions.back}</span>
    </button>
  )
  const next = (label: string) => (
    <button type="submit" className="ob-btn">
      <span className="ob-btn-label">{label}</span>
      <Arrow />
    </button>
  )
  const err = (k: string) =>
    errors[k] ? (
      <p className="ob-field-error ob-anim-message" id={id(`${k}-error`)}>
        {errors[k]}
      </p>
    ) : null

  /* ---- 1: how they'll use Obsession ---- */
  if (s.step === 'door') {
    const submit = (e: FormEvent) => {
      e.preventDefault()
      if (!s.door) {
        setErrors({ door: copy.door.error })
        return void title.current?.focus()
      }
      to('need')
    }
    return (
      <section className="s-join" aria-labelledby={id('q')}>
        {head}
        {bar}
        <form className="s-join__step" onSubmit={submit} noValidate key="door">
          <fieldset className="s-join__set" aria-describedby={errors.door ? id('door-error') : id('dhelp')}>
            <legend className="s-join__q" id={id('q')} tabIndex={-1} ref={setTitle}>
              {copy.door.title}
            </legend>
            <p className="s-join__help" id={id('dhelp')}>
              {copy.door.help}
            </p>
            <div className="s-join__doors">
              {doors.map((d, i) => (
                <label className="s-join__door" key={d.id}>
                  <input
                    ref={(s.door ? s.door === d.id : i === 0) ? firstField : undefined}
                    className="s-join__door-input"
                    type="radio"
                    name={id('door')}
                    value={d.id}
                    checked={s.door === d.id}
                    onChange={() => {
                      patch({ door: d.id as DoorId })
                      setErrors({})
                    }}
                  />
                  <span className="s-join__door-ic" aria-hidden="true">
                    <PersonaGlyph name={d.icon} />
                  </span>
                  <span className="s-join__door-words">
                    <b>{d.title}</b>
                    <span>{d.line}</span>
                  </span>
                  <span className="s-join__door-dot" aria-hidden="true" />
                </label>
              ))}
            </div>
            {err('door')}
          </fieldset>
          <div className="s-join__acts">{next(copy.actions.next)}</div>
        </form>
        {saving}
      </section>
    )
  }

  /* ---- 2: what they need first, for their way in ---- */
  if (s.step === 'need') {
    const picks = picksOf(s)
    const submit = (e: FormEvent) => {
      e.preventDefault()
      if (!picks.length && !(s.door === 'blueprint' && s.use.trim())) {
        setErrors({ need: s.door === 'build' ? copy.build.error : s.door === 'blueprint' ? copy.blueprint.error : copy.connect.error })
        return void title.current?.focus()
      }
      to('about')
    }
    const use = (label: string, placeholder: string) => (
      <div className="ob-field s-join__case">
        <div className="ob-field-head">
          <label className="ob-label" htmlFor={id('use')}>
            {label}
          </label>
          <span className="ob-field-optional">{copy.optional}</span>
        </div>
        <textarea className="ob-textarea" id={id('use')} rows={3} maxLength={1000} placeholder={placeholder} value={s.use} onChange={(e) => patch({ use: e.target.value })} />
      </div>
    )
    let body: ReactNode = null
    let q = ''
    let help = ''
    if (s.door === 'build') {
      q = copy.build.title
      help = copy.build.help
      body = (
        <>
          <Picks name="pieces" items={pieces.map((p) => ({ id: p.id, label: p.name }))} picked={s.pieces} onToggle={(v) => patch({ pieces: toggleIn(s.pieces, v) as SetupState['pieces'] })} />
          {err('need')}
          {use(copy.build.use.label, copy.build.use.placeholder)}
        </>
      )
    } else if (s.door === 'blueprint') {
      q = copy.blueprint.title
      help = s.interest && s.blueprints.includes(s.interest) ? copy.blueprint.helpPicked : copy.blueprint.help
      body = (
        <>
          {kitLinks.map((k) => {
            const items = catalog.recipes.filter((r) => r.group === k.name)
            if (!items.length) return null
            return (
              <div className="s-join__group" key={k.id}>
                <p className="s-join__glabel">{k.name}</p>
                <Picks name="blueprints" items={items.map((r) => ({ id: r.id, label: r.name }))} picked={s.blueprints} onToggle={(v) => patch({ blueprints: toggleIn(s.blueprints, v) })} />
              </div>
            )
          })}
          {err('need')}
          {use(copy.blueprint.use.label, copy.blueprint.use.placeholder)}
          <fieldset className="s-join__set s-join__size">
            <legend className="s-join__sub">
              {copy.blueprint.dest} <span className="ob-field-optional">{copy.optional}</span>
            </legend>
            <Picks name="dest" items={destinations.map((d) => ({ id: d, label: d }))} picked={s.dest} onToggle={(v) => patch({ dest: toggleIn(s.dest, v) })} />
          </fieldset>
        </>
      )
    } else {
      q = copy.connect.title
      help = copy.connect.help
      body = (
        <>
          <Picks name="tools" items={tools.map((t) => ({ id: t, label: t }))} picked={s.tools} onToggle={(v) => patch({ tools: toggleIn(s.tools, v) })} />
          {err('need')}
          {use(copy.connect.use.label, copy.connect.use.placeholder)}
        </>
      )
    }
    return (
      <section className="s-join" aria-labelledby={id('q')}>
        {head}
        {bar}
        <form className="s-join__step" onSubmit={submit} noValidate key={`need-${s.door}`}>
          <fieldset className="s-join__set" aria-describedby={errors.need ? id('need-error') : id('nhelp')}>
            <legend className="s-join__q" id={id('q')} tabIndex={-1} ref={setTitle}>
              {q}
            </legend>
            <p className="s-join__help" id={id('nhelp')}>
              {help}
            </p>
            {body}
          </fieldset>
          <div className="s-join__acts">
            {back('door')}
            {next(copy.actions.next)}
          </div>
        </form>
        {saving}
      </section>
    )
  }

  /* ---- 3: who to set it up for ---- */
  if (s.step === 'about') {
    const submit = (e: FormEvent) => {
      e.preventDefault()
      const found: Record<string, string> = {}
      if (!s.name.trim()) found.name = copy.about.errors.name
      if (!s.company.trim()) found.company = copy.about.errors.company
      if (!s.site.trim()) found.site = copy.about.errors.site
      else if (!isAddress(s.site)) found.site = copy.about.errors.siteBad
      setErrors(found)
      const first = ['name', 'company', 'site'].find((k) => found[k])
      if (first) return void document.getElementById(id(first))?.focus()
      patch({ site: hostOf(s.site) })
      to('done')
    }
    const field = (k: 'name' | 'company' | 'site', auto: string, extra: InputHTMLAttributes<HTMLInputElement> = {}) => (
      <div className={`ob-field${errors[k] ? ' is-error' : ''}`}>
        <label className="ob-label" htmlFor={id(k)}>
          {copy.about[k].label}
        </label>
        <input
          className="ob-input"
          id={id(k)}
          name={k === 'site' ? 'url' : k === 'company' ? 'organization' : 'name'}
          autoComplete={auto}
          required
          placeholder={copy.about[k].placeholder}
          value={s[k]}
          onChange={(e) => patch({ [k]: e.target.value })}
          aria-invalid={!!errors[k] || undefined}
          aria-describedby={errors[k] ? id(`${k}-error`) : undefined}
          {...extra}
        />
        {err(k)}
      </div>
    )
    return (
      <section className="s-join" aria-labelledby={id('q')}>
        {head}
        {bar}
        <form className="s-join__step" onSubmit={submit} noValidate key="about">
          <h3 className="s-join__q" id={id('q')} tabIndex={-1} ref={setTitle}>
            {copy.about.title}
          </h3>
          <div className="s-join__pair">
            {field('name', 'name')}
            {field('company', 'organization')}
          </div>
          {field('site', 'url', { type: 'text', inputMode: 'url', autoCapitalize: 'none', spellCheck: false })}
          <fieldset className="s-join__set s-join__size">
            <legend className="s-join__sub">
              {copy.about.size} <span className="ob-field-optional">{copy.optional}</span>
            </legend>
            <div className="ob-chips">
              {sizes.map((o) => (
                <label className="ob-chip" key={o}>
                  <input className="ob-chip-input" type="radio" name={id('size')} value={o} checked={s.size === o} onChange={() => patch({ size: o })} />
                  <span className="ob-chip-label">{o}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="s-join__acts">
            {back('need')}
            {next(copy.actions.finish)}
          </div>
        </form>
        {saving}
      </section>
    )
  }

  /* ---- Done: what happens next, and the next thing to read ---- */
  const door = (s.door || 'build') as DoorId
  const picks = picksOf(s)
  const first = s.name.trim().split(/\s+/)[0] ?? ''
  const dest = door === 'blueprint' && s.dest.length ? copy.done.dest(listOf(s.dest)) : ''
  const nextLink = door === 'blueprint' && s.blueprints[0] ? { label: `See ${blueprintNames([s.blueprints[0]])[0]}`, to: `/blueprints/${catalog.recipes.find((r) => r.id === s.blueprints[0])?.slug ?? ''}` } : copy.done.next[door]
  return (
    <section className="s-join s-join--done" aria-labelledby={id('q')}>
      <header className="s-join__head">
        <span className="s-join__mark" aria-hidden="true">
          <StatusMark state="landed" size={20} />
        </span>
        <div className="s-join__who">
          <h3 className="s-join__title" id={id('q')} tabIndex={-1} ref={setTitle}>
            {copy.done.title(first)}
          </h3>
        </div>
      </header>
      <p className="s-join__line">{fill(door === 'blueprint' && !picks.length && s.use.trim() ? copy.done.line.own : copy.done.line[door], { email: s.email, list: listOf(picks), dest })}</p>
      <dl className="s-join__sum">
        <div>
          <dt>{copy.sum.you}</dt>
          <dd>{[s.name.trim(), s.company.trim(), s.size && (s.size === 'Just me' ? 'just you' : `${s.size} people`)].filter(Boolean).join(', ')}</dd>
        </div>
        <div>
          <dt>{copy.sum.site}</dt>
          <dd>{s.site}</dd>
        </div>
        <div>
          <dt>{door === 'build' ? copy.sum.pieces : door === 'blueprint' ? copy.sum.blueprints : copy.sum.tools}</dt>
          <dd>{listOf(door === 'build' ? pieceNames(s.pieces) : picks)}</dd>
        </div>
        {door === 'blueprint' && s.dest.length > 0 && (
          <div>
            <dt>{copy.sum.dest}</dt>
            <dd>{listOf(s.dest)}</dd>
          </div>
        )}
      </dl>
      <div className="s-join__done-acts">
        <Link className="ob-btn ob-btn--secondary" to={nextLink.to}>
          <span className="ob-btn-label">{nextLink.label}</span>
          <Arrow />
        </Link>
        <button type="button" className="s-join__link s-join__edit" onClick={() => to('door')}>
          {copy.actions.edit}
        </button>
      </div>
      {saving}
    </section>
  )
}

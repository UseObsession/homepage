import { useEffect, useId, useRef, useState, useSyncExternalStore, type FormEvent, type ReactNode } from 'react'
import { catalog } from '../content/catalog'
import { agencyTypes, clientAsks, join as copy, offers, roles, sizes } from '../content/join'
import { JOBS } from '../content/nav'
import { MAX_BRANDS, askOf, brandOk, cleanBrands, go, listOf, patch, stepAfter, stepsOf, suggestionsOf, useJoin, type JoinState, type JoinStep } from '../lib/join'
import { hostOf, isAddress } from '../lib/waitlist'
import { retrySnapshot, saveStatus } from '../lib/waitlist'
import { StatusMark } from './Logo'

/* The waitlist card (lib/join.ts): it opens where the email was typed, once the email is saved, and asks the rest in
   4 short steps without leaving the page. Who they are (the page picks a default, so most confirm with 1 tap; an
   agency says what kind, in chips that open in place); name, company and website (all required, so we can reply and
   look at their store; the company and website guessed from a work email, the website's label in their words); up to
   5 brands (optional), worded for what the form offered or, without an offer, for who they are (client stores, their
   own store, rivals, accounts, the companies their agents need); the recipes they want first (at least 1, the page's
   own ticked) with an optional use case. Then the thank you says what happens next, in the offer's words. Every step
   saves as it goes, and Back keeps what was typed. Its styles are JoinCard.css, imported by CaptureForm so they keep
   their place in the site's 1 sheet. */


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

/* 1 optional tap under an answer (an agency's clients, a sales team's size): a quiet question, its chips, Optional. */
function Size({ name, question, options, value, onPick, optional }: { name: string; question: string; options: string[]; value: string; onPick: (v: string) => void; optional: string }) {
  return (
    <fieldset className="s-join__set s-join__size">
      <legend className="s-join__sub">
        {question} <span className="ob-field-optional">{optional}</span>
      </legend>
      <div className="ob-chips">
        {options.map((o) => (
          <label className="ob-chip" key={o}>
            <input className="ob-chip-input" type="radio" name={name} value={o} checked={value === o} onChange={() => onPick(o)} />
            <span className="ob-chip-label">{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

/* A sentence with {email}, {list}, {first} filled in, each value kept whole on 1 line. */
function fill(t: string, values: Record<string, string>): ReactNode[] {
  return t.split(/(\{\w+\})/).map((part, i) => {
    const m = /^\{(\w+)\}$/.exec(part)
    return m ? (
      <span key={i} className="s-join__value">
        {values[m[1]] ?? ''}
      </span>
    ) : (
      part
    )
  })
}

export function JoinCard({ owner }: { owner: boolean }) {
  const s = useJoin()
  const uid = useId()
  const save = useSyncExternalStore(saveStatus.subscribe, saveStatus.get, () => 'idle' as const)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const title = useRef<HTMLElement | null>(null)
  const setTitle = (el: HTMLElement | null) => {
    title.current = el
  }
  const firstField = useRef<HTMLInputElement>(null)
  const moved = useRef(false)

  /* Focus follows the reader's own steps: into the name on the first, onto the question after that. */
  const step = s?.step
  useEffect(() => {
    if (!owner || !step) return
    if (step === 'role' && !moved.current) firstField.current?.focus()
    else if (moved.current) title.current?.focus()
  }, [owner, step])

  if (!s) return null
  /* The brands question follows the offer, or who they are (lib/join askOf); a free check keeps the page's promise. */
  const offer = offers[askOf(s)]
  const free = s.free ? offers[s.offer].free : undefined
  /* Their route: the brands step only for those it fits (lib/join asksBrands). */
  const steps = stepsOf(s)
  const after = (step: JoinStep) => stepAfter(s, step, 1)
  const before = (step: JoinStep) => stepAfter(s, step, -1)

  const id = (k: string) => `${uid}-${k}`
  const to = (step: JoinStep) => {
    moved.current = true
    setErrors({})
    go(step)
  }

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
          {copy.head.step(steps.indexOf(s.step) + 1, steps.length)}
        </p>
      )}
    </header>
  )

  const bar =
    s.step !== 'done' ? (
      <div className="s-join__bar" aria-hidden="true">
        {steps.map((x, i) => (
          <i key={x} className={i <= steps.indexOf(s.step) ? 'is-on' : undefined} />
        ))}
      </div>
    ) : null

  const saving =
    save === 'failed' ? (
      <p className="s-join__save" role="alert">
        {copy.saved.failed}{' '}
        <button type="button" className="s-join__link" onClick={retrySnapshot}>
          {copy.saved.retry}
        </button>
      </p>
    ) : null

  const back = (step: JoinStep) => (
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

  /* ---- 1: who they are ---- */
  if (s.step === 'role') {
    const submit = (e: FormEvent) => {
      e.preventDefault()
      const found: Record<string, string> = {}
      if (!s.role) found.role = copy.role.errors.role
      else if (s.role === 'agency' && !s.agencyType) found.agency = copy.role.errors.agency
      setErrors(found)
      if (found.role || found.agency) return void title.current?.focus()
      to('about')
    }
    return (
      <section className="s-join" aria-labelledby={id('q')}>
        {head}
        {bar}
        <form className="s-join__step" onSubmit={submit} noValidate key="role">
          <fieldset className="s-join__set" aria-describedby={errors.role ? id('role-error') : id('rolehelp')}>
            <legend className="s-join__q" id={id('q')} tabIndex={-1} ref={setTitle}>
              {copy.role.title}
            </legend>
            <p className="s-join__help" id={id('rolehelp')}>
              {copy.role.help}
            </p>
            <div className="ob-chips">
              {roles.map((r, i) => (
                <label className="ob-chip" key={r.id}>
                  <input
                    ref={(s.role ? s.role === r.id : i === 0) ? firstField : undefined}
                    className="ob-chip-input"
                    type="radio"
                    name={id('role')}
                    value={r.id}
                    checked={s.role === r.id}
                    onChange={() => {
                      patch({ role: r.id })
                      setErrors({})
                    }}
                  />
                  <span className="ob-chip-label">{r.label}</span>
                </label>
              ))}
            </div>
            {err('role')}
          </fieldset>
          {s.role === 'agency' && (
            <fieldset className="s-join__set s-join__reveal" aria-describedby={errors.agency ? id('agency-error') : undefined}>
              <legend className="s-join__sub">{copy.role.agency}</legend>
              <div className="ob-chips">
                {agencyTypes.map((a) => (
                  <label className="ob-chip" key={a}>
                    <input
                      className="ob-chip-input"
                      type="radio"
                      name={id('agency')}
                      value={a}
                      checked={s.agencyType === a}
                      onChange={() => {
                        patch({ agencyType: a })
                        setErrors({})
                      }}
                    />
                    <span className="ob-chip-label">{a}</span>
                  </label>
                ))}
              </div>
              {err('agency')}
              <Size
                name={id('clients')}
                question={sizes.agency.question}
                options={sizes.agency.options}
                value={s.agencyClients}
                onPick={(v) => patch({ agencyClients: v })}
                optional={copy.role.optional}
              />
            </fieldset>
          )}
          {s.role === 'sales' && (
            <div className="s-join__reveal">
              <Size
                name={id('team')}
                question={sizes.sales.question}
                options={sizes.sales.options}
                value={s.teamSize}
                onPick={(v) => patch({ teamSize: v })}
                optional={copy.role.optional}
              />
            </div>
          )}
          <div className="s-join__acts">{next(copy.actions.next)}</div>
        </form>
        {saving}
      </section>
    )
  }

  /* ---- 2: name, company and website ---- */
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
      to(after('about'))
    }
    return (
      <section className="s-join" aria-labelledby={id('q')}>
        {head}
        {bar}
        <form className="s-join__step" onSubmit={submit} noValidate key="about">
          <h3 className="s-join__q" id={id('q')} tabIndex={-1} ref={setTitle}>
            {copy.about.title}
          </h3>
          <div className="s-join__pair">
            <div className={`ob-field${errors.name ? ' is-error' : ''}`}>
              <label className="ob-label" htmlFor={id('name')}>
                {copy.about.name.label}
              </label>
              <input
                className="ob-input"
                id={id('name')}
                name="name"
                autoComplete="name"
                required
                placeholder={copy.about.name.placeholder}
                value={s.name}
                onChange={(e) => patch({ name: e.target.value })}
                aria-invalid={!!errors.name || undefined}
                aria-describedby={errors.name ? id('name-error') : undefined}
              />
              {err('name')}
            </div>
            <div className={`ob-field${errors.company ? ' is-error' : ''}`}>
              <label className="ob-label" htmlFor={id('company')}>
                {copy.about.company.label}
              </label>
              <input
                className="ob-input"
                id={id('company')}
                name="organization"
                autoComplete="organization"
                required
                placeholder={copy.about.company.placeholder}
                value={s.company}
                onChange={(e) => patch({ company: e.target.value })}
                aria-invalid={!!errors.company || undefined}
                aria-describedby={errors.company ? id('company-error') : undefined}
              />
              {err('company')}
            </div>
          </div>
          <div className={`ob-field${errors.site ? ' is-error' : ''}`}>
            <label className="ob-label" htmlFor={id('site')}>
              {copy.about.site.label[s.role] ?? copy.about.site.label.other}
            </label>
            <input
              className="ob-input"
              id={id('site')}
              name="url"
              type="text"
              inputMode="url"
              autoComplete="url"
              autoCapitalize="none"
              spellCheck={false}
              required
              placeholder={copy.about.site.placeholder}
              value={s.site}
              onChange={(e) => patch({ site: e.target.value })}
              aria-invalid={!!errors.site || undefined}
              aria-describedby={errors.site ? id('site-error') : undefined}
            />
            {err('site')}
          </div>
          <div className="s-join__acts">
            {back('role')}
            {next(copy.actions.next)}
          </div>
        </form>
        {saving}
      </section>
    )
  }

  /* ---- 3: the brands, in the offer's words ---- */
  if (s.step === 'brands') {
    const agents = askOf(s) === 'agents'
    /* An agency's client stores, asked the way its work runs. */
    const byType = askOf(s) === 'clients' && s.role === 'agency' ? clientAsks[s.agencyType] : undefined
    const title = byType?.title ?? offer.ask.title
    const rows = s.brands.length ? s.brands : ['']
    const setRow = (i: number, v: string) => patch({ brands: rows.map((b, j) => (j === i ? v : b)) })
    const submit = (e: FormEvent) => {
      e.preventDefault()
      const bad = rows.findIndex((b) => !brandOk(askOf(s), b))
      if (bad >= 0) {
        setErrors({ brands: agents ? copy.brands.errors.agent : copy.brands.errors.address, row: String(bad) })
        return void document.getElementById(id(`brand-${bad}`))?.focus()
      }
      patch({ brands: rows.filter((b) => b.trim()).length ? rows.filter((b) => b.trim()) : [''] })
      to(after('brands'))
    }
    const add = () => {
      patch({ brands: [...rows, ''] })
      requestAnimationFrame(() => document.getElementById(id(`brand-${rows.length}`))?.focus())
    }
    return (
      <section className="s-join" aria-labelledby={id('q')}>
        {head}
        {bar}
        <form className="s-join__step" onSubmit={submit} noValidate key="brands">
          <div className="s-join__qhead">
            <h3 className="s-join__q" id={id('q')} tabIndex={-1} ref={setTitle}>
              {title}
            </h3>
            <span className="ob-field-optional">{copy.brands.optional}</span>
          </div>
          <p className="s-join__help" id={id('help')}>
            {free ? free.help : (byType?.help ?? offer.ask.help)}
          </p>
          <ol className="s-join__brands">
            {rows.map((b, i) => (
              <li key={i} className="s-join__brand">
                <span className="s-join__n" aria-hidden="true">
                  {i + 1}
                </span>
                <input
                  className={`ob-input${errors.row === String(i) ? ' is-error' : ''}`}
                  id={id(`brand-${i}`)}
                  type="text"
                  inputMode={agents ? undefined : 'url'}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder={offer.ask.placeholder}
                  aria-label={`${title} ${i + 1}`}
                  aria-describedby={errors.row === String(i) ? id('brands-error') : id('help')}
                  aria-invalid={errors.row === String(i) || undefined}
                  value={b}
                  onChange={(e) => {
                    setRow(i, e.target.value)
                    if (errors.row === String(i)) setErrors({})
                  }}
                />
                {rows.length > 1 && (
                  <button
                    type="button"
                    className="s-join__remove"
                    aria-label={copy.brands.remove(i + 1)}
                    onClick={() => patch({ brands: rows.filter((_, j) => j !== i) })}
                  >
                    <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                      <path d="M3 3l6 6M9 3l-6 6" />
                    </svg>
                  </button>
                )}
              </li>
            ))}
          </ol>
          {err('brands')}
          {rows.length < MAX_BRANDS && (
            <button type="button" className="s-join__add" onClick={add}>
              <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false">
                <path d="M6 2v8M2 6h8" />
              </svg>
              {offer.ask.add}
            </button>
          )}
          <div className="s-join__acts">
            {back(before('brands'))}
            {next(copy.actions.next)}
          </div>
        </form>
        {saving}
      </section>
    )
  }

  /* ---- 4: the recipes, and what they'd test ---- */
  if (s.step === 'recipes') {
    const ticked = new Set(s.recipes)
    const toggle = (r: string) => {
      const nextSet = ticked.has(r) ? s.recipes.filter((x) => x !== r) : [...s.recipes, r]
      patch({ recipes: nextSet })
      if (nextSet.length && errors.recipes) setErrors({})
    }
    const submit = (e: FormEvent) => {
      e.preventDefault()
      if (!s.recipes.length) {
        setErrors({ recipes: copy.recipes.error })
        return void title.current?.focus()
      }
      to('done')
    }
    const pageRecipe = s.interest && catalog.recipes.some((r) => r.id === s.interest)
    /* What people like them start with, first; the rest by job, without repeating them. */
    const tips = suggestionsOf(s)
    const chip = (r: (typeof catalog.recipes)[number]) => (
      <label className="ob-chip" key={r.id}>
        <input className="ob-chip-input" type="checkbox" name="recipes" value={r.id} checked={ticked.has(r.id)} onChange={() => toggle(r.id)} />
        <span className="ob-chip-label">
          <Plus />
          {r.name}
        </span>
      </label>
    )
    return (
      <section className="s-join" aria-labelledby={id('q')}>
        {head}
        {bar}
        <form className="s-join__step" onSubmit={submit} noValidate key="recipes">
          <fieldset className="s-join__set" aria-describedby={errors.recipes ? id('recipes-error') : id('rhelp')}>
            <legend className="s-join__q" id={id('q')} tabIndex={-1} ref={setTitle}>
              {copy.recipes.title}
            </legend>
            <p className="s-join__help" id={id('rhelp')}>
              {pageRecipe ? copy.recipes.helpPicked : copy.recipes.help}
            </p>
            {tips.length > 0 && (
              <div className="s-join__group s-join__group--tips">
                <p className="s-join__glabel">{copy.recipes.suggested}</p>
                <div className="ob-chips">{tips.map((rid) => chip(catalog.recipes.find((r) => r.id === rid)!))}</div>
              </div>
            )}
            {JOBS.map((job) => (
              <div className="s-join__group" key={job}>
                <p className="s-join__glabel">{job}</p>
                <div className="ob-chips">{catalog.recipes.filter((r) => r.group === job && !tips.includes(r.id)).map(chip)}</div>
              </div>
            ))}
            {err('recipes')}
          </fieldset>
          <div className="ob-field s-join__case">
            <div className="ob-field-head">
              <label className="ob-label" htmlFor={id('case')}>
                {copy.useCase.label}
              </label>
              <span className="ob-field-optional">{copy.brands.optional}</span>
            </div>
            <textarea
              className="ob-textarea"
              id={id('case')}
              rows={3}
              maxLength={1000}
              placeholder={copy.useCase.placeholder}
              value={s.useCase}
              onChange={(e) => patch({ useCase: e.target.value })}
            />
          </div>
          <div className="s-join__acts">
            {back(before('recipes'))}
            {next(copy.actions.finish)}
          </div>
        </form>
        {saving}
      </section>
    )
  }

  /* ---- Done: what happens next, in the offer's words ---- */
  const brands = cleanBrands(s)
  const first = s.name.trim().split(/\s+/)[0] ?? ''
  const line = brands.length ? (free ? free.done : offer.done) : (offer.none ?? copy.done.none)
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
      <p className="s-join__line">{fill(line, { email: s.email, list: listOf(brands), first: brands[0] ?? '', n: String(brands.length) })}</p>
      <Summary s={s} brands={brands} />
      <button type="button" className="s-join__link s-join__edit" onClick={() => to('about')}>
        {copy.actions.edit}
      </button>
      {saving}
    </section>
  )
}

/* What they told us, in 1 quiet list, so they can see it landed. */
function Summary({ s, brands }: { s: JoinState; brands: string[] }) {
  const names = s.recipes.map((rid) => catalog.recipes.find((r) => r.id === rid)?.name ?? rid)
  const role = roles.find((r) => r.id === s.role)?.sheet
  return (
    <dl className="s-join__sum">
      <div>
        <dt>{copy.sum.you}</dt>
        <dd>
          {[
            s.name.trim(),
            s.company.trim(),
            s.role === 'agency' && s.agencyType ? `${role} (${[s.agencyType, s.agencyClients && `${s.agencyClients} clients`].filter(Boolean).join(', ')})` : s.role === 'sales' && s.teamSize ? `${role} (${s.teamSize})` : role,
          ]
            .filter(Boolean)
            .join(', ')}
        </dd>
      </div>
      <div>
        <dt>{copy.sum.site}</dt>
        <dd>{s.site}</dd>
      </div>
      {brands.length > 0 && (
        <div>
          <dt>{askOf(s) === 'agents' ? copy.sum.agents : copy.sum.brands}</dt>
          <dd>{listOf(brands)}</dd>
        </div>
      )}
      <div>
        <dt>{copy.sum.recipes}</dt>
        <dd>{listOf(names)}</dd>
      </div>
    </dl>
  )
}

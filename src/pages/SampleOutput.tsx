import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react'
import { Mark, type Status } from '../components/Logo'
import { StillMark } from '../components/StillMark'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Outputs } from '../components/sections/Outputs'
import { outputFormats, sample } from '../content/sample'
import type { SampleGap, SampleVerdict, ViewerImage } from '../content/types'
import '../components/sections/Hero.css'
import './SampleOutput.css'

/* /sample-output: the 1 real run, the September 2026 store check (content/sample.ts), stated exactly as the report
   records it. In order: the centred hero with its 3 figures and the way to the form > the same run in every format
   (the output viewer) > the report: the 4 journeys and their verdicts, the checkout capture, the set up and what
   arrived, and the report's own pages, each opening to full size > each gap: the inbox watched for 48 hours with
   nothing in it, what was left behind, the reminder drafted from the evidence > questions > the free mystery shop
   (#get-one). A verdict is the ring mark and its word, never a colour. */

const r = sample.report

/* A numeral never ends a line apart from its word ("48 hours", "4 test customers"). */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1 ')

/* Each verdict's ring: Delivered landed; Silent needs you (the gap); the rest wait. */
const MARK: Record<SampleVerdict, Status> = { Delivered: 'landed', Silent: 'needs-you', 'No verdict': 'waiting', 'Couldn’t test': 'waiting' }
const verdictOf = (journey: string) => r.journeys.find((j) => j.name === journey)?.verdict

/* The report's own pages (the PDF format's view), with that format's line. */
const pdfFormat = outputFormats.find((f) => f.view.kind === 'pdf')
const pages: ViewerImage[] = pdfFormat?.view.kind === 'pdf' ? pdfFormat.view.pages : []

/* The words the controls need: chrome, not copy. */
const UI = {
  page: (n: number) => `Page ${n}`,
  open: (n: number) => `Open page ${n} of the report at full size`,
  close: 'Close',
  hours: (h: number) => `${h} h`,
}

const RM = '(prefers-reduced-motion: reduce)'
const onRm = (cb: () => void) => {
  const m = matchMedia(RM)
  m.addEventListener('change', cb)
  return () => m.removeEventListener('change', cb)
}
const useReducedMotion = () =>
  useSyncExternalStore(
    onRm,
    () => matchMedia(RM).matches,
    () => false,
  )

function Verdict({ verdict }: { verdict: SampleVerdict }) {
  return (
    <span className="ob-status ob-status--bare s-so-verdict">
      <StillMark state={MARK[verdict]} size={14} className="s-so-verdict__mark" />
      {verdict}
    </span>
  )
}

function Hero() {
  const id = useId()
  const h = sample.hero
  return (
    <section className="s-hero s-so-hero" aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-hero-wrap">
        <div className="s-hero-head ob-anim-hero">
          <p className="ob-layout-eyebrow s-hero-pill">
            <Mark size={16} />
            {h.pill}
          </p>
          <h1 className="s-hero-h" id={`${id}-h`}>
            {tie(h.headline)}
          </h1>
          <p className="s-hero-sub s-so-hero__sub">{tie(h.sub)}</p>
          <div className="s-hero-act">
            <a className="ob-btn ob-btn--lg" href={h.cta.to}>
              <span className="ob-btn-label">{h.cta.label}</span>
              <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M8 3v10M4 9l4 4 4-4" />
              </svg>
            </a>
          </div>
          <ul className="s-hero-proof">
            {h.figures.map((f) => (
              <li key={f.label}>
                <span className="s-hero-proof-v">{f.value}</span>
                <span className="s-hero-proof-l">{tie(f.label)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* The report's pages as documents; each opens at full size under the row, 1 at a time. */
function Pages() {
  const base = useId()
  const [open, setOpen] = useState<number | null>(null)
  if (!pages.length) return null
  const shown = open ?? 0
  return (
    <div className="s-so-pages">
      <div className="s-so-pages__bar">
        <ul className="s-so-pages__row">
          {pages.map((p, i) => (
            <li key={p.src}>
              <button
                type="button"
                className="s-so-pages__thumb"
                aria-expanded={open === i}
                aria-controls={`${base}-page`}
                aria-label={UI.open(i + 1)}
                onClick={() => setOpen((o) => (o === i ? null : i))}
              >
                <img src={p.src} alt="" width={p.width} height={p.height} loading="lazy" decoding="async" />
              </button>
              <p className="s-so-pages__n">{UI.page(i + 1)}</p>
            </li>
          ))}
        </ul>
        {pdfFormat && <p className="s-so-pages__line">{tie(pdfFormat.line)}</p>}
      </div>
      <div className={'ob-disclose s-so-pages__open' + (open !== null ? ' is-open' : '')} id={`${base}-page`}>
        <div>
          <figure className="s-so-pages__full">
            <img
              src={pages[shown].src}
              alt={pages[shown].alt}
              width={pages[shown].width}
              height={pages[shown].height}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="s-so-pages__cap">
              <span>{UI.page(shown + 1)}</span>
              <button type="button" className="ob-btn ob-btn--ghost ob-btn--sm" onClick={() => setOpen(null)} tabIndex={open === null ? -1 : 0}>
                <span className="ob-btn-label">{UI.close}</span>
              </button>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

function Report() {
  const id = 'report'
  return (
    <section className="s-section s-so-report" id={id} aria-labelledby={`${id}-h`}>
      <div className="s-wrap">
        <header className="s-head s-so-head">
          <h2 className="ob-type-h2" id={`${id}-h`}>
            {tie(r.heading)}
          </h2>
          <p className="s-so-line">{tie(r.line)}</p>
        </header>

        <ol className="s-so-card">
          {r.journeys.map((j) => (
            <li key={j.n} className={'s-so-card__j' + (j.verdict === 'Silent' ? ' is-gap' : '')}>
              <h3 className="s-so-card__name">
                <span className="s-so-card__n">{j.n}</span>
                {j.name}
              </h3>
              <Verdict verdict={j.verdict} />
              <p className="s-so-card__line">{tie(j.line)}</p>
            </li>
          ))}
        </ol>

        <div className="s-so-proof">
          <div className="s-so-proof__doc">
            <figure className="ob-evidence s-so-shot">
              <div className="ob-evidence-shot s-so-shot__frame">
                <img
                  className="ob-evidence-img"
                  src={r.shot.src}
                  alt={r.shot.alt}
                  width={r.shot.width}
                  height={r.shot.height}
                  loading="lazy"
                  decoding="async"
                />
                <span className="ob-evidence-marks" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <figcaption className="s-so-shot__cap">{tie(r.shot.caption)}</figcaption>
            </figure>
            <Pages />
          </div>

          <div className="s-so-record">
            {[r.setup, r.observation].map((block) => (
              <div className="s-so-record__block" key={block.heading}>
                <div className="s-so-record__head">
                  <h3 className="s-so-record__h">{block.heading}</h3>
                  <span className="ob-tag">{block.tag}</span>
                </div>
                <dl className="s-so-record__rows">
                  {block.rows.map((row) => (
                    <div key={row.k}>
                      <dt>{row.k}</dt>
                      <dd className={'mono' in row && row.mono ? 's-so-mono' : undefined}>{tie(row.v)}</dd>
                    </div>
                  ))}
                </dl>
                {'line' in block && <p className="s-so-record__line">{tie(block.line)}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* The watch window: 48 hours from the moment the shopper left, as a track with nothing on it. It sweeps once when the
   reader reaches it; with reduced motion, or before the script runs, it shows the whole window. */
function Watch({ from, to }: { from: string; to: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'rest' | 'ready' | 'sweep'>('rest')
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia(RM).matches || !('IntersectionObserver' in window)) return
    const b = el.getBoundingClientRect()
    if (b.top < innerHeight && b.bottom > 0) return
    setState('ready')
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        setState('sweep')
        io.disconnect()
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const ticks = [0, 12, 24, 36, 48]
  return (
    <div className={'s-so-watch' + (reduced ? '' : ` is-${state}`)} ref={ref} aria-hidden="true">
      <div className="s-so-watch__track">
        <span className="s-so-watch__fill" />
        {ticks.map((t) => (
          <span key={t} className="s-so-watch__tick" style={{ left: `${(t / 48) * 100}%` }} />
        ))}
      </div>
      <div className="s-so-watch__scale">
        {ticks.map((t) => (
          <span key={t} style={{ left: `${(t / 48) * 100}%` }}>
            {UI.hours(t)}
          </span>
        ))}
      </div>
      <div className="s-so-watch__ends">
        <span>{from}</span>
        <span>{to}</span>
      </div>
    </div>
  )
}

/* The window the report states: "from 22 Sep 2026, 02:57 to 24 Sep 2026, 02:57 UK time". */
const windowOf = (line: string) => line.match(/from (.+?) to (.+?) UK time/)
const inboxOf = (line: string) => line.match(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+/)?.[0]

function Gap({ g }: { g: SampleGap }) {
  const base = useId()
  const [draft, setDraft] = useState(false)
  const verdict = verdictOf(g.journey)
  const span = windowOf(g.nothing.line)
  const inbox = inboxOf(g.nothing.line)
  const id = `gap-${g.n}`
  return (
    <section className="s-section s-so-gap" id={id} aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-so-gap__in">
        <header className="s-so-gap__head">
          <h2 className="ob-type-h2 s-so-gap__h" id={`${id}-h`}>
            {tie(g.heading)}
          </h2>
          <p className="s-so-line">{tie(g.finding)}</p>
          <p className="s-so-gap__consent">{tie(g.consent)}</p>
        </header>

        <div className="s-so-gap__proof">
          <div className="ob-window ob-object s-so-inbox">
            <div className="ob-window-bar">
              <span className="ob-window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <p className="ob-window-title">{inbox ?? g.journey}</p>
              {verdict && <Verdict verdict={verdict} />}
            </div>
            <div className="s-so-inbox__body">
              <div className="s-so-left">
                <p className="s-so-left__label">{g.basket.label}</p>
                <p className="s-so-left__item">
                  <span>{g.basket.item}</span>
                  <span className="s-so-left__price">{g.basket.price}</span>
                </p>
                <p className="s-so-left__note">{tie(g.basket.note)}</p>
              </div>
              {span && <Watch from={span[1]} to={span[2]} />}
              <div className="s-so-nothing">
                <h3 className="s-so-nothing__h">{g.nothing.heading}</h3>
                <p className="s-so-nothing__line">{tie(g.nothing.line)}</p>
                <p className="s-so-nothing__why">{tie(g.why)}</p>
              </div>
            </div>
          </div>

          <div className="s-so-draft">
            <button
              type="button"
              className="ob-btn ob-btn--secondary s-so-draft__btn"
              aria-expanded={draft}
              aria-controls={`${base}-draft`}
              onClick={() => setDraft((d) => !d)}
            >
              <span className="ob-btn-label">{draft ? g.draft.hide : g.draft.show}</span>
              <svg className="ob-btn-glyph ob-btn-chevron s-so-draft__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>
            <div className={'ob-disclose' + (draft ? ' is-open' : '')} id={`${base}-draft`}>
              <div>
                <figure className="s-so-mail">
                  <p className="s-so-mail__band">{g.draft.band}</p>
                  <img
                    src={g.draft.image.src}
                    alt={g.draft.image.alt}
                    width={g.draft.image.width}
                    height={g.draft.image.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="s-so-mail__cap">
                    <span className="ob-sr">{g.draft.text}</span>
                    {g.draft.note}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SampleOutput() {
  return (
    <>
      <Hero />
      <Outputs id="formats" heading={sample.formats.heading} line={sample.formats.line} initial={sample.formats.start} className="s-so-formats" />
      <Report />
      {sample.gaps.map((g) => (
        <Gap key={g.n} g={g} />
      ))}
      <Faq faq={sample.faq} id="questions" />
      <FinalCta final={sample.final} id="get-one" />
    </>
  )
}

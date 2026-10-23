import type { ReactNode } from 'react'
import type { ArtSpec, ArtStatus, ArtTone } from '../../content/blog/types'
import './Art.css'

/* The blog's illustrations, drawn in code on the design system's product window (.ob-window, .ob-object): glossy black
   on the paper text, lit on ink. Each is the agent's own view of a moment the post describes: its log, a chat, a
   journey, a price worked out, a 1 page report, or 1 question asked again. Times, names and prices sit in Geist Mono,
   as anything the agent logs does. Colour carries meaning only (Art.css). */

const STATUS: Record<ArtTone, string> = { ok: 'ob-status--landed', late: 'ob-status--needs', fail: 'ob-status--failed', info: '' }

function Status({ s }: { s: ArtStatus }) {
  return <span className={`ob-status ob-status--sm ${STATUS[s.tone]} s-x-status`}>{s.text}</span>
}

function Mark({ tone }: { tone: ArtTone }) {
  return <span className={`s-x-mark s-x-mark--${tone}`} aria-hidden="true" />
}

function Frame({ title, status, children, label }: { title: string; status?: ArtStatus; children: ReactNode; label: string }) {
  return (
    <div className="ob-window ob-object s-x" role="img" aria-label={label}>
      <div className="ob-window-bar s-x-bar">
        <span className="ob-window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="ob-window-title">{title}</span>
        {status && <Status s={status} />}
      </div>
      <div className="s-x-body">{children}</div>
    </div>
  )
}

/* What the picture says, in words, for a screen reader: the same lines the window draws. */
function labelOf(a: ArtSpec): string {
  switch (a.kind) {
    case 'log':
      return `${a.title}. ${a.who}. ${a.rows.map((r) => `${r.time}, ${r.text}${r.detail ? `, ${r.detail}` : ''}`).join('. ')}.`
    case 'chat':
      return `${a.title}. ${a.turns.map((t) => `${t.from === 'bot' ? t.name ?? 'Chat' : 'Customer'}: ${t.text}`).join(' ')}${a.check ? ` ${a.check.label}: ${a.check.text}.` : ''}`
    case 'flow':
      return `${a.title}. ${a.steps.map((s) => `${s.label}: ${s.detail}`).join('. ')}.`
    case 'price':
      return `${a.title}. ${a.rows.map((r) => `${r.label} ${r.value}`).join(', ')}. ${a.total.label} ${a.total.value}.`
    case 'report':
      return `${a.title}, ${a.period}. ${a.rows.map((r) => `${r.name}: ${r.cells.join(', ')}`).join('. ')}. ${a.notes.join(' ')}`
    case 'runs':
      return `${a.title}. ${a.prompt}. ${a.runs.map((r) => `${r.label}: ${r.answer} ${r.verdict.text}`).join(' ')}`
  }
}

export function Art({ art }: { art: ArtSpec }) {
  const label = labelOf(art)
  switch (art.kind) {
    case 'log':
      return (
        <Frame title={art.title} status={art.status} label={label}>
          <p className="s-x-who">{art.who}</p>
          <ol className="s-x-log">
            {art.rows.map((r, i) => (
              <li key={i} className={`s-x-log__row s-x-log__row--${r.tone}`}>
                <span className="s-x-log__time">{r.time}</span>
                <Mark tone={r.tone} />
                <span className="s-x-log__text">
                  {r.text}
                  {r.detail && <span className="s-x-log__detail">{r.detail}</span>}
                </span>
              </li>
            ))}
          </ol>
          {art.foot && <p className="s-x-foot">{art.foot}</p>}
        </Frame>
      )
    case 'chat':
      return (
        <Frame title={art.title} label={label}>
          <ol className="s-x-chat">
            {art.turns.map((t, i) => (
              <li key={i} className={`s-x-chat__turn s-x-chat__turn--${t.from}`}>
                <span className="s-x-chat__who">
                  {t.from === 'bot' ? t.name ?? 'Chat' : 'Customer'}
                  {t.time && <span className="s-x-chat__time">{t.time}</span>}
                </span>
                <span className="s-x-chat__bubble">{t.text}</span>
              </li>
            ))}
          </ol>
          {art.check && (
            <div className={`s-x-check s-x-check--${art.check.tone}`}>
              <Mark tone={art.check.tone} />
              <span className="s-x-check__label">{art.check.label}</span>
              <span className="s-x-check__text">{art.check.text}</span>
            </div>
          )}
        </Frame>
      )
    case 'flow':
      return (
        <Frame title={art.title} status={art.status} label={label}>
          <ol className="s-x-flow">
            {art.steps.map((s, i) => (
              <li key={i} className={`s-x-flow__step s-x-flow__step--${s.tone}`}>
                <span className="s-x-flow__label">
                  <Mark tone={s.tone} />
                  {s.label}
                </span>
                <span className="s-x-flow__detail">{s.detail}</span>
              </li>
            ))}
          </ol>
          {art.foot && <p className="s-x-foot">{art.foot}</p>}
        </Frame>
      )
    case 'price':
      return (
        <Frame title={art.title} label={label}>
          <dl className="s-x-price">
            {art.rows.map((r, i) => (
              <div key={i} className="s-x-price__row">
                <dt>
                  {r.label}
                  {r.note && <span className="s-x-price__note">{r.note}</span>}
                </dt>
                <dd>{r.value}</dd>
              </div>
            ))}
            <div className="s-x-price__row s-x-price__row--total">
              <dt>
                {art.total.label}
                {art.total.note && <span className="s-x-price__note">{art.total.note}</span>}
              </dt>
              <dd>{art.total.value}</dd>
            </div>
          </dl>
        </Frame>
      )
    case 'report': {
      const grid = { gridTemplateColumns: `1.35fr ${'minmax(0, 1fr) '.repeat(art.cols.length - 1)}`.trim() }
      return (
        <Frame title={art.title} label={label}>
          <p className="s-x-who">{art.period}</p>
          <div className="s-x-report">
            <div className="s-x-report__row s-x-report__row--head" style={grid}>
              {art.cols.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            {art.rows.map((r, i) => (
              <div key={i} className={`s-x-report__row${r.tone ? ` s-x-report__row--${r.tone}` : ''}`} style={grid}>
                <span className="s-x-report__name">
                  {r.tone && <Mark tone={r.tone} />}
                  {r.name}
                </span>
                {r.cells.map((c, j) => (
                  <span key={j}>{c}</span>
                ))}
              </div>
            ))}
          </div>
          <ol className="s-x-notes">
            {art.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ol>
        </Frame>
      )
    }
    case 'runs':
      return (
        <Frame title={art.title} label={label}>
          <p className="s-x-prompt">
            <span className="s-x-prompt__k">Asked</span>
            {art.prompt}
          </p>
          <ol className="s-x-runs">
            {art.runs.map((r, i) => (
              <li key={i} className="s-x-runs__run">
                <span className="s-x-runs__label">{r.label}</span>
                <span className="s-x-runs__answer">{r.answer}</span>
                <Status s={r.verdict} />
              </li>
            ))}
          </ol>
          {art.foot && <p className="s-x-foot">{art.foot}</p>}
        </Frame>
      )
  }
}

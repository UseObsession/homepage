import { useId, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { partners, type PartnerId } from '../content/partners'
import { Lockup } from './Logo'
import { hasPartner, markUrl, marks } from './partnerFiles'
import { loadMarkSvg, markSvgNow } from './partnerMarks'
import './PartnerMark.css'

/* Partner marks (content/partners.ts): a tool's logo in 1 colour, the text's own, never louder than the words.
   - Ink on paper, bone on ink, at the second ink; full ink on hover. Inside a product object it reads the object's inks.
     No brand colour: on this site colour marks the reader and nothing else (COLOUR.md).
   - Sized by weight, not by box: each mark's height is its `size` in partners.ts (an icon is 20), times the scale its
     placement sets (--s-pm-scale), and its width follows from its own outline. Both are known before any file loads, so
     nothing shifts.
   - Named for assistive tech (role img, the tool's name); the words around it still say it.
   - A mark whose file is not there yet, or whose line is gone from partners.ts, is simply not drawn. */

type Style = CSSProperties & Record<`--${string}`, string | number>

/* Hydration keeps the server's drawing only while React passes the same __html it was given (as AppScreen does). */
const KEEP = { __html: '' }

function InlineSvg({ file, label, style }: { file: string; label: string; style: Style }) {
  const ref = useRef<HTMLSpanElement>(null)
  const id = useId()
  /* On the server: the drawing. In the browser: undefined, so the prerendered drawing stays as it is. */
  const [html, setHtml] = useState(() => markSvgNow(file, id))
  useLayoutEffect(() => {
    if (html !== undefined || ref.current?.firstElementChild) return
    let live = true
    loadMarkSvg(file, id).then((svg) => {
      if (live && svg !== undefined) setHtml(svg)
    })
    return () => {
      live = false
    }
  }, [file, id, html])
  return <span ref={ref} className="s-pm" role="img" aria-label={label} style={style} dangerouslySetInnerHTML={html === undefined ? KEEP : { __html: html }} />
}

/* The webhook: 3 endpoints, each passing to the next (the design system's glyph idiom: a 16 grid, a 1.5 stroke). */
function WebhookGlyph({ label, style }: { label: string; style: Style }) {
  return (
    <span className="s-pm s-pm--glyph" role="img" aria-label={label} style={style}>
      <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <circle cx="8" cy="3.75" r="2" />
        <circle cx="3.5" cy="11.55" r="2" />
        <circle cx="12.5" cy="11.55" r="2" />
        <path d="M9 5.48 11.5 9.82M10.5 11.55h-5M4.5 9.82 7 5.48" />
      </svg>
    </span>
  )
}

export function PartnerMark({ id, size }: { id: PartnerId; size?: number }) {
  const p = partners[id]
  const m = marks[id]
  if (!p || (id !== 'webhook' && !m)) return null
  const style: Style = { '--s-pm-h': size ?? p.size, '--s-pm-r': id === 'webhook' ? 1 : m.ratio }
  if (id === 'webhook') return <WebhookGlyph label={p.name} style={style} />
  if (m.type === 'svg') return <InlineSvg file={m.file} label={p.name} style={style} />
  const url = markUrl(m.file)
  if (!url) return null
  return (
    <span
      className="s-pm s-pm--mask"
      role="img"
      aria-label={p.name}
      style={{ ...style, '--s-pm-src': `url("${url}")` } as Style}
    />
  )
}

/* A quiet line of marks: only those that can be drawn, and nothing at all under `min` (1 mark alone in a line meant
   for 3 reads as an accident). `label` names the list for assistive tech. `inline` draws it in spans, for a line inside
   a button (a How step's tab), where a list is not allowed. */
export function PartnerRow({
  ids,
  label,
  min = 1,
  inline,
  className,
}: {
  ids?: PartnerId[]
  label: string
  min?: number
  inline?: boolean
  className?: string
}) {
  const shown = (ids ?? []).filter(hasPartner)
  if (shown.length < min) return null
  if (inline)
    return (
      <span className={'s-pm-row' + (className ? ' ' + className : '')}>
        {shown.map((id) => (
          <PartnerMark key={id} id={id} />
        ))}
      </span>
    )
  return (
    <ul className={'s-pm-row' + (className ? ' ' + className : '')} aria-label={label}>
      {shown.map((id) => (
        <li key={id}>
          <PartnerMark id={id} />
        </li>
      ))}
    </ul>
  )
}

/* Obsession and a partner as equals: the nav lockup, a quiet multiplication sign, the partner's mark, in 1 ink.
   The partner's height is set so its lowercase stands as tall as Obsession's (`xRatio`: the partner's x height over its
   own height; Clay's is .57, Obsession's lockup .73). */
const LOCKUP_H = 24
const OBS_X = 0.73
const X_RATIO: Partial<Record<PartnerId, number>> = { clay: 0.57 }

export function PartnerLockup({ id, className }: { id: PartnerId; className?: string }) {
  const p = partners[id]
  if (!p || !hasPartner(id)) return null
  const size = Math.round(((LOCKUP_H * OBS_X) / (X_RATIO[id] ?? OBS_X)) * 10) / 10
  return (
    <p className={'s-pm-lockup' + (className ? ' ' + className : '')} role="img" aria-label={`Obsession and ${p.name}`}>
      <span className="s-pm-lockup__obs" aria-hidden="true">
        <Lockup height={LOCKUP_H} />
      </span>
      <span className="s-pm-lockup__x" aria-hidden="true">
        <svg viewBox="0 0 16 16" focusable="false">
          <path d="M4.5 4.5 11.5 11.5M11.5 4.5 4.5 11.5" />
        </svg>
      </span>
      <span className="s-pm-lockup__partner" aria-hidden="true">
        <PartnerMark id={id} size={size} />
      </span>
    </p>
  )
}

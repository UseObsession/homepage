import { useId, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { partners, type PartnerId } from '../content/partners'
import { hasPartner, markUrl, marks } from './partnerFiles'
import { loadMarkSvg, markSvgNow } from './partnerMarks'
import './PartnerMark.css'

/* Partner marks (content/partners.ts): a tool's logo in 1 colour, the text's full ink (ink on paper, bone on ink).
   - Full ink, never a tint: the vendors' own rules allow their 1 colour logo in black or white only (Slack, Make, n8n),
     and no brand colour, since on this site colour marks the reader and nothing else (COLOUR.md). No hover: a mark is
     not a control.
   - 2 sizes. Alone (`PartnerMark`): its `size` in partners.ts times the scale its placement sets (--s-pm-scale), so
     marks side by side carry the same ink. In a line of words (`PartnerWord`): it stands in for its own name, at the
     text's x height and on its baseline, so the line keeps its height. Both boxes are known before any file loads,
     so nothing shifts.
   - Named for assistive tech (role img, the tool's name), unless `decorative` says the words beside it already do.
   - A mark whose file is not there yet, or whose line is gone from partners.ts, is simply not drawn. */

type Style = CSSProperties & Record<`--${string}`, string | number>

/* Geist's x height, as a share of the font size: a mark standing in for a word matches it. */
const TEXT_X = 0.53

/* Hydration keeps the server's drawing only while React passes the same __html it was given (as AppScreen does). */
const KEEP = { __html: '' }

function InlineSvg({ file, className, a11y, style }: { file: string; className: string; a11y: A11y; style: Style }) {
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
  return <span ref={ref} className={className} {...a11y} style={style} dangerouslySetInnerHTML={html === undefined ? KEEP : { __html: html }} />
}

type A11y = { role?: 'img'; 'aria-label'?: string; 'aria-hidden'?: true }

/* 1 mark, in either size. */
function Drawn({ id, style, word, decorative }: { id: PartnerId; style: Style; word?: boolean; decorative?: boolean }) {
  const p = partners[id]
  const m = marks[id]
  if (!p || !m) return null
  const a11y: A11y = decorative ? { 'aria-hidden': true } : { role: 'img', 'aria-label': p.name }
  const box: Style = { ...style, '--s-pm-r': m.ratio }
  const cls = 's-pm' + (word ? ' s-pm--word' : '')
  if (m.type === 'svg') return <InlineSvg file={m.file} className={cls} a11y={a11y} style={box} />
  const url = markUrl(m.file)
  if (!url) return null
  const masked: Style = { ...box, '--s-pm-src': `url("${url}")` }
  return <span className={cls + ' s-pm--mask'} {...a11y} style={masked} />
}

/* A mark on its own: its optical size (or `size`, in px where an icon is 20). */
export function PartnerMark({ id, size, decorative }: { id: PartnerId; size?: number; decorative?: boolean }) {
  const p = partners[id]
  if (!p) return null
  return <Drawn id={id} style={{ '--s-pm-h': size ?? p.size }} decorative={decorative} />
}

/* A mark in place of its own name in a line of words: its x height on the text's, its baseline on the text's. The
   wrapper keeps that alignment inside a flex parent (a chip, a kicker), where the mark alone would be centred. */
export function PartnerWord({ id }: { id: PartnerId }) {
  const w = partners[id]?.word
  if (!w || !hasPartner(id)) return null
  const em = TEXT_X / w.x
  return (
    <span className="s-pm-word">
      <Drawn id={id} word style={{ '--s-pm-em': +em.toFixed(4), '--s-pm-drop': +((1 - w.base) * em).toFixed(4) }} />
    </span>
  )
}

/* The tools a thing lands in, as 1 quiet line over it: the marks that can be drawn, then `note`, the words that back
   marks the line's context doesn't name. `label` names the list for assistive tech. */
export function PartnerRow({ ids, label, note, className }: { ids?: PartnerId[]; label: string; note?: string; className?: string }) {
  const shown = (ids ?? []).filter(hasPartner)
  if (shown.length === 0) return null
  return (
    <div className={'s-pm-row' + (className ? ' ' + className : '')}>
      <ul className="s-pm-row__marks" aria-label={label}>
        {shown.map((id) => (
          <li key={id}>
            <PartnerMark id={id} />
          </li>
        ))}
      </ul>
      {note && <p className="s-pm-row__note">{note}</p>}
    </div>
  )
}

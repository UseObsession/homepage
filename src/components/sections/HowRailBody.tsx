import type { CSSProperties, ReactNode } from 'react'
import { howRailPartners, partners as partnerList } from '../../content/partners'
import type { HowRail, HowStation } from '../../content/types'
import { Mark } from '../Logo'
import { PartnerWord } from '../PartnerMark'
import { hasWord } from '../partnerFiles'

/* How it works' words and slices (sections/HowRail draws the section around them and plays them): the claim, then the 4
   steps, each over its slice of the app, at rest on its finished scene. The prerender draws them into Home's HTML and
   hydration keeps that HTML, so the browser loads this file only when Home is reached client side (sections/howBody.ts),
   as the app screens' components are never in the bundle. The look, both layouts and each slice's 1 action:
   HowRail.css. */

const UI = { example: 'Example' }

type Style = CSSProperties & Record<`--${string}`, string | number>

/* A chip that names 1 of the tools (content/partners.ts howRailPartners) shows its mark in place of the word. */
function face(label: string) {
  const id = howRailPartners.find((p) => partnerList[p]?.name === label && hasWord(p))
  return id ? <PartnerWord id={id} /> : label
}

/* A picked chip carries its filled face over the plain one, so picking it is the fill fading in (opacity only). */
function Chip({ label, on, icon }: { label: string; on?: boolean; icon?: ReactNode }) {
  return (
    <span className={'s-hw-chip' + (on ? ' is-pick' : '')}>
      {icon}
      {face(label)}
      {on && <span className="s-hw-fill">{face(label)}</span>}
    </span>
  )
}

const Icon = {
  paste: (
    <svg className="s-hw-i" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M5.5 3.25h-1a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1h-1" />
      <rect x="5.5" y="2.25" width="5" height="2.25" rx=".75" />
    </svg>
  ),
  csv: (
    <svg className="s-hw-i" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 10V2.75M5.25 5.5 8 2.75l2.75 2.75M3 9.75v2.5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-2.5" />
    </svg>
  ),
  tick: (
    <svg className="s-hw-i" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3.75 8.25 2.75 2.75 5.75-6" />
    </svg>
  ),
}

/* 1 slice of the app: what the station shows. */
function Station({ station: s }: { station: HowStation }) {
  switch (s.kind) {
    case 'job':
      return (
        <>
          <span className="s-hw-field">
            <span className="s-hw-gt">›</span>
            <span className="s-hw-ph">{s.field}</span>
          </span>
          <span className="s-hw-chips">
            {s.chips.map((c, i) => (
              <Chip key={c} label={c} on={i === s.pick} />
            ))}
          </span>
        </>
      )
    case 'companies':
      return (
        <>
          <span className="s-hw-chips s-hw-src">
            {s.sources.map((c, i) => (
              <Chip key={c} label={c} icon={i === 0 ? Icon.paste : i === 1 ? Icon.csv : undefined} />
            ))}
          </span>
          <span className="s-hw-rows">
            {s.rows.map((r, i) => (
              <span key={r.site} className="s-hw-row" style={{ '--s-hw-i': i } as Style}>
                <i>{r.site[0]}</i>
                <span className="s-hw-site">{r.site}</span>
                <span className="s-hw-tag">{r.tag}</span>
              </span>
            ))}
            <span className="s-hw-row s-hw-more" style={{ '--s-hw-i': s.rows.length } as Style}>
              {s.more}
            </span>
          </span>
        </>
      )
    case 'approve':
      return (
        <>
          <span className="s-hw-run">
            <span className="s-hw-ico">
              <Mark size={14} />
            </span>
            <span className="s-hw-run__t">
              <b>{s.title}</b>
              <small>{s.meta}</small>
            </span>
          </span>
          <span className="s-hw-go">
            <span className="s-hw-tog">
              {s.toggle}
              <i className="s-hw-switch" />
            </span>
            <span className="s-hw-btn">
              <span className="s-hw-btn__go">{s.button}</span>
              <span className="s-hw-btn__done">
                {Icon.tick}
                {s.done}
              </span>
            </span>
          </span>
        </>
      )
    case 'formats':
      return (
        <>
          <span className="s-hw-k">{s.label}</span>
          <span className="s-hw-chips">
            {s.chips.map((c, i) => (
              <Chip key={c} label={c} on={i === s.pick} />
            ))}
          </span>
          <span className="s-hw-dest">
            <span className="s-hw-k">{s.dest.k}</span>
            <span className="s-hw-mono">{s.dest.v}</span>
          </span>
        </>
      )
  }
}

/* The claim breaks between its sentences, never inside one where it fits (each sentence keeps to its own line). */
function sentences(text: string) {
  const parts = text.match(/[^.!?]+[.!?]*/g) ?? [text]
  return parts.flatMap((t, i) => [i ? ' ' : '', <span key={i} className="s-hw-say">{t.trim()}</span>])
}

/* The section's insides. `headId` names the claim, which the section is labelled by. */
export function HowRailBody({ rail, headId }: { rail: HowRail; headId: string }) {
  return (
    <>
      <header className="s-head s-hw-head">
        <h2 id={headId} className="ob-type-h2">
          {sentences(rail.heading)}
        </h2>
      </header>

      <div className="s-hw-body">
        <div className="s-hw-panel ob-object" aria-hidden="true" />
        <ol className="s-hw-steps">
          {rail.steps.map((s, i) => (
            <li key={s.title} className="s-hw-step">
              <div className="s-hw-copy">
                <span className="s-hw-num ob-num" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="s-hw-title">{s.title}</h3>
                <p className="s-hw-line">{s.line}</p>
              </div>
              {/* Example data (invented names at .example addresses), kept out of search snippets like the app screens. */}
              <div className={`s-hw-slice s-hw-slice--${s.station.kind} ob-object`} aria-hidden="true" data-nosnippet="">
                <Station station={s.station} />
              </div>
            </li>
          ))}
        </ol>
        {/* For the eye: the slices it names are hidden from assistive tech, the steps' words say it all. */}
        <p className="s-screen-note s-hw-note" aria-hidden="true">
          {UI.example}
        </p>
      </div>
    </>
  )
}

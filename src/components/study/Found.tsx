import { useId } from 'react'
import { Link } from 'react-router-dom'
import { shops, type ShopProof, type ShopRow } from '../../content/shops'
import type { StudyFinding, UseCaseStudy } from '../../content/types'
import { tie } from './tie'
import './Found.css'

/* What real audits found (types.ts StudyFound), on a use case's paper break: the claim and its line, then each finding
   as the agent recorded it (content/shops.ts), not as a picture of the shop. 1 card per finding, all alike, so they read
   as 1 report: the kind of store and the journey, the verdict, the log (what the agent did and each email as it landed
   in its inbox, sender, subject and first line, in order), then the 1 proof that makes the point. The card is a product
   object (.ob-object): ink on an ink page, paper on a paper one (styles/tones.css). Monochrome, as the app is. On a
   wide screen the 4 sit 2 by 2, each finding over its card on 1 shared line (subgrid); on a phone they are a row of
   cards to swipe (styles/v5.css .v5-rail).
   Each card is decorative (aria-hidden): the finding over it says it in words, and the label and verdict are read. */

const Glyph = {
  did: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="2.5" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3.75" y="7" width="8.5" height="6.25" rx="1.25" />
      <path d="M5.75 7V5.25a2.25 2.25 0 0 1 4.5 0V7" />
    </svg>
  ),
}

function Row({ row }: { row: ShopRow }) {
  if (row.kind === 'did') {
    return (
      <li className="s-fd-row s-fd-row--did">
        <span className="s-fd-time">{row.time ?? ''}</span>
        <span className="s-fd-did">
          {Glyph.did}
          {row.text}
        </span>
      </li>
    )
  }
  return (
    <li className="s-fd-row s-fd-row--mail">
      <span className="s-fd-time">{row.time}</span>
      <span className="s-fd-mail">
        <span className="s-fd-av">{row.from.charAt(0).toUpperCase()}</span>
        <span className="s-fd-mail-main">
          <b>{row.from}</b>
          <span className="s-fd-subj">{row.subject}</span>
          <span className="s-fd-prev">{row.preview}</span>
        </span>
      </span>
    </li>
  )
}

function Proof({ proof }: { proof: ShopProof }) {
  switch (proof.kind) {
    case 'expect':
      return (
        <dl className="s-fd-proof s-fd-expect">
          <div>
            <dt>Expected</dt>
            <dd>{proof.expected}</dd>
          </div>
          <div className="is-got">
            <dt>Came</dt>
            <dd>{proof.got}</dd>
          </div>
        </dl>
      )
    case 'blanks':
      return (
        <div className="s-fd-proof s-fd-blanks">
          <p className="s-fd-proof-h">{proof.label}</p>
          {proof.fields.map((f) => (
            <p className="s-fd-blank" key={f}>
              <span>{f}</span>
              <i />
            </p>
          ))}
        </div>
      )
    case 'closed':
      return (
        <div className="s-fd-proof s-fd-closed">
          <p className="s-fd-url">
            {Glyph.lock}
            {proof.url}
          </p>
          <p className="s-fd-closed-h">{proof.head}</p>
          <p className="s-fd-closed-l">{proof.line}</p>
        </div>
      )
    case 'watch':
      return (
        <div className="s-fd-proof s-fd-watch">
          <span className="s-fd-watch-track">
            {proof.ticks.map((t, i) => (
              <i key={t} style={{ left: `${(i / (proof.ticks.length - 1)) * 100}%` }} />
            ))}
          </span>
          <span className="s-fd-watch-scale">
            {proof.ticks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </span>
          <p className="s-fd-watch-none">{proof.none}</p>
        </div>
      )
  }
}

/* 1 finding: the line first, then the card that shows it. */
function Finding({ f }: { f: StudyFinding }) {
  const shop = shops[f.shop]
  return (
    <figure className="s-fd-item">
      <figcaption className="s-fd-finding">{tie(f.finding)}</figcaption>
      <div className="s-fd-card ob-object">
        <p className="s-fd-bar">
          <span className="s-fd-label">{f.label}</span>
          <span className="s-fd-verdict">{f.verdict}</span>
        </p>
        <div aria-hidden="true">
          <ol className="s-fd-log">
            {shop.rows.map((r, k) => (
              <Row row={r} key={k} />
            ))}
          </ol>
          <Proof proof={shop.proof} />
        </div>
      </div>
    </figure>
  )
}

/* `fine` is the example's small print when there are no link rows to hang it under (pages/UseCase): it closes the
   findings, right under the 4 it explains. */
export function Found({ found, fine, id = 'found' }: { found: NonNullable<UseCaseStudy['found']>; fine?: string; id?: string }) {
  const uid = useId()
  return (
    <section className="s-section s-fd ob-theme-hybrid" data-tone="paper" id={id} aria-labelledby={`${uid}-h`}>
      <div className="s-wrap">
        <header className="s-head s-head--wide s-st-head">
          <h2 className="ob-type-h2" id={`${uid}-h`}>
            {tie(found.heading)}
          </h2>
          <p className="ob-type-body-lg">{tie(found.line)}</p>
        </header>
        <div className="s-fd-grid v5-rail">
          {found.items.map((f) => (
            <Finding key={f.shop} f={f} />
          ))}
        </div>
        <Link className="ob-btn ob-btn--secondary s-fd-cta" to={found.cta.to}>
          <span className="ob-btn-label">{found.cta.label}</span>
          <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
        {fine && <p className="s-st-fine s-st-fine--after">{tie(fine)}</p>}
      </div>
    </section>
  )
}

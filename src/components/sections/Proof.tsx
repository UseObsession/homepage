import { Link } from 'react-router-dom'
import { outputFormats, sample } from '../../content/sample'
import type { Proof as ProofContent } from '../../content/types'
import './Proof.css'

/* A numeral never ends a line apart from its word ("0 reminders", "48 hours"). */
const tie = (s: string) => s.replace(/(\d) /g, '$1\u00a0')

/* A claim longer than this would run past 3 lines of h2 in the 5 column side, so it takes the h3 size there, as the
   Questions' claim does (Faq.tsx). The lasting fix is a shorter claim (docs/REBUILD.md 9b). */
const LONG = 50

/* The first page of the real September report: the 1 real run, shown as the document it is. */
const pdf = outputFormats.find((f) => f.view.kind === 'pdf')?.view
const page = pdf?.kind === 'pdf' ? pdf.pages[0] : undefined

/* Proof (docs/REBUILD.md, story beat 8): the real September store check, as a teaser for /sample-output. The claim
   and its line on 1 side; on the other, the top of the real report, cut off by its frame so it reads as a document
   to open, not a picture to read. Its tag says it's the real run, where every app screen says "Example". */
export function Proof({ proof, id = 'proof', className = '' }: { proof: ProofContent; id?: string; className?: string }) {
  return (
    <section className={`s-section s-proof ${className}`} id={id} aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-proof__in">
        <div className="s-proof__copy">
          <h2 className={'ob-type-h2 s-proof__h' + (proof.heading.length > LONG ? ' s-proof__h--long' : '')} id={`${id}-h`}>
            {tie(proof.heading)}
          </h2>
          <p className="s-proof__line">{tie(proof.line)}</p>
          <Link className="ob-btn ob-btn--secondary s-proof__cta" to={proof.cta.to}>
            <span className="ob-btn-label">{proof.cta.label}</span>
            <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {page && (
          <figure className="s-proof__doc">
            <div className="s-proof__tray">
              <img className="s-proof__page" src={page.src} alt={page.alt} width={page.width} height={page.height} loading="lazy" decoding="async" />
            </div>
            <figcaption className="s-screen-note s-proof__tag">{sample.hero.pill}</figcaption>
          </figure>
        )}
      </div>
    </section>
  )
}

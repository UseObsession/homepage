import { useId, useState } from 'react'
import type { Faq as FaqContent } from '../../content/types'
import './Faq.css'

/* The questions (page.faq): a claim heading (trust and the red lines), then the design system's accordion
   (surfaces.css .ob-faq). Each question is a real button inside a heading with aria-expanded; its answer opens in 1
   frame and its words fade in (.ob-disclose). A closed answer is hidden from keys and screen readers. Several can stay
   open. The answers stay in the prerendered HTML, so crawlers and answer engines read every one. */

/* The FAQPage JSON-LD for a page's questions (docs/REBUILD.md, SEO). Pure: the same questions give the same object. */
// oxlint-disable-next-line react/only-export-components
export function faqJsonLd(faq: FaqContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

/* A numeral stays on the line of the word it counts: the words are unchanged. */
const keepNumerals = (text: string) => text.replace(/(\d) (?=\S)/g, '$1\u00a0')

type Props = {
  faq: FaqContent
  /* The questions open at first, by index. The first answer shows the reader what the list holds. */
  open?: number[]
  id?: string
  className?: string
}

export function Faq({ faq, open = [0], id, className }: Props) {
  const base = useId()
  const [shown, setShown] = useState<ReadonlySet<number>>(() => new Set(open))

  const toggle = (i: number) =>
    setShown((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <section id={id} className={'s-section s-faq' + (className ? ' ' + className : '')} aria-labelledby={`${base}-h`}>
      <div className="s-wrap s-faq__grid">
        <div className="s-faq__head">
          <h2 id={`${base}-h`} className="ob-type-h2 s-faq__h">
            {keepNumerals(faq.heading)}
          </h2>
        </div>
        <div className="ob-faq s-faq__list">
          {faq.items.map((item, i) => {
            const isOpen = shown.has(i)
            return (
              <div key={item.q} className="ob-faq-item">
                <h3 className="ob-faq-h">
                  <button
                    type="button"
                    className="ob-faq-q"
                    id={`${base}-q${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`${base}-a${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{item.q}</span>
                    <span className="ob-faq-icon" aria-hidden="true">
                      <i />
                      <i className="ob-anim-turn" />
                    </span>
                  </button>
                </h3>
                <div
                  className={'ob-disclose' + (isOpen ? ' is-open' : '')}
                  id={`${base}-a${i}`}
                >
                  <div>
                    <p className="ob-faq-a">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

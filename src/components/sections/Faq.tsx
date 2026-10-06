import { useId, useState } from 'react'
import type { Faq as FaqContent } from '../../content/types'
import './Faq.css'

/* The questions (page.faq): a claim heading (trust and the red lines), then the design system's accordion
   (surfaces.css .ob-faq). Each question is a real button inside a heading with aria-expanded; its answer opens in 1
   frame and its words fade in (.ob-disclose). A closed answer is hidden from keys and screen readers. Several can stay
   open. Every answer starts closed (James's review, 6 Oct: collapsed on every page), so the reader sees
   the 6 to 10 questions at a glance and opens the one they have. The answers stay in the prerendered HTML, so crawlers
   and answer engines still read every one (and the FAQPage JSON-LD carries them in full); without script they show
   open (Faq.css). Open any by default with `open`. */

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

/* A claim longer than this would run past 3 lines of h2 in the 5 column side, so it takes the h3 size there (Faq.css).
   The lasting fix is a shorter claim (docs/REBUILD.md 9b, the narrative edit). */
const LONG = 50

type Props = {
  faq: FaqContent
  /* The questions open at first, by index. None, unless a page says otherwise. */
  open?: number[]
  id?: string
  className?: string
}

/* The accordion on its own (surfaces.css .ob-faq), for the questions inside a blog post too. */
export function FaqList({ items, open, className = '' }: { items: FaqContent['items']; open?: number[]; className?: string }) {
  const base = useId()
  const [shown, setShown] = useState<ReadonlySet<number>>(() => new Set(open ?? []))

  const toggle = (i: number) =>
    setShown((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <div className={'ob-faq ' + className}>
      {items.map((item, i) => {
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
            <div className={'ob-disclose' + (isOpen ? ' is-open' : '')} id={`${base}-a${i}`}>
              <div>
                <p className="ob-faq-a">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function Faq({ faq, open, id, className }: Props) {
  const base = useId()
  return (
    <section id={id} className={'s-section s-faq' + (className ? ' ' + className : '')} aria-labelledby={`${base}-h`}>
      <div className="s-wrap s-faq__grid">
        <div className="s-faq__head">
          <h2 id={`${base}-h`} className={'ob-type-h2 s-faq__h' + (faq.heading.length > LONG ? ' s-faq__h--long' : '')}>
            {keepNumerals(faq.heading)}
          </h2>
        </div>
        <FaqList items={faq.items} open={open} className="s-faq__list" />
      </div>
    </section>
  )
}

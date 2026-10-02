import { Link } from 'react-router-dom'
import type { BlogBlock } from '../../content/blog/types'
import { AppScreen } from '../AppScreen'
import { FaqList } from '../sections/Faq'
import { drawnFor } from '../workspace'
import { Inline } from './Inline'
import { hostOf } from './util'

/* Every block a post can hold (content/blog/types.ts), on the design system. Prose sits on the article's measure;
   screens, figures and tables keep that column too, so the reading line never jumps. */

function Arrow() {
  return (
    <svg className="ob-btn-glyph ob-btn-arrow" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

function Block({ b }: { b: BlogBlock }) {
  switch (b.kind) {
    case 'p':
      return (
        <p className="s-art-p">
          <Inline text={b.text} />
        </p>
      )
    case 'h2':
      return (
        <h2 className="s-art-h2" id={b.id}>
          {b.text}
        </h2>
      )
    case 'h3':
      return (
        <h3 className="s-art-h3" id={b.id}>
          {b.text}
        </h3>
      )
    case 'list': {
      const items = b.items.map((it, i) => (
        <li key={i}>
          <Inline text={it} />
        </li>
      ))
      return b.ordered ? <ol className="s-art-list s-art-list--ol">{items}</ol> : <ul className="s-art-list">{items}</ul>
    }
    case 'quote':
      return (
        <figure className="s-art-quote">
          <blockquote>
            <p>
              <Inline text={b.text} />
            </p>
          </blockquote>
          <figcaption>{b.href ? <a href={b.href} rel="noopener">{b.cite}</a> : b.cite}</figcaption>
        </figure>
      )
    case 'screen':
      return (
        <figure className="s-art-fig s-art-fig--screen">
          <AppScreen name={b.screen} workspace={b.workspace ?? drawnFor(b.screen)} note="" />
          <figcaption className="s-art-cap">
            <span className="s-art-cap__tag">Example</span>
            <Inline text={b.caption} />
          </figcaption>
        </figure>
      )
    case 'figure':
      return (
        <figure className="s-art-fig">
          <img className="s-art-img" src={b.src} alt={b.alt} width={b.width} height={b.height} loading="lazy" decoding="async" />
          <figcaption className="s-art-cap">
            <Inline text={b.caption} />
          </figcaption>
        </figure>
      )
    case 'table':
      return (
        <figure className="s-art-table">
          <div className="s-art-table__scroll" tabIndex={0} role="region" aria-label={b.caption}>
            <table>
              <thead>
                <tr>
                  {b.cols.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r, ri) => (
                  <tr key={ri}>
                    {r.map((cell, ci) =>
                      ci === 0 ? (
                        <th key={ci} scope="row">
                          <Inline text={cell} />
                        </th>
                      ) : (
                        <td key={ci}>
                          <Inline text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <figcaption className="s-art-cap">
            <Inline text={b.caption} />
          </figcaption>
        </figure>
      )
    case 'stat':
      return (
        <figure className="s-art-stat">
          <p className="s-art-stat__v ob-type-stat">{b.value}</p>
          <figcaption>
            <p className="s-art-stat__l">
              <Inline text={b.label} />
            </p>
            <a className="s-art-stat__src" href={b.href} rel="noopener">
              {b.source}
              <span className="s-art-stat__host">{hostOf(b.href)}</span>
            </a>
          </figcaption>
        </figure>
      )
    case 'note':
      return (
        <aside className="s-art-note" aria-label={b.title}>
          <p className="s-art-note__t">{b.title}</p>
          <p className="s-art-note__x">
            <Inline text={b.text} />
          </p>
        </aside>
      )
    case 'faq':
      return <FaqList items={b.items} open={[]} className="s-art-faq" />
    case 'cta':
      return (
        <aside className="s-art-cta" aria-label={b.label}>
          <p className="s-art-cta__x">
            <Inline text={b.text} />
          </p>
          <Link className="ob-btn ob-btn--secondary ob-btn--sm s-art-cta__btn" to={b.to}>
            <span className="ob-btn-label">{b.label}</span>
            <Arrow />
          </Link>
        </aside>
      )
  }
}

export function Blocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <Block key={i} b={b} />
      ))}
    </>
  )
}

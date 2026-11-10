import { useEffect, useId, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Art } from '../components/blog/Art'
import { Blocks } from '../components/blog/Blocks'
import { Toc, TocInline } from '../components/blog/Toc'
import { Crumbs } from '../components/Crumbs'
import { FinalCta } from '../components/sections/FinalCta'
import { LinkGroups } from '../components/sections/LinkGroups'
import { refFinal, refUi, type ReferencePage, type ReferenceReader } from '../content/reference'
import { blogUi, formatDate } from '../content/resources'
import { refWords } from '../content/words'
import { relOf } from '../lib/competitors'
import { relatedGroups } from '../lib/refLinks'
import { citedSources, sourceDate } from '../lib/sources'
import '../components/sections/Hero.css'
import './Blog.css'

/* A comparison (/compare/obsession-vs-SLUG), an alternatives page (/alternatives/SLUG) or a glossary term
   (/glossary/SLUG), composed from its 1 file (content/reference.ts) on the blog's article frame, so it reads and moves
   like the site's guides: the reader's light falling on the header (the breadcrumb, the kind as the eyebrow pill back to
   its hub, the title, the dek, the day every fact was checked), the page's 1 picture drawn in code, then the side
   contents beside the text (the direct answer, a jump to the comparison where there is one, the sections, the sources
   with their own dates), then what to read next and early access (#join). */

const DEFAULT_READER: Record<ReferencePage['kind'], ReferenceReader> = { compare: 'marketing', alternatives: 'marketing', term: 'sales' }

/* /compare/..., /alternatives/... and /glossary/...: the page at that address, its words loaded with it. */
export function ReferenceAt({ path }: { path: string }) {
  return <Reference page={refWords(path).read()} />
}

export function Reference({ page }: { page: ReferencePage }) {
  const id = useId()
  const toc = useMemo(() => page.blocks.flatMap((b) => (b.kind === 'h2' ? [{ id: b.id, text: b.text, compare: b.compare }] : [])), [page])
  const compareAt = toc.find((t) => t.compare)
  const sources = useMemo(() => citedSources(page), [page])
  const groups = useMemo(() => relatedGroups(page.meta.path, page.related), [page])
  const slug = page.meta.path.split('/').pop() ?? ''

  /* A comparison runs under the side contents (Blog.css), so the contents step aside while it passes them. */
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const art = ref.current
    const rail = art?.querySelector<HTMLElement>('.s-art-rail')
    const wide = art ? [...art.querySelectorAll<HTMLElement>('.s-art-table--compare')] : []
    if (!art || !rail || !wide.length) return
    let frame = 0
    const check = () => {
      frame = 0
      const r = rail.getBoundingClientRect()
      const near = wide.some((w) => {
        const b = w.getBoundingClientRect()
        return b.top < r.bottom + 160 && b.bottom > r.top - 40
      })
      art.classList.toggle('s-art--wide-in-view', near)
    }
    const later = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    check()
    window.addEventListener('scroll', later, { passive: true })
    window.addEventListener('resize', later)
    return () => {
      window.removeEventListener('scroll', later)
      window.removeEventListener('resize', later)
      cancelAnimationFrame(frame)
    }
  }, [page])

  return (
    <>
      <article ref={ref} className="s-art" data-reader={page.reader ?? DEFAULT_READER[page.kind]} aria-labelledby={`${id}-h`}>
        <header className="s-art-head">
          <div className="s-wrap">
            <div className="s-art-head__in ob-anim-hero">
              <Crumbs />
              <p className="s-art-kicker">
                <Link className="ob-layout-eyebrow s-art-kicker__pill" to={refUi.hub[page.kind]}>
                  <span className="s-art-kicker__mark" aria-hidden="true" />
                  {refUi.kicker[page.kind]}
                </Link>
              </p>
              <h1 className="s-art-title" id={`${id}-h`}>
                {page.title}
              </h1>
              <p className="s-art-dek">{page.dek}</p>
              <div className="s-byline s-art-byline">
                <p className="s-byline__meta">
                  {refUi.checked} <time dateTime={page.checked}>{formatDate(page.checked)}</time>
                  <span aria-hidden="true"> · </span>
                  {refUi.read(page.readingMinutes)}
                </p>
              </div>
            </div>
            {page.art && (
              <div className="s-art-heroobj ob-anim-hero-object s-art-stage">
                <div className="s-art-visual s-art-visual--art">
                  <Art art={page.art} />
                </div>
              </div>
            )}
          </div>
        </header>

        <section className="s-art-text" aria-label={page.title}>
          <div className="s-wrap s-art-layout">
            <aside className="s-art-rail">
              <Toc items={toc} />
            </aside>
            <div className="s-art-main">
              <p className="s-art-lead">{page.meta.answer}</p>
              {compareAt && (
                <a className="s-art-jump" href={`#${compareAt.id}`}>
                  <span className="s-art-jump__k">{blogUi.compareTag}</span>
                  <span className="s-art-jump__t">{compareAt.text}</span>
                  <span className="s-art-jump__go">{blogUi.compareJump}</span>
                </a>
              )}
              <TocInline items={toc} />
              <Blocks blocks={page.blocks} />
              {sources.length > 0 && (
                <section className="s-art-sources" aria-labelledby={`${id}-src`}>
                  <h2 className="s-art-sources__h" id={`${id}-src`}>
                    {refUi.sources}
                  </h2>
                  <p className="s-art-sources__note">{refUi.sourcesNote(formatDate(page.checked))}</p>
                  <ol className="s-art-sources__list">
                    {sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} rel={relOf(s.url)}>
                          {s.title}
                        </a>
                        <span className="s-art-sources__meta">
                          {s.publisher}
                          {s.date ? `, ${sourceDate(s.date)}` : ''}
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>
        </section>
      </article>
      {groups.length > 0 && <LinkGroups groups={groups} className="s-lg--then-final s-art-next" />}
      <FinalCta final={refFinal(`${page.kind}-${slug}-final`)} id="join" />
    </>
  )
}

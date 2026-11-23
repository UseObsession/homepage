import { Fragment, useDeferredValue, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppScreen } from '../components/AppScreen'
import { Byline } from '../components/blog/Byline'
import { Art } from '../components/blog/Art'
import { PostVisual } from './BlogPost'
import { FinalCta } from '../components/sections/FinalCta'
import { IndexHero } from '../components/sections/IndexHero'
import { LinkGroups } from '../components/sections/LinkGroups'
import { drawnFor } from '../components/workspace'
import { blogLeadSlug, blogStartHere, blogTopics, topicById, topicOf, topicShelves, type BlogTopic, type BlogTopicId } from '../content/blogTopics'
import { postBySlug, posts, studies } from '../content/registry'
import { blogPage as page, blogUi, formatDate, resourcesPage } from '../content/resources'
import './Blog.css'

/* /blog (rebuilt 23 Nov 2026, Seun: "add a search ... the naming and groups of articles ... promoting the best blogs"):
   - the hero carries the search, with a few searched words to try;
   - with no search: the pillar guide leading, then Start here (1 guide for each kind of reader), then every guide by
     topic (content/blogTopics.ts): a rail of the topics on 2 shelves beside the guides on wide screens, a picker above
     them on narrow ones; All topics shows each topic's 3 strongest guides as cards and the rest as a list, so every
     guide is 1 link away in the page's own HTML;
   - while searching: only the guides that match, the matched words marked in each title.
   A topic is in the address as /blog#topic (an article's kicker links there); a search as /blog?q=words. */
type PostT = (typeof posts)[number]

/* ---- Search: every word must appear in the title, the searched phrases, the dek or the topic; titles weigh most. ---- */
const norm = (s: string) =>
  s
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
const wordsOf = (q: string) => [...new Set(norm(q).split(' ').filter(Boolean))]
/* "agents" also finds "agent", "browsers" "browser". */
const formsOf = (w: string) => (w.length > 3 && w.endsWith('s') ? [w, w.slice(0, -1)] : [w])

const INDEX = posts.map((p) => ({
  p,
  title: ` ${norm(p.title)}`,
  keys: norm([p.primaryKeyword, ...p.keywords].join(' ')),
  rest: norm(`${p.dek} ${topicOf(p).name}`),
}))

function search(q: string): PostT[] {
  const words = wordsOf(q)
  if (!words.length) return []
  const hits: { p: PostT; score: number }[] = []
  for (const d of INDEX) {
    let score = 0
    let all = true
    for (const w of words) {
      const forms = formsOf(w)
      const has = (s: string) => forms.some((f) => s.includes(f))
      const s = (forms.some((f) => d.title.includes(` ${f}`)) ? 6 : has(d.title) ? 4 : 0) + (has(d.keys) ? 2 : 0) + (has(d.rest) ? 1 : 0)
      if (!s) {
        all = false
        break
      }
      score += s
    }
    if (all) hits.push({ p: d.p, score })
  }
  /* Highest score first; the sort is stable, so ties stay newest first. */
  return hits.sort((a, b) => b.score - a.score).map((h) => h.p)
}

/* The title with the searched words marked. */
function Marked({ text, words }: { text: string; words?: string[] }): ReactNode {
  if (!words?.length) return text
  const forms = words.flatMap(formsOf).sort((a, b) => b.length - a.length).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const parts = text.split(new RegExp(`(${forms.join('|')})`, 'gi'))
  return parts.map((part, i) => (i % 2 ? <mark key={i} className="s-blog-hit">{part}</mark> : <Fragment key={i}>{part}</Fragment>))
}

/* ---- Cards ---- */

/* A card's picture: the post's own, drawn small. A photograph uses its 640px crop; an illustration is the same window
   at a smaller base size (Blog.css), so the card shows exactly what the post opens on. */
function CardVisual({ p }: { p: PostT }) {
  const { image, art } = p.hero
  if (image)
    return (
      <div className="s-blog-card__visual s-blog-card__visual--photo">
        <img src={image.thumb ?? image.src} alt={image.alt} width={640} height={360} loading="lazy" decoding="async" />
      </div>
    )
  if (art)
    return (
      <div className="s-blog-card__visual s-blog-card__visual--art" aria-hidden="true">
        <Art art={art} />
      </div>
    )
  return null
}

/* 1 post as a card: its picture, its topic in its reader's colour (left out inside its own topic), the title (the link;
   its hit area covers the card), the dek and its length. */
function PostCard({ p, h = 'h3', words, topic = true }: { p: PostT; h?: 'h3' | 'h4'; words?: string[]; topic?: boolean }) {
  const t = topicOf(p)
  const H = h
  return (
    <article className="s-blog-card" data-reader={t.reader}>
      <CardVisual p={p} />
      <div className="s-blog-card__copy">
        {topic && (
          <p className="s-blog-card__kicker">
            <span className="s-blog-card__mark" aria-hidden="true" />
            {t.name}
          </p>
        )}
        <H className="s-blog-card__title">
          <Link className="s-blog-card__link" to={`/blog/${p.slug}`}>
            <Marked text={p.title} words={words} />
          </Link>
        </H>
        <p className="s-blog-card__dek">{p.dek}</p>
        <p className="s-blog-card__foot">
          <time dateTime={p.updated || p.published}>{formatDate(p.updated || p.published)}</time>
          <span aria-hidden="true"> · </span>
          {blogUi.read(p.readingMinutes)}
        </p>
      </div>
    </article>
  )
}

/* A topic's guides: its picks first, then the rest newest first. */
const guidesOf = (t: BlogTopic): PostT[] => {
  const picks = t.picks.map((s) => postBySlug[s]).filter((p): p is PostT => !!p)
  return [...picks, ...posts.filter((p) => topicOf(p).id === t.id && !picks.includes(p))]
}
const shelfOrder: BlogTopic[] = topicShelves.flatMap((s) => s.topics.map((id) => topicById(id)!))

/* 1 topic: its name and line, then its guides. Under All topics, 3 as cards and the rest as a list of titles. */
function TopicBlock({ t, full, onOpen }: { t: BlogTopic; full: boolean; onOpen: (id: BlogTopicId) => void }) {
  const list = guidesOf(t)
  const cards = full ? list : list.slice(0, 3)
  const rest = full ? [] : list.slice(3)
  return (
    <section className="s-blog-topic" id={t.id} data-reader={t.reader} aria-labelledby={`${t.id}-h`}>
      <header className="s-blog-topic__head">
        <div className="s-blog-topic__words">
          <h3 className="s-blog-topic__h" id={`${t.id}-h`}>
            <span className="s-blog-topic__mark" aria-hidden="true" />
            {t.name}
          </h3>
          <p className="s-blog-topic__line">{t.line}</p>
        </div>
        {full ? (
          <p className="s-blog-topic__n">{blogUi.posts(list.length)}</p>
        ) : (
          <button type="button" className="s-blog-topic__all" onClick={() => onOpen(t.id)}>
            {blogUi.allIn(list.length)}
            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
              <path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </header>
      <ul className="s-blog-grid s-blog-grid--topic">
        {cards.map((p) => (
          <li key={p.slug}>
            <PostCard p={p} h="h4" topic={false} />
          </li>
        ))}
      </ul>
      {rest.length > 0 && (
        <ul className="s-blog-more" aria-label={blogUi.moreIn(t.name)}>
          {rest.map((p) => (
            <li key={p.slug}>
              <Link className="s-blog-more__link" to={`/blog/${p.slug}`}>
                <span className="s-blog-more__title">{p.title}</span>
                <span className="s-blog-more__n">{blogUi.read(p.readingMinutes)}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

/* The address without reloading or scrolling: ?q= for a search, #topic for a topic. */
function setAddress(q: string, topic: BlogTopicId | 'all') {
  const url = new URL(window.location.href)
  if (q) url.searchParams.set('q', q)
  else url.searchParams.delete('q')
  url.hash = !q && topic !== 'all' ? topic : ''
  window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash)
}

export function Blog() {
  const lead = postBySlug[blogLeadSlug] ?? posts[0]
  const start = blogStartHere.map((s) => postBySlug[s]).filter((p): p is PostT => !!p)
  const [topic, setTopic] = useState<BlogTopicId | 'all'>('all')
  const [query, setQuery] = useState('')
  const q = useDeferredValue(query)
  const words = wordsOf(q)
  const results = words.length ? search(q) : []
  const searching = words.length > 0
  const input = useRef<HTMLInputElement>(null)
  const browse = useRef<HTMLElement>(null)

  /* An article's topic link (/blog#topic) opens the index on that topic; the app scrolls to it. A shared search
     (/blog?q=) opens on its results. */
  const { hash } = useLocation()
  useEffect(() => {
    const at = topicById(hash.slice(1))
    if (at) setTopic(at.id)
  }, [hash])
  useEffect(() => {
    const shared = new URLSearchParams(window.location.search).get('q')
    if (shared) setQuery(shared)
  }, [])
  /* "/" anywhere on the page jumps to the search, as on most docs and blogs. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey || el?.closest('input, textarea, select, [contenteditable]')) return
      e.preventDefault()
      input.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const ask = (v: string) => {
    setQuery(v)
    setAddress(v.trim(), topic)
  }
  /* Picking a topic shows its guides from the top of the shelf. */
  const open = (id: BlogTopicId | 'all') => {
    setTopic(id)
    setQuery('')
    setAddress('', id)
    const top = browse.current?.getBoundingClientRect().top ?? 0
    if (top < 0) browse.current?.scrollIntoView({ block: 'start' })
  }
  const count = (id: BlogTopicId) => blogTopics.find((t) => t.id === id)!.slugs.length

  if (!lead)
    return (
      <>
        <IndexHero headline={page.hero.headline} sub={page.hero.sub} />
        <LinkGroups
          groups={[
            {
              id: 'start',
              name: page.empty.heading,
              line: page.empty.line,
              rows: [
                ...studies.map((s) => ({ label: s.name, to: s.meta.path, line: s.line })),
                { label: resourcesPage.groups.sample.link.label, to: resourcesPage.groups.sample.link.to, line: resourcesPage.groups.sample.link.line },
              ],
            },
          ]}
          single
          className="s-lg--then-final"
        />
        <FinalCta final={page.final} id="join" />
      </>
    )

  const leadTopic = topicOf(lead)
  return (
    <>
      <IndexHero headline={page.hero.headline} sub={page.hero.sub}>
        <form className="s-blog-search" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="sr-only" htmlFor="s-blog-q">
            {blogUi.search}
          </label>
          <div className="s-blog-search__field">
            <svg className="s-blog-search__icon" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
              <circle cx="8.75" cy="8.75" r="5.75" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path d="m13 13 4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input
              ref={input}
              id="s-blog-q"
              className="s-blog-search__input"
              type="search"
              autoComplete="off"
              spellCheck={false}
              enterKeyHint="search"
              placeholder={blogUi.searchPlaceholder(posts.length)}
              value={query}
              onChange={(e) => ask(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape' && query) {
                  e.preventDefault()
                  ask('')
                }
              }}
              aria-controls="s-blog-results"
            />
            {query ? (
              <button type="button" className="s-blog-search__clear" onClick={() => (ask(''), input.current?.focus())} aria-label={blogUi.clear}>
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                  <path d="m4 4 8 8M12 4l-8 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            ) : (
              <kbd className="s-blog-search__key" aria-hidden="true">
                /
              </kbd>
            )}
          </div>
          <p className="s-blog-search__try">
            <span className="s-blog-search__try-label">{blogUi.searchTry}</span>
            {blogUi.searchTerms.map((t) => (
              <button key={t} type="button" className="s-blog-search__term" aria-pressed={norm(query) === norm(t)} onClick={() => ask(t)}>
                {t}
              </button>
            ))}
          </p>
        </form>
        <p className="s-blog-feed">
          <a href="/blog/rss.xml" type="application/rss+xml">
            {blogUi.rss}
          </a>
        </p>
      </IndexHero>

      {searching ? (
        <section className="s-blog-results" id="s-blog-results" aria-labelledby="s-blog-results-h">
          <div className="s-wrap">
            <div className="s-blog-results__head">
              <h2 className="s-blog-results__h" id="s-blog-results-h" aria-live="polite">
                {results.length ? blogUi.results(results.length, q.trim()) : blogUi.noResults(q.trim())}
              </h2>
              <button type="button" className="s-blog-results__clear" onClick={() => (ask(''), input.current?.focus())}>
                {blogUi.clear}
              </button>
            </div>
            {results.length ? (
              <ul className="s-blog-grid">
                {results.map((p) => (
                  <li key={p.slug}>
                    <PostCard p={p} words={words} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="s-blog-empty">
                <p className="s-blog-empty__line">{blogUi.noResultsLine}</p>
                <ul className="s-blog-empty__topics">
                  {shelfOrder.map((t) => (
                    <li key={t.id}>
                      <button type="button" className="s-blog-chip" data-reader={t.reader} onClick={() => open(t.id)}>
                        <span className="s-blog-chip__mark" aria-hidden="true" />
                        {t.name}
                        <span className="s-blog-chip__n">{t.slugs.length}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      ) : (
        <>
          <section className="s-blog-lead" aria-labelledby="s-blog-lead-h">
            <div className="s-wrap">
              <div className={'s-blog-lead__in' + (lead.hero.screen || lead.hero.image || lead.hero.art ? '' : ' is-words')} data-reader={leadTopic.reader}>
                <div className="s-blog-lead__copy">
                  <p className="s-blog-lead__kicker">
                    <span>{blogUi.featured}</span>
                    <span aria-hidden="true">·</span>
                    <span>{leadTopic.name}</span>
                  </p>
                  <h2 className="s-blog-lead__title" id="s-blog-lead-h">
                    {/* The title is the link; its hit area covers the whole lead (Blog.css). */}
                    <Link className="s-blog-lead__link" to={`/blog/${lead.slug}`}>
                      {lead.title}
                    </Link>
                  </h2>
                  <p className="s-blog-lead__dek">{lead.dek}</p>
                  <Byline post={lead} className="s-blog-lead__byline" />
                  <span className="ob-btn ob-btn--primary ob-btn--sm s-blog-lead__cue" aria-hidden="true">
                    <span className="ob-btn-label">{blogUi.readPost}</span>
                  </span>
                </div>
                {lead.hero.image || lead.hero.art ? (
                  <div className="s-blog-lead__screen" aria-hidden="true">
                    <PostVisual post={lead} eager={false} />
                  </div>
                ) : (
                  lead.hero.screen && (
                    <div className="s-blog-lead__screen" aria-hidden="true">
                      <AppScreen name={lead.hero.screen} workspace={lead.hero.workspace ?? drawnFor(lead.hero.screen)} note="" />
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {start.length > 0 && (
            <section className="s-blog-start" aria-labelledby="s-blog-start-h">
              <div className="s-wrap">
                <div className="s-blog-sec-head">
                  <h2 className="s-blog-sec-head__h" id="s-blog-start-h">
                    {blogUi.startHere}
                  </h2>
                  <p className="s-blog-sec-head__line">{blogUi.startHereLine}</p>
                </div>
                <ul className="s-blog-grid s-blog-grid--start">
                  {start.map((p) => (
                    <li key={p.slug}>
                      <PostCard p={p} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="s-blog-browse" ref={browse} aria-labelledby="s-blog-browse-h">
            <div className="s-wrap">
              <div className="s-blog-sec-head">
                <h2 className="s-blog-sec-head__h" id="s-blog-browse-h">
                  {blogUi.browse}
                </h2>
                <p className="s-blog-sec-head__line">{blogUi.browseLine(posts.length, blogTopics.length)}</p>
              </div>
              <div className="s-blog-browse__in">
                <nav className="s-blog-rail" aria-label={blogUi.filter}>
                  <button type="button" className="s-blog-rail__b s-blog-rail__b--all" aria-pressed={topic === 'all'} onClick={() => open('all')}>
                    <span className="s-blog-rail__name">{blogUi.allTopics}</span>
                    <span className="s-blog-rail__n">{posts.length}</span>
                  </button>
                  {topicShelves.map((shelf) => (
                    <div className="s-blog-rail__shelf" key={shelf.name}>
                      <p className="s-blog-rail__label">{shelf.name}</p>
                      <ul className="s-blog-rail__list">
                        {shelf.topics.map((id) => {
                          const t = topicById(id)!
                          return (
                            <li key={id}>
                              <button type="button" className="s-blog-rail__b" data-reader={t.reader} aria-pressed={topic === id} onClick={() => open(id)}>
                                <span className="s-blog-rail__mark" aria-hidden="true" />
                                <span className="s-blog-rail__name">{t.name}</span>
                                <span className="s-blog-rail__n">{count(id)}</span>
                              </button>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                </nav>

                <div className="s-blog-pick">
                  <label className="s-blog-pick__label" htmlFor="s-blog-topic">
                    {blogUi.topicPick}
                  </label>
                  <div className="s-blog-pick__field">
                    <select id="s-blog-topic" className="s-blog-pick__select" value={topic} onChange={(e) => open(e.target.value as BlogTopicId | 'all')}>
                      <option value="all">{`${blogUi.allTopics} (${posts.length})`}</option>
                      {topicShelves.map((shelf) => (
                        <optgroup key={shelf.name} label={shelf.name}>
                          {shelf.topics.map((id) => (
                            <option key={id} value={id}>{`${topicById(id)!.name} (${count(id)})`}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <svg className="s-blog-pick__caret" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                      <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="s-blog-browse__main">
                  {topic === 'all' ? (
                    shelfOrder.map((t) => <TopicBlock key={t.id} t={t} full={false} onOpen={open} />)
                  ) : (
                    <>
                      <TopicBlock key={topic} t={topicById(topic)!} full onOpen={open} />
                      <button type="button" className="s-blog-back" onClick={() => open('all')}>
                        {blogUi.backToAll}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <FinalCta final={page.final} id="join" />
    </>
  )
}

import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppScreen } from '../components/AppScreen'
import { Byline } from '../components/blog/Byline'
import { Art } from '../components/blog/Art'
import { categoryId, readerOf } from '../components/blog/util'
import { PostVisual } from './BlogPost'
import { FinalCta } from '../components/sections/FinalCta'
import { IndexHero } from '../components/sections/IndexHero'
import { LinkGroups, type LinkGroupRows } from '../components/sections/LinkGroups'
import { drawnFor } from '../components/workspace'
import { posts, studies } from '../content/registry'
import { blogPage as page, blogUi, formatDate, resourcesPage } from '../content/resources'
import './Blog.css'

/* /blog: the featured post (or the newest), leading (its hub, title, dek, both founders, and its hero screen if it has one), then every
   post under its hub, newest first, as the site's link rows (1 list until a hub holds 2 posts); then the waitlist (#join). With no posts yet, the page
   points at the work itself: the use cases and the 1 real run. The feed is at /blog/rss.xml. */
type PostT = (typeof posts)[number]

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

/* 1 post as a card: its picture, its hub in its reader's colour, the title (the link; its hit area covers the card),
   the dek and when it was written. */
function PostCard({ p }: { p: PostT }) {
  return (
    <article className="s-blog-card" data-reader={readerOf(p.category)}>
      <CardVisual p={p} />
      <div className="s-blog-card__copy">
        <p className="s-blog-card__kicker">
          <span className="s-blog-card__mark" aria-hidden="true" />
          {p.category}
        </p>
        <h3 className="s-blog-card__title">
          <Link className="s-blog-card__link" to={`/blog/${p.slug}`}>
            {p.title}
          </Link>
        </h3>
        <p className="s-blog-card__dek">{p.dek}</p>
        <p className="s-blog-card__foot">
          <time dateTime={p.published}>{formatDate(p.published)}</time>
          <span aria-hidden="true"> · </span>
          {blogUi.read(p.readingMinutes)}
        </p>
      </div>
    </article>
  )
}

const HUBS = [...new Set(posts.map((p) => p.category))]

export function Blog() {
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const [hub, setHub] = useState<string>('all')
  /* An article's hub link (/blog#hub) opens the index on that hub; the app scrolls to its filter button. */
  const { hash } = useLocation()
  useEffect(() => {
    const at = HUBS.find((c) => `#${categoryId(c)}` === hash)
    if (at) setHub(at)
  }, [hash])
  const hubs = HUBS
  /* Every post but the lead, in its order; a hub shows all of its own, the lead included. */
  const shown = hub === 'all' ? posts.filter((p) => p !== featured) : posts.filter((p) => p.category === hub)
  /* A hub earns its own group once it holds 2 posts; until then the rest sit in 1 list, each row naming its hub. */
  const grouped = hubs.some((c) => posts.filter((p) => p.category === c).length > 1)
  const row = (p: (typeof posts)[number], hub: boolean) => ({
    label: p.title,
    to: `/blog/${p.slug}`,
    line: p.dek,
    foot: `${hub ? p.category + ' · ' : ''}${formatDate(p.published)} · ${blogUi.read(p.readingMinutes)}`,
  })
  const groups: LinkGroupRows[] = !featured
    ? [
        {
          id: 'start',
          name: page.empty.heading,
          line: page.empty.line,
          rows: [
            ...studies.map((s) => ({ label: s.name, to: s.meta.path, line: s.line })),
            { label: resourcesPage.groups.sample.link.label, to: resourcesPage.groups.sample.link.to, line: resourcesPage.groups.sample.link.line },
          ],
        },
      ]
    : grouped
      ? hubs.map((c) => ({
          id: categoryId(c),
          name: c,
          line: blogUi.posts(posts.filter((p) => p.category === c).length),
          rows: posts.filter((p) => p.category === c).map((p) => row(p, false)),
        }))
      : [{ id: 'posts', name: blogUi.more, rows: posts.filter((p) => p !== featured).map((p) => row(p, true)) }]

  return (
    <>
      <IndexHero headline={page.hero.headline} sub={page.hero.sub}>
        {featured && (
          <p className="s-blog-feed">
            <a href="/blog/rss.xml" type="application/rss+xml">
              {blogUi.rss}
            </a>
          </p>
        )}
      </IndexHero>

      {featured && (
        <section className="s-blog-lead" aria-labelledby="s-blog-lead-h">
          <div className="s-wrap">
            <div className={'s-blog-lead__in' + (featured.hero.screen || featured.hero.image || featured.hero.art ? '' : ' is-words')} data-reader={readerOf(featured.category)}>
              <div className="s-blog-lead__copy">
                <p className="s-blog-lead__kicker">
                  <span>{blogUi.featured}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featured.category}</span>
                </p>
                <h2 className="s-blog-lead__title" id="s-blog-lead-h">
                  {/* The title is the link; its hit area covers the whole lead (Blog.css). */}
                  <Link className="s-blog-lead__link" to={`/blog/${featured.slug}`}>
                    {featured.title}
                  </Link>
                </h2>
                <p className="s-blog-lead__dek">{featured.dek}</p>
                <Byline post={featured} className="s-blog-lead__byline" />
                <span className="ob-btn ob-btn--primary ob-btn--sm s-blog-lead__cue" aria-hidden="true">
                  <span className="ob-btn-label">{blogUi.readPost}</span>
                </span>
              </div>
              {featured.hero.image || featured.hero.art ? (
                <div className="s-blog-lead__screen" aria-hidden="true">
                  <PostVisual post={featured} eager={false} />
                </div>
              ) : (
                featured.hero.screen && (
                  <div className="s-blog-lead__screen" aria-hidden="true">
                    <AppScreen name={featured.hero.screen} workspace={featured.hero.workspace ?? drawnFor(featured.hero.screen)} note="" />
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {featured ? (
        <section className="s-blog-all" aria-labelledby="s-blog-all-h">
          <div className="s-wrap">
            <div className="s-blog-all__head">
              <h2 className="s-blog-all__h" id="s-blog-all-h">
                {blogUi.all}
              </h2>
              <div className="s-blog-filter" role="group" aria-label={blogUi.filter}>
                {['all', ...hubs].map((h) => (
                  <button
                    key={h}
                    type="button"
                    id={h === 'all' ? undefined : categoryId(h)}
                    className="s-blog-filter__b"
                    aria-pressed={hub === h}
                    onClick={() => setHub(h)}
                  >
                    {h === 'all' ? blogUi.everything : h}
                    <span className="s-blog-filter__n">{h === 'all' ? posts.length : posts.filter((p) => p.category === h).length}</span>
                  </button>
                ))}
              </div>
            </div>
            <ul className="s-blog-grid">
              {shown.map((p) => (
                <li key={p.slug}>
                  <PostCard p={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <LinkGroups groups={groups} single className="s-lg--then-final" />
      )}
      <FinalCta final={page.final} id="join" />
    </>
  )
}

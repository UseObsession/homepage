import { useId, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AppScreen } from '../components/AppScreen'
import { Art } from '../components/blog/Art'
import { Blocks } from '../components/blog/Blocks'
import { Byline } from '../components/blog/Byline'
import { Share } from '../components/blog/Share'
import { TocInline } from '../components/blog/Toc'
import { categoryId, readerOf } from '../components/blog/util'
import { Crumbs } from '../components/Crumbs'
import { FinalCta } from '../components/sections/FinalCta'
import { LinkGroups, type LinkGroupRows, type LinkRow } from '../components/sections/LinkGroups'
import { drawnFor } from '../components/workspace'
import type { BlogBlock, BlogPost as Post } from '../content/blog/types'
import { entryFor } from '../content/meta'
import { nav } from '../content/nav'
import { postBySlug, recipeBySlug } from '../content/registry'
import { blogPage, blogUi, formatDate } from '../content/resources'
import { citedSources, sourceDate } from '../lib/sources'
import '../components/sections/Hero.css'
import './Blog.css'

/* A page's 1 line where the nav gives it one (the readers and the Resources menu), else its share image's line. */
const NAV_LINES = new Map<string, string>(
  [...nav.readers, nav.resources.run, ...nav.resources.useCases.items].map((i) => [i.to, i.line] as [string, string]),
)

/* What a post points to next: other posts (by slug), recipes ("recipe:SLUG") and pages ("/sample-output"). Anything
   that no longer exists is left out, so a renamed page never leaves a dead link. */
function relatedOf(post: Post): { reads: LinkRow[]; recipes: LinkRow[] } {
  const reads: LinkRow[] = []
  const recipes: LinkRow[] = []
  for (const r of post.related) {
    if (r.startsWith('recipe:')) {
      const rx = recipeBySlug[r.slice(7)]
      if (rx) recipes.push({ label: rx.name, to: `/recipes/${rx.slug}`, line: rx.line })
    } else if (r.startsWith('/')) {
      const e = entryFor(r)
      if (e.kind !== 'not-found') reads.push({ label: e.name, to: e.meta.path, line: NAV_LINES.get(e.meta.path) ?? e.line })
    } else {
      const p = postBySlug[r]
      if (p && p.slug !== post.slug) reads.push({ label: p.title, to: `/blog/${p.slug}`, line: p.dek, foot: `${formatDate(p.published)} · ${blogUi.read(p.readingMinutes)}` })
    }
  }
  return { reads, recipes }
}

/* The app screen, where a post has one, sits in the text just before its first quiet link to the product: the point
   where the by-hand method stops and the reader may want to see the same job run. */
function withScreen(post: Post): BlogBlock[] {
  const screen = post.hero.screen
  if (!screen) return post.blocks
  const at = post.blocks.findIndex((b) => b.kind === 'cta')
  const fig: BlogBlock = { kind: 'screen', screen, caption: blogUi.screenCaption, workspace: post.hero.workspace }
  return at < 0 ? [...post.blocks, fig] : [...post.blocks.slice(0, at), fig, ...post.blocks.slice(at)]
}

/* A photograph ships at 1760px with an 880px twin beside it (public/blog/SLUG/hero-880.webp), so a phone loads the small one. */
const srcSetOf = (src: string) => (src.includes('-1760.') ? `${src.replace('-1760.', '-880.')} 880w, ${src} 1760w` : undefined)

/* The post's 1 picture, in 1 frame for every post: its photograph (graded, credited) or its illustration. */
export function PostVisual({ post, eager = true }: { post: Post; eager?: boolean }) {
  const { image, art } = post.hero
  if (image)
    return (
      <figure className="s-art-visual s-art-visual--photo">
        <img
          src={image.src}
          srcSet={srcSetOf(image.src)}
          sizes="(max-width: 920px) calc(100vw - 32px), 880px"
          alt={image.alt}
          width={image.width}
          height={image.height}
          decoding="async"
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
        />
        {image.credit && eager && (
          <figcaption className="s-art-visual__credit">
            {blogUi.photo}{' '}
            <a href={image.credit.url} rel="noopener">
              {image.credit.name}
            </a>{' '}
            {blogUi.onPexels}
          </figcaption>
        )}
      </figure>
    )
  if (art)
    return (
      <div className="s-art-visual s-art-visual--art">
        <Art art={art} />
      </div>
    )
  return null
}

/* /blog/SLUG: the post with that slug. */
export function BlogPostAt({ slug }: { slug: string }) {
  const post = postBySlug[slug]
  return post ? <BlogPost post={post} /> : null
}

/* A post in the hub's reader colour, on the site's own ink (or paper when the reader picks light), in 1 reading column
   of 680px from the breadcrumb to the sources: the header (the breadcrumb, the hub, the title, the dek, both founders,
   the date and the reading time) under the reader's light, the 1 picture, the direct answer with the contents under
   it, the text, the share row and the sources (only those the text links to, in the order it first does, with the day
   the links were checked). Then what to read next, the recipes for the job and the waitlist (#join). */
export function BlogPost({ post }: { post: Post }) {
  const id = useId()
  const toc = useMemo(() => post.blocks.flatMap((b) => (b.kind === 'h2' ? [{ id: b.id, text: b.text }] : [])), [post])
  const blocks = useMemo(() => withScreen(post), [post])
  const sources = useMemo(() => citedSources(post), [post])
  const { reads, recipes } = relatedOf(post)
  const groups: LinkGroupRows[] = [
    ...(reads.length ? [{ id: 'read-next', name: blogUi.related, rows: reads }] : []),
    ...(recipes.length ? [{ id: 'recipes', name: blogUi.recipes, rows: recipes }] : []),
  ]
  const hasVisual = !!(post.hero.image || post.hero.art)
  const heroScreen = !hasVisual && post.hero.screen

  return (
    <>
      <article className="s-art" data-reader={readerOf(post.category)} aria-labelledby={`${id}-h`}>
        <header className="s-art-head">
          <div className="s-wrap">
            <div className="s-art-head__in ob-anim-hero">
              <Crumbs />
              <p className="s-art-kicker">
                <Link className="ob-layout-eyebrow s-art-kicker__pill" to={`/blog#${categoryId(post.category)}`}>
                  <span className="s-art-kicker__mark" aria-hidden="true" />
                  {post.category}
                </Link>
              </p>
              <h1 className="s-art-title" id={`${id}-h`}>
                {post.title}
              </h1>
              <p className="s-art-dek">{post.dek}</p>
              <Byline post={post} className="s-art-byline" />
            </div>
          </div>
        </header>
        {(hasVisual || heroScreen) && (
          <div className="s-wrap">
            <div className={'s-art-heroobj ob-anim-hero-object' + (post.hero.image ? '' : ' s-art-stage')}>
              {hasVisual ? (
                <PostVisual post={post} />
              ) : (
                heroScreen && <AppScreen name={heroScreen} workspace={post.hero.workspace ?? drawnFor(heroScreen)} />
              )}
            </div>
          </div>
        )}

        <section className="s-art-text" aria-label={post.title}>
          <div className="s-wrap s-art-body">
            <div className="s-art-main">
              <div className="s-art-sum">
                <p className="s-art-lead">{post.answer}</p>
                {toc.length > 1 && (
                  <nav className="s-art-toc" aria-label={blogUi.toc}>
                    <p className="s-art-toc__label">{blogUi.toc}</p>
                    <ol className="s-art-toc__list">
                      {toc.map((t) => (
                        <li key={t.id}>
                          <a className="s-art-toc__link" href={`#${t.id}`}>
                            {t.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                )}
              </div>
              <TocInline items={toc} />
              <Blocks blocks={hasVisual ? blocks : post.blocks} />
              <Share path={`/blog/${post.slug}`} title={post.title} />
              {sources.length > 0 && (
                <section className="s-art-sources" aria-labelledby={`${id}-src`}>
                  <h2 className="s-art-sources__h" id={`${id}-src`}>
                    {blogUi.sources}
                  </h2>
                  <p className="s-art-sources__note">{blogUi.sourcesNote(formatDate(post.updated || post.published))}</p>
                  <ol className="s-art-sources__list">
                    {sources.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} rel="noopener">
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
      <FinalCta final={blogPage.final} id="join" />
    </>
  )
}

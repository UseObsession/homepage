import { useId, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { AppScreen } from '../components/AppScreen'
import { Blocks } from '../components/blog/Blocks'
import { Byline } from '../components/blog/Byline'
import { Toc } from '../components/blog/Toc'
import { categoryId, hostOf } from '../components/blog/util'
import { Crumbs } from '../components/Crumbs'
import { FinalCta } from '../components/sections/FinalCta'
import { LinkGroups, type LinkGroupRows, type LinkRow } from '../components/sections/LinkGroups'
import { drawnFor } from '../components/workspace'
import type { BlogPost as Post } from '../content/blog/types'
import { entryFor } from '../content/meta'
import { nav } from '../content/nav'
import { postBySlug, recipeBySlug } from '../content/registry'
import { blogPage, blogUi, formatDate } from '../content/resources'
import '../components/sections/Hero.css'
import './Blog.css'

/* A page's 1 line where the nav gives it one (the Solutions and Resources menus), else its share image's line. */
const NAV_LINES = new Map<string, string>(
  [...nav.solutions.items, ...nav.resources.items, ...nav.resources.useCases.items].flatMap((i) => (i.line ? [[i.to, i.line] as [string, string]] : [])),
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

/* /blog/SLUG: 1 post (content/blog/SLUG.ts). The header on the page's axis (the breadcrumb, the post's hub, the title,
   the dek, both founders, the date and the reading time) and the hero screen if it has one; then the text on its
   reading measure with its contents beside it on wide screens; the sources; what to read next and the recipes that do
   the job; the waitlist (#join). */
export function BlogPost({ post }: { post: Post }) {
  const id = useId()
  const toc = useMemo(() => post.blocks.flatMap((b) => (b.kind === 'h2' ? [{ id: b.id, text: b.text }] : [])), [post])
  const { reads, recipes } = relatedOf(post)
  const groups: LinkGroupRows[] = [
    ...(reads.length ? [{ id: 'read-next', name: blogUi.related, rows: reads }] : []),
    ...(recipes.length ? [{ id: 'recipes', name: blogUi.recipes, rows: recipes }] : []),
  ]
  const screen = post.hero.screen
  const image = post.hero.image

  return (
    <>
      <article className="s-art" aria-labelledby={`${id}-h`}>
        <header className="s-hero s-art-hero">
          <div className="s-wrap s-hero-wrap">
            <Crumbs />
            <div className="s-hero-head ob-anim-hero">
              <p className="s-art-kicker">
                <Link to={`/blog#${categoryId(post.category)}`}>{post.category}</Link>
              </p>
              <h1 className="s-art-title" id={`${id}-h`}>
                {post.title}
              </h1>
              <p className="s-art-dek">{post.dek}</p>
              <Byline post={post} className="s-art-byline" />
            </div>
            {screen && (
              <div className="s-art-heroobj ob-anim-hero-object">
                <AppScreen name={screen} workspace={post.hero.workspace ?? drawnFor(screen)} />
              </div>
            )}
            {!screen && image && (
              <div className="s-art-heroobj ob-anim-hero-object">
                <img className="s-art-img" src={image.src} alt={image.alt} width={image.width} height={image.height} decoding="async" />
              </div>
            )}
          </div>
        </header>

        <div className="s-wrap s-art-body">
          <aside className="s-art-side">
            <Toc items={toc} />
          </aside>
          <div className="s-art-main">
            <Blocks blocks={post.blocks} />
            {post.sources.length > 0 && (
              <section className="s-art-sources" aria-labelledby={`${id}-src`}>
                <h2 className="s-art-sources__h" id={`${id}-src`}>
                  {blogUi.sources}
                </h2>
                <ol className="s-art-sources__list">
                  {post.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} rel="noopener">
                        {s.title}
                      </a>
                      <span className="s-art-sources__meta">
                        {s.publisher}
                        {s.date ? `, ${formatDate(s.date)}` : ''} · {hostOf(s.url)}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>
        </div>
      </article>
      {groups.length > 0 && <LinkGroups groups={groups} className="s-lg--then-final s-art-next" />}
      <FinalCta final={blogPage.final} id="join" />
    </>
  )
}

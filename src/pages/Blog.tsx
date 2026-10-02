import { Link } from 'react-router-dom'
import { AppScreen } from '../components/AppScreen'
import { Byline } from '../components/blog/Byline'
import { categoryId } from '../components/blog/util'
import { FinalCta } from '../components/sections/FinalCta'
import { IndexHero } from '../components/sections/IndexHero'
import { LinkGroups, type LinkGroupRows } from '../components/sections/LinkGroups'
import { drawnFor } from '../components/workspace'
import { posts, studies } from '../content/registry'
import { blogPage as page, blogUi, formatDate, resourcesPage } from '../content/resources'
import './Blog.css'

/* /blog: the newest post, featured (its hub, title, dek, both founders, and its hero screen if it has one), then every
   post under its hub, newest first, as the site's link rows; then the waitlist (#join). With no posts yet, the page
   points at the work itself: the use cases and the 1 real run. The feed is at /blog/rss.xml. */
export function Blog() {
  const [featured] = posts
  const hubs = [...new Set(posts.map((p) => p.category))]
  const groups: LinkGroupRows[] = featured
    ? hubs.map((c) => ({
        id: categoryId(c),
        name: c,
        line: blogUi.posts(posts.filter((p) => p.category === c).length),
        rows: posts
          .filter((p) => p.category === c)
          .map((p) => ({ label: p.title, to: `/blog/${p.slug}`, line: p.dek, foot: `${formatDate(p.published)} · ${blogUi.read(p.readingMinutes)}` })),
      }))
    : [
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
            <div className={'s-blog-lead__in' + (featured.hero.screen ? '' : ' is-words')}>
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
              </div>
              {featured.hero.screen && (
                <div className="s-blog-lead__screen" aria-hidden="true">
                  <AppScreen name={featured.hero.screen} workspace={featured.hero.workspace ?? drawnFor(featured.hero.screen)} note="" />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <LinkGroups groups={groups} single={!featured} className="s-lg--then-final" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}

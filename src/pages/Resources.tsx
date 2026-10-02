import { FinalCta } from '../components/sections/FinalCta'
import { IndexHero } from '../components/sections/IndexHero'
import { LinkGroups, type LinkRow } from '../components/sections/LinkGroups'
import { formatDate, blogUi, resourcesPage as page } from '../content/resources'
import { posts, studies } from '../content/registry'

/* /resources: everything that shows the work. The use cases, the 1 real run and the blog (its 3 newest posts, or the
   blog itself while it has none), each as a group of link rows; then the waitlist (#join). */
export function Resources() {
  const g = page.groups
  const latest: LinkRow[] = posts.slice(0, 3).map((p) => ({
    label: p.title,
    to: `/blog/${p.slug}`,
    line: p.dek,
    foot: `${formatDate(p.published)} · ${blogUi.read(p.readingMinutes)}`,
  }))
  return (
    <>
      <IndexHero headline={page.hero.headline} sub={page.hero.sub} />
      <LinkGroups
        className="s-lg--then-final"
        groups={[
          {
            ...g.useCases,
            rows: studies.map((s) => ({ label: s.name, to: s.meta.path, line: s.line })),
          },
          { ...g.sample, rows: [{ label: g.sample.link.label, to: g.sample.link.to, line: g.sample.link.line }] },
          {
            ...g.blog,
            rows: latest.length ? [...latest, { label: g.blog.all.label, to: g.blog.all.to }] : [{ label: g.blog.empty.label, to: g.blog.all.to, line: g.blog.empty.line }],
          },
        ]}
      />
      <FinalCta final={page.final} id="join" />
    </>
  )
}

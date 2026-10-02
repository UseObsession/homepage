import { blogUi, formatDate } from '../../content/resources'
import type { BlogPost } from '../../content/blog/types'

/* The post's authors (both founders, docs/REBUILD.md 9c), then the date and the reading time (docs/REBUILD.md 9c). An updated date shows only when it differs. */
export function Byline({ post, className = '' }: { post: BlogPost; className?: string }) {
  const changed = post.updated && post.updated !== post.published
  return (
    <div className={`s-byline ${className}`}>
      <ul className="s-byline__people" aria-label={blogUi.by}>
        {post.authors.map((a) => (
          <li key={a.name}>
            <span className="s-byline__name">{a.name}</span>
            <span className="s-byline__role">{a.role}</span>
          </li>
        ))}
      </ul>
      <p className="s-byline__meta">
        <time dateTime={post.published}>{formatDate(post.published)}</time>
        {changed && (
          <>
            <span aria-hidden="true"> · </span>
            {blogUi.updated} <time dateTime={post.updated}>{formatDate(post.updated)}</time>
          </>
        )}
        <span aria-hidden="true"> · </span>
        {blogUi.read(post.readingMinutes)}
      </p>
    </div>
  )
}

import { useState } from 'react'
import { blogUi } from '../../content/resources'
import { absolute } from '../../content/meta'

/* The post's share row, after the text: LinkedIn and X open their own share pages with the post's address (and its
   title for X); Copy link puts the address on the clipboard and says so. Plain links, so they work before the page's
   script runs; only Copy link needs it. */
export function Share({ path, title }: { path: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const url = absolute(path)
  const enc = encodeURIComponent
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2400)
    } catch {
      setCopied(false)
    }
  }
  return (
    <div className="s-art-share" role="group" aria-label={blogUi.share}>
      <span className="s-art-share__label">{blogUi.share}</span>
      <a
        className="ob-btn ob-btn--secondary ob-btn--sm"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`}
        target="_blank"
        rel="noopener"
        aria-label={blogUi.shareOn('LinkedIn')}
      >
        <span className="ob-btn-label">LinkedIn</span>
      </a>
      <a
        className="ob-btn ob-btn--secondary ob-btn--sm"
        href={`https://x.com/intent/post?url=${enc(url)}&text=${enc(title)}`}
        target="_blank"
        rel="noopener"
        aria-label={blogUi.shareOn('X')}
      >
        <span className="ob-btn-label">X</span>
      </a>
      <button type="button" className="ob-btn ob-btn--ghost ob-btn--sm" onClick={copy} aria-live="polite">
        <span className="ob-btn-label">{copied ? blogUi.copied : blogUi.copy}</span>
      </button>
    </div>
  )
}

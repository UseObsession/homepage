import { useEffect, useState } from 'react'
import { blogUi } from '../../content/resources'

/* The article's contents on wide screens: its h2s, as jump links, sticky beside the text. The link of the section being
   read takes full ink (orientation), once the page's script runs; nothing else moves. */
export function Toc({ items }: { items: { id: string; text: string }[] }) {
  const [current, setCurrent] = useState<string | null>(null)
  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e)
    let raf = 0
    /* The last heading above the reading line (a third of the way down the window) is the section being read. */
    const sync = () => {
      raf = 0
      const line = window.innerHeight / 3
      const above = els.filter((el) => el.getBoundingClientRect().top < line)
      setCurrent(above.length ? above[above.length - 1].id : null)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sync)
    }
    sync()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [items])

  if (items.length < 2) return null
  return (
    <nav className="s-toc" aria-label={blogUi.toc}>
      <p className="s-toc__label">{blogUi.toc}</p>
      <ol className="s-toc__list">
        {items.map((i) => (
          <li key={i.id}>
            <a className="s-toc__link" href={`#${i.id}`} aria-current={current === i.id ? 'location' : undefined}>
              {i.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

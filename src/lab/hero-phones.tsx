import { useEffect, useState } from 'react'

/* Lab: true phone-width previews. Headless screenshots can't go under about 500px wide, so each page's hero is shown
   in a 390px iframe (a real 390px viewport for media queries and vw). Add ?rm to see reduced motion (finished runs). */
const PAGES = ['hero', 'hero-agencies', 'hero-founders', 'hero-sales', 'hero-marketing', 'hero-developers']

export default function HeroPhones() {
  const [q, setQ] = useState('')
  useEffect(() => {
    const raf = requestAnimationFrame(() => setQ(window.location.search))
    return () => cancelAnimationFrame(raf)
  }, [])
  const rm = /[?&]rm\b/.test(q) ? '?rm' : ''
  const set = new URLSearchParams(q).get('set')
  const list = set === '2' ? PAGES.slice(3) : PAGES.slice(0, 3)
  if (!q) return null
  return (
    <div style={{ display: 'flex', gap: 24, padding: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
      {list.map((p) => (
        <iframe key={p} title={p} src={`/lab/${p}${rm}`} width={390} height={3600} style={{ border: '1px solid #444', flex: 'none' }} />
      ))}
    </div>
  )
}

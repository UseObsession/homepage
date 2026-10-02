import { useEffect, useRef } from 'react'
import '../screens/kit.css'
import '../screens/base.css'

/* Every app screen: one 720 x 450 window of the Obsession product, drawn in HTML and CSS (src/screens, synced from
   the workspace by scripts/sync-assets.mjs). Its rest state is the finished scene; adding .play runs its story. */
const HTML = import.meta.glob('../screens/html/*.html', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
import.meta.glob('../screens/css/*.css', { eager: true })

export type ScreenName = string

export function hasScreen(name: ScreenName) {
  return `../screens/html/${name}.html` in HTML
}

function replay(el: Element | null) {
  if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
  el.classList.remove('play')
  void (el as HTMLElement).offsetWidth
  el.classList.add('play')
}

type Props = {
  name: ScreenName
  /* Change it to play the story again, e.g. when the tab that holds the screen is selected. */
  playKey?: string | number
  className?: string
}

export function AppScreen({ name, playKey, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const html = HTML[`../screens/html/${name}.html`]

  /* The story plays once, when the screen first comes into view. */
  useEffect(() => {
    const il = ref.current?.querySelector('.il')
    if (!il || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          replay(il)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.2 },
    )
    io.observe(il)
    return () => io.disconnect()
  }, [name])

  useEffect(() => {
    if (playKey !== undefined) replay(ref.current?.querySelector('.il') ?? null)
  }, [playKey])

  if (!html) return null
  return (
    <div
      ref={ref}
      className={'ilwrap' + (className ? ' ' + className : '')}
      onClick={() => replay(ref.current?.querySelector('.il') ?? null)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

import { useEffect, useRef } from 'react'

/* Every app screen: one 720 x 450 window of the Obsession product, drawn in HTML and CSS (src/screens, synced from
   the workspace by scripts/sync-assets.mjs). Its rest state is the finished scene; adding .play runs its story. */
const HTML = import.meta.glob('../screens/html/*.html', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
/* The shared kit and base first, then each screen's own CSS, so a screen's rules win over the base at equal
   specificity (its icon sizes, for one). Eager globs are hoisted above plain imports, so all 3 load as globs, in order. */
import.meta.glob('../screens/kit.css', { eager: true })
import.meta.glob('../screens/base.css', { eager: true })
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

/* Whose workspace a screen shows. The shared How screens (templates, kit, run) are drawn for an agency: "Your agency",
   a Clients list, your-agency.example links. 'company' shows the same screen as the reader's own company. Founders,
   Sales, Marketing and Developers pass 'company' on their How steps; Home and Agencies keep the default. */
export type Workspace = 'agency' | 'company'

function forWorkspace(html: string, workspace: Workspace) {
  if (workspace === 'agency') return html
  return html.replaceAll('Your agency', 'Your company').replaceAll('Clients', 'Lists').replaceAll('your-agency.example', 'your-company.example')
}

type Props = {
  name: ScreenName
  /* Change it to play the story again, e.g. when the tab that holds the screen is selected. */
  playKey?: string | number
  className?: string
  workspace?: Workspace
  /* The quiet tag under the screen. Every screen shows example data, so it reads "Example" (matching the console's
     "Example runs"); only the real September report captures on /sample-output pass note="". */
  note?: string
}

export function AppScreen({ name, playKey, className, workspace = 'agency', note = 'Example' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const raw = HTML[`../screens/html/${name}.html`]
  const html = raw && forWorkspace(raw, workspace)

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
    <>
      <div
        ref={ref}
        className={'ilwrap' + (className ? ' ' + className : '')}
        onClick={() => replay(ref.current?.querySelector('.il') ?? null)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      {note && <p className="s-screen-note">{note}</p>}
    </>
  )
}

import { useEffect, useState } from 'react'
import { page as agencies } from '../content/pages/agencies'
import { page as home } from '../content/pages/home'
import { Audiences } from '../components/sections/Audiences'
import { UseCases } from '../components/sections/UseCases'

/* Anything React reports while hydrating the prerendered HTML lands here and prints with the log. */
const errors: string[] = []
if (typeof window !== 'undefined') {
  const error = console.error.bind(console)
  console.error = (...a: unknown[]) => {
    errors.push(a.map(String).join(' ').slice(0, 300))
    error(...a)
  }
}

/* Lab: drives the tabs the way a reader would (a click, then the arrow keys and End) and prints what changed. */
function Driver() {
  const [log, setLog] = useState<string[]>([])
  useEffect(() => {
    const say = (s: string) => setLog((l) => [...l, s])
    const state = (sel: string) => {
      const tabs = [...document.querySelectorAll<HTMLElement>(`${sel} [role="tab"]`)]
      const on = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true')
      const panels = [...document.querySelectorAll<HTMLElement>(`${sel} [role="tabpanel"]`)]
      const shown = panels.findIndex((p) => !p.hidden)
      const ind = document.querySelector<HTMLElement>(`${sel} .ob-utabs__indicator`)
      const a = document.activeElement
      const focus = a?.getAttribute('role') === 'tab' ? a.textContent : a?.tagName
      return `selected ${on}, panel shown ${shown}, tabindex0 ${tabs.findIndex((t) => t.tabIndex === 0)}, bar x ${ind?.style.getPropertyValue('--ob-x')} w ${ind?.style.getPropertyValue('--ob-w')}, focus "${focus}"`
    }
    const key = (sel: string, k: string) => {
      const t = document.querySelector<HTMLElement>(`${sel} [role="tab"][aria-selected="true"]`)
      t?.focus()
      t?.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true }))
    }
    const steps: [number, () => void][] = [
      [300, () => say('console errors: ' + (errors.length ? errors.join(' | ') : 'none'))],
      [310, () => say('start uses: ' + state('#uses'))],
      [600, () => document.querySelectorAll<HTMLElement>('#uses [role="tab"]')[2].click()],
      [660, () => {
        const ind = document.querySelector<HTMLElement>('#uses .ob-utabs__indicator')
        say(`sliding: ${ind?.getAnimations().map((a) => (a as CSSTransition).transitionProperty).join(' ')}, instant ${ind?.classList.contains('is-instant')}`)
      }],
      [900, () => say('click 2: ' + state('#uses'))],
      [1200, () => key('#uses', 'ArrowRight')],
      [1500, () => say('ArrowRight: ' + state('#uses'))],
      [1800, () => key('#uses', 'End')],
      [2100, () => say('End: ' + state('#uses'))],
      [2400, () => key('#uses', 'ArrowRight')],
      [2700, () => say('ArrowRight wraps: ' + state('#uses'))],
      [3000, () => document.querySelectorAll<HTMLElement>('#for [role="tab"]')[4].click()],
      [3300, () => say('readers click 4: ' + state('#for'))],
      [3600, () => key('#for', 'Home')],
      [3900, () => say('readers Home: ' + state('#for'))],
      [4200, () => document.querySelectorAll<HTMLElement>('#for [role="tab"]')[3].click()],
      [4500, () => say('console errors at the end: ' + (errors.length ? errors.join(' | ') : 'none'))],
    ]
    const ids = steps.map(([t, f]) => window.setTimeout(f, t + 2500))
    return () => ids.forEach(clearTimeout)
  }, [])
  return (
    <pre className="s-wrap" style={{ font: '12px/1.6 var(--ob-font-mono)', color: 'var(--ob-text-2)', whiteSpace: 'pre-wrap', paddingBlock: 24 }}>
      {log.join('\n')}
    </pre>
  )
}

export default function UsesClickLab() {
  return (
    <>
      <Driver />
      <UseCases uses={agencies.uses} workspace="agency" />
      {home.audiences && <Audiences audiences={home.audiences} />}
    </>
  )
}

import { useSyncExternalStore } from 'react'
import { navPhase, subscribeNav } from '../lib/navProgress'
import './NavProgress.css'

/* A thin bar across the top of the window while the next page loads (lib/navProgress.ts): it runs most of the way while
   the page's code arrives, sweeps to the end when the page lands, and fades. Decoration only: the page's own focus and
   title tell a screen reader the move happened (App.tsx, ScrollManager). */
export function NavProgress() {
  const phase = useSyncExternalStore(subscribeNav, navPhase, () => 'idle' as const)
  return (
    <div className="s-navprogress" data-phase={phase} aria-hidden="true">
      <i />
    </div>
  )
}

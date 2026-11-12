import { useId } from 'react'
import type { Explorer, SampleKinds } from '../../content/types'
import { HeroExplorer } from '../v5/HeroExplorer'
import { SectionHead } from './DevSection'
import './EveryKind.css'

/* /sample-output's kinds section (12 Nov, James): Home's console, the same component and the same data, with tabs on
   top. Each tab picks a company, who asks, a wall and the kinds, and opens Evidence, so it shows that kind the way it
   arrived; the reader can change any chip, switch to Facts or ask in Insights. Under it, where the data arrives. */
export function EveryKind({ kinds, ex, id }: { kinds: SampleKinds; ex: Explorer; id?: string }) {
  const headingId = useId()
  return (
    <section id={id} className="s-section s-ek" aria-labelledby={headingId}>
      <div className="s-wrap">
        <SectionHead id={headingId} heading={kinds.heading} line={kinds.line} />
        <div className="s-ek-x">
          <HeroExplorer ex={ex} tabs={kinds.tabs} tabsLabel={kinds.tabsLabel} start="evidence" autoplay={false} anchors={false} />
        </div>
        <div className="s-ek-arrives">
          <span className="s-ek-lab">{kinds.arrivesLabel}</span>
          {kinds.arrives.map((a) => (
            <span className="s-ek-pill" key={a}>
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

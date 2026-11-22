import { useId } from 'react'
import type { PersonaBuild as Build } from '../../content/types'
import { CodeWindow, SectionCta } from '../sections/DevSection'
import './blueprint.css'
import './PersonaBuild.css'

/* For developers (#build): the claim, its line and the link to /developers on the left, staying in view; the code in the
   site's code well (sections/DevSection CodeWindow) on the right, its file name under it. The code is the point, so it
   takes 7 of 12 columns. Where its events go is How it works (HomeHowItWorks, #delivery inside #how). */
export function PersonaBuild({ build, id, tone }: { build: Build; id?: string; tone?: 'alt' }) {
  const hid = useId()
  return (
    <section className="s-section s-pb" id={id} data-tone={tone} aria-labelledby={hid}>
      <div className="s-wrap s-pb-grid">
        <div className="s-pb-words">
          <h2 className="s-bp-h" id={hid}>
            {build.heading}
          </h2>
          <p className="s-bp-line">{build.line}</p>
          <SectionCta cta={build.cta} />
        </div>
        <div className="s-pb-code">
          <CodeWindow code={build.code} label={build.codeLabel} />
          <p className="s-bp-tag s-pb-tag">{build.codeLabel}</p>
        </div>
      </div>
    </section>
  )
}

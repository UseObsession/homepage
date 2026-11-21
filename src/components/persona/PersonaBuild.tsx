import { useId } from 'react'
import type { PersonaBuild as Build } from '../../content/types'
import { CodeWindow, SectionHead } from '../sections/DevSection'
import './blueprint.css'
import './PersonaBuild.css'

/* For developers (#build): the shared section head (the claim, its line, the link to /developers), then the code in the
   site's code well (sections/DevSection CodeWindow), its file name under it, beside where events go. The code is the
   point, so it takes 7 of 12 columns. */
export function PersonaBuild({ build, id }: { build: Build; id?: string }) {
  const hid = useId()
  return (
    <section className="s-section s-bp-ruled s-pb" id={id} aria-labelledby={hid}>
      <div className="s-wrap">
        <SectionHead id={hid} heading={build.heading} line={build.line} cta={build.cta} />
        <div className="s-pb-body">
          <div className="s-pb-code">
            <CodeWindow code={build.code} label={build.codeLabel} />
            <p className="s-bp-tag s-pb-tag">{build.codeLabel}</p>
          </div>
          <ul className="s-pb-outs">
            {build.outputs.map((o) => (
              <li className="s-pb-out" key={o.title}>
                <h3 className="s-pb-out-title">{o.title}</h3>
                <p className="s-pb-out-line">{o.line}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

import { page as developers } from '../content/pages/developers'
import { sample } from '../content/sample'
import { DevSection } from '../components/sections/DevSection'
import { Faq, faqJsonLd } from '../components/sections/Faq'
import { Outputs } from '../components/sections/Outputs'

/* Lab: the same sections as Sample output and Developers use them, plus the FAQPage JSON-LD the infra will inject. */
export default function ProofPagesLab() {
  return (
    <div className="s-page">
      <Outputs heading={sample.formats.heading} line={sample.formats.line} initial={sample.formats.start} />
      <DevSection developers={developers.developers!} />
      <Faq faq={developers.faq} open={[]} />
      <section className="s-section">
        <div className="s-wrap">
          <pre style={{ margin: 0, font: 'var(--ob-type-code)', fontSize: 12, color: 'var(--ob-text-2)', whiteSpace: 'pre-wrap' }}>
            {JSON.stringify(faqJsonLd(developers.faq), null, 2).slice(0, 700)}
          </pre>
        </div>
      </section>
    </div>
  )
}

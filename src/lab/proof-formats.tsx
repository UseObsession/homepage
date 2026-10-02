import { useEffect } from 'react'
import { page as home } from '../content/pages/home'
import { outputFormats } from '../content/sample'
import { OutputViewer } from '../components/sections/Outputs'

/* Lab: the output viewer opened on each format, and the PDF spread, so 1 screenshot shows every state. */
export default function ProofFormatsLab() {
  useEffect(() => {
    document.querySelectorAll<HTMLButtonElement>('[data-lab-spread] .s-ov-pdf__toggle').forEach((b) => b.click())
  }, [])
  return (
    <div className="s-page">
      <section className="s-section">
        <div className="s-wrap" style={{ display: 'grid', gap: 96 }}>
          <div data-lab-spread="">
            <OutputViewer lines={home.outputs!.formats} initial="pdf" />
          </div>
          {outputFormats.map((f) => (
            <OutputViewer key={f.id} lines={home.outputs!.formats} initial={f.id} />
          ))}
        </div>
      </section>
    </div>
  )
}

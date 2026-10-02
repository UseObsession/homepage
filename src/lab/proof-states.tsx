import { useEffect } from 'react'
import { page as home } from '../content/pages/home'
import { CodeWindow } from '../components/sections/DevSection'
import { OutputViewer } from '../components/sections/Outputs'

/* Lab: focus and feedback states. The first copy button is clicked (Copied), the second takes keyboard focus (its
   tooltip and ring); the third tab of the viewer is picked, so its panel shows the entrance. */
export default function ProofStatesLab() {
  useEffect(() => {
    const copies = document.querySelectorAll<HTMLButtonElement>('.s-code__copy .ob-btn')
    copies[0]?.click()
    document.querySelectorAll<HTMLButtonElement>('.s-ov__tabs .ob-ptab')[2]?.click()
    copies[1]?.focus()
  }, [])
  return (
    <div className="s-page">
      <style>{'.lab-tip .s-code__tip[hidden]{display:flex} .lab-tip .s-code__copy .ob-btn{outline:2px solid var(--ob-focus);outline-offset:2px}'}</style>
      <section className="s-section">
        <div className="s-wrap" style={{ display: 'grid', gap: 48 }}>
          <CodeWindow code={home.developers!.code} />
          <div className="lab-tip">
          <CodeWindow code={'import { Obsession } from \'@useobsession/sdk\'\n\nconst obs = new Obsession({ apiKey: process.env.OBSESSION_KEY })'} />
          </div>
          <OutputViewer lines={home.outputs!.formats} initial="pdf" />
        </div>
      </section>
    </div>
  )
}

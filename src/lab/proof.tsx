import { page as home } from '../content/pages/home'
import { DevSection } from '../components/sections/DevSection'
import { Faq } from '../components/sections/Faq'
import { Outputs } from '../components/sections/Outputs'

/* Lab: Home's proof, developer and question sections, in page order, with the real content (removed before shipping). */
export default function ProofLab() {
  return (
    <div className="s-page">
      <Outputs {...home.outputs!} initial="pdf" />
      <DevSection developers={home.developers!} />
      <Faq faq={home.faq} />
    </div>
  )
}

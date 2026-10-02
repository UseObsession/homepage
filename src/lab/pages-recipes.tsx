import { useEffect } from 'react'
import { SampleOutput } from '../pages/SampleOutput'

/* Lab: the Sample output page with its disclosures open (the first report page and both drafted reminders), to see
   their open states. Removed before shipping. */
function Opened() {
  useEffect(() => {
    const t = window.setTimeout(() => {
      document.querySelector<HTMLButtonElement>('.s-so-pages__thumb')?.click()
      document.querySelectorAll<HTMLButtonElement>('.s-so-draft__btn').forEach((b) => b.click())
    }, 300)
    return () => window.clearTimeout(t)
  }, [])
  return <SampleOutput />
}

export default function PagesRecipesLab() {
  return <Opened />
}

import { page as agencies } from '../content/pages/agencies'
import { page as developers } from '../content/pages/developers'
import { page as founders } from '../content/pages/founders'
import { page as home } from '../content/pages/home'
import { page as marketing } from '../content/pages/marketing'
import { page as sales } from '../content/pages/sales'
import { Audiences } from '../components/sections/Audiences'
import { UseCases } from '../components/sections/UseCases'

/* Lab: every use case panel and every reader panel at once, to check each one's words against its screen. */
export default function UsesAllLab() {
  return (
    <div className="s-lab-all">
      <style>{`.s-lab-all [role="tabpanel"][hidden]{visibility:visible;grid-area:auto;margin-top:64px}`}</style>
      <UseCases uses={agencies.uses} workspace="agency" id="a" />
      <UseCases uses={founders.uses} id="f" className="s-section--rule" />
      <UseCases uses={sales.uses} id="s" className="s-section--rule" />
      <UseCases uses={marketing.uses} id="m" className="s-section--rule" />
      <UseCases uses={developers.uses} id="d" className="s-section--rule" />
      {home.audiences && <Audiences audiences={home.audiences} className="s-section--rule" />}
    </div>
  )
}

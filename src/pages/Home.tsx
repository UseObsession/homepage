import { HomePieces } from '../components/persona/HomePieces'
import { HomeUseCase } from '../components/persona/HomeUseCase'
import { PersonaAnatomy } from '../components/persona/PersonaAnatomy'
import { PersonaBuild } from '../components/persona/PersonaBuild'
import { PersonaContrasts } from '../components/persona/PersonaContrast'
import { PersonaFleet } from '../components/persona/PersonaFleet'
import { PersonaHero } from '../components/persona/PersonaHero'
import { PersonaRecipes } from '../components/persona/PersonaRecipes'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { AgentLife } from '../components/v5/AgentLife'
import { page } from '../content/pages/home'

/* Home (/), composed from content/pages/home.ts in the order its comment gives (21 Nov, the pieces rewrite): the hero;
   the 6 pieces, each linking to its page (#pieces); the pieces under one identity, the persona (#personas); 2 claims in
   the form "X, not Y"; from the first call to months of messages (#how, v5/AgentLife); recipes for teams who don't
   write code (#recipes); what's built in (#fleet); for developers (#build); the web behind the login, 1 card to its use
   case page (#behind-the-login); questions (#questions); the early access form (#join). No pricing section and no
   pricing link: prices live on /pricing and the piece pages. The nav links to these ids, so they stay. */
export function Home() {
  return (
    <>
      {page.personaStart && <PersonaHero hero={page.hero} start={page.personaStart} />}
      {page.homePieces && <HomePieces pieces={page.homePieces} id="pieces" />}
      {page.personaAnatomy && <PersonaAnatomy anatomy={page.personaAnatomy} id="personas" />}
      {page.personaContrasts && <PersonaContrasts items={page.personaContrasts} />}
      {page.life && <AgentLife life={page.life} id="how" />}
      {page.personaRecipes && <PersonaRecipes recipes={page.personaRecipes} id="recipes" />}
      {page.personaFleet && <PersonaFleet fleet={page.personaFleet} id="fleet" />}
      {page.personaBuild && <PersonaBuild build={page.personaBuild} id="build" />}
      {page.homeUseCase && <HomeUseCase useCase={page.homeUseCase} id="behind-the-login" />}
      <Faq faq={page.faq} id="questions" className="s-faq--ruled" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}

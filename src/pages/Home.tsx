import { HomeHowItWorks } from '../components/persona/HomeHowItWorks'
import { HomePieces } from '../components/persona/HomePieces'
import { PersonaAnatomy } from '../components/persona/PersonaAnatomy'
import { PersonaBuild } from '../components/persona/PersonaBuild'
import { PersonaContrasts } from '../components/persona/PersonaContrast'
import { PersonaHero } from '../components/persona/PersonaHero'
import { PersonaRecipes } from '../components/persona/PersonaRecipes'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { page } from '../content/pages/home'

/* Home (/), composed from content/pages/home.ts in the order its comment gives (21 Nov, the pieces rewrite): the hero;
   the 6 pieces under "One API, not five vendors.", each linking to its page (#pieces); the pieces under one identity,
   the persona (#personas); 1 claim in the form "X, not Y" (wakes in milliseconds); how it works (#how, persona/HomeHowItWorks): set up once, the loop through your event log as 1
   picture, then the 6 channels (#delivery, inside it); blueprints, ours or your own job, with every result in the event
   log, and the web behind the login as 1 tile to its use case page (#recipes); for developers, the code (#build); 7
   questions (#questions); the early access form (#join). No pricing section and no pricing link: prices live on
   /pricing and the piece pages. The nav links to these ids, so they stay. */
export function Home() {
  return (
    <>
      {page.personaStart && <PersonaHero hero={page.hero} start={page.personaStart} />}
      {page.homePieces && <HomePieces pieces={page.homePieces} id="pieces" />}
      {page.personaAnatomy && <PersonaAnatomy anatomy={page.personaAnatomy} id="personas" />}
      {page.personaContrasts && <PersonaContrasts items={page.personaContrasts} />}
      {page.homeHow && <HomeHowItWorks how={page.homeHow} id="how" />}
      {page.personaRecipes && <PersonaRecipes recipes={page.personaRecipes} id="recipes" />}
      {page.personaBuild && <PersonaBuild build={page.personaBuild} id="build" />}
      <Faq faq={page.faq} id="questions" className="s-faq--ruled" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}

import { HomeFit } from '../components/persona/HomeFit'
import { HomeHowItWorks } from '../components/persona/HomeHowItWorks'
import { HomePieces } from '../components/persona/HomePieces'
import { PersonaAnatomy } from '../components/persona/PersonaAnatomy'
import { PersonaBuild } from '../components/persona/PersonaBuild'
import { PersonaHero } from '../components/persona/PersonaHero'
import { PersonaRecipes } from '../components/persona/PersonaRecipes'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { page } from '../content/pages/home'

/* Home (/), composed from content/pages/home.ts in the order its comment gives (21 Nov, the pieces rewrite; 22 Nov, the
   shorter Home): the hero; how it fits (#fit, 22 Nov 2026: pieces, persona, blueprints, kits over the event log); the 6 pieces under "One API, not five vendors.", each linking to its page (#pieces); the
   pieces under one identity, the persona (#personas); how it works (#how, persona/HomeHowItWorks): set up once, the loop
   through your event log as 1 picture, then the link to every channel's code; blueprints as 5 tiles, the web behind
   the login 1 of them (#recipes); for developers, the code (#build); 5 questions (#questions); the early access form
   (#join). No pricing section and no pricing link: prices live on /pricing and the piece pages. The nav links to these
   ids, so they stay. */
export function Home() {
  return (
    <>
      {page.personaStart && <PersonaHero hero={page.hero} start={page.personaStart} />}
      {page.homeFit && <HomeFit fit={page.homeFit} id="fit" />}
      {page.homePieces && <HomePieces pieces={page.homePieces} id="pieces" />}
      {page.personaAnatomy && <PersonaAnatomy anatomy={page.personaAnatomy} id="personas" />}
      {page.homeHow && <HomeHowItWorks how={page.homeHow} id="how" />}
      {page.personaRecipes && <PersonaRecipes recipes={page.personaRecipes} id="recipes" />}
      {page.personaBuild && <PersonaBuild build={page.personaBuild} id="build" />}
      <Faq faq={page.faq} id="questions" className="s-faq--ruled" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}

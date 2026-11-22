import { HomeBlueprints } from '../components/persona/HomeBlueprints'
import { HomeHowItWorks } from '../components/persona/HomeHowItWorks'
import { HomePieces } from '../components/persona/HomePieces'
import { HomeProblem } from '../components/persona/HomeProblem'
import { HomeTeams } from '../components/persona/HomeTeams'
import { PersonaAnatomy } from '../components/persona/PersonaAnatomy'
import { PersonaBuild } from '../components/persona/PersonaBuild'
import { PersonaHero } from '../components/persona/PersonaHero'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { page } from '../content/pages/home'

/* Home (/), composed from content/pages/home.ts (21 Nov, the pieces rewrite; 22 Nov, the shorter Home and the call):
   the hero; the problem and answer (#act): an agent can think but can't act until Obsession equips it, or runs the job as
   a blueprint; the 6 pieces under
   "One API, not five vendors.", each linking to its page (#pieces); the pieces under one identity, the persona
   (#personas); the six types of blueprints, each with its first blueprints (#blueprints); for teams that don't write code,
   one blueprint's three steps by team and what every blueprint comes with (#teams, 23 Nov); how it works (#how): the loop
   through your event log, one example for each type of blueprint at real volume; for developers, the code (#build); questions (#questions); the form (#join). No pricing
   section: prices live on /pricing and the piece pages.
   The rhythm, after the teams page (Seun, 23 Nov 2026: "feels aligned not scattered ... not too squared ... like the
   teams page"): the hero is centred, every section below starts on one left edge, and the sections alternate grounds
   (pieces, blueprints, how it works and questions on the alt ground) instead of ruled lines with + marks. */
export function Home() {
  return (
    <>
      {page.personaStart && <PersonaHero hero={page.hero} start={page.personaStart} />}
      {page.homeProblem && <HomeProblem problem={page.homeProblem} id="act" />}
      {page.homePieces && <HomePieces pieces={page.homePieces} id="pieces" tone="alt" />}
      {page.personaAnatomy && <PersonaAnatomy anatomy={page.personaAnatomy} id="personas" />}
      {page.homeBlueprints && <HomeBlueprints words={page.homeBlueprints} id="blueprints" tone="alt" />}
      {page.homeTeams && <HomeTeams words={page.homeTeams} id="teams" />}
      {page.homeHow && <HomeHowItWorks how={page.homeHow} id="how" tone="alt" />}
      {page.personaBuild && <PersonaBuild build={page.personaBuild} id="build" />}
      <Faq faq={page.faq} id="questions" tone="alt" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}

import { drawnFor } from '../components/workspace'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Hero } from '../components/sections/Hero'
import { Flow } from '../components/study/Flow'
import { Phases } from '../components/study/Phases'
import { Fit, More, Problem, Split, StudyProof, Uses } from '../components/study/Study'
import { recipeBySlug } from '../content/registry'
import type { StudyLink, UseCaseStudy } from '../content/types'
import './StoryPage.css'

/* A worked example (/use-cases/SLUG), composed from content/usecases/SLUG.ts on the site's sections, in the story's
   order (docs/REBUILD.md 2, and types.ts "Use case studies"):
   the centred hero (the Early access pill, the claim, the sub, the waitlist, who the example is
   about, and the way from the reader's list to their own tools) > how it runs, phase by phase, each beside its
   screen > the problem > how it fits their tools, or who does what > what they do with it > the proof on its screen,
   and the first email written from it > the recipe and the 1 real run, with the small print > questions > the
   waitlist (#join). Each page's screens are its own (claycols, brandwatch, proofmail; members, memberfeed), drawn in
   the workspace they were made for. */
/* A link to a recipe takes the recipe's own name, so it never drifts from the recipe's page and the nav. */
const named = (l: StudyLink): StudyLink => {
  const r = l.cta.to.startsWith('/recipes/') ? recipeBySlug[l.cta.to.slice('/recipes/'.length)] : undefined
  return r ? { ...l, title: r.name } : l
}

export function UseCase({ study }: { study: UseCaseStudy }) {
  const h = study.hero
  const screens = [...study.how.steps.map((s) => s.screen), study.proof.screen].filter((s): s is string => !!s)
  const workspace = drawnFor(screens[0] ?? '')
  return (
    <>
      <Hero
        hero={{ pill: h.pill ?? '', headline: h.headline, sub: h.sub, capture: h.capture }}
        workspace={workspace}
        aside={
          <div className="s-st-who">
            <ul className="s-st-who__chips">
              {h.example.chips.map((c) => (
                <li key={c} className="ob-tag">
                  {c}
                </li>
              ))}
            </ul>
            <p className="s-st-who__note">{h.example.note}</p>
          </div>
        }
        object={h.flow && h.flow.length > 0 ? <Flow nodes={h.flow} label={study.name} /> : undefined}
      />
      <Phases how={study.how} workspace={workspace} id="how" />
      <Problem problem={study.problem} id="gap" />
      {study.fit && <Fit fit={study.fit} id="fit" />}
      {study.split && <Split split={study.split} id="split" />}
      {study.outputs && <Uses outputs={study.outputs} id="uses" />}
      <StudyProof proof={study.proof} workspace={workspace} id="proof" />
      <More links={[named(study.more.recipe), study.more.sample]} fine={study.fine} label={`${named(study.more.recipe).title}, ${study.more.sample.title}`} />
      <Faq faq={study.faq} id="questions" />
      <FinalCta final={study.final} id="join" />
    </>
  )
}

import { drawnFor } from '../components/workspace'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Hero } from '../components/sections/Hero'
import { Outcomes } from '../components/sections/Outcomes'
import { Proof } from '../components/sections/Proof'
import { Flow } from '../components/study/Flow'
import { Found } from '../components/study/Found'
import { Phases } from '../components/study/Phases'
import { Fit, More, Problem, Recipes, Split, StudyProof, Uses } from '../components/study/Study'
import { catalog } from '../content/catalog'
import { studyPartners } from '../content/partners'
import type { StudyLink, UseCaseStudy } from '../content/types'
import { studyWords } from '../content/words'
import './StoryPage.css'

/* A worked example (/use-cases/SLUG), composed from content/usecases/SLUG.ts on the site's sections, in the story's
   order (docs/REBUILD.md 2, and types.ts "Use case studies"):
   the centred hero (the Early access pill, the claim, the sub, the waitlist, who the example is
   about, and the way from the reader's list to their own tools) > how it runs, phase by phase, each beside its
   screen > the problem > how it fits their tools, or who does what > what they do with it > the proof on its screen,
   and the first email written from it > the recipe and the 1 real run, with the small print > questions > the
   waitlist (#join). An example about the real report itself (mystery shopping for ecommerce agencies) shows the 1 real
   run in its own section after its proof (`real`), its hours back with their models (`outcomes`) and the other recipes
   that fit the reader's year (`recipes`), and leaves the 2 link rows out (`more`). Each page's screens are its own (claycols, brandwatch, proofmail; members, memberfeed), drawn in
   the workspace they were made for.
   Cut to 6 beats (Seun, 7 Oct), mystery shopping for ecommerce agencies runs: hero > the fix on its screen (`fix`, on
   the alternate ground) > the 3 uses > what real audits found (`found`, the page's paper break, closed by the small
   print) > questions > start. Every beat it leaves out (how, problem, proof) draws nothing, and the workspace comes from the
   first screen the page does show. An example built on 1 partner (content/partners.ts) sets that tool's mark where the
   hero's flow names it, and opens the beat where the facts come back into that tool (how it fits) with it. */
/* A link to a recipe takes the recipe's own name, so it never drifts from the recipe's page and the nav. */
const named = (l: StudyLink): StudyLink => {
  const r = l.cta.to.startsWith('/recipes/') ? catalog.recipes.find((x) => x.slug === l.cta.to.slice('/recipes/'.length)) : undefined
  return r ? { ...l, title: r.name } : l
}

/* /use-cases/SLUG: the worked example at that address, its words loaded with the page. */
export function UseCaseAt({ path }: { path: string }) {
  return <UseCase study={studyWords(path).read()} />
}

export function UseCase({ study }: { study: UseCaseStudy }) {
  const h = study.hero
  const screens = [...(study.how?.steps.map((s) => s.screen) ?? []), study.fix?.screen, study.proof?.screen].filter((s): s is string => !!s)
  const workspace = drawnFor(screens[0] ?? '')
  const partner = studyPartners[study.meta.path]
  const links = study.more ? [named(study.more.recipe), study.more.sample] : []
  /* With the other recipes and no link rows, the small print closes the recipes; with what real audits found and no
     link rows, it closes the findings, right under the examples it explains. */
  const fineAfterRecipes = !!study.recipes && links.length === 0
  const fineAfterFound = !fineAfterRecipes && !!study.found && links.length === 0
  return (
    <>
      <Hero
        hero={{ pill: h.pill ?? '', headline: h.headline, sub: h.sub, capture: h.capture, secondary: h.secondary }}
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
            {h.example.note && <p className="s-st-who__note">{h.example.note}</p>}
          </div>
        }
        object={h.flow && h.flow.length > 0 ? <Flow nodes={h.flow} label={study.name} partner={partner} /> : undefined}
      />
      {study.how && <Phases how={study.how} workspace={workspace} id="how" />}
      {study.fix && <Proof proof={study.fix} id="fix" workspace={workspace} tone="alt" />}
      {study.problem && <Problem problem={study.problem} id="gap" />}
      {study.fit && <Fit fit={study.fit} partner={partner} id="fit" />}
      {study.split && <Split split={study.split} id="split" />}
      {study.outputs && <Uses outputs={study.outputs} id="uses" />}
      {study.proof && <StudyProof proof={study.proof} workspace={workspace} id="proof" />}
      {study.found && <Found found={study.found} id="found" fine={fineAfterFound ? study.fine : undefined} />}
      {study.real && <Proof proof={study.real} id="real" workspace={workspace} />}
      {study.outcomes && <Outcomes outcomes={study.outcomes} id="outcomes" />}
      {study.recipes && <Recipes recipes={study.recipes} id="recipes" fine={fineAfterRecipes ? study.fine : undefined} />}
      {!fineAfterRecipes && !fineAfterFound && <More links={links} fine={study.fine} label={links.map((l) => l.title).join(', ') || 'About this example'} />}
      <Faq faq={study.faq} id="questions" />
      <FinalCta final={study.final} id="join" />
    </>
  )
}

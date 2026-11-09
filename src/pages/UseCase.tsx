import { drawnFor } from '../components/workspace'
import { LinkGroups } from '../components/sections/LinkGroups'
import { connectionsFor } from '../lib/connections'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { Hero } from '../components/sections/Hero'
import { Outcomes } from '../components/sections/Outcomes'
import { Proof } from '../components/sections/Proof'
import { ReportStack } from '../components/study/ReportStack'
import { Flow } from '../components/study/Flow'
import { Found } from '../components/study/Found'
import { Phases } from '../components/study/Phases'
import { Fit, More, Problem, Recipes, Split, StudyProof, Uses } from '../components/study/Study'
import { catalog } from '../content/catalog'
import { studyPartners } from '../content/partners'
import type { StudyLink, UseCaseStudy } from '../content/types'
import { studyWords } from '../content/words'
import './StoryPage.css'

/* A use case (/use-cases/SLUG), composed from content/usecases/SLUG.ts on the site's sections: the buyer's job and the
   data behind the login that does it (hero) > how it runs (phases, each beside its screen) > the problem > what they
   do with it > the 1 real run (Brand G) and the small print > questions > early access (#join). Optional beats
   (fix, fit, split, found, real, outcomes, recipes) draw only when the content file has them; a study built on 1
   partner (content/partners.ts) sets that tool's mark in the hero's flow and in how it fits. */
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
          h.example.chips.length > 0 && (
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
          )
        }
        object={
          h.report ? (
            <ReportStack report={h.report} />
          ) : h.flow && h.flow.length > 0 ? (
            <Flow nodes={h.flow} label={study.name} partner={partner} />
          ) : undefined
        }
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
      <LinkGroups groups={connectionsFor(study.meta.path, 'useCase')} />
      <Faq faq={study.faq} id="questions" />
      <FinalCta final={study.final} id="join" />
    </>
  )
}

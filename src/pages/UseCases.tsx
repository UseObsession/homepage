import { FinalCta } from '../components/sections/FinalCta'
import { IndexHero } from '../components/sections/IndexHero'
import { LinkGroups } from '../components/sections/LinkGroups'
import { catalog } from '../content/catalog'
import { useCasesPage as page } from '../content/resources'

/* /use-cases: every worked example (content/usecases), what 1 kind of team looks up behind the login, as link rows
   under 1 name, then the 2 guides that set out every use case; then early access (#join). */
export function UseCases() {
  return (
    <>
      <IndexHero headline={page.hero.headline} sub={page.hero.sub} />
      <LinkGroups
        className="s-lg--then-final"
        single
        groups={[
          { ...page.group, rows: catalog.studies.map((s) => ({ label: s.name, to: s.path, line: s.line })) },
          page.guides,
        ]}
      />
      <FinalCta final={page.final} id="join" />
    </>
  )
}

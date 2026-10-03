import { FinalCta } from '../components/sections/FinalCta'
import { IndexHero } from '../components/sections/IndexHero'
import { LinkGroups } from '../components/sections/LinkGroups'
import { catalog } from '../content/catalog'
import { useCasesPage as page } from '../content/resources'

/* /use-cases: every worked example (content/usecases), as link rows under 1 name; then the waitlist (#join). */
export function UseCases() {
  return (
    <>
      <IndexHero headline={page.hero.headline} sub={page.hero.sub} />
      <LinkGroups
        className="s-lg--then-final"
        single
        groups={[{ ...page.group, rows: catalog.studies.map((s) => ({ label: s.name, to: s.path, line: s.line })) }]}
      />
      <FinalCta final={page.final} id="join" />
    </>
  )
}

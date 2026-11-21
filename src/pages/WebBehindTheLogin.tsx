import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { LinkGroups } from '../components/sections/LinkGroups'
import { AgentLife } from '../components/v5/AgentLife'
import { CardGrid } from '../components/v5/CardGrid'
import { Finding } from '../components/v5/Finding'
import { Hero5 } from '../components/v5/Hero5'
import { QuestionConsole } from '../components/v5/InsightRun'
import { RunReports } from '../components/v5/RunReports'
import { page, sections } from '../content/pages/web-behind-the-login'
import { connectionsFor } from '../lib/connections'
import './StoryPage.css'

/* /use-cases/web-behind-the-login (21 Nov 2026), the old Home as a use case, composed from
   content/pages/web-behind-the-login.ts in its comment's order: the hero with the explorer as its object; the 6 kinds of
   data behind the login (#data); the 1 real run (#found); a sign up in minutes, then months of emails (#how); the 6
   pieces it is built from, each linked to its page (#pieces); where the data goes (#formats); questions (#questions);
   the early access form (#join). Every section is a component the old Home used; nothing here holds words. */
export function WebBehindTheLogin() {
  return (
    <>
      <Hero5 hero={page.hero} visual={<QuestionConsole ex={sections.explorer} />} center />
      <CardGrid grid={sections.data} id="data" />
      <Finding finding={sections.found} id="found" />
      <AgentLife life={sections.how} id="how" />
      <CardGrid grid={sections.pieces} id="pieces" />
      <RunReports runs={sections.formats} id="formats" />
      <Faq faq={page.faq} id="questions" />
      <LinkGroups groups={connectionsFor(page.meta.path, 'useCase')} className="s-lg--then-final" />
      <FinalCta final={page.final} id="join" />
    </>
  )
}

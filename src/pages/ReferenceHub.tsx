import { Art } from '../components/blog/Art'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { LinkGroups, type LinkGroupRows } from '../components/sections/LinkGroups'
import { Hero5 } from '../components/v5/Hero5'
import { alternativesHub, glossaryHub, refUi, type ReferenceHub } from '../content/reference'
import { rowsOf } from '../lib/refLinks'
import '../components/v5/Hero5.css'
import './Blog.css'
import './StoryPage.css'

/* The 2 reference hubs, on the reader pages' hero (the words and early access on the left, the hub's 1 picture drawn
   in code on the right) and the Recipes index's link rows: /alternatives lists every alternatives page and then the
   comparisons; /glossary lists every term A to Z, each with its 1 line definition. Both lists come from the pages'
   own files (content/catalog.ts), so a new page joins its hub the day it ships. */

function Hub({ hub, groups }: { hub: ReferenceHub; groups: LinkGroupRows[] }) {
  return (
    <>
      <Hero5 hero={hub.hero} reader={hub.reader} visual={<Art art={hub.art} />} />
      <LinkGroups groups={groups} className={hub.faq ? '' : 's-lg--then-final'} />
      {hub.faq && <Faq faq={hub.faq} id="questions" />}
      <FinalCta final={hub.final} id="join" />
    </>
  )
}

/* /alternatives */
export function AlternativesHub() {
  const l = refUi.compareList
  return (
    <Hub
      hub={alternativesHub}
      groups={[
        { id: 'alternatives', name: l.alternatives.name, line: l.alternatives.line, rows: rowsOf('alternatives') },
        { id: 'one-by-one', name: l.vs.name, line: l.vs.line, rows: [...rowsOf('compare'), { label: l.glossary.label, to: l.glossary.to, line: l.glossary.line }] },
      ]}
    />
  )
}

/* /glossary: every term under its first letter. */
export function GlossaryHub() {
  const byLetter = new Map<string, ReturnType<typeof rowsOf>>()
  for (const row of [...rowsOf('term')].sort((a, b) => a.label.localeCompare(b.label))) {
    const letter = row.label.replace(/^the /i, '').charAt(0).toUpperCase()
    byLetter.set(letter, [...(byLetter.get(letter) ?? []), row])
  }
  const groups: LinkGroupRows[] = [...byLetter.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, rows]) => ({ id: `letter-${letter.toLowerCase()}`, name: letter, rows }))
  return <Hub hub={glossaryHub} groups={groups} />
}

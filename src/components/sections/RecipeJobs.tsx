import { Fragment, useId } from 'react'
import { Link } from 'react-router-dom'
import { catalog } from '../../content/catalog'
import { recipeJobs } from '../../content/nav'
import type { Cta } from '../../content/types'
import './RecipeJobs.css'

/* Home's recipes (content/pages/home.ts recipeJobs), right after the gap: what a recipe is in 1 claim and 1 line, then
   the 6 jobs every recipe does. The jobs are the Recipes menu's own list (content/nav.ts recipeJobs: each job's name,
   its promise in 1 line, where it leads, and its 2 examples, named by their own files), so the menu and this block
   never drift; the page owns only the claim, the line and the link to every recipe.
   1 visual idea: the 6 jobs on a grid of hairlines, 3 by 2, each hanging from its own rule as "How our agents behave"
   does under the real run (the first row opens on the ink rule, styles/tones.css G2). The whole cell is 1 link to the
   job's part of /recipes (Check your AI agents: /verify): the name's link stretches over the cell, and the 2 examples
   sit above it as quiet links of their own. Hover and keyboard focus draw the cell's rule in full ink, underline its
   name and wake its arrow; focus also rings the whole cell. 2 by 3 from 640 to 1079px. Under 640 the jobs are 6 slim rows (name, line,
   chevron) and the examples wait on the job's page, 1 tap away.
   The link to every recipe sits at the right of the line from 860px, and closes the block under the jobs below it. Its
   count is the catalog's, so it is never typed. Nothing moves on scroll. */

/* A 2 sentence claim sits 1 sentence to a line wherever both don't fit on 1: each sentence keeps together. */
const sentences = (s: string) => s.replace(/([.?!])\s+/g, '$1\n').split('\n')

function Arrow({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3.5 8h9M9 4.5 12.5 8 9 11.5" />
    </svg>
  )
}

function Chevron() {
  return (
    <svg className="s-rj__chev" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M6 3.5 10.5 8 6 12.5" />
    </svg>
  )
}

type Props = { heading: string; line: string; all: Cta; id?: string }

export function RecipeJobs({ heading, line, all, id = 'recipes' }: Props) {
  const uid = useId()
  const parts = sentences(heading)
  return (
    <section className="s-section s-rj" id={id} aria-labelledby={`${uid}-h`}>
      <div className="s-wrap s-rj__body">
        <h2 className="ob-type-h2 s-rj__h" id={`${uid}-h`}>
          {parts.map((s, i) => (
            <Fragment key={i}>
              {i > 0 && ' '}
              <span className="s-rj__s">{s}</span>
            </Fragment>
          ))}
        </h2>
        <p className="ob-type-body-lg s-rj__line">{line}</p>
        <Link className="ob-btn ob-btn--link s-rj__all" to={all.to}>
          <span className="ob-btn-label">{all.label.replace('{n}', String(catalog.recipes.length))}</span>
          <Arrow className="ob-btn-glyph ob-btn-arrow" />
        </Link>
        <ul className="s-rj__jobs">
          {recipeJobs.map((j, i) => (
            <li className="s-rj__job" key={j.name}>
              <h3 className="s-rj__name">
                <Link className="s-rj__go" to={j.to} aria-describedby={`${uid}-j${i}`}>
                  {j.name}
                  <Arrow className="s-rj__arrow" />
                  <Chevron />
                </Link>
              </h3>
              <p className="s-rj__promise" id={`${uid}-j${i}`}>
                {j.line}
              </p>
              <ul className="s-rj__eg">
                {j.examples.map((r, k) => (
                  <li key={r.id}>
                    {k > 0 && (
                      <span className="s-rj__dot" aria-hidden="true">
                        ·
                      </span>
                    )}
                    <Link className="s-rj__ex" to={r.to}>
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

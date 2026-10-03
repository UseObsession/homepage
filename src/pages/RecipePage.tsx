import { useId, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { AppScreen } from '../components/AppScreen'
import { CaptureForm } from '../components/CaptureForm'
import { Crumbs } from '../components/Crumbs'
import { Mark } from '../components/Logo'
import { Console } from '../components/sections/Console'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { RecipeKit } from '../components/sections/RecipeKit'
import { drawnFor, type Workspace } from '../components/workspace'
import { nav } from '../content/nav'
import { isRealRun, recipePage as ui } from '../content/recipe-page'
import type { AudienceId, Recipe } from '../content/types'
import '../components/sections/Hero.css'
import './RecipePage.css'

/* A recipe's own page (/recipes/SLUG), James's structure on the design system, every word from the recipe's content
   file (src/content/recipes) and the shared claims in content/recipe-page.ts. In order:
   the centred hero with the recipe's screen and capture > what choosing it sets up, landing 1 by 1 > the run in the
   console > the steps > what it checks > what you get > what you can change > who it's for > the optional table >
   questions > the final call. Motion lives in the product only: the screen plays its story, the kit lands, the run
   plays. Sections never fade in. */

/* A numeral never ends a line apart from its word ("48 hours", "4 test customers"). */
const tie = (s: string) => s.replace(/(\d) (?=\S)/g, '$1\u00a0')

/* Each audience's own page, named as the nav names it. */
const AUDIENCE: Record<AudienceId | 'developers', { label: string; to: string }> = Object.fromEntries(
  nav.readers.map((p) => [p.id, { label: p.label, to: p.to }]),
) as Record<AudienceId | 'developers', { label: string; to: string }>

/* Whose workspace the screen and the console show: the one the recipe's screen is drawn for (components/workspace.ts),
   so the hero screen and the console's crumb name the same workspace. */
const workspaceOf = (r: Recipe): Workspace => drawnFor(r.hero.screen)

function Arrow({ className = 'ob-btn-glyph ob-btn-arrow' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}

/* The ground each tone stands on (styles/tones.css): "ink" is a full bleed ink chapter (the steps), "paper" the paper
   break on ink (the run), "alt" the quieter alternate ground. */
type Tone = 'alt' | 'ink' | 'paper'
const TONE_SCOPE: Record<Tone, string> = { alt: '', ink: 'ob-theme-dark ', paper: 'ob-theme-hybrid ' }

/* A section with its claim. `split` sets the claim beside the content on wide screens. */
function Section({
  id,
  heading,
  line,
  action,
  split = false,
  tone,
  className = '',
  children,
}: {
  id: string
  heading: string
  line?: string
  action?: ReactNode
  split?: boolean
  tone?: Tone
  className?: string
  children: ReactNode
}) {
  const h = `${id}-h`
  return (
    <section
      className={`s-section s-rp ${split ? 's-rp--split ' : ''}${tone ? TONE_SCOPE[tone] : ''}${className}`}
      data-tone={tone}
      id={id}
      aria-labelledby={h}
    >
      <div className="s-wrap s-rp__in">
        <header className="s-head s-rp__head">
          <h2 className="ob-type-h2" id={h}>
            {tie(heading)}
          </h2>
          {line && <p className="s-rp__line">{tie(line)}</p>}
          {action}
        </header>
        <div className="s-rp__body">{children}</div>
      </div>
    </section>
  )
}

function Hero({ r, workspace }: { r: Recipe; workspace: Workspace }) {
  const id = useId()
  return (
    <section className="s-hero s-rp-hero" aria-labelledby={`${id}-h`}>
      <div className="s-wrap s-hero-wrap">
        <Crumbs />
        <div className="s-hero-head ob-anim-hero">
          <p className="ob-layout-eyebrow s-hero-pill">
            <Mark size={16} />
            {ui.pill}
          </p>
          <h1 className="s-hero-h" id={`${id}-h`}>
            {r.hero.headline}
          </h1>
          <p className="s-hero-sub s-rp-hero__sub">{r.hero.sub}</p>
          <div className="s-hero-act">
            <CaptureForm capture={r.hero.capture} className="s-hero-form" />
          </div>
        </div>
        <div className="s-hero-console s-rp-hero__screen ob-anim-hero-object">
          <AppScreen name={r.hero.screen} workspace={workspace} />
        </div>
      </div>
    </section>
  )
}

function Steps({ steps }: { steps: Recipe['steps'] }) {
  return (
    <ol className="s-rp-steps">
      {steps.map((s, i) => (
        <li key={s.title} className="s-rp-steps__item">
          <span className="s-rp-steps__n" aria-hidden="true">
            {i + 1}
          </span>
          <h3 className="s-rp-steps__title">{s.title}</h3>
          <p className="s-rp-steps__line">{tie(s.line)}</p>
        </li>
      ))}
    </ol>
  )
}

function Checks({ id, checks }: { id: string; checks: Recipe['checks'] }) {
  return (
    <div className="s-rp-groups">
      {checks.map((g, gi) => (
        <div className="s-rp-group" key={g.group}>
          <h3 className="s-rp-group__name" id={`${id}-g${gi}`}>
            {g.group}
          </h3>
          <ul className="s-rp-group__items" aria-labelledby={`${id}-g${gi}`}>
            {g.items.map((i) => (
              <li key={i.title}>
                <p className="s-rp-group__title">{i.title}</p>
                <p className="s-rp-group__line">{tie(i.line)}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function Outputs({ items }: { items: Recipe['outputs']['items'] }) {
  return (
    <ul className="s-rp-outs">
      {items.map((o) => (
        <li key={o.format}>
          <h3 className="s-rp-outs__format">{o.format}</h3>
          <p className="s-rp-outs__line">{tie(o.line)}</p>
        </li>
      ))}
    </ul>
  )
}

function Settings({ settings }: { settings: NonNullable<Recipe['settings']> }) {
  return (
    <dl className="s-rp-settings">
      {settings.map((s) => (
        <div key={s.k}>
          <dt>{s.k}</dt>
          <dd>{tie(s.v)}</dd>
        </div>
      ))}
    </dl>
  )
}

/* Who it's for: the recipe's doors. Each row carries its reader's key, the brand square in the reader's hue, as Home's
   band does where a reader picks themselves (styles/accents.css); the arrow takes the hue when the row is lit. */
function ForWho({ items }: { items: Recipe['forWho'] }) {
  return (
    <ul className="s-rp-who">
      {items.map((w) => {
        const a = AUDIENCE[w.audience]
        if (!a) return null
        return (
          <li key={w.audience}>
            <Link className="s-rp-who__link" data-reader={w.audience} to={a.to}>
              <span className="s-rp-who__name">
                <span className="s-rp-who__key ob-sq" aria-hidden="true" />
                {a.label}
                <Arrow className="s-rp-who__arrow" />
              </span>
              <span className="s-rp-who__line">{tie(w.line)}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

/* Under a 600px frame (RecipePage.css) each row stacks: its name, then every column under its own small label, so
   the payoff column is never scrolled off screen; --fit drops the system's sideways scroll and sticky first column.
   The labels are drawn for the eye only (the column heads still name each cell), and the roles keep the table's
   meaning where a browser drops it for a table no longer laid out as one. */
function Table({ table }: { table: NonNullable<Recipe['table']> }) {
  return (
    <div className="ob-table-wrap s-rp-table" tabIndex={0} role="region" aria-label={table.heading}>
      <table className="ob-table ob-table--fit" role="table">
        <thead role="rowgroup">
          <tr role="row">
            <td aria-hidden="true" />
            {table.cols.map((c) => (
              <th key={c} scope="col" role="columnheader">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {table.rows.map((row) => (
            <tr key={row.label} role="row">
              <th scope="row" role="rowheader">
                {row.label}
              </th>
              {row.values.map((v, i) => (
                <td key={i} role="cell">
                  {table.cols[i] && (
                    <span className="s-rp-table__col" aria-hidden="true">
                      {table.cols[i]}
                    </span>
                  )}
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function RecipePage({ recipe: r }: { recipe: Recipe }) {
  const workspace = workspaceOf(r)
  const real = isRealRun(r.run.tab)

  return (
    <>
      <Hero r={r} workspace={workspace} />

      <Section id="kit" heading={ui.kit.heading} line={ui.kit.line} split className="s-rp-kit">
        <RecipeKit name={r.name} items={r.kit} ui={ui.kit} />
      </Section>

      <Section id="run" heading={ui.run.heading} line={r.gets} tone="paper" className="s-rp-run">
        <Console label={r.run.tab} demos={[r.run]} workspace={workspace} tag={real ? ui.run.tag.real : ui.run.tag.example} />
      </Section>

      <Section id="steps" heading={ui.steps.heading} tone="ink">
        <Steps steps={r.steps} />
      </Section>

      <Section id="checks" heading={ui.checks.heading}>
        <Checks id="checks" checks={r.checks} />
      </Section>

      <Section
        id="outputs"
        heading={r.outputs.heading}
        split
        tone="alt"
        action={
          <Link className="ob-btn ob-btn--link s-rp__action" to={ui.outputs.cta.to}>
            <span className="ob-btn-label">{ui.outputs.cta.label}</span>
            <Arrow />
          </Link>
        }
      >
        <Outputs items={r.outputs.items} />
      </Section>

      {r.settings && r.settings.length > 0 && (
        <Section id="settings" heading={ui.settings.heading} split>
          <Settings settings={r.settings} />
        </Section>
      )}

      <Section id="for" heading={ui.forWho.heading}>
        <ForWho items={r.forWho} />
      </Section>

      {r.table && (
        <Section id="compare" heading={r.table.heading} line={r.table.line} tone="alt" className="s-rp-compare">
          <Table table={r.table} />
        </Section>
      )}

      <Faq faq={r.faq} id="questions" />

      <FinalCta final={r.final} />
    </>
  )
}

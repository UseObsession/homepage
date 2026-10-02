import { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Faq, FinalCta, InputsOutputs, RecipeGrid, SampleTeaser, SectionHead, Watched } from '../components/Blocks'
import { Reveal } from '../components/Reveal'
import { RunWindow } from '../components/RunWindow'
import { Compare, Ladder, Proof, TimeStrip, Timing } from '../components/RecipeBlocks'
import { CaptureForm } from '../components/CaptureForm'
import { captureFor } from '../content/capture'
import { roleById } from '../content/roles'
import { allRecipeIds, recipeBySlug } from '../content/recipes'
import './RecipePage.css'

/* One page per recipe, written like the page a product doing only that job would have. */
export function RecipePage() {
  const { slug = '' } = useParams()
  const t = recipeBySlug[slug]


  if (!t) {
    return (
      <section className="section">
        <div className="wrap head">
          <h1 className="h2">We don’t have that recipe.</h1>
          <p className="lede">
            <Link to="/recipes">See all recipes</Link>
          </p>
        </div>
      </section>
    )
  }

  const others = allRecipeIds.filter((id) => id !== t.id)

  return (
    <Fragment key={t.slug}>
      <section className="hero">
        <div className="wrap">
          <div className="hero-in">
            <span className="hero-pill">
              <Link to="/recipes">Recipes</Link> <b aria-hidden="true">/</b> {t.name}
            </span>
            <h1 className="h1 tp-h1">{t.headline}</h1>
            <p className="lede">{t.lede}</p>
            <div className="hero-form">
              <CaptureForm capture={captureFor(`/recipes/${t.slug}`, `recipe-${t.slug}`)} />
              <Watched items={t.watched} />
            </div>
          </div>
          <div className="hero-stage">
            <RunWindow runs={[t.run]} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead kicker={t.id === 'prospect' ? 'What it can prove' : 'What it covers'} title={t.checksTitle} />
          <div className="tp-checks">
            {t.checks.map((g) => (
              <Reveal key={g.group} className="tp-group">
                <p className="kicker">{g.group}</p>
                <ul>
                  {g.items.map((i) => (
                    <li key={i.title}>
                      <h3 className="h3">{i.title}</h3>
                      <p className="muted">{i.line}</p>
                    </li>
                  ))}
                  {t.locked && g === t.checks[t.checks.length - 1] && (
                    <li className="tp-locked">
                      <h3 className="h3">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                        </svg>
                        {t.locked.title}
                      </h3>
                      <p className="muted">{t.locked.line}</p>
                    </li>
                  )}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {t.strip && (
        <section className="section">
          <div className="wrap">
            <SectionHead kicker={t.strip.kicker} title={t.strip.title} />
            <TimeStrip strip={t.strip} />
          </div>
        </section>
      )}

      {t.ladder && (
        <section className="section sunken">
          <div className="wrap">
            <SectionHead
              kicker="What it can do, and when"
              title="Public steps for anyone. The rest with the company’s OK."
              lede="Every shopper is marked as automated. What it’s allowed to do depends on who said yes."
            />
            <Ladder />
          </div>
        </section>
      )}

      {t.timing && (
        <section className="section">
          <div className="wrap">
            <SectionHead kicker="When things arrive" title="Results come in as they happen. You never wait for a blank report." />
            <Timing timing={t.timing} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <SectionHead kicker="What you get" title="Proof you can act on, not a dashboard to check." />
          <ul className="tp-cards">
            {t.deliverables.map((d) => (
              <Reveal as="li" key={d.title} className="card tp-card">
                <h3 className="h3">{d.title}</h3>
                <p className="muted">{d.line}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {t.sampleOutput && (
        <section className="section sunken">
          <div className="wrap">
            <SampleTeaser />
          </div>
        </section>
      )}

      {t.compare && (
        <section className="section">
          <div className="wrap">
            <SectionHead kicker="Side by side" title={t.compare.title} />
            <Compare compare={t.compare} />
          </div>
        </section>
      )}

      <section className="section sunken">
        <div className="wrap tp-spins">
          <SectionHead
            kicker="What Obsession spins up"
            title="Choosing the recipe sets up the infrastructure."
            lede="You don’t build or run any of this. Pick the recipe, add the companies, and it’s in place."
          />
          <ul className="tp-infra">
            {t.spinsUp.map((s, i) => (
              <Reveal as="li" key={s.title} className="tp-infra-row">
                <span className="tp-infra-n">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="muted">{s.line}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            kicker="Proof you can check"
            title="Fixed rules decide the verdict."
            lede="Every finding says what was seen and when, and links to the screenshot or message behind it."
          />
          <Proof />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <SectionHead kicker="What you can change" title="Start from the recipe. Change anything." />
            <dl className="tp-settings">
              {t.settings.map((s) => (
                <div key={s.k}>
                  <dt>{s.k}</dt>
                  <dd>{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Reveal className="tp-io">
            <InputsOutputs />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead kicker="Who uses it" title="The same recipe, different jobs." />
          <ul className="tp-who">
            {t.audiences.map((a) => {
              const role = roleById[a.role]
              return (
                <Reveal as="li" key={a.role}>
                  <Link to={role.page} className="card tp-who-card">
                    <span className="kicker">{role.bandName}</span>
                    <span className="tp-who-line">{a.line}</span>
                    <span className="tp-who-go" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap wrap-sm">
          <SectionHead kicker="Questions" title={`${t.name}: what people ask`} />
          <Faq items={t.faq} />
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap">
          <SectionHead kicker="Other recipes" title="Same infrastructure, other jobs." />
          <RecipeGrid ids={others} />
        </div>
      </section>

      <FinalCta title="Start with one company." line={`Tell us which one, and we’ll set up ${t.name.toLowerCase()} for it.`} source={`recipe-${t.slug}-final`} />
    </Fragment>
  )
}

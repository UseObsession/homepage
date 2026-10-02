import { useEffect } from 'react'
import { FinalCta, InputsOutputs, SectionHead, RecipeGrid } from '../components/Blocks'
import { Reveal } from '../components/Reveal'
import { allRecipeIds } from '../content/recipes'

export function Recipes() {
  useEffect(() => {
    document.title = 'Recipes · Obsession'
  }, [])

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-in">
            <span className="hero-pill">Recipes</span>
            <h1 className="h1 tp-h1">One job each. The infrastructure comes with it.</h1>
            <p className="lede">
              Each recipe sets up what its job needs: shoppers with their own inboxes, phone numbers and browsers, the waits, and the
              checks. Start from one, change anything, or describe a job we don’t have yet.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <RecipeGrid ids={allRecipeIds} />
        </div>
      </section>

      <section className="section sunken">
        <div className="wrap split">
          <SectionHead
            kicker="Every recipe"
            title="Same inputs. Same outputs."
            lede="Add companies however your list lives today, and send the results wherever your team already works."
          />
          <Reveal>
            <InputsOutputs />
          </Reveal>
        </div>
      </section>

      <FinalCta title="Don’t see your job?" line="Describe it in plain words. If it comes up again, it becomes a recipe." source="recipes-final" />
    </>
  )
}

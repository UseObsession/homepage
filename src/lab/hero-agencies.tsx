import { Hero } from '../components/sections/Hero'
import { page } from '../content/pages/agencies'
import { Axis } from './hero'

/* Lab: the hero and console with the agencies page's words. ?axis measures the centre line (see hero.tsx). */
export default function HeroLab() {
  return (
    <>
      <Hero hero={page.hero} cta workspace="agency" />
      <Axis />
    </>
  )
}

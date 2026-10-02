import { Hero } from '../components/sections/Hero'
import { page } from '../content/pages/sales'
import { Axis } from './hero'

/* Lab: the hero and console with the sales page's words. ?axis measures the centre line (see hero.tsx). */
export default function HeroLab() {
  return (
    <>
      <Hero hero={page.hero} cta workspace="company" />
      <Axis />
    </>
  )
}

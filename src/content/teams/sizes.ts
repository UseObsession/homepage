import { plans, prices, type PriceKey } from '../prices'

/* A size's month at list rates, from prices.ts, and the cheapest paid plan that carries it: the plan's fee covers that
   much usage at list rates, and usage past it is billed at list rates (founders, 22 Nov 2026). Model tokens are not in
   the sum; the page says so. */
const figure = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
export const dollars = (n: number) => (n >= 100 ? `$${figure(Math.round(n))}` : `$${n.toFixed(2)}`)

export function monthOf(usage: Partial<Record<PriceKey, number>>) {
  const list = Object.entries(usage).reduce((sum, [k, n]) => {
    const v = (prices as Record<string, { value?: number }>)[k]?.value ?? 0
    return sum + v * (n ?? 0)
  }, 0)
  const paid = plans.filter((p) => p.monthly && p.covers)
  const best = paid
    .map((p) => ({ name: p.name, total: (p.monthly ?? 0) + Math.max(0, list - (p.covers ?? 0)) }))
    .sort((a, b) => a.total - b.total)[0]
  return { list, plan: best }
}

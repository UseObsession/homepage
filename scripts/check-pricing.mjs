/* Proves every price the built site shows is the pricing source's: npm run check:pricing (npm run build runs it after
   the prerender). It recomputes every blueprint tier with the engine from src/lib/pricing (the JSON's defaults, as the
   founders' calculator prices them) and reads the prerendered pages in dist/: each blueprint page's table and each tab
   of the audience pages' pricing (name, price and what it covers, tier by tier), the plan cards on /pricing (each
   plan's fee, its monthly usage in dollars, Free's allowances and Enterprise's starting price) and every rate on
   /pricing/rates, with Scale's rate beside each one it lowers. Any difference fails. */
import { readFileSync } from 'node:fs'
import * as E from '../src/lib/pricing/engine.js'

const pricing = JSON.parse(readFileSync(new URL('../src/lib/pricing/pricing.json', import.meta.url), 'utf8'))
const page = (path) => readFileSync(new URL(`../dist/${path}`, import.meta.url), 'utf8')
/* An element's text: tags out, entities and no-break spaces back to plain characters. */
const text = (html) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/ /g, ' ')
    .trim()
const figure = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
const money = (n) => {
  const x = Math.round(n * 1e6) / 1e6
  return Number.isInteger(x) ? `$${figure(x)}` : `$${x.toFixed(Math.max(2, String(x).split('.')[1].length))}`
}
const quantity = (n) => (n >= 1e6 && n % 1e6 === 0 ? `${figure(n / 1e6)} million` : figure(n))

const problems = []
const expect = (where, got, want) => {
  if (got !== want) problems.push(`${where}: shows "${got}", the pricing source says "${want}"`)
}

/* A blueprint's tiers as the engine prices them, in the words a card shows. */
const tiersOf = (bp) =>
  E.allTiers(bp, pricing).map((t) => ({
    name: t.name,
    price: t.enterprise ? 'Enterprise' : t.price === 0 ? 'Free' : `$${t.price.toLocaleString('en-GB')}`,
    covers: t.covers,
  }))
/* The cards of a pricing table (components/BlueprintPricing) in a piece of HTML. */
const CARD = /class="s-bpp__name"[^>]*>([\s\S]*?)<\/h3>[\s\S]*?class="s-bpp__amount">([\s\S]*?)<\/span>[\s\S]*?class="s-bpp__covers">([\s\S]*?)<\/p>/g
const cardsIn = (html) => [...html.matchAll(CARD)].map(([, name, price, covers]) => ({ name: text(name), price: text(price), covers: text(covers) }))
const compare = (where, cards, bp) => {
  const want = tiersOf(bp)
  expect(`${where}: tiers`, String(cards.length), String(want.length))
  want.forEach((w, i) => {
    const c = cards[i] ?? { name: '', price: '', covers: '' }
    expect(`${where}, tier ${i + 1}: name`, c.name, w.name)
    expect(`${where}, ${w.name}: price`, c.price, w.price)
    expect(`${where}, ${w.name}: covers`, c.covers, w.covers)
  })
  return want
}

/* 1. Every blueprint page. */
let tiers = 0
const table = []
for (const bp of pricing.blueprints) {
  const want = compare(`/blueprints/${bp.id}`, cardsIn(page(`blueprints/${bp.id}.html`)), bp)
  tiers += want.length
  table.push(`  ${bp.name.padEnd(32)} ${want.map((w) => `${w.name} ${w.price}`).join(', ')}`)
}

/* 2. The audience pages' pricing tabs: each tab's label names its blueprint, and its panel follows in the same order. */
let tabs = 0
for (const path of ['agencies', 'marketing', 'sales']) {
  const all = page(`${path}.html`)
  const start = all.indexOf('id="pricing"')
  if (start < 0) {
    problems.push(`/${path}: no #pricing section`)
    continue
  }
  const html = all.slice(start, all.indexOf('</section>', start))
  const labels = [...html.matchAll(/role="tab"[^>]*>([\s\S]*?)<\/button>/g)].map(([, l]) => text(l))
  const panels = html.split('role="tabpanel"').slice(1)
  expect(`/${path}: pricing panels`, String(panels.length), String(labels.length))
  labels.forEach((label, i) => {
    const bp = pricing.blueprints.find((b) => b.name === label)
    if (!bp) return problems.push(`/${path}: the tab "${label}" names no blueprint in the pricing JSON`)
    compare(`/${path}, ${label}`, cardsIn(panels[i] ?? ''), bp)
    tabs++
  })
}

/* 3. The plan cards on /pricing: each plan's fee (Enterprise: "From" its starting price), each paid plan's monthly
   usage in dollars and its pay as you go line, Free's allowances and what its number receives, and Enterprise's terms
   (monthly, nothing up front). No card may show a fixed amount of a piece on a paid plan. */
const pricingHtml = page('pricing.html')
const planCards = pricingHtml.split('class="s-pr-plan__name"').slice(1)
expect('/pricing: plan cards', String(planCards.length), String(pricing.plans.length))
pricing.plans.forEach((plan, i) => {
  const card = planCards[i] ?? ''
  expect(`/pricing, plan ${i + 1}: name`, text(card.slice(card.indexOf('>') + 1, card.indexOf('</h2>'))), plan.name)
  const amount = /class="s-pr-plan__amount">([\s\S]*?)<\/span>/.exec(card)?.[1] ?? ''
  expect(`/pricing, ${plan.name}: price`, text(amount), money(plan.monthly ?? plan.from))
  const lead = /class="s-pr-plan__lead">([\s\S]*?)<\/span>/.exec(card)?.[1]
  if (plan.monthly == null && text(lead ?? '') !== 'From') problems.push(`/pricing, ${plan.name}: its price doesn't say "From"`)
  const rows = [...card.matchAll(/class="s-pr-plan__row"[^>]*>([\s\S]*?)<\/li>/g)].map(([, r]) => text(r))
  if (plan.credit > 0) {
    const line = `${money(plan.credit)} of usage a month`
    if (!rows.some((r) => r.startsWith(line) && r.endsWith('spent on any piece'))) problems.push(`/pricing, ${plan.name}: no line saying "${line} ... spent on any piece"`)
    if (!rows.some((r) => r.startsWith('Past it, pay as you go at the same rates'))) problems.push(`/pricing, ${plan.name}: no pay as you go line`)
    const fixed = rows.filter((r) => /^\d[\d,]* (inbox|email|phone number|text|browser hour|sandbox|event)/.test(r))
    if (fixed.length) problems.push(`/pricing, ${plan.name}: shows fixed amounts on a paid plan: ${fixed.join('; ')}`)
  }
  for (const [id, n] of Object.entries(plan.allowances ?? {})) {
    if (!rows.some((r) => r.startsWith(`${quantity(n)} `))) problems.push(`/pricing, ${plan.name}: no line for its ${quantity(n)} of "${id}"`)
  }
  if (plan.freeNumber) {
    const line = `up to ${plan.freeNumber.textsIn} texts and ${plan.freeNumber.callMinutesIn} call minutes a month`
    if (!rows.some((r) => r.includes(line))) problems.push(`/pricing, ${plan.name}: its number's line doesn't say "${line}"`)
  }
  if (plan.monthly == null && plan.upfront === false && !rows.some((r) => /nothing paid up front/.test(r))) problems.push(`/pricing, ${plan.name}: doesn't say it starts with nothing paid up front`)
})
/* Nothing on /pricing may ask for a yearly contract or payment up front. */
const pricingText = text(pricingHtml.replace(/<script[\s\S]*?<\/script>/g, ''))
for (const bad of [/yearly contract/i, /annual commitment/i, /minimum annual/i, /pay(ment)? in advance/i, /by contract/i]) {
  if (bad.test(pricingText)) problems.push(`/pricing: says "${pricingText.match(bad)[0]}"`)
}

/* 4. Every rate on /pricing/rates, by the piece's name, and Scale's rate beside each one Scale lowers (and none
   beside one it doesn't). */
const rates = new Map(
  page('pricing/rates.html')
    .split('class="s-rt-row__name">')
    .slice(1)
    .map((row) => {
      const name = row.slice(0, row.indexOf('</dt>'))
      const amount = /class="s-rt-row__amount">([\s\S]*?)<\/span>/.exec(row)?.[1] ?? ''
      const unit = /class="s-rt-row__unit">([\s\S]*?)<\/span>/.exec(row)?.[1] ?? ''
      const scale = /class="s-rt-row__scale-amount">([\s\S]*?)<\/span>([\s\S]*?)<\/span>/.exec(row)
      return [text(name), { amount: text(amount), unit: text(unit), scale: scale ? text(scale[1]) : null, scaleUnit: scale ? text(scale[2]) : '' }]
    }),
)
const scaleRates = Object.fromEntries(E.planRates('scale', pricing).map((r) => [r.id, r]))
for (const p of pricing.pieces) {
  const row = rates.get(p.name)
  const r = scaleRates[p.id]
  if (!row || !r) continue
  const where = `/pricing/rates, ${p.name} on Scale`
  if (!r.discounted) {
    if (row.scale) problems.push(`${where}: shows ${row.scale}, but Scale bills its list rate`)
    continue
  }
  if (r.markup != null) expect(`${where}: markup`, row.scale?.match(/\d+%/)?.[0] ?? '', `${Math.round(r.markup * 100)}%`)
  else if (r.plus != null) expect(`${where}: fee on top`, row.scale?.match(/\$[\d.]+/)?.[0] ?? '', money(r.plus))
  else if (r.once) {
    expect(`${where}: once`, row.scale ?? '', money(r.once.rate))
    expect(`${where}: a month`, row.scaleUnit.match(/\$[\d.,]+/)?.[0] ?? '', money(r.rate))
  } else expect(`${where}: price`, row.scale ?? '', money(r.rate * (p.displayPer ?? 1)))
}
for (const p of pricing.pieces) {
  const row = rates.get(p.name)
  if (!row) {
    problems.push(`/pricing/rates: no rate for "${p.name}"`)
    continue
  }
  const where = `/pricing/rates, ${p.name}`
  if (p.retailMarkup != null) expect(`${where}: markup`, row.amount.match(/\d+%/)?.[0] ?? '', `${Math.round(p.retailMarkup * 100)}%`)
  else if (p.retailPlus != null) expect(`${where}: fee on top`, row.amount.match(/\$[\d.]+/)?.[0] ?? '', money(p.retailPlus))
  else if (p.once) {
    expect(`${where}: once`, row.amount, money(p.once.retail))
    expect(`${where}: a month`, row.unit.match(/\$[\d.,]+/)?.[0] ?? '', money(p.retail))
  } else expect(`${where}: price`, row.amount, p.retail === 0 ? 'Free' : money(p.retail * (p.displayPer ?? 1)))
}

if (problems.length) {
  console.error(`check-pricing: ${problems.length} price(s) on the site differ from the pricing source (src/lib/pricing):\n  ${problems.join('\n  ')}`)
  process.exit(1)
}
const anchor = tiersOf(E.findBlueprint(pricing, 'mystery-shopper')).find((_, i) => pricing.blueprints[0].tiers[i].q === 150)
console.log(
  `Checked every price against the pricing engine: ${pricing.blueprints.length} blueprint pages (${tiers} tiers), ${tabs} pricing tabs on /agencies, /marketing and /sales, ${pricing.plans.length} plans and ${pricing.pieces.length} rates with Scale's beside them. Agency mystery shopping, 150 stores: ${anchor?.price}; ${pricing.plans
    .filter((p) => p.credit > 0)
    .map((p) => `${p.name}: ${money(p.monthly)} for ${money(p.credit)} of usage`)
    .join('; ')}.`,
)
if (process.argv.includes('--table')) console.log(table.join('\n'))

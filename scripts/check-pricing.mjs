/* Proves every price the built site shows is the pricing source's: npm run check:pricing (npm run build runs it after
   the prerender). It recomputes every blueprint's typical months with the engine from src/lib/pricing (the JSON's
   defaults, as the founders' calculator works them out: what each run uses x the list piece rates, model tokens at cost
   plus 10%) and reads the prerendered pages in dist/: each blueprint page's table and each tab of the audience pages'
   pricing (the month each card describes, "About $N a month", the free run first with what it would cost), the plan
   cards on /pricing (each plan's fee, its monthly usage in dollars, Free's allowances, Enterprise's first-month floor
   and its months free when paid yearly) and every rate on /pricing/rates, with Scale's rate beside each one it lowers,
   none beside model tokens, and a fixed price (the US texting registration) the same in every column. The note under
   the plans must give the registration's fixed prices and say no plan includes it. Any difference fails, and so does a
   blueprint card that offers a plan to buy. */
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

/* "$206", "$5.50". */
const dollars = (n) => `$${n.toLocaleString('en-GB', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 })}`
/* A blueprint's typical months as the engine works them out, in the words a card shows. */
const tiersOf = (bp) => {
  const startup = E.blueprintMonths(bp, pricing, { plan: 'startup' })
  const scale = E.blueprintMonths(bp, pricing, { plan: 'scale' })
  return E.blueprintMonths(bp, pricing).map((t, i) => ({
    key: t.name,
    name: t.free ? 'Your first run' : t.covers,
    lead: t.free ? '' : 'About',
    price: t.free ? 'Free' : dollars(t.estimate),
    per: t.free ? '' : 'a month at list rates',
    note: t.free
      ? `about ${dollars(t.estimate)}`
      : startup[i].fitsCredit && scale[i].fitsCredit
        ? `About ${dollars(startup[i].estimate)} when paid from Startup’s credit, ${dollars(scale[i].estimate)} from Scale’s.`
        : scale[i].fitsCredit
          ? `About ${dollars(scale[i].estimate)} when paid from Scale’s credit.`
          : 'More than a plan’s credit covers: past it, usage is billed at list rates.',
    estimate: t.estimate,
    free: t.free,
  }))
}
/* The cards of a pricing table (components/BlueprintPricing) in a piece of HTML. */
const cardsIn = (html) =>
  html
    .split('class="s-bpp__name"')
    .slice(1)
    .map((card) => ({
      name: text(card.slice(card.indexOf('>') + 1, card.indexOf('</h3>'))),
      lead: text(/class="s-bpp__lead">([\s\S]*?)<\/span>/.exec(card)?.[1] ?? ''),
      price: text(/class="s-bpp__amount">([\s\S]*?)<\/span>/.exec(card)?.[1] ?? ''),
      per: text(/class="s-bpp__per">([\s\S]*?)<\/span>/.exec(card)?.[1] ?? ''),
      note: text(/class="s-bpp__note">([\s\S]*?)<\/p>/.exec(card)?.[1] ?? ''),
      cta: text(/class="ob-btn-label">([\s\S]*?)<\/span>/.exec(card)?.[1] ?? ''),
      body: text(card.slice(0, card.indexOf('</article>'))),
    }))
const compare = (where, cards, bp) => {
  const want = tiersOf(bp)
  expect(`${where}: months`, String(cards.length), String(want.length))
  want.forEach((w, i) => {
    const c = cards[i] ?? { name: '', lead: '', price: '', per: '', note: '', cta: '', body: '' }
    expect(`${where}, month ${i + 1}: name`, c.name, w.name)
    expect(`${where}, ${w.key}: "About"`, c.lead, w.lead)
    expect(`${where}, ${w.key}: figure`, c.price, w.price)
    expect(`${where}, ${w.key}: a month`, c.per, w.per)
    if (!c.note.includes(w.note)) problems.push(`${where}, ${w.key}: its line "${c.note}" doesn't say "${w.note}"`)
    if (!w.free && !/plan’s credit/.test(c.note)) problems.push(`${where}, ${w.key}: its line doesn't say it's paid from your plan’s credit`)
    expect(`${where}, ${w.key}: button`, c.cta, 'Start with a free run')
    for (const bad of [/Enterprise/, /Talk to us/, /Recommended/, /\bplans\b/i, /\bthis plan\b/i]) if (bad.test(c.body)) problems.push(`${where}, ${w.key}: the card says "${c.body.match(bad)[0]}", as if it were a plan to buy`)
  })
  return want
}

/* 1. Every blueprint page. */
let tiers = 0
const table = []
for (const bp of pricing.blueprints) {
  const html = page(`blueprints/${bp.id}.html`)
  const start = html.indexOf('id="pricing"')
  const section = start < 0 ? '' : html.slice(start, html.indexOf('</section>', start))
  if (!/What a typical month of [^<]+ costs\./.test(section)) problems.push(`/blueprints/${bp.id}: its pricing heading isn't "What a typical month of ... costs."`)
  const want = compare(`/blueprints/${bp.id}`, cardsIn(section), bp)
  tiers += want.length
  table.push(`  ${bp.name.padEnd(32)} ${want.map((w) => (w.free ? `free run (about ${dollars(w.estimate)})` : `about ${w.price}`)).join(', ')}`)
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
    if (!rows.some((r) => r.startsWith('Past it, pay as you go at list rates'))) problems.push(`/pricing, ${plan.name}: no pay as you go line`)
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
  if (plan.yearly) {
    const line = `${plan.yearly.monthsCovered - plan.yearly.monthsPaid} months free when paid yearly`
    if (!rows.some((r) => r.startsWith(line))) problems.push(`/pricing, ${plan.name}: no line saying "${line}"`)
  }
  if (plan.discount && plan.credit > 0) {
    const w = E.creditWorth(plan, pricing)
    const line = `${money(plan.credit)} of usage a month, worth ${Number.isInteger(w) ? money(w) : `about ${money(Math.round(w))}`} at list rates,`
    if (!rows.some((r) => r.startsWith(line))) problems.push(`/pricing, ${plan.name}: no line saying "${line} ..."`)
    const off = `${Math.round(plan.discount.off * 100)}% off every piece’s list rate`
    if (!rows.some((r) => r.startsWith(off))) problems.push(`/pricing, ${plan.name}: no line saying "${off}"`)
  }
  if (rows.some((r) => /^US texting/.test(r))) problems.push(`/pricing, ${plan.name}: the US texting line is still on the plan card`)
})
/* Nothing on /pricing may ask for a yearly contract or payment up front. */
const pricingText = text(pricingHtml.replace(/<script[\s\S]*?<\/script>/g, ''))
for (const bad of [/yearly contract/i, /annual commitment/i, /minimum annual/i, /pay(ment)? in advance/i, /by contract/i, /never uses your plan/i, /blueprint’s plan/i, /its own plans/i]) {
  if (bad.test(pricingText)) problems.push(`/pricing: says "${pricingText.match(bad)[0]}"`)
}
const texting = text(/class="s-pr-extra s-pr-texting">([\s\S]*?)<\/p>/.exec(pricingHtml)?.[1] ?? '')
const registerPiece = pricing.pieces.find((p) => p.id === 'register')
if (!/No plan includes it/.test(texting) || !texting.includes(`${money(registerPiece.once.retail)} once to file each campaign, then ${money(registerPiece.retail)} a month`)) problems.push(`/pricing: the US texting note under the plans doesn't give the registration's fixed prices and say no plan includes it ("${texting}")`)
if (pricing.plans.some((p) => p.features?.register)) problems.push('pricing.json: a plan still includes a US texting campaign')
if (!/blueprint runs draw on it at the same piece rates/.test(pricingText)) problems.push('/pricing: the monthly usage question doesn’t say blueprint runs draw on it at the piece rates')
if (!/each blueprint’s page shows what a typical month/i.test(pricingText)) problems.push('/pricing: doesn’t say each blueprint page shows what a typical month costs')

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
      /* The prerendered column is Startup's; both plans' rates ride in data-startup and data-scale. */
      const shown = text(/class="s-rt-row__plan-amount">([\s\S]*?)<\/span>/.exec(row)?.[1] ?? '')
      const shownUnit = text(/class="s-rt-row__plan-unit">([\s\S]*?)<\/span>/.exec(row)?.[1] ?? '')
      const attr = (k) => text(new RegExp(`data-${k}="([^"]*)"`).exec(row)?.[1] ?? '')
      return [text(name), { amount: text(amount), unit: text(unit), startupShown: [shown, shownUnit].filter(Boolean).join(' '), startup: attr('startup'), scale: attr('scale') }]
    }),
)
const ratesHtml = page('pricing/rates.html')
const toggle = /role="radiogroup"[\s\S]*?<\/div>/.exec(ratesHtml)?.[0] ?? ''
const radios = [...toggle.matchAll(/role="radio"[^>]*aria-checked="(true|false)"[^>]*>([\s\S]*?)<\/button>/g)].map(([, on, l]) => `${text(l)}${on === 'true' ? '*' : ''}`)
expect('/pricing/rates: the plan toggle', radios.join(', '), 'Startup*, Scale, Enterprise')
if (!/no plan includes it/i.test(text(ratesHtml.replace(/<script[\s\S]*?<\/script>/g, '')))) problems.push('/pricing/rates: the US texting registration doesn’t say no plan includes it')
for (const [planId, label] of [['startup', 'Startup'], ['scale', 'Scale']]) {
  const planRates = Object.fromEntries(E.planRates(planId, pricing).map((r) => [r.id, r]))
  for (const p of pricing.pieces) {
    const row = rates.get(p.name)
    const r = planRates[p.id]
    if (!row || !r) continue
    const value = planId === 'scale' ? row.scale : row.startup
    const where = `/pricing/rates, ${p.name} on ${label}`
    if (planId === 'startup') expect(`${where}: the prerendered column`, row.startupShown, value)
    if (r.fixed) {
      expect(`${where}: the same fixed price as list`, value, `${row.amount} ${row.unit}`)
      continue
    }
    if (!r.discounted) {
      expect(`${where}: the list rate, which ${label} bills`, value, row.amount)
      continue
    }
    if (r.plus != null) expect(`${where}: fee on top`, value.match(/\$[\d.]+/)?.[0] ?? '', money(r.plus))
    else if (r.once) {
      expect(`${where}: once`, value.match(/^\$[\d.,]+/)?.[0] ?? '', money(r.once.rate))
      expect(`${where}: a month`, value.match(/then (\$[\d.,]+)/)?.[1] ?? '', money(r.rate))
    } else expect(`${where}: price`, value, money(r.rate * (p.displayPer ?? 1)))
  }
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
  `Checked every price against the pricing engine: ${pricing.blueprints.length} blueprint pages (${tiers} typical months, each at list and, where it fits, paid from Startup’s or Scale’s credit), ${tabs} pricing tabs on /agencies, /marketing and /sales, ${pricing.plans.length} plans and ${pricing.pieces.length} rates with Startup's and Scale's beside them. Agency mystery shopping, 150 client stores: about ${anchor?.price} a month at list (${anchor?.note.replace(/\.$/, '')}); ${pricing.plans
    .filter((p) => p.credit > 0)
    .map((p) => `${p.name}: ${money(p.monthly)} for ${money(p.credit)} of usage`)
    .join('; ')}.`,
)
if (process.argv.includes('--table')) console.log(table.join('\n'))

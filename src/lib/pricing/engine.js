// @ts-check
/**
 * Obsession pricing engine.
 *
 * Pure functions over pricing.json. Every price is worked out as
 *   primitives (what we pay) x usage (what a run uses) x margin, rounded up to the price ladder.
 * Nothing here holds a price. Change a number in pricing.json, or pass an override (the model, the browser,
 * the cache share, the fleet volume), and every cost and tier follows.
 *
 * Plans sell a monthly credit in dollars, spent at the plan's rates on any piece (planRates, monthlyBill, cheapestPlan).
 *
 * Plain ES module, no dependencies. Works in a browser (`import('./engine.js')`), in Node
 * (`import * as engine from './engine.js'`), and from TypeScript (the JSDoc types below).
 */

/** @typedef {'measured'|'published'|'assumed'} Basis */
/** @typedef {{value:number, unit?:string, basis?:Basis, source?:string, note?:string}} Num */
/**
 * @typedef {{id:string, name:string, short?:string, in:number, out:number, cached:number, index?:number,
 *   band?:string, basis?:Basis, source?:string, note?:string}} Model
 */
/**
 * @typedef {{id:string, name:string, kind:'metered'|'units', planFee:number,
 *   includedHours?:number, headful?:number, headless?:number, proxyIncludedGb?:number, proxyPerGb?:number, captcha?:number,
 *   includedUnits?:number, unitPrice?:number, unitsPerHour?:number, unitsPerGb?:number, unitsPerCaptcha?:number,
 *   basis?:Basis, source?:string, note?:string, warn?:string}} Browser
 */
/**
 * @typedef {{name:string, minutes:number, inputTokens:number, outputTokens:number, proxyMb?:number, captchas?:number,
 *   mode:'headful'|'headless', basis?:Basis, source?:string, note?:string}} VisitTemplate
 */
/**
 * @typedef {{type:string, count?:number, minutes?:number, inputTokens?:number, outputTokens?:number,
 *   proxyMb?:number, captchas?:number, mode?:'headful'|'headless', name?:string}} VisitUse
 */
/**
 * What one block of work uses. A block is a run, the monthly upkeep of one unit, the account's upkeep, or a one-off setup.
 * @typedef {{visits?:VisitUse[], wakes?:number, emailsIn?:number, emailsOut?:number, textsIn?:number, textsOut?:number,
 *   callMinutesOut?:number, callMinutesIn?:number, numbers?:number, numberDays?:number, inboxes?:number,
 *   imessageLines?:number, whatsappOut?:number, analysis?:{inputTokens:number, outputTokens:number},
 *   sandboxVcpuHours?:number, sandboxGibHours?:number, events?:number, note?:string}} Usage
 */
/**
 * @typedef {{run:string, every?:string, runsPerMonth?:number, items?:number}} ExtraRun
 * @typedef {{name:string, for?:string, covers:string, q?:number, items?:number, every?:string, runsPerMonth?:number,
 *   days?:number, margin?:number, free?:boolean, featured?:boolean, extra?:ExtraRun[]}} Tier
 */
/**
 * @typedef {{id:string, siteId?:string, name:string, job:string, buyer?:string, unit:string, per:string,
 *   noun:[string,string], itemNoun?:[string,string], run:string, setupMonths?:number,
 *   usage:{run:Usage, runs?:Record<string,Usage>, monthly?:Usage, account?:Usage, setup?:Usage},
 *   tiers:Tier[], note?:string}} Blueprint
 */
/** @typedef {Record<string, any>} Pricing */
/**
 * Global switches. Anything left out takes its default from pricing.json.
 * @typedef {{model?:string, modelPrices?:{in:number, out:number, cached:number}, cacheShare?:number,
 *   browser?:string, browserRates?:Partial<Browser>, attempts?:number, failedShare?:number, fleetJourneys?:number}} Overrides
 */
/** @typedef {{group:string, label:string, amount:number, detail?:string}} Line */
/** @typedef {{total:number, lines:Line[], groups:Record<string, number>}} Cost */

/** The cost groups, in the order the breakdown shows them. */
export const GROUPS = [
  { key: 'model', label: 'Model tokens' },
  { key: 'browser', label: 'Browser time' },
  { key: 'overhead', label: 'Browser plan, spread' },
  { key: 'proxy', label: 'Proxy data and CAPTCHAs' },
  { key: 'phone', label: 'Numbers, texts and calls' },
  { key: 'email', label: 'Email' },
  { key: 'messaging', label: 'Messaging' },
  { key: 'sandbox', label: 'Sandbox' },
  { key: 'log', label: 'Event log' },
  { key: 'people', label: 'Person hand-overs' },
  { key: 'fixed', label: 'Other fixed costs' },
];

/* ------------------------------------------------------------------ helpers */

/**
 * A primitive's number, whether it is written as a bare number or as {value, basis, source}.
 * @param {any} x
 * @returns {number}
 */
export function val(x) {
  if (x && typeof x === 'object' && 'value' in x) return Number(x.value) || 0;
  return Number(x) || 0;
}

/**
 * Read a dotted path inside an object, such as 'phone.numberMonthly'.
 * @param {any} obj
 * @param {string} path
 */
export function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

/** @param {number} x @param {number} lo @param {number} hi */
const clamp = (x, lo, hi) => Math.min(Math.max(x, lo), hi);

/**
 * Money for display: cents under $100, whole dollars above.
 * @param {number} x
 * @param {number} [digits]
 */
export function money(x, digits) {
  const d = digits ?? (Math.abs(x) >= 100 ? 0 : Math.abs(x) >= 1 ? 2 : Math.abs(x) >= 0.01 ? 3 : 4);
  const s = Math.abs(x).toLocaleString('en-GB', { minimumFractionDigits: d, maximumFractionDigits: d });
  return (x < 0 ? '-$' : '$') + s;
}

/**
 * Tokens for display: 1.42M, 10.2k.
 * @param {number} n
 */
export function tokens(n) {
  if (n >= 1e6) return (n / 1e6).toLocaleString('en-GB', { maximumFractionDigits: 2 }) + 'M';
  if (n >= 1e3) return (n / 1e3).toLocaleString('en-GB', { maximumFractionDigits: 1 }) + 'k';
  return String(Math.round(n));
}

/** @param {number} n */
const num = (n) => n.toLocaleString('en-GB', { maximumFractionDigits: 2 });

/* ------------------------------------------------------------------ lookups */

/** @param {Pricing} pricing @param {string} id @returns {Model} */
export function findModel(pricing, id) {
  const list = pricing.primitives.models.list;
  return list.find((/** @type {Model} */ m) => m.id === id) || list.find((/** @type {Model} */ m) => m.id === pricing.primitives.models.default);
}

/** @param {Pricing} pricing @param {string} id @returns {Browser} */
export function findBrowser(pricing, id) {
  const list = pricing.primitives.browsers.list;
  return list.find((/** @type {Browser} */ b) => b.id === id) || list.find((/** @type {Browser} */ b) => b.id === pricing.primitives.browsers.default);
}

/** @param {Pricing} pricing @param {string} id @returns {Blueprint} */
export function findBlueprint(pricing, id) {
  return pricing.blueprints.find((/** @type {Blueprint} */ b) => b.id === id);
}

/**
 * A visit as used: its template from primitives.visits, with any per-blueprint changes on top.
 * @param {VisitUse} use
 * @param {Pricing} pricing
 * @returns {VisitTemplate}
 */
export function resolveVisit(use, pricing) {
  const t = pricing.primitives.visits[use.type];
  if (!t) throw new Error(`Unknown visit type "${use.type}"`);
  return {
    ...t,
    name: use.name ?? t.name,
    minutes: use.minutes ?? t.minutes,
    inputTokens: use.inputTokens ?? t.inputTokens,
    outputTokens: use.outputTokens ?? t.outputTokens,
    proxyMb: use.proxyMb ?? t.proxyMb ?? 0,
    captchas: use.captchas ?? t.captchas ?? 0,
    mode: use.mode ?? t.mode,
  };
}

/* ------------------------------------------------------------------ rates */

/**
 * The model's prices and the blended input price after the cache share.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function modelRates(pricing, o = {}) {
  const M = pricing.primitives.models;
  const model = o.modelPrices
    ? { id: 'custom', name: 'Custom prices', short: 'Custom', index: undefined, ...o.modelPrices }
    : findModel(pricing, o.model ?? M.default);
  const cacheShare = clamp(o.cacheShare ?? val(M.cacheShare), 0, 0.95);
  const input = (1 - cacheShare) * model.in + cacheShare * model.cached;
  return { model, cacheShare, input, output: model.out };
}

/**
 * The fleet: how many browser-hours (and proxy GB, CAPTCHAs) all paying runs use in a month.
 * The browser plan fee is spread over it. Set as store checks a month in pricing.json.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function fleet(pricing, o = {}) {
  const f = pricing.primitives.overhead.fleet;
  const journeys = Math.max(o.fleetJourneys ?? val(f.journeysPerMonth), 1);
  const af = attemptFactor(pricing, o);
  let minutes = 0, mb = 0, captchas = 0;
  for (const type of f.journeyVisits) {
    const t = pricing.primitives.visits[type];
    minutes += t.minutes; mb += t.proxyMb || 0; captchas += t.captchas || 0;
  }
  return {
    journeys,
    journeyMinutes: minutes,
    hours: journeys * af * minutes / 60,
    gb: journeys * af * mb / 1024,
    captchas: journeys * af * captchas,
  };
}

/**
 * How many times a visit is paid for: one attempt, plus any retries at a share of a finished visit's cost.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function attemptFactor(pricing, o = {}) {
  const a = pricing.primitives.attempts;
  const attempts = o.attempts ?? val(a.perVisit);
  const failed = o.failedShare ?? val(a.failedShare);
  return 1 + Math.max(attempts - 1, 0) * failed;
}

/**
 * A browser's rates, turned into what the engine needs: $ an hour headful and headless at the margin,
 * $ a proxy GB, $ a CAPTCHA, and the plan fee left after its included usage, spread over the fleet's hours.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function browserRates(pricing, o = {}) {
  const base = findBrowser(pricing, o.browser ?? pricing.primitives.browsers.default);
  /** @type {Browser} */
  const b = o.browserRates ? { ...base, id: 'custom', name: 'Custom browser rates', warn: undefined, ...o.browserRates } : base;
  const F = fleet(pricing, o);
  let headful, headless, proxyPerGb, captcha, credit;
  if (b.kind === 'units') {
    const u = b.unitPrice ?? 0;
    headful = headless = (b.unitsPerHour ?? 0) * u;
    proxyPerGb = (b.unitsPerGb ?? 0) * u;
    captcha = (b.unitsPerCaptcha ?? 0) * u;
    const fleetUnits = F.hours * (b.unitsPerHour ?? 0) + F.gb * (b.unitsPerGb ?? 0) + F.captchas * (b.unitsPerCaptcha ?? 0);
    credit = Math.min(b.includedUnits ?? 0, fleetUnits) * u;
  } else {
    headful = b.headful ?? 0;
    headless = b.headless ?? headful;
    proxyPerGb = b.proxyPerGb ?? 0;
    captcha = b.captcha ?? 0;
    credit = Math.min(b.includedHours ?? 0, F.hours) * headful + Math.min(b.proxyIncludedGb ?? 0, F.gb) * proxyPerGb;
  }
  /* Plan fee less the usage it already includes. Negative when the included usage is worth more than the fee. */
  const overheadMonthly = (b.planFee ?? 0) - credit;
  return {
    browser: b,
    headful, headless, proxyPerGb, captcha,
    planFee: b.planFee ?? 0,
    credit,
    overheadMonthly,
    fleetHours: F.hours,
    overheadPerHour: F.hours > 0 ? overheadMonthly / F.hours : 0,
  };
}

/**
 * Everything a cost needs, worked out once per call.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function context(pricing, o = {}) {
  return {
    pricing,
    overrides: o,
    mr: modelRates(pricing, o),
    br: browserRates(pricing, o),
    af: attemptFactor(pricing, o),
    fleet: fleet(pricing, o),
    daysPerMonth: pricing.daysPerMonth,
  };
}
/** @typedef {ReturnType<typeof context>} Ctx */

/**
 * Dollars for a number of input and output tokens at the selected model and cache share.
 * @param {number} inputTokens
 * @param {number} outputTokens
 * @param {Ctx} ctx
 */
export function tokenCost(inputTokens, outputTokens, ctx) {
  return (inputTokens / 1e6) * ctx.mr.input + (outputTokens / 1e6) * ctx.mr.output;
}

/* ------------------------------------------------------------------ cost of a block of usage */

/**
 * What one block of usage costs, line by line.
 * @param {Usage | undefined} usage
 * @param {Ctx} ctx
 * @returns {Cost}
 */
export function usageCost(usage, ctx) {
  const P = ctx.pricing.primitives;
  const u = usage || {};
  /** @type {Line[]} */
  const lines = [];
  /** @param {string} group @param {string} label @param {number} amount @param {string} [detail] */
  const add = (group, label, amount, detail) => {
    if (amount && Number.isFinite(amount)) lines.push({ group, label, amount, detail });
  };

  let browserHours = 0, proxy = 0, proxyGb = 0, solves = 0;
  for (const use of u.visits || []) {
    const v = resolveVisit(use, ctx.pricing);
    const n = (use.count ?? 1) * ctx.af;
    if (!n) continue;
    add('model', `${v.name}, tokens`, n * tokenCost(v.inputTokens, v.outputTokens, ctx),
      `${num(n)} x ${tokens(v.inputTokens)} in, ${tokens(v.outputTokens)} out`);
    const hours = (n * v.minutes) / 60;
    const rate = v.mode === 'headless' ? ctx.br.headless : ctx.br.headful;
    add('browser', `${v.name}, browser`, hours * rate, `${num(n * v.minutes)} min ${v.mode} at ${money(rate)} an hour`);
    browserHours += hours;
    const gb = (n * (v.proxyMb || 0)) / 1024;
    proxyGb += gb; solves += n * (v.captchas || 0);
    proxy += gb * ctx.br.proxyPerGb + n * (v.captchas || 0) * ctx.br.captcha;
  }
  add('overhead', 'Browser plan, spread', browserHours * ctx.br.overheadPerHour,
    `${num(browserHours * 60)} min at ${money(ctx.br.overheadPerHour)} an hour (${money(ctx.br.overheadMonthly, 2)} a month over ${num(ctx.br.fleetHours)} fleet hours)`);
  add('proxy', 'Proxy data and CAPTCHAs', proxy, `${num(proxyGb * 1024)} MB, ${num(solves)} solves`);

  const W = P.wake;
  if (u.wakes) add('model', 'Wakes, tokens', u.wakes * tokenCost(W.inputTokens, W.outputTokens, ctx),
    `${num(u.wakes)} x ${tokens(W.inputTokens)} in, ${tokens(W.outputTokens)} out`);
  if (u.analysis) add('model', 'Analysis, tokens', tokenCost(u.analysis.inputTokens, u.analysis.outputTokens, ctx),
    `${tokens(u.analysis.inputTokens)} in, ${tokens(u.analysis.outputTokens)} out`);

  const ph = P.phone;
  const callOut = u.callMinutesOut || 0, callIn = u.callMinutesIn || 0;
  if (callOut || callIn) {
    add('phone', 'Call minutes', callOut * val(ph.callMinuteOut) + callIn * val(ph.callMinuteIn),
      `${num(callOut)} out, ${num(callIn)} in`);
    add('phone', 'Voice relay and recording', (callOut + callIn) * (val(ph.voiceRelayMinute) + val(ph.recordingMinute)),
      `${num(callOut + callIn)} min`);
    const ct = ph.callTokensPerMinute;
    add('model', 'Calls, tokens', (callOut + callIn) * tokenCost(ct.inputTokens, ct.outputTokens, ctx),
      `${num(callOut + callIn)} min x ${tokens(ct.inputTokens)} in, ${tokens(ct.outputTokens)} out`);
  }
  const numberMonths = (u.numbers || 0) + (u.numberDays || 0) / ctx.daysPerMonth;
  add('phone', 'Phone numbers', numberMonths * val(ph.numberMonthly),
    u.numberDays ? `${num(u.numberDays)} number-days` : `${num(u.numbers || 0)} held`);
  add('phone', 'Texts', (u.textsOut || 0) * val(ph.textOut) + (u.textsIn || 0) * val(ph.textIn),
    `${num(u.textsOut || 0)} out, ${num(u.textsIn || 0)} in`);

  const em = P.email;
  add('email', 'Inboxes', (u.inboxes || 0) * val(em.inboxMonthly), `${num(u.inboxes || 0)} held`);
  add('email', 'Emails', (u.emailsOut || 0) * val(em.send) + (u.emailsIn || 0) * val(em.receive),
    `${num(u.emailsOut || 0)} sent, ${num(u.emailsIn || 0)} received`);

  const ms = P.messaging;
  add('messaging', 'iMessage lines', (u.imessageLines || 0) * val(ms.imessageLineMonthly), `${num(u.imessageLines || 0)} held`);
  add('messaging', 'WhatsApp messages', (u.whatsappOut || 0) * val(ms.whatsappUtilityUS), `${num(u.whatsappOut || 0)} sent`);

  const sb = P.sandbox;
  add('sandbox', 'Sandbox', (u.sandboxVcpuHours || 0) * val(sb.vcpuHour) + (u.sandboxGibHours || 0) * val(sb.gibHour),
    `${num(u.sandboxVcpuHours || 0)} vCPU-hours, ${num(u.sandboxGibHours || 0)} GiB-hours`);
  add('log', 'Event log', (u.events || 0) * val(P.eventLog.perEvent), `${num(u.events || 0)} events`);

  return summarise(lines);
}

/**
 * @param {Line[]} lines
 * @returns {Cost}
 */
function summarise(lines) {
  /** @type {Record<string, number>} */
  const groups = {};
  let total = 0;
  for (const l of lines) { groups[l.group] = (groups[l.group] || 0) + l.amount; total += l.amount; }
  return { total, lines, groups };
}

/**
 * @param {Cost} c
 * @param {number} k
 * @param {string} [prefix]
 * @returns {Line[]}
 */
function scaleLines(c, k, prefix) {
  return c.lines.map((l) => ({ ...l, label: prefix ? `${prefix}: ${l.label}` : l.label, amount: l.amount * k }));
}

/* ------------------------------------------------------------------ blueprints */

/**
 * What one run of a blueprint costs, line by line. `runId` picks an extra run type (such as 'checkout').
 * @param {Blueprint} blueprint
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @param {string} [runId]
 * @returns {Cost}
 */
export function costPerRun(blueprint, pricing, o = {}, runId) {
  const ctx = context(pricing, o);
  const usage = runId ? blueprint.usage.runs?.[runId] : blueprint.usage.run;
  return usageCost(usage, ctx);
}

/**
 * Runs a month for a frequency key or a number, over a tier's period.
 * @param {Pricing} pricing
 * @param {{every?:string, runsPerMonth?:number}} r
 * @param {number} period fraction of a month the tier lasts
 */
function runsFor(pricing, r, period) {
  if (r.every === 'once') return 1;
  const perMonth = r.runsPerMonth ?? (r.every ? pricing.frequencies[r.every]?.runsPerMonth : 0) ?? 0;
  return perMonth * period;
}

/**
 * What a tier costs us a month at full use, split into its parts:
 *   q x (runs x items x cost per run + extra runs + monthly upkeep per unit + setup spread) + account upkeep.
 * A one-off tier (every 'once', or `days` set) counts its setup in full and its upkeep for its days only.
 * @param {Blueprint} blueprint
 * @param {Tier} tier
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @param {Ctx} [ctxIn]
 */
export function tierCost(blueprint, tier, pricing, o = {}, ctxIn) {
  const ctx = ctxIn || context(pricing, o);
  const U = blueprint.usage;
  const q = tier.q ?? 1;
  const items = tier.items ?? 1;
  const oneOff = tier.every === 'once' || tier.days != null;
  const period = tier.days != null ? tier.days / ctx.daysPerMonth : 1;
  const runs = runsFor(pricing, tier, period);

  /** @type {{key:string, label:string, amount:number, detail:string}[]} */
  const parts = [];
  /** @type {Line[]} */
  let lines = [];

  const run = usageCost(U.run, ctx);
  const nRuns = q * runs * items;
  parts.push({ key: 'run', label: 'Runs', amount: nRuns * run.total, detail: `${num(nRuns)} runs at ${money(run.total)}` });
  lines = lines.concat(scaleLines(run, nRuns));

  for (const e of tier.extra || []) {
    const c = usageCost(U.runs?.[e.run], ctx);
    const n = q * runsFor(pricing, e, period) * (e.items ?? 1);
    parts.push({ key: `extra:${e.run}`, label: `Extra runs (${e.run})`, amount: n * c.total, detail: `${num(n)} runs at ${money(c.total)}` });
    lines = lines.concat(scaleLines(c, n));
  }
  if (U.monthly) {
    const c = usageCost(U.monthly, ctx);
    const k = q * period;
    parts.push({ key: 'monthly', label: 'Upkeep per unit', amount: k * c.total, detail: `${num(q)} x ${money(c.total)} a month${period !== 1 ? ` x ${num(period)} of a month` : ''}` });
    lines = lines.concat(scaleLines(c, k));
  }
  if (U.setup) {
    const c = usageCost(U.setup, ctx);
    const spread = oneOff ? 1 : 1 / (blueprint.setupMonths || 1);
    const k = q * spread;
    parts.push({ key: 'setup', label: 'Setup', amount: k * c.total, detail: oneOff ? `${num(q)} x ${money(c.total)} once` : `${num(q)} x ${money(c.total)} spread over ${blueprint.setupMonths} months` });
    lines = lines.concat(scaleLines(c, k));
  }
  if (U.account) {
    const c = usageCost(U.account, ctx);
    parts.push({ key: 'account', label: 'Account upkeep', amount: period * c.total, detail: `${money(c.total)} a month${period !== 1 ? ` x ${num(period)} of a month` : ''}` });
    lines = lines.concat(scaleLines(c, period));
  }
  const s = summarise(lines);
  return { q, items, runs, period, oneOff, cost: s.total, parts, groups: s.groups, lines: s.lines };
}

/**
 * Round a worked-out price up to the next price on the ladder.
 * @param {number} raw
 * @param {Pricing} pricing
 */
export function roundPrice(raw, pricing) {
  if (!(raw > 0)) return 0;
  const r = pricing.rounding;
  for (const p of r.ladder) if (p >= raw - 1e-9) return p;
  const step = r.beyond?.step ?? 1000;
  return Math.ceil((raw + 1) / step) * step - 1;
}

/**
 * Fill a tier's `covers` template: {q}, {items}, {runs}, {every}, {noun}, {itemNoun}.
 * @param {Blueprint} blueprint
 * @param {Tier} tier
 * @param {Pricing} pricing
 */
export function describeTier(blueprint, tier, pricing) {
  const q = tier.q ?? 1, items = tier.items ?? 1;
  const noun = blueprint.noun ? blueprint.noun[q === 1 ? 0 : 1] : '';
  const itemNoun = blueprint.itemNoun ? blueprint.itemNoun[items === 1 ? 0 : 1] : '';
  const every = tier.every ? pricing.frequencies[tier.every]?.label ?? tier.every : '';
  return (tier.covers || '')
    .replaceAll('{q}', num(q))
    .replaceAll('{items}', num(items))
    .replaceAll('{runs}', num(tier.runsPerMonth ?? 0))
    .replaceAll('{every}', every)
    .replaceAll('{noun}', noun)
    .replaceAll('{itemNoun}', itemNoun);
}

/**
 * A tier's price: its cost at full use over (1 - target margin), rounded up to the ladder. The first tier is free.
 * @param {Blueprint} blueprint
 * @param {Tier} tier
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @param {Ctx} [ctxIn]
 */
export function tierPrice(blueprint, tier, pricing, o = {}, ctxIn) {
  const ctx = ctxIn || context(pricing, o);
  const c = tierCost(blueprint, tier, pricing, o, ctx);
  const target = tier.free ? null : tier.margin ?? 0;
  const raw = tier.free ? 0 : c.cost / (1 - /** @type {number} */ (target));
  const price = tier.free ? 0 : roundPrice(raw, pricing);
  const enterprise = !tier.free && price > pricing.rounding.enterpriseAbove;
  const margin = price > 0 ? (price - c.cost) / price : null;
  return {
    name: tier.name,
    for: tier.for,
    covers: describeTier(blueprint, tier, pricing),
    featured: !!tier.featured,
    free: !!tier.free,
    target,
    raw,
    price,
    enterprise,
    margin,
    ...c,
  };
}

/**
 * Every tier of a blueprint, priced.
 * @param {Blueprint} blueprint
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function allTiers(blueprint, pricing, o = {}) {
  const ctx = context(pricing, o);
  return blueprint.tiers.map((t) => tierPrice(blueprint, t, pricing, o, ctx));
}

/* ------------------------------------------------------------------ pieces and plans */

/**
 * @param {{path?:string, browser?:'headful'|'headless', model?:'input'|'output', x?:number}} w
 * @param {Ctx} ctx
 */
function wholesaleTerm(w, ctx) {
  const k = w.x ?? 1;
  if (w.path) return k * val(getPath(ctx.pricing.primitives, w.path));
  if (w.browser) return k * ctx.br[w.browser];
  if (w.model) return k * ctx.mr[w.model];
  return 0;
}

/**
 * Each retail piece beside what it costs us, so the margin on every piece is visible.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function pieceMargins(pricing, o = {}) {
  const ctx = context(pricing, o);
  return pricing.pieces.map((/** @type {any} */ p) => {
    const wholesale = (p.wholesale || []).reduce((/** @type {number} */ s, /** @type {any} */ w) => s + wholesaleTerm(w, ctx), 0);
    let retail = p.retail ?? 0;
    if (p.retailMarkup != null) retail = wholesale * (1 + p.retailMarkup);
    if (p.retailPlus != null) retail = wholesale + p.retailPlus;
    const margin = retail > 0 ? (retail - wholesale) / retail : null;
    let once = null;
    if (p.once) {
      const w1 = (p.once.wholesale || []).reduce((/** @type {number} */ s, /** @type {any} */ w) => s + wholesaleTerm(w, ctx), 0);
      once = { retail: p.once.retail, wholesale: w1, margin: p.once.retail > 0 ? (p.once.retail - w1) / p.once.retail : null };
    }
    return { ...p, wholesaleValue: wholesale, retailValue: retail, margin, onceValue: once };
  });
}

/* ------------------------------------------------------------------ plans: a monthly credit */

/*
 * A paid plan's fee buys a monthly credit in dollars, spent at the plan's rates on any piece, model tokens included.
 * Past the credit, usage is billed at the same rates (pay as you go, no limit). Unused credit resets each month. Plans
 * differ by features and, on Scale, by lower rates (its `discount` rule); Free keeps fixed allowances; Enterprise is
 * set with the buyer. Blueprint plans are separate products and never draw on the credit.
 */

/**
 * @typedef {{off:number, marginFloor:number, roundUpSignificant?:number, pieces?:Record<string, {retailMarkup?:number}>}} Discount
 * @typedef {{id:string, name:string, monthly:number|null, from?:number, credit:number|null, billing?:string[],
 *   featured?:boolean, allowances?:Record<string, number>, freeNumber?:{textsIn:number, callMinutesIn:number},
 *   discount?:Discount, features?:{register?:{kind:string, campaigns:number, wholesale:string}} & Record<string, any>,
 *   note?:string}} Plan
 * @typedef {{id:string, name:string, monthly:number|null, from:number|null, credit:number, billing:string[],
 *   featured:boolean, allowances:Record<string, number>, freeNumber:{textsIn:number, callMinutesIn:number}|null,
 *   features:Record<string, any>, rates:Record<string, number>, once:Record<string, number>}} BillingPlan
 * @typedef {{id:string, name:string, unit:string, displayPer:number, displayUnit:string, wholesale:number, list:number,
 *   rate:number, margin:number|null, listMargin:number|null, floor:number|null, rule:string, discounted:boolean, off:number,
 *   plus:number|null, markup:number|null,
 *   once:{list:number, rate:number, wholesale:number, margin:number|null}|null}} PlanRate
 */

/** @param {Pricing} pricing @param {string} id @returns {Plan} */
export function findPlan(pricing, id) {
  return pricing.plans.find((/** @type {Plan} */ p) => p.id === id);
}

/**
 * Round up to n significant figures, so a rate raised to its floor never drops back under it.
 * @param {number} x
 * @param {number} n
 */
export function roundUpSig(x, n) {
  if (!(x > 0) || !n) return x;
  const k = 10 ** (n - 1 - Math.floor(Math.log10(x)));
  return Math.ceil(x * k - 1e-9) / k;
}

/**
 * One rate under a discount: list less `off`, never below wholesale / (1 - floor), never above list, rounded up.
 * @param {number} list
 * @param {number} wholesale
 * @param {Discount} d
 */
function discountedRate(list, wholesale, d) {
  if (!(list > 0)) return list;
  const r = roundUpSig(Math.max(list * (1 - d.off), wholesale / (1 - d.marginFloor)), d.roundUpSignificant ?? 3);
  return Math.min(r, list);
}

/**
 * Each piece's rate on a plan, in dollars per the piece's unit, beside its list rate, wholesale and margin. A plan with
 * no `discount` bills list rates (each piece's retail). Under a discount (Scale): list less `off`, never below the rate
 * that keeps `marginFloor` over wholesale and never above list, rounded up to `roundUpSignificant` figures; a piece
 * already under the floor at list stays at list. A pass-through piece (retailPlus: WhatsApp) takes the discount off the
 * fee we add. A piece named in `discount.pieces` follows its own rule (model tokens: cost plus 20%).
 * @param {Plan|string} plan a plan from pricing.plans, or its id
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @returns {PlanRate[]}
 */
export function planRates(plan, pricing, o = {}) {
  const pl = typeof plan === 'string' ? findPlan(pricing, plan) : plan;
  const d = pl?.discount;
  return pieceMargins(pricing, o).map((/** @type {any} */ p) => {
    const w = p.wholesaleValue;
    const list = p.retailValue;
    let rate = list, floor = /** @type {number|null} */ (null), rule = 'list';
    if (d) {
      const own = d.pieces?.[p.id] ?? {};
      if (own.retailMarkup != null) {
        rate = w * (1 + own.retailMarkup);
        floor = 1 - 1 / (1 + own.retailMarkup);
        rule = 'markup';
      } else if (p.retailPlus != null) {
        floor = d.marginFloor;
        const plus = roundUpSig(p.retailPlus * (1 - d.off), d.roundUpSignificant ?? 3);
        rate = Math.min(list, Math.max(w + plus, w / (1 - floor)));
        rule = 'plus';
      } else {
        floor = d.marginFloor;
        rate = discountedRate(list, w, d);
        rule = rate < list - 1e-12 ? 'discount' : 'list';
      }
    }
    let once = null;
    if (p.onceValue) {
      const r1 = d ? discountedRate(p.onceValue.retail, p.onceValue.wholesale, d) : p.onceValue.retail;
      once = { list: p.onceValue.retail, rate: r1, wholesale: p.onceValue.wholesale, margin: r1 > 0 ? (r1 - p.onceValue.wholesale) / r1 : null };
    }
    return {
      id: p.id, name: p.name, unit: p.unit, displayPer: p.displayPer ?? 1, displayUnit: p.displayUnit ?? p.unit,
      wholesale: w, list, rate, margin: rate > 0 ? (rate - w) / rate : null, listMargin: p.margin,
      floor, rule, discounted: rate < list - 1e-12, off: list > 0 ? 1 - rate / list : 0,
      plus: p.retailPlus != null ? rate - w : null, markup: p.retailMarkup != null ? (d?.pieces?.[p.id]?.retailMarkup ?? p.retailMarkup) : null,
      once,
    };
  });
}

/**
 * A plan made ready to bill: its fee, credit, allowances, features and the rate of every piece, as plain data (it
 * survives JSON), so a page can work out bills with monthlyBill() without the rest of pricing.json.
 * @param {Plan|string} plan
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @returns {BillingPlan}
 */
export function billingPlan(plan, pricing, o = {}) {
  const pl = typeof plan === 'string' ? findPlan(pricing, plan) : plan;
  /** @type {Record<string, number>} */ const rates = {};
  /** @type {Record<string, number>} */ const once = {};
  for (const r of planRates(pl, pricing, o)) {
    rates[r.id] = r.rate;
    if (r.once) once[r.id] = r.once.rate;
  }
  return {
    id: pl.id, name: pl.name, monthly: pl.monthly, from: pl.from ?? null, credit: pl.credit ?? 0,
    billing: pl.billing ?? ['monthly'], featured: !!pl.featured, allowances: pl.allowances ?? {},
    freeNumber: pl.freeNumber ?? null, features: pl.features ?? {}, rates, once,
  };
}

/**
 * Every plan made ready to bill.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @returns {BillingPlan[]}
 */
export function billingPlans(pricing, o = {}) {
  return pricing.plans.map((/** @type {Plan} */ pl) => billingPlan(pl, pricing, o));
}

/**
 * A month's bill on one plan. `usage` counts each piece in its own unit, keyed by piece id
 * ({ inbox: 10, email: 20000, browser: 100, register: 1 }); `register` counts the US texting campaigns held.
 * Free's allowances and a plan's included campaigns come off first; the rest is priced at the plan's rates; the credit
 * pays for it up to its size and anything past it is pay as you go, at the same rates. Unused credit is lost at the
 * month's end. Each line is rounded to the cent, as a bill is. Free fits only when nothing goes past its allowances
 * (it holds no card). `plan` is a plan id, a plan from pricing.plans, or an entry of billingPlans() (then `pricing`
 * is not needed). Enterprise comes back as `contract`, with no total.
 * @param {Record<string, number>} usage
 * @param {Plan|BillingPlan|string} plan
 * @param {Pricing} [pricing]
 * @param {Overrides} [o]
 */
export function monthlyBill(usage, plan, pricing, o = {}) {
  const bp = plan && typeof plan === 'object' && 'rates' in plan
    ? /** @type {BillingPlan} */ (plan)
    : billingPlan(/** @type {Plan|string} */ (plan), /** @type {Pricing} */ (pricing), o);
  /** @type {{piece:string, n:number, free:number, billable:number, rate:number, cents:number, amount:number}[]} */
  const lines = [];
  if (bp.monthly == null) {
    return { plan: bp.id, name: bp.name, contract: true, fee: null, credit: null, lines, used: 0, creditUsed: 0, unused: 0, payg: 0, total: null, fits: false };
  }
  for (const [id, raw] of Object.entries(usage || {})) {
    const n = Math.max(Number(raw) || 0, 0);
    if (!n) continue;
    if (!(id in bp.rates)) throw new Error(`monthlyBill: unknown piece "${id}"`);
    const free = (bp.allowances[id] ?? 0) + (id === 'register' ? bp.features.register?.campaigns ?? 0 : 0);
    const billable = Math.max(n - free, 0);
    const cents = Math.round(billable * bp.rates[id] * 100);
    lines.push({ piece: id, n, free: Math.min(n, free), billable, rate: bp.rates[id], cents, amount: cents / 100 });
  }
  const usedC = lines.reduce((s, l) => s + l.cents, 0);
  const creditC = Math.round(bp.credit * 100);
  const creditUsedC = Math.min(usedC, creditC);
  const paygC = usedC - creditUsedC;
  return {
    plan: bp.id, name: bp.name, contract: false, fee: bp.monthly, credit: bp.credit, lines,
    used: usedC / 100, creditUsed: creditUsedC / 100, unused: (creditC - creditUsedC) / 100, payg: paygC / 100,
    total: (Math.round(bp.monthly * 100) + paygC) / 100,
    fits: bp.monthly > 0 || lines.every((l) => l.billable === 0 || l.rate === 0),
  };
}

/**
 * The plan whose bill is lowest for a month's usage, and every plan's bill. Enterprise is set with the buyer, so it is
 * never in the sum; Free counts only when the usage fits its allowances. Ties go to the plan listed first.
 * `plans` is pricing.json or the output of billingPlans().
 * @param {Record<string, number>} usage
 * @param {Pricing|BillingPlan[]} plans
 * @param {Overrides} [o]
 */
export function cheapestPlan(usage, plans, o = {}) {
  /** @type {BillingPlan[]} */
  const list = Array.isArray(plans) ? plans : billingPlans(plans, o);
  const bills = list.filter((p) => p.monthly != null).map((p) => monthlyBill(usage, p));
  /** @type {ReturnType<typeof monthlyBill> | null} */
  let best = null;
  for (const b of bills) if (b.fits && (best == null || /** @type {number} */ (b.total) < /** @type {number} */ (best.total) - 1e-9)) best = b;
  return { best, bills };
}

/**
 * Each plan's margin. Free: its fixed allowances at full use. A paid plan, when its whole credit is spent:
 *   worst case: the credit spent on the lowest-margin piece at the plan's rates (model tokens), plus the monthly fees
 *     of its included US texting campaigns;
 *   typical: the credit spent on pricing.credit.typicalMonth's mix, scaled to fill the credit, plus the same fees.
 * `creditOnly` leaves the campaign fees out. Pay as you go past the credit earns the typical mix's margin at the
 * plan's rates (`typical.mixMargin`). Unused credit (lost at the month's end) only adds margin and is not counted.
 * Enterprise is set with the buyer: no margin here.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function planMargins(pricing, o = {}) {
  const ctx = context(pricing, o);
  const P = pricing.primitives;
  const pieces = Object.fromEntries(pieceMargins(pricing, o).map((/** @type {any} */ p) => [p.id, p]));
  /** @type {Record<string, number>} */
  const mix = pricing.credit?.typicalMonth?.usage ?? {};
  return pricing.plans.map((/** @type {Plan} */ plan) => {
    if (plan.monthly == null) return { ...plan, contract: true, cost: null, margin: null, lines: [], worst: null, typical: null, featureCost: 0 };
    if (!(Number(plan.credit) > 0)) {
      const lines = Object.entries(plan.allowances || {}).map(([k, n]) => {
        const unit = pieces[k]?.wholesaleValue ?? 0;
        return { piece: k, name: pieces[k]?.name ?? k, n: Number(n), unit, amount: Number(n) * unit };
      });
      if (plan.freeNumber) {
        const ph = P.phone;
        lines.push({ piece: 'freeNumber', name: 'Texts and call minutes received on the free number', n: 1, unit: 0,
          amount: plan.freeNumber.textsIn * val(ph.textIn) + plan.freeNumber.callMinutesIn * val(ph.callMinuteIn) });
      }
      const cost = lines.reduce((s, l) => s + l.amount, 0);
      return { ...plan, contract: false, cost, margin: null, lines, worst: null, typical: null, featureCost: 0, ctxModel: ctx.mr.model.id };
    }
    const fee = /** @type {number} */ (plan.monthly);
    const credit = /** @type {number} */ (plan.credit);
    const rates = planRates(plan, pricing, o);
    const reg = plan.features?.register;
    const featureCost = reg ? reg.campaigns * val(getPath(P, reg.wholesale)) : 0;
    const lines = reg ? [{ piece: 'register', name: `${reg.campaigns} ${reg.kind} US texting campaign${reg.campaigns === 1 ? '' : 's'}, monthly fee`, n: reg.campaigns, unit: val(getPath(P, reg.wholesale)), amount: featureCost }] : [];
    const margin = (/** @type {number} */ cost) => (fee - cost) / fee;

    const low = rates.filter((r) => r.rate > 0 && r.margin != null).reduce((a, r) => (/** @type {number} */ (r.margin) < /** @type {number} */ (a.margin) ? r : a));
    const worstCredit = credit * (1 - /** @type {number} */ (low.margin));
    const worst = { piece: low.id, name: low.name, pieceMargin: low.margin, cost: worstCredit + featureCost, margin: margin(worstCredit + featureCost), creditOnly: margin(worstCredit) };

    let revenue = 0, wholesale = 0;
    for (const [id, n] of Object.entries(mix)) {
      const r = rates.find((x) => x.id === id);
      if (!r || id === 'register') continue;
      revenue += Number(n) * r.rate;
      wholesale += Number(n) * r.wholesale;
    }
    const typCredit = revenue > 0 ? credit * (wholesale / revenue) : 0;
    const typical = { mixMargin: revenue > 0 ? 1 - wholesale / revenue : null, cost: typCredit + featureCost, margin: margin(typCredit + featureCost), creditOnly: margin(typCredit) };

    return { ...plan, contract: false, cost: worst.cost, margin: worst.margin, lines, worst, typical, featureCost, ctxModel: ctx.mr.model.id };
  });
}

/* ------------------------------------------------------------------ the calculator */

/**
 * One store check (a journey): the sign-up and checkout visits, plus anything the calculator adds.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @param {{visits?:VisitUse[], personMinutes?:number, personRate?:number, otherFixedMonthly?:number}} [opts]
 */
export function journeyCost(pricing, o = {}, opts = {}) {
  const ctx = context(pricing, o);
  const visits = opts.visits ?? pricing.primitives.overhead.fleet.journeyVisits.map((/** @type {string} */ type) => ({ type }));
  const base = usageCost({ visits }, ctx);
  const lines = [...base.lines];
  if (opts.personMinutes) lines.push({ group: 'people', label: 'Person hand-overs', amount: (opts.personMinutes / 60) * (opts.personRate ?? 0), detail: `${num(opts.personMinutes)} min` });
  if (opts.otherFixedMonthly) lines.push({ group: 'fixed', label: 'Other fixed costs', amount: opts.otherFixedMonthly / ctx.fleet.journeys, detail: `${money(opts.otherFixedMonthly, 0)} a month over ${num(ctx.fleet.journeys)} journeys` });
  const s = summarise(lines);
  return { ...s, journeys: ctx.fleet.journeys, fleet: ctx.fleet, browser: ctx.br, model: ctx.mr, attemptFactor: ctx.af };
}

/**
 * The same figure under every model preset, everything else unchanged.
 * @param {Pricing} pricing
 * @param {Overrides} o
 * @param {(o:Overrides) => number} f
 */
export function byModel(pricing, o, f) {
  return pricing.primitives.models.list.map((/** @type {Model} */ m) => ({
    id: m.id, name: m.short ?? m.name, index: m.index, value: f({ ...o, model: m.id, modelPrices: undefined }),
  }));
}

/**
 * The same figure under every browser, everything else unchanged.
 * @param {Pricing} pricing
 * @param {Overrides} o
 * @param {(o:Overrides) => number} f
 */
export function byBrowser(pricing, o, f) {
  return pricing.primitives.browsers.list.map((/** @type {Browser} */ b) => ({
    id: b.id, name: b.name, warn: !!b.warn, value: f({ ...o, browser: b.id, browserRates: undefined }),
  }));
}

/**
 * The cheapest paid tier and the featured tier of every blueprint, for lists and navigation.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function summary(pricing, o = {}) {
  return pricing.blueprints.map((/** @type {Blueprint} */ bp) => {
    const tiers = allTiers(bp, pricing, o);
    return { id: bp.id, name: bp.name, job: bp.job, tiers, featured: tiers.find((t) => t.featured) || tiers[tiers.length - 1] };
  });
}

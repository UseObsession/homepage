// @ts-check
/**
 * Obsession pricing engine.
 *
 * Pure functions over pricing.json. There is one price list: the pieces. Plans sell a monthly credit in dollars, spent
 * at the plan's rates on any piece (planRates, monthlyBill, cheapestPlan). A blueprint run draws on that credit like
 * any piece: what a typical month of a blueprint costs a buyer is
 *   what its runs use (in pieces) x the plan's piece rates, with model tokens at cost plus their markup (blueprintMonth),
 * and what it costs us is primitives (what we pay) x the same usage (tierCost). The first run of every blueprint is free.
 * Nothing here holds a price. Change a number in pricing.json, or pass an override (the model, the browser,
 * the cache share, the fleet volume, the plan), and every cost and estimate follows.
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
 * A scenario: a typical month of a blueprint (the first is its free run), never a plan to buy.
 * @typedef {{name:string, for?:string, covers:string, q?:number, items?:number, every?:string, runsPerMonth?:number,
 *   days?:number, free?:boolean, featured?:boolean, extra?:ExtraRun[]}} Tier
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
 * `plan` picks the piece rates a blueprint month is priced at (a plan id, such as 'scale'); list rates when left out.
 * @typedef {{model?:string, modelPrices?:{in:number, out:number, cached:number}, cacheShare?:number,
 *   browser?:string, browserRates?:Partial<Browser>, attempts?:number, failedShare?:number, fleetJourneys?:number,
 *   plan?:string}} Overrides
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

/* ------------------------------------------------------------------ what a block of usage uses, in pieces */

/**
 * What one block of usage uses, counted in the pieces a buyer is billed for, each in its own unit: browser hours
 * (a headless visit) or stealth browser hours (a headful one), phone numbers held (number-days / days a month), texts,
 * call minutes, inboxes, emails, iMessage lines, WhatsApp messages, sandbox vCPU and GiB hours, and events. Model tokens
 * are not counted in units: `modelCost` is what they cost us (visits, wakes, analysis and call tokens), taken from the
 * buyer's credit at cost plus the tokens' markup. `voiceCost` is a persona's own voice on a call (the speech relay and the
 * recording), which has no piece of its own and is billed the same way as model tokens. Proxy data and CAPTCHAs come
 * with the browser pieces (their home connection is included), and the browser plan fee is ours to carry.
 * @param {Usage | undefined} usage
 * @param {Ctx} ctx
 * @returns {{pieces:Record<string, number>, modelCost:number, voiceCost:number}}
 */
export function usagePieces(usage, ctx) {
  const P = ctx.pricing.primitives;
  const u = usage || {};
  /** @type {Record<string, number>} */
  const pieces = {};
  /** @param {string} id @param {number} n */
  const add = (id, n) => { if (n && Number.isFinite(n)) pieces[id] = (pieces[id] || 0) + n; };
  let modelCost = 0, voiceCost = 0;
  for (const use of u.visits || []) {
    const v = resolveVisit(use, ctx.pricing);
    const n = (use.count ?? 1) * ctx.af;
    if (!n) continue;
    modelCost += n * tokenCost(v.inputTokens, v.outputTokens, ctx);
    add(v.mode === 'headless' ? 'browser' : 'stealth', (n * v.minutes) / 60);
  }
  const W = P.wake;
  if (u.wakes) modelCost += u.wakes * tokenCost(W.inputTokens, W.outputTokens, ctx);
  if (u.analysis) modelCost += tokenCost(u.analysis.inputTokens, u.analysis.outputTokens, ctx);
  const ph = P.phone;
  const minutes = (u.callMinutesOut || 0) + (u.callMinutesIn || 0);
  if (minutes) {
    add('voice', minutes);
    voiceCost += minutes * (val(ph.voiceRelayMinute) + val(ph.recordingMinute));
    modelCost += minutes * tokenCost(ph.callTokensPerMinute.inputTokens, ph.callTokensPerMinute.outputTokens, ctx);
  }
  add('number', (u.numbers || 0) + (u.numberDays || 0) / ctx.daysPerMonth);
  add('sms', (u.textsOut || 0) + (u.textsIn || 0));
  add('inbox', u.inboxes || 0);
  add('email', (u.emailsOut || 0) + (u.emailsIn || 0));
  add('imessage', u.imessageLines || 0);
  add('whatsapp', u.whatsappOut || 0);
  add('sandbox', u.sandboxVcpuHours || 0);
  add('memory', u.sandboxGibHours || 0);
  add('log', u.events || 0);
  return { pieces, modelCost, voiceCost };
}

/* ------------------------------------------------------------------ blueprints */

/**
 * What one run of a blueprint costs us, line by line. `runId` picks an extra run type (such as 'checkout').
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
 * Runs a month for a frequency key or a number, over a scenario's period.
 * @param {Pricing} pricing
 * @param {{every?:string, runsPerMonth?:number}} r
 * @param {number} period fraction of a month the scenario lasts
 */
function runsFor(pricing, r, period) {
  if (r.every === 'once') return 1;
  const perMonth = r.runsPerMonth ?? (r.every ? pricing.frequencies[r.every]?.runsPerMonth : 0) ?? 0;
  return perMonth * period;
}

/**
 * A scenario's month as blocks of usage, each with how many times it counts:
 *   runs (q x runs x items), extra runs, upkeep per unit (q, for the period), setup (q, spread over setupMonths, in full
 *   on a one-off), account upkeep (for the period).
 * A one-off scenario (every 'once', or `days` set) counts its setup in full and its upkeep for its days only.
 * @param {Blueprint} blueprint
 * @param {Tier} tier
 * @param {Pricing} pricing
 * @param {Ctx} ctx
 */
export function scenarioBlocks(blueprint, tier, pricing, ctx) {
  const U = blueprint.usage;
  const q = tier.q ?? 1;
  const items = tier.items ?? 1;
  const oneOff = tier.every === 'once' || tier.days != null;
  const period = tier.days != null ? tier.days / ctx.daysPerMonth : 1;
  const runs = runsFor(pricing, tier, period);
  /** @type {{key:string, label:string, usage:Usage|undefined, k:number, detail:(each:number) => string}[]} */
  const blocks = [];
  const nRuns = q * runs * items;
  blocks.push({ key: 'run', label: 'Runs', usage: U.run, k: nRuns, detail: (each) => `${num(nRuns)} runs at ${money(each)}` });
  for (const e of tier.extra || []) {
    const n = q * runsFor(pricing, e, period) * (e.items ?? 1);
    blocks.push({ key: `extra:${e.run}`, label: `Extra runs (${e.run})`, usage: U.runs?.[e.run], k: n, detail: (each) => `${num(n)} runs at ${money(each)}` });
  }
  if (U.monthly) {
    const k = q * period;
    blocks.push({ key: 'monthly', label: 'Upkeep per unit', usage: U.monthly, k, detail: (each) => `${num(q)} x ${money(each)} a month${period !== 1 ? ` x ${num(period)} of a month` : ''}` });
  }
  if (U.setup) {
    const spread = oneOff ? 1 : 1 / (blueprint.setupMonths || 1);
    blocks.push({ key: 'setup', label: 'Setup', usage: U.setup, k: q * spread, detail: (each) => (oneOff ? `${num(q)} x ${money(each)} once` : `${num(q)} x ${money(each)} spread over ${blueprint.setupMonths} months`) });
  }
  if (U.account) {
    blocks.push({ key: 'account', label: 'Account upkeep', usage: U.account, k: period, detail: (each) => `${money(each)} a month${period !== 1 ? ` x ${num(period)} of a month` : ''}` });
  }
  return { q, items, runs, period, oneOff, blocks };
}

/**
 * What a scenario costs us at full use, split into its parts (wholesale: primitives x usage, the browser plan fee
 * spread included).
 * @param {Blueprint} blueprint
 * @param {Tier} tier
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @param {Ctx} [ctxIn]
 */
export function tierCost(blueprint, tier, pricing, o = {}, ctxIn) {
  const ctx = ctxIn || context(pricing, o);
  const s0 = scenarioBlocks(blueprint, tier, pricing, ctx);
  /** @type {{key:string, label:string, amount:number, detail:string}[]} */
  const parts = [];
  /** @type {Line[]} */
  let lines = [];
  for (const b of s0.blocks) {
    const c = usageCost(b.usage, ctx);
    parts.push({ key: b.key, label: b.label, amount: b.k * c.total, detail: b.detail(c.total) });
    lines = lines.concat(scaleLines(c, b.k));
  }
  const s = summarise(lines);
  const { blocks, ...rest } = s0;
  return { ...rest, cost: s.total, parts, groups: s.groups, lines: s.lines };
}

/**
 * Fill a scenario's `covers` template: {q}, {items}, {runs}, {every}, {noun}, {itemNoun}.
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
 * Round an estimate the way the site says it ("about $230 a month"): to the nearest dollar, or under
 * `estimates.wholeFrom` dollars to the nearest `estimates.smallStep` (never below it, so a month that costs anything
 * never reads as $0).
 * @param {number} x
 * @param {Pricing} pricing
 */
export function roundEstimate(x, pricing) {
  if (!(x > 0)) return 0;
  const e = pricing.estimates ?? {};
  const step = x >= (e.wholeFrom ?? 10) ? (e.step ?? 1) : (e.smallStep ?? 0.5);
  return Math.max(Math.round(x / step) * step, step);
}

/**
 * Each piece's rate a blueprint month is priced at: the plan's (Overrides.plan), or list rates. Tokens carry their markup.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function pieceRates(pricing, o = {}) {
  const plan = o.plan ? findPlan(pricing, o.plan) : null;
  /** @type {Plan} */
  const pl = plan ?? { id: 'list', name: 'List rates', monthly: 0, credit: 0 };
  return { plan: plan ? plan.id : 'list', rates: Object.fromEntries(planRates(pl, pricing, o).map((r) => [r.id, r])) };
}

/**
 * What a typical month of a blueprint costs the buyer, at the piece rates: what the scenario's runs use, counted in
 * pieces (usagePieces over scenarioBlocks), x each piece's rate on the plan (Overrides.plan, list rates when left out),
 * with model tokens and a persona's voice taken at cost plus the tokens' markup. Paid from the plan's credit, then at
 * list rates, like any piece: on a plan, `total` is the month paid from its credit, and `fitsCredit` says whether the
 * whole month fits inside that credit. Beside it, what the month costs us (tierCost) and our margin on it. The first scenario is
 * the free run: `price` is 0 and `total` is what it would have cost.
 * `scenario` is a scenario of the blueprint, its index or its name.
 * @param {Blueprint} blueprint
 * @param {Tier|number|string} scenario
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @param {Ctx} [ctxIn]
 */
export function blueprintMonth(blueprint, scenario, pricing, o = {}, ctxIn) {
  const tier = typeof scenario === 'number' ? blueprint.tiers[scenario]
    : typeof scenario === 'string' ? blueprint.tiers.find((t) => t.name === scenario) : scenario;
  if (!tier) throw new Error(`blueprintMonth: ${blueprint.id} has no scenario ${String(scenario)}`);
  const ctx = ctxIn || context(pricing, o);
  const { rates, plan } = pieceRates(pricing, o);
  const s0 = scenarioBlocks(blueprint, tier, pricing, ctx);
  /** @type {Record<string, number>} */
  const n = {};
  let modelCost = 0, voiceCost = 0;
  for (const b of s0.blocks) {
    const u = usagePieces(b.usage, ctx);
    for (const [id, x] of Object.entries(u.pieces)) n[id] = (n[id] || 0) + x * b.k;
    modelCost += u.modelCost * b.k;
    voiceCost += u.voiceCost * b.k;
  }
  const markup = rates.tokens?.markup ?? 0;
  /** @type {{id:string, name:string, n:number|null, unit:string, rate:number|null, amount:number, cost:number}[]} */
  const lines = Object.entries(n).map(([id, x]) => {
    const r = rates[id];
    if (!r) throw new Error(`blueprintMonth: no piece "${id}" in pricing.json`);
    return { id, name: r.name, n: x, unit: r.unit, rate: r.rate, amount: x * r.rate, cost: x * r.wholesale };
  });
  if (modelCost) lines.push({ id: 'tokens', name: 'Model tokens', n: null, unit: `cost plus ${Math.round(markup * 100)}%`, rate: null, amount: modelCost * (1 + markup), cost: modelCost });
  if (voiceCost) lines.push({ id: 'voiceRelay', name: 'A persona’s own voice on calls', n: null, unit: `cost plus ${Math.round(markup * 100)}%`, rate: null, amount: voiceCost * (1 + markup), cost: voiceCost });
  const total = lines.reduce((s, l) => s + l.amount, 0);
  const ours = tierCost(blueprint, tier, pricing, o, ctx);
  const estimate = roundEstimate(total, pricing);
  /* A plan's lower rates apply only to usage paid from its credit: on a plan with a credit, the month at its rates is
     the month paid from that credit, and fitsCredit says whether the whole month fits inside it. */
  const planCredit = o.plan ? findPlan(pricing, o.plan)?.credit ?? null : null;
  return {
    name: tier.name,
    for: tier.for,
    covers: describeTier(blueprint, tier, pricing),
    featured: !!tier.featured,
    free: !!tier.free,
    plan,
    credit: planCredit,
    fitsCredit: planCredit == null ? null : total <= planCredit + 1e-9,
    q: s0.q, items: s0.items, runs: s0.runs, period: s0.period, oneOff: s0.oneOff,
    lines,
    /* What the month costs the buyer at the piece rates, unrounded, and as the site says it. */
    total,
    estimate,
    /* What the buyer pays: 0 for the free run. */
    price: tier.free ? 0 : estimate,
    /* What it costs us and our margin on the buyer's total (before rounding). */
    cost: ours.cost,
    margin: total > 0 ? (total - ours.cost) / total : null,
    parts: ours.parts,
    groups: ours.groups,
  };
}

/**
 * Every scenario of a blueprint: its free run and its typical months.
 * @param {Blueprint} blueprint
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function blueprintMonths(blueprint, pricing, o = {}) {
  const ctx = context(pricing, o);
  return blueprint.tiers.map((t) => blueprintMonth(blueprint, t, pricing, o, ctx));
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
 * Each retail piece beside what it costs us, so the margin on every piece is visible. `wholesaleValue` is what a unit
 * costs us at the margin, which the 25% floor is judged on. `costValue` adds, for a browser piece, the browser plan fee
 * spread over the fleet's hours: fixed overhead, like the server bill, shown for the record and never part of the floor
 * (founders, 22 Nov 2026).
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
    const spread = (p.wholesale || []).some((/** @type {any} */ w) => w.browser) ? ctx.br.overheadPerHour : 0;
    return { ...p, wholesaleValue: wholesale, costValue: wholesale + spread, retailValue: retail, margin, onceValue: once };
  });
}

/* ------------------------------------------------------------------ plans: a monthly credit */

/*
 * A paid plan's fee buys a monthly credit in dollars, spent at the plan's rates on any piece, model tokens included.
 * The plan's lower rates apply only to usage paid from its credit: past the credit, usage is billed at list rates on every
 * plan, up to any spend cap the buyer sets (founders, 22 Nov 2026). Unused credit resets each month. Plans
 * differ by features and by the rate ladder (founders, 22 Nov 2026): Free and Developer pay list rates, Startup 10% off
 * every piece and Scale 20% off (each plan's `discount`), model tokens and fixed-price pieces (the US texting
 * registration, `fixed: true`) never discounted; no plan includes any piece; Free keeps fixed allowances;
 * Enterprise is set with the buyer, from a first-month floor, monthly, with a yearly discount as an option. A blueprint
 * run draws on the credit at the piece rates like any piece (blueprintMonth).
 */

/**
 * @typedef {{off:number, except?:string[], rule?:string}} Discount
 * @typedef {{id:string, name:string, monthly:number|null, from?:number, credit:number|null, billing?:string[],
 *   featured?:boolean, allowances?:Record<string, number>, freeNumber?:{textsIn:number, callMinutesIn:number},
 *   discount?:Discount, features?:Record<string, any>, note?:string}} Plan
 * @typedef {{id:string, name:string, monthly:number|null, from:number|null, credit:number, billing:string[],
 *   featured:boolean, allowances:Record<string, number>, freeNumber:{textsIn:number, callMinutesIn:number}|null,
 *   features:Record<string, any>, rates:Record<string, number>, list:Record<string, number>, once:Record<string, number>}} BillingPlan
 * @typedef {{id:string, name:string, unit:string, displayPer:number, displayUnit:string, wholesale:number, list:number,
 *   cost:number, overhead:number, rate:number, margin:number|null, costMargin:number|null, listMargin:number|null, rule:string,
 *   fixed:boolean, discounted:boolean, off:number, plus:number|null, markup:number|null,
 *   once:{list:number, rate:number, wholesale:number, margin:number|null}|null}} PlanRate
 */

/** @param {Pricing} pricing @param {string} id @returns {Plan} */
export function findPlan(pricing, id) {
  return pricing.plans.find((/** @type {Plan} */ p) => p.id === id);
}

/**
 * Each piece's rate on a plan, in dollars per the piece's unit, beside its list rate, wholesale and margin. A plan with
 * no `discount` bills list rates (each piece's retail). Under a discount (Startup 10%, Scale 20%) every piece is its
 * list rate less `off`, its one-off fee too; a pass-through piece (retailPlus: WhatsApp) takes the discount off the fee
 * we add, never off Meta's. A piece in `discount.except` (model tokens) and a fixed-price piece (`fixed: true`, the US
 * texting registration, its one-off fee too) stay at list on every plan. `margin` is over wholesale, what a unit costs us
 * at the margin: the 25% floor is judged on it. `overhead` is the browser plan fee spread on a browser piece, fixed
 * overhead outside the floor; `cost` is wholesale plus it, and `costMargin` the margin after it, for the record.
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
    const off = d && !p.fixed && !(d.except ?? []).includes(p.id) && list > 0 ? d.off : 0;
    const rate = !off ? list : p.retailPlus != null ? w + p.retailPlus * (1 - off) : list * (1 - off);
    let once = null;
    if (p.onceValue) {
      const r1 = p.onceValue.retail * (1 - off);
      once = { list: p.onceValue.retail, rate: r1, wholesale: p.onceValue.wholesale, margin: r1 > 0 ? (r1 - p.onceValue.wholesale) / r1 : null };
    }
    return {
      id: p.id, name: p.name, unit: p.unit, displayPer: p.displayPer ?? 1, displayUnit: p.displayUnit ?? p.unit,
      wholesale: w, cost: p.costValue, overhead: p.costValue - w, list, rate,
      margin: rate > 0 ? (rate - w) / rate : null, costMargin: rate > 0 ? (rate - p.costValue) / rate : null, listMargin: p.margin,
      rule: off ? (p.retailPlus != null ? 'plus' : 'discount') : p.fixed ? 'fixed' : 'list', fixed: !!p.fixed, discounted: off > 0, off: list > 0 ? 1 - rate / list : 0,
      plus: p.retailPlus != null ? rate - w : null, markup: p.retailMarkup ?? null,
      once,
    };
  });
}

/**
 * What a plan's credit is worth at list rates: credit / (1 - its discount), for every piece but model tokens.
 * @param {Plan|string} plan
 * @param {Pricing} pricing
 */
export function creditWorth(plan, pricing) {
  const pl = typeof plan === 'string' ? findPlan(pricing, plan) : plan;
  return (pl?.credit ?? 0) / (1 - (pl?.discount?.off ?? 0));
}

/**
 * A plan made ready to bill: its fee, credit, allowances, features, the rate of every piece on it (`rates`, for usage paid
 * from the credit) and at list (`list`, for usage past the credit), as plain data (it survives JSON), so a page can work
 * out bills with monthlyBill() without the rest of pricing.json.
 * @param {Plan|string} plan
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @returns {BillingPlan}
 */
export function billingPlan(plan, pricing, o = {}) {
  const pl = typeof plan === 'string' ? findPlan(pricing, plan) : plan;
  /** @type {Record<string, number>} */ const rates = {};
  /** @type {Record<string, number>} */ const list = {};
  /** @type {Record<string, number>} */ const once = {};
  for (const r of planRates(pl, pricing, o)) {
    rates[r.id] = r.rate;
    list[r.id] = r.list;
    if (r.once) once[r.id] = r.once.rate;
  }
  return {
    id: pl.id, name: pl.name, monthly: pl.monthly, from: pl.from ?? null, credit: pl.credit ?? 0,
    billing: pl.billing ?? ['monthly'], featured: !!pl.featured, allowances: pl.allowances ?? {},
    freeNumber: pl.freeNumber ?? null, features: pl.features ?? {}, rates, list, once,
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
 * ({ inbox: 10, email: 20000, browser: 100, register: 1 }); `register` counts the active US texting campaigns, at the
 * same fixed monthly price on every plan (no plan includes one; a filing's one-off fee is `once` on the billing plan).
 * Free's allowances come off first; the rest is priced at the plan's rates (`used`) and at list (`listUsed`). The credit
 * pays for the month's usage at the plan's rates until it runs out; the share of the usage it doesn't cover is billed at
 * list rates (`payg`), the same on every plan: past a $100 credit on $130 of usage at Startup's rates, the remaining
 * 3/13 of that usage is billed at list (founders, 22 Nov 2026). Unused credit is lost at the month's end. Each line is
 * rounded to the cent, as a bill is. Free fits only when nothing goes past its allowances
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
  /** @type {{piece:string, n:number, free:number, billable:number, rate:number, cents:number, amount:number, listRate:number, listCents:number}[]} */
  const lines = [];
  if (bp.monthly == null) {
    return { plan: bp.id, name: bp.name, contract: true, fee: null, credit: null, lines, used: 0, listUsed: 0, creditUsed: 0, unused: 0, covered: 0, payg: 0, total: null, fits: false };
  }
  const listRates = bp.list ?? bp.rates;
  for (const [id, raw] of Object.entries(usage || {})) {
    const n = Math.max(Number(raw) || 0, 0);
    if (!n) continue;
    if (!(id in bp.rates)) throw new Error(`monthlyBill: unknown piece "${id}"`);
    const free = bp.allowances[id] ?? 0;
    const billable = Math.max(n - free, 0);
    const cents = Math.round(billable * bp.rates[id] * 100);
    const listRate = listRates[id] ?? bp.rates[id];
    const listCents = Math.round(billable * listRate * 100);
    lines.push({ piece: id, n, free: Math.min(n, free), billable, rate: bp.rates[id], cents, amount: cents / 100, listRate, listCents });
  }
  const usedC = lines.reduce((s, l) => s + l.cents, 0);
  const listUsedC = lines.reduce((s, l) => s + l.listCents, 0);
  const creditC = Math.round(bp.credit * 100);
  const creditUsedC = Math.min(usedC, creditC);
  /* The share of the month's usage the credit covers; the rest is billed at list. */
  const covered = usedC > 0 ? creditUsedC / usedC : 1;
  const paygC = usedC > creditC ? Math.round((1 - covered) * listUsedC) : 0;
  return {
    plan: bp.id, name: bp.name, contract: false, fee: bp.monthly, credit: bp.credit, lines,
    used: usedC / 100, listUsed: listUsedC / 100, creditUsed: creditUsedC / 100, unused: (creditC - creditUsedC) / 100, covered, payg: paygC / 100,
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
 * Each plan's margin, judged on the pieces (pricing.credit.marginExcludes leaves model tokens out: they are taken from
 * the credit at cost plus 10%, close to cost) over what they cost us at the margin (the browser plan fee is fixed
 * overhead and not counted). No plan includes any piece, so nothing is added to the credit's cost. Free: its fixed
 * allowances at full use. A paid plan, when its whole credit is spent:
 *   worst case: the credit spent on the lowest-margin judged piece at the plan's rates;
 *   typical: the credit spent on pricing.credit.typicalMonth's mix of judged pieces, scaled to fill the credit.
 * `typical.mixMargin` is the typical mix's margin at the plan's rates, on usage paid from the credit; usage past the
 * credit is billed at list rates and earns the list margins. Unused credit (lost at the month's end) only adds margin and
 * is not counted. Enterprise is set with the buyer: no margin here.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function planMargins(pricing, o = {}) {
  const ctx = context(pricing, o);
  const P = pricing.primitives;
  const pieces = Object.fromEntries(pieceMargins(pricing, o).map((/** @type {any} */ p) => [p.id, p]));
  /** @type {Record<string, number>} */
  const mix = pricing.credit?.typicalMonth?.usage ?? {};
  /** @type {string[]} */
  const excluded = pricing.credit?.marginExcludes ?? [];
  return pricing.plans.map((/** @type {Plan} */ plan) => {
    if (plan.monthly == null) return { ...plan, contract: true, cost: null, margin: null, lines: [], worst: null, typical: null };
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
      return { ...plan, contract: false, cost, margin: null, lines, worst: null, typical: null, ctxModel: ctx.mr.model.id };
    }
    const fee = /** @type {number} */ (plan.monthly);
    const credit = /** @type {number} */ (plan.credit);
    const rates = planRates(plan, pricing, o).filter((r) => !excluded.includes(r.id));
    const margin = (/** @type {number} */ cost) => (fee - cost) / fee;

    const low = rates.filter((r) => r.rate > 0 && r.margin != null).reduce((a, r) => (/** @type {number} */ (r.margin) < /** @type {number} */ (a.margin) ? r : a));
    const worstCost = credit * (1 - /** @type {number} */ (low.margin));
    const worst = { piece: low.id, name: low.name, pieceMargin: low.margin, cost: worstCost, margin: margin(worstCost) };

    let revenue = 0, wholesale = 0;
    for (const [id, n] of Object.entries(mix)) {
      const r = rates.find((x) => x.id === id);
      if (!r) continue;
      revenue += Number(n) * r.rate;
      wholesale += Number(n) * r.wholesale;
    }
    const typCost = revenue > 0 ? credit * (wholesale / revenue) : 0;
    const typical = { mixMargin: revenue > 0 ? 1 - wholesale / revenue : null, cost: typCost, margin: margin(typCost) };

    return { ...plan, contract: false, cost: worst.cost, margin: worst.margin, lines: [], worst, typical, ctxModel: ctx.mr.model.id };
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
 * Every blueprint's scenarios as typical months at the piece rates, and its featured month, for lists and navigation.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function summary(pricing, o = {}) {
  return pricing.blueprints.map((/** @type {Blueprint} */ bp) => {
    const months = blueprintMonths(bp, pricing, o);
    return { id: bp.id, name: bp.name, job: bp.job, months, featured: months.find((t) => t.featured) || months[months.length - 1] };
  });
}

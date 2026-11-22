// @ts-check
/**
 * Obsession pricing engine.
 *
 * Pure functions over pricing.json. There is one price list: the pieces, at list rates, on every plan. A paid plan's
 * monthly fee covers a set amount of usage at those rates; past it, list rates as you go; model tokens are pieces too, per
 * million at the model's price plus their markup (planValue, monthlyBill, cheapestPlan). A blueprint run counts toward that covered
 * usage like any piece: what a typical month of a blueprint costs a buyer is
 *   what its runs use (in pieces, model tokens included) x the list rates (blueprintMonth),
 * and what it costs us is primitives (what we pay) x the same usage (tierCost). The first run of every blueprint is free.
 * Nothing here holds a price. Change a number in pricing.json, or pass an override (the model, the browser,
 * the cache share, the fleet volume), and every cost and estimate follows.
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
 * A variant (`variantOf`, the id of the blueprint it belongs to) is a second set of scenarios on that blueprint's page,
 * picked with a switch labelled by each one's `variantLabel` (founders, 22 Nov 2026: mystery shopping for agencies and
 * for ecommerce brands); it has no page or siteId of its own.
 * @typedef {{id:string, siteId?:string, variantOf?:string, variantLabel?:string, name:string, job:string, buyer?:string,
 *   unit:string, per:string, noun:[string,string], itemNoun?:[string,string], run:string, setupMonths?:number,
 *   usage:{run?:Usage, runs?:Record<string,Usage>, journeys?:Record<string, Usage & {name:string, line?:string}>,
 *   monthly?:Usage, account?:Usage, setup?:Usage}, defaultJourneys?:string[], tiers:Tier[], note?:string}} Blueprint
 */
/** @typedef {Record<string, any>} Pricing */
/**
 * Global switches. Anything left out takes its default from pricing.json.
 * @typedef {{model?:string, modelPrices?:{in:number, out:number, cached:number}, cacheShare?:number,
 *   browser?:string, browserRates?:Partial<Browser>, attempts?:number, failedShare?:number, fleetJourneys?:number,
 *   journeys?:string[], hold?:'price'|'margin'}} Overrides
 */
/** @typedef {{group:string, label:string, amount:number, detail?:string}} Line */
/** @typedef {{total:number, lines:Line[], groups:Record<string, number>}} Cost */

/** The cost groups, in the order the breakdown shows them. */
export const GROUPS = [
  { key: 'model', label: 'Model tokens' },
  { key: 'browser', label: 'Browser time' },
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
 * A blueprint and its variants, in the JSON's order: the blueprint first, then each blueprint whose `variantOf` is its
 * id. A blueprint with no variants is a list of 1.
 * @param {Pricing} pricing @param {string} id @returns {Blueprint[]}
 */
export function blueprintVariants(pricing, id) {
  const bp = findBlueprint(pricing, id);
  return bp ? [bp, ...pricing.blueprints.filter((/** @type {Blueprint} */ b) => b.variantOf === id)] : [];
}

/** The token pieces, in millions of tokens: uncached input, cached input and output (founders, 22 Nov 2026). */
export const TOKEN_PIECES = ['tokensIn', 'tokensCached', 'tokensOut'];

/**
 * A blueprint's journeys (founders, 22 Nov 2026: mystery shopping's sign-up, browse, basket and checkout abandonment),
 * each with its own usage, and the ones it runs by default (`defaultJourneys`). A variant uses its blueprint's journeys
 * with its own defaults. Null for a blueprint without journeys.
 * @param {Blueprint} blueprint
 * @param {Pricing} pricing
 * @returns {{list:Record<string, Usage & {name:string, line?:string}>, defaults:string[]} | null}
 */
export function journeysOf(blueprint, pricing) {
  const own = blueprint.usage?.journeys;
  const parent = blueprint.variantOf ? findBlueprint(pricing, blueprint.variantOf) : null;
  const list = own ?? parent?.usage?.journeys;
  if (!list) return null;
  return { list, defaults: blueprint.defaultJourneys ?? Object.keys(list) };
}

/**
 * The journeys a month runs: Overrides.journeys where given (unknown ids dropped), else the blueprint's defaults.
 * @param {Blueprint} blueprint
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function selectedJourneys(blueprint, pricing, o = {}) {
  const J = journeysOf(blueprint, pricing);
  if (!J) return [];
  return (o.journeys ?? J.defaults).filter((id) => id in J.list);
}

/**
 * What one run uses: for a blueprint with journeys, the ticked journeys added together (every number summed, the
 * visits listed in turn: every ticked journey runs at the scenario's frequency, founders 22 Nov 2026); otherwise
 * usage.run, or the extra run `runId`.
 * @param {Blueprint} blueprint
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @param {string} [runId]
 * @returns {Usage | undefined}
 */
export function runUsage(blueprint, pricing, o = {}, runId) {
  if (runId) return blueprint.usage.runs?.[runId];
  const J = journeysOf(blueprint, pricing);
  if (!J) return blueprint.usage.run;
  /** @type {Record<string, any>} */
  const sum = { visits: [] };
  for (const id of selectedJourneys(blueprint, pricing, o)) {
    for (const [k, v] of Object.entries(J.list[id])) {
      if (k === 'visits') sum.visits.push(...(/** @type {VisitUse[]} */ (v)));
      else if (typeof v === 'number') sum[k] = (sum[k] || 0) + v;
    }
  }
  return /** @type {Usage} */ (sum);
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
  /* `uncached`, `cached` and `output` are the model's own three prices, the wholesale of the token pieces. */
  return { model, cacheShare, input, uncached: model.in, cached: model.cached, output: model.out };
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
 * A browser's unit costs (founders, 22 Nov 2026): $ an hour headful and headless, $ a proxy GB and $ a CAPTCHA, each the
 * rate past whatever the plan includes. The plan fee is never part of a unit cost: it is a fixed monthly cost (see
 * fixedCosts), and any usage a plan includes is an advantage to us, not counted.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function browserRates(pricing, o = {}) {
  const base = findBrowser(pricing, o.browser ?? pricing.primitives.browsers.default);
  /** @type {Browser} */
  const b = o.browserRates ? { ...base, id: 'custom', name: 'Custom browser rates', warn: undefined, ...o.browserRates } : base;
  let headful, headless, proxyPerGb, captcha;
  if (b.kind === 'units') {
    const u = b.unitPrice ?? 0;
    headful = headless = (b.unitsPerHour ?? 0) * u;
    proxyPerGb = (b.unitsPerGb ?? 0) * u;
    captcha = (b.unitsPerCaptcha ?? 0) * u;
  } else {
    headful = b.headful ?? 0;
    headless = b.headless ?? headful;
    proxyPerGb = b.proxyPerGb ?? 0;
    captcha = b.captcha ?? 0;
  }
  return { browser: b, headful, headless, proxyPerGb, captcha, planFee: b.planFee ?? 0 };
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

  let proxy = 0, proxyGb = 0, solves = 0;
  for (const use of u.visits || []) {
    const v = resolveVisit(use, ctx.pricing);
    const n = (use.count ?? 1) * ctx.af;
    if (!n) continue;
    add('model', `${v.name}, tokens`, n * tokenCost(v.inputTokens, v.outputTokens, ctx),
      `${num(n)} x ${tokens(v.inputTokens)} in, ${tokens(v.outputTokens)} out`);
    const hours = (n * v.minutes) / 60;
    const rate = v.mode === 'headless' ? ctx.br.headless : ctx.br.headful;
    add('browser', `${v.name}, browser`, hours * rate, `${num(n * v.minutes)} min ${v.mode} at ${money(rate)} an hour`);
    const gb = (n * (v.proxyMb || 0)) / 1024;
    proxyGb += gb; solves += n * (v.captchas || 0);
    proxy += gb * ctx.br.proxyPerGb + n * (v.captchas || 0) * ctx.br.captcha;
  }
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
 * call minutes, a persona's own voice on those minutes, inboxes, emails, iMessage lines, WhatsApp messages, sandbox vCPU
 * and GiB hours, events, and model tokens in millions (founders, 22 Nov 2026): input split by the cache share into
 * uncached (`tokensIn`) and cached (`tokensCached`), and output (`tokensOut`), from visits, wakes, analysis and calls.
 * `modelCost` is what those tokens cost us, for the record. Proxy data and CAPTCHAs come with the browser pieces (their
 * home connection is included), and the browser plan fee is ours to carry.
 * @param {Usage | undefined} usage
 * @param {Ctx} ctx
 * @returns {{pieces:Record<string, number>, modelCost:number}}
 */
export function usagePieces(usage, ctx) {
  const P = ctx.pricing.primitives;
  const u = usage || {};
  /** @type {Record<string, number>} */
  const pieces = {};
  /** @param {string} id @param {number} n */
  const add = (id, n) => { if (n && Number.isFinite(n)) pieces[id] = (pieces[id] || 0) + n; };
  let modelCost = 0;
  const cs = ctx.mr.cacheShare;
  /** @param {number} k @param {number} input @param {number} output */
  const tok = (k, input, output) => {
    add('tokensIn', (k * input * (1 - cs)) / 1e6);
    add('tokensCached', (k * input * cs) / 1e6);
    add('tokensOut', (k * output) / 1e6);
    modelCost += k * tokenCost(input, output, ctx);
  };
  for (const use of u.visits || []) {
    const v = resolveVisit(use, ctx.pricing);
    const n = (use.count ?? 1) * ctx.af;
    if (!n) continue;
    tok(n, v.inputTokens, v.outputTokens);
    add(v.mode === 'headless' ? 'browser' : 'stealth', (n * v.minutes) / 60);
  }
  const W = P.wake;
  if (u.wakes) tok(u.wakes, W.inputTokens, W.outputTokens);
  if (u.analysis) tok(1, u.analysis.inputTokens, u.analysis.outputTokens);
  const ph = P.phone;
  const minutes = (u.callMinutesOut || 0) + (u.callMinutesIn || 0);
  if (minutes) {
    add('voice', minutes);
    add('personaVoice', minutes);
    tok(minutes, ph.callTokensPerMinute.inputTokens, ph.callTokensPerMinute.outputTokens);
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
  return { pieces, modelCost };
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
  const usage = runUsage(blueprint, pricing, o, runId);
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
  blocks.push({ key: 'run', label: 'Runs', usage: runUsage(blueprint, pricing, ctx.overrides), k: nRuns, detail: (each) => `${num(nRuns)} runs at ${money(each)}` });
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
 * Each piece's list rate, the one price list on every plan. Tokens carry their markup.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function pieceRates(pricing, o = {}) {
  return { rates: Object.fromEntries(pieceMargins(pricing, o).map((/** @type {any} */ p) => [p.id, {
    id: p.id, name: p.name, unit: p.unit, rate: p.retailValue, wholesale: p.wholesaleValue, markup: p.retailMarkup ?? null,
  }])) };
}

/**
 * What a typical month of a blueprint costs the buyer, at the piece rates: what the scenario's runs use, counted in
 * pieces (usagePieces over scenarioBlocks), x each piece's list rate, model tokens and a persona's voice included. All of
 * it counts toward the buyer's covered usage like any piece. Beside it, what the month costs us (tierCost) and our margin on it. The first scenario is
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
  const { rates } = pieceRates(pricing, o);
  const s0 = scenarioBlocks(blueprint, tier, pricing, ctx);
  /** @type {Record<string, number>} */
  const n = {};
  for (const b of s0.blocks) {
    const u = usagePieces(b.usage, ctx);
    for (const [id, x] of Object.entries(u.pieces)) n[id] = (n[id] || 0) + x * b.k;
  }
  /* Every line is a piece at its list rate, model tokens and a persona's voice included (founders, 22 Nov 2026). */
  /** @type {{id:string, name:string, n:number, unit:string, rate:number, amount:number, cost:number}[]} */
  const lines = Object.entries(n).map(([id, x]) => {
    const r = rates[id];
    if (!r) throw new Error(`blueprintMonth: no piece "${id}" in pricing.json`);
    return { id, name: r.name, n: x, unit: r.unit, rate: r.rate, amount: x * r.rate, cost: x * r.wholesale };
  });
  const ours = tierCost(blueprint, tier, pricing, o, ctx);
  /* Holding margins (o.hold 'margin'), supplier costs that are in no piece (proxy data, CAPTCHAs) are passed on at the
     month's margin at the reference suppliers, so the month's margin stays exactly where it was. Zero at the reference
     suppliers. */
  if (o.hold === 'margin') {
    const refMonth = blueprintMonth(blueprint, tier, pricing, referenceOverrides(o));
    const keep = refMonth.margin ?? 0;
    const owed = ours.cost / (1 - keep) - lines.reduce((s, l) => s + l.amount, 0);
    if (Math.abs(owed) > 1e-9) lines.push({ id: 'passThrough', name: 'Other supplier costs, at the same margin', n: 1, unit: 'a month', rate: owed, amount: owed, cost: 0 });
  }
  const total = lines.reduce((s, l) => s + l.amount, 0);
  const estimate = roundEstimate(total, pricing);
  return {
    name: tier.name,
    for: tier.for,
    covers: describeTier(blueprint, tier, pricing),
    featured: !!tier.featured,
    free: !!tier.free,
    q: s0.q, items: s0.items, runs: s0.runs, period: s0.period, oneOff: s0.oneOff,
    lines,
    /* The journeys this month runs (a blueprint with journeys: Overrides.journeys, else its defaults). */
    journeys: journeysOf(blueprint, pricing) ? selectedJourneys(blueprint, pricing, o) : null,
    /* What the month costs the buyer at list rates, unrounded, and as the site says it; `tokens` is the model's share
       of it (the token pieces), `pieces` the rest. All of it counts toward what a plan covers. */
    total,
    tokens: lines.filter((l) => TOKEN_PIECES.includes(l.id)).reduce((s, l) => s + l.amount, 0),
    pieces: lines.filter((l) => !TOKEN_PIECES.includes(l.id)).reduce((s, l) => s + l.amount, 0),
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

/**
 * A blueprint with journeys (mystery shopping: sign-up, browse, basket and checkout abandonment), as additive parts a
 * page can sum without the engine: for each scenario, `base` (its months with no journey ticked: the account upkeep)
 * and `each`, what one journey adds on its own, both unrounded at list rates. A month is linear in its usage, so any
 * ticked set costs base + the sum of its journeys, rounded with roundEstimate. Null for a blueprint without journeys.
 * @param {Blueprint} blueprint
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function journeyMonths(blueprint, pricing, o = {}) {
  const J = journeysOf(blueprint, pricing);
  if (!J) return null;
  const base = blueprintMonths(blueprint, pricing, { ...o, journeys: [] });
  const one = Object.fromEntries(Object.keys(J.list).map((id) => [id, blueprintMonths(blueprint, pricing, { ...o, journeys: [id] })]));
  return {
    journeys: Object.entries(J.list).map(([id, j]) => ({ id, name: j.name, line: j.line ?? '' })),
    defaults: J.defaults,
    tiers: base.map((b, i) => ({
      name: b.name,
      free: b.free,
      base: b.total,
      each: Object.fromEntries(Object.entries(one).map(([id, months]) => [id, months[i].total - b.total])),
    })),
  };
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
 * The overrides at the reference suppliers (pricing.json's default model and browser), with no `hold`: the prices a
 * `hold` keeps.
 * @param {Overrides} o
 * @returns {Overrides}
 */
export function referenceOverrides(o) {
  const { model, modelPrices, browser, browserRates, hold, ...rest } = o;
  return rest;
}

/**
 * Each retail piece beside what it costs us, so the margin on every piece is visible. `wholesaleValue` is its unit
 * cost, what one more unit costs us at the supplier's rate (founders, 22 Nov 2026: no plan fee is ever spread into it),
 * which margins and the 25% floor are judged on.
 *
 * `o.hold` says what stays put when a supplier switch (o.model, o.modelPrices, o.browser, o.browserRates) moves a unit
 * cost (founders, 22 Nov 2026, the calculator's switch): 'price' keeps every customer price at the reference suppliers'
 * (pricing.json's default model and browser), so our margin takes the change, what we gain by engineering or a better
 * supplier deal; 'margin' keeps every piece's margin at the reference suppliers', so the customer price takes it. Left
 * out, each piece follows its own rule: a set list price stays, a markup piece (model tokens) follows its cost. At the
 * reference suppliers all three agree.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function pieceMargins(pricing, o = {}) {
  const ctx = context(pricing, o);
  const ref = o.hold ? context(pricing, referenceOverrides(o)) : null;
  return pricing.pieces.map((/** @type {any} */ p) => {
    /** @param {Ctx} c */
    const costAt = (c) => (p.wholesale || []).reduce((/** @type {number} */ s, /** @type {any} */ w) => s + wholesaleTerm(w, c), 0);
    /** The list price the piece's own rule gives for a unit cost. @param {number} w */
    const listAt = (w) => (p.retailMarkup != null ? w * (1 + p.retailMarkup) : p.retailPlus != null ? w + p.retailPlus : p.retail ?? 0);
    const wholesale = costAt(ctx);
    let retail = listAt(wholesale);
    if (ref) {
      const refCost = costAt(ref);
      const refList = listAt(refCost);
      if (o.hold === 'price' || Math.abs(wholesale - refCost) < 1e-15) retail = refList;
      else if (o.hold === 'margin') retail = refCost > 0 && refList > 0 ? wholesale * (refList / refCost) : refList;
    }
    const margin = retail > 0 ? (retail - wholesale) / retail : null;
    let once = null;
    if (p.once) {
      const w1 = (p.once.wholesale || []).reduce((/** @type {number} */ s, /** @type {any} */ w) => s + wholesaleTerm(w, ctx), 0);
      once = { retail: p.once.retail, wholesale: w1, margin: p.once.retail > 0 ? (p.once.retail - w1) / p.once.retail : null };
    }
    return { ...p, wholesaleValue: wholesale, retailValue: retail, margin, onceValue: once };
  });
}

/* ------------------------------------------------------------------ plans: covered usage at list rates */

/*
 * There is one price list, the pieces at list rates, on every plan (founders, 22 Nov 2026). A paid plan's monthly fee
 * covers a set amount of that usage (`covers`): Developer $20 for $20, Startup $99 for $111, Scale $499 for $588. Past it,
 * usage is billed at list rates, pay as you go up to any spend cap the buyer sets; covered usage resets each month.
 * Model tokens are pieces like any other, at the model's prices plus 30% (founders, 22 Nov 2026), counted toward covered
 * usage; pricing.billing.outside lists any piece billed on top of a plan instead (none now). The US texting registration counts toward covered usage at its fixed list prices. No plan
 * includes any piece; Free keeps fixed allowances; Enterprise is set with the buyer, from a first-month floor, monthly,
 * with a yearly discount as an option. There is no credit and no plan discount.
 */

/**
 * @typedef {{id:string, name:string, monthly:number|null, from?:number, covers?:number|null, billing?:string[],
 *   featured?:boolean, allowances?:Record<string, number>, freeNumber?:{textsIn:number, callMinutesIn:number},
 *   features?:Record<string, any>, note?:string}} Plan
 * @typedef {{id:string, name:string, monthly:number|null, from:number|null, covers:number, billing:string[],
 *   featured:boolean, allowances:Record<string, number>, freeNumber:{textsIn:number, callMinutesIn:number}|null,
 *   features:Record<string, any>, rates:Record<string, number>, once:Record<string, number>, outside:string[]}} BillingPlan
 * @typedef {{id:string, name:string, unit:string, displayPer:number, displayUnit:string, wholesale:number, rate:number,
 *   effective:number, margin:number|null, listMargin:number|null,
 *   fixed:boolean, outside:boolean, plus:number|null, markup:number|null,
 *   once:{rate:number, effective:number, wholesale:number, margin:number|null}|null}} PlanRate
 */

/** @param {Pricing} pricing @param {string} id @returns {Plan} */
export function findPlan(pricing, id) {
  return pricing.plans.find((/** @type {Plan} */ p) => p.id === id);
}

/** Any pieces billed on top of every plan, never counted toward its covered usage (none since 22 Nov 2026). @param {Pricing} pricing */
export function outsidePieces(pricing) {
  return /** @type {string[]} */ (pricing.billing?.outside ?? ['tokens']);
}

/**
 * What a paid plan's fee covers at list rates: `covers`, `extra` over the fee, and `factor`, what a dollar of covered
 * usage earns us (fee / covers). Free and Enterprise come back with covers 0 and factor 1.
 * @param {Plan|string} plan
 * @param {Pricing} pricing
 */
export function planValue(plan, pricing) {
  const pl = typeof plan === 'string' ? findPlan(pricing, plan) : plan;
  const fee = pl?.monthly ?? 0;
  const covers = pl?.covers ?? 0;
  return { fee, covers, extra: Math.max(covers - fee, 0), factor: covers > 0 ? fee / covers : 1 };
}

/**
 * Each piece on a plan: its list rate (`rate`, what the buyer is billed per unit on every plan), beside wholesale and
 * `effective`, what a unit earns us inside the plan's covered usage (list x fee / covers; a piece outside the plans earns
 * its list rate). `margin` is at `effective` over wholesale, what a unit costs us at the margin: the 25%
 * floor is judged on it. No plan fee is spread into any of it (founders, 22 Nov 2026: unit costs only; see fixedCosts).
 * @param {Plan|string} plan a plan from pricing.plans, or its id
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @returns {PlanRate[]}
 */
export function planRates(plan, pricing, o = {}) {
  const { factor } = planValue(plan, pricing);
  const outside = outsidePieces(pricing);
  return pieceMargins(pricing, o).map((/** @type {any} */ p) => {
    const w = p.wholesaleValue;
    const rate = p.retailValue;
    const out = outside.includes(p.id);
    const effective = out ? rate : rate * factor;
    let once = null;
    if (p.onceValue) {
      const e1 = p.onceValue.retail * factor;
      once = { rate: p.onceValue.retail, effective: e1, wholesale: p.onceValue.wholesale, margin: e1 > 0 ? (e1 - p.onceValue.wholesale) / e1 : null };
    }
    return {
      id: p.id, name: p.name, unit: p.unit, displayPer: p.displayPer ?? 1, displayUnit: p.displayUnit ?? p.unit,
      wholesale: w, rate, effective,
      margin: effective > 0 ? (effective - w) / effective : null, listMargin: p.margin,
      fixed: !!p.fixed, outside: out, plus: p.retailPlus ?? null, markup: p.retailMarkup ?? null,
      once,
    };
  });
}

/**
 * A plan made ready to bill: its fee, what it covers, allowances, features and every piece's list rate (`rates`) and
 * one-off fee (`once`), as plain data (it survives JSON), so a page can work out bills with monthlyBill() without the
 * rest of pricing.json.
 * @param {Plan|string} plan
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 * @returns {BillingPlan}
 */
export function billingPlan(plan, pricing, o = {}) {
  const pl = typeof plan === 'string' ? findPlan(pricing, plan) : plan;
  /** @type {Record<string, number>} */ const rates = {};
  /** @type {Record<string, number>} */ const once = {};
  for (const p of pieceMargins(pricing, o)) {
    rates[p.id] = p.retailValue;
    if (p.onceValue) once[p.id] = p.onceValue.retail;
  }
  return {
    id: pl.id, name: pl.name, monthly: pl.monthly, from: pl.from ?? null, covers: pl.covers ?? 0,
    billing: pl.billing ?? ['monthly'], featured: !!pl.featured, allowances: pl.allowances ?? {},
    freeNumber: pl.freeNumber ?? null, features: pl.features ?? {}, rates, once, outside: outsidePieces(pricing),
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
 * ({ inbox: 10, email: 20000, browser: 100, register: 1, tokens: 40 }); `register` counts the active US texting
 * campaigns, at the same fixed monthly price on every plan (no plan includes one; a filing's one-off fee is `once` on the
 * billing plan). Free's allowances come off first; every line is priced at list rates and rounded to the cent, as a bill
 * is. The pieces inside the plan add up to `pieces`; the plan's fee covers up to `covers` of it (`covered`, the rest of
 * the covered amount `unused`, lost at the month's end), and the rest is billed at list rates as you go (`payg`). Lines
 * outside the plans (billing.outside, none now) are billed on top (`outside`). Free fits only when nothing goes past its allowances
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
  /** @type {{piece:string, n:number, free:number, billable:number, rate:number, cents:number, amount:number, outside:boolean}[]} */
  const lines = [];
  if (bp.monthly == null) {
    return { plan: bp.id, name: bp.name, contract: true, fee: null, covers: null, lines, pieces: 0, covered: 0, unused: 0, payg: 0, outside: 0, total: null, fits: false };
  }
  const outsideIds = bp.outside ?? ['tokens'];
  for (const [id, raw] of Object.entries(usage || {})) {
    const n = Math.max(Number(raw) || 0, 0);
    if (!n) continue;
    if (!(id in bp.rates)) throw new Error(`monthlyBill: unknown piece "${id}"`);
    const free = bp.allowances[id] ?? 0;
    const billable = Math.max(n - free, 0);
    const cents = Math.round(billable * bp.rates[id] * 100);
    lines.push({ piece: id, n, free: Math.min(n, free), billable, rate: bp.rates[id], cents, amount: cents / 100, outside: outsideIds.includes(id) });
  }
  const piecesC = lines.filter((l) => !l.outside).reduce((s, l) => s + l.cents, 0);
  const outsideC = lines.filter((l) => l.outside).reduce((s, l) => s + l.cents, 0);
  const coversC = Math.round(bp.covers * 100);
  const coveredC = Math.min(piecesC, coversC);
  const paygC = piecesC - coveredC;
  return {
    plan: bp.id, name: bp.name, contract: false, fee: bp.monthly, covers: bp.covers, lines,
    pieces: piecesC / 100, covered: coveredC / 100, unused: (coversC - coveredC) / 100, payg: paygC / 100, outside: outsideC / 100,
    total: (Math.round(bp.monthly * 100) + paygC + outsideC) / 100,
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
 * Each plan's margin, judged on every piece inside the plans, model tokens included, over
 * their unit costs (no plan fee is counted: fixed costs are in fixedCosts). No plan includes any piece.
 * Free: its fixed allowances at full use. A paid plan, when its whole covered usage is used:
 *   worst case: the covered usage spent on the lowest-margin piece at list rates;
 *   typical: the covered usage spent on pricing.billing.typicalMonth's mix of pieces (tokens left out), scaled to fill it.
 * `typical.mixMargin` is that mix's margin at list rates, which usage past the covered amount earns. Unused covered usage
 * (lost at the month's end) only adds margin and is not counted. Enterprise is set with the buyer: no margin here.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function planMargins(pricing, o = {}) {
  const ctx = context(pricing, o);
  const P = pricing.primitives;
  const pieces = Object.fromEntries(pieceMargins(pricing, o).map((/** @type {any} */ p) => [p.id, p]));
  /** @type {Record<string, number>} */
  const mix = pricing.billing?.typicalMonth?.usage ?? {};
  return pricing.plans.map((/** @type {Plan} */ plan) => {
    if (plan.monthly == null) return { ...plan, contract: true, cost: null, margin: null, lines: [], worst: null, typical: null };
    if (!(Number(plan.covers) > 0)) {
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
    const covers = /** @type {number} */ (plan.covers);
    const rates = planRates(plan, pricing, o).filter((r) => !r.outside);
    const margin = (/** @type {number} */ cost) => (fee - cost) / fee;

    const low = rates.filter((r) => r.rate > 0 && r.listMargin != null).reduce((a, r) => (/** @type {number} */ (r.listMargin) < /** @type {number} */ (a.listMargin) ? r : a));
    const worstCost = covers * (1 - /** @type {number} */ (low.listMargin));
    const worst = { piece: low.id, name: low.name, pieceMargin: low.margin, cost: worstCost, margin: margin(worstCost) };

    let revenue = 0, wholesale = 0;
    for (const [id, n] of Object.entries(mix)) {
      const r = rates.find((x) => x.id === id);
      if (!r) continue;
      revenue += Number(n) * r.rate;
      wholesale += Number(n) * r.wholesale;
    }
    const typCost = revenue > 0 ? covers * (wholesale / revenue) : 0;
    const typical = { mixMargin: revenue > 0 ? 1 - wholesale / revenue : null, cost: typCost, margin: margin(typCost) };

    return { ...plan, contract: false, cost: worst.cost, margin: worst.margin, lines: [], worst, typical, ctxModel: ctx.mr.model.id };
  });
}

/* ------------------------------------------------------------------ fixed costs */

/**
 * What we pay every month whatever we sell (founders, 22 Nov 2026): the selected browser's plan fee in full (any usage it
 * includes is an advantage to us, never counted against it) and primitives.overhead.notAllocated (the platform, workers
 * and our own texting campaign). None of it is in any unit cost, price or margin: it is paid from the margin across every
 * customer, and `coveredFrom` is the margin a month that pays it.
 * @param {Pricing} pricing
 * @param {Overrides} [o]
 */
export function fixedCosts(pricing, o = {}) {
  const br = browserRates(pricing, o);
  /** @type {{name:string, monthly:number, note?:string}[]} */
  const lines = [{ name: `${br.browser.name}, plan fee`, monthly: br.planFee }];
  for (const x of pricing.primitives.overhead.notAllocated || []) lines.push({ name: x.name, monthly: x.monthly, note: x.note });
  const total = lines.reduce((t, l) => t + l.monthly, 0);
  return { lines, total, coveredFrom: total };
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

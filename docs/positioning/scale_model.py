"""What keeping N companies as customers takes: a cost and load model for the scale section (COPY.md, "Scale").

The workload is obsession/system.md's: one long lived customer agent per company, asleep almost all the time, woken by
mail or a clock. The stack is system.md's: Cloudflare Workers and Durable Objects (runtime, sleep is free), R2
(evidence), Postgres (metadata), Google Workspace seats with a catch-all (inboxes, about 20 seats for 100,000 brands),
Steel browsers and proxies (sign ups that need a browser), Archil sandboxes (the agent loop's runs), a cheap model for
typed questions and a frontier model to learn and to catch the odd case.

Prices (USD), read 19 Oct 2026:
- Cloudflare Workers Paid: $5 a month; 10M requests and 30M CPU ms included, then $0.30 per 1M requests and $0.02 per
  1M CPU ms. https://developers.cloudflare.com/workers/platform/pricing/
- Durable Objects: 1M requests included, then $0.15 per 1M; 400,000 GB-s included, then $12.50 per 1M GB-s; idle
  objects that can hibernate are not billed for duration. https://developers.cloudflare.com/durable-objects/platform/pricing/
- R2: $0.015 per GB-month; Class A $4.50 per 1M; Class B $0.36 per 1M; free egress. https://developers.cloudflare.com/r2/pricing/
- Archil: Developer plan $10 minimum; sandbox CPU $0.055 per vCPU-hour, memory $0.020 per GiB-hour. https://archil.com/pricing
- Steel: $0.08 to $0.10 per browser hour; proxy $6 to $10 per GB (third party sources, 2026; Steel's own page is older).
- Google Workspace Business Starter: $7 per user a month, annual.
- Models: Gemini 2.5 Flash-Lite $0.10 / $0.40 per 1M tokens in / out (typed questions); a frontier model at $3 / $15
  (learning and escalations; Sonnet class, an assumption).
- Twilio UK mobile number $1.15 a month, inbound SMS $0.0075 (only for the SMS lens; not in the email totals).

Everything here is a model, not a measurement. Swap in measured numbers when system.md's evals report them (cost per
live customer agent per month, escalation share, sign up success per program).
"""

# ---- Workload, per company (the email and pages lenses) ----
EMAILS_PER_MONTH = 12          # newsletters and flows: 2 to 4 a week (research/voc.md, brands' own cadence)
PAGE_CHECKS_PER_MONTH = 30     # 1 price or page check a day, a plain fetch
WAKE_SECONDS_EMAIL = 2.0       # read, DKIM check, store, classify
WAKE_SECONDS_PAGE = 1.0        # fetch, hash, diff
EMAIL_KB = 100
PAGE_CHANGES_PER_MONTH = 4
PAGE_KB = 300

# How a sign up runs once the platform is learned (system.md, Sign-up box: plain HTTP first, then a scripted browser,
# last an agent).
ROUTES = {'request': 0.70, 'script': 0.25, 'agent': 0.05}
PLATFORMS = 40                 # Klaviyo, Shopify forms, Mailchimp, Omnisend ... (learned once each)
LEARN_RUNS_PER_PLATFORM = 5    # agent runs it takes to write and test a platform's program

ESCALATE_SHARE = 0.02          # emails a typed question can't settle, sent to the frontier model
PERSON_SHARE = 0.05            # of those, sent on to a person

# ---- Prices ----
WORKERS_MIN = 5.0
REQ = 0.30 / 1e6
CPU_MS = 0.02 / 1e6
DO_REQ = 0.15 / 1e6
DO_GBS = 12.50 / 1e6
DO_MEM_GB = 0.128
R2_GB_MONTH = 0.015
R2_PUT = 4.50 / 1e6
SEAT = 7.0
COMPANIES_PER_SEAT = 5000      # about 20 seats for 100,000 brands
POSTGRES = 25.0                # a small managed database, flat to 100,000 companies (assumption)
ARCHIL_MIN = 10.0
SANDBOX_HOUR = 0.055 + 2 * 0.020   # 1 vCPU, 2 GiB
BROWSER_HOUR = 0.09
PROXY_GB = 8.0
CHEAP_IN, CHEAP_OUT = 0.10 / 1e6, 0.40 / 1e6
FRONT_IN, FRONT_OUT = 3.0 / 1e6, 15.0 / 1e6


def typed_question():
    return 3000 * CHEAP_IN + 80 * CHEAP_OUT


def frontier_call(tokens_in=8000, tokens_out=500):
    return tokens_in * FRONT_IN + tokens_out * FRONT_OUT


def sign_up(route):
    """One sign up, by route: (dollars, model calls, browser minutes)."""
    if route == 'request':
        return 3 * REQ + 3 * DO_REQ, 0, 0.0
    if route == 'script':
        mins = 0.75
        return mins / 60 * BROWSER_HOUR + 4 / 1024 * PROXY_GB + 3 * DO_REQ, 0, mins
    mins, calls = 3.5, 25
    cost = mins / 60 * BROWSER_HOUR + 15 / 1024 * PROXY_GB + calls * frontier_call() + mins / 60 * SANDBOX_HOUR
    return cost, calls, mins


def month(n):
    """Keeping n companies as customers for a month, after they have signed up."""
    emails = n * EMAILS_PER_MONTH
    checks = n * PAGE_CHECKS_PER_MONTH
    wakes = emails + checks
    gbs = (emails * WAKE_SECONDS_EMAIL + checks * WAKE_SECONDS_PAGE) * DO_MEM_GB
    runtime = (max(0, wakes * 3 - 10e6) * REQ + max(0, wakes * 40 - 30e6) * CPU_MS
               + max(0, wakes - 1e6) * DO_REQ + max(0, gbs - 400_000) * DO_GBS)
    stored_gb = n * (EMAILS_PER_MONTH * EMAIL_KB + PAGE_CHANGES_PER_MONTH * PAGE_KB) * 6 / 1024 / 1024  # 6 months kept
    storage = max(0, stored_gb - 10) * R2_GB_MONTH + (emails + n * PAGE_CHANGES_PER_MONTH) * R2_PUT + POSTGRES
    seats = max(1, -(-n // COMPANIES_PER_SEAT)) * SEAT
    models = emails * typed_question() + emails * ESCALATE_SHARE * frontier_call()
    fixed = WORKERS_MIN + ARCHIL_MIN
    total = runtime + storage + seats + models + fixed
    awake_seconds = emails * WAKE_SECONDS_EMAIL + checks * WAKE_SECONDS_PAGE
    return {
        'companies': n,
        'runtime': runtime,
        'storage': storage,
        'inboxes': seats,
        'models': models,
        'fixed': fixed,
        'total': total,
        'per_company': total / n,
        'wakes_per_day': wakes / 30,
        'awake_at_once': awake_seconds / (30 * 86400),
        'asleep_share': 1 - awake_seconds / (30 * 86400) / n,
        'small_model_calls': emails,
        'frontier_calls': emails * ESCALATE_SHARE,
        'to_a_person_per_day': emails * ESCALATE_SHARE * PERSON_SHARE / 30,
    }


def signups(n):
    """Signing n companies up once, plus learning the platforms the first time."""
    cost = calls = minutes = 0.0
    for route, share in ROUTES.items():
        c, m, b = sign_up(route)
        cost += n * share * c
        calls += n * share * m
        minutes += n * share * b
    learn, learn_calls, _ = sign_up('agent')
    learning = min(n, PLATFORMS) * LEARN_RUNS_PER_PLATFORM * learn
    return {'cost': cost + learning, 'per_company': (cost + learning) / n, 'model_calls': calls + min(n, PLATFORMS) * LEARN_RUNS_PER_PLATFORM * learn_calls, 'browser_minutes': minutes}


if __name__ == '__main__':
    for route in ROUTES:
        c, m, b = sign_up(route)
        print(f'sign up by {route:8s} ${c:.4f}  model calls {m:3d}  browser {b:.2f} min')
    print()
    for n in (1, 1_000, 100_000):
        m, s = month(n), signups(n)
        print(f'{n:>7,} companies')
        print(f'   sign up once   ${s["cost"]:>10,.2f}  (${s["per_company"]:.4f} each)  model calls {s["model_calls"]:,.0f}  browser {s["browser_minutes"]:,.0f} min')
        print(f'   keep, a month  ${m["total"]:>10,.2f}  (${m["per_company"]:.4f} each)')
        print(f'     runtime ${m["runtime"]:.2f}  storage ${m["storage"]:.2f}  inboxes ${m["inboxes"]:.2f}  models ${m["models"]:.2f}  fixed ${m["fixed"]:.2f}')
        print(f'     wakes a day {m["wakes_per_day"]:,.0f}  awake at once {m["awake_at_once"]:.2f}  asleep {m["asleep_share"] * 100:.4f}%')
        print(f'     small model calls a month {m["small_model_calls"]:,.0f}  frontier {m["frontier_calls"]:,.0f}  to a person a day {m["to_a_person_per_day"]:.1f}')
        print()

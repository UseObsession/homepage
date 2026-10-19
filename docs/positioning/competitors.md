# Obsession: competitor messaging and design reference

Research for the Obsession website rewrite. Obsession in one line: **"A customer of every company, that keeps the receipts."**

**How this was gathered (19 Oct 2026).** Every page below was fetched live: the HTML with curl, the text extracted from it, and the visual and motion notes taken in a real browser at 1440x900 using screenshots plus `document.getAnimations()` and the sites' own CSS (keyframe names, `@font-face` names, colour values).

**Limits:**
- milled.com/pricing sits behind a Cloudflare bot check, which I did not get around. Milled's prices come from a search-result snippet of that page, and are marked as such.
- Where a motion or illustration note is inferred from a class or keyframe name rather than seen on screen, it says "inferred".
- Quotes are kept to headlines, subheads and short phrases.

---

## Contents

1. Messaging matrix, part A: what they say (hero, category, promise, CTA)
2. Messaging matrix, part B: what they show (proof, nav, pricing, comparisons)
3. Capability check: what each direct competitor actually captures
4. How open-source companies talk about "open-source core plus cloud"
5. White space: what nobody is saying that Obsession can own
6. Category frame options, with trade-offs and a recommendation
7. Design reference notes: Archil in depth, then Parallel, Exa, Browserbase, Resend and Linear (with short notes on Firecrawl, PlanetScale and Grep)
8. Design lessons for Obsession
9. Source list

---

## 1. Messaging matrix, part A: what they say

| Company / page | Hero headline (exact) | Subhead (exact) | Category words they use for themselves | Main promise | Primary CTA label | Source |
|---|---|---|---|---|---|---|
| **Foreplay** (home) | "The Complete Winning Ad Workflow" | "Everything you need to predictably make ads that convert, from the first spark of inspiration saving ads from facebook ad library to the final performance report." | "winning ad workflow"; "ad search engine"; "ad spy"; "creative analytics"; "Ad Library API" | One workflow, from ad inspiration to the performance report | "Start Free Trial" (7 days, no card) | https://www.foreplay.co/ |
| Foreplay **Spyder** | "Competitor Ad Tracking & Insights on Autopilot" (eyebrow: "Spyder Meta Ad Spy") | "Track every ad your competitors launch and extract insights and inspiration from their creative strategy." | "creative-first ad spying"; meta description: "The only creative-first Facebook ad spy tool"; "24/7 Ad Library Scraper"; "category-defining ad intelligence" | Every competitor ad saved for good, with hooks transcribed and extracted | "Start free trial" | https://www.foreplay.co/spyder (redirects to /spyder-ad-spy) |
| Foreplay **Swipe File** | "Save Ads from Facebook & TikTok Ad Library" | "Produce more winning ads at scale with a Smart Swipe File. Effortlessly Save, Organize, and Share ad inspiration." | "Smart Swipe File"; "Swipe File Software"; "Better than an Ad Spy Tool" | Save any ad forever ("No Expired Links"), plus an automatic landing-page screenshot on desktop and mobile | "Start free trial" | https://www.foreplay.co/swipe-file |
| Foreplay **Lens** | "Performance insights through a creative lens." | "Unlock growth from your paid advertising with powerful creative reporting that your team & brands love using." | "creative reporting"; "benchmarks"; "creative analytics" | Flat-priced creative reporting ("Axe the ad spend tax.") with benchmarks against other advertisers | "Start free trial" / "Watch Video" | https://www.foreplay.co/lens (redirects to /lens-creative-analytics) |
| Foreplay **Discovery** | "Search over 100 million incredible ad ideas" | "Find your next winning ad, product or offer with the ad search engine powered by 30,000 of the world's best marketers." | "ad search engine"; "Inspiration Library"; "Ad Creative Time Machine" | An ad library curated by people ("saved by real people, not bots or scrapers") | "Start free trial" | https://www.foreplay.co/discovery |
| Foreplay **API / MCP** | API: "Power AI agents & workflows with competitor ad data". MCP: "Turn chats & agents into your creative research expert" | API: "Use the Ad Library API by Foreplay to power AI agents and software workflows" | "agent agnostic API"; "Ad Library API" | Its ad data, made available to Claude, ChatGPT and your own agents | "Start Free Trial" / "Start now" | https://www.foreplay.co/api, https://www.foreplay.co/mcp |
| **Panoramata** | "The best way to track your competitors" | "Monitor your competitors' marketing strategies automatically with AI in a single place and access unlimited inspiration." (it then lists the channels) | "competitor tracking"; "Competitive intelligence for marketers"; "The performance marketing intelligence platform"; "all-in-one competitor strategy hub" | "Let us spy for you": newsletters, flows, ads, landing pages, SMS, socials and website changes, all tracked automatically | Email field plus "Start tracking competitors"; nav "Get Started"; "See it in action" (book a demo with the founder) | https://www.panoramata.co/ |
| **MailCharts** (Validity) | "Email and SMS Campaign Intelligence" | "MailCharts from Validity empowers marketers with competitive intelligence, industry insights, and inspiration for email and SMS." | "campaign intelligence"; "competitive intelligence"; "email journeys"; "MailCharts Index" | Plan campaigns from competitor email and SMS. The closest line to Obsession's: "We signup, trigger, collect, and classify thousands of ecommerce email journeys." | "Contact us to get started" | https://www.mailcharts.com/, https://www.mailcharts.com/features/email-journeys |
| **Milled** | "The largest search engine for e-commerce emails." | "Discover 52,830,082 emails from 103,255 e-commerce brands — ideal for marketers, agencies, and savvy shoppers!" | Title: "A search engine for email newsletters and ecommerce sales"; "Email marketing intelligence"; "the world's largest e-commerce email database" | Search every brand email. Speaks to two audiences: shoppers ("Shop without the spam") and marketers | The search box ("Search"); nav "Sign up"; lower down "Get started for free" | https://milled.com/ |
| **Grep.ai** | "Self-improving agents that help you scale." | "Grep agents learn from every run, turning repeated work into reusable code. Run them with your choice of models and scale your workflows while using fewer tokens." | Title: "Managed agent workforce"; "Agent OS"; "managed harness"; "AgentRun" | Agents that get cheaper with each run by turning repeated work into code. Every output is sourced and traceable | "Start building", plus a copyable "Paste into your coding agent" prompt; "Talk to sales" | https://grep.ai/ |
| **Archil** | "The serverless runtime for intelligence." | "Sandboxes and durable disks for AI. Run code on demand, keep files between calls, and share data across your stack." | "serverless runtime for intelligence"; footer: "The data platform for agents"; "sandboxes and durable disks" | Agents get compute on demand and files that last, on the data you already have in S3 | "Start building" and "Copy prompt" ("Paste into your coding agent") | https://archil.com/ |
| **Exa** | "The world's data for AI agents" | "Search the largest index of public web and private information." | Title: "Search API for AI Agents"; "web search API"; "Exa Index" | The highest-quality search at every latency, built for agents | "Try API for free" | https://exa.ai/ |
| **Parallel** | "Where agents find answers" | "Web infrastructure for AI to search, extract, monitor, and reason over the world's information" | Title: "Web Infrastructure for AI Agents"; "web search and research APIs purpose-built for AI agents"; "makes the web programmable" | Cited, confidence-scored answers from the web, priced per request ("Pay for answers, not tokens") | "Start building for free"; "Copy Onboarding prompt"; "Open in Claude Code / Codex / Cursor"; "View agents.md" | https://parallel.ai/ |
| **Browserbase** | "Give your agents access to the whole web." | "Browserbase makes the web as reliable and programmable as APIs" | "Browser agent infrastructure" (pricing page); "Cloud browsers for your agent"; "Browser-as-a-Service"; "Primitives" | Anything a person can do in a browser, an agent can do too, at scale | "Get API key"; "Setup for agents"; nav "Get a demo" | https://www.browserbase.com/ |
| **Clay** | "Build systems to grow revenue" | "Infrastructure to get any data, run agentic workflows, and launch GTM plays." | "GTM engineers"; "data marketplace"; "GTM plays"; "the orchestration layer for everything GTM" (customer quote) | Any data, plus agents, plus activation, for go-to-market teams | "Start free trial"; "Get a demo"; "Paste in your coding agent" | https://www.clay.com/ |

---

## 2. Messaging matrix, part B: what they show

| Company | Proof shown | Nav items (top level) | Pricing model and entry price | How they compare themselves with competitors | Source |
|---|---|---|---|---|---|
| **Foreplay** | "Powering +10,000 Social Ad Teams & Agencies"; logo wall (HelloFresh, Canva, AG1, ClickFunnels, True Classic, Ridge, VaynerMedia, dentsu); 7 named testimonials; review badges "4.9/5 251 Reviews" and "4.8/5 128 Reviews"; Chrome extension "30,000 Users, 4.8/5 Stars"; a real product screenshot (Swipe File UI) under the hero; "Before… / After Foreplay" panels on every product page. Its counts disagree: Discovery says "over 100 million" ads, pricing says "200M+". | Product, Solutions, Resources, Pricing, Book a Demo, Sign in, Start free trial | Per seat, in tiers: Basic **$59/mo** (1 user), Workflow $175/mo (5 users, Spyder for 10+ brands, MCP/API), Agency $459/mo. 7-day trial. 15% off annual. API credits are extra: 100,000 credits for $99/mo, where one ad is one credit. | A "Compare" list in the footer links to pages under /comparison/: Motion, Atria, Superads, Magic Brief, Adnova, Gethookd, AdsLibrary.ai, Adscan, SwipeKit. The Motion page has the headline "Foreplay is Motion on Steroids". It sets review scores side by side and takes a jab at the rival ("The only 5-star review works for the company"). Stamped "Last Updated June 4, 2025". | https://www.foreplay.co/pricing, https://www.foreplay.co/comparison/motion |
| **Panoramata** | "Join 50k companies" on the home page, but "Join +2k brands" on a /vs page; walls of 5-star one-liners ("I'm saving a day a week"); "Recent client wins" (an agency saves 20 hours a month per person; a group tracks competitors in 18 countries); the founder's face on the demo button. | Product, Use Cases, Resources, Pricing, Login, Get Started | SaaS tiers: Startup **$99/mo** (20 competitors, 6 months of history), Professional $179/mo (10 users), Advanced $399/mo. Annual plans get "2 months free". | It has a /vs/ page for each of: Mailcharts, SimilarWeb, Semrush, Ahrefs, AdSpy, "any other platform", and **"you doing it manually"**, which has a "Competitors Tracking Calculator" for hours and dollars saved. The Mailcharts page is a feature checklist that includes "Connect MCP & AI/LLMS". | https://www.panoramata.co/pricing, https://www.panoramata.co/vs/mailcharts-alternative, https://www.panoramata.co/vs/you-doing-it-manually |
| **MailCharts** | "Over 10,000 brands and agencies rely on MailCharts"; quotes from Airbnb and the NBA; "2,500+ hand-picked brands in the MailCharts Index"; "Where we've been featured". It looks stagnant: the newest blog posts are dated "3 years ago" and the footer reads "© 2013-2024". | Features, Pricing, Our Data, Blog, Sign in, Contact us | Not public. mailcharts.com/pricing **301-redirects to litmus.com/pricing**, whose H1 reads "Litmus is now part of Validity Engage". | Doesn't compare itself with rivals. "Compare" is a product feature for comparing brands. | https://www.mailcharts.com/, https://www.litmus.com/pricing |
| **Milled** | Live counters (52,830,082 emails; 103,255 brands; "We receive 20,258 emails every day"); "TRUSTED BY THOUSANDS OF THE INTERNET'S BEST BRANDS"; an archive that goes back to 2012. | Brands, Pricing, Search (⌘K), country selector, Sign in, Sign up | Freemium: Basic free (one year of data), Pro about **$83.25/mo**, Team about $249.92/mo for 5 seats. *Taken from a search snippet of milled.com/pricing; the page itself is behind a bot check.* | None on the home page. | https://milled.com/, https://milled.com/pricing |
| **Grep.ai** | "Backed by Y Combinator"; customer numbers (Shopmonkey: 85% faster research, 3× more sources; Initialized: 3–12 hours saved per workflow); benchmarks (DRACO 78.6, DeepSearchQA 84.5, DeepResearch Bench 56.27); an AML evaluation where model cost fell from $2.89 to $0.25 per alert; SOC 2 Type II; "100+ data sources, 250+ research skills, 25+ built-in agents". | Enterprise, Agents, Resources, Developers, About, Talk to sales, Get started | Usage credits. "Public rates are unpublished by design"; self-serve is pay as you go, enterprise has volume pricing. | The heaviest comparison work in the set: (1) benchmark charts against Perplexity, Claude, Gemini and ChatGPT; (2) a ✓/✗ grid against Codex, Claude CoWork and Perplexity Computer; (3) a **dated** "Capability snapshot, September 17, 2026" against OpenAI Agents API, Claude Managed Agents, AWS AgentCore, Google and Microsoft, with modelled costs and a disclosure that the chart's author co-founded Grep. | https://grep.ai/ |
| **Archil** | "Powering millions of agents each week."; logo marquee (Clay, Gamma, Gumloop, Concourse, Depot, microAGI, ComputeSDK, Obot); big numbers (~100 ms to mount a disk, 10 GB/s per disk, <1 ms cached latency); benchmark bars (100× faster git clone than EFS/S3 Files, 30× faster 4 KB reads than S3); trust row (99.99% availability design target, SOC 2 Type II, HIPAA, BYOC); a testimonial wall. | About, Pricing, Documentation, Blog, theme toggle, Start building | Usage-based with a monthly minimum: Free **$0** (hard caps), Developer $10 minimum, Team $500, Enterprise custom. Rates: $0.05 per 1,000 tool calls, $0.20 per GiB-month. | The home page shows benchmark bars and links "Compare with EFS and EBS →" to a docs page grouped by type of solution. That page **opens with "When you might want something else"** and admits the cases where EFS was faster. | https://archil.com/pricing, https://docs.archil.com/details/comparison |
| **Exa** | "Join 500,000 developers building AI on top of the world's information."; a logo grid where each cell links to a case study (Vercel, Cognition, Cursor, AWS, Firefox, Browserbase, Legora, StackAI, opencode and others); scale numbers ("100 BILLION documents", "1.4 TRILLION URLs"); live counters ("Searches completed today"); a Cognition video case study; compliance badges. | Products, Resources, Use Cases, Blog, Docs, Pricing, Contact sales, Sign up | Free credits, then pay as you go: $10 free credit every month. Search from **$4 per 1,000 requests**; Contents $1 per 1,000 pages; Agent $0.012–$1.00 per run. | The home page has bars against Perplexity and Brave (FRAMES 54.4 / 44.5 / 21.6). A /versus hub groups rivals by type: search APIs (Brave, Parallel, Tavily), Google and SERP APIs, crawling (Firecrawl), and answer APIs (Perplexity, You.com). | https://exa.ai/pricing, https://exa.ai/versus |
| **Parallel** | "Trusted by 1,000+ teams", with logos (Granola, Lovable, Harvey, Notion, Pfizer, LangChain, Modal, Replit, Profound, Rogo); a carousel of 14 named quotes; benchmark charts; SOC 2 Type 2, HIPAA-ready, zero data retention. | Products, Solutions, Developers, Resources, Blog, Pricing, Contact, Log in | Per request, not per token. Search from **$1 per 1,000 requests**. The page gives two different free allowances: "up to 5,000 requests per month for free", and in the FAQ "$5" a month. | An accuracy-versus-cost scatter (cost on a log scale) against Exa and Tavily on SimpleQA Verified, BrowseComp and WideSearch. Each chart names the dataset, the method and the test date ("September 9, 2026"). The FAQ answers "How is Parallel different from… Exa, Tavily, or Perplexity?" | https://parallel.ai/ |
| **Browserbase** | "10,000+ companies building beyond the API", with a logo grid (Microsoft, Clay, Amplitude, Ramp, Lovable and more); "800,000 weekly SDK downloads", "100,000 developers", "10,000+ years saved". | Platform, Solutions, Resources, Pricing, Docs, Log in, Sign up, Get a demo | Subscription plus usage: Free **$0**, Developer $20/mo, Startup $99/mo, Scale custom. Browser hours beyond the plan cost $0.12 down to $0.10. | None on its own home page. Browser Use's home page links to "Browserbase alternatives" pages that target it. | https://www.browserbase.com/pricing, https://browser-use.com/ |
| **Clay** | "Trusted by more than 500,000 leading GTM teams"; named results (Anthropic tripled its enrichment rate; Intercom +140% outbound pipeline; Mistral took TAM mapping from 2 months to 10 days; Canva saved 4 hours per rep per week); a press link in the nav menu: "Clay allows employees to sell shares at a $5b valuation". | Product, Solutions, Resources, Company, Pricing, ⌘K, Log in, Get a demo, Start free trial | Credits and actions: Free (500 actions a month), then Launch at **$167/mo**, Growth, Enterprise. | None on the home page. | https://www.clay.com/pricing |

---

## 3. Capability check: what each direct competitor actually captures

Each cell is taken from the competitor's own pages (linked above). "Not stated" means I didn't find it on the pages I fetched, not that it doesn't exist. Obsession's column restates the brief and `obsession/system.md` §1–2. It describes what Obsession sets out to do, not a check of what it ships today.

| What the tool captures | Foreplay | Panoramata | MailCharts | Milled | Obsession |
|---|---|---|---|---|---|
| Ads from public ad libraries | Yes (Spyder, Discovery) | Yes (Meta, TikTok, YouTube, LinkedIn, Pinterest, Google Display) | No | No | Yes, and then follows the ad |
| The landing page behind the ad | A screenshot of the landing page; "Landing Page Archive" | Landing pages and website changes tracked | No | No | Follows the click as a customer and keeps going |
| Newsletters | No | Yes | Yes | Yes (52.8M emails) | Yes, plus which Gmail tab each one lands in |
| Triggered flows (welcome, abandoned cart) | No | Yes ("lost checkout flow, welcome flow") | Yes (cart abandoner, browse abandoner, purchaser, subscriber, churn) | Not stated | Yes |
| Trials, baskets, checkout, delivery | No | Not stated | Only what is needed to trigger flows | No | Yes |
| Support bots and voice agents | No | No | No | No | Yes |
| Any company, on demand | Any brand, capped by plan (2 free, then 10+ or 50+) | 20 competitors on Startup; "Request to track a competitor for free" | A curated index of "2,500+ hand-picked brands" | Milled's own list of 103k brands | Any domain, from an API or MCP call |
| Waiting days or months, on one identity | Archive forever (of ads) | 6 months of history on Startup | Not stated | Archive back to 2012 (of emails) | Long-lived customer agents |
| Evidence that proves itself | Not claimed | Not claimed | Not claimed | Not claimed | DKIM-verified emails and timestamped captures (system.md §2) |
| API / MCP | Both | MCP, plus an "Enterprise API" | Not shown | Not shown | Both |
| Open source | No | No | No | No | The core |

Two things stand out:
- No direct competitor uses evidence or provenance language. On each competitor page I fetched, I counted words like "evidence", "proof", "receipt", "verify" and "DKIM": the total was 0–1, and the single hit at Panoramata is a joke about "random screenshots".
- None is open source. Two of the four (Foreplay and Panoramata) already have an MCP, so "agent access" alone isn't a moat.

---

## 4. How open-source companies talk about "open-source core plus cloud"

Exact wording, kept short:

1. **Firecrawl:** the hero subhead ends with **"It's also open source."**, set as a highlighted inline chip. A later H2 reads **"Fast, reliable, token-efficient. And it's open source"**. The FAQ says plainly what the cloud adds: the hosted version "features Fire-engine, our proprietary infrastructure that handles proxies, rendering, and more", plus a dashboard. A live GitHub star count (192.8K) sits in the nav. https://www.firecrawl.dev/
2. **Browser Use:** a closing H2 reads **"The open-source browser agent. MIT licensed."** with "118k GitHub stars, MIT licence." The paid product is pitched separately, as "the cloud browser for AI agents" at "$0.02 an hour". https://browser-use.com/
3. **Supabase:** the H2 is **"Open source from day one"** and the promise is **"Read, contribute, self-host. You're never locked in, and always in control."** https://supabase.com/
4. **PostHog** (self-host docs): **"PostHog is open-source and freely available for anyone to host themselves."** and **"The self-hosted version is the same exact product we run on PostHog Cloud"**. Self-hosting is also called "officially unsupported", which steers serious users to the cloud. https://posthog.com/docs/self-host

**Patterns worth keeping:**
- Open source shows up as a trust aside ("It's also open source.", "And it's open source"), never as the headline. The headline sells the job.
- Name the licence and show the star count. Both are proof, not adjectives.
- Say in one plain line what the cloud adds: Firecrawl names its proxies and rendering, PostHog names scale and support.
- "Never locked in" is the promise, and it answers the buyer's fear directly.

**Lines Obsession could use** (drafts, for the copy pass):
- "The customer agent is open source. The customers take months to grow." This points at the cloud's real moat, from system.md §2: long-lived identities ("Presence") and the shared record.
- "Read every line of what our customer agents do. Run them yourself, or use ours: inboxes, numbers and browsers that have been customers for months."
- "Open source, so you can see exactly how a customer agent behaves before it shops anywhere for you." Trust matters more here than for a scraper, because the agent acts as a customer.

---

## 5. White space: what nobody is saying that Obsession can own

**What the market says now:**
- **The direct competitors** (Foreplay, Panoramata, MailCharts, Milled) all frame themselves as a **library you search or a tracker you watch**. They sell size ("100M ads", "52,830,082 emails", "3M marketing assets") and lean on the words "spy", "inspiration", "winning" and "autopilot". Their buyer is the marketer, their CTA is a free trial or a demo, and their price is $59–$459 a month in seat tiers. Their own numbers don't agree with each other: Foreplay says 100M and 200M; Panoramata says 50k and 2k companies.
- **The adjacent infrastructure companies** (Exa, Parallel, Browserbase, Firecrawl, Archil, Grep, Clay) all say **"for AI agents"** and "infrastructure". They prove themselves with benchmarks and latency (450 ms, 180 ms), price per request or per run, and hand coding agents a prompt to onboard. Two of them already sell provenance: Parallel's "Basis" attaches citations and confidence scores, and Grep keeps a decision trail. Both apply it only to public-web facts or to the agent's own reasoning.

**The unclaimed ground, ranked by how strongly Obsession can claim it:**

1. **"We are the customer, not the observer," on demand, for any company.** Every direct competitor shows what brands *publish* (ad libraries, newsletters) or what *they* chose to sign up to. MailCharts comes closest ("We signup, trigger, collect…"), but only across a fixed index of "2,500+ hand-picked brands", sold as a library. Nobody offers "send a customer to this company, now" as an API or MCP call.
   - Why it's credible: it is literally the product's unit, the customer agent.
   - Phrases nobody uses: "be a customer", "send a customer", "a customer of any company".
2. **Receipts: evidence from private channels that proves itself.** No direct competitor makes an evidence claim. The adjacent provenance claims (Parallel's citations, Grep's decision trail) cover only public pages or agent reasoning.
   - Obsession's facts exist **only in a customer's inbox, basket or chat**, so no index can cite them.
   - A DKIM-verified email is cryptographic proof that the brand sent it (system.md §2).
   - That supports a sharp line: **"Facts no search index has: what a company does to you after you give it your email."**
   - It fits the existing line in system.md: "BuiltWith tells you what a company uses. Obsession tells you what it does to its customers."
3. **Patience: a customer that is still there in month three.** Competitors sell real time; infrastructure sells milliseconds. Nobody sells **duration**, meaning one identity that waits weeks, gets the win-back email on day 47 and notices the price rise on day 80.
   - It is also the one thing a single agent run, a scraper or a browser session cannot do. That separates Obsession from Browserbase and Exa as much as from Milled.
   - Possible line: "Agents that stay customers for months, not minutes."

**Further claims that support the three above:**
- **After the click, joined up.** Foreplay keeps the ad and a screenshot of its landing page; Panoramata tracks emails and landing pages as separate feeds. Nobody follows **one customer's thread** from ad to landing page to sign-up to emails to basket to support. Line: "Follow the ad all the way into the inbox."
- **Open-source core in a closed category.** None of the four direct competitors is open source. In this category it builds trust in *how the agent behaves as a customer* (identity, consent, what it clicks), not just developer goodwill.
- **Your own company as the target.** Being your own customer (checking your checkout, your lead response, your bot) is only half-claimed:
  - Browserbase pitches "Catch broken flows before your users do", but as a testing tool.
  - Nobody frames it as receipts of what your customers actually received.

**Words to avoid:** "spy" (Foreplay and Panoramata own it, and it undercuts the trust story); "swipe file" and "inspiration" (a library frame); "autopilot" (overused by Spyder and Panoramata).

---

## 6. Category frame options

### Option A: competitive or marketing intelligence

Compared with: Panoramata, MailCharts, Milled, Foreplay.

**For:**
- The budgets and buyers already exist, at known prices ($59–$459 a month).
- The first sale, the email record, slots straight in.
- Panoramata's /vs pages show buyers search for "alternative" terms.

**Against:**
- Obsession gets judged on archive size, where Milled (52.8M emails) and Foreplay (100M+ ads) win on day one.
- The frame reads as a marketer's tool, which pulls toward the trap system.md warns about ("Nobody should read Obsession as an email tool").
- It says nothing about agents, the API or open source.
- Seat-based pricing doesn't fit "100k customer agents for one user".

### Option B: agent infrastructure, "the customer layer for agents" ("like Exa, for being a customer")

Compared with: Exa, Parallel, Browserbase, Firecrawl.

The contrast in one breath: Exa searches the web, Browserbase drives a browser, Firecrawl reads pages, and Obsession is a customer.

**For:**
- It matches how people will use it (MCP, API, "your own agents").
- An open-source core is the norm in this group (Firecrawl, Browser Use).
- Usage pricing per customer agent fits naturally.
- The engine stays general (every lens, every kind of company), which matches the "general engine, narrow go-to-market" rule.
- The receipts claim lands harder here, because Parallel has already taught this audience that provenance matters.

**Against:**
- Developers buy primitives but may not see the job at first, so the site has to carry use cases (email record, ad to inbox, basket journeys).
- There's a risk of being seen as "Browserbase plus a mailbox", so the patience and receipts claims have to do the separating.
- This frame invites benchmark comparisons. Obsession will need its own honest, dated method (coverage rate, the share of emails that verify, time-to-first-email) rather than accuracy scores.

### Option C: a new category, "customer witness" / mystery shopping for any company

Compared with: mystery-shopping agencies, CX audits and synthetic monitoring.

**For:**
- Obsession owns the category outright.
- Receipts and patience are native to it.
- It maps onto real budgets: mystery shopping, CX and compliance audits, and checking your own funnel.

**Against:**
- Creating a category costs a lot.
- "Mystery shopping" suggests human panels in retail stores.
- "Synthetic customers" collides with "synthetic users", the AI persona research tools.
- Search demand for the term is near zero today.

### Recommendation

Use **Option B as the frame for the whole site**, and borrow **Option C's language as the explanation**: "a customer of every company, that keeps the receipts" is the witness idea said plainly. Put the **Option A comparison on the use-case pages**. For example, the email-record page gets a dated table against Milled, MailCharts and Panoramata, built like section 3 above.

This gives the product its true size on the home page while the first sale still gets a direct, winnable comparison. It also follows James's rule that the first wedge must not define the engine (memory: feedback-general-engine-narrow-gtm).

**How to present comparisons**, copying the tone of the best and avoiding the worst:
- Follow Archil's "When you might want something else", which admits losses honestly.
- Date every comparison and name the method, as Parallel and Grep do.
- Group competitors by what they see, not by brand, as Exa's /versus hub does.
- Don't copy Foreplay's swipes at rivals' review scores.

---

## 7. Design reference notes

### 7.1 Archil (archil.com), studied in depth

**Homepage layout, section by section** (https://archil.com/):
1. **Nav.** Logo, About, Pricing, Documentation, Blog, a sun-icon theme toggle ("Switch to light theme"), and a white pill button "Start building".
2. **Hero.** A rounded, inset card in a terracotta-to-rust gradient (#793331 → #a24441 → #ca5551), floating on a warm near-black page (`rgb(22,21,20)`).
   - Left: the H1 in three lines, with the last word "intelligence." in pale peach (#f4d9d4) so it reads as the payoff.
   - Right: the subhead, with "Start building" (white) and "Copy prompt" (ghost) underneath.
   - Across the bottom: a band of fine white strands (detailed under Illustration).
   - Top-right corner: a small pause button.
3. **Proof strip.** "Powering millions of agents each week.", then "Trusted by teams at" and a scrolling logo marquee (`marquee-scroll`).
4. **"Get started with a few lines of code."** A code window with tabs by *use case*, not language (Agents / Analytics / CI/CD / Training data). A "TypeScript" label, Copy, and line numbers. "Read the docs →" sits top-right.
5. **"Everything agents need to work with real data."** Five auto-rotating tabs: Call tools, Connect data, Compose context, Share with humans, Branch and version.
   - Each tab pairs a short text column with a **live mini-terminal**. Commands go from "queued" to "done · 180 ms", and a "TOOL CALLS" counter ticks from 0 to 3.
   - A "Pause tab rotation" control sits alongside.
   - A one-line testimonial bar (microAGI) closes the section.
6. **Divider.** A thin wave of the same fine strands runs edge to edge.
7. **"One file system, from prototype to petabytes."** Three cards. Each has a small animated diagram (a disk tree, an S3 to SSD cache to nodes diagram, an `npm install` tree), one big number (~100 ms, 10 GB/s, <1 ms) and a link.
8. **"Run here. Work from anywhere."** An architecture diagram in a second rust panel. It **plays itself in order**:
   - a request arrives at "Serverless tool call";
   - `$ python report.py` types itself out;
   - "+ report.pdf" appears and the call exits 0;
   - the file drops into "Durable shared filesystem";
   - "Your servers" (POSIX) add `results.csv`;
   - "Your applications" (S3 API) read both.
   - It ends on a replay button.
9. **"Local-disk speed, S3 economics."** Two benchmark cards. Each has a big "100×" or "30×" and a long segmented coral bar for Archil against a stub for EFS or S3. Below them, a trust row: 99.99% availability design target, SOC 2 Type II, HIPAA, encrypted, data can stay in your cloud, BYOC, and "Security details ↗".
10. **"Teams build on Archil so they can stop building storage."** A testimonial wall: one large quote and two small ones, with logos and faces.
11. **Strand divider** again.
12. **"Works with the stack you already run."** A 6-column grid of 21 monochrome integration tiles (AI SDK, Mastra, LangChain, Claude Code, Codex, E2B, Modal, Vercel Sandbox, Kubernetes, Terraform, S3, DuckDB, Postgres…), then "Browse all guides →".
13. **Final CTA.** "Connect AI to the data you already have." over faint, drifting **ASCII-art** clouds (`footer-ascii-drift`).
14. **"Ask about Archil on"** five small icon buttons (ChatGPT, Claude, Perplexity, Gemini, Grok). Each opens that assistant with a long, pre-written prompt ("Visit https://archil.com and explain what Archil does in plain English…").
15. **Footer**, with a green-dot "All systems operational".

**Hero treatment:**
- A card-in-page hero rather than a full bleed, so the hero reads as an object.
- The gradient has a canvas grain overlay (a `<canvas class="hero-grain">`) and a slow "aurora" light drifting across it.
- Copy splits left and right: statement on the left, explanation and CTAs on the right.

**How they show the product:** no app screenshots at all. The product appears as **code, live terminals and animated system diagrams** made in HTML and SVG, and every one of them is marked "example" or "Illustrative".

**Motion** (from `document.getAnimations()` and screenshots taken 2 s apart):
- **Hero:**
  - the aurora gradient drifts on a 14 s loop;
  - three strand "flow" paths move on **17 s, 23 s and 29 s** loops, so the loops never visibly line up and repeat;
  - four bright "pulses" travel along the strands every 12 s;
  - a ring pings at the top of each loop (Research, Analytics, Training, Agents) in turn, as the pulse reaches it.
  - **Why:** data flowing through one shared cable *is* the product idea.
- **Feature sections:** the animations are one-shot steps tied to the story. Names include `sandbox-attach`, `file-written`, `bead-drop`, `range-read` and `write-flash`; also `paType`, `paSpawn` and `paFileIn` in the architecture diagram.
- **Restraint:**
  - every illustration has **Pause / Replay buttons**, and the tab rotation has its own pause;
  - the CSS has 15 `prefers-reduced-motion` rules;
  - nothing bounces, and the easing is calm.

**Illustration style:**
- One motif carried through the page: hairline strands (a bundle of 10–15 parallel lines) that lift into labelled loops.
- Each loop is labelled with a word plus a mono path (`notebooks/`, `checkpoints/`, `results/`, `traces/`), so the drawing explains itself.
- The same strand returns as the section dividers.
- The footer CTA uses ASCII-character clouds as texture.

**Typography:**
- Geist Sans for headings: H1 80px, weight 500; H2 52px, with tight negative tracking (-0.035em in the markup).
- Mono for labels and code: Geist Mono, Fragment Mono, plus a custom code face (`codePlaygroundFont`).
- The CSS also loads faces named Concrette and Nordix; where they are used isn't confirmed.

**Colour:**
- Mostly warm neutrals: near-black #161514 and #1d1c1a, off-whites #f4f3f1 and #fff4ef.
- One signature hue family, terracotta and rust (#a24441, #ca5551).
- Status green (#22c55e), used only for "ready" dots.
- A light theme is available.

**Code and API snippets:**
- The comments do the teaching: "// Call 1: write a small CSV to the disk", "// Example stdout: {'west': 200, 'east': 95}".
- Prerequisites are listed as comments at the top.
- Each tab is a runnable story, not an API reference.

**Comparison tables:**
- On the home page, two bar comparisons with the method in small print ("measured by running git clone").
- The deeper comparison lives in the docs (https://docs.archil.com/details/comparison):
  - grouped by type of solution (block storage, FUSE adapters, NFS, shared file storage);
  - opens with "When you might want something else";
  - admits that "Amazon EFS was faster" on some workloads.

**Memorable, to learn from:**
- (a) One visual metaphor carries the whole page and literally depicts the architecture.
- (b) Pause and replay on every animation.
- (c) "Copy prompt" as the second CTA in the hero.
- (d) "Ask about Archil on ChatGPT, Claude…" buttons with a prompt the company controls: you shape how the assistants explain you.
- (e) Benchmarks with the method in the label.

### 7.2 Parallel (parallel.ai)

**Layout:**
1. Announcement bar.
2. Nav (Products, Solutions, Developers, Resources, Blog, Pricing; a black "CONTACT" button and an orange "LOG IN").
3. Hero: a left-aligned H1, a grey subhead, an orange mono-caps "START BUILDING FOR FREE", and "COPY ONBOARDING PROMPT" with small Claude, Codex and Cursor icons. Below sits a large blue sky-and-cloud panel holding a product prompt box with tabs (Research / Monitor / Search / Extract) and a **"HUMAN | MACHINE" toggle**.
4. Logos ("Trusted by 1,000+ teams").
5. Use cases by industry, with a live "MONITOR" feed (alerts with "5M AGO" timestamps and source domains).
6. "With Parallel retrieval" against "LLM only", answers side by side.
7. "Designed to compose".
8. "Production-grade trust": a sentence whose facts carry footnote numbers, each mapped to a source and a confidence score (0.99 cern.ch…), with the JSON shown alongside.
9. "More signal per token" (cost per task $0.01 against $0.12).
10. The product suite as cards, each with its own mini demo.
11. "Retrieval, built from the ground up".
12. Benchmarks: an accuracy-versus-cost scatter.
13. A testimonial carousel.
14. Security.
15. "Pay for answers, not tokens".
16. An agent onboarding prompt plus integrations.
17. FAQ.
18. Footer.

Source: https://parallel.ai/

**Hero treatment:** the most memorable thing on any site in this set is the **Human / Machine toggle**. Switching to "Machine" re-renders the *whole page* as markdown-style mono text: headings, link lists and URLs, ready for an agent to read. A fixed toggle stays at the bottom of the screen. The hero panel itself is a photographic sky with a white prompt card, which reads as calm and "open web".

**Product shown as:** the real request surface (prompt box, mode and schedule dropdowns), live-looking feeds, and JSON with `basis`, `citations` and `confidence` fields.

**Motion:**
- Hero tabs auto-rotate with a progress indicator (`portal_tab_autoplay_progress`), and typed prompts fill the box: "Monitor new product releas…", "Analysis of the impact of AI on NVIDIA's…".
- Monitor rows slide in and flash as new alerts land (`monitor_update_row_enter` and `_flash`), which shows the product's push nature.
- Marquees run for agents and tasks, and there's a radar pulse.
- 14 `prefers-reduced-motion` rules.

**Illustration style:** cloud photography plus flat UI cards; no characters, no 3D.

**Typography:** Gerstner Programm (a geometric grotesk) for display and body, FT System Mono for buttons, labels and code. Buttons are set in **mono caps**, which gives an engineering-manual voice.

**Colour:**
- Off-white #f9f8f4 and near-black #181818.
- One hot accent: orange #fb631b / #ff590a.
- A pale steel blue (#8fb6cc) and sand (#ccc7ba) as quiet companions.

**Code and API:**
- The onboarding prompt is one sentence: "Use curl to read parallel.ai/agents.md and perform the setup to install Parallel".
- "Open in Claude Code / Codex / Cursor" are deep links.

**Comparisons:** benchmark scatters with dataset links, method notes, model versions and a testing date.

**Learn:**
- A machine view of the site is a first-class feature, not a footnote.
- Show provenance *in the UI*: footnoted facts with confidence scores. This is the closest existing visual language to "keeps the receipts".

### 7.3 Exa (exa.ai)

**Layout:**
1. Announcement bar ("Introducing ATLAS…").
2. Nav.
3. Hero: a centred serif H1, one-line subhead, black "Try API for free" button, and an **interactive API playground** as the hero visual: a "Find anything…" box, a Search / Agent toggle, latency chips (Fast 450 ms, Auto 1 s, Deep ~10 s), category chips (Full Web, News, Companies, People, Financials…), and output modes (Results / Answer / Structured) with Request / Response.
4. "Join 500,000 developers…" over a 6×2 bordered logo grid, where each cell carries a ↗ to its case study.
5. Benchmarks on a black panel: a left rail of tabs (Accuracy / Latency / Search Verticals) and a bar chart with Exa in saturated blue and rivals in grey.
6. "Designed to make your Agent smarter": three cards with **dithered, pointillist blue imagery** over photos, interactive bits (a "Highlights: Off/On" toggle with "90% TOKEN REDUCTION"; a JSON output sample), and a customer proof chip under each card (Cursor, OpenRouter, HubSpot).
7. Enterprise security on a black band with line icons.
8. "Training retrieval models at massive scale": a blue particle cloud and giant numbers ("100 BILLION", "1.4 TRILLION", "1500 QUADRILLION").
9. Case studies (a Cognition video).
10. Footer CTA, "Search built for your AI".

Source: https://exa.ai/

**Hero:** the product *is* the hero. An empty, ready-to-type search box beats any mockup for an API product.

**Motion:** mostly calm. Results fade in (`exa-v5-response-in`); logo cells and squares fade in (`square-fade-in`); a shimmer sweeps the "Agent" mode icon; the point cloud is drawn on a canvas.

**Illustration:** dithered blue particles and point clouds, a "data as matter" look, used consistently.

**Typography:**
- **Arizona**, a serif, for headlines (H1 63px, weight 400). Serif headlines are rare among infra sites, so Exa is recognisable at a glance.
- ABC Diatype for body text, Geist Mono for code.

**Colour:** white and warm greys, with one electric blue (#1f40ed); black panels for contrast.

**Agent affordance:** a visually hidden "Exa Site Index" block at the top tells agents to fetch https://exa.ai/llms.txt first.

**Comparisons:** the home-page bars plus a /versus hub grouped by type of rival (https://exa.ai/versus).

**Learn:**
- Make the hero a live, tryable surface.
- A serif headline plus one saturated accent is enough brand.
- Pair big index-scale numbers with live counters ("Searches completed today").

### 7.4 Browserbase (browserbase.com)

**Layout:**
1. Nav.
2. Hero: a full-width **pixel-art mountain landscape** (orange, yellow and black pixels against a lavender dotted sky), with the headline in white on solid orange highlight bars, and "Get API key" / "Setup for agents".
3. Logo grid ("10,000+ companies building beyond the API").
4. "See what agents can do on the web": a sticky left rail of three primitives (Search API, Fetch API, Browser-as-a-Service), each with an animated **lo-fi wireframe browser** on the right ("Searching for 'roundtrip flight from SFO to NYC'", "flights.example.com/booking").
5. "Use the whole web like it's an API." in a yellow highlighter, beside an isometric pixel illustration and a checklist.
6. "Anything you can do in a browser…": 8 use-case cards with line-art vignettes (cursor arrows, a sign-in form, an "Add to cart" click with an orange dot), then a tabbed demo (Research / Extract / Fill & submit / Testing / Browser agent) with code fragments and "Running 128 browsers…".
7. "Zero setup. Real results." in 3 steps.
8. Big statement CTA.
9. Stats.
10. Footer.

Source: https://www.browserbase.com/

**Motion:**
- The hero uses two looping videos (`hero-loopA…mp4`, `hero-loopB…mp4`) plus a canvas called `heroEtchTrail`. Inferred from the name: the cursor etches or reveals pixels as it moves.
- Sections reveal upward on scroll (`animate-up`).
- Column borders draw in as the sticky rail scrolls.

**Illustration:** consistent **pixel or dither art**, from landscapes to isometric blocks, plus a deliberately crude wireframe UI. It makes the abstract idea "a browser" feel physical and playful.

**Typography:** GT Planar for headings (45px, weight 500), GT Standard for text, GT Standard Mono for labels. Grid lines between columns are left visible.

**Colour:** white canvas, orange #ff4500 as the single loud accent, lavender and pale blue (#c5d3e8) behind, and a yellow highlighter.

**Code:** inline fragments inside the demos (`bb.fetchAPI.create({ url: "..." })`) rather than big code blocks.

**Comparisons:** none on the home page.

**Learn:**
- A highlighter-bar headline is a cheap, ownable device.
- Wireframes that *act out* the job (search, then fill, then submit) explain an agent product better than screenshots.

### 7.5 Resend (resend.com)

**Layout:**
1. Nav.
2. Hero: a small pill "Join us at Resend Forward ›", a **serif H1 "Email for developers"**, a two-line subhead, "Get started" / "Documentation", and a slowly turning dark 3D cube video on the right (`cube.mp4`, looping).
3. A logo grid in white on black.
4. "Integrate **this morning**", with "this morning" in a warm amber gradient. Below it, a **grid of 13 language and protocol tiles** (Node.js, Serverless, Ruby, Python, PHP, CLI, Go, Rust, Java, Elixir, .NET, REST, SMTP), then a code window with framework tabs (Next.js, Remix, Nuxt, Express, Hono, Redwood, Bun, Astro).
5. "First-class developer experience": a **Test mode** card with streaming `HTTP 200: { "id": … }` lines, and a **Modular webhooks** card drawn as an event timeline ("Complained", "Bounced", each with a time and event chips such as "to isabella@xerox.com with type Spam").
6. The editor, contacts and broadcast analytics.
7. "Develop emails using React", with a code and preview split ("Welcome to ACME, user!").
8. "Reach humans, not spam folders": a deliverability grid (blocklist tracking, BIMI, dedicated IPs, DMARC…).
9. Control, then testimonials.
10. "Email reimagined. Available today."
11. Footer.

Source: https://resend.com/

**Motion:**
- Looping 3D videos per section (`cube.mp4`, `3d-broadcast.mp4`, `3d-react.mp4`, `3d-control.mp4`; `3d-integrate-morning.mp4` plays once).
- A globe spin (40 s), the hero text sliding up and fading in, an AI shimmer on text, and column borders flashing.
- The motion adds atmosphere more than it explains.

**Typography:** Domaine, a serif display (96px, weight 400), for the H1; ABC Favorit for H2 (56px); Inter for body text; Commit Mono for code.

**Colour:** pure black, with greys and almost no colour; mint (#62ffb3) and amber used sparingly.

**Learn:**
- Draw events as a timeline of status chips, which suits Obsession's record of what a company sent and when.
- One sentence of warmth ("this morning") in a cold dark page.
- A grid of language tiles signals "works with your stack" in one glance.

### 7.6 Linear (linear.app)

**Layout:**
1. Nav.
2. Hero: a left-aligned H1, a one-line subhead, a "New: Loops →" link, then a **full-width replica of the Linear app built in HTML**: sidebar, issue "Faster app launch", activity feed, and a docked **agent panel** working on "Fix the dimmed ride rows… and open a PR". It fades up from darkness after the text.
3. A logo row with a tiny mono-caps caption.
4. A two-tone statement paragraph: "A new species of product tool." in white, the rest in grey.
5. Three **isometric wireframe line drawings** labelled like technical figures (FIG 0.1 / 0.2 / 0.3): Purpose-built, Powered by agents, Designed for speed.
6. Four chapters (Intake and integrations; Planning and monitoring; AI and automations; Build, review, and ship). Each has a title on the left, a description on the right, "Learn more", and product vignettes below.
7. Changelog.
8. "Built for the future. Available today."
9. Footer.

Source: https://linear.app/

**Motion:**
- The hero text appears first, then the app UI fades and rises in.
- A light sweeps around agent-authored items (CSS animations `agentBorderSweep` and `agentLabelSweep`). Inferred: it marks "an agent did this".
- 5×5 dot-matrix icons animate in hard steps (`grid-dot-*`, 2800 ms `steps(1,end)`), like LED displays.
- A blinking text cursor.

**Typography:** Inter Variable at 64px, weight 510, letter-spacing -1.4px; mono for figure labels.

**Colour:** #08090a background and #e2e4e7 text. Tiny accent dots in pink, cyan, periwinkle, amber and green are used only as status colours.

**Learn:**
- Render the product as real, selectable HTML rather than a picture of it.
- Show the agent at work *inside* the product UI.
- Label figures like a technical manual ("FIG 0.1").

### 7.7 Short notes on three more

- **Firecrawl** (https://www.firecrawl.dev/): a light-grey **blueprint grid** with bracketed status labels such as `[ 200 OK ]` and orange sparkle marks where the lines cross. The second headline line is orange. "It's also open source." sits as a highlighted chip. A hero input has Search / Scrape / Map / Crawl tabs, the output preview is labelled `[ .JSON ]`, and sections are numbered "01 / 07 · Main Features". There's also a line aimed at agents: "Are you an AI agent? Fetch this skill…", with `curl -s https://firecrawl.dev/agent-onboarding/SKILL.md`.
- **PlanetScale** (https://planetscale.com/): the opposite extreme. The home page reads like a README, with prose paragraphs, inline links, tabs, and **architecture diagrams drawn in ASCII box characters**. There are no keyframe animations at all, and it follows the system light or dark theme. Proof that confident technical writing can carry a page.
- **Grep** (https://grep.ai/): the hero's second element is a long, copyable "Paste into your coding agent" onboarding prompt (preview on focus or hover). TypeScript SDK and cURL sit side by side. The comparisons are dated and come with a disclosure.

---

## 8. Design lessons for Obsession (to learn from, not copy)

1. **Draw the mechanism, and let motion explain it.** Archil's hero shows the architecture (one shared cable, four workloads) and moves on staggered loops (17/23/29 s), with pause and replay.
   - Obsession's mechanism is *time*: one customer agent per company, asleep, woken by an email on day 3, a price change on day 41, a win-back on day 80.
   - A long horizontal timeline where receipts gather is the natural motif. Nobody in this set shows duration.
2. **Show real receipts, not mockups.** Linear renders its real UI as HTML. Resend draws webhook events as a status timeline. Parallel footnotes each fact with a source and a confidence score.
   - Obsession can show an actual captured email with its sender, timestamp, Gmail tab and a "DKIM verified" mark, next to the screenshot of the page the ad led to.
   - In this category, that *is* the proof.
3. **Agent-first affordances are now standard. Go one step further.**
   - What others already do: "Copy prompt" (Archil, Grep, Clay), "Open in Claude Code / Codex / Cursor" plus agents.md (Parallel), llms.txt (Exa), "Are you an AI agent? Fetch this skill" (Firecrawl), and pre-written "Ask about X on ChatGPT / Claude" links (Archil).
   - Parallel's Human / Machine toggle is the best of these. For a product whose users are agents, a machine view of the site plus a one-line onboarding prompt should be in the hero.
4. **Honest, dated comparisons.** Archil's "When you might want something else", Parallel's dated methods and Grep's dated snapshot with a disclosure build trust; Foreplay's swipes at rivals' reviews don't. Use a capability table like section 3: what each tool *sees*, dated, with sources.
5. **One accent, one texture, mono labels.** Every strong site here uses a neutral base, one loud accent, one consistent texture and mono-caps labels:
   - Archil: rust, grain, hairline strands.
   - Parallel: orange, cloud photography.
   - Browserbase: orange, pixel art.
   - Exa: electric blue, dithered points.
   - The direct competitors (Panoramata, Foreplay) use generic purple or blue SaaS styling with walls of star ratings. Looking like infrastructure, not marketing software, is itself a positioning signal.
6. **Code tabs by job, not by language.** Archil tabs its code by use case (Agents / Analytics / CI/CD / Training data). Obsession's equivalents: "Email record", "Ad to inbox", "Basket journey", "Support bot", each a few commented lines ending in an example result.
7. **Every animation needs a reason and an off switch.** Archil, Parallel and Resend all respect `prefers-reduced-motion`. Archil adds visible pause controls. Do both.

---

## 9. Source list

**Competitors (messaging)**
- Foreplay: https://www.foreplay.co/ · https://www.foreplay.co/spyder · https://www.foreplay.co/swipe-file · https://www.foreplay.co/lens · https://www.foreplay.co/discovery · https://www.foreplay.co/pricing · https://www.foreplay.co/api · https://www.foreplay.co/mcp · https://www.foreplay.co/comparison/motion
- Panoramata: https://www.panoramata.co/ · https://www.panoramata.co/pricing · https://www.panoramata.co/vs/mailcharts-alternative · https://www.panoramata.co/vs/you-doing-it-manually
- MailCharts: https://www.mailcharts.com/ · https://www.mailcharts.com/features/email-journeys · https://www.mailcharts.com/pricing (301 to https://www.litmus.com/pricing)
- Milled: https://milled.com/ · https://milled.com/pricing (behind a bot check; prices from a search snippet)
- Grep.ai: https://grep.ai/
- Archil: https://archil.com/ · https://archil.com/pricing · https://docs.archil.com/details/comparison
- Exa: https://exa.ai/ · https://exa.ai/pricing · https://exa.ai/versus
- Parallel: https://parallel.ai/
- Browserbase: https://www.browserbase.com/ · https://www.browserbase.com/pricing
- Clay: https://www.clay.com/ · https://www.clay.com/pricing

**Open source wording**
- https://www.firecrawl.dev/ · https://browser-use.com/ · https://supabase.com/ · https://posthog.com/docs/self-host · https://supabase.com/docs/guides/self-hosting

**Design references**
- https://archil.com/ · https://parallel.ai/ · https://exa.ai/ · https://www.browserbase.com/ · https://resend.com/ · https://linear.app/ · https://www.firecrawl.dev/ · https://planetscale.com/ · https://grep.ai/

**Internal**
- `obsession/system.md` §1–2: the customer agent, the five lenses, the witness problem, DKIM provenance.

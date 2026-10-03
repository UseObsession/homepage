# Search and content strategy

Written 3 Oct 2026 from the verified research in `_research/seo/` (keywords, trends, questions, landscape, AI search; about 400 queries and fetches, each finding checked by a second pass). Refuted claims are left out and corrected ones are used in their corrected form. `src/content/blog/types.ts` points here for hubs and categories.

Read time: about 20 minutes.

---

## 0. Own the trust and method questions, not the head terms

1. **Skip the head terms.** "Mystery shopping" is job seekers ($0.37 to $0.61 CPC). "Competitive intelligence tools", "AI sales agent", "price monitoring", "customer health score" and "agentic commerce" belong to incumbents that ChatGPT already names.
2. **Own the ground between them:** the trust questions (is it legal, should an agent say it's AI), the method questions (how to see what a customer actually gets) and 4 terms we can define: **declared AI agent**, **prospect intelligence** (become the prospect's customer), **member price intelligence**, the **outside-in audit**.
3. **Every post carries new information:** a real run, a signed record, a dated price or a source-graded synthesis. That is what Google calls non-commodity content, what AI engines quote, and what earns the third-party mentions behind most commercial AI citations.
4. **8 hubs** follow the recipe groups. **5 launch posts**, one per reader: 2 honest tool reviews and 3 thought-leadership pieces.
5. **Navigation** (superseded 3 Oct by `docs/REBUILD.md` section 7): the 5 readers as links, then Recipes and Resources menus, then the call to action. Breadcrumbs on every page below Home. The footer is the full site map.
6. **Fix the live site first:** unknown URLs return the home page with a 200, `http://` doesn't redirect, `www` has no DNS record, no HSTS. All free on Cloudflare.

| # | Post | Reader | Kind | Hub |
|---|---|---|---|---|
| 1 | Is it legal to mystery shop your competitors? | Everyone who runs it | Thought leadership (trust hub) | Declared agents |
| 2 | The free audit that wins agency clients | Agencies | Thought leadership (real run) | Prospect intelligence |
| 3 | The best AI mystery shopping tools in 2026 | Founders, CX, agencies | Review | Mystery shopping |
| 4 | Speed to lead statistics: which numbers hold up in 2026 | Sales, founders | Thought leadership (graded synthesis) | Speed to lead |
| 5 | The best competitor email and SMS tracking tools in 2026 | Marketing teams, retention agencies | Review | Competitor intelligence |

---

## 1. Decisions needed before the first post ships

| Decision | Recommendation | Who |
|---|---|---|
| The blog breaks 2 site rules: it names real companies and cites sources (REBUILD section 3 bans both on pages). Reviews can't work without names, and the `stat` block already requires a source link. | Make the blog the exception. Names only in reviews and factual reporting, every fact dated and from the vendor's own pages or an independent source, no disparagement, a right of reply. Landing pages keep both rules. | Seun and James |
| "Prospect Intelligence™" is marketed by Matter (UK). | Check the mark before scaling content on the term. Our recipe already uses it; define it our way (becoming the prospect's customer) and avoid the ™ phrasing. | James |
| The September store check (Brand G) is the one real run. Consent for its basket journeys is still unconfirmed. | Post 2 states only what `/sample-output` states, and frames basket journeys as owner-OK only. Confirm consent before publishing. | Seun |
| Post 1 is about the law. | Have a UK and a US lawyer read it before it ships; carry a "not legal advice" line. | Seun |
| Speed to lead is being renamed Lead leaks (`/recipes/lead-leaks`, 301 from `/recipes/speed-to-lead`). | Link to whichever URL is live at publish; keep "speed to lead" in titles and copy, because that is the searched term. | James |
| Whether posts mention AI drafting help. | Google doesn't require it but calls a human fact-check "critical" (1 Oct 2026). Every post carries a method note (how the data was gathered, dates, sample). Mentioning AI help is Seun's call. | Seun |
| Demand numbers are modelled (no paid tool; Google Trends returned 429). | Connect Search Console and Bing now; re-rank the second wave on real impressions in November. | James |

---

## 2. Positioning in search

**The one sentence every engine should repeat** (already `llms.summary`; use it word for word on profiles, listings and author bios): *Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you.*

"Intelligence infrastructure for commercial teams" is the brand line. Nobody searches it, so it stays the Home title and never becomes a blog keyword.

### Terms we create and own

| Term | Why we can own it | Owner page |
|---|---|---|
| **Declared AI agent** (plus "signed record") | The market is moving to declared, signed agents (Cloudflare signed agents and Web Bot Auth, Visa Trusted Agent Protocol, the Visa, Mastercard and Ant Know-Your-Agent collaboration of Sept 2026) and fighting undeclared ones (Amazon v. Perplexity). Rivals who pose as buyers or use synthetic identities can't write this. | `/agents` now; `/blog/topics/declared-agents` when built |
| **Prospect intelligence** (becoming the prospect's customer, not contact finding) | The term is contested (Sales-Mind, BuyerForesight, Matter and others use it for buyer data) but nobody uses it for first-hand proof. The angle is open. | `/recipes/prospect-intelligence` |
| **Member price intelligence** | Exact phrase unused (2 searches, 0 results). A pricing vendor calls member prices "the hardest layer to see". Displayed loyalty prices (Clubcard, Nectar) are already scraped; logged-in, app-only, emailed-code and member-only prices are the gap. | `/use-cases/member-prices-for-price-intelligence` |
| **Outside-in audit** | A Forbes Agency Council piece (8 May 2026) names it; no product owns it. The Klaviyo audit tools we found need account access. | Post 2 |
| **AI mystery shopping for digital journeys** | The 2026 wave of AI mystery shoppers mostly calls staff or tests your own bots. Nobody owns "a labelled test customer lives the online journey, every message timed". | `/recipes/mystery-shopper` |
| **Trial teardown** | Onboarding teardowns are hand-made one-offs; PageCrawl says a rival's trial "needs a human to walk it once a quarter". | `/recipes/trial-teardown` |

### Terms we compete for (long tail, winnable)

Trust: is it legal to mystery shop competitors · is competitive intelligence legal · competitive intelligence vs industrial espionage · is mystery shopping ethical · can AI agents sign up / log in / make phone calls / send emails.
Method: AI mystery shopper · SaaS and B2B mystery shopping · mystery shopper report example · competitor email tracking · track competitor SMS · competitor trial onboarding emails · what happens after a competitor's ad click · speed to lead statistics · lead response time study · member and loyalty price monitoring · outside-in churn signals · agency client churn · why ChatGPT quotes the wrong price.

### Terms we leave alone

| Leave | Who owns it | What we do instead |
|---|---|---|
| mystery shopping, mystery shopper, best mystery shopping companies | Job seekers, gig sites, Wikipedia | AI mystery shopping, online and SaaS mystery shopping |
| best competitive intelligence tools | Crayon, Klue, Contify, Kompyte, Semrush (ChatGPT names all 5, 5 runs out of 5) | Competitor email and SMS tracking, trial teardowns |
| AI sales agent, AI agents for marketing | Lyzr, Tofu, Gartner Peer Insights, ZoomInfo, Outreach | Can AI agents sign up, call and email? |
| customer health score, customer success software ($12.50 CPC) | Gainsight, ChurnZero, Totango, Planhat | Outside-in churn signals for agencies |
| price monitoring software | Prisync, Price2Spy, Visualping, Bright Data | Member price intelligence |
| agentic commerce | Wikipedia, Salesforce, PayPal, Mastercard | Later: how your buyers' agents will judge you (B2B) |
| facebook ad library, best ad spy tool | Ad-intelligence vendors, YouTube tutorials | Following a rival's ad past the click |
| Other firms' coined terms | Direct Communication Intelligence (Axess), Synthetic Customers (Cresta), customer journey intelligence (Alterian), competitive enablement (Klue) | Never as headline terms |

### One owner per query

Two of our pages never target the same query. The non-owner links to the owner with the query as the anchor. "AI mystery shopper" belongs to `/recipes/mystery-shopper` (not Support bot check, as VERIFY.md 12 had it); Support bot check owns "test my chatbot". The rows from `/verify` to `/recipes/partner-checks` came from `_research/seo/AI-SEARCH-RUBRIC.md` Appendix C (3 Oct): re-rank them on Search Console data in November.

| Page | Owns |
|---|---|
| `/` | Obsession (brand), AI agents that do business with other companies |
| `/agencies` | AI agents for agencies, prove agency value to clients |
| `/founders` | test your own sign up and checkout as a customer, QA on every release |
| `/sales` | account intelligence for sales teams, know each account as its customers do |
| `/marketing` | check every ad, launch and rival as a customer; see competitors' emails, ads and prices as a customer |
| `/developers` | AI agent API with its own inbox, phone number and browser; give an AI agent an email address and phone number |
| `/verify` | check your AI agent as a customer; Customer-Side Assurance |
| `/recipes` | AI agent recipes for commercial teams |
| `/recipes/mystery-shopper` | AI mystery shopper |
| `/recipes/competitor-tracking` | competitor tracking |
| `/recipes/email-sms-tracking` | track competitor emails and texts (product) |
| `/recipes/trial-teardown` | competitor trial teardown |
| `/recipes/price-watch` | track competitor price changes |
| `/recipes/ad-tracking` | track competitor ads to the offer |
| `/recipes/prospect-intelligence` | prospect intelligence |
| `/recipes/speed-to-lead` (or `/recipes/lead-leaks`) | speed to lead test, lead response time audit |
| `/recipes/website-audit` | test signup flow after every release |
| `/recipes/delivery-monitoring` | email, text and login code delivery monitoring |
| `/recipes/account-watch` | external account signals, churn signals |
| `/recipes/business-case` | renewal business case |
| `/recipes/listings-ai-answers` | what AI assistants say about your business |
| `/recipes/get-paid`, `/recipes/supplier-quotes` | AI agent that chases invoices; AI agent for supplier quotes |
| `/recipes/support-bot-check` | test my chatbot; chatbot giving wrong answers |
| `/recipes/voice-agent-check` | test an AI receptionist before going live |
| `/recipes/ai-disclosure-check` | how to test if a chatbot is AI; chatbot disclosure check |
| `/recipes/vendor-agent-check` | how to evaluate an AI customer service agent |
| `/recipes/outbound-agent-check` | do AI SDRs work; check what an AI SDR sends |
| `/recipes/sales-agent-check` | AI sales agent quoting wrong prices |
| `/recipes/resolution-check` | are AI support resolutions real |
| `/recipes/drift-watch` | AI agent drift after an update |
| `/recipes/ai-checkout-test` | can AI shopping agents buy from my store |
| `/recipes/inbound-quotes` | answer every quote request in minutes |
| `/recipes/renewal-negotiation` | renewal discount request from a buyer's AI agent |
| `/recipes/cancellation-saves` | offer a pause before cancel |
| `/recipes/account-handover` | get accounts back from the old agency |
| `/recipes/software-renewals` | software price rise at renewal |
| `/recipes/expansion-offers` | find customers ready to buy more |
| `/recipes/client-upsells` | agency client upsells |
| `/recipes/review-requests` | ask every customer for a review |
| `/recipes/ad-landing-check` | ads sending clicks to a sold out page |
| `/recipes/partner-checks` | affiliate code and link checks |
| `/use-cases/prospect-intelligence-with-clay` | Clay prospect research workflow |
| `/use-cases/member-prices-for-price-intelligence` | member price intelligence |
| `/sample-output` | mystery shopper report example, abandoned cart test report |
| `/agents` | declared AI agent; an AI agent signed up to my website |
| Post 1 | is it legal to mystery shop competitors |
| Post 2 | free audit lead generation for agencies, outside-in audit |
| Post 3 | AI mystery shopping (tools, software) |
| Post 4 | speed to lead statistics |
| Post 5 | competitor email tracking (tools) |

---

## 3. Hubs and clusters

A hub is a topic map: its primary query, the sub-questions buyers ask, and the pages that answer them. Ranking across a topic's sub-questions correlated with AI citations far more than Domain Rating did in Floyi's 2026 study (0.33 to 0.51 against 0.09 to 0.16), so we publish to fill the map, not to chase single keywords.

The blog `category` field takes the hub name exactly as written here.

| Hub (category) | Slug | Primary query | Recipe group | Launch post |
|---|---|---|---|---|
| Declared agents | `declared-agents` | declared AI agent | (all) | Post 1 |
| Mystery shopping | `mystery-shopping` | online mystery shopping | Check your own journeys | Post 3 |
| Competitor intelligence | `competitor-intelligence` | how to track competitors | Watch rivals | Post 5 |
| Price intelligence | `price-intelligence` | member price intelligence | Watch rivals | (wave 2) |
| Prospect intelligence | `prospect-intelligence` | how to research a prospect before a sales call | Win customers | Post 2 |
| Speed to lead | `speed-to-lead` | speed to lead | Win customers | Post 4 |
| Account intelligence | `account-intelligence` | customer churn signals | Keep and grow customers | (wave 2) |
| AI answers | `ai-answers` | what does ChatGPT say about my business | Win customers | (wave 2) |

Get paid and Supplier quotes stay on their recipe pages until there is demand evidence; a ninth hub ("Agents at work", how buyers' agents will judge sellers) waits for Gartner's 90% figure to show up in real queries.

### Declared agents (the trust hub)

- **Own:** "declared AI agent" and "signed record". Our red lines are the content; every other hub links here.
- **Queries:** declared AI agent · signed agent · know your agent · web bot auth · is it legal to mystery shop competitors · is mystery shopping competitors legal · mystery shopping competition law · is competitive intelligence legal · competitive intelligence vs industrial espionage · is mystery shopping ethical · is it legal to sign up for a competitor's free trial · is free trial abuse illegal · can AI agents log in to websites · can AI agents make phone calls · can AI agents send emails · can AI agents bypass captcha · how to tell if an AI agent is backed by a real person · how to give an AI agent an email address and phone number.
- **Pages:** `/agents`, `/developers`, `/privacy`, Post 1. Later: Competitive intelligence vs industrial espionage; Can AI agents sign up, log in, call and email?; What a signed record proves.
- Home's agent verification pillar (name pending from its research) should share this hub's words.

### Mystery shopping

- **Own:** AI mystery shopping for digital journeys: a labelled test customer lives the journey and every message is timed. Declared, never a fake buyer.
- **Queries:** online mystery shopping · can you do mystery shopping online · AI mystery shopping · AI mystery shopper · AI secret shopper · mystery shopping software · mystery shopping tools · SaaS mystery shopping · B2B mystery shopping · mystery shopper report example · mystery shopping report template · mystery shopping checklist (online) · how much does mystery shopping cost · test my abandoned cart email · did my welcome email send · test signup flow · test an AI support bot like a customer · OTP not received testing.
- **Pages:** `/recipes/mystery-shopper`, `/recipes/website-audit`, `/recipes/delivery-monitoring`, `/sample-output`, Post 3. Later: Mystery shopping for SaaS without pretending to be a buyer; an online journey scorecard (template); Did the welcome email arrive? Why seed tests miss lifecycle failures; How to test your AI support bot like a customer would.

### Competitor intelligence

- **Own:** what rivals do to customers, not what their pages say. Every competitor monitor on Product Hunt diffs pages.
- **Queries:** how to track competitors · competitor monitoring · competitor tracking software · competitor email tracking · competitor email monitoring free · track competitor SMS · competitor newsletter monitoring · competitor welcome email examples · competitor trial teardown · competitor onboarding emails · competitor free trial monitoring · how to see competitor ads on facebook / meta / linkedin / tiktok / google · see competitor ads in ChatGPT (contested: at least 6 third-party libraries exist) · what happens when you text STOP.
- **Pages:** `/recipes/competitor-tracking`, `/recipes/email-sms-tracking`, `/recipes/trial-teardown`, `/recipes/ad-tracking`, `/marketing`, Post 5. Later: What 14 days inside a rival's free trial shows; What ad libraries can't show you; What happens when you text STOP (field report).

### Price intelligence

- **Own:** member price intelligence (logged-in, app-only, emailed-code and member-only prices), joined through the public sign up by a declared agent.
- **Queries:** member price intelligence · track competitor member prices · loyalty price monitoring · competitor promotion tracking · track competitor discount codes · do different customers see different prices · surveillance pricing law · personalised pricing check · competitor price monitoring.
- **Pages:** `/recipes/price-watch`, `/use-cases/member-prices-for-price-intelligence`. Later: The prices most monitors can't see; Same cart, different price (repeating Consumer Reports' method with separate declared identities).

### Prospect intelligence

- **Own:** prospect intelligence as first-hand proof (the agent becomes the prospect's customer), and the outside-in audit for agencies.
- **Queries:** prospect intelligence · how to research a prospect before a sales call · account research agent · Clay account research · Clay prospect research workflow · signal based selling · non-scrapeable personalisation · trigger events · free audit lead generation for agencies · agency lead magnet · outside-in marketing audit · productised agency audit · how to win agency clients. Avoid "prospect research" alone: its results are donor research (DonorSearch, Kindsight, AFP).
- **Pages:** `/recipes/prospect-intelligence`, `/use-cases/prospect-intelligence-with-clay`, `/agencies`, `/sales`, Post 2. Later: Prospect intelligence vs sales intelligence; The signal 50 other SDRs don't have.

### Speed to lead

- **Own:** the declared, multi-channel, own-funnel test (form, chat, phone and text, timed against a target, with the owner's OK). We never time other companies' staff.
- **Queries:** speed to lead · what is speed to lead · speed to lead statistics · speed to lead harvard study · lead response time study · lead response time harvard business review · lead response time statistics · speed to lead benchmark 2026 · how to test lead response time · leads outside business hours · speed to lead AI.
- **Pages:** `/recipes/speed-to-lead`, `/sales`, `/founders`, Post 4. Later: What happens to a lead that arrives at 6pm (consented runs only).

### Account intelligence (wave 2)

- **Own:** outside-in churn signals: what an account's own customers get, plus public signals, read with consent.
- **Queries:** customer churn signals · agency client churn · how to know a client is about to leave · external account signals · champion left company alert · renewal business case · prove agency value to clients.
- **Pages:** `/recipes/account-watch`, `/recipes/business-case`, `/sales`, `/agencies`.

### AI answers (wave 2)

- **Own:** wrong facts chased back to their source, and properly sampled AI-answer studies (repeats, paraphrases, intervals).
- **Queries:** what does ChatGPT say about my business · why does ChatGPT quote the wrong price · is my business info right in ChatGPT · does my store show up in ChatGPT · AI search visibility audit · prove AI visibility to clients.
- **Pages:** `/recipes/listings-ai-answers`, `/founders`, `/marketing`.

---

## 4. IA and navigation

### URLs

Lowercase, words joined with hyphens, no dates, no parameters, no trailing slash in the canonical. A slug never changes; if it must, add a 301 to `public/_redirects`.

```
/                                   Home
/agencies /founders /sales /marketing   Solutions (no /solutions page)
/developers
/recipes   /recipes/SLUG            15 recipes (+ /recipes/lead-leaks if the rename lands)
/use-cases                          NEW: index of worked examples
/use-cases/SLUG                     2 today; URLs James sends to prospects, never change
/sample-output
/blog                               NEW: the blog index
/blog/SLUG                          NEW: posts
/blog/topics/HUB                    NEW: hub pages (built by the rule below)
/blog/authors/seun-akinniranye      NEW: author pages (ProfilePage)
/blog/authors/james-akinniranye
/blog/rss.xml                       NEW: the feed
/agents   /privacy
404.html                            noindex, real 404 status
```

**Hub pages ship when they can carry their weight:** a hub page goes live once it can answer at least 6 of its sub-questions with real content of its own or links to ours (posts, recipes, use cases). It is a pillar page, never a bare archive: its primary query in the H1, a 1 to 2 sentence answer, the question map with 2 to 3 sentence answers that link to the deep page, the recipes that do the job, then the posts. Until a hub ships, its posts' category label links to its section on `/blog` (`/blog#mystery-shopping`).

**The blog index** groups posts by hub (newest first inside each), shows each post's answer line, and links every hub page that exists. Its title: "Obsession blog: field reports from declared AI agents" (53 characters).

**The use cases index** (`/use-cases`) lists both worked examples with their 1 line, so the breadcrumb on each has somewhere to go.

### Navigation

Superseded on 3 Oct: the bar now leads with the 5 readers as plain links, then Recipes and Resources (a link plus a menu each). The current design is `docs/REBUILD.md` section 7 and `_research/nav/NAV.md`; the plan below is kept as the record.

The top bar holds 4 links plus the call to action (the design system's rule):

```
[lockup]   Solutions ▾   Recipes ▾   Resources ▾   Developers          [theme]  [page CTA]
```

- **Solutions ▾** Agencies, Founders, Sales, Marketing, each with its 1 line (as today).
- **Recipes ▾** the 5 groups in 3 columns plus All recipes (as today).
- **Resources ▾** (new, replaces the separate Sample output and Use cases items), in this order:
  - **Sample output**: "A real store check: 4 test customers, 2 silent journeys."
  - **Use cases**: "Worked examples, start to finish." Below it, its 2 pages: Prospect intelligence with Clay; Member prices for price intelligence.
  - **Blog**: "Field reports and tool reviews, every number sourced."
- **Developers** stays a plain link.
- Menu triggers are `<button>`s, every destination an `<a href>` (Lighthouse `crawlable-anchors`). Built on `.ob-menu` with `--ob-*` tokens; list the Resources menu in the PR if the system lacks a variant.
- **Phone sheet** (`.ob-mnav`): the same 4 groups in the same order, Resources expanded, the call to action pinned at the bottom.

### Footer: the full site map

| Solutions | Recipes | Resources | Obsession |
|---|---|---|---|
| Agencies | All recipes | Blog | Developers |
| Founders | the 15 recipes under their 5 groups (from `content/nav`, as today) | each hub page, once built | Saw an Obsession agent? (`/agents`) |
| Sales | | Use cases | Privacy |
| Marketing | | Prospect intelligence with Clay | RSS feed |
| | | Member prices for price intelligence | |
| | | Sample output | |

Plus the red lines in 1 line and the theme switch, as today. The footer lists hubs, never every post.

### Breadcrumbs

Visible on every page below Home (`.ob-crumbs`, which folds middle crumbs into a More menu on phones) and as `BreadcrumbList` JSON-LD, both from `meta.breadcrumb`. Crumbs follow the URL, not the menus: Solutions and Resources have no page, so they never appear. The last crumb is plain text with `aria-current="page"`.

| Page | Breadcrumb |
|---|---|
| Audience pages, Developers, Sample output, Agents, Privacy | Home › Agencies (etc.) |
| Recipes index | Home › Recipes |
| A recipe | Home › Recipes › Prospect intelligence |
| Use cases index | Home › Use cases |
| A use case | Home › Use cases › Prospect intelligence with Clay |
| Blog index | Home › Blog |
| A hub page | Home › Blog › Mystery shopping |
| A post | Home › Blog › Mystery shopping › Post title (Home › Blog › Post title until its hub page exists) |
| An author page | Home › Blog › Seun Akinniranye |

On the centred heroes the crumbs sit centred above the pill, on the hero's axis (REBUILD 1c). On posts they sit left, above the H1, on the article column.

### Internal linking rules

1. **Every post links** up to its hub (crumb, plus 1 link in the body), out to the 1 recipe that does the job (the `cta` block, once, plus in-text), across to 2 or 3 sibling posts (`related`), to `/sample-output` wherever it talks about proof, and to Post 1 wherever it mentions agents at rivals or prospects.
2. **Every recipe page links** to the most relevant post (and its hub page once built) in its questions answers. A link to our own guide is not a citation, so the no-sources rule holds.
3. **Every audience page links** to 1 or 2 posts for its reader in its questions block: Agencies to Post 2, Founders to Post 3, Sales to Post 4, Marketing to Post 5. `/agents` links to Post 1.
4. **Anchors describe the destination**, using its query naturally ("our AI mystery shopper recipe", "is it legal to mystery shop competitors"). Never the Lighthouse blocklist: click here, click this, go, here, information, learn more, more, more info, more information, right here, read more, see more, **start**, this. Blog cards link their title.
5. **No orphans:** a post goes live only with at least 3 internal links in (the blog index, its hub section, and a recipe or audience page), added in the same PR.
6. **Use cases** are linked from the matching recipe and posts: the Clay example from every prospect intelligence post, member prices from every price post.
7. **External links:** every number links to its primary source (the `stat` block's `href`) and the post ends with its `sources`. No affiliate links, no paid placement, ever.
8. **1 quiet CTA per post**, never in the first screen. The waitlist form at the foot carries the post's recipe as its interest, so the sheet's Page column shows which posts sign people up.

---

## 5. The 5 launch posts

### What every post has

- The `answer` field (1 to 2 sentences, entity names, no pronouns) shown under the title, so the definition and the key number sit in the first 30% of the page, where 44% of ChatGPT's citations come from.
- 1 piece of new information: a real run, a signed record, a dated price table or a graded synthesis, with its method and sample.
- Question H2s only where a reader asks that question; a table for any comparison; 1 sourced `stat` per claim; an app screen beside the paragraph it proves.
- Buyers' own words, from the questions research (`research-questions.md`) and real calls.
- Both founders bylined; visible Published and Updated dates; a method note.
- Gates: `node ~/.claude/skills/no-meta-callouts/scan.mjs`, the human-copy scanner, every number traced, the red lines, Lighthouse SEO 100, screenshots at 390 and 1440 in both themes.

### Review rules (Posts 3 and 5)

1. **Criteria first:** what it can see, who it contacts, whether it says it's AI, the proof you get, price as listed, who it suits, where it falls short.
2. **Facts from each vendor's own pages** (or an independent source), every price and claim dated, all re-checked within 7 days of publishing. Try each free tier where allowed, signed up as Obsession staff (our own red line).
3. **Obsession appears once, labelled as ours** in a disclosure line at the top and in its own entry, judged on the same criteria with its limits stated. Tools are grouped by job and listed alphabetically inside each group, so Obsession is never first by default.
4. **No star ratings, no "winner" badges, no Review or AggregateRating markup.** A "sees / doesn't see" grid instead.
5. **Describe practices in the vendor's own words** ("Your staff never knows it's a test"); state our line as ours; never call a competitor unethical.
6. **Right of reply:** email each vendor the facts after publishing; correct within 5 working days and log it in an "Updated" line.
7. **The year in the title is a promise:** re-check every quarter and change `updated` only when something substantive changes.
8. Tools in the research but not re-verified are listed under "verify before including" and stay out until checked.

---

### Post 1. Is it legal to mystery shop your competitors?

| | |
|---|---|
| Slug | `is-it-legal-to-mystery-shop-competitors` |
| Category | Declared agents |
| Reader | Founders, marketing, sales and agencies (and their clients' legal teams) |
| Meta title | Is it legal to mystery shop your competitors? 2026 guide (56) |
| Description | Mystery shopping rivals is usually lawful through public paths, as yourself. How deception, terms and trade secrets change that, for people and AI agents. (154) |
| Primary | is it legal to mystery shop competitors |
| Secondary | is mystery shopping competitors legal · mystery shopping competition law · is competitive intelligence legal · competitive intelligence vs industrial espionage · is mystery shopping ethical · is it legal to sign up for a competitor's free trial · is free trial abuse illegal · can AI agents log in to websites · declared AI agent · is mystery shopping legal in the UK |
| Intent | Informational: a risk check before running or buying competitor research |

**Draft answer (lawyer to review):** Mystery shopping a competitor is generally lawful when you use the same public paths any customer can, as yourself, and stop short of deceiving staff, breaking terms you agreed to or taking trade secrets. The risk comes from deception and access, not from looking, and it now applies to AI agents too: in August 2026 the Ninth Circuit called a shopping agent "a tool, not a person" but left terms of service open.

**Why it will be searched:** all of these autocomplete live: "is mystery shopping competitors legal", "mystery shopping competition law", "is competitive intelligence legal/illegal", "competitive intelligence vs industrial espionage", "is free trial abuse illegal", "can ai agents login to websites", "is mystery shopping legal in uk", "is mystery shopping ethical". The results are a 2021 Medium post, JustAnswer, Experts-Exchange, a 2013 law blog and one Jan 2025 legal guide (Scout Insights); CI legality is held by vendors (Kompyte, Crayon). Buyers ask unprompted: an AE's post on a head of research who "created a fake company with a fake website" drew 79 comments ("This *feels* super illegal"), and founders spot undisclosed rival sign ups ("Our competitor's CEO just signed up", 301 points). The agent version is live news: Amazon v. Perplexity, Cloudflare's signed agents, the Know-Your-Agent collaboration (Sept 2026). Score 9/10, the best opportunity in the research.

**Angle:** the only page that answers both the old question (people posing as buyers) and the new one (AI agents doing the shopping) from primary sources dated 2025 and 2026. A method-by-method table (read public pages; join a newsletter; start a no-card trial; ask the chat bot; book a demo as a made-up company; call staff as a pretend buyer; log in with someone else's account; get past a CAPTCHA) with the risk each carries and why. It closes with our red lines published as a standard anyone can adopt.

**Outline (H2s):**
1. Is it legal to mystery shop a competitor?
2. What turns competitor research into a legal problem? (deception, contracts, trade secrets, access)
3. Can you sign up for a competitor's free trial?
4. Where do fake companies and pretend buyers cross the line? (SCIP's disclosure rule; Octopus Intelligence's own words, "We pose as genuine prospective buyers"; frame Mystery Demo carefully: it says "We never pretend to be someone else" and builds "a believable company profile, use case, and buying scenario")
5. Do the rules change when an AI agent does the shopping? (Amazon v. Perplexity; Cloudflare's Agent category and signed agents; DataDome's spoofing numbers)
6. Is mystery shopping regulated anywhere? (Nevada's PI board treats staff-evaluating mystery shopping as PI work, with a public-information exclusion; MRS 2020 and MSPA Europe 2023 are silent on AI; ICC/ESOMAR's 2025 revision adds AI duties for research in general)
7. Declare the agent, use public paths, stop before payment (our 8 rules: say it's AI and who it works for; public self serve paths only at rivals and prospects; ask the bot, never staff; no card, no basket at rivals; close the trial when a rep writes; stop before payment on anyone's store; a client's journeys only with the owner's OK; keep a signed record)
8. Competitor sign ups, staff calls and burner emails, answered (FAQ: Is mystery shopping legal in the UK? Can a competitor sign up for my product? Is competitive intelligence the same as industrial espionage? Can AI agents log in to websites? Can I use a burner email to sign up for a rival's trial?)

**Screens:** `kit` (a declared identity, field by field, card capped at £0), `battlecard` (Rival B's trial closes on day 6 when its rep writes), `run` (a signed record, verified).

**Sources to cite:**
- SCIP, Code of Ethics ("disclose ... one's identity and organization, prior to all interviews"): https://www.scip.org/page/Ethical-Intelligence
- Pragmatic Institute, legal and ethical guardrails for CI, 15 May 2019: https://www.pragmaticinstitute.com/resources/articles/product/the-legal-and-ethical-guardrails-for-sound-competitive-intelligence/
- IPO, trade secrets white paper, Nov 2009 (authoritative, old): https://ipo.org/wp-content/uploads/2013/03/Nov2009TradeSecretsWhitePaper.pdf
- agentatwork, terms of service survey (26 of 45 prohibit automated access; 2 define machine accounts), 15 Aug 2026. Self-published by an AI agent: cite as a small independent study: https://agentatwork.xyz/notes/machine-account.html
- The Seattle Times, Amazon sues Perplexity, 6 Nov 2025: https://www.seattletimes.com/business/amazon/amazon-sues-to-stop-perplexity-from-using-ai-tool-to-buy-stuff/
- Eric Goldman, Ninth Circuit lifts restrictions (4 Aug 2026 ruling, No. 26-1444), Aug 2026: https://blog.ericgoldman.org/archives/2026/08/ninth-circuit-lifts-restrictions-on-agentic-ai-accessing-amazon.htm
- Cloudflare, signed agents, 28 Aug 2025: https://blog.cloudflare.com/signed-agents/ and Web Bot Auth, 15 May 2025: https://blog.cloudflare.com/web-bot-auth/
- Cloudflare, Perplexity's undeclared crawlers, 4 Aug 2025: https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/
- Cloudflare changelog, new AI traffic options, 1 Jul 2026: https://developers.cloudflare.com/changelog/post/2026-07-01-ai-traffic-options/ and "Your site, your rules": https://blog.cloudflare.com/content-independence-day-ai-options/ (say it right: the Agent category is blocked on ad pages of new domains, declared or not, and a verified label only makes a bot allowable within its category)
- Business Wire, Ant, Mastercard and Visa begin Know-Your-Agent collaboration, 9 Sep 2026 (early stage, not a launched framework): https://www.businesswire.com/news/home/20260909003891/en/Ant-International-Mastercard-and-Visa-Initiate-Collaboration-on-Know-Your-Agent-Interoperability-to-Scale-Agentic-Commerce
- Security Boulevard (DataDome), 80% of agents rely on spoofable user agents, 79.7% of 698,214 sites let a spoofed one through, 26 Feb 2026: https://securityboulevard.com/2026/02/the-ai-agent-identity-crisis-80-of-agents-dont-properly-identify-themselves-80-of-sites-dont-verify/
- IETF Web Bot Auth draft, 1 Sep 2026: https://datatracker.ietf.org/doc/draft-ietf-webbotauth-httpsig-protocol/
- MRS Guideline on mystery shopping, Mar 2020: https://www.mrs.org.uk/pdf/MRS-Guideline-Conducting-Mystery-Shopping.pdf
- MSPA Europe and Africa Guidelines vs 2 (12 Dec 2023), ICC/ESOMAR International Code (June 2025 revision), NRS 648.012 and the Nevada PILB work card study guide: add the links at legal review
- Reddit r/sales, 15 Mar 2026: https://www.reddit.com/r/sales/comments/1ruu0dh/legality_of_lying_to_obtain_competitor_information/ and r/SaaS, 4 Oct 2025: https://www.reddit.com/r/SaaS/comments/1ny4skt/our_competitors_ceo_just_signed_up_on_our_website/
- IEEE Spectrum, 13 Feb 2025, as history only (what agents "can't yet" do): https://spectrum.ieee.org/ai-agents-computer-use
- Amazon's agent terms (identify as `Agent/[name]`): secondary sources only; quote only after reading Amazon's own page.

**Internal links:** `/agents`, `/recipes/competitor-tracking`, `/recipes/trial-teardown`, `/recipes/email-sms-tracking`, `/recipes/mystery-shopper`, `/recipes/prospect-intelligence`, `/developers`, Posts 2, 3 and 5.

---

### Post 2. The free audit that wins agency clients

| | |
|---|---|
| Slug | `free-audit-agency-clients` |
| Title | The free audit that wins agency clients: what the prospect's customers receive |
| Category | Prospect intelligence |
| Reader | Agencies (the main ICP): ecommerce, lifecycle, CRO and outbound agencies |
| Meta title | Free audits that win agency clients: the outside-in method (58) |
| Description | How agencies win clients with a free audit of what a prospect's customers receive, built on a real 48 hour store check where 2 of 4 journeys went silent. (153) |
| Primary | free audit lead generation for agencies |
| Secondary | outside-in marketing audit · agency lead magnet · free email marketing audit · welcome email audit · abandoned cart email audit · productised agency audit · paid audit to retainer · prospect intelligence · how to win agency clients |
| Intent | How to, with a commercial edge (an agency owner choosing how to win clients) |

**Draft answer:** An outside-in audit tests a prospect's business the way a customer meets it: a labelled test customer signs up, asks the chat bot and waits, and every message that arrives, or doesn't, is timed and recorded. In a real September 2026 store check, 2 of 4 journeys got no follow up in 48 hours.

**Why it will be searched:** pipeline is agencies' number 1 problem (67%, AMI Agency Core 2026), and the audit that turns into a retainer is their common launch pattern ($500 to $5,000, mid-market $1,500 to $2,500: Similarweb, Jun 2026). The results for audit-led outreach are small tools (Insites Jul 2024, Ciela, ClearAudit, AuditPitch). Forbes Agency Council named "outside-in marketing audits" in May 2026, but no product owns it, and the Klaviyo audit tools we found need the client's account. Agency owners say it in their own words: "I kept losing clients who couldn't see what they were paying for". Score 8/10. Volume is modest; this post is a link and citation magnet for the main ICP.

**Angle:** the only audit guide built on a real, dated, signed run, the September 2026 Brand G check (4 journeys, 48 hours watched, 5 messages, cart and checkout silent), set against the only 2026 study of what customers receive (Joy Joya: of 362 brands, 43.6% sent no welcome email, 14.6% never sent the promised text, 20 offers didn't match the pop-up). It gives agencies a 2-tier audit that respects the red lines: **tier 1 without asking** (public paths only: sign up, texts opt in, the chat bot, public pages and ads, declared as AI); **tier 2 with the owner's OK** (basket and checkout journeys, which is where the September gaps were). Tier 1 finds the gap; the offer of tier 2 opens the conversation.

**Outline (H2s):**
1. Why do most free audits fail to win the client? (opinions about a website, reports nobody opens)
2. What is an outside-in audit?
3. What did a 48 hour check of a real store find? (Brand G: 4 test customers, the timeline, the 2 silent journeys, the drafted reminders)
4. How often do welcome, cart and checkout messages fail? (Joy Joya 2026; Cordial 2018; Iterable 2017; why it costs: Klaviyo flows earn about 41% of email revenue from 5.3% of sends)
5. Which journeys can an agency test without asking? (tier 1: public paths; tier 2: baskets and checkouts with the owner's OK; for SaaS prospects: sign up, the day 1 to 7 emails, the bot, trial end, with no card)
6. What should an agency charge for an audit? (free versus paid; the ranges; the audit as the first month of a retainer)
7. How does an audit become monthly proof a client reads? (the report and the signed record)
8. Charging, timing and permission, answered (FAQ: Should agencies charge for audits? How long should a test run? Can I audit a prospect without permission? What should a free email audit include?)

**Screens:** `pack` (a prospect's pitch pack building with 3 findings), `leads` (50 prospects from Clay, the 13 with a proven gap rising), `switch` (30 companies that switched email tool, welcome series stopping), `report` (the monthly client report in the agency's brand), plus the real captures in `public/report` (`draft-cart.png`, `draft-checkout.png`) as figures.

**Sources to cite:**
- Obsession sample output, real store check, 22 to 24 Sep 2026: https://useobsession.com/sample-output (state only what that page states)
- Joy Joya, "I tested 362 brands", 27 Jul 2026: https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands
- Cordial, Total Retail Top 100 welcome emails, 2018: https://cordial.com/resources/analyzing-the-welcome-emails-of-total-retails-top-100-omnichannel-retailers/
- Iterable, User Engagement Top 100, Q1 2017: https://iterable.com/wp-content/uploads/2017/02/Iterable_UETop100_EmailEcommerce_Q117.pdf
- Klaviyo, 2026 email benchmarks (flows about 41% of revenue from 5.3% of sends): https://www.klaviyo.com/products/email-marketing/benchmarks
- Omnisend, 2026 ecommerce report (automations 2% of sends, 30% of revenue): https://www.omnisend.com/resources/reports/2026-ecommerce-marketing-report/
- Klaviyo, what nearly 100 account audits revealed, 12 Feb 2026: https://www.klaviyo.com/blog/email-sms-marketing-priorities-2026
- Agency Management Institute, Agency Core 2026: https://agencymanagementinstitute.com/wp-content/uploads/2026/05/Agency-Core-2026_Executive-Summary.pdf
- Similarweb, how agencies can offer AI visibility services, 1 Jun 2026: https://aisearch.similarweb.com/blog/agencies-ai-visibility/
- AgencyAnalytics, 2026 benchmarks (budget cuts 42% top churn cause; 55% asked to tie marketing to revenue): https://agencyanalytics.com/agency-benchmarks-2026
- Forbes Agency Council, outside-in marketing audits, 8 May 2026: https://www.forbes.com/councils/forbesagencycouncil/2026/05/08/outside-in-marketing-audits-see-your-brand-like-your-customers-do/
- FlowAudit (needs a read-only Klaviyo API key): https://www.flowaudit.io/
- Reddit r/agency, 28 May 2026: https://www.reddit.com/r/agency/comments/1tq0t22/have_you_ever_lost_a_retainer_client_without/ and the title of 1s4iwpc (26 Mar 2026)

**Internal links:** `/agencies`, `/recipes/prospect-intelligence`, `/use-cases/prospect-intelligence-with-clay`, `/recipes/mystery-shopper`, `/recipes/email-sms-tracking`, `/sample-output`, Posts 1 and 5.

---

### Post 3. The best AI mystery shopping tools in 2026

| | |
|---|---|
| Slug | `best-ai-mystery-shopping-tools` |
| Title | The best AI mystery shopping tools in 2026, compared by what they test |
| Category | Mystery shopping |
| Reader | Founders, CX and ecommerce leads, agencies that sell CX audits |
| Meta title | Best AI mystery shopping tools in 2026, compared by job (55) |
| Description | AI mystery shopping tools compared on what each tests, who it contacts, whether it says it is AI, the proof you get and the price, checked October 2026. (152) |
| Primary | AI mystery shopping |
| Secondary | best AI mystery shopping tools · AI mystery shopper · AI secret shopper · mystery shopping software · mystery shopping tools · online mystery shopping · SaaS mystery shopping · AI shadow caller · test AI customer service agent · mystery shopping cost |
| Intent | Commercial investigation |

**Draft answer:** AI mystery shopping tools send software agents to play the customer. In 2026 they split into 3 kinds: voice agents that call your staff as a pretend customer, simulators that test your own AI bots, and agents that walk a website or trial journey; pick by what you need to see, who the agent contacts and whether it says it's AI.

**Why it will be searched:** "ai mystery shopper", "ai mystery shopping", "ai secret shopper", "mystery shopping software" and "mystery shopping tools" all autocomplete. The results are young and scattered (Checker, Evalyn, a forum thread); "mystery shopping software" lists are retail field-audit apps, and the 2026 lists are AI-scored (Gitnux) or ranked by app-store ratings (Lumiform). The supply side is filling fast: S-PRO launched in July 2026, joining mocktomer, PressTwo, AdStack and Implement AI, against a human industry put at $2.31B for 2025 by one analyst (QY Research says $1.05B: give the range) at about $209 a shop (IBISWorld, 2026). Score 8/10.

**Angle:** the first review sorted by what each tool actually tests and who its agent contacts, with every price dated and the human benchmark beside it. A "sees / doesn't see" grid, and an honest answer to when a human shopper still wins (store visits, a salesperson's manner).

**Tools (verified facts; re-check all before publishing):**

| Group | Tool | Verified facts |
|---|---|---|
| Calls your staff as a customer | AdStack AI Secret Shopping | CX monitoring; "Your staff never knows it's a test" |
| | Implement AI | Feb 2026 page: "Called 47 competing insurance brokers" in 3 days (rivals' staff) |
| | PressTwo AI Shadow Caller | "dials your phone reps posing as a real customer"; $149 a month for 100 tests |
| Tests your own AI agents | Cresta Synthetic Customers | 28 May 2026; a model of your customer base to test your own agents |
| | LivePerson Syntrix | Mar 2026; "60% faster" is labelled an estimate |
| Walks a website or trial journey | mocktomer | Personas shop your site; "never places real orders" |
| | Obsession (ours) | Declared agents with their own inbox, number and browser; your own journeys with your OK (baskets stop before payment); at rivals public paths and the bot only; signed record; the September store check; in early access |
| | Qualified, Test My Response Time | Free; a "secret shopper experiment" on response time |
| | S-PRO Mystery Shopper AI Suite | 29 Jul 2026; "autonomous shopper agents" with personas across email, forms, chat, phone and advisor booking; competitor benchmarks; "90% cost reduction target"; no disclosure language found |
| Human benchmark | IBISWorld | $209 per shop, US, 2026 |
| | CustomerOptix | From $45 across shop types; 48 to 72 hours, usually within 2 weeks |
| | T-ROC | $40 to $150 per store visit (May 2026) |
| | Intouch Insight | Human online shoppers, including member prices "hidden from public view" |
| Verify before including | DeepCall, Evalyn, Firecoach, Gen.QA, TokenSurf, UndercoverAgent (launched Feb 2024, not part of the 2026 wave), Pulse (undated page, may be dormant) | |

**Obsession's limits, stated in its entry:** it never calls staff, so it can't grade a salesperson's phone manner; it stops before payment, so it can't test a paid order or delivery; at rivals it never fills a basket; it's in early access.

**Outline (H2s):**
1. What is AI mystery shopping?
2. Which AI mystery shopping tool fits which job? (the grid: tool, tests, who it contacts, says it's AI, proof, price, checked on)
3. Which tools call your staff as a customer?
4. Which tools test your own AI agents before customers do?
5. Which tools walk a website or trial like a customer?
6. When is a human mystery shopper still the better buy?
7. How much does AI mystery shopping cost against a human shopper?
8. Should an AI mystery shopper say it's AI? (link Post 1; disclosure and staff consent)
9. Every price and claim checked between [dates] on each vendor's own pages (method and disclosure)
10. Cost, legality and SaaS trials, answered (FAQ)

**Screens:** `shop` (6 declared test customers across a SaaS trial, a homeware store and a dental booking), `kit` (the declared identity), `run` (the signed record). Plus a capture from `/sample-output`.

**Sources to cite:**
- PressTwo: https://presstwo.ai/solutions/ai-shadow-caller
- AdStack: https://www.adstack.com/ai-secret-shopping
- Implement AI, 8 Feb 2026: https://implementai.io/mystery-shopping/
- Cresta, 28 May 2026: https://cresta.com/blog/introducing-synthetic-customers-a-living-model-of-your-customer-base
- CX Today on LivePerson Syntrix, 2026: https://www.cxtoday.com/customer-engagement-journey-orchestration/liveperson-conversational-cloud/
- mocktomer: https://mocktomer.ai/
- S-PRO, 29 Jul 2026: https://s-pro.io/mystery-shopper-ai-suite
- Qualified: https://www.qualified.com/resources/test-my-response-time
- IBISWorld, 2026: https://www.ibisworld.com/united-states/procurement/mystery-shopping-services/53965161/
- Fortune Business Insights, updated 15 Jun 2026: https://www.fortunebusinessinsights.com/mystery-shopping-services-market-111774
- CustomerOptix: https://www.customeroptix.com/services/mystery-shopping
- T-ROC, 4 May 2026: https://trocglobal.com/mystery-shopping-services/
- Intouch Insight, 17 Nov 2025: https://www.intouchinsight.com/blog/online-mystery-shopping
- Checker, the industry's own warning ("risk being replaced not by competitors, but by platforms"), 5 Dec 2025: https://www.checker-soft.com/the-biggest-issues-in-mystery-shopping-and-cx-research-in-2025-and-how-agencies-can-fix-them-in-2026/
- Gartner, agentic AI will resolve 80% of common service issues by 2029, 5 Mar 2025: https://www.gartner.com/en/newsroom/press-releases/2025-03-05-gartner-predicts-agentic-ai-will-autonomously-resolve-80-percent-of-common-customer-service-issues-without-human-intervention-by-20290

**Internal links:** `/recipes/mystery-shopper`, `/sample-output`, `/recipes/website-audit`, `/recipes/speed-to-lead`, `/founders`, `/marketing`, Posts 1 and 4.

---

### Post 4. Speed to lead statistics: which numbers hold up in 2026

| | |
|---|---|
| Slug | `speed-to-lead-statistics` |
| Category | Speed to lead |
| Reader | Sales leaders, RevOps, founders (and agencies that run lead gen) |
| Meta title | Speed to lead statistics: which numbers hold up in 2026 (55) |
| Description | The 5 minute rule came from a 2007 InsideSales study, not Harvard. Every speed to lead statistic graded by source, plus how to time your own funnel. (148) |
| Primary | speed to lead statistics |
| Secondary | speed to lead harvard study · lead response time study · lead response time harvard business review · lead response time statistics · speed to lead benchmark 2026 · what is speed to lead · 5 minute rule lead response · how to test lead response time · speed to lead data |
| Intent | Informational (research), with a how to |

**Draft answer:** The best-known speed to lead figures come from a 2007 InsideSales.com study analysed by James Oldroyd, not from Harvard Business Review: leads contacted within 5 minutes were 100 times likelier to be reached than after 30. HBR's 2011 study of 2,241 companies found an average first reply of 42 hours, and in September 2026 Clay reported that 68% of 6,346 companies never replied to a demo request.

**Why it will be searched:** "speed to lead" returns 34 autocomplete suggestions, including "statistics", "harvard study", "reddit" and "software"; "lead response time" adds "harvard business review", "study" and "statistics". The figures everyone quotes are 9 to 19 years old and often wrong: the 2007 study is misattributed to HBR (Workato's own 2026 study does it), "78% buy from whoever responds first" has no traceable source, and "35 to 50% of sales go to the first responder" has none either. Fresh measurements landed in 2026 (Clay, Optifai, Visionary Marketing, MarketBetter, Marklinea's pre-registered re-test), so people are searching for which to believe. Competitive (stat farms, AI reply vendors, Expertise.ai's debunk), so the edge has to be the grading and the method. Score 7/10.

**Angle:** a source-graded ledger of every number people quote: where it came from, the year, the sample, what it actually measured, and a grade (holds up / directional / no traceable source), tagged the way Stripo tags its own statistics. Then the 2026 measurements, read carefully (Clay used 1 synthetic persona and doesn't say its agents disclosed they were AI; some non-replies may be correct disqualifications). Then the method nobody publishes: a declared, labelled test lead through your own form, chat, phone and text, 3 times a day including after hours, timed against a target, with the owner's OK. It also explains why we never time other companies' staff.

**Outline (H2s):**
1. What is speed to lead?
2. Where does the 5 minute rule come from? (Oldroyd and InsideSales.com, 2007: 100 times the contact odds and 21 times the qualification odds at 5 minutes against 30; it measured contact, not sales)
3. What did the Harvard Business Review study actually find? (March 2011, 2,241 companies, 42 hours on average)
4. Which speed to lead statistics have no source? (78%; 35 to 50%)
5. What do the 2026 measurements show? (Clay: 6,346 forms, 32% got an email reply, 96% never phoned, about 7% heard from a salesperson; RevenueHero 2024: 365 of 1,000 replied, average 1 day 5 hours; Optifai, vendor data: 47 hours across 939 companies; SaaStr: under 40% of inbound answered before agents, 100% after)
6. How do you time your own lead response across form, chat, phone and text? (the method and a sheet to copy: first reply, first human reply, channel, owner in the CRM, after hours)
7. What is a good lead response time in 2026?
8. Harvard, B2B and AI replies, answered (FAQ: Is the Harvard speed to lead study real? Does speed to lead matter in B2B? Should an AI agent answer new leads? Can I test a competitor's response time? We don't: it spends their staff's time on a lead that isn't real.)

**Screens:** `inbound` (a labelled test lead at 09:00, 13:00 and 17:00; chat in 38 s, the form in 4 h 12 m, the phone missed, the fix tested), `approve` (the Needs you inbox), `pilot` (a 30 day pilot, labelled as an example, never as data).

**New data, if it's real by publish date:** 1 dated own-funnel run with a design partner's written OK, published as an aggregate. If not, the post ships without it; nothing is invented.

**Sources to cite:**
- Harvard Business Review, The Short Life of Online Sales Leads, Mar 2011: https://hbr.org/2011/03/the-short-life-of-online-sales-leads
- Expertise.ai, speed to lead statistics with folklore debunked, 6 Jul 2026 (cite the 2007 study as "Oldroyd / InsideSales.com Lead Response Management Study"): https://www.expertise.ai/stats/speed-to-lead-statistics
- Workato, 114 companies, 19 Mar 2026: https://www.workato.com/the-connector/lead-response-time-study/
- RevenueHero, 1,000 B2B sales teams, 20 Mar 2024: https://www.revenuehero.io/blog/b2b-lead-response-times
- Clay, "We asked 6,346 companies for a demo", 22 Sep 2026 (the publish date; Clay doesn't say when the forms were filled): https://www.clay.com/blog/claygent-experiment-speed-to-lead and the benchmark: https://makes.clay.com/benchmarks/speed-to-lead
- Optifai, 939 companies (vendor data): https://optif.ai/learn/questions/lead-response-time-benchmark/
- Marklinea, inbound response benchmark (pre-registered; results were due 1 Oct 2026, check before publishing), 27 Aug 2026: https://marklinea.com/blog/inbound-response-benchmark
- EmailAnalytics (now says 35 to 50% "has no traceable primary source"), May 2026: https://emailanalytics.com/lead-response-time/
- SaaStr, 1.25 humans and 20 AI agents, 2026: https://www.saastr.com/our-1-25-humans-20-ai-agents-closed-140-of-what-our-all-human-sales-team-did-last-year-but-im-not-sure-thats-the-real-story/
- Gartner, 67% of B2B buyers prefer a rep-free experience, 9 Mar 2026: https://www.gartner.com/en/newsroom/press-releases/2026-03-09-gartner-sales-survey-finds-67-percent-of-b2b-buyers-prefer-a-rep-free-experience
- Reddit r/smallbusiness on leads after hours, 9 Feb 2026: https://www.reddit.com/r/smallbusiness/comments/1r08ay9/how_do_you_handle_leads_that_come_in_outside/

**Internal links:** `/recipes/speed-to-lead` (or `/recipes/lead-leaks`), `/sales`, `/founders`, `/agencies`, `/recipes/mystery-shopper`, Posts 1 and 3.

---

### Post 5. The best competitor email and SMS tracking tools in 2026

| | |
|---|---|
| Slug | `best-competitor-email-tracking-tools` |
| Category | Competitor intelligence |
| Reader | Marketing and lifecycle teams, retention agencies, PMMs |
| Meta title | Best competitor email and SMS tracking tools in 2026 (52) |
| Description | Competitor email and SMS tracking tools compared: archives, panels and live subscribers, what each can see, where each falls short, and the price in 2026. (154) |
| Primary | competitor email tracking |
| Secondary | track competitor emails · competitor email monitoring free · track competitor SMS · competitor newsletter monitoring · how to see competitors' email campaigns · competitor welcome email examples · competitor onboarding emails · Mailcharts alternative · Panoramata alternative |
| Intent | Commercial investigation |

**Draft answer:** Competitor email and SMS tracking tools collect rivals' messages in 3 ways: curated archives, consumer panels and subscriber inboxes you control. Archives and panels show campaigns and common flows across thousands of brands; to see one specific journey, such as a B2B trial's onboarding or what happens after you reply STOP, you need a subscriber that lives it.

**Why it will be searched:** small but high-intent ("competitor email tracking", "competitor email monitoring free"); the results are vendors ranking themselves first (Panoramata's "7 Top Tools", Reyo, CompetitorTrack, Competitors App) and how-tos that tell readers to subscribe by hand. The market just consolidated (Mailcharts is now a Litmus enterprise add-on; Bird and Axess read from consumer panels), so buyers are re-shopping. The money is in flows (Klaviyo: about 41% of email revenue from 5.3% of sends) and PMMs say rival research tells you "what a company wants prospects to believe, but not necessarily what customers actually experience". Score 7/10.

**Angle:** grade every tool on what it can see (broadcast campaigns, welcome series, cart and browse flows, SMS, B2B trial and onboarding sequences, the reply to STOP, whether the offer matches the pop-up), with dated prices. Include the free do-it-yourself method fairly. Be honest about our own gap: by our own rule Obsession never fills a basket at a rival, so it can't see a rival's abandoned cart flow, which archives and panels can.

**Tools (verified facts; re-check all before publishing):**

| Group | Tool | Verified facts |
|---|---|---|
| Archives | BadRep | $19 a month; 14,000+ classified emails as of June 2026; 500+ brands; classifies welcome, win-back and lifecycle flows |
| | Litmus (Mailcharts upgrade) | Mailcharts is now a Litmus Enterprise add-on, 2,500+ curated ecommerce brands (mailcharts.com/pricing serves Litmus pricing) |
| | Panoramata | €99, €149 or €379 a month ($99, $179, $399); markets "Email, SMS & Flows Tracking" |
| | Validity Engage | Competitor intelligence and inspiration (Validity owns Litmus; confirm how the 2 relate before publishing) |
| Panels | Axess Intelligence | 5,000+ brands from "privacy-compliant panel apps"; email, SMS, push and in-app; sign up journeys compared on days 1, 2, 3 and 7 |
| | Bird Competitive Tracker | A "measurement panel"; in 2020 a persona network subscribed with a fresh address per list |
| Live subscriber | Do it yourself | A dedicated inbox and number, a calendar and a sheet; free, slow, misses timing |
| | Obsession (ours) | A declared subscriber per rival with its own inbox and number, signed captures, the journeys you pick (welcome, texts, no-card trials, STOP); no back catalogue, only the companies on your list, no rival baskets; in early access |
| Verify before including | SendView, Competitor Inbox, Reyo, CompetitorTrack, Competitors App, Hoppy Copy | |

**Outline (H2s):**
1. How do you track a competitor's emails and texts?
2. Which competitor email tracking tool fits your team? (the grid)
3. Which tools give you a library of rivals' campaigns?
4. Which tools read from consumer panels?
5. What do archives and panels miss? (a chosen journey on a fresh identity: B2B trial onboarding, which PageCrawl says "needs a human to walk it once a quarter"; the reply to STOP, after the FCC adopted its revised revocation order on 30 Sep 2026 and the FTC fined Experian $650,000 and Verkada $2.95m; no outside-in SMS STOP study exists, though email unsubscribe audits ran from 2014 to 2018)
6. Can you track competitor emails for free?
7. Obsession lives the journey you choose, as a declared subscriber (our entry, disclosed)
8. Every price and feature checked between [dates] on each vendor's own pages (method and disclosure)
9. Legality, cart flows and SMS, answered (FAQ: Is it legal to sign up for a competitor's emails? Can I see a competitor's abandoned cart emails? How do I track competitor texts? What's the difference between campaign and flow tracking?)

**Screens:** `inbox` (3 rivals' emails and texts on 1 timeline), `report` (the monthly report an agency sends), `battlecard` (3 rivals' no-card trials, day by day), `winback` (a text unsubscribe ignored, captured).

**Sources to cite:**
- Panoramata, pricing: https://www.panoramata.co/pricing and its listicle: https://www.panoramata.co/benchmark-marketing/tools-track-competitors-emails
- BadRep, 2026 guide, 4 Aug 2026: https://badrep.email/guides/competitor-email-intelligence
- Validity Engage: https://www.validity.com/capabilities/engage-competitor-intelligence-inspiration/
- Bird, competitive tracker: https://bird.com/en-us/products/email/competitive-tracker and data sources, 12 Feb 2020: https://bird.com/en-us/blog/sparkposts-data-sources-explained
- Axess Intelligence: https://www.axessintelligence.com/
- Litmus pricing (via mailcharts.com/pricing): link the live Litmus page
- PageCrawl, trial and onboarding change monitoring, 26 Sep 2026: https://pagecrawl.io/blog/competitor-free-trial-onboarding-change-monitoring
- Retainful, 2 Feb 2026: https://www.retainful.com/blog/checking-competitors-campaigns
- Klaviyo, 2026 benchmarks: https://www.klaviyo.com/products/email-marketing/benchmarks
- Joy Joya, 362 brands, 27 Jul 2026: https://joyjoya.com/blogs/podcast/why-your-welcome-email-isn-t-working-i-tested-362-brands
- Troutman Pepper Locke, FCC revises TCPA revocation rules, 17 Sep 2026: https://www.troutman.com/insights/fcc-revises-tcpa-revocation-of-consent-rules-that-were-set-to-go-into-effect-in-january/ (and a source for the 30 Sep adoption)
- FTC, Experian, Aug 2023: https://ftc.gov/news-events/news/press-releases/2023/08/ftc-charges-experian-spamming-consumers-who-signed-company-accounts-marketing-emails-they-couldnt
- WilmerHale, Verkada, 30 Sep 2024: https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20240930-ftc-penalizes-cloudbased-physical-security-company-for-data-security-and-canspam-violations
- Reddit r/ProductMarketing, 15 Sep 2026: https://www.reddit.com/r/ProductMarketing/comments/1wguhsz/b2b_saas_is_competitor_research_too_focused_on/

**Internal links:** `/recipes/email-sms-tracking`, `/recipes/trial-teardown`, `/recipes/competitor-tracking`, `/marketing`, `/agencies`, Posts 1 and 2.

---

## 6. The next 10 (wave 2, re-ranked on Search Console data in November)

| Post | Hub | Reader | New information |
|---|---|---|---|
| Mystery shopping for SaaS without pretending to be a buyer | Mystery shopping | Founders, PMMs | A dated benchmark of what no-card SaaS trials send in 14 days |
| The prices most monitors can't see: member price intelligence | Price intelligence | Pricing teams, price intelligence firms | Member against public prices, joined through public sign ups |
| What ad libraries can't show you: a rival's ad, followed to the offer | Competitor intelligence | Marketing | Ad to sign up to follow up, timed (no Meta or TikTok collection claims until access is confirmed) |
| What happens when you text STOP: a 2026 field report | Competitor intelligence | Marketing, compliance | The first outside-in SMS opt-out study |
| Competitive intelligence vs industrial espionage | Declared agents | PMMs, sales | The line, from primary sources |
| Can AI agents sign up, log in, call and email? | Declared agents | Developers, founders | What works, what shouldn't, and how declared agents do it |
| Outside-in churn signals for agencies | Account intelligence | Agencies, CS | Public and customer-side signals, read with consent |
| Why ChatGPT quotes the wrong price | AI answers | Founders, marketing | Sampled answers with repeats, paraphrases and intervals |
| Did the welcome email arrive? Why seed tests miss lifecycle failures | Mystery shopping | Marketing | Seed placement against a lived journey |
| The best competitor price monitoring tools in 2026, by what they can see | Price intelligence | Pricing, ecommerce | The third review, if Search Console shows demand |

Run a recurring **Obsession Field Report** from these: small, dated, signed runs with method and sample size, published under CC BY so others cite them.

---

## 7. The AI search plan

**How the engines choose.** Every engine still retrieves from a search index, and each uses a different one: Google AI Overviews and AI Mode use Google's; ChatGPT mixes OpenAI's own index with other providers; Copilot uses Bing; Perplexity runs its own; about 77 to 79% of Claude's citations sit in Brave's top 10. Same-prompt overlap between engines was under 1% in one small Sept 2026 test. A Google top 3 page had 7.8 times the odds of citation of a page at 11 to 30, but 40 to 72% of citations go to pages outside the exact query's top 20 (fan-out), which is why the hubs cover sub-questions.

1. **Be in every index.** Search Console and Bing Webmaster Tools with the sitemap and the feed; IndexNow on every deploy (Bing, Yandex, Seznam, Naver, Yep, Internet Archive, Amazonbot); submit key URLs to Brave (search.brave.com/submit-url) for Claude; in Search Console confirm Settings, Search generative AI is set to Include.
2. **Let every crawler in.** robots.txt welcomes all search and AI bots (OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Applebot, Bingbot). Cloudflare AI controls: Search Allow, Training Allow, Agent Allow. Choosing Block now stops Googlebot too.
3. **Serve everything in the HTML.** AI crawlers don't run JavaScript; the prerender already writes every word and the JSON-LD into each page. Keep it that way for the blog (curl as GPTBot to check).
4. **Write to be quoted.** The answer and definition first; buyers' own words (the strongest page-level lever in a 2M-citation B2B SaaS study, a vendor paper); named entities, not pronouns; sourced numbers; real quotes; tables for comparisons; honest dates. The year in a title only when the content is year-specific (Claude adds a year to 94% of its searches).
5. **Bring new information.** 1 original finding per post with its method and sample. Original data is non-commodity content and earns mentions.
6. **Be mentioned elsewhere.** Third parties took 82% of bottom-of-funnel citations in a 9-million-answer study (vendor data), and YouTube, LinkedIn and Reddit gave the biggest lifts. Per post: a founder LinkedIn article with the finding; honest, disclosed answers in the threads that asked the question (r/sales, r/agency, r/ProductMarketing, r/CustomerSuccess), never a dropped link; a trade press pitch for each Field Report. When the product is generally available: G2, Capterra and Product Hunt listings. Later: short YouTube walk-throughs (ad-library how-tos rank on YouTube).
7. **Be a consistent entity.** The same 1 sentence everywhere; `Organization` with `sameAs` and both founders; author pages for Seun and James with their LinkedIn profiles.
8. **Spend nothing on the myths.** Google says AI optimisation "is still SEO" and warned about AEO and GEO vendors (5 Jun 2026). No llms.txt work beyond the small file we have (97% of llms.txt files got zero requests), no content chunking, no FAQ stuffing, no fake freshness, no schema hacks. FAQ rich results ended on 7 May 2026; HowTo in 2023.
9. **Measure honestly** (section 9).

---

## 8. Technical checklist: Lighthouse SEO 100, Core Web Vitals, free Cloudflare

### A. Hosting fixes (do first; all free)

- [ ] **Real 404s.** Unknown URLs return the home page with a 200 today (a soft 404). On Workers static assets set `assets.not_found_handling: "404-page"` (never `"single-page-application"`) so `dist/404.html` is served with a 404; on Pages, a root `404.html` does this once deployed. Check: `curl -I https://useobsession.com/nope` returns 404.
- [ ] **Always Use HTTPS** on, so `http://` 301s to `https://`.
- [ ] **www:** `www.useobsession.com` has no DNS record (NXDOMAIN). Add a proxied `www` record, then a Single Redirect (1 of the 10 free rules) from `www` to the apex, 301, keeping path and query.
- [x] **HSTS**: 6 months (`max-age=15552000`) in `public/_headers` (3 Oct), sent only over HTTPS and without `includeSubDomains`, so it is safe before the 3 above. Add `includeSubDomains` and `preload` only once they are verified; never also turn it on in the dashboard.
- [ ] **Cloudflare AI controls:** Search, Training and Agent all Allow; Block AI bots, AI Labyrinth and managed robots.txt off; check Bot Fight Mode lets verified bots through (curl as GPTBot and ClaudeBot returns 200).
- [ ] **Crawler Hints** on (free IndexNow pings). Done in code 3 Oct: the IndexNow key file (`public/`) and `npm run indexnow`, run after each deploy (README, Hosting). The founders' click paths: `_research/seo/AI-SEARCH-FOUNDERS.md`.

### B. Lighthouse SEO 100 on every template

Templates: Home, audience, Developers, Recipes, recipe, use cases index, use case, Sample output, blog index, hub, post, author, Agents, Privacy. The score is 10 audits; `is-crawlable` alone is about 31% of it.

- [ ] `is-crawlable`: no `noindex` on real pages (only 404.html).
- [ ] `document-title`: unique, 55 to 60 characters on pages, 50 to 60 on posts.
- [ ] `meta-description`: unique, 140 to 155 characters.
- [ ] `http-status-code`: 200 on every real page.
- [ ] `link-text`: no blocklisted anchors, including a bare "Start".
- [ ] `crawlable-anchors`: every `<a>` has a real `href`; menu triggers are buttons.
- [ ] `robots-txt`: valid; `image-alt`: every `<img>` has alt (decorative ones `alt=""`); `hreflang`: none (1 language, `en-GB`); `canonical`: 1 absolute canonical.
- [ ] **Make it a build gate:** the prerender fails the build on a missing or duplicate title or description, a length outside the range, a blocklisted anchor, an `<a>` without `href`, or an `<img>` without alt. Add Lighthouse CI (`@lhci/cli`, free on GitHub Actions) asserting SEO = 1 on 1 page per template.

### C. Core Web Vitals (75th percentile, mobile and desktop)

Targets: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 (Google's thresholds are unchanged in 2026). Aim for lab LCP under 1.8 s on a mid phone.

- [ ] **LCP:** on posts the largest element is the H1 or the answer line, not an image or a screen; preload the main font (already done) and add `Link: rel=preload` in `_headers` for the font and main CSS, which the free plan turns into Early Hints.
- [ ] **CLS:** fixed aspect ratio on every `AppScreen` and figure, `width` and `height` on every image, metric-matched fallback fonts (`size-adjust`), fixed height for the typed line, menus positioned absolutely.
- [ ] **INP:** split code by route so a post doesn't ship every screen's script; screens mount and animate only when in view; no long tasks on hydration; keep handlers small.
- [ ] **Images:** WebP or AVIF made at build time at display size (no paid resizing or Polish), `loading="lazy"` below the fold, `decoding="async"`, `fetchpriority="high"` only above the fold. Blog images in `public/blog/SLUG/`, cached a day like `/og/*`.
- [ ] **No third-party scripts on posts.** A video, if ever, sits behind a click-to-load facade.
- [ ] **Measure in the field:** Cloudflare Web Analytics (free, cookieless, reports Core Web Vitals) and the Search Console Core Web Vitals report. Update `/privacy` if analytics is added.

### D. Structured data

- [ ] `BlogPosting` on every post: headline, description, images in 16x9, 4x3 and 1x1 (made at build time, at least 50,000 pixels each), `datePublished` and `dateModified` in ISO 8601 with the offset, 2 `Person` authors (name, `url` to their author page, `sameAs` LinkedIn, jobTitle Cofounder), publisher `@id`, `mainEntityOfPage`, `articleSection` (the hub), `keywords`.
- [ ] Review posts: an `ItemList` of the tools; no `Review` or `AggregateRating`.
- [ ] `CollectionPage` with an `ItemList` on `/blog`, hub pages and `/use-cases`.
- [ ] `BreadcrumbList` on every page below Home.
- [ ] `ProfilePage` with `Person` on each author page.
- [ ] `Organization`: add `sameAs` (LinkedIn and other profiles) and `alternateName`. Done 3 Oct: `founder` (both `Person` ids) and a `contactPoint` for questions about an agent; `sameAs` waits for the founders' profile URLs (`SAME_AS` in `src/lib/jsonld.ts`).
- [ ] `FAQPage` only where questions are visible (as now). No `HowTo`.
- [ ] Validate in the Rich Results Test and validator.schema.org; read any generated markup by hand.

### E. Blog build (the contract in `src/content/blog/types.ts`)

- [ ] `author` becomes `authors: { name; role; slug; sameAs }[]`, defaulting to both founders (REBUILD 9c).
- [ ] `published` and `updated` carry a time and offset (`2026-10-12T09:00:00+01:00`); the page shows a plain date that matches. `updated` changes only with a substantive change, and review posts say what changed.
- [ ] `category` typed as the union of the 8 hub names in section 3.
- [ ] Posts get `og:type=article` with `article:published_time`, `article:modified_time`, `article:author`, `article:section` and `article:tag`; the prerender writes `website` everywhere today.
- [ ] `/blog/rss.xml`, linked with `<link rel="alternate" type="application/rss+xml">` from every page; submit it in Search Console as a sitemap.
- [ ] `sitemap.xml` adds the blog, posts, hubs, authors and use cases, with `lastmod` from the last commit to each file (as now).
- [ ] `llms.txt` and `llms-full.txt` add every post with its answer line.
- [ ] The `answer` field renders visibly under the title, not only in meta.
- [ ] H2 ids give jump links; a short contents list on posts over 1,500 words.
- [ ] Review posts carry a disclosure box at the top and a "checked on" date on each tool.

---

## 9. Measurement

| What | Where | How often |
|---|---|---|
| Indexing, impressions and position for each primary query | Search Console, Bing Webmaster Tools | Weekly |
| AI Overview and AI Mode impressions by page | Search Console, Generative AI report | Monthly |
| Citation share and grounding queries | Bing AI Performance | Monthly |
| Claude's likely sources | Brave rank for each primary query | Monthly |
| A fixed basket of 25 buyer prompts × 5 engines (ChatGPT, Claude, Perplexity, Gemini, AI Overviews) × 3 paraphrases, run twice | A sheet, reported with intervals; act only on moves bigger than 5 to 7 points (single runs are noise: citation sets churn 67% day to day) | Monthly |
| Visits from AI assistants (`utm_source=chatgpt.com`, perplexity.ai, claude.ai referrers) | Cloudflare Web Analytics | Monthly |
| Sign ups per post | The waitlist sheet's Page column | Weekly |

---

## 10. Do this next

| # | Task | Owner | By |
|---|---|---|---|
| 1 | Decide the 7 items in section 1 | Seun and James | Tue 6 Oct |
| 2 | Hosting fixes A1 to A6 (404s, HTTPS, www, HSTS, AI controls, Crawler Hints) | James | Tue 6 Oct |
| 3 | Search Console, Bing Webmaster Tools, Brave submission, IndexNow key | James | Wed 7 Oct |
| 4 | Blog build: contract changes, `/blog`, post template, breadcrumbs everywhere, Resources menu, footer, `/use-cases`, author pages, RSS, BlogPosting, build gates | Claude on `blog/seo`, PR to James | Fri 9 Oct |
| 5 | Post 1 drafted, then lawyer review | Seun (Claude drafts) | Draft Thu 8 Oct, live Mon 12 Oct |
| 6 | Post 2 drafted, Brand G consent confirmed | Seun (Claude drafts) | Live Mon 12 Oct |
| 7 | Post 3: vendor facts re-checked, free tiers tried as Obsession | Claude, Seun signs off | Live Mon 19 Oct |
| 8 | Post 4: Marklinea results checked, design partner run if consented | Claude, Seun signs off | Live Mon 26 Oct |
| 9 | Post 5: vendor facts re-checked | Claude, Seun signs off | Live Mon 2 Nov |
| 10 | For each post on its day: founder LinkedIn article, disclosed thread answers, vendor right-of-reply emails | Seun and James | Publish day |
| 11 | First prompt basket baseline | Claude | Fri 16 Oct |
| 12 | Re-rank wave 2 on Search Console data; decide the first hub pages | Seun and James | Mon 16 Nov |

---

## Glossary

- **Hub:** a topic and its page; the blog `category`.
- **Owner page:** the 1 page that targets a query.
- **Declared agent:** an AI agent that says it's AI and who it works for.
- **Signed record:** the dated, signed log of every step an agent took.
- **Outside-in audit:** testing a business the way its customers meet it.
- **Tier 1 / tier 2:** public paths without asking / baskets and checkouts with the owner's OK.

Research behind this: `_research/seo/research-keywords.md`, `research-trends.md`, `research-questions.md`, `research-landscape.md`, `research-aisearch.md` (each with its sources and dates).

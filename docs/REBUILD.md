# The rebuild: how this site is made

The site James shipped on 2 Oct is the base. We keep its core (prerendering, the waitlist backend, the recipe pages, the sample output and the best of its copy) and rebuild the rest to the Obsession standard: the design system in full, every motion, every illustration, the navigation, SEO and answer engines, the capture forms, and the copy.

## 1. Decisions (Seun, 2 Oct)

- **Pages:** Home (`/`), Agencies (`/agencies`), Founders (`/founders`), Sales (`/sales`), Marketing (`/marketing`), Developers (`/developers`), Recipes (`/recipes` and `/recipes/SLUG`, James's live URLs), Sample output (`/sample-output`), Privacy (`/privacy`), Agents (`/agents`), Check your AI agents (`/verify`, 3 Oct: the 4th way in, with its 8 recipes), and under Resources (3 Oct): Resources (`/resources`), Use cases (`/use-cases` and James's 2 worked examples), Blog (`/blog`, `/blog/SLUG`, `/blog/rss.xml`). Only `/recipes/prospect-research` redirects (301) to `/recipes/prospect-intelligence`.
- **Use cases (James, 2 Oct, on main):** worked examples for named prospects at `/use-cases/prospect-intelligence-with-clay` and `/use-cases/member-prices-for-price-intelligence`, under a "Use cases" nav menu. Their URLs must keep working (James sends them to prospects). Merge `origin/main` into the rebuild after the build, keep both pages and the menu, bring them onto the design system without changing their substance, and fix the Clay page's "No support reply within 24 hours" check (staff at prospects: use the site's chat bot) and "for weeks" (continuously).
- **Lead leaks (3 Oct):** the Speed to lead recipe is renamed Lead leaks (slug `lead-leaks`; `/recipes/speed-to-lead` redirects 301). Its copy keeps the searched term "speed to lead".
- **Name:** the ready-made jobs are **Recipes** (James's word; Seun confirmed 2 Oct). A recipe comes with all its infrastructure already set up; a typed task has the system set it up for you. Never a count of them, with 1 exception: Home's "See all N recipes", N counted from the catalog (Seun, 7 Oct).
- **Headlines:**
  - Home: **"The intelligence infrastructure for commercial teams"**.
  - Every other page: an "AI agents that ..." headline. Agencies "AI agents that help your agency win and keep clients.", Founders "AI agents that help your business win and keep customers.", Sales "AI agents that help your team win and renew accounts.", Marketing "AI agents that help your marketing team win, convert and keep customers." (3 Oct: the page is organised by marketing function, with rivals as 1 strand).
  - Under every headline, the sub makes it literal what Obsession does, and why only Obsession: declared AI agents with their own identity, inboxes, phone numbers, cards and browsers that work with other companies for you (research prospects as their customer, test any journey, track rivals, answer and chase, buy and negotiate within the customer's limits, check the AI agents they run), continuously, at every company on your list, every step signed. Specific, novel, differentiated.
  - **The pill reads "Early access" on every page** (Seun, 3 Oct, reversing the earlier "no Early access pill" rule for the hero only).
- **Calls to action:** Home "Join the waitlist" (plus the free mystery shop as the second path). Agencies and Marketing: waitlist, plus "mystery-shop a store free" (your own store, or a client's with their OK). Founders "Get early access". Sales "Get early access for my team". Developers "Get API access". Recipe pages: the free mystery shop on the Mystery shopper page, the waitlist (with the recipe preset as interest) elsewhere. Sample output: "Get one for your store".
- **Home's recipes (Seun, 7 Oct):** right after the gap and before the real run, "Start from a recipe. The setup is already done." and its 1 line, then the 6 jobs on 1 grid of hairlines (3 by 2; 6 slim rows with a chevron on a phone), each cell 1 link to its part of `/recipes` (or `/verify`) with 2 examples, all read from `content/nav.ts` `recipeJobs` so the block and the Recipes menu never drift, and "See all N recipes", N counted from the catalog (the 1 recipe count on the site, approved with this block). It replaces the hero's quiet line under the tabs (`sections/RecipeJobs`, `recipeJobs` in `content/pages/home.ts`).

## 1b. From the 2 Oct call with James (`Calls/Obsession Call with James - 2 Oct 2026 (Homepage review).md`)

- **Prospect intelligence**, not prospect research: agents become the prospect's customer and see what they actually do. It is not contact finding. Recipe slug `prospect-intelligence`; `/recipes/prospect-research` redirects there.
- **How it works is 1 flow in 4 steps**, shown with motion: (1) pick a recipe, type a task, or build your own; (2) add the companies: paste a list, upload a CSV, connect Clay, or the API; (3) declared agents run it, each with its own ID, inbox, number and browser; (4) you get back what they did, with signed proof and your next move. A recipe comes with all its infrastructure already set up; a typed task has the system set it up for you.
- **Kept from James's Home**, restyled and brought to life: the 4 jobs (your competitors' playbook, where prospects lose money, where your own journeys break, anything else you can describe); recipe cards that open their own pages; the recipe page's infrastructure spinning up; the output viewer (PDF, email, Slack, sheet, expandable on click); the developer code section; the closing questions.
- **The comparison is ours:** today vs with Obsession.
- **Mystery shopper shows its range:** B2B SaaS trials and demos, B2C stores and bookings, any business, not only basket abandonment.
- **James's Mystery shopper and Competitor tracking pages are the strongest copy** (written from buyers' own terms): keep their core. Rewrite the other recipe pages.
- **"Join the waitlist" leads.** "Try your first shop free" lives with the sample report.
- **Every page reads as 1 narrative**: each section hands off to the next, the body copy builds, and every illustration is placed where it proves the sentence beside it.

**Home, in order:** hero (the "Early access" pill, the category headline, a literal sub, the waitlist, the proof facts, then the console: the typed heading over category tabs, each a full app screen) > who it's for (the reader picker, James's diagonal band on the design system, right under the console as the fork for readers who know who they are: agencies, founders, sales, marketing, developers, each panel 1 link to its page with its name, its line and the 2 recipes or ways in that reader starts with; 1 object with hairline seams, stacked rows on slanted seams below 1200px) > the 4-step flow > the gap > the 4 jobs > the AI agent checks (the 4th way in: its claim beside the `callcheck` screen, linking /verify) > recipes > proof (the output viewer and the real store check, "Try your first shop free") > developers > Built to behave. (1d) > questions > the waitlist. The picker was added 3 Oct at Seun's request; it replaces the tabbed picker that sat after the 4 jobs, so Home has 1 picker.

**Home v3 with how it works (7 Oct):** hero > who it's for (James's band) > how it works, compact (`howRail` in `content/pages/home.ts`, `components/sections/HowRail`: "You pick the job and the companies. The agents do the rest." over 4 steps on 1 rail, each over a small slice of the app doing its 1 thing once in view, 0.5s apart: a recipe picked, the companies landing, Approve pressed, a format picked; its markup is prerendered and kept on hydration, never in the bundle) > the gap > the real run > questions > start. The full How, with its app screens, stays on the reader pages, Developers and Verify.

## 1c. The hero (the same on every page)

**Centred**, one column, spread across the page width: never a narrow block, never a left/right split. Top to bottom: the pill ("Early access"), the headline (display type, wide measure so it sits on 1 or 2 balanced lines, `text-wrap: balance`, widening equally to both sides), the sub (centred, about 64 characters wide), the capture form (centred, about 560px), the micro line, the 3 proof facts in a centred row, then the console full width below under its typed heading. Identical structure, spacing and type on Home, Agencies, Founders, Sales, Marketing and Developers; only the words and the console change. Check the centre line at 1000, 1280, 1440, 1920 and 390 wide: every element shares 1 vertical axis.

**The console (Seun, 3 Oct):**
- No typed task line under the headline any more.
- Above the console's tabs, James's typed heading (`components/sections/Typed.tsx` TypedHeading, words in `content/console.ts`) types "What Obsession can do", holds, erases, then types "What you can build with Obsession" and rests there. Type scale h3, the design system's caret, 1 pass, waits off screen, still (on the first phrase) with reduced motion. It replaces the "Example runs" label.
- **Home:** category tabs (`hero.screens`, `components/sections/ScreenTabs.tsx`), each a full app screen that plays its story when its tab is chosen, with the Example tag, 1 line and the recipe under it: Prospect intelligence (`pack`), Mystery shopper (`shop`), Competitor tracking (`rivals`), Lead leaks (`inbound`) and Check your AI agents (`botcheck`, linking /verify): Seun's 5 (3 Oct). AI checkout test stays a recipe, on its own page and in the Recipes menu, not a Home tab. The tabs advance by themselves, calmly and once, each staying for its screen's story plus time to read it (the design system's autoplay bar fills in the chosen tab); hover, keyboard focus or off screen hold them; a click, a key or the pause button stops them for good.
- **Every other page:** its example runs (`hero.demos`, `components/sections/Console.tsx`) under the same typed heading.

## 1d. James's trust sections, made ours (Seun, 3 Oct)

- **The rules every run follows** (James's "Built to behave." section): keep the idea and James's claim heading "Built to behave.", rebuilt on the design system (no all-caps eyebrow, no bullet squares, the ring mark where it helps) with the rules as we agreed: every agent says it's AI and who it works for; it asks the site's bot, never staff, at prospects and rivals; public journeys only, nothing behind a login it wasn't given; it stops before payment unless you set a budget; nothing is sent, signed or spent without your OK; every step is signed. Never "it follows robots.txt". Placed on Home after the proof and before the questions, as the trust beat.
- **The questions** (James's "Before you name a company"): his heading is a good claim for Home's FAQ; no "Questions" eyebrow. Home v3 (6 Oct) says "Before you join.": nothing on the page asks the reader to name a company, and the form sits right under the questions.
- **The real run** (Home's output viewer): heading "1 real run. The output, however you work.", the line "4 test customers shopped a UK store in September, name hidden. 2 left a basket or stopped at checkout, and in 48 hours nobody wrote to them. Here’s that run as a report, an email, a Slack message, Clay columns, a webhook or a workflow.", and 4 facts: 4 journeys run, 2 silent, 15 screenshots, 48h watched. Other pages' proof lines must agree: 1 shopper left a basket and 1 stopped at checkout (never "2 full baskets"). Home v3 (6 Oct): heading "1 real run.", the line "4 test customers shopped a UK store in September. 1 left a basket, 1 stopped at checkout, and nobody wrote to either in 48 hours." and no facts row on Home (the line already gives them; /sample-output keeps them).

## 2. The story every page tells

1 arc, easy to follow, never told as a story. In this order (a page may skip a beat, never reorder):

1. **Hero:** what Obsession is, for this reader. The "Early access" pill, headline, sub, the capture, 3 proof facts, the console under its typed heading (Home: category screens; elsewhere: live runs).
2. **How it works:** pick a recipe, type a task, or build your own; agents get their own ID, inbox, number and browser; you get signed proof and your next move.
3. **The gap:** why it matters to them. Today vs with Obsession, in their words.
4. **Use cases:** tabs, each with its own app screen: the moment in their week, the outcome, what the agents do, why only agents can.
5. **Outcomes:** what changes, in numbers. Up-to-50 rule: every modelled number is an "up to" ceiling; deliverables are flat.
6. **Every kind of:** the kinds of agencies, businesses, teams it fits.
7. **Recipes:** the ones that fit this reader, linking to their pages.
8. **Proof:** the real September store check (sample output) and the signed record.
9. **Questions:** trust and the red lines, as a claim heading ("Every agent declared. Every step yours to approve.").
10. **Final call to action.**

## 3. Copy

- Kevin Hale: get to the point, a non-technical owner understands it in 5 seconds, less is more. A section is a heading plus about 1 line; body copy is short.
- Headings make a claim; they never name their section, label the reasoning, or tease a payoff with a question. Run `node ~/.claude/skills/no-meta-callouts/scan.mjs` on the words a reader sees.
- Numerals, British spelling, contractions, no em or en dashes, no hyphenated compounds where a plain word works.
- "Continuously", never "for weeks". Never cap scale ("every company on your list", never "up to 50 companies"); example numbers inside demos are fine.
- No internal decisions on the page: no recipe counts, "soon", "join order", what is not built yet. The 2 exceptions are the hero pill "Early access" (Seun's call, 3 Oct) and Home's "See all N recipes", N counted from the catalog (Seun, 7 Oct).
- No Obsession prices, no guarantees, no money promises, no sources or citations on the page, no real company names (use categories, Rival A/B/C, invented names checked to be unused).
- Every example that is not from a real run is clearly an example in context; the real September store check is the one real run.
- **Red lines** (on every page and in every screen): agents are declared and say who they work for; a client's or account's systems and journeys only with the owner's OK; prospects and rivals only through public self-serve paths (trial and newsletter sign-ups allowed: declared as AI, never reply, close if a rep writes); never fake buyers, never contact staff as a fake buyer ("ask the bot, never staff"); inside data only through tools the customer connects, with consent; stop before payment; no cold spam; no fake identities.

## 4. Look

- **The design system is owned elsewhere.** Seun builds it in its own chat, into `Brand/Design System/` (tokens, motion, components and the guideline page `Obsession Brand.html`). The site only consumes it: never edit `src/styles/ds/`; refresh it with `node scripts/sync-assets.mjs`. If a page needs something the system lacks (a menu pattern, a component state), build it in the site on `--ob-*` tokens and `.ob-*` classes, and list it in the PR so the system can absorb it.
- **Design system only.** `src/styles/ds/` (tokens, motion, components) is loaded first. Use `--ob-*` tokens and the `.ob-*` component classes (`.ob-btn`, `.ob-nav`, `.ob-mnav`, `.ob-menu`, `.ob-pill-form`, `.ob-field`, `.ob-chips`, `.ob-prompt`, `.ob-ptabs`, `.ob-faq`, `.ob-receipt`, `.ob-finding`, `.ob-ledger`, `.ob-kit`, `.ob-card` ...). Read `Brand/Design System/README.md` (in the workspace) before styling anything.
- **Class names:** every site class starts `s-` (`.s-hero`, `.s-hero-h`), so nothing collides with the screens' classes (`.ax-*`, `.app-*`, and the short names inside them).
- **No AI tells:** no all-caps mono eyebrows over headings, no identical bordered cards, no bullet squares, no centred bullet lists, no demo chrome, no gradient text, no grid-paper backgrounds, no fade-up on every section. Colour is never a status: the ring mark's states are.
- 1 primary button per view, 1 glow per section, the 1160px container, the 4px spacing grid, headings from the type scale (`.ob-type-*`), tabular numerals for figures.
- Dark is the default, light is warm paper; both designed on purpose, contrast floors met (body 7:1, labels 4.5:1, controls 3:1).

## 4b. Logo (final, 2 Oct 2026: `Brand/Logo/README.md`)

- Use `components/Logo`: `Lockup` (the nav lockup `obsession-lockup-nav-*` at 16 to 24px tall, the full lockup `obsession-lockup-*` from 32px; white files on dark, black on paper, chosen by the section's theme), `Mark` (the ring in the text colour), `StatusMark` (the 4 animated agent states from `Brand/Logo/states`: working, waiting, needs-you, landed).
- Files live in `public/logo/` and `src/assets/logo/states/`, synced by `scripts/sync-assets.mjs`. The favicon is `public/favicon.svg`, the touch icon `public/logo/obsession-app-icon-1024.png`.
- Never retype the wordmark, recolour the ring or add an arrowhead. Every status mark inside the app screens is swapped to the final geometry at sync time.

## 5. Motion

Every motion has 1 job (feedback, orientation, continuity or status). Anything without a job stays still.

- **Page load:** 1 hero sequence (pill, headline, sub, form, proof facts, console) with the design system's hero stagger; the console's heading types once the console is in. Nothing else animates on load.
- **Sections do not fade in.** Motion lives in the product: screens play their story when they come into view (and replay on click), the console runs, tabs move their indicator, numbers tween once, the mark shows status.
- Durations and curves from the design system (`--ob-dur-*`, `--ob-ease-out` to enter, `--ob-ease-in` to leave, `--ob-snap` only for the ring's square and ticks). Animate opacity, transform, colour and shadow only. Never `transition: all`.
- Reduced motion: every screen shows its finished scene, the typed heading shows its first phrase, nothing advances by itself, nothing moves except focus.

## 6. Illustrations

App screens only (`components/AppScreen`, the screens in `src/screens`, built to `_research/illus/APP-SPEC.md` in the workspace). Every page's screens are dedicated to its use cases. No screen appears twice on 1 page.

| Page | Screens |
|---|---|
| Home | the hero tabs: `pack`, `shop`, `rivals`, `inbound`, `checkout`, `botcheck`; how it works: `templates`, `agencytask`, `kit`, `run`; type a task: `compose`; the AI agent checks: `callcheck`. The reader picker has no screens: each reader's own page shows theirs |
| Agencies | `pack`, `board`, `approve`, `upsells`, `report` (+ `shop` for the free mystery shop) |
| Founders | `leads`, `switch`, `invoices`, `suppliers`, `ship`, `qa`, `listings`, `rivals` |
| Sales | `brief`, `acctwatch`, `expansion`, `case`, `pilot`, `winback`, `battlecard`, `inbound`, `vendor` |
| Marketing | how it works: `compose`, `templates`, `kit`, `run`; use cases: `listings`, `inbox`, `inbound`, `adcheck`, `partners`, `checkout`, `campaign`, `reviews`. The hero runs are words only. Its recipes are linked once, under each team in the "every team" picker, so the page has no second recipe list |
| Recipes | each recipe's own screen: competitor `rivals`, prospect intelligence `pack`, mystery `shop`, speed `inbound`, prices `prices`, ads `ads`, trial `battlecard`, email-sms `inbox`, audit `ship`, delivery `qa`, account-watch `acctwatch`, business-case `case`, get-paid `invoices`, supplier-quotes `suppliers`, listings `listings`, expansion offers `expansion`, client upsells `upsells`, review requests `reviews`, ad landing check `adcheck`, partner checks `partners` |
| Check your AI agents (`/verify`) | how it works: `disclosure`, `salescheck`, `callcheck`, `resolution`; use cases: `botcheck`, `outcheck`, `vendorcheck`, `drift`. Its recipes: support bot `botcheck`, voice agent `callcheck`, outbound agent `outcheck`, sales agent `salescheck`, vendor agent `vendorcheck`, resolution `resolution`, AI disclosure `disclosure`, drift watch `drift` |
| Developers | how it works: `compose`, `templates`, `kit`, `qa`; the code: `dev`; use cases: `ship`, `leads`, `rivals`, `shop`, `inbound`, `suppliers` |
| Sample output | the real report captures (`public/report`) |

New screens to build: `shop` (the mystery shopper run on a store: basket, inboxes watched 48 hours, stop before payment, the report), `inbox` (a rival's emails and texts on 1 timeline), `ads` (a rival's ads, landing pages and offers), `prices` (prices and promos across rivals), `campaign` (your own launch emails, texts and links checked as a customer).

## 7. Navigation

- **Bar** (3 Oct, Seun: "founder marketing sales agencies at the top nav", "resources should be at nav just done properly"; spec `_research/nav/NAV.md`): the lockup; the 5 readers as plain links, **Agencies, Founders, Sales, Marketing, Developers** (self selection first; agencies are the beachhead), a hairline, then **Recipes** and **Resources**, each a link to its page plus a chevron button that opens its menu (click and keys; on a mouse also hover after 140ms, never hover only); on the right the theme switch and the page's 1 call to action, always visible. The links start after the lockup, so they never move between pages whose calls to action differ. Current page: full ink plus the square under the word; a reader's square takes its hue (the 1 colour in the nav, COLOUR.md). Sticky, quiet, keyboard and screen reader complete (`.ob-nav`, `.ob-menu`).
- **Recipes menu**: never every recipe. The 6 jobs (Win customers, Keep and grow customers, Watch rivals, Check your own journeys, Get paid and save, Check your AI agents), each with its promise in 1 line and 2 examples with pull, leading to `/recipes#<job>` (Check your AI agents to `/verify`, its own page); the featured card, "Your first mystery shop is free" (to the Mystery shopper page, with its button's own words), and "See a real run"; then "Browse all recipes". Built from `content/nav.ts` (`recipeJobs`) over the registry, so it stays in sync.
- **Resources menu**: the proof. The real run first (the September store check, what happened in 1 line, the report's first page peeking from the card), then the 2 use cases as cards (who each is for, its name, its outcome in 1 line), then 1 quiet "Every resource". No blog while it is archived. The use case addresses never change (James sends them to prospects).
- **The bar's button** is never much wider than "Join the waitlist" (135px; the widest, "Get early access", 141px). A page whose own button says more keeps its words in its hero, its final form and the sheet; the bar says the same offer shorter (`content/nav.ts` `barCta`): Sales "Get early access", Mystery shopper and Sample output "Get free report", /verify and the AI agent checks "Check mine free" (the last 2 are new short words, for Seun to approve).
- **Widths** (the bar's own, measured in the built site on every kind of page): roomy from 1200px; tight (8px link padding, no theme switch) from 860 to 1199, where 1024 keeps the 5 readers, Recipes, Resources and the button on 1 line with 45 to 57px of air; the readers fold into a "For" menu only under 1012px. On touch the chevrons grow to 44px and, under 1040, the links' sides tighten from 8 to 6px to pay for them, so an iPad on its side (1024) keeps the readers too (33px of air at worst). Under 860 the menu button opens the sheet; the bar keeps its button on phones down to 388px (15px of air at 390 at worst), under that it waits in the sheet.
- **Phone sheet** (`.ob-mnav`, `.ob-anim-sheet`): "Who are you?" with the 5 readers as large rows (key square in the reader's hue, name, 1 line), then the 6 jobs with "Browse all recipes", then Resources (the real run and the 2 use cases, "Every resource"), the theme row, and the call to action pinned at the foot. Focus stays inside, the page behind is locked and inert, Escape closes it.
- **Footer**: the full site map (who it is for, product, resources, and every recipe under its job), the red lines in 1 line, the theme switch.
- Breadcrumbs (`components/Crumbs`, `.ob-crumbs`): a calm line centred above the hero's pill on every page below Home, read from the page's `meta.breadcrumb`, which is also the `BreadcrumbList` JSON-LD, so the 2 always match. Trails: Home / Agencies; Home / Recipes / Mystery shopper; Home / Resources / Use cases / Prospect intelligence with Clay; Home / Resources / Sample output; Home / Blog / Post. On a phone a trail deeper than 2 drops the page's own name.

## 8. SEO and answer engines

- 1 `h1` per page. Unique title (55 to 60 characters) and description (140 to 155) per page in `content/meta`.
- Canonical, Open Graph and Twitter large image per page (`public/og/*.png`, 1200 x 630).
- JSON-LD: `Organization` and `WebSite` on every page, `SoftwareApplication` on Home, `FAQPage` wherever questions show, `BreadcrumbList` on every page below Home, `BlogPosting` (both founders as authors) on every post and `Blog` on `/blog`.
- Answer-ready copy: each page opens with 1 plain sentence that defines its subject ("Obsession is ..."), its `meta.answer`, and questions phrased the way buyers ask them.
- `llms.txt` (short) and `llms-full.txt` (every page's copy as plain text), `sitemap.xml`, `robots.txt` that welcomes search and AI crawlers, `_redirects` for `/recipes/prospect-research`.
- Internal links: audience pages to their recipes, recipes to the audiences they serve, every page to the sample output.

## 8b. Hosting

Free Cloudflare plan (Workers static assets). Everything is static and made at build time: prerendered pages, share images, sitemap, `llms.txt`. Redirects go in `public/_redirects`, headers in `public/_headers`. Nothing may need a paid feature (no image resizing, no paid rules). James's dashboard fixes are free: a proxied `www` record redirecting to the apex, Always Use HTTPS, then HSTS, and real 404s.

## 9. Capture

- 1 form component (`.ob-pill-form`), 2 kinds: `waitlist` (email) and `mystery` (store address first, then email). Clear errors (message, danger edge, `aria-invalid`, `aria-describedby`), busy and done states, a hidden bot field, no double submit, works without JavaScript as a plain POST fallback where possible.
- After a sign up the form becomes the sign up card (3 Oct, `_research/onboarding/SIGNUP.md` in the workspace): name and company, who they are where the page doesn't say, 4 tap questions for that reader, an optional note, then 1 next step. Every step skippable; the questions live in `src/content/signup.ts`. The card loads on demand, never with the page (README, "Waitlist").
- `waitlist/Code.js` keeps 1 row per sign up (found by its sign up ID, never by email alone), every answer in its own column found by header (old rows unaffected). James redeploys it before the site change ships.
- A short privacy line under every form: what we keep and why.

## 9b. Narrative edit (after the pages render)

Every page, the use-case pages included, gets a dedicated narrative edit once it renders: an editor reads it top to bottom as its reader would and rewrites the headings and opening lines so each section hands off to the next and the copy builds to the call to action. Then a second editor checks the flow and the rules. Specifics stay; transitions, order and emphasis change.

## 9c. Blog bylines

Every post is by both founders: Seun Akinniranye, Cofounder, and James Akinniranye, Cofounder (Seun, 3 Oct). The article's structured data lists both as authors.

**Archived for now (Seun, 3 Oct):** the 5 posts sit in `src/content/blog/archive/` (its README says how to bring one back). With no live post the site shows no blog: no /blog pages, no Blog link in the nav, footer or Resources, nothing in the sitemap, llms.txt or a feed. Moving a post back restores all of it.

## 10. Quality gates (before Seun sees anything)

`npm run build` passes (types, lint, prerender). Every page screenshotted at 1440 and 390, dark and light, and looked at. The no-meta scanner is clean on every page's text. No overlaps, clipping, orphans or dead space. Lighthouse-level basics: headings in order, labels, contrast, focus, alt text. The red lines hold everywhere.

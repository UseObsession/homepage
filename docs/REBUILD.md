# The rebuild: how this site is made

The site James shipped on 2 Oct is the base. We keep its core (prerendering, the waitlist backend, the recipe pages, the sample output and the best of its copy) and rebuild the rest to the Obsession standard: the design system in full, every motion, every illustration, the navigation, SEO and answer engines, the capture forms, and the copy.

## 1. Decisions (Seun, 2 Oct)

- **Pages:** Home (`/`), Agencies (`/agencies`), Founders (`/founders`), Sales (`/sales`), Marketing (`/marketing`), Developers (`/developers`), Recipes (`/recipes` and `/recipes/SLUG`, James's live URLs), Sample output (`/sample-output`), Privacy (`/privacy`), Agents (`/agents`). Only `/recipes/prospect-research` redirects (301) to `/recipes/prospect-intelligence`.
- **Name:** the ready-made jobs are **Recipes** (James's word; Seun confirmed 2 Oct). A recipe comes with all its infrastructure already set up; a typed task has the system set it up for you. Never a count of them.
- **Headlines:**
  - Home: **"The intelligence infrastructure for commercial teams"**.
  - Every other page: an "AI agents that ..." headline. Agencies "AI agents that help your agency win and keep clients.", Founders "AI agents that help your business win and keep customers.", Sales "AI agents that help your team win and renew accounts.", Marketing in the same pattern.
  - Under every headline, the typed line and the sub make it literal what Obsession does, and why only Obsession: declared AI agents with their own identity, inboxes, phone numbers and browsers that do business with other companies (sign up, shop, ask, chase, check), continuously, at every company on your list, every step signed. Specific, novel, differentiated. No "Early access" pill.
- **Calls to action:** Home "Join the waitlist" (plus the free mystery shop as the second path). Agencies and Marketing: waitlist, plus "mystery-shop a store free" (your own store, or a client's with their OK). Founders "Get early access". Sales "Get early access for my team". Developers "Get API access". Recipe pages: the free mystery shop on the Mystery shopper page, the waitlist (with the recipe preset as interest) elsewhere. Sample output: "Get one for your store".

## 1b. From the 2 Oct call with James (`Calls/Obsession Call with James - 2 Oct 2026 (Homepage review).md`)

- **Prospect intelligence**, not prospect research: agents become the prospect's customer and see what they actually do. It is not contact finding. Recipe slug `prospect-intelligence`; `/recipes/prospect-research` redirects there.
- **How it works is 1 flow in 4 steps**, shown with motion: (1) pick a recipe, type a task, or build your own; (2) add the companies: paste a list, upload a CSV, connect Clay, or the API; (3) declared agents run it, each with its own ID, inbox, number and browser; (4) you get back what they did, with signed proof and your next move. A recipe comes with all its infrastructure already set up; a typed task has the system set it up for you.
- **Kept from James's Home**, restyled and brought to life: the 4 jobs (your competitors' playbook, where prospects lose money, where your own journeys break, anything else you can describe); recipe cards that open their own pages; the recipe page's infrastructure spinning up; the output viewer (PDF, email, Slack, sheet, expandable on click); the developer code section; the closing questions.
- **The comparison is ours:** today vs with Obsession.
- **Mystery shopper shows its range:** B2B SaaS trials and demos, B2C stores and bookings, any business, not only basket abandonment.
- **James's Mystery shopper and Competitor tracking pages are the strongest copy** (written from buyers' own terms): keep their core. Rewrite the other recipe pages.
- **"Join the waitlist" leads.** "Try your first shop free" lives with the sample report.
- **Every page reads as 1 narrative**: each section hands off to the next, the body copy builds, and every illustration is placed where it proves the sentence beside it.

**Home, in order:** hero (the category headline, a literal sub, typed tasks, the waitlist, the console of what Obsession can do) > the 4-step flow > the gap > the 4 jobs > who it's for (agencies, founders, sales, marketing, developers, each with its screen and page) > recipes > proof (the output viewer and the real store check, "Try your first shop free") > developers > questions > the waitlist.

## 1c. The hero (the same on every page)

**Centred**, one column, spread across the page width: never a narrow block, never a left/right split. Top to bottom: the pill (if any), the headline (display type, wide measure so it sits on 1 or 2 balanced lines, `text-wrap: balance`, widening equally to both sides), the typed task line, the sub (centred, about 60 characters wide), the capture form (centred, about 560px), the micro line, the 3 proof facts in a centred row, then the console full width below. Identical structure, spacing and type on Home, Agencies, Founders, Sales, Marketing and Developers; only the words and the console's runs change. Check the centre line at 1000, 1280, 1440 and 1920 wide: every element shares 1 vertical axis.

## 2. The story every page tells

1 arc, easy to follow, never told as a story. In this order (a page may skip a beat, never reorder):

1. **Hero:** what Obsession is, for this reader. Headline, typed tasks, 1-line sub, the capture, 3 proof facts, the console (a live run).
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
- No internal decisions on the page: no recipe counts, "soon", "join order", "Early access" pills, what is not built yet.
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

- **Page load:** 1 hero sequence (pill, headline, typed line, sub, form, console) with the design system's hero stagger. Nothing else animates on load.
- **Sections do not fade in.** Motion lives in the product: screens play their story when they come into view (and replay on click), the console runs, tabs move their indicator, numbers tween once, the mark shows status.
- Durations and curves from the design system (`--ob-dur-*`, `--ob-ease-out` to enter, `--ob-ease-in` to leave, `--ob-snap` only for the ring's square and ticks). Animate opacity, transform, colour and shadow only. Never `transition: all`.
- Reduced motion: every screen shows its finished scene, the typed line shows its first task, nothing moves except focus.

## 6. Illustrations

App screens only (`components/AppScreen`, the screens in `src/screens`, built to `_research/illus/APP-SPEC.md` in the workspace). Every page's screens are dedicated to its use cases. No screen appears twice on 1 page.

| Page | Screens |
|---|---|
| Home | how it works: `templates`, `kit`, `run`; the reader picker: `board` (agencies), `leads` (founders), `brief` (sales), `inbox` (marketing), `dev` (developers); type a task: `compose` |
| Agencies | `pack`, `board`, `approve`, `report` (+ `shop` for the free mystery shop) |
| Founders | `leads`, `switch`, `invoices`, `suppliers`, `ship`, `qa`, `listings`, `rivals` |
| Sales | `brief`, `acctwatch`, `case`, `pilot`, `winback`, `battlecard`, `inbound`, `vendor` |
| Marketing | `inbox`, `ads`, `prices`, `campaign` (new), plus `listings` and `inbound` as they apply to marketing |
| Recipes | each recipe's own screen: competitor `rivals`, prospect intelligence `pack`, mystery `shop`, speed `inbound`, prices `prices`, ads `ads`, trial `battlecard`, email-sms `inbox`, audit `ship`, delivery `qa`, account-watch `acctwatch`, business-case `case`, get-paid `invoices`, supplier-quotes `suppliers`, listings `listings` |
| Developers | `dev`, `compose` |
| Sample output | the real report captures (`public/report`) |

New screens to build: `shop` (the mystery shopper run on a store: basket, inboxes watched 48 hours, stop before payment, the report), `inbox` (a rival's emails and texts on 1 timeline), `ads` (a rival's ads, landing pages and offers), `prices` (prices and promos across rivals), `campaign` (your own launch emails, texts and links checked as a customer).

## 7. Navigation

- Desktop: the lockup; **Solutions** (a menu: Agencies, Founders, Sales, Marketing, each with 1 line), **Recipes** (a menu grouped by job: Win customers, Keep customers, Watch rivals, Check your own journeys, Get paid and save, plus "All recipes"), **Developers**, **Sample output**; on the right the theme switch and the page's call to action. Sticky, quiet, keyboard and screen reader complete (`.ob-nav`, `.ob-menu`).
- Phone: a sheet (`.ob-mnav`, `.ob-anim-sheet`) with the same groups and the call to action.
- Footer: a full site map (every page and recipe), the red lines in 1 line, the theme switch.

## 8. SEO and answer engines

- 1 `h1` per page. Unique title (55 to 60 characters) and description (140 to 155) per page in `content/meta`.
- Canonical, Open Graph and Twitter large image per page (`public/og/*.png`, 1200 x 630).
- JSON-LD: `Organization` and `WebSite` on every page, `SoftwareApplication` on Home, `FAQPage` wherever questions show, `BreadcrumbList` on audience and recipe pages.
- Answer-ready copy: each page opens with 1 plain sentence that defines its subject ("Obsession is ..."), its `meta.answer`, and questions phrased the way buyers ask them.
- `llms.txt` (short) and `llms-full.txt` (every page's copy as plain text), `sitemap.xml`, `robots.txt` that welcomes search and AI crawlers, `_redirects` for `/recipes/prospect-research`.
- Internal links: audience pages to their recipes, recipes to the audiences they serve, every page to the sample output.

## 8b. Hosting

Free Cloudflare plan (Workers static assets). Everything is static and made at build time: prerendered pages, share images, sitemap, `llms.txt`. Redirects go in `public/_redirects`, headers in `public/_headers`. Nothing may need a paid feature (no image resizing, no paid rules). James's dashboard fixes are free: a proxied `www` record redirecting to the apex, Always Use HTTPS, then HSTS, and real 404s.

## 9. Capture

- 1 form component (`.ob-pill-form`), 2 kinds: `waitlist` (email) and `mystery` (store address first, then email). Clear errors (message, danger edge, `aria-invalid`, `aria-describedby`), busy and done states, a hidden bot field, no double submit, works without JavaScript as a plain POST fallback where possible.
- After a sign up: 1 tap tells us what to set up first (role or recipe). It is saved with the sign up.
- `waitlist/Code.js` saves email, company, source, page, plus role, interest and store as extra columns (old rows unaffected). James redeploys it once.
- A short privacy line under every form: what we keep and why.

## 10. Quality gates (before Seun sees anything)

`npm run build` passes (types, lint, prerender). Every page screenshotted at 1440 and 390, dark and light, and looked at. The no-meta scanner is clean on every page's text. No overlaps, clipping, orphans or dead space. Lighthouse-level basics: headings in order, labels, contrast, focus, alt text. The red lines hold everywhere.

# The rebuild: how this site is made

The site James shipped on 2 Oct is the base. We keep its core (prerendering, the waitlist backend, the template pages, the sample output and the best of its copy) and rebuild the rest to the Obsession standard: the design system in full, every motion, every illustration, the navigation, SEO and answer engines, the capture forms, and the copy.

## 1. Decisions (Seun, 2 Oct)

- **Pages:** Home (`/`), Agencies (`/agencies`), Founders (`/founders`), Sales (`/sales`), Marketing (`/marketing`), Developers (`/developers`), Templates (`/templates` and `/templates/SLUG`), Sample output (`/sample-output`). `/recipes` and `/recipes/SLUG` redirect (301) to the template pages.
- **Name:** the ready-made jobs are **Templates**. Never "recipes", never a count of them.
- **Headlines:**
  - Home: **"The intelligence infrastructure for commercial teams"**.
  - Every other page: an "AI agents that ..." headline. Agencies "AI agents that help your agency win and keep clients.", Founders "AI agents that help your business win and keep customers.", Sales "AI agents that help your team win and renew accounts.", Marketing in the same pattern.
  - Under every headline, the typed line and the sub make it literal what Obsession does, and why only Obsession: declared AI agents with their own identity, inboxes, phone numbers and browsers that do business with other companies (sign up, shop, ask, chase, check), continuously, at every company on your list, every step signed. Specific, novel, differentiated. No "Early access" pill.
- **Calls to action:** Home "Join the waitlist" (plus the free mystery shop as the second path). Agencies and Marketing: waitlist, plus "mystery-shop a store free" (your own store, or a client's with their OK). Founders "Get early access". Sales "Get early access for my team". Developers "Get API access". Template pages: the free mystery shop on the Mystery shopper page, the waitlist (with the template preset as interest) elsewhere. Sample output: "Get one for your store".

## 2. The story every page tells

1 arc, easy to follow, never told as a story. In this order (a page may skip a beat, never reorder):

1. **Hero:** what Obsession is, for this reader. Headline, typed tasks, 1-line sub, the capture, 3 proof facts, the console (a live run).
2. **How it works:** pick a template, type a task, or build your own; agents get their own ID, inbox, number and browser; you get signed proof and your next move.
3. **The gap:** why it matters to them. Today vs with Obsession, in their words.
4. **Use cases:** tabs, each with its own app screen: the moment in their week, the outcome, what the agents do, why only agents can.
5. **Outcomes:** what changes, in numbers. Up-to-50 rule: every modelled number is an "up to" ceiling; deliverables are flat.
6. **Every kind of:** the kinds of agencies, businesses, teams it fits.
7. **Templates:** the ones that fit this reader, linking to their pages.
8. **Proof:** the real September store check (sample output) and the signed record.
9. **Questions:** trust and the red lines, as a claim heading ("Every agent declared. Every step yours to approve.").
10. **Final call to action.**

## 3. Copy

- Kevin Hale: get to the point, a non-technical owner understands it in 5 seconds, less is more. A section is a heading plus about 1 line; body copy is short.
- Headings make a claim; they never name their section, label the reasoning, or tease a payoff with a question. Run `node ~/.claude/skills/no-meta-callouts/scan.mjs` on the words a reader sees.
- Numerals, British spelling, contractions, no em or en dashes, no hyphenated compounds where a plain word works.
- "Continuously", never "for weeks". Never cap scale ("every company on your list", never "up to 50 companies"); example numbers inside demos are fine.
- No internal decisions on the page: no template counts, "soon", "join order", "Early access" pills, what is not built yet.
- No Obsession prices, no guarantees, no money promises, no sources or citations on the page, no real company names (use categories, Rival A/B/C, invented names checked to be unused).
- Every example that is not from a real run is clearly an example in context; the real September store check is the one real run.
- **Red lines** (on every page and in every screen): agents are declared and say who they work for; a client's or account's systems and journeys only with the owner's OK; prospects and rivals only through public self-serve paths (trial and newsletter sign-ups allowed: declared as AI, never reply, close if a rep writes); never fake buyers, never contact staff as a fake buyer ("ask the bot, never staff"); inside data only through tools the customer connects, with consent; stop before payment; no cold spam; no fake identities.

## 4. Look

- **Design system only.** `src/styles/ds/` (tokens, motion, components) is loaded first. Use `--ob-*` tokens and the `.ob-*` component classes (`.ob-btn`, `.ob-nav`, `.ob-mnav`, `.ob-menu`, `.ob-pill-form`, `.ob-field`, `.ob-chips`, `.ob-prompt`, `.ob-ptabs`, `.ob-faq`, `.ob-receipt`, `.ob-finding`, `.ob-ledger`, `.ob-kit`, `.ob-card` ...). Read `Brand/Design System/README.md` (in the workspace) before styling anything.
- **Class names:** every site class starts `s-` (`.s-hero`, `.s-hero-h`), so nothing collides with the screens' classes (`.ax-*`, `.app-*`, and the short names inside them).
- **No AI tells:** no all-caps mono eyebrows over headings, no identical bordered cards, no bullet squares, no centred bullet lists, no demo chrome, no gradient text, no grid-paper backgrounds, no fade-up on every section. Colour is never a status: the ring mark's states are.
- 1 primary button per view, 1 glow per section, the 1160px container, the 4px spacing grid, headings from the type scale (`.ob-type-*`), tabular numerals for figures.
- Dark is the default, light is warm paper; both designed on purpose, contrast floors met (body 7:1, labels 4.5:1, controls 3:1).

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
| Templates | each template's own screen: competitor `rivals`, prospect `pack`, mystery `shop`, speed `inbound`, prices `prices`, ads `ads`, trial `battlecard`, email-sms `inbox`, audit `ship`, delivery `qa`, account-watch `acctwatch`, business-case `case`, get-paid `invoices`, supplier-quotes `suppliers`, listings `listings` |
| Developers | `dev`, `compose` |
| Sample output | the real report captures (`public/report`) |

New screens to build: `shop` (the mystery shopper run on a store: basket, inboxes watched 48 hours, stop before payment, the report), `inbox` (a rival's emails and texts on 1 timeline), `ads` (a rival's ads, landing pages and offers), `prices` (prices and promos across rivals), `campaign` (your own launch emails, texts and links checked as a customer).

## 7. Navigation

- Desktop: the ring mark and wordmark; **Solutions** (a menu: Agencies, Founders, Sales, Marketing, each with 1 line), **Templates** (a menu grouped by job: Win customers, Watch rivals, Check your own journeys, Get paid and save, plus "All templates"), **Developers**, **Sample output**; on the right the theme switch and the page's call to action. Sticky, quiet, keyboard and screen reader complete (`.ob-nav`, `.ob-menu`).
- Phone: a sheet (`.ob-mnav`, `.ob-anim-sheet`) with the same groups and the call to action.
- Footer: a full site map (every page and template), the red lines in 1 line, the theme switch.

## 8. SEO and answer engines

- 1 `h1` per page. Unique title (55 to 60 characters) and description (140 to 155) per page in `content/meta`.
- Canonical, Open Graph and Twitter large image per page (`public/og/*.png`, 1200 x 630).
- JSON-LD: `Organization` and `WebSite` on every page, `SoftwareApplication` on Home, `FAQPage` wherever questions show, `BreadcrumbList` on audience and template pages.
- Answer-ready copy: each page opens with 1 plain sentence that defines its subject ("Obsession is ..."), its `meta.answer`, and questions phrased the way buyers ask them.
- `llms.txt` (short) and `llms-full.txt` (every page's copy as plain text), `sitemap.xml`, `robots.txt` that welcomes search and AI crawlers, `_redirects` for `/recipes`.
- Internal links: audience pages to their templates, templates to the audiences they serve, every page to the sample output.

## 9. Capture

- 1 form component (`.ob-pill-form`), 2 kinds: `waitlist` (email) and `mystery` (store address first, then email). Clear errors (message, danger edge, `aria-invalid`, `aria-describedby`), busy and done states, a hidden bot field, no double submit, works without JavaScript as a plain POST fallback where possible.
- After a sign up: 1 tap tells us what to set up first (role or template). It is saved with the sign up.
- `waitlist/Code.js` saves email, company, source, page, plus role, interest and store as extra columns (old rows unaffected). James redeploys it once.
- A short privacy line under every form: what we keep and why.

## 10. Quality gates (before Seun sees anything)

`npm run build` passes (types, lint, prerender). Every page screenshotted at 1440 and 390, dark and light, and looked at. The no-meta scanner is clean on every page's text. No overlaps, clipping, orphans or dead space. Lighthouse-level basics: headings in order, labels, contrast, focus, alt text. The red lines hold everywhere.

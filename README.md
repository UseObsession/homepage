# Obsession site

useobsession.com: React 19, Vite, TypeScript and React Router, every page prerendered to its own HTML file, hosted on the free Cloudflare plan as Workers static assets. How the site is made, and every decision behind it: `docs/REBUILD.md`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # types, lint, share images, the client build, then every page prerendered into dist/
```

## Where things live

- **Words:** `src/content/`. Edit copy here, never in components. The contract is `src/content/types.ts`.
  - `pages/NAME.ts` exports `page` (a `Page`): Home, Agencies, Founders, Sales, Marketing, Developers. Each is served at its own `meta.path`.
  - `recipes/SLUG.ts` exports `recipe` (a `Recipe`), served at `/recipes/SLUG`. Its group, name and line feed the nav menu, the phone sheet, the footer and every recipe list.
  - `sample.ts`: the Sample output page and the output viewer (the 1 real run, the September store check).
  - `site.ts`: the Recipes index, Privacy, Agents, the 404 page and the `llms.txt` intro. `CONTROLLER` (the privacy notice's registered company name and address) is supplied by the founders before the site ships.
  - `registry.ts` finds every page and recipe file (and holds the recipes' order); `meta.ts` gives each page its title, description, share image and breadcrumb; `nav.ts`, `footer.ts`, `capture.ts` and `recipe-page.ts` hold the shared words.
  - `catalog.ts` and `heads.ts` are the index of every page the app carries without the pages' words (recipe and use case names, lines and addresses; each page's title, description and breadcrumb). They are worked out from the content at build time, and the browser gets only their values (`vite.config.ts` `contentIndex`). `words.ts` loads 1 recipe's or use case's words for its own page.
- **Design system:** `src/styles/ds/` (tokens, motion, components), synced from `Brand/Design System/` in the workspace by `node scripts/sync-assets.mjs`. Never edit it here. Site classes start `s-` and live in each component's own CSS file; `src/styles/site.css` holds the page primitives, including the 1 column split every 2 column section uses (`--s-split`).
- **App screens:** 1 React component per screen, `src/screens/NAME.tsx`, with its CSS in `src/screens/css/NAME.css` (converted from the workspace's `_research/illus/` HTML on 3 Oct 2026 by `scripts/convert-screens.mjs`; no longer synced: change them here), rendered by `components/AppScreen`. The prerender draws each page's screens into its HTML as static markup (the first view's styles written into the page, the rest loaded as each screen comes near), and writes every screen to `dist/screens/`; the browser never loads the components, and fetches a screen's HTML only when the reader moves to a page client side (`components/screens.ts`). Screens drawn for an agency take the workspace and are listed in `components/workspace.ts` (the build checks it). `npm run check:screens` proves every component still draws its original markup; `npm run screens:html -- DIR` writes every screen to its own page to look at.
- **Logo:** `components/Logo` (`Lockup`, `Mark`, `StatusMark`), files in `public/logo/` and `src/assets/logo/states/`, synced with the design system. Never retype the wordmark.
- **Partner logos:** the tools results land in (Clay, Slack, Zapier, Make, n8n; HubSpot and Salesforce ready), in 1 colour, only where the words beside them name the tool. Which logos go where is `src/content/partners.ts` (delete a line to take one off); `npm run partners` syncs the files from `Brand/Partner logos` in the workspace into `src/assets/partners/`, and only the tools that file lists. Google's and Microsoft's product icons (Gmail, Sheets, Outlook, Teams) stay out until permission is granted in full colour: both forbid recolouring them. Clay's logo needs Clay's OK before launch (press@clay.com).
- **Waitlist:** every form on the site is the waitlist: `components/CaptureForm`, sending through `src/lib/waitlist.ts` to a Google Apps Script web app (`waitlist/Code.js`) owned by jamesniranye@gmail.com. It writes each sign up to the "Sign ups" tab of the **Obsession waitlist** sheet in that Drive (the sheet named by the script property `SHEET_ID`) and emails an alert. The site reads the web app URL from `VITE_WAITLIST_URL` in `.env`, which is committed, so a local `npm run dev` posts to the live sheet unless you start it with `VITE_WAITLIST_URL=` (empty: preview, nothing sent).
  - **The form.** It asks for the work email only, with the page's own offer as its button ("Join the waitlist", "Check 5 stores free", "Check my AI agent free", "Get API access"). The line under it says they're joining the waitlist and what they get (`content/join.ts`, worked out from the form's kind, page and recipe by `lib/join.ts offerOf`): a free check where the page offers one (`mystery`: their store, or 5 client stores on agency pages; `verify`: an AI agent), else what to name first. Then 1 privacy line.
  - **The card.** Once the email saves, the form becomes `components/JoinCard` in the same spot, in up to 4 short steps with a progress bar and Back:
    1. **Who they are** (required): a brand, an agency, marketing, sales, a developer or something else. The page picks a default (`roleOf`: an agency page, the marketing, sales and developers pages, a store offer), so most confirm with 1 tap. An agency also says what kind (required) and, optionally, how many clients; a sales team, optionally, how big.
    2. **Name, company and website** (all required, so we can reply and look at their store). Company and website are filled in from a work email; the website's label follows the role ("Store website", "Agency website").
    3. **Up to 5 brands** (optional). The question follows the page's free check when it made one, an AI agent page's agents, else the role (`askOf`): client stores for an agency (worded by its kind: a performance agency is asked which brands to follow from ad to checkout), their own store for a brand, rivals for marketing, accounts for sales. A developer, or "something else" on a page with nothing to check, skips this step (`stepsOf`).
    4. **Recipes** (at least 1, chips by job, the page's own recipe ticked, the ones people like them start with shown first under "Suggested for you", never ticked for them) and an optional use case.
    Then the thank you says what happens next in the offer's words ("We'll check fernhollow.example as a new customer and email you within 4 days") with a summary and "Change your answers".
  - **One sign up, one row.** The email is sent and awaited with a random sign up ID; every later step sends the whole sign up so far with that ID in the background (1 post in flight, the newest wins, a beacon if the page closes), stamped with the time it was made. The sign up lives in this browser for 23 hours, so a reload or another page opens it where they left it, and every form on the page shows it. The card's code is its own chunk, warmed when a reader touches a form; its styles are imported by `CaptureForm` and `scripts/prerender.mjs` writes them into every page that can open it. A stale chunk after a deploy reloads the page once (`main.tsx`).
  - **Version handshake.** The script answers every JSON post with its version (`v`). 3 and up gets its own columns; 2 gets the same answers in the columns it has (Reader, Job detail, First job, Store or Agent, Anything else); 1, or no `v`, keeps the email only, so the form says the plain "You're on the list." The site can ship before or after the script without losing a sign up.
  - Columns added by version 3, after Company: Website, Agency type, Offer, Brands to check, Recipes, Use case; the role goes in Reader and the optional sizes in "Agency: clients" and "Sales: team size". Step reached reads 1 Email, 2 Role, 3 Name, 4 Brands, 9 Done. Columns are found by their header, so old rows are untouched; missing headers are added at the end of row 1 the first time they're needed. Older columns (the first card's questions) stay for the rows that have them.
  - The forms work before the page's script loads: they are real `<form method="post">` forms aimed at the same URL, and the script takes form posts as well as JSON. A post without a sign up ID still works as before.
  - Guards: a hidden `website` field (anything in it is treated as a bot and dropped; the company's website is `site`), a formula guard on every cell, a lock around each write, at most 8 new rows per email an hour and 40 updates per sign up an hour.
  - Alerts go to every address in the script property `NOTIFY_TO`, or to the owner: 1 for each new sign up (with the offer), and 1 when they finish, its subject naming who, the offer and the first recipe ("Maya Patel, Northwind Labs. clients (free check): Mystery shopper and 1 more"), its body leading with what to check first, then every answer.
  - **To change the script (its owner, once per change):** paste `waitlist/Code.js` into the Apps Script editor, save, then Deploy, Manage deployments, the pencil on the live deployment, Version: New version, Deploy. The URL stays the same. Opening that URL afterwards shows the live version (`"v":3`) and adds any missing column, without making a row. Never click "New deployment": that makes a new URL.
  - **Testing:** never post to the live web app. `node waitlist/test/code.test.mjs` runs the script against a fake sheet; `node waitlist/test/join.test.mjs` runs the card's logic through Vite (every form's offer, the routing, both script versions) and sends a whole sign up end to end into the fake sheet. To click through the card, run `VITE_WAITLIST_URL= npx vite` (preview: nothing leaves the machine), or point it at `node waitlist/test/stub.mjs PORT DIR`, which runs the real `Code.js` against a fake sheet.

## Build and prerender

`npm run build` runs `tsc -b`, `oxlint`, `scripts/og.mjs` (a 1200 x 630 share image per page into `public/og/`), `vite build`, then `scripts/prerender.mjs`, which:

- renders every page to its own HTML file (`dist/agencies.html`, `dist/recipes/mystery-shopper.html`) with its head: title, description, canonical, share tags, JSON-LD and font preloads, and its styles written into it (see Speed);
- writes `404.html`, `sitemap.xml`, `robots.txt`, `llms.txt` and `llms-full.txt` (every page's words as plain text);
- trims the shared stylesheet to the rules the site uses (`scripts/purge-css.mjs`), then each page's copy to the rules that page can use;
- fails the build on a broken promise: a missing share image, a JSON-LD that does not parse, a bracketed placeholder on a page, a page section missing from `llms-full.txt`, an agency screen missing from `components/workspace.ts`. Style notes (title and description lengths, links) only warn.

Code that runs while a component renders must not touch `window` or `document`; do that inside an effect.

## Speed

A page paints from its own HTML alone, and the app arrives after it:

- **No request before the first paint.** Each page carries its styles in its head (the site's, trimmed to the rules its HTML and its code can set, then the styles of the app screens its first view shows). The fonts it sets are preloaded as files. The whole site sheet stays a file for a page reached client side (`lib/siteStyles.ts`), and so do the screens' own sheets.
- **The boot script** (`src/boot.ts`, written inline at the end of every page by the prerender, never bundled) plays each app screen's story as it comes into view (a story is HTML and CSS: the `.play` class), loads each screen's styles as it comes near, and loads the app once the hero's headline and sub have landed and been painted (at once on a touch, click or key).
- **The app** is a small entry (React, the router, the nav, the footer and the index of every page) plus 1 chunk per page (`App.tsx` `lazyPage`; the page's chunk and words load before hydrating, `preloadRoute`). It hydrates in a transition, in short slices. The site's styles stay 1 sheet in their import order (`vite.config.ts` `codeSplitting`).
- **The browser skips what it can't see** (`styles/perf.css`): every app screen is a fixed 720 x 450 window drawn only near the view; hero tabs not chosen, and screens below the hero until the reader comes near, are skipped altogether.
- `styles/entrance.css` shows the hero's words from the first frame (they rise and sharpen without fading in). Delete it to bring the design system's fade back.

## Hosting

Cloudflare Workers static assets on the free plan, configured by `wrangler.jsonc`: the build command is `npm run build`, the deploy uploads `dist/`. Unknown addresses get `404.html` with a real 404. Redirects live in `public/_redirects`, response headers in `public/_headers`. Nothing may need a paid feature.

**After every deploy, ping IndexNow** (Bing and the engines that share its pings; Copilot and ChatGPT search read Bing): `npm run indexnow` sends every page in `dist/sitemap.xml`, `npm run indexnow -- /agencies /recipes/lead-leaks` only the pages that changed, `--dry-run` prints the request. It never runs on its own: run it after the deploy (for example `npx wrangler deploy && npm run indexnow`), because IndexNow checks the key file on the live site. The key is the 32 hex character file in `public/` (`scripts/indexnow.mjs` says how to replace it). The founders' side (Bing Webmaster Tools, Search Console, Cloudflare's crawler settings, Brave) is in `_research/seo/AI-SEARCH-FOUNDERS.md` in the workspace.

## Copy rules

`docs/REBUILD.md`, "Copy": numerals, British spelling, contractions, no em or en dashes, no hyphenated compounds where a plain word works, headings that make a claim, no money promises, no guarantees, no sources on the page. Every example that isn't from a real run says "Example". Run `node ~/.claude/skills/no-meta-callouts/scan.mjs dist/llms-full.txt` on the words a reader sees.

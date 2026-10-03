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
- **Waitlist:** every form is `components/CaptureForm` (kinds `waitlist`, `mystery` and `verify`, the free AI agent check), sending through `src/lib/waitlist.ts` to a Google Apps Script web app (`waitlist/Code.js`) owned by jamesniranye@gmail.com. It writes each sign up to the "Sign ups" tab of the **Obsession waitlist** sheet in that Drive and emails an alert. The site reads the web app URL from `VITE_WAITLIST_URL` in `.env`. Without it the forms run in preview and send nothing.
  - Columns: Received, Email, Company, Source, Page, Role, Interest, Store, Agent. Columns are found by their header, so old rows are untouched; Role, Interest, Store and Agent are added to row 1 the first time they're needed. Agent is the chat page or phone number a free AI agent check runs on.
  - After a sign up, 1 tap answers the roles question. The form posts again with the same email and source, and the script folds it into the same row (same email and source within 10 minutes updates the row instead of adding one).
  - A mystery or verify form with `orWaitlist` takes a blank first field (the store, or the AI agent) as a plain waitlist sign up.
  - The forms work before the page's script loads: they are real `<form method="post">` forms aimed at the same URL, and the script takes form posts as well as JSON. A form post gets a short "You're on the list" page with a link back.
  - Guards: a hidden `website` field (anything in it is treated as a bot and dropped), a formula guard on every cell, a lock around each write, and at most 8 posts per email per hour.
  - Alerts go to every address in the script property `NOTIFY_TO` (comma separated), or to the owner when it isn't set.
  - **To change the script (James, once per change):** paste `waitlist/Code.js` into the Apps Script editor, save, then Deploy, Manage deployments, the pencil on the live deployment, Version: New version, Deploy. The URL stays the same. To send alerts to both founders, add `NOTIFY_TO` under Project Settings, Script properties.
  - After adding anything that needs a new permission, run `authorize` once from the editor and tick every box. The current version needs none beyond the first deploy's.

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

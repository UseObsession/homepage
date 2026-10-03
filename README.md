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
- **Design system:** `src/styles/ds/` (tokens, motion, components), synced from `Brand/Design System/` in the workspace by `node scripts/sync-assets.mjs`. Never edit it here. Site classes start `s-` and live in each component's own CSS file; `src/styles/site.css` holds the page primitives, including the 1 column split every 2 column section uses (`--s-split`).
- **App screens:** `src/screens/` (synced from `_research/illus/`), rendered by `components/AppScreen`. The prerender writes each page's screens into its HTML and links their CSS; the browser fetches a screen only when the reader moves to a page client side (`components/screens.ts`). Screens drawn for an agency are listed in `components/workspace.ts` (the build checks it).
- **Logo:** `components/Logo` (`Lockup`, `Mark`, `StatusMark`), files in `public/logo/` and `src/assets/logo/states/`, synced with the design system. Never retype the wordmark.
- **Waitlist:** every form is `components/CaptureForm` (kinds `waitlist`, `mystery` and `verify`, the free AI agent check), sending through `src/lib/waitlist.ts` to a Google Apps Script web app (`waitlist/Code.js`) owned by jamesniranye@gmail.com. It writes each sign up to the "Sign ups" tab of the **Obsession waitlist** sheet in that Drive and emails an alert. The site reads the web app URL from `VITE_WAITLIST_URL` in `.env`. Without it the forms run in preview and send nothing.
  - **The sign up card.** The page asks for the email only and saves it at once. Then the form becomes a card in the same spot (`components/SignupSteps`): name and company (the company filled in from the email's domain), "Which of these is you?" on pages that don't know their reader, 4 questions for that reader (3 for "Something else"), an optional note, then a thank you with 1 next step (the free mystery shop or AI agent check, a link to the real report, or the first company to start with). Every step can be skipped; a row of squares shows progress and takes them back to any answer.
  - **The questions live in `src/content/signup.ts`**, with every word on the card, the first run each first job suggests, the Call first rules and the next step rules. Edit questions and options there, never in the component. A recipe page's own question (`Capture.roles`) is asked in place of the first job; a free shop or check asks "Whose store/AI agent is it?" there instead. The 5 reader pages set the reader from their address (`readers[].path`), with a Change link.
  - **One sign up, one row.** Step 1 sends the email with a random sign up ID; every later step sends the whole sign up so far with that ID, in the background (1 post in flight, the newest wins, a beacon if the page closes). The script finds the row by Sign up ID and checks the email and that the row is under a day old; it never updates a row by email alone. Skipped answers read "Skipped"; unreached ones stay blank. The card resumes after a reload for 24 hours (`sessionStorage`).
  - Columns, in the order of a new sheet: Received, Step reached, Email, Name, Company, Reader, First job, Call first, Suggested first run, Job detail, then 1 column per reader question (Agency: clients, Founder: sells, Sales: last slip seen, and so on), Other: role, Other: did last week, Results to, Anything else, Next step, Start with, Store, Agent, Interest, Source, Page, Arrived from, Reader from, Updated, Finished, Role (old rows), Sign up ID. Columns are found by their header, so old rows are untouched; missing headers are added at the end of row 1 the first time they're needed, and can be dragged into place once. Arrived from stays empty until the founders switch on `signup.keepArrivedFrom` (the privacy notice follows the same switch).
  - The forms work before the page's script loads: they are real `<form method="post">` forms aimed at the same URL, and the script takes form posts as well as JSON. A form post gets a short "You're on the list" page with a link back. A post without a sign up ID still works as before (the same email and source within 10 minutes updates the same row).
  - Guards: a hidden `website` field (anything in it is treated as a bot and dropped), a formula guard on every cell, a lock around each write, at most 8 new rows per email an hour and 40 updates per sign up an hour.
  - Alerts go to every address in the script property `NOTIFY_TO` (comma separated), or to the owner when it isn't set: 1 for each new sign up (marked when the email has signed up before), 1 with every answer, the suggested first run and Call first when they finish, and 1 when they ask for a free shop or check, or name a company, from the thank you.
  - **To change the script (James, once per change):** paste `waitlist/Code.js` into the Apps Script editor, save, then Deploy, Manage deployments, the pencil on the live deployment, Version: New version, Deploy. The URL stays the same. **Redeploy the script before the site change ships:** the new script accepts today's forms, but the old one would drop the card's answers and its rate limit would stop the card halfway. To send alerts to both founders, add `NOTIFY_TO` under Project Settings, Script properties.
  - After adding anything that needs a new permission, run `authorize` once from the editor and tick every box. The current version needs none beyond the first deploy's.
  - **Testing:** never post to the live web app. Build with `VITE_WAITLIST_URL` set to a local stub (a small server that logs what it receives) and `VITE_SIGNUP_TEST=1`, which turns on a test hook (`src/lib/signupTest.ts`, `?sd=4` opens step 4, `?sd=thanks` the thank you, `?sd=e2e` runs the checks) that the site's own build never includes.

## Build and prerender

`npm run build` runs `tsc -b`, `oxlint`, `scripts/og.mjs` (a 1200 x 630 share image per page into `public/og/`), `vite build`, then `scripts/prerender.mjs`, which:

- renders every page to its own HTML file (`dist/agencies.html`, `dist/recipes/mystery-shopper.html`) with its head: title, description, canonical, share tags, JSON-LD and font preloads, and links the CSS of the app screens it shows;
- writes `404.html`, `sitemap.xml`, `robots.txt`, `llms.txt` and `llms-full.txt` (every page's words as plain text);
- trims the shared stylesheet to the rules the site uses (`scripts/purge-css.mjs`);
- fails the build on a broken promise: a missing share image, a JSON-LD that does not parse, a bracketed placeholder on a page, a page section missing from `llms-full.txt`, an agency screen missing from `components/workspace.ts`. Style notes (title and description lengths, links) only warn.

Code that runs while a component renders must not touch `window` or `document`; do that inside an effect.

## Hosting

Cloudflare Workers static assets on the free plan, configured by `wrangler.jsonc`: the build command is `npm run build`, the deploy uploads `dist/`. Unknown addresses get `404.html` with a real 404. Redirects live in `public/_redirects`, response headers in `public/_headers`. Nothing may need a paid feature.

**After every deploy, ping IndexNow** (Bing and the engines that share its pings; Copilot and ChatGPT search read Bing): `npm run indexnow` sends every page in `dist/sitemap.xml`, `npm run indexnow -- /agencies /recipes/lead-leaks` only the pages that changed, `--dry-run` prints the request. It never runs on its own: run it after the deploy (for example `npx wrangler deploy && npm run indexnow`), because IndexNow checks the key file on the live site. The key is the 32 hex character file in `public/` (`scripts/indexnow.mjs` says how to replace it). The founders' side (Bing Webmaster Tools, Search Console, Cloudflare's crawler settings, Brave) is in `_research/seo/AI-SEARCH-FOUNDERS.md` in the workspace.

## Copy rules

`docs/REBUILD.md`, "Copy": numerals, British spelling, contractions, no em or en dashes, no hyphenated compounds where a plain word works, headings that make a claim, no money promises, no guarantees, no sources on the page. Every example that isn't from a real run says "Example". Run `node ~/.claude/skills/no-meta-callouts/scan.mjs dist/llms-full.txt` on the words a reader sees.

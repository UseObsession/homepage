# Obsession site

The marketing site, rebuilt in React (Vite, TypeScript, React Router) from the single file HTML pages in `useobsession/site`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static files in dist/, every page prerendered to HTML
```

## Where things live

- **Copy and examples:** `src/content/`. Edit words here, not in components.
  - `recipes.ts`: the recipes (competitor tracking, mystery shopper, prospect research and the rest), and everything on each recipe’s own page
  - `roles.ts`: the three ways to use it, and which ways each audience sees (agencies, sales and marketing get recipes and tasks; founders and developers also get the API)
  - `runs.ts`: the example runs played in the hero window. The mystery shopper run is the real September store check; the others are labelled as examples.
  - `audiences.ts`: the agencies, sales and marketing pages, which share one layout (`pages/AudiencePage.tsx`)
  - `report.ts`: the September store check behind the sample output, as data
- **Design system:** `src/styles/ds/` (tokens, motion, components), synced from the workspace by `scripts/sync-assets.mjs` and never edited here. `src/styles/tokens.css` keeps the old short names (`--bg`, `--text` and the rest) as aliases of its `--ob-` tokens. Dark by default, light via the switch in the nav and the footer.
- **Navigation and footer:** `src/content/nav.ts` (menus, recipe groups, each page's call to action) and `src/content/footer.ts`.
- **Waitlist:** every form is `components/CaptureForm` (kinds `waitlist` and `mystery`), sending through `src/lib/waitlist.ts` to a Google Apps Script web app (`waitlist/Code.js`) owned by jamesniranye@gmail.com. It writes each sign up to the "Sign ups" tab of the **Obsession waitlist** sheet in that Drive and emails an alert. The site reads the web app URL from `VITE_WAITLIST_URL` in `.env`. Without it the forms run in preview and send nothing.
  - Columns: Received, Email, Company, Source, Page, Role, Interest, Store. Columns are found by their header, so old rows are untouched; Role, Interest and Store are added to row 1 the first time they're needed.
  - After a sign up, 1 tap answers the roles question. The form posts again with the same email and source, and the script folds it into the same row (same email and source within 10 minutes updates the row instead of adding one).
  - The forms work before the page's script loads: they are real `<form method="post">` forms aimed at the same URL, and the script takes form posts as well as JSON. A form post gets a short "You're on the list" page with a link back.
  - Guards: a hidden `website` field (anything in it is treated as a bot and dropped), a formula guard on every cell, a lock around each write, and at most 8 posts per email per hour.
  - Alerts go to every address in the script property `NOTIFY_TO` (comma separated), or to the owner when it isn't set.
  - **To change the script (James, once per change):** paste `waitlist/Code.js` into the Apps Script editor, save, then Deploy, Manage deployments, the pencil on the live deployment, Version: New version, Deploy. The URL stays the same. To send alerts to both founders, add `NOTIFY_TO` under Project Settings, Script properties.
  - After adding anything that needs a new permission, run `authorize` once from the editor and tick every box. The current version needs none beyond the first deploy's.

## Prerendering

`npm run build` renders every page to its own HTML file (`scripts/prerender.mjs`), so crawlers, link previews and AI agents read the full copy without running JavaScript. React then hydrates that HTML in the browser. It also writes `sitemap.xml`, `robots.txt`, `llms.txt` and a `404.html`.

- Page titles and descriptions live in `src/content/meta.ts`. A new page needs an entry there, or it won't be prerendered.
- Code that runs while a component renders must not touch `window` or `document`; do that inside `useEffect`.
- Deploy the whole `dist/` folder. On Cloudflare Pages, keep the build command as `npm run build`.

## Copy rules

No em or en dashes, no hyphenated compound words, British spelling, contractions. No money promises or unsourced statistics. Every example that isn't from a real run says "Example".

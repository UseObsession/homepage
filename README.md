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
  - `report.ts`: the sample report, as data
- **Design tokens:** `src/styles/tokens.css`, ported from the v1.0 design system. Dark by default, light via the toggle.
- **Waitlist:** sign ups go to a Google Apps Script web app (`waitlist/Code.js`) owned by jamesniranye@gmail.com. It writes each one to the "Sign ups" tab of the **Obsession waitlist** sheet in that Drive and emails the owner. The site reads the web app URL from `VITE_WAITLIST_URL` in `.env`. Without it the form runs in preview and sends nothing.
  - To change the script: paste `waitlist/Code.js` into the Apps Script editor, save, then Deploy, Manage deployments, edit, New version. The URL stays the same.
  - After adding anything that needs a new permission, run `authorize` once from the editor and tick every box.
  - The form has a hidden `website` field; anything that fills it is treated as a bot and dropped.

## Prerendering

`npm run build` renders every page to its own HTML file (`scripts/prerender.mjs`), so crawlers, link previews and AI agents read the full copy without running JavaScript. React then hydrates that HTML in the browser. It also writes `sitemap.xml`, `robots.txt`, `llms.txt` and a `404.html`.

- Page titles and descriptions live in `src/content/meta.ts`. A new page needs an entry there, or it won't be prerendered.
- Code that runs while a component renders must not touch `window` or `document`; do that inside `useEffect`.
- Deploy the whole `dist/` folder. On Cloudflare Pages, keep the build command as `npm run build`.

## Copy rules

No em or en dashes, no hyphenated compound words, British spelling, contractions. No money promises or unsourced statistics. Every example that isn't from a real run says "Example".

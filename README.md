# Obsession site

The marketing site, rebuilt in React (Vite, TypeScript, React Router) from the single file HTML pages in `useobsession/site`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static files in dist/
```

## Where things live

- **Copy and examples:** `src/content/`. Edit words here, not in components.
  - `recipes.ts`: the recipes (competitor tracking, mystery shopper, prospect research and the rest), and everything on each recipe’s own page
  - `roles.ts`: the three ways to use it, and which ways each audience sees (agencies, sales and marketing get recipes and tasks; founders and developers also get the API)
  - `runs.ts`: the example runs played in the hero window. The mystery shopper run is the real September store check; the others are labelled as examples.
  - `audiences.ts`: the agencies, sales and marketing pages, which share one layout (`pages/AudiencePage.tsx`)
  - `report.ts`: the sample report, as data
- **Design tokens:** `src/styles/tokens.css`, ported from the v1.0 design system. Dark by default, light via the toggle.
- **Waitlist:** set `VITE_WAITLIST_URL` to an endpoint that accepts a JSON POST of `{ email, company, source, page }`. Without it the form runs in preview and sends nothing.

## Copy rules

No em or en dashes, no hyphenated compound words, British spelling, contractions. No money promises or unsourced statistics. Every example that isn't from a real run says "Example".

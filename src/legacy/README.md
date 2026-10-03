# src/legacy

## james/

James's 2 use case pages, restored as he built them at commit `6f067cc` ("fix prospecting", the last version of his use
case pages), at the same addresses:

- `/use-cases/prospect-intelligence-with-clay` (`james/pages/ProspectIntelligence.tsx`)
- `/use-cases/member-prices-for-price-intelligence` (`james/pages/PriceIntelligence.tsx`, `.css`)

The files in `james/` are his, byte for byte, in the same folder layout he had under `src/`, so his relative imports work
unchanged. They are the only place these 2 pages' words, numbers and layout live, so a change to one is a change to his file.

How they sit in the site:

- `src/pages/ProspectIntelligence.tsx` and `PriceIntelligence.tsx` are small wrappers the page glob finds (`App.tsx`). Each
  puts his page inside `JamesPage`, a `div.james`. They are lazy chunks like every other page: nothing of his is in the
  shared chunk.
- His CSS (his tokens, base and layout, and every component's) is scoped under `.james` when the site is built, by
  `scripts/scope-css.mjs` (wired in `vite.config.ts`). It styles only these 2 pages. His tokens are his own values and
  follow the site's light and dark switch (`<html data-theme>`), as on his site.
- The head, meta and JSON-LD of both pages are the site's (`content/usecases`), and the catalog entries stay, so the nav's
  Resources cards and `/use-cases` still list them. Only the study system's routing for these 2 addresses is gone
  (`App.tsx`); every other worked example still goes through it.
- The prerender's check that a page opens with its `meta.answer` skips these 2 pages (`isJamesPath`), since the words are
  his.

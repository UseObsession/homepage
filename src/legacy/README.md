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

### Home's persona band (`james/components/PersonaBand`)

James's persona band, restored on Home in the place the old band held (right after the hero), as he built it in his
first commit (`d74b01e`, `src/components/PersonaBand.tsx` and `.css`, with his Home section head: "Who it's for", "Pick who
you are.", his line under it). His markup, classes, slant, seam, hover growth, glow, circled arrow and reveal are kept; what
changed is the data, the colours and the count:

- 6 panels, in this order: 01 Agencies, 02 Founders, 03 Sales teams, 04 Marketing teams, 05 Developers, 06 Check your AI
  agents (`james/content/band.ts`; his `content/roles.ts` is untouched). His lines for Agencies, Sales teams and Marketing
  teams are kept; his Founders and developers line is now Developers' alone.
- Colours are the site's reader palette (`styles/accents.css`, `_research/colour/COLOUR.md`), not his orange, green, purple
  and blue: a panel's colour is the glow that rises from its foot and its circled arrow, never a flat fill, a tint or a
  word. The 6th panel is the product's own, so it has no hue: bone on ink, ink on paper.
- 2 rows of 3, decided by measurement. 6 in 1 row leave a 119px text column at 1440 and at 1280 (the container is 1160px at
  both), so "Developers" and "Marketing" break mid word at his type size and the lines run to 4 or 5; 2 rows of 3 give a
  304px column, titles on 1 or 2 lines and the chips on 1 row. Below 861px the panels stack, each slanted into the one
  above, as his did.
- It draws into `/` in the static HTML (it is part of Home's component tree) and its code is in Home's chunk only. His
  reveal is copied beside the band rather than imported, because `components/Reveal` is shared by his use case pages and
  importing it from Home makes the bundler cut a new shared chunk. The entry chunk is byte for byte the size it was.
- Home wraps it in `div.james`, so his tokens and base styles (scoped by `scripts/scope-css.mjs`) reach only the band.
- The old band (`components/sections/PersonaBand` and its CSS, `content/pages/home.ts` `audiences`) is no longer used by
  Home and is left in place.

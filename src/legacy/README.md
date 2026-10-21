# src/legacy

## james/

James's 2 use case pages, restored as he built them at commit `6f067cc` ("fix prospecting", the last version of his use
case pages), at the same addresses:

- `/use-cases/prospect-intelligence-with-clay` (`james/pages/ProspectIntelligence.tsx`)
- `/use-cases/member-prices-for-price-intelligence` (`james/pages/PriceIntelligence.tsx`, `.css`)

The files in `james/` are his, byte for byte, in the same folder layout he had under `src/`, so his relative imports work
unchanged. Apart from what they read from their content files (below), they are the only place these 2 pages' words,
numbers and layout live, so a change to one is a change to his file.

Changed since, with his OK (19 Oct 2026): the recipe names now match the recipe pages (Prospect intelligence, Lead leaks,
Price watch, in `pages/ProspectIntelligence.tsx`, `pages/PriceIntelligence.tsx` and `content/recipes.ts`), and the
basket, checkout and "never buys" rules are gone from both pages, since those are now the customer's settings.

Also 19 Oct, in the site's October voice ("Be a customer of ...", as the agencies example): both heroes lose the
Example chips and the Illustration note and keep his 3 stop flow, its words in line with the rest. The hero's headline
and sub, the questions (now on the Clay page too, in his `Faq` block) and the small print are read from the page's
content file (`content/usecases`), so the head, the JSON-LD and the page say the same words and `meta.answer` is the
first answer; the content file's `hero.flow` mirrors his flow. Everything else on the 2 pages is still his file. Through the steps:
no real company names but Clay, `.example` addresses, "says it's AI" for "declared as automated", no "test customer",
rechecks as this example's setting, and the basket checks unlocked.

A third page in his format (20 Oct 2026): `/use-cases/leak-checks-for-retention-agencies`
(`src/pages/RetentionAgencies.tsx`). It isn't his file: it is built from his pieces (`james/components`: `Step`, `Win`,
`Play`, `Count`, `SectionHead`, `Faq`, `FinalCta`, `Reveal`) inside `JamesPage`, with his classes, so his scoped styles
draw it and nothing in `james/` changed. Unlike his 2, every word it shows comes from its content file
(`content/usecases/leak-checks-for-retention-agencies.ts`), steps included; only the app windows' rows and numbers
live in the page. `jamesPaths.ts` lists it with his 2, so it gets its own route and the study system leaves it alone.
On 21 Oct the mystery shopping page for ecommerce agencies merged into it (its address is a 301 here). From it this
page took the real proof (after step 4, in his `uc-inout` block), the hero's real report link, a third link card for
the real run, and the site's own final section with the store address form for the 5 free checks. That section is the
site's `FinalCta`, placed after `JamesPage` rather than inside it, so the site's form keeps its own styles. Its 3
additions to his classes are in `src/pages/RetentionAgencies.css`, written with the `.james` prefix by hand.

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

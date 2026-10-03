# Archived blog posts

The blog is archived for now (Seun, 3 Oct 2026): these 5 posts are kept, checked by the type checker, and never built
or published. With no live post the site shows no blog at all: no /blog or /blog/SLUG pages, no Blog link in the nav,
footer or Resources, nothing in the sitemap, llms.txt or the feed.

To publish a post again:
1. Move its file up into `src/content/blog/` and change its import back to `from './types'`.
2. If it has images, move its folder from `archive/public/blog/` back to `public/blog/`.
3. Build. The blog index, its nav and footer links, the Resources group, the sitemap, llms.txt and blog/rss.xml come
   back on their own.

Holds noted in each file still apply: Post 1 (is-it-legal...) wants a UK and a US lawyer's read; Post 2
(free-audit...) uses the September store check, whose basket consent is unconfirmed.

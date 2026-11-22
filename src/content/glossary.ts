/* The glossary the blog and the JSON-LD read (lib/jsonld.ts). Neither term is the product or a headline category: each
   definition matches its post's own answer (the toolkit position, 21 Nov 2026). The names, terms and paths stay,
   because the blog's articles are built on them. No imports, so a post and the JSON-LD can both read it without a
   cycle. */
export const CUSTOMER_SIDE_OBSERVABILITY = {
  term: 'customer-side observability',
  definition:
    'Customer-side observability is testing your own emails, texts, checkout and chat the way customers meet them, from outside, over days and weeks, with every step dated.',
  path: '/blog/customer-side-observability',
}

export const AI_CUSTOMER = {
  term: 'AI customer',
  plural: 'AI customers',
  definition:
    'An AI customer is an AI agent that signs up, fills a basket or asks a question the way any customer can, with its own inbox, phone number and browser, and every step dated in an event log.',
  /* The definition article, which owns the term in search. */
  path: '/blog/ai-customers',
  /* The posts that define or explain the term, each about it in the JSON-LD (lib/jsonld.ts). Since the 11 Nov SEO
     revamp no other guide mentions it: the term names one way the index is collected, never the category. */
  articles: ['ai-customers', 'how-ai-customers-work', 'ai-customer-service-agent-vs-ai-customer', 'customer-side-observability'],
}

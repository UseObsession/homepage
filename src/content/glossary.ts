/* The glossary the blog and the JSON-LD read (lib/jsonld.ts). Since 9 Nov Obsession is a data company for the web behind
   the login, so neither term is the product or a headline category any more: customer-side observability is defined as
   the record itself, and the AI customer only as the way that record is collected (as Home's FAQ says where the data
   comes from). The names, terms and paths stay, because the blog's articles are built on them. No imports, so a post
   and the JSON-LD can both read it without a cycle. */
export const CUSTOMER_SIDE_OBSERVABILITY = {
  term: 'customer-side observability',
  definition:
    'Customer-side observability is keeping what a company shows only its signed-up customers: every email, text, member price, trial limit, quote and offer, each dated, with the email or screenshot behind it.',
  path: '/blog/customer-side-observability',
}

export const AI_CUSTOMER = {
  term: 'AI customer',
  plural: 'AI customers',
  definition:
    'An AI customer is an agent that signs up, starts a trial or asks for a quote the way any customer can, so that what a company shows only its signed-up customers is kept, dated, with the email or screenshot behind it.',
  /* The definition article, which owns the term in search. */
  path: '/blog/ai-customers',
  /* The posts that define or explain the term, each about it in the JSON-LD (lib/jsonld.ts). Since the 11 Nov SEO
     revamp no other guide mentions it: the term names one way the index is collected, never the category. */
  articles: ['ai-customers', 'how-ai-customers-work', 'ai-customer-service-agent-vs-ai-customer', 'customer-side-observability'],
}

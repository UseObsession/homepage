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
  /* The articles that define, explain and argue for the category (the AI customers hub), each about the term in the
     JSON-LD. */
  articles: [
    'ai-customers',
    'ai-customer-service-agent-vs-ai-customer',
    'how-ai-customers-work',
    'why-ai-customers-matter',
    'hire-ai-customers',
    'ai-customers-find-revenue-leaks',
    'ai-customers-at-scale',
    'future-of-ai-customers',
    'ai-customers-for-developers',
    'ai-customers-for-commercial-teams',
    'customer-side-observability',
    'ai-customers-for-ecommerce-brands',
    'ai-customers-for-retention-agencies',
    'ai-customers-for-cro-agencies',
    'ai-customers-for-cx-teams',
    'ai-customers-for-shopify-plus-agencies',
    'ai-customers-for-ecommerce-vendors',
    'ai-customers-for-b2b-sales-teams',
    'long-running-ai-agents',
    'what-to-build-with-ai-customers',
    'ai-agent-use-cases-for-business',
    'agentic-ai-use-cases-in-ecommerce',
    'speed-to-lead-statistics',
  ],
}

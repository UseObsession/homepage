/* The term Obsession owns: AI customers. 1 definition, word for word wherever the site defines it: the first sentence of
   the definition article's answer, and the DefinedTerm in the JSON-LD (lib/jsonld.ts) on Home and on every article in the AI
   customers hub. No imports, so a post and the JSON-LD can both read it without a cycle. */
/* What AI customers do, as a practice: the term the developer and CX audiences meet, defined once (its owner article,
   and its DefinedTerm in the JSON-LD on that article). */
export const CUSTOMER_SIDE_OBSERVABILITY = {
  term: 'customer-side observability',
  definition:
    'Customer-side observability is seeing what a company does to its customers by being one of them: every email, text, price, page, checkout and AI answer it sends, kept over time with evidence anyone can check.',
  path: '/blog/customer-side-observability',
}

export const AI_CUSTOMER = {
  term: 'AI customer',
  plural: 'AI customers',
  definition:
    'An AI customer is an AI agent that becomes a real customer of a company, with its own inbox, phone number and browser, and keeps what the company sends and shows it as evidence.',
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
  ],
}

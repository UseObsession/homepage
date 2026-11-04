# The AI customer: how the site talks about Obsession

Written 3 Nov 2026 from James's brief. Every page, block, recipe and post follows this.

## The change

**Before:** "Be a customer of every company. Keep the receipts." Pages called the thing a shopper, a test customer, or "our agents", and the proof line said "stores we shopped".

**After:** Obsession sells an **AI customer**.
- You **send** one to any company.
- It does what a real customer does: signs up, buys, leaves a basket, emails support, talks to the chat bot, cancels, asks for the refund. It stays for months.
- It keeps a record of how the company treats it, with proof.

Mystery shopping is **one of the jobs** an AI customer does. It isn't the product.

James's reason: "the whole shopper thing is a disservice and lack of understanding of the product". A shopper only shops, and that boxes Obsession into ecommerce QA. A customer covers checkout, inbox, support, trials and AI agents.

## The new spine

- **Hero (Home):** Intelligence on any company, from inside it.
- **Sub (Home):** Send your AI customers to your rivals, prospects and your own company. They sign up, buy, talk to support and stay for months, then bring back every email, offer, price and reply, with proof.
- **The verb on every other page:** Send an AI customer to X (reader pages, use cases, kinds). The hero leads with the outcome; the pages lead with the act.
- **Trust line (under the buttons):** It says it's an AI when it talks to a person, and every finding comes with its receipt.
- **The one sentence** (llms.txt, JSON-LD, /agents, meta descriptions where a sentence is needed): Obsession sends AI customers to any company you name. Each one signs up, buys, talks to support and stays for months, keeping every email, offer, price and reply it gets, with proof.
- **Proof stat:** Our AI customers found a gap at 93% of the stores where they ran every journey. (Same basis as before: the real audits, Seun, 7 Oct.)
- **Kinds:** Send an AI customer to anyone. Rivals, prospects, or yourself.
- **Final call:** Name a company. Send it an AI customer.

## Rewrite rules

1. **Name the product "AI customer".**
   - Singular in headlines ("Send an AI customer", "Your AI customer"), plural for scale ("AI customers at 10,000 companies").
   - Replace "shopper", "test shopper", "test customer", "our agents", "our agent signs up" and "we shopped" whenever they mean our product. "We shopped 128 stores" becomes "Our AI customers joined 128 stores".
2. **"Be a customer of X" headlines become "Send an AI customer to X"** or "Your AI customer at X". Keep the noun, and make the reader the one who sends it.
3. **Keep "mystery shopping" where it's the reader's own word or a search term:**
   - post titles and topics such as "best AI mystery shopping tools" and "B2B mystery shopping";
   - the recipe called mystery shopper.

   Frame it as a job the AI customer does ("an AI customer can mystery shop any store"). Never present it as the product.
4. **Don't change slugs, URLs, routes, file names, ids, keys, analytics names or redirects.** Change only words a reader sees: headlines, lines, alt text, meta titles and descriptions, FAQ answers, captions, and button labels where they say "shop" for the product.
5. **"Customer agent" stays only in developer and engine text.** There, introduce it once as "an AI customer (an agent with its own inbox, phone number and browser)". Everywhere else, say AI customer.
6. **Keep each piece's facts.** Don't invent numbers, customers or results, and don't add capability caveats. The site describes the product as built (James's rule).
7. **House voice:**
   - British spelling and contractions;
   - no em or en dashes;
   - no hyphenated compound words;
   - none of these words: leverage, unlock, seamless, robust, powerful, game changing, ecosystem, delve;
   - companies on screens stay invented at `.example` addresses.
8. **Keep lengths close to the old ones,** especially headings in tight layouts, meta titles (60 characters or fewer) and descriptions (160 or fewer).
9. **Ignore code comments and notes to editors,** except where a comment states a page's message, which should match.

## Check your files

- `node scripts/lint-copy.mjs` (dashes, retired phrases, spellings).
- `npx tsc -p tsconfig.app.json --noEmit` (types).

Don't run `npm run build`: several agents share this working tree, and the lead runs the build once at the end.

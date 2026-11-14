/* Products we compare ourselves with. A link to one of them carries rel="nofollow", so readers can still open it and
   search engines pass it no credit from our pages (Seun, 28 Oct 2026: "dont ... give them seo backlinks they are
   direct compettitor"). Sources (Google's docs, Klaviyo's guides, studies, press) keep a plain link. Ottom is never
   named at all (Seun, the same day), and the blog gate fails a post that names it. Add a product's host here when a
   post first compares it. */
const COMPETITOR_HOSTS = new Set([
  // AI mystery shopping and store checks
  'adstack.com', 'aistoreshopper.com', 'competitive-compass.com', 'convertica.org', 'cresta.com', 'customeroptix.com',
  'dealerdrivendata.com', 'gen.qa', 'implementai.io', 'intouchinsight.com', 'liveperson.com', 'localspyai.com',
  'merchantguard.ai', 'ottom.io', 'presstwo.ai', 'qualified.com', 's-pro.io', 'shoptest.ai', 'tokensurf.io',
  'trocglobal.com', 'undercoveragent.ai', 'servicemonitor.co.uk',
  // Store, checkout and website monitoring
  'checklyhq.com',
  // AI chatbot and AI agent testing
  'braintrust.dev', 'cekura.ai', 'coval.ai', 'cyara.com', 'getmaxim.ai', 'hamming.ai', 'langchain.com', 'langfuse.com',
  'promptfoo.dev', 'roark.ai',
  // AI agent observability and voice agent platforms
  'arize.com', 'datadoghq.com', 'helicone.ai', 'retellai.com', 'vapi.ai',
  // Competitor email tracking
  'badrep.email', 'bird.com', 'competiscan.com', 'competitorinbox.com', 'emaillove.com', 'inboxarchive.org',
  'mailcharts.com', 'milled.com', 'owletter.com', 'panoramata.co', 'reallygoodemails.com', 'sendsitive.com',
  'sendview.io',
  // Klaviyo audit apps, agencies, deliverability and rendering tools (14 Nov 2026)
  '303.london', 'aimerce.ai', 'emailonacid.com', 'flowium.com', 'fluxchek.com', 'glockapps.com', 'litmus.com', 'netalico.com',
  'sparkcrm.cc', 'validity.com',
  // Competitor price tracking
  'competera.ai', 'lengow.com', 'minderest.com', 'omniaretail.com', 'particl.com', 'price2spy.com', 'pricefy.io',
  'pricemole.io', 'priceva.com', 'prisync.com', 'skuuudle.com', 'visualping.io', 'wiser.com',
  // Ad libraries (/compare)
  'foreplay.co',
  // AI visibility tracking (what AI assistants say about a brand)
  'otterly.ai', 'peec.ai', 'tryprofound.com',
  // Web search, extraction and browser APIs for AI agents (the 11 Nov 2026 comparison posts)
  'exa.ai', 'docs.exa.ai', 'tavily.com', 'docs.tavily.com', 'firecrawl.dev', 'docs.firecrawl.dev', 'parallel.ai',
  'docs.parallel.ai', 'linkup.so', 'you.com', 'serper.dev', 'serpapi.com', 'jina.ai', 'perplexity.ai',
  'docs.perplexity.ai', 'browserbase.com', 'docs.browserbase.com', 'browser-use.com', 'docs.browser-use.com',
  'apify.com', 'scrapingbee.com', 'brightdata.com', 'octoparse.com', 'axiom.ai', 'simplescraper.io', 'steel.dev',
  'hyperbrowser.ai', 'nimbleway.com', 'crustdata.com', 'grep.ai', 'agentmail.to', 'brave.com',
  // Competitive intelligence, battlecards and competitor marketing monitoring
  'klue.com', 'crayon.co', 'reyo.ai', 'hoppycopy.co', 'competitortrack.io',
  // Bank, card and travel market intelligence, and rate shopping
  'mintel.com', 'comperemedia.com', 'corporateinsight.com', 'mylighthouse.com', 'rategain.com', 'otainsight.com',
  // Ad intelligence
  'adspy.com', 'pipiads.com', 'motionapp.com', 'segwise.ai', 'bigspy.com',
  'tryatria.com', 'spyfu.com', 'semrush.com', 'similarweb.com', 'sensortower.com',
  // MAP monitoring and enforcement (14 Nov 2026)
  'trackstreet.com', 'brandalignment.com', 'growbydata.com', 'intelligencenode.com', 'pricebeeper.io', 'mapptrap.com',
  'vorysecontrol.com', 'econtrol.vorys.com',
  'kompyte.com', 'contify.com', 'alpha-sense.com',
])

/* A host and its parents: help.sendview.io matches sendview.io. */
function isCompetitor(href: string): boolean {
  let host: string
  try {
    host = new URL(href).hostname.replace(/^www\./, '')
  } catch {
    return false
  }
  for (let h = host; h.includes('.'); h = h.slice(h.indexOf('.') + 1)) if (COMPETITOR_HOSTS.has(h)) return true
  return false
}

/* The rel for an outside link: nofollow for a product we compare ourselves with. */
export const relOf = (href: string) => (isCompetitor(href) ? 'nofollow noopener' : 'noopener')

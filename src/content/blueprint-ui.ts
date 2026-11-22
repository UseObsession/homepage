import type { KitId } from './kitPaths'
import type { PersonaIcon } from './types'
import type { PieceId } from './prices'

/* The words and maps a blueprint page (pages/RecipePage) adds around the shared words in content/recipe-page.ts (22 Nov
   2026: Seun asked for the blueprint page to feel connected to the kits). It links each blueprint to its kit (the hero's
   badge and the "In the kit" section, components/blueprint/BlueprintKit) and to the pieces it runs on (components/
   blueprint/RunsOn). Kit membership is read from each kit's `blueprints.slugs` (content/kits); only the order a blueprint
   listed by 2 kits takes is here. */

export const blueprintUi = {
  /* The hero's badge beside the "Blueprint" pill: its type's icon and name ("Talk to customers"), linking the type's page. */
  badge: (kit: string) => kit,
  /* The pieces row under the first section's claim, each piece linking its page. */
  runsOn: 'Runs on',
  /* The section near the end: the other blueprints of the same type as cards (at most `max`), and the type's page. */
  kit: {
    heading: (kit: string) => `More blueprints to ${kit.charAt(0).toLowerCase()}${kit.slice(1)}.`,
    line: 'Each runs on the same key and bill, and every result lands in the same event log.',
    link: 'See this type of blueprint',
    max: 6,
  },
}

/* A blueprint listed by 2 kits sits in the first of these (the lead's rule, 22 Nov 2026: test, then watch, then talk). */
export const kitOrder: KitId[] = ['test', 'watch', 'talk', 'build', 'portals', 'train']

/* Each piece as the nav's Products menu names and draws it (content/nav.ts). Its address is content/piecePaths.ts. */
export const pieceChips: Record<PieceId, { name: string; icon: PersonaIcon }> = {
  personas: { name: 'Personas', icon: 'users' },
  email: { name: 'Email', icon: 'mail' },
  browser: { name: 'Browser', icon: 'browser' },
  phone: { name: 'Phone', icon: 'phone' },
  sandbox: { name: 'Sandbox', icon: 'sandbox' },
  messaging: { name: 'Messaging', icon: 'chat' },
}

/* The pieces each blueprint runs on, besides the persona every blueprint runs as (shown first). Read on 22 Nov 2026 from
   each blueprint's usage in src/lib/pricing/pricing.json (inboxes or emails: email; numbers, texts or call minutes:
   phone; visits: browser; vCPU hours: sandbox) and, for messaging, the WhatsApp channel in its own file. No field
   carries this yet, so it is kept here by slug: the lead's to confirm, and to update when a blueprint's usage changes. */
export const blueprintPieces: Record<string, PieceId[]> = {
  'account-watch': ['email', 'browser', 'phone'],
  'ad-landing-check': ['browser'],
  'ad-tracking': ['email', 'browser'],
  'ai-disclosure-check': ['email', 'browser', 'phone'],
  'competitor-tracking': ['email', 'browser', 'phone'],
  'delivery-monitoring': ['email', 'browser', 'phone'],
  'drift-watch': ['email', 'browser'],
  'email-sms-tracking': ['email', 'browser', 'phone'],
  'lead-leaks': ['email', 'browser', 'phone'],
  'listings-ai-answers': ['browser'],
  'mystery-shopper': ['email', 'browser', 'phone'],
  'outbound-agent-check': ['email', 'phone'],
  'partner-checks': ['email', 'browser'],
  'price-watch': ['email', 'browser'],
  'prospect-intelligence': ['email', 'browser', 'phone'],
  'resolution-check': ['email', 'browser', 'sandbox'],
  'sales-agent-check': ['email', 'browser', 'phone', 'messaging'],
  'support-bot-check': ['email', 'browser', 'phone', 'messaging'],
  'trial-teardown': ['email', 'browser', 'phone'],
  'vendor-agent-check': ['email', 'browser', 'phone'],
  'voice-agent-check': ['email', 'phone'],
  'website-audit': ['email', 'browser', 'phone'],
  /* Wave 2 (23 Nov 2026), from each draft's usage (_research/seo/blueprints-22nov/pricing_drafts/). */
  'missed-call-text-back': ['phone', 'messaging'],
  'appointment-reminders': ['phone', 'messaging', 'email'],
  'speed-to-lead-callback': ['phone', 'messaging', 'email'],
  'document-chaser': ['email', 'phone', 'messaging'],
  'sign-in-code-check': ['email', 'phone', 'browser'],
  'inbox-agent': ['email'],
  'imessage-assistant': ['messaging', 'phone'],
  'prior-authorization-status': ['browser', 'email', 'phone'],
  'load-tracking': ['browser', 'email', 'phone'],
  'invoice-collector': ['browser', 'email'],
  'nightly-agent-evaluation': ['sandbox', 'browser', 'email'],
}

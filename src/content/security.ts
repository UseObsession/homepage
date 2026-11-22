import { eventLogKept, prices } from './prices'
import { CONTACT_EMAIL } from './site'
import type { SecurityPage } from './types'

/* /security (21 Nov 2026). A synthetic buyer study that day found security (SOC 2, InfoSec, procurement) the most common
   objection among buyers who were otherwise keen, and James approved a page that says only what is true today. Unlike the
   rest of the site, which sells the product as designed, nothing here may describe a control we don't run: no
   certification line of any kind, not even "in progress", and no access logging, background checks or SSO for staff.
   Every line was checked on 21 Nov, and James supplied the rest that day:
   - the database: the Supabase project obsession-index, eu-west-1, Ireland (docs/core-store/design.md in the workspace);
   - the files: Cloudflare R2 in the EU, written by obsession-index's recorder and recording contract (clients.py R2); R2
     encrypts every object at rest with AES-256 (Cloudflare's R2 data security page);
   - the site on Cloudflare, served over HTTPS only (README, Hosting);
   - who can reach customer data: only the 2 founders, each signing in with two-step verification (James);
   - results deleted when the time the customer sets runs out; the event log's days on each plan, read from prices.ts,
     and model tokens at their markup or free with your own key (prices.ts tokens);
   - the sign-up form's 12 months and deletion on request (/privacy, content/site.ts);
   - agents stop at any identity check, and no person completes one for them.
   The suppliers are listed by name (James approved a public list, 21 Nov): only those live today, with where each runs
   only when known. No telecom carrier, iMessage or outbound email provider until one is live. The data processing
   agreement is being drafted, so the page offers it on request and links no document. */

/* How long the event log keeps events at no charge on each plan (prices.ts eventLogKept). */
const keptFor = eventLogKept

export const securityPage: SecurityPage = {
  meta: {
    path: '/security',
    title: 'Security at Obsession: where data lives and who handles it',
    description:
      'Where Obsession stores your data in the EU, how it’s encrypted, who can reach it, every supplier that handles it, how long we keep it, and who to email.',
    answer: `Obsession stores what its agents collect in a Postgres database hosted by Supabase, and the files behind it in Cloudflare R2, both in the EU and encrypted at rest. Only its 2 founders can reach customer data, and it answers security questionnaires by email at ${CONTACT_EMAIL}.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Security', path: '/security' },
    ],
  },

  headline: 'We store your data encrypted, and name every supplier that handles it.',
  sub: 'Obsession stores what its agents collect in a Postgres database hosted by Supabase, and the files behind it in Cloudflare R2, both in the EU and encrypted at rest. Only the 2 founders can reach customer data, and we answer security questionnaires by email.',
  updated: '22 November 2026',

  sections: [
    {
      id: 'where',
      heading: 'We store what our agents collect in the EU.',
      lines: [
        'The database is Postgres, hosted by Supabase in its eu-west-1 region, in Ireland.',
        'The files behind each result, such as screenshots and emails as they arrived, are stored in Cloudflare R2 in the EU.',
        'This website is hosted on Cloudflare.',
      ],
    },
    {
      id: 'encryption',
      heading: 'Stored data is encrypted, and so is every connection to it.',
      lines: [
        'Supabase encrypts the database at rest, and every connection to it uses TLS, the encryption behind HTTPS.',
        'Cloudflare R2 encrypts every file at rest with AES-256, and files travel to it over TLS.',
        'This website is served over HTTPS only.',
      ],
    },
    {
      id: 'access',
      heading: 'Only the 2 founders can reach customer data.',
      lines: ['Each founder signs in with two-step verification.'],
    },
    {
      id: 'suppliers',
      heading: 'These suppliers store or process data for us.',
      lines: ['We give customers 30 days’ notice before adding a supplier.'],
      list: [
        'Supabase hosts our database, in the EU (Ireland)',
        'Cloudflare hosts this website, and stores the files behind each result in the EU',
        'Kernel runs the cloud browsers our agents use',
        'Google Cloud runs the servers our agents work on, in Belgium (europe-west1)',
        'Google’s Gemini AI model reads pages so an agent can act on them',
        'Google Analytics counts visits to this website, only after a visitor allows it',
        'Google Sheets holds what people type into our sign-up form',
        'Resend receives the emails sent to our agents’ inboxes',
      ],
    },
    {
      id: 'dpa',
      heading: 'Our data processing agreement is available on request.',
      lines: [`Ask for it at ${CONTACT_EMAIL}.`],
    },
    {
      id: 'own-key',
      heading: 'You can bring your own model key.',
      lines: [
        `Model tokens are billed per million, from ${prices.tokensIn.amount} for input on Auto, or not at all when you use your own key.`,
        'With your own key, the model runs on your own account, and your provider bills you directly.',
      ],
    },
    {
      id: 'how-long',
      heading: 'You set how long we keep your results.',
      lines: [
        'Your results are deleted when the time you set runs out.',
        `Your event log keeps every event at no extra charge for ${keptFor}. Enterprise plans keep events for longer.`,
        'We keep what you type into our sign-up form for 12 months after you sign up.',
      ],
    },
    {
      id: 'delete',
      heading: 'We delete your sign-up details the day you ask.',
      lines: [`Write to ${CONTACT_EMAIL}. Our privacy notice lists what the form keeps and every right you have over it.`],
    },
    {
      id: 'identity',
      heading: 'Our agents stop at every identity check.',
      lines: [
        'When a site asks for proof of who someone is, such as a photo of an ID document, the agent stops there.',
        'No person ever completes an identity check for an agent.',
      ],
    },
  ],

  contact: {
    heading: 'Send us your security questionnaire.',
    line: 'Email us your questionnaire or any data question, and a founder replies.',
    email: CONTACT_EMAIL,
    cta: { label: 'Email us', to: `mailto:${CONTACT_EMAIL}?subject=Security%20questionnaire` },
    secondary: { label: 'Read the privacy notice', to: '/privacy' },
  },
}

import type { Explorer, ExRead } from './types'

/* Home's hero explorer (components/v5/HeroExplorer, 9 Nov, James): the index as a console, after Exa's. Since 10 Nov
   Search shows the index as obsession-index/migrations/0001_core.sql stores it (workspace), and nothing it doesn't.
   The chips are the schema's columns: persona, wall (the walls an event sits behind) and kind. Each row is an event,
   an act by our persona or what the firm showed or sent, at our clock's time. Its facts are its reads, one reader's
   note about one event, tagged with the read's kind. Evidence is the event's clean copy (headers, body, signature
   check, raw hash); Record is the event row and its reads. Gaps, changes and "nothing came" are answers, worked out
   when asked, so Search never states them: the times are on every row. Insights is where answers live. The 3 covered companies come from the Search examples that
   survived the adversarial check (docs/knowledge/search-examples-2026-11-10.md); a company not covered has Watch it.
   Every company is invented, on the reserved .example domain, and named for what it is. */

/* The readers that write the reads, by program and version, as read.reader holds them. */
const LLM = 'gemini-read@2026-11-09'
const flow = (text: string, value: Record<string, string>): ExRead => ({ kind: 'flow', text, value, reader: LLM })
const sentBy = (name: string, by = 'dkim'): ExRead => ({ kind: 'responder', text: name, value: { responder: name, by }, reader: 'rules/dkim@1' })
const prices = (text: string, items: { name: string; price: string }[]): ExRead => ({ kind: 'prices', text, value: { items }, reader: LLM })

export const explorer: Explorer = {
  placeholder: { search: 'Any company’s website', insights: 'Ask about a group of companies' },
  modes: { search: 'Search', insights: 'Insights' },
  buttons: { search: 'Search', insights: 'Ask' },
  openRecord: 'See the evidence',
  tryLabel: { search: 'Try other sources', insights: 'Try other questions' },
  groups: { persona: 'Persona', wall: 'Wall', kind: 'Kind', asked: 'Asked as', sources: 'Sources' },
  tabs: { facts: 'Facts', evidence: 'Evidence', record: 'Record' },
  output: { search: 'Output', insights: 'Report' },
  hint: 'Change who asks',
  none: 'Nothing behind this wall for this persona yet. Pick another.',
  fromIndex: 'From the index · 0.3 s',
  newRun: 'New run · first events in minutes',
  notCovered: 'Not in the index yet',
  unindexed: {
    title: 'Nothing from behind its walls yet.',
    line: 'Watch it, and Obsession signs up as the persona on the left. What the shop shows and sends from then on lands here.',
    cta: 'Watch it',
  },
  said: 'An example of Obsession’s console. Search a company and choose the persona, the wall and the kind. Each row is an event in the company’s timeline, what we did or what it showed or sent, with the facts read from it; open a row to see the evidence as it arrived and the record as the index stores it. A company not in the index has Watch it. Insights asks one question across a group of companies: Obsession reads the ones in the index and writes a report with a row for each company. A company not in the index yet has a Watch button, and what it sends joins the report as it arrives.',
  companies: [
    {
      domain: 'sportswear-brand.example',
      kind: 'Sportswear',
      covered: true,
      personas: ['New customer · US', 'New customer · UK'],
      walls: ['Purchase', 'Sign-up'],
      kinds: [
        { label: 'Emails', kind: 'Email' },
        { label: 'Pages', kind: 'Page' },
      ],
      views: [
        {
          persona: 'New customer · US',
          wall: 'Purchase',
          events: [
            {
              at: '5 Nov 10:02',
              dir: 'shown',
              kind: 'Page',
              text: 'Pop-up on leaving checkout',
              facts: [flow('Exit offer · 10% off', { flow: 'exit_offer', purpose: '10% off' })],
              evidence: {
                head: [['Page', 'sportswear-brand.example/checkout'], ['Shown', 'Thu 5 Nov 2026 10:02:35 · exit country US']],
                body: ['Wait! Take 10% off before you go.', '[ Claim 10% ]   No thanks'],
                proof: ['Clean copy of screenshot sha256:41b7… and page sha256:c2e0…'],
              },
              row: { kind: 'page', channel: 'web', wall: ['purchase'], at: '2026-11-05T10:02:35Z', visit: 'checkout · 5 Nov 10:01', ref: 'https://sportswear-brand.example/checkout', fields: { trigger: 'exit intent' }, digest: 'sha256:8a1f…', raw: { screenshot: 'sha256:41b7…', html: 'sha256:c2e0…' } },
            },
            { at: '5 Nov 10:02', dir: 'act', kind: 'Act', text: 'Left checkout at the payment step' },
            {
              at: '5 Nov 11:03',
              dir: 'shown',
              kind: 'Email',
              text: 'You left something behind',
              facts: [flow('Abandoned basket · a reminder, no offer', { flow: 'abandoned_basket', purpose: 'reminder, no offer' }), sentBy('Klaviyo')],
              evidence: {
                head: [['From', 'Sportswear Brand <hello@sportswear-brand.example>'], ['To', 'our address, removed'], ['Date', 'Thu, 5 Nov 2026 11:03:17 +0000'], ['Subject', 'You left something behind']],
                body: ['Your basket is waiting.', 'Trail Runner 2, size 9 · $120', '[ Back to my basket ]'],
                proof: ['dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', 'Received 11:03:20 · clean copy of sha256:7d02…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['purchase'], at: '2026-11-05T11:03:20Z', t_firm: '2026-11-05T11:03:17Z', visit: 'checkout · 5 Nov 10:01', after: 'leave · 10:02:38', subject: 'You left something behind', auth: 'dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', digest: 'sha256:e93b…', raw: { mime: 'sha256:7d02…' } },
            },
            {
              at: '6 Nov 10:05',
              dir: 'shown',
              kind: 'Email',
              text: '15% off your basket, 48 hours',
              facts: [flow('Abandoned basket · 15% off, code BACK15, 48 hours', { flow: 'abandoned_basket', purpose: '15% off, code BACK15, 48 hours' }), sentBy('Klaviyo')],
              evidence: {
                head: [['From', 'Sportswear Brand <hello@sportswear-brand.example>'], ['To', 'our address, removed'], ['Date', 'Fri, 6 Nov 2026 10:05:09 +0000'], ['Subject', '15% off your basket, 48 hours']],
                body: ['Still thinking it over?', 'Use BACK15 for 15% off your basket. It ends in 48 hours.', '[ Back to my basket ]'],
                proof: ['dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', 'Received 10:05:12 · clean copy of sha256:9f3c…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['purchase'], at: '2026-11-06T10:05:12Z', t_firm: '2026-11-06T10:05:09Z', visit: 'checkout · 5 Nov 10:01', after: 'leave · 5 Nov 10:02:38', subject: '15% off your basket, 48 hours', fields: { code: 'BACK15' }, auth: 'dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', digest: 'sha256:51ad…', raw: { mime: 'sha256:9f3c…' } },
            },
          ],
        },
        {
          persona: 'New customer · UK',
          wall: 'Purchase',
          events: [
            { at: '5 Nov 10:02', dir: 'act', kind: 'Act', text: 'Left checkout at the payment step' },
            {
              at: '5 Nov 11:04',
              dir: 'shown',
              kind: 'Email',
              text: 'You left something behind',
              facts: [flow('Abandoned basket · a reminder, no offer', { flow: 'abandoned_basket', purpose: 'reminder, no offer' }), sentBy('Klaviyo')],
              evidence: {
                head: [['From', 'Sportswear Brand <hello@sportswear-brand.example>'], ['To', 'our address, removed'], ['Date', 'Thu, 5 Nov 2026 11:03:59 +0000'], ['Subject', 'You left something behind']],
                body: ['Your basket is waiting.', 'Trail Runner 2, size 8 · £95', '[ Back to my basket ]'],
                proof: ['dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', 'Received 11:04:02 · clean copy of sha256:c18a…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['purchase'], at: '2026-11-05T11:04:02Z', t_firm: '2026-11-05T11:03:59Z', visit: 'checkout · 5 Nov 10:02', after: 'leave · 10:02:51', subject: 'You left something behind', auth: 'dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', digest: 'sha256:0f6e…', raw: { mime: 'sha256:c18a…' } },
            },
          ],
        },
        {
          persona: 'New customer · US',
          wall: 'Sign-up',
          events: [
            { at: '5 Nov 09:00', dir: 'act', kind: 'Act', text: 'Signed up with the footer form' },
            {
              at: '5 Nov 09:01',
              dir: 'shown',
              kind: 'Email',
              text: 'Welcome! Here’s 10% off',
              facts: [flow('Welcome · 10% off, code WELCOME10', { flow: 'welcome', purpose: '10% off, code WELCOME10' }), sentBy('Klaviyo')],
              evidence: {
                head: [['From', 'Sportswear Brand <hello@sportswear-brand.example>'], ['To', 'our address, removed'], ['Date', 'Thu, 5 Nov 2026 09:01:02 +0000'], ['Subject', 'Welcome! Here’s 10% off']],
                body: ['Welcome to the team.', 'Here’s 10% off your first order: WELCOME10', '[ Shop new in ]'],
                proof: ['dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', 'Received 09:01:05 · clean copy of sha256:02ee…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['sign_up'], at: '2026-11-05T09:01:05Z', t_firm: '2026-11-05T09:01:02Z', visit: 'sign_up · 5 Nov 09:00', after: 'sign_up · 09:00:12', subject: 'Welcome! Here’s 10% off', fields: { code: 'WELCOME10' }, auth: 'dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', digest: 'sha256:6b1d…', raw: { mime: 'sha256:02ee…' } },
            },
          ],
        },
        {
          persona: 'New customer · UK',
          wall: 'Sign-up',
          events: [
            { at: '5 Nov 09:00', dir: 'act', kind: 'Act', text: 'Signed up with the footer form' },
            {
              at: '5 Nov 09:01',
              dir: 'shown',
              kind: 'Email',
              text: 'Welcome! Here’s 10% off',
              facts: [flow('Welcome · 10% off, code WELCOME10', { flow: 'welcome', purpose: '10% off, code WELCOME10' }), sentBy('Klaviyo')],
              evidence: {
                head: [['From', 'Sportswear Brand <hello@sportswear-brand.example>'], ['To', 'our address, removed'], ['Date', 'Thu, 5 Nov 2026 09:01:06 +0000'], ['Subject', 'Welcome! Here’s 10% off']],
                body: ['Welcome to the team.', 'Here’s 10% off your first order: WELCOME10', '[ Shop new in ]'],
                proof: ['dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', 'Received 09:01:09 · clean copy of sha256:5a91…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['sign_up'], at: '2026-11-05T09:01:09Z', t_firm: '2026-11-05T09:01:06Z', visit: 'sign_up · 5 Nov 09:00', after: 'sign_up · 09:00:20', subject: 'Welcome! Here’s 10% off', fields: { code: 'WELCOME10' }, auth: 'dkim=pass d=sportswear-brand.example spf=pass dmarc=pass', digest: 'sha256:6b1d…', raw: { mime: 'sha256:5a91…' } },
            },
          ],
        },
      ],
    },
    {
      domain: 'sim-network.example',
      kind: 'Mobile network',
      covered: true,
      personas: ['Customer since Aug', 'New customer · UK'],
      walls: ['Cancel', 'Login', 'Open'],
      kinds: [
        { label: 'Texts', kind: 'Text' },
        { label: 'Pages', kind: 'Page' },
      ],
      views: [
        {
          persona: 'Customer since Aug',
          wall: 'Cancel',
          events: [
            { at: '6 Nov 10:00', dir: 'act', kind: 'Act', text: 'Texted STAC to 75075 to leave' },
            {
              at: '6 Nov 10:00',
              dir: 'shown',
              kind: 'Text',
              text: '“Your STAC is ST4 829 117…”',
              facts: [flow('Switching code · valid 30 days', { flow: 'switching_code', purpose: 'valid 30 days' })],
              evidence: {
                head: [['From', 'SIMNET'], ['To', 'our number, removed'], ['Received', 'Fri 6 Nov 2026 10:00:38']],
                body: ['Your STAC is ST4 829 117. It is valid for 30 days. Your service ends when your new provider switches you. You have no early exit charge.'],
                proof: ['Sender ID SIMNET · clean copy of sha256:5c19…'],
              },
              row: { kind: 'sms', channel: 'sms', wall: ['cancel'], at: '2026-11-06T10:00:38Z', visit: 'cancel · 6 Nov 10:00', after: 'ask · 10:00:00', fields: { sender: 'SIMNET' }, digest: 'sha256:2e7a…', raw: { text: 'sha256:5c19…' } },
            },
            {
              at: '6 Nov 10:06',
              dir: 'shown',
              kind: 'Text',
              text: '“Before you go: 50GB for £6 a month”',
              facts: [flow('Offer to stay · 50GB for £6 a month, 12 months', { flow: 'retention_offer', purpose: '50GB for £6 a month, 12 months' })],
              evidence: {
                head: [['From', 'SIMNET'], ['To', 'our number, removed'], ['Received', 'Fri 6 Nov 2026 10:06:12']],
                body: ['Before you go: stay with us for 50GB at £6 a month for 12 months. Reply YES by Sunday and keep your number.'],
                proof: ['Sender ID SIMNET · clean copy of sha256:d40b…'],
              },
              row: { kind: 'sms', channel: 'sms', wall: ['cancel'], at: '2026-11-06T10:06:12Z', visit: 'cancel · 6 Nov 10:00', after: 'ask · 10:00:00', fields: { sender: 'SIMNET', price: '£6', data: '50GB', term: '12 months' }, digest: 'sha256:9c03…', raw: { text: 'sha256:d40b…' } },
            },
            {
              at: '9 Nov 09:12',
              dir: 'shown',
              kind: 'Text',
              text: '“Last chance: 50GB for £5 a month”',
              facts: [flow('Offer to stay · 50GB for £5 a month, 12 months', { flow: 'retention_offer', purpose: '50GB for £5 a month, 12 months' })],
              evidence: {
                head: [['From', 'SIMNET'], ['To', 'our number, removed'], ['Received', 'Mon 9 Nov 2026 09:12:44']],
                body: ['Last chance: 50GB for £5 a month for 12 months if you stay. Reply YES today.'],
                proof: ['Sender ID SIMNET · clean copy of sha256:8e21…'],
              },
              row: { kind: 'sms', channel: 'sms', wall: ['cancel'], at: '2026-11-09T09:12:44Z', visit: 'cancel · 6 Nov 10:00', after: 'ask · 6 Nov 10:00:00', fields: { sender: 'SIMNET', price: '£5', data: '50GB', term: '12 months' }, digest: 'sha256:44f8…', raw: { text: 'sha256:8e21…' } },
            },
          ],
        },
        {
          persona: 'Customer since Aug',
          wall: 'Login',
          events: [
            { at: '6 Nov 09:57', dir: 'act', kind: 'Act', text: 'Signed in to the account' },
            {
              at: '6 Nov 09:58',
              dir: 'shown',
              kind: 'Page',
              text: 'Your plan, signed in',
              facts: [prices('30GB for £10 a month', [{ name: '30GB', price: '£10 a month' }])],
              evidence: {
                head: [['Page', 'sim-network.example/account'], ['Shown', 'Fri 6 Nov 2026 09:58:03 · signed in']],
                body: ['Your plan: 30GB · £10 a month', 'Next bill 1 Dec', '[ Change plan ]'],
                proof: ['Clean copy of screenshot sha256:aa30… and page sha256:1d9e…'],
              },
              row: { kind: 'page', channel: 'web', wall: ['login'], at: '2026-11-06T09:58:03Z', visit: 'log_in · 6 Nov 09:57', ref: 'https://sim-network.example/account', digest: 'sha256:f2b8…', raw: { screenshot: 'sha256:aa30…', html: 'sha256:1d9e…' } },
            },
          ],
        },
        {
          persona: 'New customer · UK',
          wall: 'Open',
          events: [
            {
              at: '6 Nov 10:05',
              dir: 'shown',
              kind: 'Page',
              text: 'SIM-only plans, signed out',
              facts: [prices('50GB for £8 a month · 100GB for £10 a month', [{ name: '50GB', price: '£8 a month' }, { name: '100GB', price: '£10 a month' }])],
              evidence: {
                head: [['Page', 'sim-network.example/plans'], ['Shown', 'Fri 6 Nov 2026 10:05:30 · signed out']],
                body: ['SIM-only plans, 12 months', '50GB · £8 a month', '100GB · £10 a month', '[ Choose ]'],
                proof: ['Clean copy of screenshot sha256:61dd… and page sha256:0c4a…'],
              },
              row: { kind: 'page', channel: 'web', wall: ['open'], at: '2026-11-06T10:05:30Z', visit: 'view · 6 Nov 10:05', ref: 'https://sim-network.example/plans', digest: 'sha256:7a52…', raw: { screenshot: 'sha256:61dd…', html: 'sha256:0c4a…' } },
            },
          ],
        },
      ],
    },
    {
      domain: 'reading-app.example',
      kind: 'Reading app',
      covered: true,
      personas: ['Trial user · UK'],
      walls: ['Sign-up', 'Cancel'],
      kinds: [
        { label: 'Emails', kind: 'Email' },
        { label: 'Pages', kind: 'Page' },
      ],
      views: [
        {
          persona: 'Trial user · UK',
          wall: 'Sign-up',
          events: [
            {
              at: '2 Nov 10:14',
              dir: 'shown',
              kind: 'Page',
              text: 'Start your 7-day free trial',
              facts: [prices('7 days free, then £79.99 a year', [{ name: 'Trial, 7 days', price: '£0' }, { name: 'Then yearly', price: '£79.99' }])],
              evidence: {
                head: [['Page', 'reading-app.example/checkout'], ['Shown', 'Mon 2 Nov 2026 10:14:02 · signed in']],
                body: ['Start your 7-day free trial', 'Today: full access', 'Day 5: we’ll email you a reminder', 'Day 7: £79.99 for the year, unless you cancel', '[ Start free trial ]'],
                proof: ['Clean copy of screenshot sha256:0b55… and page sha256:e8f2…'],
              },
              row: { kind: 'page', channel: 'web', wall: ['sign_up', 'purchase'], at: '2026-11-02T10:14:02Z', visit: 'sign_up · 2 Nov 10:13', ref: 'https://reading-app.example/checkout', digest: 'sha256:3f90…', raw: { screenshot: 'sha256:0b55…', html: 'sha256:e8f2…' } },
            },
            { at: '2 Nov 10:14', dir: 'act', kind: 'Act', text: 'Started the free trial' },
            {
              at: '2 Nov 10:15',
              dir: 'shown',
              kind: 'Email',
              text: 'Welcome to your trial',
              facts: [flow('Welcome', { flow: 'welcome', purpose: 'trial started' }), sentBy('Braze')],
              evidence: {
                head: [['From', 'Reading App <hello@reading-app.example>'], ['To', 'our address, removed'], ['Date', 'Mon, 2 Nov 2026 10:14:59 +0000'], ['Subject', 'Welcome to your trial']],
                body: ['Your 7 days start now.', 'Here are 5 titles to begin with.', '[ Start reading ]'],
                proof: ['dkim=pass d=reading-app.example spf=pass dmarc=pass', 'Received 10:15:02 · clean copy of sha256:3c8e…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['sign_up', 'purchase'], at: '2026-11-02T10:15:02Z', t_firm: '2026-11-02T10:14:59Z', visit: 'sign_up · 2 Nov 10:13', after: 'sign_up · 10:14:21', subject: 'Welcome to your trial', auth: 'dkim=pass d=reading-app.example spf=pass dmarc=pass', digest: 'sha256:c7d1…', raw: { mime: 'sha256:3c8e…' } },
            },
            {
              at: '8 Nov 18:02',
              dir: 'shown',
              kind: 'Email',
              text: 'Last chance: 40% off your first year',
              facts: [flow('Trial offer · 40% off the first year', { flow: 'trial_offer', purpose: '40% off the first year' }), sentBy('Braze')],
              evidence: {
                head: [['From', 'Reading App <hello@reading-app.example>'], ['To', 'our address, removed'], ['Date', 'Sun, 8 Nov 2026 18:02:37 +0000'], ['Subject', 'Last chance: 40% off your first year']],
                body: ['Your trial ends soon.', 'Keep reading with 40% off your first year.', '[ Claim 40% off ]'],
                proof: ['dkim=pass d=reading-app.example spf=pass dmarc=pass', 'Received 18:02:40 · clean copy of sha256:e471…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['sign_up', 'purchase'], at: '2026-11-08T18:02:40Z', t_firm: '2026-11-08T18:02:37Z', visit: 'sign_up · 2 Nov 10:13', after: 'sign_up · 2 Nov 10:14:21', subject: 'Last chance: 40% off your first year', auth: 'dkim=pass d=reading-app.example spf=pass dmarc=pass', digest: 'sha256:18b6…', raw: { mime: 'sha256:e471…' } },
            },
          ],
        },
        {
          persona: 'Trial user · UK',
          wall: 'Cancel',
          events: [
            { at: '9 Nov 09:00', dir: 'act', kind: 'Act', text: 'Cancelled in account settings' },
            {
              at: '9 Nov 09:01',
              dir: 'shown',
              kind: 'Email',
              text: 'Your subscription is cancelled',
              facts: [flow('Cancel confirmation', { flow: 'cancel_confirmation', purpose: 'access ends 9 Nov' }), sentBy('Braze')],
              evidence: {
                head: [['From', 'Reading App <hello@reading-app.example>'], ['To', 'our address, removed'], ['Date', 'Mon, 9 Nov 2026 09:01:08 +0000'], ['Subject', 'Your subscription is cancelled']],
                body: ['You won’t be charged.', 'Your access ends today at 10:14.', '[ Changed your mind? ]'],
                proof: ['dkim=pass d=reading-app.example spf=pass dmarc=pass', 'Received 09:01:11 · clean copy of sha256:94fa…'],
              },
              row: { kind: 'email', channel: 'email', wall: ['login', 'cancel'], at: '2026-11-09T09:01:11Z', t_firm: '2026-11-09T09:01:08Z', visit: 'cancel · 9 Nov 08:59', after: 'cancel · 09:00:04', subject: 'Your subscription is cancelled', auth: 'dkim=pass d=reading-app.example spf=pass dmarc=pass', digest: 'sha256:5e2c…', raw: { mime: 'sha256:94fa…' } },
            },
          ],
        },
      ],
    },
    {
      domain: 'skincare-shop.example',
      kind: 'Online shop',
      covered: false,
      personas: ['New customer · UK', 'New customer · US'],
      walls: [],
      kinds: [],
      views: [],
      index: {
        heading: 'Watching skincare-shop.example',
        steps: ['Signed up', 'Added a product to the basket', 'Left at checkout'],
        first: [
          {
            at: 'Today 09:05',
            dir: 'shown',
            kind: 'Page',
            text: 'Home page',
            facts: [{ kind: 'signals', text: 'Klaviyo, Shop Pay, Recharge', value: { tags: ['klaviyo.js', 'shop_pay', 'recharge'] }, reader: 'rules/tags@3' }],
            evidence: {
              head: [['Page', 'skincare-shop.example'], ['Shown', 'Today 09:05:01 · exit country UK']],
              body: ['Clean skincare, made in small batches', '[ Shop best sellers ]', 'Pop-up: 10% off your first order. [ Your email ]'],
              proof: ['Clean copy of screenshot sha256:6f0d… and page sha256:a1b7…'],
            },
            row: { kind: 'page', channel: 'web', wall: ['open'], at: 'today 09:05:01', visit: 'sign_up · today 09:05', ref: 'https://skincare-shop.example/', digest: 'sha256:2b9e…', raw: { screenshot: 'sha256:6f0d…', html: 'sha256:a1b7…' } },
          },
          { at: 'Today 09:05', dir: 'act', kind: 'Act', text: 'Signed up in the pop-up' },
          {
            at: 'Today 09:09',
            dir: 'shown',
            kind: 'Email',
            text: 'Welcome! Here’s 10% off',
            facts: [flow('Welcome · 10% off, code HELLO10', { flow: 'welcome', purpose: '10% off, code HELLO10' }), sentBy('Klaviyo')],
            evidence: {
              head: [['From', 'Skincare Shop <hello@skincare-shop.example>'], ['To', 'our address, removed'], ['Date', 'Today 09:09:11 +0000'], ['Subject', 'Welcome! Here’s 10% off']],
              body: ['Thanks for joining us.', 'Here’s 10% off your first order: HELLO10', '[ Shop now ]'],
              proof: ['dkim=pass d=skincare-shop.example spf=pass dmarc=pass', 'Received 09:09:14 · clean copy of sha256:d2a4…'],
            },
            row: { kind: 'email', channel: 'email', wall: ['sign_up'], at: 'today 09:09:14', t_firm: 'today 09:09:11', visit: 'sign_up · today 09:05', after: 'sign_up · 09:05:02', subject: 'Welcome! Here’s 10% off', fields: { code: 'HELLO10' }, auth: 'dkim=pass d=skincare-shop.example spf=pass dmarc=pass', digest: 'sha256:90c3…', raw: { mime: 'sha256:d2a4…' } },
          },
        ],
        done: 'In the index from today',
      },
    },
  ],
  ready: (p: string) => `${p}: inbox, number and browser ready`,
  /* Insights: one question across a group of companies. The run finds them, looks each up in the index and writes the
     report: the answer, 3 numbers, and a row for each company with the evidence behind it. A company not in the index
     gets a Watch button (in its row, and all at once under the report); watching signs up as the persona asked
     as, and what arrives joins the report. The first question runs by itself the first time Insights is opened. */
  insight: {
    waiting: 'Companies appear here as they are found.',
    inIndex: 'In the index',
    watch: 'Watch',
    watching: 'Watching',
    notIn: 'Not in the index yet',
    missing: (n: number, [one, many]: [string, string]) => (n === 1 ? `1 ${one} isn’t in the index yet.` : `${n} ${many} aren’t in the index yet.`),
    watchAll: (n: number) => (n === 1 ? 'Watch it' : `Watch all ${n}`),
    allWatched: (persona: string) => `Watching as ${persona}. What they send joins this report as it arrives.`,
    collecting: (d: number, n: number) => `Collecting · ${d} of ${n}`,
    done: (n: number, c: number) => `${n} sources · ${c} from the index`,
  },
  /* The 5 questions (9 Nov): chosen from 25 written by 5 agents on the behind-the-wall research, each broken by an
     adversary who tried to answer it from public sources, then rated by James's test: relatable, asked by more of the 12
     segments, asked often, clear (docs/knowledge/insight-questions-2026-11-09.md in the workspace). Each walks a different
     wall: a checkout left, signing in, cancelling, opting out, signing up. Every company and figure is an example. */
  insights: [
    {
      label: 'Walk-away deals',
      kind: 'Broadband',
      question: 'Which UK broadband firms email a cheaper deal if you walk away?',
      persona: 'New customer · UK',
      plan: ['Find 8 UK broadband firms', 'Look each one up in the index', 'Write the report'],
      cols: ['Firm', 'Emailed after walking away', 'On their website'],
      sources: [
        { domain: 'fibre-broadband.example', cells: ['£4 off a month, 2 days later', '£29, no offer'], evidence: 'Email “Still deciding? £25 a month, this week only”, 2 days after checkout was left. Website the same day: £29.' },
        { domain: 'city-fibre.example', cells: ['£50 bill credit, next day', 'No credit shown'], evidence: 'Email “£50 off your first bill if you finish today”, 19 hours after checkout was left.' },
        { domain: 'gigabit-fibre.example', cells: ['Free installation, same day', '£60 installation'], evidence: 'Text and email the same evening: “We’ll waive the £60 set-up fee.” The website still charged it.' },
        { domain: 'home-broadband.example', cells: ['£3 off a month, 3 days later', '£25, no offer'], evidence: 'Email “A better price, just for you: £22 a month”, 3 days after checkout was left.' },
        { domain: 'full-fibre.example', cells: ['Reminder only', '£27'], evidence: '2 emails in 7 days, both reminders of the basket at £27. No lower price.' },
        { domain: 'value-broadband.example', cells: ['Nothing in 7 days', '£21'], evidence: 'No email or text in 7 days after checkout was left.' },
        { domain: 'rural-fibre.example' },
        { domain: 'tv-broadband.example' },
      ],
      noun: ['firm', 'firms'],
      watched: 'Watching. Its emails and texts arrive here.',
      answer: '4 of the 6 firms in the index emailed a deal that isn’t on their website, within 3 days.',
      stats: [
        { v: '4 of 6', l: 'emailed a better deal' },
        { v: '£4 a month', l: 'the biggest cut' },
        { v: '0 of 4', l: 'show it on their website' },
      ],
    },
    {
      label: 'Signed-in prices',
      kind: 'Retailers',
      question: 'Which big retailers charge signed-in shoppers more than guests?',
      persona: 'Shopper · US',
      plan: ['Find 8 big US retailers', 'Look each one up in the index', 'Write the report'],
      cols: ['Retailer', 'Higher signed in, of 20 items', 'Biggest gap'],
      sources: [
        { domain: 'grocery-delivery.example', cells: ['5 of 20', 'Cereal $5.49 vs $4.99'], evidence: 'Same 20 items, same ZIP code, same minute, 4 Nov. Signed in, 5 items cost more. Both baskets kept as screenshots.' },
        { domain: 'big-box-store.example', cells: ['3 of 20', 'Toothpaste $3.96 vs $3.74'], evidence: 'Same 20 items, same ZIP code, same minute, 4 Nov. Signed in, 3 items cost more.' },
        { domain: 'online-marketplace.example', cells: ['2 of 20', 'Batteries $12.99 vs $11.49'], evidence: 'Same 20 items, same minute, 5 Nov. Both prices sold by the retailer itself.' },
        { domain: 'electronics-store.example', cells: ['1 of 20', 'TV $449 vs $429'], evidence: 'Same TV, same store, same minute, 5 Nov: $449 signed in, $429 as a guest.' },
        { domain: 'pharmacy-chain.example', cells: ['0 of 20', 'Members cheaper on 6'], evidence: 'Signed-in prices matched guest prices. 6 items showed a member price below both.' },
        { domain: 'home-improvement.example', cells: ['0 of 20', 'Same prices'], evidence: 'All 20 items priced the same signed in and as a guest, 4 Nov.' },
        { domain: 'warehouse-club.example' },
        { domain: 'discount-store.example' },
      ],
      noun: ['retailer', 'retailers'],
      watched: 'Watching. Its prices arrive here.',
      answer: '4 of the 6 retailers in the index showed signed-in shoppers a higher price on at least 1 item.',
      stats: [
        { v: '4 of 6', l: 'charged more signed in' },
        { v: '11 of 120', l: 'items cost more signed in' },
        { v: '10%', l: 'the biggest gap on 1 item' },
      ],
    },
    {
      label: 'Offers to stay',
      kind: 'Subscriptions',
      question: 'Which meal kits offer more to stay than to join?',
      persona: 'Subscriber · UK',
      plan: ['Find 7 UK meal kits', 'Look each one up in the index', 'Write the report'],
      cols: ['Meal kit', 'Offer to join', 'Offer to stay'],
      sources: [
        { domain: 'family-meals.example', cells: ['50% off the first box', '65% off the next box'], evidence: 'Cancel screen 2 of 3, 5 Nov: “Stay and get 65% off your next box.” New customers were offered 50% the same day.' },
        { domain: 'quick-meals.example', cells: ['55% off the first box', '60% off the next 3 boxes'], evidence: 'Cancel screen, 6 Nov: “60% off your next 3 boxes if you stay.”' },
        { domain: 'recipe-box.example', cells: ['60% off the first box', '50% off the next 2 boxes'], evidence: 'Cancel screen 2 of 3, 6 Nov: “Stay for 50% off your next 2 boxes.”' },
        { domain: 'healthy-kits.example', cells: ['40% off 3 boxes', 'Pause for 4 weeks'], evidence: 'Cancel screen, 4 Nov: an offer to pause for 4 weeks, no discount.' },
        { domain: 'vegan-box.example', cells: ['30% off the first box', 'No offer'], evidence: 'Cancelled in 2 clicks on 5 Nov. No offer to stay, and no email after.' },
        { domain: 'gourmet-box.example' },
        { domain: 'budget-meals.example' },
      ],
      noun: ['meal kit', 'meal kits'],
      watched: 'Watching. Its offers arrive here.',
      answer: '2 of the 5 meal kits in the index offer more to stay than to join.',
      stats: [
        { v: '3 of 5', l: 'offer a discount to stay' },
        { v: '65%', l: 'the biggest offer to stay' },
        { v: '2 of 3', l: 'beat their own welcome offer' },
      ],
    },
    {
      label: 'Texts after stop',
      kind: 'Retail texts',
      question: 'Which US retailers keep texting after you ask them to stop?',
      persona: 'Subscriber · US',
      plan: ['Find 8 US retailers with text clubs', 'Look each one up in the index', 'Write the report'],
      cols: ['Retailer', 'After “please stop texting me”', 'After STOP'],
      sources: [
        { domain: 'home-goods.example', cells: ['6 more texts in 30 days', 'Stopped'], evidence: 'Replied “please stop texting me” on 2 Oct. 6 offers followed, the last on 30 Oct. STOP from a second number: a confirmation, then nothing.' },
        { domain: 'beauty-store.example', cells: ['4 more texts in 30 days', 'Stopped'], evidence: 'Replied “please stop texting me” on 2 Oct. Texts followed on 5, 9, 16 and 28 Oct.' },
        { domain: 'jewellery-brand.example', cells: ['2 more texts in 30 days', '1 more text, day 3'], evidence: 'After STOP: “You’re unsubscribed”, then a sale text 3 days later.' },
        { domain: 'apparel-chain.example', cells: ['1 reply, an offer', 'Stopped'], evidence: 'Replied “please stop texting me”. The answer: “Before you go, here’s 20% off.” Then nothing.' },
        { domain: 'shoe-retailer.example', cells: ['Stopped', 'Stopped'], evidence: 'Both requests confirmed within a minute. No texts after.' },
        { domain: 'sporting-goods.example', cells: ['Stopped', 'Stopped'], evidence: 'Both requests confirmed within a minute. No texts after.' },
        { domain: 'pet-supplies.example' },
        { domain: 'toy-store.example' },
      ],
      noun: ['retailer', 'retailers'],
      watched: 'Watching. Its texts arrive here.',
      answer: '4 of the 6 retailers in the index kept texting after a customer asked them to stop.',
      stats: [
        { v: '4 of 6', l: 'kept texting after a plain request' },
        { v: '6', l: 'the most texts after being asked' },
        { v: '1 of 6', l: 'texted again after STOP' },
      ],
    },
    {
      label: 'Pop-up codes',
      kind: 'Online shops',
      question: 'Which UK haircare shops don’t send the code their pop-up promises?',
      persona: 'New customer · UK',
      plan: ['Find 8 UK haircare shops with a sign-up pop-up', 'Look each one up in the index', 'Write the report'],
      cols: ['Shop', 'The pop-up promised', 'In the next 48 hours'],
      sources: [
        { domain: 'hair-oil.example', cells: ['15% off', 'Nothing'], evidence: 'Pop-up: “15% off your first order”. No email in 48 hours, spam folder included.' },
        { domain: 'hair-tools.example', cells: ['10% off', 'Nothing'], evidence: 'Pop-up: “10% off when you sign up”. No email in 48 hours, spam folder included.' },
        { domain: 'salon-shampoo.example', cells: ['A free gift', 'A code that was refused'], evidence: 'Code arrived in 6 minutes. At checkout: “This code is not valid.” Stopped before payment.' },
        { domain: 'natural-hair.example', cells: ['20% off', 'In spam, code worked'], evidence: 'The email landed in spam 2 minutes after sign-up. The code worked at checkout.' },
        { domain: 'curl-care.example', cells: ['10% off', 'In 3 minutes, code worked'], evidence: 'Email “Here’s your 10% off”, 3 minutes after sign-up. Code accepted; stopped before payment.' },
        { domain: 'scalp-serum.example', cells: ['10% off', 'Next day, code worked'], evidence: 'The code came 21 hours after sign-up and worked at checkout.' },
        { domain: 'hair-colour.example' },
        { domain: 'kids-hair.example' },
      ],
      noun: ['shop', 'shops'],
      watched: 'Watching. Its emails arrive here.',
      answer: '2 of the 6 shops in the index sent nothing in 48 hours, and 1 sent a code that didn’t work.',
      stats: [
        { v: '2 of 6', l: 'sent nothing' },
        { v: '1 of 6', l: 'sent a code that was refused' },
        { v: '1 of 6', l: 'landed in spam' },
      ],
    },
  ],
}

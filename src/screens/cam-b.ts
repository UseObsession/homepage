import type { Shot } from './cam'

/* More shot lists for the camera (src/screens/cam.ts has the rules and the first 5): the screens the reader pages show
   (inbox, adcheck, listings, partners, campaign, checkout, claycols, brief, battlecard, pilot). Merged into SHOTS in cam.ts. */
export const SHOTS_B: Record<string, Shot[]> = {
  /* Rivals inbox. The moment: Rival B's new text opens on top of the list as the camera arrives, and its tags read in,
     Free gift and Over £40. The finding, held: the open message beside it, Thursday's 20% off now a free gift. */
  inbox: [
    { at: 0 },
    {
      at: 1.3,
      move: 0.7,
      on: '.ibx-new .ibx-m',
      note: { text: 'Rival B texts a free gift over £40', side: 'below', at: '.ibx-new .ibx-tags', align: 'end', cue: 2.45, dock: 'bottom', phone: { align: 'start' } },
    },
    {
      at: 5.9,
      move: 0.6,
      on: '.ibx-pv',
      lit: 0,
      note: { text: 'Thursday’s 20% off became a free gift', side: 'left', at: '.ibx-notes', still: true, dock: 'top', phone: { align: 'end' } },
    },
  ],
  /* Ad landing check. The moment: Ad 4's stock check fails and its row lights, at $410 a day. The next move, held: its
     card with the sold out page, paused with AM's OK (the toast says 36 min after the flag). */
  adcheck: [
    { at: 0 },
    {
      at: 1.5,
      move: 0.7,
      on: '.r-hot > .a, .r-hot > .k, .r-hot > .d',
      note: { text: '$410 a day on a sold out lamp', side: 'below', at: '.adc-fail', align: 'end', cue: 1.95, dock: 'bottom', phone: { align: 'start' } },
    },
    {
      at: 5.4,
      move: 0.6,
      on: '.adc-pan',
      lit: 0,
      note: { text: 'Paused by AM, 36 min after the flag', side: 'left', at: '.adc-f2', still: true, dock: 'top', phone: { align: 'end' } },
    },
  ],
  /* Presence. The moment and the proof: a code lands at the listed number and Review site B is claimed, closed to open,
     9 to 5 to 8 to 6. The finding, held: AI answers naming the business, 1 of 12 to 7 of 12 over 6 Mondays. */
  listings: [
    { at: 0 },
    {
      at: 1.1,
      move: 0.7,
      on: '.ls-claim',
      lit: 0,
      note: { text: 'Review site B said closed. Now open.', side: 'below', align: 'end', to: '.ls-claim', cue: 2.45, dock: 'bottom' },
    },
    {
      at: 5.9,
      move: 0.6,
      on: '.ls-kpi',
      lit: 0,
      note: { text: 'AI names you in 7 of 12 answers', side: 'left', at: '.ls-big', still: true, dock: 'top', phone: { align: 'end' } },
    },
  ],
  /* Partner checks. The moment and the proof: Deals site's card slides in with what a customer saw, SUMMER20 rejected
     in the basket and last season's offer. The next move, held: the note in JO's thread, sent with your OK. */
  partners: [
    { at: 0 },
    {
      at: 2.2,
      move: 0.7,
      on: '.pt-card',
      lit: 0,
      note: { text: 'Deals site’s SUMMER20 is rejected in the basket', side: 'left', at: '.pt-shot', cue: 2.7, dock: 'top', phone: { align: 'end' } },
    },
    {
      at: 6.15,
      move: 0.6,
      on: '.pt-nt',
      note: { text: 'Swap to DEALS15 sent with your OK', side: 'left', at: '.pt-q', still: true, dock: 'bottom', phone: { align: 'end' } },
    },
  ],
  /* Autumn launch. The moment: the text to US numbers and the LAUNCH20 code fail as the run sweeps past them. The
     finding, held: both fixes approved by AM and tested again clean by 08:42. */
  campaign: [
    { at: 0 },
    {
      at: 1,
      move: 0.7,
      on: '.cg-r2, .cg-r3',
      note: { text: 'US texts undelivered, LAUNCH20 rejected for new customers', side: 'below', pos: 0.3, cue: 1.6, dock: 'bottom' },
    },
    {
      at: 5.05,
      move: 0.6,
      on: '.cg-fx',
      lit: 0,
      note: { text: 'Both fixed, retested clean by 08:42', side: 'left', at: '.cg-pf', still: true, dock: 'top', phone: { align: 'end' } },
    },
  ],
  /* AI checkout test. The moment: Assistant A's log, the shirt added and then a basket of 0 items, as the camera
     arrives. The finding and the next move, held: sizes hidden from agents, the fix approved, the retest booked. */
  checkout: [
    { at: 0 },
    {
      at: 2.4,
      move: 0.7,
      on: '.ck-f',
      lit: 0,
      note: { text: 'Added a linen shirt. Basket: 0 items.', side: 'below', align: 'end', to: '.ck-f', cue: 2.75, dock: 'top' },
    },
    {
      at: 6.2,
      move: 0.6,
      on: '.ck-fd, .ck-fx',
      note: { text: 'Sizes hidden from agents. Fix approved, retest 14:00.', side: 'below', align: 'end', to: '.ck-f', still: true, dock: 'top' },
    },
  ],
  /* Prospect intelligence, in Clay. The proof: Tidewren Swim's row reports back, opted in and 0 texts in 48 h. The
     finding, held: the whole table back in Clay, gaps at 3 of the 4 brands. */
  claycols: [
    { at: 0 },
    {
      at: 1.2,
      move: 0.7,
      on: '.ccl-tb > .ccl-row:nth-child(3)',
      note: { text: 'Tidewren Swim: 0 texts in 48 h', side: 'below', at: '.ccl-tb > .ccl-row:nth-child(3) .ccl-gp', cue: 1.9, dock: 'top' },
    },
    {
      at: 5.35,
      move: 0.6,
      on: '.ccl-tb',
      lit: 0,
      note: { text: 'Back in Clay: 3 of 4 have gaps', side: 'below', pos: 0.15, align: 'start', still: true, dock: 'bottom' },
    },
  ],
  /* Account brief. The proof: 7 days as their trial customer, the first finding landing as the camera arrives. The next
     move, held: Add to CRM (the note follows the click), the brief on the account before Friday's call. */
  brief: [
    { at: 0 },
    {
      at: 0.9,
      move: 0.6,
      on: '.br-fd',
      lit: 0,
      note: { text: 'Larchwise’s trial went silent after day 2', side: 'below', pos: 0.2, dock: 'top' },
    },
    {
      at: 4.6,
      move: 0.5,
      on: '.br-tp',
      lit: 0,
      click: '.br-add .s1',
      tap: 5.4,
      note: { text: 'In the CRM, signed, before Friday’s 10:00 call', side: 'above', at: '.br-add', align: 'end', to: '.br-tp', cue: 5.75, still: true, dock: 'bottom' },
    },
  ],
  /* Battlecard. The proof: the trial end offers land as the clock reaches day 14, Rival A's 20% off on day 13. The next
     move, held: the talk track drafted from those cells, pushed to the CRM for 14 reps. */
  battlecard: [
    { at: 0 },
    {
      at: 2.5,
      move: 0.7,
      on: '.bc-r.tall',
      note: { text: 'Rival A offers 20% off on day 13', side: 'below', at: '.bc-r.tall .bc-c:nth-child(2)', cue: 2.9, dock: 'top' },
    },
    {
      at: 6.35,
      move: 0.6,
      on: '.bc-tt',
      lit: 0,
      note: { text: 'Pushed to the CRM for all 14 reps', side: 'above', pos: 0.2, still: true, dock: 'top' },
    },
  ],
  /* Pilot. The proof: the median reply steps from 9h 40m to 1h 52m on day 14 and 38m on day 28. The finding, held: the
     signed record, shared with Quillmere's CFO, who can verify every answer. */
  pilot: [
    { at: 0 },
    {
      at: 1.2,
      move: 0.7,
      on: '.pl-r:nth-child(3)',
      note: { text: 'Median reply: 9h 40m down to 38m', side: 'below', at: '.pl-r:nth-child(3) .pl-a', cue: 2.5, dock: 'top' },
    },
    {
      at: 5.95,
      move: 0.6,
      on: '.pl-f',
      note: { text: 'Quillmere’s CFO can verify every answer', side: 'above', at: '.pl-share', align: 'end', to: '.pl-card', still: true, dock: 'bottom', phone: { align: 'start' } },
    },
  ],
}

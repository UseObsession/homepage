import type { Shot } from './cam'

/* More shot lists for the camera (src/screens/cam.ts has the rules and the first 5): the screens the reader pages show
   (acctwatch, winback, agencytask, board, approve, report, run, leads, ship, dev). Merged into SHOTS in cam.ts. */
export const SHOTS_C: Record<string, Shot[]> = {
  /* Account watch. The moment: Snack brand's usage drops 38% and 3 urgent tickets land, so it flips to at risk (its save
     plan opens at 2.98 s, during the note, so no pointer there). The next move, held: the plan docks as the camera turns
     to it, and AM's click on Approve signs it; the note covers the lock line's words. The table is full width when the
     camera measures (it narrows at 3.15 s), so the row's light spans it. */
  acctwatch: [
    { at: 0 },
    {
      at: 0.45,
      move: 0.5,
      on: '.r-hot',
      note: { text: 'Usage down 38%, 3 urgent tickets', side: 'below', at: '.r-hot .acw-lit', align: 'center', cue: 0.8, dock: 'bottom', reach: 60, phone: { align: 'start' } },
    },
    {
      at: 4.15,
      move: 0.5,
      on: '.acw-pan',
      lit: 0,
      click: '.acw-ok',
      tap: 4.8,
      note: { text: 'Save plan and QBR deck, approved by AM', side: 'left', pos: 0.95, cover: '.acw-foot span', cue: 5.15, still: true, dock: 'top', gap: '.acw-id' },
    },
  ],
  /* Win back. The proof: Tarnfell's 9 months on Rival A draw out and its 3 dated breaks pop in with their captures; the
     note covers the lock footnote. The next move, held: the reopen note citing all 3 is drafted and Tarnfell needs you
     as the camera arrives, sent only by you. */
  winback: [
    { at: 0 },
    {
      at: 1.1,
      move: 0.7,
      on: '.wb-tl',
      lit: 0,
      note: { text: 'Competitor A broke 3 times in 9 months', side: 'below', cover: '.wb-lock', cue: 1.7, dock: 'bottom' },
    },
    {
      at: 5.15,
      move: 0.6,
      on: '.wb-note, .wb-toast',
      note: { text: 'Reopen note cites all 3, yours to send', side: 'left', at: '.wb-toast', cover: '.wb-lock', cue: 5.5, still: true, dock: 'top', gap: '.wb-id' },
    },
  ],
  /* New watch, typed. The moment: the task typed in 1 line, then the agent's 2 questions, answered. The next move, held:
     the plan builds with its kit and AM's click on Approve plan starts the agents; the note sits where the options AM
     passed over were. */
  agencytask: [
    { at: 0 },
    {
      at: 1,
      move: 0.7,
      on: '.cp-field, .cp-qs',
      note: { text: '1 typed line, then just 2 questions', side: 'below', at: '.q2 .cp-ask', align: 'start', cue: 1.5, dock: 'top', gap: '.cp-id' },
    },
    {
      at: 4.85,
      move: 0.5,
      on: '.cp-plan',
      lit: 0,
      click: '.cp-go',
      tap: 5.48,
      note: { text: 'AM’s OK starts 60 agents,\nnothing bought', side: 'above', pos: 0.7, cover: '.cp-op:not(.pk)', cue: 5.8, still: true, dock: 'top', gap: '.cp-id' },
    },
  ],
  /* Watches board. The proof: Outdoor gear's link check counts every link to 214 and lands without asking you. The
     finding, held: Homeware opens on top needing you, Ad 4 sending $410 a day to a sold out lamp; the note covers the
     Latest heading. The camera leaves Outdoor gear as Homeware's row opens (4.4 s) and pushes it down. */
  board: [
    { at: 0 },
    {
      at: 1.1,
      move: 0.7,
      on: '.r-gear',
      note: { text: 'Opens all 214 links, not a sample', side: 'below', at: '.r-gear .p', align: 'start', cue: 1.55, dock: 'bottom', reach: 90 },
    },
    {
      at: 5,
      move: 0.6,
      on: '.r-skin',
      lit: 0,
      note: { text: '$410/day to a sold out lamp', side: 'above', at: '.r-skin .l', len: 8, align: 'end', to: '.bd-tb', cue: 5.35, still: true, dock: 'top', gap: '.bd-id', phone: { align: 'start' } },
    },
  ],
  /* Needs you. The finding: the 10% code promised at sign up, and the inbox still empty 48 hours on. The proof, held:
     the fix live on AM's OK (Approve is pressed at 1.8 s, too soon to frame it, so no pointer), checked again on
     Thursday, the signed approval in Records; the note sits in the queue's empty foot. */
  approve: [
    { at: 0 },
    {
      at: 0.85,
      move: 0.6,
      on: '.apx-find, .apx-ev',
      note: { text: '10% code promised,\n0 emails in 48 hours', side: 'left', at: '.apx-ev', cue: 1.2, dock: 'top', gap: '.apx-id' },
    },
    {
      at: 4.6,
      move: 0.55,
      on: '.apx-fix, .apx-toast',
      note: { text: 'Live on AM’s OK,\nchecked again Thu 09:00', side: 'left', at: '.apx-fix-f', cue: 4.95, still: true, dock: 'top', gap: '.apx-id' },
    },
  ],
  /* Email and SMS report. The finding: Candles' month is 12 messages to its rivals' 47 to 52; the note sits on the empty
     track beside its short bar. The next move, held: the report sent under your brand, signed (Send is pressed at 3.8 s,
     during the first note, so no pointer); the note covers the lock line. */
  report: [
    { at: 0 },
    {
      at: 0.9,
      move: 0.6,
      on: '.apr-chart',
      note: { text: 'Candles sent 12 messages. Competitor A sent 52.', side: 'right', from: '.apr-row.me .apr-bar', cue: 1.25, dock: 'top' },
    },
    {
      at: 4.65,
      move: 0.55,
      on: '.apr-send',
      phone: '.apr-sign, .apr-send',
      note: { text: 'Sent to Candles, signed, in your brand', side: 'left', cover: '.apr-note', cue: 5, still: true, dock: 'top' },
    },
  ],
  /* Mystery shopper record. The finding: the run log, every step dated, down to 0 basket emails in 48 hours; the note
     covers the page's title. The proof, held: receipt 4 of 9 verified, signature valid and chain intact as the camera
     arrives (the row and Verify are clicked at 2.55 and 3.88 s, too close together for 2 notes and a pointer); the note
     sits right of the lock line. */
  run: [
    { at: 0 },
    {
      at: 1,
      move: 0.7,
      on: '.rn-log',
      lit: 0,
      note: { text: '0 basket emails in 48 hours', side: 'above', at: '.rn-r.r5', cover: '.rn-h h2, .rn-h .ax-meta', cue: 1.4, dock: 'top', gap: '.rn-idp' },
    },
    {
      at: 4.85,
      move: 0.6,
      on: '.rn-rc',
      lit: 0,
      note: { text: 'All 9 receipts check out, chain intact', side: 'below', at: '.rc-ok', len: 14, align: 'end', to: '.rn-rc', cue: 5.2, still: true, dock: 'top', gap: '.rn-idp', phone: { align: 'start' } },
    },
  ],
  /* Monday list. The finding: the strip fills as the results land, 13 of the 50 prospects with a proven gap and the 37
     without folded away. The next move, held: rank 1 open on its 3 dated captures and the drafted opener (clicked at
     4.4 s, during the first note, so no pointer), sent only by you; the note covers the Proof heading. */
  leads: [
    { at: 0 },
    {
      at: 1,
      move: 0.7,
      on: '.ld-foot',
      note: { text: '13 of 50 have a proven gap', side: 'above', at: '.ld-t', align: 'end', to: '.ld-list', cue: 1.95, dock: 'top', gap: '.ld-id', phone: { align: 'start' } },
    },
    {
      at: 5.4,
      move: 0.6,
      on: '.r1, .ld-pc',
      lit: 0,
      note: { text: '3 dated captures, opener drafted. You send it.', side: 'above', at: '.r1 .sd', len: 8, align: 'end', to: '.ld-list', cue: 5.75, still: true, dock: 'top', gap: '.ld-id', phone: { align: 'start' } },
    },
  ],
  /* Release v2.15. The moment, the proof and the next move in 1 beat: the camera arrives as LAUNCH20 is rejected and its
     checkout capture opens, then your click holds the 08:00 send (at 3.96 s, too soon after the rejection for a first
     note to hold 2 s). The note sits right of the lock line, its length off the capture: the rows under the capture
     are laid out higher when the camera measures, before it opens. */
  ship: [
    { at: 0 },
    {
      at: 2.6,
      move: 0.7,
      on: '.sh-fail .sh-r, .sh-dc',
      lit: 0,
      round: 9,
      click: '.sh-hold',
      tap: 3.96,
      note: { text: '08:00 email held. Fix drafted for your OK.', side: 'below', at: '.sh-hold', len: 67, align: 'end', to: '.sh-dc', cue: 4.35, still: true, dock: 'bottom', phone: { align: 'start' } },
    },
  ],
  /* Developers console. The moment: 3 POST /v1/watches calls stream in, each 201, and the newest opens on its verdict
     with a receipt_url; the note covers the masked key. The proof, held: the verdict lands on your webhook, 200 OK in
     38 ms; the note covers the key's last use and Roll key. */
  dev: [
    { at: 0 },
    {
      at: 0.95,
      move: 0.65,
      on: '.dv-log',
      lit: 0,
      note: { text: '3 API calls made 3 watches, each 201', side: 'above', pos: 0.4, cover: '.dv-kv', cue: 1.3, dock: 'top', gap: '.dv-test' },
    },
    {
      at: 4.7,
      move: 0.55,
      on: '.dv-wh',
      lit: 0,
      note: { text: 'Verdict on your\nwebhook in 38 ms', side: 'above', at: '.dv-wh-h', cover: '.dv-used, .dv-key .ax-btn', cue: 5.05, still: true, dock: 'top', phone: { align: 'end' } },
    },
  ],
}

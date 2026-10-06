/* The shot lists for the camera (components/camera.ts): Seun and James, 3 Oct, "pan and zoom in to every clicked target
   section ... nobody is going to be reading anything on that page"; Seun, 7 Oct, "be selective and intentional with
   what you are zooming, it tells a story", and "annotate the point the motion is bringing" (docs:
   _research/illus/CAMERA.md, its last section).
   - Keyed by screen name. The camera loads them with itself, so no page carries them, and the screens' markup stays
     exactly as drawn. Only a screen AppScreen is asked to film (camera: Home's hero tabs, ScreenTabs) and that has a
     list here is filmed; every other screen plays as it always has.
   - Times are seconds on the screen's own story clock (0 is the .play start, the clock its CSS story runs on).
     Selectors are inside the screen's window (.appx); a shot frames the union of what they match.
   - 1 to 3 beats a screen, each with a reason (the moment it happens, the proof, the finding or the next move), each
     held long enough to read its note; moves take .6 to .8 s. The camera leans in gently and never dives: the whole
     window stays in view, and the spotlight does the focusing. The last shot holds the screen's finding, still, with its
     note. A click shot is framed and still before the pointer sets off.
   - Every beat has 1 note: its point in 8 words or fewer, specific (the finding, the proof or the next move), never
     the section's name or a description of the UI. Each screen's text alternative (its aria-label) ends with its
     notes' points, in order, since the notes are hidden from assistive tech. */

/* A beat's note: a hairline from the lit region to a small label beside it, outside the camera's rig. */
export type Note = {
  /* The point. A line break sets 2 lines on a desktop; a phone's label is always 1 line. */
  text: string
  /* Where the label sits off what it points at ('below', 'above', 'left' or 'right'). */
  side: 'below' | 'above' | 'left' | 'right'
  /* What the line leaves from: the edge of these elements facing the label (by default the lit region's edge). */
  from?: string
  /* Where along that edge: level with the middle of `at`, or `pos` of the way along it (0 its start, .5 by default). */
  at?: string
  pos?: number
  /* A line with 1 elbow: it first runs `run` px out of `from` this way, then turns straight to the label. */
  exit?: 'below' | 'above' | 'left' | 'right'
  run?: number
  /* What the label stands `len` px off (18 by default): `from` by default. */
  box?: string
  len?: number
  /* How the label lines up along its side: its start a little before the line, its end a little after it, or its
     middle on it; or, with `to`, with that element's start, end or middle. */
  align?: 'start' | 'end' | 'center'
  to?: string
  /* Grows the label to cover this chrome whole (a label never leaves cut words peeking out from under it). */
  cover?: string
  /* When the line starts to draw: once the shot has settled, or at this story time, when its point lands later. */
  cue?: number
  /* A phone's label docks to the frame's top or bottom edge, with a short straight line to what it points at: within
     `reach` px (40), or else a short stub pointing the way. */
  dock?: 'top' | 'bottom'
  reach?: number
  /* With the page's header between them, a stub instead, just before this element (the header's agent pill), clear of
     the words beside it. */
  gap?: string
  /* What a phone changes: its own words, dock, alignment or anchor. */
  phone?: Partial<Omit<Note, 'phone'>>
  /* The last note only: with reduced motion (no camera), it shows at rest, everywhere or on a desktop only. */
  still?: true | 'desk'
}

export type Shot = {
  /* When the camera has arrived: the move into the shot ends here, and the shot holds until the next move starts. */
  at: number
  /* What it frames. None: the whole window, the opening wide view (phones skip it and open close). */
  on?: string
  /* A different region for phones, where the frame is the window's main panel. */
  phone?: string
  /* A shot for 1 size only. */
  only?: 'phone' | 'desk'
  /* The move into it, in seconds (.8 by default). */
  move?: number
  /* The pointer clicks this element at `tap` seconds (it is framed and still by then). */
  click?: string
  tap?: number
  /* App px the lit region stands out from its elements (6 by default; 0 sits on a card's own edge), and its corners. */
  lit?: number
  round?: number
  /* The beat's point. */
  note?: Note
}

export const SHOTS: Record<string, Shot[]> = {
  /* Prospect intelligence. The moment: rows land 1 by 1 until 10 of the 12 prospects have a proven gap. The next move:
     Hobstone Coffee's pitch fills as the camera arrives and Copy link copies its signed proof. The finding, held: its
     10% welcome code lands in spam. */
  pack: [
    { at: 0 },
    {
      at: 1,
      move: 0.7,
      on: '.pk-list',
      lit: 0,
      note: { text: 'Customer of 12 prospects, 10 gaps proven', side: 'below', pos: 0.12, to: '.pk-list', cue: 1.85, dock: 'bottom' },
    },
    {
      at: 4.55,
      move: 0.7,
      on: '.pk-pane',
      lit: 0,
      click: '.pk-copy',
      tap: 5.3,
      note: { text: 'Proof link Hobstone can check for itself', side: 'below', pos: 0.8, align: 'end', to: '.pk-pane', cue: 5.5, dock: 'bottom', phone: { align: 'end' } },
    },
    {
      at: 8.2,
      move: 0.7,
      on: '.pk-f:first-child',
      phone: '.pk-finds',
      round: 8,
      note: {
        text: 'Hobstone’s 10% welcome code lands in spam',
        side: 'below',
        from: '.pk-f:first-child .pk-shot',
        exit: 'right',
        run: 19,
        box: '.pk-pane',
        align: 'end',
        to: '.pk-pane',
        cue: 8.55,
        still: true,
        phone: { from: '.pk-finds', pos: 0.88, dock: 'bottom', align: 'end' },
      },
    },
  ],
  /* Mystery shopper. The moment and the red line: at hollin, the welcome code is rejected at checkout and the shopper
     stops before payment. The proof, held: tested again on Day 3, it still fails for every subscriber. Paywren and
     Molenna play in the dimmed lanes. */
  shop: [
    { at: 0 },
    {
      at: 1.1,
      move: 0.7,
      on: '.ms-l2 .ms-mk, .ms-l2 .ms-fav, .ms-l2 .ms-lh b, .ms-l2 .ms-lh em, .ms-l2 .ms-d1, .ms-l2 .ms-stop, .ms-l2 .ms-sp',
      note: { text: 'SOFTER10 rejected at checkout, 09:15', side: 'right', at: '.ms-l2 .ms-sp', len: 20, cue: 1.6, dock: 'top', gap: '.ms-id' },
    },
    {
      at: 4.3,
      move: 0.7,
      on: '.ms-l2 .ms-lh, .ms-l2 .ms-c, .ms-l2 .ms-stop, .ms-l2 .ms-wl, .ms-l2 .ms-sp, .ms-l2 .ms-cap',
      note: {
        text: 'Still failing on Day 3, for every subscriber',
        side: 'below',
        pos: 0.655,
        len: 48,
        align: 'end',
        to: '.ms-l3 .ms-fd',
        cue: 4.8,
        still: 'desk',
        dock: 'top',
        gap: '.ms-id',
        phone: { align: 'end' },
      },
    },
  ],
  /* Competitor tracking. The catch: the rails draw their 30 days and today Tallyhop's Pro moves from $49 to $59. The
     proof: the change with its 2 dated screenshots. The next move, held: the comparison page redrafted, live only on
     your OK. */
  rivals: [
    { at: 0 },
    {
      at: 2.2,
      move: 0.7,
      on: '.rv-a',
      note: { text: 'Pro raised to $59, caught at 07:04 today', side: 'below', from: '.rv-hit .rv-dot', len: 24, cue: 2.6, dock: 'bottom', reach: 100 },
    },
    {
      at: 5.6,
      move: 0.7,
      on: '.rv-txt, .rv-caps',
      note: { text: 'US only. Screenshots taken 24 hours apart.', side: 'below', from: '.rv-c2', len: 26, cue: 5.95, dock: 'bottom', phone: { align: 'center' } },
    },
    {
      at: 8.85,
      move: 0.6,
      on: '.rv-find',
      lit: 0,
      note: {
        text: 'Comparison page redrafted. Live only on your OK.',
        side: 'below',
        at: '.rv-act',
        len: 18,
        align: 'end',
        to: '.rv-find',
        cue: 9.25,
        still: true,
        dock: 'bottom',
        phone: { align: 'end' },
      },
    },
  ],
  /* Lead leaks. The finding: the 3 channels race the 5 minute line until the form lands unassigned after 4 h 12 m and the
     phone rings out. The next move: 1 routing rule, and the owner's OK on it. The proof, held: the same day's retest. */
  inbound: [
    { at: 0 },
    {
      at: 1.3,
      move: 0.8,
      on: '.ib-chart',
      lit: 0,
      note: { text: 'Form waited 4h 12m. Phone rang out.', side: 'below', at: '.l-form .ib-rd', len: 16, align: 'end', to: '.ib-chart', cue: 3.55, dock: 'bottom', reach: 80, phone: { align: 'end' } },
    },
    {
      at: 6.2,
      move: 0.6,
      on: '.ib-fix',
      lit: 0,
      click: '.ib-ok',
      tap: 7.4,
      note: { text: '1 routing rule closes both leaks', side: 'below', at: '.ib-fh b', len: 16, cue: 6.55, dock: 'bottom' },
    },
    {
      at: 9.1,
      move: 0.7,
      on: '.ib-toast',
      lit: 0,
      note: { text: 'Same day: 4h 12m down to 3m 40s', side: 'left', len: 26, cue: 9.45, still: 'desk', phone: { text: '4h 12m to 3m 40s', len: 14 } },
    },
  ],
  /* Check your AI agents. The finding: the same question, 1 different answer, on chat. The proof and the next move,
     held: the transcript at 07:02 and the corrected answer, waiting for the owner's OK (never clicked for them). */
  botcheck: [
    { at: 0 },
    {
      at: 1.2,
      move: 0.7,
      on: '.bk-who, .bk-th, .bk-fail:nth-child(3)',
      note: {
        text: 'Chat quotes 30 days.\nYour policy says 14.',
        side: 'left',
        at: '.bk-fail:nth-child(3)',
        cover: '.ax-nav a:nth-child(4), .ax-nav a:nth-child(5)',
        cue: 1.55,
        dock: 'top',
        gap: '.bk-id',
      },
    },
    {
      at: 4.5,
      move: 0.7,
      on: '.bk-v1',
      lit: 0,
      note: { text: 'Caught at 07:02. Fix ready for your OK.', side: 'above', pos: 0.9, align: 'end', cover: '.bk-id', cue: 5.45, still: true, dock: 'top', gap: '.bk-id', phone: { align: 'end' } },
    },
  ],
}

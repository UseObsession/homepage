import type { EventName } from '../delivery'
import type { KitPage } from '../kits/types'
import type { PieceId } from '../prices'
import type { Faq, Final, Meta } from '../types'

/* The words of a piece's own page (21 Nov 2026: /email, /phone, /messaging, /browser, /sandbox, /personas), drawn by
   pages/Piece.tsx in this order: the hero (the claim, its 2 sentences and the code) > what an agent can do with the piece
   (#features) > for Personas, its events in the event log (#event-log) > how its events reach you (#delivery: its
   `events`, in the words every piece page shares, pieces/index.ts and content/delivery.ts) > its prices (#pricing, read
   from content/prices.ts by `id`, never written here) > how it works with the other pieces (#pieces) > questions
   (#questions) > the early access form (#join).
   `meta.path` is piecePaths[id]; `meta.answer` opens with the hero's sub, word for word. */

/* 1 thing the piece lets an agent do: a short claim and 1 line. */
export type PieceItem = { title: string; line: string }

/* 1 other piece, and what the 2 do together. Its name and address come from that piece's own page. */
export type PieceLink = { piece: PieceId; line: string }

/* 1 row of the event log card (Personas): when, what kind, what happened. `shot` marks a row kept with a screenshot;
   `wait` is the quiet row between events, while the persona waits for free; `note` is the small line beside a row. */
export type PieceLogRow = { at: string; kind: string; text: string; note?: string; shot?: boolean; wait?: boolean }

export type PiecePage = {
  id: PieceId
  /* The piece as the nav and the breadcrumb name it. */
  name: string
  meta: Meta
  /* The H1 leads with the phrase people search; the part after its first colon is the claim. `code` uses the API names
     every page shares (the rebuild brief), with no "Example" tag. */
  hero: { headline: string; sub: string; code: string }
  /* The piece at work (#at-work), in the same product window as the blueprint, team and use case pages
     (components/kit/KitScene): one agent's moment, its fleet, the finding and its note (_research/illus/AUDIT_23nov.md). */
  scene?: { heading: string; line: string } & KitPage['scene']
  can: { heading: string; line?: string; items: PieceItem[] }
  /* The events this piece sends, in the order the #delivery block lists them. */
  events: EventName[]
  /* The claim and line beside the price rows. The rows themselves are prices.ts filtered by `id`. */
  price: { heading: string; line: string }
  together: { heading: string; line?: string; items: PieceLink[] }
  /* Personas only: 1 persona's events in the event log, as a card of dated rows beside its claim. */
  log?: { heading: string; line: string; who: { name: string; lines: string[] }; rows: PieceLogRow[] }
  faq: Faq
  final: Final
}

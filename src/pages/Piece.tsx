import { PieceCan } from '../components/piece/PieceCan'
import { PieceDelivery } from '../components/piece/PieceDelivery'
import { PieceHero } from '../components/piece/PieceHero'
import { PieceLog } from '../components/piece/PieceLog'
import { PiecePrices } from '../components/piece/PiecePrices'
import { PieceTogether } from '../components/piece/PieceTogether'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { kits } from '../content/kits'
import { pieceAt, pieces, pieceUi as ui, type PiecePage } from '../content/pieces'
import type { PieceId } from '../content/prices'

/* A piece's own page (/email, /phone, /messaging, /browser, /sandbox, /personas, 21 Nov 2026), every word from
   content/pieces. In order: the hero, with the code > what an agent can do with the piece (#features) > for Personas,
   its events in the event log (#event-log) > how its events reach you (#delivery: the piece's own event names beside the
   6 channels, in the words every piece page shares) > its prices from content/prices.ts (#pricing, the hero's second
   button) > how it works with the other pieces (#pieces) > questions (#questions) > the early access form (#join, the
   hero's first button). */

/* Every piece's name and address, for the links between them. */
/* The kits whose pieces include this one, in kitLinks' order. */
const kitsUsing = (id: PieceId) => kits.filter((k) => k.pieces.items.some((i) => i.piece === id)).map((k) => ({ name: k.name, to: k.meta.path }))

const named = Object.fromEntries(pieces.map((p) => [p.id, { name: p.name, path: p.meta.path }])) as Record<PieceId, { name: string; path: string }>

/* The piece page at that address (App.tsx routes each piece's meta.path here). */
export function PieceAt({ path }: { path: string }) {
  const piece = pieceAt(path)
  return piece ? <Piece piece={piece} /> : null
}

export function Piece({ piece }: { piece: PiecePage }) {
  return (
    <>
      <PieceHero hero={piece.hero} ui={ui} />
      <PieceCan can={piece.can} id="features" />
      {piece.log && <PieceLog log={piece.log} ui={{ label: ui.log, shot: ui.shot }} id="event-log" />}
      <PieceDelivery heading={ui.delivery.heading} line={ui.delivery.line} events={piece.events} ui={ui.delivery} id="delivery" />
      <PiecePrices piece={piece.id} price={piece.price} ui={{ label: ui.prices, all: ui.allPrices }} id="pricing" />
      <PieceTogether together={piece.together} named={named} label={ui.pieces} id="pieces" kits={{ label: ui.kits, links: kitsUsing(piece.id) }} />
      <Faq faq={piece.faq} id="questions" className="s-faq--ruled" />
      <FinalCta final={piece.final} id="join" />
    </>
  )
}

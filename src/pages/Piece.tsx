import { PieceCan } from '../components/piece/PieceCan'
import { PieceHero } from '../components/piece/PieceHero'
import { PieceLog } from '../components/piece/PieceLog'
import { PiecePrices } from '../components/piece/PiecePrices'
import { PieceTogether } from '../components/piece/PieceTogether'
import { Faq } from '../components/sections/Faq'
import { FinalCta } from '../components/sections/FinalCta'
import { pieceAt, pieces, pieceUi as ui, type PiecePage } from '../content/pieces'
import type { PieceId } from '../content/prices'

/* A piece's own page (/email, /phone, /messaging, /browser, /sandbox, /personas, 21 Nov 2026), every word from
   content/pieces. In order: the hero, with the code > what an agent can do with the piece (#features) > for Personas,
   the event log (#event-log) > its prices from content/prices.ts (#pricing, the hero's second button) > how it works
   with the other pieces (#pieces) > questions (#questions) > the early access form (#join, the hero's first button). */

/* Every piece's name and address, for the links between them. */
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
      <PiecePrices piece={piece.id} price={piece.price} ui={{ label: ui.prices, all: ui.allPrices }} id="pricing" />
      <PieceTogether together={piece.together} named={named} label={ui.pieces} id="pieces" />
      <Faq faq={piece.faq} id="questions" className="s-faq--ruled" />
      <FinalCta final={piece.final} id="join" />
    </>
  )
}

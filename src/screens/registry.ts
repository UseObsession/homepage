/* Every app screen's component, by name. Server only: the prerender draws the screens into each page's HTML and into
   dist/screens (src/screens/render.ts); the browser never imports this file, so the screens never ship as code. */
import type { ComponentType } from 'react'
import type { ScreenProps } from '../components/workspace'
import { AcctwatchScreen } from './acctwatch'
import { AdcheckScreen } from './adcheck'
import { AdsScreen } from './ads'
import { AgencytaskScreen } from './agencytask'
import { ApproveScreen } from './approve'
import { BattlecardScreen } from './battlecard'
import { BoardScreen } from './board'
import { BotcheckScreen } from './botcheck'
import { BrandwatchScreen } from './brandwatch'
import { BriefScreen } from './brief'
import { CallcheckScreen } from './callcheck'
import { CampaignScreen } from './campaign'
import { CaseScreen } from './case'
import { CheckoutScreen } from './checkout'
import { ClaycolsScreen } from './claycols'
import { ComposeScreen } from './compose'
import { DevScreen } from './dev'
import { DisclosureScreen } from './disclosure'
import { DriftScreen } from './drift'
import { ExpansionScreen } from './expansion'
import { HandoverScreen } from './handover'
import { InboundScreen } from './inbound'
import { InboxScreen } from './inbox'
import { InvoicesScreen } from './invoices'
import { KitScreen } from './kit'
import { LeadsScreen } from './leads'
import { ListingsScreen } from './listings'
import { MemberfeedScreen } from './memberfeed'
import { MembersScreen } from './members'
import { OutcheckScreen } from './outcheck'
import { PackScreen } from './pack'
import { PartnersScreen } from './partners'
import { PilotScreen } from './pilot'
import { PricesScreen } from './prices'
import { ProofmailScreen } from './proofmail'
import { QaScreen } from './qa'
import { QuotesScreen } from './quotes'
import { RenewalScreen } from './renewal'
import { ReportScreen } from './report'
import { ResolutionScreen } from './resolution'
import { ReviewsScreen } from './reviews'
import { RivalsScreen } from './rivals'
import { RunScreen } from './run'
import { SalescheckScreen } from './salescheck'
import { SavesScreen } from './saves'
import { ShipScreen } from './ship'
import { ShopScreen } from './shop'
import { SpendScreen } from './spend'
import { SuppliersScreen } from './suppliers'
import { SwitchScreen } from './switch'
import { TemplatesScreen } from './templates'
import { UpsellsScreen } from './upsells'
import { VendorScreen } from './vendor'
import { VendorcheckScreen } from './vendorcheck'
import { WinbackScreen } from './winback'

export const SCREENS: Readonly<Record<string, ComponentType<ScreenProps>>> = {
  acctwatch: AcctwatchScreen,
  adcheck: AdcheckScreen,
  ads: AdsScreen,
  agencytask: AgencytaskScreen,
  approve: ApproveScreen,
  battlecard: BattlecardScreen,
  board: BoardScreen,
  botcheck: BotcheckScreen,
  brandwatch: BrandwatchScreen,
  brief: BriefScreen,
  callcheck: CallcheckScreen,
  campaign: CampaignScreen,
  case: CaseScreen,
  checkout: CheckoutScreen,
  claycols: ClaycolsScreen,
  compose: ComposeScreen,
  dev: DevScreen,
  disclosure: DisclosureScreen,
  drift: DriftScreen,
  expansion: ExpansionScreen,
  handover: HandoverScreen,
  inbound: InboundScreen,
  inbox: InboxScreen,
  invoices: InvoicesScreen,
  kit: KitScreen,
  leads: LeadsScreen,
  listings: ListingsScreen,
  memberfeed: MemberfeedScreen,
  members: MembersScreen,
  outcheck: OutcheckScreen,
  pack: PackScreen,
  partners: PartnersScreen,
  pilot: PilotScreen,
  prices: PricesScreen,
  proofmail: ProofmailScreen,
  qa: QaScreen,
  quotes: QuotesScreen,
  renewal: RenewalScreen,
  report: ReportScreen,
  resolution: ResolutionScreen,
  reviews: ReviewsScreen,
  rivals: RivalsScreen,
  run: RunScreen,
  salescheck: SalescheckScreen,
  saves: SavesScreen,
  ship: ShipScreen,
  shop: ShopScreen,
  spend: SpendScreen,
  suppliers: SuppliersScreen,
  switch: SwitchScreen,
  templates: TemplatesScreen,
  upsells: UpsellsScreen,
  vendor: VendorScreen,
  vendorcheck: VendorcheckScreen,
  winback: WinbackScreen,
}

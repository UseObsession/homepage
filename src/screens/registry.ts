/* Every app screen's component, by name. Server only: the prerender draws the screens into each page's HTML and into
   dist/screens (src/screens/render.ts); the browser never imports this file, so the screens never ship as code. */
import type { ComponentType } from 'react'
import type { ScreenProps } from '../components/workspace'
import { AcctwatchScreen } from './acctwatch'
import { AdcheckScreen } from './adcheck'
import { AdsScreen } from './ads'
import { AgencytaskScreen } from './agencytask'
import { AgentcheckoutScreen } from './agentcheckout'
import { ApproveScreen } from './approve'
import { BattlecardScreen } from './battlecard'
import { BoardScreen } from './board'
import { BotcheckScreen } from './botcheck'
import { BrandwatchScreen } from './brandwatch'
import { BriefScreen } from './brief'
import { CallbackScreen } from './callback'
import { CallcheckScreen } from './callcheck'
import { CampaignScreen } from './campaign'
import { CaseScreen } from './case'
import { CheckoutScreen } from './checkout'
import { ClaycolsScreen } from './claycols'
import { CodecheckScreen } from './codecheck'
import { ComposeScreen } from './compose'
import { DevScreen } from './dev'
import { DisclosureScreen } from './disclosure'
import { DocchaseScreen } from './docchase'
import { DriftScreen } from './drift'
import { EvalrunScreen } from './evalrun'
import { ExpansionScreen } from './expansion'
import { HandoverScreen } from './handover'
import { ImessageScreen } from './imessage'
import { InboundScreen } from './inbound'
import { InboxScreen } from './inbox'
import { InboxagentScreen } from './inboxagent'
import { InvoicecollectScreen } from './invoicecollect'
import { InvoicesScreen } from './invoices'
import { KitScreen } from './kit'
import { LeadsScreen } from './leads'
import { LedgerScreen } from './ledger'
import { ListingsScreen } from './listings'
import { LoadsScreen } from './loads'
import { MemberfeedScreen } from './memberfeed'
import { MembersScreen } from './members'
import { MissedcallScreen } from './missedcall'
import { OptoutScreen } from './optout'
import { OutcheckScreen } from './outcheck'
import { PackScreen } from './pack'
import { PartnersScreen } from './partners'
import { PilotScreen } from './pilot'
import { PricesScreen } from './prices'
import { PriorauthScreen } from './priorauth'
import { PromosScreen } from './promos'
import { ProofmailScreen } from './proofmail'
import { QaScreen } from './qa'
import { QuotesScreen } from './quotes'
import { RemindersScreen } from './reminders'
import { RenewalScreen } from './renewal'
import { ReorderScreen } from './reorder'
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
import { TravelbookScreen } from './travelbook'
import { UpsellsScreen } from './upsells'
import { VendorScreen } from './vendor'
import { VendorcheckScreen } from './vendorcheck'
import { WinbackScreen } from './winback'

export const SCREENS: Readonly<Record<string, ComponentType<ScreenProps>>> = {
  acctwatch: AcctwatchScreen,
  adcheck: AdcheckScreen,
  ads: AdsScreen,
  agencytask: AgencytaskScreen,
  agentcheckout: AgentcheckoutScreen,
  approve: ApproveScreen,
  battlecard: BattlecardScreen,
  board: BoardScreen,
  botcheck: BotcheckScreen,
  brandwatch: BrandwatchScreen,
  brief: BriefScreen,
  callback: CallbackScreen,
  callcheck: CallcheckScreen,
  campaign: CampaignScreen,
  case: CaseScreen,
  checkout: CheckoutScreen,
  claycols: ClaycolsScreen,
  codecheck: CodecheckScreen,
  compose: ComposeScreen,
  dev: DevScreen,
  disclosure: DisclosureScreen,
  docchase: DocchaseScreen,
  drift: DriftScreen,
  evalrun: EvalrunScreen,
  expansion: ExpansionScreen,
  handover: HandoverScreen,
  imessage: ImessageScreen,
  inbound: InboundScreen,
  inbox: InboxScreen,
  inboxagent: InboxagentScreen,
  invoicecollect: InvoicecollectScreen,
  invoices: InvoicesScreen,
  kit: KitScreen,
  leads: LeadsScreen,
  ledger: LedgerScreen,
  listings: ListingsScreen,
  loads: LoadsScreen,
  memberfeed: MemberfeedScreen,
  members: MembersScreen,
  missedcall: MissedcallScreen,
  optout: OptoutScreen,
  outcheck: OutcheckScreen,
  pack: PackScreen,
  partners: PartnersScreen,
  pilot: PilotScreen,
  prices: PricesScreen,
  priorauth: PriorauthScreen,
  promos: PromosScreen,
  proofmail: ProofmailScreen,
  qa: QaScreen,
  quotes: QuotesScreen,
  reminders: RemindersScreen,
  renewal: RenewalScreen,
  reorder: ReorderScreen,
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
  travelbook: TravelbookScreen,
  upsells: UpsellsScreen,
  vendor: VendorScreen,
  vendorcheck: VendorcheckScreen,
  winback: WinbackScreen,
}

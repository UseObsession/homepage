import type { BlogPost } from './types'

/* Agentic commerce, batch 1, article 2 (_research/seo/agentic-commerce-23nov/PLAN.md §3, ARTICLE_BRIEF.md row 2, Seun's yes
   23 Nov 2026): agentic commerce protocols compared. Readers: payments and ecommerce leads at stores and platforms deciding
   what to support, and engineers building agents that buy. Owns "agentic commerce protocol", "agent payments protocol",
   "agentic checkout protocol", "ai agent payment standards visa mastercard" and their neighbours (Google suggestions, US
   and UK, 23 Nov: autocomplete_23nov.json). "agentic commerce protocol" and "universal commerce protocol" are still listed
   by /blog/agentic-commerce-for-merchants until the lead moves them.
   Every protocol was read on its own page on 23 Nov 2026: agenticcommerce.dev and the ACP repository (versions, beta
   status, the 2026-04-17 changelog and checkout schema), OpenAI's merchant page, ucp.dev and the UCP repository (releases
   and the buyer schema), Google's UCP posts of 11 Jan, 19 Mar and 16 Sep 2026 and its Merchant Center help page,
   ap2-protocol.org, Google Cloud's AP2 launch post (16 Sep 2025) and Google's FIDO post (28 Apr 2026), Visa's VIC page,
   its 30 Apr 2025 launch release and its 14 Oct 2025 Trusted Agent Protocol release, Mastercard's Agent Pay page and its
   releases of 29 Apr 2025, 10 Sep 2025, 2 Jun 2026 and 30 Sep 2026, x402.org and the x402 Foundation release (14 Jul
   2026), mpp.dev, Stripe's MPP post (18 Mar 2026) and docs, the IETF Web Bot Auth working group page, and Rain's
   Agentic Payments Alliance release (18 Aug 2026). Facts, dates and doubts: notes_agentic-commerce-protocols.md.
   No partnership with any protocol is claimed; no competitor is named or linked. The café group and supplier in the
   body illustration are invented, at .example. */

const ACP_SITE = 'https://www.agenticcommerce.dev/'
const ACP_GH = 'https://github.com/agentic-commerce-protocol/agentic-commerce-protocol'
const OPENAI_MERCHANTS = 'https://chatgpt.com/merchants/'
const UCP_LAUNCH = 'https://blog.google/products/ads-commerce/agentic-commerce-ai-tools-protocol-retailers-platforms'
const UCP_SITE = 'https://ucp.dev/'
const UCP_MARCH = 'https://blog.google/products-and-platforms/products/shopping/ucp-updates/'
const UCP_RELEASES = 'https://github.com/Universal-Commerce-Protocol/ucp/releases'
const GOOGLE_UCP_HELP = 'https://support.google.com/merchants/answer/16837055?hl=en'
const GOOGLE_SEPT = 'https://blog.google/products-and-platforms/products/shopping/google-shopping-updates-holiday-shopping/'
const AP2_LAUNCH = 'https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol'
const AP2_SITE = 'https://ap2-protocol.org/'
const AP2_FIDO = 'https://blog.google/products-and-platforms/platforms/google-pay/agent-payments-protocol-fido-alliance/'
const VISA_LAUNCH = 'https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21361.html'
const VISA_VIC = 'https://www.visa.com/en-us/solutions/intelligent-commerce'
const VISA_TAP =
  'https://investor.visa.com/news/news-details/2025/Visa-Introduces-Trusted-Agent-Protocol-An-Ecosystem-Led-Framework-for-AI-Commerce/default.aspx'
const MC_LAUNCH =
  'https://www.mastercard.com/us/en/news-and-trends/press/2025/april/mastercard-unveils-agent-pay-pioneering-agentic-payments-technology-to-power-commerce-in-the-age-of-ai.html'
const MC_AGENT_PAY = 'https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay.html'
const MC_SEPT =
  'https://www.mastercard.com/global/en/news-and-trends/press/2025/september/mastercard-unveils-new-tools-and-collaborations-to-power-smarter%2C-safer-agentic-commerce.html'
const MC_EUROPE = 'https://www.mastercard.com/gb/en/news-and-trends/stories/2026/europe-trusted-agentic-commerce.html'
const MC_TRUST =
  'https://investor.mastercard.com/investor-news/investor-news-details/2026/Mastercard-Advances-Agentic-Commerce-With-New-Trust-and-Intelligence-Services/default.aspx'
const X402_SITE = 'https://www.x402.org/'
const X402_FOUNDATION =
  'https://www.x402.org/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications/'
const MPP_STRIPE = 'https://stripe.com/blog/machine-payments-protocol'
const MPP_SITE = 'https://mpp.dev/'
const MPP_DOCS = 'https://docs.stripe.com/payments/machine/mpp'
const WBA_IETF = 'https://datatracker.ietf.org/wg/webbotauth/about/'
const APA = 'https://www.rain.xyz/resources/rain-launches-the-agentic-payments-alliance'
const ACP_SCHEMA =
  'https://github.com/agentic-commerce-protocol/agentic-commerce-protocol/blob/main/spec/2026-04-17/json-schema/schema.agentic_checkout.json'
const UCP_BUYER = 'https://github.com/Universal-Commerce-Protocol/ucp/blob/main/source/schemas/shopping/types/buyer.json'

export const post: BlogPost = {
  slug: 'agentic-commerce-protocols',
  title: 'Agentic commerce protocols compared: ACP, AP2, UCP and x402',
  dek: 'Who backs each agentic commerce protocol and card programme, and what it carries from product search to payment and agent identity. Each one’s status on 23 November 2026, checked on its own pages.',
  metaTitle: 'Agentic commerce protocols compared: ACP, AP2, UCP and x402',
  description:
    'Agentic commerce protocols compared: who backs ACP, UCP, AP2, Visa, Mastercard Agent Pay, x402 and MPP, what each covers, and where each stands in 2026.',
  answer:
    'An agentic commerce protocol is an open standard that lets an AI agent find products, check out or pay at a store on a shopper’s behalf. OpenAI and Stripe’s ACP and Google’s UCP carry the basket and checkout, Google’s AP2 proves what the shopper approved, and Visa, Mastercard, x402 and MPP carry the payment itself. Obsession gives the agent what every protocol leaves to the buyer: its own inbox, phone number and signed-in browser, with every confirmation and receipt in one event log.',
  primaryKeyword: 'agentic commerce protocol',
  keywords: [
    'agent payments protocol',
    'universal commerce protocol',
    'agentic checkout protocol',
    'ai agent payment standards visa mastercard',
    'agentic payments protocol',
    'acp vs ucp',
    'agentic commerce protocol acp',
    'x402 protocol',
    'machine payments protocol',
    'trusted agent protocol',
    'agentic payments alliance',
  ],
  category: 'Buy, book and order',
  published: '2026-11-23',
  updated: '2026-11-23',
  readingMinutes: 13,
  order: 2,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'report',
      title: 'Which protocol carries each step',
      period: 'From each protocol’s own pages, 23 November 2026',
      cols: ['Step', 'Carried by', 'Who receives it'],
      rows: [
        { name: 'Find the product', cells: ['ACP product feeds\nUCP catalogue', 'The agent'], tone: 'ok' },
        { name: 'Agree the basket', cells: ['ACP or UCP checkout', 'The store, as seller'], tone: 'ok' },
        { name: 'Prove approval', cells: ['AP2 mandates\nVerifiable Intent', 'The bank and the store'], tone: 'ok' },
        { name: 'Pay', cells: ['Visa or Mastercard tokens\nx402, MPP', 'The card network or wallet'], tone: 'ok' },
        { name: 'Prove the agent', cells: ['Trusted Agent Protocol\nWeb Bot Auth', 'The store’s website'], tone: 'ok' },
        { name: 'Confirmation, delivery texts', cells: ['No protocol', 'The email and number given at checkout'], tone: 'fail' },
      ],
      notes: [
        'ACP and UCP send order updates to the agent’s own server. The store still emails the confirmation and texts delivery updates.',
        'At a store that supports no protocol, the agent checks out in a browser.',
      ],
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Agentic commerce protocols are open standards that let an AI agent find a product, agree a basket, prove what the shopper approved and pay, at any store that supports them. Stores use them to sell through AI assistants, and teams building agents that buy supplies, book travel or order for shoppers use them to place orders through a store’s own system.',
    },
    {
      kind: 'p',
      text: 'Card networks, AI companies, payment firms and a crypto exchange have each published one, and several overlap. On 23 November 2026 the [Universal Commerce Protocol](' +
        UCP_RELEASES +
        ') had shipped 4 releases, the first dated 11 January 2026, and the [Agentic Commerce Protocol](' +
        ACP_GH +
        ') was in beta. The [Agent Payments Protocol](' +
        AP2_FIDO +
        ') had reached version 0.2 and moved to the FIDO Alliance, the industry body behind passkeys. Our guide to [agentic commerce](/blog/agentic-commerce) explains how agents buy, book and order end to end, and [agentic commerce companies](/blog/agentic-commerce-companies) maps who builds each part.',
    },

    { kind: 'h2', id: 'what-a-protocol-covers', text: 'What an agentic commerce protocol covers' },
    {
      kind: 'p',
      text: 'Each protocol covers 1 or more of 5 jobs in an agent’s purchase. Sorting them by job shows where they overlap and which job none of them takes.',
    },
    {
      kind: 'list',
      items: [
        '**Discovery:** the agent reads a store’s products, prices and stock from a feed or a catalogue interface, instead of reading its web pages.',
        '**Checkout:** the agent builds a basket, gets tax and delivery costs and places the order in the store’s own system, and the store stays the seller.',
        '**Authorisation:** a signed digital contract, called a mandate, shows what the shopper asked for and the exact basket they approved, so a bank or a store can check it in a dispute.',
        '**Payment credential:** the card or wallet the agent pays with, usually as a token, a stand-in for the card number that works only for that agent or store.',
        '**Agent identity:** a cryptographic signature on each request tells a website which known agent is visiting, so the store can let it through as a known agent.',
      ],
    },

    { kind: 'h2', id: 'compared', text: 'Agentic commerce protocols compared', compare: true },
    {
      kind: 'p',
      text: '9 standards and programmes cover those 5 jobs. Each row describes the protocol as its own specification, repository or announcement did on 23 November 2026. ACP, UCP, AP2 and x402 publish their code under the Apache 2.0 licence, so any store or agent builder can read and use them.',
    },
    {
      kind: 'table',
      caption: 'Agentic commerce protocols and card programmes, from each one’s own pages as checked on 23 November 2026',
      cols: ['Protocol', 'Backed by', 'What it covers', 'Status, 23 Nov 2026'],
      rows: [
        ['Agentic Commerce Protocol (ACP)', 'OpenAI and Stripe, its founding maintainers', 'Product feeds\nCheckout and orders\nDelegated payment tokens', 'Beta, version 2026-04-17'],
        ['Universal Commerce Protocol (UCP)', 'Google, Shopify, Etsy, Wayfair, Target, Walmart and other co-developers', 'Catalogue, cart and checkout\nAccount linking and loyalty\nOrders, returns and refunds', 'Version 2026-08-25, its 4th release'],
        ['Agent Payments Protocol (AP2)', 'Created by Google, donated to the FIDO Alliance', 'Signed proof of what the shopper approved\nCards first, more methods planned', 'Version 0.2, 28 April 2026'],
        ['Visa Intelligent Commerce', 'Visa', 'Card tokens for agents\nSpending limits and controls', 'Being deployed, Visa’s page says'],
        ['Trusted Agent Protocol', 'Visa, built with Cloudflare', 'Signed requests that tell a store a trusted agent intends to buy', 'Released 14 October 2025'],
        ['Mastercard Agent Pay', 'Mastercard', 'Network tokens for registered agents\nVerifiable Intent', 'Every issuer in Europe enabled, 2 June 2026'],
        ['x402', 'Started at Coinbase, now the x402 Foundation', 'Payment inside a web request\nStablecoins first', 'Production ready, its site says'],
        ['Machine Payments Protocol (MPP)', 'Stripe and Tempo', 'Payment inside a web request\nStablecoins, cards and Lightning', 'Launched 18 March 2026'],
        ['Web Bot Auth', 'An IETF working group', 'Signatures that identify an automated visitor to a website', 'Working group active'],
      ],
    },

    { kind: 'h3', id: 'acp', text: 'Agentic Commerce Protocol (ACP): the agentic checkout protocol from OpenAI and Stripe' },
    {
      kind: 'p',
      text: 'The [Agentic Commerce Protocol](' +
        ACP_SITE +
        ') is the open standard OpenAI and Stripe developed for purchases between buyers, their AI agents and businesses. It comes in REST and [MCP](/glossary/model-context-protocol) versions (MCP is the standard way AI agents call tools). Its repository lists 5 versions from 29 September 2025 to 17 April 2026 and marks the specification as beta. The April version added a feed interface through which merchants push their product catalogues to agents.',
    },
    {
      kind: 'p',
      text: '[OpenAI’s merchant page](' +
        OPENAI_MERCHANTS +
        ') says it is moving away from a standalone Instant Checkout in ChatGPT, and that purchases are completed on merchants’ own websites or apps. The same page says ACP supports product discovery through shared product data today. Stripe was the first payment provider compatible with ACP, through its Shared Payment Token.',
    },

    { kind: 'h3', id: 'ucp', text: 'Universal Commerce Protocol (UCP): Google, Shopify and the retailers' },
    {
      kind: 'p',
      text: 'Google [launched the Universal Commerce Protocol on 11 January 2026](' +
        UCP_LAUNCH +
        '), co-developed with Shopify, Etsy, Wayfair, Target and Walmart. More than 20 others endorsed it at launch, including Adyen, American Express, Best Buy, Mastercard, Stripe and Visa. [UCP’s own site](' +
        UCP_SITE +
        ') now lists Amazon, Microsoft, Meta and Salesforce among its shopping co-developers. It also names co-developers for hotel booking and food ordering, such as Booking.com, Expedia Group, Marriott, DoorDash and Uber Eats, and marks hotel booking and food checkout as drafts. The store stays the merchant of record, the seller legally responsible for the sale.',
    },
    {
      kind: 'p',
      text: 'UCP covers catalogue search, carts, checkout and linking a shopper’s account with the store over OAuth. It also sends order updates by webhook, a message sent to the agent’s server when an order ships, is returned or is refunded. A [March 2026 update](' +
        UCP_MARCH +
        ') added carts of several items, live catalogue lookups and member prices for shoppers whose accounts are linked. The [August 2026 release](' +
        UCP_RELEASES +
        ') added 3D Secure, the bank check that asks a shopper to confirm a card payment. It also added split payments, instalments, a loyalty extension and Web Bot Auth support. It runs over REST, MCP and A2A, the open Agent2Agent protocol for agents that talk to each other, and uses AP2 for payment mandates.',
    },
    {
      kind: 'p',
      text: 'On Google, UCP runs checkout in AI Mode and the Gemini app for [select merchants](' +
        GOOGLE_UCP_HELP +
        ') whose products are eligible in the US, Canada and Australia, and shoppers pay with Google Pay. In September 2026 Google said UCP [already enables direct checkout for hundreds of thousands of brands and retailers](' +
        GOOGLE_SEPT +
        ') across its surfaces.',
    },
    {
      kind: 'stat',
      value: '100,000s',
      label: 'brands and retailers that Google says UCP already enables for direct checkout across Google',
      source: 'Google, 16 Sep 2026',
      href: GOOGLE_SEPT,
    },

    { kind: 'h3', id: 'ap2', text: 'Agent Payments Protocol (AP2): created by Google, now at the FIDO Alliance' },
    {
      kind: 'p',
      text: 'Google [announced the Agent Payments Protocol on 16 September 2025](' +
        AP2_LAUNCH +
        ') with more than 60 organisations, including Adyen, American Express, Coinbase, Etsy, Mastercard, PayPal, Revolut, Salesforce and Worldpay. It works as an extension of A2A and MCP. Its core is the mandate, a signed digital contract that records the shopper’s instructions and the exact basket they approved. Mandates leave an audit trail for the bank and the store. [Its documentation](' +
        AP2_SITE +
        ') says the first version supports cards, with push payments such as UPI and PIX and digital currencies on its roadmap, and one of its samples pays with x402.',
    },
    {
      kind: 'p',
      text: 'On [28 April 2026](' +
        AP2_FIDO +
        ') Google released version 0.2. It adds payments made while the shopper is away, on instructions they approved in advance, such as buying concert tickets the moment they go on sale. The same day Google announced it was donating AP2 to the FIDO Alliance. Verifiable Intent, a companion standard Google co-developed with Mastercard that keeps a tamper-proof log of what the shopper authorised, is going to FIDO as well.',
    },

    { kind: 'h3', id: 'visa', text: 'Visa Intelligent Commerce and the Trusted Agent Protocol' },
    {
      kind: 'p',
      text: 'Visa [introduced Visa Intelligent Commerce on 30 April 2025](' +
        VISA_LAUNCH +
        ') with partners including Anthropic, IBM, Microsoft, Mistral AI, OpenAI, Perplexity, Samsung and Stripe. It replaces card details with tokenised credentials that confirm a shopper’s chosen agent may act for them, and lets the shopper set spending limits and conditions. [Visa’s page](' +
        VISA_VIC +
        ') adds an MCP server for developers and a programme that prepares merchants and acquirers to accept agent payments, and says the product is still being deployed.',
    },
    {
      kind: 'p',
      text: 'The [Trusted Agent Protocol](' +
        VISA_TAP +
        ') was released on 14 October 2025 and built with Cloudflare. It lets an approved agent send a store signed details with each request: that it intends to buy, whether the shopper already has an account, and payment data if the store wants it. It builds on HTTP Message Signatures and aligns with [Web Bot Auth](/glossary/web-bot-auth). Visa named Adyen, Checkout.com, Coinbase, Shopify, Stripe and Worldpay among the early partners that gave feedback.',
    },

    { kind: 'h3', id: 'mastercard', text: 'Mastercard Agent Pay' },
    {
      kind: 'p',
      text: 'Mastercard [launched Agent Pay on 29 April 2025](' +
        MC_LAUNCH +
        ') with Agentic Tokens, built on the card tokens behind mobile contactless payments and saved cards. [Its Agent Pay page](' +
        MC_AGENT_PAY +
        ') says only registered agents can transact, each traceable through Mastercard network tokens, and that every transaction is checked against the shopper’s authenticated intent and consent. In [September 2025](' +
        MC_SEPT +
        ') Mastercard said every US cardholder would be enabled by that year’s holiday season, and on [2 June 2026](' +
        MC_EUROPE +
        ') it said every Mastercard issuer in Europe was enabled at network level. On [30 September 2026](' +
        MC_TRUST +
        ') it added a score, in testing in the US, that estimates how likely it is that an AI agent started a transaction.',
    },

    { kind: 'h3', id: 'x402-mpp', text: 'x402 and the Machine Payments Protocol: paying inside a web request' },
    {
      kind: 'p',
      text: 'Both protocols put the payment inside an ordinary web request. A server answers with HTTP 402, the web’s Payment Required status code, the agent pays, and the server returns what was asked for. They are built for agents paying per call for an API, a file or a service, with no checkout page.',
    },
    {
      kind: 'p',
      text: '[x402](' +
        X402_SITE +
        ') was contributed by Coinbase to the x402 Foundation. Its site says it works on EVM-compatible chains and Solana, mainly with stablecoins, cryptocurrencies pegged to a currency such as the US dollar. The site also says it charges no protocol fee beyond network fees, is production ready and has processed millions of transactions. The [Linux Foundation launched the x402 Foundation on 14 July 2026](' +
        X402_FOUNDATION +
        ') with 40 organisations, among them Adyen, AWS, American Express, Cloudflare, Coinbase, Fiserv, Google, Mastercard, Shopify, Stripe and Visa.',
    },
    {
      kind: 'p',
      text: 'Stripe and Tempo [launched the Machine Payments Protocol on 18 March 2026](' +
        MPP_STRIPE +
        '). [Its site](' +
        MPP_SITE +
        ') lists stablecoins on Tempo, cards through Stripe’s Shared Payment Tokens and Bitcoin over Lightning, and sessions that bill per request or per streamed token. In [Stripe’s documentation](' +
        MPP_DOCS +
        '), each payment settles to the seller’s Stripe balance and the agent gets a receipt with the paid resource.',
    },

    { kind: 'h3', id: 'identity', text: 'Web Bot Auth and the Agentic Payments Alliance' },
    {
      kind: 'p',
      text: '[Web Bot Auth](' +
        WBA_IETF +
        ') is an active IETF working group standardising how automated visitors prove who they are to websites with cryptographic signatures. Visa’s Trusted Agent Protocol aligns with it and UCP added support in August 2026. Our guide to an [agent-ready website](/blog/agent-ready-website) covers what a store does with the signature.',
    },
    {
      kind: 'p',
      text: 'The [Agentic Payments Alliance](' +
        APA +
        '), launched by Rain on 18 August 2026, is a coalition of over 25 founding members, among them Visa, Mastercard, Fiserv, Circle, Solana and Remitly. Rain says its early work covers shared research, testing emerging standards for agent identity and authorisation, and the regulatory questions agents raise.',
    },

    { kind: 'h2', id: 'which', text: 'Which agentic commerce protocol to support' },
    {
      kind: 'p',
      text: 'Most teams need 2 or 3 of these, one per job, and the choice depends on which side of the sale they are on.',
    },
    {
      kind: 'list',
      items: [
        '**A store selling through AI assistants.** UCP runs checkout in Google AI Mode and Gemini for select merchants. ChatGPT reads products from feeds shared through ACP, or from the store’s own site, and sends shoppers to the store’s own checkout. Shopify and other ecommerce platforms set up much of this for the stores they host, so start in your store admin, as our guide to [agentic commerce for merchants](/blog/agentic-commerce-for-merchants) sets out. Failed agent checkouts and conversion from agent shoppers then show whether it works.',
        '**A payment provider, bank or card issuer.** AP2 mandates, Visa’s tokens and Trusted Agent Protocol, and Mastercard Agent Pay set how a bank recognises an agent’s payment and checks that the shopper approved it.',
        '**A team building agents that buy from stores.** Use UCP or ACP where a store supports them. Pay with the card the customer gives the agent, as a network token where the card’s issuer supports it. At stores that support neither, the agent checks out in a browser, as a person would.',
        '**A team paying per call for APIs, data or compute.** x402 or MPP, wherever the seller accepts them.',
      ],
    },

    { kind: 'h2', id: 'gap', text: 'What none of the protocols covers' },
    {
      kind: 'p',
      text: 'Every protocol here moves data between an agent, a store and a payment network, and none of them gives the agent an email address or phone number of its own. ACP’s [checkout schema](' +
        ACP_SCHEMA +
        ') and UCP’s [buyer schema](' +
        UCP_BUYER +
        ') both carry the buyer’s email address and phone number, so that is where the store can send its confirmation, receipt and delivery texts. A buying agent needs an inbox, a phone number, a browser and one place for every order, and the protocols leave all 4 to whoever runs it:',
    },
    {
      kind: 'list',
      items: [
        '**An inbox.** Order confirmations, receipts, booking changes and refund notices arrive by email at the address given at checkout.',
        '**A phone number.** Delivery updates, and the one-time codes some stores send at sign-in, arrive by text.',
        '**A browser.** At a store that supports none of the protocols, the agent fills in the checkout pages itself, the way a customer does.',
        '**One place for every order.** ACP and UCP send order updates to the agent’s own server, one store at a time. Matching each confirmation and receipt to its order across every store falls to the team running the agents, who track orders completed, receipts matched and cost per order.',
      ],
    },
    {
      kind: 'art',
      caption: 'An invented café group’s reorder at a supplier that supports no agentic commerce protocol: each message reaches the agent’s own inbox or number and joins one log.',
      art: {
        kind: 'log',
        title: 'One reorder, from basket to receipt',
        who: 'Buying agent at a café group with 14 sites',
        rows: [
          { time: '09:12', text: 'Basket filled on supplies.example', detail: 'No protocol, so it checked out in the browser', tone: 'info' },
          { time: '09:13', text: 'Paid with the group’s card ending 4417', detail: 'The card the team gave the agent', tone: 'ok' },
          { time: '09:13', text: 'Confirmation in the agent’s inbox', detail: 'Order SX-20931, £318.40', tone: 'ok' },
          { time: '11:40', text: 'Delivery text to the agent’s number', detail: 'Arriving Thursday', tone: 'ok' },
          { time: 'Thu 14:05', text: 'Receipt matched to SX-20931', detail: '£318.40, as confirmed', tone: 'ok' },
        ],
        foot: 'Each row is one event in one log. The café group and supplier are invented.',
      },
    },
    {
      kind: 'p',
      text: 'Obsession is the toolkit for AI agents: each buying agent gets its own inbox, phone number and signed-in browser under one identity, on one API and one bill. It pays with the card you give it, stops before payment without one, and works within a monthly spend limit you set on its key. Every confirmation, receipt and delivery text lands in one event log, and the [Order and receipt ledger](/blueprints/order-receipt-ledger) blueprint matches each to its order in one sheet.',
    },
    {
      kind: 'cta',
      text: 'One call, obsession.personas.create({ inbox: true, phone: "US", browser: true }), gives a buying agent an inbox, a US number and a browser. Each email and text reaches your webhook as email.received or sms.received, for 1 agent or a fleet of 10,000. The Free plan needs no credit card.',
      to: '/developers#join',
      label: 'Start free',
    },

    { kind: 'h2', id: 'before-you-build', text: 'Before you build on a protocol' },
    {
      kind: 'list',
      items: [
        '**Versions change every few months.** ACP and UCP name each version by its date, and ACP’s 2026-04-17 version deprecated the one before it, so pin the version your code speaks.',
        '**Fees, liability and dispute rules** come from your payment provider and card network, and they differ by country.',
        '**Card programmes reach shoppers through their banks,** so which cards an agent can use differs by issuer and country.',
        '**Each store sets its own rules for agents.** A signed agent is easier to let through, and the store decides.',
      ],
    },
    {
      kind: 'cta',
      text: 'Not building agents? Pick a blueprint, and Obsession runs it. The Agent checkout test shops your store each morning the way shoppers’ AI agents do and shows the step where each one got stuck.',
      to: '/blueprints/agent-checkout-test',
      label: 'See the blueprint',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about agentic commerce protocols' },
    {
      kind: 'faq',
      items: [
        {
          q: 'What is an agentic commerce protocol?',
          a: 'An agentic commerce protocol is an open standard that lets an AI agent find products, check out or pay at a store on a shopper’s behalf. ACP and UCP carry the basket and checkout, AP2 proves what the shopper approved, and Visa Intelligent Commerce, Mastercard Agent Pay, x402 and MPP carry the payment.',
        },
        {
          q: 'What is the difference between ACP and UCP?',
          a: 'OpenAI and Stripe maintain the Agentic Commerce Protocol, which ChatGPT uses for shared product data and which also defines checkout and delegated payment. Google co-developed the Universal Commerce Protocol with Shopify, Etsy, Wayfair, Target and Walmart, and it runs checkout in Google AI Mode and Gemini and covers catalogue, carts, account linking and orders. Both are open source under the Apache 2.0 licence.',
        },
        {
          q: 'What is the Agent Payments Protocol (AP2)?',
          a: 'AP2 is an open protocol Google announced on 16 September 2025 for proving what a shopper authorised an agent to buy, using signed digital contracts called mandates. Version 0.2, released on 28 April 2026, adds payments made while the shopper is away, and Google donated AP2 to the FIDO Alliance the same day.',
        },
        {
          q: 'What are Visa’s and Mastercard’s AI agent payment standards?',
          a: 'Both replace the card number with a token issued for the agent. Visa Intelligent Commerce adds spending limits, and Visa’s Trusted Agent Protocol lets a store recognise a trusted agent. Mastercard Agent Pay lets only registered agents transact and checks each payment against the shopper’s approved intent, and on 2 June 2026 Mastercard said every issuer in Europe was enabled.',
        },
        {
          q: 'What is x402, and how does it differ from MPP?',
          a: 'Both let an agent pay inside a web request, after a server answers with HTTP 402, Payment Required. Coinbase contributed x402 to the x402 Foundation, which governs it at the Linux Foundation, and it is used mainly for stablecoins. The Machine Payments Protocol, from Stripe and Tempo, accepts stablecoins, cards through Stripe and Bitcoin over Lightning, and can bill by session.',
        },
        {
          q: 'Do agentic commerce protocols give an agent its own email address or phone number?',
          a: 'No. ACP and UCP pass the buyer’s email address and phone number to the store at checkout, so that is where the store can send its confirmation, receipt and delivery texts. To receive them, the agent needs an inbox and a phone number of its own.',
          link: { label: 'Agentic commerce infrastructure', to: '/use-cases/agentic-commerce' },
        },
        {
          q: 'Which protocol should a store support first?',
          a: 'A store that wants shoppers to check out inside Google AI Mode and Gemini needs UCP, which Google offers to select merchants. ChatGPT can read a product feed shared through ACP or the store’s own site, and sends shoppers to the store’s checkout. The card programmes reach a store through its payment provider, so ask the provider which it supports.',
          link: { label: 'Agentic commerce for merchants', to: '/blog/agentic-commerce-for-merchants' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'How we checked this',
      text: 'Each protocol was checked on its own specification, repository, documentation or announcement on 23 November 2026, and version dates come from each repository’s published releases. Every company named is independent of Obsession. Fees, liability and dispute rules differ by provider and country, and nothing here is legal or payment advice. The café group and supplier in the illustration are invented.',
    },
  ],

  sources: [
    { title: 'Universal Commerce Protocol releases', publisher: 'UCP Authors, GitHub', url: UCP_RELEASES, date: '2026-08-25' },
    { title: 'Agentic Commerce Protocol repository', publisher: 'OpenAI and Stripe, GitHub', url: ACP_GH, date: '2026-04-17' },
    { title: 'We’re donating Agent Payments Protocol to the FIDO Alliance', publisher: 'Google', url: AP2_FIDO, date: '2026-04-28' },
    { title: 'Agentic Commerce Protocol', publisher: 'OpenAI and Stripe', url: ACP_SITE },
    { title: 'Power product discovery in ChatGPT', publisher: 'OpenAI', url: OPENAI_MERCHANTS },
    { title: 'New tech and tools for retailers to succeed in an agentic shopping era', publisher: 'Google', url: UCP_LAUNCH, date: '2026-01-11' },
    { title: 'Universal Commerce Protocol', publisher: 'UCP Authors', url: UCP_SITE, date: '2026' },
    { title: 'AI shopping gets simpler with Universal Commerce Protocol updates', publisher: 'Google', url: UCP_MARCH, date: '2026-03-19' },
    { title: 'About the Universal Commerce Protocol (UCP) and UCP-powered checkout feature on Google', publisher: 'Google Merchant Center Help', url: GOOGLE_UCP_HELP },
    { title: 'Boost your holiday sales with these agentic commerce updates', publisher: 'Google', url: GOOGLE_SEPT, date: '2026-09-16' },
    { title: 'Announcing Agent Payments Protocol (AP2)', publisher: 'Google Cloud', url: AP2_LAUNCH, date: '2025-09-16' },
    { title: 'AP2: Agent Payments Protocol documentation', publisher: 'Google', url: AP2_SITE },
    { title: 'Find and Buy with AI: Visa Unveils New Era of Commerce', publisher: 'Visa', url: VISA_LAUNCH, date: '2025-04-30' },
    { title: 'Visa Intelligent Commerce', publisher: 'Visa', url: VISA_VIC },
    { title: 'Visa Introduces Trusted Agent Protocol: An Ecosystem-Led Framework for AI Commerce', publisher: 'Visa', url: VISA_TAP, date: '2025-10-14' },
    { title: 'Mastercard unveils Agent Pay, pioneering agentic payments technology to power commerce in the age of AI', publisher: 'Mastercard', url: MC_LAUNCH, date: '2025-04-29' },
    { title: 'Mastercard Agent Pay', publisher: 'Mastercard', url: MC_AGENT_PAY },
    { title: 'Mastercard unveils new tools and collaborations to power smarter, safer agentic commerce', publisher: 'Mastercard', url: MC_SEPT, date: '2025-09-10' },
    { title: 'Europe is building the foundations for trusted agentic commerce', publisher: 'Mastercard', url: MC_EUROPE, date: '2026-06-02' },
    { title: 'Mastercard Advances Agentic Commerce With New Trust and Intelligence Services', publisher: 'Mastercard', url: MC_TRUST, date: '2026-09-30' },
    { title: 'x402', publisher: 'x402 Foundation', url: X402_SITE },
    { title: 'Linux Foundation announces operational launch of x402 Foundation', publisher: 'x402 Foundation', url: X402_FOUNDATION, date: '2026-07-14' },
    { title: 'Introducing the Machine Payments Protocol', publisher: 'Stripe', url: MPP_STRIPE, date: '2026-03-18' },
    { title: 'MPP: the Machine Payments Protocol', publisher: 'Tempo and Stripe', url: MPP_SITE },
    { title: 'MPP', publisher: 'Stripe docs', url: MPP_DOCS },
    { title: 'Web Bot Auth working group', publisher: 'IETF', url: WBA_IETF },
    { title: 'Rain launches the Agentic Payments Alliance to guide the future of agent-driven commerce', publisher: 'Rain', url: APA, date: '2026-08-18' },
    { title: 'Agentic Checkout schema, version 2026-04-17', publisher: 'OpenAI and Stripe, GitHub', url: ACP_SCHEMA, date: '2026-04-17' },
    { title: 'UCP shopping buyer schema', publisher: 'UCP Authors, GitHub', url: UCP_BUYER },
  ],

  related: [
    'recipe:agent-checkout-test',
    'recipe:order-receipt-ledger',
    'recipe:supplier-reorder-agent',
    'recipe:travel-booking-agent',
    '/blueprints/buy-book-and-order',
    '/use-cases/agentic-commerce',
    'agentic-commerce',
    'agentic-commerce-companies',
    'agentic-commerce-for-merchants',
    'agent-ready-website',
  ],
}

import type { BlogPost } from './types'

/* Kit article (_research/seo/revamp-22nov/PLAN_articles.md, row 5; Seun's "write them", 22 Nov 2026): 10DLC
   registration. Primary "10dlc registration"; secondaries from Google autocomplete (US and UK, 22 Nov 2026,
   autocomplete_articles_22nov.json and a fresh run): 10dlc registration cost, 10dlc requirements, 10dlc campaign types,
   a2p 10dlc brand registration, 10dlc campaign description example. "what is 10dlc" is left for the glossary term planned
   in wave 3. Every fact comes from US carriers' and The Campaign Registry's own pages, read on 22 Nov 2026: TCR's 2026
   introduction (review "1-4 weeks", who must register, the roles), TCR's CSP User Guide (April 2026: brand fields, the
   number one reason a brand stays unverified, vetting and throughput, use case definitions, campaign fields, no public
   URL shorteners, "does not review, approve, or reject campaigns", the 3-month minimum, sole proprietor limits), TCR's
   Fees and Pricing guide (last updated 13 Aug 2026), T-Mobile's Consumer versus Non-Consumer Text Messaging page (gray
   routes, Fall 2020, only aggregators connect, short code and toll-free), T-Mobile's Code of Conduct (disallowed
   content, age gating, opt-out keywords, snowshoeing) and CTIA's Messaging Principles and Best Practices (May 2023:
   consent by message type, the opt-in confirmation, opt-out, links and phone numbers in messages). TCR's fee list has
   no campaign vetting fee; the $15 to resend a rejected filing is Obsession's, from prices.ts. Obsession's prices are
   from src/content/prices.ts (registration $25 once per campaign, then $17 a month; texts $0.015 with carrier fees).
   General information, never legal advice. Corbel Dental at corbel.example is invented. British English, no dashes. */

const TCR_INTRO = 'https://www.campaignregistry.com/wp-content/uploads/TCR-Intro-2026-v4_comp.pdf'
const TCR_GUIDE = 'https://www.campaignregistry.com/wp-content/uploads/CSP-User-Guide_Apr_2026-v2_comp.pdf'
const TCR_FEES = 'https://www.campaignregistry.com/Assets/TCR%20Fees%20and%20Pricing.pdf'
const TMO = 'https://www.t-mobile.com/support/plans-features/consumer-versus-non-consumer-text-messaging'
const TMO_COC = 'https://www.t-mobile.com/support/public-files/attachments/TMobile_Code_of_Conduct_1113.2022.pdf'
const CTIA = 'https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf'

export const post: BlogPost = {
  slug: '10dlc-registration',
  title: '10DLC registration: how businesses and their AI agents get approved to text US customers',
  dek: 'For developers, operations leads and owners whose software or AI agent texts customers from a local number. Every step, campaign type, fee and common rejection comes from The Campaign Registry’s and US carriers’ own pages, read on 22 November 2026.',
  metaTitle: '10DLC registration: a plain guide for businesses that text',
  description:
    '10DLC registration for businesses and AI agents that text: brand and campaign steps, every use case, review times, fees and why filings are rejected.',
  answer:
    '10DLC registration is how a US business tells carriers who it is and what it texts before it sends texts from an ordinary 10-digit phone number. Your messaging provider files your brand and one campaign per use, such as reminders or marketing, with The Campaign Registry, and review takes 1 to 4 weeks. The registry’s fee list of 13 August 2026 sets $4.50 to register a brand and $10 a month for most campaigns.',
  primaryKeyword: '10dlc registration',
  keywords: [
    '10dlc registration cost',
    '10dlc requirements',
    '10dlc campaign types',
    'a2p 10dlc brand registration',
    '10dlc campaign description example',
  ],
  category: 'Talk to customers',
  published: '2026-11-22',
  updated: '2026-11-22',
  readingMinutes: 9,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'corbel.example · one 10DLC filing',
      who: 'Corbel Dental’s reminder texts, from brand to first text',
      rows: [
        { time: 'Mon 2 Nov', text: 'Brand submitted', detail: 'Legal name, EIN, address and website', tone: 'info' },
        { time: 'Mon 2 Nov', text: 'Brand verified', detail: 'Name and EIN match the IRS record', tone: 'ok' },
        { time: 'Tue 3 Nov', text: 'Campaign submitted: Customer Care', detail: '2 sample messages, opt-in described', tone: 'info' },
        { time: 'Mon 9 Nov', text: 'Rejected: call to action unclear', detail: 'The booking form never said texts would follow', tone: 'fail' },
        { time: 'Tue 10 Nov', text: 'Resubmitted with a consent line', detail: '“We’ll text your booking. Reply STOP to opt out.”', tone: 'info' },
        { time: 'Tue 17 Nov', text: 'Approved, numbers attached', detail: 'First reminder text sent the same day', tone: 'ok' },
      ],
      foot: 'Example: Corbel Dental and every date here are invented.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: '10DLC registration is the step every US business completes before it texts customers from an ordinary 10-digit phone number, whether a person, a booking system or an AI agent sends the texts. It covers a dental practice’s appointment reminder as much as a retailer’s sale text. Registered texts travel the carriers’ approved route, and a filing done right the first time avoids a second wait in review.',
    },

    { kind: 'h2', id: 'what-is-10dlc', text: 'What is 10DLC?' },
    {
      kind: 'p',
      text: `10DLC stands for 10-digit long code: an ordinary US phone number, the kind people text every day, enabled for business texting. The Campaign Registry (TCR) is the registry US carriers use for these numbers. It calls 10DLC [the sanctioned standard for non-consumer texting](${TCR_INTRO}) on a 10-digit number, known as A2P, or application-to-person, messaging. The same number can also make and take calls.`,
    },
    {
      kind: 'p',
      text: `T-Mobile splits texting into two kinds. Consumer messages go from one person’s phone to another. Every other message is non-consumer: verification codes, account notifications, billing, delivery updates and high-volume sending. Those have to belong to an [approved campaign](${TMO}) to reach T-Mobile customers. T-Mobile says business texts on local numbers before autumn 2020 travelled grey routes, which risk delay or non-delivery.`,
    },
    {
      kind: 'p',
      text: 'The registry’s rule is broad: any business that texts its customers or employees on 10DLC is required to register, including businesses that send individual messages that aren’t marketing. TCR counts all business messaging as non-consumer, so an AI agent texting for a business is the business texting. Terms such as STOP are defined in the [glossary](/glossary).',
    },

    { kind: 'h2', id: 'who', text: 'Who does what in 10DLC registration' },
    {
      kind: 'p',
      text: 'A business never files with the registry itself. TCR says a business that texts its customers is a brand and should register through its messaging provider, and T-Mobile says only aggregators connect directly to the carriers’ networks.',
    },
    {
      kind: 'table',
      caption: 'The roles in 10DLC, as The Campaign Registry defines them',
      cols: ['Role', 'Who it is', 'What it does'],
      rows: [
        ['Brand', 'Your business', 'The company the customer believes is texting them'],
        ['CSP, campaign service provider', 'Your messaging provider', 'Registers your brand and campaigns with the registry'],
        ['CNP, connectivity partner', 'The company your provider sends through', 'Carries your texts towards the carriers and reviews the campaign'],
        ['DCA, direct connect aggregator', 'A company wired into the carriers', 'Delivers texts to each carrier’s gateway'],
        ['MNO, mobile network operator', 'The carrier, such as AT&T or T-Mobile', 'Sets the rules and throughput for your campaign'],
      ],
    },
    {
      kind: 'p',
      text: `The registry holds the register and leaves the judging to others. Its [CSP user guide](${TCR_GUIDE}) says TCR “does not review, approve, or reject campaigns”; your provider’s connectivity partner and the aggregator it sends to do.`,
    },

    { kind: 'h2', id: 'steps', text: 'How 10DLC registration works, step by step' },
    {
      kind: 'list',
      ordered: true,
      items: [
        '**Register the brand.** Your provider submits your legal company name, country, EIN or tax ID, address, website, industry and contact details. TCR checks the name and EIN against federal records. It passes when the brand shows as Verified, and campaigns can’t be created before then.',
        '**Vet the brand if you need more throughput,** meaning more texts per minute or per day. A standard vet scores the brand on details such as its compliance history and size, and a higher score earns more throughput. Public companies also need an Authentication+ check before they can create campaigns.',
        '**Register a campaign for each use case.** Pick the use case and write the campaign description. Add how people opt in (the call to action), 1 to 5 sample messages, and the opt-in, opt-out and HELP replies. Declare any links, phone numbers in messages, lending content and age-gated content, and confirm there is no affiliate marketing. The use case can’t be changed later.',
        '**Wait for review.** The campaign passes to your provider’s connectivity partner and on to the aggregator, and some special use cases need a carrier’s approval too. The registry puts review at 1 to 4 weeks. It passes when the carriers show the campaign as approved.',
        '**Attach your numbers and send.** Your provider links each phone number to the campaign. Each carrier then sets how many texts per minute or per day the campaign may send.',
      ],
    },
    { kind: 'h3', id: 'have-ready', text: 'What to have ready before you file' },
    {
      kind: 'list',
      items: [
        'Your legal company name exactly as it appears on your IRS EIN letter, and the EIN itself.',
        'A website on your own domain with a privacy policy and terms of service.',
        'The use case, and a campaign description that says who texts whom and why.',
        'Your opt-in wording, as it appears on the form, the checkout or the call script.',
        '2 sample messages written as they will be sent, with your business name in each.',
        'The STOP confirmation and the HELP reply, with a phone number or email for help.',
      ],
    },

    { kind: 'h2', id: 'campaign-types', text: '10DLC campaign types' },
    {
      kind: 'p',
      text: 'The use case says what a campaign’s texts are for. TCR splits them into standard use cases, open to any verified brand, and special use cases, which may need vetting or a carrier’s approval.',
    },
    {
      kind: 'table',
      caption: 'Standard 10DLC use cases, with The Campaign Registry’s definitions (CSP user guide, April 2026) and monthly fees (fee list, 13 August 2026)',
      cols: ['Use case', 'What it covers', 'Monthly fee'],
      rows: [
        ['2FA', 'Verification codes and one-time passcodes', '$10'],
        ['Account Notification', 'Notices to account holders about their account', '$10'],
        ['Customer Care', 'Support and account management, including two-way texting', '$10'],
        ['Delivery Notification', 'The status of a product or service on its way', '$10'],
        ['Fraud Alert', 'Possible fraud on a customer’s account', '$10'],
        ['Security Alert', 'A breach that needs the customer to act', '$10'],
        ['Marketing', 'Any promotional content', '$10'],
        ['Mixed', '2 to 5 standard use cases on one campaign', '$10'],
        ['Low Volume Mixed', 'Up to 5 standard use cases at very low volume, such as a single doctor’s office', '$1.50'],
        ['Higher Education', 'Colleges, universities and school districts', '$10'],
        ['Polling and Voting', 'Surveys and polls', '$10'],
        ['Public Service Announcement', 'Raising awareness of an important issue', '$10'],
        ['Machine to Machine', 'Device to device, with no person reading', '$10'],
      ],
    },
    {
      kind: 'p',
      text: 'The special use cases include Agents and Franchises at $30 a month, for brands whose offices each need a local number, and Charity at $3, for registered 501(c)(3) charities. Emergency is $5 and Sole Proprietor $2, for US and Canadian individuals without an EIN. Others are Political, Sweepstakes, Social, Proxy, K-12 Education, carrier exemptions, a restricted public safety type, a free-trial type for messaging providers and two types for business phone systems.',
    },
    {
      kind: 'p',
      text: `By TCR’s definitions, an AI agent that answers customers’ questions and confirms bookings by text fits Customer Care or Mixed, and a single office with low volume fits Low Volume Mixed. A campaign that adds offers to reminders needs Marketing or Mixed, because CTIA’s [messaging principles](${CTIA}) treat a coupon code added to an informational text as promotional.`,
    },

    { kind: 'h2', id: 'costs', text: 'What 10DLC registration costs' },
    {
      kind: 'p',
      text: `The Campaign Registry charges the provider that files for you, and providers pass those fees on, often with their own. These figures come from TCR’s [fee list](${TCR_FEES}), last updated on 13 August 2026.`,
    },
    {
      kind: 'table',
      caption: 'The Campaign Registry’s 10DLC fees, from its fee list of 13 August 2026; the 3-month minimum is from its CSP user guide. Your provider’s prices may add to these',
      cols: ['Fee', 'Amount', 'When'],
      rows: [
        ['Brand registration', '$4.50\n$4 for a sole proprietor', 'Once per submission'],
        ['Brand identity resubmission', '$4.50', 'Per resubmission'],
        ['Identity or vet appeal', '$11', 'Per appeal'],
        ['Standard vet', '$41.50\n$5 for a failed vet', 'Once per vet'],
        ['Enhanced vet', '$101.50', 'Once per vet'],
        ['Authentication+, for public companies', '$12.50', 'Per check'],
        ['Political vet', '$66', 'Once per vet'],
        ['Campaign: most use cases', '$10', 'Monthly, 3 months minimum'],
        ['Campaign: Low Volume Mixed', '$1.50', 'Monthly, 3 months minimum'],
        ['Campaign: Sole Proprietor', '$2', 'Monthly, 3 months minimum'],
        ['Campaign: Agents and Franchises', '$30', 'Monthly, 3 months minimum'],
      ],
    },
    {
      kind: 'p',
      text: 'Every campaign starts with a 3-month commitment, then renews month to month; Political campaigns renew monthly from the start. At TCR’s rates, one brand with one Customer Care campaign costs $4.50 plus $30 for the first 3 months. Carriers charge too: T-Mobile says there is often a fee to deliver a business messaging campaign to its customers.',
    },
    {
      kind: 'p',
      text: 'Obsession files the brand and campaign for you when you add a US [number](/phone) that sends texts, for $25 once per campaign, then $17 a month while it’s active.',
    },

    { kind: 'h2', id: 'rejections', text: 'Why 10DLC registrations get rejected' },
    {
      kind: 'p',
      text: `Most rejections trace back to a field that didn’t match what a reviewer could check. The reasons and fixes come from TCR’s guide, CTIA’s principles and T-Mobile’s [code of conduct](${TMO_COC}).`,
    },
    {
      kind: 'table',
      caption: 'Common reasons a 10DLC filing comes back, and the fix',
      cols: ['What went wrong', 'What reviewers check', 'The fix'],
      rows: [
        ['Legal name and EIN don’t match', 'TCR calls this the number one reason a brand stays unverified', 'Copy the name exactly from your IRS EIN letter, then resubmit'],
        ['Unclear call to action', 'How people opt in, the number texts come from, who is texting, fees and terms', 'Add a consent line to the form or script that names your business and the texts to expect'],
        ['No privacy policy or terms', 'TCR marks the links optional but requires compliant policies', 'Publish both on your website and link them'],
        ['Samples that don’t fit the use case', 'Samples show the messages the campaign will send', 'Write samples as the agent will send them, with your business name'],
        ['Missing opt-out or HELP', 'STOP and HELP keywords and the replies they trigger', 'Add an opt-out confirmation and a HELP reply with your contact details'],
        ['Public link shorteners', 'TCR doesn’t accept bit.ly or TinyURL links', 'Use full links on your own domain'],
        ['Disallowed content', 'T-Mobile lists payday loans, debt collection, cannabis, gambling and lead generation that shares data', 'Check the content rules first, and age-gate alcohol, tobacco, firearms and adult content'],
        ['Bought or shared lists', 'CTIA says senders build and vet their own opt-in lists', 'Text only people who opted in to your business'],
        ['The wrong use case', 'The use case can’t be changed after creation', 'Register a new campaign with the right one'],
      ],
    },

    { kind: 'h2', id: 'ai-agents', text: 'When an AI agent does the texting' },
    {
      kind: 'p',
      text: 'An AI agent that texts customers follows the same rules as any business sender. Four of them matter most when software writes the messages:',
    },
    {
      kind: 'list',
      items: [
        '**Consent by message type.** CTIA’s principles treat a reply to a customer’s text as conversational, a booking confirmation or reminder as informational, and an offer as promotional, which needs the customer’s written agreement. An agent that adds a discount to a reminder has moved the message into marketing.',
        '**STOP, every time.** T-Mobile’s code of conduct asks senders to honour STOP, END, CANCEL, UNSUBSCRIBE and QUIT, and CTIA asks for one confirmation and then no more messages. After an opt-out, the agent sends nothing more to that number, whatever the customer’s earlier conversation was about. [SMS STOP](/glossary/sms-stop) covers the rule in full.',
        '**Many numbers, similar messages.** T-Mobile watches for snowshoeing, spreading similar messages across many numbers to dodge filters, and may switch the campaign off. A fleet of agents with a number each sending the same reminder needs a use case that allows it, and T-Mobile has an approval process for that. TCR’s guide flags 50 or more numbers on one campaign for a different set-up on T-Mobile.',
        '**Links and numbers in messages.** No public link shorteners, and a phone number inside a message should belong to a business the message names.',
      ],
    },
    {
      kind: 'p',
      text: 'On Obsession, every text that arrives at an agent’s number reaches it as an sms.received event, STOP replies included. Each one stays in the agent’s event log beside its calls and emails, with the time it arrived. An agent that texts after a phone call needs the same registration as one that texts first. [AI voice agent for small business](/blog/ai-voice-agent-for-small-business) covers the call side, and [why AI agents need their own inbox, phone number and browser](/blog/why-ai-customers-matter) covers the rest of the kit.',
    },

    { kind: 'h2', id: 'other-routes', text: 'Toll-free and short codes: the other ways to text customers' },
    {
      kind: 'table',
      caption: 'The three routes for business texting in the US, as T-Mobile describes them',
      cols: ['Route', 'What it is', 'Best for'],
      rows: [
        ['10DLC', 'An ordinary 10-digit number, enabled for business texts and calls', 'Local businesses and agents that call and text from one number'],
        ['Toll-free', 'An 8XX number that can be called or texted', 'National brands that want one number for every state'],
        ['Short code', 'A 5 or 6-digit number for texting only, leased from the Short Code Registry', 'High-volume alerts and campaigns'],
      ],
    },
    {
      kind: 'p',
      text: 'Registration is a carrier and industry rule. Consent to calls and texts is also a matter of law, and [can AI make phone calls](/blog/can-ai-make-phone-calls) covers the US calling law; nothing here is legal advice.',
    },

    { kind: 'h2', id: 'faq', text: 'Questions about 10DLC registration' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How long does 10DLC registration take?',
          a: 'The Campaign Registry puts campaign review at 1 to 4 weeks, after the brand is verified. Complete and accurate brand details speed up verification, and a clear campaign description speeds up review. A rejected campaign goes back for another review once it is fixed.',
        },
        {
          q: 'How much does 10DLC registration cost?',
          a: 'The Campaign Registry’s fee list of 13 August 2026 sets $4.50 to register a brand, or $4 for a sole proprietor. Most campaigns cost $10 a month and Low Volume Mixed $1.50, each with a 3-month minimum, per its user guide. An optional standard vet is $41.50. Providers pass these on and may add their own fees and the carriers’ delivery fees.',
        },
        {
          q: 'What are the requirements for 10DLC registration?',
          a: 'For the brand: your legal company name, country, EIN or tax ID, address, website, industry and contact details, with the name matching your IRS record. For each campaign: the use case, a description, how people opt in, 1 to 5 sample messages, STOP and HELP replies, and a compliant privacy policy and terms.',
        },
        {
          q: 'Do I need 10DLC registration to send a few texts?',
          a: 'Yes, if you text customers from an ordinary 10-digit number as a business. The Campaign Registry says businesses sending individual messages that aren’t marketing must register too. Low volume senders can use the Low Volume Mixed campaign, and individuals without an EIN the Sole Proprietor one.',
        },
        {
          q: 'Can I register directly with The Campaign Registry?',
          a: 'Not as a business that texts its own customers. The Campaign Registry says such a business is a brand and should register through its messaging provider, which holds an account on the registry’s portal.',
        },
        {
          q: 'What happens if I text without registering?',
          a: 'T-Mobile says business texts sent on unsanctioned grey routes risk being delayed or not delivered, while approved campaigns on the sanctioned route aren’t subject to its spam filtering.',
        },
        {
          q: 'Can a sole proprietor register for 10DLC without an EIN?',
          a: 'Yes, through the Sole Proprietor use case for US and Canadian individuals and small businesses without an EIN. It allows one campaign and one phone number per brand, at $2 a month at The Campaign Registry’s rates.',
        },
        {
          q: 'Does Obsession register 10DLC for my AI agent?',
          a: 'Yes, for numbers that send texts. When you add a US number on a paid plan, Obsession files the brand and campaign for you, for $25 once per campaign, then $17 a month while it’s active. A rejected filing costs $15 to send again, and no plan includes registration. Texts cost $0.015 each with carrier fees included. Developers create the number through the API with obsession.numbers.create({ country: "US" }), and every reply reaches their app as an sms.received event.',
          link: { label: 'Phone numbers for AI agents', to: '/phone' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'General information',
      text: 'Fees are from The Campaign Registry’s list of 13 August 2026 and change from time to time; providers’ and carriers’ own fees vary. Carrier rules here come from T-Mobile’s and CTIA’s published pages, read on 22 November 2026. Nothing here is legal advice, and Corbel Dental in the picture is an invented example.',
    },
    {
      kind: 'cta',
      text: 'Give your agent a US number that texts and calls, with the 10DLC filing done for you on a paid plan from $20 a month. Start free to receive texts and calls.',
      to: '/phone#join',
      label: 'Start free',
    },
  ],

  sources: [
    { title: 'The Campaign Registry and 10DLC', publisher: 'The Campaign Registry', url: TCR_INTRO, date: '2026' },
    { title: 'Consumer versus Non-Consumer Text Messaging', publisher: 'T-Mobile', url: TMO },
    { title: 'CSP User Guide', publisher: 'The Campaign Registry', url: TCR_GUIDE, date: '2026-04' },
    { title: 'Messaging Principles and Best Practices', publisher: 'CTIA', url: CTIA, date: '2023-05' },
    { title: 'TCR Fees and Pricing: General Guide', publisher: 'The Campaign Registry', url: TCR_FEES, date: '2026-08-13' },
    { title: 'Code of Conduct', publisher: 'T-Mobile', url: TMO_COC },
  ],

  related: ['/phone', '/kits/talk-to-customers', 'recipe:voice-agent-check', 'ai-voice-agent-for-small-business', 'can-ai-make-phone-calls'],
}

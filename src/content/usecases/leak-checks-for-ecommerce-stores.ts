import type { UseCaseStudy } from '../types'

/* Leak checks for ecommerce stores (/use-cases/leak-checks-for-ecommerce-stores). Written 22 Oct 2026 for a store's own
   team: the owner, head of ecommerce or retention lead at a Shopify brand, checking their own store. The offer is
   system.md §5, Later revenue sources, 2 (James, 21 Oct): AI agents shop the store every week, and again after every
   change (a new theme, a new app, an edited flow), and every leak comes back with proof and its fix.
   The copy, its 3 adversarial reviews and James's decisions are in docs/copy/leak-checks-for-ecommerce-stores.md:
   the name is his pick (not "Lead leaks", which stays the speed to lead recipe); no price; 128 stores, as on the
   agencies page; "proof", never "receipt", which a store owner reads as the order email.
   1 store carries the page, as Larch & Lye carries the agencies page: Halden Home, a UK homewares store at
   haldenhome.example, with Ana Ruiz (head of ecommerce) and Kilnworth (its Shopify agency, Kit Doyle). Its first check
   finds 3 leaks (a dead welcome code, a silent basket, a checkout reminder whose button opens an empty basket), each
   comes with its fix, and every week after it catches a break the hour it starts (a theme publish, a sale's code).
   Drawn in James's format (10 steps in 3 phases, each beside its app window) by src/pages/EcommerceStores.tsx from his
   pieces. Every word here; the app windows' rows and numbers in the page.
   The real proof is the agencies page's (`found`): the 93%, the 128 stores, the 77% and the 4 findings retold at
   invented shops, plus the real September report. Seun's rule holds: only those shares and the store count, never how
   many stores were tried or finished. The free check is the site's free report (4 customers, 48 hours, within 4
   days). Change detection, as designed: a theme publish or a flow edit starts a check once Shopify and the email
   platform are connected (read only); a new app or a sale, the reader says so from Slack.
   Ads, added after approval (James, 22 Oct: "lack of ads in this whole use case"): the store's own ads are where money
   leaks first (system.md, "Your own company": an ad spending $410 a day on clicks to a sold-out page). Ad landing check
   (/recipes/ad-landing-check) opens each live ad's page from its link every morning, so no click is paid for, and
   drafts a pause or a new link for the reader's OK. Here: the ad accounts connect in step 1, the first check finds all
   6 live ads fine, and step 9 catches Ad 4 sending £410 a day to a throw that sold out overnight. */

export const study: UseCaseStudy = {
  name: 'Leak checks for ecommerce stores',
  line: 'Your own store, shopped as a new customer every week and after every change.',

  meta: {
    path: '/use-cases/leak-checks-for-ecommerce-stores',
    title: 'Leak checks for ecommerce stores, shopped by AI every week',
    description:
      'AI customers follow your ads and shop your store as new shoppers, every week and after every change. Every leak comes back with proof and the fix.',
    answer:
      'Obsession’s AI agents shop your store as new customers every week and after every change: they follow your ads, sign up, use the welcome code, leave a basket and wait. Every leak comes back with proof and the fix.',
    ogImage: '/og/leak-checks-for-ecommerce-stores.png',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Use cases', path: '/use-cases' },
      { name: 'Leak checks for ecommerce stores', path: '/use-cases/leak-checks-for-ecommerce-stores' },
    ],
  },

  hero: {
    pill: 'Early access',
    headline: 'Be the new customer of your own store, every week and after every change.',
    sub: 'Obsession’s AI agents shop your store as new customers every week and after every change: they follow your ads, sign up, use the welcome code, leave a basket and wait. Every leak comes back with proof and the fix. Leaks already there show up on the first check; a break from a new theme, app, flow or ad shows up within the hour, not when sales dip.',
    video: { youtube: 'ixCcU3W-a2M', label: 'Watch how it works', title: 'Leak checks for ecommerce stores: AI agents shop your store every week' },
    example: { chips: [] },
    flow: [
      {
        label: 'Your store in',
        title: 'Halden Home',
        items: ['Follows each live ad to its page', 'Signs up through the pop up', 'Leaves a basket', 'Leaves at checkout'],
        foot: '8 journeys every Monday, every live ad each morning',
      },
      {
        label: 'Obsession',
        title: 'A new customer for each journey',
        items: ['Its own inbox', 'A UK mobile number', 'Its own browser, on a phone and a laptop', 'Says it’s AI'],
        foot: 'Watching for 48 hours',
      },
      {
        label: 'Back to you',
        title: 'Each journey, with proof and the fix',
        items: ['Ad 4: Sold out page', 'Welcome code: Rejected', 'Basket: No reminder', 'Order: Worked'],
        foot: 'Verdict · Proof · Fix',
      },
    ],
    capture: {
      kind: 'mystery',
      source: 'usecase-store-leaks-hero',
      button: 'Check my store free',
      interest: 'mystery',
    },
  },

  /* The 10 steps, in the 3 phases the page draws them in. Each step's app window is in the page. */
  how: {
    heading: 'From the first check to every week after.',
    sub: 'How Halden Home, a homewares store in this example, finds its leaks, fixes them and catches the next break the hour it starts.',
    steps: [
      {
        title: 'The first check',
        line: 'Steps 1 to 4',
        steps: [
          {
            title: 'Name your store',
            line: 'Type its web address. Connect Shopify, your email platform and your ad accounts too, read only, and every theme publish, flow edit and new ad starts a check by itself.',
            example: 'Halden Home types haldenhome.example and connects Shopify, its email platform and its ad accounts.',
          },
          {
            title: 'Choose the journeys',
            line: 'Pick what the customer does and how long to wait. Each journey has its own deadline, so a missing email counts as a leak once its time is up.',
            example: '8 journeys, on a phone and a laptop, watched for 48 hours, and every live ad each morning. Results to Slack, #store-checks.',
          },
          {
            title: 'Each journey gets its own new customer',
            line: 'A real inbox, a real mobile number and its own browser, used for your store only. It shops the way anyone would and saves a screenshot at every step. It says it’s AI when it talks to a person.',
            example: 'Halden Home, 09:02 on Tuesday 3 Nov: signed up through the “10% off your first order” pop up, then took WELCOME10 to checkout.',
          },
          {
            title: 'Every journey, with a verdict',
            line: 'Each journey gets its verdict as soon as it’s known: a rejected code at once, a missing email when its deadline passes. A button that leads nowhere is a leak too.',
            example: '8 journeys on a phone and a laptop. 5 worked. 3 leaks: the welcome code, the basket and the checkout reminder’s button. All 6 live ads’ pages were fine.',
          },
        ],
      },
      {
        title: 'The fix',
        line: 'Steps 5 and 6',
        steps: [
          {
            title: 'Proof of every leak',
            line: 'The timeline, the screenshots and the emails themselves, on 1 link anyone can open: you, your developer or your agency.',
            example: 'A Linen Throw (£68) left in the basket at 09:40 on 3 Nov, with the marketing box ticked. No reminder by the 24 hour deadline, and none by 48 hours.',
          },
          {
            title: 'The fix, drafted',
            line: 'Each leak comes with what to change and who it’s for. Where an email never came, you get the email it should have been, drafted from what the customer did. Nothing changes in your store without your OK.',
            example:
              'The welcome code ended on 30 Sep, and the pop up still offers it: put a live code in the pop up. The basket flow has been off since 14 Oct: turn it back on, with the reminder drafted.',
          },
        ],
      },
      {
        title: 'Every week after',
        line: 'Steps 7 to 11',
        steps: [
          {
            title: 'A new customer every week',
            line: 'Every Monday, a new customer runs every journey, since a welcome only comes once. The first check stays on record, so the before is there from day 1.',
            example: 'Monday 9 Nov, after the fixes: the code works, the basket reminder comes in 1 hour and the checkout button brings the basket back.',
          },
          {
            title: 'A break caught the hour it starts',
            line: 'Publish a theme or edit a flow, and the journeys it touches run again within the hour. For a new app or anything else, tell it from Slack. You hear about a break with its proof, minutes after it starts.',
            example: 'Thursday 12 Nov, 10:00: the new theme goes live. At 10:20, Add to basket does nothing on a phone. Fixed before lunch.',
          },
          {
            title: 'Every live ad, every morning',
            line: 'Every morning, an agent opens each live ad’s page straight from the ad’s link, so no click is paid for. A page that’s sold out, broken or off the ad’s price comes back with the fix drafted for your OK.',
            example: 'Tuesday 17 Nov, 07:04: a social ad spending £410 a day sends clicks to the Linen Throw in oat, which sold out overnight. Paused at 07:40, after Ana’s OK.',
          },
          {
            title: 'The morning the sale goes live',
            line: 'Tell it when a sale or a launch goes live, and every journey runs on it: the sale code at checkout, every sale ad’s page, the sale prices in the basket.',
            example: 'Black Friday, 08:00: the sale goes live. At 08:05, BF25 is rejected at checkout; it was set to start on Saturday. Fixed by 08:25.',
          },
          {
            title: 'Last week, in 1 report',
            line: 'Every Monday: last week’s verdicts, the breaks caught and fixed, and anything still open, every line linked to its proof. Ready to forward to your agency or your team.',
            example: 'Monday 30 Nov: 8 journeys and every live ad checked last week, all worked, proof attached. 3 breaks in November, all fixed within 2 hours.',
          },
        ],
      },
    ],
  },

  problem: {
    heading: 'Your dashboards count clicks, sends and opens, not what a customer got.',
    items: [
      {
        title: 'Silence doesn’t show up',
        line: 'No report lists the email that never went. A basket flow that stopped in October looks like a quiet month.',
      },
      {
        title: 'Every change can break a journey',
        line: 'A new theme, a new app, an edited flow or a sold out product can break a journey overnight. The ads keep buying clicks, and nobody notices until sales dip.',
      },
      {
        title: 'Checking by hand doesn’t happen',
        line: 'Signing up, leaving a basket and waiting 48 hours, on a phone and a laptop, after every change, is somebody’s whole week. So it’s done once at launch, and customers find the breaks first.',
      },
    ],
    answer:
      'Obsession does the shopping for you, every week and after every change, so the first to find a break is you, with proof, not a customer.',
  },

  fit: {
    heading: 'It checks from the outside. Your tools still run the inside.',
    line: 'Nothing changes in how you run the store. Obsession shows what a customer gets; you, your developer or your agency still make the fix.',
    items: [
      {
        title: 'Your store',
        line: 'Type its address. Connect Shopify, your email platform and your ad accounts too, and a theme publish, a flow edit or a new ad starts a check by itself.',
      },
      { title: 'Each leak', line: 'Its proof and its fix, sent to whoever owns it.' },
      { title: 'Where you work', line: 'Email, Slack, or a link that drops into a ticket.' },
    ],
  },

  outputs: {
    heading: 'Every leak has an owner and a fix.',
    groups: [
      {
        items: [
          {
            label: 'Ads',
            title: 'Stop paying for clicks to a dead page',
            line: 'Every live ad’s page, opened from its link every morning, with the pause or new link drafted for your OK.',
            example: 'Halden’s Ad 4: £410 a day to a sold out throw, paused 36 minutes after it was found.',
          },
          {
            label: 'Changes',
            title: 'Ship a change, then see it checked',
            line: 'A theme publish or a flow edit, checked by a new customer within the hour.',
            example: 'Halden’s new theme: a phone basket break, found in 20 minutes.',
          },
          {
            label: 'Before launch',
            title: 'Check a theme before it’s live',
            line: 'Give it the preview link, and every journey runs on the new theme first.',
            example: 'Halden’s Black Friday theme, checked the night before.',
          },
          {
            label: 'Your agency',
            title: 'Check what your agency built',
            line: 'Every flow they run, as a customer gets it, every week, with the proof to send them.',
            example: 'The basket reminder, back on after the first check, still sending on 30 Nov.',
          },
        ],
      },
    ],
  },

  /* What real checks found, right after the invented first check: the agencies page's proof, word for word (the 2
     shares are of the stores shopped on every journey and of the leaks they had; the 4 findings are real, retold at
     invented shops, content/shops.ts). Only email was watched in those checks, so the line says so. */
  found: {
    heading: '93% of stores we shopped on every journey had a leak. 77% of the leaks were silence.',
    line: '128 stores shopped so far, watching what came by email after a sign up, a browse, a basket and a checkout. Silence is the leak your dashboards can’t show: the email that never came.',
    items: [
      {
        label: 'Fashion store · Basket left',
        verdict: 'Wrong email',
        finding: 'A buyer left a basket, and 2 hours later got a browse email instead.',
        shop: 'pellam',
      },
      {
        label: 'Cosmetics store · Basket left',
        verdict: 'Broken email',
        finding: '2 cart emails came, both with no product name and a blank total.',
        shop: 'celandre',
      },
      {
        label: 'Drinks store · New subscriber',
        verdict: 'Broken links',
        finding: 'The welcome email came, but every product link and button opened a closed development store.',
        shop: 'quinnet',
      },
      {
        label: 'Natural beauty store · Basket left',
        verdict: 'Cart silent',
        finding: 'A subscriber got the welcome, then left a basket. No cart email in 48 hours.',
        shop: 'ferula',
      },
    ],
    cta: { label: 'See a sample output', to: '/sample-output' },
  },

  /* The 3 recipes the page runs (every week, every morning, after every change), and the 1 real run. */
  more: {
    recipe: {
      label: 'Every week',
      title: 'Mystery shopper',
      line: 'Your store, journey by journey, every week, with proof.',
      cta: { label: 'Learn more', to: '/recipes/mystery-shopper' },
    },
    second: {
      label: 'Every morning',
      title: 'Ad landing check',
      line: 'Every live ad’s page, opened from its link, with the fix for any that can’t sell.',
      cta: { label: 'Learn more', to: '/recipes/ad-landing-check' },
    },
    third: {
      label: 'After every change',
      title: 'Website audit',
      line: 'A new customer after every release, with the fix for any break.',
      cta: { label: 'Learn more', to: '/recipes/website-audit' },
    },
    sample: {
      label: '1 real run',
      title: 'Sample output',
      line: 'A real store check from September 2026, shown in every format it can arrive in.',
      cta: { label: 'See it', to: '/sample-output' },
    },
  },

  fine: 'Halden Home and haldenhome.example, Kilnworth, the people, the phone number, the ads and every figure on their screens are made up. The 93%, the 128 stores and the 77% are real, the 4 findings come from real checks with every store, brand and product changed, and the sample output is a real run. Shopify and Slack are trademarks of their owners, named to show where a store runs and where results go.',

  faq: {
    heading: 'What ecommerce teams ask.',
    items: [
      {
        q: 'What does Obsession do for an ecommerce store?',
        a: 'Obsession’s AI agents shop your store as new customers every week and after every change: they follow your ads, sign up, use the welcome code, leave a basket and wait. Every leak comes back with proof and the fix.',
      },
      {
        q: 'What counts as a leak?',
        a: 'Anything a customer should get and doesn’t, by a deadline you set: an ad sending clicks to a sold out or broken page, a welcome email that never comes, a code rejected at checkout, a basket or checkout with no reminder, a button that opens an empty basket, a link to a closed store.',
      },
      {
        q: 'What if we meant it?',
        a: 'Mark it as intended, and it stops counting as a leak. With your email platform connected, it reads each flow’s own filters first, so a reminder held back on purpose shows as held back, not silent.',
      },
      {
        q: 'Which journeys can it check?',
        a: 'Any a customer can take: the page behind each live ad, the pop up and its code, the welcome email, texts, browsing, a basket, a checkout, logging in, an order and its refund, a back in stock alert, a question to support. On a phone, a laptop or both.',
      },
      {
        q: 'Does it check our ads?',
        a: 'Yes. Connect your ad accounts, read only, and every morning it opens each live ad’s page straight from the ad’s link, so no click is paid for. A page that’s sold out, broken or off the ad’s offer or price comes back with the fix drafted: pause the ad or change its link, live after your OK.',
      },
      {
        q: 'How often does it check?',
        a: 'As often as you choose: every week, and again after every change, such as a new theme, a new app, an edited flow or a sale going live.',
      },
      {
        q: 'How does it know the store changed?',
        a: 'Connect Shopify, your email platform and your ad accounts, and a theme publish, a flow edit or a new ad starts a check of the journeys it touches; several publishes in an hour make 1 check. For a new app or a sale, tell it from Slack. To check a theme before it’s live, give it the preview link.',
      },
      {
        q: 'Do we need to share a login?',
        a: 'No. It shops from the outside, like any customer. Connecting Shopify, your email platform and your ad accounts, read only, is your choice: it starts a check when something changes, and lets each fix name the setting behind the leak.',
      },
      {
        q: 'What does our team have to do?',
        a: 'Type the store’s address, or connect Shopify, your email platform and your ad accounts, in a few minutes. Fund a card only if you want orders placed. After that, read the alerts.',
      },
      {
        q: 'Will the checks clutter our numbers?',
        a: 'No. Every agent is labelled, so you can filter them out of your lists and reports. Every order is marked as an AI test in its order note, kept out of your ad conversions, reviews and email lists, and refunded. Ads are opened from their links, never clicked, so your ad numbers stay true.',
      },
      {
        q: 'Does it place real orders?',
        a: 'If you choose. An order goes on a card you fund, capped to that order, and is refunded through your normal process. It never uses fake payment details.',
      },
      {
        q: 'What if a CAPTCHA or a bot wall stops it?',
        a: 'It stops too, and the check names the step it couldn’t test. It never gets round one.',
      },
      {
        q: 'Does it talk to my team?',
        a: 'Only if a journey needs it, like a question to support. When it talks to a person, by chat, email or phone, it says it’s AI from Obsession.',
      },
      {
        q: 'Who sees what it finds?',
        a: 'You, and anyone you send a proof link to. A check of your own store is private by default; Obsession shares what companies did, never who asked.',
      },
      {
        q: 'How is this different from a one-off audit?',
        a: 'An audit sees your store on one day. Obsession checks it every week, and again after each change it sees or you tell it about, so a break from Thursday’s theme is caught on Thursday.',
      },
      {
        q: 'How is this different from uptime monitoring?',
        a: 'Uptime monitoring tells you the site loads. Obsession tells you a customer got the email, the code worked and the basket was remembered.',
      },
      {
        q: 'Do I have to be on Shopify?',
        a: 'No. It shops any store a customer can reach. On Shopify, connecting it lets a theme publish start a check by itself.',
      },
    ],
  },

  final: {
    heading: 'Check your store free.',
    sub: 'Name your store. 4 new customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days, with proof and the fix for each leak.',
    capture: {
      kind: 'mystery',
      source: 'usecase-store-leaks-final',
      button: 'Check my store free',
      interest: 'mystery',
    },
    link: { label: 'See everything agents do for marketing teams', to: '/marketing' },
  },
}

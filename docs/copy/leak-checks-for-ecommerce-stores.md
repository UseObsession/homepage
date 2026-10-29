# Leak checks for ecommerce stores: the copy

Draft 3, 22 Oct 2026: draft 2 (revised after 3 adversarial reviews, summary and rejections at the end) with James's decisions. The page at `/use-cases/leak-checks-for-ecommerce-stores`, in the same order and the same pieces as `/use-cases/leak-checks-for-retention-agencies`. Every word the page will show is here, including the words inside each step's app window.

**Reader:** the owner, head of ecommerce or retention lead at a Shopify brand, checking their own store.

**The offer** (system.md §5, Later revenue sources, 2; `shopify-store-checks.html`): AI agents shop your store every week, and again after every change (a new theme, a new app, an edited flow). Every leak or break comes back with proof and its fix.

**1 store carries the page**, as Larch & Lye carries the agencies page: **Halden Home**, a UK homewares store (throws, candles), at `haldenhome.example`. Its head of ecommerce is Ana Ruiz; its Shopify agency is Kilnworth, where Kit Doyle builds its flows. All invented.

**Proof, not receipt.** The agencies page says "receipt". To a store owner a receipt is the order email, so this page says "proof" throughout and keeps "receipt" off it.

## Ads, added after approval (James, 22 Oct)

James: "theres lack of ads in this whole use case, like not considered at all". Ads were missing because the 2 briefed sources frame the store check around email flows and theme or app changes. But the store's own ads are where money leaks first: system.md, "Your own company", gives the example of an ad spending $410 a day on clicks to a sold-out page. The product does it: Ad landing check (`/recipes/ad-landing-check`) opens each live ad's page from its link every morning, so no click is paid for, and drafts a pause or a new link for your OK. A new ad in the connected account starts a check (system.md, the Trigger row). James approved the plan below; the words are in `src/content/usecases/leak-checks-for-ecommerce-stores.ts`, which wins over this doc where they differ.

- **Answer, hero sub and FAQ 1:** "they follow your ads, sign up, use the welcome code, leave a basket and wait". In the sub, a break comes "from a new theme, app, flow or ad".
- **Description** (144): AI agents follow your ads and shop your store as new customers, every week and after every change. Every leak comes back with proof and the fix.
- **Hero flow:**
  - Your store in: Follows each live ad to its page · Signs up through the pop up · Leaves a basket · Leaves at checkout.
  - Foot: "8 journeys every Monday, every live ad each morning".
  - Back to you: Ad 4: **Sold out page** · Welcome code: **Rejected** · Basket: **No reminder** · Order: **Worked**.
- **Problem:**
  - Heading: "Your dashboards count clicks, sends and opens, not what a customer got."
  - The change card: "A new theme, a new app, an edited flow or a sold out product can break a journey overnight. The ads keep buying clicks, and nobody notices until sales dip."
- **Fit, Your store:** "Connect Shopify, your email platform and your ad accounts too, and a theme publish, a flow edit or a new ad starts a check by itself."
- **Step 1:** connect the ad accounts too, read only (in the API slot of the window; a row "Ad accounts · 6 live ads · Connected"), and every new ad starts a check.
- **Step 2:**
  - The window adds "Every morning at 07:00: Each live ad's page, from its link: 6 ads".
  - The leak rule: "An ad whose page is sold out, broken or off its price".
- **Step 4:** "All 6 live ads' pages were fine."
- **New step 9, Every live ad, every morning:**
  - The line: "Every morning, an agent opens each live ad's page straight from the ad's link, so no click is paid for. A page that's sold out, broken or off the ad's price comes back with the fix drafted for your OK."
  - Example: Tuesday 17 Nov, 07:04, a social ad spending £410 a day sends clicks to the Linen Throw in oat, which sold out overnight. Paused at 07:40, after Ana's OK.
  - Window: Ad 4's verdict, the 6 ads (spend a day, page, stock), the drafted fix (pause Ad 4, or point it at the throw in sand), and the Change link and Pause Ad 4 buttons.
- **Step 10, the sale:**
  - Every sale ad's page is checked too.
  - The tile reads "Sale ads 14 of 14", in place of banner links.
- **Step 11, the report:**
  - 3 breaks caught in November (the theme, Ad 4 and BF25), all fixed within 2 hours.
  - A 17 Nov row in the report.
- **Outputs:** an Ads card, "Stop paying for clicks to a dead page", takes the Sales card's place. Example: Halden's Ad 4, £410 a day to a sold out throw, paused 36 minutes after it was found.
- **FAQ:**
  - New: "Does it check our ads?"
  - Ads are added to what counts as a leak, which journeys, how it knows the store changed, the login, the team's part, and clutter ("Ads are opened from their links, never clicked, so your ad numbers stay true").
- **More:** 4 link cards: Mystery shopper (every week), Ad landing check (every morning), Website audit (after every change), Sample output.

## James's decisions (22 Oct)

1. **The name:** Leak checks for ecommerce stores (James). It pairs with "Leak checks for retention agencies". "Lead leaks" stays the speed to lead recipe, `/recipes/lead-leaks`, which isn't touched.
2. **"AI checkout tests"** is too narrow (James). The page doesn't use it, and the recipe `/recipes/ai-checkout-test` comes off the site (its address redirects to /recipes; the marketing page's Ecommerce tab, which showed it, goes too).
3. **Price:** not on the page (James). The price question is out of the FAQ.
4. **128 stores:** 128 everywhere (James). The agencies page said 1,500 for the same real proof; it now says 128 too.
5. **The Shopify App Store.** The memo sells it through the App Store. The page says "connect Shopify" and doesn't claim a listing.
6. **The $28+ billion market** stays off the page: no source was found.

---

## Meta

- **Name:** Leak checks for ecommerce stores
- **Line** (menus, footer, use cases index): Your own store, shopped as a new customer every week and after every change.
- **Path:** `/use-cases/leak-checks-for-ecommerce-stores`
- **Title** (58): Leak checks for ecommerce stores, shopped by AI every week
- **Description** (150): AI agents shop your store as new customers every week and after every change to its theme, apps or flows. Each leak comes back with proof and the fix.
- **Answer:** Obsession’s AI agents shop your store as new customers every week and after every change: they sign up, use the welcome code, leave a basket and wait. Every leak comes back with proof and the fix.
- **Breadcrumb:** Home › Resources › Use cases › Leak checks for ecommerce stores

## Hero

- **Pill** (content; the page draws its own): Early access
- **On the page, above the headline:** Use cases / Ecommerce stores
- **Headline:** Be the new customer of your own store, every week and after every change.
- **Sub:** Obsession’s AI agents shop your store as new customers every week and after every change: they sign up, use the welcome code, leave a basket and wait. Every leak comes back with proof and the fix. Leaks already there show up on the first check; a break from a new theme, app or flow shows up within the hour, not when sales dip.

**The flow** (3 stops, left to right):

| Stop | Kicker | Title | Items | Foot |
|---|---|---|---|---|
| 1 | Your store in | Halden Home | Signs up through the pop up · Leaves a basket · Leaves at checkout · Places an order | 8 journeys, every Monday and after every change |
| 2 | Obsession | A new customer for each journey | Its own inbox · A UK mobile number · Its own browser, on a phone and a laptop · Says it’s AI | Watching for 48 hours |
| 3 | Back to you | Each journey, with proof and the fix | Welcome code: **Rejected** · Basket: **No reminder** · Checkout reminder: **Empty basket** · Order: **Worked** | Verdict · Proof · Fix |

**The form** (in the content; the page's final section draws it):
- Button: Check my store free
- Label: Your store’s web address
- Placeholder: Your store, e.g. store.example
- Small print: Free for your own store: 4 new customers, 48 hours watched, what happened within 4 days. Leave it blank to join the waitlist.
- Done: “Got it. We’ll start with {store}.” / “We’ll email {email} when the check starts, and send what happened within 4 days.”

## The problem (drawn right after the hero)

- **Kicker:** Why nobody sees it
- **Heading:** Your dashboards count sends and opens, not what a customer got.

| Title | Line |
|---|---|
| Silence doesn’t show up | No report lists the email that never went. A basket flow that stopped in October looks like a quiet month. |
| Every change can break a journey | A new theme, a new app or an edited flow can break a journey overnight, and nobody notices until sales dip. |
| Checking by hand doesn’t happen | Signing up, leaving a basket and waiting 48 hours, on a phone and a laptop, after every change, is somebody’s whole week. So it’s done once at launch, and customers find the breaks first. |

- **Answer** (bold to the first comma): **Obsession does the shopping for you,** every week and after every change, so the first to find a break is you, with proof, not a customer.

## Fit (same section, under the problem)

- **Kicker:** Outside in
- **Heading:** It checks from the outside. Your tools still run the inside.
- **Line:** Nothing changes in how you run the store. Obsession shows what a customer gets; you, your developer or your agency still make the fix.

| Title | Line |
|---|---|
| Your store | Type its address. Connect Shopify and your email platform too, and a theme publish or a flow edit starts a check by itself. |
| Each leak | Its proof and its fix, sent to whoever owns it. |
| Where you work | Email, Slack, or a link that drops into a ticket. |

## How it works

- **Kicker:** Step by step
- **Heading:** From the first check to every week after.
- **Sub:** How Halden Home, a homewares store in this example, finds its leaks, fixes them and catches the next break the hour it starts.

### Phase 1: The first check (steps 1 to 4)

**1. Name your store**
- Line: Type its web address. Connect Shopify and your email platform too, read only, and every theme publish and flow edit starts a check by itself.
- Example: Halden Home types haldenhome.example and connects Shopify and its email platform.
- Screen, “New check · Your store”: 4 ways in (Type its address, selected · Connect Shopify: themes and discount codes · Connect your email platform: flows · API: send changes as they happen). Field “Your store”: Halden Home, haldenhome.example. Two rows: Shopify, tag Connected, “Read only: theme publishes and discount codes”; Email platform, tag Connected, “Read only: flows and their settings”. Footer: “Ready to check · Each journey gets its own customer · 8 journeys”, the 8 counting up.

**2. Choose the journeys**
- Line: Pick what the customer does and how long to wait. Each journey has its own deadline, so a missing email counts as a leak once its time is up.
- Example: 8 journeys, on a phone and a laptop. Watch for 48 hours. Results to Slack, #store-checks.
- Screen, “New check · Halden Home · Journeys”:
  - At your store, the customer: Signs up through the pop up ✓ · Uses the welcome code at checkout ✓ · Opts in to texts ✓ · Browses and leaves ✓ · Leaves a basket ✓ · Leaves at checkout ✓ · Logs in with a code ✓ · Places an order, then a refund ✓ · Asks support a question ☐ · Asks for a back in stock alert ☐
  - What counts as a leak: No welcome email within *1 hour* · The welcome code rejected at checkout · No text within *1 hour* of opting in · No basket or checkout reminder within *24 hours* · Any link that doesn’t open the live store
  - Shop on: A phone · A laptop · **Both**
  - Watch: 24 hours · **48 hours** · 7 days
  - Afterwards: Stop · **Every Monday and after every change**
  - Results: Slack #store-checks

**3. Each journey gets its own new customer**
- Line: A real inbox, a real mobile number and its own browser, used for your store only. It shops the way anyone would and saves a screenshot at every step. It says it’s AI when it talks to a person.
- Example: Halden Home, 09:02 on Tuesday 3 Nov: signed up through the “10% off your first order” pop up, then took WELCOME10 to checkout.
- Screen, “Halden Home · Welcome code”: identity card, tag “Customer 7C21”: Identity, AI, says so to a person · Inbox halden.7c21@test.useobsession.com · Mobile +44 7700 900418 · Browser, its own session, on a phone, Leeds. Log: 09:02:04 Opened the store · 09:02:11 Found the 10% pop up · 09:02:30 Signed up · 09:04:12 WELCOME10 arrived · 09:06:40 Added a Linen Throw · 09:07:15 Code rejected at checkout. Beside it, the checkout page at haldenhome.example: Linen Throw, oat, £68.00 · Discount code: WELCOME10 · “This code isn’t valid.”

**4. Every journey, with a verdict**
- Line: Each journey gets its verdict as soon as it’s known: a rejected code at once, a missing email when its deadline passes. A button that leads nowhere is a leak too.
- Example: 8 journeys on a phone and a laptop. 5 worked. 3 leaks: the welcome code, the basket and the checkout reminder’s button.
- Screen, “Halden Home · First check · Results”: tiles Worked **5** of 8 · Silent **1** · Broken **2** · Checks run **16**. Table, Journey / Phone / Laptop / Verdict:

| Journey | Phone | Laptop | Verdict |
|---|---|---|---|
| Welcome email | 2 min | 2 min | Worked |
| Welcome code | Rejected | Rejected | Broken |
| Texts | 1 min | 1 min | Worked |
| Browse | 3 h | 3 h | Worked |
| Basket | none | none | Silent |
| Checkout | 1 h, empty basket | 1 h, empty basket | Broken |
| Log in | 20 s | 20 s | Worked |
| Order | 40 s | 40 s | Worked |

  Small print: 16 of 16 checks done. The 2 orders were marked as AI tests and refunded.

### What real checks found (after step 4)

- **Kicker:** What real checks found
- **Heading:** 93% of stores we shopped on every journey had a leak. 77% of the leaks were silence.
- **Line:** 128 stores shopped so far, watching what came by email after a sign up, a browse, a basket and a checkout. Silence is the leak your dashboards can’t show: the email that never came.
- The 4 real findings, retold at invented shops (`content/shops.ts`), word for word as on the agencies page:
  - **Wrong email** · Fashion store · Basket left: A buyer left a basket, and 2 hours later got a browse email instead.
  - **Broken email** · Cosmetics store · Basket left: 2 cart emails came, both with no product name and a blank total.
  - **Broken links** · Drinks store · New subscriber: The welcome email came, but every product link and button opened a closed development store.
  - **Cart silent** · Natural beauty store · Basket left: A subscriber got the welcome, then left a basket. No cart email in 48 hours.

### Phase 2: The fix (steps 5 and 6)

**5. Proof of every leak**
- Line: The timeline, the screenshots and the emails themselves, on 1 link anyone can open: you, your developer or your agency.
- Example: A Linen Throw (£68) left in the basket at 09:40 on 3 Nov, with the marketing box ticked. No reminder by the 24 hour deadline, and none by 48 hours.
- Screen, “Proof · Halden Home · Basket”: verdict “Silent: a basket left with the marketing box ticked got no reminder.” Small: “The deadline passed with nothing, logged at the minute it ran out.” Timeline: Tue 3 Nov 09:31 Signed up, marketing box ticked · Tue 3 Nov 09:33 Welcome email · Tue 3 Nov 09:40 Left a basket: Linen Throw, £68 · Wed 4 Nov 09:40 No reminder after 24 hours (marked bad) · Thu 5 Nov 09:40 48 hours: 1 email, no reminder. Screenshots: Basket, Linen Throw (09:40) · Inbox, 1 email (welcome only) · No reminder (48 hours). Button: Copy proof link.

**6. The fix, drafted**
- Line: Each leak comes with what to change and who it’s for. Where an email never came, you get the email it should have been, drafted from what the customer did. Nothing changes in your store without your OK.
- Example: The welcome code ended on 30 Sep, and the pop up still offers it: put a live code in the pop up. The basket flow has been off since 14 Oct: turn it back on, with the reminder drafted.
- Screen, “Halden Home · 3 leaks · Fixes”: table Leak / Why / Fix / For:

| Leak | Why | Fix | For |
|---|---|---|---|
| Welcome code | WELCOME10 ended 30 Sep; the pop up still offers it | A live code in the pop up | Ana, in Shopify |
| Basket reminder | The flow has been off since 14 Oct | Turn it back on; reminder drafted | Kilnworth |
| Checkout button | It opens the basket page, which is empty | Use the checkout’s own return link | Kilnworth |

  Small: “Why” comes from the connected Shopify and email platform. From the address alone, you get what happened and the fix to try.
  Slack, #store-checks: “First check done: 8 journeys, 3 leaks, each with its fix. The welcome code is a 2 minute change.”

### Phase 3: Every week after (steps 7 to 10)

**7. A new customer every week**
- Line: Every Monday, a new customer runs every journey, since a welcome only comes once. The first check stays on record, so the before is there from day 1.
- Example: Monday 9 Nov, after the fixes: the code works, the basket reminder comes in 1 hour and the checkout button brings the basket back.
- Screen, “Halden Home · Every Monday”: tag “Checked since 3 Nov”, small “Every Monday, and after every change”. Table, Check / Code / Basket / Checkout button:

| Check | Code | Basket | Checkout button |
|---|---|---|---|
| 3 Nov, first check | Rejected | none | Empty basket |
| 9 Nov, after the fixes | Works | 1 h | Returns the basket |
| 16 Nov | Works | 1 h | Returns the basket |

  Small: “The first row is the first check, so the before is on record from day 1.”

**8. A break caught the hour it starts**
- Line: Publish a theme or edit a flow, and the journeys it touches run again within the hour. For a new app or anything else, tell it from Slack. You hear about a break with its proof, minutes after it starts.
- Example: Thursday 12 Nov, 10:00: the new theme goes live. At 10:20, Add to basket does nothing on a phone. Fixed before lunch.
- Screen, “Halden Home · Thu 12 Nov · New theme”: verdict “Break caught: on the new theme, Add to basket does nothing on a phone.” Small: “Found 20 minutes after it went live. The laptop check passed.” Timeline: 10:00 New theme published; Shopify tells Obsession · 10:05 The storefront journeys run again, on a phone and a laptop · 10:20 Phone: Add to basket does nothing. Alert sent with the proof (marked bad) · 11:40 Kilnworth fixes the basket drawer · 11:55 Checked again: added on a phone in 2 seconds. Slack, #store-checks: “The new theme went live at 10:00. On a phone, Add to basket does nothing. Proof attached.”

**9. The morning the sale goes live**
- Line: Tell it when a sale or a launch goes live, and every journey runs on it: the sale code at checkout, the banner’s links, the sale prices in the basket.
- Example: Black Friday, 08:00: the sale goes live. At 08:05, BF25 is rejected at checkout; it was set to start on Saturday. Fixed by 08:25.
- Screen, “Halden Home · Fri 27 Nov · Black Friday”: tiles Sale code BF25 **Works** (fixed 08:25) · Banner links **6** of 6 · Sale prices in the basket **8** of 8 · Early access email **Came Thursday**. Timeline: 08:00 Sale live; Ana tells Obsession from Slack · 08:01 Every journey runs on the sale · 08:05 BF25 rejected at checkout: it starts on Saturday (marked bad) · 08:20 Start date moved to today · 08:25 Checked again: BF25 takes 25% off.

**10. Last week, in 1 report**
- Line: Every Monday: last week’s verdicts, the breaks caught and fixed, and anything still open, every line linked to its proof. Ready to forward to your agency or your team.
- Example: Monday 30 Nov: 8 journeys checked last week, all worked, proof attached. 2 breaks in November, both fixed within 2 hours.
- Screen, “Report · Halden Home · Week of 23 Nov”: tiles Journeys checked **8** · Worked **8** of 8 · Breaks caught in November **2** · Open **0**. Summary: Last week, 8 journeys on a phone and a laptop, all worked · 12 Nov, Caught: Add to basket on a phone, after the new theme · 27 Nov, Caught: BF25 set to start a day late · Fixed, Since 3 Nov: the welcome code, the basket reminder, the checkout button · Open, None. Buttons: Forward to Kilnworth · Copy report link.

After step 10: link **See a sample output** → `/sample-output`.

## Outputs

- **Kicker:** Once you have the leaks
- **Heading:** Every leak has an owner and a fix.

**The handover** (left: the email; right: a phone with the drafted reminder)
- Kicker: The handover
- Heading: The proof and the fix, in 1 message to whoever owns it.
- Line: The proof shows what a customer got. The fix says what to change, and the draft shows the email that should have come.
- The email: From **Ana Ruiz, Halden Home** to **Kit Doyle, Kilnworth** · Subject **Basket reminder: nothing in 48 hours**
  > Hi Kit,
  >
  > Our check left a Linen Throw in the basket on 3 November, and no reminder came. The flow has been off since 14 October. The proof and a drafted reminder are attached.
  >
  > Can you turn it back on this week?
  >
  > Ana
  >
  > Attached: Proof: basket, 3 to 5 Nov · Draft: basket reminder
- Under it: Sent from the proof page, with the fix attached.
- Phone, kicker “The drafted reminder”, Halden Home, Email: **1 hour** Your Linen Throw is still in your basket. · **Day 1** Still thinking about the Linen Throw in oat? It’s saved in your basket. · **Day 3** Your basket is still here when you’re ready.

**4 cards**

| Label | Title | Line | Example |
|---|---|---|---|
| Sales | Fix the leaks that cost orders | Each leak names the journey it breaks: a first order, a basket, a checkout. | Halden: a dead welcome code, found on the first check. |
| Changes | Ship a change, then see it checked | A theme publish or a flow edit, checked by a new customer within the hour. | Halden’s new theme: a phone basket break, found in 20 minutes. |
| Before launch | Check a theme before it’s live | Give it the preview link, and every journey runs on the new theme first. | Halden’s Black Friday theme, checked the night before. |
| Your agency | Check what your agency built | Every flow they run, as a customer gets it, every week, with the proof to send them. | The basket reminder, back on after the first check, still sending on 30 Nov. |

## FAQ

- **Kicker:** Questions
- **Heading:** What ecommerce teams ask.

1. **What does Obsession do for an ecommerce store?** Obsession’s AI agents shop your store as new customers every week and after every change: they sign up, use the welcome code, leave a basket and wait. Every leak comes back with proof and the fix.
2. **What counts as a leak?** Anything a customer should get and doesn’t, by a deadline you set: a welcome email that never comes, a code rejected at checkout, a basket or checkout with no reminder, a button that opens an empty basket, a link to a closed store.
3. **What if we meant it?** Mark it as intended, and it stops counting as a leak. With your email platform connected, it reads each flow’s own filters first, so a reminder held back on purpose shows as held back, not silent.
4. **Which journeys can it check?** Any a customer can take: the pop up and its code, the welcome email, texts, browsing, a basket, a checkout, logging in, an order and its refund, a back in stock alert, a question to support. On a phone, a laptop or both.
5. **How often does it check?** As often as you choose: every week, and again after every change, such as a new theme, a new app, an edited flow or a sale going live.
6. **How does it know the store changed?** Connect Shopify and your email platform, and a theme publish or a flow edit starts a check of the journeys it touches; several publishes in an hour make 1 check. For a new app or a sale, tell it from Slack. To check a theme before it’s live, give it the preview link.
7. **Do we need to share a login?** No. It shops from the outside, like any customer. Connecting Shopify and your email platform, read only, is your choice: it starts a check when something changes, and lets each fix name the setting behind the leak.
8. **What does our team have to do?** Type the store’s address, or connect Shopify and your email platform, in a few minutes. Fund a card only if you want orders placed. After that, read the alerts.
9. **Will the checks clutter our numbers?** No. Every agent is labelled, so you can filter them out of your lists and reports. Every order is marked as an AI test in its order note, kept out of your ad conversions, reviews and email lists, and refunded.
10. **Does it place real orders?** If you choose. An order goes on a card you fund, capped to that order, and is refunded through your normal process. It never uses fake payment details.
11. **What if a CAPTCHA or a bot wall stops it?** It stops too, and the check names the step it couldn’t test. It never gets round one.
12. **Does it talk to my team?** Only if a journey needs it, like a question to support. When it talks to a person, by chat, email or phone, it says it’s AI from Obsession.
13. **Who sees what it finds?** You, and anyone you send a proof link to. A check of your own store is private by default; Obsession shares what companies did, never who asked.
14. **How is this different from a one-off audit?** An audit sees your store on one day. Obsession checks it every week, and again after each change it sees or you tell it about, so a break from Thursday’s theme is caught on Thursday.
15. **How is this different from uptime monitoring?** Uptime monitoring tells you the site loads. Obsession tells you a customer got the email, the code worked and the basket was remembered.
16. **Do I have to be on Shopify?** No. It shops any store a customer can reach. On Shopify, connecting it lets a theme publish start a check by itself.

## More (3 link cards, then the small print)

| Label | Title | Line | Link |
|---|---|---|---|
| Every week | Mystery shopper | Your store, journey by journey, every week, with proof. | Learn more → `/recipes/mystery-shopper` |
| After every change | Website audit | A new customer after every release, with the fix for any break. | Learn more → `/recipes/website-audit` |
| 1 real run | Sample output | A real store check from September 2026, shown in every format it can arrive in. | See it → `/sample-output` |

**Small print:** Halden Home and haldenhome.example, Kilnworth, the people, the phone number and every figure on their screens are made up. The 93%, the 128 stores and the 77% are real, the 4 findings come from real checks with every store, brand and product changed, and the sample output is a real run. Shopify and Slack are trademarks of their owners, named to show where a store runs and where results go.

## Final call to action

- **Heading:** Check your store free.
- **Sub:** Name your store. 4 new customers sign up, browse, leave a basket and stop at checkout, and every inbox is watched for 48 hours. What happened arrives within 4 days, with proof and the fix for each leak.
- Button: Check my store free · Label: Your store’s web address · Placeholder: Your store, e.g. store.example · Small print: Leave it blank to join the waitlist.
- Done: “Got it. We’ll start with {store}.” / “We’ll email {email} when the check starts, and send what happened within 4 days.”
- Question: “Where should we send it?” (pick any): Email · Slack · A PDF · A sheet
- Link: See everything agents do for marketing teams → `/marketing`

## Wiring (for the build, after approval)

- Nav label: For ecommerce stores · Bar button: Check my store free
- Sign up reader: `marketing` (the 6 readers in `signupReaders.ts` have no "store owner"; a store's ecommerce and retention team reads as Marketing, whose page has the Ecommerce tab)

---

## The reviews

3 reviewers worked independently: an ecommerce operator, a house style editor and a truth checker. Each was told to find faults, not to praise.

**Fixed**
- **Receipt → proof.** COPY.md wants "receipt" beside a plain word. The operator read "receipt" as the order email, so the page says "proof".
- **"Before your customers or your sales feel it" is gone.** The example contradicted it: the code had been dead since 30 Sep, and the theme break was live for 2 hours. The page now says leaks already there show up on the first check, and a break shows up "within the hour, not when sales dip".
- **One deadline.** The basket deadline is 24 hours everywhere, still watched to 48.
- **Verdicts as soon as they're known.** A rejected code shows at once, a missing email at its deadline.
- **Inside the time.** The Monday report covers last week, since this week's verdicts can't land on Monday. Black Friday no longer shows a basket reminder 25 minutes after launch.
- **Change detection, plainly.** A theme publish or a flow edit starts a check; a new app or a sale, tell it from Slack. Several publishes in an hour make 1 check. A preview link checks a theme before it's live: a new output card, in place of Competitors.
- **What connecting adds.** The "why" (code ended 30 Sep, flow off since 14 Oct) needs Shopify and the email platform connected, read only, and the page now says so. From the address alone, you get what happened and the fix to try.
- **False alarms.** New question: "What if we meant it?" Mark it intended. Connected, it reads the flow's filters first.
- **Clutter.** The answer now matches the site's existing recipes: agents labelled, test orders marked in the order note, kept out of ad conversions, reviews and lists, then refunded. "A little" is gone.
- **New questions:** what your team has to do, and what happens at a CAPTCHA (it stops and names the step, as Website audit says).
- **The free check matches the site's free report:** 4 new customers, sign up, browse, basket, checkout, 48 hours, within 4 days. The old "run every journey" promised more than that.
- **Copy fixes:**
  - The real sample's line says what was watched: email, across 4 journeys.
  - Rejected the Promotions tab as a leak. Marketing email belongs there.
  - "A fresh new customer" became "a new customer every week, since a welcome only comes once".
  - "The journeys it touches", not "every journey".
  - "Fixed before lunch" and "within 2 hours", not "the day it was found".
  - "Early access" is the content pill.
  - Days are spelled out.
  - "Your agency or your team", not "your founder".
  - The drafted reminder says only what the customer did (no "the one our customers buy twice").
  - Brightwork became Kilnworth, since BrightWork is a real software company.
  - "Delivered" became "Worked", since an order "delivered" reads as a parcel.
  - The small print now matches what's shown.

**Rejected, and why**
- **Name Klaviyo instead of "your email platform"** (operator). The site keeps platforms unnamed (COPY.md, 19 Oct; Home dropped Klaviyo), and the page works on any email platform.
- **Cut to about 6 steps, drop Fit** (operator). The brief is the agencies page's structure: 10 steps in 3 phases, with fit.
- **"A check of your own store isn't private"** (style editor, citing shared watches). system.md line 37 makes your own company "private by default"; shared watches are for watching competitors. The answer keeps "private by default" and adds "never who asked".
- **Hide the test.useobsession.com addresses** (truth checker: a store could filter the agents out). The real sample output already shows them. The page no longer says "filter by this domain"; it says "every agent is labelled", as Website audit does.
- **Describe the 128 stores' size and Plus share** (operator). There's no source for it.
- **"Says it's AI" spoils a support test** (operator). It's one of the three lines (the law) and stays.
- **"Leak" for the source's "gap"** (truth checker). The agencies page already says "leak" for the same real 93%.

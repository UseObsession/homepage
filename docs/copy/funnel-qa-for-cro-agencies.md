# Funnel QA for CRO agencies: the copy

Draft 3, 22 Oct 2026: draft 2 (revised after 3 adversarial reviews, summary and rejections at the end) with James's decisions on the name and the headline. The page at `/use-cases/funnel-qa-for-cro-agencies`, in the same order and the same pieces as `/use-cases/leak-checks-for-retention-agencies`. Every word the page will show is here, including the words inside each step's app window.

**Reader:** the founder or CRO audit lead at a conversion rate optimisation shop serving Shopify brands. Their words: click, landing page, pop up, opt-in rate, message match, CVR, revenue per visitor, test, variant, QA, readout, mobile and desktop. Their week (Seun, 22 Oct): a discovery call on Tuesday at 11:00, the prospect teardown built from outside on Tuesday at 14:00, pitch prep on Wednesday at 16:00, the monthly readout.

**The hook:** your audit screenshots the pop up; nobody signs up through it. Before the pitch, an agent follows the brand's live ad as a new customer and signs up through the pop up: does the offer match the ad, what shows on screen, minutes to the first email, does the code work at checkout. It comes back as a slide for the pre-call teardown. After the win, every A/B test variant is checked past the sign up before launch and every morning it's live, and the whole funnel every week.

**The offer (James, 22 Oct):** 5 stores, proof in 4 days, no price. His framing: "Name 3 brands you're about to pitch; get the after-submit section for each, with proof, in 4 days." The 5 are 3 brands they're about to pitch and 2 of their own clients, with each client's OK (confirmed by James, 22 Oct), the retention page's split. Both language reviewers flagged "after-submit" (a hyphenated coinage the site doesn't use, and not what CRO people say), so the page calls it "a slide" of "what happened after the sign up". The offer is unchanged.

**James's rule governs:** sell Obsession as designed (`obsession/system.md`), with no "what's built today" caveats. Seun's flags on baskets, SMS, weekly re-checks, the ads lens and the word "free" are not applied to the copy; her research (buyers, pains, objections, their week) is.

**1 brand carries the page**, as Larch & Lye carries the retention page: **Ferrow Coffee**, a US coffee subscription brand at `ferrowcoffee.example`, on an unnamed CRO agency's pipeline. Its founder is Sam Ortega; the agency's audit lead is Jonah. All invented, and the 9 brand names searched on 22 Oct with no real company found. Its ad promises 20% off the first bag, its pop up offers 15%, the code arrives 7 hours later, and checkout rejects it on a subscription.

**Choices in the words**
- **Proof, not receipt.** The agent goes as far as checkout, where "receipt" reads as the order email, so this page says "proof", as the ecommerce stores page does.
- **New customer, everywhere.** COPY.md's differentiator. A "visit" is the act.
- **Sign up in the lines.** COPY.md: buyers say "sign up". "Submit" stays where it is the testing tool's word (the problem card, the testing card) and in the log.
- **The ad's page, from the ad's own link.** A prospect's ads aren't the agency's, so no click is paid for (system.md §4, the law). The agent reads the brand's live ads in public, as Ad tracking does, and opens each one's page from the ad's own link, so it sees the page and pop up an ad visitor sees. A brand with no live ads starts from its home page.
- **Leak** stays inside the page (what counts as a leak, leaks open): it is CRO's word too ("a leaky funnel"). Only the name moved off it.

## James's decisions (22 Oct)

1. **The 5 stores:** 3 brands they're about to pitch and 2 of their own clients, with each client's OK.
2. **The name:** Funnel QA for CRO agencies, not "Leak checks", which the retention and ecommerce pages already carry. QA is the reader's own word.
3. **The headline:** "Be the new customer behind every pop up." Draft 2's was 17 words; the sub carries the pitch, the tests and the weekly checks.

---

## Meta

- **Name:** Funnel QA for CRO agencies
- **Line** (menus, footer, use cases index): Every pop up you pitch or test, checked past the sign up as a new customer, with proof.
- **Path:** `/use-cases/funnel-qa-for-cro-agencies`
- **Title** (55): Funnel QA for CRO agencies, from the pop up to checkout
- **Description** (152): AI agents follow a brand’s live ad as new customers and sign up through the pop up. See what comes after it before you pitch, and in every test you run.
- **Answer:** Obsession’s AI agents follow any brand’s live ad as new customers, sign up through the pop up and take the code to checkout, then show you what happened, with proof. Before a pitch, you get a slide for your teardown; after you win, they check every test variant past the sign up, every morning it’s live, and the whole funnel every week.
- **Breadcrumb:** Home › Resources › Use cases › Funnel QA for CRO agencies

## Hero

- **Pill** (content; the page draws its own): Early access
- **On the page, above the headline:** Use cases / CRO agencies
- **Headline:** Be the new customer behind every pop up.
- **Sub:** Your audit screenshots the pop up. Obsession’s AI agents follow the brand’s live ad as new customers, sign up through it and take the code to checkout, then show you what happened, with proof. Before a pitch, you get a slide for your teardown. After you win, every test variant is checked past the sign up, every morning it’s live, and the whole funnel every week.

**The flow** (3 stops, left to right):

| Stop | Kicker | Title | Items | Foot |
|---|---|---|---|---|
| 1 | Your pipeline in | Brands to pitch | Ferrow Coffee · Brindlecup · Oskerby Roasters · Tallis & Ash | 12 in November’s pipeline |
| 2 | Obsession | A new customer at each brand | From the page behind a live ad · Its own inbox · Its own browser, on mobile · Says it’s AI | Watching for 48 hours |
| 3 | Back to you | What happened after the sign up | Ferrow Coffee: **Code rejected** · Brindlecup: **No email** · Oskerby Roasters: **No leak** · Tallis & Ash: **Off the ad’s offer** | Offer · On screen · First email · Code |

**The form** (in the content; the page's final section draws it):
- Button: Check 5 brands free
- Label: A brand’s web address
- Placeholder: A brand, e.g. brand.example
- Small print: 3 brands you’re about to pitch and 2 of your clients, each with its slide within 4 days, with proof. Leave it blank to join the waitlist.
- Done: “Got it. We’ll start with {store}.” / “We’ll email {email} to ask for the other 4, and to confirm any client’s store is checked with their OK.”

## The problem (drawn right after the hero)

- **Kicker:** Why nobody sees past the sign up
- **Heading:** Your tools see the pop up and the order. Not what happens in between.

| Title | Line |
|---|---|
| The teardown stops at the page | Every pre-sale audit is built from outside: the pages, the heuristics, the speed. None of it shows what came after the sign up. |
| Your tools wait for a login | Heatmaps, recordings and your testing tool run only after the brand signs. Before the pitch, you see the page from outside and nothing after it. |
| QA stops at the submit | Your QA checks each variant renders and submits. Waiting for the email and trying the code at checkout, on every variant, every morning a test is live, is a strategist’s whole week. So nobody does it. |

- **Answer** (bold to the first comma): **Obsession’s AI agents sign up as new customers at every brand,** from the page behind its live ads, so you see what happens after the sign up, with proof, before anyone hands you a login.

## Fit (same section, under the problem)

- **Kicker:** Before the yes, and after it
- **Heading:** It checks the step after the sign up. Your audit still covers the page.
- **Line:** Nothing changes in how you research, test or report. Obsession shows what a new customer gets after the sign up; your team still owns the hypothesis, the test and the call.

| Title | Line |
|---|---|
| Before the pitch | Name the brands. Each comes back as a slide for the teardown, with proof. |
| After you win | Every variant checked past the sign up every morning it’s live, and the whole funnel every week. |
| Where you work | Slack, the teardown deck, or a link in the monthly readout. |

## How it works

- **Kicker:** Step by step
- **Heading:** From a prospect’s pop up to a test you can trust.
- **Sub:** How the agency in this example finds what happens after Ferrow Coffee’s pop up, wins the account and checks every variant it tests.

### Phase 1: Before the pitch (steps 1 to 4)

**1. Name the brands**
- Line: Paste a list, upload a CSV, connect Clay or call the API. Any brand you can name, with no directory to check first.
- Example: The agency pastes the 12 brands in November’s pipeline, 4 of them coffee. Ferrow Coffee’s founder has a call booked for Thursday.
- Screen, “New check · Add brands”: 4 ways in (Paste a list: Names or websites, selected · Upload a CSV: One column of websites · Connect Clay: A table and a view · API: Send brands as you go). Field “Pipeline: November”: Ferrow Coffee, ferrowcoffee.example, Coffee, tag **Call Thu** · Brindlecup, brindlecup.example, Coffee, tag To pitch · Oskerby Roasters, oskerbyroasters.example, Coffee, tag To pitch · Tallis & Ash, tallisandash.example, Coffee, tag To pitch. Small: “And 8 more from the list you pasted.” Footer: “Ready to check · Each brand gets its own new customer · 12 brands”, the 12 counting up.

**2. Choose where the visit starts**
- Line: Pick where each visit starts, what the customer does and how long to watch. Each step has its own deadline, so a missing email counts as a leak once its time is up.
- Example: Start from the page behind each brand’s live ad. Sign up through the pop up on mobile, take the code to checkout and watch for 48 hours. Results to Slack, #new-business.
- Screen, “New check · Pipeline: November · Configure”:
  - Each visit starts from (a dropdown; the others are the home page or a page you name): **The page behind a live ad**
  - At each brand, the customer: Signs up through the pop up ✓ · Takes the code to checkout ✓ · Signs up through the footer form ☐ · Opts in to texts ☐ · Leaves a basket ☐ · Places an order ☐
  - What counts as a leak: The pop up breaks message match with the ad · Nothing on screen after the sign up · No email within *1 hour* · The promised code not in the email · The code rejected at checkout
  - Device: **Mobile** · Desktop · Both
  - Watch: 24 hours · **48 hours** · 7 days
  - Afterwards: **Stop** · Check every week
  - Results: Slack #new-business

**3. Each brand gets its own new customer**
- Line: A real inbox, a real mobile number and its own browser, used for that brand only. It opens the page behind the brand’s live ad from the ad’s own link, so no click is paid for, then signs up and shops the way anyone would, saving a screenshot at every step. It says it’s AI when it talks to a person.
- Example: Ferrow Coffee, 10:12 on Monday 2 Nov: opened the page behind its “20% off your first bag” ad, then signed up through the pop up on mobile. The pop up offered 15%.
- Screen, “Pipeline · Ferrow Coffee”: identity card, Ferrow Coffee, tag “Customer 5B2C”: Identity, AI, says so to a person · Inbox ferrowcoffee.5b2c@test.useobsession.com · Mobile +1 303 555 0143 · Browser, its own session, on mobile, Denver. Log: 10:11:48 Found 3 live ads in public · 10:12:02 Opened the 20% ad’s page from its link · 10:12:07 No discount in the cart: the link carried no code · 10:12:19 Pop up: 15% off your first bag · 10:12:41 Signed up; “Check your inbox” shown. Beside it, the page at ferrowcoffee.example: the pop up “15% off your first bag”, the email filled in, the button “Get my 15%”.

**4. What happened after the sign up, brand by brand**
- Line: After 48 hours, every brand has its slide: the offer against the ad, what showed on screen, the minutes to the first email and the code at checkout. A form that takes the email and shows nothing is a leak too.
- Example: 12 brands done. 4 pop ups broke message match with the ad, 6 sent no email within an hour and 3 codes were rejected at checkout. 6 have 2 or more leaks, Ferrow Coffee among them.
- Screen, “Pipeline: November · Results”: tiles Pop up breaks message match **4** of 12 · No email within 1 hour **6** of 12 · Code rejected at checkout **3** of 12 · 2 or more leaks **6** of 12. Table, Brand / Offer / First email / Code / Leaks:

| Brand | Offer | First email | Code | Leaks |
|---|---|---|---|---|
| Ferrow Coffee | 15%, ad 20% | 7 h | Rejected | 3 leaks |
| Brindlecup | Matches | none | none | 2 leaks |
| Tallis & Ash | 10%, ad 15% | 4 min | Works | 1 leak |
| Oskerby Roasters | Matches | 2 min | Works | No leak |

  Small print: 12 of 12 done. Brindlecup’s pop up took the email and showed nothing, which counts as a leak too.

### What real checks found (after step 4)

- **Kicker:** What real checks found
- **Heading:** 93% of stores we shopped on every journey had a leak. 77% of the leaks were silence.
- **Line:** 128 stores shopped so far, watching what came by email after a sign up, a browse, a basket and a checkout. Silence is the leak a testing tool can’t see: the email that never came.
- The 4 real findings, retold at invented shops (`content/shops.ts`), word for word as on the retention page, with the one after a sign up first:
  - **Broken links** · Drinks store · New subscriber: The welcome email came, but every product link and button opened a closed development store.
  - **Wrong email** · Fashion store · Basket left: A buyer left a basket, and 2 hours later got a browse email instead.
  - **Broken email** · Cosmetics store · Basket left: 2 cart emails came, both with no product name and a blank total.
  - **Cart silent** · Natural beauty store · Basket left: A subscriber got the welcome, then left a basket. No cart email in 48 hours.

### Phase 2: The pitch (steps 5 and 6)

**5. A slide for the pre-call teardown**
- Line: Each brand’s slide, ready for the teardown and the paid audit after it: the ad, the pop up, the email and the checkout, each screenshot dated, on 1 link anyone can open, including the brand.
- Example: Ferrow Coffee: the ad said 20% off, the pop up 15%. The welcome email came 7 hours later, and FERROW15 was rejected at checkout on a subscription.
- Screen, “Teardown slide · Ferrow Coffee · After the sign up”: label “3 leaks”, verdict “The ad promised 20% and the pop up 15%. The code came 7 hours later and was rejected on a subscription.” Small: “Every step dated; the email kept as it arrived, with its headers.” Timeline: Mon 2 Nov 10:12 Opened the page behind the 20% ad · Mon 2 Nov 10:12 The pop up offered 15%; signed up on mobile, “Check your inbox” shown · Mon 2 Nov 11:12 No email after 1 hour (marked bad) · Mon 2 Nov 17:24 Welcome email with FERROW15, sent at 17:23 by Ferrow’s email platform, by its own headers · Mon 2 Nov 17:26 FERROW15 rejected on a subscription (marked bad). Screenshots: Ad, 20% off (10:12) · Pop up, 15% off (10:12, marked bad) · Checkout, code rejected (17:26, marked bad). Buttons: Add to the teardown · Copy proof link.

**6. The prospect beside its rivals**
- Line: Name its rivals with the list. Each gets its own new customer, so the pitch shows the brand’s sign up next to theirs.
- Example: Wednesday’s pitch prep: Ferrow’s first email came after 7 hours, and the 5 rivals named on Monday averaged 4 minutes. Of the 6, only Ferrow’s code fails on a subscription, and none shows its code on screen.
- Screen, “Pipeline · Ferrow Coffee · Beside 5 rivals”: tiles First email **7 h**, rivals 4 min · Message match with the ad **4** of 6 brands · Code works on a subscription **5** of 6 brands · Code shown on screen after the sign up **0** of 6 brands. Table, Brand / Offer / First email / Code:

| Brand | Offer | First email | Code |
|---|---|---|---|
| Ferrow Coffee · Prospect | 15%, ad 20% | 7 h | Rejected |
| Wendlow Coffee · Rival | Matches | 2 min | Works |
| Gorsedale Roasters · Rival | Matches | 6 min | Works |
| Linnet Roast · Rival | Matches | 1 min | Works |
| Mallin & Crane · Rival | 10%, ad 15% | 9 min | Works |
| Abberly Coffee · Rival | Matches | 2 min | Works |

  Slack, #new-business: “Ferrow Coffee is ready for Thursday: 3 leaks after the sign up, each with proof, beside 5 rivals. The slide is in the teardown.”

### Phase 3: After you win (steps 7 to 10)

**7. Every variant, checked before launch**
- Line: Give it each variant’s preview link. Before a test goes live, a new customer signs up through every variant on mobile and desktop, waits for the email and takes the code to checkout.
- Example: Ferrow signs, and 3 quick wins ship that week: the pop up matches the ad, the welcome email sends at once and the code works on a subscription. Test 1 shows the code on screen after the sign up. The night before launch, both variants sign up, both emails come within a minute and both codes work.
- Screen, “Ferrow Coffee · Test 1 · Before launch”: Ferrow Coffee, tag **Client since 9 Nov**, small “Launches Monday 16 Nov”. Table, Variant / On screen / First email / Code:

| Variant | On screen | First email | Code |
|---|---|---|---|
| A · Code by email | “Check your inbox” | 40 s | Works |
| B · Code on screen | “Your code: FERROW20” | 38 s | Works |

  Small: “Each variant reached from its preview link, on mobile and desktop, the night before launch.”

**8. A variant that stops working mid test**
- Line: While a test is live, a new customer signs up through every variant each morning, so a silent app update is caught that morning, with the proof, before anyone calls a winner.
- Example: Friday 20 Nov, day 5 of test 1: B is ahead on opt-in rate, not yet significant. After an overnight update to the pop up app, B takes the email and gives no code. Fixed by 09:00, and the 26 hours since the last good check are left out of both arms.
- Screen, “Ferrow Coffee · Test 1 · Fri 20 Nov”: label “Leak caught”, verdict “After an overnight update to the pop up app, variant B takes the email and gives no code.” Small: “B is ahead on opt-in rate, not yet significant. A still sends its code.” Timeline: 07:00 The morning check: a new customer signs up through A and B on mobile · 07:01 A: the code by email in 40 seconds · 07:01 B: a blank where the code should be; alert sent with the proof (marked bad) · 08:01 B: no email after 1 hour either (marked bad) · 08:40 The agency finds the app updated overnight and reconnects B · 09:00 Checked again: B shows FERROW20 and emails it in 38 seconds. Slack, #ferrow-coffee: “Test 1, variant B: since an overnight app update, the pop up takes the email and gives no code, on screen or by email. Last good check Thursday 07:00. Proof attached.”

**9. The whole funnel, every week**
- Line: Every Monday, a new customer runs the client’s funnel from the page behind its live ads: the pop up, the email and the code at checkout. The check from the pitch stays on record, so the before is there from day 1.
- Example: Ferrow, from the pitch to Cyber Monday: the first email from 7 hours to 38 seconds, and a code that works on a subscription.
- Screen, “Ferrow Coffee · Since the pitch”: Ferrow Coffee, tag **Client since 9 Nov**, small “Every Monday, and every morning a test is live”. Table, Check / Offer / First email / Code:

| Check | Offer | First email | Code |
|---|---|---|---|
| 2 Nov, the pitch check | 15%, ad 20% | 7 h | Rejected |
| 16 Nov, test 1 live | Matches | 40 s | Works |
| 30 Nov, Cyber Monday | Matches | 38 s | Works |

  Small: “The first row is the check from the pitch, so the before is on record from day 1.”

**10. The month, in 1 readout**
- Line: Every variant as a customer got it, the breaks caught and the before and after, every value linked to its proof. Ready for the monthly readout.
- Example: November: 3 quick wins shipped, both variants of test 1 checked every morning, 1 break caught and fixed the same morning, none open.
- Screen, “Readout · Ferrow Coffee · November”: tiles Quick wins shipped **3** · Variants checked every morning **2** · Caught and fixed the same morning **1** · Leaks open **0**. Summary: Fixed, The pop up matches the ad; the welcome email sends at once; the code works on a subscription · Caught, Test 1: B gave no code after an overnight app update, fixed the same morning · Open, None · Against 5 rivals, The fastest first email of the 6 · Before and after, 2 Nov: first email after 7 hours, code rejected. 30 Nov: 38 seconds, code works. Buttons: Add to the readout · Copy readout link.

After step 10: link **See a sample output** → `/sample-output`.

## Outputs

- **Kicker:** Once you have the leaks
- **Heading:** What you do with the leaks.

**The opener** (left: the email; right: a phone with the plan)
- Kicker: The opener
- Heading: Their own funnel and your first test, in 1 email.
- Line: The proof shows what a new customer gets today. Your plan shows what you’d change first.
- The email: From **Jonah, your agency** to **Sam Ortega, Ferrow Coffee** · Subject **Your 20% ad, and a 15% pop up**
  > Hi Sam,
  >
  > Before Thursday’s call, we followed your “20% off your first bag” ad as a new customer on mobile. The pop up offered 15%, the code came 7 hours later, and it was rejected on a subscription.
  >
  > I’ve attached the slide and the first test we’d run. Worth walking through on Thursday?
  >
  > Jonah
  >
  > Attached: Proof: Ferrow Coffee, 2 to 4 Nov · Plan: after the sign up
- Under it: Written by your audit lead, from the brand’s proof.
- Phone, kicker “Your plan”, Ferrow Coffee, Plan: **Quick win** Match the pop up to the ad: 20% off your first bag. · **Quick win** Send the code at once, and let it work on a subscription. · **Test 1** Show the code on screen after the sign up.

**4 cards**

| Label | Title | Line | Example |
|---|---|---|---|
| Winning clients | Lead the teardown with what happens after the sign up | Name the brands you’re about to pitch; each comes back as a slide, with proof. | Ferrow Coffee: 20% in the ad, 15% in the pop up, a code that fails on a subscription. |
| Testing | Check every variant past the submit | Each variant’s sign up, email and code, before launch and every morning it’s live. | Test 1, B: ahead on opt-in rate and giving no code, caught that morning. |
| Paid traffic | Check the page behind every ad | Connect a client’s ad accounts, read only, and every live ad’s page is opened from its link each morning. | A client’s ad sending clicks to a sold out bag, found at 07:04. |
| Reporting | Put the customer in the readout | Every variant as a customer got it, every value linked to its proof. | Ferrow, November: 3 quick wins, 1 break caught the same morning. |

## FAQ

- **Kicker:** Questions
- **Heading:** What CRO agencies ask.

1. **What does Obsession do for CRO agencies?** Obsession’s AI agents follow any brand’s live ad as new customers, sign up through the pop up and take the code to checkout, then show you what happened, with proof. Before a pitch, you get a slide for your teardown; after you win, they check every test variant past the sign up, every morning it’s live, and the whole funnel every week.
2. **We do conversion, not email. Why does this matter to us?** Because the conversion isn’t finished at the sign up. A code that never comes, or one rejected at checkout, can lose the first order from your highest intent traffic: paid visitors who already gave their email. That’s CVR and revenue per visitor, in the step neither your audit nor your testing tool can see.
3. **Our audit already covers pop ups. What does this add?** Your audit reviews the pop up as it looks. Obsession signs up through it as a new customer from the brand’s own ad, then records what arrives, when, and whether the code works at checkout, with proof the brand can open.
4. **Can’t we sign up with a spare inbox?** A VA can sign up through 12 pop ups in an afternoon. Obsession also keeps every inbox open for 48 hours, tries each code on a subscription the minute it lands, keeps each email as it arrived with its headers, and does it again every morning a test is live.
5. **What do the 5 free checks cover?** 3 brands you’re about to pitch and 2 of your clients, with their OK. At each, an AI agent follows a live ad as a new customer, signs up through the pop up, takes the code to checkout and watches the inbox for 48 hours. You get each brand’s slide within 4 days, with proof, in any format.
6. **Do our clients have to agree?** Yes. A client’s store is checked with the client’s OK, and they install nothing. A brand you’re about to pitch you can check before the call.
7. **Does it click the brand’s ads?** No. It reads the brand’s live ads in public and opens each one’s page from the ad’s own link, so it sees what an ad visitor sees and no click is paid for. A brand with no live ads starts from its home page.
8. **How does it reach each variant?** Through your testing tool’s preview link for each one. A new customer signs up through every variant before launch and every morning while the test is live, so a silent app update is caught that morning.
9. **Will it skew the test?** Barely. It reaches each variant through its preview link, a few visits a day at most, and every visit carries a parameter you can add to the test’s and the client’s exclusions.
10. **Will this move ROAS?** It won’t change a bid. It stops paid clicks that became sign ups from dying at checkout, and with a client’s ad accounts connected, read only, it opens every live ad’s page each morning and flags any that’s sold out, broken or off the ad’s offer.
11. **What counts as a leak?** Anything a new customer should get and doesn’t, by a deadline you set: a pop up that breaks message match with the ad, nothing on screen after the sign up, no email within the hour, the promised code missing, a code rejected at checkout, a link to a closed store.
12. **Do we need the brand’s login?** No. It arrives the way any shopper would, from the brand’s own ad or page. Your testing tool and heatmaps still run inside, after the yes.
13. **Does it buy anything?** If you choose. A code check stops at checkout. A real order goes on a card you fund, never on fake payment details.
14. **Can the slide go out under our name?** Yes. The slide carries your name and logo. The proof link opens on a page anyone can check, under Obsession’s name or, with white label, yours.
15. **Will a brand or another agency know who’s asking?** Not from us. Obsession shares what a brand did, never who asked, unless you choose to be named. Your list, your settings and your slides stay yours.
16. **It’s Q4. Why now?** Because Black Friday pop ups and codes change every week this month, and nobody signs up through them again. 5 brands, 4 days, nothing to install, and the slides are ready for January, when brands review their agencies.
17. **How many stores can it check at once?** Up to 1,000 stores in 48 hours, so a whole pipeline or every client store in one go.
18. **Is it legal?** Every agent does only what any customer can do, and says it’s AI when it talks to a person. It never uses fake payment details or gets round a CAPTCHA. Any company can opt out at useobsession.com/agents. This is not legal advice.

## More (4 link cards, then the small print)

| Label | Title | Line | Link |
|---|---|---|---|
| Before the pitch | Prospect intelligence | Proof of what happens after the sign up at each brand on your list. | Learn more → `/recipes/prospect-intelligence` |
| Every test | Website audit | A new customer after every release or every morning, with a screenshot of any break. | Learn more → `/recipes/website-audit` |
| Every ad | Ad landing check | Every live ad’s page, opened from its link each morning, with the fix for any that can’t sell. | Learn more → `/recipes/ad-landing-check` |
| 1 real run | Sample output | A real store check from September 2026, shown in every format it can arrive in. | See it → `/sample-output` |

**Small print:** The agency, the brands in the 10 steps and their .example addresses, the people, the ads, the test, the phone number and every figure on their screens are made up. The 93%, the 128 stores and the 77% are real, the 4 findings come from real checks with every store, brand and product changed, and the sample output is a real run. Clay and Slack are trademarks of their owners, named to show where a list can come from and where results go.

## Final call to action

- **Heading:** Try it on 5 brands.
- **Sub:** Name 3 brands you’re about to pitch and 2 of your clients, with their OK. We’ll follow each one’s live ad as a new customer and send what happened after the sign up within 4 days, with proof.
- **Since PR 15 (23 Oct, every form is the waitlist):** the form asks for the work email first, with "Check 5 brands free" as its button, then the shared card asks for up to 5 client stores and says the rest (content/join.ts, the `clients` offer). The page's own label, placeholder, small print, done lines and format question below are gone, and so is "Start with 1; we’ll ask for the other 4.", which described the old form.
- Button: Check 5 brands free · Label: A brand’s web address · Placeholder: A brand, e.g. brand.example · Small print: Leave it blank to join the waitlist.
- Done: “Got it. We’ll start with {store}.” / “We’ll email {email} to ask for the other 4, and to confirm any client’s store is checked with their OK.”
- Question: “Which format should we send it in?” (pick any): A slide for the teardown · A PDF · Slack · A sheet · Clay columns · Email
- Link: See everything agents do for agencies → `/agencies`

## Wiring (for the build, after approval)

- Nav label: For CRO agencies · Bar button: Check 5 brands free
- Sign up reader: `agency`
- Use case order: after the retention agencies page

---

## The reviews

3 reviewers worked independently on draft 1: a sceptical CRO agency founder (12 people, Shopify Plus clients, paid audits, Intelligems and Convert), a house style editor (COPY.md, the copy lint, the prerender's lengths, the 2 sibling pages) and a truth checker (system.md, the site's recipes and pages, the real proof, the invented names, the dates and sums). Each was told to find faults, not to praise.

**The founder's verdict on draft 1:** Ferrow is believable ("exactly what I find on subscription brands") and they'd want the slide for Thursday, but steps 7 to 10 are "where I'd decide you've never run a test", and they wouldn't fill in the form: the headline sold them their own job, the proof read as email, and nothing said their pipeline stays theirs.

**Fixed**
- **The hook moved from the click to the sign up.** The founder: "My audit already covers the post-click page. The gap is past the form." New headline, sub, title and problem: "Your audit screenshots the pop up"; "Your tools see the pop up and the order. Not what happens in between."
- **The test mechanics, rewritten.**
  - B is "ahead on opt-in rate, not yet significant". Nobody calls a pop up test at day 5.
  - The broken window is left out of both arms, not one arm's morning.
  - Variants are checked every morning a test is live, since pop up apps update silently. "After every update you tell it about" is gone.
  - Variants are reached through the testing tool's preview link.
  - Skew is answered with a parameter the agency adds to its exclusions, not a claim about what testing tools exclude.
- **A believable first month.** Ferrow signs 9 Nov; 3 quick wins ship that week (message match, the email sends at once, the code works on a subscription); 1 test launches 16 Nov, in place of 3 tests in 3 weeks into Black Friday. The opener's plan splits quick wins from the test ("nobody split tests a broken code").
- **Their words:**
  - a slide for the pre-call teardown, not "a ready section for the audit deck";
  - message match;
  - opt-in rate;
  - mobile and desktop;
  - QA;
  - revenue per visitor;
  - 12 brands in the pipeline, 4 of them coffee.
- **"after-submit section"** is gone (both language reviewers): the site writes no hyphenated coinages and CRO people don't say it. The deliverable is "a slide" of "what happened after the sign up".
- **The ad, honestly:** the agent opens the page behind the ad from the ad's own link, so it sees what an ad visitor sees. The log shows the link carried no discount code, the founder's first question. A brand with no live ads starts from its home page.
- **The 7 hours, defended:** the email was sent at 17:23 by the brand's own platform, by its headers, so the delay isn't our inbox's.
- **New questions:**
  - Will this move ROAS?
  - It's Q4, why now?
  - Will a brand or another agency know who's asking? This answers "nothing says my pipeline stays mine".
  - Does it buy anything?
- **FAQ answers rewritten:**
  - "We do conversion, not email" now answers in CVR and revenue per visitor.
  - The spare inbox answer no longer pretends a VA can't do 12.
- **Rivals:** step 6's retention number (emails in 48 hours) is now "code shown on screen after the sign up, 0 of 6", which sets up test 1. The rivals are named with the list on Monday, so they have their 48 hours by Wednesday's prep.
- **Truth fixes:**
  - the subject line said "20% pop up" for a 15% pop up;
  - step 10 gave 40 and 38 seconds for 1 fact;
  - "1 hour after the update" was 80 minutes;
  - there were 2 different Test 3s;
  - the real block's line no longer implies the 77% was silence after pop up submits;
  - the capacity answer counts stores, not tests;
  - "lost" became "can lose".
- **Paid traffic** now says the client's ad accounts are connected, read only, and a link card goes to Ad landing check (it replaces Mystery shopper; Website audit covers every morning and every release).
- **The real proof** leads with the finding after a sign up (Broken links), word for word, and its line keeps "the email that never came".
- **House style:**
  - "new customer" everywhere;
  - "sign up through the pop up" in lines;
  - "readout" only for the monthly deck;
  - "funnel", not "path";
  - "Each step has its own deadline";
  - "Watch" for the wait;
  - "a spare inbox", not Gmail;
  - "Every test" on the Website audit card's label;
  - the description now has a verb (152 characters);
  - "same morning" everywhere;
  - the step 4 line follows the table's order.
- **Names:** Thornquist Coffee (close to Törnqvist, a Hamburg coffee shop) became Wendlow Coffee; Cobbold & Crane (Cobbold is an Ipswich brewing family, and this rival shows a leak) became Mallin & Crane. Both were searched with no company found.

**Rejected, and why**
- **"post-submit" and "submit" throughout** (founder). COPY.md: buyers say "sign up", so the lines do, and "submit" stays where it's the testing tool's word.
- **"QA'd" as a verb** (founder). Plain verbs: "checked".
- **"Your test scores revenue a week later. A dead code shows up as drift, not an alert."** (founder, the problem heading). It's true, but it reads as a second problem. The heading names the gap between the pop up and the order, which carries both.
- **"Your testing tool keeps preview visits out of results"** (founder). That's a claim about other companies' tools; the page claims only its own parameter.
- **Strip the ad's tracking parameters** (founder). The agent opens the ad's own link so it sees the pop up an ad visitor sees (truth checker); no click is paid for, which is the line system.md draws.
- **Bring /agencies line 146 in line with white label** (truth checker). Out of this page's scope, and not a contradiction: the slide carries the agency's name, the proof page Obsession's or theirs with white label.
- **"Any company can opt out at useobsession.com/agents"** (truth checker: the opt out there is an email). It's the retention page's sentence, word for word; changing it is a site-wide fix, not this page's.
- **Drop "Use cases / CRO agencies" for "performance and CRO agencies"**: not raised, but noted. The reader is the CRO shop (Seun sends to CRO shops first); ecommerce PPC agencies are served by the paid traffic card and the ROAS question.

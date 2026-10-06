import { consoleHeading } from '../console'
import type { Page } from '../types'

/* Home (/): 8 blocks, each with 1 job, 1 headline, at most 1 short line and 1 visual, and nothing said twice (Seun's
   approved Home, 6 Oct; how it works back, the difference rebuilt and the recipes block added, 7 Oct):
   1 what it is (the hero, its form, and the 5 tabs of app screens) >
   2 who it's for (James's persona band, as he built it) >
   3 how it works (4 short steps on 1 rail, each over a small slice of the app doing its 1 thing) >
   4 the difference, shown (to know what customers get, you have to be one: 5 reader stories on 1 stage, each the old
     way's scattered stack beside 1 declared agent's signed journey, then the same panel at other companies, and the
     points row) >
   5 recipes (what a recipe is in 1 claim and 1 line, then the 6 jobs as doors, each with 2 examples, and the link to
     every recipe; the jobs are the Recipes menu's own, content/nav.ts recipeJobs) >
   6 proof (the audits' rate, then 1 full report: its story in 1 line, the output in every format, and how the agents
     behave) >
   7 questions a reader asks before joining (6, closed until opened) >
   8 start (the waitlist, and the agencies' free audits).
   Every recipe, your own AI agents, the API and the full rules each live on their own page, and the full How (its app
   screens) on the reader pages, Developers and Verify.
   The 1 full report is the September store check: 4 test customers, 48 hours watched, 1 shopper left a basket and 1
   stopped at checkout, 0 reminders. Every hero screen, how it works slice and difference story is an example and says
   so (its Example tag). */

export const page: Page = {
  meta: {
    path: '/',
    title: 'Obsession · Intelligence infrastructure for commercial teams',
    description:
      'Obsession is the intelligence infrastructure for commercial teams: declared AI agents that do business with other companies for you, every step signed.',
    /* The sentence AI assistants quote: the 1 definition, word for word as in the visible "What is Obsession?" answer. */
    answer:
      'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you.',
    ogImage: '/og/home.png',
  },

  hero: {
    pill: 'Early access',
    headline: 'The intelligence infrastructure for commercial teams',
    /* 4 short sentences: the pain, what the agents do, what they carry, what you get. */
    sub: 'Deals stall, prices slip and customers leave for reasons no tool can see. Obsession’s AI agents go in as the customer at any company, yours included, with real inboxes, phone numbers and browsers. You get signed proof and your next move.',
    capture: {
      kind: 'waitlist',
      source: 'home-hero',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your first run and tell you about Obsession.',
      interest: 'any',
    },
    /* The facts row left the hero: the real run's own numbers are in the proof block. */
    proof: [],
    consoleHeading,
    /* Category tabs, each a full app screen that plays its story when chosen (REBUILD 1c): Seun's 5, the 5th a whole way
       in, not 1 recipe: Check your AI agents, linking /verify, named as the nav, the footer and the breadcrumb name it.
       AI checkout test is a recipe (its page, the Recipes menu), not a Home tab. */
    screens: [
      {
        tab: 'Prospect intelligence',
        screen: 'pack',
        recipe: 'prospect',
        line: 'Becomes each prospect’s customer and proves the gap you fix.',
      },
      {
        tab: 'Mystery shopper',
        screen: 'shop',
        recipe: 'mystery',
        line: 'Any trial, store, app or booking, tested as a customer, with the owner’s OK.',
      },
      {
        tab: 'Competitor tracking',
        screen: 'rivals',
        recipe: 'competitor',
        line: 'Signs up to every rival and logs each email, text, price and ad.',
      },
      {
        tab: 'Lead leaks',
        screen: 'inbound',
        recipe: 'speed',
        line: 'A labelled test lead times your speed to lead on form, chat and phone.',
      },
      {
        tab: 'Check your AI agents',
        screen: 'botcheck',
        line: 'Declared test customers ask your support bot on every channel, and check each answer.',
        link: { label: 'See how it works', to: '/verify' },
      },
    ],
  },

  /* Seun's words, 7 Oct, word for word, with no sub line. The 4 slices follow 1 run: Mystery shopper picked, 12 companies
     added, approved to run daily and keep watching, findings to Slack. Every name is invented, at a .example address. */
  howRail: {
    heading: 'You pick the job and the companies. The agents do the rest.',
    steps: [
      {
        title: 'Pick the job',
        line: 'A recipe, a task in plain words, or the API.',
        station: {
          kind: 'job',
          field: 'Type a task, or pick a recipe',
          chips: ['Prospect intelligence', 'Mystery shopper', 'Competitor tracking'],
          pick: 1,
        },
      },
      {
        title: 'Add the companies',
        line: 'Prospects, rivals, clients, even your own. From a list, a CSV or Clay.',
        station: {
          kind: 'companies',
          sources: ['Paste a list', 'CSV', 'Clay'],
          rows: [
            { site: 'hollin.example', tag: 'Prospect' },
            { site: 'larkbound.example', tag: 'Rival' },
            { site: 'fennick.example', tag: 'Client' },
          ],
          more: '9 more',
        },
      },
      {
        title: 'Approve it',
        line: 'Agents start when you approve, and keep watching until you stop them.',
        station: {
          kind: 'approve',
          title: 'Mystery shopper',
          meta: '12 companies · Daily',
          toggle: 'Keep watching',
          button: 'Approve',
          done: 'Approved',
        },
      },
      {
        title: 'Get it your way',
        line: 'Every finding lands in the format your team already works in.',
        station: {
          kind: 'formats',
          label: 'Send findings to',
          chips: ['PDF', 'Email', 'Slack', 'Sheet', 'CRM'],
          pick: 2,
          dest: { k: 'Channel', v: '#findings' },
        },
      },
    ],
  },

  /* The difference (_research/illus/DIFFERENCE.md, 7 Oct, reviewed the same day): to know what customers get, you have
     to be one. 5 stories on 1 stage (components/sections/Difference), each chosen by a reader chip: the old way's
     scattered stack on the left, while on the right 1 declared agent signs its whole journey; it ends on the finding,
     the 1 click next move and the same panel at other companies behind it. Every company is invented, at a .example
     domain, and the Today scraps are drawn generic. No story repeats the September run, and no "Signed" line carries a
     signature on Home (a made up hash reads as a prop). */
  gap: {
    heading: 'To know what customers get, you have to be one.',
    sub: 'Today that takes a stack of tools, a spare phone and weeks of screenshots. Obsession’s AI agents become the customer everywhere at once, with signed proof of every step.',
    difference: {
      labels: {
        today: 'Today',
        obsession: 'With Obsession',
        you: 'You',
        agent: 'Agent',
        signed: 'Signed',
        needs: 'Needs you',
        finding: 'Finding',
        next: 'Next move',
        example: 'Example',
      },
      chips: { label: 'Stories', pause: 'Pause the stories', play: 'Play the stories' },
      stories: [
        {
          reader: 'agencies',
          chip: 'Agencies',
          label:
            'Agencies. Today: alerts, a shared inbox, a spare phone, screenshots and question marks. With Obsession: a declared AI test customer shops hollin.example, a client store, with its OK. Over 2 days, the basket email’s code is refused at checkout. A client report is drafted, and the same check runs at 21 stores at once.',
          scraps: [
            { slot: 1, kind: 'alert', title: 'Page changed', lines: ['hollin.example · Home page', '2 words changed · Mon 09:14'], tap: 1, phone: '2 words changed' },
            { slot: 2, kind: 'company', title: 'hollin', lines: ['Homeware · Leeds', '11 to 50 staff · Founded 2019'] },
            {
              slot: 3,
              kind: 'inbox',
              title: 'audits@youragency.example',
              meta: '214',
              rows: [
                ['audits+hollin', 'Welcome to hollin. Here’s 10% off.'],
                ['audits+fennick', 'Confirm your email'],
                ['audits+tidewren', 'New in: Summer Swim'],
              ],
              tap: 2,
              phone: 'audits+hollin · 10% off',
            },
            { slot: 4, kind: 'phone', title: 'Tue 21:40', lines: ['Your code is 418 220', 'Reply Y for 15% off'], tap: 3 },
            { slot: 5, kind: 'folder', title: 'hollin audit', meta: '23 items', lines: ['Screenshot 09.14', 'Screenshot 09.21', 'Screenshot 09.26'] },
            {
              slot: 6,
              kind: 'grid',
              title: 'Store checks',
              heads: ['Store', 'Signed up', 'Heard back?'],
              rows: [
                ['hollin', 'Yes', '?'],
                ['Fennick Home', 'Yes', '?'],
                ['Tidewren Swim', 'No', '?'],
              ],
              tap: 4,
              q: 0,
            },
          ],
          crumb: ['Your agency', 'Missions', 'Client audit'],
          title: 'Client audit',
          meta: 'hollin.example · Client · OK on file',
          agent: { name: 'Test customer 1 · AI · for Your agency', inbox: 'shopper1@test.useobsession.com', phone: '+44 7700 900418', browser: 'Browser · Leeds' },
          gaps: [{ after: 3, label: 'Day 1' }],
          tally: '6 of 6 signed',
          steps: [
            { ch: 'web', when: 'Day 0 · 09:14', title: 'Signed up', lines: ['shopper1@test.useobsession.com'] },
            { ch: 'email', when: 'Day 0 · 09:15', title: 'Welcome email', lines: ['10% off your first order: SOFTER10'], photo: 'email' },
            {
              ch: 'chat',
              when: 'Day 0 · 09:21',
              title: 'Said it’s AI, asked the bot',
              ask: 'Does the Weekend Shirt run large?',
              reply: 'It’s a relaxed fit. Size down if unsure.',
              who: 'Bot',
            },
            { ch: 'web', when: 'Day 0 · 09:26', title: 'Left a basket', lines: ['Weekend Shirt · £68', 'Stopped before payment'], photo: 'shirt' },
            { ch: 'email', when: 'Day 2 · 09:26', title: 'Basket email', lines: ['Still yours. Take 10% off with SOFTER10.'] },
            { ch: 'web', when: 'Day 2 · 09:31', title: 'Tried the code', lines: ['SOFTER10', 'This code has expired.'], short: 'This code has expired.', needs: true },
          ],
          finding: { text: 'The basket email’s code is refused at checkout.', meta: 'Signed · Day 2 · 09:31' },
          next: { text: 'Client report in your brand, with every signed step.', button: 'Approve', done: 'Approved' },
          /* At a prospect the agent only signs up, reads the emails and asks the bot (4 steps), never a basket.
             19 clients run all 6 steps and 2 prospects run 4: 122 steps. */
          ghosts: [
            { label: 'Prospect · fennick.example', note: '4 of 4 signed' },
            { label: 'Client · marlowe.example', note: 'Code refused', needs: true },
          ],
          count: '21 stores at once · 122 steps signed · 3 need you',
        },
        {
          reader: 'founders',
          chip: 'Founders',
          label:
            'Founders. Today: an all clear status page, test inboxes, 1 working phone and a team asking. With Obsession: a declared AI test customer signs up with a UK number after v2.14. Its login code never arrives. Every UK number fails and every US number works. A bug ticket is drafted.',
          scraps: [
            { slot: 1, kind: 'status', title: 'All systems normal', lines: ['Uptime 99.98% · 90 days'], tap: 1, phone: 'Uptime 99.98%' },
            { slot: 2, kind: 'release', title: 'v2.14 shipped', lines: ['Tue 14:00 · 12 changes'] },
            {
              slot: 3,
              kind: 'inbox',
              title: 'me@yourcompany.example',
              meta: '38',
              rows: [
                ['me+test14', 'Confirm your email'],
                ['me+test14', 'Set up your first project'],
                ['me+test15', 'Confirm your email'],
              ],
              tap: 2,
              phone: 'me+test15 · Confirm',
            },
            { slot: 4, kind: 'phone', title: 'Tue 14:06', lines: ['Your code is 482 913'], tap: 3 },
            { slot: 5, kind: 'reminder', title: 'Test the sign up flow', lines: ['Fri 09:00 · every week'] },
            {
              slot: 6,
              kind: 'chat',
              title: '#launch',
              meta: 'Wed 10:12',
              lines: ['AM: Why are sign ups down since yesterday?', 'JO: Not sure. Works on my phone.'],
              tap: 4,
              q: 0,
              phone: 'Why are sign ups down?',
            },
          ],
          crumb: ['Your company', 'Missions', 'Release check'],
          title: 'Release check',
          meta: 'v2.14 · Sign up · UK number',
          agent: { name: 'Test customer 1 · AI · for Your company', inbox: 'new1@test.useobsession.com', phone: '+44 7700 900266', browser: 'Browser · London' },
          tally: '6 of 6 signed',
          steps: [
            { ch: 'web', when: 'Tue 14:05', title: 'Signed up', lines: ['new1@test.useobsession.com'] },
            { ch: 'email', when: '14:05', title: 'Confirm your email', lines: ['Arrived in 9 s'] },
            { ch: 'web', when: '14:06', title: 'Asked for a login code', lines: ['Sent to +44 7700 900266'] },
            { ch: 'text', when: '14:11', title: 'Waited 5 minutes', lines: ['No text'], empty: true, needs: true },
            { ch: 'web', when: '14:12', title: 'Asked again', lines: ['Resend code'] },
            { ch: 'text', when: '14:22', title: 'Waited 10 minutes', lines: ['Still no text'], empty: true, needs: true },
          ],
          finding: { text: 'New users on UK numbers can’t log in since Tuesday’s release.', meta: 'Signed · No code in 16 min' },
          next: { text: 'Bug ticket drafted with all 6 signed steps.', button: 'Approve', done: 'Filed' },
          ghosts: [
            { label: 'Sign up · US number', note: '6 of 6 signed' },
            { label: 'Password reset · UK number', note: 'No code', needs: true },
          ],
          count: '6 journeys after every release · UK numbers fail, US numbers work',
        },
        {
          reader: 'sales',
          chip: 'Sales',
          label:
            'Sales. Today: a data card, a page alert, open tabs and empty call notes. Nobody has tried the trial. With Obsession: a declared AI test customer starts rookwell.example’s trial with no card. It hears nothing for 4 days. A call brief is ready, and every call this week gets one.',
          scraps: [
            { slot: 1, kind: 'company', title: 'Rookwell', lines: ['Clinic software · Bristol', '51 to 200 staff · Series A'], tap: 1, phone: 'Clinic software' },
            { slot: 2, kind: 'alert', title: 'Page changed', lines: ['rookwell.example/pricing', '1 price changed · Mon 08:12'] },
            { slot: 3, kind: 'tabs', title: '9 tabs', lines: ['Rookwell · Home', 'Rookwell · About us', 'Rookwell · Careers', 'Rookwell reviews · 4.1'], tap: 2 },
            { slot: 4, kind: 'phone', title: 'Thu 09:50', lines: ['Rookwell call in 10 min'] },
            { slot: 5, kind: 'note', title: 'Rookwell call notes', lines: ['Thu 10:00 · Notes:'], tap: 3 },
            { slot: 6, kind: 'chat', title: '#deals', lines: ['Anyone tried Rookwell’s trial before Thursday?'], tap: 4, q: 0, phone: 'Anyone tried their trial?' },
          ],
          crumb: ['Your company', 'Accounts', 'Rookwell'],
          title: 'Call brief',
          meta: 'rookwell.example · Prospect · call Thu 10:00',
          agent: { name: 'Test customer 1 · AI · for Your company', inbox: 'trial1@test.useobsession.com', phone: '+44 7700 900731', browser: 'Browser · Bristol' },
          tally: '9 of 9 signed',
          steps: [
            { ch: 'web', when: 'Day 0 · 10:02', title: 'Started a free trial', lines: ['No card needed'] },
            { ch: 'email', when: 'Day 0 · 10:03', title: 'Welcome email', lines: ['Welcome to Rookwell. Let’s get you set up.'] },
            {
              ch: 'chat',
              when: 'Day 0 · 10:15',
              title: 'Said it’s AI, asked their bot',
              ask: 'Can I import my patient list?',
              reply: 'Yes, on Pro. Upload it in Settings.',
              who: 'Bot',
            },
            { ch: 'web', when: 'Day 0 · 10:21', title: 'Pricing page', lines: ['Import on Pro only · £89 a month'] },
            { ch: 'email', when: 'Day 1 to 4 · 09:00', title: 'Inbox checked', lines: ['No email'], short: 'No email for 4 days', quiet: ['Day 1', 'Day 2', 'Day 3', 'Day 4'] },
            { ch: 'email', when: 'Day 5 · 08:00', title: 'Trial email', lines: ['Your trial ends in 2 days.'] },
          ],
          finding: { text: 'Rookwell’s trial users hear nothing for 4 days.', meta: 'Signed · 0 emails from Day 1 to 4' },
          next: { text: 'Call brief ready: lead with their 4 quiet days.', button: 'Approve', done: 'Sent' },
          ghosts: [
            { label: 'Prospect · harbrook.example · Thu 14:00', note: 'Brief ready' },
            { label: 'Prospect · pinemead.example · Fri 09:30', note: 'Brief ready' },
          ],
          count: '9 calls this week · 9 briefs ready · 81 steps signed',
        },
        {
          reader: 'marketing',
          chip: 'Marketing',
          label:
            'Marketing. Today: rival inboxes, a spare phone, screenshots and a tracker of question marks. With Obsession: a declared AI test customer joins Rival A’s list and texts. Rival A follows up 3 times in 3 days, by text and email. You never do. A 3 day follow up is drafted for your OK.',
          scraps: [
            { slot: 1, kind: 'reminder', title: 'Check rival inboxes', lines: ['Mon 09:00 · every week'] },
            { slot: 2, kind: 'chat', title: '#marketing', lines: ['What does Kettlewick send in week 1?'] },
            {
              slot: 3,
              kind: 'inbox',
              title: 'rivals@yourcompany.example',
              meta: '61',
              rows: [
                ['+brewlark', 'Welcome. 20% off your first bag.'],
                ['+kettlewick', 'Confirm your email'],
                ['+grindhaven', 'New: Autumn Blend'],
              ],
              tap: 1,
              phone: '+brewlark · 20% off',
            },
            { slot: 4, kind: 'phone', title: 'Wed 19:02', lines: ['Brewlark: Free delivery today only.', 'Kettlewick: Reply Y to join.'], tap: 2, phone: 'Brewlark: Free delivery' },
            { slot: 5, kind: 'folder', title: 'Rival emails', meta: '61 items', tap: 3 },
            {
              slot: 6,
              kind: 'grid',
              title: 'Rival flows',
              heads: ['Rival', 'Welcome', 'Follow ups'],
              rows: [
                ['Brewlark', '1 min', '?'],
                ['Kettlewick', '?', '?'],
                ['Grindhaven', '2 h', '?'],
              ],
              tap: 4,
              q: 0,
            },
          ],
          crumb: ['Your company', 'Rivals', 'Rival flows'],
          title: 'Rival flows',
          meta: 'brewlark.example · Rival A · first 3 days',
          agent: { name: 'Test customer 1 · AI · for Your company', inbox: 'sub1@test.useobsession.com', phone: '+44 7700 900582', browser: 'Browser · Leeds' },
          gaps: [{ after: 4, label: 'Day 2' }],
          tally: '6 of 6 signed',
          steps: [
            { ch: 'web', when: 'Day 0 · 08:00', title: 'Joined the list', lines: ['sub1@test.useobsession.com'] },
            { ch: 'email', when: 'Day 0 · 08:01', title: 'Welcome email', lines: ['Welcome. 20% off your first bag.'] },
            { ch: 'text', when: 'Day 0 · 08:02', title: 'Opted in to texts', lines: ['You’re in. Reply STOP to opt out.'] },
            { ch: 'text', when: 'Day 0 · 18:00', title: 'Follow up 1', lines: ['Free delivery on your first bag, today only.'] },
            { ch: 'email', when: 'Day 1 · 08:00', title: 'Follow up 2', lines: ['Your 20% ends tonight.'] },
            { ch: 'email', when: 'Day 3 · 08:00', title: 'Follow up 3', lines: ['Still deciding? Meet House Blend.'] },
          ],
          finding: { text: 'Rival A follows up 3 times in 3 days, by text and email. You never do.', meta: 'Signed · First 3 days' },
          next: { text: 'A 3 day follow up drafted for your OK.', button: 'Approve', done: 'Approved' },
          /* Your own lane runs on your own store. No basket at any rival. */
          ghosts: [
            { label: 'Rival B · kettlewick.example', note: '2 follow ups' },
            { label: 'Yours · yourcompany.example', note: '0 follow ups', needs: true },
          ],
          count: '3 rivals and yours, side by side · 24 steps signed',
        },
        {
          reader: 'agents',
          chip: 'AI agents',
          label:
            'AI agents. Today: a vendor dashboard, transcripts, test calls and a customer complaint. With Obsession: a declared AI test customer asks to cancel on every channel at 06:30. Chat, email and text offer 1 month free. The voice agent offers 3; policy allows 1. A fix is drafted and checked again tomorrow.',
          scraps: [
            { slot: 1, kind: 'dash', title: 'Your AI agent', lines: ['Resolved 87%', 'This week'], tap: 1 },
            { slot: 2, kind: 'file', title: 'transcripts_oct.csv', lines: ['4,212 rows'], tap: 2 },
            {
              slot: 3,
              kind: 'grid',
              title: 'Test questions',
              heads: ['Question', 'Answer OK?'],
              rows: [
                ['I’d like to cancel', '?'],
                ['Refund last month?', '?'],
                ['Can I pause my plan?', '?'],
              ],
            },
            { slot: 4, kind: 'phone', title: 'Recents', lines: ['Your support line · 3 min 12 s', 'Your support line · 1 min 48 s'], tap: 3, phone: 'Support line · 3 min 12 s' },
            { slot: 5, kind: 'doc', title: 'Retention offers', lines: ['Up to 1 month free', 'Updated 2 Sep'] },
            {
              slot: 6,
              kind: 'chat',
              title: '#support',
              lines: ['A customer says the voice agent gave them 3 months free?'],
              tap: 4,
              q: 0,
              phone: '3 months free by phone?',
            },
          ],
          crumb: ['Your company', 'Missions', 'AI agent check'],
          title: 'AI agent check',
          meta: '4 channels · every day 06:30',
          agent: { name: 'Test customer 1 · AI · for Your company', inbox: 'check1@test.useobsession.com', phone: '+44 7700 900905', browser: 'Browser · London' },
          tally: '5 of 5 signed',
          steps: [
            { ch: 'chat', when: '06:30', title: 'Said it’s AI, asked the bot', ask: 'I’d like to cancel.', reply: 'Before you go: 1 month free?', who: 'Bot' },
            { ch: 'email', when: '06:31', title: 'Asked by email', lines: ['Before you go, here’s 1 month free.'] },
            { ch: 'text', when: '06:32', title: 'Asked by text', lines: ['Stay and get 1 month free.'] },
            {
              ch: 'phone',
              when: '06:34',
              title: 'Called your voice agent',
              ask: 'I’m an AI test customer. I’d like to cancel.',
              reply: 'I can give you 3 months free.',
              who: 'Voice agent',
              short: 'I can give you 3 months free.',
            },
            { ch: 'policy', when: '06:36', title: 'Checked the policy', lines: ['Retention offers: up to 1 month free'], needs: true },
            { ch: 'chat', when: 'Tomorrow · 06:30', title: 'Check again', next: true },
          ],
          finding: { text: 'Your voice agent offered 3 months free. Policy allows 1 month.', meta: 'Signed · 06:34 · call recorded' },
          next: { text: 'Fix drafted. Checked again tomorrow at 06:30.', button: 'Approve', done: 'Approved' },
          ghosts: [
            { label: 'Yours · Refund last month', note: '4 of 4 signed' },
            { label: 'Client · Order status, with their OK', note: '4 of 4 signed' },
          ],
          count: '160 answers signed today · 40 hard questions on 4 channels',
        },
      ],
      /* Under the stage: each old flaw against what changes, 6 words or fewer a side, under the 2 column heads. */
      points: [
        { today: '1 page', obsession: 'The whole journey' },
        { today: '1 moment', obsession: 'Days of follow up' },
        { today: 'You, switching tabs', obsession: '1 AI agent, every channel' },
        { today: 'Screenshots', obsession: 'Signed proof' },
        { today: '1 company at a time', obsession: 'All of them at once' },
      ],
    },
    /* The picture says it: no comparison rows on Home. */
    rows: [],
  },

  /* Seun's words, 7 Oct, word for word. The 6 jobs under them, each job's line and its 2 examples are the Recipes menu's
     (content/nav.ts recipeJobs, the names from each recipe's own file), so this block and the menu never drift. The
     link counts the recipes in the catalog: {n} is filled in when the page renders, never typed. */
  recipeJobs: {
    heading: 'Start from a recipe. The setup is already done.',
    line: 'Each comes with its agents, inboxes, numbers, schedule and report.',
    all: { label: 'See all {n} recipes', to: '/recipes' },
  },

  /* Home has no use case tabs: the hero's tabs carry that beat. */
  uses: { heading: '', items: [] },

  outputs: {
    /* The claim is what real audits found (Seun, 7 Oct, the same claim as the agencies use case); the line hands it to
       the 1 store the viewer below shows. Only the strength shows: the share with a gap, never how many were tried.
       "on every journey" says the stores were shopped in full without hinting at a limit (the 50 rule); "every journey"
       is joined by a non breaking space so it never breaks inside it. */
    heading: '93% of stores we shopped on every\u00a0journey had a gap.',
    line: 'Here is 1 of them. A basket and a checkout left, and no email in 48 hours.',
    /* No numbers row on Home: the line above already says what the run found. /sample-output has every figure. */
    facts: [],
    cta: { label: 'See the full report', to: '/sample-output' },
    /* The rules every run follows, in a few words each; /agents has them in full. */
    behave: {
      heading: 'How our agents behave',
      items: [
        'Say they’re AI',
        'Ask the bot, never staff',
        'Public journeys only',
        'Stop before payment',
        'Nothing without your OK',
        'Every step signed',
      ],
    },
  },

  /* The 6 questions a reader asks before joining, each answered in 2 short sentences at most. The first answer is
     meta.answer, word for word. */
  faq: {
    heading: 'Before you join.',
    items: [
      {
        q: 'What is Obsession?',
        a: 'Obsession is the intelligence infrastructure for commercial teams: declared AI agents, each with its own identity, inbox, phone number and browser, that do business with other companies for you.',
      },
      {
        q: 'Do the agents pretend to be people?',
        a: 'No. Every agent says it’s AI at first contact and links a page about Obsession. At rivals and prospects it never names who it works for.',
      },
      {
        q: 'Is it legal to sign up at a rival or a prospect?',
        a: 'It uses only what any customer can do in public, as a declared AI, and never contacts staff. Rival trials use no card and stop the moment a rep writes.',
      },
      {
        q: 'Do you need access to our systems?',
        a: 'No. The agents use your site the way your customers do. Connect a tool only if you want its data in the report.',
      },
      {
        q: 'What do I get back?',
        a: 'Signed proof of every step and your next move, as a report, an email, Slack, a sheet, Clay or a webhook.',
      },
      {
        q: 'When can I use it?',
        a: 'Early access runs from the waitlist. Join, and we set up your first job with you.',
      },
    ],
  },

  final: {
    heading: 'Find out first, not from a customer.',
    capture: {
      kind: 'waitlist',
      source: 'home-final',
      button: 'Join the waitlist',
      placeholder: 'Your work email',
      micro: 'We keep your email to set up your first run and tell you about Obsession.',
      interest: 'any',
    },
    link: { label: 'Agency? Get 5 client stores audited free', to: '/use-cases/mystery-shopping-for-ecommerce-agencies' },
  },
}

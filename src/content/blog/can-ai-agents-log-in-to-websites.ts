import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 4 (_research/seo/revamp-11nov/WAVE2_BRIEF.md and WAVE2_SLATE.md, 11 Nov 2026). It owns
   "can ai agents login to websites" and its neighbours from Google autocomplete, US and UK, 11 Nov 2026
   (autocomplete_11nov_exa.json): ai agent login to website, ai agent web access, ai agent internet access, ai agent
   sign up. Page 1 had no strong owner (Reddit, small blogs; competitors-11nov/serp_11nov.json).
   Readers: product and engineering leads building agents, and the teams whose sites agents visit.
   Every source read on its own page on 11 Nov 2026: OpenAI Help Center (cloud browser in ChatGPT Work, and its Web Bot
   Auth allowlisting page); Claude Platform Docs (computer use tool, pricing, vision); 1Password's 16 Jul 2026 release;
   Browserbase docs (Contexts) and pricing; Browser Use docs (Profiles, 2FA) and pricing; Firecrawl docs (Interact);
   RFC 6265, 6749, 6238 and 9421 (rfc-editor.org); NIST SP 800-63B-4; the W3C note on CAPTCHA (16 Dec 2021); Cloudflare's
   Web Bot Auth docs (8 Oct 2026); the IETF webbotauth charter; 18 U.S.C. 1030 (Cornell LII); Van Buren (supremecourt.gov);
   hiQ v. LinkedIn (9th Cir., 18 Apr 2022) and Amazon.com Services v. Perplexity AI (9th Cir., 4 Aug 2026), both from
   cdn.ca9.uscourts.gov; Computer Misuse Act 1990 ss.1 and 17 (legislation.gov.uk); exa.ai.
   OpenAI's older agent product is not named: the help centre's own name today is the cloud browser in ChatGPT Work.
   The legal part: general information, never legal advice, a place named for every point. Obsession is described in
   the words of /agents and /developers only. The cost example uses labelled inputs. larkfield.example is invented.
   No dashes. */

const OPENAI_CLOUD = 'https://help.openai.com/en/articles/20001280-using-cloud-browser-in-chatgpt'
const CLAUDE_CU = 'https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool'
const ONEPASS = 'https://1password.com/press/2026/july/1password-for-claude'
const BB_CONTEXTS = 'https://docs.browserbase.com/features/contexts'
const BU_PROFILES = 'https://docs.browser-use.com/cloud/guides/authentication'
const BU_2FA = 'https://docs.browser-use.com/cloud/guides/2fa'
const FC_INTERACT = 'https://docs.firecrawl.dev/features/interact'
const RFC6265 = 'https://www.rfc-editor.org/rfc/rfc6265'
const RFC6749 = 'https://www.rfc-editor.org/rfc/rfc6749'
const RFC6238 = 'https://www.rfc-editor.org/rfc/rfc6238'
const NIST = 'https://pages.nist.gov/800-63-4/sp800-63b.html'
const W3C_CAPTCHA = 'https://www.w3.org/TR/turingtest/'
const BB_PRICING = 'https://www.browserbase.com/pricing'
const BU_PRICING = 'https://browser-use.com/pricing'
const RFC9421 = 'https://www.rfc-editor.org/rfc/rfc9421'
const CF_WBA = 'https://developers.cloudflare.com/bots/reference/bot-verification/web-bot-auth/'
const OPENAI_ALLOW = 'https://help.openai.com/en/articles/11845367-chatgpt-works-cloud-browser-allowlisting'
const IETF_WBA = 'https://datatracker.ietf.org/wg/webbotauth/about/'
const CA9_AMAZON = 'https://cdn.ca9.uscourts.gov/datastore/opinions/2026/08/04/26-1444.pdf'
const USC_1030 = 'https://www.law.cornell.edu/uscode/text/18/1030'
const VAN_BUREN = 'https://www.supremecourt.gov/opinions/20pdf/19-783_k53l.pdf'
const HIQ = 'https://cdn.ca9.uscourts.gov/datastore/opinions/2022/04/18/17-16783.pdf'
const CMA_1 = 'https://www.legislation.gov.uk/ukpga/1990/18/section/1'
const CMA_17 = 'https://www.legislation.gov.uk/ukpga/1990/18/section/17'
const CLAUDE_VISION = 'https://platform.claude.com/docs/en/build-with-claude/vision'
const CLAUDE_PRICING = 'https://platform.claude.com/docs/en/about-claude/pricing'
const EXA = 'https://exa.ai/'

export const post: BlogPost = {
  slug: 'can-ai-agents-log-in-to-websites',
  title: 'Can AI agents log in to websites? What works, what’s allowed and what it costs',
  dek: 'An agent signs in the way your browser does, by filling in the form, passing any code and keeping the session cookie. One-time codes, bot checks and expiring sessions decide how far it gets, and the site’s terms and the law decide whether it should.',
  metaTitle: 'Can AI agents log in to websites? Rules and costs for teams',
  description:
    'Yes, AI agents can log in to websites and keep the session. How cookies, MFA and bot checks work, what US and UK law says, and what each run costs.',
  answer:
    'Yes, AI agents can log in to websites: ChatGPT’s cloud browser, Claude’s computer use, Browserbase and Browser Use fill in sign-in forms and keep the session cookie, though one-time codes and bot checks still need a person. Whether an agent may log in turns on the site’s terms and on computer misuse law, which US courts still apply to agents case by case. Obsession keeps each company’s emails, texts, member prices and offers behind the login, dated with a screenshot, so agents look them up by API or MCP (the standard way AI agents call tools) without anyone’s password.',
  primaryKeyword: 'can ai agents log in to websites',
  keywords: [
    'ai agent login to website',
    'ai agent web access',
    'ai agent internet access',
    'ai agent sign up',
    'can ai agents log in to websites',
  ],
  category: 'Behind the login',
  order: 8,
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 17,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'sides',
      title: 'larkfield.example · 3 ways agents sign in',
      rows: [
        {
          name: 'Your agent, your account',
          who: 'ChatGPT’s cloud browser, Claude',
          nodes: ['You', 'Your agent', 'Your account'],
          links: ['approve the sign-in', 'acts as you'],
        },
        {
          name: 'Your code, a saved session',
          who: 'Browserbase, Browser Use',
          nodes: ['Your code', 'Cloud browser', 'Your account'],
          links: ['reuses the cookie', 'until it expires'],
        },
        {
          name: 'A customer of its own',
          who: 'An Obsession agent',
          nodes: ['Your team', 'Obsession agent', 'Its own account'],
          links: ['looks up by API', 'signs up as itself'],
          lit: 1,
          ours: true,
        },
      ],
      foot: 'All 3 reach pages behind Larkfield’s login. The third holds an account of its own, so nobody lends it a password. Larkfield is an invented company.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Yes, AI agents can log in to websites. ChatGPT’s cloud browser, Claude’s computer use, Browserbase and Browser Use fill in sign-in forms, keep the session cookie the site sets and come back later without signing in again. A one-time code, a bot check or an expired session still sends the run back to a person.',
    },
    {
      kind: 'p',
      text: 'Logging in is a check that happens once, at the start. The site checks a password, and often a code, then stores a small token called a session cookie in the browser. The browser sends that cookie with every later request, so the site knows who is asking. The internet standard for cookies describes them as a way for servers to “maintain a stateful session over the mostly stateless HTTP protocol” ([RFC 6265](' +
        RFC6265 +
        ')).',
    },
    {
      kind: 'p',
      text: 'An agent that logs in therefore has to pass the sign-in, keep the cookie and cope when the site asks again. The products differ on each step, and the site’s terms and the law decide whether the agent should be there at all.',
    },
    {
      kind: 'p',
      text: 'Most agents act as a person inside that person’s own account. Another kind holds an account of its own at the company, as a customer that says it’s an AI. [The web behind the login](/blog/the-web-behind-the-login) explains what each kind can reach, and the guide to how teams [scrape data behind a login](/blog/scrape-data-behind-login) covers the code.',
    },

    { kind: 'h2', id: 'today', text: 'How AI agents log in to websites today' },
    { kind: 'h3', id: 'chatgpt', text: 'ChatGPT’s cloud browser' },
    {
      kind: 'p',
      text: 'OpenAI’s cloud browser gives ChatGPT Work “its own browser on a separate computer in the cloud” ([OpenAI Help Center](' +
        OPENAI_CLOUD +
        ')). It reads pages, clicks buttons and fills in forms on public and signed-in websites. When a task reaches a sign-in page, it pauses and asks the person to sign in through a secure form, including any two-factor code. OpenAI says the username and password entered there go straight to the remote browser, are “not visible to the model”, and aren’t stored by ChatGPT.',
    },
    {
      kind: 'p',
      text: 'The session then persists for later tasks until it expires. The cloud browser keeps its own cookies and never uses the person’s own browser, saved passwords or existing sign-ins. By default it asks before visiting a new website, and it asks for confirmation before a booking, a payment or another step that is hard to reverse. It runs on paid ChatGPT plans, excluding Free and Go.',
    },
    { kind: 'h3', id: 'claude', text: 'Claude’s computer use' },
    {
      kind: 'p',
      text: 'Anthropic’s computer use gives Claude a toolset of 17 actions, such as taking a screenshot, clicking and typing, and the developer runs each action on a machine they control ([Anthropic’s docs](' +
        CLAUDE_CU +
        ')). Claude sees the screen through screenshots and chooses the next click, so it signs in the way a person at that desktop would. For tasks that stay inside webpages, Anthropic points developers to its browser use tool.',
    },
    {
      kind: 'p',
      text: 'Anthropic’s documentation warns that Claude may follow instructions it finds on a webpage, and tells developers to isolate it from sensitive data and actions. It advises against tasks that need “sensitive user information without human oversight”. For passwords, 1Password announced an integration with Claude on 16 July 2026. A person approves the logins a task needs with one biometric prompt, and “the password and the MFA one-time code are never accessible to the model” ([1Password](' +
        ONEPASS +
        ')).',
    },
    { kind: 'h3', id: 'browsers', text: 'Browserbase, Browser Use and Firecrawl' },
    {
      kind: 'p',
      text: 'Browserbase runs browsers in the cloud for code to drive. Its Contexts keep cookies, localStorage and IndexedDB between sessions, encrypted at rest. A later session that loads the same Context starts signed in ([Browserbase docs](' +
        BB_CONTEXTS +
        ')). Its documentation warns that sites can still force a logout, for example after a password change or suspicious activity, and that 2 sessions sharing one Context at once can trigger one.',
    },
    {
      kind: 'p',
      text: 'Browser Use keeps logins in profiles: “A profile persists cookies, local storage, and login state across browsers” ([Browser Use docs](' +
        BU_PROFILES +
        ')). For two-factor prompts, its guide names “a saved profile or a human checkpoint” as the most reliable options ([Browser Use docs](' +
        BU_2FA +
        ')). At a checkpoint, a person types the code into a live view of the browser.',
    },
    {
      kind: 'p',
      text: 'Firecrawl turns pages into clean text for AI models. Its Interact feature can “sign in once, then read the pages that only appear after authentication”, and saves cookies and localStorage to a named profile for later scrapes ([Firecrawl docs](' +
        FC_INTERACT +
        ')).',
    },
    {
      kind: 'table',
      caption: 'Products that sign agents in to websites, from each provider’s own pages as of 11 November 2026',
      cols: ['Product', 'How it signs in', 'How it stays signed in', 'Who handles codes'],
      rows: [
        ['ChatGPT’s cloud browser', 'The person, in a secure form', 'Session kept until it expires', 'The person'],
        ['Claude computer use', 'Screenshots, clicks and typing', 'Whatever your machine keeps', 'Your setup'],
        ['Browserbase', 'Your code drives a cloud browser', 'Contexts, encrypted at rest', 'Your code or a person'],
        ['Browser Use', 'The agent, or a person in a live view', 'Profiles', 'A person at a checkpoint'],
        ['Firecrawl Interact', 'A prompt or Playwright code', 'Named profiles', 'Not described'],
      ],
    },

    { kind: 'h2', id: 'how', text: 'How an agent stays logged in: cookies, tokens and codes' },
    {
      kind: 'p',
      text: 'The session cookie is the agent’s pass after sign-in. RFC 6265 lets a site set its lifetime with Max-Age or Expires, and notes that browsers often evict cookies sooner. An HttpOnly cookie is hidden from scripts on the page, and an agent driving a real browser never needs to read it, because the browser attaches it to every request by itself.',
    },
    {
      kind: 'p',
      text: 'The same standard names the main risk of a logged-in agent. It calls cookies “a form of ambient authority”, because a browser attaches them even when another site triggered the request. An agent that reads a page carrying hidden instructions still holds the user’s session when it acts. OpenAI and Anthropic call those hidden instructions prompt injection. OpenAI tests its cloud browser against them, and Anthropic scans computer use screenshots for them.',
    },
    {
      kind: 'p',
      text: 'OAuth, the standard for giving an app access to an account without handing over the password, exists because sharing passwords goes wrong. Its RFC lists how ([RFC 6749](' +
        RFC6749 +
        ')). The app has to store the password, gains “overly broad access”, can be cut off only by changing the password, and exposes it if the app is breached. OAuth replaces the password with an access token limited in scope and lifetime. Where a site offers only a sign-in form, an agent is back to typing a password, which is why OpenAI and 1Password route it through channels the model can’t read.',
    },
    {
      kind: 'p',
      text: 'Multi-factor authentication (MFA) asks for a second proof after the password, usually a one-time code. An authenticator app makes a time-based code (TOTP) from a secret shared with the site, and RFC 6238 recommends a new code every 30 seconds ([RFC 6238](' +
        RFC6238 +
        ')). An agent can make that code itself only if it holds the secret, and Browser Use’s guide says never to put passwords or TOTP secrets in a prompt. A code sent by text needs a phone number that receives it, or a person who reads it out.',
    },
    {
      kind: 'p',
      text: 'NIST’s digital identity guidelines explain why a code can be passed to an agent and a passkey can’t. Codes a person types are not phishing-resistant, because “the manual entry does not bind the authenticator output to the specific session being authenticated” ([NIST SP 800-63B-4](' +
        NIST +
        ')). The same property lets a person read a code to an agent. WebAuthn, the web standard that passkeys use, ties each sign-in to the site’s domain name, so there is no code to pass on. The person’s device or password manager has to approve every passkey sign-in.',
    },
    {
      kind: 'table',
      caption: 'What a site checks at sign-in, and what that means for an agent',
      cols: ['What the site checks', 'What the agent holds', 'How long it lasts', 'Where a run stops'],
      rows: [
        ['Password', 'Typed in a secure form or filled by a password manager', 'Until it changes', 'A new device check'],
        ['Session cookie', 'Saved in the browser profile', 'Until it expires or the site signs it out', 'Expiry or a forced logout'],
        ['OAuth access token', 'A scoped token, no password', 'Its set lifetime', 'Sites that offer only a form'],
        ['Authenticator code', 'The shared secret, or a person reads the code', '30 seconds each', 'No secret and nobody on hand'],
        ['Text message code', 'A number that receives texts', 'Set by the site', 'No phone and nobody on hand'],
        ['Passkey', 'Nothing; the person’s device approves', 'Until removed', 'Every sign-in needs the person'],
        ['Bot check or CAPTCHA', 'Nothing it can hold', 'Each visit', 'The step itself'],
      ],
    },
    {
      kind: 'art',
      art: {
        kind: 'log',
        title: 'A saved login, day by day',
        who: 'larkfield.example · an agent’s session',
        rows: [
          { time: 'Day 1, 09:00', text: 'Agent fills in email and password', detail: 'From a secure form or a password manager', tone: 'info' },
          { time: 'Day 1, 09:00', text: 'Site texts a 6-digit code', detail: 'A person reads it out', tone: 'late' },
          { time: 'Day 1, 09:01', text: 'Session cookie set for 30 days', detail: 'Saved with the browser profile', tone: 'ok' },
          { time: 'Day 4, 07:00', text: 'Agent opens the account page', detail: 'Cookie sent, no sign-in needed', tone: 'ok' },
          { time: 'Day 9, 07:00', text: 'New device check asks for a code', detail: 'The run waits for a person', tone: 'late' },
          { time: 'Day 31, 07:00', text: 'Session expired', detail: 'Back to the sign-in form', tone: 'fail' },
          { time: 'Day 31, 07:01', text: 'Bot check on the sign-in page', detail: 'The run stops at that step', tone: 'fail' },
        ],
        foot: 'Every pause waits for a person. Larkfield is an invented company.',
      },
      caption: 'An agent’s saved login at an invented site: the cookie carries it for weeks, and each code, device check and expiry hands the run back to a person.',
    },

    { kind: 'h2', id: 'bot-checks', text: 'Why bot checks and CAPTCHAs stop agents' },
    {
      kind: 'p',
      text: 'A CAPTCHA, a “Completely Automated Public Turing Test, to Tell Computers and Humans Apart”, exists to tell software from people ([W3C](' +
        W3C_CAPTCHA +
        ')). An agent is exactly what it is built to catch. The same W3C note says sites keep these checks even for signed-in users, because “even authenticated login provides inadequate protection from malicious actors”.',
    },
    {
      kind: 'p',
      text: 'Many checks now run without a puzzle. The note describes Google’s reCAPTCHA v3, released in 2018, which returns a score for how likely a visitor is to be human, without “the need to interrupt users with challenges at all”. Where the score is unclear, the note quotes Google advising sites to add a second challenge, such as two-factor authentication.',
    },
    {
      kind: 'p',
      text: 'OpenAI’s help page says some websites restrict automated browser agents, and that “each website ultimately decides whether to allow cloud browser traffic”. Some browser providers list ways past these checks. Browserbase’s paid plans list automatic CAPTCHA solving and stealth modes ([Browserbase pricing](' +
        BB_PRICING +
        ')). Browser Use lists CAPTCHA solving as included, and routes traffic through home IP addresses rather than data centres ([Browser Use pricing](' +
        BU_PRICING +
        ')). Whether getting past a site’s check is allowed depends on that site’s terms and on the law where each side is.',
    },
    {
      kind: 'p',
      text: 'The cooperative route is for the agent to say who runs it. Web Bot Auth, a signature that tells a website which company’s agent is visiting, does that. Each request is signed with a private key under the HTTP Message Signatures standard ([RFC 9421](' +
        RFC9421 +
        ')). The site checks the signature against a public key the agent’s operator publishes ([Cloudflare docs](' +
        CF_WBA +
        ')). OpenAI’s cloud browser sends a Signature-Agent header naming chatgpt.com with each request and publishes its keys at a fixed address on chatgpt.com ([OpenAI Help Center](' +
        OPENAI_ALLOW +
        ')). A site, or the network that serves its pages, can then verify the traffic and allow it.',
    },
    {
      kind: 'p',
      text: 'A signature identifies the company running the agent. The person behind it stays unknown to the site. The IETF working group writing the Web Bot Auth standard says it “will focus on authentication of the agent; authentication of the end user is out-of-scope” ([IETF](' +
        IETF_WBA +
        ')). A signed agent still has to log in like anyone else, and a site can recognise it and still refuse it. Site owners choosing what to allow will find the checks in [agent ready website](/blog/agent-ready-website).',
    },

    { kind: 'h2', id: 'legal', text: 'Is it legal for an AI agent to log in to a website?' },
    {
      kind: 'p',
      text: 'Whether an agent may log in usually turns on the site’s terms, on whether computer misuse law treats the access as authorised, and on whose account it is. Each point here names the place it applies. It is general information, not legal advice.',
    },
    { kind: 'h3', id: 'terms', text: 'The site’s terms come with the account' },
    {
      kind: 'p',
      text: 'Opening an account usually means accepting the site’s terms, and terms can set rules on automated access. An agent signed in to that account acts under them. In August 2026 the US Court of Appeals for the Ninth Circuit lifted an injunction against Perplexity’s shopping agent. It noted that its ruling “does not impair Amazon’s ability to regulate access to Amazon.com via private terms of service for its users” ([Amazon v. Perplexity, Ninth Circuit](' +
        CA9_AMAZON +
        ')).',
    },
    { kind: 'h3', id: 'us', text: 'US: the Computer Fraud and Abuse Act' },
    {
      kind: 'p',
      text: 'The Computer Fraud and Abuse Act (CFAA) is the main US federal law on computer access. It covers anyone who “intentionally accesses a computer without authorization or exceeds authorized access” and obtains information from a protected computer, and it lets people who suffer loss sue ([18 U.S.C. §1030](' +
        USC_1030 +
        ')).',
    },
    {
      kind: 'p',
      text: 'In Van Buren v. United States in 2021, the Supreme Court read the law as a “gates-up-or-down inquiry” ([Supreme Court](' +
        VAN_BUREN +
        ')). A person either can or cannot access a computer system, or a part of it. The Court left open whether the gate has to be technical, or can also be set by contracts and policies.',
    },
    {
      kind: 'p',
      text: 'A login is the clearest gate. In hiQ Labs v. LinkedIn in 2022, the Ninth Circuit concluded that “the concept of ‘without authorization’ does not apply to public websites”. It quoted the view that “an authentication requirement, such as a password gate, is needed to create the necessary barrier that divides open spaces from closed spaces on the Web” ([hiQ v. LinkedIn, Ninth Circuit](' +
        HIQ +
        ')). It added that parts of a public site that require authorisation are different.',
    },
    {
      kind: 'p',
      text: 'The same opinion recalls an earlier case that looks much like a password-holding agent today. Power Ventures collected Facebook users’ data after the users gave it their Facebook usernames and passwords. Facebook sent Power Ventures an individual cease-and-desist letter, Power Ventures kept working around Facebook’s IP blocks, and the court held that its continued access was “without authorization”.',
    },
    {
      kind: 'p',
      text: 'The first appeal about a shopping agent came in 2026. Amazon sued Perplexity over the AI assistant in its Comet browser, which shops on Amazon.com at the user’s direction. The court said the core of the dispute was Perplexity’s decision not to use a user-agent string “that would communicate that the user has activated an AI agent”. A user-agent string is the line of text a browser sends to say what it is. After a hearing in March 2026, a district court granted Amazon a preliminary injunction.',
    },
    {
      kind: 'p',
      text: 'On 4 August 2026 the Ninth Circuit vacated that injunction. On the facts before it, “It is the user who ‘accesses’ Amazon’s computers, with the help of the Assistant”, so Amazon was unlikely to show that Perplexity had accessed them. The court left open whether a developer’s control over an agent could amount to access on other facts. It did not reach the rest of the CFAA claim, and it sent the case back to the district court.',
    },
    {
      kind: 'quote',
      text: 'We do not establish a new legal regime governing agentic AI.',
      cite: 'US Court of Appeals for the Ninth Circuit, Amazon.com Services v. Perplexity AI, 4 August 2026',
      href: CA9_AMAZON,
    },
    { kind: 'h3', id: 'uk', text: 'UK: the Computer Misuse Act' },
    {
      kind: 'p',
      text: 'In the UK, section 1 of the Computer Misuse Act 1990 makes it an offence to use a computer to secure access the person knows is unauthorised ([legislation.gov.uk](' +
        CMA_1 +
        ')). Section 17(5) treats access as unauthorised where the person is not entitled to control it and has no consent from someone who is ([legislation.gov.uk](' +
        CMA_17 +
        ')). Whether an account holder’s permission is enough, once the site itself has said no, is a question for a lawyer.',
    },
    {
      kind: 'table',
      caption: 'Rules that bear on an agent that logs in, by place, in short. Each has exceptions and limits in its own text',
      cols: ['Where', 'Rule', 'What it means for the agent'],
      rows: [
        ['Every site', 'Its terms of service', 'The account’s rules apply to it'],
        ['US federal', 'CFAA, 18 U.S.C. §1030(a)(2)', 'No access “without authorization”'],
        ['US Supreme Court', 'Van Buren, 2021', 'A login is a gate, up or down'],
        ['Ninth Circuit', 'Power Ventures, as hiQ recalls it', 'Stop once the site revokes access'],
        ['Ninth Circuit', 'Amazon v. Perplexity, 2026', 'On those facts, the user accessed'],
        ['UK', 'Computer Misuse Act, ss.1 and 17(5)', 'Consent from whoever controls access'],
      ],
    },
    { kind: 'h3', id: 'lawyer', text: 'When to ask a lawyer' },
    {
      kind: 'p',
      text: 'Ask a lawyer where your company and the site operate before any of these:',
    },
    {
      kind: 'list',
      items: [
        '**Someone else’s account.** A client’s or a colleague’s login, even with their permission, where the site’s terms limit who may use it.',
        '**A site that has said no.** A cease-and-desist letter, a block or a changed setting, after which continued access looks like Power Ventures.',
        '**Getting past a bot check.** Solving or avoiding a CAPTCHA or another check the site put in front of a step.',
        '**Changing how the agent identifies itself.** Altering its user-agent string, or anything else that tells a site what it is, after a site has blocked it.',
        '**Other people’s data.** Accounts that hold customers’ or employees’ details, where data protection law adds duties of its own.',
        '**More than one country.** An agent run from one country on a site in another, where both sets of rules can apply.',
      ],
    },

    { kind: 'h2', id: 'cost', text: 'What it costs to run an agent that logs in' },
    {
      kind: 'p',
      text: 'Most of the bill is the model reading screenshots, step after step. Anthropic’s docs say declaring the computer use tools adds about 4,500 input tokens to each request, and each screenshot is billed as an image. An image costs one token per 28 by 28 pixel patch, so a 1280 × 800 screenshot is about 1,334 tokens ([Anthropic’s docs](' +
        CLAUDE_VISION +
        ')).',
    },
    {
      kind: 'p',
      text: 'Take a run that opens a saved session, checks 3 pages and reads an offer in 25 steps. Say each step sends about 12,500 tokens and returns 250. The tokens sent cover the tools, the 3 latest screenshots and the instructions and history so far. On Claude Sonnet 5.5, at $2 per million input tokens and $10 per million output ([Anthropic pricing](' +
        CLAUDE_PRICING +
        ')), that is about $0.69 of model time. Five minutes of Browserbase at its $0.12 hourly rate adds about a cent. On Claude Haiku 5.5, at $0.10 and $0.50 per million, the same run costs about 3 cents, if it completes the task as reliably.',
    },
    {
      kind: 'art',
      art: {
        kind: 'price',
        title: 'One login run, worked out',
        rows: [
          { label: 'Tokens in, 12,500 a step for 25 steps', value: '$0.63', note: 'Claude Sonnet 5.5, $2 per million' },
          { label: 'Tokens out, 250 a step for 25 steps', value: '$0.06', note: '$10 per million' },
          { label: '5 minutes of cloud browser', value: '$0.01', note: 'Browserbase, $0.12 an hour' },
        ],
        total: { label: 'One run', value: '$0.70', note: 'Example inputs, before retries' },
      },
      caption: 'Example inputs for one 25-step run that opens a saved session and reads 3 pages. The model reading screenshots is almost the whole bill.',
    },
    {
      kind: 'p',
      text: 'At volume the run price compounds. Checking 10,000 companies a week at $0.70 a run is about $7,000 a week, or about $364,000 a year, before retries. At 1,000 companies it is about $700 a week, and at 100 about $70. Prompt caching cuts the repeated part of each request, and dropping old screenshots from the history cuts more.',
    },
    {
      kind: 'p',
      text: 'The larger cost is people and upkeep. Every one-time code, new-device check and expired session pauses a run until someone steps in, and Browserbase’s docs tell developers to detect logged-out states and sign in again. Across thousands of accounts, those pauses become a staffing question as much as a token bill.',
    },

    { kind: 'h2', id: 'options', text: 'Ways to give an agent access behind a login', compare: true },
    {
      kind: 'p',
      text: 'We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to give an agent access behind a login. Prices from each provider’s own pages, 11 November 2026',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        [
          'By hand: a person signs in',
          'Reads every screen, passes every check',
          'Staff time per check',
          'One account and one company at a time',
          'A few accounts, checked now and then',
        ],
        [
          'ChatGPT’s cloud browser: in ChatGPT Work',
          'Secure sign-in form, session kept between tasks',
          'Paid ChatGPT plans, excluding Free and Go',
          'Sites that block automated browsers',
          'A person’s own accounts',
        ],
        [
          'Claude computer use: Anthropic’s API',
          'Screenshots, mouse and keyboard on your machine',
          'Claude Sonnet 5.5: $2 / $10 per million tokens\nTools: about 4,500 tokens a request',
          'You run and isolate the machine',
          'Teams building their own agent',
        ],
        [
          'Browserbase: hosted browsers',
          'Contexts keep cookies and storage, encrypted at rest',
          'Developer: $20 a month, 100 hours\nThen $0.12 an hour',
          'Forced logouts; one session per Context',
          'Many browsers run from code',
        ],
        [
          'Browser Use: hosted browsers and agents',
          'Profiles keep cookies, local storage and login state',
          '$0.02 a browser hour\nAgents from $0.006 a task',
          'A person at the 2FA screen',
          'High-volume browser runs',
        ],
        [
          'Obsession (ours): competitor tracking, trial teardown, the API and MCP',
          'Its own account at each company, every email, text, price and offer dated',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Never gets round a CAPTCHA or a bot block, never invents identity details',
          'What many companies show their customers, over months',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For what companies show their customers, across many companies and for months, use Obsession. It holds its own account at each company and returns every email, text, price and offer dated with a screenshot. For acting inside a person’s own account, use ChatGPT’s cloud browser, or Claude with a password manager that keeps the password from the model. For many browsers driven by your own code, Browserbase and Browser Use keep sessions in Contexts and profiles. For a handful of accounts checked now and then, a person signing in is enough.',
    },

    { kind: 'h2', id: 'own-account', text: 'The other route: a customer of its own' },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.',
    },
    {
      kind: 'p',
      text: 'Each Obsession agent signs up with its own inbox, phone number and browser, says it’s an AI when it talks to a person, and keeps the account open for months ([Obsession agents](/agents)). The account is its own, so nobody lends it a password and no colleague waits up for a code. Every email and text the company sends lands in its inbox, dated, for as long as anyone follows that company.',
    },
    {
      kind: 'p',
      text: 'Search APIs give agents what companies publish. Exa describes itself as searching “the largest index of public web and private information” ([Exa](' +
        EXA +
        ')), and the guide to [web search APIs for AI agents](/blog/best-web-search-api-for-ai-agents) compares it with the rest. Obsession gives agents what a company shows only to its customers, behind the login, dated, and kept for as long as anyone follows the company. Agents call both: search for what a company publishes, and Obsession for what it sends and shows its customers.',
    },
    {
      kind: 'p',
      text: 'Developers reach it with 5 verbs (lookup, facts, evidence, index and notify) over the API, MCP and the TypeScript and Python SDKs. Each new fact can post to a webhook, an address in your app that receives it the moment it lands ([the API and MCP](/developers)). Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting. If your agents need what companies show their customers behind the login, at any company you name, use Obsession.',
    },
    {
      kind: 'cta',
      text: '5 verbs for your agents and your code. What any company shows its customers behind the login, from the welcome email to the cancel offer, each fact dated with its screenshot.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about AI agents and logins' },
    {
      kind: 'faq',
      items: [
        {
          q: 'Can AI agents log in to websites?',
          a: 'Yes. ChatGPT’s cloud browser, Claude’s computer use, Browserbase and Browser Use can fill in a sign-in form and keep the session cookie, so later visits skip the form. One-time codes, bot checks and expired sessions still hand the run back to a person.',
        },
        {
          q: 'Can an AI agent sign up for a website?',
          a: 'Yes, where the sign-up asks only for what the agent can receive, such as an email address for the confirmation link or a phone number for a text. Anthropic says Claude’s ability to create accounts on social media platforms is limited. An identity check or a bot check in front of the step can end the sign-up there.',
          link: { label: 'What an Obsession agent does', to: '/agents' },
        },
        {
          q: 'Do AI agents have internet access?',
          a: 'Through the tools they are given. A search API returns pages from an index, a browser tool opens pages and clicks through them, and a signed-in browser reaches what an account can see. An agent with none of these answers from what its model learned in training.',
          link: { label: 'Web search APIs for AI agents', to: '/blog/best-web-search-api-for-ai-agents' },
        },
        {
          q: 'Is it safe to give an AI agent my password?',
          a: 'It is safer when the model never sees it. OpenAI’s cloud browser takes credentials in a secure form that goes straight to the remote browser. 1Password’s integration with Claude fills logins after a biometric approval, without showing the password or code to the model. OpenAI’s help page also tells people never to paste passwords, security codes or payment details into the conversation.',
        },
        {
          q: 'Can AI agents get past two-factor authentication?',
          a: 'With help. An agent can enter a code a person reads out, or make an authenticator code if it holds the secret, and a saved session skips the prompt until the cookie expires. A passkey ties the sign-in to the site’s domain and the person’s device, so the person or their password manager has to approve it.',
        },
        {
          q: 'Is it legal for an AI agent to log in to a website for me?',
          a: 'It depends on the site’s terms and the law where each side is. In the US, the Ninth Circuit held in August 2026 that, on the facts in Amazon v. Perplexity, the user accessed Amazon with the agent’s help, and said sites can still set rules in their terms. In the UK, access is unauthorised without consent from whoever is entitled to control it. This is general information, not legal advice.',
        },
        {
          q: 'How do websites know a visitor is an AI agent?',
          a: 'From what it says about itself, and from how it behaves. A user-agent string names the browser or agent, and Web Bot Auth adds a cryptographic signature the site checks against keys the operator publishes. OpenAI’s cloud browser signs its requests this way. Sites also score each visit and show a CAPTCHA to visitors they can’t place.',
          link: { label: 'Agent ready website', to: '/blog/agent-ready-website' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'General information, not legal advice',
      text: 'Each legal point names the place it applies and links to the law or the court’s own text, as they stood on 11 November 2026. It’s general information, not legal advice. For a specific plan, ask a lawyer where your company and the site operate. Prices and features come from each provider’s own pages on the same date. Larkfield is an invented company.',
    },
  ],

  sources: [
    { title: 'RFC 6265: HTTP State Management Mechanism', publisher: 'IETF, RFC Editor', url: RFC6265, date: '2011-04' },
    { title: 'Using cloud browser in ChatGPT', publisher: 'OpenAI Help Center', url: OPENAI_CLOUD, date: '2026-10-28' },
    { title: 'Computer use tool', publisher: 'Claude Platform Docs, Anthropic', url: CLAUDE_CU },
    {
      title: '1Password and Anthropic bring secure credential access to Claude',
      publisher: '1Password',
      url: ONEPASS,
      date: '2026-07-16',
    },
    { title: 'Contexts', publisher: 'Browserbase docs', url: BB_CONTEXTS },
    { title: 'Profiles', publisher: 'Browser Use docs', url: BU_PROFILES },
    { title: '2FA', publisher: 'Browser Use docs', url: BU_2FA },
    { title: 'Interact', publisher: 'Firecrawl docs', url: FC_INTERACT },
    { title: 'RFC 6749: The OAuth 2.0 Authorization Framework', publisher: 'IETF, RFC Editor', url: RFC6749, date: '2012-10' },
    { title: 'RFC 6238: TOTP, Time-Based One-Time Password Algorithm', publisher: 'IETF, RFC Editor', url: RFC6238, date: '2011-05' },
    { title: 'SP 800-63B-4: Digital Identity Guidelines, Authentication and Authenticator Management', publisher: 'NIST', url: NIST, date: '2025-08' },
    { title: 'Inaccessibility of CAPTCHA: alternatives to visual Turing tests on the web', publisher: 'W3C', url: W3C_CAPTCHA, date: '2021-12-16' },
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
    { title: 'Pricing', publisher: 'Browser Use', url: BU_PRICING },
    { title: 'RFC 9421: HTTP Message Signatures', publisher: 'IETF, RFC Editor', url: RFC9421, date: '2024-02' },
    { title: 'Web Bot Auth', publisher: 'Cloudflare docs', url: CF_WBA, date: '2026-10-08' },
    { title: 'ChatGPT Work’s cloud browser allowlisting', publisher: 'OpenAI Help Center', url: OPENAI_ALLOW, date: '2026-11-10' },
    { title: 'Web Bot Auth (webbotauth) working group charter', publisher: 'IETF', url: IETF_WBA },
    {
      title: 'Amazon.com Services, LLC v. Perplexity AI, Inc., No. 26-1444, opinion',
      publisher: 'US Court of Appeals for the Ninth Circuit',
      url: CA9_AMAZON,
      date: '2026-08-04',
    },
    { title: '18 U.S.C. §1030: fraud and related activity in connection with computers', publisher: 'Legal Information Institute, Cornell Law School', url: USC_1030 },
    { title: 'Van Buren v. United States, No. 19-783, opinion', publisher: 'Supreme Court of the United States', url: VAN_BUREN, date: '2021-06-03' },
    { title: 'hiQ Labs, Inc. v. LinkedIn Corp., No. 17-16783, opinion on remand', publisher: 'US Court of Appeals for the Ninth Circuit', url: HIQ, date: '2022-04-18' },
    { title: 'Computer Misuse Act 1990, section 1', publisher: 'legislation.gov.uk', url: CMA_1 },
    { title: 'Computer Misuse Act 1990, section 17', publisher: 'legislation.gov.uk', url: CMA_17 },
    { title: 'Vision: image limits and costs', publisher: 'Claude Platform Docs, Anthropic', url: CLAUDE_VISION },
    { title: 'Pricing', publisher: 'Claude Platform Docs, Anthropic', url: CLAUDE_PRICING },
    { title: 'Exa: search API for AI agents', publisher: 'Exa', url: EXA },
  ],

  related: [
    'scrape-data-behind-login',
    'the-web-behind-the-login',
    'best-web-search-api-for-ai-agents',
    'agent-ready-website',
    'recipe:competitor-tracking',
    'recipe:trial-teardown',
    '/agents',
    '/developers',
  ],
}

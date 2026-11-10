import type { BlogPost } from './types'

/* Wave 2, batch 1, spec 5 (_research/seo/revamp-11nov/WAVE2_BRIEF.md and WAVE2_SLATE.md, 11 Nov 2026). Owns "scrape data
   behind login" and its family: web scraping behind login, web scraping with login, scraping website with login python,
   python web scraping with login, n8n web scraping with login, how to scrape a website that requires login, can web
   scraping be detected (Google autocomplete US and UK, _research/seo/revamp-11nov/autocomplete_11nov_b.json). Page 1 on
   11 Nov was Reddit, GitHub and small blogs (competitors-11nov/serp_11nov.json). Readers: developers and data teams (S2).
   Leaves "can ai agents log in to websites" to can-ai-agents-log-in-to-websites, the category to the-web-behind-the-login,
   the public web APIs to exa-vs-tavily-vs-firecrawl and competitor mystery shopping law to
   is-it-legal-to-mystery-shop-competitors, linking each with its own phrase.
   Evidence, each read on its own page on 11 Nov 2026: RFC 6265 (cookies), the OWASP CSRF cheat sheet, RFC 6238 (TOTP),
   RFC 9309 (robots.txt), requests' Session docs, Playwright's Python auth docs, Firecrawl's scrape, Interact and pricing
   pages, Browserbase's Contexts, authentication and pricing pages, Browser Use's Browsers, profile sync and pricing pages
   (its old authentication address now redirects to Browsers), n8n's HTTP Request node, HTML node and pricing pages,
   RFC 6585 (429), 18 U.S.C. 1030 at Cornell LII, the Van Buren opinion (3 June 2021) and the Ninth Circuit's hiQ
   opinion (18 April 2022) read from the courts' own PDFs, the Computer Misuse Act 1990 ss. 1 and 17 and UK GDPR
   Article 4 on legislation.gov.uk. Vendor docs are paraphrased, never quoted; quoted words are from statutes, court
   opinions and RFCs. Obsession facts only in the live site's words (site.ts ENTITY, /developers, /agents). Quillon and
   Larkfield, and everything in both pictures, are invented. No dashes. */

const RFC6265 = 'https://www.rfc-editor.org/rfc/rfc6265.html'
const OWASP_CSRF = 'https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html'
const RFC6238 = 'https://www.rfc-editor.org/rfc/rfc6238.html'
const RFC9309 = 'https://www.rfc-editor.org/rfc/rfc9309.html'
const REQUESTS = 'https://requests.readthedocs.io/en/latest/user/advanced/'
const PW_AUTH = 'https://playwright.dev/python/docs/auth'
const PW_GITHUB = 'https://github.com/microsoft/playwright'
const FC_SCRAPE = 'https://docs.firecrawl.dev/features/scrape'
const FC_INTERACT = 'https://docs.firecrawl.dev/features/interact'
const FC_PRICING = 'https://www.firecrawl.dev/pricing'
const BB_CONTEXTS = 'https://docs.browserbase.com/platform/browser/core-features/contexts'
const BB_AUTH = 'https://docs.browserbase.com/platform/identity/authentication'
const BB_PRICING = 'https://www.browserbase.com/pricing'
const BU_BROWSERS = 'https://docs.browser-use.com/open-source/browsers'
const BU_PROFILES = 'https://docs.browser-use.com/cloud/guides/profile-sync'
const BU_PRICING = 'https://browser-use.com/pricing'
const N8N_HTTP = 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/'
const N8N_HTML = 'https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.html/'
const N8N_PRICING = 'https://n8n.io/pricing/'
const RFC6585 = 'https://www.rfc-editor.org/rfc/rfc6585.html'
const CFAA = 'https://www.law.cornell.edu/uscode/text/18/1030'
const VAN_BUREN = 'https://www.supremecourt.gov/opinions/20pdf/19-783_k53l.pdf'
const HIQ = 'https://cdn.ca9.uscourts.gov/datastore/opinions/2022/04/18/17-16783.pdf'
const CMA_S1 = 'https://www.legislation.gov.uk/ukpga/1990/18/section/1'
const CMA_S17 = 'https://www.legislation.gov.uk/ukpga/1990/18/section/17'
const UK_GDPR_4 = 'https://www.legislation.gov.uk/eur/2016/679/article/4'

const LOG_IN = '/blog/can-ai-agents-log-in-to-websites'
const BEHIND = '/blog/the-web-behind-the-login'
const SEARCH_APIS = '/blog/exa-vs-tavily-vs-firecrawl'
const MYSTERY_LAW = '/blog/is-it-legal-to-mystery-shop-competitors'

export const post: BlogPost = {
  slug: 'scrape-data-behind-login',
  title: 'How to scrape data behind a login: sessions, cookies, MFA, and when to use an index',
  dek: 'Sign in once with your own account, save the session the site hands back, and send it with every request until it expires. It works the same in Python, Playwright, hosted browsers and n8n, and some jobs need an index of what companies send their customers.',
  metaTitle: 'Scrape data behind a login: sessions and MFA for developers',
  description:
    'Scrape data behind a login with your own account: Python sessions, Playwright storage state, CSRF, MFA, rate limits, the law, and when an index fits.',
  answer:
    'To scrape data behind a login, sign in once with your own account, save the session the site sets, and send it with every request until it expires. Use a Python requests session for a plain form login or Playwright’s saved storage state for a JavaScript site, and plan for CSRF tokens, one-time codes and rate limits. For what many companies show their customers over weeks, Obsession keeps each email, price and offer dated with its screenshot, by API or MCP (how AI agents call tools).',
  primaryKeyword: 'scrape data behind login',
  keywords: [
    'web scraping behind login',
    'web scraping with login',
    'scraping website with login python',
    'python web scraping with login',
    'n8n web scraping with login',
    'how to scrape a website that requires login',
    'can web scraping be detected',
  ],
  category: 'Behind the login',
  published: '2026-11-11',
  updated: '2026-11-11',
  readingMinutes: 16,
  order: 10,
  authors: [
    { name: 'Seun Akinniranye', role: 'Cofounder' },
    { name: 'James Akinniranye', role: 'Cofounder' },
  ],
  hero: {
    art: {
      kind: 'log',
      title: 'app.quillon.example',
      who: 'A scraper on its owner’s account, run every morning',
      status: { tone: 'fail', text: 'Stopped on day 31' },
      rows: [
        { time: 'Day 1 09:00', text: 'Signs in with the owner’s password', detail: 'Session cookie set, state.json saved', tone: 'ok' },
        { time: 'Day 1 09:02', text: 'Reads 40 report pages', detail: 'Signed-in marker found first', tone: 'ok' },
        { time: 'Day 2 09:00', text: 'Starts from state.json', detail: 'No login form, no password sent', tone: 'ok' },
        { time: 'Day 4 09:01', text: '429 Too Many Requests', detail: 'Waits the 120 seconds Retry-After asks', tone: 'late' },
        { time: 'Day 31 09:00', text: 'Redirected to the login page', detail: 'The session cookie expired', tone: 'fail' },
        { time: 'Day 31 09:01', text: 'Asks for a 6-digit code', detail: 'Sent to the owner’s phone, so the run stops', tone: 'fail' },
      ],
      foot: 'Invented site. The saved session carried 30 days of runs; the code needed a person.',
    },
  },

  blocks: [
    {
      kind: 'p',
      text: 'Developers and data teams scrape behind a login to pull reports, orders, prices or messages from accounts they hold, when the site offers no export that fits. Every tool follows the same method. Sign in once, keep the cookie or token the site hands back, send it with each request, and stop when the site stops accepting it.',
    },

    { kind: 'h2', id: 'how-logins-work', text: 'How a login keeps you signed in' },
    {
      kind: 'p',
      text: 'A login is an exchange. You send a username and password once, and the site answers with something your browser sends back on every later request to prove it’s still you. On most sites that is a session cookie. [RFC 6265](' +
        RFC6265 +
        '), the standard for cookies, has the server set a cookie, a short named string, in a Set-Cookie header. The browser returns it in a Cookie header on each later request to the same site. A session cookie usually holds a long random ID that points to your session on the server. It is often marked HttpOnly, which RFC 6265 says “limits the scope of the cookie to HTTP requests”, so the page’s own scripts can’t read it.',
    },
    {
      kind: 'p',
      text: 'Sites built as JavaScript apps often keep a token in local storage or IndexedDB, the browser’s own storage for each site, instead of a cookie or beside one. Forms add a CSRF token, short for cross-site request forgery token. In [OWASP’s guidance](' +
        OWASP_CSRF +
        '), the server generates it once per session or per request, sends it inside the page, and rejects a form post where the token is missing or doesn’t match.',
    },
    {
      kind: 'p',
      text: 'MFA (multi-factor authentication) asks for a second check after the password. It can be a code from an authenticator app or a text message, a push to a phone, or a passkey. Authenticator codes follow [TOTP](' +
        RFC6238 +
        '), the time-based one-time password standard, which derives a fresh code from a secret shared at setup and the clock, every 30 seconds by default. A scraper can’t answer any of these without the phone, the secret or the passkey, which is the point of MFA. When you set up your own account’s authenticator, you hold the secret and your code can compute the codes, but a secret stored beside the password turns two factors back into one.',
    },
    {
      kind: 'p',
      text: 'A scraper behind a login therefore has three jobs: get the session once, carry it on every request, and notice when the site stops accepting it.',
    },

    { kind: 'h2', id: 'before', text: 'Before you write any code' },
    {
      kind: 'list',
      items: [
        '**Use your own account,** or one your company holds for this job. Someone else’s password, a shared login the terms forbid, or an account the site has closed is where the legal risk gathers.',
        '**Look for an export or an API first.** A CSV export or a documented API stays inside the site’s terms and survives a redesign. A scraper breaks every time the page layout changes.',
        '**Read the terms you accepted at sign-up.** Check whether they forbid automated access or scraping. Breaking them can be a contract claim even where computer misuse law doesn’t apply.',
        '**Read robots.txt as crawling preferences.** [RFC 9309](' +
          RFC9309 +
          '), the standard for robots.txt, says its rules “are not a form of access authorization”. The login is the site’s access control.',
        '**Store the session like a password.** A saved cookie lets anyone who holds it act as you until it expires. Keep it in a secrets store or an ignored folder, never in a repository.',
      ],
    },

    { kind: 'h2', id: 'python', text: 'Scraping a website with login in Python' },
    {
      kind: 'p',
      text: 'For a site that renders its pages on the server and signs in through a plain HTML form, an HTTP client is enough. A [requests Session](' +
        REQUESTS +
        ') keeps cookies across every request made from it and reuses the connection to the same host, so you sign in once and the cookie travels with each later call.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Create the session: **s = requests.Session()**.',
        'Fetch the login page with **s.get(login_url, timeout=10)** and read the hidden CSRF field from the form with an HTML parser.',
        'Post the form with **s.post(login_url, data=form)**. The form holds the username, the password read from an environment variable, the token and any other hidden fields.',
        'Request a page only a signed-in user sees and look for a marker, such as your account name or a Log out link.',
        'Fetch the pages you need from the same session, with a timeout on every call and a pause between pages.',
      ],
    },
    {
      kind: 'p',
      text: '**A pass:** step 4 finds the marker. If the response is the login page again, the post was rejected. Sign in by hand once with the browser’s developer tools open on the Network tab. Compare the request the form sent with yours: the field names, the hidden values and the redirect after it. A site that signs in through JavaScript calls, or keeps its token in local storage, needs a browser.',
    },

    { kind: 'h2', id: 'playwright', text: 'Playwright: sign in once, save the storage state' },
    {
      kind: 'p',
      text: '[Playwright](' +
        PW_GITHUB +
        ') is an open source library that drives Chromium, Firefox and WebKit through one API. Its storage state is a JSON file of the cookies and stored data a signed-in browser holds. A new browser context, Playwright’s name for a clean, separate browser profile, loads it and starts signed in. In Python, [the steps](' +
        PW_AUTH +
        ') are these:',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'Sign in once in a visible browser, entering any one-time code by hand.',
        'Save the state with the context’s **storage_state**, giving it a path such as state.json.',
        'Start every later run from it: open a **new_context** with **storage_state** set to that file.',
        'Open a signed-in page first and check the marker. If it’s gone, stop and sign in again.',
      ],
    },
    {
      kind: 'p',
      text: 'Playwright’s docs say saved state covers cookies, local storage and passkey logins. IndexedDB is saved only when you turn on the **indexed_db** option, which apps that keep their token there need; Firebase Authentication is Playwright’s example. Session storage isn’t saved at all, and the docs give a short script for the rare site that keeps sign-in data there. They also warn that the file can hold cookies and headers that let anyone with it act as you. Keep it out of version control, and delete it once it expires.',
    },
    {
      kind: 'p',
      text: '**A pass:** a fresh run opens a signed-in page without ever seeing the login form.',
    },

    { kind: 'h2', id: 'hosted', text: 'Hosted scrapers and browsers that keep a login' },
    {
      kind: 'p',
      text: 'When the job runs in the cloud, on a schedule or across many browsers at once, hosted tools keep the same saved session for you. Each is described from its own pages as of 11 November 2026.',
    },
    { kind: 'h3', id: 'firecrawl', text: 'Firecrawl: actions, Interact and profiles' },
    {
      kind: 'p',
      text: 'Firecrawl turns web pages into clean markdown. [Its scrape endpoint](' +
        FC_SCRAPE +
        ') accepts actions, such as write, press, click and wait, which run in order before the page is read. Its docs show actions filling in a login form. For signed-in work its docs recommend [Interact](' +
        FC_INTERACT +
        '), a browser session driven by plain-language prompts or Playwright code. Interact can save cookies and local storage to a named profile when the session stops, and later scrapes load that profile already signed in. One session at a time can write to a profile. Sessions end after 10 minutes by default, or after 5 minutes idle. A browser minute costs 2 credits with code or 7 with prompts.',
    },
    { kind: 'h3', id: 'browserbase', text: 'Browserbase: Contexts' },
    {
      kind: 'p',
      text: 'Browserbase runs browsers in the cloud. [A Context](' +
        BB_CONTEXTS +
        ') carries a browser’s user data from one session to the next: cookies, local storage, IndexedDB and session storage. Browserbase encrypts it at rest. A session started with persist set to true writes its changes back when it closes. [Its authentication guide](' +
        BB_AUTH +
        ') advises signing in once by hand through its live view of the browser, then reusing the Context. It says two-step codes and magic links usually need a person in the loop. The Contexts page adds that Contexts don’t expire but a site’s cookies still do, after 30 days in its example, and advises one Context per site and login, with no two sessions on one Context at once.',
    },
    { kind: 'h3', id: 'browser-use', text: 'Browser Use: your Chrome or a cloud profile' },
    {
      kind: 'p',
      text: '[Browser Use](' +
        BU_BROWSERS +
        ') is an open source library in which an AI model drives the browser from a task written in plain words. It can attach to the Chrome you already have open, with your logins, or start a new Chrome on a temporary copy of one of your Chrome profiles. Its docs warn that code the model writes can read the cookies in those profiles, and advise running untrusted tasks in a container or virtual machine. Cloud browsers keep logins in [a profile](' +
        BU_PROFILES +
        ') of cookies and local storage, which the docs say to sync again when a site’s login expires. Cloud browsers also solve CAPTCHAs automatically unless the solver is turned off.',
    },
    { kind: 'h3', id: 'n8n', text: 'n8n web scraping with login' },
    {
      kind: 'p',
      text: 'n8n builds scheduled workflows from nodes. [Its HTTP Request node](' +
        N8N_HTTP +
        ') sends any request with your own headers, can return the response headers and status code with the body, and can import a request pasted as a cURL command. Its batching option sets how many items go in each batch and how long to wait between batches.',
    },
    {
      kind: 'list',
      ordered: true,
      items: [
        'An HTTP Request node posts the login form, with the response headers turned on.',
        'The next step reads the session cookie from the set-cookie header.',
        'Every later HTTP Request node sends it as a Cookie header, held in a Header Auth credential so the cookie stays out of the workflow itself.',
        '[The HTML node](' + N8N_HTML + ') extracts each field from the page by CSS selector.',
      ],
    },
    {
      kind: 'p',
      text: 'n8n has no browser of its own, so for a JavaScript site the HTTP Request node calls a hosted browser’s API. A request copied from the browser’s developer tools as cURL carries your live session cookie, so treat the pasted command like a password.',
    },
    {
      kind: 'p',
      text: 'Teams building agents that sign in for a person face the same cookies and codes at a larger scale. [Can AI agents log in to websites](' +
        LOG_IN +
        ') covers browser agents, signed agents and the cost of each run.',
    },

    { kind: 'h2', id: 'breaks', text: 'Why logged-in scraping breaks, and the fix' },
    {
      kind: 'p',
      text: 'Scrapers behind a login fail quietly. The most common failure is a run that saves the login page as data, because the session expired overnight. Check a signed-in marker before every run, and stop the run on any of these signs.',
    },
    {
      kind: 'table',
      caption: 'The signs a logged-in scraper has stopped working, what causes each, and the fix',
      cols: ['What you see', 'Cause', 'Fix'],
      rows: [
        ['The login page where data should be', 'The session expired or the cookie wasn’t sent', 'Check the marker first; sign in again'],
        ['A 403 or a form error on submit', 'A stale or missing CSRF token', 'Read a fresh token from the form each time'],
        ['A request for a 6-digit code', 'MFA, or a new device or network', 'Sign in by hand once; keep the same profile'],
        ['429 Too Many Requests', 'A rate limit', 'Wait for Retry-After; pause between pages'],
        ['Signed out in the middle of a run', 'Two sessions on one login', 'One run at a time per account'],
        ['Empty fields after a site update', 'The page layout changed', 'Select by label or role; check the values'],
        ['A warning or a locked account', 'Automated use the terms forbid', 'Switch to the export or API; slow down'],
      ],
    },
    {
      kind: 'p',
      text: '[RFC 6585](' +
        RFC6585 +
        ') defines 429 Too Many Requests for a client that “has sent too many requests in a given amount of time”. The server may add a Retry-After header saying how long to wait. Honour it, keep a pause between pages, and keep one session per account, because two runs on one login can sign each other out.',
    },

    { kind: 'h2', id: 'law', text: 'The legal lines, in the US and the UK' },
    {
      kind: 'p',
      text: 'Scraping behind a login is a different legal question from scraping public pages, because the login is the site’s permission system. Each point names the place it applies, and all of it is general information, never legal advice.',
    },
    { kind: 'h3', id: 'cfaa', text: 'United States: the Computer Fraud and Abuse Act' },
    {
      kind: 'p',
      text: 'The Computer Fraud and Abuse Act covers anyone who accesses a computer “without authorization” or “exceeds authorized access” and obtains information ([18 U.S.C. § 1030](' +
        CFAA +
        ')). It is a criminal law, and it also lets anyone who suffers damage or loss sue. In [Van Buren v. United States](' +
        VAN_BUREN +
        '), decided on 3 June 2021, the Supreme Court read it as a “gates-up-or-down inquiry”. A person exceeds authorized access by obtaining information from areas of a computer, such as files, folders or databases, that are off limits to them. The Court left open whether limits written into contracts or policies count, or only technical ones.',
    },
    {
      kind: 'p',
      text: 'In [hiQ Labs v. LinkedIn](' +
        HIQ +
        '), filed on 18 April 2022, the Ninth Circuit said the Act is likely violated when a person circumvents “generally applicable rules regarding access permissions, such as username and password requirements”. The public parts of a website, it said, have no gate to lift. Earlier cases govern situations where permission is required and was never given or has been revoked. Sites also keep other claims where the Act doesn’t apply, breach of contract among them. On those lines, your own credentials on your own account, used within the terms you accepted, are the safest ground.',
    },
    { kind: 'h3', id: 'cma', text: 'United Kingdom: the Computer Misuse Act' },
    {
      kind: 'p',
      text: 'Section 1 of the [Computer Misuse Act 1990](' +
        CMA_S1 +
        ') makes it an offence to cause a computer to perform a function intending to access a program or data. The access must be unauthorised, and the person must know it. Under [section 17(5)](' +
        CMA_S17 +
        '), access is unauthorised when the person isn’t entitled to control it and has no consent from someone who is.',
    },
    { kind: 'h3', id: 'personal-data', text: 'Personal data on the page' },
    {
      kind: 'p',
      text: 'Pages behind a login often show other people’s details, such as a member directory or a customer list. The UK GDPR’s [Article 4](' +
        UK_GDPR_4 +
        ') counts collection, recording, storage and retrieval of personal data as processing, so the law’s duties apply to a scraper as much as to a form. Watching a competitor as a customer raises its own questions, which [is it legal to mystery shop competitors](' +
        MYSTERY_LAW +
        ') answers by jurisdiction.',
    },

    { kind: 'h2', id: 'index', text: 'When an index is the better answer' },
    {
      kind: 'p',
      text: 'A logged-in scraper answers one question well: what does this account show right now. Three jobs sit outside it.',
    },
    {
      kind: 'list',
      items: [
        '**What arrives, rather than what sits on a page.** Welcome emails, texts and renewal notices reach an inbox or a phone. The offer a company makes when a customer clicks Cancel appears once, at that moment. No page holds any of them for a scraper to read.',
        '**Many companies at once.** Following 30 competitors means 30 accounts, each with its own email address and often a phone number. It also means 30 sign-in routines to keep alive through expiries and codes, and 30 parsers to mend after each redesign.',
        '**A dated history.** A scraper’s record starts the day it starts. A team that has to show when an offer appeared, or that a reminder never came, needs each email kept as it arrived and each page captured with its time.',
      ],
    },
    {
      kind: 'art',
      caption: 'What a customer of an invented coffee subscription received in its first 30 days. Most of it arrived by email or text, the plan price showed only after sign-up, and the save offer appeared only in the cancel flow.',
      art: {
        kind: 'log',
        title: 'larkfield.example, a customer’s 30 days',
        who: 'A new subscriber, signed up on day 0',
        rows: [
          { time: 'Day 0 09:12', text: 'Welcome email with 15% off', detail: 'Code WELCOME15, valid for 7 days', tone: 'ok' },
          { time: 'Day 2 18:40', text: 'Text: free delivery this week', detail: 'To the number given at sign-up', tone: 'info' },
          { time: 'Day 6 10:05', text: 'Email: the code ends tomorrow', detail: 'No sign of it on the website', tone: 'info' },
          { time: 'Day 14 08:00', text: 'Plan shown at £12 a month', detail: 'Signed in; the public page says £15', tone: 'info' },
          { time: 'Day 21 07:30', text: 'Price rise notice by email', detail: '£12 to £14 from next month', tone: 'late' },
          { time: 'Day 29 16:22', text: 'Cancel flow offers 3 months at half price', detail: 'Shown only after Cancel is clicked', tone: 'info' },
        ],
        foot: 'Invented company. No page a scraper could open on day 1 holds any of these rows.',
      },
    },
    {
      kind: 'p',
      text: 'Obsession collects what companies show only to customers, step by step: their screens, emails and texts, member prices, trial limits, quotes and cancel offers, each dated with a screenshot. Teams and AI agents look up any company through the API or MCP, and a company not yet covered is added on request.',
    },
    {
      kind: 'p',
      text: 'Exa, Tavily and Firecrawl give AI agents the public web, the pages any visitor can read, and [Exa vs Tavily vs Firecrawl](' +
        SEARCH_APIS +
        ') compares them. Playwright, Browserbase and Firecrawl’s profiles keep your own logins working. Obsession keeps what each company shows only to its customers, past the sign-up and the login, dated, for as long as anyone follows the company. An agent can call all of them: search for what a company publishes, a scraper for what your own account holds, and Obsession for what each company sends and shows its customers. [The web behind the login](' +
        BEHIND +
        ') explains what sits past each sign-up, login, form, checkout and cancel flow.',
    },
    {
      kind: 'p',
      text: 'Agents reach it with 5 verbs: lookup, facts, evidence, index and notify. They work the same over MCP, the standard way AI agents call tools, the API, and SDKs in TypeScript and Python. The evidence verb returns the raw email with its DKIM result, a signature checked on arrival to prove which company sent it, or the page as captured, with its time. Notify posts each new fact to a webhook, an address on your server, the moment it lands. Each Obsession agent uses accounts of its own and tells any person it talks to that it’s an AI. No Obsession agent gets round a CAPTCHA or a bot block, as [the rules every Obsession agent keeps](/agents) set out. Obsession’s agents have run 1,500 sign-ups, baskets and checkouts at real companies, and counting.',
    },

    { kind: 'h2', id: 'compared', text: 'Tools for scraping behind a login, compared', compare: true },
    {
      kind: 'p',
      text: 'The options run from the site’s own export to your own code, hosted browsers, AI agents and an index. We make Obsession, so every other option is described from its provider’s own pages as of 11 November 2026.',
    },
    {
      kind: 'table',
      compare: true,
      caption: 'Ways to collect data behind a login, from each provider’s own pages on 11 November 2026. Prices as listed',
      cols: ['Option', 'What it does well', 'Price', 'Where it stops', 'Best for'],
      rows: [
        ['By hand: sign in and copy', 'Sees exactly what the account shows', 'Free, plus staff time', 'One account, one moment', 'A one-off pull of your own data'],
        ['The site’s export or API', 'Inside the terms; survives redesigns', 'Set by each site', 'Only the fields it offers', 'Your own data, every week'],
        [
          'Python: [requests Session](' + REQUESTS + ')',
          'Fast HTTP; keeps cookies across requests',
          'Free, open source',
          'Runs no JavaScript; you parse the HTML',
          'Server-rendered pages with a form login',
        ],
        [
          'Browser: [Playwright](' + PW_AUTH + ')',
          'A real browser; saves and reloads signed-in state',
          'Free, open source (Apache 2.0)',
          'You host it, and handle codes and expiry',
          'JavaScript sites, on your machine or in CI',
        ],
        [
          'Hosted scraper: [Firecrawl](' + FC_PRICING + ') Interact',
          'Saved login profiles; pages as clean markdown',
          'Free: 1,000 credits a month\nHobby: $19 a month\nInteract: 2 or 7 credits a minute',
          'Sessions end after 10 minutes by default\nOne writer per profile',
          'Signed-in pages as clean markdown',
        ],
        [
          'Hosted browser: [Browserbase](' + BB_PRICING + ') Contexts',
          'Logins kept across sessions, encrypted at rest',
          'Free: 1 browser hour\nDeveloper: $20 a month for 100 hours',
          'Two-step codes usually need a person',
          'Many cloud browsers on saved logins',
        ],
        [
          'AI browser agent: [Browser Use](' + BU_PRICING + ')',
          'Plain-language tasks in your Chrome or a cloud profile',
          'Open source harness: $0\nCloud browser: $0.02 an hour',
          'Profiles need syncing when logins expire',
          'Tasks too varied to script',
        ],
        [
          'Workflow: [n8n](' + N8N_PRICING + ')',
          'HTTP requests with headers, batching and HTML extraction',
          'Starter: €20 a month, billed annually',
          'No browser of its own',
          'A scheduled job around a form login',
        ],
        [
          'Obsession (ours): [Competitor tracking](/recipes/competitor-tracking), [Trial teardown](/recipes/trial-teardown), [the API and MCP](/developers)',
          'What each company shows only to customers, sign-up to cancel, dated with its screenshot',
          'Early access, onboarding teams now. Priced per call or per company watched',
          'Leaves your own account’s data to your export or scraper',
          'Many companies followed for months, by API or MCP',
        ],
      ],
    },
    {
      kind: 'p',
      text: 'For what many companies send and show their customers over weeks, with each email and page kept as it arrived, use Obsession. For your own account’s data, start with the site’s export or API. Use a requests session for a server-rendered form login, and Playwright with saved storage state for a JavaScript site. Firecrawl Interact fits signed-in pages as markdown, and Browserbase Contexts fit many cloud browsers on saved logins. Browser Use fits tasks too varied to script, and n8n runs any of them on a schedule.',
    },

    { kind: 'h2', id: 'when-script', text: 'When your own script is enough' },
    {
      kind: 'list',
      items: [
        '**Your own account on one site,** with a report you pull each week and a layout that rarely changes.',
        '**A one-off backfill** of your own data before you move to another tool.',
        '**A site with an awkward export,** where a script tidies a file the site already gives you.',
        '**Data that sits on a page whenever you look,** such as an order history or a usage dashboard, rather than messages that arrive over time.',
      ],
    },

    { kind: 'h2', id: 'start', text: 'Start with one signed-in page' },
    {
      kind: 'p',
      text: 'Sign in by hand once, save the session, and write the marker check before anything else; it catches most failures before they become bad data. For what other companies send and show their customers, across as many companies as your agent asks about, connect Obsession through the API or MCP.',
    },
    {
      kind: 'cta',
      text: 'Your agents look up what any company shows only to its customers, from the welcome email to the cancel offer. Each fact is dated with its screenshot. 5 verbs over MCP, the API and SDKs. Priced per call or per company watched, never per token.',
      to: '/developers',
      label: 'See the API and MCP',
    },

    { kind: 'h2', id: 'questions', text: 'Questions about scraping behind a login' },
    {
      kind: 'faq',
      items: [
        {
          q: 'How do I scrape a website that requires login?',
          a: 'Sign in once with your own account, save the session the site sets, usually a cookie and sometimes a token in local storage, and send it with every request. Before each run, open a page only a signed-in user sees and check for a marker such as your account name. When the marker is gone, sign in again before scraping anything.',
        },
        {
          q: 'How do I scrape a website with login in Python?',
          a: 'For a plain form login, use a requests Session. Fetch the login page, read the hidden CSRF field, post the form, then check a signed-in page. The session keeps the cookie for every later request. For a site built in JavaScript, sign in once with Playwright, save the state with context.storage_state, and load it with browser.new_context on every run.',
        },
        {
          q: 'Can n8n scrape a website with a login?',
          a: 'Yes, for a form login. Post the login form from an HTTP Request node with response headers turned on, and read the session cookie from the set-cookie header. Send it as a Cookie header on later requests, and extract fields with the HTML node. For a JavaScript site, call a hosted browser’s API from the HTTP Request node, because n8n has no browser of its own.',
        },
        {
          q: 'How do I handle MFA when scraping?',
          a: 'Sign in by hand once, entering the code yourself, then reuse the saved session until it expires. Browserbase’s guide says two-step codes and magic links usually need a person in the loop. Keep the same browser profile and network, because a new device can trigger the code again.',
        },
        {
          q: 'Is scraping behind a login legal in the US?',
          a: 'In hiQ Labs v. LinkedIn in 2022, the Ninth Circuit said the Computer Fraud and Abuse Act is likely violated when someone gets round username and password requirements. It added that sites keep other claims, such as breach of contract. Your own credentials on your own account, within the terms you accepted, are the safest ground. This is general information, not legal advice.',
        },
        {
          q: 'Can web scraping be detected?',
          a: 'Yes. Every request a logged-in scraper sends carries the account’s session, so the site knows which account made it, how often and from which network. Sites slow fast accounts with 429 responses and many run bot checks such as CAPTCHAs. Scrape at a person’s pace, keep one session per account, and stop when the site asks.',
        },
        {
          q: 'When is an index better than a logged-in scraper?',
          a: 'When the job is what many companies send and show their customers over weeks: welcome emails, texts, member prices, trial limits and cancel offers. Obsession keeps each one dated with its screenshot or the email itself, and agents look companies up through the API or MCP. Teams start in early access.',
          link: { label: 'See sample data', to: '/sample-output' },
        },
      ],
    },
    {
      kind: 'note',
      title: 'General information, not legal advice',
      text: 'Each legal point names the place it applies and links to the law or the court’s own opinion, as read on 11 November 2026. It’s general information, not legal advice. For a specific plan, ask a lawyer where your company and the site operate. Quillon and Larkfield are invented companies.',
    },
  ],

  sources: [
    { title: 'RFC 6265: HTTP State Management Mechanism', publisher: 'IETF', url: RFC6265, date: '2011-04' },
    { title: 'Cross-Site Request Forgery Prevention Cheat Sheet', publisher: 'OWASP', url: OWASP_CSRF },
    { title: 'RFC 6238: TOTP, Time-Based One-Time Password Algorithm', publisher: 'IETF', url: RFC6238, date: '2011-05' },
    { title: 'RFC 9309: Robots Exclusion Protocol', publisher: 'IETF', url: RFC9309, date: '2022-09' },
    { title: 'Advanced Usage: Session Objects', publisher: 'Requests documentation', url: REQUESTS },
    { title: 'Playwright', publisher: 'Microsoft on GitHub', url: PW_GITHUB },
    { title: 'Authentication (Python)', publisher: 'Playwright documentation', url: PW_AUTH },
    { title: 'Scrape', publisher: 'Firecrawl documentation', url: FC_SCRAPE },
    { title: 'Interact', publisher: 'Firecrawl documentation', url: FC_INTERACT },
    { title: 'Contexts', publisher: 'Browserbase documentation', url: BB_CONTEXTS },
    { title: 'Website authentication', publisher: 'Browserbase documentation', url: BB_AUTH },
    { title: 'Browsers', publisher: 'Browser Use documentation', url: BU_BROWSERS },
    { title: 'Profiles', publisher: 'Browser Use documentation', url: BU_PROFILES },
    { title: 'HTTP Request node', publisher: 'n8n documentation', url: N8N_HTTP },
    { title: 'HTML node', publisher: 'n8n documentation', url: N8N_HTML },
    { title: 'RFC 6585: Additional HTTP Status Codes', publisher: 'IETF', url: RFC6585, date: '2012-04' },
    { title: '18 U.S. Code § 1030: Fraud and related activity in connection with computers', publisher: 'Legal Information Institute, Cornell Law School', url: CFAA },
    { title: 'Van Buren v. United States, No. 19-783', publisher: 'Supreme Court of the United States', url: VAN_BUREN, date: '2021-06-03' },
    { title: 'hiQ Labs, Inc. v. LinkedIn Corporation, No. 17-16783', publisher: 'US Court of Appeals for the Ninth Circuit', url: HIQ, date: '2022-04-18' },
    { title: 'Computer Misuse Act 1990, section 1', publisher: 'legislation.gov.uk', url: CMA_S1 },
    { title: 'Computer Misuse Act 1990, section 17', publisher: 'legislation.gov.uk', url: CMA_S17 },
    { title: 'UK GDPR, Article 4: Definitions', publisher: 'legislation.gov.uk', url: UK_GDPR_4 },
    { title: 'Pricing', publisher: 'Firecrawl', url: FC_PRICING },
    { title: 'Pricing', publisher: 'Browserbase', url: BB_PRICING },
    { title: 'Pricing', publisher: 'Browser Use', url: BU_PRICING },
    { title: 'Pricing', publisher: 'n8n', url: N8N_PRICING },
  ],

  related: [
    'can-ai-agents-log-in-to-websites',
    'the-web-behind-the-login',
    'exa-vs-tavily-vs-firecrawl',
    'recipe:competitor-tracking',
    'recipe:trial-teardown',
    '/developers',
  ],
}

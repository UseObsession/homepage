/* The capture form's own words (components/CaptureForm). Each page's Capture (content/types) sets its button, source,
   placeholder, micro line and, on a recipe page, its own question; everything here is shared by every form. The sign up
   card that follows the email has its own words and the question bank: content/signup.ts. */

export const capture = {
  email: { label: 'Work email', placeholder: 'Your work email' },
  store: {
    label: 'Your store’s web address',
    prefix: 'https://',
    placeholder: 'your-store.example',
    /* Step 2 of the free mystery shop: the email opens under the store. */
    next: 'Where should we send the report?',
  },
  /* The free AI agent check (kind "verify"): the agent's chat page or phone number first, then the email. */
  agent: {
    label: 'Your AI agent’s chat page or phone number',
    /* Shorter than the label (the field's name for screen readers), so it fits the pill beside its button at every
       width; the button and the micro line say whose agent it is. */
    placeholder: 'Chat page or phone number',
    next: 'Where should we send the report?',
    /* The micro line under a verify form, for pages that offer the free check (VERIFY.md 9). */
    micro: 'Free for an AI agent you run, or a client’s with their OK: 3 test customers, 1 channel, your report within 4 days.',
    /* The same, on a form whose blank first field joins the waitlist (Capture.orWaitlist). */
    microOrWaitlist:
      'Free for an AI agent you run, or a client’s with their OK: 3 test customers, 1 channel, your report within 4 days. Leave it blank to join the waitlist.',
    /* A recipe page's own question on the AI agent checks (asked in place of the first job when the agent is left
       blank; with an agent, the card asks content/signup.ts page.verify, the same words). */
    roles: {
      question: 'Whose AI agent is it?',
      options: ['Ours', 'A client’s, with their OK', 'A vendor’s we’re trialling, with their OK'],
    },
  },
  errors: {
    emailEmpty: 'Enter your work email.',
    emailBad: 'That doesn’t look like an email address. Check for a typo.',
    storeEmpty: 'Enter your store’s web address.',
    storeBad: 'That doesn’t look like a web address. Check for a typo.',
    agentEmpty: 'Enter your AI agent’s chat page or phone number.',
    agentBad: 'That doesn’t look like a web address or a phone number. Check for a typo.',
    server: 'That didn’t go through. Try again in a moment.',
    limited: 'Too many tries from this email. Try again in an hour.',
  },
  sending: 'Sending',
  privacy: {
    waitlist: 'We keep your email to set up your first run and tell you about Obsession.',
    mystery: 'We keep your email and store address to run your shop and tell you about Obsession.',
    verify: 'We keep your email and your AI agent’s address to run your check and tell you about Obsession.',
    link: 'Privacy notice',
    to: '/privacy',
  },
  /* The plain thank you: the email is saved, but the sign up card can't open (its code didn't load, or the waitlist
     script is an older one that keeps the email only). The same words as the script's own page after a plain form post. */
  joined: { title: 'You’re on the list.', line: 'We’ll email you to set up your first run.' },
  /* The sign up card's title after a free mystery shop or AI agent check (components/SignupSteps). */
  done: {
    /* {store} is the address without https:// */
    mystery: { title: 'Got it. We’ll shop {store}.' },
    /* {agent} is the chat page without https://, or the phone number as typed. */
    verify: { title: 'Got it. We’ll check {agent}.' },
  },
}

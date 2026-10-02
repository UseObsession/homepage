/* The capture form's own words (components/CaptureForm). Each page's Capture (content/types) sets its button, source,
   placeholder, micro line and roles question; everything here is shared by every form. */

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
    /* After a sign up, unless the page asks its own question. */
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
    waitlist: 'We keep your email to tell you about Obsession, and nothing else.',
    mystery: 'We keep your email and store address to run your shop and tell you about Obsession, and nothing else.',
    verify: 'We keep your email and your AI agent’s address to run your check and tell you about Obsession, and nothing else.',
    link: 'Privacy notice',
    to: '/privacy',
  },
  done: {
    waitlist: { title: 'You’re on the list.', line: 'We’ll email you to set up your first run.' },
    /* {store} is the address without https:// */
    mystery: {
      title: 'Got it. We’ll shop {store}.',
      line: 'First we confirm it’s your store, or that you have the owner’s OK. The report comes to {email}.',
    },
    /* {agent} is the chat page without https://, or the phone number as typed. */
    verify: {
      title: 'Got it. We’ll check {agent}.',
      line: 'First we confirm it’s your AI agent, or that you have the owner’s OK. The report comes to {email}.',
    },
  },
  /* After a sign up, 1 tap tells us what to set it up for. A page can ask its own question instead (Capture.roles). */
  roles: {
    question: 'What do you do?',
    options: ['Agency', 'Founder', 'Sales or CS', 'Marketing', 'Developer', 'Other'],
    thanks: 'Thanks. It’s saved with your sign up.',
    failed: 'That didn’t save. Tap it again.',
  },
  /* Shown only when VITE_WAITLIST_URL is unset (local builds): nothing leaves the browser. */
  preview: 'Preview: nothing was sent.',
}

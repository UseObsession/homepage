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
  errors: {
    emailEmpty: 'Enter your work email.',
    emailBad: 'That doesn’t look like an email address. Check for a typo.',
    storeEmpty: 'Enter your store’s web address.',
    storeBad: 'That doesn’t look like a web address. Check for a typo.',
    server: 'That didn’t go through. Try again in a moment.',
    limited: 'Too many tries from this email. Try again in an hour.',
  },
  sending: 'Sending',
  privacy: {
    waitlist: 'We keep your email to tell you about Obsession, and nothing else.',
    mystery: 'We keep your email and store address to run your shop and tell you about Obsession, and nothing else.',
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

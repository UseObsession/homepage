/* The capture form's own words (components/CaptureForm), shared by every form. Each page's Capture (content/types) sets
   its button and source; the line under the form, the card that opens after the email and its thank you are
   content/setup.ts. */

export const capture = {
  email: { label: 'Work email', placeholder: 'Your work email' },
  errors: {
    emailEmpty: 'Enter your work email.',
    emailBad: 'That doesn’t look like an email address. Check for a typo.',
    emailPersonal: 'Use your work email. We don’t accept personal addresses like Gmail, Yahoo or iCloud.',
    server: 'That didn’t go through. Try again in a moment.',
    limited: 'Too many tries from this email. Try again in an hour.',
  },
  sending: 'Sending',
  /* The plain thank you: the email is saved, but the card can't open (its code didn't load, or the sign-up script is an
     older one that keeps the email only). */
  joined: { title: 'You’re in.', line: 'We’ll email you to set up your account on the Free plan.' },
}

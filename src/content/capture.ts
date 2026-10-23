/* The capture form's own words (components/CaptureForm), shared by every form. Each page's Capture (content/types) sets
   its button and source; the line under the form, the card that opens after the email and its thank you are
   content/join.ts. */

export const capture = {
  email: { label: 'Work email', placeholder: 'Your work email' },
  errors: {
    emailEmpty: 'Enter your work email.',
    emailBad: 'That doesn’t look like an email address. Check for a typo.',
    server: 'That didn’t go through. Try again in a moment.',
    limited: 'Too many tries from this email. Try again in an hour.',
  },
  sending: 'Sending',
  /* The plain thank you: the email is saved, but the card can't open (its code didn't load, or the waitlist script is
     an older one that keeps the email only). The same words as the script's own page after a plain form post. */
  joined: { title: 'You’re on the list.', line: 'We’ll email you when your spot opens.' },
}

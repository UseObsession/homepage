/* The consent card's words (components/ConsentBanner) and the footer's way back to it. Allow and Decline carry equal
   weight, as the ICO asks. The privacy notice's #analytics section says the rest. */
export const consentCopy = {
  label: 'Cookie choice',
  text: 'Can we count your visit? Google Analytics shows us which pages help, and it loads only if you allow it.',
  allow: 'Allow',
  decline: 'Decline',
  more: { label: 'How we use it', to: '/privacy#analytics' },
  settings: 'Cookie settings',
}

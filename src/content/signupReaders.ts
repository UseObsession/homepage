import type { RoleId } from './types'

/* The light part of the sign up's words: what step 1 needs before the card's code has loaded. The email is sent first
   and the card's code is fetched after it (lib/signupStore.ts), so the row's Reader column has to be known without the
   question bank. content/signup.ts reads both of these, so each is said once. */

/* The 6 readers, as "Which of these is you?" offers them and as the sheet's Reader column shows them. */
export const readerNames: Record<RoleId, string> = {
  agency: 'Agency',
  founder: 'Founder',
  sales: 'Sales or success',
  marketing: 'Marketing',
  developer: 'Developer',
  other: 'Something else',
}

/* The pages that know their reader: the 5 reader pages, and a page that names its reader (the agencies use case).
   Every other page asks "Which of these is you?" first. */
export const readerPages: Record<string, RoleId> = {
  '/agencies': 'agency',
  '/founders': 'founder',
  '/sales': 'sales',
  '/marketing': 'marketing',
  '/developers': 'developer',
  '/use-cases/mystery-shopping-for-ecommerce-agencies': 'agency',
}

import type { ReactNode } from 'react'

export type QA = { q: string; a: ReactNode }
export type Item = { title: string; line: string }

export const pricingAnswer =
  'You pay per company checked, once or on a schedule. Early access teams agree a price before anything runs.'

export const watchedAll = ['Sign ups', 'Baskets', 'Support', 'Emails', 'Texts', 'Ads', 'TikTok', 'Prices', 'Pages']

export const defaultRules = [
  { title: 'It says what it is', line: 'Every test customer is marked as automated. It never pretends to be a person.' },
  { title: 'It stops before paying', line: 'Checkouts end before payment. Nothing is bought on anyone else’s store.' },
  { title: 'Public journeys only', line: 'Sign ups, pages, ads and contact forms that anyone can use. Nothing behind a login it wasn’t given.' },
  { title: 'It backs off', line: 'It follows robots.txt and stops at CAPTCHAs instead of trying to get round them.' },
]

export const inputs = ['Paste a list', 'Upload a CSV', 'Connect Clay', 'API']
export const outputs = ['Clay columns', 'Slack', 'Email', 'PDF', 'Webhook', 'JSON', 'CSV', 'A link anyone can open']

/* What a shopper may do, and what each level needs. */
export const ladder = [
  { level: 'Open', needs: 'Nothing', does: 'Read pages, ads, posts and prices, as anyone can.' },
  { level: 'Declared contact', needs: 'Nothing, and it says it’s automated', does: 'Sign up, opt in to texts, ask a question, text STOP.' },
  { level: 'The company’s OK', needs: 'Written consent', does: 'Fill a basket and go through checkout, stopping before payment.' },
  { level: 'Purchase', needs: 'Your store, and a budget you set', does: 'A real order, then confirmation, dispatch, delivery and refund.' },
]

export const verdicts = [
  { tag: 'Delivered', tone: 'ok', line: 'What should happen did, and here’s the proof.' },
  { tag: 'Silent', tone: 'bad', line: 'Nothing arrived inside the window, and the checks below confirm it.' },
  { tag: 'No verdict', tone: 'idle', line: 'Something arrived, but not enough to decide either way.' },
  { tag: 'Couldn’t test', tone: 'warn', line: 'A CAPTCHA, a block or a login stopped the step. It says which.' },
] as const

export const silentRule = ['The sign up was confirmed', 'A control message reached the same inbox', 'The spam folder was checked', 'A second run agreed']

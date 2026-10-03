import type { RecipeId } from './recipes'

export type WayId = 'recipes' | 'task' | 'api'
export type RoleId = 'agency' | 'sales' | 'marketing' | 'builder'

export type Way = {
  id: WayId
  name: string
  who: string
  line: string
}

export const ways: Record<WayId, Way> = {
  recipes: {
    id: 'recipes',
    name: 'Recipes',
    who: 'For most teams',
    line: 'Ready made checks for the jobs teams repeat. Add the companies, choose how often, get the report.',
  },
  task: {
    id: 'task',
    name: 'Type a task',
    who: 'For anything else',
    line: 'Describe what you want to find out in plain words. We confirm the plan with you before anything runs.',
  },
  api: {
    id: 'api',
    name: 'API and SDK',
    who: 'For developers',
    line: 'The same inboxes, phone numbers and browsers, from your own code. Results arrive at your webhook.',
  },
}

export type Role = {
  id: RoleId
  label: string
  plural: string
  bandName: string
  bandLine: string
  page: string
  ways: WayId[]
  recipes: RecipeId[]
  task: string
  plan: { k: string; v: string }[]
  note?: string
}

export const roles: Role[] = [
  {
    id: 'agency',
    label: 'Agency',
    plural: 'agencies',
    bandName: 'Agencies',
    bandLine: 'Check every client and prospect as a customer would.',
    page: '/agencies',
    ways: ['recipes', 'task'],
    recipes: ['prospect', 'mystery', 'competitor', 'ads'],
    task: 'Sign up to the 12 brands on our pitch list and send me their first two weeks of emails and texts.',
    plan: [
      { k: 'Companies', v: '12 brands, from your list' },
      { k: 'Journey', v: 'Sign up with a new inbox and phone number' },
      { k: 'Wait', v: '14 days' },
      { k: 'Capture', v: 'Every email and text, with screenshots' },
      { k: 'Report', v: 'One timeline per brand' },
    ],
    note: 'Agencies use recipes and plain language tasks. No code needed.',
  },
  {
    id: 'sales',
    label: 'Sales team',
    plural: 'sales teams',
    bandName: 'Sales teams',
    bandLine: 'Know what each account does before you call.',
    page: '/sales',
    ways: ['recipes', 'task'],
    recipes: ['prospect', 'speed', 'trial', 'competitor'],
    task: 'Fill in the contact form on these 200 accounts and tell me how fast each one replies.',
    plan: [
      { k: 'Companies', v: '200 accounts, from your CSV' },
      { k: 'Journey', v: 'Send an enquiry through each contact form, marked as automated' },
      { k: 'Wait', v: 'Up to 5 working days' },
      { k: 'Capture', v: 'Every reply, call and text, timed' },
      { k: 'Report', v: 'Reply time per account, as a sheet' },
    ],
    note: 'Sales teams use recipes and plain language tasks. No code needed.',
  },
  {
    id: 'marketing',
    label: 'Marketing team',
    plural: 'marketing teams',
    bandName: 'Marketing teams',
    bandLine: 'Every email, text, ad and offer your rivals send.',
    page: '/marketing',
    ways: ['recipes', 'task'],
    recipes: ['competitor', 'prices', 'ads', 'mystery'],
    task: 'Sign up to our five biggest rivals and send me every email, text and offer for the next 60 days.',
    plan: [
      { k: 'Companies', v: '5 rivals' },
      { k: 'Journey', v: 'Sign up, opt in to texts, ask one question' },
      { k: 'Wait', v: '60 days' },
      { k: 'Capture', v: 'Every email, text and offer, with send times' },
      { k: 'Report', v: 'A timeline per rival, and a weekly note' },
    ],
    note: 'Marketing teams use recipes and plain language tasks. No code needed.',
  },
  {
    id: 'builder',
    label: 'Founder or developer',
    plural: 'founders and developers',
    bandName: 'Founders and developers',
    bandLine: 'Real customer journeys, from your own code.',
    page: '/developers',
    ways: ['api', 'task', 'recipes'],
    recipes: ['mystery', 'trial', 'competitor', 'prospect'],
    task: 'Sign up to our product as a new user every Monday and tell me if any onboarding email stops arriving.',
    plan: [
      { k: 'Companies', v: 'Your own product' },
      { k: 'Journey', v: 'Sign up as a new user' },
      { k: 'Wait', v: '7 days, every week' },
      { k: 'Capture', v: 'Each onboarding email, compared with last week' },
      { k: 'Report', v: 'An alert when one goes missing' },
    ],
  },
]

export const roleById = Object.fromEntries(roles.map((r) => [r.id, r])) as Record<RoleId, Role>

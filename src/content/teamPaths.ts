/* The team pages' addresses (22 Nov 2026), with nothing else imported, so the router can send each to pages/Team.tsx
   without carrying the teams' words. The words are content/teams/; the order is the nav's Teams column. */
export const teamPathList = [
  '/sales',
  '/marketing',
  '/verify',
  '/agencies',
  '/use-cases/leak-checks-for-ecommerce-stores',
  '/use-cases/trial-checks-for-software-companies',
  '/use-cases/journey-checks-for-banks-and-fintechs',
  '/use-cases/opt-out-and-cancel-checks-for-compliance-teams',
]
export const teamPathSet = new Set(teamPathList)

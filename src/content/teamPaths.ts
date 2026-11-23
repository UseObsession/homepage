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
/* The use case pages in the same template (22 Nov 2026, _research/seo/revamp-22nov/PLAN_usecases.md): one job in one
   industry each, words in content/teams/cases/. */
export const casePathList = [
  '/use-cases/ai-receptionist',
  '/use-cases/ai-agent-for-insurance',
  '/use-cases/ai-agent-for-dental-practices',
  '/use-cases/ai-agent-for-property-management',
  '/use-cases/ai-recruiter',
  '/use-cases/ai-agent-for-customer-support',
  '/use-cases/otp-testing',
  '/use-cases/ai-sdr',
  '/use-cases/imessage-ai-assistant',
  '/use-cases/prior-authorization-ai-agent',
  '/use-cases/ai-agent-for-freight-brokers',
  '/use-cases/ai-agent-evaluation',
  '/use-cases/agentic-commerce',
  '/use-cases/ai-agent-for-home-services',
  '/use-cases/ai-agent-for-hotels',
  '/use-cases/ai-agent-for-higher-education',
  '/use-cases/ai-agent-for-contact-centers',
  '/use-cases/ai-agent-platforms',
  '/use-cases/ai-agents-for-enterprise',
  '/use-cases/ai-agents-for-saas',
  '/use-cases/ai-agents-for-financial-services',
  '/use-cases/healthcare-ai-agents',
  '/use-cases/ai-agents-for-freelancers',
  '/use-cases/ai-agents-for-professional-services',
]
export const teamPathSet = new Set([...teamPathList, ...casePathList])

import { useCase as aiReceptionist } from './ai-receptionist'
import { useCase as aiAgentForInsurance } from './ai-agent-for-insurance'
import { useCase as aiAgentForDentalPractices } from './ai-agent-for-dental-practices'
import { useCase as aiAgentForPropertyManagement } from './ai-agent-for-property-management'
import { useCase as aiRecruiter } from './ai-recruiter'
import { useCase as aiAgentForCustomerSupport } from './ai-agent-for-customer-support'
import { useCase as otpTesting } from './otp-testing'
import { useCase as aiSdr } from './ai-sdr'
import { useCase as imessageAiAssistant } from './imessage-ai-assistant'
import { useCase as priorAuthorizationAiAgent } from './prior-authorization-ai-agent'
import { useCase as aiAgentForFreightBrokers } from './ai-agent-for-freight-brokers'
import { useCase as aiAgentEvaluation } from './ai-agent-evaluation'
import type { TeamPage } from '../types'

/* The use case pages (22 Nov 2026, _research/seo/revamp-22nov/PLAN_usecases.md): one job in one industry each, drawn by
   pages/Team.tsx like the team pages, in the order the /use-cases hub lists them within their kit. */
export const cases: TeamPage[] = [aiReceptionist, aiAgentForInsurance, aiAgentForDentalPractices, aiAgentForPropertyManagement, aiRecruiter, aiAgentForCustomerSupport, otpTesting, aiSdr, imessageAiAssistant, priorAuthorizationAiAgent, aiAgentForFreightBrokers, aiAgentEvaluation]

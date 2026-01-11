// Expert - Team member profiles
export interface Expert {
  id: string
  name: string
  role: string
  expertise: string
  bio?: string
}

// ResearchReport - Strategic cases and policy reports
export interface ResearchReport {
  id: string
  title: string
  description: string
  publishDate: string
  category: string
  url?: string
}

// InvestmentOpportunity - Funding pathways
export interface InvestmentOpportunity {
  id: string
  title: string
  description: string
  keyPoints: string[]
}

// ContactInquiry - Form submissions
export interface ContactInquiry {
  name: string
  email: string
  message: string
  inquiryType?: 'expert' | 'partner' | 'investor'
}

// Navigation
export interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

// Language
export type Language = 'ua' | 'en'

// =============================================================================
// AI-Powered City Vision Types
// =============================================================================

export interface Hero {
  title: string
  subtitle: string
  imageUrl: string
  imageAlt: string
}

export interface Goal {
  id: string
  title: string
  description: string
}

export interface Problem {
  id: string
  title: string
  description: string
}

export interface Solution {
  id: string
  title: string
  description: string
}

export interface CityFeature {
  id: string
  icon: string
  title: string
  description: string
}

export interface VisualConcept {
  id: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

export interface VisionExpert {
  id: string
  name: string
  domain: string
  title: string
  bio: string
  avatarUrl: string
}

export interface CallToAction {
  id: string
  label: string
  description: string
  variant: 'primary' | 'secondary'
  targetSection: string
}

export interface AIPoweredCityVisionProps {
  hero: Hero
  goals: Goal[]
  problems: Problem[]
  solutions: Solution[]
  cityFeatures: CityFeature[]
  visualConcepts: VisualConcept[]
  experts: VisionExpert[]
  callsToAction: CallToAction[]
  onNavigate?: (targetSection: string) => void
  onViewExpert?: (expertId: string) => void
}

// =============================================================================
// Investment Opportunity Types
// =============================================================================

export interface InvestmentHero {
  headline: string
  subheadline: string
}

export interface InvestmentKeyPoint {
  id: string
  title: string
  description: string
}

export interface InvestmentCTA {
  text: string
  description: string
  linkTo: string
}

export interface InvestmentOpportunityProps {
  hero: InvestmentHero
  keyPoints: InvestmentKeyPoint[]
  cta: InvestmentCTA
  onContactClick?: () => void
}

// =============================================================================
// Research & Reports Types (Placeholder)
// =============================================================================

export interface ResearchPlaceholder {
  title: string
  message: string
}

export interface ResearchReportsProps {
  placeholder: ResearchPlaceholder
}

// =============================================================================
// Organization & Team Types
// =============================================================================

export interface Organization {
  name: string
  mission: string
  description: string
}

export interface OrganizationTeamProps {
  organization: Organization
  experts: Expert[]
}

// =============================================================================
// Contact & Engagement Types
// =============================================================================

export interface ContactPageContent {
  headline: string
  intro: string
}

export interface ContactType {
  id: string
  title: string
  description: string
  icon: 'users' | 'handshake' | 'trending-up'
}

export interface ContactInfo {
  email: string
  emailSubject: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  contactType?: string
}

export interface ContactEngagementProps {
  pageContent: ContactPageContent
  contactTypes: ContactType[]
  contactInfo: ContactInfo
  isSubmitting?: boolean
  submitSuccess?: boolean
  submitError?: string | null
  onEmailClick?: () => void
  onFormSubmit?: (data: ContactFormData) => void
  onResetStatus?: () => void
}

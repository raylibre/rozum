// =============================================================================
// Data Types
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

/**
 * Expert - A team member with domain expertise who is part of the ГО "Розум" organization
 * (From global data model)
 */
export interface Expert {
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

// =============================================================================
// Component Props
// =============================================================================

export interface AIPoweredCityVisionProps {
  /** Hero section with main image and title */
  hero: Hero
  /** The key objectives of the AI-powered city program */
  goals: Goal[]
  /** Current issues with Ukrainian cities that the project addresses */
  problems: Problem[]
  /** How AI-powered cities solve these problems */
  solutions: Solution[]
  /** Specific infrastructure systems and technologies */
  cityFeatures: CityFeature[]
  /** Images and mockups showing future cities */
  visualConcepts: VisualConcept[]
  /** Team members with domain expertise */
  experts: Expert[]
  /** Engagement options at the end of the journey */
  callsToAction: CallToAction[]
  /** Called when user clicks a call-to-action button */
  onNavigate?: (targetSection: string) => void
  /** Called when user wants to view more details about an expert */
  onViewExpert?: (expertId: string) => void
}

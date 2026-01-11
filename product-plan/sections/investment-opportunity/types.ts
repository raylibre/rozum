// =============================================================================
// Data Types
// =============================================================================

export interface Hero {
  headline: string
  subheadline: string
}

export interface KeyPoint {
  id: string
  title: string
  description: string
}

export interface CTA {
  text: string
  description: string
  linkTo: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface InvestmentOpportunityProps {
  /** The hero section content with headline and subheadline */
  hero: Hero
  /** The list of key points highlighting the investment opportunity */
  keyPoints: KeyPoint[]
  /** The call-to-action content */
  cta: CTA
  /** Called when user clicks the contact CTA button */
  onContactClick?: () => void
}

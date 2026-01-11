// =============================================================================
// Data Types
// =============================================================================

export interface PageContent {
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

// =============================================================================
// Component Props
// =============================================================================

export interface ContactEngagementProps {
  /** The page headline and intro text */
  pageContent: PageContent
  /** The three contact type options */
  contactTypes: ContactType[]
  /** The contact email information */
  contactInfo: ContactInfo
  /** Called when user clicks the email link */
  onEmailClick?: () => void
  /** Called when user submits the contact form */
  onFormSubmit?: (data: ContactFormData) => void
}

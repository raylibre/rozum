// =============================================================================
// Data Types
// =============================================================================

export interface Organization {
  name: string
  mission: string
  description: string
}

export interface Expert {
  id: string
  name: string
  role: string
  domain: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface OrganizationTeamProps {
  /** The organization information */
  organization: Organization
  /** The list of expert team members */
  experts: Expert[]
}

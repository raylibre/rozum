import { OrganizationTeam } from '../components/organization'
import { organizationData } from '../data/organization-data'
import { expertsData } from '../data/vision-data'
import type { Expert } from '../types'

export function AboutPage() {
  // Map VisionExpert[] to Expert[] (domain → expertise)
  const experts: Expert[] = expertsData.map(expert => ({
    id: expert.id,
    name: expert.name,
    role: expert.title,
    expertise: expert.domain,
    bio: expert.bio
  }))

  return (
    <OrganizationTeam
      organization={organizationData}
      experts={experts}
    />
  )
}

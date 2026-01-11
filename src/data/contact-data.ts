import type { ContactPageContent, ContactType, ContactInfo } from '../types'

export const contactPageContent: ContactPageContent = {
  headline: "Get in Touch",
  intro: "Whether you're an expert looking to contribute, a partner seeking collaboration, or an investor interested in Ukraine's future — we'd love to hear from you."
}

export const contactTypes: ContactType[] = [
  {
    id: "experts",
    title: "Join as an Expert",
    description: "Contribute your expertise in AI, urban planning, energy, healthcare, or other domains to help shape Ukraine's AI-powered cities.",
    icon: "users"
  },
  {
    id: "partners",
    title: "Partner With Us",
    description: "Explore collaboration opportunities for technology transfer, research initiatives, or strategic partnerships in urban innovation.",
    icon: "handshake"
  },
  {
    id: "investors",
    title: "Invest in the Future",
    description: "Learn about funding pathways and investment opportunities in building transformative AI-powered cities across Ukraine.",
    icon: "trending-up"
  }
]

export const contactInfo: ContactInfo = {
  email: "contact@rozum.org.ua",
  emailSubject: "Inquiry from Website"
}

import type { InvestmentHero, InvestmentKeyPoint, InvestmentCTA } from '../types'

export const investmentHero: InvestmentHero = {
  headline: "Invest in Ukraine's Future",
  subheadline: "Join us in building AI-powered cities that will transform governance, attract talent back home, and position Ukraine as a global leader in urban innovation."
}

export const investmentKeyPoints: InvestmentKeyPoint[] = [
  {
    id: "kp-001",
    title: "Transparent AI Governance",
    description: "Your investment supports the development of corruption-free, data-driven city management systems that set new standards for public governance worldwide."
  },
  {
    id: "kp-002",
    title: "Proven Expert Team",
    description: "ГО \"Розум\" brings together leading specialists in AI, urban planning, energy, and healthcare with decades of combined experience in large-scale projects."
  },
  {
    id: "kp-003",
    title: "Regional Economic Impact",
    description: "Each AI-powered city creates an ecosystem supporting hundreds of local SMEs, generating sustainable economic growth across Ukrainian regions."
  },
  {
    id: "kp-004",
    title: "Bringing Talent Home",
    description: "Modern, high-tech cities offer the quality of life that attracts millions of talented Ukrainians back from abroad, rebuilding the nation's human capital."
  },
  {
    id: "kp-005",
    title: "Multiple Partnership Pathways",
    description: "Whether as an investor, technology partner, or strategic collaborator, there are flexible options to participate in this transformative initiative."
  }
]

export const investmentCTA: InvestmentCTA = {
  text: "Contact Us to Learn More",
  description: "Get in touch with our team to discuss investment opportunities, partnership options, or to request detailed project documentation.",
  linkTo: "/contact"
}

export const investmentData = {
  hero: investmentHero,
  keyPoints: investmentKeyPoints,
  cta: investmentCTA
}

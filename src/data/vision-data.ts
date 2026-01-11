import type {
  Hero,
  Goal,
  Problem,
  Solution,
  CityFeature,
  VisualConcept,
  VisionExpert,
  CallToAction,
} from '../types'

export const heroData: Hero = {
  title: "Центр науки інновацій та технологій",
  subtitle: "AI-Powered Cities for Ukraine's Future",
  imageUrl: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80",
  imageAlt: "Futuristic visualization of an AI-powered city in Ukraine"
}

export const goalsData: Goal[] = [
  {
    id: "goal-1",
    title: "Transform Urban Governance",
    description: "Replace corrupt, inefficient municipal systems with transparent, AI-driven decision-making based on collective intelligence and data analytics."
  },
  {
    id: "goal-2",
    title: "Retain and Attract Talent",
    description: "Create attractive, high-tech cities that bring back millions of talented Ukrainians who emigrated, offering quality of life comparable to developed nations."
  },
  {
    id: "goal-3",
    title: "Build Innovation Ecosystems",
    description: "Establish integrated networks where AI-powered cities support surrounding SMEs and territorial communities through technology transfer and partnerships."
  },
  {
    id: "goal-4",
    title: "Pilot Future Technologies",
    description: "Create testing grounds for advanced systems in energy efficiency, waste management, healthcare, and AI-driven public services."
  },
  {
    id: "goal-5",
    title: "Demonstrate National Transformation",
    description: "Prove that Ukraine can lead in urban innovation, attracting international investment and setting new standards for public governance."
  }
]

export const problemsData: Problem[] = [
  {
    id: "problem-1",
    title: "Systemic Corruption",
    description: "Old-type cities have structurally corrupt systems where opaque procedures and vertical hierarchies enable abuse of power and resources."
  },
  {
    id: "problem-2",
    title: "Mass Emigration",
    description: "Over 25 years, millions of talented Ukrainians left for better opportunities abroad, draining the country of its human capital and future leaders."
  },
  {
    id: "problem-3",
    title: "Outdated Infrastructure",
    description: "Current cities lack modern smart systems for energy, transportation, healthcare, and municipal services, making them inefficient and uncomfortable."
  },
  {
    id: "problem-4",
    title: "Isolated Innovation Efforts",
    description: "Small and medium enterprises have no access to advanced technology ecosystems, limiting their growth and competitiveness."
  },
  {
    id: "problem-5",
    title: "Lack of International Visibility",
    description: "Ukrainian innovation initiatives remain unknown to global investors, partners, and policy makers, limiting access to resources and expertise."
  }
]

export const solutionsData: Solution[] = [
  {
    id: "solution-1",
    title: "Transparent AI Governance",
    description: "Automated procedures and collective intelligence replace traditional hierarchies. Decisions are data-driven, traceable, and based on expert consensus across multiple domains."
  },
  {
    id: "solution-2",
    title: "Human-Centric City Design",
    description: "Clean environment, preserved nature, comfortable housing, and work-life balance. Routine tasks are automated so residents focus on creativity and self-realization."
  },
  {
    id: "solution-3",
    title: "Integrated Smart Infrastructure",
    description: "Unified IT platforms manage finance, healthcare, security, energy, and municipal services. Big Data and AI optimize resource allocation in real-time."
  },
  {
    id: "solution-4",
    title: "Economic Ecosystem Model",
    description: "AI-powered cities are surrounded by belts of existing SMEs that supply and support the innovation centers, while the centers help develop local businesses."
  },
  {
    id: "solution-5",
    title: "R&D and Implementation Platform",
    description: "The Center functions as both research hub and practical implementation platform, designing concepts and building actual cities across Ukrainian regions."
  }
]

export const cityFeaturesData: CityFeature[] = [
  {
    id: "feature-1",
    icon: "brain",
    title: "AI Decision Platform",
    description: "Collective intelligence system where recognized experts analyze Big Data and make transparent decisions across all city domains."
  },
  {
    id: "feature-2",
    icon: "shield-check",
    title: "Anti-Corruption Architecture",
    description: "Clear financial procedures, automated procurement, and transparent budgets prevent structural corruption from the ground up."
  },
  {
    id: "feature-3",
    icon: "zap",
    title: "Smart Energy Grid",
    description: "AI-optimized renewable energy systems with real-time load balancing, storage management, and efficiency monitoring."
  },
  {
    id: "feature-4",
    icon: "activity",
    title: "Integrated Healthcare",
    description: "Connected medical facilities with AI diagnostics, patient data analytics, and preventive care systems powered by machine learning."
  },
  {
    id: "feature-5",
    icon: "database",
    title: "Big Data Analytics",
    description: "Unified data platform processing information from all city systems to identify patterns, predict needs, and optimize operations."
  },
  {
    id: "feature-6",
    icon: "wifi",
    title: "Advanced Communications",
    description: "High-speed connectivity infrastructure supporting IoT devices, smart sensors, and seamless digital services throughout the city."
  },
  {
    id: "feature-7",
    icon: "home",
    title: "Quality Urban Planning",
    description: "Nature-friendly design preserving trees and rivers, comfortable public spaces, and housing optimized for modern life-dream standards."
  },
  {
    id: "feature-8",
    icon: "users",
    title: "Community Integration",
    description: "Digital platforms connecting residents, businesses, and administrators for participatory governance and community building."
  }
]

export const visualConceptsData: VisualConcept[] = [
  {
    id: "concept-1",
    title: "City Center with Smart Infrastructure",
    description: "Aerial view showing integrated green spaces, modern architecture, and transparent solar panels on public buildings.",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    imageAlt: "3D visualization of AI-powered city center with parks and smart buildings"
  },
  {
    id: "concept-2",
    title: "Innovation District & SME Belt",
    description: "The innovation core surrounded by mixed-use zones where local enterprises and research facilities collaborate.",
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    imageAlt: "Layout showing innovation center surrounded by supporting business ecosystem"
  },
  {
    id: "concept-3",
    title: "Residential Areas & Quality of Life",
    description: "Human-centric neighborhoods with walkable streets, community centers, and nature integration for comfortable living.",
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
    imageAlt: "Modern residential area with green spaces and community amenities"
  }
]

export const expertsData: VisionExpert[] = [
  {
    id: "expert-1",
    name: "Dr. Olena Kovalenko",
    domain: "AI & Machine Learning",
    title: "Chief AI Architect",
    bio: "Leading researcher in collective intelligence systems and data-driven governance with 15+ years of experience in large-scale AI implementations.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
  {
    id: "expert-2",
    name: "Mykola Shevchenko",
    domain: "Urban Planning",
    title: "Director of Urban Design",
    bio: "Award-winning urban planner specializing in sustainable, human-centric city development and smart infrastructure integration.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
  },
  {
    id: "expert-3",
    name: "Dr. Iryna Bondarenko",
    domain: "Energy Systems",
    title: "Energy Innovation Lead",
    bio: "Expert in renewable energy grids and AI-optimized power distribution with patents in smart energy management systems.",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
  },
  {
    id: "expert-4",
    name: "Andriy Lysenko",
    domain: "Healthcare Technology",
    title: "Healthcare Systems Director",
    bio: "Pioneer in AI-driven diagnostics and integrated healthcare platforms, formerly with leading European medical technology institutes.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    id: "expert-5",
    name: "Prof. Kateryna Marchenko",
    domain: "Public Governance",
    title: "Governance & Policy Lead",
    bio: "Constitutional law expert and anti-corruption researcher focused on transparent governance models and democratic accountability systems.",
    avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80"
  },
  {
    id: "expert-6",
    name: "Viktor Tkachenko",
    domain: "IT & Communications",
    title: "Chief Technology Officer",
    bio: "Technology strategist with expertise in large-scale IT platforms, data security, and integrated municipal service systems.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
  },
  {
    id: "expert-7",
    name: "Dr. Natalia Petrenko",
    domain: "Economics & Development",
    title: "Economic Development Advisor",
    bio: "Development economist specializing in innovation ecosystems, SME integration, and regional economic transformation strategies.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
  }
]

export const callsToActionData: CallToAction[] = [
  {
    id: "cta-investment",
    label: "View Investment Opportunities",
    description: "Explore partnership pathways and funding options for building Ukraine's first AI-powered cities",
    variant: "primary",
    targetSection: "investment-opportunity"
  },
  {
    id: "cta-contact",
    label: "Contact Us",
    description: "Connect with our team to learn more, join as an expert, or discuss collaboration",
    variant: "secondary",
    targetSection: "contact-engagement"
  }
]

// Combined export for convenience
export const visionData = {
  hero: heroData,
  goals: goalsData,
  problems: problemsData,
  solutions: solutionsData,
  cityFeatures: cityFeaturesData,
  visualConcepts: visualConceptsData,
  experts: expertsData,
  callsToAction: callsToActionData,
}

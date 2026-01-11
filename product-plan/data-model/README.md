# Data Model

This document describes the core entities and their relationships in the ГО "Розум" Center of Science, Innovation and Technologies platform.

## Entities

### Expert
A team member with domain expertise (AI, urban planning, energy, healthcare, etc.) who is part of the ГО "Розум" organization and contributes to the Center of Science, Innovation and Technologies.

**Key Properties:**
- Name, title, domain expertise
- Biography and professional background
- Avatar/profile image

### Research Report
A strategic case, analytical material, or policy report that demonstrates the Center's thought leadership and intellectual foundation on Ukrainian development and AI-powered city concepts.

**Key Properties:**
- Title and description
- Publication date
- Document/PDF link
- Category or tags

### Investment Opportunity
Information about a specific funding need, partnership option, or investment pathway for building AI-powered cities in Ukraine.

**Key Properties:**
- Title and description
- Funding target or range
- Investment type (equity, grant, partnership, etc.)
- Contact information or application process

### Contact Inquiry
A submission from a website visitor expressing interest in joining as an expert, partnering with the organization, or investing in the project.

**Key Properties:**
- Name and contact information
- Inquiry type (expert, partner, investor)
- Message content
- Optional reference to a specific Investment Opportunity

## Relationships

- **Contact Inquiry → Investment Opportunity**: A contact inquiry may reference a specific investment opportunity when someone inquires about a particular funding pathway
- **Experts**: Independent profiles showcasing the team (no direct relationships to other entities)
- **Research Reports**: Standalone documents (no direct relationships to other entities)
- **Investment Opportunities**: Independent offerings (no direct relationships to other entities)

## Implementation Notes

This data model is intentionally minimal to allow flexibility during implementation. You may extend these entities with additional properties, add authentication/user models, or introduce new relationships as needed for your specific use case.

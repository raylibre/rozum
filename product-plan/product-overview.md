# Rozum Website — Product Overview

## Summary

A representative digital platform for ГО "Розум" and its flagship initiative - the Center of Science, Innovation and Technologies. The website showcases the visionary concept of building AI-powered cities in Ukraine through futuristic, visual storytelling, while providing practical pathways for experts, partners, and investors to engage with this transformative urban development program that benefits both new innovation centers and surrounding communities.

## Planned Sections

1. **AI-Powered City Vision** — Futuristic, visual presentation of the Center of Science, Innovation and Technologies concept with the integrated ecosystem model and how these cities would transform Ukraine.

2. **Investment Opportunity** — Details on the AI-powered city development program, economic model, expected impact, and pathways for partners and investors to participate in building these cities.

3. **Research & Reports** — Library of strategic cases, analytical materials, policy reports, and thought leadership on Ukrainian development that establishes the intellectual foundation.

4. **Organization & Team** — Information about ГО "Розум" mission, history, and expert team profiles across AI, urban planning, energy, healthcare, and other key domains.

5. **Contact & Engagement** — Forms and information for experts to join research teams, partners to collaborate, and investors to connect with the project.

## Data Model

**Entities:**
- **Expert** — A team member with domain expertise (AI, urban planning, energy, healthcare, etc.)
- **Research Report** — A strategic case, analytical material, or policy report
- **Investment Opportunity** — Information about a funding need or partnership option
- **Contact Inquiry** — A submission from a website visitor expressing interest

**Relationships:**
- Contact Inquiry may reference an Investment Opportunity
- Experts are independent profiles showcasing the team
- Research Reports are standalone documents

## Design System

**Colors:**
- Primary: `cyan` — Used for buttons, links, key accents
- Secondary: `lime` — Used for tags, highlights, secondary elements
- Neutral: `slate` — Used for backgrounds, text, borders

**Typography:**
- Heading: Space Grotesk
- Body: Inter
- Mono: JetBrains Mono

## Implementation Sequence

Build this product in milestones:

1. **Foundation** — Set up design tokens, data model types, routing structure, and application shell
2. **AI-Powered City Vision** — Immersive, scroll-driven visual journey presenting the Center of Science, Innovation and Technologies concept through parallax storytelling with hero imagery, project goals, problems/solutions, visual city concepts, and team showcase
3. **Investment Opportunity** — Details on the AI-powered city development program, economic model, expected impact, and pathways for partners and investors to participate
4. **Research & Reports** — Library of strategic cases, analytical materials, policy reports, and thought leadership on Ukrainian development
5. **Organization & Team** — Information about ГО "Розум" mission, history, and expert team profiles across domains
6. **Contact & Engagement** — Forms and information for experts to join research teams, partners to collaborate, and investors to connect

Each milestone has a dedicated instruction document in `product-plan/instructions/`.

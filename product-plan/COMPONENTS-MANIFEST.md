# Components Manifest

This document lists all components, types, and data files that have been copied to the product-plan export package.

## Shell Components

**Location:** `shell/components/`

- `AppShell.tsx` - Main application shell with header, navigation, and content area
- `MainNav.tsx` - Navigation menu component (desktop and mobile)
- `LanguageSwitcher.tsx` - Language toggle (UA/EN)
- `index.ts` - Barrel export for all shell components

**Status:** ✅ All components are self-contained with no external dependencies

## Section: AI-Powered City Vision

**Location:** `sections/ai-powered-city-vision/`

**Components:** `components/`
- `AIPoweredCityVision.tsx` - Main section component
- `HeroSection.tsx` - Hero section with parallax effects
- `JourneyRoad.tsx` - Animated SVG road/journey visualization
- `ContentNode.tsx` - Reusable content card (goals, problems, solutions)
- `FeatureGrid.tsx` - Grid of city infrastructure features
- `VisualConceptsSection.tsx` - Image gallery for visual concepts
- `TeamSection.tsx` - Team/experts grid
- `CTASection.tsx` - Call-to-action section with buttons
- `index.ts` - Barrel export

**Types:** `types.ts`
**Sample Data:** `sample-data.json`

**Import Transformations:**
- `@/../product/sections/ai-powered-city-vision/types` → `../types`

## Section: Investment Opportunity

**Location:** `sections/investment-opportunity/`

**Components:** `components/`
- `InvestmentOpportunity.tsx` - Main section component
- `index.ts` - Barrel export

**Types:** `types.ts`
**Sample Data:** `sample-data.json`

**Import Transformations:**
- `@/../product/sections/investment-opportunity/types` → `../types`

## Section: Research Reports

**Location:** `sections/research-reports/`

**Components:** `components/`
- `ResearchReports.tsx` - Main section component
- `index.ts` - Barrel export

**Types:** `types.ts`
**Sample Data:** `sample-data.json`

**Import Transformations:**
- `@/../product/sections/research-reports/types` → `../types`

## Section: Organization Team

**Location:** `sections/organization-team/`

**Components:** `components/`
- `OrganizationTeam.tsx` - Main section component
- `index.ts` - Barrel export

**Types:** `types.ts`
**Sample Data:** `sample-data.json`

**Import Transformations:**
- `@/../product/sections/organization-team/types` → `../types`

## Section: Contact Engagement

**Location:** `sections/contact-engagement/`

**Components:** `components/`
- `ContactEngagement.tsx` - Main section component with form
- `index.ts` - Barrel export

**Types:** `types.ts`
**Sample Data:** `sample-data.json`

**Import Transformations:**
- `@/../product/sections/contact-engagement/types` → `../types`

## Data Model

**Location:** `data-model/`

- `README.md` - Entity descriptions and relationships

**Entities:**
- Expert
- Research Report
- Investment Opportunity
- Contact Inquiry

## Import Path Transformations

All components have been transformed to use relative imports instead of the Design OS `@/` alias:

| Original Import | Transformed Import |
|----------------|-------------------|
| `@/../product/sections/[section]/types` | `../types` |
| All other imports (React, lucide-react, etc.) | Unchanged |

## Component Status

✅ All components are:
- Self-contained and props-based
- Free of Design OS-specific dependencies
- Ready for integration into any React project
- Properly typed with TypeScript
- Include sample data for testing

## Notes

- All components use inline Google Fonts imports
- Components use Tailwind CSS v4 utility classes
- Dark mode support via `dark:` variants
- Mobile responsive via breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- All section components follow the product's design tokens (cyan/lime/slate palette, Space Grotesk/Inter typography)

# Rozum Website — Complete Implementation Instructions

---

## About These Instructions

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Data model definitions (TypeScript types and sample data)
- UI/UX specifications (user flows, requirements, screenshots)
- Design system tokens (colors, typography, spacing)
- Application shell components (navigation, layout structure)
- Test-writing instructions for each section (for TDD approach)

**What you need to build:**
- Project setup (React, TypeScript, Tailwind CSS v4, routing)
- Backend API endpoints and database schema (if needed)
- Authentication and authorization (if applicable — this project is a public website)
- Data fetching and state management
- Business logic and validation
- Integration of the provided UI components with real data

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the callback props to your routing and API calls
- **DO** replace sample data with real data from your backend
- **DO** implement proper error handling and loading states
- **DO** implement empty states when no records exist (first-time users, after deletions)
- **DO** use test-driven development — write tests first using `tests.md` instructions
- The components are props-based and ready to integrate — focus on the backend and data layer

---

## Test-Driven Development (TDD)

Each section includes a `tests.md` file with detailed test-writing instructions. We strongly recommend following a TDD approach:

**TDD Workflow:**
1. Read the `tests.md` file for the section you're implementing
2. Write failing tests for the key user flows before writing implementation code
3. Implement the feature to make the tests pass
4. Refactor while keeping tests green
5. Move to the next user flow

**Why TDD?**
- Ensures all user flows are covered
- Catches edge cases and empty states early
- Provides confidence when refactoring
- Creates living documentation of expected behavior
- Reduces bugs in production

**Test Files Location:**
- `product-plan/sections/[section-name]/tests.md` — Test instructions for each section
- `product-plan/shell/tests.md` — Test instructions for the application shell

---

# Product Overview

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

---

# Milestone 1: Foundation

## Goal

Set up the foundational elements of the Rozum Website: project initialization, design tokens, data model types, routing structure, and application shell. This milestone establishes the core infrastructure that all subsequent sections will build upon.

## What to Implement

### 1. Project Setup

Initialize a new React application with TypeScript and required dependencies.

**Technology Stack:**
- React 18+
- TypeScript
- Tailwind CSS v4 (not v3 — important!)
- React Router for client-side routing
- Your choice of build tool (Vite recommended)

**Setup Steps:**
1. Initialize project with TypeScript support
2. Install and configure Tailwind CSS v4
3. Set up React Router for navigation
4. Configure Google Fonts import
5. Set up light/dark mode support

**Important:** Tailwind CSS v4 does NOT use a `tailwind.config.js` file. Do not create or reference v3 configuration patterns.

### 2. Design Tokens

Configure your styling system with the Rozum Website design tokens.

**Reference Files:**
- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

**Color Palette:**
- Primary: `cyan` (Tailwind's cyan palette) — buttons, links, key accents
- Secondary: `lime` (Tailwind's lime palette) — tags, highlights, hover states
- Neutral: `slate` (Tailwind's slate palette) — backgrounds, text, borders

**Typography:**
- Heading: Space Grotesk (Google Fonts)
- Body: Inter (Google Fonts)
- Mono: JetBrains Mono (Google Fonts)

**Implementation Requirements:**
- Load Google Fonts using @import or link tags in your HTML
- Apply font families to base HTML elements or utility classes
- Use Tailwind's built-in color utilities (`cyan-500`, `lime-400`, `slate-900`, etc.)
- Ensure all colors work in both light and dark modes using `dark:` variants
- Never define custom colors — stick to Tailwind's built-in palettes

### 3. Data Model Types

Create TypeScript interfaces for the core entities.

**Reference Files:**
- See `product-plan/data-model/types.ts` for interface definitions
- See `product-plan/data-model/data-model.md` for entity descriptions and relationships

**Entities to Define:**

**Expert** — Team member profiles
- id: string
- name: string
- role: string
- expertise: string
- bio?: string (optional)

**ResearchReport** — Strategic cases and policy reports
- id: string
- title: string
- description: string
- publishDate: string
- category: string
- url?: string (optional)

**InvestmentOpportunity** — Funding pathways
- id: string
- title: string
- description: string
- keyPoints: string[]

**ContactInquiry** — Form submissions
- name: string
- email: string
- message: string
- inquiryType?: 'expert' | 'partner' | 'investor' (optional)

**Implementation Requirements:**
- Create a `types/` directory in your src folder
- Create separate files for each entity or group related types
- Export all types from a central `types/index.ts` file
- Use proper TypeScript conventions (PascalCase for interfaces, camelCase for properties)
- Mark optional fields with `?`

### 4. Routing Structure

Set up client-side routing for all sections using React Router.

**Routes to Implement:**

| Route | Component/Section | Description |
|-------|-------------------|-------------|
| `/` | AI-Powered City Vision | Home/landing page with immersive scroll experience |
| `/investment` | Investment Opportunity | Investment details and CTA |
| `/research` | Research & Reports | Library of reports (currently placeholder) |
| `/about` | Organization & Team | Organization mission and team profiles |
| `/contact` | Contact & Engagement | Contact form and engagement options |

**Implementation Requirements:**
- Use React Router v6+
- Create a routes configuration file
- Wrap all routes with the AppShell component (see next section)
- Handle 404 pages gracefully with a not-found route
- Implement smooth transitions between routes
- Set up proper route structure with nested routing if needed

**Note:** The AI-Powered City Vision section uses a special "minimal shell mode" (logo and language switcher only, navigation hidden). This will be handled in Milestone 2.

### 5. Application Shell

Implement the persistent navigation and layout structure that wraps all pages.

**Reference Files:**
- See `product-plan/shell/README.md` for shell design intent
- Copy components from `product-plan/shell/components/`:
  - `AppShell.tsx` — Main layout wrapper with fixed header
  - `MainNav.tsx` — Navigation component with responsive behavior
  - `LanguageSwitcher.tsx` — UA/EN language toggle

**Navigation Structure:**

| Item | Route | Label (EN) | Label (UA) |
|------|-------|------------|------------|
| Logo | `/` | ГО "Розум" | ГО "Розум" |
| Vision | `/` | Vision | Візія |
| Investment | `/investment` | Investment | Інвестиції |
| Research | `/research` | Research | Дослідження |
| About | `/about` | About | Про нас |
| Contact | `/contact` | Contact | Контакти |

**Layout Pattern:**
- Fixed/sticky header at top with border-bottom
- Logo on left (clickable, links to home)
- Main navigation in center (hidden on mobile)
- Language switcher on right (always visible)
- Hamburger menu button on mobile (right side, before language switcher)
- Full-width content area below header
- Mobile: Slide-down navigation menu

**Implementation Requirements:**
- Wire up navigation links to your routing system
- Implement active state highlighting for current route
- Handle mobile menu toggle with smooth open/close transitions
- Support both light and dark modes with proper `dark:` variants
- Make fully responsive using Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`)
- Language switcher should toggle between 'ua' and 'en' states
- Mobile menu should close when a navigation item is clicked

**Shell Props Structure:**
The AppShell component accepts these props:
- `children`: React.ReactNode — page content
- `navigationItems`: NavigationItem[] — array of nav items with label, href, isActive
- `currentLanguage`: 'ua' | 'en' — current language state
- `onNavigate`: (href: string) => void — navigation callback
- `onLanguageChange`: (language: 'ua' | 'en') => void — language change callback

### 6. Shell Integration & Testing

Create placeholder pages for each section and verify the shell works correctly.

**Implementation Steps:**
1. Create simple placeholder components for each section route
2. Each placeholder should display:
   - Section name as heading
   - "Coming soon" or "Under development" message
   - Brief description of what the section will contain
3. Wire up all routes in your router configuration
4. Wrap routes with AppShell
5. Test all navigation flows

**Testing Requirements:**
- Verify all routes navigate correctly without errors
- Test mobile menu opens and closes smoothly
- Test language switcher updates state (UI changes optional for MVP)
- Verify responsive behavior at breakpoints: 640px, 768px, 1024px, 1280px
- Test light and dark mode switching (all colors should update)
- Verify active navigation highlighting works
- Test logo click returns to home page
- Check browser back/forward navigation works

## Expected User Flows

### Primary Navigation Flow
1. User visits the website and lands on the AI-Powered City Vision page (home)
2. User sees the sticky header with logo, navigation items, and language switcher
3. User clicks "Investment" in the navigation
4. Page transitions to the Investment Opportunity section
5. Header remains visible with "Investment" highlighted as active
6. User clicks the logo to return to the home page

### Mobile Navigation Flow
1. User visits the website on a mobile device
2. Header shows logo on left, hamburger menu button and language switcher on right
3. User taps the hamburger menu button
4. Navigation menu slides down from the header
5. User taps "Contact" in the menu
6. Menu closes automatically and page navigates to Contact & Engagement section

### Language Switching Flow
1. User clicks the language switcher showing "UA"
2. Language changes to "EN" (English)
3. Navigation labels update to English (if implemented)
4. User clicks switcher again to return to "UA" (Ukrainian)
5. Language preference persists across navigation

### Dark Mode Flow (Optional)
1. User's system is set to dark mode
2. Website loads with dark color scheme
3. All text, backgrounds, and UI elements use dark variants
4. User toggles system back to light mode
5. Website automatically updates to light color scheme

## Files to Reference

**Design System:**
- `product-plan/design-system/colors.json` — Color palette definitions (cyan, lime, slate)
- `product-plan/design-system/typography.json` — Typography definitions
- `product-plan/design-system/tokens.css` — CSS custom properties
- `product-plan/design-system/tailwind-colors.md` — Tailwind configuration guide
- `product-plan/design-system/fonts.md` — Google Fonts setup instructions

**Data Model:**
- `product-plan/data-model/data-model.md` — Entity descriptions and relationships
- `product-plan/data-model/types.ts` — TypeScript interface definitions

**Application Shell:**
- `product-plan/shell/README.md` — Shell design intent and specifications
- `product-plan/shell/components/AppShell.tsx` — Main layout wrapper component
- `product-plan/shell/components/MainNav.tsx` — Navigation component
- `product-plan/shell/components/LanguageSwitcher.tsx` — Language toggle component
- `product-plan/shell/components/index.ts` — Component exports

**Product Context:**
- `product-overview.md` — Product description, problems/solutions, key features

## Done When

**Project Setup:**
- [ ] React 18+ project is initialized with TypeScript
- [ ] Tailwind CSS v4 is installed and configured (no tailwind.config.js)
- [ ] React Router v6+ is installed and configured
- [ ] Build tool (Vite or similar) runs without errors
- [ ] Development server starts successfully

**Design Tokens:**
- [ ] Google Fonts (Space Grotesk, Inter, JetBrains Mono) are loaded
- [ ] Font families are applied to appropriate elements
- [ ] Tailwind color utilities are available (cyan, lime, slate)
- [ ] Light and dark mode variants work correctly
- [ ] All color references use Tailwind built-in utilities (no custom colors)

**Data Model:**
- [ ] `types/` directory exists with all entity interfaces
- [ ] Expert interface is defined with all required fields
- [ ] ResearchReport interface is defined with all required fields
- [ ] InvestmentOpportunity interface is defined with all required fields
- [ ] ContactInquiry interface is defined with all required fields
- [ ] All types are exported from `types/index.ts`

**Routing:**
- [ ] Routes exist for: `/` (home), `/investment`, `/research`, `/about`, `/contact`
- [ ] 404/not-found route is configured
- [ ] All routes render without errors (can show placeholder content)
- [ ] Browser back/forward navigation works correctly
- [ ] Direct URL access works for all routes

**Application Shell:**
- [ ] AppShell component is integrated and renders on all pages
- [ ] MainNav component displays all navigation items
- [ ] LanguageSwitcher component is visible and functional
- [ ] Logo links to home page (`/`)
- [ ] Navigation links to correct routes
- [ ] Active navigation state highlights current page
- [ ] Mobile hamburger menu button is visible below 768px (md breakpoint)
- [ ] Mobile menu opens and closes smoothly
- [ ] Mobile menu closes when navigation item is clicked
- [ ] Language switcher toggles between UA and EN states
- [ ] Header is sticky/fixed at top of viewport
- [ ] Header has proper border and background styling

**Responsive Behavior:**
- [ ] Layout adapts correctly at 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- [ ] Desktop navigation is hidden on mobile (< 768px)
- [ ] Mobile menu is hidden on desktop (>= 768px)
- [ ] All text is readable at all breakpoints
- [ ] No horizontal scrolling on any screen size

**Light & Dark Mode:**
- [ ] All backgrounds use light/dark variants
- [ ] All text colors use light/dark variants
- [ ] All borders use light/dark variants
- [ ] Shell components look good in both modes
- [ ] No contrast issues in either mode

**Testing:**
- [ ] No console errors or warnings
- [ ] All TypeScript types compile without errors
- [ ] All navigation links work correctly
- [ ] Mobile menu functionality works on touch devices
- [ ] Page loads and renders quickly
- [ ] Browser console is clean (no errors, warnings, or React warnings)

## Notes

- This milestone establishes the foundation for all subsequent work
- The application shell should be fully functional before moving to section implementations
- Pay special attention to responsive behavior and dark mode support
- All subsequent sections will be wrapped by this AppShell component
- The AI-Powered City Vision section (Milestone 2) uses a special "minimal shell mode" where the main navigation is hidden — this will be implemented as a variant or prop in the AppShell component
- Language switching can initially just update the UI state; actual content translation can be added incrementally
- Consider using React Context or a state management library for language preference
- Dark mode can be implemented using Tailwind's dark mode class strategy or system preference

---

# Milestone 2: AI-Powered City Vision

## Goal

Implement the AI-Powered City Vision section — the main landing page and home route (`/`) of the Rozum Website. This immersive, scroll-driven experience presents the Center of Science, Innovation and Technologies through parallax storytelling, visual metaphors, and calls-to-action.

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/ai-powered-city-vision/tests.md` for detailed test-writing instructions.

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## Overview

An immersive, scroll-driven visual journey that showcases the AI-powered city concept. The experience begins with a full-screen hero image and project title, then unfolds as visitors scroll through connected sections linked by a visual "road" metaphor. The journey covers goals, problems, solutions, visual city concepts, key features, and the expert team, culminating in dual CTAs for investment and contact.

**Key Features:**
- Full-screen hero with striking imagery
- Vertical scroll-based storytelling
- Visual "road" connecting all content sections
- Parallax effects for depth and immersion
- Goals, Problems, Solutions presented along the journey
- Visual city concept mockups
- Infrastructure features grid
- Expert team profiles
- Dual CTAs: "View Investment Opportunities" and "Contact Us"

**Special Requirements:**
- Uses minimal shell mode (logo and language switcher only, main navigation hidden)
- Optimized for smooth scrolling performance
- Responsive with adapted/simplified effects on mobile

## What to Implement

### 1. Section Components

Copy and integrate the section components from `product-plan/sections/ai-powered-city-vision/components/`:

**Main Container:**
- `AIPoweredCityVision.tsx` — Root component that orchestrates the entire journey

**Visual Elements:**
- `HeroSection.tsx` — Full-screen hero with background image and project title overlay
- `JourneyRoad.tsx` — Vertical visual "road" line that connects all sections as metaphor for the journey
- `ContentNode.tsx` — Reusable component for individual content sections positioned along the road
- `VisualConceptsSection.tsx` — Gallery/showcase of AI-powered city mockups and visual concepts
- `FeatureGrid.tsx` — Grid layout displaying key infrastructure features and capabilities
- `TeamSection.tsx` — Showcase of expert team members with names, roles, and expertise
- `CTASection.tsx` — Dual call-to-action buttons at the end of the journey

**Component Integration:**
- Import all components from `product-plan/sections/ai-powered-city-vision/components/`
- Set up the main `AIPoweredCityVision` component as the home route (`/`)
- Pass sample data as props (from `sample-data.json`)
- Wire up callbacks for navigation

### 2. Data Integration

Load and pass section data to components.

**Data Structure:**
See `product-plan/sections/ai-powered-city-vision/sample-data.json` for the data structure.

**Data Includes:**
- Hero content (title, subtitle, background image)
- Journey nodes (goals, problems, solutions) with titles, descriptions, positions
- Visual concept mockups (images, titles, descriptions)
- Features (name, description, icon/category)
- Team members (from Expert entity type)

**Implementation:**
- For MVP, use the provided sample data directly
- For production, fetch data from CMS or API
- Pass data as props to components
- Handle loading states while data is fetched

### 3. Navigation Callbacks

Wire up user interactions to your routing system.

**Callbacks to Implement:**

| Callback | Trigger | Action | Destination |
|----------|---------|--------|-------------|
| `onInvestmentClick` | "View Investment Opportunities" CTA button | Navigate to Investment section | `/investment` |
| `onContactClick` | "Contact Us" CTA button | Navigate to Contact section | `/contact` |

**Implementation:**
- Use your router's navigation method (e.g., `navigate()` from React Router)
- Ensure smooth page transitions
- Consider scroll-to-top behavior when navigating away

### 4. Minimal Shell Mode

Configure the AppShell to use minimal mode for this section.

**Requirements:**
- Logo remains visible (top-left)
- Language switcher remains visible (top-right)
- Main navigation is hidden (Vision, Investment, Research, About, Contact items)
- Header background may be transparent or semi-transparent over hero

**Implementation Options:**

**Option A: Pass a prop to AppShell**
```typescript
<AppShell shellMode="minimal" {...otherProps}>
  <AIPoweredCityVision />
</AppShell>
```

**Option B: Conditional rendering in AppShell**
Check the current route and hide navigation if on home page:
```typescript
const isMinimalMode = location.pathname === '/'
```

**Option C: Separate layout component**
Create a `MinimalShell` variant that only includes logo and language switcher

Choose the approach that best fits your routing architecture.

### 5. Scroll Behavior & Performance

Ensure smooth scrolling and parallax effects.

**Performance Considerations:**
- Parallax effects use CSS transforms (not position changes)
- Scroll listeners are throttled or use Intersection Observer
- Images are optimized and lazy-loaded
- Animations use `will-change` or `transform` for GPU acceleration

**Mobile Adaptations:**
- Simplify or disable parallax effects on mobile for performance
- Ensure touch scrolling is smooth
- Test on actual devices, not just browser dev tools

**Testing:**
- Test with slow network connections
- Test on lower-end devices
- Monitor frame rate during scrolling
- Check for scroll jank or stuttering

## Files to Reference

**Section Specifics:**
- `product-plan/sections/ai-powered-city-vision/spec.md` — Full section specification
- `product-plan/sections/ai-powered-city-vision/README.md` — Feature overview and design intent
- `product-plan/sections/ai-powered-city-vision/tests.md` — Test-writing instructions for TDD
- `product-plan/sections/ai-powered-city-vision/sample-data.json` — Sample data for testing

**Components:**
- `product-plan/sections/ai-powered-city-vision/components/AIPoweredCityVision.tsx` — Main container
- `product-plan/sections/ai-powered-city-vision/components/HeroSection.tsx` — Hero component
- `product-plan/sections/ai-powered-city-vision/components/JourneyRoad.tsx` — Visual road metaphor
- `product-plan/sections/ai-powered-city-vision/components/ContentNode.tsx` — Content sections
- `product-plan/sections/ai-powered-city-vision/components/VisualConceptsSection.tsx` — City mockups
- `product-plan/sections/ai-powered-city-vision/components/FeatureGrid.tsx` — Features grid
- `product-plan/sections/ai-powered-city-vision/components/TeamSection.tsx` — Team profiles
- `product-plan/sections/ai-powered-city-vision/components/CTASection.tsx` — Call-to-action buttons
- `product-plan/sections/ai-powered-city-vision/components/index.ts` — Component exports

**Types:**
- `product-plan/sections/ai-powered-city-vision/types.ts` — TypeScript interfaces for section data

**Context:**
- `product-overview.md` — Product description and key features
- `product-plan/data-model/types.ts` — Expert entity interface

## Expected User Flows

### Flow 1: Discover the AI-Powered City Vision

**Actor:** First-time visitor

**Steps:**
1. Visitor lands on the Rozum Website home page
2. Full-screen hero image loads with project title overlay
3. Visitor scrolls down and sees the visual "road" connecting content sections
4. Visitor reads through Goals section explaining project objectives
5. Visitor continues scrolling through Problems section (current challenges)
6. Visitor reads Solutions section explaining how AI cities address problems
7. Visitor views Visual Concepts section with city mockups and imagery
8. Visitor explores Features Grid showing key infrastructure and capabilities
9. Visitor views Team Section with expert profiles (names, roles, expertise)
10. Visitor reaches the end with two CTA options

**Outcome:** Visitor understands the AI-powered city concept, the problems it solves, and how to engage further

### Flow 2: Navigate to Investment Opportunity

**Actor:** Interested investor or partner

**Steps:**
1. Visitor completes scrolling through the AI-Powered City Vision journey
2. Visitor reaches the CTA Section at bottom of page
3. Visitor sees two buttons: "View Investment Opportunities" and "Contact Us"
4. Visitor clicks the "View Investment Opportunities" button
5. Page navigates to the Investment Opportunity section (`/investment`)
6. Visitor sees investment details and participation pathways

**Outcome:** Visitor accesses investment information to learn about funding opportunities

### Flow 3: Navigate to Contact Form

**Actor:** Expert, partner, or investor wanting to reach out

**Steps:**
1. Visitor completes scrolling through the AI-Powered City Vision journey
2. Visitor reaches the CTA Section at bottom of page
3. Visitor clicks the "Contact Us" button
4. Page navigates to the Contact & Engagement section (`/contact`)
5. Visitor sees contact form and engagement options

**Outcome:** Visitor can submit a contact inquiry to connect with the organization

### Flow 4: Return to Main Navigation (Mobile)

**Actor:** Visitor on mobile device

**Steps:**
1. Visitor is on the AI-Powered City Vision page (minimal shell mode)
2. Visitor realizes they want to access other sections
3. Visitor taps the hamburger menu button (if visible in minimal mode)
4. Navigation menu opens showing all sections
5. Visitor selects a section (e.g., "About")
6. Page navigates to Organization & Team section with full shell

**Outcome:** Visitor can navigate to other sections even from the immersive home experience

**Note:** Consider whether hamburger menu should be visible in minimal shell mode, or if CTAs are the primary navigation mechanism.

### Flow 5: Experience Parallax Effects (Desktop)

**Actor:** Desktop visitor with modern browser

**Steps:**
1. Visitor lands on page and begins scrolling
2. Hero image and background elements move at different speeds (parallax)
3. Content nodes appear and animate as they enter viewport
4. Visual road line extends and connects sections smoothly
5. Team cards fade in as visitor scrolls to team section

**Outcome:** Visitor experiences an immersive, depth-rich scrolling journey

## Done When

**Component Integration:**
- [ ] AIPoweredCityVision component is set up as the home route (`/`)
- [ ] All 8 components are imported and integrated correctly
- [ ] Sample data is loaded and passed as props
- [ ] Components render without errors

**Hero Section:**
- [ ] Full-screen hero image displays correctly
- [ ] Project title and subtitle overlay are positioned properly
- [ ] Hero is responsive (adapts to mobile, tablet, desktop)
- [ ] Background image scales appropriately

**Journey Road & Content:**
- [ ] Visual "road" line connects all content sections
- [ ] Content nodes (Goals, Problems, Solutions) display along the road
- [ ] Road positioning works on all screen sizes
- [ ] Content is readable and well-spaced

**Visual Concepts & Features:**
- [ ] Visual Concepts section displays city mockups
- [ ] Images load properly with proper aspect ratios
- [ ] Features Grid displays all infrastructure features
- [ ] Grid is responsive (adapts columns based on screen size)

**Team Section:**
- [ ] Team members display with names, roles, and expertise
- [ ] Team cards are well-formatted and readable
- [ ] Section is responsive on all devices

**Call-to-Action:**
- [ ] Both CTA buttons are visible and properly styled
- [ ] "View Investment Opportunities" button navigates to `/investment`
- [ ] "Contact Us" button navigates to `/contact`
- [ ] Navigation happens without errors

**Minimal Shell Mode:**
- [ ] Main navigation is hidden on this page
- [ ] Logo remains visible and links to home (refresh page)
- [ ] Language switcher remains visible and functional
- [ ] Shell mode switches back to full navigation on other pages

**Scroll & Performance:**
- [ ] Page scrolls smoothly without jank
- [ ] Parallax effects work on desktop (if implemented)
- [ ] Parallax is simplified or disabled on mobile for performance
- [ ] Images are lazy-loaded or optimized
- [ ] No console errors during scrolling
- [ ] Frame rate stays smooth during scroll (60fps target)

**Responsive Behavior:**
- [ ] Layout adapts at 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- [ ] All text is readable on mobile
- [ ] Images scale appropriately on all devices
- [ ] Touch scrolling works smoothly on mobile
- [ ] No horizontal overflow on any screen size

**Light & Dark Mode:**
- [ ] All text is readable in both light and dark modes
- [ ] Background colors use proper light/dark variants
- [ ] Road and visual elements adapt to theme
- [ ] No contrast issues in either mode

**Testing:**
- [ ] No console errors or warnings
- [ ] All TypeScript types are correct
- [ ] Navigation callbacks work correctly
- [ ] Scroll behavior tested on actual devices
- [ ] Performance is acceptable on mid-range devices

## Notes

- This is the most visually complex section of the website
- Parallax effects should enhance the experience, not hinder performance
- Mobile users should get a simpler but still engaging experience
- The minimal shell mode creates an immersive landing page while still providing access to language switching
- Consider whether to show a hamburger menu in minimal mode, or rely on CTAs for navigation
- Test scroll performance carefully, especially on mobile devices
- The visual "road" metaphor is key to the storytelling — ensure it's clear and visually appealing
- Team section uses the Expert entity from the data model
- This section serves as the main entry point to the website, so first impressions matter

---

# Milestone 3: Investment Opportunity

## Goal

Implement the Investment Opportunity section — a simple, focused page (route `/investment`) presenting the opportunity to invest in Ukraine's AI-powered city initiative with key points and a clear call-to-action.

## Overview

A concise, compelling page that communicates the investment opportunity in Ukraine's AI-powered cities. The page features a hero headline, 3-5 key bullet points highlighting the opportunity, and a prominent CTA button directing interested visitors to the Contact section for further engagement.

**Key Features:**
- Compelling headline and subheadline
- 3-5 key points about the investment opportunity
- Prominent "Contact Us" CTA button
- Simple, focused layout with no distractions
- Uses full application shell (includes main navigation)

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/investment-opportunity/tests.md` for detailed test-writing instructions.

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### 1. Section Component

Copy and integrate the section component from `product-plan/sections/investment-opportunity/components/`:

**Component:**
- `InvestmentOpportunity.tsx` — Main page component containing hero, key points list, and CTA section

**Component Integration:**
- Import component from `product-plan/sections/investment-opportunity/components/`
- Set up component as the `/investment` route
- Pass sample data as props
- Wire up the contact navigation callback

### 2. Data Integration

Load and pass investment opportunity content to the component.

**Data Structure:**
See `product-plan/sections/investment-opportunity/sample-data.json` for the data structure.

The component expects these data shapes:

```typescript
interface Hero {
  headline: string      // Main headline
  subheadline: string   // Supporting message
}

interface KeyPoint {
  id: string           // Unique identifier
  title: string        // Point headline
  description: string  // Point details
}

interface CTA {
  text: string         // Button text
  description: string  // Supporting text
  linkTo: string       // Navigation destination
}
```

**Implementation:**
- For MVP, use the provided sample data directly
- For production, fetch data from CMS or configure as static content
- Pass data as props to the component
- Handle loading states if data is fetched

### 3. Navigation Callback

Wire up the CTA button to navigate to the Contact section.

**Callback to Implement:**

| Callback | Trigger | Action | Destination |
|----------|---------|--------|-------------|
| `onContactClick` | "Contact Us to Learn More" button click | Navigate to Contact section | `/contact` |

**Implementation:**
- Use your router's navigation method (e.g., `navigate('/contact')`)
- Ensure smooth transition to Contact page
- Scroll to top after navigation

### 4. Shell Integration

This section uses the standard full shell (not minimal mode).

**Shell Configuration:**
- Full navigation is visible (Vision, Investment, Research, About, Contact)
- "Investment" navigation item should be highlighted as active
- Logo and language switcher remain visible
- Standard sticky header behavior

## Files to Reference

**Section Specifics:**
- `product-plan/sections/investment-opportunity/spec.md` — Full section specification
- `product-plan/sections/investment-opportunity/README.md` — Feature overview
- `product-plan/sections/investment-opportunity/tests.md` — Test-writing instructions for TDD
- `product-plan/sections/investment-opportunity/sample-data.json` — Sample content data

**Components:**
- `product-plan/sections/investment-opportunity/components/InvestmentOpportunity.tsx` — Main component
- `product-plan/sections/investment-opportunity/components/index.ts` — Component exports

**Types:**
- `product-plan/sections/investment-opportunity/types.ts` — TypeScript interfaces

**Context:**
- `product-overview.md` — Product description and problems/solutions

## Expected User Flows

### Flow 1: View Investment Information

**Actor:** Interested investor, partner, or organization

**Steps:**
1. User navigates to the Investment Opportunity page via main navigation or CTA from home page
2. Page loads and displays the hero section with headline "Invest in Ukraine's Future" (or similar)
3. User sees subheadline explaining the opportunity briefly
4. User scrolls down to read 3-5 key points about the investment opportunity:
   - Each point has a title and description
   - Points highlight the value proposition, impact, and opportunity
5. User reaches the CTA section at the bottom

**Outcome:** User understands the investment opportunity and knows how to get more information

### Flow 2: Navigate to Contact Form

**Actor:** Investor ready to engage

**Steps:**
1. User has read through the investment information
2. User sees the "Contact Us to Learn More" button in the CTA section
3. User clicks the button
4. Page navigates to the Contact & Engagement section (`/contact`)
5. User can now fill out the contact form or see engagement options

**Outcome:** User successfully navigates to the contact form to express interest

### Flow 3: Navigate to Investment from Other Sections

**Actor:** Visitor exploring the website

**Steps:**
1. User is on a different section (e.g., Organization & Team)
2. User clicks "Investment" in the main navigation
3. Page navigates to `/investment`
4. "Investment" is highlighted as active in navigation
5. User sees investment opportunity content

**Outcome:** User can easily access investment information from anywhere on the site

## Done When

**Component Integration:**
- [ ] InvestmentOpportunity component is set up as the `/investment` route
- [ ] Component renders without errors
- [ ] Sample data is loaded and passed as props correctly

**Hero Section:**
- [ ] Headline displays prominently
- [ ] Subheadline displays beneath headline
- [ ] Hero section is well-formatted and visually appealing
- [ ] Hero is responsive on all screen sizes

**Key Points:**
- [ ] All 3-5 key points render correctly
- [ ] Each point shows title and description
- [ ] Points are well-spaced and readable
- [ ] Points layout is responsive (stacks on mobile if needed)

**Call-to-Action:**
- [ ] CTA button is prominent and well-styled
- [ ] Button text is clear ("Contact Us to Learn More" or similar)
- [ ] Supporting description is visible (if included in design)
- [ ] Button navigates to `/contact` when clicked
- [ ] Navigation works without errors

**Shell Integration:**
- [ ] Full navigation shell is visible (not minimal mode)
- [ ] "Investment" navigation item is highlighted as active
- [ ] Logo links to home page
- [ ] Language switcher is functional
- [ ] Header is sticky at top

**Responsive Behavior:**
- [ ] Layout adapts at 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- [ ] All text is readable on mobile
- [ ] CTA button is easily tappable on mobile (large enough touch target)
- [ ] No horizontal overflow on any screen size
- [ ] Content is centered and well-spaced at all breakpoints

**Light & Dark Mode:**
- [ ] All text is readable in both light and dark modes
- [ ] Background colors use proper light/dark variants
- [ ] CTA button stands out in both modes
- [ ] No contrast issues in either mode

**Testing:**
- [ ] No console errors or warnings
- [ ] TypeScript types are correct
- [ ] Navigation callback works correctly
- [ ] Page loads quickly (minimal content)
- [ ] All content is spelled correctly and professionally written

## Notes

- This is one of the simpler sections — focus on clarity and impact
- The goal is to spark interest and drive visitors to the Contact section
- Keep the message concise — this is a teaser, not the full investment deck
- The key points should be compelling and specific to the AI-powered city initiative
- Consider A/B testing different headlines and key points once live
- This page may be shared directly with investors, so it should work well standalone
- Ensure the CTA is impossible to miss — it's the primary goal of this page

---

# Milestone 4: Research & Reports

## Goal

Implement the Research & Reports section — currently a placeholder page (route `/research`) indicating the section is under development. This is intentionally minimal to allow focus on higher-priority sections.

## Overview

A simple placeholder page that communicates the Research & Reports section is coming soon. The page displays a centered message with a title, description, and optional "Under Development" badge. This allows the navigation structure to be complete while deferring full implementation.

**Key Features:**
- Centered layout with title and message
- "Under Development" badge or indicator
- Clean, minimal design
- Uses full application shell

**Future Vision:**
When fully implemented, this section will include:
- Library of strategic cases
- Analytical materials and white papers
- Policy reports on Ukrainian development
- Thought leadership content
- Search and filter functionality
- Individual report detail pages with downloads

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/research-reports/tests.md` for detailed test-writing instructions.

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### 1. Section Component

Copy and integrate the placeholder component from `product-plan/sections/research-reports/components/`:

**Component:**
- `ResearchReports.tsx` — Placeholder component with centered message

**Component Integration:**
- Import component from `product-plan/sections/research-reports/components/`
- Set up component as the `/research` route
- Pass placeholder data as props
- No callbacks needed (static placeholder)

### 2. Data Integration

Pass placeholder content to the component.

**Data Structure:**
See `product-plan/sections/research-reports/sample-data.json` for the data structure.

The component expects:

```typescript
interface Placeholder {
  title: string       // "Research & Reports"
  message: string     // "This section is under development..."
  badge?: string      // Optional badge text like "Coming Soon"
}
```

**Implementation:**
- Use the provided sample data directly
- No API calls or data fetching needed
- Pass data as props to component

### 3. Shell Integration

This section uses the standard full shell.

**Shell Configuration:**
- Full navigation is visible (Vision, Investment, Research, About, Contact)
- "Research" navigation item should be highlighted as active
- Logo and language switcher remain visible
- Standard sticky header behavior

## Files to Reference

**Section Specifics:**
- `product-plan/sections/research-reports/spec.md` — Full section specification
- `product-plan/sections/research-reports/README.md` — Feature overview
- `product-plan/sections/research-reports/tests.md` — Test-writing instructions for TDD
- `product-plan/sections/research-reports/sample-data.json` — Placeholder content

**Components:**
- `product-plan/sections/research-reports/components/ResearchReports.tsx` — Placeholder component
- `product-plan/sections/research-reports/components/index.ts` — Component exports

**Types:**
- `product-plan/sections/research-reports/types.ts` — TypeScript interfaces

**Context:**
- `product-overview.md` — Product description (mentions research library as key feature)

## Expected User Flows

### Flow 1: View Placeholder Message

**Actor:** Visitor curious about research materials

**Steps:**
1. User navigates to Research & Reports page via main navigation
2. Page loads and displays centered placeholder message
3. User sees title "Research & Reports"
4. User reads message: "This section is under development. Check back soon for strategic cases, analytical materials, and policy reports."
5. User sees "Under Development" badge (if included)

**Outcome:** User understands the section is coming soon and knows what to expect

### Flow 2: Navigate Away from Placeholder

**Actor:** Visitor exploring the website

**Steps:**
1. User lands on the Research & Reports placeholder page
2. User realizes there's no content yet
3. User clicks a different navigation item (e.g., "About") to continue exploring
4. Page navigates to Organization & Team section

**Outcome:** User can easily navigate to other sections

## Done When

**Component Integration:**
- [ ] ResearchReports component is set up as the `/research` route
- [ ] Component renders without errors
- [ ] Placeholder data is passed as props correctly

**Placeholder Display:**
- [ ] Title "Research & Reports" displays prominently
- [ ] Message displays centered on page
- [ ] "Under Development" badge displays (if included in design)
- [ ] Layout is clean and minimal
- [ ] Vertical centering works correctly

**Shell Integration:**
- [ ] Full navigation shell is visible
- [ ] "Research" navigation item is highlighted as active
- [ ] Logo links to home page
- [ ] Language switcher is functional
- [ ] Header is sticky at top

**Responsive Behavior:**
- [ ] Layout stays centered at all breakpoints
- [ ] Text is readable on mobile
- [ ] No horizontal overflow on any screen size
- [ ] Adequate padding on mobile devices

**Light & Dark Mode:**
- [ ] Text is readable in both light and dark modes
- [ ] Background uses proper light/dark variants
- [ ] Badge (if present) is visible in both modes
- [ ] No contrast issues in either mode

**Testing:**
- [ ] No console errors or warnings
- [ ] TypeScript types are correct
- [ ] Page loads instantly (no async operations)
- [ ] Navigation to and from this page works correctly

## Notes

- This is intentionally the simplest section — don't over-engineer it
- The placeholder sets expectations that content is coming
- When ready to implement fully, refer to the data model (ResearchReport entity)
- Full implementation would include:
  - Report listing with cards/grid layout
  - Search and filter by category
  - Report detail pages
  - PDF downloads or external links
  - Metadata (publish date, author, category)
- For now, focus on getting other sections working well
- Consider adding a "Notify Me" email capture if stakeholders want early engagement

---

# Milestone 5: Organization & Team

## Goal

Implement the Organization & Team section — a simple page (route `/about`) introducing ГО "Розум" organization, its mission, and the expert team members behind the AI-powered city initiative.

## Overview

A straightforward page that establishes credibility and provides transparency about who is behind the Rozum initiative. The page displays the organization's name, mission statement, and description, followed by a compact list of expert team members showing their names, roles, and expertise domains.

**Key Features:**
- Organization headline with name "ГО "Розум""
- Mission statement
- Brief organization description
- Team member list with Expert profiles
- Clean, compact layout
- Uses full application shell

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/organization-team/tests.md` for detailed test-writing instructions.

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### 1. Section Component

Copy and integrate the section component from `product-plan/sections/organization-team/components/`:

**Component:**
- `OrganizationTeam.tsx` — Main page component with organization info and team member list

**Component Integration:**
- Import component from `product-plan/sections/organization-team/components/`
- Set up component as the `/about` route
- Pass organization and team data as props
- No callbacks needed (informational page)

### 2. Data Integration

Load and pass organization and team member data to the component.

**Data Structure:**
See `product-plan/sections/organization-team/sample-data.json` for the data structure.

The component expects these data shapes:

```typescript
interface Organization {
  name: string          // "ГО "Розум""
  mission: string       // Mission statement
  description: string   // Longer description of purpose
}

interface Expert {
  id: string           // Unique identifier
  name: string         // Full name
  role: string         // Job title/role
  expertise: string    // Domain: AI, Urban Planning, Energy, etc.
  bio?: string         // Optional biography (may not be displayed)
}
```

**Data Sources:**
- Organization info: Can be static configuration or fetched from CMS
- Team members: Fetch from database using Expert entity type
- For MVP, use the provided sample data

**Implementation:**
- Fetch team members from your data source
- For production, create an API endpoint to list Experts
- Handle loading states while data is fetched
- Handle empty state (if no team members exist)
- Sort team members by a logical order (e.g., role importance, alphabetical)

### 3. Shell Integration

This section uses the standard full shell.

**Shell Configuration:**
- Full navigation is visible (Vision, Investment, Research, About, Contact)
- "About" navigation item should be highlighted as active
- Logo and language switcher remain visible
- Standard sticky header behavior

## Files to Reference

**Section Specifics:**
- `product-plan/sections/organization-team/spec.md` — Full section specification
- `product-plan/sections/organization-team/README.md` — Feature overview
- `product-plan/sections/organization-team/tests.md` — Test-writing instructions for TDD
- `product-plan/sections/organization-team/sample-data.json` — Sample organization and team data

**Components:**
- `product-plan/sections/organization-team/components/OrganizationTeam.tsx` — Main component
- `product-plan/sections/organization-team/components/index.ts` — Component exports

**Types:**
- `product-plan/sections/organization-team/types.ts` — TypeScript interfaces
- `product-plan/data-model/types.ts` — Expert entity interface

**Context:**
- `product-overview.md` — Product description (mentions expert team)
- `product-plan/data-model/data-model.md` — Expert entity description

## Expected User Flows

### Flow 1: Learn About the Organization

**Actor:** Visitor wanting to understand who is behind the initiative

**Steps:**
1. User navigates to Organization & Team page via main navigation ("About")
2. Page loads and displays organization section at top
3. User sees organization name "ГО "Розум"" as headline
4. User reads mission statement explaining the organization's purpose
5. User reads description paragraph providing more context about the organization
6. User scrolls down to team section

**Outcome:** User understands the organization's mission and purpose

### Flow 2: View Expert Team Members

**Actor:** Visitor curious about the team's credentials

**Steps:**
1. User is on the Organization & Team page
2. User scrolls to the team section
3. User sees a list of expert team members (e.g., 7 members)
4. For each team member, user sees:
   - Full name
   - Role/title (e.g., "Lead AI Researcher", "Urban Planning Expert")
   - Expertise domain badge (e.g., "AI", "Urban Planning", "Energy", "Healthcare")
5. User recognizes the breadth of expertise across different domains

**Outcome:** User gains confidence in the team's qualifications and diversity of expertise

### Flow 3: Navigate to About from Other Sections

**Actor:** Visitor exploring the website

**Steps:**
1. User is on a different section (e.g., Investment Opportunity)
2. User wants to learn more about who is behind the project
3. User clicks "About" in the main navigation
4. Page navigates to `/about`
5. "About" is highlighted as active in navigation
6. User sees organization and team information

**Outcome:** User can easily find information about the organization and team

## Done When

**Component Integration:**
- [ ] OrganizationTeam component is set up as the `/about` route
- [ ] Component renders without errors
- [ ] Organization and team data are loaded and passed as props

**Organization Section:**
- [ ] Organization name "ГО "Розум"" displays as headline
- [ ] Mission statement displays prominently
- [ ] Description paragraph renders correctly
- [ ] Section is well-formatted and readable

**Team Section:**
- [ ] All team members render in a list or grid
- [ ] Each team member shows name, role, and expertise domain
- [ ] Expertise domains are displayed as badges or labels
- [ ] Team members are sorted logically
- [ ] Layout is clean and compact

**Data Handling:**
- [ ] Loading state displays while team data is fetched
- [ ] Empty state handles case with no team members gracefully
- [ ] Errors are handled if data fetch fails
- [ ] Team member data uses Expert entity type from data model

**Shell Integration:**
- [ ] Full navigation shell is visible
- [ ] "About" navigation item is highlighted as active
- [ ] Logo links to home page
- [ ] Language switcher is functional
- [ ] Header is sticky at top

**Responsive Behavior:**
- [ ] Layout adapts at 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- [ ] Organization section is readable on mobile
- [ ] Team member list/grid adapts to mobile (stacks vertically if needed)
- [ ] All text is readable on small screens
- [ ] No horizontal overflow on any screen size

**Light & Dark Mode:**
- [ ] All text is readable in both light and dark modes
- [ ] Background colors use proper light/dark variants
- [ ] Expertise domain badges are visible in both modes
- [ ] No contrast issues in either mode

**Testing:**
- [ ] No console errors or warnings
- [ ] TypeScript types are correct
- [ ] Team member data loads correctly
- [ ] Page works with sample data and real data
- [ ] Empty state works if no team members exist

## Notes

- This is a straightforward informational page — keep it simple and credible
- The Expert entity from the data model is used for team members
- Team members may also appear in the AI-Powered City Vision section (Team Section)
- Consider whether team members should have individual detail pages (future enhancement)
- Expertise domains should be consistent across the site (AI, Urban Planning, Energy, Healthcare, etc.)
- If the team grows large, consider pagination or grouping by domain
- Organization info (name, mission, description) can be static configuration or CMS-managed
- The mission statement should be compelling and concise
- This page helps establish trust and credibility with investors and partners

---

# Milestone 6: Contact & Engagement

## Goal

Implement the Contact & Engagement section — a contact page (route `/contact`) that provides multiple ways to reach ГО "Розum" through engagement type selection, a contact form, and direct email link.

## Overview

A focused contact page that serves as the primary engagement point for the website. The page presents three distinct contact types (Experts, Partners, Investors), allows visitors to fill out a contact form with their inquiry, and provides a direct email link as an alternative. Form submissions are stored in the database as ContactInquiry entities.

**Key Features:**
- Three contact type cards (Experts, Partners, Investors) with descriptions
- Contact type selection with visual feedback
- Contact form with fields: name, email, message
- Form validation and error handling
- Direct email link as alternative contact method
- Success and error states
- Uses full application shell

## Recommended Approach: Test-Driven Development

Before implementing this section, **write tests first** based on the test specifications provided.

See `product-plan/sections/contact-engagement/tests.md` for detailed test-writing instructions.

**TDD Workflow:**
1. Read `tests.md` and write failing tests for the key user flows
2. Implement the feature to make tests pass
3. Refactor while keeping tests green

## What to Implement

### 1. Section Component

Copy and integrate the section component from `product-plan/sections/contact-engagement/components/`:

**Component:**
- `ContactEngagement.tsx` — Main page component with contact types, form, and email link

**Component Integration:**
- Import component from `product-plan/sections/contact-engagement/components/`
- Set up component as the `/contact` route
- Pass page content and contact info as props
- Wire up form submission callback

### 2. Data Integration

Load and pass page content and contact information to the component.

**Data Structure:**
See `product-plan/sections/contact-engagement/sample-data.json` for the data structure.

The component expects these data shapes:

```typescript
interface PageContent {
  headline: string     // "Get In Touch"
  intro: string        // Brief intro paragraph
}

interface ContactType {
  id: 'expert' | 'partner' | 'investor'
  title: string        // "Join as an Expert"
  description: string  // Description of this engagement type
  icon: 'users' | 'handshake' | 'trending-up'
}

interface ContactInfo {
  email: string           // "contact@rozum.org.ua"
  emailSubject: string    // Default subject line
}

interface ContactFormData {
  name: string           // Required
  email: string          // Required, must be valid email
  message: string        // Required
  inquiryType?: 'expert' | 'partner' | 'investor'  // Selected contact type
}
```

**Implementation:**
- For MVP, use the provided sample data for page content and contact types
- Configure the organization's email address
- Pass data as props to the component

### 3. Form Submission Backend

Create an API endpoint to handle contact form submissions.

**Backend Requirements:**
- Create POST endpoint (e.g., `/api/contact` or `/api/inquiries`)
- Validate all fields server-side:
  - Name is required and non-empty
  - Email is required and valid format
  - Message is required and non-empty
  - InquiryType is optional but must be valid if provided
- Store submission as ContactInquiry entity in database
- Return success/error response
- Implement rate limiting to prevent spam
- Consider adding CAPTCHA for production (e.g., reCAPTCHA)
- Optionally send email notification to team when inquiry is submitted

**ContactInquiry Entity:**
From the data model:
```typescript
interface ContactInquiry {
  name: string
  email: string
  message: string
  inquiryType?: 'expert' | 'partner' | 'investor'
}
```

**Implementation:**
- Create database table/collection for ContactInquiry
- Implement API route handler
- Add validation logic
- Add error handling
- Test with sample submissions

### 4. Form Callbacks

Wire up user interactions for form submission.

**Callbacks to Implement:**

| Callback | Trigger | Action | Implementation |
|----------|---------|--------|----------------|
| `onFormSubmit` | "Send Message" button click | Submit form data to backend | POST to `/api/contact`, handle response, show success/error |
| `onEmailClick` | Email link click | Open email client (optional analytics tracking) | Track with analytics if desired |

**Form Submission Flow:**
1. User fills out form and clicks "Send Message"
2. Frontend validates fields client-side
3. If valid, send POST request to backend API
4. Show loading state during submission
5. On success:
   - Show success message
   - Clear form fields
   - Reset selected contact type
6. On error:
   - Show error message
   - Keep form data (don't clear)
   - Allow user to retry

**Error Handling:**
- Network errors (can't reach server)
- Validation errors (invalid data)
- Server errors (500, database issues)
- Rate limit errors (too many submissions)

### 5. Shell Integration

This section uses the standard full shell.

**Shell Configuration:**
- Full navigation is visible (Vision, Investment, Research, About, Contact)
- "Contact" navigation item should be highlighted as active
- Logo and language switcher remain visible
- Standard sticky header behavior

## Files to Reference

**Section Specifics:**
- `product-plan/sections/contact-engagement/spec.md` — Full section specification
- `product-plan/sections/contact-engagement/README.md` — Feature overview
- `product-plan/sections/contact-engagement/tests.md` — Test-writing instructions for TDD
- `product-plan/sections/contact-engagement/sample-data.json` — Page content and contact types

**Components:**
- `product-plan/sections/contact-engagement/components/ContactEngagement.tsx` — Main component
- `product-plan/sections/contact-engagement/components/index.ts` — Component exports

**Types:**
- `product-plan/sections/contact-engagement/types.ts` — TypeScript interfaces
- `product-plan/data-model/types.ts` — ContactInquiry entity interface

**Context:**
- `product-overview.md` — Product description (mentions engagement pathways)
- `product-plan/data-model/data-model.md` — ContactInquiry entity description

## Expected User Flows

### Flow 1: Select Engagement Type and Submit Form

**Actor:** Interested expert, partner, or investor

**Steps:**
1. User navigates to Contact & Engagement page via main navigation or CTA buttons
2. Page loads showing headline, intro text, and three contact type cards
3. User reads the three contact type options:
   - **Experts**: "Join as an Expert" — For professionals wanting to join research teams
   - **Partners**: "Partner With Us" — For organizations seeking collaboration
   - **Investors**: "Invest in Ukraine's Future" — For investors exploring opportunities
4. User clicks on the card that matches their interest (e.g., "Join as an Expert")
5. Card displays selected state (highlighted border, background change, or checkmark)
6. User scrolls down to the contact form
7. User fills in the form fields:
   - Name (required)
   - Email (required, validated format)
   - Message (required, describing their interest or inquiry)
8. User clicks "Send Message" button
9. Form shows loading state (spinner or disabled button)
10. Form submission is sent to backend API with selected inquiry type
11. On success:
    - Success message displays ("Thank you! We'll be in touch soon.")
    - Form fields are cleared
    - Selected contact type is reset
12. User sees confirmation and knows their message was received

**Outcome:** User successfully submits a contact inquiry with their engagement type

### Flow 2: Use Direct Email Link

**Actor:** Visitor who prefers email communication

**Steps:**
1. User is on the Contact & Engagement page
2. User scrolls to the bottom of the page
3. User sees direct email link: "contact@rozum.org.ua"
4. User clicks the email link
5. User's default email client opens with:
   - To: contact@rozum.org.ua
   - Subject: Pre-filled (e.g., "Inquiry from Rozum Website")
6. User composes and sends email through their email client

**Outcome:** User contacts the organization via direct email

### Flow 3: Form Validation Errors

**Actor:** User who submits incomplete form

**Steps:**
1. User is on the Contact & Engagement page
2. User fills out the form partially (e.g., name only)
3. User clicks "Send Message" without filling required fields
4. Form shows validation errors:
   - "Email is required"
   - "Message is required"
5. User corrects the errors and fills in missing fields
6. User clicks "Send Message" again
7. Form submits successfully

**Outcome:** User receives clear feedback about form validation requirements

### Flow 4: Handle Submission Error

**Actor:** User experiencing technical issues

**Steps:**
1. User fills out the contact form completely
2. User clicks "Send Message"
3. Backend API is unreachable or returns an error
4. Form displays error message: "Something went wrong. Please try again or email us directly."
5. Form keeps user's data (doesn't clear fields)
6. User can retry submission or use the direct email link

**Outcome:** User understands the issue and has an alternative contact method

### Flow 5: Navigate to Contact from Other Pages

**Actor:** Visitor from Investment or Vision sections

**Steps:**
1. User is on a different page (e.g., Investment Opportunity)
2. User clicks a CTA button "Contact Us" or clicks "Contact" in navigation
3. Page navigates to `/contact`
4. "Contact" is highlighted as active in navigation
5. User sees contact form and engagement options

**Outcome:** User easily accesses the contact page from anywhere on the site

## Done When

**Component Integration:**
- [ ] ContactEngagement component is set up as the `/contact` route
- [ ] Component renders without errors
- [ ] Page content and contact info are passed as props

**Contact Types Display:**
- [ ] All three contact type cards display correctly
- [ ] Each card shows title, description, and icon
- [ ] Cards are visually distinct and well-formatted
- [ ] Card selection works with visual feedback (border, background, or checkmark)
- [ ] Only one contact type can be selected at a time
- [ ] Selected type is tracked in form state

**Contact Form:**
- [ ] Form displays all fields: name, email, message
- [ ] All fields are properly labeled
- [ ] Form validates required fields client-side
- [ ] Email field validates format
- [ ] "Send Message" button is prominent
- [ ] Form submission sends data to backend API

**Form Submission:**
- [ ] Backend API endpoint is created (`/api/contact` or similar)
- [ ] Server-side validation is implemented
- [ ] ContactInquiry entity is stored in database with all fields
- [ ] Selected inquiry type is included in submission
- [ ] Rate limiting is implemented to prevent spam
- [ ] Loading state displays during submission

**Success & Error States:**
- [ ] Success message displays after successful submission
- [ ] Form fields are cleared on success
- [ ] Selected contact type is reset on success
- [ ] Error message displays if submission fails
- [ ] Form data is preserved on error (for retry)
- [ ] Network errors are handled gracefully
- [ ] Validation errors are shown clearly

**Email Link:**
- [ ] Direct email link displays correctly
- [ ] Email address is clickable (mailto: link)
- [ ] Email client opens with pre-filled subject (if configured)
- [ ] Link is styled clearly as alternative contact method

**Backend & Database:**
- [ ] Database table/collection for ContactInquiry exists
- [ ] API route successfully stores submissions
- [ ] All required fields are validated
- [ ] Invalid submissions are rejected with clear errors
- [ ] Successful submissions return 200/201 status
- [ ] Optional: Email notifications are sent to team

**Shell Integration:**
- [ ] Full navigation shell is visible
- [ ] "Contact" navigation item is highlighted as active
- [ ] Logo links to home page
- [ ] Language switcher is functional
- [ ] Header is sticky at top

**Responsive Behavior:**
- [ ] Layout adapts at 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- [ ] Contact type cards stack vertically on mobile
- [ ] Form fields are full-width on mobile
- [ ] Form is easily usable on mobile devices (proper input types, sizes)
- [ ] No horizontal overflow on any screen size

**Light & Dark Mode:**
- [ ] All text is readable in both light and dark modes
- [ ] Form inputs have proper backgrounds in both modes
- [ ] Contact type cards are visible in both modes
- [ ] Success/error messages have proper contrast
- [ ] Email link is visible in both modes

**Testing:**
- [ ] No console errors or warnings
- [ ] TypeScript types are correct
- [ ] Form validation tests pass
- [ ] Form submission tests pass (success and error cases)
- [ ] Backend API tests pass
- [ ] Email link works on desktop and mobile
- [ ] Spam protection works (rate limiting tested)

## Notes

- This is the primary engagement point for the website — ensure it works flawlessly
- Form submissions are the main goal — prioritize reliability and user experience
- The selected inquiry type helps the organization route inquiries to the right team
- Consider adding email notifications when inquiries are submitted (to notify the team)
- Spam protection is essential — implement rate limiting and consider CAPTCHA for production
- The direct email link provides a fallback if the form has issues
- Success message should feel personal and reassuring
- Error messages should be helpful and not blame the user
- Consider adding a privacy policy link near the form (GDPR compliance if applicable)
- Test form on actual mobile devices — mobile form UX is critical
- Monitor form submission rates and success/error ratios in production
- This section ties together the entire user journey from Vision → Investment → Contact

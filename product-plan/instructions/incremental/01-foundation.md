# Milestone 1: Foundation

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** None

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

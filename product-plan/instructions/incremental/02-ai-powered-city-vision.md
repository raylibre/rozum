# Milestone 2: AI-Powered City Vision

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

---

## About These Instructions

**What you're receiving:**
- Finished UI components with full styling and parallax effects
- TypeScript interfaces for section data
- Sample data for testing the visual journey
- Test specifications for user flows

**What you need to build:**
- Integration of components with routing system
- Data fetching (if content comes from CMS)
- Callback implementations for CTA navigation
- Minimal shell mode support (hide main navigation)
- Scroll behavior and animation triggers

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up the navigation callbacks to your routing system
- **DO** implement the minimal shell mode for immersive experience
- **DO** test parallax effects across different screen sizes
- **DO** ensure smooth scrolling performance

---

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

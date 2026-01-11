# Milestone 3: Investment Opportunity

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

---

## About These Instructions

**What you're receiving:**
- Finished UI component with full styling
- TypeScript interfaces for content structure
- Sample data for testing
- Test specifications for user flows

**What you need to build:**
- Integration of component with routing system
- Data fetching (if content comes from CMS)
- Navigation callback to Contact section
- Content management (if needed)

**Important guidelines:**
- **DO NOT** redesign or restyle the provided component — use it as-is
- **DO** wire up the contact navigation callback
- **DO** use the provided sample data or fetch from your data source
- **DO** ensure the page works with the full shell (not minimal mode)

---

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

# Milestone 4: Research & Reports

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

---

## About These Instructions

**What you're receiving:**
- Finished UI component with placeholder styling
- TypeScript interfaces for content structure
- Sample data for placeholder message
- Test specifications for user flows

**What you need to build:**
- Integration of placeholder component with routing system
- Simple data passing for title and message
- Shell integration with full navigation

**Important guidelines:**
- **DO NOT** redesign or restyle the provided component — use it as-is
- **DO** use the placeholder exactly as provided
- **DO** ensure the page works with the full shell
- This is intentionally minimal — focus on other sections first

---

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

# Milestone 5: Organization & Team

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Foundation) complete

---

## About These Instructions

**What you're receiving:**
- Finished UI component with full styling
- TypeScript interfaces for organization and team data
- Sample data for testing
- Test specifications for user flows

**What you need to build:**
- Integration of component with routing system
- Data fetching for organization info and team members
- Display of Expert entities from data model
- Content management (if organization info is editable)

**Important guidelines:**
- **DO NOT** redesign or restyle the provided component — use it as-is
- **DO** use the Expert entity type from the data model
- **DO** fetch team data from your database/API
- **DO** ensure the page works with the full shell

---

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

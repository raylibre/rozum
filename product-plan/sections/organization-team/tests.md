# Test Instructions: Organization & Team

These test-writing instructions are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

A simple read-only page displaying organization information and a list of team members with their roles and expertise domains.

---

## User Flow Tests

### Flow 1: View Organization Information

**Scenario:** User learns about the organization

#### Success Path

**Setup:**
- Page loads with organization data

**Steps:**
1. User navigates to `/about`
2. Page renders with organization info

**Expected Results:**
- [ ] Organization name "ГО "Розум"" is displayed as heading
- [ ] Mission statement is displayed in cyan color
- [ ] Description paragraph is visible and readable

---

### Flow 2: View Team Members

**Scenario:** User views the team list

#### Success Path

**Setup:**
- Page loads with 7 team members

**Steps:**
1. User scrolls to "Our Team" section
2. User scans the team list

**Expected Results:**
- [ ] "Our Team" section heading is visible
- [ ] All 7 team members are listed
- [ ] Each member shows name, role, and domain badge
- [ ] Domain badges have cyan styling

---

## Component Interaction Tests

### OrganizationTeam Component

**Renders correctly:**
- [ ] Displays organization name from props
- [ ] Displays mission statement from props
- [ ] Displays description from props
- [ ] Renders correct number of team members
- [ ] Each team member row shows name
- [ ] Each team member row shows role
- [ ] Each team member row shows domain badge

**Layout:**
- [ ] Team list contained in rounded card
- [ ] Items separated by borders
- [ ] Last item has no bottom border

---

## Empty State Tests

### No Team Members

**Scenario:** Organization has no team members listed

**Setup:**
- `experts` array is empty

**Expected Results:**
- [ ] Organization info still displays correctly
- [ ] Team section shows empty container (or message)
- [ ] No JavaScript errors

---

## Edge Cases

- [ ] Handles very long organization name
- [ ] Handles very long mission statement
- [ ] Handles team members with long names
- [ ] Handles long domain names with badge wrapping
- [ ] Works with 1 team member
- [ ] Works with 20+ team members

---

## Accessibility Checks

- [ ] Heading hierarchy is correct (h1 for org name, h2 for section)
- [ ] Team member names are properly labeled
- [ ] Domain badges have sufficient contrast
- [ ] Page is navigable by keyboard

---

## Sample Test Data

```typescript
const mockOrganization = {
  name: 'ГО "Розум"',
  mission: "Building Ukraine's future through AI-powered cities",
  description: "ГО \"Розум\" is a Ukrainian civil organization..."
};

const mockExperts = [
  { id: "exp-001", name: "Dr. Olena Kovalenko", role: "Chief AI Architect", domain: "AI & Machine Learning" },
  { id: "exp-002", name: "Mykola Shevchenko", role: "Director of Urban Design", domain: "Urban Planning" },
  { id: "exp-003", name: "Dr. Iryna Bondarenko", role: "Energy Innovation Lead", domain: "Energy Systems" },
  // ... more experts
];

// Empty state
const mockEmptyExperts = [];
```

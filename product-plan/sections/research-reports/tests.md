# Test Instructions: Research & Reports

This document provides comprehensive, framework-agnostic test-writing instructions for the Research & Reports placeholder section. Focus on testing WHAT the component should do, not HOW to implement the tests.

## Overview

A simple placeholder page displaying "under development" message with icon and animated status badge. Testing focuses on rendering and visual presentation rather than complex interactions.

## User Flow Tests

### Success Path: View Placeholder Message

**Setup:**
- Provide placeholder data with title and message
- Mount the ResearchReports component

**Steps:**
1. Verify component renders without errors
2. Verify flask icon is visible in cyan circle
3. Verify title "Research & Reports" (or provided title) is visible
4. Verify message text is visible below title
5. Verify "In Development" badge is visible below message
6. Verify pulsing dot animation is present in badge
7. Verify content is centered horizontally
8. Verify content is centered vertically on screen

**Expected Results:**
- All elements render with correct text from props
- Layout is centered and balanced
- Icon and badge provide visual interest
- Background is slate-50 (light mode) or slate-900 (dark mode)
- No console errors or warnings

## Empty State Tests

### Empty or Missing Data

**Setup:**
- Provide placeholder with empty strings: title = "", message = ""
- Mount component

**Expected Behavior:**
- Component renders without crashing
- Icon and badge still display
- Title and message areas are empty but don't cause layout breaks
- No errors occur

## Component Interaction Tests

### Icon Display

**Test Scenario:**
- Mount component
- Locate icon container
- Verify container has cyan-100/cyan-900 background
- Verify container is 16x16 (w-16 h-16)
- Verify container has rounded-2xl corners
- Verify flask SVG icon is present inside
- Verify icon has cyan-600/cyan-400 color

**Expected Behavior:**
- Icon is clearly visible and recognizable
- Icon colors match design system palette
- Icon is centered in circular background

### Status Badge Animation

**Test Scenario:**
- Mount component
- Locate "In Development" badge
- Verify badge has lime-100/lime-900 background
- Verify badge text is "In Development"
- Verify pulsing dot is present
- Verify dot has lime-500 background color
- Verify dot has `animate-pulse` class/animation
- Wait 2 seconds
- Verify dot continues pulsing (animation is infinite)

**Expected Behavior:**
- Badge is visually prominent
- Pulsing animation draws attention
- Animation runs continuously without stopping

### Text Rendering

**Test Scenario:**
- Provide placeholder: { title: "Research & Reports", message: "This section is under development. Check back soon for strategic cases and analytical materials." }
- Mount component
- Verify title renders exactly as provided
- Verify title uses h1 tag
- Verify title is bold (font-bold class)
- Verify title is 2xl size
- Verify message renders exactly as provided
- Verify message has relaxed line height (leading-relaxed)

**Expected Behavior:**
- Text is clear and readable
- Typography hierarchy is correct
- No text truncation or overflow

## Edge Cases

### Very Long Title

**Test Scenario:**
- Provide title with 100+ characters
- Mount component

**Expected Behavior:**
- Text wraps properly within container
- No horizontal overflow
- Container remains centered
- Text remains readable

### Very Long Message

**Test Scenario:**
- Provide message with 500+ characters
- Mount component

**Expected Behavior:**
- Text wraps within container
- Max-width constraint keeps text readable
- Vertical spacing adjusts appropriately
- No layout breaks

### Minimal Data

**Test Scenario:**
- Provide: { title: "Coming Soon", message: "Stay tuned." }
- Mount component

**Expected Behavior:**
- Component renders correctly with minimal text
- Layout doesn't look awkwardly empty
- Spacing remains balanced

## Accessibility Checks

### Semantic HTML

**Test Scenario:**
- Mount component
- Inspect rendered HTML structure

**Expected Structure:**
- Title uses `<h1>` tag
- Message uses `<p>` tag
- Badge uses `<span>` tag
- Icon is SVG with proper viewBox
- Outer container uses `<div>` with flex centering

### Color Contrast

**Test Scenario:**
- Verify text colors meet WCAG AA standards

**Expected Behavior:**
- Title (slate-900/white) on slate-50/slate-900 has >4.5:1 contrast
- Message (slate-600/slate-400) on slate-50/slate-900 has >4.5:1 contrast
- Badge text (lime-700/lime-300) on lime-100/lime-900 background has >4.5:1 contrast

### Screen Reader Support

**Test Scenario:**
- Test with screen reader enabled

**Expected Behavior:**
- Title is announced as heading level 1
- Message text is announced
- Badge status is announced
- Icon is decorative and doesn't confuse screen reader users (aria-hidden or empty alt)

### Keyboard Navigation

**Test Scenario:**
- Use Tab key to navigate

**Expected Behavior:**
- No interactive elements to focus on (this is a display-only component)
- Tabbing through page skips this component appropriately

## Responsive Design Tests

### Mobile View

**Test Scenario:**
- Set viewport to 375px width (mobile)
- Mount component

**Expected Behavior:**
- Content remains centered
- Text wraps appropriately
- Icon size is appropriate
- Padding adjusts for smaller screen
- No horizontal scroll

### Desktop View

**Test Scenario:**
- Set viewport to 1920px width (desktop)
- Mount component

**Expected Behavior:**
- Content is centered with max-width constraint
- Doesn't stretch awkwardly wide
- Vertical and horizontal centering maintained

## Dark Mode Tests

### Dark Mode Rendering

**Test Scenario:**
- Enable dark mode (add 'dark' class to document or container)
- Mount component

**Expected Behavior:**
- Background changes to slate-900
- Title changes to white
- Message changes to slate-400
- Icon background changes to cyan-900/30
- Icon color changes to cyan-400
- Badge background changes to lime-900/30
- Badge text changes to lime-300
- All elements remain readable with proper contrast

## Sample Test Data

```typescript
import type { Placeholder } from './types'

// Standard placeholder data
const mockPlaceholder: Placeholder = {
  title: "Research & Reports",
  message: "This section is currently under development. Check back soon for strategic cases, analytical materials, and policy reports."
}

// Minimal data
const minimalPlaceholder: Placeholder = {
  title: "Coming Soon",
  message: "Stay tuned."
}

// Long text data (edge case)
const longTextPlaceholder: Placeholder = {
  title: "Research & Reports Section: Strategic Cases, Analytical Materials, Policy Reports, and Thought Leadership",
  message: "This comprehensive section is currently under active development by our team. We are curating a collection of strategic cases, in-depth analytical materials, policy reports, and thought leadership content that will showcase the innovative approaches to AI-powered city governance. The research library will feature search and filter functionality, detailed report views, categorization by topic and domain, and regular updates from our expert team. Please check back soon for the full launch."
}

// Empty data (edge case)
const emptyPlaceholder: Placeholder = {
  title: "",
  message: ""
}

// Complete props object
const mockProps = {
  placeholder: mockPlaceholder
}
```

## Notes for Test Implementation

1. **Framework Agnostic:** These instructions describe WHAT to test. Adapt to your framework (Jest, Vitest, Playwright, Cypress, etc.)

2. **Animation Testing:** The pulsing dot uses Tailwind's `animate-pulse` class. Test that the class is present rather than measuring actual animation timing.

3. **Centering:** Component uses flexbox centering (`flex items-center justify-center`). Verify these classes are present.

4. **Icon SVG:** Test that SVG element exists and has correct viewBox/path data, not that icon visually resembles a flask.

5. **Dark Mode:** Test by adding 'dark' class to container or document root, then verify dark: prefixed classes take effect.

6. **No Interactions:** This component has no buttons, forms, or interactive elements - all tests are rendering tests.

7. **Status Badge:** Badge includes inline flex layout with gap between dot and text. Verify layout structure.

8. **Min Height:** Component uses `min-h-screen` to ensure full viewport height. Verify this class is applied.

9. **Max Width:** Content container has max-width (max-w-md). Verify text doesn't stretch too wide on large screens.

10. **Performance:** This is an extremely simple component with no state or effects. Render time should be under 10ms.

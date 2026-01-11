# Test Instructions: Investment Opportunity

This document provides comprehensive, framework-agnostic test-writing instructions for the Investment Opportunity section. Focus on testing WHAT the component should do, not HOW to implement the tests.

## Overview

A simple landing page presenting the investment opportunity with a compelling headline, 3-5 numbered key points in a grid layout, and a prominent CTA button to contact the organization. The component is stateless and focuses on clear presentation of investment information.

## User Flow Tests

### Success Path: View Complete Investment Information

**Setup:**
- Provide complete data: hero (headline, subheadline), keyPoints (5 items), cta (text, description, linkTo)
- Mount the InvestmentOpportunity component with mock callback

**Steps:**
1. Verify hero headline is visible and displays correct text
2. Verify hero subheadline is visible below headline
3. Scroll to key points section
4. Verify all 5 key point cards are rendered
5. For each key point, verify:
   - Number badge shows correct number (01, 02, 03, 04, 05)
   - Title displays correct text
   - Description displays correct text
   - Card has white/slate-800 background
   - Card has border and shadow
6. Scroll to CTA section
7. Verify CTA section has gradient cyan background
8. Verify CTA description text is visible
9. Verify CTA button is visible with correct label text
10. Verify button has white/slate-900 background
11. Verify arrow icon is visible in button

**Expected Results:**
- All content renders with correct text from props
- Layout is clean and properly spaced
- Number badges are correctly formatted (zero-padded)
- CTA section stands out with gradient background
- No console errors or warnings

### Success Path: Navigate to Contact Section

**Setup:**
- Provide complete data
- Mock `onContactClick` callback
- Mount component

**Steps:**
1. Scroll to CTA section at bottom of page
2. Locate "Contact Us to Learn More" button (or whatever text is in cta.text)
3. Verify button is enabled and clickable
4. Click the CTA button
5. Verify `onContactClick` callback was called exactly once
6. Verify no parameters were passed to callback

**Expected Results:**
- CTA button is clearly visible and interactive
- Clicking button triggers callback
- Callback is called only once per click
- No errors occur

### Success Path: Key Point Card Hover Effects

**Setup:**
- Provide at least 3 key points
- Mount component

**Steps:**
1. Scroll to key points section
2. Locate first key point card
3. Verify initial state: no visible accent line at top
4. Hover over first key point card
5. Verify accent line becomes visible at top of card (gradient cyan-lime)
6. Verify shadow increases (hover:shadow-lg effect)
7. Move mouse away from card
8. Verify accent line disappears
9. Verify shadow returns to normal
10. Repeat for second and third cards

**Expected Results:**
- Hover effects activate smoothly
- Accent line appears/disappears based on hover state
- Shadow effect enhances on hover
- Effects are consistent across all cards

### Failure Path: Missing Optional Callback

**Setup:**
- Provide complete data
- Do NOT provide `onContactClick` callback (undefined)
- Mount component

**Steps:**
1. Scroll to CTA section
2. Click the CTA button
3. Verify no errors occur
4. Verify button still renders and is interactive

**Expected Results:**
- Component renders normally
- Button is clickable but does nothing (callback is optional)
- No console errors or warnings

### Failure Path: Empty Key Points Array

**Setup:**
- Provide hero and cta data
- Provide empty array for keyPoints
- Mount component

**Steps:**
1. Verify hero section renders normally
2. Scroll to where key points section would be
3. Verify no key point cards render
4. Verify CTA section still renders normally
5. Verify no errors occur

**Expected Results:**
- Component renders without crashing
- Hero and CTA sections work normally
- Key points grid is empty
- No null reference errors

## Empty State Tests

### Primary Empty State: Minimal Data

**Setup:**
- Provide only hero data with headline and subheadline
- Pass empty array for keyPoints
- Provide cta data
- Mount component

**Expected Behavior:**
- Hero section renders with headline and subheadline
- Key points section renders empty (no cards visible)
- CTA section renders normally
- Page layout remains intact
- No errors occur

### Empty String Values

**Setup:**
- Provide data with empty strings: hero.headline = "", keyPoint.title = ""
- Mount component

**Expected Behavior:**
- Elements render but appear blank
- Layout structure is maintained
- No crashes or layout breaks
- Number badges still appear for key points

## Component Interaction Tests

### CTA Button Click Interaction

**Test Scenario:**
- Mount component with mocked `onContactClick`
- Locate CTA button
- Verify button initial state (white/slate-900 background, no transform)
- Trigger hover event on button
- Verify hover state (background lightens slightly, shadow increases)
- Click button
- Verify `onContactClick` was called
- Verify button returns to normal state after click

**Expected Behavior:**
- Button responds to hover with visual feedback
- Click triggers callback
- Visual states transition smoothly

### Decorative Background Elements

**Test Scenario:**
- Mount component
- Verify hero section contains decorative background orbs
- Verify cyan orb is positioned top-right
- Verify lime orb is positioned mid-left
- Verify orbs have blur effect and low opacity
- Verify orbs are absolutely positioned (don't affect layout)

**Expected Behavior:**
- Decorative elements enhance visual appeal
- Elements are purely cosmetic (pointer-events-none)
- Layout is not affected by decorative elements

### Numbered Badge Formatting

**Test Scenario:**
- Provide 3 key points
- Mount component
- Verify first badge shows "01" (zero-padded)
- Verify second badge shows "02"
- Verify third badge shows "03"
- Verify badges have cyan background
- Verify badges are circular (rounded-full)

**Expected Behavior:**
- Numbers are zero-padded for single digits
- Formatting is consistent across all badges
- Badges are visually distinct and readable

## Edge Cases

### Very Long Headline Text

**Test Scenario:**
- Provide hero.headline with 200+ characters
- Mount component

**Expected Behavior:**
- Text wraps properly within container
- No horizontal overflow
- Text remains readable
- Layout doesn't break

### Very Long Key Point Descriptions

**Test Scenario:**
- Provide key point with description of 500+ characters
- Mount component

**Expected Behavior:**
- Text wraps within card
- Card height expands to accommodate content
- Text has relaxed leading for readability
- No text overflow or clipping

### Large Number of Key Points

**Test Scenario:**
- Provide 10 key points
- Mount component

**Expected Behavior:**
- All 10 cards render in grid
- Grid wraps appropriately (3 columns on large screens)
- Page remains scrollable and performant
- Stagger animation still works smoothly
- Number badges show "01" through "10"

### Single Key Point

**Test Scenario:**
- Provide only 1 key point
- Mount component

**Expected Behavior:**
- Single card renders correctly
- Grid layout adapts (card doesn't stretch full width inappropriately)
- Number badge shows "01"
- No layout issues

### CTA Button with Very Long Text

**Test Scenario:**
- Provide cta.text with 50+ characters
- Mount component

**Expected Behavior:**
- Button text wraps or truncates gracefully
- Button remains clickable
- Layout doesn't break
- Icon remains visible and aligned

### Missing CTA Description

**Test Scenario:**
- Provide cta object with text but empty description
- Mount component

**Expected Behavior:**
- CTA section renders normally
- Button is visible and functional
- Empty description area doesn't cause layout issues

## Accessibility Checks

### Semantic HTML Structure

**Test Scenario:**
- Mount component
- Inspect rendered HTML

**Expected Structure:**
- Hero headline uses `<h1>` tag
- Hero subheadline uses `<p>` tag
- Key point titles use `<h3>` tag
- CTA button uses `<button>` tag
- Sections use `<section>` or `<article>` tags where appropriate

### Keyboard Navigation

**Test Scenario:**
- Mount component
- Use Tab key to navigate

**Expected Behavior:**
- CTA button is keyboard focusable
- Focus indicator is visible when button is focused
- Pressing Enter or Space on focused button triggers click
- No keyboard traps

### Color Contrast

**Test Scenario:**
- Verify text colors meet WCAG AA standards

**Expected Behavior:**
- Hero headline (slate-900/white) on light/dark background has >4.5:1 contrast
- Key point text on white/slate-800 cards has >4.5:1 contrast
- CTA description (cyan-100) on cyan-600 gradient has >4.5:1 contrast
- CTA button text (cyan-700/cyan-400) on white/slate-900 has >4.5:1 contrast

### Screen Reader Support

**Test Scenario:**
- Test with screen reader enabled

**Expected Behavior:**
- All headings are announced in correct hierarchy
- Key point number badges are announced (e.g., "01")
- CTA button label is clear and descriptive
- No empty or unlabeled interactive elements

### Focus Management

**Test Scenario:**
- Tab to CTA button
- Verify visible focus ring or indicator
- Click button using keyboard (Enter/Space)
- Verify callback is triggered

**Expected Behavior:**
- Focus is clearly visible
- Keyboard interaction works identically to mouse interaction

## Sample Test Data

```typescript
import type { Hero, KeyPoint, CTA } from './types'

// Hero Data
const mockHero: Hero = {
  headline: "Invest in Ukraine's Future",
  subheadline: "Join us in building transparent, AI-powered cities that will transform governance and bring millions of Ukrainians home. This is an unprecedented opportunity to support innovation while making a meaningful impact."
}

// Key Points Data
const mockKeyPoints: KeyPoint[] = [
  {
    id: 'kp-001',
    title: 'Transparent AI Governance',
    description: 'Investment in technology that ensures complete transparency in city management through blockchain and AI-driven accountability systems.'
  },
  {
    id: 'kp-002',
    title: 'Proven Expert Team',
    description: 'Led by internationally recognized experts in AI, urban planning, and governance with decades of combined experience.'
  },
  {
    id: 'kp-003',
    title: 'Scalable Model',
    description: 'A framework designed to be replicated across Ukrainian cities and adapted for global smart city initiatives.'
  },
  {
    id: 'kp-004',
    title: 'Economic Impact',
    description: 'Projected to create thousands of jobs and attract millions in additional investment through efficient, trustworthy infrastructure.'
  },
  {
    id: 'kp-005',
    title: 'Social Transformation',
    description: 'Not just technology - a movement to rebuild trust, bring Ukrainians home, and create a model for post-conflict reconstruction.'
  }
]

// CTA Data
const mockCta: CTA = {
  text: 'Contact Us to Learn More',
  description: 'Ready to be part of Ukraine\'s transformation? Get in touch to explore investment opportunities.',
  linkTo: '/contact'
}

// Complete Props Object
const mockProps = {
  hero: mockHero,
  keyPoints: mockKeyPoints,
  cta: mockCta,
  onContactClick: jest.fn() // or vi.fn() for Vitest
}

// Minimal Props (for empty state testing)
const minimalProps = {
  hero: {
    headline: 'Invest in Ukraine',
    subheadline: 'Support the future'
  },
  keyPoints: [],
  cta: {
    text: 'Contact Us',
    description: 'Get in touch',
    linkTo: '/contact'
  }
}
```

## Notes for Test Implementation

1. **Framework Agnostic:** These instructions describe WHAT to test. Adapt to your framework (Jest, Vitest, Playwright, Cypress, etc.)

2. **Stagger Animation Testing:** Key point cards have inline animation delay (`index * 100ms`). Test that the `style` attribute includes correct delay value.

3. **Hover Effects:** In JSDOM, hover effects may not trigger automatically. Use testing library utilities to simulate hover events or check for CSS classes that activate on hover.

4. **Gradient Backgrounds:** Testing gradient colors may require checking CSS properties directly. Focus on verifying classes are applied rather than testing actual color rendering.

5. **Responsive Layout:** Test that responsive classes (md:grid-cols-2, lg:grid-cols-3) are applied. Visual responsive behavior may require browser-based tests.

6. **Callback Testing:** Use mock functions to verify `onContactClick` is called. No need to test actual navigation logic (that's the parent's responsibility).

7. **Decorative Elements:** Blur effects and background orbs are CSS-based. Verify elements exist in DOM rather than testing visual blur effect.

8. **Number Padding:** Use String.padStart(2, '0') logic. Test that "1" becomes "01", "2" becomes "02", etc.

9. **Dark Mode:** Component supports both light and dark modes. Test that `dark:` prefixed classes are present in rendered output.

10. **Arrow Icon:** CTA button includes SVG arrow icon. Verify SVG element exists within button rather than testing exact path data.

11. **Accessibility:** Use tools like axe-core or jest-axe for automated accessibility testing in addition to manual checks described above.

12. **Performance:** With typical data (3-5 key points), performance should be excellent. Test render time remains under reasonable threshold (e.g., <100ms).

# Test Instructions: AI-Powered City Vision

This document provides comprehensive, framework-agnostic test-writing instructions for the AI-Powered City Vision section. Focus on testing WHAT the component should do, not HOW to implement the tests.

## Overview

The AI-Powered City Vision section is an immersive scroll-driven experience with parallax effects, multiple content sections, team showcase, and call-to-action buttons. Tests should verify rendering, user interactions, scroll behaviors, and callback invocations.

## User Flow Tests

### Success Path: Complete Journey from Hero to CTA

**Setup:**
- Provide complete data for all props: hero, goals (5 items), problems (3 items), solutions (3 items), cityFeatures (6 items), visualConcepts (3 items), experts (8 items), callsToAction (2 items)
- Mount the AIPoweredCityVision component with all callbacks mocked

**Steps:**
1. Verify hero section renders with hero title and subtitle
2. Verify scroll indicator with text "Begin Journey" is visible
3. Scroll down to goals section
4. Verify section heading "Our Vision" is visible
5. Verify section description "Five transformative objectives guiding Ukraine's urban future" is visible
6. Verify all 5 goal items render with correct titles and descriptions
7. Scroll to problems section
8. Verify section heading "The Challenge" is visible
9. Verify section description "Critical issues demanding systemic transformation" is visible
10. Verify all 3 problem items render with correct titles and descriptions
11. Scroll to solutions section
12. Verify section heading "The Solution" is visible
13. Verify section description "How AI-powered cities transform governance and society" is visible
14. Verify all 3 solution items render with correct titles and descriptions
15. Scroll to features section
16. Verify section heading "Smart Infrastructure" is visible
17. Verify section description "Integrated systems powering the cities of tomorrow" is visible
18. Verify all 6 city features render with icons, titles, and descriptions
19. Scroll to team section
20. Verify section heading "Our Team" is visible
21. Verify section description "Expert leaders driving Ukraine's urban transformation" is visible
22. Verify all 8 expert cards render with names, titles, domains, and bio previews
23. Scroll to CTA section
24. Verify heading "Ready to Build" is visible
25. Verify heading "Ukraine's Future?" is visible
26. Verify description text "Join us in creating transparent, AI-powered cities that will transform governance and bring millions of Ukrainians home." is visible
27. Verify both CTA buttons render with correct labels

**Expected Results:**
- All content sections render in correct order
- All data items display correct text from props
- Section headings use gradient text treatments
- No console errors or warnings

### Success Path: Expert Card Interaction

**Setup:**
- Provide expert data with at least 3 experts
- Mock `onViewExpert` callback
- Mount component

**Steps:**
1. Scroll to team section
2. Locate first expert card by name (e.g., "Dr. Olena Kovalenko")
3. Verify expert card shows:
   - Avatar with initials (e.g., "OK")
   - Name: "Dr. Olena Kovalenko"
   - Title: "Chief Data Scientist"
   - Domain badge: "AI & Machine Learning"
   - Bio text preview (up to 3 lines)
4. Hover over expert card
5. Verify hover effects activate (background color change, border highlight)
6. Click on expert card
7. Verify `onViewExpert` callback was called with expert ID
8. Repeat for second and third expert cards

**Expected Results:**
- Each expert card displays all information correctly
- Hover effects are visible and smooth
- Clicking card triggers callback with correct expert ID
- Callback is called exactly once per click

### Success Path: CTA Navigation

**Setup:**
- Provide two CTAs: { id: 'invest', label: 'View Investment Opportunities', variant: 'primary', targetSection: '/investment' } and { id: 'contact', label: 'Contact Us', variant: 'secondary', targetSection: '/contact' }
- Mock `onNavigate` callback
- Mount component

**Steps:**
1. Scroll to CTA section at bottom
2. Verify "View Investment Opportunities" button is visible
3. Verify "Contact Us" button is visible
4. Hover over "View Investment Opportunities" button
5. Verify hover tooltip shows CTA description
6. Click "View Investment Opportunities" button
7. Verify `onNavigate` was called with '/investment'
8. Click "Contact Us" button
9. Verify `onNavigate` was called with '/contact'

**Expected Results:**
- Both CTA buttons render with correct labels
- Primary button has gradient background
- Secondary button has border and slate background
- Hover effects activate (scale up, shadow increase)
- Callbacks are invoked with correct target section identifiers

### Failure Path: Missing Required Data

**Setup:**
- Provide minimal data: hero only, empty arrays for all other props
- Mount component

**Steps:**
1. Verify hero section renders
2. Scroll down through content sections
3. Check for errors in console
4. Verify empty sections don't cause crashes

**Expected Results:**
- Component renders without crashing
- Hero section displays correctly
- Content sections render empty (no items) but section headings may still appear
- No uncaught errors or null reference exceptions

### Failure Path: Missing Callback Props

**Setup:**
- Provide complete data
- Do NOT provide `onNavigate` or `onViewExpert` callbacks
- Mount component

**Steps:**
1. Scroll to team section
2. Click on an expert card
3. Verify no errors occur (callback is optional)
4. Scroll to CTA section
5. Click on a CTA button
6. Verify no errors occur (callback is optional)

**Expected Results:**
- Component renders and functions normally
- Clicking interactive elements doesn't cause errors
- No console warnings about missing callbacks

## Empty State Tests

### Primary Empty State: No Content Data

**Setup:**
- Provide only hero data
- Pass empty arrays for: goals, problems, solutions, cityFeatures, visualConcepts, experts, callsToAction
- Mount component

**Expected Behavior:**
- Hero section renders normally
- Section headings render but no content cards/items appear
- No "no data" message is shown (component doesn't handle empty states explicitly)
- Page structure remains intact

### Related Records Empty State: No Experts

**Setup:**
- Provide complete data for all props EXCEPT experts (pass empty array)
- Mount component

**Expected Behavior:**
- All sections render normally except team section
- Team section heading "Our Team" appears
- No expert cards render
- No errors occur

### Related Records Empty State: No CTAs

**Setup:**
- Provide complete data for all props EXCEPT callsToAction (pass empty array)
- Mount component

**Expected Behavior:**
- All sections render normally except CTA section
- CTA section heading appears
- No buttons render
- No errors occur

## Component Interaction Tests

### Parallax Scroll Effect

**Test Scenario:**
- Mount component
- Verify hero section background position at scroll position 0
- Simulate scroll event with scrollY = 100
- Verify hero background translateY is approximately 50px (0.5x parallax speed)
- Simulate scroll event with scrollY = 200
- Verify hero background translateY is approximately 100px

**Expected Behavior:**
- Parallax effect moves background at half the scroll speed
- Transform value updates smoothly

### Expert Card Hover State

**Test Scenario:**
- Mount component with expert data
- Locate an expert card
- Verify initial state: slate background, no scale transform
- Trigger hover event
- Verify hover state: darker background, scale-105 transform, lime border
- Trigger mouse leave event
- Verify return to initial state

**Expected Behavior:**
- Hover state changes are applied immediately
- Transitions are smooth (CSS transitions)
- State returns to normal when hover ends

### CTA Button Hover with Description Tooltip

**Test Scenario:**
- Mount component with CTA data including descriptions
- Locate CTA button
- Verify description text is not visible (opacity-0)
- Trigger hover event
- Verify description text becomes visible (opacity-100)
- Verify description shows correct text from CTA object

**Expected Behavior:**
- Tooltip appears on hover
- Tooltip disappears when hover ends
- Tooltip shows correct description text

### Scroll Indicator Animation

**Test Scenario:**
- Mount component
- Locate scroll indicator at bottom of hero section
- Verify it contains text "Begin Journey"
- Verify it contains animated bouncing dot inside rounded border

**Expected Behavior:**
- Scroll indicator is visible on initial load
- Bouncing animation is active
- Visual styling matches design (cyan border, cyan dot)

## Edge Cases

### Very Long Text Content

**Test Scenario:**
- Provide expert data with extremely long bio (500+ characters)
- Mount component
- Locate expert card
- Verify bio text is truncated with line-clamp (max 3 lines)
- Verify ellipsis appears at truncation point

**Expected Behavior:**
- Long text doesn't break card layout
- Line clamp limits to 3 lines
- Overflow is hidden

### Single Item in List

**Test Scenario:**
- Provide only 1 goal, 1 problem, 1 solution, 1 expert, 1 CTA
- Mount component

**Expected Behavior:**
- All sections render correctly with single item
- Layout adjusts appropriately (grid items centered or aligned)
- No layout breaks or misalignment

### Very Large Number of Items

**Test Scenario:**
- Provide 20 goals, 20 problems, 20 solutions, 50 experts
- Mount component
- Scroll through all sections

**Expected Behavior:**
- All items render correctly
- Performance remains acceptable
- No memory leaks or excessive re-renders
- Stagger animations still work smoothly

### Missing Expert Avatar URL

**Test Scenario:**
- Provide expert data without avatarUrl or with invalid avatarUrl
- Mount component
- Locate expert card

**Expected Behavior:**
- Fallback avatar displays initials from expert name
- Initials are correctly extracted (first letter of each name part)
- Avatar has gradient background styling

### CTA with Unknown Variant

**Test Scenario:**
- Provide CTA with variant value other than 'primary' or 'secondary' (e.g., 'tertiary')
- Mount component

**Expected Behavior:**
- Component handles gracefully (may fall back to secondary styling)
- No errors or crashes

### Empty String Values

**Test Scenario:**
- Provide data with empty strings for: hero.title, goal.description, expert.name
- Mount component

**Expected Behavior:**
- Elements render but appear empty
- No crashes or layout breaks
- Labels/containers still visible

## Accessibility Checks

### Semantic HTML

**Test Scenario:**
- Mount component
- Inspect rendered HTML structure

**Expected Structure:**
- Hero section uses `<section>` element
- Headings use `<h1>` for hero title, `<h2>` for section headings, `<h3>` for card titles
- Expert cards use `<button>` element (interactive)
- CTA buttons use `<button>` element
- Images have alt text from data

### Keyboard Navigation

**Test Scenario:**
- Mount component
- Use Tab key to navigate through interactive elements

**Expected Behavior:**
- Expert cards are keyboard focusable
- CTA buttons are keyboard focusable
- Focus order follows logical visual flow
- Focus indicators are visible

### Screen Reader Compatibility

**Test Scenario:**
- Test with screen reader enabled
- Navigate through sections

**Expected Behavior:**
- Section headings are announced
- Expert card content is announced (name, title, domain, bio)
- CTA button labels are clear and descriptive
- Hero image alt text is announced

### Color Contrast

**Test Scenario:**
- Verify text colors meet WCAG AA standards for contrast

**Expected Behavior:**
- White text on dark slate-950 background has sufficient contrast
- Gradient text (cyan-lime) remains readable
- Slate-400 text on slate-950 has at least 4.5:1 contrast ratio

## Sample Test Data

```typescript
import type {
  Hero,
  Goal,
  Problem,
  Solution,
  CityFeature,
  VisualConcept,
  Expert,
  CallToAction
} from './types'

// Hero Data
const mockHero: Hero = {
  title: 'Center of Science, Innovation and Technologies',
  subtitle: 'AI-Powered Cities for Ukraine',
  imageUrl: '/images/hero-city.jpg',
  imageAlt: 'Futuristic Ukrainian city with smart infrastructure'
}

// Goals Data
const mockGoals: Goal[] = [
  {
    id: 'goal-1',
    title: 'Transparent Governance',
    description: 'AI-driven systems ensuring complete transparency in city management and decision-making processes.'
  },
  {
    id: 'goal-2',
    title: 'Economic Revival',
    description: 'Creating conditions to bring millions of Ukrainians back home through thriving, efficient cities.'
  },
  {
    id: 'goal-3',
    title: 'Sustainable Infrastructure',
    description: 'Building eco-friendly, resilient urban systems that adapt to future challenges.'
  }
]

// Problems Data
const mockProblems: Problem[] = [
  {
    id: 'problem-1',
    title: 'Corruption & Distrust',
    description: 'Decades of opaque governance have eroded public trust in institutions.'
  },
  {
    id: 'problem-2',
    title: 'Aging Infrastructure',
    description: 'Soviet-era systems are inefficient, costly, and failing to meet modern needs.'
  }
]

// Solutions Data
const mockSolutions: Solution[] = [
  {
    id: 'solution-1',
    title: 'AI-Powered Transparency',
    description: 'Blockchain and AI create immutable records of all government decisions and spending.'
  },
  {
    id: 'solution-2',
    title: 'Smart Resource Management',
    description: 'AI optimizes energy, water, and waste systems for maximum efficiency and sustainability.'
  }
]

// City Features Data
const mockCityFeatures: CityFeature[] = [
  {
    id: 'feature-1',
    icon: 'brain',
    title: 'Central AI Hub',
    description: 'Coordinating all city systems with real-time data analysis.'
  },
  {
    id: 'feature-2',
    icon: 'zap',
    title: 'Smart Energy Grid',
    description: 'Renewable energy distribution optimized by machine learning.'
  },
  {
    id: 'feature-3',
    icon: 'shield',
    title: 'Security & Privacy',
    description: 'Advanced encryption protecting citizen data while maintaining transparency.'
  }
]

// Visual Concepts Data
const mockVisualConcepts: VisualConcept[] = [
  {
    id: 'concept-1',
    title: 'Kyiv 2035 Vision',
    description: 'AI-integrated neighborhoods with green spaces and efficient transit.',
    imageUrl: '/images/kyiv-2035.jpg',
    imageAlt: 'Aerial view of futuristic Kyiv with green spaces'
  }
]

// Experts Data
const mockExperts: Expert[] = [
  {
    id: 'expert-1',
    name: 'Dr. Olena Kovalenko',
    domain: 'AI & Machine Learning',
    title: 'Chief Data Scientist',
    bio: 'Leading expert in urban AI systems with 15 years of experience in smart city implementations across Europe.',
    avatarUrl: '/images/experts/kovalenko.jpg'
  },
  {
    id: 'expert-2',
    name: 'Andriy Shevchenko',
    domain: 'Urban Planning',
    title: 'City Design Director',
    bio: 'Former advisor to Kyiv City Council, specializing in sustainable urban development and infrastructure modernization.',
    avatarUrl: '/images/experts/shevchenko.jpg'
  },
  {
    id: 'expert-3',
    name: 'Prof. Maria Bondarenko',
    domain: 'Governance & Policy',
    title: 'Policy Research Lead',
    bio: 'Published researcher on transparency frameworks and digital governance models for emerging democracies.',
    avatarUrl: '/images/experts/bondarenko.jpg'
  }
]

// Calls to Action Data
const mockCallsToAction: CallToAction[] = [
  {
    id: 'cta-invest',
    label: 'View Investment Opportunities',
    description: 'Learn how you can support Ukraine\'s future',
    variant: 'primary',
    targetSection: '/investment'
  },
  {
    id: 'cta-contact',
    label: 'Contact Us',
    description: 'Get in touch with our team',
    variant: 'secondary',
    targetSection: '/contact'
  }
]

// Complete Props Object
const mockProps = {
  hero: mockHero,
  goals: mockGoals,
  problems: mockProblems,
  solutions: mockSolutions,
  cityFeatures: mockCityFeatures,
  visualConcepts: mockVisualConcepts,
  experts: mockExperts,
  callsToAction: mockCallsToAction,
  onNavigate: jest.fn(), // or vi.fn() for Vitest
  onViewExpert: jest.fn()
}
```

## Notes for Test Implementation

1. **Scroll Testing:** Use testing library utilities to simulate scroll events. Be aware that JSDOM may not fully support scroll behavior - consider mocking window.scrollY or using integration tests in a real browser.

2. **Animation Testing:** CSS animations and transitions may not be testable in JSDOM. Focus on verifying CSS classes are applied rather than measuring animation timing.

3. **Parallax Effects:** Test that transform styles are calculated correctly based on scroll position, not that visual parallax is smooth.

4. **Callback Verification:** Use mock functions (jest.fn() or vi.fn()) to verify callbacks are called with correct arguments.

5. **Gradient Text:** Gradient text uses `bg-clip-text` and `text-transparent` classes. Verify these classes are present rather than testing actual gradient rendering.

6. **Responsive Behavior:** Test that different breakpoint classes are applied (sm:, md:, lg:, xl:) but actual responsive layout may require visual regression testing.

7. **Dark Mode:** This component is designed exclusively for dark backgrounds. Test in dark mode context or verify dark: prefixed classes are present.

8. **Google Fonts:** Font loading happens via inline <link> tags. In tests, fonts may not load - focus on verifying fontFamily styles are applied.

9. **Lucide Icons:** The CTASection uses ArrowRight from lucide-react. Mock this import or ensure lucide-react is available in test environment.

10. **Performance:** For large data sets (50+ items), consider testing render performance and re-render count to catch unnecessary re-renders.

11. **Stagger Animations:** Animation delays are calculated as `index * 0.08s`. Verify the style attribute includes correct delay value based on item index.

12. **Line Clamping:** Testing `line-clamp-3` may require measuring element height or checking for `-webkit-line-clamp` CSS property. Alternatively, verify the class is applied.

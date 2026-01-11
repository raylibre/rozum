# Investment Opportunity

## Overview

A concise page that presents the opportunity to invest in Ukraine's AI-powered city initiative. It communicates the vision with a compelling headline, provides 3-5 key bullet points about the investment opportunity, and directs interested visitors to the Contact section for details.

## User Flows

### Primary User Journey

1. **Landing:** Visitor views hero section with compelling headline and subheadline
2. **Review Opportunity:** Scrolls to view 3-5 numbered key points highlighting the investment opportunity
3. **Take Action:** Clicks "Contact Us" button to navigate to the Contact & Engagement section

### Contact Navigation Flow

1. Visitor reads through key investment points
2. Scrolls to CTA section at bottom
3. Clicks the prominent "Contact Us" button
4. Triggers `onContactClick` callback
5. Implementation navigates to Contact section

## Design Decisions

### Light & Clean Aesthetic

The section uses a light gradient background (slate-50 to slate-100 in light mode, slate-900 to slate-950 in dark mode) with decorative subtle background elements. This creates a professional, trustworthy atmosphere appropriate for investment content.

### Numbered Key Points

Investment key points are displayed in a grid with:
- Numbered badges (01, 02, 03, etc.) for easy reference
- Card-based layout with subtle shadows and borders
- Hover effects that reveal accent line (cyan-lime gradient)
- Responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop)

### Gradient CTA Card

The final CTA is presented in a large, eye-catching card with:
- Gradient background (cyan-600 to cyan-700)
- Decorative pattern overlay with light orbs
- White button with dark text for high contrast
- Arrow icon indicating forward action

### Typography

- **Hero headline:** 4xl-6xl font size, bold, high contrast
- **Hero subheadline:** lg-xl size, slate-600/300 for subtlety
- **Key point titles:** lg font size, semibold
- **Key point descriptions:** sm-base size, relaxed leading
- **CTA description:** lg-xl size, cyan-100 for readability on gradient

## Data Used

The component uses the following types:

### Hero
- `headline` - Main investment message
- `subheadline` - Supporting context

### KeyPoint
- `id` - Unique identifier
- `title` - Point headline
- `description` - Detailed explanation

### CTA
- `text` - Button label
- `description` - Explanatory text above button
- `linkTo` - Target section identifier (not used internally, for parent navigation)

## Visual Reference

See `screenshot.png` for the complete visual design showcasing:
- Hero section with gradient headline
- Grid of numbered key point cards
- Gradient CTA card with prominent button
- Decorative background elements

## Components Provided

### InvestmentOpportunity (Main Component)

Single-file component rendering the complete investment opportunity page.

**Props:**
- `hero` - Hero section content with headline and subheadline
- `keyPoints` - Array of 3-5 key points
- `cta` - Call-to-action content and button text
- `onContactClick` - Callback when contact button is clicked (optional)

**Features:**
- Gradient background with decorative elements
- Responsive layout adapting to screen size
- Light and dark mode support
- Hover effects on key point cards
- Large gradient CTA card with button

**Key UI Elements:**

**Hero Section:**
- Full-width centered content
- Decorative background orbs (cyan and lime)
- Headline in 4xl-6xl size, bold, dark/white text
- Subheadline in lg-xl size, slate-600/300 text
- Max width 2xl for readability
- Generous padding (pt-20-28, pb-16-24)

**Key Points Section:**
- Grid layout: 1 column mobile, 2 columns md, 3 columns lg
- Each card contains:
  - Top accent line (gradient, opacity-0 → opacity-100 on hover)
  - Numbered badge (01, 02, etc.) - cyan background, rounded-full
  - Title in lg font, semibold
  - Description in sm-base font, relaxed leading
  - White/slate-800 background
  - Border and shadow effects
  - Hover animation (shadow lift)
  - Stagger animation delay (index * 100ms)

**CTA Section:**
- Gradient background card (cyan-600 to cyan-700)
- Rounded-3xl corners with padding
- Decorative pattern overlay (white and lime orbs)
- CTA description text in cyan-100
- Button with white/slate-900 background
- Button text in cyan-700/cyan-400
- Arrow icon (→) indicating forward action
- Hover effects on button (shadow increase)

## Callback Props

| Callback | Parameters | Description | Typical Use Case |
|----------|------------|-------------|------------------|
| `onContactClick` | none | Called when user clicks the contact CTA button | Navigate to Contact & Engagement section, scroll to form, or open contact modal |

## Implementation Notes

- **Simple Layout:** This section is intentionally simple and focused - no complex interactions or state management
- **CTA Focus:** The entire design guides user attention toward the contact button
- **Responsive Grid:** Key points grid uses Tailwind's responsive breakpoints for optimal layout on all screens
- **Decorative Elements:** Background gradient orbs are purely decorative and positioned absolutely
- **Animation Delays:** Key point cards use inline style with `animationDelay` based on index for stagger effect
- **Accessibility:** Button is a proper `<button>` element with clear label and aria-compliant structure
- **Dark Mode:** All colors adapt using Tailwind's `dark:` variants for seamless light/dark mode support
- **No Navigation State:** Component is stateless - navigation is handled by parent via `onContactClick` callback

# Research & Reports

## Overview

A placeholder page indicating that the Research & Reports section is currently under development. This simple component provides a clear message to visitors while maintaining the design system's aesthetic quality.

## User Flows

### Primary User Journey

1. **Landing:** Visitor navigates to Research & Reports section
2. **View Message:** Sees centered placeholder with icon, title, and development status message
3. **Understanding:** Recognizes that content will be available in the future via the "In Development" badge

## Design Decisions

### Centered Placeholder Layout

The component uses a centered layout to create a calm, focused placeholder experience:
- Centered content container with max-width
- Generous padding for breathing room
- Clean slate-50/slate-900 background

### Research Icon

A flask/beaker icon represents research and scientific work, creating visual continuity with the organization's focus on innovation and technology.

### Animated Status Badge

The "In Development" badge includes:
- Lime color accent matching the design system
- Pulsing dot animation to indicate active development
- Rounded-full pill shape for modern aesthetic

### Typography

- **Title:** 2xl font size, bold, high contrast
- **Message:** Base font size, slate-600/400 for subtle presentation
- **Badge:** sm font size, medium weight

## Data Used

The component uses the following type:

### Placeholder
- `title` - Section title (e.g., "Research & Reports")
- `message` - Development status message

## Visual Reference

See `screenshot.png` for the complete visual design showcasing:
- Centered layout with ample whitespace
- Flask icon in cyan background circle
- Title and message text
- Animated "In Development" badge

## Components Provided

### ResearchReports (Main Component)

Single-file component rendering a clean placeholder message.

**Props:**
- `placeholder` - Placeholder object with title and message

**Features:**
- Centered layout on full-screen background
- Icon with cyan accent background
- Status badge with animated pulsing dot
- Light and dark mode support
- Fully responsive

**Key UI Elements:**

**Icon Section:**
- 16x16 icon container
- Rounded-2xl corners
- Cyan-100/cyan-900 background
- Flask SVG icon in cyan-600/cyan-400
- Centered above title

**Title:**
- 2xl font size
- Bold weight
- Slate-900/white color
- Centered text

**Message:**
- Base font size
- Relaxed leading for readability
- Slate-600/slate-400 color
- Centered text

**Status Badge:**
- Lime-100/lime-900 background
- Lime-700/lime-300 text
- Rounded-full pill shape
- Pulsing dot indicator (animate-pulse)
- "In Development" text

## Callback Props

This component has no callbacks - it's a display-only placeholder component.

## Implementation Notes

- **Stateless Component:** No state management or interactions
- **Future Replacement:** This component should be replaced with a full-featured research library when ready
- **Consistent Styling:** Uses same slate/cyan/lime palette as other sections
- **Accessibility:** Proper heading hierarchy and semantic HTML
- **Animation:** Pulsing dot uses Tailwind's built-in `animate-pulse` utility

## Future Implementation

When ready to fully implement this section, it should include:
- **Library of Strategic Cases:** Catalog of city transformation case studies
- **Analytical Materials:** In-depth analysis reports and white papers
- **Policy Reports:** Governance framework documentation
- **Thought Leadership Content:** Articles and insights from experts
- **Search/Filter Functionality:** Find reports by topic, date, author
- **Report Detail Views:** Full report pages with metadata, downloads, citations
- **Categories/Tags:** Taxonomy for organizing content
- **Featured Reports:** Highlight important or recent publications

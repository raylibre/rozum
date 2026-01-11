# AI-Powered City Vision

## Overview

An immersive, scroll-driven visual journey that presents the Center of Science, Innovation and Technologies concept through parallax storytelling. The experience begins with a full-screen hero image and project title, then unfolds as visitors scroll through connected sections linked by a visual "road" metaphor, culminating in calls-to-action for investment and contact.

## User Flows

### Primary User Journey

1. **Landing:** Visitor lands on full-screen hero with parallax background effects and project title
2. **Scroll Discovery:** Visitor scrolls down to discover project goals connected by visual road line
3. **Explore Content:** Continues scrolling through problems, solutions, city concepts, and features with parallax effects
4. **Meet the Team:** Views team section showcasing key experts with interactive cards
5. **Take Action:** Reaches call-to-action options to view investment opportunities or contact the team

### Expert Interaction Flow

1. Visitor scrolls to "Our Team" section
2. Sees grid of expert cards with names, titles, domains, and bio previews
3. Clicks on an expert card to view more details (triggers `onViewExpert` callback)
4. Implementation can show modal, navigate to detail page, or expand inline

### Navigation Flow

1. Visitor clicks a CTA button ("View Investment Opportunities" or "Contact Us")
2. Triggers `onNavigate` callback with target section identifier
3. Implementation handles navigation to the appropriate section

## Design Decisions

### Immersive Dark Theme

The entire section uses a dark slate-950 background to create an immersive, futuristic experience that emphasizes the technological vision. This contrasts with the lighter shell design and focuses attention on the content journey.

### Parallax Storytelling

- Hero section uses parallax scrolling effect (0.5x speed) for depth
- Animated grid pattern and glowing orbs create dynamic background
- Content sections alternate left/right placement for visual variety
- Smooth fade-in animations stagger content reveal

### Visual Road Metaphor

An SVG road path runs vertically through the entire page, visually connecting all sections as a journey from vision to action. This reinforces the narrative of transformation and progress.

### Content Organization

Content is organized into distinct thematic sections with color-coded gradients:

- **Goals:** Cyan to lime gradient (vision/growth)
- **Problems:** Red to orange gradient (urgency/challenge)
- **Solutions:** Lime to emerald gradient (growth/transformation)
- **Visual Concepts:** Full-width showcase section
- **Features:** Cyan to blue gradient (technology/trust)
- **Team:** Lime to cyan gradient (people/innovation)
- **CTA:** Cyan to lime gradient (action/opportunity)

### Typography Hierarchy

- **Display headings:** 5xl-6xl Space Grotesk, bold, gradient text
- **Section descriptions:** xl Inter, slate-400 for subtlety
- **Body content:** Inter for readability
- **Expert cards:** Space Grotesk for names, Inter for roles/bio

## Data Used

The component uses the following entity types from the global data model:

### Hero
- `title` - Main project title
- `subtitle` - Supporting tagline
- `imageUrl` - Hero background image
- `imageAlt` - Accessible description

### Goal
- `id` - Unique identifier
- `title` - Goal headline
- `description` - Detailed explanation

### Problem
- `id` - Unique identifier
- `title` - Problem statement
- `description` - Context and impact

### Solution
- `id` - Unique identifier
- `title` - Solution approach
- `description` - How it addresses the problem

### CityFeature
- `id` - Unique identifier
- `icon` - Icon identifier
- `title` - Feature name
- `description` - Feature details

### VisualConcept
- `id` - Unique identifier
- `title` - Concept name
- `description` - Concept explanation
- `imageUrl` - Mockup or visualization
- `imageAlt` - Accessible description

### Expert (from global data model)
- `id` - Unique identifier
- `name` - Expert's full name
- `domain` - Area of expertise
- `title` - Professional title/role
- `bio` - Background and experience
- `avatarUrl` - Profile image

### CallToAction
- `id` - Unique identifier
- `label` - Button text
- `description` - Explanatory text shown on hover
- `variant` - 'primary' or 'secondary' styling
- `targetSection` - Section identifier for navigation

## Visual Reference

See `screenshot.png` for the complete visual design showcasing:
- Full-screen hero with parallax effects
- Visual road connecting all sections
- Alternating content node layout
- Team grid with expert cards
- Dual CTA buttons at journey's end

## Components Provided

### AIPoweredCityVision (Main Component)

The orchestrating component that renders the complete section.

**Key Features:**
- Loads Google Fonts (Space Grotesk and Inter)
- Dark slate-950 background for immersive experience
- Renders all sub-sections in narrative sequence
- Manages callbacks for navigation and expert interactions

### HeroSection

Full-screen opening section with parallax effects.

**Features:**
- Parallax background scrolling at 0.5x speed
- Animated grid pattern overlay
- Glowing orb effects with CSS animations
- Gradient text treatment for subtitle
- Scroll indicator with bouncing animation
- "Begin Journey" call-to-action text

### JourneyRoad

SVG visual element creating the vertical "road" path connecting all sections.

**Features:**
- Responsive positioning
- Decorative element enhancing narrative flow

### ContentNode

Reusable component for goals, problems, and solutions.

**Props:**
- `title` - Content headline
- `description` - Detailed text
- `index` - Position in list (for stagger animation)
- `side` - 'left' or 'right' alignment
- `variant` - 'goal', 'problem', or 'solution' (affects styling)

**Features:**
- Alternating left/right layout
- Variant-specific color treatments
- Fade-in animations with stagger effect

### FeatureGrid

Grid display for city infrastructure features.

**Props:**
- `features` - Array of CityFeature objects

**Features:**
- Responsive grid (1-4 columns)
- Icon display for each feature
- Hover effects for interactivity

### VisualConceptsSection

Full-width showcase for city concept images.

**Props:**
- `concepts` - Array of VisualConcept objects

**Features:**
- Large format image display
- Caption and description for each concept
- Fade-in animations

### TeamSection

Expert showcase grid with interactive cards.

**Props:**
- `experts` - Array of Expert objects
- `onViewExpert` - Callback with expert ID when card clicked

**Features:**
- Responsive grid (1-4 columns)
- Initials-based avatar fallback
- Hover effects with scale and shadow
- Domain badge display
- Bio text with line-clamp (3 lines max)
- Click interaction for detail view

**UI Elements:**
- Heading: "Our Team" with lime-to-cyan gradient
- Subheading: "Expert leaders driving Ukraine's urban transformation"
- Expert cards with:
  - Circular gradient avatar (or initials)
  - Name in white, hover to lime-400
  - Title in cyan-400
  - Domain badge with slate background
  - Bio preview (3-line clamp)
  - Hover indicator dot (top-right)

### CTASection

Final section with action buttons and journey end marker.

**Props:**
- `callsToAction` - Array of CallToAction objects
- `onNavigate` - Callback with target section when CTA clicked

**Features:**
- Background gradient effects
- Dual button layout (horizontal on desktop, vertical on mobile)
- Primary variant: Gradient background (cyan to lime)
- Secondary variant: Slate background with border
- Hover effects: Scale up, shadow increase
- Description tooltip on hover
- Arrow icon with translate animation
- Decorative journey end marker (vertical line with pulsing dot)

**UI Elements:**
- Heading: "Ready to Build Ukraine's Future?" (gradient on "Ukraine's Future")
- Description: "Join us in creating transparent, AI-powered cities that will transform governance and bring millions of Ukrainians home."
- CTA buttons with labels from data
- Journey end marker: Gradient vertical line fading to transparent with pulsing lime dot

## Callback Props

| Callback | Parameters | Description | Typical Use Case |
|----------|------------|-------------|------------------|
| `onNavigate` | `targetSection: string` | Called when user clicks a CTA button | Navigate to investment or contact section identified by targetSection |
| `onViewExpert` | `expertId: string` | Called when user clicks an expert card | Show expert detail modal, navigate to profile page, or expand card inline |

## Implementation Notes

- **Minimal Shell Mode:** This section uses `shellMode: minimal` - only logo and language switcher are visible, main navigation is hidden for immersion
- **Scroll Performance:** Parallax effects use passive scroll listeners for smooth performance
- **Animation Timing:** Stagger delays are calculated based on index (0.08s per item for expert cards, varies by section)
- **Responsive Breakpoints:** Uses Tailwind's standard breakpoints (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Dark Mode Only:** Components are designed exclusively for dark backgrounds and may not render correctly on light backgrounds
- **Font Loading:** Google Fonts are loaded inline for Space Grotesk and Inter - ensure these don't conflict with global font loading
- **Icon Handling:** CTA section uses lucide-react for ArrowRight icon - ensure this dependency is installed
- **Line Clamping:** Expert bio uses `line-clamp-3` utility - requires Tailwind CSS line-clamp plugin or equivalent

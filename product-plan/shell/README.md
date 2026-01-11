# Application Shell

## Overview

The Rozum Website shell provides a clean, modern top navigation design that emphasizes the futuristic vision of the organization while maintaining professional credibility. The design uses a fixed header pattern with horizontal navigation, making all sections easily accessible while keeping the interface uncluttered and focused on content.

## Navigation Structure

The shell provides a consistent navigation experience across all sections:

- **Logo** (ГО "Розум") → Home / AI-Powered City Vision
- **Vision** → AI-Powered City Vision section
- **Investment** → Investment Opportunity section
- **Research** → Research & Reports section
- **About** → Organization & Team section
- **Contact** → Contact & Engagement section

## Components Provided

### AppShell

The main shell component that wraps all page content with a consistent header and layout.

**Props:**
- `children` (React.ReactNode) - The page content to render within the shell
- `navigationItems` (NavigationItem[]) - Array of navigation menu items
  - Each item has: `label` (string), `href` (string), `isActive` (boolean, optional)
- `currentLanguage` ('ua' | 'en', optional) - Current selected language, defaults to 'ua'
- `onNavigate` ((href: string) => void, optional) - Callback when user clicks a navigation link
- `onLanguageChange` ((language: 'ua' | 'en') => void, optional) - Callback when user switches language

**Features:**
- Sticky header that remains visible when scrolling
- Logo button that navigates to home
- Desktop horizontal navigation
- Mobile hamburger menu with slide-in navigation
- Language switcher always visible
- Responsive layout adapting to screen size

### MainNav

Navigation menu component used in both desktop and mobile contexts.

**Props:**
- `items` (NavigationItem[]) - Array of navigation menu items
- `onNavigate` ((href: string) => void, optional) - Callback when navigation item is clicked
- `className` (string, optional) - Additional CSS classes for styling
- `mobile` (boolean, optional) - Whether to render in mobile layout mode

**Features:**
- Active state highlighting with cyan accent color
- Hover states with color transitions
- Horizontal layout for desktop, vertical for mobile
- Consistent typography using Space Grotesk font

### LanguageSwitcher

Compact toggle component for switching between Ukrainian and English.

**Props:**
- `currentLanguage` ('ua' | 'en') - Currently selected language
- `onLanguageChange` ((language: 'ua' | 'en') => void, optional) - Callback when language is changed

**Features:**
- Toggle button design with UA/EN options
- Active language highlighted with cyan accent and white background
- Smooth transitions between states
- Compact size suitable for header placement

## Design Notes

### Colors

The shell uses the product's design tokens:

- **Primary (cyan):** Used for active navigation states and key accents
- **Secondary (lime):** Used for hover states and subtle highlights
- **Neutral (slate):** Used for backgrounds, text, and borders

### Typography

- **Navigation items and headings:** Space Grotesk font family
- **Body text:** Inter font family

### Responsive Behavior

- **Desktop (1024px+):** Full horizontal navigation with all items visible, logo on left, language switcher on right
- **Tablet (768px-1023px):** Navigation items may condense slightly, maintaining horizontal layout
- **Mobile (<768px):** Hamburger menu icon replaces navigation items, menu slides in from side when activated, language switcher remains visible

### Light and Dark Mode

All components fully support both light and dark modes using Tailwind's `dark:` variants:

- Light mode: White backgrounds, slate text, subtle borders
- Dark mode: Slate-950 backgrounds, white text, darker borders

### Accessibility

- Semantic HTML structure with proper header and nav elements
- Keyboard-accessible buttons and navigation
- Clear visual focus states
- ARIA label on mobile menu toggle button
- Proper heading hierarchy

## Usage Example

```tsx
import { AppShell } from './components/AppShell'

function App() {
  const navigationItems = [
    { label: 'Vision', href: '/vision', isActive: true },
    { label: 'Investment', href: '/investment' },
    { label: 'Research', href: '/research' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <AppShell
      navigationItems={navigationItems}
      currentLanguage="ua"
      onNavigate={(href) => {
        // Handle navigation
        console.log('Navigate to:', href)
      }}
      onLanguageChange={(lang) => {
        // Handle language change
        console.log('Switch to:', lang)
      }}
    >
      {/* Your page content here */}
      <div className="p-8">
        <h1>Page Content</h1>
      </div>
    </AppShell>
  )
}
```

## Implementation Notes

- The shell uses a sticky header (`sticky top-0`) for persistent navigation
- Mobile menu state is managed internally by AppShell
- Navigation closes automatically on mobile after clicking a link
- The logo acts as a home button, navigating to '/'
- Border colors and shadows adjust automatically for dark mode
- Maximum content width of 7xl (80rem) maintains readable layout on large screens

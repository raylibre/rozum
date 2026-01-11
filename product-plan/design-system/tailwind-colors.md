# Tailwind Color Configuration

## Color Choices

- **Primary:** `cyan` — Used for buttons, links, key accents, and active navigation states
- **Secondary:** `lime` — Used for tags, highlights, hover states, and secondary elements
- **Neutral:** `slate` — Used for backgrounds, text, borders, and general UI chrome

## Usage Examples

### Primary Accents
```html
<!-- Primary button -->
<button class="bg-cyan-600 hover:bg-cyan-700 text-white">
  Primary Action
</button>

<!-- Active navigation -->
<a class="text-cyan-600 dark:text-cyan-400 border-b-2 border-cyan-600">
  Current Page
</a>

<!-- Primary link -->
<a class="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400">
  Learn More
</a>
```

### Secondary Highlights
```html
<!-- Secondary badge -->
<span class="bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200">
  New
</span>

<!-- Hover state -->
<button class="hover:bg-lime-50 dark:hover:bg-lime-950">
  Hover Me
</button>

<!-- Accent element -->
<div class="border-l-4 border-lime-500">
  Highlighted Content
</div>
```

### Neutral UI
```html
<!-- Background -->
<div class="bg-slate-50 dark:bg-slate-950">
  Content Area
</div>

<!-- Text -->
<p class="text-slate-600 dark:text-slate-400">
  Body text
</p>

<!-- Borders -->
<div class="border border-slate-200 dark:border-slate-800">
  Card
</div>
```

## Color Scale Reference

### Cyan (Primary)
- `cyan-50` — Lightest
- `cyan-100` — Very light
- `cyan-200` — Light
- `cyan-300` — Medium light
- `cyan-400` — Medium
- `cyan-500` — Base
- `cyan-600` — **Primary (most used)**
- `cyan-700` — Dark
- `cyan-800` — Darker
- `cyan-900` — Very dark
- `cyan-950` — Darkest

### Lime (Secondary)
- `lime-50` — Lightest (backgrounds)
- `lime-100` — Very light (badges, tags)
- `lime-200` — Light
- `lime-300` — Medium light
- `lime-400` — Medium
- `lime-500` — **Base accents**
- `lime-600` — Medium dark
- `lime-700` — Dark
- `lime-800` — Darker (badge text)
- `lime-900` — Very dark (dark mode badges)
- `lime-950` — Darkest

### Slate (Neutral)
- `slate-50` — Lightest (light backgrounds)
- `slate-100` — Very light
- `slate-200` — Light (borders)
- `slate-300` — Medium light
- `slate-400` — Medium (disabled text)
- `slate-500` — Base
- `slate-600` — **Body text (light mode)**
- `slate-700` — Dark text
- `slate-800` — Darker (borders in dark mode)
- `slate-900` — Very dark (headings)
- `slate-950` — **Darkest (backgrounds in dark mode)**

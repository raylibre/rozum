# Typography Configuration

## Google Fonts Import

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Or in CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
```

## Font Usage

### Space Grotesk — Headings
**Use for:** Page titles, section headings, navigation items, large UI text

**Characteristics:**
- Geometric, modern sans-serif
- Excellent readability at large sizes
- Conveys futuristic, technical aesthetic
- Available weights: 300, 400, 500, 600, 700

**Tailwind CSS v4 Configuration:**

In your Tailwind CSS file:

```css
@theme {
  --font-family-heading: 'Space Grotesk', sans-serif;
}
```

Usage in components:

```html
<h1 class="font-[family-name:--font-family-heading] text-4xl font-bold">
  Main Heading
</h1>

<!-- Or define a custom utility -->
<h1 class="font-heading text-4xl font-bold">
  Main Heading
</h1>
```

### Inter — Body Text
**Use for:** Body copy, paragraphs, descriptions, form labels, buttons

**Characteristics:**
- Highly legible at all sizes
- Optimized for screens
- Neutral, professional appearance
- Available weights: 300, 400, 500, 600, 700

**Tailwind CSS v4 Configuration:**

```css
@theme {
  --font-family-body: 'Inter', sans-serif;
}
```

Usage:

```html
<p class="font-[family-name:--font-family-body] text-base">
  Body text
</p>

<!-- Or apply as default -->
body {
  font-family: var(--font-family-body);
}
```

### JetBrains Mono — Code/Technical
**Use for:** Code snippets, technical data, monospaced content

**Characteristics:**
- Monospaced with excellent character distinction
- Designed for coding and technical content
- Clean, modern aesthetic
- Available weights: 300, 400, 500, 600, 700

**Tailwind CSS v4 Configuration:**

```css
@theme {
  --font-family-mono: 'JetBrains Mono', monospace;
}
```

Usage:

```html
<code class="font-[family-name:--font-family-mono] text-sm">
  const example = "code";
</code>

<!-- Tailwind's font-mono will use this if configured -->
<pre class="font-mono">
  Code block
</pre>
```

## Typography Scale

### Heading Sizes (Space Grotesk)
```html
<!-- Hero heading -->
<h1 class="font-heading text-5xl md:text-6xl lg:text-7xl font-bold">
  Hero Title
</h1>

<!-- Page heading -->
<h1 class="font-heading text-4xl md:text-5xl font-bold">
  Page Title
</h1>

<!-- Section heading -->
<h2 class="font-heading text-3xl md:text-4xl font-semibold">
  Section Title
</h2>

<!-- Subsection heading -->
<h3 class="font-heading text-2xl md:text-3xl font-semibold">
  Subsection
</h3>

<!-- Card/Component heading -->
<h4 class="font-heading text-xl md:text-2xl font-medium">
  Component Title
</h4>

<!-- Small heading -->
<h5 class="font-heading text-lg md:text-xl font-medium">
  Small Heading
</h5>
```

### Body Text Sizes (Inter)
```html
<!-- Large body text -->
<p class="font-body text-lg md:text-xl">
  Lead paragraph
</p>

<!-- Regular body text -->
<p class="font-body text-base">
  Standard paragraph
</p>

<!-- Small text -->
<p class="font-body text-sm">
  Small text, captions
</p>

<!-- Extra small text -->
<p class="font-body text-xs">
  Metadata, labels
</p>
```

### Code/Mono Text (JetBrains Mono)
```html
<!-- Inline code -->
<code class="font-mono text-sm">
  code snippet
</code>

<!-- Code block -->
<pre class="font-mono text-sm">
  Code block content
</pre>
```

## Complete Tailwind CSS v4 Setup

Add to your main CSS file:

```css
@import "tailwindcss";

@theme {
  /* Typography */
  --font-family-heading: 'Space Grotesk', sans-serif;
  --font-family-body: 'Inter', sans-serif;
  --font-family-mono: 'JetBrains Mono', monospace;
}

/* Apply body font as default */
@layer base {
  body {
    font-family: var(--font-family-body);
  }
}

/* Create convenient utilities */
@layer utilities {
  .font-heading {
    font-family: var(--font-family-heading);
  }

  .font-body {
    font-family: var(--font-family-body);
  }

  .font-mono {
    font-family: var(--font-family-mono);
  }
}
```

## Fallback Fonts

If Google Fonts fail to load, these fallback fonts provide similar characteristics:

- **Space Grotesk** → System: `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Inter** → System: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **JetBrains Mono** → System: `ui-monospace, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace`

These are automatically handled by the fallback specifications in the font-family declarations above.

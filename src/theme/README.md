# Bellatrix Theme System

A comprehensive theme system for the Bellatrix project that provides consistent colors, gradients, shadows, and styling utilities across all components.

## 📁 File Structure

```
src/theme/
├── colors.js        # Core theme configuration and colors
├── globals.css      # Global CSS variables and utility classes
├── useTheme.js      # React hooks for theme usage
├── index.js         # Main export file
└── README.md        # This documentation
```

## 🎨 Colors

### Primary Brand Colors
- **Primary**: `#2563eb` (Blue 600)
- **Secondary**: `#06b6d4` (Cyan 500)
- **Primary Light**: `#60a5fa` (Blue 400)
- **Primary Dark**: `#1e40af` (Blue 800)

### Dark Theme Colors
- **Dark Primary**: `#001038` (Main dark background)
- **Dark Secondary**: `#001245` (Lighter dark variation)
- **Dark Tertiary**: `#000e30` (Darker variation)

### Light Theme Colors
- **Light Primary**: `#ffffff` (Pure white)
- **Light Secondary**: `#f9fafb` (Gray 50)
- **Light Tertiary**: `#f3f4f6` (Gray 100)

## 🚀 Usage

### 1. Import Theme
```javascript
// Import specific utilities
import { COLORS, GRADIENTS, useTheme } from '../theme';

// Import everything
import theme from '../theme';
```

### 2. Using React Hooks

#### useTheme Hook
```javascript
import { useTheme } from '../theme';

const MyComponent = () => {
  const { colors, gradients, shadows, utils } = useTheme();
  
  return (
    <div style={{
      background: gradients.primary,
      color: colors.text.inverse,
      boxShadow: shadows.lg
    }}>
      Content
    </div>
  );
};
```

#### useComponentTheme Hook
```javascript
import { useComponentTheme } from '../theme';

const MyButton = () => {
  const buttonStyles = useComponentTheme('button');
  
  return (
    <button style={buttonStyles.primary}>
      Primary Button
    </button>
  );
};
```

#### useCSSVariables Hook
```javascript
import { useCSSVariables } from '../theme';

const MyComponent = () => {
  const css = useCSSVariables();
  
  return (
    <div style={{
      background: css.gradientPrimary,
      boxShadow: css.shadowCard
    }}>
      Content
    </div>
  );
};
```

### 3. Using CSS Classes

Import the global CSS in your main CSS file:
```css
@import '../theme/globals.css';
```

Then use utility classes:
```html
<div className="bg-dark-primary text-inverse shadow-card">
  Dark themed content
</div>

<button className="btn-primary">
  Styled Button
</button>

<div className="card animate-slide-up">
  Animated Card
</div>
```

### 4. Using CSS Custom Properties

```css
.my-component {
  background: var(--gradient-primary);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-lg);
  border-radius: 1rem;
}

.my-component:hover {
  background: var(--gradient-primary-hover);
  box-shadow: var(--shadow-blue-hover);
}
```

### 5. Direct Color Usage

```javascript
import { COLORS, GRADIENTS, SHADOWS } from '../theme';

const styles = {
  background: GRADIENTS.PRIMARY,
  color: COLORS.TEXT_INVERSE,
  boxShadow: SHADOWS.LG,
  border: `2px solid ${COLORS.PRIMARY}`
};
```

## 🎭 Component Examples

### Hero Section
```javascript
import { useTheme } from '../theme';

const HeroSection = () => {
  const { utils } = useTheme();
  
  return (
    <section style={utils.getSectionStyles('hero')}>
      <h1 className="animate-slide-up">Welcome to Bellatrix</h1>
      <p className="animate-fade-in">Your NetSuite partner</p>
    </section>
  );
};
```

### Card Component
```javascript
import { useComponentTheme } from '../theme';

const Card = ({ variant = 'default', children }) => {
  const cardStyles = useComponentTheme('card');
  
  return (
    <div style={cardStyles[variant]} className="card">
      {children}
    </div>
  );
};
```

### Button Component
```javascript
import { BUTTON_STYLES } from '../theme';

const Button = ({ variant = 'PRIMARY', children, ...props }) => {
  return (
    <button style={BUTTON_STYLES[variant]} {...props}>
      {children}
    </button>
  );
};
```

## 🔧 Utility Functions

### Color Manipulation
```javascript
import { themeUtils } from '../theme';

// Add opacity to a color
const transparentBlue = themeUtils.withOpacity('#2563eb', 0.5);

// Create custom gradient
const customGradient = themeUtils.createGradient('45deg', '#2563eb', '#06b6d4');
```

### Responsive Styles
```javascript
import { themeUtils } from '../theme';

const responsiveStyles = themeUtils.responsive({
  fontSize: '1rem',
  sm: { fontSize: '1.125rem' },
  md: { fontSize: '1.25rem' },
  lg: { fontSize: '1.5rem' }
});
```

### Hover/Focus States
```javascript
import { themeUtils } from '../theme';

const buttonStyles = {
  padding: '1rem 2rem',
  ...themeUtils.hover({
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-blue-hover)'
  }),
  ...themeUtils.focus({
    outline: '2px solid var(--color-primary-400)'
  })
};
```

## 🎨 Available Gradients

- `PRIMARY`: Blue to Cyan gradient
- `PRIMARY_HOVER`: Darker blue to cyan gradient
- `SECONDARY`: Light blue gradient
- `DARK`: Dark theme gradient
- `HERO`: Complex hero section gradient
- `LIGHT`: Light gray gradient
- `ACCENT`: Cyan to blue accent gradient

## 🌫️ Available Shadows

- `SM`: Small shadow for subtle elevation
- `BASE`: Default card shadow
- `MD`: Medium shadow for components
- `LG`: Large shadow for modals/dialogs
- `XL`: Extra large shadow for floating elements
- `BLUE`: Blue-tinted shadow for interactive elements
- `BLUE_HOVER`: Enhanced blue shadow for hover states

## 📱 Responsive Breakpoints

- `SM`: 640px and up
- `MD`: 768px and up
- `LG`: 1024px and up
- `XL`: 1280px and up
- `2XL`: 1536px and up

## 🎬 Available Animations

- `BACKGROUND_GLOW`: Animated background color changes
- `SLIDE_UP`: Slide up entrance animation
- `FADE_IN`: Fade in entrance animation
- `FLOAT`: Floating animation for decorative elements
- `PULSE_SLOW`: Slow pulsing animation

## ✨ Best Practices

### 1. Consistency
Always use theme colors instead of hardcoded values:
```javascript
// ✅ Good
color: COLORS.PRIMARY

// ❌ Bad
color: '#2563eb'
```

### 2. Semantic Naming
Use semantic color names for better maintainability:
```javascript
// ✅ Good
background: colors.bg.dark

// ❌ Bad
background: '#001038'
```

### 3. Component Variants
Create consistent component variants using theme utilities:
```javascript
const Button = ({ variant = 'primary' }) => {
  const styles = useComponentTheme('button');
  return <button style={styles[variant]} />;
};
```

### 4. Responsive Design
Use theme breakpoints for consistent responsive behavior:
```javascript
const styles = themeUtils.responsive({
  padding: SPACING.SM,
  md: { padding: SPACING.MD },
  lg: { padding: SPACING.LG }
});
```

### 5. Animation Usage
Apply animations consistently using theme classes:
```html
<div className="animate-slide-up">
  <h1 className="animate-fade-in">Title</h1>
</div>
```

## 🔄 Theme Updates

To update theme colors or add new variants:

1. Update `colors.js` with new color definitions
2. Add corresponding CSS variables in `globals.css`
3. Update utility functions in `useTheme.js` if needed
4. Export new utilities in `index.js`
5. Update this documentation

## 🎯 Integration with Tailwind CSS

The theme system works alongside Tailwind CSS. You can:

1. Use theme colors in Tailwind classes:
```html
<div className="bg-blue-600 text-white">
  Tailwind + Theme
</div>
```

2. Extend Tailwind config with theme colors:
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2563eb',
        'brand-secondary': '#06b6d4',
        'dark-bg': '#001038'
      }
    }
  }
}
```

This theme system ensures visual consistency across the entire Bellatrix project while providing flexibility for component-specific styling needs. 
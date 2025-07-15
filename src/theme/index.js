// Theme Index - Export all theme-related modules
// This provides a single entry point for all theme utilities

// Core theme configuration
export { default as theme, colorUtils, cssVariables } from './colors';

// React hooks for theme usage
export {
  useTheme,
  useCSSVariables,
  useDarkMode,
  useComponentTheme
} from './useTheme';

// Theme utilities for easy access
export const COLORS = {
  // Brand colors
  PRIMARY: '#2563eb',
  SECONDARY: '#06b6d4',
  PRIMARY_LIGHT: '#60a5fa',
  PRIMARY_DARK: '#1e40af',
  
  // Dark theme
  DARK_BG: '#001038',
  DARK_BG_SECONDARY: '#001245',
  DARK_BG_TERTIARY: '#000e30',
  
  // Light theme
  LIGHT_BG: '#ffffff',
  LIGHT_BG_SECONDARY: '#f9fafb',
  LIGHT_BG_TERTIARY: '#f3f4f6',
  
  // Text colors
  TEXT_PRIMARY: '#111827',
  TEXT_SECONDARY: '#374151',
  TEXT_TERTIARY: '#6b7280',
  TEXT_INVERSE: '#ffffff',
  
  // Status colors
  SUCCESS: '#16a34a',
  WARNING: '#d97706',
  ERROR: '#dc2626',
  INFO: '#2563eb'
};

export const GRADIENTS = {
  PRIMARY: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
  PRIMARY_HOVER: 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
  SECONDARY: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
  DARK: 'linear-gradient(135deg, #001038 0%, #001245 100%)',
  HERO: 'linear-gradient(135deg, #001038 0%, #001245 25%, #001038 50%, #000e30 75%, #001038 100%)',
  LIGHT: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
  ACCENT: 'linear-gradient(135deg, #22d3ee 0%, #2563eb 100%)'
};

export const SHADOWS = {
  SM: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  BASE: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  MD: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  LG: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  XL: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  BLUE: '0 10px 25px -5px rgba(37, 99, 235, 0.25)',
  BLUE_HOVER: '0 20px 40px -5px rgba(37, 99, 235, 0.4)'
};

export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px'
};

export const SPACING = {
  XS: '0.5rem',
  SM: '1rem',
  MD: '1.5rem',
  LG: '2rem',
  XL: '3rem',
  '2XL': '4rem',
  '3XL': '6rem',
  '4XL': '8rem'
};

// Component style presets
export const BUTTON_STYLES = {
  PRIMARY: {
    background: GRADIENTS.PRIMARY,
    color: COLORS.TEXT_INVERSE,
    border: `2px solid ${COLORS.PRIMARY}`,
    borderRadius: '0.75rem',
    padding: '1rem 2rem',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  SECONDARY: {
    background: 'transparent',
    color: COLORS.PRIMARY,
    border: `2px solid ${COLORS.PRIMARY}`,
    borderRadius: '0.75rem',
    padding: '1rem 2rem',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  GHOST: {
    background: 'transparent',
    color: COLORS.PRIMARY,
    border: 'none',
    borderRadius: '0.75rem',
    padding: '1rem 2rem',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }
};

export const CARD_STYLES = {
  DEFAULT: {
    background: COLORS.LIGHT_BG,
    border: `1px solid #e5e7eb`,
    borderRadius: '1.5rem',
    boxShadow: SHADOWS.BASE,
    transition: 'all 0.3s ease'
  },
  ELEVATED: {
    background: COLORS.LIGHT_BG,
    border: `1px solid #e5e7eb`,
    borderRadius: '1.5rem',
    boxShadow: SHADOWS.LG,
    transition: 'all 0.3s ease'
  },
  DARK: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '1.5rem',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease'
  }
};

export const SECTION_STYLES = {
  LIGHT: {
    backgroundColor: COLORS.LIGHT_BG_SECONDARY,
    color: COLORS.TEXT_PRIMARY
  },
  DARK: {
    backgroundColor: COLORS.DARK_BG,
    color: COLORS.TEXT_INVERSE
  },
  HERO: {
    background: GRADIENTS.HERO,
    color: COLORS.TEXT_INVERSE,
    position: 'relative',
    overflow: 'hidden'
  }
};

// Animation presets
export const ANIMATIONS = {
  BACKGROUND_GLOW: 'background-glow 12s ease-in-out infinite',
  SLIDE_UP: 'slide-up 0.8s ease-out',
  FADE_IN: 'fade-in 1s ease-out 0.3s both',
  FLOAT: 'float 6s ease-in-out infinite',
  PULSE_SLOW: 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
};

// Utility functions for common operations
export const themeUtils = {
  // Create responsive styles
  responsive: (styles) => {
    const { sm, md, lg, xl, ...base } = styles;
    return {
      ...base,
      [`@media (min-width: ${BREAKPOINTS.SM})`]: sm,
      [`@media (min-width: ${BREAKPOINTS.MD})`]: md,
      [`@media (min-width: ${BREAKPOINTS.LG})`]: lg,
      [`@media (min-width: ${BREAKPOINTS.XL})`]: xl
    };
  },
  
  // Create hover styles
  hover: (styles) => ({
    '&:hover': styles
  }),
  
  // Create focus styles
  focus: (styles) => ({
    '&:focus': styles
  }),
  
  // Create disabled styles
  disabled: (styles) => ({
    '&:disabled': styles
  }),
  
  // Get color with opacity
  withOpacity: (color, opacity) => {
    if (color.startsWith('#')) {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    return color.replace(/[\d.]+\)$/g, `${opacity})`);
  },
  
  // Create gradient
  createGradient: (direction = '135deg', ...colors) => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
  }
};

// CSS-in-JS styled-components theme object
export const styledTheme = {
  colors: COLORS,
  gradients: GRADIENTS,
  shadows: SHADOWS,
  breakpoints: BREAKPOINTS,
  spacing: SPACING,
  animations: ANIMATIONS
};

// Default export
export default {
  COLORS,
  GRADIENTS,
  SHADOWS,
  BREAKPOINTS,
  SPACING,
  BUTTON_STYLES,
  CARD_STYLES,
  SECTION_STYLES,
  ANIMATIONS,
  themeUtils,
  styledTheme
}; 
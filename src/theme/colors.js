// Theme Colors Configuration for Bellatrix Project
// This file contains all the colors used throughout the project for consistency

export const theme = {
  // Primary Brand Colors
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554'
  },

  // Secondary Colors (Cyan/Teal)
  secondary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63'
  },

  // Dark Theme Colors
  dark: {
    primary: '#001038',      // Main dark background
    secondary: '#001245',    // Lighter dark variation
    tertiary: '#000e30',     // Darker variation
    accent: '#001a4d',       // Medium dark variation
    surface: '#002952'       // Surface color
  },

  // Light Theme Colors
  light: {
    primary: '#ffffff',      // Pure white
    secondary: '#f9fafb',    // Gray 50
    tertiary: '#f3f4f6',     // Gray 100
    surface: '#e5e7eb',      // Gray 200
    border: '#d1d5db'        // Gray 300
  },

  // Text Colors
  text: {
    primary: '#111827',      // Gray 900 - Main text
    secondary: '#374151',    // Gray 700 - Secondary text
    tertiary: '#6b7280',     // Gray 500 - Muted text
    quaternary: '#9ca3af',   // Gray 400 - Placeholder text
    inverse: '#ffffff',      // White text for dark backgrounds
    muted: '#d1d5db'        // Gray 300 - Very muted text
  },

  // Background Colors
  background: {
    primary: '#ffffff',      // Main white background
    secondary: '#f9fafb',    // Light gray background
    tertiary: '#f3f4f6',     // Slightly darker gray
    dark: '#001038',         // Main dark background
    darkSecondary: '#001245', // Secondary dark background
    card: '#ffffff',         // Card backgrounds
    overlay: 'rgba(0, 16, 56, 0.8)' // Dark overlay
  },

  // Status Colors
  status: {
    success: {
      light: '#dcfce7',
      main: '#16a34a',
      dark: '#166534'
    },
    warning: {
      light: '#fef3c7',
      main: '#d97706',
      dark: '#92400e'
    },
    error: {
      light: '#fee2e2',
      main: '#dc2626',
      dark: '#991b1b'
    },
    info: {
      light: '#dbeafe',
      main: '#2563eb',
      dark: '#1d4ed8'
    }
  },

  // Gradient Definitions
  gradients: {
    primary: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
    primaryHover: 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
    secondary: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
    dark: 'linear-gradient(135deg, #001038 0%, #001245 100%)',
    light: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
    accent: 'linear-gradient(135deg, #22d3ee 0%, #2563eb 100%)',
    hero: 'linear-gradient(135deg, #001038 0%, #001245 25%, #001038 50%, #000e30 75%, #001038 100%)',
    card: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
    overlay: 'linear-gradient(135deg, rgba(0, 16, 56, 0.1) 0%, rgba(0, 16, 56, 0.05) 100%)'
  },

  // Shadow Definitions
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    blue: '0 10px 25px -5px rgba(37, 99, 235, 0.25)',
    blueHover: '0 20px 40px -5px rgba(37, 99, 235, 0.4)'
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },

  // Spacing (based on 0.25rem = 4px)
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem'
  },

  // Font Sizes
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem'
  },

  // Component Specific Colors
  components: {
    navbar: {
      background: 'rgba(255, 255, 255, 0.95)',
      text: '#111827',
      hover: '#2563eb'
    },
    button: {
      primary: {
        background: '#2563eb',
        backgroundHover: '#1d4ed8',
        text: '#ffffff',
        border: '#2563eb',
        borderHover: '#1d4ed8'
      },
      secondary: {
        background: 'transparent',
        backgroundHover: '#2563eb',
        text: '#2563eb',
        textHover: '#ffffff',
        border: '#2563eb',
        borderHover: '#1d4ed8'
      },
      ghost: {
        background: 'transparent',
        backgroundHover: 'rgba(37, 99, 235, 0.1)',
        text: '#2563eb',
        border: 'transparent'
      }
    },
    card: {
      background: '#ffffff',
      border: '#e5e7eb',
      borderHover: '#2563eb',
      shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      shadowHover: '0 10px 25px -5px rgba(37, 99, 235, 0.25)'
    },
    modal: {
      background: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.5)',
      border: '#e5e7eb'
    },
    input: {
      background: '#ffffff',
      border: '#d1d5db',
      borderFocus: '#2563eb',
      text: '#111827',
      placeholder: '#9ca3af'
    }
  },

  // Animation Colors
  animation: {
    glow: {
      primary: 'rgba(37, 99, 235, 0.3)',
      secondary: 'rgba(6, 182, 212, 0.3)',
      accent: 'rgba(34, 211, 238, 0.2)'
    },
    floating: {
      blue: 'rgba(96, 165, 250, 0.2)',
      cyan: 'rgba(34, 211, 238, 0.3)',
      purple: 'rgba(168, 85, 247, 0.2)',
      white: 'rgba(255, 255, 255, 0.1)'
    }
  }
};

// CSS Custom Properties for easy usage
export const cssVariables = `
  :root {
    /* Primary Colors */
    --color-primary-50: ${theme.primary[50]};
    --color-primary-100: ${theme.primary[100]};
    --color-primary-200: ${theme.primary[200]};
    --color-primary-300: ${theme.primary[300]};
    --color-primary-400: ${theme.primary[400]};
    --color-primary-500: ${theme.primary[500]};
    --color-primary-600: ${theme.primary[600]};
    --color-primary-700: ${theme.primary[700]};
    --color-primary-800: ${theme.primary[800]};
    --color-primary-900: ${theme.primary[900]};
    
    /* Dark Theme */
    --color-dark-primary: ${theme.dark.primary};
    --color-dark-secondary: ${theme.dark.secondary};
    --color-dark-tertiary: ${theme.dark.tertiary};
    
    /* Text Colors */
    --color-text-primary: ${theme.text.primary};
    --color-text-secondary: ${theme.text.secondary};
    --color-text-tertiary: ${theme.text.tertiary};
    --color-text-inverse: ${theme.text.inverse};
    
    /* Background Colors */
    --color-bg-primary: ${theme.background.primary};
    --color-bg-secondary: ${theme.background.secondary};
    --color-bg-dark: ${theme.background.dark};
    
    /* Gradients */
    --gradient-primary: ${theme.gradients.primary};
    --gradient-dark: ${theme.gradients.dark};
    --gradient-hero: ${theme.gradients.hero};
    
    /* Shadows */
    --shadow-sm: ${theme.shadows.sm};
    --shadow-md: ${theme.shadows.md};
    --shadow-lg: ${theme.shadows.lg};
    --shadow-blue: ${theme.shadows.blue};
  }
`;

// Utility functions for color manipulation
export const colorUtils = {
  // Convert hex to rgba
  hexToRgba: (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },

  // Get color with opacity
  withOpacity: (color, opacity) => {
    if (color.startsWith('#')) {
      return colorUtils.hexToRgba(color, opacity);
    }
    return color.replace(/[\d.]+\)$/g, `${opacity})`);
  },

  // Get gradient string
  getGradient: (direction = '135deg', ...colors) => {
    return `linear-gradient(${direction}, ${colors.join(', ')})`;
  }
};

export default theme; 
import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { getThemeByMood, themeMoods, colorUtils, generateCSSVariables } from './colors';

// Theme Mood Context
const ThemeMoodContext = createContext();

/**
 * Theme Mood Provider Component
 * Provides theme mood state and switching functionality to the entire app
 */
export const ThemeMoodProvider = ({ children, defaultMood = 'blue' }) => {
  const [currentMood, setCurrentMood] = useState(() => {
    // Try to get saved mood from localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('bellatrix-theme-mood') || defaultMood;
    }
    return defaultMood;
  });

  // Update CSS variables and data attribute when mood changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Save to localStorage
      localStorage.setItem('bellatrix-theme-mood', currentMood);
      
      // Update data attribute on document root for CSS selector targeting
      document.documentElement.setAttribute('data-theme-mood', currentMood);
      
      // Update CSS variables
      const styleElement = document.getElementById('theme-mood-variables');
      if (styleElement) {
        styleElement.textContent = generateCSSVariables(currentMood);
      } else {
        const newStyleElement = document.createElement('style');
        newStyleElement.id = 'theme-mood-variables';
        newStyleElement.textContent = generateCSSVariables(currentMood);
        document.head.appendChild(newStyleElement);
      }
    }
  }, [currentMood]);

  const switchMood = (mood) => {
    if (themeMoods[mood]) {
      setCurrentMood(mood);
    }
  };

  const toggleMood = () => {
    setCurrentMood(prev => prev === 'blue' ? 'purple' : 'blue');
  };

  const value = {
    currentMood,
    switchMood,
    toggleMood,
    availableMoods: Object.keys(themeMoods),
    isBlueMood: currentMood === 'blue',
    isPurpleMood: currentMood === 'purple'
  };

  return (
    <ThemeMoodContext.Provider value={value}>
      {children}
    </ThemeMoodContext.Provider>
  );
};

/**
 * Custom hook to access theme mood functionality
 * @returns {Object} Theme mood context with switching functions
 */
export const useThemeMood = () => {
  const context = useContext(ThemeMoodContext);
  if (!context) {
    throw new Error('useThemeMood must be used within a ThemeMoodProvider');
  }
  return context;
};

/**
 * Custom hook to access theme colors, gradients, and utilities
 * Now mood-aware and reactive to theme mood changes
 * @returns {Object} Theme object with colors, utilities, and helper functions
 */
export const useTheme = () => {
  const moodContext = useContext(ThemeMoodContext);
  const currentMood = moodContext?.currentMood || 'blue';
  
  const themeObject = useMemo(() => {
    const theme = getThemeByMood(currentMood);
    
    return {
      // Direct access to theme colors
      colors: theme,
      
      // Current mood info
      mood: {
        current: currentMood,
        isBlue: currentMood === 'blue',
        isPurple: currentMood === 'purple'
      },
      
      // Commonly used colors for quick access
      brand: {
        primary: theme.primary[600],
        secondary: theme.secondary[500],
        primaryLight: theme.primary[400],
        primaryDark: theme.primary[800],
        secondaryLight: theme.secondary[400],
        secondaryDark: theme.secondary[700]
      },
      
      // Background colors
      bg: {
        primary: theme.background.primary,
        secondary: theme.background.secondary,
        dark: theme.background.dark,
        darkSecondary: theme.background.darkSecondary,
        card: theme.background.card,
        overlay: theme.background.overlay
      },
      
      // Text colors
      text: {
        primary: theme.text.primary,
        secondary: theme.text.secondary,
        tertiary: theme.text.tertiary,
        inverse: theme.text.inverse,
        muted: theme.text.muted
      },
      
      // Gradients
      gradients: theme.gradients,
      
      // Shadows
      shadows: theme.shadows,
      
      // Status colors
      status: theme.status,
      
      // Animation colors
      animation: theme.animation,
      
      // Utility functions
      utils: {
        ...colorUtils,
        ...theme.utils,
        
        // Get color with specific opacity
        withOpacity: (color, opacity) => colorUtils.withOpacity(color, opacity),
        
        // Get primary color variations
        getPrimary: (shade = 600) => theme.primary[shade],
        getSecondary: (shade = 500) => theme.secondary[shade],
        
        // Get gray color variations
        getGray: (shade) => {
          const grayMap = {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827'
          };
          return grayMap[shade] || grayMap[500];
        },
      
        // Generate custom gradients
        createGradient: (direction = '135deg', startColor, endColor) => {
          return `linear-gradient(${direction}, ${startColor}, ${endColor})`;
        },
        
        // Get button styles (mood-aware)
        getButtonStyles: (variant = 'primary') => {
          const baseStyles = {
            padding: '1rem 2rem',
            borderRadius: '0.75rem',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            border: '2px solid transparent'
          };
          
          const variants = {
            primary: {
              ...baseStyles,
              background: theme.gradients.primary,
              color: theme.text.inverse,
              borderColor: theme.primary[600]
            },
            secondary: {
              ...baseStyles,
            background: 'transparent',
            color: theme.primary[600],
            borderColor: theme.primary[600]
          },
          ghost: {
            ...baseStyles,
            background: 'transparent',
            color: theme.primary[600],
            border: 'none'
          }
        };
        
        return variants[variant] || variants.primary;
      },
      
      // Get card styles
      getCardStyles: (variant = 'default') => {
        const baseStyles = {
          borderRadius: '1.5rem',
          transition: 'all 0.3s ease'
        };
        
        const variants = {
          default: {
            ...baseStyles,
            background: theme.background.card,
            border: `1px solid ${theme.light.border}`,
            boxShadow: theme.shadows.base
          },
          elevated: {
            ...baseStyles,
            background: theme.background.card,
            border: `1px solid ${theme.light.border}`,
            boxShadow: theme.shadows.lg
          },
          dark: {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)'
          }
        };
        
        return variants[variant] || variants.default;
      },
      
      // Get section styles
      getSectionStyles: (variant = 'light') => {
        const variants = {
          light: {
            backgroundColor: theme.background.secondary,
            color: theme.text.primary
          },
          dark: {
            backgroundColor: theme.dark.primary,
            color: theme.text.inverse
          },
          hero: {
            background: theme.gradients.hero,
            color: theme.text.inverse,
            position: 'relative',
            overflow: 'hidden'
          }
        };
        
        return variants[variant] || variants.light;
      },
      
      // Get responsive breakpoints
        // Get responsive breakpoints
        breakpoints: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px'
        },
        
        // Media query helpers
        media: {
          sm: '@media (min-width: 640px)',
          md: '@media (min-width: 768px)',
          lg: '@media (min-width: 1024px)',
          xl: '@media (min-width: 1280px)',
          '2xl': '@media (min-width: 1536px)'
        }
      }
    };
  }, [currentMood]);
  
  return themeObject;
};

/**
 * Hook to get CSS custom properties for inline styles (mood-aware)
 * @returns {Object} CSS custom properties
 */
export const useCSSVariables = () => {
  const moodContext = useContext(ThemeMoodContext);
  const currentMood = moodContext?.currentMood || 'blue';
  
  return useMemo(() => ({
    // Colors (mood-aware)
    primaryColor: 'var(--color-primary-600)',
    secondaryColor: 'var(--color-secondary-500)',
    darkBg: 'var(--color-dark-primary)',
    lightBg: 'var(--color-light-primary)',
    textPrimary: 'var(--color-text-primary)',
    textInverse: 'var(--color-text-inverse)',
    
    // Gradients
    gradientPrimary: 'var(--gradient-primary)',
    gradientHero: 'var(--gradient-hero)',
    
    // Shadows
    shadowCard: 'var(--shadow-base)',
    shadowElevated: 'var(--shadow-lg)',
    shadowBlue: 'var(--shadow-blue)',
    
    // Spacing
    spacing: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem',
      '2xl': '4rem'
    },
    
    // Mood info
    mood: {
      current: currentMood,
      isBlue: currentMood === 'blue',
      isPurple: currentMood === 'purple'
    }
  }), [currentMood]);
};

/**
 * Hook to get dark mode detection and theme switching (mood-aware)
 * @returns {Object} Dark mode utilities
 */
export const useDarkMode = () => {
  const moodContext = useContext(ThemeMoodContext);
  const currentMood = moodContext?.currentMood || 'blue';
  const theme = getThemeByMood(currentMood);
  
  // Note: This is a basic implementation
  // You might want to integrate with a more sophisticated dark mode system
  const isDarkMode = typeof window !== 'undefined' && 
    window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  return useMemo(() => ({
    isDarkMode,
    theme: isDarkMode ? 'dark' : 'light',
    mood: currentMood,
    colors: {
      bg: isDarkMode ? theme.dark.primary : theme.background.primary,
      text: isDarkMode ? theme.text.inverse : theme.text.primary,
      card: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : theme.background.card
    }
  }), [isDarkMode, currentMood]);
};

/**
 * Hook to get component-specific themed styles
 * @param {string} component - Component name
 * @returns {Object} Component styles
 */
export const useComponentTheme = (component) => {
  const { utils } = useTheme();
  
  return useMemo(() => {
    switch (component) {
      case 'button':
        return {
          primary: utils.getButtonStyles('primary'),
          secondary: utils.getButtonStyles('secondary'),
          ghost: utils.getButtonStyles('ghost')
        };
        
      case 'card':
        return {
          default: utils.getCardStyles('default'),
          elevated: utils.getCardStyles('elevated'),
          dark: utils.getCardStyles('dark')
        };
        
      case 'section':
        return {
          light: utils.getSectionStyles('light'),
          dark: utils.getSectionStyles('dark'),
          hero: utils.getSectionStyles('hero')
        };
        
      default:
        return {};
    }
  }, [component, utils]);
};

export default useTheme; 
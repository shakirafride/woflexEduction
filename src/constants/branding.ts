// Branding Configuration
// Update these values to change logos and colors throughout the application

export const BRANDING = {
  // Logo Configuration
  logos: {
    // Main logo (used in light backgrounds)
    main: "/images/logo.svg",
    // White logo (used in dark backgrounds)
    white: "/images/white-logo.svg",
    // Logo dimensions
    width: 112,
    height: 60,
  },
  
  // Color Configuration (CSS Custom Properties)
  colors: {
    primary: "#3B82F6",      // Blue - main brand color
    secondary: "#F97316",    // Orange - accent color
    paragraph: "#6B7280",    // Gray - text color
    white: "#ffffff",        // White
    black: "#1F2937",        // Dark gray/black
  },
  
  // Company Information
  company: {
    name: "EduHub",
    tagline: "Empowering Minds",
  }
} as const;

// Helper function to get the appropriate logo based on theme
export const getLogo = (theme: 'light' | 'dark' = 'light') => {
  return theme === 'dark' ? BRANDING.logos.white : BRANDING.logos.main;
};
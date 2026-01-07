// Color Preview Utility
// Use this to quickly test different color schemes

export const COLOR_SCHEMES = {
  // Current scheme (Blue & Orange)
  current: {
    primary: "#3B82F6",
    secondary: "#F97316",
    paragraph: "#6B7280",
    black: "#1F2937",
  },
  
  // Alternative schemes you can try
  green: {
    primary: "#10B981",    // Emerald
    secondary: "#F59E0B",  // Amber
    paragraph: "#6B7280",  // Gray
    black: "#1F2937",      // Dark Gray
  },
  
  purple: {
    primary: "#8B5CF6",    // Violet
    secondary: "#EC4899",  // Pink
    paragraph: "#6B7280",  // Gray
    black: "#1F2937",      // Dark Gray
  },
  
  red: {
    primary: "#EF4444",    // Red
    secondary: "#3B82F6",  // Blue
    paragraph: "#6B7280",  // Gray
    black: "#1F2937",      // Dark Gray
  },
  
  teal: {
    primary: "#14B8A6",    // Teal
    secondary: "#F97316",  // Orange
    paragraph: "#6B7280",  // Gray
    black: "#1F2937",      // Dark Gray
  },
  
  // Original EduHub colors (current)
  original: {
    primary: "#A7FF37",    // Lime Green
    secondary: "#586CEC",  // Purple
    paragraph: "#555555",  // Gray
    black: "#000000",      // Black
  }
};

// Function to apply a color scheme
export const applyColorScheme = (scheme: keyof typeof COLOR_SCHEMES) => {
  const colors = COLOR_SCHEMES[scheme];
  const root = document.documentElement;
  
  root.style.setProperty('--primaryColor', colors.primary);
  root.style.setProperty('--secondaryColor', colors.secondary);
  root.style.setProperty('--paragraphColor', colors.paragraph);
  root.style.setProperty('--blackColor', colors.black);
  
  console.log(`Applied ${scheme} color scheme:`, colors);
};

// Usage example:
// applyColorScheme('green');  // Apply green scheme
// applyColorScheme('purple'); // Apply purple scheme
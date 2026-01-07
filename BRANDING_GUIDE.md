# EduHub Branding Guide

This guide explains how to customize the logo and colors throughout your EduHub application.

## 🎨 Current Branding

### Company Information
- **Name**: EduHub
- **Tagline**: Empowering Minds
- **Logo**: Modern hub-based design representing connected learning and collaboration

### Color Scheme
- **Primary Color**: `#A7FF37` (Lime Green) - Used for buttons, highlights, and CTAs
- **Secondary Color**: `#586CEC` (Purple) - Used for hover states and accents
- **Text Color**: `#555555` (Gray) - Used for paragraph text
- **Black**: `#000000` (Black) - Used for headings and main text
- **White**: `#ffffff` - Used for light text on dark backgrounds

### How to Change Colors

1. **Easy Method**: Update the `BRANDING` object in `src/constants/branding.ts`:
```typescript
export const BRANDING = {
  colors: {
    primary: "#YOUR_PRIMARY_COLOR",      // Main brand color
    secondary: "#YOUR_SECONDARY_COLOR",  // Accent color
    paragraph: "#YOUR_TEXT_COLOR",       // Text color
    white: "#ffffff",                    // White
    black: "#YOUR_DARK_COLOR",          // Dark color
  }
}
```

2. **Advanced Method**: Update CSS variables in `src/assets/css/style.css`:
```css
:root {
  --primaryColor: #YOUR_PRIMARY_COLOR;
  --secondaryColor: #YOUR_SECONDARY_COLOR;
  --paragraphColor: #YOUR_TEXT_COLOR;
  --blackColor: #YOUR_DARK_COLOR;
  --whiteColor: #ffffff;
}
```

## 🖼️ Logo Customization

### Current Logo Setup
- **Main Logo**: `/images/logo.svg` (112x60px) - Used on light backgrounds
- **White Logo**: `/images/white-logo.svg` (112x60px) - Used on dark backgrounds

### How to Change Logos

1. **Replace Logo Files**: 
   - Replace `public/images/logo.svg` with your main logo
   - Replace `public/images/white-logo.svg` with your white/light version
   - Keep the same dimensions (112x60px) or update the branding config

2. **Update Logo Paths** (if using different filenames):
```typescript
// In src/constants/branding.ts
export const BRANDING = {
  logos: {
    main: "/images/your-logo.svg",
    white: "/images/your-white-logo.svg",
    width: 112,  // Update if different size
    height: 60,  // Update if different size
  }
}
```

3. **Update Company Name**:
```typescript
// In src/constants/branding.ts
export const BRANDING = {
  company: {
    name: "Your Company Name",
    tagline: "Your Tagline",
  }
}
```

## 🎯 Theme Usage

### Light Theme (Default)
- Uses main logo (`logo.svg`)
- Standard color scheme
- Used in: Main pages, light sections

### Dark Theme
- Uses white logo (`white-logo.svg`)
- White text on dark backgrounds
- Used in: Sections with `white-navbar` class or `bg-1c1c1c`

### How to Apply Themes

```tsx
// For light theme (default)
<Header />

// For dark theme
<Header className="white-navbar" theme="dark" />
```

## 📁 Files Modified for Branding

### Core Branding Files
- `src/constants/branding.ts` - Main branding configuration
- `src/assets/css/style.css` - CSS color variables

### Components Updated
- `src/components/header/index.tsx` - Header with theme support
- `src/components/header/navigation.tsx` - Navigation with branding
- `src/components/header/mobileNavbar.tsx` - Mobile navigation
- `src/components/footerOne.tsx` - Footer with branding

### Logo Files
- `public/images/logo.svg` - Main logo
- `public/images/white-logo.svg` - White logo for dark themes
- `public/images/favicon.svg` - Favicon (update separately)

## 🚀 Quick Start

1. **Change Colors**: Update the `colors` object in `src/constants/branding.ts`
2. **Change Logo**: Replace files in `public/images/` or update paths in branding config
3. **Change Company Name**: Update `company.name` in branding config
4. **Test**: Check both light and dark theme sections

## 💡 Tips

- Keep logo dimensions consistent (112x60px) for best results
- Test your color scheme for accessibility (contrast ratios)
- Ensure white logo version works well on dark backgrounds
- Update favicon separately in `public/images/favicon.svg`
- Colors automatically apply to buttons, links, and highlights throughout the app
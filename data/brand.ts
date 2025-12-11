/**
 * Brand Configuration for "Guide to New Zealand"
 * 
 * This file serves as a single source of truth for brand colours, typography,
 * and tone of voice. Inspired by the visual language of Tourism NZ but with
 * original copy and no official branding claims.
 */

export type BrandColors = {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  accentAqua: string;
  accentSky: string;
  accentSun: string;
  neutralBlack: string;
  neutralDark: string;
  neutralMid: string;
  neutralLight: string;
  background: string;
  surface: string;
  surfaceElevated: string;
};

export type BrandTypography = {
  heading: string;
  body: string;
};

export type BrandConfig = {
  name: string;
  palette: BrandColors;
  typography: BrandTypography;
  toneOfVoice: string[];
  imageryGuidelines: string[];
  usage: string[];
};

/**
 * Brand Configuration
 * 
 * Colour palette inspired by New Zealand's natural beauty:
 * - Primary teal: Deep ocean and fjord waters
 * - Aqua accents: Turquoise lakes and coastal waters
 * - Sky blue: Clear NZ skies and alpine lakes
 * - Sun yellow: Golden hour light on landscapes
 * - Dark backgrounds: Modern, premium feel with hero imagery
 */
export const brand: BrandConfig = {
  name: "Guide to New Zealand",

  palette: {
    // Primary colours - deep teal inspired by Tourism NZ
    primary: "#005B5A",
    primaryLight: "#017F7B",
    primaryDark: "#003F40",

    // Accent colours - natural NZ tones
    accentAqua: "#00A88F", // Turquoise lakes and coastal waters
    accentSky: "#4BC7FF", // Clear skies and alpine lakes
    accentSun: "#FFC845", // Golden hour and warmth

    // Neutral colours - premium dark theme
    neutralBlack: "#050816",
    neutralDark: "#111827",
    neutralMid: "#4B5563",
    neutralLight: "#E5E7EB",

    // Background and surfaces - very dark for imagery showcase
    background: "#020617", // Deep background for hero imagery
    surface: "#020617", // Main page background
    surfaceElevated: "#1F2937", // Slightly lighter for elevated cards/sections
  },

  typography: {
    heading: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  toneOfVoice: [
    "Friendly and welcoming",
    "Informative and smart",
    "Travel-smart and practical",
    "Respectful of Māori culture and nature",
    "Inspiring but grounded",
  ],

  imageryGuidelines: [
    "Big, bold landscape photography",
    "Lakes, fiords, mountains, and coastal scenes",
    "Māori culture and people represented respectfully",
    "Golden hour and dramatic lighting",
    "Mix of adventure and tranquility",
  ],

  usage: [
    "Primary colours for buttons, key CTAs, and main navigation highlights",
    "Accent aqua and sky for highlight text, chips, and secondary buttons",
    "Accent sun as a pop colour for badges and rare labels only",
    "Background and surface colours for dark, premium look",
    "Neutral light for borders, dividers, and subtle UI elements",
  ],
};

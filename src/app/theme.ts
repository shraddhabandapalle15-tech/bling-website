/* ─── PALETTE — locked to the reference brand board, do not deviate ────────── */
export const LAV    = "#B8B2D6"; // Dusty Lavender / Periwinkle — major section backgrounds
export const PINK   = "#E9B7D1"; // Soft Baby Pink — secondary backgrounds, decorative elements
export const BLUSH  = "#F2C7C5"; // Blush Pink — secondary backgrounds, decorative elements
export const PEACH  = "#F2AFA0"; // Warm Peach / Coral — feature sections, highlights
export const CORAL  = PEACH;     // alias — reference treats peach/coral as one family
export const YELLOW = "#E8E29A"; // Soft Butter Yellow — accents, badges, CTAs
export const BG     = "#F7E8E8"; // Warm Cream / Off White — whitespace, background
export const INK    = "#171717"; // Deep Charcoal / Ink — typography
export const HEADING_INK = "#2E2E2E"; // Softened Ink — headings, slightly lighter than INK

/* ─── SHOP PALETTE EXTENSION — additional shade swatches, same soft-pastel family ── */
export const PINK_POP   = "#F0629B"; // Pink Pop
export const GIRL_PINK  = "#F6C9DE"; // Girl Pink Spark
export const DARK_RED   = "#B23A48"; // Dark Red Dazzle
export const ZING_YELLOW= "#F4D35E"; // Yellow Zing
export const SKY_BLUE   = "#8FB8DE"; // Blue Buzz
export const FRUIT_GREEN= "#A8D8A0"; // Fruit Green Twist
export const TEAL       = "#7EC8C0"; // Teal Splash
export const DARK_GREEN = "#5C8A6E"; // Dark Green Gleam
export const DIAMOND_WHITE = "#F4F1EC"; // Diamond White Shine
export const BABY_BLUE  = "#BEE0F2"; // Baby Blue Dream
export const SHADE_BLACK= "#2B2B2B"; // Black Spark

/* ─── TYPE ───────────────────────────────────────────────────────────────── */
export const SCRIPT  = "'Pacifico',cursive";        // bold expressive hand-drawn script — logo, brand statements
export const SCRIPT2 = "'Satisfy',cursive";          // lighter handwritten script — small decorative phrases
export const DISPLAY = "'Archivo Black',sans-serif"; // bold condensed uppercase — headlines, badges, buttons, labels
export const SANS    = "'DM Sans',sans-serif";       // clean body sans

/* ─── TYPE SCALE — consolidated font sizes; use these instead of one-off px values ── */
export const TEXT_2XS = 11; // tiny badges, counters, avatar initials
export const TEXT_XS  = 12; // micro labels, captions, small buttons
export const TEXT_SM  = 13; // secondary text, nav links, meta info
export const TEXT_BASE= 14; // default UI text, buttons, form inputs
export const TEXT_MD  = 16; // body copy, comfortable reading text
export const TEXT_LG  = 18; // prominent numbers, card titles
export const TEXT_XL  = 20; // sub-headings, callouts, ratings
export const TEXT_2XL = 22; // section eyebrows, small headings
export const TEXT_3XL = 28; // medium headings
export const TEXT_4XL = 32; // large stat headings
export const TEXT_5XL = 48; // hero icon/numeral accents
export const TEXT_6XL = 84; // giant decorative numerals, quote marks

/* Responsive display headings — clamp(min, preferred, max) */
export const DISPLAY_HERO = "clamp(44px,6.2vw,84px)"; // home hero H1 only
export const DISPLAY_H1   = "clamp(34px,5vw,64px)";   // standard page headings
export const DISPLAY_H2   = "clamp(30px,4.5vw,48px)"; // secondary page headings
export const DISPLAY_H3   = "clamp(26px,3.6vw,44px)"; // small sub-headings

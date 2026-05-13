---
name: Daniel Xu Portfolio
description: A skeuomorphic, artful personal web system that proves creative programming through the interface itself.
colors:
  dark-void: "#050505"
  dark-surface: "#0a0a0a"
  dark-elevated: "#111111"
  dark-edge: "#1a1a1a"
  dark-edge-hover: "#252525"
  warm-ink: "#e8e6e3"
  ash-secondary: "#8a8886"
  graphite-muted: "#4a4a48"
  signal-orange: "#ff3d00"
  signal-orange-hover: "#ff5722"
  light-paper: "#f8f5f0"
  light-surface: "#f0ece6"
  light-elevated: "#e8e4de"
  light-edge: "#d5d0c8"
  light-edge-hover: "#c5bfb6"
  light-ink: "#1a1815"
  light-secondary: "#5a574f"
  light-muted: "#9a9690"
  burnt-orange: "#c44b00"
  burnt-orange-hover: "#d45500"
  photo-amber: "#c8956c"
  photo-red: "#8b3a3a"
  success: "#22c55e"
  warning: "#eab308"
  danger: "#ef4444"
  info: "#3b82f6"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(4.5rem, 16vw, 14rem)"
    fontWeight: 400
    lineHeight: 0.85
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.35rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Satoshi, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Satoshi, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.12em"
  mono:
    fontFamily: "JetBrains Mono, Fira Code, SF Mono, monospace"
    fontSize: "0.85em"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  pin: "2px"
  key: "3px"
  note: "4px"
  panel: "8px"
  round: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section-y: "5rem"
components:
  button-resume:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.light-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pin}"
    padding: "0.6rem 1.3rem"
  chip-tech:
    backgroundColor: "{colors.signal-orange}"
    textColor: "{colors.signal-orange}"
    typography: "{typography.label}"
    rounded: "{rounded.pin}"
    padding: "0.2rem 0.65rem"
  nav-link:
    textColor: "{colors.graphite-muted}"
    typography: "{typography.label}"
    padding: "0"
  prose-code:
    backgroundColor: "{colors.dark-elevated}"
    textColor: "{colors.signal-orange-hover}"
    typography: "{typography.mono}"
    rounded: "{rounded.key}"
    padding: "0.2em 0.5em"
  photo-frame:
    backgroundColor: "{colors.light-paper}"
    textColor: "{colors.light-ink}"
    rounded: "{rounded.pin}"
    padding: "14px 14px 56px"
---

# Design System: Daniel Xu Portfolio

## 1. Overview

**Creative North Star: "The Developed Contact Sheet"**

This system should feel like a personal archive assembled by someone who writes code, takes photographs, and cares about the surface of the work. It uses darkroom atmosphere, paper edges, mechanical controls, inset code screens, stamped metadata, and deliberate friction to make the interface feel handled rather than generated.

The site is a brand surface, not a product shell. It should carry tension: oversized italic display type against tiny uppercase labels, quiet black surfaces against rare hot orange, flat editorial lists against physical skeuomorphic details. The work must remain easy to scan, but it should never collapse into a generic developer portfolio, startup SaaS landing page, gamer or cyberpunk aesthetic, template-like project card grid, or overly sanitized personal brand.

**Key Characteristics:**

- Skeuomorphic surfaces: dials, typewriter keys, sticky notes, terminal screens, taped photo frames.
- Editorial hierarchy: huge italic display type, compact metadata, ruled lists, and deliberate asymmetry.
- Restrained signal color: orange is rare, hot, and purposeful.
- Material contrast: dark voids, warm paper, ash text, amber darkroom accents.
- Discoverable eccentricity: navigation and contact stay obvious while details reward exploration.

## 2. Colors

The palette is darkroom black, warm paper, ash text, and a single urgent orange signal, with amber reserved for photography-specific material.

### Primary

- **Signal Orange**: The rare active signal. Use for the second hero name line, hover states, active labels, links, résumé CTA, project indices, chips, and focus outlines.
- **Burnt Orange**: The light-theme version of the signal. Use when the paper theme would make the hotter orange too loud.

### Secondary

- **Darkroom Amber**: Use inside photography surfaces only: photo metadata, darkroom glow, and taped-frame warmth.
- **Darkroom Red**: A supporting photographic accent, used sparingly where the photo page needs a darker chemical warmth.

### Tertiary

- **Status Green, Warning Yellow, Danger Red, Info Blue**: Functional prose and code accents only. They belong to callouts, diff lines, and code-block chrome, not the brand identity.

### Neutral

- **Dark Void**: The default dark page background.
- **Dark Surface**: Inset surfaces such as code blocks and prose panels.
- **Dark Elevated**: Raised or tactile dark objects such as inline code keys and blockquotes.
- **Dark Edge / Dark Edge Hover**: Rules, dividers, borders, pressed edges, and tactile bottom strokes.
- **Warm Ink**: Primary text on dark backgrounds.
- **Ash Secondary**: Body copy and quieter explanatory text.
- **Graphite Muted**: Metadata, inactive navigation, footer text, and low-priority labels.
- **Light Paper**: The light-theme page background and the basis for photographic paper.
- **Light Ink**: Primary text in light theme.

### Named Rules

**The Orange Is a Signal Rule.** Orange marks action, identity, and state. Do not let it become a general decoration color.

**The Warm Neutral Rule.** Black and white are never pure. Keep neutrals warm, dusty, and photographic.

## 3. Typography

**Display Font:** Instrument Serif (with Georgia fallback)  
**Body Font:** Satoshi (with system UI fallback)  
**Label/Mono Font:** JetBrains Mono / Fira Code / SF Mono for code and photo metadata; DM Mono appears on the photography page.

**Character:** The pairing is literary but technical: an italic serif carries identity and section rhythm, while a compact sans handles wayfinding. Mono appears only when the interface wants to feel archival, mechanical, coded, or camera-like.

### Hierarchy

- **Display** (400, clamp(4.5rem, 16vw, 14rem), 0.85): Hero-scale identity only. It can dominate the viewport and carry the brand.
- **Headline** (400 italic, 2.5rem, 1.15): Section labels and editorial page headings.
- **Title** (400 italic, 1.35rem, 1.2): Project names, timeline organizations, card titles, and compact editorial labels.
- **Body** (400, clamp(1rem, 0.95rem + 0.25vw, 1.0625rem), 1.85): Long-form prose, capped around 720px so reading stays deliberate.
- **Label** (500-700, 0.58rem-0.75rem, 0.08em-0.14em, uppercase): Navigation, metadata, project links, chip text, and interface markings.
- **Mono** (400, 0.58rem-0.875rem, 1.7): Code, photo metadata, terminal screens, and machine-like annotations.

### Named Rules

**The Serif Owns Identity Rule.** Use the serif for identity, section rhythm, and expressive labels. Do not replace it with generic sans hero typography.

**The Metadata Must Whisper Rule.** Labels are small, uppercase, and tracked. They should feel like stamps, not buttons trying to be loud.

## 4. Elevation

Depth is hybrid: most page structure is flat and ruled, while selected objects become tactile through inset shadows, bottom strokes, and paper-like cast shadows. Shadows should imply material behavior: a pressed key, a taped photograph, a raised dial, an inset terminal, or a sticky note.

### Shadow Vocabulary

- **Signal Bar Glow** (`0 1px 4px rgba(255, 61, 0, 0.3), 0 0 12px rgba(255, 61, 0, 0.15)`): The fixed top accent bar only.
- **Button Press Stack** (`0 2px 0 #8b2200, 0 4px 8px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)`): Primary résumé CTA and any future physical button.
- **Paper Slip** (`2px 3px 8px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.04)`): Blockquotes, notes, and small physical content surfaces.
- **Inset Terminal** (`inset 0 2px 6px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(0, 0, 0, 0.15), 0 1px 0 rgba(255, 255, 255, 0.04)`): Code blocks and sunken technical panels.
- **Photo Paper Lift** (`0 1px 1px rgba(0, 0, 0, 0.15), 0 3px 8px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.7)`): Polaroid-like photo frames.
- **Dial Knurl** (`0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.06), inset 0 -1px 0 rgba(0, 0, 0, 0.3)`): Rotary controls and small mechanical surfaces.

### Named Rules

**The Material Has a Job Rule.** A shadow must say what the object is doing: pressed, inset, taped, lifted, or glowing. Decorative blur is forbidden.

## 5. Components

### Buttons

- **Shape:** Slightly hard-edged and physical (2px corner behavior, no pill CTA).
- **Primary:** Hot orange gradient surface, warm paper text, uppercase label, compact padding (`0.6rem 1.3rem`), and a dark lower edge that makes it feel pressable.
- **Hover / Focus:** Hover lifts by 1px with stronger orange glow. Active state drops by 2px and collapses the bottom shadow. Focus uses a visible orange outline.
- **Secondary / Ghost:** Text-only links in muted graphite that turn orange on hover. Keep them light and editorial.

### Chips

- **Style:** Small uppercase stamps with orange text, transparent orange tint, thin mixed-color border, and tiny side dots.
- **State:** Static metadata by default. If reused as filters, selected state should intensify the tint rather than introducing a new color.

### Cards / Containers

- **Corner Style:** Tight corners (`2px-8px`) depending on object type. Photo frames are nearly square. Code blocks can use 8px because they behave like inset screens.
- **Background:** Prefer ruled rows and physical surfaces over generic cards. Use dark elevated surfaces for notes, code, and blockquotes; use warm paper for photo frames.
- **Shadow Strategy:** Reference the material vocabulary. Do not apply one generic card shadow across the site.
- **Border:** One-pixel warm dark edges for structure. Pressed code keys can use a 2px bottom border.
- **Internal Padding:** Compact but intentional: `0.75rem-1.5rem` for rows and text objects, `14px 14px 56px` for photo paper.

### Inputs / Fields

- **Style:** No broad form system exists yet. Future fields should look like inset paper or terminal slots: dark surface, one-pixel edge, 2px-4px radius, compact label above.
- **Focus:** Orange outline or edge shift. Never glow without a clear interaction state.
- **Error / Disabled:** Use functional red only for errors. Disabled states should reduce contrast and preserve layout.

### Navigation

- **Style:** Tiny uppercase links in muted graphite, paired with the `DX` mark and orange dot. Active and hover states turn orange or warm ink, not underlined by default.
- **Mobile Treatment:** Wrap links without hiding primary destinations. Contact, résumé, photos, and blog must remain discoverable.

### Theme Dial

The theme switcher is a signature control: a rotary darkroom exposure dial with tick marks, a knurled conic-gradient knob, tiny DRK/LGT labels, and rotational feedback. Treat future controls this way: small, physical, legible, and specific to the site's world.

### Project Rows

Project entries are editorial rows, not cards. The index, title, rule, and links form a compact line; details reveal on hover on desktop and remain visible on mobile. Preserve this row-based rhythm for portfolio lists.

### Photo Frames

Photo cards are paper objects: slight rotation, taped top strip, warm paper gradient, cast shadow, handwritten-feeling serif title, and mono metadata. The hover state straightens and lifts the object.

## 6. Do's and Don'ts

### Do:

- **Do** make interface choices prove creative programming ability through behavior, material, and detail.
- **Do** keep orange rare and purposeful: identity, active state, action, focus, or meaningful emphasis.
- **Do** use warm blacks, paper creams, ash text, amber photo tones, and physical shadows.
- **Do** preserve discoverability for résumé, email, social profiles, projects, writing, and photos.
- **Do** let sections have distinct moods when the underlying object changes: portfolio rows, prose pages, and photo frames can each behave differently.
- **Do** support keyboard navigation, reduced motion, readable contrast, responsive layouts, and non-color-only meaning.

### Don't:

- **Don't** make this feel like a generic developer portfolio.
- **Don't** make this feel like a startup SaaS landing page.
- **Don't** make this feel gamer or cyberpunk.
- **Don't** use template-like project card grids or identical icon-card layouts.
- **Don't** sanitize away the quirky, skeuomorphic, archival, or artistic character.
- **Don't** use decorative glassmorphism, gradient text, generic purple/blue tech gradients, or border-side accent stripes.
- **Don't** add physical effects unless they correspond to a recognizable material behavior.

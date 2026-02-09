# Design System: Awwward Portfolio
**Project ID:** swarnabha-dev/Awwwards-portfolio

## 1. Visual Theme & Atmosphere
The design exudes a **"Premium Kinetic Minimalist"** atmosphere. It balances a high-end, editorial feel with fluid, physics-based interactivity.
- **Vibe:** Sophisticated, smooth, professional yet avant-garde.
- **Motion:** Transitions are not just fades; they are fluid morphs using specific Bezier curves (`cubic-bezier(0.19, 1, 0.22, 1)`) that mimic spring physics.
- **Density:** Airy and spacious on desktop, focusing on large typography and imagery. Tighter but navigable on mobile.

## 2. Color Palette & Roles

### Primary & Accents
*   **Electric Turquoise (`#20E0D0`)**: The primary accent color used for hover states, selection highlights, and key interactive moments. It cuts through the neutral palette with vibrancy.

### Backgrounds & Surfaces
*   **Bone White (`#E8E6E3`)**: The primary background color for the Hero section. A warm, organic alternative to stark white that adds a premium "paper-like" quality.
*   **Rich Charcoal (`#1C1C1E`)**: The primary dark background used for the Sidebar, Footballer (Footer), and floating action buttons. It provides deep contrast without the harshness of pure black.
*   **Off-White (`#FAFAFA`)**: Used for modal backgrounds (LiquidPane) to separate elevated layers from the base bone color.
*   **Deep Void (`#141414`)**: Used specifically for the Preloader and ultra-dark immersive moments.

### Text & Elements
*   **Near Black (`#1D1D1F`)**: Primary body text color. Softened black for readability.
*   **Neutral Grey (`#737373` / tailwind `neutral-500`)**: Used for subtitles, labels ("Next Steps", "Navigation"), and secondary text.
*   **Pure White (`#FFFFFF`)**: Text color on dark backgrounds and button text.

## 3. Typography Rules
*   **Font Family:** `Inter` (Sans-serif) is used exclusively, providing a clean, modern geometric base.
*   **Headings:**
    *   **Scale:** Massive scale (up to `text-8xl` or `13vw` for marquee).
    *   **Tracking:** Tightly tracked (`tracking-tighter`) to create a cohesive, block-like appearance for large display text.
    *   **Weight:** Predominantly `font-bold` for impact.
*   **Body:**
    *   **Readability:** Standard tracking for long-form text (in modals).
    *   **Labels:** Uppercase, wide tracking (`tracking-widest`), often small (`text-xs` or `text-[10px]`) for "architectural" labels like navigation items or section indicators.

## 4. Component Stylings

### Buttons & Interactivity
*   **Floating Action Buttons (FABs):** Pill-shaped or fully circular (`rounded-full`). deeply shadowed (`shadow-2xl`) to lift them off the canvas.
*   **Hover States:**
    *   **Fill Transition:** Buttons often employ a "fill up" animation where a solid color layer slides up from the bottom (`translate-y-full` to `translate-y-0`).
    *   **Scale:** Subtle scaling (`hover:scale-110`) on icons and smaller buttons.
*   **Links:** Text links often use a "slide-in" underline or color shift to Electric Turquoise (`#20E0D0`).

### Cards & Containers
*   **Modals (LiquidPane):** Top corners are heavily rounded (`rounded-t-[24px]` or more) to mimic a physical card sliding up.
*   **Image Cards:** Generously rounded corners (`rounded-2xl` or `rounded-3xl`) with `overflow-hidden`.
*   **Shadows:** Deep, diffused shadows (`shadow-2xl`) are used on floating elements (Navbar, Modals) to establish a distinct Z-axis hierarchy.

### Inputs & Forms
*   **Mockups:** Device frames (Macbook) use realistic gradients (`bg-linear-to-b`) to simulate metallic surfaces.

## 5. Layout Principles
*   **Fluidity:** Layouts are designed to adapt fluidly. The Sidebar, for example, morphs its width and border-radius based on state.
*   **Z-Axis Layering:** extensive use of z-index (`z-50` to `z-200`) to manage the Curtain, Modals, Overlay Menus, and Floating Buttons. The "Curtain" transition is a key layout device that physically covers the screen between views.
*   **Whitespace:** Generous padding (`px-6 md:px-20`) ensures content breathes. The design relies on negative space to frame the large typography.

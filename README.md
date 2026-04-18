# American Dream — Interactive Sales Deck

## Overview

This project is a **fully interactive, browser-based sales deck** for **American Dream** (Meadowlands, NJ), framed as a premium commercial destination and mixed-use platform.

It replaces traditional fragmented sales materials (PDFs, videos, spreadsheets) with a **single, immersive web experience** that can be:

- Screen-shared in live sales calls
- Shared as a standalone interactive link

The goal is to communicate the **scale, energy, and commercial value** of the property within seconds.

---

## Objective

This experience is built for:

- Retail brands (leasing opportunities)
- Sponsors (brand activations)
- Event organizers (venue bookings)

The platform aims to:

- Tell the property’s story without explanation
- Create immediate emotional engagement
- Drive business actions (leasing, partnerships, bookings)

---

## Experience Flow

```text
Opening → Why this property → Retail → Luxury → Dining & lifestyle → Attractions & entertainment → Events & platform → CTA
```

Non-linear navigation: the sticky rail uses in-page anchors so prospects can jump in any order (Digideck-style journey control).

### Sections

- **Opening**  
  Cinematic entry; hero **video module is a placeholder** until final media is wired (autoplay / scroll-sync planned).

- **Why this property**  
  Location, access, scale, demographics, regional reach, plus headline stats for a data-backed first impression.

- **Retail**  
  Anchors and a deliberate **growth trajectory** narrative (flagship, pop-up, leasing paths).

- **Luxury**  
  Dedicated premium story; scroll-based theme shift to gold accents.

- **Dining & lifestyle**  
  Food and day-night programming as a traffic and sponsorship lever—not filler.

- **Attractions & entertainment**  
  Differentiators that separate a mega-mall from a typical retail center.

- **Events & platform**  
  Concerts, activations, and **venue-level** language (performing arts, exposition / convention-style footprints). Includes an **expandable Events sub-module** (capabilities, highlights, booking CTA) to demonstrate Phase-2-style depth without a full rewrite.

- **CTA**  
  Mailto actions for leasing, sponsorships, and events (swap addresses before sending to partners).

---

## Key Feature

### Scroll-Based Theme Transition

A dynamic theme system transitions the interface from a standard dark theme to a **luxury gold-accented theme** when entering the luxury section.

**Behavior:**

- Triggered based on scroll position
- Smooth transitions across UI elements
- Applies to borders, headings, and accents

**Purpose:**

- Reinforces spatial hierarchy
- Enhances premium perception
- Creates a distinct “luxury zone” experience

---

## Tech Stack

- Next.js (App Router)
- React 18
- Tailwind CSS
- Framer Motion

---

## Architecture

```text
/app
/components
  SalesDeck.tsx          # linear presentation shell + anchor nav
  EventsModulePanel.tsx  # expandable “Phase 2” style sub-module
/data
  deckContent.ts         # copy + structure (easy to fork into route-level modules later)
/public
```

- Component-based structure
- Centralized data configuration
- Reusable UI modules (`EventsModulePanel` is the first deeper submodule)
- Scroll-driven state management (luxury theme band)

---

## Design Principles

- Video-first storytelling
- Minimal UI, high visual impact
- Non-linear, user-controlled navigation
- Motion used to guide attention
- Strong emphasis on spacing and typography

---

## AI Usage

AI tools were used to:

- Accelerate layout and interaction patterns (structure, pacing, component boundaries)
- Draft narrative scaffolding and section copy for rapid iteration
- **Generative imagery / video** are intentionally stubbed in the UI until final assets are dropped in (hero module placeholder remains obvious in the build)

---

## Development Approach

The implementation focuses on:

- Rebuilding UI patterns from first principles
- Avoiding direct code reuse from external sites
- Maintaining clean, modular, and scalable code

---

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run start
```

---

## Deployment (submission)

Deploy to **Vercel**, **Netlify**, or **GitHub Pages** (static export would require a small Next config change). After deploy, share the **live URL** plus this repository as required by the assignment brief.

---

## Future Enhancements

- Additional sub-modules (sponsorship tiers, leasing paths by category) as routes or panels
- Video-first implementation: hero + scroll-triggered reels, lazy `next/video` or optimized embeds
- Performance pass once real media lands: `next/image`, prefetching, Lighthouse tuning toward 90+
- Deeper interactivity (filters, saved tours for logged-in reps)

---

## Summary

This project demonstrates the ability to build a **high-end interactive frontend experience** that blends:

- Product thinking
- Visual design
- Technical execution
- AI-assisted development

The final output is a **cinematic sales tool** designed to convert interest into real business opportunities.

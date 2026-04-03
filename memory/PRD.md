# Jared Fixes - Landing Page PRD

## Original Problem Statement
Rebuild jaredfixes.com as a polished React-based service landing page, replacing current static HTML with a modern, reusable component-based build.

## User Persona
- **Primary**: Home users in Wexford, Ireland needing practical tech help (devices, Wi-Fi, printers, setup)
- **Secondary**: Small businesses needing basic IT support and AI guidance

## Core Requirements (Static)
- Dark premium design with warm orange accents (#ff6a00, #ff8840)
- Privacy-first: NO exposed email/phone - use contact form modal
- Sections: Hero, Services, How It Works, Pricing, Boundaries, AI Help, Audience, FAQ, CTA, Footer
- Contact form with honeypot spam protection (Netlify Forms ready)
- Responsive design with mobile menu
- Subtle framer-motion animations
- Lucide React icons
- Manrope font (headings) + Work Sans (body)

## What's Been Implemented ✅
**Date: April 3, 2026**

### Completed Features
- [x] Full React component architecture
- [x] Sticky navigation with scroll behavior
- [x] Hero section with trust badges
- [x] Services section (Device help, Setup & Security, AI help)
- [x] How It Works section (3-step process)
- [x] Pricing section (€30 call-out, €20/30min extra, pensioner discount, no fix no fee)
- [x] Boundaries section (what's NOT covered)
- [x] AI Help section (practical, beginner-friendly positioning)
- [x] Audience section (Home Users + Small Businesses)
- [x] FAQ accordion with expand/collapse
- [x] Final CTA section
- [x] Contact modal with form (Name, Email, Message)
- [x] Honeypot spam protection field
- [x] Back to Top button
- [x] Footer with JaredTalbot hub link
- [x] Dark theme with orange accents
- [x] Responsive mobile design
- [x] Framer Motion animations
- [x] All data-testid attributes for testing
- [x] Scroll margin offset for sticky header

### Testing Results
- Frontend testing: 95% pass rate
- All core functionality verified working
- Contact protection confirmed (no exposed email/phone)
- FAQ accordion working
- Form submission working
- Mobile menu working

## Tech Stack
- React 18.2.0
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Frontend-only (no backend)
- Netlify Forms ready

## Prioritized Backlog

### P0 (Done)
- [x] Core page structure
- [x] Contact form with privacy protection
- [x] All required sections

### P1 (Future)
- [ ] Netlify deployment with form backend integration
- [ ] Add testimonials/reviews section
- [ ] SEO optimization (meta tags, structured data)

### P2 (Future)
- [ ] Blog/resources section
- [ ] Booking integration (Calendly etc)
- [ ] Live chat widget

## Files Structure
```
/app/frontend/
├── src/
│   ├── App.js          # Main component with all sections
│   ├── index.js        # Entry point
│   └── index.css       # Global styles + Tailwind
├── public/
│   └── index.html      # HTML with Google Fonts
├── package.json
├── tailwind.config.js
└── .env
```

## External Links
- JaredTalbot Hub: https://jaredtalbot.com
- Design Guidelines: /app/design_guidelines.json

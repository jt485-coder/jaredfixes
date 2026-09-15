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

### Initial Build
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
- [x] Contact modal with form
- [x] Honeypot spam protection field
- [x] Back to Top button
- [x] Footer with JaredTalbot hub link
- [x] Dark theme with orange accents
- [x] Responsive mobile design
- [x] Framer Motion animations
- [x] All data-testid attributes for testing
- [x] Scroll margin offset for sticky header

### Refinements (v2) - April 3, 2026
- [x] AI section updated with new copy (modern AI tools, tailored guidance)
- [x] "Local tech help in Wexford" badge prominently displayed in hero
- [x] Human-friendly CTAs: "Get in Touch", "Ask a Quick Question", "See How I Help"
- [x] Contact form simplified: Name, Email/Phone, short Message
- [x] Blue/cyan gradients removed - orange is now dominant accent throughout
- [x] Final CTA section redesigned with warm orange glow (no blue)
- [x] Small Business card now uses orange styling (consistent with Home Users)
- [x] Contact form heading: "Ask a quick question"

### Netlify Forms Integration (v3) - April 3, 2026
- [x] Form attributes: name="contact", method="POST", data-netlify="true", netlify-honeypot="bot-field"
- [x] Hidden inputs: form-name and bot-field honeypot
- [x] Proper field names: name, email, phone (optional), message
- [x] Hidden static fallback form in index.html for Netlify build-time detection
- [x] URL-encoded form submission (fetch with Content-Type: application/x-www-form-urlencoded)
- [x] Error state handling with user-friendly message
- [x] Success state maintained

### Testing Results
- Initial: 95% pass rate
- Refinements: 100% pass rate
- Netlify Forms: 100% pass rate (error in test env expected - works when deployed)

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
- [x] UI/UX refinements

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

## Update — June 2026: Content & service-structure refresh (no redesign)
Repo confirmed: existing JaredFixes project, `/app/frontend`, branch main. Design, colours, typography, animations preserved.

Implemented:
- Hero: headline "Websites made simple. / Technology made easier." + new supporting paragraph (County Wexford positioning). Buttons unchanged (Get in Touch → enquiry modal, See How I Help → #services). Removed "No fix, no fee" badge → replaced with "Clear pricing"; first badge now "Websites & digital support". Local badge + coverage note retained.
- Services (`serviceGroups` in App.js): restructured into two grouped on-page sections — (1) Websites & Digital Support: new sites/improvements, updates/forms/ongoing care, domain & email setup, organising digital world (Google Drive); (2) Home Tech Help: new device setup, accounts/email/staying safe (password manager, 2FA, scam awareness), backups & storage, Photos/Videos & Memories (marked as a supporting service). Creative extras reworded so slideshows are a small extra, not specialist work.
- Pricing: €40 local home visit (incl. local travel + first hour), €25/hr additional time, €25/hr ongoing digital support, website projects quoted individually with optional ongoing care, senior discount (75+) kept. Removed €30 call-out and "no fix, no pay". Added travel/coverage clarification.
- Enquiry modal: added required "What do you need help with?" select (Websites & Digital Support / Home Tech Help / Not Sure) and optional location field; wired into Netlify form fields (also added to hidden static form in public/index.html). No password/secret fields; copy explicitly says never send passwords.
- FAQ: removed 20km radius + "only pay the call-out"; added home-visit cost and website FAQ; password answer reworded.
- How it works step 3: removed "remote session" (remote access not advertised).
- SEO: title/meta description updated for websites + Wexford.

Verified: desktop + mobile screenshots (hero, services groups, pricing, enquiry modal), grep sweep confirms no leftover €30/call-out/no-fix/remote/20km wording. Form submission endpoint is Netlify (POST '/') — unchanged, only works on the deployed Netlify site.

Backlog / not done: LocalBusiness schema markup, website portfolio/demo section (no invented claims allowed).

## Refinement pass — June 2026 (design preserved)
- Hero: single badge "Based in County Wexford"; second badge + "Quick note" box removed; intro shortened; "Clear pricing" → "We agree the work and cost before I start."
- Services intro replaced with "Practical help with your website, your business tools and the technology you use at home."; "Keeping logins and details organised" → "Helping you manage your own account details safely"; group order unchanged.
- Pricing reordered to match services (Website projects → Ongoing digital support €25/hr → Local home visits €40 highlighted, with "Additional time — €25 per hour, agreed before continuing" nested inside the home-visit item and the travel/coverage note beneath it). Senior discount removed (terms undefined).
- Boundaries panel + red-cross list replaced by compact "A straightforward approach" block (data-testid="approach-section") under pricing; account-recovery explanation moved into the passwords FAQ.
- Enquiry modal: new intro copy, full service names in selector, location relabelled "Town or area (optional, for home visits)", modal now max-h-[85vh] with internal scroll (verified at 390x600). Failure path keeps the typed message and shows the error banner.
- Deployed Netlify form delivery remains UNVERIFIED until a test enquiry is confirmed received.

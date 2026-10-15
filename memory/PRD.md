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

## Hero visual pass — June 2026 (preview only, awaiting review)
- New `/app/frontend/src/HeroVisual.jsx`: decorative SVG illustration ("digital clutter becomes organised") animated with framer-motion. 8 pieces (abstract browser miniature, 3 photo tiles, 2 folders, 2 envelopes) fly in from scattered offsets over ~3.5s, then 7 orange connector paths draw in (pathLength) and the composition settles still. Plays once via useInView({once:true}); discreet keyboard-accessible "Replay animation" button (data-testid="hero-visual-replay") remounts the svg via key. useReducedMotion → full static composition, no replay button. svg aria-hidden + focusable=false; wrapper uses aspect-ratio 46/37 to reserve space (no CLS). No new dependencies.
- Hero: right-hand trust cards replaced by the visual; their copy preserved in a compact static strip under the hero (data-testid="reassurance-strip", trust-badge-N retained). Headline, intro and both CTAs unchanged and immediately visible.
- Verified: desktop mid-animation frames + settled state, keyboard replay + focus ring, mobile 390px (visual below CTAs, 0px horizontal overflow), reduced-motion static state, both CTA destinations (#services and enquiry modal).
- Review artifact: /app/frontend/public/hero-animation.gif (18-frame recording of the sequence) — DELETE before publishing.

## Content-consistency pass — June 2026 (preview, unpublished)
- Who I help: Small Businesses card now first; "My main focus" removed; "scam protection" → "scam awareness".
- Services wording: backups item → "Help setting up and checking backups of your important files"; photos item → "Finding and gathering photos across your devices and accounts"; removed both disclaimer notes (card `note` field and its render, plus the creative-extras second line). Personal-video description retained.
- AI: standalone AIHelp section deleted (component + usage + Cpu import). AI now a single supporting line under the Websites & Digital Support group (`extra` field, data-testid="service-group-extra-websites"): "Practical AI help: patient guidance with tools such as ChatGPT and Claude, including getting started and finding practical uses for everyday tasks." "Custom AI support available on request" removed.
- How it works step 1 and the final contact paragraph updated to the approved enquiry wording.
- FAQ: pensioner discount replaced by "What happens if you can't help with my problem?" with the approved answer; website FAQ extended with optional ongoing care + €25/hr ongoing support. 6 questions total, all consistent with €40 visit / €25 hr / quoted websites / no radius / no retained credentials / no remote access.
- Hero visual: replay button and its state/import removed; once-per-view animation and reduced-motion static composition unchanged. Temporary review GIF deleted from /app/frontend/public.
- Verified on desktop and mobile (0px overflow). Live Netlify form delivery still UNVERIFIED.

## Contact options + footer pass — June 2026 (preview)
- `CONTACT_METHODS` const in App.js drives both the main contact cards and the footer row: tel:+353892183492 ("Call Jared" / 089 218 3492), https://wa.me/353892183492 ("WhatsApp me" / Send a message, opens new tab), mailto:fix@jaredtalbot.com ("Email Jared").
- FinalCTA: "Get in Touch" button stays primary; below a divider ("Or reach me directly") sit three fully clickable cards (data-testid contact-card-phone/whatsapp/email) — rounded-2xl, subtle border, 40px icon tiles, hover brightens to border-primary/50 with motion-safe lift, active pressed state, focus-visible orange ring. One row on desktop (sm:grid-cols-3), stacked on mobile. Visible text labels always shown.
- Footer: "JaredTalbot Hub" link + ExternalLink import removed; tagline now "Websites & everyday tech help"; simple labelled icon row (footer-contact-phone/whatsapp/email); name + copyright kept.
- WhatsApp brand glyph added as a local inline SVG component (`WhatsAppIcon`) since lucide has no brand icons — no new dependencies.
- Verified desktop/mobile layout, hrefs, hover, focus ring, 0px overflow.

## GitHub export investigation — June 2026
- Finding: /app has NO git remote (`git remote -v` empty). All approved work is committed on local branch `main` (HEAD 8b50de5) and the working tree is clean apart from node_modules/yarn.lock. Nothing was ever pushed from this forked job, which is why GitHub `main` is stale and `conflict_160926_1545` differs only in `.emergent/emergent.yml` (created by an earlier job's export attempt).
- GitHub connection is per-job, so it does not carry over into a forked session. Resolution path: user triggers the platform "Save to GitHub" feature and selects jt485-coder/jaredfixes with a NEW branch, then opens a PR into main. No agent-side push/pull/reset/deploy performed or needed.
- Verified read-only by testing agent (report /app/test_reports/iteration_4.json, 100% frontend, 0 issues): headline, animated hero without replay button, service groups, pricing order, 6 FAQs, contact cards (tel:+353892183492 / wa.me/353892183492 / mailto:fix@jaredtalbot.com), footer row and enquiry modal all match the approved spec.

## Oylegate / pricing / about pass — Oct 2026 (preview only, not published)
Changed files: frontend/src/App.js, frontend/public/index.html, frontend/src/index.css, frontend/tailwind.config.js, frontend/public/jared-cutout.png (PLACEHOLDER).
- Location: hero badge "Based in Oylegate, Co. Wexford"; new hero coverage line (data-testid=hero-coverage-line); FAQ "What areas do you cover?" replaced with the 15 km / 15–25 km (€10 travel) / remote answer.
- Pricing: Starter €350, Business €700, WordPress €900–€2,500, Get Found on Google €150, digital support €25/hr, local visits €40 (additional time nested + travel note), new Remote help €25/hr; note "Every price is confirmed in a written quote before any work starts." (pricing-quote-note). Old "Website projects — quoted individually" removed.
- New "Get found on Google" service card (Search icon) in Websites & Digital Support.
- New AboutJared section (data-testid=about-section/about-photo) between Services and HowItWorks: /jared-cutout.png at 220px mobile / 280px desktop, uncropped, radial orange glow behind.
- Readability: body 18px + @layer utilities bump for text-xs/sm/base/lg; --text-muted and tailwind 'text-muted' lightened #a3a3a3 → #c9c9c9.
- SEO: new title/description, canonical, full Open Graph + Twitter tags, LocalBusiness JSON-LD (no street address). No external owner links anywhere.
- Verified: testing agent /app/test_reports/iteration_5.json — 100% frontend, zero issues.
- RESOLVED (Oct 2026): real photo received and saved to frontend/public/jared-cutout.png (936x1000 RGBA, transparent). Rendered 280px wide on desktop / 220px mobile, border-radius 0 (no circle crop), radial orange glow behind. Verified via screenshots; no other file changed.

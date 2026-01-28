# Mission Lawn Care Website Design

**Date:** 2026-01-27
**Status:** Approved
**Goal:** Lead generation (quote requests)

---

## Business Information

| Field | Value |
|-------|-------|
| **Company** | Mission Lawn Care |
| **Tagline** | Professional lawn care services |
| **Phone** | (864) 940-6434 |
| **Email** | missionlawncare@yahoo.com |
| **Location** | Anderson, SC |
| **Service Area** | Anderson, Anderson County, Upstate South Carolina |
| **GMB** | https://maps.app.goo.gl/t7SG8NmSsDhKsago6 |
| **USP** | Veteran-owned lawn care with reliability and integrity |
| **Response Time** | 24-hour response |

---

## Color Palette

| Role | Color | Hex Code | Usage |
|------|-------|----------|-------|
| **Primary** | Lawn Green | `#2D5A27` | Headers, buttons, accents |
| **Secondary** | Patriot Red | `#B22234` | CTAs, highlights, urgency |
| **Accent** | Navy Blue | `#1E3A5F` | Links, trust elements |
| **Background** | Off-White | `#F8F9FA` | Page backgrounds |
| **Text** | Dark Gray | `#1F2937` | Body text |
| **White** | Pure White | `#FFFFFF` | Cards, sections |

---

## Site Structure

### Pages

| Page | Path | Purpose |
|------|------|---------|
| **Home** | `/` | Convert visitors to leads |
| **About** | `/about` | Build trust & credibility |
| **Contact** | `/contact` | Multiple contact options |

### Homepage Sections

1. **Hero**
   - Bold headline: "Professional Lawn Care Services"
   - Subheadline: "Veteran-Owned | Anderson, SC"
   - Phone number prominently displayed: (864) 940-6434
   - "Get Free Quote" CTA button (red)
   - Tagline: "Service with honor. Quality you can count on."

2. **Services** (4 cards)
   - Lawn Mowing & Maintenance
   - Landscaping & Design
   - Lawn Treatment & Fertilization
   - Tree & Shrub Care

3. **Photo Gallery**
   - Before/after project photos
   - Grid layout with lightbox

4. **Why Choose Us** (4 trust pillars)
   - Veteran-Owned (flag/medal icon)
   - Reliable Service (clock/checkmark icon)
   - Local & Personal (map pin icon)
   - Eco-Friendly (leaf icon)

5. **Testimonials**
   - 2-3 customer quotes
   - Rotating or static display

6. **Quote Form**
   - Fields: Name, Phone, Email, Service Type, Message
   - "Get Free Quote" submit button

### About Page

- Veteran story and mission
- Company values (from voice-dna.json)
- Service area map/description
- Why customers choose Mission Lawn Care

### Contact Page

- Phone: (864) 940-6434
- Email: missionlawncare@yahoo.com
- Location: Anderson, SC
- Google My Business link
- Contact form
- Service hours

---

## Sticky/Fixed Elements

### Header (all pages)
- Logo (left)
- Navigation: Home | About | Contact (center)
- Phone number (right)
- "Get Free Quote" button (right)

### Mobile
- Hamburger menu
- Floating "Call Now" button (bottom right corner)

---

## Technical Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | App Router, React Server Components |
| **TailwindCSS** | Utility-first styling with custom colors |
| **Framer Motion** | Scroll animations, page transitions |
| **React Hook Form** | Form handling |
| **Zod** | Form validation |
| **Lucide Icons** | UI icons |
| **Next.js Image** | Optimized images |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Header.tsx          # Sticky navigation
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Homepage hero
│   ├── ServiceCard.tsx     # Service display card
│   ├── PhotoGallery.tsx    # Project photos
│   ├── WhyChooseUs.tsx     # Trust pillars
│   ├── Testimonials.tsx    # Customer quotes
│   ├── QuoteForm.tsx       # Contact/quote form (client)
│   └── MobileMenu.tsx      # Mobile navigation (client)
├── lib/
│   └── utils.ts            # Utility functions
└── styles/
    └── globals.css         # Global styles, Tailwind imports
```

---

## SEO & Metadata

```typescript
// Default metadata
title: "Mission Lawn Care | Professional Lawn Care in Anderson, SC"
description: "Veteran-owned lawn care serving Anderson, SC. Professional mowing, landscaping, fertilization & tree care. Call (864) 940-6434 for a free quote."
keywords: ["lawn care Anderson SC", "landscaping Anderson", "veteran-owned lawn care", "lawn mowing Anderson SC"]
```

---

## Conversion Elements

- Phone number visible on every page
- "Get Free Quote" button in header (always visible)
- Quote form on homepage
- Click-to-call on mobile
- 24-hour response promise
- Trust signals: Veteran-owned, local, reliable

---

## Services Detail

### Lawn Mowing & Maintenance
- Regular mowing
- Edging
- Trimming
- Cleanup

### Landscaping & Design
- Planting
- Hardscaping
- Design services
- Garden beds

### Lawn Treatment & Fertilization
- Weed control
- Fertilizing
- Aeration
- Overseeding

### Tree & Shrub Care
- Pruning
- Trimming
- Removal
- Health treatments

---

## Customer Personas (for content tone)

1. **Busy Professional Brian** - Values time, wants reliability
2. **Retired Robert** - Former military, appreciates veteran-owned
3. **Property Manager Patricia** - Needs consistent commercial service
4. **New Homeowner Nancy** - Looking for trustworthy local business

---

## Brand Voice Guidelines

- **Tone:** Warm, welcoming, knowledgeable
- **Formality:** Semi-formal (friendly but professional)
- **Perspective:** Third person ("Mission Lawn Care")
- **Key phrases:**
  - "Service with honor"
  - "Your trusted neighbor"
  - "Quality you can count on"

---

## Implementation Checklist

- [ ] Initialize Next.js 14 project
- [ ] Configure TailwindCSS with custom colors
- [ ] Install dependencies (Framer Motion, React Hook Form, Zod, Lucide)
- [ ] Create root layout with metadata
- [ ] Build Header component
- [ ] Build Footer component
- [ ] Build Homepage (Hero, Services, Gallery, Why Us, Testimonials, Form)
- [ ] Build About page
- [ ] Build Contact page
- [ ] Add mobile responsiveness
- [ ] Add animations
- [ ] Test all forms
- [ ] Optimize images
- [ ] Final review

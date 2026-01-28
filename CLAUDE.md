# Mission Lawn Care

## Project Overview

**Name:** Mission Lawn Care
**Type:** Service Business (Veteran-Owned)
**Tagline:** Professional lawn care services
**Location:** Anderson, SC
**Goal:** Lead generation website for quote requests

## Business Information

| Field | Value |
|-------|-------|
| **Phone** | (864) 940-6434 |
| **Email** | missionlawncare@yahoo.com |
| **Location** | Anderson, SC |
| **Service Area** | Anderson, Anderson County, Upstate South Carolina |
| **GMB** | https://maps.app.goo.gl/t7SG8NmSsDhKsago6 |
| **Response Time** | 24-hour response |

## Services

- Lawn Mowing & Maintenance (mowing, edging, trimming)
- Landscaping & Design (planting, hardscaping, design)
- Lawn Treatment & Fertilization (weed control, fertilizing, aeration)
- Tree & Shrub Care (pruning, trimming, removal)

## Brand Colors

| Role | Color | Hex Code |
|------|-------|----------|
| **Primary** | Lawn Green | `#2D5A27` |
| **Secondary** | Patriot Red | `#B22234` |
| **Accent** | Navy Blue | `#1E3A5F` |
| **Background** | Off-White | `#F8F9FA` |
| **Text** | Dark Gray | `#1F2937` |

## Website Structure

**Pages:** Home, About, Contact

### Homepage Sections
1. Hero (phone + CTA)
2. Services (4 cards)
3. Photo Gallery
4. Why Choose Us (4 trust pillars)
5. Testimonials
6. Quote Form

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS (custom brand colors)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide Icons

## Project Structure

```
mission-lawn-care/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Homepage
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── PhotoGallery.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── QuoteForm.tsx
│   │   └── MobileMenu.tsx
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── context/
│   └── core/
│       ├── business-profile.json
│       ├── voice-dna.json
│       └── icp.json
├── docs/
│   └── plans/
│       └── 2026-01-27-website-design.md
├── knowledge/
│   ├── drafts/
│   ├── published/
│   ├── notes/
│   └── research/
└── .claude/
    ├── agents/
    ├── commands/
    ├── skills/
    └── config.json
```

## Brand Voice

- **Tone:** Warm, welcoming, knowledgeable
- **Formality:** Semi-formal (friendly but professional)
- **Perspective:** Third person ("Mission Lawn Care")
- **Key Phrases:**
  - "Service with honor"
  - "Your trusted neighbor"
  - "Quality you can count on"

## Key Differentiators

- Veteran-owned and operated
- Reliability and consistency
- Local and family-owned
- Eco-friendly practices
- Competitive pricing

## Available Commands

### Development
- `/status` - View project status and progress
- `/start-phase` - Initialize a new development phase
- `/end-session` - Document session work and update context
- `/shadcn [component]` - Implement shadcn/ui components

### Content & Research
- `/blog-research` - Create publication-ready blog posts
- `/website-research [url]` - SEO audits and competitive analysis
- `/lp-creator` - Create StoryBrand landing pages

### Productivity
- `/daily-checkin` - Personal reflection and planning
- `/weekly-checkin` - Weekly progress tracking
- `/reflect` - Analyze session and improve skills

## Design Document

Full website design specifications: `docs/plans/2026-01-27-website-design.md`

## Notes

- Always commit changes after completing tasks
- Phone number (864) 940-6434 should be prominent on every page
- Use brand colors consistently (green primary, red for CTAs)
- Mobile-first design with floating call button
- 24-hour response promise is a key selling point

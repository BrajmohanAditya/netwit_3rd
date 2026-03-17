## 🏗️ TECH STACK — PROJECT SPECIFICATIONS

### Frontend

* **Framework:** Next.js 15 (App Router) with TypeScript (strict mode)
* **Styling:** Tailwind CSS v4 + CSS Variables for theming
* **Component Library:** shadcn/ui (customized components)
* **Animations:** Framer Motion for page transitions, scroll animations, and micro-interactions
* **State Management:** Zustand for lightweight global state
* **Server State / Data Fetching:** TanStack Query (React Query v5)
* **Forms:** React Hook Form + Zod validation
* **Charts / Visual Data:** Recharts
* **Notifications:** Sonner (toast notifications)
* **Icons:** Lucide React
* **Date Handling:** date-fns

---

### Backend

* **Backend Platform:** Convex (serverless backend with real-time database and functions)
* **Database:** Convex built-in reactive database
* **API Layer:** Convex Queries, Mutations, and Actions
* **Authentication:** Convex Auth or Clerk integration
* **File Storage:** Convex File Storage (or AWS S3 if needed)
* **Real-time Updates:** Built-in Convex subscriptions

---
:root{
  /* Brand */
  --color-primary: #0B3D91;
  --color-primary-600: #1157E0;
  --color-primary-400: #4C7BFF;

  /* Accents */
  --color-accent-teal: #14B8A6;
  --color-accent-gold: #F59E0B;

  /* Neutrals */
  --color-text: #0F172A;
  --color-muted: #475569;
  --color-surface: #FFFFFF;
  --color-surface-2: #F8FAFC;

  /* Feedback */
  --color-success: #16A34A;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;

  /* Dark mode */
  --color-bg: #FFFFFF;
  --color-card-shadow: rgba(11,61,145,0.08);

  /* CTA */
  --color-cta: var(--color-primary);
  --color-cta-text: #FFFFFF;
}

/* Dark mode toggle (class strategy) */
.dark {
  --color-primary: #4C7BFF;
  --color-primary-600: #2B63FF;
  --color-accent-teal: #2DD4BF;
  --color-accent-gold: #FBBF24;

  --color-text: #E6EEF8;
  --color-muted: #94A3B8;
  --color-surface: #0B1220;
  --color-surface-2: #071028;

  --color-bg: #071028;
  --color-card-shadow: rgba(0,0,0,0.45);

  --color-cta-text: #071028;
}

### Typography
```css
/* Headlines / Brand */
font-family: 'Syne', sans-serif;
/* weights: 700, 800 */

/* UI / Body */
font-family: 'DM Sans', sans-serif;
/* weights: 300, 400, 500, 600, 700 */

/* Monospace / Data */
font-family: 'JetBrains Mono', monospace;
/* weights: 400, 600 */

/* Scale */
--text-xs: 11px;
--text-sm: 12px;
--text-base: 13px;
--text-md: 14px;
--text-lg: 16px;
--text-xl: 18px;
--text-2xl: 22px;
--text-3xl: 28px;
--text-hero: 36px;
```

### Spacing & Layout

/* Border Radius */
Inputs: 8px
Buttons: 10px
Cards: 16px
Panels: 20px
Modals: 24px

/* Navigation */
Top Bar Height: 72px

/* Section Spacing */
Hero Section Padding: 120px top / 120px bottom
Standard Section Padding: 96px top / 96px bottom

/* Content Layout */
Content Padding: 80px horizontal / 72px vertical

/* Card Layout */
Card Padding: 24px

/* Grid System */
Grid Gap (Standard): 24px
Grid Gap (Large Sections): 32px

/* Spacing Scale */
4px
8px
12px
16px
24px
32px
48px
64px
96px
120px


### Animation Principles
- **Page transitions:** 200ms ease-out fade + 8px Y slide
- **Card hover:** 150ms transform translateY(-2px) + border color
- **Micro-interactions:** 100ms for button states
- **Skeleton loading:** Shimmer animation on all data loads
- **Notification toasts:** Slide in from top-right, 3s auto-dismiss
- **Modal:** Scale from 0.96 to 1 + fade, 200ms

## 📱 APPLICATION ARCHITECTURE

### Layout Structure (Homepage)

```
┌──────────────────────────────────────────────────────────────┐
│                       HEADER / NAVBAR (80px)                 │
│ Logo | Key Offerings | Enterprise Solutions | Industries     │
│ Technologies | Resources | About | CTA Button                │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                        HERO SECTION                          │
│ Headline                                                     │
│ Subheadline                                                  │
│ Description Text                                             │
│ CTA Button                                                   │
│ Background AI Graphic                                        │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                      STATISTICS SECTION                      │
│ 1500+ SaaS Experts | 200+ AI Experts | 2000+ Clients | 10+   │
│ Locations Worldwide                                          │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                WHAT ARE YOU LOOKING TO DO                    │
│                                                              │
│ [Card] Scale Smarter with AI                                 │
│ [Card] Lockdown Cybersecurity                                │
│ [Card] QA & Automation Testing                               │
│ [Card] Build a Sustainable Future                            │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                    CLIENT TESTIMONIALS                       │
│ Quote + Client Image + Video Preview                         │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                      STRATEGY CTA BANNER                     │
│ "Ready to Embrace an AI-First SaaS Strategy?"                │
│ CTA Button                                                   │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                    TRUSTED BY SECTION                        │
│ Trusted By 2000+ SaaS Businesses                             │
│ Industry Logos (Clutch | Google | Serchen etc.)              │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│              GLOBAL TECHNOLOGY CENTERS SECTION               │
│ Map + Office Locations + Description                         │
│ Location Tabs (Rochester | Vancouver | Dubai | etc.)         │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                 PRODUCT / COMPANY ECOSYSTEM                  │
│ Grid of Product Logos (ProjectPro, CareSmartz etc.)          │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                     PARTNERS SECTION                         │
│ Microsoft | Salesforce | Google | Adobe | IBM etc.           │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                          FAQ SECTION                         │
│ Accordion Questions + Expand Answers                         │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                      CONTACT FORM SECTION                    │
│ Image Left | Form Right                                      │
│ Name | Email | Phone | Company | Message | Submit            │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                           FOOTER                             │
│ About | Explore | Connect | Queries                          │
│ Newsletter Signup | Social Icons | Copyright                 │
└──────────────────────────────────────────────────────────────┘


FLOATING ELEMENTS (RIGHT SIDE)
--------------------------------
• Scroll To Top Button
• Chat Support Button
```

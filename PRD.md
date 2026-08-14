# PRD — Fix and Glaze Website

## Product Vision

A professional, mobile-first marketing website for Fix and Glaze that:
- Showcases services (window, glass, door installation & repair)
- Displays a portfolio of completed projects
- Enables easy client contact and quote requests
- Builds trust through testimonials and about page
- Allows the business owner to update content without developer help

**Target Launch:** Today (Vercel deployment)

---

## Goals

1. **Lead Generation** — Capture contact inquiries and quote requests
2. **Trust Building** — Showcase expertise through portfolio and testimonials
3. **Service Education** — Explain all service offerings clearly
4. **Local SEO** — Rank for "glass repair [suburb]", "window installation [suburb]", etc.
5. **Client Autonomy** — Allow content updates via JSON editing

---

## Pages & Features

### 1. Home Page
**Purpose:** First impression, hero section, service overview, testimonials, CTA

**Sections:**
- Hero with tagline "Repair. Replace. Refresh."
- Service cards (3-4 main services with icons)
- "Why Choose Us" section (5 reasons)
- Customer testimonials carousel
- Final CTA: "Get Free Quote Today"
- Trust bar: Licensed, insured, 24/7 emergency service

**Content Source:** `services.json`, `testimonials.json`

### 2. Services Page
**Purpose:** Deep dive into each service offering

**Sections per Service:**
- Service name & description
- What's included (list)
- Frame/glass types offered (if applicable)
- Who it's ideal for
- "Call for quote" CTA

**Services to Showcase:**
- Window Installation & Replacement (uPVC, Aluminium, Timber)
- Glass Installation & Glazing (residential, commercial, shower screens)
- Door Installation & Fitting
- Glass Repair (emergency & standard)
- Commercial Glazing

**Content Source:** `services.json`

### 3. Projects / Portfolio Page
**Purpose:** Visual proof of work, before/after gallery

**Features:**
- Filterable gallery (by service type)
- Project cards with image, title, location, brief description
- Click to view full project details
- Lazy-load images for performance
- Placeholder images until client provides photos

**Content Source:** `projects.json`

### 4. Individual Project Detail Page
**Purpose:** Show full project story

**Fields per Project:**
- Service type
- Location (suburb only, for privacy)
- Client type (Residential/Commercial)
- Problem/challenge
- Solution & materials used
- Result/outcome
- Before/after images (2-4 images)

**Content Source:** `projects.json` via dynamic routing `[slug]`

### 5. About Us Page
**Purpose:** Build credibility and connection

**Sections:**
- Company story & mission
- Core values (quality, transparency, reliability, etc.)
- Team/experience overview
- Service area (placeholder: to be defined)
- Final CTA

**Content Source:** Static (update in code as needed)

### 6. Contact Page
**Purpose:** Lead capture via form + direct contact info

**Features:**
- Contact form (Name, Phone, Email, Service Type, Property Type, Location, Message)
- Form validation (client & server-side)
- Success message after submission
- Business hours + service area info
- Google Maps embed (placeholder, to be configured)
- Direct phone & email links

**Content Source:** Static contact info, JSON for form success message

**Backend:**
- Form submitted via API route `/api/contact`
- Email sent via Nodemailer to francis.antonio@rocketmail.com
- Form data logged (optional: database later)

### 7. Privacy Policy Page
**Purpose:** Legal compliance, trust

**Content Source:** Static (from provided PDF)

### 8. Terms of Use Page
**Purpose:** Legal compliance

**Content Source:** Static (from provided PDF)

---

## Content Management

### Client-Editable Files

**Location:** `/public/data/` (JSON files)

#### 1. `services.json`
```json
{
  "services": [
    {
      "id": "window-installation",
      "title": "Window Installation & Replacement",
      "description": "...",
      "icon": "window",
      "details": "...",
      "materials": ["uPVC", "Aluminium", "Timber"],
      "idealFor": "..."
    }
  ]
}
```
**Client Updates:** Change descriptions, add/remove materials, update ideal use cases

#### 2. `projects.json`
```json
{
  "projects": [
    {
      "id": "project-1",
      "title": "Residential Window Replacement",
      "slug": "residential-window-replacement",
      "serviceType": "window-installation",
      "location": "Suburb, NSW",
      "clientType": "Residential",
      "description": "...",
      "challenge": "...",
      "solution": "...",
      "result": "...",
      "images": [
        "/images/projects/project-1-before.jpg",
        "/images/projects/project-1-after.jpg"
      ]
    }
  ]
}
```
**Client Updates:** Add new projects, update descriptions, swap images

#### 3. `testimonials.json`
```json
{
  "testimonials": [
    {
      "id": "testimonial-1",
      "quote": "...",
      "author": "Sarah M.",
      "role": "Residential Client",
      "rating": 5
    }
  ]
}
```
**Client Updates:** Add new testimonials, update existing ones

---

## Contact Form Specifications

### Form Fields
| Field | Type | Required | Validation |
|-------|------|----------|-----------|
| Full Name | Text | Yes | Min 2 chars |
| Phone | Tel | Yes | Valid AU format (0XXX XXX XXX) |
| Email | Email | Yes | Valid email |
| Service Required | Dropdown | Yes | One of: Window, Glass, Door, Repair, Commercial, Shower Screen, Other |
| Property Type | Dropdown | Yes | Residential or Commercial |
| Location / Suburb | Text | Yes | Min 2 chars |
| Project Description | Textarea | Yes | Min 10 chars |
| How did you hear about us? | Dropdown | No | Optional |

### On Submission
1. **Validation:** Client-side (React Hook Form) + server-side (Zod)
2. **Email:** Send to francis.antonio@rocketmail.com with all details
3. **Response:** Show success message "Thank you! We'll contact you within 24 hours"
4. **Logging:** Log to console/optional database (future enhancement)

### Email Template
```
Subject: New Quote Request - Fix and Glaze

From: [Full Name]
Phone: [Phone]
Email: [Email]

Service Required: [Service]
Property Type: [Property Type]
Location: [Suburb]

Message:
[Project Description]

---
Sent via fixandglaze.com.au contact form
```

---

## Visual Design

### Color Palette
- **Primary:** Cyan/Turquoise (#0891B2)
- **Secondary:** Navy Blue (#1E3A8A)
- **Accent:** Red (#DC2626)
- **Background:** White (#FFFFFF)
- **Text:** Dark Gray (#1F2937)
- **Borders:** Light Gray (#E5E7EB)

### Typography
- **Headings:** Bold, dark text
- **Body:** Regular weight, readable line-height
- **CTA Buttons:** Red accent, white text

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Touch-friendly buttons (min 44px height)

---

## SEO & Metadata

### Home Page
- **Title:** "Fix and Glaze | Expert Glass Repair & Installation | Windows, Doors & More"
- **Description:** "Professional glass repair, installation, and glazing services for homes and businesses. UPVC, aluminium & timber specialists."
- **Focus Keywords:** glass repair, window installation, door installation, glazing contractor

### Other Pages
- Unique titles and descriptions for each page
- Schema markup for LocalBusiness (name, phone, address, hours)
- Service schema for service pages
- Image alt text following format: "[Service] by Fix and Glaze in [Suburb]"

---

## Performance Requirements

- **Page Load Time:** < 2 seconds (Lighthouse target: 90+)
- **Image Optimization:** Lazy load, WebP format, responsive sizes
- **Mobile Performance:** Smooth scrolling, fast form submission
- **Accessibility:** WCAG AA compliance minimum

---

## Deployment & Hosting

- **Repository:** GitHub (private or public as desired)
- **Hosting:** Vercel (auto-deploy on `git push origin main`)
- **Domain:** [To be registered after launch] — currently will use Vercel domain
- **HTTPS:** Automatic via Vercel
- **Environment Variables:** Managed via Vercel dashboard (phone, email, SMTP credentials)

---

## Out of Scope (MVP)

- Payment processing
- Online booking/scheduling
- Multi-user team coaching
- Email notifications to clients (one-way contact form only)
- Wearable API integration
- Mobile app
- Blog (future feature)
- Live chat
- Database (JSON files for now)

---

## Success Metrics

1. Website live on Vercel today
2. Contact form captures inquiries with email delivery
3. Portfolio displays with placeholder images
4. Client can update content via JSON files
5. Mobile responsive on all screen sizes
6. No console errors in production
7. Lighthouse score 85+

---

## Timeline

- **Today:** Deploy to Vercel
- **Next:** Client provides project photos & testimonials
- **Future:** Add blog, improve SEO with content, optimize for Google Maps

# CLAUDE.md — Fix and Glaze Website

## Project Overview
A professional marketing website for Fix and Glaze, a residential and commercial glass repair and installation contractor. The site showcases services, project portfolio, and provides contact/quote functionality.

---

## Tech Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Email:** Nodemailer for contact form submissions

### Backend
- **Runtime:** Node.js via Next.js API routes
- **Email Service:** Nodemailer (SMTP)
- **Static Content:** JSON files in `/public/data/` (for client-friendly updates)

### Hosting
- **Deployment:** Vercel (auto-deploy on git push)
- **Domain:** [To be registered]
- **Environment:** Production-ready, HTTPS by default

### Dev Tools
- **Package Manager:** npm
- **Type Safety:** TypeScript
- **Linting:** ESLint
- **Code Format:** Prettier

---

## Brand Guidelines

### Colors
- **Primary:** Cyan/Turquoise (#0891B2 or similar)
- **Secondary:** Navy Blue (#1E3A8A)
- **Accent:** Red (#DC2626) — for logo/highlights
- **Neutral:** Whites, grays for text/backgrounds

### Logo
- Red hexagon with white window icon and green leaf
- Use as SVG component in header

### Tagline
- Primary: "Repair. Replace. Refresh."

### Contact Info
- **Phone:** 0432 800 802
- **Email:** francis.antonio@rocketmail.com

---

## File Structure

```
fix-and-glaze/
├── app/
│   ├── layout.tsx           # Root layout with nav/footer
│   ├── page.tsx             # Home page
│   ├── services/
│   │   └── page.tsx         # Services overview
│   ├── about/
│   │   └── page.tsx         # About us
│   ├── projects/
│   │   ├── page.tsx         # Portfolio grid
│   │   └── [slug]/
│   │       └── page.tsx     # Individual project detail
│   ├── contact/
│   │   └── page.tsx         # Contact form
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # Contact form email endpoint
│   └── (legal)/
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   ├── Testimonials.tsx
│   └── CTASection.tsx
├── lib/
│   ├── constants.ts         # Brand colors, contact info
│   ├── types.ts             # TypeScript interfaces
│   └── email.ts             # Nodemailer config
├── public/
│   ├── data/
│   │   ├── services.json    # Service descriptions (client-editable)
│   │   ├── projects.json    # Portfolio projects (client-editable)
│   │   └── testimonials.json # Client testimonials (client-editable)
│   ├── images/
│   │   ├── logo.svg
│   │   └── placeholders/    # Placeholder images for gallery
│   └── favicon.ico
├── styles/
│   └── globals.css          # Tailwind config
├── .env.example
├── .env.local               # (DO NOT COMMIT - your secrets)
├── .gitignore
├── CLAUDE.md                # This file
├── PRD.md                   # Product requirements
├── plan.md                  # Implementation plan
├── SECURITY.md              # Security guidelines
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── package.json
```

---

## Coding Style

### General Rules
- **Indentation:** 2 spaces
- **Quotes:** Double quotes for strings
- **Semicolons:** Required
- **Arrow Functions:** Prefer for callbacks
- **Async/Await:** Always use async/await, never `.then()` chains
- **Naming:** Descriptive camelCase for variables/functions, PascalCase for components
- **Comments:** Only explain WHY, never restate the WHAT

### Component Rules
- Functional components only
- Use TypeScript interfaces for props
- Keep components under 200 lines (split if needed)
- One component per file

### Example Component
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="p-6 rounded-lg border border-gray-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

---

## Content Management for Client

The website uses **JSON files** for easy client updates without coding knowledge.

### Files the Client Can Edit
Located in `/public/data/`:

1. **services.json** — Service descriptions and details
2. **projects.json** — Portfolio projects with images and descriptions
3. **testimonials.json** — Customer testimonials

### How to Update (Client Manual Provided)
See `CONTENT_UPDATE_MANUAL.md` for step-by-step instructions.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```
NEXT_PUBLIC_SITE_URL=https://fixandglaze.com.au  # Will update after domain
NEXT_PUBLIC_PHONE=0432 800 802
NEXT_PUBLIC_EMAIL=francis.antonio@rocketmail.com
NEXT_PUBLIC_SERVICE_AREA="Sydney Metropolitan Area"

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@fixandglaze.com.au
```

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   ```bash
   cp .env.example .env.local
   # Fill in SMTP and other values
   ```

3. **Run locally:**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

4. **Deploy to Vercel:**
   ```bash
   git push origin main
   # Vercel auto-deploys
   ```

---

## Before Committing

- Run `npm run lint` and fix any errors
- Run `npm run type-check` and ensure no type errors
- Test contact form in development
- Review for broken links and images
- Use `/commit` (not raw git commit)

---

## Definition of Done

A page/feature is done when:
1. Behavior matches requirements
2. No console or terminal errors
3. `/review` passes
4. Responsive on mobile, tablet, desktop
5. All internal links work
6. Changes committed via `/commit`

---

## Performance Targets

- Page load: < 2 seconds
- Contact form submission: < 1 second
- Image load (lazy): < 1 second
- Lighthouse score: 90+

---

## Security Rules

- Never commit `.env.local`
- Never hardcode API keys
- Use `.env.example` as template only
- Validate all form inputs server-side
- Sanitize email content before sending
- See `SECURITY.md` for complete rules

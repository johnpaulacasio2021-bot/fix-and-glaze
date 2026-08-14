# Implementation Plan — Fix and Glaze Website

**Target:** Live on Vercel today

---

## Phase 1: Foundation (1-2 hours)

### 1.1 Project Setup
- [ ] Initialize Next.js 14 with TypeScript
- [ ] Install dependencies: Tailwind, shadcn/ui, React Hook Form, Zod, Nodemailer
- [ ] Configure TypeScript, ESLint, Prettier
- [ ] Set up .env.local with placeholders
- [ ] Create folder structure per CLAUDE.md

### 1.2 Brand Assets & Constants
- [ ] Create `lib/constants.ts` with brand colors, contact info, taglines
- [ ] Export SVG logo as React component (`Logo.tsx`)
- [ ] Set up Tailwind config with brand colors
- [ ] Create placeholder images (logo, hero, service icons)

### 1.3 Layout & Navigation
- [ ] Build `Header.tsx` component (nav links, logo, CTA button)
- [ ] Build `Footer.tsx` component (links, contact info, copyright)
- [ ] Create root `app/layout.tsx` with Header/Footer
- [ ] Build mobile nav drawer (hamburger menu)

---

## Phase 2: Core Pages (2-3 hours)

### 2.1 Home Page (`app/page.tsx`)
- [ ] Hero section with background, headline, subheadline, CTA buttons
- [ ] Service overview (3-4 cards from `services.json`)
- [ ] "Why Choose Us" section (5 reasons)
- [ ] Testimonials carousel (from `testimonials.json`)
- [ ] Trust bar (icons, trust signals)
- [ ] Final CTA section
- [ ] Responsive design for mobile/tablet/desktop

### 2.2 Services Page (`app/services/page.tsx`)
- [ ] Service grid showing all services
- [ ] Click to see service details (or in separate detail pages)
- [ ] Display materials, use cases, ideal for sections
- [ ] CTA: "Call for Quote" or "Contact Us"

### 2.3 About Page (`app/about/page.tsx`)
- [ ] Company story & mission
- [ ] Core values (5 cards: Quality, Transparent, Reliable, etc.)
- [ ] Service area info (placeholder)
- [ ] Team overview (if applicable, or skip for solo)
- [ ] CTA section

### 2.4 Contact Page (`app/contact/page.tsx`)
- [ ] Contact form with all fields from PRD
- [ ] Business hours & service area display
- [ ] Direct phone/email links
- [ ] Google Maps placeholder (embed or image)
- [ ] Form submission handler

### 2.5 Portfolio/Projects Page (`app/projects/page.tsx`)
- [ ] Gallery grid with filterable tabs (All, Window, Glass, Door, etc.)
- [ ] Project cards showing image, title, location, service type
- [ ] Click to detail page
- [ ] Lazy-load images
- [ ] Responsive grid (mobile: 1 col, tablet: 2 col, desktop: 3 col)

### 2.6 Project Detail Page (`app/projects/[slug]/page.tsx`)
- [ ] Dynamic routing based on project slug
- [ ] Before/after image gallery
- [ ] Full project description, challenge, solution, result
- [ ] Related projects (show 2-3 similar)
- [ ] CTA: "Get Quote for Similar Project"

### 2.7 Legal Pages (Privacy & Terms)
- [ ] `app/(legal)/privacy/page.tsx` (from provided PDF)
- [ ] `app/(legal)/terms/page.tsx` (from provided PDF)

---

## Phase 3: Data & JSON Setup (30 mins)

### 3.1 Create JSON Files in `/public/data/`
- [ ] `services.json` — All 5 services with descriptions, materials, use cases
- [ ] `projects.json` — 3-5 placeholder projects (with placeholder image paths)
- [ ] `testimonials.json` — 3 placeholder testimonials

### 3.2 Create JSON Loader Functions
- [ ] `lib/getServices()` — Read from services.json
- [ ] `lib/getProjects()` — Read from projects.json
- [ ] `lib/getTestimonials()` — Read from testimonials.json
- [ ] Implement on respective pages/components

---

## Phase 4: Contact Form & Email (1 hour)

### 4.1 Form Component (`components/ContactForm.tsx`)
- [ ] React Hook Form setup
- [ ] Zod schema for validation
- [ ] All fields: name, phone, email, service, property type, location, message
- [ ] Client-side validation with error messages
- [ ] Loading state during submission
- [ ] Success/error toast notifications

### 4.2 API Endpoint (`app/api/contact/route.ts`)
- [ ] POST endpoint to receive form data
- [ ] Server-side validation (Zod)
- [ ] Sanitize inputs
- [ ] Call Nodemailer to send email
- [ ] Return success/error JSON response
- [ ] Error handling & logging

### 4.3 Email Setup (`lib/email.ts`)
- [ ] Configure Nodemailer with SMTP (Gmail template provided in .env)
- [ ] Create email template HTML
- [ ] Send to francis.antonio@rocketmail.com
- [ ] Include all form fields in email body

### 4.4 Environment Variables
- [ ] Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS to .env.local
- [ ] Test email submission locally

---

## Phase 5: Responsive Design & Polish (1 hour)

### 5.1 Mobile Responsiveness
- [ ] Test all pages on mobile (375px width)
- [ ] Ensure touch targets are 44px minimum
- [ ] Hamburger menu works smoothly
- [ ] Images scale properly
- [ ] Forms are easy to fill on mobile

### 5.2 Accessibility
- [ ] WCAG AA compliance
- [ ] Alt text on all images
- [ ] Color contrast ratios
- [ ] Keyboard navigation works
- [ ] Form labels linked to inputs

### 5.3 Performance
- [ ] Lazy load images
- [ ] Compress images (WebP)
- [ ] Minify CSS/JS
- [ ] Remove unused dependencies
- [ ] Lighthouse score target: 85+

### 5.4 UI Polish
- [ ] Consistent spacing (Tailwind scale)
- [ ] Hover states on buttons/links
- [ ] Smooth transitions & animations
- [ ] Loading spinners
- [ ] Error messages clear and helpful

---

## Phase 6: Testing & QA (30 mins)

### 6.1 Functionality Testing
- [ ] All links work (internal & external)
- [ ] Contact form submits successfully
- [ ] Email received in inbox
- [ ] Form clears after submission
- [ ] Success message displays
- [ ] Gallery images display (placeholders)
- [ ] Mobile nav opens/closes

### 6.2 Code Quality
- [ ] Run `npm run lint` — no errors
- [ ] Run `npm run type-check` — no type errors
- [ ] No console errors or warnings
- [ ] Code follows CLAUDE.md style guide

### 6.3 Browser Testing
- [ ] Chrome, Firefox, Safari (desktop)
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

---

## Phase 7: Deployment (30 mins)

### 7.1 GitHub Setup
- [ ] Create GitHub repo (private or public)
- [ ] Push code to `main` branch
- [ ] Add .gitignore to prevent committing .env.local

### 7.2 Vercel Deployment
- [ ] Connect Vercel to GitHub repo
- [ ] Add environment variables in Vercel dashboard
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
  - `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_EMAIL`
  - `NEXT_PUBLIC_SITE_URL` (will be Vercel domain initially)
- [ ] Trigger deployment
- [ ] Test live site
- [ ] Verify contact form sends emails
- [ ] Share Vercel URL with client

### 7.3 Post-Launch
- [ ] Create `CONTENT_UPDATE_MANUAL.md` for client
- [ ] Share with client + deployment link
- [ ] Note: Add domain to Vercel once registered

---

## Phase 8: Content Update Manual (for client)

Create file: `CONTENT_UPDATE_MANUAL.md`

**Contents:**
1. **How to Update Services**
   - Open `public/data/services.json`
   - Edit service description, materials, ideal use cases
   - Save file
   - Changes appear instantly on website

2. **How to Add Projects to Portfolio**
   - Open `public/data/projects.json`
   - Add new project entry with title, location, description, images paths
   - Save file
   - New project appears on portfolio page

3. **How to Add Testimonials**
   - Open `public/data/testimonials.json`
   - Add new testimonial with quote, author, role, rating
   - Save file
   - New testimonial appears on homepage

4. **How to Upload Images**
   - Place images in `public/images/projects/`
   - Use filename in projects.json image paths
   - Supported formats: JPG, PNG, WebP

5. **How to Deploy Changes**
   - Make changes to JSON files
   - Commit to GitHub with message: "Update [what changed]"
   - Push to GitHub (`git push origin main`)
   - Vercel auto-deploys within 1-2 minutes
   - Changes live!

6. **Common Tasks**
   - Update business hours (edit Footer.tsx or constants.ts)
   - Change service area (edit About page or constants.ts)
   - Update contact email (edit constants.ts)

---

## Blockers & Dependencies

- ✅ Brand materials provided (logo, colors, copy)
- ✅ Content from PDF (services, pages, FAQs)
- ❌ Project photos (client will gather post-launch)
- ❌ Domain (client to register separately)
- ❌ SMTP credentials (Gmail account required for email)

---

## Definition of Complete

Website is ready to launch when:

1. ✅ All pages build without errors (`npm run build` succeeds)
2. ✅ No TypeScript errors (`npm run type-check` passes)
3. ✅ No linting errors (`npm run lint` passes)
4. ✅ Contact form submits and email is received
5. ✅ All pages responsive on mobile (375px+)
6. ✅ Lighthouse score 85+ on mobile
7. ✅ Deployed to Vercel and live
8. ✅ Content update manual provided to client
9. ✅ Client able to update JSON files independently

---

## Next Steps (After Launch)

1. Collect project photos from client
2. Collect real testimonials from customers
3. Update projects.json with real data
4. Update testimonials.json with real reviews
5. Add domain to Vercel
6. Set up Google Business Profile
7. Optimize for local SEO
8. Add blog section (future feature)

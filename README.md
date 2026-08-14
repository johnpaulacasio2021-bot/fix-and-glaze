# Fix and Glaze Website

Professional glass repair and installation contractor website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start (Development)

```bash
# Install dependencies
npm install

# Create .env.local file (copy from .env.example)
cp .env.example .env.local
# Edit .env.local and add your SMTP credentials

# Run development server
npm run dev
# Open http://localhost:3000
```

## 🏗️ Project Structure

```
app/                          # Next.js app directory
  ├── page.tsx                # Home page (hero + services + testimonials)
  ├── contact/page.tsx        # Contact form page
  ├── services/page.tsx       # Services overview
  ├── about/page.tsx          # About us
  ├── (legal)/                # Legal pages group
  │   ├── privacy/page.tsx
  │   └── terms/page.tsx
  ├── api/contact/route.ts    # Contact form API endpoint
  ├── layout.tsx              # Root layout with Header/Footer
  └── globals.css             # Global styles & Tailwind

components/                   # React components
  ├── Header.tsx
  ├── Footer.tsx
  ├── Hero.tsx
  ├── ServiceCard.tsx
  └── ContactForm.tsx

lib/                          # Utilities
  ├── constants.ts            # Brand info, colors, navigation
  ├── types.ts                # TypeScript interfaces
  └── email.ts                # Email service (Nodemailer)

public/data/                  # JSON content (client-editable)
  ├── services.json           # Service descriptions
  ├── projects.json           # Portfolio projects
  └── testimonials.json       # Customer testimonials
```

## 📋 Features Implemented

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Hero section with CTAs
- ✅ Service cards with descriptions
- ✅ Contact form with validation & email submission
- ✅ Testimonials carousel
- ✅ About page with company story & values
- ✅ Privacy Policy & Terms of Use
- ✅ JSON-based content management (no database needed)
- ✅ TypeScript for type safety
- ✅ ESLint & Prettier configured
- ✅ Production-ready build

## 🔧 Environment Variables

Create `.env.local` with the following:

```
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://fixandglaze.com.au
NEXT_PUBLIC_PHONE=0432 800 802
NEXT_PUBLIC_EMAIL=francis.antonio@rocketmail.com
NEXT_PUBLIC_SERVICE_AREA=Sydney Metropolitan Area

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
SMTP_FROM=noreply@fixandglaze.com.au
SMTP_TO=francis.antonio@rocketmail.com
```

### Gmail Setup for Nodemailer

1. Enable 2-factor authentication on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer" (or your device)
4. Copy the 16-character app password
5. Add to `.env.local` as `SMTP_PASS`

## 📝 Content Management

All content is stored in JSON files in `public/data/`:

- **services.json** — Edit service descriptions, add/remove services
- **projects.json** — Add portfolio projects with images
- **testimonials.json** — Add customer testimonials

See `CONTENT_UPDATE_MANUAL.md` for detailed instructions for the client.

## 🧪 Testing & Validation

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build production version
npm run build

# Run production build locally
npm run start
```

## 🚀 Deploy to Vercel

### First Time Setup

1. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/[your-username]/fix-and-glaze.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Click "New Project"
   - Import GitHub repository
   - Configure build settings (should auto-detect Next.js)
   - Add Environment Variables:
     - `SMTP_HOST=smtp.gmail.com`
     - `SMTP_PORT=587`
     - `SMTP_USER=your-email@gmail.com`
     - `SMTP_PASS=your-app-password`
     - `SMTP_FROM=noreply@fixandglaze.com.au`
     - `SMTP_TO=francis.antonio@rocketmail.com`
     - `NEXT_PUBLIC_*` variables (site URL, phone, email, service area)
   - Click "Deploy"

### After Deployment

- Share Vercel URL with client
- Test contact form to ensure emails are received
- Once domain is registered, add it to Vercel:
  - Project Settings → Domains
  - Add custom domain

## 📖 Documentation

- **CLAUDE.md** — Coding standards, tech stack, file structure
- **PRD.md** — Product requirements & feature specifications
- **plan.md** — Implementation plan (completed phases)
- **SECURITY.md** — Security guidelines
- **CONTENT_UPDATE_MANUAL.md** — Client guide for updating content
- **SETUP.md** — Setup & launch checklist

## 🎨 Brand Colors

- **Primary Cyan:** #0891B2
- **Secondary Navy:** #1E3A8A
- **Accent Red:** #DC2626

Configured in `tailwind.config.ts`

## 📞 Contact

- **Phone:** 0432 800 802
- **Email:** francis.antonio@rocketmail.com
- **Service Area:** Sydney Metropolitan Area

## 📄 License

Private project for Fix and Glaze

---

**Status:** ✅ Ready for Vercel deployment
**Last Updated:** 2026-08-14

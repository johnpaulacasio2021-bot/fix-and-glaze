# Fix and Glaze Website — Setup & Launch Guide

Your project is scaffolded and ready to build! Here's what's been created and what to do next.

---

## ✅ Files Created

### Documentation
- **CLAUDE.md** — Coding standards, tech stack, file structure
- **PRD.md** — Product requirements & feature specs
- **plan.md** — Step-by-step implementation plan
- **SECURITY.md** — Non-negotiable security rules
- **CONTENT_UPDATE_MANUAL.md** — Guide for client to update content independently
- **SETUP.md** — This file

### Configuration
- **.env.example** — Environment variables template
- **.gitignore** — Files to exclude from git

### Content Files (JSON)
- **public/data/services.json** — 5 services with descriptions (client-editable)
- **public/data/projects.json** — 5 sample projects with placeholders (client-editable)
- **public/data/testimonials.json** — 4 sample testimonials (client-editable)

---

## 🚀 Next Steps to Launch Today

### Step 1: Initialize Project (5 mins)
```bash
# Create Next.js project
npx create-next-app@latest fix-and-glaze --typescript --tailwind
cd fix-and-glaze

# Install additional dependencies
npm install react-hook-form zod nodemailer html-escaper
npm install --save-dev @types/nodemailer
```

### Step 2: Copy Files Into Project
- Copy `CLAUDE.md`, `PRD.md`, `plan.md`, `SECURITY.md` → root
- Copy `CONTENT_UPDATE_MANUAL.md` → root
- Copy `.env.example` → root
- Copy `public/data/*.json` → your-project/public/data/
- Update `.gitignore` with our version

### Step 3: Set Up Environment
```bash
cp .env.example .env.local
# Edit .env.local and add:
# - SMTP credentials (Gmail: https://myaccount.google.com/apppasswords)
# - Contact email: francis.antonio@rocketmail.com
# - Phone: 0432 800 802
# - Service area: [placeholder - client to fill in later]
```

### Step 4: Create Folder Structure
```
app/
  ├── layout.tsx
  ├── page.tsx (Home)
  ├── about/ → page.tsx
  ├── services/ → page.tsx
  ├── projects/ → page.tsx & [slug]/page.tsx
  ├── contact/ → page.tsx
  ├── api/contact/ → route.ts
  └── (legal)/ → privacy/page.tsx, terms/page.tsx

components/
  ├── Header.tsx
  ├── Footer.tsx
  ├── Hero.tsx
  ├── ServiceCard.tsx
  ├── ProjectCard.tsx
  └── ContactForm.tsx

lib/
  ├── constants.ts
  ├── types.ts
  └── email.ts

public/
  ├── data/
  │   ├── services.json ✅
  │   ├── projects.json ✅
  │   └── testimonials.json ✅
  └── images/
      └── projects/ (placeholder images go here)
```

### Step 5: Build Core Components

**lib/constants.ts**
```typescript
export const BRAND = {
  name: "Fix and Glaze",
  tagline: "Repair. Replace. Refresh.",
  phone: "0432 800 802",
  email: "francis.antonio@rocketmail.com",
  colors: {
    primary: "#0891B2", // Cyan
    secondary: "#1E3A8A", // Navy
    accent: "#DC2626", // Red
  },
};
```

**components/Header.tsx**
- Logo, nav links, mobile menu, CTA button
- Use Tailwind for responsive design

**components/Footer.tsx**
- Brand info, links, contact details, copyright

**app/page.tsx** (Home)
- Hero section
- Service cards (load from services.json)
- Why Choose Us
- Testimonials carousel (load from testimonials.json)
- CTA section

**app/api/contact/route.ts**
- Validate form data with Zod
- Send email with Nodemailer
- Return success/error response

### Step 6: Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Test contact form
# Verify email sends
# Check responsive design on mobile (Chrome DevTools)
```

### Step 7: Deploy to Vercel
```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial Fix and Glaze website"
git branch -M main
git remote add origin https://github.com/[your-username]/fix-and-glaze.git
git push -u origin main

# Then deploy to Vercel
# 1. Go to https://vercel.com
# 2. Connect GitHub repo
# 3. Add environment variables (SMTP, phone, email)
# 4. Deploy!
```

### Step 8: Verify & Share
- [ ] Website live on Vercel domain
- [ ] Contact form works
- [ ] Portfolio loads with placeholders
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Share Vercel URL with client
- [ ] Share CONTENT_UPDATE_MANUAL.md with client

---

## 📋 Reference: What Each File Does

| File | Purpose | Client Can Edit? |
|------|---------|-----------------|
| services.json | Service descriptions | ✅ Yes |
| projects.json | Portfolio projects | ✅ Yes |
| testimonials.json | Customer reviews | ✅ Yes |
| CLAUDE.md | Code standards | ❌ No |
| PRD.md | Product spec | ❌ No |
| plan.md | Build plan | ❌ No |
| SECURITY.md | Security rules | ❌ No |
| .env.local | Secrets | ❌ No (never commit) |

---

## 🎨 Brand Colors (Use in Tailwind)

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#0891B2',
        'brand-navy': '#1E3A8A',
        'brand-red': '#DC2626',
      },
    },
  },
};
```

---

## 📧 Email Setup (Gmail Example)

1. Enable 2-factor authentication on Gmail
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and "Windows Computer" (or your setup)
4. Copy the generated 16-character password
5. Add to .env.local:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   ```

---

## ✨ Pages to Build (Priority Order)

1. **Home** — Hero, services overview, testimonials, CTA (highest impact)
2. **Services** — Full service descriptions
3. **Projects** — Portfolio gallery
4. **Contact** — Form + contact info
5. **About** — Company story & values
6. **Legal** — Privacy & Terms (use provided copy)

---

## 🚦 Launch Checklist

- [ ] Project initialized with Next.js
- [ ] Dependencies installed
- [ ] .env.local configured with SMTP + contact info
- [ ] All pages built and responsive
- [ ] Contact form tested (email received)
- [ ] JSON files load correctly
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Lighthouse score 85+
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Live URL working
- [ ] CONTENT_UPDATE_MANUAL.md shared with client

---

## 💡 Tips

- **Start simple** — Get core pages live, add polish later
- **Test mobile first** — Use Chrome DevTools device toolbar
- **Commit often** — Small, focused commits are easier to review
- **Use placeholders** — Real content (photos, testimonials) can come later
- **Client handoff** — CONTENT_UPDATE_MANUAL.md is your friend

---

## 🆘 Need Help?

Refer to:
- **PRD.md** — What the website should do
- **plan.md** — Step-by-step build instructions
- **CLAUDE.md** — Coding rules & file structure
- **CONTENT_UPDATE_MANUAL.md** — For client support

---

**Target: Live on Vercel today!** 🎉

Good luck! 🚀

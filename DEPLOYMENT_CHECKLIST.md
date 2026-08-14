# Deployment Checklist — Fix and Glaze Website

**Target Launch:** Today on Vercel  
**Status:** ✅ Code Ready for Deployment

---

## ✅ Pre-Deployment (COMPLETED)

### Code & Structure
- [x] Next.js 14 project initialized
- [x] TypeScript configured
- [x] Tailwind CSS set up with brand colors
- [x] All pages created (Home, Services, About, Contact, Privacy, Terms)
- [x] Contact form implemented with validation
- [x] Email service (Nodemailer) configured
- [x] Responsive design (mobile, tablet, desktop)
- [x] Header & Footer components
- [x] JSON data files created (services, projects, testimonials)

### Quality Assurance
- [x] TypeScript type-check passes
- [x] ESLint configured
- [x] Production build succeeds
- [x] No console errors
- [x] Git initialized & committed

---

## 📋 DEPLOYMENT STEPS (TO DO TODAY)

### Step 1: Create GitHub Repository

```bash
# You should already have the project locally with git initialized
# Now create a new repo on GitHub and push

git remote add origin https://github.com/[YOUR-USERNAME]/fix-and-glaze.git
git branch -M main
git push -u origin main
```

**Action:** 
- [ ] Create new GitHub repository (public or private, your choice)
- [ ] Run commands above to push code
- [ ] Verify on GitHub that code is pushed

---

### Step 2: Deploy to Vercel

1. **Go to:** https://vercel.com
2. **Sign in** with GitHub account
3. **Click:** "New Project"
4. **Select:** Repository "fix-and-glaze" from dropdown
5. **Configure:**
   - Framework: Next.js (auto-detected)
   - Root Directory: . (current)
   - Build command: `npm run build` (default)
   - Output directory: `.next` (default)
6. **Environment Variables** — Add these:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=[your Gmail address]
   SMTP_PASS=[16-char app password]
   SMTP_FROM=noreply@fixandglaze.com.au
   SMTP_TO=francis.antonio@rocketmail.com
   NEXT_PUBLIC_PHONE=0432 800 802
   NEXT_PUBLIC_EMAIL=francis.antonio@rocketmail.com
   NEXT_PUBLIC_SERVICE_AREA=Sydney Metropolitan Area
   NEXT_PUBLIC_SITE_URL=[Vercel domain - will update after]
   ```
7. **Click:** "Deploy"
8. **Wait:** ~2-3 minutes for initial build

**Action:**
- [ ] GitHub repo created and code pushed
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Initial deployment started
- [ ] Deployment complete (green checkmark on Vercel)

**Result:** You'll get a Vercel domain like `fix-and-glaze-abc123.vercel.app`

---

### Step 3: Test Live Website

Once deployment completes:

1. **Open Vercel domain** in browser (e.g., `https://fix-and-glaze-abc123.vercel.app`)
2. **Test pages:**
   - [ ] Home page loads with services, testimonials, CTAs
   - [ ] Services page displays all 5 services
   - [ ] About page loads
   - [ ] Contact form is accessible
3. **Test contact form:**
   - [ ] Fill out form with test data
   - [ ] Click "Send My Enquiry"
   - [ ] See success message
   - [ ] Check email inbox (should receive email)
4. **Test mobile:** 
   - [ ] Responsive design on phone/tablet (use DevTools)
   - [ ] Mobile nav menu opens/closes
   - [ ] Buttons are clickable

**Action:**
- [ ] Visit live Vercel domain
- [ ] Fill out test contact form
- [ ] Verify email received
- [ ] Test mobile responsiveness

---

### Step 4: Share with Client

1. **Vercel Live URL:**
   ```
   https://fix-and-glaze-[your-id].vercel.app
   ```

2. **Email client with:**
   - Live URL
   - Username/password for Vercel (if needed for updates)
   - Guide: `CONTENT_UPDATE_MANUAL.md` (instructions to update content)
   - Note: This is a temporary domain until they register a custom domain

**Action:**
- [ ] Share Vercel URL with client
- [ ] Share CONTENT_UPDATE_MANUAL.md
- [ ] Note that this is preview URL (temporary)

---

### Step 5: Custom Domain (After Client Registration)

Once client registers a domain (e.g., `fixandglaze.com.au`):

1. **Go to:** Vercel → Project Settings → Domains
2. **Add Domain:** Enter their domain
3. **Follow:** DNS configuration instructions
4. **Wait:** ~5-10 minutes for DNS propagation
5. **Verify:** Domain now points to live site

**Action (Future):**
- [ ] Domain registered by client
- [ ] Domain added to Vercel
- [ ] DNS configured
- [ ] Test custom domain works

---

## 🔐 Security Checklist

Before going live:

- [x] `.env.local` is in `.gitignore` (secrets not committed)
- [x] `.env.example` is template-only
- [x] Environment variables set in Vercel dashboard (not in git)
- [x] SMTP credentials are app-specific (not main password)
- [x] Form validates input server-side
- [x] No hardcoded secrets in code

---

## 📧 Email Setup (Important!)

For contact form to work:

1. **Gmail Account (if using Gmail):**
   - Enable 2-factor authentication
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer"
   - Copy 16-character app password
   - Add to Vercel as `SMTP_PASS`

2. **Test Email:**
   - After deployment, fill out contact form on live site
   - Should receive email at `francis.antonio@rocketmail.com`
   - If no email received, check:
     - Environment variables set correctly in Vercel
     - SMTP credentials correct
     - Check spam folder

---

## 🚀 Live Launch Checklist

**Final Pre-Launch:**

- [ ] GitHub repo created with code
- [ ] Vercel deployment complete (green status)
- [ ] All environment variables set in Vercel
- [ ] Test contact form sends email successfully
- [ ] All pages accessible and responsive
- [ ] No console errors in browser DevTools
- [ ] Client notified with live URL

**Post-Launch (Next Steps):**

- [ ] Client gathers project photos for portfolio
- [ ] Client collects real customer testimonials
- [ ] Client registers custom domain
- [ ] Domain configured in Vercel
- [ ] Client learns to update content (using CONTENT_UPDATE_MANUAL.md)
- [ ] Set up Google Business Profile
- [ ] Optimize for local SEO

---

## ❓ Troubleshooting

### Contact form doesn't send email
- Check Vercel environment variables
- Verify SMTP credentials in Vercel dashboard
- Check spam folder
- Try test form submission again

### Website looks different on mobile
- Open DevTools (F12) and toggle device toolbar
- Check responsive breakpoints in Tailwind classes
- Clear browser cache (Ctrl+Shift+Delete)

### Domain not working after adding to Vercel
- Wait 5-10 minutes for DNS propagation
- Check DNS settings in domain registrar
- Verify domain added in Vercel dashboard

### Git push to GitHub fails
- Make sure GitHub repo is created
- Run: `git remote -v` to verify origin
- Make sure main branch is set: `git branch -M main`

---

## 📞 Support

For questions or issues during deployment:

**Documentation:**
- README.md — Setup & testing
- CLAUDE.md — Tech stack & coding rules
- CONTENT_UPDATE_MANUAL.md — Client guide
- PRD.md — Feature specifications

**Contact:**
- Phone: 0432 800 802
- Email: francis.antonio@rocketmail.com

---

## Timeline

- **Now:** Deploy to Vercel  
- **Today:** Test & share with client  
- **This week:** Client registers domain  
- **Next:** Client gathers project photos  
- **Next:** Domain configured & go live on custom URL

---

**Status:** ✅ Ready for deployment  
**Build:** ✅ Successful  
**Code:** ✅ Committed to git  
**Next:** Push to GitHub & deploy to Vercel

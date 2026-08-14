# Fix and Glaze Website — Content Update Manual

Welcome! This guide shows you how to update your website content **without any coding knowledge**.

All your content lives in simple **JSON files** that you can edit like a word document.

---

## Where to Find Your Content Files

Location: `public/data/`

There are 3 main files you can edit:

1. **services.json** — Your service descriptions
2. **projects.json** — Your portfolio / completed projects
3. **testimonials.json** — Customer testimonials

---

## How to Edit Files

### Option 1: Edit Online (Recommended for Beginners)

1. Go to GitHub: https://github.com/[your-repo-name]
2. Navigate to `public/data/` folder
3. Click on a file (e.g., `services.json`)
4. Click the ✏️ **Edit** button (top right)
5. Make changes
6. Click **Commit changes** at the bottom
7. **Wait 1-2 minutes** — your website updates automatically!

### Option 2: Edit Locally (For Advanced Users)

1. Download/clone the project on your computer
2. Open `public/data/services.json` in any text editor (VS Code, Notepad++, etc.)
3. Make changes
4. Save the file
5. Open Terminal/Command Prompt and run:
   ```bash
   git add public/data/services.json
   git commit -m "Update services"
   git push origin main
   ```
6. **Wait 1-2 minutes** — your website updates automatically!

---

## File Format

All files use **JSON** format. JSON is just structured text with a specific pattern.

**Basic rules:**
- Use **double quotes** `"` (not single quotes `'`)
- **Commas** separate items (no comma after the last item)
- **Curly braces** `{}` group objects
- **Square brackets** `[]` group lists

---

## 1. Updating Services (services.json)

### What This Controls
- Service cards on the Home page
- Full service descriptions on the Services page
- Service options in the Contact form

### Example Structure
```json
{
  "services": [
    {
      "id": "window-installation",
      "title": "Window Installation & Replacement",
      "shortDescription": "Upgrade your home with energy-efficient windows.",
      "fullDescription": "We supply and install quality window frames in aluminium, uPVC, or timber...",
      "icon": "window",
      "materials": ["uPVC", "Aluminium", "Timber"],
      "idealFor": "Homeowners wanting energy efficiency and security upgrades",
      "benefits": ["Improve insulation", "Reduce noise", "Enhance security"]
    }
  ]
}
```

### How to Edit

**Change a service description:**
1. Open `services.json`
2. Find the service (by `"title"`)
3. Update the `"fullDescription"` text
4. Save and commit

**Add a new service:**
1. Copy an existing service block
2. Paste it after the last service
3. Change the `"id"` (unique name, no spaces)
4. Change `"title"`, `"shortDescription"`, etc.
5. Add a comma after the previous service (before the new one)
6. Save and commit

**Example: Adding a new service**
```json
{
  "services": [
    {
      "id": "window-installation",
      "title": "Window Installation & Replacement",
      ...
    },
    {
      "id": "mirror-installation",  // ← New service
      "title": "Mirror Installation",
      "shortDescription": "Professional mirror fitting...",
      ...
    }
  ]
}
```

---

## 2. Updating Projects (projects.json)

### What This Controls
- Portfolio gallery on Projects page
- Project detail pages
- Before/after images showcase

### Example Structure
```json
{
  "projects": [
    {
      "id": "project-001",
      "slug": "residential-window-replacement-sydney",
      "title": "Residential Window Replacement — Sydney",
      "serviceType": "window-installation",
      "location": "Bondi, NSW",
      "clientType": "Residential",
      "shortDescription": "Complete window replacement in 4-bedroom home",
      "challenge": "Old timber frames were drafty and hard to operate",
      "solution": "Installed new aluminium frames with double glazing",
      "result": "Home now warmer, quieter, and more secure",
      "images": [
        "/images/projects/project-001-before.jpg",
        "/images/projects/project-001-after.jpg"
      ]
    }
  ]
}
```

### How to Edit

**Update a project description:**
1. Open `projects.json`
2. Find the project by `"title"`
3. Update text fields (challenge, solution, result, etc.)
4. Save and commit

**Add a new project:**
1. Copy an existing project block
2. Paste after the last project
3. Create new `"id"` (e.g., `project-002`)
4. Create new `"slug"` (lowercase, hyphens, unique)
5. Update all fields with your project details
6. Point to your project images in `"images"` array
7. Add comma after previous project
8. Save and commit

**Important:** Make sure image paths exist in `public/images/projects/`

---

## 3. Updating Testimonials (testimonials.json)

### What This Controls
- Customer testimonials on Home page
- Review carousel

### Example Structure
```json
{
  "testimonials": [
    {
      "id": "testimonial-001",
      "quote": "Fix and Glaze did an amazing job on our windows. Professional, tidy, and done on time!",
      "author": "Sarah M.",
      "role": "Homeowner",
      "location": "Bondi",
      "rating": 5
    }
  ]
}
```

### How to Edit

**Add a new testimonial:**
1. Open `testimonials.json`
2. Copy an existing testimonial block
3. Paste after the last testimonial
4. Update:
   - `"id"` — unique identifier
   - `"quote"` — customer's actual words
   - `"author"` — first name + initial (e.g., "John D.")
   - `"role"` — "Homeowner" or "Business Owner"
   - `"location"` — suburb name (optional)
   - `"rating"` — number 1-5 (5 stars = excellent)
5. Add comma after previous testimonial
6. Save and commit

---

## 4. Uploading Images

### Where Images Go
- Portfolio images: `public/images/projects/`
- Service icons: `public/images/icons/`
- Hero images: `public/images/`

### How to Upload

**Method 1: GitHub Web Interface**
1. Go to GitHub > `public/images/projects/`
2. Click **Add file** → **Upload files**
3. Drag & drop your images
4. Commit changes

**Method 2: Local Upload**
1. Save your image in the correct folder
2. Run in Terminal:
   ```bash
   git add public/images/
   git commit -m "Add new project photos"
   git push origin main
   ```

### Image Naming Convention
Use clear, descriptive names:
- ✅ `bondi-window-replacement-before.jpg`
- ✅ `project-001-after.jpg`
- ❌ `photo1.jpg`
- ❌ `IMG_123456.jpg`

### Image Formats
- **JPG** — Photos (smallest file size)
- **PNG** — Graphics with transparency
- **WebP** — Modern format (best quality & size)

### Image Size
- Max width: 2000px (for web)
- Recommended: 800-1200px width
- File size: Under 200KB per image

---

## 5. Making Changes Go Live

### The Process

1. **Edit a JSON file** (services, projects, or testimonials)
2. **Commit the change** (via GitHub or Terminal)
3. **Wait 1-2 minutes** — Vercel auto-deploys
4. **Visit your website** — See the changes live!

No refresh needed. Your website automatically updates.

### Commit Message Examples
```
"Add new testimonial from Sarah M."
"Update window installation description"
"Add Bondi window replacement project"
"Fix typo in door service description"
```

---

## 6. Editing Other Content

### Business Hours & Service Area
File: `app/components/Footer.tsx` (requires basic code knowledge)
Or email me: francis.antonio@rocketmail.com

### Contact Email or Phone Number
File: `lib/constants.ts`
Or email me: francis.antonio@rocketmail.com

### Home Page Banner or About Section
File: `app/page.tsx` or `app/about/page.tsx`
Or email me: francis.antonio@rocketmail.com

---

## Common Tasks

### Task 1: Add a New Completed Project
1. Take before/after photos
2. Upload to `public/images/projects/`
3. Open `projects.json`
4. Add new project entry (copy/paste template above)
5. Reference image paths
6. Commit with message: "Add [Project Name] to portfolio"

### Task 2: Get a New Testimonial
1. Ask a happy customer for feedback (in person or email)
2. Open `testimonials.json`
3. Add new testimonial entry
4. Commit with message: "Add testimonial from [Name]"

### Task 3: Update a Service Description
1. Open `services.json`
2. Find the service by name
3. Edit the `"fullDescription"` text
4. Commit with message: "Update [Service Name] description"

### Task 4: Change Phone Number or Email
Email me: francis.antonio@rocketmail.com
(Requires editing code file)

---

## Troubleshooting

### Changes Not Appearing?
1. **Wait 2-3 minutes** — Vercel takes time to rebuild
2. **Hard refresh browser** — Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. **Check commit message** — Look at GitHub to confirm change was saved
4. **Check for errors** — Look for red squiggly lines in JSON editor

### JSON Error: "Unexpected character"
- Check for missing commas between items
- Make sure quotes are all double quotes `"`
- Make sure no trailing comma after last item

### Image Not Showing?
- Check file path in JSON is correct
- Make sure image file exists in `public/images/projects/`
- Try refreshing browser

### Still Having Issues?
Contact me:
- **Phone:** 0432 800 802
- **Email:** francis.antonio@rocketmail.com

---

## Tips for Success

✅ **DO:**
- Use clear, descriptive image names
- Keep project descriptions brief (2-3 sentences max)
- Include before/after photos for impact
- Ask satisfied customers for testimonials
- Commit changes regularly

❌ **DON'T:**
- Edit code files (unless instructed)
- Use special characters in JSON (quotes, apostrophes)
- Upload images larger than 2MB
- Delete entire project entries unless sure
- Commit without a descriptive message

---

## Questions?

If you're unsure about anything, ask! This manual is here to help. Text or call:

**Francis Antonio**
Phone: 0432 800 802
Email: francis.antonio@rocketmail.com

Happy updating! 🎉

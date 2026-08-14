# SECURITY.md — Non-Negotiable Rules

These rules are mandatory and must not be violated. This is not a guideline—this is the safety perimeter.

---

## Secrets & Environment Variables

### RULE 1: Never Hardcode Secrets
❌ WRONG:
```typescript
const SMTP_PASS = "my-password-123";
const API_KEY = "sk-proj-abcd1234";
```

✅ CORRECT:
```typescript
const SMTP_PASS = process.env.SMTP_PASS;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
```

**Consequence:** If a secret is hardcoded and pushed to GitHub, it is compromised. Rotate it immediately and commit a fix.

---

### RULE 2: .env.local Must Be In .gitignore
- ✅ .gitignore must include `.env.local`
- ✅ .env.example serves as template (can be committed)
- ❌ Never commit .env.local, .env.*.local, or .env

**Check before every commit:**
```bash
git status
# Should NOT show any .env* files
```

---

### RULE 3: Use .env.example as Template Only
- Rename: `.env.example` → `.env.local` (locally)
- Fill in real values
- Never push .env.local to GitHub

**For Vercel deployment:**
- Add environment variables via Vercel dashboard (Settings → Environment Variables)
- Do NOT push secrets to git

---

## API & Form Security

### RULE 4: Validate All Inputs (Server-Side)
Client-side validation is for UX. Server-side is for security.

```typescript
// app/api/contact/route.ts
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  message: z.string().min(10).max(5000),
});

export async function POST(req: Request) {
  const body = await req.json();
  
  // Validate server-side
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return Response.json({ error: "Invalid input" }, { status: 400 });
  }

  // Process validated data
  const { name, email, phone, message } = result.data;
  // ...
}
```

---

### RULE 5: Sanitize Email Content
Never directly inject user input into email HTML.

```typescript
// ❌ WRONG - XSS risk
const emailBody = `User message: ${message}`;

// ✅ CORRECT - Escaped
const emailBody = `User message: ${escapeHtml(message)}`;
```

Use a library like `html-escaper` or Nodemailer's built-in escaping.

---

### RULE 6: Rate Limit Contact Form
Prevent spam/abuse by rate limiting form submissions.

```typescript
// Future: Add rate limiting middleware
// e.g., using Redis + Upstash or simple in-memory tracker
```

---

## Database & Data Storage

### RULE 7: Treat JSON Files as Public
Since `/public/data/` files are served as static assets:
- Do NOT store sensitive data in public/data/
- Do NOT include personal info, email addresses, or credentials
- These files are readable by anyone

For the content management system:
- `services.json` ✅ Public (service descriptions)
- `projects.json` ✅ Public (portfolio)
- `testimonials.json` ✅ Public (customer testimonials)
- Credentials, API keys ❌ Never in public/

---

## HTTPS & Transport

### RULE 8: HTTPS Only in Production
- Vercel provides free HTTPS certificates
- All production traffic MUST use HTTPS
- Local development can use HTTP (localhost)

---

## File Uploads (Future)

If adding image uploads later:

### RULE 9: Validate File Types
```typescript
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
if (!ALLOWED_TYPES.includes(file.type)) {
  throw new Error("Invalid file type");
}
```

### RULE 10: Limit File Size
```typescript
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
if (file.size > MAX_FILE_SIZE) {
  throw new Error("File too large");
}
```

---

## Dependency Management

### RULE 11: Keep Dependencies Updated
- Run `npm audit` monthly
- Address vulnerabilities immediately
- Pin versions in package.json (avoid `*` or `^`)

```bash
npm audit
npm audit fix
```

---

## Logging & Monitoring

### RULE 12: Never Log Sensitive Data
```typescript
// ❌ WRONG
console.log("User email:", userEmail);
console.log("Phone:", phoneNumber);

// ✅ CORRECT
console.log("Contact form submitted from:", suburb);
console.log("Service type:", serviceType);
```

---

## Third-Party Integrations

### RULE 13: Verify OAuth & Third-Party Credentials
If adding Google Sign-In, Stripe, etc.:
- Store credentials in .env only
- Never hardcode client IDs or secrets
- Regularly rotate API keys
- Use OAuth 2.0 with PKCE for web apps

---

## Incident Response

If a secret is exposed:

1. **Immediately** rotate the credential (new API key, new password, etc.)
2. **Commit** a fix removing the hardcoded value
3. **Update** .env.local with new credentials
4. **Do NOT** try to hide it in git history—assume it's compromised
5. **Alert** any affected services (email provider, database, etc.)

---

## Checklist Before Production

- [ ] `.env.local` is in `.gitignore`
- [ ] No hardcoded secrets in code
- [ ] Contact form validates input server-side
- [ ] Email sanitized before sending
- [ ] HTTPS enabled on Vercel
- [ ] Environment variables set in Vercel dashboard
- [ ] `npm audit` passes (no high/critical vulnerabilities)
- [ ] No console logs of PII (personal identifiable info)
- [ ] Rate limiting on contact form (if high traffic expected)

---

## Enforcement

These rules are checked in `/review` before every commit. If violated, the commit is rejected.

If you must deviate from these rules, document why in `SECURITY.md` and get explicit approval from the project lead.

# 🚀 Deployment Checklist

## ✅ Pre-Deployment Verification

### Build Status

- [x] **Production build successful** - `npm run build` completes without errors
- [x] **TypeScript compilation** - No type errors
- [x] **"use client" directives** - Added where needed for client components
- [x] **Next.js configuration** - Properly configured

### Code Quality

- [x] **ESLint** - No critical linting errors
- [x] **Environment variables** - Properly configured with `.env.local.example`
- [x] **Git ignore** - `.env.local` and sensitive files excluded

### Database Setup

- [ ] **Supabase project created** - Production database ready
- [ ] **Database migrations run** - Schema deployed to production
- [ ] **Row Level Security enabled** - All RLS policies active
- [ ] **Sample data** - (Optional) Test data loaded

---

## 🔐 Environment Variables Setup

### Required for Production

Create these environment variables in your deployment platform (Vercel/Netlify/etc.):

```bash
# Supabase Configuration
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-production-service-role-key
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-production-anon-key

# NextAuth Configuration
NEXTAUTH_SECRET=your-production-secret-here
NEXTAUTH_URL=https://your-production-domain.com

# Optional: Email Configuration
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your-email@gmail.com
# SMTP_PASSWORD=your-app-password
# SMTP_FROM=noreply@axiomtracker.com
```

### How to Generate Secrets

**NEXTAUTH_SECRET:**

```bash
# Option 1: Using OpenSSL
openssl rand -base64 32

# Option 2: Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Option 3: Online
# Visit: https://generate-secret.vercel.app/32
```

---

## 📦 Deployment Platforms

### Option 1: Vercel (Recommended)

**Why Vercel?**

- Built by Next.js creators
- Zero-config deployment
- Automatic HTTPS
- Edge network CDN
- Free tier available

**Steps:**

1. **Install Vercel CLI** (optional)

   ```bash
   npm i -g vercel
   ```

2. **Deploy via GitHub** (Recommended)

   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Deploy via CLI**

   ```bash
   vercel
   ```

4. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required variables from above
   - Redeploy if needed

**Vercel Configuration:**

- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Development Command: `npm run dev`

### Option 2: Netlify

1. **Install Netlify CLI**

   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**

   ```bash
   netlify deploy --prod
   ```

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables in Netlify dashboard

### Option 3: Self-Hosted (VPS/Docker)

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start production server**

   ```bash
   npm run start
   ```

3. **Use PM2 for process management**
   ```bash
   npm i -g pm2
   pm2 start npm --name "axiom-tracker" -- start
   pm2 save
   pm2 startup
   ```

---

## 🗄️ Database Deployment

### Supabase Production Setup

1. **Create Production Project**

   - Go to [app.supabase.com](https://app.supabase.com)
   - Create new project
   - Choose a strong database password
   - Select closest region to your users

2. **Run Migrations**

   - Go to SQL Editor in Supabase dashboard
   - Copy content from `supabase/migrations/001_initial_schema.sql`
   - Execute the SQL
   - Verify all tables created successfully

3. **Enable Row Level Security**

   - Check that RLS is enabled on all tables
   - Verify policies are active
   - Test with different user roles

4. **Get API Credentials**

   - Go to Project Settings → API
   - Copy `Project URL` → Use as `SUPABASE_URL`
   - Copy `anon/public` key → Use as `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Copy `service_role` key → Use as `SUPABASE_SERVICE_ROLE_KEY` (Keep secret!)

5. **Optional: Add Sample Data**
   - Run `supabase/migrations/002_sample_data.sql`
   - Test login with sample credentials

---

## 🔍 Post-Deployment Verification

### Functionality Checks

- [ ] **Homepage loads** - Landing page displays correctly
- [ ] **Login page works** - `/login` accessible
- [ ] **Signup page works** - `/signup` accessible
- [ ] **Authentication** - Can create account and login
- [ ] **Dashboard** - Protected routes require authentication
- [ ] **Database connection** - Data loads from Supabase
- [ ] **Images load** - All assets display properly
- [ ] **Mobile responsive** - Works on mobile devices
- [ ] **HTTPS enabled** - Secure connection active

### Performance Checks

- [ ] **Lighthouse score** - Run performance audit
- [ ] **Page load time** - < 3 seconds
- [ ] **Core Web Vitals** - All metrics in green
- [ ] **Error monitoring** - No console errors

### Security Checks

- [ ] **Environment variables** - Not exposed in client
- [ ] **HTTPS only** - HTTP redirects to HTTPS
- [ ] **API keys secure** - Service role key not in client code
- [ ] **CORS configured** - Only allowed origins
- [ ] **Rate limiting** - Consider adding for API routes

---

## 🐛 Troubleshooting

### Build Errors

**Error: "useState" needs "use client"**

- ✅ **Fixed** - Added `"use client"` directive to `app/page.tsx`

**Error: Module not found**

- Check all imports are correct
- Run `npm install` to ensure dependencies installed

**Error: Environment variable undefined**

- Verify all required env vars are set
- Restart dev server after adding env vars
- For client-side vars, use `NEXT_PUBLIC_` prefix

### Runtime Errors

**Database connection failed**

- Verify Supabase URL and keys are correct
- Check Supabase project is active
- Ensure RLS policies allow access

**Authentication not working**

- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Ensure database has users table

**Images not loading**

- Check image URLs are accessible
- Verify Next.js image optimization settings
- Consider using CDN for static assets

---

## 📊 Monitoring & Analytics

### Recommended Tools

1. **Vercel Analytics** (if using Vercel)

   - Built-in performance monitoring
   - Real user metrics
   - Free tier available

2. **Sentry** - Error tracking

   ```bash
   npm install @sentry/nextjs
   ```

3. **Google Analytics** - User analytics

   - Add GA4 tracking code
   - Monitor user behavior

4. **Supabase Dashboard** - Database monitoring
   - Query performance
   - Database size
   - Active connections

---

## 🔄 Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## ✅ Final Checklist

Before going live:

- [ ] All environment variables configured
- [ ] Production database deployed and tested
- [ ] Build completes successfully
- [ ] All pages load correctly
- [ ] Authentication works end-to-end
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Error monitoring setup
- [ ] Backup strategy in place
- [ ] Domain configured (if custom domain)

---

## 🎉 You're Ready to Deploy!

Your Axiom Tracker application is now ready for production deployment. Choose your preferred platform and follow the steps above.

**Need Help?**

- Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- Review [Vercel Documentation](https://vercel.com/docs)
- Check [Supabase Guides](https://supabase.com/docs)

---

**Last Updated:** December 9, 2025
**Build Status:** ✅ Production Ready

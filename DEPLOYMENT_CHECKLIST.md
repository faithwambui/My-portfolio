# ✅ Portfolio Deployment Checklist

## Before You Deploy

### 1. Personal Information
- [ ] Add your profile photo to Hero section (`src/components/Hero.jsx` line 65-80)
- [ ] Add your profile photo to About section (`src/components/About.jsx` line 71-81)
- [ ] Add GitHub URL (`src/components/Hero.jsx` and `Contact.jsx`)
- [ ] Add LinkedIn URL (same files)
- [ ] Add Twitter URL (same files)
- [ ] Verify email: faithnyaguthii4615@gmail.com
- [ ] Verify phone: +254 798 983 272

### 2. Projects
- [ ] Review all 8 sample projects in `Projects.jsx`
- [ ] Add your actual project GitHub links
- [ ] Add project demo/live links
- [ ] Replace sample projects with your real projects (optional)

### 3. Contact Form
- [ ] Set up EmailJS or Formspree
- [ ] Add form submission logic to `Contact.jsx`
- [ ] Test form submission

### 4. Resume/CV
- [ ] Add your CV PDF to `public` folder
- [ ] Uncomment download button in `Contact.jsx`
- [ ] Update CV path

### 5. Content Review
- [ ] Read all text content
- [ ] Update any generic descriptions
- [ ] Verify all links work
- [ ] Check for typos

## Installation & Testing

### Local Setup
```bash
cd faith-portfolio
npm install
npm run dev
```

### Testing Checklist
- [ ] All sections load properly
- [ ] Animations work smoothly
- [ ] Navigation works (smooth scroll)
- [ ] Mobile responsive design
- [ ] Custom cursor on desktop
- [ ] All hover effects
- [ ] Contact form fields
- [ ] Social media links (when added)

## Deployment Steps

### Option 1: Vercel (Easiest)

#### Via GitHub
1. [ ] Push code to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

2. [ ] Go to [vercel.com](https://vercel.com)
3. [ ] Click "New Project"
4. [ ] Import your GitHub repo
5. [ ] Click "Deploy" (Vercel auto-detects Vite)
6. [ ] Done! Your site is live

#### Via CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
1. [ ] Build the project: `npm run build`
2. [ ] Drag `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. [ ] Or connect GitHub for auto-deployment

### Option 3: GitHub Pages
```bash
npm install gh-pages --save-dev
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

## Post-Deployment

### Must Do
- [ ] Test live site on multiple devices
- [ ] Test on different browsers
- [ ] Verify all links work
- [ ] Check loading speed
- [ ] Test contact form
- [ ] Share with friends for feedback

### Optional but Recommended
- [ ] Add custom domain
- [ ] Set up Google Analytics
- [ ] Add SSL certificate (Vercel does this automatically)
- [ ] Create sitemap for SEO
- [ ] Update LinkedIn with portfolio link
- [ ] Update GitHub profile with portfolio link

## SEO Optimization

- [ ] Update meta description in `index.html`
- [ ] Add Open Graph image
- [ ] Update Twitter card meta tags
- [ ] Submit to Google Search Console

## Maintenance

### Regular Updates
- [ ] Add new projects as you complete them
- [ ] Update skills section with new technologies
- [ ] Refresh experience section
- [ ] Keep CV/resume current

### Every 3-6 Months
- [ ] Review and update content
- [ ] Check for broken links
- [ ] Update dependencies: `npm update`
- [ ] Refresh screenshots/images

## Launch Strategy

### Week 1
- [ ] Share on LinkedIn
- [ ] Share on Twitter
- [ ] Email to potential employers/clients
- [ ] Add to job applications

### Ongoing
- [ ] Include in email signature
- [ ] Add to GitHub profile README
- [ ] Share when networking
- [ ] Include in resume/CV

## Tracking Success

Monitor these metrics:
- Unique visitors
- Time on site
- Contact form submissions
- Social media clicks
- Job inquiries

## Need Help?

Common commands:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm install          # Install dependencies
```

Troubleshooting:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear browser cache
4. Check console for errors

---

🎉 **You're ready to launch!**

Remember: Your portfolio is a living document. Keep it updated, add new projects, and don't be afraid to iterate on the design.

Good luck! 🚀

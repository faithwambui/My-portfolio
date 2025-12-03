# 🚀 Portfolio Setup Guide

This guide will walk you through setting up and customizing your stunning portfolio website.

## 📦 Quick Start

### Step 1: Install Dependencies

```bash
cd faith-portfolio
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000`

## 🎨 Essential Customizations

### 1. Add Your Profile Photo

**Location 1: Hero Section**
- Open `src/components/Hero.jsx`
- Find lines 65-80 (commented out)
- Uncomment the code
- Replace `/path-to-your-image.jpg` with your image path

```jsx
<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, type: "spring" }}
  className="mb-8 inline-block"
>
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
    <img 
      src="/your-photo.jpg" 
      alt="Faith Nyaguthii Wambui"
      className="relative w-48 h-48 rounded-full object-cover border-4 border-purple-500/50 shadow-2xl"
    />
  </div>
</motion.div>
```

**Location 2: About Section**
- Open `src/components/About.jsx`
- Find lines 71-81 (commented out)
- Uncomment and add your image

### 2. Add Your Social Media Links

**Hero Section:**
- Open `src/components/Hero.jsx`
- Find lines 112-145 (commented out)
- Replace placeholders with your actual URLs:

```jsx
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
<a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
```

**Contact Section:**
- Open `src/components/Contact.jsx`
- Find lines 111-140 (commented out)
- Add your social links

### 3. Add Project Links

- Open `src/components/Projects.jsx`
- Find the commented section around lines 195-215
- Add your GitHub and demo links for each project:

```jsx
<a href="https://github.com/yourusername/project-name" target="_blank">
<a href="https://your-demo-url.com" target="_blank">
```

### 4. Configure Contact Form

Choose one of these methods:

#### Option A: EmailJS (Recommended - Free)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Install EmailJS:
```bash
npm install @emailjs/browser
```

5. Update `src/components/Contact.jsx`:

```jsx
import emailjs from '@emailjs/browser'

const handleSubmit = (e) => {
  e.preventDefault()
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  })
  .catch((error) => {
    alert('Failed to send message. Please try again.')
    console.error(error)
  })
}
```

#### Option B: Formspree

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the form action in `src/components/Contact.jsx`:

```jsx
<form 
  onSubmit={handleSubmit}
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
```

### 5. Add Your CV/Resume

- Place your CV PDF in the `public` folder
- Open `src/components/Contact.jsx`
- Find the download button (commented near bottom)
- Uncomment and update the path:

```jsx
<a href="/your-cv.pdf" download>
  Download My CV
</a>
```

## 🎯 Customizing Projects

### Adding New Projects

Edit `src/components/Projects.jsx` and add to the `projects` array:

```jsx
{
  title: 'Your Project Name',
  category: 'data-analytics', // or 'web-development'
  level: 'beginner', // 'beginner', 'intermediate', or 'advanced'
  description: 'Project description...',
  technologies: ['Python', 'Pandas', 'Matplotlib'],
  color: 'from-purple-500 to-pink-500',
  icon: <FaChartLine />,
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
}
```

### Modifying Existing Projects

The portfolio includes 8 sample projects (6 data analytics + 2 web dev). You can:
- Edit project descriptions
- Change technologies used
- Update features
- Modify color schemes
- Replace with your actual projects

## 🎨 Color Customization

### Changing Color Scheme

The portfolio uses these gradient combinations:
- Purple to Pink: `from-purple-500 to-pink-500`
- Blue to Cyan: `from-blue-500 to-cyan-500`
- Green to Emerald: `from-green-500 to-emerald-500`

To change colors globally, update Tailwind classes throughout components.

### Custom Gradients

Add new gradients in `tailwind.config.js`:

```js
extend: {
  backgroundImage: {
    'custom-gradient': 'linear-gradient(to right, #your-color-1, #your-color-2)',
  }
}
```

## 🚀 Deployment to Vercel

### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Method 2: GitHub Integration (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 🔧 Advanced Customizations

### Changing Animations

Framer Motion animations are in each component. Common animation properties:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
```

### Modifying Layout

- **Grid Layouts**: Change `grid-cols-X` classes
- **Spacing**: Adjust `gap-X`, `p-X`, `m-X` values
- **Breakpoints**: Use `md:`, `lg:` prefixes for responsive design

### Adding New Sections

1. Create new component in `src/components/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add section to the main render
4. Add navigation item in `src/components/Navigation.jsx`

## 📱 Testing

### Desktop
- Chrome DevTools (F12)
- Test all animations
- Check custom cursor
- Verify smooth scrolling

### Mobile
- Chrome DevTools device mode
- Test on actual devices
- Verify touch interactions
- Check responsive layout

### Performance
```bash
npm run build
npm run preview
```

Check Lighthouse scores in Chrome DevTools.

## 🐛 Common Issues

### Issue: Animations not working
**Solution**: Ensure Framer Motion is installed:
```bash
npm install framer-motion
```

### Issue: Styles not applying
**Solution**: Check Tailwind is properly configured and rebuild:
```bash
npm run dev
```

### Issue: Custom cursor visible on mobile
**Solution**: Already handled in CSS, but verify in `src/index.css`

### Issue: Images not loading
**Solution**: 
- Place images in `public` folder
- Reference as `/image.jpg` (not `./public/image.jpg`)
- Or import in component: `import img from './assets/image.jpg'`

## 📊 Analytics (Optional)

Add Google Analytics:

1. Get tracking ID from Google Analytics
2. Add to `index.html` in `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🎓 Learning Resources

- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

## 💡 Tips for Success

1. **Optimize Images**: Use WebP format, compress images
2. **Test Thoroughly**: Check on multiple devices and browsers
3. **Keep it Updated**: Regularly add new projects
4. **SEO**: Update meta tags in `index.html`
5. **Performance**: Keep animations smooth, avoid heavy libraries

## 🆘 Need Help?

- Check the README.md file
- Review component comments
- Search GitHub issues for Framer Motion and React
- Contact: faithnyaguthii4615@gmail.com

---

Good luck with your portfolio! Make it shine! ✨

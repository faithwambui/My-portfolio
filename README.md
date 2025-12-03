# Faith Nyaguthii Wambui - Portfolio

A stunning, modern portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, floating cards, and professional design.

## 🚀 Features

- **Smooth Animations**: Framer Motion powered animations throughout
- **Floating Cards**: Interactive cards with hover effects and transitions
- **Custom Cursor**: Unique cursor that follows mouse movement (desktop only)
- **Responsive Design**: Looks amazing on all devices
- **Dark Mode**: Beautiful dark theme with gradient accents
- **Project Showcase**: Beginner and intermediate data analytics projects
- **Contact Form**: Ready-to-integrate contact functionality

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd faith-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🎨 Customization

### Adding Your Photo

Uncomment and update the image sections in:
- `src/components/Hero.jsx` - Line 65-80
- `src/components/About.jsx` - Line 71-81

Replace `/path-to-your-image.jpg` with your actual image path.

### Adding Social Links

Uncomment and update the social links in:
- `src/components/Hero.jsx` - Line 112-145
- `src/components/Contact.jsx` - Line 111-140

Replace placeholder URLs with your actual social media links:
- GitHub: `YOUR_GITHUB_URL`
- LinkedIn: `YOUR_LINKEDIN_URL`
- Twitter: `YOUR_TWITTER_URL`

### Adding Project Links

Update project cards in `src/components/Projects.jsx` (around line 195-215) with your actual GitHub and demo links.

### Contact Form Integration

The contact form is ready but needs a backend. You can integrate with:
- [EmailJS](https://www.emailjs.com/) - Free email service
- [Formspree](https://formspree.io/) - Simple form backend
- Your own backend API

Update the `handleSubmit` function in `src/components/Contact.jsx`.

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## 🚀 Deploying to Vercel

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. From the project directory, run:
```bash
vercel
```

3. Follow the prompts to deploy

Or connect your GitHub repository to Vercel for automatic deployments.

### Alternative: Deploy via Vercel Website

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

## 📁 Project Structure

```
faith-portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with animated intro
│   │   ├── About.jsx          # About section with info cards
│   │   ├── Skills.jsx         # Skills with progress bars
│   │   ├── Projects.jsx       # Project showcase with filters
│   │   ├── Experience.jsx     # Timeline of experience
│   │   ├── Contact.jsx        # Contact form and info
│   │   ├── Navigation.jsx     # Responsive navigation
│   │   └── Cursor.jsx         # Custom cursor component
│   ├── App.jsx                # Main app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── vite.config.js           # Vite configuration
```

## 🎯 Data Analytics Projects Included

### Beginner Projects:
1. **Sales Performance Dashboard** - Power BI analytics
2. **Customer Churn Analysis** - Python & Pandas
3. **E-commerce Product Analytics** - Web scraping & analysis

### Intermediate Projects:
4. **Social Media Sentiment Analysis** - NLP & Machine Learning
5. **Financial Market Forecasting** - Time series analysis
6. **Healthcare Data Insights** - Predictive modeling

## 🎨 Color Scheme

- Primary: Purple (#a855f7)
- Secondary: Pink (#ec4899)
- Accent: Blue (#3b82f6)
- Background: Slate (#0f172a)

## 📝 License

This project is open source and available for personal use.

## 🙏 Credits

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## 💬 Support

For questions or issues, please contact faithnyaguthii4615@gmail.com

---

Made with ❤️ by Faith Nyaguthii Wambui

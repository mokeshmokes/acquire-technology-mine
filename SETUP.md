# Acquiring Technology - Setup Guide

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** 18.x or higher
- **npm** 9.x or higher (or yarn/pnpm)
- **Git** (optional, for version control)

## 🚀 Installation Steps

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

Or if you prefer yarn:
```bash
yarn install
```

Or with pnpm:
```bash
pnpm install
```

### Step 2: Environment Variables (Optional)

Copy the example environment file:
```bash
copy .env.example .env.local
```

Edit `.env.local` with your actual values:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PHONE="+1-555-0123"
NEXT_PUBLIC_EMAIL="info@acquiringtech.com"
```

### Step 3: Start Development Server

```bash
npm run dev
```

The application will be available at **http://localhost:3000**

### Step 4: Verify Installation

Open your browser and navigate to http://localhost:3000

You should see:
✅ Premium header with Acquiring Technology logo
✅ Navigation menu with hover effects
✅ Responsive design (test by resizing window)
✅ Smooth animations

## 🔧 PowerShell Execution Policy (Windows)

If you encounter a PowerShell execution policy error, run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Then try `npm install` again.

## 🎨 Customization Guide

### Change Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#7A0019',  // Change this
    hover: '#C21838',     // Change this
    secondary: '#A10E26', // Change this
  },
}
```

### Add New Menu Item

Edit `data/navigation.ts`:

```typescript
export const mainNavigation: NavigationItem[] = [
  // Add your new item
  { 
    label: 'Your Page', 
    href: '/your-page',
  },
];
```

### Add New Course

Edit `data/navigation.ts`:

```typescript
import { YourIcon } from 'lucide-react';

export const coursesMegaMenu: MegaMenuCategory[] = [
  {
    category: 'Your Category',
    items: [
      {
        icon: YourIcon,
        title: 'New Course',
        description: 'Course description here',
        href: '/courses/new-course',
      },
    ],
  },
];
```

### Modify Action Buttons

Edit `components/navigation/ActionButtons.tsx`

## 🏗️ Build for Production

### Create Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy

The project is ready to deploy to:
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Self-hosted** with Node.js

#### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📊 Testing Checklist

After installation, test these features:

### Desktop Navigation
- [ ] Hover over "Courses" - Mega menu appears
- [ ] Hover over "Resources" - Mega menu appears
- [ ] Click "More" - Dropdown appears
- [ ] Click outside menu - Menu closes
- [ ] Press ESC - Menu closes
- [ ] Scroll down - Header becomes solid
- [ ] All links are clickable

### Mobile Navigation
- [ ] Click hamburger menu - Sidebar opens
- [ ] Click "Courses" - Accordion expands
- [ ] Click outside - Sidebar closes
- [ ] Smooth animations
- [ ] No layout shifts

### Action Buttons
- [ ] Search button opens modal
- [ ] All buttons are clickable
- [ ] Hover effects work
- [ ] Phone/WhatsApp links work

### Animations
- [ ] Menu transitions are smooth
- [ ] Logo hover animation works
- [ ] Button hover effects
- [ ] Scroll header transition
- [ ] No janky animations

### Accessibility
- [ ] Tab through navigation
- [ ] Focus states visible
- [ ] ESC closes menus
- [ ] Screen reader friendly

## 🐛 Troubleshooting

### Issue: npm install fails

**Solution**: Ensure Node.js is installed and updated
```bash
node --version  # Should be 18+
npm --version   # Should be 9+
```

### Issue: Module not found errors

**Solution**: Delete node_modules and reinstall
```bash
rmdir /s node_modules
del package-lock.json
npm install
```

### Issue: Port 3000 already in use

**Solution**: Use a different port
```bash
npm run dev -- -p 3001
```

### Issue: Hydration errors

**Solution**: Check that all components using browser APIs are client components ('use client')

### Issue: Animations not working

**Solution**: Verify Framer Motion is installed
```bash
npm list framer-motion
```

## 📞 Support

Need help? Contact:
- **Email**: support@acquiringtech.com
- **Phone**: +1-555-0123
- **Documentation**: See README.md

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Start development server
3. ✅ Verify navigation works
4. 📝 Customize content
5. 🎨 Adjust colors/branding
6. 🚀 Build and deploy

---

**Happy Coding! 🎉**

# Acquiring Technology - Premium Header & Navigation System

A world-class, enterprise-grade header and navigation system built with Next.js 16, React 19, TypeScript, and Framer Motion.

## 🎨 Design Philosophy

This navigation system delivers a premium experience combining:
- **Luxury Dark Red Brand Identity** - Professional, trustworthy, innovative
- **Enterprise-Level Interactions** - Inspired by WeLe, Scaler, Apple, Stripe, and Linear
- **Smooth Animations** - 60 FPS micro-interactions with Framer Motion & GSAP
- **Accessibility-First** - WCAG compliant with full keyboard navigation

## 🚀 Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** - Advanced animations
- **GSAP** - Complex animation sequences
- **Shadcn UI** - Component primitives
- **Lucide React** - Premium icons

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── navigation/
│       ├── Header.tsx              # Main header with scroll behavior
│       ├── Logo.tsx                # Animated logo component
│       ├── DesktopNavigation.tsx   # Desktop menu system
│       ├── MobileNavigation.tsx    # Mobile sidebar navigation
│       ├── NavigationItem.tsx      # Individual nav items
│       ├── NavigationButton.tsx    # Action buttons
│       ├── MegaMenu.tsx           # Premium mega menu
│       ├── DropdownMenu.tsx       # More dropdown
│       ├── SearchBar.tsx          # Global search
│       └── ActionButtons.tsx      # CTA buttons
├── hooks/
│   ├── useScrollHeader.ts         # Scroll detection
│   └── useMegaMenu.ts            # Menu state management
├── data/
│   └── navigation.ts             # Navigation data structure
├── types/
│   └── navigation.ts             # TypeScript definitions
└── lib/
    └── utils.ts                  # Utility functions
```

## 🎯 Key Features

### Header
- **Height**: 80px fixed
- **Sticky Navigation** with scroll detection
- **Glassmorphism** effect while scrolling
- **Backdrop blur** for premium feel
- **Smooth transitions** on scroll state changes

### Navigation
- **11 Main Menu Items**: Home, About Us, Courses, Admissions, Placements, Faculty, Student Life, Events, Resources, More, Contact
- **Premium Mega Menus** for Courses and Resources
- **Elegant Dropdown** for More section
- **Hover Animations**: Underline, glow, scale effects
- **Active States**: Visual feedback for current page

### Courses Mega Menu
- **Two-column layout** with categorized courses
- **9 Course Programs**:
  - Software Development
  - Artificial Intelligence
  - Data Science
  - Cyber Security
  - Cloud Computing
  - DevOps
  - UI/UX Design
  - Digital Marketing
  - Business Analytics
- Icon + Title + Description for each course
- Smooth hover animations with arrow indicators

### Resources Mega Menu
- **Three-column layout** organized by type
- **Learning Resources**: Blog, Case Studies, Success Stories
- **Downloads**: Brochures, Career Guides, Placement Reports
- **Support**: FAQs, Research Articles
- Icon + Title + Subtitle format

### More Dropdown
- **Three Categories**: About, Media, Legal
- Compact vertical menu
- Quick access to secondary pages

### Action Buttons
- Global Search (modal interface)
- Call Button with phone number
- WhatsApp Button
- Apply Now (Primary CTA)
- Book Free Counselling (Secondary CTA)
- Student Portal Login (Outline)

### Mobile Navigation
- **Slide-in sidebar** from right
- **Accordion menus** for nested items
- **Touch-friendly** interactions
- **Full-height** drawer
- **Backdrop blur** overlay
- **Smooth animations**

## 🎨 Color System

```css
/* Background Colors */
--background: #080B0D
--surface: #12080C
--surface-elevated: #1E0F11

/* Brand Colors */
--primary: #7A0019
--primary-hover: #C21838
--primary-secondary: #A10E26
--glow: rgba(194, 24, 56, 0.30)

/* UI Colors */
--border: rgba(255, 255, 255, 0.08)
--text: #FFFFFF
--muted: #B8B8B8
```

## ✨ Animation Features

- **Scroll Detection**: Header transforms on scroll
- **Menu Transitions**: Fade + scale + translate
- **Hover Effects**: Magnetic buttons, underline animations
- **Icon Rotations**: Chevron arrows on menu open/close
- **Ripple Effects**: Button interactions
- **Micro Interactions**: All interactive elements
- **60 FPS Target**: Optimized animations

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Proper semantic HTML
- **Focus States**: Visible focus indicators
- **ESC Key**: Closes all menus
- **Click Outside**: Closes dropdowns
- **Screen Reader**: Friendly markup
- **WCAG Compliant**: AA standard

## 📱 Responsive Design

- **Desktop**: Full mega menus
- **Laptop**: Optimized spacing
- **Tablet**: Condensed layout
- **Mobile**: Slide-in sidebar
- **Ultra-wide**: Maintained proportions

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Architecture

### Server Components
- Used wherever possible for performance
- Static content rendered server-side

### Client Components
- Interactive menus and dropdowns
- Scroll detection
- Animation states

### Custom Hooks
- `useScrollHeader`: Manages header scroll state
- `useMegaMenu`: Controls mega menu open/close

### Data-Driven
- All navigation configured in `/data/navigation.ts`
- Easy to add/remove menu items
- Type-safe with TypeScript

## 🎯 Performance

- **Server Components** for static content
- **Lazy Loading** for heavy components
- **Memoization** to prevent re-renders
- **No Hydration Errors**
- **Optimized Animations** with GPU acceleration
- **No Deprecated APIs**

## 🔧 Configuration

### Add New Menu Item

Edit `data/navigation.ts`:

```typescript
export const mainNavigation: NavigationItem[] = [
  // ... existing items
  { 
    label: 'New Page', 
    href: '/new-page',
    hasMegaMenu: false // or true for mega menu
  },
];
```

### Add New Course

Edit `data/navigation.ts`:

```typescript
export const coursesMegaMenu: MegaMenuCategory[] = [
  {
    category: 'Your Category',
    items: [
      {
        icon: YourIcon,
        title: 'Course Name',
        description: 'Course description',
        href: '/courses/your-course',
      },
    ],
  },
];
```

### Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#7A0019', // Your brand color
    hover: '#C21838',
  },
}
```

## 📦 Dependencies

```json
{
  "next": "^16.0.0",
  "react": "^19.0.0",
  "framer-motion": "^12.0.0",
  "gsap": "^3.12.5",
  "lucide-react": "^0.460.0",
  "tailwindcss": "^3.4.20",
  "typescript": "^5.7.0"
}
```

## 🎓 About Acquiring Technology

Acquiring Technology is a premier academic institution specializing in:

- **Technology Education** - Cutting-edge curriculum
- **Industry Certifications** - Recognized credentials
- **Placement Training** - Career-ready skills
- **Corporate Learning** - Professional development
- **Career Development** - Lifelong growth

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For questions or support:
- Email: support@acquiringtech.com
- Phone: +1-555-0123
- WhatsApp: +1-555-0123

---

Built with ❤️ by the Acquiring Technology Team

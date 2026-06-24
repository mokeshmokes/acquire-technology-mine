# Scroll-Reactive Animation System - Integration Guide

## Overview
A comprehensive GSAP + ScrollTrigger powered animation system with Lenis smooth scrolling, custom cursor, and magnetic interactions.

## 🎨 Color Palette
- Primary Red: `#8B0000`
- Mid Red: `#A00000`
- Accent Red: `#C0392B`
- Theme matches dark/cinematic with glassmorphism surfaces

---

## 📦 Components Created

### 1. `useScrollAnimations()` Hook
**Location:** `hooks/useScrollAnimations.ts`

**Features:**
- Hero word-by-word reveal (0.08s stagger)
- Section fade-slide (IntersectionObserver)
- Staggered card grid (0.12s delay)
- Parallax backgrounds (0.4x speed)
- Stat counters (animate to data-target)
- Respects `prefers-reduced-motion`

**Usage:**
```tsx
'use client';

import { useScrollAnimations } from '@/hooks/useScrollAnimations';

export default function MyPage() {
    useScrollAnimations();
    
    return (
        <div>
            {/* Your content */}
        </div>
    );
}
```

### 2. `<ScrollProgressBar />` 
**Location:** `components/animations/ScrollProgressBar.tsx`

**Features:**
- Fixed top bar
- Fills left-to-right with page scroll
- Red gradient (#8B0000 → #C0392B)
- Smooth spring physics

**Usage:**
```tsx
import ScrollProgressBar from '@/components/animations/ScrollProgressBar';

export default function Layout({ children }) {
    return (
        <>
            <ScrollProgressBar />
            {children}
        </>
    );
}
```

### 3. `<CursorFollower />`
**Location:** `components/animations/CursorFollower.tsx`

**Features:**
- 24px soft red glowing dot
- 0.1s lag with lerp interpolation
- Only shows on devices with mouse pointer
- Auto-hides on touch devices

**Usage:**
```tsx
import CursorFollower from '@/components/animations/CursorFollower';

export default function Layout({ children }) {
    return (
        <>
            <CursorFollower />
            {children}
        </>
    );
}
```

### 4. `<MagneticButton />`
**Location:** `components/animations/MagneticButton.tsx`

**Features:**
- Pulls toward cursor on hover
- Max offset: 8px
- Smooth reset on mouse leave
- Wraps any button content

**Usage:**
```tsx
import MagneticButton from '@/components/animations/MagneticButton';

<MagneticButton className="px-6 py-3 bg-primary">
    <button>Click Me</button>
</MagneticButton>
```

### 5. `<HeroWordReveal />`
**Location:** `components/animations/HeroWordReveal.tsx`

**Features:**
- Automatically splits text into words
- Applies `.hero-word` class to each
- Works with hero animation hook

**Usage:**
```tsx
import HeroWordReveal from '@/components/animations/HeroWordReveal';

<HeroWordReveal 
    text="Build the Future of Technology"
    as="h1"
    className="text-6xl font-bold"
/>
```

---

## 🎯 Animation Behaviors

### 1. Hero Word-by-Word Reveal
**Trigger:** On page load
**Effect:** Words slide up + fade in
**Stagger:** 0.08s between words

**HTML:**
```tsx
<HeroWordReveal 
    text="Your headline text here"
    className="text-5xl font-bold"
/>
```

**Or manually:**
```html
<h1>
    <span class="hero-word">Build</span>
    <span class="hero-word">the</span>
    <span class="hero-word">Future</span>
</h1>
```

### 2. Scroll Progress Bar
**Behavior:** Fills from left to right as page scrolls
**Position:** Fixed at top
**Color:** Red gradient

**Integration:**
Add to your layout:
```tsx
// app/layout.tsx
import ScrollProgressBar from '@/components/animations/ScrollProgressBar';

<body>
    <ScrollProgressBar />
    {children}
</body>
```

### 3. Section Fade-Slide
**Trigger:** Element enters viewport (15% threshold)
**Effect:** Fade in + slide up 40px

**HTML:**
```html
<section class="reveal-section py-20">
    <!-- Your content -->
</section>
```

**Where to add:**
- Main content sections
- Feature blocks
- Testimonial sections
- Footer

### 4. Staggered Card Grid
**Trigger:** Grid enters viewport (80% scroll)
**Effect:** Cards scale 0.94 → 1.0 + fade in
**Stagger:** 0.12s between cards

**HTML:**
```html
<div class="stagger-grid grid-cols-3">
    <div class="stagger-card">Card 1</div>
    <div class="stagger-card">Card 2</div>
    <div class="stagger-card">Card 3</div>
</div>
```

**Where to add:**
- Course card grids
- Feature card layouts
- Service offerings
- Team member cards

### 5. Parallax Background
**Behavior:** Moves at 0.4x scroll speed
**Scrub:** 1.6 (smooth)

**HTML:**
```html
<div class="relative">
    <div class="parallax-bg absolute inset-0">
        <!-- Background image or gradient -->
    </div>
    <div class="relative z-10">
        <!-- Foreground content -->
    </div>
</div>
```

**Where to add:**
- Hero section backgrounds
- Section dividers
- Decorative elements

### 6. Stat Counter
**Trigger:** Element enters viewport (80% scroll)
**Effect:** Counts from 0 to target
**Duration:** 1.8s with easeOut

**HTML:**
```html
<div class="count-up text-4xl font-bold" data-target="1500">
    0
</div>
```

**Where to add:**
- Statistics section
- Achievement numbers
- Student counts
- Success metrics

### 7. Cursor Follow Effect
**Behavior:** Soft red dot follows cursor with lag
**Auto-enabled:** No class needed

**Control:**
Just add `<CursorFollower />` to layout

### 8. Magnetic Buttons
**Behavior:** Pulls toward cursor (max 8px)
**Reset:** Smooth return on mouse leave

**HTML:**
```tsx
<MagneticButton>
    <button class="px-8 py-4 bg-primary">
        Apply Now
    </button>
</MagneticButton>
```

**Where to add:**
- Primary CTAs
- Navigation buttons
- Hero section buttons
- Form submit buttons

---

## 🚀 Integration Steps

### Step 1: Add to Layout
```tsx
// app/layout.tsx
import ScrollProgressBar from '@/components/animations/ScrollProgressBar';
import CursorFollower from '@/components/animations/CursorFollower';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ScrollProgressBar />
                <CursorFollower />
                {children}
            </body>
        </html>
    );
}
```

### Step 2: Add Hook to Pages
```tsx
// app/page.tsx or any page
'use client';

import { useScrollAnimations } from '@/hooks/useScrollAnimations';

export default function Home() {
    useScrollAnimations();
    
    return (
        <main>
            {/* Content */}
        </main>
    );
}
```

### Step 3: Add Classes to Elements

**Hero Section:**
```tsx
<section>
    <HeroWordReveal 
        text="Transform Your Career with Technology"
        className="text-6xl font-bold"
    />
</section>
```

**Content Sections:**
```html
<section class="reveal-section py-20">
    <h2>About Us</h2>
    <p>Content...</p>
</section>
```

**Card Grids:**
```html
<div class="stagger-grid grid grid-cols-3 gap-8">
    <div class="stagger-card bg-surface p-6 rounded-xl">
        Course 1
    </div>
    <div class="stagger-card bg-surface p-6 rounded-xl">
        Course 2
    </div>
    <div class="stagger-card bg-surface p-6 rounded-xl">
        Course 3
    </div>
</div>
```

**Statistics:**
```html
<div class="stats-section">
    <div>
        <div class="count-up text-5xl font-bold" data-target="1500">0</div>
        <p>Students Enrolled</p>
    </div>
    <div>
        <div class="count-up text-5xl font-bold" data-target="95">0</div>
        <p>Success Rate %</p>
    </div>
</div>
```

**Buttons:**
```tsx
<MagneticButton>
    <button class="px-8 py-4 bg-primary hover:bg-primary-hover">
        Get Started
    </button>
</MagneticButton>
```

---

## 🎨 Styling Reference

### CSS Classes Added
All utility classes are in `app/globals.css`:

- `.hero-word` - Initial state for word reveal
- `.reveal-section` - Fade-slide sections
- `.stagger-grid` - Grid container
- `.stagger-card` - Individual cards
- `.parallax-bg` - Parallax elements
- `.count-up` - Counter numbers
- `.magnetic-btn` - Auto-applied by component

### Tailwind Utilities
Use existing theme colors:
```tsx
className="bg-primary text-white hover:bg-primary-hover"
```

---

## ♿ Accessibility

### Reduced Motion
All animations check for `prefers-reduced-motion: reduce` and:
- Skip transforms
- Use only opacity transitions
- Reduce durations to 0.3s

### Implementation
Automatically handled in:
- `useScrollAnimations` hook
- `CursorFollower` component
- `MagneticButton` component
- CSS utilities

---

## 🐛 Troubleshooting

### Animations Not Working
1. Ensure `useScrollAnimations()` is called in a client component
2. Check that elements have correct class names
3. Verify GSAP and ScrollTrigger are imported
4. Check browser console for errors

### Scroll Progress Not Visible
1. Ensure `<ScrollProgressBar />` is in layout
2. Check z-index conflicts
3. Verify page has scrollable content

### Cursor Not Showing
1. Only shows on devices with mouse pointer
2. Check `prefers-reduced-motion` setting
3. Verify component is mounted

### Magnetic Buttons Not Working
1. Wrap buttons in `<MagneticButton>`
2. Ensure not on touch device
3. Check reduced motion preference

---

## 📊 Performance

### Optimizations
- ✅ GPU-accelerated transforms
- ✅ `will-change` hints on animated elements
- ✅ RequestAnimationFrame for smooth updates
- ✅ Spring physics for natural motion
- ✅ IntersectionObserver for scroll detection
- ✅ Automatic cleanup on unmount

### Best Practices
- Limit parallax elements to backgrounds
- Don't overuse magnetic buttons
- Keep card grids under 12 items
- Use reduced motion checks

---

## 🎯 Where to Apply Each Animation

### Hero Section
- `<HeroWordReveal />` for headline
- `.parallax-bg` for background
- `<MagneticButton>` for CTA

### About Section
- `.reveal-section` wrapper
- `.count-up` for statistics

### Courses Grid
- `.stagger-grid` container
- `.stagger-card` on each course card

### Features Section
- `.reveal-section` wrapper
- `.stagger-grid` for feature cards

### Footer
- `.reveal-section` wrapper
- `<MagneticButton>` for social links

---

## 📝 Example Page Structure

```tsx
'use client';

import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import HeroWordReveal from '@/components/animations/HeroWordReveal';
import MagneticButton from '@/components/animations/MagneticButton';

export default function Home() {
    useScrollAnimations();

    return (
        <main>
            {/* Hero */}
            <section className="min-h-screen relative">
                <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-background to-surface" />
                <div className="relative z-10 container mx-auto px-6 pt-32">
                    <HeroWordReveal 
                        text="Build Your Future in Technology"
                        className="text-7xl font-bold mb-6"
                    />
                    <MagneticButton>
                        <button className="px-8 py-4 bg-primary">
                            Get Started
                        </button>
                    </MagneticButton>
                </div>
            </section>

            {/* Stats */}
            <section className="reveal-section py-20">
                <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="count-up text-6xl font-bold" data-target="1500">0</div>
                        <p>Students</p>
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section className="reveal-section py-20">
                <h2 className="text-4xl font-bold mb-12">Our Courses</h2>
                <div className="stagger-grid grid-cols-3 gap-8">
                    <div className="stagger-card bg-surface p-6 rounded-xl">
                        Course 1
                    </div>
                    <div className="stagger-card bg-surface p-6 rounded-xl">
                        Course 2
                    </div>
                    <div className="stagger-card bg-surface p-6 rounded-xl">
                        Course 3
                    </div>
                </div>
            </section>
        </main>
    );
}
```

---

## 🚀 Quick Start Checklist

- [ ] Add `<ScrollProgressBar />` to layout
- [ ] Add `<CursorFollower />` to layout
- [ ] Call `useScrollAnimations()` in page components
- [ ] Replace hero text with `<HeroWordReveal />`
- [ ] Add `.reveal-section` to main sections
- [ ] Add `.stagger-grid` and `.stagger-card` to grids
- [ ] Add `.parallax-bg` to background elements
- [ ] Add `data-target` to counter elements with `.count-up`
- [ ] Wrap CTAs in `<MagneticButton>`
- [ ] Test with reduced motion enabled

---

## 📚 Dependencies

Already installed:
- ✅ GSAP 3.12+
- ✅ ScrollTrigger plugin
- ✅ Lenis smooth scroll
- ✅ Framer Motion
- ✅ Next.js 15 App Router
- ✅ TypeScript

No additional installations needed!

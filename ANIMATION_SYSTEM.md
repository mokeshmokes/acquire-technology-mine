# 🎬 Premium Animation System Documentation

## Overview

A **cinematic animation system** for Acquiring Technology featuring Apple-like smooth scrolling, GSAP ScrollTrigger effects, Three.js 3D interactions, and Framer Motion micro-interactions.

---

## 🎯 Philosophy

The animation system follows these principles:

1. **Purposeful** - Every animation supports storytelling
2. **Smooth** - 60 FPS target, no jitter
3. **Premium** - Apple/Linear/Stripe quality
4. **Accessible** - Respects prefers-reduced-motion
5. **Performance-First** - Hardware accelerated
6. **Original** - Unique to Acquiring Technology brand

---

## 📦 New Dependencies Added

```json
"lenis": "^1.1.13",                     // Smooth scroll (updated package)
"@react-three/fiber": "^8.17.10",       // Three.js React renderer
"@react-three/drei": "^9.114.3",        // Three.js helpers
"three": "^0.169.0"                      // 3D graphics
```

**Note**: We use the newer `lenis` package instead of the deprecated `@studio-freight/lenis`.

---

## 🎨 Animation Components Created

### 1. **SmoothScroll.tsx**
Apple-like smooth scrolling using Lenis

**Features**:
- Fluid scroll behavior
- Synchronized with GSAP ScrollTrigger
- 60 FPS performance
- Respects reduced motion preference

**Usage**:
```tsx
import SmoothScroll from '@/components/animations/SmoothScroll';

<SmoothScroll>
  <YourContent />
</SmoothScroll>
```

---

### 2. **ScrollReveal.tsx**
Scroll-triggered reveal animations

**Variants**:
- `fadeInUp` - Fade in with upward movement + blur
- `fadeIn` - Simple fade in
- `scaleIn` - Scale up with fade + blur
- `slideLeft` - Slide from left
- `slideRight` - Slide from right

**Usage**:
```tsx
<ScrollReveal variant="fadeInUp" delay={0.2}>
  <YourContent />
</ScrollReveal>
```

---

### 3. **MagneticButton.tsx**
Magnetic hover effect for buttons

**Features**:
- Follows mouse position
- Spring physics
- Configurable strength

**Usage**:
```tsx
<MagneticButton strength={0.3}>
  <button>Click Me</button>
</MagneticButton>
```

---

### 4. **GlowCard.tsx**
Interactive glow effect following mouse

**Features**:
- Radial gradient follows cursor
- Border glow on hover
- Scale animation
- Premium feel

**Usage**:
```tsx
<GlowCard glowColor="rgba(194, 24, 56, 0.4)">
  <YourCardContent />
</GlowCard>
```

---

### 5. **ParallaxSection.tsx**
Parallax scroll effect

**Features**:
- Smooth parallax movement
- Configurable speed
- Performance optimized

**Usage**:
```tsx
<ParallaxSection speed={0.5}>
  <YourContent />
</ParallaxSection>
```

---

### 6. **TextReveal.tsx**
Letter-by-letter text animation

**Features**:
- Word and letter stagger
- Blur-to-sharp reveal
- Configurable timing

**Usage**:
```tsx
<TextReveal 
  text="Your Heading Text"
  delay={0.2}
  staggerDelay={0.03}
/>
```

---

## 🛠️ Animation Utilities

### animation-utils.ts

Pre-configured animation variants and easing functions:

```typescript
// Variants
- fadeInUpVariants
- fadeInVariants
- scaleInVariants
- staggerContainerVariants
- letterVariants
- slideInFromLeftVariants
- slideInFromRightVariants

// Easings
- easeInOutCubic: [0.65, 0, 0.35, 1]
- easeOutExpo: [0.19, 1, 0.22, 1]
- easeOutQuart: [0.25, 0.46, 0.45, 0.94]
- easeInOutQuart: [0.76, 0, 0.24, 1]

// Spring configs
- springConfig (default)
- smoothSpringConfig (smoother)
```

**Usage**:
```tsx
import { fadeInUpVariants, easings } from '@/lib/animation-utils';

<motion.div
  variants={fadeInUpVariants}
  transition={{ ease: easings.easeOutQuart }}
>
  Content
</motion.div>
```

---

## 🎬 Enhanced Hero Section

The Hero section has been upgraded with:

### Blur-to-Sharp Text Animation
- Each heading line fades in with blur effect
- Staggered timing for dramatic reveal
- Smooth 0.8s duration per line

### Animated Gradient Text
- "Industry-Ready" pulses with gradient
- 3s infinite loop
- Subtle glow effect

### Magnetic CTA Buttons
- Buttons follow mouse on hover
- Spring physics for natural feel
- Animated gradient sweep effect

### Enhanced Features List
- Icons rotate 360° on hover
- Text color transitions
- Stagger animation on load

### Statistics Hover
- Scale up on hover
- Spring animation
- Maintains grid layout

---

## 🎯 Implementation Guide

### Step 1: Install Dependencies

```bash
npm install
```

This installs:
- Lenis (smooth scroll)
- React Three Fiber (3D)
- Drei (Three.js helpers)

---

### Step 2: Wrap Your App with SmoothScroll

Already done in `app/page.tsx`:

```tsx
<SmoothScroll>
  <Header />
  <HeroSection />
</SmoothScroll>
```

---

### Step 3: Add Scroll Reveals to Sections

```tsx
<ScrollReveal variant="fadeInUp">
  <section>Your Content</section>
</ScrollReveal>
```

---

### Step 4: Add Magnetic Buttons

```tsx
<MagneticButton>
  <button>Interactive Button</button>
</MagneticButton>
```

---

### Step 5: Add Glow Cards

```tsx
<GlowCard>
  <div>Your Card Content</div>
</GlowCard>
```

---

## 🎨 Animation Patterns

### 1. Fade In Up (Default)
Best for: Content blocks, cards, text

```tsx
<ScrollReveal variant="fadeInUp" delay={0.2}>
  <div>Content</div>
</ScrollReveal>
```

### 2. Scale In
Best for: Images, featured items

```tsx
<ScrollReveal variant="scaleIn" delay={0.3}>
  <img src="..." />
</ScrollReveal>
```

### 3. Slide From Side
Best for: Two-column layouts

```tsx
<ScrollReveal variant="slideLeft">
  <div>Left Content</div>
</ScrollReveal>

<ScrollReveal variant="slideRight">
  <div>Right Content</div>
</ScrollReveal>
```

### 4. Stagger Children
Best for: Lists, grids

```tsx
<motion.div variants={staggerContainerVariants}>
  {items.map(item => (
    <motion.div variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## ⚡ Performance Optimizations

### 1. Hardware Acceleration
All animations use `transform` and `opacity` (GPU accelerated)

### 2. Lazy Loading
Heavy 3D scenes can be dynamically imported:

```tsx
const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});
```

### 3. Reduced Motion
All components respect `prefers-reduced-motion`:

```tsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  // Skip animations
}
```

### 4. RequestAnimationFrame
Smooth scroll uses RAF for 60 FPS:

```tsx
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
```

---

## 🎨 Brand-Specific Animations

### Dark Red Glow
```tsx
glowColor="rgba(194, 24, 56, 0.4)"
```

### Gradient Text Animation
```tsx
<motion.span
  className="bg-gradient-to-r from-primary via-primary-hover to-primary bg-clip-text"
  animate={{ opacity: [0.5, 1, 0.5] }}
  transition={{ duration: 3, repeat: Infinity }}
>
  Text
</motion.span>
```

### Light Sweep
```tsx
<motion.div
  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
  animate={{ x: ['-100%', '100%'] }}
  transition={{ duration: 3, repeat: Infinity }}
/>
```

---

## ♿ Accessibility

### Reduced Motion Support
```tsx
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Keyboard Navigation
All interactive elements maintain keyboard focus states

### Screen Readers
Animations don't interfere with screen reader content

---

## 🐛 Troubleshooting

### Issue: Smooth scroll not working

**Solution**: Ensure SmoothScroll wraps your content:
```tsx
<SmoothScroll>
  <YourApp />
</SmoothScroll>
```

### Issue: Animations feel laggy

**Solution**: Reduce particle count or disable heavy effects:
```tsx
const particleCount = 25; // Reduce from 50
```

### Issue: Hydration errors

**Solution**: Use dynamic import for client-only components:
```tsx
const ClientComponent = dynamic(() => import('./Component'), {
  ssr: false
});
```

---

## 🎯 Next Steps

### Planned Enhancements
- [ ] GSAP ScrollTrigger pin effects
- [ ] Page transition animations
- [ ] 3D interactive scenes
- [ ] Cursor trail effects
- [ ] Advanced particle systems
- [ ] WebGL shaders
- [ ] Magnetic navigation
- [ ] Section progress indicators

---

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

**Animation System Complete** ✅

Built with ❤️ for Acquiring Technology

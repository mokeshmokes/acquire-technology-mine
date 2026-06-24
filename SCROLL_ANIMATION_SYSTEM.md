# Premium Scroll Animation System

## Overview
A comprehensive GSAP ScrollTrigger-powered animation system that creates an immersive, scroll-reactive experience across the Acquiring Technology website.

## Architecture

### Core Files

#### 1. `lib/animations/scroll-animations.ts`
Central animation library containing all scroll-driven animation functions.

**Key Functions:**
- `initSectionAnimation()` - Section entrance with 3D transforms
- `initCardStagger()` - Staggered card animations with depth
- `initTextReveal()` - Line-by-line text reveals
- `initParallaxLayers()` - Multi-layer parallax effects
- `initProgressAnimation()` - Animated progress rings
- `initButtonAnimation()` - Button reveals with glow
- `initPinSection()` - Pin sections during scroll
- `init3DFloat()` - Continuous floating with scroll reaction
- `initParticles()` - Animated background particles
- `initFeatureStagger()` - Feature icon stagger animations

#### 2. `hooks/useScrollAnimation.ts`
React hooks for easy animation integration.

**Hooks:**
- `useScrollAnimation()` - Single animation type
- `useMultipleScrollAnimations()` - Multiple animations per element

#### 3. `components/animations/ScrollAnimationProvider.tsx`
Global provider that initializes the scroll system.

## Animation Types

### 1. Section Entrance
Sections fade in with 3D transforms as they enter viewport.

**Effects:**
- TranslateY: 100px → 0
- Opacity: 0 → 1
- Scale: 0.95 → 1
- RotationX: 8° → 0°
- Blur: 20px → 0

**Trigger:** `top 85%` to `top 40%`
**Scrub:** 1 (follows scroll)

### 2. Card Stagger
Cards animate sequentially with varying depth.

**Effects per card:**
- TranslateY: 120px → 0
- Opacity: 0 → 1
- Scale: 0.92 → 1
- RotationX: 15° → 0°
- RotationY: 5° → 0°
- Blur: 15px → 0

**Stagger:** 0.15s per card
**Depth layers:** 4 levels with varying parallax speeds

### 3. Text Reveal
Headings reveal line-by-line with 3D rotation.

**Effects:**
- TranslateY: 60px → 0
- Opacity: 0 → 1
- RotationX: 45° → 0°
- Blur: 10px → 0

**Scrub:** Tied to scroll position

### 4. Parallax Layers
Three-layer depth system for parallax effects.

**Layers:**
- **Background** (`.parallax-bg`): -150px movement
- **Middle** (`.parallax-mid`): -80px movement
- **Foreground** (`.parallax-fg`): -40px movement

**Scrub speeds:** 1.5, 1, 0.5 respectively

### 5. Progress Rings
Circular progress animates from 0% to target value.

**Effects:**
- Stroke animation
- Number counting
- Smooth easing

**Trigger:** `top 70%`

### 6. Button Reveals
Buttons slide up with scale and glow effects.

**Effects:**
- TranslateY: 30px → 0
- Opacity: 0 → 1
- Scale: 0.95 → 1
- Glow intensity increase

**Easing:** `back.out(1.7)`

### 7. 3D Float
Elements float continuously with scroll-reactive behavior.

**Continuous:**
- TranslateY: ±20px
- RotationX: ±5°
- RotationY: ±5°

**Scroll-reactive:**
- Additional rotation and scale

### 8. Feature Stagger
Feature icons appear with stagger and 3D rotation.

**Effects:**
- TranslateY: 50px → 0
- Opacity: 0 → 1
- Scale: 0.8 → 1
- RotationY: 45° → 0°
- Blur: 8px → 0

**Stagger:** 0.12s
**Easing:** `back.out(1.4)`

## Usage Examples

### Basic Section Animation
```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function MySection() {
    const sectionRef = useScrollAnimation({ type: 'section' });
    
    return (
        <section ref={sectionRef as any}>
            {/* Content */}
        </section>
    );
}
```

### Card Grid with Stagger
```tsx
const cardsRef = useScrollAnimation({
    type: 'cards',
    selector: '.my-card',
});

return (
    <div ref={cardsRef as any}>
        <div className="my-card">Card 1</div>
        <div className="my-card">Card 2</div>
        <div className="my-card">Card 3</div>
    </div>
);
```

### Parallax Layers
```tsx
const parallaxRef = useScrollAnimation({ type: 'parallax' });

return (
    <section ref={parallaxRef as any}>
        <div className="parallax-bg">Background</div>
        <div className="parallax-mid">Middle</div>
        <div className="parallax-fg">Foreground</div>
    </section>
);
```

### Multiple Animations
```tsx
const elementRef = useMultipleScrollAnimations([
    { type: 'section' },
    { type: 'parallax' },
    { type: 'features' },
]);

return <div ref={elementRef as any}>{/* Content */}</div>;
```

## Performance

### Optimizations
- ✅ GPU-accelerated transforms only
- ✅ `transform` and `opacity` properties
- ✅ No layout shifts
- ✅ GSAP Context for cleanup
- ✅ Lazy ScrollTrigger initialization
- ✅ Respects `prefers-reduced-motion`

### Target Performance
- **60 FPS** scroll animations
- **Smooth scrubbing** with Lenis
- **No jank** during animation

## Browser Support

### Fully Supported
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Fallbacks
- Reduced motion: No animations
- Older browsers: Graceful degradation

## Integration

### 1. Wrap Your App
```tsx
import ScrollAnimationProvider from '@/components/animations/ScrollAnimationProvider';

export default function App() {
    return (
        <ScrollAnimationProvider>
            {/* Your app */}
        </ScrollAnimationProvider>
    );
}
```

### 2. Add Lenis Smooth Scroll
Already integrated via `SmoothScroll` component.

### 3. Apply Animations
Use hooks on any component that needs scroll animations.

## Customization

### Adjust Timing
Modify values in `scroll-animations.ts`:
```typescript
scrollTrigger: {
    trigger: element,
    start: 'top 85%',  // When to start
    end: 'top 40%',    // When to end
    scrub: 1,          // Smoothness (0-3)
}
```

### Change Easing
```typescript
ease: 'power4.out',     // Fast start, slow end
ease: 'back.out(1.7)',  // Bounce effect
ease: 'sine.inOut',     // Smooth in/out
```

### Modify Stagger
```typescript
stagger: {
    each: 0.15,         // Delay between items
    from: 'start',      // Or 'end', 'center'
}
```

## Debugging

### Enable Markers
In `scroll-animations.ts`:
```typescript
ScrollTrigger.defaults({
    markers: true,  // Shows trigger points
});
```

### Refresh ScrollTriggers
After DOM changes:
```typescript
import { refreshScrollTriggers } from '@/lib/animations/scroll-animations';

useEffect(() => {
    // After content loads
    refreshScrollTriggers();
}, [data]);
```

## Best Practices

### 1. Use Semantic HTML
ScrollTrigger works best with proper document structure.

### 2. Avoid Over-Animation
Not every element needs animation. Be selective.

### 3. Test Performance
Use Chrome DevTools Performance tab to monitor FPS.

### 4. Respect User Preferences
Always check `prefers-reduced-motion`.

### 5. Clean Up
GSAP Contexts automatically clean up, but ensure proper unmounting.

## Troubleshooting

### Animations Not Triggering
1. Check if element is in viewport
2. Verify `ScrollTrigger.refresh()` was called
3. Enable markers for debugging

### Janky Animations
1. Ensure using only `transform` and `opacity`
2. Check for layout shifts
3. Reduce `scrub` value for smoother motion

### Hydration Errors
1. Wrap animations in `useEffect`
2. Check for SSR/client mismatches
3. Use `mounted` state before animating

## Future Enhancements

### Planned Features
- [ ] Mouse-parallax integration
- [ ] Advanced pinning scenarios
- [ ] Custom easing curves
- [ ] Timeline scrubbing
- [ ] Scroll-triggered videos
- [ ] SVG path animations

## Credits

**Built with:**
- GSAP 3.12+
- ScrollTrigger Plugin
- Lenis Smooth Scroll
- Framer Motion
- Next.js 15/16

**Animation Style:**
Inspired by Apple, Stripe, Linear, and Awwwards-winning websites.

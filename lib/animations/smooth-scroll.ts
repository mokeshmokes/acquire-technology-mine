'use client';

import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

let lenisInstance: Lenis | null = null;

export function initSmoothScroll() {
    if (typeof window === 'undefined') return null;

    // Create Lenis instance
    lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenisInstance.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenisInstance?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return lenisInstance;
}

export function destroySmoothScroll() {
    if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
    }
}

export function getLenis() {
    return lenisInstance;
}

export function scrollTo(target: string | number, options?: { offset?: number; duration?: number }) {
    if (!lenisInstance) return;

    lenisInstance.scrollTo(target, {
        offset: options?.offset || 0,
        duration: options?.duration || 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
}

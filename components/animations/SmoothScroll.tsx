'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            return;
        }

        // Ultra-smooth configuration for premium feel
        const lenis = new Lenis({
            duration: 1.2, // Increased for even smoother scrolling
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo - ultra smooth
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.0, // Perfect balance
            touchMultiplier: 2.0, // Smoother touch scrolling
            infinite: false,
            autoResize: true,
        });

        lenisRef.current = lenis;

        // Expose globally for anchor navigation
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).lenis = lenis;

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // High-performance RAF loop
        let rafId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Disable GSAP lag smoothing for frame-perfect sync
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
            gsap.ticker.lagSmoothing(200, 16);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (window as any).lenis;
        };
    }, []);

    return <>{children}</>;
}

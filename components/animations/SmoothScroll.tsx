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

        // Tuned for maximum smoothness:
        // - duration 0.9 feels snappier and more responsive than 1.2
        // - easing uses a smooth exponential curve
        // - wheelMultiplier 0.85 prevents over-scrolling on fast wheels
        const lenis = new Lenis({
            duration: 0.9,
            easing: (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart — fast start, silky finish
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.85,
            touchMultiplier: 1.8,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Expose globally for anchor navigation
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).lenis = lenis;

        // Sync Lenis with GSAP ScrollTrigger — use the event, not a ticker callback
        lenis.on('scroll', () => ScrollTrigger.update());

        // Drive Lenis from GSAP's RAF ticker for perfect frame sync
        // This ensures animations and scroll always update on the same frame
        const tickerFn = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(tickerFn);

        // Keep lag smoothing ON (default 200ms) — this prevents scroll stutters
        // when the browser misses a frame (tab switch, heavy paint, etc.)
        gsap.ticker.lagSmoothing(200, 16);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(tickerFn);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (window as any).lenis;
        };
    }, []);

    return <>{children}</>;
}

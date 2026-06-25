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
        // - duration 1.0 feels extremely polished with soft deceleration
        // - easing uses a smooth quintic curve for a silkier finish
        // - wheelMultiplier 0.90 keeps scroll very responsive but smooth
        const lenis = new Lenis({
            duration: 1.0,
            easing: (t) => 1 - Math.pow(1 - t, 5), // easeOutQuint — ultimate smoothness
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.90,
            touchMultiplier: 1.5,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Expose globally for anchor navigation
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).lenis = lenis;

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Drive Lenis with native requestAnimationFrame loop for absolute performance isolation
        let rafId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);

        // Disable GSAP lag smoothing to keep ScrollTrigger fully in-sync with scroll frame rates
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(rafId);
            // Re-enable default lag smoothing for other GSAP contexts on clean up
            gsap.ticker.lagSmoothing(200, 16);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (window as any).lenis;
        };
    }, []);

    return <>{children}</>;
}

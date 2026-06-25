'use client';

import { useEffect } from 'react';
import { initGlobalScrollAnimations, refreshScrollTriggers } from '@/lib/animations/scroll-animations';

interface ScrollAnimationProviderProps {
    children: React.ReactNode;
}

export default function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Initialize global scroll animation system and get cleanup fn
        const cleanup = initGlobalScrollAnimations();

        // Refresh ScrollTriggers after fonts + images are loaded.
        // Using 'load' is more reliable than a fixed timeout — avoids a jank
        // flash caused by refreshing before layout is stable.
        const onLoad = () => refreshScrollTriggers();

        if (document.readyState === 'complete') {
            // Already loaded — defer by one frame so layout is settled
            const id = requestAnimationFrame(() => refreshScrollTriggers());
            return () => {
                cancelAnimationFrame(id);
                cleanup?.();
            };
        }

        window.addEventListener('load', onLoad, { once: true });

        return () => {
            window.removeEventListener('load', onLoad);
            cleanup?.();
        };
    }, []);

    return <>{children}</>;
}

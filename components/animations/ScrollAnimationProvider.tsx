'use client';

import { useEffect } from 'react';
import { initGlobalScrollAnimations, refreshScrollTriggers } from '@/lib/animations/scroll-animations';

interface ScrollAnimationProviderProps {
    children: React.ReactNode;
}

export default function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Initialize global scroll animation system
        initGlobalScrollAnimations();

        // Refresh after initial mount
        const timer = setTimeout(() => {
            refreshScrollTriggers();
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return <>{children}</>;
}

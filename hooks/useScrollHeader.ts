'use client';

import { useState, useEffect, useRef } from 'react';

export function useScrollHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Throttle via rAF — only update state once per frame
            if (rafRef.current !== null) return;
            rafRef.current = requestAnimationFrame(() => {
                const scrolled = window.scrollY > 30;
                setIsScrolled((prev) => (prev === scrolled ? prev : scrolled));
                rafRef.current = null;
            });
        };

        // Initial check
        setIsScrolled(window.scrollY > 30);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return { isScrolled };
}

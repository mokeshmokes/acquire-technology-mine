'use client';

import { useState, useEffect } from 'react';

export function useScrollHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Change background when scrolled more than 30px
            setIsScrolled(currentScrollY > 30);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { isScrolled };
}

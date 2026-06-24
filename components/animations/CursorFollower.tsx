'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smooth spring with lag
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        setMounted(true);

        // Check for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // Check if device has mouse
        const hasMousePointer = window.matchMedia('(pointer: fine)').matches;
        if (!hasMousePointer) return;

        let rafId: number;

        const updateCursor = (e: MouseEvent) => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
            });
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateCursor);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', updateCursor);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY]);

    if (!mounted || !isVisible) return null;

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-screen"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <div
                className="relative -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: '24px',
                    height: '24px',
                }}
            >
                {/* Main dot */}
                <div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(139,0,0,0.6) 0%, rgba(139,0,0,0.3) 50%, transparent 100%)',
                        boxShadow: '0 0 20px rgba(139,0,0,0.4)',
                    }}
                />
                {/* Inner bright dot */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                    style={{
                        background: '#8B0000',
                        boxShadow: '0 0 10px rgba(139,0,0,0.8)',
                    }}
                />
            </div>
        </motion.div>
    );
}

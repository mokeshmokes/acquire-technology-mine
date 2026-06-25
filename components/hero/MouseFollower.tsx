'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';

export default function MouseFollower() {
    // Use motion values directly — no useState, no re-renders on mouse move
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const springConfig = { damping: 30, stiffness: 120 };
    const x = useSpring(rawX, springConfig);
    const y = useSpring(rawY, springConfig);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        let pendingX = 0;
        let pendingY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            pendingX = e.clientX;
            pendingY = e.clientY;
            // Throttle updates via rAF — only update motion values once per frame
            if (rafRef.current === null) {
                rafRef.current = requestAnimationFrame(() => {
                    rawX.set(pendingX);
                    rawY.set(pendingY);
                    rafRef.current = null;
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, [rawX, rawY]);

    return (
        <motion.div
            className="fixed pointer-events-none z-50 mix-blend-screen"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
            }}
        >
            <div className="w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl" />
        </motion.div>
    );
}

'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';

export default function MouseFollower() {
    const rawX = useMotionValue(-500); // start off-screen
    const rawY = useMotionValue(-500);
    // Softer spring = fewer frames needed to settle, less CPU
    const x = useSpring(rawX, { damping: 35, stiffness: 100 });
    const y = useSpring(rawY, { damping: 35, stiffness: 100 });
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        let pendingX = -500;
        let pendingY = -500;

        const handleMouseMove = (e: MouseEvent) => {
            pendingX = e.clientX;
            pendingY = e.clientY;
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
            className="fixed pointer-events-none z-50"
            style={{
                x,
                y,
                translateX: '-50%',
                translateY: '-50%',
                // Isolate to own GPU layer — no mix-blend-screen which
                // forces the browser to re-composite the entire page stack
                // on every mouse move.
                willChange: 'transform',
            }}
        >
            {/*
             * Reduced from w-64/h-64 + blur-3xl + mix-blend-screen.
             * mix-blend-screen is the main offender — it disables GPU fast-
             * path compositing and falls back to software blending.
             * Now: smaller, opacity-only, no blend mode.
             */}
            <div
                className="w-48 h-48 rounded-full"
                style={{
                    background:
                        'radial-gradient(circle, rgba(139,0,0,0.12) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                }}
            />
        </motion.div>
    );
}

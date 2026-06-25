'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

export default function CursorFollower() {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isHoveringClickable, setIsHoveringClickable] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Snappy spring for the image cursor — feels responsive
    const springConfig = { damping: 28, stiffness: 180, mass: 0.4 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        setMounted(true);

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const hasMousePointer = window.matchMedia('(pointer: fine)').matches;
        if (!hasMousePointer) return;

        let rafId: number;

        const updateCursor = (e: MouseEvent) => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);

                // Detect if hovering a clickable element
                const target = e.target as HTMLElement;
                const clickable = target.closest('a, button, [role="button"], input, select, textarea, label, [tabindex]');
                setIsHoveringClickable(!!clickable);
            });
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateCursor, { passive: true });
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

    const size = isHoveringClickable ? 44 : 32;

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999]"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                willChange: 'transform',
            }}
        >
            <motion.div
                className="relative flex items-center justify-center"
                style={{ translateX: '-50%', translateY: '-50%' }}
                animate={{ width: size, height: size, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
            >
                {/* Glow ring — expands on clickable elements */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                        scale: isHoveringClickable ? 1.6 : 1,
                        opacity: isHoveringClickable ? 0.35 : 0.15,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                        background: 'radial-gradient(circle, rgba(220,25,50,0.8) 0%, transparent 70%)',
                        filter: 'blur(6px)',
                    }}
                />

                {/* Logo image cursor */}
                <Image
                    src="/images/cursor/cursor1.png"
                    alt=""
                    width={size}
                    height={size}
                    className="relative z-10 select-none"
                    style={{
                        filter: isHoveringClickable
                            ? 'brightness(1) drop-shadow(0 0 8px rgba(220,25,50,0.9))'
                            : 'brightness(0.95) drop-shadow(0 0 4px rgba(220,25,50,0.5))',
                        transition: 'filter 0.2s ease',
                    }}
                    draggable={false}
                    priority
                />
            </motion.div>
        </motion.div>
    );
}

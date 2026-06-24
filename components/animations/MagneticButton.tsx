'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    maxOffset?: number;
    disabled?: boolean;
}

export default function MagneticButton({
    children,
    className = '',
    maxOffset = 8,
    disabled = false,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion || disabled) return;

        const button = buttonRef.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isHovered) return;

            const rect = button.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            // Calculate magnetic pull (max 8px)
            const pullX = Math.max(-maxOffset, Math.min(maxOffset, distanceX * 0.3));
            const pullY = Math.max(-maxOffset, Math.min(maxOffset, distanceY * 0.3));

            x.set(pullX);
            y.set(pullY);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            x.set(0);
            y.set(0);
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);
        button.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
            button.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [x, y, isHovered, maxOffset, disabled]);

    return (
        <motion.div
            ref={buttonRef}
            className={`magnetic-btn ${className}`}
            style={{ x: xSpring, y: ySpring }}
        >
            {children}
        </motion.div>
    );
}

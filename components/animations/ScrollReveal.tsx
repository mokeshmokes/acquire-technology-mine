'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { fadeInUpVariants } from '@/lib/animation-utils';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
    variant?: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
}

const variants = {
    fadeInUp: {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: custom || 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        }),
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: (custom: number) => ({
            opacity: 1,
            transition: {
                duration: custom || 0.6,
                ease: 'easeOut',
            },
        }),
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
        visible: (custom: number) => ({
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                duration: custom || 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        }),
    },
    slideLeft: {
        hidden: { opacity: 0, x: -100 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: custom || 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        }),
    },
    slideRight: {
        hidden: { opacity: 0, x: 100 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                duration: custom || 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        }),
    },
};

export default function ScrollReveal({
    children,
    delay = 0,
    duration = 0.8,
    className,
    variant = 'fadeInUp',
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants[variant]}
            custom={duration}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

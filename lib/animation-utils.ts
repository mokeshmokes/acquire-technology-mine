import { Variants } from 'framer-motion';

// Utility to check for reduced motion preference
export const prefersReducedMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Common animation variants
export const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export const scaleInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const staggerContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const slideInFromLeftVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export const slideInFromRightVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

// Custom easing functions
export const easings = {
    easeInOutCubic: [0.65, 0, 0.35, 1],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeOutQuart: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuart: [0.76, 0, 0.24, 1],
};

// Helper to create smooth spring config
export const springConfig = {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
};

export const smoothSpringConfig = {
    type: 'spring' as const,
    stiffness: 50,
    damping: 15,
};

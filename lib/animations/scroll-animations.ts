'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initialize GSAP ScrollTrigger animations for a section
 */
export const initSectionAnimation = (element: HTMLElement) => {
    if (!element) return;

    const ctx = gsap.context(() => {
        // Section entrance animation
        gsap.from(element, {
            y: 100,
            opacity: 0,
            scale: 0.95,
            rotationX: 8,
            filter: 'blur(20px)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'top 40%',
                scrub: 1,
                toggleActions: 'play none none reverse',
            },
        });
    });

    return ctx;
};

/**
 * Staggered card animations with 3D depth
 */
export const initCardStagger = (container: HTMLElement, cardSelector: string) => {
    if (!container) return;

    const cards = container.querySelectorAll(cardSelector);
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
        // Create staggered entrance
        gsap.from(cards, {
            y: 120,
            opacity: 0,
            scale: 0.92,
            rotationX: 15,
            rotationY: 5,
            filter: 'blur(15px)',
            duration: 1,
            stagger: {
                each: 0.15,
                from: 'start',
            },
            ease: 'power4.out',
            scrollTrigger: {
                trigger: container,
                start: 'top 75%',
                end: 'top 30%',
                scrub: 1.5,
            },
        });

        // Individual card scroll reactions
        cards.forEach((card, index) => {
            const depth = index % 4; // 4 depth levels for grid
            const speed = 1 - depth * 0.1; // Varying parallax speeds

            gsap.to(card, {
                y: -50 * speed,
                rotationX: -3,
                scale: 1.02,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: 2,
                },
            });
        });
    });

    return ctx;
};

/**
 * Text reveal animation - line by line with character stagger
 */
export const initTextReveal = (element: HTMLElement) => {
    if (!element) return;

    const ctx = gsap.context(() => {
        // Split text into lines
        const lines = element.querySelectorAll('.text-reveal-line');

        if (lines.length > 0) {
            gsap.from(lines, {
                y: 60,
                opacity: 0,
                rotationX: 45,
                filter: 'blur(10px)',
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1,
                },
            });
        } else {
            // Fallback for non-split text
            gsap.from(element, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });
        }
    });

    return ctx;
};

/**
 * Parallax background layers
 */
export const initParallaxLayers = (container: HTMLElement) => {
    if (!container) return;

    const ctx = gsap.context(() => {
        const background = container.querySelector('.parallax-bg');
        const middle = container.querySelector('.parallax-mid');
        const foreground = container.querySelector('.parallax-fg');

        if (background) {
            gsap.to(background, {
                y: -150,
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });
        }

        if (middle) {
            gsap.to(middle, {
                y: -80,
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        }

        if (foreground) {
            gsap.to(foreground, {
                y: -40,
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.5,
                },
            });
        }
    });

    return ctx;
};

/**
 * Progress ring animation tied to scroll
 */
export const initProgressAnimation = (element: HTMLElement, targetValue: number) => {
    if (!element) return;

    const ctx = gsap.context(() => {
        const progressCircle = element.querySelector('circle[stroke-dasharray]');
        const numberElement = element.querySelector('.progress-number');

        if (progressCircle && numberElement) {
            const circumference = 2 * Math.PI * 45; // Adjust based on your circle radius
            const offset = circumference - (targetValue / 100) * circumference;

            gsap.fromTo(
                progressCircle,
                {
                    strokeDashoffset: circumference,
                },
                {
                    strokeDashoffset: offset,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );

            // Animate number counting
            gsap.fromTo(
                numberElement,
                { textContent: 0 },
                {
                    textContent: targetValue,
                    duration: 1.5,
                    ease: 'power2.out',
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    });

    return ctx;
};

/**
 * Button reveal with glow and slide
 */
export const initButtonAnimation = (button: HTMLElement) => {
    if (!button) return;

    const ctx = gsap.context(() => {
        gsap.from(button, {
            y: 30,
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: button,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
        });

        // Glow animation
        const glow = button.querySelector('.button-glow');
        if (glow) {
            gsap.to(glow, {
                opacity: 0.8,
                scale: 1.1,
                duration: 0.4,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: button,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });
        }
    });

    return ctx;
};

/**
 * Pin section with internal animations
 */
export const initPinSection = (section: HTMLElement, duration: string = '100%') => {
    if (!section) return;

    const ctx = gsap.context(() => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: `+=${duration}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
        });
    });

    return ctx;
};

/**
 * 3D floating animation for illustrations
 */
export const init3DFloat = (element: HTMLElement) => {
    if (!element) return;

    const ctx = gsap.context(() => {
        // Continuous float
        gsap.to(element, {
            y: -20,
            rotationX: 5,
            rotationY: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        // Scroll-reactive rotation and scale
        gsap.to(element, {
            rotationY: 15,
            rotationX: -10,
            scale: 1.1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 2,
            },
        });
    });

    return ctx;
};

/**
 * Background particle animation
 */
export const initParticles = (container: HTMLElement) => {
    if (!container) return;

    const ctx = gsap.context(() => {
        const particles = container.querySelectorAll('.particle');

        particles.forEach((particle, index) => {
            gsap.to(particle, {
                y: -100 - Math.random() * 50,
                x: Math.sin(index) * 30,
                duration: 3 + Math.random() * 2,
                repeat: -1,
                ease: 'sine.inOut',
                delay: index * 0.1,
                keyframes: [
                    { opacity: 0.3 },
                    { opacity: 0.8 },
                    { opacity: 0.3 },
                ],
            });

            // Scroll reaction
            gsap.to(particle, {
                y: -150,
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        });
    });

    return ctx;
};

/**
 * Feature icon stagger with glow
 */
export const initFeatureStagger = (container: HTMLElement) => {
    if (!container) return;

    const features = container.querySelectorAll('.feature-item');
    if (features.length === 0) return;

    const ctx = gsap.context(() => {
        gsap.from(features, {
            y: 50,
            opacity: 0,
            scale: 0.8,
            rotationY: 45,
            filter: 'blur(8px)',
            duration: 0.8,
            stagger: 0.12,
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: container,
                start: 'top 75%',
                end: 'top 45%',
                scrub: 1,
            },
        });
    });

    return ctx;
};

/**
 * Refresh all ScrollTriggers (call after DOM changes)
 */
export const refreshScrollTriggers = () => {
    if (typeof window !== 'undefined') {
        ScrollTrigger.refresh();
    }
};

/**
 * Kill all ScrollTriggers for cleanup
 */
export const killAllScrollTriggers = () => {
    if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
};

/**
 * Global scroll animation setup
 */
export const initGlobalScrollAnimations = () => {
    if (typeof window === 'undefined') return;

    // Smooth scroll defaults
    ScrollTrigger.defaults({
        toggleActions: 'play none none reverse',
        markers: false, // Set to true for debugging
    });

    // Refresh on window resize
    let resizeTimer: NodeJS.Timeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });
};

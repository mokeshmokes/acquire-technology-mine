'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initialize GSAP ScrollTrigger animations for a section
 * Removed blur filter from scrubbed animations — blur recomputed every scroll frame is expensive.
 */
export const initSectionAnimation = (element: HTMLElement) => {
    if (!element) return;

    const ctx = gsap.context(() => {
        gsap.from(element, {
            y: 60,
            opacity: 0,
            scale: 0.97,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 88%',
                toggleActions: 'play none none none', // one-shot, no reverse
            },
        });
    });

    return ctx;
};

/**
 * Staggered card animations
 * Reduced scrub values so scroll doesn't feel "sticky".
 * Removed per-card scrubbing parallax — replaced with a single one-shot entrance.
 */
export const initCardStagger = (container: HTMLElement, cardSelector: string) => {
    if (!container) return;

    const cards = container.querySelectorAll(cardSelector);
    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
        gsap.from(cards, {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            stagger: { each: 0.1, from: 'start' },
            ease: 'power3.out',
            scrollTrigger: {
                trigger: container,
                start: 'top 78%',
                toggleActions: 'play none none none',
            },
        });
    });

    return ctx;
};

/**
 * Text reveal animation
 */
export const initTextReveal = (element: HTMLElement) => {
    if (!element) return;

    const ctx = gsap.context(() => {
        const lines = element.querySelectorAll('.text-reveal-line');

        if (lines.length > 0) {
            gsap.from(lines, {
                y: 40,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 82%',
                    toggleActions: 'play none none none',
                },
            });
        } else {
            gsap.from(element, {
                y: 30,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 88%',
                    toggleActions: 'play none none none',
                },
            });
        }
    });

    return ctx;
};

/**
 * Parallax background layers
 * Lower scrub values = smoother feel with no sticky lag.
 */
export const initParallaxLayers = (container: HTMLElement) => {
    if (!container) return;

    const ctx = gsap.context(() => {
        const background = container.querySelector('.parallax-bg');
        const middle = container.querySelector('.parallax-mid');
        const foreground = container.querySelector('.parallax-fg');

        if (background) {
            gsap.to(background, {
                y: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.6, // was 1.5 — lower = less sticky
                },
            });
        }

        if (middle) {
            gsap.to(middle, {
                y: -60,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.4,
                },
            });
        }

        if (foreground) {
            gsap.to(foreground, {
                y: -30,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.2,
                },
            });
        }
    });

    return ctx;
};

/**
 * Progress ring animation
 */
export const initProgressAnimation = (element: HTMLElement, targetValue: number) => {
    if (!element) return;

    const ctx = gsap.context(() => {
        const progressCircle = element.querySelector('circle[stroke-dasharray]');
        const numberElement = element.querySelector('.progress-number');

        if (progressCircle && numberElement) {
            const circumference = 2 * Math.PI * 45;
            const offset = circumference - (targetValue / 100) * circumference;

            gsap.fromTo(
                progressCircle,
                { strokeDashoffset: circumference },
                {
                    strokeDashoffset: offset,
                    duration: 1.4,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 72%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            gsap.fromTo(
                numberElement,
                { textContent: 0 },
                {
                    textContent: targetValue,
                    duration: 1.4,
                    ease: 'power2.out',
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 72%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }
    });

    return ctx;
};

/**
 * Button reveal
 */
export const initButtonAnimation = (button: HTMLElement) => {
    if (!button) return;

    const ctx = gsap.context(() => {
        gsap.from(button, {
            y: 20,
            opacity: 0,
            scale: 0.97,
            duration: 0.5,
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: button,
                start: 'top 92%',
                toggleActions: 'play none none none',
            },
        });
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
            scrub: 0.5,
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
        gsap.to(element, {
            y: -20,
            rotationX: 5,
            rotationY: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        gsap.to(element, {
            rotationY: 12,
            rotationX: -8,
            scale: 1.05,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: 0.8, // was 2
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

            gsap.to(particle, {
                y: -150,
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.5, // was 1
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
            y: 35,
            opacity: 0,
            scale: 0.88,
            duration: 0.65,
            stagger: 0.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: container,
                start: 'top 78%',
                toggleActions: 'play none none none',
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

    ScrollTrigger.defaults({
        toggleActions: 'play none none none',
        markers: false,
    });

    // Debounced resize handler — cleans up properly
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 300);
    };

    window.addEventListener('resize', onResize, { passive: true });

    // Return cleanup so callers can remove the listener
    return () => {
        clearTimeout(resizeTimer);
        window.removeEventListener('resize', onResize);
    };
};

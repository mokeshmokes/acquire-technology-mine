'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimationsOptions {
    heroTextSelector?: string;
    revealSectionSelector?: string;
    staggerGridSelector?: string;
    parallaxSelector?: string;
    countUpSelector?: string;
}

export const useScrollAnimations = (options: UseScrollAnimationsOptions = {}) => {
    const {
        heroTextSelector = '.hero-word',
        revealSectionSelector = '.reveal-section',
        staggerGridSelector = '.stagger-grid',
        parallaxSelector = '.parallax-bg',
        countUpSelector = '.count-up',
    } = options;

    const initialized = useRef(false);

    useEffect(() => {
        if (typeof window === 'undefined' || initialized.current) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // 1. HERO WORD-BY-WORD REVEAL
        const heroWords = document.querySelectorAll(heroTextSelector);
        if (heroWords.length > 0) {
            gsap.from(heroWords, {
                y: prefersReducedMotion ? 0 : 30,
                opacity: 0,
                duration: prefersReducedMotion ? 0.3 : 0.8,
                stagger: prefersReducedMotion ? 0 : 0.08,
                ease: 'power3.out',
                delay: 0.2,
            });
        }

        // 3. SECTION FADE-SLIDE (IntersectionObserver)
        const revealSections = document.querySelectorAll(revealSectionSelector);
        if (revealSections.length > 0) {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px',
            };

            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
                        entry.target.classList.add('revealed');

                        gsap.to(entry.target, {
                            y: prefersReducedMotion ? 0 : 0,
                            opacity: 1,
                            duration: prefersReducedMotion ? 0.3 : 0.9,
                            ease: 'power2.out',
                        });
                    }
                });
            }, observerOptions);

            revealSections.forEach((section) => {
                // Set initial state
                gsap.set(section, {
                    y: prefersReducedMotion ? 0 : 40,
                    opacity: 0,
                });
                sectionObserver.observe(section);
            });

            // Cleanup observer
            return () => {
                sectionObserver.disconnect();
            };
        }

        // 4. STAGGERED CARD GRID
        const staggerGrids = document.querySelectorAll(staggerGridSelector);
        staggerGrids.forEach((grid) => {
            const cards = grid.querySelectorAll('.stagger-card');
            if (cards.length > 0) {
                gsap.set(cards, {
                    scale: prefersReducedMotion ? 1 : 0.94,
                    opacity: 0,
                });

                ScrollTrigger.create({
                    trigger: grid,
                    start: 'top 80%',
                    onEnter: () => {
                        gsap.to(cards, {
                            scale: 1,
                            opacity: 1,
                            duration: prefersReducedMotion ? 0.3 : 0.7,
                            stagger: prefersReducedMotion ? 0 : 0.12,
                            ease: 'power2.out',
                        });
                    },
                    once: true,
                });
            }
        });

        // 5. PARALLAX BACKGROUND
        const parallaxElements = document.querySelectorAll(parallaxSelector);
        parallaxElements.forEach((element) => {
            if (!prefersReducedMotion) {
                gsap.to(element, {
                    y: -100,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1.6,
                    },
                });
            }
        });

        // 6. STAT COUNTER
        const countUpElements = document.querySelectorAll(countUpSelector);
        countUpElements.forEach((element) => {
            const target = parseInt(element.getAttribute('data-target') || '0', 10);
            const duration = prefersReducedMotion ? 0.5 : 1.8;

            ScrollTrigger.create({
                trigger: element,
                start: 'top 80%',
                onEnter: () => {
                    const obj = { value: 0 };
                    gsap.to(obj, {
                        value: target,
                        duration: duration,
                        ease: 'power2.out',
                        onUpdate: () => {
                            element.textContent = Math.round(obj.value).toString();
                        },
                    });
                },
                once: true,
            });
        });

        initialized.current = true;

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [
        heroTextSelector,
        revealSectionSelector,
        staggerGridSelector,
        parallaxSelector,
        countUpSelector,
    ]);
};

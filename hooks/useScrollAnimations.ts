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
    const cleanupRef = useRef<(() => void) | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined' || initialized.current) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // 1. HERO WORD-BY-WORD REVEAL
        const heroWords = document.querySelectorAll(heroTextSelector);
        if (heroWords.length > 0) {
            gsap.from(heroWords, {
                y: prefersReducedMotion ? 0 : 25,
                opacity: 0,
                duration: prefersReducedMotion ? 0.2 : 0.7,
                stagger: prefersReducedMotion ? 0 : 0.07,
                ease: 'power3.out',
                delay: 0.15,
            });
        }

        // 2. SECTION FADE-SLIDE (IntersectionObserver — no GSAP scrub needed here)
        const revealSections = document.querySelectorAll(revealSectionSelector);
        const observers: IntersectionObserver[] = [];

        if (revealSections.length > 0) {
            const sectionObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !entry.target.classList.contains('revealed')) {
                            entry.target.classList.add('revealed');
                            gsap.to(entry.target, {
                                y: 0,
                                opacity: 1,
                                duration: prefersReducedMotion ? 0.2 : 0.75,
                                ease: 'power2.out',
                            });
                        }
                    });
                },
                { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
            );

            revealSections.forEach((section) => {
                gsap.set(section, {
                    y: prefersReducedMotion ? 0 : 35,
                    opacity: 0,
                });
                sectionObserver.observe(section);
            });

            observers.push(sectionObserver);
        }

        // 3. STAGGERED CARD GRID
        const staggerGrids = document.querySelectorAll(staggerGridSelector);
        staggerGrids.forEach((grid) => {
            const cards = grid.querySelectorAll('.stagger-card');
            if (cards.length > 0) {
                gsap.set(cards, {
                    scale: prefersReducedMotion ? 1 : 0.95,
                    opacity: 0,
                });

                ScrollTrigger.create({
                    trigger: grid,
                    start: 'top 82%',
                    onEnter: () => {
                        gsap.to(cards, {
                            scale: 1,
                            opacity: 1,
                            duration: prefersReducedMotion ? 0.2 : 0.65,
                            stagger: prefersReducedMotion ? 0 : 0.1,
                            ease: 'power2.out',
                        });
                    },
                    once: true,
                });
            }
        });

        // 4. PARALLAX BACKGROUND
        // scrub: 0.5 keeps parallax responsive without the sticky "rubber band" feel
        const parallaxElements = document.querySelectorAll(parallaxSelector);
        parallaxElements.forEach((element) => {
            if (!prefersReducedMotion) {
                gsap.to(element, {
                    y: -80,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 0.5, // was 1.6
                    },
                });
            }
        });

        // 5. STAT COUNTER
        const countUpElements = document.querySelectorAll(countUpSelector);
        countUpElements.forEach((element) => {
            const target = parseInt(element.getAttribute('data-target') || '0', 10);
            const duration = prefersReducedMotion ? 0.4 : 1.6;

            ScrollTrigger.create({
                trigger: element,
                start: 'top 82%',
                onEnter: () => {
                    const obj = { value: 0 };
                    gsap.to(obj, {
                        value: target,
                        duration,
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

        cleanupRef.current = () => {
            observers.forEach((o) => o.disconnect());
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };

        return () => cleanupRef.current?.();
    }, [heroTextSelector, revealSectionSelector, staggerGridSelector, parallaxSelector, countUpSelector]);
};

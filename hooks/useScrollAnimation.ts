'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export type ScrollAnimationType =
    | 'section'
    | 'cards'
    | 'text'
    | 'parallax'
    | 'progress'
    | 'button'
    | 'pin'
    | 'float'
    | 'particles'
    | 'features';

interface UseScrollAnimationOptions {
    type: ScrollAnimationType;
    selector?: string;
    targetValue?: number;
    pinDuration?: string;
    disabled?: boolean;
}

/**
 * Custom hook to apply scroll animations to elements
 */
export const useScrollAnimation = (options: UseScrollAnimationOptions) => {
    const { type, selector, targetValue, pinDuration, disabled = false } = options;
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (disabled || typeof window === 'undefined' || !elementRef.current) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) return;

        let ctx: gsap.Context | undefined;

        // Dynamic import to avoid SSR issues
        import('@/lib/animations/scroll-animations').then((animations) => {
            if (!elementRef.current) return;

            switch (type) {
                case 'section':
                    ctx = animations.initSectionAnimation(elementRef.current);
                    break;

                case 'cards':
                    if (selector) {
                        ctx = animations.initCardStagger(elementRef.current, selector);
                    }
                    break;

                case 'text':
                    ctx = animations.initTextReveal(elementRef.current);
                    break;

                case 'parallax':
                    ctx = animations.initParallaxLayers(elementRef.current);
                    break;

                case 'progress':
                    if (targetValue !== undefined) {
                        ctx = animations.initProgressAnimation(elementRef.current, targetValue);
                    }
                    break;

                case 'button':
                    ctx = animations.initButtonAnimation(elementRef.current);
                    break;

                case 'pin':
                    ctx = animations.initPinSection(elementRef.current, pinDuration);
                    break;

                case 'float':
                    ctx = animations.init3DFloat(elementRef.current);
                    break;

                case 'particles':
                    ctx = animations.initParticles(elementRef.current);
                    break;

                case 'features':
                    ctx = animations.initFeatureStagger(elementRef.current);
                    break;

                default:
                    break;
            }
        });

        // Cleanup
        return () => {
            if (ctx) {
                ctx.revert();
            }
        };
    }, [type, selector, targetValue, pinDuration, disabled]);

    return elementRef;
};

/**
 * Hook for multiple scroll animations on the same element
 */
export const useMultipleScrollAnimations = (
    animations: Omit<UseScrollAnimationOptions, 'disabled'>[],
    disabled = false
) => {
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (disabled || typeof window === 'undefined' || !elementRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReducedMotion) return;

        const contexts: gsap.Context[] = [];

        import('@/lib/animations/scroll-animations').then((animationLib) => {
            if (!elementRef.current) return;

            animations.forEach((anim) => {
                let ctx: gsap.Context | undefined;

                switch (anim.type) {
                    case 'section':
                        ctx = animationLib.initSectionAnimation(elementRef.current!);
                        break;
                    case 'cards':
                        if (anim.selector) {
                            ctx = animationLib.initCardStagger(
                                elementRef.current!,
                                anim.selector
                            );
                        }
                        break;
                    case 'text':
                        ctx = animationLib.initTextReveal(elementRef.current!);
                        break;
                    case 'parallax':
                        ctx = animationLib.initParallaxLayers(elementRef.current!);
                        break;
                    case 'features':
                        ctx = animationLib.initFeatureStagger(elementRef.current!);
                        break;
                }

                if (ctx) {
                    contexts.push(ctx);
                }
            });
        });

        return () => {
            contexts.forEach((ctx) => ctx.revert());
        };
    }, [animations, disabled]);

    return elementRef;
};

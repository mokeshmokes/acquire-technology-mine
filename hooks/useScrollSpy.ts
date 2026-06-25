'use client';

import { useState, useEffect, useRef } from 'react';

interface UseScrollSpyOptions {
    sectionIds: string[];
    threshold?: number;
    rootMargin?: string;
}

export function useScrollSpy({ sectionIds, threshold = 0.5, rootMargin = '-20% 0px -20% 0px' }: UseScrollSpyOptions) {
    const [activeSection, setActiveSection] = useState<string>('');
    const observerRef = useRef<IntersectionObserver | null>(null);
    const initialCheckDone = useRef(false);

    useEffect(() => {
        // Set initial active section (usually the first one visible on load)
        const checkInitialSection = () => {
            if (initialCheckDone.current) return;

            const sections = sectionIds
                .map(id => document.getElementById(id))
                .filter(Boolean) as HTMLElement[];

            if (sections.length > 0) {
                // Find the section that's most visible in viewport
                const viewportHeight = window.innerHeight;
                let maxVisibleArea = 0;
                let mostVisibleSection = sections[0];

                for (const section of sections) {
                    const rect = section.getBoundingClientRect();

                    // Calculate visible area of section
                    const visibleTop = Math.max(0, rect.top);
                    const visibleBottom = Math.min(viewportHeight, rect.bottom);
                    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                    if (visibleHeight > maxVisibleArea) {
                        maxVisibleArea = visibleHeight;
                        mostVisibleSection = section;
                    }
                }

                setActiveSection(mostVisibleSection.id);
                initialCheckDone.current = true;
            }
        };

        // Check initial section after a short delay to ensure DOM is ready
        const timer = setTimeout(checkInitialSection, 100);

        // Clean up previous observer
        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        const observerOptions: IntersectionObserverInit = {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], // More granular thresholds
            rootMargin,
        };

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            // Sort entries by intersection ratio (highest first)
            const sortedEntries = [...entries]
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            // Update to the section with highest intersection ratio
            if (sortedEntries.length > 0 && sortedEntries[0].intersectionRatio > 0.1) {
                setActiveSection(sortedEntries[0].target.id);
            }
        };

        observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);

        // Observe all sections
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element && observerRef.current) {
                observerRef.current.observe(element);
            }
        });

        // Cleanup
        return () => {
            clearTimeout(timer);
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [sectionIds, threshold, rootMargin]);

    return activeSection;
}

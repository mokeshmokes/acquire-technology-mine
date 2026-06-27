'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/data/navigation';
import NavigationItem from './NavigationItem';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function DesktopNavigation() {
    const pathname = usePathname();

    // Extract section IDs from navigation items
    const sectionIds = mainNavigation
        .filter((item) => item.sectionId)
        .map((item) => item.sectionId!);

    // Use scroll spy to detect active section (only on homepage)
    const activeSection = useScrollSpy({
        sectionIds,
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px',
    });

    // Determine which nav item should be active based on current route
    const getActiveItem = () => {
        // If on a course detail page, activate "Course"
        if (pathname?.startsWith('/courses/')) {
            return 'courses';
        }

        // If on homepage, use scroll spy
        if (pathname === '/') {
            return activeSection;
        }

        // For other pages, match by pathname
        if (pathname?.includes('/apply')) return null;
        if (pathname?.includes('/counselling')) return null;
        if (pathname?.includes('/about')) return 'about-us';
        if (pathname?.includes('/contact')) return 'contact';

        return activeSection;
    };

    const currentActive = getActiveItem();

    // Debug: Log active section (remove in production)
    useEffect(() => {
        if (currentActive) {
            console.log('Active navigation:', currentActive);
        }
    }, [currentActive]);

    return (
        <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-2">
                {mainNavigation.map((item) => {
                    const isActive = item.sectionId === currentActive;

                    return (
                        <li key={item.label}>
                            <NavigationItem
                                label={item.label}
                                href={item.href}
                                isActive={isActive}
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

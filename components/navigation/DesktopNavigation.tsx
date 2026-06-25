'use client';

import { useEffect } from 'react';
import { mainNavigation } from '@/data/navigation';
import NavigationItem from './NavigationItem';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function DesktopNavigation() {
    // Extract section IDs from navigation items
    const sectionIds = mainNavigation
        .filter((item) => item.sectionId)
        .map((item) => item.sectionId!);

    // Use scroll spy to detect active section
    const activeSection = useScrollSpy({
        sectionIds,
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px', // Better detection when section is in middle of viewport
    });

    // Debug: Log active section (remove in production)
    useEffect(() => {
        if (activeSection) {
            console.log('Active section:', activeSection);
        }
    }, [activeSection]);

    return (
        <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-2">
                {mainNavigation.map((item) => {
                    const isActive = item.sectionId === activeSection;

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

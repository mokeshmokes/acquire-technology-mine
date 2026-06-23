'use client';

import { usePathname } from 'next/navigation';
import { mainNavigation } from '@/data/navigation';
import NavigationItem from './NavigationItem';
import CompactCoursesDropdown from './CompactCoursesDropdown';
import { useMegaMenu } from '@/hooks/useMegaMenu';

export default function DesktopNavigation() {
    const { activeMenu, isOpen, menuRef, openMenu, closeMenu } = useMegaMenu();
    const pathname = usePathname();

    return (
        <nav className="hidden lg:flex items-center" ref={menuRef}>
            <ul className="flex items-center gap-1">
                {mainNavigation.map((item) => {
                    const isActiveMenu = activeMenu === item.label;
                    const isActivePage = pathname === item.href;

                    return (
                        <li key={item.label} className="relative">
                            <NavigationItem
                                label={item.label}
                                href={item.href}
                                hasMegaMenu={item.hasMegaMenu}
                                hasDropdown={item.hasDropdown}
                                isActive={isActivePage}
                                onMouseEnter={() => {
                                    if (item.hasMegaMenu || item.hasDropdown) {
                                        openMenu(item.label);
                                    }
                                }}
                                onMouseLeave={closeMenu}
                            />

                            {item.hasMegaMenu && item.label === 'Course' && (
                                <div onMouseEnter={() => openMenu(item.label)} onMouseLeave={closeMenu}>
                                    <CompactCoursesDropdown isOpen={isActiveMenu && isOpen} />
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

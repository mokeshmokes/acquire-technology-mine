'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ChevronDown, Cpu, Database, Code2, Cloud, Shield } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { useScrollSpy } from '@/hooks/useScrollSpy';

// Mobile-only course list - simple and clean
const mobileCourses = [
    {
        title: 'AI Engineer Program',
        href: '/courses/ai-engineer',
        icon: Cpu,
    },
    {
        title: 'Data Science',
        href: '/courses/data-science',
        icon: Database,
    },
    {
        title: 'Full Stack Development',
        href: '/courses/full-stack',
        icon: Code2,
    },
    {
        title: 'Cloud Computing',
        href: '/courses/cloud-computing',
        icon: Cloud,
    },
    {
        title: 'Cyber Security',
        href: '/courses/cyber-security',
        icon: Shield,
    },
];

export default function MobileNavigation() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

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

    // Close menu function
    const closeMenu = () => {
        setIsOpen(false);
        setExpandedMenu(null);
    };

    // Handle body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const toggleMenu = (label: string) => {
        setExpandedMenu(expandedMenu === label ? null : label);
    };

    const handleLinkClick = (href: string) => {
        closeMenu();

        if (href.startsWith('#')) {
            setTimeout(() => {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const lenis = (window as any).lenis;

                    if (lenis) {
                        lenis.scrollTo(targetElement, {
                            offset: -100,
                            duration: 1.5,
                            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        });
                    } else {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                    }
                }
            }, 100);
        }
    };

    return (
        <div className="lg:hidden">
            {/* Hamburger Button - Hide when menu is open */}
            {!isOpen && (
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors relative z-50"
                    aria-label="Toggle menu"
                >
                    <Menu className="w-6 h-6 text-white" />
                </motion.button>
            )}

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="fixed inset-0 bg-black/40 z-[99998]"
                            onClick={closeMenu}
                            aria-hidden="true"
                        />

                        {/* Full Screen Menu Drawer - Slide from Right */}
                        <motion.div
                            ref={menuRef}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{
                                duration: 0.35,
                                ease: [0.32, 0.72, 0, 1],
                            }}
                            className="fixed top-0 left-0 w-full z-[99999] overflow-y-auto"
                            style={{
                                height: '100dvh',
                                background: 'rgba(8, 8, 8, 0.97)',
                                backdropFilter: 'blur(20px)',
                            }}
                        >
                            <div className="min-h-full p-6 flex flex-col">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-10">
                                    <h2 className="text-2xl font-bold text-white">Menu</h2>
                                    <button
                                        onClick={closeMenu}
                                        className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-6 h-6 text-white" />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <nav className="space-y-1 flex-1">
                                    {mainNavigation.map((item) => {
                                        const isActive = item.sectionId === currentActive;
                                        const isCourseMenu = item.label === 'Course';

                                        return (
                                            <div key={item.label}>
                                                {isCourseMenu ? (
                                                    /* Course Menu with Dropdown */
                                                    <div>
                                                        <button
                                                            onClick={() => toggleMenu(item.label)}
                                                            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all text-left ${isActive
                                                                ? 'bg-primary/20 border border-primary/40 text-white shadow-lg shadow-primary/20'
                                                                : 'hover:bg-white/5 text-white/90'
                                                                }`}
                                                        >
                                                            <span className="font-semibold text-lg">{item.label}</span>
                                                            <motion.div
                                                                animate={{ rotate: expandedMenu === item.label ? 180 : 0 }}
                                                                transition={{ duration: 0.3 }}
                                                            >
                                                                <ChevronDown className="w-5 h-5" />
                                                            </motion.div>
                                                        </button>

                                                        <AnimatePresence>
                                                            {expandedMenu === item.label && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                    className="overflow-hidden"
                                                                >
                                                                    <div className="py-2 space-y-1">
                                                                        {mobileCourses.map((course) => {
                                                                            const Icon = course.icon;
                                                                            return (
                                                                                <Link
                                                                                    key={course.title}
                                                                                    href={course.href}
                                                                                    onClick={() => handleLinkClick(course.href)}
                                                                                    className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
                                                                                >
                                                                                    <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                                                                                    <span className="text-sm text-white/90 group-hover:text-white font-medium">
                                                                                        {course.title}
                                                                                    </span>
                                                                                </Link>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ) : (
                                                    /* Regular Menu Items */
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => handleLinkClick(item.href)}
                                                        className={`flex items-center justify-between p-4 rounded-xl transition-all font-semibold text-lg ${isActive
                                                            ? 'bg-primary/20 border border-primary/40 text-white shadow-lg shadow-primary/20'
                                                            : 'hover:bg-white/5 text-white/90'
                                                            }`}
                                                    >
                                                        <span>{item.label}</span>
                                                        {isActive && (
                                                            <motion.div
                                                                initial={{ scale: 0 }}
                                                                animate={{ scale: 1 }}
                                                                className="w-2 h-2 rounded-full bg-primary"
                                                            />
                                                        )}
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </nav>

                                {/* CTA Buttons */}
                                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                                    <Link
                                        href="/#contact"
                                        onClick={closeMenu}
                                        className="block w-full text-center px-6 py-4 rounded-xl font-semibold text-white transition-all"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(199, 24, 56, 0.9) 0%, rgba(161, 14, 38, 1) 100%)',
                                            boxShadow: '0 0 30px rgba(199, 24, 56, 0.4)',
                                        }}
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

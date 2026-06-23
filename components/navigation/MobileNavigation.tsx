'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { mainNavigation, coursesMegaMenu, resourcesMegaMenu, moreMenu } from '@/data/navigation';

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const toggleMenu = (label: string) => {
        setExpandedMenu(expandedMenu === label ? null : label);
    };

    return (
        <div className="lg:hidden">
            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-surface-elevated transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-80 max-w-full glass-effect border-l border-glass z-50 overflow-y-auto"
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-xl font-bold">Menu</h2>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-surface-elevated rounded-lg transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <nav className="space-y-2">
                                    {mainNavigation.map((item) => (
                                        <div key={item.label}>
                                            {item.hasMegaMenu || item.hasDropdown ? (
                                                <div>
                                                    <button
                                                        onClick={() => toggleMenu(item.label)}
                                                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-surface-elevated transition-colors text-left"
                                                    >
                                                        <span className="font-medium">{item.label}</span>
                                                        <motion.div
                                                            animate={{ rotate: expandedMenu === item.label ? 180 : 0 }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            <ChevronDown className="w-4 h-4" />
                                                        </motion.div>
                                                    </button>

                                                    <AnimatePresence>
                                                        {expandedMenu === item.label && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pl-4 pr-2 py-2 space-y-1">
                                                                    {item.label === 'Courses' && coursesMegaMenu.map((category) => (
                                                                        <div key={category.category} className="mb-3">
                                                                            <p className="text-xs text-primary-hover font-semibold mb-2 uppercase">
                                                                                {category.category}
                                                                            </p>
                                                                            {category.items.map((subItem) => {
                                                                                const Icon = subItem.icon;
                                                                                return (
                                                                                    <Link
                                                                                        key={subItem.title}
                                                                                        href={subItem.href}
                                                                                        onClick={() => setIsOpen(false)}
                                                                                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-elevated transition-colors"
                                                                                    >
                                                                                        <Icon className="w-4 h-4 text-primary" />
                                                                                        <span className="text-sm">{subItem.title}</span>
                                                                                    </Link>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    ))}

                                                                    {item.label === 'Resources' && resourcesMegaMenu.map((category) => (
                                                                        <div key={category.category} className="mb-3">
                                                                            <p className="text-xs text-primary-hover font-semibold mb-2 uppercase">
                                                                                {category.category}
                                                                            </p>
                                                                            {category.items.map((subItem) => {
                                                                                const Icon = subItem.icon;
                                                                                return (
                                                                                    <Link
                                                                                        key={subItem.title}
                                                                                        href={subItem.href}
                                                                                        onClick={() => setIsOpen(false)}
                                                                                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-elevated transition-colors"
                                                                                    >
                                                                                        <Icon className="w-4 h-4 text-primary" />
                                                                                        <span className="text-sm">{subItem.title}</span>
                                                                                    </Link>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    ))}

                                                                    {item.label === 'More' && moreMenu.map((category) => (
                                                                        <div key={category.category} className="mb-3">
                                                                            <p className="text-xs text-primary-hover font-semibold mb-2 uppercase">
                                                                                {category.category}
                                                                            </p>
                                                                            {category.items.map((subItem) => {
                                                                                const Icon = subItem.icon;
                                                                                return (
                                                                                    <Link
                                                                                        key={subItem.title}
                                                                                        href={subItem.href}
                                                                                        onClick={() => setIsOpen(false)}
                                                                                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-surface-elevated transition-colors"
                                                                                    >
                                                                                        <Icon className="w-4 h-4 text-primary" />
                                                                                        <span className="text-sm">{subItem.title}</span>
                                                                                    </Link>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : (
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block p-3 rounded-lg hover:bg-surface-elevated transition-colors font-medium"
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </nav>

                                <div className="mt-8 space-y-3 pt-8 border-t border-border">
                                    <Link
                                        href="/apply"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors"
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
